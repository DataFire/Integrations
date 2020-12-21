# @datafire/keyserv_solutions

Client library for KeyServ

## Installation and Usage
```bash
npm install --save @datafire/keyserv_solutions
```
```js
let keyserv_solutions = require('@datafire/keyserv_solutions').create();

.then(data => {
  console.log(data);
});
```

## Description

KeyServ API

## Actions

### KeysApi_Current



```js
keyserv_solutions.KeysApi_Current({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
*Output schema unknown*

### KeysApi_Custom



```js
keyserv_solutions.KeysApi_Custom({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
* output `string`

### KeysApi_Expiry



```js
keyserv_solutions.KeysApi_Expiry({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
*Output schema unknown*

### KeysApi_Find



```js
keyserv_solutions.KeysApi_Find({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`

#### Output
*Output schema unknown*

### ProductsApi_PatchProduct



```js
keyserv_solutions.ProductsApi_PatchProduct({
  "body": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### ProductsApi_PatchProduct2



```js
keyserv_solutions.ProductsApi_PatchProduct2({
  "body": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### ProductsApi_Count



```js
keyserv_solutions.ProductsApi_Count({
  "body": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### ProductsApi_Find



```js
keyserv_solutions.ProductsApi_Find({
  "page": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * page **required** `integer`

#### Output
*Output schema unknown*

### ProductsApi_List



```js
keyserv_solutions.ProductsApi_List({
  "page": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * page **required** `integer`

#### Output
* output `array`
  * items [ProductView](#productview)

### ProductsApi_Save



```js
keyserv_solutions.ProductsApi_Save({
  "body": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### ProductsApi_DeleteProduct



```js
keyserv_solutions.ProductsApi_DeleteProduct({
  "X-Api-Key": "",
  "serial": ""
}, context)
```

#### Input
* input `object`
  * X-Api-Key **required** `string`
  * serial **required** `string`

#### Output
*Output schema unknown*

### ProductsApi_DeleteProduct2



```js
keyserv_solutions.ProductsApi_DeleteProduct2({
  "X-Api-Key": "",
  "serial": ""
}, context)
```

#### Input
* input `object`
  * X-Api-Key **required** `string`
  * serial **required** `string`

#### Output
*Output schema unknown*

### SubscriptionsApi_PutSubscription2



```js
keyserv_solutions.SubscriptionsApi_PutSubscription2({
  "body": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### SubscriptionsApi_PutSubscription



```js
keyserv_solutions.SubscriptionsApi_PutSubscription({
  "body": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### SubscriptionsApi_Count



```js
keyserv_solutions.SubscriptionsApi_Count({
  "body": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### SubscriptionsApi_Disable



```js
keyserv_solutions.SubscriptionsApi_Disable({
  "body": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### SubscriptionsApi_Disable2



```js
keyserv_solutions.SubscriptionsApi_Disable2({
  "body": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### SubscriptionsApi_Enable



```js
keyserv_solutions.SubscriptionsApi_Enable({
  "body": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### SubscriptionsApi_Enable2



```js
keyserv_solutions.SubscriptionsApi_Enable2({
  "body": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### SubscriptionsApi_Find



```js
keyserv_solutions.SubscriptionsApi_Find({
  "body": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### SubscriptionsApi_List



```js
keyserv_solutions.SubscriptionsApi_List({
  "page": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * page **required** `integer`

#### Output
* output `array`
  * items [SubscriptionView](#subscriptionview)

### SubscriptionsApi_Save



```js
keyserv_solutions.SubscriptionsApi_Save({
  "body": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### SubscriptionsApi_DeleteSubscription



```js
keyserv_solutions.SubscriptionsApi_DeleteSubscription({
  "X-Api-Key": "",
  "serial": "",
  "keep": true
}, context)
```

#### Input
* input `object`
  * X-Api-Key **required** `string`
  * serial **required** `string`
  * keep **required** `boolean`

#### Output
*Output schema unknown*

### SubscriptionsApi_DeleteSubscription2



```js
keyserv_solutions.SubscriptionsApi_DeleteSubscription2({
  "X-Api-Key": "",
  "serial": "",
  "keep": true
}, context)
```

#### Input
* input `object`
  * X-Api-Key **required** `string`
  * serial **required** `string`
  * keep **required** `boolean`

#### Output
*Output schema unknown*



## Definitions

### ApiCredentials
* ApiCredentials `object`
  * key `string`
  * serial `string`

### ApiKey
* ApiKey `object`
  * key `string`

### CountOf
* CountOf `object`
  * count `integer`

### CurrentKey
* CurrentKey `object`
  * current `boolean`

### Expiry
* Expiry `object`
  * expires `string`
  * time `string`

### FindCredentials
* FindCredentials `object`
  * key `string`
  * serial `string`

### KeyView
* KeyView `object`
  * action **required** `string`
  * callbackOnModify **required** `boolean`
  * callbackUrl `string`
  * commenced **required** `string`
  * created `string`
  * current `boolean`
  * frequency **required** `string`
  * name `string`
  * serial `string`
  * updated `string`

### ProductCreateModify
* ProductCreateModify `object`
  * key `string`
  * name `string`
  * serial `string`

### ProductView
* ProductView `object`
  * created `string`
  * name `string`
  * serial `string`
  * subscriptions `array`
    * items [SubscriptionView](#subscriptionview)
  * updated `string`

### SubscriptionCreateModify
* SubscriptionCreateModify `object`
  * action **required** `string`
  * callbackOnModify `boolean`
  * callbackUrl `string`
  * frequency **required** `string`
  * key `string`
  * name `string`
  * serial `string`
  * startFrom `string`

### SubscriptionView
* SubscriptionView `object`
  * action **required** `string`
  * callbackOnModify **required** `boolean`
  * callbackUrl `string`
  * commenced **required** `string`
  * created `string`
  * frequency **required** `string`
  * keys `array`
    * items [KeyView](#keyview)
  * name `string`
  * updated `string`


