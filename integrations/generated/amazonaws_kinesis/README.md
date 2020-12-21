# @datafire/amazonaws_kinesis

Client library for Amazon Kinesis

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_kinesis
```
```js
let amazonaws_kinesis = require('@datafire/amazonaws_kinesis').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Kinesis Data Streams Service API Reference</fullname> <p>Amazon Kinesis Data Streams is a managed service that scales elastically for real-time processing of streaming big data.</p>

## Actions

### AddTagsToStream



```js
amazonaws_kinesis.AddTagsToStream({
  "StreamName": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * StreamName **required**
  * Tags **required**

#### Output
*Output schema unknown*

### CreateStream



```js
amazonaws_kinesis.CreateStream({
  "StreamName": null,
  "ShardCount": null
}, context)
```

#### Input
* input `object`
  * ShardCount **required**
  * StreamName **required**

#### Output
*Output schema unknown*

### DecreaseStreamRetentionPeriod



```js
amazonaws_kinesis.DecreaseStreamRetentionPeriod({
  "StreamName": null,
  "RetentionPeriodHours": null
}, context)
```

#### Input
* input `object`
  * RetentionPeriodHours **required**
  * StreamName **required**

#### Output
*Output schema unknown*

### DeleteStream



```js
amazonaws_kinesis.DeleteStream({
  "StreamName": null
}, context)
```

#### Input
* input `object`
  * EnforceConsumerDeletion
  * StreamName **required**

#### Output
*Output schema unknown*

### DeregisterStreamConsumer



```js
amazonaws_kinesis.DeregisterStreamConsumer({}, context)
```

#### Input
* input `object`
  * ConsumerARN
  * ConsumerName
  * StreamARN

#### Output
*Output schema unknown*

### DescribeLimits



```js
amazonaws_kinesis.DescribeLimits({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeLimitsOutput](#describelimitsoutput)

### DescribeStream



```js
amazonaws_kinesis.DescribeStream({
  "StreamName": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * ExclusiveStartShardId `string`
  * ExclusiveStartShardId
  * Limit
  * StreamName **required**

#### Output
* output [DescribeStreamOutput](#describestreamoutput)

### DescribeStreamConsumer



```js
amazonaws_kinesis.DescribeStreamConsumer({}, context)
```

#### Input
* input `object`
  * ConsumerARN
  * ConsumerName
  * StreamARN

#### Output
* output [DescribeStreamConsumerOutput](#describestreamconsumeroutput)

### DescribeStreamSummary



```js
amazonaws_kinesis.DescribeStreamSummary({
  "StreamName": null
}, context)
```

#### Input
* input `object`
  * StreamName **required**

#### Output
* output [DescribeStreamSummaryOutput](#describestreamsummaryoutput)

### DisableEnhancedMonitoring



```js
amazonaws_kinesis.DisableEnhancedMonitoring({
  "StreamName": null,
  "ShardLevelMetrics": null
}, context)
```

#### Input
* input `object`
  * ShardLevelMetrics **required**
    * items [MetricsName](#metricsname)
  * StreamName **required**

#### Output
* output [EnhancedMonitoringOutput](#enhancedmonitoringoutput)

### EnableEnhancedMonitoring



```js
amazonaws_kinesis.EnableEnhancedMonitoring({
  "StreamName": null,
  "ShardLevelMetrics": null
}, context)
```

#### Input
* input `object`
  * ShardLevelMetrics **required**
    * items [MetricsName](#metricsname)
  * StreamName **required**

#### Output
* output [EnhancedMonitoringOutput](#enhancedmonitoringoutput)

### GetRecords



```js
amazonaws_kinesis.GetRecords({
  "ShardIterator": null
}, context)
```

#### Input
* input `object`
  * Limit
  * ShardIterator **required**

#### Output
* output [GetRecordsOutput](#getrecordsoutput)

### GetShardIterator



```js
amazonaws_kinesis.GetShardIterator({
  "StreamName": null,
  "ShardId": null,
  "ShardIteratorType": null
}, context)
```

#### Input
* input `object`
  * ShardId **required**
  * ShardIteratorType **required**
  * StartingSequenceNumber
  * StreamName **required**
  * Timestamp

#### Output
* output [GetShardIteratorOutput](#getsharditeratoroutput)

### IncreaseStreamRetentionPeriod



```js
amazonaws_kinesis.IncreaseStreamRetentionPeriod({
  "StreamName": null,
  "RetentionPeriodHours": null
}, context)
```

#### Input
* input `object`
  * RetentionPeriodHours **required**
  * StreamName **required**

#### Output
*Output schema unknown*

### ListShards



```js
amazonaws_kinesis.ListShards({}, context)
```

#### Input
* input `object`
  * ExclusiveStartShardId
  * MaxResults
  * NextToken
  * ShardFilter [ShardFilter](#shardfilter)
  * StreamCreationTimestamp
  * StreamName

#### Output
* output [ListShardsOutput](#listshardsoutput)

### ListStreamConsumers



```js
amazonaws_kinesis.ListStreamConsumers({
  "StreamARN": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * StreamARN **required**
  * StreamCreationTimestamp

#### Output
* output [ListStreamConsumersOutput](#liststreamconsumersoutput)

### ListStreams



```js
amazonaws_kinesis.ListStreams({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * ExclusiveStartStreamName `string`
  * ExclusiveStartStreamName
  * Limit

#### Output
* output [ListStreamsOutput](#liststreamsoutput)

### ListTagsForStream



```js
amazonaws_kinesis.ListTagsForStream({
  "StreamName": null
}, context)
```

#### Input
* input `object`
  * ExclusiveStartTagKey
  * Limit
  * StreamName **required**

#### Output
* output [ListTagsForStreamOutput](#listtagsforstreamoutput)

### MergeShards



```js
amazonaws_kinesis.MergeShards({
  "StreamName": null,
  "ShardToMerge": null,
  "AdjacentShardToMerge": null
}, context)
```

#### Input
* input `object`
  * AdjacentShardToMerge **required**
  * ShardToMerge **required**
  * StreamName **required**

#### Output
*Output schema unknown*

### PutRecord



```js
amazonaws_kinesis.PutRecord({
  "StreamName": null,
  "Data": null,
  "PartitionKey": null
}, context)
```

#### Input
* input `object`
  * Data **required**
  * ExplicitHashKey
  * PartitionKey **required**
  * SequenceNumberForOrdering
  * StreamName **required**

#### Output
* output [PutRecordOutput](#putrecordoutput)

### PutRecords



```js
amazonaws_kinesis.PutRecords({
  "Records": null,
  "StreamName": null
}, context)
```

#### Input
* input `object`
  * Records **required**
    * items [PutRecordsRequestEntry](#putrecordsrequestentry)
  * StreamName **required**

#### Output
* output [PutRecordsOutput](#putrecordsoutput)

### RegisterStreamConsumer



```js
amazonaws_kinesis.RegisterStreamConsumer({
  "StreamARN": null,
  "ConsumerName": null
}, context)
```

#### Input
* input `object`
  * ConsumerName **required**
  * StreamARN **required**

#### Output
* output [RegisterStreamConsumerOutput](#registerstreamconsumeroutput)

### RemoveTagsFromStream



```js
amazonaws_kinesis.RemoveTagsFromStream({
  "StreamName": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * StreamName **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
*Output schema unknown*

### SplitShard



```js
amazonaws_kinesis.SplitShard({
  "StreamName": null,
  "ShardToSplit": null,
  "NewStartingHashKey": null
}, context)
```

#### Input
* input `object`
  * NewStartingHashKey **required**
  * ShardToSplit **required**
  * StreamName **required**

#### Output
*Output schema unknown*

### StartStreamEncryption



```js
amazonaws_kinesis.StartStreamEncryption({
  "StreamName": null,
  "EncryptionType": null,
  "KeyId": null
}, context)
```

#### Input
* input `object`
  * EncryptionType **required**
  * KeyId **required**
  * StreamName **required**

#### Output
*Output schema unknown*

### StopStreamEncryption



```js
amazonaws_kinesis.StopStreamEncryption({
  "StreamName": null,
  "EncryptionType": null,
  "KeyId": null
}, context)
```

#### Input
* input `object`
  * EncryptionType **required**
  * KeyId **required**
  * StreamName **required**

#### Output
*Output schema unknown*

### UpdateShardCount



```js
amazonaws_kinesis.UpdateShardCount({
  "StreamName": null,
  "TargetShardCount": null,
  "ScalingType": null
}, context)
```

#### Input
* input `object`
  * ScalingType **required**
  * StreamName **required**
  * TargetShardCount **required**

#### Output
* output [UpdateShardCountOutput](#updateshardcountoutput)



## Definitions

### AddTagsToStreamInput
* AddTagsToStreamInput `object`: Represents the input for <code>AddTagsToStream</code>.
  * StreamName **required**
  * Tags **required**

### BooleanObject
* BooleanObject `boolean`

### ChildShard
* ChildShard `object`
  * HashKeyRange **required** [HashKeyRange](#hashkeyrange)
  * ParentShards **required** [ShardIdList](#shardidlist)
  * ShardId **required** [ShardId](#shardid)

### ChildShardList
* ChildShardList `array`
  * items [ChildShard](#childshard)

### Consumer
* Consumer `object`: An object that represents the details of the consumer you registered. This type of object is returned by <a>RegisterStreamConsumer</a>.
  * ConsumerARN **required**
  * ConsumerCreationTimestamp **required**
  * ConsumerName **required**
  * ConsumerStatus **required**

### ConsumerARN
* ConsumerARN `string`

### ConsumerCountObject
* ConsumerCountObject `integer`

### ConsumerDescription
* ConsumerDescription `object`: An object that represents the details of a registered consumer. This type of object is returned by <a>DescribeStreamConsumer</a>.
  * ConsumerARN **required**
  * ConsumerCreationTimestamp **required**
  * ConsumerName **required**
  * ConsumerStatus **required**
  * StreamARN **required**

### ConsumerList
* ConsumerList `array`
  * items [Consumer](#consumer)

### ConsumerName
* ConsumerName `string`

### ConsumerStatus
* ConsumerStatus `string` (values: CREATING, DELETING, ACTIVE)

### CreateStreamInput
* CreateStreamInput `object`: Represents the input for <code>CreateStream</code>.
  * ShardCount **required**
  * StreamName **required**

### Data
* Data `string`

### DecreaseStreamRetentionPeriodInput
* DecreaseStreamRetentionPeriodInput `object`: Represents the input for <a>DecreaseStreamRetentionPeriod</a>.
  * RetentionPeriodHours **required**
  * StreamName **required**

### DeleteStreamInput
* DeleteStreamInput `object`: Represents the input for <a>DeleteStream</a>.
  * EnforceConsumerDeletion
  * StreamName **required**

### DeregisterStreamConsumerInput
* DeregisterStreamConsumerInput `object`
  * ConsumerARN
  * ConsumerName
  * StreamARN

### DescribeLimitsInput
* DescribeLimitsInput `object`

### DescribeLimitsOutput
* DescribeLimitsOutput `object`
  * OpenShardCount **required**
  * ShardLimit **required**

### DescribeStreamConsumerInput
* DescribeStreamConsumerInput `object`
  * ConsumerARN
  * ConsumerName
  * StreamARN

### DescribeStreamConsumerOutput
* DescribeStreamConsumerOutput `object`
  * ConsumerDescription **required**
    * ConsumerARN **required**
    * ConsumerCreationTimestamp **required**
    * ConsumerName **required**
    * ConsumerStatus **required**
    * StreamARN **required**

### DescribeStreamInput
* DescribeStreamInput `object`: Represents the input for <code>DescribeStream</code>.
  * ExclusiveStartShardId
  * Limit
  * StreamName **required**

### DescribeStreamInputLimit
* DescribeStreamInputLimit `integer`

### DescribeStreamOutput
* DescribeStreamOutput `object`: Represents the output for <code>DescribeStream</code>.
  * StreamDescription **required**
    * EncryptionType
    * EnhancedMonitoring **required**
      * items [EnhancedMetrics](#enhancedmetrics)
    * HasMoreShards **required**
    * KeyId
    * RetentionPeriodHours **required**
    * Shards **required**
      * items [Shard](#shard)
    * StreamARN **required**
    * StreamCreationTimestamp **required**
    * StreamName **required**
    * StreamStatus **required**

### DescribeStreamSummaryInput
* DescribeStreamSummaryInput `object`
  * StreamName **required**

### DescribeStreamSummaryOutput
* DescribeStreamSummaryOutput `object`
  * StreamDescriptionSummary **required**
    * ConsumerCount
    * EncryptionType
    * EnhancedMonitoring **required**
      * items [EnhancedMetrics](#enhancedmetrics)
    * KeyId
    * OpenShardCount **required**
    * RetentionPeriodHours **required**
    * StreamARN **required**
    * StreamCreationTimestamp **required**
    * StreamName **required**
    * StreamStatus **required**

### DisableEnhancedMonitoringInput
* DisableEnhancedMonitoringInput `object`: Represents the input for <a>DisableEnhancedMonitoring</a>.
  * ShardLevelMetrics **required**
    * items [MetricsName](#metricsname)
  * StreamName **required**

### EnableEnhancedMonitoringInput
* EnableEnhancedMonitoringInput `object`: Represents the input for <a>EnableEnhancedMonitoring</a>.
  * ShardLevelMetrics **required**
    * items [MetricsName](#metricsname)
  * StreamName **required**

### EncryptionType
* EncryptionType `string` (values: NONE, KMS)

### EnhancedMetrics
* EnhancedMetrics `object`: Represents enhanced metrics types.
  * ShardLevelMetrics
    * items [MetricsName](#metricsname)

### EnhancedMonitoringList
* EnhancedMonitoringList `array`
  * items [EnhancedMetrics](#enhancedmetrics)

### EnhancedMonitoringOutput
* EnhancedMonitoringOutput `object`: Represents the output for <a>EnableEnhancedMonitoring</a> and <a>DisableEnhancedMonitoring</a>.
  * CurrentShardLevelMetrics
    * items [MetricsName](#metricsname)
  * DesiredShardLevelMetrics
    * items [MetricsName](#metricsname)
  * StreamName

### ErrorCode
* ErrorCode `string`

### ErrorMessage
* ErrorMessage `string`

### ExpiredIteratorException


### ExpiredNextTokenException


### GetRecordsInput
* GetRecordsInput `object`: Represents the input for <a>GetRecords</a>.
  * Limit
  * ShardIterator **required**

### GetRecordsInputLimit
* GetRecordsInputLimit `integer`

### GetRecordsOutput
* GetRecordsOutput `object`: Represents the output for <a>GetRecords</a>.
  * ChildShards [ChildShardList](#childshardlist)
  * MillisBehindLatest
  * NextShardIterator
  * Records **required**
    * items [Record](#record)

### GetShardIteratorInput
* GetShardIteratorInput `object`: Represents the input for <code>GetShardIterator</code>.
  * ShardId **required**
  * ShardIteratorType **required**
  * StartingSequenceNumber
  * StreamName **required**
  * Timestamp

### GetShardIteratorOutput
* GetShardIteratorOutput `object`: Represents the output for <code>GetShardIterator</code>.
  * ShardIterator

### HashKey
* HashKey `string`

### HashKeyRange
* HashKeyRange `object`: The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.
  * EndingHashKey **required**
  * StartingHashKey **required**

### IncreaseStreamRetentionPeriodInput
* IncreaseStreamRetentionPeriodInput `object`: Represents the input for <a>IncreaseStreamRetentionPeriod</a>.
  * RetentionPeriodHours **required**
  * StreamName **required**

### InvalidArgumentException


### KMSAccessDeniedException


### KMSDisabledException


### KMSInvalidStateException


### KMSNotFoundException


### KMSOptInRequired


### KMSThrottlingException


### KeyId
* KeyId `string`

### LimitExceededException


### ListShardsInput
* ListShardsInput `object`
  * ExclusiveStartShardId
  * MaxResults
  * NextToken
  * ShardFilter [ShardFilter](#shardfilter)
  * StreamCreationTimestamp
  * StreamName

### ListShardsInputLimit
* ListShardsInputLimit `integer`

### ListShardsOutput
* ListShardsOutput `object`
  * NextToken
  * Shards
    * items [Shard](#shard)

### ListStreamConsumersInput
* ListStreamConsumersInput `object`
  * MaxResults
  * NextToken
  * StreamARN **required**
  * StreamCreationTimestamp

### ListStreamConsumersInputLimit
* ListStreamConsumersInputLimit `integer`

### ListStreamConsumersOutput
* ListStreamConsumersOutput `object`
  * Consumers
    * items [Consumer](#consumer)
  * NextToken

### ListStreamsInput
* ListStreamsInput `object`: Represents the input for <code>ListStreams</code>.
  * ExclusiveStartStreamName
  * Limit

### ListStreamsInputLimit
* ListStreamsInputLimit `integer`

### ListStreamsOutput
* ListStreamsOutput `object`: Represents the output for <code>ListStreams</code>.
  * HasMoreStreams **required**
  * StreamNames **required**
    * items [StreamName](#streamname)

### ListTagsForStreamInput
* ListTagsForStreamInput `object`: Represents the input for <code>ListTagsForStream</code>.
  * ExclusiveStartTagKey
  * Limit
  * StreamName **required**

### ListTagsForStreamInputLimit
* ListTagsForStreamInputLimit `integer`

### ListTagsForStreamOutput
* ListTagsForStreamOutput `object`: Represents the output for <code>ListTagsForStream</code>.
  * HasMoreTags **required**
  * Tags **required**
    * items [Tag](#tag)

### MergeShardsInput
* MergeShardsInput `object`: Represents the input for <code>MergeShards</code>.
  * AdjacentShardToMerge **required**
  * ShardToMerge **required**
  * StreamName **required**

### MetricsName
* MetricsName `string` (values: IncomingBytes, IncomingRecords, OutgoingBytes, OutgoingRecords, WriteProvisionedThroughputExceeded, ReadProvisionedThroughputExceeded, IteratorAgeMilliseconds, ALL)

### MetricsNameList
* MetricsNameList `array`
  * items [MetricsName](#metricsname)

### MillisBehindLatest
* MillisBehindLatest `integer`

### NextToken
* NextToken `string`

### PartitionKey
* PartitionKey `string`

### PositiveIntegerObject
* PositiveIntegerObject `integer`

### ProvisionedThroughputExceededException


### PutRecordInput
* PutRecordInput `object`: Represents the input for <code>PutRecord</code>.
  * Data **required**
  * ExplicitHashKey
  * PartitionKey **required**
  * SequenceNumberForOrdering
  * StreamName **required**

### PutRecordOutput
* PutRecordOutput `object`: Represents the output for <code>PutRecord</code>.
  * EncryptionType
  * SequenceNumber **required**
  * ShardId **required**

### PutRecordsInput
* PutRecordsInput `object`: A <code>PutRecords</code> request.
  * Records **required**
    * items [PutRecordsRequestEntry](#putrecordsrequestentry)
  * StreamName **required**

### PutRecordsOutput
* PutRecordsOutput `object`:  <code>PutRecords</code> results.
  * EncryptionType
  * FailedRecordCount
  * Records **required**
    * items [PutRecordsResultEntry](#putrecordsresultentry)

### PutRecordsRequestEntry
* PutRecordsRequestEntry `object`: Represents the output for <code>PutRecords</code>.
  * Data **required**
  * ExplicitHashKey
  * PartitionKey **required**

### PutRecordsRequestEntryList
* PutRecordsRequestEntryList `array`
  * items [PutRecordsRequestEntry](#putrecordsrequestentry)

### PutRecordsResultEntry
* PutRecordsResultEntry `object`: Represents the result of an individual record from a <code>PutRecords</code> request. A record that is successfully added to a stream includes <code>SequenceNumber</code> and <code>ShardId</code> in the result. A record that fails to be added to the stream includes <code>ErrorCode</code> and <code>ErrorMessage</code> in the result.
  * ErrorCode
  * ErrorMessage
  * SequenceNumber
  * ShardId

### PutRecordsResultEntryList
* PutRecordsResultEntryList `array`
  * items [PutRecordsResultEntry](#putrecordsresultentry)

### Record
* Record `object`: The unit of data of the Kinesis data stream, which is composed of a sequence number, a partition key, and a data blob.
  * ApproximateArrivalTimestamp
  * Data **required**
  * EncryptionType
  * PartitionKey **required**
  * SequenceNumber **required**

### RecordList
* RecordList `array`
  * items [Record](#record)

### RegisterStreamConsumerInput
* RegisterStreamConsumerInput `object`
  * ConsumerName **required**
  * StreamARN **required**

### RegisterStreamConsumerOutput
* RegisterStreamConsumerOutput `object`
  * Consumer **required**
    * ConsumerARN **required**
    * ConsumerCreationTimestamp **required**
    * ConsumerName **required**
    * ConsumerStatus **required**

### RemoveTagsFromStreamInput
* RemoveTagsFromStreamInput `object`: Represents the input for <code>RemoveTagsFromStream</code>.
  * StreamName **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### ResourceInUseException


### ResourceNotFoundException


### RetentionPeriodHours
* RetentionPeriodHours `integer`

### ScalingType
* ScalingType `string` (values: UNIFORM_SCALING)

### SequenceNumber
* SequenceNumber `string`

### SequenceNumberRange
* SequenceNumberRange `object`: The range of possible sequence numbers for the shard.
  * EndingSequenceNumber
  * StartingSequenceNumber **required**

### Shard
* Shard `object`: A uniquely identified group of data records in a Kinesis data stream.
  * AdjacentParentShardId
  * HashKeyRange **required**
    * EndingHashKey **required**
    * StartingHashKey **required**
  * ParentShardId
  * SequenceNumberRange **required**
    * EndingSequenceNumber
    * StartingSequenceNumber **required**
  * ShardId **required**

### ShardCountObject
* ShardCountObject `integer`

### ShardFilter
* ShardFilter `object`
  * ShardId [ShardId](#shardid)
  * Timestamp [Timestamp](#timestamp)
  * Type **required** [ShardFilterType](#shardfiltertype)

### ShardFilterType
* ShardFilterType `string` (values: AFTER_SHARD_ID, AT_TRIM_HORIZON, FROM_TRIM_HORIZON, AT_LATEST, AT_TIMESTAMP, FROM_TIMESTAMP)

### ShardId
* ShardId `string`

### ShardIdList
* ShardIdList `array`
  * items [ShardId](#shardid)

### ShardIterator
* ShardIterator `string`

### ShardIteratorType
* ShardIteratorType `string` (values: AT_SEQUENCE_NUMBER, AFTER_SEQUENCE_NUMBER, TRIM_HORIZON, LATEST, AT_TIMESTAMP)

### ShardList
* ShardList `array`
  * items [Shard](#shard)

### SplitShardInput
* SplitShardInput `object`: Represents the input for <code>SplitShard</code>.
  * NewStartingHashKey **required**
  * ShardToSplit **required**
  * StreamName **required**

### StartStreamEncryptionInput
* StartStreamEncryptionInput `object`
  * EncryptionType **required**
  * KeyId **required**
  * StreamName **required**

### StopStreamEncryptionInput
* StopStreamEncryptionInput `object`
  * EncryptionType **required**
  * KeyId **required**
  * StreamName **required**

### StreamARN
* StreamARN `string`

### StreamDescription
* StreamDescription `object`: Represents the output for <a>DescribeStream</a>.
  * EncryptionType
  * EnhancedMonitoring **required**
    * items [EnhancedMetrics](#enhancedmetrics)
  * HasMoreShards **required**
  * KeyId
  * RetentionPeriodHours **required**
  * Shards **required**
    * items [Shard](#shard)
  * StreamARN **required**
  * StreamCreationTimestamp **required**
  * StreamName **required**
  * StreamStatus **required**

### StreamDescriptionSummary
* StreamDescriptionSummary `object`: Represents the output for <a>DescribeStreamSummary</a> 
  * ConsumerCount
  * EncryptionType
  * EnhancedMonitoring **required**
    * items [EnhancedMetrics](#enhancedmetrics)
  * KeyId
  * OpenShardCount **required**
  * RetentionPeriodHours **required**
  * StreamARN **required**
  * StreamCreationTimestamp **required**
  * StreamName **required**
  * StreamStatus **required**

### StreamName
* StreamName `string`

### StreamNameList
* StreamNameList `array`
  * items [StreamName](#streamname)

### StreamStatus
* StreamStatus `string` (values: CREATING, DELETING, ACTIVE, UPDATING)

### Tag
* Tag `object`: Metadata assigned to the stream, consisting of a key-value pair.
  * Key **required**
  * Value

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagMap
* TagMap `object`

### TagValue
* TagValue `string`

### Timestamp
* Timestamp `string`

### UpdateShardCountInput
* UpdateShardCountInput `object`
  * ScalingType **required**
  * StreamName **required**
  * TargetShardCount **required**

### UpdateShardCountOutput
* UpdateShardCountOutput `object`
  * CurrentShardCount
  * StreamName
  * TargetShardCount


