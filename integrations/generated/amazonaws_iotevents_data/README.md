# @datafire/amazonaws_iotevents_data

Client library for AWS IoT Events Data

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_iotevents_data
```
```js
let amazonaws_iotevents_data = require('@datafire/amazonaws_iotevents_data').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

AWS IoT Events monitors your equipment or device fleets for failures or changes in operation, and triggers actions when such events occur. AWS IoT Events Data API commands enable you to send inputs to detectors, list detectors, and view or update a detector's status.

## Actions

### BatchUpdateDetector



```js
amazonaws_iotevents_data.BatchUpdateDetector({
  "detectors": []
}, context)
```

#### Input
* input `object`
  * detectors **required** `array`: The list of detectors (instances) to update, along with the values to update.
    * items [UpdateDetectorRequest](#updatedetectorrequest)

#### Output
* output [BatchUpdateDetectorResponse](#batchupdatedetectorresponse)

### ListDetectors



```js
amazonaws_iotevents_data.ListDetectors({
  "detectorModelName": ""
}, context)
```

#### Input
* input `object`
  * detectorModelName **required** `string`
  * stateName `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListDetectorsResponse](#listdetectorsresponse)

### DescribeDetector



```js
amazonaws_iotevents_data.DescribeDetector({
  "detectorModelName": ""
}, context)
```

#### Input
* input `object`
  * detectorModelName **required** `string`
  * keyValue `string`

#### Output
* output [DescribeDetectorResponse](#describedetectorresponse)

### BatchPutMessage



```js
amazonaws_iotevents_data.BatchPutMessage({
  "messages": []
}, context)
```

#### Input
* input `object`
  * messages **required** `array`: The list of messages to send. Each message has the following format: <code>'{ "messageId": "string", "inputName": "string", "payload": "string"}'</code> 
    * items [Message](#message)

#### Output
* output [BatchPutMessageResponse](#batchputmessageresponse)



## Definitions

### BatchPutMessageErrorEntries
* BatchPutMessageErrorEntries `array`
  * items [BatchPutMessageErrorEntry](#batchputmessageerrorentry)

### BatchPutMessageErrorEntry
* BatchPutMessageErrorEntry `object`: Contains information about the errors encountered.
  * errorCode
  * errorMessage
  * messageId

### BatchPutMessageRequest
* BatchPutMessageRequest `object`
  * messages **required**
    * items [Message](#message)

### BatchPutMessageResponse
* BatchPutMessageResponse `object`
  * BatchPutMessageErrorEntries
    * items [BatchPutMessageErrorEntry](#batchputmessageerrorentry)

### BatchUpdateDetectorErrorEntries
* BatchUpdateDetectorErrorEntries `array`
  * items [BatchUpdateDetectorErrorEntry](#batchupdatedetectorerrorentry)

### BatchUpdateDetectorErrorEntry
* BatchUpdateDetectorErrorEntry `object`: Information about the error that occured when attempting to update a detector.
  * errorCode
  * errorMessage
  * messageId

### BatchUpdateDetectorRequest
* BatchUpdateDetectorRequest `object`
  * detectors **required**
    * items [UpdateDetectorRequest](#updatedetectorrequest)

### BatchUpdateDetectorResponse
* BatchUpdateDetectorResponse `object`
  * batchUpdateDetectorErrorEntries
    * items [BatchUpdateDetectorErrorEntry](#batchupdatedetectorerrorentry)

### DescribeDetectorRequest
* DescribeDetectorRequest `object`

### DescribeDetectorResponse
* DescribeDetectorResponse `object`
  * detector
    * creationTime
    * detectorModelName
    * detectorModelVersion
    * keyValue
    * lastUpdateTime
    * state
      * stateName **required**
      * timers **required**
        * items [Timer](#timer)
      * variables **required**
        * items [Variable](#variable)

### Detector
* Detector `object`: Information about the detector (instance).
  * creationTime
  * detectorModelName
  * detectorModelVersion
  * keyValue
  * lastUpdateTime
  * state
    * stateName **required**
    * timers **required**
      * items [Timer](#timer)
    * variables **required**
      * items [Variable](#variable)

### DetectorModelName
* DetectorModelName `string`

### DetectorModelVersion
* DetectorModelVersion `string`

### DetectorState
* DetectorState `object`: Information about the current state of the detector instance.
  * stateName **required**
  * timers **required**
    * items [Timer](#timer)
  * variables **required**
    * items [Variable](#variable)

### DetectorStateDefinition
* DetectorStateDefinition `object`: The new state, variable values, and timer settings of the detector (instance).
  * stateName **required**
  * timers **required**
    * items [TimerDefinition](#timerdefinition)
  * variables **required**
    * items [VariableDefinition](#variabledefinition)

### DetectorStateSummary
* DetectorStateSummary `object`: Information about the detector state.
  * stateName

### DetectorSummaries
* DetectorSummaries `array`
  * items [DetectorSummary](#detectorsummary)

### DetectorSummary
* DetectorSummary `object`: Information about the detector (instance).
  * creationTime
  * detectorModelName
  * detectorModelVersion
  * keyValue
  * lastUpdateTime
  * state
    * stateName

### ErrorCode
* ErrorCode `string` (values: ResourceNotFoundException, InvalidRequestException, InternalFailureException, ServiceUnavailableException, ThrottlingException)

### ErrorMessage
* ErrorMessage `string`

### InputName
* InputName `string`

### InternalFailureException


### InvalidRequestException


### KeyValue
* KeyValue `string`

### ListDetectorsRequest
* ListDetectorsRequest `object`

### ListDetectorsResponse
* ListDetectorsResponse `object`
  * detectorSummaries
    * items [DetectorSummary](#detectorsummary)
  * nextToken

### MaxResults
* MaxResults `integer`

### Message
* Message `object`: Information about a message.
  * inputName **required**
  * messageId **required**
  * payload **required**

### MessageId
* MessageId `string`

### Messages
* Messages `array`
  * items [Message](#message)

### NextToken
* NextToken `string`

### Payload
* Payload `string`

### ResourceNotFoundException


### Seconds
* Seconds `integer`

### ServiceUnavailableException


### StateName
* StateName `string`

### ThrottlingException


### Timer
* Timer `object`: The current state of a timer.
  * name **required**
  * timestamp **required**

### TimerDefinition
* TimerDefinition `object`: The new setting of a timer.
  * name **required**
  * seconds **required**

### TimerDefinitions
* TimerDefinitions `array`
  * items [TimerDefinition](#timerdefinition)

### TimerName
* TimerName `string`

### Timers
* Timers `array`
  * items [Timer](#timer)

### Timestamp
* Timestamp `string`

### UpdateDetectorRequest
* UpdateDetectorRequest `object`: Information used to update the detector (instance).
  * detectorModelName **required**
  * keyValue
  * messageId **required**
  * state **required**
    * stateName **required**
    * timers **required**
      * items [TimerDefinition](#timerdefinition)
    * variables **required**
      * items [VariableDefinition](#variabledefinition)

### UpdateDetectorRequests
* UpdateDetectorRequests `array`
  * items [UpdateDetectorRequest](#updatedetectorrequest)

### Variable
* Variable `object`: The current state of the variable.
  * name **required**
  * value **required**

### VariableDefinition
* VariableDefinition `object`: The new value of the variable.
  * name **required**
  * value **required**

### VariableDefinitions
* VariableDefinitions `array`
  * items [VariableDefinition](#variabledefinition)

### VariableName
* VariableName `string`

### VariableValue
* VariableValue `string`

### Variables
* Variables `array`
  * items [Variable](#variable)


