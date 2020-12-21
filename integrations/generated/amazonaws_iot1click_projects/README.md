# @datafire/amazonaws_iot1click_projects

Client library for AWS IoT 1-Click Projects Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_iot1click_projects
```
```js
let amazonaws_iot1click_projects = require('@datafire/amazonaws_iot1click_projects').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The AWS IoT 1-Click Projects API Reference

## Actions

### ListProjects



```js
amazonaws_iot1click_projects.ListProjects({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListProjectsResponse](#listprojectsresponse)

### CreateProject



```js
amazonaws_iot1click_projects.CreateProject({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: Optional tags (metadata key/value pairs) to be associated with the project. For example, <code>{ {"key1": "value1", "key2": "value2"} }</code>. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.
  * description `string`: An optional description for the project.
  * placementTemplate `object`: An object defining the template for a placement.
    * defaultAttributes
    * deviceTemplates
  * projectName **required** `string`: The name of the project to create.

#### Output
* output [CreateProjectResponse](#createprojectresponse)

### DeleteProject



```js
amazonaws_iot1click_projects.DeleteProject({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`

#### Output
* output [DeleteProjectResponse](#deleteprojectresponse)

### DescribeProject



```js
amazonaws_iot1click_projects.DescribeProject({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`

#### Output
* output [DescribeProjectResponse](#describeprojectresponse)

### UpdateProject



```js
amazonaws_iot1click_projects.UpdateProject({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * description `string`: An optional user-defined description for the project.
  * placementTemplate `object`: An object defining the template for a placement.
    * defaultAttributes
    * deviceTemplates

#### Output
* output [UpdateProjectResponse](#updateprojectresponse)

### ListPlacements



```js
amazonaws_iot1click_projects.ListPlacements({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListPlacementsResponse](#listplacementsresponse)

### CreatePlacement



```js
amazonaws_iot1click_projects.CreatePlacement({
  "projectName": "",
  "placementName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * attributes `object`: Optional user-defined key/value pairs providing contextual data (such as location or function) for the placement.
  * placementName **required** `string`: The name of the placement to be created.

#### Output
* output [CreatePlacementResponse](#createplacementresponse)

### DeletePlacement



```js
amazonaws_iot1click_projects.DeletePlacement({
  "placementName": "",
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * placementName **required** `string`
  * projectName **required** `string`

#### Output
* output [DeletePlacementResponse](#deleteplacementresponse)

### DescribePlacement



```js
amazonaws_iot1click_projects.DescribePlacement({
  "placementName": "",
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * placementName **required** `string`
  * projectName **required** `string`

#### Output
* output [DescribePlacementResponse](#describeplacementresponse)

### UpdatePlacement



```js
amazonaws_iot1click_projects.UpdatePlacement({
  "placementName": "",
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * placementName **required** `string`
  * projectName **required** `string`
  * attributes `object`: The user-defined object of attributes used to update the placement. The maximum number of key/value pairs is 50.

#### Output
* output [UpdatePlacementResponse](#updateplacementresponse)

### GetDevicesInPlacement



```js
amazonaws_iot1click_projects.GetDevicesInPlacement({
  "projectName": "",
  "placementName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * placementName **required** `string`

#### Output
* output [GetDevicesInPlacementResponse](#getdevicesinplacementresponse)

### DisassociateDeviceFromPlacement



```js
amazonaws_iot1click_projects.DisassociateDeviceFromPlacement({
  "projectName": "",
  "placementName": "",
  "deviceTemplateName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * placementName **required** `string`
  * deviceTemplateName **required** `string`

#### Output
* output [DisassociateDeviceFromPlacementResponse](#disassociatedevicefromplacementresponse)

### AssociateDeviceWithPlacement



```js
amazonaws_iot1click_projects.AssociateDeviceWithPlacement({
  "projectName": "",
  "placementName": "",
  "deviceTemplateName": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * placementName **required** `string`
  * deviceTemplateName **required** `string`
  * deviceId **required** `string`: The ID of the physical device to be associated with the given placement in the project. Note that a mandatory 4 character prefix is required for all <code>deviceId</code> values.

#### Output
* output [AssociateDeviceWithPlacementResponse](#associatedevicewithplacementresponse)

### ListTagsForResource



```js
amazonaws_iot1click_projects.ListTagsForResource({
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
amazonaws_iot1click_projects.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: The new or modifying tag(s) for the resource. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per resource.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_iot1click_projects.UntagResource({
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

### AssociateDeviceWithPlacementRequest
* AssociateDeviceWithPlacementRequest `object`
  * deviceId **required**

### AssociateDeviceWithPlacementResponse
* AssociateDeviceWithPlacementResponse `object`

### AttributeDefaultValue
* AttributeDefaultValue `string`

### AttributeName
* AttributeName `string`

### AttributeValue
* AttributeValue `string`

### CreatePlacementRequest
* CreatePlacementRequest `object`
  * attributes
  * placementName **required**

### CreatePlacementResponse
* CreatePlacementResponse `object`

### CreateProjectRequest
* CreateProjectRequest `object`
  * tags
  * description
  * placementTemplate
    * defaultAttributes
    * deviceTemplates
  * projectName **required**

### CreateProjectResponse
* CreateProjectResponse `object`

### DefaultPlacementAttributeMap
* DefaultPlacementAttributeMap `object`

### DeletePlacementRequest
* DeletePlacementRequest `object`

### DeletePlacementResponse
* DeletePlacementResponse `object`

### DeleteProjectRequest
* DeleteProjectRequest `object`

### DeleteProjectResponse
* DeleteProjectResponse `object`

### DescribePlacementRequest
* DescribePlacementRequest `object`

### DescribePlacementResponse
* DescribePlacementResponse `object`
  * placement **required**
    * attributes **required**
    * createdDate **required**
    * placementName **required**
    * projectName **required**
    * updatedDate **required**

### DescribeProjectRequest
* DescribeProjectRequest `object`

### DescribeProjectResponse
* DescribeProjectResponse `object`
  * project **required**
    * tags
    * arn
    * createdDate **required**
    * description
    * placementTemplate
      * defaultAttributes
      * deviceTemplates
    * projectName **required**
    * updatedDate **required**

### Description
* Description `string`

### DeviceCallbackKey
* DeviceCallbackKey `string`

### DeviceCallbackOverrideMap
* DeviceCallbackOverrideMap `object`

### DeviceCallbackValue
* DeviceCallbackValue `string`

### DeviceId
* DeviceId `string`

### DeviceMap
* DeviceMap `object`

### DeviceTemplate
* DeviceTemplate `object`: An object representing a device for a placement template (see <a>PlacementTemplate</a>).
  * callbackOverrides
  * deviceType

### DeviceTemplateMap
* DeviceTemplateMap `object`

### DeviceTemplateName
* DeviceTemplateName `string`

### DeviceType
* DeviceType `string`

### DisassociateDeviceFromPlacementRequest
* DisassociateDeviceFromPlacementRequest `object`

### DisassociateDeviceFromPlacementResponse
* DisassociateDeviceFromPlacementResponse `object`

### GetDevicesInPlacementRequest
* GetDevicesInPlacementRequest `object`

### GetDevicesInPlacementResponse
* GetDevicesInPlacementResponse `object`
  * devices **required**

### InternalFailureException


### InvalidRequestException


### ListPlacementsRequest
* ListPlacementsRequest `object`

### ListPlacementsResponse
* ListPlacementsResponse `object`
  * nextToken
  * placements **required**
    * items [PlacementSummary](#placementsummary)

### ListProjectsRequest
* ListProjectsRequest `object`

### ListProjectsResponse
* ListProjectsResponse `object`
  * nextToken
  * projects **required**
    * items [ProjectSummary](#projectsummary)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### MaxResults
* MaxResults `integer`

### NextToken
* NextToken `string`

### PlacementAttributeMap
* PlacementAttributeMap `object`

### PlacementDescription
* PlacementDescription `object`: An object describing a project's placement.
  * attributes **required**
  * createdDate **required**
  * placementName **required**
  * projectName **required**
  * updatedDate **required**

### PlacementName
* PlacementName `string`

### PlacementSummary
* PlacementSummary `object`: An object providing summary information for a particular placement.
  * createdDate **required**
  * placementName **required**
  * projectName **required**
  * updatedDate **required**

### PlacementSummaryList
* PlacementSummaryList `array`
  * items [PlacementSummary](#placementsummary)

### PlacementTemplate
* PlacementTemplate `object`: An object defining the template for a placement.
  * defaultAttributes
  * deviceTemplates

### ProjectArn
* ProjectArn `string`

### ProjectDescription
* ProjectDescription `object`: An object providing detailed information for a particular project associated with an AWS account and region.
  * tags
  * arn
  * createdDate **required**
  * description
  * placementTemplate
    * defaultAttributes
    * deviceTemplates
  * projectName **required**
  * updatedDate **required**

### ProjectName
* ProjectName `string`

### ProjectSummary
* ProjectSummary `object`: An object providing summary information for a particular project for an associated AWS account and region.
  * tags
  * arn
  * createdDate **required**
  * projectName **required**
  * updatedDate **required**

### ProjectSummaryList
* ProjectSummaryList `array`
  * items [ProjectSummary](#projectsummary)

### ResourceConflictException


### ResourceNotFoundException


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

### Time
* Time `string`

### TooManyRequestsException


### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdatePlacementRequest
* UpdatePlacementRequest `object`
  * attributes

### UpdatePlacementResponse
* UpdatePlacementResponse `object`

### UpdateProjectRequest
* UpdateProjectRequest `object`
  * description
  * placementTemplate
    * defaultAttributes
    * deviceTemplates

### UpdateProjectResponse
* UpdateProjectResponse `object`


