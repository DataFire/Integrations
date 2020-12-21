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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS OpsWorks</fullname> <p>Welcome to the <i>AWS OpsWorks Stacks API Reference</i>. This guide provides descriptions, syntax, and usage examples for AWS OpsWorks Stacks actions and data types, including common parameters and error codes. </p> <p>AWS OpsWorks Stacks is an application management service that provides an integrated experience for overseeing the complete application lifecycle. For information about this product, go to the <a href="http://aws.amazon.com/opsworks/">AWS OpsWorks</a> details page. </p> <p> <b>SDKs and CLI</b> </p> <p>The most common way to use the AWS OpsWorks Stacks API is by using the AWS Command Line Interface (CLI) or by using one of the AWS SDKs to implement applications in your preferred language. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">AWS CLI</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/opsworks/AWSOpsWorksClient.html">AWS SDK for Java</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/html/N_Amazon_OpsWorks.htm">AWS SDK for .NET</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/aws-sdk-php-2/latest/class-Aws.OpsWorks.OpsWorksClient.html">AWS SDK for PHP 2</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/sdkforruby/api/">AWS SDK for Ruby</a> </p> </li> <li> <p> <a href="http://aws.amazon.com/documentation/sdkforjavascript/">AWS SDK for Node.js</a> </p> </li> <li> <p> <a href="http://docs.pythonboto.org/en/latest/ref/opsworks.html">AWS SDK for Python(Boto)</a> </p> </li> </ul> <p> <b>Endpoints</b> </p> <p>AWS OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Stacks can only be accessed or managed within the endpoint in which they are created.</p> <ul> <li> <p>opsworks.us-east-1.amazonaws.com</p> </li> <li> <p>opsworks.us-east-2.amazonaws.com</p> </li> <li> <p>opsworks.us-west-1.amazonaws.com</p> </li> <li> <p>opsworks.us-west-2.amazonaws.com</p> </li> <li> <p>opsworks.ca-central-1.amazonaws.com (API only; not available in the AWS console)</p> </li> <li> <p>opsworks.eu-west-1.amazonaws.com</p> </li> <li> <p>opsworks.eu-west-2.amazonaws.com</p> </li> <li> <p>opsworks.eu-west-3.amazonaws.com</p> </li> <li> <p>opsworks.eu-central-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-northeast-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-northeast-2.amazonaws.com</p> </li> <li> <p>opsworks.ap-south-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-southeast-1.amazonaws.com</p> </li> <li> <p>opsworks.ap-southeast-2.amazonaws.com</p> </li> <li> <p>opsworks.sa-east-1.amazonaws.com</p> </li> </ul> <p> <b>Chef Versions</b> </p> <p>When you call <a>CreateStack</a>, <a>CloneStack</a>, or <a>UpdateStack</a> we recommend you use the <code>ConfigurationManager</code> parameter to specify the Chef version. The recommended and default value for Linux stacks is currently 12. Windows stacks use Chef 12.2. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-chef11.html">Chef Versions</a>.</p> <note> <p>You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks to Chef 12 as soon as possible.</p> </note>

## Actions

### AssignInstance



```js
amazonaws_opsworks.AssignInstance({
  "InstanceId": null,
  "LayerIds": null
}, context)
```

