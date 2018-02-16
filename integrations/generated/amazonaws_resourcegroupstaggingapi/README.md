# @datafire/amazonaws_resourcegroupstaggingapi

Client library for AWS Resource Groups Tagging API

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_resourcegroupstaggingapi
```
```js
let amazonaws_resourcegroupstaggingapi = require('@datafire/amazonaws_resourcegroupstaggingapi').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_resourcegroupstaggingapi.GetResources({}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Resource Groups Tagging API</fullname> <p>This guide describes the API operations for the resource groups tagging.</p> <p>A tag is a label that you assign to an AWS resource. A tag consists of a key and a value, both of which you define. For example, if you have two Amazon EC2 instances, you might assign both a tag key of "Stack." But the value of "Stack" might be "Testing" for one and "Production" for the other.</p> <p>Tagging can help you organize your resources and enables you to simplify resource management, access management and cost allocation. For more information about tagging, see <a href="http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html">Working with Tag Editor</a> and <a href="http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/resource-groups.html">Working with Resource Groups</a>. For more information about permissions you need to use the resource groups tagging APIs, see <a href="http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/obtaining-permissions-for-resource-groups.html">Obtaining Permissions for Resource Groups </a> and <a href="http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/obtaining-permissions-for-tagging.html">Obtaining Permissions for Tagging </a>.</p> <p>You can use the resource groups tagging APIs to complete the following tasks:</p> <ul> <li> <p>Tag and untag supported resources located in the specified region for the AWS account</p> </li> <li> <p>Use tag-based filters to search for resources located in the specified region for the AWS account</p> </li> <li> <p>List all existing tag keys in the specified region for the AWS account</p> </li> <li> <p>List all existing values for the specified key in the specified region for the AWS account</p> </li> </ul> <p>Not all resources can have tags. For a lists of resources that you can tag, see <a href="http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/supported-resources.html">Supported Resources</a> in the <i>AWS Resource Groups and Tag Editor User Guide</i>.</p> <p>To make full use of the resource groups tagging APIs, you might need additional IAM permissions, including permission to access the resources of individual services as well as permission to view and apply tags to those resources. For more information, see <a href="http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/obtaining-permissions-for-tagging.html">Obtaining Permissions for Tagging</a> in the <i>AWS Resource Groups and Tag Editor User Guide</i>.</p>

## Actions

### GetResources



```js
amazonaws_resourcegroupstaggingapi.GetResources({}, context)
```

#### Input
* input `object`
  * ResourcesPerPage `string`
  * PaginationToken `string`
  * PaginationToken [PaginationToken](#paginationtoken)
  * ResourceTypeFilters [ResourceTypeFilterList](#resourcetypefilterlist)
  * ResourcesPerPage [ResourcesPerPage](#resourcesperpage)
  * TagFilters [TagFilterList](#tagfilterlist)
  * TagsPerPage [TagsPerPage](#tagsperpage)

#### Output
* output [GetResourcesOutput](#getresourcesoutput)

### GetTagKeys



```js
amazonaws_resourcegroupstaggingapi.GetTagKeys({}, context)
```

#### Input
* input `object`
  * PaginationToken `string`
  * PaginationToken [PaginationToken](#paginationtoken)

#### Output
* output [GetTagKeysOutput](#gettagkeysoutput)

### GetTagValues



```js
amazonaws_resourcegroupstaggingapi.GetTagValues({
  "Key": ""
}, context)
```

#### Input
* input `object`
  * PaginationToken `string`
  * Key **required** [TagKey](#tagkey)
  * PaginationToken [PaginationToken](#paginationtoken)

#### Output
* output [GetTagValuesOutput](#gettagvaluesoutput)

### TagResources



```js
amazonaws_resourcegroupstaggingapi.TagResources({
  "ResourceARNList": [],
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceARNList **required** [ResourceARNList](#resourcearnlist)
  * Tags **required** [TagMap](#tagmap)

#### Output
* output [TagResourcesOutput](#tagresourcesoutput)

### UntagResources



```js
amazonaws_resourcegroupstaggingapi.UntagResources({
  "ResourceARNList": [],
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceARNList **required** [ResourceARNList](#resourcearnlist)
  * TagKeys **required** [TagKeyListForUntag](#tagkeylistforuntag)

#### Output
* output [UntagResourcesOutput](#untagresourcesoutput)



## Definitions

### AmazonResourceType
* AmazonResourceType `string`

### ErrorCode
* ErrorCode `string` (values: InternalServiceException, InvalidParameterException)

### ErrorMessage
* ErrorMessage `string`

### ExceptionMessage
* ExceptionMessage `string`

### FailedResourcesMap
* FailedResourcesMap `array`
  * items `object`
    * key [ResourceARN](#resourcearn)
    * value [FailureInfo](#failureinfo)

### FailureInfo
* FailureInfo `object`: Details of the common errors that all actions return.
  * ErrorCode [ErrorCode](#errorcode)
  * ErrorMessage [ErrorMessage](#errormessage)
  * StatusCode [StatusCode](#statuscode)

### GetResourcesInput
* GetResourcesInput `object`
  * PaginationToken [PaginationToken](#paginationtoken)
  * ResourceTypeFilters [ResourceTypeFilterList](#resourcetypefilterlist)
  * ResourcesPerPage [ResourcesPerPage](#resourcesperpage)
  * TagFilters [TagFilterList](#tagfilterlist)
  * TagsPerPage [TagsPerPage](#tagsperpage)

### GetResourcesOutput
* GetResourcesOutput `object`
  * PaginationToken [PaginationToken](#paginationtoken)
  * ResourceTagMappingList [ResourceTagMappingList](#resourcetagmappinglist)

### GetTagKeysInput
* GetTagKeysInput `object`
  * PaginationToken [PaginationToken](#paginationtoken)

### GetTagKeysOutput
* GetTagKeysOutput `object`
  * PaginationToken [PaginationToken](#paginationtoken)
  * TagKeys [TagKeyList](#tagkeylist)

### GetTagValuesInput
* GetTagValuesInput `object`
  * Key **required** [TagKey](#tagkey)
  * PaginationToken [PaginationToken](#paginationtoken)

### GetTagValuesOutput
* GetTagValuesOutput `object`
  * PaginationToken [PaginationToken](#paginationtoken)
  * TagValues [TagValuesOutputList](#tagvaluesoutputlist)

### InternalServiceException
* InternalServiceException `object`: The request processing failed because of an unknown error, exception, or failure. You can retry the request.
  * Message [ExceptionMessage](#exceptionmessage)

### InvalidParameterException
* InvalidParameterException `object`: A parameter is missing or a malformed string or invalid or out-of-range value was supplied for the request parameter.
  * Message [ExceptionMessage](#exceptionmessage)

### PaginationToken
* PaginationToken `string`

### PaginationTokenExpiredException
* PaginationTokenExpiredException `object`: A <code>PaginationToken</code> is valid for a maximum of 15 minutes. Your request was denied because the specified <code>PaginationToken</code> has expired.
  * Message [ExceptionMessage](#exceptionmessage)

### ResourceARN
* ResourceARN `string`

### ResourceARNList
* ResourceARNList `array`
  * items [ResourceARN](#resourcearn)

### ResourceTagMapping
* ResourceTagMapping `object`: A list of resource ARNs and the tags (keys and values) that are associated with each.
  * ResourceARN [ResourceARN](#resourcearn)
  * Tags [TagList](#taglist)

### ResourceTagMappingList
* ResourceTagMappingList `array`
  * items [ResourceTagMapping](#resourcetagmapping)

### ResourceTypeFilterList
* ResourceTypeFilterList `array`
  * items [AmazonResourceType](#amazonresourcetype)

### ResourcesPerPage
* ResourcesPerPage `integer`

### StatusCode
* StatusCode `integer`

### Tag
* Tag `object`: The metadata that you apply to AWS resources to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-basics">Tag Basics</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.
  * Key **required** [TagKey](#tagkey)
  * Value **required** [TagValue](#tagvalue)

### TagFilter
* TagFilter `object`: A list of tags (keys and values) that are used to specify the associated resources.
  * Key [TagKey](#tagkey)
  * Values [TagValueList](#tagvaluelist)

### TagFilterList
* TagFilterList `array`
  * items [TagFilter](#tagfilter)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagKeyListForUntag
* TagKeyListForUntag `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagMap
* TagMap `array`
  * items `object`
    * key [TagKey](#tagkey)
    * value [TagValue](#tagvalue)

### TagResourcesInput
* TagResourcesInput `object`
  * ResourceARNList **required** [ResourceARNList](#resourcearnlist)
  * Tags **required** [TagMap](#tagmap)

### TagResourcesOutput
* TagResourcesOutput `object`
  * FailedResourcesMap [FailedResourcesMap](#failedresourcesmap)

### TagValue
* TagValue `string`

### TagValueList
* TagValueList `array`
  * items [TagValue](#tagvalue)

### TagValuesOutputList
* TagValuesOutputList `array`
  * items [TagValue](#tagvalue)

### TagsPerPage
* TagsPerPage `integer`

### ThrottledException
* ThrottledException `object`: The request was denied to limit the frequency of submitted requests.
  * Message [ExceptionMessage](#exceptionmessage)

### UntagResourcesInput
* UntagResourcesInput `object`
  * ResourceARNList **required** [ResourceARNList](#resourcearnlist)
  * TagKeys **required** [TagKeyListForUntag](#tagkeylistforuntag)

### UntagResourcesOutput
* UntagResourcesOutput `object`
  * FailedResourcesMap [FailedResourcesMap](#failedresourcesmap)


