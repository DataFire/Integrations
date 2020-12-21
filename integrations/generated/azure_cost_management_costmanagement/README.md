# @datafire/azure_cost_management_costmanagement

Client library for CostManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_cost_management_costmanagement
```
```js
let azure_cost_management_costmanagement = require('@datafire/azure_cost_management_costmanagement').create({
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



## Actions

### Operations_List
Lists all of the available consumption REST API operations.


```js
azure_cost_management_costmanagement.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-04-01-preview

#### Output
* output [OperationListResult](#operationlistresult)

### Views_List
Lists all views by tenant and object.


```js
azure_cost_management_costmanagement.Views_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-04-01-preview

#### Output
* output [ViewListResult](#viewlistresult)

### Views_Delete
The operation to delete a view.


```js
azure_cost_management_costmanagement.Views_Delete({
  "api-version": "",
  "viewName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-04-01-preview
  * viewName **required** `string`: View name

#### Output
*Output schema unknown*

### Views_Get
Gets the view by view name.


```js
azure_cost_management_costmanagement.Views_Get({
  "api-version": "",
  "viewName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-04-01-preview
  * viewName **required** `string`: View name

#### Output
* output [View](#view)

### Views_CreateOrUpdate
The operation to create or update a view. Update operation requires latest eTag to be set in the request. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.


```js
azure_cost_management_costmanagement.Views_CreateOrUpdate({
  "api-version": "",
  "viewName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-04-01-preview
  * viewName **required** `string`: View name
  * parameters **required** [View](#view)

#### Output
* output [View](#view)

### Budgets_List
Lists all budgets for the defined scope.


```js
azure_cost_management_costmanagement.Budgets_List({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope associated with budget operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-04-01-preview

#### Output
* output [BudgetsListResult](#budgetslistresult)

### Budget_Delete
The operation to delete a budget.


```js
azure_cost_management_costmanagement.Budget_Delete({
  "scope": "",
  "api-version": "",
  "budgetName": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope associated with budget operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-04-01-preview
  * budgetName **required** `string`: Budget Name.

#### Output
*Output schema unknown*

### Budget_Get
Gets the budget for the scope by budget name.


```js
azure_cost_management_costmanagement.Budget_Get({
  "scope": "",
  "api-version": "",
  "budgetName": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope associated with budget operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-04-01-preview
  * budgetName **required** `string`: Budget Name.

#### Output
* output [BudgetModel](#budgetmodel)

### Budget_CreateOrUpdate
The operation to create or update a budget. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.


```js
azure_cost_management_costmanagement.Budget_CreateOrUpdate({
  "scope": "",
  "api-version": "",
  "budgetName": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope associated with budget operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-04-01-preview
  * budgetName **required** `string`: Budget Name.
  * parameters [BudgetModel](#budgetmodel)

#### Output
* output [BudgetModel](#budgetmodel)

### Views_ListByScope
Lists all views at the given scope.


```js
azure_cost_management_costmanagement.Views_ListByScope({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope associated with view operations. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, 'providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for External Billing Account scope and 'providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for External Subscription scope.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-04-01-preview

#### Output
* output [ViewListResult](#viewlistresult)

### Views_DeleteByScope
The operation to delete a view.


```js
azure_cost_management_costmanagement.Views_DeleteByScope({
  "scope": "",
  "api-version": "",
  "viewName": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope associated with view operations. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, 'providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for External Billing Account scope and 'providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for External Subscription scope.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-04-01-preview
  * viewName **required** `string`: View name

#### Output
*Output schema unknown*

### Views_GetByScope
Gets the view for the defined scope by view name.


```js
azure_cost_management_costmanagement.Views_GetByScope({
  "scope": "",
  "api-version": "",
  "viewName": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope associated with view operations. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, 'providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for External Billing Account scope and 'providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for External Subscription scope.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-04-01-preview
  * viewName **required** `string`: View name

#### Output
* output [View](#view)

### Views_CreateOrUpdateByScope
The operation to create or update a view. Update operation requires latest eTag to be set in the request. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.


```js
azure_cost_management_costmanagement.Views_CreateOrUpdateByScope({
  "scope": "",
  "api-version": "",
  "viewName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope associated with view operations. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, 'providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for External Billing Account scope and 'providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for External Subscription scope.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-04-01-preview
  * viewName **required** `string`: View name
  * parameters **required** [View](#view)

#### Output
* output [View](#view)



## Definitions

### BudgetModel
* BudgetModel `object`: A budget resource.
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
  * filter [ReportConfigFilter](#reportconfigfilter)
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
    * items [BudgetModel](#budgetmodel)

### CurrentSpend
* CurrentSpend `object`: The current amount of cost which is being tracked for a budget.
  * amount `number`: The total amount of cost which is being tracked by the budget.
  * unit `string`: The unit of measure for the budget amount.

### ErrorBase
* ErrorBase `object`: The details of the error.
  * code `string`: A machine readable error code.
  * message `string`: A human readable error message.
  * target `string`: Indicates which property in the request is responsible for the error.

### ErrorDetails
* ErrorDetails `object`: The details of the error.
  * code `string`: A machine readable error code.
  * details `array`: error details.
    * items [ErrorBase](#errorbase)
  * message `string`: A human readable error message.
  * target `string`: Indicates which property in the request is responsible for the error.

### ErrorResponse
* ErrorResponse `object`: Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message.
  * error [ErrorDetails](#errordetails)

### KpiProperties
* KpiProperties `object`: Each KPI must contain a 'type' and 'enabled' key.
  * enabled `boolean`: show the KPI in the UI?
  * id `string`: ID of resource related to metric (budget).
  * type `string` (values: Forecast, Budget): KPI type (Forecast, Budget).

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
* Operation `object`: A Cost management REST API operation.
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.CostManagement.
    * resource `string`: Resource on which the operation is performed: Dimensions, Query.
  * name `string`: Operation name: {provider}/{resource}/{operation}.

### OperationListResult
* OperationListResult `object`: Result of listing cost management operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of cost management operations supported by the Microsoft.CostManagement resource provider.
    * items [Operation](#operation)

### PivotProperties
* PivotProperties `object`: Each pivot must contain a 'type' and 'name'.
  * name `string`: Data field to show in view.
  * type `string` (values: Dimension, TagKey): Data type to show in view.

### ProxyResource
* ProxyResource `object`: The Resource model definition.
  * eTag `string`: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ReportConfigAggregation
* ReportConfigAggregation `object`: The aggregation expression to be used in the report.
  * function **required** `string` (values: Sum): The name of the aggregation function to use.
  * name **required** `string`: The name of the column to aggregate.

### ReportConfigColumnType
* ReportConfigColumnType `string` (values: Tag, Dimension): The type of the column in the report.

### ReportConfigComparisonExpression
* ReportConfigComparisonExpression `object`: The comparison expression to be used in the report.
  * name **required** `string`: The name of the column to use in comparison.
  * operator **required** `string` (values: In, Contains): The operator to use for comparison.
  * values **required** `array`: Array of values to use for comparison
    * items `string`

### ReportConfigDataset
* ReportConfigDataset `object`: The definition of data present in the report.
  * aggregation `object`: Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses.
  * configuration [ReportConfigDatasetConfiguration](#reportconfigdatasetconfiguration)
  * filter [ReportConfigFilter](#reportconfigfilter)
  * granularity `string` (values: Daily, Monthly): The granularity of rows in the report.
  * grouping `array`: Array of group by expression to use in the report. Report can have up to 2 group by clauses.
    * items [ReportConfigGrouping](#reportconfiggrouping)
  * sorting `array`: Array of order by expression to use in the report.
    * items [ReportConfigSorting](#reportconfigsorting)

### ReportConfigDatasetConfiguration
* ReportConfigDatasetConfiguration `object`: The configuration of dataset in the report.
  * columns `array`: Array of column names to be included in the report. Any valid report column name is allowed. If not provided, then report includes all columns.
    * items `string`

### ReportConfigDefinition
* ReportConfigDefinition `object`: The definition of a report config.
  * dataset [ReportConfigDataset](#reportconfigdataset)
  * timePeriod [ReportConfigTimePeriod](#reportconfigtimeperiod)
  * timeframe **required** `string` (values: WeekToDate, MonthToDate, YearToDate, Custom): The time frame for pulling data for the report. If custom, then a specific time period must be provided.
  * type **required** `string` (values: Usage): The type of the report. Usage represents actual usage, forecast represents forecasted data and UsageAndForecast represents both usage and forecasted data. Actual usage and forecasted data can be differentiated based on dates.

### ReportConfigFilter
* ReportConfigFilter `object`: The filter expression to be used in the report.
  * and `array`: The logical "AND" expression. Must have at least 2 items.
    * items [ReportConfigFilter](#reportconfigfilter)
  * dimension [ReportConfigComparisonExpression](#reportconfigcomparisonexpression)
  * not [ReportConfigFilter](#reportconfigfilter)
  * or `array`: The logical "OR" expression. Must have at least 2 items.
    * items [ReportConfigFilter](#reportconfigfilter)
  * tag [ReportConfigComparisonExpression](#reportconfigcomparisonexpression)

### ReportConfigGrouping
* ReportConfigGrouping `object`: The group by expression to be used in the report.
  * name **required** `string`: The name of the column to group. This version supports subscription lowest possible grain.
  * type **required** [ReportConfigColumnType](#reportconfigcolumntype)

### ReportConfigSorting
* ReportConfigSorting `object`: The order by expression to be used in the report.
  * direction `string` (values: Ascending, Descending): Direction of sort.
  * name **required** `string`: The name of the column to sort.

### ReportConfigTimePeriod
* ReportConfigTimePeriod `object`: The start and end date for pulling data for the report.
  * from **required** `string`: The start date to pull data from.
  * to **required** `string`: The end date to pull data to.

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### Scope
* Scope `object`: The Scope model definition
  * childScope [Scope](#scope)
  * id `string`: Scope id
  * name `string`: Scope name
  * type `string`: Scope type

### View
* View `object`: States and configurations of Cost Analysis.
  * properties [ViewProperties](#viewproperties)
  * eTag `string`: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ViewListResult
* ViewListResult `object`: Result of listing views. It contains a list of available views.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of views.
    * items [View](#view)

### ViewProperties
* ViewProperties `object`: The properties of the view.
  * accumulated `string` (values: true, false): Show costs accumulated over time.
  * chart `string` (values: Area, Line, StackedColumn, GroupedColumn, Table): Chart type of the main view in Cost Analysis. Required.
  * createdOn `string`: Date the user created this view.
  * displayName `string`: User input name of the view. Required.
  * kpis `array`: List of KPIs to show in Cost Analysis UI.
    * items [KpiProperties](#kpiproperties)
  * metric `string` (values: ActualCost, AmortizedCost, AHUB): Metric to use when displaying costs.
  * modifiedOn `string`: Date when the user last modified this view.
  * pivots `array`: Configuration of 3 sub-views in the Cost Analysis UI.
    * items [PivotProperties](#pivotproperties)
  * query [ReportConfigDefinition](#reportconfigdefinition)
  * scope `string`: Cost Management scope to save the view on. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.


