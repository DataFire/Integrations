# @datafire/azure_mariadb_privatelinkresources

Client library for MariaDBManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_mariadb_privatelinkresources
```
```js
let azure_mariadb_privatelinkresources = require('@datafire/azure_mariadb_privatelinkresources').create({
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

The Microsoft Azure management API provides create, read, update, and delete functionality for Azure MariaDB resources including servers, databases, firewall rules, VNET rules, security alert policies, log files and configurations with new business model.

## Actions

### PrivateLinkResources_ListByServer
Gets the private link resources for MariaDB server.


```js
azure_mariadb_privatelinkresources.PrivateLinkResources_ListByServer({
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
Gets a private link resource for MariaDB server.


```js
azure_mariadb_privatelinkresources.PrivateLinkResources_Get({
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


