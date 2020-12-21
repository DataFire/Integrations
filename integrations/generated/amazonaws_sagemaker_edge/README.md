# @datafire/amazonaws_sagemaker_edge

Client library for Amazon Sagemaker Edge Manager

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_sagemaker_edge
```
```js
let amazonaws_sagemaker_edge = require('@datafire/amazonaws_sagemaker_edge').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

SageMaker Edge Manager dataplane service for communicating with active agents.

## Actions

### GetDeviceRegistration



```js
amazonaws_sagemaker_edge.GetDeviceRegistration({
  "DeviceName": "",
  "DeviceFleetName": ""
}, context)
```

#### Input
* input `object`
  * DeviceFleetName **required** `string`: The name of the fleet that the device belongs to.
  * DeviceName **required** `string`: The unique name of the device you want to get the registration status from.

#### Output
* output [GetDeviceRegistrationResult](#getdeviceregistrationresult)

### SendHeartbeat



```js
amazonaws_sagemaker_edge.SendHeartbeat({
  "AgentVersion": "",
  "DeviceName": "",
  "DeviceFleetName": ""
}, context)
```

#### Input
* input `object`
  * AgentMetrics `array`: For internal use. Returns a list of SageMaker Edge Manager agent operating metrics.
    * items [EdgeMetric](#edgemetric)
  * AgentVersion **required** `string`: Returns the version of the agent.
  * DeviceFleetName **required** `string`: The name of the fleet that the device belongs to.
  * DeviceName **required** `string`: The unique name of the device.
  * Models `array`: Returns a list of models deployed on the the device.
    * items [Model](#model)

#### Output
*Output schema unknown*



## Definitions

### CacheTTLSeconds
* CacheTTLSeconds `string`

### DeviceFleetName
* DeviceFleetName `string`

### DeviceName
* DeviceName `string`

### DeviceRegistration
* DeviceRegistration `string`

### Dimension
* Dimension `string`

### EdgeMetric
* EdgeMetric `object`: Information required for edge device metrics.
  * Dimension
  * MetricName
  * Timestamp
  * Value

### EdgeMetrics
* EdgeMetrics `array`
  * items [EdgeMetric](#edgemetric)

### GetDeviceRegistrationRequest
* GetDeviceRegistrationRequest `object`
  * DeviceFleetName **required**
  * DeviceName **required**

### GetDeviceRegistrationResult
* GetDeviceRegistrationResult `object`
  * CacheTTL
  * DeviceRegistration

### InternalServiceException


### Metric
* Metric `string`

### Model
* Model `object`: Information about a model deployed on an edge device that is registered with SageMaker Edge Manager.
  * LatestInference
  * LatestSampleTime
  * ModelMetrics
    * items [EdgeMetric](#edgemetric)
  * ModelName
  * ModelVersion

### ModelName
* ModelName `string`

### Models
* Models `array`
  * items [Model](#model)

### SendHeartbeatRequest
* SendHeartbeatRequest `object`
  * AgentMetrics
    * items [EdgeMetric](#edgemetric)
  * AgentVersion **required**
  * DeviceFleetName **required**
  * DeviceName **required**
  * Models
    * items [Model](#model)

### Timestamp
* Timestamp `string`

### Value
* Value `number`

### Version
* Version `string`


