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

amazonaws_streams_dynamodb.DescribeStream({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>Amazon DynamoDB</fullname> <p>Amazon DynamoDB Streams provides API actions for accessing streams and processing stream records. To learn more about application development with Streams, see <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html">Capturing Table Activity with DynamoDB Streams</a> in the Amazon DynamoDB Developer Guide.</p>

## Actions

### DescribeStream



```js
amazonaws_streams_dynamodb.DescribeStream({
  "StreamArn": ""
}, context)
```

#### Input
* input `object`
  * ExclusiveStartShardId [ShardId](#shardid)
  * Limit [PositiveIntegerObject](#positiveintegerobject)
  * StreamArn **required** [StreamArn](#streamarn)

#### Output
* output [DescribeStreamOutput](#describestreamoutput)

### GetRecords



```js
amazonaws_streams_dynamodb.GetRecords({
  "ShardIterator": ""
}, context)
```

#### Input
* input `object`
  * Limit [PositiveIntegerObject](#positiveintegerobject)
  * ShardIterator **required** [ShardIterator](#sharditerator)

#### Output
* output [GetRecordsOutput](#getrecordsoutput)

### GetShardIterator



```js
amazonaws_streams_dynamodb.GetShardIterator({
  "StreamArn": "",
  "ShardId": "",
  "ShardIteratorType": ""
}, context)
```

#### Input
* input `object`
  * SequenceNumber [SequenceNumber](#sequencenumber)
  * ShardId **required** [ShardId](#shardid)
  * ShardIteratorType **required** [ShardIteratorType](#sharditeratortype)
  * StreamArn **required** [StreamArn](#streamarn)

#### Output
* output [GetShardIteratorOutput](#getsharditeratoroutput)

### ListStreams



```js
amazonaws_streams_dynamodb.ListStreams({}, context)
```

#### Input
* input `object`
  * ExclusiveStartStreamArn [StreamArn](#streamarn)
  * Limit [PositiveIntegerObject](#positiveintegerobject)
  * TableName [TableName](#tablename)

#### Output
* output [ListStreamsOutput](#liststreamsoutput)



## Definitions

### AttributeMap
* AttributeMap `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [AttributeValue](#attributevalue)

### AttributeName
* AttributeName `string`

### AttributeValue
* AttributeValue `object`: <p>Represents the data for an attribute. You can set one, and only one, of the elements.</p> <p>Each attribute in an item is a name-value pair. An attribute can be single-valued or multi-valued set. For example, a book item can have title and authors attributes. Each book has one title but can have many authors. The multi-valued attribute is a set; duplicate values are not allowed.</p>
  * B [BinaryAttributeValue](#binaryattributevalue)
  * BOOL [BooleanAttributeValue](#booleanattributevalue)
  * BS [BinarySetAttributeValue](#binarysetattributevalue)
  * L [ListAttributeValue](#listattributevalue)
  * M [MapAttributeValue](#mapattributevalue)
  * N [NumberAttributeValue](#numberattributevalue)
  * NS [NumberSetAttributeValue](#numbersetattributevalue)
  * NULL [NullAttributeValue](#nullattributevalue)
  * S [StringAttributeValue](#stringattributevalue)
  * SS [StringSetAttributeValue](#stringsetattributevalue)

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
  * ExclusiveStartShardId [ShardId](#shardid)
  * Limit [PositiveIntegerObject](#positiveintegerobject)
  * StreamArn **required** [StreamArn](#streamarn)

### DescribeStreamOutput
* DescribeStreamOutput `object`: Represents the output of a <code>DescribeStream</code> operation.
  * StreamDescription [StreamDescription](#streamdescription)

### ErrorMessage
* ErrorMessage `string`

### ExpiredIteratorException
* ExpiredIteratorException `object`: The shard iterator has expired and can no longer be used to retrieve stream records. A shard iterator expires 15 minutes after it is retrieved using the <code>GetShardIterator</code> action.
  * message [ErrorMessage](#errormessage)

### GetRecordsInput
* GetRecordsInput `object`: Represents the input of a <code>GetRecords</code> operation.
  * Limit [PositiveIntegerObject](#positiveintegerobject)
  * ShardIterator **required** [ShardIterator](#sharditerator)

### GetRecordsOutput
* GetRecordsOutput `object`: Represents the output of a <code>GetRecords</code> operation.
  * NextShardIterator [ShardIterator](#sharditerator)
  * Records [RecordList](#recordlist)

### GetShardIteratorInput
* GetShardIteratorInput `object`: Represents the input of a <code>GetShardIterator</code> operation.
  * SequenceNumber [SequenceNumber](#sequencenumber)
  * ShardId **required** [ShardId](#shardid)
  * ShardIteratorType **required** [ShardIteratorType](#sharditeratortype)
  * StreamArn **required** [StreamArn](#streamarn)

### GetShardIteratorOutput
* GetShardIteratorOutput `object`: Represents the output of a <code>GetShardIterator</code> operation.
  * ShardIterator [ShardIterator](#sharditerator)

### Identity
* Identity `object`: Contains details about the type of identity that made the request.
  * PrincipalId [String](#string)
  * Type [String](#string)

### InternalServerError
* InternalServerError `object`: An error occurred on the server side.
  * message [ErrorMessage](#errormessage)

### KeySchema
* KeySchema `array`
  * items [KeySchemaElement](#keyschemaelement)

### KeySchemaAttributeName
* KeySchemaAttributeName `string`

### KeySchemaElement
* KeySchemaElement `object`: <p>Represents <i>a single element</i> of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.</p> <p>A <code>KeySchemaElement</code> represents exactly one attribute of the primary key. For example, a simple primary key (partition key) would be represented by one <code>KeySchemaElement</code>. A composite primary key (partition key and sort key) would require one <code>KeySchemaElement</code> for the partition key, and another <code>KeySchemaElement</code> for the sort key.</p> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note>
  * AttributeName **required** [KeySchemaAttributeName](#keyschemaattributename)
  * KeyType **required** [KeyType](#keytype)

### KeyType
* KeyType `string` (values: HASH, RANGE)

### LimitExceededException
* LimitExceededException `object`: Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#APIRetries">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.
  * message [ErrorMessage](#errormessage)

### ListAttributeValue
* ListAttributeValue `array`
  * items [AttributeValue](#attributevalue)

### ListStreamsInput
* ListStreamsInput `object`: Represents the input of a <code>ListStreams</code> operation.
  * ExclusiveStartStreamArn [StreamArn](#streamarn)
  * Limit [PositiveIntegerObject](#positiveintegerobject)
  * TableName [TableName](#tablename)

### ListStreamsOutput
* ListStreamsOutput `object`: Represents the output of a <code>ListStreams</code> operation.
  * LastEvaluatedStreamArn [StreamArn](#streamarn)
  * Streams [StreamList](#streamlist)

### MapAttributeValue
* MapAttributeValue `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [AttributeValue](#attributevalue)

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
  * awsRegion [String](#string)
  * dynamodb [StreamRecord](#streamrecord)
  * eventID [String](#string)
  * eventName [OperationType](#operationtype)
  * eventSource [String](#string)
  * eventVersion [String](#string)
  * userIdentity [Identity](#identity)

### RecordList
* RecordList `array`
  * items [Record](#record)

### ResourceNotFoundException
* ResourceNotFoundException `object`: The operation tried to access a nonexistent stream.
  * message [ErrorMessage](#errormessage)

### SequenceNumber
* SequenceNumber `string`

### SequenceNumberRange
* SequenceNumberRange `object`: The beginning and ending sequence numbers for the stream records contained within a shard.
  * EndingSequenceNumber [SequenceNumber](#sequencenumber)
  * StartingSequenceNumber [SequenceNumber](#sequencenumber)

### Shard
* Shard `object`: A uniquely identified group of stream records within a stream.
  * ParentShardId [ShardId](#shardid)
  * SequenceNumberRange [SequenceNumberRange](#sequencenumberrange)
  * ShardId [ShardId](#shardid)

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
  * StreamArn [StreamArn](#streamarn)
  * StreamLabel [String](#string)
  * TableName [TableName](#tablename)

### StreamArn
* StreamArn `string`

### StreamDescription
* StreamDescription `object`: Represents all of the data describing a particular stream.
  * CreationRequestDateTime [Date](#date)
  * KeySchema [KeySchema](#keyschema)
  * LastEvaluatedShardId [ShardId](#shardid)
  * Shards [ShardDescriptionList](#sharddescriptionlist)
  * StreamArn [StreamArn](#streamarn)
  * StreamLabel [String](#string)
  * StreamStatus [StreamStatus](#streamstatus)
  * StreamViewType [StreamViewType](#streamviewtype)
  * TableName [TableName](#tablename)

### StreamList
* StreamList `array`
  * items [Stream](#stream)

### StreamRecord
* StreamRecord `object`: A description of a single data modification that was performed on an item in a DynamoDB table.
  * ApproximateCreationDateTime [Date](#date)
  * Keys [AttributeMap](#attributemap)
  * NewImage [AttributeMap](#attributemap)
  * OldImage [AttributeMap](#attributemap)
  * SequenceNumber [SequenceNumber](#sequencenumber)
  * SizeBytes [PositiveLongObject](#positivelongobject)
  * StreamViewType [StreamViewType](#streamviewtype)

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
* TrimmedDataAccessException `object`: <p>The operation attempted to read past the oldest stream record in a shard.</p> <p>In DynamoDB Streams, there is a 24 hour limit on data retention. Stream records whose age exceeds this limit are subject to removal (trimming) from the stream. You might receive a TrimmedDataAccessException if:</p> <ul> <li><p>You request a shard iterator with a sequence number older than the trim point (24 hours).</p> </li> <li><p>You obtain a shard iterator, but before you use the iterator in a <code>GetRecords</code> request, a stream record in the shard exceeds the 24 hour period and is trimmed. This causes the iterator to access a record that no longer exists.</p> </li> </ul>
  * message [ErrorMessage](#errormessage)


