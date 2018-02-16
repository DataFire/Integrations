# @datafire/azure_sql_servers

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_servers
```
```js
let azure_sql_servers = require('@datafire/azure_sql_servers').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_servers.Servers_List({
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### Servers_List
Gets a list of all servers in the subscription.


```js
azure_sql_servers.Servers_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ServerListResult](#serverlistresult)

### Servers_ListByResourceGroup
Gets a list of servers in a resource groups.


```js
azure_sql_servers.Servers_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ServerListResult](#serverlistresult)

### Servers_Delete
Deletes a server.


```js
azure_sql_servers.Servers_Delete({
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
*Output schema unknown*

### Servers_Get
Gets a server.


```js
azure_sql_servers.Servers_Get({
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
* output [Server](#server)

### Servers_Update
Updates a server.


```js
azure_sql_servers.Servers_Update({
  "resourceGroupName": "",
  "serverName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * parameters **required** [ServerUpdate](#serverupdate)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [Server](#server)

### Servers_CreateOrUpdate
Creates or updates a server.


```js
azure_sql_servers.Servers_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "parameters": {
    "location": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * parameters **required** [Server](#server)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [Server](#server)



## Definitions

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ResourceIdentity
* ResourceIdentity `object`: Azure Active Directory identity configuration for a resource.
  * principalId `string`: The Azure Active Directory principal id.
  * tenantId `string`: The Azure Active Directory tenant id.
  * type `string` (values: SystemAssigned): The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.

### Server
* Server `object`: An Azure SQL Database server.
  * identity [ResourceIdentity](#resourceidentity)
  * kind `string`: Kind of sql server. This is metadata used for the Azure portal experience.
  * properties [ServerProperties](#serverproperties)
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ServerListResult
* ServerListResult `object`: A list of servers.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [Server](#server)

### ServerProperties
* ServerProperties `object`: The properties of a server.
  * administratorLogin `string`: Administrator username for the server. Once created it cannot be changed.
  * administratorLoginPassword `string`: The administrator login password (required for server creation).
  * fullyQualifiedDomainName `string`: The fully qualified domain name of the server.
  * state `string`: The state of the server.
  * version `string`: The version of the server.

### ServerUpdate
* ServerUpdate `object`: An update request for an Azure SQL Database server.
  * properties [ServerProperties](#serverproperties)
  * tags `object`: Resource tags.

### TrackedResource
* TrackedResource `object`: ARM tracked top level resource.
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


