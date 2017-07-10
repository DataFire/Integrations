# @datafire/azure_arm_trafficmanager


## Operation: Profiles_CheckTrafficManagerRelativeDnsNameAvailability
Checks the availability of a Traffic Manager Relative DNS name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parameters": {
      "$ref": "#/definitions/CheckTrafficManagerRelativeDnsNameAvailabilityParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "parameters",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TrafficManagerNameAvailability"
}
```
## Operation: Profiles_ListAll
Lists all Traffic Manager profiles within a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProfileListResult"
}
```
## Operation: Profiles_ListAllInResourceGroup
Lists all Traffic Manager profiles within a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group containing the Traffic Manager profiles to be listed."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProfileListResult"
}
```
## Operation: Profiles_Delete
Deletes a Traffic Manager profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group containing the Traffic Manager profile to be deleted."
    },
    "profileName": {
      "type": "string",
      "description": "The name of the Traffic Manager profile to be deleted."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Profiles_Get
Gets a Traffic Manager profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group containing the Traffic Manager profile."
    },
    "profileName": {
      "type": "string",
      "description": "The name of the Traffic Manager profile."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Profile"
}
```
## Operation: Profiles_Update
Update a Traffic Manager profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group containing the Traffic Manager profile."
    },
    "profileName": {
      "type": "string",
      "description": "The name of the Traffic Manager profile."
    },
    "parameters": {
      "$ref": "#/definitions/Profile"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Profile"
}
```
## Operation: Profiles_CreateOrUpdate
Create or update a Traffic Manager profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group containing the Traffic Manager profile."
    },
    "profileName": {
      "type": "string",
      "description": "The name of the Traffic Manager profile."
    },
    "parameters": {
      "$ref": "#/definitions/Profile"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Profile"
}
```
## Operation: Endpoints_Delete
Deletes a Traffic Manager endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group containing the Traffic Manager endpoint to be deleted."
    },
    "profileName": {
      "type": "string",
      "description": "The name of the Traffic Manager profile."
    },
    "endpointType": {
      "type": "string",
      "description": "The type of the Traffic Manager endpoint to be deleted."
    },
    "endpointName": {
      "type": "string",
      "description": "The name of the Traffic Manager endpoint to be deleted."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointType",
    "endpointName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Endpoints_Get
Gets a Traffic Manager endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group containing the Traffic Manager endpoint."
    },
    "profileName": {
      "type": "string",
      "description": "The name of the Traffic Manager profile."
    },
    "endpointType": {
      "type": "string",
      "description": "The type of the Traffic Manager endpoint."
    },
    "endpointName": {
      "type": "string",
      "description": "The name of the Traffic Manager endpoint."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointType",
    "endpointName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Endpoint"
}
```
## Operation: Endpoints_Update
Update a Traffic Manager endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group containing the Traffic Manager endpoint to be updated."
    },
    "profileName": {
      "type": "string",
      "description": "The name of the Traffic Manager profile."
    },
    "endpointType": {
      "type": "string",
      "description": "The type of the Traffic Manager endpoint to be updated."
    },
    "endpointName": {
      "type": "string",
      "description": "The name of the Traffic Manager endpoint to be updated."
    },
    "parameters": {
      "$ref": "#/definitions/Endpoint"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointType",
    "endpointName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Endpoint"
}
```
## Operation: Endpoints_CreateOrUpdate
Create or update a Traffic Manager endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group containing the Traffic Manager endpoint to be created or updated."
    },
    "profileName": {
      "type": "string",
      "description": "The name of the Traffic Manager profile."
    },
    "endpointType": {
      "type": "string",
      "description": "The type of the Traffic Manager endpoint to be created or updated."
    },
    "endpointName": {
      "type": "string",
      "description": "The name of the Traffic Manager endpoint to be created or updated."
    },
    "parameters": {
      "$ref": "#/definitions/Endpoint"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointType",
    "endpointName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Endpoint"
}
```
