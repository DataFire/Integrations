# @datafire/amazonaws_metering_marketplace

Client library for AWSMarketplace Metering

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_metering_marketplace
```
```js
let amazonaws_metering_marketplace = require('@datafire/amazonaws_metering_marketplace').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Marketplace Metering Service</fullname> <p>This reference provides descriptions of the low-level AWS Marketplace Metering Service API.</p> <p>AWS Marketplace sellers can use this API to submit usage data for custom usage dimensions.</p> <p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/iam-user-policy-for-aws-marketplace-actions.html">AWS Marketing metering and entitlement API permissions</a> in the <i>AWS Marketplace Seller Guide.</i> </p> <p> <b>Submitting Metering Records</b> </p> <ul> <li> <p> <i>MeterUsage</i>- Submits the metering record for a Marketplace product. MeterUsage is called from an EC2 instance or a container running on EKS or ECS.</p> </li> <li> <p> <i>BatchMeterUsage</i>- Submits the metering record for a set of customers. BatchMeterUsage is called from a software-as-a-service (SaaS) application.</p> </li> </ul> <p> <b>Accepting New Customers</b> </p> <ul> <li> <p> <i>ResolveCustomer</i>- Called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a Registration Token through the browser. The Registration Token is resolved through this API to obtain a CustomerIdentifier and Product Code.</p> </li> </ul> <p> <b>Entitlement and Metering for Paid Container Products</b> </p> <ul> <li> <p> Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the RegisterUsage operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call RegisterUsage, but you can do so if you want to receive usage data in your seller reports. For more information on using the RegisterUsage operation, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/container-based-products.html">Container-Based Products</a>. </p> </li> </ul> <p>BatchMeterUsage API calls are captured by AWS CloudTrail. You can use Cloudtrail to verify that the SaaS metering records that you sent are accurate by searching for records with the eventName of BatchMeterUsage. You can also use CloudTrail to audit records over time. For more information, see the <i> <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html">AWS CloudTrail User Guide</a> </i>.</p>

## Actions

### BatchMeterUsage



```js
amazonaws_metering_marketplace.BatchMeterUsage({
  "UsageRecords": null,
  "ProductCode": null
}, context)
```

