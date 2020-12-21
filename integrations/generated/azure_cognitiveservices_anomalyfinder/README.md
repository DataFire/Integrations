# @datafire/azure_cognitiveservices_anomalyfinder

Client library for Anomaly Finder Client

## Installation and Usage
```bash
npm install --save @datafire/azure_cognitiveservices_anomalyfinder
```
```js
let azure_cognitiveservices_anomalyfinder = require('@datafire/azure_cognitiveservices_anomalyfinder').create({
  apiKeyHeader: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Anomaly Finder API detects anomalies automatically in time series data. It supports two functionalities, one is for detecting the whole series with model trained by the timeseries, another is detecting last point with model trained by points before. By using this service, business customers can discover incidents and establish a logic flow for root cause analysis.

## Actions

### EntireDetect
The operation will generate a model using the entire series, each point will be detected with the same model. In this method, points before and after a certain point will be used to determine whether it's an anomaly. The entire detection can give user an overall status of the time series.


```js
azure_cognitiveservices_anomalyfinder.EntireDetect({
  "body": {
    "granularity": "",
    "series": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Request](#request)

#### Output
* output [EntireDetectResponse](#entiredetectresponse)

### LastDetect
The operation will generate a model using points before the latest one, In this method, only history points are used for determine whether the target point is an anomaly. Latest point detecting matches the scenario of real-time monitoring of business metrics.


```js
azure_cognitiveservices_anomalyfinder.LastDetect({
  "body": {
    "granularity": "",
    "series": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Request](#request)

#### Output
* output [LastDetectResponse](#lastdetectresponse)



## Definitions

### APIError
* APIError `object`: Error information returned by the API.
  * code `string` (values: InvalidCustomInterval, BadArgument, InvalidGranularity, InvalidPeriod, InvalidModelArgument, InvalidSeries): The error code.
  * message `string`: A message explaining the error reported by the service.

### EntireDetectResponse
* EntireDetectResponse `object`
  * expectedValues **required** `array`: ExpectedValues contain expected value for each input point. The index of the array is consistent with the input series.
    * items `number`
  * isAnomaly **required** `array`: IsAnomaly contains anomaly properties for each input point. True means an anomaly either negative or positive has been detected. The index of the array is consistent with the input series.
    * items `boolean`
  * isNegativeAnomaly **required** `array`: IsNegativeAnomaly contains anomaly status in negative direction for each input point. True means a negative anomaly has been detected. A negative anomaly means the point is detected as an anomaly and its real value is smaller than the expected one. The index of the array is consistent with the input series.
    * items `boolean`
  * isPositiveAnomaly **required** `array`: IsPositiveAnomaly contain anomaly status in positive direction for each input point. True means a positive anomaly has been detected. A positive anomaly means the point is detected as an anomaly and its real value is larger than the expected one. The index of the array is consistent with the input series.
    * items `boolean`
  * lowerMargins **required** `array`: LowerMargins contain lower margin of each input point. LowerMargin is used to calculate lowerBoundary, which equals to expectedValue - (100 - sensitivity)*lowerMargin. Points between the boundary can be marked as normal ones in client side. The index of the array is consistent with the input series.
    * items `number`
  * period **required** `integer`: Frequency extracted from the series, zero means no recurrent pattern has been found.
  * upperMargins **required** `array`: UpperMargins contain upper margin of each input point. UpperMargin is used to calculate upperBoundary, which equals to expectedValue + (100 - sensitivity)*upperMargin. Anomalies in response can be filtered by upperBoundary and lowerBoundary. By adjusting sensitivity value, less significant anomalies can be filtered in client side. The index of the array is consistent with the input series.
    * items `number`

### LastDetectResponse
* LastDetectResponse `object`
  * expectedValue `number`: Expected value of the latest point.
  * isAnomaly `boolean`: Anomaly status of the latest point, true means the latest point is an anomaly either in negative direction or positive direction.
  * isNegativeAnomaly `boolean`: Anomaly status in negative direction of the latest point. True means the latest point is an anomaly and its real value is smaller than the expected one.
  * isPositiveAnomaly `boolean`: Anomaly status in positive direction of the latest point. True means the latest point is an anomaly and its real value is larger than the expected one.
  * lowerMargin `number`: Lower margin of the latest point. LowerMargin is used to calculate lowerBoundary, which equals to expectedValue - (100 - sensitivity)*lowerMargin. 
  * period `integer`: Frequency extracted from the series, zero means no recurrent pattern has been found.
  * suggestedWindow `integer`: Suggested input series points needed for detecting the latest point.
  * upperMargin `number`: Upper margin of the latest point. UpperMargin is used to calculate upperBoundary, which equals to expectedValue + (100 - sensitivity)*upperMargin. If the value of latest point is between upperBoundary and lowerBoundary, it should be treated as normal value. By adjusting sensitivity value, anomaly status of latest point can be changed.

### Point
* Point `object`
  * timestamp **required** `string`: Timestamp of a data point (ISO8601 format).
  * value **required** `number`: The measurement of that point, should be float.

### Request
* Request `object`
  * customInterval `integer`: Custom Interval is used to set non-standard time interval, for example, if the series is 5 minutes, request can be set as {"granularity":"minutely", "customInterval":5}.
  * granularity **required** `string` (values: yearly, monthly, weekly, daily, hourly, minutely): Can only be one of yearly, monthly, weekly, daily, hourly or minutely. Granularity is used for verify whether input series is valid.
  * maxAnomalyRatio `number`: Optional argument, advanced model parameter, max anomaly ratio in a time series.
  * period `integer`: Optional argument, periodic value of a time series. If the value is null or does not present, the API will determine the period automatically.
  * sensitivity `integer`: Optional argument, advanced model parameter, between 0-99, the lower the value is, the larger the margin value will be which means less anomalies will be accepted.
  * series **required** `array`: Time series data points. Points should be sorted by timestamp in ascending order to match the anomaly detection result. If the data is not sorted correctly or there is duplicated timestamp, the API will not work. In such case, an error message will be returned.
    * items [Point](#point)


