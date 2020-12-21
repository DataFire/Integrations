# @datafire/azure_network_azurefirewall

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_azurefirewall
```
```js
let azure_network_azurefirewall = require('@datafire/azure_network_azurefirewall').create({
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

### AzureFirewalls_ListAll
Gets all the Azure Firewalls in a subscription.


```js
azure_network_azurefirewall.AzureFirewalls_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AzureFirewallListResult](#azurefirewalllistresult)

### AzureFirewalls_List
Lists all Azure Firewalls in a resource group.


```js
azure_network_azurefirewall.AzureFirewalls_List({
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
* output [AzureFirewallListResult](#azurefirewalllistresult)

### AzureFirewalls_Delete
Deletes the specified Azure Firewall.


```js
azure_network_azurefirewall.AzureFirewalls_Delete({
  "resourceGroupName": "",
  "azureFirewallName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * azureFirewallName **required** `string`: The name of the Azure Firewall.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### AzureFirewalls_Get
Gets the specified Azure Firewall.


```js
azure_network_azurefirewall.AzureFirewalls_Get({
  "resourceGroupName": "",
  "azureFirewallName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * azureFirewallName **required** `string`: The name of the Azure Firewall.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AzureFirewall](#azurefirewall)

### AzureFirewalls_UpdateTags
Updates tags for an Azure Firewall resource.


```js
azure_network_azurefirewall.AzureFirewalls_UpdateTags({
  "resourceGroupName": "",
  "azureFirewallName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * azureFirewallName **required** `string`: The name of the Azure Firewall.
  * parameters **required** [AzureFirewall](#azurefirewall)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AzureFirewall](#azurefirewall)

### AzureFirewalls_CreateOrUpdate
Creates or updates the specified Azure Firewall.


```js
azure_network_azurefirewall.AzureFirewalls_CreateOrUpdate({
  "resourceGroupName": "",
  "azureFirewallName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * azureFirewallName **required** `string`: The name of the Azure Firewall.
  * parameters **required** [AzureFirewall](#azurefirewall)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AzureFirewall](#azurefirewall)



## Definitions

### AzureFirewall
* AzureFirewall `object`: Azure Firewall resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [AzureFirewallPropertiesFormat](#azurefirewallpropertiesformat)
  * zones `array`: A list of availability zones denoting where the resource needs to come from.
    * items `string`
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### AzureFirewallApplicationRule
* AzureFirewallApplicationRule `object`: Properties of an application rule.
  * description `string`: Description of the rule.
  * fqdnTags `array`: List of FQDN Tags for this rule.
    * items `string`
  * name `string`: Name of the application rule.
  * protocols `array`: Array of ApplicationRuleProtocols.
    * items [AzureFirewallApplicationRuleProtocol](#azurefirewallapplicationruleprotocol)
  * sourceAddresses `array`: List of source IP addresses for this rule.
    * items `string`
  * targetFqdns `array`: List of FQDNs for this rule.
    * items `string`

### AzureFirewallApplicationRuleCollection
* AzureFirewallApplicationRuleCollection `object`: Application rule collection resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
  * properties [AzureFirewallApplicationRuleCollectionPropertiesFormat](#azurefirewallapplicationrulecollectionpropertiesformat)
  * id `string`: Resource ID.

### AzureFirewallApplicationRuleCollectionPropertiesFormat
* AzureFirewallApplicationRuleCollectionPropertiesFormat `object`: Properties of the application rule collection.
  * action [AzureFirewallRCAction](#azurefirewallrcaction)
  * priority `integer`: Priority of the application rule collection resource.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * rules `array`: Collection of rules used by a application rule collection.
    * items [AzureFirewallApplicationRule](#azurefirewallapplicationrule)

### AzureFirewallApplicationRuleProtocol
* AzureFirewallApplicationRuleProtocol `object`: Properties of the application rule protocol.
  * port `integer`: Port number for the protocol, cannot be greater than 64000. This field is optional.
  * protocolType [AzureFirewallApplicationRuleProtocolType](#azurefirewallapplicationruleprotocoltype)

### AzureFirewallApplicationRuleProtocolType
* AzureFirewallApplicationRuleProtocolType `string` (values: Http, Https, Mssql): The protocol type of a Application Rule resource.

### AzureFirewallIPConfiguration
* AzureFirewallIPConfiguration `object`: IP configuration of an Azure Firewall.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [AzureFirewallIPConfigurationPropertiesFormat](#azurefirewallipconfigurationpropertiesformat)
  * id `string`: Resource ID.

### AzureFirewallIPConfigurationPropertiesFormat
* AzureFirewallIPConfigurationPropertiesFormat `object`: Properties of IP configuration of an Azure Firewall.
  * privateIPAddress `string`: The Firewall Internal Load Balancer IP to be used as the next hop in User Defined Routes.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * publicIPAddress `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * subnet `object`: Reference to another subresource.
    * id `string`: Resource ID.

### AzureFirewallListResult
* AzureFirewallListResult `object`: Response for ListAzureFirewalls API service call.
  * nextLink `string`: URL to get the next set of results.
  * value `array`: List of Azure Firewalls in a resource group.
    * items [AzureFirewall](#azurefirewall)

### AzureFirewallNatRCAction
* AzureFirewallNatRCAction `object`: AzureFirewall NAT Rule Collection Action.
  * type [AzureFirewallNatRCActionType](#azurefirewallnatrcactiontype)

### AzureFirewallNatRCActionType
* AzureFirewallNatRCActionType `string` (values: Snat, Dnat): The action type of a NAT rule collection.

### AzureFirewallNatRule
* AzureFirewallNatRule `object`: Properties of a NAT rule.
  * description `string`: Description of the rule.
  * destinationAddresses `array`: List of destination IP addresses for this rule. Supports IP ranges, prefixes, and service tags.
    * items `string`
  * destinationPorts `array`: List of destination ports.
    * items `string`
  * name `string`: Name of the NAT rule.
  * protocols `array`: Array of AzureFirewallNetworkRuleProtocols applicable to this NAT rule.
    * items [AzureFirewallNetworkRuleProtocol](#azurefirewallnetworkruleprotocol)
  * sourceAddresses `array`: List of source IP addresses for this rule.
    * items `string`
  * translatedAddress `string`: The translated address for this NAT rule.
  * translatedPort `string`: The translated port for this NAT rule.

### AzureFirewallNatRuleCollection
* AzureFirewallNatRuleCollection `object`: NAT rule collection resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
  * properties [AzureFirewallNatRuleCollectionProperties](#azurefirewallnatrulecollectionproperties)
  * id `string`: Resource ID.

### AzureFirewallNatRuleCollectionProperties
* AzureFirewallNatRuleCollectionProperties `object`: Properties of the NAT rule collection.
  * action [AzureFirewallNatRCAction](#azurefirewallnatrcaction)
  * priority `integer`: Priority of the NAT rule collection resource.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * rules `array`: Collection of rules used by a NAT rule collection.
    * items [AzureFirewallNatRule](#azurefirewallnatrule)

### AzureFirewallNetworkRule
* AzureFirewallNetworkRule `object`: Properties of the network rule.
  * description `string`: Description of the rule.
  * destinationAddresses `array`: List of destination IP addresses.
    * items `string`
  * destinationPorts `array`: List of destination ports.
    * items `string`
  * name `string`: Name of the network rule.
  * protocols `array`: Array of AzureFirewallNetworkRuleProtocols.
    * items [AzureFirewallNetworkRuleProtocol](#azurefirewallnetworkruleprotocol)
  * sourceAddresses `array`: List of source IP addresses for this rule.
    * items `string`

### AzureFirewallNetworkRuleCollection
* AzureFirewallNetworkRuleCollection `object`: Network rule collection resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
  * properties [AzureFirewallNetworkRuleCollectionPropertiesFormat](#azurefirewallnetworkrulecollectionpropertiesformat)
  * id `string`: Resource ID.

### AzureFirewallNetworkRuleCollectionPropertiesFormat
* AzureFirewallNetworkRuleCollectionPropertiesFormat `object`: Properties of the network rule collection.
  * action [AzureFirewallRCAction](#azurefirewallrcaction)
  * priority `integer`: Priority of the network rule collection resource.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * rules `array`: Collection of rules used by a network rule collection.
    * items [AzureFirewallNetworkRule](#azurefirewallnetworkrule)

### AzureFirewallNetworkRuleProtocol
* AzureFirewallNetworkRuleProtocol `string` (values: TCP, UDP, Any, ICMP): The protocol of a Network Rule resource.

### AzureFirewallPropertiesFormat
* AzureFirewallPropertiesFormat `object`: Properties of the Azure Firewall.
  * applicationRuleCollections `array`: Collection of application rule collections used by Azure Firewall.
    * items [AzureFirewallApplicationRuleCollection](#azurefirewallapplicationrulecollection)
  * firewallPolicy `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * hubIpAddresses [HubIPAddresses](#hubipaddresses)
  * ipConfigurations `array`: IP configuration of the Azure Firewall resource.
    * items [AzureFirewallIPConfiguration](#azurefirewallipconfiguration)
  * natRuleCollections `array`: Collection of NAT rule collections used by Azure Firewall.
    * items [AzureFirewallNatRuleCollection](#azurefirewallnatrulecollection)
  * networkRuleCollections `array`: Collection of network rule collections used by Azure Firewall.
    * items [AzureFirewallNetworkRuleCollection](#azurefirewallnetworkrulecollection)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * threatIntelMode [AzureFirewallThreatIntelMode](#azurefirewallthreatintelmode)
  * virtualHub `object`: Reference to another subresource.
    * id `string`: Resource ID.

### AzureFirewallPublicIPAddress
* AzureFirewallPublicIPAddress `object`: Public IP Address associated with azure firewall.
  * address `string`: Public IP Address value.

### AzureFirewallRCAction
* AzureFirewallRCAction `object`: Properties of the AzureFirewallRCAction.
  * type [AzureFirewallRCActionType](#azurefirewallrcactiontype)

### AzureFirewallRCActionType
* AzureFirewallRCActionType `string` (values: Allow, Deny): The action type of a rule collection.

### AzureFirewallThreatIntelMode
* AzureFirewallThreatIntelMode `string` (values: Alert, Deny, Off): The operation mode for Threat Intel.

### HubIPAddresses
* HubIPAddresses `object`: IP addresses associated with azure firewall.
  * privateIPAddress `string`: Private IP Address associated with azure firewall.
  * publicIPAddresses `array`: List of Public IP addresses associated with azure firewall.
    * items [AzureFirewallPublicIPAddress](#azurefirewallpublicipaddress)


