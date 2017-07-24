# @datafire/amazonaws_elasticmapreduce

Client library for Amazon Elastic MapReduce

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_elasticmapreduce
```

```js
let datafire = require('datafire');
let amazonaws_elasticmapreduce = require('@datafire/amazonaws_elasticmapreduce').actions;
let context = new datafire.Context();

amazonaws_elasticmapreduce.AddInstanceFleet({}, context).then(data => {
  console.log(data);
})
```

## Description
Amazon EMR is a web service that makes it easy to process large amounts of data efficiently. Amazon EMR uses Hadoop processing combined with several AWS products to do tasks such as web indexing, data mining, log file analysis, machine learning, scientific simulation, and data warehousing.

## Actions
### AddInstanceFleet



```js
amazonaws_elasticmapreduce.AddInstanceFleet({}, context)
```


### AddInstanceGroups



```js
amazonaws_elasticmapreduce.AddInstanceGroups({}, context)
```


### AddJobFlowSteps



```js
amazonaws_elasticmapreduce.AddJobFlowSteps({}, context)
```


### AddTags



```js
amazonaws_elasticmapreduce.AddTags({}, context)
```


### CancelSteps



```js
amazonaws_elasticmapreduce.CancelSteps({}, context)
```


### CreateSecurityConfiguration



```js
amazonaws_elasticmapreduce.CreateSecurityConfiguration({}, context)
```


### DeleteSecurityConfiguration



```js
amazonaws_elasticmapreduce.DeleteSecurityConfiguration({}, context)
```


### DescribeCluster



```js
amazonaws_elasticmapreduce.DescribeCluster({}, context)
```


### DescribeJobFlows



```js
amazonaws_elasticmapreduce.DescribeJobFlows({}, context)
```


### DescribeSecurityConfiguration



```js
amazonaws_elasticmapreduce.DescribeSecurityConfiguration({}, context)
```


### DescribeStep



```js
amazonaws_elasticmapreduce.DescribeStep({}, context)
```


### ListBootstrapActions



```js
amazonaws_elasticmapreduce.ListBootstrapActions({}, context)
```

#### Parameters
* Marker (string)

### ListClusters



```js
amazonaws_elasticmapreduce.ListClusters({}, context)
```

#### Parameters
* Marker (string)

### ListInstanceFleets



```js
amazonaws_elasticmapreduce.ListInstanceFleets({}, context)
```

#### Parameters
* Marker (string)

### ListInstanceGroups



```js
amazonaws_elasticmapreduce.ListInstanceGroups({}, context)
```

#### Parameters
* Marker (string)

### ListInstances



```js
amazonaws_elasticmapreduce.ListInstances({}, context)
```

#### Parameters
* Marker (string)

### ListSecurityConfigurations



```js
amazonaws_elasticmapreduce.ListSecurityConfigurations({}, context)
```


### ListSteps



```js
amazonaws_elasticmapreduce.ListSteps({}, context)
```

#### Parameters
* Marker (string)

### ModifyInstanceFleet



```js
amazonaws_elasticmapreduce.ModifyInstanceFleet({}, context)
```


### ModifyInstanceGroups



```js
amazonaws_elasticmapreduce.ModifyInstanceGroups({}, context)
```


### PutAutoScalingPolicy



```js
amazonaws_elasticmapreduce.PutAutoScalingPolicy({}, context)
```


### RemoveAutoScalingPolicy



```js
amazonaws_elasticmapreduce.RemoveAutoScalingPolicy({}, context)
```


### RemoveTags



```js
amazonaws_elasticmapreduce.RemoveTags({}, context)
```


### RunJobFlow



```js
amazonaws_elasticmapreduce.RunJobFlow({}, context)
```


### SetTerminationProtection



```js
amazonaws_elasticmapreduce.SetTerminationProtection({}, context)
```


### SetVisibleToAllUsers



```js
amazonaws_elasticmapreduce.SetVisibleToAllUsers({}, context)
```


### TerminateJobFlows



```js
amazonaws_elasticmapreduce.TerminateJobFlows({}, context)
```


