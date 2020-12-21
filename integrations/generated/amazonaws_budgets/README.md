# @datafire/amazonaws_budgets

Client library for AWS Budgets

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_budgets
```
```js
let amazonaws_budgets = require('@datafire/amazonaws_budgets').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>The AWS Budgets API enables you to use AWS Budgets to plan your service usage, service costs, and instance reservations. The API reference provides descriptions, syntax, and usage examples for each of the actions and data types for AWS Budgets. </p> <p>Budgets provide you with a way to see the following information:</p> <ul> <li> <p>How close your plan is to your budgeted amount or to the free tier limits</p> </li> <li> <p>Your usage-to-date, including how much you've used of your Reserved Instances (RIs)</p> </li> <li> <p>Your current estimated charges from AWS, and how much your predicted usage will accrue in charges by the end of the month</p> </li> <li> <p>How much of your budget has been used</p> </li> </ul> <p>AWS updates your budget status several times a day. Budgets track your unblended costs, subscriptions, refunds, and RIs. You can create the following types of budgets:</p> <ul> <li> <p> <b>Cost budgets</b> - Plan how much you want to spend on a service.</p> </li> <li> <p> <b>Usage budgets</b> - Plan how much you want to use one or more services.</p> </li> <li> <p> <b>RI utilization budgets</b> - Define a utilization threshold, and receive alerts when your RI usage falls below that threshold. This lets you see if your RIs are unused or under-utilized.</p> </li> <li> <p> <b>RI coverage budgets</b> - Define a coverage threshold, and receive alerts when the number of your instance hours that are covered by RIs fall below that threshold. This lets you see how much of your instance usage is covered by a reservation.</p> </li> </ul> <p>Service Endpoint</p> <p>The AWS Budgets API provides the following endpoint:</p> <ul> <li> <p>https://budgets.amazonaws.com</p> </li> </ul> <p>For information about costs that are associated with the AWS Budgets API, see <a href="https://aws.amazon.com/aws-cost-management/pricing/">AWS Cost Management Pricing</a>.</p>

## Actions

### CreateBudget



```js
amazonaws_budgets.CreateBudget({
  "AccountId": null,
  "Budget": null
}, context)
```

