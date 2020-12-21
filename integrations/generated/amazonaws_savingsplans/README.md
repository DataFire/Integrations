# @datafire/amazonaws_savingsplans

Client library for AWS Savings Plans

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_savingsplans
```
```js
let amazonaws_savingsplans = require('@datafire/amazonaws_savingsplans').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Savings Plans are a pricing model that offer significant savings on AWS usage (for example, on Amazon EC2 instances). You commit to a consistent amount of usage, in USD per hour, for a term of 1 or 3 years, and receive a lower price for that usage. For more information, see the <a href="https://docs.aws.amazon.com/savingsplans/latest/userguide/">AWS Savings Plans User Guide</a>.

## Actions

### CreateSavingsPlan



```js
amazonaws_savingsplans.CreateSavingsPlan({
  "savingsPlanOfferingId": "",
  "commitment": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: One or more tags.
  * clientToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * commitment **required** `string`: The hourly commitment, in USD. This is a value between 0.001 and 1 million. You cannot specify more than three digits after the decimal point.
  * purchaseTime `string`: The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ).
  * savingsPlanOfferingId **required** `string`: The ID of the offering.
  * upfrontPaymentAmount `string`: The up-front payment amount. This is a whole number between 50 and 99 percent of the total value of the Savings Plan. This parameter is supported only if the payment option is <code>Partial Upfront</code>.

#### Output
* output [CreateSavingsPlanResponse](#createsavingsplanresponse)

### DeleteQueuedSavingsPlan



```js
amazonaws_savingsplans.DeleteQueuedSavingsPlan({
  "savingsPlanId": ""
}, context)
```

#### Input
* input `object`
  * savingsPlanId **required** `string`: The ID of the Savings Plan.

#### Output
* output [DeleteQueuedSavingsPlanResponse](#deletequeuedsavingsplanresponse)

### DescribeSavingsPlanRates



```js
amazonaws_savingsplans.DescribeSavingsPlanRates({
  "savingsPlanId": ""
}, context)
```

#### Input
* input `object`
  * filters `array`: The filters.
    * items [SavingsPlanRateFilter](#savingsplanratefilter)
  * maxResults `integer`: The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
  * nextToken `string`: The token for the next page of results.
  * savingsPlanId **required** `string`: The ID of the Savings Plan.

#### Output
* output [DescribeSavingsPlanRatesResponse](#describesavingsplanratesresponse)

### DescribeSavingsPlans



```js
amazonaws_savingsplans.DescribeSavingsPlans({}, context)
```

#### Input
* input `object`
  * filters `array`: The filters.
    * items [SavingsPlanFilter](#savingsplanfilter)
  * maxResults `integer`: The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
  * nextToken `string`: The token for the next page of results.
  * savingsPlanArns `array`: The Amazon Resource Names (ARN) of the Savings Plans.
    * items [SavingsPlanArn](#savingsplanarn)
  * savingsPlanIds `array`: The IDs of the Savings Plans.
    * items [SavingsPlanId](#savingsplanid)
  * states `array`: The states.
    * items [SavingsPlanState](#savingsplanstate)

#### Output
* output [DescribeSavingsPlansResponse](#describesavingsplansresponse)

### DescribeSavingsPlansOfferingRates



```js
amazonaws_savingsplans.DescribeSavingsPlansOfferingRates({}, context)
```

#### Input
* input `object`
  * filters `array`: The filters.
    * items [SavingsPlanOfferingRateFilterElement](#savingsplanofferingratefilterelement)
  * maxResults `integer`: The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
  * nextToken `string`: The token for the next page of results.
  * operations `array`: The specific AWS operation for the line item in the billing report.
    * items [SavingsPlanRateOperation](#savingsplanrateoperation)
  * products `array`: The AWS products.
    * items [SavingsPlanProductType](#savingsplanproducttype)
  * savingsPlanOfferingIds `array`: The IDs of the offerings.
    * items [UUID](#uuid)
  * savingsPlanPaymentOptions `array`: The payment options.
    * items [SavingsPlanPaymentOption](#savingsplanpaymentoption)
  * savingsPlanTypes `array`: The plan types.
    * items [SavingsPlanType](#savingsplantype)
  * serviceCodes `array`: The services.
    * items [SavingsPlanRateServiceCode](#savingsplanrateservicecode)
  * usageTypes `array`: The usage details of the line item in the billing report.
    * items [SavingsPlanRateUsageType](#savingsplanrateusagetype)

#### Output
* output [DescribeSavingsPlansOfferingRatesResponse](#describesavingsplansofferingratesresponse)

### DescribeSavingsPlansOfferings



```js
amazonaws_savingsplans.DescribeSavingsPlansOfferings({}, context)
```

#### Input
* input `object`
  * currencies `array`: The currencies.
    * items [CurrencyCode](#currencycode)
  * descriptions `array`: The descriptions.
    * items [SavingsPlanDescription](#savingsplandescription)
  * durations `array`: The durations, in seconds.
    * items [SavingsPlansDuration](#savingsplansduration)
  * filters `array`: The filters.
    * items [SavingsPlanOfferingFilterElement](#savingsplanofferingfilterelement)
  * maxResults `integer`: The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
  * nextToken `string`: The token for the next page of results.
  * offeringIds `array`: The IDs of the offerings.
    * items [UUID](#uuid)
  * operations `array`: The specific AWS operation for the line item in the billing report.
    * items [SavingsPlanOperation](#savingsplanoperation)
  * paymentOptions `array`: The payment options.
    * items [SavingsPlanPaymentOption](#savingsplanpaymentoption)
  * planTypes `array`: The plan type.
    * items [SavingsPlanType](#savingsplantype)
  * productType `string` (values: EC2, Fargate, Lambda): The product type.
  * serviceCodes `array`: The services.
    * items [SavingsPlanServiceCode](#savingsplanservicecode)
  * usageTypes `array`: The usage details of the line item in the billing report.
    * items [SavingsPlanUsageType](#savingsplanusagetype)

#### Output
* output [DescribeSavingsPlansOfferingsResponse](#describesavingsplansofferingsresponse)

### ListTagsForResource



```js
amazonaws_savingsplans.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`: The Amazon Resource Name (ARN) of the resource.

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_savingsplans.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * tags **required** `object`: One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
  * resourceArn **required** `string`: The Amazon Resource Name (ARN) of the resource.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_savingsplans.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`: The Amazon Resource Name (ARN) of the resource.
  * tagKeys **required** `array`: The tag keys.
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### Amount
* Amount `string`

