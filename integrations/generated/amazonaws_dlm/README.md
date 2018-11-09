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

amazonaws_dlm.GetLifecyclePolicies({}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Data Lifecycle Manager</fullname> <p>With Amazon Data Lifecycle Manager, you can manage the lifecycle of your AWS resources. You create lifecycle policies, which are used to automate operations on the specified resources.</p> <p>Amazon DLM supports Amazon EBS volumes and snapshots. For information about using Amazon DLM with Amazon EBS, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html">Automating the Amazon EBS Snapshot Lifecycle</a> in the <i>Amazon EC2 User Guide</i>.</p>

## Actions

### GetLifecyclePolicies



```js
amazonaws_dlm.GetLifecyclePolicies({}, context)
```

#### Input
* input `object`

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
  * Description **required** [PolicyDescription](#policydescription)
  * ExecutionRoleArn **required** [ExecutionRoleArn](#executionrolearn)
  * PolicyDetails **required** [PolicyDetails](#policydetails)
  * State **required** [SettablePolicyStateValues](#settablepolicystatevalues)

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
  * Description [PolicyDescription](#policydescription)
  * ExecutionRoleArn [ExecutionRoleArn](#executionrolearn)
  * PolicyDetails [PolicyDetails](#policydetails)
  * State [SettablePolicyStateValues](#settablepolicystatevalues)

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



## Definitions

### Count
* Count `integer`

### CreateLifecyclePolicyRequest
* CreateLifecyclePolicyRequest `object`
  * Description **required** [PolicyDescription](#policydescription)
  * ExecutionRoleArn **required** [ExecutionRoleArn](#executionrolearn)
  * PolicyDetails **required** [PolicyDetails](#policydetails)
  * State **required** [SettablePolicyStateValues](#settablepolicystatevalues)

### CreateLifecyclePolicyResponse
* CreateLifecyclePolicyResponse `object`
  * PolicyId [PolicyId](#policyid)

### CreateRule
* CreateRule `object`: Specifies when to create snapshots of EBS volumes.
  * Interval **required** [Interval](#interval)
  * IntervalUnit **required** [IntervalUnitValues](#intervalunitvalues)
  * Times [TimesList](#timeslist)

### DeleteLifecyclePolicyRequest
* DeleteLifecyclePolicyRequest `object`

### DeleteLifecyclePolicyResponse
* DeleteLifecyclePolicyResponse `object`

### ExecutionRoleArn
* ExecutionRoleArn `string`

### GetLifecyclePoliciesRequest
* GetLifecyclePoliciesRequest `object`

### GetLifecyclePoliciesResponse
* GetLifecyclePoliciesResponse `object`
  * Policies [LifecyclePolicySummaryList](#lifecyclepolicysummarylist)

### GetLifecyclePolicyRequest
* GetLifecyclePolicyRequest `object`

### GetLifecyclePolicyResponse
* GetLifecyclePolicyResponse `object`
  * Policy [LifecyclePolicy](#lifecyclepolicy)

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
  * DateCreated [Timestamp](#timestamp)
  * DateModified [Timestamp](#timestamp)
  * Description [PolicyDescription](#policydescription)
  * ExecutionRoleArn [ExecutionRoleArn](#executionrolearn)
  * PolicyDetails [PolicyDetails](#policydetails)
  * PolicyId [PolicyId](#policyid)
  * State [GettablePolicyStateValues](#gettablepolicystatevalues)

### LifecyclePolicySummary
* LifecyclePolicySummary `object`: Summary information about a lifecycle policy.
  * Description [PolicyDescription](#policydescription)
  * PolicyId [PolicyId](#policyid)
  * State [GettablePolicyStateValues](#gettablepolicystatevalues)

### LifecyclePolicySummaryList
* LifecyclePolicySummaryList `array`
  * items [LifecyclePolicySummary](#lifecyclepolicysummary)

### LimitExceededException


### PolicyDescription
* PolicyDescription `string`

### PolicyDetails
* PolicyDetails `object`: Specifies the configuration of a lifecycle policy.
  * ResourceTypes [ResourceTypeValuesList](#resourcetypevalueslist)
  * Schedules [ScheduleList](#schedulelist)
  * TargetTags [TargetTagList](#targettaglist)

### PolicyId
* PolicyId `string`

### PolicyIdList
* PolicyIdList `array`
  * items [PolicyId](#policyid)

### ResourceNotFoundException


### ResourceTypeValues
* ResourceTypeValues `string` (values: VOLUME)

### ResourceTypeValuesList
* ResourceTypeValuesList `array`
  * items [ResourceTypeValues](#resourcetypevalues)

### RetainRule
* RetainRule `object`: Specifies the number of snapshots to keep for each EBS volume.
  * Count **required** [Count](#count)

### Schedule
* Schedule `object`: Specifies a schedule.
  * CreateRule [CreateRule](#createrule)
  * Name [ScheduleName](#schedulename)
  * RetainRule [RetainRule](#retainrule)
  * TagsToAdd [TagsToAddList](#tagstoaddlist)

### ScheduleList
* ScheduleList `array`
  * items [Schedule](#schedule)

### ScheduleName
* ScheduleName `string`

### SettablePolicyStateValues
* SettablePolicyStateValues `string` (values: ENABLED, DISABLED)

### String
* String `string`

### Tag
* Tag `object`: Specifies a tag for a resource.
  * Key **required** [String](#string)
  * Value **required** [String](#string)

### TagFilter
* TagFilter `string`

### TagsToAddFilterList
* TagsToAddFilterList `array`
  * items [TagFilter](#tagfilter)

### TagsToAddList
* TagsToAddList `array`
  * items [Tag](#tag)

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

### UpdateLifecyclePolicyRequest
* UpdateLifecyclePolicyRequest `object`
  * Description [PolicyDescription](#policydescription)
  * ExecutionRoleArn [ExecutionRoleArn](#executionrolearn)
  * PolicyDetails [PolicyDetails](#policydetails)
  * State [SettablePolicyStateValues](#settablepolicystatevalues)

### UpdateLifecyclePolicyResponse
* UpdateLifecyclePolicyResponse `object`


