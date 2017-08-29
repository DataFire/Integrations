# @datafire/magick_nu

Client library for Tradeworks

## Installation and Usage
```bash
npm install --save datafire @datafire/magick_nu
```

```js
let datafire = require('datafire');
let magick_nu = require('@datafire/magick_nu').create();

magick_nu.getStrategiesStrategyIdStrategyId({}).then(data => {
  console.log(data);
})
```

## Description
Authentication is required to access all methods of the API. Enter username and password.
                Credentials are automatically set as you type.

## Actions
### getStrategiesStrategyIdStrategyId
Get Strategy by ID


```js
magick_nu.getStrategiesStrategyIdStrategyId({
  "strategyId": ""
}, context)
```

#### Parameters
* strategyId (string) **required**

### getStrategiesTemplates
Get all Template Strategies


```js
magick_nu.getStrategiesTemplates(null, context)
```


### postTradingAccounts
Add a Trading Account


```js
magick_nu.postTradingAccounts({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### postUsers
Create a new Tradeworks User


```js
magick_nu.postUsers({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### getUsersEmailEmail
Check if email is available


```js
magick_nu.getUsersEmailEmail({
  "email": ""
}, context)
```

#### Parameters
* email (string) **required**

### getUsersUsernameUsername
Check if username is available


```js
magick_nu.getUsersUsernameUsername({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required**

