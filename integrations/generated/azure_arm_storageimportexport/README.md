# @datafire/azure_arm_storageimportexport

Client library for StorageImportExport

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_storageimportexport
```

```js
let datafire = require('datafire');
let azure_arm_storageimportexport = require('@datafire/azure_arm_storageimportexport').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_storageimportexport.ListLocations({}).then(data => {
  console.log(data);
})
```

## Description
The Microsoft Azure Storage Import/Export Resource Provider API.

## Actions
### ListLocations
Returns a list of locations to which you can ship the disks associated with an import or export job. A location is a Microsoft data center region.


```js
azure_arm_storageimportexport.ListLocations({
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Specifies the API version to use for this request.
* Accept-Language (string) **required** - Specifies the preferred language for the response.

### GetLocation
Gets a location to which you can ship the disks associated with an import or export job. A location is an Azure region.


```js
azure_arm_storageimportexport.GetLocation({
  "locationName": "",
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Parameters
* locationName (string) **required** - The name of the location. For example, 'West US' or 'westus'.
* api-version (string) **required** - Specifies the API version to use for this request.
* Accept-Language (string) **required** - Specifies the preferred language for the response.

### ListSupportedOperations
Returns the list of operations supported by the import/export resource provider.


```js
azure_arm_storageimportexport.ListSupportedOperations({
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Specifies the API version to use for this request.
* Accept-Language (string) **required** - Specifies the preferred language for the response.

### Jobs_List
Gets all the active and completed import/export jobs in a subscription.


```js
azure_arm_storageimportexport.Jobs_List({
  "subscriptionId": "",
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription ID for the Azure user.
* api-version (string) **required** - Specifies the API version to use for this request.
* Accept-Language (string) **required** - Specifies the preferred language for the response.
* $top (integer) - An integer value that specifies how many jobs at most should be returned. The value cannot exceed 100.
* $filter (string) - Can be used to restrict the results to certain conditions. The following possible values can be used with $filter: 1) $filter=type eq '{type}'; 2) $filter=trackingnumber eq '{trackingnumber}'; 3) $filter=state eq '{state}'; 4) Logical and combination of the above, for example: $filter=type eq 'Import' and state eq 'Transferring'. Valid values for type are Import and Export. Valid values for state are Creating, Shipping, Received, Transferring, Packaging, Closed, and Completed.

### Jobs_ListByResourceGroup
Returns all active and completed import/export jobs in a resource group.


```js
azure_arm_storageimportexport.Jobs_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription ID for the Azure user.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscription.
* api-version (string) **required** - Specifies the API version to use for this request.
* Accept-Language (string) **required** - Specifies the preferred language for the response.
* $top (integer) - An integer value that specifies how many jobs at most should be returned. The value cannot exceed 100.
* $filter (string) - Can be used to restrict the results to certain conditions. The following possible values can be used with $filter: 1) $filter=type eq '{type}'; 2) $filter=trackingnumber eq '{trackingnumber}'; 3) $filter=state eq '{state}'; 4) Logical and combination of the above, for example: $filter=type eq 'Import' and state eq 'Transferring'. Valid values for type are Import and Export. Valid values for state are Creating, Shipping, Received, Transferring, Packaging, Closed, and Completed.

### Jobs_Delete
Deletes an existing import/export job. Only import/export jobs in the Creating or Completed states can be deleted.


```js
azure_arm_storageimportexport.Jobs_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription ID for the Azure user.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscription.
* jobName (string) **required** - The name of the import/export job.
* api-version (string) **required** - Specifies the API version to use for this request.
* Accept-Language (string) **required** - Specifies the preferred language for the response.

### Jobs_Get
Gets information about an existing import/export job.


```js
azure_arm_storageimportexport.Jobs_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription ID for the Azure user.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscription.
* jobName (string) **required** - The name of the import/export job.
* api-version (string) **required** - Specifies the API version to use for this request.
* Accept-Language (string) **required** - Specifies the preferred language for the response.

### Jobs_Update
Updates specific properties of the import/export job. You can call this operation to notify the Import/Export service that the hard drives comprising the import or export job have been shipped to the Microsoft data center. It can also be used to cancel an existing job.


```js
azure_arm_storageimportexport.Jobs_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "jobProperties": null,
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription ID for the Azure user.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscription.
* jobName (string) **required** - The name of the import/export job.
* jobProperties (undefined) **required** - Describes the updatable properties of the job
* api-version (string) **required** - Specifies the API version to use for this request.
* Accept-Language (string) **required** - Specifies the preferred language for the response.

### Jobs_CreateOrUpdate
Creates a new import/export job or updates an existing import/export job in the specified subscription.


```js
azure_arm_storageimportexport.Jobs_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "jobProperties": null,
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription ID for the Azure user.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscription.
* jobName (string) **required** - The name of the import/export job.
* jobProperties (undefined) **required** - Describes an import/export job.
* api-version (string) **required** - Specifies the API version to use for this request.
* Accept-Language (string) **required** - Specifies the preferred language for the response.

### Jobs_ListBitLockerKeys
Lists the BitLocker keys for all drives in the specified import/export job.


```js
azure_arm_storageimportexport.Jobs_ListBitLockerKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription ID for the Azure user.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscription.
* jobName (string) **required** - The name of the import/export job.
* api-version (string) **required** - Specifies the API version to use for this request.
* Accept-Language (string) **required** - Specifies the preferred language for the response.

### Jobs_Move
Moves the specified import/export jobs from the resource group to a target resource group. The target resource group may be in a different subscription.


```js
azure_arm_storageimportexport.Jobs_Move({
  "subscriptionId": "",
  "resourceGroupName": "",
  "MoveJobsParameters": null,
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription ID for the Azure user.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscription.
* MoveJobsParameters (undefined) **required** - Defines the parameters that need to be provided for moving an import/export job from one reesource group to another.
* api-version (string) **required** - Specifies the API version to use for this request.
* Accept-Language (string) **required** - Specifies the preferred language for the response.

