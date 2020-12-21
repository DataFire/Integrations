# @datafire/azure_sql_privatelinkresources

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_privatelinkresources
```
```js
let azure_sql_privatelinkresources = require('@datafire/azure_sql_privatelinkresources').create({
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

### PrivateLinkResources_ListByServer
Gets the private link resources for SQL server.


```js
azure_sql_privatelinkresources.PrivateLinkResources_ListByServer({
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
* output [PrivateLinkResourceListResult](#privatelinkresourcelistresult)

### PrivateLinkResources_Get
Gets a private link resource for SQL server.


```js
azure_sql_privatelinkresources.PrivateLinkResources_Get({
  "resourceGroupName": "",
  "serverName": "",
  "groupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * groupName **required** `string`: The name of the private link resource.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [PrivateLinkResource](#privatelinkresource)



## Definitions

### PrivateLinkResource
* PrivateLinkResource `object`: A private link resource
  * properties [PrivateLinkResourceProperties](#privatelinkresourceproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### PrivateLinkResourceListResult
* PrivateLinkResourceListResult `object`: A list of private link resources
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [PrivateLinkResource](#privatelinkresource)

### PrivateLinkResourceProperties
* PrivateLinkResourceProperties `object`: Properties of a private link resource.
  * groupId `string`: The private link resource group id.
  * requiredMembers `array`: The private link resource required member names.
    * items `string`

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


