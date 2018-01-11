# @datafire/amazonaws_cloudhsm

Client library for Amazon CloudHSM

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_cloudhsm
```
```js
let amazonaws_cloudhsm = require('@datafire/amazonaws_cloudhsm').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_cloudhsm.AddTagsToResource({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>AWS CloudHSM Service</fullname> <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p>

## Actions

### AddTagsToResource



```js
amazonaws_cloudhsm.AddTagsToResource({
  "ResourceArn": "",
  "TagList": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** [String](#string)
  * TagList **required** [TagList](#taglist)

#### Output
* output [AddTagsToResourceResponse](#addtagstoresourceresponse)

### CreateHapg



```js
amazonaws_cloudhsm.CreateHapg({
  "Label": ""
}, context)
```

#### Input
* input `object`
  * Label **required** [Label](#label)

#### Output
* output [CreateHapgResponse](#createhapgresponse)

### CreateHsm



```js
amazonaws_cloudhsm.CreateHsm({
  "SubnetId": "",
  "SshKey": "",
  "IamRoleArn": "",
  "SubscriptionType": ""
}, context)
```

#### Input
* input `object`
  * ClientToken [ClientToken](#clienttoken)
  * EniIp [IpAddress](#ipaddress)
  * ExternalId [ExternalId](#externalid)
  * IamRoleArn **required** [IamRoleArn](#iamrolearn)
  * SshKey **required** [SshKey](#sshkey)
  * SubnetId **required** [SubnetId](#subnetid)
  * SubscriptionType **required** [SubscriptionType](#subscriptiontype)
  * SyslogIp [IpAddress](#ipaddress)

#### Output
* output [CreateHsmResponse](#createhsmresponse)

### CreateLunaClient



```js
amazonaws_cloudhsm.CreateLunaClient({
  "Certificate": ""
}, context)
```

#### Input
* input `object`
  * Certificate **required** [Certificate](#certificate)
  * Label [ClientLabel](#clientlabel)

#### Output
* output [CreateLunaClientResponse](#createlunaclientresponse)

### DeleteHapg



```js
amazonaws_cloudhsm.DeleteHapg({
  "HapgArn": ""
}, context)
```

#### Input
* input `object`
  * HapgArn **required** [HapgArn](#hapgarn)

#### Output
* output [DeleteHapgResponse](#deletehapgresponse)

### DeleteHsm



```js
amazonaws_cloudhsm.DeleteHsm({
  "HsmArn": ""
}, context)
```

#### Input
* input `object`
  * HsmArn **required** [HsmArn](#hsmarn)

#### Output
* output [DeleteHsmResponse](#deletehsmresponse)

### DeleteLunaClient



```js
amazonaws_cloudhsm.DeleteLunaClient({
  "ClientArn": ""
}, context)
```

#### Input
* input `object`
  * ClientArn **required** [ClientArn](#clientarn)

#### Output
* output [DeleteLunaClientResponse](#deletelunaclientresponse)

### DescribeHapg



```js
amazonaws_cloudhsm.DescribeHapg({
  "HapgArn": ""
}, context)
```

#### Input
* input `object`
  * HapgArn **required** [HapgArn](#hapgarn)

#### Output
* output [DescribeHapgResponse](#describehapgresponse)

### DescribeHsm



```js
amazonaws_cloudhsm.DescribeHsm({}, context)
```

#### Input
* input `object`
  * HsmArn [HsmArn](#hsmarn)
  * HsmSerialNumber [HsmSerialNumber](#hsmserialnumber)

#### Output
* output [DescribeHsmResponse](#describehsmresponse)

### DescribeLunaClient



```js
amazonaws_cloudhsm.DescribeLunaClient({}, context)
```

#### Input
* input `object`
  * CertificateFingerprint [CertificateFingerprint](#certificatefingerprint)
  * ClientArn [ClientArn](#clientarn)

#### Output
* output [DescribeLunaClientResponse](#describelunaclientresponse)

### GetConfig



```js
amazonaws_cloudhsm.GetConfig({
  "ClientArn": "",
  "ClientVersion": "",
  "HapgList": []
}, context)
```

#### Input
* input `object`
  * ClientArn **required** [ClientArn](#clientarn)
  * ClientVersion **required** [ClientVersion](#clientversion)
  * HapgList **required** [HapgList](#hapglist)

#### Output
* output [GetConfigResponse](#getconfigresponse)

### ListAvailableZones



```js
amazonaws_cloudhsm.ListAvailableZones({}, context)
```

#### Input
* input `object`

#### Output
* output [ListAvailableZonesResponse](#listavailablezonesresponse)

### ListHapgs



```js
amazonaws_cloudhsm.ListHapgs({}, context)
```

#### Input
* input `object`
  * NextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListHapgsResponse](#listhapgsresponse)

### ListHsms



```js
amazonaws_cloudhsm.ListHsms({}, context)
```

#### Input
* input `object`
  * NextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListHsmsResponse](#listhsmsresponse)

### ListLunaClients



```js
amazonaws_cloudhsm.ListLunaClients({}, context)
```

#### Input
* input `object`
  * NextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListLunaClientsResponse](#listlunaclientsresponse)

### ListTagsForResource



```js
amazonaws_cloudhsm.ListTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** [String](#string)

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ModifyHapg



```js
amazonaws_cloudhsm.ModifyHapg({
  "HapgArn": ""
}, context)
```

#### Input
* input `object`
  * HapgArn **required** [HapgArn](#hapgarn)
  * Label [Label](#label)
  * PartitionSerialList [PartitionSerialList](#partitionseriallist)

#### Output
* output [ModifyHapgResponse](#modifyhapgresponse)

### ModifyHsm



```js
amazonaws_cloudhsm.ModifyHsm({
  "HsmArn": ""
}, context)
```

#### Input
* input `object`
  * EniIp [IpAddress](#ipaddress)
  * ExternalId [ExternalId](#externalid)
  * HsmArn **required** [HsmArn](#hsmarn)
  * IamRoleArn [IamRoleArn](#iamrolearn)
  * SubnetId [SubnetId](#subnetid)
  * SyslogIp [IpAddress](#ipaddress)

#### Output
* output [ModifyHsmResponse](#modifyhsmresponse)

### ModifyLunaClient



```js
amazonaws_cloudhsm.ModifyLunaClient({
  "ClientArn": "",
  "Certificate": ""
}, context)
```

#### Input
* input `object`
  * Certificate **required** [Certificate](#certificate)
  * ClientArn **required** [ClientArn](#clientarn)

#### Output
* output [ModifyLunaClientResponse](#modifylunaclientresponse)

### RemoveTagsFromResource



```js
amazonaws_cloudhsm.RemoveTagsFromResource({
  "ResourceArn": "",
  "TagKeyList": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** [String](#string)
  * TagKeyList **required** [TagKeyList](#tagkeylist)

#### Output
* output [RemoveTagsFromResourceResponse](#removetagsfromresourceresponse)



## Definitions

### AZ
* AZ `string`

### AZList
* AZList `array`
  * items [AZ](#az)

### AddTagsToResourceRequest
* AddTagsToResourceRequest `object`
  * ResourceArn **required** [String](#string)
  * TagList **required** [TagList](#taglist)

### AddTagsToResourceResponse
* AddTagsToResourceResponse `object`
  * Status **required** [String](#string)

### Boolean
* Boolean `boolean`

### Certificate
* Certificate `string`

### CertificateFingerprint
* CertificateFingerprint `string`

### ClientArn
* ClientArn `string`

### ClientLabel
* ClientLabel `string`

### ClientList
* ClientList `array`
  * items [ClientArn](#clientarn)

### ClientToken
* ClientToken `string`

### ClientVersion
* ClientVersion `string` (values: 5.1, 5.3)

### CloudHsmInternalException
* CloudHsmInternalException `object`: Indicates that an internal error occurred.

### CloudHsmObjectState
* CloudHsmObjectState `string` (values: READY, UPDATING, DEGRADED)

### CloudHsmServiceException
* CloudHsmServiceException `object`: Indicates that an exception occurred in the AWS CloudHSM service.
  * message [String](#string)
  * retryable [Boolean](#boolean)

### CreateHapgRequest
* CreateHapgRequest `object`: Contains the inputs for the <a>CreateHapgRequest</a> action.
  * Label **required** [Label](#label)

### CreateHapgResponse
* CreateHapgResponse `object`: Contains the output of the <a>CreateHAPartitionGroup</a> action.
  * HapgArn [HapgArn](#hapgarn)

### CreateHsmRequest
* CreateHsmRequest `object`: Contains the inputs for the <code>CreateHsm</code> operation.
  * ClientToken [ClientToken](#clienttoken)
  * EniIp [IpAddress](#ipaddress)
  * ExternalId [ExternalId](#externalid)
  * IamRoleArn **required** [IamRoleArn](#iamrolearn)
  * SshKey **required** [SshKey](#sshkey)
  * SubnetId **required** [SubnetId](#subnetid)
  * SubscriptionType **required** [SubscriptionType](#subscriptiontype)
  * SyslogIp [IpAddress](#ipaddress)

### CreateHsmResponse
* CreateHsmResponse `object`: Contains the output of the <code>CreateHsm</code> operation.
  * HsmArn [HsmArn](#hsmarn)

### CreateLunaClientRequest
* CreateLunaClientRequest `object`: Contains the inputs for the <a>CreateLunaClient</a> action.
  * Certificate **required** [Certificate](#certificate)
  * Label [ClientLabel](#clientlabel)

### CreateLunaClientResponse
* CreateLunaClientResponse `object`: Contains the output of the <a>CreateLunaClient</a> action.
  * ClientArn [ClientArn](#clientarn)

### DeleteHapgRequest
* DeleteHapgRequest `object`: Contains the inputs for the <a>DeleteHapg</a> action.
  * HapgArn **required** [HapgArn](#hapgarn)

### DeleteHapgResponse
* DeleteHapgResponse `object`: Contains the output of the <a>DeleteHapg</a> action.
  * Status **required** [String](#string)

### DeleteHsmRequest
* DeleteHsmRequest `object`: Contains the inputs for the <a>DeleteHsm</a> operation.
  * HsmArn **required** [HsmArn](#hsmarn)

### DeleteHsmResponse
* DeleteHsmResponse `object`: Contains the output of the <a>DeleteHsm</a> operation.
  * Status **required** [String](#string)

### DeleteLunaClientRequest
* DeleteLunaClientRequest `object`
  * ClientArn **required** [ClientArn](#clientarn)

### DeleteLunaClientResponse
* DeleteLunaClientResponse `object`
  * Status **required** [String](#string)

### DescribeHapgRequest
* DescribeHapgRequest `object`: Contains the inputs for the <a>DescribeHapg</a> action.
  * HapgArn **required** [HapgArn](#hapgarn)

### DescribeHapgResponse
* DescribeHapgResponse `object`: Contains the output of the <a>DescribeHapg</a> action.
  * HapgArn [HapgArn](#hapgarn)
  * HapgSerial [String](#string)
  * HsmsLastActionFailed [HsmList](#hsmlist)
  * HsmsPendingDeletion [HsmList](#hsmlist)
  * HsmsPendingRegistration [HsmList](#hsmlist)
  * Label [Label](#label)
  * LastModifiedTimestamp [Timestamp](#timestamp)
  * PartitionSerialList [PartitionSerialList](#partitionseriallist)
  * State [CloudHsmObjectState](#cloudhsmobjectstate)

### DescribeHsmRequest
* DescribeHsmRequest `object`: Contains the inputs for the <a>DescribeHsm</a> operation.
  * HsmArn [HsmArn](#hsmarn)
  * HsmSerialNumber [HsmSerialNumber](#hsmserialnumber)

### DescribeHsmResponse
* DescribeHsmResponse `object`: Contains the output of the <a>DescribeHsm</a> operation.
  * AvailabilityZone [AZ](#az)
  * EniId [EniId](#eniid)
  * EniIp [IpAddress](#ipaddress)
  * HsmArn [HsmArn](#hsmarn)
  * HsmType [String](#string)
  * IamRoleArn [IamRoleArn](#iamrolearn)
  * Partitions [PartitionList](#partitionlist)
  * SerialNumber [HsmSerialNumber](#hsmserialnumber)
  * ServerCertLastUpdated [Timestamp](#timestamp)
  * ServerCertUri [String](#string)
  * SoftwareVersion [String](#string)
  * SshKeyLastUpdated [Timestamp](#timestamp)
  * SshPublicKey [SshKey](#sshkey)
  * Status [HsmStatus](#hsmstatus)
  * StatusDetails [String](#string)
  * SubnetId [SubnetId](#subnetid)
  * SubscriptionEndDate [Timestamp](#timestamp)
  * SubscriptionStartDate [Timestamp](#timestamp)
  * SubscriptionType [SubscriptionType](#subscriptiontype)
  * VendorName [String](#string)
  * VpcId [VpcId](#vpcid)

### DescribeLunaClientRequest
* DescribeLunaClientRequest `object`
  * CertificateFingerprint [CertificateFingerprint](#certificatefingerprint)
  * ClientArn [ClientArn](#clientarn)

### DescribeLunaClientResponse
* DescribeLunaClientResponse `object`
  * Certificate [Certificate](#certificate)
  * CertificateFingerprint [CertificateFingerprint](#certificatefingerprint)
  * ClientArn [ClientArn](#clientarn)
  * Label [Label](#label)
  * LastModifiedTimestamp [Timestamp](#timestamp)

### EniId
* EniId `string`

### ExternalId
* ExternalId `string`

### GetConfigRequest
* GetConfigRequest `object`
  * ClientArn **required** [ClientArn](#clientarn)
  * ClientVersion **required** [ClientVersion](#clientversion)
  * HapgList **required** [HapgList](#hapglist)

### GetConfigResponse
* GetConfigResponse `object`
  * ConfigCred [String](#string)
  * ConfigFile [String](#string)
  * ConfigType [String](#string)

### HapgArn
* HapgArn `string`

### HapgList
* HapgList `array`
  * items [HapgArn](#hapgarn)

### HsmArn
* HsmArn `string`: An ARN that identifies an HSM.

### HsmList
* HsmList `array`: Contains a list of ARNs that identify the HSMs.
  * items [HsmArn](#hsmarn)

### HsmSerialNumber
* HsmSerialNumber `string`

### HsmStatus
* HsmStatus `string` (values: PENDING, RUNNING, UPDATING, SUSPENDED, TERMINATING, TERMINATED, DEGRADED)

### IamRoleArn
* IamRoleArn `string`

### InvalidRequestException
* InvalidRequestException `object`: Indicates that one or more of the request parameters are not valid.

### IpAddress
* IpAddress `string`

### Label
* Label `string`

### ListAvailableZonesRequest
* ListAvailableZonesRequest `object`: Contains the inputs for the <a>ListAvailableZones</a> action.

### ListAvailableZonesResponse
* ListAvailableZonesResponse `object`
  * AZList [AZList](#azlist)

### ListHapgsRequest
* ListHapgsRequest `object`
  * NextToken [PaginationToken](#paginationtoken)

### ListHapgsResponse
* ListHapgsResponse `object`
  * HapgList **required** [HapgList](#hapglist)
  * NextToken [PaginationToken](#paginationtoken)

### ListHsmsRequest
* ListHsmsRequest `object`
  * NextToken [PaginationToken](#paginationtoken)

### ListHsmsResponse
* ListHsmsResponse `object`: Contains the output of the <code>ListHsms</code> operation.
  * HsmList [HsmList](#hsmlist)
  * NextToken [PaginationToken](#paginationtoken)

### ListLunaClientsRequest
* ListLunaClientsRequest `object`
  * NextToken [PaginationToken](#paginationtoken)

### ListLunaClientsResponse
* ListLunaClientsResponse `object`
  * ClientList **required** [ClientList](#clientlist)
  * NextToken [PaginationToken](#paginationtoken)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceArn **required** [String](#string)

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * TagList **required** [TagList](#taglist)

### ModifyHapgRequest
* ModifyHapgRequest `object`
  * HapgArn **required** [HapgArn](#hapgarn)
  * Label [Label](#label)
  * PartitionSerialList [PartitionSerialList](#partitionseriallist)

### ModifyHapgResponse
* ModifyHapgResponse `object`
  * HapgArn [HapgArn](#hapgarn)

### ModifyHsmRequest
* ModifyHsmRequest `object`: Contains the inputs for the <a>ModifyHsm</a> operation.
  * EniIp [IpAddress](#ipaddress)
  * ExternalId [ExternalId](#externalid)
  * HsmArn **required** [HsmArn](#hsmarn)
  * IamRoleArn [IamRoleArn](#iamrolearn)
  * SubnetId [SubnetId](#subnetid)
  * SyslogIp [IpAddress](#ipaddress)

### ModifyHsmResponse
* ModifyHsmResponse `object`: Contains the output of the <a>ModifyHsm</a> operation.
  * HsmArn [HsmArn](#hsmarn)

### ModifyLunaClientRequest
* ModifyLunaClientRequest `object`
  * Certificate **required** [Certificate](#certificate)
  * ClientArn **required** [ClientArn](#clientarn)

### ModifyLunaClientResponse
* ModifyLunaClientResponse `object`
  * ClientArn [ClientArn](#clientarn)

### PaginationToken
* PaginationToken `string`

### PartitionArn
* PartitionArn `string`

### PartitionList
* PartitionList `array`
  * items [PartitionArn](#partitionarn)

### PartitionSerial
* PartitionSerial `string`

### PartitionSerialList
* PartitionSerialList `array`
  * items [PartitionSerial](#partitionserial)

### RemoveTagsFromResourceRequest
* RemoveTagsFromResourceRequest `object`
  * ResourceArn **required** [String](#string)
  * TagKeyList **required** [TagKeyList](#tagkeylist)

### RemoveTagsFromResourceResponse
* RemoveTagsFromResourceResponse `object`
  * Status **required** [String](#string)

### SshKey
* SshKey `string`

### String
* String `string`

### SubnetId
* SubnetId `string`

### SubscriptionType
* SubscriptionType `string` (values: PRODUCTION): <p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul>

### Tag
* Tag `object`: A key-value pair that identifies or specifies metadata about an AWS CloudHSM resource.
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

### TagValue
* TagValue `string`

### Timestamp
* Timestamp `string`

### VpcId
* VpcId `string`


