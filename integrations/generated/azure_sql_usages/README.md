# @datafire/azure_sql_usages

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_usages
```
```js
let azure_sql_usages = require('@datafire/azure_sql_usages').create({
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

### Usages_ListByInstancePool
Gets all instance pool usage metrics


```js
azure_sql_usages.Usages_ListByInstancePool({
  "resourceGroupName": "",
  "instancePoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * instancePoolName **required** `string`: The name of the instance pool to be retrieved.
  * expandChildren `boolean`: Optional request parameter to include managed instance usages within the instance pool.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [UsageListResult](#usagelistresult)



## Definitions

### Name
* Name `object`: ARM Usage Name
  * localizedValue `string`: Usage name localized value.
  * value `string`: Usage name value

### Usage
* Usage `object`: ARM usage.
  * currentValue `integer`: Usage current value.
  * id `string`: Resource ID.
  * limit `integer`: Usage limit.
  * name [Name](#name)
  * requestedLimit `integer`: Usage requested limit.
  * type `string`: Resource type.
  * unit `string`: Usage unit.

### UsageListResult
* UsageListResult `object`: A list of usages.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [Usage](#usage)


