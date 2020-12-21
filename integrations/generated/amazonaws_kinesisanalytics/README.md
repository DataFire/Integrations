# @datafire/amazonaws_kinesisanalytics

Client library for Amazon Kinesis Analytics

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_kinesisanalytics
```
```js
let amazonaws_kinesisanalytics = require('@datafire/amazonaws_kinesisanalytics').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Kinesis Analytics</fullname> <p> <b>Overview</b> </p> <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>This is the <i>Amazon Kinesis Analytics v1 API Reference</i>. The Amazon Kinesis Analytics Developer Guide provides additional information. </p>

## Actions

### AddApplicationCloudWatchLoggingOption



```js
amazonaws_kinesisanalytics.AddApplicationCloudWatchLoggingOption({
  "ApplicationName": null,
  "CurrentApplicationVersionId": null,
  "CloudWatchLoggingOption": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * CloudWatchLoggingOption **required**
    * LogStreamARN **required**
    * RoleARN **required**
  * CurrentApplicationVersionId **required**

#### Output
* output [AddApplicationCloudWatchLoggingOptionResponse](#addapplicationcloudwatchloggingoptionresponse)

### AddApplicationInput



```js
amazonaws_kinesisanalytics.AddApplicationInput({
  "ApplicationName": null,
  "CurrentApplicationVersionId": null,
  "Input": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * Input **required**
    * InputParallelism
      * Count
    * InputProcessingConfiguration
      * InputLambdaProcessor **required**
        * ResourceARN **required**
        * RoleARN **required**
    * InputSchema **required**
      * RecordColumns **required**
        * items [RecordColumn](#recordcolumn)
      * RecordEncoding
      * RecordFormat **required**
        * MappingParameters
          * CSVMappingParameters
          * JSONMappingParameters
        * RecordFormatType **required**
    * KinesisFirehoseInput
      * ResourceARN **required**
      * RoleARN **required**
    * KinesisStreamsInput
      * ResourceARN **required**
      * RoleARN **required**
    * NamePrefix **required**

#### Output
* output [AddApplicationInputResponse](#addapplicationinputresponse)

### AddApplicationInputProcessingConfiguration



```js
amazonaws_kinesisanalytics.AddApplicationInputProcessingConfiguration({
  "ApplicationName": null,
  "CurrentApplicationVersionId": null,
  "InputId": null,
  "InputProcessingConfiguration": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * InputId **required**
  * InputProcessingConfiguration **required**
    * InputLambdaProcessor **required**
      * ResourceARN **required**
      * RoleARN **required**

#### Output
* output [AddApplicationInputProcessingConfigurationResponse](#addapplicationinputprocessingconfigurationresponse)

### AddApplicationOutput



```js
amazonaws_kinesisanalytics.AddApplicationOutput({
  "ApplicationName": null,
  "CurrentApplicationVersionId": null,
  "Output": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * Output **required**
    * DestinationSchema **required**
      * RecordFormatType **required**
    * KinesisFirehoseOutput
      * ResourceARN **required**
      * RoleARN **required**
    * KinesisStreamsOutput
      * ResourceARN **required**
      * RoleARN **required**
    * LambdaOutput
      * ResourceARN **required**
      * RoleARN **required**
    * Name **required**

#### Output
* output [AddApplicationOutputResponse](#addapplicationoutputresponse)

### AddApplicationReferenceDataSource



```js
amazonaws_kinesisanalytics.AddApplicationReferenceDataSource({
  "ApplicationName": null,
  "CurrentApplicationVersionId": null,
  "ReferenceDataSource": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * ReferenceDataSource **required**
    * ReferenceSchema **required**
      * RecordColumns **required**
        * items [RecordColumn](#recordcolumn)
      * RecordEncoding
      * RecordFormat **required**
        * MappingParameters
          * CSVMappingParameters
          * JSONMappingParameters
        * RecordFormatType **required**
    * S3ReferenceDataSource
      * BucketARN **required**
      * FileKey **required**
      * ReferenceRoleARN **required**
    * TableName **required**

#### Output
* output [AddApplicationReferenceDataSourceResponse](#addapplicationreferencedatasourceresponse)

### CreateApplication



```js
amazonaws_kinesisanalytics.CreateApplication({
  "ApplicationName": null
}, context)
```

#### Input
* input `object`
  * ApplicationCode
  * ApplicationDescription
  * ApplicationName **required**
  * CloudWatchLoggingOptions
    * items [CloudWatchLoggingOption](#cloudwatchloggingoption)
  * Inputs
    * items [Input](#input)
  * Outputs
    * items [Output](#output)
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateApplicationResponse](#createapplicationresponse)

### DeleteApplication



```js
amazonaws_kinesisanalytics.DeleteApplication({
  "ApplicationName": null,
  "CreateTimestamp": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * CreateTimestamp **required**

#### Output
* output [DeleteApplicationResponse](#deleteapplicationresponse)

### DeleteApplicationCloudWatchLoggingOption



```js
amazonaws_kinesisanalytics.DeleteApplicationCloudWatchLoggingOption({
  "ApplicationName": null,
  "CurrentApplicationVersionId": null,
  "CloudWatchLoggingOptionId": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * CloudWatchLoggingOptionId **required**
  * CurrentApplicationVersionId **required**

#### Output
* output [DeleteApplicationCloudWatchLoggingOptionResponse](#deleteapplicationcloudwatchloggingoptionresponse)

### DeleteApplicationInputProcessingConfiguration



```js
amazonaws_kinesisanalytics.DeleteApplicationInputProcessingConfiguration({
  "ApplicationName": null,
  "CurrentApplicationVersionId": null,
  "InputId": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * InputId **required**

#### Output
* output [DeleteApplicationInputProcessingConfigurationResponse](#deleteapplicationinputprocessingconfigurationresponse)

### DeleteApplicationOutput



```js
amazonaws_kinesisanalytics.DeleteApplicationOutput({
  "ApplicationName": null,
  "CurrentApplicationVersionId": null,
  "OutputId": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * OutputId **required**

#### Output
* output [DeleteApplicationOutputResponse](#deleteapplicationoutputresponse)

### DeleteApplicationReferenceDataSource



```js
amazonaws_kinesisanalytics.DeleteApplicationReferenceDataSource({
  "ApplicationName": null,
  "CurrentApplicationVersionId": null,
  "ReferenceId": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * ReferenceId **required**

#### Output
* output [DeleteApplicationReferenceDataSourceResponse](#deleteapplicationreferencedatasourceresponse)

### DescribeApplication



```js
amazonaws_kinesisanalytics.DescribeApplication({
  "ApplicationName": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**

#### Output
* output [DescribeApplicationResponse](#describeapplicationresponse)

### DiscoverInputSchema



```js
amazonaws_kinesisanalytics.DiscoverInputSchema({}, context)
```

#### Input
* input `object`
  * InputProcessingConfiguration
    * InputLambdaProcessor **required**
      * ResourceARN **required**
      * RoleARN **required**
  * InputStartingPositionConfiguration
    * InputStartingPosition
  * ResourceARN
  * RoleARN
  * S3Configuration
    * BucketARN **required**
    * FileKey **required**
    * RoleARN **required**

#### Output
* output [DiscoverInputSchemaResponse](#discoverinputschemaresponse)

### ListApplications



```js
amazonaws_kinesisanalytics.ListApplications({}, context)
```

#### Input
* input `object`
  * ExclusiveStartApplicationName
  * Limit

#### Output
* output [ListApplicationsResponse](#listapplicationsresponse)

### ListTagsForResource



```js
amazonaws_kinesisanalytics.ListTagsForResource({
  "ResourceARN": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### StartApplication



```js
amazonaws_kinesisanalytics.StartApplication({
  "ApplicationName": null,
  "InputConfigurations": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * InputConfigurations **required**
    * items [InputConfiguration](#inputconfiguration)

#### Output
* output [StartApplicationResponse](#startapplicationresponse)

### StopApplication



```js
amazonaws_kinesisanalytics.StopApplication({
  "ApplicationName": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**

#### Output
* output [StopApplicationResponse](#stopapplicationresponse)

### TagResource



```js
amazonaws_kinesisanalytics.TagResource({
  "ResourceARN": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_kinesisanalytics.UntagResource({
  "ResourceARN": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateApplication



```js
amazonaws_kinesisanalytics.UpdateApplication({
  "ApplicationName": null,
  "CurrentApplicationVersionId": null,
  "ApplicationUpdate": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * ApplicationUpdate **required**
    * ApplicationCodeUpdate
    * CloudWatchLoggingOptionUpdates
      * items [CloudWatchLoggingOptionUpdate](#cloudwatchloggingoptionupdate)
    * InputUpdates
      * items [InputUpdate](#inputupdate)
    * OutputUpdates
      * items [OutputUpdate](#outputupdate)
    * ReferenceDataSourceUpdates
      * items [ReferenceDataSourceUpdate](#referencedatasourceupdate)
  * CurrentApplicationVersionId **required**

#### Output
* output [UpdateApplicationResponse](#updateapplicationresponse)



## Definitions

### AddApplicationCloudWatchLoggingOptionRequest
* AddApplicationCloudWatchLoggingOptionRequest `object`
  * ApplicationName **required**
  * CloudWatchLoggingOption **required**
    * LogStreamARN **required**
    * RoleARN **required**
  * CurrentApplicationVersionId **required**

### AddApplicationCloudWatchLoggingOptionResponse
* AddApplicationCloudWatchLoggingOptionResponse `object`

### AddApplicationInputProcessingConfigurationRequest
* AddApplicationInputProcessingConfigurationRequest `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * InputId **required**
  * InputProcessingConfiguration **required**
    * InputLambdaProcessor **required**
      * ResourceARN **required**
      * RoleARN **required**

### AddApplicationInputProcessingConfigurationResponse
* AddApplicationInputProcessingConfigurationResponse `object`

### AddApplicationInputRequest
* AddApplicationInputRequest `object`: <p/>
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * Input **required**
    * InputParallelism
      * Count
    * InputProcessingConfiguration
      * InputLambdaProcessor **required**
        * ResourceARN **required**
        * RoleARN **required**
    * InputSchema **required**
      * RecordColumns **required**
        * items [RecordColumn](#recordcolumn)
      * RecordEncoding
      * RecordFormat **required**
        * MappingParameters
          * CSVMappingParameters
          * JSONMappingParameters
        * RecordFormatType **required**
    * KinesisFirehoseInput
      * ResourceARN **required**
      * RoleARN **required**
    * KinesisStreamsInput
      * ResourceARN **required**
      * RoleARN **required**
    * NamePrefix **required**

### AddApplicationInputResponse
* AddApplicationInputResponse `object`: <p/>

### AddApplicationOutputRequest
* AddApplicationOutputRequest `object`: <p/>
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * Output **required**
    * DestinationSchema **required**
      * RecordFormatType **required**
    * KinesisFirehoseOutput
      * ResourceARN **required**
      * RoleARN **required**
    * KinesisStreamsOutput
      * ResourceARN **required**
      * RoleARN **required**
    * LambdaOutput
      * ResourceARN **required**
      * RoleARN **required**
    * Name **required**

### AddApplicationOutputResponse
* AddApplicationOutputResponse `object`: <p/>

### AddApplicationReferenceDataSourceRequest
* AddApplicationReferenceDataSourceRequest `object`: <p/>
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * ReferenceDataSource **required**
    * ReferenceSchema **required**
      * RecordColumns **required**
        * items [RecordColumn](#recordcolumn)
      * RecordEncoding
      * RecordFormat **required**
        * MappingParameters
          * CSVMappingParameters
          * JSONMappingParameters
        * RecordFormatType **required**
    * S3ReferenceDataSource
      * BucketARN **required**
      * FileKey **required**
      * ReferenceRoleARN **required**
    * TableName **required**

### AddApplicationReferenceDataSourceResponse
* AddApplicationReferenceDataSourceResponse `object`: <p/>

### ApplicationCode
* ApplicationCode `string`

### ApplicationDescription
* ApplicationDescription `string`

### ApplicationDetail
* ApplicationDetail `object`: <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.</p>
  * ApplicationARN **required**
  * ApplicationCode
  * ApplicationDescription
  * ApplicationName **required**
  * ApplicationStatus **required**
  * ApplicationVersionId **required**
  * CloudWatchLoggingOptionDescriptions
    * items [CloudWatchLoggingOptionDescription](#cloudwatchloggingoptiondescription)
  * CreateTimestamp
  * InputDescriptions
    * items [InputDescription](#inputdescription)
  * LastUpdateTimestamp
  * OutputDescriptions
    * items [OutputDescription](#outputdescription)
  * ReferenceDataSourceDescriptions
    * items [ReferenceDataSourceDescription](#referencedatasourcedescription)

### ApplicationName
* ApplicationName `string`

### ApplicationStatus
* ApplicationStatus `string` (values: DELETING, STARTING, STOPPING, READY, RUNNING, UPDATING)

### ApplicationSummaries
* ApplicationSummaries `array`
  * items [ApplicationSummary](#applicationsummary)

### ApplicationSummary
* ApplicationSummary `object`: <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p>
  * ApplicationARN **required**
  * ApplicationName **required**
  * ApplicationStatus **required**

### ApplicationUpdate
* ApplicationUpdate `object`: Describes updates to apply to an existing Amazon Kinesis Analytics application.
  * ApplicationCodeUpdate
  * CloudWatchLoggingOptionUpdates
    * items [CloudWatchLoggingOptionUpdate](#cloudwatchloggingoptionupdate)
  * InputUpdates
    * items [InputUpdate](#inputupdate)
  * OutputUpdates
    * items [OutputUpdate](#outputupdate)
  * ReferenceDataSourceUpdates
    * items [ReferenceDataSourceUpdate](#referencedatasourceupdate)

### ApplicationVersionId
* ApplicationVersionId `integer`

### BooleanObject
* BooleanObject `boolean`

### BucketARN
* BucketARN `string`

### CSVMappingParameters
* CSVMappingParameters `object`: <p>Provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p>
  * RecordColumnDelimiter **required**
  * RecordRowDelimiter **required**

### CloudWatchLoggingOption
* CloudWatchLoggingOption `object`: Provides a description of CloudWatch logging options, including the log stream Amazon Resource Name (ARN) and the role ARN.
  * LogStreamARN **required**
  * RoleARN **required**

### CloudWatchLoggingOptionDescription
* CloudWatchLoggingOptionDescription `object`: Description of the CloudWatch logging option.
  * CloudWatchLoggingOptionId
  * LogStreamARN **required**
  * RoleARN **required**

### CloudWatchLoggingOptionDescriptions
* CloudWatchLoggingOptionDescriptions `array`
  * items [CloudWatchLoggingOptionDescription](#cloudwatchloggingoptiondescription)

### CloudWatchLoggingOptionUpdate
* CloudWatchLoggingOptionUpdate `object`: Describes CloudWatch logging option updates.
  * CloudWatchLoggingOptionId **required**
  * LogStreamARNUpdate
  * RoleARNUpdate

### CloudWatchLoggingOptionUpdates
* CloudWatchLoggingOptionUpdates `array`
  * items [CloudWatchLoggingOptionUpdate](#cloudwatchloggingoptionupdate)

### CloudWatchLoggingOptions
* CloudWatchLoggingOptions `array`
  * items [CloudWatchLoggingOption](#cloudwatchloggingoption)

### CodeValidationException


### ConcurrentModificationException


### CreateApplicationRequest
* CreateApplicationRequest `object`: TBD
  * ApplicationCode
  * ApplicationDescription
  * ApplicationName **required**
  * CloudWatchLoggingOptions
    * items [CloudWatchLoggingOption](#cloudwatchloggingoption)
  * Inputs
    * items [Input](#input)
  * Outputs
    * items [Output](#output)
  * Tags
    * items [Tag](#tag)

### CreateApplicationResponse
* CreateApplicationResponse `object`: TBD
  * ApplicationSummary **required**
    * ApplicationARN **required**
    * ApplicationName **required**
    * ApplicationStatus **required**

### DeleteApplicationCloudWatchLoggingOptionRequest
* DeleteApplicationCloudWatchLoggingOptionRequest `object`
  * ApplicationName **required**
  * CloudWatchLoggingOptionId **required**
  * CurrentApplicationVersionId **required**

### DeleteApplicationCloudWatchLoggingOptionResponse
* DeleteApplicationCloudWatchLoggingOptionResponse `object`

### DeleteApplicationInputProcessingConfigurationRequest
* DeleteApplicationInputProcessingConfigurationRequest `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * InputId **required**

### DeleteApplicationInputProcessingConfigurationResponse
* DeleteApplicationInputProcessingConfigurationResponse `object`

### DeleteApplicationOutputRequest
* DeleteApplicationOutputRequest `object`: <p/>
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * OutputId **required**

### DeleteApplicationOutputResponse
* DeleteApplicationOutputResponse `object`: <p/>

### DeleteApplicationReferenceDataSourceRequest
* DeleteApplicationReferenceDataSourceRequest `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * ReferenceId **required**

### DeleteApplicationReferenceDataSourceResponse
* DeleteApplicationReferenceDataSourceResponse `object`

### DeleteApplicationRequest
* DeleteApplicationRequest `object`: <p/>
  * ApplicationName **required**
  * CreateTimestamp **required**

### DeleteApplicationResponse
* DeleteApplicationResponse `object`: <p/>

### DescribeApplicationRequest
* DescribeApplicationRequest `object`: <p/>
  * ApplicationName **required**

### DescribeApplicationResponse
* DescribeApplicationResponse `object`: <p/>
  * ApplicationDetail **required**
    * ApplicationARN **required**
    * ApplicationCode
    * ApplicationDescription
    * ApplicationName **required**
    * ApplicationStatus **required**
    * ApplicationVersionId **required**
    * CloudWatchLoggingOptionDescriptions
      * items [CloudWatchLoggingOptionDescription](#cloudwatchloggingoptiondescription)
    * CreateTimestamp
    * InputDescriptions
      * items [InputDescription](#inputdescription)
    * LastUpdateTimestamp
    * OutputDescriptions
      * items [OutputDescription](#outputdescription)
    * ReferenceDataSourceDescriptions
      * items [ReferenceDataSourceDescription](#referencedatasourcedescription)

### DestinationSchema
* DestinationSchema `object`: Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>. 
  * RecordFormatType **required**

### DiscoverInputSchemaRequest
* DiscoverInputSchemaRequest `object`
  * InputProcessingConfiguration
    * InputLambdaProcessor **required**
      * ResourceARN **required**
      * RoleARN **required**
  * InputStartingPositionConfiguration
    * InputStartingPosition
  * ResourceARN
  * RoleARN
  * S3Configuration
    * BucketARN **required**
    * FileKey **required**
    * RoleARN **required**

### DiscoverInputSchemaResponse
* DiscoverInputSchemaResponse `object`: <p/>
  * InputSchema
    * RecordColumns **required**
      * items [RecordColumn](#recordcolumn)
    * RecordEncoding
    * RecordFormat **required**
      * MappingParameters
        * CSVMappingParameters
          * RecordColumnDelimiter **required**
          * RecordRowDelimiter **required**
        * JSONMappingParameters
          * RecordRowPath **required**
      * RecordFormatType **required**
  * ParsedInputRecords
    * items [ParsedInputRecord](#parsedinputrecord)
  * ProcessedInputRecords
    * items [ProcessedInputRecord](#processedinputrecord)
  * RawInputRecords
    * items [RawInputRecord](#rawinputrecord)

### FileKey
* FileKey `string`

### Id
* Id `string`

### InAppStreamName
* InAppStreamName `string`

### InAppStreamNames
* InAppStreamNames `array`
  * items [InAppStreamName](#inappstreamname)

### InAppTableName
* InAppTableName `string`

### Input
* Input `object`: When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. 
  * InputParallelism
    * Count
  * InputProcessingConfiguration
    * InputLambdaProcessor **required**
      * ResourceARN **required**
      * RoleARN **required**
  * InputSchema **required**
    * RecordColumns **required**
      * items [RecordColumn](#recordcolumn)
    * RecordEncoding
    * RecordFormat **required**
      * MappingParameters
        * CSVMappingParameters
          * RecordColumnDelimiter **required**
          * RecordRowDelimiter **required**
        * JSONMappingParameters
          * RecordRowPath **required**
      * RecordFormatType **required**
  * KinesisFirehoseInput
    * ResourceARN **required**
    * RoleARN **required**
  * KinesisStreamsInput
    * ResourceARN **required**
    * RoleARN **required**
  * NamePrefix **required**

### InputConfiguration
* InputConfiguration `object`: When you start your application, you provide this configuration, which identifies the input source and the point in the input source at which you want the application to start processing records.
  * Id **required**
  * InputStartingPositionConfiguration **required**
    * InputStartingPosition

### InputConfigurations
* InputConfigurations `array`
  * items [InputConfiguration](#inputconfiguration)

### InputDescription
* InputDescription `object`: Describes the application input configuration. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. 
  * InAppStreamNames
    * items [InAppStreamName](#inappstreamname)
  * InputId
  * InputParallelism
    * Count
  * InputProcessingConfigurationDescription
    * InputLambdaProcessorDescription
      * ResourceARN
      * RoleARN
  * InputSchema
    * RecordColumns **required**
      * items [RecordColumn](#recordcolumn)
    * RecordEncoding
    * RecordFormat **required**
      * MappingParameters
        * CSVMappingParameters
          * RecordColumnDelimiter **required**
          * RecordRowDelimiter **required**
        * JSONMappingParameters
          * RecordRowPath **required**
      * RecordFormatType **required**
  * InputStartingPositionConfiguration
    * InputStartingPosition
  * KinesisFirehoseInputDescription
    * ResourceARN
    * RoleARN
  * KinesisStreamsInputDescription
    * ResourceARN
    * RoleARN
  * NamePrefix

### InputDescriptions
* InputDescriptions `array`
  * items [InputDescription](#inputdescription)

### InputLambdaProcessor
* InputLambdaProcessor `object`: An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda function. 
  * ResourceARN **required**
  * RoleARN **required**

### InputLambdaProcessorDescription
* InputLambdaProcessorDescription `object`: An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda expression.
  * ResourceARN
  * RoleARN

### InputLambdaProcessorUpdate
* InputLambdaProcessorUpdate `object`: Represents an update to the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records in the stream.
  * ResourceARNUpdate
  * RoleARNUpdate

### InputParallelism
* InputParallelism `object`: Describes the number of in-application streams to create for a given streaming source. For information about parallelism, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. 
  * Count

### InputParallelismCount
* InputParallelismCount `integer`

### InputParallelismUpdate
* InputParallelismUpdate `object`: Provides updates to the parallelism count.
  * CountUpdate

### InputProcessingConfiguration
* InputProcessingConfiguration `object`: Provides a description of a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.
  * InputLambdaProcessor **required**
    * ResourceARN **required**
    * RoleARN **required**

### InputProcessingConfigurationDescription
* InputProcessingConfigurationDescription `object`: Provides configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.
  * InputLambdaProcessorDescription
    * ResourceARN
    * RoleARN

### InputProcessingConfigurationUpdate
* InputProcessingConfigurationUpdate `object`: Describes updates to an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a>. 
  * InputLambdaProcessorUpdate **required**
    * ResourceARNUpdate
    * RoleARNUpdate

### InputSchemaUpdate
* InputSchemaUpdate `object`: Describes updates for the application's input schema.
  * RecordColumnUpdates
    * items [RecordColumn](#recordcolumn)
  * RecordEncodingUpdate
  * RecordFormatUpdate
    * MappingParameters
      * CSVMappingParameters
        * RecordColumnDelimiter **required**
        * RecordRowDelimiter **required**
      * JSONMappingParameters
        * RecordRowPath **required**
    * RecordFormatType **required**

### InputStartingPosition
* InputStartingPosition `string` (values: NOW, TRIM_HORIZON, LAST_STOPPED_POINT)

### InputStartingPositionConfiguration
* InputStartingPositionConfiguration `object`: Describes the point at which the application reads from the streaming source.
  * InputStartingPosition

### InputUpdate
* InputUpdate `object`: Describes updates to a specific input configuration (identified by the <code>InputId</code> of an application). 
  * InputId **required**
  * InputParallelismUpdate
    * CountUpdate
  * InputProcessingConfigurationUpdate
    * InputLambdaProcessorUpdate **required**
      * ResourceARNUpdate
      * RoleARNUpdate
  * InputSchemaUpdate
    * RecordColumnUpdates
      * items [RecordColumn](#recordcolumn)
    * RecordEncodingUpdate
    * RecordFormatUpdate
      * MappingParameters
        * CSVMappingParameters
          * RecordColumnDelimiter **required**
          * RecordRowDelimiter **required**
        * JSONMappingParameters
          * RecordRowPath **required**
      * RecordFormatType **required**
  * KinesisFirehoseInputUpdate
    * ResourceARNUpdate
    * RoleARNUpdate
  * KinesisStreamsInputUpdate
    * ResourceARNUpdate
    * RoleARNUpdate
  * NamePrefixUpdate

### InputUpdates
* InputUpdates `array`
  * items [InputUpdate](#inputupdate)

### Inputs
* Inputs `array`
  * items [Input](#input)

### InvalidApplicationConfigurationException


### InvalidArgumentException


### JSONMappingParameters
* JSONMappingParameters `object`: Provides additional mapping information when JSON is the record format on the streaming source.
  * RecordRowPath **required**

### KinesisAnalyticsARN
* KinesisAnalyticsARN `string`

### KinesisFirehoseInput
* KinesisFirehoseInput `object`:  Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.
  * ResourceARN **required**
  * RoleARN **required**

### KinesisFirehoseInputDescription
* KinesisFirehoseInputDescription `object`:  Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source in the application input configuration. 
  * ResourceARN
  * RoleARN

### KinesisFirehoseInputUpdate
* KinesisFirehoseInputUpdate `object`: When updating application input configuration, provides information about an Amazon Kinesis Firehose delivery stream as the streaming source.
  * ResourceARNUpdate
  * RoleARNUpdate

### KinesisFirehoseOutput
* KinesisFirehoseOutput `object`: When configuring application output, identifies an Amazon Kinesis Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to write to the stream on your behalf.
  * ResourceARN **required**
  * RoleARN **required**

### KinesisFirehoseOutputDescription
* KinesisFirehoseOutputDescription `object`:  For an application output, describes the Amazon Kinesis Firehose delivery stream configured as its destination. 
  * ResourceARN
  * RoleARN

### KinesisFirehoseOutputUpdate
* KinesisFirehoseOutputUpdate `object`:  When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis Firehose delivery stream configured as the destination. 
  * ResourceARNUpdate
  * RoleARNUpdate

### KinesisStreamsInput
* KinesisStreamsInput `object`:  Identifies an Amazon Kinesis stream as the streaming source. You provide the stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.
  * ResourceARN **required**
  * RoleARN **required**

### KinesisStreamsInputDescription
* KinesisStreamsInputDescription `object`:  Describes the Amazon Kinesis stream that is configured as the streaming source in the application input configuration. 
  * ResourceARN
  * RoleARN

### KinesisStreamsInputUpdate
* KinesisStreamsInputUpdate `object`: When updating application input configuration, provides information about an Amazon Kinesis stream as the streaming source.
  * ResourceARNUpdate
  * RoleARNUpdate

### KinesisStreamsOutput
* KinesisStreamsOutput `object`: When configuring application output, identifies an Amazon Kinesis stream as the destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the stream on your behalf.
  * ResourceARN **required**
  * RoleARN **required**

### KinesisStreamsOutputDescription
* KinesisStreamsOutputDescription `object`:  For an application output, describes the Amazon Kinesis stream configured as its destination. 
  * ResourceARN
  * RoleARN

### KinesisStreamsOutputUpdate
* KinesisStreamsOutputUpdate `object`:  When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis stream configured as the destination. 
  * ResourceARNUpdate
  * RoleARNUpdate

### LambdaOutput
* LambdaOutput `object`: When configuring application output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the function on your behalf. 
  * ResourceARN **required**
  * RoleARN **required**

### LambdaOutputDescription
* LambdaOutputDescription `object`: For an application output, describes the AWS Lambda function configured as its destination. 
  * ResourceARN
  * RoleARN

### LambdaOutputUpdate
* LambdaOutputUpdate `object`: When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an AWS Lambda function configured as the destination.
  * ResourceARNUpdate
  * RoleARNUpdate

### LimitExceededException


### ListApplicationsInputLimit
* ListApplicationsInputLimit `integer`

### ListApplicationsRequest
* ListApplicationsRequest `object`: <p/>
  * ExclusiveStartApplicationName
  * Limit

### ListApplicationsResponse
* ListApplicationsResponse `object`: <p/>
  * ApplicationSummaries **required**
    * items [ApplicationSummary](#applicationsummary)
  * HasMoreApplications **required**

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceARN **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### LogStreamARN
* LogStreamARN `string`

### MappingParameters
* MappingParameters `object`: When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
  * CSVMappingParameters
    * RecordColumnDelimiter **required**
    * RecordRowDelimiter **required**
  * JSONMappingParameters
    * RecordRowPath **required**

### Output
* Output `object`: <p> Describes application output configuration in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. </p> <p/> <p>For limits on how many destinations an application can write and other limitations, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p>
  * DestinationSchema **required**
    * RecordFormatType **required**
  * KinesisFirehoseOutput
    * ResourceARN **required**
    * RoleARN **required**
  * KinesisStreamsOutput
    * ResourceARN **required**
    * RoleARN **required**
  * LambdaOutput
    * ResourceARN **required**
    * RoleARN **required**
  * Name **required**

### OutputDescription
* OutputDescription `object`: Describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. 
  * DestinationSchema
    * RecordFormatType **required**
  * KinesisFirehoseOutputDescription
    * ResourceARN
    * RoleARN
  * KinesisStreamsOutputDescription
    * ResourceARN
    * RoleARN
  * LambdaOutputDescription
    * ResourceARN
    * RoleARN
  * Name
  * OutputId

### OutputDescriptions
* OutputDescriptions `array`
  * items [OutputDescription](#outputdescription)

### OutputUpdate
* OutputUpdate `object`:  Describes updates to the output configuration identified by the <code>OutputId</code>. 
  * DestinationSchemaUpdate
    * RecordFormatType **required**
  * KinesisFirehoseOutputUpdate
    * ResourceARNUpdate
    * RoleARNUpdate
  * KinesisStreamsOutputUpdate
    * ResourceARNUpdate
    * RoleARNUpdate
  * LambdaOutputUpdate
    * ResourceARNUpdate
    * RoleARNUpdate
  * NameUpdate
  * OutputId **required**

### OutputUpdates
* OutputUpdates `array`
  * items [OutputUpdate](#outputupdate)

### Outputs
* Outputs `array`
  * items [Output](#output)

### ParsedInputRecord
* ParsedInputRecord `array`
  * items [ParsedInputRecordField](#parsedinputrecordfield)

### ParsedInputRecordField
* ParsedInputRecordField `string`

### ParsedInputRecords
* ParsedInputRecords `array`
  * items [ParsedInputRecord](#parsedinputrecord)

### ProcessedInputRecord
* ProcessedInputRecord `string`

### ProcessedInputRecords
* ProcessedInputRecords `array`
  * items [ProcessedInputRecord](#processedinputrecord)

### RawInputRecord
* RawInputRecord `string`

### RawInputRecords
* RawInputRecords `array`
  * items [RawInputRecord](#rawinputrecord)

### RecordColumn
* RecordColumn `object`: <p>Describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p>
  * Mapping
  * Name **required**
  * SqlType **required**

### RecordColumnDelimiter
* RecordColumnDelimiter `string`

### RecordColumnMapping
* RecordColumnMapping `string`

### RecordColumnName
* RecordColumnName `string`

### RecordColumnSqlType
* RecordColumnSqlType `string`

### RecordColumns
* RecordColumns `array`
  * items [RecordColumn](#recordcolumn)

### RecordEncoding
* RecordEncoding `string`

### RecordFormat
* RecordFormat `object`:  Describes the record format and relevant mapping information that should be applied to schematize the records on the stream. 
  * MappingParameters
    * CSVMappingParameters
      * RecordColumnDelimiter **required**
      * RecordRowDelimiter **required**
    * JSONMappingParameters
      * RecordRowPath **required**
  * RecordFormatType **required**

### RecordFormatType
* RecordFormatType `string` (values: JSON, CSV)

### RecordRowDelimiter
* RecordRowDelimiter `string`

### RecordRowPath
* RecordRowPath `string`

### ReferenceDataSource
* ReferenceDataSource `object`: Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
  * ReferenceSchema **required**
    * RecordColumns **required**
      * items [RecordColumn](#recordcolumn)
    * RecordEncoding
    * RecordFormat **required**
      * MappingParameters
        * CSVMappingParameters
          * RecordColumnDelimiter **required**
          * RecordRowDelimiter **required**
        * JSONMappingParameters
          * RecordRowPath **required**
      * RecordFormatType **required**
  * S3ReferenceDataSource
    * BucketARN **required**
    * FileKey **required**
    * ReferenceRoleARN **required**
  * TableName **required**

### ReferenceDataSourceDescription
* ReferenceDataSourceDescription `object`: Describes the reference data source configured for an application.
  * ReferenceId **required**
  * ReferenceSchema
    * RecordColumns **required**
      * items [RecordColumn](#recordcolumn)
    * RecordEncoding
    * RecordFormat **required**
      * MappingParameters
        * CSVMappingParameters
          * RecordColumnDelimiter **required**
          * RecordRowDelimiter **required**
        * JSONMappingParameters
          * RecordRowPath **required**
      * RecordFormatType **required**
  * S3ReferenceDataSourceDescription **required**
    * BucketARN **required**
    * FileKey **required**
    * ReferenceRoleARN **required**
  * TableName **required**

### ReferenceDataSourceDescriptions
* ReferenceDataSourceDescriptions `array`
  * items [ReferenceDataSourceDescription](#referencedatasourcedescription)

### ReferenceDataSourceUpdate
* ReferenceDataSourceUpdate `object`: When you update a reference data source configuration for an application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.
  * ReferenceId **required**
  * ReferenceSchemaUpdate
    * RecordColumns **required**
      * items [RecordColumn](#recordcolumn)
    * RecordEncoding
    * RecordFormat **required**
      * MappingParameters
        * CSVMappingParameters
          * RecordColumnDelimiter **required**
          * RecordRowDelimiter **required**
        * JSONMappingParameters
          * RecordRowPath **required**
      * RecordFormatType **required**
  * S3ReferenceDataSourceUpdate
    * BucketARNUpdate
    * FileKeyUpdate
    * ReferenceRoleARNUpdate
  * TableNameUpdate

### ReferenceDataSourceUpdates
* ReferenceDataSourceUpdates `array`
  * items [ReferenceDataSourceUpdate](#referencedatasourceupdate)

### ResourceARN
* ResourceARN `string`

### ResourceInUseException


### ResourceNotFoundException


### ResourceProvisionedThroughputExceededException


### RoleARN
* RoleARN `string`

### S3Configuration
* S3Configuration `object`: Provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket, and the name of the Amazon S3 object that contains the data.
  * BucketARN **required**
  * FileKey **required**
  * RoleARN **required**

### S3ReferenceDataSource
* S3ReferenceDataSource `object`: <p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.</p> <p>An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation to trigger reloading of data into your application.</p>
  * BucketARN **required**
  * FileKey **required**
  * ReferenceRoleARN **required**

### S3ReferenceDataSourceDescription
* S3ReferenceDataSourceDescription `object`: Provides the bucket name and object key name that stores the reference data.
  * BucketARN **required**
  * FileKey **required**
  * ReferenceRoleARN **required**

### S3ReferenceDataSourceUpdate
* S3ReferenceDataSourceUpdate `object`: Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.
  * BucketARNUpdate
  * FileKeyUpdate
  * ReferenceRoleARNUpdate

### ServiceUnavailableException


### SourceSchema
* SourceSchema `object`: Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
  * RecordColumns **required**
    * items [RecordColumn](#recordcolumn)
  * RecordEncoding
  * RecordFormat **required**
    * MappingParameters
      * CSVMappingParameters
        * RecordColumnDelimiter **required**
        * RecordRowDelimiter **required**
      * JSONMappingParameters
        * RecordRowPath **required**
    * RecordFormatType **required**

### StartApplicationRequest
* StartApplicationRequest `object`: <p/>
  * ApplicationName **required**
  * InputConfigurations **required**
    * items [InputConfiguration](#inputconfiguration)

### StartApplicationResponse
* StartApplicationResponse `object`: <p/>

### StopApplicationRequest
* StopApplicationRequest `object`: <p/>
  * ApplicationName **required**

### StopApplicationResponse
* StopApplicationResponse `object`: <p/>

### Tag
* Tag `object`: A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.
  * Key **required**
  * Value

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### Timestamp
* Timestamp `string`

### TooManyTagsException


### UnableToDetectSchemaException


### UnsupportedOperationException


### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateApplicationRequest
* UpdateApplicationRequest `object`
  * ApplicationName **required**
  * ApplicationUpdate **required**
    * ApplicationCodeUpdate
    * CloudWatchLoggingOptionUpdates
      * items [CloudWatchLoggingOptionUpdate](#cloudwatchloggingoptionupdate)
    * InputUpdates
      * items [InputUpdate](#inputupdate)
    * OutputUpdates
      * items [OutputUpdate](#outputupdate)
    * ReferenceDataSourceUpdates
      * items [ReferenceDataSourceUpdate](#referencedatasourceupdate)
  * CurrentApplicationVersionId **required**

### UpdateApplicationResponse
* UpdateApplicationResponse `object`


