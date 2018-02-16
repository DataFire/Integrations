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

amazonaws_budgets.CreateBudget({
  "AccountId": "",
  "Budget": {
    "BudgetName": "",
    "TimeUnit": "",
    "BudgetType": ""
  }
}).then(data => {
  console.log(data);
});
```

## Description

<p>Budgets enable you to plan your service usage, service costs, and your RI utilization. You can also track how close your plan is to your budgeted amount or to the free tier limits. Budgets provide you with a quick way to see your usage-to-date and current estimated charges from AWS and to see how much your predicted usage accrues in charges by the end of the month. Budgets also compare current estimates and charges to the amount that you indicated you want to use or spend and lets you see how much of your budget has been used. AWS updates your budget status several times a day. Budgets track your unblended costs, subscriptions, and refunds. You can create the following types of budgets:</p> <ul> <li> <p>Cost budgets allow you to say how much you want to spend on a service.</p> </li> <li> <p>Usage budgets allow you to say how many hours you want to use for one or more services.</p> </li> <li> <p>RI utilization budgets allow you to define a utilization threshold and receive alerts when RIs are tracking below that threshold.</p> </li> </ul> <p>You can create up to 20,000 budgets per AWS master account. Your first two budgets are free of charge. Each additional budget costs $0.02 per day. You can set up optional notifications that warn you if you exceed, or are forecasted to exceed, your budgeted amount. You can have notifications sent to an Amazon SNS topic, to an email address, or to both. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-sns-policy.html">Creating an Amazon SNS Topic for Budget Notifications</a>. AWS Free Tier usage alerts via AWS Budgets are provided for you, and do not count toward your budget limits.</p> <p>Service Endpoint</p> <p>The AWS Budgets API provides the following endpoint:</p> <ul> <li> <p>https://budgets.us-east-1.amazonaws.com</p> </li> </ul>

## Actions

### CreateBudget



```js
amazonaws_budgets.CreateBudget({
  "AccountId": "",
  "Budget": {
    "BudgetName": "",
    "TimeUnit": "",
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
    "TimeUnit": "",
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
* AccountId `string`: The account ID of the customer. It should be a 12 digit number.

### Budget
* Budget `object`: <p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code>.</p> <p>The ARN pattern for a budget is: <code>arn:aws:budgetservice::AccountId:budget/budgetName</code> </p>
  * BudgetLimit [Spend](#spend)
  * BudgetName **required** [BudgetName](#budgetname)
  * BudgetType **required** [BudgetType](#budgettype)
  * CalculatedSpend [CalculatedSpend](#calculatedspend)
  * CostFilters [CostFilters](#costfilters)
  * CostTypes [CostTypes](#costtypes)
  * TimePeriod [TimePeriod](#timeperiod)
  * TimeUnit **required** [TimeUnit](#timeunit)

### BudgetName
* BudgetName `string`:  A string represents the budget name. No ":" and "\" character is allowed.

### BudgetType
* BudgetType `string` (values: USAGE, COST, RI_UTILIZATION):  The type of a budget. It should be COST, USAGE, or RI_UTILIZATION.

### Budgets
* Budgets `array`:  A list of budgets
  * items [Budget](#budget)

### CalculatedSpend
* CalculatedSpend `object`: <p>The spend objects associated with this budget. The <code>actualSpend</code> tracks how much you've used, cost, usage, or RI units, and the <code>forecastedSpend</code> tracks how much you are predicted to spend if your current usage remains steady.</p> <p>For example, if it is the 20th of the month and you have spent <code>50</code> dollars on Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your <code>forecastedSpend</code> is <code>75 USD</code>.</p>
  * ActualSpend **required** [Spend](#spend)
  * ForecastedSpend [Spend](#spend)

### ComparisonOperator
* ComparisonOperator `string` (values: GREATER_THAN, LESS_THAN, EQUAL_TO):  The comparison operator of a notification. Currently we support less than, equal to and greater than.

### CostFilters
* CostFilters `array`:  A map that represents the cost filters applied to the budget.
  * items `object`
    * key [GenericString](#genericstring)
    * value [DimensionValues](#dimensionvalues)

### CostTypes
* CostTypes `object`: The types of cost included in a budget, such as tax and subscriptions.
  * IncludeCredit [NullableBoolean](#nullableboolean)
  * IncludeDiscount [NullableBoolean](#nullableboolean)
  * IncludeOtherSubscription [NullableBoolean](#nullableboolean)
  * IncludeRecurring [NullableBoolean](#nullableboolean)
  * IncludeRefund [NullableBoolean](#nullableboolean)
  * IncludeSubscription [NullableBoolean](#nullableboolean)
  * IncludeSupport [NullableBoolean](#nullableboolean)
  * IncludeTax [NullableBoolean](#nullableboolean)
  * IncludeUpfront [NullableBoolean](#nullableboolean)
  * UseAmortized [NullableBoolean](#nullableboolean)
  * UseBlended [NullableBoolean](#nullableboolean)

### CreateBudgetRequest
* CreateBudgetRequest `object`:  Request of CreateBudget 
  * AccountId **required** [AccountId](#accountid)
  * Budget **required** [Budget](#budget)
  * NotificationsWithSubscribers [NotificationWithSubscribersList](#notificationwithsubscriberslist)

### CreateBudgetResponse
* CreateBudgetResponse `object`:  Response of CreateBudget 

### CreateNotificationRequest
* CreateNotificationRequest `object`:  Request of CreateNotification 
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * Notification **required** [Notification](#notification)
  * Subscribers **required** [Subscribers](#subscribers)

### CreateNotificationResponse
* CreateNotificationResponse `object`:  Response of CreateNotification 

### CreateSubscriberRequest
* CreateSubscriberRequest `object`:  Request of CreateSubscriber 
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * Notification **required** [Notification](#notification)
  * Subscriber **required** [Subscriber](#subscriber)

### CreateSubscriberResponse
* CreateSubscriberResponse `object`:  Response of CreateSubscriber 

### CreationLimitExceededException
* CreationLimitExceededException `object`: You've exceeded the notification or subscriber limit.
  * Message [errorMessage](#errormessage)

### DeleteBudgetRequest
* DeleteBudgetRequest `object`:  Request of DeleteBudget 
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)

### DeleteBudgetResponse
* DeleteBudgetResponse `object`:  Response of DeleteBudget 

### DeleteNotificationRequest
* DeleteNotificationRequest `object`:  Request of DeleteNotification 
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * Notification **required** [Notification](#notification)

### DeleteNotificationResponse
* DeleteNotificationResponse `object`:  Response of DeleteNotification 

### DeleteSubscriberRequest
* DeleteSubscriberRequest `object`:  Request of DeleteSubscriber 
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * Notification **required** [Notification](#notification)
  * Subscriber **required** [Subscriber](#subscriber)

### DeleteSubscriberResponse
* DeleteSubscriberResponse `object`:  Response of DeleteSubscriber 

### DescribeBudgetRequest
* DescribeBudgetRequest `object`:  Request of DescribeBudget 
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)

### DescribeBudgetResponse
* DescribeBudgetResponse `object`:  Response of DescribeBudget 
  * Budget [Budget](#budget)

### DescribeBudgetsRequest
* DescribeBudgetsRequest `object`:  Request of DescribeBudgets 
  * AccountId **required** [AccountId](#accountid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)

### DescribeBudgetsResponse
* DescribeBudgetsResponse `object`:  Response of DescribeBudgets 
  * Budgets [Budgets](#budgets)
  * NextToken [GenericString](#genericstring)

### DescribeNotificationsForBudgetRequest
* DescribeNotificationsForBudgetRequest `object`:  Request of DescribeNotificationsForBudget 
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)

### DescribeNotificationsForBudgetResponse
* DescribeNotificationsForBudgetResponse `object`:  Response of GetNotificationsForBudget 
  * NextToken [GenericString](#genericstring)
  * Notifications [Notifications](#notifications)

### DescribeSubscribersForNotificationRequest
* DescribeSubscribersForNotificationRequest `object`:  Request of DescribeSubscribersForNotification 
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)
  * Notification **required** [Notification](#notification)

### DescribeSubscribersForNotificationResponse
* DescribeSubscribersForNotificationResponse `object`:  Response of DescribeSubscribersForNotification 
  * NextToken [GenericString](#genericstring)
  * Subscribers [Subscribers](#subscribers)

### DimensionValues
* DimensionValues `array`
  * items [GenericString](#genericstring)

### DuplicateRecordException
* DuplicateRecordException `object`: The budget name already exists. Budget names must be unique within an account.
  * Message [errorMessage](#errormessage)

### ExpiredNextTokenException
* ExpiredNextTokenException `object`: The pagination token expired.
  * Message [errorMessage](#errormessage)

### GenericString
* GenericString `string`:  A generic String.

### GenericTimestamp
* GenericTimestamp `string`:  A generic timestamp. In Java it is transformed to a Date object.

### InternalErrorException
* InternalErrorException `object`: An error on the server occurred during the processing of your request. Try again later.
  * Message [errorMessage](#errormessage)

### InvalidNextTokenException
* InvalidNextTokenException `object`: The pagination token is invalid.
  * Message [errorMessage](#errormessage)

### InvalidParameterException
* InvalidParameterException `object`: An error on the client occurred. Typically, the cause is an invalid input value.
  * Message [errorMessage](#errormessage)

### MaxResults
* MaxResults `integer`:  An integer to represent how many entries a paginated response contains. Maximum is set to 100.

### NotFoundException
* NotFoundException `object`: We can’t locate the resource that you specified.
  * Message [errorMessage](#errormessage)

### Notification
* Notification `object`: <p>A notification associated with a budget. A budget can have up to five notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to ten email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A comparisonOperator of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification threshold of <code>80</code> </p> </li> </ul>
  * ComparisonOperator **required** [ComparisonOperator](#comparisonoperator)
  * NotificationType **required** [NotificationType](#notificationtype)
  * Threshold **required** [NotificationThreshold](#notificationthreshold)
  * ThresholdType [ThresholdType](#thresholdtype)

### NotificationThreshold
* NotificationThreshold `number`:  The threshold of a notification. It should be a number between 0 and 1,000,000,000.

### NotificationType
* NotificationType `string` (values: ACTUAL, FORECASTED):  The type of a notification. It should be ACTUAL or FORECASTED.

### NotificationWithSubscribers
* NotificationWithSubscribers `object`: A notification with subscribers. A notification can have one SNS subscriber and up to ten email subscribers, for a total of 11 subscribers.
  * Notification **required** [Notification](#notification)
  * Subscribers **required** [Subscribers](#subscribers)

### NotificationWithSubscribersList
* NotificationWithSubscribersList `array`:  A list of Notifications, each with a list of subscribers.
  * items [NotificationWithSubscribers](#notificationwithsubscribers)

### Notifications
* Notifications `array`:  A list of notifications.
  * items [Notification](#notification)

### NullableBoolean
* NullableBoolean `boolean`

### NumericValue
* NumericValue `string`:  A string to represent NumericValue.

### Spend
* Spend `object`: <p>The amount of cost or usage being measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage would have the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul>
  * Amount **required** [NumericValue](#numericvalue)
  * Unit **required** [UnitValue](#unitvalue)

### Subscriber
* Subscriber `object`: <p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon Simple Notification Service topic or an email address.</p> <p>For example, an email subscriber would have the following parameters:</p> <ul> <li> <p>A <code>subscriptionType</code> of <code>EMAIL</code> </p> </li> <li> <p>An <code>address</code> of <code>example@example.com</code> </p> </li> </ul>
  * Address **required** [SubscriberAddress](#subscriberaddress)
  * SubscriptionType **required** [SubscriptionType](#subscriptiontype)

### SubscriberAddress
* SubscriberAddress `string`:  String containing email or sns topic for the subscriber address.

### Subscribers
* Subscribers `array`:  A list of subscribers.
  * items [Subscriber](#subscriber)

### SubscriptionType
* SubscriptionType `string` (values: SNS, EMAIL):  The subscription type of the subscriber. It can be SMS or EMAIL.

### ThresholdType
* ThresholdType `string` (values: PERCENTAGE, ABSOLUTE_VALUE):  The type of threshold for a notification. It can be PERCENTAGE or ABSOLUTE_VALUE.

### TimePeriod
* TimePeriod `object`: The period of time covered by a budget. Has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date. 
  * End [GenericTimestamp](#generictimestamp)
  * Start [GenericTimestamp](#generictimestamp)

### TimeUnit
* TimeUnit `string` (values: DAILY, MONTHLY, QUARTERLY, ANNUALLY):  The time unit of the budget. e.g. MONTHLY, QUARTERLY, etc.

### UnitValue
* UnitValue `string`:  A string to represent budget spend unit. It should be not null and not empty.

### UpdateBudgetRequest
* UpdateBudgetRequest `object`:  Request of UpdateBudget 
  * AccountId **required** [AccountId](#accountid)
  * NewBudget **required** [Budget](#budget)

### UpdateBudgetResponse
* UpdateBudgetResponse `object`:  Response of UpdateBudget 

### UpdateNotificationRequest
* UpdateNotificationRequest `object`:  Request of UpdateNotification 
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * NewNotification **required** [Notification](#notification)
  * OldNotification **required** [Notification](#notification)

### UpdateNotificationResponse
* UpdateNotificationResponse `object`:  Response of UpdateNotification 

### UpdateSubscriberRequest
* UpdateSubscriberRequest `object`:  Request of UpdateSubscriber 
  * AccountId **required** [AccountId](#accountid)
  * BudgetName **required** [BudgetName](#budgetname)
  * NewSubscriber **required** [Subscriber](#subscriber)
  * Notification **required** [Notification](#notification)
  * OldSubscriber **required** [Subscriber](#subscriber)

### UpdateSubscriberResponse
* UpdateSubscriberResponse `object`:  Response of UpdateSubscriber 

### errorMessage
* errorMessage `string`: The error message the exception carries.


