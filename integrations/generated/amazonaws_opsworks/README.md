# @datafire/amazonaws_opsworks

Client library for AWS OpsWorks

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_opsworks
```

```js
let datafire = require('datafire');
let amazonaws_opsworks = require('@datafire/amazonaws_opsworks').create();

amazonaws_opsworks.AssignInstance({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS OpsWorks</fullname> <p>Welcome to the <i>AWS OpsWorks Stacks API Reference</i>. This guide provides descriptions, syntax, and usage examples for AWS OpsWorks Stacks actions and data types, including common parameters and error codes. </p> <p>AWS OpsWorks Stacks is an application management service that provides an integrated experience for overseeing the complete application lifecycle. For information about this product, go to the <a href="http://aws.amazon.com/opsworks/">AWS OpsWorks</a> details page. </p> <p> <b>SDKs and CLI</b> </p> <p>The most common way to use the AWS OpsWorks Stacks API is by using the AWS Command Line Interface (CLI) or by using one of the AWS SDKs to implement applications in your preferred language. For more information, see:</p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">AWS CLI</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/opsworks/AWSOpsWorksClient.html">AWS SDK for Java</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/sdkfornet/latest/apidocs/html/N_Amazon_OpsWorks.htm">AWS SDK for .NET</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/aws-sdk-php-2/latest/class-Aws.OpsWorks.OpsWorksClient.html">AWS SDK for PHP 2</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/sdkforruby/api/">AWS SDK for Ruby</a> </p> </li> <li> <p> <a href="http://aws.amazon.com/documentation/sdkforjavascript/">AWS SDK for Node.js</a> </p> </li> <li> <p> <a href="http://docs.pythonboto.org/en/latest/ref/opsworks.html">AWS SDK for Python(Boto)</a> </p> </li> </ul> <p> <b>Endpoints</b> </p> <p>AWS OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Stacks can only be accessed or managed within the endpoint in which they are created.</p> <ul> <li> <p>opsworks.us-east-1.amazonaws.com</p> </li> <li> <p>opsworks.us-east-2.amazonaws.com</p> </li> <li> <p>opsworks.us-west-1.amazonaws.com</p> </li> <li> <p>opsworks.us-west-2.amazonaws.com</p> </li> <li> <p>opsworks.eu-west-1.amazonaws.com</p> </li> <li> <p>opsworks.eu-west-2.amazonaws.com</p> </li> <li> <p>opsworks.eu-central-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-northeast-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-northeast-2.amazonaws.com</p> </li> <li> <p>opsworks.ap-south-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-southeast-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-southeast-2.amazonaws.com</p> </li> <li> <p>opsworks.sa-east-1.amazonaws.com</p> </li> </ul> <p> <b>Chef Versions</b> </p> <p>When you call <a>CreateStack</a>, <a>CloneStack</a>, or <a>UpdateStack</a> we recommend you use the <code>ConfigurationManager</code> parameter to specify the Chef version. The recommended and default value for Linux stacks is currently 12. Windows stacks use Chef 12.2. For more information, see <a href="http://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-chef11.html">Chef Versions</a>.</p> <note> <p>You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks to Chef 12 as soon as possible.</p> </note>

## Actions
### AssignInstance



```js
amazonaws_opsworks.AssignInstance({
  "InstanceId": "",
  "LayerIds": []
}, context)
```

#### Parameters
* InstanceId (string) **required**
* LayerIds (array) **required**

### AssignVolume



```js
amazonaws_opsworks.AssignVolume({
  "VolumeId": ""
}, context)
```

#### Parameters
* InstanceId (string)
* VolumeId (string) **required**

### AssociateElasticIp



```js
amazonaws_opsworks.AssociateElasticIp({
  "ElasticIp": ""
}, context)
```

#### Parameters
* ElasticIp (string) **required**
* InstanceId (string)

### AttachElasticLoadBalancer



```js
amazonaws_opsworks.AttachElasticLoadBalancer({
  "ElasticLoadBalancerName": "",
  "LayerId": ""
}, context)
```

#### Parameters
* ElasticLoadBalancerName (string) **required**
* LayerId (string) **required**

### CloneStack



```js
amazonaws_opsworks.CloneStack({
  "SourceStackId": "",
  "ServiceRoleArn": ""
}, context)
```

#### Parameters
* AgentVersion (string)
* Attributes (array)
* ChefConfiguration (object) - Describes the Chef configuration.
* CloneAppIds (array)
* ClonePermissions (boolean)
* ConfigurationManager (object) - Describes the configuration manager.
* CustomCookbooksSource (object) - Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="http://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="http://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>.
* CustomJson (string)
* DefaultAvailabilityZone (string)
* DefaultInstanceProfileArn (string)
* DefaultOs (string)
* DefaultRootDeviceType (string)
* DefaultSshKeyName (string)
* DefaultSubnetId (string)
* HostnameTheme (string)
* Name (string)
* Region (string)
* ServiceRoleArn (string) **required**
* SourceStackId (string) **required**
* UseCustomCookbooks (boolean)
* UseOpsworksSecurityGroups (boolean)
* VpcId (string)

### CreateApp



```js
amazonaws_opsworks.CreateApp({
  "StackId": "",
  "Name": "",
  "Type": ""
}, context)
```

#### Parameters
* AppSource (object) - Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="http://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="http://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>.
* Attributes (array)
* DataSources (array)
* Description (string)
* Domains (array)
* EnableSsl (boolean)
* Environment (array)
* Name (string) **required**
* Shortname (string)
* SslConfiguration (object) - Describes an app's SSL configuration.
* StackId (string) **required**
* Type (string) **required**

### CreateDeployment



```js
amazonaws_opsworks.CreateDeployment({
  "StackId": "",
  "Command": {
    "Name": ""
  }
}, context)
```

#### Parameters
* AppId (string)
* Command (object) **required** - Used to specify a stack or deployment command.
* Comment (string)
* CustomJson (string)
* InstanceIds (array)
* LayerIds (array)
* StackId (string) **required**

### CreateInstance



```js
amazonaws_opsworks.CreateInstance({
  "StackId": "",
  "LayerIds": [],
  "InstanceType": ""
}, context)
```

#### Parameters
* AgentVersion (string)
* AmiId (string)
* Architecture (string)
* AutoScalingType (string)
* AvailabilityZone (string)
* BlockDeviceMappings (array)
* EbsOptimized (boolean)
* Hostname (string)
* InstallUpdatesOnBoot (boolean)
* InstanceType (string) **required**
* LayerIds (array) **required**
* Os (string)
* RootDeviceType (string)
* SshKeyName (string)
* StackId (string) **required**
* SubnetId (string)
* Tenancy (string)
* VirtualizationType (string)

### CreateLayer



```js
amazonaws_opsworks.CreateLayer({
  "StackId": "",
  "Type": "",
  "Name": "",
  "Shortname": ""
}, context)
```

#### Parameters
* Attributes (array)
* AutoAssignElasticIps (boolean)
* AutoAssignPublicIps (boolean)
* CloudWatchLogsConfiguration (object) - Describes the Amazon CloudWatch logs configuration for a layer.
* CustomInstanceProfileArn (string)
* CustomJson (string)
* CustomRecipes (object) - <p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. In addition, you can provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events. </p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the .rb extension. For example: phpapp2::dbsetup specifies the dbsetup.rb recipe in the repository's phpapp2 folder.</p>
* CustomSecurityGroupIds (array)
* EnableAutoHealing (boolean)
* InstallUpdatesOnBoot (boolean)
* LifecycleEventConfiguration (object) - Specifies the lifecycle event configuration
* Name (string) **required**
* Packages (array)
* Shortname (string) **required**
* StackId (string) **required**
* Type (string) **required**
* UseEbsOptimizedInstances (boolean)
* VolumeConfigurations (array)

### CreateStack



```js
amazonaws_opsworks.CreateStack({
  "Name": "",
  "Region": "",
  "ServiceRoleArn": "",
  "DefaultInstanceProfileArn": ""
}, context)
```

#### Parameters
* AgentVersion (string)
* Attributes (array)
* ChefConfiguration (object) - Describes the Chef configuration.
* ConfigurationManager (object) - Describes the configuration manager.
* CustomCookbooksSource (object) - Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="http://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="http://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>.
* CustomJson (string)
* DefaultAvailabilityZone (string)
* DefaultInstanceProfileArn (string) **required**
* DefaultOs (string)
* DefaultRootDeviceType (string)
* DefaultSshKeyName (string)
* DefaultSubnetId (string)
* HostnameTheme (string)
* Name (string) **required**
* Region (string) **required**
* ServiceRoleArn (string) **required**
* UseCustomCookbooks (boolean)
* UseOpsworksSecurityGroups (boolean)
* VpcId (string)

### CreateUserProfile



```js
amazonaws_opsworks.CreateUserProfile({
  "IamUserArn": ""
}, context)
```

#### Parameters
* AllowSelfManagement (boolean)
* IamUserArn (string) **required**
* SshPublicKey (string)
* SshUsername (string)

### DeleteApp



```js
amazonaws_opsworks.DeleteApp({
  "AppId": ""
}, context)
```

#### Parameters
* AppId (string) **required**

### DeleteInstance



```js
amazonaws_opsworks.DeleteInstance({
  "InstanceId": ""
}, context)
```

#### Parameters
* DeleteElasticIp (boolean)
* DeleteVolumes (boolean)
* InstanceId (string) **required**

### DeleteLayer



```js
amazonaws_opsworks.DeleteLayer({
  "LayerId": ""
}, context)
```

#### Parameters
* LayerId (string) **required**

### DeleteStack



```js
amazonaws_opsworks.DeleteStack({
  "StackId": ""
}, context)
```

#### Parameters
* StackId (string) **required**

### DeleteUserProfile



```js
amazonaws_opsworks.DeleteUserProfile({
  "IamUserArn": ""
}, context)
```

#### Parameters
* IamUserArn (string) **required**

### DeregisterEcsCluster



```js
amazonaws_opsworks.DeregisterEcsCluster({
  "EcsClusterArn": ""
}, context)
```

#### Parameters
* EcsClusterArn (string) **required**

### DeregisterElasticIp



```js
amazonaws_opsworks.DeregisterElasticIp({
  "ElasticIp": ""
}, context)
```

#### Parameters
* ElasticIp (string) **required**

### DeregisterInstance



```js
amazonaws_opsworks.DeregisterInstance({
  "InstanceId": ""
}, context)
```

#### Parameters
* InstanceId (string) **required**

### DeregisterRdsDbInstance



```js
amazonaws_opsworks.DeregisterRdsDbInstance({
  "RdsDbInstanceArn": ""
}, context)
```

#### Parameters
* RdsDbInstanceArn (string) **required**

### DeregisterVolume



```js
amazonaws_opsworks.DeregisterVolume({
  "VolumeId": ""
}, context)
```

#### Parameters
* VolumeId (string) **required**

### DescribeAgentVersions



```js
amazonaws_opsworks.DescribeAgentVersions({}, context)
```

#### Parameters
* ConfigurationManager (object) - Describes the configuration manager.
* StackId (string)

### DescribeApps



```js
amazonaws_opsworks.DescribeApps({}, context)
```

#### Parameters
* AppIds (array)
* StackId (string)

### DescribeCommands



```js
amazonaws_opsworks.DescribeCommands({}, context)
```

#### Parameters
* CommandIds (array)
* DeploymentId (string)
* InstanceId (string)

### DescribeDeployments



```js
amazonaws_opsworks.DescribeDeployments({}, context)
```

#### Parameters
* AppId (string)
* DeploymentIds (array)
* StackId (string)

### DescribeEcsClusters



```js
amazonaws_opsworks.DescribeEcsClusters({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* EcsClusterArns (array)
* MaxResults (integer)
* NextToken (string)
* StackId (string)

### DescribeElasticIps



```js
amazonaws_opsworks.DescribeElasticIps({}, context)
```

#### Parameters
* InstanceId (string)
* Ips (array)
* StackId (string)

### DescribeElasticLoadBalancers



```js
amazonaws_opsworks.DescribeElasticLoadBalancers({}, context)
```

#### Parameters
* LayerIds (array)
* StackId (string)

### DescribeInstances



```js
amazonaws_opsworks.DescribeInstances({}, context)
```

#### Parameters
* InstanceIds (array)
* LayerId (string)
* StackId (string)

### DescribeLayers



```js
amazonaws_opsworks.DescribeLayers({}, context)
```

#### Parameters
* LayerIds (array)
* StackId (string)

### DescribeLoadBasedAutoScaling



```js
amazonaws_opsworks.DescribeLoadBasedAutoScaling({
  "LayerIds": []
}, context)
```

#### Parameters
* LayerIds (array) **required**

### DescribeMyUserProfile



```js
amazonaws_opsworks.DescribeMyUserProfile({}, context)
```

#### Parameters
*This action has no parameters*

### DescribePermissions



```js
amazonaws_opsworks.DescribePermissions({}, context)
```

#### Parameters
* IamUserArn (string)
* StackId (string)

### DescribeRaidArrays



```js
amazonaws_opsworks.DescribeRaidArrays({}, context)
```

#### Parameters
* InstanceId (string)
* RaidArrayIds (array)
* StackId (string)

### DescribeRdsDbInstances



```js
amazonaws_opsworks.DescribeRdsDbInstances({
  "StackId": ""
}, context)
```

#### Parameters
* RdsDbInstanceArns (array)
* StackId (string) **required**

### DescribeServiceErrors



```js
amazonaws_opsworks.DescribeServiceErrors({}, context)
```

#### Parameters
* InstanceId (string)
* ServiceErrorIds (array)
* StackId (string)

### DescribeStackProvisioningParameters



```js
amazonaws_opsworks.DescribeStackProvisioningParameters({
  "StackId": ""
}, context)
```

#### Parameters
* StackId (string) **required**

### DescribeStackSummary



```js
amazonaws_opsworks.DescribeStackSummary({
  "StackId": ""
}, context)
```

#### Parameters
* StackId (string) **required**

### DescribeStacks



```js
amazonaws_opsworks.DescribeStacks({}, context)
```

#### Parameters
* StackIds (array)

### DescribeTimeBasedAutoScaling



```js
amazonaws_opsworks.DescribeTimeBasedAutoScaling({
  "InstanceIds": []
}, context)
```

#### Parameters
* InstanceIds (array) **required**

### DescribeUserProfiles



```js
amazonaws_opsworks.DescribeUserProfiles({}, context)
```

#### Parameters
* IamUserArns (array)

### DescribeVolumes



```js
amazonaws_opsworks.DescribeVolumes({}, context)
```

#### Parameters
* InstanceId (string)
* RaidArrayId (string)
* StackId (string)
* VolumeIds (array)

### DetachElasticLoadBalancer



```js
amazonaws_opsworks.DetachElasticLoadBalancer({
  "ElasticLoadBalancerName": "",
  "LayerId": ""
}, context)
```

#### Parameters
* ElasticLoadBalancerName (string) **required**
* LayerId (string) **required**

### DisassociateElasticIp



```js
amazonaws_opsworks.DisassociateElasticIp({
  "ElasticIp": ""
}, context)
```

#### Parameters
* ElasticIp (string) **required**

### GetHostnameSuggestion



```js
amazonaws_opsworks.GetHostnameSuggestion({
  "LayerId": ""
}, context)
```

#### Parameters
* LayerId (string) **required**

### GrantAccess



```js
amazonaws_opsworks.GrantAccess({
  "InstanceId": ""
}, context)
```

#### Parameters
* InstanceId (string) **required**
* ValidForInMinutes (integer)

### RebootInstance



```js
amazonaws_opsworks.RebootInstance({
  "InstanceId": ""
}, context)
```

#### Parameters
* InstanceId (string) **required**

### RegisterEcsCluster



```js
amazonaws_opsworks.RegisterEcsCluster({
  "EcsClusterArn": "",
  "StackId": ""
}, context)
```

#### Parameters
* EcsClusterArn (string) **required**
* StackId (string) **required**

### RegisterElasticIp



```js
amazonaws_opsworks.RegisterElasticIp({
  "ElasticIp": "",
  "StackId": ""
}, context)
```

#### Parameters
* ElasticIp (string) **required**
* StackId (string) **required**

### RegisterInstance



```js
amazonaws_opsworks.RegisterInstance({
  "StackId": ""
}, context)
```

#### Parameters
* Hostname (string)
* InstanceIdentity (object) - Contains a description of an Amazon EC2 instance from the Amazon EC2 metadata service. For more information, see <a href="http://docs.aws.amazon.com/sdkfornet/latest/apidocs/Index.html">Instance Metadata and User Data</a>.
* PrivateIp (string)
* PublicIp (string)
* RsaPublicKey (string)
* RsaPublicKeyFingerprint (string)
* StackId (string) **required**

### RegisterRdsDbInstance



```js
amazonaws_opsworks.RegisterRdsDbInstance({
  "StackId": "",
  "RdsDbInstanceArn": "",
  "DbUser": "",
  "DbPassword": ""
}, context)
```

#### Parameters
* DbPassword (string) **required**
* DbUser (string) **required**
* RdsDbInstanceArn (string) **required**
* StackId (string) **required**

### RegisterVolume



```js
amazonaws_opsworks.RegisterVolume({
  "StackId": ""
}, context)
```

#### Parameters
* Ec2VolumeId (string)
* StackId (string) **required**

### SetLoadBasedAutoScaling



```js
amazonaws_opsworks.SetLoadBasedAutoScaling({
  "LayerId": ""
}, context)
```

#### Parameters
* DownScaling (object) - Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances.
* Enable (boolean)
* LayerId (string) **required**
* UpScaling (object) - Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances.

### SetPermission



```js
amazonaws_opsworks.SetPermission({
  "StackId": "",
  "IamUserArn": ""
}, context)
```

#### Parameters
* AllowSsh (boolean)
* AllowSudo (boolean)
* IamUserArn (string) **required**
* Level (string)
* StackId (string) **required**

### SetTimeBasedAutoScaling



```js
amazonaws_opsworks.SetTimeBasedAutoScaling({
  "InstanceId": ""
}, context)
```

#### Parameters
* AutoScalingSchedule (object) - <p>Describes a time-based instance's auto scaling schedule. The schedule consists of a set of key-value pairs.</p> <ul> <li> <p>The key is the time period (a UTC hour) and must be an integer from 0 - 23.</p> </li> <li> <p>The value indicates whether the instance should be online or offline for the specified period, and must be set to "on" or "off"</p> </li> </ul> <p>The default setting for all time periods is off, so you use the following parameters primarily to specify the online periods. You don't have to explicitly specify offline periods unless you want to change an online period to an offline period.</p> <p>The following example specifies that the instance should be online for four hours, from UTC 1200 - 1600. It will be off for the remainder of the day.</p> <p> <code> { "12":"on", "13":"on", "14":"on", "15":"on" } </code> </p>
* InstanceId (string) **required**

### StartInstance



```js
amazonaws_opsworks.StartInstance({
  "InstanceId": ""
}, context)
```

#### Parameters
* InstanceId (string) **required**

### StartStack



```js
amazonaws_opsworks.StartStack({
  "StackId": ""
}, context)
```

#### Parameters
* StackId (string) **required**

### StopInstance



```js
amazonaws_opsworks.StopInstance({
  "InstanceId": ""
}, context)
```

#### Parameters
* InstanceId (string) **required**

### StopStack



```js
amazonaws_opsworks.StopStack({
  "StackId": ""
}, context)
```

#### Parameters
* StackId (string) **required**

### UnassignInstance



```js
amazonaws_opsworks.UnassignInstance({
  "InstanceId": ""
}, context)
```

#### Parameters
* InstanceId (string) **required**

### UnassignVolume



```js
amazonaws_opsworks.UnassignVolume({
  "VolumeId": ""
}, context)
```

#### Parameters
* VolumeId (string) **required**

### UpdateApp



```js
amazonaws_opsworks.UpdateApp({
  "AppId": ""
}, context)
```

#### Parameters
* AppId (string) **required**
* AppSource (object) - Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="http://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="http://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>.
* Attributes (array)
* DataSources (array)
* Description (string)
* Domains (array)
* EnableSsl (boolean)
* Environment (array)
* Name (string)
* SslConfiguration (object) - Describes an app's SSL configuration.
* Type (string)

### UpdateElasticIp



```js
amazonaws_opsworks.UpdateElasticIp({
  "ElasticIp": ""
}, context)
```

#### Parameters
* ElasticIp (string) **required**
* Name (string)

### UpdateInstance



```js
amazonaws_opsworks.UpdateInstance({
  "InstanceId": ""
}, context)
```

#### Parameters
* AgentVersion (string)
* AmiId (string)
* Architecture (string)
* AutoScalingType (string)
* EbsOptimized (boolean)
* Hostname (string)
* InstallUpdatesOnBoot (boolean)
* InstanceId (string) **required**
* InstanceType (string)
* LayerIds (array)
* Os (string)
* SshKeyName (string)

### UpdateLayer



```js
amazonaws_opsworks.UpdateLayer({
  "LayerId": ""
}, context)
```

#### Parameters
* Attributes (array)
* AutoAssignElasticIps (boolean)
* AutoAssignPublicIps (boolean)
* CloudWatchLogsConfiguration (object) - Describes the Amazon CloudWatch logs configuration for a layer.
* CustomInstanceProfileArn (string)
* CustomJson (string)
* CustomRecipes (object) - <p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. In addition, you can provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events. </p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the .rb extension. For example: phpapp2::dbsetup specifies the dbsetup.rb recipe in the repository's phpapp2 folder.</p>
* CustomSecurityGroupIds (array)
* EnableAutoHealing (boolean)
* InstallUpdatesOnBoot (boolean)
* LayerId (string) **required**
* LifecycleEventConfiguration (object) - Specifies the lifecycle event configuration
* Name (string)
* Packages (array)
* Shortname (string)
* UseEbsOptimizedInstances (boolean)
* VolumeConfigurations (array)

### UpdateMyUserProfile



```js
amazonaws_opsworks.UpdateMyUserProfile({}, context)
```

#### Parameters
* SshPublicKey (string)

### UpdateRdsDbInstance



```js
amazonaws_opsworks.UpdateRdsDbInstance({
  "RdsDbInstanceArn": ""
}, context)
```

#### Parameters
* DbPassword (string)
* DbUser (string)
* RdsDbInstanceArn (string) **required**

### UpdateStack



```js
amazonaws_opsworks.UpdateStack({
  "StackId": ""
}, context)
```

#### Parameters
* AgentVersion (string)
* Attributes (array)
* ChefConfiguration (object) - Describes the Chef configuration.
* ConfigurationManager (object) - Describes the configuration manager.
* CustomCookbooksSource (object) - Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="http://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="http://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>.
* CustomJson (string)
* DefaultAvailabilityZone (string)
* DefaultInstanceProfileArn (string)
* DefaultOs (string)
* DefaultRootDeviceType (string)
* DefaultSshKeyName (string)
* DefaultSubnetId (string)
* HostnameTheme (string)
* Name (string)
* ServiceRoleArn (string)
* StackId (string) **required**
* UseCustomCookbooks (boolean)
* UseOpsworksSecurityGroups (boolean)

### UpdateUserProfile



```js
amazonaws_opsworks.UpdateUserProfile({
  "IamUserArn": ""
}, context)
```

#### Parameters
* AllowSelfManagement (boolean)
* IamUserArn (string) **required**
* SshPublicKey (string)
* SshUsername (string)

### UpdateVolume



```js
amazonaws_opsworks.UpdateVolume({
  "VolumeId": ""
}, context)
```

#### Parameters
* MountPoint (string)
* Name (string)
* VolumeId (string) **required**

