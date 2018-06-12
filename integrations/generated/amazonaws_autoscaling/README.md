# @datafire/amazonaws_autoscaling

Client library for Auto Scaling

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_autoscaling
```
```js
let amazonaws_autoscaling = require('@datafire/amazonaws_autoscaling').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_autoscaling.AttachInstances({
  "AutoScalingGroupName": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon EC2 Auto Scaling</fullname> <p>Amazon EC2 Auto Scaling is designed to automatically launch or terminate EC2 instances based on user-defined policies, schedules, and health checks. Use this service in conjunction with the AWS Auto Scaling, Amazon CloudWatch, and Elastic Load Balancing services.</p>

## Actions

### AttachInstances



```js
amazonaws_autoscaling.AttachInstances({
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * InstanceIds [InstanceIds](#instanceids)

#### Output
*Output schema unknown*

### AttachLoadBalancerTargetGroups



```js
amazonaws_autoscaling.AttachLoadBalancerTargetGroups({
  "AutoScalingGroupName": "",
  "TargetGroupARNs": []
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * TargetGroupARNs **required** [TargetGroupARNs](#targetgrouparns)

#### Output
* output [AttachLoadBalancerTargetGroupsResultType](#attachloadbalancertargetgroupsresulttype)

### AttachLoadBalancers



```js
amazonaws_autoscaling.AttachLoadBalancers({
  "AutoScalingGroupName": "",
  "LoadBalancerNames": []
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * LoadBalancerNames **required** [LoadBalancerNames](#loadbalancernames)

#### Output
* output [AttachLoadBalancersResultType](#attachloadbalancersresulttype)

### CompleteLifecycleAction



```js
amazonaws_autoscaling.CompleteLifecycleAction({
  "LifecycleHookName": "",
  "AutoScalingGroupName": "",
  "LifecycleActionResult": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * InstanceId [XmlStringMaxLen19](#xmlstringmaxlen19)
  * LifecycleActionResult **required** [LifecycleActionResult](#lifecycleactionresult)
  * LifecycleActionToken [LifecycleActionToken](#lifecycleactiontoken)
  * LifecycleHookName **required** [AsciiStringMaxLen255](#asciistringmaxlen255)

#### Output
* output [CompleteLifecycleActionAnswer](#completelifecycleactionanswer)

### CreateAutoScalingGroup



```js
amazonaws_autoscaling.CreateAutoScalingGroup({
  "AutoScalingGroupName": "",
  "MinSize": 0,
  "MaxSize": 0
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * AvailabilityZones [AvailabilityZones](#availabilityzones)
  * DefaultCooldown [Cooldown](#cooldown)
  * DesiredCapacity [AutoScalingGroupDesiredCapacity](#autoscalinggroupdesiredcapacity)
  * HealthCheckGracePeriod [HealthCheckGracePeriod](#healthcheckgraceperiod)
  * HealthCheckType [XmlStringMaxLen32](#xmlstringmaxlen32)
  * InstanceId [XmlStringMaxLen19](#xmlstringmaxlen19)
  * LaunchConfigurationName [ResourceName](#resourcename)
  * LaunchTemplate [LaunchTemplateSpecification](#launchtemplatespecification)
  * LifecycleHookSpecificationList [LifecycleHookSpecifications](#lifecyclehookspecifications)
  * LoadBalancerNames [LoadBalancerNames](#loadbalancernames)
  * MaxSize **required** [AutoScalingGroupMaxSize](#autoscalinggroupmaxsize)
  * MinSize **required** [AutoScalingGroupMinSize](#autoscalinggroupminsize)
  * NewInstancesProtectedFromScaleIn [InstanceProtected](#instanceprotected)
  * PlacementGroup [XmlStringMaxLen255](#xmlstringmaxlen255)
  * ServiceLinkedRoleARN [ResourceName](#resourcename)
  * Tags [Tags](#tags)
  * TargetGroupARNs [TargetGroupARNs](#targetgrouparns)
  * TerminationPolicies [TerminationPolicies](#terminationpolicies)
  * VPCZoneIdentifier [XmlStringMaxLen2047](#xmlstringmaxlen2047)

#### Output
*Output schema unknown*

### CreateLaunchConfiguration



```js
amazonaws_autoscaling.CreateLaunchConfiguration({
  "LaunchConfigurationName": ""
}, context)
```

#### Input
* input `object`
  * AssociatePublicIpAddress [AssociatePublicIpAddress](#associatepublicipaddress)
  * BlockDeviceMappings [BlockDeviceMappings](#blockdevicemappings)
  * ClassicLinkVPCId [XmlStringMaxLen255](#xmlstringmaxlen255)
  * ClassicLinkVPCSecurityGroups [ClassicLinkVPCSecurityGroups](#classiclinkvpcsecuritygroups)
  * EbsOptimized [EbsOptimized](#ebsoptimized)
  * IamInstanceProfile [XmlStringMaxLen1600](#xmlstringmaxlen1600)
  * ImageId [XmlStringMaxLen255](#xmlstringmaxlen255)
  * InstanceId [XmlStringMaxLen19](#xmlstringmaxlen19)
  * InstanceMonitoring [InstanceMonitoring](#instancemonitoring)
  * InstanceType [XmlStringMaxLen255](#xmlstringmaxlen255)
  * KernelId [XmlStringMaxLen255](#xmlstringmaxlen255)
  * KeyName [XmlStringMaxLen255](#xmlstringmaxlen255)
  * LaunchConfigurationName **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * PlacementTenancy [XmlStringMaxLen64](#xmlstringmaxlen64)
  * RamdiskId [XmlStringMaxLen255](#xmlstringmaxlen255)
  * SecurityGroups [SecurityGroups](#securitygroups)
  * SpotPrice [SpotPrice](#spotprice)
  * UserData [XmlStringUserData](#xmlstringuserdata)

#### Output
*Output schema unknown*

### CreateOrUpdateTags



```js
amazonaws_autoscaling.CreateOrUpdateTags({
  "Tags": []
}, context)
```

#### Input
* input `object`
  * Tags **required** [Tags](#tags)

#### Output
*Output schema unknown*

### DeleteAutoScalingGroup



```js
amazonaws_autoscaling.DeleteAutoScalingGroup({
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * ForceDelete [ForceDelete](#forcedelete)

#### Output
*Output schema unknown*

### DeleteLaunchConfiguration



```js
amazonaws_autoscaling.DeleteLaunchConfiguration({
  "LaunchConfigurationName": ""
}, context)
```

#### Input
* input `object`
  * LaunchConfigurationName **required** [ResourceName](#resourcename)

#### Output
*Output schema unknown*

### DeleteLifecycleHook



```js
amazonaws_autoscaling.DeleteLifecycleHook({
  "LifecycleHookName": "",
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * LifecycleHookName **required** [AsciiStringMaxLen255](#asciistringmaxlen255)

#### Output
* output [DeleteLifecycleHookAnswer](#deletelifecyclehookanswer)

### DeleteNotificationConfiguration



```js
amazonaws_autoscaling.DeleteNotificationConfiguration({
  "AutoScalingGroupName": "",
  "TopicARN": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * TopicARN **required** [ResourceName](#resourcename)

#### Output
*Output schema unknown*

### DeletePolicy



```js
amazonaws_autoscaling.DeletePolicy({
  "PolicyName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName [ResourceName](#resourcename)
  * PolicyName **required** [ResourceName](#resourcename)

#### Output
*Output schema unknown*

### DeleteScheduledAction



```js
amazonaws_autoscaling.DeleteScheduledAction({
  "AutoScalingGroupName": "",
  "ScheduledActionName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * ScheduledActionName **required** [ResourceName](#resourcename)

#### Output
*Output schema unknown*

### DeleteTags



```js
amazonaws_autoscaling.DeleteTags({
  "Tags": []
}, context)
```

#### Input
* input `object`
  * Tags **required** [Tags](#tags)

#### Output
*Output schema unknown*

### DescribeAccountLimits



```js
amazonaws_autoscaling.DescribeAccountLimits({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeAccountLimitsAnswer](#describeaccountlimitsanswer)

### DescribeAdjustmentTypes



```js
amazonaws_autoscaling.DescribeAdjustmentTypes({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeAdjustmentTypesAnswer](#describeadjustmenttypesanswer)

### DescribeAutoScalingGroups



```js
amazonaws_autoscaling.DescribeAutoScalingGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * AutoScalingGroupNames [AutoScalingGroupNames](#autoscalinggroupnames)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)

#### Output
* output [AutoScalingGroupsType](#autoscalinggroupstype)

### DescribeAutoScalingInstances



```js
amazonaws_autoscaling.DescribeAutoScalingInstances({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * InstanceIds [InstanceIds](#instanceids)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)

#### Output
* output [AutoScalingInstancesType](#autoscalinginstancestype)

### DescribeAutoScalingNotificationTypes



```js
amazonaws_autoscaling.DescribeAutoScalingNotificationTypes({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeAutoScalingNotificationTypesAnswer](#describeautoscalingnotificationtypesanswer)

### DescribeLaunchConfigurations



```js
amazonaws_autoscaling.DescribeLaunchConfigurations({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * LaunchConfigurationNames [LaunchConfigurationNames](#launchconfigurationnames)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)

#### Output
* output [LaunchConfigurationsType](#launchconfigurationstype)

### DescribeLifecycleHookTypes



```js
amazonaws_autoscaling.DescribeLifecycleHookTypes({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeLifecycleHookTypesAnswer](#describelifecyclehooktypesanswer)

### DescribeLifecycleHooks



```js
amazonaws_autoscaling.DescribeLifecycleHooks({
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * LifecycleHookNames [LifecycleHookNames](#lifecyclehooknames)

#### Output
* output [DescribeLifecycleHooksAnswer](#describelifecyclehooksanswer)

### DescribeLoadBalancerTargetGroups



```js
amazonaws_autoscaling.DescribeLoadBalancerTargetGroups({
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)

#### Output
* output [DescribeLoadBalancerTargetGroupsResponse](#describeloadbalancertargetgroupsresponse)

### DescribeLoadBalancers



```js
amazonaws_autoscaling.DescribeLoadBalancers({
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)

#### Output
* output [DescribeLoadBalancersResponse](#describeloadbalancersresponse)

### DescribeMetricCollectionTypes



```js
amazonaws_autoscaling.DescribeMetricCollectionTypes({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeMetricCollectionTypesAnswer](#describemetriccollectiontypesanswer)

### DescribeNotificationConfigurations



```js
amazonaws_autoscaling.DescribeNotificationConfigurations({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * AutoScalingGroupNames [AutoScalingGroupNames](#autoscalinggroupnames)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)

#### Output
* output [DescribeNotificationConfigurationsAnswer](#describenotificationconfigurationsanswer)

### DescribePolicies



```js
amazonaws_autoscaling.DescribePolicies({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * AutoScalingGroupName [ResourceName](#resourcename)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)
  * PolicyNames [PolicyNames](#policynames)
  * PolicyTypes [PolicyTypes](#policytypes)

#### Output
* output [PoliciesType](#policiestype)

### DescribeScalingActivities



```js
amazonaws_autoscaling.DescribeScalingActivities({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * ActivityIds [ActivityIds](#activityids)
  * AutoScalingGroupName [ResourceName](#resourcename)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)

#### Output
* output [ActivitiesType](#activitiestype)

### DescribeScalingProcessTypes



```js
amazonaws_autoscaling.DescribeScalingProcessTypes({}, context)
```

#### Input
* input `object`

#### Output
* output [ProcessesType](#processestype)

### DescribeScheduledActions



```js
amazonaws_autoscaling.DescribeScheduledActions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * AutoScalingGroupName [ResourceName](#resourcename)
  * EndTime [TimestampType](#timestamptype)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)
  * ScheduledActionNames [ScheduledActionNames](#scheduledactionnames)
  * StartTime [TimestampType](#timestamptype)

#### Output
* output [ScheduledActionsType](#scheduledactionstype)

### DescribeTags



```js
amazonaws_autoscaling.DescribeTags({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * Filters [Filters](#filters)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)

#### Output
* output [TagsType](#tagstype)

### DescribeTerminationPolicyTypes



```js
amazonaws_autoscaling.DescribeTerminationPolicyTypes({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeTerminationPolicyTypesAnswer](#describeterminationpolicytypesanswer)

### DetachInstances



```js
amazonaws_autoscaling.DetachInstances({
  "AutoScalingGroupName": "",
  "ShouldDecrementDesiredCapacity": true
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * InstanceIds [InstanceIds](#instanceids)
  * ShouldDecrementDesiredCapacity **required** [ShouldDecrementDesiredCapacity](#shoulddecrementdesiredcapacity)

#### Output
* output [DetachInstancesAnswer](#detachinstancesanswer)

### DetachLoadBalancerTargetGroups



```js
amazonaws_autoscaling.DetachLoadBalancerTargetGroups({
  "AutoScalingGroupName": "",
  "TargetGroupARNs": []
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * TargetGroupARNs **required** [TargetGroupARNs](#targetgrouparns)

#### Output
* output [DetachLoadBalancerTargetGroupsResultType](#detachloadbalancertargetgroupsresulttype)

### DetachLoadBalancers



```js
amazonaws_autoscaling.DetachLoadBalancers({
  "AutoScalingGroupName": "",
  "LoadBalancerNames": []
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * LoadBalancerNames **required** [LoadBalancerNames](#loadbalancernames)

#### Output
* output [DetachLoadBalancersResultType](#detachloadbalancersresulttype)

### DisableMetricsCollection



```js
amazonaws_autoscaling.DisableMetricsCollection({
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * Metrics [Metrics](#metrics)

#### Output
*Output schema unknown*

### EnableMetricsCollection



```js
amazonaws_autoscaling.EnableMetricsCollection({
  "AutoScalingGroupName": "",
  "Granularity": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * Granularity **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * Metrics [Metrics](#metrics)

#### Output
*Output schema unknown*

### EnterStandby



```js
amazonaws_autoscaling.EnterStandby({
  "AutoScalingGroupName": "",
  "ShouldDecrementDesiredCapacity": true
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * InstanceIds [InstanceIds](#instanceids)
  * ShouldDecrementDesiredCapacity **required** [ShouldDecrementDesiredCapacity](#shoulddecrementdesiredcapacity)

#### Output
* output [EnterStandbyAnswer](#enterstandbyanswer)

### ExecutePolicy



```js
amazonaws_autoscaling.ExecutePolicy({
  "PolicyName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName [ResourceName](#resourcename)
  * BreachThreshold [MetricScale](#metricscale)
  * HonorCooldown [HonorCooldown](#honorcooldown)
  * MetricValue [MetricScale](#metricscale)
  * PolicyName **required** [ResourceName](#resourcename)

#### Output
*Output schema unknown*

### ExitStandby



```js
amazonaws_autoscaling.ExitStandby({
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * InstanceIds [InstanceIds](#instanceids)

#### Output
* output [ExitStandbyAnswer](#exitstandbyanswer)

### PutLifecycleHook



```js
amazonaws_autoscaling.PutLifecycleHook({
  "LifecycleHookName": "",
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * DefaultResult [LifecycleActionResult](#lifecycleactionresult)
  * HeartbeatTimeout [HeartbeatTimeout](#heartbeattimeout)
  * LifecycleHookName **required** [AsciiStringMaxLen255](#asciistringmaxlen255)
  * LifecycleTransition [LifecycleTransition](#lifecycletransition)
  * NotificationMetadata [XmlStringMaxLen1023](#xmlstringmaxlen1023)
  * NotificationTargetARN [NotificationTargetResourceName](#notificationtargetresourcename)
  * RoleARN [ResourceName](#resourcename)

#### Output
* output [PutLifecycleHookAnswer](#putlifecyclehookanswer)

### PutNotificationConfiguration



```js
amazonaws_autoscaling.PutNotificationConfiguration({
  "AutoScalingGroupName": "",
  "TopicARN": "",
  "NotificationTypes": []
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * NotificationTypes **required** [AutoScalingNotificationTypes](#autoscalingnotificationtypes)
  * TopicARN **required** [ResourceName](#resourcename)

#### Output
*Output schema unknown*

### PutScalingPolicy



```js
amazonaws_autoscaling.PutScalingPolicy({
  "AutoScalingGroupName": "",
  "PolicyName": ""
}, context)
```

#### Input
* input `object`
  * AdjustmentType [XmlStringMaxLen255](#xmlstringmaxlen255)
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * Cooldown [Cooldown](#cooldown)
  * EstimatedInstanceWarmup [EstimatedInstanceWarmup](#estimatedinstancewarmup)
  * MetricAggregationType [XmlStringMaxLen32](#xmlstringmaxlen32)
  * MinAdjustmentMagnitude [MinAdjustmentMagnitude](#minadjustmentmagnitude)
  * MinAdjustmentStep [MinAdjustmentStep](#minadjustmentstep)
  * PolicyName **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * PolicyType [XmlStringMaxLen64](#xmlstringmaxlen64)
  * ScalingAdjustment [PolicyIncrement](#policyincrement)
  * StepAdjustments [StepAdjustments](#stepadjustments)
  * TargetTrackingConfiguration [TargetTrackingConfiguration](#targettrackingconfiguration)

#### Output
* output [PolicyARNType](#policyarntype)

### PutScheduledUpdateGroupAction



```js
amazonaws_autoscaling.PutScheduledUpdateGroupAction({
  "AutoScalingGroupName": "",
  "ScheduledActionName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * DesiredCapacity [AutoScalingGroupDesiredCapacity](#autoscalinggroupdesiredcapacity)
  * EndTime [TimestampType](#timestamptype)
  * MaxSize [AutoScalingGroupMaxSize](#autoscalinggroupmaxsize)
  * MinSize [AutoScalingGroupMinSize](#autoscalinggroupminsize)
  * Recurrence [XmlStringMaxLen255](#xmlstringmaxlen255)
  * ScheduledActionName **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * StartTime [TimestampType](#timestamptype)
  * Time [TimestampType](#timestamptype)

#### Output
*Output schema unknown*

### RecordLifecycleActionHeartbeat



```js
amazonaws_autoscaling.RecordLifecycleActionHeartbeat({
  "LifecycleHookName": "",
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * InstanceId [XmlStringMaxLen19](#xmlstringmaxlen19)
  * LifecycleActionToken [LifecycleActionToken](#lifecycleactiontoken)
  * LifecycleHookName **required** [AsciiStringMaxLen255](#asciistringmaxlen255)

#### Output
* output [RecordLifecycleActionHeartbeatAnswer](#recordlifecycleactionheartbeatanswer)

### ResumeProcesses



```js
amazonaws_autoscaling.ResumeProcesses({
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * ScalingProcesses [ProcessNames](#processnames)

#### Output
*Output schema unknown*

### SetDesiredCapacity



```js
amazonaws_autoscaling.SetDesiredCapacity({
  "AutoScalingGroupName": "",
  "DesiredCapacity": 0
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * DesiredCapacity **required** [AutoScalingGroupDesiredCapacity](#autoscalinggroupdesiredcapacity)
  * HonorCooldown [HonorCooldown](#honorcooldown)

#### Output
*Output schema unknown*

### SetInstanceHealth



```js
amazonaws_autoscaling.SetInstanceHealth({
  "InstanceId": "",
  "HealthStatus": ""
}, context)
```

#### Input
* input `object`
  * HealthStatus **required** [XmlStringMaxLen32](#xmlstringmaxlen32)
  * InstanceId **required** [XmlStringMaxLen19](#xmlstringmaxlen19)
  * ShouldRespectGracePeriod [ShouldRespectGracePeriod](#shouldrespectgraceperiod)

#### Output
*Output schema unknown*

### SetInstanceProtection



```js
amazonaws_autoscaling.SetInstanceProtection({
  "InstanceIds": [],
  "AutoScalingGroupName": "",
  "ProtectedFromScaleIn": true
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * InstanceIds **required** [InstanceIds](#instanceids)
  * ProtectedFromScaleIn **required** [ProtectedFromScaleIn](#protectedfromscalein)

#### Output
* output [SetInstanceProtectionAnswer](#setinstanceprotectionanswer)

### SuspendProcesses



```js
amazonaws_autoscaling.SuspendProcesses({
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * ScalingProcesses [ProcessNames](#processnames)

#### Output
*Output schema unknown*

### TerminateInstanceInAutoScalingGroup



```js
amazonaws_autoscaling.TerminateInstanceInAutoScalingGroup({
  "InstanceId": "",
  "ShouldDecrementDesiredCapacity": true
}, context)
```

#### Input
* input `object`
  * InstanceId **required** [XmlStringMaxLen19](#xmlstringmaxlen19)
  * ShouldDecrementDesiredCapacity **required** [ShouldDecrementDesiredCapacity](#shoulddecrementdesiredcapacity)

#### Output
* output [ActivityType](#activitytype)

### UpdateAutoScalingGroup



```js
amazonaws_autoscaling.UpdateAutoScalingGroup({
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * AvailabilityZones [AvailabilityZones](#availabilityzones)
  * DefaultCooldown [Cooldown](#cooldown)
  * DesiredCapacity [AutoScalingGroupDesiredCapacity](#autoscalinggroupdesiredcapacity)
  * HealthCheckGracePeriod [HealthCheckGracePeriod](#healthcheckgraceperiod)
  * HealthCheckType [XmlStringMaxLen32](#xmlstringmaxlen32)
  * LaunchConfigurationName [ResourceName](#resourcename)
  * LaunchTemplate [LaunchTemplateSpecification](#launchtemplatespecification)
  * MaxSize [AutoScalingGroupMaxSize](#autoscalinggroupmaxsize)
  * MinSize [AutoScalingGroupMinSize](#autoscalinggroupminsize)
  * NewInstancesProtectedFromScaleIn [InstanceProtected](#instanceprotected)
  * PlacementGroup [XmlStringMaxLen255](#xmlstringmaxlen255)
  * ServiceLinkedRoleARN [ResourceName](#resourcename)
  * TerminationPolicies [TerminationPolicies](#terminationpolicies)
  * VPCZoneIdentifier [XmlStringMaxLen2047](#xmlstringmaxlen2047)

#### Output
*Output schema unknown*



## Definitions

### Activities
* Activities `array`
  * items [Activity](#activity)

### ActivitiesType
* ActivitiesType `object`
  * Activities **required** [Activities](#activities)
  * NextToken [XmlString](#xmlstring)

### Activity
* Activity `object`: Describes scaling activity, which is a long-running process that represents a change to your Auto Scaling group, such as changing its size or replacing an instance.
  * ActivityId **required** [XmlString](#xmlstring)
  * AutoScalingGroupName **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * Cause **required** [XmlStringMaxLen1023](#xmlstringmaxlen1023)
  * Description [XmlString](#xmlstring)
  * Details [XmlString](#xmlstring)
  * EndTime [TimestampType](#timestamptype)
  * Progress [Progress](#progress)
  * StartTime **required** [TimestampType](#timestamptype)
  * StatusCode **required** [ScalingActivityStatusCode](#scalingactivitystatuscode)
  * StatusMessage [XmlStringMaxLen255](#xmlstringmaxlen255)

### ActivityIds
* ActivityIds `array`
  * items [XmlString](#xmlstring)

### ActivityType
* ActivityType `object`
  * Activity [Activity](#activity)

### AdjustmentType
* AdjustmentType `object`: <p>Describes a policy adjustment type.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/as-scale-based-on-demand.html">Dynamic Scaling</a> in the <i>Auto Scaling User Guide</i>.</p>
  * AdjustmentType [XmlStringMaxLen255](#xmlstringmaxlen255)

### AdjustmentTypes
* AdjustmentTypes `array`
  * items [AdjustmentType](#adjustmenttype)

### Alarm
* Alarm `object`: Describes an alarm.
  * AlarmARN [ResourceName](#resourcename)
  * AlarmName [XmlStringMaxLen255](#xmlstringmaxlen255)

### Alarms
* Alarms `array`
  * items [Alarm](#alarm)

### AlreadyExistsFault
* AlreadyExistsFault `object`: You already have an Auto Scaling group or launch configuration with this name.
  * message [XmlStringMaxLen255](#xmlstringmaxlen255)

### AsciiStringMaxLen255
* AsciiStringMaxLen255 `string`

### AssociatePublicIpAddress
* AssociatePublicIpAddress `boolean`

### AttachInstancesQuery
* AttachInstancesQuery `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * InstanceIds [InstanceIds](#instanceids)

### AttachLoadBalancerTargetGroupsResultType
* AttachLoadBalancerTargetGroupsResultType `object`

### AttachLoadBalancerTargetGroupsType
* AttachLoadBalancerTargetGroupsType `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * TargetGroupARNs **required** [TargetGroupARNs](#targetgrouparns)

### AttachLoadBalancersResultType
* AttachLoadBalancersResultType `object`

### AttachLoadBalancersType
* AttachLoadBalancersType `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * LoadBalancerNames **required** [LoadBalancerNames](#loadbalancernames)

### AutoScalingGroup
* AutoScalingGroup `object`: Describes an Auto Scaling group.
  * AutoScalingGroupARN [ResourceName](#resourcename)
  * AutoScalingGroupName **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * AvailabilityZones **required** [AvailabilityZones](#availabilityzones)
  * CreatedTime **required** [TimestampType](#timestamptype)
  * DefaultCooldown **required** [Cooldown](#cooldown)
  * DesiredCapacity **required** [AutoScalingGroupDesiredCapacity](#autoscalinggroupdesiredcapacity)
  * EnabledMetrics [EnabledMetrics](#enabledmetrics)
  * HealthCheckGracePeriod [HealthCheckGracePeriod](#healthcheckgraceperiod)
  * HealthCheckType **required** [XmlStringMaxLen32](#xmlstringmaxlen32)
  * Instances [Instances](#instances)
  * LaunchConfigurationName [XmlStringMaxLen255](#xmlstringmaxlen255)
  * LaunchTemplate [LaunchTemplateSpecification](#launchtemplatespecification)
  * LoadBalancerNames [LoadBalancerNames](#loadbalancernames)
  * MaxSize **required** [AutoScalingGroupMaxSize](#autoscalinggroupmaxsize)
  * MinSize **required** [AutoScalingGroupMinSize](#autoscalinggroupminsize)
  * NewInstancesProtectedFromScaleIn [InstanceProtected](#instanceprotected)
  * PlacementGroup [XmlStringMaxLen255](#xmlstringmaxlen255)
  * ServiceLinkedRoleARN [ResourceName](#resourcename)
  * Status [XmlStringMaxLen255](#xmlstringmaxlen255)
  * SuspendedProcesses [SuspendedProcesses](#suspendedprocesses)
  * Tags [TagDescriptionList](#tagdescriptionlist)
  * TargetGroupARNs [TargetGroupARNs](#targetgrouparns)
  * TerminationPolicies [TerminationPolicies](#terminationpolicies)
  * VPCZoneIdentifier [XmlStringMaxLen2047](#xmlstringmaxlen2047)

### AutoScalingGroupDesiredCapacity
* AutoScalingGroupDesiredCapacity `integer`

### AutoScalingGroupMaxSize
* AutoScalingGroupMaxSize `integer`

### AutoScalingGroupMinSize
* AutoScalingGroupMinSize `integer`

### AutoScalingGroupNames
* AutoScalingGroupNames `array`
  * items [ResourceName](#resourcename)

### AutoScalingGroupNamesType
* AutoScalingGroupNamesType `object`
  * AutoScalingGroupNames [AutoScalingGroupNames](#autoscalinggroupnames)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)

### AutoScalingGroups
* AutoScalingGroups `array`
  * items [AutoScalingGroup](#autoscalinggroup)

### AutoScalingGroupsType
* AutoScalingGroupsType `object`
  * AutoScalingGroups **required** [AutoScalingGroups](#autoscalinggroups)
  * NextToken [XmlString](#xmlstring)

### AutoScalingInstanceDetails
* AutoScalingInstanceDetails `object`: Describes an EC2 instance associated with an Auto Scaling group.
  * AutoScalingGroupName **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * AvailabilityZone **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * HealthStatus **required** [XmlStringMaxLen32](#xmlstringmaxlen32)
  * InstanceId **required** [XmlStringMaxLen19](#xmlstringmaxlen19)
  * LaunchConfigurationName [XmlStringMaxLen255](#xmlstringmaxlen255)
  * LaunchTemplate [LaunchTemplateSpecification](#launchtemplatespecification)
  * LifecycleState **required** [XmlStringMaxLen32](#xmlstringmaxlen32)
  * ProtectedFromScaleIn **required** [InstanceProtected](#instanceprotected)

### AutoScalingInstances
* AutoScalingInstances `array`
  * items [AutoScalingInstanceDetails](#autoscalinginstancedetails)

### AutoScalingInstancesType
* AutoScalingInstancesType `object`
  * AutoScalingInstances [AutoScalingInstances](#autoscalinginstances)
  * NextToken [XmlString](#xmlstring)

### AutoScalingNotificationTypes
* AutoScalingNotificationTypes `array`
  * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### AvailabilityZones
* AvailabilityZones `array`
  * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### BlockDeviceEbsDeleteOnTermination
* BlockDeviceEbsDeleteOnTermination `boolean`

### BlockDeviceEbsEncrypted
* BlockDeviceEbsEncrypted `boolean`

### BlockDeviceEbsIops
* BlockDeviceEbsIops `integer`

### BlockDeviceEbsVolumeSize
* BlockDeviceEbsVolumeSize `integer`

### BlockDeviceEbsVolumeType
* BlockDeviceEbsVolumeType `string`

### BlockDeviceMapping
* BlockDeviceMapping `object`: Describes a block device mapping.
  * DeviceName **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * Ebs [Ebs](#ebs)
  * NoDevice [NoDevice](#nodevice)
  * VirtualName [XmlStringMaxLen255](#xmlstringmaxlen255)

### BlockDeviceMappings
* BlockDeviceMappings `array`
  * items [BlockDeviceMapping](#blockdevicemapping)

### ClassicLinkVPCSecurityGroups
* ClassicLinkVPCSecurityGroups `array`
  * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### CompleteLifecycleActionAnswer
* CompleteLifecycleActionAnswer `object`

### CompleteLifecycleActionType
* CompleteLifecycleActionType `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * InstanceId [XmlStringMaxLen19](#xmlstringmaxlen19)
  * LifecycleActionResult **required** [LifecycleActionResult](#lifecycleactionresult)
  * LifecycleActionToken [LifecycleActionToken](#lifecycleactiontoken)
  * LifecycleHookName **required** [AsciiStringMaxLen255](#asciistringmaxlen255)

### Cooldown
* Cooldown `integer`

### CreateAutoScalingGroupType
* CreateAutoScalingGroupType `object`
  * AutoScalingGroupName **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * AvailabilityZones [AvailabilityZones](#availabilityzones)
  * DefaultCooldown [Cooldown](#cooldown)
  * DesiredCapacity [AutoScalingGroupDesiredCapacity](#autoscalinggroupdesiredcapacity)
  * HealthCheckGracePeriod [HealthCheckGracePeriod](#healthcheckgraceperiod)
  * HealthCheckType [XmlStringMaxLen32](#xmlstringmaxlen32)
  * InstanceId [XmlStringMaxLen19](#xmlstringmaxlen19)
  * LaunchConfigurationName [ResourceName](#resourcename)
  * LaunchTemplate [LaunchTemplateSpecification](#launchtemplatespecification)
  * LifecycleHookSpecificationList [LifecycleHookSpecifications](#lifecyclehookspecifications)
  * LoadBalancerNames [LoadBalancerNames](#loadbalancernames)
  * MaxSize **required** [AutoScalingGroupMaxSize](#autoscalinggroupmaxsize)
  * MinSize **required** [AutoScalingGroupMinSize](#autoscalinggroupminsize)
  * NewInstancesProtectedFromScaleIn [InstanceProtected](#instanceprotected)
  * PlacementGroup [XmlStringMaxLen255](#xmlstringmaxlen255)
  * ServiceLinkedRoleARN [ResourceName](#resourcename)
  * Tags [Tags](#tags)
  * TargetGroupARNs [TargetGroupARNs](#targetgrouparns)
  * TerminationPolicies [TerminationPolicies](#terminationpolicies)
  * VPCZoneIdentifier [XmlStringMaxLen2047](#xmlstringmaxlen2047)

### CreateLaunchConfigurationType
* CreateLaunchConfigurationType `object`
  * AssociatePublicIpAddress [AssociatePublicIpAddress](#associatepublicipaddress)
  * BlockDeviceMappings [BlockDeviceMappings](#blockdevicemappings)
  * ClassicLinkVPCId [XmlStringMaxLen255](#xmlstringmaxlen255)
  * ClassicLinkVPCSecurityGroups [ClassicLinkVPCSecurityGroups](#classiclinkvpcsecuritygroups)
  * EbsOptimized [EbsOptimized](#ebsoptimized)
  * IamInstanceProfile [XmlStringMaxLen1600](#xmlstringmaxlen1600)
  * ImageId [XmlStringMaxLen255](#xmlstringmaxlen255)
  * InstanceId [XmlStringMaxLen19](#xmlstringmaxlen19)
  * InstanceMonitoring [InstanceMonitoring](#instancemonitoring)
  * InstanceType [XmlStringMaxLen255](#xmlstringmaxlen255)
  * KernelId [XmlStringMaxLen255](#xmlstringmaxlen255)
  * KeyName [XmlStringMaxLen255](#xmlstringmaxlen255)
  * LaunchConfigurationName **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * PlacementTenancy [XmlStringMaxLen64](#xmlstringmaxlen64)
  * RamdiskId [XmlStringMaxLen255](#xmlstringmaxlen255)
  * SecurityGroups [SecurityGroups](#securitygroups)
  * SpotPrice [SpotPrice](#spotprice)
  * UserData [XmlStringUserData](#xmlstringuserdata)

### CreateOrUpdateTagsType
* CreateOrUpdateTagsType `object`
  * Tags **required** [Tags](#tags)

### CustomizedMetricSpecification
* CustomizedMetricSpecification `object`: Configures a customized metric for a target tracking policy.
  * Dimensions [MetricDimensions](#metricdimensions)
  * MetricName **required** [MetricName](#metricname)
  * Namespace **required** [MetricNamespace](#metricnamespace)
  * Statistic **required** [MetricStatistic](#metricstatistic)
  * Unit [MetricUnit](#metricunit)

### DeleteAutoScalingGroupType
* DeleteAutoScalingGroupType `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * ForceDelete [ForceDelete](#forcedelete)

### DeleteLifecycleHookAnswer
* DeleteLifecycleHookAnswer `object`

### DeleteLifecycleHookType
* DeleteLifecycleHookType `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * LifecycleHookName **required** [AsciiStringMaxLen255](#asciistringmaxlen255)

### DeleteNotificationConfigurationType
* DeleteNotificationConfigurationType `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * TopicARN **required** [ResourceName](#resourcename)

### DeletePolicyType
* DeletePolicyType `object`
  * AutoScalingGroupName [ResourceName](#resourcename)
  * PolicyName **required** [ResourceName](#resourcename)

### DeleteScheduledActionType
* DeleteScheduledActionType `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * ScheduledActionName **required** [ResourceName](#resourcename)

### DeleteTagsType
* DeleteTagsType `object`
  * Tags **required** [Tags](#tags)

### DescribeAccountLimitsAnswer
* DescribeAccountLimitsAnswer `object`
  * MaxNumberOfAutoScalingGroups [MaxNumberOfAutoScalingGroups](#maxnumberofautoscalinggroups)
  * MaxNumberOfLaunchConfigurations [MaxNumberOfLaunchConfigurations](#maxnumberoflaunchconfigurations)
  * NumberOfAutoScalingGroups [NumberOfAutoScalingGroups](#numberofautoscalinggroups)
  * NumberOfLaunchConfigurations [NumberOfLaunchConfigurations](#numberoflaunchconfigurations)

### DescribeAdjustmentTypesAnswer
* DescribeAdjustmentTypesAnswer `object`
  * AdjustmentTypes [AdjustmentTypes](#adjustmenttypes)

### DescribeAutoScalingInstancesType
* DescribeAutoScalingInstancesType `object`
  * InstanceIds [InstanceIds](#instanceids)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)

### DescribeAutoScalingNotificationTypesAnswer
* DescribeAutoScalingNotificationTypesAnswer `object`
  * AutoScalingNotificationTypes [AutoScalingNotificationTypes](#autoscalingnotificationtypes)

### DescribeLifecycleHookTypesAnswer
* DescribeLifecycleHookTypesAnswer `object`
  * LifecycleHookTypes [AutoScalingNotificationTypes](#autoscalingnotificationtypes)

### DescribeLifecycleHooksAnswer
* DescribeLifecycleHooksAnswer `object`
  * LifecycleHooks [LifecycleHooks](#lifecyclehooks)

### DescribeLifecycleHooksType
* DescribeLifecycleHooksType `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * LifecycleHookNames [LifecycleHookNames](#lifecyclehooknames)

### DescribeLoadBalancerTargetGroupsRequest
* DescribeLoadBalancerTargetGroupsRequest `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)

### DescribeLoadBalancerTargetGroupsResponse
* DescribeLoadBalancerTargetGroupsResponse `object`
  * LoadBalancerTargetGroups [LoadBalancerTargetGroupStates](#loadbalancertargetgroupstates)
  * NextToken [XmlString](#xmlstring)

### DescribeLoadBalancersRequest
* DescribeLoadBalancersRequest `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)

### DescribeLoadBalancersResponse
* DescribeLoadBalancersResponse `object`
  * LoadBalancers [LoadBalancerStates](#loadbalancerstates)
  * NextToken [XmlString](#xmlstring)

### DescribeMetricCollectionTypesAnswer
* DescribeMetricCollectionTypesAnswer `object`
  * Granularities [MetricGranularityTypes](#metricgranularitytypes)
  * Metrics [MetricCollectionTypes](#metriccollectiontypes)

### DescribeNotificationConfigurationsAnswer
* DescribeNotificationConfigurationsAnswer `object`
  * NextToken [XmlString](#xmlstring)
  * NotificationConfigurations **required** [NotificationConfigurations](#notificationconfigurations)

### DescribeNotificationConfigurationsType
* DescribeNotificationConfigurationsType `object`
  * AutoScalingGroupNames [AutoScalingGroupNames](#autoscalinggroupnames)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)

### DescribePoliciesType
* DescribePoliciesType `object`
  * AutoScalingGroupName [ResourceName](#resourcename)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)
  * PolicyNames [PolicyNames](#policynames)
  * PolicyTypes [PolicyTypes](#policytypes)

### DescribeScalingActivitiesType
* DescribeScalingActivitiesType `object`
  * ActivityIds [ActivityIds](#activityids)
  * AutoScalingGroupName [ResourceName](#resourcename)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)

### DescribeScheduledActionsType
* DescribeScheduledActionsType `object`
  * AutoScalingGroupName [ResourceName](#resourcename)
  * EndTime [TimestampType](#timestamptype)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)
  * ScheduledActionNames [ScheduledActionNames](#scheduledactionnames)
  * StartTime [TimestampType](#timestamptype)

### DescribeTagsType
* DescribeTagsType `object`
  * Filters [Filters](#filters)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)

### DescribeTerminationPolicyTypesAnswer
* DescribeTerminationPolicyTypesAnswer `object`
  * TerminationPolicyTypes [TerminationPolicies](#terminationpolicies)

### DetachInstancesAnswer
* DetachInstancesAnswer `object`
  * Activities [Activities](#activities)

### DetachInstancesQuery
* DetachInstancesQuery `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * InstanceIds [InstanceIds](#instanceids)
  * ShouldDecrementDesiredCapacity **required** [ShouldDecrementDesiredCapacity](#shoulddecrementdesiredcapacity)

### DetachLoadBalancerTargetGroupsResultType
* DetachLoadBalancerTargetGroupsResultType `object`

### DetachLoadBalancerTargetGroupsType
* DetachLoadBalancerTargetGroupsType `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * TargetGroupARNs **required** [TargetGroupARNs](#targetgrouparns)

### DetachLoadBalancersResultType
* DetachLoadBalancersResultType `object`

### DetachLoadBalancersType
* DetachLoadBalancersType `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * LoadBalancerNames **required** [LoadBalancerNames](#loadbalancernames)

### DisableMetricsCollectionQuery
* DisableMetricsCollectionQuery `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * Metrics [Metrics](#metrics)

### DisableScaleIn
* DisableScaleIn `boolean`

### Ebs
* Ebs `object`: Describes an Amazon EBS volume.
  * DeleteOnTermination [BlockDeviceEbsDeleteOnTermination](#blockdeviceebsdeleteontermination)
  * Encrypted [BlockDeviceEbsEncrypted](#blockdeviceebsencrypted)
  * Iops [BlockDeviceEbsIops](#blockdeviceebsiops)
  * SnapshotId [XmlStringMaxLen255](#xmlstringmaxlen255)
  * VolumeSize [BlockDeviceEbsVolumeSize](#blockdeviceebsvolumesize)
  * VolumeType [BlockDeviceEbsVolumeType](#blockdeviceebsvolumetype)

### EbsOptimized
* EbsOptimized `boolean`

### EnableMetricsCollectionQuery
* EnableMetricsCollectionQuery `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * Granularity **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * Metrics [Metrics](#metrics)

### EnabledMetric
* EnabledMetric `object`: Describes an enabled metric.
  * Granularity [XmlStringMaxLen255](#xmlstringmaxlen255)
  * Metric [XmlStringMaxLen255](#xmlstringmaxlen255)

### EnabledMetrics
* EnabledMetrics `array`
  * items [EnabledMetric](#enabledmetric)

### EnterStandbyAnswer
* EnterStandbyAnswer `object`
  * Activities [Activities](#activities)

### EnterStandbyQuery
* EnterStandbyQuery `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * InstanceIds [InstanceIds](#instanceids)
  * ShouldDecrementDesiredCapacity **required** [ShouldDecrementDesiredCapacity](#shoulddecrementdesiredcapacity)

### EstimatedInstanceWarmup
* EstimatedInstanceWarmup `integer`

### ExecutePolicyType
* ExecutePolicyType `object`
  * AutoScalingGroupName [ResourceName](#resourcename)
  * BreachThreshold [MetricScale](#metricscale)
  * HonorCooldown [HonorCooldown](#honorcooldown)
  * MetricValue [MetricScale](#metricscale)
  * PolicyName **required** [ResourceName](#resourcename)

### ExitStandbyAnswer
* ExitStandbyAnswer `object`
  * Activities [Activities](#activities)

### ExitStandbyQuery
* ExitStandbyQuery `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * InstanceIds [InstanceIds](#instanceids)

### Filter
* Filter `object`: Describes a filter.
  * Name [XmlString](#xmlstring)
  * Values [Values](#values)

### Filters
* Filters `array`
  * items [Filter](#filter)

### ForceDelete
* ForceDelete `boolean`

### GlobalTimeout
* GlobalTimeout `integer`

### HealthCheckGracePeriod
* HealthCheckGracePeriod `integer`

### HeartbeatTimeout
* HeartbeatTimeout `integer`

### HonorCooldown
* HonorCooldown `boolean`

### Instance
* Instance `object`: Describes an EC2 instance.
  * AvailabilityZone **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * HealthStatus **required** [XmlStringMaxLen32](#xmlstringmaxlen32)
  * InstanceId **required** [XmlStringMaxLen19](#xmlstringmaxlen19)
  * LaunchConfigurationName [XmlStringMaxLen255](#xmlstringmaxlen255)
  * LaunchTemplate [LaunchTemplateSpecification](#launchtemplatespecification)
  * LifecycleState **required** [LifecycleState](#lifecyclestate)
  * ProtectedFromScaleIn **required** [InstanceProtected](#instanceprotected)

### InstanceIds
* InstanceIds `array`
  * items [XmlStringMaxLen19](#xmlstringmaxlen19)

### InstanceMonitoring
* InstanceMonitoring `object`: Describes whether detailed monitoring is enabled for the Auto Scaling instances.
  * Enabled [MonitoringEnabled](#monitoringenabled)

### InstanceProtected
* InstanceProtected `boolean`

### Instances
* Instances `array`
  * items [Instance](#instance)

### InvalidNextToken
* InvalidNextToken `object`: The <code>NextToken</code> value is not valid.
  * message [XmlStringMaxLen255](#xmlstringmaxlen255)

### LaunchConfiguration
* LaunchConfiguration `object`: Describes a launch configuration.
  * AssociatePublicIpAddress [AssociatePublicIpAddress](#associatepublicipaddress)
  * BlockDeviceMappings [BlockDeviceMappings](#blockdevicemappings)
  * ClassicLinkVPCId [XmlStringMaxLen255](#xmlstringmaxlen255)
  * ClassicLinkVPCSecurityGroups [ClassicLinkVPCSecurityGroups](#classiclinkvpcsecuritygroups)
  * CreatedTime **required** [TimestampType](#timestamptype)
  * EbsOptimized [EbsOptimized](#ebsoptimized)
  * IamInstanceProfile [XmlStringMaxLen1600](#xmlstringmaxlen1600)
  * ImageId **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * InstanceMonitoring [InstanceMonitoring](#instancemonitoring)
  * InstanceType **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * KernelId [XmlStringMaxLen255](#xmlstringmaxlen255)
  * KeyName [XmlStringMaxLen255](#xmlstringmaxlen255)
  * LaunchConfigurationARN [ResourceName](#resourcename)
  * LaunchConfigurationName **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * PlacementTenancy [XmlStringMaxLen64](#xmlstringmaxlen64)
  * RamdiskId [XmlStringMaxLen255](#xmlstringmaxlen255)
  * SecurityGroups [SecurityGroups](#securitygroups)
  * SpotPrice [SpotPrice](#spotprice)
  * UserData [XmlStringUserData](#xmlstringuserdata)

### LaunchConfigurationNameType
* LaunchConfigurationNameType `object`
  * LaunchConfigurationName **required** [ResourceName](#resourcename)

### LaunchConfigurationNames
* LaunchConfigurationNames `array`
  * items [ResourceName](#resourcename)

### LaunchConfigurationNamesType
* LaunchConfigurationNamesType `object`
  * LaunchConfigurationNames [LaunchConfigurationNames](#launchconfigurationnames)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [XmlString](#xmlstring)

### LaunchConfigurations
* LaunchConfigurations `array`
  * items [LaunchConfiguration](#launchconfiguration)

### LaunchConfigurationsType
* LaunchConfigurationsType `object`
  * LaunchConfigurations **required** [LaunchConfigurations](#launchconfigurations)
  * NextToken [XmlString](#xmlstring)

### LaunchTemplateName
* LaunchTemplateName `string`

### LaunchTemplateSpecification
* LaunchTemplateSpecification `object`: Describes a launch template.
  * LaunchTemplateId [XmlStringMaxLen255](#xmlstringmaxlen255)
  * LaunchTemplateName [LaunchTemplateName](#launchtemplatename)
  * Version [XmlStringMaxLen255](#xmlstringmaxlen255)

### LifecycleActionResult
* LifecycleActionResult `string`

### LifecycleActionToken
* LifecycleActionToken `string`

### LifecycleHook
* LifecycleHook `object`: <p>Describes a lifecycle hook, which tells Auto Scaling that you want to perform an action whenever it launches instances or whenever it terminates instances.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/autoscaling/latest/userguide/lifecycle-hooks.html">Auto Scaling Lifecycle Hooks</a> in the <i>Auto Scaling User Guide</i>.</p>
  * AutoScalingGroupName [ResourceName](#resourcename)
  * DefaultResult [LifecycleActionResult](#lifecycleactionresult)
  * GlobalTimeout [GlobalTimeout](#globaltimeout)
  * HeartbeatTimeout [HeartbeatTimeout](#heartbeattimeout)
  * LifecycleHookName [AsciiStringMaxLen255](#asciistringmaxlen255)
  * LifecycleTransition [LifecycleTransition](#lifecycletransition)
  * NotificationMetadata [XmlStringMaxLen1023](#xmlstringmaxlen1023)
  * NotificationTargetARN [ResourceName](#resourcename)
  * RoleARN [ResourceName](#resourcename)

### LifecycleHookNames
* LifecycleHookNames `array`
  * items [AsciiStringMaxLen255](#asciistringmaxlen255)

### LifecycleHookSpecification
* LifecycleHookSpecification `object`: <p>Describes a lifecycle hook, which tells Auto Scaling that you want to perform an action whenever it launches instances or whenever it terminates instances.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/autoscaling/latest/userguide/lifecycle-hooks.html">Auto Scaling Lifecycle Hooks</a> in the <i>Auto Scaling User Guide</i>.</p>
  * DefaultResult [LifecycleActionResult](#lifecycleactionresult)
  * HeartbeatTimeout [HeartbeatTimeout](#heartbeattimeout)
  * LifecycleHookName **required** [AsciiStringMaxLen255](#asciistringmaxlen255)
  * LifecycleTransition **required** [LifecycleTransition](#lifecycletransition)
  * NotificationMetadata [XmlStringMaxLen1023](#xmlstringmaxlen1023)
  * NotificationTargetARN [NotificationTargetResourceName](#notificationtargetresourcename)
  * RoleARN [ResourceName](#resourcename)

### LifecycleHookSpecifications
* LifecycleHookSpecifications `array`
  * items [LifecycleHookSpecification](#lifecyclehookspecification)

### LifecycleHooks
* LifecycleHooks `array`
  * items [LifecycleHook](#lifecyclehook)

### LifecycleState
* LifecycleState `string` (values: Pending, Pending:Wait, Pending:Proceed, Quarantined, InService, Terminating, Terminating:Wait, Terminating:Proceed, Terminated, Detaching, Detached, EnteringStandby, Standby)

### LifecycleTransition
* LifecycleTransition `string`

### LimitExceededFault
* LimitExceededFault `object`: You have already reached a limit for your Auto Scaling resources (for example, groups, launch configurations, or lifecycle hooks). For more information, see <a>DescribeAccountLimits</a>.
  * message [XmlStringMaxLen255](#xmlstringmaxlen255)

### LoadBalancerNames
* LoadBalancerNames `array`
  * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### LoadBalancerState
* LoadBalancerState `object`: <p>Describes the state of a Classic Load Balancer.</p> <p>If you specify a load balancer when creating the Auto Scaling group, the state of the load balancer is <code>InService</code>.</p> <p>If you attach a load balancer to an existing Auto Scaling group, the initial state is <code>Adding</code>. The state transitions to <code>Added</code> after all instances in the group are registered with the load balancer. If ELB health checks are enabled for the load balancer, the state transitions to <code>InService</code> after at least one instance in the group passes the health check. If EC2 health checks are enabled instead, the load balancer remains in the <code>Added</code> state.</p>
  * LoadBalancerName [XmlStringMaxLen255](#xmlstringmaxlen255)
  * State [XmlStringMaxLen255](#xmlstringmaxlen255)

### LoadBalancerStates
* LoadBalancerStates `array`
  * items [LoadBalancerState](#loadbalancerstate)

### LoadBalancerTargetGroupState
* LoadBalancerTargetGroupState `object`: <p>Describes the state of a target group.</p> <p>If you attach a target group to an existing Auto Scaling group, the initial state is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the target group. If ELB health checks are enabled, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. If EC2 health checks are enabled instead, the target group remains in the <code>Added</code> state.</p>
  * LoadBalancerTargetGroupARN [XmlStringMaxLen511](#xmlstringmaxlen511)
  * State [XmlStringMaxLen255](#xmlstringmaxlen255)

### LoadBalancerTargetGroupStates
* LoadBalancerTargetGroupStates `array`
  * items [LoadBalancerTargetGroupState](#loadbalancertargetgroupstate)

### MaxNumberOfAutoScalingGroups
* MaxNumberOfAutoScalingGroups `integer`

### MaxNumberOfLaunchConfigurations
* MaxNumberOfLaunchConfigurations `integer`

### MaxRecords
* MaxRecords `integer`

### MetricCollectionType
* MetricCollectionType `object`: Describes a metric.
  * Metric [XmlStringMaxLen255](#xmlstringmaxlen255)

### MetricCollectionTypes
* MetricCollectionTypes `array`
  * items [MetricCollectionType](#metriccollectiontype)

### MetricDimension
* MetricDimension `object`: Describes the dimension of a metric.
  * Name **required** [MetricDimensionName](#metricdimensionname)
  * Value **required** [MetricDimensionValue](#metricdimensionvalue)

### MetricDimensionName
* MetricDimensionName `string`

### MetricDimensionValue
* MetricDimensionValue `string`

### MetricDimensions
* MetricDimensions `array`
  * items [MetricDimension](#metricdimension)

### MetricGranularityType
* MetricGranularityType `object`: Describes a granularity of a metric.
  * Granularity [XmlStringMaxLen255](#xmlstringmaxlen255)

### MetricGranularityTypes
* MetricGranularityTypes `array`
  * items [MetricGranularityType](#metricgranularitytype)

### MetricName
* MetricName `string`

### MetricNamespace
* MetricNamespace `string`

### MetricScale
* MetricScale `number`

### MetricStatistic
* MetricStatistic `string` (values: Average, Minimum, Maximum, SampleCount, Sum)

### MetricType
* MetricType `string` (values: ASGAverageCPUUtilization, ASGAverageNetworkIn, ASGAverageNetworkOut, ALBRequestCountPerTarget)

### MetricUnit
* MetricUnit `string`

### Metrics
* Metrics `array`
  * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### MinAdjustmentMagnitude
* MinAdjustmentMagnitude `integer`

### MinAdjustmentStep
* MinAdjustmentStep `integer`

### MonitoringEnabled
* MonitoringEnabled `boolean`

### NoDevice
* NoDevice `boolean`

### NotificationConfiguration
* NotificationConfiguration `object`: Describes a notification.
  * AutoScalingGroupName [ResourceName](#resourcename)
  * NotificationType [XmlStringMaxLen255](#xmlstringmaxlen255)
  * TopicARN [ResourceName](#resourcename)

### NotificationConfigurations
* NotificationConfigurations `array`
  * items [NotificationConfiguration](#notificationconfiguration)

### NotificationTargetResourceName
* NotificationTargetResourceName `string`

### NumberOfAutoScalingGroups
* NumberOfAutoScalingGroups `integer`

### NumberOfLaunchConfigurations
* NumberOfLaunchConfigurations `integer`

### PoliciesType
* PoliciesType `object`
  * NextToken [XmlString](#xmlstring)
  * ScalingPolicies [ScalingPolicies](#scalingpolicies)

### PolicyARNType
* PolicyARNType `object`: Contains the output of PutScalingPolicy.
  * Alarms [Alarms](#alarms)
  * PolicyARN [ResourceName](#resourcename)

### PolicyIncrement
* PolicyIncrement `integer`

### PolicyNames
* PolicyNames `array`
  * items [ResourceName](#resourcename)

### PolicyTypes
* PolicyTypes `array`
  * items [XmlStringMaxLen64](#xmlstringmaxlen64)

### PredefinedMetricSpecification
* PredefinedMetricSpecification `object`: Configures a predefined metric for a target tracking policy.
  * PredefinedMetricType **required** [MetricType](#metrictype)
  * ResourceLabel [XmlStringMaxLen1023](#xmlstringmaxlen1023)

### ProcessNames
* ProcessNames `array`
  * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### ProcessType
* ProcessType `object`: <p>Describes a process type.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/autoscaling/latest/userguide/as-suspend-resume-processes.html#process-types">Auto Scaling Processes</a> in the <i>Auto Scaling User Guide</i>.</p>
  * ProcessName **required** [XmlStringMaxLen255](#xmlstringmaxlen255)

### Processes
* Processes `array`
  * items [ProcessType](#processtype)

### ProcessesType
* ProcessesType `object`
  * Processes [Processes](#processes)

### Progress
* Progress `integer`

### PropagateAtLaunch
* PropagateAtLaunch `boolean`

### ProtectedFromScaleIn
* ProtectedFromScaleIn `boolean`

### PutLifecycleHookAnswer
* PutLifecycleHookAnswer `object`

### PutLifecycleHookType
* PutLifecycleHookType `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * DefaultResult [LifecycleActionResult](#lifecycleactionresult)
  * HeartbeatTimeout [HeartbeatTimeout](#heartbeattimeout)
  * LifecycleHookName **required** [AsciiStringMaxLen255](#asciistringmaxlen255)
  * LifecycleTransition [LifecycleTransition](#lifecycletransition)
  * NotificationMetadata [XmlStringMaxLen1023](#xmlstringmaxlen1023)
  * NotificationTargetARN [NotificationTargetResourceName](#notificationtargetresourcename)
  * RoleARN [ResourceName](#resourcename)

### PutNotificationConfigurationType
* PutNotificationConfigurationType `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * NotificationTypes **required** [AutoScalingNotificationTypes](#autoscalingnotificationtypes)
  * TopicARN **required** [ResourceName](#resourcename)

### PutScalingPolicyType
* PutScalingPolicyType `object`
  * AdjustmentType [XmlStringMaxLen255](#xmlstringmaxlen255)
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * Cooldown [Cooldown](#cooldown)
  * EstimatedInstanceWarmup [EstimatedInstanceWarmup](#estimatedinstancewarmup)
  * MetricAggregationType [XmlStringMaxLen32](#xmlstringmaxlen32)
  * MinAdjustmentMagnitude [MinAdjustmentMagnitude](#minadjustmentmagnitude)
  * MinAdjustmentStep [MinAdjustmentStep](#minadjustmentstep)
  * PolicyName **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * PolicyType [XmlStringMaxLen64](#xmlstringmaxlen64)
  * ScalingAdjustment [PolicyIncrement](#policyincrement)
  * StepAdjustments [StepAdjustments](#stepadjustments)
  * TargetTrackingConfiguration [TargetTrackingConfiguration](#targettrackingconfiguration)

### PutScheduledUpdateGroupActionType
* PutScheduledUpdateGroupActionType `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * DesiredCapacity [AutoScalingGroupDesiredCapacity](#autoscalinggroupdesiredcapacity)
  * EndTime [TimestampType](#timestamptype)
  * MaxSize [AutoScalingGroupMaxSize](#autoscalinggroupmaxsize)
  * MinSize [AutoScalingGroupMinSize](#autoscalinggroupminsize)
  * Recurrence [XmlStringMaxLen255](#xmlstringmaxlen255)
  * ScheduledActionName **required** [XmlStringMaxLen255](#xmlstringmaxlen255)
  * StartTime [TimestampType](#timestamptype)
  * Time [TimestampType](#timestamptype)

### RecordLifecycleActionHeartbeatAnswer
* RecordLifecycleActionHeartbeatAnswer `object`

### RecordLifecycleActionHeartbeatType
* RecordLifecycleActionHeartbeatType `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * InstanceId [XmlStringMaxLen19](#xmlstringmaxlen19)
  * LifecycleActionToken [LifecycleActionToken](#lifecycleactiontoken)
  * LifecycleHookName **required** [AsciiStringMaxLen255](#asciistringmaxlen255)

### ResourceContentionFault
* ResourceContentionFault `object`: You already have a pending update to an Auto Scaling resource (for example, a group, instance, or load balancer).
  * message [XmlStringMaxLen255](#xmlstringmaxlen255)

### ResourceInUseFault
* ResourceInUseFault `object`: The operation can't be performed because the resource is in use.
  * message [XmlStringMaxLen255](#xmlstringmaxlen255)

### ResourceName
* ResourceName `string`

### ScalingActivityInProgressFault
* ScalingActivityInProgressFault `object`: The operation can't be performed because there are scaling activities in progress.
  * message [XmlStringMaxLen255](#xmlstringmaxlen255)

### ScalingActivityStatusCode
* ScalingActivityStatusCode `string` (values: PendingSpotBidPlacement, WaitingForSpotInstanceRequestId, WaitingForSpotInstanceId, WaitingForInstanceId, PreInService, InProgress, WaitingForELBConnectionDraining, MidLifecycleAction, WaitingForInstanceWarmup, Successful, Failed, Cancelled)

### ScalingPolicies
* ScalingPolicies `array`
  * items [ScalingPolicy](#scalingpolicy)

### ScalingPolicy
* ScalingPolicy `object`: Describes a scaling policy.
  * AdjustmentType [XmlStringMaxLen255](#xmlstringmaxlen255)
  * Alarms [Alarms](#alarms)
  * AutoScalingGroupName [XmlStringMaxLen255](#xmlstringmaxlen255)
  * Cooldown [Cooldown](#cooldown)
  * EstimatedInstanceWarmup [EstimatedInstanceWarmup](#estimatedinstancewarmup)
  * MetricAggregationType [XmlStringMaxLen32](#xmlstringmaxlen32)
  * MinAdjustmentMagnitude [MinAdjustmentMagnitude](#minadjustmentmagnitude)
  * MinAdjustmentStep [MinAdjustmentStep](#minadjustmentstep)
  * PolicyARN [ResourceName](#resourcename)
  * PolicyName [XmlStringMaxLen255](#xmlstringmaxlen255)
  * PolicyType [XmlStringMaxLen64](#xmlstringmaxlen64)
  * ScalingAdjustment [PolicyIncrement](#policyincrement)
  * StepAdjustments [StepAdjustments](#stepadjustments)
  * TargetTrackingConfiguration [TargetTrackingConfiguration](#targettrackingconfiguration)

### ScalingProcessQuery
* ScalingProcessQuery `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * ScalingProcesses [ProcessNames](#processnames)

### ScheduledActionNames
* ScheduledActionNames `array`
  * items [ResourceName](#resourcename)

### ScheduledActionsType
* ScheduledActionsType `object`
  * NextToken [XmlString](#xmlstring)
  * ScheduledUpdateGroupActions [ScheduledUpdateGroupActions](#scheduledupdategroupactions)

### ScheduledUpdateGroupAction
* ScheduledUpdateGroupAction `object`: Describes a scheduled update to an Auto Scaling group.
  * AutoScalingGroupName [XmlStringMaxLen255](#xmlstringmaxlen255)
  * DesiredCapacity [AutoScalingGroupDesiredCapacity](#autoscalinggroupdesiredcapacity)
  * EndTime [TimestampType](#timestamptype)
  * MaxSize [AutoScalingGroupMaxSize](#autoscalinggroupmaxsize)
  * MinSize [AutoScalingGroupMinSize](#autoscalinggroupminsize)
  * Recurrence [XmlStringMaxLen255](#xmlstringmaxlen255)
  * ScheduledActionARN [ResourceName](#resourcename)
  * ScheduledActionName [XmlStringMaxLen255](#xmlstringmaxlen255)
  * StartTime [TimestampType](#timestamptype)
  * Time [TimestampType](#timestamptype)

### ScheduledUpdateGroupActions
* ScheduledUpdateGroupActions `array`
  * items [ScheduledUpdateGroupAction](#scheduledupdategroupaction)

### SecurityGroups
* SecurityGroups `array`
  * items [XmlString](#xmlstring)

### ServiceLinkedRoleFailure
* ServiceLinkedRoleFailure `object`: The service-linked role is not yet ready for use.
  * message [XmlStringMaxLen255](#xmlstringmaxlen255)

### SetDesiredCapacityType
* SetDesiredCapacityType `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * DesiredCapacity **required** [AutoScalingGroupDesiredCapacity](#autoscalinggroupdesiredcapacity)
  * HonorCooldown [HonorCooldown](#honorcooldown)

### SetInstanceHealthQuery
* SetInstanceHealthQuery `object`
  * HealthStatus **required** [XmlStringMaxLen32](#xmlstringmaxlen32)
  * InstanceId **required** [XmlStringMaxLen19](#xmlstringmaxlen19)
  * ShouldRespectGracePeriod [ShouldRespectGracePeriod](#shouldrespectgraceperiod)

### SetInstanceProtectionAnswer
* SetInstanceProtectionAnswer `object`

### SetInstanceProtectionQuery
* SetInstanceProtectionQuery `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * InstanceIds **required** [InstanceIds](#instanceids)
  * ProtectedFromScaleIn **required** [ProtectedFromScaleIn](#protectedfromscalein)

### ShouldDecrementDesiredCapacity
* ShouldDecrementDesiredCapacity `boolean`

### ShouldRespectGracePeriod
* ShouldRespectGracePeriod `boolean`

### SpotPrice
* SpotPrice `string`

### StepAdjustment
* StepAdjustment `object`: <p>Describes an adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm.</p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>If you want the adjustment to be triggered when the metric is greater than or equal to 50 and less than 60, specify a lower bound of 0 and an upper bound of 10.</p> </li> <li> <p>If you want the adjustment to be triggered when the metric is greater than 40 and less than or equal to 50, specify a lower bound of -10 and an upper bound of 0.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul>
  * MetricIntervalLowerBound [MetricScale](#metricscale)
  * MetricIntervalUpperBound [MetricScale](#metricscale)
  * ScalingAdjustment **required** [PolicyIncrement](#policyincrement)

### StepAdjustments
* StepAdjustments `array`
  * items [StepAdjustment](#stepadjustment)

### SuspendedProcess
* SuspendedProcess `object`: Describes an Auto Scaling process that has been suspended. For more information, see <a>ProcessType</a>.
  * ProcessName [XmlStringMaxLen255](#xmlstringmaxlen255)
  * SuspensionReason [XmlStringMaxLen255](#xmlstringmaxlen255)

### SuspendedProcesses
* SuspendedProcesses `array`
  * items [SuspendedProcess](#suspendedprocess)

### Tag
* Tag `object`: Describes a tag for an Auto Scaling group.
  * Key **required** [TagKey](#tagkey)
  * PropagateAtLaunch [PropagateAtLaunch](#propagateatlaunch)
  * ResourceId [XmlString](#xmlstring)
  * ResourceType [XmlString](#xmlstring)
  * Value [TagValue](#tagvalue)

### TagDescription
* TagDescription `object`: Describes a tag for an Auto Scaling group.
  * Key [TagKey](#tagkey)
  * PropagateAtLaunch [PropagateAtLaunch](#propagateatlaunch)
  * ResourceId [XmlString](#xmlstring)
  * ResourceType [XmlString](#xmlstring)
  * Value [TagValue](#tagvalue)

### TagDescriptionList
* TagDescriptionList `array`
  * items [TagDescription](#tagdescription)

### TagKey
* TagKey `string`

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### TagsType
* TagsType `object`
  * NextToken [XmlString](#xmlstring)
  * Tags [TagDescriptionList](#tagdescriptionlist)

### TargetGroupARNs
* TargetGroupARNs `array`
  * items [XmlStringMaxLen511](#xmlstringmaxlen511)

### TargetTrackingConfiguration
* TargetTrackingConfiguration `object`: Represents a target tracking policy configuration.
  * CustomizedMetricSpecification [CustomizedMetricSpecification](#customizedmetricspecification)
  * DisableScaleIn [DisableScaleIn](#disablescalein)
  * PredefinedMetricSpecification [PredefinedMetricSpecification](#predefinedmetricspecification)
  * TargetValue **required** [MetricScale](#metricscale)

### TerminateInstanceInAutoScalingGroupType
* TerminateInstanceInAutoScalingGroupType `object`
  * InstanceId **required** [XmlStringMaxLen19](#xmlstringmaxlen19)
  * ShouldDecrementDesiredCapacity **required** [ShouldDecrementDesiredCapacity](#shoulddecrementdesiredcapacity)

### TerminationPolicies
* TerminationPolicies `array`
  * items [XmlStringMaxLen1600](#xmlstringmaxlen1600)

### TimestampType
* TimestampType `string`

### UpdateAutoScalingGroupType
* UpdateAutoScalingGroupType `object`
  * AutoScalingGroupName **required** [ResourceName](#resourcename)
  * AvailabilityZones [AvailabilityZones](#availabilityzones)
  * DefaultCooldown [Cooldown](#cooldown)
  * DesiredCapacity [AutoScalingGroupDesiredCapacity](#autoscalinggroupdesiredcapacity)
  * HealthCheckGracePeriod [HealthCheckGracePeriod](#healthcheckgraceperiod)
  * HealthCheckType [XmlStringMaxLen32](#xmlstringmaxlen32)
  * LaunchConfigurationName [ResourceName](#resourcename)
  * LaunchTemplate [LaunchTemplateSpecification](#launchtemplatespecification)
  * MaxSize [AutoScalingGroupMaxSize](#autoscalinggroupmaxsize)
  * MinSize [AutoScalingGroupMinSize](#autoscalinggroupminsize)
  * NewInstancesProtectedFromScaleIn [InstanceProtected](#instanceprotected)
  * PlacementGroup [XmlStringMaxLen255](#xmlstringmaxlen255)
  * ServiceLinkedRoleARN [ResourceName](#resourcename)
  * TerminationPolicies [TerminationPolicies](#terminationpolicies)
  * VPCZoneIdentifier [XmlStringMaxLen2047](#xmlstringmaxlen2047)

### Values
* Values `array`
  * items [XmlString](#xmlstring)

### XmlString
* XmlString `string`

### XmlStringMaxLen1023
* XmlStringMaxLen1023 `string`

### XmlStringMaxLen1600
* XmlStringMaxLen1600 `string`

### XmlStringMaxLen19
* XmlStringMaxLen19 `string`

### XmlStringMaxLen2047
* XmlStringMaxLen2047 `string`

### XmlStringMaxLen255
* XmlStringMaxLen255 `string`

### XmlStringMaxLen32
* XmlStringMaxLen32 `string`

### XmlStringMaxLen511
* XmlStringMaxLen511 `string`

### XmlStringMaxLen64
* XmlStringMaxLen64 `string`

### XmlStringUserData
* XmlStringUserData `string`


