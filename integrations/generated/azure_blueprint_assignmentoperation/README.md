# @datafire/azure_blueprint_assignmentoperation

Client library for BlueprintClient

## Installation and Usage
```bash
npm install --save @datafire/azure_blueprint_assignmentoperation
```
```js
let azure_blueprint_assignmentoperation = require('@datafire/azure_blueprint_assignmentoperation').create({
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

Azure Blueprints Client provides access to blueprint definitions, assignments, and artifacts, and related blueprint operations.

## Actions

### AssignmentOperations_List
List operations for given blueprint assignment within a subscription.


```js
azure_blueprint_assignmentoperation.AssignmentOperations_List({
  "api-version": "",
  "scope": "",
  "assignmentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * assignmentName **required** `string`: Name of the blueprint assignment.

#### Output
* output [AssignmentOperationList](#assignmentoperationlist)

### AssignmentOperations_Get
Get a blueprint assignment operation.


```js
azure_blueprint_assignmentoperation.AssignmentOperations_Get({
  "api-version": "",
  "scope": "",
  "assignmentName": "",
  "assignmentOperationName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * assignmentName **required** `string`: Name of the blueprint assignment.
  * assignmentOperationName **required** `string`: Name of the blueprint assignment operation.

#### Output
* output [AssignmentOperation](#assignmentoperation)



## Definitions

### AssignmentDeploymentJob
* AssignmentDeploymentJob `object`: Represents individual job in given blueprint assignment operation.
  * action `string`: Name of the action performed in this job.
  * history `array`: Result of this deployment job for each retry.
    * items [AssignmentDeploymentJobResult](#assignmentdeploymentjobresult)
  * jobId `string`: Id of this job.
  * jobState `string`: State of this job.
  * kind `string`: Kind of job.
  * requestUri `string`: Reference to deployment job resource id.
  * result [AssignmentDeploymentJobResult](#assignmentdeploymentjobresult)

### AssignmentDeploymentJobResult
* AssignmentDeploymentJobResult `object`: Result of each individual deployment in a blueprint assignment.
  * error [AzureResourceManagerError](#azureresourcemanagererror)
  * resources `array`: Resources created as result of the deployment job.
    * items [AssignmentJobCreatedResource](#assignmentjobcreatedresource)

### AssignmentJobCreatedResource
* AssignmentJobCreatedResource `object`: Azure resource created from deployment job.
  * properties `object`: Additional properties in a dictionary.
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### AssignmentOperation
* AssignmentOperation `object`: Represents underlying deployment detail for each update to the blueprint assignment.
  * properties [AssignmentOperationProperties](#assignmentoperationproperties)
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### AssignmentOperationList
* AssignmentOperationList `object`: List of AssignmentOperation.
  * nextLink `string`: Link to the next page of results.
  * value `array`: List of AssignmentOperation.
    * items [AssignmentOperation](#assignmentoperation)

### AssignmentOperationProperties
* AssignmentOperationProperties `object`: Properties of AssignmentOperation.
  * assignmentState `string`: State of this blueprint assignment operation.
  * blueprintVersion `string`: The published version of the blueprint definition used for the blueprint assignment operation.
  * deployments `array`: List of jobs in this blueprint assignment operation.
    * items [AssignmentDeploymentJob](#assignmentdeploymentjob)
  * timeCreated `string`: Create time of this blueprint assignment operation.
  * timeFinished `string`: Finish time of the overall underlying deployments.
  * timeStarted `string`: Start time of the underlying deployment.

### AzureResourceBase
* AzureResourceBase `object`: Common properties for all Azure resources.
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### AzureResourceManagerError
* AzureResourceManagerError `object`: Error code and message
  * code `string`: Error code.
  * message `string`: Error message.


