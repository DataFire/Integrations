# @datafire/amazonaws_budgets

Client library for AWS Budgets

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_budgets
```

```js
let datafire = require('datafire');
let amazonaws_budgets = require('@datafire/amazonaws_budgets').actions;
let context = new datafire.Context();

amazonaws_budgets.CreateBudget({}, context).then(data => {
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

#### Parameters

### CreateNotification



```js
amazonaws_budgets.CreateNotification({}, context)
```

#### Parameters

### CreateSubscriber



```js
amazonaws_budgets.CreateSubscriber({}, context)
```

#### Parameters

### DeleteBudget



```js
amazonaws_budgets.DeleteBudget({}, context)
```

#### Parameters

### DeleteNotification



```js
amazonaws_budgets.DeleteNotification({}, context)
```

#### Parameters

### DeleteSubscriber



```js
amazonaws_budgets.DeleteSubscriber({}, context)
```

#### Parameters

### DescribeBudget



```js
amazonaws_budgets.DescribeBudget({}, context)
```

#### Parameters

### DescribeBudgets



```js
amazonaws_budgets.DescribeBudgets({}, context)
```

#### Parameters

### DescribeNotificationsForBudget



```js
amazonaws_budgets.DescribeNotificationsForBudget({}, context)
```

#### Parameters

### DescribeSubscribersForNotification



```js
amazonaws_budgets.DescribeSubscribersForNotification({}, context)
```

#### Parameters

### UpdateBudget



```js
amazonaws_budgets.UpdateBudget({}, context)
```

#### Parameters

### UpdateNotification



```js
amazonaws_budgets.UpdateNotification({}, context)
```

#### Parameters

### UpdateSubscriber



```js
amazonaws_budgets.UpdateSubscriber({}, context)
```

#### Parameters

