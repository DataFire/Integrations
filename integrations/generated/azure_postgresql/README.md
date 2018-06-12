# @datafire/azure_postgresql

Client library for PostgreSQLManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_postgresql
```
```js
let azure_postgresql = require('@datafire/azure_postgresql').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_postgresql.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Microsoft Azure management API provides create, read, update, and delete functionality for Azure PostgreSQL resources including servers, databases, firewall rules, log files and configurations with new business model.

## Actions

### Operations_List
Lists all of the available REST API operations.


```js
azure_postgresql.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [OperationListResult](#operationlistresult)

### CheckNameAvailability_Execute
Check the availability of name for resource


```js
azure_postgresql.CheckNameAvailability_Execute({
  "api-version": "",
  "subscriptionId": "",
  "nameAvailabilityRequest": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * nameAvailabilityRequest **required** [NameAvailabilityRequest](#nameavailabilityrequest)

#### Output
* output [NameAvailability](#nameavailability)

### LocationBasedPerformanceTier_List
List all the performance tiers at specified location in a given subscription.


```js
azure_postgresql.LocationBasedPerformanceTier_List({
  "api-version": "",
  "subscriptionId": "",
  "locationName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * locationName **required** `string`: The name of the location.

#### Output
* output [PerformanceTierListResult](#performancetierlistresult)

### Servers_List
List all the servers in a given subscription.


```js
azure_postgresql.Servers_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.

#### Output
* output [ServerListResult](#serverlistresult)

### Servers_ListByResourceGroup
List all the servers in a given resource group.


```js
azure_postgresql.Servers_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [ServerListResult](#serverlistresult)

### Servers_Delete
Deletes a server.


```js
azure_postgresql.Servers_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.

#### Output
*Output schema unknown*

### Servers_Get
Gets information about a server.


```js
azure_postgresql.Servers_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.

#### Output
* output [Server](#server)

### Servers_Update
Updates an existing server. The request body can contain one to many of the properties present in the normal server definition.


```js
azure_postgresql.Servers_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * parameters **required** [ServerUpdateParameters](#serverupdateparameters)

#### Output
* output [Server](#server)

### Servers_Create
Creates a new server, or will overwrite an existing server.


```js
azure_postgresql.Servers_Create({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * parameters **required** [ServerForCreate](#serverforcreate)

#### Output
* output [Server](#server)

### Configurations_ListByServer
List all the configurations in a given server.


```js
azure_postgresql.Configurations_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.

#### Output
* output [ConfigurationListResult](#configurationlistresult)

### Configurations_Get
Gets information about a configuration of server.


```js
azure_postgresql.Configurations_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "configurationName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * configurationName **required** `string`: The name of the server configuration.

#### Output
* output [Configuration](#configuration)

### Configurations_CreateOrUpdate
Updates a configuration of a server.


```js
azure_postgresql.Configurations_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "configurationName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * configurationName **required** `string`: The name of the server configuration.
  * parameters **required** [Configuration](#configuration)

#### Output
* output [Configuration](#configuration)

### Databases_ListByServer
List all the databases in a given server.


```js
azure_postgresql.Databases_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.

#### Output
* output [DatabaseListResult](#databaselistresult)

### Databases_Delete
Deletes a database.


```js
azure_postgresql.Databases_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.

#### Output
*Output schema unknown*

### Databases_Get
Gets information about a database.


```js
azure_postgresql.Databases_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.

#### Output
* output [Database](#database)

### Databases_CreateOrUpdate
Creates a new database or updates an existing database.


```js
azure_postgresql.Databases_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * parameters **required** [Database](#database)

#### Output
* output [Database](#database)

### FirewallRules_ListByServer
List all the firewall rules in a given server.


```js
azure_postgresql.FirewallRules_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.

#### Output
* output [FirewallRuleListResult](#firewallrulelistresult)

### FirewallRules_Delete
Deletes a server firewall rule.


```js
azure_postgresql.FirewallRules_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "firewallRuleName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * firewallRuleName **required** `string`: The name of the server firewall rule.

#### Output
*Output schema unknown*

### FirewallRules_Get
Gets information about a server firewall rule.


```js
azure_postgresql.FirewallRules_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "firewallRuleName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * firewallRuleName **required** `string`: The name of the server firewall rule.

#### Output
* output [FirewallRule](#firewallrule)

### FirewallRules_CreateOrUpdate
Creates a new firewall rule or updates an existing firewall rule.


```js
azure_postgresql.FirewallRules_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "firewallRuleName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * firewallRuleName **required** `string`: The name of the server firewall rule.
  * parameters **required** [FirewallRule](#firewallrule)

#### Output
* output [FirewallRule](#firewallrule)

### LogFiles_ListByServer
List all the log files in a given server.


```js
azure_postgresql.LogFiles_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.

#### Output
* output [LogFileListResult](#logfilelistresult)



## Definitions

### Configuration
* Configuration `object`: Represents a Configuration.
  * properties [ConfigurationProperties](#configurationproperties)
  * id `string`: Resource ID
  * name `string`: Resource name.
  * type `string`: Resource type.

### ConfigurationListResult
* ConfigurationListResult `object`: A list of server configurations.
  * value `array`: The list of server configurations.
    * items [Configuration](#configuration)

### ConfigurationProperties
* ConfigurationProperties `object`: The properties of a configuration.
  * allowedValues `string`: Allowed values of the configuration.
  * dataType `string`: Data type of the configuration.
  * defaultValue `string`: Default value of the configuration.
  * description `string`: Description of the configuration.
  * source `string`: Source of the configuration.
  * value `string`: Value of the configuration.

### Database
* Database `object`: Represents a Database.
  * properties [DatabaseProperties](#databaseproperties)
  * id `string`: Resource ID
  * name `string`: Resource name.
  * type `string`: Resource type.

### DatabaseListResult
* DatabaseListResult `object`: A List of databases.
  * value `array`: The list of databases housed in a server
    * items [Database](#database)

### DatabaseProperties
* DatabaseProperties `object`: The properties of a database.
  * charset `string`: The charset of the database.
  * collation `string`: The collation of the database.

### FirewallRule
* FirewallRule `object`: Represents a server firewall rule.
  * properties **required** [FirewallRuleProperties](#firewallruleproperties)
  * id `string`: Resource ID
  * name `string`: Resource name.
  * type `string`: Resource type.

### FirewallRuleListResult
* FirewallRuleListResult `object`: A list of firewall rules.
  * value `array`: The list of firewall rules in a server.
    * items [FirewallRule](#firewallrule)

### FirewallRuleProperties
* FirewallRuleProperties `object`: The properties of a server firewall rule.
  * endIpAddress **required** `string`: The end IP address of the server firewall rule. Must be IPv4 format.
  * startIpAddress **required** `string`: The start IP address of the server firewall rule. Must be IPv4 format.

### LogFile
* LogFile `object`: Represents a log file.
  * name `string`: The name of the log file.
  * properties [LogFileProperties](#logfileproperties)
  * id `string`: Resource ID
  * name `string`: Resource name.
  * type `string`: Resource type.

### LogFileListResult
* LogFileListResult `object`: A list of log files.
  * value `array`: The list of log files.
    * items [LogFile](#logfile)

### LogFileProperties
* LogFileProperties `object`: The properties of a log file.
  * createdTime `string`: Creation timestamp of the log file.
  * lastModifiedTime `string`: Last modified timestamp of the log file.
  * name `string`: Log file name.
  * sizeInKB `integer`: Size of the log file.
  * type `string`: Type of the log file.
  * url `string`: The url to download the log file from.

### NameAvailability
* NameAvailability `object`: Represents a resource name availability.
  * message `string`: Error Message.
  * nameAvailable `boolean`: Indicates whether the resource name is available.
  * reason `string`: Reason for name being unavailable.

### NameAvailabilityRequest
* NameAvailabilityRequest `object`: Request from client to check resource name availability.
  * name **required** `string`: Resource name to verify.
  * type `string`: Resource type used for verification.

### Operation
* Operation `object`: REST API operation definition.
  * display [OperationDisplay](#operationdisplay)
  * name `string`: The name of the operation being performed on this particular object.
  * origin `string` (values: NotSpecified, user, system): The intended executor of the operation.
  * properties `object`: Additional descriptions for the operation.

### OperationDisplay
* OperationDisplay `object`: Display metadata associated with the operation.
  * description `string`: Operation description.
  * operation `string`: Localized friendly name for the operation.
  * provider `string`: Operation resource provider name.
  * resource `string`: Resource on which the operation is performed.

### OperationListResult
* OperationListResult `object`: A list of resource provider operations.
  * value `array`: The list of resource provider operations.
    * items [Operation](#operation)

### PerformanceTierListResult
* PerformanceTierListResult `object`: A list of performance tiers.
  * value `array`: The list of performance tiers
    * items [PerformanceTierProperties](#performancetierproperties)

### PerformanceTierProperties
* PerformanceTierProperties `object`: Performance tier properties
  * id `string`: ID of the performance tier.
  * maxBackupRetentionDays `integer`: Maximum Backup retention in days for the performance tier edition
  * maxStorageMB `integer`: Max storage allowed for a server.
  * minBackupRetentionDays `integer`: Minimum Backup retention in days for the performance tier edition
  * minStorageMB `integer`: Max storage allowed for a server.
  * serviceLevelObjectives `array`: Service level objectives associated with the performance tier
    * items [PerformanceTierServiceLevelObjectives](#performancetierservicelevelobjectives)

### PerformanceTierServiceLevelObjectives
* PerformanceTierServiceLevelObjectives `object`: Service level objectives for performance tier.
  * edition `string`: Edition of the performance tier.
  * hardwareGeneration `string`: Hardware generation associated with the service level objective
  * id `string`: ID for the service level objective.
  * vCore `integer`: vCore associated with the service level objective

### ProxyResource
* ProxyResource `object`: Resource properties.
  * id `string`: Resource ID
  * name `string`: Resource name.
  * type `string`: Resource type.

### Server
* Server `object`: Represents a server.
  * properties [ServerProperties](#serverproperties)
  * sku [Sku](#sku)
  * location **required** `string`: The location the resource resides in.
  * tags `object`: Application-specific metadata in the form of key-value pairs.
  * id `string`: Resource ID
  * name `string`: Resource name.
  * type `string`: Resource type.

### ServerForCreate
* ServerForCreate `object`: Represents a server to be created.
  * location **required** `string`: The location the resource resides in.
  * properties **required** [ServerPropertiesForCreate](#serverpropertiesforcreate)
  * sku [Sku](#sku)
  * tags `object`: Application-specific metadata in the form of key-value pairs.

### ServerListResult
* ServerListResult `object`: A list of servers.
  * value `array`: The list of servers
    * items [Server](#server)

### ServerProperties
* ServerProperties `object`: The properties of a server.
  * administratorLogin `string`: The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
  * earliestRestoreDate `string`: Earliest restore point creation time (ISO8601 format)
  * fullyQualifiedDomainName `string`: The fully qualified domain name of a server.
  * sslEnforcement [SslEnforcement](#sslenforcement)
  * storageProfile [StorageProfile](#storageprofile)
  * userVisibleState `string` (values: Ready, Dropping, Disabled): A state of a server that is visible to user.
  * version [ServerVersion](#serverversion)

### ServerPropertiesForCreate
* ServerPropertiesForCreate `object`: The properties used to create a new server.
  * createMode **required** `string` (values: Default, PointInTimeRestore): The mode to create a new server.
  * sslEnforcement [SslEnforcement](#sslenforcement)
  * storageProfile [StorageProfile](#storageprofile)
  * version [ServerVersion](#serverversion)

### ServerPropertiesForDefaultCreate
* ServerPropertiesForDefaultCreate `object`: The properties used to create a new server.
  * administratorLogin **required** `string`: The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
  * administratorLoginPassword **required** `string`: The password of the administrator login.
  * createMode **required** `string` (values: Default, PointInTimeRestore): The mode to create a new server.
  * sslEnforcement [SslEnforcement](#sslenforcement)
  * storageProfile [StorageProfile](#storageprofile)
  * version [ServerVersion](#serverversion)

### ServerPropertiesForRestore
* ServerPropertiesForRestore `object`: The properties to a new server by restoring from a backup.
  * restorePointInTime **required** `string`: Restore point creation time (ISO8601 format), specifying the time to restore from.
  * sourceServerId **required** `string`: The source server id to restore from.
  * createMode **required** `string` (values: Default, PointInTimeRestore): The mode to create a new server.
  * sslEnforcement [SslEnforcement](#sslenforcement)
  * storageProfile [StorageProfile](#storageprofile)
  * version [ServerVersion](#serverversion)

### ServerUpdateParameters
* ServerUpdateParameters `object`: Parameters allowd to update for a server.
  * properties `object`: The properties that can be updated for a server.
    * administratorLoginPassword `string`: The password of the administrator login.
    * sslEnforcement [SslEnforcement](#sslenforcement)
    * storageProfile [StorageProfile](#storageprofile)
    * version [ServerVersion](#serverversion)
  * sku [Sku](#sku)
  * tags `object`: Application-specific metadata in the form of key-value pairs.

### ServerVersion
* ServerVersion `string` (values: 9.5, 9.6): The version of a server.

### Sku
* Sku `object`: Billing information related properties of a server.
  * capacity `integer`: The scale up/out capacity, representing server's compute units.
  * family `string`: The family of hardware.
  * name `string`: The name of the sku, typically, tier + family + cores, e.g. B_Gen4_1, GP_Gen5_8.
  * size `string`: The size code, to be interpreted by resource as appropriate.
  * tier `string` (values: Basic, GeneralPurpose, MemoryOptimized): The tier of the particular SKU, e.g. Basic.

### SslEnforcement
* SslEnforcement `string` (values: Enabled, Disabled): Enable ssl enforcement or not when connect to server.

### StorageProfile
* StorageProfile `object`: Storage Profile properties of a server
  * backupRetentionDays `integer`: Backup retention days for the server.
  * geoRedundantBackup `string` (values: Enabled, Disabled): Enable Geo-redundant or not for server backup.
  * storageMB `integer`: Max storage allowed for a server.

### TrackedResource
* TrackedResource `object`: Resource properties including location and tags for track resources.
  * location **required** `string`: The location the resource resides in.
  * tags `object`: Application-specific metadata in the form of key-value pairs.
  * id `string`: Resource ID
  * name `string`: Resource name.
  * type `string`: Resource type.


