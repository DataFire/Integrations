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

amazonaws_firehose.CreateDeliveryStream({
  "DeliveryStreamName": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Kinesis Data Firehose API Reference</fullname> <p>Amazon Kinesis Data Firehose is a fully managed service that delivers real-time streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon Elasticsearch Service (Amazon ES), Amazon Redshift, and Splunk.</p>

## Actions

### CreateDeliveryStream



```js
amazonaws_firehose.CreateDeliveryStream({
  "DeliveryStreamName": ""
}, context)
```

#### Input
* input `object`
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * DeliveryStreamType [DeliveryStreamType](#deliverystreamtype)
  * ElasticsearchDestinationConfiguration [ElasticsearchDestinationConfiguration](#elasticsearchdestinationconfiguration)
  * ExtendedS3DestinationConfiguration [ExtendedS3DestinationConfiguration](#extendeds3destinationconfiguration)
  * KinesisStreamSourceConfiguration [KinesisStreamSourceConfiguration](#kinesisstreamsourceconfiguration)
  * RedshiftDestinationConfiguration [RedshiftDestinationConfiguration](#redshiftdestinationconfiguration)
  * S3DestinationConfiguration [S3DestinationConfiguration](#s3destinationconfiguration)
  * SplunkDestinationConfiguration [SplunkDestinationConfiguration](#splunkdestinationconfiguration)

#### Output
* output [CreateDeliveryStreamOutput](#createdeliverystreamoutput)

### DeleteDeliveryStream



```js
amazonaws_firehose.DeleteDeliveryStream({
  "DeliveryStreamName": ""
}, context)
```

#### Input
* input `object`
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)

#### Output
* output [DeleteDeliveryStreamOutput](#deletedeliverystreamoutput)

### DescribeDeliveryStream



```js
amazonaws_firehose.DescribeDeliveryStream({
  "DeliveryStreamName": ""
}, context)
```

#### Input
* input `object`
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * ExclusiveStartDestinationId [DestinationId](#destinationid)
  * Limit [DescribeDeliveryStreamInputLimit](#describedeliverystreaminputlimit)

#### Output
* output [DescribeDeliveryStreamOutput](#describedeliverystreamoutput)

### ListDeliveryStreams



```js
amazonaws_firehose.ListDeliveryStreams({}, context)
```

#### Input
* input `object`
  * DeliveryStreamType [DeliveryStreamType](#deliverystreamtype)
  * ExclusiveStartDeliveryStreamName [DeliveryStreamName](#deliverystreamname)
  * Limit [ListDeliveryStreamsInputLimit](#listdeliverystreamsinputlimit)

#### Output
* output [ListDeliveryStreamsOutput](#listdeliverystreamsoutput)

### ListTagsForDeliveryStream



```js
amazonaws_firehose.ListTagsForDeliveryStream({
  "DeliveryStreamName": ""
}, context)
```

#### Input
* input `object`
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * ExclusiveStartTagKey [TagKey](#tagkey)
  * Limit [ListTagsForDeliveryStreamInputLimit](#listtagsfordeliverystreaminputlimit)

#### Output
* output [ListTagsForDeliveryStreamOutput](#listtagsfordeliverystreamoutput)

### PutRecord



```js
amazonaws_firehose.PutRecord({
  "DeliveryStreamName": "",
  "Record": {
    "Data": ""
  }
}, context)
```

#### Input
* input `object`
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * Record **required** [Record](#record)

#### Output
* output [PutRecordOutput](#putrecordoutput)

### PutRecordBatch



```js
amazonaws_firehose.PutRecordBatch({
  "DeliveryStreamName": "",
  "Records": []
}, context)
```

#### Input
* input `object`
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * Records **required** [PutRecordBatchRequestEntryList](#putrecordbatchrequestentrylist)

#### Output
* output [PutRecordBatchOutput](#putrecordbatchoutput)

### TagDeliveryStream



```js
amazonaws_firehose.TagDeliveryStream({
  "DeliveryStreamName": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * Tags **required** [TagDeliveryStreamInputTagList](#tagdeliverystreaminputtaglist)

#### Output
* output [TagDeliveryStreamOutput](#tagdeliverystreamoutput)

### UntagDeliveryStream



```js
amazonaws_firehose.UntagDeliveryStream({
  "DeliveryStreamName": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * TagKeys **required** [TagKeyList](#tagkeylist)

#### Output
* output [UntagDeliveryStreamOutput](#untagdeliverystreamoutput)

### UpdateDestination



```js
amazonaws_firehose.UpdateDestination({
  "DeliveryStreamName": "",
  "CurrentDeliveryStreamVersionId": "",
  "DestinationId": ""
}, context)
```

#### Input
* input `object`
  * CurrentDeliveryStreamVersionId **required** [DeliveryStreamVersionId](#deliverystreamversionid)
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * DestinationId **required** [DestinationId](#destinationid)
  * ElasticsearchDestinationUpdate [ElasticsearchDestinationUpdate](#elasticsearchdestinationupdate)
  * ExtendedS3DestinationUpdate [ExtendedS3DestinationUpdate](#extendeds3destinationupdate)
  * RedshiftDestinationUpdate [RedshiftDestinationUpdate](#redshiftdestinationupdate)
  * S3DestinationUpdate [S3DestinationUpdate](#s3destinationupdate)
  * SplunkDestinationUpdate [SplunkDestinationUpdate](#splunkdestinationupdate)

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
* BufferingHints `object`: Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal.
  * IntervalInSeconds [IntervalInSeconds](#intervalinseconds)
  * SizeInMBs [SizeInMBs](#sizeinmbs)

### CloudWatchLoggingOptions
* CloudWatchLoggingOptions `object`: Describes the Amazon CloudWatch logging options for your delivery stream.
  * Enabled [BooleanObject](#booleanobject)
  * LogGroupName [LogGroupName](#loggroupname)
  * LogStreamName [LogStreamName](#logstreamname)

### ClusterJDBCURL
* ClusterJDBCURL `string`

### ColumnToJsonKeyMappings
* ColumnToJsonKeyMappings `array`
  * items `object`
    * key [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
    * value [NonEmptyString](#nonemptystring)

### CompressionFormat
* CompressionFormat `string` (values: UNCOMPRESSED, GZIP, ZIP, Snappy)

### ConcurrentModificationException
* ConcurrentModificationException `object`: Another modification has already happened. Fetch <b>VersionId</b> again and use it to update the destination.
  * message [ErrorMessage](#errormessage)

### CopyCommand
* CopyCommand `object`: Describes a <code>COPY</code> command for Amazon Redshift.
  * CopyOptions [CopyOptions](#copyoptions)
  * DataTableColumns [DataTableColumns](#datatablecolumns)
  * DataTableName **required** [DataTableName](#datatablename)

### CopyOptions
* CopyOptions `string`

### CreateDeliveryStreamInput
* CreateDeliveryStreamInput `object`
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * DeliveryStreamType [DeliveryStreamType](#deliverystreamtype)
  * ElasticsearchDestinationConfiguration [ElasticsearchDestinationConfiguration](#elasticsearchdestinationconfiguration)
  * ExtendedS3DestinationConfiguration [ExtendedS3DestinationConfiguration](#extendeds3destinationconfiguration)
  * KinesisStreamSourceConfiguration [KinesisStreamSourceConfiguration](#kinesisstreamsourceconfiguration)
  * RedshiftDestinationConfiguration [RedshiftDestinationConfiguration](#redshiftdestinationconfiguration)
  * S3DestinationConfiguration [S3DestinationConfiguration](#s3destinationconfiguration)
  * SplunkDestinationConfiguration [SplunkDestinationConfiguration](#splunkdestinationconfiguration)

### CreateDeliveryStreamOutput
* CreateDeliveryStreamOutput `object`
  * DeliveryStreamARN [DeliveryStreamARN](#deliverystreamarn)

### Data
* Data `string`

### DataFormatConversionConfiguration
* DataFormatConversionConfiguration `object`: Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>.
  * Enabled [BooleanObject](#booleanobject)
  * InputFormatConfiguration [InputFormatConfiguration](#inputformatconfiguration)
  * OutputFormatConfiguration [OutputFormatConfiguration](#outputformatconfiguration)
  * SchemaConfiguration [SchemaConfiguration](#schemaconfiguration)

### DataTableColumns
* DataTableColumns `string`

### DataTableName
* DataTableName `string`

### DeleteDeliveryStreamInput
* DeleteDeliveryStreamInput `object`
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)

### DeleteDeliveryStreamOutput
* DeleteDeliveryStreamOutput `object`

### DeliveryStartTimestamp
* DeliveryStartTimestamp `string`

### DeliveryStreamARN
* DeliveryStreamARN `string`

### DeliveryStreamDescription
* DeliveryStreamDescription `object`: Contains information about a delivery stream.
  * CreateTimestamp [Timestamp](#timestamp)
  * DeliveryStreamARN **required** [DeliveryStreamARN](#deliverystreamarn)
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * DeliveryStreamStatus **required** [DeliveryStreamStatus](#deliverystreamstatus)
  * DeliveryStreamType **required** [DeliveryStreamType](#deliverystreamtype)
  * Destinations **required** [DestinationDescriptionList](#destinationdescriptionlist)
  * HasMoreDestinations **required** [BooleanObject](#booleanobject)
  * LastUpdateTimestamp [Timestamp](#timestamp)
  * Source [SourceDescription](#sourcedescription)
  * VersionId **required** [DeliveryStreamVersionId](#deliverystreamversionid)

### DeliveryStreamName
* DeliveryStreamName `string`

### DeliveryStreamNameList
* DeliveryStreamNameList `array`
  * items [DeliveryStreamName](#deliverystreamname)

### DeliveryStreamStatus
* DeliveryStreamStatus `string` (values: CREATING, DELETING, ACTIVE)

### DeliveryStreamType
* DeliveryStreamType `string` (values: DirectPut, KinesisStreamAsSource)

### DeliveryStreamVersionId
* DeliveryStreamVersionId `string`

### DescribeDeliveryStreamInput
* DescribeDeliveryStreamInput `object`
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * ExclusiveStartDestinationId [DestinationId](#destinationid)
  * Limit [DescribeDeliveryStreamInputLimit](#describedeliverystreaminputlimit)

### DescribeDeliveryStreamInputLimit
* DescribeDeliveryStreamInputLimit `integer`

### DescribeDeliveryStreamOutput
* DescribeDeliveryStreamOutput `object`
  * DeliveryStreamDescription **required** [DeliveryStreamDescription](#deliverystreamdescription)

### Deserializer
* Deserializer `object`: The deserializer you want Kinesis Data Firehose to use for converting the input data from JSON. Kinesis Data Firehose then serializes the data to its final format using the <a>Serializer</a>. Kinesis Data Firehose supports two types of deserializers: the <a href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON">Apache Hive JSON SerDe</a> and the <a href="https://github.com/rcongiu/Hive-JSON-Serde">OpenX JSON SerDe</a>.
  * HiveJsonSerDe [HiveJsonSerDe](#hivejsonserde)
  * OpenXJsonSerDe [OpenXJsonSerDe](#openxjsonserde)

### DestinationDescription
* DestinationDescription `object`: Describes the destination for a delivery stream.
  * DestinationId **required** [DestinationId](#destinationid)
  * ElasticsearchDestinationDescription [ElasticsearchDestinationDescription](#elasticsearchdestinationdescription)
  * ExtendedS3DestinationDescription [ExtendedS3DestinationDescription](#extendeds3destinationdescription)
  * RedshiftDestinationDescription [RedshiftDestinationDescription](#redshiftdestinationdescription)
  * S3DestinationDescription [S3DestinationDescription](#s3destinationdescription)
  * SplunkDestinationDescription [SplunkDestinationDescription](#splunkdestinationdescription)

### DestinationDescriptionList
* DestinationDescriptionList `array`
  * items [DestinationDescription](#destinationdescription)

### DestinationId
* DestinationId `string`

### ElasticsearchBufferingHints
* ElasticsearchBufferingHints `object`: Describes the buffering to perform before delivering data to the Amazon ES destination.
  * IntervalInSeconds [ElasticsearchBufferingIntervalInSeconds](#elasticsearchbufferingintervalinseconds)
  * SizeInMBs [ElasticsearchBufferingSizeInMBs](#elasticsearchbufferingsizeinmbs)

### ElasticsearchBufferingIntervalInSeconds
* ElasticsearchBufferingIntervalInSeconds `integer`

### ElasticsearchBufferingSizeInMBs
* ElasticsearchBufferingSizeInMBs `integer`

### ElasticsearchDestinationConfiguration
* ElasticsearchDestinationConfiguration `object`: Describes the configuration of a destination in Amazon ES.
  * BufferingHints [ElasticsearchBufferingHints](#elasticsearchbufferinghints)
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * DomainARN **required** [ElasticsearchDomainARN](#elasticsearchdomainarn)
  * IndexName **required** [ElasticsearchIndexName](#elasticsearchindexname)
  * IndexRotationPeriod [ElasticsearchIndexRotationPeriod](#elasticsearchindexrotationperiod)
  * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
  * RetryOptions [ElasticsearchRetryOptions](#elasticsearchretryoptions)
  * RoleARN **required** [RoleARN](#rolearn)
  * S3BackupMode [ElasticsearchS3BackupMode](#elasticsearchs3backupmode)
  * S3Configuration **required** [S3DestinationConfiguration](#s3destinationconfiguration)
  * TypeName **required** [ElasticsearchTypeName](#elasticsearchtypename)

### ElasticsearchDestinationDescription
* ElasticsearchDestinationDescription `object`: The destination description in Amazon ES.
  * BufferingHints [ElasticsearchBufferingHints](#elasticsearchbufferinghints)
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * DomainARN [ElasticsearchDomainARN](#elasticsearchdomainarn)
  * IndexName [ElasticsearchIndexName](#elasticsearchindexname)
  * IndexRotationPeriod [ElasticsearchIndexRotationPeriod](#elasticsearchindexrotationperiod)
  * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
  * RetryOptions [ElasticsearchRetryOptions](#elasticsearchretryoptions)
  * RoleARN [RoleARN](#rolearn)
  * S3BackupMode [ElasticsearchS3BackupMode](#elasticsearchs3backupmode)
  * S3DestinationDescription [S3DestinationDescription](#s3destinationdescription)
  * TypeName [ElasticsearchTypeName](#elasticsearchtypename)

### ElasticsearchDestinationUpdate
* ElasticsearchDestinationUpdate `object`: Describes an update for a destination in Amazon ES.
  * BufferingHints [ElasticsearchBufferingHints](#elasticsearchbufferinghints)
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * DomainARN [ElasticsearchDomainARN](#elasticsearchdomainarn)
  * IndexName [ElasticsearchIndexName](#elasticsearchindexname)
  * IndexRotationPeriod [ElasticsearchIndexRotationPeriod](#elasticsearchindexrotationperiod)
  * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
  * RetryOptions [ElasticsearchRetryOptions](#elasticsearchretryoptions)
  * RoleARN [RoleARN](#rolearn)
  * S3Update [S3DestinationUpdate](#s3destinationupdate)
  * TypeName [ElasticsearchTypeName](#elasticsearchtypename)

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
  * DurationInSeconds [ElasticsearchRetryDurationInSeconds](#elasticsearchretrydurationinseconds)

### ElasticsearchS3BackupMode
* ElasticsearchS3BackupMode `string` (values: FailedDocumentsOnly, AllDocuments)

### ElasticsearchTypeName
* ElasticsearchTypeName `string`

### EncryptionConfiguration
* EncryptionConfiguration `object`: Describes the encryption for a destination in Amazon S3.
  * KMSEncryptionConfig [KMSEncryptionConfig](#kmsencryptionconfig)
  * NoEncryptionConfig [NoEncryptionConfig](#noencryptionconfig)

### ErrorCode
* ErrorCode `string`

### ErrorMessage
* ErrorMessage `string`

### ExtendedS3DestinationConfiguration
* ExtendedS3DestinationConfiguration `object`: Describes the configuration of a destination in Amazon S3.
  * BucketARN **required** [BucketARN](#bucketarn)
  * BufferingHints [BufferingHints](#bufferinghints)
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * CompressionFormat [CompressionFormat](#compressionformat)
  * DataFormatConversionConfiguration [DataFormatConversionConfiguration](#dataformatconversionconfiguration)
  * EncryptionConfiguration [EncryptionConfiguration](#encryptionconfiguration)
  * Prefix [Prefix](#prefix)
  * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
  * RoleARN **required** [RoleARN](#rolearn)
  * S3BackupConfiguration [S3DestinationConfiguration](#s3destinationconfiguration)
  * S3BackupMode [S3BackupMode](#s3backupmode)

### ExtendedS3DestinationDescription
* ExtendedS3DestinationDescription `object`: Describes a destination in Amazon S3.
  * BucketARN **required** [BucketARN](#bucketarn)
  * BufferingHints **required** [BufferingHints](#bufferinghints)
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * CompressionFormat **required** [CompressionFormat](#compressionformat)
  * DataFormatConversionConfiguration [DataFormatConversionConfiguration](#dataformatconversionconfiguration)
  * EncryptionConfiguration **required** [EncryptionConfiguration](#encryptionconfiguration)
  * Prefix [Prefix](#prefix)
  * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
  * RoleARN **required** [RoleARN](#rolearn)
  * S3BackupDescription [S3DestinationDescription](#s3destinationdescription)
  * S3BackupMode [S3BackupMode](#s3backupmode)

### ExtendedS3DestinationUpdate
* ExtendedS3DestinationUpdate `object`: Describes an update for a destination in Amazon S3.
  * BucketARN [BucketARN](#bucketarn)
  * BufferingHints [BufferingHints](#bufferinghints)
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * CompressionFormat [CompressionFormat](#compressionformat)
  * DataFormatConversionConfiguration [DataFormatConversionConfiguration](#dataformatconversionconfiguration)
  * EncryptionConfiguration [EncryptionConfiguration](#encryptionconfiguration)
  * Prefix [Prefix](#prefix)
  * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
  * RoleARN [RoleARN](#rolearn)
  * S3BackupMode [S3BackupMode](#s3backupmode)
  * S3BackupUpdate [S3DestinationUpdate](#s3destinationupdate)

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
  * TimestampFormats [ListOfNonEmptyStrings](#listofnonemptystrings)

### InputFormatConfiguration
* InputFormatConfiguration `object`: Specifies the deserializer you want to use to convert the format of the input data.
  * Deserializer [Deserializer](#deserializer)

### IntervalInSeconds
* IntervalInSeconds `integer`

### InvalidArgumentException
* InvalidArgumentException `object`: The specified input parameter has a value that is not valid.
  * message [ErrorMessage](#errormessage)

### KMSEncryptionConfig
* KMSEncryptionConfig `object`: Describes an encryption key for a destination in Amazon S3.
  * AWSKMSKeyARN **required** [AWSKMSKeyARN](#awskmskeyarn)

### KinesisStreamARN
* KinesisStreamARN `string`

### KinesisStreamSourceConfiguration
* KinesisStreamSourceConfiguration `object`: The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream.
  * KinesisStreamARN **required** [KinesisStreamARN](#kinesisstreamarn)
  * RoleARN **required** [RoleARN](#rolearn)

### KinesisStreamSourceDescription
* KinesisStreamSourceDescription `object`: Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.
  * DeliveryStartTimestamp [DeliveryStartTimestamp](#deliverystarttimestamp)
  * KinesisStreamARN [KinesisStreamARN](#kinesisstreamarn)
  * RoleARN [RoleARN](#rolearn)

### LimitExceededException
* LimitExceededException `object`: You have already reached the limit for a requested resource.
  * message [ErrorMessage](#errormessage)

### ListDeliveryStreamsInput
* ListDeliveryStreamsInput `object`
  * DeliveryStreamType [DeliveryStreamType](#deliverystreamtype)
  * ExclusiveStartDeliveryStreamName [DeliveryStreamName](#deliverystreamname)
  * Limit [ListDeliveryStreamsInputLimit](#listdeliverystreamsinputlimit)

### ListDeliveryStreamsInputLimit
* ListDeliveryStreamsInputLimit `integer`

### ListDeliveryStreamsOutput
* ListDeliveryStreamsOutput `object`
  * DeliveryStreamNames **required** [DeliveryStreamNameList](#deliverystreamnamelist)
  * HasMoreDeliveryStreams **required** [BooleanObject](#booleanobject)

### ListOfNonEmptyStrings
* ListOfNonEmptyStrings `array`
  * items [NonEmptyString](#nonemptystring)

### ListOfNonEmptyStringsWithoutWhitespace
* ListOfNonEmptyStringsWithoutWhitespace `array`
  * items [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)

### ListTagsForDeliveryStreamInput
* ListTagsForDeliveryStreamInput `object`
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * ExclusiveStartTagKey [TagKey](#tagkey)
  * Limit [ListTagsForDeliveryStreamInputLimit](#listtagsfordeliverystreaminputlimit)

### ListTagsForDeliveryStreamInputLimit
* ListTagsForDeliveryStreamInputLimit `integer`

### ListTagsForDeliveryStreamOutput
* ListTagsForDeliveryStreamOutput `object`
  * HasMoreTags **required** [BooleanObject](#booleanobject)
  * Tags **required** [ListTagsForDeliveryStreamOutputTagList](#listtagsfordeliverystreamoutputtaglist)

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
  * CaseInsensitive [BooleanObject](#booleanobject)
  * ColumnToJsonKeyMappings [ColumnToJsonKeyMappings](#columntojsonkeymappings)
  * ConvertDotsInJsonKeysToUnderscores [BooleanObject](#booleanobject)

### OrcCompression
* OrcCompression `string` (values: NONE, ZLIB, SNAPPY)

### OrcFormatVersion
* OrcFormatVersion `string` (values: V0_11, V0_12)

### OrcRowIndexStride
* OrcRowIndexStride `integer`

### OrcSerDe
* OrcSerDe `object`: A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>.
  * BlockSizeBytes [BlockSizeBytes](#blocksizebytes)
  * BloomFilterColumns [ListOfNonEmptyStringsWithoutWhitespace](#listofnonemptystringswithoutwhitespace)
  * BloomFilterFalsePositiveProbability [Proportion](#proportion)
  * Compression [OrcCompression](#orccompression)
  * DictionaryKeyThreshold [Proportion](#proportion)
  * EnablePadding [BooleanObject](#booleanobject)
  * FormatVersion [OrcFormatVersion](#orcformatversion)
  * PaddingTolerance [Proportion](#proportion)
  * RowIndexStride [OrcRowIndexStride](#orcrowindexstride)
  * StripeSizeBytes [OrcStripeSizeBytes](#orcstripesizebytes)

### OrcStripeSizeBytes
* OrcStripeSizeBytes `integer`

### OutputFormatConfiguration
* OutputFormatConfiguration `object`: Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data before it writes it to Amazon S3.
  * Serializer [Serializer](#serializer)

### ParquetCompression
* ParquetCompression `string` (values: UNCOMPRESSED, GZIP, SNAPPY)

### ParquetPageSizeBytes
* ParquetPageSizeBytes `integer`

### ParquetSerDe
* ParquetSerDe `object`: A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>.
  * BlockSizeBytes [BlockSizeBytes](#blocksizebytes)
  * Compression [ParquetCompression](#parquetcompression)
  * EnableDictionaryCompression [BooleanObject](#booleanobject)
  * MaxPaddingBytes [NonNegativeIntegerObject](#nonnegativeintegerobject)
  * PageSizeBytes [ParquetPageSizeBytes](#parquetpagesizebytes)
  * WriterVersion [ParquetWriterVersion](#parquetwriterversion)

### ParquetWriterVersion
* ParquetWriterVersion `string` (values: V1, V2)

### Password
* Password `string`

### Prefix
* Prefix `string`

### ProcessingConfiguration
* ProcessingConfiguration `object`: Describes a data processing configuration.
  * Enabled [BooleanObject](#booleanobject)
  * Processors [ProcessorList](#processorlist)

### Processor
* Processor `object`: Describes a data processor.
  * Parameters [ProcessorParameterList](#processorparameterlist)
  * Type **required** [ProcessorType](#processortype)

### ProcessorList
* ProcessorList `array`
  * items [Processor](#processor)

### ProcessorParameter
* ProcessorParameter `object`: Describes the processor parameter.
  * ParameterName **required** [ProcessorParameterName](#processorparametername)
  * ParameterValue **required** [ProcessorParameterValue](#processorparametervalue)

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
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * Records **required** [PutRecordBatchRequestEntryList](#putrecordbatchrequestentrylist)

### PutRecordBatchOutput
* PutRecordBatchOutput `object`
  * FailedPutCount **required** [NonNegativeIntegerObject](#nonnegativeintegerobject)
  * RequestResponses **required** [PutRecordBatchResponseEntryList](#putrecordbatchresponseentrylist)

### PutRecordBatchRequestEntryList
* PutRecordBatchRequestEntryList `array`
  * items [Record](#record)

### PutRecordBatchResponseEntry
* PutRecordBatchResponseEntry `object`: Contains the result for an individual record from a <a>PutRecordBatch</a> request. If the record is successfully added to your delivery stream, it receives a record ID. If the record fails to be added to your delivery stream, the result includes an error code and an error message.
  * ErrorCode [ErrorCode](#errorcode)
  * ErrorMessage [ErrorMessage](#errormessage)
  * RecordId [PutResponseRecordId](#putresponserecordid)

### PutRecordBatchResponseEntryList
* PutRecordBatchResponseEntryList `array`
  * items [PutRecordBatchResponseEntry](#putrecordbatchresponseentry)

### PutRecordInput
* PutRecordInput `object`
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * Record **required** [Record](#record)

### PutRecordOutput
* PutRecordOutput `object`
  * RecordId **required** [PutResponseRecordId](#putresponserecordid)

### PutResponseRecordId
* PutResponseRecordId `string`

### Record
* Record `object`: The unit of data in a delivery stream.
  * Data **required** [Data](#data)

### RedshiftDestinationConfiguration
* RedshiftDestinationConfiguration `object`: Describes the configuration of a destination in Amazon Redshift.
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * ClusterJDBCURL **required** [ClusterJDBCURL](#clusterjdbcurl)
  * CopyCommand **required** [CopyCommand](#copycommand)
  * Password **required** [Password](#password)
  * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
  * RetryOptions [RedshiftRetryOptions](#redshiftretryoptions)
  * RoleARN **required** [RoleARN](#rolearn)
  * S3BackupConfiguration [S3DestinationConfiguration](#s3destinationconfiguration)
  * S3BackupMode [RedshiftS3BackupMode](#redshifts3backupmode)
  * S3Configuration **required** [S3DestinationConfiguration](#s3destinationconfiguration)
  * Username **required** [Username](#username)

### RedshiftDestinationDescription
* RedshiftDestinationDescription `object`: Describes a destination in Amazon Redshift.
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * ClusterJDBCURL **required** [ClusterJDBCURL](#clusterjdbcurl)
  * CopyCommand **required** [CopyCommand](#copycommand)
  * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
  * RetryOptions [RedshiftRetryOptions](#redshiftretryoptions)
  * RoleARN **required** [RoleARN](#rolearn)
  * S3BackupDescription [S3DestinationDescription](#s3destinationdescription)
  * S3BackupMode [RedshiftS3BackupMode](#redshifts3backupmode)
  * S3DestinationDescription **required** [S3DestinationDescription](#s3destinationdescription)
  * Username **required** [Username](#username)

### RedshiftDestinationUpdate
* RedshiftDestinationUpdate `object`: Describes an update for a destination in Amazon Redshift.
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * ClusterJDBCURL [ClusterJDBCURL](#clusterjdbcurl)
  * CopyCommand [CopyCommand](#copycommand)
  * Password [Password](#password)
  * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
  * RetryOptions [RedshiftRetryOptions](#redshiftretryoptions)
  * RoleARN [RoleARN](#rolearn)
  * S3BackupMode [RedshiftS3BackupMode](#redshifts3backupmode)
  * S3BackupUpdate [S3DestinationUpdate](#s3destinationupdate)
  * S3Update [S3DestinationUpdate](#s3destinationupdate)
  * Username [Username](#username)

### RedshiftRetryDurationInSeconds
* RedshiftRetryDurationInSeconds `integer`

### RedshiftRetryOptions
* RedshiftRetryOptions `object`: Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift.
  * DurationInSeconds [RedshiftRetryDurationInSeconds](#redshiftretrydurationinseconds)

### RedshiftS3BackupMode
* RedshiftS3BackupMode `string` (values: Disabled, Enabled)

### ResourceInUseException
* ResourceInUseException `object`: The resource is already in use and not available for this operation.
  * message [ErrorMessage](#errormessage)

### ResourceNotFoundException
* ResourceNotFoundException `object`: The specified resource could not be found.
  * message [ErrorMessage](#errormessage)

### RoleARN
* RoleARN `string`

### S3BackupMode
* S3BackupMode `string` (values: Disabled, Enabled)

### S3DestinationConfiguration
* S3DestinationConfiguration `object`: Describes the configuration of a destination in Amazon S3.
  * BucketARN **required** [BucketARN](#bucketarn)
  * BufferingHints [BufferingHints](#bufferinghints)
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * CompressionFormat [CompressionFormat](#compressionformat)
  * EncryptionConfiguration [EncryptionConfiguration](#encryptionconfiguration)
  * Prefix [Prefix](#prefix)
  * RoleARN **required** [RoleARN](#rolearn)

### S3DestinationDescription
* S3DestinationDescription `object`: Describes a destination in Amazon S3.
  * BucketARN **required** [BucketARN](#bucketarn)
  * BufferingHints **required** [BufferingHints](#bufferinghints)
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * CompressionFormat **required** [CompressionFormat](#compressionformat)
  * EncryptionConfiguration **required** [EncryptionConfiguration](#encryptionconfiguration)
  * Prefix [Prefix](#prefix)
  * RoleARN **required** [RoleARN](#rolearn)

### S3DestinationUpdate
* S3DestinationUpdate `object`: Describes an update for a destination in Amazon S3.
  * BucketARN [BucketARN](#bucketarn)
  * BufferingHints [BufferingHints](#bufferinghints)
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * CompressionFormat [CompressionFormat](#compressionformat)
  * EncryptionConfiguration [EncryptionConfiguration](#encryptionconfiguration)
  * Prefix [Prefix](#prefix)
  * RoleARN [RoleARN](#rolearn)

### SchemaConfiguration
* SchemaConfiguration `object`: Specifies the schema to which you want Kinesis Data Firehose to configure your data before it writes it to Amazon S3.
  * CatalogId [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
  * DatabaseName [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
  * Region [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
  * RoleARN [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
  * TableName [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)
  * VersionId [NonEmptyStringWithoutWhitespace](#nonemptystringwithoutwhitespace)

### Serializer
* Serializer `object`: The serializer that you want Kinesis Data Firehose to use to convert data to the target format before writing it to Amazon S3. Kinesis Data Firehose supports two types of serializers: the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/orc/OrcSerde.html">ORC SerDe</a> and the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/parquet/serde/ParquetHiveSerDe.html">Parquet SerDe</a>.
  * OrcSerDe [OrcSerDe](#orcserde)
  * ParquetSerDe [ParquetSerDe](#parquetserde)

### ServiceUnavailableException
* ServiceUnavailableException `object`: The service is unavailable. Back off and retry the operation. If you continue to see the exception, throughput limits for the delivery stream may have been exceeded. For more information about limits and how to request an increase, see <a href="http://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Limits</a>.
  * message [ErrorMessage](#errormessage)

### SizeInMBs
* SizeInMBs `integer`

### SourceDescription
* SourceDescription `object`: Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.
  * KinesisStreamSourceDescription [KinesisStreamSourceDescription](#kinesisstreamsourcedescription)

### SplunkDestinationConfiguration
* SplunkDestinationConfiguration `object`: Describes the configuration of a destination in Splunk.
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * HECAcknowledgmentTimeoutInSeconds [HECAcknowledgmentTimeoutInSeconds](#hecacknowledgmenttimeoutinseconds)
  * HECEndpoint **required** [HECEndpoint](#hecendpoint)
  * HECEndpointType **required** [HECEndpointType](#hecendpointtype)
  * HECToken **required** [HECToken](#hectoken)
  * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
  * RetryOptions [SplunkRetryOptions](#splunkretryoptions)
  * S3BackupMode [SplunkS3BackupMode](#splunks3backupmode)
  * S3Configuration **required** [S3DestinationConfiguration](#s3destinationconfiguration)

### SplunkDestinationDescription
* SplunkDestinationDescription `object`: Describes a destination in Splunk.
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * HECAcknowledgmentTimeoutInSeconds [HECAcknowledgmentTimeoutInSeconds](#hecacknowledgmenttimeoutinseconds)
  * HECEndpoint [HECEndpoint](#hecendpoint)
  * HECEndpointType [HECEndpointType](#hecendpointtype)
  * HECToken [HECToken](#hectoken)
  * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
  * RetryOptions [SplunkRetryOptions](#splunkretryoptions)
  * S3BackupMode [SplunkS3BackupMode](#splunks3backupmode)
  * S3DestinationDescription [S3DestinationDescription](#s3destinationdescription)

### SplunkDestinationUpdate
* SplunkDestinationUpdate `object`: Describes an update for a destination in Splunk.
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * HECAcknowledgmentTimeoutInSeconds [HECAcknowledgmentTimeoutInSeconds](#hecacknowledgmenttimeoutinseconds)
  * HECEndpoint [HECEndpoint](#hecendpoint)
  * HECEndpointType [HECEndpointType](#hecendpointtype)
  * HECToken [HECToken](#hectoken)
  * ProcessingConfiguration [ProcessingConfiguration](#processingconfiguration)
  * RetryOptions [SplunkRetryOptions](#splunkretryoptions)
  * S3BackupMode [SplunkS3BackupMode](#splunks3backupmode)
  * S3Update [S3DestinationUpdate](#s3destinationupdate)

### SplunkRetryDurationInSeconds
* SplunkRetryDurationInSeconds `integer`

### SplunkRetryOptions
* SplunkRetryOptions `object`: Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk.
  * DurationInSeconds [SplunkRetryDurationInSeconds](#splunkretrydurationinseconds)

### SplunkS3BackupMode
* SplunkS3BackupMode `string` (values: FailedEventsOnly, AllEvents)

### Tag
* Tag `object`: Metadata that you can assign to a delivery stream, consisting of a key-value pair.
  * Key **required** [TagKey](#tagkey)
  * Value [TagValue](#tagvalue)

### TagDeliveryStreamInput
* TagDeliveryStreamInput `object`
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * Tags **required** [TagDeliveryStreamInputTagList](#tagdeliverystreaminputtaglist)

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
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * TagKeys **required** [TagKeyList](#tagkeylist)

### UntagDeliveryStreamOutput
* UntagDeliveryStreamOutput `object`

### UpdateDestinationInput
* UpdateDestinationInput `object`
  * CurrentDeliveryStreamVersionId **required** [DeliveryStreamVersionId](#deliverystreamversionid)
  * DeliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * DestinationId **required** [DestinationId](#destinationid)
  * ElasticsearchDestinationUpdate [ElasticsearchDestinationUpdate](#elasticsearchdestinationupdate)
  * ExtendedS3DestinationUpdate [ExtendedS3DestinationUpdate](#extendeds3destinationupdate)
  * RedshiftDestinationUpdate [RedshiftDestinationUpdate](#redshiftdestinationupdate)
  * S3DestinationUpdate [S3DestinationUpdate](#s3destinationupdate)
  * SplunkDestinationUpdate [SplunkDestinationUpdate](#splunkdestinationupdate)

### UpdateDestinationOutput
* UpdateDestinationOutput `object`

### Username
* Username `string`


