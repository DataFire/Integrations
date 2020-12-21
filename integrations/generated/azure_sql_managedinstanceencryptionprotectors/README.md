# @datafire/azure_sql_managedinstanceencryptionprotectors

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_managedinstanceencryptionprotectors
```
```js
let azure_sql_managedinstanceencryptionprotectors = require('@datafire/azure_sql_managedinstanceencryptionprotectors').create({
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

### ManagedInstanceEncryptionProtectors_ListByInstance
Gets a list of managed instance encryption protectors


```js
azure_sql_managedinstanceencryptionprotectors.ManagedInstanceEncryptionProtectors_ListByInstance({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedInstanceEncryptionProtectorListResult](#managedinstanceencryptionprotectorlistresult)

### ManagedInstanceEncryptionProtectors_Get
Gets a managed instance encryption protector.


```js
azure_sql_managedinstanceencryptionprotectors.ManagedInstanceEncryptionProtectors_Get({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "encryptionProtectorName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * encryptionProtectorName **required** `string` (values: current): The name of the encryption protector to be retrieved.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedInstanceEncryptionProtector](#managedinstanceencryptionprotector)

### ManagedInstanceEncryptionProtectors_CreateOrUpdate
Updates an existing encryption protector.


```js
azure_sql_managedinstanceencryptionprotectors.ManagedInstanceEncryptionProtectors_CreateOrUpdate({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "encryptionProtectorName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * encryptionProtectorName **required** `string` (values: current): The name of the encryption protector to be updated.
  * parameters **required** [ManagedInstanceEncryptionProtector](#managedinstanceencryptionprotector)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedInstanceEncryptionProtector](#managedinstanceencryptionprotector)

### ManagedInstanceEncryptionProtectors_Revalidate
Revalidates an existing encryption protector.


```js
azure_sql_managedinstanceencryptionprotectors.ManagedInstanceEncryptionProtectors_Revalidate({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "encryptionProtectorName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * encryptionProtectorName **required** `string` (values: current): The name of the encryption protector to be updated.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*



## Definitions

### ManagedInstanceEncryptionProtector
* ManagedInstanceEncryptionProtector `object`: The managed instance encryption protector.
  * kind `string`: Kind of encryption protector. This is metadata used for the Azure portal experience.
  * properties [ManagedInstanceEncryptionProtectorProperties](#managedinstanceencryptionprotectorproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ManagedInstanceEncryptionProtectorListResult
* ManagedInstanceEncryptionProtectorListResult `object`: A list of managed instance encryption protectors.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [ManagedInstanceEncryptionProtector](#managedinstanceencryptionprotector)

### ManagedInstanceEncryptionProtectorProperties
* ManagedInstanceEncryptionProtectorProperties `object`: Properties for an encryption protector execution.
  * serverKeyName `string`: The name of the managed instance key.
  * serverKeyType **required** `string` (values: ServiceManaged, AzureKeyVault): The encryption protector type like 'ServiceManaged', 'AzureKeyVault'.
  * thumbprint `string`: Thumbprint of the server key.
  * uri `string`: The URI of the server key.


