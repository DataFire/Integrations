# @datafire/azure_sql_syncagents

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_syncagents
```
```js
let azure_sql_syncagents = require('@datafire/azure_sql_syncagents').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_syncagents.SyncAgents_ListByServer({
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

### SyncAgents_ListByServer
Lists sync agents in a server.


```js
azure_sql_syncagents.SyncAgents_ListByServer({
  "resourceGroupName": "",
  "serverName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server on which the sync agent is hosted.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SyncAgentListResult](#syncagentlistresult)

### SyncAgents_Delete
Deletes a sync agent.


```js
azure_sql_syncagents.SyncAgents_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "syncAgentName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server on which the sync agent is hosted.
  * syncAgentName **required** `string`: The name of the sync agent.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### SyncAgents_Get
Gets a sync agent.


```js
azure_sql_syncagents.SyncAgents_Get({
  "resourceGroupName": "",
  "serverName": "",
  "syncAgentName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server on which the sync agent is hosted.
  * syncAgentName **required** `string`: The name of the sync agent.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SyncAgent](#syncagent)

### SyncAgents_CreateOrUpdate
Creates or updates a sync agent.


```js
azure_sql_syncagents.SyncAgents_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "syncAgentName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server on which the sync agent is hosted.
  * syncAgentName **required** `string`: The name of the sync agent.
  * parameters **required** [SyncAgent](#syncagent)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SyncAgent](#syncagent)

### SyncAgents_GenerateKey
Generates a sync agent key.


```js
azure_sql_syncagents.SyncAgents_GenerateKey({
  "resourceGroupName": "",
  "serverName": "",
  "syncAgentName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server on which the sync agent is hosted.
  * syncAgentName **required** `string`: The name of the sync agent.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SyncAgentKeyProperties](#syncagentkeyproperties)

### SyncAgents_ListLinkedDatabases
Lists databases linked to a sync agent.


```js
azure_sql_syncagents.SyncAgents_ListLinkedDatabases({
  "resourceGroupName": "",
  "serverName": "",
  "syncAgentName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server on which the sync agent is hosted.
  * syncAgentName **required** `string`: The name of the sync agent.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SyncAgentLinkedDatabaseListResult](#syncagentlinkeddatabaselistresult)



## Definitions

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

### SyncAgent
* SyncAgent `object`: An Azure SQL Database sync agent.
  * properties [SyncAgentProperties](#syncagentproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### SyncAgentKeyProperties
* SyncAgentKeyProperties `object`: Properties of an Azure SQL Database sync agent key.
  * syncAgentKey `string`: Key of sync agent.

### SyncAgentLinkedDatabase
* SyncAgentLinkedDatabase `object`: An Azure SQL Database sync agent linked database.
  * properties [SyncAgentLinkedDatabaseProperties](#syncagentlinkeddatabaseproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### SyncAgentLinkedDatabaseListResult
* SyncAgentLinkedDatabaseListResult `object`: A list of sync agent linked databases.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [SyncAgentLinkedDatabase](#syncagentlinkeddatabase)

### SyncAgentLinkedDatabaseProperties
* SyncAgentLinkedDatabaseProperties `object`: Properties of an Azure SQL Database sync agent linked database.
  * databaseId `string`: Id of the sync agent linked database.
  * databaseName `string`: Database name of the sync agent linked database.
  * databaseType `string` (values: AzureSqlDatabase, SqlServerDatabase): Type of the sync agent linked database.
  * description `string`: Description of the sync agent linked database.
  * serverName `string`: Server name of the sync agent linked database.
  * userName `string`: User name of the sync agent linked database.

### SyncAgentListResult
* SyncAgentListResult `object`: A list of sync agents.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [SyncAgent](#syncagent)

### SyncAgentProperties
* SyncAgentProperties `object`: Properties of an Azure SQL Database sync agent.
  * expiryTime `string`: Expiration time of the sync agent version.
  * isUpToDate `boolean`: If the sync agent version is up to date.
  * lastAliveTime `string`: Last alive time of the sync agent.
  * name `string`: Name of the sync agent.
  * state `string` (values: Online, Offline, NeverConnected): State of the sync agent.
  * syncDatabaseId `string`: ARM resource id of the sync database in the sync agent.
  * version `string`: Version of the sync agent.


