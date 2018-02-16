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

amazonaws_glue.BatchCreatePartition({
  "DatabaseName": "",
  "TableName": "",
  "PartitionInputList": []
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Glue</fullname> <p>Defines the public endpoint for the AWS Glue service.</p>

## Actions

### BatchCreatePartition



```js
amazonaws_glue.BatchCreatePartition({
  "DatabaseName": "",
  "TableName": "",
  "PartitionInputList": []
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * PartitionInputList **required** [PartitionInputList](#partitioninputlist)
  * TableName **required** [NameString](#namestring)

#### Output
* output [BatchCreatePartitionResponse](#batchcreatepartitionresponse)

### BatchDeleteConnection



```js
amazonaws_glue.BatchDeleteConnection({
  "ConnectionNameList": []
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * ConnectionNameList **required** [DeleteConnectionNameList](#deleteconnectionnamelist)

#### Output
* output [BatchDeleteConnectionResponse](#batchdeleteconnectionresponse)

### BatchDeletePartition



```js
amazonaws_glue.BatchDeletePartition({
  "DatabaseName": "",
  "TableName": "",
  "PartitionsToDelete": []
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * PartitionsToDelete **required** [BatchDeletePartitionValueList](#batchdeletepartitionvaluelist)
  * TableName **required** [NameString](#namestring)

#### Output
* output [BatchDeletePartitionResponse](#batchdeletepartitionresponse)

### BatchDeleteTable



```js
amazonaws_glue.BatchDeleteTable({
  "DatabaseName": "",
  "TablesToDelete": []
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * TablesToDelete **required** [BatchDeleteTableNameList](#batchdeletetablenamelist)

#### Output
* output [BatchDeleteTableResponse](#batchdeletetableresponse)

### BatchDeleteTableVersion



```js
amazonaws_glue.BatchDeleteTableVersion({
  "DatabaseName": "",
  "TableName": "",
  "VersionIds": []
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * TableName **required** [NameString](#namestring)
  * VersionIds **required** [BatchDeleteTableVersionList](#batchdeletetableversionlist)

#### Output
* output [BatchDeleteTableVersionResponse](#batchdeletetableversionresponse)

### BatchGetPartition



```js
amazonaws_glue.BatchGetPartition({
  "DatabaseName": "",
  "TableName": "",
  "PartitionsToGet": []
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * PartitionsToGet **required** [BatchGetPartitionValueList](#batchgetpartitionvaluelist)
  * TableName **required** [NameString](#namestring)

#### Output
* output [BatchGetPartitionResponse](#batchgetpartitionresponse)

### BatchStopJobRun



```js
amazonaws_glue.BatchStopJobRun({
  "JobName": "",
  "JobRunIds": []
}, context)
```

#### Input
* input `object`
  * JobName **required** [NameString](#namestring)
  * JobRunIds **required** [BatchStopJobRunJobRunIdList](#batchstopjobrunjobrunidlist)

#### Output
* output [BatchStopJobRunResponse](#batchstopjobrunresponse)

### CreateClassifier



```js
amazonaws_glue.CreateClassifier({}, context)
```

#### Input
* input `object`
  * GrokClassifier [CreateGrokClassifierRequest](#creategrokclassifierrequest)
  * JsonClassifier [CreateJsonClassifierRequest](#createjsonclassifierrequest)
  * XMLClassifier [CreateXMLClassifierRequest](#createxmlclassifierrequest)

#### Output
* output [CreateClassifierResponse](#createclassifierresponse)

### CreateConnection



```js
amazonaws_glue.CreateConnection({
  "ConnectionInput": {
    "Name": "",
    "ConnectionType": "",
    "ConnectionProperties": []
  }
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * ConnectionInput **required** [ConnectionInput](#connectioninput)

#### Output
* output [CreateConnectionResponse](#createconnectionresponse)

### CreateCrawler



```js
amazonaws_glue.CreateCrawler({
  "Name": "",
  "Role": "",
  "DatabaseName": "",
  "Targets": {}
}, context)
```

#### Input
* input `object`
  * Classifiers [ClassifierNameList](#classifiernamelist)
  * Configuration [CrawlerConfiguration](#crawlerconfiguration)
  * DatabaseName **required** [DatabaseName](#databasename)
  * Description [DescriptionString](#descriptionstring)
  * Name **required** [NameString](#namestring)
  * Role **required** [Role](#role)
  * Schedule [CronExpression](#cronexpression)
  * SchemaChangePolicy [SchemaChangePolicy](#schemachangepolicy)
  * TablePrefix [TablePrefix](#tableprefix)
  * Targets **required** [CrawlerTargets](#crawlertargets)

#### Output
* output [CreateCrawlerResponse](#createcrawlerresponse)

### CreateDatabase



```js
amazonaws_glue.CreateDatabase({
  "DatabaseInput": {
    "Name": ""
  }
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseInput **required** [DatabaseInput](#databaseinput)

#### Output
* output [CreateDatabaseResponse](#createdatabaseresponse)

### CreateDevEndpoint



```js
amazonaws_glue.CreateDevEndpoint({
  "EndpointName": "",
  "RoleArn": "",
  "PublicKey": ""
}, context)
```

#### Input
* input `object`
  * EndpointName **required** [GenericString](#genericstring)
  * ExtraJarsS3Path [GenericString](#genericstring)
  * ExtraPythonLibsS3Path [GenericString](#genericstring)
  * NumberOfNodes [IntegerValue](#integervalue)
  * PublicKey **required** [GenericString](#genericstring)
  * RoleArn **required** [RoleArn](#rolearn)
  * SecurityGroupIds [StringList](#stringlist)
  * SubnetId [GenericString](#genericstring)

#### Output
* output [CreateDevEndpointResponse](#createdevendpointresponse)

### CreateJob



```js
amazonaws_glue.CreateJob({
  "Name": "",
  "Role": "",
  "Command": {}
}, context)
```

#### Input
* input `object`
  * AllocatedCapacity [IntegerValue](#integervalue)
  * Command **required** [JobCommand](#jobcommand)
  * Connections [ConnectionsList](#connectionslist)
  * DefaultArguments [GenericMap](#genericmap)
  * Description [DescriptionString](#descriptionstring)
  * ExecutionProperty [ExecutionProperty](#executionproperty)
  * LogUri [UriString](#uristring)
  * MaxRetries [MaxRetries](#maxretries)
  * Name **required** [NameString](#namestring)
  * Role **required** [RoleString](#rolestring)

#### Output
* output [CreateJobResponse](#createjobresponse)

### CreatePartition



```js
amazonaws_glue.CreatePartition({
  "DatabaseName": "",
  "TableName": "",
  "PartitionInput": {}
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * PartitionInput **required** [PartitionInput](#partitioninput)
  * TableName **required** [NameString](#namestring)

#### Output
* output [CreatePartitionResponse](#createpartitionresponse)

### CreateScript



```js
amazonaws_glue.CreateScript({}, context)
```

#### Input
* input `object`
  * DagEdges [DagEdges](#dagedges)
  * DagNodes [DagNodes](#dagnodes)
  * Language [Language](#language)

#### Output
* output [CreateScriptResponse](#createscriptresponse)

### CreateTable



```js
amazonaws_glue.CreateTable({
  "DatabaseName": "",
  "TableInput": {
    "Name": ""
  }
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * TableInput **required** [TableInput](#tableinput)

#### Output
* output [CreateTableResponse](#createtableresponse)

### CreateTrigger



```js
amazonaws_glue.CreateTrigger({
  "Name": "",
  "Type": "",
  "Actions": []
}, context)
```

#### Input
* input `object`
  * Actions **required** [ActionList](#actionlist)
  * Description [DescriptionString](#descriptionstring)
  * Name **required** [NameString](#namestring)
  * Predicate [Predicate](#predicate)
  * Schedule [GenericString](#genericstring)
  * Type **required** [TriggerType](#triggertype)

#### Output
* output [CreateTriggerResponse](#createtriggerresponse)

### CreateUserDefinedFunction



```js
amazonaws_glue.CreateUserDefinedFunction({
  "DatabaseName": "",
  "FunctionInput": {}
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * FunctionInput **required** [UserDefinedFunctionInput](#userdefinedfunctioninput)

#### Output
* output [CreateUserDefinedFunctionResponse](#createuserdefinedfunctionresponse)

### DeleteClassifier



```js
amazonaws_glue.DeleteClassifier({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [NameString](#namestring)

#### Output
* output [DeleteClassifierResponse](#deleteclassifierresponse)

### DeleteConnection



```js
amazonaws_glue.DeleteConnection({
  "ConnectionName": ""
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * ConnectionName **required** [NameString](#namestring)

#### Output
* output [DeleteConnectionResponse](#deleteconnectionresponse)

### DeleteCrawler



```js
amazonaws_glue.DeleteCrawler({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [NameString](#namestring)

#### Output
* output [DeleteCrawlerResponse](#deletecrawlerresponse)

### DeleteDatabase



```js
amazonaws_glue.DeleteDatabase({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * Name **required** [NameString](#namestring)

#### Output
* output [DeleteDatabaseResponse](#deletedatabaseresponse)

### DeleteDevEndpoint



```js
amazonaws_glue.DeleteDevEndpoint({
  "EndpointName": ""
}, context)
```

#### Input
* input `object`
  * EndpointName **required** [GenericString](#genericstring)

#### Output
* output [DeleteDevEndpointResponse](#deletedevendpointresponse)

### DeleteJob



```js
amazonaws_glue.DeleteJob({
  "JobName": ""
}, context)
```

#### Input
* input `object`
  * JobName **required** [NameString](#namestring)

#### Output
* output [DeleteJobResponse](#deletejobresponse)

### DeletePartition



```js
amazonaws_glue.DeletePartition({
  "DatabaseName": "",
  "TableName": "",
  "PartitionValues": []
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * PartitionValues **required** [ValueStringList](#valuestringlist)
  * TableName **required** [NameString](#namestring)

#### Output
* output [DeletePartitionResponse](#deletepartitionresponse)

### DeleteTable



```js
amazonaws_glue.DeleteTable({
  "DatabaseName": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * Name **required** [NameString](#namestring)

#### Output
* output [DeleteTableResponse](#deletetableresponse)

### DeleteTableVersion



```js
amazonaws_glue.DeleteTableVersion({
  "DatabaseName": "",
  "TableName": "",
  "VersionId": ""
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * TableName **required** [NameString](#namestring)
  * VersionId **required** [VersionString](#versionstring)

#### Output
* output [DeleteTableVersionResponse](#deletetableversionresponse)

### DeleteTrigger



```js
amazonaws_glue.DeleteTrigger({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [NameString](#namestring)

#### Output
* output [DeleteTriggerResponse](#deletetriggerresponse)

### DeleteUserDefinedFunction



```js
amazonaws_glue.DeleteUserDefinedFunction({
  "DatabaseName": "",
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * FunctionName **required** [NameString](#namestring)

#### Output
* output [DeleteUserDefinedFunctionResponse](#deleteuserdefinedfunctionresponse)

### GetCatalogImportStatus



```js
amazonaws_glue.GetCatalogImportStatus({}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)

#### Output
* output [GetCatalogImportStatusResponse](#getcatalogimportstatusresponse)

### GetClassifier



```js
amazonaws_glue.GetClassifier({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [NameString](#namestring)

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
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)

#### Output
* output [GetClassifiersResponse](#getclassifiersresponse)

### GetConnection



```js
amazonaws_glue.GetConnection({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * Name **required** [NameString](#namestring)

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
  * CatalogId [CatalogIdString](#catalogidstring)
  * Filter [GetConnectionsFilter](#getconnectionsfilter)
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)

#### Output
* output [GetConnectionsResponse](#getconnectionsresponse)

### GetCrawler



```js
amazonaws_glue.GetCrawler({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [NameString](#namestring)

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
  * CrawlerNameList [CrawlerNameList](#crawlernamelist)
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)

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
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)

#### Output
* output [GetCrawlersResponse](#getcrawlersresponse)

### GetDatabase



```js
amazonaws_glue.GetDatabase({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * Name **required** [NameString](#namestring)

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
  * CatalogId [CatalogIdString](#catalogidstring)
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)

#### Output
* output [GetDatabasesResponse](#getdatabasesresponse)

### GetDataflowGraph



```js
amazonaws_glue.GetDataflowGraph({}, context)
```

#### Input
* input `object`
  * PythonScript [PythonScript](#pythonscript)

#### Output
* output [GetDataflowGraphResponse](#getdataflowgraphresponse)

### GetDevEndpoint



```js
amazonaws_glue.GetDevEndpoint({
  "EndpointName": ""
}, context)
```

#### Input
* input `object`
  * EndpointName **required** [GenericString](#genericstring)

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
  * MaxResults [PageSize](#pagesize)
  * NextToken [GenericString](#genericstring)

#### Output
* output [GetDevEndpointsResponse](#getdevendpointsresponse)

### GetJob



```js
amazonaws_glue.GetJob({
  "JobName": ""
}, context)
```

#### Input
* input `object`
  * JobName **required** [NameString](#namestring)

#### Output
* output [GetJobResponse](#getjobresponse)

### GetJobRun



```js
amazonaws_glue.GetJobRun({
  "JobName": "",
  "RunId": ""
}, context)
```

#### Input
* input `object`
  * JobName **required** [NameString](#namestring)
  * PredecessorsIncluded [BooleanValue](#booleanvalue)
  * RunId **required** [IdString](#idstring)

#### Output
* output [GetJobRunResponse](#getjobrunresponse)

### GetJobRuns



```js
amazonaws_glue.GetJobRuns({
  "JobName": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobName **required** [NameString](#namestring)
  * MaxResults [PageSize](#pagesize)
  * NextToken [GenericString](#genericstring)

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
  * MaxResults [PageSize](#pagesize)
  * NextToken [GenericString](#genericstring)

#### Output
* output [GetJobsResponse](#getjobsresponse)

### GetMapping



```js
amazonaws_glue.GetMapping({
  "Source": {
    "DatabaseName": "",
    "TableName": ""
  }
}, context)
```

#### Input
* input `object`
  * Location [Location](#location)
  * Sinks [CatalogEntries](#catalogentries)
  * Source **required** [CatalogEntry](#catalogentry)

#### Output
* output [GetMappingResponse](#getmappingresponse)

### GetPartition



```js
amazonaws_glue.GetPartition({
  "DatabaseName": "",
  "TableName": "",
  "PartitionValues": []
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * PartitionValues **required** [ValueStringList](#valuestringlist)
  * TableName **required** [NameString](#namestring)

#### Output
* output [GetPartitionResponse](#getpartitionresponse)

### GetPartitions



```js
amazonaws_glue.GetPartitions({
  "DatabaseName": "",
  "TableName": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * Expression [PredicateString](#predicatestring)
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)
  * Segment [Segment](#segment)
  * TableName **required** [NameString](#namestring)

#### Output
* output [GetPartitionsResponse](#getpartitionsresponse)

### GetPlan



```js
amazonaws_glue.GetPlan({
  "Mapping": [],
  "Source": {
    "DatabaseName": "",
    "TableName": ""
  }
}, context)
```

#### Input
* input `object`
  * Language [Language](#language)
  * Location [Location](#location)
  * Mapping **required** [MappingList](#mappinglist)
  * Sinks [CatalogEntries](#catalogentries)
  * Source **required** [CatalogEntry](#catalogentry)

#### Output
* output [GetPlanResponse](#getplanresponse)

### GetTable



```js
amazonaws_glue.GetTable({
  "DatabaseName": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * Name **required** [NameString](#namestring)

#### Output
* output [GetTableResponse](#gettableresponse)

### GetTableVersion



```js
amazonaws_glue.GetTableVersion({
  "DatabaseName": "",
  "TableName": ""
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * TableName **required** [NameString](#namestring)
  * VersionId [VersionString](#versionstring)

#### Output
* output [GetTableVersionResponse](#gettableversionresponse)

### GetTableVersions



```js
amazonaws_glue.GetTableVersions({
  "DatabaseName": "",
  "TableName": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)
  * TableName **required** [NameString](#namestring)

#### Output
* output [GetTableVersionsResponse](#gettableversionsresponse)

### GetTables



```js
amazonaws_glue.GetTables({
  "DatabaseName": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * Expression [FilterString](#filterstring)
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)

#### Output
* output [GetTablesResponse](#gettablesresponse)

### GetTrigger



```js
amazonaws_glue.GetTrigger({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [NameString](#namestring)

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
  * DependentJobName [NameString](#namestring)
  * MaxResults [PageSize](#pagesize)
  * NextToken [GenericString](#genericstring)

#### Output
* output [GetTriggersResponse](#gettriggersresponse)

### GetUserDefinedFunction



```js
amazonaws_glue.GetUserDefinedFunction({
  "DatabaseName": "",
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * FunctionName **required** [NameString](#namestring)

#### Output
* output [GetUserDefinedFunctionResponse](#getuserdefinedfunctionresponse)

### GetUserDefinedFunctions



```js
amazonaws_glue.GetUserDefinedFunctions({
  "DatabaseName": "",
  "Pattern": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)
  * Pattern **required** [NameString](#namestring)

#### Output
* output [GetUserDefinedFunctionsResponse](#getuserdefinedfunctionsresponse)

### ImportCatalogToGlue



```js
amazonaws_glue.ImportCatalogToGlue({}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)

#### Output
* output [ImportCatalogToGlueResponse](#importcatalogtoglueresponse)

### ResetJobBookmark



```js
amazonaws_glue.ResetJobBookmark({
  "JobName": ""
}, context)
```

#### Input
* input `object`
  * JobName **required** [JobName](#jobname)

#### Output
* output [ResetJobBookmarkResponse](#resetjobbookmarkresponse)

### StartCrawler



```js
amazonaws_glue.StartCrawler({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [NameString](#namestring)

#### Output
* output [StartCrawlerResponse](#startcrawlerresponse)

### StartCrawlerSchedule



```js
amazonaws_glue.StartCrawlerSchedule({
  "CrawlerName": ""
}, context)
```

#### Input
* input `object`
  * CrawlerName **required** [NameString](#namestring)

#### Output
* output [StartCrawlerScheduleResponse](#startcrawlerscheduleresponse)

### StartJobRun



```js
amazonaws_glue.StartJobRun({
  "JobName": ""
}, context)
```

#### Input
* input `object`
  * AllocatedCapacity [IntegerValue](#integervalue)
  * Arguments [GenericMap](#genericmap)
  * JobName **required** [NameString](#namestring)
  * JobRunId [IdString](#idstring)

#### Output
* output [StartJobRunResponse](#startjobrunresponse)

### StartTrigger



```js
amazonaws_glue.StartTrigger({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [NameString](#namestring)

#### Output
* output [StartTriggerResponse](#starttriggerresponse)

### StopCrawler



```js
amazonaws_glue.StopCrawler({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [NameString](#namestring)

#### Output
* output [StopCrawlerResponse](#stopcrawlerresponse)

### StopCrawlerSchedule



```js
amazonaws_glue.StopCrawlerSchedule({
  "CrawlerName": ""
}, context)
```

#### Input
* input `object`
  * CrawlerName **required** [NameString](#namestring)

#### Output
* output [StopCrawlerScheduleResponse](#stopcrawlerscheduleresponse)

### StopTrigger



```js
amazonaws_glue.StopTrigger({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [NameString](#namestring)

#### Output
* output [StopTriggerResponse](#stoptriggerresponse)

### UpdateClassifier



```js
amazonaws_glue.UpdateClassifier({}, context)
```

#### Input
* input `object`
  * GrokClassifier [UpdateGrokClassifierRequest](#updategrokclassifierrequest)
  * JsonClassifier [UpdateJsonClassifierRequest](#updatejsonclassifierrequest)
  * XMLClassifier [UpdateXMLClassifierRequest](#updatexmlclassifierrequest)

#### Output
* output [UpdateClassifierResponse](#updateclassifierresponse)

### UpdateConnection



```js
amazonaws_glue.UpdateConnection({
  "Name": "",
  "ConnectionInput": {
    "Name": "",
    "ConnectionType": "",
    "ConnectionProperties": []
  }
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * ConnectionInput **required** [ConnectionInput](#connectioninput)
  * Name **required** [NameString](#namestring)

#### Output
* output [UpdateConnectionResponse](#updateconnectionresponse)

### UpdateCrawler



```js
amazonaws_glue.UpdateCrawler({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Classifiers [ClassifierNameList](#classifiernamelist)
  * Configuration [CrawlerConfiguration](#crawlerconfiguration)
  * DatabaseName [DatabaseName](#databasename)
  * Description [DescriptionStringRemovable](#descriptionstringremovable)
  * Name **required** [NameString](#namestring)
  * Role [Role](#role)
  * Schedule [CronExpression](#cronexpression)
  * SchemaChangePolicy [SchemaChangePolicy](#schemachangepolicy)
  * TablePrefix [TablePrefix](#tableprefix)
  * Targets [CrawlerTargets](#crawlertargets)

#### Output
* output [UpdateCrawlerResponse](#updatecrawlerresponse)

### UpdateCrawlerSchedule



```js
amazonaws_glue.UpdateCrawlerSchedule({
  "CrawlerName": ""
}, context)
```

#### Input
* input `object`
  * CrawlerName **required** [NameString](#namestring)
  * Schedule [CronExpression](#cronexpression)

#### Output
* output [UpdateCrawlerScheduleResponse](#updatecrawlerscheduleresponse)

### UpdateDatabase



```js
amazonaws_glue.UpdateDatabase({
  "Name": "",
  "DatabaseInput": {
    "Name": ""
  }
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseInput **required** [DatabaseInput](#databaseinput)
  * Name **required** [NameString](#namestring)

#### Output
* output [UpdateDatabaseResponse](#updatedatabaseresponse)

### UpdateDevEndpoint



```js
amazonaws_glue.UpdateDevEndpoint({
  "EndpointName": ""
}, context)
```

#### Input
* input `object`
  * CustomLibraries [DevEndpointCustomLibraries](#devendpointcustomlibraries)
  * EndpointName **required** [GenericString](#genericstring)
  * PublicKey [GenericString](#genericstring)
  * UpdateEtlLibraries [BooleanValue](#booleanvalue)

#### Output
* output [UpdateDevEndpointResponse](#updatedevendpointresponse)

### UpdateJob



```js
amazonaws_glue.UpdateJob({
  "JobName": "",
  "JobUpdate": {}
}, context)
```

#### Input
* input `object`
  * JobName **required** [NameString](#namestring)
  * JobUpdate **required** [JobUpdate](#jobupdate)

#### Output
* output [UpdateJobResponse](#updatejobresponse)

### UpdatePartition



```js
amazonaws_glue.UpdatePartition({
  "DatabaseName": "",
  "TableName": "",
  "PartitionValueList": [],
  "PartitionInput": {}
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * PartitionInput **required** [PartitionInput](#partitioninput)
  * PartitionValueList **required** [BoundedPartitionValueList](#boundedpartitionvaluelist)
  * TableName **required** [NameString](#namestring)

#### Output
* output [UpdatePartitionResponse](#updatepartitionresponse)

### UpdateTable



```js
amazonaws_glue.UpdateTable({
  "DatabaseName": "",
  "TableInput": {
    "Name": ""
  }
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * SkipArchive [BooleanNullable](#booleannullable)
  * TableInput **required** [TableInput](#tableinput)

#### Output
* output [UpdateTableResponse](#updatetableresponse)

### UpdateTrigger



```js
amazonaws_glue.UpdateTrigger({
  "Name": "",
  "TriggerUpdate": {}
}, context)
```

#### Input
* input `object`
  * Name **required** [NameString](#namestring)
  * TriggerUpdate **required** [TriggerUpdate](#triggerupdate)

#### Output
* output [UpdateTriggerResponse](#updatetriggerresponse)

### UpdateUserDefinedFunction



```js
amazonaws_glue.UpdateUserDefinedFunction({
  "DatabaseName": "",
  "FunctionName": "",
  "FunctionInput": {}
}, context)
```

#### Input
* input `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * FunctionInput **required** [UserDefinedFunctionInput](#userdefinedfunctioninput)
  * FunctionName **required** [NameString](#namestring)

#### Output
* output [UpdateUserDefinedFunctionResponse](#updateuserdefinedfunctionresponse)



## Definitions

### AccessDeniedException
* AccessDeniedException `object`: Access to a resource was denied.
  * Message [MessageString](#messagestring)

### Action
* Action `object`: Defines an action to be initiated by a trigger.
  * Arguments [GenericMap](#genericmap)
  * JobName [NameString](#namestring)

### ActionList
* ActionList `array`
  * items [Action](#action)

### AlreadyExistsException
* AlreadyExistsException `object`: A resource to be created or added already exists.
  * Message [MessageString](#messagestring)

### AttemptCount
* AttemptCount `integer`

### BatchCreatePartitionRequest
* BatchCreatePartitionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * PartitionInputList **required** [PartitionInputList](#partitioninputlist)
  * TableName **required** [NameString](#namestring)

### BatchCreatePartitionResponse
* BatchCreatePartitionResponse `object`
  * Errors [PartitionErrors](#partitionerrors)

### BatchDeleteConnectionRequest
* BatchDeleteConnectionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * ConnectionNameList **required** [DeleteConnectionNameList](#deleteconnectionnamelist)

### BatchDeleteConnectionResponse
* BatchDeleteConnectionResponse `object`
  * Errors [ErrorByName](#errorbyname)
  * Succeeded [NameStringList](#namestringlist)

### BatchDeletePartitionRequest
* BatchDeletePartitionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * PartitionsToDelete **required** [BatchDeletePartitionValueList](#batchdeletepartitionvaluelist)
  * TableName **required** [NameString](#namestring)

### BatchDeletePartitionResponse
* BatchDeletePartitionResponse `object`
  * Errors [PartitionErrors](#partitionerrors)

### BatchDeletePartitionValueList
* BatchDeletePartitionValueList `array`
  * items [PartitionValueList](#partitionvaluelist)

### BatchDeleteTableNameList
* BatchDeleteTableNameList `array`
  * items [NameString](#namestring)

### BatchDeleteTableRequest
* BatchDeleteTableRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * TablesToDelete **required** [BatchDeleteTableNameList](#batchdeletetablenamelist)

### BatchDeleteTableResponse
* BatchDeleteTableResponse `object`
  * Errors [TableErrors](#tableerrors)

### BatchDeleteTableVersionList
* BatchDeleteTableVersionList `array`
  * items [VersionString](#versionstring)

### BatchDeleteTableVersionRequest
* BatchDeleteTableVersionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * TableName **required** [NameString](#namestring)
  * VersionIds **required** [BatchDeleteTableVersionList](#batchdeletetableversionlist)

### BatchDeleteTableVersionResponse
* BatchDeleteTableVersionResponse `object`
  * Errors [TableVersionErrors](#tableversionerrors)

### BatchGetPartitionRequest
* BatchGetPartitionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * PartitionsToGet **required** [BatchGetPartitionValueList](#batchgetpartitionvaluelist)
  * TableName **required** [NameString](#namestring)

### BatchGetPartitionResponse
* BatchGetPartitionResponse `object`
  * Partitions [PartitionList](#partitionlist)
  * UnprocessedKeys [BatchGetPartitionValueList](#batchgetpartitionvaluelist)

### BatchGetPartitionValueList
* BatchGetPartitionValueList `array`
  * items [PartitionValueList](#partitionvaluelist)

### BatchStopJobRunError
* BatchStopJobRunError `object`: Records an error that occurred when attempting to stop a specified JobRun.
  * ErrorDetail [ErrorDetail](#errordetail)
  * JobName [NameString](#namestring)
  * JobRunId [IdString](#idstring)

### BatchStopJobRunErrorList
* BatchStopJobRunErrorList `array`
  * items [BatchStopJobRunError](#batchstopjobrunerror)

### BatchStopJobRunJobRunIdList
* BatchStopJobRunJobRunIdList `array`
  * items [IdString](#idstring)

### BatchStopJobRunRequest
* BatchStopJobRunRequest `object`
  * JobName **required** [NameString](#namestring)
  * JobRunIds **required** [BatchStopJobRunJobRunIdList](#batchstopjobrunjobrunidlist)

### BatchStopJobRunResponse
* BatchStopJobRunResponse `object`
  * Errors [BatchStopJobRunErrorList](#batchstopjobrunerrorlist)
  * SuccessfulSubmissions [BatchStopJobRunSuccessfulSubmissionList](#batchstopjobrunsuccessfulsubmissionlist)

### BatchStopJobRunSuccessfulSubmission
* BatchStopJobRunSuccessfulSubmission `object`: Records a successful request to stop a specified JobRun.
  * JobName [NameString](#namestring)
  * JobRunId [IdString](#idstring)

### BatchStopJobRunSuccessfulSubmissionList
* BatchStopJobRunSuccessfulSubmissionList `array`
  * items [BatchStopJobRunSuccessfulSubmission](#batchstopjobrunsuccessfulsubmission)

### Boolean
* Boolean `boolean`

### BooleanNullable
* BooleanNullable `boolean`

### BooleanValue
* BooleanValue `boolean`

### BoundedPartitionValueList
* BoundedPartitionValueList `array`
  * items [ValueString](#valuestring)

### CatalogEntries
* CatalogEntries `array`
  * items [CatalogEntry](#catalogentry)

### CatalogEntry
* CatalogEntry `object`: Specifies a table definition in the Data Catalog.
  * DatabaseName **required** [NameString](#namestring)
  * TableName **required** [NameString](#namestring)

### CatalogIdString
* CatalogIdString `string`

### CatalogImportStatus
* CatalogImportStatus `object`: A structure containing migration status information.
  * ImportCompleted [Boolean](#boolean)
  * ImportTime [Timestamp](#timestamp)
  * ImportedBy [NameString](#namestring)

### Classification
* Classification `string`

### Classifier
* Classifier `object`: <p>Classifiers are written in Python and triggered during a crawl task. You can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier checks whether a given file is in a format it can handle, and if it is, the classifier creates a schema in the form of a <code>StructType</code> object that matches that data format.</p> <p>A classifier can be a <code>grok</code> classifier, an XML classifier, or a JSON classifier, asspecified in one of the fields in the <code>Classifier</code> object.</p>
  * GrokClassifier [GrokClassifier](#grokclassifier)
  * JsonClassifier [JsonClassifier](#jsonclassifier)
  * XMLClassifier [XMLClassifier](#xmlclassifier)

### ClassifierList
* ClassifierList `array`
  * items [Classifier](#classifier)

### ClassifierNameList
* ClassifierNameList `array`
  * items [NameString](#namestring)

### CodeGenArgName
* CodeGenArgName `string`

### CodeGenArgValue
* CodeGenArgValue `string`

### CodeGenEdge
* CodeGenEdge `object`: Represents a directional edge in a directed acyclic graph (DAG).
  * Source **required** [CodeGenIdentifier](#codegenidentifier)
  * Target **required** [CodeGenIdentifier](#codegenidentifier)
  * TargetParameter [CodeGenArgName](#codegenargname)

### CodeGenIdentifier
* CodeGenIdentifier `string`

### CodeGenNode
* CodeGenNode `object`: Represents a node in a directed acyclic graph (DAG)
  * Args **required** [CodeGenNodeArgs](#codegennodeargs)
  * Id **required** [CodeGenIdentifier](#codegenidentifier)
  * LineNumber [Integer](#integer)
  * NodeType **required** [CodeGenNodeType](#codegennodetype)

### CodeGenNodeArg
* CodeGenNodeArg `object`: An argument or property of a node.
  * Name **required** [CodeGenArgName](#codegenargname)
  * Param [Boolean](#boolean)
  * Value **required** [CodeGenArgValue](#codegenargvalue)

### CodeGenNodeArgs
* CodeGenNodeArgs `array`
  * items [CodeGenNodeArg](#codegennodearg)

### CodeGenNodeType
* CodeGenNodeType `string`

### Column
* Column `object`: A column in a <code>Table</code>.
  * Comment [CommentString](#commentstring)
  * Name **required** [NameString](#namestring)
  * Type [ColumnTypeString](#columntypestring)

### ColumnList
* ColumnList `array`
  * items [Column](#column)

### ColumnTypeString
* ColumnTypeString `string`

### ColumnValueStringList
* ColumnValueStringList `array`
  * items [ColumnValuesString](#columnvaluesstring)

### ColumnValuesString
* ColumnValuesString `string`

### CommentString
* CommentString `string`

### ConcurrentModificationException
* ConcurrentModificationException `object`: Two processes are trying to modify a resource simultaneously.
  * Message [MessageString](#messagestring)

### ConcurrentRunsExceededException
* ConcurrentRunsExceededException `object`: Too many jobs are being run concurrently.
  * Message [MessageString](#messagestring)

### Condition
* Condition `object`: Defines a condition under which a trigger fires.
  * JobName [NameString](#namestring)
  * LogicalOperator [LogicalOperator](#logicaloperator)
  * State [JobRunState](#jobrunstate)

### ConditionList
* ConditionList `array`
  * items [Condition](#condition)

### Connection
* Connection `object`: Defines a connection to a data source.
  * ConnectionProperties [ConnectionProperties](#connectionproperties)
  * ConnectionType [ConnectionType](#connectiontype)
  * CreationTime [Timestamp](#timestamp)
  * Description [DescriptionString](#descriptionstring)
  * LastUpdatedBy [NameString](#namestring)
  * LastUpdatedTime [Timestamp](#timestamp)
  * MatchCriteria [MatchCriteria](#matchcriteria)
  * Name [NameString](#namestring)
  * PhysicalConnectionRequirements [PhysicalConnectionRequirements](#physicalconnectionrequirements)

### ConnectionInput
* ConnectionInput `object`: A structure used to specify a connection to create or update.
  * ConnectionProperties **required** [ConnectionProperties](#connectionproperties)
  * ConnectionType **required** [ConnectionType](#connectiontype)
  * Description [DescriptionString](#descriptionstring)
  * MatchCriteria [MatchCriteria](#matchcriteria)
  * Name **required** [NameString](#namestring)
  * PhysicalConnectionRequirements [PhysicalConnectionRequirements](#physicalconnectionrequirements)

### ConnectionList
* ConnectionList `array`
  * items [Connection](#connection)

### ConnectionName
* ConnectionName `string`

### ConnectionProperties
* ConnectionProperties `array`
  * items `object`
    * key [ConnectionPropertyKey](#connectionpropertykey)
    * value [ValueString](#valuestring)

### ConnectionPropertyKey
* ConnectionPropertyKey `string` (values: HOST, PORT, USERNAME, PASSWORD, JDBC_DRIVER_JAR_URI, JDBC_DRIVER_CLASS_NAME, JDBC_ENGINE, JDBC_ENGINE_VERSION, CONFIG_FILES, INSTANCE_ID, JDBC_CONNECTION_URL)

### ConnectionType
* ConnectionType `string` (values: JDBC, SFTP)

### ConnectionsList
* ConnectionsList `object`: Specifies the connections used by a job.
  * Connections [StringList](#stringlist)

### Crawler
* Crawler `object`: Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the AWS Glue Data Catalog.
  * Classifiers [ClassifierNameList](#classifiernamelist)
  * Configuration [CrawlerConfiguration](#crawlerconfiguration)
  * CrawlElapsedTime [MillisecondsCount](#millisecondscount)
  * CreationTime [Timestamp](#timestamp)
  * DatabaseName [DatabaseName](#databasename)
  * Description [DescriptionString](#descriptionstring)
  * LastCrawl [LastCrawlInfo](#lastcrawlinfo)
  * LastUpdated [Timestamp](#timestamp)
  * Name [NameString](#namestring)
  * Role [Role](#role)
  * Schedule [Schedule](#schedule)
  * SchemaChangePolicy [SchemaChangePolicy](#schemachangepolicy)
  * State [CrawlerState](#crawlerstate)
  * TablePrefix [TablePrefix](#tableprefix)
  * Targets [CrawlerTargets](#crawlertargets)
  * Version [VersionId](#versionid)

### CrawlerConfiguration
* CrawlerConfiguration `string`

### CrawlerList
* CrawlerList `array`
  * items [Crawler](#crawler)

### CrawlerMetrics
* CrawlerMetrics `object`: Metrics for a specified crawler.
  * CrawlerName [NameString](#namestring)
  * LastRuntimeSeconds [NonNegativeDouble](#nonnegativedouble)
  * MedianRuntimeSeconds [NonNegativeDouble](#nonnegativedouble)
  * StillEstimating [Boolean](#boolean)
  * TablesCreated [NonNegativeInteger](#nonnegativeinteger)
  * TablesDeleted [NonNegativeInteger](#nonnegativeinteger)
  * TablesUpdated [NonNegativeInteger](#nonnegativeinteger)
  * TimeLeftSeconds [NonNegativeDouble](#nonnegativedouble)

### CrawlerMetricsList
* CrawlerMetricsList `array`
  * items [CrawlerMetrics](#crawlermetrics)

### CrawlerNameList
* CrawlerNameList `array`
  * items [NameString](#namestring)

### CrawlerNotRunningException
* CrawlerNotRunningException `object`: The specified crawler is not running.
  * Message [MessageString](#messagestring)

### CrawlerRunningException
* CrawlerRunningException `object`: The operation cannot be performed because the crawler is already running.
  * Message [MessageString](#messagestring)

### CrawlerState
* CrawlerState `string` (values: READY, RUNNING, STOPPING)

### CrawlerStoppingException
* CrawlerStoppingException `object`: The specified crawler is stopping.
  * Message [MessageString](#messagestring)

### CrawlerTargets
* CrawlerTargets `object`: Specifies data stores to crawl.
  * JdbcTargets [JdbcTargetList](#jdbctargetlist)
  * S3Targets [S3TargetList](#s3targetlist)

### CreateClassifierRequest
* CreateClassifierRequest `object`
  * GrokClassifier [CreateGrokClassifierRequest](#creategrokclassifierrequest)
  * JsonClassifier [CreateJsonClassifierRequest](#createjsonclassifierrequest)
  * XMLClassifier [CreateXMLClassifierRequest](#createxmlclassifierrequest)

### CreateClassifierResponse
* CreateClassifierResponse `object`

### CreateConnectionRequest
* CreateConnectionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * ConnectionInput **required** [ConnectionInput](#connectioninput)

### CreateConnectionResponse
* CreateConnectionResponse `object`

### CreateCrawlerRequest
* CreateCrawlerRequest `object`
  * Classifiers [ClassifierNameList](#classifiernamelist)
  * Configuration [CrawlerConfiguration](#crawlerconfiguration)
  * DatabaseName **required** [DatabaseName](#databasename)
  * Description [DescriptionString](#descriptionstring)
  * Name **required** [NameString](#namestring)
  * Role **required** [Role](#role)
  * Schedule [CronExpression](#cronexpression)
  * SchemaChangePolicy [SchemaChangePolicy](#schemachangepolicy)
  * TablePrefix [TablePrefix](#tableprefix)
  * Targets **required** [CrawlerTargets](#crawlertargets)

### CreateCrawlerResponse
* CreateCrawlerResponse `object`

### CreateDatabaseRequest
* CreateDatabaseRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseInput **required** [DatabaseInput](#databaseinput)

### CreateDatabaseResponse
* CreateDatabaseResponse `object`

### CreateDevEndpointRequest
* CreateDevEndpointRequest `object`
  * EndpointName **required** [GenericString](#genericstring)
  * ExtraJarsS3Path [GenericString](#genericstring)
  * ExtraPythonLibsS3Path [GenericString](#genericstring)
  * NumberOfNodes [IntegerValue](#integervalue)
  * PublicKey **required** [GenericString](#genericstring)
  * RoleArn **required** [RoleArn](#rolearn)
  * SecurityGroupIds [StringList](#stringlist)
  * SubnetId [GenericString](#genericstring)

### CreateDevEndpointResponse
* CreateDevEndpointResponse `object`
  * AvailabilityZone [GenericString](#genericstring)
  * CreatedTimestamp [TimestampValue](#timestampvalue)
  * EndpointName [GenericString](#genericstring)
  * ExtraJarsS3Path [GenericString](#genericstring)
  * ExtraPythonLibsS3Path [GenericString](#genericstring)
  * FailureReason [GenericString](#genericstring)
  * NumberOfNodes [IntegerValue](#integervalue)
  * RoleArn [RoleArn](#rolearn)
  * SecurityGroupIds [StringList](#stringlist)
  * Status [GenericString](#genericstring)
  * SubnetId [GenericString](#genericstring)
  * VpcId [GenericString](#genericstring)
  * YarnEndpointAddress [GenericString](#genericstring)
  * ZeppelinRemoteSparkInterpreterPort [IntegerValue](#integervalue)

### CreateGrokClassifierRequest
* CreateGrokClassifierRequest `object`: Specifies a <code>grok</code> classifier for <code>CreateClassifier</code> to create.
  * Classification **required** [Classification](#classification)
  * CustomPatterns [CustomPatterns](#custompatterns)
  * GrokPattern **required** [GrokPattern](#grokpattern)
  * Name **required** [NameString](#namestring)

### CreateJobRequest
* CreateJobRequest `object`
  * AllocatedCapacity [IntegerValue](#integervalue)
  * Command **required** [JobCommand](#jobcommand)
  * Connections [ConnectionsList](#connectionslist)
  * DefaultArguments [GenericMap](#genericmap)
  * Description [DescriptionString](#descriptionstring)
  * ExecutionProperty [ExecutionProperty](#executionproperty)
  * LogUri [UriString](#uristring)
  * MaxRetries [MaxRetries](#maxretries)
  * Name **required** [NameString](#namestring)
  * Role **required** [RoleString](#rolestring)

### CreateJobResponse
* CreateJobResponse `object`
  * Name [NameString](#namestring)

### CreateJsonClassifierRequest
* CreateJsonClassifierRequest `object`: Specifies a JSON classifier for <code>CreateClassifier</code> to create.
  * JsonPath **required** [JsonPath](#jsonpath)
  * Name **required** [NameString](#namestring)

### CreatePartitionRequest
* CreatePartitionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * PartitionInput **required** [PartitionInput](#partitioninput)
  * TableName **required** [NameString](#namestring)

### CreatePartitionResponse
* CreatePartitionResponse `object`

### CreateScriptRequest
* CreateScriptRequest `object`
  * DagEdges [DagEdges](#dagedges)
  * DagNodes [DagNodes](#dagnodes)
  * Language [Language](#language)

### CreateScriptResponse
* CreateScriptResponse `object`
  * PythonScript [PythonScript](#pythonscript)
  * ScalaCode [ScalaCode](#scalacode)

### CreateTableRequest
* CreateTableRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * TableInput **required** [TableInput](#tableinput)

### CreateTableResponse
* CreateTableResponse `object`

### CreateTriggerRequest
* CreateTriggerRequest `object`
  * Actions **required** [ActionList](#actionlist)
  * Description [DescriptionString](#descriptionstring)
  * Name **required** [NameString](#namestring)
  * Predicate [Predicate](#predicate)
  * Schedule [GenericString](#genericstring)
  * Type **required** [TriggerType](#triggertype)

### CreateTriggerResponse
* CreateTriggerResponse `object`
  * Name [NameString](#namestring)

### CreateUserDefinedFunctionRequest
* CreateUserDefinedFunctionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * FunctionInput **required** [UserDefinedFunctionInput](#userdefinedfunctioninput)

### CreateUserDefinedFunctionResponse
* CreateUserDefinedFunctionResponse `object`

### CreateXMLClassifierRequest
* CreateXMLClassifierRequest `object`: Specifies an XML classifier for <code>CreateClassifier</code> to create.
  * Classification **required** [Classification](#classification)
  * Name **required** [NameString](#namestring)
  * RowTag [RowTag](#rowtag)

### CronExpression
* CronExpression `string`

### CustomPatterns
* CustomPatterns `string`

### DagEdges
* DagEdges `array`
  * items [CodeGenEdge](#codegenedge)

### DagNodes
* DagNodes `array`
  * items [CodeGenNode](#codegennode)

### Database
* Database `object`: The <code>Database</code> object represents a logical grouping of tables that may reside in a Hive metastore or an RDBMS.
  * CreateTime [Timestamp](#timestamp)
  * Description [DescriptionString](#descriptionstring)
  * LocationUri [URI](#uri)
  * Name **required** [NameString](#namestring)
  * Parameters [ParametersMap](#parametersmap)

### DatabaseInput
* DatabaseInput `object`: The structure used to create or update a database.
  * Description [DescriptionString](#descriptionstring)
  * LocationUri [URI](#uri)
  * Name **required** [NameString](#namestring)
  * Parameters [ParametersMap](#parametersmap)

### DatabaseList
* DatabaseList `array`
  * items [Database](#database)

### DatabaseName
* DatabaseName `string`

### DeleteBehavior
* DeleteBehavior `string` (values: LOG, DELETE_FROM_DATABASE, DEPRECATE_IN_DATABASE)

### DeleteClassifierRequest
* DeleteClassifierRequest `object`
  * Name **required** [NameString](#namestring)

### DeleteClassifierResponse
* DeleteClassifierResponse `object`

### DeleteConnectionNameList
* DeleteConnectionNameList `array`
  * items [NameString](#namestring)

### DeleteConnectionRequest
* DeleteConnectionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * ConnectionName **required** [NameString](#namestring)

### DeleteConnectionResponse
* DeleteConnectionResponse `object`

### DeleteCrawlerRequest
* DeleteCrawlerRequest `object`
  * Name **required** [NameString](#namestring)

### DeleteCrawlerResponse
* DeleteCrawlerResponse `object`

### DeleteDatabaseRequest
* DeleteDatabaseRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * Name **required** [NameString](#namestring)

### DeleteDatabaseResponse
* DeleteDatabaseResponse `object`

### DeleteDevEndpointRequest
* DeleteDevEndpointRequest `object`
  * EndpointName **required** [GenericString](#genericstring)

### DeleteDevEndpointResponse
* DeleteDevEndpointResponse `object`

### DeleteJobRequest
* DeleteJobRequest `object`
  * JobName **required** [NameString](#namestring)

### DeleteJobResponse
* DeleteJobResponse `object`
  * JobName [NameString](#namestring)

### DeletePartitionRequest
* DeletePartitionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * PartitionValues **required** [ValueStringList](#valuestringlist)
  * TableName **required** [NameString](#namestring)

### DeletePartitionResponse
* DeletePartitionResponse `object`

### DeleteTableRequest
* DeleteTableRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * Name **required** [NameString](#namestring)

### DeleteTableResponse
* DeleteTableResponse `object`

### DeleteTableVersionRequest
* DeleteTableVersionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * TableName **required** [NameString](#namestring)
  * VersionId **required** [VersionString](#versionstring)

### DeleteTableVersionResponse
* DeleteTableVersionResponse `object`

### DeleteTriggerRequest
* DeleteTriggerRequest `object`
  * Name **required** [NameString](#namestring)

### DeleteTriggerResponse
* DeleteTriggerResponse `object`
  * Name [NameString](#namestring)

### DeleteUserDefinedFunctionRequest
* DeleteUserDefinedFunctionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * FunctionName **required** [NameString](#namestring)

### DeleteUserDefinedFunctionResponse
* DeleteUserDefinedFunctionResponse `object`

### DescriptionString
* DescriptionString `string`

### DescriptionStringRemovable
* DescriptionStringRemovable `string`

### DevEndpoint
* DevEndpoint `object`: A development endpoint where a developer can remotely debug ETL scripts.
  * AvailabilityZone [GenericString](#genericstring)
  * CreatedTimestamp [TimestampValue](#timestampvalue)
  * EndpointName [GenericString](#genericstring)
  * ExtraJarsS3Path [GenericString](#genericstring)
  * ExtraPythonLibsS3Path [GenericString](#genericstring)
  * FailureReason [GenericString](#genericstring)
  * LastModifiedTimestamp [TimestampValue](#timestampvalue)
  * LastUpdateStatus [GenericString](#genericstring)
  * NumberOfNodes [IntegerValue](#integervalue)
  * PublicAddress [GenericString](#genericstring)
  * PublicKey [GenericString](#genericstring)
  * RoleArn [RoleArn](#rolearn)
  * SecurityGroupIds [StringList](#stringlist)
  * Status [GenericString](#genericstring)
  * SubnetId [GenericString](#genericstring)
  * VpcId [GenericString](#genericstring)
  * YarnEndpointAddress [GenericString](#genericstring)
  * ZeppelinRemoteSparkInterpreterPort [IntegerValue](#integervalue)

### DevEndpointCustomLibraries
* DevEndpointCustomLibraries `object`: Custom libraries to be loaded into a DevEndpoint.
  * ExtraJarsS3Path [GenericString](#genericstring)
  * ExtraPythonLibsS3Path [GenericString](#genericstring)

### DevEndpointList
* DevEndpointList `array`
  * items [DevEndpoint](#devendpoint)

### EntityNotFoundException
* EntityNotFoundException `object`: A specified entity does not exist
  * Message [MessageString](#messagestring)

### ErrorByName
* ErrorByName `array`
  * items `object`
    * key [NameString](#namestring)
    * value [ErrorDetail](#errordetail)

### ErrorDetail
* ErrorDetail `object`: Contains details about an error.
  * ErrorCode [NameString](#namestring)
  * ErrorMessage [DescriptionString](#descriptionstring)

### ErrorString
* ErrorString `string`

### ExecutionProperty
* ExecutionProperty `object`: An execution property of a job.
  * MaxConcurrentRuns [MaxConcurrentRuns](#maxconcurrentruns)

### FieldType
* FieldType `string`

### FilterString
* FilterString `string`

### FormatString
* FormatString `string`

### GenericMap
* GenericMap `array`
  * items `object`
    * key [GenericString](#genericstring)
    * value [GenericString](#genericstring)

### GenericString
* GenericString `string`

### GetCatalogImportStatusRequest
* GetCatalogImportStatusRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)

### GetCatalogImportStatusResponse
* GetCatalogImportStatusResponse `object`
  * ImportStatus [CatalogImportStatus](#catalogimportstatus)

### GetClassifierRequest
* GetClassifierRequest `object`
  * Name **required** [NameString](#namestring)

### GetClassifierResponse
* GetClassifierResponse `object`
  * Classifier [Classifier](#classifier)

### GetClassifiersRequest
* GetClassifiersRequest `object`
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)

### GetClassifiersResponse
* GetClassifiersResponse `object`
  * Classifiers [ClassifierList](#classifierlist)
  * NextToken [Token](#token)

### GetConnectionRequest
* GetConnectionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * Name **required** [NameString](#namestring)

### GetConnectionResponse
* GetConnectionResponse `object`
  * Connection [Connection](#connection)

### GetConnectionsFilter
* GetConnectionsFilter `object`: Filters the connection definitions returned by the <code>GetConnections</code> API.
  * ConnectionType [ConnectionType](#connectiontype)
  * MatchCriteria [MatchCriteria](#matchcriteria)

### GetConnectionsRequest
* GetConnectionsRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * Filter [GetConnectionsFilter](#getconnectionsfilter)
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)

### GetConnectionsResponse
* GetConnectionsResponse `object`
  * ConnectionList [ConnectionList](#connectionlist)
  * NextToken [Token](#token)

### GetCrawlerMetricsRequest
* GetCrawlerMetricsRequest `object`
  * CrawlerNameList [CrawlerNameList](#crawlernamelist)
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)

### GetCrawlerMetricsResponse
* GetCrawlerMetricsResponse `object`
  * CrawlerMetricsList [CrawlerMetricsList](#crawlermetricslist)
  * NextToken [Token](#token)

### GetCrawlerRequest
* GetCrawlerRequest `object`
  * Name **required** [NameString](#namestring)

### GetCrawlerResponse
* GetCrawlerResponse `object`
  * Crawler [Crawler](#crawler)

### GetCrawlersRequest
* GetCrawlersRequest `object`
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)

### GetCrawlersResponse
* GetCrawlersResponse `object`
  * Crawlers [CrawlerList](#crawlerlist)
  * NextToken [Token](#token)

### GetDatabaseRequest
* GetDatabaseRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * Name **required** [NameString](#namestring)

### GetDatabaseResponse
* GetDatabaseResponse `object`
  * Database [Database](#database)

### GetDatabasesRequest
* GetDatabasesRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)

### GetDatabasesResponse
* GetDatabasesResponse `object`
  * DatabaseList **required** [DatabaseList](#databaselist)
  * NextToken [Token](#token)

### GetDataflowGraphRequest
* GetDataflowGraphRequest `object`
  * PythonScript [PythonScript](#pythonscript)

### GetDataflowGraphResponse
* GetDataflowGraphResponse `object`
  * DagEdges [DagEdges](#dagedges)
  * DagNodes [DagNodes](#dagnodes)

### GetDevEndpointRequest
* GetDevEndpointRequest `object`
  * EndpointName **required** [GenericString](#genericstring)

### GetDevEndpointResponse
* GetDevEndpointResponse `object`
  * DevEndpoint [DevEndpoint](#devendpoint)

### GetDevEndpointsRequest
* GetDevEndpointsRequest `object`
  * MaxResults [PageSize](#pagesize)
  * NextToken [GenericString](#genericstring)

### GetDevEndpointsResponse
* GetDevEndpointsResponse `object`
  * DevEndpoints [DevEndpointList](#devendpointlist)
  * NextToken [GenericString](#genericstring)

### GetJobRequest
* GetJobRequest `object`
  * JobName **required** [NameString](#namestring)

### GetJobResponse
* GetJobResponse `object`
  * Job [Job](#job)

### GetJobRunRequest
* GetJobRunRequest `object`
  * JobName **required** [NameString](#namestring)
  * PredecessorsIncluded [BooleanValue](#booleanvalue)
  * RunId **required** [IdString](#idstring)

### GetJobRunResponse
* GetJobRunResponse `object`
  * JobRun [JobRun](#jobrun)

### GetJobRunsRequest
* GetJobRunsRequest `object`
  * JobName **required** [NameString](#namestring)
  * MaxResults [PageSize](#pagesize)
  * NextToken [GenericString](#genericstring)

### GetJobRunsResponse
* GetJobRunsResponse `object`
  * JobRuns [JobRunList](#jobrunlist)
  * NextToken [GenericString](#genericstring)

### GetJobsRequest
* GetJobsRequest `object`
  * MaxResults [PageSize](#pagesize)
  * NextToken [GenericString](#genericstring)

### GetJobsResponse
* GetJobsResponse `object`
  * Jobs [JobList](#joblist)
  * NextToken [GenericString](#genericstring)

### GetMappingRequest
* GetMappingRequest `object`
  * Location [Location](#location)
  * Sinks [CatalogEntries](#catalogentries)
  * Source **required** [CatalogEntry](#catalogentry)

### GetMappingResponse
* GetMappingResponse `object`
  * Mapping **required** [MappingList](#mappinglist)

### GetPartitionRequest
* GetPartitionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * PartitionValues **required** [ValueStringList](#valuestringlist)
  * TableName **required** [NameString](#namestring)

### GetPartitionResponse
* GetPartitionResponse `object`
  * Partition [Partition](#partition)

### GetPartitionsRequest
* GetPartitionsRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * Expression [PredicateString](#predicatestring)
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)
  * Segment [Segment](#segment)
  * TableName **required** [NameString](#namestring)

### GetPartitionsResponse
* GetPartitionsResponse `object`
  * NextToken [Token](#token)
  * Partitions [PartitionList](#partitionlist)

### GetPlanRequest
* GetPlanRequest `object`
  * Language [Language](#language)
  * Location [Location](#location)
  * Mapping **required** [MappingList](#mappinglist)
  * Sinks [CatalogEntries](#catalogentries)
  * Source **required** [CatalogEntry](#catalogentry)

### GetPlanResponse
* GetPlanResponse `object`
  * PythonScript [PythonScript](#pythonscript)
  * ScalaCode [ScalaCode](#scalacode)

### GetTableRequest
* GetTableRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * Name **required** [NameString](#namestring)

### GetTableResponse
* GetTableResponse `object`
  * Table [Table](#table)

### GetTableVersionRequest
* GetTableVersionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * TableName **required** [NameString](#namestring)
  * VersionId [VersionString](#versionstring)

### GetTableVersionResponse
* GetTableVersionResponse `object`
  * TableVersion [TableVersion](#tableversion)

### GetTableVersionsList
* GetTableVersionsList `array`
  * items [TableVersion](#tableversion)

### GetTableVersionsRequest
* GetTableVersionsRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)
  * TableName **required** [NameString](#namestring)

### GetTableVersionsResponse
* GetTableVersionsResponse `object`
  * NextToken [Token](#token)
  * TableVersions [GetTableVersionsList](#gettableversionslist)

### GetTablesRequest
* GetTablesRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * Expression [FilterString](#filterstring)
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)

### GetTablesResponse
* GetTablesResponse `object`
  * NextToken [Token](#token)
  * TableList [TableList](#tablelist)

### GetTriggerRequest
* GetTriggerRequest `object`
  * Name **required** [NameString](#namestring)

### GetTriggerResponse
* GetTriggerResponse `object`
  * Trigger [Trigger](#trigger)

### GetTriggersRequest
* GetTriggersRequest `object`
  * DependentJobName [NameString](#namestring)
  * MaxResults [PageSize](#pagesize)
  * NextToken [GenericString](#genericstring)

### GetTriggersResponse
* GetTriggersResponse `object`
  * NextToken [GenericString](#genericstring)
  * Triggers [TriggerList](#triggerlist)

### GetUserDefinedFunctionRequest
* GetUserDefinedFunctionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * FunctionName **required** [NameString](#namestring)

### GetUserDefinedFunctionResponse
* GetUserDefinedFunctionResponse `object`
  * UserDefinedFunction [UserDefinedFunction](#userdefinedfunction)

### GetUserDefinedFunctionsRequest
* GetUserDefinedFunctionsRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * MaxResults [PageSize](#pagesize)
  * NextToken [Token](#token)
  * Pattern **required** [NameString](#namestring)

### GetUserDefinedFunctionsResponse
* GetUserDefinedFunctionsResponse `object`
  * NextToken [Token](#token)
  * UserDefinedFunctions [UserDefinedFunctionList](#userdefinedfunctionlist)

### GrokClassifier
* GrokClassifier `object`: A classifier that uses <code>grok</code> patterns.
  * Classification **required** [Classification](#classification)
  * CreationTime [Timestamp](#timestamp)
  * CustomPatterns [CustomPatterns](#custompatterns)
  * GrokPattern **required** [GrokPattern](#grokpattern)
  * LastUpdated [Timestamp](#timestamp)
  * Name **required** [NameString](#namestring)
  * Version [VersionId](#versionid)

### GrokPattern
* GrokPattern `string`

### IdString
* IdString `string`

### IdempotentParameterMismatchException
* IdempotentParameterMismatchException `object`: The same unique identifier was associated with two different records.
  * Message [MessageString](#messagestring)

### ImportCatalogToGlueRequest
* ImportCatalogToGlueRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)

### ImportCatalogToGlueResponse
* ImportCatalogToGlueResponse `object`

### Integer
* Integer `integer`

### IntegerFlag
* IntegerFlag `integer`

### IntegerValue
* IntegerValue `integer`

### InternalServiceException
* InternalServiceException `object`: An internal service error occurred.
  * Message [MessageString](#messagestring)

### InvalidInputException
* InvalidInputException `object`: The input provided was not valid.
  * Message [MessageString](#messagestring)

### JdbcTarget
* JdbcTarget `object`: Specifies a JDBC data store to crawl.
  * ConnectionName [ConnectionName](#connectionname)
  * Exclusions [PathList](#pathlist)
  * Path [Path](#path)

### JdbcTargetList
* JdbcTargetList `array`
  * items [JdbcTarget](#jdbctarget)

### Job
* Job `object`: Specifies a job.
  * AllocatedCapacity [IntegerValue](#integervalue)
  * Command [JobCommand](#jobcommand)
  * Connections [ConnectionsList](#connectionslist)
  * CreatedOn [TimestampValue](#timestampvalue)
  * DefaultArguments [GenericMap](#genericmap)
  * Description [DescriptionString](#descriptionstring)
  * ExecutionProperty [ExecutionProperty](#executionproperty)
  * LastModifiedOn [TimestampValue](#timestampvalue)
  * LogUri [UriString](#uristring)
  * MaxRetries [MaxRetries](#maxretries)
  * Name [NameString](#namestring)
  * Role [RoleString](#rolestring)

### JobBookmarkEntry
* JobBookmarkEntry `object`: Defines a point which a job can resume processing.
  * Attempt [IntegerValue](#integervalue)
  * JobBookmark [JsonValue](#jsonvalue)
  * JobName [JobName](#jobname)
  * Run [IntegerValue](#integervalue)
  * Version [IntegerValue](#integervalue)

### JobCommand
* JobCommand `object`: Specifies code that executes a job.
  * Name [GenericString](#genericstring)
  * ScriptLocation [ScriptLocationString](#scriptlocationstring)

### JobList
* JobList `array`
  * items [Job](#job)

### JobName
* JobName `string`

### JobRun
* JobRun `object`: Contains information about a job run.
  * AllocatedCapacity [IntegerValue](#integervalue)
  * Arguments [GenericMap](#genericmap)
  * Attempt [AttemptCount](#attemptcount)
  * CompletedOn [TimestampValue](#timestampvalue)
  * ErrorMessage [ErrorString](#errorstring)
  * Id [IdString](#idstring)
  * JobName [NameString](#namestring)
  * JobRunState [JobRunState](#jobrunstate)
  * LastModifiedOn [TimestampValue](#timestampvalue)
  * PredecessorRuns [PredecessorList](#predecessorlist)
  * PreviousRunId [IdString](#idstring)
  * StartedOn [TimestampValue](#timestampvalue)
  * TriggerName [NameString](#namestring)

### JobRunList
* JobRunList `array`
  * items [JobRun](#jobrun)

### JobRunState
* JobRunState `string` (values: STARTING, RUNNING, STOPPING, STOPPED, SUCCEEDED, FAILED)

### JobUpdate
* JobUpdate `object`: Specifies information used to update an existing job. Note that the previous job definition will be completely overwritten by this information.
  * AllocatedCapacity [IntegerValue](#integervalue)
  * Command [JobCommand](#jobcommand)
  * Connections [ConnectionsList](#connectionslist)
  * DefaultArguments [GenericMap](#genericmap)
  * Description [DescriptionString](#descriptionstring)
  * ExecutionProperty [ExecutionProperty](#executionproperty)
  * LogUri [UriString](#uristring)
  * MaxRetries [MaxRetries](#maxretries)
  * Role [RoleString](#rolestring)

### JsonClassifier
* JsonClassifier `object`: A classifier for <code>JSON</code> content.
  * CreationTime [Timestamp](#timestamp)
  * JsonPath **required** [JsonPath](#jsonpath)
  * LastUpdated [Timestamp](#timestamp)
  * Name **required** [NameString](#namestring)
  * Version [VersionId](#versionid)

### JsonPath
* JsonPath `string`

### JsonValue
* JsonValue `string`

### KeyString
* KeyString `string`

### Language
* Language `string` (values: PYTHON, SCALA)

### LastCrawlInfo
* LastCrawlInfo `object`: Status and error information about the most recent crawl.
  * ErrorMessage [DescriptionString](#descriptionstring)
  * LogGroup [LogGroup](#loggroup)
  * LogStream [LogStream](#logstream)
  * MessagePrefix [MessagePrefix](#messageprefix)
  * StartTime [Timestamp](#timestamp)
  * Status [LastCrawlStatus](#lastcrawlstatus)

### LastCrawlStatus
* LastCrawlStatus `string` (values: SUCCEEDED, CANCELLED, FAILED)

### Location
* Location `object`: The location of resources.
  * Jdbc [CodeGenNodeArgs](#codegennodeargs)
  * S3 [CodeGenNodeArgs](#codegennodeargs)

### LocationMap
* LocationMap `array`
  * items `object`
    * key [ColumnValuesString](#columnvaluesstring)
    * value [ColumnValuesString](#columnvaluesstring)

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

### MappingEntry
* MappingEntry `object`: Defines a mapping.
  * SourcePath [SchemaPathString](#schemapathstring)
  * SourceTable [TableName](#tablename)
  * SourceType [FieldType](#fieldtype)
  * TargetPath [SchemaPathString](#schemapathstring)
  * TargetTable [TableName](#tablename)
  * TargetType [FieldType](#fieldtype)

### MappingList
* MappingList `array`
  * items [MappingEntry](#mappingentry)

### MatchCriteria
* MatchCriteria `array`
  * items [NameString](#namestring)

### MaxConcurrentRuns
* MaxConcurrentRuns `integer`

### MaxRetries
* MaxRetries `integer`

### MessagePrefix
* MessagePrefix `string`

### MessageString
* MessageString `string`

### MillisecondsCount
* MillisecondsCount `integer`

### NameString
* NameString `string`

### NameStringList
* NameStringList `array`
  * items [NameString](#namestring)

### NoScheduleException
* NoScheduleException `object`: There is no applicable schedule.
  * Message [MessageString](#messagestring)

### NonNegativeDouble
* NonNegativeDouble `number`

### NonNegativeInteger
* NonNegativeInteger `integer`

### OperationTimeoutException
* OperationTimeoutException `object`: The operation timed out.
  * Message [MessageString](#messagestring)

### Order
* Order `object`: Specifies the sort order of a sorted column.
  * Column **required** [NameString](#namestring)
  * SortOrder **required** [IntegerFlag](#integerflag)

### OrderList
* OrderList `array`
  * items [Order](#order)

### PageSize
* PageSize `integer`

### ParametersMap
* ParametersMap `array`
  * items `object`
    * key [KeyString](#keystring)
    * value [ParametersMapValue](#parametersmapvalue)

### ParametersMapValue
* ParametersMapValue `string`

### Partition
* Partition `object`: Represents a slice of table data.
  * CreationTime [Timestamp](#timestamp)
  * DatabaseName [NameString](#namestring)
  * LastAccessTime [Timestamp](#timestamp)
  * LastAnalyzedTime [Timestamp](#timestamp)
  * Parameters [ParametersMap](#parametersmap)
  * StorageDescriptor [StorageDescriptor](#storagedescriptor)
  * TableName [NameString](#namestring)
  * Values [ValueStringList](#valuestringlist)

### PartitionError
* PartitionError `object`: Contains information about a partition error.
  * ErrorDetail [ErrorDetail](#errordetail)
  * PartitionValues [ValueStringList](#valuestringlist)

### PartitionErrors
* PartitionErrors `array`
  * items [PartitionError](#partitionerror)

### PartitionInput
* PartitionInput `object`: The structure used to create and update a partion.
  * LastAccessTime [Timestamp](#timestamp)
  * LastAnalyzedTime [Timestamp](#timestamp)
  * Parameters [ParametersMap](#parametersmap)
  * StorageDescriptor [StorageDescriptor](#storagedescriptor)
  * Values [ValueStringList](#valuestringlist)

### PartitionInputList
* PartitionInputList `array`
  * items [PartitionInput](#partitioninput)

### PartitionList
* PartitionList `array`
  * items [Partition](#partition)

### PartitionValueList
* PartitionValueList `object`: Contains a list of values defining partitions.
  * Values **required** [ValueStringList](#valuestringlist)

### Path
* Path `string`

### PathList
* PathList `array`
  * items [Path](#path)

### PhysicalConnectionRequirements
* PhysicalConnectionRequirements `object`: Specifies the physical requirements for a connection.
  * AvailabilityZone [NameString](#namestring)
  * SecurityGroupIdList [SecurityGroupIdList](#securitygroupidlist)
  * SubnetId [NameString](#namestring)

### Predecessor
* Predecessor `object`: A job run that was used in the predicate of a conditional trigger that triggered this job run.
  * JobName [NameString](#namestring)
  * RunId [IdString](#idstring)

### PredecessorList
* PredecessorList `array`
  * items [Predecessor](#predecessor)

### Predicate
* Predicate `object`: Defines the predicate of the trigger, which determines when it fires.
  * Conditions [ConditionList](#conditionlist)
  * Logical [Logical](#logical)

### PredicateString
* PredicateString `string`

### PrincipalType
* PrincipalType `string` (values: USER, ROLE, GROUP)

### PythonScript
* PythonScript `string`

### ResetJobBookmarkRequest
* ResetJobBookmarkRequest `object`
  * JobName **required** [JobName](#jobname)

### ResetJobBookmarkResponse
* ResetJobBookmarkResponse `object`
  * JobBookmarkEntry [JobBookmarkEntry](#jobbookmarkentry)

### ResourceNumberLimitExceededException
* ResourceNumberLimitExceededException `object`: A resource numerical limit was exceeded.
  * Message [MessageString](#messagestring)

### ResourceType
* ResourceType `string` (values: JAR, FILE, ARCHIVE)

### ResourceUri
* ResourceUri `object`: URIs for function resources.
  * ResourceType [ResourceType](#resourcetype)
  * Uri [URI](#uri)

### ResourceUriList
* ResourceUriList `array`
  * items [ResourceUri](#resourceuri)

### Role
* Role `string`

### RoleArn
* RoleArn `string`

### RoleString
* RoleString `string`

### RowTag
* RowTag `string`

### S3Target
* S3Target `object`: Specifies a data store in Amazon S3.
  * Exclusions [PathList](#pathlist)
  * Path [Path](#path)

### S3TargetList
* S3TargetList `array`
  * items [S3Target](#s3target)

### ScalaCode
* ScalaCode `string`

### Schedule
* Schedule `object`: A scheduling object using a <code>cron</code> statement to schedule an event.
  * ScheduleExpression [CronExpression](#cronexpression)
  * State [ScheduleState](#schedulestate)

### ScheduleState
* ScheduleState `string` (values: SCHEDULED, NOT_SCHEDULED, TRANSITIONING)

### SchedulerNotRunningException
* SchedulerNotRunningException `object`: The specified scheduler is not running.
  * Message [MessageString](#messagestring)

### SchedulerRunningException
* SchedulerRunningException `object`: The specified scheduler is already running.
  * Message [MessageString](#messagestring)

### SchedulerTransitioningException
* SchedulerTransitioningException `object`: The specified scheduler is transitioning.
  * Message [MessageString](#messagestring)

### SchemaChangePolicy
* SchemaChangePolicy `object`: Crawler policy for update and deletion behavior.
  * DeleteBehavior [DeleteBehavior](#deletebehavior)
  * UpdateBehavior [UpdateBehavior](#updatebehavior)

### SchemaPathString
* SchemaPathString `string`

### ScriptLocationString
* ScriptLocationString `string`

### SecurityGroupIdList
* SecurityGroupIdList `array`
  * items [NameString](#namestring)

### Segment
* Segment `object`: Defines a non-overlapping region of a table's partitions, allowing multiple requests to be executed in parallel.
  * SegmentNumber **required** [NonNegativeInteger](#nonnegativeinteger)
  * TotalSegments **required** [TotalSegmentsInteger](#totalsegmentsinteger)

### SerDeInfo
* SerDeInfo `object`: Information about a serialization/deserialization program (SerDe) which serves as an extractor and loader.
  * Name [NameString](#namestring)
  * Parameters [ParametersMap](#parametersmap)
  * SerializationLibrary [NameString](#namestring)

### SkewedInfo
* SkewedInfo `object`: Specifies skewed values in a table. Skewed are ones that occur with very high frequency.
  * SkewedColumnNames [NameStringList](#namestringlist)
  * SkewedColumnValueLocationMaps [LocationMap](#locationmap)
  * SkewedColumnValues [ColumnValueStringList](#columnvaluestringlist)

### StartCrawlerRequest
* StartCrawlerRequest `object`
  * Name **required** [NameString](#namestring)

### StartCrawlerResponse
* StartCrawlerResponse `object`

### StartCrawlerScheduleRequest
* StartCrawlerScheduleRequest `object`
  * CrawlerName **required** [NameString](#namestring)

### StartCrawlerScheduleResponse
* StartCrawlerScheduleResponse `object`

### StartJobRunRequest
* StartJobRunRequest `object`
  * AllocatedCapacity [IntegerValue](#integervalue)
  * Arguments [GenericMap](#genericmap)
  * JobName **required** [NameString](#namestring)
  * JobRunId [IdString](#idstring)

### StartJobRunResponse
* StartJobRunResponse `object`
  * JobRunId [IdString](#idstring)

### StartTriggerRequest
* StartTriggerRequest `object`
  * Name **required** [NameString](#namestring)

### StartTriggerResponse
* StartTriggerResponse `object`
  * Name [NameString](#namestring)

### StopCrawlerRequest
* StopCrawlerRequest `object`
  * Name **required** [NameString](#namestring)

### StopCrawlerResponse
* StopCrawlerResponse `object`

### StopCrawlerScheduleRequest
* StopCrawlerScheduleRequest `object`
  * CrawlerName **required** [NameString](#namestring)

### StopCrawlerScheduleResponse
* StopCrawlerScheduleResponse `object`

### StopTriggerRequest
* StopTriggerRequest `object`
  * Name **required** [NameString](#namestring)

### StopTriggerResponse
* StopTriggerResponse `object`
  * Name [NameString](#namestring)

### StorageDescriptor
* StorageDescriptor `object`: Describes the physical storage of table data.
  * BucketColumns [NameStringList](#namestringlist)
  * Columns [ColumnList](#columnlist)
  * Compressed [Boolean](#boolean)
  * InputFormat [FormatString](#formatstring)
  * Location [LocationString](#locationstring)
  * NumberOfBuckets [Integer](#integer)
  * OutputFormat [FormatString](#formatstring)
  * Parameters [ParametersMap](#parametersmap)
  * SerdeInfo [SerDeInfo](#serdeinfo)
  * SkewedInfo [SkewedInfo](#skewedinfo)
  * SortColumns [OrderList](#orderlist)
  * StoredAsSubDirectories [Boolean](#boolean)

### StringList
* StringList `array`
  * items [GenericString](#genericstring)

### Table
* Table `object`: Represents a collection of related data organized in columns and rows.
  * CreateTime [Timestamp](#timestamp)
  * CreatedBy [NameString](#namestring)
  * DatabaseName [NameString](#namestring)
  * Description [DescriptionString](#descriptionstring)
  * LastAccessTime [Timestamp](#timestamp)
  * LastAnalyzedTime [Timestamp](#timestamp)
  * Name **required** [NameString](#namestring)
  * Owner [NameString](#namestring)
  * Parameters [ParametersMap](#parametersmap)
  * PartitionKeys [ColumnList](#columnlist)
  * Retention [NonNegativeInteger](#nonnegativeinteger)
  * StorageDescriptor [StorageDescriptor](#storagedescriptor)
  * TableType [TableTypeString](#tabletypestring)
  * UpdateTime [Timestamp](#timestamp)
  * ViewExpandedText [ViewTextString](#viewtextstring)
  * ViewOriginalText [ViewTextString](#viewtextstring)

### TableError
* TableError `object`: An error record for table operations.
  * ErrorDetail [ErrorDetail](#errordetail)
  * TableName [NameString](#namestring)

### TableErrors
* TableErrors `array`
  * items [TableError](#tableerror)

### TableInput
* TableInput `object`: Structure used to create or update the table.
  * Description [DescriptionString](#descriptionstring)
  * LastAccessTime [Timestamp](#timestamp)
  * LastAnalyzedTime [Timestamp](#timestamp)
  * Name **required** [NameString](#namestring)
  * Owner [NameString](#namestring)
  * Parameters [ParametersMap](#parametersmap)
  * PartitionKeys [ColumnList](#columnlist)
  * Retention [NonNegativeInteger](#nonnegativeinteger)
  * StorageDescriptor [StorageDescriptor](#storagedescriptor)
  * TableType [TableTypeString](#tabletypestring)
  * ViewExpandedText [ViewTextString](#viewtextstring)
  * ViewOriginalText [ViewTextString](#viewtextstring)

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
  * Table [Table](#table)
  * VersionId [VersionString](#versionstring)

### TableVersionError
* TableVersionError `object`: An error record for table-version operations.
  * ErrorDetail [ErrorDetail](#errordetail)
  * TableName [NameString](#namestring)
  * VersionId [VersionString](#versionstring)

### TableVersionErrors
* TableVersionErrors `array`
  * items [TableVersionError](#tableversionerror)

### Timestamp
* Timestamp `string`

### TimestampValue
* TimestampValue `string`

### Token
* Token `string`

### TotalSegmentsInteger
* TotalSegmentsInteger `integer`

### Trigger
* Trigger `object`: Information about a specific trigger.
  * Actions [ActionList](#actionlist)
  * Description [DescriptionString](#descriptionstring)
  * Id [IdString](#idstring)
  * Name [NameString](#namestring)
  * Predicate [Predicate](#predicate)
  * Schedule [GenericString](#genericstring)
  * State [TriggerState](#triggerstate)
  * Type [TriggerType](#triggertype)

### TriggerList
* TriggerList `array`
  * items [Trigger](#trigger)

### TriggerState
* TriggerState `string` (values: CREATING, CREATED, ACTIVATING, ACTIVATED, DEACTIVATING, DEACTIVATED, DELETING, UPDATING)

### TriggerType
* TriggerType `string` (values: SCHEDULED, CONDITIONAL, ON_DEMAND)

### TriggerUpdate
* TriggerUpdate `object`: A structure used to provide information used to update a trigger. This object will update the the previous trigger definition by overwriting it completely.
  * Actions [ActionList](#actionlist)
  * Description [DescriptionString](#descriptionstring)
  * Name [NameString](#namestring)
  * Predicate [Predicate](#predicate)
  * Schedule [GenericString](#genericstring)

### URI
* URI `string`

### UpdateBehavior
* UpdateBehavior `string` (values: LOG, UPDATE_IN_DATABASE)

### UpdateClassifierRequest
* UpdateClassifierRequest `object`
  * GrokClassifier [UpdateGrokClassifierRequest](#updategrokclassifierrequest)
  * JsonClassifier [UpdateJsonClassifierRequest](#updatejsonclassifierrequest)
  * XMLClassifier [UpdateXMLClassifierRequest](#updatexmlclassifierrequest)

### UpdateClassifierResponse
* UpdateClassifierResponse `object`

### UpdateConnectionRequest
* UpdateConnectionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * ConnectionInput **required** [ConnectionInput](#connectioninput)
  * Name **required** [NameString](#namestring)

### UpdateConnectionResponse
* UpdateConnectionResponse `object`

### UpdateCrawlerRequest
* UpdateCrawlerRequest `object`
  * Classifiers [ClassifierNameList](#classifiernamelist)
  * Configuration [CrawlerConfiguration](#crawlerconfiguration)
  * DatabaseName [DatabaseName](#databasename)
  * Description [DescriptionStringRemovable](#descriptionstringremovable)
  * Name **required** [NameString](#namestring)
  * Role [Role](#role)
  * Schedule [CronExpression](#cronexpression)
  * SchemaChangePolicy [SchemaChangePolicy](#schemachangepolicy)
  * TablePrefix [TablePrefix](#tableprefix)
  * Targets [CrawlerTargets](#crawlertargets)

### UpdateCrawlerResponse
* UpdateCrawlerResponse `object`

### UpdateCrawlerScheduleRequest
* UpdateCrawlerScheduleRequest `object`
  * CrawlerName **required** [NameString](#namestring)
  * Schedule [CronExpression](#cronexpression)

### UpdateCrawlerScheduleResponse
* UpdateCrawlerScheduleResponse `object`

### UpdateDatabaseRequest
* UpdateDatabaseRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseInput **required** [DatabaseInput](#databaseinput)
  * Name **required** [NameString](#namestring)

### UpdateDatabaseResponse
* UpdateDatabaseResponse `object`

### UpdateDevEndpointRequest
* UpdateDevEndpointRequest `object`
  * CustomLibraries [DevEndpointCustomLibraries](#devendpointcustomlibraries)
  * EndpointName **required** [GenericString](#genericstring)
  * PublicKey [GenericString](#genericstring)
  * UpdateEtlLibraries [BooleanValue](#booleanvalue)

### UpdateDevEndpointResponse
* UpdateDevEndpointResponse `object`

### UpdateGrokClassifierRequest
* UpdateGrokClassifierRequest `object`: Specifies a grok classifier to update when passed to <code>UpdateClassifier</code>.
  * Classification [Classification](#classification)
  * CustomPatterns [CustomPatterns](#custompatterns)
  * GrokPattern [GrokPattern](#grokpattern)
  * Name **required** [NameString](#namestring)

### UpdateJobRequest
* UpdateJobRequest `object`
  * JobName **required** [NameString](#namestring)
  * JobUpdate **required** [JobUpdate](#jobupdate)

### UpdateJobResponse
* UpdateJobResponse `object`
  * JobName [NameString](#namestring)

### UpdateJsonClassifierRequest
* UpdateJsonClassifierRequest `object`: Specifies a JSON classifier to be updated.
  * JsonPath [JsonPath](#jsonpath)
  * Name **required** [NameString](#namestring)

### UpdatePartitionRequest
* UpdatePartitionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * PartitionInput **required** [PartitionInput](#partitioninput)
  * PartitionValueList **required** [BoundedPartitionValueList](#boundedpartitionvaluelist)
  * TableName **required** [NameString](#namestring)

### UpdatePartitionResponse
* UpdatePartitionResponse `object`

### UpdateTableRequest
* UpdateTableRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * SkipArchive [BooleanNullable](#booleannullable)
  * TableInput **required** [TableInput](#tableinput)

### UpdateTableResponse
* UpdateTableResponse `object`

### UpdateTriggerRequest
* UpdateTriggerRequest `object`
  * Name **required** [NameString](#namestring)
  * TriggerUpdate **required** [TriggerUpdate](#triggerupdate)

### UpdateTriggerResponse
* UpdateTriggerResponse `object`
  * Trigger [Trigger](#trigger)

### UpdateUserDefinedFunctionRequest
* UpdateUserDefinedFunctionRequest `object`
  * CatalogId [CatalogIdString](#catalogidstring)
  * DatabaseName **required** [NameString](#namestring)
  * FunctionInput **required** [UserDefinedFunctionInput](#userdefinedfunctioninput)
  * FunctionName **required** [NameString](#namestring)

### UpdateUserDefinedFunctionResponse
* UpdateUserDefinedFunctionResponse `object`

### UpdateXMLClassifierRequest
* UpdateXMLClassifierRequest `object`: Specifies an XML classifier to be updated.
  * Classification [Classification](#classification)
  * Name **required** [NameString](#namestring)
  * RowTag [RowTag](#rowtag)

### UriString
* UriString `string`

### UserDefinedFunction
* UserDefinedFunction `object`: Represents the equivalent of a Hive user-defined function (<code>UDF</code>) definition.
  * ClassName [NameString](#namestring)
  * CreateTime [Timestamp](#timestamp)
  * FunctionName [NameString](#namestring)
  * OwnerName [NameString](#namestring)
  * OwnerType [PrincipalType](#principaltype)
  * ResourceUris [ResourceUriList](#resourceurilist)

### UserDefinedFunctionInput
* UserDefinedFunctionInput `object`: A structure used to create or updata a user-defined function.
  * ClassName [NameString](#namestring)
  * FunctionName [NameString](#namestring)
  * OwnerName [NameString](#namestring)
  * OwnerType [PrincipalType](#principaltype)
  * ResourceUris [ResourceUriList](#resourceurilist)

### UserDefinedFunctionList
* UserDefinedFunctionList `array`
  * items [UserDefinedFunction](#userdefinedfunction)

### ValidationException
* ValidationException `object`: A value could not be validated.
  * Message [MessageString](#messagestring)

### ValueString
* ValueString `string`

### ValueStringList
* ValueStringList `array`
  * items [ValueString](#valuestring)

### VersionId
* VersionId `integer`

### VersionMismatchException
* VersionMismatchException `object`: There was a version conflict.
  * Message [MessageString](#messagestring)

### VersionString
* VersionString `string`

### ViewTextString
* ViewTextString `string`

### XMLClassifier
* XMLClassifier `object`: A classifier for <code>XML</code> content.
  * Classification **required** [Classification](#classification)
  * CreationTime [Timestamp](#timestamp)
  * LastUpdated [Timestamp](#timestamp)
  * Name **required** [NameString](#namestring)
  * RowTag [RowTag](#rowtag)
  * Version [VersionId](#versionid)


