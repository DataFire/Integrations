# @datafire/amazonaws_kinesis

Client library for Amazon Kinesis

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_kinesis
```

```js
let datafire = require('datafire');
let amazonaws_kinesis = require('@datafire/amazonaws_kinesis').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_kinesis.AddTagsToStream({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Kinesis Streams Service API Reference</fullname> <p>Amazon Kinesis Streams is a managed service that scales elastically for real time processing of streaming big data.</p>

## Actions
### AddTagsToStream



```js
amazonaws_kinesis.AddTagsToStream({
  "StreamName": "",
  "Tags": []
}, context)
```

#### Parameters
* StreamName (string) **required**
* Tags (array) **required**

### CreateStream



```js
amazonaws_kinesis.CreateStream({
  "StreamName": "",
  "ShardCount": 0
}, context)
```

#### Parameters
* ShardCount (integer) **required**
* StreamName (string) **required**

### DecreaseStreamRetentionPeriod



```js
amazonaws_kinesis.DecreaseStreamRetentionPeriod({
  "StreamName": "",
  "RetentionPeriodHours": 0
}, context)
```

#### Parameters
* RetentionPeriodHours (integer) **required**
* StreamName (string) **required**

### DeleteStream



```js
amazonaws_kinesis.DeleteStream({
  "StreamName": ""
}, context)
```

#### Parameters
* StreamName (string) **required**

### DescribeLimits



```js
amazonaws_kinesis.DescribeLimits({}, context)
```

#### Parameters
*This action has no parameters*

### DescribeStream



```js
amazonaws_kinesis.DescribeStream({
  "StreamName": ""
}, context)
```

#### Parameters
* Limit (string)
* ExclusiveStartShardId (string)
* ExclusiveStartShardId (string)
* Limit (integer)
* StreamName (string) **required**

### DisableEnhancedMonitoring



```js
amazonaws_kinesis.DisableEnhancedMonitoring({
  "StreamName": "",
  "ShardLevelMetrics": []
}, context)
```

#### Parameters
* ShardLevelMetrics (array) **required**
* StreamName (string) **required**

### EnableEnhancedMonitoring



```js
amazonaws_kinesis.EnableEnhancedMonitoring({
  "StreamName": "",
  "ShardLevelMetrics": []
}, context)
```

#### Parameters
* ShardLevelMetrics (array) **required**
* StreamName (string) **required**

### GetRecords



```js
amazonaws_kinesis.GetRecords({
  "ShardIterator": ""
}, context)
```

#### Parameters
* Limit (integer)
* ShardIterator (string) **required**

### GetShardIterator



```js
amazonaws_kinesis.GetShardIterator({
  "StreamName": "",
  "ShardId": "",
  "ShardIteratorType": ""
}, context)
```

#### Parameters
* ShardId (string) **required**
* ShardIteratorType (string) **required**
* StartingSequenceNumber (string)
* StreamName (string) **required**
* Timestamp (string)

### IncreaseStreamRetentionPeriod



```js
amazonaws_kinesis.IncreaseStreamRetentionPeriod({
  "StreamName": "",
  "RetentionPeriodHours": 0
}, context)
```

#### Parameters
* RetentionPeriodHours (integer) **required**
* StreamName (string) **required**

### ListStreams



```js
amazonaws_kinesis.ListStreams({}, context)
```

#### Parameters
* Limit (string)
* ExclusiveStartStreamName (string)
* ExclusiveStartStreamName (string)
* Limit (integer)

### ListTagsForStream



```js
amazonaws_kinesis.ListTagsForStream({
  "StreamName": ""
}, context)
```

#### Parameters
* ExclusiveStartTagKey (string)
* Limit (integer)
* StreamName (string) **required**

### MergeShards



```js
amazonaws_kinesis.MergeShards({
  "StreamName": "",
  "ShardToMerge": "",
  "AdjacentShardToMerge": ""
}, context)
```

#### Parameters
* AdjacentShardToMerge (string) **required**
* ShardToMerge (string) **required**
* StreamName (string) **required**

### PutRecord



```js
amazonaws_kinesis.PutRecord({
  "StreamName": "",
  "Data": "",
  "PartitionKey": ""
}, context)
```

#### Parameters
* Data (string) **required**
* ExplicitHashKey (string)
* PartitionKey (string) **required**
* SequenceNumberForOrdering (string)
* StreamName (string) **required**

### PutRecords



```js
amazonaws_kinesis.PutRecords({
  "Records": [],
  "StreamName": ""
}, context)
```

#### Parameters
* Records (array) **required**
* StreamName (string) **required**

### RemoveTagsFromStream



```js
amazonaws_kinesis.RemoveTagsFromStream({
  "StreamName": "",
  "TagKeys": []
}, context)
```

#### Parameters
* StreamName (string) **required**
* TagKeys (array) **required**

### SplitShard



```js
amazonaws_kinesis.SplitShard({
  "StreamName": "",
  "ShardToSplit": "",
  "NewStartingHashKey": ""
}, context)
```

#### Parameters
* NewStartingHashKey (string) **required**
* ShardToSplit (string) **required**
* StreamName (string) **required**

### UpdateShardCount



```js
amazonaws_kinesis.UpdateShardCount({
  "StreamName": "",
  "TargetShardCount": 0,
  "ScalingType": ""
}, context)
```

#### Parameters
* ScalingType (string) **required**
* StreamName (string) **required**
* TargetShardCount (integer) **required**

