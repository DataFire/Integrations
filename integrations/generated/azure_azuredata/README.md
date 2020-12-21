# @datafire/azure_azuredata

Client library for AzureDataManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azuredata
```
```js
let azure_azuredata = require('@datafire/azure_azuredata').create({
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

The AzureData management API provides a RESTful set of web APIs to manage Azure Data Resources. For example, register, delete and retrieve a SQL Server, SQL Server registration.

## Actions

### Operations_List
Lists all of the available SQL Server Registration API operations.


```js
azure_azuredata.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [OperationListResult](#operationlistresult)

### SqlServerRegistrations_List
Gets all SQL Server registrations in a subscription.


```js
azure_azuredata.SqlServerRegistrations_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlServerRegistrationListResult](#sqlserverregistrationlistresult)

### SqlServerRegistrations_ListByResourceGroup
Gets all SQL Server registrations in a resource group.


```js
azure_azuredata.SqlServerRegistrations_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlServerRegistrationListResult](#sqlserverregistrationlistresult)

### SqlServerRegistrations_Delete
Deletes a SQL Server registration.


```js
azure_azuredata.SqlServerRegistrations_Delete({
  "resourceGroupName": "",
  "sqlServerRegistrationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlServerRegistrationName **required** `string`: Name of the SQL Server registration.
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
*Output schema unknown*

### SqlServerRegistrations_Get
Gets a SQL Server registration.


```js
azure_azuredata.SqlServerRegistrations_Get({
  "resourceGroupName": "",
  "sqlServerRegistrationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlServerRegistrationName **required** `string`: Name of the SQL Server registration.
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlServerRegistration](#sqlserverregistration)

### SqlServerRegistrations_Update
Updates SQL Server Registration tags.


```js
azure_azuredata.SqlServerRegistrations_Update({
  "resourceGroupName": "",
  "sqlServerRegistrationName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlServerRegistrationName **required** `string`: Name of the SQL Server registration.
  * parameters **required** [SqlServerRegistrationUpdate](#sqlserverregistrationupdate)
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlServerRegistration](#sqlserverregistration)

### SqlServerRegistrations_CreateOrUpdate
Creates or updates a SQL Server registration.


```js
azure_azuredata.SqlServerRegistrations_CreateOrUpdate({
  "resourceGroupName": "",
  "sqlServerRegistrationName": "",
  "parameters": {
    "location": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlServerRegistrationName **required** `string`: Name of the SQL Server registration.
  * parameters **required** [SqlServerRegistration](#sqlserverregistration)
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlServerRegistration](#sqlserverregistration)

### SqlServers_ListByResourceGroup
Gets all SQL Servers in a SQL Server Registration.


```js
azure_azuredata.SqlServers_ListByResourceGroup({
  "resourceGroupName": "",
  "sqlServerRegistrationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlServerRegistrationName **required** `string`: Name of the SQL Server registration.
  * $expand `string`: The child resources to include in the response.
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlServerListResult](#sqlserverlistresult)

### SqlServers_Delete
Deletes a SQL Server.


```js
azure_azuredata.SqlServers_Delete({
  "resourceGroupName": "",
  "sqlServerRegistrationName": "",
  "sqlServerName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlServerRegistrationName **required** `string`: Name of the SQL Server registration.
  * sqlServerName **required** `string`: Name of the SQL Server.
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
*Output schema unknown*

### SqlServers_Get
Gets a SQL Server.


```js
azure_azuredata.SqlServers_Get({
  "resourceGroupName": "",
  "sqlServerRegistrationName": "",
  "sqlServerName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlServerRegistrationName **required** `string`: Name of the SQL Server registration.
  * sqlServerName **required** `string`: Name of the SQL Server.
  * $expand `string`: The child resources to include in the response.
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlServer](#sqlserver)

### SqlServers_CreateOrUpdate
Creates or updates a SQL Server.


```js
azure_azuredata.SqlServers_CreateOrUpdate({
  "resourceGroupName": "",
  "sqlServerRegistrationName": "",
  "sqlServerName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * sqlServerRegistrationName **required** `string`: Name of the SQL Server registration.
  * sqlServerName **required** `string`: Name of the SQL Server.
  * parameters **required** [SqlServer](#sqlserver)
  * subscriptionId **required** `string`: Subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: API version to use for the request.

#### Output
* output [SqlServer](#sqlserver)



## Definitions

### Operation
* Operation `object`: SQL REST API operation definition.
  * display [OperationDisplay](#operationdisplay)
  * name `string`: The name of the operation being performed on this particular object.
  * origin `string` (values: user, system): The intended executor of the operation.
  * properties `object`: Additional descriptions for the operation.

### OperationDisplay
* OperationDisplay `object`: Display metadata associated with the operation.
  * description `string`: The localized friendly description for the operation.
  * operation `string`: The localized friendly name for the operation.
  * provider `string`: The localized friendly form of the resource provider name.
  * resource `string`: The localized friendly form of the resource type related to this action/operation.

### OperationListResult
* OperationListResult `object`: Result of the request to list SQL operations.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [Operation](#operation)

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

### SqlServer
* SqlServer `object`: A SQL server.
  * properties [SqlServerProperties](#sqlserverproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### SqlServerListResult
* SqlServerListResult `object`: A list of SQL servers.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [SqlServer](#sqlserver)

### SqlServerProperties
* SqlServerProperties `object`: The SQL server properties.
  * cores `integer`: Cores of the Sql Server.
  * edition `string`: Sql Server Edition.
  * propertyBag `string`: Sql Server Json Property Bag.
  * registrationID `string`: ID for Parent Sql Server Registration.
  * version `string`: Version of the Sql Server.

### SqlServerRegistration
* SqlServerRegistration `object`: A SQL server registration.
  * properties [SqlServerRegistrationProperties](#sqlserverregistrationproperties)
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### SqlServerRegistrationListResult
* SqlServerRegistrationListResult `object`: Server.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [SqlServerRegistration](#sqlserverregistration)

### SqlServerRegistrationProperties
* SqlServerRegistrationProperties `object`: The SQL server Registration properties.
  * propertyBag `string`: Optional Properties as JSON string
  * resourceGroup `string`: Resource Group Name
  * subscriptionId `string`: Subscription Id

### SqlServerRegistrationUpdate
* SqlServerRegistrationUpdate `object`: An update to a SQL Server Registration.
  * tags `object`: Resource tags.

### TrackedResource
* TrackedResource `object`: ARM tracked top level resource.
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


