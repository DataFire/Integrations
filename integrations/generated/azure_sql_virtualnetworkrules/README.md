# @datafire/azure_sql_virtualnetworkrules

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_virtualnetworkrules
```
```js
let azure_sql_virtualnetworkrules = require('@datafire/azure_sql_virtualnetworkrules').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_virtualnetworkrules.VirtualNetworkRules_ListByServer({
  "resourceGroupName": "",
  "serverName": "",
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### VirtualNetworkRules_ListByServer
Gets a list of virtual network rules in a server.


```js
azure_sql_virtualnetworkrules.VirtualNetworkRules_ListByServer({
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
* output [VirtualNetworkRuleListResult](#virtualnetworkrulelistresult)

### VirtualNetworkRules_Delete
Deletes the virtual network rule with the given name.


```js
azure_sql_virtualnetworkrules.VirtualNetworkRules_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "virtualNetworkRuleName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * virtualNetworkRuleName **required** `string`: The name of the virtual network rule.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### VirtualNetworkRules_Get
Gets a virtual network rule.


```js
azure_sql_virtualnetworkrules.VirtualNetworkRules_Get({
  "resourceGroupName": "",
  "serverName": "",
  "virtualNetworkRuleName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * virtualNetworkRuleName **required** `string`: The name of the virtual network rule.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [VirtualNetworkRule](#virtualnetworkrule)

### VirtualNetworkRules_CreateOrUpdate
Creates or updates an existing virtual network rule.


```js
azure_sql_virtualnetworkrules.VirtualNetworkRules_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "virtualNetworkRuleName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * virtualNetworkRuleName **required** `string`: The name of the virtual network rule.
  * parameters **required** [VirtualNetworkRule](#virtualnetworkrule)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [VirtualNetworkRule](#virtualnetworkrule)



## Definitions

### VirtualNetworkRule
* VirtualNetworkRule `object`: A virtual network rule.
  * properties [VirtualNetworkRuleProperties](#virtualnetworkruleproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### VirtualNetworkRuleListResult
* VirtualNetworkRuleListResult `object`: A list of virtual network rules.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [VirtualNetworkRule](#virtualnetworkrule)

### VirtualNetworkRuleProperties
* VirtualNetworkRuleProperties `object`: Properties of a virtual network rule.
  * ignoreMissingVnetServiceEndpoint `boolean`: Create firewall rule before the virtual network has vnet service endpoint enabled.
  * state `string` (values: Initializing, InProgress, Ready, Deleting, Unknown): Virtual Network Rule State
  * virtualNetworkSubnetId **required** `string`: The ARM resource id of the virtual network subnet.


