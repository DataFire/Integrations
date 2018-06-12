# @datafire/azure_consumption

Client library for ConsumptionManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_consumption
```
```js
let azure_consumption = require('@datafire/azure_consumption').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_consumption.ReservationsDetails_ListByReservationOrder({
  "reservationOrderId": "",
  "$filter": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Consumption management client provides access to consumption resources for Azure Enterprise Subscriptions.

## Actions

### ReservationsDetails_ListByReservationOrder
Lists the reservations details for provided date range.


```js
azure_consumption.ReservationsDetails_ListByReservationOrder({
  "reservationOrderId": "",
  "$filter": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * reservationOrderId **required** `string`: Order Id of the reservation
  * $filter **required** `string`: Filter reservation details by date range. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge' 
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.

#### Output
* output [ReservationDetailsListResult](#reservationdetailslistresult)

### ReservationsSummaries_ListByReservationOrder
Lists the reservations summaries for daily or monthly grain.


```js
azure_consumption.ReservationsSummaries_ListByReservationOrder({
  "reservationOrderId": "",
  "grain": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * reservationOrderId **required** `string`: Order Id of the reservation
  * grain **required** `string` (values: daily, monthly): Can be daily or monthly
  * $filter `string`: Required only for daily grain. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge'
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.

#### Output
* output [ReservationSummariesListResult](#reservationsummarieslistresult)

### ReservationsDetails_ListByReservationOrderAndReservation
Lists the reservations details for provided date range.


```js
azure_consumption.ReservationsDetails_ListByReservationOrderAndReservation({
  "reservationOrderId": "",
  "reservationId": "",
  "$filter": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * reservationOrderId **required** `string`: Order Id of the reservation
  * reservationId **required** `string`: Id of the reservation
  * $filter **required** `string`: Filter reservation details by date range. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge' 
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.

#### Output
* output [ReservationDetailsListResult](#reservationdetailslistresult)

### ReservationsSummaries_ListByReservationOrderAndReservation
Lists the reservations summaries for daily or monthly grain.


```js
azure_consumption.ReservationsSummaries_ListByReservationOrderAndReservation({
  "reservationOrderId": "",
  "reservationId": "",
  "grain": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * reservationOrderId **required** `string`: Order Id of the reservation
  * reservationId **required** `string`: Id of the reservation
  * grain **required** `string` (values: daily, monthly): Can be daily or monthly
  * $filter `string`: Required only for daily grain. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge'
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.

#### Output
* output [ReservationSummariesListResult](#reservationsummarieslistresult)

### Operations_List
Lists all of the available consumption REST API operations.


```js
azure_consumption.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.

#### Output
* output [OperationListResult](#operationlistresult)

### Marketplaces_ListByBillingPeriod
Lists the marketplaces for a scope by billing period and subscripotionId. Marketplaces are available via this API only for May 1, 2014 or later.


```js
azure_consumption.Marketplaces_ListByBillingPeriod({
  "api-version": "",
  "subscriptionId": "",
  "billingPeriodName": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: May be used to filter marketplaces by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName or properties/instanceId. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'.
  * $top `integer`: May be used to limit the number of results to the most recent N marketplaces.
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * billingPeriodName **required** `string`: Billing Period Name.

#### Output
* output [MarketplacesListResult](#marketplaceslistresult)

### PriceSheet_GetByBillingPeriod
Get the price sheet for a scope by subscriptionId and billing period. Price sheet is available via this API only for May 1, 2014 or later.


```js
azure_consumption.PriceSheet_GetByBillingPeriod({
  "subscriptionId": "",
  "api-version": "",
  "billingPeriodName": ""
}, context)
```

#### Input
* input `object`
  * $expand `string`: May be used to expand the properties/meterDetails within a price sheet. By default, these fields are not included when returning price sheet.
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
  * $top `integer`: May be used to limit the number of results to the top N results.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.
  * billingPeriodName **required** `string`: Billing Period Name.

#### Output
* output [PriceSheetResult](#pricesheetresult)

### UsageDetails_ListByBillingPeriod
Lists the usage details for a scope by billing period. Usage details are available via this API only for May 1, 2014 or later.


```js
azure_consumption.UsageDetails_ListByBillingPeriod({
  "subscriptionId": "",
  "billingPeriodName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * billingPeriodName **required** `string`: Billing Period Name.
  * $expand `string`: May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details.
  * $filter `string`: May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName or properties/instanceId. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'.
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
  * $top `integer`: May be used to limit the number of results to the most recent N usageDetails.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.

#### Output
* output [UsageDetailsListResult](#usagedetailslistresult)

### Budgets_List
Lists all budgets for a subscription.


```js
azure_consumption.Budgets_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [BudgetsListResult](#budgetslistresult)

### Budgets_Delete
The operation to delete a budget.


```js
azure_consumption.Budgets_Delete({
  "api-version": "",
  "subscriptionId": "",
  "budgetName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * budgetName **required** `string`: Budget Name.

#### Output
*Output schema unknown*

### Budgets_Get
Gets the budget for a subscription by budget name.


```js
azure_consumption.Budgets_Get({
  "api-version": "",
  "subscriptionId": "",
  "budgetName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * budgetName **required** `string`: Budget Name.

#### Output
* output [Budget](#budget)

### Budgets_CreateOrUpdate
The operation to create or update a budget. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.


```js
azure_consumption.Budgets_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "budgetName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * budgetName **required** `string`: Budget Name.
  * parameters **required** [Budget](#budget)

#### Output
* output [Budget](#budget)

### Marketplaces_List
Lists the marketplaces for a scope by subscriptionId. Marketplaces are available via this API only for May 1, 2014 or later.


```js
azure_consumption.Marketplaces_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: May be used to filter marketplaces by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName or properties/instanceId. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'.
  * $top `integer`: May be used to limit the number of results to the most recent N marketplaces.
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [MarketplacesListResult](#marketplaceslistresult)

### PriceSheet_Get
Gets the price sheet for a scope by subscriptionId. Price sheet is available via this API only for May 1, 2014 or later.


```js
azure_consumption.PriceSheet_Get({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $expand `string`: May be used to expand the properties/meterDetails within a price sheet. By default, these fields are not included when returning price sheet.
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
  * $top `integer`: May be used to limit the number of results to the top N results.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.

#### Output
* output [PriceSheetResult](#pricesheetresult)

### UsageDetails_List
Lists the usage details for a scope by billing period. Usage details are available via this API only for May 1, 2014 or later.


```js
azure_consumption.UsageDetails_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * $expand `string`: May be used to expand the properties/additionalProperties or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details.
  * $filter `string`: May be used to filter usageDetails by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName or properties/instanceId. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'.
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
  * $top `integer`: May be used to limit the number of results to the most recent N usageDetails.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.

#### Output
* output [UsageDetailsListResult](#usagedetailslistresult)

### Budgets_ListByResourceGroupName
Lists all budgets for a resource group under a subscription.


```js
azure_consumption.Budgets_ListByResourceGroupName({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Azure Resource Group Name.

#### Output
* output [BudgetsListResult](#budgetslistresult)

### Budgets_DeleteByResourceGroupName
The operation to delete a budget.


```js
azure_consumption.Budgets_DeleteByResourceGroupName({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "budgetName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Azure Resource Group Name.
  * budgetName **required** `string`: Budget Name.

#### Output
*Output schema unknown*

### Budgets_GetByResourceGroupName
Gets the budget for a resource group under a subscription by budget name.


```js
azure_consumption.Budgets_GetByResourceGroupName({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "budgetName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Azure Resource Group Name.
  * budgetName **required** `string`: Budget Name.

#### Output
* output [Budget](#budget)

### Budgets_CreateOrUpdateByResourceGroupName
The operation to create or update a budget. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.


```js
azure_consumption.Budgets_CreateOrUpdateByResourceGroupName({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "budgetName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-31.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Azure Resource Group Name.
  * budgetName **required** `string`: Budget Name.
  * parameters **required** [Budget](#budget)

#### Output
* output [Budget](#budget)



## Definitions

### Budget
* Budget `object`: A budget resource.
  * properties [BudgetProperties](#budgetproperties)
  * eTag `string`: eTag of the resource. To handle concurrent update scenarion, this field will be used to determine whether the user is updating the latest version or not.
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### BudgetProperties
* BudgetProperties `object`: The properties of the budget.
  * amount **required** `number`: The total amount of cost to track with the budget
  * category **required** `string` (values: Cost, Usage): The category of the budget, whether the budget tracks cost or usage.
  * currentSpend [CurrentSpend](#currentspend)
  * filters [Filters](#filters)
  * notifications `object`: Dictionary of notifications associated with the budget. Budget can have up to five notifications.
  * timeGrain **required** `string` (values: Monthly, Quarterly, Annually): The time covered by a budget. Tracking of the amount will be reset based on the time grain.
  * timePeriod **required** [BudgetTimePeriod](#budgettimeperiod)

### BudgetTimePeriod
* BudgetTimePeriod `object`: The start and end date for a budget.
  * endDate `string`: The end date for the budget. If not provided, we default this to 10 years from the start date.
  * startDate **required** `string`: The start date for the budget.

### BudgetsListResult
* BudgetsListResult `object`: Result of listing budgets. It contains a list of available budgets in the scope provided.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of budgets.
    * items [Budget](#budget)

### CurrentSpend
* CurrentSpend `object`: The current amount of cost which is being tracked for a budget.
  * amount `number`: The total amount of cost which is being tracked by the budget.
  * unit `string`: The unit of measure for the budget amount.

### ErrorDetails
* ErrorDetails `object`: The details of the error.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.

### ErrorResponse
* ErrorResponse `object`: Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message.
  * error [ErrorDetails](#errordetails)

### Filters
* Filters `object`: May be used to filter budgets by resource group, resource, or meter.
  * meters `array`: The list of filters on meters, mandatory for budgets of usage category. 
    * items `string`
  * resourceGroups `array`: The list of filters on resource groups, allowed at subscription level only.
    * items `string`
  * resources `array`: The list of filters on resources.
    * items `string`

### Marketplace
* Marketplace `object`: An marketplace resource.
  * properties [MarketplaceProperties](#marketplaceproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### MarketplaceProperties
* MarketplaceProperties `object`: The properties of the marketplace usage detail.
  * accountName `string`: Account name.
  * additionalProperties `string`: Additional details of this usage item. By default this is not populated, unless it's specified in $expand.
  * billingPeriodId `string`: The id of the billing period resource that the usage belongs to.
  * consumedQuantity `number`: The quantity of usage.
  * consumedService `string`: Consumed service name.
  * costCenter `string`: The cost center of this department if it is a department and a costcenter exists
  * currency `string`: The ISO currency in which the meter is charged, for example, USD.
  * departmentName `string`: Department name.
  * instanceId `string`: The uri of the resource instance that the usage is about.
  * instanceName `string`: The name of the resource instance that the usage is about.
  * isEstimated `boolean`: The estimated usage is subject to change.
  * meterId `string`: The meter id.
  * offerName `string`: The type of offer.
  * orderNumber `string`: The order number.
  * planName `string`: The name of plan.
  * pretaxCost `number`: The amount of cost before tax.
  * publisherName `string`: The name of publisher.
  * resourceGroup `string`: The name of resource group.
  * resourceRate `number`: The marketplace resource rate.
  * subscriptionGuid `string`: Subscription guid.
  * subscriptionName `string`: Subscription name.
  * unitOfMeasure `string`: The unit of measure.
  * usageEnd `string`: The end of the date time range covered by the usage detail.
  * usageStart `string`: The start of the date time range covered by the usage detail.

### MarketplacesListResult
* MarketplacesListResult `object`: Result of listing marketplaces. It contains a list of available marketplaces in reverse chronological order by billing period.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of marketplaces.
    * items [Marketplace](#marketplace)

### MeterDetails
* MeterDetails `object`: The properties of the meter detail.
  * meterCategory `string`: The category of the meter, for example, 'Cloud services', 'Networking', etc..
  * meterLocation `string`: The location in which the Azure service is available.
  * meterName `string`: The name of the meter, within the given meter category
  * meterSubCategory `string`: The subcategory of the meter, for example, 'A6 Cloud services', 'ExpressRoute (IXP)', etc..
  * pretaxStandardRate `number`: The pretax listing price.
  * totalIncludedQuantity `number`: The total included quantity associated with the offer.
  * unit `string`: The unit in which the meter consumption is charged, for example, 'Hours', 'GB', etc.

### Notification
* Notification `object`: The notification associated with a budget.
  * contactEmails **required** `array`: Email addresses to send the budget notification to when the threshold is exceeded.
    * items `string`
  * contactGroups `array`: Action groups to send the budget notification to when the threshold is exceeded.
    * items `string`
  * contactRoles `array`: Contact roles to send the budget notification to when the threshold is exceeded.
    * items `string`
  * enabled **required** `boolean`: The notification is enabled or not.
  * operator **required** `string` (values: EqualTo, GreaterThan, GreaterThanOrEqualTo): The comparison operator.
  * threshold **required** `number`: Threshold value associated with a notification. Notification is sent when the cost exceeded the threshold. It is always percent and has to be between 0 and 1000.

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

### PriceSheetModel
* PriceSheetModel `object`: price sheet result. It contains the pricesheet associated with billing period
  * nextLink `string`: The link (url) to the next page of results.
  * pricesheets `array`: Price sheet
    * items [PriceSheetProperties](#pricesheetproperties)

### PriceSheetProperties
* PriceSheetProperties `object`: The properties of the price sheet.
  * billingPeriodId `string`: The id of the billing period resource that the usage belongs to.
  * currencyCode `string`: Currency Code
  * includedQuantity `number`: Included quality for an offer
  * meterDetails [MeterDetails](#meterdetails)
  * meterId `string`: The meter id
  * partNumber `string`: Part Number
  * unitOfMeasure `string`: Unit of measure
  * unitPrice `number`: Unit Price

### PriceSheetResult
* PriceSheetResult `object`: An pricesheet resource.
  * properties [PriceSheetModel](#pricesheetmodel)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ProxyResource
* ProxyResource `object`: The Resource model definition.
  * eTag `string`: eTag of the resource. To handle concurrent update scenarion, this field will be used to determine whether the user is updating the latest version or not.
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ReservationDetails
* ReservationDetails `object`: reservation details resource.
  * properties [ReservationDetailsProperties](#reservationdetailsproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ReservationDetailsListResult
* ReservationDetailsListResult `object`: Result of listing reservation details.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of reservation details.
    * items [ReservationDetails](#reservationdetails)

### ReservationDetailsProperties
* ReservationDetailsProperties `object`: The properties of the reservation details.
  * instanceId `string`: This identifier is the name of the resource or the fully qualified Resource ID.
  * reservationId `string`: The reservation ID is the identifier of a reservation within a reservation order. Each reservation is the grouping for applying the benefit scope and also specifies the number of instances to which the reservation benefit can be applied to.
  * reservationOrderId `string`: The reservation order ID is the identifier for a reservation purchase. Each reservation order ID represents a single purchase transaction. A reservation order contains reservations. The reservation order specifies the VM size and region for the reservations.
  * reservedHours `number`: This is the total hours reserved for the day. E.g. if reservation for 1 instance was made on 1 PM, this will be 11 hours for that day and 24 hours from subsequent days.
  * skuName `string`: This is the ARM Sku name. It can be used to join with the servicetype field in additoinalinfo in usage records.
  * totalReservedQuantity `number`: This is the total count of instances that are reserved for the reservationid.
  * usageDate `string`: The date on which consumption occurred.
  * usedHours `number`: This is the total hours used by the instance.

### ReservationSummaries
* ReservationSummaries `object`: reservation summaries resource.
  * properties [ReservationSummariesProperties](#reservationsummariesproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ReservationSummariesListResult
* ReservationSummariesListResult `object`: Result of listing reservation summaries.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of reservation summaries.
    * items [ReservationSummaries](#reservationsummaries)

### ReservationSummariesProperties
* ReservationSummariesProperties `object`: The properties of the reservation summaries.
  * avgUtilizationPercentage `number`: This is average utilization for the entire time range. (day or month depending on the grain)
  * maxUtilizationPercentage `number`: This is the maximum hourly utilization in the usage time (day or month). E.g. if usage record corresponds to 12/10/2017 and on that for hour 4 and 5, utilization was 100%, this field will return 100% for that day.
  * minUtilizationPercentage `number`: This is the minimum hourly utilization in the usage time (day or month). E.g. if usage record corresponds to 12/10/2017 and on that for hour 4 and 5, utilization was 10%, this field will return 10% for that day
  * reservationId `string`: The reservation ID is the identifier of a reservation within a reservation order. Each reservation is the grouping for applying the benefit scope and also specifies the number of instances to which the reservation benefit can be applied to.
  * reservationOrderId `string`: The reservation order ID is the identifier for a reservation purchase. Each reservation order ID represents a single purchase transaction. A reservation order contains reservations. The reservation order specifies the VM size and region for the reservations.
  * reservedHours `number`: This is the total hours reserved. E.g. if reservation for 1 instance was made on 1 PM, this will be 11 hours for that day and 24 hours from subsequent days
  * skuName `string`: This is the ARM Sku name. It can be used to join with the servicetype field in additoinalinfo in usage records.
  * usageDate `string`: Data corresponding to the utilization record. If the grain of data is monthly, it will be first day of month.
  * usedHours `number`: Total used hours by the reservation

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
  * accountName `string`: Account name.
  * additionalProperties `string`: Additional details of this usage item. By default this is not populated, unless it's specified in $expand.
  * billableQuantity `number`: The billable usage quantity.
  * billingPeriodId `string`: The id of the billing period resource that the usage belongs to.
  * consumedService `string`: Consumed service name.
  * costCenter `string`: The cost center of this department if it is a department and a costcenter exists
  * currency `string`: The ISO currency in which the meter is charged, for example, USD.
  * departmentName `string`: Department name.
  * instanceId `string`: The uri of the resource instance that the usage is about.
  * instanceLocation `string`: The location of the resource instance that the usage is about.
  * instanceName `string`: The name of the resource instance that the usage is about.
  * invoiceId `string`: The id of the invoice resource that the usage belongs to.
  * isEstimated `boolean`: The estimated usage is subject to change.
  * meterDetails [MeterDetails](#meterdetails)
  * meterId `string`: The meter id.
  * pretaxCost `number`: The amount of cost before tax.
  * product `string`: Product name.
  * subscriptionGuid `string`: Subscription guid.
  * subscriptionName `string`: Subscription name.
  * usageEnd `string`: The end of the date time range covered by the usage detail.
  * usageQuantity `number`: The quantity of usage.
  * usageStart `string`: The start of the date time range covered by the usage detail.

### UsageDetailsListResult
* UsageDetailsListResult `object`: Result of listing usage details. It contains a list of available usage details in reverse chronological order by billing period.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of usage details.
    * items [UsageDetail](#usagedetail)


