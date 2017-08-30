# @datafire/amazonaws_firehose

Client library for Amazon Kinesis Firehose

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_firehose
```

```js
let datafire = require('datafire');
let amazonaws_firehose = require('@datafire/amazonaws_firehose').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_firehose.CreateDeliveryStream({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Kinesis Firehose API Reference</fullname> <p>Amazon Kinesis Firehose is a fully-managed service that delivers real-time streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon Elasticsearch Service (Amazon ES), and Amazon Redshift.</p>

## Actions
### CreateDeliveryStream



```js
amazonaws_firehose.CreateDeliveryStream({
  "DeliveryStreamName": ""
}, context)
```

#### Parameters
* DeliveryStreamName (string) **required**
* ElasticsearchDestinationConfiguration (object) - Describes the configuration of a destination in Amazon ES.
* ExtendedS3DestinationConfiguration (object) - Describes the configuration of a destination in Amazon S3.
* RedshiftDestinationConfiguration (object) - Describes the configuration of a destination in Amazon Redshift.
* S3DestinationConfiguration (object) - Describes the configuration of a destination in Amazon S3.

### DeleteDeliveryStream



```js
amazonaws_firehose.DeleteDeliveryStream({
  "DeliveryStreamName": ""
}, context)
```

#### Parameters
* DeliveryStreamName (string) **required**

### DescribeDeliveryStream



```js
amazonaws_firehose.DescribeDeliveryStream({
  "DeliveryStreamName": ""
}, context)
```

#### Parameters
* DeliveryStreamName (string) **required**
* ExclusiveStartDestinationId (string)
* Limit (integer)

### ListDeliveryStreams



```js
amazonaws_firehose.ListDeliveryStreams({}, context)
```

#### Parameters
* ExclusiveStartDeliveryStreamName (string)
* Limit (integer)

### PutRecord



```js
amazonaws_firehose.PutRecord({
  "DeliveryStreamName": "",
  "Record": {
    "Data": ""
  }
}, context)
```

#### Parameters
* DeliveryStreamName (string) **required**
* Record (object) **required** - The unit of data in a delivery stream.

### PutRecordBatch



```js
amazonaws_firehose.PutRecordBatch({
  "DeliveryStreamName": "",
  "Records": []
}, context)
```

#### Parameters
* DeliveryStreamName (string) **required**
* Records (array) **required**

### UpdateDestination



```js
amazonaws_firehose.UpdateDestination({
  "DeliveryStreamName": "",
  "CurrentDeliveryStreamVersionId": "",
  "DestinationId": ""
}, context)
```

#### Parameters
* CurrentDeliveryStreamVersionId (string) **required**
* DeliveryStreamName (string) **required**
* DestinationId (string) **required**
* ElasticsearchDestinationUpdate (object) - Describes an update for a destination in Amazon ES.
* ExtendedS3DestinationUpdate (object) - Describes an update for a destination in Amazon S3.
* RedshiftDestinationUpdate (object) - Describes an update for a destination in Amazon Redshift.
* S3DestinationUpdate (object) - Describes an update for a destination in Amazon S3.

