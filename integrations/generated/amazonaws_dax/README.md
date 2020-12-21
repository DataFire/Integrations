# @datafire/amazonaws_dax

Client library for Amazon DynamoDB Accelerator (DAX)

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_dax
```
```js
let amazonaws_dax = require('@datafire/amazonaws_dax').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

DAX is a managed caching service engineered for Amazon DynamoDB. DAX dramatically speeds up database reads by caching frequently-accessed data from DynamoDB, so applications can access that data with sub-millisecond latency. You can create a DAX cluster easily, using the AWS Management Console. With a few simple modifications to your code, your application can begin taking advantage of the DAX cluster and realize significant improvements in read performance.

## Actions

### CreateCluster



```js
amazonaws_dax.CreateCluster({
  "ClusterName": null,
  "NodeType": null,
  "ReplicationFactor": null,
  "IamRoleArn": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZones
    * items [String](#string)
  * ClusterName **required**
  * Description
  * IamRoleArn **required**
  * NodeType **required**
  * NotificationTopicArn
  * ParameterGroupName
  * PreferredMaintenanceWindow
  * ReplicationFactor **required**
  * SSESpecification
    * Enabled **required**
  * SecurityGroupIds
    * items [String](#string)
  * SubnetGroupName
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateClusterResponse](#createclusterresponse)

### CreateParameterGroup



```js
amazonaws_dax.CreateParameterGroup({
  "ParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * Description
  * ParameterGroupName **required**

#### Output
* output [CreateParameterGroupResponse](#createparametergroupresponse)

### CreateSubnetGroup



```js
amazonaws_dax.CreateSubnetGroup({
  "SubnetGroupName": null,
  "SubnetIds": null
}, context)
```

#### Input
* input `object`
  * Description
  * SubnetGroupName **required**
  * SubnetIds **required**
    * items [String](#string)

#### Output
* output [CreateSubnetGroupResponse](#createsubnetgroupresponse)

### DecreaseReplicationFactor



```js
amazonaws_dax.DecreaseReplicationFactor({
  "ClusterName": null,
  "NewReplicationFactor": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZones
    * items [String](#string)
  * ClusterName **required**
  * NewReplicationFactor **required**
  * NodeIdsToRemove
    * items [String](#string)

#### Output
* output [DecreaseReplicationFactorResponse](#decreasereplicationfactorresponse)

### DeleteCluster



```js
amazonaws_dax.DeleteCluster({
  "ClusterName": null
}, context)
```

#### Input
* input `object`
  * ClusterName **required**

#### Output
* output [DeleteClusterResponse](#deleteclusterresponse)

### DeleteParameterGroup



```js
amazonaws_dax.DeleteParameterGroup({
  "ParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * ParameterGroupName **required**

#### Output
* output [DeleteParameterGroupResponse](#deleteparametergroupresponse)

### DeleteSubnetGroup



```js
amazonaws_dax.DeleteSubnetGroup({
  "SubnetGroupName": null
}, context)
```

#### Input
* input `object`
  * SubnetGroupName **required**

#### Output
* output [DeleteSubnetGroupResponse](#deletesubnetgroupresponse)

### DescribeClusters



```js
amazonaws_dax.DescribeClusters({}, context)
```

#### Input
* input `object`
  * ClusterNames
    * items [String](#string)
  * MaxResults
  * NextToken

#### Output
* output [DescribeClustersResponse](#describeclustersresponse)

### DescribeDefaultParameters



```js
amazonaws_dax.DescribeDefaultParameters({}, context)
```

#### Input
* input `object`
  * MaxResults
  * NextToken

#### Output
* output [DescribeDefaultParametersResponse](#describedefaultparametersresponse)

### DescribeEvents



```js
amazonaws_dax.DescribeEvents({}, context)
```

#### Input
* input `object`
  * Duration
  * EndTime
  * MaxResults
  * NextToken
  * SourceName
  * SourceType
  * StartTime

#### Output
* output [DescribeEventsResponse](#describeeventsresponse)

### DescribeParameterGroups



```js
amazonaws_dax.DescribeParameterGroups({}, context)
```

#### Input
* input `object`
  * MaxResults
  * NextToken
  * ParameterGroupNames
    * items [String](#string)

#### Output
* output [DescribeParameterGroupsResponse](#describeparametergroupsresponse)

### DescribeParameters



```js
amazonaws_dax.DescribeParameters({
  "ParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * MaxResults
  * NextToken
  * ParameterGroupName **required**
  * Source

#### Output
* output [DescribeParametersResponse](#describeparametersresponse)

### DescribeSubnetGroups



```js
amazonaws_dax.DescribeSubnetGroups({}, context)
```

#### Input
* input `object`
  * MaxResults
  * NextToken
  * SubnetGroupNames
    * items [String](#string)

#### Output
* output [DescribeSubnetGroupsResponse](#describesubnetgroupsresponse)

### IncreaseReplicationFactor



```js
amazonaws_dax.IncreaseReplicationFactor({
  "ClusterName": null,
  "NewReplicationFactor": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZones
    * items [String](#string)
  * ClusterName **required**
  * NewReplicationFactor **required**

#### Output
* output [IncreaseReplicationFactorResponse](#increasereplicationfactorresponse)

### ListTags



```js
amazonaws_dax.ListTags({
  "ResourceName": null
}, context)
```

#### Input
* input `object`
  * NextToken
  * ResourceName **required**

#### Output
* output [ListTagsResponse](#listtagsresponse)

### RebootNode



```js
amazonaws_dax.RebootNode({
  "ClusterName": null,
  "NodeId": null
}, context)
```

#### Input
* input `object`
  * ClusterName **required**
  * NodeId **required**

#### Output
* output [RebootNodeResponse](#rebootnoderesponse)

### TagResource



```js
amazonaws_dax.TagResource({
  "ResourceName": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceName **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_dax.UntagResource({
  "ResourceName": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceName **required**
  * TagKeys **required**
    * items [String](#string)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateCluster



```js
amazonaws_dax.UpdateCluster({
  "ClusterName": null
}, context)
```

#### Input
* input `object`
  * ClusterName **required**
  * Description
  * NotificationTopicArn
  * NotificationTopicStatus
  * ParameterGroupName
  * PreferredMaintenanceWindow
  * SecurityGroupIds
    * items [String](#string)

#### Output
* output [UpdateClusterResponse](#updateclusterresponse)

### UpdateParameterGroup



```js
amazonaws_dax.UpdateParameterGroup({
  "ParameterGroupName": null,
  "ParameterNameValues": null
}, context)
```

#### Input
* input `object`
  * ParameterGroupName **required**
  * ParameterNameValues **required**
    * items [ParameterNameValue](#parameternamevalue)

#### Output
* output [UpdateParameterGroupResponse](#updateparametergroupresponse)

### UpdateSubnetGroup



```js
amazonaws_dax.UpdateSubnetGroup({
  "SubnetGroupName": null
}, context)
```

#### Input
* input `object`
  * Description
  * SubnetGroupName **required**
  * SubnetIds
    * items [String](#string)

#### Output
* output [UpdateSubnetGroupResponse](#updatesubnetgroupresponse)



## Definitions

### AvailabilityZoneList
* AvailabilityZoneList `array`
  * items [String](#string)

### ChangeType
* ChangeType `string` (values: IMMEDIATE, REQUIRES_REBOOT)

### Cluster
* Cluster `object`: Contains all of the attributes of a specific DAX cluster.
  * ActiveNodes
  * ClusterArn
  * ClusterDiscoveryEndpoint
    * Address
    * Port
  * ClusterName
  * Description
  * IamRoleArn
  * NodeIdsToRemove
    * items [String](#string)
  * NodeType
  * Nodes
    * items [Node](#node)
  * NotificationConfiguration
    * TopicArn
    * TopicStatus
  * ParameterGroup
    * NodeIdsToReboot
      * items [String](#string)
    * ParameterApplyStatus
    * ParameterGroupName
  * PreferredMaintenanceWindow
  * SSEDescription
    * Status
  * SecurityGroups
    * items [SecurityGroupMembership](#securitygroupmembership)
  * Status
  * SubnetGroup
  * TotalNodes

### ClusterAlreadyExistsFault


### ClusterList
* ClusterList `array`
  * items [Cluster](#cluster)

### ClusterNameList
* ClusterNameList `array`
  * items [String](#string)

### ClusterNotFoundFault


### ClusterQuotaForCustomerExceededFault


### CreateClusterRequest
* CreateClusterRequest `object`
  * AvailabilityZones
    * items [String](#string)
  * ClusterName **required**
  * Description
  * IamRoleArn **required**
  * NodeType **required**
  * NotificationTopicArn
  * ParameterGroupName
  * PreferredMaintenanceWindow
  * ReplicationFactor **required**
  * SSESpecification
    * Enabled **required**
  * SecurityGroupIds
    * items [String](#string)
  * SubnetGroupName
  * Tags
    * items [Tag](#tag)

### CreateClusterResponse
* CreateClusterResponse `object`
  * Cluster
    * ActiveNodes
    * ClusterArn
    * ClusterDiscoveryEndpoint
      * Address
      * Port
    * ClusterName
    * Description
    * IamRoleArn
    * NodeIdsToRemove
      * items [String](#string)
    * NodeType
    * Nodes
      * items [Node](#node)
    * NotificationConfiguration
      * TopicArn
      * TopicStatus
    * ParameterGroup
      * NodeIdsToReboot
        * items [String](#string)
      * ParameterApplyStatus
      * ParameterGroupName
    * PreferredMaintenanceWindow
    * SSEDescription
      * Status
    * SecurityGroups
      * items [SecurityGroupMembership](#securitygroupmembership)
    * Status
    * SubnetGroup
    * TotalNodes

### CreateParameterGroupRequest
* CreateParameterGroupRequest `object`
  * Description
  * ParameterGroupName **required**

### CreateParameterGroupResponse
* CreateParameterGroupResponse `object`
  * ParameterGroup
    * Description
    * ParameterGroupName

### CreateSubnetGroupRequest
* CreateSubnetGroupRequest `object`
  * Description
  * SubnetGroupName **required**
  * SubnetIds **required**
    * items [String](#string)

### CreateSubnetGroupResponse
* CreateSubnetGroupResponse `object`
  * SubnetGroup
    * Description
    * SubnetGroupName
    * Subnets
      * items [Subnet](#subnet)
    * VpcId

### DecreaseReplicationFactorRequest
* DecreaseReplicationFactorRequest `object`
  * AvailabilityZones
    * items [String](#string)
  * ClusterName **required**
  * NewReplicationFactor **required**
  * NodeIdsToRemove
    * items [String](#string)

### DecreaseReplicationFactorResponse
* DecreaseReplicationFactorResponse `object`
  * Cluster
    * ActiveNodes
    * ClusterArn
    * ClusterDiscoveryEndpoint
      * Address
      * Port
    * ClusterName
    * Description
    * IamRoleArn
    * NodeIdsToRemove
      * items [String](#string)
    * NodeType
    * Nodes
      * items [Node](#node)
    * NotificationConfiguration
      * TopicArn
      * TopicStatus
    * ParameterGroup
      * NodeIdsToReboot
        * items [String](#string)
      * ParameterApplyStatus
      * ParameterGroupName
    * PreferredMaintenanceWindow
    * SSEDescription
      * Status
    * SecurityGroups
      * items [SecurityGroupMembership](#securitygroupmembership)
    * Status
    * SubnetGroup
    * TotalNodes

### DeleteClusterRequest
* DeleteClusterRequest `object`
  * ClusterName **required**

### DeleteClusterResponse
* DeleteClusterResponse `object`
  * Cluster
    * ActiveNodes
    * ClusterArn
    * ClusterDiscoveryEndpoint
      * Address
      * Port
    * ClusterName
    * Description
    * IamRoleArn
    * NodeIdsToRemove
      * items [String](#string)
    * NodeType
    * Nodes
      * items [Node](#node)
    * NotificationConfiguration
      * TopicArn
      * TopicStatus
    * ParameterGroup
      * NodeIdsToReboot
        * items [String](#string)
      * ParameterApplyStatus
      * ParameterGroupName
    * PreferredMaintenanceWindow
    * SSEDescription
      * Status
    * SecurityGroups
      * items [SecurityGroupMembership](#securitygroupmembership)
    * Status
    * SubnetGroup
    * TotalNodes

### DeleteParameterGroupRequest
* DeleteParameterGroupRequest `object`
  * ParameterGroupName **required**

### DeleteParameterGroupResponse
* DeleteParameterGroupResponse `object`
  * DeletionMessage

### DeleteSubnetGroupRequest
* DeleteSubnetGroupRequest `object`
  * SubnetGroupName **required**

### DeleteSubnetGroupResponse
* DeleteSubnetGroupResponse `object`
  * DeletionMessage

### DescribeClustersRequest
* DescribeClustersRequest `object`
  * ClusterNames
    * items [String](#string)
  * MaxResults
  * NextToken

### DescribeClustersResponse
* DescribeClustersResponse `object`
  * Clusters
    * items [Cluster](#cluster)
  * NextToken

### DescribeDefaultParametersRequest
* DescribeDefaultParametersRequest `object`
  * MaxResults
  * NextToken

### DescribeDefaultParametersResponse
* DescribeDefaultParametersResponse `object`
  * NextToken
  * Parameters
    * items [Parameter](#parameter)

### DescribeEventsRequest
* DescribeEventsRequest `object`
  * Duration
  * EndTime
  * MaxResults
  * NextToken
  * SourceName
  * SourceType
  * StartTime

### DescribeEventsResponse
* DescribeEventsResponse `object`
  * Events
    * items [Event](#event)
  * NextToken

### DescribeParameterGroupsRequest
* DescribeParameterGroupsRequest `object`
  * MaxResults
  * NextToken
  * ParameterGroupNames
    * items [String](#string)

### DescribeParameterGroupsResponse
* DescribeParameterGroupsResponse `object`
  * NextToken
  * ParameterGroups
    * items [ParameterGroup](#parametergroup)

### DescribeParametersRequest
* DescribeParametersRequest `object`
  * MaxResults
  * NextToken
  * ParameterGroupName **required**
  * Source

### DescribeParametersResponse
* DescribeParametersResponse `object`
  * NextToken
  * Parameters
    * items [Parameter](#parameter)

### DescribeSubnetGroupsRequest
* DescribeSubnetGroupsRequest `object`
  * MaxResults
  * NextToken
  * SubnetGroupNames
    * items [String](#string)

### DescribeSubnetGroupsResponse
* DescribeSubnetGroupsResponse `object`
  * NextToken
  * SubnetGroups
    * items [SubnetGroup](#subnetgroup)

### Endpoint
* Endpoint `object`: Represents the information required for client programs to connect to the configuration endpoint for a DAX cluster, or to an individual node within the cluster.
  * Address
  * Port

### Event
* Event `object`: Represents a single occurrence of something interesting within the system. Some examples of events are creating a DAX cluster, adding or removing a node, or rebooting a node.
  * Date
  * Message
  * SourceName
  * SourceType

### EventList
* EventList `array`
  * items [Event](#event)

### IncreaseReplicationFactorRequest
* IncreaseReplicationFactorRequest `object`
  * AvailabilityZones
    * items [String](#string)
  * ClusterName **required**
  * NewReplicationFactor **required**

### IncreaseReplicationFactorResponse
* IncreaseReplicationFactorResponse `object`
  * Cluster
    * ActiveNodes
    * ClusterArn
    * ClusterDiscoveryEndpoint
      * Address
      * Port
    * ClusterName
    * Description
    * IamRoleArn
    * NodeIdsToRemove
      * items [String](#string)
    * NodeType
    * Nodes
      * items [Node](#node)
    * NotificationConfiguration
      * TopicArn
      * TopicStatus
    * ParameterGroup
      * NodeIdsToReboot
        * items [String](#string)
      * ParameterApplyStatus
      * ParameterGroupName
    * PreferredMaintenanceWindow
    * SSEDescription
      * Status
    * SecurityGroups
      * items [SecurityGroupMembership](#securitygroupmembership)
    * Status
    * SubnetGroup
    * TotalNodes

### InsufficientClusterCapacityFault


### Integer
* Integer `integer`

### IntegerOptional
* IntegerOptional `integer`

### InvalidARNFault


### InvalidClusterStateFault


### InvalidParameterCombinationException


### InvalidParameterGroupStateFault


### InvalidParameterValueException


### InvalidSubnet


### InvalidVPCNetworkStateFault


### IsModifiable
* IsModifiable `string` (values: TRUE, FALSE, CONDITIONAL)

### KeyList
* KeyList `array`
  * items [String](#string)

### ListTagsRequest
* ListTagsRequest `object`
  * NextToken
  * ResourceName **required**

### ListTagsResponse
* ListTagsResponse `object`
  * NextToken
  * Tags
    * items [Tag](#tag)

### Node
* Node `object`: Represents an individual node within a DAX cluster.
  * AvailabilityZone
  * Endpoint
    * Address
    * Port
  * NodeCreateTime
  * NodeId
  * NodeStatus
  * ParameterGroupStatus

### NodeIdentifierList
* NodeIdentifierList `array`
  * items [String](#string)

### NodeList
* NodeList `array`
  * items [Node](#node)

### NodeNotFoundFault


### NodeQuotaForClusterExceededFault


### NodeQuotaForCustomerExceededFault


### NodeTypeSpecificValue
* NodeTypeSpecificValue `object`: Represents a parameter value that is applicable to a particular node type.
  * NodeType
  * Value

### NodeTypeSpecificValueList
* NodeTypeSpecificValueList `array`
  * items [NodeTypeSpecificValue](#nodetypespecificvalue)

### NotificationConfiguration
* NotificationConfiguration `object`: Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS).
  * TopicArn
  * TopicStatus

### Parameter
* Parameter `object`: Describes an individual setting that controls some aspect of DAX behavior.
  * AllowedValues
  * ChangeType
  * DataType
  * Description
  * IsModifiable
  * NodeTypeSpecificValues
    * items [NodeTypeSpecificValue](#nodetypespecificvalue)
  * ParameterName
  * ParameterType
  * ParameterValue
  * Source

### ParameterGroup
* ParameterGroup `object`: A named set of parameters that are applied to all of the nodes in a DAX cluster.
  * Description
  * ParameterGroupName

### ParameterGroupAlreadyExistsFault


### ParameterGroupList
* ParameterGroupList `array`
  * items [ParameterGroup](#parametergroup)

### ParameterGroupNameList
* ParameterGroupNameList `array`
  * items [String](#string)

### ParameterGroupNotFoundFault


### ParameterGroupQuotaExceededFault


### ParameterGroupStatus
* ParameterGroupStatus `object`: The status of a parameter group.
  * NodeIdsToReboot
    * items [String](#string)
  * ParameterApplyStatus
  * ParameterGroupName

### ParameterList
* ParameterList `array`
  * items [Parameter](#parameter)

### ParameterNameValue
* ParameterNameValue `object`: An individual DAX parameter.
  * ParameterName
  * ParameterValue

### ParameterNameValueList
* ParameterNameValueList `array`
  * items [ParameterNameValue](#parameternamevalue)

### ParameterType
* ParameterType `string` (values: DEFAULT, NODE_TYPE_SPECIFIC)

### RebootNodeRequest
* RebootNodeRequest `object`
  * ClusterName **required**
  * NodeId **required**

### RebootNodeResponse
* RebootNodeResponse `object`
  * Cluster
    * ActiveNodes
    * ClusterArn
    * ClusterDiscoveryEndpoint
      * Address
      * Port
    * ClusterName
    * Description
    * IamRoleArn
    * NodeIdsToRemove
      * items [String](#string)
    * NodeType
    * Nodes
      * items [Node](#node)
    * NotificationConfiguration
      * TopicArn
      * TopicStatus
    * ParameterGroup
      * NodeIdsToReboot
        * items [String](#string)
      * ParameterApplyStatus
      * ParameterGroupName
    * PreferredMaintenanceWindow
    * SSEDescription
      * Status
    * SecurityGroups
      * items [SecurityGroupMembership](#securitygroupmembership)
    * Status
    * SubnetGroup
    * TotalNodes

### SSEDescription
* SSEDescription `object`: The description of the server-side encryption status on the specified DAX cluster.
  * Status

### SSEEnabled
* SSEEnabled `boolean`

### SSESpecification
* SSESpecification `object`: Represents the settings used to enable server-side encryption.
  * Enabled **required**

### SSEStatus
* SSEStatus `string` (values: ENABLING, ENABLED, DISABLING, DISABLED)

### SecurityGroupIdentifierList
* SecurityGroupIdentifierList `array`
  * items [String](#string)

### SecurityGroupMembership
* SecurityGroupMembership `object`: An individual VPC security group and its status.
  * SecurityGroupIdentifier
  * Status

### SecurityGroupMembershipList
* SecurityGroupMembershipList `array`
  * items [SecurityGroupMembership](#securitygroupmembership)

### ServiceLinkedRoleNotFoundFault


### SourceType
* SourceType `string` (values: CLUSTER, PARAMETER_GROUP, SUBNET_GROUP)

### String
* String `string`

### Subnet
* Subnet `object`: Represents the subnet associated with a DAX cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with DAX.
  * SubnetAvailabilityZone
  * SubnetIdentifier

### SubnetGroup
* SubnetGroup `object`: <p>Represents the output of one of the following actions:</p> <ul> <li> <p> <i>CreateSubnetGroup</i> </p> </li> <li> <p> <i>ModifySubnetGroup</i> </p> </li> </ul>
  * Description
  * SubnetGroupName
  * Subnets
    * items [Subnet](#subnet)
  * VpcId

### SubnetGroupAlreadyExistsFault


### SubnetGroupInUseFault


### SubnetGroupList
* SubnetGroupList `array`
  * items [SubnetGroup](#subnetgroup)

### SubnetGroupNameList
* SubnetGroupNameList `array`
  * items [String](#string)

### SubnetGroupNotFoundFault


### SubnetGroupQuotaExceededFault


### SubnetIdentifierList
* SubnetIdentifierList `array`
  * items [String](#string)

### SubnetInUse


### SubnetList
* SubnetList `array`
  * items [Subnet](#subnet)

### SubnetQuotaExceededFault


### TStamp
* TStamp `string`

### Tag
* Tag `object`: <p>A description of a tag. Every tag is a key-value pair. You can add up to 50 tags to a single DAX cluster.</p> <p>AWS-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code>.</p> <p>You cannot backdate the application of a tag.</p>
  * Key
  * Value

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagNotFoundFault


### TagQuotaPerResourceExceeded


### TagResourceRequest
* TagResourceRequest `object`
  * ResourceName **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceName **required**
  * TagKeys **required**
    * items [String](#string)

### UntagResourceResponse
* UntagResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### UpdateClusterRequest
* UpdateClusterRequest `object`
  * ClusterName **required**
  * Description
  * NotificationTopicArn
  * NotificationTopicStatus
  * ParameterGroupName
  * PreferredMaintenanceWindow
  * SecurityGroupIds
    * items [String](#string)

### UpdateClusterResponse
* UpdateClusterResponse `object`
  * Cluster
    * ActiveNodes
    * ClusterArn
    * ClusterDiscoveryEndpoint
      * Address
      * Port
    * ClusterName
    * Description
    * IamRoleArn
    * NodeIdsToRemove
      * items [String](#string)
    * NodeType
    * Nodes
      * items [Node](#node)
    * NotificationConfiguration
      * TopicArn
      * TopicStatus
    * ParameterGroup
      * NodeIdsToReboot
        * items [String](#string)
      * ParameterApplyStatus
      * ParameterGroupName
    * PreferredMaintenanceWindow
    * SSEDescription
      * Status
    * SecurityGroups
      * items [SecurityGroupMembership](#securitygroupmembership)
    * Status
    * SubnetGroup
    * TotalNodes

### UpdateParameterGroupRequest
* UpdateParameterGroupRequest `object`
  * ParameterGroupName **required**
  * ParameterNameValues **required**
    * items [ParameterNameValue](#parameternamevalue)

### UpdateParameterGroupResponse
* UpdateParameterGroupResponse `object`
  * ParameterGroup
    * Description
    * ParameterGroupName

### UpdateSubnetGroupRequest
* UpdateSubnetGroupRequest `object`
  * Description
  * SubnetGroupName **required**
  * SubnetIds
    * items [String](#string)

### UpdateSubnetGroupResponse
* UpdateSubnetGroupResponse `object`
  * SubnetGroup
    * Description
    * SubnetGroupName
    * Subnets
      * items [Subnet](#subnet)
    * VpcId


