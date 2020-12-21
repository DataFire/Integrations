# @datafire/azure_azsadmin_virtualnetworks

Client library for NetworkAdminManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_virtualnetworks
```
```js
let azure_azsadmin_virtualnetworks = require('@datafire/azure_azsadmin_virtualnetworks').create({
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

Virtual Network admin operation endpoints and objects.

## Actions

### VirtualNetworks_List
Get a list of all virtual networks.


```js
azure_azsadmin_virtualnetworks.VirtualNetworks_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * $filter `string`: OData filter parameter.
  * $orderBy `string`: OData orderBy parameter.
  * $top `string`: OData top parameter.
  * $skip `string`: OData skip parameter.
  * $inlineCount `string`: OData inline count parameter.

#### Output
* output [VirtualNetworksList](#virtualnetworkslist)



## Definitions

### VirtualNetwork
* VirtualNetwork `object`: This represents a virtual network.
  * properties [VirtualNetworkProperties](#virtualnetworkproperties)
  * id `string`: URI of the resource.
  * location `string`: Region location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### VirtualNetworkConfigurationState
* VirtualNetworkConfigurationState `object`: The virtual network configuration state.
  * hostErrors `array`: List of NIC errors associated with the resource.
    * items [VirtualNetworkConfigurationStatus](#virtualnetworkconfigurationstatus)
  * lastUpdatedTime `string`: Last updated time for the running state.
  * status `string` (values: Failure, Warning, Success, Uninitialized, InProgress, Unknown): The virtual network status.
  * virtualNetworkInterfaceErrors `array`: List of NIC errors associated with the resource.
    * items [VirtualNetworkConfigurationStatus](#virtualnetworkconfigurationstatus)

### VirtualNetworkConfigurationStatus
* VirtualNetworkConfigurationStatus `object`: Virtual network configuration status.
  * lastUpdatedTime `string`: Last updated time for the configuration status.
  * status `string` (values: Failure, Warning, Success, Uninitialized, InProgress, Unknown): The virtual network configuration status.

### VirtualNetworkProperties
* VirtualNetworkProperties `object`: Properties of a virtual network.
  * configurationState [VirtualNetworkConfigurationState](#virtualnetworkconfigurationstate)
  * provisioningState `string`: The provisioning state.
  * subscriptionId `string`: The subscription ID.
  * tenantResourceUri `string`: The tenant resource URI.

### VirtualNetworksList
* VirtualNetworksList `object`: Pageable list of virtual networks.
  * nextLink `string`: URI to the next page.
  * value `array`: List of virtual networks for this page.
    * items [VirtualNetwork](#virtualnetwork)


