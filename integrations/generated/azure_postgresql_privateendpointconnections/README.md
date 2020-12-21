# @datafire/azure_postgresql_privateendpointconnections

Client library for PostgreSQLManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_postgresql_privateendpointconnections
```
```js
let azure_postgresql_privateendpointconnections = require('@datafire/azure_postgresql_privateendpointconnections').create({
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

The Microsoft Azure management API provides create, read, update, and delete functionality for Azure PostgreSQL resources including servers, databases, firewall rules, VNET rules, security alert policies, log files and configurations with new business model.

## Actions

### PrivateEndpointConnections_ListByServer
Gets all private endpoint connections on a server.


```js
azure_postgresql_privateendpointconnections.PrivateEndpointConnections_ListByServer({
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
azure_postgresql_privateendpointconnections.PrivateEndpointConnections_Delete({
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
azure_postgresql_privateendpointconnections.PrivateEndpointConnections_Get({
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

### PrivateEndpointConnections_UpdateTags
Updates private endpoint connection with the specified tags.


```js
azure_postgresql_privateendpointconnections.PrivateEndpointConnections_UpdateTags({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "privateEndpointConnectionName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * privateEndpointConnectionName **required** `string`
  * parameters **required** [TagsObject](#tagsobject)

#### Output
* output [PrivateEndpointConnection](#privateendpointconnection)

### PrivateEndpointConnections_CreateOrUpdate
Approve or reject a private endpoint connection with a given name.


```js
azure_postgresql_privateendpointconnections.PrivateEndpointConnections_CreateOrUpdate({
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

### CloudError
* CloudError `object`: An error response from the Batch service.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: An error response from the Batch service.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error.

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

### TagsObject
* TagsObject `object`: Tags object for patch operations.
  * tags `object`: Resource tags.


