# @datafire/azure_sql_manageddatabasesensitivitylabels

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_manageddatabasesensitivitylabels
```
```js
let azure_sql_manageddatabasesensitivitylabels = require('@datafire/azure_sql_manageddatabasesensitivitylabels').create({
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

### ManagedDatabaseSensitivityLabels_ListCurrentByDatabase
Gets the sensitivity labels of a given database


```js
azure_sql_manageddatabasesensitivitylabels.ManagedDatabaseSensitivityLabels_ListCurrentByDatabase({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "databaseName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * databaseName **required** `string`: The name of the database.
  * $filter `string`: An OData filter expression that filters elements in the collection.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SensitivityLabelListResult](#sensitivitylabellistresult)

### ManagedDatabaseSensitivityLabels_ListRecommendedByDatabase
Gets the sensitivity labels of a given database


```js
azure_sql_manageddatabasesensitivitylabels.ManagedDatabaseSensitivityLabels_ListRecommendedByDatabase({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "databaseName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * databaseName **required** `string`: The name of the database.
  * includeDisabledRecommendations `boolean`: Specifies whether to include disabled recommendations or not.
  * $skipToken `string`
  * $filter `string`: An OData filter expression that filters elements in the collection.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SensitivityLabelListResult](#sensitivitylabellistresult)

### ManagedDatabaseSensitivityLabels_Delete
Deletes the sensitivity label of a given column


```js
azure_sql_manageddatabasesensitivitylabels.ManagedDatabaseSensitivityLabels_Delete({
  "resourceGroupName": "",
  "managedInstanceName": "",
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
  * managedInstanceName **required** `string`: The name of the managed instance.
  * databaseName **required** `string`: The name of the database.
  * schemaName **required** `string`: The name of the schema.
  * tableName **required** `string`: The name of the table.
  * columnName **required** `string`: The name of the column.
  * sensitivityLabelSource **required** `string` (values: current): The source of the sensitivity label.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### ManagedDatabaseSensitivityLabels_Get
Gets the sensitivity label of a given column


```js
azure_sql_manageddatabasesensitivitylabels.ManagedDatabaseSensitivityLabels_Get({
  "resourceGroupName": "",
  "managedInstanceName": "",
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
  * managedInstanceName **required** `string`: The name of the managed instance.
  * databaseName **required** `string`: The name of the database.
  * schemaName **required** `string`: The name of the schema.
  * tableName **required** `string`: The name of the table.
  * columnName **required** `string`: The name of the column.
  * sensitivityLabelSource **required** `string` (values: current, recommended): The source of the sensitivity label.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SensitivityLabel](#sensitivitylabel)

### ManagedDatabaseSensitivityLabels_CreateOrUpdate
Creates or updates the sensitivity label of a given column


```js
azure_sql_manageddatabasesensitivitylabels.ManagedDatabaseSensitivityLabels_CreateOrUpdate({
  "resourceGroupName": "",
  "managedInstanceName": "",
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
  * managedInstanceName **required** `string`: The name of the managed instance.
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

### ManagedDatabaseSensitivityLabels_DisableRecommendation
Disables sensitivity recommendations on a given column


```js
azure_sql_manageddatabasesensitivitylabels.ManagedDatabaseSensitivityLabels_DisableRecommendation({
  "resourceGroupName": "",
  "managedInstanceName": "",
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
  * managedInstanceName **required** `string`: The name of the managed instance.
  * databaseName **required** `string`: The name of the database.
  * schemaName **required** `string`: The name of the schema.
  * tableName **required** `string`: The name of the table.
  * columnName **required** `string`: The name of the column.
  * sensitivityLabelSource **required** `string` (values: recommended)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### ManagedDatabaseSensitivityLabels_EnableRecommendation
Enables sensitivity recommendations on a given column (recommendations are enabled by default on all columns)


```js
azure_sql_manageddatabasesensitivitylabels.ManagedDatabaseSensitivityLabels_EnableRecommendation({
  "resourceGroupName": "",
  "managedInstanceName": "",
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
  * managedInstanceName **required** `string`: The name of the managed instance.
  * databaseName **required** `string`: The name of the database.
  * schemaName **required** `string`: The name of the schema.
  * tableName **required** `string`: The name of the table.
  * columnName **required** `string`: The name of the column.
  * sensitivityLabelSource **required** `string` (values: recommended)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*



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
  * informationTypeId `string`: The information type ID.
  * isDisabled `boolean`: Is sensitivity recommendation disabled. Applicable for recommended sensitivity label only. Specifies whether the sensitivity recommendation on this column is disabled (dismissed) or not.
  * labelId `string`: The label ID.
  * labelName `string`: The label name.
  * rank `string` (values: None, Low, Medium, High, Critical)


