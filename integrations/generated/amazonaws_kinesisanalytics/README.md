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

amazonaws_kinesisanalytics.AddApplicationCloudWatchLoggingOption({
  "ApplicationName": "",
  "CurrentApplicationVersionId": 0,
  "CloudWatchLoggingOption": {
    "LogStreamARN": "",
    "RoleARN": ""
  }
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### AddApplicationCloudWatchLoggingOption



```js
amazonaws_kinesisanalytics.AddApplicationCloudWatchLoggingOption({
  "ApplicationName": "",
  "CurrentApplicationVersionId": 0,
  "CloudWatchLoggingOption": {
    "LogStreamARN": "",
    "RoleARN": ""
  }
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CloudWatchLoggingOption **required** [CloudWatchLoggingOption](#cloudwatchloggingoption)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)

#### Output
* output [AddApplicationCloudWatchLoggingOptionResponse](#addapplicationcloudwatchloggingoptionresponse)

### AddApplicationInput



```js
amazonaws_kinesisanalytics.AddApplicationInput({
  "ApplicationName": "",
  "CurrentApplicationVersionId": 0,
  "Input": {
    "NamePrefix": "",
    "InputSchema": {
      "RecordFormat": {
        "RecordFormatType": ""
      },
      "RecordColumns": []
    }
  }
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)
  * Input **required** [Input](#input)

#### Output
* output [AddApplicationInputResponse](#addapplicationinputresponse)

### AddApplicationInputProcessingConfiguration



```js
amazonaws_kinesisanalytics.AddApplicationInputProcessingConfiguration({
  "ApplicationName": "",
  "CurrentApplicationVersionId": 0,
  "InputId": "",
  "InputProcessingConfiguration": {
    "InputLambdaProcessor": {
      "ResourceARN": "",
      "RoleARN": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)
  * InputId **required** [Id](#id)
  * InputProcessingConfiguration **required** [InputProcessingConfiguration](#inputprocessingconfiguration)

#### Output
* output [AddApplicationInputProcessingConfigurationResponse](#addapplicationinputprocessingconfigurationresponse)

### AddApplicationOutput



```js
amazonaws_kinesisanalytics.AddApplicationOutput({
  "ApplicationName": "",
  "CurrentApplicationVersionId": 0,
  "Output": {
    "Name": "",
    "DestinationSchema": {}
  }
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)
  * Output **required** [Output](#output)

#### Output
* output [AddApplicationOutputResponse](#addapplicationoutputresponse)

### AddApplicationReferenceDataSource



```js
amazonaws_kinesisanalytics.AddApplicationReferenceDataSource({
  "ApplicationName": "",
  "CurrentApplicationVersionId": 0,
  "ReferenceDataSource": {
    "TableName": "",
    "ReferenceSchema": {
      "RecordFormat": {
        "RecordFormatType": ""
      },
      "RecordColumns": []
    }
  }
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)
  * ReferenceDataSource **required** [ReferenceDataSource](#referencedatasource)

#### Output
* output [AddApplicationReferenceDataSourceResponse](#addapplicationreferencedatasourceresponse)

### CreateApplication



```js
amazonaws_kinesisanalytics.CreateApplication({
  "ApplicationName": ""
}, context)
```

#### Input
* input `object`
  * ApplicationCode [ApplicationCode](#applicationcode)
  * ApplicationDescription [ApplicationDescription](#applicationdescription)
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * Inputs [Inputs](#inputs)
  * Outputs [Outputs](#outputs)

#### Output
* output [CreateApplicationResponse](#createapplicationresponse)

### DeleteApplication



```js
amazonaws_kinesisanalytics.DeleteApplication({
  "ApplicationName": "",
  "CreateTimestamp": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CreateTimestamp **required** [Timestamp](#timestamp)

#### Output
* output [DeleteApplicationResponse](#deleteapplicationresponse)

### DeleteApplicationCloudWatchLoggingOption



```js
amazonaws_kinesisanalytics.DeleteApplicationCloudWatchLoggingOption({
  "ApplicationName": "",
  "CurrentApplicationVersionId": 0,
  "CloudWatchLoggingOptionId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CloudWatchLoggingOptionId **required** [Id](#id)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)

#### Output
* output [DeleteApplicationCloudWatchLoggingOptionResponse](#deleteapplicationcloudwatchloggingoptionresponse)

### DeleteApplicationInputProcessingConfiguration



```js
amazonaws_kinesisanalytics.DeleteApplicationInputProcessingConfiguration({
  "ApplicationName": "",
  "CurrentApplicationVersionId": 0,
  "InputId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)
  * InputId **required** [Id](#id)

#### Output
* output [DeleteApplicationInputProcessingConfigurationResponse](#deleteapplicationinputprocessingconfigurationresponse)

### DeleteApplicationOutput



```js
amazonaws_kinesisanalytics.DeleteApplicationOutput({
  "ApplicationName": "",
  "CurrentApplicationVersionId": 0,
  "OutputId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)
  * OutputId **required** [Id](#id)

#### Output
* output [DeleteApplicationOutputResponse](#deleteapplicationoutputresponse)

### DeleteApplicationReferenceDataSource



```js
amazonaws_kinesisanalytics.DeleteApplicationReferenceDataSource({
  "ApplicationName": "",
  "CurrentApplicationVersionId": 0,
  "ReferenceId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)
  * ReferenceId **required** [Id](#id)

#### Output
* output [DeleteApplicationReferenceDataSourceResponse](#deleteapplicationreferencedatasourceresponse)

### DescribeApplication



```js
amazonaws_kinesisanalytics.DescribeApplication({
  "ApplicationName": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)

#### Output
* output [DescribeApplicationResponse](#describeapplicationresponse)

### DiscoverInputSchema



```js
amazonaws_kinesisanalytics.DiscoverInputSchema({}, context)
```

#### Input
* input `object`
  * InputProcessingConfiguration [InputProcessingConfiguration](#inputprocessingconfiguration)
  * InputStartingPositionConfiguration [InputStartingPositionConfiguration](#inputstartingpositionconfiguration)
  * ResourceARN [ResourceARN](#resourcearn)
  * RoleARN [RoleARN](#rolearn)
  * S3Configuration [S3Configuration](#s3configuration)

#### Output
* output [DiscoverInputSchemaResponse](#discoverinputschemaresponse)

### ListApplications



```js
amazonaws_kinesisanalytics.ListApplications({}, context)
```

#### Input
* input `object`
  * ExclusiveStartApplicationName [ApplicationName](#applicationname)
  * Limit [ListApplicationsInputLimit](#listapplicationsinputlimit)

#### Output
* output [ListApplicationsResponse](#listapplicationsresponse)

### StartApplication



```js
amazonaws_kinesisanalytics.StartApplication({
  "ApplicationName": "",
  "InputConfigurations": []
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * InputConfigurations **required** [InputConfigurations](#inputconfigurations)

#### Output
* output [StartApplicationResponse](#startapplicationresponse)

### StopApplication



```js
amazonaws_kinesisanalytics.StopApplication({
  "ApplicationName": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)

#### Output
* output [StopApplicationResponse](#stopapplicationresponse)

### UpdateApplication



```js
amazonaws_kinesisanalytics.UpdateApplication({
  "ApplicationName": "",
  "CurrentApplicationVersionId": 0,
  "ApplicationUpdate": {}
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * ApplicationUpdate **required** [ApplicationUpdate](#applicationupdate)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)

#### Output
* output [UpdateApplicationResponse](#updateapplicationresponse)



## Definitions

### AddApplicationCloudWatchLoggingOptionRequest
* AddApplicationCloudWatchLoggingOptionRequest `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CloudWatchLoggingOption **required** [CloudWatchLoggingOption](#cloudwatchloggingoption)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)

### AddApplicationCloudWatchLoggingOptionResponse
* AddApplicationCloudWatchLoggingOptionResponse `object`

### AddApplicationInputProcessingConfigurationRequest
* AddApplicationInputProcessingConfigurationRequest `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)
  * InputId **required** [Id](#id)
  * InputProcessingConfiguration **required** [InputProcessingConfiguration](#inputprocessingconfiguration)

### AddApplicationInputProcessingConfigurationResponse
* AddApplicationInputProcessingConfigurationResponse `object`

### AddApplicationInputRequest
* AddApplicationInputRequest `object`: <p/>
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)
  * Input **required** [Input](#input)

### AddApplicationInputResponse
* AddApplicationInputResponse `object`: <p/>

### AddApplicationOutputRequest
* AddApplicationOutputRequest `object`: <p/>
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)
  * Output **required** [Output](#output)

### AddApplicationOutputResponse
* AddApplicationOutputResponse `object`: <p/>

### AddApplicationReferenceDataSourceRequest
* AddApplicationReferenceDataSourceRequest `object`: <p/>
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)
  * ReferenceDataSource **required** [ReferenceDataSource](#referencedatasource)

### AddApplicationReferenceDataSourceResponse
* AddApplicationReferenceDataSourceResponse `object`: <p/>

### ApplicationCode
* ApplicationCode `string`

### ApplicationDescription
* ApplicationDescription `string`

### ApplicationDetail
* ApplicationDetail `object`: Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.
  * ApplicationARN **required** [ResourceARN](#resourcearn)
  * ApplicationCode [ApplicationCode](#applicationcode)
  * ApplicationDescription [ApplicationDescription](#applicationdescription)
  * ApplicationName **required** [ApplicationName](#applicationname)
  * ApplicationStatus **required** [ApplicationStatus](#applicationstatus)
  * ApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)
  * CloudWatchLoggingOptionDescriptions [CloudWatchLoggingOptionDescriptions](#cloudwatchloggingoptiondescriptions)
  * CreateTimestamp [Timestamp](#timestamp)
  * InputDescriptions [InputDescriptions](#inputdescriptions)
  * LastUpdateTimestamp [Timestamp](#timestamp)
  * OutputDescriptions [OutputDescriptions](#outputdescriptions)
  * ReferenceDataSourceDescriptions [ReferenceDataSourceDescriptions](#referencedatasourcedescriptions)

### ApplicationName
* ApplicationName `string`

### ApplicationStatus
* ApplicationStatus `string` (values: DELETING, STARTING, STOPPING, READY, RUNNING, UPDATING)

### ApplicationSummaries
* ApplicationSummaries `array`
  * items [ApplicationSummary](#applicationsummary)

### ApplicationSummary
* ApplicationSummary `object`: Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.
  * ApplicationARN **required** [ResourceARN](#resourcearn)
  * ApplicationName **required** [ApplicationName](#applicationname)
  * ApplicationStatus **required** [ApplicationStatus](#applicationstatus)

### ApplicationUpdate
* ApplicationUpdate `object`: Describes updates to apply to an existing Amazon Kinesis Analytics application.
  * ApplicationCodeUpdate [ApplicationCode](#applicationcode)
  * CloudWatchLoggingOptionUpdates [CloudWatchLoggingOptionUpdates](#cloudwatchloggingoptionupdates)
  * InputUpdates [InputUpdates](#inputupdates)
  * OutputUpdates [OutputUpdates](#outputupdates)
  * ReferenceDataSourceUpdates [ReferenceDataSourceUpdates](#referencedatasourceupdates)

### ApplicationVersionId
* ApplicationVersionId `integer`

### BooleanObject
* BooleanObject `boolean`

### BucketARN
* BucketARN `string`

### CSVMappingParameters
* CSVMappingParameters `object`: <p>Provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1" </code> </p> <p> <code>"name2, "address2"</code> </p>
  * RecordColumnDelimiter **required** [RecordColumnDelimiter](#recordcolumndelimiter)
  * RecordRowDelimiter **required** [RecordRowDelimiter](#recordrowdelimiter)

### CloudWatchLoggingOption
* CloudWatchLoggingOption `object`: Provides a description of CloudWatch logging options, including the log stream Amazon Resource Name (ARN) and the role ARN.
  * LogStreamARN **required** [LogStreamARN](#logstreamarn)
  * RoleARN **required** [RoleARN](#rolearn)

### CloudWatchLoggingOptionDescription
* CloudWatchLoggingOptionDescription `object`: Description of the CloudWatch logging option.
  * CloudWatchLoggingOptionId [Id](#id)
  * LogStreamARN **required** [LogStreamARN](#logstreamarn)
  * RoleARN **required** [RoleARN](#rolearn)

### CloudWatchLoggingOptionDescriptions
* CloudWatchLoggingOptionDescriptions `array`
  * items [CloudWatchLoggingOptionDescription](#cloudwatchloggingoptiondescription)

### CloudWatchLoggingOptionUpdate
* CloudWatchLoggingOptionUpdate `object`: Describes CloudWatch logging option updates.
  * CloudWatchLoggingOptionId **required** [Id](#id)
  * LogStreamARNUpdate [LogStreamARN](#logstreamarn)
  * RoleARNUpdate [RoleARN](#rolearn)

### CloudWatchLoggingOptionUpdates
* CloudWatchLoggingOptionUpdates `array`
  * items [CloudWatchLoggingOptionUpdate](#cloudwatchloggingoptionupdate)

### CloudWatchLoggingOptions
* CloudWatchLoggingOptions `array`
  * items [CloudWatchLoggingOption](#cloudwatchloggingoption)

### CodeValidationException
* CodeValidationException `object`: User-provided application code (query) is invalid. This can be a simple syntax error.
  * message [ErrorMessage](#errormessage)

### ConcurrentModificationException
* ConcurrentModificationException `object`: Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.
  * message [ErrorMessage](#errormessage)

### CreateApplicationRequest
* CreateApplicationRequest `object`: TBD
  * ApplicationCode [ApplicationCode](#applicationcode)
  * ApplicationDescription [ApplicationDescription](#applicationdescription)
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CloudWatchLoggingOptions [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
  * Inputs [Inputs](#inputs)
  * Outputs [Outputs](#outputs)

### CreateApplicationResponse
* CreateApplicationResponse `object`: TBD
  * ApplicationSummary **required** [ApplicationSummary](#applicationsummary)

### DeleteApplicationCloudWatchLoggingOptionRequest
* DeleteApplicationCloudWatchLoggingOptionRequest `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CloudWatchLoggingOptionId **required** [Id](#id)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)

### DeleteApplicationCloudWatchLoggingOptionResponse
* DeleteApplicationCloudWatchLoggingOptionResponse `object`

### DeleteApplicationInputProcessingConfigurationRequest
* DeleteApplicationInputProcessingConfigurationRequest `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)
  * InputId **required** [Id](#id)

### DeleteApplicationInputProcessingConfigurationResponse
* DeleteApplicationInputProcessingConfigurationResponse `object`

### DeleteApplicationOutputRequest
* DeleteApplicationOutputRequest `object`: <p/>
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)
  * OutputId **required** [Id](#id)

### DeleteApplicationOutputResponse
* DeleteApplicationOutputResponse `object`: <p/>

### DeleteApplicationReferenceDataSourceRequest
* DeleteApplicationReferenceDataSourceRequest `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)
  * ReferenceId **required** [Id](#id)

### DeleteApplicationReferenceDataSourceResponse
* DeleteApplicationReferenceDataSourceResponse `object`

### DeleteApplicationRequest
* DeleteApplicationRequest `object`: <p/>
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CreateTimestamp **required** [Timestamp](#timestamp)

### DeleteApplicationResponse
* DeleteApplicationResponse `object`: <p/>

### DescribeApplicationRequest
* DescribeApplicationRequest `object`: <p/>
  * ApplicationName **required** [ApplicationName](#applicationname)

### DescribeApplicationResponse
* DescribeApplicationResponse `object`: <p/>
  * ApplicationDetail **required** [ApplicationDetail](#applicationdetail)

### DestinationSchema
* DestinationSchema `object`: Describes the data format when records are written to the destination. For more information, see <a href="http://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>. 
  * RecordFormatType [RecordFormatType](#recordformattype)

### DiscoverInputSchemaRequest
* DiscoverInputSchemaRequest `object`
  * InputProcessingConfiguration [InputProcessingConfiguration](#inputprocessingconfiguration)
  * InputStartingPositionConfiguration [InputStartingPositionConfiguration](#inputstartingpositionconfiguration)
  * ResourceARN [ResourceARN](#resourcearn)
  * RoleARN [RoleARN](#rolearn)
  * S3Configuration [S3Configuration](#s3configuration)

### DiscoverInputSchemaResponse
* DiscoverInputSchemaResponse `object`: <p/>
  * InputSchema [SourceSchema](#sourceschema)
  * ParsedInputRecords [ParsedInputRecords](#parsedinputrecords)
  * ProcessedInputRecords [ProcessedInputRecords](#processedinputrecords)
  * RawInputRecords [RawInputRecords](#rawinputrecords)

### ErrorMessage
* ErrorMessage `string`

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
* Input `object`: When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see <a href="http://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. 
  * InputParallelism [InputParallelism](#inputparallelism)
  * InputProcessingConfiguration [InputProcessingConfiguration](#inputprocessingconfiguration)
  * InputSchema **required** [SourceSchema](#sourceschema)
  * KinesisFirehoseInput [KinesisFirehoseInput](#kinesisfirehoseinput)
  * KinesisStreamsInput [KinesisStreamsInput](#kinesisstreamsinput)
  * NamePrefix **required** [InAppStreamName](#inappstreamname)

### InputConfiguration
* InputConfiguration `object`: When you start your application, you provide this configuration, which identifies the input source and the point in the input source at which you want the application to start processing records.
  * Id **required** [Id](#id)
  * InputStartingPositionConfiguration **required** [InputStartingPositionConfiguration](#inputstartingpositionconfiguration)

### InputConfigurations
* InputConfigurations `array`
  * items [InputConfiguration](#inputconfiguration)

### InputDescription
* InputDescription `object`: Describes the application input configuration. For more information, see <a href="http://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. 
  * InAppStreamNames [InAppStreamNames](#inappstreamnames)
  * InputId [Id](#id)
  * InputParallelism [InputParallelism](#inputparallelism)
  * InputProcessingConfigurationDescription [InputProcessingConfigurationDescription](#inputprocessingconfigurationdescription)
  * InputSchema [SourceSchema](#sourceschema)
  * InputStartingPositionConfiguration [InputStartingPositionConfiguration](#inputstartingpositionconfiguration)
  * KinesisFirehoseInputDescription [KinesisFirehoseInputDescription](#kinesisfirehoseinputdescription)
  * KinesisStreamsInputDescription [KinesisStreamsInputDescription](#kinesisstreamsinputdescription)
  * NamePrefix [InAppStreamName](#inappstreamname)

### InputDescriptions
* InputDescriptions `array`
  * items [InputDescription](#inputdescription)

### InputLambdaProcessor
* InputLambdaProcessor `object`: An object that contains the Amazon Resource Name (ARN) of the <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda function. 
  * ResourceARN **required** [ResourceARN](#resourcearn)
  * RoleARN **required** [RoleARN](#rolearn)

### InputLambdaProcessorDescription
* InputLambdaProcessorDescription `object`: An object that contains the Amazon Resource Name (ARN) of the <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda expression.
  * ResourceARN [ResourceARN](#resourcearn)
  * RoleARN [RoleARN](#rolearn)

### InputLambdaProcessorUpdate
* InputLambdaProcessorUpdate `object`: Represents an update to the <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream.
  * ResourceARNUpdate [ResourceARN](#resourcearn)
  * RoleARNUpdate [RoleARN](#rolearn)

### InputParallelism
* InputParallelism `object`: Describes the number of in-application streams to create for a given streaming source. For information about parallelism, see <a href="http://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. 
  * Count [InputParallelismCount](#inputparallelismcount)

### InputParallelismCount
* InputParallelismCount `integer`

### InputParallelismUpdate
* InputParallelismUpdate `object`: Provides updates to the parallelism count.
  * CountUpdate [InputParallelismCount](#inputparallelismcount)

### InputProcessingConfiguration
* InputProcessingConfiguration `object`: Provides a description of a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>.
  * InputLambdaProcessor **required** [InputLambdaProcessor](#inputlambdaprocessor)

### InputProcessingConfigurationDescription
* InputProcessingConfigurationDescription `object`: Provides configuration information about an input processor. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>.
  * InputLambdaProcessorDescription [InputLambdaProcessorDescription](#inputlambdaprocessordescription)

### InputProcessingConfigurationUpdate
* InputProcessingConfigurationUpdate `object`: Describes updates to an <a>InputProcessingConfiguration</a>. 
  * InputLambdaProcessorUpdate **required** [InputLambdaProcessorUpdate](#inputlambdaprocessorupdate)

### InputSchemaUpdate
* InputSchemaUpdate `object`: Describes updates for the application's input schema.
  * RecordColumnUpdates [RecordColumns](#recordcolumns)
  * RecordEncodingUpdate [RecordEncoding](#recordencoding)
  * RecordFormatUpdate [RecordFormat](#recordformat)

### InputStartingPosition
* InputStartingPosition `string` (values: NOW, TRIM_HORIZON, LAST_STOPPED_POINT)

### InputStartingPositionConfiguration
* InputStartingPositionConfiguration `object`: Describes the point at which the application reads from the streaming source.
  * InputStartingPosition [InputStartingPosition](#inputstartingposition)

### InputUpdate
* InputUpdate `object`: Describes updates to a specific input configuration (identified by the <code>InputId</code> of an application). 
  * InputId **required** [Id](#id)
  * InputParallelismUpdate [InputParallelismUpdate](#inputparallelismupdate)
  * InputProcessingConfigurationUpdate [InputProcessingConfigurationUpdate](#inputprocessingconfigurationupdate)
  * InputSchemaUpdate [InputSchemaUpdate](#inputschemaupdate)
  * KinesisFirehoseInputUpdate [KinesisFirehoseInputUpdate](#kinesisfirehoseinputupdate)
  * KinesisStreamsInputUpdate [KinesisStreamsInputUpdate](#kinesisstreamsinputupdate)
  * NamePrefixUpdate [InAppStreamName](#inappstreamname)

### InputUpdates
* InputUpdates `array`
  * items [InputUpdate](#inputupdate)

### Inputs
* Inputs `array`
  * items [Input](#input)

### InvalidApplicationConfigurationException
* InvalidApplicationConfigurationException `object`: User-provided application configuration is not valid.
  * message [ErrorMessage](#errormessage)

### InvalidArgumentException
* InvalidArgumentException `object`: Specified input parameter value is invalid.
  * message [ErrorMessage](#errormessage)

### JSONMappingParameters
* JSONMappingParameters `object`: Provides additional mapping information when JSON is the record format on the streaming source.
  * RecordRowPath **required** [RecordRowPath](#recordrowpath)

### KinesisFirehoseInput
* KinesisFirehoseInput `object`:  Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.
  * ResourceARN **required** [ResourceARN](#resourcearn)
  * RoleARN **required** [RoleARN](#rolearn)

### KinesisFirehoseInputDescription
* KinesisFirehoseInputDescription `object`:  Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source in the application input configuration. 
  * ResourceARN [ResourceARN](#resourcearn)
  * RoleARN [RoleARN](#rolearn)

### KinesisFirehoseInputUpdate
* KinesisFirehoseInputUpdate `object`: When updating application input configuration, provides information about an Amazon Kinesis Firehose delivery stream as the streaming source.
  * ResourceARNUpdate [ResourceARN](#resourcearn)
  * RoleARNUpdate [RoleARN](#rolearn)

### KinesisFirehoseOutput
* KinesisFirehoseOutput `object`: When configuring application output, identifies an Amazon Kinesis Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to write to the stream on your behalf.
  * ResourceARN **required** [ResourceARN](#resourcearn)
  * RoleARN **required** [RoleARN](#rolearn)

### KinesisFirehoseOutputDescription
* KinesisFirehoseOutputDescription `object`:  For an application output, describes the Amazon Kinesis Firehose delivery stream configured as its destination. 
  * ResourceARN [ResourceARN](#resourcearn)
  * RoleARN [RoleARN](#rolearn)

### KinesisFirehoseOutputUpdate
* KinesisFirehoseOutputUpdate `object`:  When updating an output configuration using the <a>UpdateApplication</a> operation, provides information about an Amazon Kinesis Firehose delivery stream configured as the destination. 
  * ResourceARNUpdate [ResourceARN](#resourcearn)
  * RoleARNUpdate [RoleARN](#rolearn)

### KinesisStreamsInput
* KinesisStreamsInput `object`:  Identifies an Amazon Kinesis stream as the streaming source. You provide the stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.
  * ResourceARN **required** [ResourceARN](#resourcearn)
  * RoleARN **required** [RoleARN](#rolearn)

### KinesisStreamsInputDescription
* KinesisStreamsInputDescription `object`:  Describes the Amazon Kinesis stream that is configured as the streaming source in the application input configuration. 
  * ResourceARN [ResourceARN](#resourcearn)
  * RoleARN [RoleARN](#rolearn)

### KinesisStreamsInputUpdate
* KinesisStreamsInputUpdate `object`: When updating application input configuration, provides information about an Amazon Kinesis stream as the streaming source.
  * ResourceARNUpdate [ResourceARN](#resourcearn)
  * RoleARNUpdate [RoleARN](#rolearn)

### KinesisStreamsOutput
* KinesisStreamsOutput `object`: When configuring application output, identifies an Amazon Kinesis stream as the destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the stream on your behalf.
  * ResourceARN **required** [ResourceARN](#resourcearn)
  * RoleARN **required** [RoleARN](#rolearn)

### KinesisStreamsOutputDescription
* KinesisStreamsOutputDescription `object`:  For an application output, describes the Amazon Kinesis stream configured as its destination. 
  * ResourceARN [ResourceARN](#resourcearn)
  * RoleARN [RoleARN](#rolearn)

### KinesisStreamsOutputUpdate
* KinesisStreamsOutputUpdate `object`:  When updating an output configuration using the <a>UpdateApplication</a> operation, provides information about an Amazon Kinesis stream configured as the destination. 
  * ResourceARNUpdate [ResourceARN](#resourcearn)
  * RoleARNUpdate [RoleARN](#rolearn)

### LambdaOutput
* LambdaOutput `object`: When configuring application output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the function on your behalf. 
  * ResourceARN **required** [ResourceARN](#resourcearn)
  * RoleARN **required** [RoleARN](#rolearn)

### LambdaOutputDescription
* LambdaOutputDescription `object`: For an application output, describes the AWS Lambda function configured as its destination. 
  * ResourceARN [ResourceARN](#resourcearn)
  * RoleARN [RoleARN](#rolearn)

### LambdaOutputUpdate
* LambdaOutputUpdate `object`: When updating an output configuration using the <a>UpdateApplication</a> operation, provides information about an AWS Lambda function configured as the destination.
  * ResourceARNUpdate [ResourceARN](#resourcearn)
  * RoleARNUpdate [RoleARN](#rolearn)

### LimitExceededException
* LimitExceededException `object`: Exceeded the number of applications allowed.
  * message [ErrorMessage](#errormessage)

### ListApplicationsInputLimit
* ListApplicationsInputLimit `integer`

### ListApplicationsRequest
* ListApplicationsRequest `object`: <p/>
  * ExclusiveStartApplicationName [ApplicationName](#applicationname)
  * Limit [ListApplicationsInputLimit](#listapplicationsinputlimit)

### ListApplicationsResponse
* ListApplicationsResponse `object`: <p/>
  * ApplicationSummaries **required** [ApplicationSummaries](#applicationsummaries)
  * HasMoreApplications **required** [BooleanObject](#booleanobject)

### LogStreamARN
* LogStreamARN `string`

### MappingParameters
* MappingParameters `object`: When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
  * CSVMappingParameters [CSVMappingParameters](#csvmappingparameters)
  * JSONMappingParameters [JSONMappingParameters](#jsonmappingparameters)

### Output
* Output `object`: <p> Describes application output configuration in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. </p> <p/> <p>For limits on how many destinations an application can write and other limitations, see <a href="http://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p>
  * DestinationSchema **required** [DestinationSchema](#destinationschema)
  * KinesisFirehoseOutput [KinesisFirehoseOutput](#kinesisfirehoseoutput)
  * KinesisStreamsOutput [KinesisStreamsOutput](#kinesisstreamsoutput)
  * LambdaOutput [LambdaOutput](#lambdaoutput)
  * Name **required** [InAppStreamName](#inappstreamname)

### OutputDescription
* OutputDescription `object`: Describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. 
  * DestinationSchema [DestinationSchema](#destinationschema)
  * KinesisFirehoseOutputDescription [KinesisFirehoseOutputDescription](#kinesisfirehoseoutputdescription)
  * KinesisStreamsOutputDescription [KinesisStreamsOutputDescription](#kinesisstreamsoutputdescription)
  * LambdaOutputDescription [LambdaOutputDescription](#lambdaoutputdescription)
  * Name [InAppStreamName](#inappstreamname)
  * OutputId [Id](#id)

### OutputDescriptions
* OutputDescriptions `array`
  * items [OutputDescription](#outputdescription)

### OutputUpdate
* OutputUpdate `object`:  Describes updates to the output configuration identified by the <code>OutputId</code>. 
  * DestinationSchemaUpdate [DestinationSchema](#destinationschema)
  * KinesisFirehoseOutputUpdate [KinesisFirehoseOutputUpdate](#kinesisfirehoseoutputupdate)
  * KinesisStreamsOutputUpdate [KinesisStreamsOutputUpdate](#kinesisstreamsoutputupdate)
  * LambdaOutputUpdate [LambdaOutputUpdate](#lambdaoutputupdate)
  * NameUpdate [InAppStreamName](#inappstreamname)
  * OutputId **required** [Id](#id)

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
  * Mapping [RecordColumnMapping](#recordcolumnmapping)
  * Name **required** [RecordColumnName](#recordcolumnname)
  * SqlType **required** [RecordColumnSqlType](#recordcolumnsqltype)

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
  * MappingParameters [MappingParameters](#mappingparameters)
  * RecordFormatType **required** [RecordFormatType](#recordformattype)

### RecordFormatType
* RecordFormatType `string` (values: JSON, CSV)

### RecordRowDelimiter
* RecordRowDelimiter `string`

### RecordRowPath
* RecordRowPath `string`

### ReferenceDataSource
* ReferenceDataSource `object`: Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
  * ReferenceSchema **required** [SourceSchema](#sourceschema)
  * S3ReferenceDataSource [S3ReferenceDataSource](#s3referencedatasource)
  * TableName **required** [InAppTableName](#inapptablename)

### ReferenceDataSourceDescription
* ReferenceDataSourceDescription `object`: Describes the reference data source configured for an application.
  * ReferenceId **required** [Id](#id)
  * ReferenceSchema [SourceSchema](#sourceschema)
  * S3ReferenceDataSourceDescription **required** [S3ReferenceDataSourceDescription](#s3referencedatasourcedescription)
  * TableName **required** [InAppTableName](#inapptablename)

### ReferenceDataSourceDescriptions
* ReferenceDataSourceDescriptions `array`
  * items [ReferenceDataSourceDescription](#referencedatasourcedescription)

### ReferenceDataSourceUpdate
* ReferenceDataSourceUpdate `object`: When you update a reference data source configuration for an application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.
  * ReferenceId **required** [Id](#id)
  * ReferenceSchemaUpdate [SourceSchema](#sourceschema)
  * S3ReferenceDataSourceUpdate [S3ReferenceDataSourceUpdate](#s3referencedatasourceupdate)
  * TableNameUpdate [InAppTableName](#inapptablename)

### ReferenceDataSourceUpdates
* ReferenceDataSourceUpdates `array`
  * items [ReferenceDataSourceUpdate](#referencedatasourceupdate)

### ResourceARN
* ResourceARN `string`

### ResourceInUseException
* ResourceInUseException `object`: Application is not available for this operation.
  * message [ErrorMessage](#errormessage)

### ResourceNotFoundException
* ResourceNotFoundException `object`: Specified application can't be found.
  * message [ErrorMessage](#errormessage)

### ResourceProvisionedThroughputExceededException
* ResourceProvisionedThroughputExceededException `object`: Discovery failed to get a record from the streaming source because of the Amazon Kinesis Streams ProvisionedThroughputExceededException. For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html">GetRecords</a> in the Amazon Kinesis Streams API Reference.
  * message [ErrorMessage](#errormessage)

### RoleARN
* RoleARN `string`

### S3Configuration
* S3Configuration `object`: Provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket, and the name of the S3 object that contains the data.
  * BucketARN **required** [BucketARN](#bucketarn)
  * FileKey **required** [FileKey](#filekey)
  * RoleARN **required** [RoleARN](#rolearn)

### S3ReferenceDataSource
* S3ReferenceDataSource `object`: <p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.</p> <p>An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application.</p>
  * BucketARN **required** [BucketARN](#bucketarn)
  * FileKey **required** [FileKey](#filekey)
  * ReferenceRoleARN **required** [RoleARN](#rolearn)

### S3ReferenceDataSourceDescription
* S3ReferenceDataSourceDescription `object`: Provides the bucket name and object key name that stores the reference data.
  * BucketARN **required** [BucketARN](#bucketarn)
  * FileKey **required** [FileKey](#filekey)
  * ReferenceRoleARN **required** [RoleARN](#rolearn)

### S3ReferenceDataSourceUpdate
* S3ReferenceDataSourceUpdate `object`: Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.
  * BucketARNUpdate [BucketARN](#bucketarn)
  * FileKeyUpdate [FileKey](#filekey)
  * ReferenceRoleARNUpdate [RoleARN](#rolearn)

### ServiceUnavailableException
* ServiceUnavailableException `object`: The service is unavailable, back off and retry the operation. 
  * message [ErrorMessage](#errormessage)

### SourceSchema
* SourceSchema `object`: Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
  * RecordColumns **required** [RecordColumns](#recordcolumns)
  * RecordEncoding [RecordEncoding](#recordencoding)
  * RecordFormat **required** [RecordFormat](#recordformat)

### StartApplicationRequest
* StartApplicationRequest `object`: <p/>
  * ApplicationName **required** [ApplicationName](#applicationname)
  * InputConfigurations **required** [InputConfigurations](#inputconfigurations)

### StartApplicationResponse
* StartApplicationResponse `object`: <p/>

### StopApplicationRequest
* StopApplicationRequest `object`: <p/>
  * ApplicationName **required** [ApplicationName](#applicationname)

### StopApplicationResponse
* StopApplicationResponse `object`: <p/>

### Timestamp
* Timestamp `string`

### UnableToDetectSchemaException
* UnableToDetectSchemaException `object`: Data format is not valid, Amazon Kinesis Analytics is not able to detect schema for the given streaming source.
  * ProcessedInputRecords [ProcessedInputRecords](#processedinputrecords)
  * RawInputRecords [RawInputRecords](#rawinputrecords)
  * message [ErrorMessage](#errormessage)

### UpdateApplicationRequest
* UpdateApplicationRequest `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * ApplicationUpdate **required** [ApplicationUpdate](#applicationupdate)
  * CurrentApplicationVersionId **required** [ApplicationVersionId](#applicationversionid)

### UpdateApplicationResponse
* UpdateApplicationResponse `object`


