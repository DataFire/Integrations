# @datafire/openstf

Client library for Smartphone Test Farm

## Installation and Usage
```bash
npm install --save @datafire/openstf
```
```js
let openstf = require('@datafire/openstf').create({
  accessTokenAuth: ""
});

openstf.getUserDevices({}).then(data => {
  console.log(data);
});
```

## Description

Control and manages real Smartphone devices from browser and restful apis

## Actions

### getDevices
The devices endpoint return list of all the STF devices including Disconnected and Offline


```js
openstf.getDevices({}, context)
```

#### Input
* input `object`
  * fields `string`: Fields query parameter takes a comma seperated list of fields. Only listed field will be return in response

#### Output
* output [DeviceListResponse](#devicelistresponse)

### getDeviceBySerial
The device enpoint return information about a single device


```js
openstf.getDeviceBySerial({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`: Device Serial
  * fields `string`: Fields query parameter takes a comma seperated list of fields. Only listed field will be return in response

#### Output
* output [DeviceResponse](#deviceresponse)

### getUser
The User Profile endpoint returns information about current authorized user


```js
openstf.getUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UserResponse](#userresponse)

### getUserAccessTokens
The Access Tokens endpoints returns titles of all the valid access tokens


```js
openstf.getUserAccessTokens(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AccessTokensResponse](#accesstokensresponse)

### getUserDevices
The User Devices endpoint returns device list owner by current authorized user


```js
openstf.getUserDevices({}, context)
```

#### Input
* input `object`
  * fields `string`: Fields query parameter takes a comma seperated list of fields. Only listed field will be return in response

#### Output
* output [DeviceListResponse](#devicelistresponse)

### addUserDevice
The User Devices endpoint will request stf server for a new device.


```js
openstf.addUserDevice({
  "device": null
}, context)
```

#### Input
* input `object`
  * device **required** [AddUserDevicePayload](#adduserdevicepayload)

#### Output
*Output schema unknown*

### deleteUserDeviceBySerial
The User Devices endpoint will request for device release from stf server. It will return request accepted if device is being used by current user


```js
openstf.deleteUserDeviceBySerial({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`: Device Serial

#### Output
*Output schema unknown*

### getUserDeviceBySerial
The devices enpoint return information about device owned by user


```js
openstf.getUserDeviceBySerial({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`: Device Serial
  * fields `string`: Fields query parameter takes a comma seperated list of fields. Only listed field will be return in response

#### Output
* output [DeviceResponse](#deviceresponse)

### remoteDisconnectUserDeviceBySerial
The device connect endpoint will request stf server to disconnect remotely


```js
openstf.remoteDisconnectUserDeviceBySerial({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`: Device Serial

#### Output
*Output schema unknown*

### remoteConnectUserDeviceBySerial
The device connect endpoint will request stf server to connect remotely


```js
openstf.remoteConnectUserDeviceBySerial({
  "serial": ""
}, context)
```

#### Input
* input `object`
  * serial **required** `string`: Device Serial

#### Output
* output [RemoteConnectUserDeviceResponse](#remoteconnectuserdeviceresponse)



## Definitions

### AccessTokensResponse
* AccessTokensResponse `object`
  * tokens **required** `array`
    * items `string`

### AddUserDevicePayload
* AddUserDevicePayload `object`: payload object for adding device to user
  * serial **required** `string`: Device Serial
  * timeout `integer`: Device timeout in ms. If device is kept idle for this period, it will be automatically disconnected. Default is provider group timeout

### DeviceListResponse
* DeviceListResponse `object`
  * devices **required** `array`
    * items `object`

### DeviceResponse
* DeviceResponse `object`
  * device **required** `object`

### ErrorResponse
* ErrorResponse `object`
  * message **required** `string`

### RemoteConnectUserDeviceResponse
* RemoteConnectUserDeviceResponse `object`
  * remoteConnectUrl **required** `string`
  * serial **required** `string`

### UserResponse
* UserResponse `object`
  * user **required** `object`


