# @datafire/amazonaws_elasticmapreduce

Client library for Amazon Elastic MapReduce

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_elasticmapreduce
```
```js
let amazonaws_elasticmapreduce = require('@datafire/amazonaws_elasticmapreduce').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_elasticmapreduce.AddInstanceFleet({}).then(data => {
  console.log(data);
})
```

## Description

Amazon EMR is a web service that makes it easy to process large amounts of data efficiently. Amazon EMR uses Hadoop processing combined with several AWS products to do tasks such as web indexing, data mining, log file analysis, machine learning, scientific simulation, and data warehousing.

## Actions

### AddInstanceFleet



```js
amazonaws_elasticmapreduce.AddInstanceFleet({
  "ClusterId": "",
  "InstanceFleet": {
    "InstanceFleetType": ""
  }
}, context)
```

#### Input
* input `object`
  * ClusterId **required** [XmlStringMaxLen256](#xmlstringmaxlen256)
  * InstanceFleet **required** [InstanceFleetConfig](#instancefleetconfig)

#### Output
* output [AddInstanceFleetOutput](#addinstancefleetoutput)

### AddInstanceGroups



```js
amazonaws_elasticmapreduce.AddInstanceGroups({
  "InstanceGroups": [],
  "JobFlowId": ""
}, context)
```

#### Input
* input `object`
  * InstanceGroups **required** [InstanceGroupConfigList](#instancegroupconfiglist)
  * JobFlowId **required** [XmlStringMaxLen256](#xmlstringmaxlen256)

#### Output
* output [AddInstanceGroupsOutput](#addinstancegroupsoutput)

### AddJobFlowSteps



```js
amazonaws_elasticmapreduce.AddJobFlowSteps({
  "JobFlowId": "",
  "Steps": []
}, context)
```

#### Input
* input `object`
  * JobFlowId **required** [XmlStringMaxLen256](#xmlstringmaxlen256)
  * Steps **required** [StepConfigList](#stepconfiglist)

#### Output
* output [AddJobFlowStepsOutput](#addjobflowstepsoutput)

### AddTags



```js
amazonaws_elasticmapreduce.AddTags({
  "ResourceId": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [ResourceId](#resourceid)
  * Tags **required** [TagList](#taglist)

#### Output
* output [AddTagsOutput](#addtagsoutput)

### CancelSteps



```js
amazonaws_elasticmapreduce.CancelSteps({}, context)
```

#### Input
* input `object`
  * ClusterId [XmlStringMaxLen256](#xmlstringmaxlen256)
  * StepIds [StepIdsList](#stepidslist)

#### Output
* output [CancelStepsOutput](#cancelstepsoutput)

### CreateSecurityConfiguration



```js
amazonaws_elasticmapreduce.CreateSecurityConfiguration({
  "Name": "",
  "SecurityConfiguration": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [XmlString](#xmlstring)
  * SecurityConfiguration **required** [String](#string)

#### Output
* output [CreateSecurityConfigurationOutput](#createsecurityconfigurationoutput)

### DeleteSecurityConfiguration



```js
amazonaws_elasticmapreduce.DeleteSecurityConfiguration({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [XmlString](#xmlstring)

#### Output
* output [DeleteSecurityConfigurationOutput](#deletesecurityconfigurationoutput)

### DescribeCluster



```js
amazonaws_elasticmapreduce.DescribeCluster({
  "ClusterId": ""
}, context)
```

#### Input
* input `object`
  * ClusterId **required** [ClusterId](#clusterid)

#### Output
* output [DescribeClusterOutput](#describeclusteroutput)

### DescribeJobFlows



```js
amazonaws_elasticmapreduce.DescribeJobFlows({}, context)
```

#### Input
* input `object`
  * CreatedAfter [Date](#date)
  * CreatedBefore [Date](#date)
  * JobFlowIds [XmlStringList](#xmlstringlist)
  * JobFlowStates [JobFlowExecutionStateList](#jobflowexecutionstatelist)

#### Output
* output [DescribeJobFlowsOutput](#describejobflowsoutput)

### DescribeSecurityConfiguration



```js
amazonaws_elasticmapreduce.DescribeSecurityConfiguration({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [XmlString](#xmlstring)

#### Output
* output [DescribeSecurityConfigurationOutput](#describesecurityconfigurationoutput)

### DescribeStep



```js
amazonaws_elasticmapreduce.DescribeStep({
  "ClusterId": "",
  "StepId": ""
}, context)
```

#### Input
* input `object`
  * ClusterId **required** [ClusterId](#clusterid)
  * StepId **required** [StepId](#stepid)

#### Output
* output [DescribeStepOutput](#describestepoutput)

### ListBootstrapActions



```js
amazonaws_elasticmapreduce.ListBootstrapActions({
  "ClusterId": ""
}, context)
```

#### Input
* input `object`
  * Marker `string`
  * ClusterId **required** [ClusterId](#clusterid)
  * Marker [Marker](#marker)

#### Output
* output [ListBootstrapActionsOutput](#listbootstrapactionsoutput)

### ListClusters



```js
amazonaws_elasticmapreduce.ListClusters({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * ClusterStates [ClusterStateList](#clusterstatelist)
  * CreatedAfter [Date](#date)
  * CreatedBefore [Date](#date)
  * Marker [Marker](#marker)

#### Output
* output [ListClustersOutput](#listclustersoutput)

### ListInstanceFleets



```js
amazonaws_elasticmapreduce.ListInstanceFleets({
  "ClusterId": ""
}, context)
```

#### Input
* input `object`
  * Marker `string`
  * ClusterId **required** [ClusterId](#clusterid)
  * Marker [Marker](#marker)

#### Output
* output [ListInstanceFleetsOutput](#listinstancefleetsoutput)

### ListInstanceGroups



```js
amazonaws_elasticmapreduce.ListInstanceGroups({
  "ClusterId": ""
}, context)
```

#### Input
* input `object`
  * Marker `string`
  * ClusterId **required** [ClusterId](#clusterid)
  * Marker [Marker](#marker)

#### Output
* output [ListInstanceGroupsOutput](#listinstancegroupsoutput)

### ListInstances



```js
amazonaws_elasticmapreduce.ListInstances({
  "ClusterId": ""
}, context)
```

#### Input
* input `object`
  * Marker `string`
  * ClusterId **required** [ClusterId](#clusterid)
  * InstanceFleetId [InstanceFleetId](#instancefleetid)
  * InstanceFleetType [InstanceFleetType](#instancefleettype)
  * InstanceGroupId [InstanceGroupId](#instancegroupid)
  * InstanceGroupTypes [InstanceGroupTypeList](#instancegrouptypelist)
  * InstanceStates [InstanceStateList](#instancestatelist)
  * Marker [Marker](#marker)

#### Output
* output [ListInstancesOutput](#listinstancesoutput)

### ListSecurityConfigurations



```js
amazonaws_elasticmapreduce.ListSecurityConfigurations({}, context)
```

#### Input
* input `object`
  * Marker [Marker](#marker)

#### Output
* output [ListSecurityConfigurationsOutput](#listsecurityconfigurationsoutput)

### ListSteps



```js
amazonaws_elasticmapreduce.ListSteps({
  "ClusterId": ""
}, context)
```

#### Input
* input `object`
  * Marker `string`
  * ClusterId **required** [ClusterId](#clusterid)
  * Marker [Marker](#marker)
  * StepIds [XmlStringList](#xmlstringlist)
  * StepStates [StepStateList](#stepstatelist)

#### Output
* output [ListStepsOutput](#liststepsoutput)

### ModifyInstanceFleet



```js
amazonaws_elasticmapreduce.ModifyInstanceFleet({
  "ClusterId": "",
  "InstanceFleet": {
    "InstanceFleetId": ""
  }
}, context)
```

#### Input
* input `object`
  * ClusterId **required** [ClusterId](#clusterid)
  * InstanceFleet **required** [InstanceFleetModifyConfig](#instancefleetmodifyconfig)

#### Output
*Output schema unknown*

### ModifyInstanceGroups



```js
amazonaws_elasticmapreduce.ModifyInstanceGroups({}, context)
```

#### Input
* input `object`
  * ClusterId [ClusterId](#clusterid)
  * InstanceGroups [InstanceGroupModifyConfigList](#instancegroupmodifyconfiglist)

#### Output
*Output schema unknown*

### PutAutoScalingPolicy



```js
amazonaws_elasticmapreduce.PutAutoScalingPolicy({
  "ClusterId": "",
  "InstanceGroupId": "",
  "AutoScalingPolicy": {
    "Constraints": {
      "MinCapacity": 0,
      "MaxCapacity": 0
    },
    "Rules": []
  }
}, context)
```

#### Input
* input `object`
  * AutoScalingPolicy **required** [AutoScalingPolicy](#autoscalingpolicy)
  * ClusterId **required** [ClusterId](#clusterid)
  * InstanceGroupId **required** [InstanceGroupId](#instancegroupid)

#### Output
* output [PutAutoScalingPolicyOutput](#putautoscalingpolicyoutput)

### RemoveAutoScalingPolicy



```js
amazonaws_elasticmapreduce.RemoveAutoScalingPolicy({
  "ClusterId": "",
  "InstanceGroupId": ""
}, context)
```

#### Input
* input `object`
  * ClusterId **required** [ClusterId](#clusterid)
  * InstanceGroupId **required** [InstanceGroupId](#instancegroupid)

#### Output
* output [RemoveAutoScalingPolicyOutput](#removeautoscalingpolicyoutput)

### RemoveTags



```js
amazonaws_elasticmapreduce.RemoveTags({
  "ResourceId": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [ResourceId](#resourceid)
  * TagKeys **required** [StringList](#stringlist)

#### Output
* output [RemoveTagsOutput](#removetagsoutput)

### RunJobFlow



```js
amazonaws_elasticmapreduce.RunJobFlow({
  "Name": "",
  "Instances": {}
}, context)
```

#### Input
* input `object`
  * AdditionalInfo [XmlString](#xmlstring)
  * AmiVersion [XmlStringMaxLen256](#xmlstringmaxlen256)
  * Applications [ApplicationList](#applicationlist)
  * AutoScalingRole [XmlString](#xmlstring)
  * BootstrapActions [BootstrapActionConfigList](#bootstrapactionconfiglist)
  * Configurations [ConfigurationList](#configurationlist)
  * CustomAmiId [XmlStringMaxLen256](#xmlstringmaxlen256)
  * EbsRootVolumeSize [Integer](#integer)
  * Instances **required** [JobFlowInstancesConfig](#jobflowinstancesconfig)
  * JobFlowRole [XmlString](#xmlstring)
  * LogUri [XmlString](#xmlstring)
  * Name **required** [XmlStringMaxLen256](#xmlstringmaxlen256)
  * NewSupportedProducts [NewSupportedProductsList](#newsupportedproductslist)
  * ReleaseLabel [XmlStringMaxLen256](#xmlstringmaxlen256)
  * RepoUpgradeOnBoot [RepoUpgradeOnBoot](#repoupgradeonboot)
  * ScaleDownBehavior [ScaleDownBehavior](#scaledownbehavior)
  * SecurityConfiguration [XmlString](#xmlstring)
  * ServiceRole [XmlString](#xmlstring)
  * Steps [StepConfigList](#stepconfiglist)
  * SupportedProducts [SupportedProductsList](#supportedproductslist)
  * Tags [TagList](#taglist)
  * VisibleToAllUsers [Boolean](#boolean)

#### Output
* output [RunJobFlowOutput](#runjobflowoutput)

### SetTerminationProtection



```js
amazonaws_elasticmapreduce.SetTerminationProtection({
  "JobFlowIds": [],
  "TerminationProtected": true
}, context)
```

#### Input
* input `object`
  * JobFlowIds **required** [XmlStringList](#xmlstringlist)
  * TerminationProtected **required** [Boolean](#boolean)

#### Output
*Output schema unknown*

### SetVisibleToAllUsers



```js
amazonaws_elasticmapreduce.SetVisibleToAllUsers({
  "JobFlowIds": [],
  "VisibleToAllUsers": true
}, context)
```

#### Input
* input `object`
  * JobFlowIds **required** [XmlStringList](#xmlstringlist)
  * VisibleToAllUsers **required** [Boolean](#boolean)

#### Output
*Output schema unknown*

### TerminateJobFlows



```js
amazonaws_elasticmapreduce.TerminateJobFlows({
  "JobFlowIds": []
}, context)
```

#### Input
* input `object`
  * JobFlowIds **required** [XmlStringList](#xmlstringlist)

#### Output
*Output schema unknown*



## Definitions

### ActionOnFailure
* ActionOnFailure `string` (values: TERMINATE_JOB_FLOW, TERMINATE_CLUSTER, CANCEL_AND_WAIT, CONTINUE)

### AddInstanceFleetInput
* AddInstanceFleetInput `object`
  * ClusterId **required** [XmlStringMaxLen256](#xmlstringmaxlen256)
  * InstanceFleet **required** [InstanceFleetConfig](#instancefleetconfig)

### AddInstanceFleetOutput
* AddInstanceFleetOutput `object`
  * ClusterId [XmlStringMaxLen256](#xmlstringmaxlen256)
  * InstanceFleetId [InstanceFleetId](#instancefleetid)

### AddInstanceGroupsInput
* AddInstanceGroupsInput `object`: Input to an AddInstanceGroups call.
  * InstanceGroups **required** [InstanceGroupConfigList](#instancegroupconfiglist)
  * JobFlowId **required** [XmlStringMaxLen256](#xmlstringmaxlen256)

### AddInstanceGroupsOutput
* AddInstanceGroupsOutput `object`: Output from an AddInstanceGroups call.
  * InstanceGroupIds [InstanceGroupIdsList](#instancegroupidslist)
  * JobFlowId [XmlStringMaxLen256](#xmlstringmaxlen256)

### AddJobFlowStepsInput
* AddJobFlowStepsInput `object`:  The input argument to the <a>AddJobFlowSteps</a> operation. 
  * JobFlowId **required** [XmlStringMaxLen256](#xmlstringmaxlen256)
  * Steps **required** [StepConfigList](#stepconfiglist)

### AddJobFlowStepsOutput
* AddJobFlowStepsOutput `object`:  The output for the <a>AddJobFlowSteps</a> operation. 
  * StepIds [StepIdsList](#stepidslist)

### AddTagsInput
* AddTagsInput `object`: This input identifies a cluster and a list of tags to attach.
  * ResourceId **required** [ResourceId](#resourceid)
  * Tags **required** [TagList](#taglist)

### AddTagsOutput
* AddTagsOutput `object`: This output indicates the result of adding tags to a resource.

### AdjustmentType
* AdjustmentType `string` (values: CHANGE_IN_CAPACITY, PERCENT_CHANGE_IN_CAPACITY, EXACT_CAPACITY)

### Application
* Application `object`: <p>An application is any Amazon or third-party software that you can add to the cluster. This structure contains a list of strings that indicates the software to use with the cluster and accepts a user argument list. Amazon EMR accepts and forwards the argument list to the corresponding installation script as bootstrap action argument. For more information, see <a href="http://docs.aws.amazon.com/ElasticMapReduce/latest/ManagementGuide/emr-mapr.html">Using the MapR Distribution for Hadoop</a>. Currently supported values are:</p> <ul> <li> <p>"mapr-m3" - launch the cluster using MapR M3 Edition.</p> </li> <li> <p>"mapr-m5" - launch the cluster using MapR M5 Edition.</p> </li> <li> <p>"mapr" with the user arguments specifying "--edition,m3" or "--edition,m5" - launch the cluster using MapR M3 or M5 Edition, respectively.</p> </li> </ul> <note> <p>In Amazon EMR releases 4.x and later, the only accepted parameter is the application name. To pass arguments to applications, you supply a configuration for each application.</p> </note>
  * AdditionalInfo [StringMap](#stringmap)
  * Args [StringList](#stringlist)
  * Name [String](#string)
  * Version [String](#string)

### ApplicationList
* ApplicationList `array`
  * items [Application](#application)

### AutoScalingPolicy
* AutoScalingPolicy `object`: An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. An automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.
  * Constraints **required** [ScalingConstraints](#scalingconstraints)
  * Rules **required** [ScalingRuleList](#scalingrulelist)

### AutoScalingPolicyDescription
* AutoScalingPolicyDescription `object`: An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.
  * Constraints [ScalingConstraints](#scalingconstraints)
  * Rules [ScalingRuleList](#scalingrulelist)
  * Status [AutoScalingPolicyStatus](#autoscalingpolicystatus)

### AutoScalingPolicyState
* AutoScalingPolicyState `string` (values: PENDING, ATTACHING, ATTACHED, DETACHING, DETACHED, FAILED)

### AutoScalingPolicyStateChangeReason
* AutoScalingPolicyStateChangeReason `object`: The reason for an <a>AutoScalingPolicyStatus</a> change.
  * Code [AutoScalingPolicyStateChangeReasonCode](#autoscalingpolicystatechangereasoncode)
  * Message [String](#string)

### AutoScalingPolicyStateChangeReasonCode
* AutoScalingPolicyStateChangeReasonCode `string` (values: USER_REQUEST, PROVISION_FAILURE, CLEANUP_FAILURE)

### AutoScalingPolicyStatus
* AutoScalingPolicyStatus `object`: The status of an automatic scaling policy. 
  * State [AutoScalingPolicyState](#autoscalingpolicystate)
  * StateChangeReason [AutoScalingPolicyStateChangeReason](#autoscalingpolicystatechangereason)

### Boolean
* Boolean `boolean`

### BooleanObject
* BooleanObject `boolean`

### BootstrapActionConfig
* BootstrapActionConfig `object`: Configuration of a bootstrap action.
  * Name **required** [XmlStringMaxLen256](#xmlstringmaxlen256)
  * ScriptBootstrapAction **required** [ScriptBootstrapActionConfig](#scriptbootstrapactionconfig)

### BootstrapActionConfigList
* BootstrapActionConfigList `array`
  * items [BootstrapActionConfig](#bootstrapactionconfig)

### BootstrapActionDetail
* BootstrapActionDetail `object`: Reports the configuration of a bootstrap action in a cluster (job flow).
  * BootstrapActionConfig [BootstrapActionConfig](#bootstrapactionconfig)

### BootstrapActionDetailList
* BootstrapActionDetailList `array`
  * items [BootstrapActionDetail](#bootstrapactiondetail)

### CancelStepsInfo
* CancelStepsInfo `object`: Specification of the status of a CancelSteps request. Available only in Amazon EMR version 4.8.0 and later, excluding version 5.0.0.
  * Reason [String](#string)
  * Status [CancelStepsRequestStatus](#cancelstepsrequeststatus)
  * StepId [StepId](#stepid)

### CancelStepsInfoList
* CancelStepsInfoList `array`
  * items [CancelStepsInfo](#cancelstepsinfo)

### CancelStepsInput
* CancelStepsInput `object`: The input argument to the <a>CancelSteps</a> operation.
  * ClusterId [XmlStringMaxLen256](#xmlstringmaxlen256)
  * StepIds [StepIdsList](#stepidslist)

### CancelStepsOutput
* CancelStepsOutput `object`:  The output for the <a>CancelSteps</a> operation. 
  * CancelStepsInfoList [CancelStepsInfoList](#cancelstepsinfolist)

### CancelStepsRequestStatus
* CancelStepsRequestStatus `string` (values: SUBMITTED, FAILED)

### CloudWatchAlarmDefinition
* CloudWatchAlarmDefinition `object`: The definition of a CloudWatch metric alarm, which determines when an automatic scaling activity is triggered. When the defined alarm conditions are satisfied, scaling activity begins.
  * ComparisonOperator **required** [ComparisonOperator](#comparisonoperator)
  * Dimensions [MetricDimensionList](#metricdimensionlist)
  * EvaluationPeriods [Integer](#integer)
  * MetricName **required** [String](#string)
  * Namespace [String](#string)
  * Period **required** [Integer](#integer)
  * Statistic [Statistic](#statistic)
  * Threshold **required** [NonNegativeDouble](#nonnegativedouble)
  * Unit [Unit](#unit)

### Cluster
* Cluster `object`: The detailed description of the cluster.
  * Applications [ApplicationList](#applicationlist)
  * AutoScalingRole [XmlString](#xmlstring)
  * AutoTerminate [Boolean](#boolean)
  * Configurations [ConfigurationList](#configurationlist)
  * CustomAmiId [XmlStringMaxLen256](#xmlstringmaxlen256)
  * EbsRootVolumeSize [Integer](#integer)
  * Ec2InstanceAttributes [Ec2InstanceAttributes](#ec2instanceattributes)
  * Id [ClusterId](#clusterid)
  * InstanceCollectionType [InstanceCollectionType](#instancecollectiontype)
  * LogUri [String](#string)
  * MasterPublicDnsName [String](#string)
  * Name [String](#string)
  * NormalizedInstanceHours [Integer](#integer)
  * ReleaseLabel [String](#string)
  * RepoUpgradeOnBoot [RepoUpgradeOnBoot](#repoupgradeonboot)
  * RequestedAmiVersion [String](#string)
  * RunningAmiVersion [String](#string)
  * ScaleDownBehavior [ScaleDownBehavior](#scaledownbehavior)
  * SecurityConfiguration [XmlString](#xmlstring)
  * ServiceRole [String](#string)
  * Status [ClusterStatus](#clusterstatus)
  * Tags [TagList](#taglist)
  * TerminationProtected [Boolean](#boolean)
  * VisibleToAllUsers [Boolean](#boolean)

### ClusterId
* ClusterId `string`

### ClusterState
* ClusterState `string` (values: STARTING, BOOTSTRAPPING, RUNNING, WAITING, TERMINATING, TERMINATED, TERMINATED_WITH_ERRORS)

### ClusterStateChangeReason
* ClusterStateChangeReason `object`: The reason that the cluster changed to its current state.
  * Code [ClusterStateChangeReasonCode](#clusterstatechangereasoncode)
  * Message [String](#string)

### ClusterStateChangeReasonCode
* ClusterStateChangeReasonCode `string` (values: INTERNAL_ERROR, VALIDATION_ERROR, INSTANCE_FAILURE, INSTANCE_FLEET_TIMEOUT, BOOTSTRAP_FAILURE, USER_REQUEST, STEP_FAILURE, ALL_STEPS_COMPLETED)

### ClusterStateList
* ClusterStateList `array`
  * items [ClusterState](#clusterstate)

### ClusterStatus
* ClusterStatus `object`: The detailed status of the cluster.
  * State [ClusterState](#clusterstate)
  * StateChangeReason [ClusterStateChangeReason](#clusterstatechangereason)
  * Timeline [ClusterTimeline](#clustertimeline)

### ClusterSummary
* ClusterSummary `object`: The summary description of the cluster.
  * Id [ClusterId](#clusterid)
  * Name [String](#string)
  * NormalizedInstanceHours [Integer](#integer)
  * Status [ClusterStatus](#clusterstatus)

### ClusterSummaryList
* ClusterSummaryList `array`
  * items [ClusterSummary](#clustersummary)

### ClusterTimeline
* ClusterTimeline `object`: Represents the timeline of the cluster's lifecycle.
  * CreationDateTime [Date](#date)
  * EndDateTime [Date](#date)
  * ReadyDateTime [Date](#date)

### Command
* Command `object`: An entity describing an executable that runs on a cluster.
  * Args [StringList](#stringlist)
  * Name [String](#string)
  * ScriptPath [String](#string)

### CommandList
* CommandList `array`
  * items [Command](#command)

### ComparisonOperator
* ComparisonOperator `string` (values: GREATER_THAN_OR_EQUAL, GREATER_THAN, LESS_THAN, LESS_THAN_OR_EQUAL)

### Configuration
* Configuration `object`: <note> <p>Amazon EMR releases 4.x or later.</p> </note> <p>An optional configuration specification to be used when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see <a href="http://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p>
  * Classification [String](#string)
  * Configurations [ConfigurationList](#configurationlist)
  * Properties [StringMap](#stringmap)

### ConfigurationList
* ConfigurationList `array`
  * items [Configuration](#configuration)

### CreateSecurityConfigurationInput
* CreateSecurityConfigurationInput `object`
  * Name **required** [XmlString](#xmlstring)
  * SecurityConfiguration **required** [String](#string)

### CreateSecurityConfigurationOutput
* CreateSecurityConfigurationOutput `object`
  * CreationDateTime **required** [Date](#date)
  * Name **required** [XmlString](#xmlstring)

### Date
* Date `string`

### DeleteSecurityConfigurationInput
* DeleteSecurityConfigurationInput `object`
  * Name **required** [XmlString](#xmlstring)

### DeleteSecurityConfigurationOutput
* DeleteSecurityConfigurationOutput `object`

### DescribeClusterInput
* DescribeClusterInput `object`: This input determines which cluster to describe.
  * ClusterId **required** [ClusterId](#clusterid)

### DescribeClusterOutput
* DescribeClusterOutput `object`: This output contains the description of the cluster.
  * Cluster [Cluster](#cluster)

### DescribeJobFlowsInput
* DescribeJobFlowsInput `object`:  The input for the <a>DescribeJobFlows</a> operation. 
  * CreatedAfter [Date](#date)
  * CreatedBefore [Date](#date)
  * JobFlowIds [XmlStringList](#xmlstringlist)
  * JobFlowStates [JobFlowExecutionStateList](#jobflowexecutionstatelist)

### DescribeJobFlowsOutput
* DescribeJobFlowsOutput `object`:  The output for the <a>DescribeJobFlows</a> operation. 
  * JobFlows [JobFlowDetailList](#jobflowdetaillist)

### DescribeSecurityConfigurationInput
* DescribeSecurityConfigurationInput `object`
  * Name **required** [XmlString](#xmlstring)

### DescribeSecurityConfigurationOutput
* DescribeSecurityConfigurationOutput `object`
  * CreationDateTime [Date](#date)
  * Name [XmlString](#xmlstring)
  * SecurityConfiguration [String](#string)

### DescribeStepInput
* DescribeStepInput `object`: This input determines which step to describe.
  * ClusterId **required** [ClusterId](#clusterid)
  * StepId **required** [StepId](#stepid)

### DescribeStepOutput
* DescribeStepOutput `object`: This output contains the description of the cluster step.
  * Step [Step](#step)

### EC2InstanceIdsList
* EC2InstanceIdsList `array`
  * items [InstanceId](#instanceid)

### EC2InstanceIdsToTerminateList
* EC2InstanceIdsToTerminateList `array`
  * items [InstanceId](#instanceid)

### EbsBlockDevice
* EbsBlockDevice `object`: Configuration of requested EBS block device associated with the instance group.
  * Device [String](#string)
  * VolumeSpecification [VolumeSpecification](#volumespecification)

### EbsBlockDeviceConfig
* EbsBlockDeviceConfig `object`: Configuration of requested EBS block device associated with the instance group with count of volumes that will be associated to every instance.
  * VolumeSpecification **required** [VolumeSpecification](#volumespecification)
  * VolumesPerInstance [Integer](#integer)

### EbsBlockDeviceConfigList
* EbsBlockDeviceConfigList `array`
  * items [EbsBlockDeviceConfig](#ebsblockdeviceconfig)

### EbsBlockDeviceList
* EbsBlockDeviceList `array`
  * items [EbsBlockDevice](#ebsblockdevice)

### EbsConfiguration
* EbsConfiguration `object`: The Amazon EBS configuration of a cluster instance.
  * EbsBlockDeviceConfigs [EbsBlockDeviceConfigList](#ebsblockdeviceconfiglist)
  * EbsOptimized [BooleanObject](#booleanobject)

### EbsVolume
* EbsVolume `object`: EBS block device that's attached to an EC2 instance.
  * Device [String](#string)
  * VolumeId [String](#string)

### EbsVolumeList
* EbsVolumeList `array`
  * items [EbsVolume](#ebsvolume)

### Ec2InstanceAttributes
* Ec2InstanceAttributes `object`: Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.
  * AdditionalMasterSecurityGroups [StringList](#stringlist)
  * AdditionalSlaveSecurityGroups [StringList](#stringlist)
  * Ec2AvailabilityZone [String](#string)
  * Ec2KeyName [String](#string)
  * Ec2SubnetId [String](#string)
  * EmrManagedMasterSecurityGroup [String](#string)
  * EmrManagedSlaveSecurityGroup [String](#string)
  * IamInstanceProfile [String](#string)
  * RequestedEc2AvailabilityZones [XmlStringMaxLen256List](#xmlstringmaxlen256list)
  * RequestedEc2SubnetIds [XmlStringMaxLen256List](#xmlstringmaxlen256list)
  * ServiceAccessSecurityGroup [String](#string)

### ErrorCode
* ErrorCode `string`

### ErrorMessage
* ErrorMessage `string`

### FailureDetails
* FailureDetails `object`: The details of the step failure. The service attempts to detect the root cause for many common failures.
  * LogFile [String](#string)
  * Message [String](#string)
  * Reason [String](#string)

### HadoopJarStepConfig
* HadoopJarStepConfig `object`: A job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.
  * Args [XmlStringList](#xmlstringlist)
  * Jar **required** [XmlString](#xmlstring)
  * MainClass [XmlString](#xmlstring)
  * Properties [KeyValueList](#keyvaluelist)

### HadoopStepConfig
* HadoopStepConfig `object`: A cluster step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.
  * Args [StringList](#stringlist)
  * Jar [String](#string)
  * MainClass [String](#string)
  * Properties [StringMap](#stringmap)

### Instance
* Instance `object`: Represents an EC2 instance provisioned as part of cluster.
  * EbsVolumes [EbsVolumeList](#ebsvolumelist)
  * Ec2InstanceId [InstanceId](#instanceid)
  * Id [InstanceId](#instanceid)
  * InstanceFleetId [InstanceFleetId](#instancefleetid)
  * InstanceGroupId [String](#string)
  * InstanceType [InstanceType](#instancetype)
  * Market [MarketType](#markettype)
  * PrivateDnsName [String](#string)
  * PrivateIpAddress [String](#string)
  * PublicDnsName [String](#string)
  * PublicIpAddress [String](#string)
  * Status [InstanceStatus](#instancestatus)

### InstanceCollectionType
* InstanceCollectionType `string` (values: INSTANCE_FLEET, INSTANCE_GROUP)

### InstanceFleet
* InstanceFleet `object`: <p>Describes an instance fleet, which is a group of EC2 instances that host a particular node type (master, core, or task) in an Amazon EMR cluster. Instance fleets can consist of a mix of instance types and On-Demand and Spot instances, which are provisioned to meet a defined target capacity. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
  * Id [InstanceFleetId](#instancefleetid)
  * InstanceFleetType [InstanceFleetType](#instancefleettype)
  * InstanceTypeSpecifications [InstanceTypeSpecificationList](#instancetypespecificationlist)
  * LaunchSpecifications [InstanceFleetProvisioningSpecifications](#instancefleetprovisioningspecifications)
  * Name [XmlStringMaxLen256](#xmlstringmaxlen256)
  * ProvisionedOnDemandCapacity [WholeNumber](#wholenumber)
  * ProvisionedSpotCapacity [WholeNumber](#wholenumber)
  * Status [InstanceFleetStatus](#instancefleetstatus)
  * TargetOnDemandCapacity [WholeNumber](#wholenumber)
  * TargetSpotCapacity [WholeNumber](#wholenumber)

### InstanceFleetConfig
* InstanceFleetConfig `object`: <p>The configuration that defines an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
  * InstanceFleetType **required** [InstanceFleetType](#instancefleettype)
  * InstanceTypeConfigs [InstanceTypeConfigList](#instancetypeconfiglist)
  * LaunchSpecifications [InstanceFleetProvisioningSpecifications](#instancefleetprovisioningspecifications)
  * Name [XmlStringMaxLen256](#xmlstringmaxlen256)
  * TargetOnDemandCapacity [WholeNumber](#wholenumber)
  * TargetSpotCapacity [WholeNumber](#wholenumber)

### InstanceFleetConfigList
* InstanceFleetConfigList `array`
  * items [InstanceFleetConfig](#instancefleetconfig)

### InstanceFleetId
* InstanceFleetId `string`

### InstanceFleetList
* InstanceFleetList `array`
  * items [InstanceFleet](#instancefleet)

### InstanceFleetModifyConfig
* InstanceFleetModifyConfig `object`: <p>Configuration parameters for an instance fleet modification request.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
  * InstanceFleetId **required** [InstanceFleetId](#instancefleetid)
  * TargetOnDemandCapacity [WholeNumber](#wholenumber)
  * TargetSpotCapacity [WholeNumber](#wholenumber)

### InstanceFleetProvisioningSpecifications
* InstanceFleetProvisioningSpecifications `object`: <p>The launch specification for Spot instances in the fleet, which determines the defined duration and provisioning timeout behavior.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
  * SpotSpecification **required** [SpotProvisioningSpecification](#spotprovisioningspecification)

### InstanceFleetState
* InstanceFleetState `string` (values: PROVISIONING, BOOTSTRAPPING, RUNNING, RESIZING, SUSPENDED, TERMINATING, TERMINATED)

### InstanceFleetStateChangeReason
* InstanceFleetStateChangeReason `object`: <p>Provides status change reason details for the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
  * Code [InstanceFleetStateChangeReasonCode](#instancefleetstatechangereasoncode)
  * Message [String](#string)

### InstanceFleetStateChangeReasonCode
* InstanceFleetStateChangeReasonCode `string` (values: INTERNAL_ERROR, VALIDATION_ERROR, INSTANCE_FAILURE, CLUSTER_TERMINATED)

### InstanceFleetStatus
* InstanceFleetStatus `object`: <p>The status of the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
  * State [InstanceFleetState](#instancefleetstate)
  * StateChangeReason [InstanceFleetStateChangeReason](#instancefleetstatechangereason)
  * Timeline [InstanceFleetTimeline](#instancefleettimeline)

### InstanceFleetTimeline
* InstanceFleetTimeline `object`: <p>Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
  * CreationDateTime [Date](#date)
  * EndDateTime [Date](#date)
  * ReadyDateTime [Date](#date)

### InstanceFleetType
* InstanceFleetType `string` (values: MASTER, CORE, TASK)

### InstanceGroup
* InstanceGroup `object`: This entity represents an instance group, which is a group of instances that have common purpose. For example, CORE instance group is used for HDFS.
  * AutoScalingPolicy [AutoScalingPolicyDescription](#autoscalingpolicydescription)
  * BidPrice [String](#string)
  * Configurations [ConfigurationList](#configurationlist)
  * EbsBlockDevices [EbsBlockDeviceList](#ebsblockdevicelist)
  * EbsOptimized [BooleanObject](#booleanobject)
  * Id [InstanceGroupId](#instancegroupid)
  * InstanceGroupType [InstanceGroupType](#instancegrouptype)
  * InstanceType [InstanceType](#instancetype)
  * Market [MarketType](#markettype)
  * Name [String](#string)
  * RequestedInstanceCount [Integer](#integer)
  * RunningInstanceCount [Integer](#integer)
  * ShrinkPolicy [ShrinkPolicy](#shrinkpolicy)
  * Status [InstanceGroupStatus](#instancegroupstatus)

### InstanceGroupConfig
* InstanceGroupConfig `object`: Configuration defining a new instance group.
  * AutoScalingPolicy [AutoScalingPolicy](#autoscalingpolicy)
  * BidPrice [XmlStringMaxLen256](#xmlstringmaxlen256)
  * Configurations [ConfigurationList](#configurationlist)
  * EbsConfiguration [EbsConfiguration](#ebsconfiguration)
  * InstanceCount **required** [Integer](#integer)
  * InstanceRole **required** [InstanceRoleType](#instanceroletype)
  * InstanceType **required** [InstanceType](#instancetype)
  * Market [MarketType](#markettype)
  * Name [XmlStringMaxLen256](#xmlstringmaxlen256)

### InstanceGroupConfigList
* InstanceGroupConfigList `array`
  * items [InstanceGroupConfig](#instancegroupconfig)

### InstanceGroupDetail
* InstanceGroupDetail `object`: Detailed information about an instance group.
  * BidPrice [XmlStringMaxLen256](#xmlstringmaxlen256)
  * CreationDateTime **required** [Date](#date)
  * EndDateTime [Date](#date)
  * InstanceGroupId [XmlStringMaxLen256](#xmlstringmaxlen256)
  * InstanceRequestCount **required** [Integer](#integer)
  * InstanceRole **required** [InstanceRoleType](#instanceroletype)
  * InstanceRunningCount **required** [Integer](#integer)
  * InstanceType **required** [InstanceType](#instancetype)
  * LastStateChangeReason [XmlString](#xmlstring)
  * Market **required** [MarketType](#markettype)
  * Name [XmlStringMaxLen256](#xmlstringmaxlen256)
  * ReadyDateTime [Date](#date)
  * StartDateTime [Date](#date)
  * State **required** [InstanceGroupState](#instancegroupstate)

### InstanceGroupDetailList
* InstanceGroupDetailList `array`
  * items [InstanceGroupDetail](#instancegroupdetail)

### InstanceGroupId
* InstanceGroupId `string`

### InstanceGroupIdsList
* InstanceGroupIdsList `array`
  * items [XmlStringMaxLen256](#xmlstringmaxlen256)

### InstanceGroupList
* InstanceGroupList `array`
  * items [InstanceGroup](#instancegroup)

### InstanceGroupModifyConfig
* InstanceGroupModifyConfig `object`: Modify an instance group size.
  * EC2InstanceIdsToTerminate [EC2InstanceIdsToTerminateList](#ec2instanceidstoterminatelist)
  * InstanceCount [Integer](#integer)
  * InstanceGroupId **required** [XmlStringMaxLen256](#xmlstringmaxlen256)
  * ShrinkPolicy [ShrinkPolicy](#shrinkpolicy)

### InstanceGroupModifyConfigList
* InstanceGroupModifyConfigList `array`
  * items [InstanceGroupModifyConfig](#instancegroupmodifyconfig)

### InstanceGroupState
* InstanceGroupState `string` (values: PROVISIONING, BOOTSTRAPPING, RUNNING, RESIZING, SUSPENDED, TERMINATING, TERMINATED, ARRESTED, SHUTTING_DOWN, ENDED)

### InstanceGroupStateChangeReason
* InstanceGroupStateChangeReason `object`: The status change reason details for the instance group.
  * Code [InstanceGroupStateChangeReasonCode](#instancegroupstatechangereasoncode)
  * Message [String](#string)

### InstanceGroupStateChangeReasonCode
* InstanceGroupStateChangeReasonCode `string` (values: INTERNAL_ERROR, VALIDATION_ERROR, INSTANCE_FAILURE, CLUSTER_TERMINATED)

### InstanceGroupStatus
* InstanceGroupStatus `object`: The details of the instance group status.
  * State [InstanceGroupState](#instancegroupstate)
  * StateChangeReason [InstanceGroupStateChangeReason](#instancegroupstatechangereason)
  * Timeline [InstanceGroupTimeline](#instancegrouptimeline)

### InstanceGroupTimeline
* InstanceGroupTimeline `object`: The timeline of the instance group lifecycle.
  * CreationDateTime [Date](#date)
  * EndDateTime [Date](#date)
  * ReadyDateTime [Date](#date)

### InstanceGroupType
* InstanceGroupType `string` (values: MASTER, CORE, TASK)

### InstanceGroupTypeList
* InstanceGroupTypeList `array`
  * items [InstanceGroupType](#instancegrouptype)

### InstanceId
* InstanceId `string`

### InstanceList
* InstanceList `array`
  * items [Instance](#instance)

### InstanceResizePolicy
* InstanceResizePolicy `object`: Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.
  * InstanceTerminationTimeout [Integer](#integer)
  * InstancesToProtect [EC2InstanceIdsList](#ec2instanceidslist)
  * InstancesToTerminate [EC2InstanceIdsList](#ec2instanceidslist)

### InstanceRoleType
* InstanceRoleType `string` (values: MASTER, CORE, TASK)

### InstanceState
* InstanceState `string` (values: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING, TERMINATED)

### InstanceStateChangeReason
* InstanceStateChangeReason `object`: The details of the status change reason for the instance.
  * Code [InstanceStateChangeReasonCode](#instancestatechangereasoncode)
  * Message [String](#string)

### InstanceStateChangeReasonCode
* InstanceStateChangeReasonCode `string` (values: INTERNAL_ERROR, VALIDATION_ERROR, INSTANCE_FAILURE, BOOTSTRAP_FAILURE, CLUSTER_TERMINATED)

### InstanceStateList
* InstanceStateList `array`
  * items [InstanceState](#instancestate)

### InstanceStatus
* InstanceStatus `object`: The instance status details.
  * State [InstanceState](#instancestate)
  * StateChangeReason [InstanceStateChangeReason](#instancestatechangereason)
  * Timeline [InstanceTimeline](#instancetimeline)

### InstanceTimeline
* InstanceTimeline `object`: The timeline of the instance lifecycle.
  * CreationDateTime [Date](#date)
  * EndDateTime [Date](#date)
  * ReadyDateTime [Date](#date)

### InstanceType
* InstanceType `string`

### InstanceTypeConfig
* InstanceTypeConfig `object`: <p>An instance type configuration for each instance type in an instance fleet, which determines the EC2 instances Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities. There can be a maximum of 5 instance type configurations in a fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
  * BidPrice [XmlStringMaxLen256](#xmlstringmaxlen256)
  * BidPriceAsPercentageOfOnDemandPrice [NonNegativeDouble](#nonnegativedouble)
  * Configurations [ConfigurationList](#configurationlist)
  * EbsConfiguration [EbsConfiguration](#ebsconfiguration)
  * InstanceType **required** [InstanceType](#instancetype)
  * WeightedCapacity [WholeNumber](#wholenumber)

### InstanceTypeConfigList
* InstanceTypeConfigList `array`
  * items [InstanceTypeConfig](#instancetypeconfig)

### InstanceTypeSpecification
* InstanceTypeSpecification `object`: <p>The configuration specification for each instance type in an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
  * BidPrice [XmlStringMaxLen256](#xmlstringmaxlen256)
  * BidPriceAsPercentageOfOnDemandPrice [NonNegativeDouble](#nonnegativedouble)
  * Configurations [ConfigurationList](#configurationlist)
  * EbsBlockDevices [EbsBlockDeviceList](#ebsblockdevicelist)
  * EbsOptimized [BooleanObject](#booleanobject)
  * InstanceType [InstanceType](#instancetype)
  * WeightedCapacity [WholeNumber](#wholenumber)

### InstanceTypeSpecificationList
* InstanceTypeSpecificationList `array`
  * items [InstanceTypeSpecification](#instancetypespecification)

### Integer
* Integer `integer`

### InternalServerError
* InternalServerError `object`: Indicates that an error occurred while processing the request and that the request was not completed.

### InternalServerException
* InternalServerException `object`: This exception occurs when there is an internal failure in the EMR service.
  * Message [ErrorMessage](#errormessage)

### InvalidRequestException
* InvalidRequestException `object`: This exception occurs when there is something wrong with user input.
  * ErrorCode [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### JobFlowDetail
* JobFlowDetail `object`: A description of a cluster (job flow).
  * AmiVersion [XmlStringMaxLen256](#xmlstringmaxlen256)
  * AutoScalingRole [XmlString](#xmlstring)
  * BootstrapActions [BootstrapActionDetailList](#bootstrapactiondetaillist)
  * ExecutionStatusDetail **required** [JobFlowExecutionStatusDetail](#jobflowexecutionstatusdetail)
  * Instances **required** [JobFlowInstancesDetail](#jobflowinstancesdetail)
  * JobFlowId **required** [XmlStringMaxLen256](#xmlstringmaxlen256)
  * JobFlowRole [XmlString](#xmlstring)
  * LogUri [XmlString](#xmlstring)
  * Name **required** [XmlStringMaxLen256](#xmlstringmaxlen256)
  * ScaleDownBehavior [ScaleDownBehavior](#scaledownbehavior)
  * ServiceRole [XmlString](#xmlstring)
  * Steps [StepDetailList](#stepdetaillist)
  * SupportedProducts [SupportedProductsList](#supportedproductslist)
  * VisibleToAllUsers [Boolean](#boolean)

### JobFlowDetailList
* JobFlowDetailList `array`
  * items [JobFlowDetail](#jobflowdetail)

### JobFlowExecutionState
* JobFlowExecutionState `string` (values: STARTING, BOOTSTRAPPING, RUNNING, WAITING, SHUTTING_DOWN, TERMINATED, COMPLETED, FAILED): The type of instance.

### JobFlowExecutionStateList
* JobFlowExecutionStateList `array`
  * items [JobFlowExecutionState](#jobflowexecutionstate)

### JobFlowExecutionStatusDetail
* JobFlowExecutionStatusDetail `object`: Describes the status of the cluster (job flow).
  * CreationDateTime **required** [Date](#date)
  * EndDateTime [Date](#date)
  * LastStateChangeReason [XmlString](#xmlstring)
  * ReadyDateTime [Date](#date)
  * StartDateTime [Date](#date)
  * State **required** [JobFlowExecutionState](#jobflowexecutionstate)

### JobFlowInstancesConfig
* JobFlowInstancesConfig `object`: A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets, which is the recommended configuration. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration.
  * AdditionalMasterSecurityGroups [SecurityGroupsList](#securitygroupslist)
  * AdditionalSlaveSecurityGroups [SecurityGroupsList](#securitygroupslist)
  * Ec2KeyName [XmlStringMaxLen256](#xmlstringmaxlen256)
  * Ec2SubnetId [XmlStringMaxLen256](#xmlstringmaxlen256)
  * Ec2SubnetIds [XmlStringMaxLen256List](#xmlstringmaxlen256list)
  * EmrManagedMasterSecurityGroup [XmlStringMaxLen256](#xmlstringmaxlen256)
  * EmrManagedSlaveSecurityGroup [XmlStringMaxLen256](#xmlstringmaxlen256)
  * HadoopVersion [XmlStringMaxLen256](#xmlstringmaxlen256)
  * InstanceCount [Integer](#integer)
  * InstanceFleets [InstanceFleetConfigList](#instancefleetconfiglist)
  * InstanceGroups [InstanceGroupConfigList](#instancegroupconfiglist)
  * KeepJobFlowAliveWhenNoSteps [Boolean](#boolean)
  * MasterInstanceType [InstanceType](#instancetype)
  * Placement [PlacementType](#placementtype)
  * ServiceAccessSecurityGroup [XmlStringMaxLen256](#xmlstringmaxlen256)
  * SlaveInstanceType [InstanceType](#instancetype)
  * TerminationProtected [Boolean](#boolean)

### JobFlowInstancesDetail
* JobFlowInstancesDetail `object`: Specify the type of Amazon EC2 instances that the cluster (job flow) runs on.
  * Ec2KeyName [XmlStringMaxLen256](#xmlstringmaxlen256)
  * Ec2SubnetId [XmlStringMaxLen256](#xmlstringmaxlen256)
  * HadoopVersion [XmlStringMaxLen256](#xmlstringmaxlen256)
  * InstanceCount **required** [Integer](#integer)
  * InstanceGroups [InstanceGroupDetailList](#instancegroupdetaillist)
  * KeepJobFlowAliveWhenNoSteps [Boolean](#boolean)
  * MasterInstanceId [XmlString](#xmlstring)
  * MasterInstanceType **required** [InstanceType](#instancetype)
  * MasterPublicDnsName [XmlString](#xmlstring)
  * NormalizedInstanceHours [Integer](#integer)
  * Placement [PlacementType](#placementtype)
  * SlaveInstanceType **required** [InstanceType](#instancetype)
  * TerminationProtected [Boolean](#boolean)

### KeyValue
* KeyValue `object`: A key value pair.
  * Key [XmlString](#xmlstring)
  * Value [XmlString](#xmlstring)

### KeyValueList
* KeyValueList `array`
  * items [KeyValue](#keyvalue)

### ListBootstrapActionsInput
* ListBootstrapActionsInput `object`: This input determines which bootstrap actions to retrieve.
  * ClusterId **required** [ClusterId](#clusterid)
  * Marker [Marker](#marker)

### ListBootstrapActionsOutput
* ListBootstrapActionsOutput `object`: This output contains the bootstrap actions detail.
  * BootstrapActions [CommandList](#commandlist)
  * Marker [Marker](#marker)

### ListClustersInput
* ListClustersInput `object`: This input determines how the ListClusters action filters the list of clusters that it returns.
  * ClusterStates [ClusterStateList](#clusterstatelist)
  * CreatedAfter [Date](#date)
  * CreatedBefore [Date](#date)
  * Marker [Marker](#marker)

### ListClustersOutput
* ListClustersOutput `object`: This contains a ClusterSummaryList with the cluster details; for example, the cluster IDs, names, and status.
  * Clusters [ClusterSummaryList](#clustersummarylist)
  * Marker [Marker](#marker)

### ListInstanceFleetsInput
* ListInstanceFleetsInput `object`
  * ClusterId **required** [ClusterId](#clusterid)
  * Marker [Marker](#marker)

### ListInstanceFleetsOutput
* ListInstanceFleetsOutput `object`
  * InstanceFleets [InstanceFleetList](#instancefleetlist)
  * Marker [Marker](#marker)

### ListInstanceGroupsInput
* ListInstanceGroupsInput `object`: This input determines which instance groups to retrieve.
  * ClusterId **required** [ClusterId](#clusterid)
  * Marker [Marker](#marker)

### ListInstanceGroupsOutput
* ListInstanceGroupsOutput `object`: This input determines which instance groups to retrieve.
  * InstanceGroups [InstanceGroupList](#instancegrouplist)
  * Marker [Marker](#marker)

### ListInstancesInput
* ListInstancesInput `object`: This input determines which instances to list.
  * ClusterId **required** [ClusterId](#clusterid)
  * InstanceFleetId [InstanceFleetId](#instancefleetid)
  * InstanceFleetType [InstanceFleetType](#instancefleettype)
  * InstanceGroupId [InstanceGroupId](#instancegroupid)
  * InstanceGroupTypes [InstanceGroupTypeList](#instancegrouptypelist)
  * InstanceStates [InstanceStateList](#instancestatelist)
  * Marker [Marker](#marker)

### ListInstancesOutput
* ListInstancesOutput `object`: This output contains the list of instances.
  * Instances [InstanceList](#instancelist)
  * Marker [Marker](#marker)

### ListSecurityConfigurationsInput
* ListSecurityConfigurationsInput `object`
  * Marker [Marker](#marker)

### ListSecurityConfigurationsOutput
* ListSecurityConfigurationsOutput `object`
  * Marker [Marker](#marker)
  * SecurityConfigurations [SecurityConfigurationList](#securityconfigurationlist)

### ListStepsInput
* ListStepsInput `object`: This input determines which steps to list.
  * ClusterId **required** [ClusterId](#clusterid)
  * Marker [Marker](#marker)
  * StepIds [XmlStringList](#xmlstringlist)
  * StepStates [StepStateList](#stepstatelist)

### ListStepsOutput
* ListStepsOutput `object`: This output contains the list of steps returned in reverse order. This means that the last step is the first element in the list.
  * Marker [Marker](#marker)
  * Steps [StepSummaryList](#stepsummarylist)

### Marker
* Marker `string`

### MarketType
* MarketType `string` (values: ON_DEMAND, SPOT)

### MetricDimension
* MetricDimension `object`: A CloudWatch dimension, which is specified using a <code>Key</code> (known as a <code>Name</code> in CloudWatch), <code>Value</code> pair. By default, Amazon EMR uses one dimension whose <code>Key</code> is <code>JobFlowID</code> and <code>Value</code> is a variable representing the cluster ID, which is <code>${emr.clusterId}</code>. This enables the rule to bootstrap when the cluster ID becomes available.
  * Key [String](#string)
  * Value [String](#string)

### MetricDimensionList
* MetricDimensionList `array`
  * items [MetricDimension](#metricdimension)

### ModifyInstanceFleetInput
* ModifyInstanceFleetInput `object`
  * ClusterId **required** [ClusterId](#clusterid)
  * InstanceFleet **required** [InstanceFleetModifyConfig](#instancefleetmodifyconfig)

### ModifyInstanceGroupsInput
* ModifyInstanceGroupsInput `object`: Change the size of some instance groups.
  * ClusterId [ClusterId](#clusterid)
  * InstanceGroups [InstanceGroupModifyConfigList](#instancegroupmodifyconfiglist)

### NewSupportedProductsList
* NewSupportedProductsList `array`
  * items [SupportedProductConfig](#supportedproductconfig)

### NonNegativeDouble
* NonNegativeDouble `number`

### PlacementType
* PlacementType `object`: The Amazon EC2 Availability Zone configuration of the cluster (job flow).
  * AvailabilityZone [XmlString](#xmlstring)
  * AvailabilityZones [XmlStringMaxLen256List](#xmlstringmaxlen256list)

### PutAutoScalingPolicyInput
* PutAutoScalingPolicyInput `object`
  * AutoScalingPolicy **required** [AutoScalingPolicy](#autoscalingpolicy)
  * ClusterId **required** [ClusterId](#clusterid)
  * InstanceGroupId **required** [InstanceGroupId](#instancegroupid)

### PutAutoScalingPolicyOutput
* PutAutoScalingPolicyOutput `object`
  * AutoScalingPolicy [AutoScalingPolicyDescription](#autoscalingpolicydescription)
  * ClusterId [ClusterId](#clusterid)
  * InstanceGroupId [InstanceGroupId](#instancegroupid)

### RemoveAutoScalingPolicyInput
* RemoveAutoScalingPolicyInput `object`
  * ClusterId **required** [ClusterId](#clusterid)
  * InstanceGroupId **required** [InstanceGroupId](#instancegroupid)

### RemoveAutoScalingPolicyOutput
* RemoveAutoScalingPolicyOutput `object`

### RemoveTagsInput
* RemoveTagsInput `object`: This input identifies a cluster and a list of tags to remove.
  * ResourceId **required** [ResourceId](#resourceid)
  * TagKeys **required** [StringList](#stringlist)

### RemoveTagsOutput
* RemoveTagsOutput `object`: This output indicates the result of removing tags from a resource.

### RepoUpgradeOnBoot
* RepoUpgradeOnBoot `string` (values: SECURITY, NONE)

### ResourceId
* ResourceId `string`

### RunJobFlowInput
* RunJobFlowInput `object`:  Input to the <a>RunJobFlow</a> operation. 
  * AdditionalInfo [XmlString](#xmlstring)
  * AmiVersion [XmlStringMaxLen256](#xmlstringmaxlen256)
  * Applications [ApplicationList](#applicationlist)
  * AutoScalingRole [XmlString](#xmlstring)
  * BootstrapActions [BootstrapActionConfigList](#bootstrapactionconfiglist)
  * Configurations [ConfigurationList](#configurationlist)
  * CustomAmiId [XmlStringMaxLen256](#xmlstringmaxlen256)
  * EbsRootVolumeSize [Integer](#integer)
  * Instances **required** [JobFlowInstancesConfig](#jobflowinstancesconfig)
  * JobFlowRole [XmlString](#xmlstring)
  * LogUri [XmlString](#xmlstring)
  * Name **required** [XmlStringMaxLen256](#xmlstringmaxlen256)
  * NewSupportedProducts [NewSupportedProductsList](#newsupportedproductslist)
  * ReleaseLabel [XmlStringMaxLen256](#xmlstringmaxlen256)
  * RepoUpgradeOnBoot [RepoUpgradeOnBoot](#repoupgradeonboot)
  * ScaleDownBehavior [ScaleDownBehavior](#scaledownbehavior)
  * SecurityConfiguration [XmlString](#xmlstring)
  * ServiceRole [XmlString](#xmlstring)
  * Steps [StepConfigList](#stepconfiglist)
  * SupportedProducts [SupportedProductsList](#supportedproductslist)
  * Tags [TagList](#taglist)
  * VisibleToAllUsers [Boolean](#boolean)

### RunJobFlowOutput
* RunJobFlowOutput `object`:  The result of the <a>RunJobFlow</a> operation. 
  * JobFlowId [XmlStringMaxLen256](#xmlstringmaxlen256)

### ScaleDownBehavior
* ScaleDownBehavior `string` (values: TERMINATE_AT_INSTANCE_HOUR, TERMINATE_AT_TASK_COMPLETION)

### ScalingAction
* ScalingAction `object`: The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.
  * Market [MarketType](#markettype)
  * SimpleScalingPolicyConfiguration **required** [SimpleScalingPolicyConfiguration](#simplescalingpolicyconfiguration)

### ScalingConstraints
* ScalingConstraints `object`: The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or below these limits.
  * MaxCapacity **required** [Integer](#integer)
  * MinCapacity **required** [Integer](#integer)

### ScalingRule
* ScalingRule `object`: A scale-in or scale-out rule that defines scaling activity, including the CloudWatch metric alarm that triggers activity, how EC2 instances are added or removed, and the periodicity of adjustments. The automatic scaling policy for an instance group can comprise one or more automatic scaling rules.
  * Action **required** [ScalingAction](#scalingaction)
  * Description [String](#string)
  * Name **required** [String](#string)
  * Trigger **required** [ScalingTrigger](#scalingtrigger)

### ScalingRuleList
* ScalingRuleList `array`
  * items [ScalingRule](#scalingrule)

### ScalingTrigger
* ScalingTrigger `object`: The conditions that trigger an automatic scaling activity.
  * CloudWatchAlarmDefinition **required** [CloudWatchAlarmDefinition](#cloudwatchalarmdefinition)

### ScriptBootstrapActionConfig
* ScriptBootstrapActionConfig `object`: Configuration of the script to run during a bootstrap action.
  * Args [XmlStringList](#xmlstringlist)
  * Path **required** [XmlString](#xmlstring)

### SecurityConfigurationList
* SecurityConfigurationList `array`
  * items [SecurityConfigurationSummary](#securityconfigurationsummary)

### SecurityConfigurationSummary
* SecurityConfigurationSummary `object`: The creation date and time, and name, of a security configuration.
  * CreationDateTime [Date](#date)
  * Name [XmlString](#xmlstring)

### SecurityGroupsList
* SecurityGroupsList `array`
  * items [XmlStringMaxLen256](#xmlstringmaxlen256)

### SetTerminationProtectionInput
* SetTerminationProtectionInput `object`:  The input argument to the <a>TerminationProtection</a> operation. 
  * JobFlowIds **required** [XmlStringList](#xmlstringlist)
  * TerminationProtected **required** [Boolean](#boolean)

### SetVisibleToAllUsersInput
* SetVisibleToAllUsersInput `object`: The input to the SetVisibleToAllUsers action.
  * JobFlowIds **required** [XmlStringList](#xmlstringlist)
  * VisibleToAllUsers **required** [Boolean](#boolean)

### ShrinkPolicy
* ShrinkPolicy `object`: Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking.
  * DecommissionTimeout [Integer](#integer)
  * InstanceResizePolicy [InstanceResizePolicy](#instanceresizepolicy)

### SimpleScalingPolicyConfiguration
* SimpleScalingPolicyConfiguration `object`: An automatic scaling configuration, which describes how the policy adds or removes instances, the cooldown period, and the number of EC2 instances that will be added each time the CloudWatch metric alarm condition is satisfied.
  * AdjustmentType [AdjustmentType](#adjustmenttype)
  * CoolDown [Integer](#integer)
  * ScalingAdjustment **required** [Integer](#integer)

### SpotProvisioningSpecification
* SpotProvisioningSpecification `object`: <p>The launch specification for Spot instances in the instance fleet, which determines the defined duration and provisioning timeout behavior.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
  * BlockDurationMinutes [WholeNumber](#wholenumber)
  * TimeoutAction **required** [SpotProvisioningTimeoutAction](#spotprovisioningtimeoutaction)
  * TimeoutDurationMinutes **required** [WholeNumber](#wholenumber)

### SpotProvisioningTimeoutAction
* SpotProvisioningTimeoutAction `string` (values: SWITCH_TO_ON_DEMAND, TERMINATE_CLUSTER)

### Statistic
* Statistic `string` (values: SAMPLE_COUNT, AVERAGE, SUM, MINIMUM, MAXIMUM)

### Step
* Step `object`: This represents a step in a cluster.
  * ActionOnFailure [ActionOnFailure](#actiononfailure)
  * Config [HadoopStepConfig](#hadoopstepconfig)
  * Id [StepId](#stepid)
  * Name [String](#string)
  * Status [StepStatus](#stepstatus)

### StepConfig
* StepConfig `object`: Specification of a cluster (job flow) step.
  * ActionOnFailure [ActionOnFailure](#actiononfailure)
  * HadoopJarStep **required** [HadoopJarStepConfig](#hadoopjarstepconfig)
  * Name **required** [XmlStringMaxLen256](#xmlstringmaxlen256)

### StepConfigList
* StepConfigList `array`
  * items [StepConfig](#stepconfig)

### StepDetail
* StepDetail `object`: Combines the execution state and configuration of a step.
  * ExecutionStatusDetail **required** [StepExecutionStatusDetail](#stepexecutionstatusdetail)
  * StepConfig **required** [StepConfig](#stepconfig)

### StepDetailList
* StepDetailList `array`
  * items [StepDetail](#stepdetail)

### StepExecutionState
* StepExecutionState `string` (values: PENDING, RUNNING, CONTINUE, COMPLETED, CANCELLED, FAILED, INTERRUPTED)

### StepExecutionStatusDetail
* StepExecutionStatusDetail `object`: The execution state of a step.
  * CreationDateTime **required** [Date](#date)
  * EndDateTime [Date](#date)
  * LastStateChangeReason [XmlString](#xmlstring)
  * StartDateTime [Date](#date)
  * State **required** [StepExecutionState](#stepexecutionstate)

### StepId
* StepId `string`

### StepIdsList
* StepIdsList `array`
  * items [XmlStringMaxLen256](#xmlstringmaxlen256)

### StepState
* StepState `string` (values: PENDING, CANCEL_PENDING, RUNNING, COMPLETED, CANCELLED, FAILED, INTERRUPTED)

### StepStateChangeReason
* StepStateChangeReason `object`: The details of the step state change reason.
  * Code [StepStateChangeReasonCode](#stepstatechangereasoncode)
  * Message [String](#string)

### StepStateChangeReasonCode
* StepStateChangeReasonCode `string` (values: NONE)

### StepStateList
* StepStateList `array`
  * items [StepState](#stepstate)

### StepStatus
* StepStatus `object`: The execution status details of the cluster step.
  * FailureDetails [FailureDetails](#failuredetails)
  * State [StepState](#stepstate)
  * StateChangeReason [StepStateChangeReason](#stepstatechangereason)
  * Timeline [StepTimeline](#steptimeline)

### StepSummary
* StepSummary `object`: The summary of the cluster step.
  * ActionOnFailure [ActionOnFailure](#actiononfailure)
  * Config [HadoopStepConfig](#hadoopstepconfig)
  * Id [StepId](#stepid)
  * Name [String](#string)
  * Status [StepStatus](#stepstatus)

### StepSummaryList
* StepSummaryList `array`
  * items [StepSummary](#stepsummary)

### StepTimeline
* StepTimeline `object`: The timeline of the cluster step lifecycle.
  * CreationDateTime [Date](#date)
  * EndDateTime [Date](#date)
  * StartDateTime [Date](#date)

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### StringMap
* StringMap `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### SupportedProductConfig
* SupportedProductConfig `object`: The list of supported product configurations which allow user-supplied arguments. EMR accepts these arguments and forwards them to the corresponding installation script as bootstrap action arguments.
  * Args [XmlStringList](#xmlstringlist)
  * Name [XmlStringMaxLen256](#xmlstringmaxlen256)

### SupportedProductsList
* SupportedProductsList `array`
  * items [XmlStringMaxLen256](#xmlstringmaxlen256)

### Tag
* Tag `object`: A key/value pair containing user-defined metadata that you can associate with an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="http://docs.aws.amazon.com/ElasticMapReduce/latest/DeveloperGuide/emr-plan-tags.html">Tagging Amazon EMR Resources</a>. 
  * Key [String](#string)
  * Value [String](#string)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TerminateJobFlowsInput
* TerminateJobFlowsInput `object`:  Input to the <a>TerminateJobFlows</a> operation. 
  * JobFlowIds **required** [XmlStringList](#xmlstringlist)

### Unit
* Unit `string` (values: NONE, SECONDS, MICRO_SECONDS, MILLI_SECONDS, BYTES, KILO_BYTES, MEGA_BYTES, GIGA_BYTES, TERA_BYTES, BITS, KILO_BITS, MEGA_BITS, GIGA_BITS, TERA_BITS, PERCENT, COUNT, BYTES_PER_SECOND, KILO_BYTES_PER_SECOND, MEGA_BYTES_PER_SECOND, GIGA_BYTES_PER_SECOND, TERA_BYTES_PER_SECOND, BITS_PER_SECOND, KILO_BITS_PER_SECOND, MEGA_BITS_PER_SECOND, GIGA_BITS_PER_SECOND, TERA_BITS_PER_SECOND, COUNT_PER_SECOND)

### VolumeSpecification
* VolumeSpecification `object`: EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster.
  * Iops [Integer](#integer)
  * SizeInGB **required** [Integer](#integer)
  * VolumeType **required** [String](#string)

### WholeNumber
* WholeNumber `integer`

### XmlString
* XmlString `string`

### XmlStringList
* XmlStringList `array`
  * items [XmlString](#xmlstring)

### XmlStringMaxLen256
* XmlStringMaxLen256 `string`

### XmlStringMaxLen256List
* XmlStringMaxLen256List `array`
  * items [XmlStringMaxLen256](#xmlstringmaxlen256)


