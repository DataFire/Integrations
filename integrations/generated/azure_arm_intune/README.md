# @datafire/azure_arm_intune
Microsoft.Intune Resource provider Api features in the swagger-2.0 specification

## Operation: GetLocations
Returns location for user tenant.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
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
  "$ref": "#/definitions/LocationCollection"
}
```
## Operation: GetLocationByHostName
Returns location for given tenant.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
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
  "$ref": "#/definitions/Location"
}
```
## Operation: Android_GetAppForMAMPolicy
Get apps for an AndroidMAMPolicy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32"
    },
    "$select": {
      "type": "string",
      "description": "select specific fields in entity."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApplicationCollection"
}
```
## Operation: Android_GetMAMPolicies
Returns Intune Android policies.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32"
    },
    "$select": {
      "type": "string",
      "description": "select specific fields in entity."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AndroidMAMPolicyCollection"
}
```
## Operation: Android_DeleteMAMPolicy
Delete Android Policy

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Android_GetMAMPolicyByName
Returns AndroidMAMPolicy with given name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "$select": {
      "type": "string",
      "description": "select specific fields in entity."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AndroidMAMPolicy"
}
```
## Operation: Android_PatchMAMPolicy
Patch AndroidMAMPolicy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/AndroidMAMPolicy"
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AndroidMAMPolicy"
}
```
## Operation: Android_CreateOrUpdateMAMPolicy
Creates or updates AndroidMAMPolicy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/AndroidMAMPolicy"
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AndroidMAMPolicy"
}
```
## Operation: Android_DeleteAppForMAMPolicy
Delete App for Android Policy

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "appName": {
      "type": "string",
      "description": "application unique Name"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "appName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Android_AddAppForMAMPolicy
Add app to an AndroidMAMPolicy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "appName": {
      "type": "string",
      "description": "application unique Name"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/MAMPolicyAppIdOrGroupIdPayload"
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "appName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Android_GetGroupsForMAMPolicy
Returns groups for a given AndroidMAMPolicy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "policy name for the tenant"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupsCollection"
}
```
## Operation: Android_DeleteGroupForMAMPolicy
Delete Group for Android Policy

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "groupId": {
      "type": "string",
      "description": "application unique Name"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "groupId",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Android_AddGroupForMAMPolicy
Add group to an AndroidMAMPolicy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "groupId": {
      "type": "string",
      "description": "group Id"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/MAMPolicyAppIdOrGroupIdPayload"
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "groupId",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GetApps
Returns Intune Manageable apps.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32"
    },
    "$select": {
      "type": "string",
      "description": "select specific fields in entity."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApplicationCollection"
}
```
## Operation: GetMAMFlaggedUsers
Returns Intune flagged user collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32"
    },
    "$select": {
      "type": "string",
      "description": "select specific fields in entity."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FlaggedUserCollection"
}
```
## Operation: GetMAMFlaggedUserByName
Returns Intune flagged user details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "userName": {
      "type": "string",
      "description": "Flagged userName"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "$select": {
      "type": "string",
      "description": "select specific fields in entity."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "userName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FlaggedUser"
}
```
## Operation: GetMAMUserFlaggedEnrolledApps
Returns Intune flagged enrolled app collection for the User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "userName": {
      "type": "string",
      "description": "User name for the tenant"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32"
    },
    "$select": {
      "type": "string",
      "description": "select specific fields in entity."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "userName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FlaggedEnrolledAppCollection"
}
```
## Operation: Ios_GetMAMPolicies
Returns Intune iOSPolicies.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32"
    },
    "$select": {
      "type": "string",
      "description": "select specific fields in entity."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IOSMAMPolicyCollection"
}
```
## Operation: Ios_DeleteMAMPolicy
Delete Ios Policy

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Ios_GetMAMPolicyByName
Returns Intune iOS policies.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "$select": {
      "type": "string",
      "description": "select specific fields in entity."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/iOSMAMPolicy"
}
```
## Operation: Ios_PatchMAMPolicy
 patch an iOSMAMPolicy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/iOSMAMPolicy"
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/iOSMAMPolicy"
}
```
## Operation: Ios_CreateOrUpdateMAMPolicy
Creates or updates iOSMAMPolicy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/iOSMAMPolicy"
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/iOSMAMPolicy"
}
```
## Operation: Ios_GetAppForMAMPolicy
Get apps for an iOSMAMPolicy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32"
    },
    "$select": {
      "type": "string",
      "description": "select specific fields in entity."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApplicationCollection"
}
```
## Operation: Ios_DeleteAppForMAMPolicy
Delete App for Ios Policy

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "appName": {
      "type": "string",
      "description": "application unique Name"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "appName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Ios_AddAppForMAMPolicy
Add app to an iOSMAMPolicy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "appName": {
      "type": "string",
      "description": "application unique Name"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/MAMPolicyAppIdOrGroupIdPayload"
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "appName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Ios_GetGroupsForMAMPolicy
Returns groups for a given iOSMAMPolicy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "policy name for the tenant"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupsCollection"
}
```
## Operation: Ios_DeleteGroupForMAMPolicy
Delete Group for iOS Policy

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "groupId": {
      "type": "string",
      "description": "application unique Name"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "groupId",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Ios_AddGroupForMAMPolicy
Add group to an iOSMAMPolicy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "policyName": {
      "type": "string",
      "description": "Unique name for the policy"
    },
    "groupId": {
      "type": "string",
      "description": "group Id"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/MAMPolicyAppIdOrGroupIdPayload"
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "policyName",
    "groupId",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GetOperationResults
Returns operationResults.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32"
    },
    "$select": {
      "type": "string",
      "description": "select specific fields in entity."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationResultCollection"
}
```
## Operation: GetMAMStatuses
Returns Intune Tenant level statuses.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StatusesDefault"
}
```
## Operation: GetMAMUserDevices
Get devices for a user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "userName": {
      "type": "string",
      "description": "user unique Name"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32"
    },
    "$select": {
      "type": "string",
      "description": "select specific fields in entity."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "userName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeviceCollection"
}
```
## Operation: GetMAMUserDeviceByDeviceName
Get a unique device for a user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "userName": {
      "type": "string",
      "description": "unique user name"
    },
    "deviceName": {
      "type": "string",
      "description": "device name"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    },
    "$select": {
      "type": "string",
      "description": "select specific fields in entity."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "userName",
    "deviceName",
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
## Operation: WipeMAMUserDevice
Wipe a device for a user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostName": {
      "type": "string",
      "description": "Location hostName for the tenant"
    },
    "userName": {
      "type": "string",
      "description": "unique user name"
    },
    "deviceName": {
      "type": "string",
      "description": "device name"
    },
    "api-version": {
      "type": "string",
      "description": "Service Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostName",
    "userName",
    "deviceName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WipeDeviceOperationResult"
}
```
