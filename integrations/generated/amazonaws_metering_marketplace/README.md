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

amazonaws_metering_marketplace.BatchMeterUsage({
  "UsageRecords": [],
  "ProductCode": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Marketplace Metering Service</fullname> <p>This reference provides descriptions of the low-level AWS Marketplace Metering Service API.</p> <p>AWS Marketplace sellers can use this API to submit usage data for custom usage dimensions.</p> <p> <b>Submitting Metering Records</b> </p> <ul> <li> <p> <i>MeterUsage</i>- Submits the metering record for a Marketplace product. MeterUsage is called from an EC2 instance.</p> </li> <li> <p> <i>BatchMeterUsage</i>- Submits the metering record for a set of customers. BatchMeterUsage is called from a software-as-a-service (SaaS) application.</p> </li> </ul> <p> <b>Accepting New Customers</b> </p> <ul> <li> <p> <i>ResolveCustomer</i>- Called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a Registration Token through the browser. The Registration Token is resolved through this API to obtain a CustomerIdentifier and Product Code.</p> </li> </ul>

## Actions

### BatchMeterUsage



```js
amazonaws_metering_marketplace.BatchMeterUsage({
  "UsageRecords": [],
  "ProductCode": ""
}, context)
```

#### Input
* input `object`
  * ProductCode **required** [ProductCode](#productcode)
  * UsageRecords **required** [UsageRecordList](#usagerecordlist)

#### Output
* output [BatchMeterUsageResult](#batchmeterusageresult)

### MeterUsage



```js
amazonaws_metering_marketplace.MeterUsage({
  "ProductCode": "",
  "Timestamp": "",
  "UsageDimension": "",
  "UsageQuantity": 0,
  "DryRun": true
}, context)
```

#### Input
* input `object`
  * DryRun **required** [Boolean](#boolean)
  * ProductCode **required** [ProductCode](#productcode)
  * Timestamp **required** [Timestamp](#timestamp)
  * UsageDimension **required** [UsageDimension](#usagedimension)
  * UsageQuantity **required** [UsageQuantity](#usagequantity)

#### Output
* output [MeterUsageResult](#meterusageresult)

### ResolveCustomer



```js
amazonaws_metering_marketplace.ResolveCustomer({
  "RegistrationToken": ""
}, context)
```

#### Input
* input `object`
  * RegistrationToken **required** [NonEmptyString](#nonemptystring)

#### Output
* output [ResolveCustomerResult](#resolvecustomerresult)



## Definitions

### BatchMeterUsageRequest
* BatchMeterUsageRequest `object`: A BatchMeterUsageRequest contains UsageRecords, which indicate quantities of usage within your application.
  * ProductCode **required** [ProductCode](#productcode)
  * UsageRecords **required** [UsageRecordList](#usagerecordlist)

### BatchMeterUsageResult
* BatchMeterUsageResult `object`: Contains the UsageRecords processed by BatchMeterUsage and any records that have failed due to transient error.
  * Results [UsageRecordResultList](#usagerecordresultlist)
  * UnprocessedRecords [UsageRecordList](#usagerecordlist)

### Boolean
* Boolean `boolean`

### CustomerIdentifier
* CustomerIdentifier `string`

### DuplicateRequestException
* DuplicateRequestException `object`: A metering record has already been emitted by the same EC2 instance for the given {usageDimension, timestamp} with a different usageQuantity.
  * message [errorMessage](#errormessage)

### ExpiredTokenException
* ExpiredTokenException `object`: The submitted registration token has expired. This can happen if the buyer's browser takes too long to redirect to your page, the buyer has resubmitted the registration token, or your application has held on to the registration token for too long. Your SaaS registration website should redeem this token as soon as it is submitted by the buyer's browser.
  * message [errorMessage](#errormessage)

### InternalServiceErrorException
* InternalServiceErrorException `object`: An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums.
  * message [errorMessage](#errormessage)

### InvalidCustomerIdentifierException
* InvalidCustomerIdentifierException `object`: You have metered usage for a CustomerIdentifier that does not exist.
  * message [errorMessage](#errormessage)

### InvalidEndpointRegionException
* InvalidEndpointRegionException `object`: The endpoint being called is in a region different from your EC2 instance. The region of the Metering service endpoint and the region of the EC2 instance must match.
  * message [errorMessage](#errormessage)

### InvalidProductCodeException
* InvalidProductCodeException `object`: The product code passed does not match the product code used for publishing the product.
  * message [errorMessage](#errormessage)

### InvalidTokenException
* InvalidTokenException `object`
  * message [errorMessage](#errormessage)

### InvalidUsageDimensionException
* InvalidUsageDimensionException `object`: The usage dimension does not match one of the UsageDimensions associated with products.
  * message [errorMessage](#errormessage)

### MeterUsageRequest
* MeterUsageRequest `object`
  * DryRun **required** [Boolean](#boolean)
  * ProductCode **required** [ProductCode](#productcode)
  * Timestamp **required** [Timestamp](#timestamp)
  * UsageDimension **required** [UsageDimension](#usagedimension)
  * UsageQuantity **required** [UsageQuantity](#usagequantity)

### MeterUsageResult
* MeterUsageResult `object`
  * MeteringRecordId [String](#string)

### NonEmptyString
* NonEmptyString `string`

### ProductCode
* ProductCode `string`

### ResolveCustomerRequest
* ResolveCustomerRequest `object`: Contains input to the ResolveCustomer operation.
  * RegistrationToken **required** [NonEmptyString](#nonemptystring)

### ResolveCustomerResult
* ResolveCustomerResult `object`: The result of the ResolveCustomer operation. Contains the CustomerIdentifier and product code.
  * CustomerIdentifier [CustomerIdentifier](#customeridentifier)
  * ProductCode [ProductCode](#productcode)

### String
* String `string`

### ThrottlingException
* ThrottlingException `object`: The calls to the MeterUsage API are throttled.
  * message [errorMessage](#errormessage)

### Timestamp
* Timestamp `string`

### TimestampOutOfBoundsException
* TimestampOutOfBoundsException `object`: The timestamp value passed in the meterUsage() is out of allowed range.
  * message [errorMessage](#errormessage)

### UsageDimension
* UsageDimension `string`

### UsageQuantity
* UsageQuantity `integer`

### UsageRecord
* UsageRecord `object`: <p>A UsageRecord indicates a quantity of usage for a given product, customer, dimension and time.</p> <p>Multiple requests with the same UsageRecords as input will be deduplicated to prevent double charges.</p>
  * CustomerIdentifier **required** [CustomerIdentifier](#customeridentifier)
  * Dimension **required** [UsageDimension](#usagedimension)
  * Quantity **required** [UsageQuantity](#usagequantity)
  * Timestamp **required** [Timestamp](#timestamp)

### UsageRecordList
* UsageRecordList `array`
  * items [UsageRecord](#usagerecord)

### UsageRecordResult
* UsageRecordResult `object`: A UsageRecordResult indicates the status of a given UsageRecord processed by BatchMeterUsage.
  * MeteringRecordId [String](#string)
  * Status [UsageRecordResultStatus](#usagerecordresultstatus)
  * UsageRecord [UsageRecord](#usagerecord)

### UsageRecordResultList
* UsageRecordResultList `array`
  * items [UsageRecordResult](#usagerecordresult)

### UsageRecordResultStatus
* UsageRecordResultStatus `string` (values: Success, CustomerNotSubscribed, DuplicateRecord)

### errorMessage
* errorMessage `string`


