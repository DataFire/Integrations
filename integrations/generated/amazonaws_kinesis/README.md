# @datafire/amazonaws_kinesis

Client library for Amazon Kinesis

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_kinesis
```

```js
let datafire = require('datafire');
let amazonaws_kinesis = require('@datafire/amazonaws_kinesis').actions;
let context = new datafire.Context();

amazonaws_kinesis.AddTagsToStream({}, context).then(data => {
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

#### Parameters

### CreateStream



```js
amazonaws_kinesis.CreateStream({}, context)
```

#### Parameters

### DecreaseStreamRetentionPeriod



```js
amazonaws_kinesis.DecreaseStreamRetentionPeriod({}, context)
```

#### Parameters

### DeleteStream



```js
amazonaws_kinesis.DeleteStream({}, context)
```

#### Parameters

### DescribeLimits



```js
amazonaws_kinesis.DescribeLimits({}, context)
```

#### Parameters

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

#### Parameters

### EnableEnhancedMonitoring



```js
amazonaws_kinesis.EnableEnhancedMonitoring({}, context)
```

#### Parameters

### GetRecords



```js
amazonaws_kinesis.GetRecords({}, context)
```

#### Parameters

### GetShardIterator



```js
amazonaws_kinesis.GetShardIterator({}, context)
```

#### Parameters

### IncreaseStreamRetentionPeriod



```js
amazonaws_kinesis.IncreaseStreamRetentionPeriod({}, context)
```

#### Parameters

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

#### Parameters

### MergeShards



```js
amazonaws_kinesis.MergeShards({}, context)
```

#### Parameters

### PutRecord



```js
amazonaws_kinesis.PutRecord({}, context)
```

#### Parameters

### PutRecords



```js
amazonaws_kinesis.PutRecords({}, context)
```

#### Parameters

### RemoveTagsFromStream



```js
amazonaws_kinesis.RemoveTagsFromStream({}, context)
```

#### Parameters

### SplitShard



```js
amazonaws_kinesis.SplitShard({}, context)
```

#### Parameters

### UpdateShardCount



```js
amazonaws_kinesis.UpdateShardCount({}, context)
```

#### Parameters

