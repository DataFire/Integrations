# @datafire/amazonaws_forecastquery

Client library for Amazon Forecast Query Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_forecastquery
```
```js
let amazonaws_forecastquery = require('@datafire/amazonaws_forecastquery').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Provides APIs for creating and managing Amazon Forecast resources.

## Actions

### QueryForecast



```js
amazonaws_forecastquery.QueryForecast({
  "ForecastArn": null,
  "Filters": null
}, context)
```

#### Input
* input `object`
  * EndDate
  * Filters **required**
  * ForecastArn **required**
  * NextToken
  * StartDate

#### Output
* output [QueryForecastResponse](#queryforecastresponse)



## Definitions

### Arn
* Arn `string`

### AttributeName
* AttributeName `string`

### AttributeValue
* AttributeValue `string`

### DataPoint
* DataPoint `object`: The forecast value for a specific date. Part of the <a>Forecast</a> object.
  * Timestamp
  * Value

### DateTime
* DateTime `string`

### Double
* Double `number`

### Filters
* Filters `object`

### Forecast
* Forecast `object`: Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response.
  * Predictions

### InvalidInputException


### InvalidNextTokenException


### LimitExceededException


### NextToken
* NextToken `string`

### Predictions
* Predictions `object`

### QueryForecastRequest
* QueryForecastRequest `object`
  * EndDate
  * Filters **required**
  * ForecastArn **required**
  * NextToken
  * StartDate

### QueryForecastResponse
* QueryForecastResponse `object`
  * Forecast
    * Predictions

### ResourceInUseException


### ResourceNotFoundException


### Statistic
* Statistic `string`

### TimeSeries
* TimeSeries `array`
  * items [DataPoint](#datapoint)

### Timestamp
* Timestamp `string`


