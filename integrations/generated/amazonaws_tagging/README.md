# @datafire/amazonaws_tagging

Client library for AWS Resource Groups Tagging API

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_tagging
```

```js
let datafire = require('datafire');
let amazonaws_tagging = require('@datafire/amazonaws_tagging').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_tagging.GetResources({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Resource Groups Tagging API</fullname> <p>This guide describes the API operations for the resource groups tagging.</p> <p>A tag is a label that you assign to an AWS resource. A tag consists of a key and a value, both of which you define. For example, if you have two Amazon EC2 instances, you might assign both a tag key of "Stack." But the value of "Stack" might be "Testing" for one and "Production" for the other.</p> <p>Tagging can help you organize your resources and enables you to simplify resource management, access management and cost allocation. For more information about tagging, see <a href="http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html">Working with Tag Editor</a> and <a href="http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/resource-groups.html">Working with Resource Groups</a>. For more information about permissions you need to use the resource groups tagging APIs, see <a href="http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/obtaining-permissions-for-resource-groups.html">Obtaining Permissions for Resource Groups </a> and <a href="http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/obtaining-permissions-for-tagging.html">Obtaining Permissions for Tagging </a>.</p> <p>You can use the resource groups tagging APIs to complete the following tasks:</p> <ul> <li> <p>Tag and untag supported resources located in the specified region for the AWS account</p> </li> <li> <p>Use tag-based filters to search for resources located in the specified region for the AWS account</p> </li> <li> <p>List all existing tag keys in the specified region for the AWS account</p> </li> <li> <p>List all existing values for the specified key in the specified region for the AWS account</p> </li> </ul> <p>Not all resources can have tags. For a lists of resources that you can tag, see <a href="http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/supported-resources.html">Supported Resources</a> in the <i>AWS Resource Groups and Tag Editor User Guide</i>.</p> <p>To make full use of the resource groups tagging APIs, you might need additional IAM permissions, including permission to access the resources of individual services as well as permission to view and apply tags to those resources. For more information, see <a href="http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/obtaining-permissions-for-tagging.html">Obtaining Permissions for Tagging</a> in the <i>AWS Resource Groups and Tag Editor User Guide</i>.</p>

## Actions
### GetResources



```js
amazonaws_tagging.GetResources({
  "TagsPerPage": 0
}, context)
```

#### Parameters
* PaginationToken (string)
* ResourceTypeFilters (array)
* TagFilters (array)
* TagsPerPage (integer) **required**

### GetTagKeys



```js
amazonaws_tagging.GetTagKeys({}, context)
```

#### Parameters
* PaginationToken (string)

### GetTagValues



```js
amazonaws_tagging.GetTagValues({
  "Key": ""
}, context)
```

#### Parameters
* Key (string) **required**
* PaginationToken (string)

### TagResources



```js
amazonaws_tagging.TagResources({
  "ResourceARNList": [],
  "Tags": []
}, context)
```

#### Parameters
* ResourceARNList (array) **required**
* Tags (array) **required**

### UntagResources



```js
amazonaws_tagging.UntagResources({
  "ResourceARNList": [],
  "TagKeys": []
}, context)
```

#### Parameters
* ResourceARNList (array) **required**
* TagKeys (array) **required**

