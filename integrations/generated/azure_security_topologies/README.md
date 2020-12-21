# @datafire/azure_security_topologies

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_topologies
```
```js
let azure_security_topologies = require('@datafire/azure_security_topologies').create({
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

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### Topology_ListByHomeRegion
Gets a list that allows to build a topology view of a subscription and location.


```js
azure_security_topologies.Topology_ListByHomeRegion({
  "subscriptionId": "",
  "ascLocation": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * api-version **required** `string`: API version for the operation

#### Output
* output [TopologyList](#topologylist)

### Topology_List
Gets a list that allows to build a topology view of a subscription.


```js
azure_security_topologies.Topology_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * api-version **required** `string`: API version for the operation

#### Output
* output [TopologyList](#topologylist)

### Topology_Get
Gets a specific topology component.


```js
azure_security_topologies.Topology_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "ascLocation": "",
  "topologyResourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * topologyResourceName **required** `string`: Name of a topology resources collection.
  * api-version **required** `string`: API version for the operation

#### Output
* output [TopologyResource](#topologyresource)



## Definitions

### TopologyList
* TopologyList `object`
  * nextLink `string`: The URI to fetch the next page.
  * value `array`
    * items [TopologyResource](#topologyresource)

### TopologyResource
* TopologyResource `object`
  * properties [TopologyResourceProperties](#topologyresourceproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type
  * location `string`: Location where the resource is stored

### TopologyResourceProperties
* TopologyResourceProperties `object`
  * calculatedDateTime `string`: The UTC time on which the topology was calculated
  * topologyResources `array`: Azure resources which are part of this topology resource
    * items [TopologySingleResource](#topologysingleresource)

### TopologySingleResource
* TopologySingleResource `object`
  * children `array`: Azure resources connected to this resource which are in lower level in the topology view
    * items [TopologySingleResourceChild](#topologysingleresourcechild)
  * location `string`: The location of this resource
  * networkZones `string`: Indicates the resource connectivity level to the Internet (InternetFacing, Internal ,etc.)
  * parents `array`: Azure resources connected to this resource which are in higher level in the topology view
    * items [TopologySingleResourceParent](#topologysingleresourceparent)
  * recommendationsExist `boolean`: Indicates if the resource has security recommendations
  * resourceId `string`: Azure resource id
  * severity `string`: The security severity of the resource
  * topologyScore `integer`: Score of the resource based on its security severity

### TopologySingleResourceChild
* TopologySingleResourceChild `object`
  * resourceId `string`: Azure resource id which serves as child resource in topology view

### TopologySingleResourceParent
* TopologySingleResourceParent `object`
  * resourceId `string`: Azure resource id which serves as parent resource in topology view


