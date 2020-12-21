# @datafire/sonar_trading

Client library for Sonar Trading

## Installation and Usage
```bash
npm install --save @datafire/sonar_trading
```
```js
let sonar_trading = require('@datafire/sonar_trading').create();

.then(data => {
  console.log(data);
});
```

## Description

Currency Authority: Exchange Rate of 1453 country currencies and crypto currencies

## Actions

### convert.get
Convert a currency amount to multiple other currencies


```js
sonar_trading.convert.get({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * from **required** `string`: Currency you want to convert. For example, EUR
  * to **required** `string`: Comma separated list of currencies codes. For example, USD
  * amount `string`: This parameter can be used to specify the amount you want to convert. If an amount is not specified then 1 is assumed.
  * decimal_places `string`: This parameter can be used to specify the number of decimal places included in the output. If an amount is not specified then 12 is assumed.

#### Output
*Output schema unknown*

### country.currencies.get
Return a list of all currencies of countries, available via service


```js
sonar_trading.country.currencies.get({}, context)
```

#### Input
* input `object`
  * language `string`: Parameter used to specify the language in which you would like the currency names to be provided. If not specified, EN is used. Now availeble only EN language.

#### Output
*Output schema unknown*

### digital.currencies.get
Return a list of all digital currencies, available via service


```js
sonar_trading.digital.currencies.get({}, context)
```

#### Input
* input `object`
  * language `string`: Parameter used to specify the language in which you would like the currency names to be provided. If not specified, EN is used. Now availeble only EN language.

#### Output
*Output schema unknown*

### history.get
Return a historic rate for a currencies


```js
sonar_trading.history.get({
  "from": "",
  "to": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * from **required** `string`: Currency you want to convert. For example, EUR
  * to **required** `string`: Comma separated list of currencies codes. For example, USD
  * date **required** `string`: UTC date should be in the form of YYYY-MM-DD, for example, 2018-06-20. Data available from 2018-06-19 only.
  * amount `string`: This parameter can be used to specify the amount you want to convert. If an amount is not specified then 1 is assumed.
  * decimal_places `string`: This parameter can be used to specify the number of decimal places included in the output. If an amount is not specified then 4 is assumed.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
