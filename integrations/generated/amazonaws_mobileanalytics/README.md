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

amazonaws_mobileanalytics.PutEvents({}).then(data => {
  console.log(data);
})
```

## Description

Amazon Mobile Analytics is a service for collecting, visualizing, and understanding app usage data at scale.

## Actions

### PutEvents



```js
amazonaws_mobileanalytics.PutEvents({
  "events": []
}, context)
```

#### Input
* input `object`
  * events **required** [EventListDefinition](#eventlistdefinition)

#### Output
*Output schema unknown*



## Definitions

### BadRequestException
* BadRequestException `object`: An exception object returned when a request fails.
  * message [String](#string)

### Double
* Double `number`

### Event
* Event `object`: A JSON object representing a batch of unique event occurrences in your app.
  * attributes [MapOfStringToString](#mapofstringtostring)
  * eventType **required** [String50Chars](#string50chars)
  * metrics [MapOfStringToNumber](#mapofstringtonumber)
  * session [Session](#session)
  * timestamp **required** [ISO8601Timestamp](#iso8601timestamp)
  * version [String10Chars](#string10chars)

### EventListDefinition
* EventListDefinition `array`
  * items [Event](#event)

### ISO8601Timestamp
* ISO8601Timestamp `string`

### Long
* Long `integer`

### MapOfStringToNumber
* MapOfStringToNumber `array`
  * items `object`
    * key [String50Chars](#string50chars)
    * value [Double](#double)

### MapOfStringToString
* MapOfStringToString `array`
  * items `object`
    * key [String50Chars](#string50chars)
    * value [String0to1000Chars](#string0to1000chars)

### PutEventsInput
* PutEventsInput `object`: A container for the data needed for a PutEvent operation
  * events **required** [EventListDefinition](#eventlistdefinition)

### Session
* Session `object`: Describes the session. Session information is required on ALL events.
  * duration [Long](#long)
  * id [String50Chars](#string50chars)
  * startTimestamp [ISO8601Timestamp](#iso8601timestamp)
  * stopTimestamp [ISO8601Timestamp](#iso8601timestamp)

### String
* String `string`

### String0to1000Chars
* String0to1000Chars `string`

### String10Chars
* String10Chars `string`

### String50Chars
* String50Chars `string`


