# @datafire/azure_arm_relay

Client library for Relay

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_relay
```

```js
let datafire = require('datafire');
let azure_arm_relay = require('@datafire/azure_arm_relay').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_relay: account,
  }
})


azure_arm_relay.Operations_List({}, context).then(data => {
  console.log(data);
})
```

## Description
Use these API to manage Azure Relay resources through Azure Resources Manager.

## Actions
### Operations_List
Lists all of the available Relay REST API operations.


```js
azure_arm_relay.Operations_List({
  "api-version": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.

### Namespaces_CheckNameAvailability
Check the give namespace name availability.


```js
azure_arm_relay.Namespaces_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* parameters (undefined) **required** - Description of a Check Name availability request properties.

### Namespaces_List
Lists all the available namespaces within the subscription irrespective of the resourceGroups.


```js
azure_arm_relay.Namespaces_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_ListByResourceGroup
Lists all the available namespaces within the ResourceGroup.


```js
azure_arm_relay.Namespaces_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_Delete
Deletes an existing namespace. This operation also removes all associated resources under the namespace.


```js
azure_arm_relay.Namespaces_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_Get
Returns the description for the specified namespace.


```js
azure_arm_relay.Namespaces_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_Update
Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.


```js
azure_arm_relay.Namespaces_Update({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* parameters (undefined) **required** - Parameters supplied to the Patch Namespace operation.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_CreateOrUpdate
Create Azure Relay namespace.


```js
azure_arm_relay.Namespaces_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* parameters (undefined) **required** - Description of a Namespace resource.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_ListAuthorizationRules
Authorization rules for a namespace.


```js
azure_arm_relay.Namespaces_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_DeleteAuthorizationRule
Deletes a namespace authorization rule


```js
azure_arm_relay.Namespaces_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* authorizationRuleName (string) **required** - The authorizationRule name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_GetAuthorizationRule
Authorization rule for a namespace by name.


```js
azure_arm_relay.Namespaces_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* authorizationRuleName (string) **required** - The authorizationRule name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_CreateOrUpdateAuthorizationRule
Creates or Updates an authorization rule for a namespace


```js
azure_arm_relay.Namespaces_CreateOrUpdateAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* authorizationRuleName (string) **required** - The authorizationRule name.
* parameters (undefined) **required** - Description of a Namespace AuthorizationRules.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_ListKeys
Primary and Secondary ConnectionStrings to the namespace 


```js
azure_arm_relay.Namespaces_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* authorizationRuleName (string) **required** - The authorizationRule name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_RegenerateKeys
Regenerates the Primary or Secondary ConnectionStrings to the namespace 


```js
azure_arm_relay.Namespaces_RegenerateKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* authorizationRuleName (string) **required** - The authorizationRule name.
* parameters (undefined) **required** - Parameters supplied to the Regenerate Authorization Rule operation.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### HybridConnections_ListByNamespace
Lists the HybridConnection within the namespace.


```js
azure_arm_relay.HybridConnections_ListByNamespace({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### HybridConnections_Delete
Deletes a HybridConnection .


```js
azure_arm_relay.HybridConnections_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* hybridConnectionName (string) **required** - The hybrid connection name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### HybridConnections_Get
Returns the description for the specified HybridConnection.


```js
azure_arm_relay.HybridConnections_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* hybridConnectionName (string) **required** - The hybrid connection name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### HybridConnections_CreateOrUpdate
Creates or Updates a service HybridConnection. This operation is idempotent.


```js
azure_arm_relay.HybridConnections_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* hybridConnectionName (string) **required** - The hybrid connection name.
* parameters (undefined) **required** - Description of HybridConnection Resource.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### HybridConnections_ListAuthorizationRules
Authorization rules for a HybridConnection.


```js
azure_arm_relay.HybridConnections_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* hybridConnectionName (string) **required** - The hybrid connection name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### HybridConnections_DeleteAuthorizationRule
Deletes a HybridConnection authorization rule


```js
azure_arm_relay.HybridConnections_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* hybridConnectionName (string) **required** - The hybrid connection name.
* authorizationRuleName (string) **required** - The authorizationRule name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### HybridConnections_GetAuthorizationRule
HybridConnection authorizationRule for a HybridConnection by name.


```js
azure_arm_relay.HybridConnections_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* hybridConnectionName (string) **required** - The hybrid connection name.
* authorizationRuleName (string) **required** - The authorizationRule name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### HybridConnections_CreateOrUpdateAuthorizationRule
Creates or Updates an authorization rule for a HybridConnection


```js
azure_arm_relay.HybridConnections_CreateOrUpdateAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* hybridConnectionName (string) **required** - The hybrid connection name.
* authorizationRuleName (string) **required** - The authorizationRule name.
* parameters (undefined) **required** - Description of a Namespace AuthorizationRules.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### HybridConnections_ListKeys
Primary and Secondary ConnectionStrings to the HybridConnection.


```js
azure_arm_relay.HybridConnections_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* hybridConnectionName (string) **required** - The hybrid connection name.
* authorizationRuleName (string) **required** - The authorizationRule name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### HybridConnections_RegenerateKeys
Regenerates the Primary or Secondary ConnectionStrings to the HybridConnection


```js
azure_arm_relay.HybridConnections_RegenerateKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* hybridConnectionName (string) **required** - The hybrid connection name.
* authorizationRuleName (string) **required** - The authorizationRule name.
* parameters (undefined) **required** - Parameters supplied to the Regenerate Authorization Rule operation.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### WCFRelays_ListByNamespace
Lists the WCFRelays within the namespace.


```js
azure_arm_relay.WCFRelays_ListByNamespace({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### WCFRelays_Delete
Deletes a WCFRelays .


```js
azure_arm_relay.WCFRelays_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* relayName (string) **required** - The relay name
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### WCFRelays_Get
Returns the description for the specified WCFRelays.


```js
azure_arm_relay.WCFRelays_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* relayName (string) **required** - The relay name
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### WCFRelays_CreateOrUpdate
Creates or Updates a WCFRelay. This operation is idempotent.


```js
azure_arm_relay.WCFRelays_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* relayName (string) **required** - The relay name
* parameters (undefined) **required** - Description of WcfRelays Resource.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### WCFRelays_ListAuthorizationRules
Authorization rules for a WCFRelays.


```js
azure_arm_relay.WCFRelays_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* relayName (string) **required** - The relay name
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### WCFRelays_DeleteAuthorizationRule
Deletes a WCFRelays authorization rule


```js
azure_arm_relay.WCFRelays_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* relayName (string) **required** - The relay name
* authorizationRuleName (string) **required** - The authorizationRule name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### WCFRelays_GetAuthorizationRule
Get authorizationRule for a WCFRelays by name.


```js
azure_arm_relay.WCFRelays_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* relayName (string) **required** - The relay name
* authorizationRuleName (string) **required** - The authorizationRule name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### WCFRelays_CreateOrUpdateAuthorizationRule
Creates or Updates an authorization rule for a WCFRelays


```js
azure_arm_relay.WCFRelays_CreateOrUpdateAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* relayName (string) **required** - The relay name
* authorizationRuleName (string) **required** - The authorizationRule name.
* parameters (undefined) **required** - Description of a Namespace AuthorizationRules.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### WCFRelays_ListKeys
Primary and Secondary ConnectionStrings to the WCFRelays.


```js
azure_arm_relay.WCFRelays_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* relayName (string) **required** - The relay name
* authorizationRuleName (string) **required** - The authorizationRule name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### WCFRelays_RegenerateKeys
Regenerates the Primary or Secondary ConnectionStrings to the WCFRelays


```js
azure_arm_relay.WCFRelays_RegenerateKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The Namespace Name
* relayName (string) **required** - The relay name
* authorizationRuleName (string) **required** - The authorizationRule name.
* parameters (undefined) **required** - Parameters supplied to the Regenerate Authorization Rule operation.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

