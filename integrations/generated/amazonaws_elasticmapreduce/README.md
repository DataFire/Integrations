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

.then(data => {
  console.log(data);
});
```

## Description

Amazon EMR is a web service that makes it easier to process large amounts of data efficiently. Amazon EMR uses Hadoop processing combined with several AWS services to do tasks such as web indexing, data mining, log file analysis, machine learning, scientific simulation, and data warehouse management.

## Actions

### AddInstanceFleet



```js
amazonaws_elasticmapreduce.AddInstanceFleet({
  "ClusterId": null,
  "InstanceFleet": null
}, context)
```

#### Input
* input `object`
  * ClusterId **required**
  * InstanceFleet **required**
    * InstanceFleetType **required**
    * InstanceTypeConfigs
      * items [InstanceTypeConfig](#instancetypeconfig)
    * LaunchSpecifications
      * OnDemandSpecification
        * AllocationStrategy **required**
      * SpotSpecification
        * AllocationStrategy
        * BlockDurationMinutes
        * TimeoutAction **required**
        * TimeoutDurationMinutes **required**
    * Name
    * TargetOnDemandCapacity
    * TargetSpotCapacity

#### Output
* output [AddInstanceFleetOutput](#addinstancefleetoutput)

### AddInstanceGroups



```js
amazonaws_elasticmapreduce.AddInstanceGroups({
  "InstanceGroups": null,
  "JobFlowId": null
}, context)
```

#### Input
* input `object`
  * InstanceGroups **required**
    * items [InstanceGroupConfig](#instancegroupconfig)
  * JobFlowId **required**

#### Output
* output [AddInstanceGroupsOutput](#addinstancegroupsoutput)

### AddJobFlowSteps



```js
amazonaws_elasticmapreduce.AddJobFlowSteps({
  "JobFlowId": null,
  "Steps": null
}, context)
```

#### Input
* input `object`
  * JobFlowId **required**
  * Steps **required**
    * items [StepConfig](#stepconfig)

#### Output
* output [AddJobFlowStepsOutput](#addjobflowstepsoutput)

### AddTags



```js
amazonaws_elasticmapreduce.AddTags({
  "ResourceId": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [AddTagsOutput](#addtagsoutput)

### CancelSteps



```js
amazonaws_elasticmapreduce.CancelSteps({
  "ClusterId": null,
  "StepIds": null
}, context)
```

#### Input
* input `object`
  * ClusterId **required**
  * StepCancellationOption
  * StepIds **required**
    * items [XmlStringMaxLen256](#xmlstringmaxlen256)

#### Output
* output [CancelStepsOutput](#cancelstepsoutput)

### CreateSecurityConfiguration



```js
amazonaws_elasticmapreduce.CreateSecurityConfiguration({
  "Name": null,
  "SecurityConfiguration": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * SecurityConfiguration **required**

#### Output
* output [CreateSecurityConfigurationOutput](#createsecurityconfigurationoutput)

### CreateStudio



```js
amazonaws_elasticmapreduce.CreateStudio({
  "Name": null,
  "AuthMode": null,
  "VpcId": null,
  "SubnetIds": null,
  "ServiceRole": null,
  "UserRole": null,
  "WorkspaceSecurityGroupId": null,
  "EngineSecurityGroupId": null
}, context)
```

#### Input
* input `object`
  * AuthMode **required**
  * DefaultS3Location
  * Description
  * EngineSecurityGroupId **required**
  * Name **required**
  * ServiceRole **required**
  * SubnetIds **required**
    * items [String](#string)
  * Tags
    * items [Tag](#tag)
  * UserRole **required**
  * VpcId **required**
  * WorkspaceSecurityGroupId **required**

#### Output
* output [CreateStudioOutput](#createstudiooutput)

### CreateStudioSessionMapping



```js
amazonaws_elasticmapreduce.CreateStudioSessionMapping({
  "StudioId": null,
  "IdentityType": null,
  "SessionPolicyArn": null
}, context)
```

#### Input
* input `object`
  * IdentityId
  * IdentityName
  * IdentityType **required**
  * SessionPolicyArn **required**
  * StudioId **required**

#### Output
*Output schema unknown*

### DeleteSecurityConfiguration



```js
amazonaws_elasticmapreduce.DeleteSecurityConfiguration({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteSecurityConfigurationOutput](#deletesecurityconfigurationoutput)

### DeleteStudio



```js
amazonaws_elasticmapreduce.DeleteStudio({
  "StudioId": null
}, context)
```

#### Input
* input `object`
  * StudioId **required**

#### Output
*Output schema unknown*

### DeleteStudioSessionMapping



```js
amazonaws_elasticmapreduce.DeleteStudioSessionMapping({
  "StudioId": null,
  "IdentityType": null
}, context)
```

#### Input
* input `object`
  * IdentityId
  * IdentityName
  * IdentityType **required**
  * StudioId **required**

#### Output
*Output schema unknown*

### DescribeCluster



```js
amazonaws_elasticmapreduce.DescribeCluster({
  "ClusterId": null
}, context)
```

#### Input
* input `object`
  * ClusterId **required**

#### Output
* output [DescribeClusterOutput](#describeclusteroutput)

### DescribeJobFlows



```js
amazonaws_elasticmapreduce.DescribeJobFlows({}, context)
```

#### Input
* input `object`
  * CreatedAfter
  * CreatedBefore
  * JobFlowIds
    * items [XmlString](#xmlstring)
  * JobFlowStates
    * items [JobFlowExecutionState](#jobflowexecutionstate)

#### Output
* output [DescribeJobFlowsOutput](#describejobflowsoutput)

### DescribeNotebookExecution



```js
amazonaws_elasticmapreduce.DescribeNotebookExecution({
  "NotebookExecutionId": null
}, context)
```

#### Input
* input `object`
  * NotebookExecutionId **required**

#### Output
* output [DescribeNotebookExecutionOutput](#describenotebookexecutionoutput)

### DescribeSecurityConfiguration



```js
amazonaws_elasticmapreduce.DescribeSecurityConfiguration({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DescribeSecurityConfigurationOutput](#describesecurityconfigurationoutput)

### DescribeStep



```js
amazonaws_elasticmapreduce.DescribeStep({
  "ClusterId": null,
  "StepId": null
}, context)
```

#### Input
* input `object`
  * ClusterId **required**
  * StepId **required**

#### Output
* output [DescribeStepOutput](#describestepoutput)

### DescribeStudio



```js
amazonaws_elasticmapreduce.DescribeStudio({
  "StudioId": null
}, context)
```

#### Input
* input `object`
  * StudioId **required**

#### Output
* output [DescribeStudioOutput](#describestudiooutput)

### GetBlockPublicAccessConfiguration



```js
amazonaws_elasticmapreduce.GetBlockPublicAccessConfiguration({}, context)
```

#### Input
* input `object`

#### Output
* output [GetBlockPublicAccessConfigurationOutput](#getblockpublicaccessconfigurationoutput)

### GetManagedScalingPolicy



```js
amazonaws_elasticmapreduce.GetManagedScalingPolicy({
  "ClusterId": null
}, context)
```

#### Input
* input `object`
  * ClusterId **required**

#### Output
* output [GetManagedScalingPolicyOutput](#getmanagedscalingpolicyoutput)

### GetStudioSessionMapping



```js
amazonaws_elasticmapreduce.GetStudioSessionMapping({
  "StudioId": null,
  "IdentityType": null
}, context)
```

#### Input
* input `object`
  * IdentityId
  * IdentityName
  * IdentityType **required**
  * StudioId **required**

#### Output
* output [GetStudioSessionMappingOutput](#getstudiosessionmappingoutput)

### ListBootstrapActions



```js
amazonaws_elasticmapreduce.ListBootstrapActions({
  "ClusterId": null
}, context)
```

#### Input
* input `object`
  * Marker `string`
  * ClusterId **required**
  * Marker

#### Output
* output [ListBootstrapActionsOutput](#listbootstrapactionsoutput)

### ListClusters



```js
amazonaws_elasticmapreduce.ListClusters({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * ClusterStates
    * items [ClusterState](#clusterstate)
  * CreatedAfter
  * CreatedBefore
  * Marker

#### Output
* output [ListClustersOutput](#listclustersoutput)

### ListInstanceFleets



```js
amazonaws_elasticmapreduce.ListInstanceFleets({
  "ClusterId": null
}, context)
```

#### Input
* input `object`
  * Marker `string`
  * ClusterId **required**
  * Marker

#### Output
* output [ListInstanceFleetsOutput](#listinstancefleetsoutput)

### ListInstanceGroups



```js
amazonaws_elasticmapreduce.ListInstanceGroups({
  "ClusterId": null
}, context)
```

#### Input
* input `object`
  * Marker `string`
  * ClusterId **required**
  * Marker

#### Output
* output [ListInstanceGroupsOutput](#listinstancegroupsoutput)

### ListInstances



```js
amazonaws_elasticmapreduce.ListInstances({
  "ClusterId": null
}, context)
```

#### Input
* input `object`
  * Marker `string`
  * ClusterId **required**
  * InstanceFleetId
  * InstanceFleetType
  * InstanceGroupId
  * InstanceGroupTypes
    * items [InstanceGroupType](#instancegrouptype)
  * InstanceStates
    * items [InstanceState](#instancestate)
  * Marker

#### Output
* output [ListInstancesOutput](#listinstancesoutput)

### ListNotebookExecutions



```js
amazonaws_elasticmapreduce.ListNotebookExecutions({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * EditorId
  * From
  * Marker
  * Status
  * To

#### Output
* output [ListNotebookExecutionsOutput](#listnotebookexecutionsoutput)

### ListSecurityConfigurations



```js
amazonaws_elasticmapreduce.ListSecurityConfigurations({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * Marker

#### Output
* output [ListSecurityConfigurationsOutput](#listsecurityconfigurationsoutput)

### ListSteps



```js
amazonaws_elasticmapreduce.ListSteps({
  "ClusterId": null
}, context)
```

#### Input
* input `object`
  * Marker `string`
  * ClusterId **required**
  * Marker
  * StepIds
    * items [XmlString](#xmlstring)
  * StepStates
    * items [StepState](#stepstate)

#### Output
* output [ListStepsOutput](#liststepsoutput)

### ListStudioSessionMappings



```js
amazonaws_elasticmapreduce.ListStudioSessionMappings({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * IdentityType
  * Marker
  * StudioId

#### Output
* output [ListStudioSessionMappingsOutput](#liststudiosessionmappingsoutput)

### ListStudios



```js
amazonaws_elasticmapreduce.ListStudios({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * Marker

#### Output
* output [ListStudiosOutput](#liststudiosoutput)

### ModifyCluster



```js
amazonaws_elasticmapreduce.ModifyCluster({
  "ClusterId": null
}, context)
```

#### Input
* input `object`
  * ClusterId **required**
  * StepConcurrencyLevel

#### Output
* output [ModifyClusterOutput](#modifyclusteroutput)

### ModifyInstanceFleet



```js
amazonaws_elasticmapreduce.ModifyInstanceFleet({
  "ClusterId": null,
  "InstanceFleet": null
}, context)
```

#### Input
* input `object`
  * ClusterId **required**
  * InstanceFleet **required**
    * InstanceFleetId **required**
    * TargetOnDemandCapacity
    * TargetSpotCapacity

#### Output
*Output schema unknown*

### ModifyInstanceGroups



```js
amazonaws_elasticmapreduce.ModifyInstanceGroups({}, context)
```

#### Input
* input `object`
  * ClusterId
  * InstanceGroups
    * items [InstanceGroupModifyConfig](#instancegroupmodifyconfig)

#### Output
*Output schema unknown*

### PutAutoScalingPolicy



```js
amazonaws_elasticmapreduce.PutAutoScalingPolicy({
  "ClusterId": null,
  "InstanceGroupId": null,
  "AutoScalingPolicy": null
}, context)
```

#### Input
* input `object`
  * AutoScalingPolicy **required**
    * Constraints **required**
      * MaxCapacity **required**
      * MinCapacity **required**
    * Rules **required**
      * items [ScalingRule](#scalingrule)
  * ClusterId **required**
  * InstanceGroupId **required**

#### Output
* output [PutAutoScalingPolicyOutput](#putautoscalingpolicyoutput)

### PutBlockPublicAccessConfiguration



```js
amazonaws_elasticmapreduce.PutBlockPublicAccessConfiguration({
  "BlockPublicAccessConfiguration": null
}, context)
```

#### Input
* input `object`
  * BlockPublicAccessConfiguration **required**
    * BlockPublicSecurityGroupRules **required**
    * PermittedPublicSecurityGroupRuleRanges
      * items [PortRange](#portrange)

#### Output
* output [PutBlockPublicAccessConfigurationOutput](#putblockpublicaccessconfigurationoutput)

### PutManagedScalingPolicy



```js
amazonaws_elasticmapreduce.PutManagedScalingPolicy({
  "ClusterId": null,
  "ManagedScalingPolicy": null
}, context)
```

#### Input
* input `object`
  * ClusterId **required**
  * ManagedScalingPolicy **required**
    * ComputeLimits
      * MaximumCapacityUnits **required**
      * MaximumCoreCapacityUnits
      * MaximumOnDemandCapacityUnits
      * MinimumCapacityUnits **required**
      * UnitType **required**

#### Output
* output [PutManagedScalingPolicyOutput](#putmanagedscalingpolicyoutput)

### RemoveAutoScalingPolicy



```js
amazonaws_elasticmapreduce.RemoveAutoScalingPolicy({
  "ClusterId": null,
  "InstanceGroupId": null
}, context)
```

#### Input
* input `object`
  * ClusterId **required**
  * InstanceGroupId **required**

#### Output
* output [RemoveAutoScalingPolicyOutput](#removeautoscalingpolicyoutput)

### RemoveManagedScalingPolicy



```js
amazonaws_elasticmapreduce.RemoveManagedScalingPolicy({
  "ClusterId": null
}, context)
```

#### Input
* input `object`
  * ClusterId **required**

#### Output
* output [RemoveManagedScalingPolicyOutput](#removemanagedscalingpolicyoutput)

### RemoveTags



```js
amazonaws_elasticmapreduce.RemoveTags({
  "ResourceId": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * TagKeys **required**
    * items [String](#string)

#### Output
* output [RemoveTagsOutput](#removetagsoutput)

### RunJobFlow



```js
amazonaws_elasticmapreduce.RunJobFlow({
  "Name": null,
  "Instances": null
}, context)
```

#### Input
* input `object`
  * AdditionalInfo
  * AmiVersion
  * Applications
    * items [Application](#application)
  * AutoScalingRole
  * BootstrapActions
    * items [BootstrapActionConfig](#bootstrapactionconfig)
  * Configurations
    * items [Configuration](#configuration)
  * CustomAmiId
  * EbsRootVolumeSize
  * Instances **required**
    * AdditionalMasterSecurityGroups
      * items [XmlStringMaxLen256](#xmlstringmaxlen256)
    * AdditionalSlaveSecurityGroups
      * items [XmlStringMaxLen256](#xmlstringmaxlen256)
    * Ec2KeyName
    * Ec2SubnetId
    * Ec2SubnetIds
      * items [XmlStringMaxLen256](#xmlstringmaxlen256)
    * EmrManagedMasterSecurityGroup
    * EmrManagedSlaveSecurityGroup
    * HadoopVersion
    * InstanceCount
    * InstanceFleets
      * items [InstanceFleetConfig](#instancefleetconfig)
    * InstanceGroups
      * items [InstanceGroupConfig](#instancegroupconfig)
    * KeepJobFlowAliveWhenNoSteps
    * MasterInstanceType
    * Placement
      * AvailabilityZone
      * AvailabilityZones
        * items [XmlStringMaxLen256](#xmlstringmaxlen256)
    * ServiceAccessSecurityGroup
    * SlaveInstanceType
    * TerminationProtected
  * JobFlowRole
  * KerberosAttributes
    * ADDomainJoinPassword
    * ADDomainJoinUser
    * CrossRealmTrustPrincipalPassword
    * KdcAdminPassword **required**
    * Realm **required**
  * LogEncryptionKmsKeyId
  * LogUri
  * ManagedScalingPolicy
    * ComputeLimits
      * MaximumCapacityUnits **required**
      * MaximumCoreCapacityUnits
      * MaximumOnDemandCapacityUnits
      * MinimumCapacityUnits **required**
      * UnitType **required**
  * Name **required**
  * NewSupportedProducts
    * items [SupportedProductConfig](#supportedproductconfig)
  * PlacementGroupConfigs
    * items [PlacementGroupConfig](#placementgroupconfig)
  * ReleaseLabel
  * RepoUpgradeOnBoot
  * ScaleDownBehavior
  * SecurityConfiguration
  * ServiceRole
  * StepConcurrencyLevel
  * Steps
    * items [StepConfig](#stepconfig)
  * SupportedProducts
    * items [XmlStringMaxLen256](#xmlstringmaxlen256)
  * Tags
    * items [Tag](#tag)
  * VisibleToAllUsers

#### Output
* output [RunJobFlowOutput](#runjobflowoutput)

### SetTerminationProtection



```js
amazonaws_elasticmapreduce.SetTerminationProtection({
  "JobFlowIds": null,
  "TerminationProtected": null
}, context)
```

#### Input
* input `object`
  * JobFlowIds **required**
    * items [XmlString](#xmlstring)
  * TerminationProtected **required**

#### Output
*Output schema unknown*

### SetVisibleToAllUsers



```js
amazonaws_elasticmapreduce.SetVisibleToAllUsers({
  "JobFlowIds": null,
  "VisibleToAllUsers": null
}, context)
```

#### Input
* input `object`
  * JobFlowIds **required**
    * items [XmlString](#xmlstring)
  * VisibleToAllUsers **required**

#### Output
*Output schema unknown*

### StartNotebookExecution



```js
amazonaws_elasticmapreduce.StartNotebookExecution({
  "EditorId": null,
  "RelativePath": null,
  "ExecutionEngine": null,
  "ServiceRole": null
}, context)
```

#### Input
* input `object`
  * EditorId **required**
  * ExecutionEngine **required**
    * Id **required**
    * MasterInstanceSecurityGroupId
    * Type
  * NotebookExecutionName
  * NotebookInstanceSecurityGroupId
  * NotebookParams
  * RelativePath **required**
  * ServiceRole **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [StartNotebookExecutionOutput](#startnotebookexecutionoutput)

### StopNotebookExecution



```js
amazonaws_elasticmapreduce.StopNotebookExecution({
  "NotebookExecutionId": null
}, context)
```

#### Input
* input `object`
  * NotebookExecutionId **required**

#### Output
*Output schema unknown*

### TerminateJobFlows



```js
amazonaws_elasticmapreduce.TerminateJobFlows({
  "JobFlowIds": null
}, context)
```

#### Input
* input `object`
  * JobFlowIds **required**
    * items [XmlString](#xmlstring)

#### Output
*Output schema unknown*

### UpdateStudioSessionMapping



```js
amazonaws_elasticmapreduce.UpdateStudioSessionMapping({
  "StudioId": null,
  "IdentityType": null,
  "SessionPolicyArn": null
}, context)
```

#### Input
* input `object`
  * IdentityId
  * IdentityName
  * IdentityType **required**
  * SessionPolicyArn **required**
  * StudioId **required**

#### Output
*Output schema unknown*



## Definitions

### ActionOnFailure
* ActionOnFailure `string` (values: TERMINATE_JOB_FLOW, TERMINATE_CLUSTER, CANCEL_AND_WAIT, CONTINUE)

### AddInstanceFleetInput
* AddInstanceFleetInput `object`
  * ClusterId **required**
  * InstanceFleet **required**
    * InstanceFleetType **required**
    * InstanceTypeConfigs
      * items [InstanceTypeConfig](#instancetypeconfig)
    * LaunchSpecifications
      * OnDemandSpecification
        * AllocationStrategy **required**
      * SpotSpecification
        * AllocationStrategy
        * BlockDurationMinutes
        * TimeoutAction **required**
        * TimeoutDurationMinutes **required**
    * Name
    * TargetOnDemandCapacity
    * TargetSpotCapacity

### AddInstanceFleetOutput
* AddInstanceFleetOutput `object`
  * ClusterArn
  * ClusterId
  * InstanceFleetId

### AddInstanceGroupsInput
* AddInstanceGroupsInput `object`: Input to an AddInstanceGroups call.
  * InstanceGroups **required**
    * items [InstanceGroupConfig](#instancegroupconfig)
  * JobFlowId **required**

### AddInstanceGroupsOutput
* AddInstanceGroupsOutput `object`: Output from an AddInstanceGroups call.
  * ClusterArn
  * InstanceGroupIds
    * items [XmlStringMaxLen256](#xmlstringmaxlen256)
  * JobFlowId

### AddJobFlowStepsInput
* AddJobFlowStepsInput `object`:  The input argument to the <a>AddJobFlowSteps</a> operation. 
  * JobFlowId **required**
  * Steps **required**
    * items [StepConfig](#stepconfig)

### AddJobFlowStepsOutput
* AddJobFlowStepsOutput `object`:  The output for the <a>AddJobFlowSteps</a> operation. 
  * StepIds
    * items [XmlStringMaxLen256](#xmlstringmaxlen256)

### AddTagsInput
* AddTagsInput `object`: This input identifies a cluster and a list of tags to attach.
  * ResourceId **required**
  * Tags **required**
    * items [Tag](#tag)

### AddTagsOutput
* AddTagsOutput `object`: This output indicates the result of adding tags to a resource.

### AdjustmentType
* AdjustmentType `string` (values: CHANGE_IN_CAPACITY, PERCENT_CHANGE_IN_CAPACITY, EXACT_CAPACITY)

### Application
* Application `object`: <p>With Amazon EMR release version 4.0 and later, the only accepted parameter is the application name. To pass arguments to applications, you use configuration classifications specified using configuration JSON objects. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p> <p>With earlier Amazon EMR releases, the application is any Amazon or third-party software that you can add to the cluster. This structure contains a list of strings that indicates the software to use with the cluster and accepts a user argument list. Amazon EMR accepts and forwards the argument list to the corresponding installation script as bootstrap action argument.</p>
  * AdditionalInfo
  * Args
    * items [String](#string)
  * Name
  * Version

### ApplicationList
* ApplicationList `array`
  * items [Application](#application)

### ArnType
* ArnType `string`

### AuthMode
* AuthMode `string` (values: SSO, IAM)

### AutoScalingPolicy
* AutoScalingPolicy `object`: An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. An automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.
  * Constraints **required**
    * MaxCapacity **required**
    * MinCapacity **required**
  * Rules **required**
    * items [ScalingRule](#scalingrule)

### AutoScalingPolicyDescription
* AutoScalingPolicyDescription `object`: An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.
  * Constraints
    * MaxCapacity **required**
    * MinCapacity **required**
  * Rules
    * items [ScalingRule](#scalingrule)
  * Status
    * State
    * StateChangeReason
      * Code
      * Message

### AutoScalingPolicyState
* AutoScalingPolicyState `string` (values: PENDING, ATTACHING, ATTACHED, DETACHING, DETACHED, FAILED)

### AutoScalingPolicyStateChangeReason
* AutoScalingPolicyStateChangeReason `object`: The reason for an <a>AutoScalingPolicyStatus</a> change.
  * Code
  * Message

### AutoScalingPolicyStateChangeReasonCode
* AutoScalingPolicyStateChangeReasonCode `string` (values: USER_REQUEST, PROVISION_FAILURE, CLEANUP_FAILURE)

### AutoScalingPolicyStatus
* AutoScalingPolicyStatus `object`: The status of an automatic scaling policy. 
  * State
  * StateChangeReason
    * Code
    * Message

### BlockPublicAccessConfiguration
* BlockPublicAccessConfiguration `object`: A configuration for Amazon EMR block public access. When <code>BlockPublicSecurityGroupRules</code> is set to <code>true</code>, Amazon EMR prevents cluster creation if one of the cluster's security groups has a rule that allows inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using <code>PermittedPublicSecurityGroupRuleRanges</code>.
  * BlockPublicSecurityGroupRules **required**
  * PermittedPublicSecurityGroupRuleRanges
    * items [PortRange](#portrange)

### BlockPublicAccessConfigurationMetadata
* BlockPublicAccessConfigurationMetadata `object`: Properties that describe the AWS principal that created the <code>BlockPublicAccessConfiguration</code> using the <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that the configuration was created. Each time a configuration for block public access is updated, Amazon EMR updates this metadata.
  * CreatedByArn **required**
  * CreationDateTime **required**

### Boolean
* Boolean `boolean`

### BooleanObject
* BooleanObject `boolean`

### BootstrapActionConfig
* BootstrapActionConfig `object`: Configuration of a bootstrap action.
  * Name **required**
  * ScriptBootstrapAction **required**
    * Args
      * items [XmlString](#xmlstring)
    * Path **required**

### BootstrapActionConfigList
* BootstrapActionConfigList `array`
  * items [BootstrapActionConfig](#bootstrapactionconfig)

### BootstrapActionDetail
* BootstrapActionDetail `object`: Reports the configuration of a bootstrap action in a cluster (job flow).
  * BootstrapActionConfig
    * Name **required**
    * ScriptBootstrapAction **required**
      * Args
        * items [XmlString](#xmlstring)
      * Path **required**

### BootstrapActionDetailList
* BootstrapActionDetailList `array`
  * items [BootstrapActionDetail](#bootstrapactiondetail)

### CancelStepsInfo
* CancelStepsInfo `object`: Specification of the status of a CancelSteps request. Available only in Amazon EMR version 4.8.0 and later, excluding version 5.0.0.
  * Reason
  * Status
  * StepId

### CancelStepsInfoList
* CancelStepsInfoList `array`
  * items [CancelStepsInfo](#cancelstepsinfo)

### CancelStepsInput
* CancelStepsInput `object`: The input argument to the <a>CancelSteps</a> operation.
  * ClusterId **required**
  * StepCancellationOption
  * StepIds **required**
    * items [XmlStringMaxLen256](#xmlstringmaxlen256)

### CancelStepsOutput
* CancelStepsOutput `object`:  The output for the <a>CancelSteps</a> operation. 
  * CancelStepsInfoList
    * items [CancelStepsInfo](#cancelstepsinfo)

### CancelStepsRequestStatus
* CancelStepsRequestStatus `string` (values: SUBMITTED, FAILED)

### CloudWatchAlarmDefinition
* CloudWatchAlarmDefinition `object`: The definition of a CloudWatch metric alarm, which determines when an automatic scaling activity is triggered. When the defined alarm conditions are satisfied, scaling activity begins.
  * ComparisonOperator **required**
  * Dimensions
    * items [MetricDimension](#metricdimension)
  * EvaluationPeriods
  * MetricName **required**
  * Namespace
  * Period **required**
  * Statistic
  * Threshold **required**
  * Unit

### Cluster
* Cluster `object`: The detailed description of the cluster.
  * Applications
    * items [Application](#application)
  * AutoScalingRole
  * AutoTerminate
  * ClusterArn
  * Configurations
    * items [Configuration](#configuration)
  * CustomAmiId
  * EbsRootVolumeSize
  * Ec2InstanceAttributes
    * AdditionalMasterSecurityGroups
      * items [String](#string)
    * AdditionalSlaveSecurityGroups
      * items [String](#string)
    * Ec2AvailabilityZone
    * Ec2KeyName
    * Ec2SubnetId
    * EmrManagedMasterSecurityGroup
    * EmrManagedSlaveSecurityGroup
    * IamInstanceProfile
    * RequestedEc2AvailabilityZones
      * items [XmlStringMaxLen256](#xmlstringmaxlen256)
    * RequestedEc2SubnetIds
      * items [XmlStringMaxLen256](#xmlstringmaxlen256)
    * ServiceAccessSecurityGroup
  * Id
  * InstanceCollectionType
  * KerberosAttributes
    * ADDomainJoinPassword
    * ADDomainJoinUser
    * CrossRealmTrustPrincipalPassword
    * KdcAdminPassword **required**
    * Realm **required**
  * LogEncryptionKmsKeyId
  * LogUri
  * MasterPublicDnsName
  * Name
  * NormalizedInstanceHours
  * OutpostArn
  * PlacementGroups
    * items [PlacementGroupConfig](#placementgroupconfig)
  * ReleaseLabel
  * RepoUpgradeOnBoot
  * RequestedAmiVersion
  * RunningAmiVersion
  * ScaleDownBehavior
  * SecurityConfiguration
  * ServiceRole
  * Status
    * State
    * StateChangeReason
      * Code
      * Message
    * Timeline
      * CreationDateTime
      * EndDateTime
      * ReadyDateTime
  * StepConcurrencyLevel
  * Tags
    * items [Tag](#tag)
  * TerminationProtected
  * VisibleToAllUsers

### ClusterId
* ClusterId `string`

### ClusterState
* ClusterState `string` (values: STARTING, BOOTSTRAPPING, RUNNING, WAITING, TERMINATING, TERMINATED, TERMINATED_WITH_ERRORS)

### ClusterStateChangeReason
* ClusterStateChangeReason `object`: The reason that the cluster changed to its current state.
  * Code
  * Message

### ClusterStateChangeReasonCode
* ClusterStateChangeReasonCode `string` (values: INTERNAL_ERROR, VALIDATION_ERROR, INSTANCE_FAILURE, INSTANCE_FLEET_TIMEOUT, BOOTSTRAP_FAILURE, USER_REQUEST, STEP_FAILURE, ALL_STEPS_COMPLETED)

### ClusterStateList
* ClusterStateList `array`
  * items [ClusterState](#clusterstate)

### ClusterStatus
* ClusterStatus `object`: The detailed status of the cluster.
  * State
  * StateChangeReason
    * Code
    * Message
  * Timeline
    * CreationDateTime
    * EndDateTime
    * ReadyDateTime

### ClusterSummary
* ClusterSummary `object`: The summary description of the cluster.
  * ClusterArn
  * Id
  * Name
  * NormalizedInstanceHours
  * OutpostArn
  * Status
    * State
    * StateChangeReason
      * Code
      * Message
    * Timeline
      * CreationDateTime
      * EndDateTime
      * ReadyDateTime

### ClusterSummaryList
* ClusterSummaryList `array`
  * items [ClusterSummary](#clustersummary)

### ClusterTimeline
* ClusterTimeline `object`: Represents the timeline of the cluster's lifecycle.
  * CreationDateTime
  * EndDateTime
  * ReadyDateTime

### Command
* Command `object`: An entity describing an executable that runs on a cluster.
  * Args
    * items [String](#string)
  * Name
  * ScriptPath

### CommandList
* CommandList `array`
  * items [Command](#command)

### ComparisonOperator
* ComparisonOperator `string` (values: GREATER_THAN_OR_EQUAL, GREATER_THAN, LESS_THAN, LESS_THAN_OR_EQUAL)

### ComputeLimits
* ComputeLimits `object`:  The EC2 unit limits for a managed scaling policy. The managed scaling activity of a cluster can not be above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration. 
  * MaximumCapacityUnits **required**
  * MaximumCoreCapacityUnits
  * MaximumOnDemandCapacityUnits
  * MinimumCapacityUnits **required**
  * UnitType **required**

### ComputeLimitsUnitType
* ComputeLimitsUnitType `string` (values: InstanceFleetUnits, Instances, VCPU)

### Configuration
* Configuration `object`: <note> <p>Amazon EMR releases 4.x or later.</p> </note> <p>An optional configuration specification to be used when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p>
  * Classification
  * Configurations
    * items [Configuration](#configuration)
  * Properties

### ConfigurationList
* ConfigurationList `array`
  * items [Configuration](#configuration)

### CreateSecurityConfigurationInput
* CreateSecurityConfigurationInput `object`
  * Name **required**
  * SecurityConfiguration **required**

### CreateSecurityConfigurationOutput
* CreateSecurityConfigurationOutput `object`
  * CreationDateTime **required**
  * Name **required**

### CreateStudioInput
* CreateStudioInput `object`
  * AuthMode **required**
  * DefaultS3Location
  * Description
  * EngineSecurityGroupId **required**
  * Name **required**
  * ServiceRole **required**
  * SubnetIds **required**
    * items [String](#string)
  * Tags
    * items [Tag](#tag)
  * UserRole **required**
  * VpcId **required**
  * WorkspaceSecurityGroupId **required**

### CreateStudioOutput
* CreateStudioOutput `object`
  * StudioId
  * Url

### CreateStudioSessionMappingInput
* CreateStudioSessionMappingInput `object`
  * IdentityId
  * IdentityName
  * IdentityType **required**
  * SessionPolicyArn **required**
  * StudioId **required**

### Date
* Date `string`

### DeleteSecurityConfigurationInput
* DeleteSecurityConfigurationInput `object`
  * Name **required**

### DeleteSecurityConfigurationOutput
* DeleteSecurityConfigurationOutput `object`

### DeleteStudioInput
* DeleteStudioInput `object`
  * StudioId **required**

### DeleteStudioSessionMappingInput
* DeleteStudioSessionMappingInput `object`
  * IdentityId
  * IdentityName
  * IdentityType **required**
  * StudioId **required**

### DescribeClusterInput
* DescribeClusterInput `object`: This input determines which cluster to describe.
  * ClusterId **required**

### DescribeClusterOutput
* DescribeClusterOutput `object`: This output contains the description of the cluster.
  * Cluster
    * Applications
      * items [Application](#application)
    * AutoScalingRole
    * AutoTerminate
    * ClusterArn
    * Configurations
      * items [Configuration](#configuration)
    * CustomAmiId
    * EbsRootVolumeSize
    * Ec2InstanceAttributes
      * AdditionalMasterSecurityGroups
        * items [String](#string)
      * AdditionalSlaveSecurityGroups
        * items [String](#string)
      * Ec2AvailabilityZone
      * Ec2KeyName
      * Ec2SubnetId
      * EmrManagedMasterSecurityGroup
      * EmrManagedSlaveSecurityGroup
      * IamInstanceProfile
      * RequestedEc2AvailabilityZones
        * items [XmlStringMaxLen256](#xmlstringmaxlen256)
      * RequestedEc2SubnetIds
        * items [XmlStringMaxLen256](#xmlstringmaxlen256)
      * ServiceAccessSecurityGroup
    * Id
    * InstanceCollectionType
    * KerberosAttributes
      * ADDomainJoinPassword
      * ADDomainJoinUser
      * CrossRealmTrustPrincipalPassword
      * KdcAdminPassword **required**
      * Realm **required**
    * LogEncryptionKmsKeyId
    * LogUri
    * MasterPublicDnsName
    * Name
    * NormalizedInstanceHours
    * OutpostArn
    * PlacementGroups
      * items [PlacementGroupConfig](#placementgroupconfig)
    * ReleaseLabel
    * RepoUpgradeOnBoot
    * RequestedAmiVersion
    * RunningAmiVersion
    * ScaleDownBehavior
    * SecurityConfiguration
    * ServiceRole
    * Status
      * State
      * StateChangeReason
        * Code
        * Message
      * Timeline
        * CreationDateTime
        * EndDateTime
        * ReadyDateTime
    * StepConcurrencyLevel
    * Tags
      * items [Tag](#tag)
    * TerminationProtected
    * VisibleToAllUsers

### DescribeJobFlowsInput
* DescribeJobFlowsInput `object`:  The input for the <a>DescribeJobFlows</a> operation. 
  * CreatedAfter
  * CreatedBefore
  * JobFlowIds
    * items [XmlString](#xmlstring)
  * JobFlowStates
    * items [JobFlowExecutionState](#jobflowexecutionstate)

### DescribeJobFlowsOutput
* DescribeJobFlowsOutput `object`:  The output for the <a>DescribeJobFlows</a> operation. 
  * JobFlows
    * items [JobFlowDetail](#jobflowdetail)

### DescribeNotebookExecutionInput
* DescribeNotebookExecutionInput `object`
  * NotebookExecutionId **required**

### DescribeNotebookExecutionOutput
* DescribeNotebookExecutionOutput `object`
  * NotebookExecution
    * Arn
    * EditorId
    * EndTime
    * ExecutionEngine
      * Id **required**
      * MasterInstanceSecurityGroupId
      * Type
    * LastStateChangeReason
    * NotebookExecutionId
    * NotebookExecutionName
    * NotebookInstanceSecurityGroupId
    * NotebookParams
    * OutputNotebookURI
    * StartTime
    * Status
    * Tags
      * items [Tag](#tag)

### DescribeSecurityConfigurationInput
* DescribeSecurityConfigurationInput `object`
  * Name **required**

### DescribeSecurityConfigurationOutput
* DescribeSecurityConfigurationOutput `object`
  * CreationDateTime
  * Name
  * SecurityConfiguration

### DescribeStepInput
* DescribeStepInput `object`: This input determines which step to describe.
  * ClusterId **required**
  * StepId **required**

### DescribeStepOutput
* DescribeStepOutput `object`: This output contains the description of the cluster step.
  * Step
    * ActionOnFailure
    * Config
      * Args
        * items [String](#string)
      * Jar
      * MainClass
      * Properties
    * Id
    * Name
    * Status
      * FailureDetails
        * LogFile
        * Message
        * Reason
      * State
      * StateChangeReason
        * Code
        * Message
      * Timeline
        * CreationDateTime
        * EndDateTime
        * StartDateTime

### DescribeStudioInput
* DescribeStudioInput `object`
  * StudioId **required**

### DescribeStudioOutput
* DescribeStudioOutput `object`
  * Studio
    * AuthMode
    * CreationTime
    * DefaultS3Location
    * Description
    * EngineSecurityGroupId
    * Name
    * ServiceRole
    * StudioArn
    * StudioId
    * SubnetIds
      * items [String](#string)
    * Tags
      * items [Tag](#tag)
    * Url
    * UserRole
    * VpcId
    * WorkspaceSecurityGroupId

### EC2InstanceIdsList
* EC2InstanceIdsList `array`
  * items [InstanceId](#instanceid)

### EC2InstanceIdsToTerminateList
* EC2InstanceIdsToTerminateList `array`
  * items [InstanceId](#instanceid)

### EbsBlockDevice
* EbsBlockDevice `object`: Configuration of requested EBS block device associated with the instance group.
  * Device
  * VolumeSpecification
    * Iops
    * SizeInGB **required**
    * VolumeType **required**

### EbsBlockDeviceConfig
* EbsBlockDeviceConfig `object`: Configuration of requested EBS block device associated with the instance group with count of volumes that will be associated to every instance.
  * VolumeSpecification **required**
    * Iops
    * SizeInGB **required**
    * VolumeType **required**
  * VolumesPerInstance

### EbsBlockDeviceConfigList
* EbsBlockDeviceConfigList `array`
  * items [EbsBlockDeviceConfig](#ebsblockdeviceconfig)

### EbsBlockDeviceList
* EbsBlockDeviceList `array`
  * items [EbsBlockDevice](#ebsblockdevice)

### EbsConfiguration
* EbsConfiguration `object`: The Amazon EBS configuration of a cluster instance.
  * EbsBlockDeviceConfigs
    * items [EbsBlockDeviceConfig](#ebsblockdeviceconfig)
  * EbsOptimized

### EbsVolume
* EbsVolume `object`: EBS block device that's attached to an EC2 instance.
  * Device
  * VolumeId

### EbsVolumeList
* EbsVolumeList `array`
  * items [EbsVolume](#ebsvolume)

### Ec2InstanceAttributes
* Ec2InstanceAttributes `object`: Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.
  * AdditionalMasterSecurityGroups
    * items [String](#string)
  * AdditionalSlaveSecurityGroups
    * items [String](#string)
  * Ec2AvailabilityZone
  * Ec2KeyName
  * Ec2SubnetId
  * EmrManagedMasterSecurityGroup
  * EmrManagedSlaveSecurityGroup
  * IamInstanceProfile
  * RequestedEc2AvailabilityZones
    * items [XmlStringMaxLen256](#xmlstringmaxlen256)
  * RequestedEc2SubnetIds
    * items [XmlStringMaxLen256](#xmlstringmaxlen256)
  * ServiceAccessSecurityGroup

### ExecutionEngineConfig
* ExecutionEngineConfig `object`: Specifies the execution engine (cluster) to run the notebook and perform the notebook execution, for example, an EMR cluster.
  * Id **required**
  * MasterInstanceSecurityGroupId
  * Type

### ExecutionEngineType
* ExecutionEngineType `string` (values: EMR)

### FailureDetails
* FailureDetails `object`: The details of the step failure. The service attempts to detect the root cause for many common failures.
  * LogFile
  * Message
  * Reason

### GetBlockPublicAccessConfigurationInput
* GetBlockPublicAccessConfigurationInput `object`

### GetBlockPublicAccessConfigurationOutput
* GetBlockPublicAccessConfigurationOutput `object`
  * BlockPublicAccessConfiguration **required**
    * BlockPublicSecurityGroupRules **required**
    * PermittedPublicSecurityGroupRuleRanges
      * items [PortRange](#portrange)
  * BlockPublicAccessConfigurationMetadata **required**
    * CreatedByArn **required**
    * CreationDateTime **required**

### GetManagedScalingPolicyInput
* GetManagedScalingPolicyInput `object`
  * ClusterId **required**

### GetManagedScalingPolicyOutput
* GetManagedScalingPolicyOutput `object`
  * ManagedScalingPolicy
    * ComputeLimits
      * MaximumCapacityUnits **required**
      * MaximumCoreCapacityUnits
      * MaximumOnDemandCapacityUnits
      * MinimumCapacityUnits **required**
      * UnitType **required**

### GetStudioSessionMappingInput
* GetStudioSessionMappingInput `object`
  * IdentityId
  * IdentityName
  * IdentityType **required**
  * StudioId **required**

### GetStudioSessionMappingOutput
* GetStudioSessionMappingOutput `object`
  * SessionMapping
    * CreationTime
    * IdentityId
    * IdentityName
    * IdentityType
    * LastModifiedTime
    * SessionPolicyArn
    * StudioId

### HadoopJarStepConfig
* HadoopJarStepConfig `object`: A job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.
  * Args
    * items [XmlString](#xmlstring)
  * Jar **required**
  * MainClass
  * Properties
    * items [KeyValue](#keyvalue)

### HadoopStepConfig
* HadoopStepConfig `object`: A cluster step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.
  * Args
    * items [String](#string)
  * Jar
  * MainClass
  * Properties

### IdentityType
* IdentityType `string` (values: USER, GROUP)

### Instance
* Instance `object`: Represents an EC2 instance provisioned as part of cluster.
  * EbsVolumes
    * items [EbsVolume](#ebsvolume)
  * Ec2InstanceId
  * Id
  * InstanceFleetId
  * InstanceGroupId
  * InstanceType
  * Market
  * PrivateDnsName
  * PrivateIpAddress
  * PublicDnsName
  * PublicIpAddress
  * Status
    * State
    * StateChangeReason
      * Code
      * Message
    * Timeline
      * CreationDateTime
      * EndDateTime
      * ReadyDateTime

### InstanceCollectionType
* InstanceCollectionType `string` (values: INSTANCE_FLEET, INSTANCE_GROUP)

### InstanceFleet
* InstanceFleet `object`: <p>Describes an instance fleet, which is a group of EC2 instances that host a particular node type (master, core, or task) in an Amazon EMR cluster. Instance fleets can consist of a mix of instance types and On-Demand and Spot Instances, which are provisioned to meet a defined target capacity. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
  * Id
  * InstanceFleetType
  * InstanceTypeSpecifications
    * items [InstanceTypeSpecification](#instancetypespecification)
  * LaunchSpecifications
    * OnDemandSpecification
      * AllocationStrategy **required**
    * SpotSpecification
      * AllocationStrategy
      * BlockDurationMinutes
      * TimeoutAction **required**
      * TimeoutDurationMinutes **required**
  * Name
  * ProvisionedOnDemandCapacity
  * ProvisionedSpotCapacity
  * Status
    * State
    * StateChangeReason
      * Code
      * Message
    * Timeline
      * CreationDateTime
      * EndDateTime
      * ReadyDateTime
  * TargetOnDemandCapacity
  * TargetSpotCapacity

### InstanceFleetConfig
* InstanceFleetConfig `object`: <p>The configuration that defines an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
  * InstanceFleetType **required**
  * InstanceTypeConfigs
    * items [InstanceTypeConfig](#instancetypeconfig)
  * LaunchSpecifications
    * OnDemandSpecification
      * AllocationStrategy **required**
    * SpotSpecification
      * AllocationStrategy
      * BlockDurationMinutes
      * TimeoutAction **required**
      * TimeoutDurationMinutes **required**
  * Name
  * TargetOnDemandCapacity
  * TargetSpotCapacity

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
  * InstanceFleetId **required**
  * TargetOnDemandCapacity
  * TargetSpotCapacity

### InstanceFleetProvisioningSpecifications
* InstanceFleetProvisioningSpecifications `object`: <p>The launch specification for Spot Instances in the fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. On-Demand and Spot Instance allocation strategies are available in Amazon EMR version 5.12.1 and later.</p> </note>
  * OnDemandSpecification
    * AllocationStrategy **required**
  * SpotSpecification
    * AllocationStrategy
    * BlockDurationMinutes
    * TimeoutAction **required**
    * TimeoutDurationMinutes **required**

### InstanceFleetState
* InstanceFleetState `string` (values: PROVISIONING, BOOTSTRAPPING, RUNNING, RESIZING, SUSPENDED, TERMINATING, TERMINATED)

### InstanceFleetStateChangeReason
* InstanceFleetStateChangeReason `object`: <p>Provides status change reason details for the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
  * Code
  * Message

### InstanceFleetStateChangeReasonCode
* InstanceFleetStateChangeReasonCode `string` (values: INTERNAL_ERROR, VALIDATION_ERROR, INSTANCE_FAILURE, CLUSTER_TERMINATED)

### InstanceFleetStatus
* InstanceFleetStatus `object`: <p>The status of the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
  * State
  * StateChangeReason
    * Code
    * Message
  * Timeline
    * CreationDateTime
    * EndDateTime
    * ReadyDateTime

### InstanceFleetTimeline
* InstanceFleetTimeline `object`: <p>Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
  * CreationDateTime
  * EndDateTime
  * ReadyDateTime

### InstanceFleetType
* InstanceFleetType `string` (values: MASTER, CORE, TASK)

### InstanceGroup
* InstanceGroup `object`: This entity represents an instance group, which is a group of instances that have common purpose. For example, CORE instance group is used for HDFS.
  * AutoScalingPolicy
    * Constraints
      * MaxCapacity **required**
      * MinCapacity **required**
    * Rules
      * items [ScalingRule](#scalingrule)
    * Status
      * State
      * StateChangeReason
        * Code
        * Message
  * BidPrice
  * Configurations
    * items [Configuration](#configuration)
  * ConfigurationsVersion
  * EbsBlockDevices
    * items [EbsBlockDevice](#ebsblockdevice)
  * EbsOptimized
  * Id
  * InstanceGroupType
  * InstanceType
  * LastSuccessfullyAppliedConfigurations
    * items [Configuration](#configuration)
  * LastSuccessfullyAppliedConfigurationsVersion
  * Market
  * Name
  * RequestedInstanceCount
  * RunningInstanceCount
  * ShrinkPolicy
    * DecommissionTimeout
    * InstanceResizePolicy
      * InstanceTerminationTimeout
      * InstancesToProtect
        * items [InstanceId](#instanceid)
      * InstancesToTerminate
        * items [InstanceId](#instanceid)
  * Status
    * State
    * StateChangeReason
      * Code
      * Message
    * Timeline
      * CreationDateTime
      * EndDateTime
      * ReadyDateTime

### InstanceGroupConfig
* InstanceGroupConfig `object`: Configuration defining a new instance group.
  * AutoScalingPolicy
    * Constraints **required**
      * MaxCapacity **required**
      * MinCapacity **required**
    * Rules **required**
      * items [ScalingRule](#scalingrule)
  * BidPrice
  * Configurations
    * items [Configuration](#configuration)
  * EbsConfiguration
    * EbsBlockDeviceConfigs
      * items [EbsBlockDeviceConfig](#ebsblockdeviceconfig)
    * EbsOptimized
  * InstanceCount **required**
  * InstanceRole **required**
  * InstanceType **required**
  * Market
  * Name

### InstanceGroupConfigList
* InstanceGroupConfigList `array`
  * items [InstanceGroupConfig](#instancegroupconfig)

### InstanceGroupDetail
* InstanceGroupDetail `object`: Detailed information about an instance group.
  * BidPrice
  * CreationDateTime **required**
  * EndDateTime
  * InstanceGroupId
  * InstanceRequestCount **required**
  * InstanceRole **required**
  * InstanceRunningCount **required**
  * InstanceType **required**
  * LastStateChangeReason
  * Market **required**
  * Name
  * ReadyDateTime
  * StartDateTime
  * State **required**

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
* InstanceGroupModifyConfig `object`: Modify the size or configurations of an instance group.
  * Configurations
    * items [Configuration](#configuration)
  * EC2InstanceIdsToTerminate
    * items [InstanceId](#instanceid)
  * InstanceCount
  * InstanceGroupId **required**
  * ShrinkPolicy
    * DecommissionTimeout
    * InstanceResizePolicy
      * InstanceTerminationTimeout
      * InstancesToProtect
        * items [InstanceId](#instanceid)
      * InstancesToTerminate
        * items [InstanceId](#instanceid)

### InstanceGroupModifyConfigList
* InstanceGroupModifyConfigList `array`
  * items [InstanceGroupModifyConfig](#instancegroupmodifyconfig)

### InstanceGroupState
* InstanceGroupState `string` (values: PROVISIONING, BOOTSTRAPPING, RUNNING, RECONFIGURING, RESIZING, SUSPENDED, TERMINATING, TERMINATED, ARRESTED, SHUTTING_DOWN, ENDED)

### InstanceGroupStateChangeReason
* InstanceGroupStateChangeReason `object`: The status change reason details for the instance group.
  * Code
  * Message

### InstanceGroupStateChangeReasonCode
* InstanceGroupStateChangeReasonCode `string` (values: INTERNAL_ERROR, VALIDATION_ERROR, INSTANCE_FAILURE, CLUSTER_TERMINATED)

### InstanceGroupStatus
* InstanceGroupStatus `object`: The details of the instance group status.
  * State
  * StateChangeReason
    * Code
    * Message
  * Timeline
    * CreationDateTime
    * EndDateTime
    * ReadyDateTime

### InstanceGroupTimeline
* InstanceGroupTimeline `object`: The timeline of the instance group lifecycle.
  * CreationDateTime
  * EndDateTime
  * ReadyDateTime

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
  * InstanceTerminationTimeout
  * InstancesToProtect
    * items [InstanceId](#instanceid)
  * InstancesToTerminate
    * items [InstanceId](#instanceid)

### InstanceRoleType
* InstanceRoleType `string` (values: MASTER, CORE, TASK)

### InstanceState
* InstanceState `string` (values: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING, TERMINATED)

### InstanceStateChangeReason
* InstanceStateChangeReason `object`: The details of the status change reason for the instance.
  * Code
  * Message

### InstanceStateChangeReasonCode
* InstanceStateChangeReasonCode `string` (values: INTERNAL_ERROR, VALIDATION_ERROR, INSTANCE_FAILURE, BOOTSTRAP_FAILURE, CLUSTER_TERMINATED)

### InstanceStateList
* InstanceStateList `array`
  * items [InstanceState](#instancestate)

### InstanceStatus
* InstanceStatus `object`: The instance status details.
  * State
  * StateChangeReason
    * Code
    * Message
  * Timeline
    * CreationDateTime
    * EndDateTime
    * ReadyDateTime

### InstanceTimeline
* InstanceTimeline `object`: The timeline of the instance lifecycle.
  * CreationDateTime
  * EndDateTime
  * ReadyDateTime

### InstanceType
* InstanceType `string`

### InstanceTypeConfig
* InstanceTypeConfig `object`: <p>An instance type configuration for each instance type in an instance fleet, which determines the EC2 instances Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities. There can be a maximum of five instance type configurations in a fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
  * BidPrice
  * BidPriceAsPercentageOfOnDemandPrice
  * Configurations
    * items [Configuration](#configuration)
  * EbsConfiguration
    * EbsBlockDeviceConfigs
      * items [EbsBlockDeviceConfig](#ebsblockdeviceconfig)
    * EbsOptimized
  * InstanceType **required**
  * WeightedCapacity

### InstanceTypeConfigList
* InstanceTypeConfigList `array`
  * items [InstanceTypeConfig](#instancetypeconfig)

### InstanceTypeSpecification
* InstanceTypeSpecification `object`: <p>The configuration specification for each instance type in an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
  * BidPrice
  * BidPriceAsPercentageOfOnDemandPrice
  * Configurations
    * items [Configuration](#configuration)
  * EbsBlockDevices
    * items [EbsBlockDevice](#ebsblockdevice)
  * EbsOptimized
  * InstanceType
  * WeightedCapacity

### InstanceTypeSpecificationList
* InstanceTypeSpecificationList `array`
  * items [InstanceTypeSpecification](#instancetypespecification)

### Integer
* Integer `integer`

### InternalServerError


### InternalServerException


### InvalidRequestException


### JobFlowDetail
* JobFlowDetail `object`: A description of a cluster (job flow).
  * AmiVersion
  * AutoScalingRole
  * BootstrapActions
    * items [BootstrapActionDetail](#bootstrapactiondetail)
  * ExecutionStatusDetail **required**
    * CreationDateTime **required**
    * EndDateTime
    * LastStateChangeReason
    * ReadyDateTime
    * StartDateTime
    * State **required**
  * Instances **required**
    * Ec2KeyName
    * Ec2SubnetId
    * HadoopVersion
    * InstanceCount **required**
    * InstanceGroups
      * items [InstanceGroupDetail](#instancegroupdetail)
    * KeepJobFlowAliveWhenNoSteps
    * MasterInstanceId
    * MasterInstanceType **required**
    * MasterPublicDnsName
    * NormalizedInstanceHours
    * Placement
      * AvailabilityZone
      * AvailabilityZones
        * items [XmlStringMaxLen256](#xmlstringmaxlen256)
    * SlaveInstanceType **required**
    * TerminationProtected
  * JobFlowId **required**
  * JobFlowRole
  * LogEncryptionKmsKeyId
  * LogUri
  * Name **required**
  * ScaleDownBehavior
  * ServiceRole
  * Steps
    * items [StepDetail](#stepdetail)
  * SupportedProducts
    * items [XmlStringMaxLen256](#xmlstringmaxlen256)
  * VisibleToAllUsers

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
  * CreationDateTime **required**
  * EndDateTime
  * LastStateChangeReason
  * ReadyDateTime
  * StartDateTime
  * State **required**

### JobFlowInstancesConfig
* JobFlowInstancesConfig `object`: A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration.
  * AdditionalMasterSecurityGroups
    * items [XmlStringMaxLen256](#xmlstringmaxlen256)
  * AdditionalSlaveSecurityGroups
    * items [XmlStringMaxLen256](#xmlstringmaxlen256)
  * Ec2KeyName
  * Ec2SubnetId
  * Ec2SubnetIds
    * items [XmlStringMaxLen256](#xmlstringmaxlen256)
  * EmrManagedMasterSecurityGroup
  * EmrManagedSlaveSecurityGroup
  * HadoopVersion
  * InstanceCount
  * InstanceFleets
    * items [InstanceFleetConfig](#instancefleetconfig)
  * InstanceGroups
    * items [InstanceGroupConfig](#instancegroupconfig)
  * KeepJobFlowAliveWhenNoSteps
  * MasterInstanceType
  * Placement
    * AvailabilityZone
    * AvailabilityZones
      * items [XmlStringMaxLen256](#xmlstringmaxlen256)
  * ServiceAccessSecurityGroup
  * SlaveInstanceType
  * TerminationProtected

### JobFlowInstancesDetail
* JobFlowInstancesDetail `object`: Specify the type of Amazon EC2 instances that the cluster (job flow) runs on.
  * Ec2KeyName
  * Ec2SubnetId
  * HadoopVersion
  * InstanceCount **required**
  * InstanceGroups
    * items [InstanceGroupDetail](#instancegroupdetail)
  * KeepJobFlowAliveWhenNoSteps
  * MasterInstanceId
  * MasterInstanceType **required**
  * MasterPublicDnsName
  * NormalizedInstanceHours
  * Placement
    * AvailabilityZone
    * AvailabilityZones
      * items [XmlStringMaxLen256](#xmlstringmaxlen256)
  * SlaveInstanceType **required**
  * TerminationProtected

### KerberosAttributes
* KerberosAttributes `object`: Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>Amazon EMR Management Guide</i>.
  * ADDomainJoinPassword
  * ADDomainJoinUser
  * CrossRealmTrustPrincipalPassword
  * KdcAdminPassword **required**
  * Realm **required**

### KeyValue
* KeyValue `object`: A key-value pair.
  * Key
  * Value

### KeyValueList
* KeyValueList `array`
  * items [KeyValue](#keyvalue)

### ListBootstrapActionsInput
* ListBootstrapActionsInput `object`: This input determines which bootstrap actions to retrieve.
  * ClusterId **required**
  * Marker

### ListBootstrapActionsOutput
* ListBootstrapActionsOutput `object`: This output contains the bootstrap actions detail.
  * BootstrapActions
    * items [Command](#command)
  * Marker

### ListClustersInput
* ListClustersInput `object`: This input determines how the ListClusters action filters the list of clusters that it returns.
  * ClusterStates
    * items [ClusterState](#clusterstate)
  * CreatedAfter
  * CreatedBefore
  * Marker

### ListClustersOutput
* ListClustersOutput `object`: This contains a ClusterSummaryList with the cluster details; for example, the cluster IDs, names, and status.
  * Clusters
    * items [ClusterSummary](#clustersummary)
  * Marker

### ListInstanceFleetsInput
* ListInstanceFleetsInput `object`
  * ClusterId **required**
  * Marker

### ListInstanceFleetsOutput
* ListInstanceFleetsOutput `object`
  * InstanceFleets
    * items [InstanceFleet](#instancefleet)
  * Marker

### ListInstanceGroupsInput
* ListInstanceGroupsInput `object`: This input determines which instance groups to retrieve.
  * ClusterId **required**
  * Marker

### ListInstanceGroupsOutput
* ListInstanceGroupsOutput `object`: This input determines which instance groups to retrieve.
  * InstanceGroups
    * items [InstanceGroup](#instancegroup)
  * Marker

### ListInstancesInput
* ListInstancesInput `object`: This input determines which instances to list.
  * ClusterId **required**
  * InstanceFleetId
  * InstanceFleetType
  * InstanceGroupId
  * InstanceGroupTypes
    * items [InstanceGroupType](#instancegrouptype)
  * InstanceStates
    * items [InstanceState](#instancestate)
  * Marker

### ListInstancesOutput
* ListInstancesOutput `object`: This output contains the list of instances.
  * Instances
    * items [Instance](#instance)
  * Marker

### ListNotebookExecutionsInput
* ListNotebookExecutionsInput `object`
  * EditorId
  * From
  * Marker
  * Status
  * To

### ListNotebookExecutionsOutput
* ListNotebookExecutionsOutput `object`
  * Marker
  * NotebookExecutions
    * items [NotebookExecutionSummary](#notebookexecutionsummary)

### ListSecurityConfigurationsInput
* ListSecurityConfigurationsInput `object`
  * Marker

### ListSecurityConfigurationsOutput
* ListSecurityConfigurationsOutput `object`
  * Marker
  * SecurityConfigurations
    * items [SecurityConfigurationSummary](#securityconfigurationsummary)

### ListStepsInput
* ListStepsInput `object`: This input determines which steps to list.
  * ClusterId **required**
  * Marker
  * StepIds
    * items [XmlString](#xmlstring)
  * StepStates
    * items [StepState](#stepstate)

### ListStepsOutput
* ListStepsOutput `object`: This output contains the list of steps returned in reverse order. This means that the last step is the first element in the list.
  * Marker
  * Steps
    * items [StepSummary](#stepsummary)

### ListStudioSessionMappingsInput
* ListStudioSessionMappingsInput `object`
  * IdentityType
  * Marker
  * StudioId

### ListStudioSessionMappingsOutput
* ListStudioSessionMappingsOutput `object`
  * Marker
  * SessionMappings
    * items [SessionMappingSummary](#sessionmappingsummary)

### ListStudiosInput
* ListStudiosInput `object`
  * Marker

### ListStudiosOutput
* ListStudiosOutput `object`
  * Marker
  * Studios
    * items [StudioSummary](#studiosummary)

### Long
* Long `integer`

### ManagedScalingPolicy
* ManagedScalingPolicy `object`:  Managed scaling policy for an Amazon EMR cluster. The policy specifies the limits for resources that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration. 
  * ComputeLimits
    * MaximumCapacityUnits **required**
    * MaximumCoreCapacityUnits
    * MaximumOnDemandCapacityUnits
    * MinimumCapacityUnits **required**
    * UnitType **required**

### Marker
* Marker `string`

### MarketType
* MarketType `string` (values: ON_DEMAND, SPOT)

### MetricDimension
* MetricDimension `object`: A CloudWatch dimension, which is specified using a <code>Key</code> (known as a <code>Name</code> in CloudWatch), <code>Value</code> pair. By default, Amazon EMR uses one dimension whose <code>Key</code> is <code>JobFlowID</code> and <code>Value</code> is a variable representing the cluster ID, which is <code>${emr.clusterId}</code>. This enables the rule to bootstrap when the cluster ID becomes available.
  * Key
  * Value

### MetricDimensionList
* MetricDimensionList `array`
  * items [MetricDimension](#metricdimension)

### ModifyClusterInput
* ModifyClusterInput `object`
  * ClusterId **required**
  * StepConcurrencyLevel

### ModifyClusterOutput
* ModifyClusterOutput `object`
  * StepConcurrencyLevel

### ModifyInstanceFleetInput
* ModifyInstanceFleetInput `object`
  * ClusterId **required**
  * InstanceFleet **required**
    * InstanceFleetId **required**
    * TargetOnDemandCapacity
    * TargetSpotCapacity

### ModifyInstanceGroupsInput
* ModifyInstanceGroupsInput `object`: Change the size of some instance groups.
  * ClusterId
  * InstanceGroups
    * items [InstanceGroupModifyConfig](#instancegroupmodifyconfig)

### NewSupportedProductsList
* NewSupportedProductsList `array`
  * items [SupportedProductConfig](#supportedproductconfig)

### NonNegativeDouble
* NonNegativeDouble `number`

### NotebookExecution
* NotebookExecution `object`: A notebook execution. An execution is a specific instance that an EMR Notebook is run using the <code>StartNotebookExecution</code> action.
  * Arn
  * EditorId
  * EndTime
  * ExecutionEngine
    * Id **required**
    * MasterInstanceSecurityGroupId
    * Type
  * LastStateChangeReason
  * NotebookExecutionId
  * NotebookExecutionName
  * NotebookInstanceSecurityGroupId
  * NotebookParams
  * OutputNotebookURI
  * StartTime
  * Status
  * Tags
    * items [Tag](#tag)

### NotebookExecutionStatus
* NotebookExecutionStatus `string` (values: START_PENDING, STARTING, RUNNING, FINISHING, FINISHED, FAILING, FAILED, STOP_PENDING, STOPPING, STOPPED)

### NotebookExecutionSummary
* NotebookExecutionSummary `object`: <p/>
  * EditorId
  * EndTime
  * NotebookExecutionId
  * NotebookExecutionName
  * StartTime
  * Status

### NotebookExecutionSummaryList
* NotebookExecutionSummaryList `array`
  * items [NotebookExecutionSummary](#notebookexecutionsummary)

### OnDemandProvisioningAllocationStrategy
* OnDemandProvisioningAllocationStrategy `string` (values: lowest-price)

### OnDemandProvisioningSpecification
* OnDemandProvisioningSpecification `object`: <p> The launch specification for On-Demand Instances in the instance fleet, which determines the allocation strategy. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. On-Demand Instances allocation strategy is available in Amazon EMR version 5.12.1 and later.</p> </note>
  * AllocationStrategy **required**

### OptionalArnType
* OptionalArnType `string`

### PlacementGroupConfig
* PlacementGroupConfig `object`: <p>Placement group configuration for an Amazon EMR cluster. The configuration specifies the placement strategy that can be applied to instance roles during cluster creation.</p> <p>To use this configuration, consider attaching managed policy AmazonElasticMapReducePlacementGroupPolicy to the EMR role.</p>
  * InstanceRole **required**
  * PlacementStrategy

### PlacementGroupConfigList
* PlacementGroupConfigList `array`
  * items [PlacementGroupConfig](#placementgroupconfig)

### PlacementGroupStrategy
* PlacementGroupStrategy `string` (values: SPREAD, PARTITION, CLUSTER, NONE)

### PlacementType
* PlacementType `object`: The Amazon EC2 Availability Zone configuration of the cluster (job flow).
  * AvailabilityZone
  * AvailabilityZones
    * items [XmlStringMaxLen256](#xmlstringmaxlen256)

### Port
* Port `integer`

### PortRange
* PortRange `object`: A list of port ranges that are permitted to allow inbound traffic from all public IP addresses. To specify a single port, use the same value for <code>MinRange</code> and <code>MaxRange</code>.
  * MaxRange
  * MinRange **required**

### PortRanges
* PortRanges `array`
  * items [PortRange](#portrange)

### PutAutoScalingPolicyInput
* PutAutoScalingPolicyInput `object`
  * AutoScalingPolicy **required**
    * Constraints **required**
      * MaxCapacity **required**
      * MinCapacity **required**
    * Rules **required**
      * items [ScalingRule](#scalingrule)
  * ClusterId **required**
  * InstanceGroupId **required**

### PutAutoScalingPolicyOutput
* PutAutoScalingPolicyOutput `object`
  * AutoScalingPolicy
    * Constraints
      * MaxCapacity **required**
      * MinCapacity **required**
    * Rules
      * items [ScalingRule](#scalingrule)
    * Status
      * State
      * StateChangeReason
        * Code
        * Message
  * ClusterArn
  * ClusterId
  * InstanceGroupId

### PutBlockPublicAccessConfigurationInput
* PutBlockPublicAccessConfigurationInput `object`
  * BlockPublicAccessConfiguration **required**
    * BlockPublicSecurityGroupRules **required**
    * PermittedPublicSecurityGroupRuleRanges
      * items [PortRange](#portrange)

### PutBlockPublicAccessConfigurationOutput
* PutBlockPublicAccessConfigurationOutput `object`

### PutManagedScalingPolicyInput
* PutManagedScalingPolicyInput `object`
  * ClusterId **required**
  * ManagedScalingPolicy **required**
    * ComputeLimits
      * MaximumCapacityUnits **required**
      * MaximumCoreCapacityUnits
      * MaximumOnDemandCapacityUnits
      * MinimumCapacityUnits **required**
      * UnitType **required**

### PutManagedScalingPolicyOutput
* PutManagedScalingPolicyOutput `object`

### RemoveAutoScalingPolicyInput
* RemoveAutoScalingPolicyInput `object`
  * ClusterId **required**
  * InstanceGroupId **required**

### RemoveAutoScalingPolicyOutput
* RemoveAutoScalingPolicyOutput `object`

### RemoveManagedScalingPolicyInput
* RemoveManagedScalingPolicyInput `object`
  * ClusterId **required**

### RemoveManagedScalingPolicyOutput
* RemoveManagedScalingPolicyOutput `object`

### RemoveTagsInput
* RemoveTagsInput `object`: This input identifies a cluster and a list of tags to remove.
  * ResourceId **required**
  * TagKeys **required**
    * items [String](#string)

### RemoveTagsOutput
* RemoveTagsOutput `object`: This output indicates the result of removing tags from a resource.

### RepoUpgradeOnBoot
* RepoUpgradeOnBoot `string` (values: SECURITY, NONE)

### ResourceId
* ResourceId `string`

### RunJobFlowInput
* RunJobFlowInput `object`:  Input to the <a>RunJobFlow</a> operation. 
  * AdditionalInfo
  * AmiVersion
  * Applications
    * items [Application](#application)
  * AutoScalingRole
  * BootstrapActions
    * items [BootstrapActionConfig](#bootstrapactionconfig)
  * Configurations
    * items [Configuration](#configuration)
  * CustomAmiId
  * EbsRootVolumeSize
  * Instances **required**
    * AdditionalMasterSecurityGroups
      * items [XmlStringMaxLen256](#xmlstringmaxlen256)
    * AdditionalSlaveSecurityGroups
      * items [XmlStringMaxLen256](#xmlstringmaxlen256)
    * Ec2KeyName
    * Ec2SubnetId
    * Ec2SubnetIds
      * items [XmlStringMaxLen256](#xmlstringmaxlen256)
    * EmrManagedMasterSecurityGroup
    * EmrManagedSlaveSecurityGroup
    * HadoopVersion
    * InstanceCount
    * InstanceFleets
      * items [InstanceFleetConfig](#instancefleetconfig)
    * InstanceGroups
      * items [InstanceGroupConfig](#instancegroupconfig)
    * KeepJobFlowAliveWhenNoSteps
    * MasterInstanceType
    * Placement
      * AvailabilityZone
      * AvailabilityZones
        * items [XmlStringMaxLen256](#xmlstringmaxlen256)
    * ServiceAccessSecurityGroup
    * SlaveInstanceType
    * TerminationProtected
  * JobFlowRole
  * KerberosAttributes
    * ADDomainJoinPassword
    * ADDomainJoinUser
    * CrossRealmTrustPrincipalPassword
    * KdcAdminPassword **required**
    * Realm **required**
  * LogEncryptionKmsKeyId
  * LogUri
  * ManagedScalingPolicy
    * ComputeLimits
      * MaximumCapacityUnits **required**
      * MaximumCoreCapacityUnits
      * MaximumOnDemandCapacityUnits
      * MinimumCapacityUnits **required**
      * UnitType **required**
  * Name **required**
  * NewSupportedProducts
    * items [SupportedProductConfig](#supportedproductconfig)
  * PlacementGroupConfigs
    * items [PlacementGroupConfig](#placementgroupconfig)
  * ReleaseLabel
  * RepoUpgradeOnBoot
  * ScaleDownBehavior
  * SecurityConfiguration
  * ServiceRole
  * StepConcurrencyLevel
  * Steps
    * items [StepConfig](#stepconfig)
  * SupportedProducts
    * items [XmlStringMaxLen256](#xmlstringmaxlen256)
  * Tags
    * items [Tag](#tag)
  * VisibleToAllUsers

### RunJobFlowOutput
* RunJobFlowOutput `object`:  The result of the <a>RunJobFlow</a> operation. 
  * ClusterArn
  * JobFlowId

### ScaleDownBehavior
* ScaleDownBehavior `string` (values: TERMINATE_AT_INSTANCE_HOUR, TERMINATE_AT_TASK_COMPLETION)

### ScalingAction
* ScalingAction `object`: The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.
  * Market
  * SimpleScalingPolicyConfiguration **required**
    * AdjustmentType
    * CoolDown
    * ScalingAdjustment **required**

### ScalingConstraints
* ScalingConstraints `object`: The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or below these limits.
  * MaxCapacity **required**
  * MinCapacity **required**

### ScalingRule
* ScalingRule `object`: A scale-in or scale-out rule that defines scaling activity, including the CloudWatch metric alarm that triggers activity, how EC2 instances are added or removed, and the periodicity of adjustments. The automatic scaling policy for an instance group can comprise one or more automatic scaling rules.
  * Action **required**
    * Market
    * SimpleScalingPolicyConfiguration **required**
      * AdjustmentType
      * CoolDown
      * ScalingAdjustment **required**
  * Description
  * Name **required**
  * Trigger **required**
    * CloudWatchAlarmDefinition **required**
      * ComparisonOperator **required**
      * Dimensions
        * items [MetricDimension](#metricdimension)
      * EvaluationPeriods
      * MetricName **required**
      * Namespace
      * Period **required**
      * Statistic
      * Threshold **required**
      * Unit

### ScalingRuleList
* ScalingRuleList `array`
  * items [ScalingRule](#scalingrule)

### ScalingTrigger
* ScalingTrigger `object`: The conditions that trigger an automatic scaling activity.
  * CloudWatchAlarmDefinition **required**
    * ComparisonOperator **required**
    * Dimensions
      * items [MetricDimension](#metricdimension)
    * EvaluationPeriods
    * MetricName **required**
    * Namespace
    * Period **required**
    * Statistic
    * Threshold **required**
    * Unit

### ScriptBootstrapActionConfig
* ScriptBootstrapActionConfig `object`: Configuration of the script to run during a bootstrap action.
  * Args
    * items [XmlString](#xmlstring)
  * Path **required**

### SecurityConfigurationList
* SecurityConfigurationList `array`
  * items [SecurityConfigurationSummary](#securityconfigurationsummary)

### SecurityConfigurationSummary
* SecurityConfigurationSummary `object`: The creation date and time, and name, of a security configuration.
  * CreationDateTime
  * Name

### SecurityGroupsList
* SecurityGroupsList `array`
  * items [XmlStringMaxLen256](#xmlstringmaxlen256)

### SessionMappingDetail
* SessionMappingDetail `object`: Details for an Amazon EMR Studio session mapping including creation time, user or group ID, Studio ID, and so on.
  * CreationTime
  * IdentityId
  * IdentityName
  * IdentityType
  * LastModifiedTime
  * SessionPolicyArn
  * StudioId

### SessionMappingSummary
* SessionMappingSummary `object`: Details for an Amazon EMR Studio session mapping. The details do not include the time the session mapping was last modified.
  * CreationTime
  * IdentityId
  * IdentityName
  * IdentityType
  * SessionPolicyArn
  * StudioId

### SessionMappingSummaryList
* SessionMappingSummaryList `array`
  * items [SessionMappingSummary](#sessionmappingsummary)

### SetTerminationProtectionInput
* SetTerminationProtectionInput `object`:  The input argument to the <a>TerminationProtection</a> operation. 
  * JobFlowIds **required**
    * items [XmlString](#xmlstring)
  * TerminationProtected **required**

### SetVisibleToAllUsersInput
* SetVisibleToAllUsersInput `object`: The input to the SetVisibleToAllUsers action.
  * JobFlowIds **required**
    * items [XmlString](#xmlstring)
  * VisibleToAllUsers **required**

### ShrinkPolicy
* ShrinkPolicy `object`: Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking.
  * DecommissionTimeout
  * InstanceResizePolicy
    * InstanceTerminationTimeout
    * InstancesToProtect
      * items [InstanceId](#instanceid)
    * InstancesToTerminate
      * items [InstanceId](#instanceid)

### SimpleScalingPolicyConfiguration
* SimpleScalingPolicyConfiguration `object`: An automatic scaling configuration, which describes how the policy adds or removes instances, the cooldown period, and the number of EC2 instances that will be added each time the CloudWatch metric alarm condition is satisfied.
  * AdjustmentType
  * CoolDown
  * ScalingAdjustment **required**

### SpotProvisioningAllocationStrategy
* SpotProvisioningAllocationStrategy `string` (values: capacity-optimized)

### SpotProvisioningSpecification
* SpotProvisioningSpecification `object`: <p>The launch specification for Spot Instances in the instance fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. Spot Instance allocation strategy is available in Amazon EMR version 5.12.1 and later.</p> </note>
  * AllocationStrategy
  * BlockDurationMinutes
  * TimeoutAction **required**
  * TimeoutDurationMinutes **required**

### SpotProvisioningTimeoutAction
* SpotProvisioningTimeoutAction `string` (values: SWITCH_TO_ON_DEMAND, TERMINATE_CLUSTER)

### StartNotebookExecutionInput
* StartNotebookExecutionInput `object`
  * EditorId **required**
  * ExecutionEngine **required**
    * Id **required**
    * MasterInstanceSecurityGroupId
    * Type
  * NotebookExecutionName
  * NotebookInstanceSecurityGroupId
  * NotebookParams
  * RelativePath **required**
  * ServiceRole **required**
  * Tags
    * items [Tag](#tag)

### StartNotebookExecutionOutput
* StartNotebookExecutionOutput `object`
  * NotebookExecutionId

### Statistic
* Statistic `string` (values: SAMPLE_COUNT, AVERAGE, SUM, MINIMUM, MAXIMUM)

### Step
* Step `object`: This represents a step in a cluster.
  * ActionOnFailure
  * Config
    * Args
      * items [String](#string)
    * Jar
    * MainClass
    * Properties
  * Id
  * Name
  * Status
    * FailureDetails
      * LogFile
      * Message
      * Reason
    * State
    * StateChangeReason
      * Code
      * Message
    * Timeline
      * CreationDateTime
      * EndDateTime
      * StartDateTime

### StepCancellationOption
* StepCancellationOption `string` (values: SEND_INTERRUPT, TERMINATE_PROCESS)

### StepConfig
* StepConfig `object`: Specification of a cluster (job flow) step.
  * ActionOnFailure
  * HadoopJarStep **required**
    * Args
      * items [XmlString](#xmlstring)
    * Jar **required**
    * MainClass
    * Properties
      * items [KeyValue](#keyvalue)
  * Name **required**

### StepConfigList
* StepConfigList `array`
  * items [StepConfig](#stepconfig)

### StepDetail
* StepDetail `object`: Combines the execution state and configuration of a step.
  * ExecutionStatusDetail **required**
    * CreationDateTime **required**
    * EndDateTime
    * LastStateChangeReason
    * StartDateTime
    * State **required**
  * StepConfig **required**
    * ActionOnFailure
    * HadoopJarStep **required**
      * Args
        * items [XmlString](#xmlstring)
      * Jar **required**
      * MainClass
      * Properties
        * items [KeyValue](#keyvalue)
    * Name **required**

### StepDetailList
* StepDetailList `array`
  * items [StepDetail](#stepdetail)

### StepExecutionState
* StepExecutionState `string` (values: PENDING, RUNNING, CONTINUE, COMPLETED, CANCELLED, FAILED, INTERRUPTED)

### StepExecutionStatusDetail
* StepExecutionStatusDetail `object`: The execution state of a step.
  * CreationDateTime **required**
  * EndDateTime
  * LastStateChangeReason
  * StartDateTime
  * State **required**

### StepId
* StepId `string`

### StepIdsList
* StepIdsList `array`
  * items [XmlStringMaxLen256](#xmlstringmaxlen256)

### StepState
* StepState `string` (values: PENDING, CANCEL_PENDING, RUNNING, COMPLETED, CANCELLED, FAILED, INTERRUPTED)

### StepStateChangeReason
* StepStateChangeReason `object`: The details of the step state change reason.
  * Code
  * Message

### StepStateChangeReasonCode
* StepStateChangeReasonCode `string` (values: NONE)

### StepStateList
* StepStateList `array`
  * items [StepState](#stepstate)

### StepStatus
* StepStatus `object`: The execution status details of the cluster step.
  * FailureDetails
    * LogFile
    * Message
    * Reason
  * State
  * StateChangeReason
    * Code
    * Message
  * Timeline
    * CreationDateTime
    * EndDateTime
    * StartDateTime

### StepSummary
* StepSummary `object`: The summary of the cluster step.
  * ActionOnFailure
  * Config
    * Args
      * items [String](#string)
    * Jar
    * MainClass
    * Properties
  * Id
  * Name
  * Status
    * FailureDetails
      * LogFile
      * Message
      * Reason
    * State
    * StateChangeReason
      * Code
      * Message
    * Timeline
      * CreationDateTime
      * EndDateTime
      * StartDateTime

### StepSummaryList
* StepSummaryList `array`
  * items [StepSummary](#stepsummary)

### StepTimeline
* StepTimeline `object`: The timeline of the cluster step lifecycle.
  * CreationDateTime
  * EndDateTime
  * StartDateTime

### StopNotebookExecutionInput
* StopNotebookExecutionInput `object`
  * NotebookExecutionId **required**

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### StringMap
* StringMap `object`

### Studio
* Studio `object`: Details for an Amazon EMR Studio including ID, creation time, name, and so on.
  * AuthMode
  * CreationTime
  * DefaultS3Location
  * Description
  * EngineSecurityGroupId
  * Name
  * ServiceRole
  * StudioArn
  * StudioId
  * SubnetIds
    * items [String](#string)
  * Tags
    * items [Tag](#tag)
  * Url
  * UserRole
  * VpcId
  * WorkspaceSecurityGroupId

### StudioSummary
* StudioSummary `object`: Details for an Amazon EMR Studio, including ID, Name, VPC, and Description. The details do not include subnets, IAM roles, security groups, or tags associated with the Studio.
  * CreationTime
  * Description
  * Name
  * StudioId
  * Url
  * VpcId

### StudioSummaryList
* StudioSummaryList `array`
  * items [StudioSummary](#studiosummary)

### SubnetIdList
* SubnetIdList `array`
  * items [String](#string)

### SupportedProductConfig
* SupportedProductConfig `object`: The list of supported product configurations which allow user-supplied arguments. EMR accepts these arguments and forwards them to the corresponding installation script as bootstrap action arguments.
  * Args
    * items [XmlString](#xmlstring)
  * Name

### SupportedProductsList
* SupportedProductsList `array`
  * items [XmlStringMaxLen256](#xmlstringmaxlen256)

### Tag
* Tag `object`: A key-value pair containing user-defined metadata that you can associate with an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. 
  * Key
  * Value

### TagList
* TagList `array`
  * items [Tag](#tag)

### TerminateJobFlowsInput
* TerminateJobFlowsInput `object`:  Input to the <a>TerminateJobFlows</a> operation. 
  * JobFlowIds **required**
    * items [XmlString](#xmlstring)

### Unit
* Unit `string` (values: NONE, SECONDS, MICRO_SECONDS, MILLI_SECONDS, BYTES, KILO_BYTES, MEGA_BYTES, GIGA_BYTES, TERA_BYTES, BITS, KILO_BITS, MEGA_BITS, GIGA_BITS, TERA_BITS, PERCENT, COUNT, BYTES_PER_SECOND, KILO_BYTES_PER_SECOND, MEGA_BYTES_PER_SECOND, GIGA_BYTES_PER_SECOND, TERA_BYTES_PER_SECOND, BITS_PER_SECOND, KILO_BITS_PER_SECOND, MEGA_BITS_PER_SECOND, GIGA_BITS_PER_SECOND, TERA_BITS_PER_SECOND, COUNT_PER_SECOND)

### UpdateStudioSessionMappingInput
* UpdateStudioSessionMappingInput `object`
  * IdentityId
  * IdentityName
  * IdentityType **required**
  * SessionPolicyArn **required**
  * StudioId **required**

### VolumeSpecification
* VolumeSpecification `object`: EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster.
  * Iops
  * SizeInGB **required**
  * VolumeType **required**

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


