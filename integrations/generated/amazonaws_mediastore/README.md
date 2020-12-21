# @datafire/amazonaws_mediastore

Client library for AWS Elemental MediaStore

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_mediastore
```
```js
let amazonaws_mediastore = require('@datafire/amazonaws_mediastore').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

An AWS Elemental MediaStore container is a namespace that holds folders and objects. You use a container endpoint to create, read, and delete objects. 

## Actions

### CreateContainer



```js
amazonaws_mediastore.CreateContainer({
  "ContainerName": null
}, context)
```

#### Input
* input `object`
  * ContainerName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateContainerOutput](#createcontaineroutput)

### DeleteContainer



```js
amazonaws_mediastore.DeleteContainer({
  "ContainerName": null
}, context)
```

#### Input
* input `object`
  * ContainerName **required**

#### Output
* output [DeleteContainerOutput](#deletecontaineroutput)

### DeleteContainerPolicy



```js
amazonaws_mediastore.DeleteContainerPolicy({
  "ContainerName": null
}, context)
```

#### Input
* input `object`
  * ContainerName **required**

#### Output
* output [DeleteContainerPolicyOutput](#deletecontainerpolicyoutput)

### DeleteCorsPolicy



```js
amazonaws_mediastore.DeleteCorsPolicy({
  "ContainerName": null
}, context)
```

#### Input
* input `object`
  * ContainerName **required**

#### Output
* output [DeleteCorsPolicyOutput](#deletecorspolicyoutput)

### DeleteLifecyclePolicy



```js
amazonaws_mediastore.DeleteLifecyclePolicy({
  "ContainerName": null
}, context)
```

#### Input
* input `object`
  * ContainerName **required**

#### Output
* output [DeleteLifecyclePolicyOutput](#deletelifecyclepolicyoutput)

### DeleteMetricPolicy



```js
amazonaws_mediastore.DeleteMetricPolicy({
  "ContainerName": null
}, context)
```

#### Input
* input `object`
  * ContainerName **required**

#### Output
* output [DeleteMetricPolicyOutput](#deletemetricpolicyoutput)

### DescribeContainer



```js
amazonaws_mediastore.DescribeContainer({}, context)
```

#### Input
* input `object`
  * ContainerName

#### Output
* output [DescribeContainerOutput](#describecontaineroutput)

### GetContainerPolicy



```js
amazonaws_mediastore.GetContainerPolicy({
  "ContainerName": null
}, context)
```

#### Input
* input `object`
  * ContainerName **required**

#### Output
* output [GetContainerPolicyOutput](#getcontainerpolicyoutput)

### GetCorsPolicy



```js
amazonaws_mediastore.GetCorsPolicy({
  "ContainerName": null
}, context)
```

#### Input
* input `object`
  * ContainerName **required**

#### Output
* output [GetCorsPolicyOutput](#getcorspolicyoutput)

### GetLifecyclePolicy



```js
amazonaws_mediastore.GetLifecyclePolicy({
  "ContainerName": null
}, context)
```

#### Input
* input `object`
  * ContainerName **required**

#### Output
* output [GetLifecyclePolicyOutput](#getlifecyclepolicyoutput)

### GetMetricPolicy



```js
amazonaws_mediastore.GetMetricPolicy({
  "ContainerName": null
}, context)
```

#### Input
* input `object`
  * ContainerName **required**

#### Output
* output [GetMetricPolicyOutput](#getmetricpolicyoutput)

### ListContainers



```js
amazonaws_mediastore.ListContainers({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListContainersOutput](#listcontainersoutput)

### ListTagsForResource



```js
amazonaws_mediastore.ListTagsForResource({
  "Resource": null
}, context)
```

#### Input
* input `object`
  * Resource **required**

#### Output
* output [ListTagsForResourceOutput](#listtagsforresourceoutput)

### PutContainerPolicy



```js
amazonaws_mediastore.PutContainerPolicy({
  "ContainerName": null,
  "Policy": null
}, context)
```

#### Input
* input `object`
  * ContainerName **required**
  * Policy **required**

#### Output
* output [PutContainerPolicyOutput](#putcontainerpolicyoutput)

### PutCorsPolicy



```js
amazonaws_mediastore.PutCorsPolicy({
  "ContainerName": null,
  "CorsPolicy": null
}, context)
```

#### Input
* input `object`
  * ContainerName **required**
  * CorsPolicy **required**
    * items [CorsRule](#corsrule)

#### Output
* output [PutCorsPolicyOutput](#putcorspolicyoutput)

### PutLifecyclePolicy



```js
amazonaws_mediastore.PutLifecyclePolicy({
  "ContainerName": null,
  "LifecyclePolicy": null
}, context)
```

#### Input
* input `object`
  * ContainerName **required**
  * LifecyclePolicy **required**

#### Output
* output [PutLifecyclePolicyOutput](#putlifecyclepolicyoutput)

### PutMetricPolicy



```js
amazonaws_mediastore.PutMetricPolicy({
  "ContainerName": null,
  "MetricPolicy": null
}, context)
```

#### Input
* input `object`
  * ContainerName **required**
  * MetricPolicy **required**
    * ContainerLevelMetrics **required**
    * MetricPolicyRules
      * items [MetricPolicyRule](#metricpolicyrule)

#### Output
* output [PutMetricPolicyOutput](#putmetricpolicyoutput)

### StartAccessLogging



```js
amazonaws_mediastore.StartAccessLogging({
  "ContainerName": null
}, context)
```

#### Input
* input `object`
  * ContainerName **required**

#### Output
* output [StartAccessLoggingOutput](#startaccessloggingoutput)

### StopAccessLogging



```js
amazonaws_mediastore.StopAccessLogging({
  "ContainerName": null
}, context)
```

#### Input
* input `object`
  * ContainerName **required**

#### Output
* output [StopAccessLoggingOutput](#stopaccessloggingoutput)

### TagResource



```js
amazonaws_mediastore.TagResource({
  "Resource": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * Resource **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceOutput](#tagresourceoutput)

### UntagResource



```js
amazonaws_mediastore.UntagResource({
  "Resource": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * Resource **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceOutput](#untagresourceoutput)



## Definitions

### AllowedHeaders
* AllowedHeaders `array`
  * items [Header](#header)

### AllowedMethods
* AllowedMethods `array`
  * items [MethodName](#methodname)

### AllowedOrigins
* AllowedOrigins `array`
  * items [Origin](#origin)

### Container
* Container `object`: This section describes operations that you can perform on an AWS Elemental MediaStore container.
  * ARN
  * AccessLoggingEnabled
  * CreationTime
  * Endpoint
  * Name
  * Status

### ContainerARN
* ContainerARN `string`

### ContainerAccessLoggingEnabled
* ContainerAccessLoggingEnabled `boolean`

### ContainerInUseException


### ContainerLevelMetrics
* ContainerLevelMetrics `string` (values: ENABLED, DISABLED)

### ContainerList
* ContainerList `array`
  * items [Container](#container)

### ContainerListLimit
* ContainerListLimit `integer`

### ContainerName
* ContainerName `string`

### ContainerNotFoundException


### ContainerPolicy
* ContainerPolicy `string`

### ContainerStatus
* ContainerStatus `string` (values: ACTIVE, CREATING, DELETING)

### CorsPolicy
* CorsPolicy `array`: The CORS policy of the container. 
  * items [CorsRule](#corsrule)

### CorsPolicyNotFoundException


### CorsRule
* CorsRule `object`: A rule for a CORS policy. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.
  * AllowedHeaders **required**
    * items [Header](#header)
  * AllowedMethods
    * items [MethodName](#methodname)
  * AllowedOrigins **required**
    * items [Origin](#origin)
  * ExposeHeaders
    * items [Header](#header)
  * MaxAgeSeconds

### CreateContainerInput
* CreateContainerInput `object`
  * ContainerName **required**
  * Tags
    * items [Tag](#tag)

### CreateContainerOutput
* CreateContainerOutput `object`
  * Container **required**
    * ARN
    * AccessLoggingEnabled
    * CreationTime
    * Endpoint
    * Name
    * Status

### DeleteContainerInput
* DeleteContainerInput `object`
  * ContainerName **required**

### DeleteContainerOutput
* DeleteContainerOutput `object`

### DeleteContainerPolicyInput
* DeleteContainerPolicyInput `object`
  * ContainerName **required**

### DeleteContainerPolicyOutput
* DeleteContainerPolicyOutput `object`

### DeleteCorsPolicyInput
* DeleteCorsPolicyInput `object`
  * ContainerName **required**

### DeleteCorsPolicyOutput
* DeleteCorsPolicyOutput `object`

### DeleteLifecyclePolicyInput
* DeleteLifecyclePolicyInput `object`
  * ContainerName **required**

### DeleteLifecyclePolicyOutput
* DeleteLifecyclePolicyOutput `object`

### DeleteMetricPolicyInput
* DeleteMetricPolicyInput `object`
  * ContainerName **required**

### DeleteMetricPolicyOutput
* DeleteMetricPolicyOutput `object`

### DescribeContainerInput
* DescribeContainerInput `object`
  * ContainerName

### DescribeContainerOutput
* DescribeContainerOutput `object`
  * Container
    * ARN
    * AccessLoggingEnabled
    * CreationTime
    * Endpoint
    * Name
    * Status

### Endpoint
* Endpoint `string`

### ExposeHeaders
* ExposeHeaders `array`
  * items [Header](#header)

### GetContainerPolicyInput
* GetContainerPolicyInput `object`
  * ContainerName **required**

### GetContainerPolicyOutput
* GetContainerPolicyOutput `object`
  * Policy **required**

### GetCorsPolicyInput
* GetCorsPolicyInput `object`
  * ContainerName **required**

### GetCorsPolicyOutput
* GetCorsPolicyOutput `object`
  * CorsPolicy **required**
    * items [CorsRule](#corsrule)

### GetLifecyclePolicyInput
* GetLifecyclePolicyInput `object`
  * ContainerName **required**

### GetLifecyclePolicyOutput
* GetLifecyclePolicyOutput `object`
  * LifecyclePolicy **required**

### GetMetricPolicyInput
* GetMetricPolicyInput `object`
  * ContainerName **required**

### GetMetricPolicyOutput
* GetMetricPolicyOutput `object`
  * MetricPolicy **required**
    * ContainerLevelMetrics **required**
    * MetricPolicyRules
      * items [MetricPolicyRule](#metricpolicyrule)

### Header
* Header `string`

### InternalServerError


### LifecyclePolicy
* LifecyclePolicy `string`

### LimitExceededException


### ListContainersInput
* ListContainersInput `object`
  * MaxResults
  * NextToken

### ListContainersOutput
* ListContainersOutput `object`
  * Containers **required**
    * items [Container](#container)
  * NextToken

### ListTagsForResourceInput
* ListTagsForResourceInput `object`
  * Resource **required**

### ListTagsForResourceOutput
* ListTagsForResourceOutput `object`
  * Tags
    * items [Tag](#tag)

### MaxAgeSeconds
* MaxAgeSeconds `integer`

### MethodName
* MethodName `string` (values: PUT, GET, DELETE, HEAD)

### MetricPolicy
* MetricPolicy `object`: <p>The metric policy that is associated with the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include rules to define groups of objects that you want MediaStore to send object-level metrics for.</p> <p>To view examples of how to construct a metric policy for your use case, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-metric-examples.html">Example Metric Policies</a>.</p>
  * ContainerLevelMetrics **required**
  * MetricPolicyRules
    * items [MetricPolicyRule](#metricpolicyrule)

### MetricPolicyRule
* MetricPolicyRule `object`: A setting that enables metrics at the object level. Each rule contains an object group and an object group name. If the policy includes the MetricPolicyRules parameter, you must include at least one rule. Each metric policy can include up to five rules by default. You can also <a href="https://console.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas">request a quota increase</a> to allow up to 300 rules per policy.
  * ObjectGroup **required**
  * ObjectGroupName **required**

### MetricPolicyRules
* MetricPolicyRules `array`
  * items [MetricPolicyRule](#metricpolicyrule)

### ObjectGroup
* ObjectGroup `string`

### ObjectGroupName
* ObjectGroupName `string`

### Origin
* Origin `string`

### PaginationToken
* PaginationToken `string`

### PolicyNotFoundException


### PutContainerPolicyInput
* PutContainerPolicyInput `object`
  * ContainerName **required**
  * Policy **required**

### PutContainerPolicyOutput
* PutContainerPolicyOutput `object`

### PutCorsPolicyInput
* PutCorsPolicyInput `object`
  * ContainerName **required**
  * CorsPolicy **required**
    * items [CorsRule](#corsrule)

### PutCorsPolicyOutput
* PutCorsPolicyOutput `object`

### PutLifecyclePolicyInput
* PutLifecyclePolicyInput `object`
  * ContainerName **required**
  * LifecyclePolicy **required**

### PutLifecyclePolicyOutput
* PutLifecyclePolicyOutput `object`

### PutMetricPolicyInput
* PutMetricPolicyInput `object`
  * ContainerName **required**
  * MetricPolicy **required**
    * ContainerLevelMetrics **required**
    * MetricPolicyRules
      * items [MetricPolicyRule](#metricpolicyrule)

### PutMetricPolicyOutput
* PutMetricPolicyOutput `object`

### StartAccessLoggingInput
* StartAccessLoggingInput `object`
  * ContainerName **required**

### StartAccessLoggingOutput
* StartAccessLoggingOutput `object`

### StopAccessLoggingInput
* StopAccessLoggingInput `object`
  * ContainerName **required**

### StopAccessLoggingOutput
* StopAccessLoggingOutput `object`

### Tag
* Tag `object`: A collection of tags associated with a container. Each tag consists of a key:value pair, which can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.
  * Key **required**
  * Value

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceInput
* TagResourceInput `object`
  * Resource **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceOutput
* TagResourceOutput `object`

### TagValue
* TagValue `string`

### TimeStamp
* TimeStamp `string`

### UntagResourceInput
* UntagResourceInput `object`
  * Resource **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceOutput
* UntagResourceOutput `object`


