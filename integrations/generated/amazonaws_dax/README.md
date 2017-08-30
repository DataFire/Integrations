# @datafire/amazonaws_dax

Client library for Amazon DynamoDB Accelerator (DAX)

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_dax
```

```js
let datafire = require('datafire');
let amazonaws_dax = require('@datafire/amazonaws_dax').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_dax.CreateCluster({}).then(data => {
  console.log(data);
})
```

## Description
DAX is a managed caching service engineered for Amazon DynamoDB. DAX dramatically speeds up database reads by caching frequently-accessed data from DynamoDB, so applications can access that data with sub-millisecond latency. You can create a DAX cluster easily, using the AWS Management Console. With a few simple modifications to your code, your application can begin taking advantage of the DAX cluster and realize significant improvements in read performance.

## Actions
### CreateCluster



```js
amazonaws_dax.CreateCluster({
  "ClusterName": "",
  "NodeType": "",
  "ReplicationFactor": 0,
  "IamRoleArn": ""
}, context)
```

#### Parameters
* AvailabilityZones (array)
* ClusterName (string) **required**
* Description (string)
* IamRoleArn (string) **required**
* NodeType (string) **required**
* NotificationTopicArn (string)
* ParameterGroupName (string)
* PreferredMaintenanceWindow (string)
* ReplicationFactor (integer) **required**
* SecurityGroupIds (array)
* SubnetGroupName (string)
* Tags (array)

### CreateParameterGroup



```js
amazonaws_dax.CreateParameterGroup({
  "ParameterGroupName": ""
}, context)
```

#### Parameters
* Description (string)
* ParameterGroupName (string) **required**

### CreateSubnetGroup



```js
amazonaws_dax.CreateSubnetGroup({
  "SubnetGroupName": "",
  "SubnetIds": []
}, context)
```

#### Parameters
* Description (string)
* SubnetGroupName (string) **required**
* SubnetIds (array) **required**

### DecreaseReplicationFactor



```js
amazonaws_dax.DecreaseReplicationFactor({
  "ClusterName": "",
  "NewReplicationFactor": 0
}, context)
```

#### Parameters
* AvailabilityZones (array)
* ClusterName (string) **required**
* NewReplicationFactor (integer) **required**
* NodeIdsToRemove (array)

### DeleteCluster



```js
amazonaws_dax.DeleteCluster({
  "ClusterName": ""
}, context)
```

#### Parameters
* ClusterName (string) **required**

### DeleteParameterGroup



```js
amazonaws_dax.DeleteParameterGroup({
  "ParameterGroupName": ""
}, context)
```

#### Parameters
* ParameterGroupName (string) **required**

### DeleteSubnetGroup



```js
amazonaws_dax.DeleteSubnetGroup({
  "SubnetGroupName": ""
}, context)
```

#### Parameters
* SubnetGroupName (string) **required**

### DescribeClusters



```js
amazonaws_dax.DescribeClusters({}, context)
```

#### Parameters
* ClusterNames (array)
* MaxResults (integer)
* NextToken (string)

### DescribeDefaultParameters



```js
amazonaws_dax.DescribeDefaultParameters({}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)

### DescribeEvents



```js
amazonaws_dax.DescribeEvents({}, context)
```

#### Parameters
* Duration (integer)
* EndTime (string)
* MaxResults (integer)
* NextToken (string)
* SourceName (string)
* SourceType (string)
* StartTime (string)

### DescribeParameterGroups



```js
amazonaws_dax.DescribeParameterGroups({}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)
* ParameterGroupNames (array)

### DescribeParameters



```js
amazonaws_dax.DescribeParameters({
  "ParameterGroupName": ""
}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)
* ParameterGroupName (string) **required**
* Source (string)

### DescribeSubnetGroups



```js
amazonaws_dax.DescribeSubnetGroups({}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)
* SubnetGroupNames (array)

### IncreaseReplicationFactor



```js
amazonaws_dax.IncreaseReplicationFactor({
  "ClusterName": "",
  "NewReplicationFactor": 0
}, context)
```

#### Parameters
* AvailabilityZones (array)
* ClusterName (string) **required**
* NewReplicationFactor (integer) **required**

### ListTags



```js
amazonaws_dax.ListTags({
  "ResourceName": ""
}, context)
```

#### Parameters
* NextToken (string)
* ResourceName (string) **required**

### RebootNode



```js
amazonaws_dax.RebootNode({
  "ClusterName": "",
  "NodeId": ""
}, context)
```

#### Parameters
* ClusterName (string) **required**
* NodeId (string) **required**

### TagResource



```js
amazonaws_dax.TagResource({
  "ResourceName": "",
  "Tags": []
}, context)
```

#### Parameters
* ResourceName (string) **required**
* Tags (array) **required**

### UntagResource



```js
amazonaws_dax.UntagResource({
  "ResourceName": "",
  "TagKeys": []
}, context)
```

#### Parameters
* ResourceName (string) **required**
* TagKeys (array) **required**

### UpdateCluster



```js
amazonaws_dax.UpdateCluster({
  "ClusterName": ""
}, context)
```

#### Parameters
* ClusterName (string) **required**
* Description (string)
* NotificationTopicArn (string)
* NotificationTopicStatus (string)
* ParameterGroupName (string)
* PreferredMaintenanceWindow (string)
* SecurityGroupIds (array)

### UpdateParameterGroup



```js
amazonaws_dax.UpdateParameterGroup({
  "ParameterGroupName": "",
  "ParameterNameValues": []
}, context)
```

#### Parameters
* ParameterGroupName (string) **required**
* ParameterNameValues (array) **required**

### UpdateSubnetGroup



```js
amazonaws_dax.UpdateSubnetGroup({
  "SubnetGroupName": ""
}, context)
```

#### Parameters
* Description (string)
* SubnetGroupName (string) **required**
* SubnetIds (array)

