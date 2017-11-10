# @datafire/amazonaws_kinesisanalytics

Client library for Amazon Kinesis Analytics

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_kinesisanalytics
```

```js
let datafire = require('datafire');
let amazonaws_kinesisanalytics = require('@datafire/amazonaws_kinesisanalytics').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_kinesisanalytics.AddApplicationCloudWatchLoggingOption({}).then(data => {
  console.log(data);
})
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

#### Parameters
* ApplicationName (string) **required**
* CloudWatchLoggingOption (object) **required** - Provides a description of CloudWatch logging options, including the log stream Amazon Resource Name (ARN) and the role ARN.
* CurrentApplicationVersionId (integer) **required**

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

#### Parameters
* ApplicationName (string) **required**
* CurrentApplicationVersionId (integer) **required**
* Input (object) **required** - When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see <a href="http://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. 

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

#### Parameters
* ApplicationName (string) **required**
* CurrentApplicationVersionId (integer) **required**
* InputId (string) **required**
* InputProcessingConfiguration (object) **required** - Provides a description of a processor that is used to preprocess the records in the stream prior to being processed by your application code. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>.

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

#### Parameters
* ApplicationName (string) **required**
* CurrentApplicationVersionId (integer) **required**
* Output (object) **required** - <p> Describes application output configuration in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. </p> <p/> <p>For limits on how many destinations an application can write and other limitations, see <a href="http://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p>

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

#### Parameters
* ApplicationName (string) **required**
* CurrentApplicationVersionId (integer) **required**
* ReferenceDataSource (object) **required** - Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.

### CreateApplication



```js
amazonaws_kinesisanalytics.CreateApplication({
  "ApplicationName": ""
}, context)
```

#### Parameters
* ApplicationCode (string)
* ApplicationDescription (string)
* ApplicationName (string) **required**
* CloudWatchLoggingOptions (array)
* Inputs (array)
* Outputs (array)

### DeleteApplication



```js
amazonaws_kinesisanalytics.DeleteApplication({
  "ApplicationName": "",
  "CreateTimestamp": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* CreateTimestamp (string) **required**

### DeleteApplicationCloudWatchLoggingOption



```js
amazonaws_kinesisanalytics.DeleteApplicationCloudWatchLoggingOption({
  "ApplicationName": "",
  "CurrentApplicationVersionId": 0,
  "CloudWatchLoggingOptionId": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* CloudWatchLoggingOptionId (string) **required**
* CurrentApplicationVersionId (integer) **required**

### DeleteApplicationInputProcessingConfiguration



```js
amazonaws_kinesisanalytics.DeleteApplicationInputProcessingConfiguration({
  "ApplicationName": "",
  "CurrentApplicationVersionId": 0,
  "InputId": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* CurrentApplicationVersionId (integer) **required**
* InputId (string) **required**

### DeleteApplicationOutput



```js
amazonaws_kinesisanalytics.DeleteApplicationOutput({
  "ApplicationName": "",
  "CurrentApplicationVersionId": 0,
  "OutputId": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* CurrentApplicationVersionId (integer) **required**
* OutputId (string) **required**

### DeleteApplicationReferenceDataSource



```js
amazonaws_kinesisanalytics.DeleteApplicationReferenceDataSource({
  "ApplicationName": "",
  "CurrentApplicationVersionId": 0,
  "ReferenceId": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* CurrentApplicationVersionId (integer) **required**
* ReferenceId (string) **required**

### DescribeApplication



```js
amazonaws_kinesisanalytics.DescribeApplication({
  "ApplicationName": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**

### DiscoverInputSchema



```js
amazonaws_kinesisanalytics.DiscoverInputSchema({}, context)
```

#### Parameters
* InputProcessingConfiguration (object) - Provides a description of a processor that is used to preprocess the records in the stream prior to being processed by your application code. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>.
* InputStartingPositionConfiguration (object) - Describes the point at which the application reads from the streaming source.
* ResourceARN (string)
* RoleARN (string)
* S3Configuration (object)

### ListApplications



```js
amazonaws_kinesisanalytics.ListApplications({}, context)
```

#### Parameters
* ExclusiveStartApplicationName (string)
* Limit (integer)

### StartApplication



```js
amazonaws_kinesisanalytics.StartApplication({
  "ApplicationName": "",
  "InputConfigurations": []
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* InputConfigurations (array) **required**

### StopApplication



```js
amazonaws_kinesisanalytics.StopApplication({
  "ApplicationName": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**

### UpdateApplication



```js
amazonaws_kinesisanalytics.UpdateApplication({
  "ApplicationName": "",
  "CurrentApplicationVersionId": 0,
  "ApplicationUpdate": {}
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* ApplicationUpdate (object) **required** - Describes updates to apply to an existing Amazon Kinesis Analytics application.
* CurrentApplicationVersionId (integer) **required**

