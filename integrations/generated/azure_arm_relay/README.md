# @datafire/azure_arm_relay
Use these API to manage Azure Relay resources through Azure Resources Manager.

## Operation: Operations_List
Lists all of the available Relay REST API operations.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
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
  "$ref": "#/definitions/OperationListResult"
}
```
## Operation: Namespaces_CheckNameAvailability
Check the give namespace name availability.

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
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "parameters": {
      "$ref": "#/definitions/CheckNameAvailability"
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CheckNameAvailabilityResult"
}
```
## Operation: Namespaces_List
Lists all the available namespaces within the subscription irrespective of the resourceGroups.

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
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/RelayNamespaceListResult"
}
```
## Operation: Namespaces_ListByResourceGroup
Lists all the available namespaces within the ResourceGroup.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/RelayNamespaceListResult"
}
```
## Operation: Namespaces_Delete
Deletes an existing namespace. This operation also removes all associated resources under the namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Namespaces_Get
Returns the description for the specified namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RelayNamespace"
}
```
## Operation: Namespaces_Update
Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "parameters": {
      "$ref": "#/definitions/RelayNamespaceUpdateParameter"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RelayNamespace"
}
```
## Operation: Namespaces_CreateOrUpdate
Create Azure Relay namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "parameters": {
      "$ref": "#/definitions/RelayNamespace"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RelayNamespace"
}
```
## Operation: Namespaces_ListAuthorizationRules
Authorization rules for a namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorizationRuleListResult"
}
```
## Operation: Namespaces_DeleteAuthorizationRule
Deletes a namespace authorization rule

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationRule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "authorizationRuleName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Namespaces_GetAuthorizationRule
Authorization rule for a namespace by name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationRule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "authorizationRuleName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorizationRule"
}
```
## Operation: Namespaces_CreateOrUpdateAuthorizationRule
Creates or Updates an authorization rule for a namespace

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationRule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/AuthorizationRule"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "authorizationRuleName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorizationRule"
}
```
## Operation: Namespaces_ListKeys
Primary and Secondary ConnectionStrings to the namespace 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationRule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "authorizationRuleName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorizationRuleKeys"
}
```
## Operation: Namespaces_RegenerateKeys
Regenerates the Primary or Secondary ConnectionStrings to the namespace 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationRule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/RegenerateKeysParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "authorizationRuleName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorizationRuleKeys"
}
```
## Operation: HybridConnections_ListByNamespace
Lists the HybridConnection within the namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HybridConnectionListResult"
}
```
## Operation: HybridConnections_Delete
Deletes a HybridConnection .

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "hybridConnectionName": {
      "type": "string",
      "description": "The hybrid connection name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "hybridConnectionName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: HybridConnections_Get
Returns the description for the specified HybridConnection.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "hybridConnectionName": {
      "type": "string",
      "description": "The hybrid connection name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "hybridConnectionName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HybridConnection"
}
```
## Operation: HybridConnections_CreateOrUpdate
Creates or Updates a service HybridConnection. This operation is idempotent.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "hybridConnectionName": {
      "type": "string",
      "description": "The hybrid connection name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/HybridConnection"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "hybridConnectionName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HybridConnection"
}
```
## Operation: HybridConnections_ListAuthorizationRules
Authorization rules for a HybridConnection.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "hybridConnectionName": {
      "type": "string",
      "description": "The hybrid connection name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "hybridConnectionName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorizationRuleListResult"
}
```
## Operation: HybridConnections_DeleteAuthorizationRule
Deletes a HybridConnection authorization rule

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "hybridConnectionName": {
      "type": "string",
      "description": "The hybrid connection name.",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationRule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "hybridConnectionName",
    "authorizationRuleName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: HybridConnections_GetAuthorizationRule
HybridConnection authorizationRule for a HybridConnection by name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "hybridConnectionName": {
      "type": "string",
      "description": "The hybrid connection name.",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationRule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "hybridConnectionName",
    "authorizationRuleName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorizationRule"
}
```
## Operation: HybridConnections_CreateOrUpdateAuthorizationRule
Creates or Updates an authorization rule for a HybridConnection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "hybridConnectionName": {
      "type": "string",
      "description": "The hybrid connection name.",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationRule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/AuthorizationRule"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "hybridConnectionName",
    "authorizationRuleName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorizationRule"
}
```
## Operation: HybridConnections_ListKeys
Primary and Secondary ConnectionStrings to the HybridConnection.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "hybridConnectionName": {
      "type": "string",
      "description": "The hybrid connection name.",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationRule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "hybridConnectionName",
    "authorizationRuleName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorizationRuleKeys"
}
```
## Operation: HybridConnections_RegenerateKeys
Regenerates the Primary or Secondary ConnectionStrings to the HybridConnection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "hybridConnectionName": {
      "type": "string",
      "description": "The hybrid connection name.",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationRule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/RegenerateKeysParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "hybridConnectionName",
    "authorizationRuleName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorizationRuleKeys"
}
```
## Operation: WCFRelays_ListByNamespace
Lists the WCFRelays within the namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WcfRelaysListResult"
}
```
## Operation: WCFRelays_Delete
Deletes a WCFRelays .

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "relayName": {
      "type": "string",
      "description": "The relay name",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "relayName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: WCFRelays_Get
Returns the description for the specified WCFRelays.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "relayName": {
      "type": "string",
      "description": "The relay name",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "relayName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WcfRelay"
}
```
## Operation: WCFRelays_CreateOrUpdate
Creates or Updates a WCFRelay. This operation is idempotent.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "relayName": {
      "type": "string",
      "description": "The relay name",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/WcfRelay"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "relayName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WcfRelay"
}
```
## Operation: WCFRelays_ListAuthorizationRules
Authorization rules for a WCFRelays.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "relayName": {
      "type": "string",
      "description": "The relay name",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "relayName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorizationRuleListResult"
}
```
## Operation: WCFRelays_DeleteAuthorizationRule
Deletes a WCFRelays authorization rule

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "relayName": {
      "type": "string",
      "description": "The relay name",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationRule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "relayName",
    "authorizationRuleName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: WCFRelays_GetAuthorizationRule
Get authorizationRule for a WCFRelays by name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "relayName": {
      "type": "string",
      "description": "The relay name",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationRule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "relayName",
    "authorizationRuleName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorizationRule"
}
```
## Operation: WCFRelays_CreateOrUpdateAuthorizationRule
Creates or Updates an authorization rule for a WCFRelays

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "relayName": {
      "type": "string",
      "description": "The relay name",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationRule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/AuthorizationRule"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "relayName",
    "authorizationRuleName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorizationRule"
}
```
## Operation: WCFRelays_ListKeys
Primary and Secondary ConnectionStrings to the WCFRelays.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "relayName": {
      "type": "string",
      "description": "The relay name",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationRule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "relayName",
    "authorizationRuleName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorizationRuleKeys"
}
```
## Operation: WCFRelays_RegenerateKeys
Regenerates the Primary or Secondary ConnectionStrings to the WCFRelays

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace Name",
      "maxLength": 50,
      "minLength": 6
    },
    "relayName": {
      "type": "string",
      "description": "The relay name",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationRule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/RegenerateKeysParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "relayName",
    "authorizationRuleName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorizationRuleKeys"
}
```
