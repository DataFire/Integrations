# @datafire/amazonaws_glue

Client library for AWS Glue

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_glue
```
```js
let amazonaws_glue = require('@datafire/amazonaws_glue').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Glue</fullname> <p>Defines the public endpoint for the AWS Glue service.</p>

## Actions

### BatchCreatePartition



```js
amazonaws_glue.BatchCreatePartition({
  "DatabaseName": null,
  "TableName": null,
  "PartitionInputList": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionInputList **required**
    * items [PartitionInput](#partitioninput)
  * TableName **required**

#### Output
* output [BatchCreatePartitionResponse](#batchcreatepartitionresponse)

### BatchDeleteConnection



```js
amazonaws_glue.BatchDeleteConnection({
  "ConnectionNameList": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * ConnectionNameList **required**
    * items [NameString](#namestring)

#### Output
* output [BatchDeleteConnectionResponse](#batchdeleteconnectionresponse)

### BatchDeletePartition



```js
amazonaws_glue.BatchDeletePartition({
  "DatabaseName": null,
  "TableName": null,
  "PartitionsToDelete": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionsToDelete **required**
    * items [PartitionValueList](#partitionvaluelist)
  * TableName **required**

#### Output
* output [BatchDeletePartitionResponse](#batchdeletepartitionresponse)

### BatchDeleteTable



```js
amazonaws_glue.BatchDeleteTable({
  "DatabaseName": null,
  "TablesToDelete": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * TablesToDelete **required**
    * items [NameString](#namestring)

#### Output
* output [BatchDeleteTableResponse](#batchdeletetableresponse)

### BatchDeleteTableVersion



```js
amazonaws_glue.BatchDeleteTableVersion({
  "DatabaseName": null,
  "TableName": null,
  "VersionIds": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * TableName **required**
  * VersionIds **required**
    * items [VersionString](#versionstring)

#### Output
* output [BatchDeleteTableVersionResponse](#batchdeletetableversionresponse)

### BatchGetCrawlers



```js
amazonaws_glue.BatchGetCrawlers({
  "CrawlerNames": null
}, context)
```

#### Input
* input `object`
  * CrawlerNames **required**
    * items [NameString](#namestring)

#### Output
* output [BatchGetCrawlersResponse](#batchgetcrawlersresponse)

### BatchGetDevEndpoints



```js
amazonaws_glue.BatchGetDevEndpoints({
  "DevEndpointNames": null
}, context)
```

#### Input
* input `object`
  * DevEndpointNames **required**
    * items [GenericString](#genericstring)

#### Output
* output [BatchGetDevEndpointsResponse](#batchgetdevendpointsresponse)

### BatchGetJobs



```js
amazonaws_glue.BatchGetJobs({
  "JobNames": null
}, context)
```

#### Input
* input `object`
  * JobNames **required**
    * items [NameString](#namestring)

#### Output
* output [BatchGetJobsResponse](#batchgetjobsresponse)

### BatchGetPartition



```js
amazonaws_glue.BatchGetPartition({
  "DatabaseName": null,
  "TableName": null,
  "PartitionsToGet": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionsToGet **required**
    * items [PartitionValueList](#partitionvaluelist)
  * TableName **required**

#### Output
* output [BatchGetPartitionResponse](#batchgetpartitionresponse)

### BatchGetTriggers



```js
amazonaws_glue.BatchGetTriggers({
  "TriggerNames": null
}, context)
```

#### Input
* input `object`
  * TriggerNames **required**
    * items [NameString](#namestring)

#### Output
* output [BatchGetTriggersResponse](#batchgettriggersresponse)

### BatchGetWorkflows



```js
amazonaws_glue.BatchGetWorkflows({
  "Names": null
}, context)
```

#### Input
* input `object`
  * IncludeGraph
  * Names **required**
    * items [NameString](#namestring)

#### Output
* output [BatchGetWorkflowsResponse](#batchgetworkflowsresponse)

### BatchStopJobRun



```js
amazonaws_glue.BatchStopJobRun({
  "JobName": null,
  "JobRunIds": null
}, context)
```

#### Input
* input `object`
  * JobName **required**
  * JobRunIds **required**
    * items [IdString](#idstring)

#### Output
* output [BatchStopJobRunResponse](#batchstopjobrunresponse)

### BatchUpdatePartition



```js
amazonaws_glue.BatchUpdatePartition({
  "DatabaseName": null,
  "TableName": null,
  "Entries": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * Entries **required**
    * items [BatchUpdatePartitionRequestEntry](#batchupdatepartitionrequestentry)
  * TableName **required**

#### Output
* output [BatchUpdatePartitionResponse](#batchupdatepartitionresponse)

### CancelMLTaskRun



```js
amazonaws_glue.CancelMLTaskRun({
  "TransformId": null,
  "TaskRunId": null
}, context)
```

#### Input
* input `object`
  * TaskRunId **required**
  * TransformId **required**

#### Output
* output [CancelMLTaskRunResponse](#cancelmltaskrunresponse)

### CheckSchemaVersionValidity



```js
amazonaws_glue.CheckSchemaVersionValidity({
  "DataFormat": null,
  "SchemaDefinition": null
}, context)
```

#### Input
* input `object`
  * DataFormat **required**
  * SchemaDefinition **required**

#### Output
* output [CheckSchemaVersionValidityResponse](#checkschemaversionvalidityresponse)

### CreateClassifier



```js
amazonaws_glue.CreateClassifier({}, context)
```

#### Input
* input `object`
  * CsvClassifier
    * AllowSingleColumn
    * ContainsHeader
    * Delimiter
    * DisableValueTrimming
    * Header
      * items [NameString](#namestring)
    * Name **required**
    * QuoteSymbol
  * GrokClassifier
    * Classification **required**
    * CustomPatterns
    * GrokPattern **required**
    * Name **required**
  * JsonClassifier
    * JsonPath **required**
    * Name **required**
  * XMLClassifier
    * Classification **required**
    * Name **required**
    * RowTag

#### Output
* output [CreateClassifierResponse](#createclassifierresponse)

### CreateConnection



```js
amazonaws_glue.CreateConnection({
  "ConnectionInput": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * ConnectionInput **required**
    * ConnectionProperties **required**
    * ConnectionType **required**
    * Description
    * MatchCriteria
      * items [NameString](#namestring)
    * Name **required**
    * PhysicalConnectionRequirements
      * AvailabilityZone
      * SecurityGroupIdList
        * items [NameString](#namestring)
      * SubnetId

#### Output
* output [CreateConnectionResponse](#createconnectionresponse)

### CreateCrawler



```js
amazonaws_glue.CreateCrawler({
  "Name": null,
  "Role": null,
  "Targets": null
}, context)
```

#### Input
* input `object`
  * Classifiers
    * items [NameString](#namestring)
  * Configuration
  * CrawlerSecurityConfiguration
  * DatabaseName
  * Description
  * LineageConfiguration
    * CrawlerLineageSettings
  * Name **required**
  * RecrawlPolicy
    * RecrawlBehavior
  * Role **required**
  * Schedule
  * SchemaChangePolicy
    * DeleteBehavior
    * UpdateBehavior
  * TablePrefix
  * Tags
  * Targets **required**
    * CatalogTargets
      * items [CatalogTarget](#catalogtarget)
    * DynamoDBTargets
      * items [DynamoDBTarget](#dynamodbtarget)
    * JdbcTargets
      * items [JdbcTarget](#jdbctarget)
    * MongoDBTargets
      * items [MongoDBTarget](#mongodbtarget)
    * S3Targets
      * items [S3Target](#s3target)

#### Output
* output [CreateCrawlerResponse](#createcrawlerresponse)

### CreateDatabase



```js
amazonaws_glue.CreateDatabase({
  "DatabaseInput": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseInput **required**
    * CreateTableDefaultPermissions
      * items [PrincipalPermissions](#principalpermissions)
    * Description
    * LocationUri
    * Name **required**
    * Parameters
    * TargetDatabase
      * CatalogId
      * DatabaseName

#### Output
* output [CreateDatabaseResponse](#createdatabaseresponse)

### CreateDevEndpoint



```js
amazonaws_glue.CreateDevEndpoint({
  "EndpointName": null,
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * Arguments
  * EndpointName **required**
  * ExtraJarsS3Path
  * ExtraPythonLibsS3Path
  * GlueVersion
  * NumberOfNodes
  * NumberOfWorkers
  * PublicKey
  * PublicKeys
    * items [GenericString](#genericstring)
  * RoleArn **required**
  * SecurityConfiguration
  * SecurityGroupIds
    * items [GenericString](#genericstring)
  * SubnetId
  * Tags
  * WorkerType

#### Output
* output [CreateDevEndpointResponse](#createdevendpointresponse)

### CreateJob



```js
amazonaws_glue.CreateJob({
  "Name": null,
  "Role": null,
  "Command": null
}, context)
```

#### Input
* input `object`
  * AllocatedCapacity
  * Command **required**
    * Name
    * PythonVersion
    * ScriptLocation
  * Connections
    * Connections
      * items [GenericString](#genericstring)
  * DefaultArguments
  * Description
  * ExecutionProperty
    * MaxConcurrentRuns
  * GlueVersion
  * LogUri
  * MaxCapacity
  * MaxRetries
  * Name **required**
  * NonOverridableArguments
  * NotificationProperty
    * NotifyDelayAfter
  * NumberOfWorkers
  * Role **required**
  * SecurityConfiguration
  * Tags
  * Timeout
  * WorkerType

#### Output
* output [CreateJobResponse](#createjobresponse)

### CreateMLTransform



```js
amazonaws_glue.CreateMLTransform({
  "Name": null,
  "InputRecordTables": null,
  "Parameters": null,
  "Role": null
}, context)
```

#### Input
* input `object`
  * Description
  * GlueVersion
  * InputRecordTables **required**
    * items [GlueTable](#gluetable)
  * MaxCapacity
  * MaxRetries
  * Name **required**
  * NumberOfWorkers
  * Parameters **required**
    * FindMatchesParameters
      * AccuracyCostTradeoff
      * EnforceProvidedLabels
      * PrecisionRecallTradeoff
      * PrimaryKeyColumnName
    * TransformType **required**
  * Role **required**
  * Tags
  * Timeout
  * TransformEncryption
    * MlUserDataEncryption
      * KmsKeyId
      * MlUserDataEncryptionMode **required**
    * TaskRunSecurityConfigurationName
  * WorkerType

#### Output
* output [CreateMLTransformResponse](#createmltransformresponse)

### CreatePartition



```js
amazonaws_glue.CreatePartition({
  "DatabaseName": null,
  "TableName": null,
  "PartitionInput": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionInput **required**
    * LastAccessTime
    * LastAnalyzedTime
    * Parameters
    * StorageDescriptor
      * BucketColumns
        * items [NameString](#namestring)
      * Columns
        * items [Column](#column)
      * Compressed
      * InputFormat
      * Location
      * NumberOfBuckets
      * OutputFormat
      * Parameters
      * SchemaReference
        * SchemaId
          * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
          * SchemaArn [GlueResourceArn](#glueresourcearn)
          * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
        * SchemaVersionId
        * SchemaVersionNumber
      * SerdeInfo
        * Name
        * Parameters
        * SerializationLibrary
      * SkewedInfo
        * SkewedColumnNames
          * items [NameString](#namestring)
        * SkewedColumnValueLocationMaps
        * SkewedColumnValues
          * items [ColumnValuesString](#columnvaluesstring)
      * SortColumns
        * items [Order](#order)
      * StoredAsSubDirectories
    * Values
      * items [ValueString](#valuestring)
  * TableName **required**

#### Output
* output [CreatePartitionResponse](#createpartitionresponse)

### CreatePartitionIndex



```js
amazonaws_glue.CreatePartitionIndex({
  "DatabaseName": null,
  "TableName": null,
  "PartitionIndex": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionIndex **required**
    * IndexName **required**
    * Keys **required**
      * items [NameString](#namestring)
  * TableName **required**

#### Output
* output [CreatePartitionIndexResponse](#createpartitionindexresponse)

### CreateRegistry



```js
amazonaws_glue.CreateRegistry({
  "RegistryName": null
}, context)
```

#### Input
* input `object`
  * Description
  * RegistryName **required**
  * Tags

#### Output
* output [CreateRegistryResponse](#createregistryresponse)

### CreateSchema



```js
amazonaws_glue.CreateSchema({
  "SchemaName": null,
  "DataFormat": null
}, context)
```

#### Input
* input `object`
  * Compatibility
  * DataFormat **required**
  * Description
  * RegistryId
    * RegistryArn
    * RegistryName
  * SchemaDefinition
  * SchemaName **required**
  * Tags

#### Output
* output [CreateSchemaResponse](#createschemaresponse)

### CreateScript



```js
amazonaws_glue.CreateScript({}, context)
```

#### Input
* input `object`
  * DagEdges
    * items [CodeGenEdge](#codegenedge)
  * DagNodes
    * items [CodeGenNode](#codegennode)
  * Language

#### Output
* output [CreateScriptResponse](#createscriptresponse)

### CreateSecurityConfiguration



```js
amazonaws_glue.CreateSecurityConfiguration({
  "Name": null,
  "EncryptionConfiguration": null
}, context)
```

#### Input
* input `object`
  * EncryptionConfiguration **required**
    * CloudWatchEncryption
      * CloudWatchEncryptionMode
      * KmsKeyArn
    * JobBookmarksEncryption
      * JobBookmarksEncryptionMode
      * KmsKeyArn
    * S3Encryption
      * items [S3Encryption](#s3encryption)
  * Name **required**

#### Output
* output [CreateSecurityConfigurationResponse](#createsecurityconfigurationresponse)

### CreateTable



```js
amazonaws_glue.CreateTable({
  "DatabaseName": null,
  "TableInput": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionIndexes
    * items [PartitionIndex](#partitionindex)
  * TableInput **required**
    * Description
    * LastAccessTime
    * LastAnalyzedTime
    * Name **required**
    * Owner
    * Parameters
    * PartitionKeys
      * items [Column](#column)
    * Retention
    * StorageDescriptor
      * BucketColumns
        * items [NameString](#namestring)
      * Columns
        * items [Column](#column)
      * Compressed
      * InputFormat
      * Location
      * NumberOfBuckets
      * OutputFormat
      * Parameters
      * SchemaReference
        * SchemaId
          * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
          * SchemaArn [GlueResourceArn](#glueresourcearn)
          * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
        * SchemaVersionId
        * SchemaVersionNumber
      * SerdeInfo
        * Name
        * Parameters
        * SerializationLibrary
      * SkewedInfo
        * SkewedColumnNames
          * items [NameString](#namestring)
        * SkewedColumnValueLocationMaps
        * SkewedColumnValues
          * items [ColumnValuesString](#columnvaluesstring)
      * SortColumns
        * items [Order](#order)
      * StoredAsSubDirectories
    * TableType
    * TargetTable
      * CatalogId
      * DatabaseName
      * Name
    * ViewExpandedText
    * ViewOriginalText

#### Output
* output [CreateTableResponse](#createtableresponse)

### CreateTrigger



```js
amazonaws_glue.CreateTrigger({
  "Name": null,
  "Type": null,
  "Actions": null
}, context)
```

#### Input
* input `object`
  * Actions **required**
    * items [Action](#action)
  * Description
  * Name **required**
  * Predicate
    * Conditions
      * items [Condition](#condition)
    * Logical
  * Schedule
  * StartOnCreation
  * Tags
  * Type **required**
  * WorkflowName

#### Output
* output [CreateTriggerResponse](#createtriggerresponse)

### CreateUserDefinedFunction



```js
amazonaws_glue.CreateUserDefinedFunction({
  "DatabaseName": null,
  "FunctionInput": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * FunctionInput **required**
    * ClassName
    * FunctionName
    * OwnerName
    * OwnerType
    * ResourceUris
      * items [ResourceUri](#resourceuri)

#### Output
* output [CreateUserDefinedFunctionResponse](#createuserdefinedfunctionresponse)

### CreateWorkflow



```js
amazonaws_glue.CreateWorkflow({
  "Name": null
}, context)
```

#### Input
* input `object`
  * DefaultRunProperties
  * Description
  * MaxConcurrentRuns
  * Name **required**
  * Tags

#### Output
* output [CreateWorkflowResponse](#createworkflowresponse)

### DeleteClassifier



```js
amazonaws_glue.DeleteClassifier({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteClassifierResponse](#deleteclassifierresponse)

### DeleteColumnStatisticsForPartition



```js
amazonaws_glue.DeleteColumnStatisticsForPartition({
  "DatabaseName": null,
  "TableName": null,
  "PartitionValues": null,
  "ColumnName": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * ColumnName **required**
  * DatabaseName **required**
  * PartitionValues **required**
    * items [ValueString](#valuestring)
  * TableName **required**

#### Output
* output [DeleteColumnStatisticsForPartitionResponse](#deletecolumnstatisticsforpartitionresponse)

### DeleteColumnStatisticsForTable



```js
amazonaws_glue.DeleteColumnStatisticsForTable({
  "DatabaseName": null,
  "TableName": null,
  "ColumnName": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * ColumnName **required**
  * DatabaseName **required**
  * TableName **required**

#### Output
* output [DeleteColumnStatisticsForTableResponse](#deletecolumnstatisticsfortableresponse)

### DeleteConnection



```js
amazonaws_glue.DeleteConnection({
  "ConnectionName": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * ConnectionName **required**

#### Output
* output [DeleteConnectionResponse](#deleteconnectionresponse)

### DeleteCrawler



```js
amazonaws_glue.DeleteCrawler({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteCrawlerResponse](#deletecrawlerresponse)

### DeleteDatabase



```js
amazonaws_glue.DeleteDatabase({
  "Name": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * Name **required**

#### Output
* output [DeleteDatabaseResponse](#deletedatabaseresponse)

### DeleteDevEndpoint



```js
amazonaws_glue.DeleteDevEndpoint({
  "EndpointName": null
}, context)
```

#### Input
* input `object`
  * EndpointName **required**

#### Output
* output [DeleteDevEndpointResponse](#deletedevendpointresponse)

### DeleteJob



```js
amazonaws_glue.DeleteJob({
  "JobName": null
}, context)
```

#### Input
* input `object`
  * JobName **required**

#### Output
* output [DeleteJobResponse](#deletejobresponse)

### DeleteMLTransform



```js
amazonaws_glue.DeleteMLTransform({
  "TransformId": null
}, context)
```

#### Input
* input `object`
  * TransformId **required**

#### Output
* output [DeleteMLTransformResponse](#deletemltransformresponse)

### DeletePartition



```js
amazonaws_glue.DeletePartition({
  "DatabaseName": null,
  "TableName": null,
  "PartitionValues": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionValues **required**
    * items [ValueString](#valuestring)
  * TableName **required**

#### Output
* output [DeletePartitionResponse](#deletepartitionresponse)

### DeletePartitionIndex



```js
amazonaws_glue.DeletePartitionIndex({
  "DatabaseName": null,
  "TableName": null,
  "IndexName": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * IndexName **required**
  * TableName **required**

#### Output
* output [DeletePartitionIndexResponse](#deletepartitionindexresponse)

### DeleteRegistry



```js
amazonaws_glue.DeleteRegistry({
  "RegistryId": null
}, context)
```

#### Input
* input `object`
  * RegistryId **required**
    * RegistryArn
    * RegistryName

#### Output
* output [DeleteRegistryResponse](#deleteregistryresponse)

### DeleteResourcePolicy



```js
amazonaws_glue.DeleteResourcePolicy({}, context)
```

#### Input
* input `object`
  * PolicyHashCondition
  * ResourceArn

#### Output
* output [DeleteResourcePolicyResponse](#deleteresourcepolicyresponse)

### DeleteSchema



```js
amazonaws_glue.DeleteSchema({
  "SchemaId": null
}, context)
```

#### Input
* input `object`
  * SchemaId **required**
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)

#### Output
* output [DeleteSchemaResponse](#deleteschemaresponse)

### DeleteSchemaVersions



```js
amazonaws_glue.DeleteSchemaVersions({
  "SchemaId": null,
  "Versions": null
}, context)
```

#### Input
* input `object`
  * SchemaId **required**
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
  * Versions **required**

#### Output
* output [DeleteSchemaVersionsResponse](#deleteschemaversionsresponse)

### DeleteSecurityConfiguration



```js
amazonaws_glue.DeleteSecurityConfiguration({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteSecurityConfigurationResponse](#deletesecurityconfigurationresponse)

### DeleteTable



```js
amazonaws_glue.DeleteTable({
  "DatabaseName": null,
  "Name": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * Name **required**

#### Output
* output [DeleteTableResponse](#deletetableresponse)

### DeleteTableVersion



```js
amazonaws_glue.DeleteTableVersion({
  "DatabaseName": null,
  "TableName": null,
  "VersionId": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * TableName **required**
  * VersionId **required**

#### Output
* output [DeleteTableVersionResponse](#deletetableversionresponse)

### DeleteTrigger



```js
amazonaws_glue.DeleteTrigger({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteTriggerResponse](#deletetriggerresponse)

### DeleteUserDefinedFunction



```js
amazonaws_glue.DeleteUserDefinedFunction({
  "DatabaseName": null,
  "FunctionName": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * FunctionName **required**

#### Output
* output [DeleteUserDefinedFunctionResponse](#deleteuserdefinedfunctionresponse)

### DeleteWorkflow



```js
amazonaws_glue.DeleteWorkflow({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteWorkflowResponse](#deleteworkflowresponse)

### GetCatalogImportStatus



```js
amazonaws_glue.GetCatalogImportStatus({}, context)
```

#### Input
* input `object`
  * CatalogId

#### Output
* output [GetCatalogImportStatusResponse](#getcatalogimportstatusresponse)

### GetClassifier



```js
amazonaws_glue.GetClassifier({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [GetClassifierResponse](#getclassifierresponse)

### GetClassifiers



```js
amazonaws_glue.GetClassifiers({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [GetClassifiersResponse](#getclassifiersresponse)

### GetColumnStatisticsForPartition



```js
amazonaws_glue.GetColumnStatisticsForPartition({
  "DatabaseName": null,
  "TableName": null,
  "PartitionValues": null,
  "ColumnNames": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * ColumnNames **required**
    * items [NameString](#namestring)
  * DatabaseName **required**
  * PartitionValues **required**
    * items [ValueString](#valuestring)
  * TableName **required**

#### Output
* output [GetColumnStatisticsForPartitionResponse](#getcolumnstatisticsforpartitionresponse)

### GetColumnStatisticsForTable



```js
amazonaws_glue.GetColumnStatisticsForTable({
  "DatabaseName": null,
  "TableName": null,
  "ColumnNames": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * ColumnNames **required**
    * items [NameString](#namestring)
  * DatabaseName **required**
  * TableName **required**

#### Output
* output [GetColumnStatisticsForTableResponse](#getcolumnstatisticsfortableresponse)

### GetConnection



```js
amazonaws_glue.GetConnection({
  "Name": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * HidePassword
  * Name **required**

#### Output
* output [GetConnectionResponse](#getconnectionresponse)

### GetConnections



```js
amazonaws_glue.GetConnections({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CatalogId
  * Filter
    * ConnectionType
    * MatchCriteria
      * items [NameString](#namestring)
  * HidePassword
  * MaxResults
  * NextToken

#### Output
* output [GetConnectionsResponse](#getconnectionsresponse)

### GetCrawler



```js
amazonaws_glue.GetCrawler({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [GetCrawlerResponse](#getcrawlerresponse)

### GetCrawlerMetrics



```js
amazonaws_glue.GetCrawlerMetrics({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CrawlerNameList
    * items [NameString](#namestring)
  * MaxResults
  * NextToken

#### Output
* output [GetCrawlerMetricsResponse](#getcrawlermetricsresponse)

### GetCrawlers



```js
amazonaws_glue.GetCrawlers({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [GetCrawlersResponse](#getcrawlersresponse)

### GetDataCatalogEncryptionSettings



```js
amazonaws_glue.GetDataCatalogEncryptionSettings({}, context)
```

#### Input
* input `object`
  * CatalogId

#### Output
* output [GetDataCatalogEncryptionSettingsResponse](#getdatacatalogencryptionsettingsresponse)

### GetDatabase



```js
amazonaws_glue.GetDatabase({
  "Name": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * Name **required**

#### Output
* output [GetDatabaseResponse](#getdatabaseresponse)

### GetDatabases



```js
amazonaws_glue.GetDatabases({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CatalogId
  * MaxResults
  * NextToken
  * ResourceShareType

#### Output
* output [GetDatabasesResponse](#getdatabasesresponse)

### GetDataflowGraph



```js
amazonaws_glue.GetDataflowGraph({}, context)
```

#### Input
* input `object`
  * PythonScript

#### Output
* output [GetDataflowGraphResponse](#getdataflowgraphresponse)

### GetDevEndpoint



```js
amazonaws_glue.GetDevEndpoint({
  "EndpointName": null
}, context)
```

#### Input
* input `object`
  * EndpointName **required**

#### Output
* output [GetDevEndpointResponse](#getdevendpointresponse)

### GetDevEndpoints



```js
amazonaws_glue.GetDevEndpoints({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [GetDevEndpointsResponse](#getdevendpointsresponse)

### GetJob



```js
amazonaws_glue.GetJob({
  "JobName": null
}, context)
```

#### Input
* input `object`
  * JobName **required**

#### Output
* output [GetJobResponse](#getjobresponse)

### GetJobBookmark



```js
amazonaws_glue.GetJobBookmark({
  "JobName": null
}, context)
```

#### Input
* input `object`
  * JobName **required**
  * RunId

#### Output
* output [GetJobBookmarkResponse](#getjobbookmarkresponse)

### GetJobRun



```js
amazonaws_glue.GetJobRun({
  "JobName": null,
  "RunId": null
}, context)
```

#### Input
* input `object`
  * JobName **required**
  * PredecessorsIncluded
  * RunId **required**

#### Output
* output [GetJobRunResponse](#getjobrunresponse)

### GetJobRuns



```js
amazonaws_glue.GetJobRuns({
  "JobName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobName **required**
  * MaxResults
  * NextToken

#### Output
* output [GetJobRunsResponse](#getjobrunsresponse)

### GetJobs



```js
amazonaws_glue.GetJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [GetJobsResponse](#getjobsresponse)

### GetMLTaskRun



```js
amazonaws_glue.GetMLTaskRun({
  "TransformId": null,
  "TaskRunId": null
}, context)
```

#### Input
* input `object`
  * TaskRunId **required**
  * TransformId **required**

#### Output
* output [GetMLTaskRunResponse](#getmltaskrunresponse)

### GetMLTaskRuns



```js
amazonaws_glue.GetMLTaskRuns({
  "TransformId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * StartedAfter
    * StartedBefore
    * Status
    * TaskRunType
  * MaxResults
  * NextToken
  * Sort
    * Column **required**
    * SortDirection **required**
  * TransformId **required**

#### Output
* output [GetMLTaskRunsResponse](#getmltaskrunsresponse)

### GetMLTransform



```js
amazonaws_glue.GetMLTransform({
  "TransformId": null
}, context)
```

#### Input
* input `object`
  * TransformId **required**

#### Output
* output [GetMLTransformResponse](#getmltransformresponse)

### GetMLTransforms



```js
amazonaws_glue.GetMLTransforms({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * CreatedAfter
    * CreatedBefore
    * GlueVersion
    * LastModifiedAfter
    * LastModifiedBefore
    * Name
    * Schema
      * items [SchemaColumn](#schemacolumn)
    * Status
    * TransformType
  * MaxResults
  * NextToken
  * Sort
    * Column **required**
    * SortDirection **required**

#### Output
* output [GetMLTransformsResponse](#getmltransformsresponse)

### GetMapping



```js
amazonaws_glue.GetMapping({
  "Source": null
}, context)
```

#### Input
* input `object`
  * Location
    * DynamoDB
      * items [CodeGenNodeArg](#codegennodearg)
    * Jdbc
      * items [CodeGenNodeArg](#codegennodearg)
    * S3
      * items [CodeGenNodeArg](#codegennodearg)
  * Sinks
    * items [CatalogEntry](#catalogentry)
  * Source **required**
    * DatabaseName **required**
    * TableName **required**

#### Output
* output [GetMappingResponse](#getmappingresponse)

### GetPartition



```js
amazonaws_glue.GetPartition({
  "DatabaseName": null,
  "TableName": null,
  "PartitionValues": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionValues **required**
    * items [ValueString](#valuestring)
  * TableName **required**

#### Output
* output [GetPartitionResponse](#getpartitionresponse)

### GetPartitionIndexes



```js
amazonaws_glue.GetPartitionIndexes({
  "DatabaseName": null,
  "TableName": null
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * CatalogId
  * DatabaseName **required**
  * NextToken
  * TableName **required**

#### Output
* output [GetPartitionIndexesResponse](#getpartitionindexesresponse)

### GetPartitions



```js
amazonaws_glue.GetPartitions({
  "DatabaseName": null,
  "TableName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CatalogId
  * DatabaseName **required**
  * Expression
  * MaxResults
  * NextToken
  * Segment
    * SegmentNumber **required**
    * TotalSegments **required**
  * TableName **required**

#### Output
* output [GetPartitionsResponse](#getpartitionsresponse)

### GetPlan



```js
amazonaws_glue.GetPlan({
  "Mapping": null,
  "Source": null
}, context)
```

#### Input
* input `object`
  * AdditionalPlanOptionsMap
  * Language
  * Location
    * DynamoDB
      * items [CodeGenNodeArg](#codegennodearg)
    * Jdbc
      * items [CodeGenNodeArg](#codegennodearg)
    * S3
      * items [CodeGenNodeArg](#codegennodearg)
  * Mapping **required**
    * items [MappingEntry](#mappingentry)
  * Sinks
    * items [CatalogEntry](#catalogentry)
  * Source **required**
    * DatabaseName **required**
    * TableName **required**

#### Output
* output [GetPlanResponse](#getplanresponse)

### GetRegistry



```js
amazonaws_glue.GetRegistry({
  "RegistryId": null
}, context)
```

#### Input
* input `object`
  * RegistryId **required**
    * RegistryArn
    * RegistryName

#### Output
* output [GetRegistryResponse](#getregistryresponse)

### GetResourcePolicies



```js
amazonaws_glue.GetResourcePolicies({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [GetResourcePoliciesResponse](#getresourcepoliciesresponse)

### GetResourcePolicy



```js
amazonaws_glue.GetResourcePolicy({}, context)
```

#### Input
* input `object`
  * ResourceArn

#### Output
* output [GetResourcePolicyResponse](#getresourcepolicyresponse)

### GetSchema



```js
amazonaws_glue.GetSchema({
  "SchemaId": null
}, context)
```

#### Input
* input `object`
  * SchemaId **required**
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)

#### Output
* output [GetSchemaResponse](#getschemaresponse)

### GetSchemaByDefinition



```js
amazonaws_glue.GetSchemaByDefinition({
  "SchemaId": null,
  "SchemaDefinition": null
}, context)
```

#### Input
* input `object`
  * SchemaDefinition **required**
  * SchemaId **required**
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)

#### Output
* output [GetSchemaByDefinitionResponse](#getschemabydefinitionresponse)

### GetSchemaVersion



```js
amazonaws_glue.GetSchemaVersion({}, context)
```

#### Input
* input `object`
  * SchemaId
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
  * SchemaVersionId
  * SchemaVersionNumber
    * LatestVersion [LatestSchemaVersionBoolean](#latestschemaversionboolean)
    * VersionNumber [VersionLongNumber](#versionlongnumber)

#### Output
* output [GetSchemaVersionResponse](#getschemaversionresponse)

### GetSchemaVersionsDiff



```js
amazonaws_glue.GetSchemaVersionsDiff({
  "SchemaId": null,
  "FirstSchemaVersionNumber": null,
  "SecondSchemaVersionNumber": null,
  "SchemaDiffType": null
}, context)
```

#### Input
* input `object`
  * FirstSchemaVersionNumber **required**
    * LatestVersion [LatestSchemaVersionBoolean](#latestschemaversionboolean)
    * VersionNumber [VersionLongNumber](#versionlongnumber)
  * SchemaDiffType **required**
  * SchemaId **required**
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
  * SecondSchemaVersionNumber **required**
    * LatestVersion [LatestSchemaVersionBoolean](#latestschemaversionboolean)
    * VersionNumber [VersionLongNumber](#versionlongnumber)

#### Output
* output [GetSchemaVersionsDiffResponse](#getschemaversionsdiffresponse)

### GetSecurityConfiguration



```js
amazonaws_glue.GetSecurityConfiguration({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [GetSecurityConfigurationResponse](#getsecurityconfigurationresponse)

### GetSecurityConfigurations



```js
amazonaws_glue.GetSecurityConfigurations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [GetSecurityConfigurationsResponse](#getsecurityconfigurationsresponse)

### GetTable



```js
amazonaws_glue.GetTable({
  "DatabaseName": null,
  "Name": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * Name **required**

#### Output
* output [GetTableResponse](#gettableresponse)

### GetTableVersion



```js
amazonaws_glue.GetTableVersion({
  "DatabaseName": null,
  "TableName": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * TableName **required**
  * VersionId

#### Output
* output [GetTableVersionResponse](#gettableversionresponse)

### GetTableVersions



```js
amazonaws_glue.GetTableVersions({
  "DatabaseName": null,
  "TableName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CatalogId
  * DatabaseName **required**
  * MaxResults
  * NextToken
  * TableName **required**

#### Output
* output [GetTableVersionsResponse](#gettableversionsresponse)

### GetTables



```js
amazonaws_glue.GetTables({
  "DatabaseName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CatalogId
  * DatabaseName **required**
  * Expression
  * MaxResults
  * NextToken

#### Output
* output [GetTablesResponse](#gettablesresponse)

### GetTags



```js
amazonaws_glue.GetTags({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [GetTagsResponse](#gettagsresponse)

### GetTrigger



```js
amazonaws_glue.GetTrigger({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [GetTriggerResponse](#gettriggerresponse)

### GetTriggers



```js
amazonaws_glue.GetTriggers({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DependentJobName
  * MaxResults
  * NextToken

#### Output
* output [GetTriggersResponse](#gettriggersresponse)

### GetUserDefinedFunction



```js
amazonaws_glue.GetUserDefinedFunction({
  "DatabaseName": null,
  "FunctionName": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * FunctionName **required**

#### Output
* output [GetUserDefinedFunctionResponse](#getuserdefinedfunctionresponse)

### GetUserDefinedFunctions



```js
amazonaws_glue.GetUserDefinedFunctions({
  "Pattern": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CatalogId
  * DatabaseName
  * MaxResults
  * NextToken
  * Pattern **required**

#### Output
* output [GetUserDefinedFunctionsResponse](#getuserdefinedfunctionsresponse)

### GetWorkflow



```js
amazonaws_glue.GetWorkflow({
  "Name": null
}, context)
```

#### Input
* input `object`
  * IncludeGraph
  * Name **required**

#### Output
* output [GetWorkflowResponse](#getworkflowresponse)

### GetWorkflowRun



```js
amazonaws_glue.GetWorkflowRun({
  "Name": null,
  "RunId": null
}, context)
```

#### Input
* input `object`
  * IncludeGraph
  * Name **required**
  * RunId **required**

#### Output
* output [GetWorkflowRunResponse](#getworkflowrunresponse)

### GetWorkflowRunProperties



```js
amazonaws_glue.GetWorkflowRunProperties({
  "Name": null,
  "RunId": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * RunId **required**

#### Output
* output [GetWorkflowRunPropertiesResponse](#getworkflowrunpropertiesresponse)

### GetWorkflowRuns



```js
amazonaws_glue.GetWorkflowRuns({
  "Name": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * IncludeGraph
  * MaxResults
  * Name **required**
  * NextToken

#### Output
* output [GetWorkflowRunsResponse](#getworkflowrunsresponse)

### ImportCatalogToGlue



```js
amazonaws_glue.ImportCatalogToGlue({}, context)
```

#### Input
* input `object`
  * CatalogId

#### Output
* output [ImportCatalogToGlueResponse](#importcatalogtoglueresponse)

### ListCrawlers



```js
amazonaws_glue.ListCrawlers({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * Tags

#### Output
* output [ListCrawlersResponse](#listcrawlersresponse)

### ListDevEndpoints



```js
amazonaws_glue.ListDevEndpoints({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * Tags

#### Output
* output [ListDevEndpointsResponse](#listdevendpointsresponse)

### ListJobs



```js
amazonaws_glue.ListJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * Tags

#### Output
* output [ListJobsResponse](#listjobsresponse)

### ListMLTransforms



```js
amazonaws_glue.ListMLTransforms({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * CreatedAfter
    * CreatedBefore
    * GlueVersion
    * LastModifiedAfter
    * LastModifiedBefore
    * Name
    * Schema
      * items [SchemaColumn](#schemacolumn)
    * Status
    * TransformType
  * MaxResults
  * NextToken
  * Sort
    * Column **required**
    * SortDirection **required**
  * Tags

#### Output
* output [ListMLTransformsResponse](#listmltransformsresponse)

### ListRegistries



```js
amazonaws_glue.ListRegistries({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListRegistriesResponse](#listregistriesresponse)

### ListSchemaVersions



```js
amazonaws_glue.ListSchemaVersions({
  "SchemaId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * SchemaId **required**
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)

#### Output
* output [ListSchemaVersionsResponse](#listschemaversionsresponse)

### ListSchemas



```js
amazonaws_glue.ListSchemas({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * RegistryId
    * RegistryArn
    * RegistryName

#### Output
* output [ListSchemasResponse](#listschemasresponse)

### ListTriggers



```js
amazonaws_glue.ListTriggers({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DependentJobName
  * MaxResults
  * NextToken
  * Tags

#### Output
* output [ListTriggersResponse](#listtriggersresponse)

### ListWorkflows



```js
amazonaws_glue.ListWorkflows({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListWorkflowsResponse](#listworkflowsresponse)

### PutDataCatalogEncryptionSettings



```js
amazonaws_glue.PutDataCatalogEncryptionSettings({
  "DataCatalogEncryptionSettings": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DataCatalogEncryptionSettings **required**
    * ConnectionPasswordEncryption
      * AwsKmsKeyId
      * ReturnConnectionPasswordEncrypted **required**
    * EncryptionAtRest
      * CatalogEncryptionMode **required**
      * SseAwsKmsKeyId

#### Output
* output [PutDataCatalogEncryptionSettingsResponse](#putdatacatalogencryptionsettingsresponse)

### PutResourcePolicy



```js
amazonaws_glue.PutResourcePolicy({
  "PolicyInJson": null
}, context)
```

#### Input
* input `object`
  * EnableHybrid
  * PolicyExistsCondition
  * PolicyHashCondition
  * PolicyInJson **required**
  * ResourceArn

#### Output
* output [PutResourcePolicyResponse](#putresourcepolicyresponse)

### PutSchemaVersionMetadata



```js
amazonaws_glue.PutSchemaVersionMetadata({
  "MetadataKeyValue": null
}, context)
```

#### Input
* input `object`
  * MetadataKeyValue **required**
    * MetadataKey
    * MetadataValue
  * SchemaId
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
  * SchemaVersionId
  * SchemaVersionNumber
    * LatestVersion [LatestSchemaVersionBoolean](#latestschemaversionboolean)
    * VersionNumber [VersionLongNumber](#versionlongnumber)

#### Output
* output [PutSchemaVersionMetadataResponse](#putschemaversionmetadataresponse)

### PutWorkflowRunProperties



```js
amazonaws_glue.PutWorkflowRunProperties({
  "Name": null,
  "RunId": null,
  "RunProperties": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * RunId **required**
  * RunProperties **required**

#### Output
* output [PutWorkflowRunPropertiesResponse](#putworkflowrunpropertiesresponse)

### QuerySchemaVersionMetadata



```js
amazonaws_glue.QuerySchemaVersionMetadata({}, context)
```

#### Input
* input `object`
  * MaxResults
  * MetadataList
    * items [MetadataKeyValuePair](#metadatakeyvaluepair)
  * NextToken
  * SchemaId
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
  * SchemaVersionId
  * SchemaVersionNumber
    * LatestVersion [LatestSchemaVersionBoolean](#latestschemaversionboolean)
    * VersionNumber [VersionLongNumber](#versionlongnumber)

#### Output
* output [QuerySchemaVersionMetadataResponse](#queryschemaversionmetadataresponse)

### RegisterSchemaVersion



```js
amazonaws_glue.RegisterSchemaVersion({
  "SchemaId": null,
  "SchemaDefinition": null
}, context)
```

#### Input
* input `object`
  * SchemaDefinition **required**
  * SchemaId **required**
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)

#### Output
* output [RegisterSchemaVersionResponse](#registerschemaversionresponse)

### RemoveSchemaVersionMetadata



```js
amazonaws_glue.RemoveSchemaVersionMetadata({
  "MetadataKeyValue": null
}, context)
```

#### Input
* input `object`
  * MetadataKeyValue **required**
    * MetadataKey
    * MetadataValue
  * SchemaId
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
  * SchemaVersionId
  * SchemaVersionNumber
    * LatestVersion [LatestSchemaVersionBoolean](#latestschemaversionboolean)
    * VersionNumber [VersionLongNumber](#versionlongnumber)

#### Output
* output [RemoveSchemaVersionMetadataResponse](#removeschemaversionmetadataresponse)

### ResetJobBookmark



```js
amazonaws_glue.ResetJobBookmark({
  "JobName": null
}, context)
```

#### Input
* input `object`
  * JobName **required**
  * RunId

#### Output
* output [ResetJobBookmarkResponse](#resetjobbookmarkresponse)

### ResumeWorkflowRun



```js
amazonaws_glue.ResumeWorkflowRun({
  "Name": null,
  "RunId": null,
  "NodeIds": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * NodeIds **required**
    * items [NameString](#namestring)
  * RunId **required**

#### Output
* output [ResumeWorkflowRunResponse](#resumeworkflowrunresponse)

### SearchTables



```js
amazonaws_glue.SearchTables({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CatalogId
  * Filters
    * items [PropertyPredicate](#propertypredicate)
  * MaxResults
  * NextToken
  * ResourceShareType
  * SearchText
  * SortCriteria
    * items [SortCriterion](#sortcriterion)

#### Output
* output [SearchTablesResponse](#searchtablesresponse)

### StartCrawler



```js
amazonaws_glue.StartCrawler({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [StartCrawlerResponse](#startcrawlerresponse)

### StartCrawlerSchedule



```js
amazonaws_glue.StartCrawlerSchedule({
  "CrawlerName": null
}, context)
```

#### Input
* input `object`
  * CrawlerName **required**

#### Output
* output [StartCrawlerScheduleResponse](#startcrawlerscheduleresponse)

### StartExportLabelsTaskRun



```js
amazonaws_glue.StartExportLabelsTaskRun({
  "TransformId": null,
  "OutputS3Path": null
}, context)
```

#### Input
* input `object`
  * OutputS3Path **required**
  * TransformId **required**

#### Output
* output [StartExportLabelsTaskRunResponse](#startexportlabelstaskrunresponse)

### StartImportLabelsTaskRun



```js
amazonaws_glue.StartImportLabelsTaskRun({
  "TransformId": null,
  "InputS3Path": null
}, context)
```

#### Input
* input `object`
  * InputS3Path **required**
  * ReplaceAllLabels
  * TransformId **required**

#### Output
* output [StartImportLabelsTaskRunResponse](#startimportlabelstaskrunresponse)

### StartJobRun



```js
amazonaws_glue.StartJobRun({
  "JobName": null
}, context)
```

#### Input
* input `object`
  * AllocatedCapacity
  * Arguments
  * JobName **required**
  * JobRunId
  * MaxCapacity
  * NotificationProperty
    * NotifyDelayAfter
  * NumberOfWorkers
  * SecurityConfiguration
  * Timeout
  * WorkerType

#### Output
* output [StartJobRunResponse](#startjobrunresponse)

### StartMLEvaluationTaskRun



```js
amazonaws_glue.StartMLEvaluationTaskRun({
  "TransformId": null
}, context)
```

#### Input
* input `object`
  * TransformId **required**

#### Output
* output [StartMLEvaluationTaskRunResponse](#startmlevaluationtaskrunresponse)

### StartMLLabelingSetGenerationTaskRun



```js
amazonaws_glue.StartMLLabelingSetGenerationTaskRun({
  "TransformId": null,
  "OutputS3Path": null
}, context)
```

#### Input
* input `object`
  * OutputS3Path **required**
  * TransformId **required**

#### Output
* output [StartMLLabelingSetGenerationTaskRunResponse](#startmllabelingsetgenerationtaskrunresponse)

### StartTrigger



```js
amazonaws_glue.StartTrigger({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [StartTriggerResponse](#starttriggerresponse)

### StartWorkflowRun



```js
amazonaws_glue.StartWorkflowRun({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [StartWorkflowRunResponse](#startworkflowrunresponse)

### StopCrawler



```js
amazonaws_glue.StopCrawler({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [StopCrawlerResponse](#stopcrawlerresponse)

### StopCrawlerSchedule



```js
amazonaws_glue.StopCrawlerSchedule({
  "CrawlerName": null
}, context)
```

#### Input
* input `object`
  * CrawlerName **required**

#### Output
* output [StopCrawlerScheduleResponse](#stopcrawlerscheduleresponse)

### StopTrigger



```js
amazonaws_glue.StopTrigger({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [StopTriggerResponse](#stoptriggerresponse)

### StopWorkflowRun



```js
amazonaws_glue.StopWorkflowRun({
  "Name": null,
  "RunId": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * RunId **required**

#### Output
* output [StopWorkflowRunResponse](#stopworkflowrunresponse)

### TagResource



```js
amazonaws_glue.TagResource({
  "ResourceArn": null,
  "TagsToAdd": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagsToAdd **required**

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_glue.UntagResource({
  "ResourceArn": null,
  "TagsToRemove": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagsToRemove **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateClassifier



```js
amazonaws_glue.UpdateClassifier({}, context)
```

#### Input
* input `object`
  * CsvClassifier
    * AllowSingleColumn
    * ContainsHeader
    * Delimiter
    * DisableValueTrimming
    * Header
      * items [NameString](#namestring)
    * Name **required**
    * QuoteSymbol
  * GrokClassifier
    * Classification
    * CustomPatterns
    * GrokPattern
    * Name **required**
  * JsonClassifier
    * JsonPath
    * Name **required**
  * XMLClassifier
    * Classification
    * Name **required**
    * RowTag

#### Output
* output [UpdateClassifierResponse](#updateclassifierresponse)

### UpdateColumnStatisticsForPartition



```js
amazonaws_glue.UpdateColumnStatisticsForPartition({
  "DatabaseName": null,
  "TableName": null,
  "PartitionValues": null,
  "ColumnStatisticsList": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * ColumnStatisticsList **required**
    * items [ColumnStatistics](#columnstatistics)
  * DatabaseName **required**
  * PartitionValues **required**
    * items [ValueString](#valuestring)
  * TableName **required**

#### Output
* output [UpdateColumnStatisticsForPartitionResponse](#updatecolumnstatisticsforpartitionresponse)

### UpdateColumnStatisticsForTable



```js
amazonaws_glue.UpdateColumnStatisticsForTable({
  "DatabaseName": null,
  "TableName": null,
  "ColumnStatisticsList": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * ColumnStatisticsList **required**
    * items [ColumnStatistics](#columnstatistics)
  * DatabaseName **required**
  * TableName **required**

#### Output
* output [UpdateColumnStatisticsForTableResponse](#updatecolumnstatisticsfortableresponse)

### UpdateConnection



```js
amazonaws_glue.UpdateConnection({
  "Name": null,
  "ConnectionInput": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * ConnectionInput **required**
    * ConnectionProperties **required**
    * ConnectionType **required**
    * Description
    * MatchCriteria
      * items [NameString](#namestring)
    * Name **required**
    * PhysicalConnectionRequirements
      * AvailabilityZone
      * SecurityGroupIdList
        * items [NameString](#namestring)
      * SubnetId
  * Name **required**

#### Output
* output [UpdateConnectionResponse](#updateconnectionresponse)

### UpdateCrawler



```js
amazonaws_glue.UpdateCrawler({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Classifiers
    * items [NameString](#namestring)
  * Configuration
  * CrawlerSecurityConfiguration
  * DatabaseName
  * Description
  * LineageConfiguration
    * CrawlerLineageSettings
  * Name **required**
  * RecrawlPolicy
    * RecrawlBehavior
  * Role
  * Schedule
  * SchemaChangePolicy
    * DeleteBehavior
    * UpdateBehavior
  * TablePrefix
  * Targets
    * CatalogTargets
      * items [CatalogTarget](#catalogtarget)
    * DynamoDBTargets
      * items [DynamoDBTarget](#dynamodbtarget)
    * JdbcTargets
      * items [JdbcTarget](#jdbctarget)
    * MongoDBTargets
      * items [MongoDBTarget](#mongodbtarget)
    * S3Targets
      * items [S3Target](#s3target)

#### Output
* output [UpdateCrawlerResponse](#updatecrawlerresponse)

### UpdateCrawlerSchedule



```js
amazonaws_glue.UpdateCrawlerSchedule({
  "CrawlerName": null
}, context)
```

#### Input
* input `object`
  * CrawlerName **required**
  * Schedule

#### Output
* output [UpdateCrawlerScheduleResponse](#updatecrawlerscheduleresponse)

### UpdateDatabase



```js
amazonaws_glue.UpdateDatabase({
  "Name": null,
  "DatabaseInput": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseInput **required**
    * CreateTableDefaultPermissions
      * items [PrincipalPermissions](#principalpermissions)
    * Description
    * LocationUri
    * Name **required**
    * Parameters
    * TargetDatabase
      * CatalogId
      * DatabaseName
  * Name **required**

#### Output
* output [UpdateDatabaseResponse](#updatedatabaseresponse)

### UpdateDevEndpoint



```js
amazonaws_glue.UpdateDevEndpoint({
  "EndpointName": null
}, context)
```

#### Input
* input `object`
  * AddArguments
  * AddPublicKeys
    * items [GenericString](#genericstring)
  * CustomLibraries
    * ExtraJarsS3Path
    * ExtraPythonLibsS3Path
  * DeleteArguments
    * items [GenericString](#genericstring)
  * DeletePublicKeys
    * items [GenericString](#genericstring)
  * EndpointName **required**
  * PublicKey
  * UpdateEtlLibraries

#### Output
* output [UpdateDevEndpointResponse](#updatedevendpointresponse)

### UpdateJob



```js
amazonaws_glue.UpdateJob({
  "JobName": null,
  "JobUpdate": null
}, context)
```

#### Input
* input `object`
  * JobName **required**
  * JobUpdate **required**
    * AllocatedCapacity
    * Command
      * Name
      * PythonVersion
      * ScriptLocation
    * Connections
      * Connections
        * items [GenericString](#genericstring)
    * DefaultArguments
    * Description
    * ExecutionProperty
      * MaxConcurrentRuns
    * GlueVersion
    * LogUri
    * MaxCapacity
    * MaxRetries
    * NonOverridableArguments
    * NotificationProperty
      * NotifyDelayAfter
    * NumberOfWorkers
    * Role
    * SecurityConfiguration
    * Timeout
    * WorkerType

#### Output
* output [UpdateJobResponse](#updatejobresponse)

### UpdateMLTransform



```js
amazonaws_glue.UpdateMLTransform({
  "TransformId": null
}, context)
```

#### Input
* input `object`
  * Description
  * GlueVersion
  * MaxCapacity
  * MaxRetries
  * Name
  * NumberOfWorkers
  * Parameters
    * FindMatchesParameters
      * AccuracyCostTradeoff
      * EnforceProvidedLabels
      * PrecisionRecallTradeoff
      * PrimaryKeyColumnName
    * TransformType **required**
  * Role
  * Timeout
  * TransformId **required**
  * WorkerType

#### Output
* output [UpdateMLTransformResponse](#updatemltransformresponse)

### UpdatePartition



```js
amazonaws_glue.UpdatePartition({
  "DatabaseName": null,
  "TableName": null,
  "PartitionValueList": null,
  "PartitionInput": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionInput **required**
    * LastAccessTime
    * LastAnalyzedTime
    * Parameters
    * StorageDescriptor
      * BucketColumns
        * items [NameString](#namestring)
      * Columns
        * items [Column](#column)
      * Compressed
      * InputFormat
      * Location
      * NumberOfBuckets
      * OutputFormat
      * Parameters
      * SchemaReference
        * SchemaId
          * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
          * SchemaArn [GlueResourceArn](#glueresourcearn)
          * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
        * SchemaVersionId
        * SchemaVersionNumber
      * SerdeInfo
        * Name
        * Parameters
        * SerializationLibrary
      * SkewedInfo
        * SkewedColumnNames
          * items [NameString](#namestring)
        * SkewedColumnValueLocationMaps
        * SkewedColumnValues
          * items [ColumnValuesString](#columnvaluesstring)
      * SortColumns
        * items [Order](#order)
      * StoredAsSubDirectories
    * Values
      * items [ValueString](#valuestring)
  * PartitionValueList **required**
    * items [ValueString](#valuestring)
  * TableName **required**

#### Output
* output [UpdatePartitionResponse](#updatepartitionresponse)

### UpdateRegistry



```js
amazonaws_glue.UpdateRegistry({
  "RegistryId": null,
  "Description": null
}, context)
```

#### Input
* input `object`
  * Description **required**
  * RegistryId **required**
    * RegistryArn
    * RegistryName

#### Output
* output [UpdateRegistryResponse](#updateregistryresponse)

### UpdateSchema



```js
amazonaws_glue.UpdateSchema({
  "SchemaId": null
}, context)
```

#### Input
* input `object`
  * Compatibility
  * Description
  * SchemaId **required**
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
  * SchemaVersionNumber
    * LatestVersion [LatestSchemaVersionBoolean](#latestschemaversionboolean)
    * VersionNumber [VersionLongNumber](#versionlongnumber)

#### Output
* output [UpdateSchemaResponse](#updateschemaresponse)

### UpdateTable



```js
amazonaws_glue.UpdateTable({
  "DatabaseName": null,
  "TableInput": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * SkipArchive
  * TableInput **required**
    * Description
    * LastAccessTime
    * LastAnalyzedTime
    * Name **required**
    * Owner
    * Parameters
    * PartitionKeys
      * items [Column](#column)
    * Retention
    * StorageDescriptor
      * BucketColumns
        * items [NameString](#namestring)
      * Columns
        * items [Column](#column)
      * Compressed
      * InputFormat
      * Location
      * NumberOfBuckets
      * OutputFormat
      * Parameters
      * SchemaReference
        * SchemaId
          * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
          * SchemaArn [GlueResourceArn](#glueresourcearn)
          * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
        * SchemaVersionId
        * SchemaVersionNumber
      * SerdeInfo
        * Name
        * Parameters
        * SerializationLibrary
      * SkewedInfo
        * SkewedColumnNames
          * items [NameString](#namestring)
        * SkewedColumnValueLocationMaps
        * SkewedColumnValues
          * items [ColumnValuesString](#columnvaluesstring)
      * SortColumns
        * items [Order](#order)
      * StoredAsSubDirectories
    * TableType
    * TargetTable
      * CatalogId
      * DatabaseName
      * Name
    * ViewExpandedText
    * ViewOriginalText

#### Output
* output [UpdateTableResponse](#updatetableresponse)

### UpdateTrigger



```js
amazonaws_glue.UpdateTrigger({
  "Name": null,
  "TriggerUpdate": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * TriggerUpdate **required**
    * Actions
      * items [Action](#action)
    * Description
    * Name
    * Predicate
      * Conditions
        * items [Condition](#condition)
      * Logical
    * Schedule

#### Output
* output [UpdateTriggerResponse](#updatetriggerresponse)

### UpdateUserDefinedFunction



```js
amazonaws_glue.UpdateUserDefinedFunction({
  "DatabaseName": null,
  "FunctionName": null,
  "FunctionInput": null
}, context)
```

#### Input
* input `object`
  * CatalogId
  * DatabaseName **required**
  * FunctionInput **required**
    * ClassName
    * FunctionName
    * OwnerName
    * OwnerType
    * ResourceUris
      * items [ResourceUri](#resourceuri)
  * FunctionName **required**

#### Output
* output [UpdateUserDefinedFunctionResponse](#updateuserdefinedfunctionresponse)

### UpdateWorkflow



```js
amazonaws_glue.UpdateWorkflow({
  "Name": null
}, context)
```

#### Input
* input `object`
  * DefaultRunProperties
  * Description
  * MaxConcurrentRuns
  * Name **required**

#### Output
* output [UpdateWorkflowResponse](#updateworkflowresponse)



## Definitions

### AccessDeniedException


### Action
* Action `object`: Defines an action to be initiated by a trigger.
  * Arguments
  * CrawlerName
  * JobName
  * NotificationProperty
    * NotifyDelayAfter
  * SecurityConfiguration
  * Timeout

### ActionList
* ActionList `array`
  * items [Action](#action)

### AdditionalPlanOptionsMap
* AdditionalPlanOptionsMap `object`

### AlreadyExistsException


### AttemptCount
* AttemptCount `integer`

### BackfillError
* BackfillError `object`: <p>A list of errors that can occur when registering partition indexes for an existing table.</p> <p>These errors give the details about why an index registration failed and provide a limited number of partitions in the response, so that you can fix the partitions at fault and try registering the index again. The most common set of errors that can occur are categorized as follows:</p> <ul> <li> <p>EncryptedPartitionError: The partitions are encrypted.</p> </li> <li> <p>InvalidPartitionTypeDataError: The partition value doesn't match the data type for that partition column.</p> </li> <li> <p>MissingPartitionValueError: The partitions are encrypted.</p> </li> <li> <p>UnsupportedPartitionCharacterError: Characters inside the partition value are not supported. For example: U+0000 , U+0001, U+0002.</p> </li> <li> <p>InternalError: Any error which does not belong to other error codes.</p> </li> </ul>
  * Code
  * Partitions
    * items [PartitionValueList](#partitionvaluelist)

### BackfillErrorCode
* BackfillErrorCode `string` (values: ENCRYPTED_PARTITION_ERROR, INTERNAL_ERROR, INVALID_PARTITION_TYPE_DATA_ERROR, MISSING_PARTITION_VALUE_ERROR, UNSUPPORTED_PARTITION_CHARACTER_ERROR)

### BackfillErroredPartitionsList
* BackfillErroredPartitionsList `array`
  * items [PartitionValueList](#partitionvaluelist)

### BackfillErrors
* BackfillErrors `array`
  * items [BackfillError](#backfillerror)

### BatchCreatePartitionRequest
* BatchCreatePartitionRequest `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionInputList **required**
    * items [PartitionInput](#partitioninput)
  * TableName **required**

### BatchCreatePartitionResponse
* BatchCreatePartitionResponse `object`
  * Errors
    * items [PartitionError](#partitionerror)

### BatchDeleteConnectionRequest
* BatchDeleteConnectionRequest `object`
  * CatalogId
  * ConnectionNameList **required**
    * items [NameString](#namestring)

### BatchDeleteConnectionResponse
* BatchDeleteConnectionResponse `object`
  * Errors
  * Succeeded
    * items [NameString](#namestring)

### BatchDeletePartitionRequest
* BatchDeletePartitionRequest `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionsToDelete **required**
    * items [PartitionValueList](#partitionvaluelist)
  * TableName **required**

### BatchDeletePartitionResponse
* BatchDeletePartitionResponse `object`
  * Errors
    * items [PartitionError](#partitionerror)

### BatchDeletePartitionValueList
* BatchDeletePartitionValueList `array`
  * items [PartitionValueList](#partitionvaluelist)

### BatchDeleteTableNameList
* BatchDeleteTableNameList `array`
  * items [NameString](#namestring)

### BatchDeleteTableRequest
* BatchDeleteTableRequest `object`
  * CatalogId
  * DatabaseName **required**
  * TablesToDelete **required**
    * items [NameString](#namestring)

### BatchDeleteTableResponse
* BatchDeleteTableResponse `object`
  * Errors
    * items [TableError](#tableerror)

### BatchDeleteTableVersionList
* BatchDeleteTableVersionList `array`
  * items [VersionString](#versionstring)

### BatchDeleteTableVersionRequest
* BatchDeleteTableVersionRequest `object`
  * CatalogId
  * DatabaseName **required**
  * TableName **required**
  * VersionIds **required**
    * items [VersionString](#versionstring)

### BatchDeleteTableVersionResponse
* BatchDeleteTableVersionResponse `object`
  * Errors
    * items [TableVersionError](#tableversionerror)

### BatchGetCrawlersRequest
* BatchGetCrawlersRequest `object`
  * CrawlerNames **required**
    * items [NameString](#namestring)

### BatchGetCrawlersResponse
* BatchGetCrawlersResponse `object`
  * Crawlers
    * items [Crawler](#crawler)
  * CrawlersNotFound
    * items [NameString](#namestring)

### BatchGetDevEndpointsRequest
* BatchGetDevEndpointsRequest `object`
  * DevEndpointNames **required**
    * items [GenericString](#genericstring)

### BatchGetDevEndpointsResponse
* BatchGetDevEndpointsResponse `object`
  * DevEndpoints
    * items [DevEndpoint](#devendpoint)
  * DevEndpointsNotFound
    * items [GenericString](#genericstring)

### BatchGetJobsRequest
* BatchGetJobsRequest `object`
  * JobNames **required**
    * items [NameString](#namestring)

### BatchGetJobsResponse
* BatchGetJobsResponse `object`
  * Jobs
    * items [Job](#job)
  * JobsNotFound
    * items [NameString](#namestring)

### BatchGetPartitionRequest
* BatchGetPartitionRequest `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionsToGet **required**
    * items [PartitionValueList](#partitionvaluelist)
  * TableName **required**

### BatchGetPartitionResponse
* BatchGetPartitionResponse `object`
  * Partitions
    * items [Partition](#partition)
  * UnprocessedKeys
    * items [PartitionValueList](#partitionvaluelist)

### BatchGetPartitionValueList
* BatchGetPartitionValueList `array`
  * items [PartitionValueList](#partitionvaluelist)

### BatchGetTriggersRequest
* BatchGetTriggersRequest `object`
  * TriggerNames **required**
    * items [NameString](#namestring)

### BatchGetTriggersResponse
* BatchGetTriggersResponse `object`
  * Triggers
    * items [Trigger](#trigger)
  * TriggersNotFound
    * items [NameString](#namestring)

### BatchGetWorkflowsRequest
* BatchGetWorkflowsRequest `object`
  * IncludeGraph
  * Names **required**
    * items [NameString](#namestring)

### BatchGetWorkflowsResponse
* BatchGetWorkflowsResponse `object`
  * MissingWorkflows
    * items [NameString](#namestring)
  * Workflows
    * items [Workflow](#workflow)

### BatchStopJobRunError
* BatchStopJobRunError `object`: Records an error that occurred when attempting to stop a specified job run.
  * ErrorDetail
    * ErrorCode
    * ErrorMessage
  * JobName
  * JobRunId

### BatchStopJobRunErrorList
* BatchStopJobRunErrorList `array`
  * items [BatchStopJobRunError](#batchstopjobrunerror)

### BatchStopJobRunJobRunIdList
* BatchStopJobRunJobRunIdList `array`
  * items [IdString](#idstring)

### BatchStopJobRunRequest
* BatchStopJobRunRequest `object`
  * JobName **required**
  * JobRunIds **required**
    * items [IdString](#idstring)

### BatchStopJobRunResponse
* BatchStopJobRunResponse `object`
  * Errors
    * items [BatchStopJobRunError](#batchstopjobrunerror)
  * SuccessfulSubmissions
    * items [BatchStopJobRunSuccessfulSubmission](#batchstopjobrunsuccessfulsubmission)

### BatchStopJobRunSuccessfulSubmission
* BatchStopJobRunSuccessfulSubmission `object`: Records a successful request to stop a specified <code>JobRun</code>.
  * JobName
  * JobRunId

### BatchStopJobRunSuccessfulSubmissionList
* BatchStopJobRunSuccessfulSubmissionList `array`
  * items [BatchStopJobRunSuccessfulSubmission](#batchstopjobrunsuccessfulsubmission)

### BatchUpdatePartitionFailureEntry
* BatchUpdatePartitionFailureEntry `object`: Contains information about a batch update partition error.
  * ErrorDetail
    * ErrorCode
    * ErrorMessage
  * PartitionValueList
    * items [ValueString](#valuestring)

### BatchUpdatePartitionFailureList
* BatchUpdatePartitionFailureList `array`
  * items [BatchUpdatePartitionFailureEntry](#batchupdatepartitionfailureentry)

### BatchUpdatePartitionRequest
* BatchUpdatePartitionRequest `object`
  * CatalogId
  * DatabaseName **required**
  * Entries **required**
    * items [BatchUpdatePartitionRequestEntry](#batchupdatepartitionrequestentry)
  * TableName **required**

### BatchUpdatePartitionRequestEntry
* BatchUpdatePartitionRequestEntry `object`: A structure that contains the values and structure used to update a partition.
  * PartitionInput **required**
    * LastAccessTime
    * LastAnalyzedTime
    * Parameters
    * StorageDescriptor
      * BucketColumns
        * items [NameString](#namestring)
      * Columns
        * items [Column](#column)
      * Compressed
      * InputFormat
      * Location
      * NumberOfBuckets
      * OutputFormat
      * Parameters
      * SchemaReference
        * SchemaId
          * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
          * SchemaArn [GlueResourceArn](#glueresourcearn)
          * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
        * SchemaVersionId
        * SchemaVersionNumber
      * SerdeInfo
        * Name
        * Parameters
        * SerializationLibrary
      * SkewedInfo
        * SkewedColumnNames
          * items [NameString](#namestring)
        * SkewedColumnValueLocationMaps
        * SkewedColumnValues
          * items [ColumnValuesString](#columnvaluesstring)
      * SortColumns
        * items [Order](#order)
      * StoredAsSubDirectories
    * Values
      * items [ValueString](#valuestring)
  * PartitionValueList **required**
    * items [ValueString](#valuestring)

### BatchUpdatePartitionRequestEntryList
* BatchUpdatePartitionRequestEntryList `array`
  * items [BatchUpdatePartitionRequestEntry](#batchupdatepartitionrequestentry)

### BatchUpdatePartitionResponse
* BatchUpdatePartitionResponse `object`
  * Errors
    * items [BatchUpdatePartitionFailureEntry](#batchupdatepartitionfailureentry)

### BinaryColumnStatisticsData
* BinaryColumnStatisticsData `object`: Defines column statistics supported for bit sequence data values.
  * AverageLength **required**
  * MaximumLength **required**
  * NumberOfNulls **required**

### Blob
* Blob `string`

### Boolean
* Boolean `boolean`

### BooleanColumnStatisticsData
* BooleanColumnStatisticsData `object`: Defines column statistics supported for Boolean data columns.
  * NumberOfFalses **required**
  * NumberOfNulls **required**
  * NumberOfTrues **required**

### BooleanNullable
* BooleanNullable `boolean`

### BooleanValue
* BooleanValue `boolean`

### BoundedPartitionValueList
* BoundedPartitionValueList `array`
  * items [ValueString](#valuestring)

### CancelMLTaskRunRequest
* CancelMLTaskRunRequest `object`
  * TaskRunId **required**
  * TransformId **required**

### CancelMLTaskRunResponse
* CancelMLTaskRunResponse `object`
  * Status
  * TaskRunId
  * TransformId

### CatalogEncryptionMode
* CatalogEncryptionMode `string` (values: DISABLED, SSE-KMS)

### CatalogEntries
* CatalogEntries `array`
  * items [CatalogEntry](#catalogentry)

### CatalogEntry
* CatalogEntry `object`: Specifies a table definition in the AWS Glue Data Catalog.
  * DatabaseName **required**
  * TableName **required**

### CatalogIdString
* CatalogIdString `string`

### CatalogImportStatus
* CatalogImportStatus `object`: A structure containing migration status information.
  * ImportCompleted
  * ImportTime
  * ImportedBy

### CatalogTablesList
* CatalogTablesList `array`
  * items [NameString](#namestring)

### CatalogTarget
* CatalogTarget `object`: Specifies an AWS Glue Data Catalog target.
  * DatabaseName **required**
  * Tables **required**
    * items [NameString](#namestring)

### CatalogTargetList
* CatalogTargetList `array`
  * items [CatalogTarget](#catalogtarget)

### CheckSchemaVersionValidityInput
* CheckSchemaVersionValidityInput `object`
  * DataFormat **required**
  * SchemaDefinition **required**

### CheckSchemaVersionValidityResponse
* CheckSchemaVersionValidityResponse `object`
  * Error
  * Valid

### Classification
* Classification `string`

### Classifier
* Classifier `object`: <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is in a format it can handle. If it is, the classifier creates a schema in the form of a <code>StructType</code> object that matches that data format.</p> <p>You can use the standard classifiers that AWS Glue provides, or you can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier, a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one of the fields in the <code>Classifier</code> object.</p>
  * CsvClassifier
    * AllowSingleColumn
    * ContainsHeader
    * CreationTime
    * Delimiter
    * DisableValueTrimming
    * Header
      * items [NameString](#namestring)
    * LastUpdated
    * Name **required**
    * QuoteSymbol
    * Version
  * GrokClassifier
    * Classification **required**
    * CreationTime
    * CustomPatterns
    * GrokPattern **required**
    * LastUpdated
    * Name **required**
    * Version
  * JsonClassifier
    * CreationTime
    * JsonPath **required**
    * LastUpdated
    * Name **required**
    * Version
  * XMLClassifier
    * Classification **required**
    * CreationTime
    * LastUpdated
    * Name **required**
    * RowTag
    * Version

### ClassifierList
* ClassifierList `array`
  * items [Classifier](#classifier)

### ClassifierNameList
* ClassifierNameList `array`
  * items [NameString](#namestring)

### CloudWatchEncryption
* CloudWatchEncryption `object`: Specifies how Amazon CloudWatch data should be encrypted.
  * CloudWatchEncryptionMode
  * KmsKeyArn

### CloudWatchEncryptionMode
* CloudWatchEncryptionMode `string` (values: DISABLED, SSE-KMS)

### CodeGenArgName
* CodeGenArgName `string`

### CodeGenArgValue
* CodeGenArgValue `string`

### CodeGenEdge
* CodeGenEdge `object`: Represents a directional edge in a directed acyclic graph (DAG).
  * Source **required**
  * Target **required**
  * TargetParameter

### CodeGenIdentifier
* CodeGenIdentifier `string`

### CodeGenNode
* CodeGenNode `object`: Represents a node in a directed acyclic graph (DAG)
  * Args **required**
    * items [CodeGenNodeArg](#codegennodearg)
  * Id **required**
  * LineNumber
  * NodeType **required**

### CodeGenNodeArg
* CodeGenNodeArg `object`: An argument or property of a node.
  * Name **required**
  * Param
  * Value **required**

### CodeGenNodeArgs
* CodeGenNodeArgs `array`
  * items [CodeGenNodeArg](#codegennodearg)

### CodeGenNodeType
* CodeGenNodeType `string`

### Column
* Column `object`: A column in a <code>Table</code>.
  * Comment
  * Name **required**
  * Parameters
  * Type

### ColumnError
* ColumnError `object`: Encapsulates a column name that failed and the reason for failure.
  * ColumnName
  * Error
    * ErrorCode
    * ErrorMessage

### ColumnErrors
* ColumnErrors `array`
  * items [ColumnError](#columnerror)

### ColumnList
* ColumnList `array`
  * items [Column](#column)

### ColumnNameString
* ColumnNameString `string`

### ColumnStatistics
* ColumnStatistics `object`: Represents the generated column-level statistics for a table or partition.
  * AnalyzedTime **required**
  * ColumnName **required**
  * ColumnType **required**
  * StatisticsData **required**
    * BinaryColumnStatisticsData
      * AverageLength **required**
      * MaximumLength **required**
      * NumberOfNulls **required**
    * BooleanColumnStatisticsData
      * NumberOfFalses **required**
      * NumberOfNulls **required**
      * NumberOfTrues **required**
    * DateColumnStatisticsData
      * MaximumValue
      * MinimumValue
      * NumberOfDistinctValues **required**
      * NumberOfNulls **required**
    * DecimalColumnStatisticsData
      * MaximumValue
        * Scale **required**
        * UnscaledValue **required**
      * MinimumValue
        * Scale **required**
        * UnscaledValue **required**
      * NumberOfDistinctValues **required**
      * NumberOfNulls **required**
    * DoubleColumnStatisticsData
      * MaximumValue
      * MinimumValue
      * NumberOfDistinctValues **required**
      * NumberOfNulls **required**
    * LongColumnStatisticsData
      * MaximumValue
      * MinimumValue
      * NumberOfDistinctValues **required**
      * NumberOfNulls **required**
    * StringColumnStatisticsData
      * AverageLength **required**
      * MaximumLength **required**
      * NumberOfDistinctValues **required**
      * NumberOfNulls **required**
    * Type **required**

### ColumnStatisticsData
* ColumnStatisticsData `object`: Contains the individual types of column statistics data. Only one data object should be set and indicated by the <code>Type</code> attribute.
  * BinaryColumnStatisticsData
    * AverageLength **required**
    * MaximumLength **required**
    * NumberOfNulls **required**
  * BooleanColumnStatisticsData
    * NumberOfFalses **required**
    * NumberOfNulls **required**
    * NumberOfTrues **required**
  * DateColumnStatisticsData
    * MaximumValue
    * MinimumValue
    * NumberOfDistinctValues **required**
    * NumberOfNulls **required**
  * DecimalColumnStatisticsData
    * MaximumValue
      * Scale **required**
      * UnscaledValue **required**
    * MinimumValue
      * Scale **required**
      * UnscaledValue **required**
    * NumberOfDistinctValues **required**
    * NumberOfNulls **required**
  * DoubleColumnStatisticsData
    * MaximumValue
    * MinimumValue
    * NumberOfDistinctValues **required**
    * NumberOfNulls **required**
  * LongColumnStatisticsData
    * MaximumValue
    * MinimumValue
    * NumberOfDistinctValues **required**
    * NumberOfNulls **required**
  * StringColumnStatisticsData
    * AverageLength **required**
    * MaximumLength **required**
    * NumberOfDistinctValues **required**
    * NumberOfNulls **required**
  * Type **required**

### ColumnStatisticsError
* ColumnStatisticsError `object`: Encapsulates a <code>ColumnStatistics</code> object that failed and the reason for failure.
  * ColumnStatistics
    * AnalyzedTime **required**
    * ColumnName **required**
    * ColumnType **required**
    * StatisticsData **required**
      * BinaryColumnStatisticsData
        * AverageLength **required**
        * MaximumLength **required**
        * NumberOfNulls **required**
      * BooleanColumnStatisticsData
        * NumberOfFalses **required**
        * NumberOfNulls **required**
        * NumberOfTrues **required**
      * DateColumnStatisticsData
        * MaximumValue
        * MinimumValue
        * NumberOfDistinctValues **required**
        * NumberOfNulls **required**
      * DecimalColumnStatisticsData
        * MaximumValue
          * Scale **required**
          * UnscaledValue **required**
        * MinimumValue
          * Scale **required**
          * UnscaledValue **required**
        * NumberOfDistinctValues **required**
        * NumberOfNulls **required**
      * DoubleColumnStatisticsData
        * MaximumValue
        * MinimumValue
        * NumberOfDistinctValues **required**
        * NumberOfNulls **required**
      * LongColumnStatisticsData
        * MaximumValue
        * MinimumValue
        * NumberOfDistinctValues **required**
        * NumberOfNulls **required**
      * StringColumnStatisticsData
        * AverageLength **required**
        * MaximumLength **required**
        * NumberOfDistinctValues **required**
        * NumberOfNulls **required**
      * Type **required**
  * Error
    * ErrorCode
    * ErrorMessage

### ColumnStatisticsErrors
* ColumnStatisticsErrors `array`
  * items [ColumnStatisticsError](#columnstatisticserror)

### ColumnStatisticsList
* ColumnStatisticsList `array`
  * items [ColumnStatistics](#columnstatistics)

### ColumnStatisticsType
* ColumnStatisticsType `string` (values: BOOLEAN, DATE, DECIMAL, DOUBLE, LONG, STRING, BINARY)

### ColumnTypeString
* ColumnTypeString `string`

### ColumnValueStringList
* ColumnValueStringList `array`
  * items [ColumnValuesString](#columnvaluesstring)

### ColumnValuesString
* ColumnValuesString `string`

### CommentString
* CommentString `string`

### Comparator
* Comparator `string` (values: EQUALS, GREATER_THAN, LESS_THAN, GREATER_THAN_EQUALS, LESS_THAN_EQUALS)

### Compatibility
* Compatibility `string` (values: NONE, DISABLED, BACKWARD, BACKWARD_ALL, FORWARD, FORWARD_ALL, FULL, FULL_ALL)

### ConcurrentModificationException


### ConcurrentRunsExceededException


### Condition
* Condition `object`: Defines a condition under which a trigger fires.
  * CrawlState
  * CrawlerName
  * JobName
  * LogicalOperator
  * State

### ConditionCheckFailureException


### ConditionList
* ConditionList `array`
  * items [Condition](#condition)

### ConflictException


### ConfusionMatrix
* ConfusionMatrix `object`: <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p> <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
  * NumFalseNegatives
  * NumFalsePositives
  * NumTrueNegatives
  * NumTruePositives

### Connection
* Connection `object`: Defines a connection to a data source.
  * ConnectionProperties
  * ConnectionType
  * CreationTime
  * Description
  * LastUpdatedBy
  * LastUpdatedTime
  * MatchCriteria
    * items [NameString](#namestring)
  * Name
  * PhysicalConnectionRequirements
    * AvailabilityZone
    * SecurityGroupIdList
      * items [NameString](#namestring)
    * SubnetId

### ConnectionInput
* ConnectionInput `object`: A structure that is used to specify a connection to create or update.
  * ConnectionProperties **required**
  * ConnectionType **required**
  * Description
  * MatchCriteria
    * items [NameString](#namestring)
  * Name **required**
  * PhysicalConnectionRequirements
    * AvailabilityZone
    * SecurityGroupIdList
      * items [NameString](#namestring)
    * SubnetId

### ConnectionList
* ConnectionList `array`
  * items [Connection](#connection)

### ConnectionName
* ConnectionName `string`

### ConnectionPasswordEncryption
* ConnectionPasswordEncryption `object`: <p>The data structure used by the Data Catalog to encrypt the password as part of <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog encryption or only password encryption.</p> <p>When a <code>CreationConnection</code> request arrives containing a password, the Data Catalog first encrypts the password using your AWS KMS key. It then encrypts the whole connection object again if catalog encryption is also enabled.</p> <p>This encryption requires that you set AWS KMS key permissions to enable or restrict access on the password key according to your security requirements. For example, you might want only administrators to have decrypt permission on the password key.</p>
  * AwsKmsKeyId
  * ReturnConnectionPasswordEncrypted **required**

### ConnectionProperties
* ConnectionProperties `object`

### ConnectionPropertyKey
* ConnectionPropertyKey `string` (values: HOST, PORT, USERNAME, PASSWORD, ENCRYPTED_PASSWORD, JDBC_DRIVER_JAR_URI, JDBC_DRIVER_CLASS_NAME, JDBC_ENGINE, JDBC_ENGINE_VERSION, CONFIG_FILES, INSTANCE_ID, JDBC_CONNECTION_URL, JDBC_ENFORCE_SSL, CUSTOM_JDBC_CERT, SKIP_CUSTOM_JDBC_CERT_VALIDATION, CUSTOM_JDBC_CERT_STRING, CONNECTION_URL, KAFKA_BOOTSTRAP_SERVERS, KAFKA_SSL_ENABLED, KAFKA_CUSTOM_CERT, KAFKA_SKIP_CUSTOM_CERT_VALIDATION)

### ConnectionType
* ConnectionType `string` (values: JDBC, SFTP, MONGODB, KAFKA, NETWORK)

### ConnectionsList
* ConnectionsList `object`: Specifies the connections used by a job.
  * Connections
    * items [GenericString](#genericstring)

### Crawl
* Crawl `object`: The details of a crawl in the workflow.
  * CompletedOn
  * ErrorMessage
  * LogGroup
  * LogStream
  * StartedOn
  * State

### CrawlList
* CrawlList `array`
  * items [Crawl](#crawl)

### CrawlState
* CrawlState `string` (values: RUNNING, CANCELLING, CANCELLED, SUCCEEDED, FAILED)

### Crawler
* Crawler `object`: Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the AWS Glue Data Catalog.
  * Classifiers
    * items [NameString](#namestring)
  * Configuration
  * CrawlElapsedTime
  * CrawlerSecurityConfiguration
  * CreationTime
  * DatabaseName
  * Description
  * LastCrawl
    * ErrorMessage
    * LogGroup
    * LogStream
    * MessagePrefix
    * StartTime
    * Status
  * LastUpdated
  * LineageConfiguration
    * CrawlerLineageSettings
  * Name
  * RecrawlPolicy
    * RecrawlBehavior
  * Role
  * Schedule
    * ScheduleExpression
    * State
  * SchemaChangePolicy
    * DeleteBehavior
    * UpdateBehavior
  * State
  * TablePrefix
  * Targets
    * CatalogTargets
      * items [CatalogTarget](#catalogtarget)
    * DynamoDBTargets
      * items [DynamoDBTarget](#dynamodbtarget)
    * JdbcTargets
      * items [JdbcTarget](#jdbctarget)
    * MongoDBTargets
      * items [MongoDBTarget](#mongodbtarget)
    * S3Targets
      * items [S3Target](#s3target)
  * Version

### CrawlerConfiguration
* CrawlerConfiguration `string`

### CrawlerLineageSettings
* CrawlerLineageSettings `string` (values: ENABLE, DISABLE)

### CrawlerList
* CrawlerList `array`
  * items [Crawler](#crawler)

### CrawlerMetrics
* CrawlerMetrics `object`: Metrics for a specified crawler.
  * CrawlerName
  * LastRuntimeSeconds
  * MedianRuntimeSeconds
  * StillEstimating
  * TablesCreated
  * TablesDeleted
  * TablesUpdated
  * TimeLeftSeconds

### CrawlerMetricsList
* CrawlerMetricsList `array`
  * items [CrawlerMetrics](#crawlermetrics)

### CrawlerNameList
* CrawlerNameList `array`
  * items [NameString](#namestring)

### CrawlerNodeDetails
* CrawlerNodeDetails `object`: The details of a Crawler node present in the workflow.
  * Crawls
    * items [Crawl](#crawl)

### CrawlerNotRunningException


### CrawlerRunningException


### CrawlerSecurityConfiguration
* CrawlerSecurityConfiguration `string`

### CrawlerState
* CrawlerState `string` (values: READY, RUNNING, STOPPING)

### CrawlerStoppingException


### CrawlerTargets
* CrawlerTargets `object`: Specifies data stores to crawl.
  * CatalogTargets
    * items [CatalogTarget](#catalogtarget)
  * DynamoDBTargets
    * items [DynamoDBTarget](#dynamodbtarget)
  * JdbcTargets
    * items [JdbcTarget](#jdbctarget)
  * MongoDBTargets
    * items [MongoDBTarget](#mongodbtarget)
  * S3Targets
    * items [S3Target](#s3target)

### CreateClassifierRequest
* CreateClassifierRequest `object`
  * CsvClassifier
    * AllowSingleColumn
    * ContainsHeader
    * Delimiter
    * DisableValueTrimming
    * Header
      * items [NameString](#namestring)
    * Name **required**
    * QuoteSymbol
  * GrokClassifier
    * Classification **required**
    * CustomPatterns
    * GrokPattern **required**
    * Name **required**
  * JsonClassifier
    * JsonPath **required**
    * Name **required**
  * XMLClassifier
    * Classification **required**
    * Name **required**
    * RowTag

### CreateClassifierResponse
* CreateClassifierResponse `object`

### CreateConnectionRequest
* CreateConnectionRequest `object`
  * CatalogId
  * ConnectionInput **required**
    * ConnectionProperties **required**
    * ConnectionType **required**
    * Description
    * MatchCriteria
      * items [NameString](#namestring)
    * Name **required**
    * PhysicalConnectionRequirements
      * AvailabilityZone
      * SecurityGroupIdList
        * items [NameString](#namestring)
      * SubnetId

### CreateConnectionResponse
* CreateConnectionResponse `object`

### CreateCrawlerRequest
* CreateCrawlerRequest `object`
  * Classifiers
    * items [NameString](#namestring)
  * Configuration
  * CrawlerSecurityConfiguration
  * DatabaseName
  * Description
  * LineageConfiguration
    * CrawlerLineageSettings
  * Name **required**
  * RecrawlPolicy
    * RecrawlBehavior
  * Role **required**
  * Schedule
  * SchemaChangePolicy
    * DeleteBehavior
    * UpdateBehavior
  * TablePrefix
  * Tags
  * Targets **required**
    * CatalogTargets
      * items [CatalogTarget](#catalogtarget)
    * DynamoDBTargets
      * items [DynamoDBTarget](#dynamodbtarget)
    * JdbcTargets
      * items [JdbcTarget](#jdbctarget)
    * MongoDBTargets
      * items [MongoDBTarget](#mongodbtarget)
    * S3Targets
      * items [S3Target](#s3target)

### CreateCrawlerResponse
* CreateCrawlerResponse `object`

### CreateCsvClassifierRequest
* CreateCsvClassifierRequest `object`: Specifies a custom CSV classifier for <code>CreateClassifier</code> to create.
  * AllowSingleColumn
  * ContainsHeader
  * Delimiter
  * DisableValueTrimming
  * Header
    * items [NameString](#namestring)
  * Name **required**
  * QuoteSymbol

### CreateDatabaseRequest
* CreateDatabaseRequest `object`
  * CatalogId
  * DatabaseInput **required**
    * CreateTableDefaultPermissions
      * items [PrincipalPermissions](#principalpermissions)
    * Description
    * LocationUri
    * Name **required**
    * Parameters
    * TargetDatabase
      * CatalogId
      * DatabaseName

### CreateDatabaseResponse
* CreateDatabaseResponse `object`

### CreateDevEndpointRequest
* CreateDevEndpointRequest `object`
  * Arguments
  * EndpointName **required**
  * ExtraJarsS3Path
  * ExtraPythonLibsS3Path
  * GlueVersion
  * NumberOfNodes
  * NumberOfWorkers
  * PublicKey
  * PublicKeys
    * items [GenericString](#genericstring)
  * RoleArn **required**
  * SecurityConfiguration
  * SecurityGroupIds
    * items [GenericString](#genericstring)
  * SubnetId
  * Tags
  * WorkerType

### CreateDevEndpointResponse
* CreateDevEndpointResponse `object`
  * Arguments
  * AvailabilityZone
  * CreatedTimestamp
  * EndpointName
  * ExtraJarsS3Path
  * ExtraPythonLibsS3Path
  * FailureReason
  * GlueVersion
  * NumberOfNodes
  * NumberOfWorkers
  * RoleArn
  * SecurityConfiguration
  * SecurityGroupIds
    * items [GenericString](#genericstring)
  * Status
  * SubnetId
  * VpcId
  * WorkerType
  * YarnEndpointAddress
  * ZeppelinRemoteSparkInterpreterPort

### CreateGrokClassifierRequest
* CreateGrokClassifierRequest `object`: Specifies a <code>grok</code> classifier for <code>CreateClassifier</code> to create.
  * Classification **required**
  * CustomPatterns
  * GrokPattern **required**
  * Name **required**

### CreateJobRequest
* CreateJobRequest `object`
  * AllocatedCapacity
  * Command **required**
    * Name
    * PythonVersion
    * ScriptLocation
  * Connections
    * Connections
      * items [GenericString](#genericstring)
  * DefaultArguments
  * Description
  * ExecutionProperty
    * MaxConcurrentRuns
  * GlueVersion
  * LogUri
  * MaxCapacity
  * MaxRetries
  * Name **required**
  * NonOverridableArguments
  * NotificationProperty
    * NotifyDelayAfter
  * NumberOfWorkers
  * Role **required**
  * SecurityConfiguration
  * Tags
  * Timeout
  * WorkerType

### CreateJobResponse
* CreateJobResponse `object`
  * Name

### CreateJsonClassifierRequest
* CreateJsonClassifierRequest `object`: Specifies a JSON classifier for <code>CreateClassifier</code> to create.
  * JsonPath **required**
  * Name **required**

### CreateMLTransformRequest
* CreateMLTransformRequest `object`
  * Description
  * GlueVersion
  * InputRecordTables **required**
    * items [GlueTable](#gluetable)
  * MaxCapacity
  * MaxRetries
  * Name **required**
  * NumberOfWorkers
  * Parameters **required**
    * FindMatchesParameters
      * AccuracyCostTradeoff
      * EnforceProvidedLabels
      * PrecisionRecallTradeoff
      * PrimaryKeyColumnName
    * TransformType **required**
  * Role **required**
  * Tags
  * Timeout
  * TransformEncryption
    * MlUserDataEncryption
      * KmsKeyId
      * MlUserDataEncryptionMode **required**
    * TaskRunSecurityConfigurationName
  * WorkerType

### CreateMLTransformResponse
* CreateMLTransformResponse `object`
  * TransformId

### CreatePartitionIndexRequest
* CreatePartitionIndexRequest `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionIndex **required**
    * IndexName **required**
    * Keys **required**
      * items [NameString](#namestring)
  * TableName **required**

### CreatePartitionIndexResponse
* CreatePartitionIndexResponse `object`

### CreatePartitionRequest
* CreatePartitionRequest `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionInput **required**
    * LastAccessTime
    * LastAnalyzedTime
    * Parameters
    * StorageDescriptor
      * BucketColumns
        * items [NameString](#namestring)
      * Columns
        * items [Column](#column)
      * Compressed
      * InputFormat
      * Location
      * NumberOfBuckets
      * OutputFormat
      * Parameters
      * SchemaReference
        * SchemaId
          * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
          * SchemaArn [GlueResourceArn](#glueresourcearn)
          * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
        * SchemaVersionId
        * SchemaVersionNumber
      * SerdeInfo
        * Name
        * Parameters
        * SerializationLibrary
      * SkewedInfo
        * SkewedColumnNames
          * items [NameString](#namestring)
        * SkewedColumnValueLocationMaps
        * SkewedColumnValues
          * items [ColumnValuesString](#columnvaluesstring)
      * SortColumns
        * items [Order](#order)
      * StoredAsSubDirectories
    * Values
      * items [ValueString](#valuestring)
  * TableName **required**

### CreatePartitionResponse
* CreatePartitionResponse `object`

### CreateRegistryInput
* CreateRegistryInput `object`
  * Description
  * RegistryName **required**
  * Tags

### CreateRegistryResponse
* CreateRegistryResponse `object`
  * Description
  * RegistryArn
  * RegistryName
  * Tags

### CreateSchemaInput
* CreateSchemaInput `object`
  * Compatibility
  * DataFormat **required**
  * Description
  * RegistryId
    * RegistryArn
    * RegistryName
  * SchemaDefinition
  * SchemaName **required**
  * Tags

### CreateSchemaResponse
* CreateSchemaResponse `object`
  * Compatibility
  * DataFormat
  * Description
  * LatestSchemaVersion
  * NextSchemaVersion
  * RegistryArn
  * RegistryName
  * SchemaArn
  * SchemaCheckpoint
  * SchemaName
  * SchemaStatus
  * SchemaVersionId
  * SchemaVersionStatus
  * Tags

### CreateScriptRequest
* CreateScriptRequest `object`
  * DagEdges
    * items [CodeGenEdge](#codegenedge)
  * DagNodes
    * items [CodeGenNode](#codegennode)
  * Language

### CreateScriptResponse
* CreateScriptResponse `object`
  * PythonScript
  * ScalaCode

### CreateSecurityConfigurationRequest
* CreateSecurityConfigurationRequest `object`
  * EncryptionConfiguration **required**
    * CloudWatchEncryption
      * CloudWatchEncryptionMode
      * KmsKeyArn
    * JobBookmarksEncryption
      * JobBookmarksEncryptionMode
      * KmsKeyArn
    * S3Encryption
      * items [S3Encryption](#s3encryption)
  * Name **required**

### CreateSecurityConfigurationResponse
* CreateSecurityConfigurationResponse `object`
  * CreatedTimestamp
  * Name

### CreateTableRequest
* CreateTableRequest `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionIndexes
    * items [PartitionIndex](#partitionindex)
  * TableInput **required**
    * Description
    * LastAccessTime
    * LastAnalyzedTime
    * Name **required**
    * Owner
    * Parameters
    * PartitionKeys
      * items [Column](#column)
    * Retention
    * StorageDescriptor
      * BucketColumns
        * items [NameString](#namestring)
      * Columns
        * items [Column](#column)
      * Compressed
      * InputFormat
      * Location
      * NumberOfBuckets
      * OutputFormat
      * Parameters
      * SchemaReference
        * SchemaId
          * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
          * SchemaArn [GlueResourceArn](#glueresourcearn)
          * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
        * SchemaVersionId
        * SchemaVersionNumber
      * SerdeInfo
        * Name
        * Parameters
        * SerializationLibrary
      * SkewedInfo
        * SkewedColumnNames
          * items [NameString](#namestring)
        * SkewedColumnValueLocationMaps
        * SkewedColumnValues
          * items [ColumnValuesString](#columnvaluesstring)
      * SortColumns
        * items [Order](#order)
      * StoredAsSubDirectories
    * TableType
    * TargetTable
      * CatalogId
      * DatabaseName
      * Name
    * ViewExpandedText
    * ViewOriginalText

### CreateTableResponse
* CreateTableResponse `object`

### CreateTriggerRequest
* CreateTriggerRequest `object`
  * Actions **required**
    * items [Action](#action)
  * Description
  * Name **required**
  * Predicate
    * Conditions
      * items [Condition](#condition)
    * Logical
  * Schedule
  * StartOnCreation
  * Tags
  * Type **required**
  * WorkflowName

### CreateTriggerResponse
* CreateTriggerResponse `object`
  * Name

### CreateUserDefinedFunctionRequest
* CreateUserDefinedFunctionRequest `object`
  * CatalogId
  * DatabaseName **required**
  * FunctionInput **required**
    * ClassName
    * FunctionName
    * OwnerName
    * OwnerType
    * ResourceUris
      * items [ResourceUri](#resourceuri)

### CreateUserDefinedFunctionResponse
* CreateUserDefinedFunctionResponse `object`

### CreateWorkflowRequest
* CreateWorkflowRequest `object`
  * DefaultRunProperties
  * Description
  * MaxConcurrentRuns
  * Name **required**
  * Tags

### CreateWorkflowResponse
* CreateWorkflowResponse `object`
  * Name

### CreateXMLClassifierRequest
* CreateXMLClassifierRequest `object`: Specifies an XML classifier for <code>CreateClassifier</code> to create.
  * Classification **required**
  * Name **required**
  * RowTag

### CreatedTimestamp
* CreatedTimestamp `string`

### CronExpression
* CronExpression `string`

### CsvClassifier
* CsvClassifier `object`: A classifier for custom <code>CSV</code> content.
  * AllowSingleColumn
  * ContainsHeader
  * CreationTime
  * Delimiter
  * DisableValueTrimming
  * Header
    * items [NameString](#namestring)
  * LastUpdated
  * Name **required**
  * QuoteSymbol
  * Version

### CsvColumnDelimiter
* CsvColumnDelimiter `string`

### CsvHeader
* CsvHeader `array`
  * items [NameString](#namestring)

### CsvHeaderOption
* CsvHeaderOption `string` (values: UNKNOWN, PRESENT, ABSENT)

### CsvQuoteSymbol
* CsvQuoteSymbol `string`

### CustomPatterns
* CustomPatterns `string`

### DagEdges
* DagEdges `array`
  * items [CodeGenEdge](#codegenedge)

### DagNodes
* DagNodes `array`
  * items [CodeGenNode](#codegennode)

### DataCatalogEncryptionSettings
* DataCatalogEncryptionSettings `object`: Contains configuration information for maintaining Data Catalog security.
  * ConnectionPasswordEncryption
    * AwsKmsKeyId
    * ReturnConnectionPasswordEncrypted **required**
  * EncryptionAtRest
    * CatalogEncryptionMode **required**
    * SseAwsKmsKeyId

### DataFormat
* DataFormat `string` (values: AVRO)

### DataLakePrincipal
* DataLakePrincipal `object`: The AWS Lake Formation principal.
  * DataLakePrincipalIdentifier

### DataLakePrincipalString
* DataLakePrincipalString `string`

### Database
* Database `object`: The <code>Database</code> object represents a logical grouping of tables that might reside in a Hive metastore or an RDBMS.
  * CatalogId
  * CreateTableDefaultPermissions
    * items [PrincipalPermissions](#principalpermissions)
  * CreateTime
  * Description
  * LocationUri
  * Name **required**
  * Parameters
  * TargetDatabase
    * CatalogId
    * DatabaseName

### DatabaseIdentifier
* DatabaseIdentifier `object`: A structure that describes a target database for resource linking.
  * CatalogId
  * DatabaseName

### DatabaseInput
* DatabaseInput `object`: The structure used to create or update a database.
  * CreateTableDefaultPermissions
    * items [PrincipalPermissions](#principalpermissions)
  * Description
  * LocationUri
  * Name **required**
  * Parameters
  * TargetDatabase
    * CatalogId
    * DatabaseName

### DatabaseList
* DatabaseList `array`
  * items [Database](#database)

### DatabaseName
* DatabaseName `string`

### DateColumnStatisticsData
* DateColumnStatisticsData `object`: Defines column statistics supported for timestamp data columns.
  * MaximumValue
  * MinimumValue
  * NumberOfDistinctValues **required**
  * NumberOfNulls **required**

### DecimalColumnStatisticsData
* DecimalColumnStatisticsData `object`: Defines column statistics supported for fixed-point number data columns.
  * MaximumValue
    * Scale **required**
    * UnscaledValue **required**
  * MinimumValue
    * Scale **required**
    * UnscaledValue **required**
  * NumberOfDistinctValues **required**
  * NumberOfNulls **required**

### DecimalNumber
* DecimalNumber `object`: Contains a numeric value in decimal format.
  * Scale **required**
  * UnscaledValue **required**

### DeleteBehavior
* DeleteBehavior `string` (values: LOG, DELETE_FROM_DATABASE, DEPRECATE_IN_DATABASE)

### DeleteClassifierRequest
* DeleteClassifierRequest `object`
  * Name **required**

### DeleteClassifierResponse
* DeleteClassifierResponse `object`

### DeleteColumnStatisticsForPartitionRequest
* DeleteColumnStatisticsForPartitionRequest `object`
  * CatalogId
  * ColumnName **required**
  * DatabaseName **required**
  * PartitionValues **required**
    * items [ValueString](#valuestring)
  * TableName **required**

### DeleteColumnStatisticsForPartitionResponse
* DeleteColumnStatisticsForPartitionResponse `object`

### DeleteColumnStatisticsForTableRequest
* DeleteColumnStatisticsForTableRequest `object`
  * CatalogId
  * ColumnName **required**
  * DatabaseName **required**
  * TableName **required**

### DeleteColumnStatisticsForTableResponse
* DeleteColumnStatisticsForTableResponse `object`

### DeleteConnectionNameList
* DeleteConnectionNameList `array`
  * items [NameString](#namestring)

### DeleteConnectionRequest
* DeleteConnectionRequest `object`
  * CatalogId
  * ConnectionName **required**

### DeleteConnectionResponse
* DeleteConnectionResponse `object`

### DeleteCrawlerRequest
* DeleteCrawlerRequest `object`
  * Name **required**

### DeleteCrawlerResponse
* DeleteCrawlerResponse `object`

### DeleteDatabaseRequest
* DeleteDatabaseRequest `object`
  * CatalogId
  * Name **required**

### DeleteDatabaseResponse
* DeleteDatabaseResponse `object`

### DeleteDevEndpointRequest
* DeleteDevEndpointRequest `object`
  * EndpointName **required**

### DeleteDevEndpointResponse
* DeleteDevEndpointResponse `object`

### DeleteJobRequest
* DeleteJobRequest `object`
  * JobName **required**

### DeleteJobResponse
* DeleteJobResponse `object`
  * JobName

### DeleteMLTransformRequest
* DeleteMLTransformRequest `object`
  * TransformId **required**

### DeleteMLTransformResponse
* DeleteMLTransformResponse `object`
  * TransformId

### DeletePartitionIndexRequest
* DeletePartitionIndexRequest `object`
  * CatalogId
  * DatabaseName **required**
  * IndexName **required**
  * TableName **required**

### DeletePartitionIndexResponse
* DeletePartitionIndexResponse `object`

### DeletePartitionRequest
* DeletePartitionRequest `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionValues **required**
    * items [ValueString](#valuestring)
  * TableName **required**

### DeletePartitionResponse
* DeletePartitionResponse `object`

### DeleteRegistryInput
* DeleteRegistryInput `object`
  * RegistryId **required**
    * RegistryArn
    * RegistryName

### DeleteRegistryResponse
* DeleteRegistryResponse `object`
  * RegistryArn
  * RegistryName
  * Status

### DeleteResourcePolicyRequest
* DeleteResourcePolicyRequest `object`
  * PolicyHashCondition
  * ResourceArn

### DeleteResourcePolicyResponse
* DeleteResourcePolicyResponse `object`

### DeleteSchemaInput
* DeleteSchemaInput `object`
  * SchemaId **required**
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)

### DeleteSchemaResponse
* DeleteSchemaResponse `object`
  * SchemaArn
  * SchemaName
  * Status

### DeleteSchemaVersionsInput
* DeleteSchemaVersionsInput `object`
  * SchemaId **required**
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
  * Versions **required**

### DeleteSchemaVersionsResponse
* DeleteSchemaVersionsResponse `object`
  * SchemaVersionErrors
    * items [SchemaVersionErrorItem](#schemaversionerroritem)

### DeleteSecurityConfigurationRequest
* DeleteSecurityConfigurationRequest `object`
  * Name **required**

### DeleteSecurityConfigurationResponse
* DeleteSecurityConfigurationResponse `object`

### DeleteTableRequest
* DeleteTableRequest `object`
  * CatalogId
  * DatabaseName **required**
  * Name **required**

### DeleteTableResponse
* DeleteTableResponse `object`

### DeleteTableVersionRequest
* DeleteTableVersionRequest `object`
  * CatalogId
  * DatabaseName **required**
  * TableName **required**
  * VersionId **required**

### DeleteTableVersionResponse
* DeleteTableVersionResponse `object`

### DeleteTriggerRequest
* DeleteTriggerRequest `object`
  * Name **required**

### DeleteTriggerResponse
* DeleteTriggerResponse `object`
  * Name

### DeleteUserDefinedFunctionRequest
* DeleteUserDefinedFunctionRequest `object`
  * CatalogId
  * DatabaseName **required**
  * FunctionName **required**

### DeleteUserDefinedFunctionResponse
* DeleteUserDefinedFunctionResponse `object`

### DeleteWorkflowRequest
* DeleteWorkflowRequest `object`
  * Name **required**

### DeleteWorkflowResponse
* DeleteWorkflowResponse `object`
  * Name

### DescriptionString
* DescriptionString `string`

### DescriptionStringRemovable
* DescriptionStringRemovable `string`

### DevEndpoint
* DevEndpoint `object`: A development endpoint where a developer can remotely debug extract, transform, and load (ETL) scripts.
  * Arguments
  * AvailabilityZone
  * CreatedTimestamp
  * EndpointName
  * ExtraJarsS3Path
  * ExtraPythonLibsS3Path
  * FailureReason
  * GlueVersion
  * LastModifiedTimestamp
  * LastUpdateStatus
  * NumberOfNodes
  * NumberOfWorkers
  * PrivateAddress
  * PublicAddress
  * PublicKey
  * PublicKeys
    * items [GenericString](#genericstring)
  * RoleArn
  * SecurityConfiguration
  * SecurityGroupIds
    * items [GenericString](#genericstring)
  * Status
  * SubnetId
  * VpcId
  * WorkerType
  * YarnEndpointAddress
  * ZeppelinRemoteSparkInterpreterPort

### DevEndpointCustomLibraries
* DevEndpointCustomLibraries `object`: Custom libraries to be loaded into a development endpoint.
  * ExtraJarsS3Path
  * ExtraPythonLibsS3Path

### DevEndpointList
* DevEndpointList `array`
  * items [DevEndpoint](#devendpoint)

### DevEndpointNameList
* DevEndpointNameList `array`
  * items [NameString](#namestring)

### DevEndpointNames
* DevEndpointNames `array`
  * items [GenericString](#genericstring)

### Double
* Double `number`

### DoubleColumnStatisticsData
* DoubleColumnStatisticsData `object`: Defines column statistics supported for floating-point number data columns.
  * MaximumValue
  * MinimumValue
  * NumberOfDistinctValues **required**
  * NumberOfNulls **required**

### DynamoDBTarget
* DynamoDBTarget `object`: Specifies an Amazon DynamoDB table to crawl.
  * Path
  * scanAll
  * scanRate

### DynamoDBTargetList
* DynamoDBTargetList `array`
  * items [DynamoDBTarget](#dynamodbtarget)

### Edge
* Edge `object`: An edge represents a directed connection between two AWS Glue components that are part of the workflow the edge belongs to.
  * DestinationId
  * SourceId

### EdgeList
* EdgeList `array`
  * items [Edge](#edge)

### EnableHybridValues
* EnableHybridValues `string` (values: TRUE, FALSE)

### EncryptionAtRest
* EncryptionAtRest `object`: Specifies the encryption-at-rest configuration for the Data Catalog.
  * CatalogEncryptionMode **required**
  * SseAwsKmsKeyId

### EncryptionConfiguration
* EncryptionConfiguration `object`: Specifies an encryption configuration.
  * CloudWatchEncryption
    * CloudWatchEncryptionMode
    * KmsKeyArn
  * JobBookmarksEncryption
    * JobBookmarksEncryptionMode
    * KmsKeyArn
  * S3Encryption
    * items [S3Encryption](#s3encryption)

### EntityNotFoundException


### ErrorByName
* ErrorByName `object`

### ErrorCodeString
* ErrorCodeString `string`

### ErrorDetail
* ErrorDetail `object`: Contains details about an error.
  * ErrorCode
  * ErrorMessage

### ErrorDetails
* ErrorDetails `object`: An object containing error details.
  * ErrorCode
  * ErrorMessage

### ErrorMessageString
* ErrorMessageString `string`

### ErrorString
* ErrorString `string`

### EvaluationMetrics
* EvaluationMetrics `object`: Evaluation metrics provide an estimate of the quality of your machine learning transform.
  * FindMatchesMetrics
    * AreaUnderPRCurve
    * ConfusionMatrix
      * NumFalseNegatives
      * NumFalsePositives
      * NumTrueNegatives
      * NumTruePositives
    * F1
    * Precision
    * Recall
  * TransformType **required**

### ExecutionProperty
* ExecutionProperty `object`: An execution property of a job.
  * MaxConcurrentRuns

### ExecutionTime
* ExecutionTime `integer`

### ExistCondition
* ExistCondition `string` (values: MUST_EXIST, NOT_EXIST, NONE)

### ExportLabelsTaskRunProperties
* ExportLabelsTaskRunProperties `object`: Specifies configuration properties for an exporting labels task run.
  * OutputS3Path

### FieldType
* FieldType `string`

### FilterString
* FilterString `string`

### FindMatchesMetrics
* FindMatchesMetrics `object`: The evaluation metrics for the find matches algorithm. The quality of your machine learning transform is measured by getting your transform to predict some matches and comparing the results to known matches from the same dataset. The quality metrics are based on a subset of your data, so they are not precise.
  * AreaUnderPRCurve
  * ConfusionMatrix
    * NumFalseNegatives
    * NumFalsePositives
    * NumTrueNegatives
    * NumTruePositives
  * F1
  * Precision
  * Recall

### FindMatchesParameters
* FindMatchesParameters `object`: The parameters to configure the find matches transform.
  * AccuracyCostTradeoff
  * EnforceProvidedLabels
  * PrecisionRecallTradeoff
  * PrimaryKeyColumnName

### FindMatchesTaskRunProperties
* FindMatchesTaskRunProperties `object`: Specifies configuration properties for a Find Matches task run.
  * JobId
  * JobName
  * JobRunId

### FormatString
* FormatString `string`

### GenericBoundedDouble
* GenericBoundedDouble `number`

### GenericMap
* GenericMap `object`

### GenericString
* GenericString `string`

### GetCatalogImportStatusRequest
* GetCatalogImportStatusRequest `object`
  * CatalogId

### GetCatalogImportStatusResponse
* GetCatalogImportStatusResponse `object`
  * ImportStatus
    * ImportCompleted
    * ImportTime
    * ImportedBy

### GetClassifierRequest
* GetClassifierRequest `object`
  * Name **required**

### GetClassifierResponse
* GetClassifierResponse `object`
  * Classifier
    * CsvClassifier
      * AllowSingleColumn
      * ContainsHeader
      * CreationTime
      * Delimiter
      * DisableValueTrimming
      * Header
        * items [NameString](#namestring)
      * LastUpdated
      * Name **required**
      * QuoteSymbol
      * Version
    * GrokClassifier
      * Classification **required**
      * CreationTime
      * CustomPatterns
      * GrokPattern **required**
      * LastUpdated
      * Name **required**
      * Version
    * JsonClassifier
      * CreationTime
      * JsonPath **required**
      * LastUpdated
      * Name **required**
      * Version
    * XMLClassifier
      * Classification **required**
      * CreationTime
      * LastUpdated
      * Name **required**
      * RowTag
      * Version

### GetClassifiersRequest
* GetClassifiersRequest `object`
  * MaxResults
  * NextToken

### GetClassifiersResponse
* GetClassifiersResponse `object`
  * Classifiers
    * items [Classifier](#classifier)
  * NextToken

### GetColumnNamesList
* GetColumnNamesList `array`
  * items [NameString](#namestring)

### GetColumnStatisticsForPartitionRequest
* GetColumnStatisticsForPartitionRequest `object`
  * CatalogId
  * ColumnNames **required**
    * items [NameString](#namestring)
  * DatabaseName **required**
  * PartitionValues **required**
    * items [ValueString](#valuestring)
  * TableName **required**

### GetColumnStatisticsForPartitionResponse
* GetColumnStatisticsForPartitionResponse `object`
  * ColumnStatisticsList
    * items [ColumnStatistics](#columnstatistics)
  * Errors
    * items [ColumnError](#columnerror)

### GetColumnStatisticsForTableRequest
* GetColumnStatisticsForTableRequest `object`
  * CatalogId
  * ColumnNames **required**
    * items [NameString](#namestring)
  * DatabaseName **required**
  * TableName **required**

### GetColumnStatisticsForTableResponse
* GetColumnStatisticsForTableResponse `object`
  * ColumnStatisticsList
    * items [ColumnStatistics](#columnstatistics)
  * Errors
    * items [ColumnError](#columnerror)

### GetConnectionRequest
* GetConnectionRequest `object`
  * CatalogId
  * HidePassword
  * Name **required**

### GetConnectionResponse
* GetConnectionResponse `object`
  * Connection
    * ConnectionProperties
    * ConnectionType
    * CreationTime
    * Description
    * LastUpdatedBy
    * LastUpdatedTime
    * MatchCriteria
      * items [NameString](#namestring)
    * Name
    * PhysicalConnectionRequirements
      * AvailabilityZone
      * SecurityGroupIdList
        * items [NameString](#namestring)
      * SubnetId

### GetConnectionsFilter
* GetConnectionsFilter `object`: Filters the connection definitions that are returned by the <code>GetConnections</code> API operation.
  * ConnectionType
  * MatchCriteria
    * items [NameString](#namestring)

### GetConnectionsRequest
* GetConnectionsRequest `object`
  * CatalogId
  * Filter
    * ConnectionType
    * MatchCriteria
      * items [NameString](#namestring)
  * HidePassword
  * MaxResults
  * NextToken

### GetConnectionsResponse
* GetConnectionsResponse `object`
  * ConnectionList
    * items [Connection](#connection)
  * NextToken

### GetCrawlerMetricsRequest
* GetCrawlerMetricsRequest `object`
  * CrawlerNameList
    * items [NameString](#namestring)
  * MaxResults
  * NextToken

### GetCrawlerMetricsResponse
* GetCrawlerMetricsResponse `object`
  * CrawlerMetricsList
    * items [CrawlerMetrics](#crawlermetrics)
  * NextToken

### GetCrawlerRequest
* GetCrawlerRequest `object`
  * Name **required**

### GetCrawlerResponse
* GetCrawlerResponse `object`
  * Crawler
    * Classifiers
      * items [NameString](#namestring)
    * Configuration
    * CrawlElapsedTime
    * CrawlerSecurityConfiguration
    * CreationTime
    * DatabaseName
    * Description
    * LastCrawl
      * ErrorMessage
      * LogGroup
      * LogStream
      * MessagePrefix
      * StartTime
      * Status
    * LastUpdated
    * LineageConfiguration
      * CrawlerLineageSettings
    * Name
    * RecrawlPolicy
      * RecrawlBehavior
    * Role
    * Schedule
      * ScheduleExpression
      * State
    * SchemaChangePolicy
      * DeleteBehavior
      * UpdateBehavior
    * State
    * TablePrefix
    * Targets
      * CatalogTargets
        * items [CatalogTarget](#catalogtarget)
      * DynamoDBTargets
        * items [DynamoDBTarget](#dynamodbtarget)
      * JdbcTargets
        * items [JdbcTarget](#jdbctarget)
      * MongoDBTargets
        * items [MongoDBTarget](#mongodbtarget)
      * S3Targets
        * items [S3Target](#s3target)
    * Version

### GetCrawlersRequest
* GetCrawlersRequest `object`
  * MaxResults
  * NextToken

### GetCrawlersResponse
* GetCrawlersResponse `object`
  * Crawlers
    * items [Crawler](#crawler)
  * NextToken

### GetDataCatalogEncryptionSettingsRequest
* GetDataCatalogEncryptionSettingsRequest `object`
  * CatalogId

### GetDataCatalogEncryptionSettingsResponse
* GetDataCatalogEncryptionSettingsResponse `object`
  * DataCatalogEncryptionSettings
    * ConnectionPasswordEncryption
      * AwsKmsKeyId
      * ReturnConnectionPasswordEncrypted **required**
    * EncryptionAtRest
      * CatalogEncryptionMode **required**
      * SseAwsKmsKeyId

### GetDatabaseRequest
* GetDatabaseRequest `object`
  * CatalogId
  * Name **required**

### GetDatabaseResponse
* GetDatabaseResponse `object`
  * Database
    * CatalogId
    * CreateTableDefaultPermissions
      * items [PrincipalPermissions](#principalpermissions)
    * CreateTime
    * Description
    * LocationUri
    * Name **required**
    * Parameters
    * TargetDatabase
      * CatalogId
      * DatabaseName

### GetDatabasesRequest
* GetDatabasesRequest `object`
  * CatalogId
  * MaxResults
  * NextToken
  * ResourceShareType

### GetDatabasesResponse
* GetDatabasesResponse `object`
  * DatabaseList **required**
    * items [Database](#database)
  * NextToken

### GetDataflowGraphRequest
* GetDataflowGraphRequest `object`
  * PythonScript

### GetDataflowGraphResponse
* GetDataflowGraphResponse `object`
  * DagEdges
    * items [CodeGenEdge](#codegenedge)
  * DagNodes
    * items [CodeGenNode](#codegennode)

### GetDevEndpointRequest
* GetDevEndpointRequest `object`
  * EndpointName **required**

### GetDevEndpointResponse
* GetDevEndpointResponse `object`
  * DevEndpoint
    * Arguments
    * AvailabilityZone
    * CreatedTimestamp
    * EndpointName
    * ExtraJarsS3Path
    * ExtraPythonLibsS3Path
    * FailureReason
    * GlueVersion
    * LastModifiedTimestamp
    * LastUpdateStatus
    * NumberOfNodes
    * NumberOfWorkers
    * PrivateAddress
    * PublicAddress
    * PublicKey
    * PublicKeys
      * items [GenericString](#genericstring)
    * RoleArn
    * SecurityConfiguration
    * SecurityGroupIds
      * items [GenericString](#genericstring)
    * Status
    * SubnetId
    * VpcId
    * WorkerType
    * YarnEndpointAddress
    * ZeppelinRemoteSparkInterpreterPort

### GetDevEndpointsRequest
* GetDevEndpointsRequest `object`
  * MaxResults
  * NextToken

### GetDevEndpointsResponse
* GetDevEndpointsResponse `object`
  * DevEndpoints
    * items [DevEndpoint](#devendpoint)
  * NextToken

### GetJobBookmarkRequest
* GetJobBookmarkRequest `object`
  * JobName **required**
  * RunId

### GetJobBookmarkResponse
* GetJobBookmarkResponse `object`
  * JobBookmarkEntry
    * Attempt
    * JobBookmark
    * JobName
    * PreviousRunId
    * Run
    * RunId
    * Version

### GetJobRequest
* GetJobRequest `object`
  * JobName **required**

### GetJobResponse
* GetJobResponse `object`
  * Job
    * AllocatedCapacity
    * Command
      * Name
      * PythonVersion
      * ScriptLocation
    * Connections
      * Connections
        * items [GenericString](#genericstring)
    * CreatedOn
    * DefaultArguments
    * Description
    * ExecutionProperty
      * MaxConcurrentRuns
    * GlueVersion
    * LastModifiedOn
    * LogUri
    * MaxCapacity
    * MaxRetries
    * Name
    * NonOverridableArguments
    * NotificationProperty
      * NotifyDelayAfter
    * NumberOfWorkers
    * Role
    * SecurityConfiguration
    * Timeout
    * WorkerType

### GetJobRunRequest
* GetJobRunRequest `object`
  * JobName **required**
  * PredecessorsIncluded
  * RunId **required**

### GetJobRunResponse
* GetJobRunResponse `object`
  * JobRun
    * AllocatedCapacity
    * Arguments
    * Attempt
    * CompletedOn
    * ErrorMessage
    * ExecutionTime
    * GlueVersion
    * Id
    * JobName
    * JobRunState
    * LastModifiedOn
    * LogGroupName
    * MaxCapacity
    * NotificationProperty
      * NotifyDelayAfter
    * NumberOfWorkers
    * PredecessorRuns
      * items [Predecessor](#predecessor)
    * PreviousRunId
    * SecurityConfiguration
    * StartedOn
    * Timeout
    * TriggerName
    * WorkerType

### GetJobRunsRequest
* GetJobRunsRequest `object`
  * JobName **required**
  * MaxResults
  * NextToken

### GetJobRunsResponse
* GetJobRunsResponse `object`
  * JobRuns
    * items [JobRun](#jobrun)
  * NextToken

### GetJobsRequest
* GetJobsRequest `object`
  * MaxResults
  * NextToken

### GetJobsResponse
* GetJobsResponse `object`
  * Jobs
    * items [Job](#job)
  * NextToken

### GetMLTaskRunRequest
* GetMLTaskRunRequest `object`
  * TaskRunId **required**
  * TransformId **required**

### GetMLTaskRunResponse
* GetMLTaskRunResponse `object`
  * CompletedOn
  * ErrorString
  * ExecutionTime
  * LastModifiedOn
  * LogGroupName
  * Properties
    * ExportLabelsTaskRunProperties
      * OutputS3Path
    * FindMatchesTaskRunProperties
      * JobId
      * JobName
      * JobRunId
    * ImportLabelsTaskRunProperties
      * InputS3Path
      * Replace
    * LabelingSetGenerationTaskRunProperties
      * OutputS3Path
    * TaskType
  * StartedOn
  * Status
  * TaskRunId
  * TransformId

### GetMLTaskRunsRequest
* GetMLTaskRunsRequest `object`
  * Filter
    * StartedAfter
    * StartedBefore
    * Status
    * TaskRunType
  * MaxResults
  * NextToken
  * Sort
    * Column **required**
    * SortDirection **required**
  * TransformId **required**

### GetMLTaskRunsResponse
* GetMLTaskRunsResponse `object`
  * NextToken
  * TaskRuns
    * items [TaskRun](#taskrun)

### GetMLTransformRequest
* GetMLTransformRequest `object`
  * TransformId **required**

### GetMLTransformResponse
* GetMLTransformResponse `object`
  * CreatedOn
  * Description
  * EvaluationMetrics
    * FindMatchesMetrics
      * AreaUnderPRCurve
      * ConfusionMatrix
        * NumFalseNegatives
        * NumFalsePositives
        * NumTrueNegatives
        * NumTruePositives
      * F1
      * Precision
      * Recall
    * TransformType **required**
  * GlueVersion
  * InputRecordTables
    * items [GlueTable](#gluetable)
  * LabelCount
  * LastModifiedOn
  * MaxCapacity
  * MaxRetries
  * Name
  * NumberOfWorkers
  * Parameters
    * FindMatchesParameters
      * AccuracyCostTradeoff
      * EnforceProvidedLabels
      * PrecisionRecallTradeoff
      * PrimaryKeyColumnName
    * TransformType **required**
  * Role
  * Schema
    * items [SchemaColumn](#schemacolumn)
  * Status
  * Timeout
  * TransformEncryption
    * MlUserDataEncryption
      * KmsKeyId
      * MlUserDataEncryptionMode **required**
    * TaskRunSecurityConfigurationName
  * TransformId
  * WorkerType

### GetMLTransformsRequest
* GetMLTransformsRequest `object`
  * Filter
    * CreatedAfter
    * CreatedBefore
    * GlueVersion
    * LastModifiedAfter
    * LastModifiedBefore
    * Name
    * Schema
      * items [SchemaColumn](#schemacolumn)
    * Status
    * TransformType
  * MaxResults
  * NextToken
  * Sort
    * Column **required**
    * SortDirection **required**

### GetMLTransformsResponse
* GetMLTransformsResponse `object`
  * NextToken
  * Transforms **required**
    * items [MLTransform](#mltransform)

### GetMappingRequest
* GetMappingRequest `object`
  * Location
    * DynamoDB
      * items [CodeGenNodeArg](#codegennodearg)
    * Jdbc
      * items [CodeGenNodeArg](#codegennodearg)
    * S3
      * items [CodeGenNodeArg](#codegennodearg)
  * Sinks
    * items [CatalogEntry](#catalogentry)
  * Source **required**
    * DatabaseName **required**
    * TableName **required**

### GetMappingResponse
* GetMappingResponse `object`
  * Mapping **required**
    * items [MappingEntry](#mappingentry)

### GetPartitionIndexesRequest
* GetPartitionIndexesRequest `object`
  * CatalogId
  * DatabaseName **required**
  * NextToken
  * TableName **required**

### GetPartitionIndexesResponse
* GetPartitionIndexesResponse `object`
  * NextToken
  * PartitionIndexDescriptorList
    * items [PartitionIndexDescriptor](#partitionindexdescriptor)

### GetPartitionRequest
* GetPartitionRequest `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionValues **required**
    * items [ValueString](#valuestring)
  * TableName **required**

### GetPartitionResponse
* GetPartitionResponse `object`
  * Partition
    * CatalogId
    * CreationTime
    * DatabaseName
    * LastAccessTime
    * LastAnalyzedTime
    * Parameters
    * StorageDescriptor
      * BucketColumns
        * items [NameString](#namestring)
      * Columns
        * items [Column](#column)
      * Compressed
      * InputFormat
      * Location
      * NumberOfBuckets
      * OutputFormat
      * Parameters
      * SchemaReference
        * SchemaId
          * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
          * SchemaArn [GlueResourceArn](#glueresourcearn)
          * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
        * SchemaVersionId
        * SchemaVersionNumber
      * SerdeInfo
        * Name
        * Parameters
        * SerializationLibrary
      * SkewedInfo
        * SkewedColumnNames
          * items [NameString](#namestring)
        * SkewedColumnValueLocationMaps
        * SkewedColumnValues
          * items [ColumnValuesString](#columnvaluesstring)
      * SortColumns
        * items [Order](#order)
      * StoredAsSubDirectories
    * TableName
    * Values
      * items [ValueString](#valuestring)

### GetPartitionsRequest
* GetPartitionsRequest `object`
  * CatalogId
  * DatabaseName **required**
  * Expression
  * MaxResults
  * NextToken
  * Segment
    * SegmentNumber **required**
    * TotalSegments **required**
  * TableName **required**

### GetPartitionsResponse
* GetPartitionsResponse `object`
  * NextToken
  * Partitions
    * items [Partition](#partition)

### GetPlanRequest
* GetPlanRequest `object`
  * AdditionalPlanOptionsMap
  * Language
  * Location
    * DynamoDB
      * items [CodeGenNodeArg](#codegennodearg)
    * Jdbc
      * items [CodeGenNodeArg](#codegennodearg)
    * S3
      * items [CodeGenNodeArg](#codegennodearg)
  * Mapping **required**
    * items [MappingEntry](#mappingentry)
  * Sinks
    * items [CatalogEntry](#catalogentry)
  * Source **required**
    * DatabaseName **required**
    * TableName **required**

### GetPlanResponse
* GetPlanResponse `object`
  * PythonScript
  * ScalaCode

### GetRegistryInput
* GetRegistryInput `object`
  * RegistryId **required**
    * RegistryArn
    * RegistryName

### GetRegistryResponse
* GetRegistryResponse `object`
  * CreatedTime
  * Description
  * RegistryArn
  * RegistryName
  * Status
  * UpdatedTime

### GetResourcePoliciesRequest
* GetResourcePoliciesRequest `object`
  * MaxResults
  * NextToken

### GetResourcePoliciesResponse
* GetResourcePoliciesResponse `object`
  * GetResourcePoliciesResponseList
    * items [GluePolicy](#gluepolicy)
  * NextToken

### GetResourcePoliciesResponseList
* GetResourcePoliciesResponseList `array`
  * items [GluePolicy](#gluepolicy)

### GetResourcePolicyRequest
* GetResourcePolicyRequest `object`
  * ResourceArn

### GetResourcePolicyResponse
* GetResourcePolicyResponse `object`
  * CreateTime
  * PolicyHash
  * PolicyInJson
  * UpdateTime

### GetSchemaByDefinitionInput
* GetSchemaByDefinitionInput `object`
  * SchemaDefinition **required**
  * SchemaId **required**
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)

### GetSchemaByDefinitionResponse
* GetSchemaByDefinitionResponse `object`
  * CreatedTime
  * DataFormat
  * SchemaArn
  * SchemaVersionId
  * Status

### GetSchemaInput
* GetSchemaInput `object`
  * SchemaId **required**
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)

### GetSchemaResponse
* GetSchemaResponse `object`
  * Compatibility
  * CreatedTime
  * DataFormat
  * Description
  * LatestSchemaVersion
  * NextSchemaVersion
  * RegistryArn
  * RegistryName
  * SchemaArn
  * SchemaCheckpoint
  * SchemaName
  * SchemaStatus
  * UpdatedTime

### GetSchemaVersionInput
* GetSchemaVersionInput `object`
  * SchemaId
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
  * SchemaVersionId
  * SchemaVersionNumber
    * LatestVersion [LatestSchemaVersionBoolean](#latestschemaversionboolean)
    * VersionNumber [VersionLongNumber](#versionlongnumber)

### GetSchemaVersionResponse
* GetSchemaVersionResponse `object`
  * CreatedTime
  * DataFormat
  * SchemaArn
  * SchemaDefinition
  * SchemaVersionId
  * Status
  * VersionNumber

### GetSchemaVersionsDiffInput
* GetSchemaVersionsDiffInput `object`
  * FirstSchemaVersionNumber **required**
    * LatestVersion [LatestSchemaVersionBoolean](#latestschemaversionboolean)
    * VersionNumber [VersionLongNumber](#versionlongnumber)
  * SchemaDiffType **required**
  * SchemaId **required**
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
  * SecondSchemaVersionNumber **required**
    * LatestVersion [LatestSchemaVersionBoolean](#latestschemaversionboolean)
    * VersionNumber [VersionLongNumber](#versionlongnumber)

### GetSchemaVersionsDiffResponse
* GetSchemaVersionsDiffResponse `object`
  * Diff

### GetSecurityConfigurationRequest
* GetSecurityConfigurationRequest `object`
  * Name **required**

### GetSecurityConfigurationResponse
* GetSecurityConfigurationResponse `object`
  * SecurityConfiguration
    * CreatedTimeStamp
    * EncryptionConfiguration
      * CloudWatchEncryption
        * CloudWatchEncryptionMode
        * KmsKeyArn
      * JobBookmarksEncryption
        * JobBookmarksEncryptionMode
        * KmsKeyArn
      * S3Encryption
        * items [S3Encryption](#s3encryption)
    * Name

### GetSecurityConfigurationsRequest
* GetSecurityConfigurationsRequest `object`
  * MaxResults
  * NextToken

### GetSecurityConfigurationsResponse
* GetSecurityConfigurationsResponse `object`
  * NextToken
  * SecurityConfigurations
    * items [SecurityConfiguration](#securityconfiguration)

### GetTableRequest
* GetTableRequest `object`
  * CatalogId
  * DatabaseName **required**
  * Name **required**

### GetTableResponse
* GetTableResponse `object`
  * Table
    * CatalogId
    * CreateTime
    * CreatedBy
    * DatabaseName
    * Description
    * IsRegisteredWithLakeFormation
    * LastAccessTime
    * LastAnalyzedTime
    * Name **required**
    * Owner
    * Parameters
    * PartitionKeys
      * items [Column](#column)
    * Retention
    * StorageDescriptor
      * BucketColumns
        * items [NameString](#namestring)
      * Columns
        * items [Column](#column)
      * Compressed
      * InputFormat
      * Location
      * NumberOfBuckets
      * OutputFormat
      * Parameters
      * SchemaReference
        * SchemaId
          * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
          * SchemaArn [GlueResourceArn](#glueresourcearn)
          * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
        * SchemaVersionId
        * SchemaVersionNumber
      * SerdeInfo
        * Name
        * Parameters
        * SerializationLibrary
      * SkewedInfo
        * SkewedColumnNames
          * items [NameString](#namestring)
        * SkewedColumnValueLocationMaps
        * SkewedColumnValues
          * items [ColumnValuesString](#columnvaluesstring)
      * SortColumns
        * items [Order](#order)
      * StoredAsSubDirectories
    * TableType
    * TargetTable
      * CatalogId
      * DatabaseName
      * Name
    * UpdateTime
    * ViewExpandedText
    * ViewOriginalText

### GetTableVersionRequest
* GetTableVersionRequest `object`
  * CatalogId
  * DatabaseName **required**
  * TableName **required**
  * VersionId

### GetTableVersionResponse
* GetTableVersionResponse `object`
  * TableVersion
    * Table
      * CatalogId
      * CreateTime
      * CreatedBy
      * DatabaseName
      * Description
      * IsRegisteredWithLakeFormation
      * LastAccessTime
      * LastAnalyzedTime
      * Name **required**
      * Owner
      * Parameters
      * PartitionKeys
        * items [Column](#column)
      * Retention
      * StorageDescriptor
        * BucketColumns
          * items [NameString](#namestring)
        * Columns
          * items [Column](#column)
        * Compressed
        * InputFormat
        * Location
        * NumberOfBuckets
        * OutputFormat
        * Parameters
        * SchemaReference
          * SchemaId
          * SchemaVersionId
          * SchemaVersionNumber
        * SerdeInfo
          * Name
          * Parameters
          * SerializationLibrary
        * SkewedInfo
          * SkewedColumnNames
          * SkewedColumnValueLocationMaps
          * SkewedColumnValues
        * SortColumns
          * items [Order](#order)
        * StoredAsSubDirectories
      * TableType
      * TargetTable
        * CatalogId
        * DatabaseName
        * Name
      * UpdateTime
      * ViewExpandedText
      * ViewOriginalText
    * VersionId

### GetTableVersionsList
* GetTableVersionsList `array`
  * items [TableVersion](#tableversion)

### GetTableVersionsRequest
* GetTableVersionsRequest `object`
  * CatalogId
  * DatabaseName **required**
  * MaxResults
  * NextToken
  * TableName **required**

### GetTableVersionsResponse
* GetTableVersionsResponse `object`
  * NextToken
  * TableVersions
    * items [TableVersion](#tableversion)

### GetTablesRequest
* GetTablesRequest `object`
  * CatalogId
  * DatabaseName **required**
  * Expression
  * MaxResults
  * NextToken

### GetTablesResponse
* GetTablesResponse `object`
  * NextToken
  * TableList
    * items [Table](#table)

### GetTagsRequest
* GetTagsRequest `object`
  * ResourceArn **required**

### GetTagsResponse
* GetTagsResponse `object`
  * Tags

### GetTriggerRequest
* GetTriggerRequest `object`
  * Name **required**

### GetTriggerResponse
* GetTriggerResponse `object`
  * Trigger
    * Actions
      * items [Action](#action)
    * Description
    * Id
    * Name
    * Predicate
      * Conditions
        * items [Condition](#condition)
      * Logical
    * Schedule
    * State
    * Type
    * WorkflowName

### GetTriggersRequest
* GetTriggersRequest `object`
  * DependentJobName
  * MaxResults
  * NextToken

### GetTriggersResponse
* GetTriggersResponse `object`
  * NextToken
  * Triggers
    * items [Trigger](#trigger)

### GetUserDefinedFunctionRequest
* GetUserDefinedFunctionRequest `object`
  * CatalogId
  * DatabaseName **required**
  * FunctionName **required**

### GetUserDefinedFunctionResponse
* GetUserDefinedFunctionResponse `object`
  * UserDefinedFunction
    * CatalogId
    * ClassName
    * CreateTime
    * DatabaseName
    * FunctionName
    * OwnerName
    * OwnerType
    * ResourceUris
      * items [ResourceUri](#resourceuri)

### GetUserDefinedFunctionsRequest
* GetUserDefinedFunctionsRequest `object`
  * CatalogId
  * DatabaseName
  * MaxResults
  * NextToken
  * Pattern **required**

### GetUserDefinedFunctionsResponse
* GetUserDefinedFunctionsResponse `object`
  * NextToken
  * UserDefinedFunctions
    * items [UserDefinedFunction](#userdefinedfunction)

### GetWorkflowRequest
* GetWorkflowRequest `object`
  * IncludeGraph
  * Name **required**

### GetWorkflowResponse
* GetWorkflowResponse `object`
  * Workflow
    * CreatedOn
    * DefaultRunProperties
    * Description
    * Graph
      * Edges
        * items [Edge](#edge)
      * Nodes
        * items [Node](#node)
    * LastModifiedOn
    * LastRun
      * CompletedOn
      * ErrorMessage
      * Graph
        * Edges
          * items [Edge](#edge)
        * Nodes
          * items [Node](#node)
      * Name
      * PreviousRunId
      * StartedOn
      * Statistics
        * FailedActions
        * RunningActions
        * StoppedActions
        * SucceededActions
        * TimeoutActions
        * TotalActions
      * Status
      * WorkflowRunId
      * WorkflowRunProperties
    * MaxConcurrentRuns
    * Name

### GetWorkflowRunPropertiesRequest
* GetWorkflowRunPropertiesRequest `object`
  * Name **required**
  * RunId **required**

### GetWorkflowRunPropertiesResponse
* GetWorkflowRunPropertiesResponse `object`
  * RunProperties

### GetWorkflowRunRequest
* GetWorkflowRunRequest `object`
  * IncludeGraph
  * Name **required**
  * RunId **required**

### GetWorkflowRunResponse
* GetWorkflowRunResponse `object`
  * Run
    * CompletedOn
    * ErrorMessage
    * Graph
      * Edges
        * items [Edge](#edge)
      * Nodes
        * items [Node](#node)
    * Name
    * PreviousRunId
    * StartedOn
    * Statistics
      * FailedActions
      * RunningActions
      * StoppedActions
      * SucceededActions
      * TimeoutActions
      * TotalActions
    * Status
    * WorkflowRunId
    * WorkflowRunProperties

### GetWorkflowRunsRequest
* GetWorkflowRunsRequest `object`
  * IncludeGraph
  * MaxResults
  * Name **required**
  * NextToken

### GetWorkflowRunsResponse
* GetWorkflowRunsResponse `object`
  * NextToken
  * Runs
    * items [WorkflowRun](#workflowrun)

### GlueEncryptionException


### GluePolicy
* GluePolicy `object`: A structure for returning a resource policy.
  * CreateTime
  * PolicyHash
  * PolicyInJson
  * UpdateTime

### GlueResourceArn
* GlueResourceArn `string`

### GlueTable
* GlueTable `object`: The database and table in the AWS Glue Data Catalog that is used for input or output data.
  * CatalogId
  * ConnectionName
  * DatabaseName **required**
  * TableName **required**

### GlueTables
* GlueTables `array`
  * items [GlueTable](#gluetable)

### GlueVersionString
* GlueVersionString `string`

### GrokClassifier
* GrokClassifier `object`: A classifier that uses <code>grok</code> patterns.
  * Classification **required**
  * CreationTime
  * CustomPatterns
  * GrokPattern **required**
  * LastUpdated
  * Name **required**
  * Version

### GrokPattern
* GrokPattern `string`

### HashString
* HashString `string`

### IdString
* IdString `string`

### IdempotentParameterMismatchException


### IllegalWorkflowStateException


### ImportCatalogToGlueRequest
* ImportCatalogToGlueRequest `object`
  * CatalogId

### ImportCatalogToGlueResponse
* ImportCatalogToGlueResponse `object`

### ImportLabelsTaskRunProperties
* ImportLabelsTaskRunProperties `object`: Specifies configuration properties for an importing labels task run.
  * InputS3Path
  * Replace

### Integer
* Integer `integer`

### IntegerFlag
* IntegerFlag `integer`

### IntegerValue
* IntegerValue `integer`

### InternalServiceException


### InvalidInputException


### IsVersionValid
* IsVersionValid `boolean`

### JdbcTarget
* JdbcTarget `object`: Specifies a JDBC data store to crawl.
  * ConnectionName
  * Exclusions
    * items [Path](#path)
  * Path

### JdbcTargetList
* JdbcTargetList `array`
  * items [JdbcTarget](#jdbctarget)

### Job
* Job `object`: Specifies a job definition.
  * AllocatedCapacity
  * Command
    * Name
    * PythonVersion
    * ScriptLocation
  * Connections
    * Connections
      * items [GenericString](#genericstring)
  * CreatedOn
  * DefaultArguments
  * Description
  * ExecutionProperty
    * MaxConcurrentRuns
  * GlueVersion
  * LastModifiedOn
  * LogUri
  * MaxCapacity
  * MaxRetries
  * Name
  * NonOverridableArguments
  * NotificationProperty
    * NotifyDelayAfter
  * NumberOfWorkers
  * Role
  * SecurityConfiguration
  * Timeout
  * WorkerType

### JobBookmarkEntry
* JobBookmarkEntry `object`: Defines a point that a job can resume processing.
  * Attempt
  * JobBookmark
  * JobName
  * PreviousRunId
  * Run
  * RunId
  * Version

### JobBookmarksEncryption
* JobBookmarksEncryption `object`: Specifies how job bookmark data should be encrypted.
  * JobBookmarksEncryptionMode
  * KmsKeyArn

### JobBookmarksEncryptionMode
* JobBookmarksEncryptionMode `string` (values: DISABLED, CSE-KMS)

### JobCommand
* JobCommand `object`: Specifies code executed when a job is run.
  * Name
  * PythonVersion
  * ScriptLocation

### JobList
* JobList `array`
  * items [Job](#job)

### JobName
* JobName `string`

### JobNameList
* JobNameList `array`
  * items [NameString](#namestring)

### JobNodeDetails
* JobNodeDetails `object`: The details of a Job node present in the workflow.
  * JobRuns
    * items [JobRun](#jobrun)

### JobRun
* JobRun `object`: Contains information about a job run.
  * AllocatedCapacity
  * Arguments
  * Attempt
  * CompletedOn
  * ErrorMessage
  * ExecutionTime
  * GlueVersion
  * Id
  * JobName
  * JobRunState
  * LastModifiedOn
  * LogGroupName
  * MaxCapacity
  * NotificationProperty
    * NotifyDelayAfter
  * NumberOfWorkers
  * PredecessorRuns
    * items [Predecessor](#predecessor)
  * PreviousRunId
  * SecurityConfiguration
  * StartedOn
  * Timeout
  * TriggerName
  * WorkerType

### JobRunList
* JobRunList `array`
  * items [JobRun](#jobrun)

### JobRunState
* JobRunState `string` (values: STARTING, RUNNING, STOPPING, STOPPED, SUCCEEDED, FAILED, TIMEOUT)

### JobUpdate
* JobUpdate `object`: Specifies information used to update an existing job definition. The previous job definition is completely overwritten by this information.
  * AllocatedCapacity
  * Command
    * Name
    * PythonVersion
    * ScriptLocation
  * Connections
    * Connections
      * items [GenericString](#genericstring)
  * DefaultArguments
  * Description
  * ExecutionProperty
    * MaxConcurrentRuns
  * GlueVersion
  * LogUri
  * MaxCapacity
  * MaxRetries
  * NonOverridableArguments
  * NotificationProperty
    * NotifyDelayAfter
  * NumberOfWorkers
  * Role
  * SecurityConfiguration
  * Timeout
  * WorkerType

### JsonClassifier
* JsonClassifier `object`: A classifier for <code>JSON</code> content.
  * CreationTime
  * JsonPath **required**
  * LastUpdated
  * Name **required**
  * Version

### JsonPath
* JsonPath `string`

### JsonValue
* JsonValue `string`

### KeyList
* KeyList `array`
  * items [NameString](#namestring)

### KeySchemaElement
* KeySchemaElement `object`: A partition key pair consisting of a name and a type.
  * Name **required**
  * Type **required**

### KeySchemaElementList
* KeySchemaElementList `array`
  * items [KeySchemaElement](#keyschemaelement)

### KeyString
* KeyString `string`

### KmsKeyArn
* KmsKeyArn `string`

### LabelCount
* LabelCount `integer`

### LabelingSetGenerationTaskRunProperties
* LabelingSetGenerationTaskRunProperties `object`: Specifies configuration properties for a labeling set generation task run.
  * OutputS3Path

### Language
* Language `string` (values: PYTHON, SCALA)

### LastCrawlInfo
* LastCrawlInfo `object`: Status and error information about the most recent crawl.
  * ErrorMessage
  * LogGroup
  * LogStream
  * MessagePrefix
  * StartTime
  * Status

### LastCrawlStatus
* LastCrawlStatus `string` (values: SUCCEEDED, CANCELLED, FAILED)

### LatestSchemaVersionBoolean
* LatestSchemaVersionBoolean `boolean`

### LineageConfiguration
* LineageConfiguration `object`: Specifies data lineage configuration settings for the crawler.
  * CrawlerLineageSettings

### ListCrawlersRequest
* ListCrawlersRequest `object`
  * MaxResults
  * NextToken
  * Tags

### ListCrawlersResponse
* ListCrawlersResponse `object`
  * CrawlerNames
    * items [NameString](#namestring)
  * NextToken

### ListDevEndpointsRequest
* ListDevEndpointsRequest `object`
  * MaxResults
  * NextToken
  * Tags

### ListDevEndpointsResponse
* ListDevEndpointsResponse `object`
  * DevEndpointNames
    * items [NameString](#namestring)
  * NextToken

### ListJobsRequest
* ListJobsRequest `object`
  * MaxResults
  * NextToken
  * Tags

### ListJobsResponse
* ListJobsResponse `object`
  * JobNames
    * items [NameString](#namestring)
  * NextToken

### ListMLTransformsRequest
* ListMLTransformsRequest `object`
  * Filter
    * CreatedAfter
    * CreatedBefore
    * GlueVersion
    * LastModifiedAfter
    * LastModifiedBefore
    * Name
    * Schema
      * items [SchemaColumn](#schemacolumn)
    * Status
    * TransformType
  * MaxResults
  * NextToken
  * Sort
    * Column **required**
    * SortDirection **required**
  * Tags

### ListMLTransformsResponse
* ListMLTransformsResponse `object`
  * NextToken
  * TransformIds **required**
    * items [HashString](#hashstring)

### ListRegistriesInput
* ListRegistriesInput `object`
  * MaxResults
  * NextToken

### ListRegistriesResponse
* ListRegistriesResponse `object`
  * NextToken
  * Registries
    * items [RegistryListItem](#registrylistitem)

### ListSchemaVersionsInput
* ListSchemaVersionsInput `object`
  * MaxResults
  * NextToken
  * SchemaId **required**
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)

### ListSchemaVersionsResponse
* ListSchemaVersionsResponse `object`
  * NextToken
  * Schemas
    * items [SchemaVersionListItem](#schemaversionlistitem)

### ListSchemasInput
* ListSchemasInput `object`
  * MaxResults
  * NextToken
  * RegistryId
    * RegistryArn
    * RegistryName

### ListSchemasResponse
* ListSchemasResponse `object`
  * NextToken
  * Schemas
    * items [SchemaListItem](#schemalistitem)

### ListTriggersRequest
* ListTriggersRequest `object`
  * DependentJobName
  * MaxResults
  * NextToken
  * Tags

### ListTriggersResponse
* ListTriggersResponse `object`
  * NextToken
  * TriggerNames
    * items [NameString](#namestring)

### ListWorkflowsRequest
* ListWorkflowsRequest `object`
  * MaxResults
  * NextToken

### ListWorkflowsResponse
* ListWorkflowsResponse `object`
  * NextToken
  * Workflows
    * items [NameString](#namestring)

### Location
* Location `object`: The location of resources.
  * DynamoDB
    * items [CodeGenNodeArg](#codegennodearg)
  * Jdbc
    * items [CodeGenNodeArg](#codegennodearg)
  * S3
    * items [CodeGenNodeArg](#codegennodearg)

### LocationMap
* LocationMap `object`

### LocationString
* LocationString `string`

### LogGroup
* LogGroup `string`

### LogStream
* LogStream `string`

### Logical
* Logical `string` (values: AND, ANY)

### LogicalOperator
* LogicalOperator `string` (values: EQUALS)

### Long
* Long `integer`

### LongColumnStatisticsData
* LongColumnStatisticsData `object`: Defines column statistics supported for integer data columns.
  * MaximumValue
  * MinimumValue
  * NumberOfDistinctValues **required**
  * NumberOfNulls **required**

### MLTransform
* MLTransform `object`: A structure for a machine learning transform.
  * CreatedOn
  * Description
  * EvaluationMetrics
    * FindMatchesMetrics
      * AreaUnderPRCurve
      * ConfusionMatrix
        * NumFalseNegatives
        * NumFalsePositives
        * NumTrueNegatives
        * NumTruePositives
      * F1
      * Precision
      * Recall
    * TransformType **required**
  * GlueVersion
  * InputRecordTables
    * items [GlueTable](#gluetable)
  * LabelCount
  * LastModifiedOn
  * MaxCapacity
  * MaxRetries
  * Name
  * NumberOfWorkers
  * Parameters
    * FindMatchesParameters
      * AccuracyCostTradeoff
      * EnforceProvidedLabels
      * PrecisionRecallTradeoff
      * PrimaryKeyColumnName
    * TransformType **required**
  * Role
  * Schema
    * items [SchemaColumn](#schemacolumn)
  * Status
  * Timeout
  * TransformEncryption
    * MlUserDataEncryption
      * KmsKeyId
      * MlUserDataEncryptionMode **required**
    * TaskRunSecurityConfigurationName
  * TransformId
  * WorkerType

### MLTransformNotReadyException


### MLUserDataEncryption
* MLUserDataEncryption `object`: The encryption-at-rest settings of the transform that apply to accessing user data.
  * KmsKeyId
  * MlUserDataEncryptionMode **required**

### MLUserDataEncryptionModeString
* MLUserDataEncryptionModeString `string` (values: DISABLED, SSE-KMS)

### MapValue
* MapValue `object`

### MappingEntry
* MappingEntry `object`: Defines a mapping.
  * SourcePath
  * SourceTable
  * SourceType
  * TargetPath
  * TargetTable
  * TargetType

### MappingList
* MappingList `array`
  * items [MappingEntry](#mappingentry)

### MatchCriteria
* MatchCriteria `array`
  * items [NameString](#namestring)

### MaxConcurrentRuns
* MaxConcurrentRuns `integer`

### MaxResultsNumber
* MaxResultsNumber `integer`

### MaxRetries
* MaxRetries `integer`

### MessagePrefix
* MessagePrefix `string`

### MetadataInfo
* MetadataInfo `object`: A structure containing metadata information for a schema version.
  * CreatedTime
  * MetadataValue

### MetadataInfoMap
* MetadataInfoMap `object`

### MetadataKeyString
* MetadataKeyString `string`

### MetadataKeyValuePair
* MetadataKeyValuePair `object`: A structure containing a key value pair for metadata.
  * MetadataKey
  * MetadataValue

### MetadataList
* MetadataList `array`
  * items [MetadataKeyValuePair](#metadatakeyvaluepair)

### MetadataValueString
* MetadataValueString `string`

### MillisecondsCount
* MillisecondsCount `integer`

### MongoDBTarget
* MongoDBTarget `object`: Specifies an Amazon DocumentDB or MongoDB data store to crawl.
  * ConnectionName
  * Path
  * ScanAll

### MongoDBTargetList
* MongoDBTargetList `array`
  * items [MongoDBTarget](#mongodbtarget)

### NameString
* NameString `string`

### NameStringList
* NameStringList `array`
  * items [NameString](#namestring)

### NoScheduleException


### Node
* Node `object`: A node represents an AWS Glue component such as a trigger, or job, etc., that is part of a workflow.
  * CrawlerDetails
    * Crawls
      * items [Crawl](#crawl)
  * JobDetails
    * JobRuns
      * items [JobRun](#jobrun)
  * Name
  * TriggerDetails
    * Trigger
      * Actions
        * items [Action](#action)
      * Description
      * Id
      * Name
      * Predicate
        * Conditions
          * items [Condition](#condition)
        * Logical
      * Schedule
      * State
      * Type
      * WorkflowName
  * Type
  * UniqueId

### NodeIdList
* NodeIdList `array`
  * items [NameString](#namestring)

### NodeList
* NodeList `array`
  * items [Node](#node)

### NodeType
* NodeType `string` (values: CRAWLER, JOB, TRIGGER)

### NonNegativeDouble
* NonNegativeDouble `number`

### NonNegativeInteger
* NonNegativeInteger `integer`

### NonNegativeLong
* NonNegativeLong `integer`

### NotificationProperty
* NotificationProperty `object`: Specifies configuration properties of a notification.
  * NotifyDelayAfter

### NotifyDelayAfter
* NotifyDelayAfter `integer`

### NullableBoolean
* NullableBoolean `boolean`

### NullableDouble
* NullableDouble `number`

### NullableInteger
* NullableInteger `integer`

### OperationTimeoutException


### OrchestrationStringList
* OrchestrationStringList `array`
  * items [GenericString](#genericstring)

### Order
* Order `object`: Specifies the sort order of a sorted column.
  * Column **required**
  * SortOrder **required**

### OrderList
* OrderList `array`
  * items [Order](#order)

### PageSize
* PageSize `integer`

### PaginationToken
* PaginationToken `string`

### ParametersMap
* ParametersMap `object`

### ParametersMapValue
* ParametersMapValue `string`

### Partition
* Partition `object`: Represents a slice of table data.
  * CatalogId
  * CreationTime
  * DatabaseName
  * LastAccessTime
  * LastAnalyzedTime
  * Parameters
  * StorageDescriptor
    * BucketColumns
      * items [NameString](#namestring)
    * Columns
      * items [Column](#column)
    * Compressed
    * InputFormat
    * Location
    * NumberOfBuckets
    * OutputFormat
    * Parameters
    * SchemaReference
      * SchemaId
        * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
        * SchemaArn [GlueResourceArn](#glueresourcearn)
        * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
      * SchemaVersionId
      * SchemaVersionNumber
    * SerdeInfo
      * Name
      * Parameters
      * SerializationLibrary
    * SkewedInfo
      * SkewedColumnNames
        * items [NameString](#namestring)
      * SkewedColumnValueLocationMaps
      * SkewedColumnValues
        * items [ColumnValuesString](#columnvaluesstring)
    * SortColumns
      * items [Order](#order)
    * StoredAsSubDirectories
  * TableName
  * Values
    * items [ValueString](#valuestring)

### PartitionError
* PartitionError `object`: Contains information about a partition error.
  * ErrorDetail
    * ErrorCode
    * ErrorMessage
  * PartitionValues
    * items [ValueString](#valuestring)

### PartitionErrors
* PartitionErrors `array`
  * items [PartitionError](#partitionerror)

### PartitionIndex
* PartitionIndex `object`: A structure for a partition index.
  * IndexName **required**
  * Keys **required**
    * items [NameString](#namestring)

### PartitionIndexDescriptor
* PartitionIndexDescriptor `object`: A descriptor for a partition index in a table.
  * BackfillErrors
    * items [BackfillError](#backfillerror)
  * IndexName **required**
  * IndexStatus **required**
  * Keys **required**
    * items [KeySchemaElement](#keyschemaelement)

### PartitionIndexDescriptorList
* PartitionIndexDescriptorList `array`
  * items [PartitionIndexDescriptor](#partitionindexdescriptor)

### PartitionIndexList
* PartitionIndexList `array`
  * items [PartitionIndex](#partitionindex)

### PartitionIndexStatus
* PartitionIndexStatus `string` (values: CREATING, ACTIVE, DELETING, FAILED)

### PartitionInput
* PartitionInput `object`: The structure used to create and update a partition.
  * LastAccessTime
  * LastAnalyzedTime
  * Parameters
  * StorageDescriptor
    * BucketColumns
      * items [NameString](#namestring)
    * Columns
      * items [Column](#column)
    * Compressed
    * InputFormat
    * Location
    * NumberOfBuckets
    * OutputFormat
    * Parameters
    * SchemaReference
      * SchemaId
        * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
        * SchemaArn [GlueResourceArn](#glueresourcearn)
        * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
      * SchemaVersionId
      * SchemaVersionNumber
    * SerdeInfo
      * Name
      * Parameters
      * SerializationLibrary
    * SkewedInfo
      * SkewedColumnNames
        * items [NameString](#namestring)
      * SkewedColumnValueLocationMaps
      * SkewedColumnValues
        * items [ColumnValuesString](#columnvaluesstring)
    * SortColumns
      * items [Order](#order)
    * StoredAsSubDirectories
  * Values
    * items [ValueString](#valuestring)

### PartitionInputList
* PartitionInputList `array`
  * items [PartitionInput](#partitioninput)

### PartitionList
* PartitionList `array`
  * items [Partition](#partition)

### PartitionValueList
* PartitionValueList `object`: Contains a list of values defining partitions.
  * Values **required**
    * items [ValueString](#valuestring)

### Path
* Path `string`

### PathList
* PathList `array`
  * items [Path](#path)

### Permission
* Permission `string` (values: ALL, SELECT, ALTER, DROP, DELETE, INSERT, CREATE_DATABASE, CREATE_TABLE, DATA_LOCATION_ACCESS)

### PermissionList
* PermissionList `array`
  * items [Permission](#permission)

### PhysicalConnectionRequirements
* PhysicalConnectionRequirements `object`: Specifies the physical requirements for a connection.
  * AvailabilityZone
  * SecurityGroupIdList
    * items [NameString](#namestring)
  * SubnetId

### PolicyJsonString
* PolicyJsonString `string`

### Predecessor
* Predecessor `object`: A job run that was used in the predicate of a conditional trigger that triggered this job run.
  * JobName
  * RunId

### PredecessorList
* PredecessorList `array`
  * items [Predecessor](#predecessor)

### Predicate
* Predicate `object`: Defines the predicate of the trigger, which determines when it fires.
  * Conditions
    * items [Condition](#condition)
  * Logical

### PredicateString
* PredicateString `string`

### PrincipalPermissions
* PrincipalPermissions `object`: Permissions granted to a principal.
  * Permissions
    * items [Permission](#permission)
  * Principal
    * DataLakePrincipalIdentifier

### PrincipalPermissionsList
* PrincipalPermissionsList `array`
  * items [PrincipalPermissions](#principalpermissions)

### PrincipalType
* PrincipalType `string` (values: USER, ROLE, GROUP)

### PropertyPredicate
* PropertyPredicate `object`: Defines a property predicate.
  * Comparator
  * Key
  * Value

### PublicKeysList
* PublicKeysList `array`
  * items [GenericString](#genericstring)

### PutDataCatalogEncryptionSettingsRequest
* PutDataCatalogEncryptionSettingsRequest `object`
  * CatalogId
  * DataCatalogEncryptionSettings **required**
    * ConnectionPasswordEncryption
      * AwsKmsKeyId
      * ReturnConnectionPasswordEncrypted **required**
    * EncryptionAtRest
      * CatalogEncryptionMode **required**
      * SseAwsKmsKeyId

### PutDataCatalogEncryptionSettingsResponse
* PutDataCatalogEncryptionSettingsResponse `object`

### PutResourcePolicyRequest
* PutResourcePolicyRequest `object`
  * EnableHybrid
  * PolicyExistsCondition
  * PolicyHashCondition
  * PolicyInJson **required**
  * ResourceArn

### PutResourcePolicyResponse
* PutResourcePolicyResponse `object`
  * PolicyHash

### PutSchemaVersionMetadataInput
* PutSchemaVersionMetadataInput `object`
  * MetadataKeyValue **required**
    * MetadataKey
    * MetadataValue
  * SchemaId
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
  * SchemaVersionId
  * SchemaVersionNumber
    * LatestVersion [LatestSchemaVersionBoolean](#latestschemaversionboolean)
    * VersionNumber [VersionLongNumber](#versionlongnumber)

### PutSchemaVersionMetadataResponse
* PutSchemaVersionMetadataResponse `object`
  * LatestVersion
  * MetadataKey
  * MetadataValue
  * RegistryName
  * SchemaArn
  * SchemaName
  * SchemaVersionId
  * VersionNumber

### PutWorkflowRunPropertiesRequest
* PutWorkflowRunPropertiesRequest `object`
  * Name **required**
  * RunId **required**
  * RunProperties **required**

### PutWorkflowRunPropertiesResponse
* PutWorkflowRunPropertiesResponse `object`

### PythonScript
* PythonScript `string`

### PythonVersionString
* PythonVersionString `string`

### QuerySchemaVersionMetadataInput
* QuerySchemaVersionMetadataInput `object`
  * MaxResults
  * MetadataList
    * items [MetadataKeyValuePair](#metadatakeyvaluepair)
  * NextToken
  * SchemaId
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
  * SchemaVersionId
  * SchemaVersionNumber
    * LatestVersion [LatestSchemaVersionBoolean](#latestschemaversionboolean)
    * VersionNumber [VersionLongNumber](#versionlongnumber)

### QuerySchemaVersionMetadataMaxResults
* QuerySchemaVersionMetadataMaxResults `integer`

### QuerySchemaVersionMetadataResponse
* QuerySchemaVersionMetadataResponse `object`
  * MetadataInfoMap
  * NextToken
  * SchemaVersionId

### RecordsCount
* RecordsCount `integer`

### RecrawlBehavior
* RecrawlBehavior `string` (values: CRAWL_EVERYTHING, CRAWL_NEW_FOLDERS_ONLY)

### RecrawlPolicy
* RecrawlPolicy `object`: When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/incremental-crawls.html">Incremental Crawls in AWS Glue</a> in the developer guide.
  * RecrawlBehavior

### RegisterSchemaVersionInput
* RegisterSchemaVersionInput `object`
  * SchemaDefinition **required**
  * SchemaId **required**
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)

### RegisterSchemaVersionResponse
* RegisterSchemaVersionResponse `object`
  * SchemaVersionId
  * Status
  * VersionNumber

### RegistryId
* RegistryId `object`: A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).
  * RegistryArn
  * RegistryName

### RegistryListDefinition
* RegistryListDefinition `array`
  * items [RegistryListItem](#registrylistitem)

### RegistryListItem
* RegistryListItem `object`: A structure containing the details for a registry.
  * CreatedTime
  * Description
  * RegistryArn
  * RegistryName
  * Status
  * UpdatedTime

### RegistryStatus
* RegistryStatus `string` (values: AVAILABLE, DELETING)

### RemoveSchemaVersionMetadataInput
* RemoveSchemaVersionMetadataInput `object`
  * MetadataKeyValue **required**
    * MetadataKey
    * MetadataValue
  * SchemaId
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
  * SchemaVersionId
  * SchemaVersionNumber
    * LatestVersion [LatestSchemaVersionBoolean](#latestschemaversionboolean)
    * VersionNumber [VersionLongNumber](#versionlongnumber)

### RemoveSchemaVersionMetadataResponse
* RemoveSchemaVersionMetadataResponse `object`
  * LatestVersion
  * MetadataKey
  * MetadataValue
  * RegistryName
  * SchemaArn
  * SchemaName
  * SchemaVersionId
  * VersionNumber

### ReplaceBoolean
* ReplaceBoolean `boolean`

### ResetJobBookmarkRequest
* ResetJobBookmarkRequest `object`
  * JobName **required**
  * RunId

### ResetJobBookmarkResponse
* ResetJobBookmarkResponse `object`
  * JobBookmarkEntry
    * Attempt
    * JobBookmark
    * JobName
    * PreviousRunId
    * Run
    * RunId
    * Version

### ResourceNumberLimitExceededException


### ResourceShareType
* ResourceShareType `string` (values: FOREIGN, ALL)

### ResourceType
* ResourceType `string` (values: JAR, FILE, ARCHIVE)

### ResourceUri
* ResourceUri `object`: The URIs for function resources.
  * ResourceType
  * Uri

### ResourceUriList
* ResourceUriList `array`
  * items [ResourceUri](#resourceuri)

### ResumeWorkflowRunRequest
* ResumeWorkflowRunRequest `object`
  * Name **required**
  * NodeIds **required**
    * items [NameString](#namestring)
  * RunId **required**

### ResumeWorkflowRunResponse
* ResumeWorkflowRunResponse `object`
  * NodeIds
    * items [NameString](#namestring)
  * RunId

### Role
* Role `string`

### RoleArn
* RoleArn `string`

### RoleString
* RoleString `string`

### RowTag
* RowTag `string`

### RunId
* RunId `string`

### S3Encryption
* S3Encryption `object`: Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.
  * KmsKeyArn
  * S3EncryptionMode

### S3EncryptionList
* S3EncryptionList `array`
  * items [S3Encryption](#s3encryption)

### S3EncryptionMode
* S3EncryptionMode `string` (values: DISABLED, SSE-KMS, SSE-S3)

### S3Target
* S3Target `object`: Specifies a data store in Amazon Simple Storage Service (Amazon S3).
  * ConnectionName
  * Exclusions
    * items [Path](#path)
  * Path

### S3TargetList
* S3TargetList `array`
  * items [S3Target](#s3target)

### ScalaCode
* ScalaCode `string`

### Schedule
* Schedule `object`: A scheduling object using a <code>cron</code> statement to schedule an event.
  * ScheduleExpression
  * State

### ScheduleState
* ScheduleState `string` (values: SCHEDULED, NOT_SCHEDULED, TRANSITIONING)

### SchedulerNotRunningException


### SchedulerRunningException


### SchedulerTransitioningException


### SchemaChangePolicy
* SchemaChangePolicy `object`: A policy that specifies update and deletion behaviors for the crawler.
  * DeleteBehavior
  * UpdateBehavior

### SchemaCheckpointNumber
* SchemaCheckpointNumber `integer`

### SchemaColumn
* SchemaColumn `object`: A key-value pair representing a column and data type that this transform can run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures.
  * DataType
  * Name

### SchemaDefinitionDiff
* SchemaDefinitionDiff `string`

### SchemaDefinitionString
* SchemaDefinitionString `string`

### SchemaDiffType
* SchemaDiffType `string` (values: SYNTAX_DIFF)

### SchemaId
* SchemaId `object`
  * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
  * SchemaArn [GlueResourceArn](#glueresourcearn)
  * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)

### SchemaListDefinition
* SchemaListDefinition `array`
  * items [SchemaListItem](#schemalistitem)

### SchemaListItem
* SchemaListItem `object`: An object that contains minimal details for a schema.
  * CreatedTime
  * Description
  * RegistryName
  * SchemaArn
  * SchemaName
  * SchemaStatus
  * UpdatedTime

### SchemaPathString
* SchemaPathString `string`

### SchemaReference
* SchemaReference `object`: An object that references a schema stored in the AWS Glue Schema Registry.
  * SchemaId
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
  * SchemaVersionId
  * SchemaVersionNumber

### SchemaRegistryNameString
* SchemaRegistryNameString `string`

### SchemaRegistryTokenString
* SchemaRegistryTokenString `string`

### SchemaStatus
* SchemaStatus `string` (values: AVAILABLE, PENDING, DELETING)

### SchemaValidationError
* SchemaValidationError `string`

### SchemaVersionErrorItem
* SchemaVersionErrorItem `object`: An object that contains the error details for an operation on a schema version.
  * ErrorDetails
    * ErrorCode
    * ErrorMessage
  * VersionNumber

### SchemaVersionErrorList
* SchemaVersionErrorList `array`
  * items [SchemaVersionErrorItem](#schemaversionerroritem)

### SchemaVersionIdString
* SchemaVersionIdString `string`

### SchemaVersionList
* SchemaVersionList `array`
  * items [SchemaVersionListItem](#schemaversionlistitem)

### SchemaVersionListItem
* SchemaVersionListItem `object`: An object containing the details about a schema version.
  * CreatedTime
  * SchemaArn
  * SchemaVersionId
  * Status
  * VersionNumber

### SchemaVersionNumber
* SchemaVersionNumber `object`
  * LatestVersion [LatestSchemaVersionBoolean](#latestschemaversionboolean)
  * VersionNumber [VersionLongNumber](#versionlongnumber)

### SchemaVersionStatus
* SchemaVersionStatus `string` (values: AVAILABLE, PENDING, FAILURE, DELETING)

### ScriptLocationString
* ScriptLocationString `string`

### SearchPropertyPredicates
* SearchPropertyPredicates `array`
  * items [PropertyPredicate](#propertypredicate)

### SearchTablesRequest
* SearchTablesRequest `object`
  * CatalogId
  * Filters
    * items [PropertyPredicate](#propertypredicate)
  * MaxResults
  * NextToken
  * ResourceShareType
  * SearchText
  * SortCriteria
    * items [SortCriterion](#sortcriterion)

### SearchTablesResponse
* SearchTablesResponse `object`
  * NextToken
  * TableList
    * items [Table](#table)

### SecurityConfiguration
* SecurityConfiguration `object`: Specifies a security configuration.
  * CreatedTimeStamp
  * EncryptionConfiguration
    * CloudWatchEncryption
      * CloudWatchEncryptionMode
      * KmsKeyArn
    * JobBookmarksEncryption
      * JobBookmarksEncryptionMode
      * KmsKeyArn
    * S3Encryption
      * items [S3Encryption](#s3encryption)
  * Name

### SecurityConfigurationList
* SecurityConfigurationList `array`
  * items [SecurityConfiguration](#securityconfiguration)

### SecurityGroupIdList
* SecurityGroupIdList `array`
  * items [NameString](#namestring)

### Segment
* Segment `object`: Defines a non-overlapping region of a table's partitions, allowing multiple requests to be executed in parallel.
  * SegmentNumber **required**
  * TotalSegments **required**

### SerDeInfo
* SerDeInfo `object`: Information about a serialization/deserialization program (SerDe) that serves as an extractor and loader.
  * Name
  * Parameters
  * SerializationLibrary

### SkewedInfo
* SkewedInfo `object`: Specifies skewed values in a table. Skewed values are those that occur with very high frequency.
  * SkewedColumnNames
    * items [NameString](#namestring)
  * SkewedColumnValueLocationMaps
  * SkewedColumnValues
    * items [ColumnValuesString](#columnvaluesstring)

### Sort
* Sort `string` (values: ASC, DESC)

### SortCriteria
* SortCriteria `array`
  * items [SortCriterion](#sortcriterion)

### SortCriterion
* SortCriterion `object`: Specifies a field to sort by and a sort order.
  * FieldName
  * Sort

### SortDirectionType
* SortDirectionType `string` (values: DESCENDING, ASCENDING)

### StartCrawlerRequest
* StartCrawlerRequest `object`
  * Name **required**

### StartCrawlerResponse
* StartCrawlerResponse `object`

### StartCrawlerScheduleRequest
* StartCrawlerScheduleRequest `object`
  * CrawlerName **required**

### StartCrawlerScheduleResponse
* StartCrawlerScheduleResponse `object`

### StartExportLabelsTaskRunRequest
* StartExportLabelsTaskRunRequest `object`
  * OutputS3Path **required**
  * TransformId **required**

### StartExportLabelsTaskRunResponse
* StartExportLabelsTaskRunResponse `object`
  * TaskRunId

### StartImportLabelsTaskRunRequest
* StartImportLabelsTaskRunRequest `object`
  * InputS3Path **required**
  * ReplaceAllLabels
  * TransformId **required**

### StartImportLabelsTaskRunResponse
* StartImportLabelsTaskRunResponse `object`
  * TaskRunId

### StartJobRunRequest
* StartJobRunRequest `object`
  * AllocatedCapacity
  * Arguments
  * JobName **required**
  * JobRunId
  * MaxCapacity
  * NotificationProperty
    * NotifyDelayAfter
  * NumberOfWorkers
  * SecurityConfiguration
  * Timeout
  * WorkerType

### StartJobRunResponse
* StartJobRunResponse `object`
  * JobRunId

### StartMLEvaluationTaskRunRequest
* StartMLEvaluationTaskRunRequest `object`
  * TransformId **required**

### StartMLEvaluationTaskRunResponse
* StartMLEvaluationTaskRunResponse `object`
  * TaskRunId

### StartMLLabelingSetGenerationTaskRunRequest
* StartMLLabelingSetGenerationTaskRunRequest `object`
  * OutputS3Path **required**
  * TransformId **required**

### StartMLLabelingSetGenerationTaskRunResponse
* StartMLLabelingSetGenerationTaskRunResponse `object`
  * TaskRunId

### StartTriggerRequest
* StartTriggerRequest `object`
  * Name **required**

### StartTriggerResponse
* StartTriggerResponse `object`
  * Name

### StartWorkflowRunRequest
* StartWorkflowRunRequest `object`
  * Name **required**

### StartWorkflowRunResponse
* StartWorkflowRunResponse `object`
  * RunId

### StopCrawlerRequest
* StopCrawlerRequest `object`
  * Name **required**

### StopCrawlerResponse
* StopCrawlerResponse `object`

### StopCrawlerScheduleRequest
* StopCrawlerScheduleRequest `object`
  * CrawlerName **required**

### StopCrawlerScheduleResponse
* StopCrawlerScheduleResponse `object`

### StopTriggerRequest
* StopTriggerRequest `object`
  * Name **required**

### StopTriggerResponse
* StopTriggerResponse `object`
  * Name

### StopWorkflowRunRequest
* StopWorkflowRunRequest `object`
  * Name **required**
  * RunId **required**

### StopWorkflowRunResponse
* StopWorkflowRunResponse `object`

### StorageDescriptor
* StorageDescriptor `object`: Describes the physical storage of table data.
  * BucketColumns
    * items [NameString](#namestring)
  * Columns
    * items [Column](#column)
  * Compressed
  * InputFormat
  * Location
  * NumberOfBuckets
  * OutputFormat
  * Parameters
  * SchemaReference
    * SchemaId
      * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
      * SchemaArn [GlueResourceArn](#glueresourcearn)
      * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaVersionId
    * SchemaVersionNumber
  * SerdeInfo
    * Name
    * Parameters
    * SerializationLibrary
  * SkewedInfo
    * SkewedColumnNames
      * items [NameString](#namestring)
    * SkewedColumnValueLocationMaps
    * SkewedColumnValues
      * items [ColumnValuesString](#columnvaluesstring)
  * SortColumns
    * items [Order](#order)
  * StoredAsSubDirectories

### StringColumnStatisticsData
* StringColumnStatisticsData `object`: Defines column statistics supported for character sequence data values.
  * AverageLength **required**
  * MaximumLength **required**
  * NumberOfDistinctValues **required**
  * NumberOfNulls **required**

### StringList
* StringList `array`
  * items [GenericString](#genericstring)

### Table
* Table `object`: Represents a collection of related data organized in columns and rows.
  * CatalogId
  * CreateTime
  * CreatedBy
  * DatabaseName
  * Description
  * IsRegisteredWithLakeFormation
  * LastAccessTime
  * LastAnalyzedTime
  * Name **required**
  * Owner
  * Parameters
  * PartitionKeys
    * items [Column](#column)
  * Retention
  * StorageDescriptor
    * BucketColumns
      * items [NameString](#namestring)
    * Columns
      * items [Column](#column)
    * Compressed
    * InputFormat
    * Location
    * NumberOfBuckets
    * OutputFormat
    * Parameters
    * SchemaReference
      * SchemaId
        * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
        * SchemaArn [GlueResourceArn](#glueresourcearn)
        * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
      * SchemaVersionId
      * SchemaVersionNumber
    * SerdeInfo
      * Name
      * Parameters
      * SerializationLibrary
    * SkewedInfo
      * SkewedColumnNames
        * items [NameString](#namestring)
      * SkewedColumnValueLocationMaps
      * SkewedColumnValues
        * items [ColumnValuesString](#columnvaluesstring)
    * SortColumns
      * items [Order](#order)
    * StoredAsSubDirectories
  * TableType
  * TargetTable
    * CatalogId
    * DatabaseName
    * Name
  * UpdateTime
  * ViewExpandedText
  * ViewOriginalText

### TableError
* TableError `object`: An error record for table operations.
  * ErrorDetail
    * ErrorCode
    * ErrorMessage
  * TableName

### TableErrors
* TableErrors `array`
  * items [TableError](#tableerror)

### TableIdentifier
* TableIdentifier `object`: A structure that describes a target table for resource linking.
  * CatalogId
  * DatabaseName
  * Name

### TableInput
* TableInput `object`: A structure used to define a table.
  * Description
  * LastAccessTime
  * LastAnalyzedTime
  * Name **required**
  * Owner
  * Parameters
  * PartitionKeys
    * items [Column](#column)
  * Retention
  * StorageDescriptor
    * BucketColumns
      * items [NameString](#namestring)
    * Columns
      * items [Column](#column)
    * Compressed
    * InputFormat
    * Location
    * NumberOfBuckets
    * OutputFormat
    * Parameters
    * SchemaReference
      * SchemaId
        * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
        * SchemaArn [GlueResourceArn](#glueresourcearn)
        * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
      * SchemaVersionId
      * SchemaVersionNumber
    * SerdeInfo
      * Name
      * Parameters
      * SerializationLibrary
    * SkewedInfo
      * SkewedColumnNames
        * items [NameString](#namestring)
      * SkewedColumnValueLocationMaps
      * SkewedColumnValues
        * items [ColumnValuesString](#columnvaluesstring)
    * SortColumns
      * items [Order](#order)
    * StoredAsSubDirectories
  * TableType
  * TargetTable
    * CatalogId
    * DatabaseName
    * Name
  * ViewExpandedText
  * ViewOriginalText

### TableList
* TableList `array`
  * items [Table](#table)

### TableName
* TableName `string`

### TablePrefix
* TablePrefix `string`

### TableTypeString
* TableTypeString `string`

### TableVersion
* TableVersion `object`: Specifies a version of a table.
  * Table
    * CatalogId
    * CreateTime
    * CreatedBy
    * DatabaseName
    * Description
    * IsRegisteredWithLakeFormation
    * LastAccessTime
    * LastAnalyzedTime
    * Name **required**
    * Owner
    * Parameters
    * PartitionKeys
      * items [Column](#column)
    * Retention
    * StorageDescriptor
      * BucketColumns
        * items [NameString](#namestring)
      * Columns
        * items [Column](#column)
      * Compressed
      * InputFormat
      * Location
      * NumberOfBuckets
      * OutputFormat
      * Parameters
      * SchemaReference
        * SchemaId
          * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
          * SchemaArn [GlueResourceArn](#glueresourcearn)
          * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
        * SchemaVersionId
        * SchemaVersionNumber
      * SerdeInfo
        * Name
        * Parameters
        * SerializationLibrary
      * SkewedInfo
        * SkewedColumnNames
          * items [NameString](#namestring)
        * SkewedColumnValueLocationMaps
        * SkewedColumnValues
          * items [ColumnValuesString](#columnvaluesstring)
      * SortColumns
        * items [Order](#order)
      * StoredAsSubDirectories
    * TableType
    * TargetTable
      * CatalogId
      * DatabaseName
      * Name
    * UpdateTime
    * ViewExpandedText
    * ViewOriginalText
  * VersionId

### TableVersionError
* TableVersionError `object`: An error record for table-version operations.
  * ErrorDetail
    * ErrorCode
    * ErrorMessage
  * TableName
  * VersionId

### TableVersionErrors
* TableVersionErrors `array`
  * items [TableVersionError](#tableversionerror)

### TagKey
* TagKey `string`

### TagKeysList
* TagKeysList `array`
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceArn **required**
  * TagsToAdd **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TagsMap
* TagsMap `object`

### TaskRun
* TaskRun `object`: The sampling parameters that are associated with the machine learning transform.
  * CompletedOn
  * ErrorString
  * ExecutionTime
  * LastModifiedOn
  * LogGroupName
  * Properties
    * ExportLabelsTaskRunProperties
      * OutputS3Path
    * FindMatchesTaskRunProperties
      * JobId
      * JobName
      * JobRunId
    * ImportLabelsTaskRunProperties
      * InputS3Path
      * Replace
    * LabelingSetGenerationTaskRunProperties
      * OutputS3Path
    * TaskType
  * StartedOn
  * Status
  * TaskRunId
  * TransformId

### TaskRunFilterCriteria
* TaskRunFilterCriteria `object`: The criteria that are used to filter the task runs for the machine learning transform.
  * StartedAfter
  * StartedBefore
  * Status
  * TaskRunType

### TaskRunList
* TaskRunList `array`
  * items [TaskRun](#taskrun)

### TaskRunProperties
* TaskRunProperties `object`: The configuration properties for the task run.
  * ExportLabelsTaskRunProperties
    * OutputS3Path
  * FindMatchesTaskRunProperties
    * JobId
    * JobName
    * JobRunId
  * ImportLabelsTaskRunProperties
    * InputS3Path
    * Replace
  * LabelingSetGenerationTaskRunProperties
    * OutputS3Path
  * TaskType

### TaskRunSortColumnType
* TaskRunSortColumnType `string` (values: TASK_RUN_TYPE, STATUS, STARTED)

### TaskRunSortCriteria
* TaskRunSortCriteria `object`: The sorting criteria that are used to sort the list of task runs for the machine learning transform.
  * Column **required**
  * SortDirection **required**

### TaskStatusType
* TaskStatusType `string` (values: STARTING, RUNNING, STOPPING, STOPPED, SUCCEEDED, FAILED, TIMEOUT)

### TaskType
* TaskType `string` (values: EVALUATION, LABELING_SET_GENERATION, IMPORT_LABELS, EXPORT_LABELS, FIND_MATCHES)

### Timeout
* Timeout `integer`

### Timestamp
* Timestamp `string`

### TimestampValue
* TimestampValue `string`

### Token
* Token `string`

### TotalSegmentsInteger
* TotalSegmentsInteger `integer`

### TransformEncryption
* TransformEncryption `object`: <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p> <p>Additionally, imported labels and trained transforms can now be encrypted using a customer provided KMS key.</p>
  * MlUserDataEncryption
    * KmsKeyId
    * MlUserDataEncryptionMode **required**
  * TaskRunSecurityConfigurationName

### TransformFilterCriteria
* TransformFilterCriteria `object`: The criteria used to filter the machine learning transforms.
  * CreatedAfter
  * CreatedBefore
  * GlueVersion
  * LastModifiedAfter
  * LastModifiedBefore
  * Name
  * Schema
    * items [SchemaColumn](#schemacolumn)
  * Status
  * TransformType

### TransformIdList
* TransformIdList `array`
  * items [HashString](#hashstring)

### TransformList
* TransformList `array`
  * items [MLTransform](#mltransform)

### TransformParameters
* TransformParameters `object`: The algorithm-specific parameters that are associated with the machine learning transform.
  * FindMatchesParameters
    * AccuracyCostTradeoff
    * EnforceProvidedLabels
    * PrecisionRecallTradeoff
    * PrimaryKeyColumnName
  * TransformType **required**

### TransformSchema
* TransformSchema `array`
  * items [SchemaColumn](#schemacolumn)

### TransformSortColumnType
* TransformSortColumnType `string` (values: NAME, TRANSFORM_TYPE, STATUS, CREATED, LAST_MODIFIED)

### TransformSortCriteria
* TransformSortCriteria `object`: The sorting criteria that are associated with the machine learning transform.
  * Column **required**
  * SortDirection **required**

### TransformStatusType
* TransformStatusType `string` (values: NOT_READY, READY, DELETING)

### TransformType
* TransformType `string` (values: FIND_MATCHES)

### Trigger
* Trigger `object`: Information about a specific trigger.
  * Actions
    * items [Action](#action)
  * Description
  * Id
  * Name
  * Predicate
    * Conditions
      * items [Condition](#condition)
    * Logical
  * Schedule
  * State
  * Type
  * WorkflowName

### TriggerList
* TriggerList `array`
  * items [Trigger](#trigger)

### TriggerNameList
* TriggerNameList `array`
  * items [NameString](#namestring)

### TriggerNodeDetails
* TriggerNodeDetails `object`: The details of a Trigger node present in the workflow.
  * Trigger
    * Actions
      * items [Action](#action)
    * Description
    * Id
    * Name
    * Predicate
      * Conditions
        * items [Condition](#condition)
      * Logical
    * Schedule
    * State
    * Type
    * WorkflowName

### TriggerState
* TriggerState `string` (values: CREATING, CREATED, ACTIVATING, ACTIVATED, DEACTIVATING, DEACTIVATED, DELETING, UPDATING)

### TriggerType
* TriggerType `string` (values: SCHEDULED, CONDITIONAL, ON_DEMAND)

### TriggerUpdate
* TriggerUpdate `object`: A structure used to provide information used to update a trigger. This object updates the previous trigger definition by overwriting it completely.
  * Actions
    * items [Action](#action)
  * Description
  * Name
  * Predicate
    * Conditions
      * items [Condition](#condition)
    * Logical
  * Schedule

### TypeString
* TypeString `string`

### URI
* URI `string`

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required**
  * TagsToRemove **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateBehavior
* UpdateBehavior `string` (values: LOG, UPDATE_IN_DATABASE)

### UpdateClassifierRequest
* UpdateClassifierRequest `object`
  * CsvClassifier
    * AllowSingleColumn
    * ContainsHeader
    * Delimiter
    * DisableValueTrimming
    * Header
      * items [NameString](#namestring)
    * Name **required**
    * QuoteSymbol
  * GrokClassifier
    * Classification
    * CustomPatterns
    * GrokPattern
    * Name **required**
  * JsonClassifier
    * JsonPath
    * Name **required**
  * XMLClassifier
    * Classification
    * Name **required**
    * RowTag

### UpdateClassifierResponse
* UpdateClassifierResponse `object`

### UpdateColumnStatisticsForPartitionRequest
* UpdateColumnStatisticsForPartitionRequest `object`
  * CatalogId
  * ColumnStatisticsList **required**
    * items [ColumnStatistics](#columnstatistics)
  * DatabaseName **required**
  * PartitionValues **required**
    * items [ValueString](#valuestring)
  * TableName **required**

### UpdateColumnStatisticsForPartitionResponse
* UpdateColumnStatisticsForPartitionResponse `object`
  * Errors
    * items [ColumnStatisticsError](#columnstatisticserror)

### UpdateColumnStatisticsForTableRequest
* UpdateColumnStatisticsForTableRequest `object`
  * CatalogId
  * ColumnStatisticsList **required**
    * items [ColumnStatistics](#columnstatistics)
  * DatabaseName **required**
  * TableName **required**

### UpdateColumnStatisticsForTableResponse
* UpdateColumnStatisticsForTableResponse `object`
  * Errors
    * items [ColumnStatisticsError](#columnstatisticserror)

### UpdateColumnStatisticsList
* UpdateColumnStatisticsList `array`
  * items [ColumnStatistics](#columnstatistics)

### UpdateConnectionRequest
* UpdateConnectionRequest `object`
  * CatalogId
  * ConnectionInput **required**
    * ConnectionProperties **required**
    * ConnectionType **required**
    * Description
    * MatchCriteria
      * items [NameString](#namestring)
    * Name **required**
    * PhysicalConnectionRequirements
      * AvailabilityZone
      * SecurityGroupIdList
        * items [NameString](#namestring)
      * SubnetId
  * Name **required**

### UpdateConnectionResponse
* UpdateConnectionResponse `object`

### UpdateCrawlerRequest
* UpdateCrawlerRequest `object`
  * Classifiers
    * items [NameString](#namestring)
  * Configuration
  * CrawlerSecurityConfiguration
  * DatabaseName
  * Description
  * LineageConfiguration
    * CrawlerLineageSettings
  * Name **required**
  * RecrawlPolicy
    * RecrawlBehavior
  * Role
  * Schedule
  * SchemaChangePolicy
    * DeleteBehavior
    * UpdateBehavior
  * TablePrefix
  * Targets
    * CatalogTargets
      * items [CatalogTarget](#catalogtarget)
    * DynamoDBTargets
      * items [DynamoDBTarget](#dynamodbtarget)
    * JdbcTargets
      * items [JdbcTarget](#jdbctarget)
    * MongoDBTargets
      * items [MongoDBTarget](#mongodbtarget)
    * S3Targets
      * items [S3Target](#s3target)

### UpdateCrawlerResponse
* UpdateCrawlerResponse `object`

### UpdateCrawlerScheduleRequest
* UpdateCrawlerScheduleRequest `object`
  * CrawlerName **required**
  * Schedule

### UpdateCrawlerScheduleResponse
* UpdateCrawlerScheduleResponse `object`

### UpdateCsvClassifierRequest
* UpdateCsvClassifierRequest `object`: Specifies a custom CSV classifier to be updated.
  * AllowSingleColumn
  * ContainsHeader
  * Delimiter
  * DisableValueTrimming
  * Header
    * items [NameString](#namestring)
  * Name **required**
  * QuoteSymbol

### UpdateDatabaseRequest
* UpdateDatabaseRequest `object`
  * CatalogId
  * DatabaseInput **required**
    * CreateTableDefaultPermissions
      * items [PrincipalPermissions](#principalpermissions)
    * Description
    * LocationUri
    * Name **required**
    * Parameters
    * TargetDatabase
      * CatalogId
      * DatabaseName
  * Name **required**

### UpdateDatabaseResponse
* UpdateDatabaseResponse `object`

### UpdateDevEndpointRequest
* UpdateDevEndpointRequest `object`
  * AddArguments
  * AddPublicKeys
    * items [GenericString](#genericstring)
  * CustomLibraries
    * ExtraJarsS3Path
    * ExtraPythonLibsS3Path
  * DeleteArguments
    * items [GenericString](#genericstring)
  * DeletePublicKeys
    * items [GenericString](#genericstring)
  * EndpointName **required**
  * PublicKey
  * UpdateEtlLibraries

### UpdateDevEndpointResponse
* UpdateDevEndpointResponse `object`

### UpdateGrokClassifierRequest
* UpdateGrokClassifierRequest `object`: Specifies a grok classifier to update when passed to <code>UpdateClassifier</code>.
  * Classification
  * CustomPatterns
  * GrokPattern
  * Name **required**

### UpdateJobRequest
* UpdateJobRequest `object`
  * JobName **required**
  * JobUpdate **required**
    * AllocatedCapacity
    * Command
      * Name
      * PythonVersion
      * ScriptLocation
    * Connections
      * Connections
        * items [GenericString](#genericstring)
    * DefaultArguments
    * Description
    * ExecutionProperty
      * MaxConcurrentRuns
    * GlueVersion
    * LogUri
    * MaxCapacity
    * MaxRetries
    * NonOverridableArguments
    * NotificationProperty
      * NotifyDelayAfter
    * NumberOfWorkers
    * Role
    * SecurityConfiguration
    * Timeout
    * WorkerType

### UpdateJobResponse
* UpdateJobResponse `object`
  * JobName

### UpdateJsonClassifierRequest
* UpdateJsonClassifierRequest `object`: Specifies a JSON classifier to be updated.
  * JsonPath
  * Name **required**

### UpdateMLTransformRequest
* UpdateMLTransformRequest `object`
  * Description
  * GlueVersion
  * MaxCapacity
  * MaxRetries
  * Name
  * NumberOfWorkers
  * Parameters
    * FindMatchesParameters
      * AccuracyCostTradeoff
      * EnforceProvidedLabels
      * PrecisionRecallTradeoff
      * PrimaryKeyColumnName
    * TransformType **required**
  * Role
  * Timeout
  * TransformId **required**
  * WorkerType

### UpdateMLTransformResponse
* UpdateMLTransformResponse `object`
  * TransformId

### UpdatePartitionRequest
* UpdatePartitionRequest `object`
  * CatalogId
  * DatabaseName **required**
  * PartitionInput **required**
    * LastAccessTime
    * LastAnalyzedTime
    * Parameters
    * StorageDescriptor
      * BucketColumns
        * items [NameString](#namestring)
      * Columns
        * items [Column](#column)
      * Compressed
      * InputFormat
      * Location
      * NumberOfBuckets
      * OutputFormat
      * Parameters
      * SchemaReference
        * SchemaId
          * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
          * SchemaArn [GlueResourceArn](#glueresourcearn)
          * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
        * SchemaVersionId
        * SchemaVersionNumber
      * SerdeInfo
        * Name
        * Parameters
        * SerializationLibrary
      * SkewedInfo
        * SkewedColumnNames
          * items [NameString](#namestring)
        * SkewedColumnValueLocationMaps
        * SkewedColumnValues
          * items [ColumnValuesString](#columnvaluesstring)
      * SortColumns
        * items [Order](#order)
      * StoredAsSubDirectories
    * Values
      * items [ValueString](#valuestring)
  * PartitionValueList **required**
    * items [ValueString](#valuestring)
  * TableName **required**

### UpdatePartitionResponse
* UpdatePartitionResponse `object`

### UpdateRegistryInput
* UpdateRegistryInput `object`
  * Description **required**
  * RegistryId **required**
    * RegistryArn
    * RegistryName

### UpdateRegistryResponse
* UpdateRegistryResponse `object`
  * RegistryArn
  * RegistryName

### UpdateSchemaInput
* UpdateSchemaInput `object`
  * Compatibility
  * Description
  * SchemaId **required**
    * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
    * SchemaArn [GlueResourceArn](#glueresourcearn)
    * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
  * SchemaVersionNumber
    * LatestVersion [LatestSchemaVersionBoolean](#latestschemaversionboolean)
    * VersionNumber [VersionLongNumber](#versionlongnumber)

### UpdateSchemaResponse
* UpdateSchemaResponse `object`
  * RegistryName
  * SchemaArn
  * SchemaName

### UpdateTableRequest
* UpdateTableRequest `object`
  * CatalogId
  * DatabaseName **required**
  * SkipArchive
  * TableInput **required**
    * Description
    * LastAccessTime
    * LastAnalyzedTime
    * Name **required**
    * Owner
    * Parameters
    * PartitionKeys
      * items [Column](#column)
    * Retention
    * StorageDescriptor
      * BucketColumns
        * items [NameString](#namestring)
      * Columns
        * items [Column](#column)
      * Compressed
      * InputFormat
      * Location
      * NumberOfBuckets
      * OutputFormat
      * Parameters
      * SchemaReference
        * SchemaId
          * RegistryName [SchemaRegistryNameString](#schemaregistrynamestring)
          * SchemaArn [GlueResourceArn](#glueresourcearn)
          * SchemaName [SchemaRegistryNameString](#schemaregistrynamestring)
        * SchemaVersionId
        * SchemaVersionNumber
      * SerdeInfo
        * Name
        * Parameters
        * SerializationLibrary
      * SkewedInfo
        * SkewedColumnNames
          * items [NameString](#namestring)
        * SkewedColumnValueLocationMaps
        * SkewedColumnValues
          * items [ColumnValuesString](#columnvaluesstring)
      * SortColumns
        * items [Order](#order)
      * StoredAsSubDirectories
    * TableType
    * TargetTable
      * CatalogId
      * DatabaseName
      * Name
    * ViewExpandedText
    * ViewOriginalText

### UpdateTableResponse
* UpdateTableResponse `object`

### UpdateTriggerRequest
* UpdateTriggerRequest `object`
  * Name **required**
  * TriggerUpdate **required**
    * Actions
      * items [Action](#action)
    * Description
    * Name
    * Predicate
      * Conditions
        * items [Condition](#condition)
      * Logical
    * Schedule

### UpdateTriggerResponse
* UpdateTriggerResponse `object`
  * Trigger
    * Actions
      * items [Action](#action)
    * Description
    * Id
    * Name
    * Predicate
      * Conditions
        * items [Condition](#condition)
      * Logical
    * Schedule
    * State
    * Type
    * WorkflowName

### UpdateUserDefinedFunctionRequest
* UpdateUserDefinedFunctionRequest `object`
  * CatalogId
  * DatabaseName **required**
  * FunctionInput **required**
    * ClassName
    * FunctionName
    * OwnerName
    * OwnerType
    * ResourceUris
      * items [ResourceUri](#resourceuri)
  * FunctionName **required**

### UpdateUserDefinedFunctionResponse
* UpdateUserDefinedFunctionResponse `object`

### UpdateWorkflowRequest
* UpdateWorkflowRequest `object`
  * DefaultRunProperties
  * Description
  * MaxConcurrentRuns
  * Name **required**

### UpdateWorkflowResponse
* UpdateWorkflowResponse `object`
  * Name

### UpdateXMLClassifierRequest
* UpdateXMLClassifierRequest `object`: Specifies an XML classifier to be updated.
  * Classification
  * Name **required**
  * RowTag

### UpdatedTimestamp
* UpdatedTimestamp `string`

### UriString
* UriString `string`

### UserDefinedFunction
* UserDefinedFunction `object`: Represents the equivalent of a Hive user-defined function (<code>UDF</code>) definition.
  * CatalogId
  * ClassName
  * CreateTime
  * DatabaseName
  * FunctionName
  * OwnerName
  * OwnerType
  * ResourceUris
    * items [ResourceUri](#resourceuri)

### UserDefinedFunctionInput
* UserDefinedFunctionInput `object`: A structure used to create or update a user-defined function.
  * ClassName
  * FunctionName
  * OwnerName
  * OwnerType
  * ResourceUris
    * items [ResourceUri](#resourceuri)

### UserDefinedFunctionList
* UserDefinedFunctionList `array`
  * items [UserDefinedFunction](#userdefinedfunction)

### ValidationException


### ValueString
* ValueString `string`

### ValueStringList
* ValueStringList `array`
  * items [ValueString](#valuestring)

### VersionId
* VersionId `integer`

### VersionLongNumber
* VersionLongNumber `integer`

### VersionMismatchException


### VersionString
* VersionString `string`

### VersionsString
* VersionsString `string`

### ViewTextString
* ViewTextString `string`

### WorkerType
* WorkerType `string` (values: Standard, G.1X, G.2X)

### Workflow
* Workflow `object`: A workflow represents a flow in which AWS Glue components should be executed to complete a logical task.
  * CreatedOn
  * DefaultRunProperties
  * Description
  * Graph
    * Edges
      * items [Edge](#edge)
    * Nodes
      * items [Node](#node)
  * LastModifiedOn
  * LastRun
    * CompletedOn
    * ErrorMessage
    * Graph
      * Edges
        * items [Edge](#edge)
      * Nodes
        * items [Node](#node)
    * Name
    * PreviousRunId
    * StartedOn
    * Statistics
      * FailedActions
      * RunningActions
      * StoppedActions
      * SucceededActions
      * TimeoutActions
      * TotalActions
    * Status
    * WorkflowRunId
    * WorkflowRunProperties
  * MaxConcurrentRuns
  * Name

### WorkflowGraph
* WorkflowGraph `object`: A workflow graph represents the complete workflow containing all the AWS Glue components present in the workflow and all the directed connections between them.
  * Edges
    * items [Edge](#edge)
  * Nodes
    * items [Node](#node)

### WorkflowNames
* WorkflowNames `array`
  * items [NameString](#namestring)

### WorkflowRun
* WorkflowRun `object`: A workflow run is an execution of a workflow providing all the runtime information.
  * CompletedOn
  * ErrorMessage
  * Graph
    * Edges
      * items [Edge](#edge)
    * Nodes
      * items [Node](#node)
  * Name
  * PreviousRunId
  * StartedOn
  * Statistics
    * FailedActions
    * RunningActions
    * StoppedActions
    * SucceededActions
    * TimeoutActions
    * TotalActions
  * Status
  * WorkflowRunId
  * WorkflowRunProperties

### WorkflowRunProperties
* WorkflowRunProperties `object`

### WorkflowRunStatistics
* WorkflowRunStatistics `object`: Workflow run statistics provides statistics about the workflow run.
  * FailedActions
  * RunningActions
  * StoppedActions
  * SucceededActions
  * TimeoutActions
  * TotalActions

### WorkflowRunStatus
* WorkflowRunStatus `string` (values: RUNNING, COMPLETED, STOPPING, STOPPED, ERROR)

### WorkflowRuns
* WorkflowRuns `array`
  * items [WorkflowRun](#workflowrun)

### Workflows
* Workflows `array`
  * items [Workflow](#workflow)

### XMLClassifier
* XMLClassifier `object`: A classifier for <code>XML</code> content.
  * Classification **required**
  * CreationTime
  * LastUpdated
  * Name **required**
  * RowTag
  * Version


