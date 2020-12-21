# @datafire/amazonaws_mwaa

Client library for AmazonMWAA

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_mwaa
```
```js
let amazonaws_mwaa = require('@datafire/amazonaws_mwaa').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p><fullname>Amazon Managed Workflows for Apache Airflow</fullname> <p>This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html">What Is Amazon MWAA?</a>.</p></p>

## Actions

### CreateCliToken



```js
amazonaws_mwaa.CreateCliToken({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`

#### Output
* output [CreateCliTokenResponse](#createclitokenresponse)

### ListEnvironments



```js
amazonaws_mwaa.ListEnvironments({}, context)
```

#### Input
* input `object`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [ListEnvironmentsOutput](#listenvironmentsoutput)

### DeleteEnvironment



```js
amazonaws_mwaa.DeleteEnvironment({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`

#### Output
* output [DeleteEnvironmentOutput](#deleteenvironmentoutput)

### GetEnvironment



```js
amazonaws_mwaa.GetEnvironment({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`

#### Output
* output [GetEnvironmentOutput](#getenvironmentoutput)

### UpdateEnvironment



```js
amazonaws_mwaa.UpdateEnvironment({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`
  * AirflowConfigurationOptions `object`: The Airflow Configuration Options to update of your Amazon MWAA environment.
  * AirflowVersion `string`: The Airflow Version to update of your Amazon MWAA environment.
  * DagS3Path `string`: The Dags folder S3 Path to update of your Amazon MWAA environment.
  * EnvironmentClass `string`: The Environment Class to update of your Amazon MWAA environment.
  * ExecutionRoleArn `string`: The Executio Role ARN to update of your Amazon MWAA environment.
  * LoggingConfiguration `object`: The Logging Configuration of your Amazon MWAA environment.
    * DagProcessingLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
    * SchedulerLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
    * TaskLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
    * WebserverLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
    * WorkerLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
  * MaxWorkers `integer`: The Maximum Workers to update of your Amazon MWAA environment.
  * NetworkConfiguration `object`: Provide the security group and subnet IDs for the workers and scheduler.
    * SecurityGroupIds
      * items [SecurityGroupId](#securitygroupid)
  * PluginsS3ObjectVersion `string`: The Plugins.zip S3 Object Version to update of your Amazon MWAA environment.
  * PluginsS3Path `string`: The Plugins.zip S3 Path to update of your Amazon MWAA environment.
  * RequirementsS3ObjectVersion `string`: The Requirements.txt S3 ObjectV ersion to update of your Amazon MWAA environment.
  * RequirementsS3Path `string`: The Requirements.txt S3 Path to update of your Amazon MWAA environment.
  * SourceBucketArn `string`: The S3 Source Bucket ARN to update of your Amazon MWAA environment.
  * WebserverAccessMode `string` (values: PRIVATE_ONLY, PUBLIC_ONLY): The Webserver Access Mode to update of your Amazon MWAA environment.
  * WeeklyMaintenanceWindowStart `string`: The Weekly Maintenance Window Start to update of your Amazon MWAA environment.

#### Output
* output [UpdateEnvironmentOutput](#updateenvironmentoutput)

### CreateEnvironment



```js
amazonaws_mwaa.CreateEnvironment({
  "Name": "",
  "DagS3Path": "",
  "ExecutionRoleArn": "",
  "NetworkConfiguration": {},
  "SourceBucketArn": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`
  * AirflowConfigurationOptions `object`: The Apache Airflow configuration setting you want to override in your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Environment configuration</a>.
  * AirflowVersion `string`: The Apache Airflow version you want to use for your environment.
  * DagS3Path **required** `string`: The relative path to the DAG folder on your Amazon S3 storage bucket. For example, <code>dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html">Importing DAGs on Amazon MWAA</a>.
  * EnvironmentClass `string`: The environment class you want to use for your environment. The environment class determines the size of the containers and database used for your Apache Airflow services.
  * ExecutionRoleArn **required** `string`: The Amazon Resource Name (ARN) of the execution role for your environment. An execution role is an AWS Identity and Access Management (IAM) role that grants MWAA permission to access AWS services and resources used by your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/manage-access.html">Managing access to Amazon Managed Workflows for Apache Airflow</a>.
  * KmsKey `string`: The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment. You can use an AWS KMS key managed by MWAA, or a custom KMS key (advanced). For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html?icmpid=docs_console_unmapped#master_keys">Customer master keys (CMKs)</a> in the AWS KMS developer guide.
  * LoggingConfiguration `object`: The Logging Configuration of your Amazon MWAA environment.
    * DagProcessingLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
    * SchedulerLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
    * TaskLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
    * WebserverLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
    * WorkerLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
  * MaxWorkers `integer`: The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers and the Fargate containers that run your tasks up to the number you specify in this field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra containers leaving the one worker that is included with your environment.
  * NetworkConfiguration **required** `object`: Provide the security group and subnet IDs for the workers and scheduler.
    * SecurityGroupIds
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds
      * items [SubnetId](#subnetid)
  * PluginsS3ObjectVersion `string`: The <code>plugins.zip</code> file version you want to use.
  * PluginsS3Path `string`: The relative path to the <code>plugins.zip</code> file on your Amazon S3 storage bucket. For example, <code>plugins.zip</code>. If a relative path is provided in the request, then <code>PluginsS3ObjectVersion</code> is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html">Importing DAGs on Amazon MWAA</a>.
  * RequirementsS3ObjectVersion `string`: The <code>requirements.txt</code> file version you want to use.
  * RequirementsS3Path `string`: The relative path to the <code>requirements.txt</code> file on your Amazon S3 storage bucket. For example, <code>requirements.txt</code>. If a relative path is provided in the request, then <code>RequirementsS3ObjectVersion</code> is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html">Importing DAGs on Amazon MWAA</a>.
  * SourceBucketArn **required** `string`: The Amazon Resource Name (ARN) of your Amazon S3 storage bucket. For example, <code>arn:aws:s3:::airflow-mybucketname</code>.
  * Tags `object`: The metadata tags you want to attach to your environment. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS resources</a>.
  * WebserverAccessMode `string` (values: PRIVATE_ONLY, PUBLIC_ONLY): The networking access of your Apache Airflow web server. A public network allows your Airflow UI to be accessed over the Internet by users granted access in your IAM policy. A private network limits access of your Airflow UI to users within your VPC. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-mwaa.html">Creating the VPC network for a MWAA environment</a>.
  * WeeklyMaintenanceWindowStart `string`: The day and time you want MWAA to start weekly maintenance updates on your environment.

#### Output
* output [CreateEnvironmentOutput](#createenvironmentoutput)

### PublishMetrics



```js
amazonaws_mwaa.PublishMetrics({
  "EnvironmentName": "",
  "MetricData": []
}, context)
```

#### Input
* input `object`
  * EnvironmentName **required** `string`
  * MetricData **required** `array`: Publishes metric data points to Amazon CloudWatch. CloudWatch associates the data points with the specified metrica.
    * items [MetricDatum](#metricdatum)

#### Output
* output [PublishMetricsOutput](#publishmetricsoutput)

### ListTagsForResource



```js
amazonaws_mwaa.ListTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`

#### Output
* output [ListTagsForResourceOutput](#listtagsforresourceoutput)

### TagResource



```js
amazonaws_mwaa.TagResource({
  "ResourceArn": "",
  "Tags": {}
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * Tags **required** `object`: The tag resource tag of the MWAA environments.

#### Output
* output [TagResourceOutput](#tagresourceoutput)

### UntagResource



```js
amazonaws_mwaa.UntagResource({
  "ResourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceOutput](#untagresourceoutput)

### CreateWebLoginToken



```js
amazonaws_mwaa.CreateWebLoginToken({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`

#### Output
* output [CreateWebLoginTokenResponse](#createweblogintokenresponse)



## Definitions

### AccessDeniedException


### AirflowConfigurationOptions
* AirflowConfigurationOptions `object`

### AirflowVersion
* AirflowVersion `string`

### CloudWatchLogGroupArn
* CloudWatchLogGroupArn `string`

### ConfigKey
* ConfigKey `string`

### ConfigValue
* ConfigValue `string`

### CreateCliTokenRequest
* CreateCliTokenRequest `object`

### CreateCliTokenResponse
* CreateCliTokenResponse `object`
  * CliToken
  * WebServerHostname

### CreateEnvironmentInput
* CreateEnvironmentInput `object`: This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation to create an environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/get-started.html">Get started with Amazon Managed Workflows for Apache Airflow</a>.
  * AirflowConfigurationOptions
  * AirflowVersion
  * DagS3Path **required**
  * EnvironmentClass
  * ExecutionRoleArn **required**
  * KmsKey
  * LoggingConfiguration
    * DagProcessingLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
    * SchedulerLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
    * TaskLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
    * WebserverLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
    * WorkerLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
  * MaxWorkers
  * NetworkConfiguration **required**
    * SecurityGroupIds
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds
      * items [SubnetId](#subnetid)
  * PluginsS3ObjectVersion
  * PluginsS3Path
  * RequirementsS3ObjectVersion
  * RequirementsS3Path
  * SourceBucketArn **required**
  * Tags
  * WebserverAccessMode
  * WeeklyMaintenanceWindowStart

### CreateEnvironmentOutput
* CreateEnvironmentOutput `object`
  * Arn

### CreateWebLoginTokenRequest
* CreateWebLoginTokenRequest `object`

### CreateWebLoginTokenResponse
* CreateWebLoginTokenResponse `object`
  * WebServerHostname
  * WebToken

### CreatedAt
* CreatedAt `string`

### DeleteEnvironmentInput
* DeleteEnvironmentInput `object`

### DeleteEnvironmentOutput
* DeleteEnvironmentOutput `object`

### Dimension
* Dimension `object`: Internal only API.
  * Name **required**
  * Value **required**

### Dimensions
* Dimensions `array`
  * items [Dimension](#dimension)

### Double
* Double `number`

### Environment
* Environment `object`: An Amazon MWAA environment.
  * AirflowConfigurationOptions
  * AirflowVersion
  * Arn
  * CreatedAt
  * DagS3Path
  * EnvironmentClass
  * ExecutionRoleArn
  * KmsKey
  * LastUpdate [LastUpdate](#lastupdate)
  * LoggingConfiguration
    * DagProcessingLogs [ModuleLoggingConfiguration](#moduleloggingconfiguration)
    * SchedulerLogs [ModuleLoggingConfiguration](#moduleloggingconfiguration)
    * TaskLogs [ModuleLoggingConfiguration](#moduleloggingconfiguration)
    * WebserverLogs [ModuleLoggingConfiguration](#moduleloggingconfiguration)
    * WorkerLogs [ModuleLoggingConfiguration](#moduleloggingconfiguration)
  * MaxWorkers
  * Name
  * NetworkConfiguration [NetworkConfiguration](#networkconfiguration)
  * PluginsS3ObjectVersion
  * PluginsS3Path
  * RequirementsS3ObjectVersion
  * RequirementsS3Path
  * ServiceRoleArn
  * SourceBucketArn
  * Status
  * Tags
  * WebserverAccessMode
  * WebserverUrl
  * WeeklyMaintenanceWindowStart

### EnvironmentArn
* EnvironmentArn `string`

### EnvironmentClass
* EnvironmentClass `string`

### EnvironmentList
* EnvironmentList `array`
  * items [EnvironmentName](#environmentname)

### EnvironmentName
* EnvironmentName `string`

### EnvironmentStatus
* EnvironmentStatus `string` (values: CREATING, CREATE_FAILED, AVAILABLE, UPDATING, DELETING, DELETED)

### ErrorCode
* ErrorCode `string`

### ErrorMessage
* ErrorMessage `string`

### GetEnvironmentInput
* GetEnvironmentInput `object`

### GetEnvironmentOutput
* GetEnvironmentOutput `object`
  * Environment
    * AirflowConfigurationOptions
    * AirflowVersion
    * Arn
    * CreatedAt
    * DagS3Path
    * EnvironmentClass
    * ExecutionRoleArn
    * KmsKey
    * LastUpdate [LastUpdate](#lastupdate)
    * LoggingConfiguration
      * DagProcessingLogs [ModuleLoggingConfiguration](#moduleloggingconfiguration)
      * SchedulerLogs [ModuleLoggingConfiguration](#moduleloggingconfiguration)
      * TaskLogs [ModuleLoggingConfiguration](#moduleloggingconfiguration)
      * WebserverLogs [ModuleLoggingConfiguration](#moduleloggingconfiguration)
      * WorkerLogs [ModuleLoggingConfiguration](#moduleloggingconfiguration)
    * MaxWorkers
    * Name
    * NetworkConfiguration [NetworkConfiguration](#networkconfiguration)
    * PluginsS3ObjectVersion
    * PluginsS3Path
    * RequirementsS3ObjectVersion
    * RequirementsS3Path
    * ServiceRoleArn
    * SourceBucketArn
    * Status
    * Tags
    * WebserverAccessMode
    * WebserverUrl
    * WeeklyMaintenanceWindowStart

### Hostname
* Hostname `string`

### IamRoleArn
* IamRoleArn `string`

### Integer
* Integer `integer`

### InternalServerException


### KmsKey
* KmsKey `string`

### LastUpdate
* LastUpdate `object`: Last update information for the environment.
  * CreatedAt
  * Error
    * ErrorCode
    * ErrorMessage
  * Status

### ListEnvironmentsInput
* ListEnvironmentsInput `object`

### ListEnvironmentsInputMaxResultsInteger
* ListEnvironmentsInputMaxResultsInteger `integer`

### ListEnvironmentsOutput
* ListEnvironmentsOutput `object`
  * Environments **required**
    * items [EnvironmentName](#environmentname)
  * NextToken

### ListTagsForResourceInput
* ListTagsForResourceInput `object`

### ListTagsForResourceOutput
* ListTagsForResourceOutput `object`
  * Tags

### LoggingConfiguration
* LoggingConfiguration `object`: The Logging Configuration of your Amazon MWAA environment.
  * DagProcessingLogs [ModuleLoggingConfiguration](#moduleloggingconfiguration)
  * SchedulerLogs [ModuleLoggingConfiguration](#moduleloggingconfiguration)
  * TaskLogs [ModuleLoggingConfiguration](#moduleloggingconfiguration)
  * WebserverLogs [ModuleLoggingConfiguration](#moduleloggingconfiguration)
  * WorkerLogs [ModuleLoggingConfiguration](#moduleloggingconfiguration)

### LoggingConfigurationInput
* LoggingConfigurationInput `object`: The Logging Configuration of your Amazon MWAA environment.
  * DagProcessingLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
  * SchedulerLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
  * TaskLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
  * WebserverLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
  * WorkerLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)

### LoggingEnabled
* LoggingEnabled `boolean`

### LoggingLevel
* LoggingLevel `string` (values: CRITICAL, ERROR, WARNING, INFO, DEBUG)

### MaxWorkers
* MaxWorkers `integer`

### MetricData
* MetricData `array`
  * items [MetricDatum](#metricdatum)

### MetricDatum
* MetricDatum `object`: Internal only API.
  * Dimensions
    * items [Dimension](#dimension)
  * MetricName **required**
  * StatisticValues
    * Maximum
    * Minimum
    * SampleCount
    * Sum
  * Timestamp **required**
  * Unit [Unit](#unit)
  * Value

### ModuleLoggingConfiguration
* ModuleLoggingConfiguration `object`: A JSON blob that provides configuration to use for logging with respect to the various Apache Airflow services: DagProcessingLogs, SchedulerLogs, TaskLogs, WebserverLogs, and WorkerLogs.
  * CloudWatchLogGroupArn
  * Enabled
  * LogLevel

### ModuleLoggingConfigurationInput
* ModuleLoggingConfigurationInput `object`: A JSON blob that provides configuration to use for logging with respect to the various Apache Airflow services: DagProcessingLogs, SchedulerLogs, TaskLogs, WebserverLogs, and WorkerLogs.
  * Enabled **required**
  * LogLevel **required**

### NetworkConfiguration
* NetworkConfiguration `object`: Provide the security group and subnet IDs for the workers and scheduler.
  * SecurityGroupIds
    * items [SecurityGroupId](#securitygroupid)
  * SubnetIds
    * items [SubnetId](#subnetid)

### NextToken
* NextToken `string`

### PublishMetricsInput
* PublishMetricsInput `object`
  * MetricData **required**
    * items [MetricDatum](#metricdatum)

### PublishMetricsOutput
* PublishMetricsOutput `object`

### RelativePath
* RelativePath `string`

### ResourceNotFoundException


### S3BucketArn
* S3BucketArn `string`

### S3ObjectVersion
* S3ObjectVersion `string`

### SecurityGroupId
* SecurityGroupId `string`

### SecurityGroupList
* SecurityGroupList `array`
  * items [SecurityGroupId](#securitygroupid)

### StatisticSet
* StatisticSet `object`: Internal only API.
  * Maximum
  * Minimum
  * SampleCount
  * Sum

### String
* String `string`

### SubnetId
* SubnetId `string`

### SubnetList
* SubnetList `array`
  * items [SubnetId](#subnetid)

### SyntheticCreateCliTokenResponseToken
* SyntheticCreateCliTokenResponseToken `string`

### SyntheticCreateEnvironmentInputAirflowConfigurationOptions
* SyntheticCreateEnvironmentInputAirflowConfigurationOptions `object`

### SyntheticCreateWebLoginTokenResponseToken
* SyntheticCreateWebLoginTokenResponseToken `string`

### SyntheticUpdateEnvironmentInputAirflowConfigurationOptions
* SyntheticUpdateEnvironmentInputAirflowConfigurationOptions `object`

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceInput
* TagResourceInput `object`
  * Tags **required**

### TagResourceOutput
* TagResourceOutput `object`

### TagValue
* TagValue `string`

### Timestamp
* Timestamp `string`

### Unit
* Unit `string` (values: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, None): Unit

### UntagResourceInput
* UntagResourceInput `object`

### UntagResourceOutput
* UntagResourceOutput `object`

### UpdateCreatedAt
* UpdateCreatedAt `string`

### UpdateEnvironmentInput
* UpdateEnvironmentInput `object`
  * AirflowConfigurationOptions
  * AirflowVersion
  * DagS3Path
  * EnvironmentClass
  * ExecutionRoleArn
  * LoggingConfiguration
    * DagProcessingLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
    * SchedulerLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
    * TaskLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
    * WebserverLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
    * WorkerLogs [ModuleLoggingConfigurationInput](#moduleloggingconfigurationinput)
  * MaxWorkers
  * NetworkConfiguration
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
  * PluginsS3ObjectVersion
  * PluginsS3Path
  * RequirementsS3ObjectVersion
  * RequirementsS3Path
  * SourceBucketArn
  * WebserverAccessMode
  * WeeklyMaintenanceWindowStart

### UpdateEnvironmentOutput
* UpdateEnvironmentOutput `object`
  * Arn

### UpdateError
* UpdateError `object`: Error information of update, if applicable.
  * ErrorCode
  * ErrorMessage

### UpdateNetworkConfigurationInput
* UpdateNetworkConfigurationInput `object`: Provide the security group and subnet IDs for the workers and scheduler.
  * SecurityGroupIds **required**
    * items [SecurityGroupId](#securitygroupid)

### UpdateStatus
* UpdateStatus `string` (values: SUCCESS, PENDING, FAILED)

### ValidationException


### WebserverAccessMode
* WebserverAccessMode `string` (values: PRIVATE_ONLY, PUBLIC_ONLY)

### WebserverUrl
* WebserverUrl `string`

### WeeklyMaintenanceWindowStart
* WeeklyMaintenanceWindowStart `string`


