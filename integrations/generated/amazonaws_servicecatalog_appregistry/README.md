# @datafire/amazonaws_servicecatalog_appregistry

Client library for AWS Service Catalog App Registry

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_servicecatalog_appregistry
```
```js
let amazonaws_servicecatalog_appregistry = require('@datafire/amazonaws_servicecatalog_appregistry').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

 AWS Service Catalog AppRegistry enables organizations to understand the application context of their AWS resources. AppRegistry provides a repository of your applications, their resources, and the application metadata that you use within your enterprise.

## Actions

### ListApplications



```js
amazonaws_servicecatalog_appregistry.ListApplications({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListApplicationsResponse](#listapplicationsresponse)

### CreateApplication



```js
amazonaws_servicecatalog_appregistry.CreateApplication({
  "name": "",
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: Key-value pairs you can use to associate with the application.
  * clientToken **required** `string`: A unique identifier that you provide to ensure idempotency. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails.
  * description `string`: The description of the application.
  * name **required** `string`: The name of the application. The name must be unique in the region in which you are creating the application.

#### Output
*Output schema unknown*

### DeleteApplication



```js
amazonaws_servicecatalog_appregistry.DeleteApplication({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`

#### Output
* output [DeleteApplicationResponse](#deleteapplicationresponse)

### GetApplication



```js
amazonaws_servicecatalog_appregistry.GetApplication({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`

#### Output
* output [GetApplicationResponse](#getapplicationresponse)

### UpdateApplication



```js
amazonaws_servicecatalog_appregistry.UpdateApplication({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`
  * description `string`: The new description of the application.
  * name `string`: The new name of the application. The name must be unique in the region in which you are updating the application.

#### Output
* output [UpdateApplicationResponse](#updateapplicationresponse)

### ListAssociatedAttributeGroups



```js
amazonaws_servicecatalog_appregistry.ListAssociatedAttributeGroups({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListAssociatedAttributeGroupsResponse](#listassociatedattributegroupsresponse)

### DisassociateAttributeGroup



```js
amazonaws_servicecatalog_appregistry.DisassociateAttributeGroup({
  "application": "",
  "attributeGroup": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`
  * attributeGroup **required** `string`

#### Output
* output [DisassociateAttributeGroupResponse](#disassociateattributegroupresponse)

### AssociateAttributeGroup



```js
amazonaws_servicecatalog_appregistry.AssociateAttributeGroup({
  "application": "",
  "attributeGroup": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`
  * attributeGroup **required** `string`

#### Output
* output [AssociateAttributeGroupResponse](#associateattributegroupresponse)

### ListAssociatedResources



```js
amazonaws_servicecatalog_appregistry.ListAssociatedResources({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListAssociatedResourcesResponse](#listassociatedresourcesresponse)

### DisassociateResource



```js
amazonaws_servicecatalog_appregistry.DisassociateResource({
  "application": "",
  "resourceType": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`
  * resourceType **required** `string`
  * resource **required** `string`

#### Output
* output [DisassociateResourceResponse](#disassociateresourceresponse)

### AssociateResource



```js
amazonaws_servicecatalog_appregistry.AssociateResource({
  "application": "",
  "resourceType": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`
  * resourceType **required** `string`
  * resource **required** `string`

#### Output
* output [AssociateResourceResponse](#associateresourceresponse)

### ListAttributeGroups



```js
amazonaws_servicecatalog_appregistry.ListAttributeGroups({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListAttributeGroupsResponse](#listattributegroupsresponse)

### CreateAttributeGroup



```js
amazonaws_servicecatalog_appregistry.CreateAttributeGroup({
  "name": "",
  "attributes": "",
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: Key-value pairs you can use to associate with the attribute group.
  * attributes **required** `string`: A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.
  * clientToken **required** `string`: A unique identifier that you provide to ensure idempotency. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails.
  * description `string`: The description of the attribute group that the user provides.
  * name **required** `string`: The name of the attribute group.

#### Output
*Output schema unknown*

### DeleteAttributeGroup



```js
amazonaws_servicecatalog_appregistry.DeleteAttributeGroup({
  "attributeGroup": ""
}, context)
```

#### Input
* input `object`
  * attributeGroup **required** `string`

#### Output
* output [DeleteAttributeGroupResponse](#deleteattributegroupresponse)

### GetAttributeGroup



```js
amazonaws_servicecatalog_appregistry.GetAttributeGroup({
  "attributeGroup": ""
}, context)
```

#### Input
* input `object`
  * attributeGroup **required** `string`

#### Output
* output [GetAttributeGroupResponse](#getattributegroupresponse)

### UpdateAttributeGroup



```js
amazonaws_servicecatalog_appregistry.UpdateAttributeGroup({
  "attributeGroup": ""
}, context)
```

#### Input
* input `object`
  * attributeGroup **required** `string`
  * attributes `string`: A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.
  * description `string`: The description of the attribute group that the user provides.
  * name `string`: The new name of the attribute group. The name must be unique in the region in which you are updating the attribute group.

#### Output
* output [UpdateAttributeGroupResponse](#updateattributegroupresponse)

### ListTagsForResource



```js
amazonaws_servicecatalog_appregistry.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_servicecatalog_appregistry.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: The new or modified tags for the resource.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_servicecatalog_appregistry.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### Application
* Application `object`: Represents a Service Catalog AppRegistry application that is the top-level node in a hierarchy of related cloud resource abstractions.
  * tags
  * arn
  * creationTime
  * description
  * id
  * lastUpdateTime
  * name

### ApplicationArn
* ApplicationArn `string`

### ApplicationId
* ApplicationId `string`

### ApplicationSpecifier
* ApplicationSpecifier `string`

### ApplicationSummaries
* ApplicationSummaries `array`
  * items [ApplicationSummary](#applicationsummary)

### ApplicationSummary
* ApplicationSummary `object`: Summary of a Service Catalog AppRegistry application.
  * arn
  * creationTime
  * description
  * id
  * lastUpdateTime
  * name

### Arn
* Arn `string`

### AssociateAttributeGroupRequest
* AssociateAttributeGroupRequest `object`

### AssociateAttributeGroupResponse
* AssociateAttributeGroupResponse `object`
  * applicationArn
  * attributeGroupArn

### AssociateResourceRequest
* AssociateResourceRequest `object`

### AssociateResourceResponse
* AssociateResourceResponse `object`
  * applicationArn
  * resourceArn

### AssociationCount
* AssociationCount `integer`

### AttributeGroup
* AttributeGroup `object`: Represents a Service Catalog AppRegistry attribute group that is rich metadata which describes an application and its components.
  * tags
  * arn
  * creationTime
  * description
  * id
  * lastUpdateTime
  * name

### AttributeGroupArn
* AttributeGroupArn `string`

### AttributeGroupId
* AttributeGroupId `string`

### AttributeGroupIds
* AttributeGroupIds `array`
  * items [AttributeGroupId](#attributegroupid)

### AttributeGroupSpecifier
* AttributeGroupSpecifier `string`

### AttributeGroupSummaries
* AttributeGroupSummaries `array`
  * items [AttributeGroupSummary](#attributegroupsummary)

### AttributeGroupSummary
* AttributeGroupSummary `object`: Summary of a Service Catalog AppRegistry attribute group.
  * arn
  * creationTime
  * description
  * id
  * lastUpdateTime
  * name

### Attributes
* Attributes `string`

### ClientToken
* ClientToken `string`

### ConflictException


### CreateApplicationRequest
* CreateApplicationRequest `object`
  * tags
  * clientToken **required**
  * description
  * name **required**

### CreateApplicationResponse
* CreateApplicationResponse `object`
  * application
    * tags
    * arn
    * creationTime
    * description
    * id
    * lastUpdateTime
    * name

### CreateAttributeGroupRequest
* CreateAttributeGroupRequest `object`
  * tags
  * attributes **required**
  * clientToken **required**
  * description
  * name **required**

### CreateAttributeGroupResponse
* CreateAttributeGroupResponse `object`
  * attributeGroup
    * tags
    * arn
    * creationTime
    * description
    * id
    * lastUpdateTime
    * name

### DeleteApplicationRequest
* DeleteApplicationRequest `object`

### DeleteApplicationResponse
* DeleteApplicationResponse `object`
  * application
    * arn
    * creationTime
    * description
    * id
    * lastUpdateTime
    * name

### DeleteAttributeGroupRequest
* DeleteAttributeGroupRequest `object`

### DeleteAttributeGroupResponse
* DeleteAttributeGroupResponse `object`
  * attributeGroup
    * arn
    * creationTime
    * description
    * id
    * lastUpdateTime
    * name

### Description
* Description `string`

### DisassociateAttributeGroupRequest
* DisassociateAttributeGroupRequest `object`

### DisassociateAttributeGroupResponse
* DisassociateAttributeGroupResponse `object`
  * applicationArn
  * attributeGroupArn

### DisassociateResourceRequest
* DisassociateResourceRequest `object`

### DisassociateResourceResponse
* DisassociateResourceResponse `object`
  * applicationArn
  * resourceArn

### GetApplicationRequest
* GetApplicationRequest `object`

### GetApplicationResponse
* GetApplicationResponse `object`
  * tags
  * arn
  * associatedResourceCount
  * creationTime
  * description
  * id
  * lastUpdateTime
  * name

### GetAttributeGroupRequest
* GetAttributeGroupRequest `object`

### GetAttributeGroupResponse
* GetAttributeGroupResponse `object`
  * tags
  * arn
  * attributes
  * creationTime
  * description
  * id
  * lastUpdateTime
  * name

### InternalServerException


### ListApplicationsRequest
* ListApplicationsRequest `object`

### ListApplicationsResponse
* ListApplicationsResponse `object`
  * applications
    * items [ApplicationSummary](#applicationsummary)
  * nextToken

### ListAssociatedAttributeGroupsRequest
* ListAssociatedAttributeGroupsRequest `object`

### ListAssociatedAttributeGroupsResponse
* ListAssociatedAttributeGroupsResponse `object`
  * attributeGroups
    * items [AttributeGroupId](#attributegroupid)
  * nextToken

### ListAssociatedResourcesRequest
* ListAssociatedResourcesRequest `object`

### ListAssociatedResourcesResponse
* ListAssociatedResourcesResponse `object`
  * nextToken
  * resources
    * items [ResourceInfo](#resourceinfo)

### ListAttributeGroupsRequest
* ListAttributeGroupsRequest `object`

### ListAttributeGroupsResponse
* ListAttributeGroupsResponse `object`
  * attributeGroups
    * items [AttributeGroupSummary](#attributegroupsummary)
  * nextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### MaxResults
* MaxResults `integer`

### Name
* Name `string`

### NextToken
* NextToken `string`

### ResourceInfo
* ResourceInfo `object`: Information about the resource.
  * arn
  * name

### ResourceNotFoundException


### ResourceSpecifier
* ResourceSpecifier `string`

### ResourceType
* ResourceType `string` (values: CFN_STACK)

### Resources
* Resources `array`
  * items [ResourceInfo](#resourceinfo)

### ServiceQuotaExceededException


### StackArn
* StackArn `string`

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Tags
* Tags `object`

### Timestamp
* Timestamp `string`

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateApplicationRequest
* UpdateApplicationRequest `object`
  * description
  * name

### UpdateApplicationResponse
* UpdateApplicationResponse `object`
  * application
    * tags
    * arn
    * creationTime
    * description
    * id
    * lastUpdateTime
    * name

### UpdateAttributeGroupRequest
* UpdateAttributeGroupRequest `object`
  * attributes
  * description
  * name

### UpdateAttributeGroupResponse
* UpdateAttributeGroupResponse `object`
  * attributeGroup
    * tags
    * arn
    * creationTime
    * description
    * id
    * lastUpdateTime
    * name

### ValidationException



