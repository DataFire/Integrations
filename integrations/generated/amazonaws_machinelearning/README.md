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
amazonaws_machinelearning.AddTags({}, context)
```


### CreateBatchPrediction



```js
amazonaws_machinelearning.CreateBatchPrediction({}, context)
```


### CreateDataSourceFromRDS



```js
amazonaws_machinelearning.CreateDataSourceFromRDS({}, context)
```


### CreateDataSourceFromRedshift



```js
amazonaws_machinelearning.CreateDataSourceFromRedshift({}, context)
```


### CreateDataSourceFromS3



```js
amazonaws_machinelearning.CreateDataSourceFromS3({}, context)
```


### CreateEvaluation



```js
amazonaws_machinelearning.CreateEvaluation({}, context)
```


### CreateMLModel



```js
amazonaws_machinelearning.CreateMLModel({}, context)
```


### CreateRealtimeEndpoint



```js
amazonaws_machinelearning.CreateRealtimeEndpoint({}, context)
```


### DeleteBatchPrediction



```js
amazonaws_machinelearning.DeleteBatchPrediction({}, context)
```


### DeleteDataSource



```js
amazonaws_machinelearning.DeleteDataSource({}, context)
```


### DeleteEvaluation



```js
amazonaws_machinelearning.DeleteEvaluation({}, context)
```


### DeleteMLModel



```js
amazonaws_machinelearning.DeleteMLModel({}, context)
```


### DeleteRealtimeEndpoint



```js
amazonaws_machinelearning.DeleteRealtimeEndpoint({}, context)
```


### DeleteTags



```js
amazonaws_machinelearning.DeleteTags({}, context)
```


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


### GetBatchPrediction



```js
amazonaws_machinelearning.GetBatchPrediction({}, context)
```


### GetDataSource



```js
amazonaws_machinelearning.GetDataSource({}, context)
```


### GetEvaluation



```js
amazonaws_machinelearning.GetEvaluation({}, context)
```


### GetMLModel



```js
amazonaws_machinelearning.GetMLModel({}, context)
```


### Predict



```js
amazonaws_machinelearning.Predict({}, context)
```


### UpdateBatchPrediction



```js
amazonaws_machinelearning.UpdateBatchPrediction({}, context)
```


### UpdateDataSource



```js
amazonaws_machinelearning.UpdateDataSource({}, context)
```


### UpdateEvaluation



```js
amazonaws_machinelearning.UpdateEvaluation({}, context)
```


### UpdateMLModel



```js
amazonaws_machinelearning.UpdateMLModel({}, context)
```


