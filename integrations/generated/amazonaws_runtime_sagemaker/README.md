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

.then(data => {
  console.log(data);
});
```

## Description

 The Amazon SageMaker runtime API. 

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
  * Content-Type `string`
  * Accept `string`
  * Body **required** `string`: <p>Provides input data, in the format specified in the <code>ContentType</code> request header. Amazon SageMaker passes all of the data in the body to the model. </p> <p>For information about the format of the request body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data Formats-Inference</a>.</p>

#### Output
* output [InvokeEndpointOutput](#invokeendpointoutput)



## Definitions

### BodyBlob
* BodyBlob `string`

### CustomAttributesHeader
* CustomAttributesHeader `string`

### EndpointName
* EndpointName `string`

### Header
* Header `string`

### InferenceId
* InferenceId `string`

### InternalFailure


### InvokeEndpointInput
* InvokeEndpointInput `object`
  * Body **required**

### InvokeEndpointOutput
* InvokeEndpointOutput `object`
  * Body **required**

### ModelError


### ServiceUnavailable


### TargetModelHeader
* TargetModelHeader `string`

### TargetVariantHeader
* TargetVariantHeader `string`

### ValidationError