#### Input
* input `object`
  * ProductCode **required**
  * UsageRecords **required**
    * items [UsageRecord](#usagerecord)

#### Output
* output [BatchMeterUsageResult](#batchmeterusageresult)

### MeterUsage



```js
amazonaws_metering_marketplace.MeterUsage({
  "ProductCode": null,
  "Timestamp": null,
  "UsageDimension": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * ProductCode **required**
  * Timestamp **required**
  * UsageAllocations
    * items [UsageAllocation](#usageallocation)
  * UsageDimension **required**
  * UsageQuantity

#### Output
* output [MeterUsageResult](#meterusageresult)

### RegisterUsage



```js
amazonaws_metering_marketplace.RegisterUsage({
  "ProductCode": null,
  "PublicKeyVersion": null
}, context)
```

#### Input
* input `object`
  * Nonce
  * ProductCode **required**
  * PublicKeyVersion **required**

#### Output
* output [RegisterUsageResult](#registerusageresult)

### ResolveCustomer



```js
amazonaws_metering_marketplace.ResolveCustomer({
  "RegistrationToken": null
}, context)
```

#### Input
* input `object`
  * RegistrationToken **required**

#### Output
* output [ResolveCustomerResult](#resolvecustomerresult)



## Definitions

### AllocatedUsageQuantity
* AllocatedUsageQuantity `integer`

### BatchMeterUsageRequest
* BatchMeterUsageRequest `object`: A BatchMeterUsageRequest contains UsageRecords, which indicate quantities of usage within your application.
  * ProductCode **required**
  * UsageRecords **required**
    * items [UsageRecord](#usagerecord)

### BatchMeterUsageResult
* BatchMeterUsageResult `object`: Contains the UsageRecords processed by BatchMeterUsage and any records that have failed due to transient error.
  * Results
    * items [UsageRecordResult](#usagerecordresult)
  * UnprocessedRecords
    * items [UsageRecord](#usagerecord)

### Boolean
* Boolean `boolean`

### CustomerIdentifier
* CustomerIdentifier `string`

### CustomerNotEntitledException


### DisabledApiException


### DuplicateRequestException


### ExpiredTokenException


### InternalServiceErrorException


### InvalidCustomerIdentifierException


### InvalidEndpointRegionException


### InvalidProductCodeException


### InvalidPublicKeyVersionException


### InvalidRegionException


### InvalidTagException


### InvalidTokenException


### InvalidUsageAllocationsException


### InvalidUsageDimensionException


### MeterUsageRequest
* MeterUsageRequest `object`
  * DryRun
  * ProductCode **required**
  * Timestamp **required**
  * UsageAllocations
    * items [UsageAllocation](#usageallocation)
  * UsageDimension **required**
  * UsageQuantity

### MeterUsageResult
* MeterUsageResult `object`
  * MeteringRecordId

### NonEmptyString
* NonEmptyString `string`

### Nonce
* Nonce `string`

### PlatformNotSupportedException


### ProductCode
* ProductCode `string`

### RegisterUsageRequest
* RegisterUsageRequest `object`
  * Nonce
  * ProductCode **required**
  * PublicKeyVersion **required**

### RegisterUsageResult
* RegisterUsageResult `object`
  * PublicKeyRotationTimestamp
  * Signature

### ResolveCustomerRequest
* ResolveCustomerRequest `object`: Contains input to the ResolveCustomer operation.
  * RegistrationToken **required**

### ResolveCustomerResult
* ResolveCustomerResult `object`: The result of the ResolveCustomer operation. Contains the CustomerIdentifier and product code.
  * CustomerIdentifier
  * ProductCode

### String
* String `string`

### Tag
* Tag `object`: Metadata assigned to an allocation. Each tag is made up of a key and a value.
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagValue
* TagValue `string`

### ThrottlingException


### Timestamp
* Timestamp `string`

### TimestampOutOfBoundsException


### UsageAllocation
* UsageAllocation `object`: <p>Usage allocations allow you to split usage into buckets by tags.</p> <p>Each UsageAllocation indicates the usage quantity for a specific set of tags.</p>
  * AllocatedUsageQuantity **required**
  * Tags
    * items [Tag](#tag)

### UsageAllocations
* UsageAllocations `array`
  * items [UsageAllocation](#usageallocation)

### UsageDimension
* UsageDimension `string`

### UsageQuantity
* UsageQuantity `integer`

### UsageRecord
* UsageRecord `object`: <p>A UsageRecord indicates a quantity of usage for a given product, customer, dimension and time.</p> <p>Multiple requests with the same UsageRecords as input will be deduplicated to prevent double charges.</p>
  * CustomerIdentifier **required**
  * Dimension **required**
  * Quantity
  * Timestamp **required**
  * UsageAllocations
    * items [UsageAllocation](#usageallocation)

### UsageRecordList
* UsageRecordList `array`
  * items [UsageRecord](#usagerecord)

### UsageRecordResult
* UsageRecordResult `object`: A UsageRecordResult indicates the status of a given UsageRecord processed by BatchMeterUsage.
  * MeteringRecordId
  * Status
  * UsageRecord
    * CustomerIdentifier **required**
    * Dimension **required**
    * Quantity
    * Timestamp **required**
    * UsageAllocations
      * items [UsageAllocation](#usageallocation)

### UsageRecordResultList
* UsageRecordResultList `array`
  * items [UsageRecordResult](#usagerecordresult)

### UsageRecordResultStatus
* UsageRecordResultStatus `string` (values: Success, CustomerNotSubscribed, DuplicateRecord)

### VersionInteger
* VersionInteger `integer`


