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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Elastic Beanstalk</fullname> <p>AWS Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable, fault-tolerant applications running on the Amazon Web Services cloud.</p> <p>For more information about this product, go to the <a href="http://aws.amazon.com/elasticbeanstalk/">AWS Elastic Beanstalk</a> details page. The location of the latest AWS Elastic Beanstalk WSDL is <a href="https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl">https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl</a>. To install the Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools that enable you to access the API, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> <p> <b>Endpoints</b> </p> <p>For a list of region-specific endpoints that AWS Elastic Beanstalk supports, go to <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region">Regions and Endpoints</a> in the <i>Amazon Web Services Glossary</i>.</p>

## Actions

### AbortEnvironmentUpdate



```js
amazonaws_elasticbeanstalk.AbortEnvironmentUpdate({}, context)
```

#### Input
* input `object`
  * EnvironmentId `string`
  * EnvironmentName `string`

#### Output
*Output schema unknown*

### AbortEnvironmentUpdate



```js
amazonaws_elasticbeanstalk.AbortEnvironmentUpdate({}, context)
```

#### Input
* input `object`
  * EnvironmentId
  * EnvironmentName

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
  * EnvironmentName `string`
  * EnvironmentId `string`
  * ActionId **required** `string`

#### Output
* output [ApplyEnvironmentManagedActionResult](#applyenvironmentmanagedactionresult)

### ApplyEnvironmentManagedAction



```js
amazonaws_elasticbeanstalk.ApplyEnvironmentManagedAction({
  "ActionId": null
}, context)
```

#### Input
* input `object`
  * ActionId **required**
  * EnvironmentId
  * EnvironmentName

#### Output
* output [ApplyEnvironmentManagedActionResult](#applyenvironmentmanagedactionresult)

### AssociateEnvironmentOperationsRole



```js
amazonaws_elasticbeanstalk.AssociateEnvironmentOperationsRole({
  "EnvironmentName": "",
  "OperationsRole": ""
}, context)
```

#### Input
* input `object`
  * EnvironmentName **required** `string`
  * OperationsRole **required** `string`

#### Output
*Output schema unknown*

### AssociateEnvironmentOperationsRole



```js
amazonaws_elasticbeanstalk.AssociateEnvironmentOperationsRole({
  "EnvironmentName": null,
  "OperationsRole": null
}, context)
```

#### Input
* input `object`
  * EnvironmentName **required**
  * OperationsRole **required**

#### Output
*Output schema unknown*

### CheckDNSAvailability



```js
amazonaws_elasticbeanstalk.CheckDNSAvailability({
  "CNAMEPrefix": ""
}, context)
```

#### Input
* input `object`
  * CNAMEPrefix **required** `string`

#### Output
* output [CheckDNSAvailabilityResultMessage](#checkdnsavailabilityresultmessage)

### CheckDNSAvailability



```js
amazonaws_elasticbeanstalk.CheckDNSAvailability({
  "CNAMEPrefix": null
}, context)
```

#### Input
* input `object`
  * CNAMEPrefix **required**

#### Output
* output [CheckDNSAvailabilityResultMessage](#checkdnsavailabilityresultmessage)

### ComposeEnvironments



```js
amazonaws_elasticbeanstalk.ComposeEnvironments({}, context)
```

#### Input
* input `object`
  * ApplicationName `string`
  * GroupName `string`
  * VersionLabels `array`

#### Output
* output [EnvironmentDescriptionsMessage](#environmentdescriptionsmessage)

### ComposeEnvironments



```js
amazonaws_elasticbeanstalk.ComposeEnvironments({}, context)
```

#### Input
* input `object`
  * ApplicationName
  * GroupName
  * VersionLabels
    * items [VersionLabel](#versionlabel)

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
  * ApplicationName **required** `string`
  * Description `string`
  * ResourceLifecycleConfig `object`
  * Tags `array`

#### Output
* output [ApplicationDescriptionMessage](#applicationdescriptionmessage)

### CreateApplication



```js
amazonaws_elasticbeanstalk.CreateApplication({
  "ApplicationName": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * Description
  * ResourceLifecycleConfig
    * ServiceRole
    * VersionLifecycleConfig
      * MaxAgeRule
        * DeleteSourceFromS3
        * Enabled **required**
        * MaxAgeInDays
      * MaxCountRule
        * DeleteSourceFromS3
        * Enabled **required**
        * MaxCount
  * Tags
    * items [Tag](#tag)

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
  * ApplicationName **required** `string`
  * VersionLabel **required** `string`
  * Description `string`
  * SourceBuildInformation `object`
  * SourceBundle `object`
  * BuildConfiguration `object`
  * AutoCreateApplication `boolean`
  * Process `boolean`
  * Tags `array`

#### Output
* output [ApplicationVersionDescriptionMessage](#applicationversiondescriptionmessage)

### CreateApplicationVersion



```js
amazonaws_elasticbeanstalk.CreateApplicationVersion({
  "ApplicationName": null,
  "VersionLabel": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * AutoCreateApplication
  * BuildConfiguration
    * ArtifactName
    * CodeBuildServiceRole **required**
    * ComputeType
    * Image **required**
    * TimeoutInMinutes
  * Description
  * Process
  * SourceBuildInformation
    * SourceLocation **required**
    * SourceRepository **required**
    * SourceType **required**
  * SourceBundle
    * S3Bucket
    * S3Key
  * Tags
    * items [Tag](#tag)
  * VersionLabel **required**

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
  * ApplicationName **required** `string`
  * TemplateName **required** `string`
  * SolutionStackName `string`
  * PlatformArn `string`
  * SourceConfiguration `object`
  * EnvironmentId `string`
  * Description `string`
  * OptionSettings `array`
  * Tags `array`

#### Output
* output [ConfigurationSettingsDescription](#configurationsettingsdescription)

### CreateConfigurationTemplate



```js
amazonaws_elasticbeanstalk.CreateConfigurationTemplate({
  "ApplicationName": null,
  "TemplateName": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * Description
  * EnvironmentId
  * OptionSettings
    * items [ConfigurationOptionSetting](#configurationoptionsetting)
  * PlatformArn
  * SolutionStackName
  * SourceConfiguration
    * ApplicationName
    * TemplateName
  * Tags
    * items [Tag](#tag)
  * TemplateName **required**

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
  * ApplicationName **required** `string`
  * EnvironmentName `string`
  * GroupName `string`
  * Description `string`
  * CNAMEPrefix `string`
  * Tier `object`
  * Tags `array`
  * VersionLabel `string`
  * TemplateName `string`
  * SolutionStackName `string`
  * PlatformArn `string`
  * OptionSettings `array`
  * OptionsToRemove `array`
  * OperationsRole `string`

#### Output
* output [EnvironmentDescription](#environmentdescription)

### CreateEnvironment



```js
amazonaws_elasticbeanstalk.CreateEnvironment({
  "ApplicationName": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * CNAMEPrefix
  * Description
  * EnvironmentName
  * GroupName
  * OperationsRole
  * OptionSettings
    * items [ConfigurationOptionSetting](#configurationoptionsetting)
  * OptionsToRemove
    * items [OptionSpecification](#optionspecification)
  * PlatformArn
  * SolutionStackName
  * Tags
    * items [Tag](#tag)
  * TemplateName
  * Tier
    * Name
    * Type
    * Version
  * VersionLabel

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
  * PlatformName **required** `string`
  * PlatformVersion **required** `string`
  * PlatformDefinitionBundle **required** `object`
  * EnvironmentName `string`
  * OptionSettings `array`
  * Tags `array`

#### Output
* output [CreatePlatformVersionResult](#createplatformversionresult)

### CreatePlatformVersion



```js
amazonaws_elasticbeanstalk.CreatePlatformVersion({
  "PlatformName": null,
  "PlatformVersion": null,
  "PlatformDefinitionBundle": null
}, context)
```

#### Input
* input `object`
  * EnvironmentName
  * OptionSettings
    * items [ConfigurationOptionSetting](#configurationoptionsetting)
  * PlatformDefinitionBundle **required**
    * S3Bucket
    * S3Key
  * PlatformName **required**
  * PlatformVersion **required**
  * Tags
    * items [Tag](#tag)

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
  * ApplicationName **required** `string`
  * TerminateEnvByForce `boolean`

#### Output
*Output schema unknown*

### DeleteApplication



```js
amazonaws_elasticbeanstalk.DeleteApplication({
  "ApplicationName": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * TerminateEnvByForce

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
  * ApplicationName **required** `string`
  * VersionLabel **required** `string`
  * DeleteSourceBundle `boolean`

#### Output
*Output schema unknown*

### DeleteApplicationVersion



```js
amazonaws_elasticbeanstalk.DeleteApplicationVersion({
  "ApplicationName": null,
  "VersionLabel": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * DeleteSourceBundle
  * VersionLabel **required**

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
  * ApplicationName **required** `string`
  * TemplateName **required** `string`

#### Output
*Output schema unknown*

### DeleteConfigurationTemplate



```js
amazonaws_elasticbeanstalk.DeleteConfigurationTemplate({
  "ApplicationName": null,
  "TemplateName": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * TemplateName **required**

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
  * ApplicationName **required** `string`
  * EnvironmentName **required** `string`

#### Output
*Output schema unknown*

### DeleteEnvironmentConfiguration



```js
amazonaws_elasticbeanstalk.DeleteEnvironmentConfiguration({
  "ApplicationName": null,
  "EnvironmentName": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * EnvironmentName **required**

#### Output
*Output schema unknown*

### DeletePlatformVersion



```js
amazonaws_elasticbeanstalk.DeletePlatformVersion({}, context)
```

#### Input
* input `object`
  * PlatformArn `string`

#### Output
* output [DeletePlatformVersionResult](#deleteplatformversionresult)

### DeletePlatformVersion



```js
amazonaws_elasticbeanstalk.DeletePlatformVersion({}, context)
```

#### Input
* input `object`
  * PlatformArn

#### Output
* output [DeletePlatformVersionResult](#deleteplatformversionresult)

### DescribeAccountAttributes



```js
amazonaws_elasticbeanstalk.DescribeAccountAttributes({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeAccountAttributesResult](#describeaccountattributesresult)

### DescribeAccountAttributes



```js
amazonaws_elasticbeanstalk.DescribeAccountAttributes({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeAccountAttributesResult](#describeaccountattributesresult)

### DescribeApplicationVersions



```js
amazonaws_elasticbeanstalk.DescribeApplicationVersions({}, context)
```

#### Input
* input `object`
  * ApplicationName `string`
  * VersionLabels `array`
  * MaxRecords `integer`
  * NextToken `string`

#### Output
* output [ApplicationVersionDescriptionsMessage](#applicationversiondescriptionsmessage)

### DescribeApplicationVersions



```js
amazonaws_elasticbeanstalk.DescribeApplicationVersions({}, context)
```

#### Input
* input `object`
  * ApplicationName
  * MaxRecords
  * NextToken
  * VersionLabels
    * items [VersionLabel](#versionlabel)

#### Output
* output [ApplicationVersionDescriptionsMessage](#applicationversiondescriptionsmessage)

### DescribeApplications



```js
amazonaws_elasticbeanstalk.DescribeApplications({}, context)
```

#### Input
* input `object`
  * ApplicationNames `array`

#### Output
* output [ApplicationDescriptionsMessage](#applicationdescriptionsmessage)

### DescribeApplications



```js
amazonaws_elasticbeanstalk.DescribeApplications({}, context)
```

#### Input
* input `object`
  * ApplicationNames
    * items [ApplicationName](#applicationname)

#### Output
* output [ApplicationDescriptionsMessage](#applicationdescriptionsmessage)

### DescribeConfigurationOptions



```js
amazonaws_elasticbeanstalk.DescribeConfigurationOptions({}, context)
```

#### Input
* input `object`
  * ApplicationName `string`
  * TemplateName `string`
  * EnvironmentName `string`
  * SolutionStackName `string`
  * PlatformArn `string`
  * Options `array`

#### Output
* output [ConfigurationOptionsDescription](#configurationoptionsdescription)

### DescribeConfigurationOptions



```js
amazonaws_elasticbeanstalk.DescribeConfigurationOptions({}, context)
```

#### Input
* input `object`
  * ApplicationName
  * EnvironmentName
  * Options
    * items [OptionSpecification](#optionspecification)
  * PlatformArn
  * SolutionStackName
  * TemplateName

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
  * ApplicationName **required** `string`
  * TemplateName `string`
  * EnvironmentName `string`

#### Output
* output [ConfigurationSettingsDescriptions](#configurationsettingsdescriptions)

### DescribeConfigurationSettings



```js
amazonaws_elasticbeanstalk.DescribeConfigurationSettings({
  "ApplicationName": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * EnvironmentName
  * TemplateName

#### Output
* output [ConfigurationSettingsDescriptions](#configurationsettingsdescriptions)

### DescribeEnvironmentHealth



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentHealth({}, context)
```

#### Input
* input `object`
  * EnvironmentName `string`
  * EnvironmentId `string`
  * AttributeNames `array`

#### Output
* output [DescribeEnvironmentHealthResult](#describeenvironmenthealthresult)

### DescribeEnvironmentHealth



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentHealth({}, context)
```

#### Input
* input `object`
  * AttributeNames
    * items [EnvironmentHealthAttribute](#environmenthealthattribute)
  * EnvironmentId
  * EnvironmentName

#### Output
* output [DescribeEnvironmentHealthResult](#describeenvironmenthealthresult)

### DescribeEnvironmentManagedActionHistory



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentManagedActionHistory({}, context)
```

#### Input
* input `object`
  * EnvironmentId `string`
  * EnvironmentName `string`
  * NextToken `string`
  * MaxItems `integer`

#### Output
* output [DescribeEnvironmentManagedActionHistoryResult](#describeenvironmentmanagedactionhistoryresult)

### DescribeEnvironmentManagedActionHistory



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentManagedActionHistory({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * NextToken `string`
  * EnvironmentId
  * EnvironmentName
  * MaxItems
  * NextToken

#### Output
* output [DescribeEnvironmentManagedActionHistoryResult](#describeenvironmentmanagedactionhistoryresult)

### DescribeEnvironmentManagedActions



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentManagedActions({}, context)
```

#### Input
* input `object`
  * EnvironmentName `string`
  * EnvironmentId `string`
  * Status `string`

#### Output
* output [DescribeEnvironmentManagedActionsResult](#describeenvironmentmanagedactionsresult)

### DescribeEnvironmentManagedActions



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentManagedActions({}, context)
```

#### Input
* input `object`
  * EnvironmentId
  * EnvironmentName
  * Status

#### Output
* output [DescribeEnvironmentManagedActionsResult](#describeenvironmentmanagedactionsresult)

### DescribeEnvironmentResources



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentResources({}, context)
```

#### Input
* input `object`
  * EnvironmentId `string`
  * EnvironmentName `string`

#### Output
* output [EnvironmentResourceDescriptionsMessage](#environmentresourcedescriptionsmessage)

### DescribeEnvironmentResources



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentResources({}, context)
```

#### Input
* input `object`
  * EnvironmentId
  * EnvironmentName

#### Output
* output [EnvironmentResourceDescriptionsMessage](#environmentresourcedescriptionsmessage)

### DescribeEnvironments



```js
amazonaws_elasticbeanstalk.DescribeEnvironments({}, context)
```

#### Input
* input `object`
  * ApplicationName `string`
  * VersionLabel `string`
  * EnvironmentIds `array`
  * EnvironmentNames `array`
  * IncludeDeleted `boolean`
  * IncludedDeletedBackTo `string`
  * MaxRecords `integer`
  * NextToken `string`

#### Output
* output [EnvironmentDescriptionsMessage](#environmentdescriptionsmessage)

### DescribeEnvironments



```js
amazonaws_elasticbeanstalk.DescribeEnvironments({}, context)
```

#### Input
* input `object`
  * ApplicationName
  * EnvironmentIds
    * items [EnvironmentId](#environmentid)
  * EnvironmentNames
    * items [EnvironmentName](#environmentname)
  * IncludeDeleted
  * IncludedDeletedBackTo
  * MaxRecords
  * NextToken
  * VersionLabel

#### Output
* output [EnvironmentDescriptionsMessage](#environmentdescriptionsmessage)

### DescribeEvents



```js
amazonaws_elasticbeanstalk.DescribeEvents({}, context)
```

#### Input
* input `object`
  * ApplicationName `string`
  * VersionLabel `string`
  * TemplateName `string`
  * EnvironmentId `string`
  * EnvironmentName `string`
  * PlatformArn `string`
  * RequestId `string`
  * Severity `string`
  * StartTime `string`
  * EndTime `string`
  * MaxRecords `integer`
  * NextToken `string`

#### Output
* output [EventDescriptionsMessage](#eventdescriptionsmessage)

### DescribeEvents



```js
amazonaws_elasticbeanstalk.DescribeEvents({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * ApplicationName
  * EndTime
  * EnvironmentId
  * EnvironmentName
  * MaxRecords
  * NextToken
  * PlatformArn
  * RequestId
  * Severity
  * StartTime
  * TemplateName
  * VersionLabel

#### Output
* output [EventDescriptionsMessage](#eventdescriptionsmessage)

### DescribeInstancesHealth



```js
amazonaws_elasticbeanstalk.DescribeInstancesHealth({}, context)
```

#### Input
* input `object`
  * EnvironmentName `string`
  * EnvironmentId `string`
  * AttributeNames `array`
  * NextToken `string`

#### Output
* output [DescribeInstancesHealthResult](#describeinstanceshealthresult)

### DescribeInstancesHealth



```js
amazonaws_elasticbeanstalk.DescribeInstancesHealth({}, context)
```

#### Input
* input `object`
  * AttributeNames
    * items [InstancesHealthAttribute](#instanceshealthattribute)
  * EnvironmentId
  * EnvironmentName
  * NextToken

#### Output
* output [DescribeInstancesHealthResult](#describeinstanceshealthresult)

### DescribePlatformVersion



```js
amazonaws_elasticbeanstalk.DescribePlatformVersion({}, context)
```

#### Input
* input `object`
  * PlatformArn `string`

#### Output
* output [DescribePlatformVersionResult](#describeplatformversionresult)

### DescribePlatformVersion



```js
amazonaws_elasticbeanstalk.DescribePlatformVersion({}, context)
```

#### Input
* input `object`
  * PlatformArn

#### Output
* output [DescribePlatformVersionResult](#describeplatformversionresult)

### DisassociateEnvironmentOperationsRole



```js
amazonaws_elasticbeanstalk.DisassociateEnvironmentOperationsRole({
  "EnvironmentName": ""
}, context)
```

#### Input
* input `object`
  * EnvironmentName **required** `string`

#### Output
*Output schema unknown*

### DisassociateEnvironmentOperationsRole



```js
amazonaws_elasticbeanstalk.DisassociateEnvironmentOperationsRole({
  "EnvironmentName": null
}, context)
```

#### Input
* input `object`
  * EnvironmentName **required**

#### Output
*Output schema unknown*

### ListAvailableSolutionStacks



```js
amazonaws_elasticbeanstalk.ListAvailableSolutionStacks({}, context)
```

#### Input
* input `object`

#### Output
* output [ListAvailableSolutionStacksResultMessage](#listavailablesolutionstacksresultmessage)

### ListAvailableSolutionStacks



```js
amazonaws_elasticbeanstalk.ListAvailableSolutionStacks({}, context)
```

#### Input
* input `object`

#### Output
* output [ListAvailableSolutionStacksResultMessage](#listavailablesolutionstacksresultmessage)

### ListPlatformBranches



```js
amazonaws_elasticbeanstalk.ListPlatformBranches({}, context)
```

#### Input
* input `object`
  * Filters `array`
  * MaxRecords `integer`
  * NextToken `string`

#### Output
* output [ListPlatformBranchesResult](#listplatformbranchesresult)

### ListPlatformBranches



```js
amazonaws_elasticbeanstalk.ListPlatformBranches({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * Filters
    * items [SearchFilter](#searchfilter)
  * MaxRecords
  * NextToken

#### Output
* output [ListPlatformBranchesResult](#listplatformbranchesresult)

### ListPlatformVersions



```js
amazonaws_elasticbeanstalk.ListPlatformVersions({}, context)
```

#### Input
* input `object`
  * Filters `array`
  * MaxRecords `integer`
  * NextToken `string`

#### Output
* output [ListPlatformVersionsResult](#listplatformversionsresult)

### ListPlatformVersions



```js
amazonaws_elasticbeanstalk.ListPlatformVersions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * Filters
    * items [PlatformFilter](#platformfilter)
  * MaxRecords
  * NextToken

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
  * ResourceArn **required** `string`

#### Output
* output [ResourceTagsDescriptionMessage](#resourcetagsdescriptionmessage)

### ListTagsForResource



```js
amazonaws_elasticbeanstalk.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [ResourceTagsDescriptionMessage](#resourcetagsdescriptionmessage)

### RebuildEnvironment



```js
amazonaws_elasticbeanstalk.RebuildEnvironment({}, context)
```

#### Input
* input `object`
  * EnvironmentId `string`
  * EnvironmentName `string`

#### Output
*Output schema unknown*

### RebuildEnvironment



```js
amazonaws_elasticbeanstalk.RebuildEnvironment({}, context)
```

#### Input
* input `object`
  * EnvironmentId
  * EnvironmentName

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
  * EnvironmentId `string`
  * EnvironmentName `string`
  * InfoType **required** `string`

#### Output
*Output schema unknown*

### RequestEnvironmentInfo



```js
amazonaws_elasticbeanstalk.RequestEnvironmentInfo({
  "InfoType": null
}, context)
```

#### Input
* input `object`
  * EnvironmentId
  * EnvironmentName
  * InfoType **required**

#### Output
*Output schema unknown*

### RestartAppServer



```js
amazonaws_elasticbeanstalk.RestartAppServer({}, context)
```

#### Input
* input `object`
  * EnvironmentId `string`
  * EnvironmentName `string`

#### Output
*Output schema unknown*

### RestartAppServer



```js
amazonaws_elasticbeanstalk.RestartAppServer({}, context)
```

#### Input
* input `object`
  * EnvironmentId
  * EnvironmentName

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
  * EnvironmentId `string`
  * EnvironmentName `string`
  * InfoType **required** `string`

#### Output
* output [RetrieveEnvironmentInfoResultMessage](#retrieveenvironmentinforesultmessage)

### RetrieveEnvironmentInfo



```js
amazonaws_elasticbeanstalk.RetrieveEnvironmentInfo({
  "InfoType": null
}, context)
```

#### Input
* input `object`
  * EnvironmentId
  * EnvironmentName
  * InfoType **required**

#### Output
* output [RetrieveEnvironmentInfoResultMessage](#retrieveenvironmentinforesultmessage)

### SwapEnvironmentCNAMEs



```js
amazonaws_elasticbeanstalk.SwapEnvironmentCNAMEs({}, context)
```

#### Input
* input `object`
  * SourceEnvironmentId `string`
  * SourceEnvironmentName `string`
  * DestinationEnvironmentId `string`
  * DestinationEnvironmentName `string`

#### Output
*Output schema unknown*

### SwapEnvironmentCNAMEs



```js
amazonaws_elasticbeanstalk.SwapEnvironmentCNAMEs({}, context)
```

#### Input
* input `object`
  * DestinationEnvironmentId
  * DestinationEnvironmentName
  * SourceEnvironmentId
  * SourceEnvironmentName

#### Output
*Output schema unknown*

### TerminateEnvironment



```js
amazonaws_elasticbeanstalk.TerminateEnvironment({}, context)
```

#### Input
* input `object`
  * EnvironmentId `string`
  * EnvironmentName `string`
  * TerminateResources `boolean`
  * ForceTerminate `boolean`

#### Output
* output [EnvironmentDescription](#environmentdescription)

### TerminateEnvironment



```js
amazonaws_elasticbeanstalk.TerminateEnvironment({}, context)
```

#### Input
* input `object`
  * EnvironmentId
  * EnvironmentName
  * ForceTerminate
  * TerminateResources

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
  * ApplicationName **required** `string`
  * Description `string`

#### Output
* output [ApplicationDescriptionMessage](#applicationdescriptionmessage)

### UpdateApplication



```js
amazonaws_elasticbeanstalk.UpdateApplication({
  "ApplicationName": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * Description

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
  * ApplicationName **required** `string`
  * ResourceLifecycleConfig **required** `object`

#### Output
* output [ApplicationResourceLifecycleDescriptionMessage](#applicationresourcelifecycledescriptionmessage)

### UpdateApplicationResourceLifecycle



```js
amazonaws_elasticbeanstalk.UpdateApplicationResourceLifecycle({
  "ApplicationName": null,
  "ResourceLifecycleConfig": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * ResourceLifecycleConfig **required**
    * ServiceRole
    * VersionLifecycleConfig
      * MaxAgeRule
        * DeleteSourceFromS3
        * Enabled **required**
        * MaxAgeInDays
      * MaxCountRule
        * DeleteSourceFromS3
        * Enabled **required**
        * MaxCount

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
  * ApplicationName **required** `string`
  * VersionLabel **required** `string`
  * Description `string`

#### Output
* output [ApplicationVersionDescriptionMessage](#applicationversiondescriptionmessage)

### UpdateApplicationVersion



```js
amazonaws_elasticbeanstalk.UpdateApplicationVersion({
  "ApplicationName": null,
  "VersionLabel": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * Description
  * VersionLabel **required**

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
  * ApplicationName **required** `string`
  * TemplateName **required** `string`
  * Description `string`
  * OptionSettings `array`
  * OptionsToRemove `array`

#### Output
* output [ConfigurationSettingsDescription](#configurationsettingsdescription)

### UpdateConfigurationTemplate



```js
amazonaws_elasticbeanstalk.UpdateConfigurationTemplate({
  "ApplicationName": null,
  "TemplateName": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * Description
  * OptionSettings
    * items [ConfigurationOptionSetting](#configurationoptionsetting)
  * OptionsToRemove
    * items [OptionSpecification](#optionspecification)
  * TemplateName **required**

#### Output
* output [ConfigurationSettingsDescription](#configurationsettingsdescription)

### UpdateEnvironment



```js
amazonaws_elasticbeanstalk.UpdateEnvironment({}, context)
```

#### Input
* input `object`
  * ApplicationName `string`
  * EnvironmentId `string`
  * EnvironmentName `string`
  * GroupName `string`
  * Description `string`
  * Tier `object`
  * VersionLabel `string`
  * TemplateName `string`
  * SolutionStackName `string`
  * PlatformArn `string`
  * OptionSettings `array`
  * OptionsToRemove `array`

#### Output
* output [EnvironmentDescription](#environmentdescription)

### UpdateEnvironment



```js
amazonaws_elasticbeanstalk.UpdateEnvironment({}, context)
```

#### Input
* input `object`
  * ApplicationName
  * Description
  * EnvironmentId
  * EnvironmentName
  * GroupName
  * OptionSettings
    * items [ConfigurationOptionSetting](#configurationoptionsetting)
  * OptionsToRemove
    * items [OptionSpecification](#optionspecification)
  * PlatformArn
  * SolutionStackName
  * TemplateName
  * Tier
    * Name
    * Type
    * Version
  * VersionLabel

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
  * ResourceArn **required** `string`
  * TagsToAdd `array`
  * TagsToRemove `array`

#### Output
*Output schema unknown*

### UpdateTagsForResource



```js
amazonaws_elasticbeanstalk.UpdateTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagsToAdd
    * items [Tag](#tag)
  * TagsToRemove
    * items [TagKey](#tagkey)

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
  * ApplicationName **required** `string`
  * TemplateName `string`
  * EnvironmentName `string`
  * OptionSettings **required** `array`

#### Output
* output [ConfigurationSettingsValidationMessages](#configurationsettingsvalidationmessages)

### ValidateConfigurationSettings



```js
amazonaws_elasticbeanstalk.ValidateConfigurationSettings({
  "ApplicationName": null,
  "OptionSettings": null
}, context)
```

#### Input
* input `object`
  * ApplicationName **required**
  * EnvironmentName
  * OptionSettings **required**
    * items [ConfigurationOptionSetting](#configurationoptionsetting)
  * TemplateName

#### Output
* output [ConfigurationSettingsValidationMessages](#configurationsettingsvalidationmessages)



## Definitions

### ARN
* ARN `string`

### AbortEnvironmentUpdateMessage
* AbortEnvironmentUpdateMessage `object`: <p/>
  * EnvironmentId
  * EnvironmentName

### AbortableOperationInProgress
* AbortableOperationInProgress `boolean`

### ActionHistoryStatus
* ActionHistoryStatus `string` (values: Completed, Failed, Unknown)

### ActionStatus
* ActionStatus `string` (values: Scheduled, Pending, Running, Unknown)

### ActionType
* ActionType `string` (values: InstanceRefresh, PlatformUpdate, Unknown)

### ApplicationArn
* ApplicationArn `string`

### ApplicationDescription
* ApplicationDescription `object`: Describes the properties of an application.
  * ApplicationArn
  * ApplicationName
  * ConfigurationTemplates
    * items [ConfigurationTemplateName](#configurationtemplatename)
  * DateCreated
  * DateUpdated
  * Description
  * ResourceLifecycleConfig
    * ServiceRole
    * VersionLifecycleConfig
      * MaxAgeRule
        * DeleteSourceFromS3
        * Enabled **required**
        * MaxAgeInDays
      * MaxCountRule
        * DeleteSourceFromS3
        * Enabled **required**
        * MaxCount
  * Versions
    * items [VersionLabel](#versionlabel)

### ApplicationDescriptionList
* ApplicationDescriptionList `array`
  * items [ApplicationDescription](#applicationdescription)

### ApplicationDescriptionMessage
* ApplicationDescriptionMessage `object`: Result message containing a single description of an application.
  * Application
    * ApplicationArn
    * ApplicationName
    * ConfigurationTemplates
      * items [ConfigurationTemplateName](#configurationtemplatename)
    * DateCreated
    * DateUpdated
    * Description
    * ResourceLifecycleConfig
      * ServiceRole
      * VersionLifecycleConfig
        * MaxAgeRule
          * DeleteSourceFromS3
          * Enabled **required**
          * MaxAgeInDays
        * MaxCountRule
          * DeleteSourceFromS3
          * Enabled **required**
          * MaxCount
    * Versions
      * items [VersionLabel](#versionlabel)

### ApplicationDescriptionsMessage
* ApplicationDescriptionsMessage `object`: Result message containing a list of application descriptions.
  * Applications
    * items [ApplicationDescription](#applicationdescription)

### ApplicationMetrics
* ApplicationMetrics `object`: Application request metrics for an AWS Elastic Beanstalk environment.
  * Duration
  * Latency
    * P10
    * P50
    * P75
    * P85
    * P90
    * P95
    * P99
    * P999
  * RequestCount
  * StatusCodes
    * Status2xx
    * Status3xx
    * Status4xx
    * Status5xx

### ApplicationName
* ApplicationName `string`

### ApplicationNamesList
* ApplicationNamesList `array`
  * items [ApplicationName](#applicationname)

### ApplicationResourceLifecycleConfig
* ApplicationResourceLifecycleConfig `object`: The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.
  * ServiceRole
  * VersionLifecycleConfig
    * MaxAgeRule
      * DeleteSourceFromS3
      * Enabled **required**
      * MaxAgeInDays
    * MaxCountRule
      * DeleteSourceFromS3
      * Enabled **required**
      * MaxCount

### ApplicationResourceLifecycleDescriptionMessage
* ApplicationResourceLifecycleDescriptionMessage `object`
  * ApplicationName
  * ResourceLifecycleConfig
    * ServiceRole
    * VersionLifecycleConfig
      * MaxAgeRule
        * DeleteSourceFromS3
        * Enabled **required**
        * MaxAgeInDays
      * MaxCountRule
        * DeleteSourceFromS3
        * Enabled **required**
        * MaxCount

### ApplicationVersionArn
* ApplicationVersionArn `string`

### ApplicationVersionDescription
* ApplicationVersionDescription `object`: Describes the properties of an application version.
  * ApplicationName
  * ApplicationVersionArn
  * BuildArn
  * DateCreated
  * DateUpdated
  * Description
  * SourceBuildInformation
    * SourceLocation **required**
    * SourceRepository **required**
    * SourceType **required**
  * SourceBundle
    * S3Bucket
    * S3Key
  * Status
  * VersionLabel

### ApplicationVersionDescriptionList
* ApplicationVersionDescriptionList `array`
  * items [ApplicationVersionDescription](#applicationversiondescription)

### ApplicationVersionDescriptionMessage
* ApplicationVersionDescriptionMessage `object`: Result message wrapping a single description of an application version.
  * ApplicationVersion
    * ApplicationName
    * ApplicationVersionArn
    * BuildArn
    * DateCreated
    * DateUpdated
    * Description
    * SourceBuildInformation
      * SourceLocation **required**
      * SourceRepository **required**
      * SourceType **required**
    * SourceBundle
      * S3Bucket
      * S3Key
    * Status
    * VersionLabel

### ApplicationVersionDescriptionsMessage
* ApplicationVersionDescriptionsMessage `object`: Result message wrapping a list of application version descriptions.
  * ApplicationVersions
    * items [ApplicationVersionDescription](#applicationversiondescription)
  * NextToken

### ApplicationVersionLifecycleConfig
* ApplicationVersionLifecycleConfig `object`: <p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p>
  * MaxAgeRule
    * DeleteSourceFromS3
    * Enabled **required**
    * MaxAgeInDays
  * MaxCountRule
    * DeleteSourceFromS3
    * Enabled **required**
    * MaxCount

### ApplicationVersionProccess
* ApplicationVersionProccess `boolean`

### ApplicationVersionStatus
* ApplicationVersionStatus `string` (values: Processed, Unprocessed, Failed, Processing, Building)

### ApplyEnvironmentManagedActionRequest
* ApplyEnvironmentManagedActionRequest `object`: Request to execute a scheduled managed action immediately.
  * ActionId **required**
  * EnvironmentId
  * EnvironmentName

### ApplyEnvironmentManagedActionResult
* ApplyEnvironmentManagedActionResult `object`: The result message containing information about the managed action.
  * ActionDescription
  * ActionId
  * ActionType
  * Status

### AssociateEnvironmentOperationsRoleMessage
* AssociateEnvironmentOperationsRoleMessage `object`: Request to add or change the operations role used by an environment.
  * EnvironmentName **required**
  * OperationsRole **required**

### AutoCreateApplication
* AutoCreateApplication `boolean`

### AutoScalingGroup
* AutoScalingGroup `object`: Describes an Auto Scaling launch configuration.
  * Name

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

### BranchName
* BranchName `string`

### BranchOrder
* BranchOrder `integer`

### BuildConfiguration
* BuildConfiguration `object`: Settings for an AWS CodeBuild build.
  * ArtifactName
  * CodeBuildServiceRole **required**
  * ComputeType
  * Image **required**
  * TimeoutInMinutes

### Builder
* Builder `object`: The builder used to build the custom platform.
  * ARN

### CPUUtilization
* CPUUtilization `object`: CPU utilization metrics for an instance.
  * IOWait
  * IRQ
  * Idle
  * Nice
  * Privileged
  * SoftIRQ
  * System
  * User

### Cause
* Cause `string`

### Causes
* Causes `array`
  * items [Cause](#cause)

### CheckDNSAvailabilityMessage
* CheckDNSAvailabilityMessage `object`: Results message indicating whether a CNAME is available.
  * CNAMEPrefix **required**

### CheckDNSAvailabilityResultMessage
* CheckDNSAvailabilityResultMessage `object`: Indicates if the specified CNAME is available.
  * Available
  * FullyQualifiedCNAME

### CnameAvailability
* CnameAvailability `boolean`

### CodeBuildNotInServiceRegionException


### ComposeEnvironmentsMessage
* ComposeEnvironmentsMessage `object`: Request to create or update a group of environments.
  * ApplicationName
  * GroupName
  * VersionLabels
    * items [VersionLabel](#versionlabel)

### ComputeType
* ComputeType `string` (values: BUILD_GENERAL1_SMALL, BUILD_GENERAL1_MEDIUM, BUILD_GENERAL1_LARGE)

### ConfigurationDeploymentStatus
* ConfigurationDeploymentStatus `string` (values: deployed, pending, failed)

### ConfigurationOptionDefaultValue
* ConfigurationOptionDefaultValue `string`

### ConfigurationOptionDescription
* ConfigurationOptionDescription `object`: Describes the possible values for a configuration option.
  * ChangeSeverity
  * DefaultValue
  * MaxLength
  * MaxValue
  * MinValue
  * Name
  * Namespace
  * Regex
    * Label
    * Pattern
  * UserDefined
  * ValueOptions
    * items [ConfigurationOptionPossibleValue](#configurationoptionpossiblevalue)
  * ValueType

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
* ConfigurationOptionSetting `object`: A specification identifying an individual configuration option along with its current value. For a list of possible namespaces and option values, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>. 
  * Namespace
  * OptionName
  * ResourceName
  * Value

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
  * Options
    * items [ConfigurationOptionDescription](#configurationoptiondescription)
  * PlatformArn
  * SolutionStackName

### ConfigurationSettingsDescription
* ConfigurationSettingsDescription `object`: Describes the settings for a configuration set.
  * ApplicationName
  * DateCreated
  * DateUpdated
  * DeploymentStatus
  * Description
  * EnvironmentName
  * OptionSettings
    * items [ConfigurationOptionSetting](#configurationoptionsetting)
  * PlatformArn
  * SolutionStackName
  * TemplateName

### ConfigurationSettingsDescriptionList
* ConfigurationSettingsDescriptionList `array`
  * items [ConfigurationSettingsDescription](#configurationsettingsdescription)

### ConfigurationSettingsDescriptions
* ConfigurationSettingsDescriptions `object`: The results from a request to change the configuration settings of an environment.
  * ConfigurationSettings
    * items [ConfigurationSettingsDescription](#configurationsettingsdescription)

### ConfigurationSettingsValidationMessages
* ConfigurationSettingsValidationMessages `object`: Provides a list of validation messages.
  * Messages
    * items [ValidationMessage](#validationmessage)

### ConfigurationTemplateName
* ConfigurationTemplateName `string`

### ConfigurationTemplateNamesList
* ConfigurationTemplateNamesList `array`
  * items [ConfigurationTemplateName](#configurationtemplatename)

### CreateApplicationMessage
* CreateApplicationMessage `object`: Request to create an application.
  * ApplicationName **required**
  * Description
  * ResourceLifecycleConfig
    * ServiceRole
    * VersionLifecycleConfig
      * MaxAgeRule
        * DeleteSourceFromS3
        * Enabled **required**
        * MaxAgeInDays
      * MaxCountRule
        * DeleteSourceFromS3
        * Enabled **required**
        * MaxCount
  * Tags
    * items [Tag](#tag)

### CreateApplicationVersionMessage
* CreateApplicationVersionMessage `object`: <p/>
  * ApplicationName **required**
  * AutoCreateApplication
  * BuildConfiguration
    * ArtifactName
    * CodeBuildServiceRole **required**
    * ComputeType
    * Image **required**
    * TimeoutInMinutes
  * Description
  * Process
  * SourceBuildInformation
    * SourceLocation **required**
    * SourceRepository **required**
    * SourceType **required**
  * SourceBundle
    * S3Bucket
    * S3Key
  * Tags
    * items [Tag](#tag)
  * VersionLabel **required**

### CreateConfigurationTemplateMessage
* CreateConfigurationTemplateMessage `object`: Request to create a configuration template.
  * ApplicationName **required**
  * Description
  * EnvironmentId
  * OptionSettings
    * items [ConfigurationOptionSetting](#configurationoptionsetting)
  * PlatformArn
  * SolutionStackName
  * SourceConfiguration
    * ApplicationName
    * TemplateName
  * Tags
    * items [Tag](#tag)
  * TemplateName **required**

### CreateEnvironmentMessage
* CreateEnvironmentMessage `object`: <p/>
  * ApplicationName **required**
  * CNAMEPrefix
  * Description
  * EnvironmentName
  * GroupName
  * OperationsRole
  * OptionSettings
    * items [ConfigurationOptionSetting](#configurationoptionsetting)
  * OptionsToRemove
    * items [OptionSpecification](#optionspecification)
  * PlatformArn
  * SolutionStackName
  * Tags
    * items [Tag](#tag)
  * TemplateName
  * Tier
    * Name
    * Type
    * Version
  * VersionLabel

### CreatePlatformVersionRequest
* CreatePlatformVersionRequest `object`: Request to create a new platform version.
  * EnvironmentName
  * OptionSettings
    * items [ConfigurationOptionSetting](#configurationoptionsetting)
  * PlatformDefinitionBundle **required**
    * S3Bucket
    * S3Key
  * PlatformName **required**
  * PlatformVersion **required**
  * Tags
    * items [Tag](#tag)

### CreatePlatformVersionResult
* CreatePlatformVersionResult `object`
  * Builder
    * ARN
  * PlatformSummary
    * OperatingSystemName
    * OperatingSystemVersion
    * PlatformArn
    * PlatformBranchLifecycleState
    * PlatformBranchName
    * PlatformCategory
    * PlatformLifecycleState
    * PlatformOwner
    * PlatformStatus
    * PlatformVersion
    * SupportedAddonList
      * items [SupportedAddon](#supportedaddon)
    * SupportedTierList
      * items [SupportedTier](#supportedtier)

### CreateStorageLocationResultMessage
* CreateStorageLocationResultMessage `object`: Results of a <a>CreateStorageLocationResult</a> call.
  * S3Bucket

### CreationDate
* CreationDate `string`

### CustomAmi
* CustomAmi `object`: A custom AMI available to platforms.
  * ImageId
  * VirtualizationType

### CustomAmiList
* CustomAmiList `array`
  * items [CustomAmi](#customami)

### DNSCname
* DNSCname `string`

### DNSCnamePrefix
* DNSCnamePrefix `string`

### DeleteApplicationMessage
* DeleteApplicationMessage `object`: Request to delete an application.
  * ApplicationName **required**
  * TerminateEnvByForce

### DeleteApplicationVersionMessage
* DeleteApplicationVersionMessage `object`: Request to delete an application version.
  * ApplicationName **required**
  * DeleteSourceBundle
  * VersionLabel **required**

### DeleteConfigurationTemplateMessage
* DeleteConfigurationTemplateMessage `object`: Request to delete a configuration template.
  * ApplicationName **required**
  * TemplateName **required**

### DeleteEnvironmentConfigurationMessage
* DeleteEnvironmentConfigurationMessage `object`: Request to delete a draft environment configuration.
  * ApplicationName **required**
  * EnvironmentName **required**

### DeletePlatformVersionRequest
* DeletePlatformVersionRequest `object`
  * PlatformArn

### DeletePlatformVersionResult
* DeletePlatformVersionResult `object`
  * PlatformSummary
    * OperatingSystemName
    * OperatingSystemVersion
    * PlatformArn
    * PlatformBranchLifecycleState
    * PlatformBranchName
    * PlatformCategory
    * PlatformLifecycleState
    * PlatformOwner
    * PlatformStatus
    * PlatformVersion
    * SupportedAddonList
      * items [SupportedAddon](#supportedaddon)
    * SupportedTierList
      * items [SupportedTier](#supportedtier)

### DeleteSourceBundle
* DeleteSourceBundle `boolean`

### Deployment
* Deployment `object`: Information about an application version deployment.
  * DeploymentId
  * DeploymentTime
  * Status
  * VersionLabel

### DeploymentTimestamp
* DeploymentTimestamp `string`

### DescribeAccountAttributesResult
* DescribeAccountAttributesResult `object`
  * ResourceQuotas
    * ApplicationQuota
      * Maximum
    * ApplicationVersionQuota
      * Maximum
    * ConfigurationTemplateQuota
      * Maximum
    * CustomPlatformQuota
      * Maximum
    * EnvironmentQuota
      * Maximum

### DescribeApplicationVersionsMessage
* DescribeApplicationVersionsMessage `object`: Request to describe application versions.
  * ApplicationName
  * MaxRecords
  * NextToken
  * VersionLabels
    * items [VersionLabel](#versionlabel)

### DescribeApplicationsMessage
* DescribeApplicationsMessage `object`: Request to describe one or more applications.
  * ApplicationNames
    * items [ApplicationName](#applicationname)

### DescribeConfigurationOptionsMessage
* DescribeConfigurationOptionsMessage `object`: Result message containing a list of application version descriptions.
  * ApplicationName
  * EnvironmentName
  * Options
    * items [OptionSpecification](#optionspecification)
  * PlatformArn
  * SolutionStackName
  * TemplateName

### DescribeConfigurationSettingsMessage
* DescribeConfigurationSettingsMessage `object`: Result message containing all of the configuration settings for a specified solution stack or configuration template.
  * ApplicationName **required**
  * EnvironmentName
  * TemplateName

### DescribeEnvironmentHealthRequest
* DescribeEnvironmentHealthRequest `object`: See the example below to learn how to create a request body.
  * AttributeNames
    * items [EnvironmentHealthAttribute](#environmenthealthattribute)
  * EnvironmentId
  * EnvironmentName

### DescribeEnvironmentHealthResult
* DescribeEnvironmentHealthResult `object`: Health details for an AWS Elastic Beanstalk environment.
  * ApplicationMetrics
    * Duration
    * Latency
      * P10
      * P50
      * P75
      * P85
      * P90
      * P95
      * P99
      * P999
    * RequestCount
    * StatusCodes
      * Status2xx
      * Status3xx
      * Status4xx
      * Status5xx
  * Causes
    * items [Cause](#cause)
  * Color
  * EnvironmentName
  * HealthStatus
  * InstancesHealth
    * Degraded
    * Info
    * NoData
    * Ok
    * Pending
    * Severe
    * Unknown
    * Warning
  * RefreshedAt
  * Status

### DescribeEnvironmentManagedActionHistoryRequest
* DescribeEnvironmentManagedActionHistoryRequest `object`: Request to list completed and failed managed actions.
  * EnvironmentId
  * EnvironmentName
  * MaxItems
  * NextToken

### DescribeEnvironmentManagedActionHistoryResult
* DescribeEnvironmentManagedActionHistoryResult `object`: A result message containing a list of completed and failed managed actions.
  * ManagedActionHistoryItems
    * items [ManagedActionHistoryItem](#managedactionhistoryitem)
  * NextToken

### DescribeEnvironmentManagedActionsRequest
* DescribeEnvironmentManagedActionsRequest `object`: Request to list an environment's upcoming and in-progress managed actions.
  * EnvironmentId
  * EnvironmentName
  * Status

### DescribeEnvironmentManagedActionsResult
* DescribeEnvironmentManagedActionsResult `object`: The result message containing a list of managed actions.
  * ManagedActions
    * items [ManagedAction](#managedaction)

### DescribeEnvironmentResourcesMessage
* DescribeEnvironmentResourcesMessage `object`: Request to describe the resources in an environment.
  * EnvironmentId
  * EnvironmentName

### DescribeEnvironmentsMessage
* DescribeEnvironmentsMessage `object`: Request to describe one or more environments.
  * ApplicationName
  * EnvironmentIds
    * items [EnvironmentId](#environmentid)
  * EnvironmentNames
    * items [EnvironmentName](#environmentname)
  * IncludeDeleted
  * IncludedDeletedBackTo
  * MaxRecords
  * NextToken
  * VersionLabel

### DescribeEventsMessage
* DescribeEventsMessage `object`: Request to retrieve a list of events for an environment.
  * ApplicationName
  * EndTime
  * EnvironmentId
  * EnvironmentName
  * MaxRecords
  * NextToken
  * PlatformArn
  * RequestId
  * Severity
  * StartTime
  * TemplateName
  * VersionLabel

### DescribeInstancesHealthRequest
* DescribeInstancesHealthRequest `object`: Parameters for a call to <code>DescribeInstancesHealth</code>.
  * AttributeNames
    * items [InstancesHealthAttribute](#instanceshealthattribute)
  * EnvironmentId
  * EnvironmentName
  * NextToken

### DescribeInstancesHealthResult
* DescribeInstancesHealthResult `object`: Detailed health information about the Amazon EC2 instances in an AWS Elastic Beanstalk environment.
  * InstanceHealthList
    * items [SingleInstanceHealth](#singleinstancehealth)
  * NextToken
  * RefreshedAt

### DescribePlatformVersionRequest
* DescribePlatformVersionRequest `object`
  * PlatformArn

### DescribePlatformVersionResult
* DescribePlatformVersionResult `object`
  * PlatformDescription
    * CustomAmiList
      * items [CustomAmi](#customami)
    * DateCreated
    * DateUpdated
    * Description
    * Frameworks
      * items [PlatformFramework](#platformframework)
    * Maintainer
    * OperatingSystemName
    * OperatingSystemVersion
    * PlatformArn
    * PlatformBranchLifecycleState
    * PlatformBranchName
    * PlatformCategory
    * PlatformLifecycleState
    * PlatformName
    * PlatformOwner
    * PlatformStatus
    * PlatformVersion
    * ProgrammingLanguages
      * items [PlatformProgrammingLanguage](#platformprogramminglanguage)
    * SolutionStackName
    * SupportedAddonList
      * items [SupportedAddon](#supportedaddon)
    * SupportedTierList
      * items [SupportedTier](#supportedtier)

### Description
* Description `string`

### DisassociateEnvironmentOperationsRoleMessage
* DisassociateEnvironmentOperationsRoleMessage `object`: Request to disassociate the operations role from an environment.
  * EnvironmentName **required**

### Ec2InstanceId
* Ec2InstanceId `string`

### ElasticBeanstalkServiceException


### EndpointURL
* EndpointURL `string`

### EnvironmentArn
* EnvironmentArn `string`

### EnvironmentDescription
* EnvironmentDescription `object`: Describes the properties of an environment.
  * AbortableOperationInProgress
  * ApplicationName
  * CNAME
  * DateCreated
  * DateUpdated
  * Description
  * EndpointURL
  * EnvironmentArn
  * EnvironmentId
  * EnvironmentLinks
    * items [EnvironmentLink](#environmentlink)
  * EnvironmentName
  * Health
  * HealthStatus
  * OperationsRole
  * PlatformArn
  * Resources
    * LoadBalancer
      * Domain
      * Listeners
        * items [Listener](#listener)
      * LoadBalancerName
  * SolutionStackName
  * Status
  * TemplateName
  * Tier
    * Name
    * Type
    * Version
  * VersionLabel

### EnvironmentDescriptionsList
* EnvironmentDescriptionsList `array`
  * items [EnvironmentDescription](#environmentdescription)

### EnvironmentDescriptionsMessage
* EnvironmentDescriptionsMessage `object`: Result message containing a list of environment descriptions.
  * Environments
    * items [EnvironmentDescription](#environmentdescription)
  * NextToken

### EnvironmentHealth
* EnvironmentHealth `string` (values: Green, Yellow, Red, Grey)

### EnvironmentHealthAttribute
* EnvironmentHealthAttribute `string` (values: Status, Color, Causes, ApplicationMetrics, InstancesHealth, All, HealthStatus, RefreshedAt)

### EnvironmentHealthAttributes
* EnvironmentHealthAttributes `array`
  * items [EnvironmentHealthAttribute](#environmenthealthattribute)

### EnvironmentHealthStatus
* EnvironmentHealthStatus `string` (values: NoData, Unknown, Pending, Ok, Info, Warning, Degraded, Severe, Suspended)

### EnvironmentId
* EnvironmentId `string`

### EnvironmentIdList
* EnvironmentIdList `array`
  * items [EnvironmentId](#environmentid)

### EnvironmentInfoDescription
* EnvironmentInfoDescription `object`: The information retrieved from the Amazon EC2 instances.
  * Ec2InstanceId
  * InfoType
  * Message
  * SampleTimestamp

### EnvironmentInfoDescriptionList
* EnvironmentInfoDescriptionList `array`
  * items [EnvironmentInfoDescription](#environmentinfodescription)

### EnvironmentInfoType
* EnvironmentInfoType `string` (values: tail, bundle)

### EnvironmentLink
* EnvironmentLink `object`: A link to another environment, defined in the environment's manifest. Links provide connection information in system properties that can be used to connect to another environment in the same group. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.
  * EnvironmentName
  * LinkName

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
  * AutoScalingGroups
    * items [AutoScalingGroup](#autoscalinggroup)
  * EnvironmentName
  * Instances
    * items [Instance](#instance)
  * LaunchConfigurations
    * items [LaunchConfiguration](#launchconfiguration)
  * LaunchTemplates
    * items [LaunchTemplate](#launchtemplate)
  * LoadBalancers
    * items [LoadBalancer](#loadbalancer)
  * Queues
    * items [Queue](#queue)
  * Triggers
    * items [Trigger](#trigger)

### EnvironmentResourceDescriptionsMessage
* EnvironmentResourceDescriptionsMessage `object`: Result message containing a list of environment resource descriptions.
  * EnvironmentResources
    * AutoScalingGroups
      * items [AutoScalingGroup](#autoscalinggroup)
    * EnvironmentName
    * Instances
      * items [Instance](#instance)
    * LaunchConfigurations
      * items [LaunchConfiguration](#launchconfiguration)
    * LaunchTemplates
      * items [LaunchTemplate](#launchtemplate)
    * LoadBalancers
      * items [LoadBalancer](#loadbalancer)
    * Queues
      * items [Queue](#queue)
    * Triggers
      * items [Trigger](#trigger)

### EnvironmentResourcesDescription
* EnvironmentResourcesDescription `object`: Describes the AWS resources in use by this environment. This data is not live data.
  * LoadBalancer
    * Domain
    * Listeners
      * items [Listener](#listener)
    * LoadBalancerName

### EnvironmentStatus
* EnvironmentStatus `string` (values: Aborting, Launching, Updating, LinkingFrom, LinkingTo, Ready, Terminating, Terminated)

### EnvironmentTier
* EnvironmentTier `object`: Describes the properties of an environment tier
  * Name
  * Type
  * Version

### EventDate
* EventDate `string`

### EventDescription
* EventDescription `object`: Describes an event.
  * ApplicationName
  * EnvironmentName
  * EventDate
  * Message
  * PlatformArn
  * RequestId
  * Severity
  * TemplateName
  * VersionLabel

### EventDescriptionList
* EventDescriptionList `array`
  * items [EventDescription](#eventdescription)

### EventDescriptionsMessage
* EventDescriptionsMessage `object`: Result message wrapping a list of event descriptions.
  * Events
    * items [EventDescription](#eventdescription)
  * NextToken

### EventMessage
* EventMessage `string`

### EventSeverity
* EventSeverity `string` (values: TRACE, DEBUG, INFO, WARN, ERROR, FATAL)

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
  * Id

### InstanceHealthList
* InstanceHealthList `array`
  * items [SingleInstanceHealth](#singleinstancehealth)

### InstanceHealthSummary
* InstanceHealthSummary `object`: Represents summary information about the health of an instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>.
  * Degraded
  * Info
  * NoData
  * Ok
  * Pending
  * Severe
  * Unknown
  * Warning

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


### Integer
* Integer `integer`

### InvalidRequestException


### Latency
* Latency `object`: Represents the average latency for the slowest X percent of requests over the last 10 seconds.
  * P10
  * P50
  * P75
  * P85
  * P90
  * P95
  * P99
  * P999

### LaunchConfiguration
* LaunchConfiguration `object`: Describes an Auto Scaling launch configuration.
  * Name

### LaunchConfigurationList
* LaunchConfigurationList `array`
  * items [LaunchConfiguration](#launchconfiguration)

### LaunchTemplate
* LaunchTemplate `object`: Describes an Amazon EC2 launch template.
  * Id

### LaunchTemplateList
* LaunchTemplateList `array`
  * items [LaunchTemplate](#launchtemplate)

### LaunchedAt
* LaunchedAt `string`

### ListAvailableSolutionStacksResultMessage
* ListAvailableSolutionStacksResultMessage `object`: A list of available AWS Elastic Beanstalk solution stacks.
  * SolutionStackDetails
    * items [SolutionStackDescription](#solutionstackdescription)
  * SolutionStacks
    * items [SolutionStackName](#solutionstackname)

### ListPlatformBranchesRequest
* ListPlatformBranchesRequest `object`
  * Filters
    * items [SearchFilter](#searchfilter)
  * MaxRecords
  * NextToken

### ListPlatformBranchesResult
* ListPlatformBranchesResult `object`
  * NextToken
  * PlatformBranchSummaryList
    * items [PlatformBranchSummary](#platformbranchsummary)

### ListPlatformVersionsRequest
* ListPlatformVersionsRequest `object`
  * Filters
    * items [PlatformFilter](#platformfilter)
  * MaxRecords
  * NextToken

### ListPlatformVersionsResult
* ListPlatformVersionsResult `object`
  * NextToken
  * PlatformSummaryList
    * items [PlatformSummary](#platformsummary)

### ListTagsForResourceMessage
* ListTagsForResourceMessage `object`
  * ResourceArn **required**

### Listener
* Listener `object`: Describes the properties of a Listener for the LoadBalancer.
  * Port
  * Protocol

### LoadAverage
* LoadAverage `array`
  * items [LoadAverageValue](#loadaveragevalue)

### LoadAverageValue
* LoadAverageValue `number`

### LoadBalancer
* LoadBalancer `object`: Describes a LoadBalancer.
  * Name

### LoadBalancerDescription
* LoadBalancerDescription `object`: Describes the details of a LoadBalancer.
  * Domain
  * Listeners
    * items [Listener](#listener)
  * LoadBalancerName

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
  * ActionDescription
  * ActionId
  * ActionType
  * Status
  * WindowStartTime

### ManagedActionHistoryItem
* ManagedActionHistoryItem `object`: The record of a completed or failed managed action.
  * ActionDescription
  * ActionId
  * ActionType
  * ExecutedTime
  * FailureDescription
  * FailureType
  * FinishedTime
  * Status

### ManagedActionHistoryItems
* ManagedActionHistoryItems `array`
  * items [ManagedActionHistoryItem](#managedactionhistoryitem)

### ManagedActionHistoryMaxItems
* ManagedActionHistoryMaxItems `integer`

### ManagedActionInvalidStateException


### ManagedActions
* ManagedActions `array`
  * items [ManagedAction](#managedaction)

### MaxAgeRule
* MaxAgeRule `object`: A lifecycle rule that deletes application versions after the specified number of days.
  * DeleteSourceFromS3
  * Enabled **required**
  * MaxAgeInDays

### MaxCountRule
* MaxCountRule `object`: A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.
  * DeleteSourceFromS3
  * Enabled **required**
  * MaxCount

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


### OperationsRole
* OperationsRole `string`

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
  * Label
  * Pattern

### OptionSpecification
* OptionSpecification `object`: A specification identifying an individual configuration option.
  * Namespace
  * OptionName
  * ResourceName

### OptionsSpecifierList
* OptionsSpecifierList `array`
  * items [OptionSpecification](#optionspecification)

### PlatformArn
* PlatformArn `string`

### PlatformBranchLifecycleState
* PlatformBranchLifecycleState `string`

### PlatformBranchMaxRecords
* PlatformBranchMaxRecords `integer`

### PlatformBranchSummary
* PlatformBranchSummary `object`: Summary information about a platform branch.
  * BranchName
  * BranchOrder
  * LifecycleState
  * PlatformName
  * SupportedTierList
    * items [SupportedTier](#supportedtier)

### PlatformBranchSummaryList
* PlatformBranchSummaryList `array`
  * items [PlatformBranchSummary](#platformbranchsummary)

### PlatformCategory
* PlatformCategory `string`

### PlatformDescription
* PlatformDescription `object`: Detailed information about a platform version.
  * CustomAmiList
    * items [CustomAmi](#customami)
  * DateCreated
  * DateUpdated
  * Description
  * Frameworks
    * items [PlatformFramework](#platformframework)
  * Maintainer
  * OperatingSystemName
  * OperatingSystemVersion
  * PlatformArn
  * PlatformBranchLifecycleState
  * PlatformBranchName
  * PlatformCategory
  * PlatformLifecycleState
  * PlatformName
  * PlatformOwner
  * PlatformStatus
  * PlatformVersion
  * ProgrammingLanguages
    * items [PlatformProgrammingLanguage](#platformprogramminglanguage)
  * SolutionStackName
  * SupportedAddonList
    * items [SupportedAddon](#supportedaddon)
  * SupportedTierList
    * items [SupportedTier](#supportedtier)

### PlatformFilter
* PlatformFilter `object`: <p>Describes criteria to restrict the results when listing platform versions.</p> <p>The filter is evaluated as follows: <code>Type Operator Values[1]</code> </p>
  * Operator
  * Type
  * Values
    * items [PlatformFilterValue](#platformfiltervalue)

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
* PlatformFramework `object`: A framework supported by the platform.
  * Name
  * Version

### PlatformFrameworks
* PlatformFrameworks `array`
  * items [PlatformFramework](#platformframework)

### PlatformLifecycleState
* PlatformLifecycleState `string`

### PlatformMaxRecords
* PlatformMaxRecords `integer`

### PlatformName
* PlatformName `string`

### PlatformOwner
* PlatformOwner `string`

### PlatformProgrammingLanguage
* PlatformProgrammingLanguage `object`: A programming language supported by the platform.
  * Name
  * Version

### PlatformProgrammingLanguages
* PlatformProgrammingLanguages `array`
  * items [PlatformProgrammingLanguage](#platformprogramminglanguage)

### PlatformStatus
* PlatformStatus `string` (values: Creating, Failed, Ready, Deleting, Deleted)

### PlatformSummary
* PlatformSummary `object`: Summary information about a platform version.
  * OperatingSystemName
  * OperatingSystemVersion
  * PlatformArn
  * PlatformBranchLifecycleState
  * PlatformBranchName
  * PlatformCategory
  * PlatformLifecycleState
  * PlatformOwner
  * PlatformStatus
  * PlatformVersion
  * SupportedAddonList
    * items [SupportedAddon](#supportedaddon)
  * SupportedTierList
    * items [SupportedTier](#supportedtier)

### PlatformSummaryList
* PlatformSummaryList `array`
  * items [PlatformSummary](#platformsummary)

### PlatformVersion
* PlatformVersion `string`

### PlatformVersionStillReferencedException


### Queue
* Queue `object`: Describes a queue.
  * Name
  * URL

### QueueList
* QueueList `array`
  * items [Queue](#queue)

### RebuildEnvironmentMessage
* RebuildEnvironmentMessage `object`: <p/>
  * EnvironmentId
  * EnvironmentName

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
  * EnvironmentId
  * EnvironmentName
  * InfoType **required**

### RequestId
* RequestId `string`

### ResourceArn
* ResourceArn `string`

### ResourceId
* ResourceId `string`

### ResourceName
* ResourceName `string`

### ResourceNotFoundException


### ResourceQuota
* ResourceQuota `object`: The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It reflects the resource's limits for this account.
  * Maximum

### ResourceQuotas
* ResourceQuotas `object`: A set of per-resource AWS Elastic Beanstalk quotas associated with an AWS account. They reflect Elastic Beanstalk resource limits for this account.
  * ApplicationQuota
    * Maximum
  * ApplicationVersionQuota
    * Maximum
  * ConfigurationTemplateQuota
    * Maximum
  * CustomPlatformQuota
    * Maximum
  * EnvironmentQuota
    * Maximum

### ResourceTagsDescriptionMessage
* ResourceTagsDescriptionMessage `object`
  * ResourceArn
  * ResourceTags
    * items [Tag](#tag)

### ResourceTypeNotSupportedException


### RestartAppServerMessage
* RestartAppServerMessage `object`: <p/>
  * EnvironmentId
  * EnvironmentName

### RetrieveEnvironmentInfoMessage
* RetrieveEnvironmentInfoMessage `object`: Request to download logs retrieved with <a>RequestEnvironmentInfo</a>.
  * EnvironmentId
  * EnvironmentName
  * InfoType **required**

### RetrieveEnvironmentInfoResultMessage
* RetrieveEnvironmentInfoResultMessage `object`: Result message containing a description of the requested environment info.
  * EnvironmentInfo
    * items [EnvironmentInfoDescription](#environmentinfodescription)

### S3Bucket
* S3Bucket `string`

### S3Key
* S3Key `string`

### S3Location
* S3Location `object`: The bucket and key of an item stored in Amazon S3.
  * S3Bucket
  * S3Key

### S3LocationNotInServiceRegionException


### S3SubscriptionRequiredException


### SampleTimestamp
* SampleTimestamp `string`

### SearchFilter
* SearchFilter `object`: <p>Describes criteria to restrict a list of results.</p> <p>For operators that apply a single value to the attribute, the filter is evaluated as follows: <code>Attribute Operator Values[1]</code> </p> <p>Some operators, e.g. <code>in</code>, can apply multiple values. In this case, the filter is evaluated as a logical union (OR) of applications of the operator to the attribute with each one of the values: <code>(Attribute Operator Values[1]) OR (Attribute Operator Values[2]) OR ...</code> </p> <p>The valid values for attributes of <code>SearchFilter</code> depend on the API action. For valid values, see the reference page for the API action you're calling that takes a <code>SearchFilter</code> parameter.</p>
  * Attribute
  * Operator
  * Values
    * items [SearchFilterValue](#searchfiltervalue)

### SearchFilterAttribute
* SearchFilterAttribute `string`

### SearchFilterOperator
* SearchFilterOperator `string`

### SearchFilterValue
* SearchFilterValue `string`

### SearchFilterValues
* SearchFilterValues `array`
  * items [SearchFilterValue](#searchfiltervalue)

### SearchFilters
* SearchFilters `array`
  * items [SearchFilter](#searchfilter)

### SingleInstanceHealth
* SingleInstanceHealth `object`: Detailed health information about an Amazon EC2 instance in your Elastic Beanstalk environment.
  * ApplicationMetrics
    * Duration
    * Latency
      * P10
      * P50
      * P75
      * P85
      * P90
      * P95
      * P99
      * P999
    * RequestCount
    * StatusCodes
      * Status2xx
      * Status3xx
      * Status4xx
      * Status5xx
  * AvailabilityZone
  * Causes
    * items [Cause](#cause)
  * Color
  * Deployment
    * DeploymentId
    * DeploymentTime
    * Status
    * VersionLabel
  * HealthStatus
  * InstanceId
  * InstanceType
  * LaunchedAt
  * System
    * CPUUtilization
      * IOWait
      * IRQ
      * Idle
      * Nice
      * Privileged
      * SoftIRQ
      * System
      * User
    * LoadAverage
      * items [LoadAverageValue](#loadaveragevalue)

### SolutionStackDescription
* SolutionStackDescription `object`: Describes the solution stack.
  * PermittedFileTypes
    * items [FileTypeExtension](#filetypeextension)
  * SolutionStackName

### SolutionStackFileTypeList
* SolutionStackFileTypeList `array`
  * items [FileTypeExtension](#filetypeextension)

### SolutionStackName
* SolutionStackName `string`

### SourceBuildInformation
* SourceBuildInformation `object`: Location of the source code for an application version.
  * SourceLocation **required**
  * SourceRepository **required**
  * SourceType **required**

### SourceBundleDeletionException


### SourceConfiguration
* SourceConfiguration `object`: A specification for an environment configuration.
  * ApplicationName
  * TemplateName

### SourceLocation
* SourceLocation `string`

### SourceRepository
* SourceRepository `string` (values: CodeCommit, S3)

### SourceType
* SourceType `string` (values: Git, Zip)

### StatusCodes
* StatusCodes `object`: Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">Status Code Definitions</a>.
  * Status2xx
  * Status3xx
  * Status4xx
  * Status5xx

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
  * DestinationEnvironmentId
  * DestinationEnvironmentName
  * SourceEnvironmentId
  * SourceEnvironmentName

### SystemStatus
* SystemStatus `object`: CPU utilization and load average metrics for an Amazon EC2 instance.
  * CPUUtilization
    * IOWait
    * IRQ
    * Idle
    * Nice
    * Privileged
    * SoftIRQ
    * System
    * User
  * LoadAverage
    * items [LoadAverageValue](#loadaveragevalue)

### Tag
* Tag `object`: Describes a tag applied to a resource in an environment.
  * Key
  * Value

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
  * EnvironmentId
  * EnvironmentName
  * ForceTerminate
  * TerminateResources

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


### TooManyApplicationsException


### TooManyBucketsException


### TooManyConfigurationTemplatesException


### TooManyEnvironmentsException


### TooManyPlatformsException


### TooManyTagsException


### Trigger
* Trigger `object`: Describes a trigger.
  * Name

### TriggerList
* TriggerList `array`
  * items [Trigger](#trigger)

### UpdateApplicationMessage
* UpdateApplicationMessage `object`: Request to update an application.
  * ApplicationName **required**
  * Description

### UpdateApplicationResourceLifecycleMessage
* UpdateApplicationResourceLifecycleMessage `object`
  * ApplicationName **required**
  * ResourceLifecycleConfig **required**
    * ServiceRole
    * VersionLifecycleConfig
      * MaxAgeRule
        * DeleteSourceFromS3
        * Enabled **required**
        * MaxAgeInDays
      * MaxCountRule
        * DeleteSourceFromS3
        * Enabled **required**
        * MaxCount

### UpdateApplicationVersionMessage
* UpdateApplicationVersionMessage `object`: <p/>
  * ApplicationName **required**
  * Description
  * VersionLabel **required**

### UpdateConfigurationTemplateMessage
* UpdateConfigurationTemplateMessage `object`: The result message containing the options for the specified solution stack.
  * ApplicationName **required**
  * Description
  * OptionSettings
    * items [ConfigurationOptionSetting](#configurationoptionsetting)
  * OptionsToRemove
    * items [OptionSpecification](#optionspecification)
  * TemplateName **required**

### UpdateDate
* UpdateDate `string`

### UpdateEnvironmentMessage
* UpdateEnvironmentMessage `object`: Request to update an environment.
  * ApplicationName
  * Description
  * EnvironmentId
  * EnvironmentName
  * GroupName
  * OptionSettings
    * items [ConfigurationOptionSetting](#configurationoptionsetting)
  * OptionsToRemove
    * items [OptionSpecification](#optionspecification)
  * PlatformArn
  * SolutionStackName
  * TemplateName
  * Tier
    * Name
    * Type
    * Version
  * VersionLabel

### UpdateTagsForResourceMessage
* UpdateTagsForResourceMessage `object`
  * ResourceArn **required**
  * TagsToAdd
    * items [Tag](#tag)
  * TagsToRemove
    * items [TagKey](#tagkey)

### UserDefinedOption
* UserDefinedOption `boolean`

### ValidateConfigurationSettingsMessage
* ValidateConfigurationSettingsMessage `object`: A list of validation messages for a specified configuration template.
  * ApplicationName **required**
  * EnvironmentName
  * OptionSettings **required**
    * items [ConfigurationOptionSetting](#configurationoptionsetting)
  * TemplateName

### ValidationMessage
* ValidationMessage `object`: An error or warning for a desired configuration option value.
  * Message
  * Namespace
  * OptionName
  * Severity

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


