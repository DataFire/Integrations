# @datafire/azure_arm_mysql

Client library for MySQLManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_mysql
```

```js
let datafire = require('datafire');
let azure_arm_mysql = require('@datafire/azure_arm_mysql').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_mysql.Operations_List({}).then(data => {
  console.log(data);
})
```

## Description
The Microsoft Azure management API provides create, read, update, and delete functionality for Azure MySQL resources including servers, databases, firewall rules, log files and configurations.

## Actions
### Operations_List
Lists all of the available REST API operations.


```js
azure_arm_mysql.Operations_List({
  "api-version": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.

### Servers_List
List all the servers in a given subscription.


```js
azure_arm_mysql.Servers_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.

### Servers_ListByResourceGroup
List all the servers in a given resource group.


```js
azure_arm_mysql.Servers_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

### Servers_Delete
Deletes a server.


```js
azure_arm_mysql.Servers_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.

### Servers_Get
Gets information about a server.


```js
azure_arm_mysql.Servers_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.

### Servers_Update
Updates an existing server. The request body can contain one to many of the properties present in the normal server definition.


```js
azure_arm_mysql.Servers_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "parameters": null
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.
* parameters (undefined) **required** - Parameters allowd to update for a server.

### Servers_CreateOrUpdate
Creates a new server or updates an existing server. The update action will overwrite the existing server.


```js
azure_arm_mysql.Servers_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "parameters": null
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.
* parameters (undefined) **required** - Represents a server to be created.

### Configurations_ListByServer
List all the configurations in a given server.


```js
azure_arm_mysql.Configurations_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.

### Configurations_Get
Gets information about a configuration of server.


```js
azure_arm_mysql.Configurations_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "configurationName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.
* configurationName (string) **required** - The name of the server configuration.

### Configurations_CreateOrUpdate
Updates a configuration of a server.


```js
azure_arm_mysql.Configurations_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "configurationName": "",
  "parameters": null
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.
* configurationName (string) **required** - The name of the server configuration.
* parameters (undefined) **required** - Represents a Configuration.

### Databases_ListByServer
List all the databases in a given server.


```js
azure_arm_mysql.Databases_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.

### Databases_Delete
Deletes a database.


```js
azure_arm_mysql.Databases_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.
* databaseName (string) **required** - The name of the database.

### Databases_Get
Gets information about a database.


```js
azure_arm_mysql.Databases_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.
* databaseName (string) **required** - The name of the database.

### Databases_CreateOrUpdate
Creates a new database or updates an existing database.


```js
azure_arm_mysql.Databases_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "parameters": null
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.
* databaseName (string) **required** - The name of the database.
* parameters (undefined) **required** - Represents a Database.

### FirewallRules_ListByServer
List all the firewall rules in a given server.


```js
azure_arm_mysql.FirewallRules_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.

### FirewallRules_Delete
Deletes a server firewall rule.


```js
azure_arm_mysql.FirewallRules_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "firewallRuleName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.
* firewallRuleName (string) **required** - The name of the server firewall rule.

### FirewallRules_Get
Gets information about a server firewall rule.


```js
azure_arm_mysql.FirewallRules_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "firewallRuleName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.
* firewallRuleName (string) **required** - The name of the server firewall rule.

### FirewallRules_CreateOrUpdate
Creates a new firewall rule or updates an existing firewall rule.


```js
azure_arm_mysql.FirewallRules_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "firewallRuleName": "",
  "parameters": null
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.
* firewallRuleName (string) **required** - The name of the server firewall rule.
* parameters (undefined) **required** - Represents a server firewall rule.

### LogFiles_ListByServer
List all the log files in a given server.


```js
azure_arm_mysql.LogFiles_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for the request.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.

