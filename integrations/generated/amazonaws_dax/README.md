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


### CreateParameterGroup



```js
amazonaws_dax.CreateParameterGroup({}, context)
```


### CreateSubnetGroup



```js
amazonaws_dax.CreateSubnetGroup({}, context)
```


### DecreaseReplicationFactor



```js
amazonaws_dax.DecreaseReplicationFactor({}, context)
```


### DeleteCluster



```js
amazonaws_dax.DeleteCluster({}, context)
```


### DeleteParameterGroup



```js
amazonaws_dax.DeleteParameterGroup({}, context)
```


### DeleteSubnetGroup



```js
amazonaws_dax.DeleteSubnetGroup({}, context)
```


### DescribeClusters



```js
amazonaws_dax.DescribeClusters({}, context)
```


### DescribeDefaultParameters



```js
amazonaws_dax.DescribeDefaultParameters({}, context)
```


### DescribeEvents



```js
amazonaws_dax.DescribeEvents({}, context)
```


### DescribeParameterGroups



```js
amazonaws_dax.DescribeParameterGroups({}, context)
```


### DescribeParameters



```js
amazonaws_dax.DescribeParameters({}, context)
```


### DescribeSubnetGroups



```js
amazonaws_dax.DescribeSubnetGroups({}, context)
```


### IncreaseReplicationFactor



```js
amazonaws_dax.IncreaseReplicationFactor({}, context)
```


### ListTags



```js
amazonaws_dax.ListTags({}, context)
```


### RebootNode



```js
amazonaws_dax.RebootNode({}, context)
```


### TagResource



```js
amazonaws_dax.TagResource({}, context)
```


### UntagResource



```js
amazonaws_dax.UntagResource({}, context)
```


### UpdateCluster



```js
amazonaws_dax.UpdateCluster({}, context)
```


### UpdateParameterGroup



```js
amazonaws_dax.UpdateParameterGroup({}, context)
```


### UpdateSubnetGroup



```js
amazonaws_dax.UpdateSubnetGroup({}, context)
```


