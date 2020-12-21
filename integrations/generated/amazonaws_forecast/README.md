# @datafire/amazonaws_forecast

Client library for Amazon Forecast Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_forecast
```
```js
let amazonaws_forecast = require('@datafire/amazonaws_forecast').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Provides APIs for creating and managing Amazon Forecast resources.

## Actions

### CreateDataset



```js
amazonaws_forecast.CreateDataset({
  "DatasetName": null,
  "Domain": null,
  "DatasetType": null,
  "Schema": null
}, context)
```

#### Input
* input `object`
  * DataFrequency
  * DatasetName **required**
  * DatasetType **required**
  * Domain **required**
  * EncryptionConfig
    * KMSKeyArn **required**
    * RoleArn **required**
  * Schema **required**
    * Attributes
      * items [SchemaAttribute](#schemaattribute)
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateDatasetResponse](#createdatasetresponse)

### CreateDatasetGroup



```js
amazonaws_forecast.CreateDatasetGroup({
  "DatasetGroupName": null,
  "Domain": null
}, context)
```

#### Input
* input `object`
  * DatasetArns
    * items [Arn](#arn)
  * DatasetGroupName **required**
  * Domain **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateDatasetGroupResponse](#createdatasetgroupresponse)

### CreateDatasetImportJob



```js
amazonaws_forecast.CreateDatasetImportJob({
  "DatasetImportJobName": null,
  "DatasetArn": null,
  "DataSource": null
}, context)
```

#### Input
* input `object`
  * DataSource **required**
    * S3Config **required**
      * KMSKeyArn
      * Path **required**
      * RoleArn **required**
  * DatasetArn **required**
  * DatasetImportJobName **required**
  * GeolocationFormat
  * Tags
    * items [Tag](#tag)
  * TimeZone
  * TimestampFormat
  * UseGeolocationForTimeZone

#### Output
* output [CreateDatasetImportJobResponse](#createdatasetimportjobresponse)

### CreateForecast



```js
amazonaws_forecast.CreateForecast({
  "ForecastName": null,
  "PredictorArn": null
}, context)
```

#### Input
* input `object`
  * ForecastName **required**
  * ForecastTypes
    * items [ForecastType](#forecasttype)
  * PredictorArn **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateForecastResponse](#createforecastresponse)

### CreateForecastExportJob



```js
amazonaws_forecast.CreateForecastExportJob({
  "ForecastExportJobName": null,
  "ForecastArn": null,
  "Destination": null
}, context)
```

#### Input
* input `object`
  * Destination **required**
    * S3Config **required**
      * KMSKeyArn
      * Path **required**
      * RoleArn **required**
  * ForecastArn **required**
  * ForecastExportJobName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateForecastExportJobResponse](#createforecastexportjobresponse)

### CreatePredictor



```js
amazonaws_forecast.CreatePredictor({
  "PredictorName": null,
  "ForecastHorizon": null,
  "InputDataConfig": null,
  "FeaturizationConfig": null
}, context)
```

#### Input
* input `object`
  * AlgorithmArn
  * EncryptionConfig
    * KMSKeyArn **required**
    * RoleArn **required**
  * EvaluationParameters
    * BackTestWindowOffset
    * NumberOfBacktestWindows
  * FeaturizationConfig **required**
    * Featurizations
      * items [Featurization](#featurization)
    * ForecastDimensions
      * items [Name](#name)
    * ForecastFrequency **required**
  * ForecastHorizon **required**
  * ForecastTypes
    * items [ForecastType](#forecasttype)
  * HPOConfig
    * ParameterRanges
      * CategoricalParameterRanges
        * items [CategoricalParameterRange](#categoricalparameterrange)
      * ContinuousParameterRanges
        * items [ContinuousParameterRange](#continuousparameterrange)
      * IntegerParameterRanges
        * items [IntegerParameterRange](#integerparameterrange)
  * InputDataConfig **required**
    * DatasetGroupArn **required**
    * SupplementaryFeatures
      * items [SupplementaryFeature](#supplementaryfeature)
  * PerformAutoML
  * PerformHPO
  * PredictorName **required**
  * Tags
    * items [Tag](#tag)
  * TrainingParameters

#### Output
* output [CreatePredictorResponse](#createpredictorresponse)

### CreatePredictorBacktestExportJob



```js
amazonaws_forecast.CreatePredictorBacktestExportJob({
  "PredictorBacktestExportJobName": null,
  "PredictorArn": null,
  "Destination": {
    "S3Config": null
  }
}, context)
```

#### Input
* input `object`
  * Destination **required** [DataDestination](#datadestination)
  * PredictorArn **required**
  * PredictorBacktestExportJobName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreatePredictorBacktestExportJobResponse](#createpredictorbacktestexportjobresponse)

### DeleteDataset



```js
amazonaws_forecast.DeleteDataset({
  "DatasetArn": null
}, context)
```

#### Input
* input `object`
  * DatasetArn **required**

#### Output
*Output schema unknown*

### DeleteDatasetGroup



```js
amazonaws_forecast.DeleteDatasetGroup({
  "DatasetGroupArn": null
}, context)
```

#### Input
* input `object`
  * DatasetGroupArn **required**

#### Output
*Output schema unknown*

### DeleteDatasetImportJob



```js
amazonaws_forecast.DeleteDatasetImportJob({
  "DatasetImportJobArn": null
}, context)
```

#### Input
* input `object`
  * DatasetImportJobArn **required**

#### Output
*Output schema unknown*

### DeleteForecast



```js
amazonaws_forecast.DeleteForecast({
  "ForecastArn": null
}, context)
```

#### Input
* input `object`
  * ForecastArn **required**

#### Output
*Output schema unknown*

### DeleteForecastExportJob



```js
amazonaws_forecast.DeleteForecastExportJob({
  "ForecastExportJobArn": null
}, context)
```

#### Input
* input `object`
  * ForecastExportJobArn **required**

#### Output
*Output schema unknown*

### DeletePredictor



```js
amazonaws_forecast.DeletePredictor({
  "PredictorArn": null
}, context)
```

#### Input
* input `object`
  * PredictorArn **required**

#### Output
*Output schema unknown*

### DeletePredictorBacktestExportJob



```js
amazonaws_forecast.DeletePredictorBacktestExportJob({
  "PredictorBacktestExportJobArn": null
}, context)
```

#### Input
* input `object`
  * PredictorBacktestExportJobArn **required**

#### Output
*Output schema unknown*

### DescribeDataset



```js
amazonaws_forecast.DescribeDataset({
  "DatasetArn": null
}, context)
```

#### Input
* input `object`
  * DatasetArn **required**

#### Output
* output [DescribeDatasetResponse](#describedatasetresponse)

### DescribeDatasetGroup



```js
amazonaws_forecast.DescribeDatasetGroup({
  "DatasetGroupArn": null
}, context)
```

#### Input
* input `object`
  * DatasetGroupArn **required**

#### Output
* output [DescribeDatasetGroupResponse](#describedatasetgroupresponse)

### DescribeDatasetImportJob



```js
amazonaws_forecast.DescribeDatasetImportJob({
  "DatasetImportJobArn": null
}, context)
```

#### Input
* input `object`
  * DatasetImportJobArn **required**

#### Output
* output [DescribeDatasetImportJobResponse](#describedatasetimportjobresponse)

### DescribeForecast



```js
amazonaws_forecast.DescribeForecast({
  "ForecastArn": null
}, context)
```

#### Input
* input `object`
  * ForecastArn **required**

#### Output
* output [DescribeForecastResponse](#describeforecastresponse)

### DescribeForecastExportJob



```js
amazonaws_forecast.DescribeForecastExportJob({
  "ForecastExportJobArn": null
}, context)
```

#### Input
* input `object`
  * ForecastExportJobArn **required**

#### Output
* output [DescribeForecastExportJobResponse](#describeforecastexportjobresponse)

### DescribePredictor



```js
amazonaws_forecast.DescribePredictor({
  "PredictorArn": null
}, context)
```

#### Input
* input `object`
  * PredictorArn **required**

#### Output
* output [DescribePredictorResponse](#describepredictorresponse)

### DescribePredictorBacktestExportJob



```js
amazonaws_forecast.DescribePredictorBacktestExportJob({
  "PredictorBacktestExportJobArn": null
}, context)
```

#### Input
* input `object`
  * PredictorBacktestExportJobArn **required**

#### Output
* output [DescribePredictorBacktestExportJobResponse](#describepredictorbacktestexportjobresponse)

### GetAccuracyMetrics



```js
amazonaws_forecast.GetAccuracyMetrics({
  "PredictorArn": null
}, context)
```

#### Input
* input `object`
  * PredictorArn **required**

#### Output
* output [GetAccuracyMetricsResponse](#getaccuracymetricsresponse)

### ListDatasetGroups



```js
amazonaws_forecast.ListDatasetGroups({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListDatasetGroupsResponse](#listdatasetgroupsresponse)

### ListDatasetImportJobs



```js
amazonaws_forecast.ListDatasetImportJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

#### Output
* output [ListDatasetImportJobsResponse](#listdatasetimportjobsresponse)

### ListDatasets



```js
amazonaws_forecast.ListDatasets({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListDatasetsResponse](#listdatasetsresponse)

### ListForecastExportJobs



```js
amazonaws_forecast.ListForecastExportJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

#### Output
* output [ListForecastExportJobsResponse](#listforecastexportjobsresponse)

### ListForecasts



```js
amazonaws_forecast.ListForecasts({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

#### Output
* output [ListForecastsResponse](#listforecastsresponse)

### ListPredictorBacktestExportJobs



```js
amazonaws_forecast.ListPredictorBacktestExportJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

#### Output
* output [ListPredictorBacktestExportJobsResponse](#listpredictorbacktestexportjobsresponse)

### ListPredictors



```js
amazonaws_forecast.ListPredictors({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

#### Output
* output [ListPredictorsResponse](#listpredictorsresponse)

### ListTagsForResource



```js
amazonaws_forecast.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_forecast.TagResource({
  "ResourceArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_forecast.UntagResource({
  "ResourceArn": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateDatasetGroup



```js
amazonaws_forecast.UpdateDatasetGroup({
  "DatasetGroupArn": null,
  "DatasetArns": null
}, context)
```

#### Input
* input `object`
  * DatasetArns **required**
    * items [Arn](#arn)
  * DatasetGroupArn **required**

#### Output
* output [UpdateDatasetGroupResponse](#updatedatasetgroupresponse)



## Definitions

### Arn
* Arn `string`

### ArnList
* ArnList `array`
  * items [Arn](#arn)

### AttributeType
* AttributeType `string` (values: string, integer, float, timestamp, geolocation)

### Boolean
* Boolean `boolean`

### CategoricalParameterRange
* CategoricalParameterRange `object`: Specifies a categorical hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
  * Name **required**
  * Values **required**
    * items [Value](#value)

### CategoricalParameterRanges
* CategoricalParameterRanges `array`
  * items [CategoricalParameterRange](#categoricalparameterrange)

### ContinuousParameterRange
* ContinuousParameterRange `object`: Specifies a continuous hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
  * MaxValue **required**
  * MinValue **required**
  * Name **required**
  * ScalingType

### ContinuousParameterRanges
* ContinuousParameterRanges `array`
  * items [ContinuousParameterRange](#continuousparameterrange)

### CreateDatasetGroupRequest
* CreateDatasetGroupRequest `object`
  * DatasetArns
    * items [Arn](#arn)
  * DatasetGroupName **required**
  * Domain **required**
  * Tags
    * items [Tag](#tag)

### CreateDatasetGroupResponse
* CreateDatasetGroupResponse `object`
  * DatasetGroupArn

### CreateDatasetImportJobRequest
* CreateDatasetImportJobRequest `object`
  * DataSource **required**
    * S3Config **required**
      * KMSKeyArn
      * Path **required**
      * RoleArn **required**
  * DatasetArn **required**
  * DatasetImportJobName **required**
  * GeolocationFormat
  * Tags
    * items [Tag](#tag)
  * TimeZone
  * TimestampFormat
  * UseGeolocationForTimeZone

### CreateDatasetImportJobResponse
* CreateDatasetImportJobResponse `object`
  * DatasetImportJobArn

### CreateDatasetRequest
* CreateDatasetRequest `object`
  * DataFrequency
  * DatasetName **required**
  * DatasetType **required**
  * Domain **required**
  * EncryptionConfig
    * KMSKeyArn **required**
    * RoleArn **required**
  * Schema **required**
    * Attributes
      * items [SchemaAttribute](#schemaattribute)
  * Tags
    * items [Tag](#tag)

### CreateDatasetResponse
* CreateDatasetResponse `object`
  * DatasetArn

### CreateForecastExportJobRequest
* CreateForecastExportJobRequest `object`
  * Destination **required**
    * S3Config **required**
      * KMSKeyArn
      * Path **required**
      * RoleArn **required**
  * ForecastArn **required**
  * ForecastExportJobName **required**
  * Tags
    * items [Tag](#tag)

### CreateForecastExportJobResponse
* CreateForecastExportJobResponse `object`
  * ForecastExportJobArn

### CreateForecastRequest
* CreateForecastRequest `object`
  * ForecastName **required**
  * ForecastTypes
    * items [ForecastType](#forecasttype)
  * PredictorArn **required**
  * Tags
    * items [Tag](#tag)

### CreateForecastResponse
* CreateForecastResponse `object`
  * ForecastArn

### CreatePredictorBacktestExportJobRequest
* CreatePredictorBacktestExportJobRequest `object`
  * Destination **required** [DataDestination](#datadestination)
  * PredictorArn **required**
  * PredictorBacktestExportJobName **required**
  * Tags
    * items [Tag](#tag)

### CreatePredictorBacktestExportJobResponse
* CreatePredictorBacktestExportJobResponse `object`
  * PredictorBacktestExportJobArn

### CreatePredictorRequest
* CreatePredictorRequest `object`
  * AlgorithmArn
  * EncryptionConfig
    * KMSKeyArn **required**
    * RoleArn **required**
  * EvaluationParameters
    * BackTestWindowOffset
    * NumberOfBacktestWindows
  * FeaturizationConfig **required**
    * Featurizations
      * items [Featurization](#featurization)
    * ForecastDimensions
      * items [Name](#name)
    * ForecastFrequency **required**
  * ForecastHorizon **required**
  * ForecastTypes
    * items [ForecastType](#forecasttype)
  * HPOConfig
    * ParameterRanges
      * CategoricalParameterRanges
        * items [CategoricalParameterRange](#categoricalparameterrange)
      * ContinuousParameterRanges
        * items [ContinuousParameterRange](#continuousparameterrange)
      * IntegerParameterRanges
        * items [IntegerParameterRange](#integerparameterrange)
  * InputDataConfig **required**
    * DatasetGroupArn **required**
    * SupplementaryFeatures
      * items [SupplementaryFeature](#supplementaryfeature)
  * PerformAutoML
  * PerformHPO
  * PredictorName **required**
  * Tags
    * items [Tag](#tag)
  * TrainingParameters

### CreatePredictorResponse
* CreatePredictorResponse `object`
  * PredictorArn

### DataDestination
* DataDestination `object`: The destination for an export job. Provide an S3 path, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an AWS Key Management Service (KMS) key (optional). 
  * S3Config **required**
    * KMSKeyArn
    * Path **required**
    * RoleArn **required**

### DataSource
* DataSource `object`: The source of your training data, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the <a>CreateDatasetImportJob</a> request.
  * S3Config **required**
    * KMSKeyArn
    * Path **required**
    * RoleArn **required**

### DatasetGroupSummary
* DatasetGroupSummary `object`: Provides a summary of the dataset group properties used in the <a>ListDatasetGroups</a> operation. To get the complete set of properties, call the <a>DescribeDatasetGroup</a> operation, and provide the <code>DatasetGroupArn</code>.
  * CreationTime
  * DatasetGroupArn
  * DatasetGroupName
  * LastModificationTime

### DatasetGroups
* DatasetGroups `array`
  * items [DatasetGroupSummary](#datasetgroupsummary)

### DatasetImportJobSummary
* DatasetImportJobSummary `object`: Provides a summary of the dataset import job properties used in the <a>ListDatasetImportJobs</a> operation. To get the complete set of properties, call the <a>DescribeDatasetImportJob</a> operation, and provide the <code>DatasetImportJobArn</code>.
  * CreationTime
  * DataSource
    * S3Config **required**
      * KMSKeyArn
      * Path **required**
      * RoleArn **required**
  * DatasetImportJobArn
  * DatasetImportJobName
  * LastModificationTime
  * Message
  * Status

### DatasetImportJobs
* DatasetImportJobs `array`
  * items [DatasetImportJobSummary](#datasetimportjobsummary)

### DatasetSummary
* DatasetSummary `object`: Provides a summary of the dataset properties used in the <a>ListDatasets</a> operation. To get the complete set of properties, call the <a>DescribeDataset</a> operation, and provide the <code>DatasetArn</code>.
  * CreationTime
  * DatasetArn
  * DatasetName
  * DatasetType
  * Domain
  * LastModificationTime

### DatasetType
* DatasetType `string` (values: TARGET_TIME_SERIES, RELATED_TIME_SERIES, ITEM_METADATA)

### Datasets
* Datasets `array`
  * items [DatasetSummary](#datasetsummary)

### DeleteDatasetGroupRequest
* DeleteDatasetGroupRequest `object`
  * DatasetGroupArn **required**

### DeleteDatasetImportJobRequest
* DeleteDatasetImportJobRequest `object`
  * DatasetImportJobArn **required**

### DeleteDatasetRequest
* DeleteDatasetRequest `object`
  * DatasetArn **required**

### DeleteForecastExportJobRequest
* DeleteForecastExportJobRequest `object`
  * ForecastExportJobArn **required**

### DeleteForecastRequest
* DeleteForecastRequest `object`
  * ForecastArn **required**

### DeletePredictorBacktestExportJobRequest
* DeletePredictorBacktestExportJobRequest `object`
  * PredictorBacktestExportJobArn **required**

### DeletePredictorRequest
* DeletePredictorRequest `object`
  * PredictorArn **required**

### DescribeDatasetGroupRequest
* DescribeDatasetGroupRequest `object`
  * DatasetGroupArn **required**

### DescribeDatasetGroupResponse
* DescribeDatasetGroupResponse `object`
  * CreationTime
  * DatasetArns
    * items [Arn](#arn)
  * DatasetGroupArn
  * DatasetGroupName
  * Domain
  * LastModificationTime
  * Status

### DescribeDatasetImportJobRequest
* DescribeDatasetImportJobRequest `object`
  * DatasetImportJobArn **required**

### DescribeDatasetImportJobResponse
* DescribeDatasetImportJobResponse `object`
  * CreationTime
  * DataSize
  * DataSource
    * S3Config **required**
      * KMSKeyArn
      * Path **required**
      * RoleArn **required**
  * DatasetArn
  * DatasetImportJobArn
  * DatasetImportJobName
  * FieldStatistics
  * GeolocationFormat
  * LastModificationTime
  * Message
  * Status
  * TimeZone
  * TimestampFormat
  * UseGeolocationForTimeZone

### DescribeDatasetRequest
* DescribeDatasetRequest `object`
  * DatasetArn **required**

### DescribeDatasetResponse
* DescribeDatasetResponse `object`
  * CreationTime
  * DataFrequency
  * DatasetArn
  * DatasetName
  * DatasetType
  * Domain
  * EncryptionConfig
    * KMSKeyArn **required**
    * RoleArn **required**
  * LastModificationTime
  * Schema
    * Attributes
      * items [SchemaAttribute](#schemaattribute)
  * Status

### DescribeForecastExportJobRequest
* DescribeForecastExportJobRequest `object`
  * ForecastExportJobArn **required**

### DescribeForecastExportJobResponse
* DescribeForecastExportJobResponse `object`
  * CreationTime
  * Destination
    * S3Config **required**
      * KMSKeyArn
      * Path **required**
      * RoleArn **required**
  * ForecastArn
  * ForecastExportJobArn
  * ForecastExportJobName
  * LastModificationTime
  * Message
  * Status

### DescribeForecastRequest
* DescribeForecastRequest `object`
  * ForecastArn **required**

### DescribeForecastResponse
* DescribeForecastResponse `object`
  * CreationTime
  * DatasetGroupArn
  * ForecastArn
  * ForecastName
  * ForecastTypes
    * items [ForecastType](#forecasttype)
  * LastModificationTime
  * Message
  * PredictorArn
  * Status

### DescribePredictorBacktestExportJobRequest
* DescribePredictorBacktestExportJobRequest `object`
  * PredictorBacktestExportJobArn **required**

### DescribePredictorBacktestExportJobResponse
* DescribePredictorBacktestExportJobResponse `object`
  * CreationTime
  * Destination [DataDestination](#datadestination)
  * LastModificationTime
  * Message
  * PredictorArn
  * PredictorBacktestExportJobArn
  * PredictorBacktestExportJobName
  * Status

### DescribePredictorRequest
* DescribePredictorRequest `object`
  * PredictorArn **required**

### DescribePredictorResponse
* DescribePredictorResponse `object`
  * AlgorithmArn
  * AutoMLAlgorithmArns
    * items [Arn](#arn)
  * CreationTime
  * DatasetImportJobArns
    * items [Arn](#arn)
  * EncryptionConfig
    * KMSKeyArn **required**
    * RoleArn **required**
  * EvaluationParameters
    * BackTestWindowOffset
    * NumberOfBacktestWindows
  * FeaturizationConfig
    * Featurizations
      * items [Featurization](#featurization)
    * ForecastDimensions
      * items [Name](#name)
    * ForecastFrequency **required**
  * ForecastHorizon
  * ForecastTypes
    * items [ForecastType](#forecasttype)
  * HPOConfig
    * ParameterRanges
      * CategoricalParameterRanges
        * items [CategoricalParameterRange](#categoricalparameterrange)
      * ContinuousParameterRanges
        * items [ContinuousParameterRange](#continuousparameterrange)
      * IntegerParameterRanges
        * items [IntegerParameterRange](#integerparameterrange)
  * InputDataConfig
    * DatasetGroupArn **required**
    * SupplementaryFeatures
      * items [SupplementaryFeature](#supplementaryfeature)
  * LastModificationTime
  * Message
  * PerformAutoML
  * PerformHPO
  * PredictorArn
  * PredictorExecutionDetails
    * PredictorExecutions
      * items [PredictorExecution](#predictorexecution)
  * PredictorName
  * Status
  * TrainingParameters

### Domain
* Domain `string` (values: RETAIL, CUSTOM, INVENTORY_PLANNING, EC2_CAPACITY, WORK_FORCE, WEB_TRAFFIC, METRICS)

### Double
* Double `number`

### EncryptionConfig
* EncryptionConfig `object`: An AWS Key Management Service (KMS) key and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests.
  * KMSKeyArn **required**
  * RoleArn **required**

### ErrorMessage
* ErrorMessage `string`

### ErrorMetric
* ErrorMetric `object`:  Provides detailed error metrics to evaluate the performance of a predictor. This object is part of the <a>Metrics</a> object. 
  * ForecastType
  * RMSE
  * WAPE

### ErrorMetrics
* ErrorMetrics `array`
  * items [ErrorMetric](#errormetric)

### EvaluationParameters
* EvaluationParameters `object`: Parameters that define how to split a dataset into training data and testing data, and the number of iterations to perform. These parameters are specified in the predefined algorithms but you can override them in the <a>CreatePredictor</a> request.
  * BackTestWindowOffset
  * NumberOfBacktestWindows

### EvaluationResult
* EvaluationResult `object`: The results of evaluating an algorithm. Returned as part of the <a>GetAccuracyMetrics</a> response.
  * AlgorithmArn
  * TestWindows
    * items [WindowSummary](#windowsummary)

### EvaluationType
* EvaluationType `string` (values: SUMMARY, COMPUTED)

### Featurization
* Featurization `object`: <p>Provides featurization (transformation) information for a dataset field. This object is part of the <a>FeaturizationConfig</a> object.</p> <p>For example:</p> <p> <code>{</code> </p> <p> <code>"AttributeName": "demand",</code> </p> <p> <code>FeaturizationPipeline [ {</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "avg", "backfill": "nan"}</code> </p> <p> <code>} ]</code> </p> <p> <code>}</code> </p>
  * AttributeName **required**
  * FeaturizationPipeline
    * items [FeaturizationMethod](#featurizationmethod)

### FeaturizationConfig
* FeaturizationConfig `object`: <p>In a <a>CreatePredictor</a> operation, the specified algorithm trains a model using the specified dataset group. You can optionally tell the operation to modify data fields prior to training a model. These modifications are referred to as <i>featurization</i>.</p> <p>You define featurization using the <code>FeaturizationConfig</code> object. You specify an array of transformations, one for each field that you want to featurize. You then include the <code>FeaturizationConfig</code> object in your <code>CreatePredictor</code> request. Amazon Forecast applies the featurization to the <code>TARGET_TIME_SERIES</code> and <code>RELATED_TIME_SERIES</code> datasets before model training.</p> <p>You can create multiple featurization configurations. For example, you might call the <code>CreatePredictor</code> operation twice by specifying different featurization configurations.</p>
  * Featurizations
    * items [Featurization](#featurization)
  * ForecastDimensions
    * items [Name](#name)
  * ForecastFrequency **required**

### FeaturizationMethod
* FeaturizationMethod `object`: <p>Provides information about the method that featurizes (transforms) a dataset field. The method is part of the <code>FeaturizationPipeline</code> of the <a>Featurization</a> object. </p> <p>The following is an example of how you specify a <code>FeaturizationMethod</code> object.</p> <p> <code>{</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "sum", "middlefill": "zero", "backfill": "zero"}</code> </p> <p> <code>}</code> </p>
  * FeaturizationMethodName **required**
  * FeaturizationMethodParameters

### FeaturizationMethodName
* FeaturizationMethodName `string` (values: filling)

### FeaturizationMethodParameters
* FeaturizationMethodParameters `object`

### FeaturizationPipeline
* FeaturizationPipeline `array`
  * items [FeaturizationMethod](#featurizationmethod)

### Featurizations
* Featurizations `array`
  * items [Featurization](#featurization)

### FieldStatistics
* FieldStatistics `object`

### Filter
* Filter `object`: Describes a filter for choosing a subset of objects. Each filter consists of a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the objects that match the statement, respectively. The match statement consists of a key and a value.
  * Condition **required**
  * Key **required**
  * Value **required**

### FilterConditionString
* FilterConditionString `string` (values: IS, IS_NOT)

### Filters
* Filters `array`
  * items [Filter](#filter)

### ForecastDimensions
* ForecastDimensions `array`
  * items [Name](#name)

### ForecastExportJobSummary
* ForecastExportJobSummary `object`: Provides a summary of the forecast export job properties used in the <a>ListForecastExportJobs</a> operation. To get the complete set of properties, call the <a>DescribeForecastExportJob</a> operation, and provide the listed <code>ForecastExportJobArn</code>.
  * CreationTime
  * Destination
    * S3Config **required**
      * KMSKeyArn
      * Path **required**
      * RoleArn **required**
  * ForecastExportJobArn
  * ForecastExportJobName
  * LastModificationTime
  * Message
  * Status

### ForecastExportJobs
* ForecastExportJobs `array`
  * items [ForecastExportJobSummary](#forecastexportjobsummary)

### ForecastSummary
* ForecastSummary `object`: Provides a summary of the forecast properties used in the <a>ListForecasts</a> operation. To get the complete set of properties, call the <a>DescribeForecast</a> operation, and provide the <code>ForecastArn</code> that is listed in the summary.
  * CreationTime
  * DatasetGroupArn
  * ForecastArn
  * ForecastName
  * LastModificationTime
  * Message
  * PredictorArn
  * Status

### ForecastType
* ForecastType `string`

### ForecastTypes
* ForecastTypes `array`
  * items [ForecastType](#forecasttype)

### Forecasts
* Forecasts `array`
  * items [ForecastSummary](#forecastsummary)

### Frequency
* Frequency `string`

### GeolocationFormat
* GeolocationFormat `string`

### GetAccuracyMetricsRequest
* GetAccuracyMetricsRequest `object`
  * PredictorArn **required**

### GetAccuracyMetricsResponse
* GetAccuracyMetricsResponse `object`
  * PredictorEvaluationResults
    * items [EvaluationResult](#evaluationresult)

### HyperParameterTuningJobConfig
* HyperParameterTuningJobConfig `object`: <p>Configuration information for a hyperparameter tuning job. You specify this object in the <a>CreatePredictor</a> request.</p> <p>A <i>hyperparameter</i> is a parameter that governs the model training process. You set hyperparameters before training starts, unlike model parameters, which are determined during training. The values of the hyperparameters effect which values are chosen for the model parameters.</p> <p>In a <i>hyperparameter tuning job</i>, Amazon Forecast chooses the set of hyperparameter values that optimize a specified metric. Forecast accomplishes this by running many training jobs over a range of hyperparameter values. The optimum set of values depends on the algorithm, the training data, and the specified metric objective.</p>
  * ParameterRanges
    * CategoricalParameterRanges
      * items [CategoricalParameterRange](#categoricalparameterrange)
    * ContinuousParameterRanges
      * items [ContinuousParameterRange](#continuousparameterrange)
    * IntegerParameterRanges
      * items [IntegerParameterRange](#integerparameterrange)

### InputDataConfig
* InputDataConfig `object`: The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the <a>CreatePredictor</a> request.
  * DatasetGroupArn **required**
  * SupplementaryFeatures
    * items [SupplementaryFeature](#supplementaryfeature)

### Integer
* Integer `integer`

### IntegerParameterRange
* IntegerParameterRange `object`: Specifies an integer hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
  * MaxValue **required**
  * MinValue **required**
  * Name **required**
  * ScalingType

### IntegerParameterRanges
* IntegerParameterRanges `array`
  * items [IntegerParameterRange](#integerparameterrange)

### InvalidInputException


### InvalidNextTokenException


### KMSKeyArn
* KMSKeyArn `string`

### LimitExceededException


### ListDatasetGroupsRequest
* ListDatasetGroupsRequest `object`
  * MaxResults
  * NextToken

### ListDatasetGroupsResponse
* ListDatasetGroupsResponse `object`
  * DatasetGroups
    * items [DatasetGroupSummary](#datasetgroupsummary)
  * NextToken

### ListDatasetImportJobsRequest
* ListDatasetImportJobsRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

### ListDatasetImportJobsResponse
* ListDatasetImportJobsResponse `object`
  * DatasetImportJobs
    * items [DatasetImportJobSummary](#datasetimportjobsummary)
  * NextToken

### ListDatasetsRequest
* ListDatasetsRequest `object`
  * MaxResults
  * NextToken

### ListDatasetsResponse
* ListDatasetsResponse `object`
  * Datasets
    * items [DatasetSummary](#datasetsummary)
  * NextToken

### ListForecastExportJobsRequest
* ListForecastExportJobsRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

### ListForecastExportJobsResponse
* ListForecastExportJobsResponse `object`
  * ForecastExportJobs
    * items [ForecastExportJobSummary](#forecastexportjobsummary)
  * NextToken

### ListForecastsRequest
* ListForecastsRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

### ListForecastsResponse
* ListForecastsResponse `object`
  * Forecasts
    * items [ForecastSummary](#forecastsummary)
  * NextToken

### ListPredictorBacktestExportJobsRequest
* ListPredictorBacktestExportJobsRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

### ListPredictorBacktestExportJobsResponse
* ListPredictorBacktestExportJobsResponse `object`
  * NextToken
  * PredictorBacktestExportJobs
    * items [PredictorBacktestExportJobSummary](#predictorbacktestexportjobsummary)

### ListPredictorsRequest
* ListPredictorsRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

### ListPredictorsResponse
* ListPredictorsResponse `object`
  * NextToken
  * Predictors
    * items [PredictorSummary](#predictorsummary)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### MaxResults
* MaxResults `integer`

### Message
* Message `string`

### Metrics
* Metrics `object`: Provides metrics that are used to evaluate the performance of a predictor. This object is part of the <a>WindowSummary</a> object.
  * ErrorMetrics
    * items [ErrorMetric](#errormetric)
  * RMSE
  * WeightedQuantileLosses
    * items [WeightedQuantileLoss](#weightedquantileloss)

### Name
* Name `string`

### NextToken
* NextToken `string`

### ParameterKey
* ParameterKey `string`

### ParameterRanges
* ParameterRanges `object`: Specifies the categorical, continuous, and integer hyperparameters, and their ranges of tunable values. The range of tunable values determines which values that a hyperparameter tuning job can choose for the specified hyperparameter. This object is part of the <a>HyperParameterTuningJobConfig</a> object.
  * CategoricalParameterRanges
    * items [CategoricalParameterRange](#categoricalparameterrange)
  * ContinuousParameterRanges
    * items [ContinuousParameterRange](#continuousparameterrange)
  * IntegerParameterRanges
    * items [IntegerParameterRange](#integerparameterrange)

### ParameterValue
* ParameterValue `string`

### PredictorBacktestExportJobSummary
* PredictorBacktestExportJobSummary `object`: Provides a summary of the predictor backtest export job properties used in the <a>ListPredictorBacktestExportJobs</a> operation. To get a complete set of properties, call the <a>DescribePredictorBacktestExportJob</a> operation, and provide the listed <code>PredictorBacktestExportJobArn</code>.
  * CreationTime
  * Destination [DataDestination](#datadestination)
  * LastModificationTime
  * Message
  * PredictorBacktestExportJobArn
  * PredictorBacktestExportJobName
  * Status

### PredictorBacktestExportJobs
* PredictorBacktestExportJobs `array`
  * items [PredictorBacktestExportJobSummary](#predictorbacktestexportjobsummary)

### PredictorEvaluationResults
* PredictorEvaluationResults `array`
  * items [EvaluationResult](#evaluationresult)

### PredictorExecution
* PredictorExecution `object`: The algorithm used to perform a backtest and the status of those tests.
  * AlgorithmArn
  * TestWindows
    * items [TestWindowSummary](#testwindowsummary)

### PredictorExecutionDetails
* PredictorExecutionDetails `object`: Contains details on the backtests performed to evaluate the accuracy of the predictor. The tests are returned in descending order of accuracy, with the most accurate backtest appearing first. You specify the number of backtests to perform when you call the operation.
  * PredictorExecutions
    * items [PredictorExecution](#predictorexecution)

### PredictorExecutions
* PredictorExecutions `array`
  * items [PredictorExecution](#predictorexecution)

### PredictorSummary
* PredictorSummary `object`: Provides a summary of the predictor properties that are used in the <a>ListPredictors</a> operation. To get the complete set of properties, call the <a>DescribePredictor</a> operation, and provide the listed <code>PredictorArn</code>.
  * CreationTime
  * DatasetGroupArn
  * LastModificationTime
  * Message
  * PredictorArn
  * PredictorName
  * Status

### Predictors
* Predictors `array`
  * items [PredictorSummary](#predictorsummary)

### ResourceAlreadyExistsException


### ResourceInUseException


### ResourceNotFoundException


### S3Config
* S3Config `object`: The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an AWS Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object.
  * KMSKeyArn
  * Path **required**
  * RoleArn **required**

### S3Path
* S3Path `string`

### ScalingType
* ScalingType `string` (values: Auto, Linear, Logarithmic, ReverseLogarithmic)

### Schema
* Schema `object`: Defines the fields of a dataset. You specify this object in the <a>CreateDataset</a> request.
  * Attributes
    * items [SchemaAttribute](#schemaattribute)

### SchemaAttribute
* SchemaAttribute `object`: An attribute of a schema, which defines a dataset field. A schema attribute is required for every field in a dataset. The <a>Schema</a> object contains an array of <code>SchemaAttribute</code> objects.
  * AttributeName
  * AttributeType

### SchemaAttributes
* SchemaAttributes `array`
  * items [SchemaAttribute](#schemaattribute)

### Statistics
* Statistics `object`: Provides statistics for each data field imported into to an Amazon Forecast dataset with the <a>CreateDatasetImportJob</a> operation.
  * Avg
  * Count
  * CountDistinct
  * CountNan
  * CountNull
  * Max
  * Min
  * Stddev

### Status
* Status `string`

### String
* String `string`

### SupplementaryFeature
* SupplementaryFeature `object`: <p>Describes a supplementary feature of a dataset group. This object is part of the <a>InputDataConfig</a> object. Forecast supports the Weather Index and Holidays built-in featurizations.</p> <p> <b>Weather Index</b> </p> <p>The Amazon Forecast Weather Index is a built-in featurization that incorporates historical and projected weather information into your model. The Weather Index supplements your datasets with over two years of historical weather data and up to 14 days of projected weather data. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/weather.html">Amazon Forecast Weather Index</a>.</p> <p> <b>Holidays</b> </p> <p>Holidays is a built-in featurization that incorporates a feature-engineered dataset of national holiday information into your model. It provides native support for the holiday calendars of 66 countries. To view the holiday calendars, refer to the <a href="http://jollyday.sourceforge.net/data.html">Jollyday</a> library. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/holidays.html">Holidays Featurization</a>.</p>
  * Name **required**
  * Value **required**

### SupplementaryFeatures
* SupplementaryFeatures `array`
  * items [SupplementaryFeature](#supplementaryfeature)

### Tag
* Tag `object`: <p>The optional metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p> </li> </ul>
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### TestWindowDetails
* TestWindowDetails `array`
  * items [TestWindowSummary](#testwindowsummary)

### TestWindowSummary
* TestWindowSummary `object`: The status, start time, and end time of a backtest, as well as a failure reason if applicable.
  * Message
  * Status
  * TestWindowEnd
  * TestWindowStart

### TestWindows
* TestWindows `array`
  * items [WindowSummary](#windowsummary)

### TimeZone
* TimeZone `string`

### Timestamp
* Timestamp `string`

### TimestampFormat
* TimestampFormat `string`

### TrainingParameters
* TrainingParameters `object`

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateDatasetGroupRequest
* UpdateDatasetGroupRequest `object`
  * DatasetArns **required**
    * items [Arn](#arn)
  * DatasetGroupArn **required**

### UpdateDatasetGroupResponse
* UpdateDatasetGroupResponse `object`

### UseGeolocationForTimeZone
* UseGeolocationForTimeZone `boolean`

### Value
* Value `string`

### Values
* Values `array`
  * items [Value](#value)

### WeightedQuantileLoss
* WeightedQuantileLoss `object`: The weighted loss value for a quantile. This object is part of the <a>Metrics</a> object.
  * LossValue
  * Quantile

### WeightedQuantileLosses
* WeightedQuantileLosses `array`
  * items [WeightedQuantileLoss](#weightedquantileloss)

### WindowSummary
* WindowSummary `object`: <p>The metrics for a time range within the evaluation portion of a dataset. This object is part of the <a>EvaluationResult</a> object.</p> <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are determined by the <code>BackTestWindowOffset</code> parameter of the <a>EvaluationParameters</a> object.</p>
  * EvaluationType
  * ItemCount
  * Metrics
    * ErrorMetrics
      * items [ErrorMetric](#errormetric)
    * RMSE
    * WeightedQuantileLosses
      * items [WeightedQuantileLoss](#weightedquantileloss)
  * TestWindowEnd
  * TestWindowStart


