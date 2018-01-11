# @datafire/azure_arm_sql

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_sql
```
```js
let azure_arm_sql = require('@datafire/azure_arm_sql').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [AdvisorListResult](#advisorlistresult)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * advisorName **required** `string`: The name of the Database Advisor.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [Advisor](#advisor)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * advisorName **required** `string`: The name of the Database Advisor.
  * parameters **required** [Advisor](#advisor)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [Advisor](#advisor)



## Definitions

### Advisor
* Advisor `object`: Database Advisor.
  * kind `string`: Resource kind.
  * location `string`: Resource location.
  * properties [AdvisorProperties](#advisorproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### AdvisorListResult
* AdvisorListResult `object`: Represents the response to a list advisors request.
  * value `array`: The list of advisors.
    * items [Advisor](#advisor)

### AdvisorProperties
* AdvisorProperties `object`: Properties for a Database, Server or Elastic Pool Advisor.
  * advisorStatus `string` (values: GA, PublicPreview, LimitedPublicPreview, PrivatePreview): Gets the status of availability of this advisor to customers. Possible values are 'GA', 'PublicPreview', 'LimitedPublicPreview' and 'PrivatePreview'.
  * autoExecuteValue **required** `string` (values: Enabled, Disabled, Default): Gets the auto-execute status (whether to let the system execute the recommendations) of this advisor. Possible values are 'Enabled' and 'Disabled'
  * lastChecked `string`: Gets the time when the current resource was analyzed for recommendations by this advisor.
  * recommendationsStatus `string`: Gets that status of recommendations for this advisor and reason for not having any recommendations. Possible values include, but are not limited to, 'Ok' (Recommendations available), LowActivity (not enough workload to analyze), 'DbSeemsTuned' (Database is doing well), etc.

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


