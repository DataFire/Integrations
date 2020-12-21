# @datafire/amazonaws_data_iot

Client library for AWS IoT Data Plane

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_data_iot
```
```js
let amazonaws_data_iot = require('@datafire/amazonaws_data_iot').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS IoT</fullname> <p>AWS IoT-Data enables secure, bi-directional communication between Internet-connected things (such as sensors, actuators, embedded devices, or smart appliances) and the AWS cloud. It implements a broker for applications and things to publish messages over HTTP (Publish) and retrieve, update, and delete shadows. A shadow is a persistent representation of your things and their state in the AWS cloud.</p> <p>Find the endpoint address for actions in the AWS IoT data plane by running this CLI command:</p> <p> <code>aws iot describe-endpoint --endpoint-type iot:Data-ATS</code> </p> <p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">AWS Signature Version 4</a> to sign requests is: <i>iotdevicegateway</i>.</p>

## Actions

### ListNamedShadowsForThing



```js
amazonaws_data_iot.ListNamedShadowsForThing({
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`
  * nextToken `string`
  * pageSize `integer`

#### Output
* output [ListNamedShadowsForThingResponse](#listnamedshadowsforthingresponse)

### DeleteThingShadow



```js
amazonaws_data_iot.DeleteThingShadow({
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`
  * name `string`

#### Output
* output [DeleteThingShadowResponse](#deletethingshadowresponse)

### GetThingShadow



```js
amazonaws_data_iot.GetThingShadow({
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`
  * name `string`

#### Output
* output [GetThingShadowResponse](#getthingshadowresponse)

### UpdateThingShadow



```js
amazonaws_data_iot.UpdateThingShadow({
  "thingName": "",
  "payload": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`
  * name `string`
  * payload **required** `string`: The state information, in JSON format.

#### Output
* output [UpdateThingShadowResponse](#updatethingshadowresponse)

### Publish



```js
amazonaws_data_iot.Publish({
  "topic": ""
}, context)
```

#### Input
* input `object`
  * topic **required** `string`
  * qos `integer`
  * payload `string`: The state information, in JSON format.

#### Output
*Output schema unknown*



## Definitions

### ConflictException


### DeleteThingShadowRequest
* DeleteThingShadowRequest `object`: The input for the DeleteThingShadow operation.

### DeleteThingShadowResponse
* DeleteThingShadowResponse `object`: The output from the DeleteThingShadow operation.
  * payload **required**

### GetThingShadowRequest
* GetThingShadowRequest `object`: The input for the GetThingShadow operation.

### GetThingShadowResponse
* GetThingShadowResponse `object`: The output from the GetThingShadow operation.
  * payload

### InternalFailureException


### InvalidRequestException


### JsonDocument
* JsonDocument `string`

### ListNamedShadowsForThingRequest
* ListNamedShadowsForThingRequest `object`

### ListNamedShadowsForThingResponse
* ListNamedShadowsForThingResponse `object`
  * nextToken
  * results
    * items [ShadowName](#shadowname)
  * timestamp

### MethodNotAllowedException


### NamedShadowList
* NamedShadowList `array`
  * items [ShadowName](#shadowname)

### NextToken
* NextToken `string`

### PageSize
* PageSize `integer`

### Payload
* Payload `string`

### PublishRequest
* PublishRequest `object`: The input for the Publish operation.
  * payload

### Qos
* Qos `integer`

### RequestEntityTooLargeException


### ResourceNotFoundException


### ServiceUnavailableException


### ShadowName
* ShadowName `string`

### ThingName
* ThingName `string`

### ThrottlingException


### Timestamp
* Timestamp `integer`

### Topic
* Topic `string`

### UnauthorizedException


### UnsupportedDocumentEncodingException


### UpdateThingShadowRequest
* UpdateThingShadowRequest `object`: The input for the UpdateThingShadow operation.
  * payload **required**

### UpdateThingShadowResponse
* UpdateThingShadowResponse `object`: The output from the UpdateThingShadow operation.
  * payload


