# @datafire/amazonaws_runtime_sagemaker

Client library for Amazon SageMaker Runtime

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_runtime_sagemaker
```
```js
let amazonaws_runtime_sagemaker = require('@datafire/amazonaws_runtime_sagemaker').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_runtime_sagemaker.InvokeEndpoint({}).then(data => {
  console.log(data);
})
```

## Description

 Amazon SageMaker runtime API. 

## Actions

### InvokeEndpoint



```js
amazonaws_runtime_sagemaker.InvokeEndpoint({
  "EndpointName": "",
  "Body": ""
}, context)
```

#### Input
* input `object`
  * EndpointName **required** `string`
  * Body **required** [BodyBlob](#bodyblob)

#### Output
* output [InvokeEndpointOutput](#invokeendpointoutput)



## Definitions

### BodyBlob
* BodyBlob `string`

### EndpointName
* EndpointName `string`

### Header
* Header `string`

### InternalFailure
* InternalFailure `object`:  Internal failure occurred. 
  * Message [Message](#message)

### InvokeEndpointInput
* InvokeEndpointInput `object`
  * Body **required** [BodyBlob](#bodyblob)

### InvokeEndpointOutput
* InvokeEndpointOutput `object`
  * Body **required** [BodyBlob](#bodyblob)

### LogStreamArn
* LogStreamArn `string`

### Message
* Message `string`

### ModelError
* ModelError `object`:  Model (owned by the customer in the container) returned an error 500. 
  * LogStreamArn [LogStreamArn](#logstreamarn)
  * Message [Message](#message)
  * OriginalMessage [Message](#message)
  * OriginalStatusCode [StatusCode](#statuscode)

### ServiceUnavailable
* ServiceUnavailable `object`:  Service is unavailable. Try your call again. 
  * Message [Message](#message)

### StatusCode
* StatusCode `integer`

### ValidationError
* ValidationError `object`:  Inspect your request and try again. 
  * Message [Message](#message)


