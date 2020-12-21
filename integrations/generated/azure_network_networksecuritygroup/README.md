# @datafire/azure_network_networksecuritygroup

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_networksecuritygroup
```
```js
let azure_network_networksecuritygroup = require('@datafire/azure_network_networksecuritygroup').create({
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

### NetworkSecurityGroups_ListAll
Gets all network security groups in a subscription.


```js
azure_network_networksecuritygroup.NetworkSecurityGroups_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkSecurityGroupListResult](#networksecuritygrouplistresult)

### NetworkSecurityGroups_List
Gets all network security groups in a resource group.


```js
azure_network_networksecuritygroup.NetworkSecurityGroups_List({
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
* output [NetworkSecurityGroupListResult](#networksecuritygrouplistresult)

### NetworkSecurityGroups_Delete
Deletes the specified network security group.


```js
azure_network_networksecuritygroup.NetworkSecurityGroups_Delete({
  "resourceGroupName": "",
  "networkSecurityGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkSecurityGroupName **required** `string`: The name of the network security group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### NetworkSecurityGroups_Get
Gets the specified network security group.


```js
azure_network_networksecuritygroup.NetworkSecurityGroups_Get({
  "resourceGroupName": "",
  "networkSecurityGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkSecurityGroupName **required** `string`: The name of the network security group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output [NetworkSecurityGroup](#networksecuritygroup)

### NetworkSecurityGroups_UpdateTags
Updates a network security group tags.


```js
azure_network_networksecuritygroup.NetworkSecurityGroups_UpdateTags({
  "resourceGroupName": "",
  "networkSecurityGroupName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkSecurityGroupName **required** `string`: The name of the network security group.
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkSecurityGroup](#networksecuritygroup)

### NetworkSecurityGroups_CreateOrUpdate
Creates or updates a network security group in the specified resource group.


```js
azure_network_networksecuritygroup.NetworkSecurityGroups_CreateOrUpdate({
  "resourceGroupName": "",
  "networkSecurityGroupName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkSecurityGroupName **required** `string`: The name of the network security group.
  * parameters **required** [NetworkSecurityGroup](#networksecuritygroup)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkSecurityGroup](#networksecuritygroup)

### DefaultSecurityRules_List
Gets all default security rules in a network security group.


```js
azure_network_networksecuritygroup.DefaultSecurityRules_List({
  "resourceGroupName": "",
  "networkSecurityGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkSecurityGroupName **required** `string`: The name of the network security group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SecurityRuleListResult](#securityrulelistresult)

### DefaultSecurityRules_Get
Get the specified default network security rule.


```js
azure_network_networksecuritygroup.DefaultSecurityRules_Get({
  "resourceGroupName": "",
  "networkSecurityGroupName": "",
  "defaultSecurityRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkSecurityGroupName **required** `string`: The name of the network security group.
  * defaultSecurityRuleName **required** `string`: The name of the default security rule.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SecurityRule](#securityrule)

### SecurityRules_List
Gets all security rules in a network security group.


```js
azure_network_networksecuritygroup.SecurityRules_List({
  "resourceGroupName": "",
  "networkSecurityGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkSecurityGroupName **required** `string`: The name of the network security group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SecurityRuleListResult](#securityrulelistresult)

### SecurityRules_Delete
Deletes the specified network security rule.


```js
azure_network_networksecuritygroup.SecurityRules_Delete({
  "resourceGroupName": "",
  "networkSecurityGroupName": "",
  "securityRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkSecurityGroupName **required** `string`: The name of the network security group.
  * securityRuleName **required** `string`: The name of the security rule.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### SecurityRules_Get
Get the specified network security rule.


```js
azure_network_networksecuritygroup.SecurityRules_Get({
  "resourceGroupName": "",
  "networkSecurityGroupName": "",
  "securityRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkSecurityGroupName **required** `string`: The name of the network security group.
  * securityRuleName **required** `string`: The name of the security rule.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SecurityRule](#securityrule)

### SecurityRules_CreateOrUpdate
Creates or updates a security rule in the specified network security group.


```js
azure_network_networksecuritygroup.SecurityRules_CreateOrUpdate({
  "resourceGroupName": "",
  "networkSecurityGroupName": "",
  "securityRuleName": "",
  "securityRuleParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkSecurityGroupName **required** `string`: The name of the network security group.
  * securityRuleName **required** `string`: The name of the security rule.
  * securityRuleParameters **required** [SecurityRule](#securityrule)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SecurityRule](#securityrule)



## Definitions

### NetworkSecurityGroup
* NetworkSecurityGroup `object`: NetworkSecurityGroup resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### NetworkSecurityGroupListResult
* NetworkSecurityGroupListResult `object`: Response for ListNetworkSecurityGroups API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of NetworkSecurityGroup resources.
    * items [NetworkSecurityGroup](#networksecuritygroup)

### NetworkSecurityGroupPropertiesFormat
* NetworkSecurityGroupPropertiesFormat `object`: Network Security Group resource.
  * defaultSecurityRules `array`: The default security rules of network security group.
    * items `object`: Network security rule.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
      * properties `object`: Security rule resource.
        * access **required** `string` (values: Allow, Deny): Whether network traffic is allowed or denied.
        * description `string`: A description for this rule. Restricted to 140 chars.
        * destinationAddressPrefix `string`: The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
        * destinationAddressPrefixes `array`: The destination address prefixes. CIDR or destination IP ranges.
          * items `string`
        * destinationApplicationSecurityGroups `array`: The application security group specified as destination.
          * items `object`: An application security group in a resource group.
        * destinationPortRange `string`: The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        * destinationPortRanges `array`: The destination port ranges.
          * items `string`: The destination port.
        * direction **required** `string` (values: Inbound, Outbound): The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
        * priority `integer`: The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
        * protocol **required** `string` (values: Tcp, Udp, Icmp, Esp, *, Ah): Network protocol this rule applies to.
        * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
        * sourceAddressPrefix `string`: The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
        * sourceAddressPrefixes `array`: The CIDR or source IP ranges.
          * items `string`
        * sourceApplicationSecurityGroups `array`: The application security group specified as source.
          * items `object`: An application security group in a resource group.
        * sourcePortRange `string`: The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        * sourcePortRanges `array`: The source port ranges.
          * items `string`: The source port.
      * id `string`: Resource ID.
  * networkInterfaces `array`: A collection of references to network interfaces.
    * items [./networkInterface.jsonNetworkInterface](#./networkinterface.jsonnetworkinterface)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * resourceGuid `string`: The resource GUID property of the network security group resource.
  * securityRules `array`: A collection of security rules of the network security group.
    * items `object`: Network security rule.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
      * properties `object`: Security rule resource.
        * access **required** `string` (values: Allow, Deny): Whether network traffic is allowed or denied.
        * description `string`: A description for this rule. Restricted to 140 chars.
        * destinationAddressPrefix `string`: The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
        * destinationAddressPrefixes `array`: The destination address prefixes. CIDR or destination IP ranges.
          * items `string`
        * destinationApplicationSecurityGroups `array`: The application security group specified as destination.
          * items `object`: An application security group in a resource group.
        * destinationPortRange `string`: The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        * destinationPortRanges `array`: The destination port ranges.
          * items `string`: The destination port.
        * direction **required** `string` (values: Inbound, Outbound): The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
        * priority `integer`: The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
        * protocol **required** `string` (values: Tcp, Udp, Icmp, Esp, *, Ah): Network protocol this rule applies to.
        * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
        * sourceAddressPrefix `string`: The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
        * sourceAddressPrefixes `array`: The CIDR or source IP ranges.
          * items `string`
        * sourceApplicationSecurityGroups `array`: The application security group specified as source.
          * items `object`: An application security group in a resource group.
        * sourcePortRange `string`: The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        * sourcePortRanges `array`: The source port ranges.
          * items `string`: The source port.
      * id `string`: Resource ID.
  * subnets `array`: A collection of references to subnets.
    * items [./virtualNetwork.jsonSubnet](#./virtualnetwork.jsonsubnet)

### SecurityRule
* SecurityRule `object`: Network security rule.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties `object`: Security rule resource.
    * access **required** `string` (values: Allow, Deny): Whether network traffic is allowed or denied.
    * description `string`: A description for this rule. Restricted to 140 chars.
    * destinationAddressPrefix `string`: The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
    * destinationAddressPrefixes `array`: The destination address prefixes. CIDR or destination IP ranges.
      * items `string`
    * destinationApplicationSecurityGroups `array`: The application security group specified as destination.
      * items `object`: An application security group in a resource group.
        * etag `string`: A unique read-only string that changes whenever the resource is updated.
        * properties `object`: Application security group properties.
          * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
          * resourceGuid `string`: The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
        * id `string`: Resource ID.
        * location `string`: Resource location.
        * name `string`: Resource name.
        * tags `object`: Resource tags.
        * type `string`: Resource type.
    * destinationPortRange `string`: The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
    * destinationPortRanges `array`: The destination port ranges.
      * items `string`: The destination port.
    * direction **required** `string` (values: Inbound, Outbound): The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
    * priority `integer`: The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
    * protocol **required** `string` (values: Tcp, Udp, Icmp, Esp, *, Ah): Network protocol this rule applies to.
    * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
    * sourceAddressPrefix `string`: The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
    * sourceAddressPrefixes `array`: The CIDR or source IP ranges.
      * items `string`
    * sourceApplicationSecurityGroups `array`: The application security group specified as source.
      * items `object`: An application security group in a resource group.
        * etag `string`: A unique read-only string that changes whenever the resource is updated.
        * properties `object`: Application security group properties.
          * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
          * resourceGuid `string`: The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
        * id `string`: Resource ID.
        * location `string`: Resource location.
        * name `string`: Resource name.
        * tags `object`: Resource tags.
        * type `string`: Resource type.
    * sourcePortRange `string`: The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
    * sourcePortRanges `array`: The source port ranges.
      * items `string`: The source port.
  * id `string`: Resource ID.

### SecurityRuleAccess
* SecurityRuleAccess `string` (values: Allow, Deny): Whether network traffic is allowed or denied.

### SecurityRuleDirection
* SecurityRuleDirection `string` (values: Inbound, Outbound): The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.

### SecurityRuleListResult
* SecurityRuleListResult `object`: Response for ListSecurityRule API service call. Retrieves all security rules that belongs to a network security group.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The security rules in a network security group.
    * items [SecurityRule](#securityrule)

### SecurityRulePropertiesFormat
* SecurityRulePropertiesFormat `object`: Security rule resource.
  * access **required** `string` (values: Allow, Deny): Whether network traffic is allowed or denied.
  * description `string`: A description for this rule. Restricted to 140 chars.
  * destinationAddressPrefix `string`: The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
  * destinationAddressPrefixes `array`: The destination address prefixes. CIDR or destination IP ranges.
    * items `string`
  * destinationApplicationSecurityGroups `array`: The application security group specified as destination.
    * items `object`: An application security group in a resource group.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * properties `object`: Application security group properties.
        * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
        * resourceGuid `string`: The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
      * id `string`: Resource ID.
      * location `string`: Resource location.
      * name `string`: Resource name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.
  * destinationPortRange `string`: The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
  * destinationPortRanges `array`: The destination port ranges.
    * items `string`: The destination port.
  * direction **required** `string` (values: Inbound, Outbound): The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
  * priority `integer`: The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
  * protocol **required** `string` (values: Tcp, Udp, Icmp, Esp, *, Ah): Network protocol this rule applies to.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * sourceAddressPrefix `string`: The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
  * sourceAddressPrefixes `array`: The CIDR or source IP ranges.
    * items `string`
  * sourceApplicationSecurityGroups `array`: The application security group specified as source.
    * items `object`: An application security group in a resource group.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * properties `object`: Application security group properties.
        * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
        * resourceGuid `string`: The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
      * id `string`: Resource ID.
      * location `string`: Resource location.
      * name `string`: Resource name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.
  * sourcePortRange `string`: The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
  * sourcePortRanges `array`: The source port ranges.
    * items `string`: The source port.


