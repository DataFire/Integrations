# @datafire/azure_security_allowedconnections

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_allowedconnections
```
```js
let azure_security_allowedconnections = require('@datafire/azure_security_allowedconnections').create({
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

### AllowedConnections_List
Gets the list of all possible traffic between resources for the subscription


```js
azure_security_allowedconnections.AllowedConnections_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * api-version **required** `string`: API version for the operation

#### Output
* output [AllowedConnectionsList](#allowedconnectionslist)

### AllowedConnections_ListByHomeRegion
Gets the list of all possible traffic between resources for the subscription and location.


```js
azure_security_allowedconnections.AllowedConnections_ListByHomeRegion({
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
* output [AllowedConnectionsList](#allowedconnectionslist)

### AllowedConnections_Get
Gets the list of all possible traffic between resources for the subscription and location, based on connection type.


```js
azure_security_allowedconnections.AllowedConnections_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "ascLocation": "",
  "connectionType": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * connectionType **required** `string` (values: Internal, External): The type of allowed connections (Internal, External)
  * api-version **required** `string`: API version for the operation

#### Output
* output [AllowedConnectionsResource](#allowedconnectionsresource)



## Definitions

### AllowedConnectionsList
* AllowedConnectionsList `object`: List of all possible traffic between Azure resources
  * nextLink `string`: The URI to fetch the next page.
  * value `array`
    * items [AllowedConnectionsResource](#allowedconnectionsresource)

### AllowedConnectionsResource
* AllowedConnectionsResource `object`: The resource whose properties describes the allowed traffic between Azure resources
  * properties [AllowedConnectionsResourceProperties](#allowedconnectionsresourceproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type
  * location `string`: Location where the resource is stored

### AllowedConnectionsResourceProperties
* AllowedConnectionsResourceProperties `object`: Describes the allowed traffic between Azure resources
  * calculatedDateTime `string`: The UTC time on which the allowed connections resource was calculated
  * connectableResources `array`: List of connectable resources
    * items [ConnectableResource](#connectableresource)

### ConnectableResource
* ConnectableResource `object`: Describes the allowed inbound and outbound traffic of an Azure resource
  * id `string`: The Azure resource id
  * inboundConnectedResources `array`: The list of Azure resources that the resource has inbound allowed connection from
    * items [ConnectedResource](#connectedresource)
  * outboundConnectedResources `array`: The list of Azure resources that the resource has outbound allowed connection to
    * items [ConnectedResource](#connectedresource)

### ConnectedResource
* ConnectedResource `object`: Describes properties of a connected resource
  * connectedResourceId `string`: The Azure resource id of the connected resource
  * tcpPorts `string`: The allowed tcp ports
  * udpPorts `string`: The allowed udp ports


