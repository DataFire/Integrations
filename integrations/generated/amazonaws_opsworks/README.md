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

#### Parameters

### AssignVolume



```js
amazonaws_opsworks.AssignVolume({}, context)
```

#### Parameters

### AssociateElasticIp



```js
amazonaws_opsworks.AssociateElasticIp({}, context)
```

#### Parameters

### AttachElasticLoadBalancer



```js
amazonaws_opsworks.AttachElasticLoadBalancer({}, context)
```

#### Parameters

### CloneStack



```js
amazonaws_opsworks.CloneStack({}, context)
```

#### Parameters

### CreateApp



```js
amazonaws_opsworks.CreateApp({}, context)
```

#### Parameters

### CreateDeployment



```js
amazonaws_opsworks.CreateDeployment({}, context)
```

#### Parameters

### CreateInstance



```js
amazonaws_opsworks.CreateInstance({}, context)
```

#### Parameters

### CreateLayer



```js
amazonaws_opsworks.CreateLayer({}, context)
```

#### Parameters

### CreateStack



```js
amazonaws_opsworks.CreateStack({}, context)
```

#### Parameters

### CreateUserProfile



```js
amazonaws_opsworks.CreateUserProfile({}, context)
```

#### Parameters

### DeleteApp



```js
amazonaws_opsworks.DeleteApp({}, context)
```

#### Parameters

### DeleteInstance



```js
amazonaws_opsworks.DeleteInstance({}, context)
```

#### Parameters

### DeleteLayer



```js
amazonaws_opsworks.DeleteLayer({}, context)
```

#### Parameters

### DeleteStack



```js
amazonaws_opsworks.DeleteStack({}, context)
```

#### Parameters

### DeleteUserProfile



```js
amazonaws_opsworks.DeleteUserProfile({}, context)
```

#### Parameters

### DeregisterEcsCluster



```js
amazonaws_opsworks.DeregisterEcsCluster({}, context)
```

#### Parameters

### DeregisterElasticIp



```js
amazonaws_opsworks.DeregisterElasticIp({}, context)
```

#### Parameters

### DeregisterInstance



```js
amazonaws_opsworks.DeregisterInstance({}, context)
```

#### Parameters

### DeregisterRdsDbInstance



```js
amazonaws_opsworks.DeregisterRdsDbInstance({}, context)
```

#### Parameters

### DeregisterVolume



```js
amazonaws_opsworks.DeregisterVolume({}, context)
```

#### Parameters

### DescribeAgentVersions



```js
amazonaws_opsworks.DescribeAgentVersions({}, context)
```

#### Parameters

### DescribeApps



```js
amazonaws_opsworks.DescribeApps({}, context)
```

#### Parameters

### DescribeCommands



```js
amazonaws_opsworks.DescribeCommands({}, context)
```

#### Parameters

### DescribeDeployments



```js
amazonaws_opsworks.DescribeDeployments({}, context)
```

#### Parameters

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

#### Parameters

### DescribeElasticLoadBalancers



```js
amazonaws_opsworks.DescribeElasticLoadBalancers({}, context)
```

#### Parameters

### DescribeInstances



```js
amazonaws_opsworks.DescribeInstances({}, context)
```

#### Parameters

### DescribeLayers



```js
amazonaws_opsworks.DescribeLayers({}, context)
```

#### Parameters

### DescribeLoadBasedAutoScaling



```js
amazonaws_opsworks.DescribeLoadBasedAutoScaling({}, context)
```

#### Parameters

### DescribeMyUserProfile



```js
amazonaws_opsworks.DescribeMyUserProfile({}, context)
```

#### Parameters

### DescribePermissions



```js
amazonaws_opsworks.DescribePermissions({}, context)
```

#### Parameters

### DescribeRaidArrays



```js
amazonaws_opsworks.DescribeRaidArrays({}, context)
```

#### Parameters

### DescribeRdsDbInstances



```js
amazonaws_opsworks.DescribeRdsDbInstances({}, context)
```

#### Parameters

### DescribeServiceErrors



```js
amazonaws_opsworks.DescribeServiceErrors({}, context)
```

#### Parameters

