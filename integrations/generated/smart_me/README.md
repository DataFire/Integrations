# @datafire/smart_me
With the smart-me REST API you get Access to all your devices in the smart-me Cloud and you can add your own devices. So it's a easy way to add the smart-me Cloud support to your Hardware or Software Product.

## Operation: AccessToken_Put
Creates a Access Token to write on a Card (e.g. NFC)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accessTokenToPut": {
      "$ref": "#/definitions/AccessTokenToPut"
    }
  },
  "additionalProperties": false,
  "required": [
    "accessTokenToPut"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: Actions_Post
Set an action for the specified device.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "actionToPost": {
      "$ref": "#/definitions/ActionToPost"
    }
  },
  "additionalProperties": false,
  "required": [
    "actionToPost"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Actions_Get
Gets all available Actions of a Device

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the device"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ActionInformation"
  },
  "type": "array"
}
```
## Operation: api.CustomDevice.get
Gets all Devices

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/CustomDeviceToPost"
  },
  "type": "array"
}
```
## Operation: CustomDevice_Post
Creates or updates a Custom Device or updates it's values.
            A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.
            Only use a custom device for all non meters.
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "newDevice": {
      "$ref": "#/definitions/CustomDeviceToPost"
    }
  },
  "additionalProperties": false,
  "required": [
    "newDevice"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomDeviceToPost"
}
```
## Operation: api.CustomDevice.id.get
Gets a Device by it's ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the device"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomDeviceToPost"
}
```
## Operation: DeviceBySerial_Get
Gets a Device by it's Serial Number. The Serial is the part before the "-".

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "serial": {
      "type": "integer",
      "format": "int64",
      "description": "The Serial Number of the device"
    }
  },
  "additionalProperties": false,
  "required": [
    "serial"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Device"
}
```
## Operation: api.Devices.get
Gets all Devices

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Device"
  },
  "type": "array"
}
```
## Operation: Devices_Post
Creates or updates a Device or updates it's values. 
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "newDevice": {
      "$ref": "#/definitions/DeviceToPost"
    }
  },
  "additionalProperties": false,
  "required": [
    "newDevice"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeviceToPost"
}
```
## Operation: api.Devices.id.get
Gets a Device by it's ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the device"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Device"
}
```
## Operation: Devices_Put
Updates the On/Off Switch on a device
            For new implementations please use the "actions" command

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the device"
    },
    "switchState": {
      "type": "boolean",
      "description": "The new state of the switch"
    },
    "switchNumber": {
      "type": "integer",
      "format": "int32",
      "description": "The number of the switch if there are multiple (1 for L1, 3 for L3)"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "switchState"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: DevicesByEnergy_Get
Gets all Devices for an Energy Type

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "meterEnergyType": {
      "type": "string",
      "enum": [
        "MeterTypeUnknown",
        "MeterTypeElectricity",
        "MeterTypeWater",
        "MeterTypeGas",
        "MeterTypeHeat",
        "MeterTypeHCA",
        "MeterTypeAllMeters",
        "MeterTypeTemperature",
        "MeterTypeMBusGateway",
        "MeterTypeRS485Gateway",
        "MeterTypeCustomDevice",
        "MeterTypeCompressedAir",
        "MeterTypeSolarLog"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "meterEnergyType"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Device"
  },
  "type": "array"
}
```
## Operation: DevicesBySubType_Get
Gets all Devices by it's Sub Type (e.g. E-Charging Station)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "meterSubType": {
      "type": "string",
      "enum": [
        "MeterSubTypeUnknown",
        "MeterSubTypeCold",
        "MeterSubTypeHeat",
        "MeterSubTypeChargingStation"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "meterSubType"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Device"
  },
  "type": "array"
}
```
## Operation: MBus_Post
M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "mbusData": {
      "$ref": "#/definitions/MBusData"
    }
  },
  "additionalProperties": false,
  "required": [
    "mbusData"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: MeterFolderInformation_Post
Sets the Name of a Meter or a Folder

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "meterFolderInformation": {
      "$ref": "#/definitions/MeterFolderInformationToPost"
    }
  },
  "additionalProperties": false,
  "required": [
    "meterFolderInformation"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: MeterFolderInformation_Get
Beta: Gets the General Information for a Meter or a Folder

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MeterFolderInformation"
}
```
## Operation: MeterValues_Get
Gets the Values for a Meter at a given Date. The first Value found before the given Date is returned.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "date": {
      "type": "string",
      "format": "date-time"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "date"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeviceInPast"
}
```
## Operation: SignUp_Post
Sign up a new User.
            The sign up is done on the smart-me Cloud.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "signUpData": {
      "$ref": "#/definitions/SignUpData"
    }
  },
  "additionalProperties": false,
  "required": [
    "signUpData"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: User_Get
Gets the informations for the user.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: VirtualMeterActive_Get
Beta: Gets all active virtual meters.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Device"
  },
  "type": "array"
}
```
## Operation: VirtualMeterActive_Post
Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "meterToActivate": {
      "$ref": "#/definitions/VMeterToActivate"
    }
  },
  "additionalProperties": false,
  "required": [
    "meterToActivate"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Device"
}
```
## Operation: VirtualMeterDeactivate_Post
Beta: Virtual Meter API: Deactivates a Virtual Meter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "meterToDeactivate": {
      "$ref": "#/definitions/VMeterToDeactivate"
    }
  },
  "additionalProperties": false,
  "required": [
    "meterToDeactivate"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: VirtualMeters_Get
Beta: Gets all Meters available to activate as a Virtual Meter.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Device"
  },
  "type": "array"
}
```
