# @datafire/amazonaws_elasticbeanstalk

Client library for AWS Elastic Beanstalk

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_elasticbeanstalk
```

```js
let datafire = require('datafire');
let amazonaws_elasticbeanstalk = require('@datafire/amazonaws_elasticbeanstalk').create();

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


### ApplyEnvironmentManagedAction



```js
amazonaws_elasticbeanstalk.ApplyEnvironmentManagedAction({}, context)
```


### CheckDNSAvailability



```js
amazonaws_elasticbeanstalk.CheckDNSAvailability({}, context)
```


### ComposeEnvironments



```js
amazonaws_elasticbeanstalk.ComposeEnvironments({}, context)
```


### CreateApplication



```js
amazonaws_elasticbeanstalk.CreateApplication({}, context)
```


### CreateApplicationVersion



```js
amazonaws_elasticbeanstalk.CreateApplicationVersion({}, context)
```


### CreateConfigurationTemplate



```js
amazonaws_elasticbeanstalk.CreateConfigurationTemplate({}, context)
```


### CreateEnvironment



```js
amazonaws_elasticbeanstalk.CreateEnvironment({}, context)
```


### CreatePlatformVersion



```js
amazonaws_elasticbeanstalk.CreatePlatformVersion({}, context)
```


### CreateStorageLocation



```js
amazonaws_elasticbeanstalk.CreateStorageLocation({}, context)
```


### DeleteApplication



```js
amazonaws_elasticbeanstalk.DeleteApplication({}, context)
```


### DeleteApplicationVersion



```js
amazonaws_elasticbeanstalk.DeleteApplicationVersion({}, context)
```


### DeleteConfigurationTemplate



```js
amazonaws_elasticbeanstalk.DeleteConfigurationTemplate({}, context)
```


### DeleteEnvironmentConfiguration



```js
amazonaws_elasticbeanstalk.DeleteEnvironmentConfiguration({}, context)
```


### DeletePlatformVersion



```js
amazonaws_elasticbeanstalk.DeletePlatformVersion({}, context)
```


### DescribeApplicationVersions



```js
amazonaws_elasticbeanstalk.DescribeApplicationVersions({}, context)
```


### DescribeApplications



```js
amazonaws_elasticbeanstalk.DescribeApplications({}, context)
```


### DescribeConfigurationOptions



```js
amazonaws_elasticbeanstalk.DescribeConfigurationOptions({}, context)
```


### DescribeConfigurationSettings



```js
amazonaws_elasticbeanstalk.DescribeConfigurationSettings({}, context)
```


### DescribeEnvironmentHealth



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentHealth({}, context)
```


### DescribeEnvironmentManagedActionHistory



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentManagedActionHistory({}, context)
```


### DescribeEnvironmentManagedActions



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentManagedActions({}, context)
```


### DescribeEnvironmentResources



```js
amazonaws_elasticbeanstalk.DescribeEnvironmentResources({}, context)
```


### DescribeEnvironments



```js
amazonaws_elasticbeanstalk.DescribeEnvironments({}, context)
```


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


### DescribePlatformVersion



```js
amazonaws_elasticbeanstalk.DescribePlatformVersion({}, context)
```


### ListAvailableSolutionStacks



```js
amazonaws_elasticbeanstalk.ListAvailableSolutionStacks({}, context)
```


### ListPlatformVersions



```js
amazonaws_elasticbeanstalk.ListPlatformVersions({}, context)
```


### RebuildEnvironment



```js
amazonaws_elasticbeanstalk.RebuildEnvironment({}, context)
```


### RequestEnvironmentInfo



```js
amazonaws_elasticbeanstalk.RequestEnvironmentInfo({}, context)
```


### RestartAppServer



```js
amazonaws_elasticbeanstalk.RestartAppServer({}, context)
```


### RetrieveEnvironmentInfo



```js
amazonaws_elasticbeanstalk.RetrieveEnvironmentInfo({}, context)
```


### SwapEnvironmentCNAMEs



```js
amazonaws_elasticbeanstalk.SwapEnvironmentCNAMEs({}, context)
```


### TerminateEnvironment



```js
amazonaws_elasticbeanstalk.TerminateEnvironment({}, context)
```


### UpdateApplication



```js
amazonaws_elasticbeanstalk.UpdateApplication({}, context)
```


### UpdateApplicationResourceLifecycle



```js
amazonaws_elasticbeanstalk.UpdateApplicationResourceLifecycle({}, context)
```


### UpdateApplicationVersion



```js
amazonaws_elasticbeanstalk.UpdateApplicationVersion({}, context)
```


### UpdateConfigurationTemplate



```js
amazonaws_elasticbeanstalk.UpdateConfigurationTemplate({}, context)
```


### UpdateEnvironment



```js
amazonaws_elasticbeanstalk.UpdateEnvironment({}, context)
```


### ValidateConfigurationSettings



```js
amazonaws_elasticbeanstalk.ValidateConfigurationSettings({}, context)
```


