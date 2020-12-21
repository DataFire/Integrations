# @datafire/azure_network_firewallpolicy

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_firewallpolicy
```
```js
let azure_network_firewallpolicy = require('@datafire/azure_network_firewallpolicy').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Microsoft Azure Network management API provides a RESTful set of web services that interact with Microsoft Azure Networks service to manage your network resources. The API has entities that capture the relationship between an end user and the Microsoft Azure Networks service.

## Actions

### FirewallPolicies_ListAll
Gets all the Firewall Policies in a subscription.


```js
azure_network_firewallpolicy.FirewallPolicies_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [FirewallPolicyListResult](#firewallpolicylistresult)

### FirewallPolicies_List
Lists all Firewall Policies in a resource group.


```js
azure_network_firewallpolicy.FirewallPolicies_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [FirewallPolicyListResult](#firewallpolicylistresult)

### FirewallPolicies_Delete
Deletes the specified Firewall Policy.


```js
azure_network_firewallpolicy.FirewallPolicies_Delete({
  "resourceGroupName": "",
  "firewallPolicyName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * firewallPolicyName **required** `string`: The name of the Firewall Policy.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### FirewallPolicies_Get
Gets the specified Firewall Policy.


```js
azure_network_firewallpolicy.FirewallPolicies_Get({
  "resourceGroupName": "",
  "firewallPolicyName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * firewallPolicyName **required** `string`: The name of the Firewall Policy.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output [FirewallPolicy](#firewallpolicy)

### FirewallPolicies_UpdateTags
Updates a Firewall Policy Tags.


```js
azure_network_firewallpolicy.FirewallPolicies_UpdateTags({
  "subscriptionId": "",
  "resourceGroupName": "",
  "firewallPolicyName": "",
  "api-version": "",
  "firewallPolicyParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name of the Firewall Policy.
  * firewallPolicyName **required** `string`: The name of the Firewall Policy being updated.
  * api-version **required** `string`: Client API version.
  * firewallPolicyParameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.

#### Output
* output [FirewallPolicy](#firewallpolicy)

### FirewallPolicies_CreateOrUpdate
Creates or updates the specified Firewall Policy.


```js
azure_network_firewallpolicy.FirewallPolicies_CreateOrUpdate({
  "resourceGroupName": "",
  "firewallPolicyName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * firewallPolicyName **required** `string`: The name of the Firewall Policy.
  * parameters **required** [FirewallPolicy](#firewallpolicy)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [FirewallPolicy](#firewallpolicy)

### FirewallPolicyRuleGroups_List
Lists all FirewallPolicyRuleGroups in a FirewallPolicy resource.


```js
azure_network_firewallpolicy.FirewallPolicyRuleGroups_List({
  "resourceGroupName": "",
  "firewallPolicyName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * firewallPolicyName **required** `string`: The name of the Firewall Policy.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [FirewallPolicyRuleGroupListResult](#firewallpolicyrulegrouplistresult)

### FirewallPolicyRuleGroups_Delete
Deletes the specified FirewallPolicyRuleGroup.


```js
azure_network_firewallpolicy.FirewallPolicyRuleGroups_Delete({
  "resourceGroupName": "",
  "firewallPolicyName": "",
  "ruleGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * firewallPolicyName **required** `string`: The name of the Firewall Policy.
  * ruleGroupName **required** `string`: The name of the FirewallPolicyRuleGroup.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### FirewallPolicyRuleGroups_Get
Gets the specified FirewallPolicyRuleGroup.


```js
azure_network_firewallpolicy.FirewallPolicyRuleGroups_Get({
  "resourceGroupName": "",
  "firewallPolicyName": "",
  "ruleGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * firewallPolicyName **required** `string`: The name of the Firewall Policy.
  * ruleGroupName **required** `string`: The name of the FirewallPolicyRuleGroup.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [FirewallPolicyRuleGroup](#firewallpolicyrulegroup)

### FirewallPolicyRuleGroups_CreateOrUpdate
Creates or updates the specified FirewallPolicyRuleGroup.


```js
azure_network_firewallpolicy.FirewallPolicyRuleGroups_CreateOrUpdate({
  "resourceGroupName": "",
  "firewallPolicyName": "",
  "ruleGroupName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * firewallPolicyName **required** `string`: The name of the Firewall Policy.
  * ruleGroupName **required** `string`: The name of the FirewallPolicyRuleGroup.
  * parameters **required** [FirewallPolicyRuleGroup](#firewallpolicyrulegroup)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [FirewallPolicyRuleGroup](#firewallpolicyrulegroup)



## Definitions

### ApplicationRuleCondition
* ApplicationRuleCondition `object`: Rule condition of type application.
  * destinationAddresses `array`: List of destination IP addresses or Service Tags.
    * items `string`
  * fqdnTags `array`: List of FQDN Tags for this rule condition.
    * items `string`
  * protocols `array`: Array of Application Protocols.
    * items [FirewallPolicyRuleConditionApplicationProtocol](#firewallpolicyruleconditionapplicationprotocol)
  * sourceAddresses `array`: List of source IP addresses for this rule.
    * items `string`
  * targetFqdns `array`: List of FQDNs for this rule condition.
    * items `string`
  * description `string`: Description of the rule condition.
  * name `string`: Name of the rule condition.
  * ruleConditionType **required** `string` (values: ApplicationRuleCondition, NetworkRuleCondition): Rule Condition Type.

### FirewallPolicy
* FirewallPolicy `object`: FirewallPolicy Resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [FirewallPolicyPropertiesFormat](#firewallpolicypropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### FirewallPolicyFilterRule
* FirewallPolicyFilterRule `object`: Firewall Policy Filter Rule.
  * action [FirewallPolicyFilterRuleAction](#firewallpolicyfilterruleaction)
  * ruleConditions `array`: Collection of rule conditions used by a rule.
    * items [FirewallPolicyRuleCondition](#firewallpolicyrulecondition)
  * name `string`: The name of the rule.
  * priority `integer`: Priority of the Firewall Policy Rule resource.
  * ruleType **required** `string` (values: FirewallPolicyNatRule, FirewallPolicyFilterRule): The type of the rule.

### FirewallPolicyFilterRuleAction
* FirewallPolicyFilterRuleAction `object`: Properties of the FirewallPolicyFilterRuleAction.
  * type [FirewallPolicyFilterRuleActionType](#firewallpolicyfilterruleactiontype)

### FirewallPolicyFilterRuleActionType
* FirewallPolicyFilterRuleActionType `string` (values: Allow, Deny, Alert ): The action type of a rule.

### FirewallPolicyListResult
* FirewallPolicyListResult `object`: Response for ListFirewallPolicies API service call.
  * nextLink `string`: URL to get the next set of results.
  * value `array`: List of Firewall Policies in a resource group.
    * items [FirewallPolicy](#firewallpolicy)

### FirewallPolicyNatRule
* FirewallPolicyNatRule `object`: Firewall Policy NAT Rule.
  * action [FirewallPolicyNatRuleAction](#firewallpolicynatruleaction)
  * ruleCondition [FirewallPolicyRuleCondition](#firewallpolicyrulecondition)
  * translatedAddress `string`: The translated address for this NAT rule.
  * translatedPort `string`: The translated port for this NAT rule.
  * name `string`: The name of the rule.
  * priority `integer`: Priority of the Firewall Policy Rule resource.
  * ruleType **required** `string` (values: FirewallPolicyNatRule, FirewallPolicyFilterRule): The type of the rule.

### FirewallPolicyNatRuleAction
* FirewallPolicyNatRuleAction `object`: Properties of the FirewallPolicyNatRuleAction.
  * type [FirewallPolicyNatRuleActionType](#firewallpolicynatruleactiontype)

### FirewallPolicyNatRuleActionType
* FirewallPolicyNatRuleActionType `string` (values: DNAT, SNAT): The action type of a rule.

### FirewallPolicyPropertiesFormat
* FirewallPolicyPropertiesFormat `object`: Firewall Policy definition.
  * basePolicy `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * childPolicies `array`: List of references to Child Firewall Policies.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * firewalls `array`: List of references to Azure Firewalls that this Firewall Policy is associated with.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * ruleGroups `array`: List of references to FirewallPolicyRuleGroups.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * threatIntelMode `string` (values: Alert, Deny, Off): The operation mode for Threat Intel.

### FirewallPolicyRule
* FirewallPolicyRule `object`: Properties of the rule.
  * name `string`: The name of the rule.
  * priority `integer`: Priority of the Firewall Policy Rule resource.
  * ruleType **required** `string` (values: FirewallPolicyNatRule, FirewallPolicyFilterRule): The type of the rule.

### FirewallPolicyRuleCondition
* FirewallPolicyRuleCondition `object`: Properties of a rule.
  * description `string`: Description of the rule condition.
  * name `string`: Name of the rule condition.
  * ruleConditionType **required** `string` (values: ApplicationRuleCondition, NetworkRuleCondition): Rule Condition Type.

### FirewallPolicyRuleConditionApplicationProtocol
* FirewallPolicyRuleConditionApplicationProtocol `object`: Properties of the application rule protocol.
  * port `integer`: Port number for the protocol, cannot be greater than 64000.
  * protocolType [FirewallPolicyRuleConditionApplicationProtocolType](#firewallpolicyruleconditionapplicationprotocoltype)

### FirewallPolicyRuleConditionApplicationProtocolType
* FirewallPolicyRuleConditionApplicationProtocolType `string` (values: Http, Https): The application protocol type of a Rule condition.

### FirewallPolicyRuleConditionNetworkProtocol
* FirewallPolicyRuleConditionNetworkProtocol `string` (values: TCP, UDP, Any, ICMP): The Network protocol of a Rule condition.

### FirewallPolicyRuleGroup
* FirewallPolicyRuleGroup `object`: Rule Group resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [FirewallPolicyRuleGroupProperties](#firewallpolicyrulegroupproperties)
  * type `string`: Rule Group type.
  * id `string`: Resource ID.

### FirewallPolicyRuleGroupListResult
* FirewallPolicyRuleGroupListResult `object`: Response for ListFirewallPolicyRuleGroups API service call.
  * nextLink `string`: URL to get the next set of results.
  * value `array`: List of FirewallPolicyRuleGroups in a FirewallPolicy.
    * items [FirewallPolicyRuleGroup](#firewallpolicyrulegroup)

### FirewallPolicyRuleGroupProperties
* FirewallPolicyRuleGroupProperties `object`: Properties of the rule group.
  * priority `integer`: Priority of the Firewall Policy Rule Group resource.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * rules `array`: Group of Firewall Policy rules.
    * items [FirewallPolicyRule](#firewallpolicyrule)

### NetworkRuleCondition
* NetworkRuleCondition `object`: Rule condition of type network.
  * destinationAddresses `array`: List of destination IP addresses or Service Tags.
    * items `string`
  * destinationPorts `array`: List of destination ports.
    * items `string`
  * ipProtocols `array`: Array of FirewallPolicyRuleConditionNetworkProtocols.
    * items [FirewallPolicyRuleConditionNetworkProtocol](#firewallpolicyruleconditionnetworkprotocol)
  * sourceAddresses `array`: List of source IP addresses for this rule.
    * items `string`
  * description `string`: Description of the rule condition.
  * name `string`: Name of the rule condition.
  * ruleConditionType **required** `string` (values: ApplicationRuleCondition, NetworkRuleCondition): Rule Condition Type.


