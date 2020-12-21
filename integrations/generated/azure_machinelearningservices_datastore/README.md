# @datafire/azure_machinelearningservices_datastore

Client library for Azure Machine Learning Datastore Management Client

## Installation and Usage
```bash
npm install --save @datafire/azure_machinelearningservices_datastore
```
```js
let azure_machinelearningservices_datastore = require('@datafire/azure_machinelearningservices_datastore').create({
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

### DataStores_DeleteAll
Delete all Datastores in the workspace.


```js
azure_machinelearningservices_datastore.DataStores_DeleteAll({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.

#### Output
*Output schema unknown*

### DataStores_List
Get the list of Datastores attached to the workspace.


```js
azure_machinelearningservices_datastore.DataStores_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * dataStoreNames `array`: List of Datastore names.
  * continuationToken `string`: The Continuation Token.
  * count `integer`: Count of Datastores to be returned.
  * includeSecret `boolean`: Whether to include the datastore secret in the response.

#### Output
* output [PaginatedDataStoreList](#paginateddatastorelist)

### DataStores_Create
Create or update a Datastore in the given workspace.


```js
azure_machinelearningservices_datastore.DataStores_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * dto [DataStore](#datastore)
  * createIfNotExists `boolean`: If set to true, the call will create an Datastore if it doesn't exist.
  * skipValidation `boolean`: If set to true, the call will skip Datastore validation.

#### Output
*Output schema unknown*

### DataStores_Delete
Delete a Datastore with a specific name.


```js
azure_machinelearningservices_datastore.DataStores_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * name **required** `string`: The Datastore name.

#### Output
*Output schema unknown*

### DataStores_Get
Get details of a Datastore with a specific name.


```js
azure_machinelearningservices_datastore.DataStores_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * name **required** `string`: The Datastore name.

#### Output
* output [DataStore](#datastore)

### DataStores_Update
Update or create a Datastore in the given workspace.


```js
azure_machinelearningservices_datastore.DataStores_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * name **required** `string`: The Datastore name.
  * dto [DataStore](#datastore)
  * createIfNotExists `boolean`: If set to true, the call will create an Datastore if it doesn't exist.
  * skipValidation `boolean`: If set to true, the call will skip Datastore validation.

#### Output
*Output schema unknown*

### DataStores_GetDefault
Get the default Datastore in the workspace.


```js
azure_machinelearningservices_datastore.DataStores_GetDefault({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.

#### Output
* output [DataStore](#datastore)

### DataStores_SetDefault
Set a default Datastore in the workspace.


```js
azure_machinelearningservices_datastore.DataStores_SetDefault({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * name **required** `string`: The Datastore name.

#### Output
*Output schema unknown*



## Definitions

### AzureDataLake
* AzureDataLake `object`
  * authorityUrl `string`: The authority URL used for authentication
  * certificate `string`: The content of the certificate used for authentication
  * clientId `string`: The Client ID/Application ID
  * clientSecret `string`: The client secret
  * isCertAuth `boolean`: Is it using certificate to authenticate. If false then use client secret
  * resourceGroup `string`: Resource Group Name
  * resourceUri `string`: The resource the service principal/app has access to
  * storeName `string`: The Azure Data Lake store name
  * subscriptionId `string`: Subscription Id
  * tenantId `string`: The ID of the tenant the service principal/app belongs to
  * thumbprint `string`: The thumbprint of the certificate above

### AzurePostgreSql
* AzurePostgreSql `object`
  * databaseName `string`: The Azure PostgreSQL database name
  * endpoint `string`: The Azure PostgreSQL server host endpoint
  * portNumber `string`: The Azure PostgreSQL port number
  * resourceGroup `string`: Resource Group Name
  * serverName `string`: The Azure PostgreSQL server name
  * subscriptionId `string`: Subscription Id
  * userId `string`: The Azure PostgreSQL user id
  * userPassword `string`: The Azure PostgreSQL user password

### AzureSqlDatabase
* AzureSqlDatabase `object`
  * authorityUrl `string`: The authority URL used for authentication
  * certificate `string`: The content of the certificate used for authentication
  * clientId `string`: The Client ID/Application ID
  * clientSecret `string`: The client secret
  * databaseName `string`: The Azure SQL database name
  * endpoint `string`: The server host endpoint
  * isCertAuth `boolean`: Is it using certificate to authenticate. If false then use client secret
  * resourceGroup `string`: Resource Group Name
  * resourceUri `string`: The resource the service principal/app has access to
  * serverName `string`: The Azure SQL server name
  * subscriptionId `string`: Subscription Id
  * tenantId `string`: The ID of the tenant the service principal/app belongs to
  * thumbprint `string`: The thumbprint of the certificate above

### AzureStorage
* AzureStorage `object`
  * accountKey `string`: Storage Account Key (Deprecated)
  * accountName `string`: Storage Account Name
  * areWorkspaceManagedIdentitiesAllowed `boolean`: Indicate if we are using Workspace ManagedIdentities/MSI token
  * blobCacheTimeout `integer`: If this is an Microsoft.MachineLearning.DataStore.Contracts.DataStoreType.AzureBlob, the length of time (in seconds) to cache files locally after they are accessed (downloaded).
  * clientCredentials [ClientCredentials](#clientcredentials)
  * containerName `string`: The storage container name
  * credential `string`: The credential
  * credentialType `string` (values: None, Sas, AccountKey, ClientCredentials): The credential type
  * endpoint `string`: The host of the container
  * isSas `boolean`: Indicate if we are using SAS token or Account Key (Deprecated)
  * protocol `string`: The protocol to use. Defaults to https
  * resourceGroup `string`: Resource Group Name
  * sasToken `string`: SAS Token for the container (Deprecated)
  * subscriptionId `string`: Subscription Id

### ClientCredentials
* ClientCredentials `object`
  * authorityUrl `string`: The authority URL used for authentication
  * certificate `string`: The content of the certificate used for authentication
  * clientId `string`: The Client ID/Application ID
  * clientSecret `string`: The client secret
  * isCertAuth `boolean`: Is it using certificate to authenticate. If false then use client secret
  * resourceGroup `string`: Resource Group Name
  * resourceUri `string`: The resource the service principal/app has access to
  * subscriptionId `string`: Subscription Id
  * tenantId `string`: The ID of the tenant the service principal/app belongs to
  * thumbprint `string`: The thumbprint of the certificate above

### DataStore
* DataStore `object`
  * azureDataLakeSection [AzureDataLake](#azuredatalake)
  * azurePostgreSqlSection [AzurePostgreSql](#azurepostgresql)
  * azureSqlDatabaseSection [AzureSqlDatabase](#azuresqldatabase)
  * azureStorageSection [AzureStorage](#azurestorage)
  * dataStoreType `string` (values: AzureBlob, AzureFile, AzureDataLake, AzureSqlDatabase, AzurePostgreSql, DBFS, AzureDataLakeGen2, GlusterFs): The Azure storage service this datastore points to.
  * glusterFsSection [GlusterFs](#glusterfs)
  * hasBeenValidated `boolean`: A read only property that denotes whether the service datastore has been validated with credentials.
  * name `string`: Name of the datastore
  * tags `object`: Tags to datastore

### ErrorDetails
* ErrorDetails `object`: The error details.
  * code `string`: The error code.
  * message `string`: The error message.
  * target `string`: The target of the error (e.g., the name of the property in error).

### ErrorResponse
* ErrorResponse `object`: The error response.
  * correlation `object`: Dictionary containing correlation details for the error.
  * environment `string`: The hosting environment.
  * error [RootError](#rooterror)
  * location `string`: The Azure region.
  * time `string`: The time in UTC.

### GlusterFs
* GlusterFs `object`
  * serverAddress `string`: The server address of one of the servers that hosts the GlusterFS. Can be either the IP address
  * volumeName `string`: The name of the created GlusterFS volume.

### InnerErrorResponse
* InnerErrorResponse `object`: A nested structure of errors.
  * code `string`: The error code.
  * innerError [InnerErrorResponse](#innererrorresponse)

### PaginatedDataStoreList
* PaginatedDataStoreList `object`: A paginated list of DataStores.
  * continuationToken `string`: The token used in retrieving the next page.  If null, there are no additional pages.
  * nextLink `string`: The link to the next page constructed using the continuationToken.  If null, there are no additional pages.
  * value `array`: An array of objects of type DataStore.
    * items [DataStore](#datastore)

### RootError
* RootError `object`: The root error.
  * code `string`: The service-defined error code. Supported error codes: ServiceError, UserError, ValidationError, AzureStorageError, TransientError, RequestThrottled.
  * details `array`: The related errors that occurred during the request.
    * items [ErrorDetails](#errordetails)
  * innerError [InnerErrorResponse](#innererrorresponse)
  * message `string`: A human-readable representation of the error.
  * target `string`: The target of the error (e.g., the name of the property in error).