### ClientToken
* ClientToken `string`

### CreateSavingsPlanRequest
* CreateSavingsPlanRequest `object`
  * tags
  * clientToken
  * commitment **required**
  * purchaseTime
  * savingsPlanOfferingId **required**
  * upfrontPaymentAmount

### CreateSavingsPlanResponse
* CreateSavingsPlanResponse `object`
  * savingsPlanId

### CurrencyCode
* CurrencyCode `string` (values: CNY, USD)

### CurrencyList
* CurrencyList `array`
  * items [CurrencyCode](#currencycode)

### DateTime
* DateTime `string`

### DeleteQueuedSavingsPlanRequest
* DeleteQueuedSavingsPlanRequest `object`
  * savingsPlanId **required**

### DeleteQueuedSavingsPlanResponse
* DeleteQueuedSavingsPlanResponse `object`

### DescribeSavingsPlanRatesRequest
* DescribeSavingsPlanRatesRequest `object`
  * filters
    * items [SavingsPlanRateFilter](#savingsplanratefilter)
  * maxResults
  * nextToken
  * savingsPlanId **required**

### DescribeSavingsPlanRatesResponse
* DescribeSavingsPlanRatesResponse `object`
  * nextToken
  * savingsPlanId
  * searchResults
    * items [SavingsPlanRate](#savingsplanrate)

### DescribeSavingsPlansOfferingRatesRequest
* DescribeSavingsPlansOfferingRatesRequest `object`
  * filters
    * items [SavingsPlanOfferingRateFilterElement](#savingsplanofferingratefilterelement)
  * maxResults
  * nextToken
  * operations
    * items [SavingsPlanRateOperation](#savingsplanrateoperation)
  * products
    * items [SavingsPlanProductType](#savingsplanproducttype)
  * savingsPlanOfferingIds
    * items [UUID](#uuid)
  * savingsPlanPaymentOptions
    * items [SavingsPlanPaymentOption](#savingsplanpaymentoption)
  * savingsPlanTypes
    * items [SavingsPlanType](#savingsplantype)
  * serviceCodes
    * items [SavingsPlanRateServiceCode](#savingsplanrateservicecode)
  * usageTypes
    * items [SavingsPlanRateUsageType](#savingsplanrateusagetype)

### DescribeSavingsPlansOfferingRatesResponse
* DescribeSavingsPlansOfferingRatesResponse `object`
  * nextToken
  * searchResults
    * items [SavingsPlanOfferingRate](#savingsplanofferingrate)

### DescribeSavingsPlansOfferingsRequest
* DescribeSavingsPlansOfferingsRequest `object`
  * currencies
    * items [CurrencyCode](#currencycode)
  * descriptions
    * items [SavingsPlanDescription](#savingsplandescription)
  * durations
    * items [SavingsPlansDuration](#savingsplansduration)
  * filters
    * items [SavingsPlanOfferingFilterElement](#savingsplanofferingfilterelement)
  * maxResults
  * nextToken
  * offeringIds
    * items [UUID](#uuid)
  * operations
    * items [SavingsPlanOperation](#savingsplanoperation)
  * paymentOptions
    * items [SavingsPlanPaymentOption](#savingsplanpaymentoption)
  * planTypes
    * items [SavingsPlanType](#savingsplantype)
  * productType
  * serviceCodes
    * items [SavingsPlanServiceCode](#savingsplanservicecode)
  * usageTypes
    * items [SavingsPlanUsageType](#savingsplanusagetype)

### DescribeSavingsPlansOfferingsResponse
* DescribeSavingsPlansOfferingsResponse `object`
  * nextToken
  * searchResults
    * items [SavingsPlanOffering](#savingsplanoffering)

### DescribeSavingsPlansRequest
* DescribeSavingsPlansRequest `object`
  * filters
    * items [SavingsPlanFilter](#savingsplanfilter)
  * maxResults
  * nextToken
  * savingsPlanArns
    * items [SavingsPlanArn](#savingsplanarn)
  * savingsPlanIds
    * items [SavingsPlanId](#savingsplanid)
  * states
    * items [SavingsPlanState](#savingsplanstate)

### DescribeSavingsPlansResponse
* DescribeSavingsPlansResponse `object`
  * nextToken
  * savingsPlans
    * items [SavingsPlan](#savingsplan)

### DurationsList
* DurationsList `array`
  * items [SavingsPlansDuration](#savingsplansduration)

### EC2InstanceFamily
* EC2InstanceFamily `string`

### FilterValuesList
* FilterValuesList `array`
  * items [JsonSafeFilterValueString](#jsonsafefiltervaluestring)

### InternalServerException


### JsonSafeFilterValueString
* JsonSafeFilterValueString `string`

### ListOfStrings
* ListOfStrings `array`
  * items [String](#string)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * resourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### MaxResults
* MaxResults `integer`

### PageSize
* PageSize `integer`

### PaginationToken
* PaginationToken `string`

### ParentSavingsPlanOffering
* ParentSavingsPlanOffering `object`: Information about a Savings Plan offering.
  * currency
  * durationSeconds
  * offeringId
  * paymentOption
  * planDescription
  * planType

### Region
* Region `string`

### ResourceNotFoundException


### SavingsPlan
* SavingsPlan `object`: Information about a Savings Plan.
  * tags
  * commitment
  * currency
  * description
  * ec2InstanceFamily
  * end
  * offeringId
  * paymentOption
  * productTypes
    * items [SavingsPlanProductType](#savingsplanproducttype)
  * recurringPaymentAmount
  * region
  * savingsPlanArn
  * savingsPlanId
  * savingsPlanType
  * start
  * state
  * termDurationInSeconds
  * upfrontPaymentAmount

### SavingsPlanArn
* SavingsPlanArn `string`

### SavingsPlanArnList
* SavingsPlanArnList `array`
  * items [SavingsPlanArn](#savingsplanarn)

### SavingsPlanDescription
* SavingsPlanDescription `string`

### SavingsPlanDescriptionsList
* SavingsPlanDescriptionsList `array`
  * items [SavingsPlanDescription](#savingsplandescription)

### SavingsPlanFilter
* SavingsPlanFilter `object`: Information about a filter.
  * name
  * values
    * items [String](#string)

### SavingsPlanFilterList
* SavingsPlanFilterList `array`
  * items [SavingsPlanFilter](#savingsplanfilter)

### SavingsPlanId
* SavingsPlanId `string`

### SavingsPlanIdList
* SavingsPlanIdList `array`
  * items [SavingsPlanId](#savingsplanid)

### SavingsPlanList
* SavingsPlanList `array`
  * items [SavingsPlan](#savingsplan)

### SavingsPlanOffering
* SavingsPlanOffering `object`: Information about a Savings Plan offering.
  * currency
  * description
  * durationSeconds
  * offeringId
  * operation
  * paymentOption
  * planType
  * productTypes
    * items [SavingsPlanProductType](#savingsplanproducttype)
  * properties
    * items [SavingsPlanOfferingProperty](#savingsplanofferingproperty)
  * serviceCode
  * usageType

### SavingsPlanOfferingFilterAttribute
* SavingsPlanOfferingFilterAttribute `string` (values: region, instanceFamily)

### SavingsPlanOfferingFilterElement
* SavingsPlanOfferingFilterElement `object`: Information about a filter.
  * name
  * values
    * items [JsonSafeFilterValueString](#jsonsafefiltervaluestring)

### SavingsPlanOfferingFiltersList
* SavingsPlanOfferingFiltersList `array`
  * items [SavingsPlanOfferingFilterElement](#savingsplanofferingfilterelement)

### SavingsPlanOfferingId
* SavingsPlanOfferingId `string`

### SavingsPlanOfferingProperty
* SavingsPlanOfferingProperty `object`: Information about a property.
  * name
  * value

### SavingsPlanOfferingPropertyKey
* SavingsPlanOfferingPropertyKey `string` (values: region, instanceFamily)

### SavingsPlanOfferingPropertyList
* SavingsPlanOfferingPropertyList `array`
  * items [SavingsPlanOfferingProperty](#savingsplanofferingproperty)

### SavingsPlanOfferingRate
* SavingsPlanOfferingRate `object`: Information about a Savings Plan offering rate.
  * operation
  * productType
  * properties
    * items [SavingsPlanOfferingRateProperty](#savingsplanofferingrateproperty)
  * rate
  * savingsPlanOffering
    * currency
    * durationSeconds
    * offeringId
    * paymentOption
    * planDescription
    * planType
  * serviceCode
  * unit
  * usageType

### SavingsPlanOfferingRateFilterElement
* SavingsPlanOfferingRateFilterElement `object`: Information about a filter.
  * name
  * values
    * items [JsonSafeFilterValueString](#jsonsafefiltervaluestring)

### SavingsPlanOfferingRateFiltersList
* SavingsPlanOfferingRateFiltersList `array`
  * items [SavingsPlanOfferingRateFilterElement](#savingsplanofferingratefilterelement)

### SavingsPlanOfferingRateProperty
* SavingsPlanOfferingRateProperty `object`: Information about a property.
  * name
  * value

### SavingsPlanOfferingRatePropertyList
* SavingsPlanOfferingRatePropertyList `array`
  * items [SavingsPlanOfferingRateProperty](#savingsplanofferingrateproperty)

### SavingsPlanOfferingRatesList
* SavingsPlanOfferingRatesList `array`
  * items [SavingsPlanOfferingRate](#savingsplanofferingrate)

### SavingsPlanOfferingsList
* SavingsPlanOfferingsList `array`
  * items [SavingsPlanOffering](#savingsplanoffering)

### SavingsPlanOperation
* SavingsPlanOperation `string`

### SavingsPlanOperationList
* SavingsPlanOperationList `array`
  * items [SavingsPlanOperation](#savingsplanoperation)

### SavingsPlanPaymentOption
* SavingsPlanPaymentOption `string` (values: All Upfront, Partial Upfront, No Upfront)

### SavingsPlanPaymentOptionList
* SavingsPlanPaymentOptionList `array`
  * items [SavingsPlanPaymentOption](#savingsplanpaymentoption)

### SavingsPlanProductType
* SavingsPlanProductType `string` (values: EC2, Fargate, Lambda)

### SavingsPlanProductTypeList
* SavingsPlanProductTypeList `array`
  * items [SavingsPlanProductType](#savingsplanproducttype)

### SavingsPlanRate
* SavingsPlanRate `object`: Information about a Savings Plan rate.
  * currency
  * operation
  * productType
  * properties
    * items [SavingsPlanRateProperty](#savingsplanrateproperty)
  * rate
  * serviceCode
  * unit
  * usageType

### SavingsPlanRateFilter
* SavingsPlanRateFilter `object`: Information about a filter.
  * name
  * values
    * items [String](#string)

### SavingsPlanRateFilterAttribute
* SavingsPlanRateFilterAttribute `string` (values: region, instanceFamily, instanceType, productDescription, tenancy, productId)

### SavingsPlanRateFilterList
* SavingsPlanRateFilterList `array`
  * items [SavingsPlanRateFilter](#savingsplanratefilter)

### SavingsPlanRateFilterName
* SavingsPlanRateFilterName `string` (values: region, instanceType, productDescription, tenancy, productType, serviceCode, usageType, operation)

### SavingsPlanRateList
* SavingsPlanRateList `array`
  * items [SavingsPlanRate](#savingsplanrate)

### SavingsPlanRateOperation
* SavingsPlanRateOperation `string`

### SavingsPlanRateOperationList
* SavingsPlanRateOperationList `array`
  * items [SavingsPlanRateOperation](#savingsplanrateoperation)

### SavingsPlanRatePricePerUnit
* SavingsPlanRatePricePerUnit `string`

### SavingsPlanRateProperty
* SavingsPlanRateProperty `object`: Information about a property.
  * name
  * value

### SavingsPlanRatePropertyKey
* SavingsPlanRatePropertyKey `string` (values: region, instanceType, instanceFamily, productDescription, tenancy)

### SavingsPlanRatePropertyList
* SavingsPlanRatePropertyList `array`
  * items [SavingsPlanRateProperty](#savingsplanrateproperty)

### SavingsPlanRateServiceCode
* SavingsPlanRateServiceCode `string` (values: AmazonEC2, AmazonECS, AWSLambda)

### SavingsPlanRateServiceCodeList
* SavingsPlanRateServiceCodeList `array`
  * items [SavingsPlanRateServiceCode](#savingsplanrateservicecode)

### SavingsPlanRateUnit
* SavingsPlanRateUnit `string` (values: Hrs, Lambda-GB-Second, Request)

### SavingsPlanRateUsageType
* SavingsPlanRateUsageType `string`

### SavingsPlanRateUsageTypeList
* SavingsPlanRateUsageTypeList `array`
  * items [SavingsPlanRateUsageType](#savingsplanrateusagetype)

### SavingsPlanServiceCode
* SavingsPlanServiceCode `string`

### SavingsPlanServiceCodeList
* SavingsPlanServiceCodeList `array`
  * items [SavingsPlanServiceCode](#savingsplanservicecode)

### SavingsPlanState
* SavingsPlanState `string` (values: payment-pending, payment-failed, active, retired, queued, queued-deleted)

### SavingsPlanStateList
* SavingsPlanStateList `array`
  * items [SavingsPlanState](#savingsplanstate)

### SavingsPlanType
* SavingsPlanType `string` (values: Compute, EC2Instance)

### SavingsPlanTypeList
* SavingsPlanTypeList `array`
  * items [SavingsPlanType](#savingsplantype)

### SavingsPlanUsageType
* SavingsPlanUsageType `string`

### SavingsPlanUsageTypeList
* SavingsPlanUsageTypeList `array`
  * items [SavingsPlanUsageType](#savingsplanusagetype)

### SavingsPlansDuration
* SavingsPlansDuration `integer`

### SavingsPlansFilterName
* SavingsPlansFilterName `string` (values: region, ec2-instance-family, commitment, upfront, term, savings-plan-type, payment-option, start, end)

### ServiceQuotaExceededException


### String
* String `string`

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**
  * resourceArn **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TermDurationInSeconds
* TermDurationInSeconds `integer`

### UUID
* UUID `string`

### UUIDs
* UUIDs `array`
  * items [UUID](#uuid)

### UntagResourceRequest
* UntagResourceRequest `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### ValidationException



