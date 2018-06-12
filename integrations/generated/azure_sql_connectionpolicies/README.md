# @datafire/azure_sql_connectionpolicies

Client library for Azure SQL Server API spec

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_connectionpolicies
```
```js
let azure_sql_connectionpolicies = require('@datafire/azure_sql_connectionpolicies').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_connectionpolicies.ServerConnectionPolicies_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "connectionPolicyName": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Server management API provides a RESTful set of web services that interact with Azure SQL Server services to manage your databases. The API enables users update server connection policy.

## Actions

### ServerConnectionPolicies_Get
Gets the server's secure connection policy.


```js
azure_sql_connectionpolicies.ServerConnectionPolicies_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "connectionPolicyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * connectionPolicyName **required** `string` (values: default): The name of the connection policy.

#### Output
* output [ServerConnectionPolicy](#serverconnectionpolicy)

### ServerConnectionPolicies_CreateOrUpdate
Creates or updates the server's connection policy.


```js
azure_sql_connectionpolicies.ServerConnectionPolicies_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "connectionPolicyName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * connectionPolicyName **required** `string` (values: default): The name of the connection policy.
  * parameters **required** [ServerConnectionPolicy](#serverconnectionpolicy)

#### Output
* output [ServerConnectionPolicy](#serverconnectionpolicy)



## Definitions

### ServerConnectionPolicy
* ServerConnectionPolicy `object`: A server secure connection policy.
  * kind `string`: Metadata used for the Azure portal experience.
  * location `string`: Resource location.
  * properties [ServerConnectionPolicyProperties](#serverconnectionpolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ServerConnectionPolicyProperties
* ServerConnectionPolicyProperties `object`: The properties of a server secure connection policy.
  * connectionType **required** `string` (values: Default, Proxy, Redirect): The server connection type.