#### Input
* input `object`
  * InstanceId **required**
  * LayerIds **required**
    * items [String](#string)

#### Output
*Output schema unknown*

### AssignVolume



```js
amazonaws_opsworks.AssignVolume({
  "VolumeId": null
}, context)
```

#### Input
* input `object`
  * InstanceId
  * VolumeId **required**

#### Output
*Output schema unknown*

### AssociateElasticIp



```js
amazonaws_opsworks.AssociateElasticIp({
  "ElasticIp": null
}, context)
```

#### Input
* input `object`
  * ElasticIp **required**
  * InstanceId

#### Output
*Output schema unknown*

### AttachElasticLoadBalancer



```js
amazonaws_opsworks.AttachElasticLoadBalancer({
  "ElasticLoadBalancerName": null,
  "LayerId": null
}, context)
```

#### Input
* input `object`
  * ElasticLoadBalancerName **required**
  * LayerId **required**

#### Output
*Output schema unknown*

### CloneStack



```js
amazonaws_opsworks.CloneStack({
  "SourceStackId": null,
  "ServiceRoleArn": null
}, context)
```

#### Input
* input `object`
  * AgentVersion
  * Attributes
  * ChefConfiguration
    * BerkshelfVersion
    * ManageBerkshelf
  * CloneAppIds
    * items [String](#string)
  * ClonePermissions
  * ConfigurationManager
    * Name
    * Version
  * CustomCookbooksSource
    * Password
    * Revision
    * SshKey
    * Type
    * Url
    * Username
  * CustomJson
  * DefaultAvailabilityZone
  * DefaultInstanceProfileArn
  * DefaultOs
  * DefaultRootDeviceType
  * DefaultSshKeyName
  * DefaultSubnetId
  * HostnameTheme
  * Name
  * Region
  * ServiceRoleArn **required**
  * SourceStackId **required**
  * UseCustomCookbooks
  * UseOpsworksSecurityGroups
  * VpcId

#### Output
* output [CloneStackResult](#clonestackresult)

### CreateApp



```js
amazonaws_opsworks.CreateApp({
  "StackId": null,
  "Name": null,
  "Type": null
}, context)
```

#### Input
* input `object`
  * AppSource
    * Password
    * Revision
    * SshKey
    * Type
    * Url
    * Username
  * Attributes
  * DataSources
    * items [DataSource](#datasource)
  * Description
  * Domains
    * items [String](#string)
  * EnableSsl
  * Environment
    * items [EnvironmentVariable](#environmentvariable)
  * Name **required**
  * Shortname
  * SslConfiguration
    * Certificate **required**
    * Chain
    * PrivateKey **required**
  * StackId **required**
  * Type **required**

#### Output
* output [CreateAppResult](#createappresult)

### CreateDeployment



```js
amazonaws_opsworks.CreateDeployment({
  "StackId": null,
  "Command": null
}, context)
```

#### Input
* input `object`
  * AppId
  * Command **required**
    * Args
    * Name **required**
  * Comment
  * CustomJson
  * InstanceIds
    * items [String](#string)
  * LayerIds
    * items [String](#string)
  * StackId **required**

#### Output
* output [CreateDeploymentResult](#createdeploymentresult)

### CreateInstance



```js
amazonaws_opsworks.CreateInstance({
  "StackId": null,
  "LayerIds": null,
  "InstanceType": null
}, context)
```

#### Input
* input `object`
  * AgentVersion
  * AmiId
  * Architecture
  * AutoScalingType
  * AvailabilityZone
  * BlockDeviceMappings
    * items [BlockDeviceMapping](#blockdevicemapping)
  * EbsOptimized
  * Hostname
  * InstallUpdatesOnBoot
  * InstanceType **required**
  * LayerIds **required**
    * items [String](#string)
  * Os
  * RootDeviceType
  * SshKeyName
  * StackId **required**
  * SubnetId
  * Tenancy
  * VirtualizationType

#### Output
* output [CreateInstanceResult](#createinstanceresult)

### CreateLayer



```js
amazonaws_opsworks.CreateLayer({
  "StackId": null,
  "Type": null,
  "Name": null,
  "Shortname": null
}, context)
```

#### Input
* input `object`
  * Attributes
  * AutoAssignElasticIps
  * AutoAssignPublicIps
  * CloudWatchLogsConfiguration
    * Enabled
    * LogStreams
      * items [CloudWatchLogsLogStream](#cloudwatchlogslogstream)
  * CustomInstanceProfileArn
  * CustomJson
  * CustomRecipes
    * Configure
      * items [String](#string)
    * Deploy
      * items [String](#string)
    * Setup
      * items [String](#string)
    * Shutdown
      * items [String](#string)
    * Undeploy
      * items [String](#string)
  * CustomSecurityGroupIds
    * items [String](#string)
  * EnableAutoHealing
  * InstallUpdatesOnBoot
  * LifecycleEventConfiguration
    * Shutdown
      * DelayUntilElbConnectionsDrained
      * ExecutionTimeout
  * Name **required**
  * Packages
    * items [String](#string)
  * Shortname **required**
  * StackId **required**
  * Type **required**
  * UseEbsOptimizedInstances
  * VolumeConfigurations
    * items [VolumeConfiguration](#volumeconfiguration)

#### Output
* output [CreateLayerResult](#createlayerresult)

### CreateStack



```js
amazonaws_opsworks.CreateStack({
  "Name": null,
  "Region": null,
  "ServiceRoleArn": null,
  "DefaultInstanceProfileArn": null
}, context)
```

#### Input
* input `object`
  * AgentVersion
  * Attributes
  * ChefConfiguration
    * BerkshelfVersion
    * ManageBerkshelf
  * ConfigurationManager
    * Name
    * Version
  * CustomCookbooksSource
    * Password
    * Revision
    * SshKey
    * Type
    * Url
    * Username
  * CustomJson
  * DefaultAvailabilityZone
  * DefaultInstanceProfileArn **required**
  * DefaultOs
  * DefaultRootDeviceType
  * DefaultSshKeyName
  * DefaultSubnetId
  * HostnameTheme
  * Name **required**
  * Region **required**
  * ServiceRoleArn **required**
  * UseCustomCookbooks
  * UseOpsworksSecurityGroups
  * VpcId

#### Output
* output [CreateStackResult](#createstackresult)

### CreateUserProfile



```js
amazonaws_opsworks.CreateUserProfile({
  "IamUserArn": null
}, context)
```

#### Input
* input `object`
  * AllowSelfManagement
  * IamUserArn **required**
  * SshPublicKey
  * SshUsername

#### Output
* output [CreateUserProfileResult](#createuserprofileresult)

### DeleteApp



```js
amazonaws_opsworks.DeleteApp({
  "AppId": null
}, context)
```

#### Input
* input `object`
  * AppId **required**

#### Output
*Output schema unknown*

### DeleteInstance



```js
amazonaws_opsworks.DeleteInstance({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * DeleteElasticIp
  * DeleteVolumes
  * InstanceId **required**

#### Output
*Output schema unknown*

### DeleteLayer



```js
amazonaws_opsworks.DeleteLayer({
  "LayerId": null
}, context)
```

#### Input
* input `object`
  * LayerId **required**

#### Output
*Output schema unknown*

### DeleteStack



```js
amazonaws_opsworks.DeleteStack({
  "StackId": null
}, context)
```

#### Input
* input `object`
  * StackId **required**

#### Output
*Output schema unknown*

### DeleteUserProfile



```js
amazonaws_opsworks.DeleteUserProfile({
  "IamUserArn": null
}, context)
```

#### Input
* input `object`
  * IamUserArn **required**

#### Output
*Output schema unknown*

### DeregisterEcsCluster



```js
amazonaws_opsworks.DeregisterEcsCluster({
  "EcsClusterArn": null
}, context)
```

#### Input
* input `object`
  * EcsClusterArn **required**

#### Output
*Output schema unknown*

### DeregisterElasticIp



```js
amazonaws_opsworks.DeregisterElasticIp({
  "ElasticIp": null
}, context)
```

#### Input
* input `object`
  * ElasticIp **required**

#### Output
*Output schema unknown*

### DeregisterInstance



```js
amazonaws_opsworks.DeregisterInstance({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * InstanceId **required**

#### Output
*Output schema unknown*

### DeregisterRdsDbInstance



```js
amazonaws_opsworks.DeregisterRdsDbInstance({
  "RdsDbInstanceArn": null
}, context)
```

#### Input
* input `object`
  * RdsDbInstanceArn **required**

#### Output
*Output schema unknown*

### DeregisterVolume



```js
amazonaws_opsworks.DeregisterVolume({
  "VolumeId": null
}, context)
```

#### Input
* input `object`
  * VolumeId **required**

#### Output
*Output schema unknown*

### DescribeAgentVersions



```js
amazonaws_opsworks.DescribeAgentVersions({}, context)
```

#### Input
* input `object`
  * ConfigurationManager
    * Name
    * Version
  * StackId

#### Output
* output [DescribeAgentVersionsResult](#describeagentversionsresult)

### DescribeApps



```js
amazonaws_opsworks.DescribeApps({}, context)
```

#### Input
* input `object`
  * AppIds
    * items [String](#string)
  * StackId

#### Output
* output [DescribeAppsResult](#describeappsresult)

### DescribeCommands



```js
amazonaws_opsworks.DescribeCommands({}, context)
```

#### Input
* input `object`
  * CommandIds
    * items [String](#string)
  * DeploymentId
  * InstanceId

#### Output
* output [DescribeCommandsResult](#describecommandsresult)

### DescribeDeployments



```js
amazonaws_opsworks.DescribeDeployments({}, context)
```

#### Input
* input `object`
  * AppId
  * DeploymentIds
    * items [String](#string)
  * StackId

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
  * EcsClusterArns
    * items [String](#string)
  * MaxResults
  * NextToken
  * StackId

#### Output
* output [DescribeEcsClustersResult](#describeecsclustersresult)

### DescribeElasticIps



```js
amazonaws_opsworks.DescribeElasticIps({}, context)
```

#### Input
* input `object`
  * InstanceId
  * Ips
    * items [String](#string)
  * StackId

#### Output
* output [DescribeElasticIpsResult](#describeelasticipsresult)

### DescribeElasticLoadBalancers



```js
amazonaws_opsworks.DescribeElasticLoadBalancers({}, context)
```

#### Input
* input `object`
  * LayerIds
    * items [String](#string)
  * StackId

#### Output
* output [DescribeElasticLoadBalancersResult](#describeelasticloadbalancersresult)

### DescribeInstances



```js
amazonaws_opsworks.DescribeInstances({}, context)
```

#### Input
* input `object`
  * InstanceIds
    * items [String](#string)
  * LayerId
  * StackId

#### Output
* output [DescribeInstancesResult](#describeinstancesresult)

### DescribeLayers



```js
amazonaws_opsworks.DescribeLayers({}, context)
```

#### Input
* input `object`
  * LayerIds
    * items [String](#string)
  * StackId

#### Output
* output [DescribeLayersResult](#describelayersresult)

### DescribeLoadBasedAutoScaling



```js
amazonaws_opsworks.DescribeLoadBasedAutoScaling({
  "LayerIds": null
}, context)
```

#### Input
* input `object`
  * LayerIds **required**
    * items [String](#string)

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
  * IamUserArn
  * StackId

#### Output
* output [DescribePermissionsResult](#describepermissionsresult)

### DescribeRaidArrays



```js
amazonaws_opsworks.DescribeRaidArrays({}, context)
```

#### Input
* input `object`
  * InstanceId
  * RaidArrayIds
    * items [String](#string)
  * StackId

#### Output
* output [DescribeRaidArraysResult](#describeraidarraysresult)

### DescribeRdsDbInstances



```js
amazonaws_opsworks.DescribeRdsDbInstances({
  "StackId": null
}, context)
```

#### Input
* input `object`
  * RdsDbInstanceArns
    * items [String](#string)
  * StackId **required**

#### Output
* output [DescribeRdsDbInstancesResult](#describerdsdbinstancesresult)

### DescribeServiceErrors



```js
amazonaws_opsworks.DescribeServiceErrors({}, context)
```

#### Input
* input `object`
  * InstanceId
  * ServiceErrorIds
    * items [String](#string)
  * StackId

#### Output
* output [DescribeServiceErrorsResult](#describeserviceerrorsresult)

### DescribeStackProvisioningParameters



```js
amazonaws_opsworks.DescribeStackProvisioningParameters({
  "StackId": null
}, context)
```

#### Input
* input `object`
  * StackId **required**

#### Output
* output [DescribeStackProvisioningParametersResult](#describestackprovisioningparametersresult)

### DescribeStackSummary



```js
amazonaws_opsworks.DescribeStackSummary({
  "StackId": null
}, context)
```

#### Input
* input `object`
  * StackId **required**

#### Output
* output [DescribeStackSummaryResult](#describestacksummaryresult)

### DescribeStacks



```js
amazonaws_opsworks.DescribeStacks({}, context)
```

#### Input
* input `object`
  * StackIds
    * items [String](#string)

#### Output
* output [DescribeStacksResult](#describestacksresult)

### DescribeTimeBasedAutoScaling



```js
amazonaws_opsworks.DescribeTimeBasedAutoScaling({
  "InstanceIds": null
}, context)
```

#### Input
* input `object`
  * InstanceIds **required**
    * items [String](#string)

#### Output
* output [DescribeTimeBasedAutoScalingResult](#describetimebasedautoscalingresult)

### DescribeUserProfiles



```js
amazonaws_opsworks.DescribeUserProfiles({}, context)
```

#### Input
* input `object`
  * IamUserArns
    * items [String](#string)

#### Output
* output [DescribeUserProfilesResult](#describeuserprofilesresult)

### DescribeVolumes



```js
amazonaws_opsworks.DescribeVolumes({}, context)
```

#### Input
* input `object`
  * InstanceId
  * RaidArrayId
  * StackId
  * VolumeIds
    * items [String](#string)

#### Output
* output [DescribeVolumesResult](#describevolumesresult)

### DetachElasticLoadBalancer



```js
amazonaws_opsworks.DetachElasticLoadBalancer({
  "ElasticLoadBalancerName": null,
  "LayerId": null
}, context)
```

#### Input
* input `object`
  * ElasticLoadBalancerName **required**
  * LayerId **required**

#### Output
*Output schema unknown*

### DisassociateElasticIp



```js
amazonaws_opsworks.DisassociateElasticIp({
  "ElasticIp": null
}, context)
```

#### Input
* input `object`
  * ElasticIp **required**

#### Output
*Output schema unknown*

### GetHostnameSuggestion



```js
amazonaws_opsworks.GetHostnameSuggestion({
  "LayerId": null
}, context)
```

#### Input
* input `object`
  * LayerId **required**

#### Output
* output [GetHostnameSuggestionResult](#gethostnamesuggestionresult)

### GrantAccess



```js
amazonaws_opsworks.GrantAccess({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * InstanceId **required**
  * ValidForInMinutes

#### Output
* output [GrantAccessResult](#grantaccessresult)

### ListTags



```js
amazonaws_opsworks.ListTags({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults
  * NextToken
  * ResourceArn **required**

#### Output
* output [ListTagsResult](#listtagsresult)

### RebootInstance



```js
amazonaws_opsworks.RebootInstance({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * InstanceId **required**

#### Output
*Output schema unknown*

### RegisterEcsCluster



```js
amazonaws_opsworks.RegisterEcsCluster({
  "EcsClusterArn": null,
  "StackId": null
}, context)
```

#### Input
* input `object`
  * EcsClusterArn **required**
  * StackId **required**

#### Output
* output [RegisterEcsClusterResult](#registerecsclusterresult)

### RegisterElasticIp



```js
amazonaws_opsworks.RegisterElasticIp({
  "ElasticIp": null,
  "StackId": null
}, context)
```

#### Input
* input `object`
  * ElasticIp **required**
  * StackId **required**

#### Output
* output [RegisterElasticIpResult](#registerelasticipresult)

### RegisterInstance



```js
amazonaws_opsworks.RegisterInstance({
  "StackId": null
}, context)
```

#### Input
* input `object`
  * Hostname
  * InstanceIdentity
    * Document
    * Signature
  * PrivateIp
  * PublicIp
  * RsaPublicKey
  * RsaPublicKeyFingerprint
  * StackId **required**

#### Output
* output [RegisterInstanceResult](#registerinstanceresult)

### RegisterRdsDbInstance



```js
amazonaws_opsworks.RegisterRdsDbInstance({
  "StackId": null,
  "RdsDbInstanceArn": null,
  "DbUser": null,
  "DbPassword": null
}, context)
```

#### Input
* input `object`
  * DbPassword **required**
  * DbUser **required**
  * RdsDbInstanceArn **required**
  * StackId **required**

#### Output
*Output schema unknown*

### RegisterVolume



```js
amazonaws_opsworks.RegisterVolume({
  "StackId": null
}, context)
```

#### Input
* input `object`
  * Ec2VolumeId
  * StackId **required**

#### Output
* output [RegisterVolumeResult](#registervolumeresult)

### SetLoadBasedAutoScaling



```js
amazonaws_opsworks.SetLoadBasedAutoScaling({
  "LayerId": null
}, context)
```

#### Input
* input `object`
  * DownScaling
    * Alarms
      * items [String](#string)
    * CpuThreshold
    * IgnoreMetricsTime
    * InstanceCount
    * LoadThreshold
    * MemoryThreshold
    * ThresholdsWaitTime
  * Enable
  * LayerId **required**
  * UpScaling
    * Alarms
      * items [String](#string)
    * CpuThreshold
    * IgnoreMetricsTime
    * InstanceCount
    * LoadThreshold
    * MemoryThreshold
    * ThresholdsWaitTime

#### Output
*Output schema unknown*

### SetPermission



```js
amazonaws_opsworks.SetPermission({
  "StackId": null,
  "IamUserArn": null
}, context)
```

#### Input
* input `object`
  * AllowSsh
  * AllowSudo
  * IamUserArn **required**
  * Level
  * StackId **required**

#### Output
*Output schema unknown*

### SetTimeBasedAutoScaling



```js
amazonaws_opsworks.SetTimeBasedAutoScaling({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * AutoScalingSchedule
    * Friday
    * Monday
    * Saturday
    * Sunday
    * Thursday
    * Tuesday
    * Wednesday
  * InstanceId **required**

#### Output
*Output schema unknown*

### StartInstance



```js
amazonaws_opsworks.StartInstance({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * InstanceId **required**

#### Output
*Output schema unknown*

### StartStack



```js
amazonaws_opsworks.StartStack({
  "StackId": null
}, context)
```

#### Input
* input `object`
  * StackId **required**

#### Output
*Output schema unknown*

### StopInstance



```js
amazonaws_opsworks.StopInstance({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * Force
  * InstanceId **required**

#### Output
*Output schema unknown*

### StopStack



```js
amazonaws_opsworks.StopStack({
  "StackId": null
}, context)
```

#### Input
* input `object`
  * StackId **required**

#### Output
*Output schema unknown*

### TagResource



```js
amazonaws_opsworks.TagResource({
  "ResourceArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * Tags **required**

#### Output
*Output schema unknown*

### UnassignInstance



```js
amazonaws_opsworks.UnassignInstance({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * InstanceId **required**

#### Output
*Output schema unknown*

### UnassignVolume



```js
amazonaws_opsworks.UnassignVolume({
  "VolumeId": null
}, context)
```

#### Input
* input `object`
  * VolumeId **required**

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_opsworks.UntagResource({
  "ResourceArn": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
*Output schema unknown*

### UpdateApp



```js
amazonaws_opsworks.UpdateApp({
  "AppId": null
}, context)
```

#### Input
* input `object`
  * AppId **required**
  * AppSource
    * Password
    * Revision
    * SshKey
    * Type
    * Url
    * Username
  * Attributes
  * DataSources
    * items [DataSource](#datasource)
  * Description
  * Domains
    * items [String](#string)
  * EnableSsl
  * Environment
    * items [EnvironmentVariable](#environmentvariable)
  * Name
  * SslConfiguration
    * Certificate **required**
    * Chain
    * PrivateKey **required**
  * Type

#### Output
*Output schema unknown*

### UpdateElasticIp



```js
amazonaws_opsworks.UpdateElasticIp({
  "ElasticIp": null
}, context)
```

#### Input
* input `object`
  * ElasticIp **required**
  * Name

#### Output
*Output schema unknown*

### UpdateInstance



```js
amazonaws_opsworks.UpdateInstance({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * AgentVersion
  * AmiId
  * Architecture
  * AutoScalingType
  * EbsOptimized
  * Hostname
  * InstallUpdatesOnBoot
  * InstanceId **required**
  * InstanceType
  * LayerIds
    * items [String](#string)
  * Os
  * SshKeyName

#### Output
*Output schema unknown*

### UpdateLayer



```js
amazonaws_opsworks.UpdateLayer({
  "LayerId": null
}, context)
```

#### Input
* input `object`
  * Attributes
  * AutoAssignElasticIps
  * AutoAssignPublicIps
  * CloudWatchLogsConfiguration
    * Enabled
    * LogStreams
      * items [CloudWatchLogsLogStream](#cloudwatchlogslogstream)
  * CustomInstanceProfileArn
  * CustomJson
  * CustomRecipes
    * Configure
      * items [String](#string)
    * Deploy
      * items [String](#string)
    * Setup
      * items [String](#string)
    * Shutdown
      * items [String](#string)
    * Undeploy
      * items [String](#string)
  * CustomSecurityGroupIds
    * items [String](#string)
  * EnableAutoHealing
  * InstallUpdatesOnBoot
  * LayerId **required**
  * LifecycleEventConfiguration
    * Shutdown
      * DelayUntilElbConnectionsDrained
      * ExecutionTimeout
  * Name
  * Packages
    * items [String](#string)
  * Shortname
  * UseEbsOptimizedInstances
  * VolumeConfigurations
    * items [VolumeConfiguration](#volumeconfiguration)

#### Output
*Output schema unknown*

### UpdateMyUserProfile



```js
amazonaws_opsworks.UpdateMyUserProfile({}, context)
```

#### Input
* input `object`
  * SshPublicKey

#### Output
*Output schema unknown*

### UpdateRdsDbInstance



```js
amazonaws_opsworks.UpdateRdsDbInstance({
  "RdsDbInstanceArn": null
}, context)
```

#### Input
* input `object`
  * DbPassword
  * DbUser
  * RdsDbInstanceArn **required**

#### Output
*Output schema unknown*

### UpdateStack



```js
amazonaws_opsworks.UpdateStack({
  "StackId": null
}, context)
```

#### Input
* input `object`
  * AgentVersion
  * Attributes
  * ChefConfiguration
    * BerkshelfVersion
    * ManageBerkshelf
  * ConfigurationManager
    * Name
    * Version
  * CustomCookbooksSource
    * Password
    * Revision
    * SshKey
    * Type
    * Url
    * Username
  * CustomJson
  * DefaultAvailabilityZone
  * DefaultInstanceProfileArn
  * DefaultOs
  * DefaultRootDeviceType
  * DefaultSshKeyName
  * DefaultSubnetId
  * HostnameTheme
  * Name
  * ServiceRoleArn
  * StackId **required**
  * UseCustomCookbooks
  * UseOpsworksSecurityGroups

#### Output
*Output schema unknown*

### UpdateUserProfile



```js
amazonaws_opsworks.UpdateUserProfile({
  "IamUserArn": null
}, context)
```

#### Input
* input `object`
  * AllowSelfManagement
  * IamUserArn **required**
  * SshPublicKey
  * SshUsername

#### Output
*Output schema unknown*

### UpdateVolume



```js
amazonaws_opsworks.UpdateVolume({
  "VolumeId": null
}, context)
```

#### Input
* input `object`
  * MountPoint
  * Name
  * VolumeId **required**

#### Output
*Output schema unknown*



## Definitions

### AgentVersion
* AgentVersion `object`: Describes an agent version.
  * ConfigurationManager
    * Name
    * Version
  * Version

### AgentVersions
* AgentVersions `array`
  * items [AgentVersion](#agentversion)

### App
* App `object`: A description of the app.
  * AppId
  * AppSource
    * Password
    * Revision
    * SshKey
    * Type
    * Url
    * Username
  * Attributes
  * CreatedAt
  * DataSources
    * items [DataSource](#datasource)
  * Description
  * Domains
    * items [String](#string)
  * EnableSsl
  * Environment
    * items [EnvironmentVariable](#environmentvariable)
  * Name
  * Shortname
  * SslConfiguration
    * Certificate **required**
    * Chain
    * PrivateKey **required**
  * StackId
  * Type

### AppAttributes
* AppAttributes `object`

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
  * InstanceId **required**
  * LayerIds **required**
    * items [String](#string)

### AssignVolumeRequest
* AssignVolumeRequest `object`
  * InstanceId
  * VolumeId **required**

### AssociateElasticIpRequest
* AssociateElasticIpRequest `object`
  * ElasticIp **required**
  * InstanceId

### AttachElasticLoadBalancerRequest
* AttachElasticLoadBalancerRequest `object`
  * ElasticLoadBalancerName **required**
  * LayerId **required**

### AutoScalingThresholds
* AutoScalingThresholds `object`: Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances.
  * Alarms
    * items [String](#string)
  * CpuThreshold
  * IgnoreMetricsTime
  * InstanceCount
  * LoadThreshold
  * MemoryThreshold
  * ThresholdsWaitTime

### AutoScalingType
* AutoScalingType `string` (values: load, timer)

### BlockDeviceMapping
* BlockDeviceMapping `object`: Describes a block device mapping. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html">BlockDeviceMapping</a> data type. 
  * DeviceName
  * Ebs
    * DeleteOnTermination
    * Iops
    * SnapshotId
    * VolumeSize
    * VolumeType
  * NoDevice
  * VirtualName

### BlockDeviceMappings
* BlockDeviceMappings `array`
  * items [BlockDeviceMapping](#blockdevicemapping)

### Boolean
* Boolean `boolean`

### ChefConfiguration
* ChefConfiguration `object`: Describes the Chef configuration.
  * BerkshelfVersion
  * ManageBerkshelf

### CloneStackRequest
* CloneStackRequest `object`
  * AgentVersion
  * Attributes
  * ChefConfiguration
    * BerkshelfVersion
    * ManageBerkshelf
  * CloneAppIds
    * items [String](#string)
  * ClonePermissions
  * ConfigurationManager
    * Name
    * Version
  * CustomCookbooksSource
    * Password
    * Revision
    * SshKey
    * Type
    * Url
    * Username
  * CustomJson
  * DefaultAvailabilityZone
  * DefaultInstanceProfileArn
  * DefaultOs
  * DefaultRootDeviceType
  * DefaultSshKeyName
  * DefaultSubnetId
  * HostnameTheme
  * Name
  * Region
  * ServiceRoleArn **required**
  * SourceStackId **required**
  * UseCustomCookbooks
  * UseOpsworksSecurityGroups
  * VpcId

### CloneStackResult
* CloneStackResult `object`: Contains the response to a <code>CloneStack</code> request.
  * StackId

### CloudWatchLogsConfiguration
* CloudWatchLogsConfiguration `object`: Describes the Amazon CloudWatch logs configuration for a layer.
  * Enabled
  * LogStreams
    * items [CloudWatchLogsLogStream](#cloudwatchlogslogstream)

### CloudWatchLogsEncoding
* CloudWatchLogsEncoding `string` (values: ascii, big5, big5hkscs, cp037, cp424, cp437, cp500, cp720, cp737, cp775, cp850, cp852, cp855, cp856, cp857, cp858, cp860, cp861, cp862, cp863, cp864, cp865, cp866, cp869, cp874, cp875, cp932, cp949, cp950, cp1006, cp1026, cp1140, cp1250, cp1251, cp1252, cp1253, cp1254, cp1255, cp1256, cp1257, cp1258, euc_jp, euc_jis_2004, euc_jisx0213, euc_kr, gb2312, gbk, gb18030, hz, iso2022_jp, iso2022_jp_1, iso2022_jp_2, iso2022_jp_2004, iso2022_jp_3, iso2022_jp_ext, iso2022_kr, latin_1, iso8859_2, iso8859_3, iso8859_4, iso8859_5, iso8859_6, iso8859_7, iso8859_8, iso8859_9, iso8859_10, iso8859_13, iso8859_14, iso8859_15, iso8859_16, johab, koi8_r, koi8_u, mac_cyrillic, mac_greek, mac_iceland, mac_latin2, mac_roman, mac_turkish, ptcp154, shift_jis, shift_jis_2004, shift_jisx0213, utf_32, utf_32_be, utf_32_le, utf_16, utf_16_be, utf_16_le, utf_7, utf_8, utf_8_sig): Specifies the encoding of the log file so that the file can be read correctly. The default is <code>utf_8</code>. Encodings supported by Python <code>codecs.decode()</code> can be used here.

### CloudWatchLogsInitialPosition
* CloudWatchLogsInitialPosition `string` (values: start_of_file, end_of_file): Specifies where to start to read data (start_of_file or end_of_file). The default is start_of_file. It's only used if there is no state persisted for that log stream.

### CloudWatchLogsLogStream
* CloudWatchLogsLogStream `object`: Describes the Amazon CloudWatch logs configuration for a layer. For detailed information about members of this data type, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>.
  * BatchCount
  * BatchSize
  * BufferDuration
  * DatetimeFormat
  * Encoding
  * File
  * FileFingerprintLines
  * InitialPosition
  * LogGroupName
  * MultiLineStartPattern
  * TimeZone

### CloudWatchLogsLogStreams
* CloudWatchLogsLogStreams `array`: Describes the Amazon CloudWatch logs configuration for a layer.
  * items [CloudWatchLogsLogStream](#cloudwatchlogslogstream)

### CloudWatchLogsTimeZone
* CloudWatchLogsTimeZone `string` (values: LOCAL, UTC): The preferred time zone for logs streamed to CloudWatch Logs. Valid values are <code>LOCAL</code> and <code>UTC</code>, for Coordinated Universal Time.

### Command
* Command `object`: Describes a command.
  * AcknowledgedAt
  * CommandId
  * CompletedAt
  * CreatedAt
  * DeploymentId
  * ExitCode
  * InstanceId
  * LogUrl
  * Status
  * Type

### Commands
* Commands `array`
  * items [Command](#command)

### CreateAppRequest
* CreateAppRequest `object`
  * AppSource
    * Password
    * Revision
    * SshKey
    * Type
    * Url
    * Username
  * Attributes
  * DataSources
    * items [DataSource](#datasource)
  * Description
  * Domains
    * items [String](#string)
  * EnableSsl
  * Environment
    * items [EnvironmentVariable](#environmentvariable)
  * Name **required**
  * Shortname
  * SslConfiguration
    * Certificate **required**
    * Chain
    * PrivateKey **required**
  * StackId **required**
  * Type **required**

### CreateAppResult
* CreateAppResult `object`: Contains the response to a <code>CreateApp</code> request.
  * AppId

### CreateDeploymentRequest
* CreateDeploymentRequest `object`
  * AppId
  * Command **required**
    * Args
    * Name **required**
  * Comment
  * CustomJson
  * InstanceIds
    * items [String](#string)
  * LayerIds
    * items [String](#string)
  * StackId **required**

### CreateDeploymentResult
* CreateDeploymentResult `object`: Contains the response to a <code>CreateDeployment</code> request.
  * DeploymentId

### CreateInstanceRequest
* CreateInstanceRequest `object`
  * AgentVersion
  * AmiId
  * Architecture
  * AutoScalingType
  * AvailabilityZone
  * BlockDeviceMappings
    * items [BlockDeviceMapping](#blockdevicemapping)
  * EbsOptimized
  * Hostname
  * InstallUpdatesOnBoot
  * InstanceType **required**
  * LayerIds **required**
    * items [String](#string)
  * Os
  * RootDeviceType
  * SshKeyName
  * StackId **required**
  * SubnetId
  * Tenancy
  * VirtualizationType

### CreateInstanceResult
* CreateInstanceResult `object`: Contains the response to a <code>CreateInstance</code> request.
  * InstanceId

### CreateLayerRequest
* CreateLayerRequest `object`
  * Attributes
  * AutoAssignElasticIps
  * AutoAssignPublicIps
  * CloudWatchLogsConfiguration
    * Enabled
    * LogStreams
      * items [CloudWatchLogsLogStream](#cloudwatchlogslogstream)
  * CustomInstanceProfileArn
  * CustomJson
  * CustomRecipes
    * Configure
      * items [String](#string)
    * Deploy
      * items [String](#string)
    * Setup
      * items [String](#string)
    * Shutdown
      * items [String](#string)
    * Undeploy
      * items [String](#string)
  * CustomSecurityGroupIds
    * items [String](#string)
  * EnableAutoHealing
  * InstallUpdatesOnBoot
  * LifecycleEventConfiguration
    * Shutdown
      * DelayUntilElbConnectionsDrained
      * ExecutionTimeout
  * Name **required**
  * Packages
    * items [String](#string)
  * Shortname **required**
  * StackId **required**
  * Type **required**
  * UseEbsOptimizedInstances
  * VolumeConfigurations
    * items [VolumeConfiguration](#volumeconfiguration)

### CreateLayerResult
* CreateLayerResult `object`: Contains the response to a <code>CreateLayer</code> request.
  * LayerId

### CreateStackRequest
* CreateStackRequest `object`
  * AgentVersion
  * Attributes
  * ChefConfiguration
    * BerkshelfVersion
    * ManageBerkshelf
  * ConfigurationManager
    * Name
    * Version
  * CustomCookbooksSource
    * Password
    * Revision
    * SshKey
    * Type
    * Url
    * Username
  * CustomJson
  * DefaultAvailabilityZone
  * DefaultInstanceProfileArn **required**
  * DefaultOs
  * DefaultRootDeviceType
  * DefaultSshKeyName
  * DefaultSubnetId
  * HostnameTheme
  * Name **required**
  * Region **required**
  * ServiceRoleArn **required**
  * UseCustomCookbooks
  * UseOpsworksSecurityGroups
  * VpcId

### CreateStackResult
* CreateStackResult `object`: Contains the response to a <code>CreateStack</code> request.
  * StackId

### CreateUserProfileRequest
* CreateUserProfileRequest `object`
  * AllowSelfManagement
  * IamUserArn **required**
  * SshPublicKey
  * SshUsername

### CreateUserProfileResult
* CreateUserProfileResult `object`: Contains the response to a <code>CreateUserProfile</code> request.
  * IamUserArn

### DailyAutoScalingSchedule
* DailyAutoScalingSchedule `object`

### DataSource
* DataSource `object`: Describes an app's data source.
  * Arn
  * DatabaseName
  * Type

### DataSources
* DataSources `array`
  * items [DataSource](#datasource)

### DateTime
* DateTime `string`

### DeleteAppRequest
* DeleteAppRequest `object`
  * AppId **required**

### DeleteInstanceRequest
* DeleteInstanceRequest `object`
  * DeleteElasticIp
  * DeleteVolumes
  * InstanceId **required**

### DeleteLayerRequest
* DeleteLayerRequest `object`
  * LayerId **required**

### DeleteStackRequest
* DeleteStackRequest `object`
  * StackId **required**

### DeleteUserProfileRequest
* DeleteUserProfileRequest `object`
  * IamUserArn **required**

### Deployment
* Deployment `object`: Describes a deployment of a stack or app.
  * AppId
  * Command
    * Args
    * Name **required**
  * Comment
  * CompletedAt
  * CreatedAt
  * CustomJson
  * DeploymentId
  * Duration
  * IamUserArn
  * InstanceIds
    * items [String](#string)
  * StackId
  * Status

### DeploymentCommand
* DeploymentCommand `object`: Used to specify a stack or deployment command.
  * Args
  * Name **required**

### DeploymentCommandArgs
* DeploymentCommandArgs `object`

### DeploymentCommandName
* DeploymentCommandName `string` (values: install_dependencies, update_dependencies, update_custom_cookbooks, execute_recipes, configure, setup, deploy, rollback, start, stop, restart, undeploy)

### Deployments
* Deployments `array`
  * items [Deployment](#deployment)

### DeregisterEcsClusterRequest
* DeregisterEcsClusterRequest `object`
  * EcsClusterArn **required**

### DeregisterElasticIpRequest
* DeregisterElasticIpRequest `object`
  * ElasticIp **required**

### DeregisterInstanceRequest
* DeregisterInstanceRequest `object`
  * InstanceId **required**

### DeregisterRdsDbInstanceRequest
* DeregisterRdsDbInstanceRequest `object`
  * RdsDbInstanceArn **required**

### DeregisterVolumeRequest
* DeregisterVolumeRequest `object`
  * VolumeId **required**

### DescribeAgentVersionsRequest
* DescribeAgentVersionsRequest `object`
  * ConfigurationManager
    * Name
    * Version
  * StackId

### DescribeAgentVersionsResult
* DescribeAgentVersionsResult `object`: Contains the response to a <code>DescribeAgentVersions</code> request.
  * AgentVersions
    * items [AgentVersion](#agentversion)

### DescribeAppsRequest
* DescribeAppsRequest `object`
  * AppIds
    * items [String](#string)
  * StackId

### DescribeAppsResult
* DescribeAppsResult `object`: Contains the response to a <code>DescribeApps</code> request.
  * Apps
    * items [App](#app)

### DescribeCommandsRequest
* DescribeCommandsRequest `object`
  * CommandIds
    * items [String](#string)
  * DeploymentId
  * InstanceId

### DescribeCommandsResult
* DescribeCommandsResult `object`: Contains the response to a <code>DescribeCommands</code> request.
  * Commands
    * items [Command](#command)

### DescribeDeploymentsRequest
* DescribeDeploymentsRequest `object`
  * AppId
  * DeploymentIds
    * items [String](#string)
  * StackId

### DescribeDeploymentsResult
* DescribeDeploymentsResult `object`: Contains the response to a <code>DescribeDeployments</code> request.
  * Deployments
    * items [Deployment](#deployment)

### DescribeEcsClustersRequest
* DescribeEcsClustersRequest `object`
  * EcsClusterArns
    * items [String](#string)
  * MaxResults
  * NextToken
  * StackId

### DescribeEcsClustersResult
* DescribeEcsClustersResult `object`: Contains the response to a <code>DescribeEcsClusters</code> request.
  * EcsClusters
    * items [EcsCluster](#ecscluster)
  * NextToken

### DescribeElasticIpsRequest
* DescribeElasticIpsRequest `object`
  * InstanceId
  * Ips
    * items [String](#string)
  * StackId

### DescribeElasticIpsResult
* DescribeElasticIpsResult `object`: Contains the response to a <code>DescribeElasticIps</code> request.
  * ElasticIps
    * items [ElasticIp](#elasticip)

### DescribeElasticLoadBalancersRequest
* DescribeElasticLoadBalancersRequest `object`
  * LayerIds
    * items [String](#string)
  * StackId

### DescribeElasticLoadBalancersResult
* DescribeElasticLoadBalancersResult `object`: Contains the response to a <code>DescribeElasticLoadBalancers</code> request.
  * ElasticLoadBalancers
    * items [ElasticLoadBalancer](#elasticloadbalancer)

### DescribeInstancesRequest
* DescribeInstancesRequest `object`
  * InstanceIds
    * items [String](#string)
  * LayerId
  * StackId

### DescribeInstancesResult
* DescribeInstancesResult `object`: Contains the response to a <code>DescribeInstances</code> request.
  * Instances
    * items [Instance](#instance)

### DescribeLayersRequest
* DescribeLayersRequest `object`
  * LayerIds
    * items [String](#string)
  * StackId

### DescribeLayersResult
* DescribeLayersResult `object`: Contains the response to a <code>DescribeLayers</code> request.
  * Layers
    * items [Layer](#layer)

### DescribeLoadBasedAutoScalingRequest
* DescribeLoadBasedAutoScalingRequest `object`
  * LayerIds **required**
    * items [String](#string)

### DescribeLoadBasedAutoScalingResult
* DescribeLoadBasedAutoScalingResult `object`: Contains the response to a <code>DescribeLoadBasedAutoScaling</code> request.
  * LoadBasedAutoScalingConfigurations
    * items [LoadBasedAutoScalingConfiguration](#loadbasedautoscalingconfiguration)

### DescribeMyUserProfileResult
* DescribeMyUserProfileResult `object`: Contains the response to a <code>DescribeMyUserProfile</code> request.
  * UserProfile
    * IamUserArn
    * Name
    * SshPublicKey
    * SshUsername

### DescribeOperatingSystemsResponse
* DescribeOperatingSystemsResponse `object`: The response to a <code>DescribeOperatingSystems</code> request.
  * OperatingSystems
    * items [OperatingSystem](#operatingsystem)

### DescribePermissionsRequest
* DescribePermissionsRequest `object`
  * IamUserArn
  * StackId

### DescribePermissionsResult
* DescribePermissionsResult `object`: Contains the response to a <code>DescribePermissions</code> request.
  * Permissions
    * items [Permission](#permission)

### DescribeRaidArraysRequest
* DescribeRaidArraysRequest `object`
  * InstanceId
  * RaidArrayIds
    * items [String](#string)
  * StackId

### DescribeRaidArraysResult
* DescribeRaidArraysResult `object`: Contains the response to a <code>DescribeRaidArrays</code> request.
  * RaidArrays
    * items [RaidArray](#raidarray)

### DescribeRdsDbInstancesRequest
* DescribeRdsDbInstancesRequest `object`
  * RdsDbInstanceArns
    * items [String](#string)
  * StackId **required**

### DescribeRdsDbInstancesResult
* DescribeRdsDbInstancesResult `object`: Contains the response to a <code>DescribeRdsDbInstances</code> request.
  * RdsDbInstances
    * items [RdsDbInstance](#rdsdbinstance)

### DescribeServiceErrorsRequest
* DescribeServiceErrorsRequest `object`
  * InstanceId
  * ServiceErrorIds
    * items [String](#string)
  * StackId

### DescribeServiceErrorsResult
* DescribeServiceErrorsResult `object`: Contains the response to a <code>DescribeServiceErrors</code> request.
  * ServiceErrors
    * items [ServiceError](#serviceerror)

### DescribeStackProvisioningParametersRequest
* DescribeStackProvisioningParametersRequest `object`
  * StackId **required**

### DescribeStackProvisioningParametersResult
* DescribeStackProvisioningParametersResult `object`: Contains the response to a <code>DescribeStackProvisioningParameters</code> request.
  * AgentInstallerUrl
  * Parameters

### DescribeStackSummaryRequest
* DescribeStackSummaryRequest `object`
  * StackId **required**

### DescribeStackSummaryResult
* DescribeStackSummaryResult `object`: Contains the response to a <code>DescribeStackSummary</code> request.
  * StackSummary
    * AppsCount
    * Arn
    * InstancesCount
      * Assigning
      * Booting
      * ConnectionLost
      * Deregistering
      * Online
      * Pending
      * Rebooting
      * Registered
      * Registering
      * Requested
      * RunningSetup
      * SetupFailed
      * ShuttingDown
      * StartFailed
      * StopFailed
      * Stopped
      * Stopping
      * Terminated
      * Terminating
      * Unassigning
    * LayersCount
    * Name
    * StackId

### DescribeStacksRequest
* DescribeStacksRequest `object`
  * StackIds
    * items [String](#string)

### DescribeStacksResult
* DescribeStacksResult `object`: Contains the response to a <code>DescribeStacks</code> request.
  * Stacks
    * items [Stack](#stack)

### DescribeTimeBasedAutoScalingRequest
* DescribeTimeBasedAutoScalingRequest `object`
  * InstanceIds **required**
    * items [String](#string)

### DescribeTimeBasedAutoScalingResult
* DescribeTimeBasedAutoScalingResult `object`: Contains the response to a <code>DescribeTimeBasedAutoScaling</code> request.
  * TimeBasedAutoScalingConfigurations
    * items [TimeBasedAutoScalingConfiguration](#timebasedautoscalingconfiguration)

### DescribeUserProfilesRequest
* DescribeUserProfilesRequest `object`
  * IamUserArns
    * items [String](#string)

### DescribeUserProfilesResult
* DescribeUserProfilesResult `object`: Contains the response to a <code>DescribeUserProfiles</code> request.
  * UserProfiles
    * items [UserProfile](#userprofile)

### DescribeVolumesRequest
* DescribeVolumesRequest `object`
  * InstanceId
  * RaidArrayId
  * StackId
  * VolumeIds
    * items [String](#string)

### DescribeVolumesResult
* DescribeVolumesResult `object`: Contains the response to a <code>DescribeVolumes</code> request.
  * Volumes
    * items [Volume](#volume)

### DetachElasticLoadBalancerRequest
* DetachElasticLoadBalancerRequest `object`
  * ElasticLoadBalancerName **required**
  * LayerId **required**

### DisassociateElasticIpRequest
* DisassociateElasticIpRequest `object`
  * ElasticIp **required**

### Double
* Double `number`

### EbsBlockDevice
* EbsBlockDevice `object`: Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a> data type.
  * DeleteOnTermination
  * Iops
  * SnapshotId
  * VolumeSize
  * VolumeType

### EcsCluster
* EcsCluster `object`: Describes a registered Amazon ECS cluster.
  * EcsClusterArn
  * EcsClusterName
  * RegisteredAt
  * StackId

### EcsClusters
* EcsClusters `array`
  * items [EcsCluster](#ecscluster)

### ElasticIp
* ElasticIp `object`: Describes an Elastic IP address.
  * Domain
  * InstanceId
  * Ip
  * Name
  * Region

### ElasticIps
* ElasticIps `array`
  * items [ElasticIp](#elasticip)

### ElasticLoadBalancer
* ElasticLoadBalancer `object`: Describes an Elastic Load Balancing instance.
  * AvailabilityZones
    * items [String](#string)
  * DnsName
  * Ec2InstanceIds
    * items [String](#string)
  * ElasticLoadBalancerName
  * LayerId
  * Region
  * StackId
  * SubnetIds
    * items [String](#string)
  * VpcId

### ElasticLoadBalancers
* ElasticLoadBalancers `array`
  * items [ElasticLoadBalancer](#elasticloadbalancer)

### EnvironmentVariable
* EnvironmentVariable `object`: Represents an app's environment variable.
  * Key **required**
  * Secure
  * Value **required**

### EnvironmentVariables
* EnvironmentVariables `array`
  * items [EnvironmentVariable](#environmentvariable)

### GetHostnameSuggestionRequest
* GetHostnameSuggestionRequest `object`
  * LayerId **required**

### GetHostnameSuggestionResult
* GetHostnameSuggestionResult `object`: Contains the response to a <code>GetHostnameSuggestion</code> request.
  * Hostname
  * LayerId

### GrantAccessRequest
* GrantAccessRequest `object`
  * InstanceId **required**
  * ValidForInMinutes

### GrantAccessResult
* GrantAccessResult `object`: Contains the response to a <code>GrantAccess</code> request.
  * TemporaryCredential
    * InstanceId
    * Password
    * Username
    * ValidForInMinutes

### Hour
* Hour `string`

### Instance
* Instance `object`: Describes an instance.
  * AgentVersion
  * AmiId
  * Architecture
  * Arn
  * AutoScalingType
  * AvailabilityZone
  * BlockDeviceMappings
    * items [BlockDeviceMapping](#blockdevicemapping)
  * CreatedAt
  * EbsOptimized
  * Ec2InstanceId
  * EcsClusterArn
  * EcsContainerInstanceArn
  * ElasticIp
  * Hostname
  * InfrastructureClass
  * InstallUpdatesOnBoot
  * InstanceId
  * InstanceProfileArn
  * InstanceType
  * LastServiceErrorId
  * LayerIds
    * items [String](#string)
  * Os
  * Platform
  * PrivateDns
  * PrivateIp
  * PublicDns
  * PublicIp
  * RegisteredBy
  * ReportedAgentVersion
  * ReportedOs
    * Family
    * Name
    * Version
  * RootDeviceType
  * RootDeviceVolumeId
  * SecurityGroupIds
    * items [String](#string)
  * SshHostDsaKeyFingerprint
  * SshHostRsaKeyFingerprint
  * SshKeyName
  * StackId
  * Status
  * SubnetId
  * Tenancy
  * VirtualizationType

### InstanceIdentity
* InstanceIdentity `object`: Contains a description of an Amazon EC2 instance from the Amazon EC2 metadata service. For more information, see <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/Index.html">Instance Metadata and User Data</a>.
  * Document
  * Signature

### Instances
* Instances `array`
  * items [Instance](#instance)

### InstancesCount
* InstancesCount `object`: Describes how many instances a stack has for each status.
  * Assigning
  * Booting
  * ConnectionLost
  * Deregistering
  * Online
  * Pending
  * Rebooting
  * Registered
  * Registering
  * Requested
  * RunningSetup
  * SetupFailed
  * ShuttingDown
  * StartFailed
  * StopFailed
  * Stopped
  * Stopping
  * Terminated
  * Terminating
  * Unassigning

### Integer
* Integer `integer`

### Layer
* Layer `object`: Describes a layer.
  * Arn
  * Attributes
  * AutoAssignElasticIps
  * AutoAssignPublicIps
  * CloudWatchLogsConfiguration
    * Enabled
    * LogStreams
      * items [CloudWatchLogsLogStream](#cloudwatchlogslogstream)
  * CreatedAt
  * CustomInstanceProfileArn
  * CustomJson
  * CustomRecipes
    * Configure
      * items [String](#string)
    * Deploy
      * items [String](#string)
    * Setup
      * items [String](#string)
    * Shutdown
      * items [String](#string)
    * Undeploy
      * items [String](#string)
  * CustomSecurityGroupIds
    * items [String](#string)
  * DefaultRecipes
    * Configure
      * items [String](#string)
    * Deploy
      * items [String](#string)
    * Setup
      * items [String](#string)
    * Shutdown
      * items [String](#string)
    * Undeploy
      * items [String](#string)
  * DefaultSecurityGroupNames
    * items [String](#string)
  * EnableAutoHealing
  * InstallUpdatesOnBoot
  * LayerId
  * LifecycleEventConfiguration
    * Shutdown
      * DelayUntilElbConnectionsDrained
      * ExecutionTimeout
  * Name
  * Packages
    * items [String](#string)
  * Shortname
  * StackId
  * Type
  * UseEbsOptimizedInstances
  * VolumeConfigurations
    * items [VolumeConfiguration](#volumeconfiguration)

### LayerAttributes
* LayerAttributes `object`

### LayerAttributesKeys
* LayerAttributesKeys `string` (values: EcsClusterArn, EnableHaproxyStats, HaproxyStatsUrl, HaproxyStatsUser, HaproxyStatsPassword, HaproxyHealthCheckUrl, HaproxyHealthCheckMethod, MysqlRootPassword, MysqlRootPasswordUbiquitous, GangliaUrl, GangliaUser, GangliaPassword, MemcachedMemory, NodejsVersion, RubyVersion, RubygemsVersion, ManageBundler, BundlerVersion, RailsStack, PassengerVersion, Jvm, JvmVersion, JvmOptions, JavaAppServer, JavaAppServerVersion)

### LayerType
* LayerType `string` (values: aws-flow-ruby, ecs-cluster, java-app, lb, web, php-app, rails-app, nodejs-app, memcached, db-master, monitoring-master, custom)

### Layers
* Layers `array`
  * items [Layer](#layer)

### LifecycleEventConfiguration
* LifecycleEventConfiguration `object`: Specifies the lifecycle event configuration
  * Shutdown
    * DelayUntilElbConnectionsDrained
    * ExecutionTimeout

### ListTagsRequest
* ListTagsRequest `object`
  * MaxResults
  * NextToken
  * ResourceArn **required**

### ListTagsResult
* ListTagsResult `object`: Contains the response to a <code>ListTags</code> request.
  * NextToken
  * Tags

### LoadBasedAutoScalingConfiguration
* LoadBasedAutoScalingConfiguration `object`: Describes a layer's load-based auto scaling configuration.
  * DownScaling
    * Alarms
      * items [String](#string)
    * CpuThreshold
    * IgnoreMetricsTime
    * InstanceCount
    * LoadThreshold
    * MemoryThreshold
    * ThresholdsWaitTime
  * Enable
  * LayerId
  * UpScaling
    * Alarms
      * items [String](#string)
    * CpuThreshold
    * IgnoreMetricsTime
    * InstanceCount
    * LoadThreshold
    * MemoryThreshold
    * ThresholdsWaitTime

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
  * ConfigurationManagers
    * items [OperatingSystemConfigurationManager](#operatingsystemconfigurationmanager)
  * Id
  * Name
  * ReportedName
  * ReportedVersion
  * Supported
  * Type

### OperatingSystemConfigurationManager
* OperatingSystemConfigurationManager `object`: A block that contains information about the configuration manager (Chef) and the versions of the configuration manager that are supported for an operating system.
  * Name
  * Version

### OperatingSystemConfigurationManagers
* OperatingSystemConfigurationManagers `array`
  * items [OperatingSystemConfigurationManager](#operatingsystemconfigurationmanager)

### OperatingSystems
* OperatingSystems `array`
  * items [OperatingSystem](#operatingsystem)

### Parameters
* Parameters `object`

### Permission
* Permission `object`: Describes stack or user permissions.
  * AllowSsh
  * AllowSudo
  * IamUserArn
  * Level
  * StackId

### Permissions
* Permissions `array`
  * items [Permission](#permission)

### RaidArray
* RaidArray `object`: Describes an instance's RAID array.
  * AvailabilityZone
  * CreatedAt
  * Device
  * InstanceId
  * Iops
  * MountPoint
  * Name
  * NumberOfDisks
  * RaidArrayId
  * RaidLevel
  * Size
  * StackId
  * VolumeType

### RaidArrays
* RaidArrays `array`
  * items [RaidArray](#raidarray)

### RdsDbInstance
* RdsDbInstance `object`: Describes an Amazon RDS instance.
  * Address
  * DbInstanceIdentifier
  * DbPassword
  * DbUser
  * Engine
  * MissingOnRds
  * RdsDbInstanceArn
  * Region
  * StackId

### RdsDbInstances
* RdsDbInstances `array`
  * items [RdsDbInstance](#rdsdbinstance)

### RebootInstanceRequest
* RebootInstanceRequest `object`
  * InstanceId **required**

### Recipes
* Recipes `object`: <p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. In addition, you can provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events. </p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the .rb extension. For example: phpapp2::dbsetup specifies the dbsetup.rb recipe in the repository's phpapp2 folder.</p>
  * Configure
    * items [String](#string)
  * Deploy
    * items [String](#string)
  * Setup
    * items [String](#string)
  * Shutdown
    * items [String](#string)
  * Undeploy
    * items [String](#string)

### RegisterEcsClusterRequest
* RegisterEcsClusterRequest `object`
  * EcsClusterArn **required**
  * StackId **required**

### RegisterEcsClusterResult
* RegisterEcsClusterResult `object`: Contains the response to a <code>RegisterEcsCluster</code> request.
  * EcsClusterArn

### RegisterElasticIpRequest
* RegisterElasticIpRequest `object`
  * ElasticIp **required**
  * StackId **required**

### RegisterElasticIpResult
* RegisterElasticIpResult `object`: Contains the response to a <code>RegisterElasticIp</code> request.
  * ElasticIp

### RegisterInstanceRequest
* RegisterInstanceRequest `object`
  * Hostname
  * InstanceIdentity
    * Document
    * Signature
  * PrivateIp
  * PublicIp
  * RsaPublicKey
  * RsaPublicKeyFingerprint
  * StackId **required**

### RegisterInstanceResult
* RegisterInstanceResult `object`: Contains the response to a <code>RegisterInstanceResult</code> request.
  * InstanceId

### RegisterRdsDbInstanceRequest
* RegisterRdsDbInstanceRequest `object`
  * DbPassword **required**
  * DbUser **required**
  * RdsDbInstanceArn **required**
  * StackId **required**

### RegisterVolumeRequest
* RegisterVolumeRequest `object`
  * Ec2VolumeId
  * StackId **required**

### RegisterVolumeResult
* RegisterVolumeResult `object`: Contains the response to a <code>RegisterVolume</code> request.
  * VolumeId

### ReportedOs
* ReportedOs `object`: A registered instance's reported operating system.
  * Family
  * Name
  * Version

### ResourceArn
* ResourceArn `string`

### ResourceNotFoundException


### RootDeviceType
* RootDeviceType `string` (values: ebs, instance-store)

### SelfUserProfile
* SelfUserProfile `object`: Describes a user's SSH information.
  * IamUserArn
  * Name
  * SshPublicKey
  * SshUsername

### ServiceError
* ServiceError `object`: Describes an AWS OpsWorks Stacks service error.
  * CreatedAt
  * InstanceId
  * Message
  * ServiceErrorId
  * StackId
  * Type

### ServiceErrors
* ServiceErrors `array`
  * items [ServiceError](#serviceerror)

### SetLoadBasedAutoScalingRequest
* SetLoadBasedAutoScalingRequest `object`
  * DownScaling
    * Alarms
      * items [String](#string)
    * CpuThreshold
    * IgnoreMetricsTime
    * InstanceCount
    * LoadThreshold
    * MemoryThreshold
    * ThresholdsWaitTime
  * Enable
  * LayerId **required**
  * UpScaling
    * Alarms
      * items [String](#string)
    * CpuThreshold
    * IgnoreMetricsTime
    * InstanceCount
    * LoadThreshold
    * MemoryThreshold
    * ThresholdsWaitTime

### SetPermissionRequest
* SetPermissionRequest `object`
  * AllowSsh
  * AllowSudo
  * IamUserArn **required**
  * Level
  * StackId **required**

### SetTimeBasedAutoScalingRequest
* SetTimeBasedAutoScalingRequest `object`
  * AutoScalingSchedule
    * Friday
    * Monday
    * Saturday
    * Sunday
    * Thursday
    * Tuesday
    * Wednesday
  * InstanceId **required**

### ShutdownEventConfiguration
* ShutdownEventConfiguration `object`: The Shutdown event configuration.
  * DelayUntilElbConnectionsDrained
  * ExecutionTimeout

### Source
* Source `object`: Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>.
  * Password
  * Revision
  * SshKey
  * Type
  * Url
  * Username

### SourceType
* SourceType `string` (values: git, svn, archive, s3)

### SslConfiguration
* SslConfiguration `object`: Describes an app's SSL configuration.
  * Certificate **required**
  * Chain
  * PrivateKey **required**

### Stack
* Stack `object`: Describes a stack.
  * AgentVersion
  * Arn
  * Attributes
  * ChefConfiguration
    * BerkshelfVersion
    * ManageBerkshelf
  * ConfigurationManager
    * Name
    * Version
  * CreatedAt
  * CustomCookbooksSource
    * Password
    * Revision
    * SshKey
    * Type
    * Url
    * Username
  * CustomJson
  * DefaultAvailabilityZone
  * DefaultInstanceProfileArn
  * DefaultOs
  * DefaultRootDeviceType
  * DefaultSshKeyName
  * DefaultSubnetId
  * HostnameTheme
  * Name
  * Region
  * ServiceRoleArn
  * StackId
  * UseCustomCookbooks
  * UseOpsworksSecurityGroups
  * VpcId

### StackAttributes
* StackAttributes `object`

### StackAttributesKeys
* StackAttributesKeys `string` (values: Color)

### StackConfigurationManager
* StackConfigurationManager `object`: Describes the configuration manager.
  * Name
  * Version

### StackSummary
* StackSummary `object`: Summarizes the number of layers, instances, and apps in a stack.
  * AppsCount
  * Arn
  * InstancesCount
    * Assigning
    * Booting
    * ConnectionLost
    * Deregistering
    * Online
    * Pending
    * Rebooting
    * Registered
    * Registering
    * Requested
    * RunningSetup
    * SetupFailed
    * ShuttingDown
    * StartFailed
    * StopFailed
    * Stopped
    * Stopping
    * Terminated
    * Terminating
    * Unassigning
  * LayersCount
  * Name
  * StackId

### Stacks
* Stacks `array`
  * items [Stack](#stack)

### StartInstanceRequest
* StartInstanceRequest `object`
  * InstanceId **required**

### StartStackRequest
* StartStackRequest `object`
  * StackId **required**

### StopInstanceRequest
* StopInstanceRequest `object`
  * Force
  * InstanceId **required**

### StopStackRequest
* StopStackRequest `object`
  * StackId **required**

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
  * ResourceArn **required**
  * Tags **required**

### TagValue
* TagValue `string`

### Tags
* Tags `object`

### TemporaryCredential
* TemporaryCredential `object`: Contains the data needed by RDP clients such as the Microsoft Remote Desktop Connection to log in to the instance.
  * InstanceId
  * Password
  * Username
  * ValidForInMinutes

### TimeBasedAutoScalingConfiguration
* TimeBasedAutoScalingConfiguration `object`: Describes an instance's time-based auto scaling configuration.
  * AutoScalingSchedule
    * Friday
    * Monday
    * Saturday
    * Sunday
    * Thursday
    * Tuesday
    * Wednesday
  * InstanceId

### TimeBasedAutoScalingConfigurations
* TimeBasedAutoScalingConfigurations `array`
  * items [TimeBasedAutoScalingConfiguration](#timebasedautoscalingconfiguration)

### UnassignInstanceRequest
* UnassignInstanceRequest `object`
  * InstanceId **required**

### UnassignVolumeRequest
* UnassignVolumeRequest `object`
  * VolumeId **required**

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UpdateAppRequest
* UpdateAppRequest `object`
  * AppId **required**
  * AppSource
    * Password
    * Revision
    * SshKey
    * Type
    * Url
    * Username
  * Attributes
  * DataSources
    * items [DataSource](#datasource)
  * Description
  * Domains
    * items [String](#string)
  * EnableSsl
  * Environment
    * items [EnvironmentVariable](#environmentvariable)
  * Name
  * SslConfiguration
    * Certificate **required**
    * Chain
    * PrivateKey **required**
  * Type

### UpdateElasticIpRequest
* UpdateElasticIpRequest `object`
  * ElasticIp **required**
  * Name

### UpdateInstanceRequest
* UpdateInstanceRequest `object`
  * AgentVersion
  * AmiId
  * Architecture
  * AutoScalingType
  * EbsOptimized
  * Hostname
  * InstallUpdatesOnBoot
  * InstanceId **required**
  * InstanceType
  * LayerIds
    * items [String](#string)
  * Os
  * SshKeyName

### UpdateLayerRequest
* UpdateLayerRequest `object`
  * Attributes
  * AutoAssignElasticIps
  * AutoAssignPublicIps
  * CloudWatchLogsConfiguration
    * Enabled
    * LogStreams
      * items [CloudWatchLogsLogStream](#cloudwatchlogslogstream)
  * CustomInstanceProfileArn
  * CustomJson
  * CustomRecipes
    * Configure
      * items [String](#string)
    * Deploy
      * items [String](#string)
    * Setup
      * items [String](#string)
    * Shutdown
      * items [String](#string)
    * Undeploy
      * items [String](#string)
  * CustomSecurityGroupIds
    * items [String](#string)
  * EnableAutoHealing
  * InstallUpdatesOnBoot
  * LayerId **required**
  * LifecycleEventConfiguration
    * Shutdown
      * DelayUntilElbConnectionsDrained
      * ExecutionTimeout
  * Name
  * Packages
    * items [String](#string)
  * Shortname
  * UseEbsOptimizedInstances
  * VolumeConfigurations
    * items [VolumeConfiguration](#volumeconfiguration)

### UpdateMyUserProfileRequest
* UpdateMyUserProfileRequest `object`
  * SshPublicKey

### UpdateRdsDbInstanceRequest
* UpdateRdsDbInstanceRequest `object`
  * DbPassword
  * DbUser
  * RdsDbInstanceArn **required**

### UpdateStackRequest
* UpdateStackRequest `object`
  * AgentVersion
  * Attributes
  * ChefConfiguration
    * BerkshelfVersion
    * ManageBerkshelf
  * ConfigurationManager
    * Name
    * Version
  * CustomCookbooksSource
    * Password
    * Revision
    * SshKey
    * Type
    * Url
    * Username
  * CustomJson
  * DefaultAvailabilityZone
  * DefaultInstanceProfileArn
  * DefaultOs
  * DefaultRootDeviceType
  * DefaultSshKeyName
  * DefaultSubnetId
  * HostnameTheme
  * Name
  * ServiceRoleArn
  * StackId **required**
  * UseCustomCookbooks
  * UseOpsworksSecurityGroups

### UpdateUserProfileRequest
* UpdateUserProfileRequest `object`
  * AllowSelfManagement
  * IamUserArn **required**
  * SshPublicKey
  * SshUsername

### UpdateVolumeRequest
* UpdateVolumeRequest `object`
  * MountPoint
  * Name
  * VolumeId **required**

### UserProfile
* UserProfile `object`: Describes a user's SSH information.
  * AllowSelfManagement
  * IamUserArn
  * Name
  * SshPublicKey
  * SshUsername

### UserProfiles
* UserProfiles `array`
  * items [UserProfile](#userprofile)

### ValidForInMinutes
* ValidForInMinutes `integer`

### ValidationException


### VirtualizationType
* VirtualizationType `string` (values: paravirtual, hvm)

### Volume
* Volume `object`: Describes an instance's Amazon EBS volume.
  * AvailabilityZone
  * Device
  * Ec2VolumeId
  * Encrypted
  * InstanceId
  * Iops
  * MountPoint
  * Name
  * RaidArrayId
  * Region
  * Size
  * Status
  * VolumeId
  * VolumeType

### VolumeConfiguration
* VolumeConfiguration `object`: Describes an Amazon EBS volume configuration.
  * Encrypted
  * Iops
  * MountPoint **required**
  * NumberOfDisks **required**
  * RaidLevel
  * Size **required**
  * VolumeType

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
  * Friday
  * Monday
  * Saturday
  * Sunday
  * Thursday
  * Tuesday
  * Wednesday


