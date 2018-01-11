# @datafire/magick_nu

Client library for Tradeworks

## Installation and Usage
```bash
npm install --save @datafire/magick_nu
```
```js
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

#### Input
* input `object`
  * strategyId **required** `string`

#### Output
*Output schema unknown*

### getStrategiesTemplates
Get all Template Strategies


```js
magick_nu.getStrategiesTemplates(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### postTradingAccounts
Add a Trading Account


```js
magick_nu.postTradingAccounts({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [TradingAccount](#tradingaccount)

#### Output
*Output schema unknown*

### putTradingAccountsPasswordUsernameBrokerserverMt4username
Update MT4 Account Password


```js
magick_nu.putTradingAccountsPasswordUsernameBrokerserverMt4username({
  "username": "",
  "brokerserver": "",
  "mt4username": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * brokerserver **required** `string`
  * mt4username **required** `string`
  * body **required** [PasswordDTO](#passworddto)

#### Output
*Output schema unknown*

### postUsers
Create a new Tradeworks User


```js
magick_nu.postUsers({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [UserDTO](#userdto)

#### Output
*Output schema unknown*

### getUsersEmailEmail
Check if email is available


```js
magick_nu.getUsersEmailEmail({
  "email": ""
}, context)
```

#### Input
* input `object`
  * email **required** `string`

#### Output
*Output schema unknown*

### putUsersPasswordUsername
Update user's password


```js
magick_nu.putUsersPasswordUsername({
  "username": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * body **required** [PasswordDTO](#passworddto)

#### Output
*Output schema unknown*

### getUsersUsernameUsername
Check if username is available


```js
magick_nu.getUsersUsernameUsername({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`

#### Output
*Output schema unknown*



## Definitions

### PasswordDTO
* PasswordDTO `object`
  * newPassword `string`
  * oldPassword `string`

### TradingAccount
* TradingAccount `object`
  * brokerServer `string`
  * magickUsername `string`
  * password `string`
  * username `string`

### UserDTO
* UserDTO `object`
  * affiliateId `string`
  * email `string`
  * firstName `string`
  * lastName `string`
  * password `string`
  * subscriptionType `string`
  * username `string`


