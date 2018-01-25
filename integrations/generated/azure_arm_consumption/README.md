# @datafire/azure_arm_consumption

Client library for ConsumptionManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_consumption
```
```js
let azure_arm_consumption = require('@datafire/azure_arm_consumption').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_consumption.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Consumption management client provides access to consumption resources for Azure Web-Direct subscriptions. Other subscription types which were not purchased directly through the Azure web portal are not supported through this preview API.

## Actions

### Operations_List
Lists all of the available consumption REST API operations.


```js
azure_arm_consumption.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-02-27-preview.

#### Output
* output [OperationListResult](#operationlistresult)

### UsageDetails_List
Lists the usage details for a scope in reverse chronological order by billing period. Usage details are available via this API only for January 1, 2017 or later.


```js
azure_arm_consumption.UsageDetails_List({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the usage details. The scope can be '/subscriptions/{subscriptionId}' for a subscription, or '/subscriptions/{subscriptionId}/providers/Microsoft.Billing/invoices/{invoiceName}' for an invoice or '/subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}' for a billing perdiod.
  * $expand `string`: May be used to expand the additionalProperties or meterDetails property within a list of usage details. By default, these fields are not included when listing usage details.
  * $filter `string`: May be used to filter usageDetails by usageEnd (Utc time). The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'.
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
  * $top `integer`: May be used to limit the number of results to the most recent N usageDetails.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-02-27-preview.

#### Output
* output [UsageDetailsListResult](#usagedetailslistresult)



## Definitions

### ErrorDetails
* ErrorDetails `object`: The details of the error.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.
  * target `string`: The target of the particular error.

### ErrorResponse
* ErrorResponse `object`: Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message.
  * error [ErrorDetails](#errordetails)

### MeterDetails
* MeterDetails `object`: The properties of the meter detail.
  * meterCategory `string`: The category of the meter, for example, 'Cloud services', 'Networking', etc..
  * meterLocation `string`: The location in which the Azure service is available.
  * meterName `string`: The name of the meter, within the given meter category
  * meterSubCategory `string`: The subcategory of the meter, for example, 'A6 Cloud services', 'ExpressRoute (IXP)', etc..
  * pretaxStandardRate `number`: The pretax listing price.
  * totalIncludedQuantity `number`: The total included quantity associated with the offer.
  * unit `string`: The unit in which the meter consumption is charged, for example, 'Hours', 'GB', etc.

### Operation
* Operation `object`: A Consumption REST API operation.
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.Consumption.
    * resource `string`: Resource on which the operation is performed: UsageDetail, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}.

### OperationListResult
* OperationListResult `object`: Result of listing consumption operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of consumption operations supported by the Microsoft.Consumption resource provider.
    * items [Operation](#operation)

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### UsageDetail
* UsageDetail `object`: An usage detail resource.
  * properties [UsageDetailProperties](#usagedetailproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### UsageDetailProperties
* UsageDetailProperties `object`: The properties of the usage detail.
  * additionalProperties `object`: The list of key/value pairs for the additional properties, in the format 'key':'value' where key = the field name, and value = the field value. By default this is not populated, unless it's specified in $expand.
  * billableQuantity `number`: The billable usage quantity.
  * billingPeriodId `string`: The id of the billing period resource that the usage belongs to.
  * currency `string`: The ISO currency in which the meter is charged, for example, USD.
  * instanceId `string`: The uri of the resource instance that the usage is about.
  * instanceLocation `string`: The location of the resource instance that the usage is about.
  * instanceName `string`: The name of the resource instance that the usage is about.
  * invoiceId `string`: The id of the invoice resource that the usage belongs to.
  * isEstimated `boolean`: The estimated usage is subject to change.
  * meterDetails [MeterDetails](#meterdetails)
  * meterId `string`: The meter id.
  * pretaxCost `number`: The amount of cost before tax.
  * usageEnd `string`: The end of the date time range covered by the usage detail.
  * usageQuantity `number`: The quantity of usage.
  * usageStart `string`: The start of the date time range covered by the usage detail.

### UsageDetailsListResult
* UsageDetailsListResult `object`: Result of listing usage details. It contains a list of available usage details in reverse chronological order by billing period.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of usage details.
    * items [UsageDetail](#usagedetail)


