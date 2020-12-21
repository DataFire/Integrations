# @datafire/azure_cosmos_db_privatelinkresources

Client library for Cosmos DB

## Installation and Usage
```bash
npm install --save @datafire/azure_cosmos_db_privatelinkresources
```
```js
let azure_cosmos_db_privatelinkresources = require('@datafire/azure_cosmos_db_privatelinkresources').create({
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

### PrivateLinkResources_ListByDatabaseAccount
Gets the private link resources that need to be created for a Cosmos DB account.


```js
azure_cosmos_db_privatelinkresources.PrivateLinkResources_ListByDatabaseAccount({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "accountName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * accountName **required** `string`: Cosmos DB database account name.

#### Output
* output [PrivateLinkResourceListResult](#privatelinkresourcelistresult)

### PrivateLinkResources_Get
Gets the private link resources that need to be created for a Cosmos DB account.


```js
azure_cosmos_db_privatelinkresources.PrivateLinkResources_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "accountName": "",
  "groupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * accountName **required** `string`: Cosmos DB database account name.
  * groupName **required** `string`: The name of the private link resource.

#### Output
* output [PrivateLinkResource](#privatelinkresource)



## Definitions

### PrivateLinkResource
* PrivateLinkResource `object`: A private link resource
  * properties [PrivateLinkResourceProperties](#privatelinkresourceproperties)
  * id `string`: The unique resource identifier of the database account.
  * name `string`: The name of the database account.
  * type `string`: The type of Azure resource.

### PrivateLinkResourceListResult
* PrivateLinkResourceListResult `object`: A list of private link resources
  * value `array`: Array of private link resources
    * items [PrivateLinkResource](#privatelinkresource)

### PrivateLinkResourceProperties
* PrivateLinkResourceProperties `object`: Properties of a private link resource.
  * groupId `string`: The private link resource group id.
  * requiredMembers `array`: The private link resource required member names.
    * items `string`


