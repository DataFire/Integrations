# @datafire/azure_hybriddatamanager_hybriddata

Client library for HybridDataManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_hybriddatamanager_hybriddata
```
```js
let azure_hybriddatamanager_hybriddata = require('@datafire/azure_hybriddatamanager_hybriddata').create({
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
This method gets all the operations.


```js
azure_hybriddatamanager_hybriddata.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API Version

#### Output
* output [AvailableProviderOperations](#availableprovideroperations)

### DataManagers_List
Lists all the data manager resources available under the subscription.


```js
azure_hybriddatamanager_hybriddata.DataManagers_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * api-version **required** `string`: The API Version

#### Output
* output [DataManagerList](#datamanagerlist)

### DataManagers_ListByResourceGroup
Lists all the data manager resources available under the given resource group.


```js
azure_hybriddatamanager_hybriddata.DataManagers_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * api-version **required** `string`: The API Version

#### Output
* output [DataManagerList](#datamanagerlist)

### DataManagers_Delete
Deletes a data manager resource in Microsoft Azure.


```js
azure_hybriddatamanager_hybriddata.DataManagers_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
*Output schema unknown*

### DataManagers_Get
Gets information about the specified data manager resource.


```js
azure_hybriddatamanager_hybriddata.DataManagers_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
* output [DataManager](#datamanager)

### DataManagers_Update
Updates the properties of an existing data manager resource.


```js
azure_hybriddatamanager_hybriddata.DataManagers_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": "",
  "dataManagerUpdateParameter": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version
  * If-Match `string`: Defines the If-Match condition. The patch will be performed only if the ETag of the data manager resource on the server matches this value.
  * dataManagerUpdateParameter **required** [DataManagerUpdateParameter](#datamanagerupdateparameter)

#### Output
* output [DataManager](#datamanager)

### DataManagers_Create
Creates a new data manager resource with the specified parameters. Existing resources cannot be updated with this API
and should instead be updated with the Update data manager resource API.


```js
azure_hybriddatamanager_hybriddata.DataManagers_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": "",
  "dataManager": {
    "location": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version
  * dataManager **required** [DataManager](#datamanager)

#### Output
* output [DataManager](#datamanager)

### DataServices_ListByDataManager
This method gets all the data services.


```js
azure_hybriddatamanager_hybriddata.DataServices_ListByDataManager({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
* output [DataServiceList](#dataservicelist)

### DataServices_Get
Gets the data service that match the data service name given.


```js
azure_hybriddatamanager_hybriddata.DataServices_Get({
  "dataServiceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataServiceName **required** `string`: The name of the data service that is being queried.
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
* output [DataService](#dataservice)

### JobDefinitions_ListByDataService
This method gets all the job definitions of the given data service name.


```js
azure_hybriddatamanager_hybriddata.JobDefinitions_ListByDataService({
  "dataServiceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataServiceName **required** `string`: The data service type of interest.
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version
  * $filter `string`: OData Filter options

#### Output
* output [JobDefinitionList](#jobdefinitionlist)

### JobDefinitions_Delete
This method deletes the given job definition.


```js
azure_hybriddatamanager_hybriddata.JobDefinitions_Delete({
  "dataServiceName": "",
  "jobDefinitionName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataServiceName **required** `string`: The data service type of the job definition.
  * jobDefinitionName **required** `string`: The job definition name to be deleted.
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
*Output schema unknown*

### JobDefinitions_Get
This method gets job definition object by name.


```js
azure_hybriddatamanager_hybriddata.JobDefinitions_Get({
  "dataServiceName": "",
  "jobDefinitionName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataServiceName **required** `string`: The data service name of the job definition
  * jobDefinitionName **required** `string`: The job definition name that is being queried.
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
* output [JobDefinition](#jobdefinition)

### JobDefinitions_CreateOrUpdate
Creates or updates a job definition.


```js
azure_hybriddatamanager_hybriddata.JobDefinitions_CreateOrUpdate({
  "dataServiceName": "",
  "jobDefinitionName": "",
  "jobDefinition": {
    "properties": {
      "dataSourceId": "",
      "dataSinkId": "",
      "state": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataServiceName **required** `string`: The data service type of the job definition.
  * jobDefinitionName **required** `string`: The job definition name to be created or updated.
  * jobDefinition **required** [JobDefinition](#jobdefinition)
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
* output [JobDefinition](#jobdefinition)

### Jobs_ListByJobDefinition
This method gets all the jobs of a given job definition.


```js
azure_hybriddatamanager_hybriddata.Jobs_ListByJobDefinition({
  "dataServiceName": "",
  "jobDefinitionName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataServiceName **required** `string`: The name of the data service of the job definition.
  * jobDefinitionName **required** `string`: The name of the job definition for which jobs are needed.
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version
  * $filter `string`: OData Filter options

#### Output
* output [JobList](#joblist)

### Jobs_Get
This method gets a data manager job given the jobId.


```js
azure_hybriddatamanager_hybriddata.Jobs_Get({
  "dataServiceName": "",
  "jobDefinitionName": "",
  "jobId": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataServiceName **required** `string`: The name of the data service of the job definition.
  * jobDefinitionName **required** `string`: The name of the job definition of the job.
  * jobId **required** `string`: The job id of the job queried.
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version
  * $expand `string`: $expand is supported on details parameter for job, which provides details on the job stages.

#### Output
* output [Job](#job)

### Jobs_Cancel
Cancels the given job.


```js
azure_hybriddatamanager_hybriddata.Jobs_Cancel({
  "dataServiceName": "",
  "jobDefinitionName": "",
  "jobId": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataServiceName **required** `string`: The name of the data service of the job definition.
  * jobDefinitionName **required** `string`: The name of the job definition of the job.
  * jobId **required** `string`: The job id of the job queried.
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
*Output schema unknown*

### Jobs_Resume
Resumes the given job.


```js
azure_hybriddatamanager_hybriddata.Jobs_Resume({
  "dataServiceName": "",
  "jobDefinitionName": "",
  "jobId": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataServiceName **required** `string`: The name of the data service of the job definition.
  * jobDefinitionName **required** `string`: The name of the job definition of the job.
  * jobId **required** `string`: The job id of the job queried.
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
*Output schema unknown*

### JobDefinitions_Run
This method runs a job instance of the given job definition.


```js
azure_hybriddatamanager_hybriddata.JobDefinitions_Run({
  "dataServiceName": "",
  "jobDefinitionName": "",
  "runParameters": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataServiceName **required** `string`: The data service type of the job definition.
  * jobDefinitionName **required** `string`: Name of the job definition.
  * runParameters **required** [RunParameters](#runparameters)
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
*Output schema unknown*

### Jobs_ListByDataService
This method gets all the jobs of a data service type in a given resource.


```js
azure_hybriddatamanager_hybriddata.Jobs_ListByDataService({
  "dataServiceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataServiceName **required** `string`: The name of the data service of interest.
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version
  * $filter `string`: OData Filter options

#### Output
* output [JobList](#joblist)

### DataStoreTypes_ListByDataManager
Gets all the data store/repository types that the resource supports.


```js
azure_hybriddatamanager_hybriddata.DataStoreTypes_ListByDataManager({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
* output [DataStoreTypeList](#datastoretypelist)

### DataStoreTypes_Get
Gets the data store/repository type given its name.


```js
azure_hybriddatamanager_hybriddata.DataStoreTypes_Get({
  "dataStoreTypeName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataStoreTypeName **required** `string`: The data store/repository type name for which details are needed.
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
* output [DataStoreType](#datastoretype)

### DataStores_ListByDataManager
Gets all the data stores/repositories in the given resource.


```js
azure_hybriddatamanager_hybriddata.DataStores_ListByDataManager({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version
  * $filter `string`: OData Filter options

#### Output
* output [DataStoreList](#datastorelist)

### DataStores_Delete
This method deletes the given data store/repository.


```js
azure_hybriddatamanager_hybriddata.DataStores_Delete({
  "dataStoreName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataStoreName **required** `string`: The data store/repository name to be deleted.
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
*Output schema unknown*

### DataStores_Get
This method gets the data store/repository by name.


```js
azure_hybriddatamanager_hybriddata.DataStores_Get({
  "dataStoreName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataStoreName **required** `string`: The data store/repository name queried.
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
* output [DataStore](#datastore)

### DataStores_CreateOrUpdate
Creates or updates the data store/repository in the data manager.


```js
azure_hybriddatamanager_hybriddata.DataStores_CreateOrUpdate({
  "dataStoreName": "",
  "dataStore": {
    "properties": {
      "state": "",
      "dataStoreTypeId": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataStoreName **required** `string`: The data store/repository name to be created or updated.
  * dataStore **required** [DataStore](#datastore)
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
* output [DataStore](#datastore)

### JobDefinitions_ListByDataManager
This method gets all the job definitions of the given data manager resource.


```js
azure_hybriddatamanager_hybriddata.JobDefinitions_ListByDataManager({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version
  * $filter `string`: OData Filter options

#### Output
* output [JobDefinitionList](#jobdefinitionlist)

### Jobs_ListByDataManager
This method gets all the jobs at the data manager resource level.


```js
azure_hybriddatamanager_hybriddata.Jobs_ListByDataManager({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version
  * $filter `string`: OData Filter options

#### Output
* output [JobList](#joblist)

### PublicKeys_ListByDataManager
This method gets the list view of public keys, however it will only have one element.


```js
azure_hybriddatamanager_hybriddata.PublicKeys_ListByDataManager({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
* output [PublicKeyList](#publickeylist)

### PublicKeys_Get
This method gets the public keys.


```js
azure_hybriddatamanager_hybriddata.PublicKeys_Get({
  "publicKeyName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "dataManagerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * publicKeyName **required** `string`: Name of the public key.
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * dataManagerName **required** `string`: The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
* output [PublicKey](#publickey)



## Definitions

### AvailableProviderOperation
* AvailableProviderOperation `object`: Class represents provider operation
  * display [AvailableProviderOperationDisplay](#availableprovideroperationdisplay)
  * name **required** `string`: Gets or Sets Name of the operations
  * origin `string`: Gets or sets Origin
  * properties [AvailableProviderOperationProperties](#availableprovideroperationproperties)

### AvailableProviderOperationDisplay
* AvailableProviderOperationDisplay `object`: Contains the localized display information for this particular operation / action. 
  * description `string`: Gets or sets Description
  * operation `string`: Gets or sets Operation
  * provider `string`: Gets or sets Provider
  * resource `string`: Gets or sets Resource

### AvailableProviderOperationProperties
* AvailableProviderOperationProperties `object`: Class represents Properties in AvailableProviderOperations

### AvailableProviderOperations
* AvailableProviderOperations `object`: Class for set of operations used for discovery of available provider operations.
  * nextLink `string`: Link for the next set of operations.
  * value `array`: List of operations.
    * items [AvailableProviderOperation](#availableprovideroperation)

### CustomerSecret
* CustomerSecret `object`: The pair of customer secret.
  * algorithm **required** `string` (values: None, RSA1_5, RSA_OAEP, PlainText): The encryption algorithm used to encrypt data.
  * keyIdentifier **required** `string`: The identifier to the data service input object which this secret corresponds to.
  * keyValue **required** `string`: It contains the encrypted customer secret.

### DataManager
* DataManager `object`: The DataManager resource.
  * etag `string`: Etag of the Resource.
  * id `string`: The Resource Id.
  * location **required** `string`: The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East
  * name `string`: The Resource Name.
  * sku [Sku](#sku)
  * tags `object`: The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource
  * type `string`: The Resource type.

### DataManagerList
* DataManagerList `object`: DataManager resources Collection.
  * nextLink `string`: Link for the next set of data stores.
  * value `array`: List of data manager resources.
    * items [DataManager](#datamanager)

### DataManagerUpdateParameter
* DataManagerUpdateParameter `object`: The DataManagerUpdateParameter.
  * sku [Sku](#sku)
  * tags `object`: The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource

### DataService
* DataService `object`: Data Service.
  * properties **required** [DataServiceProperties](#dataserviceproperties)
  * id `string`: Id of the object.
  * name `string`: Name of the object.
  * type `string`: Type of the object.

### DataServiceList
* DataServiceList `object`: Data Service Collection.
  * nextLink `string`: Link for the next set of data services.
  * value `array`: List of data services.
    * items [DataService](#dataservice)

### DataServiceProperties
* DataServiceProperties `object`: Data Service properties.
  * state **required** `string` (values: Disabled, Enabled, Supported): State of the data service.
  * supportedDataSinkTypes `array`: Supported data store types which can be used as a sink.
    * items `string`
  * supportedDataSourceTypes `array`: Supported data store types which can be used as a source.
    * items `string`

### DataStore
* DataStore `object`: Data store.
  * properties **required** [DataStoreProperties](#datastoreproperties)
  * id `string`: Id of the object.
  * name `string`: Name of the object.
  * type `string`: Type of the object.

### DataStoreFilter
* DataStoreFilter `object`: Contains the information about the filters for the DataStore.
  * dataStoreTypeId `string`: The data store type id.

### DataStoreList
* DataStoreList `object`: Data Store Collection.
  * nextLink `string`: Link for the next set of data stores.
  * value `array`: List of data stores.
    * items [DataStore](#datastore)

### DataStoreProperties
* DataStoreProperties `object`: Data Store for sources and sinks
  * customerSecrets `array`: List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
    * items [CustomerSecret](#customersecret)
  * dataStoreTypeId **required** `string`: The arm id of the data store type.
  * extendedProperties `object`: A generic json used differently by each data source type.
  * repositoryId `string`: Arm Id for the manager resource to which the data source is associated. This is optional.
  * state **required** `string` (values: Disabled, Enabled, Supported): State of the data source.

### DataStoreType
* DataStoreType `object`: Data Store Type.
  * properties **required** [DataStoreTypeProperties](#datastoretypeproperties)
  * id `string`: Id of the object.
  * name `string`: Name of the object.
  * type `string`: Type of the object.

### DataStoreTypeList
* DataStoreTypeList `object`: Data Store Type Collection.
  * nextLink `string`: Link for the next set of data store types.
  * value `array`: List of DataStoreType.
    * items [DataStoreType](#datastoretype)

### DataStoreTypeProperties
* DataStoreTypeProperties `object`: Data Store Type properties.
  * repositoryType `string`: Arm type for the manager resource to which the data source type is associated. This is optional.
  * state **required** `string` (values: Disabled, Enabled, Supported): State of the data store type.
  * supportedDataServicesAsSink `array`: Supported data services where it can be used as a sink.
    * items `string`
  * supportedDataServicesAsSource `array`: Supported data services where it can be used as a source.
    * items `string`

### DmsBaseObject
* DmsBaseObject `object`: Base class for all objects under DataManager Service
  * id `string`: Id of the object.
  * name `string`: Name of the object.
  * type `string`: Type of the object.

### Error
* Error `object`: Top level error for the job.
  * code **required** `string`: Error code that can be used to programmatically identify the error.
  * message `string`: Describes the error in detail and provides debugging information.

### ErrorDetails
* ErrorDetails `object`: Error Details
  * errorCode `integer`: Error code.
  * errorMessage `string`: Error message.
  * exceptionMessage `string`: Contains the non localized exception message
  * recommendedAction `string`: Recommended action for the error.

### Job
* Job `object`: Data service job.
  * endTime `string`: Time at which the job ended in UTC ISO 8601 format.
  * error [Error](#error)
  * properties **required** [JobProperties](#jobproperties)
  * startTime **required** `string`: Time at which the job was started in UTC ISO 8601 format.
  * status **required** `string` (values: None, InProgress, Succeeded, WaitingForAction, Failed, Cancelled, Cancelling): Status of the job.
  * id `string`: Id of the object.
  * name `string`: Name of the object.
  * type `string`: Type of the object.

### JobDefinition
* JobDefinition `object`: Job Definition.
  * properties **required** [JobDefinitionProperties](#jobdefinitionproperties)
  * id `string`: Id of the object.
  * name `string`: Name of the object.
  * type `string`: Type of the object.

### JobDefinitionFilter
* JobDefinitionFilter `object`: Contains the supported job definition filters.
  * dataSource `string`: The data source associated with the job definition
  * lastModified `string`: The last modified date time of the data source.
  * state **required** `string` (values: Disabled, Enabled, Supported): The state of the job definition.

### JobDefinitionList
* JobDefinitionList `object`: Job Definition Collection.
  * nextLink `string`: Link for the next set of job definitions.
  * value `array`: List of job definitions.
    * items [JobDefinition](#jobdefinition)

### JobDefinitionProperties
* JobDefinitionProperties `object`: Job Definition
  * customerSecrets `array`: List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
    * items [CustomerSecret](#customersecret)
  * dataServiceInput `object`: A generic json used differently by each data service type.
  * dataSinkId **required** `string`: Data Sink Id associated to the job definition.
  * dataSourceId **required** `string`: Data Source Id associated to the job definition.
  * lastModifiedTime `string`: Last modified time of the job definition.
  * runLocation `string` (values: none, australiaeast, australiasoutheast, brazilsouth, canadacentral, canadaeast, centralindia, centralus, eastasia, eastus, eastus2, japaneast, japanwest, koreacentral, koreasouth, southeastasia, southcentralus, southindia, northcentralus, northeurope, uksouth, ukwest, westcentralus, westeurope, westindia, westus, westus2): This is the preferred geo location for the job to run.
  * schedules `array`: Schedule for running the job definition
    * items [Schedule](#schedule)
  * state **required** `string` (values: Disabled, Enabled, Supported): State of the job definition.
  * userConfirmation `string` (values: NotRequired, Required): Enum to detect if user confirmation is required. If not passed will default to NotRequired.

### JobDetails
* JobDetails `object`: Job details.
  * errorDetails `array`: Error details for failure. This is optional.
    * items [ErrorDetails](#errordetails)
  * itemDetailsLink `string`: Item Details Link to download files or see details
  * jobDefinition [JobDefinition](#jobdefinition)
  * jobStages `array`: List of stages that ran in the job
    * items [JobStages](#jobstages)

### JobFilter
* JobFilter `object`: Contains the information about the filters for the job.
  * startTime `string`: The start time of the job.
  * status **required** `string` (values: None, InProgress, Succeeded, WaitingForAction, Failed, Cancelled, Cancelling): The status of the job.

### JobList
* JobList `object`: Job Collection.
  * nextLink `string`: Link for the next set of jobs.
  * value `array`: List of jobs.
    * items [Job](#job)

### JobProperties
* JobProperties `object`: Job Properties
  * bytesProcessed `integer`: Number of bytes processed by the job as of now.
  * dataSinkName `string`: Name of the data sink on which the job was triggered.
  * dataSourceName `string`: Name of the data source on which the job was triggered.
  * details [JobDetails](#jobdetails)
  * isCancellable **required** `string` (values: NotCancellable, Cancellable): Describes whether the job is cancellable.
  * itemsProcessed `integer`: Number of items processed by the job as of now
  * totalBytesToProcess `integer`: Number of bytes to be processed by the job in total.
  * totalItemsToProcess `integer`: Number of items to be processed by the job in total

### JobStages
* JobStages `object`: Job stages.
  * errorDetails `array`: Error details for the stage. This is optional
    * items [ErrorDetails](#errordetails)
  * jobStageDetails `object`: Job Stage Details
  * stageName `string`: Name of the job stage.
  * stageStatus **required** `string` (values: None, InProgress, Succeeded, WaitingForAction, Failed, Cancelled, Cancelling): Status of the job stage.

### Key
* Key `object`: Encryption Key.
  * encryptionChunkSizeInBytes **required** `integer`: The maximum byte size that can be encrypted by the key. For a key size larger than the size, break into chunks and encrypt each chunk, append each encrypted chunk with : to mark the end of the chunk.
  * keyExponent **required** `string`: Exponent of the encryption key.
  * keyModulus **required** `string`: Modulus of the encryption key.

### PublicKey
* PublicKey `object`: Public key
  * properties **required** [PublicKeyProperties](#publickeyproperties)
  * id `string`: Id of the object.
  * name `string`: Name of the object.
  * type `string`: Type of the object.

### PublicKeyList
* PublicKeyList `object`: PublicKey Collection
  * nextLink `string`: Link for the next set of public keys.
  * value `array`: List of public keys.
    * items [PublicKey](#publickey)

### PublicKeyProperties
* PublicKeyProperties `object`: PublicKey Properties
  * dataServiceLevel1Key **required** [Key](#key)
  * dataServiceLevel2Key **required** [Key](#key)

### Resource
* Resource `object`: Model of the Resource.
  * id `string`: The Resource Id.
  * location **required** `string`: The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East
  * name `string`: The Resource Name.
  * sku [Sku](#sku)
  * tags `object`: The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource
  * type `string`: The Resource type.

### RunParameters
* RunParameters `object`: Run parameters for a job.
  * customerSecrets `array`: List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
    * items [CustomerSecret](#customersecret)
  * dataServiceInput `object`: A generic json used differently by each data service type.
  * userConfirmation `string` (values: NotRequired, Required): Enum to detect if user confirmation is required. If not passed will default to NotRequired.

### Schedule
* Schedule `object`: Schedule for the job run.
  * name `string`: Name of the schedule.
  * policyList `array`: A list of repetition intervals in ISO 8601 format.
    * items `string`

### Sku
* Sku `object`: The sku type.
  * name `string`: The sku name. Required for data manager creation, optional for update.
  * tier `string`: The sku tier. This is based on the SKU name.


