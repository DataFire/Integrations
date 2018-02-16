# @datafire/azure_relay

Client library for Relay

## Installation and Usage
```bash
npm install --save @datafire/azure_relay
```
```js
let azure_relay = require('@datafire/azure_relay').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_relay.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Use these API to manage Azure Relay resources through Azure Resource Manager.

## Actions

### Operations_List
Lists all available Relay REST API operations.


```js
azure_relay.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.

#### Output
* output [OperationListResult](#operationlistresult)

### Namespaces_CheckNameAvailability
Check the specified namespace name availability.


```js
azure_relay.Namespaces_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * parameters **required** [CheckNameAvailability](#checknameavailability)

#### Output
* output [CheckNameAvailabilityResult](#checknameavailabilityresult)

### Namespaces_List
Lists all the available namespaces within the subscription regardless of the resourceGroups.


```js
azure_relay.Namespaces_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RelayNamespaceListResult](#relaynamespacelistresult)

### Namespaces_ListByResourceGroup
Lists all the available namespaces within the ResourceGroup.


```js
azure_relay.Namespaces_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RelayNamespaceListResult](#relaynamespacelistresult)

### Namespaces_Delete
Deletes an existing namespace. This operation also removes all associated resources under the namespace.


```js
azure_relay.Namespaces_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Namespaces_Get
Returns the description for the specified namespace.


```js
azure_relay.Namespaces_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RelayNamespace](#relaynamespace)

### Namespaces_Update
Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.


```js
azure_relay.Namespaces_Update({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * parameters **required** [RelayUpdateParameters](#relayupdateparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RelayNamespace](#relaynamespace)

### Namespaces_CreateOrUpdate
Create Azure Relay namespace.


```js
azure_relay.Namespaces_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * parameters **required** [RelayNamespace](#relaynamespace)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RelayNamespace](#relaynamespace)

### Namespaces_ListAuthorizationRules
Authorization rules for a namespace.


```js
azure_relay.Namespaces_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRuleListResult](#authorizationrulelistresult)

### Namespaces_DeleteAuthorizationRule
Deletes a namespace authorization rule.


```js
azure_relay.Namespaces_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Namespaces_GetAuthorizationRule
Authorization rule for a namespace by name.


```js
azure_relay.Namespaces_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRule](#authorizationrule)

### Namespaces_CreateOrUpdateAuthorizationRule
Creates or updates an authorization rule for a namespace.


```js
azure_relay.Namespaces_CreateOrUpdateAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * parameters **required** [AuthorizationRule](#authorizationrule)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRule](#authorizationrule)

### Namespaces_ListKeys
Primary and secondary connection strings to the namespace.


```js
azure_relay.Namespaces_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)

### Namespaces_RegenerateKeys
Regenerates the primary or secondary connection strings to the namespace.


```js
azure_relay.Namespaces_RegenerateKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * parameters **required** [RegenerateAccessKeyParameters](#regenerateaccesskeyparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)

### HybridConnections_ListByNamespace
Lists the hybrid connection within the namespace.


```js
azure_relay.HybridConnections_ListByNamespace({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [HybridConnectionListResult](#hybridconnectionlistresult)

### HybridConnections_Delete
Deletes a hybrid connection.


```js
azure_relay.HybridConnections_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### HybridConnections_Get
Returns the description for the specified hybrid connection.


```js
azure_relay.HybridConnections_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [HybridConnection](#hybridconnection)

### HybridConnections_CreateOrUpdate
Creates or updates a service hybrid connection. This operation is idempotent.


```js
azure_relay.HybridConnections_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * parameters **required** [HybridConnection](#hybridconnection)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [HybridConnection](#hybridconnection)

### HybridConnections_ListAuthorizationRules
Authorization rules for a hybrid connection.


```js
azure_relay.HybridConnections_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRuleListResult](#authorizationrulelistresult)

### HybridConnections_DeleteAuthorizationRule
Deletes a hybrid connection authorization rule.


```js
azure_relay.HybridConnections_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### HybridConnections_GetAuthorizationRule
Hybrid connection authorization rule for a hybrid connection by name.


```js
azure_relay.HybridConnections_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRule](#authorizationrule)

### HybridConnections_CreateOrUpdateAuthorizationRule
Creates or updates an authorization rule for a hybrid connection.


```js
azure_relay.HybridConnections_CreateOrUpdateAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * parameters **required** [AuthorizationRule](#authorizationrule)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRule](#authorizationrule)

### HybridConnections_ListKeys
Primary and secondary connection strings to the hybrid connection.


```js
azure_relay.HybridConnections_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)

### HybridConnections_RegenerateKeys
Regenerates the primary or secondary connection strings to the hybrid connection.


```js
azure_relay.HybridConnections_RegenerateKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "hybridConnectionName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * parameters **required** [RegenerateAccessKeyParameters](#regenerateaccesskeyparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)

### WCFRelays_ListByNamespace
Lists the WCF relays within the namespace.


```js
azure_relay.WCFRelays_ListByNamespace({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [WcfRelaysListResult](#wcfrelayslistresult)

### WCFRelays_Delete
Deletes a WCF relay.


```js
azure_relay.WCFRelays_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * relayName **required** `string`: The relay name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### WCFRelays_Get
Returns the description for the specified WCF relay.


```js
azure_relay.WCFRelays_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * relayName **required** `string`: The relay name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [WcfRelay](#wcfrelay)

### WCFRelays_CreateOrUpdate
Creates or updates a WCF relay. This operation is idempotent.


```js
azure_relay.WCFRelays_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * relayName **required** `string`: The relay name.
  * parameters **required** [WcfRelay](#wcfrelay)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [WcfRelay](#wcfrelay)

### WCFRelays_ListAuthorizationRules
Authorization rules for a WCF relay.


```js
azure_relay.WCFRelays_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * relayName **required** `string`: The relay name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRuleListResult](#authorizationrulelistresult)

### WCFRelays_DeleteAuthorizationRule
Deletes a WCF relay authorization rule.


```js
azure_relay.WCFRelays_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * relayName **required** `string`: The relay name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### WCFRelays_GetAuthorizationRule
Get authorizationRule for a WCF relay by name.


```js
azure_relay.WCFRelays_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * relayName **required** `string`: The relay name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRule](#authorizationrule)

### WCFRelays_CreateOrUpdateAuthorizationRule
Creates or updates an authorization rule for a WCF relay.


```js
azure_relay.WCFRelays_CreateOrUpdateAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * relayName **required** `string`: The relay name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * parameters **required** [AuthorizationRule](#authorizationrule)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRule](#authorizationrule)

### WCFRelays_ListKeys
Primary and secondary connection strings to the WCF relay.


```js
azure_relay.WCFRelays_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * relayName **required** `string`: The relay name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)

### WCFRelays_RegenerateKeys
Regenerates the primary or secondary connection strings to the WCF relay.


```js
azure_relay.WCFRelays_RegenerateKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "relayName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * relayName **required** `string`: The relay name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * parameters **required** [RegenerateAccessKeyParameters](#regenerateaccesskeyparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)



## Definitions

### AccessKeys
* AccessKeys `object`: Namespace/Relay Connection String
  * keyName `string`: A string that describes the authorization rule.
  * primaryConnectionString `string`: Primary connection string of the created namespace authorization rule.
  * primaryKey `string`: A base64-encoded 256-bit primary key for signing and validating the SAS token.
  * secondaryConnectionString `string`: Secondary connection string of the created namespace authorization rule.
  * secondaryKey `string`: A base64-encoded 256-bit secondary key for signing and validating the SAS token.

### AuthorizationRule
* AuthorizationRule `object`: Description of a namespace authorization rule.
  * properties **required** `object`: Authorization rule properties.
    * rights **required** `array`: The rights associated with the rule.
      * items `string` (values: Manage, Send, Listen)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### AuthorizationRuleListResult
* AuthorizationRuleListResult `object`: The response from the list namespace operation.
  * nextLink `string`: Link to the next set of results. Not empty if value contains incomplete list of authorization rules.
  * value `array`: Result of the list authorization rules operation.
    * items [AuthorizationRule](#authorizationrule)

### CheckNameAvailability
* CheckNameAvailability `object`: Description of the check name availability request properties.
  * name **required** `string`: The namespace name to check for availability. The namespace name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number.

### CheckNameAvailabilityResult
* CheckNameAvailabilityResult `object`: Description of the check name availability request properties.
  * message `string`: The detailed info regarding the reason associated with the namespace.
  * nameAvailable `boolean`: Value indicating namespace is available. Returns true if the namespace is available; otherwise, false.
  * reason [UnavailableReason](#unavailablereason)

### ErrorResponse
* ErrorResponse `object`: Error reponse indicates Relay service is not able to process the incoming request. The reason is provided in the error message.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.

### HybridConnection
* HybridConnection `object`: Description of hybrid connection resource.
  * properties `object`: Properties of the HybridConnection.
    * createdAt `string`: The time the hybrid connection was created.
    * listenerCount `integer`: The number of listeners for this hybrid connection. Note that min : 1 and max:25 are supported.
    * requiresClientAuthorization `boolean`: Returns true if client authorization is needed for this hybrid connection; otherwise, false.
    * updatedAt `string`: The time the namespace was updated.
    * userMetadata `string`: The usermetadata is a placeholder to store user-defined string data for the hybrid connection endpoint. For example, it can be used to store descriptive data, such as a list of teams and their contact information. Also, user-defined configuration settings can be stored.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### HybridConnectionListResult
* HybridConnectionListResult `object`: The response of the list hybrid connection operation.
  * nextLink `string`: Link to the next set of results. Not empty if value contains incomplete list hybrid connection operation.
  * value `array`: Result of the list hybrid connections.
    * items [HybridConnection](#hybridconnection)

### Operation
* Operation `object`: A Relay REST API operation.
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Relay.
    * resource `string`: Resource on which the operation is performed: Invoice, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list Relay operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Relay operations supported by resource provider.
    * items [Operation](#operation)

### RegenerateAccessKeyParameters
* RegenerateAccessKeyParameters `object`: Parameters supplied to the regenerate authorization rule operation, specifies which key neeeds to be reset.
  * key `string`: Optional. If the key value is provided, this is set to key type, or autogenerated key value set for key type.
  * keyType **required** `string` (values: PrimaryKey, SecondaryKey): The access key to regenerate.

### RelayNamespace
* RelayNamespace `object`: Description of a namespace resource.
  * properties [RelayNamespaceProperties](#relaynamespaceproperties)
  * sku [Sku](#sku)
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RelayNamespaceListResult
* RelayNamespaceListResult `object`: The response from the list namespace operation.
  * nextLink `string`: Link to the next set of results. Not empty if value contains incomplete list of namespaces.
  * value `array`: Result of the list namespace operation.
    * items [RelayNamespace](#relaynamespace)

### RelayNamespaceProperties
* RelayNamespaceProperties `object`: Properties of the namespace.
  * createdAt `string`: The time the namespace was created.
  * metricId `string`: Identifier for Azure Insights metrics.
  * provisioningState `string` (values: Created, Succeeded, Deleted, Failed, Updating, Unknown)
  * serviceBusEndpoint `string`: Endpoint you can use to perform Service Bus operations.
  * updatedAt `string`: The time the namespace was updated.

### RelayUpdateParameters
* RelayUpdateParameters `object`: Description of a namespace resource.
  * properties [RelayNamespaceProperties](#relaynamespaceproperties)
  * sku [Sku](#sku)
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Resource
* Resource `object`: The resource definition.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ResourceNamespacePatch
* ResourceNamespacePatch `object`: Definition of resource.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Sku
* Sku `object`: SKU of the namespace.
  * name **required** `string` (values: Standard): Name of this SKU.
  * tier `string` (values: Standard): The tier of this SKU.

### TrackedResource
* TrackedResource `object`: Definition of resource.
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### UnavailableReason
* UnavailableReason `string` (values: None, InvalidName, SubscriptionIsDisabled, NameInUse, NameInLockdown, TooManyNamespaceInCurrentSubscription): Specifies the reason for the unavailability of the service.

### WcfRelay
* WcfRelay `object`: Description of the WCF relay resource.
  * properties `object`: Properties of the WCF relay.
    * createdAt `string`: The time the WCF relay was created.
    * isDynamic `boolean`: Returns true if the relay is dynamic; otherwise, false.
    * listenerCount `integer`: The number of listeners for this relay. Note that min :1 and max:25 are supported.
    * relayType `string` (values: NetTcp, Http): WCF relay type.
    * requiresClientAuthorization `boolean`: Returns true if client authorization is needed for this relay; otherwise, false.
    * requiresTransportSecurity `boolean`: Returns true if transport security is needed for this relay; otherwise, false.
    * updatedAt `string`: The time the namespace was updated.
    * userMetadata `string`: The usermetadata is a placeholder to store user-defined string data for the WCF Relay endpoint. For example, it can be used to store descriptive data, such as list of teams and their contact information. Also, user-defined configuration settings can be stored.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### WcfRelaysListResult
* WcfRelaysListResult `object`: The response of the list WCF relay operation.
  * nextLink `string`: Link to the next set of results. Not empty if value contains incomplete list of WCF relays.
  * value `array`: Result of the list WCF relay operation.
    * items [WcfRelay](#wcfrelay)


