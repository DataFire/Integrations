# @datafire/brainbi

Client library for brainbi

## Installation and Usage
```bash
npm install --save @datafire/brainbi
```
```js
let brainbi = require('@datafire/brainbi').create();

.then(data => {
  console.log(data);
});
```

## Description

Welcome to the official API of the brainbi platform. Using this API you can freely integrate our analytics platform with any other solution. 
Please refer to the following documentation and in case of any issues, please contact us at service@brainbi.net.

Please note: for this API you will use your email and password from the brainbi.net platform to gather a Bearer Token for any API calls (use Login and get token). Once you are finished with your calls, please do a logout to remove your token and keep your account safe (use logout).

## Actions

### customers
This resource lists all cusomters that are currently saved in your account.


```js
brainbi.customers({}, context)
```

#### Input
* input `object`
  *  `string`

#### Output
*Output schema unknown*

### loginAndGetBearerToken
Use this endpoint to make the initial call with your email and password (same as on brainbi.net) and get your bearer token in response.


```js
brainbi.loginAndGetBearerToken({}, context)
```

#### Input
* input `object`
  * email `string`: The same email you use for our platform.
  * password `string`: The password email you use for our platform.

#### Output
*Output schema unknown*

### logout
Once you are done, call this endpoint to lock your account!


```js
brainbi.logout({}, context)
```

#### Input
* input `object`
  * email `string`: The same email you use for our platform.

#### Output
*Output schema unknown*

### orders
This resource lists all orders that are currently saved in your account.


```js
brainbi.orders({}, context)
```

#### Input
* input `object`
  *  `string`

#### Output
*Output schema unknown*

### orders1
Orders


```js
brainbi.orders1({}, context)
```

#### Input
* input `object`
  *  `string`
  * body `string`

#### Output
*Output schema unknown*

### products
This resource lists all products that are currently saved in you account.


```js
brainbi.products({}, context)
```

#### Input
* input `object`
  *  `string`

#### Output
*Output schema unknown*

### products1
Products


```js
brainbi.products1({}, context)
```

#### Input
* input `object`
  *  `string`
  * body `string`

#### Output
*Output schema unknown*

### rules
This resource lists all pricing rules that are currently saved in you account.


```js
brainbi.rules({}, context)
```

#### Input
* input `object`
  *  `string`

#### Output
*Output schema unknown*

### ruleData
This resource lists all data that wa saved for pricing rules.


```js
brainbi.ruleData({}, context)
```

#### Input
* input `object`
  *  `string`

#### Output
*Output schema unknown*

### ruleDataLatest
This resource lists only the latest data point that wa saved for a pricing rule.


```js
brainbi.ruleDataLatest({}, context)
```

#### Input
* input `object`
  *  `string`

#### Output
*Output schema unknown*

### seoLatestRankings
This resource lists all pricing rules that are currently saved in you account.


```js
brainbi.seoLatestRankings({}, context)
```

#### Input
* input `object`
  *  `string`

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
