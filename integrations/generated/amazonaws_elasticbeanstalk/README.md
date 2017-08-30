# @datafire/amazonaws_elasticbeanstalk

Client library for AWS Elastic Beanstalk

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_elasticbeanstalk
```

```js
let datafire = require('datafire');
let amazonaws_elasticbeanstalk = require('@datafire/amazonaws_elasticbeanstalk').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
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

#### Parameters
* EnvironmentId (string)
* EnvironmentName (string)

### ApplyEnvironmentManagedAction



```js
amazonaws_elasticbeanstalk.ApplyEnvironmentManagedAction({
  "ActionId": ""
}, context)
```

#### Parameters
* ActionId (string) **required**
* EnvironmentId (string)
* EnvironmentName (string)

### CheckDNSAvailability



```js
amazonaws_elasticbeanstalk.CheckDNSAvailability({
  "CNAMEPrefix": ""
}, context)
```

#### Parameters
* CNAMEPrefix (string) **required**

### ComposeEnvironments



```js
amazonaws_elasticbeanstalk.ComposeEnvironments({}, context)
```

#### Parameters
* ApplicationName (string)
* GroupName (string)
* VersionLabels (array)

### CreateApplication



```js
amazonaws_elasticbeanstalk.CreateApplication({
  "ApplicationName": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* Description (string)
* ResourceLifecycleConfig (object) - The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.

### CreateApplicationVersion



```js
amazonaws_elasticbeanstalk.CreateApplicationVersion({
  "ApplicationName": "",
  "VersionLabel": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* AutoCreateApplication (boolean)
* BuildConfiguration (object) - Settings for an AWS CodeBuild build.
* Description (string)
* Process (boolean)
* SourceBuildInformation (object) - Location of the source code for an application version.
* SourceBundle (object) - The bucket and key of an item stored in Amazon S3.
* VersionLabel (string) **required**

### CreateConfigurationTemplate



```js
amazonaws_elasticbeanstalk.CreateConfigurationTemplate({
  "ApplicationName": "",
  "TemplateName": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* Description (string)
* EnvironmentId (string)
* OptionSettings (array)
* PlatformArn (string)
* SolutionStackName (string)
* SourceConfiguration (object) - A specification for an environment configuration
* TemplateName (string) **required**

### CreateEnvironment



```js
amazonaws_elasticbeanstalk.CreateEnvironment({
  "ApplicationName": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* CNAMEPrefix (string)
* Description (string)
* EnvironmentName (string)
* GroupName (string)
* OptionSettings (array)
* OptionsToRemove (array)
* PlatformArn (string)
* SolutionStackName (string)
* Tags (array)
* TemplateName (string)
* Tier (object) - Describes the properties of an environment tier
* VersionLabel (string)

### CreatePlatformVersion



```js
amazonaws_elasticbeanstalk.CreatePlatformVersion({
  "PlatformName": "",
  "PlatformVersion": "",
  "PlatformDefinitionBundle": {}
}, context)
```

#### Parameters
* EnvironmentName (string)
* OptionSettings (array)
* PlatformDefinitionBundle (object) **required** - The bucket and key of an item stored in Amazon S3.
* PlatformName (string) **required**
* PlatformVersion (string) **required**

### CreateStorageLocation



```js
amazonaws_elasticbeanstalk.CreateStorageLocation({}, context)
```

#### Parameters
*This action has no parameters*

### DeleteApplication



```js
amazonaws_elasticbeanstalk.DeleteApplication({
  "ApplicationName": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* TerminateEnvByForce (boolean)

### DeleteApplicationVersion



```js
amazonaws_elasticbeanstalk.DeleteApplicationVersion({
  "ApplicationName": "",
  "VersionLabel": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* DeleteSourceBundle (boolean)
* VersionLabel (string) **required**

### DeleteConfigurationTemplate



```js
amazonaws_elasticbeanstalk.DeleteConfigurationTemplate({
  "ApplicationName": "",
  "TemplateName": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* TemplateName (string) **required**

### DeleteEnvironmentConfiguration



```js
amazonaws_elasticbeanstalk.DeleteEnvironmentConfiguration({
  "ApplicationName": "",
  "EnvironmentName": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* EnvironmentName (string) **required**

### DeletePlatformVersion



```js
amazonaws_elasticbeanstalk.DeletePlatformVersion({}, context)
```

#### Parameters
* PlatformArn (string)

### DescribeApplicationVersions



```js
amazonaws_elasticbeanstalk.DescribeApplicationVersions({}, context)
```

#### Parameters
* ApplicationName (string)
* MaxRecords (integer)
* NextToken (string)
* VersionLabels (array)

### DescribeApplications



```js
amazonaws_elasticbeanstalk.DescribeApplications({}, context)
```

#### Parameters
* ApplicationNames (array)

### DescribeConfigurationOptions



```js
amazonaws_elasticbeanstalk.DescribeConfigurationOptions({}, context)
```

#### Parameters
* ApplicationName (string)
* EnvironmentName (string)
* Options (array)
* PlatformArn (string)
* SolutionStackName (string)
* TemplateName (string)

### DescribeConfigurationSettings



```js
amazonaws_elasticbeanstalk.DescribeConfigurationSettings({
  "ApplicationName": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* EnvironmentName (string)
* TemplateName (string)

### DescribeEnvironmentHealth



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentHealth({}, context)
```

#### Parameters
* AttributeNames (array)
* EnvironmentId (string)
* EnvironmentName (string)

### DescribeEnvironmentManagedActionHistory



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentManagedActionHistory({}, context)
```

#### Parameters
* EnvironmentId (string)
* EnvironmentName (string)
* MaxItems (integer)
* NextToken (string)

### DescribeEnvironmentManagedActions



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentManagedActions({}, context)
```

#### Parameters
* EnvironmentId (string)
* EnvironmentName (string)
* Status (string)

### DescribeEnvironmentResources



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentResources({}, context)
```

#### Parameters
* EnvironmentId (string)
* EnvironmentName (string)

### DescribeEnvironments



```js
amazonaws_elasticbeanstalk.DescribeEnvironments({}, context)
```

#### Parameters
* ApplicationName (string)
* EnvironmentIds (array)
* EnvironmentNames (array)
* IncludeDeleted (boolean)
* IncludedDeletedBackTo (string)
* VersionLabel (string)

### DescribeEvents



```js
amazonaws_elasticbeanstalk.DescribeEvents({}, context)
```

#### Parameters
* MaxRecords (string)
* NextToken (string)
* ApplicationName (string)
* EndTime (string)
* EnvironmentId (string)
* EnvironmentName (string)
* MaxRecords (integer)
* NextToken (string)
* PlatformArn (string)
* RequestId (string)
* Severity (string)
* StartTime (string)
* TemplateName (string)
* VersionLabel (string)

### DescribeInstancesHealth



```js
amazonaws_elasticbeanstalk.DescribeInstancesHealth({}, context)
```

#### Parameters
* AttributeNames (array)
* EnvironmentId (string)
* EnvironmentName (string)
* NextToken (string)

### DescribePlatformVersion



```js
amazonaws_elasticbeanstalk.DescribePlatformVersion({}, context)
```

#### Parameters
* PlatformArn (string)

### ListAvailableSolutionStacks



```js
amazonaws_elasticbeanstalk.ListAvailableSolutionStacks({}, context)
```

#### Parameters
*This action has no parameters*

### ListPlatformVersions



```js
amazonaws_elasticbeanstalk.ListPlatformVersions({}, context)
```

#### Parameters
* Filters (array)
* MaxRecords (integer)
* NextToken (string)

### RebuildEnvironment



```js
amazonaws_elasticbeanstalk.RebuildEnvironment({}, context)
```

#### Parameters
* EnvironmentId (string)
* EnvironmentName (string)

### RequestEnvironmentInfo



```js
amazonaws_elasticbeanstalk.RequestEnvironmentInfo({
  "InfoType": ""
}, context)
```

#### Parameters
* EnvironmentId (string)
* EnvironmentName (string)
* InfoType (string) **required**

### RestartAppServer



```js
amazonaws_elasticbeanstalk.RestartAppServer({}, context)
```

#### Parameters
* EnvironmentId (string)
* EnvironmentName (string)

### RetrieveEnvironmentInfo



```js
amazonaws_elasticbeanstalk.RetrieveEnvironmentInfo({
  "InfoType": ""
}, context)
```

#### Parameters
* EnvironmentId (string)
* EnvironmentName (string)
* InfoType (string) **required**

### SwapEnvironmentCNAMEs



```js
amazonaws_elasticbeanstalk.SwapEnvironmentCNAMEs({}, context)
```

#### Parameters
* DestinationEnvironmentId (string)
* DestinationEnvironmentName (string)
* SourceEnvironmentId (string)
* SourceEnvironmentName (string)

### TerminateEnvironment



```js
amazonaws_elasticbeanstalk.TerminateEnvironment({}, context)
```

#### Parameters
* EnvironmentId (string)
* EnvironmentName (string)
* ForceTerminate (boolean)
* TerminateResources (boolean)

### UpdateApplication



```js
amazonaws_elasticbeanstalk.UpdateApplication({
  "ApplicationName": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* Description (string)

### UpdateApplicationResourceLifecycle



```js
amazonaws_elasticbeanstalk.UpdateApplicationResourceLifecycle({
  "ApplicationName": "",
  "ResourceLifecycleConfig": {}
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* ResourceLifecycleConfig (object) **required** - The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.

### UpdateApplicationVersion



```js
amazonaws_elasticbeanstalk.UpdateApplicationVersion({
  "ApplicationName": "",
  "VersionLabel": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* Description (string)
* VersionLabel (string) **required**

### UpdateConfigurationTemplate



```js
amazonaws_elasticbeanstalk.UpdateConfigurationTemplate({
  "ApplicationName": "",
  "TemplateName": ""
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* Description (string)
* OptionSettings (array)
* OptionsToRemove (array)
* TemplateName (string) **required**

### UpdateEnvironment



```js
amazonaws_elasticbeanstalk.UpdateEnvironment({}, context)
```

#### Parameters
* ApplicationName (string)
* Description (string)
* EnvironmentId (string)
* EnvironmentName (string)
* GroupName (string)
* OptionSettings (array)
* OptionsToRemove (array)
* PlatformArn (string)
* SolutionStackName (string)
* TemplateName (string)
* Tier (object) - Describes the properties of an environment tier
* VersionLabel (string)

### ValidateConfigurationSettings



```js
amazonaws_elasticbeanstalk.ValidateConfigurationSettings({
  "ApplicationName": "",
  "OptionSettings": []
}, context)
```

#### Parameters
* ApplicationName (string) **required**
* EnvironmentName (string)
* OptionSettings (array) **required**
* TemplateName (string)

