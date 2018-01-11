# @datafire/amazonaws_elasticbeanstalk

Client library for AWS Elastic Beanstalk

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_elasticbeanstalk
```
```js
let amazonaws_elasticbeanstalk = require('@datafire/amazonaws_elasticbeanstalk').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_elasticbeanstalk.AbortEnvironmentUpdate({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>AWS Elastic Beanstalk</fullname> <p>AWS Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable, fault-tolerant applications running on the Amazon Web Services cloud.</p> <p>For more information about this product, go to the <a href="http://aws.amazon.com/elasticbeanstalk/">AWS Elastic Beanstalk</a> details page. The location of the latest AWS Elastic Beanstalk WSDL is <a href="http://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl">http://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl</a>. To install the Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools that enable you to access the API, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> <p> <b>Endpoints</b> </p> <p>For a list of region-specific endpoints that AWS Elastic Beanstalk supports, go to <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region">Regions and Endpoints</a> in the <i>Amazon Web Services Glossary</i>.</p>

## Actions

### AbortEnvironmentUpdate



```js
amazonaws_elasticbeanstalk.AbortEnvironmentUpdate({}, context)
```

#### Input
* input `object`
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)

#### Output
*Output schema unknown*

### ApplyEnvironmentManagedAction



```js
amazonaws_elasticbeanstalk.ApplyEnvironmentManagedAction({
  "ActionId": ""
}, context)
```

#### Input
* input `object`
  * ActionId **required** [String](#string)
  * EnvironmentId [String](#string)
  * EnvironmentName [String](#string)

#### Output
* output [ApplyEnvironmentManagedActionResult](#applyenvironmentmanagedactionresult)

### CheckDNSAvailability



```js
amazonaws_elasticbeanstalk.CheckDNSAvailability({
  "CNAMEPrefix": ""
}, context)
```

#### Input
* input `object`
  * CNAMEPrefix **required** [DNSCnamePrefix](#dnscnameprefix)

#### Output
* output [CheckDNSAvailabilityResultMessage](#checkdnsavailabilityresultmessage)

### ComposeEnvironments



```js
amazonaws_elasticbeanstalk.ComposeEnvironments({}, context)
```

#### Input
* input `object`
  * ApplicationName [ApplicationName](#applicationname)
  * GroupName [GroupName](#groupname)
  * VersionLabels [VersionLabels](#versionlabels)

#### Output
* output [EnvironmentDescriptionsMessage](#environmentdescriptionsmessage)

### CreateApplication



```js
amazonaws_elasticbeanstalk.CreateApplication({
  "ApplicationName": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * Description [Description](#description)
  * ResourceLifecycleConfig [ApplicationResourceLifecycleConfig](#applicationresourcelifecycleconfig)

#### Output
* output [ApplicationDescriptionMessage](#applicationdescriptionmessage)

### CreateApplicationVersion



```js
amazonaws_elasticbeanstalk.CreateApplicationVersion({
  "ApplicationName": "",
  "VersionLabel": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * AutoCreateApplication [AutoCreateApplication](#autocreateapplication)
  * BuildConfiguration [BuildConfiguration](#buildconfiguration)
  * Description [Description](#description)
  * Process [ApplicationVersionProccess](#applicationversionproccess)
  * SourceBuildInformation [SourceBuildInformation](#sourcebuildinformation)
  * SourceBundle [S3Location](#s3location)
  * VersionLabel **required** [VersionLabel](#versionlabel)

#### Output
* output [ApplicationVersionDescriptionMessage](#applicationversiondescriptionmessage)

### CreateConfigurationTemplate



```js
amazonaws_elasticbeanstalk.CreateConfigurationTemplate({
  "ApplicationName": "",
  "TemplateName": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * Description [Description](#description)
  * EnvironmentId [EnvironmentId](#environmentid)
  * OptionSettings [ConfigurationOptionSettingsList](#configurationoptionsettingslist)
  * PlatformArn [PlatformArn](#platformarn)
  * SolutionStackName [SolutionStackName](#solutionstackname)
  * SourceConfiguration [SourceConfiguration](#sourceconfiguration)
  * TemplateName **required** [ConfigurationTemplateName](#configurationtemplatename)

#### Output
* output [ConfigurationSettingsDescription](#configurationsettingsdescription)

### CreateEnvironment



```js
amazonaws_elasticbeanstalk.CreateEnvironment({
  "ApplicationName": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CNAMEPrefix [DNSCnamePrefix](#dnscnameprefix)
  * Description [Description](#description)
  * EnvironmentName [EnvironmentName](#environmentname)
  * GroupName [GroupName](#groupname)
  * OptionSettings [ConfigurationOptionSettingsList](#configurationoptionsettingslist)
  * OptionsToRemove [OptionsSpecifierList](#optionsspecifierlist)
  * PlatformArn [PlatformArn](#platformarn)
  * SolutionStackName [SolutionStackName](#solutionstackname)
  * Tags [Tags](#tags)
  * TemplateName [ConfigurationTemplateName](#configurationtemplatename)
  * Tier [EnvironmentTier](#environmenttier)
  * VersionLabel [VersionLabel](#versionlabel)

#### Output
* output [EnvironmentDescription](#environmentdescription)

### CreatePlatformVersion



```js
amazonaws_elasticbeanstalk.CreatePlatformVersion({
  "PlatformName": "",
  "PlatformVersion": "",
  "PlatformDefinitionBundle": {}
}, context)
```

#### Input
* input `object`
  * EnvironmentName [EnvironmentName](#environmentname)
  * OptionSettings [ConfigurationOptionSettingsList](#configurationoptionsettingslist)
  * PlatformDefinitionBundle **required** [S3Location](#s3location)
  * PlatformName **required** [PlatformName](#platformname)
  * PlatformVersion **required** [PlatformVersion](#platformversion)

#### Output
* output [CreatePlatformVersionResult](#createplatformversionresult)

### CreateStorageLocation



```js
amazonaws_elasticbeanstalk.CreateStorageLocation({}, context)
```

#### Input
* input `object`

#### Output
* output [CreateStorageLocationResultMessage](#createstoragelocationresultmessage)

### DeleteApplication



```js
amazonaws_elasticbeanstalk.DeleteApplication({
  "ApplicationName": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * TerminateEnvByForce [TerminateEnvForce](#terminateenvforce)

#### Output
*Output schema unknown*

### DeleteApplicationVersion



```js
amazonaws_elasticbeanstalk.DeleteApplicationVersion({
  "ApplicationName": "",
  "VersionLabel": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * DeleteSourceBundle [DeleteSourceBundle](#deletesourcebundle)
  * VersionLabel **required** [VersionLabel](#versionlabel)

#### Output
*Output schema unknown*

### DeleteConfigurationTemplate



```js
amazonaws_elasticbeanstalk.DeleteConfigurationTemplate({
  "ApplicationName": "",
  "TemplateName": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * TemplateName **required** [ConfigurationTemplateName](#configurationtemplatename)

#### Output
*Output schema unknown*

### DeleteEnvironmentConfiguration



```js
amazonaws_elasticbeanstalk.DeleteEnvironmentConfiguration({
  "ApplicationName": "",
  "EnvironmentName": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * EnvironmentName **required** [EnvironmentName](#environmentname)

#### Output
*Output schema unknown*

### DeletePlatformVersion



```js
amazonaws_elasticbeanstalk.DeletePlatformVersion({}, context)
```

#### Input
* input `object`
  * PlatformArn [PlatformArn](#platformarn)

#### Output
* output [DeletePlatformVersionResult](#deleteplatformversionresult)

### DescribeApplicationVersions



```js
amazonaws_elasticbeanstalk.DescribeApplicationVersions({}, context)
```

#### Input
* input `object`
  * ApplicationName [ApplicationName](#applicationname)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [Token](#token)
  * VersionLabels [VersionLabelsList](#versionlabelslist)

#### Output
* output [ApplicationVersionDescriptionsMessage](#applicationversiondescriptionsmessage)

### DescribeApplications



```js
amazonaws_elasticbeanstalk.DescribeApplications({}, context)
```

#### Input
* input `object`
  * ApplicationNames [ApplicationNamesList](#applicationnameslist)

#### Output
* output [ApplicationDescriptionsMessage](#applicationdescriptionsmessage)

### DescribeConfigurationOptions



```js
amazonaws_elasticbeanstalk.DescribeConfigurationOptions({}, context)
```

#### Input
* input `object`
  * ApplicationName [ApplicationName](#applicationname)
  * EnvironmentName [EnvironmentName](#environmentname)
  * Options [OptionsSpecifierList](#optionsspecifierlist)
  * PlatformArn [PlatformArn](#platformarn)
  * SolutionStackName [SolutionStackName](#solutionstackname)
  * TemplateName [ConfigurationTemplateName](#configurationtemplatename)

#### Output
* output [ConfigurationOptionsDescription](#configurationoptionsdescription)

### DescribeConfigurationSettings



```js
amazonaws_elasticbeanstalk.DescribeConfigurationSettings({
  "ApplicationName": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * EnvironmentName [EnvironmentName](#environmentname)
  * TemplateName [ConfigurationTemplateName](#configurationtemplatename)

#### Output
* output [ConfigurationSettingsDescriptions](#configurationsettingsdescriptions)

### DescribeEnvironmentHealth



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentHealth({}, context)
```

#### Input
* input `object`
  * AttributeNames [EnvironmentHealthAttributes](#environmenthealthattributes)
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)

#### Output
* output [DescribeEnvironmentHealthResult](#describeenvironmenthealthresult)

### DescribeEnvironmentManagedActionHistory



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentManagedActionHistory({}, context)
```

#### Input
* input `object`
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)
  * MaxItems [Integer](#integer)
  * NextToken [String](#string)

#### Output
* output [DescribeEnvironmentManagedActionHistoryResult](#describeenvironmentmanagedactionhistoryresult)

### DescribeEnvironmentManagedActions



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentManagedActions({}, context)
```

#### Input
* input `object`
  * EnvironmentId [String](#string)
  * EnvironmentName [String](#string)
  * Status [ActionStatus](#actionstatus)

#### Output
* output [DescribeEnvironmentManagedActionsResult](#describeenvironmentmanagedactionsresult)

### DescribeEnvironmentResources



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentResources({}, context)
```

#### Input
* input `object`
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)

#### Output
* output [EnvironmentResourceDescriptionsMessage](#environmentresourcedescriptionsmessage)

### DescribeEnvironments



```js
amazonaws_elasticbeanstalk.DescribeEnvironments({}, context)
```

#### Input
* input `object`
  * ApplicationName [ApplicationName](#applicationname)
  * EnvironmentIds [EnvironmentIdList](#environmentidlist)
  * EnvironmentNames [EnvironmentNamesList](#environmentnameslist)
  * IncludeDeleted [IncludeDeleted](#includedeleted)
  * IncludedDeletedBackTo [IncludeDeletedBackTo](#includedeletedbackto)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [Token](#token)
  * VersionLabel [VersionLabel](#versionlabel)

#### Output
* output [EnvironmentDescriptionsMessage](#environmentdescriptionsmessage)

### DescribeEvents



```js
amazonaws_elasticbeanstalk.DescribeEvents({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * ApplicationName [ApplicationName](#applicationname)
  * EndTime [TimeFilterEnd](#timefilterend)
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [Token](#token)
  * PlatformArn [PlatformArn](#platformarn)
  * RequestId [RequestId](#requestid)
  * Severity [EventSeverity](#eventseverity)
  * StartTime [TimeFilterStart](#timefilterstart)
  * TemplateName [ConfigurationTemplateName](#configurationtemplatename)
  * VersionLabel [VersionLabel](#versionlabel)

#### Output
* output [EventDescriptionsMessage](#eventdescriptionsmessage)

### DescribeInstancesHealth



```js
amazonaws_elasticbeanstalk.DescribeInstancesHealth({}, context)
```

#### Input
* input `object`
  * AttributeNames [InstancesHealthAttributes](#instanceshealthattributes)
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribeInstancesHealthResult](#describeinstanceshealthresult)

### DescribePlatformVersion



```js
amazonaws_elasticbeanstalk.DescribePlatformVersion({}, context)
```

#### Input
* input `object`
  * PlatformArn [PlatformArn](#platformarn)

#### Output
* output [DescribePlatformVersionResult](#describeplatformversionresult)

### ListAvailableSolutionStacks



```js
amazonaws_elasticbeanstalk.ListAvailableSolutionStacks({}, context)
```

#### Input
* input `object`

#### Output
* output [ListAvailableSolutionStacksResultMessage](#listavailablesolutionstacksresultmessage)

### ListPlatformVersions



```js
amazonaws_elasticbeanstalk.ListPlatformVersions({}, context)
```

#### Input
* input `object`
  * Filters [PlatformFilters](#platformfilters)
  * MaxRecords [PlatformMaxRecords](#platformmaxrecords)
  * NextToken [Token](#token)

#### Output
* output [ListPlatformVersionsResult](#listplatformversionsresult)

### ListTagsForResource



```js
amazonaws_elasticbeanstalk.ListTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** [ResourceArn](#resourcearn)

#### Output
* output [ResourceTagsDescriptionMessage](#resourcetagsdescriptionmessage)

### RebuildEnvironment



```js
amazonaws_elasticbeanstalk.RebuildEnvironment({}, context)
```

#### Input
* input `object`
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)

#### Output
*Output schema unknown*

### RequestEnvironmentInfo



```js
amazonaws_elasticbeanstalk.RequestEnvironmentInfo({
  "InfoType": ""
}, context)
```

#### Input
* input `object`
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)
  * InfoType **required** [EnvironmentInfoType](#environmentinfotype)

#### Output
*Output schema unknown*

### RestartAppServer



```js
amazonaws_elasticbeanstalk.RestartAppServer({}, context)
```

#### Input
* input `object`
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)

#### Output
*Output schema unknown*

### RetrieveEnvironmentInfo



```js
amazonaws_elasticbeanstalk.RetrieveEnvironmentInfo({
  "InfoType": ""
}, context)
```

#### Input
* input `object`
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)
  * InfoType **required** [EnvironmentInfoType](#environmentinfotype)

#### Output
* output [RetrieveEnvironmentInfoResultMessage](#retrieveenvironmentinforesultmessage)

### SwapEnvironmentCNAMEs



```js
amazonaws_elasticbeanstalk.SwapEnvironmentCNAMEs({}, context)
```

#### Input
* input `object`
  * DestinationEnvironmentId [EnvironmentId](#environmentid)
  * DestinationEnvironmentName [EnvironmentName](#environmentname)
  * SourceEnvironmentId [EnvironmentId](#environmentid)
  * SourceEnvironmentName [EnvironmentName](#environmentname)

#### Output
*Output schema unknown*

### TerminateEnvironment



```js
amazonaws_elasticbeanstalk.TerminateEnvironment({}, context)
```

#### Input
* input `object`
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)
  * ForceTerminate [ForceTerminate](#forceterminate)
  * TerminateResources [TerminateEnvironmentResources](#terminateenvironmentresources)

#### Output
* output [EnvironmentDescription](#environmentdescription)

### UpdateApplication



```js
amazonaws_elasticbeanstalk.UpdateApplication({
  "ApplicationName": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * Description [Description](#description)

#### Output
* output [ApplicationDescriptionMessage](#applicationdescriptionmessage)

### UpdateApplicationResourceLifecycle



```js
amazonaws_elasticbeanstalk.UpdateApplicationResourceLifecycle({
  "ApplicationName": "",
  "ResourceLifecycleConfig": {}
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * ResourceLifecycleConfig **required** [ApplicationResourceLifecycleConfig](#applicationresourcelifecycleconfig)

#### Output
* output [ApplicationResourceLifecycleDescriptionMessage](#applicationresourcelifecycledescriptionmessage)

### UpdateApplicationVersion



```js
amazonaws_elasticbeanstalk.UpdateApplicationVersion({
  "ApplicationName": "",
  "VersionLabel": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * Description [Description](#description)
  * VersionLabel **required** [VersionLabel](#versionlabel)

#### Output
* output [ApplicationVersionDescriptionMessage](#applicationversiondescriptionmessage)

### UpdateConfigurationTemplate



```js
amazonaws_elasticbeanstalk.UpdateConfigurationTemplate({
  "ApplicationName": "",
  "TemplateName": ""
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * Description [Description](#description)
  * OptionSettings [ConfigurationOptionSettingsList](#configurationoptionsettingslist)
  * OptionsToRemove [OptionsSpecifierList](#optionsspecifierlist)
  * TemplateName **required** [ConfigurationTemplateName](#configurationtemplatename)

#### Output
* output [ConfigurationSettingsDescription](#configurationsettingsdescription)

### UpdateEnvironment



```js
amazonaws_elasticbeanstalk.UpdateEnvironment({}, context)
```

#### Input
* input `object`
  * ApplicationName [ApplicationName](#applicationname)
  * Description [Description](#description)
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)
  * GroupName [GroupName](#groupname)
  * OptionSettings [ConfigurationOptionSettingsList](#configurationoptionsettingslist)
  * OptionsToRemove [OptionsSpecifierList](#optionsspecifierlist)
  * PlatformArn [PlatformArn](#platformarn)
  * SolutionStackName [SolutionStackName](#solutionstackname)
  * TemplateName [ConfigurationTemplateName](#configurationtemplatename)
  * Tier [EnvironmentTier](#environmenttier)
  * VersionLabel [VersionLabel](#versionlabel)

#### Output
* output [EnvironmentDescription](#environmentdescription)

### UpdateTagsForResource



```js
amazonaws_elasticbeanstalk.UpdateTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** [ResourceArn](#resourcearn)
  * TagsToAdd [TagList](#taglist)
  * TagsToRemove [TagKeyList](#tagkeylist)

#### Output
*Output schema unknown*

### ValidateConfigurationSettings



```js
amazonaws_elasticbeanstalk.ValidateConfigurationSettings({
  "ApplicationName": "",
  "OptionSettings": []
}, context)
```

#### Input
* input `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * EnvironmentName [EnvironmentName](#environmentname)
  * OptionSettings **required** [ConfigurationOptionSettingsList](#configurationoptionsettingslist)
  * TemplateName [ConfigurationTemplateName](#configurationtemplatename)

#### Output
* output [ConfigurationSettingsValidationMessages](#configurationsettingsvalidationmessages)



## Definitions

### ARN
* ARN `string`

### AbortEnvironmentUpdateMessage
* AbortEnvironmentUpdateMessage `object`: <p/>
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)

### AbortableOperationInProgress
* AbortableOperationInProgress `boolean`

### ActionHistoryStatus
* ActionHistoryStatus `string` (values: Completed, Failed, Unknown)

### ActionStatus
* ActionStatus `string` (values: Scheduled, Pending, Running, Unknown)

### ActionType
* ActionType `string` (values: InstanceRefresh, PlatformUpdate, Unknown)

### ApplicationDescription
* ApplicationDescription `object`: Describes the properties of an application.
  * ApplicationName [ApplicationName](#applicationname)
  * ConfigurationTemplates [ConfigurationTemplateNamesList](#configurationtemplatenameslist)
  * DateCreated [CreationDate](#creationdate)
  * DateUpdated [UpdateDate](#updatedate)
  * Description [Description](#description)
  * ResourceLifecycleConfig [ApplicationResourceLifecycleConfig](#applicationresourcelifecycleconfig)
  * Versions [VersionLabelsList](#versionlabelslist)

### ApplicationDescriptionList
* ApplicationDescriptionList `array`
  * items [ApplicationDescription](#applicationdescription)

### ApplicationDescriptionMessage
* ApplicationDescriptionMessage `object`: Result message containing a single description of an application.
  * Application [ApplicationDescription](#applicationdescription)

### ApplicationDescriptionsMessage
* ApplicationDescriptionsMessage `object`: Result message containing a list of application descriptions.
  * Applications [ApplicationDescriptionList](#applicationdescriptionlist)

### ApplicationMetrics
* ApplicationMetrics `object`: Application request metrics for an AWS Elastic Beanstalk environment.
  * Duration [NullableInteger](#nullableinteger)
  * Latency [Latency](#latency)
  * RequestCount [RequestCount](#requestcount)
  * StatusCodes [StatusCodes](#statuscodes)

### ApplicationName
* ApplicationName `string`

### ApplicationNamesList
* ApplicationNamesList `array`
  * items [ApplicationName](#applicationname)

### ApplicationResourceLifecycleConfig
* ApplicationResourceLifecycleConfig `object`: The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.
  * ServiceRole [String](#string)
  * VersionLifecycleConfig [ApplicationVersionLifecycleConfig](#applicationversionlifecycleconfig)

### ApplicationResourceLifecycleDescriptionMessage
* ApplicationResourceLifecycleDescriptionMessage `object`
  * ApplicationName [ApplicationName](#applicationname)
  * ResourceLifecycleConfig [ApplicationResourceLifecycleConfig](#applicationresourcelifecycleconfig)

### ApplicationVersionDescription
* ApplicationVersionDescription `object`: Describes the properties of an application version.
  * ApplicationName [ApplicationName](#applicationname)
  * BuildArn [String](#string)
  * DateCreated [CreationDate](#creationdate)
  * DateUpdated [UpdateDate](#updatedate)
  * Description [Description](#description)
  * SourceBuildInformation [SourceBuildInformation](#sourcebuildinformation)
  * SourceBundle [S3Location](#s3location)
  * Status [ApplicationVersionStatus](#applicationversionstatus)
  * VersionLabel [VersionLabel](#versionlabel)

### ApplicationVersionDescriptionList
* ApplicationVersionDescriptionList `array`
  * items [ApplicationVersionDescription](#applicationversiondescription)

### ApplicationVersionDescriptionMessage
* ApplicationVersionDescriptionMessage `object`: Result message wrapping a single description of an application version.
  * ApplicationVersion [ApplicationVersionDescription](#applicationversiondescription)

### ApplicationVersionDescriptionsMessage
* ApplicationVersionDescriptionsMessage `object`: Result message wrapping a list of application version descriptions.
  * ApplicationVersions [ApplicationVersionDescriptionList](#applicationversiondescriptionlist)
  * NextToken [Token](#token)

### ApplicationVersionLifecycleConfig
* ApplicationVersionLifecycleConfig `object`: <p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p>
  * MaxAgeRule [MaxAgeRule](#maxagerule)
  * MaxCountRule [MaxCountRule](#maxcountrule)

### ApplicationVersionProccess
* ApplicationVersionProccess `boolean`

### ApplicationVersionStatus
* ApplicationVersionStatus `string` (values: Processed, Unprocessed, Failed, Processing, Building)

### ApplyEnvironmentManagedActionRequest
* ApplyEnvironmentManagedActionRequest `object`: Request to execute a scheduled managed action immediately.
  * ActionId **required** [String](#string)
  * EnvironmentId [String](#string)
  * EnvironmentName [String](#string)

### ApplyEnvironmentManagedActionResult
* ApplyEnvironmentManagedActionResult `object`: The result message containing information about the managed action.
  * ActionDescription [String](#string)
  * ActionId [String](#string)
  * ActionType [ActionType](#actiontype)
  * Status [String](#string)

### AutoCreateApplication
* AutoCreateApplication `boolean`

### AutoScalingGroup
* AutoScalingGroup `object`: Describes an Auto Scaling launch configuration.
  * Name [ResourceId](#resourceid)

### AutoScalingGroupList
* AutoScalingGroupList `array`
  * items [AutoScalingGroup](#autoscalinggroup)

### AvailableSolutionStackDetailsList
* AvailableSolutionStackDetailsList `array`
  * items [SolutionStackDescription](#solutionstackdescription)

### AvailableSolutionStackNamesList
* AvailableSolutionStackNamesList `array`
  * items [SolutionStackName](#solutionstackname)

### BoxedBoolean
* BoxedBoolean `boolean`

### BoxedInt
* BoxedInt `integer`

### BuildConfiguration
* BuildConfiguration `object`: Settings for an AWS CodeBuild build.
  * ArtifactName [String](#string)
  * CodeBuildServiceRole **required** [NonEmptyString](#nonemptystring)
  * ComputeType [ComputeType](#computetype)
  * Image **required** [NonEmptyString](#nonemptystring)
  * TimeoutInMinutes [BoxedInt](#boxedint)

### Builder
* Builder `object`: The builder used to build the custom platform.
  * ARN [ARN](#arn)

### CPUUtilization
* CPUUtilization `object`: CPU utilization metrics for an instance.
  * IOWait [NullableDouble](#nullabledouble)
  * IRQ [NullableDouble](#nullabledouble)
  * Idle [NullableDouble](#nullabledouble)
  * Nice [NullableDouble](#nullabledouble)
  * SoftIRQ [NullableDouble](#nullabledouble)
  * System [NullableDouble](#nullabledouble)
  * User [NullableDouble](#nullabledouble)

### Cause
* Cause `string`

### Causes
* Causes `array`
  * items [Cause](#cause)

### CheckDNSAvailabilityMessage
* CheckDNSAvailabilityMessage `object`: Results message indicating whether a CNAME is available.
  * CNAMEPrefix **required** [DNSCnamePrefix](#dnscnameprefix)

### CheckDNSAvailabilityResultMessage
* CheckDNSAvailabilityResultMessage `object`: Indicates if the specified CNAME is available.
  * Available [CnameAvailability](#cnameavailability)
  * FullyQualifiedCNAME [DNSCname](#dnscname)

### CnameAvailability
* CnameAvailability `boolean`

### CodeBuildNotInServiceRegionException
* CodeBuildNotInServiceRegionException `object`: AWS CodeBuild is not available in the specified region.

### ComposeEnvironmentsMessage
* ComposeEnvironmentsMessage `object`: Request to create or update a group of environments.
  * ApplicationName [ApplicationName](#applicationname)
  * GroupName [GroupName](#groupname)
  * VersionLabels [VersionLabels](#versionlabels)

### ComputeType
* ComputeType `string` (values: BUILD_GENERAL1_SMALL, BUILD_GENERAL1_MEDIUM, BUILD_GENERAL1_LARGE)

### ConfigurationDeploymentStatus
* ConfigurationDeploymentStatus `string` (values: deployed, pending, failed)

### ConfigurationOptionDefaultValue
* ConfigurationOptionDefaultValue `string`

### ConfigurationOptionDescription
* ConfigurationOptionDescription `object`: Describes the possible values for a configuration option.
  * ChangeSeverity [ConfigurationOptionSeverity](#configurationoptionseverity)
  * DefaultValue [ConfigurationOptionDefaultValue](#configurationoptiondefaultvalue)
  * MaxLength [OptionRestrictionMaxLength](#optionrestrictionmaxlength)
  * MaxValue [OptionRestrictionMaxValue](#optionrestrictionmaxvalue)
  * MinValue [OptionRestrictionMinValue](#optionrestrictionminvalue)
  * Name [ConfigurationOptionName](#configurationoptionname)
  * Namespace [OptionNamespace](#optionnamespace)
  * Regex [OptionRestrictionRegex](#optionrestrictionregex)
  * UserDefined [UserDefinedOption](#userdefinedoption)
  * ValueOptions [ConfigurationOptionPossibleValues](#configurationoptionpossiblevalues)
  * ValueType [ConfigurationOptionValueType](#configurationoptionvaluetype)

### ConfigurationOptionDescriptionsList
* ConfigurationOptionDescriptionsList `array`
  * items [ConfigurationOptionDescription](#configurationoptiondescription)

### ConfigurationOptionName
* ConfigurationOptionName `string`

### ConfigurationOptionPossibleValue
* ConfigurationOptionPossibleValue `string`

### ConfigurationOptionPossibleValues
* ConfigurationOptionPossibleValues `array`
  * items [ConfigurationOptionPossibleValue](#configurationoptionpossiblevalue)

### ConfigurationOptionSetting
* ConfigurationOptionSetting `object`:  A specification identifying an individual configuration option along with its current value. For a list of possible option values, go to <a href="http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>. 
  * Namespace [OptionNamespace](#optionnamespace)
  * OptionName [ConfigurationOptionName](#configurationoptionname)
  * ResourceName [ResourceName](#resourcename)
  * Value [ConfigurationOptionValue](#configurationoptionvalue)

### ConfigurationOptionSettingsList
* ConfigurationOptionSettingsList `array`
  * items [ConfigurationOptionSetting](#configurationoptionsetting)

### ConfigurationOptionSeverity
* ConfigurationOptionSeverity `string`

### ConfigurationOptionValue
* ConfigurationOptionValue `string`

### ConfigurationOptionValueType
* ConfigurationOptionValueType `string` (values: Scalar, List)

### ConfigurationOptionsDescription
* ConfigurationOptionsDescription `object`: Describes the settings for a specified configuration set.
  * Options [ConfigurationOptionDescriptionsList](#configurationoptiondescriptionslist)
  * PlatformArn [PlatformArn](#platformarn)
  * SolutionStackName [SolutionStackName](#solutionstackname)

### ConfigurationSettingsDescription
* ConfigurationSettingsDescription `object`: Describes the settings for a configuration set.
  * ApplicationName [ApplicationName](#applicationname)
  * DateCreated [CreationDate](#creationdate)
  * DateUpdated [UpdateDate](#updatedate)
  * DeploymentStatus [ConfigurationDeploymentStatus](#configurationdeploymentstatus)
  * Description [Description](#description)
  * EnvironmentName [EnvironmentName](#environmentname)
  * OptionSettings [ConfigurationOptionSettingsList](#configurationoptionsettingslist)
  * PlatformArn [PlatformArn](#platformarn)
  * SolutionStackName [SolutionStackName](#solutionstackname)
  * TemplateName [ConfigurationTemplateName](#configurationtemplatename)

### ConfigurationSettingsDescriptionList
* ConfigurationSettingsDescriptionList `array`
  * items [ConfigurationSettingsDescription](#configurationsettingsdescription)

### ConfigurationSettingsDescriptions
* ConfigurationSettingsDescriptions `object`: The results from a request to change the configuration settings of an environment.
  * ConfigurationSettings [ConfigurationSettingsDescriptionList](#configurationsettingsdescriptionlist)

### ConfigurationSettingsValidationMessages
* ConfigurationSettingsValidationMessages `object`: Provides a list of validation messages.
  * Messages [ValidationMessagesList](#validationmessageslist)

### ConfigurationTemplateName
* ConfigurationTemplateName `string`

### ConfigurationTemplateNamesList
* ConfigurationTemplateNamesList `array`
  * items [ConfigurationTemplateName](#configurationtemplatename)

### CreateApplicationMessage
* CreateApplicationMessage `object`: Request to create an application.
  * ApplicationName **required** [ApplicationName](#applicationname)
  * Description [Description](#description)
  * ResourceLifecycleConfig [ApplicationResourceLifecycleConfig](#applicationresourcelifecycleconfig)

### CreateApplicationVersionMessage
* CreateApplicationVersionMessage `object`: <p/>
  * ApplicationName **required** [ApplicationName](#applicationname)
  * AutoCreateApplication [AutoCreateApplication](#autocreateapplication)
  * BuildConfiguration [BuildConfiguration](#buildconfiguration)
  * Description [Description](#description)
  * Process [ApplicationVersionProccess](#applicationversionproccess)
  * SourceBuildInformation [SourceBuildInformation](#sourcebuildinformation)
  * SourceBundle [S3Location](#s3location)
  * VersionLabel **required** [VersionLabel](#versionlabel)

### CreateConfigurationTemplateMessage
* CreateConfigurationTemplateMessage `object`: Request to create a configuration template.
  * ApplicationName **required** [ApplicationName](#applicationname)
  * Description [Description](#description)
  * EnvironmentId [EnvironmentId](#environmentid)
  * OptionSettings [ConfigurationOptionSettingsList](#configurationoptionsettingslist)
  * PlatformArn [PlatformArn](#platformarn)
  * SolutionStackName [SolutionStackName](#solutionstackname)
  * SourceConfiguration [SourceConfiguration](#sourceconfiguration)
  * TemplateName **required** [ConfigurationTemplateName](#configurationtemplatename)

### CreateEnvironmentMessage
* CreateEnvironmentMessage `object`: <p/>
  * ApplicationName **required** [ApplicationName](#applicationname)
  * CNAMEPrefix [DNSCnamePrefix](#dnscnameprefix)
  * Description [Description](#description)
  * EnvironmentName [EnvironmentName](#environmentname)
  * GroupName [GroupName](#groupname)
  * OptionSettings [ConfigurationOptionSettingsList](#configurationoptionsettingslist)
  * OptionsToRemove [OptionsSpecifierList](#optionsspecifierlist)
  * PlatformArn [PlatformArn](#platformarn)
  * SolutionStackName [SolutionStackName](#solutionstackname)
  * Tags [Tags](#tags)
  * TemplateName [ConfigurationTemplateName](#configurationtemplatename)
  * Tier [EnvironmentTier](#environmenttier)
  * VersionLabel [VersionLabel](#versionlabel)

### CreatePlatformVersionRequest
* CreatePlatformVersionRequest `object`: Request to create a new platform version.
  * EnvironmentName [EnvironmentName](#environmentname)
  * OptionSettings [ConfigurationOptionSettingsList](#configurationoptionsettingslist)
  * PlatformDefinitionBundle **required** [S3Location](#s3location)
  * PlatformName **required** [PlatformName](#platformname)
  * PlatformVersion **required** [PlatformVersion](#platformversion)

### CreatePlatformVersionResult
* CreatePlatformVersionResult `object`
  * Builder [Builder](#builder)
  * PlatformSummary [PlatformSummary](#platformsummary)

### CreateStorageLocationResultMessage
* CreateStorageLocationResultMessage `object`: Results of a <a>CreateStorageLocationResult</a> call.
  * S3Bucket [S3Bucket](#s3bucket)

### CreationDate
* CreationDate `string`

### CustomAmi
* CustomAmi `object`: A custom AMI available to platforms.
  * ImageId [ImageId](#imageid)
  * VirtualizationType [VirtualizationType](#virtualizationtype)

### CustomAmiList
* CustomAmiList `array`
  * items [CustomAmi](#customami)

### DNSCname
* DNSCname `string`

### DNSCnamePrefix
* DNSCnamePrefix `string`

### DeleteApplicationMessage
* DeleteApplicationMessage `object`: Request to delete an application.
  * ApplicationName **required** [ApplicationName](#applicationname)
  * TerminateEnvByForce [TerminateEnvForce](#terminateenvforce)

### DeleteApplicationVersionMessage
* DeleteApplicationVersionMessage `object`: Request to delete an application version.
  * ApplicationName **required** [ApplicationName](#applicationname)
  * DeleteSourceBundle [DeleteSourceBundle](#deletesourcebundle)
  * VersionLabel **required** [VersionLabel](#versionlabel)

### DeleteConfigurationTemplateMessage
* DeleteConfigurationTemplateMessage `object`: Request to delete a configuration template.
  * ApplicationName **required** [ApplicationName](#applicationname)
  * TemplateName **required** [ConfigurationTemplateName](#configurationtemplatename)

### DeleteEnvironmentConfigurationMessage
* DeleteEnvironmentConfigurationMessage `object`: Request to delete a draft environment configuration.
  * ApplicationName **required** [ApplicationName](#applicationname)
  * EnvironmentName **required** [EnvironmentName](#environmentname)

### DeletePlatformVersionRequest
* DeletePlatformVersionRequest `object`
  * PlatformArn [PlatformArn](#platformarn)

### DeletePlatformVersionResult
* DeletePlatformVersionResult `object`
  * PlatformSummary [PlatformSummary](#platformsummary)

### DeleteSourceBundle
* DeleteSourceBundle `boolean`

### Deployment
* Deployment `object`: Information about an application version deployment.
  * DeploymentId [NullableLong](#nullablelong)
  * DeploymentTime [DeploymentTimestamp](#deploymenttimestamp)
  * Status [String](#string)
  * VersionLabel [String](#string)

### DeploymentTimestamp
* DeploymentTimestamp `string`

### DescribeApplicationVersionsMessage
* DescribeApplicationVersionsMessage `object`: Request to describe application versions.
  * ApplicationName [ApplicationName](#applicationname)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [Token](#token)
  * VersionLabels [VersionLabelsList](#versionlabelslist)

### DescribeApplicationsMessage
* DescribeApplicationsMessage `object`: Request to describe one or more applications.
  * ApplicationNames [ApplicationNamesList](#applicationnameslist)

### DescribeConfigurationOptionsMessage
* DescribeConfigurationOptionsMessage `object`: Result message containing a list of application version descriptions.
  * ApplicationName [ApplicationName](#applicationname)
  * EnvironmentName [EnvironmentName](#environmentname)
  * Options [OptionsSpecifierList](#optionsspecifierlist)
  * PlatformArn [PlatformArn](#platformarn)
  * SolutionStackName [SolutionStackName](#solutionstackname)
  * TemplateName [ConfigurationTemplateName](#configurationtemplatename)

### DescribeConfigurationSettingsMessage
* DescribeConfigurationSettingsMessage `object`: Result message containing all of the configuration settings for a specified solution stack or configuration template.
  * ApplicationName **required** [ApplicationName](#applicationname)
  * EnvironmentName [EnvironmentName](#environmentname)
  * TemplateName [ConfigurationTemplateName](#configurationtemplatename)

### DescribeEnvironmentHealthRequest
* DescribeEnvironmentHealthRequest `object`: See the example below to learn how to create a request body.
  * AttributeNames [EnvironmentHealthAttributes](#environmenthealthattributes)
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)

### DescribeEnvironmentHealthResult
* DescribeEnvironmentHealthResult `object`: Health details for an AWS Elastic Beanstalk environment.
  * ApplicationMetrics [ApplicationMetrics](#applicationmetrics)
  * Causes [Causes](#causes)
  * Color [String](#string)
  * EnvironmentName [EnvironmentName](#environmentname)
  * HealthStatus [String](#string)
  * InstancesHealth [InstanceHealthSummary](#instancehealthsummary)
  * RefreshedAt [RefreshedAt](#refreshedat)
  * Status [EnvironmentHealth](#environmenthealth)

### DescribeEnvironmentManagedActionHistoryRequest
* DescribeEnvironmentManagedActionHistoryRequest `object`: Request to list completed and failed managed actions.
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)
  * MaxItems [Integer](#integer)
  * NextToken [String](#string)

### DescribeEnvironmentManagedActionHistoryResult
* DescribeEnvironmentManagedActionHistoryResult `object`: A result message containing a list of completed and failed managed actions.
  * ManagedActionHistoryItems [ManagedActionHistoryItems](#managedactionhistoryitems)
  * NextToken [String](#string)

### DescribeEnvironmentManagedActionsRequest
* DescribeEnvironmentManagedActionsRequest `object`: Request to list an environment's upcoming and in-progress managed actions.
  * EnvironmentId [String](#string)
  * EnvironmentName [String](#string)
  * Status [ActionStatus](#actionstatus)

### DescribeEnvironmentManagedActionsResult
* DescribeEnvironmentManagedActionsResult `object`: The result message containing a list of managed actions.
  * ManagedActions [ManagedActions](#managedactions)

### DescribeEnvironmentResourcesMessage
* DescribeEnvironmentResourcesMessage `object`: Request to describe the resources in an environment.
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)

### DescribeEnvironmentsMessage
* DescribeEnvironmentsMessage `object`: Request to describe one or more environments.
  * ApplicationName [ApplicationName](#applicationname)
  * EnvironmentIds [EnvironmentIdList](#environmentidlist)
  * EnvironmentNames [EnvironmentNamesList](#environmentnameslist)
  * IncludeDeleted [IncludeDeleted](#includedeleted)
  * IncludedDeletedBackTo [IncludeDeletedBackTo](#includedeletedbackto)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [Token](#token)
  * VersionLabel [VersionLabel](#versionlabel)

### DescribeEventsMessage
* DescribeEventsMessage `object`: Request to retrieve a list of events for an environment.
  * ApplicationName [ApplicationName](#applicationname)
  * EndTime [TimeFilterEnd](#timefilterend)
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [Token](#token)
  * PlatformArn [PlatformArn](#platformarn)
  * RequestId [RequestId](#requestid)
  * Severity [EventSeverity](#eventseverity)
  * StartTime [TimeFilterStart](#timefilterstart)
  * TemplateName [ConfigurationTemplateName](#configurationtemplatename)
  * VersionLabel [VersionLabel](#versionlabel)

### DescribeInstancesHealthRequest
* DescribeInstancesHealthRequest `object`: Parameters for a call to <code>DescribeInstancesHealth</code>.
  * AttributeNames [InstancesHealthAttributes](#instanceshealthattributes)
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)
  * NextToken [NextToken](#nexttoken)

### DescribeInstancesHealthResult
* DescribeInstancesHealthResult `object`: Detailed health information about the Amazon EC2 instances in an AWS Elastic Beanstalk environment.
  * InstanceHealthList [InstanceHealthList](#instancehealthlist)
  * NextToken [NextToken](#nexttoken)
  * RefreshedAt [RefreshedAt](#refreshedat)

### DescribePlatformVersionRequest
* DescribePlatformVersionRequest `object`
  * PlatformArn [PlatformArn](#platformarn)

### DescribePlatformVersionResult
* DescribePlatformVersionResult `object`
  * PlatformDescription [PlatformDescription](#platformdescription)

### Description
* Description `string`

### Ec2InstanceId
* Ec2InstanceId `string`

### ElasticBeanstalkServiceException
* ElasticBeanstalkServiceException `object`: A generic service exception has occurred.
  * message [ExceptionMessage](#exceptionmessage)

### EndpointURL
* EndpointURL `string`

### EnvironmentArn
* EnvironmentArn `string`

### EnvironmentDescription
* EnvironmentDescription `object`: Describes the properties of an environment.
  * AbortableOperationInProgress [AbortableOperationInProgress](#abortableoperationinprogress)
  * ApplicationName [ApplicationName](#applicationname)
  * CNAME [DNSCname](#dnscname)
  * DateCreated [CreationDate](#creationdate)
  * DateUpdated [UpdateDate](#updatedate)
  * Description [Description](#description)
  * EndpointURL [EndpointURL](#endpointurl)
  * EnvironmentArn [EnvironmentArn](#environmentarn)
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentLinks [EnvironmentLinks](#environmentlinks)
  * EnvironmentName [EnvironmentName](#environmentname)
  * Health [EnvironmentHealth](#environmenthealth)
  * HealthStatus [EnvironmentHealthStatus](#environmenthealthstatus)
  * PlatformArn [PlatformArn](#platformarn)
  * Resources [EnvironmentResourcesDescription](#environmentresourcesdescription)
  * SolutionStackName [SolutionStackName](#solutionstackname)
  * Status [EnvironmentStatus](#environmentstatus)
  * TemplateName [ConfigurationTemplateName](#configurationtemplatename)
  * Tier [EnvironmentTier](#environmenttier)
  * VersionLabel [VersionLabel](#versionlabel)

### EnvironmentDescriptionsList
* EnvironmentDescriptionsList `array`
  * items [EnvironmentDescription](#environmentdescription)

### EnvironmentDescriptionsMessage
* EnvironmentDescriptionsMessage `object`: Result message containing a list of environment descriptions.
  * Environments [EnvironmentDescriptionsList](#environmentdescriptionslist)
  * NextToken [Token](#token)

### EnvironmentHealth
* EnvironmentHealth `string` (values: Green, Yellow, Red, Grey)

### EnvironmentHealthAttribute
* EnvironmentHealthAttribute `string` (values: Status, Color, Causes, ApplicationMetrics, InstancesHealth, All, HealthStatus, RefreshedAt)

### EnvironmentHealthAttributes
* EnvironmentHealthAttributes `array`
  * items [EnvironmentHealthAttribute](#environmenthealthattribute)

### EnvironmentHealthStatus
* EnvironmentHealthStatus `string` (values: NoData, Unknown, Pending, Ok, Info, Warning, Degraded, Severe)

### EnvironmentId
* EnvironmentId `string`

### EnvironmentIdList
* EnvironmentIdList `array`
  * items [EnvironmentId](#environmentid)

### EnvironmentInfoDescription
* EnvironmentInfoDescription `object`: The information retrieved from the Amazon EC2 instances.
  * Ec2InstanceId [Ec2InstanceId](#ec2instanceid)
  * InfoType [EnvironmentInfoType](#environmentinfotype)
  * Message [Message](#message)
  * SampleTimestamp [SampleTimestamp](#sampletimestamp)

### EnvironmentInfoDescriptionList
* EnvironmentInfoDescriptionList `array`
  * items [EnvironmentInfoDescription](#environmentinfodescription)

### EnvironmentInfoType
* EnvironmentInfoType `string` (values: tail, bundle)

### EnvironmentLink
* EnvironmentLink `object`: A link to another environment, defined in the environment's manifest. Links provide connection information in system properties that can be used to connect to another environment in the same group. See <a href="http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.
  * EnvironmentName [String](#string)
  * LinkName [String](#string)

### EnvironmentLinks
* EnvironmentLinks `array`
  * items [EnvironmentLink](#environmentlink)

### EnvironmentName
* EnvironmentName `string`

### EnvironmentNamesList
* EnvironmentNamesList `array`
  * items [EnvironmentName](#environmentname)

### EnvironmentResourceDescription
* EnvironmentResourceDescription `object`: Describes the AWS resources in use by this environment. This data is live.
  * AutoScalingGroups [AutoScalingGroupList](#autoscalinggrouplist)
  * EnvironmentName [EnvironmentName](#environmentname)
  * Instances [InstanceList](#instancelist)
  * LaunchConfigurations [LaunchConfigurationList](#launchconfigurationlist)
  * LoadBalancers [LoadBalancerList](#loadbalancerlist)
  * Queues [QueueList](#queuelist)
  * Triggers [TriggerList](#triggerlist)

### EnvironmentResourceDescriptionsMessage
* EnvironmentResourceDescriptionsMessage `object`: Result message containing a list of environment resource descriptions.
  * EnvironmentResources [EnvironmentResourceDescription](#environmentresourcedescription)

### EnvironmentResourcesDescription
* EnvironmentResourcesDescription `object`: Describes the AWS resources in use by this environment. This data is not live data.
  * LoadBalancer [LoadBalancerDescription](#loadbalancerdescription)

### EnvironmentStatus
* EnvironmentStatus `string` (values: Launching, Updating, Ready, Terminating, Terminated)

### EnvironmentTier
* EnvironmentTier `object`: Describes the properties of an environment tier
  * Name [String](#string)
  * Type [String](#string)
  * Version [String](#string)

### EventDate
* EventDate `string`

### EventDescription
* EventDescription `object`: Describes an event.
  * ApplicationName [ApplicationName](#applicationname)
  * EnvironmentName [EnvironmentName](#environmentname)
  * EventDate [EventDate](#eventdate)
  * Message [EventMessage](#eventmessage)
  * PlatformArn [PlatformArn](#platformarn)
  * RequestId [RequestId](#requestid)
  * Severity [EventSeverity](#eventseverity)
  * TemplateName [ConfigurationTemplateName](#configurationtemplatename)
  * VersionLabel [VersionLabel](#versionlabel)

### EventDescriptionList
* EventDescriptionList `array`
  * items [EventDescription](#eventdescription)

### EventDescriptionsMessage
* EventDescriptionsMessage `object`: Result message wrapping a list of event descriptions.
  * Events [EventDescriptionList](#eventdescriptionlist)
  * NextToken [Token](#token)

### EventMessage
* EventMessage `string`

### EventSeverity
* EventSeverity `string` (values: TRACE, DEBUG, INFO, WARN, ERROR, FATAL)

### ExceptionMessage
* ExceptionMessage `string`

### FailureType
* FailureType `string` (values: UpdateCancelled, CancellationFailed, RollbackFailed, RollbackSuccessful, InternalFailure, InvalidEnvironmentState, PermissionsError)

### FileTypeExtension
* FileTypeExtension `string`

### ForceTerminate
* ForceTerminate `boolean`

### GroupName
* GroupName `string`

### ImageId
* ImageId `string`

### IncludeDeleted
* IncludeDeleted `boolean`

### IncludeDeletedBackTo
* IncludeDeletedBackTo `string`

### Instance
* Instance `object`: The description of an Amazon EC2 instance.
  * Id [ResourceId](#resourceid)

### InstanceHealthList
* InstanceHealthList `array`
  * items [SingleInstanceHealth](#singleinstancehealth)

### InstanceHealthSummary
* InstanceHealthSummary `object`: Represents summary information about the health of an instance. For more information, see <a href="http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>.
  * Degraded [NullableInteger](#nullableinteger)
  * Info [NullableInteger](#nullableinteger)
  * NoData [NullableInteger](#nullableinteger)
  * Ok [NullableInteger](#nullableinteger)
  * Pending [NullableInteger](#nullableinteger)
  * Severe [NullableInteger](#nullableinteger)
  * Unknown [NullableInteger](#nullableinteger)
  * Warning [NullableInteger](#nullableinteger)

### InstanceId
* InstanceId `string`

### InstanceList
* InstanceList `array`
  * items [Instance](#instance)

### InstancesHealthAttribute
* InstancesHealthAttribute `string` (values: HealthStatus, Color, Causes, ApplicationMetrics, RefreshedAt, LaunchedAt, System, Deployment, AvailabilityZone, InstanceType, All)

### InstancesHealthAttributes
* InstancesHealthAttributes `array`
  * items [InstancesHealthAttribute](#instanceshealthattribute)

### InsufficientPrivilegesException
* InsufficientPrivilegesException `object`: The specified account does not have sufficient privileges for one of more AWS services.

### Integer
* Integer `integer`

### InvalidRequestException
* InvalidRequestException `object`: One or more input parameters is not valid. Please correct the input parameters and try the operation again.

### Latency
* Latency `object`: Represents the average latency for the slowest X percent of requests over the last 10 seconds.
  * P10 [NullableDouble](#nullabledouble)
  * P50 [NullableDouble](#nullabledouble)
  * P75 [NullableDouble](#nullabledouble)
  * P85 [NullableDouble](#nullabledouble)
  * P90 [NullableDouble](#nullabledouble)
  * P95 [NullableDouble](#nullabledouble)
  * P99 [NullableDouble](#nullabledouble)
  * P999 [NullableDouble](#nullabledouble)

### LaunchConfiguration
* LaunchConfiguration `object`: Describes an Auto Scaling launch configuration.
  * Name [ResourceId](#resourceid)

### LaunchConfigurationList
* LaunchConfigurationList `array`
  * items [LaunchConfiguration](#launchconfiguration)

### LaunchedAt
* LaunchedAt `string`

### ListAvailableSolutionStacksResultMessage
* ListAvailableSolutionStacksResultMessage `object`: A list of available AWS Elastic Beanstalk solution stacks.
  * SolutionStackDetails [AvailableSolutionStackDetailsList](#availablesolutionstackdetailslist)
  * SolutionStacks [AvailableSolutionStackNamesList](#availablesolutionstacknameslist)

### ListPlatformVersionsRequest
* ListPlatformVersionsRequest `object`
  * Filters [PlatformFilters](#platformfilters)
  * MaxRecords [PlatformMaxRecords](#platformmaxrecords)
  * NextToken [Token](#token)

### ListPlatformVersionsResult
* ListPlatformVersionsResult `object`
  * NextToken [Token](#token)
  * PlatformSummaryList [PlatformSummaryList](#platformsummarylist)

### ListTagsForResourceMessage
* ListTagsForResourceMessage `object`
  * ResourceArn **required** [ResourceArn](#resourcearn)

### Listener
* Listener `object`: Describes the properties of a Listener for the LoadBalancer.
  * Port [Integer](#integer)
  * Protocol [String](#string)

### LoadAverage
* LoadAverage `array`
  * items [LoadAverageValue](#loadaveragevalue)

### LoadAverageValue
* LoadAverageValue `number`

### LoadBalancer
* LoadBalancer `object`: Describes a LoadBalancer.
  * Name [ResourceId](#resourceid)

### LoadBalancerDescription
* LoadBalancerDescription `object`: Describes the details of a LoadBalancer.
  * Domain [String](#string)
  * Listeners [LoadBalancerListenersDescription](#loadbalancerlistenersdescription)
  * LoadBalancerName [String](#string)

### LoadBalancerList
* LoadBalancerList `array`
  * items [LoadBalancer](#loadbalancer)

### LoadBalancerListenersDescription
* LoadBalancerListenersDescription `array`
  * items [Listener](#listener)

### Maintainer
* Maintainer `string`

### ManagedAction
* ManagedAction `object`: The record of an upcoming or in-progress managed action.
  * ActionDescription [String](#string)
  * ActionId [String](#string)
  * ActionType [ActionType](#actiontype)
  * Status [ActionStatus](#actionstatus)
  * WindowStartTime [Timestamp](#timestamp)

### ManagedActionHistoryItem
* ManagedActionHistoryItem `object`: The record of a completed or failed managed action.
  * ActionDescription [String](#string)
  * ActionId [String](#string)
  * ActionType [ActionType](#actiontype)
  * ExecutedTime [Timestamp](#timestamp)
  * FailureDescription [String](#string)
  * FailureType [FailureType](#failuretype)
  * FinishedTime [Timestamp](#timestamp)
  * Status [ActionHistoryStatus](#actionhistorystatus)

### ManagedActionHistoryItems
* ManagedActionHistoryItems `array`
  * items [ManagedActionHistoryItem](#managedactionhistoryitem)

### ManagedActionInvalidStateException
* ManagedActionInvalidStateException `object`: Cannot modify the managed action in its current state.

### ManagedActions
* ManagedActions `array`
  * items [ManagedAction](#managedaction)

### MaxAgeRule
* MaxAgeRule `object`: A lifecycle rule that deletes application versions after the specified number of days.
  * DeleteSourceFromS3 [BoxedBoolean](#boxedboolean)
  * Enabled **required** [BoxedBoolean](#boxedboolean)
  * MaxAgeInDays [BoxedInt](#boxedint)

### MaxCountRule
* MaxCountRule `object`: A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.
  * DeleteSourceFromS3 [BoxedBoolean](#boxedboolean)
  * Enabled **required** [BoxedBoolean](#boxedboolean)
  * MaxCount [BoxedInt](#boxedint)

### MaxRecords
* MaxRecords `integer`

### Message
* Message `string`

### NextToken
* NextToken `string`

### NonEmptyString
* NonEmptyString `string`

### NullableDouble
* NullableDouble `number`

### NullableInteger
* NullableInteger `integer`

### NullableLong
* NullableLong `integer`

### OperatingSystemName
* OperatingSystemName `string`

### OperatingSystemVersion
* OperatingSystemVersion `string`

### OperationInProgressException
* OperationInProgressException `object`: Unable to perform the specified operation because another operation that effects an element in this activity is already in progress.

### OptionNamespace
* OptionNamespace `string`

### OptionRestrictionMaxLength
* OptionRestrictionMaxLength `integer`

### OptionRestrictionMaxValue
* OptionRestrictionMaxValue `integer`

### OptionRestrictionMinValue
* OptionRestrictionMinValue `integer`

### OptionRestrictionRegex
* OptionRestrictionRegex `object`: A regular expression representing a restriction on a string configuration option value.
  * Label [RegexLabel](#regexlabel)
  * Pattern [RegexPattern](#regexpattern)

### OptionSpecification
* OptionSpecification `object`: A specification identifying an individual configuration option.
  * Namespace [OptionNamespace](#optionnamespace)
  * OptionName [ConfigurationOptionName](#configurationoptionname)
  * ResourceName [ResourceName](#resourcename)

### OptionsSpecifierList
* OptionsSpecifierList `array`
  * items [OptionSpecification](#optionspecification)

### PlatformArn
* PlatformArn `string`

### PlatformCategory
* PlatformCategory `string`

### PlatformDescription
* PlatformDescription `object`: Detailed information about a platform.
  * CustomAmiList [CustomAmiList](#customamilist)
  * DateCreated [CreationDate](#creationdate)
  * DateUpdated [UpdateDate](#updatedate)
  * Description [Description](#description)
  * Frameworks [PlatformFrameworks](#platformframeworks)
  * Maintainer [Maintainer](#maintainer)
  * OperatingSystemName [OperatingSystemName](#operatingsystemname)
  * OperatingSystemVersion [OperatingSystemVersion](#operatingsystemversion)
  * PlatformArn [PlatformArn](#platformarn)
  * PlatformCategory [PlatformCategory](#platformcategory)
  * PlatformName [PlatformName](#platformname)
  * PlatformOwner [PlatformOwner](#platformowner)
  * PlatformStatus [PlatformStatus](#platformstatus)
  * PlatformVersion [PlatformVersion](#platformversion)
  * ProgrammingLanguages [PlatformProgrammingLanguages](#platformprogramminglanguages)
  * SolutionStackName [SolutionStackName](#solutionstackname)
  * SupportedAddonList [SupportedAddonList](#supportedaddonlist)
  * SupportedTierList [SupportedTierList](#supportedtierlist)

### PlatformFilter
* PlatformFilter `object`: <p>Specify criteria to restrict the results when listing custom platforms.</p> <p>The filter is evaluated as the expression:</p> <p> <code>Type</code> <code>Operator</code> <code>Values[i]</code> </p>
  * Operator [PlatformFilterOperator](#platformfilteroperator)
  * Type [PlatformFilterType](#platformfiltertype)
  * Values [PlatformFilterValueList](#platformfiltervaluelist)

### PlatformFilterOperator
* PlatformFilterOperator `string`

### PlatformFilterType
* PlatformFilterType `string`

### PlatformFilterValue
* PlatformFilterValue `string`

### PlatformFilterValueList
* PlatformFilterValueList `array`
  * items [PlatformFilterValue](#platformfiltervalue)

### PlatformFilters
* PlatformFilters `array`
  * items [PlatformFilter](#platformfilter)

### PlatformFramework
* PlatformFramework `object`: A framework supported by the custom platform.
  * Name [String](#string)
  * Version [String](#string)

### PlatformFrameworks
* PlatformFrameworks `array`
  * items [PlatformFramework](#platformframework)

### PlatformMaxRecords
* PlatformMaxRecords `integer`

### PlatformName
* PlatformName `string`

### PlatformOwner
* PlatformOwner `string`

### PlatformProgrammingLanguage
* PlatformProgrammingLanguage `object`: A programming language supported by the platform.
  * Name [String](#string)
  * Version [String](#string)

### PlatformProgrammingLanguages
* PlatformProgrammingLanguages `array`
  * items [PlatformProgrammingLanguage](#platformprogramminglanguage)

### PlatformStatus
* PlatformStatus `string` (values: Creating, Failed, Ready, Deleting, Deleted)

### PlatformSummary
* PlatformSummary `object`: Detailed information about a platform.
  * OperatingSystemName [OperatingSystemName](#operatingsystemname)
  * OperatingSystemVersion [OperatingSystemVersion](#operatingsystemversion)
  * PlatformArn [PlatformArn](#platformarn)
  * PlatformCategory [PlatformCategory](#platformcategory)
  * PlatformOwner [PlatformOwner](#platformowner)
  * PlatformStatus [PlatformStatus](#platformstatus)
  * SupportedAddonList [SupportedAddonList](#supportedaddonlist)
  * SupportedTierList [SupportedTierList](#supportedtierlist)

### PlatformSummaryList
* PlatformSummaryList `array`
  * items [PlatformSummary](#platformsummary)

### PlatformVersion
* PlatformVersion `string`

### PlatformVersionStillReferencedException
* PlatformVersionStillReferencedException `object`: You cannot delete the platform version because there are still environments running on it.

### Queue
* Queue `object`: Describes a queue.
  * Name [String](#string)
  * URL [String](#string)

### QueueList
* QueueList `array`
  * items [Queue](#queue)

### RebuildEnvironmentMessage
* RebuildEnvironmentMessage `object`: <p/>
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)

### RefreshedAt
* RefreshedAt `string`

### RegexLabel
* RegexLabel `string`

### RegexPattern
* RegexPattern `string`

### RequestCount
* RequestCount `integer`

### RequestEnvironmentInfoMessage
* RequestEnvironmentInfoMessage `object`: Request to retrieve logs from an environment and store them in your Elastic Beanstalk storage bucket.
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)
  * InfoType **required** [EnvironmentInfoType](#environmentinfotype)

### RequestId
* RequestId `string`

### ResourceArn
* ResourceArn `string`

### ResourceId
* ResourceId `string`

### ResourceName
* ResourceName `string`

### ResourceNotFoundException
* ResourceNotFoundException `object`: A resource doesn't exist for the specified Amazon Resource Name (ARN).

### ResourceTagsDescriptionMessage
* ResourceTagsDescriptionMessage `object`
  * ResourceArn [ResourceArn](#resourcearn)
  * ResourceTags [TagList](#taglist)

### ResourceTypeNotSupportedException
* ResourceTypeNotSupportedException `object`: The type of the specified Amazon Resource Name (ARN) isn't supported for this operation.

### RestartAppServerMessage
* RestartAppServerMessage `object`: <p/>
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)

### RetrieveEnvironmentInfoMessage
* RetrieveEnvironmentInfoMessage `object`: Request to download logs retrieved with <a>RequestEnvironmentInfo</a>.
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)
  * InfoType **required** [EnvironmentInfoType](#environmentinfotype)

### RetrieveEnvironmentInfoResultMessage
* RetrieveEnvironmentInfoResultMessage `object`: Result message containing a description of the requested environment info.
  * EnvironmentInfo [EnvironmentInfoDescriptionList](#environmentinfodescriptionlist)

### S3Bucket
* S3Bucket `string`

### S3Key
* S3Key `string`

### S3Location
* S3Location `object`: The bucket and key of an item stored in Amazon S3.
  * S3Bucket [S3Bucket](#s3bucket)
  * S3Key [S3Key](#s3key)

### S3LocationNotInServiceRegionException
* S3LocationNotInServiceRegionException `object`: <p>The specified S3 bucket does not belong to the S3 region in which the service is running. The following regions are supported:</p> <ul> <li> <p>IAD/us-east-1</p> </li> <li> <p>PDX/us-west-2</p> </li> <li> <p>DUB/eu-west-1</p> </li> </ul>

### S3SubscriptionRequiredException
* S3SubscriptionRequiredException `object`: The specified account does not have a subscription to Amazon S3.

### SampleTimestamp
* SampleTimestamp `string`

### SingleInstanceHealth
* SingleInstanceHealth `object`: Detailed health information about an Amazon EC2 instance in your Elastic Beanstalk environment.
  * ApplicationMetrics [ApplicationMetrics](#applicationmetrics)
  * AvailabilityZone [String](#string)
  * Causes [Causes](#causes)
  * Color [String](#string)
  * Deployment [Deployment](#deployment)
  * HealthStatus [String](#string)
  * InstanceId [InstanceId](#instanceid)
  * InstanceType [String](#string)
  * LaunchedAt [LaunchedAt](#launchedat)
  * System [SystemStatus](#systemstatus)

### SolutionStackDescription
* SolutionStackDescription `object`: Describes the solution stack.
  * PermittedFileTypes [SolutionStackFileTypeList](#solutionstackfiletypelist)
  * SolutionStackName [SolutionStackName](#solutionstackname)

### SolutionStackFileTypeList
* SolutionStackFileTypeList `array`
  * items [FileTypeExtension](#filetypeextension)

### SolutionStackName
* SolutionStackName `string`

### SourceBuildInformation
* SourceBuildInformation `object`: Location of the source code for an application version.
  * SourceLocation **required** [SourceLocation](#sourcelocation)
  * SourceRepository **required** [SourceRepository](#sourcerepository)
  * SourceType **required** [SourceType](#sourcetype)

### SourceBundleDeletionException
* SourceBundleDeletionException `object`: Unable to delete the Amazon S3 source bundle associated with the application version. The application version was deleted successfully.

### SourceConfiguration
* SourceConfiguration `object`: A specification for an environment configuration
  * ApplicationName [ApplicationName](#applicationname)
  * TemplateName [ConfigurationTemplateName](#configurationtemplatename)

### SourceLocation
* SourceLocation `string`

### SourceRepository
* SourceRepository `string` (values: CodeCommit, S3)

### SourceType
* SourceType `string` (values: Git, Zip)

### StatusCodes
* StatusCodes `object`: Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">Status Code Definitions</a>.
  * Status2xx [NullableInteger](#nullableinteger)
  * Status3xx [NullableInteger](#nullableinteger)
  * Status4xx [NullableInteger](#nullableinteger)
  * Status5xx [NullableInteger](#nullableinteger)

### String
* String `string`

### SupportedAddon
* SupportedAddon `string`

### SupportedAddonList
* SupportedAddonList `array`
  * items [SupportedAddon](#supportedaddon)

### SupportedTier
* SupportedTier `string`

### SupportedTierList
* SupportedTierList `array`
  * items [SupportedTier](#supportedtier)

### SwapEnvironmentCNAMEsMessage
* SwapEnvironmentCNAMEsMessage `object`: Swaps the CNAMEs of two environments.
  * DestinationEnvironmentId [EnvironmentId](#environmentid)
  * DestinationEnvironmentName [EnvironmentName](#environmentname)
  * SourceEnvironmentId [EnvironmentId](#environmentid)
  * SourceEnvironmentName [EnvironmentName](#environmentname)

### SystemStatus
* SystemStatus `object`: CPU utilization and load average metrics for an Amazon EC2 instance.
  * CPUUtilization [CPUUtilization](#cpuutilization)
  * LoadAverage [LoadAverage](#loadaverage)

### Tag
* Tag `object`: Describes a tag applied to a resource in an environment.
  * Key [TagKey](#tagkey)
  * Value [TagValue](#tagvalue)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### TerminateEnvForce
* TerminateEnvForce `boolean`

### TerminateEnvironmentMessage
* TerminateEnvironmentMessage `object`: Request to terminate an environment.
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)
  * ForceTerminate [ForceTerminate](#forceterminate)
  * TerminateResources [TerminateEnvironmentResources](#terminateenvironmentresources)

### TerminateEnvironmentResources
* TerminateEnvironmentResources `boolean`

### TimeFilterEnd
* TimeFilterEnd `string`

### TimeFilterStart
* TimeFilterStart `string`

### Timestamp
* Timestamp `string`

### Token
* Token `string`

### TooManyApplicationVersionsException
* TooManyApplicationVersionsException `object`: The specified account has reached its limit of application versions.

### TooManyApplicationsException
* TooManyApplicationsException `object`: The specified account has reached its limit of applications.

### TooManyBucketsException
* TooManyBucketsException `object`: The specified account has reached its limit of Amazon S3 buckets.

### TooManyConfigurationTemplatesException
* TooManyConfigurationTemplatesException `object`: The specified account has reached its limit of configuration templates.

### TooManyEnvironmentsException
* TooManyEnvironmentsException `object`: The specified account has reached its limit of environments.

### TooManyPlatformsException
* TooManyPlatformsException `object`: You have exceeded the maximum number of allowed platforms associated with the account.

### TooManyTagsException
* TooManyTagsException `object`: <p>The number of tags in the resource would exceed the number of tags that each resource can have.</p> <p>To calculate this, the operation considers both the number of tags the resource already has and the tags this operation would add if it succeeded.</p>

### Trigger
* Trigger `object`: Describes a trigger.
  * Name [ResourceId](#resourceid)

### TriggerList
* TriggerList `array`
  * items [Trigger](#trigger)

### UpdateApplicationMessage
* UpdateApplicationMessage `object`: Request to update an application.
  * ApplicationName **required** [ApplicationName](#applicationname)
  * Description [Description](#description)

### UpdateApplicationResourceLifecycleMessage
* UpdateApplicationResourceLifecycleMessage `object`
  * ApplicationName **required** [ApplicationName](#applicationname)
  * ResourceLifecycleConfig **required** [ApplicationResourceLifecycleConfig](#applicationresourcelifecycleconfig)

### UpdateApplicationVersionMessage
* UpdateApplicationVersionMessage `object`: <p/>
  * ApplicationName **required** [ApplicationName](#applicationname)
  * Description [Description](#description)
  * VersionLabel **required** [VersionLabel](#versionlabel)

### UpdateConfigurationTemplateMessage
* UpdateConfigurationTemplateMessage `object`: The result message containing the options for the specified solution stack.
  * ApplicationName **required** [ApplicationName](#applicationname)
  * Description [Description](#description)
  * OptionSettings [ConfigurationOptionSettingsList](#configurationoptionsettingslist)
  * OptionsToRemove [OptionsSpecifierList](#optionsspecifierlist)
  * TemplateName **required** [ConfigurationTemplateName](#configurationtemplatename)

### UpdateDate
* UpdateDate `string`

### UpdateEnvironmentMessage
* UpdateEnvironmentMessage `object`: Request to update an environment.
  * ApplicationName [ApplicationName](#applicationname)
  * Description [Description](#description)
  * EnvironmentId [EnvironmentId](#environmentid)
  * EnvironmentName [EnvironmentName](#environmentname)
  * GroupName [GroupName](#groupname)
  * OptionSettings [ConfigurationOptionSettingsList](#configurationoptionsettingslist)
  * OptionsToRemove [OptionsSpecifierList](#optionsspecifierlist)
  * PlatformArn [PlatformArn](#platformarn)
  * SolutionStackName [SolutionStackName](#solutionstackname)
  * TemplateName [ConfigurationTemplateName](#configurationtemplatename)
  * Tier [EnvironmentTier](#environmenttier)
  * VersionLabel [VersionLabel](#versionlabel)

### UpdateTagsForResourceMessage
* UpdateTagsForResourceMessage `object`
  * ResourceArn **required** [ResourceArn](#resourcearn)
  * TagsToAdd [TagList](#taglist)
  * TagsToRemove [TagKeyList](#tagkeylist)

### UserDefinedOption
* UserDefinedOption `boolean`

### ValidateConfigurationSettingsMessage
* ValidateConfigurationSettingsMessage `object`: A list of validation messages for a specified configuration template.
  * ApplicationName **required** [ApplicationName](#applicationname)
  * EnvironmentName [EnvironmentName](#environmentname)
  * OptionSettings **required** [ConfigurationOptionSettingsList](#configurationoptionsettingslist)
  * TemplateName [ConfigurationTemplateName](#configurationtemplatename)

### ValidationMessage
* ValidationMessage `object`: An error or warning for a desired configuration option value.
  * Message [ValidationMessageString](#validationmessagestring)
  * Namespace [OptionNamespace](#optionnamespace)
  * OptionName [ConfigurationOptionName](#configurationoptionname)
  * Severity [ValidationSeverity](#validationseverity)

### ValidationMessageString
* ValidationMessageString `string`

### ValidationMessagesList
* ValidationMessagesList `array`
  * items [ValidationMessage](#validationmessage)

### ValidationSeverity
* ValidationSeverity `string` (values: error, warning)

### VersionLabel
* VersionLabel `string`

### VersionLabels
* VersionLabels `array`
  * items [VersionLabel](#versionlabel)

### VersionLabelsList
* VersionLabelsList `array`
  * items [VersionLabel](#versionlabel)

### VirtualizationType
* VirtualizationType `string`


