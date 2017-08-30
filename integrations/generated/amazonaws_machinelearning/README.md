# @datafire/amazonaws_machinelearning

Client library for Amazon Machine Learning

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_machinelearning
```

```js
let datafire = require('datafire');
let amazonaws_machinelearning = require('@datafire/amazonaws_machinelearning').create();

amazonaws_machinelearning.AddTags({}).then(data => {
  console.log(data);
})
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

#### Parameters
* ResourceId (string) **required**
* ResourceType (string) **required**
* Tags (array) **required**

### CreateBatchPrediction



```js
amazonaws_machinelearning.CreateBatchPrediction({
  "BatchPredictionId": "",
  "MLModelId": "",
  "BatchPredictionDataSourceId": "",
  "OutputUri": ""
}, context)
```

#### Parameters
* BatchPredictionDataSourceId (string) **required**
* BatchPredictionId (string) **required**
* BatchPredictionName (string) - A user-supplied name or description of the Amazon ML resource.
* MLModelId (string) **required**
* OutputUri (string) **required** - A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).

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

#### Parameters
* ComputeStatistics (boolean)
* DataSourceId (string) **required**
* DataSourceName (string) - A user-supplied name or description of the Amazon ML resource.
* RDSData (object) **required** - The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>.
* RoleARN (string) **required** - The Amazon Resource Name (ARN) of an <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename. 

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

#### Parameters
* ComputeStatistics (boolean)
* DataSourceId (string) **required**
* DataSourceName (string) - A user-supplied name or description of the Amazon ML resource.
* DataSpec (object) **required** - Describes the data specification of an Amazon Redshift <code>DataSource</code>.
* RoleARN (string) **required** - The Amazon Resource Name (ARN) of an <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename. 

### CreateDataSourceFromS3



```js
amazonaws_machinelearning.CreateDataSourceFromS3({
  "DataSourceId": "",
  "DataSpec": {
    "DataLocationS3": ""
  }
}, context)
```

#### Parameters
* ComputeStatistics (boolean)
* DataSourceId (string) **required**
* DataSourceName (string) - A user-supplied name or description of the Amazon ML resource.
* DataSpec (object) **required** -  Describes the data specification of a <code>DataSource</code>.

### CreateEvaluation



```js
amazonaws_machinelearning.CreateEvaluation({
  "EvaluationId": "",
  "MLModelId": "",
  "EvaluationDataSourceId": ""
}, context)
```

#### Parameters
* EvaluationDataSourceId (string) **required**
* EvaluationId (string) **required**
* EvaluationName (string) - A user-supplied name or description of the Amazon ML resource.
* MLModelId (string) **required**

### CreateMLModel



```js
amazonaws_machinelearning.CreateMLModel({
  "MLModelId": "",
  "MLModelType": "",
  "TrainingDataSourceId": ""
}, context)
```

#### Parameters
* MLModelId (string) **required**
* MLModelName (string) - A user-supplied name or description of the Amazon ML resource.
* MLModelType (string) **required**
* Parameters (array)
* Recipe (string)
* RecipeUri (string) - A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
* TrainingDataSourceId (string) **required**

### CreateRealtimeEndpoint



```js
amazonaws_machinelearning.CreateRealtimeEndpoint({
  "MLModelId": ""
}, context)
```

#### Parameters
* MLModelId (string) **required**

### DeleteBatchPrediction



```js
amazonaws_machinelearning.DeleteBatchPrediction({
  "BatchPredictionId": ""
}, context)
```

#### Parameters
* BatchPredictionId (string) **required**

### DeleteDataSource



```js
amazonaws_machinelearning.DeleteDataSource({
  "DataSourceId": ""
}, context)
```

#### Parameters
* DataSourceId (string) **required**

### DeleteEvaluation



```js
amazonaws_machinelearning.DeleteEvaluation({
  "EvaluationId": ""
}, context)
```

#### Parameters
* EvaluationId (string) **required**

### DeleteMLModel



```js
amazonaws_machinelearning.DeleteMLModel({
  "MLModelId": ""
}, context)
```

#### Parameters
* MLModelId (string) **required**

### DeleteRealtimeEndpoint



```js
amazonaws_machinelearning.DeleteRealtimeEndpoint({
  "MLModelId": ""
}, context)
```

#### Parameters
* MLModelId (string) **required**

### DeleteTags



```js
amazonaws_machinelearning.DeleteTags({
  "TagKeys": [],
  "ResourceId": "",
  "ResourceType": ""
}, context)
```

#### Parameters
* ResourceId (string) **required**
* ResourceType (string) **required**
* TagKeys (array) **required**

### DescribeBatchPredictions



```js
amazonaws_machinelearning.DescribeBatchPredictions({}, context)
```

