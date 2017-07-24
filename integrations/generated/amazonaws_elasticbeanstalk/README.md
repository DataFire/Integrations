# @datafire/amazonaws_elasticbeanstalk

Client library for AWS Elastic Beanstalk

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_elasticbeanstalk
```

```js
let datafire = require('datafire');
let amazonaws_elasticbeanstalk = require('@datafire/amazonaws_elasticbeanstalk').actions;
let context = new datafire.Context();

amazonaws_elasticbeanstalk.AbortEnvironmentUpdate({}, context).then(data => {
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

### ApplyEnvironmentManagedAction



```js
amazonaws_elasticbeanstalk.ApplyEnvironmentManagedAction({}, context)
```

#### Parameters

### CheckDNSAvailability



```js
amazonaws_elasticbeanstalk.CheckDNSAvailability({}, context)
```

#### Parameters

### ComposeEnvironments



```js
amazonaws_elasticbeanstalk.ComposeEnvironments({}, context)
```

#### Parameters

### CreateApplication



```js
amazonaws_elasticbeanstalk.CreateApplication({}, context)
```

#### Parameters

### CreateApplicationVersion



```js
amazonaws_elasticbeanstalk.CreateApplicationVersion({}, context)
```

#### Parameters

### CreateConfigurationTemplate



```js
amazonaws_elasticbeanstalk.CreateConfigurationTemplate({}, context)
```

#### Parameters

### CreateEnvironment



```js
amazonaws_elasticbeanstalk.CreateEnvironment({}, context)
```

#### Parameters

### CreatePlatformVersion



```js
amazonaws_elasticbeanstalk.CreatePlatformVersion({}, context)
```

#### Parameters

### CreateStorageLocation



```js
amazonaws_elasticbeanstalk.CreateStorageLocation({}, context)
```

#### Parameters

### DeleteApplication



```js
amazonaws_elasticbeanstalk.DeleteApplication({}, context)
```

#### Parameters

### DeleteApplicationVersion



```js
amazonaws_elasticbeanstalk.DeleteApplicationVersion({}, context)
```

#### Parameters

### DeleteConfigurationTemplate



```js
amazonaws_elasticbeanstalk.DeleteConfigurationTemplate({}, context)
```

#### Parameters

### DeleteEnvironmentConfiguration



```js
amazonaws_elasticbeanstalk.DeleteEnvironmentConfiguration({}, context)
```

#### Parameters

### DeletePlatformVersion



```js
amazonaws_elasticbeanstalk.DeletePlatformVersion({}, context)
```

#### Parameters

### DescribeApplicationVersions



```js
amazonaws_elasticbeanstalk.DescribeApplicationVersions({}, context)
```

#### Parameters

### DescribeApplications



```js
amazonaws_elasticbeanstalk.DescribeApplications({}, context)
```

#### Parameters

### DescribeConfigurationOptions



```js
amazonaws_elasticbeanstalk.DescribeConfigurationOptions({}, context)
```

#### Parameters

### DescribeConfigurationSettings



```js
amazonaws_elasticbeanstalk.DescribeConfigurationSettings({}, context)
```

#### Parameters

### DescribeEnvironmentHealth



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentHealth({}, context)
```

#### Parameters

### DescribeEnvironmentManagedActionHistory



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentManagedActionHistory({}, context)
```

#### Parameters

### DescribeEnvironmentManagedActions



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentManagedActions({}, context)
```

#### Parameters

### DescribeEnvironmentResources



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentResources({}, context)
```

#### Parameters

### DescribeEnvironments



```js
amazonaws_elasticbeanstalk.DescribeEnvironments({}, context)
```

#### Parameters

### DescribeEvents



```js
amazonaws_elasticbeanstalk.DescribeEvents({}, context)
```

#### Parameters
* MaxRecords (string)
* NextToken (string)

### DescribeInstancesHealth



```js
amazonaws_elasticbeanstalk.DescribeInstancesHealth({}, context)
```

#### Parameters

### DescribePlatformVersion



```js
amazonaws_elasticbeanstalk.DescribePlatformVersion({}, context)
```

#### Parameters

### ListAvailableSolutionStacks



```js
amazonaws_elasticbeanstalk.ListAvailableSolutionStacks({}, context)
```

#### Parameters

### ListPlatformVersions



```js
amazonaws_elasticbeanstalk.ListPlatformVersions({}, context)
```

#### Parameters

### RebuildEnvironment



```js
amazonaws_elasticbeanstalk.RebuildEnvironment({}, context)
```

#### Parameters

### RequestEnvironmentInfo



```js
amazonaws_elasticbeanstalk.RequestEnvironmentInfo({}, context)
```

#### Parameters

### RestartAppServer



```js
amazonaws_elasticbeanstalk.RestartAppServer({}, context)
```

#### Parameters

### RetrieveEnvironmentInfo



```js
amazonaws_elasticbeanstalk.RetrieveEnvironmentInfo({}, context)
```

#### Parameters

### SwapEnvironmentCNAMEs



```js
amazonaws_elasticbeanstalk.SwapEnvironmentCNAMEs({}, context)
```

#### Parameters

### TerminateEnvironment



```js
amazonaws_elasticbeanstalk.TerminateEnvironment({}, context)
```

#### Parameters

### UpdateApplication



```js
amazonaws_elasticbeanstalk.UpdateApplication({}, context)
```

#### Parameters

### UpdateApplicationResourceLifecycle



```js
amazonaws_elasticbeanstalk.UpdateApplicationResourceLifecycle({}, context)
```

#### Parameters

### UpdateApplicationVersion



```js
amazonaws_elasticbeanstalk.UpdateApplicationVersion({}, context)
```

#### Parameters

### UpdateConfigurationTemplate



```js
amazonaws_elasticbeanstalk.UpdateConfigurationTemplate({}, context)
```

#### Parameters

### UpdateEnvironment



```js
amazonaws_elasticbeanstalk.UpdateEnvironment({}, context)
```

#### Parameters

### ValidateConfigurationSettings



```js
amazonaws_elasticbeanstalk.ValidateConfigurationSettings({}, context)
```

#### Parameters

