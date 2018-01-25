# @datafire/azure_arm_relay

Client library for Relay

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_relay
```
```js
let azure_arm_relay = require('@datafire/azure_arm_relay').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_relay.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationListResult](#operationlistresult)

### Namespaces_CheckNameAvailability
Check the give namespace name availability.


```js
azure_arm_relay.Namespaces_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * parameters **required** [CheckNameAvailability](#checknameavailability)

#### Output
* output [CheckNameAvailabilityResult](#checknameavailabilityresult)

### Namespaces_List
Lists all the available namespaces within the subscription irrespective of the resourceGroups.


```js
azure_arm_relay.Namespaces_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RelayNamespaceListResult](#relaynamespacelistresult)

### Namespaces_ListByResourceGroup
Lists all the available namespaces within the ResourceGroup.


```js
azure_arm_relay.Namespaces_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RelayNamespaceListResult](#relaynamespacelistresult)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RelayNamespace](#relaynamespace)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * parameters **required** [RelayNamespaceUpdateParameter](#relaynamespaceupdateparameter)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RelayNamespace](#relaynamespace)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * parameters **required** [RelayNamespace](#relaynamespace)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RelayNamespace](#relaynamespace)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRuleListResult](#authorizationrulelistresult)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * authorizationRuleName **required** `string`: The authorizationRule name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * authorizationRuleName **required** `string`: The authorizationRule name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRule](#authorizationrule)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * authorizationRuleName **required** `string`: The authorizationRule name.
  * parameters **required** [AuthorizationRule](#authorizationrule)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRule](#authorizationrule)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * authorizationRuleName **required** `string`: The authorizationRule name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRuleKeys](#authorizationrulekeys)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * authorizationRuleName **required** `string`: The authorizationRule name.
  * parameters **required** [RegenerateKeysParameters](#regeneratekeysparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRuleKeys](#authorizationrulekeys)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [HybridConnectionListResult](#hybridconnectionlistresult)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [HybridConnection](#hybridconnection)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * parameters **required** [HybridConnection](#hybridconnection)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [HybridConnection](#hybridconnection)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRuleListResult](#authorizationrulelistresult)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * authorizationRuleName **required** `string`: The authorizationRule name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * authorizationRuleName **required** `string`: The authorizationRule name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRule](#authorizationrule)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * authorizationRuleName **required** `string`: The authorizationRule name.
  * parameters **required** [AuthorizationRule](#authorizationrule)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRule](#authorizationrule)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * authorizationRuleName **required** `string`: The authorizationRule name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRuleKeys](#authorizationrulekeys)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * hybridConnectionName **required** `string`: The hybrid connection name.
  * authorizationRuleName **required** `string`: The authorizationRule name.
  * parameters **required** [RegenerateKeysParameters](#regeneratekeysparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRuleKeys](#authorizationrulekeys)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [WcfRelaysListResult](#wcfrelayslistresult)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * relayName **required** `string`: The relay name
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * relayName **required** `string`: The relay name
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [WcfRelay](#wcfrelay)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * relayName **required** `string`: The relay name
  * parameters **required** [WcfRelay](#wcfrelay)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [WcfRelay](#wcfrelay)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * relayName **required** `string`: The relay name
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRuleListResult](#authorizationrulelistresult)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * relayName **required** `string`: The relay name
  * authorizationRuleName **required** `string`: The authorizationRule name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * relayName **required** `string`: The relay name
  * authorizationRuleName **required** `string`: The authorizationRule name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRule](#authorizationrule)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * relayName **required** `string`: The relay name
  * authorizationRuleName **required** `string`: The authorizationRule name.
  * parameters **required** [AuthorizationRule](#authorizationrule)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRule](#authorizationrule)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * relayName **required** `string`: The relay name
  * authorizationRuleName **required** `string`: The authorizationRule name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRuleKeys](#authorizationrulekeys)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace Name
  * relayName **required** `string`: The relay name
  * authorizationRuleName **required** `string`: The authorizationRule name.
  * parameters **required** [RegenerateKeysParameters](#regeneratekeysparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRuleKeys](#authorizationrulekeys)



## Definitions

### AuthorizationRule
* AuthorizationRule `object`: Description of a Namespace AuthorizationRules.
  * properties **required** [AuthorizationRuleProperties](#authorizationruleproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### AuthorizationRuleKeys
* AuthorizationRuleKeys `object`: Namespace/Relay Connection String
  * keyName `string`: A string that describes the authorization rule
  * primaryConnectionString `string`: PrimaryConnectionString of the created Namespace AuthorizationRule.
  * primaryKey `string`: A base64-encoded 256-bit primary key for signing and validating the SAS token
  * secondaryConnectionString `string`: SecondaryConnectionString of the created Namespace AuthorizationRule
  * secondaryKey `string`: A base64-encoded 256-bit secondary key for signing and validating the SAS token

### AuthorizationRuleListResult
* AuthorizationRuleListResult `object`: The response of the List Namespace operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of AuthorizationRules
  * value `array`: Result of the List AuthorizationRules operation.
    * items [AuthorizationRule](#authorizationrule)

### AuthorizationRuleProperties
* AuthorizationRuleProperties `object`: AuthorizationRule properties.
  * rights **required** `array`: The rights associated with the rule.
    * items `string` (values: Manage, Send, Listen)

### CheckNameAvailability
* CheckNameAvailability `object`: Description of a Check Name availability request properties.
  * name **required** `string`: The Name to check the namespce name availability and The namespace name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number.

### CheckNameAvailabilityResult
* CheckNameAvailabilityResult `object`: Description of a Check Name availability request properties.
  * message `string`: The detailed info regarding the reason associated with the namespace.
  * nameAvailable `boolean`: Value indicating namespace is availability, true if the namespace is available; otherwise, false.
  * reason [UnavailableReason](#unavailablereason)

### ErrorResponse
* ErrorResponse `object`: Error reponse indicates Relay service is not able to process the incoming request. The reason is provided in the error message.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.

### HybridConnection
* HybridConnection `object`: Description of HybridConnection Resource.
  * properties [HybridConnectionProperties](#hybridconnectionproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### HybridConnectionListResult
* HybridConnectionListResult `object`: The response of the List HybridConnection operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of HybridConnection operation
  * value `array`: Result of the List HybridConnection .
    * items [HybridConnection](#hybridconnection)

### HybridConnectionProperties
* HybridConnectionProperties `object`: Properties of the HybridConnection.
  * createdAt `string`: The time the HybridConnection was created.
  * listenerCount `integer`: The number of listeners for this HybridConnection. min : 1 and max:25 supported
  * requiresClientAuthorization `boolean`: true if client authorization is needed for this HybridConnection; otherwise, false.
  * updatedAt `string`: The time the namespace was updated.
  * userMetadata `string`: usermetadata is a placeholder to store user-defined string data for the HybridConnection endpoint.e.g. it can be used to store  descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored.

### Operation
* Operation `object`: A EventHub REST API operation
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.EventHub
    * resource `string`: Resource on which the operation is performed: Invoice, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list EventHub operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of EventHub operations supported by the Microsoft.EventHub resource provider.
    * items [Operation](#operation)

### RegenerateKeysParameters
* RegenerateKeysParameters `object`: Parameters supplied to the Regenerate Authorization Rule operation.
  * policyKey `string` (values: PrimaryKey, SecondaryKey): Key that needs to be regenerated.

### RelayNamespace
* RelayNamespace `object`: Description of a Namespace resource.
  * properties [RelayNamespaceProperties](#relaynamespaceproperties)
  * sku [Sku](#sku)
  * location **required** `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### RelayNamespaceListResult
* RelayNamespaceListResult `object`: The response of the List Namespace operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of Namespaces
  * value `array`: Result of the List Namespace operation.
    * items [RelayNamespace](#relaynamespace)

### RelayNamespaceProperties
* RelayNamespaceProperties `object`: Properties of the Namespace.
  * createdAt `string`: The time the namespace was created.
  * metricId `string`: Identifier for Azure Insights metrics
  * provisioningState `string`: Provisioning state of the namespace.
  * serviceBusEndpoint `string`: Endpoint you can use to perform Service Bus operations.
  * updatedAt `string`: The time the namespace was updated.

### RelayNamespaceUpdateParameter
* RelayNamespaceUpdateParameter `object`: Parameters supplied to the Patch Namespace operation.
  * sku [Sku](#sku)
  * tags `object`: Resource tags

### Resource
* Resource `object`: The Resource definition
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### Sku
* Sku `object`: Sku of the Namespace.
  * name **required** `string` (values: Standard): Name of this Sku
  * tier **required** `string` (values: Standard): The tier of this particular SKU

### TrackedResource
* TrackedResource `object`: Definition of Resource
  * location **required** `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### UnavailableReason
* UnavailableReason `string` (values: None, InvalidName, SubscriptionIsDisabled, NameInUse, NameInLockdown, TooManyNamespaceInCurrentSubscription): Specifies the reason for the unavailability of the service.

### WcfRelay
* WcfRelay `object`: Description of WcfRelays Resource.
  * properties [WcfRelayProperties](#wcfrelayproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### WcfRelayProperties
* WcfRelayProperties `object`: Properties of the WcfRelay Properties.
  * createdAt `string`: The time the WCFRelay was created.
  * isDynamic `boolean`: true if the relay is dynamic; otherwise, false.
  * listenerCount `integer`: The number of listeners for this relay. min : 1 and max:25 supported
  * relayType `string` (values: NetTcp, Http): WCFRelay Type.
  * requiresClientAuthorization `boolean`: true if client authorization is needed for this relay; otherwise, false.
  * requiresTransportSecurity `boolean`: true if transport security is needed for this relay; otherwise, false.
  * updatedAt `string`: The time the namespace was updated.
  * userMetadata `string`: usermetadata is a placeholder to store user-defined string data for the HybridConnection endpoint.e.g. it can be used to store  descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored.

### WcfRelaysListResult
* WcfRelaysListResult `object`: The response of the List WcfRelays operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of WcfRelays operation
  * value `array`: Result of the List WcfRelays .
    * items [WcfRelay](#wcfrelay)


