# @datafire/amazonaws_budgets

Client library for AWS Budgets

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_budgets
```

```js
let datafire = require('datafire');
let amazonaws_budgets = require('@datafire/amazonaws_budgets').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_budgets: account,
  }
})

amazonaws_budgets.CreateBudget({}, context).then(data => {
  console.log(data);
})
```

## Description
All public APIs for AWS Budgets

## Actions
### CreateBudget
Create a new budget


```js
amazonaws_budgets.CreateBudget({
  "body": {
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
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request of CreateBudget
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateNotification
Create a new Notification with subscribers for a budget


```js
amazonaws_budgets.CreateNotification({
  "body": {
    "AccountId": "",
    "BudgetName": "",
    "Notification": {
      "NotificationType": "",
      "ComparisonOperator": "",
      "Threshold": 0
    },
    "Subscribers": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request of CreateNotification
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateSubscriber
Create a new Subscriber for a notification


```js
amazonaws_budgets.CreateSubscriber({
  "body": {
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
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request of CreateSubscriber
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteBudget
Delete a budget and related notifications


```js
amazonaws_budgets.DeleteBudget({
  "body": {
    "AccountId": "",
    "BudgetName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request of DeleteBudget
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteNotification
Delete a notification and related subscribers


```js
amazonaws_budgets.DeleteNotification({
  "body": {
    "AccountId": "",
    "BudgetName": "",
    "Notification": {
      "NotificationType": "",
      "ComparisonOperator": "",
      "Threshold": 0
    }
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request of DeleteNotification
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteSubscriber
Delete a Subscriber for a notification


```js
amazonaws_budgets.DeleteSubscriber({
  "body": {
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
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request of DeleteSubscriber
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeBudget
Get a single budget


```js
amazonaws_budgets.DescribeBudget({
  "body": {
    "AccountId": "",
    "BudgetName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request of DescribeBudget
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeBudgets
Get all budgets for an account


```js
amazonaws_budgets.DescribeBudgets({
  "body": {
    "AccountId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request of DescribeBudgets
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeNotificationsForBudget
Get notifications of a budget


```js
amazonaws_budgets.DescribeNotificationsForBudget({
  "body": {
    "AccountId": "",
    "BudgetName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request of DescribeNotificationsForBudget
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeSubscribersForNotification
Get subscribers of a notification


```js
amazonaws_budgets.DescribeSubscribersForNotification({
  "body": {
    "AccountId": "",
    "BudgetName": "",
    "Notification": {
      "NotificationType": "",
      "ComparisonOperator": "",
      "Threshold": 0
    }
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request of DescribeSubscribersForNotification
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateBudget
Update the information of a budget already created


```js
amazonaws_budgets.UpdateBudget({
  "body": {
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
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request of UpdateBudget
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateNotification
Update the information about a notification already created


```js
amazonaws_budgets.UpdateNotification({
  "body": {
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
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request of UpdateNotification
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateSubscriber
Update a subscriber


```js
amazonaws_budgets.UpdateSubscriber({
  "body": {
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
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request of UpdateSubscriber
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

