# @datafire/amazonaws_machinelearning

Client library for Amazon Machine Learning

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_machinelearning
```
```js
let amazonaws_machinelearning = require('@datafire/amazonaws_machinelearning').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_machinelearning.AddTags({
  "Tags": [],
  "ResourceId": "",
  "ResourceType": ""
}).then(data => {
  console.log(data);
});
```

## Description

Definition of the public APIs exposed by Amazon Machine Learning

## Actions

### AddTags



```js
amazonaws_machinelearning.AddTags({
  "Tags": [],
  "ResourceId": "",
  "ResourceType": ""
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [EntityId](#entityid)
  * ResourceType **required** [TaggableResourceType](#taggableresourcetype)
  * Tags **required** [TagList](#taglist)

#### Output
* output [AddTagsOutput](#addtagsoutput)

### CreateBatchPrediction



```js
amazonaws_machinelearning.CreateBatchPrediction({
  "BatchPredictionId": "",
  "MLModelId": "",
  "BatchPredictionDataSourceId": "",
  "OutputUri": ""
}, context)
```

#### Input
* input `object`
  * BatchPredictionDataSourceId **required** [EntityId](#entityid)
  * BatchPredictionId **required** [EntityId](#entityid)
  * BatchPredictionName [EntityName](#entityname)
  * MLModelId **required** [EntityId](#entityid)
  * OutputUri **required** [S3Url](#s3url)

#### Output
* output [CreateBatchPredictionOutput](#createbatchpredictionoutput)

### CreateDataSourceFromRDS



```js
amazonaws_machinelearning.CreateDataSourceFromRDS({
  "DataSourceId": "",
  "RDSData": {
    "DatabaseInformation": {
      "InstanceIdentifier": "",
      "DatabaseName": ""
    },
    "SelectSqlQuery": "",
    "DatabaseCredentials": {
      "Username": "",
      "Password": ""
    },
    "S3StagingLocation": "",
    "ResourceRole": "",
    "ServiceRole": "",
    "SubnetId": "",
    "SecurityGroupIds": []
  },
  "RoleARN": ""
}, context)
```

#### Input
* input `object`
  * ComputeStatistics [ComputeStatistics](#computestatistics)
  * DataSourceId **required** [EntityId](#entityid)
  * DataSourceName [EntityName](#entityname)
  * RDSData **required** [RDSDataSpec](#rdsdataspec)
  * RoleARN **required** [RoleARN](#rolearn)

#### Output
* output [CreateDataSourceFromRDSOutput](#createdatasourcefromrdsoutput)

### CreateDataSourceFromRedshift



```js
amazonaws_machinelearning.CreateDataSourceFromRedshift({
  "DataSourceId": "",
  "DataSpec": {
    "DatabaseInformation": {
      "DatabaseName": "",
      "ClusterIdentifier": ""
    },
    "SelectSqlQuery": "",
    "DatabaseCredentials": {
      "Username": "",
      "Password": ""
    },
    "S3StagingLocation": ""
  },
  "RoleARN": ""
}, context)
```

#### Input
* input `object`
  * ComputeStatistics [ComputeStatistics](#computestatistics)
  * DataSourceId **required** [EntityId](#entityid)
  * DataSourceName [EntityName](#entityname)
  * DataSpec **required** [RedshiftDataSpec](#redshiftdataspec)
  * RoleARN **required** [RoleARN](#rolearn)

#### Output
* output [CreateDataSourceFromRedshiftOutput](#createdatasourcefromredshiftoutput)

### CreateDataSourceFromS3



```js
amazonaws_machinelearning.CreateDataSourceFromS3({
  "DataSourceId": "",
  "DataSpec": {
    "DataLocationS3": ""
  }
}, context)
```

#### Input
* input `object`
  * ComputeStatistics [ComputeStatistics](#computestatistics)
  * DataSourceId **required** [EntityId](#entityid)
  * DataSourceName [EntityName](#entityname)
  * DataSpec **required** [S3DataSpec](#s3dataspec)

#### Output
* output [CreateDataSourceFromS3Output](#createdatasourcefroms3output)

### CreateEvaluation



```js
amazonaws_machinelearning.CreateEvaluation({
  "EvaluationId": "",
  "MLModelId": "",
  "EvaluationDataSourceId": ""
}, context)
```

#### Input
* input `object`
  * EvaluationDataSourceId **required** [EntityId](#entityid)
  * EvaluationId **required** [EntityId](#entityid)
  * EvaluationName [EntityName](#entityname)
  * MLModelId **required** [EntityId](#entityid)

#### Output
* output [CreateEvaluationOutput](#createevaluationoutput)

### CreateMLModel



```js
amazonaws_machinelearning.CreateMLModel({
  "MLModelId": "",
  "MLModelType": "",
  "TrainingDataSourceId": ""
}, context)
```

#### Input
* input `object`
  * MLModelId **required** [EntityId](#entityid)
  * MLModelName [EntityName](#entityname)
  * MLModelType **required** [MLModelType](#mlmodeltype)
  * Parameters [TrainingParameters](#trainingparameters)
  * Recipe [Recipe](#recipe)
  * RecipeUri [S3Url](#s3url)
  * TrainingDataSourceId **required** [EntityId](#entityid)

#### Output
* output [CreateMLModelOutput](#createmlmodeloutput)

### CreateRealtimeEndpoint



```js
amazonaws_machinelearning.CreateRealtimeEndpoint({
  "MLModelId": ""
}, context)
```

#### Input
* input `object`
  * MLModelId **required** [EntityId](#entityid)

#### Output
* output [CreateRealtimeEndpointOutput](#createrealtimeendpointoutput)

### DeleteBatchPrediction



```js
amazonaws_machinelearning.DeleteBatchPrediction({
  "BatchPredictionId": ""
}, context)
```

#### Input
* input `object`
  * BatchPredictionId **required** [EntityId](#entityid)

#### Output
* output [DeleteBatchPredictionOutput](#deletebatchpredictionoutput)

### DeleteDataSource



```js
amazonaws_machinelearning.DeleteDataSource({
  "DataSourceId": ""
}, context)
```

#### Input
* input `object`
  * DataSourceId **required** [EntityId](#entityid)

#### Output
* output [DeleteDataSourceOutput](#deletedatasourceoutput)

### DeleteEvaluation



```js
amazonaws_machinelearning.DeleteEvaluation({
  "EvaluationId": ""
}, context)
```

#### Input
* input `object`
  * EvaluationId **required** [EntityId](#entityid)

#### Output
* output [DeleteEvaluationOutput](#deleteevaluationoutput)

### DeleteMLModel



```js
amazonaws_machinelearning.DeleteMLModel({
  "MLModelId": ""
}, context)
```

#### Input
* input `object`
  * MLModelId **required** [EntityId](#entityid)

#### Output
* output [DeleteMLModelOutput](#deletemlmodeloutput)

### DeleteRealtimeEndpoint



```js
amazonaws_machinelearning.DeleteRealtimeEndpoint({
  "MLModelId": ""
}, context)
```

#### Input
* input `object`
  * MLModelId **required** [EntityId](#entityid)

#### Output
* output [DeleteRealtimeEndpointOutput](#deleterealtimeendpointoutput)

### DeleteTags



```js
amazonaws_machinelearning.DeleteTags({
  "TagKeys": [],
  "ResourceId": "",
  "ResourceType": ""
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [EntityId](#entityid)
  * ResourceType **required** [TaggableResourceType](#taggableresourcetype)
  * TagKeys **required** [TagKeyList](#tagkeylist)

#### Output
* output [DeleteTagsOutput](#deletetagsoutput)

### DescribeBatchPredictions



```js
amazonaws_machinelearning.DescribeBatchPredictions({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * EQ [ComparatorValue](#comparatorvalue)
  * FilterVariable [BatchPredictionFilterVariable](#batchpredictionfiltervariable)
  * GE [ComparatorValue](#comparatorvalue)
  * GT [ComparatorValue](#comparatorvalue)
  * LE [ComparatorValue](#comparatorvalue)
  * LT [ComparatorValue](#comparatorvalue)
  * Limit [PageLimit](#pagelimit)
  * NE [ComparatorValue](#comparatorvalue)
  * NextToken [StringType](#stringtype)
  * Prefix [ComparatorValue](#comparatorvalue)
  * SortOrder [SortOrder](#sortorder)

#### Output
* output [DescribeBatchPredictionsOutput](#describebatchpredictionsoutput)

### DescribeDataSources



```js
amazonaws_machinelearning.DescribeDataSources({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * EQ [ComparatorValue](#comparatorvalue)
  * FilterVariable [DataSourceFilterVariable](#datasourcefiltervariable)
  * GE [ComparatorValue](#comparatorvalue)
  * GT [ComparatorValue](#comparatorvalue)
  * LE [ComparatorValue](#comparatorvalue)
  * LT [ComparatorValue](#comparatorvalue)
  * Limit [PageLimit](#pagelimit)
  * NE [ComparatorValue](#comparatorvalue)
  * NextToken [StringType](#stringtype)
  * Prefix [ComparatorValue](#comparatorvalue)
  * SortOrder [SortOrder](#sortorder)

#### Output
* output [DescribeDataSourcesOutput](#describedatasourcesoutput)

### DescribeEvaluations



```js
amazonaws_machinelearning.DescribeEvaluations({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * EQ [ComparatorValue](#comparatorvalue)
  * FilterVariable [EvaluationFilterVariable](#evaluationfiltervariable)
  * GE [ComparatorValue](#comparatorvalue)
  * GT [ComparatorValue](#comparatorvalue)
  * LE [ComparatorValue](#comparatorvalue)
  * LT [ComparatorValue](#comparatorvalue)
  * Limit [PageLimit](#pagelimit)
  * NE [ComparatorValue](#comparatorvalue)
  * NextToken [StringType](#stringtype)
  * Prefix [ComparatorValue](#comparatorvalue)
  * SortOrder [SortOrder](#sortorder)

#### Output
* output [DescribeEvaluationsOutput](#describeevaluationsoutput)

### DescribeMLModels



```js
amazonaws_machinelearning.DescribeMLModels({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * EQ [ComparatorValue](#comparatorvalue)
  * FilterVariable [MLModelFilterVariable](#mlmodelfiltervariable)
  * GE [ComparatorValue](#comparatorvalue)
  * GT [ComparatorValue](#comparatorvalue)
  * LE [ComparatorValue](#comparatorvalue)
  * LT [ComparatorValue](#comparatorvalue)
  * Limit [PageLimit](#pagelimit)
  * NE [ComparatorValue](#comparatorvalue)
  * NextToken [StringType](#stringtype)
  * Prefix [ComparatorValue](#comparatorvalue)
  * SortOrder [SortOrder](#sortorder)

#### Output
* output [DescribeMLModelsOutput](#describemlmodelsoutput)

### DescribeTags



```js
amazonaws_machinelearning.DescribeTags({
  "ResourceId": "",
  "ResourceType": ""
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [EntityId](#entityid)
  * ResourceType **required** [TaggableResourceType](#taggableresourcetype)

#### Output
* output [DescribeTagsOutput](#describetagsoutput)

### GetBatchPrediction



```js
amazonaws_machinelearning.GetBatchPrediction({
  "BatchPredictionId": ""
}, context)
```

#### Input
* input `object`
  * BatchPredictionId **required** [EntityId](#entityid)

#### Output
* output [GetBatchPredictionOutput](#getbatchpredictionoutput)

### GetDataSource



```js
amazonaws_machinelearning.GetDataSource({
  "DataSourceId": ""
}, context)
```

#### Input
* input `object`
  * DataSourceId **required** [EntityId](#entityid)
  * Verbose [Verbose](#verbose)

#### Output
* output [GetDataSourceOutput](#getdatasourceoutput)

### GetEvaluation



```js
amazonaws_machinelearning.GetEvaluation({
  "EvaluationId": ""
}, context)
```

#### Input
* input `object`
  * EvaluationId **required** [EntityId](#entityid)

#### Output
* output [GetEvaluationOutput](#getevaluationoutput)

### GetMLModel



```js
amazonaws_machinelearning.GetMLModel({
  "MLModelId": ""
}, context)
```

#### Input
* input `object`
  * MLModelId **required** [EntityId](#entityid)
  * Verbose [Verbose](#verbose)

#### Output
* output [GetMLModelOutput](#getmlmodeloutput)

### Predict



```js
amazonaws_machinelearning.Predict({
  "MLModelId": "",
  "Record": [],
  "PredictEndpoint": ""
}, context)
```

#### Input
* input `object`
  * MLModelId **required** [EntityId](#entityid)
  * PredictEndpoint **required** [VipURL](#vipurl)
  * Record **required** [Record](#record)

#### Output
* output [PredictOutput](#predictoutput)

### UpdateBatchPrediction



```js
amazonaws_machinelearning.UpdateBatchPrediction({
  "BatchPredictionId": "",
  "BatchPredictionName": ""
}, context)
```

#### Input
* input `object`
  * BatchPredictionId **required** [EntityId](#entityid)
  * BatchPredictionName **required** [EntityName](#entityname)

#### Output
* output [UpdateBatchPredictionOutput](#updatebatchpredictionoutput)

### UpdateDataSource



```js
amazonaws_machinelearning.UpdateDataSource({
  "DataSourceId": "",
  "DataSourceName": ""
}, context)
```

#### Input
* input `object`
  * DataSourceId **required** [EntityId](#entityid)
  * DataSourceName **required** [EntityName](#entityname)

#### Output
* output [UpdateDataSourceOutput](#updatedatasourceoutput)

### UpdateEvaluation



```js
amazonaws_machinelearning.UpdateEvaluation({
  "EvaluationId": "",
  "EvaluationName": ""
}, context)
```

#### Input
* input `object`
  * EvaluationId **required** [EntityId](#entityid)
  * EvaluationName **required** [EntityName](#entityname)

#### Output
* output [UpdateEvaluationOutput](#updateevaluationoutput)

### UpdateMLModel



```js
amazonaws_machinelearning.UpdateMLModel({
  "MLModelId": ""
}, context)
```

#### Input
* input `object`
  * MLModelId **required** [EntityId](#entityid)
  * MLModelName [EntityName](#entityname)
  * ScoreThreshold [ScoreThreshold](#scorethreshold)

#### Output
* output [UpdateMLModelOutput](#updatemlmodeloutput)



## Definitions

### AddTagsInput
* AddTagsInput `object`
  * ResourceId **required** [EntityId](#entityid)
  * ResourceType **required** [TaggableResourceType](#taggableresourcetype)
  * Tags **required** [TagList](#taglist)

### AddTagsOutput
* AddTagsOutput `object`: Amazon ML returns the following elements. 
  * ResourceId [EntityId](#entityid)
  * ResourceType [TaggableResourceType](#taggableresourcetype)

### Algorithm
* Algorithm `string` (values: sgd): <p>The function used to train an <code>MLModel</code>. Training choices supported by Amazon ML include the following:</p> <ul> <li> <code>SGD</code> - Stochastic Gradient Descent.</li> <li> <code>RandomForest</code> - Random forest of decision trees.</li> </ul>

### AwsUserArn
* AwsUserArn `string`: An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user.

### BatchPrediction
* BatchPrediction `object`: <p> Represents the output of a <code>GetBatchPrediction</code> operation.</p> <p> The content consists of the detailed metadata, the status, and the data file information of a <code>Batch Prediction</code>.</p>
  * BatchPredictionDataSourceId [EntityId](#entityid)
  * BatchPredictionId [EntityId](#entityid)
  * ComputeTime [LongType](#longtype)
  * CreatedAt [EpochTime](#epochtime)
  * CreatedByIamUser [AwsUserArn](#awsuserarn)
  * FinishedAt [EpochTime](#epochtime)
  * InputDataLocationS3 [S3Url](#s3url)
  * InvalidRecordCount [LongType](#longtype)
  * LastUpdatedAt [EpochTime](#epochtime)
  * MLModelId [EntityId](#entityid)
  * Message [Message](#message)
  * Name [EntityName](#entityname)
  * OutputUri [S3Url](#s3url)
  * StartedAt [EpochTime](#epochtime)
  * Status [EntityStatus](#entitystatus)
  * TotalRecordCount [LongType](#longtype)

### BatchPredictionFilterVariable
* BatchPredictionFilterVariable `string` (values: CreatedAt, LastUpdatedAt, Status, Name, IAMUser, MLModelId, DataSourceId, DataURI): <p>A list of the variables to use in searching or filtering <code>BatchPrediction</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>BatchPrediction</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>BatchPrediction</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>BatchPrediction</code><b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>BatchPrediction</code> creation.</li> <li> <code>MLModelId</code> - Sets the search criteria to the <code>MLModel</code> used in the <code>BatchPrediction</code>.</li> <li> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in the <code>BatchPrediction</code>.</li> <li> <code>DataURI</code> - Sets the search criteria to the data file(s) used in the <code>BatchPrediction</code>. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> </ul>

### BatchPredictions
* BatchPredictions `array`
  * items [BatchPrediction](#batchprediction)

### ComparatorValue
* ComparatorValue `string`: The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.

### ComputeStatistics
* ComputeStatistics `boolean`

### CreateBatchPredictionInput
* CreateBatchPredictionInput `object`
  * BatchPredictionDataSourceId **required** [EntityId](#entityid)
  * BatchPredictionId **required** [EntityId](#entityid)
  * BatchPredictionName [EntityName](#entityname)
  * MLModelId **required** [EntityId](#entityid)
  * OutputUri **required** [S3Url](#s3url)

### CreateBatchPredictionOutput
* CreateBatchPredictionOutput `object`: <p> Represents the output of a <code>CreateBatchPrediction</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateBatchPrediction</code> operation is asynchronous. You can poll for status updates by using the <code>&gt;GetBatchPrediction</code> operation and checking the <code>Status</code> parameter of the result. </p>
  * BatchPredictionId [EntityId](#entityid)

### CreateDataSourceFromRDSInput
* CreateDataSourceFromRDSInput `object`
  * ComputeStatistics [ComputeStatistics](#computestatistics)
  * DataSourceId **required** [EntityId](#entityid)
  * DataSourceName [EntityName](#entityname)
  * RDSData **required** [RDSDataSpec](#rdsdataspec)
  * RoleARN **required** [RoleARN](#rolearn)

### CreateDataSourceFromRDSOutput
* CreateDataSourceFromRDSOutput `object`: <p> Represents the output of a <code>CreateDataSourceFromRDS</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRDS</code>&gt; operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. You can inspect the <code>Message</code> when <code>Status</code> shows up as <code>FAILED</code>. You can also check the progress of the copy operation by going to the <code>DataPipeline</code> console and looking up the pipeline using the <code>pipelineId </code> from the describe call.</p>
  * DataSourceId [EntityId](#entityid)

### CreateDataSourceFromRedshiftInput
* CreateDataSourceFromRedshiftInput `object`
  * ComputeStatistics [ComputeStatistics](#computestatistics)
  * DataSourceId **required** [EntityId](#entityid)
  * DataSourceName [EntityName](#entityname)
  * DataSpec **required** [RedshiftDataSpec](#redshiftdataspec)
  * RoleARN **required** [RoleARN](#rolearn)

### CreateDataSourceFromRedshiftOutput
* CreateDataSourceFromRedshiftOutput `object`: <p> Represents the output of a <code>CreateDataSourceFromRedshift</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRedshift</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>
  * DataSourceId [EntityId](#entityid)

### CreateDataSourceFromS3Input
* CreateDataSourceFromS3Input `object`
  * ComputeStatistics [ComputeStatistics](#computestatistics)
  * DataSourceId **required** [EntityId](#entityid)
  * DataSourceName [EntityName](#entityname)
  * DataSpec **required** [S3DataSpec](#s3dataspec)

### CreateDataSourceFromS3Output
* CreateDataSourceFromS3Output `object`: <p> Represents the output of a <code>CreateDataSourceFromS3</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromS3</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>
  * DataSourceId [EntityId](#entityid)

### CreateEvaluationInput
* CreateEvaluationInput `object`
  * EvaluationDataSourceId **required** [EntityId](#entityid)
  * EvaluationId **required** [EntityId](#entityid)
  * EvaluationName [EntityName](#entityname)
  * MLModelId **required** [EntityId](#entityid)

### CreateEvaluationOutput
* CreateEvaluationOutput `object`: <p> Represents the output of a <code>CreateEvaluation</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p><code>CreateEvaluation</code> operation is asynchronous. You can poll for status updates by using the <code>GetEvcaluation</code> operation and checking the <code>Status</code> parameter. </p>
  * EvaluationId [EntityId](#entityid)

### CreateMLModelInput
* CreateMLModelInput `object`
  * MLModelId **required** [EntityId](#entityid)
  * MLModelName [EntityName](#entityname)
  * MLModelType **required** [MLModelType](#mlmodeltype)
  * Parameters [TrainingParameters](#trainingparameters)
  * Recipe [Recipe](#recipe)
  * RecipeUri [S3Url](#s3url)
  * TrainingDataSourceId **required** [EntityId](#entityid)

### CreateMLModelOutput
* CreateMLModelOutput `object`: <p> Represents the output of a <code>CreateMLModel</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateMLModel</code> operation is asynchronous. You can poll for status updates by using the <code>GetMLModel</code> operation and checking the <code>Status</code> parameter. </p>
  * MLModelId [EntityId](#entityid)

### CreateRealtimeEndpointInput
* CreateRealtimeEndpointInput `object`
  * MLModelId **required** [EntityId](#entityid)

### CreateRealtimeEndpointOutput
* CreateRealtimeEndpointOutput `object`: <p>Represents the output of an <code>CreateRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>.</p> <note> <p>The endpoint information includes the URI of the <code>MLModel</code>; that is, the location to send online prediction requests for the specified <code>MLModel</code>.</p> </note>
  * MLModelId [EntityId](#entityid)
  * RealtimeEndpointInfo [RealtimeEndpointInfo](#realtimeendpointinfo)

### DataRearrangement
* DataRearrangement `string`

### DataSchema
* DataSchema `string`: <p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p><code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] } </p>

### DataSource
* DataSource `object`: <p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p>
  * ComputeStatistics [ComputeStatistics](#computestatistics)
  * ComputeTime [LongType](#longtype)
  * CreatedAt [EpochTime](#epochtime)
  * CreatedByIamUser [AwsUserArn](#awsuserarn)
  * DataLocationS3 [S3Url](#s3url)
  * DataRearrangement [DataRearrangement](#datarearrangement)
  * DataSizeInBytes [LongType](#longtype)
  * DataSourceId [EntityId](#entityid)
  * FinishedAt [EpochTime](#epochtime)
  * LastUpdatedAt [EpochTime](#epochtime)
  * Message [Message](#message)
  * Name [EntityName](#entityname)
  * NumberOfFiles [LongType](#longtype)
  * RDSMetadata [RDSMetadata](#rdsmetadata)
  * RedshiftMetadata [RedshiftMetadata](#redshiftmetadata)
  * RoleARN [RoleARN](#rolearn)
  * StartedAt [EpochTime](#epochtime)
  * Status [EntityStatus](#entitystatus)

### DataSourceFilterVariable
* DataSourceFilterVariable `string` (values: CreatedAt, LastUpdatedAt, Status, Name, DataLocationS3, IAMUser): <p>A list of the variables to use in searching or filtering <code>DataSource</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>DataSource</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>DataSource</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>DataSource</code> <b> </b> <code>Name</code>.</li> <li> <code>DataUri</code> - Sets the search criteria to the URI of data files used to create the <code>DataSource</code>. The URI can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>DataSource</code> creation.</li> </ul> <note><title>Note</title> <p>The variable names should match the variable names in the <code>DataSource</code>.</p> </note>

### DataSources
* DataSources `array`
  * items [DataSource](#datasource)

### DeleteBatchPredictionInput
* DeleteBatchPredictionInput `object`
  * BatchPredictionId **required** [EntityId](#entityid)

### DeleteBatchPredictionOutput
* DeleteBatchPredictionOutput `object`: <p> Represents the output of a <code>DeleteBatchPrediction</code> operation.</p> <p>You can use the <code>GetBatchPrediction</code> operation and check the value of the <code>Status</code> parameter to see whether a <code>BatchPrediction</code> is marked as <code>DELETED</code>.</p>
  * BatchPredictionId [EntityId](#entityid)

### DeleteDataSourceInput
* DeleteDataSourceInput `object`
  * DataSourceId **required** [EntityId](#entityid)

### DeleteDataSourceOutput
* DeleteDataSourceOutput `object`:  Represents the output of a <code>DeleteDataSource</code> operation.
  * DataSourceId [EntityId](#entityid)

### DeleteEvaluationInput
* DeleteEvaluationInput `object`
  * EvaluationId **required** [EntityId](#entityid)

### DeleteEvaluationOutput
* DeleteEvaluationOutput `object`: <p> Represents the output of a <code>DeleteEvaluation</code> operation. The output indicates that Amazon Machine Learning (Amazon ML) received the request.</p> <p>You can use the <code>GetEvaluation</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>Evaluation</code> is marked as <code>DELETED</code>.</p>
  * EvaluationId [EntityId](#entityid)

### DeleteMLModelInput
* DeleteMLModelInput `object`
  * MLModelId **required** [EntityId](#entityid)

### DeleteMLModelOutput
* DeleteMLModelOutput `object`: <p>Represents the output of a <code>DeleteMLModel</code> operation.</p> <p>You can use the <code>GetMLModel</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>MLModel</code> is marked as <code>DELETED</code>.</p>
  * MLModelId [EntityId](#entityid)

### DeleteRealtimeEndpointInput
* DeleteRealtimeEndpointInput `object`
  * MLModelId **required** [EntityId](#entityid)

### DeleteRealtimeEndpointOutput
* DeleteRealtimeEndpointOutput `object`: <p>Represents the output of an <code>DeleteRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>. </p>
  * MLModelId [EntityId](#entityid)
  * RealtimeEndpointInfo [RealtimeEndpointInfo](#realtimeendpointinfo)

### DeleteTagsInput
* DeleteTagsInput `object`
  * ResourceId **required** [EntityId](#entityid)
  * ResourceType **required** [TaggableResourceType](#taggableresourcetype)
  * TagKeys **required** [TagKeyList](#tagkeylist)

### DeleteTagsOutput
* DeleteTagsOutput `object`: Amazon ML returns the following elements. 
  * ResourceId [EntityId](#entityid)
  * ResourceType [TaggableResourceType](#taggableresourcetype)

### DescribeBatchPredictionsInput
* DescribeBatchPredictionsInput `object`
  * EQ [ComparatorValue](#comparatorvalue)
  * FilterVariable [BatchPredictionFilterVariable](#batchpredictionfiltervariable)
  * GE [ComparatorValue](#comparatorvalue)
  * GT [ComparatorValue](#comparatorvalue)
  * LE [ComparatorValue](#comparatorvalue)
  * LT [ComparatorValue](#comparatorvalue)
  * Limit [PageLimit](#pagelimit)
  * NE [ComparatorValue](#comparatorvalue)
  * NextToken [StringType](#stringtype)
  * Prefix [ComparatorValue](#comparatorvalue)
  * SortOrder [SortOrder](#sortorder)

### DescribeBatchPredictionsOutput
* DescribeBatchPredictionsOutput `object`: Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s.
  * NextToken [StringType](#stringtype)
  * Results [BatchPredictions](#batchpredictions)

### DescribeDataSourcesInput
* DescribeDataSourcesInput `object`
  * EQ [ComparatorValue](#comparatorvalue)
  * FilterVariable [DataSourceFilterVariable](#datasourcefiltervariable)
  * GE [ComparatorValue](#comparatorvalue)
  * GT [ComparatorValue](#comparatorvalue)
  * LE [ComparatorValue](#comparatorvalue)
  * LT [ComparatorValue](#comparatorvalue)
  * Limit [PageLimit](#pagelimit)
  * NE [ComparatorValue](#comparatorvalue)
  * NextToken [StringType](#stringtype)
  * Prefix [ComparatorValue](#comparatorvalue)
  * SortOrder [SortOrder](#sortorder)

### DescribeDataSourcesOutput
* DescribeDataSourcesOutput `object`: Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>.
  * NextToken [StringType](#stringtype)
  * Results [DataSources](#datasources)

### DescribeEvaluationsInput
* DescribeEvaluationsInput `object`
  * EQ [ComparatorValue](#comparatorvalue)
  * FilterVariable [EvaluationFilterVariable](#evaluationfiltervariable)
  * GE [ComparatorValue](#comparatorvalue)
  * GT [ComparatorValue](#comparatorvalue)
  * LE [ComparatorValue](#comparatorvalue)
  * LT [ComparatorValue](#comparatorvalue)
  * Limit [PageLimit](#pagelimit)
  * NE [ComparatorValue](#comparatorvalue)
  * NextToken [StringType](#stringtype)
  * Prefix [ComparatorValue](#comparatorvalue)
  * SortOrder [SortOrder](#sortorder)

### DescribeEvaluationsOutput
* DescribeEvaluationsOutput `object`: Represents the query results from a <code>DescribeEvaluations</code> operation. The content is essentially a list of <code>Evaluation</code>.
  * NextToken [StringType](#stringtype)
  * Results [Evaluations](#evaluations)

### DescribeMLModelsInput
* DescribeMLModelsInput `object`
  * EQ [ComparatorValue](#comparatorvalue)
  * FilterVariable [MLModelFilterVariable](#mlmodelfiltervariable)
  * GE [ComparatorValue](#comparatorvalue)
  * GT [ComparatorValue](#comparatorvalue)
  * LE [ComparatorValue](#comparatorvalue)
  * LT [ComparatorValue](#comparatorvalue)
  * Limit [PageLimit](#pagelimit)
  * NE [ComparatorValue](#comparatorvalue)
  * NextToken [StringType](#stringtype)
  * Prefix [ComparatorValue](#comparatorvalue)
  * SortOrder [SortOrder](#sortorder)

### DescribeMLModelsOutput
* DescribeMLModelsOutput `object`: Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>.
  * NextToken [StringType](#stringtype)
  * Results [MLModels](#mlmodels)

### DescribeTagsInput
* DescribeTagsInput `object`
  * ResourceId **required** [EntityId](#entityid)
  * ResourceType **required** [TaggableResourceType](#taggableresourcetype)

### DescribeTagsOutput
* DescribeTagsOutput `object`: Amazon ML returns the following elements. 
  * ResourceId [EntityId](#entityid)
  * ResourceType [TaggableResourceType](#taggableresourcetype)
  * Tags [TagList](#taglist)

### DetailsAttributes
* DetailsAttributes `string` (values: PredictiveModelType, Algorithm): Contains the key values of <code>DetailsMap</code>: <code>PredictiveModelType</code> - Indicates the type of the <code>MLModel</code>. <code>Algorithm</code> - Indicates the algorithm that was used for the <code>MLModel</code>.

### DetailsMap
* DetailsMap `array`: Provides any additional details regarding the prediction.
  * items `object`
    * key [DetailsAttributes](#detailsattributes)
    * value [DetailsValue](#detailsvalue)

### DetailsValue
* DetailsValue `string`

### EDPPipelineId
* EDPPipelineId `string`

### EDPResourceRole
* EDPResourceRole `string`

### EDPSecurityGroupId
* EDPSecurityGroupId `string`

### EDPSecurityGroupIds
* EDPSecurityGroupIds `array`
  * items [EDPSecurityGroupId](#edpsecuritygroupid)

### EDPServiceRole
* EDPServiceRole `string`

### EDPSubnetId
* EDPSubnetId `string`

### EntityId
* EntityId `string`

### EntityName
* EntityName `string`: A user-supplied name or description of the Amazon ML resource.

### EntityStatus
* EntityStatus `string` (values: PENDING, INPROGRESS, FAILED, COMPLETED, DELETED): <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul>

### EpochTime
* EpochTime `string`: A timestamp represented in epoch time.

### ErrorCode
* ErrorCode `integer`

### ErrorMessage
* ErrorMessage `string`

### Evaluation
* Evaluation `object`: <p> Represents the output of <code>GetEvaluation</code> operation. </p> <p>The content consists of the detailed metadata and data file information and the current status of the <code>Evaluation</code>.</p>
  * ComputeTime [LongType](#longtype)
  * CreatedAt [EpochTime](#epochtime)
  * CreatedByIamUser [AwsUserArn](#awsuserarn)
  * EvaluationDataSourceId [EntityId](#entityid)
  * EvaluationId [EntityId](#entityid)
  * FinishedAt [EpochTime](#epochtime)
  * InputDataLocationS3 [S3Url](#s3url)
  * LastUpdatedAt [EpochTime](#epochtime)
  * MLModelId [EntityId](#entityid)
  * Message [Message](#message)
  * Name [EntityName](#entityname)
  * PerformanceMetrics [PerformanceMetrics](#performancemetrics)
  * StartedAt [EpochTime](#epochtime)
  * Status [EntityStatus](#entitystatus)

### EvaluationFilterVariable
* EvaluationFilterVariable `string` (values: CreatedAt, LastUpdatedAt, Status, Name, IAMUser, MLModelId, DataSourceId, DataURI): <p>A list of the variables to use in searching or filtering <code>Evaluation</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>Evaluation</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>Evaluation</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>Evaluation</code> <b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked an evaluation.</li> <li> <code>MLModelId</code> - Sets the search criteria to the <code>Predictor</code> that was evaluated.</li> <li> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in evaluation.</li> <li> <code>DataUri</code> - Sets the search criteria to the data file(s) used in evaluation. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> </ul>

### Evaluations
* Evaluations `array`
  * items [Evaluation](#evaluation)

### GetBatchPredictionInput
* GetBatchPredictionInput `object`
  * BatchPredictionId **required** [EntityId](#entityid)

### GetBatchPredictionOutput
* GetBatchPredictionOutput `object`: Represents the output of a <code>GetBatchPrediction</code> operation and describes a <code>BatchPrediction</code>.
  * BatchPredictionDataSourceId [EntityId](#entityid)
  * BatchPredictionId [EntityId](#entityid)
  * ComputeTime [LongType](#longtype)
  * CreatedAt [EpochTime](#epochtime)
  * CreatedByIamUser [AwsUserArn](#awsuserarn)
  * FinishedAt [EpochTime](#epochtime)
  * InputDataLocationS3 [S3Url](#s3url)
  * InvalidRecordCount [LongType](#longtype)
  * LastUpdatedAt [EpochTime](#epochtime)
  * LogUri [PresignedS3Url](#presigneds3url)
  * MLModelId [EntityId](#entityid)
  * Message [Message](#message)
  * Name [EntityName](#entityname)
  * OutputUri [S3Url](#s3url)
  * StartedAt [EpochTime](#epochtime)
  * Status [EntityStatus](#entitystatus)
  * TotalRecordCount [LongType](#longtype)

### GetDataSourceInput
* GetDataSourceInput `object`
  * DataSourceId **required** [EntityId](#entityid)
  * Verbose [Verbose](#verbose)

### GetDataSourceOutput
* GetDataSourceOutput `object`: Represents the output of a <code>GetDataSource</code> operation and describes a <code>DataSource</code>.
  * ComputeStatistics [ComputeStatistics](#computestatistics)
  * ComputeTime [LongType](#longtype)
  * CreatedAt [EpochTime](#epochtime)
  * CreatedByIamUser [AwsUserArn](#awsuserarn)
  * DataLocationS3 [S3Url](#s3url)
  * DataRearrangement [DataRearrangement](#datarearrangement)
  * DataSizeInBytes [LongType](#longtype)
  * DataSourceId [EntityId](#entityid)
  * DataSourceSchema [DataSchema](#dataschema)
  * FinishedAt [EpochTime](#epochtime)
  * LastUpdatedAt [EpochTime](#epochtime)
  * LogUri [PresignedS3Url](#presigneds3url)
  * Message [Message](#message)
  * Name [EntityName](#entityname)
  * NumberOfFiles [LongType](#longtype)
  * RDSMetadata [RDSMetadata](#rdsmetadata)
  * RedshiftMetadata [RedshiftMetadata](#redshiftmetadata)
  * RoleARN [RoleARN](#rolearn)
  * StartedAt [EpochTime](#epochtime)
  * Status [EntityStatus](#entitystatus)

### GetEvaluationInput
* GetEvaluationInput `object`
  * EvaluationId **required** [EntityId](#entityid)

### GetEvaluationOutput
* GetEvaluationOutput `object`: Represents the output of a <code>GetEvaluation</code> operation and describes an <code>Evaluation</code>.
  * ComputeTime [LongType](#longtype)
  * CreatedAt [EpochTime](#epochtime)
  * CreatedByIamUser [AwsUserArn](#awsuserarn)
  * EvaluationDataSourceId [EntityId](#entityid)
  * EvaluationId [EntityId](#entityid)
  * FinishedAt [EpochTime](#epochtime)
  * InputDataLocationS3 [S3Url](#s3url)
  * LastUpdatedAt [EpochTime](#epochtime)
  * LogUri [PresignedS3Url](#presigneds3url)
  * MLModelId [EntityId](#entityid)
  * Message [Message](#message)
  * Name [EntityName](#entityname)
  * PerformanceMetrics [PerformanceMetrics](#performancemetrics)
  * StartedAt [EpochTime](#epochtime)
  * Status [EntityStatus](#entitystatus)

### GetMLModelInput
* GetMLModelInput `object`
  * MLModelId **required** [EntityId](#entityid)
  * Verbose [Verbose](#verbose)

### GetMLModelOutput
* GetMLModelOutput `object`: Represents the output of a <code>GetMLModel</code> operation, and provides detailed information about a <code>MLModel</code>.
  * ComputeTime [LongType](#longtype)
  * CreatedAt [EpochTime](#epochtime)
  * CreatedByIamUser [AwsUserArn](#awsuserarn)
  * EndpointInfo [RealtimeEndpointInfo](#realtimeendpointinfo)
  * FinishedAt [EpochTime](#epochtime)
  * InputDataLocationS3 [S3Url](#s3url)
  * LastUpdatedAt [EpochTime](#epochtime)
  * LogUri [PresignedS3Url](#presigneds3url)
  * MLModelId [EntityId](#entityid)
  * MLModelType [MLModelType](#mlmodeltype)
  * Message [Message](#message)
  * Name [MLModelName](#mlmodelname)
  * Recipe [Recipe](#recipe)
  * Schema [DataSchema](#dataschema)
  * ScoreThreshold [ScoreThreshold](#scorethreshold)
  * ScoreThresholdLastUpdatedAt [EpochTime](#epochtime)
  * SizeInBytes [LongType](#longtype)
  * StartedAt [EpochTime](#epochtime)
  * Status [EntityStatus](#entitystatus)
  * TrainingDataSourceId [EntityId](#entityid)
  * TrainingParameters [TrainingParameters](#trainingparameters)

### IdempotentParameterMismatchException
* IdempotentParameterMismatchException `object`: A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.
  * code [ErrorCode](#errorcode)
  * message [ErrorMessage](#errormessage)

### IntegerType
* IntegerType `integer`: Integer type that is a 32-bit signed number.

### InternalServerException
* InternalServerException `object`: An error on the server occurred when trying to process a request.
  * code [ErrorCode](#errorcode)
  * message [ErrorMessage](#errormessage)

### InvalidInputException
* InvalidInputException `object`: An error on the client occurred. Typically, the cause is an invalid input value.
  * code [ErrorCode](#errorcode)
  * message [ErrorMessage](#errormessage)

### InvalidTagException
* InvalidTagException `object`
  * message [ErrorMessage](#errormessage)

### Label
* Label `string`

### LimitExceededException
* LimitExceededException `object`: The subscriber exceeded the maximum number of operations. This exception can occur when listing objects such as <code>DataSource</code>.
  * code [ErrorCode](#errorcode)
  * message [ErrorMessage](#errormessage)

### LongType
* LongType `integer`: Long integer type that is a 64-bit signed number.

### MLModel
* MLModel `object`: <p> Represents the output of a <code>GetMLModel</code> operation. </p> <p>The content consists of the detailed metadata and the current status of the <code>MLModel</code>.</p>
  * Algorithm [Algorithm](#algorithm)
  * ComputeTime [LongType](#longtype)
  * CreatedAt [EpochTime](#epochtime)
  * CreatedByIamUser [AwsUserArn](#awsuserarn)
  * EndpointInfo [RealtimeEndpointInfo](#realtimeendpointinfo)
  * FinishedAt [EpochTime](#epochtime)
  * InputDataLocationS3 [S3Url](#s3url)
  * LastUpdatedAt [EpochTime](#epochtime)
  * MLModelId [EntityId](#entityid)
  * MLModelType [MLModelType](#mlmodeltype)
  * Message [Message](#message)
  * Name [MLModelName](#mlmodelname)
  * ScoreThreshold [ScoreThreshold](#scorethreshold)
  * ScoreThresholdLastUpdatedAt [EpochTime](#epochtime)
  * SizeInBytes [LongType](#longtype)
  * StartedAt [EpochTime](#epochtime)
  * Status [EntityStatus](#entitystatus)
  * TrainingDataSourceId [EntityId](#entityid)
  * TrainingParameters [TrainingParameters](#trainingparameters)

### MLModelFilterVariable
* MLModelFilterVariable `string` (values: CreatedAt, LastUpdatedAt, Status, Name, IAMUser, TrainingDataSourceId, RealtimeEndpointStatus, MLModelType, Algorithm, TrainingDataURI)

### MLModelName
* MLModelName `string`

### MLModelType
* MLModelType `string` (values: REGRESSION, BINARY, MULTICLASS)

### MLModels
* MLModels `array`
  * items [MLModel](#mlmodel)

### Message
* Message `string`:  Description of the most recent details about an object.

### PageLimit
* PageLimit `integer`

### PerformanceMetrics
* PerformanceMetrics `object`: <p>Measurements of how well the <code>MLModel</code> performed on known observations. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: The binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: The regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: The multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="http://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p>
  * Properties [PerformanceMetricsProperties](#performancemetricsproperties)

### PerformanceMetricsProperties
* PerformanceMetricsProperties `array`
  * items `object`
    * key [PerformanceMetricsPropertyKey](#performancemetricspropertykey)
    * value [PerformanceMetricsPropertyValue](#performancemetricspropertyvalue)

### PerformanceMetricsPropertyKey
* PerformanceMetricsPropertyKey `string`

### PerformanceMetricsPropertyValue
* PerformanceMetricsPropertyValue `string`

### PredictInput
* PredictInput `object`
  * MLModelId **required** [EntityId](#entityid)
  * PredictEndpoint **required** [VipURL](#vipurl)
  * Record **required** [Record](#record)

### PredictOutput
* PredictOutput `object`
  * Prediction [Prediction](#prediction)

### Prediction
* Prediction `object`: <p>The output from a <code>Predict</code> operation: </p> <ul> <li> <p> <code>Details</code> - Contains the following attributes: <code>DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION | BINARY | MULTICLASS</code> <code>DetailsAttributes.ALGORITHM - SGD</code> </p> </li> <li> <p> <code>PredictedLabel</code> - Present for either a <code>BINARY</code> or <code>MULTICLASS</code> <code>MLModel</code> request. </p> </li> <li> <p> <code>PredictedScores</code> - Contains the raw classification score corresponding to each label. </p> </li> <li> <p> <code>PredictedValue</code> - Present for a <code>REGRESSION</code> <code>MLModel</code> request. </p> </li> </ul>
  * details [DetailsMap](#detailsmap)
  * predictedLabel [Label](#label)
  * predictedScores [ScoreValuePerLabelMap](#scorevalueperlabelmap)
  * predictedValue [floatLabel](#floatlabel)

### PredictorNotMountedException
* PredictorNotMountedException `object`: The exception is thrown when a predict request is made to an unmounted <code>MLModel</code>.
  * message [ErrorMessage](#errormessage)

### PresignedS3Url
* PresignedS3Url `string`

### RDSDataSpec
* RDSDataSpec `object`: The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>.
  * DataRearrangement [DataRearrangement](#datarearrangement)
  * DataSchema [DataSchema](#dataschema)
  * DataSchemaUri [S3Url](#s3url)
  * DatabaseCredentials **required** [RDSDatabaseCredentials](#rdsdatabasecredentials)
  * DatabaseInformation **required** [RDSDatabase](#rdsdatabase)
  * ResourceRole **required** [EDPResourceRole](#edpresourcerole)
  * S3StagingLocation **required** [S3Url](#s3url)
  * SecurityGroupIds **required** [EDPSecurityGroupIds](#edpsecuritygroupids)
  * SelectSqlQuery **required** [RDSSelectSqlQuery](#rdsselectsqlquery)
  * ServiceRole **required** [EDPServiceRole](#edpservicerole)
  * SubnetId **required** [EDPSubnetId](#edpsubnetid)

### RDSDatabase
* RDSDatabase `object`: The database details of an Amazon RDS database.
  * DatabaseName **required** [RDSDatabaseName](#rdsdatabasename)
  * InstanceIdentifier **required** [RDSInstanceIdentifier](#rdsinstanceidentifier)

### RDSDatabaseCredentials
* RDSDatabaseCredentials `object`: The database credentials to connect to a database on an RDS DB instance.
  * Password **required** [RDSDatabasePassword](#rdsdatabasepassword)
  * Username **required** [RDSDatabaseUsername](#rdsdatabaseusername)

### RDSDatabaseName
* RDSDatabaseName `string`: The name of a database hosted on an RDS DB instance.

### RDSDatabasePassword
* RDSDatabasePassword `string`: The password to be used by Amazon ML to connect to a database on an RDS DB instance. The password should have sufficient permissions to execute the <code>RDSSelectQuery</code> query.

### RDSDatabaseUsername
* RDSDatabaseUsername `string`: The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.

### RDSInstanceIdentifier
* RDSInstanceIdentifier `string`: Identifier of RDS DB Instances.

### RDSMetadata
* RDSMetadata `object`: The datasource details that are specific to Amazon RDS.
  * DataPipelineId [EDPPipelineId](#edppipelineid)
  * Database [RDSDatabase](#rdsdatabase)
  * DatabaseUserName [RDSDatabaseUsername](#rdsdatabaseusername)
  * ResourceRole [EDPResourceRole](#edpresourcerole)
  * SelectSqlQuery [RDSSelectSqlQuery](#rdsselectsqlquery)
  * ServiceRole [EDPServiceRole](#edpservicerole)

### RDSSelectSqlQuery
* RDSSelectSqlQuery `string`: The SQL query to be executed against the Amazon RDS database. The SQL query should be valid for the Amazon RDS type being used. 

### RealtimeEndpointInfo
* RealtimeEndpointInfo `object`:  Describes the real-time endpoint information for an <code>MLModel</code>.
  * CreatedAt [EpochTime](#epochtime)
  * EndpointStatus [RealtimeEndpointStatus](#realtimeendpointstatus)
  * EndpointUrl [VipURL](#vipurl)
  * PeakRequestsPerSecond [IntegerType](#integertype)

### RealtimeEndpointStatus
* RealtimeEndpointStatus `string` (values: NONE, READY, UPDATING, FAILED)

### Recipe
* Recipe `string`

### Record
* Record `array`: A map of variable name-value pairs that represent an observation.
  * items `object`
    * key [VariableName](#variablename)
    * value [VariableValue](#variablevalue)

### RedshiftClusterIdentifier
* RedshiftClusterIdentifier `string`: The ID of an Amazon Redshift cluster.

### RedshiftDataSpec
* RedshiftDataSpec `object`: Describes the data specification of an Amazon Redshift <code>DataSource</code>.
  * DataRearrangement [DataRearrangement](#datarearrangement)
  * DataSchema [DataSchema](#dataschema)
  * DataSchemaUri [S3Url](#s3url)
  * DatabaseCredentials **required** [RedshiftDatabaseCredentials](#redshiftdatabasecredentials)
  * DatabaseInformation **required** [RedshiftDatabase](#redshiftdatabase)
  * S3StagingLocation **required** [S3Url](#s3url)
  * SelectSqlQuery **required** [RedshiftSelectSqlQuery](#redshiftselectsqlquery)

### RedshiftDatabase
* RedshiftDatabase `object`: Describes the database details required to connect to an Amazon Redshift database.
  * ClusterIdentifier **required** [RedshiftClusterIdentifier](#redshiftclusteridentifier)
  * DatabaseName **required** [RedshiftDatabaseName](#redshiftdatabasename)

### RedshiftDatabaseCredentials
* RedshiftDatabaseCredentials `object`:  Describes the database credentials for connecting to a database on an Amazon Redshift cluster.
  * Password **required** [RedshiftDatabasePassword](#redshiftdatabasepassword)
  * Username **required** [RedshiftDatabaseUsername](#redshiftdatabaseusername)

### RedshiftDatabaseName
* RedshiftDatabaseName `string`: The name of a database hosted on an Amazon Redshift cluster.

### RedshiftDatabasePassword
* RedshiftDatabasePassword `string`: A password to be used by Amazon ML to connect to a database on an Amazon Redshift cluster. The password should have sufficient permissions to execute a <code>RedshiftSelectSqlQuery</code> query. The password should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.

### RedshiftDatabaseUsername
* RedshiftDatabaseUsername `string`: A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.

### RedshiftMetadata
* RedshiftMetadata `object`: Describes the <code>DataSource</code> details specific to Amazon Redshift.
  * DatabaseUserName [RedshiftDatabaseUsername](#redshiftdatabaseusername)
  * RedshiftDatabase [RedshiftDatabase](#redshiftdatabase)
  * SelectSqlQuery [RedshiftSelectSqlQuery](#redshiftselectsqlquery)

### RedshiftSelectSqlQuery
* RedshiftSelectSqlQuery `string`:  Describes the SQL query to execute on the Amazon Redshift database. The SQL query should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_SELECT_synopsis.html">SELECT</a>. 

### ResourceNotFoundException
* ResourceNotFoundException `object`: A specified resource cannot be located.
  * code [ErrorCode](#errorcode)
  * message [ErrorMessage](#errormessage)

### RoleARN
* RoleARN `string`: The Amazon Resource Name (ARN) of an <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename. 

### S3DataSpec
* S3DataSpec `object`:  Describes the data specification of a <code>DataSource</code>.
  * DataLocationS3 **required** [S3Url](#s3url)
  * DataRearrangement [DataRearrangement](#datarearrangement)
  * DataSchema [DataSchema](#dataschema)
  * DataSchemaLocationS3 [S3Url](#s3url)

### S3Url
* S3Url `string`: A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).

### ScoreThreshold
* ScoreThreshold `number`

### ScoreValue
* ScoreValue `number`

### ScoreValuePerLabelMap
* ScoreValuePerLabelMap `array`: Provides the raw classification score corresponding to each label.
  * items `object`
    * key [Label](#label)
    * value [ScoreValue](#scorevalue)

### SortOrder
* SortOrder `string` (values: asc, dsc): <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul>

### StringType
* StringType `string`: String type.

### Tag
* Tag `object`: A custom key-value pair associated with an ML object, such as an ML model.
  * Key [TagKey](#tagkey)
  * Value [TagValue](#tagvalue)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagLimitExceededException
* TagLimitExceededException `object`
  * message [ErrorMessage](#errormessage)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagValue
* TagValue `string`

### TaggableResourceType
* TaggableResourceType `string` (values: BatchPrediction, DataSource, Evaluation, MLModel)

### TrainingParameters
* TrainingParameters `array`
  * items `object`
    * key [StringType](#stringtype)
    * value [StringType](#stringtype)

### UpdateBatchPredictionInput
* UpdateBatchPredictionInput `object`
  * BatchPredictionId **required** [EntityId](#entityid)
  * BatchPredictionName **required** [EntityName](#entityname)

### UpdateBatchPredictionOutput
* UpdateBatchPredictionOutput `object`: <p>Represents the output of an <code>UpdateBatchPrediction</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>
  * BatchPredictionId [EntityId](#entityid)

### UpdateDataSourceInput
* UpdateDataSourceInput `object`
  * DataSourceId **required** [EntityId](#entityid)
  * DataSourceName **required** [EntityName](#entityname)

### UpdateDataSourceOutput
* UpdateDataSourceOutput `object`: <p>Represents the output of an <code>UpdateDataSource</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>
  * DataSourceId [EntityId](#entityid)

### UpdateEvaluationInput
* UpdateEvaluationInput `object`
  * EvaluationId **required** [EntityId](#entityid)
  * EvaluationName **required** [EntityName](#entityname)

### UpdateEvaluationOutput
* UpdateEvaluationOutput `object`: <p>Represents the output of an <code>UpdateEvaluation</code> operation.</p> <p>You can see the updated content by using the <code>GetEvaluation</code> operation.</p>
  * EvaluationId [EntityId](#entityid)

### UpdateMLModelInput
* UpdateMLModelInput `object`
  * MLModelId **required** [EntityId](#entityid)
  * MLModelName [EntityName](#entityname)
  * ScoreThreshold [ScoreThreshold](#scorethreshold)

### UpdateMLModelOutput
* UpdateMLModelOutput `object`: <p>Represents the output of an <code>UpdateMLModel</code> operation.</p> <p>You can see the updated content by using the <code>GetMLModel</code> operation.</p>
  * MLModelId [EntityId](#entityid)

### VariableName
* VariableName `string`: The name of a variable. Currently it's used to specify the name of the target value, label, weight, and tags.

### VariableValue
* VariableValue `string`: The value of a variable. Currently it's used to specify values of the target value, weights, and tag variables and for filtering variable values.

### Verbose
* Verbose `boolean`: Specifies whether a describe operation should return exhaustive or abbreviated information.

### VipURL
* VipURL `string`

### floatLabel
* floatLabel `number`


