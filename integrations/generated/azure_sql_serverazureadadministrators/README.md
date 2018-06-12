# @datafire/azure_sql_serverazureadadministrators

Client library for Azure SQL Database API spec

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_serverazureadadministrators
```
```js
let azure_sql_serverazureadadministrators = require('@datafire/azure_sql_serverazureadadministrators').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_serverazureadadministrators.ServerAzureADAdministrators_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Database management API provides a RESTful set of web services that interact with Azure SQL Database services to manage your external server administrators.

## Actions

### ServerAzureADAdministrators_ListByServer
Returns a list of server Administrators.


```js
azure_sql_serverazureadadministrators.ServerAzureADAdministrators_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.

#### Output
* output [ServerAdministratorListResult](#serveradministratorlistresult)

### ServerAzureADAdministrators_Delete
Deletes an existing server Active Directory Administrator.


```js
azure_sql_serverazureadadministrators.ServerAzureADAdministrators_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "administratorName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * administratorName **required** `string` (values: activeDirectory): Name of the server administrator resource.

#### Output
* output [ServerAzureADAdministrator](#serverazureadadministrator)

### ServerAzureADAdministrators_Get
Returns an server Administrator.


```js
azure_sql_serverazureadadministrators.ServerAzureADAdministrators_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "administratorName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * administratorName **required** `string` (values: activeDirectory): Name of the server administrator resource.

#### Output
* output [ServerAzureADAdministrator](#serverazureadadministrator)

### ServerAzureADAdministrators_CreateOrUpdate
Creates a new Server Active Directory Administrator or updates an existing server Active Directory Administrator.


```js
azure_sql_serverazureadadministrators.ServerAzureADAdministrators_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "administratorName": "",
  "properties": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * administratorName **required** `string` (values: activeDirectory): Name of the server administrator resource.
  * properties **required** [ServerAzureADAdministrator](#serverazureadadministrator)

#### Output
* output [ServerAzureADAdministrator](#serverazureadadministrator)



## Definitions

### ServerAdministratorListResult
* ServerAdministratorListResult `object`: The response to a list Active Directory Administrators request.
  * value `array`: The list of server Active Directory Administrators for the server.
    * items [ServerAzureADAdministrator](#serverazureadadministrator)

### ServerAdministratorProperties
* ServerAdministratorProperties `object`: The properties of an server Administrator.
  * administratorType **required** `string` (values: ActiveDirectory): The type of administrator.
  * login **required** `string`: The server administrator login value.
  * sid **required** `string`: The server administrator Sid (Secure ID).
  * tenantId **required** `string`: The server Active Directory Administrator tenant id.

### ServerAzureADAdministrator
* ServerAzureADAdministrator `object`: An server Active Directory Administrator.
  * properties [ServerAdministratorProperties](#serveradministratorproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


