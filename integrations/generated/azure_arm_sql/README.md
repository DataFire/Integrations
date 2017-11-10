# @datafire/azure_arm_sql

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_sql
```

```js
let datafire = require('datafire');
let azure_arm_sql = require('@datafire/azure_arm_sql').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_sql.Databases_ListAdvisors({}).then(data => {
  console.log(data);
})
```

## Description
The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions
### Databases_ListAdvisors
Returns a list of database advisors.


```js
azure_arm_sql.Databases_ListAdvisors({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.
* databaseName (string) **required** - The name of the database.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* api-version (string) **required** - The API version to use for the request.

### Databases_GetAdvisor
Returns details of a Database Advisor.


```js
azure_arm_sql.Databases_GetAdvisor({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "advisorName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.
* databaseName (string) **required** - The name of the database.
* advisorName (string) **required** - The name of the Database Advisor.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* api-version (string) **required** - The API version to use for the request.

### Databases_CreateOrUpdateAdvisor
Creates or updates a database advisor.


```js
azure_arm_sql.Databases_CreateOrUpdateAdvisor({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "advisorName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* serverName (string) **required** - The name of the server.
* databaseName (string) **required** - The name of the database.
* advisorName (string) **required** - The name of the Database Advisor.
* parameters (object) **required** - Database Advisor.
* subscriptionId (string) **required** - The subscription ID that identifies an Azure subscription.
* api-version (string) **required** - The API version to use for the request.

