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

#### Input
* input `object`
  * AvailabilityZones [AvailabilityZoneList](#availabilityzonelist)
  * ClusterName **required** [String](#string)
  * Description [String](#string)
  * IamRoleArn **required** [String](#string)
  * NodeType **required** [String](#string)
  * NotificationTopicArn [String](#string)
  * ParameterGroupName [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * ReplicationFactor **required** [Integer](#integer)
  * SecurityGroupIds [SecurityGroupIdentifierList](#securitygroupidentifierlist)
  * SubnetGroupName [String](#string)
  * Tags [TagList](#taglist)

#### Output
* output [CreateClusterResponse](#createclusterresponse)

### CreateParameterGroup



```js
amazonaws_dax.CreateParameterGroup({
  "ParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * Description [String](#string)
  * ParameterGroupName **required** [String](#string)

#### Output
* output [CreateParameterGroupResponse](#createparametergroupresponse)

### CreateSubnetGroup



```js
amazonaws_dax.CreateSubnetGroup({
  "SubnetGroupName": "",
  "SubnetIds": []
}, context)
```

#### Input
* input `object`
  * Description [String](#string)
  * SubnetGroupName **required** [String](#string)
  * SubnetIds **required** [SubnetIdentifierList](#subnetidentifierlist)

#### Output
* output [CreateSubnetGroupResponse](#createsubnetgroupresponse)

### DecreaseReplicationFactor



```js
amazonaws_dax.DecreaseReplicationFactor({
  "ClusterName": "",
  "NewReplicationFactor": 0
}, context)
```

#### Input
* input `object`
  * AvailabilityZones [AvailabilityZoneList](#availabilityzonelist)
  * ClusterName **required** [String](#string)
  * NewReplicationFactor **required** [Integer](#integer)
  * NodeIdsToRemove [NodeIdentifierList](#nodeidentifierlist)

#### Output
* output [DecreaseReplicationFactorResponse](#decreasereplicationfactorresponse)

### DeleteCluster



```js
amazonaws_dax.DeleteCluster({
  "ClusterName": ""
}, context)
```

#### Input
* input `object`
  * ClusterName **required** [String](#string)

#### Output
* output [DeleteClusterResponse](#deleteclusterresponse)

### DeleteParameterGroup



```js
amazonaws_dax.DeleteParameterGroup({
  "ParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * ParameterGroupName **required** [String](#string)

#### Output
* output [DeleteParameterGroupResponse](#deleteparametergroupresponse)

### DeleteSubnetGroup



```js
amazonaws_dax.DeleteSubnetGroup({
  "SubnetGroupName": ""
}, context)
```

#### Input
* input `object`
  * SubnetGroupName **required** [String](#string)

#### Output
* output [DeleteSubnetGroupResponse](#deletesubnetgroupresponse)

### DescribeClusters



```js
amazonaws_dax.DescribeClusters({}, context)
```

#### Input
* input `object`
  * ClusterNames [ClusterNameList](#clusternamelist)
  * MaxResults [IntegerOptional](#integeroptional)
  * NextToken [String](#string)

#### Output
* output [DescribeClustersResponse](#describeclustersresponse)

### DescribeDefaultParameters



```js
amazonaws_dax.DescribeDefaultParameters({}, context)
```

#### Input
* input `object`
  * MaxResults [IntegerOptional](#integeroptional)
  * NextToken [String](#string)

#### Output
* output [DescribeDefaultParametersResponse](#describedefaultparametersresponse)

### DescribeEvents



```js
amazonaws_dax.DescribeEvents({}, context)
```

#### Input
* input `object`
  * Duration [IntegerOptional](#integeroptional)
  * EndTime [TStamp](#tstamp)
  * MaxResults [IntegerOptional](#integeroptional)
  * NextToken [String](#string)
  * SourceName [String](#string)
  * SourceType [SourceType](#sourcetype)
  * StartTime [TStamp](#tstamp)

#### Output
* output [DescribeEventsResponse](#describeeventsresponse)

### DescribeParameterGroups



```js
amazonaws_dax.DescribeParameterGroups({}, context)
```

#### Input
* input `object`
  * MaxResults [IntegerOptional](#integeroptional)
  * NextToken [String](#string)
  * ParameterGroupNames [ParameterGroupNameList](#parametergroupnamelist)

#### Output
* output [DescribeParameterGroupsResponse](#describeparametergroupsresponse)

### DescribeParameters



```js
amazonaws_dax.DescribeParameters({
  "ParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * MaxResults [IntegerOptional](#integeroptional)
  * NextToken [String](#string)
  * ParameterGroupName **required** [String](#string)
  * Source [String](#string)

#### Output
* output [DescribeParametersResponse](#describeparametersresponse)

### DescribeSubnetGroups



```js
amazonaws_dax.DescribeSubnetGroups({}, context)
```

#### Input
* input `object`
  * MaxResults [IntegerOptional](#integeroptional)
  * NextToken [String](#string)
  * SubnetGroupNames [SubnetGroupNameList](#subnetgroupnamelist)

#### Output
* output [DescribeSubnetGroupsResponse](#describesubnetgroupsresponse)

### IncreaseReplicationFactor



```js
amazonaws_dax.IncreaseReplicationFactor({
  "ClusterName": "",
  "NewReplicationFactor": 0
}, context)
```

#### Input
* input `object`
  * AvailabilityZones [AvailabilityZoneList](#availabilityzonelist)
  * ClusterName **required** [String](#string)
  * NewReplicationFactor **required** [Integer](#integer)

#### Output
* output [IncreaseReplicationFactorResponse](#increasereplicationfactorresponse)

### ListTags



```js
amazonaws_dax.ListTags({
  "ResourceName": ""
}, context)
```

#### Input
* input `object`
  * NextToken [String](#string)
  * ResourceName **required** [String](#string)

#### Output
* output [ListTagsResponse](#listtagsresponse)

### RebootNode



```js
amazonaws_dax.RebootNode({
  "ClusterName": "",
  "NodeId": ""
}, context)
```

#### Input
* input `object`
  * ClusterName **required** [String](#string)
  * NodeId **required** [String](#string)

#### Output
* output [RebootNodeResponse](#rebootnoderesponse)

### TagResource



```js
amazonaws_dax.TagResource({
  "ResourceName": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceName **required** [String](#string)
  * Tags **required** [TagList](#taglist)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_dax.UntagResource({
  "ResourceName": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceName **required** [String](#string)
  * TagKeys **required** [KeyList](#keylist)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateCluster



```js
amazonaws_dax.UpdateCluster({
  "ClusterName": ""
}, context)
```

#### Input
* input `object`
  * ClusterName **required** [String](#string)
  * Description [String](#string)
  * NotificationTopicArn [String](#string)
  * NotificationTopicStatus [String](#string)
  * ParameterGroupName [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * SecurityGroupIds [SecurityGroupIdentifierList](#securitygroupidentifierlist)

#### Output
* output [UpdateClusterResponse](#updateclusterresponse)

### UpdateParameterGroup



```js
amazonaws_dax.UpdateParameterGroup({
  "ParameterGroupName": "",
  "ParameterNameValues": []
}, context)
```

#### Input
* input `object`
  * ParameterGroupName **required** [String](#string)
  * ParameterNameValues **required** [ParameterNameValueList](#parameternamevaluelist)

#### Output
* output [UpdateParameterGroupResponse](#updateparametergroupresponse)

### UpdateSubnetGroup



```js
amazonaws_dax.UpdateSubnetGroup({
  "SubnetGroupName": ""
}, context)
```

#### Input
* input `object`
  * Description [String](#string)
  * SubnetGroupName **required** [String](#string)
  * SubnetIds [SubnetIdentifierList](#subnetidentifierlist)

#### Output
* output [UpdateSubnetGroupResponse](#updatesubnetgroupresponse)



## Definitions

### AvailabilityZoneList
* AvailabilityZoneList `array`
  * items [String](#string)

### AwsQueryErrorMessage
* AwsQueryErrorMessage `string`

### ChangeType
* ChangeType `string` (values: IMMEDIATE, REQUIRES_REBOOT)

### Cluster
* Cluster `object`: Contains all of the attributes of a specific DAX cluster.
  * ActiveNodes [IntegerOptional](#integeroptional)
  * ClusterArn [String](#string)
  * ClusterDiscoveryEndpoint [Endpoint](#endpoint)
  * ClusterName [String](#string)
  * Description [String](#string)
  * IamRoleArn [String](#string)
  * NodeIdsToRemove [NodeIdentifierList](#nodeidentifierlist)
  * NodeType [String](#string)
  * Nodes [NodeList](#nodelist)
  * NotificationConfiguration [NotificationConfiguration](#notificationconfiguration)
  * ParameterGroup [ParameterGroupStatus](#parametergroupstatus)
  * PreferredMaintenanceWindow [String](#string)
  * SecurityGroups [SecurityGroupMembershipList](#securitygroupmembershiplist)
  * Status [String](#string)
  * SubnetGroup [String](#string)
  * TotalNodes [IntegerOptional](#integeroptional)

### ClusterAlreadyExistsFault
* ClusterAlreadyExistsFault `object`: You already have a DAX cluster with the given identifier.

### ClusterList
* ClusterList `array`
  * items [Cluster](#cluster)

### ClusterNameList
* ClusterNameList `array`
  * items [String](#string)

### ClusterNotFoundFault
* ClusterNotFoundFault `object`: The requested cluster ID does not refer to an existing DAX cluster.

### ClusterQuotaForCustomerExceededFault
* ClusterQuotaForCustomerExceededFault `object`: You have attempted to exceed the maximum number of DAX clusters for your AWS account.

### CreateClusterRequest
* CreateClusterRequest `object`
  * AvailabilityZones [AvailabilityZoneList](#availabilityzonelist)
  * ClusterName **required** [String](#string)
  * Description [String](#string)
  * IamRoleArn **required** [String](#string)
  * NodeType **required** [String](#string)
  * NotificationTopicArn [String](#string)
  * ParameterGroupName [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * ReplicationFactor **required** [Integer](#integer)
  * SecurityGroupIds [SecurityGroupIdentifierList](#securitygroupidentifierlist)
  * SubnetGroupName [String](#string)
  * Tags [TagList](#taglist)

### CreateClusterResponse
* CreateClusterResponse `object`
  * Cluster [Cluster](#cluster)

### CreateParameterGroupRequest
* CreateParameterGroupRequest `object`
  * Description [String](#string)
  * ParameterGroupName **required** [String](#string)

### CreateParameterGroupResponse
* CreateParameterGroupResponse `object`
  * ParameterGroup [ParameterGroup](#parametergroup)

### CreateSubnetGroupRequest
* CreateSubnetGroupRequest `object`
  * Description [String](#string)
  * SubnetGroupName **required** [String](#string)
  * SubnetIds **required** [SubnetIdentifierList](#subnetidentifierlist)

### CreateSubnetGroupResponse
* CreateSubnetGroupResponse `object`
  * SubnetGroup [SubnetGroup](#subnetgroup)

### DecreaseReplicationFactorRequest
* DecreaseReplicationFactorRequest `object`
  * AvailabilityZones [AvailabilityZoneList](#availabilityzonelist)
  * ClusterName **required** [String](#string)
  * NewReplicationFactor **required** [Integer](#integer)
  * NodeIdsToRemove [NodeIdentifierList](#nodeidentifierlist)

### DecreaseReplicationFactorResponse
* DecreaseReplicationFactorResponse `object`
  * Cluster [Cluster](#cluster)

### DeleteClusterRequest
* DeleteClusterRequest `object`
  * ClusterName **required** [String](#string)

### DeleteClusterResponse
* DeleteClusterResponse `object`
  * Cluster [Cluster](#cluster)

### DeleteParameterGroupRequest
* DeleteParameterGroupRequest `object`
  * ParameterGroupName **required** [String](#string)

### DeleteParameterGroupResponse
* DeleteParameterGroupResponse `object`
  * DeletionMessage [String](#string)

### DeleteSubnetGroupRequest
* DeleteSubnetGroupRequest `object`
  * SubnetGroupName **required** [String](#string)

### DeleteSubnetGroupResponse
* DeleteSubnetGroupResponse `object`
  * DeletionMessage [String](#string)

### DescribeClustersRequest
* DescribeClustersRequest `object`
  * ClusterNames [ClusterNameList](#clusternamelist)
  * MaxResults [IntegerOptional](#integeroptional)
  * NextToken [String](#string)

### DescribeClustersResponse
* DescribeClustersResponse `object`
  * Clusters [ClusterList](#clusterlist)
  * NextToken [String](#string)

### DescribeDefaultParametersRequest
* DescribeDefaultParametersRequest `object`
  * MaxResults [IntegerOptional](#integeroptional)
  * NextToken [String](#string)

### DescribeDefaultParametersResponse
* DescribeDefaultParametersResponse `object`
  * NextToken [String](#string)
  * Parameters [ParameterList](#parameterlist)

### DescribeEventsRequest
* DescribeEventsRequest `object`
  * Duration [IntegerOptional](#integeroptional)
  * EndTime [TStamp](#tstamp)
  * MaxResults [IntegerOptional](#integeroptional)
  * NextToken [String](#string)
  * SourceName [String](#string)
  * SourceType [SourceType](#sourcetype)
  * StartTime [TStamp](#tstamp)

### DescribeEventsResponse
* DescribeEventsResponse `object`
  * Events [EventList](#eventlist)
  * NextToken [String](#string)

### DescribeParameterGroupsRequest
* DescribeParameterGroupsRequest `object`
  * MaxResults [IntegerOptional](#integeroptional)
  * NextToken [String](#string)
  * ParameterGroupNames [ParameterGroupNameList](#parametergroupnamelist)

### DescribeParameterGroupsResponse
* DescribeParameterGroupsResponse `object`
  * NextToken [String](#string)
  * ParameterGroups [ParameterGroupList](#parametergrouplist)

### DescribeParametersRequest
* DescribeParametersRequest `object`
  * MaxResults [IntegerOptional](#integeroptional)
  * NextToken [String](#string)
  * ParameterGroupName **required** [String](#string)
  * Source [String](#string)

### DescribeParametersResponse
* DescribeParametersResponse `object`
  * NextToken [String](#string)
  * Parameters [ParameterList](#parameterlist)

### DescribeSubnetGroupsRequest
* DescribeSubnetGroupsRequest `object`
  * MaxResults [IntegerOptional](#integeroptional)
  * NextToken [String](#string)
  * SubnetGroupNames [SubnetGroupNameList](#subnetgroupnamelist)

### DescribeSubnetGroupsResponse
* DescribeSubnetGroupsResponse `object`
  * NextToken [String](#string)
  * SubnetGroups [SubnetGroupList](#subnetgrouplist)

### Endpoint
* Endpoint `object`: Represents the information required for client programs to connect to the configuration endpoint for a DAX cluster, or to an individual node within the cluster.
  * Address [String](#string)
  * Port [Integer](#integer)

### Event
* Event `object`: Represents a single occurrence of something interesting within the system. Some examples of events are creating a DAX cluster, adding or removing a node, or rebooting a node.
  * Date [TStamp](#tstamp)
  * Message [String](#string)
  * SourceName [String](#string)
  * SourceType [SourceType](#sourcetype)

### EventList
* EventList `array`
  * items [Event](#event)

### IncreaseReplicationFactorRequest
* IncreaseReplicationFactorRequest `object`
  * AvailabilityZones [AvailabilityZoneList](#availabilityzonelist)
  * ClusterName **required** [String](#string)
  * NewReplicationFactor **required** [Integer](#integer)

### IncreaseReplicationFactorResponse
* IncreaseReplicationFactorResponse `object`
  * Cluster [Cluster](#cluster)

### InsufficientClusterCapacityFault
* InsufficientClusterCapacityFault `object`: There are not enough system resources to create the cluster you requested (or to resize an already-existing cluster). 

### Integer
* Integer `integer`

### IntegerOptional
* IntegerOptional `integer`

### InvalidARNFault
* InvalidARNFault `object`: The Amazon Resource Name (ARN) supplied in the request is not valid.

### InvalidClusterStateFault
* InvalidClusterStateFault `object`: The requested DAX cluster is not in the <i>available</i> state.

### InvalidParameterCombinationException
* InvalidParameterCombinationException `object`: Two or more incompatible parameters were specified.
  * message [AwsQueryErrorMessage](#awsqueryerrormessage)

### InvalidParameterGroupStateFault
* InvalidParameterGroupStateFault `object`: One or more parameters in a parameter group are in an invalid state.

### InvalidParameterValueException
* InvalidParameterValueException `object`: The value for a parameter is invalid.
  * message [AwsQueryErrorMessage](#awsqueryerrormessage)

### InvalidSubnet
* InvalidSubnet `object`: An invalid subnet identifier was specified.

### InvalidVPCNetworkStateFault
* InvalidVPCNetworkStateFault `object`: The VPC network is in an invalid state.

### IsModifiable
* IsModifiable `string` (values: TRUE, FALSE, CONDITIONAL)

### KeyList
* KeyList `array`
  * items [String](#string)

### ListTagsRequest
* ListTagsRequest `object`
  * NextToken [String](#string)
  * ResourceName **required** [String](#string)

### ListTagsResponse
* ListTagsResponse `object`
  * NextToken [String](#string)
  * Tags [TagList](#taglist)

### Node
* Node `object`: Represents an individual node within a DAX cluster.
  * AvailabilityZone [String](#string)
  * Endpoint [Endpoint](#endpoint)
  * NodeCreateTime [TStamp](#tstamp)
  * NodeId [String](#string)
  * NodeStatus [String](#string)
  * ParameterGroupStatus [String](#string)

### NodeIdentifierList
* NodeIdentifierList `array`
  * items [String](#string)

### NodeList
* NodeList `array`
  * items [Node](#node)

### NodeNotFoundFault
* NodeNotFoundFault `object`: None of the nodes in the cluster have the given node ID.

### NodeQuotaForClusterExceededFault
* NodeQuotaForClusterExceededFault `object`: You have attempted to exceed the maximum number of nodes for a DAX cluster.

### NodeQuotaForCustomerExceededFault
* NodeQuotaForCustomerExceededFault `object`: You have attempted to exceed the maximum number of nodes for your AWS account.

### NodeTypeSpecificValue
* NodeTypeSpecificValue `object`: Represents a parameter value that is applicable to a particular node type.
  * NodeType [String](#string)
  * Value [String](#string)

### NodeTypeSpecificValueList
* NodeTypeSpecificValueList `array`
  * items [NodeTypeSpecificValue](#nodetypespecificvalue)

### NotificationConfiguration
* NotificationConfiguration `object`: Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS).
  * TopicArn [String](#string)
  * TopicStatus [String](#string)

### Parameter
* Parameter `object`: Describes an individual setting that controls some aspect of DAX behavior.
  * AllowedValues [String](#string)
  * ChangeType [ChangeType](#changetype)
  * DataType [String](#string)
  * Description [String](#string)
  * IsModifiable [IsModifiable](#ismodifiable)
  * NodeTypeSpecificValues [NodeTypeSpecificValueList](#nodetypespecificvaluelist)
  * ParameterName [String](#string)
  * ParameterType [ParameterType](#parametertype)
  * ParameterValue [String](#string)
  * Source [String](#string)

### ParameterGroup
* ParameterGroup `object`: A named set of parameters that are applied to all of the nodes in a DAX cluster.
  * Description [String](#string)
  * ParameterGroupName [String](#string)

### ParameterGroupAlreadyExistsFault
* ParameterGroupAlreadyExistsFault `object`: The specified parameter group already exists.

### ParameterGroupList
* ParameterGroupList `array`
  * items [ParameterGroup](#parametergroup)

### ParameterGroupNameList
* ParameterGroupNameList `array`
  * items [String](#string)

### ParameterGroupNotFoundFault
* ParameterGroupNotFoundFault `object`: The specified parameter group does not exist.

### ParameterGroupQuotaExceededFault
* ParameterGroupQuotaExceededFault `object`: You have attempted to exceed the maximum number of parameter groups.

### ParameterGroupStatus
* ParameterGroupStatus `object`: The status of a parameter group.
  * NodeIdsToReboot [NodeIdentifierList](#nodeidentifierlist)
  * ParameterApplyStatus [String](#string)
  * ParameterGroupName [String](#string)

### ParameterList
* ParameterList `array`
  * items [Parameter](#parameter)

### ParameterNameValue
* ParameterNameValue `object`: An individual DAX parameter.
  * ParameterName [String](#string)
  * ParameterValue [String](#string)

### ParameterNameValueList
* ParameterNameValueList `array`
  * items [ParameterNameValue](#parameternamevalue)

### ParameterType
* ParameterType `string` (values: DEFAULT, NODE_TYPE_SPECIFIC)

### RebootNodeRequest
* RebootNodeRequest `object`
  * ClusterName **required** [String](#string)
  * NodeId **required** [String](#string)

### RebootNodeResponse
* RebootNodeResponse `object`
  * Cluster [Cluster](#cluster)

### SecurityGroupIdentifierList
* SecurityGroupIdentifierList `array`
  * items [String](#string)

### SecurityGroupMembership
* SecurityGroupMembership `object`: An individual VPC security group and its status.
  * SecurityGroupIdentifier [String](#string)
  * Status [String](#string)

### SecurityGroupMembershipList
* SecurityGroupMembershipList `array`
  * items [SecurityGroupMembership](#securitygroupmembership)

### SourceType
* SourceType `string` (values: CLUSTER, PARAMETER_GROUP, SUBNET_GROUP)

### String
* String `string`

### Subnet
* Subnet `object`: Represents the subnet associated with a DAX cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with DAX.
  * SubnetAvailabilityZone [String](#string)
  * SubnetIdentifier [String](#string)

### SubnetGroup
* SubnetGroup `object`: <p>Represents the output of one of the following actions:</p> <ul> <li> <p> <i>CreateSubnetGroup</i> </p> </li> <li> <p> <i>ModifySubnetGroup</i> </p> </li> </ul>
  * Description [String](#string)
  * SubnetGroupName [String](#string)
  * Subnets [SubnetList](#subnetlist)
  * VpcId [String](#string)

### SubnetGroupAlreadyExistsFault
* SubnetGroupAlreadyExistsFault `object`: The specified subnet group already exists.

### SubnetGroupInUseFault
* SubnetGroupInUseFault `object`: The specified subnet group is currently in use.

### SubnetGroupList
* SubnetGroupList `array`
  * items [SubnetGroup](#subnetgroup)

### SubnetGroupNameList
* SubnetGroupNameList `array`
  * items [String](#string)

### SubnetGroupNotFoundFault
* SubnetGroupNotFoundFault `object`: The requested subnet group name does not refer to an existing subnet group.

### SubnetGroupQuotaExceededFault
* SubnetGroupQuotaExceededFault `object`: The request cannot be processed because it would exceed the allowed number of subnets in a subnet group.

### SubnetIdentifierList
* SubnetIdentifierList `array`
  * items [String](#string)

### SubnetInUse
* SubnetInUse `object`: The requested subnet is being used by another subnet group.

### SubnetList
* SubnetList `array`
  * items [Subnet](#subnet)

### SubnetQuotaExceededFault
* SubnetQuotaExceededFault `object`: The request cannot be processed because it would exceed the allowed number of subnets in a subnet group.

### TStamp
* TStamp `string`

### Tag
* Tag `object`: <p>A description of a tag. Every tag is a key-value pair. You can add up to 50 tags to a single DAX cluster.</p> <p>AWS-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code>.</p> <p>You cannot backdate the application of a tag.</p>
  * Key [String](#string)
  * Value [String](#string)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagNotFoundFault
* TagNotFoundFault `object`: The tag does not exist.

### TagQuotaPerResourceExceeded
* TagQuotaPerResourceExceeded `object`: You have exceeded the maximum number of tags for this DAX cluster.

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceName **required** [String](#string)
  * Tags **required** [TagList](#taglist)

### TagResourceResponse
* TagResourceResponse `object`
  * Tags [TagList](#taglist)

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceName **required** [String](#string)
  * TagKeys **required** [KeyList](#keylist)

### UntagResourceResponse
* UntagResourceResponse `object`
  * Tags [TagList](#taglist)

### UpdateClusterRequest
* UpdateClusterRequest `object`
  * ClusterName **required** [String](#string)
  * Description [String](#string)
  * NotificationTopicArn [String](#string)
  * NotificationTopicStatus [String](#string)
  * ParameterGroupName [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * SecurityGroupIds [SecurityGroupIdentifierList](#securitygroupidentifierlist)

### UpdateClusterResponse
* UpdateClusterResponse `object`
  * Cluster [Cluster](#cluster)

### UpdateParameterGroupRequest
* UpdateParameterGroupRequest `object`
  * ParameterGroupName **required** [String](#string)
  * ParameterNameValues **required** [ParameterNameValueList](#parameternamevaluelist)

### UpdateParameterGroupResponse
* UpdateParameterGroupResponse `object`
  * ParameterGroup [ParameterGroup](#parametergroup)

### UpdateSubnetGroupRequest
* UpdateSubnetGroupRequest `object`
  * Description [String](#string)
  * SubnetGroupName **required** [String](#string)
  * SubnetIds [SubnetIdentifierList](#subnetidentifierlist)

### UpdateSubnetGroupResponse
* UpdateSubnetGroupResponse `object`
  * SubnetGroup [SubnetGroup](#subnetgroup)


