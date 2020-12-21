# @datafire/azure_labservices_ml

Client library for ManagedLabsClient

## Installation and Usage
```bash
npm install --save @datafire/azure_labservices_ml
```
```js
let azure_labservices_ml = require('@datafire/azure_labservices_ml').create({
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

The Managed Labs Client.

## Actions

### ProviderOperations_List
Result of the request to list REST API operations


```js
azure_labservices_ml.ProviderOperations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.

#### Output
* output [ProviderOperationResult](#provideroperationresult)

### GlobalUsers_GetEnvironment
Gets the virtual machine details


```js
azure_labservices_ml.GlobalUsers_GetEnvironment({
  "userName": "",
  "environmentOperationsPayload": {
    "environmentId": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * userName **required** `string`: The name of the user.
  * environmentOperationsPayload **required** [EnvironmentOperationsPayload](#environmentoperationspayload)
  * $expand `string`: Specify the $expand query. Example: 'properties($expand=environment)'
  * api-version **required** `string`: Client API version.

#### Output
* output [GetEnvironmentResponse](#getenvironmentresponse)

### GlobalUsers_GetOperationBatchStatus
Get batch operation status


```js
azure_labservices_ml.GlobalUsers_GetOperationBatchStatus({
  "userName": "",
  "operationBatchStatusPayload": {
    "urls": []
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * userName **required** `string`: The name of the user.
  * operationBatchStatusPayload **required** [OperationBatchStatusPayload](#operationbatchstatuspayload)
  * api-version **required** `string`: Client API version.

#### Output
* output [OperationBatchStatusResponse](#operationbatchstatusresponse)

### GlobalUsers_GetOperationStatus
Gets the status of long running operation


```js
azure_labservices_ml.GlobalUsers_GetOperationStatus({
  "userName": "",
  "operationStatusPayload": {
    "operationUrl": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * userName **required** `string`: The name of the user.
  * operationStatusPayload **required** [OperationStatusPayload](#operationstatuspayload)
  * api-version **required** `string`: Client API version.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### GlobalUsers_GetPersonalPreferences
Get personal preferences for a user


```js
azure_labservices_ml.GlobalUsers_GetPersonalPreferences({
  "userName": "",
  "personalPreferencesOperationsPayload": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * userName **required** `string`: The name of the user.
  * personalPreferencesOperationsPayload **required** [PersonalPreferencesOperationsPayload](#personalpreferencesoperationspayload)
  * api-version **required** `string`: Client API version.

#### Output
* output [GetPersonalPreferencesResponse](#getpersonalpreferencesresponse)

### GlobalUsers_ListEnvironments
List Environments for the user


```js
azure_labservices_ml.GlobalUsers_ListEnvironments({
  "userName": "",
  "listEnvironmentsPayload": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * userName **required** `string`: The name of the user.
  * listEnvironmentsPayload **required** [ListEnvironmentsPayload](#listenvironmentspayload)
  * api-version **required** `string`: Client API version.

#### Output
* output [ListEnvironmentsResponse](#listenvironmentsresponse)

### GlobalUsers_ListLabs
List labs for the user.


```js
azure_labservices_ml.GlobalUsers_ListLabs({
  "userName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * userName **required** `string`: The name of the user.
  * api-version **required** `string`: Client API version.

#### Output
* output [ListLabsResponse](#listlabsresponse)

### GlobalUsers_Register
Register a user to a managed lab


```js
azure_labservices_ml.GlobalUsers_Register({
  "userName": "",
  "registerPayload": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * userName **required** `string`: The name of the user.
  * registerPayload **required** [RegisterPayload](#registerpayload)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### GlobalUsers_ResetPassword
Resets the user password on an environment This operation can take a while to complete


```js
azure_labservices_ml.GlobalUsers_ResetPassword({
  "userName": "",
  "resetPasswordPayload": {
    "environmentId": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * userName **required** `string`: The name of the user.
  * resetPasswordPayload **required** [ResetPasswordPayload](#resetpasswordpayload)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### GlobalUsers_StartEnvironment
Starts an environment by starting all resources inside the environment. This operation can take a while to complete


```js
azure_labservices_ml.GlobalUsers_StartEnvironment({
  "userName": "",
  "environmentOperationsPayload": {
    "environmentId": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * userName **required** `string`: The name of the user.
  * environmentOperationsPayload **required** [EnvironmentOperationsPayload](#environmentoperationspayload)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### GlobalUsers_StopEnvironment
Stops an environment by stopping all resources inside the environment This operation can take a while to complete


```js
azure_labservices_ml.GlobalUsers_StopEnvironment({
  "userName": "",
  "environmentOperationsPayload": {
    "environmentId": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * userName **required** `string`: The name of the user.
  * environmentOperationsPayload **required** [EnvironmentOperationsPayload](#environmentoperationspayload)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### LabAccounts_ListBySubscription
List lab accounts in a subscription.


```js
azure_labservices_ml.LabAccounts_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * $expand `string`: Specify the $expand query. Example: 'properties($expand=sizeConfiguration)'
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[LabAccount]](#responsewithcontinuation[labaccount])

### Operations_Get
Get operation


```js
azure_labservices_ml.Operations_Get({
  "subscriptionId": "",
  "locationName": "",
  "operationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * locationName **required** `string`: The name of the location.
  * operationName **required** `string`: The name of the operation.
  * api-version **required** `string`: Client API version.

#### Output
* output [OperationResult](#operationresult)

### LabAccounts_ListByResourceGroup
List lab accounts in a resource group.


```js
azure_labservices_ml.LabAccounts_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * $expand `string`: Specify the $expand query. Example: 'properties($expand=sizeConfiguration)'
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[LabAccount]](#responsewithcontinuation[labaccount])

### LabAccounts_Delete
Delete lab account. This operation can take a while to complete


```js
azure_labservices_ml.LabAccounts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### LabAccounts_Get
Get lab account


```js
azure_labservices_ml.LabAccounts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * $expand `string`: Specify the $expand query. Example: 'properties($expand=sizeConfiguration)'
  * api-version **required** `string`: Client API version.

#### Output
* output [LabAccount](#labaccount)

### LabAccounts_Update
Modify properties of lab accounts.


```js
azure_labservices_ml.LabAccounts_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labAccount": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labAccount **required** [LabAccountFragment](#labaccountfragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [LabAccount](#labaccount)

### LabAccounts_CreateOrUpdate
Create or replace an existing Lab Account.


```js
azure_labservices_ml.LabAccounts_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labAccount": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labAccount **required** [LabAccount](#labaccount)
  * api-version **required** `string`: Client API version.

#### Output
* output [LabAccount](#labaccount)

### LabAccounts_CreateLab
Create a lab in a lab account.


```js
azure_labservices_ml.LabAccounts_CreateLab({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "createLabProperties": {
    "labCreationParameters": {},
    "name": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * createLabProperties **required** [CreateLabProperties](#createlabproperties)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### GalleryImages_List
List gallery images in a given lab account.


```js
azure_labservices_ml.GalleryImages_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=author)'
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[GalleryImage]](#responsewithcontinuation[galleryimage])

### GalleryImages_Delete
Delete gallery image.


```js
azure_labservices_ml.GalleryImages_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "galleryImageName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * galleryImageName **required** `string`: The name of the gallery Image.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### GalleryImages_Get
Get gallery image


```js
azure_labservices_ml.GalleryImages_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "galleryImageName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * galleryImageName **required** `string`: The name of the gallery Image.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=author)'
  * api-version **required** `string`: Client API version.

#### Output
* output [GalleryImage](#galleryimage)

### GalleryImages_Update
Modify properties of gallery images.


```js
azure_labservices_ml.GalleryImages_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "galleryImageName": "",
  "galleryImage": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * galleryImageName **required** `string`: The name of the gallery Image.
  * galleryImage **required** [GalleryImageFragment](#galleryimagefragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [GalleryImage](#galleryimage)

### GalleryImages_CreateOrUpdate
Create or replace an existing Gallery Image.


```js
azure_labservices_ml.GalleryImages_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "galleryImageName": "",
  "galleryImage": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * galleryImageName **required** `string`: The name of the gallery Image.
  * galleryImage **required** [GalleryImage](#galleryimage)
  * api-version **required** `string`: Client API version.

#### Output
* output [GalleryImage](#galleryimage)

### LabAccounts_GetRegionalAvailability
Get regional availability information for each size category configured under a lab account


```js
azure_labservices_ml.LabAccounts_GetRegionalAvailability({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * api-version **required** `string`: Client API version.

#### Output
* output [GetRegionalAvailabilityResponse](#getregionalavailabilityresponse)

### Labs_List
List labs in a given lab account.


```js
azure_labservices_ml.Labs_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=maxUsersInLab)'
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[Lab]](#responsewithcontinuation[lab])

### Labs_Delete
Delete lab. This operation can take a while to complete


```js
azure_labservices_ml.Labs_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Labs_Get
Get lab


```js
azure_labservices_ml.Labs_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=maxUsersInLab)'
  * api-version **required** `string`: Client API version.

#### Output
* output [Lab](#lab)

### Labs_Update
Modify properties of labs.


```js
azure_labservices_ml.Labs_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "lab": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * lab **required** [LabFragment](#labfragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [Lab](#lab)

### Labs_CreateOrUpdate
Create or replace an existing Lab.


```js
azure_labservices_ml.Labs_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "lab": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * lab **required** [Lab](#lab)
  * api-version **required** `string`: Client API version.

#### Output
* output [Lab](#lab)

### Labs_AddUsers
Add users to a lab


```js
azure_labservices_ml.Labs_AddUsers({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "addUsersPayload": {
    "emailAddresses": []
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * addUsersPayload **required** [AddUsersPayload](#adduserspayload)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### EnvironmentSettings_List
List environment setting in a given lab.


```js
azure_labservices_ml.EnvironmentSettings_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=publishingState)'
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[EnvironmentSetting]](#responsewithcontinuation[environmentsetting])

### EnvironmentSettings_Delete
Delete environment setting. This operation can take a while to complete


```js
azure_labservices_ml.EnvironmentSettings_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "environmentSettingName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * environmentSettingName **required** `string`: The name of the environment Setting.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### EnvironmentSettings_Get
Get environment setting


```js
azure_labservices_ml.EnvironmentSettings_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "environmentSettingName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * environmentSettingName **required** `string`: The name of the environment Setting.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=publishingState)'
  * api-version **required** `string`: Client API version.

#### Output
* output [EnvironmentSetting](#environmentsetting)

### EnvironmentSettings_Update
Modify properties of environment setting.


```js
azure_labservices_ml.EnvironmentSettings_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "environmentSettingName": "",
  "environmentSetting": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * environmentSettingName **required** `string`: The name of the environment Setting.
  * environmentSetting **required** [EnvironmentSettingFragment](#environmentsettingfragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [EnvironmentSetting](#environmentsetting)

### EnvironmentSettings_CreateOrUpdate
Create or replace an existing Environment Setting. This operation can take a while to complete


```js
azure_labservices_ml.EnvironmentSettings_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "environmentSettingName": "",
  "environmentSetting": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * environmentSettingName **required** `string`: The name of the environment Setting.
  * environmentSetting **required** [EnvironmentSetting](#environmentsetting)
  * api-version **required** `string`: Client API version.

#### Output
* output [EnvironmentSetting](#environmentsetting)

### EnvironmentSettings_ClaimAny
Claims a random environment for a user in an environment settings


```js
azure_labservices_ml.EnvironmentSettings_ClaimAny({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "environmentSettingName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * environmentSettingName **required** `string`: The name of the environment Setting.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Environments_List
List environments in a given environment setting.


```js
azure_labservices_ml.Environments_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "environmentSettingName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * environmentSettingName **required** `string`: The name of the environment Setting.
  * $expand `string`: Specify the $expand query. Example: 'properties($expand=networkInterface)'
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[Environment]](#responsewithcontinuation[environment])

### Environments_Delete
Delete environment. This operation can take a while to complete


```js
azure_labservices_ml.Environments_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "environmentSettingName": "",
  "environmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * environmentSettingName **required** `string`: The name of the environment Setting.
  * environmentName **required** `string`: The name of the environment.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Environments_Get
Get environment


```js
azure_labservices_ml.Environments_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "environmentSettingName": "",
  "environmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * environmentSettingName **required** `string`: The name of the environment Setting.
  * environmentName **required** `string`: The name of the environment.
  * $expand `string`: Specify the $expand query. Example: 'properties($expand=networkInterface)'
  * api-version **required** `string`: Client API version.

#### Output
* output [Environment](#environment)

### Environments_Update
Modify properties of environments.


```js
azure_labservices_ml.Environments_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "environmentSettingName": "",
  "environmentName": "",
  "environment": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * environmentSettingName **required** `string`: The name of the environment Setting.
  * environmentName **required** `string`: The name of the environment.
  * environment **required** [EnvironmentFragment](#environmentfragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [Environment](#environment)

### Environments_CreateOrUpdate
Create or replace an existing Environment.


```js
azure_labservices_ml.Environments_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "environmentSettingName": "",
  "environmentName": "",
  "environment": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * environmentSettingName **required** `string`: The name of the environment Setting.
  * environmentName **required** `string`: The name of the environment.
  * environment **required** [Environment](#environment)
  * api-version **required** `string`: Client API version.

#### Output
* output [Environment](#environment)

### Environments_Claim
Claims the environment and assigns it to the user


```js
azure_labservices_ml.Environments_Claim({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "environmentSettingName": "",
  "environmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * environmentSettingName **required** `string`: The name of the environment Setting.
  * environmentName **required** `string`: The name of the environment.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Environments_ResetPassword
Resets the user password on an environment This operation can take a while to complete


```js
azure_labservices_ml.Environments_ResetPassword({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "environmentSettingName": "",
  "environmentName": "",
  "resetPasswordPayload": {
    "environmentId": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * environmentSettingName **required** `string`: The name of the environment Setting.
  * environmentName **required** `string`: The name of the environment.
  * resetPasswordPayload **required** [ResetPasswordPayload](#resetpasswordpayload)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Environments_Start
Starts an environment by starting all resources inside the environment. This operation can take a while to complete


```js
azure_labservices_ml.Environments_Start({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "environmentSettingName": "",
  "environmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * environmentSettingName **required** `string`: The name of the environment Setting.
  * environmentName **required** `string`: The name of the environment.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Environments_Stop
Stops an environment by stopping all resources inside the environment This operation can take a while to complete


```js
azure_labservices_ml.Environments_Stop({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "environmentSettingName": "",
  "environmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * environmentSettingName **required** `string`: The name of the environment Setting.
  * environmentName **required** `string`: The name of the environment.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### EnvironmentSettings_Publish
Provisions/deprovisions required resources for an environment setting based on current state of the lab/environment setting.


```js
azure_labservices_ml.EnvironmentSettings_Publish({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "environmentSettingName": "",
  "publishPayload": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * environmentSettingName **required** `string`: The name of the environment Setting.
  * publishPayload **required** [PublishPayload](#publishpayload)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### EnvironmentSettings_Start
Starts a template by starting all resources inside the template. This operation can take a while to complete


```js
azure_labservices_ml.EnvironmentSettings_Start({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "environmentSettingName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * environmentSettingName **required** `string`: The name of the environment Setting.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### EnvironmentSettings_Stop
Starts a template by starting all resources inside the template. This operation can take a while to complete


```js
azure_labservices_ml.EnvironmentSettings_Stop({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "environmentSettingName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * environmentSettingName **required** `string`: The name of the environment Setting.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Labs_Register
Register to managed lab.


```js
azure_labservices_ml.Labs_Register({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Users_List
List users in a given lab.


```js
azure_labservices_ml.Users_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=email)'
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[User]](#responsewithcontinuation[user])

### Users_Delete
Delete user. This operation can take a while to complete


```js
azure_labservices_ml.Users_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "userName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Users_Get
Get user


```js
azure_labservices_ml.Users_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "userName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=email)'
  * api-version **required** `string`: Client API version.

#### Output
* output [User](#user)

### Users_Update
Modify properties of users.


```js
azure_labservices_ml.Users_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "userName": "",
  "user": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user.
  * user **required** [UserFragment](#userfragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [User](#user)

### Users_CreateOrUpdate
Create or replace an existing User.


```js
azure_labservices_ml.Users_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labAccountName": "",
  "labName": "",
  "userName": "",
  "user": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labAccountName **required** `string`: The name of the lab Account.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user.
  * user **required** [User](#user)
  * api-version **required** `string`: Client API version.

#### Output
* output [User](#user)



## Definitions

### AddUsersPayload
* AddUsersPayload `object`: Payload for Add Users operation on a Lab.
  * emailAddresses **required** `array`: List of user emails addresses to add to the lab.
    * items `string`

### CloudError
* CloudError `object`: Error from a REST request.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: Body of an error from a REST request.
  * code `string`
  * details `array`: Inner errors.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`
  * target `string`

### CreateLabProperties
* CreateLabProperties `object`: Properties for creating a managed lab and a default environment setting
  * environmentSettingCreationParameters [EnvironmentSettingCreationParameters](#environmentsettingcreationparameters)
  * labCreationParameters **required** [LabCreationParameters](#labcreationparameters)
  * location `string`: The location of the resource
  * name **required** `string`: The name of the resource
  * tags `object`: The tags of the resource.

### Environment
* Environment `object`: Represents an environment instance
  * properties [EnvironmentProperties](#environmentproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### EnvironmentDetails
* EnvironmentDetails `object`: This represents the details about a User's environment and its state.
  * description `string`: Description of the Environment
  * environmentState `string`: Publishing state of the environment setting Possible values are Creating, Created, Failed
  * id `string`: Resource Id of the environment
  * latestOperationResult [LatestOperationResult](#latestoperationresult)
  * name `string`: Name of the Environment
  * passwordLastReset `string`: When the password was last reset on the environment.
  * provisioningState `string`: The provisioning state of the environment. This also includes LabIsFull and NotYetProvisioned status.
  * totalUsage `string`: How long the environment has been used by a lab user
  * virtualMachineDetails [VirtualMachineDetails](#virtualmachinedetails)

### EnvironmentFragment
* EnvironmentFragment `object`: Represents an environment instance
  * properties [EnvironmentPropertiesFragment](#environmentpropertiesfragment)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### EnvironmentOperationsPayload
* EnvironmentOperationsPayload `object`: Represents payload for any Environment operations like get, start, stop, connect
  * environmentId **required** `string`: The resourceId of the environment

### EnvironmentProperties
* EnvironmentProperties `object`: Properties of an environment
  * claimedByUserName `string`: The name or email address of the user who has claimed the environment
  * claimedByUserObjectId `string`: The AAD object Id of the user who has claimed the environment
  * claimedByUserPrincipalId `string`: The user principal Id of the user who has claimed the environment
  * isClaimed `boolean`: Is the environment claimed or not
  * lastKnownPowerState `string`: Last known power state of the environment
  * latestOperationResult [LatestOperationResult](#latestoperationresult)
  * networkInterface [NetworkInterface](#networkinterface)
  * passwordLastReset `string`: When the password was last reset on the environment.
  * provisioningState `string`: The provisioning status of the resource.
  * resourceSets [ResourceSet](#resourceset)
  * totalUsage `string`: How long the environment has been used by a lab user
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### EnvironmentPropertiesFragment
* EnvironmentPropertiesFragment `object`: Properties of an environment
  * provisioningState `string`: The provisioning status of the resource.
  * resourceSets [ResourceSetFragment](#resourcesetfragment)
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### EnvironmentSetting
* EnvironmentSetting `object`: Represents settings of an environment, from which environment instances would be created
  * properties [EnvironmentSettingProperties](#environmentsettingproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### EnvironmentSettingCreationParameters
* EnvironmentSettingCreationParameters `object`: Settings related to creating an environment setting
  * resourceSettingCreationParameters **required** [ResourceSettingCreationParameters](#resourcesettingcreationparameters)

### EnvironmentSettingFragment
* EnvironmentSettingFragment `object`: Represents settings of an environment, from which environment instances would be created
  * properties [EnvironmentSettingPropertiesFragment](#environmentsettingpropertiesfragment)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### EnvironmentSettingProperties
* EnvironmentSettingProperties `object`: Properties of an environment setting
  * configurationState `string` (values: NotApplicable, Completed): Describes the user's progress in configuring their environment setting
  * description `string`: Describes the environment and its resource settings
  * lastChanged `string`: Time when the template VM was last changed.
  * lastPublished `string`: Time when the template VM was last sent for publishing.
  * latestOperationResult [LatestOperationResult](#latestoperationresult)
  * provisioningState `string`: The provisioning status of the resource.
  * publishingState `string` (values: Draft, Publishing, Published, PublishFailed, Scaling): Describes the readiness of this environment setting
  * resourceSettings **required** [ResourceSettings](#resourcesettings)
  * title `string`: Brief title describing the environment and its resource settings
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### EnvironmentSettingPropertiesFragment
* EnvironmentSettingPropertiesFragment `object`: Properties of an environment setting
  * configurationState `string` (values: NotApplicable, Completed): Describes the user's progress in configuring their environment setting
  * description `string`: Describes the environment and its resource settings
  * provisioningState `string`: The provisioning status of the resource.
  * resourceSettings [ResourceSettingsFragment](#resourcesettingsfragment)
  * title `string`: Brief title describing the environment and its resource settings
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### EnvironmentSize
* EnvironmentSize `object`: Represents a size category supported by this Lab Account (small, medium or large)
  * maxPrice `number`: The pay-as-you-go dollar price per hour this size will cost. It does not include discounts and may not reflect the actual price the size will cost. This is the maximum price of all prices within this tier.
  * minMemory `number`: The amount of memory available (in GB). This is the minimum amount of memory within this tier.
  * minNumberOfCores `integer`: The number of cores a VM of this size has. This is the minimum number of cores within this tier.
  * name `string` (values: Basic, Standard, Performance): The size category
  * vmSizes `array`: Represents a set of compute sizes that can serve this given size type
    * items [SizeInfo](#sizeinfo)

### EnvironmentSizeFragment
* EnvironmentSizeFragment `object`: Represents a size category supported by this Lab Account (small, medium or large)
  * name `string` (values: Basic, Standard, Performance): The size category
  * vmSizes `array`: Represents a set of compute sizes that can serve this given size type
    * items [SizeInfoFragment](#sizeinfofragment)

### GalleryImage
* GalleryImage `object`: Represents an image from the Azure Marketplace
  * properties [GalleryImageProperties](#galleryimageproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### GalleryImageFragment
* GalleryImageFragment `object`: Represents an image from the Azure Marketplace
  * properties [GalleryImagePropertiesFragment](#galleryimagepropertiesfragment)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### GalleryImageProperties
* GalleryImageProperties `object`: The gallery image properties
  * author `string`: The author of the gallery image.
  * createdDate `string`: The creation date of the gallery image.
  * description `string`: The description of the gallery image.
  * icon `string`: The icon of the gallery image.
  * imageReference [GalleryImageReference](#galleryimagereference)
  * isEnabled `boolean`: Indicates whether this gallery image is enabled.
  * isOverride `boolean`: Indicates whether this gallery has been overridden for this lab account
  * isPlanAuthorized `boolean`: Indicates if the plan has been authorized for programmatic deployment.
  * latestOperationResult [LatestOperationResult](#latestoperationresult)
  * planId `string`: The third party plan that applies to this image
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### GalleryImagePropertiesFragment
* GalleryImagePropertiesFragment `object`: The gallery image properties
  * isEnabled `boolean`: Indicates whether this gallery image is enabled.
  * isOverride `boolean`: Indicates whether this gallery has been overridden for this lab account
  * isPlanAuthorized `boolean`: Indicates if the plan has been authorized for programmatic deployment.
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### GalleryImageReference
* GalleryImageReference `object`: The reference information for an Azure Marketplace image.
  * offer `string`: The offer of the gallery image.
  * osType `string`: The OS type of the gallery image.
  * publisher `string`: The publisher of the gallery image.
  * sku `string`: The SKU of the gallery image.
  * version `string`: The version of the gallery image.

### GalleryImageReferenceFragment
* GalleryImageReferenceFragment `object`: The reference information for an Azure Marketplace image.
  * offer `string`: The offer of the gallery image.
  * osType `string`: The OS type of the gallery image.
  * publisher `string`: The publisher of the gallery image.
  * sku `string`: The SKU of the gallery image.
  * version `string`: The version of the gallery image.

### GetEnvironmentResponse
* GetEnvironmentResponse `object`: Represents the environments details
  * environment [EnvironmentDetails](#environmentdetails)

### GetPersonalPreferencesResponse
* GetPersonalPreferencesResponse `object`: Represents the PersonalPreferences for the user
  * favoriteLabResourceIds `array`: Array of favorite lab resource ids
    * items `string`
  * id `string`: Id to be used by the cache orchestrator

### GetRegionalAvailabilityResponse
* GetRegionalAvailabilityResponse `object`: The response model from the GetRegionalAvailability action
  * regionalAvailability `array`: Availability information for different size categories per region
    * items [RegionalAvailability](#regionalavailability)

### Lab
* Lab `object`: Represents a lab.
  * properties [LabProperties](#labproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### LabAccount
* LabAccount `object`: Represents a lab account.
  * properties [LabAccountProperties](#labaccountproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### LabAccountFragment
* LabAccountFragment `object`: Represents a lab account.
  * properties [LabAccountPropertiesFragment](#labaccountpropertiesfragment)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### LabAccountProperties
* LabAccountProperties `object`: Properties of a Lab Account.
  * enabledRegionSelection `boolean`: Represents if region selection is enabled
  * latestOperationResult [LatestOperationResult](#latestoperationresult)
  * provisioningState `string`: The provisioning status of the resource.
  * sizeConfiguration [SizeConfigurationProperties](#sizeconfigurationproperties)
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### LabAccountPropertiesFragment
* LabAccountPropertiesFragment `object`: Properties of a Lab Account.
  * enabledRegionSelection `boolean`: Represents if region selection is enabled
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### LabCreationParameters
* LabCreationParameters `object`: Settings related to creating a lab
  * maxUsersInLab `integer`: Maximum number of users allowed in the lab.

### LabDetails
* LabDetails `object`: This represents the details about a lab that the User is in, and its state.
  * id `string`: The Id of the lab.
  * name `string`: Name of the lab
  * provisioningState `string`: The provisioning state of the lab.
  * usageQuota `string`: The maximum duration a user can use a VM in this lab.

### LabFragment
* LabFragment `object`: Represents a lab.
  * properties [LabPropertiesFragment](#labpropertiesfragment)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### LabProperties
* LabProperties `object`: Properties of a Lab.
  * createdByObjectId `string`: Object id of the user that created the lab.
  * createdByUserPrincipalName `string`: Lab creator name
  * createdDate `string`: Creation date for the lab
  * invitationCode `string`: Invitation code that users can use to join a lab.
  * latestOperationResult [LatestOperationResult](#latestoperationresult)
  * maxUsersInLab `integer`: Maximum number of users allowed in the lab.
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * usageQuota `string`: Maximum duration a user can use an environment for in the lab.
  * userAccessMode `string` (values: Restricted, Open): Lab user access mode (open to all vs. restricted to those listed on the lab).
  * userQuota `integer`: Maximum value MaxUsersInLab can be set to, as specified by the service

### LabPropertiesFragment
* LabPropertiesFragment `object`: Properties of a Lab.
  * maxUsersInLab `integer`: Maximum number of users allowed in the lab.
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * usageQuota `string`: Maximum duration a user can use an environment for in the lab.
  * userAccessMode `string` (values: Restricted, Open): Lab user access mode (open to all vs. restricted to those listed on the lab).

### LatestOperationResult
* LatestOperationResult `object`: Details of the status of an operation.
  * errorCode `string`: Error code on failure.
  * errorMessage `string`: The error message.
  * httpMethod `string`: The HttpMethod - PUT/POST/DELETE for the operation.
  * operationUrl `string`: The URL to use to check long-running operation status
  * requestUri `string`: Request URI of the operation.
  * status `string`: The current status of the operation.

### LatestOperationResultFragment
* LatestOperationResultFragment `object`: Details of the status of an operation.

### ListEnvironmentsPayload
* ListEnvironmentsPayload `object`: Represents the payload to list environments owned by a user
  * labId `string`: The resource Id of the lab

### ListEnvironmentsResponse
* ListEnvironmentsResponse `object`: Represents the list of environments owned by a user
  * environments `array`: List of all the environments
    * items [EnvironmentDetails](#environmentdetails)

### ListLabsResponse
* ListLabsResponse `object`: Lists the labs owned by a user
  * labs `array`: List of all the labs
    * items [LabDetails](#labdetails)

### NetworkInterface
* NetworkInterface `object`: Network details of the environment
  * privateIpAddress `string`: PrivateIp address of the Compute VM
  * rdpAuthority `string`: Connection information for Windows
  * sshAuthority `string`: Connection information for Linux
  * username `string`: Username of the VM

### NetworkInterfaceFragment
* NetworkInterfaceFragment `object`: Network details of the environment

### OperationBatchStatusPayload
* OperationBatchStatusPayload `object`: Payload to get the status of an operation
  * urls **required** `array`: The operation url of long running operation
    * items `string`

### OperationBatchStatusResponse
* OperationBatchStatusResponse `object`: Status Details of the long running operation for an environment
  * items `array`: Gets a collection of items that contain the operation url and status.
    * items [OperationBatchStatusResponseItem](#operationbatchstatusresponseitem)

### OperationBatchStatusResponseItem
* OperationBatchStatusResponseItem `object`: Represents the status of an operation that used the batch API.
  * operationUrl `string`: status of the long running operation for an environment
  * status `string`: status of the long running operation for an environment

### OperationError
* OperationError `object`: Error details for the operation in case of a failure.
  * code `string`: The error code of the operation error.
  * message `string`: The error message of the operation error.

### OperationMetadata
* OperationMetadata `object`: The REST API operation supported by ManagedLab ResourceProvider.
  * display [OperationMetadataDisplay](#operationmetadatadisplay)
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationMetadataDisplay
* OperationMetadataDisplay `object`: The object that describes the operations
  * description `string`: Friendly name of the operation
  * operation `string`: Operation type: read, write, delete, listKeys/action, etc.
  * provider `string`: Friendly name of the resource provider
  * resource `string`: Resource type on which the operation is performed.

### OperationResult
* OperationResult `object`: An Operation Result
  * error [OperationError](#operationerror)
  * status `string`: The operation status.

### OperationStatusPayload
* OperationStatusPayload `object`: Payload to get the status of an operation
  * operationUrl **required** `string`: The operation url of long running operation

### OperationStatusResponse
* OperationStatusResponse `object`: Status Details of the long running operation for an environment
  * status `string`: status of the long running operation for an environment

### PersonalPreferencesOperationsPayload
* PersonalPreferencesOperationsPayload `object`: Represents payload for any Environment operations like get, start, stop, connect
  * addRemove `string` (values: Add, Remove): Enum indicating if user is adding or removing a favorite lab
  * labAccountResourceId `string`: Resource Id of the lab account
  * labResourceId `string`: Resource Id of the lab to add/remove from the favorites list

### ProviderOperationResult
* ProviderOperationResult `object`: Result of the request to list REST API operations
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of operations supported by the resource provider.
    * items [OperationMetadata](#operationmetadata)

### PublishPayload
* PublishPayload `object`: Payload for Publish operation on EnvironmentSetting.
  * useExistingImage `boolean`: Whether to use existing VM custom image when publishing.

### ReferenceVm
* ReferenceVm `object`: Details of a Reference Vm
  * password `string`: The password of the virtual machine. This will be set to null in GET resource API
  * userName **required** `string`: The username of the virtual machine
  * vmResourceId `string`: VM resource Id for the environment
  * vmStateDetails [VmStateDetails](#vmstatedetails)

### ReferenceVmCreationParameters
* ReferenceVmCreationParameters `object`: Creation parameters for Reference Vm
  * password **required** `string`: The password of the virtual machine.
  * userName **required** `string`: The username of the virtual machine

### ReferenceVmFragment
* ReferenceVmFragment `object`: Details of a Reference Vm
  * password `string`: The password of the virtual machine. This will be set to null in GET resource API
  * userName `string`: The username of the virtual machine

### RegionalAvailability
* RegionalAvailability `object`: The availability information of sizes across regions
  * region `string`: Corresponding region
  * sizeAvailabilities `array`: List of all the size information for the region
    * items [SizeAvailability](#sizeavailability)

### RegisterPayload
* RegisterPayload `object`: Represents payload for Register action.
  * registrationCode `string`: The registration code of the lab.

### ResetPasswordPayload
* ResetPasswordPayload `object`: Represents the payload for resetting passwords.
  * environmentId **required** `string`: The resourceId of the environment
  * password `string`: The password to assign to the user specified in
  * username `string`: The username for which the password will be reset.

### Resource
* Resource `object`: An Azure resource.
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### ResourceSet
* ResourceSet `object`: Represents a VM and the setting Id it was created for.
  * resourceSettingId `string`: resourceSettingId for the environment
  * vmResourceId `string`: VM resource Id for the environment

### ResourceSetFragment
* ResourceSetFragment `object`: Represents a VM and the setting Id it was created for.
  * resourceSettingId `string`: resourceSettingId for the environment
  * vmResourceId `string`: VM resource Id for the environment

### ResourceSettingCreationParameters
* ResourceSettingCreationParameters `object`: Represents resource specific settings
  * galleryImageResourceId **required** `string`: The resource id of the gallery image used for creating the virtual machine
  * location `string`: The location where the virtual machine will live
  * name `string`: The name of the resource setting
  * referenceVmCreationParameters **required** [ReferenceVmCreationParameters](#referencevmcreationparameters)
  * size `string` (values: Basic, Standard, Performance): The size of the virtual machine

### ResourceSettings
* ResourceSettings `object`: Represents resource specific settings
  * cores `integer`: The translated compute cores of the virtual machine
  * galleryImageResourceId `string`: The resource id of the gallery image used for creating the virtual machine
  * id `string`: The unique id of the resource setting
  * imageName `string`: The name of the image used to created the environment setting
  * referenceVm **required** [ReferenceVm](#referencevm)
  * size `string` (values: Basic, Standard, Performance): The size of the virtual machine

### ResourceSettingsFragment
* ResourceSettingsFragment `object`: Represents resource specific settings
  * galleryImageResourceId `string`: The resource id of the gallery image used for creating the virtual machine
  * referenceVm [ReferenceVmFragment](#referencevmfragment)
  * size `string` (values: Basic, Standard, Performance): The size of the virtual machine

### ResponseWithContinuation[EnvironmentSetting]
* ResponseWithContinuation[EnvironmentSetting] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [EnvironmentSetting](#environmentsetting)

### ResponseWithContinuation[Environment]
* ResponseWithContinuation[Environment] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [Environment](#environment)

### ResponseWithContinuation[GalleryImage]
* ResponseWithContinuation[GalleryImage] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [GalleryImage](#galleryimage)

### ResponseWithContinuation[LabAccount]
* ResponseWithContinuation[LabAccount] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [LabAccount](#labaccount)

### ResponseWithContinuation[Lab]
* ResponseWithContinuation[Lab] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [Lab](#lab)

### ResponseWithContinuation[User]
* ResponseWithContinuation[User] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [User](#user)

### SizeAvailability
* SizeAvailability `object`: Represents the size information
  * isAvailable `boolean`: Whether or not this size category is available
  * sizeCategory `string` (values: Basic, Standard, Performance): The category of the size (Basic, Standard, Performance).

### SizeConfigurationProperties
* SizeConfigurationProperties `object`: Represents the size configuration under the lab account
  * environmentSizes `array`: Represents a list of size categories supported by this Lab Account (Small, Medium, Large)
    * items [EnvironmentSize](#environmentsize)

### SizeConfigurationPropertiesFragment
* SizeConfigurationPropertiesFragment `object`: Represents the size configuration under the lab account
  * environmentSizes `array`: Represents a list of size categories supported by this Lab Account (Small, Medium, Large)
    * items [EnvironmentSizeFragment](#environmentsizefragment)

### SizeInfo
* SizeInfo `object`: Contains detailed information about a size
  * computeSize `string`: Represents the actual compute size, e.g. Standard_A2_v2.
  * memory `number`: The amount of memory available (in GB).
  * numberOfCores `integer`: The number of cores a VM of this size has.
  * price `number`: The pay-as-you-go price per hour this size will cost. It does not include discounts and may not reflect the actual price the size will cost.

### SizeInfoFragment
* SizeInfoFragment `object`: Contains detailed information about a size
  * computeSize `string`: Represents the actual compute size, e.g. Standard_A2_v2.
  * memory `number`: The amount of memory available (in GB).
  * numberOfCores `integer`: The number of cores a VM of this size has.
  * price `number`: The pay-as-you-go price per hour this size will cost. It does not include discounts and may not reflect the actual price the size will cost.

### User
* User `object`: The User registered to a lab
  * properties [UserProperties](#userproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### UserFragment
* UserFragment `object`: The User registered to a lab
  * properties [UserPropertiesFragment](#userpropertiesfragment)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### UserProperties
* UserProperties `object`: Lab User properties
  * email `string`: The user email address, as it was specified during registration.
  * familyName `string`: The user family name, as it was specified during registration.
  * givenName `string`: The user given name, as it was specified during registration.
  * latestOperationResult [LatestOperationResult](#latestoperationresult)
  * provisioningState `string`: The provisioning status of the resource.
  * tenantId `string`: The user tenant ID, as it was specified during registration.
  * totalUsage `string`: How long the user has used his VMs in this lab
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### UserPropertiesFragment
* UserPropertiesFragment `object`: Lab User properties
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### VirtualMachineDetails
* VirtualMachineDetails `object`: Details of the backing virtual machine.
  * lastKnownPowerState `string`: Last known compute power state captured in DTL
  * privateIpAddress `string`: PrivateIp address of the compute VM
  * provisioningState `string`: Provisioning state of the Dtl VM
  * rdpAuthority `string`: Connection information for Windows
  * sshAuthority `string`: Connection information for Linux
  * userName `string`: Compute VM login user name

### VmStateDetails
* VmStateDetails `object`: Details about the state of the reference virtual machine.
  * lastKnownPowerState `string`: Last known compute power state captured in DTL
  * powerState `string`: The power state of the reference virtual machine.
  * rdpAuthority `string`: The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol).
  * sshAuthority `string`: The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH.

### VmStateDetailsFragment
* VmStateDetailsFragment `object`: Details about the state of the reference virtual machine.


