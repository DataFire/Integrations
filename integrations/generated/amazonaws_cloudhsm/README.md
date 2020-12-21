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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS CloudHSM Service</fullname> <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p>

## Actions

### AddTagsToResource



```js
amazonaws_cloudhsm.AddTagsToResource({
  "ResourceArn": null,
  "TagList": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagList **required**
    * items [Tag](#tag)

#### Output
* output [AddTagsToResourceResponse](#addtagstoresourceresponse)

### CreateHapg



```js
amazonaws_cloudhsm.CreateHapg({
  "Label": null
}, context)
```

#### Input
* input `object`
  * Label **required**

#### Output
* output [CreateHapgResponse](#createhapgresponse)

### CreateHsm



```js
amazonaws_cloudhsm.CreateHsm({
  "SubnetId": null,
  "SshKey": null,
  "IamRoleArn": null,
  "SubscriptionType": ""
}, context)
```

#### Input
* input `object`
  * ClientToken
  * EniIp
  * ExternalId
  * IamRoleArn **required**
  * SshKey **required**
  * SubnetId **required**
  * SubscriptionType **required** [SubscriptionType](#subscriptiontype)
  * SyslogIp

#### Output
* output [CreateHsmResponse](#createhsmresponse)

### CreateLunaClient



```js
amazonaws_cloudhsm.CreateLunaClient({
  "Certificate": null
}, context)
```

#### Input
* input `object`
  * Certificate **required**
  * Label

#### Output
* output [CreateLunaClientResponse](#createlunaclientresponse)

### DeleteHapg



```js
amazonaws_cloudhsm.DeleteHapg({
  "HapgArn": null
}, context)
```

#### Input
* input `object`
  * HapgArn **required**

#### Output
* output [DeleteHapgResponse](#deletehapgresponse)

### DeleteHsm



```js
amazonaws_cloudhsm.DeleteHsm({
  "HsmArn": null
}, context)
```

#### Input
* input `object`
  * HsmArn **required**

#### Output
* output [DeleteHsmResponse](#deletehsmresponse)

### DeleteLunaClient



```js
amazonaws_cloudhsm.DeleteLunaClient({
  "ClientArn": null
}, context)
```

#### Input
* input `object`
  * ClientArn **required**

#### Output
* output [DeleteLunaClientResponse](#deletelunaclientresponse)

### DescribeHapg



```js
amazonaws_cloudhsm.DescribeHapg({
  "HapgArn": null
}, context)
```

#### Input
* input `object`
  * HapgArn **required**

#### Output
* output [DescribeHapgResponse](#describehapgresponse)

### DescribeHsm



```js
amazonaws_cloudhsm.DescribeHsm({}, context)
```

#### Input
* input `object`
  * HsmArn
  * HsmSerialNumber

#### Output
* output [DescribeHsmResponse](#describehsmresponse)

### DescribeLunaClient



```js
amazonaws_cloudhsm.DescribeLunaClient({}, context)
```

#### Input
* input `object`
  * CertificateFingerprint
  * ClientArn

#### Output
* output [DescribeLunaClientResponse](#describelunaclientresponse)

### GetConfig



```js
amazonaws_cloudhsm.GetConfig({
  "ClientArn": null,
  "ClientVersion": null,
  "HapgList": null
}, context)
```

#### Input
* input `object`
  * ClientArn **required**
  * ClientVersion **required**
  * HapgList **required**
    * items [HapgArn](#hapgarn)

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
  * NextToken

#### Output
* output [ListHapgsResponse](#listhapgsresponse)

### ListHsms



```js
amazonaws_cloudhsm.ListHsms({}, context)
```

#### Input
* input `object`
  * NextToken

#### Output
* output [ListHsmsResponse](#listhsmsresponse)

### ListLunaClients



```js
amazonaws_cloudhsm.ListLunaClients({}, context)
```

#### Input
* input `object`
  * NextToken

#### Output
* output [ListLunaClientsResponse](#listlunaclientsresponse)

### ListTagsForResource



```js
amazonaws_cloudhsm.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ModifyHapg



