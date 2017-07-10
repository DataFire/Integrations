# @datafire/azure_arm_storsimple8000series


## Operation: Operations_List
Lists all of the available REST API operations of the Microsoft.Storsimple provider

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AvailableProviderOperationList"
}
```
## Operation: Managers_List
Retrieves all the managers in a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ManagerList"
}
```
## Operation: Managers_ListByResourceGroup
Retrieves all the managers in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ManagerList"
}
```
## Operation: Managers_Delete
Deletes the manager.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Managers_Get
Returns the properties of the specified manager name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Manager"
}
```
## Operation: Managers_CreateOrUpdate
Creates or updates the manager.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parameters": {
      "$ref": "#/definitions/Manager"
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "parameters",
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Manager"
}
```
## Operation: Devices_Configure
Complete minimal setup before using the device.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parameters": {
      "$ref": "#/definitions/ConfigureDeviceRequest"
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "parameters",
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Devices_ListByManager
Returns the list of devices for the specified manager.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    },
    "$expand": {
      "type": "string",
      "description": "Specify $expand=details to populate additional fields related to the device."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeviceList"
}
```
## Operation: Devices_Delete
Deletes the device.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceName": {
      "type": "string",
      "description": "The device name."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "deviceName",
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Devices_Get
Returns the properties of the specified device.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceName": {
      "type": "string",
      "description": "The device name."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    },
    "$expand": {
      "type": "string",
      "description": "Specify $expand=details to populate additional fields related to the device."
    }
  },
  "additionalProperties": false,
  "required": [
    "deviceName",
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Device"
}
```
## Operation: Devices_Update
Patches the device.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceName": {
      "type": "string",
      "description": "The device Name."
    },
    "parameters": {
      "$ref": "#/definitions/DevicePatch"
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "deviceName",
    "parameters",
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Device"
}
```
## Operation: Devices_Deactivate
Deactivates the device.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceName": {
      "type": "string",
      "description": "The device name."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "deviceName",
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Managers_GetDevicePublicEncryptionKey
Returns the public encryption key of the device.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceName": {
      "type": "string",
      "description": "The device name."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "deviceName",
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PublicKey"
}
```
## Operation: Managers_GetEncryptionSettings
Returns the encryption settings of the manager.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EncryptionSettings"
}
```
## Operation: Managers_DeleteExtendedInfo
Deletes the extended info of the manager.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Managers_GetExtendedInfo
Returns the extended information of the specified manager name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ManagerExtendedInfo"
}
```
## Operation: Managers_UpdateExtendedInfo
Updates the extended info of the manager.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parameters": {
      "$ref": "#/definitions/ManagerExtendedInfo"
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    },
    "If-Match": {
      "type": "string",
      "description": "Pass the ETag of ExtendedInfo fetched from GET call"
    }
  },
  "additionalProperties": false,
  "required": [
    "parameters",
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version",
    "If-Match"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ManagerExtendedInfo"
}
```
## Operation: Managers_CreateExtendedInfo
Creates the extended info of the manager.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parameters": {
      "$ref": "#/definitions/ManagerExtendedInfo"
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "parameters",
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ManagerExtendedInfo"
}
```
## Operation: Managers_GetActivationKey
Returns the activation key of the manager.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Key"
}
```
## Operation: Managers_GetPrivateEncryptionKey
Returns the symmetric encrypted private encryption key of the manager.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SymmetricEncryptedSecret"
}
```
## Operation: Managers_GetPublicEncryptionKey
Returns the symmetric encrypted public encryption key of the manager.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SymmetricEncryptedSecret"
}
```
## Operation: Managers_RegenerateActivationKey
Re-generates and returns the activation key of the manager.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id"
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "managerName": {
      "type": "string",
      "description": "The manager name",
      "maxLength": 50,
      "minLength": 2
    },
    "api-version": {
      "type": "string",
      "description": "The api version"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "managerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Key"
}
```
