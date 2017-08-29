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
amazonaws_budgets.CreateBudget({}, context)
```


### CreateNotification



```js
amazonaws_budgets.CreateNotification({}, context)
```


### CreateSubscriber



```js
amazonaws_budgets.CreateSubscriber({}, context)
```


### DeleteBudget



```js
amazonaws_budgets.DeleteBudget({}, context)
```


### DeleteNotification



```js
amazonaws_budgets.DeleteNotification({}, context)
```


### DeleteSubscriber



```js
amazonaws_budgets.DeleteSubscriber({}, context)
```


### DescribeBudget



```js
amazonaws_budgets.DescribeBudget({}, context)
```


### DescribeBudgets



```js
amazonaws_budgets.DescribeBudgets({}, context)
```


### DescribeNotificationsForBudget



```js
amazonaws_budgets.DescribeNotificationsForBudget({}, context)
```


### DescribeSubscribersForNotification



```js
amazonaws_budgets.DescribeSubscribersForNotification({}, context)
```


### UpdateBudget



```js
amazonaws_budgets.UpdateBudget({}, context)
```


### UpdateNotification



```js
amazonaws_budgets.UpdateNotification({}, context)
```


### UpdateSubscriber



```js
amazonaws_budgets.UpdateSubscriber({}, context)
```


