# @datafire/azure_sql_serverdnsaliases

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_serverdnsaliases
```
```js
let azure_sql_serverdnsaliases = require('@datafire/azure_sql_serverdnsaliases').create({
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

### ServerDnsAliases_ListByServer
Gets a list of server DNS aliases for a server.


```js
azure_sql_serverdnsaliases.ServerDnsAliases_ListByServer({
  "resourceGroupName": "",
  "serverName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server that the alias is pointing to.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ServerDnsAliasListResult](#serverdnsaliaslistresult)

### ServerDnsAliases_Delete
Deletes the server DNS alias with the given name.


```js
azure_sql_serverdnsaliases.ServerDnsAliases_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "dnsAliasName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server that the alias is pointing to.
  * dnsAliasName **required** `string`: The name of the server DNS alias.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### ServerDnsAliases_Get
Gets a server DNS alias.


```js
azure_sql_serverdnsaliases.ServerDnsAliases_Get({
  "resourceGroupName": "",
  "serverName": "",
  "dnsAliasName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server that the alias is pointing to.
  * dnsAliasName **required** `string`: The name of the server DNS alias.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ServerDnsAlias](#serverdnsalias)

### ServerDnsAliases_CreateOrUpdate
Creates a server dns alias.


```js
azure_sql_serverdnsaliases.ServerDnsAliases_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "dnsAliasName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server that the alias is pointing to.
  * dnsAliasName **required** `string`: The name of the server DNS alias.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ServerDnsAlias](#serverdnsalias)

### ServerDnsAliases_Acquire
Acquires server DNS alias from another server.


```js
azure_sql_serverdnsaliases.ServerDnsAliases_Acquire({
  "resourceGroupName": "",
  "serverName": "",
  "dnsAliasName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server that the alias is pointing to.
  * dnsAliasName **required** `string`: The name of the server dns alias.
  * parameters **required** [ServerDnsAliasAcquisition](#serverdnsaliasacquisition)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*



## Definitions

### ServerDnsAlias
* ServerDnsAlias `object`: A server DNS alias.
  * properties [ServerDnsAliasProperties](#serverdnsaliasproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ServerDnsAliasAcquisition
* ServerDnsAliasAcquisition `object`: A server DNS alias acquisition request.
  * oldServerDnsAliasId `string`: The id of the server alias that will be acquired to point to this server instead.

### ServerDnsAliasListResult
* ServerDnsAliasListResult `object`: A list of server DNS aliases.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [ServerDnsAlias](#serverdnsalias)

### ServerDnsAliasProperties
* ServerDnsAliasProperties `object`: Properties of a server DNS alias.
  * azureDnsRecord `string`: The fully qualified DNS record for alias


