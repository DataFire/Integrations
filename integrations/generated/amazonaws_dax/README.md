# @datafire/amazonaws_dax

Client library for Amazon DynamoDB Accelerator (DAX)

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_dax
```

```js
let datafire = require('datafire');
let amazonaws_dax = require('@datafire/amazonaws_dax').actions;
let context = new datafire.Context();

amazonaws_dax.CreateCluster({}, context).then(data => {
  console.log(data);
})
```

## Description
DAX is a managed caching service engineered for Amazon DynamoDB. DAX dramatically speeds up database reads by caching frequently-accessed data from DynamoDB, so applications can access that data with sub-millisecond latency. You can create a DAX cluster easily, using the AWS Management Console. With a few simple modifications to your code, your application can begin taking advantage of the DAX cluster and realize significant improvements in read performance.

## Actions
### CreateCluster



```js
amazonaws_dax.CreateCluster({}, context)
```

#### Parameters

### CreateParameterGroup



```js
amazonaws_dax.CreateParameterGroup({}, context)
```

#### Parameters

### CreateSubnetGroup



```js
amazonaws_dax.CreateSubnetGroup({}, context)
```

#### Parameters

### DecreaseReplicationFactor



```js
amazonaws_dax.DecreaseReplicationFactor({}, context)
```

#### Parameters

### DeleteCluster



```js
amazonaws_dax.DeleteCluster({}, context)
```

#### Parameters

### DeleteParameterGroup



```js
amazonaws_dax.DeleteParameterGroup({}, context)
```

#### Parameters

### DeleteSubnetGroup



```js
amazonaws_dax.DeleteSubnetGroup({}, context)
```

#### Parameters

### DescribeClusters



```js
amazonaws_dax.DescribeClusters({}, context)
```

#### Parameters

### DescribeDefaultParameters



```js
amazonaws_dax.DescribeDefaultParameters({}, context)
```

#### Parameters

### DescribeEvents



```js
amazonaws_dax.DescribeEvents({}, context)
```

#### Parameters

### DescribeParameterGroups



```js
amazonaws_dax.DescribeParameterGroups({}, context)
```

#### Parameters

### DescribeParameters



```js
amazonaws_dax.DescribeParameters({}, context)
```

#### Parameters

### DescribeSubnetGroups



```js
amazonaws_dax.DescribeSubnetGroups({}, context)
```

#### Parameters

### IncreaseReplicationFactor



```js
amazonaws_dax.IncreaseReplicationFactor({}, context)
```

#### Parameters

### ListTags



```js
amazonaws_dax.ListTags({}, context)
```

#### Parameters

### RebootNode



```js
amazonaws_dax.RebootNode({}, context)
```

#### Parameters

### TagResource



```js
amazonaws_dax.TagResource({}, context)
```

#### Parameters

### UntagResource



```js
amazonaws_dax.UntagResource({}, context)
```

#### Parameters

### UpdateCluster



```js
amazonaws_dax.UpdateCluster({}, context)
```

#### Parameters

### UpdateParameterGroup



```js
amazonaws_dax.UpdateParameterGroup({}, context)
```

#### Parameters

### UpdateSubnetGroup



```js
amazonaws_dax.UpdateSubnetGroup({}, context)
```

#### Parameters

