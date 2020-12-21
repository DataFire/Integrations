# @datafire/amazonaws_personalize

Client library for Amazon Personalize

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_personalize
```
```js
let amazonaws_personalize = require('@datafire/amazonaws_personalize').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon Personalize is a machine learning service that makes it easy to add individualized recommendations to customers.

## Actions

### CreateBatchInferenceJob



```js
amazonaws_personalize.CreateBatchInferenceJob({
  "jobName": null,
  "solutionVersionArn": null,
  "jobInput": null,
  "jobOutput": null,
  "roleArn": null
}, context)
```

#### Input
* input `object`
  * batchInferenceJobConfig
    * itemExplorationConfig
  * filterArn
  * jobInput **required**
    * s3DataSource **required**
      * kmsKeyArn
      * path **required**
  * jobName **required**
  * jobOutput **required**
    * s3DataDestination **required**
      * kmsKeyArn
      * path **required**
  * numResults
  * roleArn **required**
  * solutionVersionArn **required**

#### Output
* output [CreateBatchInferenceJobResponse](#createbatchinferencejobresponse)

### CreateCampaign



```js
amazonaws_personalize.CreateCampaign({
  "name": null,
  "solutionVersionArn": null,
  "minProvisionedTPS": null
}, context)
```

#### Input
* input `object`
  * campaignConfig
    * itemExplorationConfig
  * minProvisionedTPS **required**
  * name **required**
  * solutionVersionArn **required**

#### Output
* output [CreateCampaignResponse](#createcampaignresponse)

### CreateDataset



```js
amazonaws_personalize.CreateDataset({
  "name": null,
  "schemaArn": null,
  "datasetGroupArn": null,
  "datasetType": null
}, context)
```

#### Input
* input `object`
  * datasetGroupArn **required**
  * datasetType **required**
  * name **required**
  * schemaArn **required**

#### Output
* output [CreateDatasetResponse](#createdatasetresponse)

### CreateDatasetGroup



```js
amazonaws_personalize.CreateDatasetGroup({
  "name": null
}, context)
```

#### Input
* input `object`
  * kmsKeyArn
  * name **required**
  * roleArn

#### Output
* output [CreateDatasetGroupResponse](#createdatasetgroupresponse)

### CreateDatasetImportJob



```js
amazonaws_personalize.CreateDatasetImportJob({
  "jobName": null,
  "datasetArn": null,
  "dataSource": null,
  "roleArn": null
}, context)
```

#### Input
* input `object`
  * dataSource **required**
    * dataLocation
  * datasetArn **required**
  * jobName **required**
  * roleArn **required**

#### Output
* output [CreateDatasetImportJobResponse](#createdatasetimportjobresponse)

### CreateEventTracker



```js
amazonaws_personalize.CreateEventTracker({
  "name": null,
  "datasetGroupArn": null
}, context)
```

#### Input
* input `object`
  * datasetGroupArn **required**
  * name **required**

#### Output
* output [CreateEventTrackerResponse](#createeventtrackerresponse)

### CreateFilter



```js
amazonaws_personalize.CreateFilter({
  "name": null,
  "datasetGroupArn": null,
  "filterExpression": null
}, context)
```

#### Input
* input `object`
  * datasetGroupArn **required**
  * filterExpression **required**
  * name **required**

#### Output
* output [CreateFilterResponse](#createfilterresponse)

### CreateSchema



```js
amazonaws_personalize.CreateSchema({
  "name": null,
  "schema": null
}, context)
```

#### Input
* input `object`
  * name **required**
  * schema **required**

#### Output
* output [CreateSchemaResponse](#createschemaresponse)

### CreateSolution



```js
amazonaws_personalize.CreateSolution({
  "name": null,
  "datasetGroupArn": null
}, context)
```

#### Input
* input `object`
  * datasetGroupArn **required**
  * eventType
  * name **required**
  * performAutoML
  * performHPO
  * recipeArn
  * solutionConfig
    * algorithmHyperParameters
    * autoMLConfig
      * metricName
      * recipeList
        * items [Arn](#arn)
    * eventValueThreshold
    * featureTransformationParameters
    * hpoConfig
      * algorithmHyperParameterRanges
        * categoricalHyperParameterRanges
          * items [CategoricalHyperParameterRange](#categoricalhyperparameterrange)
        * continuousHyperParameterRanges
          * items [ContinuousHyperParameterRange](#continuoushyperparameterrange)
        * integerHyperParameterRanges
          * items [IntegerHyperParameterRange](#integerhyperparameterrange)
      * hpoObjective
        * metricName
        * metricRegex
        * type
      * hpoResourceConfig
        * maxNumberOfTrainingJobs
        * maxParallelTrainingJobs

#### Output
* output [CreateSolutionResponse](#createsolutionresponse)

### CreateSolutionVersion



```js
amazonaws_personalize.CreateSolutionVersion({
  "solutionArn": null
}, context)
```

#### Input
* input `object`
  * solutionArn **required**
  * trainingMode

#### Output
* output [CreateSolutionVersionResponse](#createsolutionversionresponse)

### DeleteCampaign



```js
amazonaws_personalize.DeleteCampaign({
  "campaignArn": null
}, context)
```

#### Input
* input `object`
  * campaignArn **required**

#### Output
*Output schema unknown*

### DeleteDataset



```js
amazonaws_personalize.DeleteDataset({
  "datasetArn": null
}, context)
```

#### Input
* input `object`
  * datasetArn **required**

#### Output
*Output schema unknown*

### DeleteDatasetGroup



```js
amazonaws_personalize.DeleteDatasetGroup({
  "datasetGroupArn": null
}, context)
```

#### Input
* input `object`
  * datasetGroupArn **required**

#### Output
*Output schema unknown*

### DeleteEventTracker



```js
amazonaws_personalize.DeleteEventTracker({
  "eventTrackerArn": null
}, context)
```

#### Input
* input `object`
  * eventTrackerArn **required**

#### Output
*Output schema unknown*

### DeleteFilter



```js
amazonaws_personalize.DeleteFilter({
  "filterArn": null
}, context)
```

#### Input
* input `object`
  * filterArn **required**

#### Output
*Output schema unknown*

### DeleteSchema



```js
amazonaws_personalize.DeleteSchema({
  "schemaArn": null
}, context)
```

#### Input
* input `object`
  * schemaArn **required**

#### Output
*Output schema unknown*

### DeleteSolution



```js
amazonaws_personalize.DeleteSolution({
  "solutionArn": null
}, context)
```

#### Input
* input `object`
  * solutionArn **required**

#### Output
*Output schema unknown*

### DescribeAlgorithm



```js
amazonaws_personalize.DescribeAlgorithm({
  "algorithmArn": null
}, context)
```

#### Input
* input `object`
  * algorithmArn **required**

#### Output
* output [DescribeAlgorithmResponse](#describealgorithmresponse)

### DescribeBatchInferenceJob



```js
amazonaws_personalize.DescribeBatchInferenceJob({
  "batchInferenceJobArn": null
}, context)
```

#### Input
* input `object`
  * batchInferenceJobArn **required**

#### Output
* output [DescribeBatchInferenceJobResponse](#describebatchinferencejobresponse)

### DescribeCampaign



```js
amazonaws_personalize.DescribeCampaign({
  "campaignArn": null
}, context)
```

#### Input
* input `object`
  * campaignArn **required**

#### Output
* output [DescribeCampaignResponse](#describecampaignresponse)

### DescribeDataset



```js
amazonaws_personalize.DescribeDataset({
  "datasetArn": null
}, context)
```

#### Input
* input `object`
  * datasetArn **required**

#### Output
* output [DescribeDatasetResponse](#describedatasetresponse)

### DescribeDatasetGroup



```js
amazonaws_personalize.DescribeDatasetGroup({
  "datasetGroupArn": null
}, context)
```

#### Input
* input `object`
  * datasetGroupArn **required**

#### Output
* output [DescribeDatasetGroupResponse](#describedatasetgroupresponse)

### DescribeDatasetImportJob



```js
amazonaws_personalize.DescribeDatasetImportJob({
  "datasetImportJobArn": null
}, context)
```

#### Input
* input `object`
  * datasetImportJobArn **required**

#### Output
* output [DescribeDatasetImportJobResponse](#describedatasetimportjobresponse)

### DescribeEventTracker



```js
amazonaws_personalize.DescribeEventTracker({
  "eventTrackerArn": null
}, context)
```

#### Input
* input `object`
  * eventTrackerArn **required**

#### Output
* output [DescribeEventTrackerResponse](#describeeventtrackerresponse)

### DescribeFeatureTransformation



```js
amazonaws_personalize.DescribeFeatureTransformation({
  "featureTransformationArn": null
}, context)
```

#### Input
* input `object`
  * featureTransformationArn **required**

#### Output
* output [DescribeFeatureTransformationResponse](#describefeaturetransformationresponse)

### DescribeFilter



```js
amazonaws_personalize.DescribeFilter({
  "filterArn": null
}, context)
```

#### Input
* input `object`
  * filterArn **required**

#### Output
* output [DescribeFilterResponse](#describefilterresponse)

### DescribeRecipe



```js
amazonaws_personalize.DescribeRecipe({
  "recipeArn": null
}, context)
```

#### Input
* input `object`
  * recipeArn **required**

#### Output
* output [DescribeRecipeResponse](#describereciperesponse)

### DescribeSchema



```js
amazonaws_personalize.DescribeSchema({
  "schemaArn": null
}, context)
```

#### Input
* input `object`
  * schemaArn **required**

#### Output
* output [DescribeSchemaResponse](#describeschemaresponse)

### DescribeSolution



```js
amazonaws_personalize.DescribeSolution({
  "solutionArn": null
}, context)
```

#### Input
* input `object`
  * solutionArn **required**

#### Output
* output [DescribeSolutionResponse](#describesolutionresponse)

### DescribeSolutionVersion



```js
amazonaws_personalize.DescribeSolutionVersion({
  "solutionVersionArn": null
}, context)
```

#### Input
* input `object`
  * solutionVersionArn **required**

#### Output
* output [DescribeSolutionVersionResponse](#describesolutionversionresponse)

### GetSolutionMetrics



```js
amazonaws_personalize.GetSolutionMetrics({
  "solutionVersionArn": null
}, context)
```

#### Input
* input `object`
  * solutionVersionArn **required**

#### Output
* output [GetSolutionMetricsResponse](#getsolutionmetricsresponse)

### ListBatchInferenceJobs



```js
amazonaws_personalize.ListBatchInferenceJobs({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * solutionVersionArn

#### Output
* output [ListBatchInferenceJobsResponse](#listbatchinferencejobsresponse)

### ListCampaigns



```js
amazonaws_personalize.ListCampaigns({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * solutionArn

#### Output
* output [ListCampaignsResponse](#listcampaignsresponse)

### ListDatasetGroups



```js
amazonaws_personalize.ListDatasetGroups({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken

#### Output
* output [ListDatasetGroupsResponse](#listdatasetgroupsresponse)

### ListDatasetImportJobs



```js
amazonaws_personalize.ListDatasetImportJobs({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * datasetArn
  * maxResults
  * nextToken

#### Output
* output [ListDatasetImportJobsResponse](#listdatasetimportjobsresponse)

### ListDatasets



```js
amazonaws_personalize.ListDatasets({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * datasetGroupArn
  * maxResults
  * nextToken

#### Output
* output [ListDatasetsResponse](#listdatasetsresponse)

### ListEventTrackers



```js
amazonaws_personalize.ListEventTrackers({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * datasetGroupArn
  * maxResults
  * nextToken

#### Output
* output [ListEventTrackersResponse](#listeventtrackersresponse)

### ListFilters



```js
amazonaws_personalize.ListFilters({}, context)
```

#### Input
* input `object`
  * datasetGroupArn
  * maxResults
  * nextToken

#### Output
* output [ListFiltersResponse](#listfiltersresponse)

### ListRecipes



```js
amazonaws_personalize.ListRecipes({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * recipeProvider

#### Output
* output [ListRecipesResponse](#listrecipesresponse)

### ListSchemas



```js
amazonaws_personalize.ListSchemas({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken

#### Output
* output [ListSchemasResponse](#listschemasresponse)

### ListSolutionVersions



```js
amazonaws_personalize.ListSolutionVersions({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * solutionArn

#### Output
* output [ListSolutionVersionsResponse](#listsolutionversionsresponse)

### ListSolutions



```js
amazonaws_personalize.ListSolutions({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * datasetGroupArn
  * maxResults
  * nextToken

#### Output
* output [ListSolutionsResponse](#listsolutionsresponse)

### UpdateCampaign



```js
amazonaws_personalize.UpdateCampaign({
  "campaignArn": null
}, context)
```

#### Input
* input `object`
  * campaignArn **required**
  * campaignConfig
    * itemExplorationConfig
  * minProvisionedTPS
  * solutionVersionArn

#### Output
* output [UpdateCampaignResponse](#updatecampaignresponse)



## Definitions

### AccountId
* AccountId `string`

### Algorithm
* Algorithm `object`: Describes a custom algorithm.
  * algorithmArn
  * algorithmImage
    * dockerURI **required**
    * name
  * creationDateTime
  * defaultHyperParameterRanges
    * categoricalHyperParameterRanges
      * items [DefaultCategoricalHyperParameterRange](#defaultcategoricalhyperparameterrange)
    * continuousHyperParameterRanges
      * items [DefaultContinuousHyperParameterRange](#defaultcontinuoushyperparameterrange)
    * integerHyperParameterRanges
      * items [DefaultIntegerHyperParameterRange](#defaultintegerhyperparameterrange)
  * defaultHyperParameters
  * defaultResourceConfig
  * lastUpdatedDateTime
  * name
  * roleArn
  * trainingInputMode

### AlgorithmImage
* AlgorithmImage `object`: Describes an algorithm image.
  * dockerURI **required**
  * name

### Arn
* Arn `string`

### ArnList
* ArnList `array`
  * items [Arn](#arn)

### AutoMLConfig
* AutoMLConfig `object`: When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution.
  * metricName
  * recipeList
    * items [Arn](#arn)

### AutoMLResult
* AutoMLResult `object`: When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), specifies the recipe that best optimized the specified metric.
  * bestRecipeArn

### AvroSchema
* AvroSchema `string`

### BatchInferenceJob
* BatchInferenceJob `object`: Contains information on a batch inference job.
  * batchInferenceJobArn
  * batchInferenceJobConfig
    * itemExplorationConfig
  * creationDateTime
  * failureReason
  * filterArn
  * jobInput
    * s3DataSource **required**
      * kmsKeyArn
      * path **required**
  * jobName
  * jobOutput
    * s3DataDestination **required**
      * kmsKeyArn
      * path **required**
  * lastUpdatedDateTime
  * numResults
  * roleArn
  * solutionVersionArn
  * status

### BatchInferenceJobConfig
* BatchInferenceJobConfig `object`: The configuration details of a batch inference job.
  * itemExplorationConfig

### BatchInferenceJobInput
* BatchInferenceJobInput `object`: The input configuration of a batch inference job.
  * s3DataSource **required**
    * kmsKeyArn
    * path **required**

### BatchInferenceJobOutput
* BatchInferenceJobOutput `object`: The output configuration parameters of a batch inference job.
  * s3DataDestination **required**
    * kmsKeyArn
    * path **required**

### BatchInferenceJobSummary
* BatchInferenceJobSummary `object`: A truncated version of the <a>BatchInferenceJob</a> datatype. The <a>ListBatchInferenceJobs</a> operation returns a list of batch inference job summaries.
  * batchInferenceJobArn
  * creationDateTime
  * failureReason
  * jobName
  * lastUpdatedDateTime
  * solutionVersionArn
  * status

### BatchInferenceJobs
* BatchInferenceJobs `array`
  * items [BatchInferenceJobSummary](#batchinferencejobsummary)

### Boolean
* Boolean `boolean`

### Campaign
* Campaign `object`: Describes a deployed solution version, otherwise known as a campaign. For more information on campaigns, see <a>CreateCampaign</a>.
  * campaignArn
  * campaignConfig
    * itemExplorationConfig
  * creationDateTime
  * failureReason
  * lastUpdatedDateTime
  * latestCampaignUpdate [CampaignUpdateSummary](#campaignupdatesummary)
  * minProvisionedTPS
  * name
  * solutionVersionArn
  * status

### CampaignConfig
* CampaignConfig `object`: The configuration details of a campaign.
  * itemExplorationConfig

### CampaignSummary
* CampaignSummary `object`: Provides a summary of the properties of a campaign. For a complete listing, call the <a>DescribeCampaign</a> API.
  * campaignArn
  * creationDateTime
  * failureReason
  * lastUpdatedDateTime
  * name
  * status

### CampaignUpdateSummary
* CampaignUpdateSummary `object`: Provides a summary of the properties of a campaign update. For a complete listing, call the <a>DescribeCampaign</a> API.
  * campaignConfig [CampaignConfig](#campaignconfig)
  * creationDateTime
  * failureReason
  * lastUpdatedDateTime
  * minProvisionedTPS
  * solutionVersionArn
  * status

### Campaigns
* Campaigns `array`
  * items [CampaignSummary](#campaignsummary)

### CategoricalHyperParameterRange
* CategoricalHyperParameterRange `object`: Provides the name and range of a categorical hyperparameter.
  * name
  * values
    * items [CategoricalValue](#categoricalvalue)

### CategoricalHyperParameterRanges
* CategoricalHyperParameterRanges `array`
  * items [CategoricalHyperParameterRange](#categoricalhyperparameterrange)

### CategoricalValue
* CategoricalValue `string`

### CategoricalValues
* CategoricalValues `array`
  * items [CategoricalValue](#categoricalvalue)

### ContinuousHyperParameterRange
* ContinuousHyperParameterRange `object`: Provides the name and range of a continuous hyperparameter.
  * maxValue
  * minValue
  * name

### ContinuousHyperParameterRanges
* ContinuousHyperParameterRanges `array`
  * items [ContinuousHyperParameterRange](#continuoushyperparameterrange)

### ContinuousMaxValue
* ContinuousMaxValue `number`

### ContinuousMinValue
* ContinuousMinValue `number`

### CreateBatchInferenceJobRequest
* CreateBatchInferenceJobRequest `object`
  * batchInferenceJobConfig
    * itemExplorationConfig
  * filterArn
  * jobInput **required**
    * s3DataSource **required**
      * kmsKeyArn
      * path **required**
  * jobName **required**
  * jobOutput **required**
    * s3DataDestination **required**
      * kmsKeyArn
      * path **required**
  * numResults
  * roleArn **required**
  * solutionVersionArn **required**

### CreateBatchInferenceJobResponse
* CreateBatchInferenceJobResponse `object`
  * batchInferenceJobArn

### CreateCampaignRequest
* CreateCampaignRequest `object`
  * campaignConfig
    * itemExplorationConfig
  * minProvisionedTPS **required**
  * name **required**
  * solutionVersionArn **required**

### CreateCampaignResponse
* CreateCampaignResponse `object`
  * campaignArn

### CreateDatasetGroupRequest
* CreateDatasetGroupRequest `object`
  * kmsKeyArn
  * name **required**
  * roleArn

### CreateDatasetGroupResponse
* CreateDatasetGroupResponse `object`
  * datasetGroupArn

### CreateDatasetImportJobRequest
* CreateDatasetImportJobRequest `object`
  * dataSource **required**
    * dataLocation
  * datasetArn **required**
  * jobName **required**
  * roleArn **required**

### CreateDatasetImportJobResponse
* CreateDatasetImportJobResponse `object`
  * datasetImportJobArn

### CreateDatasetRequest
* CreateDatasetRequest `object`
  * datasetGroupArn **required**
  * datasetType **required**
  * name **required**
  * schemaArn **required**

### CreateDatasetResponse
* CreateDatasetResponse `object`
  * datasetArn

### CreateEventTrackerRequest
* CreateEventTrackerRequest `object`
  * datasetGroupArn **required**
  * name **required**

### CreateEventTrackerResponse
* CreateEventTrackerResponse `object`
  * eventTrackerArn
  * trackingId

### CreateFilterRequest
* CreateFilterRequest `object`
  * datasetGroupArn **required**
  * filterExpression **required**
  * name **required**

### CreateFilterResponse
* CreateFilterResponse `object`
  * filterArn

### CreateSchemaRequest
* CreateSchemaRequest `object`
  * name **required**
  * schema **required**

### CreateSchemaResponse
* CreateSchemaResponse `object`
  * schemaArn

### CreateSolutionRequest
* CreateSolutionRequest `object`
  * datasetGroupArn **required**
  * eventType
  * name **required**
  * performAutoML
  * performHPO
  * recipeArn
  * solutionConfig
    * algorithmHyperParameters
    * autoMLConfig
      * metricName
      * recipeList
        * items [Arn](#arn)
    * eventValueThreshold
    * featureTransformationParameters
    * hpoConfig
      * algorithmHyperParameterRanges
        * categoricalHyperParameterRanges
          * items [CategoricalHyperParameterRange](#categoricalhyperparameterrange)
        * continuousHyperParameterRanges
          * items [ContinuousHyperParameterRange](#continuoushyperparameterrange)
        * integerHyperParameterRanges
          * items [IntegerHyperParameterRange](#integerhyperparameterrange)
      * hpoObjective
        * metricName
        * metricRegex
        * type
      * hpoResourceConfig
        * maxNumberOfTrainingJobs
        * maxParallelTrainingJobs

### CreateSolutionResponse
* CreateSolutionResponse `object`
  * solutionArn

### CreateSolutionVersionRequest
* CreateSolutionVersionRequest `object`
  * solutionArn **required**
  * trainingMode

### CreateSolutionVersionResponse
* CreateSolutionVersionResponse `object`
  * solutionVersionArn

### DataSource
* DataSource `object`: Describes the data source that contains the data to upload to a dataset.
  * dataLocation

### Dataset
* Dataset `object`: Provides metadata for a dataset.
  * creationDateTime
  * datasetArn
  * datasetGroupArn
  * datasetType
  * lastUpdatedDateTime
  * name
  * schemaArn
  * status

### DatasetGroup
* DatasetGroup `object`: <p>A dataset group is a collection of related datasets (Interactions, User, and Item). You create a dataset group by calling <a>CreateDatasetGroup</a>. You then create a dataset and add it to a dataset group by calling <a>CreateDataset</a>. The dataset group is used to create and train a solution by calling <a>CreateSolution</a>. A dataset group can contain only one of each type of dataset.</p> <p>You can specify an AWS Key Management Service (KMS) key to encrypt the datasets in the group.</p>
  * creationDateTime
  * datasetGroupArn
  * failureReason
  * kmsKeyArn
  * lastUpdatedDateTime
  * name
  * roleArn
  * status

### DatasetGroupSummary
* DatasetGroupSummary `object`: Provides a summary of the properties of a dataset group. For a complete listing, call the <a>DescribeDatasetGroup</a> API.
  * creationDateTime
  * datasetGroupArn
  * failureReason
  * lastUpdatedDateTime
  * name
  * status

### DatasetGroups
* DatasetGroups `array`
  * items [DatasetGroupSummary](#datasetgroupsummary)

### DatasetImportJob
* DatasetImportJob `object`: <p>Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. For more information, see <a>CreateDatasetImportJob</a>.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>
  * creationDateTime
  * dataSource
    * dataLocation
  * datasetArn
  * datasetImportJobArn
  * failureReason
  * jobName
  * lastUpdatedDateTime
  * roleArn
  * status

### DatasetImportJobSummary
* DatasetImportJobSummary `object`: Provides a summary of the properties of a dataset import job. For a complete listing, call the <a>DescribeDatasetImportJob</a> API.
  * creationDateTime
  * datasetImportJobArn
  * failureReason
  * jobName
  * lastUpdatedDateTime
  * status

### DatasetImportJobs
* DatasetImportJobs `array`
  * items [DatasetImportJobSummary](#datasetimportjobsummary)

### DatasetSchema
* DatasetSchema `object`: Describes the schema for a dataset. For more information on schemas, see <a>CreateSchema</a>.
  * creationDateTime
  * lastUpdatedDateTime
  * name
  * schema
  * schemaArn

### DatasetSchemaSummary
* DatasetSchemaSummary `object`: Provides a summary of the properties of a dataset schema. For a complete listing, call the <a>DescribeSchema</a> API.
  * creationDateTime
  * lastUpdatedDateTime
  * name
  * schemaArn

### DatasetSummary
* DatasetSummary `object`: Provides a summary of the properties of a dataset. For a complete listing, call the <a>DescribeDataset</a> API.
  * creationDateTime
  * datasetArn
  * datasetType
  * lastUpdatedDateTime
  * name
  * status

### DatasetType
* DatasetType `string`

### Datasets
* Datasets `array`
  * items [DatasetSummary](#datasetsummary)

### Date
* Date `string`

### DefaultCategoricalHyperParameterRange
* DefaultCategoricalHyperParameterRange `object`: Provides the name and default range of a categorical hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
  * isTunable
  * name
  * values
    * items [CategoricalValue](#categoricalvalue)

### DefaultCategoricalHyperParameterRanges
* DefaultCategoricalHyperParameterRanges `array`
  * items [DefaultCategoricalHyperParameterRange](#defaultcategoricalhyperparameterrange)

### DefaultContinuousHyperParameterRange
* DefaultContinuousHyperParameterRange `object`: Provides the name and default range of a continuous hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
  * isTunable
  * maxValue
  * minValue
  * name

### DefaultContinuousHyperParameterRanges
* DefaultContinuousHyperParameterRanges `array`
  * items [DefaultContinuousHyperParameterRange](#defaultcontinuoushyperparameterrange)

### DefaultHyperParameterRanges
* DefaultHyperParameterRanges `object`: Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued.
  * categoricalHyperParameterRanges
    * items [DefaultCategoricalHyperParameterRange](#defaultcategoricalhyperparameterrange)
  * continuousHyperParameterRanges
    * items [DefaultContinuousHyperParameterRange](#defaultcontinuoushyperparameterrange)
  * integerHyperParameterRanges
    * items [DefaultIntegerHyperParameterRange](#defaultintegerhyperparameterrange)

### DefaultIntegerHyperParameterRange
* DefaultIntegerHyperParameterRange `object`: Provides the name and default range of a integer-valued hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
  * isTunable
  * maxValue
  * minValue
  * name

### DefaultIntegerHyperParameterRanges
* DefaultIntegerHyperParameterRanges `array`
  * items [DefaultIntegerHyperParameterRange](#defaultintegerhyperparameterrange)

### DeleteCampaignRequest
* DeleteCampaignRequest `object`
  * campaignArn **required**

### DeleteDatasetGroupRequest
* DeleteDatasetGroupRequest `object`
  * datasetGroupArn **required**

### DeleteDatasetRequest
* DeleteDatasetRequest `object`
  * datasetArn **required**

### DeleteEventTrackerRequest
* DeleteEventTrackerRequest `object`
  * eventTrackerArn **required**

### DeleteFilterRequest
* DeleteFilterRequest `object`
  * filterArn **required**

### DeleteSchemaRequest
* DeleteSchemaRequest `object`
  * schemaArn **required**

### DeleteSolutionRequest
* DeleteSolutionRequest `object`
  * solutionArn **required**

### DescribeAlgorithmRequest
* DescribeAlgorithmRequest `object`
  * algorithmArn **required**

### DescribeAlgorithmResponse
* DescribeAlgorithmResponse `object`
  * algorithm
    * algorithmArn
    * algorithmImage
      * dockerURI **required**
      * name
    * creationDateTime
    * defaultHyperParameterRanges
      * categoricalHyperParameterRanges
        * items [DefaultCategoricalHyperParameterRange](#defaultcategoricalhyperparameterrange)
      * continuousHyperParameterRanges
        * items [DefaultContinuousHyperParameterRange](#defaultcontinuoushyperparameterrange)
      * integerHyperParameterRanges
        * items [DefaultIntegerHyperParameterRange](#defaultintegerhyperparameterrange)
    * defaultHyperParameters
    * defaultResourceConfig
    * lastUpdatedDateTime
    * name
    * roleArn
    * trainingInputMode

### DescribeBatchInferenceJobRequest
* DescribeBatchInferenceJobRequest `object`
  * batchInferenceJobArn **required**

### DescribeBatchInferenceJobResponse
* DescribeBatchInferenceJobResponse `object`
  * batchInferenceJob
    * batchInferenceJobArn
    * batchInferenceJobConfig
      * itemExplorationConfig
    * creationDateTime
    * failureReason
    * filterArn
    * jobInput
      * s3DataSource **required**
        * kmsKeyArn
        * path **required**
    * jobName
    * jobOutput
      * s3DataDestination **required**
        * kmsKeyArn
        * path **required**
    * lastUpdatedDateTime
    * numResults
    * roleArn
    * solutionVersionArn
    * status

### DescribeCampaignRequest
* DescribeCampaignRequest `object`
  * campaignArn **required**

### DescribeCampaignResponse
* DescribeCampaignResponse `object`
  * campaign
    * campaignArn
    * campaignConfig
      * itemExplorationConfig
    * creationDateTime
    * failureReason
    * lastUpdatedDateTime
    * latestCampaignUpdate [CampaignUpdateSummary](#campaignupdatesummary)
    * minProvisionedTPS
    * name
    * solutionVersionArn
    * status

### DescribeDatasetGroupRequest
* DescribeDatasetGroupRequest `object`
  * datasetGroupArn **required**

### DescribeDatasetGroupResponse
* DescribeDatasetGroupResponse `object`
  * datasetGroup
    * creationDateTime
    * datasetGroupArn
    * failureReason
    * kmsKeyArn
    * lastUpdatedDateTime
    * name
    * roleArn
    * status

### DescribeDatasetImportJobRequest
* DescribeDatasetImportJobRequest `object`
  * datasetImportJobArn **required**

### DescribeDatasetImportJobResponse
* DescribeDatasetImportJobResponse `object`
  * datasetImportJob
    * creationDateTime
    * dataSource
      * dataLocation
    * datasetArn
    * datasetImportJobArn
    * failureReason
    * jobName
    * lastUpdatedDateTime
    * roleArn
    * status

### DescribeDatasetRequest
* DescribeDatasetRequest `object`
  * datasetArn **required**

### DescribeDatasetResponse
* DescribeDatasetResponse `object`
  * dataset
    * creationDateTime
    * datasetArn
    * datasetGroupArn
    * datasetType
    * lastUpdatedDateTime
    * name
    * schemaArn
    * status

### DescribeEventTrackerRequest
* DescribeEventTrackerRequest `object`
  * eventTrackerArn **required**

### DescribeEventTrackerResponse
* DescribeEventTrackerResponse `object`
  * eventTracker
    * accountId
    * creationDateTime
    * datasetGroupArn
    * eventTrackerArn
    * lastUpdatedDateTime
    * name
    * status
    * trackingId

### DescribeFeatureTransformationRequest
* DescribeFeatureTransformationRequest `object`
  * featureTransformationArn **required**

### DescribeFeatureTransformationResponse
* DescribeFeatureTransformationResponse `object`
  * featureTransformation
    * creationDateTime
    * defaultParameters
    * featureTransformationArn
    * lastUpdatedDateTime
    * name
    * status

### DescribeFilterRequest
* DescribeFilterRequest `object`
  * filterArn **required**

### DescribeFilterResponse
* DescribeFilterResponse `object`
  * filter
    * creationDateTime
    * datasetGroupArn
    * failureReason
    * filterArn
    * filterExpression
    * lastUpdatedDateTime
    * name
    * status

### DescribeRecipeRequest
* DescribeRecipeRequest `object`
  * recipeArn **required**

### DescribeRecipeResponse
* DescribeRecipeResponse `object`
  * recipe
    * algorithmArn
    * creationDateTime
    * description
    * featureTransformationArn
    * lastUpdatedDateTime
    * name
    * recipeArn
    * recipeType
    * status

### DescribeSchemaRequest
* DescribeSchemaRequest `object`
  * schemaArn **required**

### DescribeSchemaResponse
* DescribeSchemaResponse `object`
  * schema
    * creationDateTime
    * lastUpdatedDateTime
    * name
    * schema
    * schemaArn

### DescribeSolutionRequest
* DescribeSolutionRequest `object`
  * solutionArn **required**

### DescribeSolutionResponse
* DescribeSolutionResponse `object`
  * solution
    * autoMLResult
      * bestRecipeArn
    * creationDateTime
    * datasetGroupArn
    * eventType
    * lastUpdatedDateTime
    * latestSolutionVersion
      * creationDateTime
      * failureReason
      * lastUpdatedDateTime
      * solutionVersionArn
      * status
    * name
    * performAutoML
    * performHPO
    * recipeArn
    * solutionArn
    * solutionConfig
      * algorithmHyperParameters
      * autoMLConfig
        * metricName
        * recipeList
          * items [Arn](#arn)
      * eventValueThreshold
      * featureTransformationParameters
      * hpoConfig
        * algorithmHyperParameterRanges
          * categoricalHyperParameterRanges
          * continuousHyperParameterRanges
          * integerHyperParameterRanges
        * hpoObjective
          * metricName
          * metricRegex
          * type
        * hpoResourceConfig
          * maxNumberOfTrainingJobs
          * maxParallelTrainingJobs
    * status

### DescribeSolutionVersionRequest
* DescribeSolutionVersionRequest `object`
  * solutionVersionArn **required**

### DescribeSolutionVersionResponse
* DescribeSolutionVersionResponse `object`
  * solutionVersion
    * creationDateTime
    * datasetGroupArn
    * eventType
    * failureReason
    * lastUpdatedDateTime
    * performAutoML
    * performHPO
    * recipeArn
    * solutionArn
    * solutionConfig
      * algorithmHyperParameters
      * autoMLConfig
        * metricName
        * recipeList
          * items [Arn](#arn)
      * eventValueThreshold
      * featureTransformationParameters
      * hpoConfig
        * algorithmHyperParameterRanges
          * categoricalHyperParameterRanges
          * continuousHyperParameterRanges
          * integerHyperParameterRanges
        * hpoObjective
          * metricName
          * metricRegex
          * type
        * hpoResourceConfig
          * maxNumberOfTrainingJobs
          * maxParallelTrainingJobs
    * solutionVersionArn
    * status
    * trainingHours
    * trainingMode
    * tunedHPOParams
      * algorithmHyperParameters

### Description
* Description `string`

### DockerURI
* DockerURI `string`

### EventTracker
* EventTracker `object`: Provides information about an event tracker.
  * accountId
  * creationDateTime
  * datasetGroupArn
  * eventTrackerArn
  * lastUpdatedDateTime
  * name
  * status
  * trackingId

### EventTrackerSummary
* EventTrackerSummary `object`: Provides a summary of the properties of an event tracker. For a complete listing, call the <a>DescribeEventTracker</a> API.
  * creationDateTime
  * eventTrackerArn
  * lastUpdatedDateTime
  * name
  * status

### EventTrackers
* EventTrackers `array`
  * items [EventTrackerSummary](#eventtrackersummary)

### EventType
* EventType `string`

### EventValueThreshold
* EventValueThreshold `string`

### FailureReason
* FailureReason `string`

### FeatureTransformation
* FeatureTransformation `object`: Provides feature transformation information. Feature transformation is the process of modifying raw input data into a form more suitable for model training.
  * creationDateTime
  * defaultParameters
  * featureTransformationArn
  * lastUpdatedDateTime
  * name
  * status

### FeatureTransformationParameters
* FeatureTransformationParameters `object`

### FeaturizationParameters
* FeaturizationParameters `object`

### Filter
* Filter `object`: Contains information on a recommendation filter, including its ARN, status, and filter expression.
  * creationDateTime
  * datasetGroupArn
  * failureReason
  * filterArn
  * filterExpression
  * lastUpdatedDateTime
  * name
  * status

### FilterExpression
* FilterExpression `string`

### FilterSummary
* FilterSummary `object`: A short summary of a filter's attributes.
  * creationDateTime
  * datasetGroupArn
  * failureReason
  * filterArn
  * lastUpdatedDateTime
  * name
  * status

### Filters
* Filters `array`
  * items [FilterSummary](#filtersummary)

### GetSolutionMetricsRequest
* GetSolutionMetricsRequest `object`
  * solutionVersionArn **required**

### GetSolutionMetricsResponse
* GetSolutionMetricsResponse `object`
  * metrics
  * solutionVersionArn

### HPOConfig
* HPOConfig `object`: Describes the properties for hyperparameter optimization (HPO). For use with the bring-your-own-recipe feature. Do not use for Amazon Personalize native recipes.
  * algorithmHyperParameterRanges
    * categoricalHyperParameterRanges
      * items [CategoricalHyperParameterRange](#categoricalhyperparameterrange)
    * continuousHyperParameterRanges
      * items [ContinuousHyperParameterRange](#continuoushyperparameterrange)
    * integerHyperParameterRanges
      * items [IntegerHyperParameterRange](#integerhyperparameterrange)
  * hpoObjective
    * metricName
    * metricRegex
    * type
  * hpoResourceConfig
    * maxNumberOfTrainingJobs
    * maxParallelTrainingJobs

### HPOObjective
* HPOObjective `object`: The metric to optimize during hyperparameter optimization (HPO).
  * metricName
  * metricRegex
  * type

### HPOObjectiveType
* HPOObjectiveType `string`

### HPOResource
* HPOResource `string`

### HPOResourceConfig
* HPOResourceConfig `object`: Describes the resource configuration for hyperparameter optimization (HPO).
  * maxNumberOfTrainingJobs
  * maxParallelTrainingJobs

### HyperParameterRanges
* HyperParameterRanges `object`: Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued.
  * categoricalHyperParameterRanges
    * items [CategoricalHyperParameterRange](#categoricalhyperparameterrange)
  * continuousHyperParameterRanges
    * items [ContinuousHyperParameterRange](#continuoushyperparameterrange)
  * integerHyperParameterRanges
    * items [IntegerHyperParameterRange](#integerhyperparameterrange)

### HyperParameters
* HyperParameters `object`

### IntegerHyperParameterRange
* IntegerHyperParameterRange `object`: Provides the name and range of an integer-valued hyperparameter.
  * maxValue
  * minValue
  * name

### IntegerHyperParameterRanges
* IntegerHyperParameterRanges `array`
  * items [IntegerHyperParameterRange](#integerhyperparameterrange)

### IntegerMaxValue
* IntegerMaxValue `integer`

### IntegerMinValue
* IntegerMinValue `integer`

### InvalidInputException


### InvalidNextTokenException


### KmsKeyArn
* KmsKeyArn `string`

### LimitExceededException


### ListBatchInferenceJobsRequest
* ListBatchInferenceJobsRequest `object`
  * maxResults
  * nextToken
  * solutionVersionArn

### ListBatchInferenceJobsResponse
* ListBatchInferenceJobsResponse `object`
  * batchInferenceJobs
    * items [BatchInferenceJobSummary](#batchinferencejobsummary)
  * nextToken

### ListCampaignsRequest
* ListCampaignsRequest `object`
  * maxResults
  * nextToken
  * solutionArn

### ListCampaignsResponse
* ListCampaignsResponse `object`
  * campaigns
    * items [CampaignSummary](#campaignsummary)
  * nextToken

### ListDatasetGroupsRequest
* ListDatasetGroupsRequest `object`
  * maxResults
  * nextToken

### ListDatasetGroupsResponse
* ListDatasetGroupsResponse `object`
  * datasetGroups
    * items [DatasetGroupSummary](#datasetgroupsummary)
  * nextToken

### ListDatasetImportJobsRequest
* ListDatasetImportJobsRequest `object`
  * datasetArn
  * maxResults
  * nextToken

### ListDatasetImportJobsResponse
* ListDatasetImportJobsResponse `object`
  * datasetImportJobs
    * items [DatasetImportJobSummary](#datasetimportjobsummary)
  * nextToken

### ListDatasetsRequest
* ListDatasetsRequest `object`
  * datasetGroupArn
  * maxResults
  * nextToken

### ListDatasetsResponse
* ListDatasetsResponse `object`
  * datasets
    * items [DatasetSummary](#datasetsummary)
  * nextToken

### ListEventTrackersRequest
* ListEventTrackersRequest `object`
  * datasetGroupArn
  * maxResults
  * nextToken

### ListEventTrackersResponse
* ListEventTrackersResponse `object`
  * eventTrackers
    * items [EventTrackerSummary](#eventtrackersummary)
  * nextToken

### ListFiltersRequest
* ListFiltersRequest `object`
  * datasetGroupArn
  * maxResults
  * nextToken

### ListFiltersResponse
* ListFiltersResponse `object`
  * Filters
    * items [FilterSummary](#filtersummary)
  * nextToken

### ListRecipesRequest
* ListRecipesRequest `object`
  * maxResults
  * nextToken
  * recipeProvider

### ListRecipesResponse
* ListRecipesResponse `object`
  * nextToken
  * recipes
    * items [RecipeSummary](#recipesummary)

### ListSchemasRequest
* ListSchemasRequest `object`
  * maxResults
  * nextToken

### ListSchemasResponse
* ListSchemasResponse `object`
  * nextToken
  * schemas
    * items [DatasetSchemaSummary](#datasetschemasummary)

### ListSolutionVersionsRequest
* ListSolutionVersionsRequest `object`
  * maxResults
  * nextToken
  * solutionArn

### ListSolutionVersionsResponse
* ListSolutionVersionsResponse `object`
  * nextToken
  * solutionVersions
    * items [SolutionVersionSummary](#solutionversionsummary)

### ListSolutionsRequest
* ListSolutionsRequest `object`
  * datasetGroupArn
  * maxResults
  * nextToken

### ListSolutionsResponse
* ListSolutionsResponse `object`
  * nextToken
  * solutions
    * items [SolutionSummary](#solutionsummary)

### MaxResults
* MaxResults `integer`

### MetricName
* MetricName `string`

### MetricRegex
* MetricRegex `string`

### MetricValue
* MetricValue `number`

### Metrics
* Metrics `object`

### Name
* Name `string`

### NextToken
* NextToken `string`

### NumBatchResults
* NumBatchResults `integer`

### ParameterName
* ParameterName `string`

### ParameterValue
* ParameterValue `string`

### PerformAutoML
* PerformAutoML `boolean`

### PerformHPO
* PerformHPO `boolean`

### Recipe
* Recipe `object`: Provides information about a recipe. Each recipe provides an algorithm that Amazon Personalize uses in model training when you use the <a>CreateSolution</a> operation. 
  * algorithmArn
  * creationDateTime
  * description
  * featureTransformationArn
  * lastUpdatedDateTime
  * name
  * recipeArn
  * recipeType
  * status

### RecipeProvider
* RecipeProvider `string` (values: SERVICE)

### RecipeSummary
* RecipeSummary `object`: Provides a summary of the properties of a recipe. For a complete listing, call the <a>DescribeRecipe</a> API.
  * creationDateTime
  * lastUpdatedDateTime
  * name
  * recipeArn
  * status

### RecipeType
* RecipeType `string`

### Recipes
* Recipes `array`
  * items [RecipeSummary](#recipesummary)

### ResourceAlreadyExistsException


### ResourceConfig
* ResourceConfig `object`

### ResourceInUseException


### ResourceNotFoundException


### RoleArn
* RoleArn `string`

### S3DataConfig
* S3DataConfig `object`: The configuration details of an Amazon S3 input or output bucket.
  * kmsKeyArn
  * path **required**

### S3Location
* S3Location `string`

### Schemas
* Schemas `array`
  * items [DatasetSchemaSummary](#datasetschemasummary)

### Solution
* Solution `object`: An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign.
  * autoMLResult
    * bestRecipeArn
  * creationDateTime
  * datasetGroupArn
  * eventType
  * lastUpdatedDateTime
  * latestSolutionVersion
    * creationDateTime
    * failureReason
    * lastUpdatedDateTime
    * solutionVersionArn
    * status
  * name
  * performAutoML
  * performHPO
  * recipeArn
  * solutionArn
  * solutionConfig
    * algorithmHyperParameters
    * autoMLConfig
      * metricName
      * recipeList
        * items [Arn](#arn)
    * eventValueThreshold
    * featureTransformationParameters
    * hpoConfig
      * algorithmHyperParameterRanges
        * categoricalHyperParameterRanges
          * items [CategoricalHyperParameterRange](#categoricalhyperparameterrange)
        * continuousHyperParameterRanges
          * items [ContinuousHyperParameterRange](#continuoushyperparameterrange)
        * integerHyperParameterRanges
          * items [IntegerHyperParameterRange](#integerhyperparameterrange)
      * hpoObjective
        * metricName
        * metricRegex
        * type
      * hpoResourceConfig
        * maxNumberOfTrainingJobs
        * maxParallelTrainingJobs
  * status

### SolutionConfig
* SolutionConfig `object`: Describes the configuration properties for the solution.
  * algorithmHyperParameters
  * autoMLConfig
    * metricName
    * recipeList
      * items [Arn](#arn)
  * eventValueThreshold
  * featureTransformationParameters
  * hpoConfig
    * algorithmHyperParameterRanges
      * categoricalHyperParameterRanges
        * items [CategoricalHyperParameterRange](#categoricalhyperparameterrange)
      * continuousHyperParameterRanges
        * items [ContinuousHyperParameterRange](#continuoushyperparameterrange)
      * integerHyperParameterRanges
        * items [IntegerHyperParameterRange](#integerhyperparameterrange)
    * hpoObjective
      * metricName
      * metricRegex
      * type
    * hpoResourceConfig
      * maxNumberOfTrainingJobs
      * maxParallelTrainingJobs

### SolutionSummary
* SolutionSummary `object`: Provides a summary of the properties of a solution. For a complete listing, call the <a>DescribeSolution</a> API.
  * creationDateTime
  * lastUpdatedDateTime
  * name
  * solutionArn
  * status

### SolutionVersion
* SolutionVersion `object`: An object that provides information about a specific version of a <a>Solution</a>.
  * creationDateTime
  * datasetGroupArn
  * eventType
  * failureReason
  * lastUpdatedDateTime
  * performAutoML
  * performHPO
  * recipeArn
  * solutionArn
  * solutionConfig
    * algorithmHyperParameters
    * autoMLConfig
      * metricName
      * recipeList
        * items [Arn](#arn)
    * eventValueThreshold
    * featureTransformationParameters
    * hpoConfig
      * algorithmHyperParameterRanges
        * categoricalHyperParameterRanges
          * items [CategoricalHyperParameterRange](#categoricalhyperparameterrange)
        * continuousHyperParameterRanges
          * items [ContinuousHyperParameterRange](#continuoushyperparameterrange)
        * integerHyperParameterRanges
          * items [IntegerHyperParameterRange](#integerhyperparameterrange)
      * hpoObjective
        * metricName
        * metricRegex
        * type
      * hpoResourceConfig
        * maxNumberOfTrainingJobs
        * maxParallelTrainingJobs
  * solutionVersionArn
  * status
  * trainingHours
  * trainingMode
  * tunedHPOParams
    * algorithmHyperParameters

### SolutionVersionSummary
* SolutionVersionSummary `object`: Provides a summary of the properties of a solution version. For a complete listing, call the <a>DescribeSolutionVersion</a> API.
  * creationDateTime
  * failureReason
  * lastUpdatedDateTime
  * solutionVersionArn
  * status

### SolutionVersions
* SolutionVersions `array`
  * items [SolutionVersionSummary](#solutionversionsummary)

### Solutions
* Solutions `array`
  * items [SolutionSummary](#solutionsummary)

### Status
* Status `string`

### TrackingId
* TrackingId `string`

### TrainingHours
* TrainingHours `number`

### TrainingInputMode
* TrainingInputMode `string`

### TrainingMode
* TrainingMode `string` (values: FULL, UPDATE)

### TransactionsPerSecond
* TransactionsPerSecond `integer`

### Tunable
* Tunable `boolean`

### TunedHPOParams
* TunedHPOParams `object`: If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of the best performing model.
  * algorithmHyperParameters

### UpdateCampaignRequest
* UpdateCampaignRequest `object`
  * campaignArn **required**
  * campaignConfig
    * itemExplorationConfig
  * minProvisionedTPS
  * solutionVersionArn

### UpdateCampaignResponse
* UpdateCampaignResponse `object`
  * campaignArn


