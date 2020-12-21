# @datafire/azure_batch_batchmanagement

Client library for BatchManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_batch_batchmanagement
```
```js
let azure_batch_batchmanagement = require('@datafire/azure_batch_batchmanagement').create({
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



## Actions

### Operations_List
Lists available operations for the Microsoft.Batch provider


```js
azure_batch_batchmanagement.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
* output [OperationListResult](#operationlistresult)

### BatchAccount_List
Gets information about the Batch accounts associated with the subscription.


```js
azure_batch_batchmanagement.BatchAccount_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [BatchAccountListResult](#batchaccountlistresult)

### Location_CheckNameAvailability
Checks whether the Batch account name is available in the specified region.


```js
azure_batch_batchmanagement.Location_CheckNameAvailability({
  "locationName": "",
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: The desired region for the name check.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
  * parameters **required** [CheckNameAvailabilityParameters](#checknameavailabilityparameters)

#### Output
* output [CheckNameAvailabilityResult](#checknameavailabilityresult)

### Location_GetQuotas
Gets the Batch service quotas for the specified subscription at the given location.


```js
azure_batch_batchmanagement.Location_GetQuotas({
  "locationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: The region for which to retrieve Batch service quotas.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [BatchLocationQuota](#batchlocationquota)

### BatchAccount_ListByResourceGroup
Gets information about the Batch accounts associated with the specified resource group.


```js
azure_batch_batchmanagement.BatchAccount_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [BatchAccountListResult](#batchaccountlistresult)

### BatchAccount_Delete
Deletes the specified Batch account.


```js
azure_batch_batchmanagement.BatchAccount_Delete({
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
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
*Output schema unknown*

### BatchAccount_Get
Gets information about the specified Batch account.


```js
azure_batch_batchmanagement.BatchAccount_Get({
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
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [BatchAccount](#batchaccount)

### BatchAccount_Update
Updates the properties of an existing Batch account.


```js
azure_batch_batchmanagement.BatchAccount_Update({
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
  * accountName **required** `string`: The name of the Batch account.
  * parameters **required** [BatchAccountUpdateParameters](#batchaccountupdateparameters)
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [BatchAccount](#batchaccount)

### BatchAccount_Create
Creates a new Batch account with the specified parameters. Existing accounts cannot be updated with this API and should instead be updated with the Update Batch Account API.


```js
azure_batch_batchmanagement.BatchAccount_Create({
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
  * accountName **required** `string`: A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
  * parameters **required** [BatchAccountCreateParameters](#batchaccountcreateparameters)
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [BatchAccount](#batchaccount)

### Application_List
Lists all of the applications in the specified account.


```js
azure_batch_batchmanagement.Application_List({
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
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [ListApplicationsResult](#listapplicationsresult)

### Application_Delete
Deletes an application.


```js
azure_batch_batchmanagement.Application_Delete({
  "resourceGroupName": "",
  "accountName": "",
  "applicationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * applicationName **required** `string`: The name of the application. This must be unique within the account.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
*Output schema unknown*

### Application_Get
Gets information about the specified application.


```js
azure_batch_batchmanagement.Application_Get({
  "resourceGroupName": "",
  "accountName": "",
  "applicationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * applicationName **required** `string`: The name of the application. This must be unique within the account.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [Application](#application)

### Application_Update
Updates settings for the specified application.


```js
azure_batch_batchmanagement.Application_Update({
  "resourceGroupName": "",
  "accountName": "",
  "applicationName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * applicationName **required** `string`: The name of the application. This must be unique within the account.
  * parameters **required** [Application](#application)
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [Application](#application)

### Application_Create
Adds an application to the specified Batch account.


```js
azure_batch_batchmanagement.Application_Create({
  "resourceGroupName": "",
  "accountName": "",
  "applicationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * applicationName **required** `string`: The name of the application. This must be unique within the account.
  * parameters [Application](#application)
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [Application](#application)

### ApplicationPackage_List
Lists all of the application packages in the specified application.


```js
azure_batch_batchmanagement.ApplicationPackage_List({
  "resourceGroupName": "",
  "accountName": "",
  "applicationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * applicationName **required** `string`: The name of the application. This must be unique within the account.
  * maxresults `integer`: The maximum number of items to return in the response.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [ListApplicationPackagesResult](#listapplicationpackagesresult)

### ApplicationPackage_Delete
Deletes an application package record and its associated binary file.


```js
azure_batch_batchmanagement.ApplicationPackage_Delete({
  "resourceGroupName": "",
  "accountName": "",
  "applicationName": "",
  "versionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * applicationName **required** `string`: The name of the application. This must be unique within the account.
  * versionName **required** `string`: The version of the application.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
*Output schema unknown*

### ApplicationPackage_Get
Gets information about the specified application package.


```js
azure_batch_batchmanagement.ApplicationPackage_Get({
  "resourceGroupName": "",
  "accountName": "",
  "applicationName": "",
  "versionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * applicationName **required** `string`: The name of the application. This must be unique within the account.
  * versionName **required** `string`: The version of the application.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [ApplicationPackage](#applicationpackage)

### ApplicationPackage_Create
Creates an application package record. The record contains the SAS where the package should be uploaded to.  Once it is uploaded the `ApplicationPackage` needs to be activated using `ApplicationPackageActive` before it can be used.


```js
azure_batch_batchmanagement.ApplicationPackage_Create({
  "resourceGroupName": "",
  "accountName": "",
  "applicationName": "",
  "versionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * applicationName **required** `string`: The name of the application. This must be unique within the account.
  * versionName **required** `string`: The version of the application.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
  * parameters [ApplicationPackage](#applicationpackage)

#### Output
* output [ApplicationPackage](#applicationpackage)

### ApplicationPackage_Activate
Activates the specified application package. This should be done after the `ApplicationPackage` was created and uploaded. This needs to be done before an `ApplicationPackage` can be used on Pools or Tasks


```js
azure_batch_batchmanagement.ApplicationPackage_Activate({
  "resourceGroupName": "",
  "accountName": "",
  "applicationName": "",
  "versionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * applicationName **required** `string`: The name of the application. This must be unique within the account.
  * versionName **required** `string`: The version of the application.
  * parameters **required** [ActivateApplicationPackageParameters](#activateapplicationpackageparameters)
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [ApplicationPackage](#applicationpackage)

### Certificate_ListByBatchAccount
Lists all of the certificates in the specified account.


```js
azure_batch_batchmanagement.Certificate_ListByBatchAccount({
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
  * $select `string`: Comma separated list of properties that should be returned. e.g. "properties/provisioningState". Only top level properties under properties/ are valid for selection.
  * $filter `string`: OData filter expression. Valid properties for filtering are "properties/provisioningState", "properties/provisioningStateTransitionTime", "name".
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [ListCertificatesResult](#listcertificatesresult)

### Certificate_Delete
Deletes the specified certificate.


```js
azure_batch_batchmanagement.Certificate_Delete({
  "resourceGroupName": "",
  "accountName": "",
  "certificateName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * certificateName **required** `string`: The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
*Output schema unknown*

### Certificate_Get
Gets information about the specified certificate.


```js
azure_batch_batchmanagement.Certificate_Get({
  "resourceGroupName": "",
  "accountName": "",
  "certificateName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * certificateName **required** `string`: The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [Certificate](#certificate)

### Certificate_Update
Updates the properties of an existing certificate.


```js
azure_batch_batchmanagement.Certificate_Update({
  "resourceGroupName": "",
  "accountName": "",
  "certificateName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * certificateName **required** `string`: The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
  * parameters **required** [CertificateCreateOrUpdateParameters](#certificatecreateorupdateparameters)
  * If-Match `string`: The entity state (ETag) version of the certificate to update. This value can be omitted or set to "*" to apply the operation unconditionally.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [Certificate](#certificate)

### Certificate_Create
Creates a new certificate inside the specified account.


```js
azure_batch_batchmanagement.Certificate_Create({
  "resourceGroupName": "",
  "accountName": "",
  "certificateName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * certificateName **required** `string`: The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
  * parameters **required** [CertificateCreateOrUpdateParameters](#certificatecreateorupdateparameters)
  * If-Match `string`: The entity state (ETag) version of the certificate to update. A value of "*" can be used to apply the operation only if the certificate already exists. If omitted, this operation will always be applied.
  * If-None-Match `string`: Set to '*' to allow a new certificate to be created, but to prevent updating an existing certificate. Other values will be ignored.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [Certificate](#certificate)

### Certificate_CancelDeletion
If you try to delete a certificate that is being used by a pool or compute node, the status of the certificate changes to deleteFailed. If you decide that you want to continue using the certificate, you can use this operation to set the status of the certificate back to active. If you intend to delete the certificate, you do not need to run this operation after the deletion failed. You must make sure that the certificate is not being used by any resources, and then you can try again to delete the certificate.


```js
azure_batch_batchmanagement.Certificate_CancelDeletion({
  "resourceGroupName": "",
  "accountName": "",
  "certificateName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * certificateName **required** `string`: The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [Certificate](#certificate)

### BatchAccount_GetKeys
This operation applies only to Batch accounts created with a poolAllocationMode of 'BatchService'. If the Batch account was created with a poolAllocationMode of 'UserSubscription', clients cannot use access to keys to authenticate, and must use Azure Active Directory instead. In this case, getting the keys will fail.


```js
azure_batch_batchmanagement.BatchAccount_GetKeys({
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
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [BatchAccountKeys](#batchaccountkeys)

### Pool_ListByBatchAccount
Lists all of the pools in the specified account.


```js
azure_batch_batchmanagement.Pool_ListByBatchAccount({
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
  * $select `string`: Comma separated list of properties that should be returned. e.g. "properties/provisioningState". Only top level properties under properties/ are valid for selection.
  * $filter `string`: OData filter expression. Valid properties for filtering are:
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [ListPoolsResult](#listpoolsresult)

### Pool_Delete
Deletes the specified pool.


```js
azure_batch_batchmanagement.Pool_Delete({
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * poolName **required** `string`: The pool name. This must be unique within the account.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
*Output schema unknown*

### Pool_Get
Gets information about the specified pool.


```js
azure_batch_batchmanagement.Pool_Get({
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * poolName **required** `string`: The pool name. This must be unique within the account.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [Pool](#pool)

### Pool_Update
Updates the properties of an existing pool.


```js
azure_batch_batchmanagement.Pool_Update({
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * poolName **required** `string`: The pool name. This must be unique within the account.
  * parameters **required** [Pool](#pool)
  * If-Match `string`: The entity state (ETag) version of the pool to update. This value can be omitted or set to "*" to apply the operation unconditionally.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [Pool](#pool)

### Pool_Create
Creates a new pool inside the specified account.


```js
azure_batch_batchmanagement.Pool_Create({
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * poolName **required** `string`: The pool name. This must be unique within the account.
  * parameters **required** [Pool](#pool)
  * If-Match `string`: The entity state (ETag) version of the pool to update. A value of "*" can be used to apply the operation only if the pool already exists. If omitted, this operation will always be applied.
  * If-None-Match `string`: Set to '*' to allow a new pool to be created, but to prevent updating an existing pool. Other values will be ignored.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [Pool](#pool)

### Pool_DisableAutoScale
Disables automatic scaling for a pool.


```js
azure_batch_batchmanagement.Pool_DisableAutoScale({
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * poolName **required** `string`: The pool name. This must be unique within the account.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [Pool](#pool)

### Pool_StopResize
This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state. After stopping, the pool stabilizes at the number of nodes it was at when the stop operation was done. During the stop operation, the pool allocation state changes first to stopping and then to steady. A resize operation need not be an explicit resize pool request; this API can also be used to halt the initial sizing of the pool when it is created.


```js
azure_batch_batchmanagement.Pool_StopResize({
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the Batch account.
  * accountName **required** `string`: The name of the Batch account.
  * poolName **required** `string`: The pool name. This must be unique within the account.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [Pool](#pool)

### BatchAccount_RegenerateKey
Regenerates the specified account key for the Batch account.


```js
azure_batch_batchmanagement.BatchAccount_RegenerateKey({
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
  * accountName **required** `string`: The name of the Batch account.
  * parameters **required** [BatchAccountRegenerateKeyParameters](#batchaccountregeneratekeyparameters)
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [BatchAccountKeys](#batchaccountkeys)

### BatchAccount_SynchronizeAutoStorageKeys
Synchronizes access keys for the auto-storage account configured for the specified Batch account.


```js
azure_batch_batchmanagement.BatchAccount_SynchronizeAutoStorageKeys({
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
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
*Output schema unknown*



## Definitions

### ActivateApplicationPackageParameters
* ActivateApplicationPackageParameters `object`: Parameters for an activating an application package.
  * format **required** `string`: The format of the application package binary file.

### Application
* Application `object`: Contains information about an application in a Batch account.
  * properties [ApplicationProperties](#applicationproperties)
  * etag `string`: The ETag of the resource, used for concurrency statements.
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### ApplicationPackage
* ApplicationPackage `object`: An application package which represents a particular version of an application.
  * properties [ApplicationPackageProperties](#applicationpackageproperties)
  * etag `string`: The ETag of the resource, used for concurrency statements.
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### ApplicationPackageProperties
* ApplicationPackageProperties `object`: Properties of an application package
  * format `string`: The format of the application package, if the package is active.
  * lastActivationTime `string`: The time at which the package was last activated, if the package is active.
  * state `string` (values: Pending, Active): The current state of the application package.
  * storageUrl `string`: The URL for the application package in Azure Storage.
  * storageUrlExpiry `string`: The UTC time at which the Azure Storage URL will expire.

### ApplicationPackageReference
* Link to an application package inside the batch account `object`
  * id **required** `string`
  * version `string`: If this is omitted, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences. If you are calling the REST API directly, the HTTP status code is 409.

### ApplicationProperties
* ApplicationProperties `object`: The properties associated with the Application.
  * allowUpdates `boolean`: A value indicating whether packages within the application may be overwritten using the same version string.
  * defaultVersion `string`: The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
  * displayName `string`: The display name for the application.

### AutoScaleRun
* The results and errors from an execution of a pool autoscale formula. `object`
  * error [AutoScaleRunError](#autoscalerunerror)
  * evaluationTime **required** `string`
  * results `string`: Each variable value is returned in the form $variable=value, and variables are separated by semicolons.

### AutoScaleRunError
* An error that occurred when autoscaling a pool. `object`
  * code **required** `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`
    * items [AutoScaleRunError](#autoscalerunerror)
  * message **required** `string`: A message describing the error, intended to be suitable for display in a user interface.

### AutoScaleSettings
* AutoScale settings for the pool. `object`
  * evaluationInterval `string`: If omitted, the default value is 15 minutes (PT15M).
  * formula **required** `string`

### AutoStorageBaseProperties
* AutoStorageBaseProperties `object`: The properties related to the auto-storage account.
  * storageAccountId **required** `string`: The resource ID of the storage account to be used for auto-storage account.

### AutoStorageProperties
* AutoStorageProperties `object`: Contains information about the auto-storage account associated with a Batch account.
  * lastKeySync **required** `string`: The UTC time at which storage keys were last synchronized with the Batch account.
  * storageAccountId **required** `string`: The resource ID of the storage account to be used for auto-storage account.

### AutoUserSpecification
* Specifies the parameters for the auto user that runs a task on the Batch service. `object`
  * elevationLevel [ElevationLevel](#elevationlevel)
  * scope `string` (values: Task, Pool): The default value is Pool. If the pool is running Windows a value of Task should be specified if stricter isolation between tasks is required. For example, if the task mutates the registry in a way which could impact other tasks, or if certificates have been specified on the pool which should not be accessible by normal tasks but should be accessible by start tasks.

### AzureBlobFileSystemConfiguration
* Information used to connect to an Azure Storage Container using Blobfuse. `object`
  * accountKey `string`: This property is mutually exclusive with sasKey and one must be specified.
  * accountName **required** `string`
  * blobfuseOptions `string`: These are 'net use' options in Windows and 'mount' options in Linux.
  * containerName **required** `string`
  * relativeMountPath **required** `string`: All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
  * sasKey `string`: This property is mutually exclusive with accountKey and one must be specified.

### AzureFileShareConfiguration
* Information used to connect to an Azure Fileshare. `object`
  * accountKey **required** `string`
  * accountName **required** `string`
  * azureFileUrl **required** `string`: This is of the form 'https://{account}.file.core.windows.net/'.
  * mountOptions `string`: These are 'net use' options in Windows and 'mount' options in Linux.
  * relativeMountPath **required** `string`: All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.

### BatchAccount
* BatchAccount `object`: Contains information about an Azure Batch account.
  * properties [BatchAccountProperties](#batchaccountproperties)
  * id `string`: The ID of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### BatchAccountCreateParameters
* BatchAccountCreateParameters `object`: Parameters supplied to the Create operation.
  * location **required** `string`: The region in which to create the account.
  * properties [BatchAccountCreateProperties](#batchaccountcreateproperties)
  * tags `object`: The user-specified tags associated with the account.

### BatchAccountCreateProperties
* BatchAccountCreateProperties `object`: The properties of a Batch account.
  * autoStorage [AutoStorageBaseProperties](#autostoragebaseproperties)
  * keyVaultReference [KeyVaultReference](#keyvaultreference)
  * poolAllocationMode [PoolAllocationMode](#poolallocationmode)

### BatchAccountKeys
* BatchAccountKeys `object`: A set of Azure Batch account keys.
  * accountName `string`: The Batch account name.
  * primary `string`: The primary key associated with the account.
  * secondary `string`: The secondary key associated with the account.

### BatchAccountListResult
* BatchAccountListResult `object`: Values returned by the List operation.
  * nextLink `string`: The continuation token.
  * value `array`: The collection of Batch accounts returned by the listing operation.
    * items [BatchAccount](#batchaccount)

### BatchAccountProperties
* BatchAccountProperties `object`: Account specific properties.
  * accountEndpoint `string`: The account endpoint used to interact with the Batch service.
  * activeJobAndJobScheduleQuota `integer`
  * autoStorage [AutoStorageProperties](#autostorageproperties)
  * dedicatedCoreQuota `integer`: For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
  * dedicatedCoreQuotaPerVMFamily `array`: A list of the dedicated core quota per Virtual Machine family for the Batch account. For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
    * items [VirtualMachineFamilyCoreQuota](#virtualmachinefamilycorequota)
  * dedicatedCoreQuotaPerVMFamilyEnforced `boolean`: Batch is transitioning its core quota system for dedicated cores to be enforced per Virtual Machine family. During this transitional phase, the dedicated core quota per Virtual Machine family may not yet be enforced. If this flag is false, dedicated core quota is enforced via the old dedicatedCoreQuota property on the account and does not consider Virtual Machine family. If this flag is true, dedicated core quota is enforced via the dedicatedCoreQuotaPerVMFamily property on the account, and the old dedicatedCoreQuota does not apply.
  * keyVaultReference [KeyVaultReference](#keyvaultreference)
  * lowPriorityCoreQuota `integer`: For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
  * poolAllocationMode [PoolAllocationMode](#poolallocationmode)
  * poolQuota `integer`
  * provisioningState `string` (values: Invalid, Creating, Deleting, Succeeded, Failed, Cancelled): The provisioned state of the resource

### BatchAccountRegenerateKeyParameters
* BatchAccountRegenerateKeyParameters `object`: Parameters supplied to the RegenerateKey operation.
  * keyName **required** `string` (values: Primary, Secondary): The type of account key to regenerate.

### BatchAccountUpdateParameters
* BatchAccountUpdateParameters `object`: Parameters for updating an Azure Batch account.
  * properties [BatchAccountUpdateProperties](#batchaccountupdateproperties)
  * tags `object`: The user-specified tags associated with the account.

### BatchAccountUpdateProperties
* BatchAccountUpdateProperties `object`: The properties of a Batch account.
  * autoStorage [AutoStorageBaseProperties](#autostoragebaseproperties)

### BatchLocationQuota
* BatchLocationQuota `object`: Quotas associated with a Batch region for a particular subscription.
  * accountQuota `integer`: The number of Batch accounts that may be created under the subscription in the specified region.

### CIFSMountConfiguration
* Information used to connect to a CIFS file system. `object`
  * mountOptions `string`: These are 'net use' options in Windows and 'mount' options in Linux.
  * password **required** `string`
  * relativeMountPath **required** `string`: All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
  * source **required** `string`
  * username **required** `string`

### CachingType
* The type of caching to enable for the disk. `string` (values: None, ReadOnly, ReadWrite)

### Certificate
* Certificate `object`: Contains information about a certificate.
  * properties [CertificateProperties](#certificateproperties)
  * etag `string`: The ETag of the resource, used for concurrency statements.
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### CertificateBaseProperties
* CertificateBaseProperties `object`
  * format `string` (values: Pfx, Cer): The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx.
  * thumbprint `string`: This must match the thumbprint from the name.
  * thumbprintAlgorithm `string`: This must match the first portion of the certificate name. Currently required to be 'SHA1'.

### CertificateCreateOrUpdateParameters
* CertificateCreateOrUpdateParameters `object`: Contains information about a certificate.
  * properties [CertificateCreateOrUpdateProperties](#certificatecreateorupdateproperties)
  * etag `string`: The ETag of the resource, used for concurrency statements.
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### CertificateCreateOrUpdateProperties
* CertificateCreateOrUpdateProperties `object`: Certificate properties for create operations
  * data **required** `string`: The maximum size is 10KB.
  * password `string`: This is required if the certificate format is pfx and must be omitted if the certificate format is cer.
  * format `string` (values: Pfx, Cer): The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx.
  * thumbprint `string`: This must match the thumbprint from the name.
  * thumbprintAlgorithm `string`: This must match the first portion of the certificate name. Currently required to be 'SHA1'.

### CertificateProperties
* CertificateProperties `object`: Certificate properties.
  * deleteCertificateError [DeleteCertificateError](#deletecertificateerror)
  * previousProvisioningState `string` (values: Succeeded, Deleting, Failed): The previous provisioned state of the resource
  * previousProvisioningStateTransitionTime `string`
  * provisioningState `string` (values: Succeeded, Deleting, Failed)
  * provisioningStateTransitionTime `string`
  * publicData `string`: The public key of the certificate.
  * format `string` (values: Pfx, Cer): The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx.
  * thumbprint `string`: This must match the thumbprint from the name.
  * thumbprintAlgorithm `string`: This must match the first portion of the certificate name. Currently required to be 'SHA1'.

### CertificateReference
* A reference to a certificate to be installed on compute nodes in a pool. This must exist inside the same account as the pool. `object`
  * id **required** `string`
  * storeLocation `string` (values: CurrentUser, LocalMachine): The default value is currentUser. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
  * storeName `string`: This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My.
  * visibility `array`
    * items `string` (values: StartTask, Task, RemoteUser)

### CheckNameAvailabilityParameters
* CheckNameAvailabilityParameters `object`: Parameters for a check name availability request.
  * name **required** `string`: The name to check for availability
  * type **required** `string` (values: Microsoft.Batch/batchAccounts): The resource type. Must be set to Microsoft.Batch/batchAccounts

### CheckNameAvailabilityResult
* CheckNameAvailabilityResult `object`: The CheckNameAvailability operation response.
  * message `string`: Gets an error message explaining the Reason value in more detail.
  * nameAvailable `boolean`: Gets a boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or invalid and cannot be used.
  * reason `string` (values: Invalid, AlreadyExists): Gets the reason that a Batch account name could not be used. The Reason element is only returned if NameAvailable is false.

### CloudError
* CloudError `object`: An error response from the Batch service.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: An error response from the Batch service.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error.

### CloudServiceConfiguration
* The configuration for nodes in a pool based on the Azure Cloud Services platform. `object`
  * osFamily **required** `string`: Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016. 6 - OS Family 6, equivalent to Windows Server 2019. For more information, see Azure Guest OS Releases (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
  * osVersion `string`: The default value is * which specifies the latest operating system version for the specified OS family.

### ComputeNodeDeallocationOption
* Determines what to do with a node and its running task(s) after it has been selected for deallocation. `string` (values: Requeue, Terminate, TaskCompletion, RetainedData)

### ContainerConfiguration
* The configuration for container-enabled pools. `object`
  * containerImageNames `array`: This is the full image reference, as would be specified to "docker pull". An image will be sourced from the default Docker registry unless the image is fully qualified with an alternative registry.
    * items `string`
  * containerRegistries `array`: If any images must be downloaded from a private registry which requires credentials, then those credentials must be provided here.
    * items [ContainerRegistry](#containerregistry)
  * type **required** `string` (values: DockerCompatible)

### ContainerRegistry
* A private container registry. `object`
  * password **required** `string`
  * registryServer `string`: If omitted, the default is "docker.io".
  * username **required** `string`

### DataDisk
* DataDisk `object`: Settings which will be used by the data disks associated to Compute Nodes in the Pool. When using attached data disks, you need to mount and format the disks from within a VM to use them.
  * caching [CachingType](#cachingtype)
  * diskSizeGB **required** `integer`
  * lun **required** `integer`: The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun.
  * storageAccountType [StorageAccountType](#storageaccounttype)

### DeleteCertificateError
* DeleteCertificateError `object`: An error response from the Batch service.
  * code **required** `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [DeleteCertificateError](#deletecertificateerror)
  * message **required** `string`: A message describing the error, intended to be suitable for display in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error.

### DeploymentConfiguration
* Deployment configuration properties. `object`
  * cloudServiceConfiguration [CloudServiceConfiguration](#cloudserviceconfiguration)
  * virtualMachineConfiguration [VirtualMachineConfiguration](#virtualmachineconfiguration)

### ElevationLevel
* The elevation level of the user. `string` (values: NonAdmin, Admin)

### EnvironmentSetting
* An environment variable to be set on a task process. `object`
  * name **required** `string`
  * value `string`

### FixedScaleSettings
* Fixed scale settings for the pool. `object`
  * nodeDeallocationOption [ComputeNodeDeallocationOption](#computenodedeallocationoption)
  * resizeTimeout `string`: The default value is 15 minutes. Timeout values use ISO 8601 format. For example, use PT10M for 10 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * targetDedicatedNodes `integer`: At least one of targetDedicatedNodes, targetLowPriority nodes must be set.
  * targetLowPriorityNodes `integer`: At least one of targetDedicatedNodes, targetLowPriority nodes must be set.

### ImageReference
* A reference to an Azure Virtual Machines Marketplace image or the Azure Image resource of a custom Virtual Machine. To get the list of all imageReferences verified by Azure Batch, see the 'List supported node agent SKUs' operation. `object`
  * id `string`: This property is mutually exclusive with other properties. For Virtual Machine Image it must be in the same region and subscription as the Azure Batch account. For SIG image it must have replicas in the same region as the Azure Batch account. For information about the firewall settings for the Batch node agent to communicate with the Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration.
  * offer `string`: For example, UbuntuServer or WindowsServer.
  * publisher `string`: For example, Canonical or MicrosoftWindowsServer.
  * sku `string`: For example, 18.04-LTS or 2019-Datacenter.
  * version `string`: A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'.

### InboundNatPool
* A inbound NAT pool that can be used to address specific ports on compute nodes in a Batch pool externally. `object`
  * backendPort **required** `integer`: This must be unique within a Batch pool. Acceptable values are between 1 and 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400.
  * frontendPortRangeEnd **required** `integer`: Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
  * frontendPortRangeStart **required** `integer`: Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
  * name **required** `string`: The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400.
  * networkSecurityGroupRules `array`: The maximum number of rules that can be specified across all the endpoints on a Batch pool is 25. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. If the maximum number of network security group rules is exceeded the request fails with HTTP status code 400.
    * items [NetworkSecurityGroupRule](#networksecuritygrouprule)
  * protocol **required** `string` (values: TCP, UDP)

### KeyVaultReference
* KeyVaultReference `object`: Identifies the Azure key vault associated with a Batch account.
  * id **required** `string`: The resource ID of the Azure key vault associated with the Batch account.
  * url **required** `string`: The URL of the Azure key vault associated with the Batch account.

### LinuxUserConfiguration
* Properties used to create a user account on a Linux node. `object`
  * gid `integer`: The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the gid.
  * sshPrivateKey `string`: The private key must not be password protected. The private key is used to automatically configure asymmetric-key based authentication for SSH between nodes in a Linux pool when the pool's enableInterNodeCommunication property is true (it is ignored if enableInterNodeCommunication is false). It does this by placing the key pair into the user's .ssh directory. If not specified, password-less SSH is not configured between nodes (no modification of the user's .ssh directory is done).
  * uid `integer`: The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the uid.

### ListApplicationPackagesResult
* ListApplicationPackagesResult `object`: The result of performing list application packages.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The list of application packages.
    * items [ApplicationPackage](#applicationpackage)

### ListApplicationsResult
* ListApplicationsResult `object`: The result of performing list applications.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The list of applications.
    * items [Application](#application)

### ListCertificatesResult
* ListCertificatesResult `object`: Values returned by the List operation.
  * nextLink `string`: The continuation token.
  * value `array`: The collection of returned certificates.
    * items [Certificate](#certificate)

### ListPoolsResult
* ListPoolsResult `object`: Values returned by the List operation.
  * nextLink `string`: The continuation token.
  * value `array`: The collection of returned pools.
    * items [Pool](#pool)

### MetadataItem
* A name-value pair associated with a Batch service resource. `object`: The Batch service does not assign any meaning to this metadata; it is solely for the use of user code.
  * name **required** `string`
  * value **required** `string`

### MountConfiguration
* The file system to mount on each node. `object`
  * azureBlobFileSystemConfiguration [AzureBlobFileSystemConfiguration](#azureblobfilesystemconfiguration)
  * azureFileShareConfiguration [AzureFileShareConfiguration](#azurefileshareconfiguration)
  * cifsMountConfiguration [CIFSMountConfiguration](#cifsmountconfiguration)
  * nfsMountConfiguration [NFSMountConfiguration](#nfsmountconfiguration)

### NFSMountConfiguration
* Information used to connect to an NFS file system. `object`
  * mountOptions `string`: These are 'net use' options in Windows and 'mount' options in Linux.
  * relativeMountPath **required** `string`: All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
  * source **required** `string`

### NetworkConfiguration
* NetworkConfiguration `object`: The network configuration for a pool.
  * endpointConfiguration [PoolEndpointConfiguration](#poolendpointconfiguration)
  * publicIPs `array`: The number of IPs specified here limits the maximum size of the Pool - 50 dedicated nodes or 20 low-priority nodes can be allocated for each public IP. For example, a pool needing 150 dedicated VMs would need at least 3 public IPs specified. Each element of this collection is of the form: /subscriptions/{subscription}/resourceGroups/{group}/providers/Microsoft.Network/publicIPAddresses/{ip}.
    * items `string`
  * subnetId `string`: The virtual network must be in the same region and subscription as the Azure Batch account. The specified subnet should have enough free IP addresses to accommodate the number of nodes in the pool. If the subnet doesn't have enough free IP addresses, the pool will partially allocate compute nodes, and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule tasks on the compute nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the compute nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the compute nodes to unusable. For pools created via virtualMachineConfiguration the Batch account must have poolAllocationMode userSubscription in order to use a VNet. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication. For pools created with a virtual machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. For pools created with a cloud service configuration, enable ports 10100, 20100, and 30100. Also enable outbound connections to Azure Storage on port 443. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration

### NetworkSecurityGroupRule
* A network security group rule to apply to an inbound endpoint. `object`
  * access **required** `string` (values: Allow, Deny)
  * priority **required** `integer`: Priorities within a pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 3500. If any reserved or duplicate values are provided the request fails with HTTP status code 400.
  * sourceAddressPrefix **required** `string`: Valid values are a single IP address (i.e. 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If any other values are provided the request fails with HTTP status code 400.
  * sourcePortRanges `array`: Valid values are '*' (for all ports 0 - 65535) or arrays of ports or port ranges (i.e. 100-200). The ports should in the range of 0 to 65535 and the port ranges or ports can't overlap. If any other values are provided the request fails with HTTP status code 400. Default value will be *.
    * items `string`

### Operation
* A REST API operation `object`
  * display `object`
    * description `string`
    * operation `string`: For example: read, write, delete, or listKeys/action
    * provider `string`
    * resource `string`
  * name `string`: This is of the format {provider}/{resource}/{operation}
  * origin `string`
  * properties `object`

### OperationListResult
* Result of the request to list REST API operations. It contains a list of operations and a URL nextLink to get the next set of results. `object`
  * nextLink `string`
  * value `array`
    * items [Operation](#operation)

### Pool
* Pool `object`: Contains information about a pool.
  * properties [PoolProperties](#poolproperties)
  * etag `string`: The ETag of the resource, used for concurrency statements.
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### PoolAllocationMode
* PoolAllocationMode `string` (values: BatchService, UserSubscription): The allocation mode for creating pools in the Batch account.

### PoolEndpointConfiguration
* The endpoint configuration for a pool. `object`
  * inboundNatPools **required** `array`: The maximum number of inbound NAT pools per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded the request fails with HTTP status code 400.
    * items [InboundNatPool](#inboundnatpool)

### PoolProperties
* PoolProperties `object`: Pool properties.
  * allocationState `string` (values: Steady, Resizing, Stopping)
  * allocationStateTransitionTime `string`
  * applicationLicenses `array`: The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail.
    * items `string`
  * applicationPackages `array`: Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. There is a maximum of 10 application package references on any given pool.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * autoScaleRun [AutoScaleRun](#autoscalerun)
  * certificates `array`: For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * creationTime `string`
  * currentDedicatedNodes `integer`
  * currentLowPriorityNodes `integer`
  * deploymentConfiguration [DeploymentConfiguration](#deploymentconfiguration)
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * interNodeCommunication `string` (values: Enabled, Disabled): This imposes restrictions on which nodes can be assigned to the pool. Enabling this value can reduce the chance of the requested number of nodes to be allocated in the pool. If not specified, this value defaults to 'Disabled'.
  * lastModified `string`: This is the last time at which the pool level data, such as the targetDedicatedNodes or autoScaleSettings, changed. It does not factor in node-level changes such as a compute node changing state.
  * maxTasksPerNode `integer`: The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256.
  * metadata `array`: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
    * items [MetadataItem](#metadataitem)
  * mountConfiguration `array`: This supports Azure Files, NFS, CIFS/SMB, and Blobfuse.
    * items [MountConfiguration](#mountconfiguration)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * provisioningState `string` (values: Succeeded, Deleting)
  * provisioningStateTransitionTime `string`
  * resizeOperationStatus [ResizeOperationStatus](#resizeoperationstatus)
  * scaleSettings [ScaleSettings](#scalesettings)
  * startTask [StartTask](#starttask)
  * taskSchedulingPolicy [TaskSchedulingPolicy](#taskschedulingpolicy)
  * userAccounts `array`
    * items [UserAccount](#useraccount)
  * vmSize `string`: For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).

### ProxyResource
* ProxyResource `object`: A definition of an Azure resource.
  * etag `string`: The ETag of the resource, used for concurrency statements.
  * id `string`: The ID of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### ResizeError
* An error that occurred when resizing a pool. `object`
  * code **required** `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`
    * items [ResizeError](#resizeerror)
  * message **required** `string`: A message describing the error, intended to be suitable for display in a user interface.

### ResizeOperationStatus
* Details about the current or last completed resize operation. `object`: Describes either the current operation (if the pool AllocationState is Resizing) or the previously completed operation (if the AllocationState is Steady).
  * errors `array`: This property is set only if an error occurred during the last pool resize, and only when the pool allocationState is Steady.
    * items [ResizeError](#resizeerror)
  * nodeDeallocationOption [ComputeNodeDeallocationOption](#computenodedeallocationoption)
  * resizeTimeout `string`: The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * startTime `string`
  * targetDedicatedNodes `integer`
  * targetLowPriorityNodes `integer`

### Resource
* Resource `object`: A definition of an Azure resource.
  * id `string`: The ID of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### ResourceFile
* A single file or multiple files to be downloaded to a compute node. `object`
  * autoStorageContainerName `string`: The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified.
  * blobPrefix `string`: The property is valid only when autoStorageContainerName or storageContainerUrl is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded.
  * fileMode `string`: This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file.
  * filePath `string`: If the httpUrl property is specified, the filePath is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the autoStorageContainerName or storageContainerUrl property is specified, filePath is optional and is the directory to download the files to. In the case where filePath is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the task's working directory (for example by using '..').
  * httpUrl `string`: The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. If the URL is Azure Blob Storage, it must be readable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, or set the ACL for the blob or its container to allow public access.
  * storageContainerUrl `string`: The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. This URL must be readable and listable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the blob, or set the ACL for the blob or its container to allow public access.

### ScaleSettings
* Scale settings for the pool `object`: Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes.
  * autoScale [AutoScaleSettings](#autoscalesettings)
  * fixedScale [FixedScaleSettings](#fixedscalesettings)

### StartTask
* A task which is run when a compute node joins a pool in the Azure Batch service, or when the compute node is rebooted or reimaged. `object`: In some cases the start task may be re-run even though the node was not rebooted. Due to this, start tasks should be idempotent and exit gracefully if the setup they're performing has already been done. Special care should be taken to avoid start tasks which create breakaway process or install/launch services from the start task working directory, as this will block Batch from being able to re-run the start task.
  * commandLine `string`: The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. Required if any other properties of the startTask are specified.
  * containerSettings [TaskContainerSettings](#taskcontainersettings)
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * maxTaskRetryCount `integer`: The Batch service retries a task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task. If the maximum retry count is -1, the Batch service retries the task without limit.
  * resourceFiles `array`
    * items [ResourceFile](#resourcefile)
  * userIdentity [UserIdentity](#useridentity)
  * waitForSuccess `boolean`: If true and the start task fails on a compute node, the Batch service retries the start task up to its maximum retry count (maxTaskRetryCount). If the task has still not completed successfully after all retries, then the Batch service marks the compute node unusable, and will not schedule tasks to it. This condition can be detected via the node state and scheduling error detail. If false, the Batch service will not wait for the start task to complete. In this case, other tasks can start executing on the compute node while the start task is still running; and even if the start task fails, new tasks will continue to be scheduled on the node. The default is true.

### StorageAccountType
* The storage account type for use in creating data disks. `string` (values: Standard_LRS, Premium_LRS)

### TaskContainerSettings
* The container settings for a task. `object`
  * containerRunOptions `string`: These additional options are supplied as arguments to the "docker create" command, in addition to those controlled by the Batch Service.
  * imageName **required** `string`: This is the full image reference, as would be specified to "docker pull". If no tag is provided as part of the image name, the tag ":latest" is used as a default.
  * registry [ContainerRegistry](#containerregistry)
  * workingDirectory `string` (values: TaskWorkingDirectory, ContainerImageDefault)

### TaskSchedulingPolicy
* Specifies how tasks should be distributed across compute nodes. `object`
  * nodeFillType **required** `string` (values: Spread, Pack)

### UserAccount
* Properties used to create a user on an Azure Batch node. `object`
  * elevationLevel [ElevationLevel](#elevationlevel)
  * linuxUserConfiguration [LinuxUserConfiguration](#linuxuserconfiguration)
  * name **required** `string`
  * password **required** `string`
  * windowsUserConfiguration [WindowsUserConfiguration](#windowsuserconfiguration)

### UserIdentity
* The definition of the user identity under which the task is run. `object`: Specify either the userName or autoUser property, but not both.
  * autoUser [AutoUserSpecification](#autouserspecification)
  * userName `string`: The userName and autoUser properties are mutually exclusive; you must specify one but not both.

### VirtualMachineConfiguration
* The configuration for compute nodes in a pool based on the Azure Virtual Machines infrastructure. `object`
  * containerConfiguration [ContainerConfiguration](#containerconfiguration)
  * dataDisks `array`: This property must be specified if the compute nodes in the pool need to have empty data disks attached to them.
    * items [DataDisk](#datadisk)
  * imageReference **required** [ImageReference](#imagereference)
  * licenseType `string`: This only applies to images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:
  * nodeAgentSkuId **required** `string`: The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. You must specify a node agent SKU which matches the selected image reference. To get the list of supported node agent SKUs along with their list of verified image references, see the 'List supported node agent SKUs' operation.
  * windowsConfiguration [WindowsConfiguration](#windowsconfiguration)

### VirtualMachineFamilyCoreQuota
* VirtualMachineFamilyCoreQuota `object`: A VM Family and its associated core quota for the Batch account.
  * coreQuota `integer`: The core quota for the VM family for the Batch account.
  * name `string`: The Virtual Machine family name.

### WindowsConfiguration
* Windows operating system settings to apply to the virtual machine. `object`
  * enableAutomaticUpdates `boolean`: If omitted, the default value is true.

### WindowsUserConfiguration
* Properties used to create a user account on a Windows node. `object`
  * loginMode `string` (values: Batch, Interactive): Specifies login mode for the user. The default value for VirtualMachineConfiguration pools is interactive mode and for CloudServiceConfiguration pools is batch mode.


