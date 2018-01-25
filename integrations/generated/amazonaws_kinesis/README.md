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

amazonaws_kinesis.AddTagsToStream({
  "StreamName": "",
  "Tags": []
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * StreamName **required** [StreamName](#streamname)
  * Tags **required** [TagMap](#tagmap)

#### Output
*Output schema unknown*

### CreateStream



```js
amazonaws_kinesis.CreateStream({
  "StreamName": "",
  "ShardCount": 0
}, context)
```

#### Input
* input `object`
  * ShardCount **required** [PositiveIntegerObject](#positiveintegerobject)
  * StreamName **required** [StreamName](#streamname)

#### Output
*Output schema unknown*

### DecreaseStreamRetentionPeriod



```js
amazonaws_kinesis.DecreaseStreamRetentionPeriod({
  "StreamName": "",
  "RetentionPeriodHours": 0
}, context)
```

#### Input
* input `object`
  * RetentionPeriodHours **required** [PositiveIntegerObject](#positiveintegerobject)
  * StreamName **required** [StreamName](#streamname)

#### Output
*Output schema unknown*

### DeleteStream



```js
amazonaws_kinesis.DeleteStream({
  "StreamName": ""
}, context)
```

#### Input
* input `object`
  * StreamName **required** [StreamName](#streamname)

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
  "StreamName": ""
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * ExclusiveStartShardId `string`
  * ExclusiveStartShardId [ShardId](#shardid)
  * Limit [DescribeStreamInputLimit](#describestreaminputlimit)
  * StreamName **required** [StreamName](#streamname)

#### Output
* output [DescribeStreamOutput](#describestreamoutput)

### DisableEnhancedMonitoring



```js
amazonaws_kinesis.DisableEnhancedMonitoring({
  "StreamName": "",
  "ShardLevelMetrics": []
}, context)
```

#### Input
* input `object`
  * ShardLevelMetrics **required** [MetricsNameList](#metricsnamelist)
  * StreamName **required** [StreamName](#streamname)

#### Output
* output [EnhancedMonitoringOutput](#enhancedmonitoringoutput)

### EnableEnhancedMonitoring



```js
amazonaws_kinesis.EnableEnhancedMonitoring({
  "StreamName": "",
  "ShardLevelMetrics": []
}, context)
```

#### Input
* input `object`
  * ShardLevelMetrics **required** [MetricsNameList](#metricsnamelist)
  * StreamName **required** [StreamName](#streamname)

#### Output
* output [EnhancedMonitoringOutput](#enhancedmonitoringoutput)

### GetRecords



```js
amazonaws_kinesis.GetRecords({
  "ShardIterator": ""
}, context)
```

#### Input
* input `object`
  * Limit [GetRecordsInputLimit](#getrecordsinputlimit)
  * ShardIterator **required** [ShardIterator](#sharditerator)

#### Output
* output [GetRecordsOutput](#getrecordsoutput)

### GetShardIterator



```js
amazonaws_kinesis.GetShardIterator({
  "StreamName": "",
  "ShardId": "",
  "ShardIteratorType": ""
}, context)
```

#### Input
* input `object`
  * ShardId **required** [ShardId](#shardid)
  * ShardIteratorType **required** [ShardIteratorType](#sharditeratortype)
  * StartingSequenceNumber [SequenceNumber](#sequencenumber)
  * StreamName **required** [StreamName](#streamname)
  * Timestamp [Timestamp](#timestamp)

#### Output
* output [GetShardIteratorOutput](#getsharditeratoroutput)

### IncreaseStreamRetentionPeriod



```js
amazonaws_kinesis.IncreaseStreamRetentionPeriod({
  "StreamName": "",
  "RetentionPeriodHours": 0
}, context)
```

#### Input
* input `object`
  * RetentionPeriodHours **required** [PositiveIntegerObject](#positiveintegerobject)
  * StreamName **required** [StreamName](#streamname)

#### Output
*Output schema unknown*

### ListStreams



```js
amazonaws_kinesis.ListStreams({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * ExclusiveStartStreamName `string`
  * ExclusiveStartStreamName [StreamName](#streamname)
  * Limit [ListStreamsInputLimit](#liststreamsinputlimit)

#### Output
* output [ListStreamsOutput](#liststreamsoutput)

### ListTagsForStream



```js
amazonaws_kinesis.ListTagsForStream({
  "StreamName": ""
}, context)
```

#### Input
* input `object`
  * ExclusiveStartTagKey [TagKey](#tagkey)
  * Limit [ListTagsForStreamInputLimit](#listtagsforstreaminputlimit)
  * StreamName **required** [StreamName](#streamname)

#### Output
* output [ListTagsForStreamOutput](#listtagsforstreamoutput)

### MergeShards



```js
amazonaws_kinesis.MergeShards({
  "StreamName": "",
  "ShardToMerge": "",
  "AdjacentShardToMerge": ""
}, context)
```

#### Input
* input `object`
  * AdjacentShardToMerge **required** [ShardId](#shardid)
  * ShardToMerge **required** [ShardId](#shardid)
  * StreamName **required** [StreamName](#streamname)

#### Output
*Output schema unknown*

### PutRecord



```js
amazonaws_kinesis.PutRecord({
  "StreamName": "",
  "Data": "",
  "PartitionKey": ""
}, context)
```

#### Input
* input `object`
  * Data **required** [Data](#data)
  * ExplicitHashKey [HashKey](#hashkey)
  * PartitionKey **required** [PartitionKey](#partitionkey)
  * SequenceNumberForOrdering [SequenceNumber](#sequencenumber)
  * StreamName **required** [StreamName](#streamname)

#### Output
* output [PutRecordOutput](#putrecordoutput)

### PutRecords



```js
amazonaws_kinesis.PutRecords({
  "Records": [],
  "StreamName": ""
}, context)
```

#### Input
* input `object`
  * Records **required** [PutRecordsRequestEntryList](#putrecordsrequestentrylist)
  * StreamName **required** [StreamName](#streamname)

#### Output
* output [PutRecordsOutput](#putrecordsoutput)

### RemoveTagsFromStream



```js
amazonaws_kinesis.RemoveTagsFromStream({
  "StreamName": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * StreamName **required** [StreamName](#streamname)
  * TagKeys **required** [TagKeyList](#tagkeylist)

#### Output
*Output schema unknown*

### SplitShard



```js
amazonaws_kinesis.SplitShard({
  "StreamName": "",
  "ShardToSplit": "",
  "NewStartingHashKey": ""
}, context)
```

#### Input
* input `object`
  * NewStartingHashKey **required** [HashKey](#hashkey)
  * ShardToSplit **required** [ShardId](#shardid)
  * StreamName **required** [StreamName](#streamname)

#### Output
*Output schema unknown*

### StartStreamEncryption



```js
amazonaws_kinesis.StartStreamEncryption({
  "StreamName": "",
  "EncryptionType": "",
  "KeyId": ""
}, context)
```

#### Input
* input `object`
  * EncryptionType **required** [EncryptionType](#encryptiontype)
  * KeyId **required** [KeyId](#keyid)
  * StreamName **required** [StreamName](#streamname)

#### Output
*Output schema unknown*

### StopStreamEncryption



```js
amazonaws_kinesis.StopStreamEncryption({
  "StreamName": "",
  "EncryptionType": "",
  "KeyId": ""
}, context)
```

#### Input
* input `object`
  * EncryptionType **required** [EncryptionType](#encryptiontype)
  * KeyId **required** [KeyId](#keyid)
  * StreamName **required** [StreamName](#streamname)

#### Output
*Output schema unknown*

### UpdateShardCount



```js
amazonaws_kinesis.UpdateShardCount({
  "StreamName": "",
  "TargetShardCount": 0,
  "ScalingType": ""
}, context)
```

#### Input
* input `object`
  * ScalingType **required** [ScalingType](#scalingtype)
  * StreamName **required** [StreamName](#streamname)
  * TargetShardCount **required** [PositiveIntegerObject](#positiveintegerobject)

#### Output
* output [UpdateShardCountOutput](#updateshardcountoutput)



## Definitions

### AddTagsToStreamInput
* AddTagsToStreamInput `object`: Represents the input for <code>AddTagsToStream</code>.
  * StreamName **required** [StreamName](#streamname)
  * Tags **required** [TagMap](#tagmap)

### BooleanObject
* BooleanObject `boolean`

### CreateStreamInput
* CreateStreamInput `object`: Represents the input for <code>CreateStream</code>.
  * ShardCount **required** [PositiveIntegerObject](#positiveintegerobject)
  * StreamName **required** [StreamName](#streamname)

### Data
* Data `string`

### DecreaseStreamRetentionPeriodInput
* DecreaseStreamRetentionPeriodInput `object`: Represents the input for <a>DecreaseStreamRetentionPeriod</a>.
  * RetentionPeriodHours **required** [PositiveIntegerObject](#positiveintegerobject)
  * StreamName **required** [StreamName](#streamname)

### DeleteStreamInput
* DeleteStreamInput `object`: Represents the input for <a>DeleteStream</a>.
  * StreamName **required** [StreamName](#streamname)

### DescribeLimitsInput
* DescribeLimitsInput `object`

### DescribeLimitsOutput
* DescribeLimitsOutput `object`
  * OpenShardCount **required** [ShardCountObject](#shardcountobject)
  * ShardLimit **required** [ShardCountObject](#shardcountobject)

### DescribeStreamInput
* DescribeStreamInput `object`: Represents the input for <code>DescribeStream</code>.
  * ExclusiveStartShardId [ShardId](#shardid)
  * Limit [DescribeStreamInputLimit](#describestreaminputlimit)
  * StreamName **required** [StreamName](#streamname)

### DescribeStreamInputLimit
* DescribeStreamInputLimit `integer`

### DescribeStreamOutput
* DescribeStreamOutput `object`: Represents the output for <code>DescribeStream</code>.
  * StreamDescription **required** [StreamDescription](#streamdescription)

### DisableEnhancedMonitoringInput
* DisableEnhancedMonitoringInput `object`: Represents the input for <a>DisableEnhancedMonitoring</a>.
  * ShardLevelMetrics **required** [MetricsNameList](#metricsnamelist)
  * StreamName **required** [StreamName](#streamname)

### EnableEnhancedMonitoringInput
* EnableEnhancedMonitoringInput `object`: Represents the input for <a>EnableEnhancedMonitoring</a>.
  * ShardLevelMetrics **required** [MetricsNameList](#metricsnamelist)
  * StreamName **required** [StreamName](#streamname)

### EncryptionType
* EncryptionType `string` (values: NONE, KMS)

### EnhancedMetrics
* EnhancedMetrics `object`: Represents enhanced metrics types.
  * ShardLevelMetrics [MetricsNameList](#metricsnamelist)

### EnhancedMonitoringList
* EnhancedMonitoringList `array`
  * items [EnhancedMetrics](#enhancedmetrics)

### EnhancedMonitoringOutput
* EnhancedMonitoringOutput `object`: Represents the output for <a>EnableEnhancedMonitoring</a> and <a>DisableEnhancedMonitoring</a>.
  * CurrentShardLevelMetrics [MetricsNameList](#metricsnamelist)
  * DesiredShardLevelMetrics [MetricsNameList](#metricsnamelist)
  * StreamName [StreamName](#streamname)

### ErrorCode
* ErrorCode `string`

### ErrorMessage
* ErrorMessage `string`

### ExpiredIteratorException
* ExpiredIteratorException `object`: The provided iterator exceeds the maximum age allowed.
  * message [ErrorMessage](#errormessage)

### GetRecordsInput
* GetRecordsInput `object`: Represents the input for <a>GetRecords</a>.
  * Limit [GetRecordsInputLimit](#getrecordsinputlimit)
  * ShardIterator **required** [ShardIterator](#sharditerator)

### GetRecordsInputLimit
* GetRecordsInputLimit `integer`

### GetRecordsOutput
* GetRecordsOutput `object`: Represents the output for <a>GetRecords</a>.
  * MillisBehindLatest [MillisBehindLatest](#millisbehindlatest)
  * NextShardIterator [ShardIterator](#sharditerator)
  * Records **required** [RecordList](#recordlist)

### GetShardIteratorInput
* GetShardIteratorInput `object`: Represents the input for <code>GetShardIterator</code>.
  * ShardId **required** [ShardId](#shardid)
  * ShardIteratorType **required** [ShardIteratorType](#sharditeratortype)
  * StartingSequenceNumber [SequenceNumber](#sequencenumber)
  * StreamName **required** [StreamName](#streamname)
  * Timestamp [Timestamp](#timestamp)

### GetShardIteratorOutput
* GetShardIteratorOutput `object`: Represents the output for <code>GetShardIterator</code>.
  * ShardIterator [ShardIterator](#sharditerator)

### HashKey
* HashKey `string`

### HashKeyRange
* HashKeyRange `object`: The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.
  * EndingHashKey **required** [HashKey](#hashkey)
  * StartingHashKey **required** [HashKey](#hashkey)

### IncreaseStreamRetentionPeriodInput
* IncreaseStreamRetentionPeriodInput `object`: Represents the input for <a>IncreaseStreamRetentionPeriod</a>.
  * RetentionPeriodHours **required** [PositiveIntegerObject](#positiveintegerobject)
  * StreamName **required** [StreamName](#streamname)

### InvalidArgumentException
* InvalidArgumentException `object`: A specified parameter exceeds its restrictions, is not supported, or can't be used. For more information, see the returned message.
  * message [ErrorMessage](#errormessage)

### KMSAccessDeniedException
* KMSAccessDeniedException `object`: The ciphertext references a key that doesn't exist or that you don't have access to.
  * message [ErrorMessage](#errormessage)

### KMSDisabledException
* KMSDisabledException `object`: The request was rejected because the specified CMK isn't enabled.
  * message [ErrorMessage](#errormessage)

### KMSInvalidStateException
* KMSInvalidStateException `object`: The request was rejected because the state of the specified resource isn't valid for this request. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.
  * message [ErrorMessage](#errormessage)

### KMSNotFoundException
* KMSNotFoundException `object`: The request was rejected because the specified entity or resource couldn't be found.
  * message [ErrorMessage](#errormessage)

### KMSOptInRequired
* KMSOptInRequired `object`: The AWS access key ID needs a subscription for the service.
  * message [ErrorMessage](#errormessage)

### KMSThrottlingException
* KMSThrottlingException `object`: The request was denied due to request throttling. For more information about throttling, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second">Limits</a> in the <i>AWS Key Management Service Developer Guide</i>.
  * message [ErrorMessage](#errormessage)

### KeyId
* KeyId `string`

### LimitExceededException
* LimitExceededException `object`: The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed (5).
  * message [ErrorMessage](#errormessage)

### ListStreamsInput
* ListStreamsInput `object`: Represents the input for <code>ListStreams</code>.
  * ExclusiveStartStreamName [StreamName](#streamname)
  * Limit [ListStreamsInputLimit](#liststreamsinputlimit)

### ListStreamsInputLimit
* ListStreamsInputLimit `integer`

### ListStreamsOutput
* ListStreamsOutput `object`: Represents the output for <code>ListStreams</code>.
  * HasMoreStreams **required** [BooleanObject](#booleanobject)
  * StreamNames **required** [StreamNameList](#streamnamelist)

### ListTagsForStreamInput
* ListTagsForStreamInput `object`: Represents the input for <code>ListTagsForStream</code>.
  * ExclusiveStartTagKey [TagKey](#tagkey)
  * Limit [ListTagsForStreamInputLimit](#listtagsforstreaminputlimit)
  * StreamName **required** [StreamName](#streamname)

### ListTagsForStreamInputLimit
* ListTagsForStreamInputLimit `integer`

### ListTagsForStreamOutput
* ListTagsForStreamOutput `object`: Represents the output for <code>ListTagsForStream</code>.
  * HasMoreTags **required** [BooleanObject](#booleanobject)
  * Tags **required** [TagList](#taglist)

### MergeShardsInput
* MergeShardsInput `object`: Represents the input for <code>MergeShards</code>.
  * AdjacentShardToMerge **required** [ShardId](#shardid)
  * ShardToMerge **required** [ShardId](#shardid)
  * StreamName **required** [StreamName](#streamname)

### MetricsName
* MetricsName `string` (values: IncomingBytes, IncomingRecords, OutgoingBytes, OutgoingRecords, WriteProvisionedThroughputExceeded, ReadProvisionedThroughputExceeded, IteratorAgeMilliseconds, ALL)

### MetricsNameList
* MetricsNameList `array`
  * items [MetricsName](#metricsname)

### MillisBehindLatest
* MillisBehindLatest `integer`

### PartitionKey
* PartitionKey `string`

### PositiveIntegerObject
* PositiveIntegerObject `integer`

### ProvisionedThroughputExceededException
* ProvisionedThroughputExceededException `object`: The request rate for the stream is too high, or the requested data is too large for the available throughput. Reduce the frequency or size of your requests. For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Streams Limits</a> in the <i>Amazon Kinesis Streams Developer Guide</i>, and <a href="http://docs.aws.amazon.com/general/latest/gr/api-retries.html">Error Retries and Exponential Backoff in AWS</a> in the <i>AWS General Reference</i>.
  * message [ErrorMessage](#errormessage)

### PutRecordInput
* PutRecordInput `object`: Represents the input for <code>PutRecord</code>.
  * Data **required** [Data](#data)
  * ExplicitHashKey [HashKey](#hashkey)
  * PartitionKey **required** [PartitionKey](#partitionkey)
  * SequenceNumberForOrdering [SequenceNumber](#sequencenumber)
  * StreamName **required** [StreamName](#streamname)

### PutRecordOutput
* PutRecordOutput `object`: Represents the output for <code>PutRecord</code>.
  * EncryptionType [EncryptionType](#encryptiontype)
  * SequenceNumber **required** [SequenceNumber](#sequencenumber)
  * ShardId **required** [ShardId](#shardid)

### PutRecordsInput
* PutRecordsInput `object`: A <code>PutRecords</code> request.
  * Records **required** [PutRecordsRequestEntryList](#putrecordsrequestentrylist)
  * StreamName **required** [StreamName](#streamname)

### PutRecordsOutput
* PutRecordsOutput `object`:  <code>PutRecords</code> results.
  * EncryptionType [EncryptionType](#encryptiontype)
  * FailedRecordCount [PositiveIntegerObject](#positiveintegerobject)
  * Records **required** [PutRecordsResultEntryList](#putrecordsresultentrylist)

### PutRecordsRequestEntry
* PutRecordsRequestEntry `object`: Represents the output for <code>PutRecords</code>.
  * Data **required** [Data](#data)
  * ExplicitHashKey [HashKey](#hashkey)
  * PartitionKey **required** [PartitionKey](#partitionkey)

### PutRecordsRequestEntryList
* PutRecordsRequestEntryList `array`
  * items [PutRecordsRequestEntry](#putrecordsrequestentry)

### PutRecordsResultEntry
* PutRecordsResultEntry `object`: Represents the result of an individual record from a <code>PutRecords</code> request. A record that is successfully added to a stream includes <code>SequenceNumber</code> and <code>ShardId</code> in the result. A record that fails to be added to the stream includes <code>ErrorCode</code> and <code>ErrorMessage</code> in the result.
  * ErrorCode [ErrorCode](#errorcode)
  * ErrorMessage [ErrorMessage](#errormessage)
  * SequenceNumber [SequenceNumber](#sequencenumber)
  * ShardId [ShardId](#shardid)

### PutRecordsResultEntryList
* PutRecordsResultEntryList `array`
  * items [PutRecordsResultEntry](#putrecordsresultentry)

### Record
* Record `object`: The unit of data of the Amazon Kinesis stream, which is composed of a sequence number, a partition key, and a data blob.
  * ApproximateArrivalTimestamp [Timestamp](#timestamp)
  * Data **required** [Data](#data)
  * EncryptionType [EncryptionType](#encryptiontype)
  * PartitionKey **required** [PartitionKey](#partitionkey)
  * SequenceNumber **required** [SequenceNumber](#sequencenumber)

### RecordList
* RecordList `array`
  * items [Record](#record)

### RemoveTagsFromStreamInput
* RemoveTagsFromStreamInput `object`: Represents the input for <code>RemoveTagsFromStream</code>.
  * StreamName **required** [StreamName](#streamname)
  * TagKeys **required** [TagKeyList](#tagkeylist)

### ResourceInUseException
* ResourceInUseException `object`: The resource is not available for this operation. For successful operation, the resource needs to be in the <code>ACTIVE</code> state.
  * message [ErrorMessage](#errormessage)

### ResourceNotFoundException
* ResourceNotFoundException `object`: The requested resource could not be found. The stream might not be specified correctly.
  * message [ErrorMessage](#errormessage)

### ScalingType
* ScalingType `string` (values: UNIFORM_SCALING)

### SequenceNumber
* SequenceNumber `string`

### SequenceNumberRange
* SequenceNumberRange `object`: The range of possible sequence numbers for the shard.
  * EndingSequenceNumber [SequenceNumber](#sequencenumber)
  * StartingSequenceNumber **required** [SequenceNumber](#sequencenumber)

### Shard
* Shard `object`: A uniquely identified group of data records in an Amazon Kinesis stream.
  * AdjacentParentShardId [ShardId](#shardid)
  * HashKeyRange **required** [HashKeyRange](#hashkeyrange)
  * ParentShardId [ShardId](#shardid)
  * SequenceNumberRange **required** [SequenceNumberRange](#sequencenumberrange)
  * ShardId **required** [ShardId](#shardid)

### ShardCountObject
* ShardCountObject `integer`

### ShardId
* ShardId `string`

### ShardIterator
* ShardIterator `string`

### ShardIteratorType
* ShardIteratorType `string` (values: AT_SEQUENCE_NUMBER, AFTER_SEQUENCE_NUMBER, TRIM_HORIZON, LATEST, AT_TIMESTAMP)

### ShardList
* ShardList `array`
  * items [Shard](#shard)

### SplitShardInput
* SplitShardInput `object`: Represents the input for <code>SplitShard</code>.
  * NewStartingHashKey **required** [HashKey](#hashkey)
  * ShardToSplit **required** [ShardId](#shardid)
  * StreamName **required** [StreamName](#streamname)

### StartStreamEncryptionInput
* StartStreamEncryptionInput `object`
  * EncryptionType **required** [EncryptionType](#encryptiontype)
  * KeyId **required** [KeyId](#keyid)
  * StreamName **required** [StreamName](#streamname)

### StopStreamEncryptionInput
* StopStreamEncryptionInput `object`
  * EncryptionType **required** [EncryptionType](#encryptiontype)
  * KeyId **required** [KeyId](#keyid)
  * StreamName **required** [StreamName](#streamname)

### StreamARN
* StreamARN `string`

### StreamDescription
* StreamDescription `object`: Represents the output for <a>DescribeStream</a>.
  * EncryptionType [EncryptionType](#encryptiontype)
  * EnhancedMonitoring **required** [EnhancedMonitoringList](#enhancedmonitoringlist)
  * HasMoreShards **required** [BooleanObject](#booleanobject)
  * KeyId [KeyId](#keyid)
  * RetentionPeriodHours **required** [PositiveIntegerObject](#positiveintegerobject)
  * Shards **required** [ShardList](#shardlist)
  * StreamARN **required** [StreamARN](#streamarn)
  * StreamCreationTimestamp **required** [Timestamp](#timestamp)
  * StreamName **required** [StreamName](#streamname)
  * StreamStatus **required** [StreamStatus](#streamstatus)

### StreamName
* StreamName `string`

### StreamNameList
* StreamNameList `array`
  * items [StreamName](#streamname)

### StreamStatus
* StreamStatus `string` (values: CREATING, DELETING, ACTIVE, UPDATING)

### Tag
* Tag `object`: Metadata assigned to the stream, consisting of a key-value pair.
  * Key **required** [TagKey](#tagkey)
  * Value [TagValue](#tagvalue)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagMap
* TagMap `array`
  * items `object`
    * key [TagKey](#tagkey)
    * value [TagValue](#tagvalue)

### TagValue
* TagValue `string`

### Timestamp
* Timestamp `string`

### UpdateShardCountInput
* UpdateShardCountInput `object`
  * ScalingType **required** [ScalingType](#scalingtype)
  * StreamName **required** [StreamName](#streamname)
  * TargetShardCount **required** [PositiveIntegerObject](#positiveintegerobject)

### UpdateShardCountOutput
* UpdateShardCountOutput `object`
  * CurrentShardCount [PositiveIntegerObject](#positiveintegerobject)
  * StreamName [StreamName](#streamname)
  * TargetShardCount [PositiveIntegerObject](#positiveintegerobject)


