# @datafire/azure_arm_batch

Client library for BatchManagement

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_batch
```

```js
let datafire = require('datafire');
let azure_arm_batch = require('@datafire/azure_arm_batch').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
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

#### Parameters
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Location_GetQuotas
Gets the Batch service quotas for the specified subscription at the given location.


```js
azure_arm_batch.Location_GetQuotas({
  "locationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* locationName (string) **required** - The desired region for the quotas.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### BatchAccount_ListByResourceGroup
Gets information about the Batch accounts associated within the specified resource group.


```js
azure_arm_batch.BatchAccount_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group whose Batch accounts to list.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the Batch account to be deleted.
* accountName (string) **required** - The name of the account to be deleted.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the Batch account.
* accountName (string) **required** - The name of the account.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the Batch account.
* accountName (string) **required** - The name of the account.
* parameters (undefined) **required** - Parameters supplied to the Update operation.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the new Batch account.
* accountName (string) **required** - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
* parameters (undefined) **required** - Parameters supplied to the Create operation.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the Batch account.
* accountName (string) **required** - The name of the Batch account.
* maxresults (integer) - The maximum number of items to return in the response.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the Batch account.
* accountName (string) **required** - The name of the Batch account.
* applicationId (string) **required** - The ID of the application.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the Batch account.
* accountName (string) **required** - The name of the Batch account.
* applicationId (string) **required** - The ID of the application.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the Batch account.
* accountName (string) **required** - The name of the Batch account.
* applicationId (string) **required** - The ID of the application.
* parameters (undefined) **required** - Parameters for an ApplicationOperations.UpdateApplication request.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the Batch account.
* accountName (string) **required** - The name of the Batch account.
* applicationId (string) **required** - The ID of the application.
* parameters (undefined) - Parameters for an ApplicationOperations.AddApplication request.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the Batch account.
* accountName (string) **required** - The name of the Batch account.
* applicationId (string) **required** - The ID of the application.
* version (string) **required** - The version of the application to delete.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the Batch account.
* accountName (string) **required** - The name of the Batch account.
* applicationId (string) **required** - The ID of the application.
* version (string) **required** - The version of the application.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the Batch account.
* accountName (string) **required** - The name of the Batch account.
* applicationId (string) **required** - The ID of the application.
* version (string) **required** - The version of the application.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the Batch account.
* accountName (string) **required** - The name of the Batch account.
* applicationId (string) **required** - The ID of the application.
* version (string) **required** - The version of the application to activate.
* parameters (undefined) **required** - Parameters for an ApplicationOperations.ActivateApplicationPackage request.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the Batch account.
* accountName (string) **required** - The name of the account.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the Batch account.
* accountName (string) **required** - The name of the account.
* parameters (undefined) **required** - Parameters supplied to the RegenerateKey operation.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group that contains the Batch account.
* accountName (string) **required** - The name of the Batch account.
* api-version (string) **required** - The API version to be used with the HTTP request.
* subscriptionId (string) **required** - A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

