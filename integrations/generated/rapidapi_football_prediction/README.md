# @datafire/rapidapi_football_prediction

Client library for Football Prediction API

## Installation and Usage
```bash
npm install --save @datafire/rapidapi_football_prediction
```
```js
let rapidapi_football_prediction = require('@datafire/rapidapi_football_prediction').create();

.then(data => {
  console.log(data);
});
```

## Description

The Football Prediction API allows developers to get predictions for upcoming football (soccer) matches, results for past matches, and performance monitoring for statistical models.

## Actions

### api.v2.list_federations.get
Returns an array of all the available federations.


```js
rapidapi_football_prediction.api.v2.list_federations.get({}, context)
```

#### Input
* input `object`
  * X-RapidApi-Key `string`: Your key obtained from https://boggio-analytics.com/fp-api/

#### Output
* output `object`
  * data `array`
    * items `string`

### api.v2.list_markets.get
Returns an array of all the supported prediction markets


```js
rapidapi_football_prediction.api.v2.list_markets.get({}, context)
```

#### Input
* input `object`
  * X-RapidApi-Key `string`: Your key obtained from https://boggio-analytics.com/fp-api/

#### Output
* output `object`
  * data `object`
    * all `array`
      * items `string`
    * allowed_for_your_subscription `array`
      * items `string`

### api.v2.performance_stats.get
Returns predictions accuracy in the last 1, 7, 14, 30 days.


```js
rapidapi_football_prediction.api.v2.performance_stats.get({}, context)
```

#### Input
* input `object`
  * X-RapidApi-Key `string`: Your key obtained from https://boggio-analytics.com/fp-api/

#### Output
* output `object`
  * data `object`
    * accuracy `object`
      * last_14_days `number`
      * last_30_days `number`
      * last_7_days `number`
      * yesterday `number`
    * details `object`
      * last_14_days `object`
        * lost `integer`
        * pending `integer`
        * postponed `integer`
        * total `integer`
        * won `integer`
      * last_30_days `object`
        * lost `integer`
        * pending `integer`
        * postponed `integer`
        * total `integer`
        * won `integer`
      * last_7_days `object`
        * lost `integer`
        * pending `integer`
        * postponed `integer`
        * total `integer`
        * won `integer`
      * yesterday `object`
        * lost `integer`
        * pending `integer`
        * postponed `integer`
        * total `integer`
        * won `integer`
    * market `string`

### api.v2.predictions.get
This endpoint returns by default the next non-expired football predictions. URL parameters can be specified to show specific date in the past or future or to filter by federation and prediction market name.


```js
rapidapi_football_prediction.api.v2.predictions.get({}, context)
```

#### Input
* input `object`
  * X-RapidApi-Key `string`: Your key obtained from https://boggio-analytics.com/fp-api/

#### Output
*Output schema unknown*

### api.v2.predictions.id.get
Returns all predictions available for a match id.


```js
rapidapi_football_prediction.api.v2.predictions.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of match

#### Output
* output `object`
  * data `array`
    * items `object`



## Definitions

*This integration has no definitions*