#### Parameters
* Limit (string)
* NextToken (string)
* EQ (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* FilterVariable (string) - <p>A list of the variables to use in searching or filtering <code>BatchPrediction</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>BatchPrediction</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>BatchPrediction</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>BatchPrediction</code><b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>BatchPrediction</code> creation.</li> <li> <code>MLModelId</code> - Sets the search criteria to the <code>MLModel</code> used in the <code>BatchPrediction</code>.</li> <li> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in the <code>BatchPrediction</code>.</li> <li> <code>DataURI</code> - Sets the search criteria to the data file(s) used in the <code>BatchPrediction</code>. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> </ul>
* GE (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* GT (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* LE (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* LT (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* Limit (integer)
* NE (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* NextToken (string) - String type.
* Prefix (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* SortOrder (string) - <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul>

### DescribeDataSources



```js
amazonaws_machinelearning.DescribeDataSources({}, context)
```

#### Parameters
* Limit (string)
* NextToken (string)
* EQ (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* FilterVariable (string) - <p>A list of the variables to use in searching or filtering <code>DataSource</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>DataSource</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>DataSource</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>DataSource</code> <b> </b> <code>Name</code>.</li> <li> <code>DataUri</code> - Sets the search criteria to the URI of data files used to create the <code>DataSource</code>. The URI can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>DataSource</code> creation.</li> </ul> <note><title>Note</title> <p>The variable names should match the variable names in the <code>DataSource</code>.</p> </note>
* GE (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* GT (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* LE (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* LT (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* Limit (integer)
* NE (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* NextToken (string) - String type.
* Prefix (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* SortOrder (string) - <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul>

### DescribeEvaluations



```js
amazonaws_machinelearning.DescribeEvaluations({}, context)
```

#### Parameters
* Limit (string)
* NextToken (string)
* EQ (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* FilterVariable (string) - <p>A list of the variables to use in searching or filtering <code>Evaluation</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>Evaluation</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>Evaluation</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>Evaluation</code> <b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked an evaluation.</li> <li> <code>MLModelId</code> - Sets the search criteria to the <code>Predictor</code> that was evaluated.</li> <li> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in evaluation.</li> <li> <code>DataUri</code> - Sets the search criteria to the data file(s) used in evaluation. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> </ul>
* GE (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* GT (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* LE (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* LT (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* Limit (integer)
* NE (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* NextToken (string) - String type.
* Prefix (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* SortOrder (string) - <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul>

### DescribeMLModels



```js
amazonaws_machinelearning.DescribeMLModels({}, context)
```

#### Parameters
* Limit (string)
* NextToken (string)
* EQ (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* FilterVariable (string)
* GE (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* GT (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* LE (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* LT (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* Limit (integer)
* NE (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* NextToken (string) - String type.
* Prefix (string) - The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
* SortOrder (string) - <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul>

### DescribeTags



```js
amazonaws_machinelearning.DescribeTags({
  "ResourceId": "",
  "ResourceType": ""
}, context)
```

#### Parameters
* ResourceId (string) **required**
* ResourceType (string) **required**

### GetBatchPrediction



```js
amazonaws_machinelearning.GetBatchPrediction({
  "BatchPredictionId": ""
}, context)
```

#### Parameters
* BatchPredictionId (string) **required**

### GetDataSource



```js
amazonaws_machinelearning.GetDataSource({
  "DataSourceId": ""
}, context)
```

#### Parameters
* DataSourceId (string) **required**
* Verbose (boolean) - Specifies whether a describe operation should return exhaustive or abbreviated information.

### GetEvaluation



```js
amazonaws_machinelearning.GetEvaluation({
  "EvaluationId": ""
}, context)
```

#### Parameters
* EvaluationId (string) **required**

### GetMLModel



```js
amazonaws_machinelearning.GetMLModel({
  "MLModelId": ""
}, context)
```

#### Parameters
* MLModelId (string) **required**
* Verbose (boolean) - Specifies whether a describe operation should return exhaustive or abbreviated information.

### Predict



```js
amazonaws_machinelearning.Predict({
  "MLModelId": "",
  "Record": [],
  "PredictEndpoint": ""
}, context)
```

#### Parameters
* MLModelId (string) **required**
* PredictEndpoint (string) **required**
* Record (array) **required** - A map of variable name-value pairs that represent an observation.

### UpdateBatchPrediction



```js
amazonaws_machinelearning.UpdateBatchPrediction({
  "BatchPredictionId": "",
  "BatchPredictionName": ""
}, context)
```

#### Parameters
* BatchPredictionId (string) **required**
* BatchPredictionName (string) **required** - A user-supplied name or description of the Amazon ML resource.

### UpdateDataSource



```js
amazonaws_machinelearning.UpdateDataSource({
  "DataSourceId": "",
  "DataSourceName": ""
}, context)
```

#### Parameters
* DataSourceId (string) **required**
* DataSourceName (string) **required** - A user-supplied name or description of the Amazon ML resource.

### UpdateEvaluation



```js
amazonaws_machinelearning.UpdateEvaluation({
  "EvaluationId": "",
  "EvaluationName": ""
}, context)
```

#### Parameters
* EvaluationId (string) **required**
* EvaluationName (string) **required** - A user-supplied name or description of the Amazon ML resource.

### UpdateMLModel



```js
amazonaws_machinelearning.UpdateMLModel({
  "MLModelId": ""
}, context)
```

#### Parameters
* MLModelId (string) **required**
* MLModelName (string) - A user-supplied name or description of the Amazon ML resource.
* ScoreThreshold (number)

