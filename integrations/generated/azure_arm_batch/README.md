# @datafire/azure_arm_batch

Client library for BatchManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_batch
```
```js
let azure_arm_batch = require('@datafire/azure_arm_batch').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_batch.BatchAccount_List({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### BatchAccount_List
Gets information about the Batch accounts associated with the subscription.


```js
azure_arm_batch.BatchAccount_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BatchAccountListResult](#batchaccountlistresult)

### Location_GetQuotas
Gets the Batch service quotas for the specified subscription at the given location.


```js
azure_arm_batch.Location_GetQuotas({
  "locationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: The desired region for the quotas.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BatchLocationQuota](#batchlocationquota)

### BatchAccount_ListByResourceGroup
Gets information about the Batch accounts associated within the specified resource group.


```js
azure_arm_batch.BatchAccount_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group whose Batch accounts to list.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BatchAccountListResult](#batchaccountlistresult)

### BatchAccount_Delete
Deletes the specified Batch account.


```js
azure_arm_batch.BatchAccount_Delete({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account to be deleted.
  * accountName **required** `string`: The name of the account to be deleted.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### BatchAccount_Get
Gets information about the specified Batch account.


```js
azure_arm_batch.BatchAccount_Get({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the account.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BatchAccount](#batchaccount)

### BatchAccount_Update
Updates the properties of an existing Batch account.


```js
azure_arm_batch.BatchAccount_Update({
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the account.
  * parameters **required** [BatchAccountUpdateParameters](#batchaccountupdateparameters)
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BatchAccount](#batchaccount)

### BatchAccount_Create
Creates a new Batch account with the specified parameters. Existing accounts cannot be updated with this API and should instead be updated with the Update Batch Account API.


```js
azure_arm_batch.BatchAccount_Create({
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the new Batch account.
  * accountName **required** `string`: A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
  * parameters **required** [BatchAccountCreateParameters](#batchaccountcreateparameters)
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BatchAccount](#batchaccount)

### Application_List
Lists all of the applications in the specified account.


```js
azure_arm_batch.Application_List({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * maxresults `integer`: The maximum number of items to return in the response.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ListApplicationsResult](#listapplicationsresult)

### Application_Delete
Deletes an application.


```js
azure_arm_batch.Application_Delete({
  "resourceGroupName": "",
  "accountName": "",
  "applicationId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * applicationId **required** `string`: The ID of the application.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Application_Get
Gets information about the specified application.


```js
azure_arm_batch.Application_Get({
  "resourceGroupName": "",
  "accountName": "",
  "applicationId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * applicationId **required** `string`: The ID of the application.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Application](#application)

### Application_Update
Updates settings for the specified application.


```js
azure_arm_batch.Application_Update({
  "resourceGroupName": "",
  "accountName": "",
  "applicationId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * applicationId **required** `string`: The ID of the application.
  * parameters **required** [UpdateApplicationParameters](#updateapplicationparameters)
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Application_Create
Adds an application to the specified Batch account.


```js
azure_arm_batch.Application_Create({
  "resourceGroupName": "",
  "accountName": "",
  "applicationId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * applicationId **required** `string`: The ID of the application.
  * parameters [AddApplicationParameters](#addapplicationparameters)
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Application](#application)

### ApplicationPackage_Delete
Deletes an application package record and its associated binary file.


```js
azure_arm_batch.ApplicationPackage_Delete({
  "resourceGroupName": "",
  "accountName": "",
  "applicationId": "",
  "version": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * applicationId **required** `string`: The ID of the application.
  * version **required** `string`: The version of the application to delete.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApplicationPackage_Get
Gets information about the specified application package.


```js
azure_arm_batch.ApplicationPackage_Get({
  "resourceGroupName": "",
  "accountName": "",
  "applicationId": "",
  "version": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * applicationId **required** `string`: The ID of the application.
  * version **required** `string`: The version of the application.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApplicationPackage](#applicationpackage)

### ApplicationPackage_Create
Creates an application package record.


```js
azure_arm_batch.ApplicationPackage_Create({
  "resourceGroupName": "",
  "accountName": "",
  "applicationId": "",
  "version": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * applicationId **required** `string`: The ID of the application.
  * version **required** `string`: The version of the application.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApplicationPackage](#applicationpackage)

### ApplicationPackage_Activate
Activates the specified application package.


```js
azure_arm_batch.ApplicationPackage_Activate({
  "resourceGroupName": "",
  "accountName": "",
  "applicationId": "",
  "version": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * applicationId **required** `string`: The ID of the application.
  * version **required** `string`: The version of the application to activate.
  * parameters **required** [ActivateApplicationPackageParameters](#activateapplicationpackageparameters)
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### BatchAccount_GetKeys
Gets the account keys for the specified Batch account.


```js
azure_arm_batch.BatchAccount_GetKeys({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the account.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BatchAccountKeys](#batchaccountkeys)

### BatchAccount_RegenerateKey
Regenerates the specified account key for the Batch account.


```js
azure_arm_batch.BatchAccount_RegenerateKey({
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the account.
  * parameters **required** [BatchAccountRegenerateKeyParameters](#batchaccountregeneratekeyparameters)
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BatchAccountKeys](#batchaccountkeys)

### BatchAccount_SynchronizeAutoStorageKeys
Synchronizes access keys for the auto storage account configured for the specified Batch account.


```js
azure_arm_batch.BatchAccount_SynchronizeAutoStorageKeys({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*



## Definitions

### ActivateApplicationPackageParameters
* ActivateApplicationPackageParameters `object`: Parameters for an ApplicationOperations.ActivateApplicationPackage request.
  * format **required** `string`: The format of the application package binary file.

### AddApplicationParameters
* AddApplicationParameters `object`: Parameters for an ApplicationOperations.AddApplication request.
  * allowUpdates `boolean`: A value indicating whether packages within the application may be overwritten using the same version string.
  * displayName `string`: The display name for the application.

### Application
* Application `object`: Contains information about an application in a Batch account.
  * allowUpdates `boolean`: A value indicating whether packages within the application may be overwritten using the same version string.
  * defaultVersion `string`: The package to use if a client requests the application but does not specify a version.
  * displayName `string`: The display name for the application.
  * id `string`: A string that uniquely identifies the application within the account.
  * packages `array`: The list of packages under this application.
    * items [ApplicationPackage](#applicationpackage)

### ApplicationPackage
* ApplicationPackage `object`: An application package which represents a particular version of an application.
  * format `string`: The format of the application package, if the package is active.
  * id `string`: The ID of the application.
  * lastActivationTime `string`: The time at which the package was last activated, if the package is active.
  * state `string` (values: pending, active, unmapped): The current state of the application package.
  * storageUrl `string`: The storage URL at which the application package is stored.
  * storageUrlExpiry `string`: The UTC time at which the storage URL will expire.
  * version `string`: The version of the application package. 

### AutoStorageBaseProperties
* AutoStorageBaseProperties `object`: The properties related to auto storage account.
  * storageAccountId **required** `string`: The resource ID of the storage account to be used for auto storage account.

### AutoStorageProperties
* AutoStorageProperties `object`: Contains information about the auto storage account associated with a Batch account.
  * lastKeySync **required** `string`: The UTC time at which storage keys were last synchronized with the Batch account.
  * storageAccountId **required** `string`: The resource ID of the storage account to be used for auto storage account.

### BatchAccount
* BatchAccount `object`: Contains information about an Azure Batch account.
  * properties [BatchAccountProperties](#batchaccountproperties)
  * id `string`: The ID of the resource
  * location `string`: The location of the resource
  * name `string`: The name of the resource
  * tags `object`: The tags of the resource
  * type `string`: The type of the resource

### BatchAccountBaseProperties
* BatchAccountBaseProperties `object`: The properties of a Batch account.
  * autoStorage [AutoStorageBaseProperties](#autostoragebaseproperties)

### BatchAccountCreateParameters
* BatchAccountCreateParameters `object`: Parameters supplied to the Create operation.
  * location **required** `string`: The region in which to create the account.
  * properties [BatchAccountBaseProperties](#batchaccountbaseproperties)
  * tags `object`: The user specified tags associated with the account.

### BatchAccountKeys
* BatchAccountKeys `object`: A set of Azure Batch account keys.
  * primary `string`: The primary key associated with the account.
  * secondary `string`: The secondary key associated with the account.

### BatchAccountListResult
* BatchAccountListResult `object`: Values returned by the List operation.
  * nextLink `string`: The continuation token.
  * value `array`: The collection of returned Batch accounts.
    * items [BatchAccount](#batchaccount)

### BatchAccountProperties
* BatchAccountProperties `object`: Account specific properties.
  * accountEndpoint `string`: The endpoint used by this account to interact with the Batch services.
  * activeJobAndJobScheduleQuota **required** `integer`: The active job and job schedule quota for this Batch account.
  * autoStorage [AutoStorageProperties](#autostorageproperties)
  * coreQuota **required** `integer`: The core quota for this Batch account.
  * poolQuota **required** `integer`: The pool quota for this Batch account.
  * provisioningState `string` (values: Invalid, Creating, Deleting, Succeeded, Failed, Cancelled): The provisioned state of the resource

### BatchAccountRegenerateKeyParameters
* BatchAccountRegenerateKeyParameters `object`: Parameters supplied to the RegenerateKey operation.
  * keyName **required** `string` (values: Primary, Secondary): The type of account key to regenerate.

### BatchAccountUpdateParameters
* BatchAccountUpdateParameters `object`: Parameters supplied to the Update operation.
  * properties [BatchAccountBaseProperties](#batchaccountbaseproperties)
  * tags `object`: The user specified tags associated with the account.

### BatchLocationQuota
* BatchLocationQuota `object`: Quotas associated with a Batch region for a particular subscription.
  * accountQuota `integer`: The number of Batch accounts that may be created under the subscription in the specified region.

### CloudError
* CloudError `object`: An error response from the Batch service.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [CloudError](#clouderror)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error.

### ListApplicationsResult
* ListApplicationsResult `object`: Response to an ApplicationOperations.ListApplications request.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The list of applications.
    * items [Application](#application)

### Resource
* Resource `object`: A definition of an Azure resource.
  * id `string`: The ID of the resource
  * location `string`: The location of the resource
  * name `string`: The name of the resource
  * tags `object`: The tags of the resource
  * type `string`: The type of the resource

### UpdateApplicationParameters
* UpdateApplicationParameters `object`: Parameters for an ApplicationOperations.UpdateApplication request.
  * allowUpdates `boolean`: A value indicating whether packages within the application may be overwritten using the same version string.
  * defaultVersion `string`: The package to use if a client requests the application but does not specify a version.
  * displayName `string`: The display name for the application.


