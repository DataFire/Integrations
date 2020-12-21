# @datafire/azure_sql_sensitivitylabels

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_sensitivitylabels
```
```js
let azure_sql_sensitivitylabels = require('@datafire/azure_sql_sensitivitylabels').create({
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

### SensitivityLabels_ListCurrentByDatabase
Gets the sensitivity labels of a given database


```js
azure_sql_sensitivitylabels.SensitivityLabels_ListCurrentByDatabase({
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
  * $filter `string`: An OData filter expression that filters elements in the collection.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SensitivityLabelListResult](#sensitivitylabellistresult)

### SensitivityLabels_ListRecommendedByDatabase
Gets the sensitivity labels of a given database


```js
azure_sql_sensitivitylabels.SensitivityLabels_ListRecommendedByDatabase({
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
  * $filter `string`: An OData filter expression that filters elements in the collection.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SensitivityLabelListResult](#sensitivitylabellistresult)

### SensitivityLabels_Delete
Deletes the sensitivity label of a given column


```js
azure_sql_sensitivitylabels.SensitivityLabels_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "schemaName": "",
  "tableName": "",
  "columnName": "",
  "sensitivityLabelSource": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * schemaName **required** `string`: The name of the schema.
  * tableName **required** `string`: The name of the table.
  * columnName **required** `string`: The name of the column.
  * sensitivityLabelSource **required** `string` (values: current): The source of the sensitivity label.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### SensitivityLabels_Get
Gets the sensitivity label of a given column


```js
azure_sql_sensitivitylabels.SensitivityLabels_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "schemaName": "",
  "tableName": "",
  "columnName": "",
  "sensitivityLabelSource": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * schemaName **required** `string`: The name of the schema.
  * tableName **required** `string`: The name of the table.
  * columnName **required** `string`: The name of the column.
  * sensitivityLabelSource **required** `string` (values: current, recommended): The source of the sensitivity label.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SensitivityLabel](#sensitivitylabel)

### SensitivityLabels_CreateOrUpdate
Creates or updates the sensitivity label of a given column


```js
azure_sql_sensitivitylabels.SensitivityLabels_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "schemaName": "",
  "tableName": "",
  "columnName": "",
  "sensitivityLabelSource": "",
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
  * schemaName **required** `string`: The name of the schema.
  * tableName **required** `string`: The name of the table.
  * columnName **required** `string`: The name of the column.
  * sensitivityLabelSource **required** `string` (values: current): The source of the sensitivity label.
  * parameters **required** [SensitivityLabel](#sensitivitylabel)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SensitivityLabel](#sensitivitylabel)

### SensitivityLabels_ListByDatabase
Gets the sensitivity labels of a given database


```js
azure_sql_sensitivitylabels.SensitivityLabels_ListByDatabase({
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
  * $filter `string`: An OData filter expression that filters elements in the collection.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SensitivityLabelListResult](#sensitivitylabellistresult)



## Definitions

### SensitivityLabel
* SensitivityLabel `object`: A sensitivity label.
  * properties [SensitivityLabelProperties](#sensitivitylabelproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### SensitivityLabelListResult
* SensitivityLabelListResult `object`: A list of sensitivity labels.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [SensitivityLabel](#sensitivitylabel)

### SensitivityLabelProperties
* SensitivityLabelProperties `object`: Properties of a sensitivity label.
  * informationType `string`: The information type.
  * labelName `string`: The label name.


