# @datafire/azure_arm_eventhub
Azure Event Hubs client

## Operation: Operations_List
Lists all of the available Event Hub REST API operations.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API Version."
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
Check the give Namespace name availability.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "parameters": {
      "$ref": "#/definitions/CheckNameAvailabilityParameter"
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
## Operation: Namespaces_ListBySubscription
Lists all the available Namespaces within a subscription, irrespective of the resource groups.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/NamespaceListResult"
}
```
## Operation: Namespaces_ListByResourceGroup
Lists the available Namespaces within a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/NamespaceListResult"
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
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
Gets the description of the specified namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/NamespaceResource"
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
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "parameters": {
      "$ref": "#/definitions/NamespaceUpdateParameter"
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/NamespaceResource"
}
```
## Operation: Namespaces_CreateOrUpdate
Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "parameters": {
      "$ref": "#/definitions/NamespaceCreateOrUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/NamespaceResource"
}
```
## Operation: Namespaces_ListAuthorizationRules
Gets a list of authorization rules for a Namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/SharedAccessAuthorizationRuleListResult"
}
```
## Operation: Namespaces_DeleteAuthorizationRule
Deletes an AuthorizationRule for a Namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorization rule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
Gets an AuthorizationRule for a Namespace by rule name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorization rule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/SharedAccessAuthorizationRuleResource"
}
```
## Operation: Namespaces_CreateOrUpdateAuthorizationRule
Creates or updates an AuthorizationRule for a Namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorization rule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/SharedAccessAuthorizationRuleCreateOrUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/SharedAccessAuthorizationRuleResource"
}
```
## Operation: Namespaces_ListKeys
Gets the primary and secondary connection strings for the Namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorization rule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/ResourceListKeys"
}
```
## Operation: Namespaces_RegenerateKeys
Regenerates the primary or secondary connection strings for the specified Namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorization rule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/RegenerateKeysParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/ResourceListKeys"
}
```
## Operation: EventHubs_ListAll
Gets all the Event Hubs in a Namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/EventHubListResult"
}
```
## Operation: EventHubs_Delete
Deletes an Event Hub from the specified Namespace and resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "eventHubName": {
      "type": "string",
      "description": "The Event Hub name",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "eventHubName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: EventHubs_Get
Gets an Event Hubs description for the specified Event Hub.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "eventHubName": {
      "type": "string",
      "description": "The Event Hub name",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "eventHubName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EventHubResource"
}
```
## Operation: EventHubs_CreateOrUpdate
Creates or updates a new Event Hub as a nested resource within a Namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "eventHubName": {
      "type": "string",
      "description": "The Event Hub name",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/EventHubCreateOrUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "eventHubName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EventHubResource"
}
```
## Operation: EventHubs_ListAuthorizationRules
Gets the authorization rules for an Event Hub.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "eventHubName": {
      "type": "string",
      "description": "The Event Hub name",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "eventHubName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SharedAccessAuthorizationRuleListResult"
}
```
## Operation: EventHubs_DeleteAuthorizationRule
Deletes an Event Hub AuthorizationRule.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "eventHubName": {
      "type": "string",
      "description": "The Event Hub name",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorization rule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "eventHubName",
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
## Operation: EventHubs_GetAuthorizationRule
Gets an AuthorizationRule for an Event Hub by rule name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "eventHubName": {
      "type": "string",
      "description": "The Event Hub name",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorization rule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "eventHubName",
    "authorizationRuleName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SharedAccessAuthorizationRuleResource"
}
```
## Operation: EventHubs_CreateOrUpdateAuthorizationRule
Creates or updates an AuthorizationRule for the specified Event Hub.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "eventHubName": {
      "type": "string",
      "description": "The Event Hub name",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorization rule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/SharedAccessAuthorizationRuleCreateOrUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "eventHubName",
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
  "$ref": "#/definitions/SharedAccessAuthorizationRuleResource"
}
```
## Operation: EventHubs_ListKeys
Gets the ACS and SAS connection strings for the Event Hub.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "eventHubName": {
      "type": "string",
      "description": "The Event Hub name",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorization rule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "eventHubName",
    "authorizationRuleName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourceListKeys"
}
```
## Operation: EventHubs_RegenerateKeys
Regenerates the ACS and SAS connection strings for the Event Hub.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "eventHubName": {
      "type": "string",
      "description": "The Event Hub name",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorization rule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/RegenerateKeysParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "eventHubName",
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
  "$ref": "#/definitions/ResourceListKeys"
}
```
## Operation: ConsumerGroups_ListAll
Gets all the consumer groups in a Namespace. An empty feed is returned if no consumer group exists in the Namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "eventHubName": {
      "type": "string",
      "description": "The Event Hub name",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "eventHubName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConsumerGroupListResult"
}
```
## Operation: ConsumerGroups_Delete
Deletes a consumer group from the specified Event Hub and resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "eventHubName": {
      "type": "string",
      "description": "The Event Hub name",
      "maxLength": 50,
      "minLength": 1
    },
    "consumerGroupName": {
      "type": "string",
      "description": "The consumer group name",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "eventHubName",
    "consumerGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ConsumerGroups_Get
Gets a description for the specified consumer group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "eventHubName": {
      "type": "string",
      "description": "The Event Hub name",
      "maxLength": 50,
      "minLength": 1
    },
    "consumerGroupName": {
      "type": "string",
      "description": "The consumer group name",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "eventHubName",
    "consumerGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConsumerGroupResource"
}
```
## Operation: ConsumerGroups_CreateOrUpdate
Creates or updates an Event Hubs consumer group as a nested resource within a Namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group within the azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The Namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "eventHubName": {
      "type": "string",
      "description": "The Event Hub name",
      "maxLength": 50,
      "minLength": 1
    },
    "consumerGroupName": {
      "type": "string",
      "description": "The consumer group name",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/ConsumerGroupCreateOrUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "namespaceName",
    "eventHubName",
    "consumerGroupName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConsumerGroupResource"
}
```
