# @datafire/azure_network_networkinterface

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_networkinterface
```
```js
let azure_network_networkinterface = require('@datafire/azure_network_networkinterface').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_network_networkinterface.NetworkInterfaces_ListAll({
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Microsoft Azure Network management API provides a RESTful set of web services that interact with Microsoft Azure Networks service to manage your network resources. The API has entities that capture the relationship between an end user and the Microsoft Azure Networks service.

## Actions

### NetworkInterfaces_ListAll
Gets all network interfaces in a subscription.


```js
azure_network_networkinterface.NetworkInterfaces_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkInterfaceListResult](#networkinterfacelistresult)

### NetworkInterfaces_List
Gets all network interfaces in a resource group.


```js
azure_network_networkinterface.NetworkInterfaces_List({
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
* output [NetworkInterfaceListResult](#networkinterfacelistresult)

### NetworkInterfaces_Delete
Deletes the specified network interface.


```js
azure_network_networkinterface.NetworkInterfaces_Delete({
  "resourceGroupName": "",
  "networkInterfaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkInterfaceName **required** `string`: The name of the network interface.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### NetworkInterfaces_Get
Gets information about the specified network interface.


```js
azure_network_networkinterface.NetworkInterfaces_Get({
  "resourceGroupName": "",
  "networkInterfaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkInterfaceName **required** `string`: The name of the network interface.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output [NetworkInterface](#networkinterface)

### NetworkInterfaces_UpdateTags
Updates a network interface tags.


```js
azure_network_networkinterface.NetworkInterfaces_UpdateTags({
  "resourceGroupName": "",
  "networkInterfaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkInterfaceName **required** `string`: The name of the network interface.
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkInterface](#networkinterface)

### NetworkInterfaces_CreateOrUpdate
Creates or updates a network interface.


```js
azure_network_networkinterface.NetworkInterfaces_CreateOrUpdate({
  "resourceGroupName": "",
  "networkInterfaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkInterfaceName **required** `string`: The name of the network interface.
  * parameters **required** [NetworkInterface](#networkinterface)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkInterface](#networkinterface)

### NetworkInterfaces_ListEffectiveNetworkSecurityGroups
Gets all network security groups applied to a network interface.


```js
azure_network_networkinterface.NetworkInterfaces_ListEffectiveNetworkSecurityGroups({
  "resourceGroupName": "",
  "networkInterfaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkInterfaceName **required** `string`: The name of the network interface.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [EffectiveNetworkSecurityGroupListResult](#effectivenetworksecuritygrouplistresult)

### NetworkInterfaces_GetEffectiveRouteTable
Gets all route tables applied to a network interface.


```js
azure_network_networkinterface.NetworkInterfaces_GetEffectiveRouteTable({
  "resourceGroupName": "",
  "networkInterfaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkInterfaceName **required** `string`: The name of the network interface.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [EffectiveRouteListResult](#effectiveroutelistresult)

### NetworkInterfaceIPConfigurations_List
Get all ip configurations in a network interface


```js
azure_network_networkinterface.NetworkInterfaceIPConfigurations_List({
  "resourceGroupName": "",
  "networkInterfaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkInterfaceName **required** `string`: The name of the network interface.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkInterfaceIPConfigurationListResult](#networkinterfaceipconfigurationlistresult)

### NetworkInterfaceIPConfigurations_Get
Gets the specified network interface ip configuration.


```js
azure_network_networkinterface.NetworkInterfaceIPConfigurations_Get({
  "resourceGroupName": "",
  "networkInterfaceName": "",
  "ipConfigurationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkInterfaceName **required** `string`: The name of the network interface.
  * ipConfigurationName **required** `string`: The name of the ip configuration name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)

### NetworkInterfaceLoadBalancers_List
List all load balancers in a network interface.


```js
azure_network_networkinterface.NetworkInterfaceLoadBalancers_List({
  "resourceGroupName": "",
  "networkInterfaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkInterfaceName **required** `string`: The name of the network interface.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkInterfaceLoadBalancerListResult](#networkinterfaceloadbalancerlistresult)



## Definitions

### BackendAddressPoolPropertiesFormat


### EffectiveNetworkSecurityGroup
* EffectiveNetworkSecurityGroup `object`: Effective network security group.
  * association [EffectiveNetworkSecurityGroupAssociation](#effectivenetworksecuritygroupassociation)
  * effectiveSecurityRules `array`: A collection of effective security rules.
    * items [EffectiveNetworkSecurityRule](#effectivenetworksecurityrule)
  * networkSecurityGroup `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * tagMap `string`: Mapping of tags to list of IP Addresses included within the tag.

### EffectiveNetworkSecurityGroupAssociation
* EffectiveNetworkSecurityGroupAssociation `object`: The effective network security group association.
  * networkInterface `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * subnet `object`: Reference to another subresource.
    * id `string`: Resource ID.

### EffectiveNetworkSecurityGroupListResult
* EffectiveNetworkSecurityGroupListResult `object`: Response for list effective network security groups API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of effective network security groups.
    * items [EffectiveNetworkSecurityGroup](#effectivenetworksecuritygroup)

### EffectiveNetworkSecurityRule
* EffectiveNetworkSecurityRule `object`: Effective network security rules.
  * access `string` (values: Allow, Deny): Whether network traffic is allowed or denied. Possible values are: 'Allow' and 'Deny'.
  * destinationAddressPrefix `string`: The destination address prefix.
  * destinationAddressPrefixes `array`: The destination address prefixes. Expected values include CIDR IP ranges, Default Tags (VirtualNetwork, AureLoadBalancer, Internet), System Tags, and the asterix (*).
    * items `string`
  * destinationPortRange `string`: The destination port or range.
  * destinationPortRanges `array`: The destination port ranges. Expected values include a single integer between 0 and 65535, a range using '-' as seperator (e.g. 100-400), or an asterix (*)
    * items `string`
  * direction `string` (values: Inbound, Outbound): The direction of the rule. Possible values are: 'Inbound and Outbound'.
  * expandedDestinationAddressPrefix `array`: Expanded destination address prefix.
    * items `string`
  * expandedSourceAddressPrefix `array`: The expanded source address prefix.
    * items `string`
  * name `string`: The name of the security rule specified by the user (if created by the user).
  * priority `integer`: The priority of the rule.
  * protocol `string` (values: Tcp, Udp, All): The network protocol this rule applies to. Possible values are: 'Tcp', 'Udp', and 'All'.
  * sourceAddressPrefix `string`: The source address prefix.
  * sourceAddressPrefixes `array`: The source address prefixes. Expected values include CIDR IP ranges, Default Tags (VirtualNetwork, AureLoadBalancer, Internet), System Tags, and the asterix (*).
    * items `string`
  * sourcePortRange `string`: The source port or range.
  * sourcePortRanges `array`: The source port ranges. Expected values include a single integer between 0 and 65535, a range using '-' as seperator (e.g. 100-400), or an asterix (*)
    * items `string`

### EffectiveRoute
* EffectiveRoute `object`: Effective Route
  * addressPrefix `array`: The address prefixes of the effective routes in CIDR notation.
    * items `string`
  * name `string`: The name of the user defined route. This is optional.
  * nextHopIpAddress `array`: The IP address of the next hop of the effective route.
    * items `string`
  * nextHopType `string` (values: VirtualNetworkGateway, VnetLocal, Internet, VirtualAppliance, None): The type of Azure hop the packet should be sent to. Possible values are: 'VirtualNetworkGateway', 'VnetLocal', 'Internet', 'VirtualAppliance', and 'None'.
  * source `string` (values: Unknown, User, VirtualNetworkGateway, Default): Who created the route. Possible values are: 'Unknown', 'User', 'VirtualNetworkGateway', and 'Default'.
  * state `string` (values: Active, Invalid): The value of effective route. Possible values are: 'Active' and 'Invalid'.

### EffectiveRouteListResult
* EffectiveRouteListResult `object`: Response for list effective route API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of effective routes.
    * items [EffectiveRoute](#effectiveroute)

### IPConfiguration
* IPConfiguration `object`: IP configuration
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [IPConfigurationPropertiesFormat](#ipconfigurationpropertiesformat)
  * id `string`: Resource ID.

### IPConfigurationPropertiesFormat
* IPConfigurationPropertiesFormat `object`: Properties of IP configuration.
  * privateIPAddress `string`: The private IP address of the IP configuration.
  * privateIPAllocationMethod `string` (values: Static, Dynamic): The private IP allocation method. Possible values are 'Static' and 'Dynamic'.
  * provisioningState `string`: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
  * publicIPAddress `object`: Public IP address resource.
    * etag `string`: A unique read-only string that changes whenever the resource is updated.
    * properties [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat)
    * sku `object`: SKU of a public IP address
      * name `string` (values: Basic, Standard): Name of a public IP address SKU.
    * zones `array`: A list of availability zones denoting the IP allocated for the resource needs to come from.
      * items `string`
    * id `string`: Resource ID.
    * location `string`: Resource location.
    * name `string`: Resource name.
    * tags `object`: Resource tags.
    * type `string`: Resource type.
  * subnet `object`: Subnet in a virtual network resource.
    * etag `string`: A unique read-only string that changes whenever the resource is updated.
    * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
    * properties [SubnetPropertiesFormat](#subnetpropertiesformat)
    * id `string`: Resource ID.

### InboundNatRulePropertiesFormat


### NetworkInterface
* NetworkInterface `object`: A network interface in a resource group.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### NetworkInterfaceDnsSettings
* NetworkInterfaceDnsSettings `object`: DNS settings of a network interface.
  * appliedDnsServers `array`: If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.
    * items `string`
  * dnsServers `array`: List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection.
    * items `string`
  * internalDnsNameLabel `string`: Relative DNS name for this NIC used for internal communications between VMs in the same virtual network.
  * internalDomainNameSuffix `string`: Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix.
  * internalFqdn `string`: Fully qualified DNS name supporting internal communications between VMs in the same virtual network.

### NetworkInterfaceIPConfiguration
* NetworkInterfaceIPConfiguration `object`: IPConfiguration in a network interface.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [NetworkInterfaceIPConfigurationPropertiesFormat](#networkinterfaceipconfigurationpropertiesformat)
  * id `string`: Resource ID.

### NetworkInterfaceIPConfigurationListResult
* NetworkInterfaceIPConfigurationListResult `object`: Response for list ip configurations API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of ip configurations.
    * items [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)

### NetworkInterfaceIPConfigurationPropertiesFormat
* NetworkInterfaceIPConfigurationPropertiesFormat `object`: Properties of IP configuration.
  * applicationGatewayBackendAddressPools `array`: The reference of ApplicationGatewayBackendAddressPool resource.
    * items [./applicationGateway.jsonApplicationGatewayBackendAddressPool](#./applicationgateway.jsonapplicationgatewaybackendaddresspool)
  * applicationSecurityGroups `array`: Application security groups in which the IP configuration is included.
    * items `object`: An application security group in a resource group.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * properties `object`: Application security group properties.
        * provisioningState `string`: The provisioning state of the application security group resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
        * resourceGuid `string`: The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
      * id `string`: Resource ID.
      * location `string`: Resource location.
      * name `string`: Resource name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.
  * loadBalancerBackendAddressPools `array`: The reference of LoadBalancerBackendAddressPool resource.
    * items `object`: Pool of backend IP addresses.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
      * properties [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat)
      * id `string`: Resource ID.
  * loadBalancerInboundNatRules `array`: A list of references of LoadBalancerInboundNatRules.
    * items `object`: Inbound NAT rule of the load balancer.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
      * properties [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat)
      * id `string`: Resource ID.
  * primary `boolean`: Gets whether this is a primary customer address on the network interface.
  * privateIPAddress `string`: Private IP address of the IP configuration.
  * privateIPAddressVersion `string` (values: IPv4, IPv6): Available from Api-Version 2016-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
  * privateIPAllocationMethod `string` (values: Static, Dynamic): Defines how a private IP address is assigned. Possible values are: 'Static' and 'Dynamic'.
  * provisioningState `string`: The provisioning state of the network interface IP configuration. Possible values are: 'Updating', 'Deleting', and 'Failed'.
  * publicIPAddress `object`: Public IP address resource.
    * etag `string`: A unique read-only string that changes whenever the resource is updated.
    * properties [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat)
    * sku `object`: SKU of a public IP address
      * name `string` (values: Basic, Standard): Name of a public IP address SKU.
    * zones `array`: A list of availability zones denoting the IP allocated for the resource needs to come from.
      * items `string`
    * id `string`: Resource ID.
    * location `string`: Resource location.
    * name `string`: Resource name.
    * tags `object`: Resource tags.
    * type `string`: Resource type.
  * subnet `object`: Subnet in a virtual network resource.
    * etag `string`: A unique read-only string that changes whenever the resource is updated.
    * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
    * properties [SubnetPropertiesFormat](#subnetpropertiesformat)
    * id `string`: Resource ID.

### NetworkInterfaceListResult
* NetworkInterfaceListResult `object`: Response for the ListNetworkInterface API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of network interfaces in a resource group.
    * items [NetworkInterface](#networkinterface)

### NetworkInterfaceLoadBalancerListResult
* NetworkInterfaceLoadBalancerListResult `object`: Response for list ip configurations API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of load balancers.
    * items `object`: LoadBalancer resource
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * properties `object`: Properties of the load balancer.
        * backendAddressPools `array`: Collection of backend address pools used by a load balancer
          * items `object`: Pool of backend IP addresses.
            * etag `string`: A unique read-only string that changes whenever the resource is updated.
            * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
            * properties [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat)
            * id `string`: Resource ID.
        * frontendIPConfigurations `array`: Object representing the frontend IPs to be used for the load balancer
          * items `object`: Frontend IP address of the load balancer.
            * etag `string`: A unique read-only string that changes whenever the resource is updated.
            * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
            * properties `object`: Properties of Frontend IP Configuration of the load balancer.
              * inboundNatPools `array`: Read only. Inbound pools URIs that use this frontend IP.
                * items `object`: Reference to another subresource.
                  * id `string`: Resource ID.
              * inboundNatRules `array`: Read only. Inbound rules URIs that use this frontend IP.
                * items `object`: Reference to another subresource.
                  * id `string`: Resource ID.
              * loadBalancingRules `array`: Gets load balancing rules URIs that use this frontend IP.
                * items `object`: Reference to another subresource.
                  * id `string`: Resource ID.
              * outboundNatRules `array`: Read only. Outbound rules URIs that use this frontend IP.
                * items `object`: Reference to another subresource.
                  * id `string`: Resource ID.
              * privateIPAddress `string`: The private IP address of the IP configuration.
              * privateIPAllocationMethod `string` (values: Static, Dynamic): The Private IP allocation method. Possible values are: 'Static' and 'Dynamic'.
              * provisioningState `string`: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
              * publicIPAddress `object`: Public IP address resource.
                * etag `string`: A unique read-only string that changes whenever the resource is updated.
                * properties [PublicIPAddressPropertiesFormat](#publicipaddresspropertiesformat)
                * sku `object`: SKU of a public IP address
                  * name `string` (values: Basic, Standard): Name of a public IP address SKU.
                * zones `array`: A list of availability zones denoting the IP allocated for the resource needs to come from.
                  * items `string`
                * id `string`: Resource ID.
                * location `string`: Resource location.
                * name `string`: Resource name.
                * tags `object`: Resource tags.
                * type `string`: Resource type.
              * subnet `object`: Subnet in a virtual network resource.
                * etag `string`: A unique read-only string that changes whenever the resource is updated.
                * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
                * properties [SubnetPropertiesFormat](#subnetpropertiesformat)
                * id `string`: Resource ID.
            * zones `array`: A list of availability zones denoting the IP allocated for the resource needs to come from.
              * items `string`
            * id `string`: Resource ID.
        * inboundNatPools `array`: Defines an external port range for inbound NAT to a single backend port on NICs associated with a load balancer. Inbound NAT rules are created automatically for each NIC associated with the Load Balancer using an external port from this range. Defining an Inbound NAT pool on your Load Balancer is mutually exclusive with defining inbound Nat rules. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an inbound NAT pool. They have to reference individual inbound NAT rules.
          * items `object`: Inbound NAT pool of the load balancer.
            * etag `string`: A unique read-only string that changes whenever the resource is updated.
            * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
            * properties `object`: Properties of Inbound NAT pool.
              * backendPort **required** `integer`: The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
              * enableFloatingIP `boolean`: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
              * frontendIPConfiguration `object`: Reference to another subresource.
                * id `string`: Resource ID.
              * frontendPortRangeEnd **required** `integer`: The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65535.
              * frontendPortRangeStart **required** `integer`: The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65534.
              * idleTimeoutInMinutes `integer`: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
              * protocol **required** `string` (values: Udp, Tcp, All): The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All.'
              * provisioningState `string`: Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
            * id `string`: Resource ID.
        * inboundNatRules `array`: Collection of inbound NAT Rules used by a load balancer. Defining inbound NAT rules on your load balancer is mutually exclusive with defining an inbound NAT pool. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an Inbound NAT pool. They have to reference individual inbound NAT rules.
          * items `object`: Inbound NAT rule of the load balancer.
            * etag `string`: A unique read-only string that changes whenever the resource is updated.
            * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
            * properties [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat)
            * id `string`: Resource ID.
        * loadBalancingRules `array`: Object collection representing the load balancing rules Gets the provisioning 
          * items `object`: A load balancing rule for a load balancer.
            * etag `string`: A unique read-only string that changes whenever the resource is updated.
            * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
            * properties `object`: Properties of the load balancer.
              * backendAddressPool `object`: Reference to another subresource.
                * id `string`: Resource ID.
              * backendPort `integer`: The port used for internal connections on the endpoint. Acceptable values are between 0 and 65535. Note that value 0 enables "Any Port"
              * disableOutboundSnat `boolean`: Configures SNAT for the VMs in the backend pool to use the publicIP address specified in the frontend of the load balancing rule.
              * enableFloatingIP `boolean`: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
              * frontendIPConfiguration `object`: Reference to another subresource.
                * id `string`: Resource ID.
              * frontendPort **required** `integer`: The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 0 and 65534. Note that value 0 enables "Any Port"
              * idleTimeoutInMinutes `integer`: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
              * loadDistribution `string` (values: Default, SourceIP, SourceIPProtocol): The load distribution policy for this rule. Possible values are 'Default', 'SourceIP', and 'SourceIPProtocol'.
              * probe `object`: Reference to another subresource.
                * id `string`: Resource ID.
              * protocol **required** `string` (values: Udp, Tcp, All): The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All.'
              * provisioningState `string`: Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
            * id `string`: Resource ID.
        * outboundNatRules `array`: The outbound NAT rules.
          * items `object`: Outbound NAT pool of the load balancer.
            * etag `string`: A unique read-only string that changes whenever the resource is updated.
            * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
            * properties `object`: Outbound NAT pool of the load balancer.
              * allocatedOutboundPorts `integer`: The number of outbound ports to be used for NAT.
              * backendAddressPool **required** `object`: Reference to another subresource.
                * id `string`: Resource ID.
              * frontendIPConfigurations `array`: The Frontend IP addresses of the load balancer.
                * items `object`: Reference to another subresource.
                  * id `string`: Resource ID.
              * provisioningState `string`: Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
            * id `string`: Resource ID.
        * probes `array`: Collection of probe objects used in the load balancer
          * items `object`: A load balancer probe.
            * etag `string`: A unique read-only string that changes whenever the resource is updated.
            * name `string`: Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
            * properties `object`: Load balancer probe resource.
              * intervalInSeconds `integer`: The interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5.
              * loadBalancingRules `array`: The load balancer rules that use this probe.
                * items `object`: Reference to another subresource.
                  * id `string`: Resource ID.
              * numberOfProbes `integer`: The number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure.
              * port **required** `integer`: The port for communicating the probe. Possible values range from 1 to 65535, inclusive.
              * protocol **required** `string` (values: Http, Tcp): The protocol of the end point. Possible values are: 'Http' or 'Tcp'. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
              * provisioningState `string`: Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
              * requestPath `string`: The URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value.
            * id `string`: Resource ID.
        * provisioningState `string`: Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
        * resourceGuid `string`: The resource GUID property of the load balancer resource.
      * sku `object`: SKU of a load balancer
        * name `string` (values: Basic, Standard): Name of a load balancer SKU.
      * id `string`: Resource ID.
      * location `string`: Resource location.
      * name `string`: Resource name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.

### NetworkInterfacePropertiesFormat
* NetworkInterfacePropertiesFormat `object`: NetworkInterface properties. 
  * dnsSettings `object`: DNS settings of a network interface.
    * appliedDnsServers `array`: If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.
      * items `string`
    * dnsServers `array`: List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection.
      * items `string`
    * internalDnsNameLabel `string`: Relative DNS name for this NIC used for internal communications between VMs in the same virtual network.
    * internalDomainNameSuffix `string`: Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix.
    * internalFqdn `string`: Fully qualified DNS name supporting internal communications between VMs in the same virtual network.
  * enableAcceleratedNetworking `boolean`: If the network interface is accelerated networking enabled.
  * enableIPForwarding `boolean`: Indicates whether IP forwarding is enabled on this network interface.
  * ipConfigurations `array`: A list of IPConfigurations of the network interface.
    * items [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)
  * macAddress `string`: The MAC address of the network interface.
  * networkSecurityGroup `object`: NetworkSecurityGroup resource.
    * etag `string`: A unique read-only string that changes whenever the resource is updated.
    * properties [NetworkSecurityGroupPropertiesFormat](#networksecuritygrouppropertiesformat)
    * id `string`: Resource ID.
    * location `string`: Resource location.
    * name `string`: Resource name.
    * tags `object`: Resource tags.
    * type `string`: Resource type.
  * primary `boolean`: Gets whether this is a primary network interface on a virtual machine.
  * provisioningState `string`: The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
  * resourceGuid `string`: The resource GUID property of the network interface resource.
  * virtualMachine `object`: Reference to another subresource.
    * id `string`: Resource ID.

### NetworkSecurityGroupPropertiesFormat


### PublicIPAddressPropertiesFormat


### SubnetPropertiesFormat



