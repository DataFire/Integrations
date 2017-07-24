# @datafire/amazonaws_firehose

Client library for Amazon Kinesis Firehose

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_firehose
```

```js
let datafire = require('datafire');
let amazonaws_firehose = require('@datafire/amazonaws_firehose').actions;
let context = new datafire.Context();

amazonaws_firehose.CreateDeliveryStream({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Kinesis Firehose API Reference</fullname> <p>Amazon Kinesis Firehose is a fully-managed service that delivers real-time streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon Elasticsearch Service (Amazon ES), and Amazon Redshift.</p>

## Actions
### CreateDeliveryStream



```js
amazonaws_firehose.CreateDeliveryStream({}, context)
```

#### Parameters

### DeleteDeliveryStream



```js
amazonaws_firehose.DeleteDeliveryStream({}, context)
```

#### Parameters

### DescribeDeliveryStream



```js
amazonaws_firehose.DescribeDeliveryStream({}, context)
```

#### Parameters

### ListDeliveryStreams



```js
amazonaws_firehose.ListDeliveryStreams({}, context)
```

#### Parameters

### PutRecord



```js
amazonaws_firehose.PutRecord({}, context)
```

#### Parameters

### PutRecordBatch



```js
amazonaws_firehose.PutRecordBatch({}, context)
```

#### Parameters

### UpdateDestination



```js
amazonaws_firehose.UpdateDestination({}, context)
```

#### Parameters

