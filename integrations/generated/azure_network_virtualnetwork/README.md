# @datafire/azure_network_virtualnetwork

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_virtualnetwork
```
```js
let azure_network_virtualnetwork = require('@datafire/azure_network_virtualnetwork').create({
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

### VirtualNetworks_ListAll
Gets all virtual networks in a subscription.


```js
azure_network_virtualnetwork.VirtualNetworks_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkListResult](#virtualnetworklistresult)

### VirtualNetworks_List
Gets all virtual networks in a resource group.


```js
azure_network_virtualnetwork.VirtualNetworks_List({
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
* output [VirtualNetworkListResult](#virtualnetworklistresult)

### VirtualNetworks_Delete
Deletes the specified virtual network.


```js
azure_network_virtualnetwork.VirtualNetworks_Delete({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### VirtualNetworks_Get
Gets the specified virtual network by resource group.


```js
azure_network_virtualnetwork.VirtualNetworks_Get({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output [VirtualNetwork](#virtualnetwork)

### VirtualNetworks_UpdateTags
Updates a virtual network tags.


```js
azure_network_virtualnetwork.VirtualNetworks_UpdateTags({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetwork](#virtualnetwork)

### VirtualNetworks_CreateOrUpdate
Creates or updates a virtual network in the specified resource group.


```js
azure_network_virtualnetwork.VirtualNetworks_CreateOrUpdate({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * parameters **required** [VirtualNetwork](#virtualnetwork)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetwork](#virtualnetwork)

### VirtualNetworks_CheckIPAddressAvailability
Checks whether a private IP address is available for use.


```js
azure_network_virtualnetwork.VirtualNetworks_CheckIPAddressAvailability({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "ipAddress": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * ipAddress **required** `string`: The private IP address to be verified.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [IPAddressAvailabilityResult](#ipaddressavailabilityresult)

### Subnets_List
Gets all subnets in a virtual network.


```js
azure_network_virtualnetwork.Subnets_List({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SubnetListResult](#subnetlistresult)

### Subnets_Delete
Deletes the specified subnet.


```js
azure_network_virtualnetwork.Subnets_Delete({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "subnetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * subnetName **required** `string`: The name of the subnet.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Subnets_Get
Gets the specified subnet by virtual network and resource group.


```js
azure_network_virtualnetwork.Subnets_Get({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "subnetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * subnetName **required** `string`: The name of the subnet.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output [Subnet](#subnet)

### Subnets_CreateOrUpdate
Creates or updates a subnet in the specified virtual network.


```js
azure_network_virtualnetwork.Subnets_CreateOrUpdate({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "subnetName": "",
  "subnetParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * subnetName **required** `string`: The name of the subnet.
  * subnetParameters **required** [Subnet](#subnet)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Subnet](#subnet)

### Subnets_PrepareNetworkPolicies
Prepares a subnet by applying network intent policies.


```js
azure_network_virtualnetwork.Subnets_PrepareNetworkPolicies({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "subnetName": "",
  "prepareNetworkPoliciesRequestParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * subnetName **required** `string`: The name of the subnet.
  * prepareNetworkPoliciesRequestParameters **required** [PrepareNetworkPoliciesRequest](#preparenetworkpoliciesrequest)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ResourceNavigationLinks_List
Gets a list of resource navigation links for a subnet.


```js
azure_network_virtualnetwork.ResourceNavigationLinks_List({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "subnetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * subnetName **required** `string`: The name of the subnet.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ResourceNavigationLinksListResult](#resourcenavigationlinkslistresult)

### ServiceAssociationLinks_List
Gets a list of service association links for a subnet.


```js
azure_network_virtualnetwork.ServiceAssociationLinks_List({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "subnetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * subnetName **required** `string`: The name of the subnet.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ServiceAssociationLinksListResult](#serviceassociationlinkslistresult)

### Subnets_UnprepareNetworkPolicies
Unprepares a subnet by removing network intent policies.


```js
azure_network_virtualnetwork.Subnets_UnprepareNetworkPolicies({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "subnetName": "",
  "unprepareNetworkPoliciesRequestParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * subnetName **required** `string`: The name of the subnet.
  * unprepareNetworkPoliciesRequestParameters **required** [UnprepareNetworkPoliciesRequest](#unpreparenetworkpoliciesrequest)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### VirtualNetworks_ListUsage
Lists usage stats.


```js
azure_network_virtualnetwork.VirtualNetworks_ListUsage({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkListUsageResult](#virtualnetworklistusageresult)

### VirtualNetworkPeerings_List
Gets all virtual network peerings in a virtual network.


```js
azure_network_virtualnetwork.VirtualNetworkPeerings_List({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkPeeringListResult](#virtualnetworkpeeringlistresult)

### VirtualNetworkPeerings_Delete
Deletes the specified virtual network peering.


```js
azure_network_virtualnetwork.VirtualNetworkPeerings_Delete({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "virtualNetworkPeeringName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * virtualNetworkPeeringName **required** `string`: The name of the virtual network peering.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### VirtualNetworkPeerings_Get
Gets the specified virtual network peering.


```js
azure_network_virtualnetwork.VirtualNetworkPeerings_Get({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "virtualNetworkPeeringName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * virtualNetworkPeeringName **required** `string`: The name of the virtual network peering.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkPeering](#virtualnetworkpeering)

### VirtualNetworkPeerings_CreateOrUpdate
Creates or updates a peering in the specified virtual network.


```js
azure_network_virtualnetwork.VirtualNetworkPeerings_CreateOrUpdate({
  "resourceGroupName": "",
  "virtualNetworkName": "",
  "virtualNetworkPeeringName": "",
  "VirtualNetworkPeeringParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualNetworkName **required** `string`: The name of the virtual network.
  * virtualNetworkPeeringName **required** `string`: The name of the peering.
  * VirtualNetworkPeeringParameters **required** [VirtualNetworkPeering](#virtualnetworkpeering)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkPeering](#virtualnetworkpeering)



## Definitions

### AddressSpace
* AddressSpace `object`: AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
  * addressPrefixes `array`: A list of address blocks reserved for this virtual network in CIDR notation.
    * items `string`

### Delegation
* Delegation `object`: Details the service to which the subnet is delegated.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a subnet. This name can be used to access the resource.
  * properties `object`: Properties of a service delegation.
    * actions `array`: Describes the actions permitted to the service upon delegation.
      * items `string`
    * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
    * serviceName `string`: The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers).
  * id `string`: Resource ID.

### DhcpOptions
* DhcpOptions `object`: DhcpOptions contains an array of DNS servers available to VMs deployed in the virtual network. Standard DHCP option for a subnet overrides VNET DHCP options.
  * dnsServers `array`: The list of DNS servers IP addresses.
    * items `string`

### IPAddressAvailabilityResult
* IPAddressAvailabilityResult `object`: Response for CheckIPAddressAvailability API service call.
  * available `boolean`: Private IP address availability.
  * availableIPAddresses `array`: Contains other available private IP addresses if the asked for address is taken.
    * items `string`

### NetworkIntentPolicy
* NetworkIntentPolicy `object`: Network Intent Policy resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### NetworkIntentPolicyConfiguration
* NetworkIntentPolicyConfiguration `object`: Details of NetworkIntentPolicyConfiguration for PrepareNetworkPoliciesRequest.
  * networkIntentPolicyName `string`: The name of the Network Intent Policy for storing in target subscription.
  * sourceNetworkIntentPolicy [NetworkIntentPolicy](#networkintentpolicy)

### PrepareNetworkPoliciesRequest
* PrepareNetworkPoliciesRequest `object`: Details of PrepareNetworkPolicies for Subnet.
  * networkIntentPolicyConfigurations `array`: A list of NetworkIntentPolicyConfiguration.
    * items [NetworkIntentPolicyConfiguration](#networkintentpolicyconfiguration)
  * serviceName `string`: The name of the service for which subnet is being prepared for.

### ResourceNavigationLink
* ResourceNavigationLink `object`: ResourceNavigationLink resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * id `string`: Resource navigation link identifier.
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties `object`: Properties of ResourceNavigationLink.
    * link `string`: Link to the external resource.
    * linkedResourceType `string`: Resource type of the linked resource.
    * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * type `string`: Resource type.
  * id `string`: Resource ID.

### ResourceNavigationLinkFormat
* ResourceNavigationLinkFormat `object`: Properties of ResourceNavigationLink.
  * link `string`: Link to the external resource.
  * linkedResourceType `string`: Resource type of the linked resource.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### ResourceNavigationLinksListResult
* ResourceNavigationLinksListResult `object`: Response for ResourceNavigationLinks_List operation.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The resource navigation links in a subnet.
    * items [ResourceNavigationLink](#resourcenavigationlink)

### ServiceAssociationLink
* ServiceAssociationLink `object`: ServiceAssociationLink resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties `object`: Properties of ServiceAssociationLink.
    * allowDelete `boolean`: If true, the resource can be deleted.
    * link `string`: Link to the external resource.
    * linkedResourceType `string`: Resource type of the linked resource.
    * locations `array`: A list of locations.
      * items `string`
    * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * type `string`: Resource type.
  * id `string`: Resource ID.

### ServiceAssociationLinkPropertiesFormat
* ServiceAssociationLinkPropertiesFormat `object`: Properties of ServiceAssociationLink.
  * allowDelete `boolean`: If true, the resource can be deleted.
  * link `string`: Link to the external resource.
  * linkedResourceType `string`: Resource type of the linked resource.
  * locations `array`: A list of locations.
    * items `string`
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### ServiceAssociationLinksListResult
* ServiceAssociationLinksListResult `object`: Response for ServiceAssociationLinks_List operation.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The service association links in a subnet.
    * items [ServiceAssociationLink](#serviceassociationlink)

### ServiceDelegationPropertiesFormat
* ServiceDelegationPropertiesFormat `object`: Properties of a service delegation.
  * actions `array`: Describes the actions permitted to the service upon delegation.
    * items `string`
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * serviceName `string`: The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers).

### ServiceEndpointPropertiesFormat
* ServiceEndpointPropertiesFormat `object`: The service endpoint properties.
  * locations `array`: A list of locations.
    * items `string`
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * service `string`: The type of the endpoint service.

### Subnet
* Subnet `object`: Subnet in a virtual network resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [SubnetPropertiesFormat](#subnetpropertiesformat)
  * id `string`: Resource ID.

### SubnetListResult
* SubnetListResult `object`: Response for ListSubnets API service callRetrieves all subnet that belongs to a virtual network.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The subnets in a virtual network.
    * items [Subnet](#subnet)

### SubnetPropertiesFormat
* SubnetPropertiesFormat `object`: Properties of the subnet.
  * addressPrefix `string`: The address prefix for the subnet.
  * addressPrefixes `array`: List of address prefixes for the subnet.
    * items `string`
  * delegations `array`: An array of references to the delegations on the subnet.
    * items `object`: Details the service to which the subnet is delegated.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * name `string`: The name of the resource that is unique within a subnet. This name can be used to access the resource.
      * properties `object`: Properties of a service delegation.
        * actions `array`: Describes the actions permitted to the service upon delegation.
          * items `string`
        * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
        * serviceName `string`: The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers).
      * id `string`: Resource ID.
  * ipConfigurationProfiles `array`: Array of IP configuration profiles which reference this subnet.
    * items [./networkProfile.jsonIPConfigurationProfile](#./networkprofile.jsonipconfigurationprofile)
  * ipConfigurations `array`: An array of references to the network interface IP configurations using subnet.
    * items [./networkInterface.jsonIPConfiguration](#./networkinterface.jsonipconfiguration)
  * natGateway `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * networkSecurityGroup [./networkSecurityGroup.jsonNetworkSecurityGroup](#./networksecuritygroup.jsonnetworksecuritygroup)
  * privateEndpointNetworkPolicies `string`: Enable or Disable apply network policies on private end point in the subnet.
  * privateEndpoints `array`: An array of references to private endpoints.
    * items [./privateEndpoint.jsonPrivateEndpoint](#./privateendpoint.jsonprivateendpoint)
  * privateLinkServiceNetworkPolicies `string`: Enable or Disable apply network policies on private link service in the subnet.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * purpose `string`: A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
  * resourceNavigationLinks `array`: An array of references to the external resources using subnet.
    * items `object`: ResourceNavigationLink resource.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * id `string`: Resource navigation link identifier.
      * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource.
      * properties `object`: Properties of ResourceNavigationLink.
        * link `string`: Link to the external resource.
        * linkedResourceType `string`: Resource type of the linked resource.
        * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
      * type `string`: Resource type.
      * id `string`: Resource ID.
  * routeTable [./routeTable.jsonRouteTable](#./routetable.jsonroutetable)
  * serviceAssociationLinks `array`: An array of references to services injecting into this subnet.
    * items `object`: ServiceAssociationLink resource.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource.
      * properties `object`: Properties of ServiceAssociationLink.
        * allowDelete `boolean`: If true, the resource can be deleted.
        * link `string`: Link to the external resource.
        * linkedResourceType `string`: Resource type of the linked resource.
        * locations `array`: A list of locations.
          * items `string`
        * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
      * type `string`: Resource type.
      * id `string`: Resource ID.
  * serviceEndpointPolicies `array`: An array of service endpoint policies.
    * items [./serviceEndpointPolicy.jsonServiceEndpointPolicy](#./serviceendpointpolicy.jsonserviceendpointpolicy)
  * serviceEndpoints `array`: An array of service endpoints.
    * items `object`: The service endpoint properties.
      * locations `array`: A list of locations.
        * items `string`
      * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
      * service `string`: The type of the endpoint service.

### UnprepareNetworkPoliciesRequest
* UnprepareNetworkPoliciesRequest `object`: Details of UnprepareNetworkPolicies for Subnet.
  * serviceName `string`: The name of the service for which subnet is being unprepared for.

### VirtualNetwork
* VirtualNetwork `object`: Virtual Network resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [VirtualNetworkPropertiesFormat](#virtualnetworkpropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### VirtualNetworkBgpCommunities
* VirtualNetworkBgpCommunities `object`: Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET.
  * regionalCommunity `string`: The BGP community associated with the region of the virtual network
  * virtualNetworkCommunity **required** `string`: The BGP community associated with the virtual network

### VirtualNetworkListResult
* VirtualNetworkListResult `object`: Response for the ListVirtualNetworks API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of VirtualNetwork resources in a resource group.
    * items [VirtualNetwork](#virtualnetwork)

### VirtualNetworkListUsageResult
* VirtualNetworkListUsageResult `object`: Response for the virtual networks GetUsage API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: VirtualNetwork usage stats.
    * items [VirtualNetworkUsage](#virtualnetworkusage)

### VirtualNetworkPeering
* VirtualNetworkPeering `object`: Peerings in a virtual network resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [VirtualNetworkPeeringPropertiesFormat](#virtualnetworkpeeringpropertiesformat)
  * id `string`: Resource ID.

### VirtualNetworkPeeringListResult
* VirtualNetworkPeeringListResult `object`: Response for ListSubnets API service call. Retrieves all subnets that belong to a virtual network.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The peerings in a virtual network.
    * items [VirtualNetworkPeering](#virtualnetworkpeering)

### VirtualNetworkPeeringPropertiesFormat
* VirtualNetworkPeeringPropertiesFormat `object`: Properties of the virtual network peering.
  * allowForwardedTraffic `boolean`: Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
  * allowGatewayTransit `boolean`: If gateway links can be used in remote virtual networking to link to this virtual network.
  * allowVirtualNetworkAccess `boolean`: Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
  * peeringState `string` (values: Initiated, Connected, Disconnected): The status of the virtual network peering.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * remoteAddressSpace [AddressSpace](#addressspace)
  * remoteVirtualNetwork `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * useRemoteGateways `boolean`: If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.

### VirtualNetworkPropertiesFormat
* VirtualNetworkPropertiesFormat `object`: Properties of the virtual network.
  * addressSpace [AddressSpace](#addressspace)
  * bgpCommunities [VirtualNetworkBgpCommunities](#virtualnetworkbgpcommunities)
  * ddosProtectionPlan `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * dhcpOptions [DhcpOptions](#dhcpoptions)
  * enableDdosProtection `boolean`: Indicates if DDoS protection is enabled for all the protected resources in the virtual network. It requires a DDoS protection plan associated with the resource.
  * enableVmProtection `boolean`: Indicates if VM protection is enabled for all the subnets in the virtual network.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * resourceGuid `string`: The resourceGuid property of the Virtual Network resource.
  * subnets `array`: A list of subnets in a Virtual Network.
    * items [Subnet](#subnet)
  * virtualNetworkPeerings `array`: A list of peerings in a Virtual Network.
    * items [VirtualNetworkPeering](#virtualnetworkpeering)

### VirtualNetworkUsage
* VirtualNetworkUsage `object`: Usage details for subnet.
  * currentValue `number`: Indicates number of IPs used from the Subnet.
  * id `string`: Subnet identifier.
  * limit `number`: Indicates the size of the subnet.
  * name [VirtualNetworkUsageName](#virtualnetworkusagename)
  * unit `string`: Usage units. Returns 'Count'.

### VirtualNetworkUsageName
* VirtualNetworkUsageName `object`: Usage strings container.
  * localizedValue `string`: Localized subnet size and usage string.
  * value `string`: Subnet size and usage string.


