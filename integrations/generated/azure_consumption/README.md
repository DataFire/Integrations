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

azure_consumption.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Consumption management client provides access to consumption resources for Azure Enterprise Subscriptions.

## Actions

### Operations_List
Lists all of the available consumption REST API operations.


```js
azure_consumption.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-12-30-preview.

#### Output
* output [OperationListResult](#operationlistresult)

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-12-30-preview.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [BudgetsListResult](#budgetslistresult)

### Budgets_Delete
The operation to delete a budget.


```js
azure_consumption.Budgets_Delete({
  "api-version": "",
  "subscriptionId": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-12-30-preview.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * name **required** `string`: Budget name.

#### Output
*Output schema unknown*

### Budgets_Get
Gets the budget for a subscription by budget name.


```js
azure_consumption.Budgets_Get({
  "api-version": "",
  "subscriptionId": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-12-30-preview.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * name **required** `string`: Budget name.

#### Output
* output [Budget](#budget)

### Budgets_CreateOrUpdate
The operation to create or update a budget. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.


```js
azure_consumption.Budgets_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "name": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-12-30-preview.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * name **required** `string`: Budget name.
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
  * category **required** `string` (values: Cost): The category of the budget, whether the budget tracks cost or something else.
  * currentSpend [CurrentSpend](#currentspend)
  * notifications `object`: Dictionary of notifications associated with the budget. Budget can have up to five notifications.
  * timeGrain **required** `string` (values: Monthly, Quarterly, Annually): The time covered by a budget. Tracking of the amount will be reset based on the time grain.
  * timePeriod **required** [BudgetTimePeriod](#budgettimeperiod)

### BudgetTimePeriod
* BudgetTimePeriod `object`: The start and end date for a budget.
  * endDate `string`: The end date for the budget. If not provided, we default this to 10 years from the start date.
  * startDate **required** `string`: The start date for the budget.

### BudgetsListResult
* BudgetsListResult `object`: Result of listing budgets. It contains a list of available budgets in the scope provided.
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

### Notification
* Notification `object`: The notification associated with a budget.
  * contactEmails **required** `array`: Email addresses to send the budget notification to when the threshold is exceeded.
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

### ProxyResource
* ProxyResource `object`: The Resource model definition.
  * eTag `string`: eTag of the resource. To handle concurrent update scenarion, this field will be used to determine whether the user is updating the latest version or not.
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.


