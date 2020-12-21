# @datafire/azure_cosmos_db_privateendpointconnection

Client library for Cosmos DB

## Installation and Usage
```bash
npm install --save @datafire/azure_cosmos_db_privateendpointconnection
```
```js
let azure_cosmos_db_privateendpointconnection = require('@datafire/azure_cosmos_db_privateendpointconnection').create({
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

Azure Cosmos DB Database Service Resource Provider REST API

## Actions

### PrivateEndpointConnections_ListByDatabaseAccount
List all private endpoint connections on a Cosmos DB account.


```js
azure_cosmos_db_privateendpointconnection.PrivateEndpointConnections_ListByDatabaseAccount({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "accountName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * accountName **required** `string`: Cosmos DB database account name.

#### Output
* output [PrivateEndpointConnectionListResult](#privateendpointconnectionlistresult)

### PrivateEndpointConnections_Delete
Deletes a private endpoint connection with a given name.


```js
azure_cosmos_db_privateendpointconnection.PrivateEndpointConnections_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "accountName": "",
  "privateEndpointConnectionName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * accountName **required** `string`: Cosmos DB database account name.
  * privateEndpointConnectionName **required** `string`: The name of the private endpoint connection.

#### Output
*Output schema unknown*

### PrivateEndpointConnections_Get
Gets a private endpoint connection.


```js
azure_cosmos_db_privateendpointconnection.PrivateEndpointConnections_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "accountName": "",
  "privateEndpointConnectionName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * accountName **required** `string`: Cosmos DB database account name.
  * privateEndpointConnectionName **required** `string`: The name of the private endpoint connection.

#### Output
* output [PrivateEndpointConnection](#privateendpointconnection)

### PrivateEndpointConnections_CreateOrUpdate
Approve or reject a private endpoint connection with a given name.


```js
azure_cosmos_db_privateendpointconnection.PrivateEndpointConnections_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "accountName": "",
  "privateEndpointConnectionName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * accountName **required** `string`: Cosmos DB database account name.
  * privateEndpointConnectionName **required** `string`: The name of the private endpoint connection.
  * parameters **required** [PrivateEndpointConnection](#privateendpointconnection)

#### Output
* output [PrivateEndpointConnection](#privateendpointconnection)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Error Response.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.

### PrivateEndpointConnection
* PrivateEndpointConnection `object`: A private endpoint connection
  * properties [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### PrivateEndpointConnectionListResult
* PrivateEndpointConnectionListResult `object`: A list of private endpoint connections
  * value `array`: Array of private endpoint connections
    * items [PrivateEndpointConnection](#privateendpointconnection)

### PrivateEndpointConnectionProperties
* PrivateEndpointConnectionProperties `object`: Properties of a private endpoint connection.
  * privateEndpoint [PrivateEndpointProperty](#privateendpointproperty)
  * privateLinkServiceConnectionState [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty)

### PrivateEndpointProperty
* PrivateEndpointProperty `object`: Private endpoint which the connection belongs to.
  * id `string`: Resource id of the private endpoint.

### PrivateLinkServiceConnectionStateProperty
* PrivateLinkServiceConnectionStateProperty `object`: Connection State of the Private Endpoint Connection.
  * actionsRequired `string`: Any action that is required beyond basic workflow (approve/ reject/ disconnect)
  * description `string`: The private link service connection description.
  * status `string`: The private link service connection status.


