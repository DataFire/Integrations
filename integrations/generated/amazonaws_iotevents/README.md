# @datafire/amazonaws_iotevents

Client library for AWS IoT Events

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_iotevents
```
```js
let amazonaws_iotevents = require('@datafire/amazonaws_iotevents').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

AWS IoT Events monitors your equipment or device fleets for failures or changes in operation, and triggers actions when such events occur. You can use AWS IoT Events API operations to create, read, update, and delete inputs and detector models, and to list their versions.

## Actions

### ListDetectorModels



```js
amazonaws_iotevents.ListDetectorModels({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListDetectorModelsResponse](#listdetectormodelsresponse)

### CreateDetectorModel



```js
amazonaws_iotevents.CreateDetectorModel({
  "detectorModelName": "",
  "detectorModelDefinition": {},
  "roleArn": ""
}, context)
```

#### Input
* input `object`
  * tags `array`: Metadata that can be used to manage the detector model.
    * items [Tag](#tag)
  * detectorModelDefinition **required** `object`: Information that defines how a detector operates.
    * initialStateName
    * states
      * items [State](#state)
  * detectorModelDescription `string`: A brief description of the detector model.
  * detectorModelName **required** `string`: The name of the detector model.
  * evaluationMethod `string` (values: BATCH, SERIAL): Information about the order in which events are evaluated and how actions are executed. 
  * key `string`: The input attribute key used to identify a device or system to create a detector (an instance of the detector model) and then to route each input received to the appropriate detector (instance). This parameter uses a JSON-path expression in the message payload of each input to specify the attribute-value pair that is used to identify the device associated with the input.
  * roleArn **required** `string`: The ARN of the role that grants permission to AWS IoT Events to perform its operations.

#### Output
* output [CreateDetectorModelResponse](#createdetectormodelresponse)

### DeleteDetectorModel



```js
amazonaws_iotevents.DeleteDetectorModel({
  "detectorModelName": ""
}, context)
```

#### Input
* input `object`
  * detectorModelName **required** `string`

#### Output
*Output schema unknown*

### DescribeDetectorModel



```js
amazonaws_iotevents.DescribeDetectorModel({
  "detectorModelName": ""
}, context)
```

#### Input
* input `object`
  * detectorModelName **required** `string`
  * version `string`

#### Output
* output [DescribeDetectorModelResponse](#describedetectormodelresponse)

### UpdateDetectorModel



```js
amazonaws_iotevents.UpdateDetectorModel({
  "detectorModelName": "",
  "detectorModelDefinition": {},
  "roleArn": ""
}, context)
```

#### Input
* input `object`
  * detectorModelName **required** `string`
  * detectorModelDefinition **required** `object`: Information that defines how a detector operates.
    * initialStateName
    * states
      * items [State](#state)
  * detectorModelDescription `string`: A brief description of the detector model.
  * evaluationMethod `string` (values: BATCH, SERIAL): Information about the order in which events are evaluated and how actions are executed. 
  * roleArn **required** `string`: The ARN of the role that grants permission to AWS IoT Events to perform its operations.

#### Output
* output [UpdateDetectorModelResponse](#updatedetectormodelresponse)

### ListDetectorModelVersions



```js
amazonaws_iotevents.ListDetectorModelVersions({
  "detectorModelName": ""
}, context)
```

#### Input
* input `object`
  * detectorModelName **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListDetectorModelVersionsResponse](#listdetectormodelversionsresponse)

### ListInputs



```js
amazonaws_iotevents.ListInputs({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListInputsResponse](#listinputsresponse)

### CreateInput



```js
amazonaws_iotevents.CreateInput({
  "inputName": "",
  "inputDefinition": {}
}, context)
```

#### Input
* input `object`
  * tags `array`: Metadata that can be used to manage the input.
    * items [Tag](#tag)
  * inputDefinition **required** `object`: The definition of the input.
    * attributes
      * items [Attribute](#attribute)
  * inputDescription `string`: A brief description of the input.
  * inputName **required** `string`: The name you want to give to the input.

#### Output
*Output schema unknown*

### DeleteInput



```js
amazonaws_iotevents.DeleteInput({
  "inputName": ""
}, context)
```

#### Input
* input `object`
  * inputName **required** `string`

#### Output
* output [DeleteInputResponse](#deleteinputresponse)

### DescribeInput



```js
amazonaws_iotevents.DescribeInput({
  "inputName": ""
}, context)
```

#### Input
* input `object`
  * inputName **required** `string`

#### Output
* output [DescribeInputResponse](#describeinputresponse)

### UpdateInput



```js
amazonaws_iotevents.UpdateInput({
  "inputName": "",
  "inputDefinition": {}
}, context)
```

#### Input
* input `object`
  * inputName **required** `string`
  * inputDefinition **required** `object`: The definition of the input.
    * attributes
      * items [Attribute](#attribute)
  * inputDescription `string`: A brief description of the input.

#### Output
* output [UpdateInputResponse](#updateinputresponse)

### DescribeLoggingOptions



```js
amazonaws_iotevents.DescribeLoggingOptions({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeLoggingOptionsResponse](#describeloggingoptionsresponse)

### PutLoggingOptions



```js
amazonaws_iotevents.PutLoggingOptions({
  "loggingOptions": {}
}, context)
```

#### Input
* input `object`
  * loggingOptions **required** `object`: The values of the AWS IoT Events logging options.
    * detectorDebugOptions
      * items [DetectorDebugOption](#detectordebugoption)
    * enabled
    * level
    * roleArn

#### Output
*Output schema unknown*

### ListTagsForResource



```js
amazonaws_iotevents.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_iotevents.TagResource({
  "resourceArn": "",
  "tags": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `array`: The new or modified tags for the resource.
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_iotevents.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### Action
* Action `object`: An action to be performed when the <code>condition</code> is TRUE.
  * clearTimer
    * timerName **required**
  * dynamoDB
    * hashKeyField **required**
    * hashKeyType
    * hashKeyValue **required**
    * operation
    * payload [Payload](#payload)
    * payloadField
    * rangeKeyField
    * rangeKeyType
    * rangeKeyValue
    * tableName **required**
  * dynamoDBv2
    * payload [Payload](#payload)
    * tableName **required**
  * firehose
    * deliveryStreamName **required**
    * payload
      * contentExpression **required**
      * type **required**
    * separator
  * iotEvents
    * inputName **required**
    * payload
      * contentExpression **required**
      * type **required**
  * iotSiteWise
    * assetId
    * entryId
    * propertyAlias
    * propertyId
    * propertyValue **required**
      * quality
      * timestamp
        * offsetInNanos
        * timeInSeconds **required**
      * value **required**
        * booleanValue
        * doubleValue
        * integerValue
        * stringValue
  * iotTopicPublish
    * mqttTopic **required**
    * payload
      * contentExpression **required**
      * type **required**
  * lambda
    * functionArn **required**
    * payload
      * contentExpression **required**
      * type **required**
  * resetTimer
    * timerName **required**
  * setTimer
    * durationExpression
    * seconds
    * timerName **required**
  * setVariable
    * value **required**
    * variableName **required**
  * sns
    * payload
      * contentExpression **required**
      * type **required**
    * targetArn **required**
  * sqs
    * payload
      * contentExpression **required**
      * type **required**
    * queueUrl **required**
    * useBase64

### Actions
* Actions `array`
  * items [Action](#action)

### AmazonResourceName
* AmazonResourceName `string`

### AssetId
* AssetId `string`

### AssetPropertyAlias
* AssetPropertyAlias `string`

### AssetPropertyBooleanValue
* AssetPropertyBooleanValue `string`

### AssetPropertyDoubleValue
* AssetPropertyDoubleValue `string`

### AssetPropertyEntryId
* AssetPropertyEntryId `string`

### AssetPropertyId
* AssetPropertyId `string`

### AssetPropertyIntegerValue
* AssetPropertyIntegerValue `string`

### AssetPropertyOffsetInNanos
* AssetPropertyOffsetInNanos `string`

### AssetPropertyQuality
* AssetPropertyQuality `string`

### AssetPropertyStringValue
* AssetPropertyStringValue `string`

### AssetPropertyTimeInSeconds
* AssetPropertyTimeInSeconds `string`

### AssetPropertyTimestamp
* AssetPropertyTimestamp `object`: <p>A structure that contains timestamp information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html">TimeInNanos</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>For parameters that are string data type, you can specify the following options:</p> <ul> <li> <p>Use a string. For example, the <code>timeInSeconds</code> value can be <code>'1586400675'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>timeInSeconds</code> value can be <code>'${$input.TemperatureInput.sensorData.timestamp/1000}'</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul>
  * offsetInNanos
  * timeInSeconds **required**

### AssetPropertyValue
* AssetPropertyValue `object`: <p>A structure that contains value information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html">AssetPropertyValue</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>For parameters that are string data type, you can specify the following options: </p> <ul> <li> <p>Use a string. For example, the <code>quality</code> value can be <code>'GOOD'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>quality</code> value can be <code>$input.TemperatureInput.sensorData.quality</code> .</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul>
  * quality
  * timestamp
    * offsetInNanos
    * timeInSeconds **required**
  * value **required**
    * booleanValue
    * doubleValue
    * integerValue
    * stringValue

### AssetPropertyVariant
* AssetPropertyVariant `object`: <p>A structure that contains an asset property value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html">Variant</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <important> <p>You must specify one of the following value types, depending on the <code>dataType</code> of the specified asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html">AssetProperty</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> </important> <p>For parameters that are string data type, you can specify the following options:</p> <ul> <li> <p>Use a string. For example, the <code>doubleValue</code> value can be <code>'47.9'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>doubleValue</code> value can be <code>$input.TemperatureInput.sensorData.temperature</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul>
  * booleanValue
  * doubleValue
  * integerValue
  * stringValue

### Attribute
* Attribute `object`: The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such message contains a JSON payload. Those attributes (and their paired values) specified here are available for use in the <code>condition</code> expressions used by detectors. 
  * jsonPath **required**

### AttributeJsonPath
* AttributeJsonPath `string`

### Attributes
* Attributes `array`
  * items [Attribute](#attribute)

### ClearTimerAction
* ClearTimerAction `object`: Information needed to clear the timer.
  * timerName **required**

### Condition
* Condition `string`

### ContentExpression
* ContentExpression `string`

### CreateDetectorModelRequest
* CreateDetectorModelRequest `object`
  * tags
    * items [Tag](#tag)
  * detectorModelDefinition **required**
    * initialStateName **required**
    * states **required**
      * items [State](#state)
  * detectorModelDescription
  * detectorModelName **required**
  * evaluationMethod
  * key
  * roleArn **required**

### CreateDetectorModelResponse
* CreateDetectorModelResponse `object`
  * detectorModelConfiguration
    * creationTime
    * detectorModelArn
    * detectorModelDescription
    * detectorModelName
    * detectorModelVersion
    * evaluationMethod
    * key
    * lastUpdateTime
    * roleArn
    * status

### CreateInputRequest
* CreateInputRequest `object`
  * tags
    * items [Tag](#tag)
  * inputDefinition **required**
    * attributes **required**
      * items [Attribute](#attribute)
  * inputDescription
  * inputName **required**

### CreateInputResponse
* CreateInputResponse `object`
  * inputConfiguration
    * creationTime **required**
    * inputArn **required**
    * inputDescription
    * inputName **required**
    * lastUpdateTime **required**
    * status **required**

### DeleteDetectorModelRequest
* DeleteDetectorModelRequest `object`

### DeleteDetectorModelResponse
* DeleteDetectorModelResponse `object`

### DeleteInputRequest
* DeleteInputRequest `object`

### DeleteInputResponse
* DeleteInputResponse `object`

### DeliveryStreamName
* DeliveryStreamName `string`

### DescribeDetectorModelRequest
* DescribeDetectorModelRequest `object`

### DescribeDetectorModelResponse
* DescribeDetectorModelResponse `object`
  * detectorModel
    * detectorModelConfiguration
      * creationTime
      * detectorModelArn
      * detectorModelDescription
      * detectorModelName
      * detectorModelVersion
      * evaluationMethod
      * key
      * lastUpdateTime
      * roleArn
      * status
    * detectorModelDefinition
      * initialStateName **required**
      * states **required**
        * items [State](#state)

### DescribeInputRequest
* DescribeInputRequest `object`

### DescribeInputResponse
* DescribeInputResponse `object`
  * input
    * inputConfiguration
      * creationTime **required**
      * inputArn **required**
      * inputDescription
      * inputName **required**
      * lastUpdateTime **required**
      * status **required**
    * inputDefinition
      * attributes **required**
        * items [Attribute](#attribute)

### DescribeLoggingOptionsRequest
* DescribeLoggingOptionsRequest `object`

### DescribeLoggingOptionsResponse
* DescribeLoggingOptionsResponse `object`
  * loggingOptions
    * detectorDebugOptions
      * items [DetectorDebugOption](#detectordebugoption)
    * enabled **required**
    * level **required**
    * roleArn **required**

### DetectorDebugOption
* DetectorDebugOption `object`: The detector model and the specific detectors (instances) for which the logging level is given.
  * detectorModelName **required**
  * keyValue

### DetectorDebugOptions
* DetectorDebugOptions `array`
  * items [DetectorDebugOption](#detectordebugoption)

### DetectorModel
* DetectorModel `object`: Information about the detector model.
  * detectorModelConfiguration
    * creationTime
    * detectorModelArn
    * detectorModelDescription
    * detectorModelName
    * detectorModelVersion
    * evaluationMethod
    * key
    * lastUpdateTime
    * roleArn
    * status
  * detectorModelDefinition
    * initialStateName **required**
    * states **required**
      * items [State](#state)

### DetectorModelArn
* DetectorModelArn `string`

### DetectorModelConfiguration
* DetectorModelConfiguration `object`: Information about how the detector model is configured.
  * creationTime
  * detectorModelArn
  * detectorModelDescription
  * detectorModelName
  * detectorModelVersion
  * evaluationMethod
  * key
  * lastUpdateTime
  * roleArn
  * status

### DetectorModelDefinition
* DetectorModelDefinition `object`: Information that defines how a detector operates.
  * initialStateName **required**
  * states **required**
    * items [State](#state)

### DetectorModelDescription
* DetectorModelDescription `string`

### DetectorModelName
* DetectorModelName `string`

### DetectorModelSummaries
* DetectorModelSummaries `array`
  * items [DetectorModelSummary](#detectormodelsummary)

### DetectorModelSummary
* DetectorModelSummary `object`: Information about the detector model.
  * creationTime
  * detectorModelDescription
  * detectorModelName

### DetectorModelVersion
* DetectorModelVersion `string`

### DetectorModelVersionStatus
* DetectorModelVersionStatus `string` (values: ACTIVE, ACTIVATING, INACTIVE, DEPRECATED, DRAFT, PAUSED, FAILED)

### DetectorModelVersionSummaries
* DetectorModelVersionSummaries `array`
  * items [DetectorModelVersionSummary](#detectormodelversionsummary)

### DetectorModelVersionSummary
* DetectorModelVersionSummary `object`: Information about the detector model version.
  * creationTime
  * detectorModelArn
  * detectorModelName
  * detectorModelVersion
  * evaluationMethod
  * lastUpdateTime
  * roleArn
  * status

### DynamoDBAction
* DynamoDBAction `object`: <p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.</p> <p>The <code>tableName</code> and <code>hashKeyField</code> values must match the table name and the partition key of the DynamoDB table. </p> <note> <p>If the DynamoDB table also has a sort key, you must specify <code>rangeKeyField</code>. The <code>rangeKeyField</code> value must match the sort key.</p> </note> <p/> <p>The <code>hashKeyValue</code> and <code>rangeKeyValue</code> use substitution templates. These templates provide data at runtime. The syntax is <code>${sql-expression}</code>.</p> <p>You can use expressions for parameters that are string data type. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <note> <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The <code>payloadField</code> is <code>&lt;payload-field&gt;_raw</code>.</p> </note>
  * hashKeyField **required**
  * hashKeyType
  * hashKeyValue **required**
  * operation
  * payload [Payload](#payload)
  * payloadField
  * rangeKeyField
  * rangeKeyType
  * rangeKeyValue
  * tableName **required**

### DynamoDBv2Action
* DynamoDBv2Action `object`: <p>Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.</p> <important> <p>The <code>type</code> value for <code>Payload</code> must be <code>JSON</code>.</p> </important> <p>You can use expressions for parameters that are strings. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p>
  * payload [Payload](#payload)
  * tableName **required**

### DynamoKeyField
* DynamoKeyField `string`

### DynamoKeyType
* DynamoKeyType `string`

### DynamoKeyValue
* DynamoKeyValue `string`

### DynamoOperation
* DynamoOperation `string`

### DynamoTableName
* DynamoTableName `string`

### EvaluationMethod
* EvaluationMethod `string` (values: BATCH, SERIAL)

### Event
* Event `object`: Specifies the <code>actions</code> to be performed when the <code>condition</code> evaluates to TRUE.
  * actions
    * items [Action](#action)
  * condition
  * eventName **required**

### EventName
* EventName `string`

### Events
* Events `array`
  * items [Event](#event)

### FirehoseAction
* FirehoseAction `object`: Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
  * deliveryStreamName **required**
  * payload
    * contentExpression **required**
    * type **required**
  * separator

### FirehoseSeparator
* FirehoseSeparator `string`

### Input
* Input `object`: Information about the input.
  * inputConfiguration
    * creationTime **required**
    * inputArn **required**
    * inputDescription
    * inputName **required**
    * lastUpdateTime **required**
    * status **required**
  * inputDefinition
    * attributes **required**
      * items [Attribute](#attribute)

### InputArn
* InputArn `string`

### InputConfiguration
* InputConfiguration `object`: Information about the configuration of an input.
  * creationTime **required**
  * inputArn **required**
  * inputDescription
  * inputName **required**
  * lastUpdateTime **required**
  * status **required**

### InputDefinition
* InputDefinition `object`: The definition of the input.
  * attributes **required**
    * items [Attribute](#attribute)

### InputDescription
* InputDescription `string`

### InputName
* InputName `string`

### InputStatus
* InputStatus `string` (values: CREATING, UPDATING, ACTIVE, DELETING)

### InputSummaries
* InputSummaries `array`
  * items [InputSummary](#inputsummary)

### InputSummary
* InputSummary `object`: Information about the input.
  * creationTime
  * inputArn
  * inputDescription
  * inputName
  * lastUpdateTime
  * status

### InternalFailureException


### InvalidRequestException


### IotEventsAction
* IotEventsAction `object`: Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
  * inputName **required**
  * payload
    * contentExpression **required**
    * type **required**

### IotSiteWiseAction
* IotSiteWiseAction `object`: <p>Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.</p> <important> <p>You must specify either <code>propertyAlias</code> or both <code>assetId</code> and <code>propertyId</code> to identify the target asset property in AWS IoT SiteWise.</p> </important> <p>For parameters that are string data type, you can specify the following options: </p> <ul> <li> <p>Use a string. For example, the <code>propertyAlias</code> value can be <code>'/company/windfarm/3/turbine/7/temperature'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>propertyAlias</code> value can be <code>'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/${$input.TemperatureInput.sensorData.turbineID}/temperature'</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul>
  * assetId
  * entryId
  * propertyAlias
  * propertyId
  * propertyValue **required**
    * quality
    * timestamp
      * offsetInNanos
      * timeInSeconds **required**
    * value **required**
      * booleanValue
      * doubleValue
      * integerValue
      * stringValue

### IotTopicPublishAction
* IotTopicPublishAction `object`: Information required to publish the MQTT message through the AWS IoT message broker.
  * mqttTopic **required**
  * payload
    * contentExpression **required**
    * type **required**

### KeyValue
* KeyValue `string`

### LambdaAction
* LambdaAction `object`: Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
  * functionArn **required**
  * payload
    * contentExpression **required**
    * type **required**

### LimitExceededException


### ListDetectorModelVersionsRequest
* ListDetectorModelVersionsRequest `object`

### ListDetectorModelVersionsResponse
* ListDetectorModelVersionsResponse `object`
  * detectorModelVersionSummaries
    * items [DetectorModelVersionSummary](#detectormodelversionsummary)
  * nextToken

### ListDetectorModelsRequest
* ListDetectorModelsRequest `object`

### ListDetectorModelsResponse
* ListDetectorModelsResponse `object`
  * detectorModelSummaries
    * items [DetectorModelSummary](#detectormodelsummary)
  * nextToken

### ListInputsRequest
* ListInputsRequest `object`

### ListInputsResponse
* ListInputsResponse `object`
  * inputSummaries
    * items [InputSummary](#inputsummary)
  * nextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags
    * items [Tag](#tag)

### LoggingEnabled
* LoggingEnabled `boolean`

### LoggingLevel
* LoggingLevel `string` (values: ERROR, INFO, DEBUG)

### LoggingOptions
* LoggingOptions `object`: The values of the AWS IoT Events logging options.
  * detectorDebugOptions
    * items [DetectorDebugOption](#detectordebugoption)
  * enabled **required**
  * level **required**
  * roleArn **required**

### MQTTTopic
* MQTTTopic `string`

### MaxResults
* MaxResults `integer`

### NextToken
* NextToken `string`

### OnEnterLifecycle
* OnEnterLifecycle `object`: When entering this state, perform these <code>actions</code> if the <code>condition</code> is TRUE.
  * events
    * items [Event](#event)

### OnExitLifecycle
* OnExitLifecycle `object`: When exiting this state, perform these <code>actions</code> if the specified <code>condition</code> is <code>TRUE</code>.
  * events
    * items [Event](#event)

### OnInputLifecycle
* OnInputLifecycle `object`: Specifies the actions performed when the <code>condition</code> evaluates to TRUE.
  * events
    * items [Event](#event)
  * transitionEvents
    * items [TransitionEvent](#transitionevent)

### Payload
* Payload `object`: <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p>
  * contentExpression **required**
  * type **required**

### PayloadType
* PayloadType `string` (values: STRING, JSON)

### PutLoggingOptionsRequest
* PutLoggingOptionsRequest `object`
  * loggingOptions **required**
    * detectorDebugOptions
      * items [DetectorDebugOption](#detectordebugoption)
    * enabled **required**
    * level **required**
    * roleArn **required**

### QueueUrl
* QueueUrl `string`

### ResetTimerAction
* ResetTimerAction `object`: Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer.
  * timerName **required**

### ResourceAlreadyExistsException


### ResourceInUseException


### ResourceNotFoundException


### SNSTopicPublishAction
* SNSTopicPublishAction `object`: Information required to publish the Amazon SNS message.
  * payload
    * contentExpression **required**
    * type **required**
  * targetArn **required**

### Seconds
* Seconds `integer`

### ServiceUnavailableException


### SetTimerAction
* SetTimerAction `object`: Information needed to set the timer.
  * durationExpression
  * seconds
  * timerName **required**

### SetVariableAction
* SetVariableAction `object`: Information about the variable and its new value.
  * value **required**
  * variableName **required**

### SqsAction
* SqsAction `object`: Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
  * payload
    * contentExpression **required**
    * type **required**
  * queueUrl **required**
  * useBase64

### State
* State `object`: Information that defines a state of a detector.
  * onEnter
    * events
      * items [Event](#event)
  * onExit
    * events
      * items [Event](#event)
  * onInput
    * events
      * items [Event](#event)
    * transitionEvents
      * items [TransitionEvent](#transitionevent)
  * stateName **required**

### StateName
* StateName `string`

### States
* States `array`
  * items [State](#state)

### Tag
* Tag `object`: Metadata that can be used to manage the resource.
  * key **required**
  * value **required**

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### ThrottlingException


### TimerName
* TimerName `string`

### Timestamp
* Timestamp `string`

### TransitionEvent
* TransitionEvent `object`: Specifies the actions performed and the next state entered when a <code>condition</code> evaluates to TRUE.
  * actions
    * items [Action](#action)
  * condition **required**
  * eventName **required**
  * nextState **required**

### TransitionEvents
* TransitionEvents `array`
  * items [TransitionEvent](#transitionevent)

### UnsupportedOperationException


### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateDetectorModelRequest
* UpdateDetectorModelRequest `object`
  * detectorModelDefinition **required**
    * initialStateName **required**
    * states **required**
      * items [State](#state)
  * detectorModelDescription
  * evaluationMethod
  * roleArn **required**

### UpdateDetectorModelResponse
* UpdateDetectorModelResponse `object`
  * detectorModelConfiguration
    * creationTime
    * detectorModelArn
    * detectorModelDescription
    * detectorModelName
    * detectorModelVersion
    * evaluationMethod
    * key
    * lastUpdateTime
    * roleArn
    * status

### UpdateInputRequest
* UpdateInputRequest `object`
  * inputDefinition **required**
    * attributes **required**
      * items [Attribute](#attribute)
  * inputDescription

### UpdateInputResponse
* UpdateInputResponse `object`
  * inputConfiguration
    * creationTime **required**
    * inputArn **required**
    * inputDescription
    * inputName **required**
    * lastUpdateTime **required**
    * status **required**

### UseBase64
* UseBase64 `boolean`

### VariableName
* VariableName `string`

### VariableValue
* VariableValue `string`


