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

.then(data => {
  console.log(data);
});
```

## Description

Consumption management client provides access to consumption resources for Azure Enterprise Subscriptions.

## Actions

### Balances_GetForBillingPeriodByBillingAccount
Gets the balances for a scope by billing period and billingAccountId. Balances are available via this API only for May 1, 2014 or later.


```js
azure_consumption.Balances_GetForBillingPeriodByBillingAccount({
  "api-version": "",
  "billingAccountId": "",
  "billingPeriodName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.
  * billingAccountId **required** `string`: BillingAccount ID
  * billingPeriodName **required** `string`: Billing Period Name.

#### Output
* output [Balance](#balance)

### Balances_GetByBillingAccount
Gets the balances for a scope by billingAccountId. Balances are available via this API only for May 1, 2014 or later.


```js
azure_consumption.Balances_GetByBillingAccount({
  "api-version": "",
  "billingAccountId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.
  * billingAccountId **required** `string`: BillingAccount ID

#### Output
* output [Balance](#balance)

### ReservationsDetails_ListByBillingAccountId
Lists the reservations details for provided date range.


```js
azure_consumption.ReservationsDetails_ListByBillingAccountId({
  "billingAccountId": "",
  "$filter": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountId **required** `string`: BillingAccount ID
  * $filter **required** `string`: Filter reservation details by date range. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge' 
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.

#### Output
* output [ReservationDetailsListResult](#reservationdetailslistresult)

### ReservationsSummaries_ListByBillingAccountId
Lists the reservations summaries for daily or monthly grain.


```js
azure_consumption.ReservationsSummaries_ListByBillingAccountId({
  "billingAccountId": "",
  "grain": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingAccountId **required** `string`: BillingAccount ID
  * grain **required** `string` (values: daily, monthly): Can be daily or monthly
  * $filter `string`: Required only for daily grain. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge'
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.

#### Output
* output [ReservationSummariesListResult](#reservationsummarieslistresult)

### ReservationTransactions_ListByBillingAccountId
List of transactions for reserved instances on billing account scope


```js
azure_consumption.ReservationTransactions_ListByBillingAccountId({
  "api-version": "",
  "billingAccountId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: Filter reservation transactions by date range. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge' 
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.
  * billingAccountId **required** `string`: BillingAccount ID

#### Output
* output [ReservationTransactionsListResult](#reservationtransactionslistresult)

### ReservationRecommendations_ListByBillingAccountId
List of recommendations for purchasing reserved instances on billing account scope


```js
azure_consumption.ReservationRecommendations_ListByBillingAccountId({
  "api-version": "",
  "billingAccountId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: May be used to filter reservationRecommendations by properties/scope and properties/lookBackPeriod.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.
  * billingAccountId **required** `string`: BillingAccount ID

#### Output
* output [ReservationRecommendationsListResult](#reservationrecommendationslistresult)

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.

#### Output
* output [OperationListResult](#operationlistresult)

### AggregatedCost_GetForBillingPeriodByManagementGroup
Provides the aggregate cost of a management group and all child management groups by specified billing period


```js
azure_consumption.AggregatedCost_GetForBillingPeriodByManagementGroup({
  "managementGroupId": "",
  "billingPeriodName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * managementGroupId **required** `string`: Azure Management Group ID.
  * billingPeriodName **required** `string`: Billing Period Name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.

#### Output
* output [ManagementGroupAggregatedCostResult](#managementgroupaggregatedcostresult)

### AggregatedCost_GetByManagementGroup
Provides the aggregate cost of a management group and all child management groups by current billing period.


```js
azure_consumption.AggregatedCost_GetByManagementGroup({
  "managementGroupId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * managementGroupId **required** `string`: Azure Management Group ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.
  * $filter `string`: May be used to filter aggregated cost by properties/usageStart (Utc time), properties/usageEnd (Utc time). The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).

#### Output
* output [ManagementGroupAggregatedCostResult](#managementgroupaggregatedcostresult)

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.
  * billingPeriodName **required** `string`: Billing Period Name.

#### Output
* output [PriceSheetResult](#pricesheetresult)

### Forecasts_List
Lists the forecast charges by subscriptionId.


```js
azure_consumption.Forecasts_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: May be used to filter forecasts by properties/usageDate (Utc time), properties/chargeType or properties/grain. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [ForecastsListResult](#forecastslistresult)

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.

#### Output
* output [PriceSheetResult](#pricesheetresult)

### ReservationRecommendations_List
List of recommendations for purchasing reserved instances.


```js
azure_consumption.ReservationRecommendations_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: May be used to filter reservationRecommendations by properties/scope and properties/lookBackPeriod.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [ReservationRecommendationsListResult](#reservationrecommendationslistresult)

### Budgets_List
Lists all budgets for the defined scope.


```js
azure_consumption.Budgets_List({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope associated with budget operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.

#### Output
* output [BudgetsListResult](#budgetslistresult)

### Budgets_Delete
The operation to delete a budget.


```js
azure_consumption.Budgets_Delete({
  "scope": "",
  "api-version": "",
  "budgetName": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope associated with budget operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.
  * budgetName **required** `string`: Budget Name.

#### Output
*Output schema unknown*

### Budgets_Get
Gets the budget for the scope by budget name.


```js
azure_consumption.Budgets_Get({
  "scope": "",
  "api-version": "",
  "budgetName": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope associated with budget operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.
  * budgetName **required** `string`: Budget Name.

#### Output
* output [Budget](#budget)

### Budgets_CreateOrUpdate
The operation to create or update a budget. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.


```js
azure_consumption.Budgets_CreateOrUpdate({
  "scope": "",
  "api-version": "",
  "budgetName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope associated with budget operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.
  * budgetName **required** `string`: Budget Name.
  * parameters **required** [Budget](#budget)

#### Output
* output [Budget](#budget)

### Charges_ListByScope
Lists the charges based for the defined scope.


```js
azure_consumption.Charges_ListByScope({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope associated with usage details operations. This includes '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope. For department and enrollment accounts, you can also add billing period to the scope using '/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'. For e.g. to specify billing period at department scope use '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.
  * $filter `string`: May be used to filter charges by properties/usageEnd (Utc time), properties/usageStart (Utc time). The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).

#### Output
* output [ChargeSummary](#chargesummary)

### Marketplaces_List
Lists the marketplaces for a scope at the defined scope. Marketplaces are available via this API only for May 1, 2014 or later.


```js
azure_consumption.Marketplaces_List({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: May be used to filter marketplaces by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName or properties/instanceId. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'.
  * $top `integer`: May be used to limit the number of results to the most recent N marketplaces.
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
  * scope **required** `string`: The scope associated with marketplace operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope and '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope. For subscription, billing account, department, enrollment account and ManagementGroup, you can also add billing period to the scope using '/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'. For e.g. to specify billing period at department scope use '/providers/Microsoft.Billing/departments/{departmentId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.

#### Output
* output [MarketplacesListResult](#marketplaceslistresult)

### Tags_Get
Get all available tag keys for the defined scope


```js
azure_consumption.Tags_Get({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope associated with tags operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope and '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope..
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.

#### Output
* output [TagsResult](#tagsresult)

### UsageDetails_List
Lists the usage details for the defined scope. Usage details are available via this API only for May 1, 2014 or later.


```js
azure_consumption.UsageDetails_List({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope associated with usage details operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope and '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope. For subscription, billing account, department, enrollment account and management group, you can also add billing period to the scope using '/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'. For e.g. to specify billing period at department scope use '/providers/Microsoft.Billing/departments/{departmentId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'
  * $expand `string`: May be used to expand the properties/additionalInfo or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details.
  * $filter `string`: May be used to filter usageDetails by properties/resourceGroup, properties/resourceName, properties/resourceId, properties/chargeType, properties/reservationId, properties/publisherType or tags. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). PublisherType Filter accepts two values azure and marketplace and it is currently supported for Web Direct Offer Type
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
  * $top `integer`: May be used to limit the number of results to the most recent N usageDetails.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-06-01.
  * metric `string` (values: actualcost, amortizedcost, usage): Allows to select different type of cost/usage records.

#### Output
* output [UsageDetailsListResult](#usagedetailslistresult)



## Definitions

### Balance
* Balance `object`: A balance resource.
  * properties [BalanceProperties](#balanceproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### BalanceProperties
* BalanceProperties `object`: The properties of the balance.
  * adjustmentDetails `array`: List of Adjustments (Promo credit, SIE credit etc.).
    * items `object`
      * name `string`: the name of new adjustment.
      * value `number`: the value of new adjustment.
  * adjustments `number`: Total adjustment amount.
  * azureMarketplaceServiceCharges `number`: Total charges for Azure Marketplace.
  * beginningBalance `number`: The beginning balance for the billing period.
  * billingFrequency `string` (values: Month, Quarter, Year): The billing frequency.
  * chargesBilledSeparately `number`: Charges Billed separately.
  * currency `string`: The ISO currency in which the meter is charged, for example, USD.
  * endingBalance `number`: The ending balance for the billing period (for open periods this will be updated daily).
  * newPurchases `number`: Total new purchase amount.
  * newPurchasesDetails `array`: List of new purchases.
    * items `object`
      * name `string`: the name of new purchase.
      * value `number`: the value of new purchase.
  * priceHidden `boolean`: Price is hidden or not.
  * serviceOverage `number`: Overage for Azure services.
  * totalOverage `number`: serviceOverage + chargesBilledSeparately.
  * totalUsage `number`: Azure service commitment + total Overage.
  * utilized `number`: Total Commitment usage.

### Budget
* Budget `object`: A budget resource.
  * properties [BudgetProperties](#budgetproperties)
  * eTag `string`: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
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
  * timeGrain **required** `string` (values: Monthly, Quarterly, Annually, BillingMonth, BillingQuarter, BillingAnnual): The time covered by a budget. Tracking of the amount will be reset based on the time grain.
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

### ChargeSummary
* ChargeSummary `object`: A charge summary resource.
  * properties [ChargeSummaryProperties](#chargesummaryproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ChargeSummaryProperties
* ChargeSummaryProperties `object`: The properties of the charge summary.
  * azureCharges `number`: Azure Charges.
  * billingPeriodId `string`: The id of the billing period resource that the charge belongs to.
  * chargesBilledSeparately `number`: Charges Billed separately.
  * currency `string`: Currency Code
  * marketplaceCharges `number`: Marketplace Charges.
  * usageEnd `string`:  Usage end date.
  * usageStart `string`: Usage start date.

### ChargesListResult
* ChargesListResult `object`: Result of listing charge summary.
  * value `array`: The list of charge summary
    * items [ChargeSummary](#chargesummary)

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
  * meters `array`: The list of filters on meters (GUID), mandatory for budgets of usage category. 
    * items `string`
  * resourceGroups `array`: The list of filters on resource groups, allowed at subscription level only.
    * items `string`
  * resources `array`: The list of filters on resources.
    * items `string`
  * tags `object`: The dictionary of filters on tags.

### Forecast
* Forecast `object`: A forecast resource.
  * properties [ForecastProperties](#forecastproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ForecastProperties
* ForecastProperties `object`: The properties of the forecast charge.
  * charge `number`: The amount of charge
  * chargeType `string` (values: Actual, Forecast): The type of the charge. Could be actual or forecast
  * confidenceLevels `array`: The details about the forecast confidence levels. This is populated only when chargeType is Forecast.
    * items `object`
      * bound `string` (values: Upper, Lower): The boundary of the percentage, values could be 'Upper' or 'Lower'
      * percentage `number`: The percentage level of the confidence
      * value `number`: The amount of forecast within the percentage level
  * currency `string`: The ISO currency in which the meter is charged, for example, USD.
  * grain `string` (values: Daily, Monthly, Yearly): The granularity of forecast.
  * usageDate `string`: The usage date of the forecast.

### ForecastsListResult
* ForecastsListResult `object`: Result of listing forecasts. It contains a list of available forecasts.
  * value `array`: The list of forecasts.
    * items [Forecast](#forecast)

### ManagementGroupAggregatedCostProperties
* ManagementGroupAggregatedCostProperties `object`: The properties of the Management Group Aggregated Cost.
  * azureCharges `number`: Azure Charges.
  * billingPeriodId `string`: The id of the billing period resource that the aggregated cost belongs to.
  * chargesBilledSeparately `number`: Charges Billed Separately.
  * children `array`: Children of a management group
    * items [ManagementGroupAggregatedCostResult](#managementgroupaggregatedcostresult)
  * currency `string`: The ISO currency in which the meter is charged, for example, USD.
  * excludedSubscriptions `array`: List of subscription Guids excluded from the calculation of aggregated cost
    * items `string`
  * includedSubscriptions `array`: List of subscription Guids included in the calculation of aggregated cost
    * items `string`
  * marketplaceCharges `number`: Marketplace Charges.
  * usageEnd `string`: The end of the date time range covered by the aggregated cost.
  * usageStart `string`: The start of the date time range covered by aggregated cost.

### ManagementGroupAggregatedCostResult
* ManagementGroupAggregatedCostResult `object`: A management group aggregated cost resource.
  * properties [ManagementGroupAggregatedCostProperties](#managementgroupaggregatedcostproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

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
  * isRecurringCharge `boolean`: Flag indicating whether this is a recurring charge or not.
  * meterId `string`: The meter id (GUID).
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
  * serviceName `string`: The name of the service.
  * serviceTier `string`: The service tier.
  * totalIncludedQuantity `number`: The total included quantity associated with the offer.
  * unit `string`: The unit in which the meter consumption is charged, for example, 'Hours', 'GB', etc.

### MeterDetailsResponse
* MeterDetailsResponse `object`: The properties of the meter detail.
  * meterCategory `string`: The category of the meter, for example, 'Cloud services', 'Networking', etc..
  * meterName `string`: The name of the meter, within the given meter category
  * meterSubCategory `string`: The subcategory of the meter, for example, 'A6 Cloud services', 'ExpressRoute (IXP)', etc..
  * serviceFamily `string`: The service family.
  * unitOfMeasure `string`: The unit in which the meter consumption is charged, for example, 'Hours', 'GB', etc.

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
  * meterId `string`: The meter id (GUID)
  * offerId `string`: Offer Id
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
  * eTag `string`: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ReservationDetail
* ReservationDetail `object`: reservation detail resource.
  * properties [ReservationDetailProperties](#reservationdetailproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ReservationDetailProperties
* ReservationDetailProperties `object`: The properties of the reservation detail.
  * instanceFlexibilityGroup `string`: The instance Flexibility Group.
  * instanceFlexibilityRatio `string`: The instance Flexibility Ratio.
  * instanceId `string`: This identifier is the name of the resource or the fully qualified Resource ID.
  * kind `string`: The reservation kind.
  * reservationId `string`: The reservation ID is the identifier of a reservation within a reservation order. Each reservation is the grouping for applying the benefit scope and also specifies the number of instances to which the reservation benefit can be applied to.
  * reservationOrderId `string`: The reservation order ID is the identifier for a reservation purchase. Each reservation order ID represents a single purchase transaction. A reservation order contains reservations. The reservation order specifies the VM size and region for the reservations.
  * reservedHours `number`: This is the total hours reserved for the day. E.g. if reservation for 1 instance was made on 1 PM, this will be 11 hours for that day and 24 hours from subsequent days.
  * skuName `string`: This is the ARM Sku name. It can be used to join with the serviceType field in additional info in usage records.
  * totalReservedQuantity `number`: This is the total count of instances that are reserved for the reservationId.
  * usageDate `string`: The date on which consumption occurred.
  * usedHours `number`: This is the total hours used by the instance.

### ReservationDetailsListResult
* ReservationDetailsListResult `object`: Result of listing reservation details.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of reservation details.
    * items [ReservationDetail](#reservationdetail)

### ReservationRecommendation
* ReservationRecommendation `object`: Reservation recommendation resource.
  * properties [ReservationRecommendationProperties](#reservationrecommendationproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.
  * location `string`: Resource location
  * sku `string`: Resource sku

### ReservationRecommendationProperties
* ReservationRecommendationProperties `object`: The properties of the reservation recommendation.
  * costWithNoReservedInstances `number`: The total amount of cost without reserved instances.
  * firstUsageDate `string`: The usage date for looking back.
  * instanceFlexibilityGroup `string`: The instance Flexibility Group.
  * instanceFlexibilityRatio `integer`: The instance Flexibility Ratio.
  * lookBackPeriod `string`: The number of days of usage to look back for recommendation.
  * meterId `string`: The meter id (GUID)
  * netSavings `number`: Total estimated savings with reserved instances.
  * normalizedSize `string`: The normalized Size.
  * recommendedQuantity `number`: Recommended quality for reserved instances.
  * recommendedQuantityNormalized `number`: The recommended Quantity Normalized.
  * scope `string`: Shared or single recommendation.
  * skuProperties `array`: List of sku properties
    * items [SkuProperty](#skuproperty)
  * term `string`: RI recommendations in one or three year terms.
  * totalCostWithReservedInstances `number`: The total amount of cost with reserved instances.

### ReservationRecommendationsListResult
* ReservationRecommendationsListResult `object`: Result of listing reservation recommendations.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of reservation recommendations.
    * items [ReservationRecommendation](#reservationrecommendation)

### ReservationSummariesListResult
* ReservationSummariesListResult `object`: Result of listing reservation summaries.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of reservation summaries.
    * items [ReservationSummary](#reservationsummary)

### ReservationSummary
* ReservationSummary `object`: reservation summary resource.
  * properties [ReservationSummaryProperties](#reservationsummaryproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ReservationSummaryProperties
* ReservationSummaryProperties `object`: The properties of the reservation summary.
  * avgUtilizationPercentage `number`: This is average utilization for the entire time range. (day or month depending on the grain)
  * kind `string`: The reservation kind.
  * maxUtilizationPercentage `number`: This is the maximum hourly utilization in the usage time (day or month). E.g. if usage record corresponds to 12/10/2017 and on that for hour 4 and 5, utilization was 100%, this field will return 100% for that day.
  * minUtilizationPercentage `number`: This is the minimum hourly utilization in the usage time (day or month). E.g. if usage record corresponds to 12/10/2017 and on that for hour 4 and 5, utilization was 10%, this field will return 10% for that day
  * purchasedQuantity `number`: This is the purchased quantity for the reservationId.
  * remainingQuantity `number`: This is the remaining quantity for the reservationId.
  * reservationId `string`: The reservation ID is the identifier of a reservation within a reservation order. Each reservation is the grouping for applying the benefit scope and also specifies the number of instances to which the reservation benefit can be applied to.
  * reservationOrderId `string`: The reservation order ID is the identifier for a reservation purchase. Each reservation order ID represents a single purchase transaction. A reservation order contains reservations. The reservation order specifies the VM size and region for the reservations.
  * reservedHours `number`: This is the total hours reserved. E.g. if reservation for 1 instance was made on 1 PM, this will be 11 hours for that day and 24 hours from subsequent days
  * skuName `string`: This is the ARM Sku name. It can be used to join with the serviceType field in additional info in usage records.
  * totalReservedQuantity `number`: This is the total count of instances that are reserved for the reservationId.
  * usageDate `string`: Data corresponding to the utilization record. If the grain of data is monthly, it will be first day of month.
  * usedHours `number`: Total used hours by the reservation
  * usedQuantity `number`: This is the used quantity for the reservationId.
  * utilizedPercentage `number`: This is the utilized percentage for the reservation Id.

### ReservationTransaction
* ReservationTransaction `object`: Reservation transaction resource.
  * properties [ReservationTransactionProperties](#reservationtransactionproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ReservationTransactionProperties
* ReservationTransactionProperties `object`
  * accountName `string`: The name of the account that makes the transaction.
  * accountOwnerEmail `string`: The email of the account owner that makes the transaction.
  * amount `number`: The charge of the transaction.
  * armSkuName `string`: This is the ARM Sku name. It can be used to join with the serviceType field in additional info in usage records.
  * costCenter `string`: The cost center of this department if it is a department and a cost center is provided.
  * currency `string`: The ISO currency in which the transaction is charged, for example, USD.
  * currentEnrollment `string`: The current enrollment.
  * departmentName `string`: The department name.
  * description `string`: The description of the transaction.
  * eventDate `string`: The date of the transaction
  * eventType `string`: The type of the transaction (Purchase, Cancel, etc.)
  * purchasingEnrollment `string`: The purchasing enrollment.
  * purchasingSubscriptionGuid `string`: The subscription guid that makes the transaction.
  * purchasingSubscriptionName `string`: The subscription name that makes the transaction.
  * quantity `number`: The quantity of the transaction.
  * region `string`: The region of the transaction.
  * reservationOrderId `string`: The reservation order ID is the identifier for a reservation purchase. Each reservation order ID represents a single purchase transaction. A reservation order contains reservations. The reservation order specifies the VM size and region for the reservations.
  * reservationOrderName `string`: The name of the reservation order.
  * term `string`: This is the term of the transaction.

### ReservationTransactionsListResult
* ReservationTransactionsListResult `object`: Result of listing reservation transactions
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of reservation transactions.
    * items [ReservationTransaction](#reservationtransaction)

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ResourceAttributes
* ResourceAttributes `object`: The Resource model definition.
  * location `string`: Resource location
  * sku `string`: Resource sku

### SkuProperty
* SkuProperty `object`: The Sku property
  * name `string`: The name of sku property.
  * value `string`: The value of sku property.

### Tag
* Tag `object`: The tag resource.
  * key `string`: Tag key.

### TagProperties
* TagProperties `object`: The properties of the tag.
  * tags `array`: A list of Tag.
    * items [Tag](#tag)

### TagsResult
* TagsResult `object`: A resource listing all tags.
  * properties [TagProperties](#tagproperties)
  * eTag `string`: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
  * id `string`: Resource Id.
  * name `string`: Resource name.
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
  * accountName `string`: Account Name.
  * accountOwnerId `string`: Account Owner Id.
  * additionalInfo `string`: Additional details of this usage item. By default this is not populated, unless it's specified in $expand. Use this field to get usage line item specific details such as the actual VM Size (ServiceType) or the ratio in which the reservation discount is applied.
  * billingAccountId `string`: Billing Account identifier.
  * billingAccountName `string`: Billing Account Name.
  * billingCurrency `string`: Billing Currency.
  * billingPeriodEndDate `string`: The billing period end date.
  * billingPeriodStartDate `string`: The billing period start date.
  * billingProfileId `string`: Billing Profile identifier.
  * billingProfileName `string`: Billing Profile Name.
  * chargeType `string`: Indicates a charge represents credits, usage, a Marketplace purchase, a reservation fee, or a refund.
  * consumedService `string`: Consumed service name. Name of the azure resource provider that emits the usage or was purchased. This value is not provided for marketplace usage.
  * cost `number`: The amount of cost before tax.
  * costCenter `string`: The cost center of this department if it is a department and a cost center is provided.
  * date `string`: Date for the usage record.
  * effectivePrice `number`: Effective Price that's charged for the usage.
  * frequency `string`: Indicates how frequently this charge will occur. OneTime for purchases which only happen once, Monthly for fees which recur every month, and UsageBased for charges based on how much a service is used.
  * invoiceSection `string`: Invoice Section Name.
  * isAzureCreditEligible `boolean`: Is Azure Credit Eligible.
  * meterDetails [MeterDetailsResponse](#meterdetailsresponse)
  * meterId `string`: The meter id (GUID). Not available for marketplace. For reserved instance this represents the primary meter for which the reservation was purchased. For the actual VM Size for which the reservation is purchased see productOrderName.
  * offerId `string`: Offer Id. Ex: MS-AZR-0017P, MS-AZR-0148P.
  * partNumber `string`: Part Number of the service used. Can be used to join with the price sheet. Not available for marketplace.
  * planName `string`: Plan Name.
  * product `string`: Product name for the consumed service or purchase. Not available for Marketplace.
  * productOrderId `string`: Product Order Id. For reservations this is the Reservation Order ID.
  * productOrderName `string`: Product Order Name. For reservations this is the SKU that was purchased.
  * publisherName `string`: Publisher Name.
  * publisherType `string`: Publisher Type.
  * quantity `number`: The usage quantity.
  * reservationId `string`: ARM resource id of the reservation. Only applies to records relevant to reservations.
  * reservationName `string`: User provided display name of the reservation. Last known name for a particular day is populated in the daily data. Only applies to records relevant to reservations.
  * resourceGroup `string`: Resource Group Name.
  * resourceId `string`: Azure resource manager resource identifier.
  * resourceLocation `string`: Resource Location.
  * resourceName `string`: Resource Name.
  * serviceInfo1 `string`: Service Info 1.
  * serviceInfo2 `string`: Service Info 2.
  * subscriptionId `string`: Subscription guid.
  * subscriptionName `string`: Subscription name.
  * term `string`: Term (in months). 1 month for monthly recurring purchase. 12 months for a 1 year reservation. 36 months for a 3 year reservation.
  * unitPrice `number`: Unit Price is the price applicable to you. (your EA or other contract price).

### UsageDetailsListResult
* UsageDetailsListResult `object`: Result of listing usage details. It contains a list of available usage details in reverse chronological order by billing period.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of usage details.
    * items [UsageDetail](#usagedetail)


