# @datafire/azure_sql_workloadclassifiers

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_workloadclassifiers
```
```js
let azure_sql_workloadclassifiers = require('@datafire/azure_sql_workloadclassifiers').create({
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

### WorkloadClassifiers_ListByWorkloadGroup
Gets the list of workload classifiers for a workload group


```js
azure_sql_workloadclassifiers.WorkloadClassifiers_ListByWorkloadGroup({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "workloadGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * workloadGroupName **required** `string`: The name of the workload group from which to receive the classifiers from.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [WorkloadClassifierListResult](#workloadclassifierlistresult)

### WorkloadClassifiers_Delete
Deletes a workload classifier.


```js
azure_sql_workloadclassifiers.WorkloadClassifiers_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "workloadGroupName": "",
  "workloadClassifierName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * workloadGroupName **required** `string`: The name of the workload group from which to receive the classifier from.
  * workloadClassifierName **required** `string`: The name of the workload classifier to delete.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### WorkloadClassifiers_Get
Gets a workload classifier


```js
azure_sql_workloadclassifiers.WorkloadClassifiers_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "workloadGroupName": "",
  "workloadClassifierName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * workloadGroupName **required** `string`: The name of the workload group from which to receive the classifier from.
  * workloadClassifierName **required** `string`: The name of the workload classifier.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [WorkloadClassifier](#workloadclassifier)

### WorkloadClassifiers_CreateOrUpdate
Creates or updates a workload classifier.


```js
azure_sql_workloadclassifiers.WorkloadClassifiers_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "workloadGroupName": "",
  "workloadClassifierName": "",
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
  * workloadGroupName **required** `string`: The name of the workload group from which to receive the classifier from.
  * workloadClassifierName **required** `string`: The name of the workload classifier to create/update.
  * parameters **required** [WorkloadClassifier](#workloadclassifier)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [WorkloadClassifier](#workloadclassifier)



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

### WorkloadClassifier
* WorkloadClassifier `object`: Workload classifier operations for a data warehouse
  * properties [WorkloadClassifierProperties](#workloadclassifierproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### WorkloadClassifierListResult
* WorkloadClassifierListResult `object`: A list of workload classifiers for a workload group.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [WorkloadClassifier](#workloadclassifier)

### WorkloadClassifierProperties
* WorkloadClassifierProperties `object`: Workload classifier definition. For more information look at sys.workload_management_workload_classifiers (DMV).
  * context `string`: The workload classifier context.
  * endTime `string`: The workload classifier end time for classification.
  * importance `string`: The workload classifier importance.
  * label `string`: The workload classifier label.
  * memberName **required** `string`: The workload classifier member name.
  * startTime `string`: The workload classifier start time for classification.


