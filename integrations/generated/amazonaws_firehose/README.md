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


### DeleteDeliveryStream



```js
amazonaws_firehose.DeleteDeliveryStream({}, context)
```


### DescribeDeliveryStream



```js
amazonaws_firehose.DescribeDeliveryStream({}, context)
```


### ListDeliveryStreams



```js
amazonaws_firehose.ListDeliveryStreams({}, context)
```


### PutRecord



```js
amazonaws_firehose.PutRecord({}, context)
```


### PutRecordBatch



```js
amazonaws_firehose.PutRecordBatch({}, context)
```


### UpdateDestination



```js
amazonaws_firehose.UpdateDestination({}, context)
```


