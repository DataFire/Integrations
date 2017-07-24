# @datafire/amazonaws_streams_dynamodb

Client library for Amazon DynamoDB Streams

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_streams_dynamodb
```

```js
let datafire = require('datafire');
let amazonaws_streams_dynamodb = require('@datafire/amazonaws_streams_dynamodb').actions;
let context = new datafire.Context();

amazonaws_streams_dynamodb.DescribeStream({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon DynamoDB</fullname> <p>Amazon DynamoDB Streams provides API actions for accessing streams and processing stream records. To learn more about application development with Streams, see <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html">Capturing Table Activity with DynamoDB Streams</a> in the Amazon DynamoDB Developer Guide.</p>

## Actions
### DescribeStream



```js
amazonaws_streams_dynamodb.DescribeStream({}, context)
```

#### Parameters

### GetRecords



```js
amazonaws_streams_dynamodb.GetRecords({}, context)
```

#### Parameters

### GetShardIterator



```js
amazonaws_streams_dynamodb.GetShardIterator({}, context)
```

#### Parameters

### ListStreams



```js
amazonaws_streams_dynamodb.ListStreams({}, context)
```

#### Parameters

