# @datafire/amazonaws_resource_groups

Client library for AWS Resource Groups

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_resource_groups
```
```js
let amazonaws_resource_groups = require('@datafire/amazonaws_resource_groups').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Resource Groups</fullname> <p>AWS Resource Groups lets you organize AWS resources such as Amazon EC2 instances, Amazon Relational Database Service databases, and Amazon S3 buckets into groups using criteria that you define as tags. A resource group is a collection of resources that match the resource types specified in a query, and share one or more tags or portions of tags. You can create a group of resources based on their roles in your cloud infrastructure, lifecycle stages, regions, application layers, or virtually any criteria. Resource Groups enable you to automate management tasks, such as those in AWS Systems Manager Automation documents, on tag-related resources in AWS Systems Manager. Groups of tagged resources also let you quickly view a custom console in AWS Systems Manager that shows AWS Config compliance and other monitoring data about member resources.</p> <p>To create a resource group, build a resource query, and specify tags that identify the criteria that members of the group have in common. Tags are key-value pairs.</p> <p>For more information about Resource Groups, see the <a href="https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html">AWS Resource Groups User Guide</a>.</p> <p>AWS Resource Groups uses a REST-compliant API that you can use to perform the following types of operations.</p> <ul> <li> <p>Create, Read, Update, and Delete (CRUD) operations on resource groups and resource query entities</p> </li> <li> <p>Applying, editing, and removing tags from resource groups</p> </li> <li> <p>Resolving resource group member ARNs so they can be returned as search results</p> </li> <li> <p>Getting data about resources that are members of a group</p> </li> <li> <p>Searching AWS resources based on a resource query</p> </li> </ul>

## Actions

### DeleteGroup



```js
amazonaws_resource_groups.DeleteGroup({}, context)
```

#### Input
* input `object`
  * Group `string`: The name or the ARN of the resource group to delete.
  * GroupName `string`: Don't use this parameter. Use <code>Group</code> instead.

