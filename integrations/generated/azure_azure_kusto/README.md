# @datafire/azure_azure_kusto

Client library for KustoManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azure_kusto
```
```js
let azure_azure_kusto = require('@datafire/azure_azure_kusto').create({
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
Lists available operations for the Microsoft.Kusto provider.


```js
azure_azure_kusto.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.

#### Output
* output [OperationListResult](#operationlistresult)

### Clusters_List
Lists all Kusto clusters within a subscription.


```js
azure_azure_kusto.Clusters_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ClusterListResult](#clusterlistresult)

### Clusters_CheckNameAvailability
Checks that the cluster name is valid and is not already in use.


```js
azure_azure_kusto.Clusters_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "location": "",
  "clusterName": {
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Azure location.
  * clusterName **required** [ClusterCheckNameRequest](#clusterchecknamerequest)

#### Output
* output [CheckNameResult](#checknameresult)

### Clusters_ListSkus
Lists eligible SKUs for Kusto resource provider.


```js
azure_azure_kusto.Clusters_ListSkus({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SkuDescriptionList](#skudescriptionlist)

### Clusters_ListByResourceGroup
Lists all Kusto clusters within a resource group.


```js
azure_azure_kusto.Clusters_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ClusterListResult](#clusterlistresult)

### Clusters_Delete
Deletes a Kusto cluster.


```js
azure_azure_kusto.Clusters_Delete({
  "resourceGroupName": "",
  "clusterName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Clusters_Get
Gets a Kusto cluster.


```js
azure_azure_kusto.Clusters_Get({
  "resourceGroupName": "",
  "clusterName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [Cluster](#cluster)

### Clusters_Update
Update a Kusto cluster.


```js
azure_azure_kusto.Clusters_Update({
  "resourceGroupName": "",
  "clusterName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * parameters **required** [ClusterUpdate](#clusterupdate)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [Cluster](#cluster)

### Clusters_CreateOrUpdate
Create or update a Kusto cluster.


```js
azure_azure_kusto.Clusters_CreateOrUpdate({
  "resourceGroupName": "",
  "clusterName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * parameters **required** [Cluster](#cluster)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [Cluster](#cluster)

### AttachedDatabaseConfigurations_ListByCluster
Returns the list of attached database configurations of the given Kusto cluster.


```js
azure_azure_kusto.AttachedDatabaseConfigurations_ListByCluster({
  "resourceGroupName": "",
  "clusterName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [AttachedDatabaseConfigurationListResult](#attacheddatabaseconfigurationlistresult)

### AttachedDatabaseConfigurations_Delete
Deletes the attached database configuration with the given name.


```js
azure_azure_kusto.AttachedDatabaseConfigurations_Delete({
  "resourceGroupName": "",
  "clusterName": "",
  "attachedDatabaseConfigurationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * attachedDatabaseConfigurationName **required** `string`: The name of the attached database configuration.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### AttachedDatabaseConfigurations_Get
Returns an attached database configuration.


```js
azure_azure_kusto.AttachedDatabaseConfigurations_Get({
  "resourceGroupName": "",
  "clusterName": "",
  "attachedDatabaseConfigurationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * attachedDatabaseConfigurationName **required** `string`: The name of the attached database configuration.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [AttachedDatabaseConfiguration](#attacheddatabaseconfiguration)

### AttachedDatabaseConfigurations_CreateOrUpdate
Creates or updates an attached database configuration.


```js
azure_azure_kusto.AttachedDatabaseConfigurations_CreateOrUpdate({
  "resourceGroupName": "",
  "clusterName": "",
  "attachedDatabaseConfigurationName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * attachedDatabaseConfigurationName **required** `string`: The name of the attached database configuration.
  * parameters **required** [AttachedDatabaseConfiguration](#attacheddatabaseconfiguration)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [AttachedDatabaseConfiguration](#attacheddatabaseconfiguration)

### Databases_CheckNameAvailability
Checks that the database name is valid and is not already in use.


```js
azure_azure_kusto.Databases_CheckNameAvailability({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": {
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceName **required** [CheckNameRequest](#checknamerequest)

#### Output
* output [CheckNameResult](#checknameresult)

### Databases_ListByCluster
Returns the list of databases of the given Kusto cluster.


```js
azure_azure_kusto.Databases_ListByCluster({
  "resourceGroupName": "",
  "clusterName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [DatabaseListResult](#databaselistresult)

### Databases_Delete
Deletes the database with the given name.


```js
azure_azure_kusto.Databases_Delete({
  "resourceGroupName": "",
  "clusterName": "",
  "databaseName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * databaseName **required** `string`: The name of the database in the Kusto cluster.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Databases_Get
Returns a database.


```js
azure_azure_kusto.Databases_Get({
  "resourceGroupName": "",
  "clusterName": "",
  "databaseName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * databaseName **required** `string`: The name of the database in the Kusto cluster.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [Database](#database)

### Databases_Update
Updates a database.


```js
azure_azure_kusto.Databases_Update({
  "resourceGroupName": "",
  "clusterName": "",
  "databaseName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * databaseName **required** `string`: The name of the database in the Kusto cluster.
  * parameters **required** [Database](#database)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [Database](#database)

### Databases_CreateOrUpdate
Creates or updates a database.


```js
azure_azure_kusto.Databases_CreateOrUpdate({
  "resourceGroupName": "",
  "clusterName": "",
  "databaseName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * databaseName **required** `string`: The name of the database in the Kusto cluster.
  * parameters **required** [Database](#database)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [Database](#database)

### Databases_AddPrincipals
Add Database principals permissions.


```js
azure_azure_kusto.Databases_AddPrincipals({
  "resourceGroupName": "",
  "clusterName": "",
  "databaseName": "",
  "subscriptionId": "",
  "api-version": "",
  "databasePrincipalsToAdd": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * databaseName **required** `string`: The name of the database in the Kusto cluster.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * databasePrincipalsToAdd **required** [DatabasePrincipalListRequest](#databaseprincipallistrequest)

#### Output
* output [DatabasePrincipalListResult](#databaseprincipallistresult)

### DataConnections_CheckNameAvailability
Checks that the data connection name is valid and is not already in use.


```js
azure_azure_kusto.DataConnections_CheckNameAvailability({
  "resourceGroupName": "",
  "clusterName": "",
  "databaseName": "",
  "api-version": "",
  "subscriptionId": "",
  "dataConnectionName": {
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * databaseName **required** `string`: The name of the database in the Kusto cluster.
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * dataConnectionName **required** [DataConnectionCheckNameRequest](#dataconnectionchecknamerequest)

#### Output
* output [CheckNameResult](#checknameresult)

### DataConnections_dataConnectionValidation
Checks that the data connection parameters are valid.


```js
azure_azure_kusto.DataConnections_dataConnectionValidation({
  "resourceGroupName": "",
  "clusterName": "",
  "databaseName": "",
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * databaseName **required** `string`: The name of the database in the Kusto cluster.
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * parameters **required** [DataConnectionValidation](#dataconnectionvalidation)

#### Output
* output [DataConnectionValidationListResult](#dataconnectionvalidationlistresult)

### DataConnections_ListByDatabase
Returns the list of data connections of the given Kusto database.


```js
azure_azure_kusto.DataConnections_ListByDatabase({
  "resourceGroupName": "",
  "clusterName": "",
  "databaseName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * databaseName **required** `string`: The name of the database in the Kusto cluster.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [DataConnectionListResult](#dataconnectionlistresult)

### DataConnections_Delete
Deletes the data connection with the given name.


```js
azure_azure_kusto.DataConnections_Delete({
  "resourceGroupName": "",
  "clusterName": "",
  "databaseName": "",
  "dataConnectionName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * databaseName **required** `string`: The name of the database in the Kusto cluster.
  * dataConnectionName **required** `string`: The name of the data connection.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### DataConnections_Get
Returns a data connection.


```js
azure_azure_kusto.DataConnections_Get({
  "resourceGroupName": "",
  "clusterName": "",
  "databaseName": "",
  "dataConnectionName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * databaseName **required** `string`: The name of the database in the Kusto cluster.
  * dataConnectionName **required** `string`: The name of the data connection.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [DataConnection](#dataconnection)

### DataConnections_Update
Updates a data connection.


```js
azure_azure_kusto.DataConnections_Update({
  "resourceGroupName": "",
  "clusterName": "",
  "databaseName": "",
  "dataConnectionName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * databaseName **required** `string`: The name of the database in the Kusto cluster.
  * dataConnectionName **required** `string`: The name of the data connection.
  * parameters **required** [DataConnection](#dataconnection)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [DataConnection](#dataconnection)

### DataConnections_CreateOrUpdate
Creates or updates a data connection.


```js
azure_azure_kusto.DataConnections_CreateOrUpdate({
  "resourceGroupName": "",
  "clusterName": "",
  "databaseName": "",
  "dataConnectionName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * databaseName **required** `string`: The name of the database in the Kusto cluster.
  * dataConnectionName **required** `string`: The name of the data connection.
  * parameters **required** [DataConnection](#dataconnection)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [DataConnection](#dataconnection)

### Databases_ListPrincipals
Returns a list of database principals of the given Kusto cluster and database.


```js
azure_azure_kusto.Databases_ListPrincipals({
  "resourceGroupName": "",
  "clusterName": "",
  "databaseName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * databaseName **required** `string`: The name of the database in the Kusto cluster.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [DatabasePrincipalListResult](#databaseprincipallistresult)

### Databases_RemovePrincipals
Remove Database principals permissions.


```js
azure_azure_kusto.Databases_RemovePrincipals({
  "resourceGroupName": "",
  "clusterName": "",
  "databaseName": "",
  "subscriptionId": "",
  "api-version": "",
  "databasePrincipalsToRemove": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * databaseName **required** `string`: The name of the database in the Kusto cluster.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * databasePrincipalsToRemove **required** [DatabasePrincipalListRequest](#databaseprincipallistrequest)

#### Output
* output [DatabasePrincipalListResult](#databaseprincipallistresult)

### Clusters_DetachFollowerDatabases
Detaches all followers of a database owned by this cluster.


```js
azure_azure_kusto.Clusters_DetachFollowerDatabases({
  "resourceGroupName": "",
  "clusterName": "",
  "subscriptionId": "",
  "api-version": "",
  "followerDatabaseToRemove": {
    "clusterResourceId": "",
    "attachedDatabaseConfigurationName": ""
  }
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * followerDatabaseToRemove **required** [FollowerDatabaseDefinition](#followerdatabasedefinition)

#### Output
*Output schema unknown*

### Clusters_ListFollowerDatabases
Returns a list of databases that are owned by this cluster and were followed by another cluster.


```js
azure_azure_kusto.Clusters_ListFollowerDatabases({
  "resourceGroupName": "",
  "clusterName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [FollowerDatabaseListResult](#followerdatabaselistresult)

### Clusters_ListSkusByResource
Returns the SKUs available for the provided resource.


```js
azure_azure_kusto.Clusters_ListSkusByResource({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ListResourceSkusResult](#listresourceskusresult)

### Clusters_Start
Starts a Kusto cluster.


```js
azure_azure_kusto.Clusters_Start({
  "resourceGroupName": "",
  "clusterName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Clusters_Stop
Stops a Kusto cluster.


```js
azure_azure_kusto.Clusters_Stop({
  "resourceGroupName": "",
  "clusterName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Kusto cluster.
  * clusterName **required** `string`: The name of the Kusto cluster.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*



## Definitions

### AttachedDatabaseConfiguration
* AttachedDatabaseConfiguration `object`: Class representing an attached database configuration.
  * location `string`: Resource location.
  * properties [AttachedDatabaseConfigurationProperties](#attacheddatabaseconfigurationproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### AttachedDatabaseConfigurationListResult
* AttachedDatabaseConfigurationListResult `object`: The list attached database configurations operation response.
  * value `array`: The list of attached database configurations.
    * items [AttachedDatabaseConfiguration](#attacheddatabaseconfiguration)

### AttachedDatabaseConfigurationProperties
* AttachedDatabaseConfigurationProperties `object`: Class representing the an attached database configuration properties of kind specific.
  * attachedDatabaseNames `array`: The list of databases from the clusterResourceId which are currently attached to the cluster.
    * items `string`
  * clusterResourceId **required** `string`: The resource id of the cluster where the databases you would like to attach reside.
  * databaseName **required** `string`: The name of the database which you would like to attach, use * if you want to follow all current and future databases.
  * defaultPrincipalsModificationKind **required** `string` (values: Union, Replace, None): The default principals modification kind
  * provisioningState `string` (values: Running, Creating, Deleting, Succeeded, Failed, Moving): The provisioned state of the resource.

### AzureCapacity
* AzureCapacity `object`: Azure capacity definition.
  * default **required** `integer`: The default capacity that would be used.
  * maximum **required** `integer`: Maximum allowed capacity.
  * minimum **required** `integer`: Minimum allowed capacity.
  * scaleType **required** `string` (values: automatic, manual, none): Scale type.

### AzureResourceSku
* AzureResourceSku `object`: Azure resource SKU definition.
  * capacity [AzureCapacity](#azurecapacity)
  * resourceType `string`: Resource Namespace and Type.
  * sku [AzureSku](#azuresku)

### AzureSku
* AzureSku `object`: Azure SKU definition.
  * capacity `integer`: The number of instances of the cluster.
  * name **required** `string` (values: Standard_DS13_v2+1TB_PS, Standard_DS13_v2+2TB_PS, Standard_DS14_v2+3TB_PS, Standard_DS14_v2+4TB_PS, Standard_D13_v2, Standard_D14_v2, Standard_L8s, Standard_L16s, Standard_D11_v2, Standard_D12_v2, Standard_L4s, Dev(No SLA)_Standard_D11_v2): SKU name.
  * tier **required** `string` (values: Basic, Standard): SKU tier.

### CheckNameRequest
* CheckNameRequest `object`: The result returned from a database check name availability request.
  * name **required** `string`: Resource name.
  * type **required** `string` (values: Microsoft.Kusto/clusters/databases, Microsoft.Kusto/clusters/attachedDatabaseConfigurations): The type of resource, for instance Microsoft.Kusto/clusters/databases.

### CheckNameResult
* CheckNameResult `object`: The result returned from a check name availability request.
  * message `string`: Message indicating an unavailable name due to a conflict, or a description of the naming rules that are violated.
  * name `string`: The name that was checked.
  * nameAvailable `boolean`: Specifies a Boolean value that indicates if the name is available.
  * reason `string` (values: Invalid, AlreadyExists): Message providing the reason why the given name is invalid.

### CloudError
* CloudError `object`: An error response from Kusto.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: An error response from Kusto.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A message describing the error, intended to be suitable for displaying in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error.

### Cluster
* Cluster `object`: Class representing a Kusto cluster.
  * identity [Identity](#identity)
  * properties [ClusterProperties](#clusterproperties)
  * sku **required** [AzureSku](#azuresku)
  * zones [Zones](#zones)
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ClusterCheckNameRequest
* ClusterCheckNameRequest `object`: The result returned from a cluster check name availability request.
  * name **required** `string`: Cluster name.
  * type **required** `string` (values: Microsoft.Kusto/clusters): The type of resource, Microsoft.Kusto/clusters.

### ClusterListResult
* ClusterListResult `object`: The list Kusto clusters operation response.
  * value `array`: The list of Kusto clusters.
    * items [Cluster](#cluster)

### ClusterProperties
* ClusterProperties `object`: Class representing the Kusto cluster properties.
  * dataIngestionUri `string`: The cluster data ingestion URI.
  * enableDiskEncryption `boolean`: A boolean value that indicates if the cluster's disks are encrypted.
  * enableStreamingIngest `boolean`: A boolean value that indicates if the streaming ingest is enabled.
  * keyVaultProperties [KeyVaultProperties](#keyvaultproperties)
  * optimizedAutoscale [OptimizedAutoscale](#optimizedautoscale)
  * provisioningState `string` (values: Running, Creating, Deleting, Succeeded, Failed, Moving): The provisioned state of the resource.
  * state `string` (values: Creating, Unavailable, Running, Deleting, Deleted, Stopping, Stopped, Starting, Updating): The state of the resource.
  * trustedExternalTenants `array`: The cluster's external tenants.
    * items [TrustedExternalTenant](#trustedexternaltenant)
  * uri `string`: The cluster URI.
  * virtualNetworkConfiguration [VirtualNetworkConfiguration](#virtualnetworkconfiguration)

### ClusterUpdate
* ClusterUpdate `object`: Class representing an update to a Kusto cluster.
  * identity [Identity](#identity)
  * location `string`: Resource location.
  * properties [ClusterProperties](#clusterproperties)
  * sku [AzureSku](#azuresku)
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### DataConnection
* DataConnection `object`: Class representing an data connection.
  * kind **required** `string` (values: EventHub, EventGrid, IotHub): Kind of the endpoint for the data connection
  * location `string`: Resource location.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### DataConnectionCheckNameRequest
* DataConnectionCheckNameRequest `object`: The result returned from a data connections check name availability request.
  * name **required** `string`: Data Connection name.
  * type **required** `string` (values: Microsoft.Kusto/clusters/databases/dataConnections): The type of resource, Microsoft.Kusto/clusters/databases/dataConnections.

### DataConnectionListResult
* DataConnectionListResult `object`: The list Kusto data connections operation response.
  * value `array`: The list of Kusto data connections.
    * items [DataConnection](#dataconnection)

### DataConnectionValidation
* DataConnectionValidation `object`: Class representing an data connection validation.
  * dataConnectionName `string`: The name of the data connection.
  * properties [DataConnection](#dataconnection)

### DataConnectionValidationListResult
* DataConnectionValidationListResult `object`: The list Kusto data connection validation result.
  * value `array`: The list of Kusto data connection validation errors.
    * items [DataConnectionValidationResult](#dataconnectionvalidationresult)

### DataConnectionValidationResult
* DataConnectionValidationResult `object`: The result returned from a data connection validation request.
  * errorMessage `string`: A message which indicates a problem in data connection validation.

### DataFormat
* DataFormat `string` (values: MULTIJSON, JSON, CSV, TSV, SCSV, SOHSV, PSV, TXT, RAW, SINGLEJSON, AVRO, TSVE): The data format of the message. Optionally the data format can be added to each message.

### Database
* Database `object`: Class representing a Kusto database.
  * kind `string` (values: ReadWrite, ReadOnlyFollowing): Kind of the database
  * location `string`: Resource location.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### DatabaseListResult
* DatabaseListResult `object`: The list Kusto databases operation response.
  * value `array`: The list of Kusto databases.
    * items [Database](#database)

### DatabasePrincipal
* DatabasePrincipal `object`: A class representing database principal entity.
  * appId `string`: Application id - relevant only for application principal type.
  * email `string`: Database principal email if exists.
  * fqn `string`: Database principal fully qualified name.
  * name **required** `string`: Database principal name.
  * role **required** `string` (values: Admin, Ingestor, Monitor, User, UnrestrictedViewers, Viewer): Database principal role.
  * tenantName `string`: The tenant name of the principal
  * type **required** `string` (values: App, Group, User): Database principal type.

### DatabasePrincipalListRequest
* DatabasePrincipalListRequest `object`: The list Kusto database principals operation request.
  * value `array`: The list of Kusto database principals.
    * items [DatabasePrincipal](#databaseprincipal)

### DatabasePrincipalListResult
* DatabasePrincipalListResult `object`: The list Kusto database principals operation response.
  * value `array`: The list of Kusto database principals.
    * items [DatabasePrincipal](#databaseprincipal)

### DatabaseStatistics
* DatabaseStatistics `object`: A class that contains database statistics information.
  * size `number`: The database size - the total size of compressed data and index in bytes.

### EventGridConnectionProperties
* EventGridConnectionProperties `object`: Class representing the Kusto event grid connection properties.
  * consumerGroup **required** `string`: The event hub consumer group.
  * dataFormat **required** [DataFormat](#dataformat)
  * eventHubResourceId **required** `string`: The resource ID where the event grid is configured to send events.
  * mappingRuleName `string`: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
  * storageAccountResourceId **required** `string`: The resource ID of the storage account where the data resides.
  * tableName **required** `string`: The table where the data should be ingested. Optionally the table information can be added to each message.

### EventGridDataConnection
* EventGridDataConnection `object`: Class representing an Event Grid data connection.
  * properties [EventGridConnectionProperties](#eventgridconnectionproperties)
  * kind **required** `string` (values: EventHub, EventGrid, IotHub): Kind of the endpoint for the data connection
  * location `string`: Resource location.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### EventHubConnectionProperties
* EventHubConnectionProperties `object`: Class representing the Kusto event hub connection properties.
  * consumerGroup **required** `string`: The event hub consumer group.
  * dataFormat [DataFormat](#dataformat)
  * eventHubResourceId **required** `string`: The resource ID of the event hub to be used to create a data connection.
  * eventSystemProperties `array`: System properties of the event hub
    * items `string`
  * mappingRuleName `string`: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
  * tableName `string`: The table where the data should be ingested. Optionally the table information can be added to each message.

### EventHubDataConnection
* EventHubDataConnection `object`: Class representing an event hub data connection.
  * properties [EventHubConnectionProperties](#eventhubconnectionproperties)
  * kind **required** `string` (values: EventHub, EventGrid, IotHub): Kind of the endpoint for the data connection
  * location `string`: Resource location.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### FollowerDatabaseDefinition
* FollowerDatabaseDefinition `object`: A class representing follower database request.
  * attachedDatabaseConfigurationName **required** `string`: Resource name of the attached database configuration in the follower cluster.
  * clusterResourceId **required** `string`: Resource id of the cluster that follows a database owned by this cluster.
  * databaseName `string`: The database name owned by this cluster that was followed. * in case following all databases.

### FollowerDatabaseListResult
* FollowerDatabaseListResult `object`: The list Kusto database principals operation response.
  * value `array`: The list of follower database result.
    * items [FollowerDatabaseDefinition](#followerdatabasedefinition)

### Identity
* Identity `object`: Identity for the resource.
  * principalId `string`: The principal ID of resource identity.
  * tenantId `string`: The tenant ID of resource.
  * type **required** `string` (values: None, SystemAssigned): The identity type.
  * userAssignedIdentities `object`: The list of user identities associated with the Kusto cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

### IotHubConnectionProperties
* IotHubConnectionProperties `object`: Class representing the Kusto iot hub connection properties.
  * consumerGroup **required** `string`: The iot hub consumer group.
  * dataFormat [DataFormat](#dataformat)
  * eventSystemProperties `array`: System properties of the iot hub
    * items `string`
  * iotHubResourceId **required** `string`: The resource ID of the Iot hub to be used to create a data connection.
  * mappingRuleName `string`: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
  * sharedAccessPolicyName **required** `string`: The name of the share access policy name
  * tableName `string`: The table where the data should be ingested. Optionally the table information can be added to each message.

### IotHubDataConnection
* IotHubDataConnection `object`: Class representing an iot hub data connection.
  * properties [IotHubConnectionProperties](#iothubconnectionproperties)
  * kind **required** `string` (values: EventHub, EventGrid, IotHub): Kind of the endpoint for the data connection
  * location `string`: Resource location.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### KeyVaultProperties
* KeyVaultProperties `object`: Properties of the key vault.
  * keyName **required** `string`: The name of the key vault key.
  * keyVaultUri **required** `string`: The Uri of the key vault.
  * keyVersion **required** `string`: The version of the key vault key.

### ListResourceSkusResult
* ListResourceSkusResult `object`: List of available SKUs for a Kusto Cluster.
  * value `array`: The collection of available SKUs for an existing resource.
    * items [AzureResourceSku](#azureresourcesku)

### Operation
* A REST API operation `object`
  * display `object`
    * description `string`
    * operation `string`: For example: read, write, delete.
    * provider `string`
    * resource `string`
  * name `string`: This is of the format {provider}/{resource}/{operation}.
  * origin `string`
  * properties `object`

### OperationListResult
* Result of the request to list REST API operations. It contains a list of operations and a URL nextLink to get the next set of results. `object`
  * nextLink `string`
  * value `array`
    * items [Operation](#operation)

### OptimizedAutoscale
* OptimizedAutoscale `object`: A class that contains the optimized auto scale definition.
  * isEnabled **required** `boolean`: A boolean value that indicate if the optimized autoscale feature is enabled or not.
  * maximum **required** `integer`: Maximum allowed instances count.
  * minimum **required** `integer`: Minimum allowed instances count.
  * version **required** `integer`: The version of the template defined, for instance 1.

### ReadOnlyFollowingDatabase
* ReadOnlyFollowingDatabase `object`: Class representing a read only following database.
  * properties [ReadOnlyFollowingDatabaseProperties](#readonlyfollowingdatabaseproperties)
  * kind `string` (values: ReadWrite, ReadOnlyFollowing): Kind of the database
  * location `string`: Resource location.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ReadOnlyFollowingDatabaseProperties
* ReadOnlyFollowingDatabaseProperties `object`: Class representing the Kusto database properties.
  * attachedDatabaseConfigurationName `string`: The name of the attached database configuration cluster
  * hotCachePeriod `string`: The time the data should be kept in cache for fast queries in TimeSpan.
  * leaderClusterResourceId `string`: The name of the leader cluster
  * principalsModificationKind `string` (values: Union, Replace, None): The principals modification kind of the database
  * provisioningState `string` (values: Running, Creating, Deleting, Succeeded, Failed, Moving): The provisioned state of the resource.
  * softDeletePeriod `string`: The time the data should be kept before it stops being accessible to queries in TimeSpan.
  * statistics [DatabaseStatistics](#databasestatistics)

### ReadWriteDatabase
* ReadWriteDatabase `object`: Class representing a read write database.
  * properties [ReadWriteDatabaseProperties](#readwritedatabaseproperties)
  * kind `string` (values: ReadWrite, ReadOnlyFollowing): Kind of the database
  * location `string`: Resource location.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ReadWriteDatabaseProperties
* ReadWriteDatabaseProperties `object`: Class representing the Kusto database properties.
  * hotCachePeriod `string`: The time the data should be kept in cache for fast queries in TimeSpan.
  * provisioningState `string` (values: Running, Creating, Deleting, Succeeded, Failed, Moving): The provisioned state of the resource.
  * softDeletePeriod `string`: The time the data should be kept before it stops being accessible to queries in TimeSpan.
  * statistics [DatabaseStatistics](#databasestatistics)

### SkuDescription
* SkuDescription `object`: The Kusto SKU description of given resource type
  * locationInfo `array`: Locations and zones
    * items [SkuLocationInfoItem](#skulocationinfoitem)
  * locations `array`: The set of locations that the SKU is available
    * items `string`
  * name `string`: The name of the SKU
  * resourceType `string`: The resource type
  * restrictions `array`: The restrictions because of which SKU cannot be used
    * items `object`
  * tier `string`: The tier of the SKU

### SkuDescriptionList
* SkuDescriptionList `object`: The list of the EngagementFabric SKU descriptions
  * value `array`: SKU descriptions
    * items [SkuDescription](#skudescription)

### SkuLocationInfoItem
* SkuLocationInfoItem `object`: The locations and zones info for SKU.
  * location **required** `string`: The available location of the SKU.
  * zones `array`: The available zone of the SKU.
    * items `string`

### TrustedExternalTenant
* TrustedExternalTenant `object`: Represents a tenant ID that is trusted by the cluster.
  * value `string`: GUID representing an external tenant.

### VirtualNetworkConfiguration
* VirtualNetworkConfiguration `object`: A class that contains virtual network definition.
  * dataManagementPublicIpId **required** `string`: Data management's service public IP address resource id.
  * enginePublicIpId **required** `string`: Engine service's public IP address resource id.
  * subnetId **required** `string`: The subnet resource id.

### Zones
* Zones `array`: An array represents the availability zones of the cluster.
  * items `string`


