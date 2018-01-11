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

amazonaws_budgets.CreateBudget({}).then(data => {
  console.log(data);
})
```

## Description

All public APIs for AWS Budgets

## Actions

### CreateBudget



```js
amazonaws_budgets.CreateBudget({
  "AccountId": "",
  "Budget": {
    "BudgetName": "",
    "BudgetLimit": {
      "Amount": "",
      "Unit": ""
    },
    "CostTypes": {
      "IncludeTax": true,
      "IncludeSubscription": true,
      "UseBlended": true
    },
    "TimeUnit": "",
    "TimePeriod": {
      "Start": "",
      "End": ""
    },
    "BudgetType": ""
  }
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * Budget **required** [Budget](#budget)
  * NotificationsWithSubscribers [NotificationWithSubscribersList](#notificationwithsubscriberslist)

#### Output
* output [CreateBudgetResponse](#createbudgetresponse)

### CreateNotification



```js
amazonaws_budgets.CreateNotification({
  "AccountId": "",
  "BudgetName": "",
  "Notification": {
    "NotificationType": "",
    "ComparisonOperator": "",
    "Threshold": 0
  },
  "Subscribers": []
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * Notification **required** [Notification](#notification)
  * Subscribers **required** [Subscribers](#subscribers)

#### Output
* output [CreateNotificationResponse](#createnotificationresponse)

### CreateSubscriber



```js
amazonaws_budgets.CreateSubscriber({
  "AccountId": "",
  "BudgetName": "",
  "Notification": {
    "NotificationType": "",
    "ComparisonOperator": "",
    "Threshold": 0
  },
  "Subscriber": {
    "SubscriptionType": "",
    "Address": ""
  }
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * Notification **required** [Notification](#notification)
  * Subscriber **required** [Subscriber](#subscriber)

#### Output
* output [CreateSubscriberResponse](#createsubscriberresponse)

### DeleteBudget



```js
amazonaws_budgets.DeleteBudget({
  "AccountId": "",
  "BudgetName": ""
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)

#### Output
* output [DeleteBudgetResponse](#deletebudgetresponse)

### DeleteNotification



```js
amazonaws_budgets.DeleteNotification({
  "AccountId": "",
  "BudgetName": "",
  "Notification": {
    "NotificationType": "",
    "ComparisonOperator": "",
    "Threshold": 0
  }
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * Notification **required** [Notification](#notification)

#### Output
* output [DeleteNotificationResponse](#deletenotificationresponse)

### DeleteSubscriber



```js
amazonaws_budgets.DeleteSubscriber({
  "AccountId": "",
  "BudgetName": "",
  "Notification": {
    "NotificationType": "",
    "ComparisonOperator": "",
    "Threshold": 0
  },
  "Subscriber": {
    "SubscriptionType": "",
    "Address": ""
  }
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * Notification **required** [Notification](#notification)
  * Subscriber **required** [Subscriber](#subscriber)

#### Output
* output [DeleteSubscriberResponse](#deletesubscriberresponse)

### DescribeBudget



```js
amazonaws_budgets.DescribeBudget({
  "AccountId": "",
  "BudgetName": ""
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)

#### Output
* output [DescribeBudgetResponse](#describebudgetresponse)

### DescribeBudgets



```js
amazonaws_budgets.DescribeBudgets({
  "AccountId": ""
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)

#### Output
* output [DescribeBudgetsResponse](#describebudgetsresponse)

### DescribeNotificationsForBudget



```js
amazonaws_budgets.DescribeNotificationsForBudget({
  "AccountId": "",
  "BudgetName": ""
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)

#### Output
* output [DescribeNotificationsForBudgetResponse](#describenotificationsforbudgetresponse)

### DescribeSubscribersForNotification



```js
amazonaws_budgets.DescribeSubscribersForNotification({
  "AccountId": "",
  "BudgetName": "",
  "Notification": {
    "NotificationType": "",
    "ComparisonOperator": "",
    "Threshold": 0
  }
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)
  * Notification **required** [Notification](#notification)

#### Output
* output [DescribeSubscribersForNotificationResponse](#describesubscribersfornotificationresponse)

### UpdateBudget



```js
amazonaws_budgets.UpdateBudget({
  "AccountId": "",
  "NewBudget": {
    "BudgetName": "",
    "BudgetLimit": {
      "Amount": "",
      "Unit": ""
    },
    "CostTypes": {
      "IncludeTax": true,
      "IncludeSubscription": true,
      "UseBlended": true
    },
    "TimeUnit": "",
    "TimePeriod": {
      "Start": "",
      "End": ""
    },
    "BudgetType": ""
  }
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * NewBudget **required** [Budget](#budget)

#### Output
* output [UpdateBudgetResponse](#updatebudgetresponse)

### UpdateNotification



```js
amazonaws_budgets.UpdateNotification({
  "AccountId": "",
  "BudgetName": "",
  "OldNotification": {
    "NotificationType": "",
    "ComparisonOperator": "",
    "Threshold": 0
  },
  "NewNotification": {
    "NotificationType": "",
    "ComparisonOperator": "",
    "Threshold": 0
  }
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * NewNotification **required** [Notification](#notification)
  * OldNotification **required** [Notification](#notification)

#### Output
* output [UpdateNotificationResponse](#updatenotificationresponse)

### UpdateSubscriber



```js
amazonaws_budgets.UpdateSubscriber({
  "AccountId": "",
  "BudgetName": "",
  "Notification": {
    "NotificationType": "",
    "ComparisonOperator": "",
    "Threshold": 0
  },
  "OldSubscriber": {
    "SubscriptionType": "",
    "Address": ""
  },
  "NewSubscriber": {
    "SubscriptionType": "",
    "Address": ""
  }
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * NewSubscriber **required** [Subscriber](#subscriber)
  * Notification **required** [Notification](#notification)
  * OldSubscriber **required** [Subscriber](#subscriber)

#### Output
* output [UpdateSubscriberResponse](#updatesubscriberresponse)



## Definitions

### AccountId
* AccountId `string`: Account Id of the customer. It should be a 12 digit number.

### Budget
* Budget `object`: AWS Budget model
  * BudgetLimit **required** [Spend](#spend)
  * BudgetName **required** [BudgetName](#budgetname)
  * BudgetType **required** [BudgetType](#budgettype)
  * CalculatedSpend [CalculatedSpend](#calculatedspend)
  * CostFilters [CostFilters](#costfilters)
  * CostTypes **required** [CostTypes](#costtypes)
  * TimePeriod **required** [TimePeriod](#timeperiod)
  * TimeUnit **required** [TimeUnit](#timeunit)

### BudgetName
* BudgetName `string`: A string represents the budget name. No ":" and "\" character is allowed.

### BudgetType
* BudgetType `string` (values: USAGE, COST, RI_UTILIZATION): The type of a budget. It should be COST, USAGE, or RI_UTILIZATION.

### Budgets
* Budgets `array`: A list of budgets
  * items [Budget](#budget)

### CalculatedSpend
* CalculatedSpend `object`: A structure that holds the actual and forecasted spend for a budget.
  * ActualSpend **required** [Spend](#spend)
  * ForecastedSpend [Spend](#spend)

### ComparisonOperator
* ComparisonOperator `string` (values: GREATER_THAN, LESS_THAN, EQUAL_TO): The comparison operator of a notification. Currently we support less than, equal to and greater than.

### CostFilters
* CostFilters `array`: A map that represents the cost filters applied to the budget.
  * items `object`
    * key [GenericString](#genericstring)
    * value [DimensionValues](#dimensionvalues)

### CostTypes
* CostTypes `object`: This includes the options for getting the cost of a budget.
  * IncludeSubscription **required** [GenericBoolean](#genericboolean)
  * IncludeTax **required** [GenericBoolean](#genericboolean)
  * UseBlended **required** [GenericBoolean](#genericboolean)

### CreateBudgetRequest
* CreateBudgetRequest `object`: Request of CreateBudget
  * AccountId **required** [AccountId](#accountid)
  * Budget **required** [Budget](#budget)
  * NotificationsWithSubscribers [NotificationWithSubscribersList](#notificationwithsubscriberslist)

### CreateBudgetResponse
* CreateBudgetResponse `object`: Response of CreateBudget

### CreateNotificationRequest
* CreateNotificationRequest `object`: Request of CreateNotification
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * Notification **required** [Notification](#notification)
  * Subscribers **required** [Subscribers](#subscribers)

### CreateNotificationResponse
* CreateNotificationResponse `object`: Response of CreateNotification

### CreateSubscriberRequest
* CreateSubscriberRequest `object`: Request of CreateSubscriber
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * Notification **required** [Notification](#notification)
  * Subscriber **required** [Subscriber](#subscriber)

### CreateSubscriberResponse
* CreateSubscriberResponse `object`: Response of CreateSubscriber

### CreationLimitExceededException
* CreationLimitExceededException `object`: The exception is thrown when customer tries to create a record (e.g. budget), but the number this record already exceeds the limitation.
  * Message [errorMessage](#errormessage)

### DeleteBudgetRequest
* DeleteBudgetRequest `object`: Request of DeleteBudget
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)

### DeleteBudgetResponse
* DeleteBudgetResponse `object`: Response of DeleteBudget

### DeleteNotificationRequest
* DeleteNotificationRequest `object`: Request of DeleteNotification
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * Notification **required** [Notification](#notification)

### DeleteNotificationResponse
* DeleteNotificationResponse `object`: Response of DeleteNotification

### DeleteSubscriberRequest
* DeleteSubscriberRequest `object`: Request of DeleteSubscriber
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * Notification **required** [Notification](#notification)
  * Subscriber **required** [Subscriber](#subscriber)

### DeleteSubscriberResponse
* DeleteSubscriberResponse `object`: Response of DeleteSubscriber

### DescribeBudgetRequest
* DescribeBudgetRequest `object`: Request of DescribeBudget
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)

### DescribeBudgetResponse
* DescribeBudgetResponse `object`: Response of DescribeBudget
  * Budget [Budget](#budget)

### DescribeBudgetsRequest
* DescribeBudgetsRequest `object`: Request of DescribeBudgets
  * AccountId **required** [AccountId](#accountid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)

### DescribeBudgetsResponse
* DescribeBudgetsResponse `object`: Response of DescribeBudgets
  * Budgets [Budgets](#budgets)
  * NextToken [GenericString](#genericstring)

### DescribeNotificationsForBudgetRequest
* DescribeNotificationsForBudgetRequest `object`: Request of DescribeNotificationsForBudget
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)

### DescribeNotificationsForBudgetResponse
* DescribeNotificationsForBudgetResponse `object`: Response of GetNotificationsForBudget
  * NextToken [GenericString](#genericstring)
  * Notifications [Notifications](#notifications)

### DescribeSubscribersForNotificationRequest
* DescribeSubscribersForNotificationRequest `object`: Request of DescribeSubscribersForNotification
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)
  * Notification **required** [Notification](#notification)

### DescribeSubscribersForNotificationResponse
* DescribeSubscribersForNotificationResponse `object`: Response of DescribeSubscribersForNotification
  * NextToken [GenericString](#genericstring)
  * Subscribers [Subscribers](#subscribers)

### DimensionValues
* DimensionValues `array`
  * items [GenericString](#genericstring)

### DuplicateRecordException
* DuplicateRecordException `object`: The exception is thrown when customer tries to create a record (e.g. budget) that already exists.
  * Message [errorMessage](#errormessage)

### ExpiredNextTokenException
* ExpiredNextTokenException `object`: This exception is thrown if the paging token is expired - past its TTL
  * Message [errorMessage](#errormessage)

### GenericBoolean
* GenericBoolean `boolean`: A generic boolean value.

### GenericString
* GenericString `string`: A generic String.

### GenericTimestamp
* GenericTimestamp `string`: A generic timestamp. In Java it is transformed to a Date object.

### InternalErrorException
* InternalErrorException `object`: This exception is thrown on an unknown internal failure.
  * Message [errorMessage](#errormessage)

### InvalidNextTokenException
* InvalidNextTokenException `object`: This exception is thrown if paging token signature didn't match the token, or the paging token isn't for this request
  * Message [errorMessage](#errormessage)

### InvalidParameterException
* InvalidParameterException `object`: This exception is thrown if any request is given an invalid parameter. E.g., if a required Date field is null.
  * Message [errorMessage](#errormessage)

### MaxResults
* MaxResults `integer`: An integer to represent how many entries a paginated response contains. Maximum is set to 100.

### NotFoundException
* NotFoundException `object`: This exception is thrown if a requested entity is not found. E.g., if a budget id doesn't exist for an account ID.
  * Message [errorMessage](#errormessage)

### Notification
* Notification `object`: Notification model. Each budget may contain multiple notifications with different settings.
  * ComparisonOperator **required** [ComparisonOperator](#comparisonoperator)
  * NotificationType **required** [NotificationType](#notificationtype)
  * Threshold **required** [NotificationThreshold](#notificationthreshold)
  * ThresholdType [ThresholdType](#thresholdtype)

### NotificationThreshold
* NotificationThreshold `number`: The threshold of a notification. It should be a number between 0 and 1,000,000,000.

### NotificationType
* NotificationType `string` (values: ACTUAL, FORECASTED): The type of a notification. It should be ACTUAL or FORECASTED.

### NotificationWithSubscribers
* NotificationWithSubscribers `object`: A structure to relate notification and a list of subscribers who belong to the notification.
  * Notification **required** [Notification](#notification)
  * Subscribers **required** [Subscribers](#subscribers)

### NotificationWithSubscribersList
* NotificationWithSubscribersList `array`: A list of Notifications, each with a list of subscribers.
  * items [NotificationWithSubscribers](#notificationwithsubscribers)

### Notifications
* Notifications `array`: A list of notifications.
  * items [Notification](#notification)

### NumericValue
* NumericValue `string`: A string to represent NumericValue.

### Spend
* Spend `object`: A structure that represents either a cost spend or usage spend. Contains an amount and a unit.
  * Amount **required** [NumericValue](#numericvalue)
  * Unit **required** [UnitValue](#unitvalue)

### Subscriber
* Subscriber `object`: Subscriber model. Each notification may contain multiple subscribers with different addresses.
  * Address **required** [GenericString](#genericstring)
  * SubscriptionType **required** [SubscriptionType](#subscriptiontype)

### Subscribers
* Subscribers `array`: A list of subscribers.
  * items [Subscriber](#subscriber)

### SubscriptionType
* SubscriptionType `string` (values: SNS, EMAIL): The subscription type of the subscriber. It can be SMS or EMAIL.

### ThresholdType
* ThresholdType `string` (values: PERCENTAGE, ABSOLUTE_VALUE): The type of threshold for a notification. It can be PERCENTAGE or ABSOLUTE_VALUE.

### TimePeriod
* TimePeriod `object`: A time period indicating the start date and end date of a budget.
  * End **required** [GenericTimestamp](#generictimestamp)
  * Start **required** [GenericTimestamp](#generictimestamp)

### TimeUnit
* TimeUnit `string` (values: DAILY, MONTHLY, QUARTERLY, ANNUALLY): The time unit of the budget. e.g. MONTHLY, QUARTERLY, etc.

### UnitValue
* UnitValue `string`: A string to represent budget spend unit. It should be not null and not empty.

### UpdateBudgetRequest
* UpdateBudgetRequest `object`: Request of UpdateBudget
  * AccountId **required** [AccountId](#accountid)
  * NewBudget **required** [Budget](#budget)

### UpdateBudgetResponse
* UpdateBudgetResponse `object`: Response of UpdateBudget

### UpdateNotificationRequest
* UpdateNotificationRequest `object`: Request of UpdateNotification
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * NewNotification **required** [Notification](#notification)
  * OldNotification **required** [Notification](#notification)

### UpdateNotificationResponse
* UpdateNotificationResponse `object`: Response of UpdateNotification

### UpdateSubscriberRequest
* UpdateSubscriberRequest `object`: Request of UpdateSubscriber
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * NewSubscriber **required** [Subscriber](#subscriber)
  * Notification **required** [Notification](#notification)
  * OldSubscriber **required** [Subscriber](#subscriber)

### UpdateSubscriberResponse
* UpdateSubscriberResponse `object`: Response of UpdateSubscriber

### errorMessage
* errorMessage `string`: The error message the exception carries.


