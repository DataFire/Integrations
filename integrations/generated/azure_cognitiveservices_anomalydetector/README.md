# @datafire/azure_cognitiveservices_anomalydetector

Client library for Anomaly Detector Client

## Installation and Usage
```bash
npm install --save @datafire/azure_cognitiveservices_anomalydetector
```
```js
let azure_cognitiveservices_anomalydetector = require('@datafire/azure_cognitiveservices_anomalydetector').create({
  apiKeyHeader: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Anomaly Detector API detects anomalies automatically in time series data. It supports two kinds of mode, one is for stateless using, another is for stateful using. In stateless mode, there are three functionalities. Entire Detect is for detecting the whole series with model trained by the time series, Last Detect is detecting last point with model trained by points before. ChangePoint Detect is for detecting trend changes in time series. In stateful mode, user can store time series, the stored time series will be used for detection anomalies. Under this mode, user can still use the above three functionalities by only giving a time range without preparing time series in client side. Besides the above three functionalities, stateful model also provide group based detection and labeling service. By leveraging labeling service user can provide labels for each detection result, these labels will be used for retuning or regenerating detection models. Inconsistency detection is a kind of group based detection, this detection will find inconsistency ones in a set of time series. By using anomaly detector service, business customers can discover incidents and establish a logic flow for root cause analysis.

## Actions

### ChangePointDetect
Evaluate change point score of every series point


```js
azure_cognitiveservices_anomalydetector.ChangePointDetect({
  "body": {
    "granularity": "",
    "series": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ChangePointDetectRequest](#changepointdetectrequest)

#### Output
* output [ChangePointDetectResponse](#changepointdetectresponse)

### EntireDetect
This operation generates a model using an entire series, each point is detected with the same model. With this method, points before and after a certain point are used to determine whether it is an anomaly. The entire detection can give user an overall status of the time series.


```js
azure_cognitiveservices_anomalydetector.EntireDetect({
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
This operation generates a model using points before the latest one. With this method, only historical points are used to determine whether the target point is an anomaly. The latest point detecting operation matches the scenario of real-time monitoring of business metrics.


```js
azure_cognitiveservices_anomalydetector.LastDetect({
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
  * code `string` (values: InvalidCustomInterval, BadArgument, InvalidGranularity, InvalidPeriod, InvalidModelArgument, InvalidSeries, InvalidJsonFormat, RequiredGranularity, RequiredSeries): The error code.
  * message `string`: A message explaining the error reported by the service.

### ChangePointDetectRequest
* ChangePointDetectRequest `object`
  * customInterval [CustomInterval](#custominterval)
  * granularity **required** [Granularity](#granularity)
  * period `integer`: Optional argument, periodic value of a time series. If the value is null or does not present, the API will determine the period automatically.
  * series **required** `array`: Time series data points. Points should be sorted by timestamp in ascending order to match the change point detection result.
    * items [Point](#point)
  * stableTrendWindow `integer`: Optional argument, advanced model parameter, a default stableTrendWindow will be used in detection.
  * threshold `number`: Optional argument, advanced model parameter, between 0.0-1.0, the lower the value is, the larger the trend error will be which means less change point will be accepted.

### ChangePointDetectResponse
* ChangePointDetectResponse `object`
  * confidenceScores **required** `array`: the change point confidence of each point
    * items `number`
  * isChangePoint **required** `array`: isChangePoint contains change point properties for each input point. True means an anomaly either negative or positive has been detected. The index of the array is consistent with the input series.
    * items `boolean`
  * period **required** `integer`: Frequency extracted from the series, zero means no recurrent pattern has been found.

### CustomInterval
* CustomInterval `integer`: Custom Interval is used to set non-standard time interval, for example, if the series is 5 minutes, request can be set as {"granularity":"minutely", "customInterval":5}.

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
  * lowerMargins **required** `array`: LowerMargins contain lower margin of each input point. LowerMargin is used to calculate lowerBoundary, which equals to expectedValue - (100 - marginScale)*lowerMargin. Points between the boundary can be marked as normal ones in client side. The index of the array is consistent with the input series.
    * items `number`
  * period **required** `integer`: Frequency extracted from the series, zero means no recurrent pattern has been found.
  * upperMargins **required** `array`: UpperMargins contain upper margin of each input point. UpperMargin is used to calculate upperBoundary, which equals to expectedValue + (100 - marginScale)*upperMargin. Anomalies in response can be filtered by upperBoundary and lowerBoundary. By adjusting marginScale value, less significant anomalies can be filtered in client side. The index of the array is consistent with the input series.
    * items `number`

### Granularity
* Granularity `string` (values: yearly, monthly, weekly, daily, hourly, minutely): Can only be one of yearly, monthly, weekly, daily, hourly or minutely. Granularity is used for verify whether input series is valid.

### LastDetectResponse
* LastDetectResponse `object`
  * expectedValue **required** `number`: Expected value of the latest point.
  * isAnomaly **required** `boolean`: Anomaly status of the latest point, true means the latest point is an anomaly either in negative direction or positive direction.
  * isNegativeAnomaly **required** `boolean`: Anomaly status in negative direction of the latest point. True means the latest point is an anomaly and its real value is smaller than the expected one.
  * isPositiveAnomaly **required** `boolean`: Anomaly status in positive direction of the latest point. True means the latest point is an anomaly and its real value is larger than the expected one.
  * lowerMargin **required** `number`: Lower margin of the latest point. LowerMargin is used to calculate lowerBoundary, which equals to expectedValue - (100 - marginScale)*lowerMargin. 
  * period **required** `integer`: Frequency extracted from the series, zero means no recurrent pattern has been found.
  * suggestedWindow **required** `integer`: Suggested input series points needed for detecting the latest point.
  * upperMargin **required** `number`: Upper margin of the latest point. UpperMargin is used to calculate upperBoundary, which equals to expectedValue + (100 - marginScale)*upperMargin. If the value of latest point is between upperBoundary and lowerBoundary, it should be treated as normal value. By adjusting marginScale value, anomaly status of latest point can be changed.

### Point
* Point `object`
  * timestamp **required** `string`: Timestamp of a data point (ISO8601 format).
  * value **required** `number`: The measurement of that point, should be float.

### Request
* Request `object`
  * customInterval [CustomInterval](#custominterval)
  * granularity **required** [Granularity](#granularity)
  * maxAnomalyRatio `number`: Optional argument, advanced model parameter, max anomaly ratio in a time series.
  * period `integer`: Optional argument, periodic value of a time series. If the value is null or does not present, the API will determine the period automatically.
  * sensitivity `integer`: Optional argument, advanced model parameter, between 0-99, the lower the value is, the larger the margin value will be which means less anomalies will be accepted.
  * series **required** `array`: Time series data points. Points should be sorted by timestamp in ascending order to match the anomaly detection result. If the data is not sorted correctly or there is duplicated timestamp, the API will not work. In such case, an error message will be returned.
    * items [Point](#point)


