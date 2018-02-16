# @datafire/amazonaws_opsworks

Client library for AWS OpsWorks

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_opsworks
```
```js
let amazonaws_opsworks = require('@datafire/amazonaws_opsworks').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_opsworks.AssignInstance({
  "InstanceId": "",
  "LayerIds": []
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS OpsWorks</fullname> <p>Welcome to the <i>AWS OpsWorks Stacks API Reference</i>. This guide provides descriptions, syntax, and usage examples for AWS OpsWorks Stacks actions and data types, including common parameters and error codes. </p> <p>AWS OpsWorks Stacks is an application management service that provides an integrated experience for overseeing the complete application lifecycle. For information about this product, go to the <a href="http://aws.amazon.com/opsworks/">AWS OpsWorks</a> details page. </p> <p> <b>SDKs and CLI</b> </p> <p>The most common way to use the AWS OpsWorks Stacks API is by using the AWS Command Line Interface (CLI) or by using one of the AWS SDKs to implement applications in your preferred language. For more information, see:</p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">AWS CLI</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/opsworks/AWSOpsWorksClient.html">AWS SDK for Java</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/sdkfornet/latest/apidocs/html/N_Amazon_OpsWorks.htm">AWS SDK for .NET</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/aws-sdk-php-2/latest/class-Aws.OpsWorks.OpsWorksClient.html">AWS SDK for PHP 2</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/sdkforruby/api/">AWS SDK for Ruby</a> </p> </li> <li> <p> <a href="http://aws.amazon.com/documentation/sdkforjavascript/">AWS SDK for Node.js</a> </p> </li> <li> <p> <a href="http://docs.pythonboto.org/en/latest/ref/opsworks.html">AWS SDK for Python(Boto)</a> </p> </li> </ul> <p> <b>Endpoints</b> </p> <p>AWS OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Stacks can only be accessed or managed within the endpoint in which they are created.</p> <ul> <li> <p>opsworks.us-east-1.amazonaws.com</p> </li> <li> <p>opsworks.us-east-2.amazonaws.com</p> </li> <li> <p>opsworks.us-west-1.amazonaws.com</p> </li> <li> <p>opsworks.us-west-2.amazonaws.com</p> </li> <li> <p>opsworks.ca-central-1.amazonaws.com (API only; not available in the AWS console)</p> </li> <li> <p>opsworks.eu-west-1.amazonaws.com</p> </li> <li> <p>opsworks.eu-west-2.amazonaws.com</p> </li> <li> <p>opsworks.eu-west-3.amazonaws.com</p> </li> <li> <p>opsworks.eu-central-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-northeast-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-northeast-2.amazonaws.com</p> </li> <li> <p>opsworks.ap-south-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-southeast-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-southeast-2.amazonaws.com</p> </li> <li> <p>opsworks.sa-east-1.amazonaws.com</p> </li> </ul> <p> <b>Chef Versions</b> </p> <p>When you call <a>CreateStack</a>, <a>CloneStack</a>, or <a>UpdateStack</a> we recommend you use the <code>ConfigurationManager</code> parameter to specify the Chef version. The recommended and default value for Linux stacks is currently 12. Windows stacks use Chef 12.2. For more information, see <a href="http://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-chef11.html">Chef Versions</a>.</p> <note> <p>You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks to Chef 12 as soon as possible.</p> </note>

## Actions

### AssignInstance



```js
amazonaws_opsworks.AssignInstance({
  "InstanceId": "",
  "LayerIds": []
}, context)
```

#### Input
* input `object`
  * InstanceId **required** [String](#string)
  * LayerIds **required** [Strings](#strings)

#### Output
*Output schema unknown*

### AssignVolume



```js
amazonaws_opsworks.AssignVolume({
  "VolumeId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId [String](#string)
  * VolumeId **required** [String](#string)

#### Output
*Output schema unknown*

### AssociateElasticIp



```js
amazonaws_opsworks.AssociateElasticIp({
  "ElasticIp": ""
}, context)
```

#### Input
* input `object`
  * ElasticIp **required** [String](#string)
  * InstanceId [String](#string)

#### Output
*Output schema unknown*

### AttachElasticLoadBalancer



```js
amazonaws_opsworks.AttachElasticLoadBalancer({
  "ElasticLoadBalancerName": "",
  "LayerId": ""
}, context)
```

#### Input
* input `object`
  * ElasticLoadBalancerName **required** [String](#string)
  * LayerId **required** [String](#string)

#### Output
*Output schema unknown*

### CloneStack



```js
amazonaws_opsworks.CloneStack({
  "SourceStackId": "",
  "ServiceRoleArn": ""
}, context)
```

#### Input
* input `object`
  * AgentVersion [String](#string)
  * Attributes [StackAttributes](#stackattributes)
  * ChefConfiguration [ChefConfiguration](#chefconfiguration)
  * CloneAppIds [Strings](#strings)
  * ClonePermissions [Boolean](#boolean)
  * ConfigurationManager [StackConfigurationManager](#stackconfigurationmanager)
  * CustomCookbooksSource [Source](#source)
  * CustomJson [String](#string)
  * DefaultAvailabilityZone [String](#string)
  * DefaultInstanceProfileArn [String](#string)
  * DefaultOs [String](#string)
  * DefaultRootDeviceType [RootDeviceType](#rootdevicetype)
  * DefaultSshKeyName [String](#string)
  * DefaultSubnetId [String](#string)
  * HostnameTheme [String](#string)
  * Name [String](#string)
  * Region [String](#string)
  * ServiceRoleArn **required** [String](#string)
  * SourceStackId **required** [String](#string)
  * UseCustomCookbooks [Boolean](#boolean)
  * UseOpsworksSecurityGroups [Boolean](#boolean)
  * VpcId [String](#string)

#### Output
* output [CloneStackResult](#clonestackresult)

### CreateApp



```js
amazonaws_opsworks.CreateApp({
  "StackId": "",
  "Name": "",
  "Type": ""
}, context)
```

#### Input
* input `object`
  * AppSource [Source](#source)
  * Attributes [AppAttributes](#appattributes)
  * DataSources [DataSources](#datasources)
  * Description [String](#string)
  * Domains [Strings](#strings)
  * EnableSsl [Boolean](#boolean)
  * Environment [EnvironmentVariables](#environmentvariables)
  * Name **required** [String](#string)
  * Shortname [String](#string)
  * SslConfiguration [SslConfiguration](#sslconfiguration)
  * StackId **required** [String](#string)
  * Type **required** [AppType](#apptype)

#### Output
* output [CreateAppResult](#createappresult)

### CreateDeployment



```js
amazonaws_opsworks.CreateDeployment({
  "StackId": "",
  "Command": {
    "Name": ""
  }
}, context)
```

#### Input
* input `object`
  * AppId [String](#string)
  * Command **required** [DeploymentCommand](#deploymentcommand)
  * Comment [String](#string)
  * CustomJson [String](#string)
  * InstanceIds [Strings](#strings)
  * LayerIds [Strings](#strings)
  * StackId **required** [String](#string)

#### Output
* output [CreateDeploymentResult](#createdeploymentresult)

### CreateInstance



```js
amazonaws_opsworks.CreateInstance({
  "StackId": "",
  "LayerIds": [],
  "InstanceType": ""
}, context)
```

#### Input
* input `object`
  * AgentVersion [String](#string)
  * AmiId [String](#string)
  * Architecture [Architecture](#architecture)
  * AutoScalingType [AutoScalingType](#autoscalingtype)
  * AvailabilityZone [String](#string)
  * BlockDeviceMappings [BlockDeviceMappings](#blockdevicemappings)
  * EbsOptimized [Boolean](#boolean)
  * Hostname [String](#string)
  * InstallUpdatesOnBoot [Boolean](#boolean)
  * InstanceType **required** [String](#string)
  * LayerIds **required** [Strings](#strings)
  * Os [String](#string)
  * RootDeviceType [RootDeviceType](#rootdevicetype)
  * SshKeyName [String](#string)
  * StackId **required** [String](#string)
  * SubnetId [String](#string)
  * Tenancy [String](#string)
  * VirtualizationType [String](#string)

#### Output
* output [CreateInstanceResult](#createinstanceresult)

### CreateLayer



```js
amazonaws_opsworks.CreateLayer({
  "StackId": "",
  "Type": "",
  "Name": "",
  "Shortname": ""
}, context)
```

#### Input
* input `object`
  * Attributes [LayerAttributes](#layerattributes)
  * AutoAssignElasticIps [Boolean](#boolean)
  * AutoAssignPublicIps [Boolean](#boolean)
  * CloudWatchLogsConfiguration [CloudWatchLogsConfiguration](#cloudwatchlogsconfiguration)
  * CustomInstanceProfileArn [String](#string)
  * CustomJson [String](#string)
  * CustomRecipes [Recipes](#recipes)
  * CustomSecurityGroupIds [Strings](#strings)
  * EnableAutoHealing [Boolean](#boolean)
  * InstallUpdatesOnBoot [Boolean](#boolean)
  * LifecycleEventConfiguration [LifecycleEventConfiguration](#lifecycleeventconfiguration)
  * Name **required** [String](#string)
  * Packages [Strings](#strings)
  * Shortname **required** [String](#string)
  * StackId **required** [String](#string)
  * Type **required** [LayerType](#layertype)
  * UseEbsOptimizedInstances [Boolean](#boolean)
  * VolumeConfigurations [VolumeConfigurations](#volumeconfigurations)

#### Output
* output [CreateLayerResult](#createlayerresult)

### CreateStack



```js
amazonaws_opsworks.CreateStack({
  "Name": "",
  "Region": "",
  "ServiceRoleArn": "",
  "DefaultInstanceProfileArn": ""
}, context)
```

#### Input
* input `object`
  * AgentVersion [String](#string)
  * Attributes [StackAttributes](#stackattributes)
  * ChefConfiguration [ChefConfiguration](#chefconfiguration)
  * ConfigurationManager [StackConfigurationManager](#stackconfigurationmanager)
  * CustomCookbooksSource [Source](#source)
  * CustomJson [String](#string)
  * DefaultAvailabilityZone [String](#string)
  * DefaultInstanceProfileArn **required** [String](#string)
  * DefaultOs [String](#string)
  * DefaultRootDeviceType [RootDeviceType](#rootdevicetype)
  * DefaultSshKeyName [String](#string)
  * DefaultSubnetId [String](#string)
  * HostnameTheme [String](#string)
  * Name **required** [String](#string)
  * Region **required** [String](#string)
  * ServiceRoleArn **required** [String](#string)
  * UseCustomCookbooks [Boolean](#boolean)
  * UseOpsworksSecurityGroups [Boolean](#boolean)
  * VpcId [String](#string)

#### Output
* output [CreateStackResult](#createstackresult)

### CreateUserProfile



```js
amazonaws_opsworks.CreateUserProfile({
  "IamUserArn": ""
}, context)
```

#### Input
* input `object`
  * AllowSelfManagement [Boolean](#boolean)
  * IamUserArn **required** [String](#string)
  * SshPublicKey [String](#string)
  * SshUsername [String](#string)

#### Output
* output [CreateUserProfileResult](#createuserprofileresult)

### DeleteApp



```js
amazonaws_opsworks.DeleteApp({
  "AppId": ""
}, context)
```

#### Input
* input `object`
  * AppId **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteInstance



```js
amazonaws_opsworks.DeleteInstance({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * DeleteElasticIp [Boolean](#boolean)
  * DeleteVolumes [Boolean](#boolean)
  * InstanceId **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteLayer



```js
amazonaws_opsworks.DeleteLayer({
  "LayerId": ""
}, context)
```

#### Input
* input `object`
  * LayerId **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteStack



```js
amazonaws_opsworks.DeleteStack({
  "StackId": ""
}, context)
```

#### Input
* input `object`
  * StackId **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteUserProfile



```js
amazonaws_opsworks.DeleteUserProfile({
  "IamUserArn": ""
}, context)
```

#### Input
* input `object`
  * IamUserArn **required** [String](#string)

#### Output
*Output schema unknown*

### DeregisterEcsCluster



```js
amazonaws_opsworks.DeregisterEcsCluster({
  "EcsClusterArn": ""
}, context)
```

#### Input
* input `object`
  * EcsClusterArn **required** [String](#string)

#### Output
*Output schema unknown*

### DeregisterElasticIp



```js
amazonaws_opsworks.DeregisterElasticIp({
  "ElasticIp": ""
}, context)
```

#### Input
* input `object`
  * ElasticIp **required** [String](#string)

#### Output
*Output schema unknown*

### DeregisterInstance



```js
amazonaws_opsworks.DeregisterInstance({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** [String](#string)

#### Output
*Output schema unknown*

### DeregisterRdsDbInstance



```js
amazonaws_opsworks.DeregisterRdsDbInstance({
  "RdsDbInstanceArn": ""
}, context)
```

#### Input
* input `object`
  * RdsDbInstanceArn **required** [String](#string)

#### Output
*Output schema unknown*

### DeregisterVolume



```js
amazonaws_opsworks.DeregisterVolume({
  "VolumeId": ""
}, context)
```

#### Input
* input `object`
  * VolumeId **required** [String](#string)

#### Output
*Output schema unknown*

### DescribeAgentVersions



```js
amazonaws_opsworks.DescribeAgentVersions({}, context)
```

#### Input
* input `object`
  * ConfigurationManager [StackConfigurationManager](#stackconfigurationmanager)
  * StackId [String](#string)

#### Output
* output [DescribeAgentVersionsResult](#describeagentversionsresult)

### DescribeApps



```js
amazonaws_opsworks.DescribeApps({}, context)
```

#### Input
* input `object`
  * AppIds [Strings](#strings)
  * StackId [String](#string)

#### Output
* output [DescribeAppsResult](#describeappsresult)

### DescribeCommands



```js
amazonaws_opsworks.DescribeCommands({}, context)
```

#### Input
* input `object`
  * CommandIds [Strings](#strings)
  * DeploymentId [String](#string)
  * InstanceId [String](#string)

#### Output
* output [DescribeCommandsResult](#describecommandsresult)

### DescribeDeployments



```js
amazonaws_opsworks.DescribeDeployments({}, context)
```

#### Input
* input `object`
  * AppId [String](#string)
  * DeploymentIds [Strings](#strings)
  * StackId [String](#string)

#### Output
* output [DescribeDeploymentsResult](#describedeploymentsresult)

### DescribeEcsClusters



```js
amazonaws_opsworks.DescribeEcsClusters({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * EcsClusterArns [Strings](#strings)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * StackId [String](#string)

#### Output
* output [DescribeEcsClustersResult](#describeecsclustersresult)

### DescribeElasticIps



```js
amazonaws_opsworks.DescribeElasticIps({}, context)
```

#### Input
* input `object`
  * InstanceId [String](#string)
  * Ips [Strings](#strings)
  * StackId [String](#string)

#### Output
* output [DescribeElasticIpsResult](#describeelasticipsresult)

### DescribeElasticLoadBalancers



```js
amazonaws_opsworks.DescribeElasticLoadBalancers({}, context)
```

#### Input
* input `object`
  * LayerIds [Strings](#strings)
  * StackId [String](#string)

#### Output
* output [DescribeElasticLoadBalancersResult](#describeelasticloadbalancersresult)

### DescribeInstances



```js
amazonaws_opsworks.DescribeInstances({}, context)
```

#### Input
* input `object`
  * InstanceIds [Strings](#strings)
  * LayerId [String](#string)
  * StackId [String](#string)

#### Output
* output [DescribeInstancesResult](#describeinstancesresult)

### DescribeLayers



```js
amazonaws_opsworks.DescribeLayers({}, context)
```

#### Input
* input `object`
  * LayerIds [Strings](#strings)
  * StackId [String](#string)

#### Output
* output [DescribeLayersResult](#describelayersresult)

### DescribeLoadBasedAutoScaling



```js
amazonaws_opsworks.DescribeLoadBasedAutoScaling({
  "LayerIds": []
}, context)
```

#### Input
* input `object`
  * LayerIds **required** [Strings](#strings)

#### Output
* output [DescribeLoadBasedAutoScalingResult](#describeloadbasedautoscalingresult)

### DescribeMyUserProfile



```js
amazonaws_opsworks.DescribeMyUserProfile({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeMyUserProfileResult](#describemyuserprofileresult)

### DescribeOperatingSystems



```js
amazonaws_opsworks.DescribeOperatingSystems({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeOperatingSystemsResponse](#describeoperatingsystemsresponse)

### DescribePermissions



```js
amazonaws_opsworks.DescribePermissions({}, context)
```

#### Input
* input `object`
  * IamUserArn [String](#string)
  * StackId [String](#string)

#### Output
* output [DescribePermissionsResult](#describepermissionsresult)

### DescribeRaidArrays



```js
amazonaws_opsworks.DescribeRaidArrays({}, context)
```

#### Input
* input `object`
  * InstanceId [String](#string)
  * RaidArrayIds [Strings](#strings)
  * StackId [String](#string)

#### Output
* output [DescribeRaidArraysResult](#describeraidarraysresult)

### DescribeRdsDbInstances



```js
amazonaws_opsworks.DescribeRdsDbInstances({
  "StackId": ""
}, context)
```

#### Input
* input `object`
  * RdsDbInstanceArns [Strings](#strings)
  * StackId **required** [String](#string)

#### Output
* output [DescribeRdsDbInstancesResult](#describerdsdbinstancesresult)

### DescribeServiceErrors



```js
amazonaws_opsworks.DescribeServiceErrors({}, context)
```

#### Input
* input `object`
  * InstanceId [String](#string)
  * ServiceErrorIds [Strings](#strings)
  * StackId [String](#string)

#### Output
* output [DescribeServiceErrorsResult](#describeserviceerrorsresult)

### DescribeStackProvisioningParameters



```js
amazonaws_opsworks.DescribeStackProvisioningParameters({
  "StackId": ""
}, context)
```

#### Input
* input `object`
  * StackId **required** [String](#string)

#### Output
* output [DescribeStackProvisioningParametersResult](#describestackprovisioningparametersresult)

### DescribeStackSummary



```js
amazonaws_opsworks.DescribeStackSummary({
  "StackId": ""
}, context)
```

#### Input
* input `object`
  * StackId **required** [String](#string)

#### Output
* output [DescribeStackSummaryResult](#describestacksummaryresult)

### DescribeStacks



```js
amazonaws_opsworks.DescribeStacks({}, context)
```

#### Input
* input `object`
  * StackIds [Strings](#strings)

#### Output
* output [DescribeStacksResult](#describestacksresult)

### DescribeTimeBasedAutoScaling



```js
amazonaws_opsworks.DescribeTimeBasedAutoScaling({
  "InstanceIds": []
}, context)
```

#### Input
* input `object`
  * InstanceIds **required** [Strings](#strings)

#### Output
* output [DescribeTimeBasedAutoScalingResult](#describetimebasedautoscalingresult)

### DescribeUserProfiles



```js
amazonaws_opsworks.DescribeUserProfiles({}, context)
```

#### Input
* input `object`
  * IamUserArns [Strings](#strings)

#### Output
* output [DescribeUserProfilesResult](#describeuserprofilesresult)

### DescribeVolumes



```js
amazonaws_opsworks.DescribeVolumes({}, context)
```

#### Input
* input `object`
  * InstanceId [String](#string)
  * RaidArrayId [String](#string)
  * StackId [String](#string)
  * VolumeIds [Strings](#strings)

#### Output
* output [DescribeVolumesResult](#describevolumesresult)

### DetachElasticLoadBalancer



```js
amazonaws_opsworks.DetachElasticLoadBalancer({
  "ElasticLoadBalancerName": "",
  "LayerId": ""
}, context)
```

#### Input
* input `object`
  * ElasticLoadBalancerName **required** [String](#string)
  * LayerId **required** [String](#string)

#### Output
*Output schema unknown*

### DisassociateElasticIp



```js
amazonaws_opsworks.DisassociateElasticIp({
  "ElasticIp": ""
}, context)
```

#### Input
* input `object`
  * ElasticIp **required** [String](#string)

#### Output
*Output schema unknown*

### GetHostnameSuggestion



```js
amazonaws_opsworks.GetHostnameSuggestion({
  "LayerId": ""
}, context)
```

#### Input
* input `object`
  * LayerId **required** [String](#string)

#### Output
* output [GetHostnameSuggestionResult](#gethostnamesuggestionresult)

### GrantAccess



```js
amazonaws_opsworks.GrantAccess({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** [String](#string)
  * ValidForInMinutes [ValidForInMinutes](#validforinminutes)

#### Output
* output [GrantAccessResult](#grantaccessresult)

### ListTags



```js
amazonaws_opsworks.ListTags({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ResourceArn **required** [ResourceArn](#resourcearn)

#### Output
* output [ListTagsResult](#listtagsresult)

### RebootInstance



```js
amazonaws_opsworks.RebootInstance({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** [String](#string)

#### Output
*Output schema unknown*

### RegisterEcsCluster



```js
amazonaws_opsworks.RegisterEcsCluster({
  "EcsClusterArn": "",
  "StackId": ""
}, context)
```

#### Input
* input `object`
  * EcsClusterArn **required** [String](#string)
  * StackId **required** [String](#string)

#### Output
* output [RegisterEcsClusterResult](#registerecsclusterresult)

### RegisterElasticIp



```js
amazonaws_opsworks.RegisterElasticIp({
  "ElasticIp": "",
  "StackId": ""
}, context)
```

#### Input
* input `object`
  * ElasticIp **required** [String](#string)
  * StackId **required** [String](#string)

#### Output
* output [RegisterElasticIpResult](#registerelasticipresult)

### RegisterInstance



```js
amazonaws_opsworks.RegisterInstance({
  "StackId": ""
}, context)
```

#### Input
* input `object`
  * Hostname [String](#string)
  * InstanceIdentity [InstanceIdentity](#instanceidentity)
  * PrivateIp [String](#string)
  * PublicIp [String](#string)
  * RsaPublicKey [String](#string)
  * RsaPublicKeyFingerprint [String](#string)
  * StackId **required** [String](#string)

#### Output
* output [RegisterInstanceResult](#registerinstanceresult)

### RegisterRdsDbInstance



```js
amazonaws_opsworks.RegisterRdsDbInstance({
  "StackId": "",
  "RdsDbInstanceArn": "",
  "DbUser": "",
  "DbPassword": ""
}, context)
```

#### Input
* input `object`
  * DbPassword **required** [String](#string)
  * DbUser **required** [String](#string)
  * RdsDbInstanceArn **required** [String](#string)
  * StackId **required** [String](#string)

#### Output
*Output schema unknown*

### RegisterVolume



```js
amazonaws_opsworks.RegisterVolume({
  "StackId": ""
}, context)
```

#### Input
* input `object`
  * Ec2VolumeId [String](#string)
  * StackId **required** [String](#string)

#### Output
* output [RegisterVolumeResult](#registervolumeresult)

### SetLoadBasedAutoScaling



```js
amazonaws_opsworks.SetLoadBasedAutoScaling({
  "LayerId": ""
}, context)
```

#### Input
* input `object`
  * DownScaling [AutoScalingThresholds](#autoscalingthresholds)
  * Enable [Boolean](#boolean)
  * LayerId **required** [String](#string)
  * UpScaling [AutoScalingThresholds](#autoscalingthresholds)

#### Output
*Output schema unknown*

### SetPermission



```js
amazonaws_opsworks.SetPermission({
  "StackId": "",
  "IamUserArn": ""
}, context)
```

#### Input
* input `object`
  * AllowSsh [Boolean](#boolean)
  * AllowSudo [Boolean](#boolean)
  * IamUserArn **required** [String](#string)
  * Level [String](#string)
  * StackId **required** [String](#string)

#### Output
*Output schema unknown*

### SetTimeBasedAutoScaling



```js
amazonaws_opsworks.SetTimeBasedAutoScaling({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingSchedule [WeeklyAutoScalingSchedule](#weeklyautoscalingschedule)
  * InstanceId **required** [String](#string)

#### Output
*Output schema unknown*

### StartInstance



```js
amazonaws_opsworks.StartInstance({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** [String](#string)

#### Output
*Output schema unknown*

### StartStack



```js
amazonaws_opsworks.StartStack({
  "StackId": ""
}, context)
```

#### Input
* input `object`
  * StackId **required** [String](#string)

#### Output
*Output schema unknown*

### StopInstance



```js
amazonaws_opsworks.StopInstance({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * Force [Boolean](#boolean)
  * InstanceId **required** [String](#string)

#### Output
*Output schema unknown*

### StopStack



```js
amazonaws_opsworks.StopStack({
  "StackId": ""
}, context)
```

#### Input
* input `object`
  * StackId **required** [String](#string)

#### Output
*Output schema unknown*

### TagResource



```js
amazonaws_opsworks.TagResource({
  "ResourceArn": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** [ResourceArn](#resourcearn)
  * Tags **required** [Tags](#tags)

#### Output
*Output schema unknown*

### UnassignInstance



```js
amazonaws_opsworks.UnassignInstance({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** [String](#string)

#### Output
*Output schema unknown*

### UnassignVolume



```js
amazonaws_opsworks.UnassignVolume({
  "VolumeId": ""
}, context)
```

#### Input
* input `object`
  * VolumeId **required** [String](#string)

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_opsworks.UntagResource({
  "ResourceArn": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** [ResourceArn](#resourcearn)
  * TagKeys **required** [TagKeys](#tagkeys)

#### Output
*Output schema unknown*

### UpdateApp



```js
amazonaws_opsworks.UpdateApp({
  "AppId": ""
}, context)
```

#### Input
* input `object`
  * AppId **required** [String](#string)
  * AppSource [Source](#source)
  * Attributes [AppAttributes](#appattributes)
  * DataSources [DataSources](#datasources)
  * Description [String](#string)
  * Domains [Strings](#strings)
  * EnableSsl [Boolean](#boolean)
  * Environment [EnvironmentVariables](#environmentvariables)
  * Name [String](#string)
  * SslConfiguration [SslConfiguration](#sslconfiguration)
  * Type [AppType](#apptype)

#### Output
*Output schema unknown*

### UpdateElasticIp



```js
amazonaws_opsworks.UpdateElasticIp({
  "ElasticIp": ""
}, context)
```

#### Input
* input `object`
  * ElasticIp **required** [String](#string)
  * Name [String](#string)

#### Output
*Output schema unknown*

### UpdateInstance



```js
amazonaws_opsworks.UpdateInstance({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * AgentVersion [String](#string)
  * AmiId [String](#string)
  * Architecture [Architecture](#architecture)
  * AutoScalingType [AutoScalingType](#autoscalingtype)
  * EbsOptimized [Boolean](#boolean)
  * Hostname [String](#string)
  * InstallUpdatesOnBoot [Boolean](#boolean)
  * InstanceId **required** [String](#string)
  * InstanceType [String](#string)
  * LayerIds [Strings](#strings)
  * Os [String](#string)
  * SshKeyName [String](#string)

#### Output
*Output schema unknown*

### UpdateLayer



```js
amazonaws_opsworks.UpdateLayer({
  "LayerId": ""
}, context)
```

#### Input
* input `object`
  * Attributes [LayerAttributes](#layerattributes)
  * AutoAssignElasticIps [Boolean](#boolean)
  * AutoAssignPublicIps [Boolean](#boolean)
  * CloudWatchLogsConfiguration [CloudWatchLogsConfiguration](#cloudwatchlogsconfiguration)
  * CustomInstanceProfileArn [String](#string)
  * CustomJson [String](#string)
  * CustomRecipes [Recipes](#recipes)
  * CustomSecurityGroupIds [Strings](#strings)
  * EnableAutoHealing [Boolean](#boolean)
  * InstallUpdatesOnBoot [Boolean](#boolean)
  * LayerId **required** [String](#string)
  * LifecycleEventConfiguration [LifecycleEventConfiguration](#lifecycleeventconfiguration)
  * Name [String](#string)
  * Packages [Strings](#strings)
  * Shortname [String](#string)
  * UseEbsOptimizedInstances [Boolean](#boolean)
  * VolumeConfigurations [VolumeConfigurations](#volumeconfigurations)

#### Output
*Output schema unknown*

### UpdateMyUserProfile



```js
amazonaws_opsworks.UpdateMyUserProfile({}, context)
```

#### Input
* input `object`
  * SshPublicKey [String](#string)

#### Output
*Output schema unknown*

### UpdateRdsDbInstance



```js
amazonaws_opsworks.UpdateRdsDbInstance({
  "RdsDbInstanceArn": ""
}, context)
```

#### Input
* input `object`
  * DbPassword [String](#string)
  * DbUser [String](#string)
  * RdsDbInstanceArn **required** [String](#string)

#### Output
*Output schema unknown*

### UpdateStack



```js
amazonaws_opsworks.UpdateStack({
  "StackId": ""
}, context)
```

#### Input
* input `object`
  * AgentVersion [String](#string)
  * Attributes [StackAttributes](#stackattributes)
  * ChefConfiguration [ChefConfiguration](#chefconfiguration)
  * ConfigurationManager [StackConfigurationManager](#stackconfigurationmanager)
  * CustomCookbooksSource [Source](#source)
  * CustomJson [String](#string)
  * DefaultAvailabilityZone [String](#string)
  * DefaultInstanceProfileArn [String](#string)
  * DefaultOs [String](#string)
  * DefaultRootDeviceType [RootDeviceType](#rootdevicetype)
  * DefaultSshKeyName [String](#string)
  * DefaultSubnetId [String](#string)
  * HostnameTheme [String](#string)
  * Name [String](#string)
  * ServiceRoleArn [String](#string)
  * StackId **required** [String](#string)
  * UseCustomCookbooks [Boolean](#boolean)
  * UseOpsworksSecurityGroups [Boolean](#boolean)

#### Output
*Output schema unknown*

### UpdateUserProfile



```js
amazonaws_opsworks.UpdateUserProfile({
  "IamUserArn": ""
}, context)
```

#### Input
* input `object`
  * AllowSelfManagement [Boolean](#boolean)
  * IamUserArn **required** [String](#string)
  * SshPublicKey [String](#string)
  * SshUsername [String](#string)

#### Output
*Output schema unknown*

### UpdateVolume



```js
amazonaws_opsworks.UpdateVolume({
  "VolumeId": ""
}, context)
```

#### Input
* input `object`
  * MountPoint [String](#string)
  * Name [String](#string)
  * VolumeId **required** [String](#string)

#### Output
*Output schema unknown*



## Definitions

### AgentVersion
* AgentVersion `object`: Describes an agent version.
  * ConfigurationManager [StackConfigurationManager](#stackconfigurationmanager)
  * Version [String](#string)

### AgentVersions
* AgentVersions `array`
  * items [AgentVersion](#agentversion)

### App
* App `object`: A description of the app.
  * AppId [String](#string)
  * AppSource [Source](#source)
  * Attributes [AppAttributes](#appattributes)
  * CreatedAt [String](#string)
  * DataSources [DataSources](#datasources)
  * Description [String](#string)
  * Domains [Strings](#strings)
  * EnableSsl [Boolean](#boolean)
  * Environment [EnvironmentVariables](#environmentvariables)
  * Name [String](#string)
  * Shortname [String](#string)
  * SslConfiguration [SslConfiguration](#sslconfiguration)
  * StackId [String](#string)
  * Type [AppType](#apptype)

### AppAttributes
* AppAttributes `array`
  * items `object`
    * key [AppAttributesKeys](#appattributeskeys)
    * value [String](#string)

### AppAttributesKeys
* AppAttributesKeys `string` (values: DocumentRoot, RailsEnv, AutoBundleOnDeploy, AwsFlowRubySettings)

### AppType
* AppType `string` (values: aws-flow-ruby, java, rails, php, nodejs, static, other)

### Apps
* Apps `array`
  * items [App](#app)

### Architecture
* Architecture `string` (values: x86_64, i386)

### AssignInstanceRequest
* AssignInstanceRequest `object`
  * InstanceId **required** [String](#string)
  * LayerIds **required** [Strings](#strings)

### AssignVolumeRequest
* AssignVolumeRequest `object`
  * InstanceId [String](#string)
  * VolumeId **required** [String](#string)

### AssociateElasticIpRequest
* AssociateElasticIpRequest `object`
  * ElasticIp **required** [String](#string)
  * InstanceId [String](#string)

### AttachElasticLoadBalancerRequest
* AttachElasticLoadBalancerRequest `object`
  * ElasticLoadBalancerName **required** [String](#string)
  * LayerId **required** [String](#string)

### AutoScalingThresholds
* AutoScalingThresholds `object`: Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances.
  * Alarms [Strings](#strings)
  * CpuThreshold [Double](#double)
  * IgnoreMetricsTime [Minute](#minute)
  * InstanceCount [Integer](#integer)
  * LoadThreshold [Double](#double)
  * MemoryThreshold [Double](#double)
  * ThresholdsWaitTime [Minute](#minute)

### AutoScalingType
* AutoScalingType `string` (values: load, timer)

### BlockDeviceMapping
* BlockDeviceMapping `object`: Describes a block device mapping. This data type maps directly to the Amazon EC2 <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html">BlockDeviceMapping</a> data type. 
  * DeviceName [String](#string)
  * Ebs [EbsBlockDevice](#ebsblockdevice)
  * NoDevice [String](#string)
  * VirtualName [String](#string)

### BlockDeviceMappings
* BlockDeviceMappings `array`
  * items [BlockDeviceMapping](#blockdevicemapping)

### Boolean
* Boolean `boolean`

### ChefConfiguration
* ChefConfiguration `object`: Describes the Chef configuration.
  * BerkshelfVersion [String](#string)
  * ManageBerkshelf [Boolean](#boolean)

### CloneStackRequest
* CloneStackRequest `object`
  * AgentVersion [String](#string)
  * Attributes [StackAttributes](#stackattributes)
  * ChefConfiguration [ChefConfiguration](#chefconfiguration)
  * CloneAppIds [Strings](#strings)
  * ClonePermissions [Boolean](#boolean)
  * ConfigurationManager [StackConfigurationManager](#stackconfigurationmanager)
  * CustomCookbooksSource [Source](#source)
  * CustomJson [String](#string)
  * DefaultAvailabilityZone [String](#string)
  * DefaultInstanceProfileArn [String](#string)
  * DefaultOs [String](#string)
  * DefaultRootDeviceType [RootDeviceType](#rootdevicetype)
  * DefaultSshKeyName [String](#string)
  * DefaultSubnetId [String](#string)
  * HostnameTheme [String](#string)
  * Name [String](#string)
  * Region [String](#string)
  * ServiceRoleArn **required** [String](#string)
  * SourceStackId **required** [String](#string)
  * UseCustomCookbooks [Boolean](#boolean)
  * UseOpsworksSecurityGroups [Boolean](#boolean)
  * VpcId [String](#string)

### CloneStackResult
* CloneStackResult `object`: Contains the response to a <code>CloneStack</code> request.
  * StackId [String](#string)

### CloudWatchLogsConfiguration
* CloudWatchLogsConfiguration `object`: Describes the Amazon CloudWatch logs configuration for a layer.
  * Enabled [Boolean](#boolean)
  * LogStreams [CloudWatchLogsLogStreams](#cloudwatchlogslogstreams)

### CloudWatchLogsEncoding
* CloudWatchLogsEncoding `string` (values: ascii, big5, big5hkscs, cp037, cp424, cp437, cp500, cp720, cp737, cp775, cp850, cp852, cp855, cp856, cp857, cp858, cp860, cp861, cp862, cp863, cp864, cp865, cp866, cp869, cp874, cp875, cp932, cp949, cp950, cp1006, cp1026, cp1140, cp1250, cp1251, cp1252, cp1253, cp1254, cp1255, cp1256, cp1257, cp1258, euc_jp, euc_jis_2004, euc_jisx0213, euc_kr, gb2312, gbk, gb18030, hz, iso2022_jp, iso2022_jp_1, iso2022_jp_2, iso2022_jp_2004, iso2022_jp_3, iso2022_jp_ext, iso2022_kr, latin_1, iso8859_2, iso8859_3, iso8859_4, iso8859_5, iso8859_6, iso8859_7, iso8859_8, iso8859_9, iso8859_10, iso8859_13, iso8859_14, iso8859_15, iso8859_16, johab, koi8_r, koi8_u, mac_cyrillic, mac_greek, mac_iceland, mac_latin2, mac_roman, mac_turkish, ptcp154, shift_jis, shift_jis_2004, shift_jisx0213, utf_32, utf_32_be, utf_32_le, utf_16, utf_16_be, utf_16_le, utf_7, utf_8, utf_8_sig): Specifies the encoding of the log file so that the file can be read correctly. The default is <code>utf_8</code>. Encodings supported by Python <code>codecs.decode()</code> can be used here.

### CloudWatchLogsInitialPosition
* CloudWatchLogsInitialPosition `string` (values: start_of_file, end_of_file): Specifies where to start to read data (start_of_file or end_of_file). The default is start_of_file. It's only used if there is no state persisted for that log stream.

### CloudWatchLogsLogStream
* CloudWatchLogsLogStream `object`: Describes the Amazon CloudWatch logs configuration for a layer. For detailed information about members of this data type, see the <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>.
  * BatchCount [Integer](#integer)
  * BatchSize [Integer](#integer)
  * BufferDuration [Integer](#integer)
  * DatetimeFormat [String](#string)
  * Encoding [CloudWatchLogsEncoding](#cloudwatchlogsencoding)
  * File [String](#string)
  * FileFingerprintLines [String](#string)
  * InitialPosition [CloudWatchLogsInitialPosition](#cloudwatchlogsinitialposition)
  * LogGroupName [String](#string)
  * MultiLineStartPattern [String](#string)
  * TimeZone [CloudWatchLogsTimeZone](#cloudwatchlogstimezone)

### CloudWatchLogsLogStreams
* CloudWatchLogsLogStreams `array`: Describes the Amazon CloudWatch logs configuration for a layer.
  * items [CloudWatchLogsLogStream](#cloudwatchlogslogstream)

### CloudWatchLogsTimeZone
* CloudWatchLogsTimeZone `string` (values: LOCAL, UTC): The preferred time zone for logs streamed to CloudWatch Logs. Valid values are <code>LOCAL</code> and <code>UTC</code>, for Coordinated Universal Time.

### Command
* Command `object`: Describes a command.
  * AcknowledgedAt [DateTime](#datetime)
  * CommandId [String](#string)
  * CompletedAt [DateTime](#datetime)
  * CreatedAt [DateTime](#datetime)
  * DeploymentId [String](#string)
  * ExitCode [Integer](#integer)
  * InstanceId [String](#string)
  * LogUrl [String](#string)
  * Status [String](#string)
  * Type [String](#string)

### Commands
* Commands `array`
  * items [Command](#command)

### CreateAppRequest
* CreateAppRequest `object`
  * AppSource [Source](#source)
  * Attributes [AppAttributes](#appattributes)
  * DataSources [DataSources](#datasources)
  * Description [String](#string)
  * Domains [Strings](#strings)
  * EnableSsl [Boolean](#boolean)
  * Environment [EnvironmentVariables](#environmentvariables)
  * Name **required** [String](#string)
  * Shortname [String](#string)
  * SslConfiguration [SslConfiguration](#sslconfiguration)
  * StackId **required** [String](#string)
  * Type **required** [AppType](#apptype)

### CreateAppResult
* CreateAppResult `object`: Contains the response to a <code>CreateApp</code> request.
  * AppId [String](#string)

### CreateDeploymentRequest
* CreateDeploymentRequest `object`
  * AppId [String](#string)
  * Command **required** [DeploymentCommand](#deploymentcommand)
  * Comment [String](#string)
  * CustomJson [String](#string)
  * InstanceIds [Strings](#strings)
  * LayerIds [Strings](#strings)
  * StackId **required** [String](#string)

### CreateDeploymentResult
* CreateDeploymentResult `object`: Contains the response to a <code>CreateDeployment</code> request.
  * DeploymentId [String](#string)

### CreateInstanceRequest
* CreateInstanceRequest `object`
  * AgentVersion [String](#string)
  * AmiId [String](#string)
  * Architecture [Architecture](#architecture)
  * AutoScalingType [AutoScalingType](#autoscalingtype)
  * AvailabilityZone [String](#string)
  * BlockDeviceMappings [BlockDeviceMappings](#blockdevicemappings)
  * EbsOptimized [Boolean](#boolean)
  * Hostname [String](#string)
  * InstallUpdatesOnBoot [Boolean](#boolean)
  * InstanceType **required** [String](#string)
  * LayerIds **required** [Strings](#strings)
  * Os [String](#string)
  * RootDeviceType [RootDeviceType](#rootdevicetype)
  * SshKeyName [String](#string)
  * StackId **required** [String](#string)
  * SubnetId [String](#string)
  * Tenancy [String](#string)
  * VirtualizationType [String](#string)

### CreateInstanceResult
* CreateInstanceResult `object`: Contains the response to a <code>CreateInstance</code> request.
  * InstanceId [String](#string)

### CreateLayerRequest
* CreateLayerRequest `object`
  * Attributes [LayerAttributes](#layerattributes)
  * AutoAssignElasticIps [Boolean](#boolean)
  * AutoAssignPublicIps [Boolean](#boolean)
  * CloudWatchLogsConfiguration [CloudWatchLogsConfiguration](#cloudwatchlogsconfiguration)
  * CustomInstanceProfileArn [String](#string)
  * CustomJson [String](#string)
  * CustomRecipes [Recipes](#recipes)
  * CustomSecurityGroupIds [Strings](#strings)
  * EnableAutoHealing [Boolean](#boolean)
  * InstallUpdatesOnBoot [Boolean](#boolean)
  * LifecycleEventConfiguration [LifecycleEventConfiguration](#lifecycleeventconfiguration)
  * Name **required** [String](#string)
  * Packages [Strings](#strings)
  * Shortname **required** [String](#string)
  * StackId **required** [String](#string)
  * Type **required** [LayerType](#layertype)
  * UseEbsOptimizedInstances [Boolean](#boolean)
  * VolumeConfigurations [VolumeConfigurations](#volumeconfigurations)

### CreateLayerResult
* CreateLayerResult `object`: Contains the response to a <code>CreateLayer</code> request.
  * LayerId [String](#string)

### CreateStackRequest
* CreateStackRequest `object`
  * AgentVersion [String](#string)
  * Attributes [StackAttributes](#stackattributes)
  * ChefConfiguration [ChefConfiguration](#chefconfiguration)
  * ConfigurationManager [StackConfigurationManager](#stackconfigurationmanager)
  * CustomCookbooksSource [Source](#source)
  * CustomJson [String](#string)
  * DefaultAvailabilityZone [String](#string)
  * DefaultInstanceProfileArn **required** [String](#string)
  * DefaultOs [String](#string)
  * DefaultRootDeviceType [RootDeviceType](#rootdevicetype)
  * DefaultSshKeyName [String](#string)
  * DefaultSubnetId [String](#string)
  * HostnameTheme [String](#string)
  * Name **required** [String](#string)
  * Region **required** [String](#string)
  * ServiceRoleArn **required** [String](#string)
  * UseCustomCookbooks [Boolean](#boolean)
  * UseOpsworksSecurityGroups [Boolean](#boolean)
  * VpcId [String](#string)

### CreateStackResult
* CreateStackResult `object`: Contains the response to a <code>CreateStack</code> request.
  * StackId [String](#string)

### CreateUserProfileRequest
* CreateUserProfileRequest `object`
  * AllowSelfManagement [Boolean](#boolean)
  * IamUserArn **required** [String](#string)
  * SshPublicKey [String](#string)
  * SshUsername [String](#string)

### CreateUserProfileResult
* CreateUserProfileResult `object`: Contains the response to a <code>CreateUserProfile</code> request.
  * IamUserArn [String](#string)

### DailyAutoScalingSchedule
* DailyAutoScalingSchedule `array`
  * items `object`
    * key [Hour](#hour)
    * value [Switch](#switch)

### DataSource
* DataSource `object`: Describes an app's data source.
  * Arn [String](#string)
  * DatabaseName [String](#string)
  * Type [String](#string)

### DataSources
* DataSources `array`
  * items [DataSource](#datasource)

### DateTime
* DateTime `string`

### DeleteAppRequest
* DeleteAppRequest `object`
  * AppId **required** [String](#string)

### DeleteInstanceRequest
* DeleteInstanceRequest `object`
  * DeleteElasticIp [Boolean](#boolean)
  * DeleteVolumes [Boolean](#boolean)
  * InstanceId **required** [String](#string)

### DeleteLayerRequest
* DeleteLayerRequest `object`
  * LayerId **required** [String](#string)

### DeleteStackRequest
* DeleteStackRequest `object`
  * StackId **required** [String](#string)

### DeleteUserProfileRequest
* DeleteUserProfileRequest `object`
  * IamUserArn **required** [String](#string)

### Deployment
* Deployment `object`: Describes a deployment of a stack or app.
  * AppId [String](#string)
  * Command [DeploymentCommand](#deploymentcommand)
  * Comment [String](#string)
  * CompletedAt [DateTime](#datetime)
  * CreatedAt [DateTime](#datetime)
  * CustomJson [String](#string)
  * DeploymentId [String](#string)
  * Duration [Integer](#integer)
  * IamUserArn [String](#string)
  * InstanceIds [Strings](#strings)
  * StackId [String](#string)
  * Status [String](#string)

### DeploymentCommand
* DeploymentCommand `object`: Used to specify a stack or deployment command.
  * Args [DeploymentCommandArgs](#deploymentcommandargs)
  * Name **required** [DeploymentCommandName](#deploymentcommandname)

### DeploymentCommandArgs
* DeploymentCommandArgs `array`
  * items `object`
    * key [String](#string)
    * value [Strings](#strings)

### DeploymentCommandName
* DeploymentCommandName `string` (values: install_dependencies, update_dependencies, update_custom_cookbooks, execute_recipes, configure, setup, deploy, rollback, start, stop, restart, undeploy)

### Deployments
* Deployments `array`
  * items [Deployment](#deployment)

### DeregisterEcsClusterRequest
* DeregisterEcsClusterRequest `object`
  * EcsClusterArn **required** [String](#string)

### DeregisterElasticIpRequest
* DeregisterElasticIpRequest `object`
  * ElasticIp **required** [String](#string)

### DeregisterInstanceRequest
* DeregisterInstanceRequest `object`
  * InstanceId **required** [String](#string)

### DeregisterRdsDbInstanceRequest
* DeregisterRdsDbInstanceRequest `object`
  * RdsDbInstanceArn **required** [String](#string)

### DeregisterVolumeRequest
* DeregisterVolumeRequest `object`
  * VolumeId **required** [String](#string)

### DescribeAgentVersionsRequest
* DescribeAgentVersionsRequest `object`
  * ConfigurationManager [StackConfigurationManager](#stackconfigurationmanager)
  * StackId [String](#string)

### DescribeAgentVersionsResult
* DescribeAgentVersionsResult `object`: Contains the response to a <code>DescribeAgentVersions</code> request.
  * AgentVersions [AgentVersions](#agentversions)

### DescribeAppsRequest
* DescribeAppsRequest `object`
  * AppIds [Strings](#strings)
  * StackId [String](#string)

### DescribeAppsResult
* DescribeAppsResult `object`: Contains the response to a <code>DescribeApps</code> request.
  * Apps [Apps](#apps)

### DescribeCommandsRequest
* DescribeCommandsRequest `object`
  * CommandIds [Strings](#strings)
  * DeploymentId [String](#string)
  * InstanceId [String](#string)

### DescribeCommandsResult
* DescribeCommandsResult `object`: Contains the response to a <code>DescribeCommands</code> request.
  * Commands [Commands](#commands)

### DescribeDeploymentsRequest
* DescribeDeploymentsRequest `object`
  * AppId [String](#string)
  * DeploymentIds [Strings](#strings)
  * StackId [String](#string)

### DescribeDeploymentsResult
* DescribeDeploymentsResult `object`: Contains the response to a <code>DescribeDeployments</code> request.
  * Deployments [Deployments](#deployments)

### DescribeEcsClustersRequest
* DescribeEcsClustersRequest `object`
  * EcsClusterArns [Strings](#strings)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * StackId [String](#string)

### DescribeEcsClustersResult
* DescribeEcsClustersResult `object`: Contains the response to a <code>DescribeEcsClusters</code> request.
  * EcsClusters [EcsClusters](#ecsclusters)
  * NextToken [String](#string)

### DescribeElasticIpsRequest
* DescribeElasticIpsRequest `object`
  * InstanceId [String](#string)
  * Ips [Strings](#strings)
  * StackId [String](#string)

### DescribeElasticIpsResult
* DescribeElasticIpsResult `object`: Contains the response to a <code>DescribeElasticIps</code> request.
  * ElasticIps [ElasticIps](#elasticips)

### DescribeElasticLoadBalancersRequest
* DescribeElasticLoadBalancersRequest `object`
  * LayerIds [Strings](#strings)
  * StackId [String](#string)

### DescribeElasticLoadBalancersResult
* DescribeElasticLoadBalancersResult `object`: Contains the response to a <code>DescribeElasticLoadBalancers</code> request.
  * ElasticLoadBalancers [ElasticLoadBalancers](#elasticloadbalancers)

### DescribeInstancesRequest
* DescribeInstancesRequest `object`
  * InstanceIds [Strings](#strings)
  * LayerId [String](#string)
  * StackId [String](#string)

### DescribeInstancesResult
* DescribeInstancesResult `object`: Contains the response to a <code>DescribeInstances</code> request.
  * Instances [Instances](#instances)

### DescribeLayersRequest
* DescribeLayersRequest `object`
  * LayerIds [Strings](#strings)
  * StackId [String](#string)

### DescribeLayersResult
* DescribeLayersResult `object`: Contains the response to a <code>DescribeLayers</code> request.
  * Layers [Layers](#layers)

### DescribeLoadBasedAutoScalingRequest
* DescribeLoadBasedAutoScalingRequest `object`
  * LayerIds **required** [Strings](#strings)

### DescribeLoadBasedAutoScalingResult
* DescribeLoadBasedAutoScalingResult `object`: Contains the response to a <code>DescribeLoadBasedAutoScaling</code> request.
  * LoadBasedAutoScalingConfigurations [LoadBasedAutoScalingConfigurations](#loadbasedautoscalingconfigurations)

### DescribeMyUserProfileResult
* DescribeMyUserProfileResult `object`: Contains the response to a <code>DescribeMyUserProfile</code> request.
  * UserProfile [SelfUserProfile](#selfuserprofile)

### DescribeOperatingSystemsResponse
* DescribeOperatingSystemsResponse `object`: The response to a <code>DescribeOperatingSystems</code> request.
  * OperatingSystems [OperatingSystems](#operatingsystems)

### DescribePermissionsRequest
* DescribePermissionsRequest `object`
  * IamUserArn [String](#string)
  * StackId [String](#string)

### DescribePermissionsResult
* DescribePermissionsResult `object`: Contains the response to a <code>DescribePermissions</code> request.
  * Permissions [Permissions](#permissions)

### DescribeRaidArraysRequest
* DescribeRaidArraysRequest `object`
  * InstanceId [String](#string)
  * RaidArrayIds [Strings](#strings)
  * StackId [String](#string)

### DescribeRaidArraysResult
* DescribeRaidArraysResult `object`: Contains the response to a <code>DescribeRaidArrays</code> request.
  * RaidArrays [RaidArrays](#raidarrays)

### DescribeRdsDbInstancesRequest
* DescribeRdsDbInstancesRequest `object`
  * RdsDbInstanceArns [Strings](#strings)
  * StackId **required** [String](#string)

### DescribeRdsDbInstancesResult
* DescribeRdsDbInstancesResult `object`: Contains the response to a <code>DescribeRdsDbInstances</code> request.
  * RdsDbInstances [RdsDbInstances](#rdsdbinstances)

### DescribeServiceErrorsRequest
* DescribeServiceErrorsRequest `object`
  * InstanceId [String](#string)
  * ServiceErrorIds [Strings](#strings)
  * StackId [String](#string)

### DescribeServiceErrorsResult
* DescribeServiceErrorsResult `object`: Contains the response to a <code>DescribeServiceErrors</code> request.
  * ServiceErrors [ServiceErrors](#serviceerrors)

### DescribeStackProvisioningParametersRequest
* DescribeStackProvisioningParametersRequest `object`
  * StackId **required** [String](#string)

### DescribeStackProvisioningParametersResult
* DescribeStackProvisioningParametersResult `object`: Contains the response to a <code>DescribeStackProvisioningParameters</code> request.
  * AgentInstallerUrl [String](#string)
  * Parameters [Parameters](#parameters)

### DescribeStackSummaryRequest
* DescribeStackSummaryRequest `object`
  * StackId **required** [String](#string)

### DescribeStackSummaryResult
* DescribeStackSummaryResult `object`: Contains the response to a <code>DescribeStackSummary</code> request.
  * StackSummary [StackSummary](#stacksummary)

### DescribeStacksRequest
* DescribeStacksRequest `object`
  * StackIds [Strings](#strings)

### DescribeStacksResult
* DescribeStacksResult `object`: Contains the response to a <code>DescribeStacks</code> request.
  * Stacks [Stacks](#stacks)

### DescribeTimeBasedAutoScalingRequest
* DescribeTimeBasedAutoScalingRequest `object`
  * InstanceIds **required** [Strings](#strings)

### DescribeTimeBasedAutoScalingResult
* DescribeTimeBasedAutoScalingResult `object`: Contains the response to a <code>DescribeTimeBasedAutoScaling</code> request.
  * TimeBasedAutoScalingConfigurations [TimeBasedAutoScalingConfigurations](#timebasedautoscalingconfigurations)

### DescribeUserProfilesRequest
* DescribeUserProfilesRequest `object`
  * IamUserArns [Strings](#strings)

### DescribeUserProfilesResult
* DescribeUserProfilesResult `object`: Contains the response to a <code>DescribeUserProfiles</code> request.
  * UserProfiles [UserProfiles](#userprofiles)

### DescribeVolumesRequest
* DescribeVolumesRequest `object`
  * InstanceId [String](#string)
  * RaidArrayId [String](#string)
  * StackId [String](#string)
  * VolumeIds [Strings](#strings)

### DescribeVolumesResult
* DescribeVolumesResult `object`: Contains the response to a <code>DescribeVolumes</code> request.
  * Volumes [Volumes](#volumes)

### DetachElasticLoadBalancerRequest
* DetachElasticLoadBalancerRequest `object`
  * ElasticLoadBalancerName **required** [String](#string)
  * LayerId **required** [String](#string)

### DisassociateElasticIpRequest
* DisassociateElasticIpRequest `object`
  * ElasticIp **required** [String](#string)

### Double
* Double `number`

### EbsBlockDevice
* EbsBlockDevice `object`: Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a> data type.
  * DeleteOnTermination [Boolean](#boolean)
  * Iops [Integer](#integer)
  * SnapshotId [String](#string)
  * VolumeSize [Integer](#integer)
  * VolumeType [VolumeType](#volumetype)

### EcsCluster
* EcsCluster `object`: Describes a registered Amazon ECS cluster.
  * EcsClusterArn [String](#string)
  * EcsClusterName [String](#string)
  * RegisteredAt [DateTime](#datetime)
  * StackId [String](#string)

### EcsClusters
* EcsClusters `array`
  * items [EcsCluster](#ecscluster)

### ElasticIp
* ElasticIp `object`: Describes an Elastic IP address.
  * Domain [String](#string)
  * InstanceId [String](#string)
  * Ip [String](#string)
  * Name [String](#string)
  * Region [String](#string)

### ElasticIps
* ElasticIps `array`
  * items [ElasticIp](#elasticip)

### ElasticLoadBalancer
* ElasticLoadBalancer `object`: Describes an Elastic Load Balancing instance.
  * AvailabilityZones [Strings](#strings)
  * DnsName [String](#string)
  * Ec2InstanceIds [Strings](#strings)
  * ElasticLoadBalancerName [String](#string)
  * LayerId [String](#string)
  * Region [String](#string)
  * StackId [String](#string)
  * SubnetIds [Strings](#strings)
  * VpcId [String](#string)

### ElasticLoadBalancers
* ElasticLoadBalancers `array`
  * items [ElasticLoadBalancer](#elasticloadbalancer)

### EnvironmentVariable
* EnvironmentVariable `object`: Represents an app's environment variable.
  * Key **required** [String](#string)
  * Secure [Boolean](#boolean)
  * Value **required** [String](#string)

### EnvironmentVariables
* EnvironmentVariables `array`
  * items [EnvironmentVariable](#environmentvariable)

### GetHostnameSuggestionRequest
* GetHostnameSuggestionRequest `object`
  * LayerId **required** [String](#string)

### GetHostnameSuggestionResult
* GetHostnameSuggestionResult `object`: Contains the response to a <code>GetHostnameSuggestion</code> request.
  * Hostname [String](#string)
  * LayerId [String](#string)

### GrantAccessRequest
* GrantAccessRequest `object`
  * InstanceId **required** [String](#string)
  * ValidForInMinutes [ValidForInMinutes](#validforinminutes)

### GrantAccessResult
* GrantAccessResult `object`: Contains the response to a <code>GrantAccess</code> request.
  * TemporaryCredential [TemporaryCredential](#temporarycredential)

### Hour
* Hour `string`

### Instance
* Instance `object`: Describes an instance.
  * AgentVersion [String](#string)
  * AmiId [String](#string)
  * Architecture [Architecture](#architecture)
  * Arn [String](#string)
  * AutoScalingType [AutoScalingType](#autoscalingtype)
  * AvailabilityZone [String](#string)
  * BlockDeviceMappings [BlockDeviceMappings](#blockdevicemappings)
  * CreatedAt [DateTime](#datetime)
  * EbsOptimized [Boolean](#boolean)
  * Ec2InstanceId [String](#string)
  * EcsClusterArn [String](#string)
  * EcsContainerInstanceArn [String](#string)
  * ElasticIp [String](#string)
  * Hostname [String](#string)
  * InfrastructureClass [String](#string)
  * InstallUpdatesOnBoot [Boolean](#boolean)
  * InstanceId [String](#string)
  * InstanceProfileArn [String](#string)
  * InstanceType [String](#string)
  * LastServiceErrorId [String](#string)
  * LayerIds [Strings](#strings)
  * Os [String](#string)
  * Platform [String](#string)
  * PrivateDns [String](#string)
  * PrivateIp [String](#string)
  * PublicDns [String](#string)
  * PublicIp [String](#string)
  * RegisteredBy [String](#string)
  * ReportedAgentVersion [String](#string)
  * ReportedOs [ReportedOs](#reportedos)
  * RootDeviceType [RootDeviceType](#rootdevicetype)
  * RootDeviceVolumeId [String](#string)
  * SecurityGroupIds [Strings](#strings)
  * SshHostDsaKeyFingerprint [String](#string)
  * SshHostRsaKeyFingerprint [String](#string)
  * SshKeyName [String](#string)
  * StackId [String](#string)
  * Status [String](#string)
  * SubnetId [String](#string)
  * Tenancy [String](#string)
  * VirtualizationType [VirtualizationType](#virtualizationtype)

### InstanceIdentity
* InstanceIdentity `object`: Contains a description of an Amazon EC2 instance from the Amazon EC2 metadata service. For more information, see <a href="http://docs.aws.amazon.com/sdkfornet/latest/apidocs/Index.html">Instance Metadata and User Data</a>.
  * Document [String](#string)
  * Signature [String](#string)

### Instances
* Instances `array`
  * items [Instance](#instance)

### InstancesCount
* InstancesCount `object`: Describes how many instances a stack has for each status.
  * Assigning [Integer](#integer)
  * Booting [Integer](#integer)
  * ConnectionLost [Integer](#integer)
  * Deregistering [Integer](#integer)
  * Online [Integer](#integer)
  * Pending [Integer](#integer)
  * Rebooting [Integer](#integer)
  * Registered [Integer](#integer)
  * Registering [Integer](#integer)
  * Requested [Integer](#integer)
  * RunningSetup [Integer](#integer)
  * SetupFailed [Integer](#integer)
  * ShuttingDown [Integer](#integer)
  * StartFailed [Integer](#integer)
  * StopFailed [Integer](#integer)
  * Stopped [Integer](#integer)
  * Stopping [Integer](#integer)
  * Terminated [Integer](#integer)
  * Terminating [Integer](#integer)
  * Unassigning [Integer](#integer)

### Integer
* Integer `integer`

### Layer
* Layer `object`: Describes a layer.
  * Arn [String](#string)
  * Attributes [LayerAttributes](#layerattributes)
  * AutoAssignElasticIps [Boolean](#boolean)
  * AutoAssignPublicIps [Boolean](#boolean)
  * CloudWatchLogsConfiguration [CloudWatchLogsConfiguration](#cloudwatchlogsconfiguration)
  * CreatedAt [DateTime](#datetime)
  * CustomInstanceProfileArn [String](#string)
  * CustomJson [String](#string)
  * CustomRecipes [Recipes](#recipes)
  * CustomSecurityGroupIds [Strings](#strings)
  * DefaultRecipes [Recipes](#recipes)
  * DefaultSecurityGroupNames [Strings](#strings)
  * EnableAutoHealing [Boolean](#boolean)
  * InstallUpdatesOnBoot [Boolean](#boolean)
  * LayerId [String](#string)
  * LifecycleEventConfiguration [LifecycleEventConfiguration](#lifecycleeventconfiguration)
  * Name [String](#string)
  * Packages [Strings](#strings)
  * Shortname [String](#string)
  * StackId [String](#string)
  * Type [LayerType](#layertype)
  * UseEbsOptimizedInstances [Boolean](#boolean)
  * VolumeConfigurations [VolumeConfigurations](#volumeconfigurations)

### LayerAttributes
* LayerAttributes `array`
  * items `object`
    * key [LayerAttributesKeys](#layerattributeskeys)
    * value [String](#string)

### LayerAttributesKeys
* LayerAttributesKeys `string` (values: EcsClusterArn, EnableHaproxyStats, HaproxyStatsUrl, HaproxyStatsUser, HaproxyStatsPassword, HaproxyHealthCheckUrl, HaproxyHealthCheckMethod, MysqlRootPassword, MysqlRootPasswordUbiquitous, GangliaUrl, GangliaUser, GangliaPassword, MemcachedMemory, NodejsVersion, RubyVersion, RubygemsVersion, ManageBundler, BundlerVersion, RailsStack, PassengerVersion, Jvm, JvmVersion, JvmOptions, JavaAppServer, JavaAppServerVersion)

### LayerType
* LayerType `string` (values: aws-flow-ruby, ecs-cluster, java-app, lb, web, php-app, rails-app, nodejs-app, memcached, db-master, monitoring-master, custom)

### Layers
* Layers `array`
  * items [Layer](#layer)

### LifecycleEventConfiguration
* LifecycleEventConfiguration `object`: Specifies the lifecycle event configuration
  * Shutdown [ShutdownEventConfiguration](#shutdowneventconfiguration)

### ListTagsRequest
* ListTagsRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ResourceArn **required** [ResourceArn](#resourcearn)

### ListTagsResult
* ListTagsResult `object`: Contains the response to a <code>ListTags</code> request.
  * NextToken [NextToken](#nexttoken)
  * Tags [Tags](#tags)

### LoadBasedAutoScalingConfiguration
* LoadBasedAutoScalingConfiguration `object`: Describes a layer's load-based auto scaling configuration.
  * DownScaling [AutoScalingThresholds](#autoscalingthresholds)
  * Enable [Boolean](#boolean)
  * LayerId [String](#string)
  * UpScaling [AutoScalingThresholds](#autoscalingthresholds)

### LoadBasedAutoScalingConfigurations
* LoadBasedAutoScalingConfigurations `array`
  * items [LoadBasedAutoScalingConfiguration](#loadbasedautoscalingconfiguration)

### MaxResults
* MaxResults `integer`

### Minute
* Minute `integer`

### NextToken
* NextToken `string`

### OperatingSystem
* OperatingSystem `object`: Describes supported operating systems in AWS OpsWorks Stacks.
  * ConfigurationManagers [OperatingSystemConfigurationManagers](#operatingsystemconfigurationmanagers)
  * Id [String](#string)
  * Name [String](#string)
  * ReportedName [String](#string)
  * ReportedVersion [String](#string)
  * Supported [Boolean](#boolean)
  * Type [String](#string)

### OperatingSystemConfigurationManager
* OperatingSystemConfigurationManager `object`: A block that contains information about the configuration manager (Chef) and the versions of the configuration manager that are supported for an operating system.
  * Name [String](#string)
  * Version [String](#string)

### OperatingSystemConfigurationManagers
* OperatingSystemConfigurationManagers `array`
  * items [OperatingSystemConfigurationManager](#operatingsystemconfigurationmanager)

### OperatingSystems
* OperatingSystems `array`
  * items [OperatingSystem](#operatingsystem)

### Parameters
* Parameters `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### Permission
* Permission `object`: Describes stack or user permissions.
  * AllowSsh [Boolean](#boolean)
  * AllowSudo [Boolean](#boolean)
  * IamUserArn [String](#string)
  * Level [String](#string)
  * StackId [String](#string)

### Permissions
* Permissions `array`
  * items [Permission](#permission)

### RaidArray
* RaidArray `object`: Describes an instance's RAID array.
  * AvailabilityZone [String](#string)
  * CreatedAt [DateTime](#datetime)
  * Device [String](#string)
  * InstanceId [String](#string)
  * Iops [Integer](#integer)
  * MountPoint [String](#string)
  * Name [String](#string)
  * NumberOfDisks [Integer](#integer)
  * RaidArrayId [String](#string)
  * RaidLevel [Integer](#integer)
  * Size [Integer](#integer)
  * StackId [String](#string)
  * VolumeType [String](#string)

### RaidArrays
* RaidArrays `array`
  * items [RaidArray](#raidarray)

### RdsDbInstance
* RdsDbInstance `object`: Describes an Amazon RDS instance.
  * Address [String](#string)
  * DbInstanceIdentifier [String](#string)
  * DbPassword [String](#string)
  * DbUser [String](#string)
  * Engine [String](#string)
  * MissingOnRds [Boolean](#boolean)
  * RdsDbInstanceArn [String](#string)
  * Region [String](#string)
  * StackId [String](#string)

### RdsDbInstances
* RdsDbInstances `array`
  * items [RdsDbInstance](#rdsdbinstance)

### RebootInstanceRequest
* RebootInstanceRequest `object`
  * InstanceId **required** [String](#string)

### Recipes
* Recipes `object`: <p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. In addition, you can provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events. </p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the .rb extension. For example: phpapp2::dbsetup specifies the dbsetup.rb recipe in the repository's phpapp2 folder.</p>
  * Configure [Strings](#strings)
  * Deploy [Strings](#strings)
  * Setup [Strings](#strings)
  * Shutdown [Strings](#strings)
  * Undeploy [Strings](#strings)

### RegisterEcsClusterRequest
* RegisterEcsClusterRequest `object`
  * EcsClusterArn **required** [String](#string)
  * StackId **required** [String](#string)

### RegisterEcsClusterResult
* RegisterEcsClusterResult `object`: Contains the response to a <code>RegisterEcsCluster</code> request.
  * EcsClusterArn [String](#string)

### RegisterElasticIpRequest
* RegisterElasticIpRequest `object`
  * ElasticIp **required** [String](#string)
  * StackId **required** [String](#string)

### RegisterElasticIpResult
* RegisterElasticIpResult `object`: Contains the response to a <code>RegisterElasticIp</code> request.
  * ElasticIp [String](#string)

### RegisterInstanceRequest
* RegisterInstanceRequest `object`
  * Hostname [String](#string)
  * InstanceIdentity [InstanceIdentity](#instanceidentity)
  * PrivateIp [String](#string)
  * PublicIp [String](#string)
  * RsaPublicKey [String](#string)
  * RsaPublicKeyFingerprint [String](#string)
  * StackId **required** [String](#string)

### RegisterInstanceResult
* RegisterInstanceResult `object`: Contains the response to a <code>RegisterInstanceResult</code> request.
  * InstanceId [String](#string)

### RegisterRdsDbInstanceRequest
* RegisterRdsDbInstanceRequest `object`
  * DbPassword **required** [String](#string)
  * DbUser **required** [String](#string)
  * RdsDbInstanceArn **required** [String](#string)
  * StackId **required** [String](#string)

### RegisterVolumeRequest
* RegisterVolumeRequest `object`
  * Ec2VolumeId [String](#string)
  * StackId **required** [String](#string)

### RegisterVolumeResult
* RegisterVolumeResult `object`: Contains the response to a <code>RegisterVolume</code> request.
  * VolumeId [String](#string)

### ReportedOs
* ReportedOs `object`: A registered instance's reported operating system.
  * Family [String](#string)
  * Name [String](#string)
  * Version [String](#string)

### ResourceArn
* ResourceArn `string`

### ResourceNotFoundException
* ResourceNotFoundException `object`: Indicates that a resource was not found.
  * message [String](#string)

### RootDeviceType
* RootDeviceType `string` (values: ebs, instance-store)

### SelfUserProfile
* SelfUserProfile `object`: Describes a user's SSH information.
  * IamUserArn [String](#string)
  * Name [String](#string)
  * SshPublicKey [String](#string)
  * SshUsername [String](#string)

### ServiceError
* ServiceError `object`: Describes an AWS OpsWorks Stacks service error.
  * CreatedAt [DateTime](#datetime)
  * InstanceId [String](#string)
  * Message [String](#string)
  * ServiceErrorId [String](#string)
  * StackId [String](#string)
  * Type [String](#string)

### ServiceErrors
* ServiceErrors `array`
  * items [ServiceError](#serviceerror)

### SetLoadBasedAutoScalingRequest
* SetLoadBasedAutoScalingRequest `object`
  * DownScaling [AutoScalingThresholds](#autoscalingthresholds)
  * Enable [Boolean](#boolean)
  * LayerId **required** [String](#string)
  * UpScaling [AutoScalingThresholds](#autoscalingthresholds)

### SetPermissionRequest
* SetPermissionRequest `object`
  * AllowSsh [Boolean](#boolean)
  * AllowSudo [Boolean](#boolean)
  * IamUserArn **required** [String](#string)
  * Level [String](#string)
  * StackId **required** [String](#string)

### SetTimeBasedAutoScalingRequest
* SetTimeBasedAutoScalingRequest `object`
  * AutoScalingSchedule [WeeklyAutoScalingSchedule](#weeklyautoscalingschedule)
  * InstanceId **required** [String](#string)

### ShutdownEventConfiguration
* ShutdownEventConfiguration `object`: The Shutdown event configuration.
  * DelayUntilElbConnectionsDrained [Boolean](#boolean)
  * ExecutionTimeout [Integer](#integer)

### Source
* Source `object`: Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="http://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="http://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>.
  * Password [String](#string)
  * Revision [String](#string)
  * SshKey [String](#string)
  * Type [SourceType](#sourcetype)
  * Url [String](#string)
  * Username [String](#string)

### SourceType
* SourceType `string` (values: git, svn, archive, s3)

### SslConfiguration
* SslConfiguration `object`: Describes an app's SSL configuration.
  * Certificate **required** [String](#string)
  * Chain [String](#string)
  * PrivateKey **required** [String](#string)

### Stack
* Stack `object`: Describes a stack.
  * AgentVersion [String](#string)
  * Arn [String](#string)
  * Attributes [StackAttributes](#stackattributes)
  * ChefConfiguration [ChefConfiguration](#chefconfiguration)
  * ConfigurationManager [StackConfigurationManager](#stackconfigurationmanager)
  * CreatedAt [DateTime](#datetime)
  * CustomCookbooksSource [Source](#source)
  * CustomJson [String](#string)
  * DefaultAvailabilityZone [String](#string)
  * DefaultInstanceProfileArn [String](#string)
  * DefaultOs [String](#string)
  * DefaultRootDeviceType [RootDeviceType](#rootdevicetype)
  * DefaultSshKeyName [String](#string)
  * DefaultSubnetId [String](#string)
  * HostnameTheme [String](#string)
  * Name [String](#string)
  * Region [String](#string)
  * ServiceRoleArn [String](#string)
  * StackId [String](#string)
  * UseCustomCookbooks [Boolean](#boolean)
  * UseOpsworksSecurityGroups [Boolean](#boolean)
  * VpcId [String](#string)

### StackAttributes
* StackAttributes `array`
  * items `object`
    * key [StackAttributesKeys](#stackattributeskeys)
    * value [String](#string)

### StackAttributesKeys
* StackAttributesKeys `string` (values: Color)

### StackConfigurationManager
* StackConfigurationManager `object`: Describes the configuration manager.
  * Name [String](#string)
  * Version [String](#string)

### StackSummary
* StackSummary `object`: Summarizes the number of layers, instances, and apps in a stack.
  * AppsCount [Integer](#integer)
  * Arn [String](#string)
  * InstancesCount [InstancesCount](#instancescount)
  * LayersCount [Integer](#integer)
  * Name [String](#string)
  * StackId [String](#string)

### Stacks
* Stacks `array`
  * items [Stack](#stack)

### StartInstanceRequest
* StartInstanceRequest `object`
  * InstanceId **required** [String](#string)

### StartStackRequest
* StartStackRequest `object`
  * StackId **required** [String](#string)

### StopInstanceRequest
* StopInstanceRequest `object`
  * Force [Boolean](#boolean)
  * InstanceId **required** [String](#string)

### StopStackRequest
* StopStackRequest `object`
  * StackId **required** [String](#string)

### String
* String `string`

### Strings
* Strings `array`
  * items [String](#string)

### Switch
* Switch `string`

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceArn **required** [ResourceArn](#resourcearn)
  * Tags **required** [Tags](#tags)

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items `object`
    * key [TagKey](#tagkey)
    * value [TagValue](#tagvalue)

### TemporaryCredential
* TemporaryCredential `object`: Contains the data needed by RDP clients such as the Microsoft Remote Desktop Connection to log in to the instance.
  * InstanceId [String](#string)
  * Password [String](#string)
  * Username [String](#string)
  * ValidForInMinutes [Integer](#integer)

### TimeBasedAutoScalingConfiguration
* TimeBasedAutoScalingConfiguration `object`: Describes an instance's time-based auto scaling configuration.
  * AutoScalingSchedule [WeeklyAutoScalingSchedule](#weeklyautoscalingschedule)
  * InstanceId [String](#string)

### TimeBasedAutoScalingConfigurations
* TimeBasedAutoScalingConfigurations `array`
  * items [TimeBasedAutoScalingConfiguration](#timebasedautoscalingconfiguration)

### UnassignInstanceRequest
* UnassignInstanceRequest `object`
  * InstanceId **required** [String](#string)

### UnassignVolumeRequest
* UnassignVolumeRequest `object`
  * VolumeId **required** [String](#string)

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required** [ResourceArn](#resourcearn)
  * TagKeys **required** [TagKeys](#tagkeys)

### UpdateAppRequest
* UpdateAppRequest `object`
  * AppId **required** [String](#string)
  * AppSource [Source](#source)
  * Attributes [AppAttributes](#appattributes)
  * DataSources [DataSources](#datasources)
  * Description [String](#string)
  * Domains [Strings](#strings)
  * EnableSsl [Boolean](#boolean)
  * Environment [EnvironmentVariables](#environmentvariables)
  * Name [String](#string)
  * SslConfiguration [SslConfiguration](#sslconfiguration)
  * Type [AppType](#apptype)

### UpdateElasticIpRequest
* UpdateElasticIpRequest `object`
  * ElasticIp **required** [String](#string)
  * Name [String](#string)

### UpdateInstanceRequest
* UpdateInstanceRequest `object`
  * AgentVersion [String](#string)
  * AmiId [String](#string)
  * Architecture [Architecture](#architecture)
  * AutoScalingType [AutoScalingType](#autoscalingtype)
  * EbsOptimized [Boolean](#boolean)
  * Hostname [String](#string)
  * InstallUpdatesOnBoot [Boolean](#boolean)
  * InstanceId **required** [String](#string)
  * InstanceType [String](#string)
  * LayerIds [Strings](#strings)
  * Os [String](#string)
  * SshKeyName [String](#string)

### UpdateLayerRequest
* UpdateLayerRequest `object`
  * Attributes [LayerAttributes](#layerattributes)
  * AutoAssignElasticIps [Boolean](#boolean)
  * AutoAssignPublicIps [Boolean](#boolean)
  * CloudWatchLogsConfiguration [CloudWatchLogsConfiguration](#cloudwatchlogsconfiguration)
  * CustomInstanceProfileArn [String](#string)
  * CustomJson [String](#string)
  * CustomRecipes [Recipes](#recipes)
  * CustomSecurityGroupIds [Strings](#strings)
  * EnableAutoHealing [Boolean](#boolean)
  * InstallUpdatesOnBoot [Boolean](#boolean)
  * LayerId **required** [String](#string)
  * LifecycleEventConfiguration [LifecycleEventConfiguration](#lifecycleeventconfiguration)
  * Name [String](#string)
  * Packages [Strings](#strings)
  * Shortname [String](#string)
  * UseEbsOptimizedInstances [Boolean](#boolean)
  * VolumeConfigurations [VolumeConfigurations](#volumeconfigurations)

### UpdateMyUserProfileRequest
* UpdateMyUserProfileRequest `object`
  * SshPublicKey [String](#string)

### UpdateRdsDbInstanceRequest
* UpdateRdsDbInstanceRequest `object`
  * DbPassword [String](#string)
  * DbUser [String](#string)
  * RdsDbInstanceArn **required** [String](#string)

### UpdateStackRequest
* UpdateStackRequest `object`
  * AgentVersion [String](#string)
  * Attributes [StackAttributes](#stackattributes)
  * ChefConfiguration [ChefConfiguration](#chefconfiguration)
  * ConfigurationManager [StackConfigurationManager](#stackconfigurationmanager)
  * CustomCookbooksSource [Source](#source)
  * CustomJson [String](#string)
  * DefaultAvailabilityZone [String](#string)
  * DefaultInstanceProfileArn [String](#string)
  * DefaultOs [String](#string)
  * DefaultRootDeviceType [RootDeviceType](#rootdevicetype)
  * DefaultSshKeyName [String](#string)
  * DefaultSubnetId [String](#string)
  * HostnameTheme [String](#string)
  * Name [String](#string)
  * ServiceRoleArn [String](#string)
  * StackId **required** [String](#string)
  * UseCustomCookbooks [Boolean](#boolean)
  * UseOpsworksSecurityGroups [Boolean](#boolean)

### UpdateUserProfileRequest
* UpdateUserProfileRequest `object`
  * AllowSelfManagement [Boolean](#boolean)
  * IamUserArn **required** [String](#string)
  * SshPublicKey [String](#string)
  * SshUsername [String](#string)

### UpdateVolumeRequest
* UpdateVolumeRequest `object`
  * MountPoint [String](#string)
  * Name [String](#string)
  * VolumeId **required** [String](#string)

### UserProfile
* UserProfile `object`: Describes a user's SSH information.
  * AllowSelfManagement [Boolean](#boolean)
  * IamUserArn [String](#string)
  * Name [String](#string)
  * SshPublicKey [String](#string)
  * SshUsername [String](#string)

### UserProfiles
* UserProfiles `array`
  * items [UserProfile](#userprofile)

### ValidForInMinutes
* ValidForInMinutes `integer`

### ValidationException
* ValidationException `object`: Indicates that a request was not valid.
  * message [String](#string)

### VirtualizationType
* VirtualizationType `string` (values: paravirtual, hvm)

### Volume
* Volume `object`: Describes an instance's Amazon EBS volume.
  * AvailabilityZone [String](#string)
  * Device [String](#string)
  * Ec2VolumeId [String](#string)
  * Encrypted [Boolean](#boolean)
  * InstanceId [String](#string)
  * Iops [Integer](#integer)
  * MountPoint [String](#string)
  * Name [String](#string)
  * RaidArrayId [String](#string)
  * Region [String](#string)
  * Size [Integer](#integer)
  * Status [String](#string)
  * VolumeId [String](#string)
  * VolumeType [String](#string)

### VolumeConfiguration
* VolumeConfiguration `object`: Describes an Amazon EBS volume configuration.
  * Encrypted [Boolean](#boolean)
  * Iops [Integer](#integer)
  * MountPoint **required** [String](#string)
  * NumberOfDisks **required** [Integer](#integer)
  * RaidLevel [Integer](#integer)
  * Size **required** [Integer](#integer)
  * VolumeType [String](#string)

### VolumeConfigurations
* VolumeConfigurations `array`
  * items [VolumeConfiguration](#volumeconfiguration)

### VolumeType
* VolumeType `string` (values: gp2, io1, standard)

### Volumes
* Volumes `array`
  * items [Volume](#volume)

### WeeklyAutoScalingSchedule
* WeeklyAutoScalingSchedule `object`: <p>Describes a time-based instance's auto scaling schedule. The schedule consists of a set of key-value pairs.</p> <ul> <li> <p>The key is the time period (a UTC hour) and must be an integer from 0 - 23.</p> </li> <li> <p>The value indicates whether the instance should be online or offline for the specified period, and must be set to "on" or "off"</p> </li> </ul> <p>The default setting for all time periods is off, so you use the following parameters primarily to specify the online periods. You don't have to explicitly specify offline periods unless you want to change an online period to an offline period.</p> <p>The following example specifies that the instance should be online for four hours, from UTC 1200 - 1600. It will be off for the remainder of the day.</p> <p> <code> { "12":"on", "13":"on", "14":"on", "15":"on" } </code> </p>
  * Friday [DailyAutoScalingSchedule](#dailyautoscalingschedule)
  * Monday [DailyAutoScalingSchedule](#dailyautoscalingschedule)
  * Saturday [DailyAutoScalingSchedule](#dailyautoscalingschedule)
  * Sunday [DailyAutoScalingSchedule](#dailyautoscalingschedule)
  * Thursday [DailyAutoScalingSchedule](#dailyautoscalingschedule)
  * Tuesday [DailyAutoScalingSchedule](#dailyautoscalingschedule)
  * Wednesday [DailyAutoScalingSchedule](#dailyautoscalingschedule)


