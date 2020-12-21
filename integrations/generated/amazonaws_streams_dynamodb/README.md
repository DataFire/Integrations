# @datafire/amazonaws_streams_dynamodb

Client library for Amazon DynamoDB Streams

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_streams_dynamodb
```
```js
let amazonaws_streams_dynamodb = require('@datafire/amazonaws_streams_dynamodb').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon DynamoDB</fullname> <p>Amazon DynamoDB Streams provides API actions for accessing streams and processing stream records. To learn more about application development with Streams, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html">Capturing Table Activity with DynamoDB Streams</a> in the Amazon DynamoDB Developer Guide.</p>

## Actions

### DescribeStream



```js
amazonaws_streams_dynamodb.DescribeStream({
  "StreamArn": null
}, context)
```

#### Input
* input `object`
  * ExclusiveStartShardId
  * Limit
  * StreamArn **required**

#### Output
* output [DescribeStreamOutput](#describestreamoutput)

### GetRecords



```js
amazonaws_streams_dynamodb.GetRecords({
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
amazonaws_streams_dynamodb.GetShardIterator({
  "StreamArn": null,
  "ShardId": null,
  "ShardIteratorType": null
}, context)
```

#### Input
* input `object`
  * SequenceNumber
  * ShardId **required**
  * ShardIteratorType **required**
  * StreamArn **required**

#### Output
* output [GetShardIteratorOutput](#getsharditeratoroutput)

### ListStreams



```js
amazonaws_streams_dynamodb.ListStreams({}, context)
```

#### Input
* input `object`
  * ExclusiveStartStreamArn
  * Limit
  * TableName

#### Output
* output [ListStreamsOutput](#liststreamsoutput)



## Definitions

### AttributeMap
* AttributeMap `object`

### AttributeName
* AttributeName `string`

### AttributeValue
* AttributeValue `object`: <p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
  * B
  * BOOL
  * BS
    * items [BinaryAttributeValue](#binaryattributevalue)
  * L
    * items [AttributeValue](#attributevalue)
  * M
  * N
  * NS
    * items [NumberAttributeValue](#numberattributevalue)
  * NULL
  * S
  * SS
    * items [StringAttributeValue](#stringattributevalue)

### BinaryAttributeValue
* BinaryAttributeValue `string`

### BinarySetAttributeValue
* BinarySetAttributeValue `array`
  * items [BinaryAttributeValue](#binaryattributevalue)

### BooleanAttributeValue
* BooleanAttributeValue `boolean`

### Date
* Date `string`

### DescribeStreamInput
* DescribeStreamInput `object`: Represents the input of a <code>DescribeStream</code> operation.
  * ExclusiveStartShardId
  * Limit
  * StreamArn **required**

### DescribeStreamOutput
* DescribeStreamOutput `object`: Represents the output of a <code>DescribeStream</code> operation.
  * StreamDescription
    * CreationRequestDateTime
    * KeySchema
      * items [KeySchemaElement](#keyschemaelement)
    * LastEvaluatedShardId
    * Shards
      * items [Shard](#shard)
    * StreamArn
    * StreamLabel
    * StreamStatus
    * StreamViewType
    * TableName

### ExpiredIteratorException


### GetRecordsInput
* GetRecordsInput `object`: Represents the input of a <code>GetRecords</code> operation.
  * Limit
  * ShardIterator **required**

### GetRecordsOutput
* GetRecordsOutput `object`: Represents the output of a <code>GetRecords</code> operation.
  * NextShardIterator
  * Records
    * items [Record](#record)

### GetShardIteratorInput
* GetShardIteratorInput `object`: Represents the input of a <code>GetShardIterator</code> operation.
  * SequenceNumber
  * ShardId **required**
  * ShardIteratorType **required**
  * StreamArn **required**

### GetShardIteratorOutput
* GetShardIteratorOutput `object`: Represents the output of a <code>GetShardIterator</code> operation.
  * ShardIterator

### Identity
* Identity `object`: Contains details about the type of identity that made the request.
  * PrincipalId
  * Type

### InternalServerError


### KeySchema
* KeySchema `array`
  * items [KeySchemaElement](#keyschemaelement)

### KeySchemaAttributeName
* KeySchemaAttributeName `string`

### KeySchemaElement
* KeySchemaElement `object`: <p>Represents <i>a single element</i> of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.</p> <p>A <code>KeySchemaElement</code> represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one <code>KeySchemaElement</code> (for the partition key). A composite primary key would require one <code>KeySchemaElement</code> for the partition key, and another <code>KeySchemaElement</code> for the sort key.</p> <p>A <code>KeySchemaElement</code> must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.</p>
  * AttributeName **required**
  * KeyType **required**

### KeyType
* KeyType `string` (values: HASH, RANGE)

### LimitExceededException


### ListAttributeValue
* ListAttributeValue `array`
  * items [AttributeValue](#attributevalue)

### ListStreamsInput
* ListStreamsInput `object`: Represents the input of a <code>ListStreams</code> operation.
  * ExclusiveStartStreamArn
  * Limit
  * TableName

### ListStreamsOutput
* ListStreamsOutput `object`: Represents the output of a <code>ListStreams</code> operation.
  * LastEvaluatedStreamArn
  * Streams
    * items [Stream](#stream)

### MapAttributeValue
* MapAttributeValue `object`

### NullAttributeValue
* NullAttributeValue `boolean`

### NumberAttributeValue
* NumberAttributeValue `string`

### NumberSetAttributeValue
* NumberSetAttributeValue `array`
  * items [NumberAttributeValue](#numberattributevalue)

### OperationType
* OperationType `string` (values: INSERT, MODIFY, REMOVE)

### PositiveIntegerObject
* PositiveIntegerObject `integer`

### PositiveLongObject
* PositiveLongObject `integer`

### Record
* Record `object`: A description of a unique event within a stream.
  * awsRegion
  * dynamodb
    * ApproximateCreationDateTime
    * Keys
    * NewImage
    * OldImage
    * SequenceNumber
    * SizeBytes
    * StreamViewType
  * eventID
  * eventName
  * eventSource
  * eventVersion
  * userIdentity
    * PrincipalId
    * Type

### RecordList
* RecordList `array`
  * items [Record](#record)

### ResourceNotFoundException


### SequenceNumber
* SequenceNumber `string`

### SequenceNumberRange
* SequenceNumberRange `object`: The beginning and ending sequence numbers for the stream records contained within a shard.
  * EndingSequenceNumber
  * StartingSequenceNumber

### Shard
* Shard `object`: A uniquely identified group of stream records within a stream.
  * ParentShardId
  * SequenceNumberRange
    * EndingSequenceNumber
    * StartingSequenceNumber
  * ShardId

### ShardDescriptionList
* ShardDescriptionList `array`
  * items [Shard](#shard)

### ShardId
* ShardId `string`

### ShardIterator
* ShardIterator `string`

### ShardIteratorType
* ShardIteratorType `string` (values: TRIM_HORIZON, LATEST, AT_SEQUENCE_NUMBER, AFTER_SEQUENCE_NUMBER)

### Stream
* Stream `object`: Represents all of the data describing a particular stream.
  * StreamArn
  * StreamLabel
  * TableName

### StreamArn
* StreamArn `string`

### StreamDescription
* StreamDescription `object`: Represents all of the data describing a particular stream.
  * CreationRequestDateTime
  * KeySchema
    * items [KeySchemaElement](#keyschemaelement)
  * LastEvaluatedShardId
  * Shards
    * items [Shard](#shard)
  * StreamArn
  * StreamLabel
  * StreamStatus
  * StreamViewType
  * TableName

### StreamList
* StreamList `array`
  * items [Stream](#stream)

### StreamRecord
* StreamRecord `object`: A description of a single data modification that was performed on an item in a DynamoDB table.
  * ApproximateCreationDateTime
  * Keys
  * NewImage
  * OldImage
  * SequenceNumber
  * SizeBytes
  * StreamViewType

### StreamStatus
* StreamStatus `string` (values: ENABLING, ENABLED, DISABLING, DISABLED)

### StreamViewType
* StreamViewType `string` (values: NEW_IMAGE, OLD_IMAGE, NEW_AND_OLD_IMAGES, KEYS_ONLY)

### String
* String `string`

### StringAttributeValue
* StringAttributeValue `string`

### StringSetAttributeValue
* StringSetAttributeValue `array`
  * items [StringAttributeValue](#stringattributevalue)

### TableName
* TableName `string`

### TrimmedDataAccessException



