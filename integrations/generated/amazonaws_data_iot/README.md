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

amazonaws_data_iot.DeleteThingShadow({
  "thingName": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS IoT</fullname> <p>AWS IoT-Data enables secure, bi-directional communication between Internet-connected things (such as sensors, actuators, embedded devices, or smart appliances) and the AWS cloud. It implements a broker for applications and things to publish messages over HTTP (Publish) and retrieve, update, and delete thing shadows. A thing shadow is a persistent representation of your things and their state in the AWS cloud.</p>

## Actions

### DeleteThingShadow



```js
amazonaws_data_iot.DeleteThingShadow({
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`

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
  * payload **required** [JsonDocument](#jsondocument)

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
  * payload [Payload](#payload)

#### Output
*Output schema unknown*



## Definitions

### ConflictException
* ConflictException `object`: The specified version does not match the version of the document.
  * message [ErrorMessage](#errormessage)

### DeleteThingShadowRequest
* DeleteThingShadowRequest `object`: The input for the DeleteThingShadow operation.

### DeleteThingShadowResponse
* DeleteThingShadowResponse `object`: The output from the DeleteThingShadow operation.
  * payload **required** [JsonDocument](#jsondocument)

### ErrorMessage
* ErrorMessage `string`

### GetThingShadowRequest
* GetThingShadowRequest `object`: The input for the GetThingShadow operation.

### GetThingShadowResponse
* GetThingShadowResponse `object`: The output from the GetThingShadow operation.
  * payload [JsonDocument](#jsondocument)

### InternalFailureException
* InternalFailureException `object`: An unexpected error has occurred.
  * message [errorMessage](#errormessage)

### InvalidRequestException
* InvalidRequestException `object`: The request is not valid.
  * message [errorMessage](#errormessage)

### JsonDocument
* JsonDocument `string`

### MethodNotAllowedException
* MethodNotAllowedException `object`: The specified combination of HTTP verb and URI is not supported.
  * message [ErrorMessage](#errormessage)

### Payload
* Payload `string`

### PublishRequest
* PublishRequest `object`: The input for the Publish operation.
  * payload [Payload](#payload)

### Qos
* Qos `integer`

### RequestEntityTooLargeException
* RequestEntityTooLargeException `object`: The payload exceeds the maximum size allowed.
  * message [ErrorMessage](#errormessage)

### ResourceNotFoundException
* ResourceNotFoundException `object`: The specified resource does not exist.
  * message [errorMessage](#errormessage)

### ServiceUnavailableException
* ServiceUnavailableException `object`: The service is temporarily unavailable.
  * message [errorMessage](#errormessage)

### ThingName
* ThingName `string`

### ThrottlingException
* ThrottlingException `object`: The rate exceeds the limit.
  * message [errorMessage](#errormessage)

### Topic
* Topic `string`

### UnauthorizedException
* UnauthorizedException `object`: You are not authorized to perform this operation.
  * message [errorMessage](#errormessage)

### UnsupportedDocumentEncodingException
* UnsupportedDocumentEncodingException `object`: The document encoding is not supported.
  * message [errorMessage](#errormessage)

### UpdateThingShadowRequest
* UpdateThingShadowRequest `object`: The input for the UpdateThingShadow operation.
  * payload **required** [JsonDocument](#jsondocument)

### UpdateThingShadowResponse
* UpdateThingShadowResponse `object`: The output from the UpdateThingShadow operation.
  * payload [JsonDocument](#jsondocument)

### errorMessage
* errorMessage `string`


