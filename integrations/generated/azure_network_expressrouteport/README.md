# @datafire/azure_network_expressrouteport

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_expressrouteport
```
```js
let azure_network_expressrouteport = require('@datafire/azure_network_expressrouteport').create({
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

### ExpressRoutePorts_List
List all the ExpressRoutePort resources in the specified subscription.


```js
azure_network_expressrouteport.ExpressRoutePorts_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [ExpressRoutePortListResult](#expressrouteportlistresult)

### ExpressRoutePortsLocations_List
Retrieves all ExpressRoutePort peering locations. Does not return available bandwidths for each location. Available bandwidths can only be obtained when retrieving a specific peering location.


```js
azure_network_expressrouteport.ExpressRoutePortsLocations_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [ExpressRoutePortsLocationListResult](#expressrouteportslocationlistresult)

### ExpressRoutePortsLocations_Get
Retrieves a single ExpressRoutePort peering location, including the list of available bandwidths available at said peering location.


```js
azure_network_expressrouteport.ExpressRoutePortsLocations_Get({
  "subscriptionId": "",
  "api-version": "",
  "locationName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * locationName **required** `string`: Name of the requested ExpressRoutePort peering location.

#### Output
* output [ExpressRoutePortsLocation](#expressrouteportslocation)

### ExpressRoutePorts_ListByResourceGroup
List all the ExpressRoutePort resources in the specified resource group.


```js
azure_network_expressrouteport.ExpressRoutePorts_ListByResourceGroup({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: The name of the resource group.

#### Output
* output [ExpressRoutePortListResult](#expressrouteportlistresult)

### ExpressRoutePorts_Delete
Deletes the specified ExpressRoutePort resource.


```js
azure_network_expressrouteport.ExpressRoutePorts_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "expressRoutePortName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: The name of the resource group.
  * expressRoutePortName **required** `string`: The name of the ExpressRoutePort resource.

#### Output
*Output schema unknown*

### ExpressRoutePorts_Get
Retrieves the requested ExpressRoutePort resource.


```js
azure_network_expressrouteport.ExpressRoutePorts_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "expressRoutePortName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: The name of the resource group.
  * expressRoutePortName **required** `string`: The name of ExpressRoutePort.

#### Output
* output [ExpressRoutePort](#expressrouteport)

### ExpressRoutePorts_UpdateTags
Update ExpressRoutePort tags.


```js
azure_network_expressrouteport.ExpressRoutePorts_UpdateTags({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "expressRoutePortName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: The name of the resource group.
  * expressRoutePortName **required** `string`: The name of the ExpressRoutePort resource.
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.

#### Output
* output [ExpressRoutePort](#expressrouteport)

### ExpressRoutePorts_CreateOrUpdate
Creates or updates the specified ExpressRoutePort resource.


```js
azure_network_expressrouteport.ExpressRoutePorts_CreateOrUpdate({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "expressRoutePortName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: The name of the resource group.
  * expressRoutePortName **required** `string`: The name of the ExpressRoutePort resource.
  * parameters **required** [ExpressRoutePort](#expressrouteport)

#### Output
* output [ExpressRoutePort](#expressrouteport)

### ExpressRouteLinks_List
Retrieve the ExpressRouteLink sub-resources of the specified ExpressRoutePort resource.


```js
azure_network_expressrouteport.ExpressRouteLinks_List({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "expressRoutePortName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: The name of the resource group.
  * expressRoutePortName **required** `string`: The name of the ExpressRoutePort resource.

#### Output
* output [ExpressRouteLinkListResult](#expressroutelinklistresult)

### ExpressRouteLinks_Get
Retrieves the specified ExpressRouteLink resource.


```js
azure_network_expressrouteport.ExpressRouteLinks_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "expressRoutePortName": "",
  "linkName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: The name of the resource group.
  * expressRoutePortName **required** `string`: The name of the ExpressRoutePort resource.
  * linkName **required** `string`: The name of the ExpressRouteLink resource.

#### Output
* output [ExpressRouteLink](#expressroutelink)



## Definitions

### ExpressRouteLink
* ExpressRouteLink `object`: ExpressRouteLink child resource definition.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of child port resource that is unique among child port resources of the parent.
  * properties [ExpressRouteLinkPropertiesFormat](#expressroutelinkpropertiesformat)
  * id `string`: Resource ID.

### ExpressRouteLinkListResult
* ExpressRouteLink List Result `object`: Response for ListExpressRouteLinks API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The list of ExpressRouteLink sub-resources.
    * items [ExpressRouteLink](#expressroutelink)

### ExpressRouteLinkMacSecConfig
* Definition of ExpressRouteLink Mac Security configuration. `object`: ExpressRouteLink Mac Security Configuration.
  * cakSecretIdentifier `string`: Keyvault Secret Identifier URL containing Mac security CAK key.
  * cipher `string` (values: gcm-aes-128, gcm-aes-256): Mac security cipher.
  * cknSecretIdentifier `string`: Keyvault Secret Identifier URL containing Mac security CKN key.

### ExpressRouteLinkPropertiesFormat
* ExpressRouteLink Resource Properties `object`: Properties specific to ExpressRouteLink resources.
  * adminState `string` (values: Enabled, Disabled): Administrative state of the physical port.
  * connectorType `string` (values: LC, SC): Physical fiber port type.
  * interfaceName `string`: Name of Azure router interface.
  * macSecConfig [ExpressRouteLinkMacSecConfig](#expressroutelinkmacsecconfig)
  * patchPanelId `string`: Mapping between physical port to patch panel port.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * rackId `string`: Mapping of physical patch panel to rack.
  * routerName `string`: Name of Azure router associated with physical port.

### ExpressRoutePort
* ExpressRoute Port `object`: ExpressRoutePort resource definition.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * identity `object`: Identity for the resource.
    * principalId `string`: The principal id of the system assigned identity. This property will only be provided for a system assigned identity.
    * tenantId `string`: The tenant id of the system assigned identity. This property will only be provided for a system assigned identity.
    * type `string` (values: SystemAssigned, UserAssigned, SystemAssigned, UserAssigned, None): The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
    * userAssignedIdentities `object`: The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
  * properties [ExpressRoutePortPropertiesFormat](#expressrouteportpropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ExpressRoutePortListResult
* ExpressRoute Port List Result `object`: Response for ListExpressRoutePorts API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of ExpressRoutePort resources.
    * items [ExpressRoutePort](#expressrouteport)

### ExpressRoutePortPropertiesFormat
* ExpressRoutePort Properties `object`: Properties specific to ExpressRoutePort resources.
  * allocationDate `string`: Date of the physical port allocation to be used in Letter of Authorization.
  * bandwidthInGbps `integer`: Bandwidth of procured ports in Gbps.
  * circuits `array`: Reference the ExpressRoute circuit(s) that are provisioned on this ExpressRoutePort resource.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * encapsulation `string` (values: Dot1Q, QinQ): Encapsulation method on physical ports.
  * etherType `string`: Ether type of the physical port.
  * links `array`: The set of physical links of the ExpressRoutePort resource.
    * items [ExpressRouteLink](#expressroutelink)
  * mtu `string`: Maximum transmission unit of the physical port pair(s).
  * peeringLocation `string`: The name of the peering location that the ExpressRoutePort is mapped to physically.
  * provisionedBandwidthInGbps `number`: Aggregate Gbps of associated circuit bandwidths.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * resourceGuid `string`: The resource GUID property of the express route port resource.

### ExpressRoutePortsLocation
* ExpressRoutePorts Peering Location `object`: Definition of the ExpressRoutePorts peering location resource.
  * properties [ExpressRoutePortsLocationPropertiesFormat](#expressrouteportslocationpropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ExpressRoutePortsLocationBandwidths
* ExpressRoutePorts Location Bandwidths `object`: Real-time inventory of available ExpressRoute port bandwidths.
  * offerName `string`: Bandwidth descriptive name.
  * valueInGbps `integer`: Bandwidth value in Gbps.

### ExpressRoutePortsLocationListResult
* ExpressRoutePorts Location List Result `object`: Response for ListExpressRoutePortsLocations API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The list of all ExpressRoutePort peering locations.
    * items [ExpressRoutePortsLocation](#expressrouteportslocation)

### ExpressRoutePortsLocationPropertiesFormat
* ExpressRoutePorts Location Properties `object`: Properties specific to ExpressRoutePorts peering location resources.
  * address `string`: Address of peering location.
  * availableBandwidths `array`: The inventory of available ExpressRoutePort bandwidths.
    * items [ExpressRoutePortsLocationBandwidths](#expressrouteportslocationbandwidths)
  * contact `string`: Contact details of peering locations.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.


