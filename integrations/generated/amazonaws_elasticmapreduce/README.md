# @datafire/amazonaws_elasticmapreduce

Client library for Amazon Elastic MapReduce

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_elasticmapreduce
```

```js
let datafire = require('datafire');
let amazonaws_elasticmapreduce = require('@datafire/amazonaws_elasticmapreduce').create();

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

#### Parameters
* ClusterId (string) **required**
* InstanceFleet (object) **required** - <p>The configuration that defines an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

### AddInstanceGroups



```js
amazonaws_elasticmapreduce.AddInstanceGroups({
  "InstanceGroups": [],
  "JobFlowId": ""
}, context)
```

#### Parameters
* InstanceGroups (array) **required**
* JobFlowId (string) **required**

### AddJobFlowSteps



```js
amazonaws_elasticmapreduce.AddJobFlowSteps({
  "JobFlowId": "",
  "Steps": []
}, context)
```

#### Parameters
* JobFlowId (string) **required**
* Steps (array) **required**

### AddTags



```js
amazonaws_elasticmapreduce.AddTags({
  "ResourceId": "",
  "Tags": []
}, context)
```

#### Parameters
* ResourceId (string) **required**
* Tags (array) **required**

### CancelSteps



```js
amazonaws_elasticmapreduce.CancelSteps({}, context)
```

#### Parameters
* ClusterId (string)
* StepIds (array)

### CreateSecurityConfiguration



```js
amazonaws_elasticmapreduce.CreateSecurityConfiguration({
  "Name": "",
  "SecurityConfiguration": ""
}, context)
```

#### Parameters
* Name (string) **required**
* SecurityConfiguration (string) **required**

### DeleteSecurityConfiguration



```js
amazonaws_elasticmapreduce.DeleteSecurityConfiguration({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### DescribeCluster



```js
amazonaws_elasticmapreduce.DescribeCluster({
  "ClusterId": ""
}, context)
```

#### Parameters
* ClusterId (string) **required**

### DescribeJobFlows



```js
amazonaws_elasticmapreduce.DescribeJobFlows({}, context)
```

#### Parameters
* CreatedAfter (string)
* CreatedBefore (string)
* JobFlowIds (array)
* JobFlowStates (array)

### DescribeSecurityConfiguration



```js
amazonaws_elasticmapreduce.DescribeSecurityConfiguration({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### DescribeStep



```js
amazonaws_elasticmapreduce.DescribeStep({
  "ClusterId": "",
  "StepId": ""
}, context)
```

#### Parameters
* ClusterId (string) **required**
* StepId (string) **required**

### ListBootstrapActions



```js
amazonaws_elasticmapreduce.ListBootstrapActions({
  "ClusterId": ""
}, context)
```

#### Parameters
* Marker (string)
* ClusterId (string) **required**
* Marker (string)

### ListClusters



```js
amazonaws_elasticmapreduce.ListClusters({}, context)
```

#### Parameters
* Marker (string)
* ClusterStates (array)
* CreatedAfter (string)
* CreatedBefore (string)
* Marker (string)

### ListInstanceFleets



```js
amazonaws_elasticmapreduce.ListInstanceFleets({
  "ClusterId": ""
}, context)
```

#### Parameters
* Marker (string)
* ClusterId (string) **required**
* Marker (string)

### ListInstanceGroups



```js
amazonaws_elasticmapreduce.ListInstanceGroups({
  "ClusterId": ""
}, context)
```

#### Parameters
* Marker (string)
* ClusterId (string) **required**
* Marker (string)

### ListInstances



```js
amazonaws_elasticmapreduce.ListInstances({
  "ClusterId": ""
}, context)
```

#### Parameters
* Marker (string)
* ClusterId (string) **required**
* InstanceFleetId (string)
* InstanceFleetType (string)
* InstanceGroupId (string)
* InstanceGroupTypes (array)
* InstanceStates (array)
* Marker (string)

### ListSecurityConfigurations



```js
amazonaws_elasticmapreduce.ListSecurityConfigurations({}, context)
```

#### Parameters
* Marker (string)

### ListSteps



```js
amazonaws_elasticmapreduce.ListSteps({
  "ClusterId": ""
}, context)
```

#### Parameters
* Marker (string)
* ClusterId (string) **required**
* Marker (string)
* StepIds (array)
* StepStates (array)

### ModifyInstanceFleet



```js
amazonaws_elasticmapreduce.ModifyInstanceFleet({
  "ClusterId": "",
  "InstanceFleet": {
    "InstanceFleetId": ""
  }
}, context)
```

#### Parameters
* ClusterId (string) **required**
* InstanceFleet (object) **required** - <p>Configuration parameters for an instance fleet modification request.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

### ModifyInstanceGroups



```js
amazonaws_elasticmapreduce.ModifyInstanceGroups({}, context)
```

#### Parameters
* ClusterId (string)
* InstanceGroups (array)

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

#### Parameters
* AutoScalingPolicy (object) **required** - An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. An automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.
* ClusterId (string) **required**
* InstanceGroupId (string) **required**

### RemoveAutoScalingPolicy



```js
amazonaws_elasticmapreduce.RemoveAutoScalingPolicy({
  "ClusterId": "",
  "InstanceGroupId": ""
}, context)
```

#### Parameters
* ClusterId (string) **required**
* InstanceGroupId (string) **required**

### RemoveTags



```js
amazonaws_elasticmapreduce.RemoveTags({
  "ResourceId": "",
  "TagKeys": []
}, context)
```

#### Parameters
* ResourceId (string) **required**
* TagKeys (array) **required**

### RunJobFlow



```js
amazonaws_elasticmapreduce.RunJobFlow({
  "Name": "",
  "Instances": {}
}, context)
```

#### Parameters
* AdditionalInfo (string)
* AmiVersion (string)
* Applications (array)
* AutoScalingRole (string)
* BootstrapActions (array)
* Configurations (array)
* Instances (object) **required** - A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets, which is the recommended configuration. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration.
* JobFlowRole (string)
* LogUri (string)
* Name (string) **required**
* NewSupportedProducts (array)
* ReleaseLabel (string)
* ScaleDownBehavior (string)
* SecurityConfiguration (string)
* ServiceRole (string)
* Steps (array)
* SupportedProducts (array)
* Tags (array)
* VisibleToAllUsers (boolean)

### SetTerminationProtection



```js
amazonaws_elasticmapreduce.SetTerminationProtection({
  "JobFlowIds": [],
  "TerminationProtected": true
}, context)
```

#### Parameters
* JobFlowIds (array) **required**
* TerminationProtected (boolean) **required**

### SetVisibleToAllUsers



```js
amazonaws_elasticmapreduce.SetVisibleToAllUsers({
  "JobFlowIds": [],
  "VisibleToAllUsers": true
}, context)
```

#### Parameters
* JobFlowIds (array) **required**
* VisibleToAllUsers (boolean) **required**

### TerminateJobFlows



```js
amazonaws_elasticmapreduce.TerminateJobFlows({
  "JobFlowIds": []
}, context)
```

#### Parameters
* JobFlowIds (array) **required**

