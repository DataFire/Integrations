# @datafire/amazonaws_dlm

Client library for Amazon Data Lifecycle Manager

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_dlm
```
```js
let amazonaws_dlm = require('@datafire/amazonaws_dlm').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Data Lifecycle Manager</fullname> <p>With Amazon Data Lifecycle Manager, you can manage the lifecycle of your AWS resources. You create lifecycle policies, which are used to automate operations on the specified resources.</p> <p>Amazon DLM supports Amazon EBS volumes and snapshots. For information about using Amazon DLM with Amazon EBS, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html">Automating the Amazon EBS Snapshot Lifecycle</a> in the <i>Amazon EC2 User Guide</i>.</p>

## Actions

### GetLifecyclePolicies



```js
amazonaws_dlm.GetLifecyclePolicies({}, context)
```

#### Input
* input `object`
  * policyIds `array`
  * state `string`
  * resourceTypes `array`
  * targetTags `array`
  * tagsToAdd `array`

#### Output
* output [GetLifecyclePoliciesResponse](#getlifecyclepoliciesresponse)

### CreateLifecyclePolicy



```js
amazonaws_dlm.CreateLifecyclePolicy({
  "ExecutionRoleArn": "",
  "Description": "",
  "State": "",
  "PolicyDetails": {}
}, context)
```

#### Input
* input `object`
  * Description **required** `string`: A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.
  * ExecutionRoleArn **required** `string`: The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
  * PolicyDetails **required** `object`: Specifies the configuration of a lifecycle policy.
    * Actions
      * items [Action](#action)
    * EventSource
      * Parameters
        * DescriptionRegex **required**
        * EventType **required**
        * SnapshotOwner **required**
          * items [AwsAccountId](#awsaccountid)
      * Type **required**
    * Parameters
      * ExcludeBootVolume
      * NoReboot
    * PolicyType
    * ResourceTypes
      * items [ResourceTypeValues](#resourcetypevalues)
    * Schedules
      * items [Schedule](#schedule)
    * TargetTags
      * items [Tag](#tag)
  * State **required** `string` (values: ENABLED, DISABLED): The desired activation state of the lifecycle policy after creation.
  * Tags `object`: The tags to apply to the lifecycle policy during creation.

#### Output
* output [CreateLifecyclePolicyResponse](#createlifecyclepolicyresponse)

### UpdateLifecyclePolicy



```js
amazonaws_dlm.UpdateLifecyclePolicy({
  "policyId": ""
}, context)
```

#### Input
* input `object`
  * policyId **required** `string`
  * Description `string`: A description of the lifecycle policy.
  * ExecutionRoleArn `string`: The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
  * PolicyDetails `object`: Specifies the configuration of a lifecycle policy.
    * Actions
      * items [Action](#action)
    * EventSource
      * Parameters
        * DescriptionRegex **required**
        * EventType **required**
        * SnapshotOwner **required**
          * items [AwsAccountId](#awsaccountid)
      * Type **required**
    * Parameters
      * ExcludeBootVolume
      * NoReboot
    * PolicyType
    * ResourceTypes
      * items [ResourceTypeValues](#resourcetypevalues)
    * Schedules
      * items [Schedule](#schedule)
    * TargetTags
      * items [Tag](#tag)
  * State `string` (values: ENABLED, DISABLED): The desired activation state of the lifecycle policy after creation.

#### Output
* output [UpdateLifecyclePolicyResponse](#updatelifecyclepolicyresponse)

### DeleteLifecyclePolicy



```js
amazonaws_dlm.DeleteLifecyclePolicy({
  "policyId": ""
}, context)
```

#### Input
* input `object`
  * policyId **required** `string`

#### Output
* output [DeleteLifecyclePolicyResponse](#deletelifecyclepolicyresponse)

### GetLifecyclePolicy



```js
amazonaws_dlm.GetLifecyclePolicy({
  "policyId": ""
}, context)
```

#### Input
* input `object`
  * policyId **required** `string`

#### Output
* output [GetLifecyclePolicyResponse](#getlifecyclepolicyresponse)

### ListTagsForResource



```js
amazonaws_dlm.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_dlm.TagResource({
  "resourceArn": "",
  "Tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * Tags **required** `object`: One or more tags.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_dlm.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### Action
* Action `object`: Specifies an action for an event-based policy.
  * CrossRegionCopy **required**
    * items [CrossRegionCopyAction](#crossregioncopyaction)
  * Name **required**

### ActionList
* ActionList `array`
  * items [Action](#action)

### ActionName
* ActionName `string`

### AvailabilityZone
* AvailabilityZone `string`

### AvailabilityZoneList
* AvailabilityZoneList `array`
  * items [AvailabilityZone](#availabilityzone)

### AwsAccountId
* AwsAccountId `string`

### CmkArn
* CmkArn `string`

### CopyTags
* CopyTags `boolean`

### CopyTagsNullable
* CopyTagsNullable `boolean`

### Count
* Count `integer`

### CreateLifecyclePolicyRequest
* CreateLifecyclePolicyRequest `object`
  * Description **required**
  * ExecutionRoleArn **required**
  * PolicyDetails **required**
    * Actions
      * items [Action](#action)
    * EventSource
      * Parameters
        * DescriptionRegex **required**
        * EventType **required**
        * SnapshotOwner **required**
          * items [AwsAccountId](#awsaccountid)
      * Type **required**
    * Parameters
      * ExcludeBootVolume
      * NoReboot
    * PolicyType
    * ResourceTypes
      * items [ResourceTypeValues](#resourcetypevalues)
    * Schedules
      * items [Schedule](#schedule)
    * TargetTags
      * items [Tag](#tag)
  * State **required**
  * Tags

### CreateLifecyclePolicyResponse
* CreateLifecyclePolicyResponse `object`
  * PolicyId

### CreateRule
* CreateRule `object`: <p>Specifies when to create snapshots of EBS volumes.</p> <p>You must specify either a Cron expression or an interval, interval unit, and start time. You cannot specify both.</p>
  * CronExpression
  * Interval
  * IntervalUnit
  * Times
    * items [Time](#time)

### CronExpression
* CronExpression `string`

### CrossRegionCopyAction
* CrossRegionCopyAction `object`: Specifies a rule for copying shared snapshots across Regions.
  * EncryptionConfiguration **required**
    * CmkArn
    * Encrypted **required**
  * RetainRule [CrossRegionCopyRetainRule](#crossregioncopyretainrule)
  * Target **required**

### CrossRegionCopyActionList
* CrossRegionCopyActionList `array`
  * items [CrossRegionCopyAction](#crossregioncopyaction)

### CrossRegionCopyRetainRule
* CrossRegionCopyRetainRule `object`: Specifies the retention rule for cross-Region snapshot copies.
  * Interval
  * IntervalUnit

### CrossRegionCopyRule
* CrossRegionCopyRule `object`: Specifies a rule for cross-Region snapshot copies.
  * CmkArn
  * CopyTags
  * Encrypted **required**
  * RetainRule
    * Interval
    * IntervalUnit
  * TargetRegion **required**

### CrossRegionCopyRules
* CrossRegionCopyRules `array`
  * items [CrossRegionCopyRule](#crossregioncopyrule)

### DeleteLifecyclePolicyRequest
* DeleteLifecyclePolicyRequest `object`

### DeleteLifecyclePolicyResponse
* DeleteLifecyclePolicyResponse `object`

### DescriptionRegex
* DescriptionRegex `string`

### Encrypted
* Encrypted `boolean`

### EncryptionConfiguration
* EncryptionConfiguration `object`: Specifies the encryption settings for shared snapshots that are copied across Regions.
  * CmkArn
  * Encrypted **required**

### EventParameters
* EventParameters `object`: Specifies an event that triggers an event-based policy.
  * DescriptionRegex **required**
  * EventType **required**
  * SnapshotOwner **required**
    * items [AwsAccountId](#awsaccountid)

### EventSource
* EventSource `object`: Specifies an event that triggers an event-based policy.
  * Parameters
    * DescriptionRegex **required**
    * EventType **required**
    * SnapshotOwner **required**
      * items [AwsAccountId](#awsaccountid)
  * Type **required**

### EventSourceValues
* EventSourceValues `string` (values: MANAGED_CWE)

### EventTypeValues
* EventTypeValues `string` (values: shareSnapshot)

### ExcludeBootVolume
* ExcludeBootVolume `boolean`

### ExecutionRoleArn
* ExecutionRoleArn `string`

### FastRestoreRule
* FastRestoreRule `object`: Specifies a rule for enabling fast snapshot restore. You can enable fast snapshot restore based on either a count or a time interval.
  * AvailabilityZones **required**
    * items [AvailabilityZone](#availabilityzone)
  * Count
  * Interval
  * IntervalUnit

### GetLifecyclePoliciesRequest
* GetLifecyclePoliciesRequest `object`

### GetLifecyclePoliciesResponse
* GetLifecyclePoliciesResponse `object`
  * Policies
    * items [LifecyclePolicySummary](#lifecyclepolicysummary)

### GetLifecyclePolicyRequest
* GetLifecyclePolicyRequest `object`

### GetLifecyclePolicyResponse
* GetLifecyclePolicyResponse `object`
  * Policy
    * DateCreated
    * DateModified
    * Description
    * ExecutionRoleArn
    * PolicyArn
    * PolicyDetails
      * Actions
        * items [Action](#action)
      * EventSource
        * Parameters
          * DescriptionRegex **required**
          * EventType **required**
          * SnapshotOwner **required**
        * Type **required**
      * Parameters
        * ExcludeBootVolume
        * NoReboot
      * PolicyType
      * ResourceTypes
        * items [ResourceTypeValues](#resourcetypevalues)
      * Schedules
        * items [Schedule](#schedule)
      * TargetTags
        * items [Tag](#tag)
    * PolicyId
    * State
    * StatusMessage
    * Tags

### GettablePolicyStateValues
* GettablePolicyStateValues `string` (values: ENABLED, DISABLED, ERROR)

### InternalServerException


### Interval
* Interval `integer`

### IntervalUnitValues
* IntervalUnitValues `string` (values: HOURS)

### InvalidRequestException


### LifecyclePolicy
* LifecyclePolicy `object`: Detailed information about a lifecycle policy.
  * DateCreated
  * DateModified
  * Description
  * ExecutionRoleArn
  * PolicyArn
  * PolicyDetails
    * Actions
      * items [Action](#action)
    * EventSource
      * Parameters
        * DescriptionRegex **required**
        * EventType **required**
        * SnapshotOwner **required**
          * items [AwsAccountId](#awsaccountid)
      * Type **required**
    * Parameters
      * ExcludeBootVolume
      * NoReboot
    * PolicyType
    * ResourceTypes
      * items [ResourceTypeValues](#resourcetypevalues)
    * Schedules
      * items [Schedule](#schedule)
    * TargetTags
      * items [Tag](#tag)
  * PolicyId
  * State
  * StatusMessage
  * Tags

### LifecyclePolicySummary
* LifecyclePolicySummary `object`: Summary information about a lifecycle policy.
  * Description
  * PolicyId
  * PolicyType
  * State
  * Tags

### LifecyclePolicySummaryList
* LifecyclePolicySummaryList `array`
  * items [LifecyclePolicySummary](#lifecyclepolicysummary)

### LimitExceededException


### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### NoReboot
* NoReboot `boolean`

### Parameters
* Parameters `object`: Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type.
  * ExcludeBootVolume
  * NoReboot

### PolicyArn
* PolicyArn `string`

### PolicyDescription
* PolicyDescription `string`

### PolicyDetails
* PolicyDetails `object`: Specifies the configuration of a lifecycle policy.
  * Actions
    * items [Action](#action)
  * EventSource
    * Parameters
      * DescriptionRegex **required**
      * EventType **required**
      * SnapshotOwner **required**
        * items [AwsAccountId](#awsaccountid)
    * Type **required**
  * Parameters
    * ExcludeBootVolume
    * NoReboot
  * PolicyType
  * ResourceTypes
    * items [ResourceTypeValues](#resourcetypevalues)
  * Schedules
    * items [Schedule](#schedule)
  * TargetTags
    * items [Tag](#tag)

### PolicyId
* PolicyId `string`

### PolicyIdList
* PolicyIdList `array`
  * items [PolicyId](#policyid)

### PolicyTypeValues
* PolicyTypeValues `string` (values: EBS_SNAPSHOT_MANAGEMENT, IMAGE_MANAGEMENT, EVENT_BASED_POLICY)

### ResourceNotFoundException


### ResourceTypeValues
* ResourceTypeValues `string` (values: VOLUME, INSTANCE)

### ResourceTypeValuesList
* ResourceTypeValuesList `array`
  * items [ResourceTypeValues](#resourcetypevalues)

### RetainRule
* RetainRule `object`: Specifies the retention rule for a lifecycle policy. You can retain snapshots based on either a count or a time interval.
  * Count
  * Interval
  * IntervalUnit

### RetentionIntervalUnitValues
* RetentionIntervalUnitValues `string` (values: DAYS, WEEKS, MONTHS, YEARS)

### Schedule
* Schedule `object`: Specifies a backup schedule for a snapshot or AMI lifecycle policy.
  * CopyTags
  * CreateRule
    * CronExpression
    * Interval
    * IntervalUnit
    * Times
      * items [Time](#time)
  * CrossRegionCopyRules
    * items [CrossRegionCopyRule](#crossregioncopyrule)
  * FastRestoreRule
    * AvailabilityZones **required**
      * items [AvailabilityZone](#availabilityzone)
    * Count
    * Interval
    * IntervalUnit
  * Name
  * RetainRule
    * Count
    * Interval
    * IntervalUnit
  * ShareRules
    * items [ShareRule](#sharerule)
  * TagsToAdd
    * items [Tag](#tag)
  * VariableTags
    * items [Tag](#tag)

### ScheduleList
* ScheduleList `array`
  * items [Schedule](#schedule)

### ScheduleName
* ScheduleName `string`

### SettablePolicyStateValues
* SettablePolicyStateValues `string` (values: ENABLED, DISABLED)

### ShareRule
* ShareRule `object`: Specifies a rule for sharing snapshots across AWS accounts.
  * TargetAccounts **required**
    * items [AwsAccountId](#awsaccountid)
  * UnshareInterval
  * UnshareIntervalUnit

### ShareRules
* ShareRules `array`
  * items [ShareRule](#sharerule)

### ShareTargetAccountList
* ShareTargetAccountList `array`
  * items [AwsAccountId](#awsaccountid)

### SnapshotOwnerList
* SnapshotOwnerList `array`
  * items [AwsAccountId](#awsaccountid)

### StatusMessage
* StatusMessage `string`

### String
* String `string`

### Tag
* Tag `object`: Specifies a tag for a resource.
  * Key **required**
  * Value **required**

### TagFilter
* TagFilter `string`

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * Tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TagsToAddFilterList
* TagsToAddFilterList `array`
  * items [TagFilter](#tagfilter)

### TagsToAddList
* TagsToAddList `array`
  * items [Tag](#tag)

### Target
* Target `string`

### TargetRegion
* TargetRegion `string`

### TargetTagList
* TargetTagList `array`
  * items [Tag](#tag)

### TargetTagsFilterList
* TargetTagsFilterList `array`
  * items [TagFilter](#tagfilter)

### Time
* Time `string`

### TimesList
* TimesList `array`
  * items [Time](#time)

### Timestamp
* Timestamp `string`

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateLifecyclePolicyRequest
* UpdateLifecyclePolicyRequest `object`
  * Description
  * ExecutionRoleArn
  * PolicyDetails
    * Actions
      * items [Action](#action)
    * EventSource
      * Parameters
        * DescriptionRegex **required**
        * EventType **required**
        * SnapshotOwner **required**
          * items [AwsAccountId](#awsaccountid)
      * Type **required**
    * Parameters
      * ExcludeBootVolume
      * NoReboot
    * PolicyType
    * ResourceTypes
      * items [ResourceTypeValues](#resourcetypevalues)
    * Schedules
      * items [Schedule](#schedule)
    * TargetTags
      * items [Tag](#tag)
  * State

### UpdateLifecyclePolicyResponse
* UpdateLifecyclePolicyResponse `object`

### VariableTagsList
* VariableTagsList `array`
  * items [Tag](#tag)


