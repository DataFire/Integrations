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

amazonaws_iot1click_devices.ClaimDevicesByClaimCode({
  "claimCode": ""
}).then(data => {
  console.log(data);
});
```

## Description

Stub description

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
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * deviceId **required** `string`

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
  * DeviceMethod [DeviceMethod](#devicemethod)
  * DeviceMethodParameters [__string](#__string)

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
  * Enabled [__boolean](#__boolean)

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



## Definitions

### Attributes
* Attributes `object`

### ClaimDevicesByClaimCodeRequest
* ClaimDevicesByClaimCodeRequest `object`

### ClaimDevicesByClaimCodeResponse
* ClaimDevicesByClaimCodeResponse `object`
  * ClaimCode [__stringMin12Max40](#__stringmin12max40)
  * Total [__integer](#__integer)

### DescribeDeviceRequest
* DescribeDeviceRequest `object`

### DescribeDeviceResponse
* DescribeDeviceResponse `object`
  * DeviceDescription [DeviceDescription](#devicedescription)

### Device
* Device `object`
  * Attributes [Attributes](#attributes)
  * DeviceId [__string](#__string)
  * Type [__string](#__string)

### DeviceAttributes
* DeviceAttributes `array`: 
  * items `object`
    * key [__string](#__string)
    * value [__string](#__string)

### DeviceClaimResponse
* DeviceClaimResponse `object`
  * State [__string](#__string)

### DeviceDescription
* DeviceDescription `object`
  * Attributes [DeviceAttributes](#deviceattributes)
  * DeviceId [__string](#__string)
  * Enabled [__boolean](#__boolean)
  * RemainingLife [__doubleMin0Max100](#__doublemin0max100)
  * Type [__string](#__string)

### DeviceEvent
* DeviceEvent `object`
  * Device [Device](#device)
  * StdEvent [__string](#__string)

### DeviceEventsResponse
* DeviceEventsResponse `object`
  * Events [__listOfDeviceEvent](#__listofdeviceevent)
  * NextToken [__string](#__string)

### DeviceMethod
* DeviceMethod `object`
  * DeviceType [__string](#__string)
  * MethodName [__string](#__string)

### Empty
* Empty `object`: On success, an empty object is returned.

### FinalizeDeviceClaimRequest
* FinalizeDeviceClaimRequest `object`

### FinalizeDeviceClaimResponse
* FinalizeDeviceClaimResponse `object`
  * State [__string](#__string)

### ForbiddenException
* ForbiddenException `object`
  * Code [__string](#__string)
  * Message [__string](#__string)

### GetDeviceMethodsRequest
* GetDeviceMethodsRequest `object`

### GetDeviceMethodsResponse
* GetDeviceMethodsResponse `object`
  * DeviceMethods [__listOfDeviceMethod](#__listofdevicemethod)

### InitiateDeviceClaimRequest
* InitiateDeviceClaimRequest `object`

### InitiateDeviceClaimResponse
* InitiateDeviceClaimResponse `object`
  * State [__string](#__string)

### InternalFailureException
* InternalFailureException `object`
  * Code [__string](#__string)
  * Message [__string](#__string)

### InvalidRequestException
* InvalidRequestException `object`
  * Code [__string](#__string)
  * Message [__string](#__string)

### InvokeDeviceMethodRequest
* InvokeDeviceMethodRequest `object`
  * DeviceMethod [DeviceMethod](#devicemethod)
  * DeviceMethodParameters [__string](#__string)

### InvokeDeviceMethodResponse
* InvokeDeviceMethodResponse `object`
  * DeviceMethodResponse [__string](#__string)

### ListDeviceEventsRequest
* ListDeviceEventsRequest `object`

### ListDeviceEventsResponse
* ListDeviceEventsResponse `object`
  * Events [__listOfDeviceEvent](#__listofdeviceevent)
  * NextToken [__string](#__string)

### ListDevicesRequest
* ListDevicesRequest `object`

### ListDevicesResponse
* ListDevicesResponse `object`
  * Devices [__listOfDeviceDescription](#__listofdevicedescription)
  * NextToken [__string](#__string)

### MaxResults
* MaxResults `integer`

### PreconditionFailedException
* PreconditionFailedException `object`
  * Code [__string](#__string)
  * Message [__string](#__string)

### RangeNotSatisfiableException
* RangeNotSatisfiableException `object`
  * Code [__string](#__string)
  * Message [__string](#__string)

### ResourceConflictException
* ResourceConflictException `object`
  * Code [__string](#__string)
  * Message [__string](#__string)

### ResourceNotFoundException
* ResourceNotFoundException `object`
  * Code [__string](#__string)
  * Message [__string](#__string)

### UnclaimDeviceRequest
* UnclaimDeviceRequest `object`

### UnclaimDeviceResponse
* UnclaimDeviceResponse `object`
  * State [__string](#__string)

### UpdateDeviceStateRequest
* UpdateDeviceStateRequest `object`
  * Enabled [__boolean](#__boolean)

### UpdateDeviceStateResponse
* UpdateDeviceStateResponse `object`

### __boolean
* __boolean `boolean`

### __double
* __double `number`

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

### __long
* __long `integer`

### __string
* __string `string`

### __stringMin12Max40
* __stringMin12Max40 `string`

### __timestampIso8601
* __timestampIso8601 `string`

### __timestampUnix
* __timestampUnix `string`


