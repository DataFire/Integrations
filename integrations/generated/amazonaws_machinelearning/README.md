# @datafire/amazonaws_machinelearning

Client library for Amazon Machine Learning

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_machinelearning
```

```js
let datafire = require('datafire');
let amazonaws_machinelearning = require('@datafire/amazonaws_machinelearning').actions;
let context = new datafire.Context();

amazonaws_machinelearning.AddTags({}, context).then(data => {
  console.log(data);
})
```

## Description
Definition of the public APIs exposed by Amazon Machine Learning

## Actions
### AddTags



```js
amazonaws_machinelearning.AddTags({}, context)
```

#### Parameters

### CreateBatchPrediction



```js
amazonaws_machinelearning.CreateBatchPrediction({}, context)
```

#### Parameters

### CreateDataSourceFromRDS



```js
amazonaws_machinelearning.CreateDataSourceFromRDS({}, context)
```

#### Parameters

### CreateDataSourceFromRedshift



```js
amazonaws_machinelearning.CreateDataSourceFromRedshift({}, context)
```

#### Parameters

### CreateDataSourceFromS3



```js
amazonaws_machinelearning.CreateDataSourceFromS3({}, context)
```

#### Parameters

### CreateEvaluation



```js
amazonaws_machinelearning.CreateEvaluation({}, context)
```

#### Parameters

### CreateMLModel



```js
amazonaws_machinelearning.CreateMLModel({}, context)
```

#### Parameters

### CreateRealtimeEndpoint



```js
amazonaws_machinelearning.CreateRealtimeEndpoint({}, context)
```

#### Parameters

### DeleteBatchPrediction



```js
amazonaws_machinelearning.DeleteBatchPrediction({}, context)
```

#### Parameters

### DeleteDataSource



```js
amazonaws_machinelearning.DeleteDataSource({}, context)
```

#### Parameters

### DeleteEvaluation



```js
amazonaws_machinelearning.DeleteEvaluation({}, context)
```

#### Parameters

### DeleteMLModel



```js
amazonaws_machinelearning.DeleteMLModel({}, context)
```

#### Parameters

### DeleteRealtimeEndpoint



```js
amazonaws_machinelearning.DeleteRealtimeEndpoint({}, context)
```

#### Parameters

### DeleteTags



```js
amazonaws_machinelearning.DeleteTags({}, context)
```

#### Parameters

### DescribeBatchPredictions



```js
amazonaws_machinelearning.DescribeBatchPredictions({}, context)
```

#### Parameters
* Limit (string)
* NextToken (string)

### DescribeDataSources



```js
amazonaws_machinelearning.DescribeDataSources({}, context)
```

#### Parameters
* Limit (string)
* NextToken (string)

### DescribeEvaluations



```js
amazonaws_machinelearning.DescribeEvaluations({}, context)
```

#### Parameters
* Limit (string)
* NextToken (string)

### DescribeMLModels



```js
amazonaws_machinelearning.DescribeMLModels({}, context)
```

#### Parameters
* Limit (string)
* NextToken (string)

### DescribeTags



```js
amazonaws_machinelearning.DescribeTags({}, context)
```

#### Parameters

### GetBatchPrediction



```js
amazonaws_machinelearning.GetBatchPrediction({}, context)
```

#### Parameters

### GetDataSource



```js
amazonaws_machinelearning.GetDataSource({}, context)
```

#### Parameters

### GetEvaluation



```js
amazonaws_machinelearning.GetEvaluation({}, context)
```

#### Parameters

### GetMLModel



```js
amazonaws_machinelearning.GetMLModel({}, context)
```

#### Parameters

### Predict



```js
amazonaws_machinelearning.Predict({}, context)
```

#### Parameters

### UpdateBatchPrediction



```js
amazonaws_machinelearning.UpdateBatchPrediction({}, context)
```

#### Parameters

### UpdateDataSource



```js
amazonaws_machinelearning.UpdateDataSource({}, context)
```

#### Parameters

### UpdateEvaluation



```js
amazonaws_machinelearning.UpdateEvaluation({}, context)
```

#### Parameters

### UpdateMLModel



```js
amazonaws_machinelearning.UpdateMLModel({}, context)
```

#### Parameters

