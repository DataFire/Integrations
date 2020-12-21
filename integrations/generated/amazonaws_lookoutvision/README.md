# @datafire/amazonaws_lookoutvision

Client library for Amazon Lookout for Vision

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_lookoutvision
```
```js
let amazonaws_lookoutvision = require('@datafire/amazonaws_lookoutvision').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>This is the Amazon Lookout for Vision API Reference. It provides descriptions of actions, data types, common parameters, and common errors.</p> <p>Amazon Lookout for Vision enables you to find visual defects in industrial products, accurately and at scale. It uses computer vision to identify missing components in an industrial product, damage to vehicles or structures, irregularities in production lines, and even minuscule defects in silicon wafers — or any other physical item where quality is important such as a missing capacitor on printed circuit boards.</p>

## Actions

### ListProjects



```js
amazonaws_lookoutvision.ListProjects({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListProjectsResponse](#listprojectsresponse)

### CreateProject



```js
amazonaws_lookoutvision.CreateProject({
  "ProjectName": ""
}, context)
```

#### Input
* input `object`
  * ProjectName **required** `string`: S nsme for the project.

#### Output
* output [CreateProjectResponse](#createprojectresponse)

### DeleteProject



```js
amazonaws_lookoutvision.DeleteProject({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`

#### Output
* output [DeleteProjectResponse](#deleteprojectresponse)

### DescribeProject



```js
amazonaws_lookoutvision.DescribeProject({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`

#### Output
* output [DescribeProjectResponse](#describeprojectresponse)

### CreateDataset



```js
amazonaws_lookoutvision.CreateDataset({
  "projectName": "",
  "DatasetType": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * DatasetSource `object`: Information about the location of a manifest file that Amazon Lookout for Vision uses to to create a dataset.
    * GroundTruthManifest
      * S3Object
        * Bucket **required**
        * Key **required**
        * VersionId
  * DatasetType **required** `string`: The type of the dataset. Specify <code>train</code> for a training dataset. Specify <code>test</code> for a test dataset.

#### Output
*Output schema unknown*

### DeleteDataset



```js
amazonaws_lookoutvision.DeleteDataset({
  "projectName": "",
  "datasetType": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * datasetType **required** `string`

#### Output
*Output schema unknown*

### DescribeDataset



```js
amazonaws_lookoutvision.DescribeDataset({
  "projectName": "",
  "datasetType": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * datasetType **required** `string`

#### Output
* output [DescribeDatasetResponse](#describedatasetresponse)

### ListDatasetEntries



```js
amazonaws_lookoutvision.ListDatasetEntries({
  "projectName": "",
  "datasetType": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * datasetType **required** `string`
  * labeled `boolean`
  * anomalyClass `string`
  * createdBefore `string`
  * createdAfter `string`
  * nextToken `string`
  * maxResults `integer`
  * sourceRefContains `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListDatasetEntriesResponse](#listdatasetentriesresponse)

### UpdateDatasetEntries



```js
amazonaws_lookoutvision.UpdateDatasetEntries({
  "projectName": "",
  "datasetType": "",
  "Changes": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * datasetType **required** `string`
  * Changes **required** `string`: The entries to add to the dataset.

#### Output
*Output schema unknown*

### ListModels



```js
amazonaws_lookoutvision.ListModels({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListModelsResponse](#listmodelsresponse)

### CreateModel



```js
amazonaws_lookoutvision.CreateModel({
  "projectName": "",
  "OutputConfig": {}
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * Description `object`: Describes an Amazon Lookout for Vision model.
    * CreationTimestamp
    * Description
    * EvaluationEndTimestamp
    * EvaluationManifest
      * Bucket **required**
      * Key **required**
    * EvaluationResult
      * Bucket **required**
      * Key **required**
    * KmsKeyId
    * ModelArn
    * ModelVersion
    * OutputConfig
      * S3Location **required**
        * Bucket **required**
        * Prefix
    * Performance
      * F1Score
      * Precision
      * Recall
    * Status
    * StatusMessage
  * KmsKeyId `string`: The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for encypting the model. If this parameter is not specified, the model is encrypted by a key that AWS owns and manages.
  * OutputConfig **required** `object`: The S3 location where Amazon Lookout for Vision saves model training files.
    * S3Location
      * Bucket **required**
      * Prefix

#### Output
*Output schema unknown*

### DeleteModel



```js
amazonaws_lookoutvision.DeleteModel({
  "projectName": "",
  "modelVersion": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * modelVersion **required** `string`

#### Output
*Output schema unknown*

### DescribeModel



```js
amazonaws_lookoutvision.DescribeModel({
  "projectName": "",
  "modelVersion": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * modelVersion **required** `string`

#### Output
* output [DescribeModelResponse](#describemodelresponse)

### DetectAnomalies



```js
amazonaws_lookoutvision.DetectAnomalies({
  "projectName": "",
  "modelVersion": "",
  "content-type": "",
  "Body": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * modelVersion **required** `string`
  * content-type **required** `string`
  * Body **required** `string`: The unencrypted image bytes that you want to analyze. 

#### Output
* output [DetectAnomaliesResponse](#detectanomaliesresponse)

### StartModel



```js
amazonaws_lookoutvision.StartModel({
  "projectName": "",
  "modelVersion": "",
  "MinInferenceUnits": 0
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * modelVersion **required** `string`
  * MinInferenceUnits **required** `integer`: The minimum number of inference units to use. A single inference unit represents 1 hour of processing and can support up to 5 Transaction Pers Second (TPS). Use a higher number to increase the TPS throughput of your model. You are charged for the number of inference units that you use. 

#### Output
*Output schema unknown*

### StopModel



```js
amazonaws_lookoutvision.StopModel({
  "projectName": "",
  "modelVersion": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * modelVersion **required** `string`

#### Output
*Output schema unknown*



## Definitions

### AccessDeniedException


### AnomalyClassFilter
* AnomalyClassFilter `string`

### Boolean
* Boolean `boolean`

### ClientToken
* ClientToken `string`

### ConflictException


### ContentType
* ContentType `string`

### CreateDatasetRequest
* CreateDatasetRequest `object`
  * DatasetSource
    * GroundTruthManifest
      * S3Object
        * Bucket **required**
        * Key **required**
        * VersionId
  * DatasetType **required**

### CreateDatasetResponse
* CreateDatasetResponse `object`
  * DatasetMetadata
    * CreationTimestamp
    * DatasetType
    * Status
    * StatusMessage

### CreateModelRequest
* CreateModelRequest `object`
  * Description
    * CreationTimestamp
    * Description
    * EvaluationEndTimestamp
    * EvaluationManifest
      * Bucket **required**
      * Key **required**
    * EvaluationResult
      * Bucket **required**
      * Key **required**
    * KmsKeyId
    * ModelArn
    * ModelVersion
    * OutputConfig
      * S3Location **required**
        * Bucket **required**
        * Prefix
    * Performance
      * F1Score
      * Precision
      * Recall
    * Status
    * StatusMessage
  * KmsKeyId
  * OutputConfig **required**
    * S3Location **required**
      * Bucket **required**
      * Prefix

### CreateModelResponse
* CreateModelResponse `object`
  * ModelMetadata
    * CreationTimestamp
    * Description
    * ModelArn
    * ModelVersion
    * Performance
      * F1Score
      * Precision
      * Recall
    * Status
    * StatusMessage

### CreateProjectRequest
* CreateProjectRequest `object`
  * ProjectName **required**

### CreateProjectResponse
* CreateProjectResponse `object`
  * ProjectMetadata
    * CreationTimestamp
    * ProjectArn
    * ProjectName

### DatasetChanges
* DatasetChanges `string`

### DatasetDescription
* DatasetDescription `object`: The description for a dataset. For more information, see <a>DescribeDataset</a>.
  * CreationTimestamp
  * DatasetType
  * ImageStats
    * Anomaly
    * Labeled
    * Normal
    * Total
  * LastUpdatedTimestamp
  * ProjectName
  * Status
  * StatusMessage

### DatasetEntry
* DatasetEntry `string`

### DatasetEntryList
* DatasetEntryList `array`
  * items [DatasetEntry](#datasetentry)

### DatasetGroundTruthManifest
* DatasetGroundTruthManifest `object`: Location information about a manifest file. You can use a manifest file to create a dataset.
  * S3Object
    * Bucket **required**
    * Key **required**
    * VersionId

### DatasetImageStats
* DatasetImageStats `object`: Statistics about the images in a dataset.
  * Anomaly
  * Labeled
  * Normal
  * Total

### DatasetMetadata
* DatasetMetadata `object`: Sumary information for an Amazon Lookout for Vision dataset.
  * CreationTimestamp
  * DatasetType
  * Status
  * StatusMessage

### DatasetMetadataList
* DatasetMetadataList `array`
  * items [DatasetMetadata](#datasetmetadata)

### DatasetSource
* DatasetSource `object`: Information about the location of a manifest file that Amazon Lookout for Vision uses to to create a dataset.
  * GroundTruthManifest
    * S3Object
      * Bucket **required**
      * Key **required**
      * VersionId

### DatasetStatus
* DatasetStatus `string` (values: CREATE_IN_PROGRESS, CREATE_COMPLETE, CREATE_FAILED, UPDATE_IN_PROGRESS, UPDATE_COMPLETE, UPDATE_FAILED_ROLLBACK_IN_PROGRESS, UPDATE_FAILED_ROLLBACK_COMPLETE, DELETE_IN_PROGRESS, DELETE_COMPLETE, DELETE_FAILED)

### DatasetStatusMessage
* DatasetStatusMessage `string`

### DatasetType
* DatasetType `string`

### DateTime
* DateTime `string`

### DeleteDatasetRequest
* DeleteDatasetRequest `object`

### DeleteDatasetResponse
* DeleteDatasetResponse `object`

### DeleteModelRequest
* DeleteModelRequest `object`

### DeleteModelResponse
* DeleteModelResponse `object`
  * ModelArn

### DeleteProjectRequest
* DeleteProjectRequest `object`

### DeleteProjectResponse
* DeleteProjectResponse `object`
  * ProjectArn

### DescribeDatasetRequest
* DescribeDatasetRequest `object`

### DescribeDatasetResponse
* DescribeDatasetResponse `object`
  * DatasetDescription
    * CreationTimestamp
    * DatasetType
    * ImageStats
      * Anomaly
      * Labeled
      * Normal
      * Total
    * LastUpdatedTimestamp
    * ProjectName
    * Status
    * StatusMessage

### DescribeModelRequest
* DescribeModelRequest `object`

### DescribeModelResponse
* DescribeModelResponse `object`
  * ModelDescription
    * CreationTimestamp
    * Description
    * EvaluationEndTimestamp
    * EvaluationManifest
      * Bucket **required**
      * Key **required**
    * EvaluationResult
      * Bucket **required**
      * Key **required**
    * KmsKeyId
    * ModelArn
    * ModelVersion
    * OutputConfig
      * S3Location **required**
        * Bucket **required**
        * Prefix
    * Performance
      * F1Score
      * Precision
      * Recall
    * Status
    * StatusMessage

### DescribeProjectRequest
* DescribeProjectRequest `object`

### DescribeProjectResponse
* DescribeProjectResponse `object`
  * ProjectDescription
    * CreationTimestamp
    * Datasets
      * items [DatasetMetadata](#datasetmetadata)
    * ProjectArn
    * ProjectName

### DetectAnomaliesRequest
* DetectAnomaliesRequest `object`
  * Body **required**

### DetectAnomaliesResponse
* DetectAnomaliesResponse `object`
  * DetectAnomalyResult
    * Confidence
    * IsAnomalous
    * Source
      * Type

### DetectAnomalyResult
* DetectAnomalyResult `object`: The prediction results from a call to <a>DetectAnomalies</a>.
  * Confidence
  * IsAnomalous
  * Source
    * Type

### Float
* Float `number`

### ImageSource
* ImageSource `object`: The source for an image.
  * Type

### ImageSourceType
* ImageSourceType `string`

### InferenceUnits
* InferenceUnits `integer`

### InputS3Object
* InputS3Object `object`: Amazon S3 Location information for an input manifest file. 
  * Bucket **required**
  * Key **required**
  * VersionId

### Integer
* Integer `integer`

### InternalServerException


### IsLabeled
* IsLabeled `boolean`

### KmsKeyId
* KmsKeyId `string`

### ListDatasetEntriesRequest
* ListDatasetEntriesRequest `object`

### ListDatasetEntriesResponse
* ListDatasetEntriesResponse `object`
  * DatasetEntries
    * items [DatasetEntry](#datasetentry)
  * NextToken

### ListModelsRequest
* ListModelsRequest `object`

### ListModelsResponse
* ListModelsResponse `object`
  * Models
    * items [ModelMetadata](#modelmetadata)
  * NextToken

### ListProjectsRequest
* ListProjectsRequest `object`

### ListProjectsResponse
* ListProjectsResponse `object`
  * NextToken
  * Projects
    * items [ProjectMetadata](#projectmetadata)

### ModelArn
* ModelArn `string`

### ModelDescription
* ModelDescription `object`: Describes an Amazon Lookout for Vision model.
  * CreationTimestamp
  * Description
  * EvaluationEndTimestamp
  * EvaluationManifest
    * Bucket **required**
    * Key **required**
  * EvaluationResult
    * Bucket **required**
    * Key **required**
  * KmsKeyId
  * ModelArn
  * ModelVersion
  * OutputConfig
    * S3Location **required**
      * Bucket **required**
      * Prefix
  * Performance
    * F1Score
    * Precision
    * Recall
  * Status
  * StatusMessage

### ModelDescriptionMessage
* ModelDescriptionMessage `string`

### ModelHostingStatus
* ModelHostingStatus `string` (values: RUNNING, STARTING, STOPPED, FAILED)

### ModelMetadata
* ModelMetadata `object`: Describes an Amazon Lookout for Vision model.
  * CreationTimestamp
  * Description
  * ModelArn
  * ModelVersion
  * Performance
    * F1Score
    * Precision
    * Recall
  * Status
  * StatusMessage

### ModelMetadataList
* ModelMetadataList `array`
  * items [ModelMetadata](#modelmetadata)

### ModelPerformance
* ModelPerformance `object`: Information about the evaluation performance of a trained model. 
  * F1Score
  * Precision
  * Recall

### ModelStatus
* ModelStatus `string` (values: TRAINING, TRAINED, TRAINING_FAILED, STARTING_HOSTING, HOSTED, HOSTING_FAILED, STOPPING_HOSTING, SYSTEM_UPDATING, DELETING)

### ModelStatusMessage
* ModelStatusMessage `string`

### ModelVersion
* ModelVersion `string`

### OutputConfig
* OutputConfig `object`: The S3 location where Amazon Lookout for Vision saves model training files.
  * S3Location **required**
    * Bucket **required**
    * Prefix

### OutputS3Object
* OutputS3Object `object`: The S3 location where Amazon Lookout for Vision saves training output.
  * Bucket **required**
  * Key **required**

### PageSize
* PageSize `integer`

### PaginationToken
* PaginationToken `string`

### ProjectArn
* ProjectArn `string`

### ProjectDescription
* ProjectDescription `object`: Describe an Amazon Lookout for Vision project. For more information, see <a>DescribeProject</a>.
  * CreationTimestamp
  * Datasets
    * items [DatasetMetadata](#datasetmetadata)
  * ProjectArn
  * ProjectName

### ProjectMetadata
* ProjectMetadata `object`: Metadata about an Amazon Lookout for Vision project.
  * CreationTimestamp
  * ProjectArn
  * ProjectName

### ProjectMetadataList
* ProjectMetadataList `array`
  * items [ProjectMetadata](#projectmetadata)

### ProjectName
* ProjectName `string`

### QueryString
* QueryString `string`

### ResourceNotFoundException


### S3BucketName
* S3BucketName `string`

### S3KeyPrefix
* S3KeyPrefix `string`

### S3Location
* S3Location `object`: Information about the location of a manifest file.
  * Bucket **required**
  * Prefix

### S3ObjectKey
* S3ObjectKey `string`

### S3ObjectVersion
* S3ObjectVersion `string`

### ServiceQuotaExceededException


### StartModelRequest
* StartModelRequest `object`
  * MinInferenceUnits **required**

### StartModelResponse
* StartModelResponse `object`
  * Status

### StopModelRequest
* StopModelRequest `object`

### StopModelResponse
* StopModelResponse `object`
  * Status

### Stream
* Stream `string`

### ThrottlingException


### UpdateDatasetEntriesRequest
* UpdateDatasetEntriesRequest `object`
  * Changes **required**

### UpdateDatasetEntriesResponse
* UpdateDatasetEntriesResponse `object`
  * Status

### ValidationException



