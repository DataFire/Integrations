# @datafire/azure_migrateprojects_migrate

Client library for Azure Migrate Hub

## Installation and Usage
```bash
npm install --save @datafire/azure_migrateprojects_migrate
```
```js
let azure_migrateprojects_migrate = require('@datafire/azure_migrateprojects_migrate').create({
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

Migrate your workloads to Azure.

## Actions

### Operations_List
Get a list of REST API supported by Microsoft.Migrate provider.


```js
azure_migrateprojects_migrate.Operations_List(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [OperationResultList](#operationresultlist)

### MigrateProjects_DeleteMigrateProject
Delete the migrate project. Deleting non-existent project is a no-operation.


```js
azure_migrateprojects_migrate.MigrateProjects_DeleteMigrateProject({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.

#### Output
*Output schema unknown*

### MigrateProjects_GetMigrateProject
Method to get a migrate project.


```js
azure_migrateprojects_migrate.MigrateProjects_GetMigrateProject({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.

#### Output
* output [MigrateProject](#migrateproject)

### MigrateProjects_PatchMigrateProject
Update a migrate project with specified name. Supports partial updates, for example only tags can be provided.


```js
azure_migrateprojects_migrate.MigrateProjects_PatchMigrateProject({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.
  * body **required** [MigrateProject](#migrateproject)
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.

#### Output
* output [MigrateProject](#migrateproject)

### MigrateProjects_PutMigrateProject
Method to create or update a migrate project.


```js
azure_migrateprojects_migrate.MigrateProjects_PutMigrateProject({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.
  * body **required** [MigrateProject](#migrateproject)
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.

#### Output
* output [MigrateProject](#migrateproject)

### DatabaseInstances_EnumerateDatabaseInstances
Gets a list of database instances in the migrate project.


```js
azure_migrateprojects_migrate.DatabaseInstances_EnumerateDatabaseInstances({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.
  * continuationToken `string`: The continuation token.
  * pageSize `integer`: The number of items to be returned in a single page. This value is honored only if it is less than the 100.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.

#### Output
* output [DatabaseInstanceCollection](#databaseinstancecollection)

### DatabaseInstances_GetDatabaseInstance
Gets a database instance in the migrate project.


```js
azure_migrateprojects_migrate.DatabaseInstances_GetDatabaseInstance({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "databaseInstanceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * databaseInstanceName **required** `string`: Unique name of a database instance in Azure migration hub.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.

#### Output
* output [DatabaseInstance](#databaseinstance)

### Databases_EnumerateDatabases
Gets a list of databases in the migrate project.


```js
azure_migrateprojects_migrate.Databases_EnumerateDatabases({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.
  * continuationToken `string`: The continuation token.
  * pageSize `integer`: The number of items to be returned in a single page. This value is honored only if it is less than the 100.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.

#### Output
* output [DatabaseCollection](#databasecollection)

### Databases_GetDatabase
Gets a database in the migrate project.


```js
azure_migrateprojects_migrate.Databases_GetDatabase({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * databaseName **required** `string`: Unique name of a database in Azure migration hub.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.

#### Output
* output [Database](#database)

### Machines_EnumerateMachines
Gets a list of machines in the migrate project.


```js
azure_migrateprojects_migrate.Machines_EnumerateMachines({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.
  * continuationToken `string`: The continuation token.
  * pageSize `integer`: The number of items to be returned in a single page. This value is honored only if it is less than the 100.

#### Output
* output [MachineCollection](#machinecollection)

### Machines_GetMachine
Gets a machine in the migrate project.


```js
azure_migrateprojects_migrate.Machines_GetMachine({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "api-version": "",
  "machineName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.
  * machineName **required** `string`: Unique name of a machine in Azure migration hub.

#### Output
* output [Machine](#machine)

### Events_EnumerateEvents
Gets a list of events in the migrate project.


```js
azure_migrateprojects_migrate.Events_EnumerateEvents({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.
  * continuationToken `string`: The continuation token.
  * pageSize `integer`: The number of items to be returned in a single page. This value is honored only if it is less than the 100.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.

#### Output
* output [EventCollection](#eventcollection)

### Events_DeleteEvent
Delete the migrate event. Deleting non-existent migrate event is a no-operation.


```js
azure_migrateprojects_migrate.Events_DeleteEvent({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "api-version": "",
  "eventName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.
  * eventName **required** `string`: Unique name of an event within a migrate project.

#### Output
*Output schema unknown*

### Events_GetEvent
Gets an event in the migrate project.


```js
azure_migrateprojects_migrate.Events_GetEvent({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "api-version": "",
  "eventName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.
  * eventName **required** `string`: Unique name of an event within a migrate project.

#### Output
* output [MigrateEvent](#migrateevent)

### MigrateProjects_RefreshMigrateProjectSummary
Refresh the summary of the migrate project.


```js
azure_migrateprojects_migrate.MigrateProjects_RefreshMigrateProjectSummary({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "api-version": "",
  "input": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.
  * input **required** [RefreshSummaryInput](#refreshsummaryinput)

#### Output
* output [RefreshSummaryResult](#refreshsummaryresult)

### MigrateProjects_RegisterTool
Registers a tool with the migrate project.


```js
azure_migrateprojects_migrate.MigrateProjects_RegisterTool({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "api-version": "",
  "input": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.
  * input **required** [RegisterToolInput](#registertoolinput)
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.

#### Output
* output [RegistrationResult](#registrationresult)

### Solutions_EnumerateSolutions
Gets the list of solutions in the migrate project.


```js
azure_migrateprojects_migrate.Solutions_EnumerateSolutions({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.

#### Output
* output [SolutionsCollection](#solutionscollection)

### Solutions_DeleteSolution
Delete the solution. Deleting non-existent project is a no-operation.


```js
azure_migrateprojects_migrate.Solutions_DeleteSolution({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "solutionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * solutionName **required** `string`: Unique name of a migration solution within a migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.

#### Output
*Output schema unknown*

### Solutions_GetSolution
Gets a solution in the migrate project.


```js
azure_migrateprojects_migrate.Solutions_GetSolution({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "solutionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * solutionName **required** `string`: Unique name of a migration solution within a migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.

#### Output
* output [Solution](#solution)

### Solutions_PatchSolution
Update a solution with specified name. Supports partial updates, for example only tags can be provided.


```js
azure_migrateprojects_migrate.Solutions_PatchSolution({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "solutionName": "",
  "solutionInput": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * solutionName **required** `string`: Unique name of a migration solution within a migrate project.
  * solutionInput **required** [Solution](#solution)
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.

#### Output
* output [Solution](#solution)

### Solutions_PutSolution
Creates a solution in the migrate project.


```js
azure_migrateprojects_migrate.Solutions_PutSolution({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "solutionName": "",
  "solutionInput": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * solutionName **required** `string`: Unique name of a migration solution within a migrate project.
  * solutionInput **required** [Solution](#solution)
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.

#### Output
* output [Solution](#solution)

### Solutions_CleanupSolutionData
Cleanup the solution data in the migrate project.


```js
azure_migrateprojects_migrate.Solutions_CleanupSolutionData({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "solutionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * solutionName **required** `string`: Unique name of a migration solution within a migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.

#### Output
*Output schema unknown*

### Solutions_GetConfig
Gets the config for the solution in the migrate project.


```js
azure_migrateprojects_migrate.Solutions_GetConfig({
  "subscriptionId": "",
  "resourceGroupName": "",
  "migrateProjectName": "",
  "solutionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which migrate project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that migrate project is part of.
  * migrateProjectName **required** `string`: Name of the Azure Migrate project.
  * solutionName **required** `string`: Unique name of a migration solution within a migrate project.
  * api-version **required** `string` (values: 2018-09-01-preview): Standard request header. Used by service to identify API version used by client.

#### Output
* output [SolutionConfig](#solutionconfig)



## Definitions

### ApplyClause
* ApplyClause `object`
  * transformations `array`
    * items [TransformationNode](#transformationnode)

### AssessmentDetails
* AssessmentDetails `object`: Assessment properties that can be shared by various publishers.
  * assessmentId `string`: Gets or sets the id of the assessment done on the machine.
  * biosId `string`: Gets or sets the BIOS ID of the machine.
  * enqueueTime `string`: Gets or sets the time the message was enqueued.
  * extendedInfo `object`: Gets or sets the ISV specific extended information.
  * fabricType `string`: Gets or sets the fabric type.
  * fqdn `string`: Gets or sets the FQDN of the machine.
  * ipAddresses `array`: Gets or sets the list of IP addresses of the machine. IP addresses could be IP V4 or IP V6.
    * items `string`
  * lastUpdatedTime `string`: Gets or sets the time of the last modification of the machine details.
  * macAddresses `array`: Gets or sets the list of MAC addresses of the machine.
    * items `string`
  * machineId `string`: Gets or sets the unique identifier of the machine.
  * machineManagerId `string`: Gets or sets the unique identifier of the virtual machine manager(vCenter/VMM).
  * machineName `string`: Gets or sets the name of the machine.
  * solutionName `string`: Gets or sets the name of the solution that sent the data.
  * targetStorageType `object`: Gets or sets the target storage type.
  * targetVMLocation `string`: Gets or sets the target VM location.
  * targetVMSize `string`: Gets or sets the target VM size.

### Database
* Database `object`: Database REST resource.
  * id `string`: Gets or sets the relative URL to get to this REST resource.
  * name `string`: Gets or sets the name of this REST resource.
  * properties [DatabaseProperties](#databaseproperties)
  * type `string`: Gets the type of this REST resource.

### DatabaseAssessmentDetails
* DatabaseAssessmentDetails `object`: Assessment properties that can be shared by various publishers.
  * assessmentId `string`: Gets or sets the database assessment scope/Id.
  * assessmentTargetType `string`: Gets or sets the assessed target database type.
  * breakingChangesCount `integer`: Gets or sets the number of breaking changes found.
  * compatibilityLevel `string`: Gets or sets the compatibility level of the database.
  * databaseName `string`: Gets or sets the database name.
  * databaseSizeInMB `string`: Gets or sets the database size.
  * enqueueTime `string`: Gets or sets the time the message was enqueued.
  * extendedInfo `object`: Gets or sets the extended properties of the database.
  * instanceId `string`: Gets or sets the database server instance Id.
  * isReadyForMigration `boolean`: Gets or sets a value indicating whether the database is ready for migration.
  * lastAssessedTime `string`: Gets or sets the time when the database was last assessed.
  * lastUpdatedTime `string`: Gets or sets the time of the last modification of the database details.
  * migrationBlockersCount `integer`: Gets or sets the number of blocking changes found.
  * solutionName `string`: Gets or sets the name of the solution that sent the data.

### DatabaseCollection
* DatabaseCollection `object`: Collection of databases.
  * nextLink `string`: Gets or sets the value of nextLink.
  * value `array`: Gets or sets the databases.
    * items [Database](#database)

### DatabaseInstance
* DatabaseInstance `object`: DatabaseInstance REST resource.
  * id `string`: Gets or sets the relative URL to get to this REST resource.
  * name `string`: Gets or sets the name of this REST resource.
  * properties [DatabaseInstanceProperties](#databaseinstanceproperties)
  * type `string`: Gets the type of this REST resource.

### DatabaseInstanceCollection
* DatabaseInstanceCollection `object`: Collection of database instances.
  * nextLink `string`: Gets or sets the value of nextLink.
  * value `array`: Gets or sets the database instances.
    * items [DatabaseInstance](#databaseinstance)

### DatabaseInstanceDiscoveryDetails
* DatabaseInstanceDiscoveryDetails `object`: Discovery properties that can be shared by various publishers.
  * enqueueTime `string`: Gets or sets the time the message was enqueued.
  * extendedInfo `object`: Gets or sets the extended properties of the database server.
  * hostName `string`: Gets or sets the host name of the database server.
  * instanceId `string`: Gets or sets the database instance Id.
  * instanceName `string`: Gets or sets the database instance name.
  * instanceType `string`: Gets or sets the database instance type.
  * instanceVersion `string`: Gets or sets the database instance version.
  * ipAddress `string`: Gets or sets the IP addresses of the database server. IP addresses could be IP V4 or IP V6.
  * lastUpdatedTime `string`: Gets or sets the time of the last modification of the database instance details.
  * portNumber `integer`: Gets or sets the port number of the database server.
  * solutionName `string`: Gets or sets the name of the solution that sent the data.

### DatabaseInstanceProperties
* DatabaseInstanceProperties `object`: Properties of the database instance resource.
  * discoveryData `array`: Gets or sets the assessment details of the database instance published by various sources.
    * items [DatabaseInstanceDiscoveryDetails](#databaseinstancediscoverydetails)
  * lastUpdatedTime `string`: Gets or sets the time of the last modification of the database.
  * summary `object`: Gets or sets the database instances summary per solution. The key of dictionary is the solution name and value is the corresponding database instance summary object.

### DatabaseInstanceSummary
* DatabaseInstanceSummary `object`: Class representing the database instance summary object.
  * databasesAssessedCount `integer`: Gets or sets the count of databases assessed.
  * migrationReadyCount `integer`: Gets or sets the count of databases ready for migration.

### DatabaseMigrateEventProperties
* DatabaseMigrateEventProperties `object`: Properties of the database error resource.
  * database `string`: Gets or sets the database for which the error is being reported.
  * databaseInstanceId `string`: Gets or sets the database instance for which the error is being reported.
  * clientRequestId `string`: Gets or sets the client request Id of the payload for which the event is being reported.
  * errorCode `string`: Gets or sets the error code.
  * errorMessage `string`: Gets or sets the error message.
  * instanceType `string`: Gets the Instance type.
  * possibleCauses `string`: Gets or sets the possible causes for the error.
  * recommendation `string`: Gets or sets the recommendation for the error.
  * solution `string`: Gets or sets the solution for which the error is being reported.

### DatabaseProjectSummary
* DatabaseProjectSummary `object`: The database project summary class.
  * extendedSummary `object`: Gets or sets the extended summary.
  * instanceType `string`: Gets the Instance type.
  * lastSummaryRefreshedTime `string`: Gets or sets the time when summary was last refreshed.
  * refreshSummaryState `string` (values: Started, InProgress, Completed, Failed): Gets or sets the state of refresh summary.

### DatabaseProperties
* DatabaseProperties `object`: Properties of the database resource.
  * assessmentData `array`: Gets or sets the assessment details of the database published by various sources.
    * items [DatabaseAssessmentDetails](#databaseassessmentdetails)
  * lastUpdatedTime `string`: Gets or sets the time of the last modification of the database.

### DatabasesSolutionSummary
* DatabasesSolutionSummary `object`: Class representing the databases solution summary.
  * databaseInstancesAssessedCount `integer`: Gets or sets the count of database instances assessed.
  * databasesAssessedCount `integer`: Gets or sets the count of databases assessed.
  * migrationReadyCount `integer`: Gets or sets the count of databases ready for migration.
  * instanceType `string`: Gets the Instance type.

### DefaultQuerySettings
* DefaultQuerySettings `object`
  * enableCount `boolean`
  * enableExpand `boolean`
  * enableFilter `boolean`
  * enableOrderBy `boolean`
  * enableSelect `boolean`
  * maxTop `integer`

### DiscoveryDetails
* DiscoveryDetails `object`: Discovery properties that can be published by various ISVs.
  * biosId `string`: Gets or sets the BIOS ID of the machine.
  * enqueueTime `string`: Gets or sets the time the message was enqueued.
  * extendedInfo `object`: Gets or sets the ISV specific extended information.
  * fabricType `string`: Gets or sets the fabric type.
  * fqdn `string`: Gets or sets the FQDN of the machine.
  * ipAddresses `array`: Gets or sets the list of IP addresses of the machine. IP addresses could be IP V4 or IP V6.
    * items `string`
  * lastUpdatedTime `string`: Gets or sets the time of the last modification of the machine details.
  * macAddresses `array`: Gets or sets the list of MAC addresses of the machine.
    * items `string`
  * machineId `string`: Gets or sets the unique identifier of the machine.
  * machineManagerId `string`: Gets or sets the unique identifier of the virtual machine manager(vCenter/VMM).
  * machineName `string`: Gets or sets the name of the machine.
  * osName `string`: Gets or sets the OS name.
  * osType `string`: Gets or sets the OS type.
  * osVersion `string`: Gets or sets the OS version.
  * solutionName `string`: Gets or sets the name of the solution that sent the data.

### EdmReferentialConstraintPropertyPair
* EdmReferentialConstraintPropertyPair `object`
  * dependentProperty [IEdmStructuralProperty](#iedmstructuralproperty)
  * principalProperty [IEdmStructuralProperty](#iedmstructuralproperty)

### EventCollection
* EventCollection `object`: Collection of events.
  * nextLink `string`: Gets or sets the value of nextLink.
  * value `array`: Gets or sets the machines.
    * items [MigrateEvent](#migrateevent)

### FilterClause
* FilterClause `object`
  * expression [SingleValueNode](#singlevaluenode)
  * itemType [IEdmTypeReference](#iedmtypereference)
  * rangeVariable [RangeVariable](#rangevariable)

### FilterQueryOption
* FilterQueryOption `object`
  * context [ODataQueryContext](#odataquerycontext)
  * filterClause [FilterClause](#filterclause)
  * rawValue `string`
  * validator [FilterQueryValidator](#filterqueryvalidator)

### FilterQueryValidator
* FilterQueryValidator `object`

### IEdmDirectValueAnnotationsManager
* IEdmDirectValueAnnotationsManager `object`

### IEdmEntityContainer
* IEdmEntityContainer `object`
  * elements `array`
    * items [IEdmEntityContainerElement](#iedmentitycontainerelement)
  * name `string`
  * namespace `string`
  * schemaElementKind `string` (values: None, TypeDefinition, Term, Action, EntityContainer, Function)

### IEdmEntityContainerElement
* IEdmEntityContainerElement `object`
  * container [IEdmEntityContainer](#iedmentitycontainer)
  * containerElementKind `string` (values: None, EntitySet, ActionImport, FunctionImport, Singleton)
  * name `string`

### IEdmExpression
* IEdmExpression `object`
  * expressionKind `string` (values: None, BinaryConstant, BooleanConstant, DateTimeOffsetConstant, DecimalConstant, FloatingConstant, GuidConstant, IntegerConstant, StringConstant, DurationConstant, Null, Record, Collection, Path, If, Cast, IsType, FunctionApplication, LabeledExpressionReference, Labeled, PropertyPath, NavigationPropertyPath, DateConstant, TimeOfDayConstant, EnumMember, AnnotationPath)

### IEdmModel
* IEdmModel `object`
  * declaredNamespaces `array`
    * items `string`
  * directValueAnnotationsManager [IEdmDirectValueAnnotationsManager](#iedmdirectvalueannotationsmanager)
  * entityContainer [IEdmEntityContainer](#iedmentitycontainer)
  * referencedModels `array`
    * items [IEdmModel](#iedmmodel)
  * schemaElements `array`
    * items [IEdmSchemaElement](#iedmschemaelement)
  * vocabularyAnnotations `array`
    * items [IEdmVocabularyAnnotation](#iedmvocabularyannotation)

### IEdmNavigationProperty
* IEdmNavigationProperty `object`
  * containsTarget `boolean`
  * declaringType [IEdmStructuredType](#iedmstructuredtype)
  * name `string`
  * onDelete `string` (values: None, Cascade)
  * partner [IEdmNavigationProperty](#iedmnavigationproperty)
  * propertyKind `string` (values: None, Structural, Navigation)
  * referentialConstraint [IEdmReferentialConstraint](#iedmreferentialconstraint)
  * type [IEdmTypeReference](#iedmtypereference)

### IEdmNavigationPropertyBinding
* IEdmNavigationPropertyBinding `object`
  * navigationProperty [IEdmNavigationProperty](#iedmnavigationproperty)
  * path [IEdmPathExpression](#iedmpathexpression)
  * target [IEdmNavigationSource](#iedmnavigationsource)

### IEdmNavigationSource
* IEdmNavigationSource `object`
  * name `string`
  * navigationPropertyBindings `array`
    * items [IEdmNavigationPropertyBinding](#iedmnavigationpropertybinding)
  * path [IEdmPathExpression](#iedmpathexpression)
  * type [IEdmType](#iedmtype)

### IEdmPathExpression
* IEdmPathExpression `object`
  * expressionKind `string` (values: None, BinaryConstant, BooleanConstant, DateTimeOffsetConstant, DecimalConstant, FloatingConstant, GuidConstant, IntegerConstant, StringConstant, DurationConstant, Null, Record, Collection, Path, If, Cast, IsType, FunctionApplication, LabeledExpressionReference, Labeled, PropertyPath, NavigationPropertyPath, DateConstant, TimeOfDayConstant, EnumMember, AnnotationPath)
  * path `string`
  * pathSegments `array`
    * items `string`

### IEdmProperty
* IEdmProperty `object`
  * declaringType [IEdmStructuredType](#iedmstructuredtype)
  * name `string`
  * propertyKind `string` (values: None, Structural, Navigation)
  * type [IEdmTypeReference](#iedmtypereference)

### IEdmReferentialConstraint
* IEdmReferentialConstraint `object`
  * propertyPairs `array`
    * items [EdmReferentialConstraintPropertyPair](#edmreferentialconstraintpropertypair)

### IEdmSchemaElement
* IEdmSchemaElement `object`
  * name `string`
  * namespace `string`
  * schemaElementKind `string` (values: None, TypeDefinition, Term, Action, EntityContainer, Function)

### IEdmStructuralProperty
* IEdmStructuralProperty `object`
  * declaringType [IEdmStructuredType](#iedmstructuredtype)
  * defaultValueString `string`
  * name `string`
  * propertyKind `string` (values: None, Structural, Navigation)
  * type [IEdmTypeReference](#iedmtypereference)

### IEdmStructuredType
* IEdmStructuredType `object`
  * baseType [IEdmStructuredType](#iedmstructuredtype)
  * declaredProperties `array`
    * items [IEdmProperty](#iedmproperty)
  * isAbstract `boolean`
  * isOpen `boolean`
  * typeKind `string` (values: None, Primitive, Entity, Complex, Collection, EntityReference, Enum, TypeDefinition, Untyped, Path)

### IEdmTerm
* IEdmTerm `object`
  * appliesTo `string`
  * defaultValue `string`
  * name `string`
  * namespace `string`
  * schemaElementKind `string` (values: None, TypeDefinition, Term, Action, EntityContainer, Function)
  * type [IEdmTypeReference](#iedmtypereference)

### IEdmType
* IEdmType `object`
  * typeKind `string` (values: None, Primitive, Entity, Complex, Collection, EntityReference, Enum, TypeDefinition, Untyped, Path)

### IEdmTypeReference
* IEdmTypeReference `object`
  * definition [IEdmType](#iedmtype)
  * isNullable `boolean`

### IEdmVocabularyAnnotatable
* IEdmVocabularyAnnotatable `object`

### IEdmVocabularyAnnotation
* IEdmVocabularyAnnotation `object`
  * qualifier `string`
  * target [IEdmVocabularyAnnotatable](#iedmvocabularyannotatable)
  * term [IEdmTerm](#iedmterm)
  * value [IEdmExpression](#iedmexpression)

### IServiceProvider
* IServiceProvider `object`

### Machine
* Machine `object`: Machine REST resource.
  * id `string`: Gets or sets the relative URL to get to this REST resource.
  * name `string`: Gets or sets the name of this REST resource.
  * properties [MachineProperties](#machineproperties)
  * type `string`: Gets the type of this REST resource.

### MachineCollection
* MachineCollection `object`: Collection of machines.
  * nextLink `string`: Gets or sets the value of nextLink.
  * value `array`: Gets or sets the machines.
    * items [Machine](#machine)

### MachineMigrateEventProperties
* MachineMigrateEventProperties `object`: Properties of the machine error resource.
  * machine `string`: Gets or sets the machine for which the error is being reported.
  * clientRequestId `string`: Gets or sets the client request Id of the payload for which the event is being reported.
  * errorCode `string`: Gets or sets the error code.
  * errorMessage `string`: Gets or sets the error message.
  * instanceType `string`: Gets the Instance type.
  * possibleCauses `string`: Gets or sets the possible causes for the error.
  * recommendation `string`: Gets or sets the recommendation for the error.
  * solution `string`: Gets or sets the solution for which the error is being reported.

### MachineProperties
* MachineProperties `object`: Properties of the machine resource.
  * assessmentData `array`: Gets or sets the assessment details of the machine published by various sources.
    * items [AssessmentDetails](#assessmentdetails)
  * discoveryData `array`: Gets or sets the discovery details of the machine published by various sources.
    * items [DiscoveryDetails](#discoverydetails)
  * lastUpdatedTime `string`: Gets or sets the time of the last modification of the machine.
  * migrationData `array`: Gets or sets the migration details of the machine published by various sources.
    * items [MigrationDetails](#migrationdetails)

### MigrateEvent
* MigrateEvent `object`: MigrateEvent REST resource.
  * id `string`: Gets or sets the relative URL to get to this REST resource.
  * name `string`: Gets or sets the name of this REST resource.
  * properties [MigrateEventProperties](#migrateeventproperties)
  * type `string`: Gets the type of this REST resource.

### MigrateEventProperties
* MigrateEventProperties `object`: Properties of the error resource.
  * clientRequestId `string`: Gets or sets the client request Id of the payload for which the event is being reported.
  * errorCode `string`: Gets or sets the error code.
  * errorMessage `string`: Gets or sets the error message.
  * instanceType `string`: Gets the Instance type.
  * possibleCauses `string`: Gets or sets the possible causes for the error.
  * recommendation `string`: Gets or sets the recommendation for the error.
  * solution `string`: Gets or sets the solution for which the error is being reported.

### MigrateProject
* MigrateProject `object`: Migrate Project REST Resource.
  * eTag `string`: Gets or sets the eTag for concurrency control.
  * id `string`: Gets the relative URL to get this migrate project.
  * location `string`: Gets or sets the Azure location in which migrate project is created.
  * name `string`: Gets the name of the migrate project.
  * properties [MigrateProjectProperties](#migrateprojectproperties)
  * tags `object`: Gets or sets the tags.
    * additionalProperties `string`
  * type `string`: Handled by resource provider. Type = Microsoft.Migrate/MigrateProject.

### MigrateProjectProperties
* MigrateProjectProperties `object`: Class for migrate project properties.
  * lastSummaryRefreshedTime `string`: Gets the last time the project summary was refreshed.
  * provisioningState `string` (values: Accepted, Creating, Deleting, Failed, Moving, Succeeded): Provisioning state of the migrate project.
  * refreshSummaryState `string` (values: Started, InProgress, Completed, Failed): Gets the refresh summary state.
  * registeredTools `array`: Gets or sets the list of tools registered with the migrate project.
    * items `string` (values: ServerDiscovery, ServerAssessment, ServerMigration, Cloudamize, Turbonomic, Zerto, CorentTech, ServerAssessmentV1, ServerMigration_Replication, Carbonite, DataMigrationAssistant, DatabaseMigrationService)
  * summary `object`: Gets the summary of the migrate project.

### MigrationDetails
* MigrationDetails `object`: Migration properties that can be shared by various publishers.
  * biosId `string`: Gets or sets the BIOS ID of the machine.
  * enqueueTime `string`: Gets or sets the time the message was enqueued.
  * extendedInfo `object`: Gets or sets the ISV specific extended information.
  * fabricType `string`: Gets or sets the fabric type.
  * fqdn `string`: Gets or sets the FQDN of the machine.
  * ipAddresses `array`: Gets or sets the list of IP addresses of the machine. IP addresses could be IP V4 or IP V6.
    * items `string`
  * lastUpdatedTime `string`: Gets or sets the time of the last modification of the machine details.
  * macAddresses `array`: Gets or sets the list of MAC addresses of the machine.
    * items `string`
  * machineId `string`: Gets or sets the unique identifier of the machine.
  * machineManagerId `string`: Gets or sets the unique identifier of the virtual machine manager(vCenter/VMM).
  * machineName `string`: Gets or sets the name of the machine.
  * migrationPhase `string`: Gets or sets the phase of migration of the machine.
  * migrationTested `boolean`: Gets or sets a value indicating whether migration was tested on the machine.
  * replicationProgressPercentage `integer`: Gets or sets the progress percentage of migration on the machine.
  * solutionName `string`: Gets or sets the name of the solution that sent the data.
  * targetVMArmId `string`: Gets or sets the ARM id the migrated VM.

### ODataPath
* ODataPath `object`
  * edmType [IEdmType](#iedmtype)
  * navigationSource [IEdmNavigationSource](#iedmnavigationsource)
  * path `array`
    * items [ODataPathSegment](#odatapathsegment)
  * pathTemplate `string`
  * segments `array`
    * items [ODataPathSegment](#odatapathsegment)

### ODataPathSegment
* ODataPathSegment `object`
  * edmType [IEdmType](#iedmtype)
  * identifier `string`

### ODataQueryContext
* ODataQueryContext `object`
  * defaultQuerySettings [DefaultQuerySettings](#defaultquerysettings)
  * elementClrType `string`
  * elementType [IEdmType](#iedmtype)
  * model [IEdmModel](#iedmmodel)
  * navigationSource [IEdmNavigationSource](#iedmnavigationsource)
  * path [ODataPath](#odatapath)
  * requestContainer [IServiceProvider](#iserviceprovider)

### ODataQueryOptions`1
* ODataQueryOptions`1 `object`
  * filter [FilterQueryOption](#filterqueryoption)

### ODataQueryValidator
* ODataQueryValidator `object`

### ODataRawQueryOptions
* ODataRawQueryOptions `object`
  * filter `string`

### Object
* Object `object`

### Operation
* Operation `object`: A REST API operation supported by the provider.
  * display [OperationDisplay](#operationdisplay)
  * name `string`: Name of the operation.
  * origin `string`: Origin of the operation.

### OperationDisplay
* OperationDisplay `object`: Displayable properties of the operation.
  * description `string`: Description of the operation.
  * operation `string`: Operation Type.
  * provider `string`: Provider of the operation.
  * resource `string`: Resource operated on by the operation.

### OperationResultList
* OperationResultList `object`: List of API operations.
  * value `array`: List of operations.
    * items [Operation](#operation)

### ProjectSummary
* ProjectSummary `object`: The project summary class.
  * extendedSummary `object`: Gets or sets the extended summary.
  * instanceType `string`: Gets the Instance type.
  * lastSummaryRefreshedTime `string`: Gets or sets the time when summary was last refreshed.
  * refreshSummaryState `string` (values: Started, InProgress, Completed, Failed): Gets or sets the state of refresh summary.

### RangeVariable
* RangeVariable `object`
  * kind `integer`
  * name `string`
  * typeReference [IEdmTypeReference](#iedmtypereference)

### RefreshSummaryInput
* RefreshSummaryInput `object`: Class representing the refresh summary input.
  * goal `string` (values: Servers, Databases): Gets or sets the goal for which summary needs to be refreshed.

### RefreshSummaryResult
* RefreshSummaryResult `object`: Class representing the refresh summary status of the migrate project.
  * isRefreshed `boolean`: Gets or sets a value indicating whether the migrate project summary is refreshed.

### RegisterToolInput
* RegisterToolInput `object`: Class representing the register tool input.
  * tool `string` (values: ServerDiscovery, ServerAssessment, ServerMigration, Cloudamize, Turbonomic, Zerto, CorentTech, ServerAssessmentV1, ServerMigration_Replication, Carbonite, DataMigrationAssistant, DatabaseMigrationService): Gets or sets the tool to be registered.

### RegistrationResult
* RegistrationResult `object`: Class representing the registration status of a tool with the migrate project.
  * isRegistered `boolean`: Gets or sets a value indicating whether the tool is registered or not.

### SelectExpandClause
* SelectExpandClause `object`
  * allSelected `boolean`
  * selectedItems `array`
    * items [SelectItem](#selectitem)

### SelectExpandQueryValidator
* SelectExpandQueryValidator `object`

### SelectItem
* SelectItem `object`

### ServersProjectSummary
* ServersProjectSummary `object`: Class representing the servers project summary.
  * assessedCount `integer`: Gets or sets the count of entities assessed.
  * discoveredCount `integer`: Gets or sets the count of entities discovered.
  * migratedCount `integer`: Gets or sets the count of entities migrated.
  * replicatingCount `integer`: Gets or sets the count of entities being replicated.
  * testMigratedCount `integer`: Gets or sets the count of entities test migrated.
  * extendedSummary `object`: Gets or sets the extended summary.
  * instanceType `string`: Gets the Instance type.
  * lastSummaryRefreshedTime `string`: Gets or sets the time when summary was last refreshed.
  * refreshSummaryState `string` (values: Started, InProgress, Completed, Failed): Gets or sets the state of refresh summary.

### ServersSolutionSummary
* ServersSolutionSummary `object`: Class representing the servers solution summary.
  * assessedCount `integer`: Gets or sets the count of servers assessed.
  * discoveredCount `integer`: Gets or sets the count of servers discovered.
  * migratedCount `integer`: Gets or sets the count of servers migrated.
  * replicatingCount `integer`: Gets or sets the count of servers being replicated.
  * testMigratedCount `integer`: Gets or sets the count of servers test migrated.
  * instanceType `string`: Gets the Instance type.

### SingleValueNode
* SingleValueNode `object`
  * kind `string` (values: None, Constant, Convert, NonResourceRangeVariableReference, BinaryOperator, UnaryOperator, SingleValuePropertyAccess, CollectionPropertyAccess, SingleValueFunctionCall, Any, CollectionNavigationNode, SingleNavigationNode, SingleValueOpenPropertyAccess, SingleResourceCast, All, CollectionResourceCast, ResourceRangeVariableReference, SingleResourceFunctionCall, CollectionFunctionCall, CollectionResourceFunctionCall, NamedFunctionParameter, ParameterAlias, EntitySet, KeyLookup, SearchTerm, CollectionOpenPropertyAccess, CollectionComplexNode, SingleComplexNode, Count, SingleValueCast, CollectionPropertyNode, AggregatedCollectionPropertyNode, In, CollectionConstant)
  * typeReference [IEdmTypeReference](#iedmtypereference)

### Solution
* Solution `object`: Solution REST Resource.
  * etag `string`: Gets or sets the ETAG for optimistic concurrency control.
  * id `string`: Gets the relative URL to get to this REST resource.
  * name `string`: Gets the name of this REST resource.
  * properties [SolutionProperties](#solutionproperties)
  * type `string`: Gets the type of this REST resource.

### SolutionConfig
* SolutionConfig `object`: Class representing the config for the solution in the migrate project.
  * publisherSasUri `string`: Gets or sets the publisher sas uri for the solution.

### SolutionDetails
* SolutionDetails `object`: Class representing the details of the solution.
  * assessmentCount `integer`: Gets or sets the count of assessments reported by the solution.
  * extendedDetails `object`: Gets or sets the extended details reported by the solution.
  * groupCount `integer`: Gets or sets the count of groups reported by the solution.

### SolutionProperties
* SolutionProperties `object`: Class for solution properties.
  * cleanupState `string` (values: None, Started, InProgress, Completed, Failed): Gets or sets the cleanup state of the solution.
  * details [SolutionDetails](#solutiondetails)
  * goal `string` (values: Servers, Databases): Gets or sets the goal of the solution.
  * purpose `string` (values: Discovery, Assessment, Migration): Gets or sets the purpose of the solution.
  * status `string` (values: Inactive, Active): Gets or sets the current status of the solution.
  * summary [SolutionSummary](#solutionsummary)
  * tool `string` (values: ServerDiscovery, ServerAssessment, ServerMigration, Cloudamize, Turbonomic, Zerto, CorentTech, ServerAssessmentV1, ServerMigration_Replication, Carbonite, DataMigrationAssistant, DatabaseMigrationService): Gets or sets the tool being used in the solution.

### SolutionSummary
* SolutionSummary `object`: The solution summary class.
  * instanceType `string`: Gets the Instance type.

### SolutionsCollection
* SolutionsCollection `object`: Collection of solutions.
  * nextLink `string`: Gets or sets the value of next link.
  * value `array`: Gets or sets the list of solutions.
    * items [Solution](#solution)

### TransformationNode
* TransformationNode `object`
  * kind `string` (values: Aggregate, GroupBy, Filter, Compute)


