# @datafire/azure_machinelearningservices_runhistory

Client library for Run History APIs

## Installation and Usage
```bash
npm install --save @datafire/azure_machinelearningservices_runhistory
```
```js
let azure_machinelearningservices_runhistory = require('@datafire/azure_machinelearningservices_runhistory').create({
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

### Experiments_GetById
Get details of an Experiment with specific Experiment Id.


```js
azure_machinelearningservices_runhistory.Experiments_GetById({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentId **required** `string`: The identifier of the experiment.

#### Output
* output [Experiment](#experiment)

### Experiments_Update
Update details of an Experiment with specific Experiment Id.


```js
azure_machinelearningservices_runhistory.Experiments_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentId **required** `string`: The identifier of the experiment.
  * modifyExperimentDto [ModifyExperiment](#modifyexperiment)

#### Output
* output [Experiment](#experiment)

### Experiments_DeleteTags
Delete list of Tags from a specific Experiment Id.


```js
azure_machinelearningservices_runhistory.Experiments_DeleteTags({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentId **required** `string`: The identifier of the experiment.
  * tags [DeleteTagsCommand](#deletetagscommand)

#### Output
* output [Experiment](#experiment)

### Experiments_Get
Get details of an Experiment with specific Experiment name.


```js
azure_machinelearningservices_runhistory.Experiments_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.

#### Output
* output [Experiment](#experiment)

### Experiments_Create
Create a new Experiment.


```js
azure_machinelearningservices_runhistory.Experiments_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.

#### Output
* output [Experiment](#experiment)

### Events_BatchPost
Post event data to a specific Run Id.


```js
azure_machinelearningservices_runhistory.Events_BatchPost({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * batchEventCommand [BatchEventCommand](#batcheventcommand)

#### Output
* output [BatchEventCommandResult](#batcheventcommandresult)

### Runs_BatchAddOrModify
Add or Modify a batch of Runs for a given experiment.


```js
azure_machinelearningservices_runhistory.Runs_BatchAddOrModify({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * requestDto [BatchAddOrModifyRunRequest](#batchaddormodifyrunrequest)

#### Output
* output [BatchAddOrModifyRunResult](#batchaddormodifyrunresult)

### RunMetrics_Get
Get Metric details for a specific Metric Id.


```js
azure_machinelearningservices_runhistory.RunMetrics_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "metricId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * metricId **required** `string`: The identifier for a Metric.

#### Output
* output [RunMetric](#runmetric)

### RunMetrics_GetByQuery
Get all Run Metrics for the specific Experiment with the specified query filters.


```js
azure_machinelearningservices_runhistory.RunMetrics_GetByQuery({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * queryParams [QueryParams](#queryparams)
  * MergeStrategyType `string` (values: Default, None, MergeToVector): The type of merge strategy. Currently supported strategies are:
  * MergeStrategyOptions `string` (values: None, ReportUnmergedMetricsValues): Controls behavior of the merge strategy in certain cases; e.g. when a metric is not merged.
  * MergeStrategySettings.Version `string`: The strategy settings version.
  * MergeStrategySettings.SelectMetrics `string` (values: SelectAll, SelectByFirstValueSchema, SelectByFirstValueSchemaMergeNumericValues): Defines how to select metrics when merging them together.

#### Output
* output [PaginatedRunMetricList](#paginatedrunmetriclist)

### Runs_Get
Get Run details of a specific Run Id.


```js
azure_machinelearningservices_runhistory.Runs_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * runId **required** `string`: The identifier of the Run.

#### Output
* output [Run](#run)

### Runs_Patch
Add a new Run or Modify an existing Run.


```js
azure_machinelearningservices_runhistory.Runs_Patch({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * runId **required** `string`: The identifier of the Run.
  * createRunDto [CreateRun](#createrun)

#### Output
* output [Run](#run)

### RunArtifacts_ListInContainer
Get Artifacts in container for a specific Run Id.


```js
azure_machinelearningservices_runhistory.RunArtifacts_ListInContainer({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * runId **required** `string`: The identifier of the Run.
  * continuationToken `string`: The Continuation Token.

#### Output
* output [PaginatedArtifactList](#paginatedartifactlist)

### RunArtifacts_GetSasUri
Get URI of an Artifact for a specific Run Id.


```js
azure_machinelearningservices_runhistory.RunArtifacts_GetSasUri({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * runId **required** `string`: The identifier of the Run.
  * path `string`: The Artifact Path.

#### Output
* output `string`

### RunArtifacts_BatchCreateEmptyArtifacts
Create a batch of empty Artifacts in a specific Run.


```js
azure_machinelearningservices_runhistory.RunArtifacts_BatchCreateEmptyArtifacts({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * runId **required** `string`: The identifier of the Run.
  * artifactPaths [ArtifactPathList](#artifactpathlist)

#### Output
* output [BatchArtifactContentInformationResult](#batchartifactcontentinformationresult)

### RunArtifacts_GetContentInformation
Get Artifact content information for give Run Id.


```js
azure_machinelearningservices_runhistory.RunArtifacts_GetContentInformation({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * runId **required** `string`: The identifier of the Run.
  * path `string`: The Artifact Path.

#### Output
* output [ArtifactContentInformation](#artifactcontentinformation)

### RunArtifacts_GetById
Get Artifact for a specific Id.


```js
azure_machinelearningservices_runhistory.RunArtifacts_GetById({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * runId **required** `string`: The identifier of the Run.
  * path `string`: The Artifact Path.

#### Output
* output [Artifact](#artifact)

### RunArtifacts_ListInPath
Get Artifacts in the provided path for a specific Run Id.


```js
azure_machinelearningservices_runhistory.RunArtifacts_ListInPath({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * runId **required** `string`: The identifier of the Run.
  * path `string`: The Artifact Path.
  * continuationToken `string`: The Continuation Token.

#### Output
* output [PaginatedArtifactList](#paginatedartifactlist)

### RunArtifacts_ListSasByPrefix
Get SAS of an Artifact in the specified path.


```js
azure_machinelearningservices_runhistory.RunArtifacts_ListSasByPrefix({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * runId **required** `string`: The identifier of the Run.
  * path `string`: The Artifact Path.
  * continuationToken `string`: The Continuation Token.

#### Output
* output [PaginatedArtifactContentInformationList](#paginatedartifactcontentinformationlist)

### RunMetrics_BatchPost
Post Metrics to a specific Run Id.


```js
azure_machinelearningservices_runhistory.RunMetrics_BatchPost({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * runId **required** `string`: The identifier for a run.
  * batchMetricDto [BatchMetric](#batchmetric)

#### Output
*Output schema unknown*

### Runs_GetChild
Get details of all child runs for the specified Run Id with the specified filters.


```js
azure_machinelearningservices_runhistory.Runs_GetChild({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * runId **required** `string`: The identifier of the Run.
  * $filter `string`: Allows for filtering the collection of resources.
  * $continuationtoken `string`: The continuation token to use for getting the next set of resources.
  * $orderby `array`: The list of resource properties to use for sorting the requested resources.
  * $sortorder `string` (values: Asc, Desc): The sort order of the returned resources. Not used, specify asc or desc after each property name in the OrderBy parameter.
  * $top `integer`: The maximum number of items in the resource collection to be included in the result.
  * $count `boolean`: Whether to include a count of the matching resources along with the resources returned in the response.

#### Output
* output [PaginatedRunList](#paginatedrunlist)

### Runs_GetDetails
Get Run Details for a specific Run Id.


```js
azure_machinelearningservices_runhistory.Runs_GetDetails({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * runId **required** `string`: The identifier of the Run.

#### Output
* output [RunDetails](#rundetails)

### Events_Post
Post event data to a specific Run Id.


```js
azure_machinelearningservices_runhistory.Events_Post({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * runId **required** `string`: The identifier of the Run.
  * eventMessage [BaseEvent](#baseevent)

#### Output
*Output schema unknown*

### RunMetrics_Post
Post a Metric to a specific Run Id.


```js
azure_machinelearningservices_runhistory.RunMetrics_Post({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * runId **required** `string`: The identifier for a run.
  * metricDto [Metric](#metric)

#### Output
*Output schema unknown*

### Runs_DeleteTags
Delete list of Tags from a specific Run Id.


```js
azure_machinelearningservices_runhistory.Runs_DeleteTags({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * runId **required** `string`: The identifier of the Run.
  * tags `array`
    * items `string`

#### Output
* output [Run](#run)

### Runs_GetByQuery
Get all Runs for a specific Experiment with the specified query filters.


```js
azure_machinelearningservices_runhistory.Runs_GetByQuery({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * queryParams [QueryParams](#queryparams)

#### Output
* output [PaginatedRunList](#paginatedrunlist)

### Experiments_GetByQuery
Get all experiments in a specific workspace with the specified query filters.


```js
azure_machinelearningservices_runhistory.Experiments_GetByQuery({
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
  * queryParams [QueryParams](#queryparams)

#### Output
* output [PaginatedExperimentList](#paginatedexperimentlist)



## Definitions

### Artifact
* Artifact `object`: Details of an Artifact.
  * artifactId `string`: The identifier of an Artifact. Format of ArtifactId - {Origin}/{Container}/{Path}.
  * container **required** `string`: The name of container. Artifacts can be grouped by container.
  * createdTime `string`: The Date and Time at which the Artifact is created. The DateTime is in UTC.
  * dataPath [DataPath](#datapath)
  * etag `string`: The Etag of the Artifact.
  * origin **required** `string`: The origin of the Artifact creation request. Available origins are 'ExperimentRun', 'LocalUpload', 'WebUpload', 'Dataset' and 'Unknown'.
  * path **required** `string`: The path to the Artifact in a container.

### ArtifactContentInformation
* ArtifactContentInformation `object`: Details of an Artifact Content Information.
  * container `string`: The name of container. Artifacts can be grouped by container.
  * contentUri `string`: The URI of the content.
  * origin `string`: The origin of the Artifact creation request. Available origins are 'ExperimentRun', 'LocalUpload', 'WebUpload', 'Dataset', 'ComputeRecord', 'Metric', and 'Unknown'.
  * path `string`: The path to the Artifact in a container.

### ArtifactPath
* ArtifactPath `object`: Details of an Artifact Path.
  * path **required** `string`: The path to the Artifact in a container.

### ArtifactPathList
* ArtifactPathList `object`: Contains list of Artifact Paths.
  * paths **required** `array`: List of Artifact Paths.
    * items [ArtifactPath](#artifactpath)

### BaseEvent
* BaseEvent `object`: Base event is the envelope used to post event data to the Event controller
  * data `object`
  * name `string`
  * timestamp `string`

### BatchAddOrModifyRunRequest
* BatchAddOrModifyRunRequest `object`
  * runs `array`
    * items [CreateRun](#createrun)

### BatchAddOrModifyRunResult
* BatchAddOrModifyRunResult `object`
  * errors `object`
  * runs `object`

### BatchArtifactContentInformationResult
* BatchArtifactContentInformationResult `object`: Results of the Batch Artifact Content Information request.
  * artifactContentInformation `object`: Artifact Content Information details of the Artifact Ids requested.
  * artifacts `object`: Artifact details of the Artifact Ids requested.
  * errors `object`: Errors occurred while fetching the requested Artifact Ids.

### BatchEventCommand
* BatchEventCommand `object`
  * events `array`
    * items [BaseEvent](#baseevent)

### BatchEventCommandResult
* BatchEventCommandResult `object`
  * errors `array`
    * items [KeyValuePairBaseEventErrorResponse](#keyvaluepairbaseeventerrorresponse)

### BatchMetric
* BatchMetric `object`
  * values `array`
    * items [Metric](#metric)

### CreateRun
* CreateRun `object`
  * cancelUri `string`
  * createdFrom [CreatedFrom](#createdfrom)
  * dataContainerId `string`
  * description `string`
  * diagnosticsUri `string`
  * endTimeUtc `string`: The end time of the run in UTC.
  * heartbeatEnabled `boolean`
  * hidden `boolean`
  * name `string`
  * options [RunOptions](#runoptions)
  * parentRunId `string`: The parent of the run if the run is hierarchical; otherwise, Null.
  * properties `object`
  * runDefinition `object`
  * runId `string`: The identifier for the run. Run IDs must be less than 256 characters and contain only alphanumeric characters with dashes and underscores.
  * runType `string`
  * scriptName `string`
  * startTimeUtc `string`: The start time of the run in UTC.
  * status `string`: The status of the run. The Status string value maps to the RunStatus Enum.
  * tags `object`
  * target `string`

### CreatedBy
* CreatedBy `object`
  * userName `string`: A user's full name or a service principal's app ID.
  * userObjectId `string`: A user or service principal's object ID.
  * userTenantId `string`: A user or service principal's tenant ID.

### CreatedFrom
* CreatedFrom `object`
  * location `string`
  * locationType `string` (values: ArtifactId)
  * type `string` (values: Notebook)

### DataPath
* DataPath `object`
  * dataStoreName `string`
  * relativePath `string`
  * sqlDataPath [SqlDataPath](#sqldatapath)

### DeleteTagsCommand
* DeleteTagsCommand `object`
  * tags `array`
    * items `string`

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

### Experiment
* Experiment `object`
  * archivedTime `string`
  * createdUtc `string`
  * description `string`
  * experimentId `string`
  * latestCreatedRunCreatedUtc `string`
  * latestCreatedRunId `string`
  * name `string`
  * tags `object`

### InnerErrorResponse
* InnerErrorResponse `object`: A nested structure of errors.
  * code `string`: The error code.
  * innerError [InnerErrorResponse](#innererrorresponse)

### KeyValuePairBaseEventErrorResponse
* KeyValuePairBaseEventErrorResponse `object`
  * key [BaseEvent](#baseevent)
  * value [ErrorResponse](#errorresponse)

### Metric
* Metric `object`
  * cells `array`
    * items `object`
  * createdUtc `string`
  * dataContainerId `string`
  * dataLocation `string`
  * description `string`
  * label `string`
  * metricId `string`
  * metricType `string`
  * name `string`
  * numCells `integer`
  * schema [MetricSchema](#metricschema)

### MetricSchema
* MetricSchema `object`
  * numProperties `integer`
  * properties `array`
    * items [MetricSchemaProperty](#metricschemaproperty)

### MetricSchemaProperty
* MetricSchemaProperty `object`
  * name `string`
  * propertyId `string`
  * type `string`

### ModifyExperiment
* ModifyExperiment `object`
  * archive `boolean`
  * description `string`
  * tags `object`

### PaginatedArtifactContentInformationList
* PaginatedArtifactContentInformationList `object`: A paginated list of ArtifactContentInformations.
  * continuationToken `string`: The token used in retrieving the next page.  If null, there are no additional pages.
  * nextLink `string`: The link to the next page constructed using the continuationToken.  If null, there are no additional pages.
  * value `array`: An array of objects of type ArtifactContentInformation.
    * items [ArtifactContentInformation](#artifactcontentinformation)

### PaginatedArtifactList
* PaginatedArtifactList `object`: A paginated list of Artifacts.
  * continuationToken `string`: The token used in retrieving the next page.  If null, there are no additional pages.
  * nextLink `string`: The link to the next page constructed using the continuationToken.  If null, there are no additional pages.
  * value `array`: An array of objects of type Artifact.
    * items [Artifact](#artifact)

### PaginatedExperimentList
* PaginatedExperimentList `object`: A paginated list of Experiments.
  * continuationToken `string`: The token used in retrieving the next page.  If null, there are no additional pages.
  * nextLink `string`: The link to the next page constructed using the continuationToken.  If null, there are no additional pages.
  * value `array`: An array of objects of type Experiment.
    * items [Experiment](#experiment)

### PaginatedRunList
* PaginatedRunList `object`: A paginated list of Runs.
  * continuationToken `string`: The token used in retrieving the next page.  If null, there are no additional pages.
  * nextLink `string`: The link to the next page constructed using the continuationToken.  If null, there are no additional pages.
  * value `array`: An array of objects of type Run.
    * items [Run](#run)

### PaginatedRunMetricList
* PaginatedRunMetricList `object`: A paginated list of RunMetrics.
  * continuationToken `string`: The token used in retrieving the next page.  If null, there are no additional pages.
  * nextLink `string`: The link to the next page constructed using the continuationToken.  If null, there are no additional pages.
  * value `array`: An array of objects of type RunMetric.
    * items [RunMetric](#runmetric)

### QueryParams
* QueryParams `object`: The set of supported filters.
  * continuationToken `string`: The continuation token to use for getting the next set of resources.
  * filter `string`: Allows for filtering the collection of resources.
  * orderBy `string`: The comma separated list of resource properties to use for sorting the requested resources.
  * top `integer`: The maximum number of items in the resource collection to be included in the result.

### RootError
* RootError `object`: The root error.
  * code `string`: The service-defined error code. Supported error codes: ServiceError, UserError, ValidationError, AzureStorageError, TransientError, RequestThrottled.
  * details `array`: The related errors that occurred during the request.
    * items [ErrorDetails](#errordetails)
  * innerError [InnerErrorResponse](#innererrorresponse)
  * message `string`: A human-readable representation of the error.
  * target `string`: The target of the error (e.g., the name of the property in error).

### Run
* Run `object`: The definition of a Run.
  * cancelUri `string`
  * createdBy [CreatedBy](#createdby)
  * createdFrom [CreatedFrom](#createdfrom)
  * createdUtc `string`: The time the run was created in UTC.
  * dataContainerId `string`
  * description `string`
  * diagnosticsUri `string`
  * endTimeUtc `string`: The end time of the run in UTC.
  * error [ErrorResponse](#errorresponse)
  * experimentId `string`: The Id of the experiment that created this run.
  * heartbeatEnabled `boolean`
  * hidden `boolean`
  * name `string`
  * options [RunOptions](#runoptions)
  * parentRunId `string`: The parent of the run if the run is hierarchical; otherwise, Null.
  * properties `object`
  * revision `integer`
  * rootRunId `string`
  * runDefinition `object`
  * runId `string`: The identifier for the run. Run IDs must be less than 256 characters and contain only alphanumeric characters with dashes and underscores.
  * runNumber `integer`
  * runType `string`
  * scriptName `string`
  * startTimeUtc `string`: The start time of the run in UTC.
  * status `string`: The status of the run. The Status string value maps to the RunStatus Enum.
  * tags `object`
  * target `string`
  * token `string`: A token used for authenticating a run.
  * tokenExpiryTimeUtc `string`: The Token expiration time in UTC.
  * userId `string`: The Id of the user that created the run.
  * warnings `array`: A list of warnings that occurred during the run.
    * items [RunDetailsWarning](#rundetailswarning)

### RunDetails
* RunDetails `object`: The details of the run.
  * endTimeUtc `string`: The end time of the run in UTC.
  * error [ErrorResponse](#errorresponse)
  * logFiles `object`
  * parentRunId `string`: The parent of the run if the run is hierarchical.
  * properties `object`: The properties dictionary for the run. Properties are immutable.
  * revision `integer`
  * runDefinition `object`: The run definition specification.
  * runId `string`: The identifier for the run.
  * startTimeUtc `string`: The start time of the run in UTC.
  * status `string`: The status of the run. The Status string value maps to the RunStatus Enum.
  * tags `object`: The tag dictionary for the run. Tags are mutable.
  * target `string`: The name of the compute target where the run is executed.
  * warnings `array`: A list of warnings that occurred during the run.
    * items [RunDetailsWarning](#rundetailswarning)

### RunDetailsWarning
* RunDetailsWarning `object`
  * message `string`
  * source `string`

### RunMetric
* RunMetric `object`
  * cells `array`
    * items `object`
  * createdUtc `string`
  * dataContainerId `string`
  * dataLocation `string`
  * description `string`
  * label `string`
  * metricId `string`
  * metricType `string`
  * name `string`
  * numCells `integer`
  * runId `string`
  * schema [MetricSchema](#metricschema)

### RunOptions
* RunOptions `object`
  * generateDataContainerIdIfNotSpecified `boolean`

### SqlDataPath
* SqlDataPath `object`
  * sqlQuery `string`
  * sqlStoredProcedureName `string`
  * sqlStoredProcedureParams `array`
    * items [StoredProcedureParameter](#storedprocedureparameter)
  * sqlTableName `string`

### StoredProcedureParameter
* StoredProcedureParameter `object`
  * name `string`
  * type `string` (values: String, Int, Decimal, Guid, Boolean, Date)
  * value `string`


