# @datafire/azure_sql_managedinstancekeys

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_managedinstancekeys
```
```js
let azure_sql_managedinstancekeys = require('@datafire/azure_sql_managedinstancekeys').create({
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

### ManagedInstanceKeys_ListByInstance
Gets a list of managed instance keys.


```js
azure_sql_managedinstancekeys.ManagedInstanceKeys_ListByInstance({
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
  * $filter `string`: An OData filter expression that filters elements in the collection.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedInstanceKeyListResult](#managedinstancekeylistresult)

### ManagedInstanceKeys_Delete
Deletes the managed instance key with the given name.


```js
azure_sql_managedinstancekeys.ManagedInstanceKeys_Delete({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "keyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * keyName **required** `string`: The name of the managed instance key to be deleted.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### ManagedInstanceKeys_Get
Gets a managed instance key.


```js
azure_sql_managedinstancekeys.ManagedInstanceKeys_Get({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "keyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * keyName **required** `string`: The name of the managed instance key to be retrieved.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedInstanceKey](#managedinstancekey)

### ManagedInstanceKeys_CreateOrUpdate
Creates or updates a managed instance key.


```js
azure_sql_managedinstancekeys.ManagedInstanceKeys_CreateOrUpdate({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "keyName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * keyName **required** `string`: The name of the managed instance key to be operated on (updated or created).
  * parameters **required** [ManagedInstanceKey](#managedinstancekey)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedInstanceKey](#managedinstancekey)



## Definitions

### ManagedInstanceKey
* ManagedInstanceKey `object`: A managed instance key.
  * kind `string`: Kind of encryption protector. This is metadata used for the Azure portal experience.
  * properties [ManagedInstanceKeyProperties](#managedinstancekeyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ManagedInstanceKeyListResult
* ManagedInstanceKeyListResult `object`: A list of managed instance keys.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [ManagedInstanceKey](#managedinstancekey)

### ManagedInstanceKeyProperties
* ManagedInstanceKeyProperties `object`: Properties for a key execution.
  * creationDate `string`: The key creation date.
  * serverKeyType **required** `string` (values: ServiceManaged, AzureKeyVault): The key type like 'ServiceManaged', 'AzureKeyVault'.
  * thumbprint `string`: Thumbprint of the key.
  * uri `string`: The URI of the key. If the ServerKeyType is AzureKeyVault, then the URI is required.


