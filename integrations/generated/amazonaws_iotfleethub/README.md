# @datafire/amazonaws_iotfleethub

Client library for AWS IoT Fleet Hub

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_iotfleethub
```
```js
let amazonaws_iotfleethub = require('@datafire/amazonaws_iotfleethub').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>With Fleet Hub for AWS IoT Device Management you can build stand-alone web applications for monitoring the health of your device fleets.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

## Actions

### ListApplications



```js
amazonaws_iotfleethub.ListApplications({}, context)
```

#### Input
* input `object`
  * nextToken `string`

#### Output
* output [ListApplicationsResponse](#listapplicationsresponse)

### CreateApplication



```js
amazonaws_iotfleethub.CreateApplication({
  "applicationName": "",
  "roleArn": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: A set of key/value pairs that you can use to manage the web application resource.
  * applicationDescription `string`: An optional description of the web application.
  * applicationName **required** `string`: The name of the web application.
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
  * roleArn **required** `string`: <p>The ARN of the role that the web application assumes when it interacts with AWS IoT Core.</p> <note> <p>The name of the role must be in the form <code>AWSIotFleetHub_<i>random_string</i> </code>.</p> </note>

#### Output
*Output schema unknown*

### DeleteApplication



```js
amazonaws_iotfleethub.DeleteApplication({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`
  * clientToken `string`

#### Output
*Output schema unknown*

### DescribeApplication



```js
amazonaws_iotfleethub.DescribeApplication({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`

#### Output
* output [DescribeApplicationResponse](#describeapplicationresponse)

### UpdateApplication



```js
amazonaws_iotfleethub.UpdateApplication({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`
  * applicationDescription `string`: An optional description of the web application.
  * applicationName `string`: The name of the web application.
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.

#### Output
*Output schema unknown*

### ListTagsForResource



```js
amazonaws_iotfleethub.ListTagsForResource({
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
amazonaws_iotfleethub.TagResource({
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
amazonaws_iotfleethub.UntagResource({
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

### ApplicationState
* ApplicationState `string` (values: CREATING, DELETING, ACTIVE, CREATE_FAILED, DELETE_FAILED)

### ApplicationSummaries
* ApplicationSummaries `array`
  * items [ApplicationSummary](#applicationsummary)

### ApplicationSummary
* ApplicationSummary `object`: <p>A summary of information about a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
  * applicationCreationDate
  * applicationDescription
  * applicationId **required**
  * applicationLastUpdateDate
  * applicationName **required**
  * applicationState
  * applicationUrl **required**

### Arn
* Arn `string`

### ClientRequestToken
* ClientRequestToken `string`

### ConflictException


### CreateApplicationRequest
* CreateApplicationRequest `object`
  * tags
  * applicationDescription
  * applicationName **required**
  * clientToken
  * roleArn **required**

### CreateApplicationResponse
* CreateApplicationResponse `object`
  * applicationArn **required**
  * applicationId **required**

### DeleteApplicationRequest
* DeleteApplicationRequest `object`

### DeleteApplicationResponse
* DeleteApplicationResponse `object`

### DescribeApplicationRequest
* DescribeApplicationRequest `object`

### DescribeApplicationResponse
* DescribeApplicationResponse `object`
  * tags
  * applicationArn **required**
  * applicationCreationDate **required**
  * applicationDescription
  * applicationId **required**
  * applicationLastUpdateDate **required**
  * applicationName **required**
  * applicationState **required**
  * applicationUrl **required**
  * errorMessage
  * roleArn **required**
  * ssoClientId

### Description
* Description `string`

### ErrorMessage
* ErrorMessage `string`

### Id
* Id `string`

### InternalFailureException


### InvalidRequestException


### LimitExceededException


### ListApplicationsRequest
* ListApplicationsRequest `object`

### ListApplicationsResponse
* ListApplicationsResponse `object`
  * applicationSummaries
    * items [ApplicationSummary](#applicationsummary)
  * nextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### Name
* Name `string`

### NextToken
* NextToken `string`

### ResourceArn
* ResourceArn `string`

### ResourceNotFoundException


### SsoClientId
* SsoClientId `string`

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### ThrottlingException


### Timestamp
* Timestamp `integer`

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateApplicationRequest
* UpdateApplicationRequest `object`
  * applicationDescription
  * applicationName
  * clientToken

### UpdateApplicationResponse
* UpdateApplicationResponse `object`

### Url
* Url `string`