#### Input
* input `object`
  * AccountId **required**
  * Budget **required**
    * BudgetLimit
      * Amount **required**
      * Unit **required**
    * BudgetName **required**
    * BudgetType **required**
    * CalculatedSpend
      * ActualSpend **required**
        * Amount **required**
        * Unit **required**
      * ForecastedSpend
        * Amount **required**
        * Unit **required**
    * CostFilters
    * CostTypes
      * IncludeCredit
      * IncludeDiscount
      * IncludeOtherSubscription
      * IncludeRecurring
      * IncludeRefund
      * IncludeSubscription
      * IncludeSupport
      * IncludeTax
      * IncludeUpfront
      * UseAmortized
      * UseBlended
    * LastUpdatedTime
    * PlannedBudgetLimits
    * TimePeriod
      * End
      * Start
    * TimeUnit **required**
  * NotificationsWithSubscribers
    * items [NotificationWithSubscribers](#notificationwithsubscribers)

#### Output
* output [CreateBudgetResponse](#createbudgetresponse)

### CreateBudgetAction



```js
amazonaws_budgets.CreateBudgetAction({
  "AccountId": "",
  "BudgetName": "",
  "NotificationType": "",
  "ActionType": null,
  "ActionThreshold": {
    "ActionThresholdValue": 0,
    "ActionThresholdType": ""
  },
  "Definition": {},
  "ExecutionRoleArn": null,
  "ApprovalModel": null,
  "Subscribers": []
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * ActionThreshold **required** [ActionThreshold](#actionthreshold)
  * ActionType **required**
  * ApprovalModel **required**
  * BudgetName **required** [BudgetName](#budgetname)
  * Definition **required** [Definition](#definition)
  * ExecutionRoleArn **required**
  * NotificationType **required** [NotificationType](#notificationtype)
  * Subscribers **required** [Subscribers](#subscribers)

#### Output
* output [CreateBudgetActionResponse](#createbudgetactionresponse)

### CreateNotification



```js
amazonaws_budgets.CreateNotification({
  "AccountId": null,
  "BudgetName": null,
  "Notification": null,
  "Subscribers": null
}, context)
```

#### Input
* input `object`
  * AccountId **required**
  * BudgetName **required**
  * Notification **required**
    * ComparisonOperator **required**
    * NotificationState
    * NotificationType **required**
    * Threshold **required**
    * ThresholdType
  * Subscribers **required**
    * items [Subscriber](#subscriber)

#### Output
* output [CreateNotificationResponse](#createnotificationresponse)

### CreateSubscriber



```js
amazonaws_budgets.CreateSubscriber({
  "AccountId": null,
  "BudgetName": null,
  "Notification": null,
  "Subscriber": null
}, context)
```

#### Input
* input `object`
  * AccountId **required**
  * BudgetName **required**
  * Notification **required**
    * ComparisonOperator **required**
    * NotificationState
    * NotificationType **required**
    * Threshold **required**
    * ThresholdType
  * Subscriber **required**
    * Address **required**
    * SubscriptionType **required**

#### Output
* output [CreateSubscriberResponse](#createsubscriberresponse)

### DeleteBudget



```js
amazonaws_budgets.DeleteBudget({
  "AccountId": null,
  "BudgetName": null
}, context)
```

#### Input
* input `object`
  * AccountId **required**
  * BudgetName **required**

#### Output
* output [DeleteBudgetResponse](#deletebudgetresponse)

### DeleteBudgetAction



```js
amazonaws_budgets.DeleteBudgetAction({
  "AccountId": "",
  "BudgetName": "",
  "ActionId": null
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * ActionId **required**
  * BudgetName **required** [BudgetName](#budgetname)

#### Output
* output [DeleteBudgetActionResponse](#deletebudgetactionresponse)

### DeleteNotification



```js
amazonaws_budgets.DeleteNotification({
  "AccountId": null,
  "BudgetName": null,
  "Notification": null
}, context)
```

#### Input
* input `object`
  * AccountId **required**
  * BudgetName **required**
  * Notification **required**
    * ComparisonOperator **required**
    * NotificationState
    * NotificationType **required**
    * Threshold **required**
    * ThresholdType

#### Output
* output [DeleteNotificationResponse](#deletenotificationresponse)

### DeleteSubscriber



```js
amazonaws_budgets.DeleteSubscriber({
  "AccountId": null,
  "BudgetName": null,
  "Notification": null,
  "Subscriber": null
}, context)
```

#### Input
* input `object`
  * AccountId **required**
  * BudgetName **required**
  * Notification **required**
    * ComparisonOperator **required**
    * NotificationState
    * NotificationType **required**
    * Threshold **required**
    * ThresholdType
  * Subscriber **required**
    * Address **required**
    * SubscriptionType **required**

#### Output
* output [DeleteSubscriberResponse](#deletesubscriberresponse)

### DescribeBudget



```js
amazonaws_budgets.DescribeBudget({
  "AccountId": null,
  "BudgetName": null
}, context)
```

#### Input
* input `object`
  * AccountId **required**
  * BudgetName **required**

#### Output
* output [DescribeBudgetResponse](#describebudgetresponse)

### DescribeBudgetAction



```js
amazonaws_budgets.DescribeBudgetAction({
  "AccountId": "",
  "BudgetName": "",
  "ActionId": null
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * ActionId **required**
  * BudgetName **required** [BudgetName](#budgetname)

#### Output
* output [DescribeBudgetActionResponse](#describebudgetactionresponse)

### DescribeBudgetActionHistories



```js
amazonaws_budgets.DescribeBudgetActionHistories({
  "AccountId": "",
  "BudgetName": "",
  "ActionId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AccountId **required** [AccountId](#accountid)
  * ActionId **required**
  * BudgetName **required** [BudgetName](#budgetname)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)
  * TimePeriod [TimePeriod](#timeperiod)

#### Output
* output [DescribeBudgetActionHistoriesResponse](#describebudgetactionhistoriesresponse)

### DescribeBudgetActionsForAccount



```js
amazonaws_budgets.DescribeBudgetActionsForAccount({
  "AccountId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AccountId **required** [AccountId](#accountid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)

#### Output
* output [DescribeBudgetActionsForAccountResponse](#describebudgetactionsforaccountresponse)

### DescribeBudgetActionsForBudget



```js
amazonaws_budgets.DescribeBudgetActionsForBudget({
  "AccountId": "",
  "BudgetName": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)

#### Output
* output [DescribeBudgetActionsForBudgetResponse](#describebudgetactionsforbudgetresponse)

### DescribeBudgetPerformanceHistory



```js
amazonaws_budgets.DescribeBudgetPerformanceHistory({
  "AccountId": "",
  "BudgetName": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)
  * TimePeriod
    * End
    * Start

#### Output
* output [DescribeBudgetPerformanceHistoryResponse](#describebudgetperformancehistoryresponse)

### DescribeBudgets



```js
amazonaws_budgets.DescribeBudgets({
  "AccountId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AccountId **required**
  * MaxResults
  * NextToken

#### Output
* output [DescribeBudgetsResponse](#describebudgetsresponse)

### DescribeNotificationsForBudget



```js
amazonaws_budgets.DescribeNotificationsForBudget({
  "AccountId": null,
  "BudgetName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AccountId **required**
  * BudgetName **required**
  * MaxResults
  * NextToken

#### Output
* output [DescribeNotificationsForBudgetResponse](#describenotificationsforbudgetresponse)

### DescribeSubscribersForNotification



```js
amazonaws_budgets.DescribeSubscribersForNotification({
  "AccountId": null,
  "BudgetName": null,
  "Notification": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AccountId **required**
  * BudgetName **required**
  * MaxResults
  * NextToken
  * Notification **required**
    * ComparisonOperator **required**
    * NotificationState
    * NotificationType **required**
    * Threshold **required**
    * ThresholdType

#### Output
* output [DescribeSubscribersForNotificationResponse](#describesubscribersfornotificationresponse)

### ExecuteBudgetAction



```js
amazonaws_budgets.ExecuteBudgetAction({
  "AccountId": "",
  "BudgetName": "",
  "ActionId": null,
  "ExecutionType": null
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * ActionId **required**
  * BudgetName **required** [BudgetName](#budgetname)
  * ExecutionType **required**

#### Output
* output [ExecuteBudgetActionResponse](#executebudgetactionresponse)

### UpdateBudget



```js
amazonaws_budgets.UpdateBudget({
  "AccountId": null,
  "NewBudget": null
}, context)
```

#### Input
* input `object`
  * AccountId **required**
  * NewBudget **required**
    * BudgetLimit
      * Amount **required**
      * Unit **required**
    * BudgetName **required**
    * BudgetType **required**
    * CalculatedSpend
      * ActualSpend **required**
        * Amount **required**
        * Unit **required**
      * ForecastedSpend
        * Amount **required**
        * Unit **required**
    * CostFilters
    * CostTypes
      * IncludeCredit
      * IncludeDiscount
      * IncludeOtherSubscription
      * IncludeRecurring
      * IncludeRefund
      * IncludeSubscription
      * IncludeSupport
      * IncludeTax
      * IncludeUpfront
      * UseAmortized
      * UseBlended
    * LastUpdatedTime
    * PlannedBudgetLimits
    * TimePeriod
      * End
      * Start
    * TimeUnit **required**

#### Output
* output [UpdateBudgetResponse](#updatebudgetresponse)

### UpdateBudgetAction



```js
amazonaws_budgets.UpdateBudgetAction({
  "AccountId": "",
  "BudgetName": "",
  "ActionId": null
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * ActionId **required**
  * ActionThreshold [ActionThreshold](#actionthreshold)
  * ApprovalModel
  * BudgetName **required** [BudgetName](#budgetname)
  * Definition [Definition](#definition)
  * ExecutionRoleArn
  * NotificationType [NotificationType](#notificationtype)
  * Subscribers [Subscribers](#subscribers)

#### Output
* output [UpdateBudgetActionResponse](#updatebudgetactionresponse)

### UpdateNotification



```js
amazonaws_budgets.UpdateNotification({
  "AccountId": null,
  "BudgetName": null,
  "OldNotification": null,
  "NewNotification": null
}, context)
```

#### Input
* input `object`
  * AccountId **required**
  * BudgetName **required**
  * NewNotification **required**
    * ComparisonOperator **required**
    * NotificationState
    * NotificationType **required**
    * Threshold **required**
    * ThresholdType
  * OldNotification **required**
    * ComparisonOperator **required**
    * NotificationState
    * NotificationType **required**
    * Threshold **required**
    * ThresholdType

#### Output
* output [UpdateNotificationResponse](#updatenotificationresponse)

### UpdateSubscriber



```js
amazonaws_budgets.UpdateSubscriber({
  "AccountId": null,
  "BudgetName": null,
  "Notification": null,
  "OldSubscriber": null,
  "NewSubscriber": null
}, context)
```

#### Input
* input `object`
  * AccountId **required**
  * BudgetName **required**
  * NewSubscriber **required**
    * Address **required**
    * SubscriptionType **required**
  * Notification **required**
    * ComparisonOperator **required**
    * NotificationState
    * NotificationType **required**
    * Threshold **required**
    * ThresholdType
  * OldSubscriber **required**
    * Address **required**
    * SubscriptionType **required**

#### Output
* output [UpdateSubscriberResponse](#updatesubscriberresponse)



## Definitions

### AccessDeniedException


### AccountId
* AccountId `string`: The account ID of the user. It should be a 12-digit number.

### Action
* Action `object`:  A budget action resource. 
  * ActionId **required**
  * ActionThreshold **required**
    * ActionThresholdType **required** [ThresholdType](#thresholdtype)
    * ActionThresholdValue **required** [NotificationThreshold](#notificationthreshold)
  * ActionType **required**
  * ApprovalModel **required**
  * BudgetName **required** [BudgetName](#budgetname)
  * Definition **required**
    * IamActionDefinition
      * Groups
        * items [Group](#group)
      * PolicyArn **required**
      * Roles
        * items [Role](#role)
      * Users
        * items [User](#user)
    * ScpActionDefinition
      * PolicyId **required**
      * TargetIds **required**
        * items [TargetId](#targetid)
    * SsmActionDefinition
      * ActionSubType **required**
      * InstanceIds **required**
        * items [InstanceId](#instanceid)
      * Region **required**
  * ExecutionRoleArn **required**
  * NotificationType **required** [NotificationType](#notificationtype)
  * Status **required**
  * Subscribers **required** [Subscribers](#subscribers)

### ActionHistories
* ActionHistories `array`
  * items [ActionHistory](#actionhistory)

### ActionHistory
* ActionHistory `object`:  The historical records for a budget action. 
  * ActionHistoryDetails **required**
    * Action **required**
      * ActionId **required**
      * ActionThreshold **required**
        * ActionThresholdType **required** [ThresholdType](#thresholdtype)
        * ActionThresholdValue **required** [NotificationThreshold](#notificationthreshold)
      * ActionType **required**
      * ApprovalModel **required**
      * BudgetName **required** [BudgetName](#budgetname)
      * Definition **required**
        * IamActionDefinition
          * Groups
          * PolicyArn **required**
          * Roles
          * Users
        * ScpActionDefinition
          * PolicyId **required**
          * TargetIds **required**
        * SsmActionDefinition
          * ActionSubType **required**
          * InstanceIds **required**
          * Region **required**
      * ExecutionRoleArn **required**
      * NotificationType **required** [NotificationType](#notificationtype)
      * Status **required**
      * Subscribers **required** [Subscribers](#subscribers)
    * Message **required** [GenericString](#genericstring)
  * EventType **required**
  * Status **required**
  * Timestamp **required** [GenericTimestamp](#generictimestamp)

### ActionHistoryDetails
* ActionHistoryDetails `object`:  The description of details of the event. 
  * Action **required**
    * ActionId **required**
    * ActionThreshold **required**
      * ActionThresholdType **required** [ThresholdType](#thresholdtype)
      * ActionThresholdValue **required** [NotificationThreshold](#notificationthreshold)
    * ActionType **required**
    * ApprovalModel **required**
    * BudgetName **required** [BudgetName](#budgetname)
    * Definition **required**
      * IamActionDefinition
        * Groups
          * items [Group](#group)
        * PolicyArn **required**
        * Roles
          * items [Role](#role)
        * Users
          * items [User](#user)
      * ScpActionDefinition
        * PolicyId **required**
        * TargetIds **required**
          * items [TargetId](#targetid)
      * SsmActionDefinition
        * ActionSubType **required**
        * InstanceIds **required**
          * items [InstanceId](#instanceid)
        * Region **required**
    * ExecutionRoleArn **required**
    * NotificationType **required** [NotificationType](#notificationtype)
    * Status **required**
    * Subscribers **required** [Subscribers](#subscribers)
  * Message **required** [GenericString](#genericstring)

### ActionId
* ActionId `string`

### ActionStatus
* ActionStatus `string` (values: STANDBY, PENDING, EXECUTION_IN_PROGRESS, EXECUTION_SUCCESS, EXECUTION_FAILURE, REVERSE_IN_PROGRESS, REVERSE_SUCCESS, REVERSE_FAILURE, RESET_IN_PROGRESS, RESET_FAILURE)

### ActionSubType
* ActionSubType `string` (values: STOP_EC2_INSTANCES, STOP_RDS_INSTANCES)

### ActionThreshold
* ActionThreshold `object`:  The trigger threshold of the action. 
  * ActionThresholdType **required** [ThresholdType](#thresholdtype)
  * ActionThresholdValue **required** [NotificationThreshold](#notificationthreshold)

### ActionType
* ActionType `string` (values: APPLY_IAM_POLICY, APPLY_SCP_POLICY, RUN_SSM_DOCUMENTS)

### Actions
* Actions `array`
  * items [Action](#action)

### ApprovalModel
* ApprovalModel `string` (values: AUTOMATIC, MANUAL)

### Budget
* Budget `object`: <p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the ARN pattern for a budget: </p> <p> <code>arn:aws:budgets::AccountId:budget/budgetName</code> </p>
  * BudgetLimit
    * Amount **required**
    * Unit **required**
  * BudgetName **required**
  * BudgetType **required**
  * CalculatedSpend
    * ActualSpend **required**
      * Amount **required**
      * Unit **required**
    * ForecastedSpend
      * Amount **required**
      * Unit **required**
  * CostFilters
  * CostTypes
    * IncludeCredit
    * IncludeDiscount
    * IncludeOtherSubscription
    * IncludeRecurring
    * IncludeRefund
    * IncludeSubscription
    * IncludeSupport
    * IncludeTax
    * IncludeUpfront
    * UseAmortized
    * UseBlended
  * LastUpdatedTime
  * PlannedBudgetLimits
  * TimePeriod
    * End
    * Start
  * TimeUnit **required**

### BudgetName
* BudgetName `string`:  A string that represents the budget name. The ":" and "\" characters aren't allowed.

### BudgetPerformanceHistory
* BudgetPerformanceHistory `object`: A history of the state of a budget at the end of the budget's specified time period.
  * BudgetName [BudgetName](#budgetname)
  * BudgetType [BudgetType](#budgettype)
  * BudgetedAndActualAmountsList
    * items [BudgetedAndActualAmounts](#budgetedandactualamounts)
  * CostFilters
  * CostTypes
    * IncludeCredit
    * IncludeDiscount
    * IncludeOtherSubscription
    * IncludeRecurring
    * IncludeRefund
    * IncludeSubscription
    * IncludeSupport
    * IncludeTax
    * IncludeUpfront
    * UseAmortized
    * UseBlended
  * TimeUnit [TimeUnit](#timeunit)

### BudgetType
* BudgetType `string` (values: USAGE, COST, RI_UTILIZATION, RI_COVERAGE, SAVINGS_PLANS_UTILIZATION, SAVINGS_PLANS_COVERAGE): <p> The type of a budget. It must be one of the following types: </p> <p> <code>COST</code>, <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, or <code>SAVINGS_PLANS_COVERAGE</code>.</p>

### BudgetedAndActualAmounts
* BudgetedAndActualAmounts `object`: The amount of cost or usage that you created the budget for, compared to your actual costs or usage.
  * ActualAmount
    * Amount **required**
    * Unit **required**
  * BudgetedAmount
    * Amount **required**
    * Unit **required**
  * TimePeriod
    * End
    * Start

### BudgetedAndActualAmountsList
* BudgetedAndActualAmountsList `array`
  * items [BudgetedAndActualAmounts](#budgetedandactualamounts)

### Budgets
* Budgets `array`:  A list of budgets.
  * items [Budget](#budget)

### CalculatedSpend
* CalculatedSpend `object`: <p>The spend objects that are associated with this budget. The <code>actualSpend</code> tracks how much you've used, cost, usage, RI units, or Savings Plans units and the <code>forecastedSpend</code> tracks how much you are predicted to spend based on your historical usage profile.</p> <p>For example, if it is the 20th of the month and you have spent <code>50</code> dollars on Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your <code>forecastedSpend</code> is <code>75 USD</code>.</p>
  * ActualSpend **required**
    * Amount **required**
    * Unit **required**
  * ForecastedSpend
    * Amount **required**
    * Unit **required**

### ComparisonOperator
* ComparisonOperator `string` (values: GREATER_THAN, LESS_THAN, EQUAL_TO): <p> The comparison operator of a notification. Currently the service supports the following operators:</p> <p> <code>GREATER_THAN</code>, <code>LESS_THAN</code>, <code>EQUAL_TO</code> </p>

### CostFilters
* CostFilters `object`:  A map that represents the cost filters that are applied to the budget.

### CostTypes
* CostTypes `object`: <p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p>
  * IncludeCredit
  * IncludeDiscount
  * IncludeOtherSubscription
  * IncludeRecurring
  * IncludeRefund
  * IncludeSubscription
  * IncludeSupport
  * IncludeTax
  * IncludeUpfront
  * UseAmortized
  * UseBlended

### CreateBudgetActionRequest
* CreateBudgetActionRequest `object`
  * AccountId **required** [AccountId](#accountid)
  * ActionThreshold **required** [ActionThreshold](#actionthreshold)
  * ActionType **required**
  * ApprovalModel **required**
  * BudgetName **required** [BudgetName](#budgetname)
  * Definition **required** [Definition](#definition)
  * ExecutionRoleArn **required**
  * NotificationType **required** [NotificationType](#notificationtype)
  * Subscribers **required** [Subscribers](#subscribers)

### CreateBudgetActionResponse
* CreateBudgetActionResponse `object`
  * AccountId **required** [AccountId](#accountid)
  * ActionId **required**
  * BudgetName **required** [BudgetName](#budgetname)

### CreateBudgetRequest
* CreateBudgetRequest `object`:  Request of CreateBudget 
  * AccountId **required**
  * Budget **required**
    * BudgetLimit
      * Amount **required**
      * Unit **required**
    * BudgetName **required**
    * BudgetType **required**
    * CalculatedSpend
      * ActualSpend **required**
        * Amount **required**
        * Unit **required**
      * ForecastedSpend
        * Amount **required**
        * Unit **required**
    * CostFilters
    * CostTypes
      * IncludeCredit
      * IncludeDiscount
      * IncludeOtherSubscription
      * IncludeRecurring
      * IncludeRefund
      * IncludeSubscription
      * IncludeSupport
      * IncludeTax
      * IncludeUpfront
      * UseAmortized
      * UseBlended
    * LastUpdatedTime
    * PlannedBudgetLimits
    * TimePeriod
      * End
      * Start
    * TimeUnit **required**
  * NotificationsWithSubscribers
    * items [NotificationWithSubscribers](#notificationwithsubscribers)

### CreateBudgetResponse
* CreateBudgetResponse `object`:  Response of CreateBudget 

### CreateNotificationRequest
* CreateNotificationRequest `object`:  Request of CreateNotification 
  * AccountId **required**
  * BudgetName **required**
  * Notification **required**
    * ComparisonOperator **required**
    * NotificationState
    * NotificationType **required**
    * Threshold **required**
    * ThresholdType
  * Subscribers **required**
    * items [Subscriber](#subscriber)

### CreateNotificationResponse
* CreateNotificationResponse `object`:  Response of CreateNotification 

### CreateSubscriberRequest
* CreateSubscriberRequest `object`:  Request of CreateSubscriber 
  * AccountId **required**
  * BudgetName **required**
  * Notification **required**
    * ComparisonOperator **required**
    * NotificationState
    * NotificationType **required**
    * Threshold **required**
    * ThresholdType
  * Subscriber **required**
    * Address **required**
    * SubscriptionType **required**

### CreateSubscriberResponse
* CreateSubscriberResponse `object`:  Response of CreateSubscriber 

### CreationLimitExceededException


### Definition
* Definition `object`:  Specifies all of the type-specific parameters. 
  * IamActionDefinition
    * Groups
      * items [Group](#group)
    * PolicyArn **required**
    * Roles
      * items [Role](#role)
    * Users
      * items [User](#user)
  * ScpActionDefinition
    * PolicyId **required**
    * TargetIds **required**
      * items [TargetId](#targetid)
  * SsmActionDefinition
    * ActionSubType **required**
    * InstanceIds **required**
      * items [InstanceId](#instanceid)
    * Region **required**

### DeleteBudgetActionRequest
* DeleteBudgetActionRequest `object`
  * AccountId **required** [AccountId](#accountid)
  * ActionId **required**
  * BudgetName **required** [BudgetName](#budgetname)

### DeleteBudgetActionResponse
* DeleteBudgetActionResponse `object`
  * AccountId **required** [AccountId](#accountid)
  * Action **required** [Action](#action)
  * BudgetName **required** [BudgetName](#budgetname)

### DeleteBudgetRequest
* DeleteBudgetRequest `object`:  Request of DeleteBudget 
  * AccountId **required**
  * BudgetName **required**

### DeleteBudgetResponse
* DeleteBudgetResponse `object`:  Response of DeleteBudget 

### DeleteNotificationRequest
* DeleteNotificationRequest `object`:  Request of DeleteNotification 
  * AccountId **required**
  * BudgetName **required**
  * Notification **required**
    * ComparisonOperator **required**
    * NotificationState
    * NotificationType **required**
    * Threshold **required**
    * ThresholdType

### DeleteNotificationResponse
* DeleteNotificationResponse `object`:  Response of DeleteNotification 

### DeleteSubscriberRequest
* DeleteSubscriberRequest `object`:  Request of DeleteSubscriber 
  * AccountId **required**
  * BudgetName **required**
  * Notification **required**
    * ComparisonOperator **required**
    * NotificationState
    * NotificationType **required**
    * Threshold **required**
    * ThresholdType
  * Subscriber **required**
    * Address **required**
    * SubscriptionType **required**

### DeleteSubscriberResponse
* DeleteSubscriberResponse `object`:  Response of DeleteSubscriber 

### DescribeBudgetActionHistoriesRequest
* DescribeBudgetActionHistoriesRequest `object`
  * AccountId **required** [AccountId](#accountid)
  * ActionId **required**
  * BudgetName **required** [BudgetName](#budgetname)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)
  * TimePeriod [TimePeriod](#timeperiod)

### DescribeBudgetActionHistoriesResponse
* DescribeBudgetActionHistoriesResponse `object`
  * ActionHistories **required**
    * items [ActionHistory](#actionhistory)
  * NextToken [GenericString](#genericstring)

### DescribeBudgetActionRequest
* DescribeBudgetActionRequest `object`
  * AccountId **required** [AccountId](#accountid)
  * ActionId **required**
  * BudgetName **required** [BudgetName](#budgetname)

### DescribeBudgetActionResponse
* DescribeBudgetActionResponse `object`
  * AccountId **required** [AccountId](#accountid)
  * Action **required**
    * ActionId **required**
    * ActionThreshold **required**
      * ActionThresholdType **required** [ThresholdType](#thresholdtype)
      * ActionThresholdValue **required** [NotificationThreshold](#notificationthreshold)
    * ActionType **required**
    * ApprovalModel **required**
    * BudgetName **required** [BudgetName](#budgetname)
    * Definition **required**
      * IamActionDefinition
        * Groups
          * items [Group](#group)
        * PolicyArn **required**
        * Roles
          * items [Role](#role)
        * Users
          * items [User](#user)
      * ScpActionDefinition
        * PolicyId **required**
        * TargetIds **required**
          * items [TargetId](#targetid)
      * SsmActionDefinition
        * ActionSubType **required**
        * InstanceIds **required**
          * items [InstanceId](#instanceid)
        * Region **required**
    * ExecutionRoleArn **required**
    * NotificationType **required** [NotificationType](#notificationtype)
    * Status **required**
    * Subscribers **required** [Subscribers](#subscribers)
  * BudgetName **required** [BudgetName](#budgetname)

### DescribeBudgetActionsForAccountRequest
* DescribeBudgetActionsForAccountRequest `object`
  * AccountId **required** [AccountId](#accountid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)

### DescribeBudgetActionsForAccountResponse
* DescribeBudgetActionsForAccountResponse `object`
  * Actions **required**
    * items [Action](#action)
  * NextToken [GenericString](#genericstring)

### DescribeBudgetActionsForBudgetRequest
* DescribeBudgetActionsForBudgetRequest `object`
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)

### DescribeBudgetActionsForBudgetResponse
* DescribeBudgetActionsForBudgetResponse `object`
  * Actions **required**
    * items [Action](#action)
  * NextToken [GenericString](#genericstring)

### DescribeBudgetPerformanceHistoryRequest
* DescribeBudgetPerformanceHistoryRequest `object`
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)
  * TimePeriod
    * End
    * Start

### DescribeBudgetPerformanceHistoryResponse
* DescribeBudgetPerformanceHistoryResponse `object`
  * BudgetPerformanceHistory
    * BudgetName [BudgetName](#budgetname)
    * BudgetType [BudgetType](#budgettype)
    * BudgetedAndActualAmountsList
      * items [BudgetedAndActualAmounts](#budgetedandactualamounts)
    * CostFilters
    * CostTypes
      * IncludeCredit
      * IncludeDiscount
      * IncludeOtherSubscription
      * IncludeRecurring
      * IncludeRefund
      * IncludeSubscription
      * IncludeSupport
      * IncludeTax
      * IncludeUpfront
      * UseAmortized
      * UseBlended
    * TimeUnit [TimeUnit](#timeunit)
  * NextToken [GenericString](#genericstring)

### DescribeBudgetRequest
* DescribeBudgetRequest `object`:  Request of DescribeBudget 
  * AccountId **required**
  * BudgetName **required**

### DescribeBudgetResponse
* DescribeBudgetResponse `object`:  Response of DescribeBudget 
  * Budget
    * BudgetLimit
      * Amount **required**
      * Unit **required**
    * BudgetName **required**
    * BudgetType **required**
    * CalculatedSpend
      * ActualSpend **required**
        * Amount **required**
        * Unit **required**
      * ForecastedSpend
        * Amount **required**
        * Unit **required**
    * CostFilters
    * CostTypes
      * IncludeCredit
      * IncludeDiscount
      * IncludeOtherSubscription
      * IncludeRecurring
      * IncludeRefund
      * IncludeSubscription
      * IncludeSupport
      * IncludeTax
      * IncludeUpfront
      * UseAmortized
      * UseBlended
    * LastUpdatedTime
    * PlannedBudgetLimits
    * TimePeriod
      * End
      * Start
    * TimeUnit **required**

### DescribeBudgetsRequest
* DescribeBudgetsRequest `object`:  Request of DescribeBudgets 
  * AccountId **required**
  * MaxResults
  * NextToken

### DescribeBudgetsResponse
* DescribeBudgetsResponse `object`:  Response of DescribeBudgets 
  * Budgets
    * items [Budget](#budget)
  * NextToken

### DescribeNotificationsForBudgetRequest
* DescribeNotificationsForBudgetRequest `object`:  Request of DescribeNotificationsForBudget 
  * AccountId **required**
  * BudgetName **required**
  * MaxResults
  * NextToken

### DescribeNotificationsForBudgetResponse
* DescribeNotificationsForBudgetResponse `object`:  Response of GetNotificationsForBudget 
  * NextToken
  * Notifications
    * items [Notification](#notification)

### DescribeSubscribersForNotificationRequest
* DescribeSubscribersForNotificationRequest `object`:  Request of DescribeSubscribersForNotification 
  * AccountId **required**
  * BudgetName **required**
  * MaxResults
  * NextToken
  * Notification **required**
    * ComparisonOperator **required**
    * NotificationState
    * NotificationType **required**
    * Threshold **required**
    * ThresholdType

### DescribeSubscribersForNotificationResponse
* DescribeSubscribersForNotificationResponse `object`:  Response of DescribeSubscribersForNotification 
  * NextToken
  * Subscribers
    * items [Subscriber](#subscriber)

### DimensionValues
* DimensionValues `array`
  * items [GenericString](#genericstring)

### DuplicateRecordException


### EventType
* EventType `string` (values: SYSTEM, CREATE_ACTION, DELETE_ACTION, UPDATE_ACTION, EXECUTE_ACTION)

### ExecuteBudgetActionRequest
* ExecuteBudgetActionRequest `object`
  * AccountId **required** [AccountId](#accountid)
  * ActionId **required**
  * BudgetName **required** [BudgetName](#budgetname)
  * ExecutionType **required**

### ExecuteBudgetActionResponse
* ExecuteBudgetActionResponse `object`
  * AccountId **required** [AccountId](#accountid)
  * ActionId **required**
  * BudgetName **required** [BudgetName](#budgetname)
  * ExecutionType **required**

### ExecutionType
* ExecutionType `string` (values: APPROVE_BUDGET_ACTION, RETRY_BUDGET_ACTION, REVERSE_BUDGET_ACTION, RESET_BUDGET_ACTION)

### ExpiredNextTokenException


### GenericString
* GenericString `string`:  A generic string.

### GenericTimestamp
* GenericTimestamp `string`:  A generic time stamp. In Java, it is transformed to a <code>Date</code> object.

### Group
* Group `string`

### Groups
* Groups `array`
  * items [Group](#group)

### IamActionDefinition
* IamActionDefinition `object`:  The AWS Identity and Access Management (IAM) action definition details. 
  * Groups
    * items [Group](#group)
  * PolicyArn **required**
  * Roles
    * items [Role](#role)
  * Users
    * items [User](#user)

### InstanceId
* InstanceId `string`

### InstanceIds
* InstanceIds `array`
  * items [InstanceId](#instanceid)

### InternalErrorException


### InvalidNextTokenException


### InvalidParameterException


### MaxResults
* MaxResults `integer`:  An integer that represents how many entries a paginated response contains. The maximum is 100.

### NotFoundException


### Notification
* Notification `object`: <p>A notification that is associated with a budget. A budget can have up to ten notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul>
  * ComparisonOperator **required**
  * NotificationState
  * NotificationType **required**
  * Threshold **required**
  * ThresholdType

### NotificationState
* NotificationState `string` (values: OK, ALARM)

### NotificationThreshold
* NotificationThreshold `number`:  The threshold of a notification.

### NotificationType
* NotificationType `string` (values: ACTUAL, FORECASTED):  The type of a notification. It must be ACTUAL or FORECASTED.

### NotificationWithSubscribers
* NotificationWithSubscribers `object`: A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.
  * Notification **required**
    * ComparisonOperator **required**
    * NotificationState
    * NotificationType **required**
    * Threshold **required**
    * ThresholdType
  * Subscribers **required**
    * items [Subscriber](#subscriber)

### NotificationWithSubscribersList
* NotificationWithSubscribersList `array`:  A list of notifications, each with a list of subscribers.
  * items [NotificationWithSubscribers](#notificationwithsubscribers)

### Notifications
* Notifications `array`:  A list of notifications.
  * items [Notification](#notification)

### NullableBoolean
* NullableBoolean `boolean`

### NumericValue
* NumericValue `string`:  A string that represents a numeric value.

### PlannedBudgetLimits
* PlannedBudgetLimits `object`

### PolicyArn
* PolicyArn `string`

### PolicyId
* PolicyId `string`

### Region
* Region `string`

### ResourceLockedException


### Role
* Role `string`

### RoleArn
* RoleArn `string`

### Roles
* Roles `array`
  * items [Role](#role)

### ScpActionDefinition
* ScpActionDefinition `object`:  The service control policies (SCP) action definition details. 
  * PolicyId **required**
  * TargetIds **required**
    * items [TargetId](#targetid)

### Spend
* Spend `object`: <p>The amount of cost or usage that is measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage would have the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul>
  * Amount **required**
  * Unit **required**

### SsmActionDefinition
* SsmActionDefinition `object`:  The AWS Systems Manager (SSM) action definition details. 
  * ActionSubType **required**
  * InstanceIds **required**
    * items [InstanceId](#instanceid)
  * Region **required**

### Subscriber
* Subscriber `object`: <p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.</p> <p>For example, an email subscriber would have the following parameters:</p> <ul> <li> <p>A <code>subscriptionType</code> of <code>EMAIL</code> </p> </li> <li> <p>An <code>address</code> of <code>example@example.com</code> </p> </li> </ul>
  * Address **required**
  * SubscriptionType **required**

### SubscriberAddress
* SubscriberAddress `string`:  A string that contains an email address or SNS topic for the subscriber's address.

### Subscribers
* Subscribers `array`:  A list of subscribers.
  * items [Subscriber](#subscriber)

### SubscriptionType
* SubscriptionType `string` (values: SNS, EMAIL):  The subscription type of the subscriber. It can be SMS or EMAIL.

### TargetId
* TargetId `string`

### TargetIds
* TargetIds `array`
  * items [TargetId](#targetid)

### ThresholdType
* ThresholdType `string` (values: PERCENTAGE, ABSOLUTE_VALUE):  The type of threshold for a notification.

### TimePeriod
* TimePeriod `object`: The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date. 
  * End
  * Start

### TimeUnit
* TimeUnit `string` (values: DAILY, MONTHLY, QUARTERLY, ANNUALLY):  The time unit of the budget, such as MONTHLY or QUARTERLY.

### UnitValue
* UnitValue `string`:  A string that represents the spend unit of a budget. It can't be null or empty.

### UpdateBudgetActionRequest
* UpdateBudgetActionRequest `object`
  * AccountId **required** [AccountId](#accountid)
  * ActionId **required**
  * ActionThreshold [ActionThreshold](#actionthreshold)
  * ApprovalModel
  * BudgetName **required** [BudgetName](#budgetname)
  * Definition [Definition](#definition)
  * ExecutionRoleArn
  * NotificationType [NotificationType](#notificationtype)
  * Subscribers [Subscribers](#subscribers)

### UpdateBudgetActionResponse
* UpdateBudgetActionResponse `object`
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * NewAction **required**
    * ActionId **required**
    * ActionThreshold **required**
      * ActionThresholdType **required** [ThresholdType](#thresholdtype)
      * ActionThresholdValue **required** [NotificationThreshold](#notificationthreshold)
    * ActionType **required**
    * ApprovalModel **required**
    * BudgetName **required** [BudgetName](#budgetname)
    * Definition **required**
      * IamActionDefinition
        * Groups
          * items [Group](#group)
        * PolicyArn **required**
        * Roles
          * items [Role](#role)
        * Users
          * items [User](#user)
      * ScpActionDefinition
        * PolicyId **required**
        * TargetIds **required**
          * items [TargetId](#targetid)
      * SsmActionDefinition
        * ActionSubType **required**
        * InstanceIds **required**
          * items [InstanceId](#instanceid)
        * Region **required**
    * ExecutionRoleArn **required**
    * NotificationType **required** [NotificationType](#notificationtype)
    * Status **required**
    * Subscribers **required** [Subscribers](#subscribers)
  * OldAction **required**
    * ActionId **required**
    * ActionThreshold **required**
      * ActionThresholdType **required** [ThresholdType](#thresholdtype)
      * ActionThresholdValue **required** [NotificationThreshold](#notificationthreshold)
    * ActionType **required**
    * ApprovalModel **required**
    * BudgetName **required** [BudgetName](#budgetname)
    * Definition **required**
      * IamActionDefinition
        * Groups
          * items [Group](#group)
        * PolicyArn **required**
        * Roles
          * items [Role](#role)
        * Users
          * items [User](#user)
      * ScpActionDefinition
        * PolicyId **required**
        * TargetIds **required**
          * items [TargetId](#targetid)
      * SsmActionDefinition
        * ActionSubType **required**
        * InstanceIds **required**
          * items [InstanceId](#instanceid)
        * Region **required**
    * ExecutionRoleArn **required**
    * NotificationType **required** [NotificationType](#notificationtype)
    * Status **required**
    * Subscribers **required** [Subscribers](#subscribers)

### UpdateBudgetRequest
* UpdateBudgetRequest `object`:  Request of UpdateBudget 
  * AccountId **required**
  * NewBudget **required**
    * BudgetLimit
      * Amount **required**
      * Unit **required**
    * BudgetName **required**
    * BudgetType **required**
    * CalculatedSpend
      * ActualSpend **required**
        * Amount **required**
        * Unit **required**
      * ForecastedSpend
        * Amount **required**
        * Unit **required**
    * CostFilters
    * CostTypes
      * IncludeCredit
      * IncludeDiscount
      * IncludeOtherSubscription
      * IncludeRecurring
      * IncludeRefund
      * IncludeSubscription
      * IncludeSupport
      * IncludeTax
      * IncludeUpfront
      * UseAmortized
      * UseBlended
    * LastUpdatedTime
    * PlannedBudgetLimits
    * TimePeriod
      * End
      * Start
    * TimeUnit **required**

### UpdateBudgetResponse
* UpdateBudgetResponse `object`:  Response of UpdateBudget 

### UpdateNotificationRequest
* UpdateNotificationRequest `object`:  Request of UpdateNotification 
  * AccountId **required**
  * BudgetName **required**
  * NewNotification **required**
    * ComparisonOperator **required**
    * NotificationState
    * NotificationType **required**
    * Threshold **required**
    * ThresholdType
  * OldNotification **required**
    * ComparisonOperator **required**
    * NotificationState
    * NotificationType **required**
    * Threshold **required**
    * ThresholdType

### UpdateNotificationResponse
* UpdateNotificationResponse `object`:  Response of UpdateNotification 

### UpdateSubscriberRequest
* UpdateSubscriberRequest `object`:  Request of UpdateSubscriber 
  * AccountId **required**
  * BudgetName **required**
  * NewSubscriber **required**
    * Address **required**
    * SubscriptionType **required**
  * Notification **required**
    * ComparisonOperator **required**
    * NotificationState
    * NotificationType **required**
    * Threshold **required**
    * ThresholdType
  * OldSubscriber **required**
    * Address **required**
    * SubscriptionType **required**

### UpdateSubscriberResponse
* UpdateSubscriberResponse `object`:  Response of UpdateSubscriber 

### User
* User `string`

### Users
* Users `array`
  * items [User](#user)


