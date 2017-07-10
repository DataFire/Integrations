# @datafire/azure_arm_servicebus
Azure Service Bus client

## Operation: Operations_List
Lists all of the available ServiceBus REST API operations.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
      "description": "Client API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
## Operation: Namespaces_ListBySubscription
Gets all the available namespaces within the subscription, irrespective of the resource groups.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
Gets the available namespaces within a resource group.

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
      "description": "Client API version."
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
      "description": "Name of the Resource group within the Azure subscription.",
      "maxLength": 90,
      "minLength": 1
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
Gets a description for the specified namespace.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
Updates a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "parameters": {
      "$ref": "#/definitions/NamespaceUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
Creates or updates a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.

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
      "description": "The namespace name."
    },
    "parameters": {
      "$ref": "#/definitions/NamespaceCreateOrUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
Gets the authorization rules for a namespace.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
Deletes a namespace authorization rule.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationrule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
Gets an authorization rule for a namespace by rule name.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationrule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
Creates or updates an authorization rule for a namespace.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationrule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/SharedAccessAuthorizationRuleCreateOrUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
Gets the primary and secondary connection strings for the namespace.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationrule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
Regenerates the primary or secondary connection strings for the namespace.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationrule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/RegenerateKeysParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
## Operation: Queues_ListAll
Gets the queues within a namespace.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
  "$ref": "#/definitions/QueueListResult"
}
```
## Operation: Queues_Delete
Deletes a queue from the specified namespace in a resource group.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "queueName": {
      "type": "string",
      "description": "The queue name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "queueName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Queues_Get
Returns a description for the specified queue.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "queueName": {
      "type": "string",
      "description": "The queue name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "queueName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/QueueResource"
}
```
## Operation: Queues_CreateOrUpdate
Creates or updates a Service Bus queue. This operation is idempotent.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "queueName": {
      "type": "string",
      "description": "The queue name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/QueueCreateOrUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "queueName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/QueueResource"
}
```
## Operation: Queues_ListAuthorizationRules
Gets all authorization rules for a queue.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "queueName": {
      "type": "string",
      "description": "The queue name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "queueName",
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
## Operation: Queues_DeleteAuthorizationRule
Deletes a queue authorization rule.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "queueName": {
      "type": "string",
      "description": "The queue name.",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationrule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "queueName",
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
## Operation: Queues_GetAuthorizationRule
Gets an authorization rule for a queue by rule name.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "queueName": {
      "type": "string",
      "description": "The queue name.",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationrule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "queueName",
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
## Operation: Queues_CreateOrUpdateAuthorizationRule
Creates an authorization rule for a queue.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "queueName": {
      "type": "string",
      "description": "The queue name.",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationrule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/SharedAccessAuthorizationRuleCreateOrUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "queueName",
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
## Operation: Queues_ListKeys
Primary and secondary connection strings to the queue.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "queueName": {
      "type": "string",
      "description": "The queue name.",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationrule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "queueName",
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
## Operation: Queues_RegenerateKeys
Regenerates the primary or secondary connection strings to the queue.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "queueName": {
      "type": "string",
      "description": "The queue name.",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationrule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/RegenerateKeysParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "queueName",
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
## Operation: Topics_ListAll
Gets all the topics in a namespace.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
  "$ref": "#/definitions/TopicListResult"
}
```
## Operation: Topics_Delete
Deletes a topic from the specified namespace and resource group.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "topicName": {
      "type": "string",
      "description": "The topic name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "topicName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Topics_Get
Returns a description for the specified topic.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "topicName": {
      "type": "string",
      "description": "The topic name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "topicName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TopicResource"
}
```
## Operation: Topics_CreateOrUpdate
Creates a topic in the specified namespace.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "topicName": {
      "type": "string",
      "description": "The topic name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/TopicCreateOrUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "topicName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TopicResource"
}
```
## Operation: Topics_ListAuthorizationRules
Gets authorization rules for a topic.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "topicName": {
      "type": "string",
      "description": "The topic name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "topicName",
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
## Operation: Topics_DeleteAuthorizationRule
Deletes a topic authorization rule.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "topicName": {
      "type": "string",
      "description": "The topic name.",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationrule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "topicName",
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
## Operation: Topics_GetAuthorizationRule
Returns the specified authorization rule.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "topicName": {
      "type": "string",
      "description": "The topic name.",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationrule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "topicName",
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
## Operation: Topics_CreateOrUpdateAuthorizationRule
Creates an authorizatio rule for the specified topic.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "topicName": {
      "type": "string",
      "description": "The topic name.",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationrule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/SharedAccessAuthorizationRuleCreateOrUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "topicName",
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
## Operation: Topics_ListKeys
Gets the primary and secondary connection strings for the topic.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "topicName": {
      "type": "string",
      "description": "The topic name.",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationrule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "topicName",
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
## Operation: Topics_RegenerateKeys
Regenerates primary or secondary connection strings for the topic.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "topicName": {
      "type": "string",
      "description": "The topic name.",
      "maxLength": 50,
      "minLength": 1
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The authorizationrule name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/RegenerateKeysParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "topicName",
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
## Operation: Subscriptions_ListAll
List all the subscriptions under a specified topic.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "topicName": {
      "type": "string",
      "description": "The topic name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "topicName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SubscriptionListResult"
}
```
## Operation: Subscriptions_Delete
Deletes a subscription from the specified topic.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "topicName": {
      "type": "string",
      "description": "The topic name.",
      "maxLength": 50,
      "minLength": 1
    },
    "subscriptionName": {
      "type": "string",
      "description": "The subscription name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "topicName",
    "subscriptionName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Subscriptions_Get
Returns a subscription description for the specified topic.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "topicName": {
      "type": "string",
      "description": "The topic name.",
      "maxLength": 50,
      "minLength": 1
    },
    "subscriptionName": {
      "type": "string",
      "description": "The subscription name.",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "topicName",
    "subscriptionName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SubscriptionResource"
}
```
## Operation: Subscriptions_CreateOrUpdate
Creates a topic subscription.

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
      "description": "The namespace name",
      "maxLength": 50,
      "minLength": 6
    },
    "topicName": {
      "type": "string",
      "description": "The topic name.",
      "maxLength": 50,
      "minLength": 1
    },
    "subscriptionName": {
      "type": "string",
      "description": "The subscription name.",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/SubscriptionCreateOrUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
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
    "topicName",
    "subscriptionName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SubscriptionResource"
}
```
