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

amazonaws_resource_groups.ListGroups({}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Resource Groups</fullname> <p>AWS Resource Groups lets you organize AWS resources such as Amazon EC2 instances, Amazon Relational Database Service databases, and Amazon S3 buckets into groups using criteria that you define as tags. A resource group is a collection of resources that match the resource types specified in a query, and share one or more tags or portions of tags. You can create a group of resources based on their roles in your cloud infrastructure, lifecycle stages, regions, application layers, or virtually any criteria. Resource groups enable you to automate management tasks, such as those in AWS Systems Manager Automation documents, on tag-related resources in AWS Systems Manager. Groups of tagged resources also let you quickly view a custom console in AWS Systems Manager that shows AWS Config compliance and other monitoring data about member resources.</p> <p>To create a resource group, build a resource query, and specify tags that identify the criteria that members of the group have in common. Tags are key-value pairs.</p> <p>For more information about Resource Groups, see the <a href="https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html">AWS Resource Groups User Guide</a>.</p> <p>AWS Resource Groups uses a REST-compliant API that you can use to perform the following types of operations.</p> <ul> <li> <p>Create, Read, Update, and Delete (CRUD) operations on resource groups and resource query entities</p> </li> <li> <p>Applying, editing, and removing tags from resource groups</p> </li> <li> <p>Resolving resource group member ARNs so they can be returned as search results</p> </li> <li> <p>Getting data about resources that are members of a group</p> </li> <li> <p>Searching AWS resources based on a resource query</p> </li> </ul>

## Actions

### ListGroups



```js
amazonaws_resource_groups.ListGroups({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListGroupsOutput](#listgroupsoutput)

### UpdateGroup



```js
amazonaws_resource_groups.UpdateGroup({
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * Description [GroupDescription](#groupdescription)

#### Output
* output [UpdateGroupOutput](#updategroupoutput)

### UpdateGroupQuery



```js
amazonaws_resource_groups.UpdateGroupQuery({
  "GroupName": "",
  "ResourceQuery": {
    "Type": "",
    "Query": ""
  }
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * ResourceQuery **required** [ResourceQuery](#resourcequery)

#### Output
* output [UpdateGroupQueryOutput](#updategroupqueryoutput)

### ListGroupResources



```js
amazonaws_resource_groups.ListGroupResources({
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * GroupName **required** `string`

#### Output
* output [ListGroupResourcesOutput](#listgroupresourcesoutput)

### SearchResources



```js
amazonaws_resource_groups.SearchResources({
  "ResourceQuery": {
    "Type": "",
    "Query": ""
  }
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ResourceQuery **required** [ResourceQuery](#resourcequery)

#### Output
* output [SearchResourcesOutput](#searchresourcesoutput)

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
  * Keys **required** [TagKeyList](#tagkeylist)

#### Output
* output [UntagOutput](#untagoutput)



## Definitions

### BadRequestException
* BadRequestException `object`: The request does not comply with validation rules that are defined for the request parameters.
  * Message [ErrorMessage](#errormessage)

### CreateGroupInput
* CreateGroupInput `object`
  * Description [GroupDescription](#groupdescription)
  * Name **required** [GroupName](#groupname)
  * ResourceQuery **required** [ResourceQuery](#resourcequery)
  * Tags [Tags](#tags)

### CreateGroupOutput
* CreateGroupOutput `object`
  * Group [Group](#group)
  * ResourceQuery [ResourceQuery](#resourcequery)
  * Tags [Tags](#tags)

### DeleteGroupInput
* DeleteGroupInput `object`

### DeleteGroupOutput
* DeleteGroupOutput `object`
  * Group [Group](#group)

### ErrorMessage
* ErrorMessage `string`

### ForbiddenException
* ForbiddenException `object`: The caller is not authorized to make the request.
  * Message [ErrorMessage](#errormessage)

### GetGroupInput
* GetGroupInput `object`

### GetGroupOutput
* GetGroupOutput `object`
  * Group [Group](#group)

### GetGroupQueryInput
* GetGroupQueryInput `object`

### GetGroupQueryOutput
* GetGroupQueryOutput `object`
  * GroupQuery [GroupQuery](#groupquery)

### GetTagsInput
* GetTagsInput `object`

### GetTagsOutput
* GetTagsOutput `object`
  * Arn [GroupArn](#grouparn)
  * Tags [Tags](#tags)

### Group
* Group `object`: A resource group.
  * Description [GroupDescription](#groupdescription)
  * GroupArn **required** [GroupArn](#grouparn)
  * Name **required** [GroupName](#groupname)

### GroupArn
* GroupArn `string`

### GroupDescription
* GroupDescription `string`

### GroupList
* GroupList `array`
  * items [Group](#group)

### GroupName
* GroupName `string`

### GroupQuery
* GroupQuery `object`: The underlying resource query of a resource group. Resources that match query results are part of the group.
  * GroupName **required** [GroupName](#groupname)
  * ResourceQuery **required** [ResourceQuery](#resourcequery)

### InternalServerErrorException
* InternalServerErrorException `object`: An internal error occurred while processing the request.
  * Message [ErrorMessage](#errormessage)

### ListGroupResourcesInput
* ListGroupResourcesInput `object`

### ListGroupResourcesOutput
* ListGroupResourcesOutput `object`
  * NextToken [NextToken](#nexttoken)
  * ResourceIdentifiers [ResourceIdentifierList](#resourceidentifierlist)

### ListGroupsInput
* ListGroupsInput `object`

### ListGroupsOutput
* ListGroupsOutput `object`
  * Groups [GroupList](#grouplist)
  * NextToken [NextToken](#nexttoken)

### MaxResults
* MaxResults `integer`

### MethodNotAllowedException
* MethodNotAllowedException `object`: The request uses an HTTP method which is not allowed for the specified resource.
  * Message [ErrorMessage](#errormessage)

### NextToken
* NextToken `string`

### NotFoundException
* NotFoundException `object`: One or more resources specified in the request do not exist.
  * Message [ErrorMessage](#errormessage)

### Query
* Query `string`

### QueryType
* QueryType `string` (values: TAG_FILTERS_1_0)

### ResourceArn
* ResourceArn `string`

### ResourceIdentifier
* ResourceIdentifier `object`: The ARN of a resource, and its resource type.
  * ResourceArn [ResourceArn](#resourcearn)
  * ResourceType [ResourceType](#resourcetype)

### ResourceIdentifierList
* ResourceIdentifierList `array`
  * items [ResourceIdentifier](#resourceidentifier)

### ResourceQuery
* ResourceQuery `object`: The query that is used to define a resource group or a search for resources.
  * Query **required** [Query](#query)
  * Type **required** [QueryType](#querytype)

### ResourceType
* ResourceType `string`

### SearchResourcesInput
* SearchResourcesInput `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ResourceQuery **required** [ResourceQuery](#resourcequery)

### SearchResourcesOutput
* SearchResourcesOutput `object`
  * NextToken [NextToken](#nexttoken)
  * ResourceIdentifiers [ResourceIdentifierList](#resourceidentifierlist)

### TagInput
* TagInput `object`
  * Tags **required** [Tags](#tags)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagOutput
* TagOutput `object`
  * Arn [GroupArn](#grouparn)
  * Tags [Tags](#tags)

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items `object`
    * key [TagKey](#tagkey)
    * value [TagValue](#tagvalue)

### TooManyRequestsException
* TooManyRequestsException `object`: The caller has exceeded throttling limits.
  * Message [ErrorMessage](#errormessage)

### UnauthorizedException
* UnauthorizedException `object`: The request has not been applied because it lacks valid authentication credentials for the target resource.
  * Message [ErrorMessage](#errormessage)

### UntagInput
* UntagInput `object`
  * Keys **required** [TagKeyList](#tagkeylist)

### UntagOutput
* UntagOutput `object`
  * Arn [GroupArn](#grouparn)
  * Keys [TagKeyList](#tagkeylist)

### UpdateGroupInput
* UpdateGroupInput `object`
  * Description [GroupDescription](#groupdescription)

### UpdateGroupOutput
* UpdateGroupOutput `object`
  * Group [Group](#group)

### UpdateGroupQueryInput
* UpdateGroupQueryInput `object`
  * ResourceQuery **required** [ResourceQuery](#resourcequery)

### UpdateGroupQueryOutput
* UpdateGroupQueryOutput `object`
  * GroupQuery [GroupQuery](#groupquery)


