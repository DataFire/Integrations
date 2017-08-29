# @datafire/azure_arm_sql

Client library for Azure SQL Database Backup

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_sql
```

```js
let datafire = require('datafire');
let azure_arm_sql = require('@datafire/azure_arm_sql').create();

azure_arm_sql.Databases_ListRestorePoints({}).then(data => {
  console.log(data);
})
```

## Description
Provides read functionality for Azure SQL Database Backups

## Actions
### Databases_ListRestorePoints
Returns a list of database restore points.


```js
azure_arm_sql.Databases_ListRestorePoints({
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
* databaseName (string) **required** - The name of the database from which to retrieve available restore points.

