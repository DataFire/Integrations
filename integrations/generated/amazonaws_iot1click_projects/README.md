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

amazonaws_iot1click_projects.ListProjects({}).then(data => {
  console.log(data);
});
```

## Description

The AWS IoT 1-Click Project API Reference

## Actions

### ListProjects



```js
amazonaws_iot1click_projects.ListProjects({}, context)
```

#### Input
* input `object`

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
  * description [Description](#description)
  * placementTemplate [PlacementTemplate](#placementtemplate)
  * projectName **required** [ProjectName](#projectname)

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
  * description [Description](#description)
  * placementTemplate [PlacementTemplate](#placementtemplate)

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
  * attributes [PlacementAttributeMap](#placementattributemap)
  * placementName **required** [PlacementName](#placementname)

#### Output
* output [CreatePlacementResponse](#createplacementresponse)

### DeletePlacement



```js
amazonaws_iot1click_projects.DeletePlacement({
  "projectName": "",
  "placementName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * placementName **required** `string`

#### Output
* output [DeletePlacementResponse](#deleteplacementresponse)

### DescribePlacement



```js
amazonaws_iot1click_projects.DescribePlacement({
  "projectName": "",
  "placementName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * placementName **required** `string`

#### Output
* output [DescribePlacementResponse](#describeplacementresponse)

### UpdatePlacement



```js
amazonaws_iot1click_projects.UpdatePlacement({
  "projectName": "",
  "placementName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`
  * placementName **required** `string`
  * attributes [PlacementAttributeMap](#placementattributemap)

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
  * deviceId **required** [DeviceId](#deviceid)

#### Output
* output [AssociateDeviceWithPlacementResponse](#associatedevicewithplacementresponse)



## Definitions

### AssociateDeviceWithPlacementRequest
* AssociateDeviceWithPlacementRequest `object`
  * deviceId **required** [DeviceId](#deviceid)

### AssociateDeviceWithPlacementResponse
* AssociateDeviceWithPlacementResponse `object`

### AttributeDefaultValue
* AttributeDefaultValue `string`

### AttributeName
* AttributeName `string`

### AttributeValue
* AttributeValue `string`

### Code
* Code `string`

### CreatePlacementRequest
* CreatePlacementRequest `object`
  * attributes [PlacementAttributeMap](#placementattributemap)
  * placementName **required** [PlacementName](#placementname)

### CreatePlacementResponse
* CreatePlacementResponse `object`

### CreateProjectRequest
* CreateProjectRequest `object`
  * description [Description](#description)
  * placementTemplate [PlacementTemplate](#placementtemplate)
  * projectName **required** [ProjectName](#projectname)

### CreateProjectResponse
* CreateProjectResponse `object`

### DefaultPlacementAttributeMap
* DefaultPlacementAttributeMap `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [AttributeDefaultValue](#attributedefaultvalue)

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
  * placement **required** [PlacementDescription](#placementdescription)

### DescribeProjectRequest
* DescribeProjectRequest `object`

### DescribeProjectResponse
* DescribeProjectResponse `object`
  * project **required** [ProjectDescription](#projectdescription)

### Description
* Description `string`

### DeviceCallbackKey
* DeviceCallbackKey `string`

### DeviceCallbackOverrideMap
* DeviceCallbackOverrideMap `array`
  * items `object`
    * key [DeviceCallbackKey](#devicecallbackkey)
    * value [DeviceCallbackValue](#devicecallbackvalue)

### DeviceCallbackValue
* DeviceCallbackValue `string`

### DeviceId
* DeviceId `string`

### DeviceMap
* DeviceMap `array`
  * items `object`
    * key [DeviceTemplateName](#devicetemplatename)
    * value [DeviceId](#deviceid)

### DeviceTemplate
* DeviceTemplate `object`: An object representing a device for a placement template (see <a>PlacementTemplate</a>).
  * callbackOverrides [DeviceCallbackOverrideMap](#devicecallbackoverridemap)
  * deviceType [DeviceType](#devicetype)

### DeviceTemplateMap
* DeviceTemplateMap `array`
  * items `object`
    * key [DeviceTemplateName](#devicetemplatename)
    * value [DeviceTemplate](#devicetemplate)

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
  * devices **required** [DeviceMap](#devicemap)

### InternalFailureException
* InternalFailureException `object`: <p/>
  * code **required** [Code](#code)
  * message **required** [Message](#message)

### InvalidRequestException
* InvalidRequestException `object`: <p/>
  * code **required** [Code](#code)
  * message **required** [Message](#message)

### ListPlacementsRequest
* ListPlacementsRequest `object`

### ListPlacementsResponse
* ListPlacementsResponse `object`
  * nextToken [NextToken](#nexttoken)
  * placements **required** [PlacementSummaryList](#placementsummarylist)

### ListProjectsRequest
* ListProjectsRequest `object`

### ListProjectsResponse
* ListProjectsResponse `object`
  * nextToken [NextToken](#nexttoken)
  * projects **required** [ProjectSummaryList](#projectsummarylist)

### MaxResults
* MaxResults `integer`

### Message
* Message `string`

### NextToken
* NextToken `string`

### PlacementAttributeMap
* PlacementAttributeMap `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [AttributeValue](#attributevalue)

### PlacementDescription
* PlacementDescription `object`: An object describing a project's placement.
  * attributes **required** [PlacementAttributeMap](#placementattributemap)
  * createdDate **required** [Time](#time)
  * placementName **required** [PlacementName](#placementname)
  * projectName **required** [ProjectName](#projectname)
  * updatedDate **required** [Time](#time)

### PlacementName
* PlacementName `string`

### PlacementSummary
* PlacementSummary `object`: An object providing summary information for a particular placement.
  * createdDate **required** [Time](#time)
  * placementName **required** [PlacementName](#placementname)
  * projectName **required** [ProjectName](#projectname)
  * updatedDate **required** [Time](#time)

### PlacementSummaryList
* PlacementSummaryList `array`
  * items [PlacementSummary](#placementsummary)

### PlacementTemplate
* PlacementTemplate `object`: An object defining the template for a placement.
  * defaultAttributes [DefaultPlacementAttributeMap](#defaultplacementattributemap)
  * deviceTemplates [DeviceTemplateMap](#devicetemplatemap)

### ProjectDescription
* ProjectDescription `object`: An object providing detailed information for a particular project associated with an AWS account and region.
  * createdDate **required** [Time](#time)
  * description [Description](#description)
  * placementTemplate [PlacementTemplate](#placementtemplate)
  * projectName **required** [ProjectName](#projectname)
  * updatedDate **required** [Time](#time)

### ProjectName
* ProjectName `string`

### ProjectSummary
* ProjectSummary `object`: An object providing summary information for a particular project for an associated AWS account and region.
  * createdDate **required** [Time](#time)
  * projectName **required** [ProjectName](#projectname)
  * updatedDate **required** [Time](#time)

### ProjectSummaryList
* ProjectSummaryList `array`
  * items [ProjectSummary](#projectsummary)

### ResourceConflictException
* ResourceConflictException `object`: <p/>
  * code **required** [Code](#code)
  * message **required** [Message](#message)

### ResourceNotFoundException
* ResourceNotFoundException `object`: <p/>
  * code **required** [Code](#code)
  * message **required** [Message](#message)

### Time
* Time `string`

### TooManyRequestsException
* TooManyRequestsException `object`: <p/>
  * code **required** [Code](#code)
  * message **required** [Message](#message)

### UpdatePlacementRequest
* UpdatePlacementRequest `object`
  * attributes [PlacementAttributeMap](#placementattributemap)

### UpdatePlacementResponse
* UpdatePlacementResponse `object`

### UpdateProjectRequest
* UpdateProjectRequest `object`
  * description [Description](#description)
  * placementTemplate [PlacementTemplate](#placementtemplate)

### UpdateProjectResponse
* UpdateProjectResponse `object`


