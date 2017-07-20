# @datafire/azure_arm_documentdb

Client library for DocumentDB

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_documentdb
```

```js
let datafire = require('datafire');
let azure_arm_documentdb = require('@datafire/azure_arm_documentdb').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_documentdb: account,
  }
})


azure_arm_documentdb.DatabaseAccounts_CheckNameExists({}, context).then(data => {
  console.log(data);
})
```

## Description
Azure DocumentDB Database Service Resource Provider REST API

## Actions
### DatabaseAccounts_CheckNameExists
Checks that the Azure DocumentDB account name already exists. A valid account name may contain only lowercase letters, numbers, and the '-' character, and must be between 3 and 50 characters.


```js
azure_arm_documentdb.DatabaseAccounts_CheckNameExists({
  "accountName": "",
  "api-version": ""
}, context)
```

#### Parameters
* accountName (string) **required** - DocumentDB database account name.
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2015-04-08.

### DatabaseAccounts_List
Lists all the Azure DocumentDB database accounts available under the subscription.


```js
azure_arm_documentdb.DatabaseAccounts_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2015-04-08.
* subscriptionId (string) **required** - Azure subscription ID.

### DatabaseAccounts_ListByResourceGroup
Lists all the Azure DocumentDB database accounts available under the given resource group.


```js
azure_arm_documentdb.DatabaseAccounts_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of an Azure resource group.
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2015-04-08.
* subscriptionId (string) **required** - Azure subscription ID.

### DatabaseAccounts_Delete
Deletes an existing Azure DocumentDB database account.


```js
azure_arm_documentdb.DatabaseAccounts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription ID.
* resourceGroupName (string) **required** - Name of an Azure resource group.
* accountName (string) **required** - DocumentDB database account name.
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2015-04-08.

### DatabaseAccounts_Get
Retrieves the properties of an existing Azure DocumentDB database account.


```js
azure_arm_documentdb.DatabaseAccounts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription ID.
* resourceGroupName (string) **required** - Name of an Azure resource group.
* accountName (string) **required** - DocumentDB database account name.
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2015-04-08.

### DatabaseAccounts_Patch
Patches the properties of an existing Azure DocumentDB database account.


```js
azure_arm_documentdb.DatabaseAccounts_Patch({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "updateParameters": {
    "tags": {}
  }
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription ID.
* resourceGroupName (string) **required** - Name of an Azure resource group.
* accountName (string) **required** - DocumentDB database account name.
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2015-04-08.
* updateParameters (object) **required** - Parameters for patching Azure DocumentDB database account properties.

### DatabaseAccounts_CreateOrUpdate
Creates or updates an Azure DocumentDB database account.


```js
azure_arm_documentdb.DatabaseAccounts_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "createUpdateParameters": {
    "properties": {
      "locations": [],
      "databaseAccountOfferType": ""
    }
  }
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription ID.
* resourceGroupName (string) **required** - Name of an Azure resource group.
* accountName (string) **required** - DocumentDB database account name.
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2015-04-08.
* createUpdateParameters (object) **required** - Parameters to create and update DocumentDB database accounts.

### DatabaseAccounts_FailoverPriorityChange
Changes the failover priority for the Azure DocumentDB database account. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.


```js
azure_arm_documentdb.DatabaseAccounts_FailoverPriorityChange({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "failoverParameters": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription ID.
* resourceGroupName (string) **required** - Name of an Azure resource group.
* accountName (string) **required** - DocumentDB database account name.
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2015-04-08.
* failoverParameters (undefined) **required** - The list of new failover policies for the failover priority change.

### DatabaseAccounts_ListConnectionStrings
Lists the connection strings for the specified Azure DocumentDB database account.


```js
azure_arm_documentdb.DatabaseAccounts_ListConnectionStrings({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription ID.
* resourceGroupName (string) **required** - Name of an Azure resource group.
* accountName (string) **required** - DocumentDB database account name.
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2015-04-08.

### DatabaseAccounts_ListKeys
Lists the access keys for the specified Azure DocumentDB database account.


```js
azure_arm_documentdb.DatabaseAccounts_ListKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription ID.
* resourceGroupName (string) **required** - Name of an Azure resource group.
* accountName (string) **required** - DocumentDB database account name.
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2015-04-08.

### DatabaseAccounts_ListReadOnlyKeys
Lists the read-only access keys for the specified Azure DocumentDB database account.


```js
azure_arm_documentdb.DatabaseAccounts_ListReadOnlyKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription ID.
* resourceGroupName (string) **required** - Name of an Azure resource group.
* accountName (string) **required** - DocumentDB database account name.
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2015-04-08.

### DatabaseAccounts_RegenerateKey
Regenerates an access key for the specified Azure DocumentDB database account.


```js
azure_arm_documentdb.DatabaseAccounts_RegenerateKey({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "keyToRegenerate": {
    "keyKind": ""
  }
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription ID.
* resourceGroupName (string) **required** - Name of an Azure resource group.
* accountName (string) **required** - DocumentDB database account name.
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2015-04-08.
* keyToRegenerate (object) **required** - Parameters to regenerate the keys within the database account.

