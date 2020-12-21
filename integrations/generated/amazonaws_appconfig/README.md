# @datafire/amazonaws_appconfig

Client library for Amazon AppConfig

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_appconfig
```
```js
let amazonaws_appconfig = require('@datafire/amazonaws_appconfig').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS AppConfig</fullname> <p>Use AWS AppConfig, a capability of AWS Systems Manager, to create, manage, and quickly deploy application configurations. AppConfig supports controlled deployments to applications of any size and includes built-in validation checks and monitoring. You can use AppConfig with applications hosted on Amazon EC2 instances, AWS Lambda, containers, mobile applications, or IoT devices.</p> <p>To prevent errors when deploying application configurations, especially for production systems where a simple typo could cause an unexpected outage, AppConfig includes validators. A validator provides a syntactic or semantic check to ensure that the configuration you want to deploy works as intended. To validate your application configuration data, you provide a schema or a Lambda function that runs against the configuration. The configuration deployment or update can only proceed when the configuration data is valid.</p> <p>During a configuration deployment, AppConfig monitors the application to ensure that the deployment is successful. If the system encounters an error, AppConfig rolls back the change to minimize impact for your application users. You can configure a deployment strategy for each application or environment that includes deployment criteria, including velocity, bake time, and alarms to monitor. Similar to error monitoring, if a deployment triggers an alarm, AppConfig automatically rolls back to the previous version. </p> <p>AppConfig supports multiple use cases. Here are some examples.</p> <ul> <li> <p> <b>Application tuning</b>: Use AppConfig to carefully introduce changes to your application that can only be tested with production traffic.</p> </li> <li> <p> <b>Feature toggle</b>: Use AppConfig to turn on new features that require a timely deployment, such as a product launch or announcement. </p> </li> <li> <p> <b>Allow list</b>: Use AppConfig to allow premium subscribers to access paid content. </p> </li> <li> <p> <b>Operational issues</b>: Use AppConfig to reduce stress on your application when a dependency or other external factor impacts the system.</p> </li> </ul> <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig.html">AWS AppConfig User Guide</a>.</p>

## Actions

### ListApplications



