# @datafire/azure_sql_firewallrules

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_firewallrules
```
```js
let azure_sql_firewallrules = require('@datafire/azure_sql_firewallrules').create({
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

### FirewallRules_ListByServer
Gets a list of firewall rules.


```js
azure_sql_firewallrules.FirewallRules_ListByServer({
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
* output [FirewallRuleListResult](#firewallrulelistresult)

### FirewallRules_Replace
Replaces all firewall rules on the server.


```js
azure_sql_firewallrules.FirewallRules_Replace({
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
  * parameters **required** [FirewallRuleList](#firewallrulelist)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [FirewallRule](#firewallrule)

### FirewallRules_Delete
Deletes a firewall rule.


```js
azure_sql_firewallrules.FirewallRules_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "firewallRuleName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * firewallRuleName **required** `string`: The name of the firewall rule.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### FirewallRules_Get
Gets a firewall rule.


```js
azure_sql_firewallrules.FirewallRules_Get({
  "resourceGroupName": "",
  "serverName": "",
  "firewallRuleName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * firewallRuleName **required** `string`: The name of the firewall rule.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [FirewallRule](#firewallrule)

### FirewallRules_CreateOrUpdate
Creates or updates a firewall rule.


```js
azure_sql_firewallrules.FirewallRules_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "firewallRuleName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * firewallRuleName **required** `string`: The name of the firewall rule.
  * parameters **required** [FirewallRule](#firewallrule)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [FirewallRule](#firewallrule)



## Definitions

### FirewallRule
* FirewallRule `object`: A server firewall rule.
  * properties [ServerFirewallRuleProperties](#serverfirewallruleproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### FirewallRuleList
* FirewallRuleList `object`: A list of server firewall rules.
  * values `array`
    * items [FirewallRule](#firewallrule)

### FirewallRuleListResult
* FirewallRuleListResult `object`: The response to a list firewall rules request
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [FirewallRule](#firewallrule)

### ProxyResourceWithWritableName
* ProxyResourceWithWritableName `object`: ARM proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ResourceWithWritableName
* ResourceWithWritableName `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ServerFirewallRuleProperties
* ServerFirewallRuleProperties `object`: The properties of a server firewall rule.
  * endIpAddress `string`: The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress. Use value '0.0.0.0' for all Azure-internal IP addresses.
  * startIpAddress `string`: The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' for all Azure-internal IP addresses.


