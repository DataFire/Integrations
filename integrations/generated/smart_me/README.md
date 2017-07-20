# @datafire/smart_me

Client library for smart-me

## Installation and Usage
```bash
npm install --save datafire @datafire/smart_me
```

```js
let datafire = require('datafire');
let smart_me = require('@datafire/smart_me').actions;

let account = {
  username: "",
  password: "",
}
let context = new datafire.Context({
  accounts: {
    smart_me: account,
  }
})


smart_me.AccessToken_Put({}, context).then(data => {
  console.log(data);
})
```

## Description
With the smart-me REST API you get Access to all your devices in the smart-me Cloud and you can add your own devices. So it's a easy way to add the smart-me Cloud support to your Hardware or Software Product.

## Actions
### AccessToken_Put
Creates a Access Token to write on a Card (e.g. NFC)


```js
smart_me.AccessToken_Put({
  "accessTokenToPut": {}
}, context)
```

#### Parameters
* accessTokenToPut (object) **required** - Container Class for the Put action of an Access Token

### Actions_Post
Set an action for the specified device.


```js
smart_me.Actions_Post({
  "actionToPost": {}
}, context)
```

#### Parameters
* actionToPost (object) **required** - Container Class for an action to post

### Actions_Get
Gets all available Actions of a Device


```js
smart_me.Actions_Get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of the device

### api.CustomDevice.get
Gets all Devices


```js
smart_me.api.CustomDevice.get(null, context)
```


### CustomDevice_Post
Creates or updates a Custom Device or updates it's values.
            A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.
            Only use a custom device for all non meters.
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)


```js
smart_me.CustomDevice_Post({
  "newDevice": {}
}, context)
```

#### Parameters
* newDevice (object) **required** - Container Class for the Web API

### api.CustomDevice.id.get
Gets a Device by it's ID


```js
smart_me.api.CustomDevice.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of the device

### DeviceBySerial_Get
Gets a Device by it's Serial Number. The Serial is the part before the "-".


```js
smart_me.DeviceBySerial_Get({
  "serial": 0
}, context)
```

#### Parameters
* serial (integer) **required** - The Serial Number of the device

### api.Devices.get
Gets all Devices


```js
smart_me.api.Devices.get(null, context)
```


### Devices_Post
Creates or updates a Device or updates it's values. 
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)


```js
smart_me.Devices_Post({
  "newDevice": {}
}, context)
```

#### Parameters
* newDevice (object) **required** - Container Class for the Web API

### api.Devices.id.get
Gets a Device by it's ID


```js
smart_me.api.Devices.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of the device

### Devices_Put
Updates the On/Off Switch on a device
            For new implementations please use the "actions" command


```js
smart_me.Devices_Put({
  "id": "",
  "switchState": true
}, context)
```

#### Parameters
* id (string) **required** - The ID of the device
* switchState (boolean) **required** - The new state of the switch
* switchNumber (integer) - The number of the switch if there are multiple (1 for L1, 3 for L3)

### DevicesByEnergy_Get
Gets all Devices for an Energy Type


```js
smart_me.DevicesByEnergy_Get({
  "meterEnergyType": ""
}, context)
```

#### Parameters
* meterEnergyType (string) **required**

### DevicesBySubType_Get
Gets all Devices by it's Sub Type (e.g. E-Charging Station)


```js
smart_me.DevicesBySubType_Get({
  "meterSubType": ""
}, context)
```

#### Parameters
* meterSubType (string) **required**

### MBus_Post
M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.


```js
smart_me.MBus_Post({
  "mbusData": {}
}, context)
```

#### Parameters
* mbusData (object) **required**

### MeterFolderInformation_Post
Sets the Name of a Meter or a Folder


```js
smart_me.MeterFolderInformation_Post({
  "meterFolderInformation": {}
}, context)
```

#### Parameters
* meterFolderInformation (object) **required** - Container for a Meter or Folder Information to Post

### MeterFolderInformation_Get
Beta: Gets the General Information for a Meter or a Folder


```js
smart_me.MeterFolderInformation_Get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### MeterValues_Get
Gets the Values for a Meter at a given Date. The first Value found before the given Date is returned.


```js
smart_me.MeterValues_Get({
  "id": "",
  "date": ""
}, context)
```

#### Parameters
* id (string) **required**
* date (string) **required**

### SignUp_Post
Sign up a new User.
            The sign up is done on the smart-me Cloud.


```js
smart_me.SignUp_Post({
  "signUpData": {}
}, context)
```

#### Parameters
* signUpData (object) **required** - Container for the Sign UP API

### User_Get
Gets the informations for the user.


```js
smart_me.User_Get(null, context)
```


### VirtualMeterActive_Get
Beta: Gets all active virtual meters.


```js
smart_me.VirtualMeterActive_Get(null, context)
```


### VirtualMeterActive_Post
Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.


```js
smart_me.VirtualMeterActive_Post({
  "meterToActivate": {}
}, context)
```

#### Parameters
* meterToActivate (object) **required** - Actives a virtual Meter

### VirtualMeterDeactivate_Post
Beta: Virtual Meter API: Deactivates a Virtual Meter.


```js
smart_me.VirtualMeterDeactivate_Post({
  "meterToDeactivate": {}
}, context)
```

#### Parameters
* meterToDeactivate (object) **required** - Deactivates a virtual Meter

### VirtualMeters_Get
Beta: Gets all Meters available to activate as a Virtual Meter.


```js
smart_me.VirtualMeters_Get(null, context)
```


