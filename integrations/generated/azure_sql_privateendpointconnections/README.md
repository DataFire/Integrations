# @datafire/azure_sql_privateendpointconnections

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_privateendpointconnections
```
```js
let azure_sql_privateendpointconnections = require('@datafire/azure_sql_privateendpointconnections').create({
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

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### PrivateEndpointConnections_ListByServer
Gets all private endpoint connections on a server.


```js
azure_sql_privateendpointconnections.PrivateEndpointConnections_ListByServer({
  "resourceGroupName": "",
  "serverName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [PrivateEndpointConnectionListResult](#privateendpointconnectionlistresult)

### PrivateEndpointConnections_Delete
Deletes a private endpoint connection with a given name.


```js
azure_sql_privateendpointconnections.PrivateEndpointConnections_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "privateEndpointConnectionName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * privateEndpointConnectionName **required** `string`
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### PrivateEndpointConnections_Get
Gets a private endpoint connection.


```js
azure_sql_privateendpointconnections.PrivateEndpointConnections_Get({
  "resourceGroupName": "",
  "serverName": "",
  "privateEndpointConnectionName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * privateEndpointConnectionName **required** `string`: The name of the private endpoint connection.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [PrivateEndpointConnection](#privateendpointconnection)

### PrivateEndpointConnections_CreateOrUpdate
Approve or reject a private endpoint connection with a given name.


```js
azure_sql_privateendpointconnections.PrivateEndpointConnections_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "privateEndpointConnectionName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * privateEndpointConnectionName **required** `string`
  * parameters **required** [PrivateEndpointConnection](#privateendpointconnection)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [PrivateEndpointConnection](#privateendpointconnection)



## Definitions

### PrivateEndpointConnection
* PrivateEndpointConnection `object`: A private endpoint connection
  * properties [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### PrivateEndpointConnectionListResult
* PrivateEndpointConnectionListResult `object`: A list of private endpoint connections.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [PrivateEndpointConnection](#privateendpointconnection)

### PrivateEndpointConnectionProperties
* PrivateEndpointConnectionProperties `object`: Properties of a private endpoint connection.
  * privateEndpoint [PrivateEndpointProperty](#privateendpointproperty)
  * privateLinkServiceConnectionState [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty)
  * provisioningState `string`: State of the private endpoint connection.

### PrivateEndpointProperty
* PrivateEndpointProperty `object`
  * id `string`: Resource id of the private endpoint.

### PrivateLinkServiceConnectionStateProperty
* PrivateLinkServiceConnectionStateProperty `object`
  * actionsRequired `string`: The actions required for private link service connection.
  * description **required** `string`: The private link service connection description.
  * status **required** `string`: The private link service connection status.

### ProxyResource
* ProxyResource `object`: ARM proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


