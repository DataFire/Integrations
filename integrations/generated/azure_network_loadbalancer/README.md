# @datafire/azure_network_loadbalancer

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_loadbalancer
```
```js
let azure_network_loadbalancer = require('@datafire/azure_network_loadbalancer').create({
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

### LoadBalancers_ListAll
Gets all the load balancers in a subscription.


```js
azure_network_loadbalancer.LoadBalancers_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LoadBalancerListResult](#loadbalancerlistresult)

### LoadBalancers_List
Gets all the load balancers in a resource group.


```js
azure_network_loadbalancer.LoadBalancers_List({
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
* output [LoadBalancerListResult](#loadbalancerlistresult)

### LoadBalancers_Delete
Deletes the specified load balancer.


```js
azure_network_loadbalancer.LoadBalancers_Delete({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### LoadBalancers_Get
Gets the specified load balancer.


```js
azure_network_loadbalancer.LoadBalancers_Get({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output [LoadBalancer](#loadbalancer)

### LoadBalancers_UpdateTags
Updates a load balancer tags.


```js
azure_network_loadbalancer.LoadBalancers_UpdateTags({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LoadBalancer](#loadbalancer)

### LoadBalancers_CreateOrUpdate
Creates or updates a load balancer.


```js
azure_network_loadbalancer.LoadBalancers_CreateOrUpdate({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * parameters **required** [LoadBalancer](#loadbalancer)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LoadBalancer](#loadbalancer)

### LoadBalancerBackendAddressPools_List
Gets all the load balancer backed address pools.


```js
azure_network_loadbalancer.LoadBalancerBackendAddressPools_List({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LoadBalancerBackendAddressPoolListResult](#loadbalancerbackendaddresspoollistresult)

### LoadBalancerBackendAddressPools_Get
Gets load balancer backend address pool.


```js
azure_network_loadbalancer.LoadBalancerBackendAddressPools_Get({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "backendAddressPoolName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * backendAddressPoolName **required** `string`: The name of the backend address pool.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BackendAddressPool](#backendaddresspool)

### LoadBalancerFrontendIPConfigurations_List
Gets all the load balancer frontend IP configurations.


```js
azure_network_loadbalancer.LoadBalancerFrontendIPConfigurations_List({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LoadBalancerFrontendIPConfigurationListResult](#loadbalancerfrontendipconfigurationlistresult)

### LoadBalancerFrontendIPConfigurations_Get
Gets load balancer frontend IP configuration.


```js
azure_network_loadbalancer.LoadBalancerFrontendIPConfigurations_Get({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "frontendIPConfigurationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * frontendIPConfigurationName **required** `string`: The name of the frontend IP configuration.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [FrontendIPConfiguration](#frontendipconfiguration)

### InboundNatRules_List
Gets all the inbound nat rules in a load balancer.


```js
azure_network_loadbalancer.InboundNatRules_List({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [InboundNatRuleListResult](#inboundnatrulelistresult)

### InboundNatRules_Delete
Deletes the specified load balancer inbound nat rule.


```js
azure_network_loadbalancer.InboundNatRules_Delete({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "inboundNatRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * inboundNatRuleName **required** `string`: The name of the inbound nat rule.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### InboundNatRules_Get
Gets the specified load balancer inbound nat rule.


```js
azure_network_loadbalancer.InboundNatRules_Get({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "inboundNatRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * inboundNatRuleName **required** `string`: The name of the inbound nat rule.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output [InboundNatRule](#inboundnatrule)

### InboundNatRules_CreateOrUpdate
Creates or updates a load balancer inbound nat rule.


```js
azure_network_loadbalancer.InboundNatRules_CreateOrUpdate({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "inboundNatRuleName": "",
  "inboundNatRuleParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * inboundNatRuleName **required** `string`: The name of the inbound nat rule.
  * inboundNatRuleParameters **required** [InboundNatRule](#inboundnatrule)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [InboundNatRule](#inboundnatrule)

### LoadBalancerLoadBalancingRules_List
Gets all the load balancing rules in a load balancer.


```js
azure_network_loadbalancer.LoadBalancerLoadBalancingRules_List({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LoadBalancerLoadBalancingRuleListResult](#loadbalancerloadbalancingrulelistresult)

### LoadBalancerLoadBalancingRules_Get
Gets the specified load balancer load balancing rule.


```js
azure_network_loadbalancer.LoadBalancerLoadBalancingRules_Get({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "loadBalancingRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * loadBalancingRuleName **required** `string`: The name of the load balancing rule.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LoadBalancingRule](#loadbalancingrule)

### LoadBalancerNetworkInterfaces_List
Gets associated load balancer network interfaces.


```js
azure_network_loadbalancer.LoadBalancerNetworkInterfaces_List({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Response for the ListNetworkInterface API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of network interfaces in a resource group.
    * items `object`: A network interface in a resource group.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * properties [NetworkInterfacePropertiesFormat](#networkinterfacepropertiesformat)
      * id `string`: Resource ID.
      * location `string`: Resource location.
      * name `string`: Resource name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.

### LoadBalancerOutboundRules_List
Gets all the outbound rules in a load balancer.


```js
azure_network_loadbalancer.LoadBalancerOutboundRules_List({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LoadBalancerOutboundRuleListResult](#loadbalanceroutboundrulelistresult)

### LoadBalancerOutboundRules_Get
Gets the specified load balancer outbound rule.


```js
azure_network_loadbalancer.LoadBalancerOutboundRules_Get({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "outboundRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * outboundRuleName **required** `string`: The name of the outbound rule.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OutboundRule](#outboundrule)

### LoadBalancerProbes_List
Gets all the load balancer probes.


```js
azure_network_loadbalancer.LoadBalancerProbes_List({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LoadBalancerProbeListResult](#loadbalancerprobelistresult)

### LoadBalancerProbes_Get
Gets load balancer probe.


```js
azure_network_loadbalancer.LoadBalancerProbes_Get({
  "resourceGroupName": "",
  "loadBalancerName": "",
  "probeName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * loadBalancerName **required** `string`: The name of the load balancer.
  * probeName **required** `string`: The name of the probe.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Probe](#probe)



## Definitions

### BackendAddressPool
* BackendAddressPool `object`: Pool of backend IP addresses.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource.
  * properties [BackendAddressPoolPropertiesFormat](#backendaddresspoolpropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### BackendAddressPoolPropertiesFormat
* BackendAddressPoolPropertiesFormat `object`: Properties of the backend address pool.
  * backendIPConfigurations `array`: An array of references to IP addresses defined in network interfaces.
    * items [./networkInterface.jsonNetworkInterfaceIPConfiguration](#./networkinterface.jsonnetworkinterfaceipconfiguration)
  * loadBalancingRules `array`: An array of references to load balancing rules that use this backend address pool.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * outboundRule `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * outboundRules `array`: An array of references to outbound rules that use this backend address pool.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### FrontendIPConfiguration
* FrontendIPConfiguration `object`: Frontend IP address of the load balancer.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource.
  * properties [FrontendIPConfigurationPropertiesFormat](#frontendipconfigurationpropertiesformat)
  * type `string`: Type of the resource.
  * zones `array`: A list of availability zones denoting the IP allocated for the resource needs to come from.
    * items `string`
  * id `string`: Resource ID.

### FrontendIPConfigurationPropertiesFormat
* FrontendIPConfigurationPropertiesFormat `object`: Properties of Frontend IP Configuration of the load balancer.
  * inboundNatPools `array`: An array of references to inbound pools that use this frontend IP.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * inboundNatRules `array`: An array of references to inbound rules that use this frontend IP.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * loadBalancingRules `array`: An array of references to load balancing rules that use this frontend IP.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * outboundRules `array`: An array of references to outbound rules that use this frontend IP.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * privateIPAddress `string`: The private IP address of the IP configuration.
  * privateIPAddressVersion `string` (values: IPv4, IPv6): IP address version.
  * privateIPAllocationMethod `string` (values: Static, Dynamic): IP address allocation method.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * publicIPAddress [./publicIpAddress.jsonPublicIPAddress](#./publicipaddress.jsonpublicipaddress)
  * publicIPPrefix `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * subnet [./virtualNetwork.jsonSubnet](#./virtualnetwork.jsonsubnet)

### InboundNatPool
* InboundNatPool `object`: Inbound NAT pool of the load balancer.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within the set of inbound NAT pools used by the load balancer. This name can be used to access the resource.
  * properties [InboundNatPoolPropertiesFormat](#inboundnatpoolpropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### InboundNatPoolPropertiesFormat
* InboundNatPoolPropertiesFormat `object`: Properties of Inbound NAT pool.
  * backendPort **required** `integer`: The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
  * enableFloatingIP `boolean`: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
  * enableTcpReset `boolean`: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
  * frontendIPConfiguration `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * frontendPortRangeEnd **required** `integer`: The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65535.
  * frontendPortRangeStart **required** `integer`: The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65534.
  * idleTimeoutInMinutes `integer`: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
  * protocol **required** [TransportProtocol](#transportprotocol)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### InboundNatRule
* InboundNatRule `object`: Inbound NAT rule of the load balancer.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource.
  * properties [InboundNatRulePropertiesFormat](#inboundnatrulepropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### InboundNatRuleListResult
* InboundNatRuleListResult `object`: Response for ListInboundNatRule API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of inbound nat rules in a load balancer.
    * items [InboundNatRule](#inboundnatrule)

### InboundNatRulePropertiesFormat
* InboundNatRulePropertiesFormat `object`: Properties of the inbound NAT rule.
  * backendIPConfiguration [./networkInterface.jsonNetworkInterfaceIPConfiguration](#./networkinterface.jsonnetworkinterfaceipconfiguration)
  * backendPort `integer`: The port used for the internal endpoint. Acceptable values range from 1 to 65535.
  * enableFloatingIP `boolean`: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
  * enableTcpReset `boolean`: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
  * frontendIPConfiguration `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * frontendPort `integer`: The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
  * idleTimeoutInMinutes `integer`: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
  * protocol `string` (values: Udp, Tcp, All): The transport protocol for the endpoint.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### LoadBalancer
* LoadBalancer `object`: LoadBalancer resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [LoadBalancerPropertiesFormat](#loadbalancerpropertiesformat)
  * sku [LoadBalancerSku](#loadbalancersku)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### LoadBalancerBackendAddressPoolListResult
* LoadBalancerBackendAddressPoolListResult `object`: Response for ListBackendAddressPool API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of backend address pools in a load balancer.
    * items [BackendAddressPool](#backendaddresspool)

### LoadBalancerFrontendIPConfigurationListResult
* LoadBalancerFrontendIPConfigurationListResult `object`: Response for ListFrontendIPConfiguration API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of frontend IP configurations in a load balancer.
    * items [FrontendIPConfiguration](#frontendipconfiguration)

### LoadBalancerListResult
* LoadBalancerListResult `object`: Response for ListLoadBalancers API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of load balancers in a resource group.
    * items [LoadBalancer](#loadbalancer)

### LoadBalancerLoadBalancingRuleListResult
* LoadBalancerLoadBalancingRuleListResult `object`: Response for ListLoadBalancingRule API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of load balancing rules in a load balancer.
    * items [LoadBalancingRule](#loadbalancingrule)

### LoadBalancerOutboundRuleListResult
* LoadBalancerOutboundRuleListResult `object`: Response for ListOutboundRule API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of outbound rules in a load balancer.
    * items [OutboundRule](#outboundrule)

### LoadBalancerProbeListResult
* LoadBalancerProbeListResult `object`: Response for ListProbe API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of probes in a load balancer.
    * items [Probe](#probe)

### LoadBalancerPropertiesFormat
* LoadBalancerPropertiesFormat `object`: Properties of the load balancer.
  * backendAddressPools `array`: Collection of backend address pools used by a load balancer.
    * items [BackendAddressPool](#backendaddresspool)
  * frontendIPConfigurations `array`: Object representing the frontend IPs to be used for the load balancer.
    * items [FrontendIPConfiguration](#frontendipconfiguration)
  * inboundNatPools `array`: Defines an external port range for inbound NAT to a single backend port on NICs associated with a load balancer. Inbound NAT rules are created automatically for each NIC associated with the Load Balancer using an external port from this range. Defining an Inbound NAT pool on your Load Balancer is mutually exclusive with defining inbound Nat rules. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an inbound NAT pool. They have to reference individual inbound NAT rules.
    * items [InboundNatPool](#inboundnatpool)
  * inboundNatRules `array`: Collection of inbound NAT Rules used by a load balancer. Defining inbound NAT rules on your load balancer is mutually exclusive with defining an inbound NAT pool. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an Inbound NAT pool. They have to reference individual inbound NAT rules.
    * items [InboundNatRule](#inboundnatrule)
  * loadBalancingRules `array`: Object collection representing the load balancing rules Gets the provisioning.
    * items [LoadBalancingRule](#loadbalancingrule)
  * outboundRules `array`: The outbound rules.
    * items [OutboundRule](#outboundrule)
  * probes `array`: Collection of probe objects used in the load balancer.
    * items [Probe](#probe)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * resourceGuid `string`: The resource GUID property of the load balancer resource.

### LoadBalancerSku
* LoadBalancerSku `object`: SKU of a load balancer.
  * name `string` (values: Basic, Standard): Name of a load balancer SKU.

### LoadBalancingRule
* LoadBalancingRule `object`: A load balancing rule for a load balancer.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within the set of load balancing rules used by the load balancer. This name can be used to access the resource.
  * properties [LoadBalancingRulePropertiesFormat](#loadbalancingrulepropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### LoadBalancingRulePropertiesFormat
* LoadBalancingRulePropertiesFormat `object`: Properties of the load balancer.
  * backendAddressPool `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * backendPort `integer`: The port used for internal connections on the endpoint. Acceptable values are between 0 and 65535. Note that value 0 enables "Any Port".
  * disableOutboundSnat `boolean`: Configures SNAT for the VMs in the backend pool to use the publicIP address specified in the frontend of the load balancing rule.
  * enableFloatingIP `boolean`: Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
  * enableTcpReset `boolean`: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
  * frontendIPConfiguration `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * frontendPort **required** `integer`: The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 0 and 65534. Note that value 0 enables "Any Port".
  * idleTimeoutInMinutes `integer`: The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
  * loadDistribution `string` (values: Default, SourceIP, SourceIPProtocol): The load distribution policy for this rule.
  * probe `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * protocol **required** [TransportProtocol](#transportprotocol)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### NetworkInterfacePropertiesFormat


### OutboundRule
* OutboundRule `object`: Outbound rule of the load balancer.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within the set of outbound rules used by the load balancer. This name can be used to access the resource.
  * properties [OutboundRulePropertiesFormat](#outboundrulepropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### OutboundRulePropertiesFormat
* OutboundRulePropertiesFormat `object`: Outbound rule of the load balancer.
  * allocatedOutboundPorts `integer`: The number of outbound ports to be used for NAT.
  * backendAddressPool **required** `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * enableTcpReset `boolean`: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
  * frontendIPConfigurations **required** `array`: The Frontend IP addresses of the load balancer.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * idleTimeoutInMinutes `integer`: The timeout for the TCP idle connection.
  * protocol **required** `string` (values: Tcp, Udp, All): The protocol for the outbound rule in load balancer.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### Probe
* Probe `object`: A load balancer probe.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within the set of probes used by the load balancer. This name can be used to access the resource.
  * properties [ProbePropertiesFormat](#probepropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ProbePropertiesFormat
* ProbePropertiesFormat `object`: Load balancer probe resource.
  * intervalInSeconds `integer`: The interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5.
  * loadBalancingRules `array`: The load balancer rules that use this probe.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * numberOfProbes `integer`: The number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure.
  * port **required** `integer`: The port for communicating the probe. Possible values range from 1 to 65535, inclusive.
  * protocol **required** `string` (values: Http, Tcp, Https): The protocol of the end point. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' or 'Https' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * requestPath `string`: The URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value.

### TransportProtocol
* TransportProtocol `string` (values: Udp, Tcp, All): The transport protocol for the endpoint.


