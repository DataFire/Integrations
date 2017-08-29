# @datafire/amazonaws_kinesis

Client library for Amazon Kinesis

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_kinesis
```

```js
let datafire = require('datafire');
let amazonaws_kinesis = require('@datafire/amazonaws_kinesis').create();

amazonaws_kinesis.AddTagsToStream({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Kinesis Streams Service API Reference</fullname> <p>Amazon Kinesis Streams is a managed service that scales elastically for real time processing of streaming big data.</p>

## Actions
### AddTagsToStream



```js
amazonaws_kinesis.AddTagsToStream({}, context)
```


### CreateStream



```js
amazonaws_kinesis.CreateStream({}, context)
```


### DecreaseStreamRetentionPeriod



```js
amazonaws_kinesis.DecreaseStreamRetentionPeriod({}, context)
```


### DeleteStream



```js
amazonaws_kinesis.DeleteStream({}, context)
```


### DescribeLimits



```js
amazonaws_kinesis.DescribeLimits({}, context)
```


### DescribeStream



```js
amazonaws_kinesis.DescribeStream({}, context)
```

#### Parameters
* Limit (string)
* ExclusiveStartShardId (string)

### DisableEnhancedMonitoring



```js
amazonaws_kinesis.DisableEnhancedMonitoring({}, context)
```


### EnableEnhancedMonitoring



```js
amazonaws_kinesis.EnableEnhancedMonitoring({}, context)
```


### GetRecords



```js
amazonaws_kinesis.GetRecords({}, context)
```


### GetShardIterator



```js
amazonaws_kinesis.GetShardIterator({}, context)
```


### IncreaseStreamRetentionPeriod



```js
amazonaws_kinesis.IncreaseStreamRetentionPeriod({}, context)
```


### ListStreams



```js
amazonaws_kinesis.ListStreams({}, context)
```

#### Parameters
* Limit (string)
* ExclusiveStartStreamName (string)

### ListTagsForStream



```js
amazonaws_kinesis.ListTagsForStream({}, context)
```


### MergeShards



```js
amazonaws_kinesis.MergeShards({}, context)
```


### PutRecord



```js
amazonaws_kinesis.PutRecord({}, context)
```


### PutRecords



```js
amazonaws_kinesis.PutRecords({}, context)
```


### RemoveTagsFromStream



```js
amazonaws_kinesis.RemoveTagsFromStream({}, context)
```


### SplitShard



```js
amazonaws_kinesis.SplitShard({}, context)
```


### UpdateShardCount



```js
amazonaws_kinesis.UpdateShardCount({}, context)
```


