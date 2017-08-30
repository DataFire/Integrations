# @datafire/amazonaws_glue

Client library for AWS Glue

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_glue
```

```js
let datafire = require('datafire');
let amazonaws_glue = require('@datafire/amazonaws_glue').create();

amazonaws_glue.BatchCreatePartition({}).then(data => {
  console.log(data);
})
```

## Description
Defines service operations used by the GlueFrontendService

## Actions
### BatchCreatePartition



```js
amazonaws_glue.BatchCreatePartition({
  "DatabaseName": "",
  "TableName": "",
  "PartitionInputList": []
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseName (string) **required**
* PartitionInputList (array) **required**
* TableName (string) **required**

### BatchDeleteConnection



```js
amazonaws_glue.BatchDeleteConnection({
  "ConnectionNameList": []
}, context)
```

#### Parameters
* CatalogId (string)
* ConnectionNameList (array) **required**

### BatchDeletePartition



```js
amazonaws_glue.BatchDeletePartition({
  "DatabaseName": "",
  "TableName": "",
  "PartitionsToDelete": []
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseName (string) **required**
* PartitionsToDelete (array) **required**
* TableName (string) **required**

### BatchDeleteTable



```js
amazonaws_glue.BatchDeleteTable({
  "DatabaseName": "",
  "TablesToDelete": []
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseName (string) **required**
* TablesToDelete (array) **required**

### BatchGetPartition



```js
amazonaws_glue.BatchGetPartition({
  "DatabaseName": "",
  "TableName": "",
  "PartitionsToGet": []
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseName (string) **required**
* PartitionsToGet (array) **required**
* TableName (string) **required**

### CreateClassifier



```js
amazonaws_glue.CreateClassifier({}, context)
```

#### Parameters
* GrokClassifier (object) - Specifies a Grok classifier for CreateClassifier to create.

### CreateConnection



```js
amazonaws_glue.CreateConnection({
  "ConnectionInput": {}
}, context)
```

#### Parameters
* CatalogId (string)
* ConnectionInput (object) **required** - A structure used to specify a connection to create or update.

### CreateCrawler



```js
amazonaws_glue.CreateCrawler({
  "Name": "",
  "Role": "",
  "DatabaseName": "",
  "Targets": {}
}, context)
```

#### Parameters
* Classifiers (array)
* DatabaseName (string) **required**
* Description (string)
* Name (string) **required**
* Role (string) **required**
* Schedule (string)
* SchemaChangePolicy (object) - Crawler policy for update and deletion behavior.
* TablePrefix (string)
* Targets (object) **required** - Specifies crawler targets.

### CreateDatabase



```js
amazonaws_glue.CreateDatabase({
  "DatabaseInput": {
    "Name": ""
  }
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseInput (object) **required** - The structure used to create or updata a database.

### CreateDevEndpoint



```js
amazonaws_glue.CreateDevEndpoint({
  "EndpointName": "",
  "RoleArn": "",
  "SecurityGroupIds": [],
  "SubnetId": ""
}, context)
```

#### Parameters
* EndpointName (string) **required**
* ExtraJarsS3Path (string)
* ExtraPythonLibsS3Path (string)
* NumberOfNodes (integer)
* PublicKey (string)
* RoleArn (string) **required**
* SecurityGroupIds (array) **required**
* SubnetId (string) **required**

### CreateJob



```js
amazonaws_glue.CreateJob({
  "Name": "",
  "Role": "",
  "Command": {}
}, context)
```

#### Parameters
* AllocatedCapacity (integer)
* Command (object) **required** - Specifies code that executes a job.
* Connections (object) - Specifies the connections used by a job.
* DefaultArguments (array)
* Description (string)
* ExecutionProperty (object) - An execution property of a job.
* LogUri (string)
* MaxRetries (integer)
* Name (string) **required**
* Role (string) **required**

### CreatePartition



```js
amazonaws_glue.CreatePartition({
  "DatabaseName": "",
  "TableName": "",
  "PartitionInput": {}
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseName (string) **required**
* PartitionInput (object) **required** - The structure used to create and update a partion.
* TableName (string) **required**

### CreateScript



```js
amazonaws_glue.CreateScript({}, context)
```

#### Parameters
* DagEdges (array)
* DagNodes (array)

### CreateTable



```js
amazonaws_glue.CreateTable({
  "DatabaseName": "",
  "TableInput": {
    "Name": ""
  }
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseName (string) **required**
* TableInput (object) **required** - Structure used to create or update the table.

### CreateTrigger



```js
amazonaws_glue.CreateTrigger({
  "Name": "",
  "Type": "",
  "Actions": []
}, context)
```

#### Parameters
* Actions (array) **required**
* Description (string)
* Name (string) **required**
* Predicate (object) - Defines the predicate of the trigger, which determines when it fires.
* Schedule (string)
* Type (string) **required**

### CreateUserDefinedFunction



```js
amazonaws_glue.CreateUserDefinedFunction({
  "DatabaseName": "",
  "FunctionInput": {}
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseName (string) **required**
* FunctionInput (object) **required** - A structure used to create or updata a user-defined function.

### DeleteClassifier



```js
amazonaws_glue.DeleteClassifier({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### DeleteConnection



```js
amazonaws_glue.DeleteConnection({
  "ConnectionName": ""
}, context)
```

#### Parameters
* CatalogId (string)
* ConnectionName (string) **required**

### DeleteCrawler



```js
amazonaws_glue.DeleteCrawler({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### DeleteDatabase



```js
amazonaws_glue.DeleteDatabase({
  "Name": ""
}, context)
```

#### Parameters
* CatalogId (string)
* Name (string) **required**

### DeleteDevEndpoint



```js
amazonaws_glue.DeleteDevEndpoint({
  "EndpointName": ""
}, context)
```

#### Parameters
* EndpointName (string) **required**

### DeleteJob



```js
amazonaws_glue.DeleteJob({
  "JobName": ""
}, context)
```

#### Parameters
* JobName (string) **required**

### DeletePartition



```js
amazonaws_glue.DeletePartition({
  "DatabaseName": "",
  "TableName": "",
  "PartitionValues": []
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseName (string) **required**
* PartitionValues (array) **required**
* TableName (string) **required**

### DeleteTable



```js
amazonaws_glue.DeleteTable({
  "DatabaseName": "",
  "Name": ""
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseName (string) **required**
* Name (string) **required**

### DeleteTrigger



```js
amazonaws_glue.DeleteTrigger({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### DeleteUserDefinedFunction



```js
amazonaws_glue.DeleteUserDefinedFunction({
  "DatabaseName": "",
  "FunctionName": ""
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseName (string) **required**
* FunctionName (string) **required**

### GetCatalogImportStatus



```js
amazonaws_glue.GetCatalogImportStatus({}, context)
```

#### Parameters
* CatalogId (string)

### GetClassifier



```js
amazonaws_glue.GetClassifier({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### GetClassifiers



```js
amazonaws_glue.GetClassifiers({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)

### GetConnection



```js
amazonaws_glue.GetConnection({
  "Name": ""
}, context)
```

#### Parameters
* CatalogId (string)
* Name (string) **required**

### GetConnections



```js
amazonaws_glue.GetConnections({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* CatalogId (string)
* Filter (object) - Filters the connection definitions returned by the <code>GetConnections</code> API.
* MaxResults (integer)
* NextToken (string)

### GetCrawler



```js
amazonaws_glue.GetCrawler({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### GetCrawlerMetrics



```js
amazonaws_glue.GetCrawlerMetrics({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* CrawlerNameList (array)
* MaxResults (integer)
* NextToken (string)

### GetCrawlers



```js
amazonaws_glue.GetCrawlers({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)

### GetDatabase



```js
amazonaws_glue.GetDatabase({
  "Name": ""
}, context)
```

#### Parameters
* CatalogId (string)
* Name (string) **required**

### GetDatabases



```js
amazonaws_glue.GetDatabases({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* CatalogId (string)
* MaxResults (integer)
* NextToken (string)

### GetDataflowGraph



```js
amazonaws_glue.GetDataflowGraph({}, context)
```

#### Parameters
* PythonScript (string)

### GetDevEndpoint



```js
amazonaws_glue.GetDevEndpoint({
  "EndpointName": ""
}, context)
```

#### Parameters
* EndpointName (string) **required**

### GetDevEndpoints



```js
amazonaws_glue.GetDevEndpoints({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)

### GetJob



```js
amazonaws_glue.GetJob({
  "JobName": ""
}, context)
```

#### Parameters
* JobName (string) **required**

### GetJobRun



```js
amazonaws_glue.GetJobRun({
  "JobName": "",
  "RunId": ""
}, context)
```

#### Parameters
* JobName (string) **required**
* PredecessorsIncluded (boolean)
* RunId (string) **required**

### GetJobRuns



```js
amazonaws_glue.GetJobRuns({
  "JobName": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* JobName (string) **required**
* MaxResults (integer)
* NextToken (string)

### GetJobs



```js
amazonaws_glue.GetJobs({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)

### GetMapping



```js
amazonaws_glue.GetMapping({
  "Source": {
    "DatabaseName": "",
    "TableName": ""
  }
}, context)
```

#### Parameters
* Location (object) - The location of resources.
* Sinks (array)
* Source (object) **required** - Specifies a table definition in the Data Catalog.

### GetPartition



```js
amazonaws_glue.GetPartition({
  "DatabaseName": "",
  "TableName": "",
  "PartitionValues": []
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseName (string) **required**
* PartitionValues (array) **required**
* TableName (string) **required**

### GetPartitions



```js
amazonaws_glue.GetPartitions({
  "DatabaseName": "",
  "TableName": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* CatalogId (string)
* DatabaseName (string) **required**
* Expression (string)
* MaxResults (integer)
* NextToken (string)
* Segment (object) - Defines a non-overlapping region of a table's partitions, allowing multiple requests to be executed in parallel.
* TableName (string) **required**

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

#### Parameters
* Location (object) - The location of resources.
* Mapping (array) **required**
* Sinks (array)
* Source (object) **required** - Specifies a table definition in the Data Catalog.

### GetTable



```js
amazonaws_glue.GetTable({
  "DatabaseName": "",
  "Name": ""
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseName (string) **required**
* Name (string) **required**

### GetTableVersions



```js
amazonaws_glue.GetTableVersions({
  "DatabaseName": "",
  "TableName": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* CatalogId (string)
* DatabaseName (string) **required**
* MaxResults (integer)
* NextToken (string)
* TableName (string) **required**

### GetTables



```js
amazonaws_glue.GetTables({
  "DatabaseName": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* CatalogId (string)
* DatabaseName (string) **required**
* Expression (string)
* MaxResults (integer)
* NextToken (string)

### GetTrigger



```js
amazonaws_glue.GetTrigger({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### GetTriggers



```js
amazonaws_glue.GetTriggers({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* DependentJobName (string)
* MaxResults (integer)
* NextToken (string)

### GetUserDefinedFunction



```js
amazonaws_glue.GetUserDefinedFunction({
  "DatabaseName": "",
  "FunctionName": ""
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseName (string) **required**
* FunctionName (string) **required**

### GetUserDefinedFunctions



```js
amazonaws_glue.GetUserDefinedFunctions({
  "DatabaseName": "",
  "Pattern": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* CatalogId (string)
* DatabaseName (string) **required**
* MaxResults (integer)
* NextToken (string)
* Pattern (string) **required**

### ImportCatalogToGlue



```js
amazonaws_glue.ImportCatalogToGlue({}, context)
```

#### Parameters
* CatalogId (string)

### ResetJobBookmark



```js
amazonaws_glue.ResetJobBookmark({
  "JobName": ""
}, context)
```

#### Parameters
* JobName (string) **required**

### StartCrawler



```js
amazonaws_glue.StartCrawler({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### StartCrawlerSchedule



```js
amazonaws_glue.StartCrawlerSchedule({
  "CrawlerName": ""
}, context)
```

#### Parameters
* CrawlerName (string) **required**

### StartJobRun



```js
amazonaws_glue.StartJobRun({
  "JobName": ""
}, context)
```

#### Parameters
* AllocatedCapacity (integer)
* Arguments (array)
* JobName (string) **required**
* JobRunId (string)

### StartTrigger



```js
amazonaws_glue.StartTrigger({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### StopCrawler



```js
amazonaws_glue.StopCrawler({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### StopCrawlerSchedule



```js
amazonaws_glue.StopCrawlerSchedule({
  "CrawlerName": ""
}, context)
```

#### Parameters
* CrawlerName (string) **required**

### StopTrigger



```js
amazonaws_glue.StopTrigger({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### UpdateClassifier



```js
amazonaws_glue.UpdateClassifier({}, context)
```

#### Parameters
* GrokClassifier (object) - Specifies a Grok classifier to update when passed to UpdateClassifier.

### UpdateConnection



```js
amazonaws_glue.UpdateConnection({
  "Name": "",
  "ConnectionInput": {}
}, context)
```

#### Parameters
* CatalogId (string)
* ConnectionInput (object) **required** - A structure used to specify a connection to create or update.
* Name (string) **required**

### UpdateCrawler



```js
amazonaws_glue.UpdateCrawler({
  "Name": ""
}, context)
```

#### Parameters
* Classifiers (array)
* DatabaseName (string)
* Description (string)
* Name (string) **required**
* Role (string)
* Schedule (string)
* SchemaChangePolicy (object) - Crawler policy for update and deletion behavior.
* TablePrefix (string)
* Targets (object) - Specifies crawler targets.

### UpdateCrawlerSchedule



```js
amazonaws_glue.UpdateCrawlerSchedule({
  "CrawlerName": ""
}, context)
```

#### Parameters
* CrawlerName (string) **required**
* Schedule (string)

### UpdateDatabase



```js
amazonaws_glue.UpdateDatabase({
  "Name": "",
  "DatabaseInput": {
    "Name": ""
  }
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseInput (object) **required** - The structure used to create or updata a database.
* Name (string) **required**

### UpdateDevEndpoint



```js
amazonaws_glue.UpdateDevEndpoint({
  "EndpointName": ""
}, context)
```

#### Parameters
* CustomLibraries (object) - Custom libraries to be loaded into a DevEndpoint.
* EndpointName (string) **required**
* PublicKey (string)

### UpdateJob



```js
amazonaws_glue.UpdateJob({
  "JobName": "",
  "JobUpdate": {}
}, context)
```

#### Parameters
* JobName (string) **required**
* JobUpdate (object) **required** - Specifies information used to update an existing job.

### UpdatePartition



```js
amazonaws_glue.UpdatePartition({
  "DatabaseName": "",
  "TableName": "",
  "PartitionValueList": [],
  "PartitionInput": {}
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseName (string) **required**
* PartitionInput (object) **required** - The structure used to create and update a partion.
* PartitionValueList (array) **required**
* TableName (string) **required**

### UpdateTable



```js
amazonaws_glue.UpdateTable({
  "DatabaseName": "",
  "TableInput": {
    "Name": ""
  }
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseName (string) **required**
* TableInput (object) **required** - Structure used to create or update the table.

### UpdateTrigger



```js
amazonaws_glue.UpdateTrigger({
  "Name": "",
  "TriggerUpdate": {}
}, context)
```

#### Parameters
* Name (string) **required**
* TriggerUpdate (object) **required** - A structure used to provide information used to updata a trigger.

### UpdateUserDefinedFunction



```js
amazonaws_glue.UpdateUserDefinedFunction({
  "DatabaseName": "",
  "FunctionName": "",
  "FunctionInput": {}
}, context)
```

#### Parameters
* CatalogId (string)
* DatabaseName (string) **required**
* FunctionInput (object) **required** - A structure used to create or updata a user-defined function.
* FunctionName (string) **required**