```js
amazonaws_appconfig.ListApplications({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [Applications](#applications)

### CreateApplication



```js
amazonaws_appconfig.CreateApplication({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Description `string`: A description of the application.
  * Name **required** `string`: A name for the application.
  * Tags `object`: Metadata to assign to the application. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.

#### Output
*Output schema unknown*

### DeleteApplication



```js
amazonaws_appconfig.DeleteApplication({
  "ApplicationId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`

#### Output
*Output schema unknown*

### GetApplication



```js
amazonaws_appconfig.GetApplication({
  "ApplicationId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`

#### Output
* output [Application](#application)

### UpdateApplication



```js
amazonaws_appconfig.UpdateApplication({
  "ApplicationId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * Description `string`: A description of the application.
  * Name `string`: The name of the application.

#### Output
* output [Application](#application)

### ListConfigurationProfiles



```js
amazonaws_appconfig.ListConfigurationProfiles({
  "ApplicationId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ConfigurationProfiles](#configurationprofiles)

### CreateConfigurationProfile



```js
amazonaws_appconfig.CreateConfigurationProfile({
  "ApplicationId": "",
  "Name": "",
  "LocationUri": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * Description `string`: A description of the configuration profile.
  * LocationUri **required** `string`: A URI to locate the configuration. You can specify a Systems Manager (SSM) document, an SSM Parameter Store parameter, or an Amazon S3 object. For an SSM document, specify either the document name in the format <code>ssm-document://&lt;Document_name&gt;</code> or the Amazon Resource Name (ARN). For a parameter, specify either the parameter name in the format <code>ssm-parameter://&lt;Parameter_name&gt;</code> or the ARN. For an Amazon S3 object, specify the URI in the following format: <code>s3://&lt;bucket&gt;/&lt;objectKey&gt; </code>. Here is an example: s3://my-bucket/my-app/us-east-1/my-config.json
  * Name **required** `string`: A name for the configuration profile.
  * RetrievalRoleArn `string`: The ARN of an IAM role with permission to access the configuration at the specified LocationUri.
  * Tags `object`: Metadata to assign to the configuration profile. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
  * Validators `array`: A list of methods for validating the configuration.
    * items [Validator](#validator)

#### Output
*Output schema unknown*

### DeleteConfigurationProfile



```js
amazonaws_appconfig.DeleteConfigurationProfile({
  "ApplicationId": "",
  "ConfigurationProfileId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * ConfigurationProfileId **required** `string`

#### Output
*Output schema unknown*

### GetConfigurationProfile



```js
amazonaws_appconfig.GetConfigurationProfile({
  "ApplicationId": "",
  "ConfigurationProfileId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * ConfigurationProfileId **required** `string`

#### Output
* output [ConfigurationProfile](#configurationprofile)

### UpdateConfigurationProfile



```js
amazonaws_appconfig.UpdateConfigurationProfile({
  "ApplicationId": "",
  "ConfigurationProfileId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * ConfigurationProfileId **required** `string`
  * Description `string`: A description of the configuration profile.
  * Name `string`: The name of the configuration profile.
  * RetrievalRoleArn `string`: The ARN of an IAM role with permission to access the configuration at the specified LocationUri.
  * Validators `array`: A list of methods for validating the configuration.
    * items [Validator](#validator)

#### Output
* output [ConfigurationProfile](#configurationprofile)

### ListHostedConfigurationVersions



```js
amazonaws_appconfig.ListHostedConfigurationVersions({
  "ApplicationId": "",
  "ConfigurationProfileId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * ConfigurationProfileId **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [HostedConfigurationVersions](#hostedconfigurationversions)

### CreateHostedConfigurationVersion



```js
amazonaws_appconfig.CreateHostedConfigurationVersion({
  "ApplicationId": "",
  "ConfigurationProfileId": "",
  "Content-Type": "",
  "Content": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * ConfigurationProfileId **required** `string`
  * Description `string`
  * Content-Type **required** `string`
  * Latest-Version-Number `integer`
  * Content **required** `string`: The content of the configuration or the configuration data.

#### Output
*Output schema unknown*

### DeleteHostedConfigurationVersion



```js
amazonaws_appconfig.DeleteHostedConfigurationVersion({
  "ApplicationId": "",
  "ConfigurationProfileId": "",
  "VersionNumber": 0
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * ConfigurationProfileId **required** `string`
  * VersionNumber **required** `integer`

#### Output
*Output schema unknown*

### GetHostedConfigurationVersion



```js
amazonaws_appconfig.GetHostedConfigurationVersion({
  "ApplicationId": "",
  "ConfigurationProfileId": "",
  "VersionNumber": 0
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * ConfigurationProfileId **required** `string`
  * VersionNumber **required** `integer`

#### Output
* output [HostedConfigurationVersion](#hostedconfigurationversion)

### ValidateConfiguration



```js
amazonaws_appconfig.ValidateConfiguration({
  "ApplicationId": "",
  "ConfigurationProfileId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * ConfigurationProfileId **required** `string`
  * configurationVersion `string`

#### Output
*Output schema unknown*

### ListEnvironments



```js
amazonaws_appconfig.ListEnvironments({
  "ApplicationId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [Environments](#environments)

### CreateEnvironment



```js
amazonaws_appconfig.CreateEnvironment({
  "ApplicationId": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * Description `string`: A description of the environment.
  * Monitors `array`: Amazon CloudWatch alarms to monitor during the deployment process.
    * items [Monitor](#monitor)
  * Name **required** `string`: A name for the environment.
  * Tags `object`: Metadata to assign to the environment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.

#### Output
*Output schema unknown*

### DeleteEnvironment



```js
amazonaws_appconfig.DeleteEnvironment({
  "ApplicationId": "",
  "EnvironmentId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * EnvironmentId **required** `string`

#### Output
*Output schema unknown*

### GetEnvironment



```js
amazonaws_appconfig.GetEnvironment({
  "ApplicationId": "",
  "EnvironmentId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * EnvironmentId **required** `string`

#### Output
* output [Environment](#environment)

### UpdateEnvironment



```js
amazonaws_appconfig.UpdateEnvironment({
  "ApplicationId": "",
  "EnvironmentId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * EnvironmentId **required** `string`
  * Description `string`: A description of the environment.
  * Monitors `array`: Amazon CloudWatch alarms to monitor during the deployment process.
    * items [Monitor](#monitor)
  * Name `string`: The name of the environment.

#### Output
* output [Environment](#environment)

### ListDeployments



```js
amazonaws_appconfig.ListDeployments({
  "ApplicationId": "",
  "EnvironmentId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * EnvironmentId **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [Deployments](#deployments)

### StartDeployment



```js
amazonaws_appconfig.StartDeployment({
  "ApplicationId": "",
  "EnvironmentId": "",
  "DeploymentStrategyId": "",
  "ConfigurationProfileId": "",
  "ConfigurationVersion": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * EnvironmentId **required** `string`
  * ConfigurationProfileId **required** `string`: The configuration profile ID.
  * ConfigurationVersion **required** `string`: The configuration version to deploy.
  * DeploymentStrategyId **required** `string`: The deployment strategy ID.
  * Description `string`: A description of the deployment.
  * Tags `object`: Metadata to assign to the deployment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.

#### Output
*Output schema unknown*

### StopDeployment



```js
amazonaws_appconfig.StopDeployment({
  "ApplicationId": "",
  "EnvironmentId": "",
  "DeploymentNumber": 0
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * EnvironmentId **required** `string`
  * DeploymentNumber **required** `integer`

#### Output
*Output schema unknown*

### GetDeployment



```js
amazonaws_appconfig.GetDeployment({
  "ApplicationId": "",
  "EnvironmentId": "",
  "DeploymentNumber": 0
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** `string`
  * EnvironmentId **required** `string`
  * DeploymentNumber **required** `integer`

#### Output
* output [Deployment](#deployment)

### GetConfiguration



```js
amazonaws_appconfig.GetConfiguration({
  "Application": "",
  "Environment": "",
  "Configuration": ""
}, context)
```

#### Input
* input `object`
  * Application **required** `string`
  * Environment **required** `string`
  * Configuration **required** `string`
  * clientId `string`
  * clientConfigurationVersion `string`

#### Output
* output [Configuration](#configuration)

### DeleteDeploymentStrategy



```js
amazonaws_appconfig.DeleteDeploymentStrategy({
  "DeploymentStrategyId": ""
}, context)
```

#### Input
* input `object`
  * DeploymentStrategyId **required** `string`

#### Output
*Output schema unknown*

### ListDeploymentStrategies



```js
amazonaws_appconfig.ListDeploymentStrategies({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [DeploymentStrategies](#deploymentstrategies)

### CreateDeploymentStrategy



```js
amazonaws_appconfig.CreateDeploymentStrategy({
  "Name": "",
  "DeploymentDurationInMinutes": 0,
  "GrowthFactor": 0,
  "ReplicateTo": ""
}, context)
```

#### Input
* input `object`
  * DeploymentDurationInMinutes **required** `integer`: Total amount of time for a deployment to last.
  * Description `string`: A description of the deployment strategy.
  * FinalBakeTimeInMinutes `integer`: The amount of time AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic roll back.
  * GrowthFactor **required** `number`: The percentage of targets to receive a deployed configuration during each interval.
  * GrowthType `string` (values: LINEAR, EXPONENTIAL): <p>The algorithm used to define how percentage grows over time. AWS AppConfig supports the following growth types:</p> <p> <b>Linear</b>: For this type, AppConfig processes the deployment by dividing the total number of targets by the value specified for <code>Step percentage</code>. For example, a linear deployment that uses a <code>Step percentage</code> of 10 deploys the configuration to 10 percent of the hosts. After those deployments are complete, the system deploys the configuration to the next 10 percent. This continues until 100% of the targets have successfully received the configuration.</p> <p> <b>Exponential</b>: For this type, AppConfig processes the deployment exponentially using the following formula: <code>G*(2^N)</code>. In this formula, <code>G</code> is the growth factor specified by the user and <code>N</code> is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:</p> <p> <code>2*(2^0)</code> </p> <p> <code>2*(2^1)</code> </p> <p> <code>2*(2^2)</code> </p> <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.</p>
  * Name **required** `string`: A name for the deployment strategy.
  * ReplicateTo **required** `string` (values: NONE, SSM_DOCUMENT): Save the deployment strategy to a Systems Manager (SSM) document.
  * Tags `object`: Metadata to assign to the deployment strategy. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define.

#### Output
*Output schema unknown*

### GetDeploymentStrategy



```js
amazonaws_appconfig.GetDeploymentStrategy({
  "DeploymentStrategyId": ""
}, context)
```

#### Input
* input `object`
  * DeploymentStrategyId **required** `string`

#### Output
* output [DeploymentStrategy](#deploymentstrategy)

### UpdateDeploymentStrategy



```js
amazonaws_appconfig.UpdateDeploymentStrategy({
  "DeploymentStrategyId": ""
}, context)
```

#### Input
* input `object`
  * DeploymentStrategyId **required** `string`
  * DeploymentDurationInMinutes `integer`: Total amount of time for a deployment to last.
  * Description `string`: A description of the deployment strategy.
  * FinalBakeTimeInMinutes `integer`: The amount of time AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic roll back.
  * GrowthFactor `number`: The percentage of targets to receive a deployed configuration during each interval.
  * GrowthType `string` (values: LINEAR, EXPONENTIAL): <p>The algorithm used to define how percentage grows over time. AWS AppConfig supports the following growth types:</p> <p> <b>Linear</b>: For this type, AppConfig processes the deployment by increments of the growth factor evenly distributed over the deployment time. For example, a linear deployment that uses a growth factor of 20 initially makes the configuration available to 20 percent of the targets. After 1/5th of the deployment time has passed, the system updates the percentage to 40 percent. This continues until 100% of the targets are set to receive the deployed configuration.</p> <p> <b>Exponential</b>: For this type, AppConfig processes the deployment exponentially using the following formula: <code>G*(2^N)</code>. In this formula, <code>G</code> is the growth factor specified by the user and <code>N</code> is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:</p> <p> <code>2*(2^0)</code> </p> <p> <code>2*(2^1)</code> </p> <p> <code>2*(2^2)</code> </p> <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.</p>

#### Output
* output [DeploymentStrategy](#deploymentstrategy)

### ListTagsForResource



```js
amazonaws_appconfig.ListTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`

#### Output
* output [ResourceTags](#resourcetags)

### TagResource



```js
amazonaws_appconfig.TagResource({
  "ResourceArn": "",
  "Tags": {}
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * Tags **required** `object`: The key-value string map. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_appconfig.UntagResource({
  "ResourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*



## Definitions

### Application
* Application `object`
  * Description
  * Id
  * Name

### ApplicationList
* ApplicationList `array`
  * items [Application](#application)

### Applications
* Applications `object`
  * Items
    * items [Application](#application)
  * NextToken

### Arn
* Arn `string`

### BadRequestException


### Blob
* Blob `string`

### Configuration
* Configuration `object`
  * Content

### ConfigurationProfile
* ConfigurationProfile `object`
  * ApplicationId
  * Description
  * Id
  * LocationUri
  * Name
  * RetrievalRoleArn
  * Validators
    * items [Validator](#validator)

### ConfigurationProfileSummary
* ConfigurationProfileSummary `object`: A summary of a configuration profile.
  * ApplicationId
  * Id
  * LocationUri
  * Name
  * ValidatorTypes
    * items [ValidatorType](#validatortype)

### ConfigurationProfileSummaryList
* ConfigurationProfileSummaryList `array`
  * items [ConfigurationProfileSummary](#configurationprofilesummary)

### ConfigurationProfiles
* ConfigurationProfiles `object`
  * Items
    * items [ConfigurationProfileSummary](#configurationprofilesummary)
  * NextToken

### ConflictException


### CreateApplicationRequest
* CreateApplicationRequest `object`
  * Description
  * Name **required**
  * Tags

### CreateConfigurationProfileRequest
* CreateConfigurationProfileRequest `object`
  * Description
  * LocationUri **required**
  * Name **required**
  * RetrievalRoleArn
  * Tags
  * Validators
    * items [Validator](#validator)

### CreateDeploymentStrategyRequest
* CreateDeploymentStrategyRequest `object`
  * DeploymentDurationInMinutes **required**
  * Description
  * FinalBakeTimeInMinutes
  * GrowthFactor **required**
  * GrowthType
  * Name **required**
  * ReplicateTo **required**
  * Tags

### CreateEnvironmentRequest
* CreateEnvironmentRequest `object`
  * Description
  * Monitors
    * items [Monitor](#monitor)
  * Name **required**
  * Tags

### CreateHostedConfigurationVersionRequest
* CreateHostedConfigurationVersionRequest `object`
  * Content **required**

### DeleteApplicationRequest
* DeleteApplicationRequest `object`

### DeleteConfigurationProfileRequest
* DeleteConfigurationProfileRequest `object`

### DeleteDeploymentStrategyRequest
* DeleteDeploymentStrategyRequest `object`

### DeleteEnvironmentRequest
* DeleteEnvironmentRequest `object`

### DeleteHostedConfigurationVersionRequest
* DeleteHostedConfigurationVersionRequest `object`

### Deployment
* Deployment `object`
  * ApplicationId
  * CompletedAt
  * ConfigurationLocationUri
  * ConfigurationName
  * ConfigurationProfileId
  * ConfigurationVersion
  * DeploymentDurationInMinutes
  * DeploymentNumber
  * DeploymentStrategyId
  * Description
  * EnvironmentId
  * EventLog
    * items [DeploymentEvent](#deploymentevent)
  * FinalBakeTimeInMinutes
  * GrowthFactor
  * GrowthType
  * PercentageComplete
  * StartedAt
  * State

### DeploymentEvent
* DeploymentEvent `object`: An object that describes a deployment event.
  * Description
  * EventType
  * OccurredAt
  * TriggeredBy

### DeploymentEventType
* DeploymentEventType `string` (values: PERCENTAGE_UPDATED, ROLLBACK_STARTED, ROLLBACK_COMPLETED, BAKE_TIME_STARTED, DEPLOYMENT_STARTED, DEPLOYMENT_COMPLETED)

### DeploymentEvents
* DeploymentEvents `array`
  * items [DeploymentEvent](#deploymentevent)

### DeploymentList
* DeploymentList `array`
  * items [DeploymentSummary](#deploymentsummary)

### DeploymentState
* DeploymentState `string` (values: BAKING, VALIDATING, DEPLOYING, COMPLETE, ROLLING_BACK, ROLLED_BACK)

### DeploymentStrategies
* DeploymentStrategies `object`
  * Items
    * items [DeploymentStrategy](#deploymentstrategy)
  * NextToken

### DeploymentStrategy
* DeploymentStrategy `object`
  * DeploymentDurationInMinutes
  * Description
  * FinalBakeTimeInMinutes
  * GrowthFactor
  * GrowthType
  * Id
  * Name
  * ReplicateTo

### DeploymentStrategyId
* DeploymentStrategyId `string`

### DeploymentStrategyList
* DeploymentStrategyList `array`
  * items [DeploymentStrategy](#deploymentstrategy)

### DeploymentSummary
* DeploymentSummary `object`: Information about the deployment.
  * CompletedAt
  * ConfigurationName
  * ConfigurationVersion
  * DeploymentDurationInMinutes
  * DeploymentNumber
  * FinalBakeTimeInMinutes
  * GrowthFactor
  * GrowthType
  * PercentageComplete
  * StartedAt
  * State

### Deployments
* Deployments `object`
  * Items
    * items [DeploymentSummary](#deploymentsummary)
  * NextToken

### Description
* Description `string`

### Environment
* Environment `object`
  * ApplicationId
  * Description
  * Id
  * Monitors
    * items [Monitor](#monitor)
  * Name
  * State

### EnvironmentList
* EnvironmentList `array`
  * items [Environment](#environment)

### EnvironmentState
* EnvironmentState `string` (values: READY_FOR_DEPLOYMENT, DEPLOYING, ROLLING_BACK, ROLLED_BACK)

### Environments
* Environments `object`
  * Items
    * items [Environment](#environment)
  * NextToken

### GetApplicationRequest
* GetApplicationRequest `object`

### GetConfigurationProfileRequest
* GetConfigurationProfileRequest `object`

### GetConfigurationRequest
* GetConfigurationRequest `object`

### GetDeploymentRequest
* GetDeploymentRequest `object`

### GetDeploymentStrategyRequest
* GetDeploymentStrategyRequest `object`

### GetEnvironmentRequest
* GetEnvironmentRequest `object`

### GetHostedConfigurationVersionRequest
* GetHostedConfigurationVersionRequest `object`

### GrowthFactor
* GrowthFactor `number`

### GrowthType
* GrowthType `string` (values: LINEAR, EXPONENTIAL)

### HostedConfigurationVersion
* HostedConfigurationVersion `object`
  * Content

### HostedConfigurationVersionSummary
* HostedConfigurationVersionSummary `object`: Information about the configuration.
  * ApplicationId
  * ConfigurationProfileId
  * ContentType
  * Description
  * VersionNumber

### HostedConfigurationVersionSummaryList
* HostedConfigurationVersionSummaryList `array`
  * items [HostedConfigurationVersionSummary](#hostedconfigurationversionsummary)

### HostedConfigurationVersions
* HostedConfigurationVersions `object`
  * Items
    * items [HostedConfigurationVersionSummary](#hostedconfigurationversionsummary)
  * NextToken

### Id
* Id `string`

### Integer
* Integer `integer`

### InternalServerException


### Iso8601DateTime
* Iso8601DateTime `string`

### ListApplicationsRequest
* ListApplicationsRequest `object`

### ListConfigurationProfilesRequest
* ListConfigurationProfilesRequest `object`

### ListDeploymentStrategiesRequest
* ListDeploymentStrategiesRequest `object`

### ListDeploymentsRequest
* ListDeploymentsRequest `object`

### ListEnvironmentsRequest
* ListEnvironmentsRequest `object`

### ListHostedConfigurationVersionsRequest
* ListHostedConfigurationVersionsRequest `object`

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### MaxResults
* MaxResults `integer`

### MinutesBetween0And24Hours
* MinutesBetween0And24Hours `integer`

### Monitor
* Monitor `object`: Amazon CloudWatch alarms to monitor during the deployment process.
  * AlarmArn
  * AlarmRoleArn

### MonitorList
* MonitorList `array`
  * items [Monitor](#monitor)

### Name
* Name `string`

### NextToken
* NextToken `string`

### PayloadTooLargeException


### Percentage
* Percentage `number`

### ReplicateTo
* ReplicateTo `string` (values: NONE, SSM_DOCUMENT)

### ResourceNotFoundException


### ResourceTags
* ResourceTags `object`
  * Tags

### RoleArn
* RoleArn `string`

### ServiceQuotaExceededException


### StartDeploymentRequest
* StartDeploymentRequest `object`
  * ConfigurationProfileId **required**
  * ConfigurationVersion **required**
  * DeploymentStrategyId **required**
  * Description
  * Tags

### StopDeploymentRequest
* StopDeploymentRequest `object`

### String
* String `string`

### StringWithLengthBetween0And32768
* StringWithLengthBetween0And32768 `string`

### StringWithLengthBetween1And255
* StringWithLengthBetween1And255 `string`

### StringWithLengthBetween1And64
* StringWithLengthBetween1And64 `string`

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * Tags **required**

### TagValue
* TagValue `string`

### TriggeredBy
* TriggeredBy `string` (values: USER, APPCONFIG, CLOUDWATCH_ALARM, INTERNAL_ERROR)

### UntagResourceRequest
* UntagResourceRequest `object`

### UpdateApplicationRequest
* UpdateApplicationRequest `object`
  * Description
  * Name

### UpdateConfigurationProfileRequest
* UpdateConfigurationProfileRequest `object`
  * Description
  * Name
  * RetrievalRoleArn
  * Validators
    * items [Validator](#validator)

### UpdateDeploymentStrategyRequest
* UpdateDeploymentStrategyRequest `object`
  * DeploymentDurationInMinutes
  * Description
  * FinalBakeTimeInMinutes
  * GrowthFactor
  * GrowthType

### UpdateEnvironmentRequest
* UpdateEnvironmentRequest `object`
  * Description
  * Monitors
    * items [Monitor](#monitor)
  * Name

### Uri
* Uri `string`

### ValidateConfigurationRequest
* ValidateConfigurationRequest `object`

### Validator
* Validator `object`: A validator provides a syntactic or semantic check to ensure the configuration you want to deploy functions as intended. To validate your application configuration data, you provide a schema or a Lambda function that runs against the configuration. The configuration deployment or update can only proceed when the configuration data is valid.
  * Content **required**
  * Type **required**

### ValidatorList
* ValidatorList `array`
  * items [Validator](#validator)

### ValidatorType
* ValidatorType `string` (values: JSON_SCHEMA, LAMBDA)

### ValidatorTypeList
* ValidatorTypeList `array`
  * items [ValidatorType](#validatortype)

### Version
* Version `string`


