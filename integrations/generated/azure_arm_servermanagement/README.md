# @datafire/azure_arm_servermanagement
REST API for Azure Server Management Service.

## Operation: Gateway_List
Returns gateways in a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
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
  "$ref": "#/definitions/GatewayResources"
}
```
## Operation: Node_List
Lists nodes in a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
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
  "$ref": "#/definitions/NodeResources"
}
```
## Operation: Gateway_ListForResourceGroup
Returns gateways in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GatewayResources"
}
```
## Operation: Gateway_Delete
Deletes a gateway from a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "gatewayName": {
      "type": "string",
      "description": "The gateway name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "gatewayName"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Gateway_Get
Gets a gateway.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "gatewayName": {
      "type": "string",
      "description": "The gateway name (256 characters maximum)",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    },
    "$expand": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.",
      "enum": [
        "status",
        "download"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "gatewayName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GatewayResource"
}
```
## Operation: Gateway_Update
Updates a gateway belonging to a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "gatewayName": {
      "type": "string",
      "description": "The gateway name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    },
    "GatewayParameters": {
      "$ref": "#/definitions/GatewayParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "gatewayName",
    "GatewayParameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GatewayResource"
}
```
## Operation: Gateway_Create
Creates or updates a ManagementService gateway.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "gatewayName": {
      "type": "string",
      "description": "The gateway name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    },
    "GatewayParameters": {
      "$ref": "#/definitions/GatewayParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "gatewayName",
    "GatewayParameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GatewayResource"
}
```
## Operation: Gateway_GetProfile
Gets a gateway profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "gatewayName": {
      "type": "string",
      "description": "The gateway name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "gatewayName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GatewayProfile"
}
```
## Operation: Gateway_RegenerateProfile
Regenerate a gateway's profile

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "gatewayName": {
      "type": "string",
      "description": "The gateway name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "gatewayName"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Gateway_Upgrade
Upgrades a gateway.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "gatewayName": {
      "type": "string",
      "description": "The gateway name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "gatewayName"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Node_ListForResourceGroup
Lists nodes in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NodeResources"
}
```
## Operation: Node_Delete
deletes a management node

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "nodeName": {
      "type": "string",
      "description": "The node name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "nodeName"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Node_Get
Gets a management node.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "nodeName": {
      "type": "string",
      "description": "The node name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "nodeName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NodeResource"
}
```
## Operation: Node_Update
Updates a management node.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "nodeName": {
      "type": "string",
      "description": "The node name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    },
    "NodeParameters": {
      "$ref": "#/definitions/NodeParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "nodeName",
    "NodeParameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NodeResource"
}
```
## Operation: Node_Create
Creates or updates a management node.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "nodeName": {
      "type": "string",
      "description": "The node name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    },
    "GatewayParameters": {
      "$ref": "#/definitions/NodeParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "nodeName",
    "GatewayParameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NodeResource"
}
```
## Operation: Session_Delete
Deletes a session for a node.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "nodeName": {
      "type": "string",
      "description": "The node name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    },
    "session": {
      "type": "string",
      "description": "The sessionId from the user."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "nodeName",
    "session"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Session_Get
Gets a session for a node.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "nodeName": {
      "type": "string",
      "description": "The node name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    },
    "session": {
      "type": "string",
      "description": "The sessionId from the user."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "nodeName",
    "session"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SessionResource"
}
```
## Operation: Session_Create
Creates a session for a node.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "nodeName": {
      "type": "string",
      "description": "The node name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    },
    "session": {
      "type": "string",
      "description": "The sessionId from the user."
    },
    "SessionParameters": {
      "$ref": "#/definitions/SessionParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "nodeName",
    "session",
    "SessionParameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SessionResource"
}
```
## Operation: PowerShell_ListSession
Gets a list of the active sessions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "nodeName": {
      "type": "string",
      "description": "The node name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    },
    "session": {
      "type": "string",
      "description": "The sessionId from the user."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "nodeName",
    "session"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PowerShellSessionResources"
}
```
## Operation: PowerShell_GetCommandStatus
Gets the status of a command.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "nodeName": {
      "type": "string",
      "description": "The node name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    },
    "session": {
      "type": "string",
      "description": "The sessionId from the user."
    },
    "pssession": {
      "type": "string",
      "description": "The PowerShell sessionId from the user."
    },
    "$expand": {
      "type": "string",
      "description": "Gets current output from an ongoing call.",
      "enum": [
        "output"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "nodeName",
    "session",
    "pssession"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PowerShellCommandStatus"
}
```
## Operation: PowerShell_UpdateCommand
Updates a running PowerShell command with more data.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "nodeName": {
      "type": "string",
      "description": "The node name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    },
    "session": {
      "type": "string",
      "description": "The sessionId from the user."
    },
    "pssession": {
      "type": "string",
      "description": "The PowerShell sessionId from the user."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "nodeName",
    "session",
    "pssession"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PowerShellCommandResults"
}
```
## Operation: PowerShell_CreateSession
Creates a PowerShell session.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "nodeName": {
      "type": "string",
      "description": "The node name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    },
    "session": {
      "type": "string",
      "description": "The sessionId from the user."
    },
    "pssession": {
      "type": "string",
      "description": "The PowerShell sessionId from the user."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "nodeName",
    "session",
    "pssession"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PowerShellSessionResource"
}
```
## Operation: PowerShell_CancelCommand
Cancels a PowerShell command.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "nodeName": {
      "type": "string",
      "description": "The node name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    },
    "session": {
      "type": "string",
      "description": "The sessionId from the user."
    },
    "pssession": {
      "type": "string",
      "description": "The PowerShell sessionId from the user."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "nodeName",
    "session",
    "pssession"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PowerShellCommandResults"
}
```
## Operation: PowerShell_InvokeCommand
Creates a PowerShell script and invokes it.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "nodeName": {
      "type": "string",
      "description": "The node name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    },
    "session": {
      "type": "string",
      "description": "The sessionId from the user."
    },
    "pssession": {
      "type": "string",
      "description": "The PowerShell sessionId from the user."
    },
    "PowerShellCommandParameters": {
      "$ref": "#/definitions/PowerShellCommandParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "nodeName",
    "session",
    "pssession",
    "PowerShellCommandParameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PowerShellCommandResults"
}
```
## Operation: PowerShell_TabCompletion
Gets tab completion values for a command.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscriptionId.",
      "pattern": "[a-zA-Z0-9]+",
      "minLength": 3
    },
    "nodeName": {
      "type": "string",
      "description": "The node name (256 characters maximum).",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$",
      "maxLength": 256,
      "minLength": 1
    },
    "session": {
      "type": "string",
      "description": "The sessionId from the user."
    },
    "pssession": {
      "type": "string",
      "description": "The PowerShell sessionId from the user."
    },
    "PowerShellTabCompletionParamters": {
      "$ref": "#/definitions/PowerShellTabCompletionParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "nodeName",
    "session",
    "pssession",
    "PowerShellTabCompletionParamters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PowerShellTabCompletionResults"
}
```
