# @datafire/amazonaws_streams_dynamodb

Client library for Amazon DynamoDB Streams

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_streams_dynamodb
```

```js
let datafire = require('datafire');
let amazonaws_streams_dynamodb = require('@datafire/amazonaws_streams_dynamodb').create();

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

#### Parameters
* ExclusiveStartShardId (string)
* Limit (integer)
* StreamArn (string) **required**

### GetRecords



```js
amazonaws_streams_dynamodb.GetRecords({
  "ShardIterator": ""
}, context)
```

#### Parameters
* Limit (integer)
* ShardIterator (string) **required**

### GetShardIterator



```js
amazonaws_streams_dynamodb.GetShardIterator({
  "StreamArn": "",
  "ShardId": "",
  "ShardIteratorType": ""
}, context)
```

#### Parameters
* SequenceNumber (string)
* ShardId (string) **required**
* ShardIteratorType (string) **required**
* StreamArn (string) **required**

### ListStreams



```js
amazonaws_streams_dynamodb.ListStreams({}, context)
```

#### Parameters
* ExclusiveStartStreamArn (string)
* Limit (integer)
* TableName (string)

