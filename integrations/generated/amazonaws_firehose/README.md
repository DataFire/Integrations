# @datafire/amazonaws_firehose

Client library for Amazon Kinesis Firehose

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_firehose
```
```js
let amazonaws_firehose = require('@datafire/amazonaws_firehose').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Kinesis Data Firehose API Reference</fullname> <p>Amazon Kinesis Data Firehose is a fully managed service that delivers real-time streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon Elasticsearch Service (Amazon ES), Amazon Redshift, and Splunk.</p>

## Actions

### CreateDeliveryStream



```js
amazonaws_firehose.CreateDeliveryStream({
  "DeliveryStreamName": null
}, context)
```

#### Input
* input `object`
  * DeliveryStreamEncryptionConfigurationInput
    * KeyARN
    * KeyType **required**
  * DeliveryStreamName **required**
  * DeliveryStreamType
  * ElasticsearchDestinationConfiguration
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * ClusterEndpoint
    * DomainARN
    * IndexName **required**
    * IndexRotationPeriod
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RetryOptions
      * DurationInSeconds
    * RoleARN **required**
    * S3BackupMode
    * S3Configuration **required**
      * BucketARN **required**
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN **required**
    * TypeName
    * VpcConfiguration
      * RoleARN **required**
      * SecurityGroupIds **required**
        * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
      * SubnetIds **required**
        * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
  * ExtendedS3DestinationConfiguration
    * BucketARN **required**
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * DataFormatConversionConfiguration
      * Enabled
      * InputFormatConfiguration
        * Deserializer
          * HiveJsonSerDe
          * OpenXJsonSerDe
      * OutputFormatConfiguration
        * Serializer
          * OrcSerDe
          * ParquetSerDe
      * SchemaConfiguration
        * CatalogId
        * DatabaseName
        * Region
        * RoleARN
        * TableName
        * VersionId
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RoleARN **required**
    * S3BackupConfiguration
      * BucketARN **required**
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN **required**
    * S3BackupMode
  * HttpEndpointDestinationConfiguration
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
    * EndpointConfiguration **required**
      * AccessKey
      * Name
      * Url **required**
    * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
    * RequestConfiguration
      * CommonAttributes
        * items [HttpEndpointCommonAttribute](#httpendpointcommonattribute)
      * ContentEncoding
    * RetryOptions
      * DurationInSeconds
    * RoleARN
    * S3BackupMode
    * S3Configuration **required** [S3DestinationConfiguration](#s3destinationconfiguration)
  * KinesisStreamSourceConfiguration
    * KinesisStreamARN **required**
    * RoleARN **required**
  * RedshiftDestinationConfiguration
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * ClusterJDBCURL **required**
    * CopyCommand **required**
      * CopyOptions
      * DataTableColumns
      * DataTableName **required**
    * Password **required**
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RetryOptions
      * DurationInSeconds
    * RoleARN **required**
    * S3BackupConfiguration
      * BucketARN **required**
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN **required**
    * S3BackupMode
    * S3Configuration **required**
      * BucketARN **required**
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN **required**
    * Username **required**
  * S3DestinationConfiguration
    * BucketARN **required**
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN **required**
  * SplunkDestinationConfiguration
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * HECAcknowledgmentTimeoutInSeconds
    * HECEndpoint **required**
    * HECEndpointType **required**
    * HECToken **required**
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RetryOptions
      * DurationInSeconds
    * S3BackupMode
    * S3Configuration **required**
      * BucketARN **required**
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateDeliveryStreamOutput](#createdeliverystreamoutput)

### DeleteDeliveryStream



```js
amazonaws_firehose.DeleteDeliveryStream({
  "DeliveryStreamName": null
}, context)
```

#### Input
* input `object`
  * AllowForceDelete
  * DeliveryStreamName **required**

#### Output
* output [DeleteDeliveryStreamOutput](#deletedeliverystreamoutput)

### DescribeDeliveryStream



```js
amazonaws_firehose.DescribeDeliveryStream({
  "DeliveryStreamName": null
}, context)
```

#### Input
* input `object`
  * DeliveryStreamName **required**
  * ExclusiveStartDestinationId
  * Limit

#### Output
* output [DescribeDeliveryStreamOutput](#describedeliverystreamoutput)

### ListDeliveryStreams



```js
amazonaws_firehose.ListDeliveryStreams({}, context)
```

#### Input
* input `object`
  * DeliveryStreamType
  * ExclusiveStartDeliveryStreamName
  * Limit

#### Output
* output [ListDeliveryStreamsOutput](#listdeliverystreamsoutput)

### ListTagsForDeliveryStream



```js
amazonaws_firehose.ListTagsForDeliveryStream({
  "DeliveryStreamName": null
}, context)
```

#### Input
* input `object`
  * DeliveryStreamName **required**
  * ExclusiveStartTagKey
  * Limit

#### Output
* output [ListTagsForDeliveryStreamOutput](#listtagsfordeliverystreamoutput)

### PutRecord



```js
amazonaws_firehose.PutRecord({
  "DeliveryStreamName": null,
  "Record": null
}, context)
```

#### Input
* input `object`
  * DeliveryStreamName **required**
  * Record **required**
    * Data **required**

#### Output
* output [PutRecordOutput](#putrecordoutput)

### PutRecordBatch



```js
amazonaws_firehose.PutRecordBatch({
  "DeliveryStreamName": null,
  "Records": null
}, context)
```

#### Input
* input `object`
  * DeliveryStreamName **required**
  * Records **required**
    * items [Record](#record)

#### Output
* output [PutRecordBatchOutput](#putrecordbatchoutput)

### StartDeliveryStreamEncryption



```js
amazonaws_firehose.StartDeliveryStreamEncryption({
  "DeliveryStreamName": null
}, context)
```

#### Input
* input `object`
  * DeliveryStreamEncryptionConfigurationInput
    * KeyARN
    * KeyType **required**
  * DeliveryStreamName **required**

#### Output
* output [StartDeliveryStreamEncryptionOutput](#startdeliverystreamencryptionoutput)

### StopDeliveryStreamEncryption



```js
amazonaws_firehose.StopDeliveryStreamEncryption({
  "DeliveryStreamName": null
}, context)
```

#### Input
* input `object`
  * DeliveryStreamName **required**

#### Output
* output [StopDeliveryStreamEncryptionOutput](#stopdeliverystreamencryptionoutput)

### TagDeliveryStream



```js
amazonaws_firehose.TagDeliveryStream({
  "DeliveryStreamName": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * DeliveryStreamName **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagDeliveryStreamOutput](#tagdeliverystreamoutput)

### UntagDeliveryStream



```js
amazonaws_firehose.UntagDeliveryStream({
  "DeliveryStreamName": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * DeliveryStreamName **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagDeliveryStreamOutput](#untagdeliverystreamoutput)

### UpdateDestination



```js
amazonaws_firehose.UpdateDestination({
  "DeliveryStreamName": null,
  "CurrentDeliveryStreamVersionId": null,
  "DestinationId": null
}, context)
```

#### Input
* input `object`
  * CurrentDeliveryStreamVersionId **required**
  * DeliveryStreamName **required**
  * DestinationId **required**
  * ElasticsearchDestinationUpdate
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * ClusterEndpoint
    * DomainARN
    * IndexName
    * IndexRotationPeriod
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RetryOptions
      * DurationInSeconds
    * RoleARN
    * S3Update
      * BucketARN
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN
    * TypeName
  * ExtendedS3DestinationUpdate
    * BucketARN
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * DataFormatConversionConfiguration
      * Enabled
      * InputFormatConfiguration
        * Deserializer
          * HiveJsonSerDe
          * OpenXJsonSerDe
      * OutputFormatConfiguration
        * Serializer
          * OrcSerDe
          * ParquetSerDe
      * SchemaConfiguration
        * CatalogId
        * DatabaseName
        * Region
        * RoleARN
        * TableName
        * VersionId
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RoleARN
    * S3BackupMode
    * S3BackupUpdate
      * BucketARN
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN
  * HttpEndpointDestinationUpdate
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
    * EndpointConfiguration
      * AccessKey
      * Name
      * Url **required**
    * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
    * RequestConfiguration
      * CommonAttributes
        * items [HttpEndpointCommonAttribute](#httpendpointcommonattribute)
      * ContentEncoding
    * RetryOptions
      * DurationInSeconds
    * RoleARN
    * S3BackupMode
    * S3Update [S3DestinationUpdate](#s3destinationupdate)
  * RedshiftDestinationUpdate
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * ClusterJDBCURL
    * CopyCommand
      * CopyOptions
      * DataTableColumns
      * DataTableName **required**
    * Password
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RetryOptions
      * DurationInSeconds
    * RoleARN
    * S3BackupMode
    * S3BackupUpdate
      * BucketARN
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN
    * S3Update
      * BucketARN
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN
    * Username
  * S3DestinationUpdate
    * BucketARN
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN
  * SplunkDestinationUpdate
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * HECAcknowledgmentTimeoutInSeconds
    * HECEndpoint
    * HECEndpointType
    * HECToken
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RetryOptions
      * DurationInSeconds
    * S3BackupMode
    * S3Update
      * BucketARN
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN

#### Output
* output [UpdateDestinationOutput](#updatedestinationoutput)



## Definitions

### AWSKMSKeyARN
* AWSKMSKeyARN `string`

### BlockSizeBytes
* BlockSizeBytes `integer`

### BooleanObject
* BooleanObject `boolean`

### BucketARN
* BucketARN `string`

### BufferingHints
* BufferingHints `object`: Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.
  * IntervalInSeconds
  * SizeInMBs

### CloudWatchLoggingOptions
* CloudWatchLoggingOptions `object`: Describes the Amazon CloudWatch logging options for your delivery stream.
  * Enabled
  * LogGroupName
  * LogStreamName

### ClusterJDBCURL
* ClusterJDBCURL `string`

### ColumnToJsonKeyMappings
* ColumnToJsonKeyMappings `object`

### CompressionFormat
* CompressionFormat `string` (values: UNCOMPRESSED, GZIP, ZIP, Snappy, HADOOP_SNAPPY)

### ConcurrentModificationException


### ContentEncoding
* ContentEncoding `string` (values: NONE, GZIP)

### CopyCommand
* CopyCommand `object`: Describes a <code>COPY</code> command for Amazon Redshift.
  * CopyOptions
  * DataTableColumns
  * DataTableName **required**

### CopyOptions
* CopyOptions `string`

### CreateDeliveryStreamInput
* CreateDeliveryStreamInput `object`
  * DeliveryStreamEncryptionConfigurationInput
    * KeyARN
    * KeyType **required**
  * DeliveryStreamName **required**
  * DeliveryStreamType
  * ElasticsearchDestinationConfiguration
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * ClusterEndpoint
    * DomainARN
    * IndexName **required**
    * IndexRotationPeriod
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RetryOptions
      * DurationInSeconds
    * RoleARN **required**
    * S3BackupMode
    * S3Configuration **required**
      * BucketARN **required**
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN **required**
    * TypeName
    * VpcConfiguration
      * RoleARN **required**
      * SecurityGroupIds **required**
        * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
      * SubnetIds **required**
        * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
  * ExtendedS3DestinationConfiguration
    * BucketARN **required**
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * DataFormatConversionConfiguration
      * Enabled
      * InputFormatConfiguration
        * Deserializer
          * HiveJsonSerDe
          * OpenXJsonSerDe
      * OutputFormatConfiguration
        * Serializer
          * OrcSerDe
          * ParquetSerDe
      * SchemaConfiguration
        * CatalogId
        * DatabaseName
        * Region
        * RoleARN
        * TableName
        * VersionId
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RoleARN **required**
    * S3BackupConfiguration
      * BucketARN **required**
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN **required**
    * S3BackupMode
  * HttpEndpointDestinationConfiguration
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
    * EndpointConfiguration **required**
      * AccessKey
      * Name
      * Url **required**
    * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
    * RequestConfiguration
      * CommonAttributes
        * items [HttpEndpointCommonAttribute](#httpendpointcommonattribute)
      * ContentEncoding
    * RetryOptions
      * DurationInSeconds
    * RoleARN
    * S3BackupMode
    * S3Configuration **required** [S3DestinationConfiguration](#s3destinationconfiguration)
  * KinesisStreamSourceConfiguration
    * KinesisStreamARN **required**
    * RoleARN **required**
  * RedshiftDestinationConfiguration
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * ClusterJDBCURL **required**
    * CopyCommand **required**
      * CopyOptions
      * DataTableColumns
      * DataTableName **required**
    * Password **required**
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RetryOptions
      * DurationInSeconds
    * RoleARN **required**
    * S3BackupConfiguration
      * BucketARN **required**
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN **required**
    * S3BackupMode
    * S3Configuration **required**
      * BucketARN **required**
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN **required**
    * Username **required**
  * S3DestinationConfiguration
    * BucketARN **required**
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN **required**
  * SplunkDestinationConfiguration
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * HECAcknowledgmentTimeoutInSeconds
    * HECEndpoint **required**
    * HECEndpointType **required**
    * HECToken **required**
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RetryOptions
      * DurationInSeconds
    * S3BackupMode
    * S3Configuration **required**
      * BucketARN **required**
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN **required**
  * Tags
    * items [Tag](#tag)

### CreateDeliveryStreamOutput
* CreateDeliveryStreamOutput `object`
  * DeliveryStreamARN

### Data
* Data `string`

### DataFormatConversionConfiguration
* DataFormatConversionConfiguration `object`: Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>.
  * Enabled
  * InputFormatConfiguration
    * Deserializer
      * HiveJsonSerDe
        * TimestampFormats
          * items [NonEmptyString](#nonemptystring)
      * OpenXJsonSerDe
        * CaseInsensitive
        * ColumnToJsonKeyMappings
        * ConvertDotsInJsonKeysToUnderscores
  * OutputFormatConfiguration
    * Serializer
      * OrcSerDe
        * BlockSizeBytes
        * BloomFilterColumns
          * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
        * BloomFilterFalsePositiveProbability
        * Compression
        * DictionaryKeyThreshold
        * EnablePadding
        * FormatVersion
        * PaddingTolerance
        * RowIndexStride
        * StripeSizeBytes
      * ParquetSerDe
        * BlockSizeBytes
        * Compression
        * EnableDictionaryCompression
        * MaxPaddingBytes
        * PageSizeBytes
        * WriterVersion
  * SchemaConfiguration
    * CatalogId
    * DatabaseName
    * Region
    * RoleARN
    * TableName
    * VersionId

### DataTableColumns
* DataTableColumns `string`

### DataTableName
* DataTableName `string`

### DeleteDeliveryStreamInput
* DeleteDeliveryStreamInput `object`
  * AllowForceDelete
  * DeliveryStreamName **required**

### DeleteDeliveryStreamOutput
* DeleteDeliveryStreamOutput `object`

### DeliveryStartTimestamp
* DeliveryStartTimestamp `string`

### DeliveryStreamARN
* DeliveryStreamARN `string`

### DeliveryStreamDescription
* DeliveryStreamDescription `object`: Contains information about a delivery stream.
  * CreateTimestamp
  * DeliveryStreamARN **required**
  * DeliveryStreamEncryptionConfiguration
    * FailureDescription
      * Details **required**
      * Type **required**
    * KeyARN
    * KeyType
    * Status
  * DeliveryStreamName **required**
  * DeliveryStreamStatus **required**
  * DeliveryStreamType **required**
  * Destinations **required**
    * items [DestinationDescription](#destinationdescription)
  * FailureDescription
    * Details **required**
    * Type **required**
  * HasMoreDestinations **required**
  * LastUpdateTimestamp
  * Source
    * KinesisStreamSourceDescription
      * DeliveryStartTimestamp
      * KinesisStreamARN
      * RoleARN
  * VersionId **required**

### DeliveryStreamEncryptionConfiguration
* DeliveryStreamEncryptionConfiguration `object`: Contains information about the server-side encryption (SSE) status for the delivery stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation. 
  * FailureDescription
    * Details **required**
    * Type **required**
  * KeyARN
  * KeyType
  * Status

### DeliveryStreamEncryptionConfigurationInput
* DeliveryStreamEncryptionConfigurationInput `object`: Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE). 
  * KeyARN
  * KeyType **required**

### DeliveryStreamEncryptionStatus
* DeliveryStreamEncryptionStatus `string` (values: ENABLED, ENABLING, ENABLING_FAILED, DISABLED, DISABLING, DISABLING_FAILED)

### DeliveryStreamFailureType
* DeliveryStreamFailureType `string` (values: RETIRE_KMS_GRANT_FAILED, CREATE_KMS_GRANT_FAILED, KMS_ACCESS_DENIED, DISABLED_KMS_KEY, INVALID_KMS_KEY, KMS_KEY_NOT_FOUND, KMS_OPT_IN_REQUIRED, CREATE_ENI_FAILED, DELETE_ENI_FAILED, SUBNET_NOT_FOUND, SECURITY_GROUP_NOT_FOUND, ENI_ACCESS_DENIED, SUBNET_ACCESS_DENIED, SECURITY_GROUP_ACCESS_DENIED, UNKNOWN_ERROR)

### DeliveryStreamName
* DeliveryStreamName `string`

### DeliveryStreamNameList
* DeliveryStreamNameList `array`
  * items [DeliveryStreamName](#deliverystreamname)

### DeliveryStreamStatus
* DeliveryStreamStatus `string` (values: CREATING, CREATING_FAILED, DELETING, DELETING_FAILED, ACTIVE)

### DeliveryStreamType
* DeliveryStreamType `string` (values: DirectPut, KinesisStreamAsSource)

### DeliveryStreamVersionId
* DeliveryStreamVersionId `string`

### DescribeDeliveryStreamInput
* DescribeDeliveryStreamInput `object`
  * DeliveryStreamName **required**
  * ExclusiveStartDestinationId
  * Limit

### DescribeDeliveryStreamInputLimit
* DescribeDeliveryStreamInputLimit `integer`

### DescribeDeliveryStreamOutput
* DescribeDeliveryStreamOutput `object`
  * DeliveryStreamDescription **required**
    * CreateTimestamp
    * DeliveryStreamARN **required**
    * DeliveryStreamEncryptionConfiguration
      * FailureDescription
        * Details **required**
        * Type **required**
      * KeyARN
      * KeyType
      * Status
    * DeliveryStreamName **required**
    * DeliveryStreamStatus **required**
    * DeliveryStreamType **required**
    * Destinations **required**
      * items [DestinationDescription](#destinationdescription)
    * FailureDescription
      * Details **required**
      * Type **required**
    * HasMoreDestinations **required**
    * LastUpdateTimestamp
    * Source
      * KinesisStreamSourceDescription
        * DeliveryStartTimestamp
        * KinesisStreamARN
        * RoleARN
    * VersionId **required**

### Deserializer
* Deserializer `object`: The deserializer you want Kinesis Data Firehose to use for converting the input data from JSON. Kinesis Data Firehose then serializes the data to its final format using the <a>Serializer</a>. Kinesis Data Firehose supports two types of deserializers: the <a href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON">Apache Hive JSON SerDe</a> and the <a href="https://github.com/rcongiu/Hive-JSON-Serde">OpenX JSON SerDe</a>.
  * HiveJsonSerDe
    * TimestampFormats
      * items [NonEmptyString](#nonemptystring)
  * OpenXJsonSerDe
    * CaseInsensitive
    * ColumnToJsonKeyMappings
    * ConvertDotsInJsonKeysToUnderscores

### DestinationDescription
* DestinationDescription `object`: Describes the destination for a delivery stream.
  * DestinationId **required**
  * ElasticsearchDestinationDescription
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * ClusterEndpoint
    * DomainARN
    * IndexName
    * IndexRotationPeriod
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RetryOptions
      * DurationInSeconds
    * RoleARN
    * S3BackupMode
    * S3DestinationDescription
      * BucketARN **required**
      * BufferingHints **required**
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat **required**
      * EncryptionConfiguration **required**
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN **required**
    * TypeName
    * VpcConfigurationDescription
      * RoleARN **required**
      * SecurityGroupIds **required**
        * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
      * SubnetIds **required**
        * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
      * VpcId **required**
  * ExtendedS3DestinationDescription
    * BucketARN **required**
    * BufferingHints **required**
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat **required**
    * DataFormatConversionConfiguration
      * Enabled
      * InputFormatConfiguration
        * Deserializer
          * HiveJsonSerDe
          * OpenXJsonSerDe
      * OutputFormatConfiguration
        * Serializer
          * OrcSerDe
          * ParquetSerDe
      * SchemaConfiguration
        * CatalogId
        * DatabaseName
        * Region
        * RoleARN
        * TableName
        * VersionId
    * EncryptionConfiguration **required**
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RoleARN **required**
    * S3BackupDescription
      * BucketARN **required**
      * BufferingHints **required**
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat **required**
      * EncryptionConfiguration **required**
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN **required**
    * S3BackupMode
  * HttpEndpointDestinationDescription
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
    * EndpointConfiguration
      * Name
      * Url
    * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
    * RequestConfiguration
      * CommonAttributes
        * items [HttpEndpointCommonAttribute](#httpendpointcommonattribute)
      * ContentEncoding
    * RetryOptions
      * DurationInSeconds
    * RoleARN
    * S3BackupMode
    * S3DestinationDescription [S3DestinationDescription](#s3destinationdescription)
  * RedshiftDestinationDescription
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * ClusterJDBCURL **required**
    * CopyCommand **required**
      * CopyOptions
      * DataTableColumns
      * DataTableName **required**
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RetryOptions
      * DurationInSeconds
    * RoleARN **required**
    * S3BackupDescription
      * BucketARN **required**
      * BufferingHints **required**
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat **required**
      * EncryptionConfiguration **required**
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN **required**
    * S3BackupMode
    * S3DestinationDescription **required**
      * BucketARN **required**
      * BufferingHints **required**
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat **required**
      * EncryptionConfiguration **required**
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN **required**
    * Username **required**
  * S3DestinationDescription
    * BucketARN **required**
    * BufferingHints **required**
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat **required**
    * EncryptionConfiguration **required**
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN **required**
  * SplunkDestinationDescription
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * HECAcknowledgmentTimeoutInSeconds
    * HECEndpoint
    * HECEndpointType
    * HECToken
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RetryOptions
      * DurationInSeconds
    * S3BackupMode
    * S3DestinationDescription
      * BucketARN **required**
      * BufferingHints **required**
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat **required**
      * EncryptionConfiguration **required**
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN **required**

### DestinationDescriptionList
* DestinationDescriptionList `array`
  * items [DestinationDescription](#destinationdescription)

### DestinationId
* DestinationId `string`

### ElasticsearchBufferingHints
* ElasticsearchBufferingHints `object`: Describes the buffering to perform before delivering data to the Amazon ES destination.
  * IntervalInSeconds
  * SizeInMBs

### ElasticsearchBufferingIntervalInSeconds
* ElasticsearchBufferingIntervalInSeconds `integer`

### ElasticsearchBufferingSizeInMBs
* ElasticsearchBufferingSizeInMBs `integer`

### ElasticsearchClusterEndpoint
* ElasticsearchClusterEndpoint `string`

### ElasticsearchDestinationConfiguration
* ElasticsearchDestinationConfiguration `object`: Describes the configuration of a destination in Amazon ES.
  * BufferingHints
    * IntervalInSeconds
    * SizeInMBs
  * CloudWatchLoggingOptions
    * Enabled
    * LogGroupName
    * LogStreamName
  * ClusterEndpoint
  * DomainARN
  * IndexName **required**
  * IndexRotationPeriod
  * ProcessingConfiguration
    * Enabled
    * Processors
      * items [Processor](#processor)
  * RetryOptions
    * DurationInSeconds
  * RoleARN **required**
  * S3BackupMode
  * S3Configuration **required**
    * BucketARN **required**
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN **required**
  * TypeName
  * VpcConfiguration
    * RoleARN **required**
    * SecurityGroupIds **required**
      * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
    * SubnetIds **required**
      * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)

### ElasticsearchDestinationDescription
* ElasticsearchDestinationDescription `object`: The destination description in Amazon ES.
  * BufferingHints
    * IntervalInSeconds
    * SizeInMBs
  * CloudWatchLoggingOptions
    * Enabled
    * LogGroupName
    * LogStreamName
  * ClusterEndpoint
  * DomainARN
  * IndexName
  * IndexRotationPeriod
  * ProcessingConfiguration
    * Enabled
    * Processors
      * items [Processor](#processor)
  * RetryOptions
    * DurationInSeconds
  * RoleARN
  * S3BackupMode
  * S3DestinationDescription
    * BucketARN **required**
    * BufferingHints **required**
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat **required**
    * EncryptionConfiguration **required**
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN **required**
  * TypeName
  * VpcConfigurationDescription
    * RoleARN **required**
    * SecurityGroupIds **required**
      * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
    * SubnetIds **required**
      * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
    * VpcId **required**

### ElasticsearchDestinationUpdate
* ElasticsearchDestinationUpdate `object`: Describes an update for a destination in Amazon ES.
  * BufferingHints
    * IntervalInSeconds
    * SizeInMBs
  * CloudWatchLoggingOptions
    * Enabled
    * LogGroupName
    * LogStreamName
  * ClusterEndpoint
  * DomainARN
  * IndexName
  * IndexRotationPeriod
  * ProcessingConfiguration
    * Enabled
    * Processors
      * items [Processor](#processor)
  * RetryOptions
    * DurationInSeconds
  * RoleARN
  * S3Update
    * BucketARN
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN
  * TypeName

### ElasticsearchDomainARN
* ElasticsearchDomainARN `string`

### ElasticsearchIndexName
* ElasticsearchIndexName `string`

### ElasticsearchIndexRotationPeriod
* ElasticsearchIndexRotationPeriod `string` (values: NoRotation, OneHour, OneDay, OneWeek, OneMonth)

### ElasticsearchRetryDurationInSeconds
* ElasticsearchRetryDurationInSeconds `integer`

### ElasticsearchRetryOptions
* ElasticsearchRetryOptions `object`: Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES.
  * DurationInSeconds

### ElasticsearchS3BackupMode
* ElasticsearchS3BackupMode `string` (values: FailedDocumentsOnly, AllDocuments)

### ElasticsearchTypeName
* ElasticsearchTypeName `string`

### EncryptionConfiguration
* EncryptionConfiguration `object`: Describes the encryption for a destination in Amazon S3.
  * KMSEncryptionConfig
    * AWSKMSKeyARN **required**
  * NoEncryptionConfig

### ErrorCode
* ErrorCode `string`

### ErrorMessage
* ErrorMessage `string`

### ErrorOutputPrefix
* ErrorOutputPrefix `string`

### ExtendedS3DestinationConfiguration
* ExtendedS3DestinationConfiguration `object`: Describes the configuration of a destination in Amazon S3.
  * BucketARN **required**
  * BufferingHints
    * IntervalInSeconds
    * SizeInMBs
  * CloudWatchLoggingOptions
    * Enabled
    * LogGroupName
    * LogStreamName
  * CompressionFormat
  * DataFormatConversionConfiguration
    * Enabled
    * InputFormatConfiguration
      * Deserializer
        * HiveJsonSerDe
          * TimestampFormats
        * OpenXJsonSerDe
          * CaseInsensitive
          * ColumnToJsonKeyMappings
          * ConvertDotsInJsonKeysToUnderscores
    * OutputFormatConfiguration
      * Serializer
        * OrcSerDe
          * BlockSizeBytes
          * BloomFilterColumns
          * BloomFilterFalsePositiveProbability
          * Compression
          * DictionaryKeyThreshold
          * EnablePadding
          * FormatVersion
          * PaddingTolerance
          * RowIndexStride
          * StripeSizeBytes
        * ParquetSerDe
          * BlockSizeBytes
          * Compression
          * EnableDictionaryCompression
          * MaxPaddingBytes
          * PageSizeBytes
          * WriterVersion
    * SchemaConfiguration
      * CatalogId
      * DatabaseName
      * Region
      * RoleARN
      * TableName
      * VersionId
  * EncryptionConfiguration
    * KMSEncryptionConfig
      * AWSKMSKeyARN **required**
    * NoEncryptionConfig
  * ErrorOutputPrefix
  * Prefix
  * ProcessingConfiguration
    * Enabled
    * Processors
      * items [Processor](#processor)
  * RoleARN **required**
  * S3BackupConfiguration
    * BucketARN **required**
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN **required**
  * S3BackupMode

### ExtendedS3DestinationDescription
* ExtendedS3DestinationDescription `object`: Describes a destination in Amazon S3.
  * BucketARN **required**
  * BufferingHints **required**
    * IntervalInSeconds
    * SizeInMBs
  * CloudWatchLoggingOptions
    * Enabled
    * LogGroupName
    * LogStreamName
  * CompressionFormat **required**
  * DataFormatConversionConfiguration
    * Enabled
    * InputFormatConfiguration
      * Deserializer
        * HiveJsonSerDe
          * TimestampFormats
        * OpenXJsonSerDe
          * CaseInsensitive
          * ColumnToJsonKeyMappings
          * ConvertDotsInJsonKeysToUnderscores
    * OutputFormatConfiguration
      * Serializer
        * OrcSerDe
          * BlockSizeBytes
          * BloomFilterColumns
          * BloomFilterFalsePositiveProbability
          * Compression
          * DictionaryKeyThreshold
          * EnablePadding
          * FormatVersion
          * PaddingTolerance
          * RowIndexStride
          * StripeSizeBytes
        * ParquetSerDe
          * BlockSizeBytes
          * Compression
          * EnableDictionaryCompression
          * MaxPaddingBytes
          * PageSizeBytes
          * WriterVersion
    * SchemaConfiguration
      * CatalogId
      * DatabaseName
      * Region
      * RoleARN
      * TableName
      * VersionId
  * EncryptionConfiguration **required**
    * KMSEncryptionConfig
      * AWSKMSKeyARN **required**
    * NoEncryptionConfig
  * ErrorOutputPrefix
  * Prefix
  * ProcessingConfiguration
    * Enabled
    * Processors
      * items [Processor](#processor)
  * RoleARN **required**
  * S3BackupDescription
    * BucketARN **required**
    * BufferingHints **required**
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat **required**
    * EncryptionConfiguration **required**
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN **required**
  * S3BackupMode

### ExtendedS3DestinationUpdate
* ExtendedS3DestinationUpdate `object`: Describes an update for a destination in Amazon S3.
  * BucketARN
  * BufferingHints
    * IntervalInSeconds
    * SizeInMBs
  * CloudWatchLoggingOptions
    * Enabled
    * LogGroupName
    * LogStreamName
  * CompressionFormat
  * DataFormatConversionConfiguration
    * Enabled
    * InputFormatConfiguration
      * Deserializer
        * HiveJsonSerDe
          * TimestampFormats
        * OpenXJsonSerDe
          * CaseInsensitive
          * ColumnToJsonKeyMappings
          * ConvertDotsInJsonKeysToUnderscores
    * OutputFormatConfiguration
      * Serializer
        * OrcSerDe
          * BlockSizeBytes
          * BloomFilterColumns
          * BloomFilterFalsePositiveProbability
          * Compression
          * DictionaryKeyThreshold
          * EnablePadding
          * FormatVersion
          * PaddingTolerance
          * RowIndexStride
          * StripeSizeBytes
        * ParquetSerDe
          * BlockSizeBytes
          * Compression
          * EnableDictionaryCompression
          * MaxPaddingBytes
          * PageSizeBytes
          * WriterVersion
    * SchemaConfiguration
      * CatalogId
      * DatabaseName
      * Region
      * RoleARN
      * TableName
      * VersionId
  * EncryptionConfiguration
    * KMSEncryptionConfig
      * AWSKMSKeyARN **required**
    * NoEncryptionConfig
  * ErrorOutputPrefix
  * Prefix
  * ProcessingConfiguration
    * Enabled
    * Processors
      * items [Processor](#processor)
  * RoleARN
  * S3BackupMode
  * S3BackupUpdate
    * BucketARN
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN

### FailureDescription
* FailureDescription `object`: Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.
  * Details **required**
  * Type **required**

### HECAcknowledgmentTimeoutInSeconds
* HECAcknowledgmentTimeoutInSeconds `integer`

### HECEndpoint
* HECEndpoint `string`

### HECEndpointType
* HECEndpointType `string` (values: Raw, Event)

### HECToken
* HECToken `string`

### HiveJsonSerDe
* HiveJsonSerDe `object`: The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe.
  * TimestampFormats
    * items [NonEmptyString](#nonemptystring)

### HttpEndpointAccessKey
* HttpEndpointAccessKey `string`

### HttpEndpointAttributeName
* HttpEndpointAttributeName `string`

### HttpEndpointAttributeValue
* HttpEndpointAttributeValue `string`

### HttpEndpointBufferingHints
* HttpEndpointBufferingHints `object`: Describes the buffering options that can be applied before data is delivered to the HTTP endpoint destination. Kinesis Data Firehose treats these options as hints, and it might choose to use more optimal values. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. 
  * IntervalInSeconds
  * SizeInMBs

### HttpEndpointBufferingIntervalInSeconds
* HttpEndpointBufferingIntervalInSeconds `integer`

### HttpEndpointBufferingSizeInMBs
* HttpEndpointBufferingSizeInMBs `integer`

### HttpEndpointCommonAttribute
* HttpEndpointCommonAttribute `object`: Describes the metadata that's delivered to the specified HTTP endpoint destination.
  * AttributeName **required**
  * AttributeValue **required**

### HttpEndpointCommonAttributesList
* HttpEndpointCommonAttributesList `array`
  * items [HttpEndpointCommonAttribute](#httpendpointcommonattribute)

### HttpEndpointConfiguration
* HttpEndpointConfiguration `object`: Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers data.
  * AccessKey
  * Name
  * Url **required**

### HttpEndpointDescription
* HttpEndpointDescription `object`: Describes the HTTP endpoint selected as the destination. 
  * Name
  * Url

### HttpEndpointDestinationConfiguration
* HttpEndpointDestinationConfiguration `object`: Describes the configuration of the HTTP endpoint destination.
  * BufferingHints
    * IntervalInSeconds
    * SizeInMBs
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * EndpointConfiguration **required**
    * AccessKey
    * Name
    * Url **required**
  * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
  * RequestConfiguration
    * CommonAttributes
      * items [HttpEndpointCommonAttribute](#httpendpointcommonattribute)
    * ContentEncoding
  * RetryOptions
    * DurationInSeconds
  * RoleARN
  * S3BackupMode
  * S3Configuration **required** [S3DestinationConfiguration](#s3destinationconfiguration)

### HttpEndpointDestinationDescription
* HttpEndpointDestinationDescription `object`: Describes the HTTP endpoint destination.
  * BufferingHints
    * IntervalInSeconds
    * SizeInMBs
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * EndpointConfiguration
    * Name
    * Url
  * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
  * RequestConfiguration
    * CommonAttributes
      * items [HttpEndpointCommonAttribute](#httpendpointcommonattribute)
    * ContentEncoding
  * RetryOptions
    * DurationInSeconds
  * RoleARN
  * S3BackupMode
  * S3DestinationDescription [S3DestinationDescription](#s3destinationdescription)

### HttpEndpointDestinationUpdate
* HttpEndpointDestinationUpdate `object`: Updates the specified HTTP endpoint destination.
  * BufferingHints
    * IntervalInSeconds
    * SizeInMBs
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * EndpointConfiguration
    * AccessKey
    * Name
    * Url **required**
  * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
  * RequestConfiguration
    * CommonAttributes
      * items [HttpEndpointCommonAttribute](#httpendpointcommonattribute)
    * ContentEncoding
  * RetryOptions
    * DurationInSeconds
  * RoleARN
  * S3BackupMode
  * S3Update [S3DestinationUpdate](#s3destinationupdate)

### HttpEndpointName
* HttpEndpointName `string`

### HttpEndpointRequestConfiguration
* HttpEndpointRequestConfiguration `object`: The configuration of the HTTP endpoint request.
  * CommonAttributes
    * items [HttpEndpointCommonAttribute](#httpendpointcommonattribute)
  * ContentEncoding

### HttpEndpointRetryDurationInSeconds
* HttpEndpointRetryDurationInSeconds `integer`

### HttpEndpointRetryOptions
* HttpEndpointRetryOptions `object`: Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.
  * DurationInSeconds

### HttpEndpointS3BackupMode
* HttpEndpointS3BackupMode `string` (values: FailedDataOnly, AllData)

### HttpEndpointUrl
* HttpEndpointUrl `string`

### InputFormatConfiguration
* InputFormatConfiguration `object`: Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if <code>Enabled</code> is set to true.
  * Deserializer
    * HiveJsonSerDe
      * TimestampFormats
        * items [NonEmptyString](#nonemptystring)
    * OpenXJsonSerDe
      * CaseInsensitive
      * ColumnToJsonKeyMappings
      * ConvertDotsInJsonKeysToUnderscores

### IntervalInSeconds
* IntervalInSeconds `integer`

### InvalidArgumentException


### InvalidKMSResourceException


### KMSEncryptionConfig
* KMSEncryptionConfig `object`: Describes an encryption key for a destination in Amazon S3.
  * AWSKMSKeyARN **required**

### KeyType
* KeyType `string` (values: AWS_OWNED_CMK, CUSTOMER_MANAGED_CMK)

### KinesisStreamARN
* KinesisStreamARN `string`

### KinesisStreamSourceConfiguration
* KinesisStreamSourceConfiguration `object`: The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream.
  * KinesisStreamARN **required**
  * RoleARN **required**

### KinesisStreamSourceDescription
* KinesisStreamSourceDescription `object`: Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.
  * DeliveryStartTimestamp
  * KinesisStreamARN
  * RoleARN

### LimitExceededException


### ListDeliveryStreamsInput
* ListDeliveryStreamsInput `object`
  * DeliveryStreamType
  * ExclusiveStartDeliveryStreamName
  * Limit

### ListDeliveryStreamsInputLimit
* ListDeliveryStreamsInputLimit `integer`

### ListDeliveryStreamsOutput
* ListDeliveryStreamsOutput `object`
  * DeliveryStreamNames **required**
    * items [DeliveryStreamName](#deliverystreamname)
  * HasMoreDeliveryStreams **required**

### ListOfNonEmptyStrings
* ListOfNonEmptyStrings `array`
  * items [NonEmptyString](#nonemptystring)

### ListOfNonEmptyStringsWithoutWhitespace
* ListOfNonEmptyStringsWithoutWhitespace `array`
  * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)

### ListTagsForDeliveryStreamInput
* ListTagsForDeliveryStreamInput `object`
  * DeliveryStreamName **required**
  * ExclusiveStartTagKey
  * Limit

### ListTagsForDeliveryStreamInputLimit
* ListTagsForDeliveryStreamInputLimit `integer`

### ListTagsForDeliveryStreamOutput
* ListTagsForDeliveryStreamOutput `object`
  * HasMoreTags **required**
  * Tags **required**
    * items [Tag](#tag)

### ListTagsForDeliveryStreamOutputTagList
* ListTagsForDeliveryStreamOutputTagList `array`
  * items [Tag](#tag)

### LogGroupName
* LogGroupName `string`

### LogStreamName
* LogStreamName `string`

### NoEncryptionConfig
* NoEncryptionConfig `string` (values: NoEncryption)

### NonEmptyString
* NonEmptyString `string`

### NonEmptyStringWithoutWhitespace
* NonEmptyStringWithoutWhitespace `string`

### NonNegativeIntegerObject
* NonNegativeIntegerObject `integer`

### OpenXJsonSerDe
* OpenXJsonSerDe `object`: The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.
  * CaseInsensitive
  * ColumnToJsonKeyMappings
  * ConvertDotsInJsonKeysToUnderscores

### OrcCompression
* OrcCompression `string` (values: NONE, ZLIB, SNAPPY)

### OrcFormatVersion
* OrcFormatVersion `string` (values: V0_11, V0_12)

### OrcRowIndexStride
* OrcRowIndexStride `integer`

### OrcSerDe
* OrcSerDe `object`: A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>.
  * BlockSizeBytes
  * BloomFilterColumns
    * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
  * BloomFilterFalsePositiveProbability
  * Compression
  * DictionaryKeyThreshold
  * EnablePadding
  * FormatVersion
  * PaddingTolerance
  * RowIndexStride
  * StripeSizeBytes

### OrcStripeSizeBytes
* OrcStripeSizeBytes `integer`

### OutputFormatConfiguration
* OutputFormatConfiguration `object`: Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true.
  * Serializer
    * OrcSerDe
      * BlockSizeBytes
      * BloomFilterColumns
        * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
      * BloomFilterFalsePositiveProbability
      * Compression
      * DictionaryKeyThreshold
      * EnablePadding
      * FormatVersion
      * PaddingTolerance
      * RowIndexStride
      * StripeSizeBytes
    * ParquetSerDe
      * BlockSizeBytes
      * Compression
      * EnableDictionaryCompression
      * MaxPaddingBytes
      * PageSizeBytes
      * WriterVersion

### ParquetCompression
* ParquetCompression `string` (values: UNCOMPRESSED, GZIP, SNAPPY)

### ParquetPageSizeBytes
* ParquetPageSizeBytes `integer`

### ParquetSerDe
* ParquetSerDe `object`: A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>.
  * BlockSizeBytes
  * Compression
  * EnableDictionaryCompression
  * MaxPaddingBytes
  * PageSizeBytes
  * WriterVersion

### ParquetWriterVersion
* ParquetWriterVersion `string` (values: V1, V2)

### Password
* Password `string`

### Prefix
* Prefix `string`

### ProcessingConfiguration
* ProcessingConfiguration `object`: Describes a data processing configuration.
  * Enabled
  * Processors
    * items [Processor](#processor)

### Processor
* Processor `object`: Describes a data processor.
  * Parameters
    * items [ProcessorParameter](#processorparameter)
  * Type **required**

### ProcessorList
* ProcessorList `array`
  * items [Processor](#processor)

### ProcessorParameter
* ProcessorParameter `object`: Describes the processor parameter.
  * ParameterName **required**
  * ParameterValue **required**

### ProcessorParameterList
* ProcessorParameterList `array`
  * items [ProcessorParameter](#processorparameter)

### ProcessorParameterName
* ProcessorParameterName `string` (values: LambdaArn, NumberOfRetries, RoleArn, BufferSizeInMBs, BufferIntervalInSeconds)

### ProcessorParameterValue
* ProcessorParameterValue `string`

### ProcessorType
* ProcessorType `string` (values: Lambda)

### Proportion
* Proportion `number`

### PutRecordBatchInput
* PutRecordBatchInput `object`
  * DeliveryStreamName **required**
  * Records **required**
    * items [Record](#record)

### PutRecordBatchOutput
* PutRecordBatchOutput `object`
  * Encrypted
  * FailedPutCount **required**
  * RequestResponses **required**
    * items [PutRecordBatchResponseEntry](#putrecordbatchresponseentry)

### PutRecordBatchRequestEntryList
* PutRecordBatchRequestEntryList `array`
  * items [Record](#record)

### PutRecordBatchResponseEntry
* PutRecordBatchResponseEntry `object`: Contains the result for an individual record from a <a>PutRecordBatch</a> request. If the record is successfully added to your delivery stream, it receives a record ID. If the record fails to be added to your delivery stream, the result includes an error code and an error message.
  * ErrorCode
  * ErrorMessage
  * RecordId

### PutRecordBatchResponseEntryList
* PutRecordBatchResponseEntryList `array`
  * items [PutRecordBatchResponseEntry](#putrecordbatchresponseentry)

### PutRecordInput
* PutRecordInput `object`
  * DeliveryStreamName **required**
  * Record **required**
    * Data **required**

### PutRecordOutput
* PutRecordOutput `object`
  * Encrypted
  * RecordId **required**

### PutResponseRecordId
* PutResponseRecordId `string`

### Record
* Record `object`: The unit of data in a delivery stream.
  * Data **required**

### RedshiftDestinationConfiguration
* RedshiftDestinationConfiguration `object`: Describes the configuration of a destination in Amazon Redshift.
  * CloudWatchLoggingOptions
    * Enabled
    * LogGroupName
    * LogStreamName
  * ClusterJDBCURL **required**
  * CopyCommand **required**
    * CopyOptions
    * DataTableColumns
    * DataTableName **required**
  * Password **required**
  * ProcessingConfiguration
    * Enabled
    * Processors
      * items [Processor](#processor)
  * RetryOptions
    * DurationInSeconds
  * RoleARN **required**
  * S3BackupConfiguration
    * BucketARN **required**
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN **required**
  * S3BackupMode
  * S3Configuration **required**
    * BucketARN **required**
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN **required**
  * Username **required**

### RedshiftDestinationDescription
* RedshiftDestinationDescription `object`: Describes a destination in Amazon Redshift.
  * CloudWatchLoggingOptions
    * Enabled
    * LogGroupName
    * LogStreamName
  * ClusterJDBCURL **required**
  * CopyCommand **required**
    * CopyOptions
    * DataTableColumns
    * DataTableName **required**
  * ProcessingConfiguration
    * Enabled
    * Processors
      * items [Processor](#processor)
  * RetryOptions
    * DurationInSeconds
  * RoleARN **required**
  * S3BackupDescription
    * BucketARN **required**
    * BufferingHints **required**
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat **required**
    * EncryptionConfiguration **required**
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN **required**
  * S3BackupMode
  * S3DestinationDescription **required**
    * BucketARN **required**
    * BufferingHints **required**
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat **required**
    * EncryptionConfiguration **required**
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN **required**
  * Username **required**

### RedshiftDestinationUpdate
* RedshiftDestinationUpdate `object`: Describes an update for a destination in Amazon Redshift.
  * CloudWatchLoggingOptions
    * Enabled
    * LogGroupName
    * LogStreamName
  * ClusterJDBCURL
  * CopyCommand
    * CopyOptions
    * DataTableColumns
    * DataTableName **required**
  * Password
  * ProcessingConfiguration
    * Enabled
    * Processors
      * items [Processor](#processor)
  * RetryOptions
    * DurationInSeconds
  * RoleARN
  * S3BackupMode
  * S3BackupUpdate
    * BucketARN
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN
  * S3Update
    * BucketARN
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN
  * Username

### RedshiftRetryDurationInSeconds
* RedshiftRetryDurationInSeconds `integer`

### RedshiftRetryOptions
* RedshiftRetryOptions `object`: Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift.
  * DurationInSeconds

### RedshiftS3BackupMode
* RedshiftS3BackupMode `string` (values: Disabled, Enabled)

### ResourceInUseException


### ResourceNotFoundException


### RoleARN
* RoleARN `string`

### S3BackupMode
* S3BackupMode `string` (values: Disabled, Enabled)

### S3DestinationConfiguration
* S3DestinationConfiguration `object`: Describes the configuration of a destination in Amazon S3.
  * BucketARN **required**
  * BufferingHints
    * IntervalInSeconds
    * SizeInMBs
  * CloudWatchLoggingOptions
    * Enabled
    * LogGroupName
    * LogStreamName
  * CompressionFormat
  * EncryptionConfiguration
    * KMSEncryptionConfig
      * AWSKMSKeyARN **required**
    * NoEncryptionConfig
  * ErrorOutputPrefix
  * Prefix
  * RoleARN **required**

### S3DestinationDescription
* S3DestinationDescription `object`: Describes a destination in Amazon S3.
  * BucketARN **required**
  * BufferingHints **required**
    * IntervalInSeconds
    * SizeInMBs
  * CloudWatchLoggingOptions
    * Enabled
    * LogGroupName
    * LogStreamName
  * CompressionFormat **required**
  * EncryptionConfiguration **required**
    * KMSEncryptionConfig
      * AWSKMSKeyARN **required**
    * NoEncryptionConfig
  * ErrorOutputPrefix
  * Prefix
  * RoleARN **required**

### S3DestinationUpdate
* S3DestinationUpdate `object`: Describes an update for a destination in Amazon S3.
  * BucketARN
  * BufferingHints
    * IntervalInSeconds
    * SizeInMBs
  * CloudWatchLoggingOptions
    * Enabled
    * LogGroupName
    * LogStreamName
  * CompressionFormat
  * EncryptionConfiguration
    * KMSEncryptionConfig
      * AWSKMSKeyARN **required**
    * NoEncryptionConfig
  * ErrorOutputPrefix
  * Prefix
  * RoleARN

### SchemaConfiguration
* SchemaConfiguration `object`: Specifies the schema to which you want Kinesis Data Firehose to configure your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true.
  * CatalogId
  * DatabaseName
  * Region
  * RoleARN
  * TableName
  * VersionId

### SecurityGroupIdList
* SecurityGroupIdList `array`
  * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)

### Serializer
* Serializer `object`: The serializer that you want Kinesis Data Firehose to use to convert data to the target format before writing it to Amazon S3. Kinesis Data Firehose supports two types of serializers: the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/orc/OrcSerde.html">ORC SerDe</a> and the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/parquet/serde/ParquetHiveSerDe.html">Parquet SerDe</a>.
  * OrcSerDe
    * BlockSizeBytes
    * BloomFilterColumns
      * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
    * BloomFilterFalsePositiveProbability
    * Compression
    * DictionaryKeyThreshold
    * EnablePadding
    * FormatVersion
    * PaddingTolerance
    * RowIndexStride
    * StripeSizeBytes
  * ParquetSerDe
    * BlockSizeBytes
    * Compression
    * EnableDictionaryCompression
    * MaxPaddingBytes
    * PageSizeBytes
    * WriterVersion

### ServiceUnavailableException


### SizeInMBs
* SizeInMBs `integer`

### SourceDescription
* SourceDescription `object`: Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.
  * KinesisStreamSourceDescription
    * DeliveryStartTimestamp
    * KinesisStreamARN
    * RoleARN

### SplunkDestinationConfiguration
* SplunkDestinationConfiguration `object`: Describes the configuration of a destination in Splunk.
  * CloudWatchLoggingOptions
    * Enabled
    * LogGroupName
    * LogStreamName
  * HECAcknowledgmentTimeoutInSeconds
  * HECEndpoint **required**
  * HECEndpointType **required**
  * HECToken **required**
  * ProcessingConfiguration
    * Enabled
    * Processors
      * items [Processor](#processor)
  * RetryOptions
    * DurationInSeconds
  * S3BackupMode
  * S3Configuration **required**
    * BucketARN **required**
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN **required**

### SplunkDestinationDescription
* SplunkDestinationDescription `object`: Describes a destination in Splunk.
  * CloudWatchLoggingOptions
    * Enabled
    * LogGroupName
    * LogStreamName
  * HECAcknowledgmentTimeoutInSeconds
  * HECEndpoint
  * HECEndpointType
  * HECToken
  * ProcessingConfiguration
    * Enabled
    * Processors
      * items [Processor](#processor)
  * RetryOptions
    * DurationInSeconds
  * S3BackupMode
  * S3DestinationDescription
    * BucketARN **required**
    * BufferingHints **required**
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat **required**
    * EncryptionConfiguration **required**
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN **required**

### SplunkDestinationUpdate
* SplunkDestinationUpdate `object`: Describes an update for a destination in Splunk.
  * CloudWatchLoggingOptions
    * Enabled
    * LogGroupName
    * LogStreamName
  * HECAcknowledgmentTimeoutInSeconds
  * HECEndpoint
  * HECEndpointType
  * HECToken
  * ProcessingConfiguration
    * Enabled
    * Processors
      * items [Processor](#processor)
  * RetryOptions
    * DurationInSeconds
  * S3BackupMode
  * S3Update
    * BucketARN
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN

### SplunkRetryDurationInSeconds
* SplunkRetryDurationInSeconds `integer`

### SplunkRetryOptions
* SplunkRetryOptions `object`: Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk.
  * DurationInSeconds

### SplunkS3BackupMode
* SplunkS3BackupMode `string` (values: FailedEventsOnly, AllEvents)

### StartDeliveryStreamEncryptionInput
* StartDeliveryStreamEncryptionInput `object`
  * DeliveryStreamEncryptionConfigurationInput
    * KeyARN
    * KeyType **required**
  * DeliveryStreamName **required**

### StartDeliveryStreamEncryptionOutput
* StartDeliveryStreamEncryptionOutput `object`

### StopDeliveryStreamEncryptionInput
* StopDeliveryStreamEncryptionInput `object`
  * DeliveryStreamName **required**

### StopDeliveryStreamEncryptionOutput
* StopDeliveryStreamEncryptionOutput `object`

### SubnetIdList
* SubnetIdList `array`
  * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)

### Tag
* Tag `object`: Metadata that you can assign to a delivery stream, consisting of a key-value pair.
  * Key **required**
  * Value

### TagDeliveryStreamInput
* TagDeliveryStreamInput `object`
  * DeliveryStreamName **required**
  * Tags **required**
    * items [Tag](#tag)

### TagDeliveryStreamInputTagList
* TagDeliveryStreamInputTagList `array`
  * items [Tag](#tag)

### TagDeliveryStreamOutput
* TagDeliveryStreamOutput `object`

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagValue
* TagValue `string`

### Timestamp
* Timestamp `string`

### UntagDeliveryStreamInput
* UntagDeliveryStreamInput `object`
  * DeliveryStreamName **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagDeliveryStreamOutput
* UntagDeliveryStreamOutput `object`

### UpdateDestinationInput
* UpdateDestinationInput `object`
  * CurrentDeliveryStreamVersionId **required**
  * DeliveryStreamName **required**
  * DestinationId **required**
  * ElasticsearchDestinationUpdate
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * ClusterEndpoint
    * DomainARN
    * IndexName
    * IndexRotationPeriod
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RetryOptions
      * DurationInSeconds
    * RoleARN
    * S3Update
      * BucketARN
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN
    * TypeName
  * ExtendedS3DestinationUpdate
    * BucketARN
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * DataFormatConversionConfiguration
      * Enabled
      * InputFormatConfiguration
        * Deserializer
          * HiveJsonSerDe
          * OpenXJsonSerDe
      * OutputFormatConfiguration
        * Serializer
          * OrcSerDe
          * ParquetSerDe
      * SchemaConfiguration
        * CatalogId
        * DatabaseName
        * Region
        * RoleARN
        * TableName
        * VersionId
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RoleARN
    * S3BackupMode
    * S3BackupUpdate
      * BucketARN
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN
  * HttpEndpointDestinationUpdate
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
    * EndpointConfiguration
      * AccessKey
      * Name
      * Url **required**
    * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
    * RequestConfiguration
      * CommonAttributes
        * items [HttpEndpointCommonAttribute](#httpendpointcommonattribute)
      * ContentEncoding
    * RetryOptions
      * DurationInSeconds
    * RoleARN
    * S3BackupMode
    * S3Update [S3DestinationUpdate](#s3destinationupdate)
  * RedshiftDestinationUpdate
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * ClusterJDBCURL
    * CopyCommand
      * CopyOptions
      * DataTableColumns
      * DataTableName **required**
    * Password
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RetryOptions
      * DurationInSeconds
    * RoleARN
    * S3BackupMode
    * S3BackupUpdate
      * BucketARN
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN
    * S3Update
      * BucketARN
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN
    * Username
  * S3DestinationUpdate
    * BucketARN
    * BufferingHints
      * IntervalInSeconds
      * SizeInMBs
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * CompressionFormat
    * EncryptionConfiguration
      * KMSEncryptionConfig
        * AWSKMSKeyARN **required**
      * NoEncryptionConfig
    * ErrorOutputPrefix
    * Prefix
    * RoleARN
  * SplunkDestinationUpdate
    * CloudWatchLoggingOptions
      * Enabled
      * LogGroupName
      * LogStreamName
    * HECAcknowledgmentTimeoutInSeconds
    * HECEndpoint
    * HECEndpointType
    * HECToken
    * ProcessingConfiguration
      * Enabled
      * Processors
        * items [Processor](#processor)
    * RetryOptions
      * DurationInSeconds
    * S3BackupMode
    * S3Update
      * BucketARN
      * BufferingHints
        * IntervalInSeconds
        * SizeInMBs
      * CloudWatchLoggingOptions
        * Enabled
        * LogGroupName
        * LogStreamName
      * CompressionFormat
      * EncryptionConfiguration
        * KMSEncryptionConfig
          * AWSKMSKeyARN **required**
        * NoEncryptionConfig
      * ErrorOutputPrefix
      * Prefix
      * RoleARN

### UpdateDestinationOutput
* UpdateDestinationOutput `object`

### Username
* Username `string`

### VpcConfiguration
* VpcConfiguration `object`: The details of the VPC of the Amazon ES destination.
  * RoleARN **required**
  * SecurityGroupIds **required**
    * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
  * SubnetIds **required**
    * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)

### VpcConfigurationDescription
* VpcConfigurationDescription `object`: The details of the VPC of the Amazon ES destination.
  * RoleARN **required**
  * SecurityGroupIds **required**
    * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
  * SubnetIds **required**
    * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
  * VpcId **required**


