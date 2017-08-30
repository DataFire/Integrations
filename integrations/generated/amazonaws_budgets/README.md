# @datafire/amazonaws_budgets

Client library for AWS Budgets

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_budgets
```

```js
let datafire = require('datafire');
let amazonaws_budgets = require('@datafire/amazonaws_budgets').create();

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

#### Parameters
* AccountId (string) **required** - Account Id of the customer. It should be a 12 digit number.
* Budget (object) **required** - AWS Budget model
* NotificationsWithSubscribers (array) - A list of Notifications, each with a list of subscribers.

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

#### Parameters
* AccountId (string) **required** - Account Id of the customer. It should be a 12 digit number.
* BudgetName (string) **required** - A string represents the budget name. No ":" character is allowed.
* Notification (object) **required** - Notification model. Each budget may contain multiple notifications with different settings.
* Subscribers (array) **required** - A list of subscribers.

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

#### Parameters
* AccountId (string) **required** - Account Id of the customer. It should be a 12 digit number.
* BudgetName (string) **required** - A string represents the budget name. No ":" character is allowed.
* Notification (object) **required** - Notification model. Each budget may contain multiple notifications with different settings.
* Subscriber (object) **required** - Subscriber model. Each notification may contain multiple subscribers with different addresses.

### DeleteBudget



```js
amazonaws_budgets.DeleteBudget({
  "AccountId": "",
  "BudgetName": ""
}, context)
```

#### Parameters
* AccountId (string) **required** - Account Id of the customer. It should be a 12 digit number.
* BudgetName (string) **required** - A string represents the budget name. No ":" character is allowed.

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

#### Parameters
* AccountId (string) **required** - Account Id of the customer. It should be a 12 digit number.
* BudgetName (string) **required** - A string represents the budget name. No ":" character is allowed.
* Notification (object) **required** - Notification model. Each budget may contain multiple notifications with different settings.

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

#### Parameters
* AccountId (string) **required** - Account Id of the customer. It should be a 12 digit number.
* BudgetName (string) **required** - A string represents the budget name. No ":" character is allowed.
* Notification (object) **required** - Notification model. Each budget may contain multiple notifications with different settings.
* Subscriber (object) **required** - Subscriber model. Each notification may contain multiple subscribers with different addresses.

### DescribeBudget



```js
amazonaws_budgets.DescribeBudget({
  "AccountId": "",
  "BudgetName": ""
}, context)
```

#### Parameters
* AccountId (string) **required** - Account Id of the customer. It should be a 12 digit number.
* BudgetName (string) **required** - A string represents the budget name. No ":" character is allowed.

### DescribeBudgets



```js
amazonaws_budgets.DescribeBudgets({
  "AccountId": ""
}, context)
```

#### Parameters
* AccountId (string) **required** - Account Id of the customer. It should be a 12 digit number.
* MaxResults (integer) - An integer to represent how many entries should a pagianted response contains. Maxium is set to 100.
* NextToken (string) - A generic String.

### DescribeNotificationsForBudget



```js
amazonaws_budgets.DescribeNotificationsForBudget({
  "AccountId": "",
  "BudgetName": ""
}, context)
```

#### Parameters
* AccountId (string) **required** - Account Id of the customer. It should be a 12 digit number.
* BudgetName (string) **required** - A string represents the budget name. No ":" character is allowed.
* MaxResults (integer) - An integer to represent how many entries should a pagianted response contains. Maxium is set to 100.
* NextToken (string) - A generic String.

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

#### Parameters
* AccountId (string) **required** - Account Id of the customer. It should be a 12 digit number.
* BudgetName (string) **required** - A string represents the budget name. No ":" character is allowed.
* MaxResults (integer) - An integer to represent how many entries should a pagianted response contains. Maxium is set to 100.
* NextToken (string) - A generic String.
* Notification (object) **required** - Notification model. Each budget may contain multiple notifications with different settings.

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

#### Parameters
* AccountId (string) **required** - Account Id of the customer. It should be a 12 digit number.
* NewBudget (object) **required** - AWS Budget model

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

#### Parameters
* AccountId (string) **required** - Account Id of the customer. It should be a 12 digit number.
* BudgetName (string) **required** - A string represents the budget name. No ":" character is allowed.
* NewNotification (object) **required** - Notification model. Each budget may contain multiple notifications with different settings.
* OldNotification (object) **required** - Notification model. Each budget may contain multiple notifications with different settings.

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

#### Parameters
* AccountId (string) **required** - Account Id of the customer. It should be a 12 digit number.
* BudgetName (string) **required** - A string represents the budget name. No ":" character is allowed.
* NewSubscriber (object) **required** - Subscriber model. Each notification may contain multiple subscribers with different addresses.
* Notification (object) **required** - Notification model. Each budget may contain multiple notifications with different settings.
* OldSubscriber (object) **required** - Subscriber model. Each notification may contain multiple subscribers with different addresses.

