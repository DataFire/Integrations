# @datafire/amazonaws_mobileanalytics

Client library for Amazon Mobile Analytics

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_mobileanalytics
```
```js
let amazonaws_mobileanalytics = require('@datafire/amazonaws_mobileanalytics').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon Mobile Analytics is a service for collecting, visualizing, and understanding app usage data at scale.

## Actions

### PutEvents



```js
amazonaws_mobileanalytics.PutEvents({
  "x-amz-Client-Context": "",
  "events": []
}, context)
```

#### Input
* input `object`
  * x-amz-Client-Context **required** `string`
  * x-amz-Client-Context-Encoding `string`
  * events **required** `array`: An array of Event JSON objects
    * items [Event](#event)

#### Output
*Output schema unknown*



## Definitions

### BadRequestException
* BadRequestException `object`: An exception object returned when a request fails.
  * message

### Double
* Double `number`

### Event
* Event `object`: A JSON object representing a batch of unique event occurrences in your app.
  * attributes
  * eventType **required**
  * metrics
  * session
    * duration
    * id
    * startTimestamp
    * stopTimestamp
  * timestamp **required**
  * version

### EventListDefinition
* EventListDefinition `array`
  * items [Event](#event)

### ISO8601Timestamp
* ISO8601Timestamp `string`

### Long
* Long `integer`

### MapOfStringToNumber
* MapOfStringToNumber `object`

### MapOfStringToString
* MapOfStringToString `object`

### PutEventsInput
* PutEventsInput `object`: A container for the data needed for a PutEvent operation
  * events **required**
    * items [Event](#event)

### Session
* Session `object`: Describes the session. Session information is required on ALL events.
  * duration
  * id
  * startTimestamp
  * stopTimestamp

### String
* String `string`

### String0to1000Chars
* String0to1000Chars `string`

### String10Chars
* String10Chars `string`

### String50Chars
* String50Chars `string`


