# @datafire/azure_arm_notificationhubs
Azure NotificationHub client

## Operation: Namespaces_CheckAvailability
Checks the availability of the given service namespace across all Azure subscriptions. This is useful because the domain name is created based on the service namespace name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parameters": {
      "$ref": "#/definitions/CheckAvailabilityParameters"
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
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CheckAvailabilityResult"
}
```
## Operation: Namespaces_ListAll
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
  "$ref": "#/definitions/NamespaceListResult"
}
```
## Operation: Namespaces_List
Lists the available namespaces within a resourceGroup.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group. If resourceGroupName value is null the method lists all the namespaces within subscription"
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
  "$ref": "#/definitions/NamespaceListResult"
}
```
## Operation: Namespaces_Delete
Deletes an existing namespace. This operation also removes all associated notificationHubs under the namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name."
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
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name."
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
## Operation: Namespaces_Patch
Patches the existing namespace

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name."
    },
    "parameters": {
      "$ref": "#/definitions/NamespacePatchParameters"
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
Creates/Updates a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
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
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name"
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
Deletes a namespace authorization rule

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name."
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "Authorization Rule Name."
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
Gets an authorization rule for a namespace by name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name"
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "Authorization rule name."
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
Creates an authorization rule for a namespace

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name."
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "Aauthorization Rule Name."
    },
    "parameters": {
      "$ref": "#/definitions/SharedAccessAuthorizationRuleCreateOrUpdateParameters"
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
Gets the Primary and Secondary ConnectionStrings to the namespace 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name."
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The connection string of the namespace for the specified authorizationRule."
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
Regenerates the Primary/Secondary Keys to the Namespace Authorization Rule

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name."
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The connection string of the namespace for the specified authorizationRule."
    },
    "parameters": {
      "$ref": "#/definitions/PolicykeyResource"
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
## Operation: NotificationHubs_CheckAvailability
Checks the availability of the given notificationHub in a namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name."
    },
    "parameters": {
      "$ref": "#/definitions/CheckAvailabilityParameters"
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
  "$ref": "#/definitions/CheckAvailabilityResult"
}
```
## Operation: NotificationHubs_List
Lists the notification hubs associated with a namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name."
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
    "namespaceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NotificationHubListResult"
}
```
## Operation: NotificationHubs_Delete
Deletes a notification hub associated with a namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name."
    },
    "notificationHubName": {
      "type": "string",
      "description": "The notification hub name."
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
    "namespaceName",
    "notificationHubName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: NotificationHubs_Get
Lists the notification hubs associated with a namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name."
    },
    "notificationHubName": {
      "type": "string",
      "description": "The notification hub name."
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
    "namespaceName",
    "notificationHubName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NotificationHubResource"
}
```
## Operation: NotificationHubs_CreateOrUpdate
Creates/Update a NotificationHub in a namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name."
    },
    "notificationHubName": {
      "type": "string",
      "description": "The notification hub name."
    },
    "parameters": {
      "$ref": "#/definitions/NotificationHubCreateOrUpdateParameters"
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
    "namespaceName",
    "notificationHubName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NotificationHubResource"
}
```
## Operation: NotificationHubs_ListAuthorizationRules
Gets the authorization rules for a NotificationHub.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name"
    },
    "notificationHubName": {
      "type": "string",
      "description": "The notification hub name."
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
    "namespaceName",
    "notificationHubName",
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
## Operation: NotificationHubs_DeleteAuthorizationRule
Deletes a notificationHub authorization rule

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name."
    },
    "notificationHubName": {
      "type": "string",
      "description": "The notification hub name."
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "Authorization Rule Name."
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
    "namespaceName",
    "notificationHubName",
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
## Operation: NotificationHubs_GetAuthorizationRule
Gets an authorization rule for a NotificationHub by name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name"
    },
    "notificationHubName": {
      "type": "string",
      "description": "The notification hub name."
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "authorization rule name."
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
    "namespaceName",
    "notificationHubName",
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
## Operation: NotificationHubs_CreateOrUpdateAuthorizationRule
Creates/Updates an authorization rule for a NotificationHub

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name."
    },
    "notificationHubName": {
      "type": "string",
      "description": "The notification hub name."
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "Authorization Rule Name."
    },
    "parameters": {
      "$ref": "#/definitions/SharedAccessAuthorizationRuleCreateOrUpdateParameters"
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
    "namespaceName",
    "notificationHubName",
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
## Operation: NotificationHubs_ListKeys
Gets the Primary and Secondary ConnectionStrings to the NotificationHub 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name."
    },
    "notificationHubName": {
      "type": "string",
      "description": "The notification hub name."
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The connection string of the NotificationHub for the specified authorizationRule."
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
    "namespaceName",
    "notificationHubName",
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
## Operation: NotificationHubs_RegenerateKeys
Regenerates the Primary/Secondary Keys to the NotificationHub Authorization Rule

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name."
    },
    "notificationHubName": {
      "type": "string",
      "description": "The notification hub name."
    },
    "authorizationRuleName": {
      "type": "string",
      "description": "The connection string of the NotificationHub for the specified authorizationRule."
    },
    "parameters": {
      "$ref": "#/definitions/PolicykeyResource"
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
    "namespaceName",
    "notificationHubName",
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
## Operation: NotificationHubs_GetPnsCredentials
Lists the PNS Credentials associated with a notification hub .

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "namespaceName": {
      "type": "string",
      "description": "The namespace name."
    },
    "notificationHubName": {
      "type": "string",
      "description": "The notification hub name."
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
    "namespaceName",
    "notificationHubName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PnsCredentialsResource"
}
```