#### Output
* output [DeleteGroupOutput](#deletegroupoutput)

### GetGroup



```js
amazonaws_resource_groups.GetGroup({}, context)
```

#### Input
* input `object`
  * Group `string`: The name or the ARN of the resource group to retrieve.
  * GroupName `string`: Don't use this parameter. Use <code>Group</code> instead.

#### Output
* output [GetGroupOutput](#getgroupoutput)

### GetGroupConfiguration



```js
amazonaws_resource_groups.GetGroupConfiguration({}, context)
```

#### Input
* input `object`
  * Group `string`: The name or the ARN of the resource group.

#### Output
* output [GetGroupConfigurationOutput](#getgroupconfigurationoutput)

### GetGroupQuery



```js
amazonaws_resource_groups.GetGroupQuery({}, context)
```

#### Input
* input `object`
  * Group `string`: The name or the ARN of the resource group to query.
  * GroupName `string`: Don't use this parameter. Use <code>Group</code> instead.

#### Output
* output [GetGroupQueryOutput](#getgroupqueryoutput)

### GroupResources



```js
amazonaws_resource_groups.GroupResources({
  "Group": "",
  "ResourceArns": []
}, context)
```

#### Input
* input `object`
  * Group **required** `string`: The name or the ARN of the resource group to add resources to.
  * ResourceArns **required** `array`: The list of ARNs for resources to be added to the group. 
    * items [ResourceArn](#resourcearn)

#### Output
* output [GroupResourcesOutput](#groupresourcesoutput)

### CreateGroup



```js
amazonaws_resource_groups.CreateGroup({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Configuration `array`: <p>A configuration associates the resource group with an AWS service and specifies how the service can interact with the resources in the group. A configuration is an array of <a>GroupConfigurationItem</a> elements.</p> <note> <p>You can specify either a <code>Configuration</code> or a <code>ResourceQuery</code> in a group, but not both.</p> </note>
    * items [GroupConfigurationItem](#groupconfigurationitem)
  * Description `string`: The description of the resource group. Descriptions can consist of letters, numbers, hyphens, underscores, periods, and spaces.
  * Name **required** `string`: The name of the group, which is the identifier of the group in other operations. You can't change the name of a resource group after you create it. A resource group name can consist of letters, numbers, hyphens, periods, and underscores. The name cannot start with <code>AWS</code> or <code>aws</code>; these are reserved. A resource group name must be unique within each AWS Region in your AWS account.
  * ResourceQuery `object`: <p>The query that is used to define a resource group or a search for resources. A query specifies both a query type and a query string as a JSON object. See the examples section for example JSON strings.</p> <p>The examples that follow are shown as standard JSON strings. If you include such a string as a parameter to the AWS CLI or an SDK API, you might need to 'escape' the string into a single line. For example, see the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting strings</a> in the <i>AWS CLI User Guide</i>.</p> <p> <b>Example 1</b> </p> <p>The following generic example shows a resource query JSON string that includes only resources that meet the following criteria:</p> <ul> <li> <p>The resource type must be either <code>resource_type1</code> or <code>resource_type2</code>.</p> </li> <li> <p>The resource must have a tag <code>Key1</code> with a value of either <code>ValueA</code> or <code>ValueB</code>.</p> </li> <li> <p>The resource must have a tag <code>Key2</code> with a value of either <code>ValueC</code> or <code>ValueD</code>.</p> </li> </ul> <p> <code>{ "Type": "TAG_FILTERS_1_0", "Query": { "ResourceTypeFilters": [ "resource_type1", "resource_type2"], "TagFilters": [ { "Key": "Key1", "Values": ["ValueA","ValueB"] }, { "Key":"Key2", "Values":["ValueC","ValueD"] } ] } }</code> </p> <p>This has the equivalent "shortcut" syntax of the following:</p> <p> <code>{ "Type": "TAG_FILTERS_1_0", "Query": { "ResourceTypeFilters": [ "resource_type1", "resource_type2"], "TagFilters": [ { "Key1": ["ValueA","ValueB"] }, { "Key2": ["ValueC","ValueD"] } ] } }</code> </p> <p> <b>Example 2</b> </p> <p>The following example shows a resource query JSON string that includes only Amazon EC2 instances that are tagged <code>Stage</code> with a value of <code>Test</code>.</p> <p> <code>{ "Type": "TAG_FILTERS_1_0", "Query": "{ "ResourceTypeFilters": "AWS::EC2::Instance", "TagFilters": { "Stage": "Test" } } }</code> </p> <p> <b>Example 3</b> </p> <p>The following example shows a resource query JSON string that includes resource of any supported type as long as it is tagged <code>Stage</code> with a value of <code>Prod</code>.</p> <p> <code>{ "Type": "TAG_FILTERS_1_0", "Query": { "ResourceTypeFilters": "AWS::AllSupported", "TagFilters": { "Stage": "Prod" } } }</code> </p> <p> <b>Example 4</b> </p> <p>The following example shows a resource query JSON string that includes only Amazon EC2 instances and Amazon S3 buckets that are part of the specified AWS CloudFormation stack.</p> <p> <code>{ "Type": "CLOUDFORMATION_STACK_1_0", "Query": { "ResourceTypeFilters": [ "AWS::EC2::Instance", "AWS::S3::Bucket" ], "StackIdentifier": "arn:aws:cloudformation:us-west-2:123456789012:stack/AWStestuseraccount/fb0d5000-aba8-00e8-aa9e-50d5cEXAMPLE" } }</code> </p>
    * Query
    * Type
  * Tags `object`: The tags to add to the group. A tag is key-value pair string.

#### Output
* output [CreateGroupOutput](#creategroupoutput)

### ListGroups



```js
amazonaws_resource_groups.ListGroups({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`
  * Filters `array`: <p>Filters, formatted as <a>GroupFilter</a> objects, that you want to apply to a <code>ListGroups</code> operation.</p> <ul> <li> <p> <code>resource-type</code> - Filter the results to include only those of the specified resource types. Specify up to five resource types in the format <code>AWS::<i>ServiceCode</i>::<i>ResourceType</i> </code>. For example, <code>AWS::EC2::Instance</code>, or <code>AWS::S3::Bucket</code>.</p> </li> <li> <p> <code>configuration-type</code> - Filter the results to include only those groups that have the specified configuration types attached. The current supported values are:</p> <ul> <li> <p>AWS:EC2::CapacityReservationPool</p> </li> </ul> </li> </ul>
    * items [GroupFilter](#groupfilter)

#### Output
* output [ListGroupsOutput](#listgroupsoutput)

### ListGroupResources



```js
amazonaws_resource_groups.ListGroupResources({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters `array`: <p>Filters, formatted as <a>ResourceFilter</a> objects, that you want to apply to a <code>ListGroupResources</code> operation. Filters the results to include only those of the specified resource types.</p> <ul> <li> <p> <code>resource-type</code> - Filter resources by their type. Specify up to five resource types in the format <code>AWS::ServiceCode::ResourceType</code>. For example, <code>AWS::EC2::Instance</code>, or <code>AWS::S3::Bucket</code>. </p> </li> </ul> <p>When you specify a <code>resource-type</code> filter for <code>ListGroupResources</code>, AWS Resource Groups validates your filter resource types against the types that are defined in the query associated with the group. For example, if a group contains only S3 buckets because its query specifies only that resource type, but your <code>resource-type</code> filter includes EC2 instances, AWS Resource Groups does not filter for EC2 instances. In this case, a <code>ListGroupResources</code> request returns a <code>BadRequestException</code> error with a message similar to the following:</p> <p> <code>The resource types specified as filters in the request are not valid.</code> </p> <p>The error includes a list of resource types that failed the validation because they are not part of the query associated with the group. This validation doesn't occur when the group query specifies <code>AWS::AllSupported</code>, because a group based on such a query can contain any of the allowed resource types for the query type (tag-based or AWS CloudFormation stack-based queries).</p>
    * items [ResourceFilter](#resourcefilter)
  * Group `string`: The name or the ARN of the resource group
  * GroupName `string`: Don't use this parameter. Use <code>Group</code> instead.
  * MaxResults `integer`: The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
  * NextToken `string`: The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value provided by a previous call's <code>NextToken</code> response to indicate where the output should continue from.

#### Output
* output [ListGroupResourcesOutput](#listgroupresourcesoutput)

### SearchResources



```js
amazonaws_resource_groups.SearchResources({
  "ResourceQuery": {}
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
  * NextToken `string`: The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value provided by a previous call's <code>NextToken</code> response to indicate where the output should continue from.
  * ResourceQuery **required** `object`: <p>The query that is used to define a resource group or a search for resources. A query specifies both a query type and a query string as a JSON object. See the examples section for example JSON strings.</p> <p>The examples that follow are shown as standard JSON strings. If you include such a string as a parameter to the AWS CLI or an SDK API, you might need to 'escape' the string into a single line. For example, see the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting strings</a> in the <i>AWS CLI User Guide</i>.</p> <p> <b>Example 1</b> </p> <p>The following generic example shows a resource query JSON string that includes only resources that meet the following criteria:</p> <ul> <li> <p>The resource type must be either <code>resource_type1</code> or <code>resource_type2</code>.</p> </li> <li> <p>The resource must have a tag <code>Key1</code> with a value of either <code>ValueA</code> or <code>ValueB</code>.</p> </li> <li> <p>The resource must have a tag <code>Key2</code> with a value of either <code>ValueC</code> or <code>ValueD</code>.</p> </li> </ul> <p> <code>{ "Type": "TAG_FILTERS_1_0", "Query": { "ResourceTypeFilters": [ "resource_type1", "resource_type2"], "TagFilters": [ { "Key": "Key1", "Values": ["ValueA","ValueB"] }, { "Key":"Key2", "Values":["ValueC","ValueD"] } ] } }</code> </p> <p>This has the equivalent "shortcut" syntax of the following:</p> <p> <code>{ "Type": "TAG_FILTERS_1_0", "Query": { "ResourceTypeFilters": [ "resource_type1", "resource_type2"], "TagFilters": [ { "Key1": ["ValueA","ValueB"] }, { "Key2": ["ValueC","ValueD"] } ] } }</code> </p> <p> <b>Example 2</b> </p> <p>The following example shows a resource query JSON string that includes only Amazon EC2 instances that are tagged <code>Stage</code> with a value of <code>Test</code>.</p> <p> <code>{ "Type": "TAG_FILTERS_1_0", "Query": "{ "ResourceTypeFilters": "AWS::EC2::Instance", "TagFilters": { "Stage": "Test" } } }</code> </p> <p> <b>Example 3</b> </p> <p>The following example shows a resource query JSON string that includes resource of any supported type as long as it is tagged <code>Stage</code> with a value of <code>Prod</code>.</p> <p> <code>{ "Type": "TAG_FILTERS_1_0", "Query": { "ResourceTypeFilters": "AWS::AllSupported", "TagFilters": { "Stage": "Prod" } } }</code> </p> <p> <b>Example 4</b> </p> <p>The following example shows a resource query JSON string that includes only Amazon EC2 instances and Amazon S3 buckets that are part of the specified AWS CloudFormation stack.</p> <p> <code>{ "Type": "CLOUDFORMATION_STACK_1_0", "Query": { "ResourceTypeFilters": [ "AWS::EC2::Instance", "AWS::S3::Bucket" ], "StackIdentifier": "arn:aws:cloudformation:us-west-2:123456789012:stack/AWStestuseraccount/fb0d5000-aba8-00e8-aa9e-50d5cEXAMPLE" } }</code> </p>
    * Query
    * Type

#### Output
* output [SearchResourcesOutput](#searchresourcesoutput)

### GetTags



```js
amazonaws_resource_groups.GetTags({
  "Arn": ""
}, context)
```

#### Input
* input `object`
  * Arn **required** `string`

#### Output
* output [GetTagsOutput](#gettagsoutput)

### Untag



```js
amazonaws_resource_groups.Untag({
  "Arn": "",
  "Keys": []
}, context)
```

#### Input
* input `object`
  * Arn **required** `string`
  * Keys **required** `array`: The keys of the tags to be removed.
    * items [TagKey](#tagkey)

#### Output
* output [UntagOutput](#untagoutput)

### Tag



```js
amazonaws_resource_groups.Tag({
  "Arn": "",
  "Tags": {}
}, context)
```

#### Input
* input `object`
  * Arn **required** `string`
  * Tags **required** `object`: The tags to add to the specified resource group. A tag is a string-to-string map of key-value pairs.

#### Output
* output [TagOutput](#tagoutput)

### UngroupResources



```js
amazonaws_resource_groups.UngroupResources({
  "Group": "",
  "ResourceArns": []
}, context)
```

#### Input
* input `object`
  * Group **required** `string`: The name or the ARN of the resource group from which to remove the resources.
  * ResourceArns **required** `array`: The ARNs of the resources to be removed from the group.
    * items [ResourceArn](#resourcearn)

#### Output
* output [UngroupResourcesOutput](#ungroupresourcesoutput)

### UpdateGroup



```js
amazonaws_resource_groups.UpdateGroup({}, context)
```

#### Input
* input `object`
  * Description `string`: The new description that you want to update the resource group with. Descriptions can contain letters, numbers, hyphens, underscores, periods, and spaces.
  * Group `string`: The name or the ARN of the resource group to modify.
  * GroupName `string`: Don't use this parameter. Use <code>Group</code> instead.

#### Output
* output [UpdateGroupOutput](#updategroupoutput)

### UpdateGroupQuery



```js
amazonaws_resource_groups.UpdateGroupQuery({
  "ResourceQuery": {}
}, context)
```

#### Input
* input `object`
  * Group `string`: The name or the ARN of the resource group to query.
  * GroupName `string`: Don't use this parameter. Use <code>Group</code> instead.
  * ResourceQuery **required** `object`: <p>The query that is used to define a resource group or a search for resources. A query specifies both a query type and a query string as a JSON object. See the examples section for example JSON strings.</p> <p>The examples that follow are shown as standard JSON strings. If you include such a string as a parameter to the AWS CLI or an SDK API, you might need to 'escape' the string into a single line. For example, see the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting strings</a> in the <i>AWS CLI User Guide</i>.</p> <p> <b>Example 1</b> </p> <p>The following generic example shows a resource query JSON string that includes only resources that meet the following criteria:</p> <ul> <li> <p>The resource type must be either <code>resource_type1</code> or <code>resource_type2</code>.</p> </li> <li> <p>The resource must have a tag <code>Key1</code> with a value of either <code>ValueA</code> or <code>ValueB</code>.</p> </li> <li> <p>The resource must have a tag <code>Key2</code> with a value of either <code>ValueC</code> or <code>ValueD</code>.</p> </li> </ul> <p> <code>{ "Type": "TAG_FILTERS_1_0", "Query": { "ResourceTypeFilters": [ "resource_type1", "resource_type2"], "TagFilters": [ { "Key": "Key1", "Values": ["ValueA","ValueB"] }, { "Key":"Key2", "Values":["ValueC","ValueD"] } ] } }</code> </p> <p>This has the equivalent "shortcut" syntax of the following:</p> <p> <code>{ "Type": "TAG_FILTERS_1_0", "Query": { "ResourceTypeFilters": [ "resource_type1", "resource_type2"], "TagFilters": [ { "Key1": ["ValueA","ValueB"] }, { "Key2": ["ValueC","ValueD"] } ] } }</code> </p> <p> <b>Example 2</b> </p> <p>The following example shows a resource query JSON string that includes only Amazon EC2 instances that are tagged <code>Stage</code> with a value of <code>Test</code>.</p> <p> <code>{ "Type": "TAG_FILTERS_1_0", "Query": "{ "ResourceTypeFilters": "AWS::EC2::Instance", "TagFilters": { "Stage": "Test" } } }</code> </p> <p> <b>Example 3</b> </p> <p>The following example shows a resource query JSON string that includes resource of any supported type as long as it is tagged <code>Stage</code> with a value of <code>Prod</code>.</p> <p> <code>{ "Type": "TAG_FILTERS_1_0", "Query": { "ResourceTypeFilters": "AWS::AllSupported", "TagFilters": { "Stage": "Prod" } } }</code> </p> <p> <b>Example 4</b> </p> <p>The following example shows a resource query JSON string that includes only Amazon EC2 instances and Amazon S3 buckets that are part of the specified AWS CloudFormation stack.</p> <p> <code>{ "Type": "CLOUDFORMATION_STACK_1_0", "Query": { "ResourceTypeFilters": [ "AWS::EC2::Instance", "AWS::S3::Bucket" ], "StackIdentifier": "arn:aws:cloudformation:us-west-2:123456789012:stack/AWStestuseraccount/fb0d5000-aba8-00e8-aa9e-50d5cEXAMPLE" } }</code> </p>
    * Query
    * Type

#### Output
* output [UpdateGroupQueryOutput](#updategroupqueryoutput)



## Definitions

### BadRequestException


### CreateGroupInput
* CreateGroupInput `object`
  * Configuration
    * items [GroupConfigurationItem](#groupconfigurationitem)
  * Description
  * Name **required**
  * ResourceQuery
    * Query **required**
    * Type **required**
  * Tags

### CreateGroupOutput
* CreateGroupOutput `object`
  * Group
    * Description
    * GroupArn **required**
    * Name **required**
  * GroupConfiguration
    * Configuration
      * items [GroupConfigurationItem](#groupconfigurationitem)
    * FailureReason
    * ProposedConfiguration
      * items [GroupConfigurationItem](#groupconfigurationitem)
    * Status
  * ResourceQuery
    * Query **required**
    * Type **required**
  * Tags

### DeleteGroupInput
* DeleteGroupInput `object`
  * Group
  * GroupName

### DeleteGroupOutput
* DeleteGroupOutput `object`
  * Group
    * Description
    * GroupArn **required**
    * Name **required**

### Description
* Description `string`

### ErrorCode
* ErrorCode `string`

### ErrorMessage
* ErrorMessage `string`

### FailedResource
* FailedResource `object`: A resource that failed to be added to or removed from a group.
  * ErrorCode
  * ErrorMessage
  * ResourceArn

### FailedResourceList
* FailedResourceList `array`
  * items [FailedResource](#failedresource)

### ForbiddenException


### GetGroupConfigurationInput
* GetGroupConfigurationInput `object`
  * Group

### GetGroupConfigurationOutput
* GetGroupConfigurationOutput `object`
  * GroupConfiguration
    * Configuration
      * items [GroupConfigurationItem](#groupconfigurationitem)
    * FailureReason
    * ProposedConfiguration
      * items [GroupConfigurationItem](#groupconfigurationitem)
    * Status

### GetGroupInput
* GetGroupInput `object`
  * Group
  * GroupName

### GetGroupOutput
* GetGroupOutput `object`
  * Group
    * Description
    * GroupArn **required**
    * Name **required**

### GetGroupQueryInput
* GetGroupQueryInput `object`
  * Group
  * GroupName

### GetGroupQueryOutput
* GetGroupQueryOutput `object`
  * GroupQuery
    * GroupName **required**
    * ResourceQuery **required**
      * Query **required**
      * Type **required**

### GetTagsInput
* GetTagsInput `object`

### GetTagsOutput
* GetTagsOutput `object`
  * Arn
  * Tags

### Group
* Group `object`: <p>A resource group that contains AWS resources. You can assign resources to the group by associating either of the following elements with the group:</p> <ul> <li> <p> <a>ResourceQuery</a> - Use a resource query to specify a set of tag keys and values. All resources in the same AWS Region and AWS account that have those keys with the same values are included in the group. You can add a resource query when you create the group.</p> </li> <li> <p> <a>GroupConfiguration</a> - Use a service configuration to associate the group with an AWS service. The configuration specifies which resource types can be included in the group.</p> </li> </ul>
  * Description
  * GroupArn **required**
  * Name **required**

### GroupArn
* GroupArn `string`

### GroupConfiguration
* GroupConfiguration `object`: A service configuration associated with a resource group. The configuration options are determined by the AWS service that defines the <code>Type</code>, and specifies which resources can be included in the group. You can add a service configuration when you create the group.
  * Configuration
    * items [GroupConfigurationItem](#groupconfigurationitem)
  * FailureReason
  * ProposedConfiguration
    * items [GroupConfigurationItem](#groupconfigurationitem)
  * Status

### GroupConfigurationFailureReason
* GroupConfigurationFailureReason `string`

### GroupConfigurationItem
* GroupConfigurationItem `object`: An item in a group configuration. A group configuration can have one or more items.
  * Parameters
    * items [GroupConfigurationParameter](#groupconfigurationparameter)
  * Type **required**

### GroupConfigurationList
* GroupConfigurationList `array`
  * items [GroupConfigurationItem](#groupconfigurationitem)

### GroupConfigurationParameter
* GroupConfigurationParameter `object`: A parameter for a group configuration item.
  * Name **required**
  * Values
    * items [GroupConfigurationParameterValue](#groupconfigurationparametervalue)

### GroupConfigurationParameterName
* GroupConfigurationParameterName `string`

### GroupConfigurationParameterValue
* GroupConfigurationParameterValue `string`

### GroupConfigurationParameterValueList
* GroupConfigurationParameterValueList `array`
  * items [GroupConfigurationParameterValue](#groupconfigurationparametervalue)

### GroupConfigurationStatus
* GroupConfigurationStatus `string` (values: UPDATING, UPDATE_COMPLETE, UPDATE_FAILED)

### GroupConfigurationType
* GroupConfigurationType `string`

### GroupFilter
* GroupFilter `object`: A filter collection that you can use to restrict the results from a <code>List</code> operation to only those you want to include.
  * Name **required**
  * Values **required**
    * items [GroupFilterValue](#groupfiltervalue)

### GroupFilterList
* GroupFilterList `array`
  * items [GroupFilter](#groupfilter)

### GroupFilterName
* GroupFilterName `string` (values: resource-type, configuration-type)

### GroupFilterValue
* GroupFilterValue `string`

### GroupFilterValues
* GroupFilterValues `array`
  * items [GroupFilterValue](#groupfiltervalue)

### GroupIdentifier
* GroupIdentifier `object`: The unique identifiers for a resource group.
  * GroupArn
  * GroupName

### GroupIdentifierList
* GroupIdentifierList `array`
  * items [GroupIdentifier](#groupidentifier)

### GroupList
* GroupList `array`
  * items [Group](#group)

### GroupName
* GroupName `string`

### GroupParameterList
* GroupParameterList `array`
  * items [GroupConfigurationParameter](#groupconfigurationparameter)

### GroupQuery
* GroupQuery `object`: A mapping of a query attached to a resource group that determines the AWS resources that are members of the group.
  * GroupName **required**
  * ResourceQuery **required**
    * Query **required**
    * Type **required**

### GroupResourcesInput
* GroupResourcesInput `object`
  * Group **required**
  * ResourceArns **required**
    * items [ResourceArn](#resourcearn)

### GroupResourcesOutput
* GroupResourcesOutput `object`
  * Failed
    * items [FailedResource](#failedresource)
  * Succeeded
    * items [ResourceArn](#resourcearn)

### GroupString
* GroupString `string`

### InternalServerErrorException


### ListGroupResourcesInput
* ListGroupResourcesInput `object`
  * Filters
    * items [ResourceFilter](#resourcefilter)
  * Group
  * GroupName
  * MaxResults
  * NextToken

### ListGroupResourcesOutput
* ListGroupResourcesOutput `object`
  * NextToken
  * QueryErrors
    * items [QueryError](#queryerror)
  * ResourceIdentifiers
    * items [ResourceIdentifier](#resourceidentifier)

### ListGroupsInput
* ListGroupsInput `object`
  * Filters
    * items [GroupFilter](#groupfilter)

### ListGroupsOutput
* ListGroupsOutput `object`
  * GroupIdentifiers
    * items [GroupIdentifier](#groupidentifier)
  * Groups
    * items [Group](#group)
  * NextToken

### MaxResults
* MaxResults `integer`

### MethodNotAllowedException


### NextToken
* NextToken `string`

### NotFoundException


### Query
* Query `string`

### QueryError
* QueryError `object`: A two-part error structure that can occur in <code>ListGroupResources</code> or <code>SearchResources</code> operations on CloudFormation stack-based queries. The error occurs if the CloudFormation stack on which the query is based either does not exist, or has a status that renders the stack inactive. A <code>QueryError</code> occurrence does not necessarily mean that AWS Resource Groups could not complete the operation, but the resulting group might have no member resources.
  * ErrorCode
  * Message

### QueryErrorCode
* QueryErrorCode `string` (values: CLOUDFORMATION_STACK_INACTIVE, CLOUDFORMATION_STACK_NOT_EXISTING)

### QueryErrorList
* QueryErrorList `array`
  * items [QueryError](#queryerror)

### QueryErrorMessage
* QueryErrorMessage `string`

### QueryType
* QueryType `string` (values: TAG_FILTERS_1_0, CLOUDFORMATION_STACK_1_0)

### ResourceArn
* ResourceArn `string`

### ResourceArnList
* ResourceArnList `array`
  * items [ResourceArn](#resourcearn)

### ResourceFilter
* ResourceFilter `object`: A filter name and value pair that is used to obtain more specific results from a list of resources.
  * Name **required**
  * Values **required**
    * items [ResourceFilterValue](#resourcefiltervalue)

### ResourceFilterList
* ResourceFilterList `array`
  * items [ResourceFilter](#resourcefilter)

### ResourceFilterName
* ResourceFilterName `string` (values: resource-type)

### ResourceFilterValue
* ResourceFilterValue `string`

### ResourceFilterValues
* ResourceFilterValues `array`
  * items [ResourceFilterValue](#resourcefiltervalue)

### ResourceIdentifier
* ResourceIdentifier `object`: The ARN of a resource, and its resource type.
  * ResourceArn
  * ResourceType

### ResourceIdentifierList
* ResourceIdentifierList `array`
  * items [ResourceIdentifier](#resourceidentifier)

### ResourceQuery
* ResourceQuery `object`: <p>The query that is used to define a resource group or a search for resources. A query specifies both a query type and a query string as a JSON object. See the examples section for example JSON strings.</p> <p>The examples that follow are shown as standard JSON strings. If you include such a string as a parameter to the AWS CLI or an SDK API, you might need to 'escape' the string into a single line. For example, see the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting strings</a> in the <i>AWS CLI User Guide</i>.</p> <p> <b>Example 1</b> </p> <p>The following generic example shows a resource query JSON string that includes only resources that meet the following criteria:</p> <ul> <li> <p>The resource type must be either <code>resource_type1</code> or <code>resource_type2</code>.</p> </li> <li> <p>The resource must have a tag <code>Key1</code> with a value of either <code>ValueA</code> or <code>ValueB</code>.</p> </li> <li> <p>The resource must have a tag <code>Key2</code> with a value of either <code>ValueC</code> or <code>ValueD</code>.</p> </li> </ul> <p> <code>{ "Type": "TAG_FILTERS_1_0", "Query": { "ResourceTypeFilters": [ "resource_type1", "resource_type2"], "TagFilters": [ { "Key": "Key1", "Values": ["ValueA","ValueB"] }, { "Key":"Key2", "Values":["ValueC","ValueD"] } ] } }</code> </p> <p>This has the equivalent "shortcut" syntax of the following:</p> <p> <code>{ "Type": "TAG_FILTERS_1_0", "Query": { "ResourceTypeFilters": [ "resource_type1", "resource_type2"], "TagFilters": [ { "Key1": ["ValueA","ValueB"] }, { "Key2": ["ValueC","ValueD"] } ] } }</code> </p> <p> <b>Example 2</b> </p> <p>The following example shows a resource query JSON string that includes only Amazon EC2 instances that are tagged <code>Stage</code> with a value of <code>Test</code>.</p> <p> <code>{ "Type": "TAG_FILTERS_1_0", "Query": "{ "ResourceTypeFilters": "AWS::EC2::Instance", "TagFilters": { "Stage": "Test" } } }</code> </p> <p> <b>Example 3</b> </p> <p>The following example shows a resource query JSON string that includes resource of any supported type as long as it is tagged <code>Stage</code> with a value of <code>Prod</code>.</p> <p> <code>{ "Type": "TAG_FILTERS_1_0", "Query": { "ResourceTypeFilters": "AWS::AllSupported", "TagFilters": { "Stage": "Prod" } } }</code> </p> <p> <b>Example 4</b> </p> <p>The following example shows a resource query JSON string that includes only Amazon EC2 instances and Amazon S3 buckets that are part of the specified AWS CloudFormation stack.</p> <p> <code>{ "Type": "CLOUDFORMATION_STACK_1_0", "Query": { "ResourceTypeFilters": [ "AWS::EC2::Instance", "AWS::S3::Bucket" ], "StackIdentifier": "arn:aws:cloudformation:us-west-2:123456789012:stack/AWStestuseraccount/fb0d5000-aba8-00e8-aa9e-50d5cEXAMPLE" } }</code> </p>
  * Query **required**
  * Type **required**

### ResourceType
* ResourceType `string`

### SearchResourcesInput
* SearchResourcesInput `object`
  * MaxResults
  * NextToken
  * ResourceQuery **required**
    * Query **required**
    * Type **required**

### SearchResourcesOutput
* SearchResourcesOutput `object`
  * NextToken
  * QueryErrors
    * items [QueryError](#queryerror)
  * ResourceIdentifiers
    * items [ResourceIdentifier](#resourceidentifier)

### TagInput
* TagInput `object`
  * Tags **required**

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagOutput
* TagOutput `object`
  * Arn
  * Tags

### TagValue
* TagValue `string`

### Tags
* Tags `object`

### TooManyRequestsException


### UnauthorizedException


### UngroupResourcesInput
* UngroupResourcesInput `object`
  * Group **required**
  * ResourceArns **required**
    * items [ResourceArn](#resourcearn)

### UngroupResourcesOutput
* UngroupResourcesOutput `object`
  * Failed
    * items [FailedResource](#failedresource)
  * Succeeded
    * items [ResourceArn](#resourcearn)

### UntagInput
* UntagInput `object`
  * Keys **required**
    * items [TagKey](#tagkey)

### UntagOutput
* UntagOutput `object`
  * Arn
  * Keys
    * items [TagKey](#tagkey)

### UpdateGroupInput
* UpdateGroupInput `object`
  * Description
  * Group
  * GroupName

### UpdateGroupOutput
* UpdateGroupOutput `object`
  * Group
    * Description
    * GroupArn **required**
    * Name **required**

### UpdateGroupQueryInput
* UpdateGroupQueryInput `object`
  * Group
  * GroupName
  * ResourceQuery **required**
    * Query **required**
    * Type **required**

### UpdateGroupQueryOutput
* UpdateGroupQueryOutput `object`
  * GroupQuery
    * GroupName **required**
    * ResourceQuery **required**
      * Query **required**
      * Type **required**


