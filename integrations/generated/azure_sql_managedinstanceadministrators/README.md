# @datafire/azure_sql_managedinstanceadministrators

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_managedinstanceadministrators
```
```js
let azure_sql_managedinstanceadministrators = require('@datafire/azure_sql_managedinstanceadministrators').create({
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

### ManagedInstanceAdministrators_ListByInstance
Gets a list of managed instance administrators.


```js
azure_sql_managedinstanceadministrators.ManagedInstanceAdministrators_ListByInstance({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedInstanceAdministratorListResult](#managedinstanceadministratorlistresult)

### ManagedInstanceAdministrators_Delete
Deletes a managed instance administrator.


```js
azure_sql_managedinstanceadministrators.ManagedInstanceAdministrators_Delete({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "administratorName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * administratorName **required** `string` (values: ActiveDirectory): The administrator name.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### ManagedInstanceAdministrators_Get
Gets a managed instance administrator.


```js
azure_sql_managedinstanceadministrators.ManagedInstanceAdministrators_Get({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "administratorName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * administratorName **required** `string` (values: ActiveDirectory): The administrator name.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedInstanceAdministrator](#managedinstanceadministrator)

### ManagedInstanceAdministrators_CreateOrUpdate
Creates or updates a managed instance administrator.


```js
azure_sql_managedinstanceadministrators.ManagedInstanceAdministrators_CreateOrUpdate({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "administratorName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * administratorName **required** `string` (values: ActiveDirectory): The requested administrator name.
  * parameters **required** [ManagedInstanceAdministrator](#managedinstanceadministrator)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedInstanceAdministrator](#managedinstanceadministrator)



## Definitions

### ManagedInstanceAdministrator
* ManagedInstanceAdministrator `object`: An Azure SQL managed instance administrator.
  * properties [ManagedInstanceAdministratorProperties](#managedinstanceadministratorproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ManagedInstanceAdministratorListResult
* ManagedInstanceAdministratorListResult `object`: A list of managed instance administrators.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [ManagedInstanceAdministrator](#managedinstanceadministrator)

### ManagedInstanceAdministratorProperties
* ManagedInstanceAdministratorProperties `object`: The properties of a managed instance administrator.
  * administratorType **required** `string` (values: ActiveDirectory): Type of the managed instance administrator.
  * login **required** `string`: Login name of the managed instance administrator.
  * sid **required** `string`: SID (object ID) of the managed instance administrator.
  * tenantId `string`: Tenant ID of the managed instance administrator.

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


