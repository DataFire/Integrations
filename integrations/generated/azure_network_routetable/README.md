# @datafire/azure_network_routetable

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_routetable
```
```js
let azure_network_routetable = require('@datafire/azure_network_routetable').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_network_routetable.RouteTables_ListAll({
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Microsoft Azure Network management API provides a RESTful set of web services that interact with Microsoft Azure Networks service to manage your network resources. The API has entities that capture the relationship between an end user and the Microsoft Azure Networks service.

## Actions

### RouteTables_ListAll
Gets all route tables in a subscription.


```js
azure_network_routetable.RouteTables_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RouteTableListResult](#routetablelistresult)

### RouteTables_List
Gets all route tables in a resource group.


```js
azure_network_routetable.RouteTables_List({
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
* output [RouteTableListResult](#routetablelistresult)

### RouteTables_Delete
Deletes the specified route table.


```js
azure_network_routetable.RouteTables_Delete({
  "resourceGroupName": "",
  "routeTableName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeTableName **required** `string`: The name of the route table.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### RouteTables_Get
Gets the specified route table.


```js
azure_network_routetable.RouteTables_Get({
  "resourceGroupName": "",
  "routeTableName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeTableName **required** `string`: The name of the route table.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output [RouteTable](#routetable)

### RouteTables_UpdateTags
Updates a route table tags.


```js
azure_network_routetable.RouteTables_UpdateTags({
  "resourceGroupName": "",
  "routeTableName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeTableName **required** `string`: The name of the route table.
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RouteTable](#routetable)

### RouteTables_CreateOrUpdate
Create or updates a route table in a specified resource group.


```js
azure_network_routetable.RouteTables_CreateOrUpdate({
  "resourceGroupName": "",
  "routeTableName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeTableName **required** `string`: The name of the route table.
  * parameters **required** [RouteTable](#routetable)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RouteTable](#routetable)

### Routes_List
Gets all routes in a route table.


```js
azure_network_routetable.Routes_List({
  "resourceGroupName": "",
  "routeTableName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeTableName **required** `string`: The name of the route table.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RouteListResult](#routelistresult)

### Routes_Delete
Deletes the specified route from a route table.


```js
azure_network_routetable.Routes_Delete({
  "resourceGroupName": "",
  "routeTableName": "",
  "routeName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeTableName **required** `string`: The name of the route table.
  * routeName **required** `string`: The name of the route.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Routes_Get
Gets the specified route from a route table.


```js
azure_network_routetable.Routes_Get({
  "resourceGroupName": "",
  "routeTableName": "",
  "routeName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeTableName **required** `string`: The name of the route table.
  * routeName **required** `string`: The name of the route.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Route](#route)

### Routes_CreateOrUpdate
Creates or updates a route in the specified route table.


```js
azure_network_routetable.Routes_CreateOrUpdate({
  "resourceGroupName": "",
  "routeTableName": "",
  "routeName": "",
  "routeParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * routeTableName **required** `string`: The name of the route table.
  * routeName **required** `string`: The name of the route.
  * routeParameters **required** [Route](#route)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Route](#route)



## Definitions

### Route
* Route `object`: Route resource
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties `object`: Route resource
    * addressPrefix `string`: The destination CIDR to which the route applies.
    * nextHopIpAddress `string`: The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
    * nextHopType **required** `string` (values: VirtualNetworkGateway, VnetLocal, Internet, VirtualAppliance, None): The type of Azure hop the packet should be sent to. Possible values are: 'VirtualNetworkGateway', 'VnetLocal', 'Internet', 'VirtualAppliance', and 'None'
    * provisioningState `string`: The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
  * id `string`: Resource ID.

### RouteListResult
* RouteListResult `object`: Response for the ListRoute API service call
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: Gets a list of routes in a resource group.
    * items [Route](#route)

### RoutePropertiesFormat
* RoutePropertiesFormat `object`: Route resource
  * addressPrefix `string`: The destination CIDR to which the route applies.
  * nextHopIpAddress `string`: The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
  * nextHopType **required** `string` (values: VirtualNetworkGateway, VnetLocal, Internet, VirtualAppliance, None): The type of Azure hop the packet should be sent to. Possible values are: 'VirtualNetworkGateway', 'VnetLocal', 'Internet', 'VirtualAppliance', and 'None'
  * provisioningState `string`: The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

### RouteTable
* RouteTable `object`: Route table resource.
  * etag `string`: Gets a unique read-only string that changes whenever the resource is updated.
  * properties [RouteTablePropertiesFormat](#routetablepropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### RouteTableListResult
* RouteTableListResult `object`: Response for the ListRouteTable API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: Gets a list of route tables in a resource group.
    * items [RouteTable](#routetable)

### RouteTablePropertiesFormat
* RouteTablePropertiesFormat `object`: Route Table resource
  * disableBgpRoutePropagation `boolean`: Gets or sets whether to disable the routes learned by BGP on that route table. True means disable.
  * provisioningState `string`: The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
  * routes `array`: Collection of routes contained within a route table.
    * items `object`: Route resource
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
      * properties `object`: Route resource
        * addressPrefix `string`: The destination CIDR to which the route applies.
        * nextHopIpAddress `string`: The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
        * nextHopType **required** `string` (values: VirtualNetworkGateway, VnetLocal, Internet, VirtualAppliance, None): The type of Azure hop the packet should be sent to. Possible values are: 'VirtualNetworkGateway', 'VnetLocal', 'Internet', 'VirtualAppliance', and 'None'
        * provisioningState `string`: The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
      * id `string`: Resource ID.
  * subnets `array`: A collection of references to subnets.
    * items [./virtualNetwork.jsonSubnet](#./virtualnetwork.jsonsubnet)


