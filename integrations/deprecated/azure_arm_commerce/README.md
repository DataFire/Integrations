# @datafire/azure_arm_commerce

Client library for UsageManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_commerce
```
```js
let azure_arm_commerce = require('@datafire/azure_arm_commerce').create();

azure_arm_commerce.RateCard_Get({
  "$filter": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### RateCard_Get
Enables you to query for the resource/meter metadata and related prices used in a given subscription by Offer ID, Currency, Locale and Region. The metadata associated with the billing meters, including but not limited to service names, types, resources, units of measure, and regions, is subject to change at any time and without notice. If you intend to use this billing data in an automated fashion, please use the billing meter GUID to uniquely identify each billable item. If the billing meter GUID is scheduled to change due to a new billing model, you will be notified in advance of the change. 


```js
azure_arm_commerce.RateCard_Get({
  "$filter": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter **required** `string`: The filter to apply on the operation. It ONLY supports the 'eq' and 'and' logical operators at this time. All the 4 query parameters 'OfferDurableId',  'Currency', 'Locale', 'Region' are required to be a part of the $filter.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: It uniquely identifies Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ResourceRateCardInfo](#resourceratecardinfo)

### UsageAggregates_List
Query aggregated Azure subscription consumption data for a date range.


```js
azure_arm_commerce.UsageAggregates_List({
  "reportedStartTime": "",
  "reportedEndTime": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * reportedStartTime **required** `string`: The start of the time range to retrieve data for.
  * reportedEndTime **required** `string`: The end of the time range to retrieve data for.
  * showDetails `boolean`: `True` returns usage data in instance-level detail, `false` causes server-side aggregation with fewer details. For example, if you have 3 website instances, by default you will get 3 line items for website consumption. If you specify showDetails = false, the data will be aggregated as a single line item for website consumption within the time period (for the given subscriptionId, meterId, usageStartTime and usageEndTime).
  * aggregationGranularity `string` (values: Daily, Hourly): `Daily` (default) returns the data in daily granularity, `Hourly` returns the data in hourly granularity.
  * continuationToken `string`: Used when a continuation token string is provided in the response body of the previous call, enabling paging through a large result set. If not present, the data is retrieved from the beginning of the day/hour (based on the granularity) passed in. 
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: It uniquely identifies Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [UsageAggregationListResult](#usageaggregationlistresult)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### InfoField
* InfoField `object`: Key-value pairs of instance details in the legacy format.
  * project `string`: Identifies the name of the instance provisioned by the user.

### MeterInfo
* MeterInfo `object`: Detailed information about the meter.
  * EffectiveDate `string`: Indicates the date from which the meter rate is effective.
  * IncludedQuantity `number`: The resource quantity that is included in the offer at no cost. Consumption beyond this quantity will be charged.
  * MeterCategory `string`: The category of the meter, e.g., 'Cloud services', 'Networking', etc..
  * MeterId `string`: The unique identifier of the resource.
  * MeterName `string`: The name of the meter, within the given meter category
  * MeterRates `object`: The list of key/value pairs for the meter rates, in the format 'key':'value' where key = the meter quantity, and value = the corresponding price
  * MeterRegion `string`: The region in which the Azure service is available.
  * MeterSubCategory `string`: The subcategory of the meter, e.g., 'A6 Cloud services', 'ExpressRoute (IXP)', etc..
  * MeterTags `array`: Provides additional meter data. 'Third Party' indicates a meter with no discount. Blanks indicate First Party.
    * items `string`
  * Unit `string`: The unit in which the meter consumption is charged, e.g., 'Hours', 'GB', etc.

### MonetaryCommitment
* MonetaryCommitment `object`: Indicates that a monetary commitment is required for this offer
  * ExcludedMeterIds `array`: An array of meter ids that are excluded from the given offer terms.
    * items `string`
  * TieredDiscount `object`: The list of key/value pairs for the tiered meter rates, in the format 'key':'value' where key = price, and value = the corresponding discount percentage. This field is used only by offer terms of type 'Monetary Commitment'.
  * EffectiveDate `string`: Indicates the date from which the offer term is effective.
  * Name **required** `string` (values: Recurring Charge, Monetary Commitment, Monetary Credit): Name of the offer term

### MonetaryCredit
* MonetaryCredit `object`: Indicates that this is a monetary credit offer.
  * Credit `number`: The amount of credit provided under the terms of the given offer level.
  * ExcludedMeterIds `array`: An array of meter ids that are excluded from the given offer terms.
    * items `string`
  * EffectiveDate `string`: Indicates the date from which the offer term is effective.
  * Name **required** `string` (values: Recurring Charge, Monetary Commitment, Monetary Credit): Name of the offer term

### OfferTermInfo
* OfferTermInfo `object`: Describes the offer term.
  * EffectiveDate `string`: Indicates the date from which the offer term is effective.
  * Name **required** `string` (values: Recurring Charge, Monetary Commitment, Monetary Credit): Name of the offer term

### RateCardQueryParameters
* RateCardQueryParameters `object`: Parameters that are used in the odata $filter query parameter for providing RateCard information.
  * Currency **required** `string`: The currency in which the rates need to be provided.
  * Locale **required** `string`: The culture in which the resource metadata needs to be localized.
  * OfferDurableId **required** `string`: The Offer ID parameter consists of the 'MS-AZR-' prefix, plus the Offer ID number (e.g., MS-AZR-0026P). See https://azure.microsoft.com/en-us/support/legal/offer-details/ for more information on the list of available Offer IDs, country/region availability, and billing currency.
  * RegionInfo **required** `string`: 2 letter ISO code where the offer was purchased.

### RecurringCharge
* RecurringCharge `object`: Indicates a recurring charge is present for this offer.
  * RecurringCharge `integer`: The amount of recurring charge as per the offer term.
  * EffectiveDate `string`: Indicates the date from which the offer term is effective.
  * Name **required** `string` (values: Recurring Charge, Monetary Commitment, Monetary Credit): Name of the offer term

### ResourceRateCardInfo
* ResourceRateCardInfo `object`: Price and Metadata information for resources
  * Currency `string`: The currency in which the rates are provided.
  * IsTaxIncluded `boolean`: All rates are pretax, so this will always be returned as 'false'.
  * Locale `string`: The culture in which the resource information is localized.
  * Meters `array`: A list of meters.
    * items [MeterInfo](#meterinfo)
  * OfferTerms `array`: A list of offer terms.
    * items [OfferTermInfo](#offerterminfo)

### UsageAggregation
* UsageAggregation `object`: Describes the usageAggregation.
  * id `string`: Unique Id for the usage aggregate.
  * name `string`: Name of the usage aggregate.
  * properties [UsageSample](#usagesample)
  * type `string`: Type of the resource being returned.

### UsageAggregationListResult
* UsageAggregationListResult `object`: The Get UsageAggregates operation response.
  * nextLink `string`: Gets or sets the link to the next set of results.
  * value `array`: Gets or sets details for the requested aggregation.
    * items [UsageAggregation](#usageaggregation)

### UsageSample
* UsageSample `object`: Describes a sample of the usageAggregation.
  * infoFields [InfoField](#infofield)
  * instanceData `string`: Key-value pairs of instance details represented as a string.
  * meterCategory `string`: Category of the consumed resource.
  * meterId `string`: Unique ID for the resource that was consumed (aka ResourceID).
  * meterName `string`: Friendly name of the resource being consumed.
  * meterRegion `string`: Region of the meterId used for billing purposes
  * meterSubCategory `string`: Sub-category of the consumed resource.
  * subscriptionId `string`: The subscription identifier for the Azure user.
  * unit `string`: The unit in which the usage for this resource is being counted, e.g. Hours, GB.
  * usageEndTime `string`: UTC end time for the usage bucket to which this usage aggregate belongs.
  * usageStartTime `string`: UTC start time for the usage bucket to which this usage aggregate belongs.


