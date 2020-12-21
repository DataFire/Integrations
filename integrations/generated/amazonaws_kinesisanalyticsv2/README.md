# @datafire/amazonaws_kinesisanalyticsv2

Client library for Amazon Kinesis Analytics

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_kinesisanalyticsv2
```
```js
let amazonaws_kinesisanalyticsv2 = require('@datafire/amazonaws_kinesisanalyticsv2').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon Kinesis Data Analytics is a fully managed service that you can use to process and analyze streaming data using Java, SQL, or Scala. The service enables you to quickly author and run Java, SQL, or Scala code against streaming sources to perform time series analytics, feed real-time dashboards, and create real-time metrics.

## Actions

### AddApplicationCloudWatchLoggingOption



```js
amazonaws_kinesisanalyticsv2.AddApplicationCloudWatchLoggingOption({
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
  * CurrentApplicationVersionId **required**

#### Output
* output [AddApplicationCloudWatchLoggingOptionResponse](#addapplicationcloudwatchloggingoptionresponse)

### AddApplicationInput



```js
amazonaws_kinesisanalyticsv2.AddApplicationInput({
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
    * KinesisStreamsInput
      * ResourceARN **required**
    * NamePrefix **required**

#### Output
* output [AddApplicationInputResponse](#addapplicationinputresponse)

### AddApplicationInputProcessingConfiguration



```js
amazonaws_kinesisanalyticsv2.AddApplicationInputProcessingConfiguration({
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

#### Output
* output [AddApplicationInputProcessingConfigurationResponse](#addapplicationinputprocessingconfigurationresponse)

### AddApplicationOutput



```js
amazonaws_kinesisanalyticsv2.AddApplicationOutput({
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
    * KinesisStreamsOutput
      * ResourceARN **required**
    * LambdaOutput
      * ResourceARN **required**
    * Name **required**

#### Output
* output [AddApplicationOutputResponse](#addapplicationoutputresponse)

### AddApplicationReferenceDataSource



```js
amazonaws_kinesisanalyticsv2.AddApplicationReferenceDataSource({
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
      * BucketARN
      * FileKey
    * TableName **required**

#### Output
* output [AddApplicationReferenceDataSourceResponse](#addapplicationreferencedatasourceresponse)

### AddApplicationVpcConfiguration



```js
amazonaws_kinesisanalyticsv2.AddApplicationVpcConfiguration({
  "ApplicationName": null,
  "CurrentApplicationVersionId": null,
  "VpcConfiguration": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * VpcConfiguration **required**
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds **required**
      * items [SubnetId](#subnetid)

#### Output
* output [AddApplicationVpcConfigurationResponse](#addapplicationvpcconfigurationresponse)

### CreateApplication



```js
amazonaws_kinesisanalyticsv2.CreateApplication({
  "ApplicationName": null,
  "RuntimeEnvironment": null,
  "ServiceExecutionRole": null
}, context)
```

#### Input
* input `object`
  * ApplicationConfiguration
    * ApplicationCodeConfiguration **required**
      * CodeContent
        * S3ContentLocation
          * BucketARN **required**
          * FileKey **required**
          * ObjectVersion
        * TextContent
        * ZipFileContent
      * CodeContentType **required**
    * ApplicationSnapshotConfiguration
      * SnapshotsEnabled **required**
    * EnvironmentProperties
      * PropertyGroups **required**
        * items [PropertyGroup](#propertygroup)
    * FlinkApplicationConfiguration
      * CheckpointConfiguration
        * CheckpointInterval
        * CheckpointingEnabled
        * ConfigurationType **required**
        * MinPauseBetweenCheckpoints
      * MonitoringConfiguration
        * ConfigurationType **required**
        * LogLevel
        * MetricsLevel
      * ParallelismConfiguration
        * AutoScalingEnabled
        * ConfigurationType **required**
        * Parallelism
        * ParallelismPerKPU
    * SqlApplicationConfiguration
      * Inputs
        * items [Input](#input)
      * Outputs
        * items [Output](#output)
      * ReferenceDataSources
        * items [ReferenceDataSource](#referencedatasource)
    * VpcConfigurations
      * items [VpcConfiguration](#vpcconfiguration)
  * ApplicationDescription
  * ApplicationName **required**
  * CloudWatchLoggingOptions
    * items [CloudWatchLoggingOption](#cloudwatchloggingoption)
  * RuntimeEnvironment **required**
  * ServiceExecutionRole **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateApplicationResponse](#createapplicationresponse)

### CreateApplicationPresignedUrl



```js
amazonaws_kinesisanalyticsv2.CreateApplicationPresignedUrl({
  "ApplicationName": null,
  "UrlType": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * SessionExpirationDurationInSeconds
  * UrlType **required**

#### Output
* output [CreateApplicationPresignedUrlResponse](#createapplicationpresignedurlresponse)

### CreateApplicationSnapshot



```js
amazonaws_kinesisanalyticsv2.CreateApplicationSnapshot({
  "ApplicationName": null,
  "SnapshotName": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * SnapshotName **required**

#### Output
* output [CreateApplicationSnapshotResponse](#createapplicationsnapshotresponse)

### DeleteApplication



```js
amazonaws_kinesisanalyticsv2.DeleteApplication({
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
amazonaws_kinesisanalyticsv2.DeleteApplicationCloudWatchLoggingOption({
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
amazonaws_kinesisanalyticsv2.DeleteApplicationInputProcessingConfiguration({
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
amazonaws_kinesisanalyticsv2.DeleteApplicationOutput({
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
amazonaws_kinesisanalyticsv2.DeleteApplicationReferenceDataSource({
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

### DeleteApplicationSnapshot



```js
amazonaws_kinesisanalyticsv2.DeleteApplicationSnapshot({
  "ApplicationName": null,
  "SnapshotName": null,
  "SnapshotCreationTimestamp": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * SnapshotCreationTimestamp **required**
  * SnapshotName **required**

#### Output
* output [DeleteApplicationSnapshotResponse](#deleteapplicationsnapshotresponse)

### DeleteApplicationVpcConfiguration



```js
amazonaws_kinesisanalyticsv2.DeleteApplicationVpcConfiguration({
  "ApplicationName": null,
  "CurrentApplicationVersionId": null,
  "VpcConfigurationId": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * VpcConfigurationId **required**

#### Output
* output [DeleteApplicationVpcConfigurationResponse](#deleteapplicationvpcconfigurationresponse)

### DescribeApplication



```js
amazonaws_kinesisanalyticsv2.DescribeApplication({
  "ApplicationName": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * IncludeAdditionalDetails

#### Output
* output [DescribeApplicationResponse](#describeapplicationresponse)

### DescribeApplicationSnapshot



```js
amazonaws_kinesisanalyticsv2.DescribeApplicationSnapshot({
  "ApplicationName": null,
  "SnapshotName": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * SnapshotName **required**

#### Output
* output [DescribeApplicationSnapshotResponse](#describeapplicationsnapshotresponse)

### DiscoverInputSchema



```js
amazonaws_kinesisanalyticsv2.DiscoverInputSchema({
  "ServiceExecutionRole": null
}, context)
```

#### Input
* input `object`
  * InputProcessingConfiguration
    * InputLambdaProcessor **required**
      * ResourceARN **required**
  * InputStartingPositionConfiguration
    * InputStartingPosition
  * ResourceARN
  * S3Configuration
    * BucketARN **required**
    * FileKey **required**
  * ServiceExecutionRole **required**

#### Output
* output [DiscoverInputSchemaResponse](#discoverinputschemaresponse)

### ListApplicationSnapshots



```js
amazonaws_kinesisanalyticsv2.ListApplicationSnapshots({
  "ApplicationName": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * Limit
  * NextToken

#### Output
* output [ListApplicationSnapshotsResponse](#listapplicationsnapshotsresponse)

### ListApplications



```js
amazonaws_kinesisanalyticsv2.ListApplications({}, context)
```

#### Input
* input `object`
  * Limit
  * NextToken

#### Output
* output [ListApplicationsResponse](#listapplicationsresponse)

### ListTagsForResource



```js
amazonaws_kinesisanalyticsv2.ListTagsForResource({
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
amazonaws_kinesisanalyticsv2.StartApplication({
  "ApplicationName": null,
  "RunConfiguration": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * RunConfiguration **required**
    * ApplicationRestoreConfiguration
      * ApplicationRestoreType **required**
      * SnapshotName
    * FlinkRunConfiguration
      * AllowNonRestoredState
    * SqlRunConfigurations
      * items [SqlRunConfiguration](#sqlrunconfiguration)

#### Output
* output [StartApplicationResponse](#startapplicationresponse)

### StopApplication



```js
amazonaws_kinesisanalyticsv2.StopApplication({
  "ApplicationName": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * Force

#### Output
* output [StopApplicationResponse](#stopapplicationresponse)

### TagResource



```js
amazonaws_kinesisanalyticsv2.TagResource({
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
amazonaws_kinesisanalyticsv2.UntagResource({
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
amazonaws_kinesisanalyticsv2.UpdateApplication({
  "ApplicationName": null,
  "CurrentApplicationVersionId": null
}, context)
```

#### Input
* input `object`
  * ApplicationConfigurationUpdate
    * ApplicationCodeConfigurationUpdate
      * CodeContentTypeUpdate
      * CodeContentUpdate
        * S3ContentLocationUpdate
          * BucketARNUpdate
          * FileKeyUpdate
          * ObjectVersionUpdate
        * TextContentUpdate
        * ZipFileContentUpdate
    * ApplicationSnapshotConfigurationUpdate
      * SnapshotsEnabledUpdate **required**
    * EnvironmentPropertyUpdates
      * PropertyGroups **required**
        * items [PropertyGroup](#propertygroup)
    * FlinkApplicationConfigurationUpdate
      * CheckpointConfigurationUpdate
        * CheckpointIntervalUpdate
        * CheckpointingEnabledUpdate
        * ConfigurationTypeUpdate
        * MinPauseBetweenCheckpointsUpdate
      * MonitoringConfigurationUpdate
        * ConfigurationTypeUpdate
        * LogLevelUpdate
        * MetricsLevelUpdate
      * ParallelismConfigurationUpdate
        * AutoScalingEnabledUpdate
        * ConfigurationTypeUpdate
        * ParallelismPerKPUUpdate
        * ParallelismUpdate
    * SqlApplicationConfigurationUpdate
      * InputUpdates
        * items [InputUpdate](#inputupdate)
      * OutputUpdates
        * items [OutputUpdate](#outputupdate)
      * ReferenceDataSourceUpdates
        * items [ReferenceDataSourceUpdate](#referencedatasourceupdate)
    * VpcConfigurationUpdates
      * items [VpcConfigurationUpdate](#vpcconfigurationupdate)
  * ApplicationName **required**
  * CloudWatchLoggingOptionUpdates
    * items [CloudWatchLoggingOptionUpdate](#cloudwatchloggingoptionupdate)
  * CurrentApplicationVersionId **required**
  * RunConfigurationUpdate
    * ApplicationRestoreConfiguration
      * ApplicationRestoreType **required**
      * SnapshotName
    * FlinkRunConfiguration
      * AllowNonRestoredState
  * ServiceExecutionRoleUpdate

#### Output
* output [UpdateApplicationResponse](#updateapplicationresponse)



## Definitions

### AddApplicationCloudWatchLoggingOptionRequest
* AddApplicationCloudWatchLoggingOptionRequest `object`
  * ApplicationName **required**
  * CloudWatchLoggingOption **required**
    * LogStreamARN **required**
  * CurrentApplicationVersionId **required**

### AddApplicationCloudWatchLoggingOptionResponse
* AddApplicationCloudWatchLoggingOptionResponse `object`
  * ApplicationARN
  * ApplicationVersionId
  * CloudWatchLoggingOptionDescriptions
    * items [CloudWatchLoggingOptionDescription](#cloudwatchloggingoptiondescription)

### AddApplicationInputProcessingConfigurationRequest
* AddApplicationInputProcessingConfigurationRequest `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * InputId **required**
  * InputProcessingConfiguration **required**
    * InputLambdaProcessor **required**
      * ResourceARN **required**

### AddApplicationInputProcessingConfigurationResponse
* AddApplicationInputProcessingConfigurationResponse `object`
  * ApplicationARN
  * ApplicationVersionId
  * InputId
  * InputProcessingConfigurationDescription
    * InputLambdaProcessorDescription
      * ResourceARN **required**
      * RoleARN

### AddApplicationInputRequest
* AddApplicationInputRequest `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * Input **required**
    * InputParallelism
      * Count
    * InputProcessingConfiguration
      * InputLambdaProcessor **required**
        * ResourceARN **required**
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
    * KinesisStreamsInput
      * ResourceARN **required**
    * NamePrefix **required**

### AddApplicationInputResponse
* AddApplicationInputResponse `object`
  * ApplicationARN
  * ApplicationVersionId
  * InputDescriptions
    * items [InputDescription](#inputdescription)

### AddApplicationOutputRequest
* AddApplicationOutputRequest `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * Output **required**
    * DestinationSchema **required**
      * RecordFormatType **required**
    * KinesisFirehoseOutput
      * ResourceARN **required**
    * KinesisStreamsOutput
      * ResourceARN **required**
    * LambdaOutput
      * ResourceARN **required**
    * Name **required**

### AddApplicationOutputResponse
* AddApplicationOutputResponse `object`
  * ApplicationARN
  * ApplicationVersionId
  * OutputDescriptions
    * items [OutputDescription](#outputdescription)

### AddApplicationReferenceDataSourceRequest
* AddApplicationReferenceDataSourceRequest `object`
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
      * BucketARN
      * FileKey
    * TableName **required**

### AddApplicationReferenceDataSourceResponse
* AddApplicationReferenceDataSourceResponse `object`
  * ApplicationARN
  * ApplicationVersionId
  * ReferenceDataSourceDescriptions
    * items [ReferenceDataSourceDescription](#referencedatasourcedescription)

### AddApplicationVpcConfigurationRequest
* AddApplicationVpcConfigurationRequest `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * VpcConfiguration **required**
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds **required**
      * items [SubnetId](#subnetid)

### AddApplicationVpcConfigurationResponse
* AddApplicationVpcConfigurationResponse `object`
  * ApplicationARN
  * ApplicationVersionId
  * VpcConfigurationDescription
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds **required**
      * items [SubnetId](#subnetid)
    * VpcConfigurationId **required**
    * VpcId **required**

### ApplicationCodeConfiguration
* ApplicationCodeConfiguration `object`: Describes code configuration for a Flink-based Kinesis Data Analytics application.
  * CodeContent
    * S3ContentLocation
      * BucketARN **required**
      * FileKey **required**
      * ObjectVersion
    * TextContent
    * ZipFileContent
  * CodeContentType **required**

### ApplicationCodeConfigurationDescription
* ApplicationCodeConfigurationDescription `object`: Describes code configuration for a Flink-based Kinesis Data Analytics application.
  * CodeContentDescription
    * CodeMD5
    * CodeSize
    * S3ApplicationCodeLocationDescription
      * BucketARN **required**
      * FileKey **required**
      * ObjectVersion
    * TextContent
  * CodeContentType **required**

### ApplicationCodeConfigurationUpdate
* ApplicationCodeConfigurationUpdate `object`: Describes code configuration updates to a Flink-based Kinesis Data Analytics application.
  * CodeContentTypeUpdate
  * CodeContentUpdate
    * S3ContentLocationUpdate
      * BucketARNUpdate
      * FileKeyUpdate
      * ObjectVersionUpdate
    * TextContentUpdate
    * ZipFileContentUpdate

### ApplicationConfiguration
* ApplicationConfiguration `object`: Specifies the creation parameters for a Kinesis Data Analytics application.
  * ApplicationCodeConfiguration **required**
    * CodeContent
      * S3ContentLocation
        * BucketARN **required**
        * FileKey **required**
        * ObjectVersion
      * TextContent
      * ZipFileContent
    * CodeContentType **required**
  * ApplicationSnapshotConfiguration
    * SnapshotsEnabled **required**
  * EnvironmentProperties
    * PropertyGroups **required**
      * items [PropertyGroup](#propertygroup)
  * FlinkApplicationConfiguration
    * CheckpointConfiguration
      * CheckpointInterval
      * CheckpointingEnabled
      * ConfigurationType **required**
      * MinPauseBetweenCheckpoints
    * MonitoringConfiguration
      * ConfigurationType **required**
      * LogLevel
      * MetricsLevel
    * ParallelismConfiguration
      * AutoScalingEnabled
      * ConfigurationType **required**
      * Parallelism
      * ParallelismPerKPU
  * SqlApplicationConfiguration
    * Inputs
      * items [Input](#input)
    * Outputs
      * items [Output](#output)
    * ReferenceDataSources
      * items [ReferenceDataSource](#referencedatasource)
  * VpcConfigurations
    * items [VpcConfiguration](#vpcconfiguration)

### ApplicationConfigurationDescription
* ApplicationConfigurationDescription `object`: Describes details about the application code and starting parameters for a Kinesis Data Analytics application.
  * ApplicationCodeConfigurationDescription
    * CodeContentDescription
      * CodeMD5
      * CodeSize
      * S3ApplicationCodeLocationDescription
        * BucketARN **required**
        * FileKey **required**
        * ObjectVersion
      * TextContent
    * CodeContentType **required**
  * ApplicationSnapshotConfigurationDescription
    * SnapshotsEnabled **required**
  * EnvironmentPropertyDescriptions
    * PropertyGroupDescriptions
      * items [PropertyGroup](#propertygroup)
  * FlinkApplicationConfigurationDescription
    * CheckpointConfigurationDescription
      * CheckpointInterval
      * CheckpointingEnabled
      * ConfigurationType
      * MinPauseBetweenCheckpoints
    * JobPlanDescription
    * MonitoringConfigurationDescription
      * ConfigurationType
      * LogLevel
      * MetricsLevel
    * ParallelismConfigurationDescription
      * AutoScalingEnabled
      * ConfigurationType
      * CurrentParallelism
      * Parallelism
      * ParallelismPerKPU
  * RunConfigurationDescription
    * ApplicationRestoreConfigurationDescription
      * ApplicationRestoreType **required**
      * SnapshotName
    * FlinkRunConfigurationDescription [FlinkRunConfiguration](#flinkrunconfiguration)
  * SqlApplicationConfigurationDescription
    * InputDescriptions
      * items [InputDescription](#inputdescription)
    * OutputDescriptions
      * items [OutputDescription](#outputdescription)
    * ReferenceDataSourceDescriptions
      * items [ReferenceDataSourceDescription](#referencedatasourcedescription)
  * VpcConfigurationDescriptions
    * items [VpcConfigurationDescription](#vpcconfigurationdescription)

### ApplicationConfigurationUpdate
* ApplicationConfigurationUpdate `object`: Describes updates to an application's configuration.
  * ApplicationCodeConfigurationUpdate
    * CodeContentTypeUpdate
    * CodeContentUpdate
      * S3ContentLocationUpdate
        * BucketARNUpdate
        * FileKeyUpdate
        * ObjectVersionUpdate
      * TextContentUpdate
      * ZipFileContentUpdate
  * ApplicationSnapshotConfigurationUpdate
    * SnapshotsEnabledUpdate **required**
  * EnvironmentPropertyUpdates
    * PropertyGroups **required**
      * items [PropertyGroup](#propertygroup)
  * FlinkApplicationConfigurationUpdate
    * CheckpointConfigurationUpdate
      * CheckpointIntervalUpdate
      * CheckpointingEnabledUpdate
      * ConfigurationTypeUpdate
      * MinPauseBetweenCheckpointsUpdate
    * MonitoringConfigurationUpdate
      * ConfigurationTypeUpdate
      * LogLevelUpdate
      * MetricsLevelUpdate
    * ParallelismConfigurationUpdate
      * AutoScalingEnabledUpdate
      * ConfigurationTypeUpdate
      * ParallelismPerKPUUpdate
      * ParallelismUpdate
  * SqlApplicationConfigurationUpdate
    * InputUpdates
      * items [InputUpdate](#inputupdate)
    * OutputUpdates
      * items [OutputUpdate](#outputupdate)
    * ReferenceDataSourceUpdates
      * items [ReferenceDataSourceUpdate](#referencedatasourceupdate)
  * VpcConfigurationUpdates
    * items [VpcConfigurationUpdate](#vpcconfigurationupdate)

### ApplicationDescription
* ApplicationDescription `string`

### ApplicationDetail
* ApplicationDetail `object`: Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
  * ApplicationARN **required**
  * ApplicationConfigurationDescription
    * ApplicationCodeConfigurationDescription
      * CodeContentDescription
        * CodeMD5
        * CodeSize
        * S3ApplicationCodeLocationDescription
          * BucketARN **required**
          * FileKey **required**
          * ObjectVersion
        * TextContent
      * CodeContentType **required**
    * ApplicationSnapshotConfigurationDescription
      * SnapshotsEnabled **required**
    * EnvironmentPropertyDescriptions
      * PropertyGroupDescriptions
        * items [PropertyGroup](#propertygroup)
    * FlinkApplicationConfigurationDescription
      * CheckpointConfigurationDescription
        * CheckpointInterval
        * CheckpointingEnabled
        * ConfigurationType
        * MinPauseBetweenCheckpoints
      * JobPlanDescription
      * MonitoringConfigurationDescription
        * ConfigurationType
        * LogLevel
        * MetricsLevel
      * ParallelismConfigurationDescription
        * AutoScalingEnabled
        * ConfigurationType
        * CurrentParallelism
        * Parallelism
        * ParallelismPerKPU
    * RunConfigurationDescription
      * ApplicationRestoreConfigurationDescription
        * ApplicationRestoreType **required**
        * SnapshotName
      * FlinkRunConfigurationDescription [FlinkRunConfiguration](#flinkrunconfiguration)
    * SqlApplicationConfigurationDescription
      * InputDescriptions
        * items [InputDescription](#inputdescription)
      * OutputDescriptions
        * items [OutputDescription](#outputdescription)
      * ReferenceDataSourceDescriptions
        * items [ReferenceDataSourceDescription](#referencedatasourcedescription)
    * VpcConfigurationDescriptions
      * items [VpcConfigurationDescription](#vpcconfigurationdescription)
  * ApplicationDescription
  * ApplicationName **required**
  * ApplicationStatus **required**
  * ApplicationVersionId **required**
  * CloudWatchLoggingOptionDescriptions
    * items [CloudWatchLoggingOptionDescription](#cloudwatchloggingoptiondescription)
  * CreateTimestamp
  * LastUpdateTimestamp
  * RuntimeEnvironment **required**
  * ServiceExecutionRole

### ApplicationName
* ApplicationName `string`

### ApplicationRestoreConfiguration
* ApplicationRestoreConfiguration `object`: Specifies the method and snapshot to use when restarting an application using previously saved application state.
  * ApplicationRestoreType **required**
  * SnapshotName

### ApplicationRestoreType
* ApplicationRestoreType `string` (values: SKIP_RESTORE_FROM_SNAPSHOT, RESTORE_FROM_LATEST_SNAPSHOT, RESTORE_FROM_CUSTOM_SNAPSHOT)

### ApplicationSnapshotConfiguration
* ApplicationSnapshotConfiguration `object`: Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
  * SnapshotsEnabled **required**

### ApplicationSnapshotConfigurationDescription
* ApplicationSnapshotConfigurationDescription `object`: Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
  * SnapshotsEnabled **required**

### ApplicationSnapshotConfigurationUpdate
* ApplicationSnapshotConfigurationUpdate `object`: Describes updates to whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
  * SnapshotsEnabledUpdate **required**

### ApplicationStatus
* ApplicationStatus `string` (values: DELETING, STARTING, STOPPING, READY, RUNNING, UPDATING, AUTOSCALING, FORCE_STOPPING)

### ApplicationSummaries
* ApplicationSummaries `array`
  * items [ApplicationSummary](#applicationsummary)

### ApplicationSummary
* ApplicationSummary `object`: Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.
  * ApplicationARN **required**
  * ApplicationName **required**
  * ApplicationStatus **required**
  * ApplicationVersionId **required**
  * RuntimeEnvironment **required**

### ApplicationVersionId
* ApplicationVersionId `integer`

### AuthorizedUrl
* AuthorizedUrl `string`

### BooleanObject
* BooleanObject `boolean`

### BucketARN
* BucketARN `string`

### CSVMappingParameters
* CSVMappingParameters `object`: <p>For a SQL-based Kinesis Data Analytics application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p>
  * RecordColumnDelimiter **required**
  * RecordRowDelimiter **required**

### CheckpointConfiguration
* CheckpointConfiguration `object`: Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance"> Checkpoints for Fault Tolerance</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.
  * CheckpointInterval
  * CheckpointingEnabled
  * ConfigurationType **required**
  * MinPauseBetweenCheckpoints

### CheckpointConfigurationDescription
* CheckpointConfigurationDescription `object`: Describes checkpointing parameters for a Flink-based Kinesis Data Analytics application.
  * CheckpointInterval
  * CheckpointingEnabled
  * ConfigurationType
  * MinPauseBetweenCheckpoints

### CheckpointConfigurationUpdate
* CheckpointConfigurationUpdate `object`: Describes updates to the checkpointing parameters for a Flink-based Kinesis Data Analytics application.
  * CheckpointIntervalUpdate
  * CheckpointingEnabledUpdate
  * ConfigurationTypeUpdate
  * MinPauseBetweenCheckpointsUpdate

### CheckpointInterval
* CheckpointInterval `integer`

### CloudWatchLoggingOption
* CloudWatchLoggingOption `object`: Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN). 
  * LogStreamARN **required**

### CloudWatchLoggingOptionDescription
* CloudWatchLoggingOptionDescription `object`: Describes the Amazon CloudWatch logging option.
  * CloudWatchLoggingOptionId
  * LogStreamARN **required**
  * RoleARN

### CloudWatchLoggingOptionDescriptions
* CloudWatchLoggingOptionDescriptions `array`
  * items [CloudWatchLoggingOptionDescription](#cloudwatchloggingoptiondescription)

### CloudWatchLoggingOptionUpdate
* CloudWatchLoggingOptionUpdate `object`: Describes the Amazon CloudWatch logging option updates.
  * CloudWatchLoggingOptionId **required**
  * LogStreamARNUpdate

### CloudWatchLoggingOptionUpdates
* CloudWatchLoggingOptionUpdates `array`
  * items [CloudWatchLoggingOptionUpdate](#cloudwatchloggingoptionupdate)

### CloudWatchLoggingOptions
* CloudWatchLoggingOptions `array`
  * items [CloudWatchLoggingOption](#cloudwatchloggingoption)

### CodeContent
* CodeContent `object`: Specifies either the application code, or the location of the application code, for a Flink-based Kinesis Data Analytics application. 
  * S3ContentLocation
    * BucketARN **required**
    * FileKey **required**
    * ObjectVersion
  * TextContent
  * ZipFileContent

### CodeContentDescription
* CodeContentDescription `object`: Describes details about the application code for a Flink-based Kinesis Data Analytics application.
  * CodeMD5
  * CodeSize
  * S3ApplicationCodeLocationDescription
    * BucketARN **required**
    * FileKey **required**
    * ObjectVersion
  * TextContent

### CodeContentType
* CodeContentType `string` (values: PLAINTEXT, ZIPFILE)

### CodeContentUpdate
* CodeContentUpdate `object`: Describes an update to the code of a Flink-based Kinesis Data Analytics application.
  * S3ContentLocationUpdate
    * BucketARNUpdate
    * FileKeyUpdate
    * ObjectVersionUpdate
  * TextContentUpdate
  * ZipFileContentUpdate

### CodeMD5
* CodeMD5 `string`

### CodeSize
* CodeSize `integer`

### CodeValidationException


### ConcurrentModificationException


### ConfigurationType
* ConfigurationType `string` (values: DEFAULT, CUSTOM)

### CreateApplicationPresignedUrlRequest
* CreateApplicationPresignedUrlRequest `object`
  * ApplicationName **required**
  * SessionExpirationDurationInSeconds
  * UrlType **required**

### CreateApplicationPresignedUrlResponse
* CreateApplicationPresignedUrlResponse `object`
  * AuthorizedUrl

### CreateApplicationRequest
* CreateApplicationRequest `object`
  * ApplicationConfiguration
    * ApplicationCodeConfiguration **required**
      * CodeContent
        * S3ContentLocation
          * BucketARN **required**
          * FileKey **required**
          * ObjectVersion
        * TextContent
        * ZipFileContent
      * CodeContentType **required**
    * ApplicationSnapshotConfiguration
      * SnapshotsEnabled **required**
    * EnvironmentProperties
      * PropertyGroups **required**
        * items [PropertyGroup](#propertygroup)
    * FlinkApplicationConfiguration
      * CheckpointConfiguration
        * CheckpointInterval
        * CheckpointingEnabled
        * ConfigurationType **required**
        * MinPauseBetweenCheckpoints
      * MonitoringConfiguration
        * ConfigurationType **required**
        * LogLevel
        * MetricsLevel
      * ParallelismConfiguration
        * AutoScalingEnabled
        * ConfigurationType **required**
        * Parallelism
        * ParallelismPerKPU
    * SqlApplicationConfiguration
      * Inputs
        * items [Input](#input)
      * Outputs
        * items [Output](#output)
      * ReferenceDataSources
        * items [ReferenceDataSource](#referencedatasource)
    * VpcConfigurations
      * items [VpcConfiguration](#vpcconfiguration)
  * ApplicationDescription
  * ApplicationName **required**
  * CloudWatchLoggingOptions
    * items [CloudWatchLoggingOption](#cloudwatchloggingoption)
  * RuntimeEnvironment **required**
  * ServiceExecutionRole **required**
  * Tags
    * items [Tag](#tag)

### CreateApplicationResponse
* CreateApplicationResponse `object`
  * ApplicationDetail **required**
    * ApplicationARN **required**
    * ApplicationConfigurationDescription
      * ApplicationCodeConfigurationDescription
        * CodeContentDescription
          * CodeMD5
          * CodeSize
          * S3ApplicationCodeLocationDescription
          * TextContent
        * CodeContentType **required**
      * ApplicationSnapshotConfigurationDescription
        * SnapshotsEnabled **required**
      * EnvironmentPropertyDescriptions
        * PropertyGroupDescriptions
          * items [PropertyGroup](#propertygroup)
      * FlinkApplicationConfigurationDescription
        * CheckpointConfigurationDescription
          * CheckpointInterval
          * CheckpointingEnabled
          * ConfigurationType
          * MinPauseBetweenCheckpoints
        * JobPlanDescription
        * MonitoringConfigurationDescription
          * ConfigurationType
          * LogLevel
          * MetricsLevel
        * ParallelismConfigurationDescription
          * AutoScalingEnabled
          * ConfigurationType
          * CurrentParallelism
          * Parallelism
          * ParallelismPerKPU
      * RunConfigurationDescription
        * ApplicationRestoreConfigurationDescription
          * ApplicationRestoreType **required**
          * SnapshotName
        * FlinkRunConfigurationDescription [FlinkRunConfiguration](#flinkrunconfiguration)
      * SqlApplicationConfigurationDescription
        * InputDescriptions
          * items [InputDescription](#inputdescription)
        * OutputDescriptions
          * items [OutputDescription](#outputdescription)
        * ReferenceDataSourceDescriptions
          * items [ReferenceDataSourceDescription](#referencedatasourcedescription)
      * VpcConfigurationDescriptions
        * items [VpcConfigurationDescription](#vpcconfigurationdescription)
    * ApplicationDescription
    * ApplicationName **required**
    * ApplicationStatus **required**
    * ApplicationVersionId **required**
    * CloudWatchLoggingOptionDescriptions
      * items [CloudWatchLoggingOptionDescription](#cloudwatchloggingoptiondescription)
    * CreateTimestamp
    * LastUpdateTimestamp
    * RuntimeEnvironment **required**
    * ServiceExecutionRole

### CreateApplicationSnapshotRequest
* CreateApplicationSnapshotRequest `object`
  * ApplicationName **required**
  * SnapshotName **required**

### CreateApplicationSnapshotResponse
* CreateApplicationSnapshotResponse `object`

### DeleteApplicationCloudWatchLoggingOptionRequest
* DeleteApplicationCloudWatchLoggingOptionRequest `object`
  * ApplicationName **required**
  * CloudWatchLoggingOptionId **required**
  * CurrentApplicationVersionId **required**

### DeleteApplicationCloudWatchLoggingOptionResponse
* DeleteApplicationCloudWatchLoggingOptionResponse `object`
  * ApplicationARN
  * ApplicationVersionId
  * CloudWatchLoggingOptionDescriptions
    * items [CloudWatchLoggingOptionDescription](#cloudwatchloggingoptiondescription)

### DeleteApplicationInputProcessingConfigurationRequest
* DeleteApplicationInputProcessingConfigurationRequest `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * InputId **required**

### DeleteApplicationInputProcessingConfigurationResponse
* DeleteApplicationInputProcessingConfigurationResponse `object`
  * ApplicationARN
  * ApplicationVersionId

### DeleteApplicationOutputRequest
* DeleteApplicationOutputRequest `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * OutputId **required**

### DeleteApplicationOutputResponse
* DeleteApplicationOutputResponse `object`
  * ApplicationARN
  * ApplicationVersionId

### DeleteApplicationReferenceDataSourceRequest
* DeleteApplicationReferenceDataSourceRequest `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * ReferenceId **required**

### DeleteApplicationReferenceDataSourceResponse
* DeleteApplicationReferenceDataSourceResponse `object`
  * ApplicationARN
  * ApplicationVersionId

### DeleteApplicationRequest
* DeleteApplicationRequest `object`
  * ApplicationName **required**
  * CreateTimestamp **required**

### DeleteApplicationResponse
* DeleteApplicationResponse `object`

### DeleteApplicationSnapshotRequest
* DeleteApplicationSnapshotRequest `object`
  * ApplicationName **required**
  * SnapshotCreationTimestamp **required**
  * SnapshotName **required**

### DeleteApplicationSnapshotResponse
* DeleteApplicationSnapshotResponse `object`

### DeleteApplicationVpcConfigurationRequest
* DeleteApplicationVpcConfigurationRequest `object`
  * ApplicationName **required**
  * CurrentApplicationVersionId **required**
  * VpcConfigurationId **required**

### DeleteApplicationVpcConfigurationResponse
* DeleteApplicationVpcConfigurationResponse `object`
  * ApplicationARN
  * ApplicationVersionId

### DescribeApplicationRequest
* DescribeApplicationRequest `object`
  * ApplicationName **required**
  * IncludeAdditionalDetails

### DescribeApplicationResponse
* DescribeApplicationResponse `object`
  * ApplicationDetail **required**
    * ApplicationARN **required**
    * ApplicationConfigurationDescription
      * ApplicationCodeConfigurationDescription
        * CodeContentDescription
          * CodeMD5
          * CodeSize
          * S3ApplicationCodeLocationDescription
          * TextContent
        * CodeContentType **required**
      * ApplicationSnapshotConfigurationDescription
        * SnapshotsEnabled **required**
      * EnvironmentPropertyDescriptions
        * PropertyGroupDescriptions
          * items [PropertyGroup](#propertygroup)
      * FlinkApplicationConfigurationDescription
        * CheckpointConfigurationDescription
          * CheckpointInterval
          * CheckpointingEnabled
          * ConfigurationType
          * MinPauseBetweenCheckpoints
        * JobPlanDescription
        * MonitoringConfigurationDescription
          * ConfigurationType
          * LogLevel
          * MetricsLevel
        * ParallelismConfigurationDescription
          * AutoScalingEnabled
          * ConfigurationType
          * CurrentParallelism
          * Parallelism
          * ParallelismPerKPU
      * RunConfigurationDescription
        * ApplicationRestoreConfigurationDescription
          * ApplicationRestoreType **required**
          * SnapshotName
        * FlinkRunConfigurationDescription [FlinkRunConfiguration](#flinkrunconfiguration)
      * SqlApplicationConfigurationDescription
        * InputDescriptions
          * items [InputDescription](#inputdescription)
        * OutputDescriptions
          * items [OutputDescription](#outputdescription)
        * ReferenceDataSourceDescriptions
          * items [ReferenceDataSourceDescription](#referencedatasourcedescription)
      * VpcConfigurationDescriptions
        * items [VpcConfigurationDescription](#vpcconfigurationdescription)
    * ApplicationDescription
    * ApplicationName **required**
    * ApplicationStatus **required**
    * ApplicationVersionId **required**
    * CloudWatchLoggingOptionDescriptions
      * items [CloudWatchLoggingOptionDescription](#cloudwatchloggingoptiondescription)
    * CreateTimestamp
    * LastUpdateTimestamp
    * RuntimeEnvironment **required**
    * ServiceExecutionRole

### DescribeApplicationSnapshotRequest
* DescribeApplicationSnapshotRequest `object`
  * ApplicationName **required**
  * SnapshotName **required**

### DescribeApplicationSnapshotResponse
* DescribeApplicationSnapshotResponse `object`
  * SnapshotDetails **required**
    * ApplicationVersionId **required**
    * SnapshotCreationTimestamp
    * SnapshotName **required**
    * SnapshotStatus **required**

### DestinationSchema
* DestinationSchema `object`: Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application. 
  * RecordFormatType **required**

### DiscoverInputSchemaRequest
* DiscoverInputSchemaRequest `object`
  * InputProcessingConfiguration
    * InputLambdaProcessor **required**
      * ResourceARN **required**
  * InputStartingPositionConfiguration
    * InputStartingPosition
  * ResourceARN
  * S3Configuration
    * BucketARN **required**
    * FileKey **required**
  * ServiceExecutionRole **required**

### DiscoverInputSchemaResponse
* DiscoverInputSchemaResponse `object`
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

### EnvironmentProperties
* EnvironmentProperties `object`: Describes execution properties for a Flink-based Kinesis Data Analytics application.
  * PropertyGroups **required**
    * items [PropertyGroup](#propertygroup)

### EnvironmentPropertyDescriptions
* EnvironmentPropertyDescriptions `object`: Describes the execution properties for a Flink-based Kinesis Data Analytics application.
  * PropertyGroupDescriptions
    * items [PropertyGroup](#propertygroup)

### EnvironmentPropertyUpdates
* EnvironmentPropertyUpdates `object`: Describes updates to the execution property groups for a Flink-based Kinesis Data Analytics application.
  * PropertyGroups **required**
    * items [PropertyGroup](#propertygroup)

### FileKey
* FileKey `string`

### FlinkApplicationConfiguration
* FlinkApplicationConfiguration `object`: Describes configuration parameters for a Flink-based Kinesis Data Analytics application.
  * CheckpointConfiguration
    * CheckpointInterval
    * CheckpointingEnabled
    * ConfigurationType **required**
    * MinPauseBetweenCheckpoints
  * MonitoringConfiguration
    * ConfigurationType **required**
    * LogLevel
    * MetricsLevel
  * ParallelismConfiguration
    * AutoScalingEnabled
    * ConfigurationType **required**
    * Parallelism
    * ParallelismPerKPU

### FlinkApplicationConfigurationDescription
* FlinkApplicationConfigurationDescription `object`: Describes configuration parameters for a Flink-based Kinesis Data Analytics application.
  * CheckpointConfigurationDescription
    * CheckpointInterval
    * CheckpointingEnabled
    * ConfigurationType
    * MinPauseBetweenCheckpoints
  * JobPlanDescription
  * MonitoringConfigurationDescription
    * ConfigurationType
    * LogLevel
    * MetricsLevel
  * ParallelismConfigurationDescription
    * AutoScalingEnabled
    * ConfigurationType
    * CurrentParallelism
    * Parallelism
    * ParallelismPerKPU

### FlinkApplicationConfigurationUpdate
* FlinkApplicationConfigurationUpdate `object`: Describes updates to the configuration parameters for a Flink-based Kinesis Data Analytics application.
  * CheckpointConfigurationUpdate
    * CheckpointIntervalUpdate
    * CheckpointingEnabledUpdate
    * ConfigurationTypeUpdate
    * MinPauseBetweenCheckpointsUpdate
  * MonitoringConfigurationUpdate
    * ConfigurationTypeUpdate
    * LogLevelUpdate
    * MetricsLevelUpdate
  * ParallelismConfigurationUpdate
    * AutoScalingEnabledUpdate
    * ConfigurationTypeUpdate
    * ParallelismPerKPUUpdate
    * ParallelismUpdate

### FlinkRunConfiguration
* FlinkRunConfiguration `object`: Describes the starting parameters for a Flink-based Kinesis Data Analytics application.
  * AllowNonRestoredState

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
* Input `object`: When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. 
  * InputParallelism
    * Count
  * InputProcessingConfiguration
    * InputLambdaProcessor **required**
      * ResourceARN **required**
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
  * KinesisStreamsInput
    * ResourceARN **required**
  * NamePrefix **required**

### InputDescription
* InputDescription `object`: Describes the application input configuration for a SQL-based Kinesis Data Analytics application. 
  * InAppStreamNames
    * items [InAppStreamName](#inappstreamname)
  * InputId
  * InputParallelism
    * Count
  * InputProcessingConfigurationDescription
    * InputLambdaProcessorDescription
      * ResourceARN **required**
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
    * ResourceARN **required**
    * RoleARN
  * KinesisStreamsInputDescription
    * ResourceARN **required**
    * RoleARN
  * NamePrefix

### InputDescriptions
* InputDescriptions `array`
  * items [InputDescription](#inputdescription)

### InputLambdaProcessor
* InputLambdaProcessor `object`: An object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream in a SQL-based Kinesis Data Analytics application. 
  * ResourceARN **required**

### InputLambdaProcessorDescription
* InputLambdaProcessorDescription `object`: For a SQL-based Kinesis Data Analytics application, an object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream.
  * ResourceARN **required**
  * RoleARN

### InputLambdaProcessorUpdate
* InputLambdaProcessorUpdate `object`: For a SQL-based Kinesis Data Analytics application, represents an update to the <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream.
  * ResourceARNUpdate **required**

### InputParallelism
* InputParallelism `object`: For a SQL-based Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source. 
  * Count

### InputParallelismCount
* InputParallelismCount `integer`

### InputParallelismUpdate
* InputParallelismUpdate `object`: For a SQL-based Kinesis Data Analytics application, provides updates to the parallelism count.
  * CountUpdate **required**

### InputProcessingConfiguration
* InputProcessingConfiguration `object`: For a SQL-based Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.
  * InputLambdaProcessor **required**
    * ResourceARN **required**

### InputProcessingConfigurationDescription
* InputProcessingConfigurationDescription `object`: For a SQL-based Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.
  * InputLambdaProcessorDescription
    * ResourceARN **required**
    * RoleARN

### InputProcessingConfigurationUpdate
* InputProcessingConfigurationUpdate `object`: For a SQL-based Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>.
  * InputLambdaProcessorUpdate **required**
    * ResourceARNUpdate **required**

### InputSchemaUpdate
* InputSchemaUpdate `object`: Describes updates for an SQL-based Kinesis Data Analytics application's input schema.
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
* InputUpdate `object`: For a SQL-based Kinesis Data Analytics application, describes updates to a specific input configuration (identified by the <code>InputId</code> of an application). 
  * InputId **required**
  * InputParallelismUpdate
    * CountUpdate **required**
  * InputProcessingConfigurationUpdate
    * InputLambdaProcessorUpdate **required**
      * ResourceARNUpdate **required**
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
    * ResourceARNUpdate **required**
  * KinesisStreamsInputUpdate
    * ResourceARNUpdate **required**
  * NamePrefixUpdate

### InputUpdates
* InputUpdates `array`
  * items [InputUpdate](#inputupdate)

### Inputs
* Inputs `array`
  * items [Input](#input)

### InvalidApplicationConfigurationException


### InvalidArgumentException


### InvalidRequestException


### JSONMappingParameters
* JSONMappingParameters `object`: For a SQL-based Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source.
  * RecordRowPath **required**

### JobPlanDescription
* JobPlanDescription `string`

### KinesisAnalyticsARN
* KinesisAnalyticsARN `string`

### KinesisFirehoseInput
* KinesisFirehoseInput `object`: For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN).
  * ResourceARN **required**

### KinesisFirehoseInputDescription
* KinesisFirehoseInputDescription `object`: Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source in the application input configuration. 
  * ResourceARN **required**
  * RoleARN

### KinesisFirehoseInputUpdate
* KinesisFirehoseInputUpdate `object`: For a SQL-based Kinesis Data Analytics application, when updating application input configuration, provides information about a Kinesis Data Firehose delivery stream as the streaming source.
  * ResourceARNUpdate **required**

### KinesisFirehoseOutput
* KinesisFirehoseOutput `object`: For a SQL-based Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream. 
  * ResourceARN **required**

### KinesisFirehoseOutputDescription
* KinesisFirehoseOutputDescription `object`: For a SQL-based Kinesis Data Analytics application's output, describes the Kinesis Data Firehose delivery stream that is configured as its destination.
  * ResourceARN **required**
  * RoleARN

### KinesisFirehoseOutputUpdate
* KinesisFirehoseOutputUpdate `object`: For a SQL-based Kinesis Data Analytics application, when updating an output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis Data Firehose delivery stream that is configured as the destination.
  * ResourceARNUpdate **required**

### KinesisStreamsInput
* KinesisStreamsInput `object`:  Identifies a Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN).
  * ResourceARN **required**

### KinesisStreamsInputDescription
* KinesisStreamsInputDescription `object`: For a SQL-based Kinesis Data Analytics application, describes the Kinesis data stream that is configured as the streaming source in the application input configuration. 
  * ResourceARN **required**
  * RoleARN

### KinesisStreamsInputUpdate
* KinesisStreamsInputUpdate `object`: When you update the input configuration for a SQL-based Kinesis Data Analytics application, provides information about a Kinesis stream as the streaming source.
  * ResourceARNUpdate **required**

### KinesisStreamsOutput
* KinesisStreamsOutput `object`: When you configure a SQL-based Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN). 
  * ResourceARN **required**

### KinesisStreamsOutputDescription
* KinesisStreamsOutputDescription `object`: For an SQL-based Kinesis Data Analytics application's output, describes the Kinesis data stream that is configured as its destination. 
  * ResourceARN **required**
  * RoleARN

### KinesisStreamsOutputUpdate
* KinesisStreamsOutputUpdate `object`: When you update a SQL-based Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis data stream that is configured as the destination.
  * ResourceARNUpdate **required**

### LambdaOutput
* LambdaOutput `object`: When you configure a SQL-based Kinesis Data Analytics application's output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function. 
  * ResourceARN **required**

### LambdaOutputDescription
* LambdaOutputDescription `object`: For a SQL-based Kinesis Data Analytics application's output, describes the AWS Lambda function that is configured as its destination. 
  * ResourceARN **required**
  * RoleARN

### LambdaOutputUpdate
* LambdaOutputUpdate `object`: When you update an SQL-based Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about an AWS Lambda function that is configured as the destination.
  * ResourceARNUpdate **required**

### LimitExceededException


### ListApplicationSnapshotsRequest
* ListApplicationSnapshotsRequest `object`
  * ApplicationName **required**
  * Limit
  * NextToken

### ListApplicationSnapshotsResponse
* ListApplicationSnapshotsResponse `object`
  * NextToken
  * SnapshotSummaries
    * items [SnapshotDetails](#snapshotdetails)

### ListApplicationsInputLimit
* ListApplicationsInputLimit `integer`

### ListApplicationsRequest
* ListApplicationsRequest `object`
  * Limit
  * NextToken

### ListApplicationsResponse
* ListApplicationsResponse `object`
  * ApplicationSummaries **required**
    * items [ApplicationSummary](#applicationsummary)
  * NextToken

### ListSnapshotsInputLimit
* ListSnapshotsInputLimit `integer`

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceARN **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### LogLevel
* LogLevel `string` (values: INFO, WARN, ERROR, DEBUG)

### LogStreamARN
* LogStreamARN `string`

### MappingParameters
* MappingParameters `object`: When you configure a SQL-based Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
  * CSVMappingParameters
    * RecordColumnDelimiter **required**
    * RecordRowDelimiter **required**
  * JSONMappingParameters
    * RecordRowPath **required**

### MetricsLevel
* MetricsLevel `string` (values: APPLICATION, TASK, OPERATOR, PARALLELISM)

### MinPauseBetweenCheckpoints
* MinPauseBetweenCheckpoints `integer`

### MonitoringConfiguration
* MonitoringConfiguration `object`: Describes configuration parameters for Amazon CloudWatch logging for a Flink-based Kinesis Data Analytics application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.
  * ConfigurationType **required**
  * LogLevel
  * MetricsLevel

### MonitoringConfigurationDescription
* MonitoringConfigurationDescription `object`: Describes configuration parameters for CloudWatch logging for a Flink-based Kinesis Data Analytics application.
  * ConfigurationType
  * LogLevel
  * MetricsLevel

### MonitoringConfigurationUpdate
* MonitoringConfigurationUpdate `object`: Describes updates to configuration parameters for Amazon CloudWatch logging for a Flink-based Kinesis Data Analytics application.
  * ConfigurationTypeUpdate
  * LogLevelUpdate
  * MetricsLevelUpdate

### NextToken
* NextToken `string`

### ObjectVersion
* ObjectVersion `string`

### Output
* Output `object`: <p> Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p> <p/>
  * DestinationSchema **required**
    * RecordFormatType **required**
  * KinesisFirehoseOutput
    * ResourceARN **required**
  * KinesisStreamsOutput
    * ResourceARN **required**
  * LambdaOutput
    * ResourceARN **required**
  * Name **required**

### OutputDescription
* OutputDescription `object`: For a SQL-based Kinesis Data Analytics application, describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. 
  * DestinationSchema
    * RecordFormatType **required**
  * KinesisFirehoseOutputDescription
    * ResourceARN **required**
    * RoleARN
  * KinesisStreamsOutputDescription
    * ResourceARN **required**
    * RoleARN
  * LambdaOutputDescription
    * ResourceARN **required**
    * RoleARN
  * Name
  * OutputId

### OutputDescriptions
* OutputDescriptions `array`
  * items [OutputDescription](#outputdescription)

### OutputUpdate
* OutputUpdate `object`:  For a SQL-based Kinesis Data Analytics application, describes updates to the output configuration identified by the <code>OutputId</code>. 
  * DestinationSchemaUpdate
    * RecordFormatType **required**
  * KinesisFirehoseOutputUpdate
    * ResourceARNUpdate **required**
  * KinesisStreamsOutputUpdate
    * ResourceARNUpdate **required**
  * LambdaOutputUpdate
    * ResourceARNUpdate **required**
  * NameUpdate
  * OutputId **required**

### OutputUpdates
* OutputUpdates `array`
  * items [OutputUpdate](#outputupdate)

### Outputs
* Outputs `array`
  * items [Output](#output)

### Parallelism
* Parallelism `integer`

### ParallelismConfiguration
* ParallelismConfiguration `object`: Describes parameters for how a Flink-based Kinesis Data Analytics application application executes multiple tasks simultaneously. For more information about parallelism, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.
  * AutoScalingEnabled
  * ConfigurationType **required**
  * Parallelism
  * ParallelismPerKPU

### ParallelismConfigurationDescription
* ParallelismConfigurationDescription `object`: Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously.
  * AutoScalingEnabled
  * ConfigurationType
  * CurrentParallelism
  * Parallelism
  * ParallelismPerKPU

### ParallelismConfigurationUpdate
* ParallelismConfigurationUpdate `object`: Describes updates to parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously.
  * AutoScalingEnabledUpdate
  * ConfigurationTypeUpdate
  * ParallelismPerKPUUpdate
  * ParallelismUpdate

### ParallelismPerKPU
* ParallelismPerKPU `integer`

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

### PropertyGroup
* PropertyGroup `object`: Property key-value pairs passed into a Flink-based Kinesis Data Analytics application.
  * PropertyGroupId **required**
  * PropertyMap **required**

### PropertyGroups
* PropertyGroups `array`
  * items [PropertyGroup](#propertygroup)

### PropertyKey
* PropertyKey `string`

### PropertyMap
* PropertyMap `object`

### PropertyValue
* PropertyValue `string`

### RawInputRecord
* RawInputRecord `string`

### RawInputRecords
* RawInputRecords `array`
  * items [RawInputRecord](#rawinputrecord)

### RecordColumn
* RecordColumn `object`: <p>For a SQL-based Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p>
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
* RecordFormat `object`:  For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream. 
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
* ReferenceDataSource `object`: For a SQL-based Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
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
    * BucketARN
    * FileKey
  * TableName **required**

### ReferenceDataSourceDescription
* ReferenceDataSourceDescription `object`: For a SQL-based Kinesis Data Analytics application, describes the reference data source configured for an application.
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
    * ReferenceRoleARN
  * TableName **required**

### ReferenceDataSourceDescriptions
* ReferenceDataSourceDescriptions `array`
  * items [ReferenceDataSourceDescription](#referencedatasourcedescription)

### ReferenceDataSourceUpdate
* ReferenceDataSourceUpdate `object`: When you update a reference data source configuration for a SQL-based Kinesis Data Analytics application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.
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
  * TableNameUpdate

### ReferenceDataSourceUpdates
* ReferenceDataSourceUpdates `array`
  * items [ReferenceDataSourceUpdate](#referencedatasourceupdate)

### ReferenceDataSources
* ReferenceDataSources `array`
  * items [ReferenceDataSource](#referencedatasource)

### ResourceARN
* ResourceARN `string`

### ResourceInUseException


### ResourceNotFoundException


### ResourceProvisionedThroughputExceededException


### RoleARN
* RoleARN `string`

### RunConfiguration
* RunConfiguration `object`: Describes the starting parameters for an Kinesis Data Analytics application.
  * ApplicationRestoreConfiguration
    * ApplicationRestoreType **required**
    * SnapshotName
  * FlinkRunConfiguration
    * AllowNonRestoredState
  * SqlRunConfigurations
    * items [SqlRunConfiguration](#sqlrunconfiguration)

### RunConfigurationDescription
* RunConfigurationDescription `object`: Describes the starting properties for a Kinesis Data Analytics application.
  * ApplicationRestoreConfigurationDescription
    * ApplicationRestoreType **required**
    * SnapshotName
  * FlinkRunConfigurationDescription [FlinkRunConfiguration](#flinkrunconfiguration)

### RunConfigurationUpdate
* RunConfigurationUpdate `object`: Describes the updates to the starting parameters for a Kinesis Data Analytics application.
  * ApplicationRestoreConfiguration
    * ApplicationRestoreType **required**
    * SnapshotName
  * FlinkRunConfiguration
    * AllowNonRestoredState

### RuntimeEnvironment
* RuntimeEnvironment `string` (values: SQL-1_0, FLINK-1_6, FLINK-1_8, FLINK-1_11)

### S3ApplicationCodeLocationDescription
* S3ApplicationCodeLocationDescription `object`: Describes the location of a Flink-based Kinesis Data Analytics application's code stored in an S3 bucket.
  * BucketARN **required**
  * FileKey **required**
  * ObjectVersion

### S3Configuration
* S3Configuration `object`: For a SQL-based Kinesis Data Analytics application, provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name of the Amazon S3 object that contains the data.
  * BucketARN **required**
  * FileKey **required**

### S3ContentLocation
* S3ContentLocation `object`: For a Flink-based Kinesis Data Analytics application, provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data. 
  * BucketARN **required**
  * FileKey **required**
  * ObjectVersion

### S3ContentLocationUpdate
* S3ContentLocationUpdate `object`: Describes an update for the Amazon S3 code content location for a Flink-based Kinesis Data Analytics application.
  * BucketARNUpdate
  * FileKeyUpdate
  * ObjectVersionUpdate

### S3ReferenceDataSource
* S3ReferenceDataSource `object`: <p>For a SQL-based Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.</p> <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p>
  * BucketARN
  * FileKey

### S3ReferenceDataSourceDescription
* S3ReferenceDataSourceDescription `object`: For a SQL-based Kinesis Data Analytics application, provides the bucket name and object key name that stores the reference data.
  * BucketARN **required**
  * FileKey **required**
  * ReferenceRoleARN

### S3ReferenceDataSourceUpdate
* S3ReferenceDataSourceUpdate `object`: For a SQL-based Kinesis Data Analytics application, describes the Amazon S3 bucket name and object key name for an in-application reference table. 
  * BucketARNUpdate
  * FileKeyUpdate

### SecurityGroupId
* SecurityGroupId `string`

### SecurityGroupIds
* SecurityGroupIds `array`
  * items [SecurityGroupId](#securitygroupid)

### ServiceUnavailableException


### SessionExpirationDurationInSeconds
* SessionExpirationDurationInSeconds `integer`

### SnapshotDetails
* SnapshotDetails `object`: Provides details about a snapshot of application state.
  * ApplicationVersionId **required**
  * SnapshotCreationTimestamp
  * SnapshotName **required**
  * SnapshotStatus **required**

### SnapshotName
* SnapshotName `string`

### SnapshotStatus
* SnapshotStatus `string` (values: CREATING, READY, DELETING, FAILED)

### SnapshotSummaries
* SnapshotSummaries `array`
  * items [SnapshotDetails](#snapshotdetails)

### SourceSchema
* SourceSchema `object`: For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. 
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

### SqlApplicationConfiguration
* SqlApplicationConfiguration `object`: Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
  * Inputs
    * items [Input](#input)
  * Outputs
    * items [Output](#output)
  * ReferenceDataSources
    * items [ReferenceDataSource](#referencedatasource)

### SqlApplicationConfigurationDescription
* SqlApplicationConfigurationDescription `object`: Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
  * InputDescriptions
    * items [InputDescription](#inputdescription)
  * OutputDescriptions
    * items [OutputDescription](#outputdescription)
  * ReferenceDataSourceDescriptions
    * items [ReferenceDataSourceDescription](#referencedatasourcedescription)

### SqlApplicationConfigurationUpdate
* SqlApplicationConfigurationUpdate `object`: Describes updates to the input streams, destination streams, and reference data sources for a SQL-based Kinesis Data Analytics application.
  * InputUpdates
    * items [InputUpdate](#inputupdate)
  * OutputUpdates
    * items [OutputUpdate](#outputupdate)
  * ReferenceDataSourceUpdates
    * items [ReferenceDataSourceUpdate](#referencedatasourceupdate)

### SqlRunConfiguration
* SqlRunConfiguration `object`: Describes the starting parameters for a SQL-based Kinesis Data Analytics application.
  * InputId **required**
  * InputStartingPositionConfiguration **required**
    * InputStartingPosition

### SqlRunConfigurations
* SqlRunConfigurations `array`
  * items [SqlRunConfiguration](#sqlrunconfiguration)

### StartApplicationRequest
* StartApplicationRequest `object`
  * ApplicationName **required**
  * RunConfiguration **required**
    * ApplicationRestoreConfiguration
      * ApplicationRestoreType **required**
      * SnapshotName
    * FlinkRunConfiguration
      * AllowNonRestoredState
    * SqlRunConfigurations
      * items [SqlRunConfiguration](#sqlrunconfiguration)

### StartApplicationResponse
* StartApplicationResponse `object`

### StopApplicationRequest
* StopApplicationRequest `object`
  * ApplicationName **required**
  * Force

### StopApplicationResponse
* StopApplicationResponse `object`

### SubnetId
* SubnetId `string`

### SubnetIds
* SubnetIds `array`
  * items [SubnetId](#subnetid)

### Tag
* Tag `object`: A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.
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

### TextContent
* TextContent `string`

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
  * ApplicationConfigurationUpdate
    * ApplicationCodeConfigurationUpdate
      * CodeContentTypeUpdate
      * CodeContentUpdate
        * S3ContentLocationUpdate
          * BucketARNUpdate
          * FileKeyUpdate
          * ObjectVersionUpdate
        * TextContentUpdate
        * ZipFileContentUpdate
    * ApplicationSnapshotConfigurationUpdate
      * SnapshotsEnabledUpdate **required**
    * EnvironmentPropertyUpdates
      * PropertyGroups **required**
        * items [PropertyGroup](#propertygroup)
    * FlinkApplicationConfigurationUpdate
      * CheckpointConfigurationUpdate
        * CheckpointIntervalUpdate
        * CheckpointingEnabledUpdate
        * ConfigurationTypeUpdate
        * MinPauseBetweenCheckpointsUpdate
      * MonitoringConfigurationUpdate
        * ConfigurationTypeUpdate
        * LogLevelUpdate
        * MetricsLevelUpdate
      * ParallelismConfigurationUpdate
        * AutoScalingEnabledUpdate
        * ConfigurationTypeUpdate
        * ParallelismPerKPUUpdate
        * ParallelismUpdate
    * SqlApplicationConfigurationUpdate
      * InputUpdates
        * items [InputUpdate](#inputupdate)
      * OutputUpdates
        * items [OutputUpdate](#outputupdate)
      * ReferenceDataSourceUpdates
        * items [ReferenceDataSourceUpdate](#referencedatasourceupdate)
    * VpcConfigurationUpdates
      * items [VpcConfigurationUpdate](#vpcconfigurationupdate)
  * ApplicationName **required**
  * CloudWatchLoggingOptionUpdates
    * items [CloudWatchLoggingOptionUpdate](#cloudwatchloggingoptionupdate)
  * CurrentApplicationVersionId **required**
  * RunConfigurationUpdate
    * ApplicationRestoreConfiguration
      * ApplicationRestoreType **required**
      * SnapshotName
    * FlinkRunConfiguration
      * AllowNonRestoredState
  * ServiceExecutionRoleUpdate

### UpdateApplicationResponse
* UpdateApplicationResponse `object`
  * ApplicationDetail **required**
    * ApplicationARN **required**
    * ApplicationConfigurationDescription
      * ApplicationCodeConfigurationDescription
        * CodeContentDescription
          * CodeMD5
          * CodeSize
          * S3ApplicationCodeLocationDescription
          * TextContent
        * CodeContentType **required**
      * ApplicationSnapshotConfigurationDescription
        * SnapshotsEnabled **required**
      * EnvironmentPropertyDescriptions
        * PropertyGroupDescriptions
          * items [PropertyGroup](#propertygroup)
      * FlinkApplicationConfigurationDescription
        * CheckpointConfigurationDescription
          * CheckpointInterval
          * CheckpointingEnabled
          * ConfigurationType
          * MinPauseBetweenCheckpoints
        * JobPlanDescription
        * MonitoringConfigurationDescription
          * ConfigurationType
          * LogLevel
          * MetricsLevel
        * ParallelismConfigurationDescription
          * AutoScalingEnabled
          * ConfigurationType
          * CurrentParallelism
          * Parallelism
          * ParallelismPerKPU
      * RunConfigurationDescription
        * ApplicationRestoreConfigurationDescription
          * ApplicationRestoreType **required**
          * SnapshotName
        * FlinkRunConfigurationDescription [FlinkRunConfiguration](#flinkrunconfiguration)
      * SqlApplicationConfigurationDescription
        * InputDescriptions
          * items [InputDescription](#inputdescription)
        * OutputDescriptions
          * items [OutputDescription](#outputdescription)
        * ReferenceDataSourceDescriptions
          * items [ReferenceDataSourceDescription](#referencedatasourcedescription)
      * VpcConfigurationDescriptions
        * items [VpcConfigurationDescription](#vpcconfigurationdescription)
    * ApplicationDescription
    * ApplicationName **required**
    * ApplicationStatus **required**
    * ApplicationVersionId **required**
    * CloudWatchLoggingOptionDescriptions
      * items [CloudWatchLoggingOptionDescription](#cloudwatchloggingoptiondescription)
    * CreateTimestamp
    * LastUpdateTimestamp
    * RuntimeEnvironment **required**
    * ServiceExecutionRole

### UrlType
* UrlType `string` (values: FLINK_DASHBOARD_URL)

### VpcConfiguration
* VpcConfiguration `object`: Describes the parameters of a VPC used by the application.
  * SecurityGroupIds **required**
    * items [SecurityGroupId](#securitygroupid)
  * SubnetIds **required**
    * items [SubnetId](#subnetid)

### VpcConfigurationDescription
* VpcConfigurationDescription `object`: Describes the parameters of a VPC used by the application.
  * SecurityGroupIds **required**
    * items [SecurityGroupId](#securitygroupid)
  * SubnetIds **required**
    * items [SubnetId](#subnetid)
  * VpcConfigurationId **required**
  * VpcId **required**

### VpcConfigurationDescriptions
* VpcConfigurationDescriptions `array`
  * items [VpcConfigurationDescription](#vpcconfigurationdescription)

### VpcConfigurationUpdate
* VpcConfigurationUpdate `object`: Describes updates to the VPC configuration used by the application.
  * SecurityGroupIdUpdates
    * items [SecurityGroupId](#securitygroupid)
  * SubnetIdUpdates
    * items [SubnetId](#subnetid)
  * VpcConfigurationId **required**

### VpcConfigurationUpdates
* VpcConfigurationUpdates `array`
  * items [VpcConfigurationUpdate](#vpcconfigurationupdate)

### VpcConfigurations
* VpcConfigurations `array`
  * items [VpcConfiguration](#vpcconfiguration)

### VpcId
* VpcId `string`

### ZipFileContent
* ZipFileContent `string`


