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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon EC2 Auto Scaling</fullname> <p>Amazon EC2 Auto Scaling is designed to automatically launch or terminate EC2 instances based on user-defined scaling policies, scheduled actions, and health checks. Use this service with AWS Auto Scaling, Amazon CloudWatch, and Elastic Load Balancing.</p> <p>For more information, including information about granting IAM users required permissions for Amazon EC2 Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html">Amazon EC2 Auto Scaling User Guide</a>.</p>

## Actions

### AttachInstances



```js
amazonaws_autoscaling.AttachInstances({
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * InstanceIds `array`
  * AutoScalingGroupName **required** `string`

#### Output
*Output schema unknown*

### AttachInstances



```js
amazonaws_autoscaling.AttachInstances({
  "AutoScalingGroupName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * InstanceIds
    * items [XmlStringMaxLen19](#xmlstringmaxlen19)

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
  * AutoScalingGroupName **required** `string`
  * TargetGroupARNs **required** `array`

#### Output
* output [AttachLoadBalancerTargetGroupsResultType](#attachloadbalancertargetgroupsresulttype)

### AttachLoadBalancerTargetGroups



```js
amazonaws_autoscaling.AttachLoadBalancerTargetGroups({
  "AutoScalingGroupName": null,
  "TargetGroupARNs": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * TargetGroupARNs **required**
    * items [XmlStringMaxLen511](#xmlstringmaxlen511)

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
  * AutoScalingGroupName **required** `string`
  * LoadBalancerNames **required** `array`

#### Output
* output [AttachLoadBalancersResultType](#attachloadbalancersresulttype)

### AttachLoadBalancers



```js
amazonaws_autoscaling.AttachLoadBalancers({
  "AutoScalingGroupName": null,
  "LoadBalancerNames": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * LoadBalancerNames **required**
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)

#### Output
* output [AttachLoadBalancersResultType](#attachloadbalancersresulttype)

### BatchDeleteScheduledAction



```js
amazonaws_autoscaling.BatchDeleteScheduledAction({
  "AutoScalingGroupName": "",
  "ScheduledActionNames": []
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** `string`
  * ScheduledActionNames **required** `array`

#### Output
* output [BatchDeleteScheduledActionAnswer](#batchdeletescheduledactionanswer)

### BatchDeleteScheduledAction



```js
amazonaws_autoscaling.BatchDeleteScheduledAction({
  "AutoScalingGroupName": null,
  "ScheduledActionNames": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * ScheduledActionNames **required**
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)

#### Output
* output [BatchDeleteScheduledActionAnswer](#batchdeletescheduledactionanswer)

### BatchPutScheduledUpdateGroupAction



```js
amazonaws_autoscaling.BatchPutScheduledUpdateGroupAction({
  "AutoScalingGroupName": "",
  "ScheduledUpdateGroupActions": []
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** `string`
  * ScheduledUpdateGroupActions **required** `array`

#### Output
* output [BatchPutScheduledUpdateGroupActionAnswer](#batchputscheduledupdategroupactionanswer)

### BatchPutScheduledUpdateGroupAction



```js
amazonaws_autoscaling.BatchPutScheduledUpdateGroupAction({
  "AutoScalingGroupName": null,
  "ScheduledUpdateGroupActions": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * ScheduledUpdateGroupActions **required**
    * items [ScheduledUpdateGroupActionRequest](#scheduledupdategroupactionrequest)

#### Output
* output [BatchPutScheduledUpdateGroupActionAnswer](#batchputscheduledupdategroupactionanswer)

### CancelInstanceRefresh



```js
amazonaws_autoscaling.CancelInstanceRefresh({
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** `string`

#### Output
* output [CancelInstanceRefreshAnswer](#cancelinstancerefreshanswer)

### CancelInstanceRefresh



```js
amazonaws_autoscaling.CancelInstanceRefresh({
  "AutoScalingGroupName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**

#### Output
* output [CancelInstanceRefreshAnswer](#cancelinstancerefreshanswer)

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
  * LifecycleHookName **required** `string`
  * AutoScalingGroupName **required** `string`
  * LifecycleActionToken `string`
  * LifecycleActionResult **required** `string`
  * InstanceId `string`

#### Output
* output [CompleteLifecycleActionAnswer](#completelifecycleactionanswer)

### CompleteLifecycleAction



```js
amazonaws_autoscaling.CompleteLifecycleAction({
  "LifecycleHookName": null,
  "AutoScalingGroupName": null,
  "LifecycleActionResult": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * InstanceId
  * LifecycleActionResult **required**
  * LifecycleActionToken
  * LifecycleHookName **required**

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
  * AutoScalingGroupName **required** `string`
  * LaunchConfigurationName `string`
  * LaunchTemplate `object`
  * MixedInstancesPolicy `object`
  * InstanceId `string`
  * MinSize **required** `integer`
  * MaxSize **required** `integer`
  * DesiredCapacity `integer`
  * DefaultCooldown `integer`
  * AvailabilityZones `array`
  * LoadBalancerNames `array`
  * TargetGroupARNs `array`
  * HealthCheckType `string`
  * HealthCheckGracePeriod `integer`
  * PlacementGroup `string`
  * VPCZoneIdentifier `string`
  * TerminationPolicies `array`
  * NewInstancesProtectedFromScaleIn `boolean`
  * CapacityRebalance `boolean`
  * LifecycleHookSpecificationList `array`
  * Tags `array`
  * ServiceLinkedRoleARN `string`
  * MaxInstanceLifetime `integer`

#### Output
*Output schema unknown*

### CreateAutoScalingGroup



```js
amazonaws_autoscaling.CreateAutoScalingGroup({
  "AutoScalingGroupName": null,
  "MinSize": null,
  "MaxSize": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * AvailabilityZones
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * CapacityRebalance
  * DefaultCooldown
  * DesiredCapacity
  * HealthCheckGracePeriod
  * HealthCheckType
  * InstanceId
  * LaunchConfigurationName
  * LaunchTemplate
    * LaunchTemplateId
    * LaunchTemplateName
    * Version
  * LifecycleHookSpecificationList
    * items [LifecycleHookSpecification](#lifecyclehookspecification)
  * LoadBalancerNames
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * MaxInstanceLifetime
  * MaxSize **required**
  * MinSize **required**
  * MixedInstancesPolicy
    * InstancesDistribution
      * OnDemandAllocationStrategy
      * OnDemandBaseCapacity
      * OnDemandPercentageAboveBaseCapacity
      * SpotAllocationStrategy
      * SpotInstancePools
      * SpotMaxPrice
    * LaunchTemplate
      * LaunchTemplateSpecification
        * LaunchTemplateId
        * LaunchTemplateName
        * Version
      * Overrides
        * items [LaunchTemplateOverrides](#launchtemplateoverrides)
  * NewInstancesProtectedFromScaleIn
  * PlacementGroup
  * ServiceLinkedRoleARN
  * Tags
    * items [Tag](#tag)
  * TargetGroupARNs
    * items [XmlStringMaxLen511](#xmlstringmaxlen511)
  * TerminationPolicies
    * items [XmlStringMaxLen1600](#xmlstringmaxlen1600)
  * VPCZoneIdentifier

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
  * LaunchConfigurationName **required** `string`
  * ImageId `string`
  * KeyName `string`
  * SecurityGroups `array`
  * ClassicLinkVPCId `string`
  * ClassicLinkVPCSecurityGroups `array`
  * UserData `string`
  * InstanceId `string`
  * InstanceType `string`
  * KernelId `string`
  * RamdiskId `string`
  * BlockDeviceMappings `array`
  * InstanceMonitoring `object`
  * SpotPrice `string`
  * IamInstanceProfile `string`
  * EbsOptimized `boolean`
  * AssociatePublicIpAddress `boolean`
  * PlacementTenancy `string`
  * MetadataOptions `object`

#### Output
*Output schema unknown*

### CreateLaunchConfiguration



```js
amazonaws_autoscaling.CreateLaunchConfiguration({
  "LaunchConfigurationName": null
}, context)
```

#### Input
* input `object`
  * AssociatePublicIpAddress
  * BlockDeviceMappings
    * items [BlockDeviceMapping](#blockdevicemapping)
  * ClassicLinkVPCId
  * ClassicLinkVPCSecurityGroups
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * EbsOptimized
  * IamInstanceProfile
  * ImageId
  * InstanceId
  * InstanceMonitoring
    * Enabled
  * InstanceType
  * KernelId
  * KeyName
  * LaunchConfigurationName **required**
  * MetadataOptions
    * HttpEndpoint
    * HttpPutResponseHopLimit
    * HttpTokens
  * PlacementTenancy
  * RamdiskId
  * SecurityGroups
    * items [XmlString](#xmlstring)
  * SpotPrice
  * UserData

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
  * Tags **required** `array`

#### Output
*Output schema unknown*

### CreateOrUpdateTags



```js
amazonaws_autoscaling.CreateOrUpdateTags({
  "Tags": null
}, context)
```

#### Input
* input `object`
  * Tags **required**
    * items [Tag](#tag)

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
  * AutoScalingGroupName **required** `string`
  * ForceDelete `boolean`

#### Output
*Output schema unknown*

### DeleteAutoScalingGroup



```js
amazonaws_autoscaling.DeleteAutoScalingGroup({
  "AutoScalingGroupName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * ForceDelete

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
  * LaunchConfigurationName **required** `string`

#### Output
*Output schema unknown*

### DeleteLaunchConfiguration



```js
amazonaws_autoscaling.DeleteLaunchConfiguration({
  "LaunchConfigurationName": null
}, context)
```

#### Input
* input `object`
  * LaunchConfigurationName **required**

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
  * LifecycleHookName **required** `string`
  * AutoScalingGroupName **required** `string`

#### Output
* output [DeleteLifecycleHookAnswer](#deletelifecyclehookanswer)

### DeleteLifecycleHook



```js
amazonaws_autoscaling.DeleteLifecycleHook({
  "LifecycleHookName": null,
  "AutoScalingGroupName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * LifecycleHookName **required**

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
  * AutoScalingGroupName **required** `string`
  * TopicARN **required** `string`

#### Output
*Output schema unknown*

### DeleteNotificationConfiguration



```js
amazonaws_autoscaling.DeleteNotificationConfiguration({
  "AutoScalingGroupName": null,
  "TopicARN": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * TopicARN **required**

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
  * AutoScalingGroupName `string`
  * PolicyName **required** `string`

#### Output
*Output schema unknown*

### DeletePolicy



```js
amazonaws_autoscaling.DeletePolicy({
  "PolicyName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName
  * PolicyName **required**

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
  * AutoScalingGroupName **required** `string`
  * ScheduledActionName **required** `string`

#### Output
*Output schema unknown*

### DeleteScheduledAction



```js
amazonaws_autoscaling.DeleteScheduledAction({
  "AutoScalingGroupName": null,
  "ScheduledActionName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * ScheduledActionName **required**

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
  * Tags **required** `array`

#### Output
*Output schema unknown*

### DeleteTags



```js
amazonaws_autoscaling.DeleteTags({
  "Tags": null
}, context)
```

#### Input
* input `object`
  * Tags **required**
    * items [Tag](#tag)

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
  * AutoScalingGroupNames `array`
  * NextToken `string`
  * MaxRecords `integer`

#### Output
* output [AutoScalingGroupsType](#autoscalinggroupstype)

### DescribeAutoScalingGroups



```js
amazonaws_autoscaling.DescribeAutoScalingGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * AutoScalingGroupNames
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * MaxRecords
  * NextToken

#### Output
* output [AutoScalingGroupsType](#autoscalinggroupstype)

### DescribeAutoScalingInstances



```js
amazonaws_autoscaling.DescribeAutoScalingInstances({}, context)
```

#### Input
* input `object`
  * InstanceIds `array`
  * MaxRecords `integer`
  * NextToken `string`

#### Output
* output [AutoScalingInstancesType](#autoscalinginstancestype)

### DescribeAutoScalingInstances



```js
amazonaws_autoscaling.DescribeAutoScalingInstances({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * InstanceIds
    * items [XmlStringMaxLen19](#xmlstringmaxlen19)
  * MaxRecords
  * NextToken

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

### DescribeAutoScalingNotificationTypes



```js
amazonaws_autoscaling.DescribeAutoScalingNotificationTypes({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeAutoScalingNotificationTypesAnswer](#describeautoscalingnotificationtypesanswer)

### DescribeInstanceRefreshes



```js
amazonaws_autoscaling.DescribeInstanceRefreshes({
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** `string`
  * InstanceRefreshIds `array`
  * NextToken `string`
  * MaxRecords `integer`

#### Output
* output [DescribeInstanceRefreshesAnswer](#describeinstancerefreshesanswer)

### DescribeInstanceRefreshes



```js
amazonaws_autoscaling.DescribeInstanceRefreshes({
  "AutoScalingGroupName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * InstanceRefreshIds
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * MaxRecords
  * NextToken

#### Output
* output [DescribeInstanceRefreshesAnswer](#describeinstancerefreshesanswer)

### DescribeLaunchConfigurations



```js
amazonaws_autoscaling.DescribeLaunchConfigurations({}, context)
```

#### Input
* input `object`
  * LaunchConfigurationNames `array`
  * NextToken `string`
  * MaxRecords `integer`

#### Output
* output [LaunchConfigurationsType](#launchconfigurationstype)

### DescribeLaunchConfigurations



```js
amazonaws_autoscaling.DescribeLaunchConfigurations({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * LaunchConfigurationNames
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * MaxRecords
  * NextToken

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
  * AutoScalingGroupName **required** `string`
  * LifecycleHookNames `array`

#### Output
* output [DescribeLifecycleHooksAnswer](#describelifecyclehooksanswer)

### DescribeLifecycleHooks



```js
amazonaws_autoscaling.DescribeLifecycleHooks({
  "AutoScalingGroupName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * LifecycleHookNames
    * items [AsciiStringMaxLen255](#asciistringmaxlen255)

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
  * AutoScalingGroupName **required** `string`
  * NextToken `string`
  * MaxRecords `integer`

#### Output
* output [DescribeLoadBalancerTargetGroupsResponse](#describeloadbalancertargetgroupsresponse)

### DescribeLoadBalancerTargetGroups



```js
amazonaws_autoscaling.DescribeLoadBalancerTargetGroups({
  "AutoScalingGroupName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * MaxRecords
  * NextToken

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
  * AutoScalingGroupName **required** `string`
  * NextToken `string`
  * MaxRecords `integer`

#### Output
* output [DescribeLoadBalancersResponse](#describeloadbalancersresponse)

### DescribeLoadBalancers



```js
amazonaws_autoscaling.DescribeLoadBalancers({
  "AutoScalingGroupName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * MaxRecords
  * NextToken

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
  * AutoScalingGroupNames `array`
  * NextToken `string`
  * MaxRecords `integer`

#### Output
* output [DescribeNotificationConfigurationsAnswer](#describenotificationconfigurationsanswer)

### DescribeNotificationConfigurations



```js
amazonaws_autoscaling.DescribeNotificationConfigurations({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * AutoScalingGroupNames
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * MaxRecords
  * NextToken

#### Output
* output [DescribeNotificationConfigurationsAnswer](#describenotificationconfigurationsanswer)

### DescribePolicies



```js
amazonaws_autoscaling.DescribePolicies({}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName `string`
  * PolicyNames `array`
  * PolicyTypes `array`
  * NextToken `string`
  * MaxRecords `integer`

#### Output
* output [PoliciesType](#policiestype)

### DescribePolicies



```js
amazonaws_autoscaling.DescribePolicies({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * AutoScalingGroupName
  * MaxRecords
  * NextToken
  * PolicyNames
    * items [ResourceName](#resourcename)
  * PolicyTypes
    * items [XmlStringMaxLen64](#xmlstringmaxlen64)

#### Output
* output [PoliciesType](#policiestype)

### DescribeScalingActivities



```js
amazonaws_autoscaling.DescribeScalingActivities({}, context)
```

#### Input
* input `object`
  * ActivityIds `array`
  * AutoScalingGroupName `string`
  * MaxRecords `integer`
  * NextToken `string`

#### Output
* output [ActivitiesType](#activitiestype)

### DescribeScalingActivities



```js
amazonaws_autoscaling.DescribeScalingActivities({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * ActivityIds
    * items [XmlString](#xmlstring)
  * AutoScalingGroupName
  * MaxRecords
  * NextToken

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
  * AutoScalingGroupName `string`
  * ScheduledActionNames `array`
  * StartTime `string`
  * EndTime `string`
  * NextToken `string`
  * MaxRecords `integer`

#### Output
* output [ScheduledActionsType](#scheduledactionstype)

### DescribeScheduledActions



```js
amazonaws_autoscaling.DescribeScheduledActions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * AutoScalingGroupName
  * EndTime
  * MaxRecords
  * NextToken
  * ScheduledActionNames
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * StartTime

#### Output
* output [ScheduledActionsType](#scheduledactionstype)

### DescribeTags



```js
amazonaws_autoscaling.DescribeTags({}, context)
```

#### Input
* input `object`
  * Filters `array`
  * NextToken `string`
  * MaxRecords `integer`

#### Output
* output [TagsType](#tagstype)

### DescribeTags



```js
amazonaws_autoscaling.DescribeTags({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * Filters
    * items [Filter](#filter)
  * MaxRecords
  * NextToken

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
  * InstanceIds `array`
  * AutoScalingGroupName **required** `string`
  * ShouldDecrementDesiredCapacity **required** `boolean`

#### Output
* output [DetachInstancesAnswer](#detachinstancesanswer)

### DetachInstances



```js
amazonaws_autoscaling.DetachInstances({
  "AutoScalingGroupName": null,
  "ShouldDecrementDesiredCapacity": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * InstanceIds
    * items [XmlStringMaxLen19](#xmlstringmaxlen19)
  * ShouldDecrementDesiredCapacity **required**

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
  * AutoScalingGroupName **required** `string`
  * TargetGroupARNs **required** `array`

#### Output
* output [DetachLoadBalancerTargetGroupsResultType](#detachloadbalancertargetgroupsresulttype)

### DetachLoadBalancerTargetGroups



```js
amazonaws_autoscaling.DetachLoadBalancerTargetGroups({
  "AutoScalingGroupName": null,
  "TargetGroupARNs": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * TargetGroupARNs **required**
    * items [XmlStringMaxLen511](#xmlstringmaxlen511)

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
  * AutoScalingGroupName **required** `string`
  * LoadBalancerNames **required** `array`

#### Output
* output [DetachLoadBalancersResultType](#detachloadbalancersresulttype)

### DetachLoadBalancers



```js
amazonaws_autoscaling.DetachLoadBalancers({
  "AutoScalingGroupName": null,
  "LoadBalancerNames": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * LoadBalancerNames **required**
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)

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
  * AutoScalingGroupName **required** `string`
  * Metrics `array`

#### Output
*Output schema unknown*

### DisableMetricsCollection



```js
amazonaws_autoscaling.DisableMetricsCollection({
  "AutoScalingGroupName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * Metrics
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)

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
  * AutoScalingGroupName **required** `string`
  * Metrics `array`
  * Granularity **required** `string`

#### Output
*Output schema unknown*

### EnableMetricsCollection



```js
amazonaws_autoscaling.EnableMetricsCollection({
  "AutoScalingGroupName": null,
  "Granularity": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * Granularity **required**
  * Metrics
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)

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
  * InstanceIds `array`
  * AutoScalingGroupName **required** `string`
  * ShouldDecrementDesiredCapacity **required** `boolean`

#### Output
* output [EnterStandbyAnswer](#enterstandbyanswer)

### EnterStandby



```js
amazonaws_autoscaling.EnterStandby({
  "AutoScalingGroupName": null,
  "ShouldDecrementDesiredCapacity": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * InstanceIds
    * items [XmlStringMaxLen19](#xmlstringmaxlen19)
  * ShouldDecrementDesiredCapacity **required**

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
  * AutoScalingGroupName `string`
  * PolicyName **required** `string`
  * HonorCooldown `boolean`
  * MetricValue `number`
  * BreachThreshold `number`

#### Output
*Output schema unknown*

### ExecutePolicy



```js
amazonaws_autoscaling.ExecutePolicy({
  "PolicyName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName
  * BreachThreshold
  * HonorCooldown
  * MetricValue
  * PolicyName **required**

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
  * InstanceIds `array`
  * AutoScalingGroupName **required** `string`

#### Output
* output [ExitStandbyAnswer](#exitstandbyanswer)

### ExitStandby



```js
amazonaws_autoscaling.ExitStandby({
  "AutoScalingGroupName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * InstanceIds
    * items [XmlStringMaxLen19](#xmlstringmaxlen19)

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
  * LifecycleHookName **required** `string`
  * AutoScalingGroupName **required** `string`
  * LifecycleTransition `string`
  * RoleARN `string`
  * NotificationTargetARN `string`
  * NotificationMetadata `string`
  * HeartbeatTimeout `integer`
  * DefaultResult `string`

#### Output
* output [PutLifecycleHookAnswer](#putlifecyclehookanswer)

### PutLifecycleHook



```js
amazonaws_autoscaling.PutLifecycleHook({
  "LifecycleHookName": null,
  "AutoScalingGroupName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * DefaultResult
  * HeartbeatTimeout
  * LifecycleHookName **required**
  * LifecycleTransition
  * NotificationMetadata
  * NotificationTargetARN
  * RoleARN

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
  * AutoScalingGroupName **required** `string`
  * TopicARN **required** `string`
  * NotificationTypes **required** `array`

#### Output
*Output schema unknown*

### PutNotificationConfiguration



```js
amazonaws_autoscaling.PutNotificationConfiguration({
  "AutoScalingGroupName": null,
  "TopicARN": null,
  "NotificationTypes": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * NotificationTypes **required**
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * TopicARN **required**

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
  * AutoScalingGroupName **required** `string`
  * PolicyName **required** `string`
  * PolicyType `string`
  * AdjustmentType `string`
  * MinAdjustmentStep `integer`
  * MinAdjustmentMagnitude `integer`
  * ScalingAdjustment `integer`
  * Cooldown `integer`
  * MetricAggregationType `string`
  * StepAdjustments `array`
  * EstimatedInstanceWarmup `integer`
  * TargetTrackingConfiguration `object`
  * Enabled `boolean`

#### Output
* output [PolicyARNType](#policyarntype)

### PutScalingPolicy



```js
amazonaws_autoscaling.PutScalingPolicy({
  "AutoScalingGroupName": null,
  "PolicyName": null
}, context)
```

#### Input
* input `object`
  * AdjustmentType
  * AutoScalingGroupName **required**
  * Cooldown
  * Enabled
  * EstimatedInstanceWarmup
  * MetricAggregationType
  * MinAdjustmentMagnitude
  * MinAdjustmentStep
  * PolicyName **required**
  * PolicyType
  * ScalingAdjustment
  * StepAdjustments
    * items [StepAdjustment](#stepadjustment)
  * TargetTrackingConfiguration
    * CustomizedMetricSpecification
      * Dimensions
        * items [MetricDimension](#metricdimension)
      * MetricName **required**
      * Namespace **required**
      * Statistic **required**
      * Unit
    * DisableScaleIn
    * PredefinedMetricSpecification
      * PredefinedMetricType **required**
      * ResourceLabel
    * TargetValue **required**

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
  * AutoScalingGroupName **required** `string`
  * ScheduledActionName **required** `string`
  * Time `string`
  * StartTime `string`
  * EndTime `string`
  * Recurrence `string`
  * MinSize `integer`
  * MaxSize `integer`
  * DesiredCapacity `integer`

#### Output
*Output schema unknown*

### PutScheduledUpdateGroupAction



```js
amazonaws_autoscaling.PutScheduledUpdateGroupAction({
  "AutoScalingGroupName": null,
  "ScheduledActionName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * DesiredCapacity
  * EndTime
  * MaxSize
  * MinSize
  * Recurrence
  * ScheduledActionName **required**
  * StartTime
  * Time

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
  * LifecycleHookName **required** `string`
  * AutoScalingGroupName **required** `string`
  * LifecycleActionToken `string`
  * InstanceId `string`

#### Output
* output [RecordLifecycleActionHeartbeatAnswer](#recordlifecycleactionheartbeatanswer)

### RecordLifecycleActionHeartbeat



```js
amazonaws_autoscaling.RecordLifecycleActionHeartbeat({
  "LifecycleHookName": null,
  "AutoScalingGroupName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * InstanceId
  * LifecycleActionToken
  * LifecycleHookName **required**

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
  * AutoScalingGroupName **required** `string`
  * ScalingProcesses `array`

#### Output
*Output schema unknown*

### ResumeProcesses



```js
amazonaws_autoscaling.ResumeProcesses({
  "AutoScalingGroupName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * ScalingProcesses
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)

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
  * AutoScalingGroupName **required** `string`
  * DesiredCapacity **required** `integer`
  * HonorCooldown `boolean`

#### Output
*Output schema unknown*

### SetDesiredCapacity



```js
amazonaws_autoscaling.SetDesiredCapacity({
  "AutoScalingGroupName": null,
  "DesiredCapacity": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * DesiredCapacity **required**
  * HonorCooldown

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
  * InstanceId **required** `string`
  * HealthStatus **required** `string`
  * ShouldRespectGracePeriod `boolean`

#### Output
*Output schema unknown*

### SetInstanceHealth



```js
amazonaws_autoscaling.SetInstanceHealth({
  "InstanceId": null,
  "HealthStatus": null
}, context)
```

#### Input
* input `object`
  * HealthStatus **required**
  * InstanceId **required**
  * ShouldRespectGracePeriod

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
  * InstanceIds **required** `array`
  * AutoScalingGroupName **required** `string`
  * ProtectedFromScaleIn **required** `boolean`

#### Output
* output [SetInstanceProtectionAnswer](#setinstanceprotectionanswer)

### SetInstanceProtection



```js
amazonaws_autoscaling.SetInstanceProtection({
  "InstanceIds": null,
  "AutoScalingGroupName": null,
  "ProtectedFromScaleIn": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * InstanceIds **required**
    * items [XmlStringMaxLen19](#xmlstringmaxlen19)
  * ProtectedFromScaleIn **required**

#### Output
* output [SetInstanceProtectionAnswer](#setinstanceprotectionanswer)

### StartInstanceRefresh



```js
amazonaws_autoscaling.StartInstanceRefresh({
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** `string`
  * Strategy `string`
  * Preferences `object`

#### Output
* output [StartInstanceRefreshAnswer](#startinstancerefreshanswer)

### StartInstanceRefresh



```js
amazonaws_autoscaling.StartInstanceRefresh({
  "AutoScalingGroupName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * Preferences
    * InstanceWarmup
    * MinHealthyPercentage
  * Strategy

#### Output
* output [StartInstanceRefreshAnswer](#startinstancerefreshanswer)

### SuspendProcesses



```js
amazonaws_autoscaling.SuspendProcesses({
  "AutoScalingGroupName": ""
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required** `string`
  * ScalingProcesses `array`

#### Output
*Output schema unknown*

### SuspendProcesses



```js
amazonaws_autoscaling.SuspendProcesses({
  "AutoScalingGroupName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * ScalingProcesses
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)

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
  * InstanceId **required** `string`
  * ShouldDecrementDesiredCapacity **required** `boolean`

#### Output
* output [ActivityType](#activitytype)

### TerminateInstanceInAutoScalingGroup



```js
amazonaws_autoscaling.TerminateInstanceInAutoScalingGroup({
  "InstanceId": null,
  "ShouldDecrementDesiredCapacity": null
}, context)
```

#### Input
* input `object`
  * InstanceId **required**
  * ShouldDecrementDesiredCapacity **required**

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
  * AutoScalingGroupName **required** `string`
  * LaunchConfigurationName `string`
  * LaunchTemplate `object`
  * MixedInstancesPolicy `object`
  * MinSize `integer`
  * MaxSize `integer`
  * DesiredCapacity `integer`
  * DefaultCooldown `integer`
  * AvailabilityZones `array`
  * HealthCheckType `string`
  * HealthCheckGracePeriod `integer`
  * PlacementGroup `string`
  * VPCZoneIdentifier `string`
  * TerminationPolicies `array`
  * NewInstancesProtectedFromScaleIn `boolean`
  * ServiceLinkedRoleARN `string`
  * MaxInstanceLifetime `integer`
  * CapacityRebalance `boolean`

#### Output
*Output schema unknown*

### UpdateAutoScalingGroup



```js
amazonaws_autoscaling.UpdateAutoScalingGroup({
  "AutoScalingGroupName": null
}, context)
```

#### Input
* input `object`
  * AutoScalingGroupName **required**
  * AvailabilityZones
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * CapacityRebalance
  * DefaultCooldown
  * DesiredCapacity
  * HealthCheckGracePeriod
  * HealthCheckType
  * LaunchConfigurationName
  * LaunchTemplate
    * LaunchTemplateId
    * LaunchTemplateName
    * Version
  * MaxInstanceLifetime
  * MaxSize
  * MinSize
  * MixedInstancesPolicy
    * InstancesDistribution
      * OnDemandAllocationStrategy
      * OnDemandBaseCapacity
      * OnDemandPercentageAboveBaseCapacity
      * SpotAllocationStrategy
      * SpotInstancePools
      * SpotMaxPrice
    * LaunchTemplate
      * LaunchTemplateSpecification
        * LaunchTemplateId
        * LaunchTemplateName
        * Version
      * Overrides
        * items [LaunchTemplateOverrides](#launchtemplateoverrides)
  * NewInstancesProtectedFromScaleIn
  * PlacementGroup
  * ServiceLinkedRoleARN
  * TerminationPolicies
    * items [XmlStringMaxLen1600](#xmlstringmaxlen1600)
  * VPCZoneIdentifier

#### Output
*Output schema unknown*



## Definitions

### ActiveInstanceRefreshNotFoundFault


### Activities
* Activities `array`
  * items [Activity](#activity)

### ActivitiesType
* ActivitiesType `object`
  * Activities **required**
    * items [Activity](#activity)
  * NextToken

### Activity
* Activity `object`: Describes scaling activity, which is a long-running process that represents a change to your Auto Scaling group, such as changing its size or replacing an instance.
  * ActivityId **required**
  * AutoScalingGroupName **required**
  * Cause **required**
  * Description
  * Details
  * EndTime
  * Progress
  * StartTime **required**
  * StatusCode **required**
  * StatusMessage

### ActivityIds
* ActivityIds `array`
  * items [XmlString](#xmlstring)

### ActivityType
* ActivityType `object`
  * Activity
    * ActivityId **required**
    * AutoScalingGroupName **required**
    * Cause **required**
    * Description
    * Details
    * EndTime
    * Progress
    * StartTime **required**
    * StatusCode **required**
    * StatusMessage

### AdjustmentType
* AdjustmentType `object`: Describes a policy adjustment type.
  * AdjustmentType

### AdjustmentTypes
* AdjustmentTypes `array`
  * items [AdjustmentType](#adjustmenttype)

### Alarm
* Alarm `object`: Describes an alarm.
  * AlarmARN
  * AlarmName

### Alarms
* Alarms `array`
  * items [Alarm](#alarm)

### AlreadyExistsFault


### AsciiStringMaxLen255
* AsciiStringMaxLen255 `string`

### AssociatePublicIpAddress
* AssociatePublicIpAddress `boolean`

### AttachInstancesQuery
* AttachInstancesQuery `object`
  * AutoScalingGroupName **required**
  * InstanceIds
    * items [XmlStringMaxLen19](#xmlstringmaxlen19)

### AttachLoadBalancerTargetGroupsResultType
* AttachLoadBalancerTargetGroupsResultType `object`

### AttachLoadBalancerTargetGroupsType
* AttachLoadBalancerTargetGroupsType `object`
  * AutoScalingGroupName **required**
  * TargetGroupARNs **required**
    * items [XmlStringMaxLen511](#xmlstringmaxlen511)

### AttachLoadBalancersResultType
* AttachLoadBalancersResultType `object`

### AttachLoadBalancersType
* AttachLoadBalancersType `object`
  * AutoScalingGroupName **required**
  * LoadBalancerNames **required**
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### AutoScalingGroup
* AutoScalingGroup `object`: Describes an Auto Scaling group.
  * AutoScalingGroupARN
  * AutoScalingGroupName **required**
  * AvailabilityZones **required**
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * CapacityRebalance
  * CreatedTime **required**
  * DefaultCooldown **required**
  * DesiredCapacity **required**
  * EnabledMetrics
    * items [EnabledMetric](#enabledmetric)
  * HealthCheckGracePeriod
  * HealthCheckType **required**
  * Instances
    * items [Instance](#instance)
  * LaunchConfigurationName
  * LaunchTemplate
    * LaunchTemplateId
    * LaunchTemplateName
    * Version
  * LoadBalancerNames
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * MaxInstanceLifetime
  * MaxSize **required**
  * MinSize **required**
  * MixedInstancesPolicy
    * InstancesDistribution
      * OnDemandAllocationStrategy
      * OnDemandBaseCapacity
      * OnDemandPercentageAboveBaseCapacity
      * SpotAllocationStrategy
      * SpotInstancePools
      * SpotMaxPrice
    * LaunchTemplate
      * LaunchTemplateSpecification
        * LaunchTemplateId
        * LaunchTemplateName
        * Version
      * Overrides
        * items [LaunchTemplateOverrides](#launchtemplateoverrides)
  * NewInstancesProtectedFromScaleIn
  * PlacementGroup
  * ServiceLinkedRoleARN
  * Status
  * SuspendedProcesses
    * items [SuspendedProcess](#suspendedprocess)
  * Tags
    * items [TagDescription](#tagdescription)
  * TargetGroupARNs
    * items [XmlStringMaxLen511](#xmlstringmaxlen511)
  * TerminationPolicies
    * items [XmlStringMaxLen1600](#xmlstringmaxlen1600)
  * VPCZoneIdentifier

### AutoScalingGroupDesiredCapacity
* AutoScalingGroupDesiredCapacity `integer`

### AutoScalingGroupMaxSize
* AutoScalingGroupMaxSize `integer`

### AutoScalingGroupMinSize
* AutoScalingGroupMinSize `integer`

### AutoScalingGroupNames
* AutoScalingGroupNames `array`
  * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### AutoScalingGroupNamesType
* AutoScalingGroupNamesType `object`
  * AutoScalingGroupNames
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * MaxRecords
  * NextToken

### AutoScalingGroups
* AutoScalingGroups `array`
  * items [AutoScalingGroup](#autoscalinggroup)

### AutoScalingGroupsType
* AutoScalingGroupsType `object`
  * AutoScalingGroups **required**
    * items [AutoScalingGroup](#autoscalinggroup)
  * NextToken

### AutoScalingInstanceDetails
* AutoScalingInstanceDetails `object`: Describes an EC2 instance associated with an Auto Scaling group.
  * AutoScalingGroupName **required**
  * AvailabilityZone **required**
  * HealthStatus **required**
  * InstanceId **required**
  * InstanceType
  * LaunchConfigurationName
  * LaunchTemplate
    * LaunchTemplateId
    * LaunchTemplateName
    * Version
  * LifecycleState **required**
  * ProtectedFromScaleIn **required**
  * WeightedCapacity

### AutoScalingInstances
* AutoScalingInstances `array`
  * items [AutoScalingInstanceDetails](#autoscalinginstancedetails)

### AutoScalingInstancesType
* AutoScalingInstancesType `object`
  * AutoScalingInstances
    * items [AutoScalingInstanceDetails](#autoscalinginstancedetails)
  * NextToken

### AutoScalingNotificationTypes
* AutoScalingNotificationTypes `array`
  * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### AvailabilityZones
* AvailabilityZones `array`
  * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### BatchDeleteScheduledActionAnswer
* BatchDeleteScheduledActionAnswer `object`
  * FailedScheduledActions
    * items [FailedScheduledUpdateGroupActionRequest](#failedscheduledupdategroupactionrequest)

### BatchDeleteScheduledActionType
* BatchDeleteScheduledActionType `object`
  * AutoScalingGroupName **required**
  * ScheduledActionNames **required**
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### BatchPutScheduledUpdateGroupActionAnswer
* BatchPutScheduledUpdateGroupActionAnswer `object`
  * FailedScheduledUpdateGroupActions
    * items [FailedScheduledUpdateGroupActionRequest](#failedscheduledupdategroupactionrequest)

### BatchPutScheduledUpdateGroupActionType
* BatchPutScheduledUpdateGroupActionType `object`
  * AutoScalingGroupName **required**
  * ScheduledUpdateGroupActions **required**
    * items [ScheduledUpdateGroupActionRequest](#scheduledupdategroupactionrequest)

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
  * DeviceName **required**
  * Ebs
    * DeleteOnTermination
    * Encrypted
    * Iops
    * SnapshotId
    * VolumeSize
    * VolumeType
  * NoDevice
  * VirtualName

### BlockDeviceMappings
* BlockDeviceMappings `array`
  * items [BlockDeviceMapping](#blockdevicemapping)

### CancelInstanceRefreshAnswer
* CancelInstanceRefreshAnswer `object`
  * InstanceRefreshId

### CancelInstanceRefreshType
* CancelInstanceRefreshType `object`
  * AutoScalingGroupName **required**

### CapacityRebalanceEnabled
* CapacityRebalanceEnabled `boolean`

### ClassicLinkVPCSecurityGroups
* ClassicLinkVPCSecurityGroups `array`
  * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### CompleteLifecycleActionAnswer
* CompleteLifecycleActionAnswer `object`

### CompleteLifecycleActionType
* CompleteLifecycleActionType `object`
  * AutoScalingGroupName **required**
  * InstanceId
  * LifecycleActionResult **required**
  * LifecycleActionToken
  * LifecycleHookName **required**

### Cooldown
* Cooldown `integer`

### CreateAutoScalingGroupType
* CreateAutoScalingGroupType `object`
  * AutoScalingGroupName **required**
  * AvailabilityZones
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * CapacityRebalance
  * DefaultCooldown
  * DesiredCapacity
  * HealthCheckGracePeriod
  * HealthCheckType
  * InstanceId
  * LaunchConfigurationName
  * LaunchTemplate
    * LaunchTemplateId
    * LaunchTemplateName
    * Version
  * LifecycleHookSpecificationList
    * items [LifecycleHookSpecification](#lifecyclehookspecification)
  * LoadBalancerNames
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * MaxInstanceLifetime
  * MaxSize **required**
  * MinSize **required**
  * MixedInstancesPolicy
    * InstancesDistribution
      * OnDemandAllocationStrategy
      * OnDemandBaseCapacity
      * OnDemandPercentageAboveBaseCapacity
      * SpotAllocationStrategy
      * SpotInstancePools
      * SpotMaxPrice
    * LaunchTemplate
      * LaunchTemplateSpecification
        * LaunchTemplateId
        * LaunchTemplateName
        * Version
      * Overrides
        * items [LaunchTemplateOverrides](#launchtemplateoverrides)
  * NewInstancesProtectedFromScaleIn
  * PlacementGroup
  * ServiceLinkedRoleARN
  * Tags
    * items [Tag](#tag)
  * TargetGroupARNs
    * items [XmlStringMaxLen511](#xmlstringmaxlen511)
  * TerminationPolicies
    * items [XmlStringMaxLen1600](#xmlstringmaxlen1600)
  * VPCZoneIdentifier

### CreateLaunchConfigurationType
* CreateLaunchConfigurationType `object`
  * AssociatePublicIpAddress
  * BlockDeviceMappings
    * items [BlockDeviceMapping](#blockdevicemapping)
  * ClassicLinkVPCId
  * ClassicLinkVPCSecurityGroups
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * EbsOptimized
  * IamInstanceProfile
  * ImageId
  * InstanceId
  * InstanceMonitoring
    * Enabled
  * InstanceType
  * KernelId
  * KeyName
  * LaunchConfigurationName **required**
  * MetadataOptions
    * HttpEndpoint
    * HttpPutResponseHopLimit
    * HttpTokens
  * PlacementTenancy
  * RamdiskId
  * SecurityGroups
    * items [XmlString](#xmlstring)
  * SpotPrice
  * UserData

### CreateOrUpdateTagsType
* CreateOrUpdateTagsType `object`
  * Tags **required**
    * items [Tag](#tag)

### CustomizedMetricSpecification
* CustomizedMetricSpecification `object`: <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases.</p> </li> </ul> <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a>.</p>
  * Dimensions
    * items [MetricDimension](#metricdimension)
  * MetricName **required**
  * Namespace **required**
  * Statistic **required**
  * Unit

### DeleteAutoScalingGroupType
* DeleteAutoScalingGroupType `object`
  * AutoScalingGroupName **required**
  * ForceDelete

### DeleteLifecycleHookAnswer
* DeleteLifecycleHookAnswer `object`

### DeleteLifecycleHookType
* DeleteLifecycleHookType `object`
  * AutoScalingGroupName **required**
  * LifecycleHookName **required**

### DeleteNotificationConfigurationType
* DeleteNotificationConfigurationType `object`
  * AutoScalingGroupName **required**
  * TopicARN **required**

### DeletePolicyType
* DeletePolicyType `object`
  * AutoScalingGroupName
  * PolicyName **required**

### DeleteScheduledActionType
* DeleteScheduledActionType `object`
  * AutoScalingGroupName **required**
  * ScheduledActionName **required**

### DeleteTagsType
* DeleteTagsType `object`
  * Tags **required**
    * items [Tag](#tag)

### DescribeAccountLimitsAnswer
* DescribeAccountLimitsAnswer `object`
  * MaxNumberOfAutoScalingGroups
  * MaxNumberOfLaunchConfigurations
  * NumberOfAutoScalingGroups
  * NumberOfLaunchConfigurations

### DescribeAdjustmentTypesAnswer
* DescribeAdjustmentTypesAnswer `object`
  * AdjustmentTypes
    * items [AdjustmentType](#adjustmenttype)

### DescribeAutoScalingInstancesType
* DescribeAutoScalingInstancesType `object`
  * InstanceIds
    * items [XmlStringMaxLen19](#xmlstringmaxlen19)
  * MaxRecords
  * NextToken

### DescribeAutoScalingNotificationTypesAnswer
* DescribeAutoScalingNotificationTypesAnswer `object`
  * AutoScalingNotificationTypes
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### DescribeInstanceRefreshesAnswer
* DescribeInstanceRefreshesAnswer `object`
  * InstanceRefreshes
    * items [InstanceRefresh](#instancerefresh)
  * NextToken

### DescribeInstanceRefreshesType
* DescribeInstanceRefreshesType `object`
  * AutoScalingGroupName **required**
  * InstanceRefreshIds
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * MaxRecords
  * NextToken

### DescribeLifecycleHookTypesAnswer
* DescribeLifecycleHookTypesAnswer `object`
  * LifecycleHookTypes
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### DescribeLifecycleHooksAnswer
* DescribeLifecycleHooksAnswer `object`
  * LifecycleHooks
    * items [LifecycleHook](#lifecyclehook)

### DescribeLifecycleHooksType
* DescribeLifecycleHooksType `object`
  * AutoScalingGroupName **required**
  * LifecycleHookNames
    * items [AsciiStringMaxLen255](#asciistringmaxlen255)

### DescribeLoadBalancerTargetGroupsRequest
* DescribeLoadBalancerTargetGroupsRequest `object`
  * AutoScalingGroupName **required**
  * MaxRecords
  * NextToken

### DescribeLoadBalancerTargetGroupsResponse
* DescribeLoadBalancerTargetGroupsResponse `object`
  * LoadBalancerTargetGroups
    * items [LoadBalancerTargetGroupState](#loadbalancertargetgroupstate)
  * NextToken

### DescribeLoadBalancersRequest
* DescribeLoadBalancersRequest `object`
  * AutoScalingGroupName **required**
  * MaxRecords
  * NextToken

### DescribeLoadBalancersResponse
* DescribeLoadBalancersResponse `object`
  * LoadBalancers
    * items [LoadBalancerState](#loadbalancerstate)
  * NextToken

### DescribeMetricCollectionTypesAnswer
* DescribeMetricCollectionTypesAnswer `object`
  * Granularities
    * items [MetricGranularityType](#metricgranularitytype)
  * Metrics
    * items [MetricCollectionType](#metriccollectiontype)

### DescribeNotificationConfigurationsAnswer
* DescribeNotificationConfigurationsAnswer `object`
  * NextToken
  * NotificationConfigurations **required**
    * items [NotificationConfiguration](#notificationconfiguration)

### DescribeNotificationConfigurationsType
* DescribeNotificationConfigurationsType `object`
  * AutoScalingGroupNames
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * MaxRecords
  * NextToken

### DescribePoliciesType
* DescribePoliciesType `object`
  * AutoScalingGroupName
  * MaxRecords
  * NextToken
  * PolicyNames
    * items [ResourceName](#resourcename)
  * PolicyTypes
    * items [XmlStringMaxLen64](#xmlstringmaxlen64)

### DescribeScalingActivitiesType
* DescribeScalingActivitiesType `object`
  * ActivityIds
    * items [XmlString](#xmlstring)
  * AutoScalingGroupName
  * MaxRecords
  * NextToken

### DescribeScheduledActionsType
* DescribeScheduledActionsType `object`
  * AutoScalingGroupName
  * EndTime
  * MaxRecords
  * NextToken
  * ScheduledActionNames
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * StartTime

### DescribeTagsType
* DescribeTagsType `object`
  * Filters
    * items [Filter](#filter)
  * MaxRecords
  * NextToken

### DescribeTerminationPolicyTypesAnswer
* DescribeTerminationPolicyTypesAnswer `object`
  * TerminationPolicyTypes
    * items [XmlStringMaxLen1600](#xmlstringmaxlen1600)

### DetachInstancesAnswer
* DetachInstancesAnswer `object`
  * Activities
    * items [Activity](#activity)

### DetachInstancesQuery
* DetachInstancesQuery `object`
  * AutoScalingGroupName **required**
  * InstanceIds
    * items [XmlStringMaxLen19](#xmlstringmaxlen19)
  * ShouldDecrementDesiredCapacity **required**

### DetachLoadBalancerTargetGroupsResultType
* DetachLoadBalancerTargetGroupsResultType `object`

### DetachLoadBalancerTargetGroupsType
* DetachLoadBalancerTargetGroupsType `object`
  * AutoScalingGroupName **required**
  * TargetGroupARNs **required**
    * items [XmlStringMaxLen511](#xmlstringmaxlen511)

### DetachLoadBalancersResultType
* DetachLoadBalancersResultType `object`

### DetachLoadBalancersType
* DetachLoadBalancersType `object`
  * AutoScalingGroupName **required**
  * LoadBalancerNames **required**
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### DisableMetricsCollectionQuery
* DisableMetricsCollectionQuery `object`
  * AutoScalingGroupName **required**
  * Metrics
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### DisableScaleIn
* DisableScaleIn `boolean`

### Ebs
* Ebs `object`: Describes information used to set up an Amazon EBS volume specified in a block device mapping.
  * DeleteOnTermination
  * Encrypted
  * Iops
  * SnapshotId
  * VolumeSize
  * VolumeType

### EbsOptimized
* EbsOptimized `boolean`

### EnableMetricsCollectionQuery
* EnableMetricsCollectionQuery `object`
  * AutoScalingGroupName **required**
  * Granularity **required**
  * Metrics
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### EnabledMetric
* EnabledMetric `object`: Describes an enabled metric.
  * Granularity
  * Metric

### EnabledMetrics
* EnabledMetrics `array`
  * items [EnabledMetric](#enabledmetric)

### EnterStandbyAnswer
* EnterStandbyAnswer `object`
  * Activities
    * items [Activity](#activity)

### EnterStandbyQuery
* EnterStandbyQuery `object`
  * AutoScalingGroupName **required**
  * InstanceIds
    * items [XmlStringMaxLen19](#xmlstringmaxlen19)
  * ShouldDecrementDesiredCapacity **required**

### EstimatedInstanceWarmup
* EstimatedInstanceWarmup `integer`

### ExecutePolicyType
* ExecutePolicyType `object`
  * AutoScalingGroupName
  * BreachThreshold
  * HonorCooldown
  * MetricValue
  * PolicyName **required**

### ExitStandbyAnswer
* ExitStandbyAnswer `object`
  * Activities
    * items [Activity](#activity)

### ExitStandbyQuery
* ExitStandbyQuery `object`
  * AutoScalingGroupName **required**
  * InstanceIds
    * items [XmlStringMaxLen19](#xmlstringmaxlen19)

### FailedScheduledUpdateGroupActionRequest
* FailedScheduledUpdateGroupActionRequest `object`: Describes a scheduled action that could not be created, updated, or deleted.
  * ErrorCode
  * ErrorMessage
  * ScheduledActionName **required**

### FailedScheduledUpdateGroupActionRequests
* FailedScheduledUpdateGroupActionRequests `array`
  * items [FailedScheduledUpdateGroupActionRequest](#failedscheduledupdategroupactionrequest)

### Filter
* Filter `object`: <p>Describes a filter that is used to return a more specific list of results when describing tags.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html">Tagging Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
  * Name
  * Values
    * items [XmlString](#xmlstring)

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
  * AvailabilityZone **required**
  * HealthStatus **required**
  * InstanceId **required**
  * InstanceType
  * LaunchConfigurationName
  * LaunchTemplate
    * LaunchTemplateId
    * LaunchTemplateName
    * Version
  * LifecycleState **required**
  * ProtectedFromScaleIn **required**
  * WeightedCapacity

### InstanceIds
* InstanceIds `array`
  * items [XmlStringMaxLen19](#xmlstringmaxlen19)

### InstanceMetadataEndpointState
* InstanceMetadataEndpointState `string` (values: disabled, enabled)

### InstanceMetadataHttpPutResponseHopLimit
* InstanceMetadataHttpPutResponseHopLimit `integer`

### InstanceMetadataHttpTokensState
* InstanceMetadataHttpTokensState `string` (values: optional, required)

### InstanceMetadataOptions
* InstanceMetadataOptions `object`: The metadata options for the instances. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds">Configuring the Instance Metadata Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
  * HttpEndpoint
  * HttpPutResponseHopLimit
  * HttpTokens

### InstanceMonitoring
* InstanceMonitoring `object`: Describes whether detailed monitoring is enabled for the Auto Scaling instances.
  * Enabled

### InstanceProtected
* InstanceProtected `boolean`

### InstanceRefresh
* InstanceRefresh `object`: Describes an instance refresh for an Auto Scaling group. 
  * AutoScalingGroupName
  * EndTime
  * InstanceRefreshId
  * InstancesToUpdate
  * PercentageComplete
  * StartTime
  * Status
  * StatusReason

### InstanceRefreshIds
* InstanceRefreshIds `array`
  * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### InstanceRefreshInProgressFault


### InstanceRefreshStatus
* InstanceRefreshStatus `string` (values: Pending, InProgress, Successful, Failed, Cancelling, Cancelled)

### InstanceRefreshes
* InstanceRefreshes `array`
  * items [InstanceRefresh](#instancerefresh)

### Instances
* Instances `array`
  * items [Instance](#instance)

### InstancesDistribution
* InstancesDistribution `object`: <p>Describes an instances distribution for an Auto Scaling group with a <a>MixedInstancesPolicy</a>.</p> <p>The instances distribution specifies the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances, and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacities.</p> <p>When you update <code>SpotAllocationStrategy</code>, <code>SpotInstancePools</code>, or <code>SpotMaxPrice</code>, this update action does not deploy any changes across the running Amazon EC2 instances in the group. Your existing Spot Instances continue to run as long as the maximum price for those instances is higher than the current Spot price. When scale out occurs, Amazon EC2 Auto Scaling launches instances based on the new settings. When scale in occurs, Amazon EC2 Auto Scaling terminates instances according to the group's termination policies.</p>
  * OnDemandAllocationStrategy
  * OnDemandBaseCapacity
  * OnDemandPercentageAboveBaseCapacity
  * SpotAllocationStrategy
  * SpotInstancePools
  * SpotMaxPrice

### InstancesToUpdate
* InstancesToUpdate `integer`

### IntPercent
* IntPercent `integer`

### InvalidNextToken


### LaunchConfiguration
* LaunchConfiguration `object`: Describes a launch configuration.
  * AssociatePublicIpAddress
  * BlockDeviceMappings
    * items [BlockDeviceMapping](#blockdevicemapping)
  * ClassicLinkVPCId
  * ClassicLinkVPCSecurityGroups
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * CreatedTime **required**
  * EbsOptimized
  * IamInstanceProfile
  * ImageId **required**
  * InstanceMonitoring
    * Enabled
  * InstanceType **required**
  * KernelId
  * KeyName
  * LaunchConfigurationARN
  * LaunchConfigurationName **required**
  * MetadataOptions
    * HttpEndpoint
    * HttpPutResponseHopLimit
    * HttpTokens
  * PlacementTenancy
  * RamdiskId
  * SecurityGroups
    * items [XmlString](#xmlstring)
  * SpotPrice
  * UserData

### LaunchConfigurationNameType
* LaunchConfigurationNameType `object`
  * LaunchConfigurationName **required**

### LaunchConfigurationNames
* LaunchConfigurationNames `array`
  * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### LaunchConfigurationNamesType
* LaunchConfigurationNamesType `object`
  * LaunchConfigurationNames
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * MaxRecords
  * NextToken

### LaunchConfigurations
* LaunchConfigurations `array`
  * items [LaunchConfiguration](#launchconfiguration)

### LaunchConfigurationsType
* LaunchConfigurationsType `object`
  * LaunchConfigurations **required**
    * items [LaunchConfiguration](#launchconfiguration)
  * NextToken

### LaunchTemplate
* LaunchTemplate `object`: <p>Describes a launch template and overrides. </p> <p>You specify these parameters as part of a mixed instances policy. </p> <p>When you update the launch template or overrides, existing Amazon EC2 instances continue to run. When scale out occurs, Amazon EC2 Auto Scaling launches instances to match the new settings. When scale in occurs, Amazon EC2 Auto Scaling terminates instances according to the group's termination policies.</p>
  * LaunchTemplateSpecification
    * LaunchTemplateId
    * LaunchTemplateName
    * Version
  * Overrides
    * items [LaunchTemplateOverrides](#launchtemplateoverrides)

### LaunchTemplateName
* LaunchTemplateName `string`

### LaunchTemplateOverrides
* LaunchTemplateOverrides `object`: Describes an override for a launch template. The maximum number of instance types that can be associated with an Auto Scaling group is 20. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-override-options.html">Configuring overrides</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. 
  * InstanceType
  * LaunchTemplateSpecification
    * LaunchTemplateId
    * LaunchTemplateName
    * Version
  * WeightedCapacity

### LaunchTemplateSpecification
* LaunchTemplateSpecification `object`: <p>Describes the Amazon EC2 launch template and the launch template version that can be used by an Auto Scaling group to configure Amazon EC2 instances.</p> <p>The launch template that is specified must be configured for use with an Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html">Creating a launch template for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
  * LaunchTemplateId
  * LaunchTemplateName
  * Version

### LifecycleActionResult
* LifecycleActionResult `string`

### LifecycleActionToken
* LifecycleActionToken `string`

### LifecycleHook
* LifecycleHook `object`: Describes a lifecycle hook, which tells Amazon EC2 Auto Scaling that you want to perform an action whenever it launches instances or terminates instances.
  * AutoScalingGroupName
  * DefaultResult
  * GlobalTimeout
  * HeartbeatTimeout
  * LifecycleHookName
  * LifecycleTransition
  * NotificationMetadata
  * NotificationTargetARN
  * RoleARN

### LifecycleHookNames
* LifecycleHookNames `array`
  * items [AsciiStringMaxLen255](#asciistringmaxlen255)

### LifecycleHookSpecification
* LifecycleHookSpecification `object`: <p>Describes information used to specify a lifecycle hook for an Auto Scaling group.</p> <p>A lifecycle hook tells Amazon EC2 Auto Scaling to perform an action on an instance when the instance launches (before it is put into service) or as the instance terminates (before it is fully terminated).</p> <p>This step is a part of the procedure for creating a lifecycle hook for an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.</p> </li> <li> <p>If you finish before the timeout period ends, complete the lifecycle action.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
  * DefaultResult
  * HeartbeatTimeout
  * LifecycleHookName **required**
  * LifecycleTransition **required**
  * NotificationMetadata
  * NotificationTargetARN
  * RoleARN

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


### LoadBalancerNames
* LoadBalancerNames `array`
  * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### LoadBalancerState
* LoadBalancerState `object`: <p>Describes the state of a Classic Load Balancer.</p> <p>If you specify a load balancer when creating the Auto Scaling group, the state of the load balancer is <code>InService</code>.</p> <p>If you attach a load balancer to an existing Auto Scaling group, the initial state is <code>Adding</code>. The state transitions to <code>Added</code> after all instances in the group are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the load balancer, the state transitions to <code>InService</code> after at least one instance in the group passes the health check. If EC2 health checks are enabled instead, the load balancer remains in the <code>Added</code> state.</p>
  * LoadBalancerName
  * State

### LoadBalancerStates
* LoadBalancerStates `array`
  * items [LoadBalancerState](#loadbalancerstate)

### LoadBalancerTargetGroupState
* LoadBalancerTargetGroupState `object`: <p>Describes the state of a target group.</p> <p>If you attach a target group to an existing Auto Scaling group, the initial state is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. If EC2 health checks are enabled instead, the target group remains in the <code>Added</code> state.</p>
  * LoadBalancerTargetGroupARN
  * State

### LoadBalancerTargetGroupStates
* LoadBalancerTargetGroupStates `array`
  * items [LoadBalancerTargetGroupState](#loadbalancertargetgroupstate)

### MaxInstanceLifetime
* MaxInstanceLifetime `integer`

### MaxNumberOfAutoScalingGroups
* MaxNumberOfAutoScalingGroups `integer`

### MaxNumberOfLaunchConfigurations
* MaxNumberOfLaunchConfigurations `integer`

### MaxRecords
* MaxRecords `integer`

### MetricCollectionType
* MetricCollectionType `object`: Describes a metric.
  * Metric

### MetricCollectionTypes
* MetricCollectionTypes `array`
  * items [MetricCollectionType](#metriccollectiontype)

### MetricDimension
* MetricDimension `object`: Describes the dimension of a metric.
  * Name **required**
  * Value **required**

### MetricDimensionName
* MetricDimensionName `string`

### MetricDimensionValue
* MetricDimensionValue `string`

### MetricDimensions
* MetricDimensions `array`
  * items [MetricDimension](#metricdimension)

### MetricGranularityType
* MetricGranularityType `object`: Describes a granularity of a metric.
  * Granularity

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

### MixedInstanceSpotPrice
* MixedInstanceSpotPrice `string`

### MixedInstancesPolicy
* MixedInstancesPolicy `object`: <p>Describes a mixed instances policy for an Auto Scaling group. With mixed instances, your Auto Scaling group can provision a combination of On-Demand Instances and Spot Instances across multiple instance types. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-purchase-options.html">Auto Scaling groups with multiple instance types and purchase options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can create a mixed instances policy for a new Auto Scaling group, or you can create it for an existing group by updating the group to specify <code>MixedInstancesPolicy</code> as the top-level parameter instead of a launch configuration or launch template.</p>
  * InstancesDistribution
    * OnDemandAllocationStrategy
    * OnDemandBaseCapacity
    * OnDemandPercentageAboveBaseCapacity
    * SpotAllocationStrategy
    * SpotInstancePools
    * SpotMaxPrice
  * LaunchTemplate
    * LaunchTemplateSpecification
      * LaunchTemplateId
      * LaunchTemplateName
      * Version
    * Overrides
      * items [LaunchTemplateOverrides](#launchtemplateoverrides)

### MonitoringEnabled
* MonitoringEnabled `boolean`

### NoDevice
* NoDevice `boolean`

### NotificationConfiguration
* NotificationConfiguration `object`: Describes a notification.
  * AutoScalingGroupName
  * NotificationType
  * TopicARN

### NotificationConfigurations
* NotificationConfigurations `array`
  * items [NotificationConfiguration](#notificationconfiguration)

### NotificationTargetResourceName
* NotificationTargetResourceName `string`

### NumberOfAutoScalingGroups
* NumberOfAutoScalingGroups `integer`

### NumberOfLaunchConfigurations
* NumberOfLaunchConfigurations `integer`

### OnDemandBaseCapacity
* OnDemandBaseCapacity `integer`

### OnDemandPercentageAboveBaseCapacity
* OnDemandPercentageAboveBaseCapacity `integer`

### Overrides
* Overrides `array`
  * items [LaunchTemplateOverrides](#launchtemplateoverrides)

### PoliciesType
* PoliciesType `object`
  * NextToken
  * ScalingPolicies
    * items [ScalingPolicy](#scalingpolicy)

### PolicyARNType
* PolicyARNType `object`: Contains the output of PutScalingPolicy.
  * Alarms
    * items [Alarm](#alarm)
  * PolicyARN

### PolicyIncrement
* PolicyIncrement `integer`

### PolicyNames
* PolicyNames `array`
  * items [ResourceName](#resourcename)

### PolicyTypes
* PolicyTypes `array`
  * items [XmlStringMaxLen64](#xmlstringmaxlen64)

### PredefinedMetricSpecification
* PredefinedMetricSpecification `object`: Represents a predefined metric for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.
  * PredefinedMetricType **required**
  * ResourceLabel

### ProcessNames
* ProcessNames `array`
  * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### ProcessType
* ProcessType `object`: <p>Describes a process type.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types">Scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
  * ProcessName **required**

### Processes
* Processes `array`
  * items [ProcessType](#processtype)

### ProcessesType
* ProcessesType `object`
  * Processes
    * items [ProcessType](#processtype)

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
  * AutoScalingGroupName **required**
  * DefaultResult
  * HeartbeatTimeout
  * LifecycleHookName **required**
  * LifecycleTransition
  * NotificationMetadata
  * NotificationTargetARN
  * RoleARN

### PutNotificationConfigurationType
* PutNotificationConfigurationType `object`
  * AutoScalingGroupName **required**
  * NotificationTypes **required**
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * TopicARN **required**

### PutScalingPolicyType
* PutScalingPolicyType `object`
  * AdjustmentType
  * AutoScalingGroupName **required**
  * Cooldown
  * Enabled
  * EstimatedInstanceWarmup
  * MetricAggregationType
  * MinAdjustmentMagnitude
  * MinAdjustmentStep
  * PolicyName **required**
  * PolicyType
  * ScalingAdjustment
  * StepAdjustments
    * items [StepAdjustment](#stepadjustment)
  * TargetTrackingConfiguration
    * CustomizedMetricSpecification
      * Dimensions
        * items [MetricDimension](#metricdimension)
      * MetricName **required**
      * Namespace **required**
      * Statistic **required**
      * Unit
    * DisableScaleIn
    * PredefinedMetricSpecification
      * PredefinedMetricType **required**
      * ResourceLabel
    * TargetValue **required**

### PutScheduledUpdateGroupActionType
* PutScheduledUpdateGroupActionType `object`
  * AutoScalingGroupName **required**
  * DesiredCapacity
  * EndTime
  * MaxSize
  * MinSize
  * Recurrence
  * ScheduledActionName **required**
  * StartTime
  * Time

### RecordLifecycleActionHeartbeatAnswer
* RecordLifecycleActionHeartbeatAnswer `object`

### RecordLifecycleActionHeartbeatType
* RecordLifecycleActionHeartbeatType `object`
  * AutoScalingGroupName **required**
  * InstanceId
  * LifecycleActionToken
  * LifecycleHookName **required**

### RefreshInstanceWarmup
* RefreshInstanceWarmup `integer`

### RefreshPreferences
* RefreshPreferences `object`: Describes information used to start an instance refresh. 
  * InstanceWarmup
  * MinHealthyPercentage

### RefreshStrategy
* RefreshStrategy `string` (values: Rolling)

### ResourceContentionFault


### ResourceInUseFault


### ResourceName
* ResourceName `string`

### ScalingActivityInProgressFault


### ScalingActivityStatusCode
* ScalingActivityStatusCode `string` (values: PendingSpotBidPlacement, WaitingForSpotInstanceRequestId, WaitingForSpotInstanceId, WaitingForInstanceId, PreInService, InProgress, WaitingForELBConnectionDraining, MidLifecycleAction, WaitingForInstanceWarmup, Successful, Failed, Cancelled)

### ScalingPolicies
* ScalingPolicies `array`
  * items [ScalingPolicy](#scalingpolicy)

### ScalingPolicy
* ScalingPolicy `object`: Describes a scaling policy.
  * AdjustmentType
  * Alarms
    * items [Alarm](#alarm)
  * AutoScalingGroupName
  * Cooldown
  * Enabled
  * EstimatedInstanceWarmup
  * MetricAggregationType
  * MinAdjustmentMagnitude
  * MinAdjustmentStep
  * PolicyARN
  * PolicyName
  * PolicyType
  * ScalingAdjustment
  * StepAdjustments
    * items [StepAdjustment](#stepadjustment)
  * TargetTrackingConfiguration
    * CustomizedMetricSpecification
      * Dimensions
        * items [MetricDimension](#metricdimension)
      * MetricName **required**
      * Namespace **required**
      * Statistic **required**
      * Unit
    * DisableScaleIn
    * PredefinedMetricSpecification
      * PredefinedMetricType **required**
      * ResourceLabel
    * TargetValue **required**

### ScalingPolicyEnabled
* ScalingPolicyEnabled `boolean`

### ScalingProcessQuery
* ScalingProcessQuery `object`
  * AutoScalingGroupName **required**
  * ScalingProcesses
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### ScheduledActionNames
* ScheduledActionNames `array`
  * items [XmlStringMaxLen255](#xmlstringmaxlen255)

### ScheduledActionsType
* ScheduledActionsType `object`
  * NextToken
  * ScheduledUpdateGroupActions
    * items [ScheduledUpdateGroupAction](#scheduledupdategroupaction)

### ScheduledUpdateGroupAction
* ScheduledUpdateGroupAction `object`: Describes a scheduled scaling action.
  * AutoScalingGroupName
  * DesiredCapacity
  * EndTime
  * MaxSize
  * MinSize
  * Recurrence
  * ScheduledActionARN
  * ScheduledActionName
  * StartTime
  * Time

### ScheduledUpdateGroupActionRequest
* ScheduledUpdateGroupActionRequest `object`: <p>Describes information used for one or more scheduled scaling action updates in a <a>BatchPutScheduledUpdateGroupAction</a> operation.</p> <p>When updating a scheduled scaling action, all optional parameters are left unchanged if not specified.</p>
  * DesiredCapacity
  * EndTime
  * MaxSize
  * MinSize
  * Recurrence
  * ScheduledActionName **required**
  * StartTime

### ScheduledUpdateGroupActionRequests
* ScheduledUpdateGroupActionRequests `array`
  * items [ScheduledUpdateGroupActionRequest](#scheduledupdategroupactionrequest)

### ScheduledUpdateGroupActions
* ScheduledUpdateGroupActions `array`
  * items [ScheduledUpdateGroupAction](#scheduledupdategroupaction)

### SecurityGroups
* SecurityGroups `array`
  * items [XmlString](#xmlstring)

### ServiceLinkedRoleFailure


### SetDesiredCapacityType
* SetDesiredCapacityType `object`
  * AutoScalingGroupName **required**
  * DesiredCapacity **required**
  * HonorCooldown

### SetInstanceHealthQuery
* SetInstanceHealthQuery `object`
  * HealthStatus **required**
  * InstanceId **required**
  * ShouldRespectGracePeriod

### SetInstanceProtectionAnswer
* SetInstanceProtectionAnswer `object`

### SetInstanceProtectionQuery
* SetInstanceProtectionQuery `object`
  * AutoScalingGroupName **required**
  * InstanceIds **required**
    * items [XmlStringMaxLen19](#xmlstringmaxlen19)
  * ProtectedFromScaleIn **required**

### ShouldDecrementDesiredCapacity
* ShouldDecrementDesiredCapacity `boolean`

### ShouldRespectGracePeriod
* ShouldRespectGracePeriod `boolean`

### SpotInstancePools
* SpotInstancePools `integer`

### SpotPrice
* SpotPrice `string`

### StartInstanceRefreshAnswer
* StartInstanceRefreshAnswer `object`
  * InstanceRefreshId

### StartInstanceRefreshType
* StartInstanceRefreshType `object`
  * AutoScalingGroupName **required**
  * Preferences
    * InstanceWarmup
    * MinHealthyPercentage
  * Strategy

### StepAdjustment
* StepAdjustment `object`: <p>Describes information used to create a step adjustment for a step scaling policy.</p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>To trigger the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of 0 and an upper bound of 10.</p> </li> <li> <p>To trigger the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of -10 and an upper bound of 0.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most, one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most, one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-steps">Step adjustments</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
  * MetricIntervalLowerBound
  * MetricIntervalUpperBound
  * ScalingAdjustment **required**

### StepAdjustments
* StepAdjustments `array`
  * items [StepAdjustment](#stepadjustment)

### SuspendedProcess
* SuspendedProcess `object`: <p>Describes an auto scaling process that has been suspended.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types">Scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
  * ProcessName
  * SuspensionReason

### SuspendedProcesses
* SuspendedProcesses `array`
  * items [SuspendedProcess](#suspendedprocess)

### Tag
* Tag `object`: Describes a tag for an Auto Scaling group.
  * Key **required**
  * PropagateAtLaunch
  * ResourceId
  * ResourceType
  * Value

### TagDescription
* TagDescription `object`: Describes a tag for an Auto Scaling group.
  * Key
  * PropagateAtLaunch
  * ResourceId
  * ResourceType
  * Value

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
  * NextToken
  * Tags
    * items [TagDescription](#tagdescription)

### TargetGroupARNs
* TargetGroupARNs `array`
  * items [XmlStringMaxLen511](#xmlstringmaxlen511)

### TargetTrackingConfiguration
* TargetTrackingConfiguration `object`: Represents a target tracking scaling policy configuration to use with Amazon EC2 Auto Scaling.
  * CustomizedMetricSpecification
    * Dimensions
      * items [MetricDimension](#metricdimension)
    * MetricName **required**
    * Namespace **required**
    * Statistic **required**
    * Unit
  * DisableScaleIn
  * PredefinedMetricSpecification
    * PredefinedMetricType **required**
    * ResourceLabel
  * TargetValue **required**

### TerminateInstanceInAutoScalingGroupType
* TerminateInstanceInAutoScalingGroupType `object`
  * InstanceId **required**
  * ShouldDecrementDesiredCapacity **required**

### TerminationPolicies
* TerminationPolicies `array`
  * items [XmlStringMaxLen1600](#xmlstringmaxlen1600)

### TimestampType
* TimestampType `string`

### UpdateAutoScalingGroupType
* UpdateAutoScalingGroupType `object`
  * AutoScalingGroupName **required**
  * AvailabilityZones
    * items [XmlStringMaxLen255](#xmlstringmaxlen255)
  * CapacityRebalance
  * DefaultCooldown
  * DesiredCapacity
  * HealthCheckGracePeriod
  * HealthCheckType
  * LaunchConfigurationName
  * LaunchTemplate
    * LaunchTemplateId
    * LaunchTemplateName
    * Version
  * MaxInstanceLifetime
  * MaxSize
  * MinSize
  * MixedInstancesPolicy
    * InstancesDistribution
      * OnDemandAllocationStrategy
      * OnDemandBaseCapacity
      * OnDemandPercentageAboveBaseCapacity
      * SpotAllocationStrategy
      * SpotInstancePools
      * SpotMaxPrice
    * LaunchTemplate
      * LaunchTemplateSpecification
        * LaunchTemplateId
        * LaunchTemplateName
        * Version
      * Overrides
        * items [LaunchTemplateOverrides](#launchtemplateoverrides)
  * NewInstancesProtectedFromScaleIn
  * PlacementGroup
  * ServiceLinkedRoleARN
  * TerminationPolicies
    * items [XmlStringMaxLen1600](#xmlstringmaxlen1600)
  * VPCZoneIdentifier

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