```js
amazonaws_cloudhsm.ModifyHapg({
  "HapgArn": null
}, context)
```

#### Input
* input `object`
  * HapgArn **required**
  * Label
  * PartitionSerialList
    * items [PartitionSerial](#partitionserial)

#### Output
* output [ModifyHapgResponse](#modifyhapgresponse)

### ModifyHsm



```js
amazonaws_cloudhsm.ModifyHsm({
  "HsmArn": null
}, context)
```

#### Input
* input `object`
  * EniIp
  * ExternalId
  * HsmArn **required**
  * IamRoleArn
  * SubnetId
  * SyslogIp

#### Output
* output [ModifyHsmResponse](#modifyhsmresponse)

### ModifyLunaClient



```js
amazonaws_cloudhsm.ModifyLunaClient({
  "ClientArn": null,
  "Certificate": null
}, context)
```

#### Input
* input `object`
  * Certificate **required**
  * ClientArn **required**

#### Output
* output [ModifyLunaClientResponse](#modifylunaclientresponse)

### RemoveTagsFromResource



```js
amazonaws_cloudhsm.RemoveTagsFromResource({
  "ResourceArn": null,
  "TagKeyList": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagKeyList **required**
    * items [TagKey](#tagkey)

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
  * ResourceArn **required**
  * TagList **required**
    * items [Tag](#tag)

### AddTagsToResourceResponse
* AddTagsToResourceResponse `object`
  * Status **required**

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
  * message
  * retryable

### CreateHapgRequest
* CreateHapgRequest `object`: Contains the inputs for the <a>CreateHapgRequest</a> action.
  * Label **required**

### CreateHapgResponse
* CreateHapgResponse `object`: Contains the output of the <a>CreateHAPartitionGroup</a> action.
  * HapgArn

### CreateHsmRequest
* CreateHsmRequest `object`: Contains the inputs for the <code>CreateHsm</code> operation.
  * ClientToken
  * EniIp
  * ExternalId
  * IamRoleArn **required**
  * SshKey **required**
  * SubnetId **required**
  * SubscriptionType **required** [SubscriptionType](#subscriptiontype)
  * SyslogIp

### CreateHsmResponse
* CreateHsmResponse `object`: Contains the output of the <code>CreateHsm</code> operation.
  * HsmArn

### CreateLunaClientRequest
* CreateLunaClientRequest `object`: Contains the inputs for the <a>CreateLunaClient</a> action.
  * Certificate **required**
  * Label

### CreateLunaClientResponse
* CreateLunaClientResponse `object`: Contains the output of the <a>CreateLunaClient</a> action.
  * ClientArn

### DeleteHapgRequest
* DeleteHapgRequest `object`: Contains the inputs for the <a>DeleteHapg</a> action.
  * HapgArn **required**

### DeleteHapgResponse
* DeleteHapgResponse `object`: Contains the output of the <a>DeleteHapg</a> action.
  * Status **required**

### DeleteHsmRequest
* DeleteHsmRequest `object`: Contains the inputs for the <a>DeleteHsm</a> operation.
  * HsmArn **required**

### DeleteHsmResponse
* DeleteHsmResponse `object`: Contains the output of the <a>DeleteHsm</a> operation.
  * Status **required**

### DeleteLunaClientRequest
* DeleteLunaClientRequest `object`
  * ClientArn **required**

### DeleteLunaClientResponse
* DeleteLunaClientResponse `object`
  * Status **required**

### DescribeHapgRequest
* DescribeHapgRequest `object`: Contains the inputs for the <a>DescribeHapg</a> action.
  * HapgArn **required**

### DescribeHapgResponse
* DescribeHapgResponse `object`: Contains the output of the <a>DescribeHapg</a> action.
  * HapgArn
  * HapgSerial
  * HsmsLastActionFailed
    * items [HsmArn](#hsmarn)
  * HsmsPendingDeletion
    * items [HsmArn](#hsmarn)
  * HsmsPendingRegistration
    * items [HsmArn](#hsmarn)
  * Label
  * LastModifiedTimestamp
  * PartitionSerialList
    * items [PartitionSerial](#partitionserial)
  * State

### DescribeHsmRequest
* DescribeHsmRequest `object`: Contains the inputs for the <a>DescribeHsm</a> operation.
  * HsmArn
  * HsmSerialNumber

### DescribeHsmResponse
* DescribeHsmResponse `object`: Contains the output of the <a>DescribeHsm</a> operation.
  * AvailabilityZone
  * EniId
  * EniIp
  * HsmArn
  * HsmType
  * IamRoleArn
  * Partitions
    * items [PartitionArn](#partitionarn)
  * SerialNumber
  * ServerCertLastUpdated
  * ServerCertUri
  * SoftwareVersion
  * SshKeyLastUpdated
  * SshPublicKey
  * Status
  * StatusDetails
  * SubnetId
  * SubscriptionEndDate
  * SubscriptionStartDate
  * SubscriptionType [SubscriptionType](#subscriptiontype)
  * VendorName
  * VpcId

### DescribeLunaClientRequest
* DescribeLunaClientRequest `object`
  * CertificateFingerprint
  * ClientArn

### DescribeLunaClientResponse
* DescribeLunaClientResponse `object`
  * Certificate
  * CertificateFingerprint
  * ClientArn
  * Label
  * LastModifiedTimestamp

### EniId
* EniId `string`

### ExternalId
* ExternalId `string`

### GetConfigRequest
* GetConfigRequest `object`
  * ClientArn **required**
  * ClientVersion **required**
  * HapgList **required**
    * items [HapgArn](#hapgarn)

### GetConfigResponse
* GetConfigResponse `object`
  * ConfigCred
  * ConfigFile
  * ConfigType

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
  * AZList
    * items [AZ](#az)

### ListHapgsRequest
* ListHapgsRequest `object`
  * NextToken

### ListHapgsResponse
* ListHapgsResponse `object`
  * HapgList **required**
    * items [HapgArn](#hapgarn)
  * NextToken

### ListHsmsRequest
* ListHsmsRequest `object`
  * NextToken

### ListHsmsResponse
* ListHsmsResponse `object`: Contains the output of the <code>ListHsms</code> operation.
  * HsmList
    * items [HsmArn](#hsmarn)
  * NextToken

### ListLunaClientsRequest
* ListLunaClientsRequest `object`
  * NextToken

### ListLunaClientsResponse
* ListLunaClientsResponse `object`
  * ClientList **required**
    * items [ClientArn](#clientarn)
  * NextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * TagList **required**
    * items [Tag](#tag)

### ModifyHapgRequest
* ModifyHapgRequest `object`
  * HapgArn **required**
  * Label
  * PartitionSerialList
    * items [PartitionSerial](#partitionserial)

### ModifyHapgResponse
* ModifyHapgResponse `object`
  * HapgArn

### ModifyHsmRequest
* ModifyHsmRequest `object`: Contains the inputs for the <a>ModifyHsm</a> operation.
  * EniIp
  * ExternalId
  * HsmArn **required**
  * IamRoleArn
  * SubnetId
  * SyslogIp

### ModifyHsmResponse
* ModifyHsmResponse `object`: Contains the output of the <a>ModifyHsm</a> operation.
  * HsmArn

### ModifyLunaClientRequest
* ModifyLunaClientRequest `object`
  * Certificate **required**
  * ClientArn **required**

### ModifyLunaClientResponse
* ModifyLunaClientResponse `object`
  * ClientArn

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
  * ResourceArn **required**
  * TagKeyList **required**
    * items [TagKey](#tagkey)

### RemoveTagsFromResourceResponse
* RemoveTagsFromResourceResponse `object`
  * Status **required**

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

### TagValue
* TagValue `string`

### Timestamp
* Timestamp `string`

### VpcId
* VpcId `string`


