# @datafire/amazonaws_opsworks

Client library for AWS OpsWorks

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_opsworks
```

```js
let datafire = require('datafire');
let amazonaws_opsworks = require('@datafire/amazonaws_opsworks').actions;
let context = new datafire.Context();

amazonaws_opsworks.AssignInstance({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS OpsWorks</fullname> <p>Welcome to the <i>AWS OpsWorks Stacks API Reference</i>. This guide provides descriptions, syntax, and usage examples for AWS OpsWorks Stacks actions and data types, including common parameters and error codes. </p> <p>AWS OpsWorks Stacks is an application management service that provides an integrated experience for overseeing the complete application lifecycle. For information about this product, go to the <a href="http://aws.amazon.com/opsworks/">AWS OpsWorks</a> details page. </p> <p> <b>SDKs and CLI</b> </p> <p>The most common way to use the AWS OpsWorks Stacks API is by using the AWS Command Line Interface (CLI) or by using one of the AWS SDKs to implement applications in your preferred language. For more information, see:</p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">AWS CLI</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/opsworks/AWSOpsWorksClient.html">AWS SDK for Java</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/sdkfornet/latest/apidocs/html/N_Amazon_OpsWorks.htm">AWS SDK for .NET</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/aws-sdk-php-2/latest/class-Aws.OpsWorks.OpsWorksClient.html">AWS SDK for PHP 2</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/sdkforruby/api/">AWS SDK for Ruby</a> </p> </li> <li> <p> <a href="http://aws.amazon.com/documentation/sdkforjavascript/">AWS SDK for Node.js</a> </p> </li> <li> <p> <a href="http://docs.pythonboto.org/en/latest/ref/opsworks.html">AWS SDK for Python(Boto)</a> </p> </li> </ul> <p> <b>Endpoints</b> </p> <p>AWS OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Stacks can only be accessed or managed within the endpoint in which they are created.</p> <ul> <li> <p>opsworks.us-east-1.amazonaws.com</p> </li> <li> <p>opsworks.us-east-2.amazonaws.com</p> </li> <li> <p>opsworks.us-west-1.amazonaws.com</p> </li> <li> <p>opsworks.us-west-2.amazonaws.com</p> </li> <li> <p>opsworks.eu-west-1.amazonaws.com</p> </li> <li> <p>opsworks.eu-west-2.amazonaws.com</p> </li> <li> <p>opsworks.eu-central-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-northeast-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-northeast-2.amazonaws.com</p> </li> <li> <p>opsworks.ap-south-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-southeast-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-southeast-2.amazonaws.com</p> </li> <li> <p>opsworks.sa-east-1.amazonaws.com</p> </li> </ul> <p> <b>Chef Versions</b> </p> <p>When you call <a>CreateStack</a>, <a>CloneStack</a>, or <a>UpdateStack</a> we recommend you use the <code>ConfigurationManager</code> parameter to specify the Chef version. The recommended and default value for Linux stacks is currently 12. Windows stacks use Chef 12.2. For more information, see <a href="http://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-chef11.html">Chef Versions</a>.</p> <note> <p>You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks to Chef 12 as soon as possible.</p> </note>

## Actions
### AssignInstance



```js
amazonaws_opsworks.AssignInstance({}, context)
```


### AssignVolume



```js
amazonaws_opsworks.AssignVolume({}, context)
```


### AssociateElasticIp



```js
amazonaws_opsworks.AssociateElasticIp({}, context)
```


### AttachElasticLoadBalancer



```js
amazonaws_opsworks.AttachElasticLoadBalancer({}, context)
```


### CloneStack



```js
amazonaws_opsworks.CloneStack({}, context)
```


### CreateApp



```js
amazonaws_opsworks.CreateApp({}, context)
```


### CreateDeployment



```js
amazonaws_opsworks.CreateDeployment({}, context)
```


### CreateInstance



```js
amazonaws_opsworks.CreateInstance({}, context)
```


### CreateLayer



```js
amazonaws_opsworks.CreateLayer({}, context)
```


### CreateStack



```js
amazonaws_opsworks.CreateStack({}, context)
```


### CreateUserProfile



```js
amazonaws_opsworks.CreateUserProfile({}, context)
```


### DeleteApp



```js
amazonaws_opsworks.DeleteApp({}, context)
```


### DeleteInstance



```js
amazonaws_opsworks.DeleteInstance({}, context)
```


### DeleteLayer



```js
amazonaws_opsworks.DeleteLayer({}, context)
```


### DeleteStack



```js
amazonaws_opsworks.DeleteStack({}, context)
```


### DeleteUserProfile



```js
amazonaws_opsworks.DeleteUserProfile({}, context)
```


### DeregisterEcsCluster



```js
amazonaws_opsworks.DeregisterEcsCluster({}, context)
```


### DeregisterElasticIp



```js
amazonaws_opsworks.DeregisterElasticIp({}, context)
```


### DeregisterInstance



```js
amazonaws_opsworks.DeregisterInstance({}, context)
```


### DeregisterRdsDbInstance



```js
amazonaws_opsworks.DeregisterRdsDbInstance({}, context)
```


### DeregisterVolume



```js
amazonaws_opsworks.DeregisterVolume({}, context)
```


### DescribeAgentVersions



```js
amazonaws_opsworks.DescribeAgentVersions({}, context)
```


### DescribeApps



```js
amazonaws_opsworks.DescribeApps({}, context)
```


### DescribeCommands



```js
amazonaws_opsworks.DescribeCommands({}, context)
```


### DescribeDeployments



```js
amazonaws_opsworks.DescribeDeployments({}, context)
```


### DescribeEcsClusters



```js
amazonaws_opsworks.DescribeEcsClusters({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### DescribeElasticIps



```js
amazonaws_opsworks.DescribeElasticIps({}, context)
```


### DescribeElasticLoadBalancers



```js
amazonaws_opsworks.DescribeElasticLoadBalancers({}, context)
```


### DescribeInstances



```js
amazonaws_opsworks.DescribeInstances({}, context)
```


### DescribeLayers



```js
amazonaws_opsworks.DescribeLayers({}, context)
```


### DescribeLoadBasedAutoScaling



```js
amazonaws_opsworks.DescribeLoadBasedAutoScaling({}, context)
```


### DescribeMyUserProfile



```js
amazonaws_opsworks.DescribeMyUserProfile({}, context)
```


### DescribePermissions



```js
amazonaws_opsworks.DescribePermissions({}, context)
```


### DescribeRaidArrays



```js
amazonaws_opsworks.DescribeRaidArrays({}, context)
```


### DescribeRdsDbInstances



```js
amazonaws_opsworks.DescribeRdsDbInstances({}, context)
```


### DescribeServiceErrors



```js
amazonaws_opsworks.DescribeServiceErrors({}, context)
```


### DescribeStackProvisioningParameters



```js
amazonaws_opsworks.DescribeStackProvisioningParameters({}, context)
```


### DescribeStackSummary



```js
amazonaws_opsworks.DescribeStackSummary({}, context)
```


### DescribeStacks



```js
amazonaws_opsworks.DescribeStacks({}, context)
```


### DescribeTimeBasedAutoScaling



```js
amazonaws_opsworks.DescribeTimeBasedAutoScaling({}, context)
```


### DescribeUserProfiles



```js
amazonaws_opsworks.DescribeUserProfiles({}, context)
```


### DescribeVolumes



```js
amazonaws_opsworks.DescribeVolumes({}, context)
```


### DetachElasticLoadBalancer



```js
amazonaws_opsworks.DetachElasticLoadBalancer({}, context)
```


### DisassociateElasticIp



```js
amazonaws_opsworks.DisassociateElasticIp({}, context)
```


### GetHostnameSuggestion



```js
amazonaws_opsworks.GetHostnameSuggestion({}, context)
```


### GrantAccess



```js
amazonaws_opsworks.GrantAccess({}, context)
```


### RebootInstance



```js
amazonaws_opsworks.RebootInstance({}, context)
```


### RegisterEcsCluster



```js
amazonaws_opsworks.RegisterEcsCluster({}, context)
```


### RegisterElasticIp



```js
amazonaws_opsworks.RegisterElasticIp({}, context)
```


### RegisterInstance



```js
amazonaws_opsworks.RegisterInstance({}, context)
```


### RegisterRdsDbInstance



```js
amazonaws_opsworks.RegisterRdsDbInstance({}, context)
```


### RegisterVolume



```js
amazonaws_opsworks.RegisterVolume({}, context)
```


### SetLoadBasedAutoScaling



```js
amazonaws_opsworks.SetLoadBasedAutoScaling({}, context)
```


### SetPermission



```js
amazonaws_opsworks.SetPermission({}, context)
```


### SetTimeBasedAutoScaling



```js
amazonaws_opsworks.SetTimeBasedAutoScaling({}, context)
```


### StartInstance



```js
amazonaws_opsworks.StartInstance({}, context)
```


### StartStack



```js
amazonaws_opsworks.StartStack({}, context)
```


### StopInstance



```js
amazonaws_opsworks.StopInstance({}, context)
```


### StopStack



```js
amazonaws_opsworks.StopStack({}, context)
```


### UnassignInstance



```js
amazonaws_opsworks.UnassignInstance({}, context)
```


### UnassignVolume



```js
amazonaws_opsworks.UnassignVolume({}, context)
```


### UpdateApp



```js
amazonaws_opsworks.UpdateApp({}, context)
```


### UpdateElasticIp



```js
amazonaws_opsworks.UpdateElasticIp({}, context)
```


### UpdateInstance



```js
amazonaws_opsworks.UpdateInstance({}, context)
```


### UpdateLayer



```js
amazonaws_opsworks.UpdateLayer({}, context)
```


### UpdateMyUserProfile



```js
amazonaws_opsworks.UpdateMyUserProfile({}, context)
```


### UpdateRdsDbInstance



```js
amazonaws_opsworks.UpdateRdsDbInstance({}, context)
```


### UpdateStack



```js
amazonaws_opsworks.UpdateStack({}, context)
```


### UpdateUserProfile



```js
amazonaws_opsworks.UpdateUserProfile({}, context)
```


### UpdateVolume



```js
amazonaws_opsworks.UpdateVolume({}, context)
```