### DescribeStackProvisioningParameters



```js
amazonaws_opsworks.DescribeStackProvisioningParameters({}, context)
```

#### Parameters

### DescribeStackSummary



```js
amazonaws_opsworks.DescribeStackSummary({}, context)
```

#### Parameters

### DescribeStacks



```js
amazonaws_opsworks.DescribeStacks({}, context)
```

#### Parameters

### DescribeTimeBasedAutoScaling



```js
amazonaws_opsworks.DescribeTimeBasedAutoScaling({}, context)
```

#### Parameters

### DescribeUserProfiles



```js
amazonaws_opsworks.DescribeUserProfiles({}, context)
```

#### Parameters

### DescribeVolumes



```js
amazonaws_opsworks.DescribeVolumes({}, context)
```

#### Parameters

### DetachElasticLoadBalancer



```js
amazonaws_opsworks.DetachElasticLoadBalancer({}, context)
```

#### Parameters

### DisassociateElasticIp



```js
amazonaws_opsworks.DisassociateElasticIp({}, context)
```

#### Parameters

### GetHostnameSuggestion



```js
amazonaws_opsworks.GetHostnameSuggestion({}, context)
```

#### Parameters

### GrantAccess



```js
amazonaws_opsworks.GrantAccess({}, context)
```

#### Parameters

### RebootInstance



```js
amazonaws_opsworks.RebootInstance({}, context)
```

#### Parameters

### RegisterEcsCluster



```js
amazonaws_opsworks.RegisterEcsCluster({}, context)
```

#### Parameters

### RegisterElasticIp



```js
amazonaws_opsworks.RegisterElasticIp({}, context)
```

#### Parameters

### RegisterInstance



```js
amazonaws_opsworks.RegisterInstance({}, context)
```

#### Parameters

### RegisterRdsDbInstance



```js
amazonaws_opsworks.RegisterRdsDbInstance({}, context)
```

#### Parameters

### RegisterVolume



```js
amazonaws_opsworks.RegisterVolume({}, context)
```

#### Parameters

### SetLoadBasedAutoScaling



```js
amazonaws_opsworks.SetLoadBasedAutoScaling({}, context)
```

#### Parameters

### SetPermission



```js
amazonaws_opsworks.SetPermission({}, context)
```

#### Parameters

### SetTimeBasedAutoScaling



```js
amazonaws_opsworks.SetTimeBasedAutoScaling({}, context)
```

#### Parameters

### StartInstance



```js
amazonaws_opsworks.StartInstance({}, context)
```

#### Parameters

### StartStack



```js
amazonaws_opsworks.StartStack({}, context)
```

#### Parameters

### StopInstance



```js
amazonaws_opsworks.StopInstance({}, context)
```

#### Parameters

### StopStack



```js
amazonaws_opsworks.StopStack({}, context)
```

#### Parameters

### UnassignInstance



```js
amazonaws_opsworks.UnassignInstance({}, context)
```

#### Parameters

### UnassignVolume



```js
amazonaws_opsworks.UnassignVolume({}, context)
```

#### Parameters

### UpdateApp



```js
amazonaws_opsworks.UpdateApp({}, context)
```

#### Parameters

### UpdateElasticIp



```js
amazonaws_opsworks.UpdateElasticIp({}, context)
```

#### Parameters

### UpdateInstance



```js
amazonaws_opsworks.UpdateInstance({}, context)
```

#### Parameters

### UpdateLayer



```js
amazonaws_opsworks.UpdateLayer({}, context)
```

#### Parameters

### UpdateMyUserProfile



```js
amazonaws_opsworks.UpdateMyUserProfile({}, context)
```

#### Parameters

### UpdateRdsDbInstance



```js
amazonaws_opsworks.UpdateRdsDbInstance({}, context)
```

#### Parameters

### UpdateStack



```js
amazonaws_opsworks.UpdateStack({}, context)
```

#### Parameters

### UpdateUserProfile



```js
amazonaws_opsworks.UpdateUserProfile({}, context)
```

#### Parameters

### UpdateVolume



```js
amazonaws_opsworks.UpdateVolume({}, context)
```

#### Parameters

