# @datafire/amazonaws_iot1click_devices

Client library for AWS IoT 1-Click Devices Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_iot1click_devices
```
```js
let amazonaws_iot1click_devices = require('@datafire/amazonaws_iot1click_devices').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Describes all of the AWS IoT 1-Click device-related API operations for the service.
 Also provides sample requests, responses, and errors for the supported web services
 protocols.

## Actions

### ClaimDevicesByClaimCode



```js
amazonaws_iot1click_devices.ClaimDevicesByClaimCode({
  "claimCode": ""
}, context)
```

#### Input
* input `object`
  * claimCode **required** `string`

#### Output
* output [ClaimDevicesByClaimCodeResponse](#claimdevicesbyclaimcoderesponse)

### ListDevices



```js
amazonaws_iot1click_devices.ListDevices({}, context)
```

#### Input
* input `object`
  * deviceType `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListDevicesResponse](#listdevicesresponse)

### DescribeDevice



```js
amazonaws_iot1click_devices.DescribeDevice({
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * deviceId **required** `string`

#### Output
* output [DescribeDeviceResponse](#describedeviceresponse)

### ListDeviceEvents



```js
amazonaws_iot1click_devices.ListDeviceEvents({
  "deviceId": "",
  "fromTimeStamp": "",
  "toTimeStamp": ""
}, context)
```

#### Input
* input `object`
  * deviceId **required** `string`
  * fromTimeStamp **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * toTimeStamp **required** `string`

#### Output
* output [ListDeviceEventsResponse](#listdeviceeventsresponse)

### FinalizeDeviceClaim



```js
amazonaws_iot1click_devices.FinalizeDeviceClaim({
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * deviceId **required** `string`
  * tags `object`: <p>A collection of key/value pairs defining the resource tags. For example, {

#### Output
* output [FinalizeDeviceClaimResponse](#finalizedeviceclaimresponse)

### InitiateDeviceClaim



```js
amazonaws_iot1click_devices.InitiateDeviceClaim({
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * deviceId **required** `string`

#### Output
* output [InitiateDeviceClaimResponse](#initiatedeviceclaimresponse)

### GetDeviceMethods



```js
amazonaws_iot1click_devices.GetDeviceMethods({
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * deviceId **required** `string`

#### Output
* output [GetDeviceMethodsResponse](#getdevicemethodsresponse)

### InvokeDeviceMethod



```js
amazonaws_iot1click_devices.InvokeDeviceMethod({
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * deviceId **required** `string`
  * deviceMethod `object`: The device method to invoke.
    * DeviceType
    * MethodName
  * deviceMethodParameters `string`: A JSON encoded string containing the device method request parameters.

#### Output
* output [InvokeDeviceMethodResponse](#invokedevicemethodresponse)

### UpdateDeviceState



```js
amazonaws_iot1click_devices.UpdateDeviceState({
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * deviceId **required** `string`
  * enabled `boolean`: If true, the device is enabled. If false, the device is

#### Output
* output [UpdateDeviceStateResponse](#updatedevicestateresponse)

### UnclaimDevice



```js
amazonaws_iot1click_devices.UnclaimDevice({
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * deviceId **required** `string`

#### Output
* output [UnclaimDeviceResponse](#unclaimdeviceresponse)

### ListTagsForResource



```js
amazonaws_iot1click_devices.ListTagsForResource({
  "resource-arn": ""
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_iot1click_devices.TagResource({
  "resource-arn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`
  * tags **required** `object`: <p>A collection of key/value pairs defining the resource tags. For example, {

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_iot1click_devices.UntagResource({
  "resource-arn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*



## Definitions

### Attributes
* Attributes `object`

### ClaimDevicesByClaimCodeRequest
* ClaimDevicesByClaimCodeRequest `object`

### ClaimDevicesByClaimCodeResponse
* ClaimDevicesByClaimCodeResponse `object`
  * ClaimCode
  * Total

### DescribeDeviceRequest
* DescribeDeviceRequest `object`

### DescribeDeviceResponse
* DescribeDeviceResponse `object`
  * DeviceDescription
    * Arn
    * Attributes
    * DeviceId
    * Enabled
    * RemainingLife
    * Tags
    * Type

### Device
* Device `object`
  * Attributes
  * DeviceId
  * Type

### DeviceAttributes
* DeviceAttributes `object`: 

### DeviceDescription
* DeviceDescription `object`
  * Arn
  * Attributes
  * DeviceId
  * Enabled
  * RemainingLife
  * Tags
  * Type

### DeviceEvent
* DeviceEvent `object`
  * Device
    * Attributes
    * DeviceId
    * Type
  * StdEvent

### DeviceMethod
* DeviceMethod `object`
  * DeviceType
  * MethodName

### FinalizeDeviceClaimRequest
* FinalizeDeviceClaimRequest `object`
  * Tags

### FinalizeDeviceClaimResponse
* FinalizeDeviceClaimResponse `object`
  * State

### ForbiddenException


### GetDeviceMethodsRequest
* GetDeviceMethodsRequest `object`

### GetDeviceMethodsResponse
* GetDeviceMethodsResponse `object`
  * DeviceMethods
    * items [DeviceMethod](#devicemethod)

### InitiateDeviceClaimRequest
* InitiateDeviceClaimRequest `object`

### InitiateDeviceClaimResponse
* InitiateDeviceClaimResponse `object`
  * State

### InternalFailureException


### InvalidRequestException


### InvokeDeviceMethodRequest
* InvokeDeviceMethodRequest `object`
  * DeviceMethod
    * DeviceType
    * MethodName
  * DeviceMethodParameters

### InvokeDeviceMethodResponse
* InvokeDeviceMethodResponse `object`
  * DeviceMethodResponse

### ListDeviceEventsRequest
* ListDeviceEventsRequest `object`

### ListDeviceEventsResponse
* ListDeviceEventsResponse `object`
  * Events
    * items [DeviceEvent](#deviceevent)
  * NextToken

### ListDevicesRequest
* ListDevicesRequest `object`

### ListDevicesResponse
* ListDevicesResponse `object`
  * Devices
    * items [DeviceDescription](#devicedescription)
  * NextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### MaxResults
* MaxResults `integer`

### PreconditionFailedException


### RangeNotSatisfiableException


### ResourceConflictException


### ResourceNotFoundException


### TagResourceRequest
* TagResourceRequest `object`
  * Tags **required**

### UnclaimDeviceRequest
* UnclaimDeviceRequest `object`

### UnclaimDeviceResponse
* UnclaimDeviceResponse `object`
  * State

### UntagResourceRequest
* UntagResourceRequest `object`

### UpdateDeviceStateRequest
* UpdateDeviceStateRequest `object`
  * Enabled

### UpdateDeviceStateResponse
* UpdateDeviceStateResponse `object`

### __boolean
* __boolean `boolean`

### __doubleMin0Max100
* __doubleMin0Max100 `number`

### __integer
* __integer `integer`

### __listOfDeviceDescription
* __listOfDeviceDescription `array`
  * items [DeviceDescription](#devicedescription)

### __listOfDeviceEvent
* __listOfDeviceEvent `array`
  * items [DeviceEvent](#deviceevent)

### __listOfDeviceMethod
* __listOfDeviceMethod `array`
  * items [DeviceMethod](#devicemethod)

### __listOf__string
* __listOf__string `array`
  * items [__string](#__string)

### __mapOf__string
* __mapOf__string `object`

### __string
* __string `string`

### __stringMin12Max40
* __stringMin12Max40 `string`

### __timestampIso8601
* __timestampIso8601 `string`


