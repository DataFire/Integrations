# @datafire/azure_apimanagement_apimtenant

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimtenant
```
```js
let azure_apimanagement_apimtenant = require('@datafire/azure_apimanagement_apimtenant').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_apimanagement_apimtenant.TenantAccess_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": "",
  "accessName": ""
}).then(data => {
  console.log(data);
});
```

## Description

Use these REST APIs for performing operations on tenant entity associated with your Azure API Management deployment. Using this entity you can manage properties and configuration that apply to the entire API Management service instance.

## Actions

### TenantAccess_Get
Get tenant access information details.


```js
azure_apimanagement_apimtenant.TenantAccess_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": "",
  "accessName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * accessName **required** `string` (values: access): The identifier of the Access configuration.

#### Output
* output [AccessInformationContract](#accessinformationcontract)

### TenantAccess_Update
Update tenant access information details.


```js
azure_apimanagement_apimtenant.TenantAccess_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "parameters": null,
  "accessName": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * parameters **required** [AccessInformationUpdateParameters](#accessinformationupdateparameters)
  * accessName **required** `string` (values: access): The identifier of the Access configuration.
  * If-Match **required** `string`: The entity state (Etag) version of the property to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### TenantAccessGit_Get
Gets the Git access configuration for the tenant.


```js
azure_apimanagement_apimtenant.TenantAccessGit_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": "",
  "accessName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * accessName **required** `string` (values: access): The identifier of the Access configuration.

#### Output
* output [AccessInformationContract](#accessinformationcontract)

### TenantAccessGit_RegeneratePrimaryKey
Regenerate primary access key for GIT.


```js
azure_apimanagement_apimtenant.TenantAccessGit_RegeneratePrimaryKey({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": "",
  "accessName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * accessName **required** `string` (values: access): The identifier of the Access configuration.

#### Output
*Output schema unknown*

### TenantAccessGit_RegenerateSecondaryKey
Regenerate secondary access key for GIT.


```js
azure_apimanagement_apimtenant.TenantAccessGit_RegenerateSecondaryKey({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": "",
  "accessName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * accessName **required** `string` (values: access): The identifier of the Access configuration.

#### Output
*Output schema unknown*

### TenantAccess_RegeneratePrimaryKey
Regenerate primary access key.


```js
azure_apimanagement_apimtenant.TenantAccess_RegeneratePrimaryKey({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": "",
  "accessName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * accessName **required** `string` (values: access): The identifier of the Access configuration.

#### Output
*Output schema unknown*

### TenantAccess_RegenerateSecondaryKey
Regenerate secondary access key.


```js
azure_apimanagement_apimtenant.TenantAccess_RegenerateSecondaryKey({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": "",
  "accessName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * accessName **required** `string` (values: access): The identifier of the Access configuration.

#### Output
*Output schema unknown*

### TenantConfiguration_Deploy
This operation applies changes from the specified Git branch to the configuration database. This is a long running operation and could take several minutes to complete.


```js
azure_apimanagement_apimtenant.TenantConfiguration_Deploy({
  "resourceGroupName": "",
  "serviceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": "",
  "configurationName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * parameters **required** [DeployConfigurationParameters](#deployconfigurationparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * configurationName **required** `string` (values: configuration): The identifier of the Git Configuration Operation.

#### Output
* output [OperationResultContract](#operationresultcontract)

### TenantConfiguration_Save
This operation creates a commit with the current configuration snapshot to the specified branch in the repository. This is a long running operation and could take several minutes to complete.


```js
azure_apimanagement_apimtenant.TenantConfiguration_Save({
  "resourceGroupName": "",
  "serviceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": "",
  "configurationName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * parameters **required** [SaveConfigurationParameter](#saveconfigurationparameter)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * configurationName **required** `string` (values: configuration): The identifier of the Git Configuration Operation.

#### Output
* output [OperationResultContract](#operationresultcontract)

### TenantConfiguration_GetSyncState
Gets the status of the most recent synchronization between the configuration database and the Git repository.


```js
azure_apimanagement_apimtenant.TenantConfiguration_GetSyncState({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": "",
  "configurationName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * configurationName **required** `string` (values: configuration): The identifier of the Git Configuration Operation.

#### Output
* output [TenantConfigurationSyncStateContract](#tenantconfigurationsyncstatecontract)

### TenantConfiguration_Validate
This operation validates the changes in the specified Git branch. This is a long running operation and could take several minutes to complete.


```js
azure_apimanagement_apimtenant.TenantConfiguration_Validate({
  "resourceGroupName": "",
  "serviceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": "",
  "configurationName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * parameters **required** [DeployConfigurationParameters](#deployconfigurationparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * configurationName **required** `string` (values: configuration): The identifier of the Git Configuration Operation.

#### Output
* output [OperationResultContract](#operationresultcontract)



## Definitions

### AccessInformationContract
* AccessInformationContract `object`: Tenant access information contract of the API Management service.
  * enabled `boolean`: Tenant access information of the API Management service.
  * id `string`: Identifier.
  * primaryKey `string`: Primary access key.
  * secondaryKey `string`: Secondary access key.

### AccessInformationUpdateParameters
* AccessInformationUpdateParameters `object`: Tenant access information update parameters of the API Management service.
  * enabled `boolean`: Tenant access information of the API Management service.

### DeployConfigurationParameters
* DeployConfigurationParameters `object`: Parameters supplied to the Deploy Configuration operation.
  * branch **required** `string`: The name of the Git branch from which the configuration is to be deployed to the configuration database.
  * force `boolean`: The value enforcing deleting subscriptions to products that are deleted in this update.

### OperationResultContract
* OperationResultContract `object`: Operation Result.
  * actionLog `array`: This property if only provided as part of the TenantConfiguration_Validate operation. It contains the log the entities which will be updated/created/deleted as part of the TenantConfiguration_Deploy operation.
    * items [OperationResultLogItemContract](#operationresultlogitemcontract)
  * error `object`: Error Body contract.
    * code `string`: Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response.
    * details `array`: The list of invalid fields send in request, in case of validation error.
      * items `object`: Error Field contract.
        * code `string`: Property level error code.
        * message `string`: Human-readable representation of property-level error.
        * target `string`: Property name.
    * message `string`: Human-readable representation of the error.
  * id `string`: Operation result identifier.
  * resultInfo `string`: Optional result info.
  * started `string`: Start time of an async operation. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * status `string` (values: Started, InProgress, Succeeded, Failed): Status of an async operation.
  * updated `string`: Last update time of an async operation. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.

### OperationResultLogItemContract
* OperationResultLogItemContract `object`: Log of the entity being created, updated or deleted.
  * action `string`: Action like create/update/delete.
  * objectKey `string`: Identifier of the entity being created/updated/deleted.
  * objectType `string`: The type of entity contract.

### SaveConfigurationParameter
* SaveConfigurationParameter `object`: Parameters supplied to the Save Tenant Configuration operation.
  * branch **required** `string`: The name of the Git branch in which to commit the current configuration snapshot.
  * force `boolean`: The value if true, the current configuration database is committed to the Git repository, even if the Git repository has newer changes that would be overwritten.

### TenantConfigurationSyncStateContract
* TenantConfigurationSyncStateContract `object`: Tenant Configuration Synchronization State.
  * branch `string`: The name of Git branch.
  * commitId `string`: The latest commit Id.
  * configurationChangeDate `string`: The date of the latest configuration change. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * isExport `boolean`: value indicating if last sync was save (true) or deploy (false) operation.
  * isGitEnabled `boolean`: value indicating whether Git configuration access is enabled.
  * isSynced `boolean`: value indicating if last synchronization was later than the configuration change.
  * syncDate `string`: The date of the latest synchronization. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.


