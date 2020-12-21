# @datafire/amazonaws_iotdeviceadvisor

Client library for AWS IoT Core Device Advisor

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_iotdeviceadvisor
```
```js
let amazonaws_iotdeviceadvisor = require('@datafire/amazonaws_iotdeviceadvisor').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

AWS IoT Core Device Advisor is a cloud-based, fully managed test capability for validating IoT devices during device software development. Device Advisor provides pre-built tests that you can use to validate IoT devices for reliable and secure connectivity with AWS IoT Core before deploying devices to production. By using Device Advisor, you can confirm that your devices can connect to AWS IoT Core, follow security best practices and, if applicable, receive software updates from IoT Device Management. You can also download signed qualification reports to submit to the AWS Partner Network to get your device qualified for the AWS Partner Device Catalog without the need to send your device in and wait for it to be tested.

## Actions

### ListSuiteDefinitions



```js
amazonaws_iotdeviceadvisor.ListSuiteDefinitions({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListSuiteDefinitionsResponse](#listsuitedefinitionsresponse)

### CreateSuiteDefinition



```js
amazonaws_iotdeviceadvisor.CreateSuiteDefinition({}, context)
```

#### Input
* input `object`
  * tags `object`: The tags to be attached to the suite definition.
  * suiteDefinitionConfiguration `object`: Gets Suite Definition Configuration.
    * devicePermissionRoleArn
    * devices
      * items [DeviceUnderTest](#deviceundertest)
    * intendedForQualification
    * rootGroup
    * suiteDefinitionName

#### Output
* output [CreateSuiteDefinitionResponse](#createsuitedefinitionresponse)

### DeleteSuiteDefinition



```js
amazonaws_iotdeviceadvisor.DeleteSuiteDefinition({
  "suiteDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * suiteDefinitionId **required** `string`

#### Output
* output [DeleteSuiteDefinitionResponse](#deletesuitedefinitionresponse)

### GetSuiteDefinition



```js
amazonaws_iotdeviceadvisor.GetSuiteDefinition({
  "suiteDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * suiteDefinitionId **required** `string`
  * suiteDefinitionVersion `string`

#### Output
* output [GetSuiteDefinitionResponse](#getsuitedefinitionresponse)

### UpdateSuiteDefinition



```js
amazonaws_iotdeviceadvisor.UpdateSuiteDefinition({
  "suiteDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * suiteDefinitionId **required** `string`
  * suiteDefinitionConfiguration `object`: Gets Suite Definition Configuration.
    * devicePermissionRoleArn
    * devices
      * items [DeviceUnderTest](#deviceundertest)
    * intendedForQualification
    * rootGroup
    * suiteDefinitionName

#### Output
* output [UpdateSuiteDefinitionResponse](#updatesuitedefinitionresponse)

### StartSuiteRun



```js
amazonaws_iotdeviceadvisor.StartSuiteRun({
  "suiteDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * suiteDefinitionId **required** `string`
  * tags `object`: The tags to be attached to the suite run.
  * suiteDefinitionVersion `string`: Request to start suite run based on suite definition version.
  * suiteRunConfiguration `object`: Gets suite run configuration.
    * primaryDevice
      * certificateArn
      * thingArn
    * secondaryDevice
      * certificateArn
      * thingArn
    * selectedTestList
      * items [UUID](#uuid)

#### Output
* output [StartSuiteRunResponse](#startsuiterunresponse)

### GetSuiteRun



```js
amazonaws_iotdeviceadvisor.GetSuiteRun({
  "suiteDefinitionId": "",
  "suiteRunId": ""
}, context)
```

#### Input
* input `object`
  * suiteDefinitionId **required** `string`
  * suiteRunId **required** `string`

#### Output
* output [GetSuiteRunResponse](#getsuiterunresponse)

### GetSuiteRunReport



```js
amazonaws_iotdeviceadvisor.GetSuiteRunReport({
  "suiteDefinitionId": "",
  "suiteRunId": ""
}, context)
```

#### Input
* input `object`
  * suiteDefinitionId **required** `string`
  * suiteRunId **required** `string`

#### Output
* output [GetSuiteRunReportResponse](#getsuiterunreportresponse)

### ListSuiteRuns



```js
amazonaws_iotdeviceadvisor.ListSuiteRuns({}, context)
```

#### Input
* input `object`
  * suiteDefinitionId `string`
  * suiteDefinitionVersion `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListSuiteRunsResponse](#listsuiterunsresponse)

### ListTagsForResource



```js
amazonaws_iotdeviceadvisor.ListTagsForResource({
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
amazonaws_iotdeviceadvisor.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: The tags to be attached to the IoT Device Advisor resource.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_iotdeviceadvisor.UntagResource({
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

### ListTestCases



```js
amazonaws_iotdeviceadvisor.ListTestCases({}, context)
```

#### Input
* input `object`
  * intendedForQualification `boolean`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListTestCasesResponse](#listtestcasesresponse)



## Definitions

### AmazonResourceName
* AmazonResourceName `string`

### CategoryName
* CategoryName `string`

### ConfigString
* ConfigString `string`

### ConflictException


### CreateSuiteDefinitionRequest
* CreateSuiteDefinitionRequest `object`
  * tags
  * suiteDefinitionConfiguration
    * devicePermissionRoleArn
    * devices
      * items [DeviceUnderTest](#deviceundertest)
    * intendedForQualification
    * rootGroup
    * suiteDefinitionName

### CreateSuiteDefinitionResponse
* CreateSuiteDefinitionResponse `object`
  * createdAt
  * suiteDefinitionArn
  * suiteDefinitionId
  * suiteDefinitionName

### DeleteSuiteDefinitionRequest
* DeleteSuiteDefinitionRequest `object`

### DeleteSuiteDefinitionResponse
* DeleteSuiteDefinitionResponse `object`

### DeviceUnderTest
* DeviceUnderTest `object`: Lists all the devices under test
  * certificateArn
  * thingArn

### DeviceUnderTestList
* DeviceUnderTestList `array`
  * items [DeviceUnderTest](#deviceundertest)

### ErrorReason
* ErrorReason `string`

### Failure
* Failure `string`

### GetSuiteDefinitionRequest
* GetSuiteDefinitionRequest `object`

### GetSuiteDefinitionResponse
* GetSuiteDefinitionResponse `object`
  * tags
  * createdAt
  * lastModifiedAt
  * latestVersion
  * suiteDefinitionArn
  * suiteDefinitionConfiguration
    * devicePermissionRoleArn
    * devices
      * items [DeviceUnderTest](#deviceundertest)
    * intendedForQualification
    * rootGroup
    * suiteDefinitionName
  * suiteDefinitionId
  * suiteDefinitionVersion

### GetSuiteRunReportRequest
* GetSuiteRunReportRequest `object`

### GetSuiteRunReportResponse
* GetSuiteRunReportResponse `object`
  * qualificationReportDownloadUrl

### GetSuiteRunRequest
* GetSuiteRunRequest `object`

### GetSuiteRunResponse
* GetSuiteRunResponse `object`
  * tags
  * endTime
  * errorReason
  * startTime
  * status
  * suiteDefinitionId
  * suiteDefinitionVersion
  * suiteRunArn
  * suiteRunConfiguration
    * primaryDevice
      * certificateArn
      * thingArn
    * secondaryDevice
      * certificateArn
      * thingArn
    * selectedTestList
      * items [UUID](#uuid)
  * suiteRunId
  * testResult
    * groups
      * items [GroupResult](#groupresult)

### GroupName
* GroupName `string`

### GroupResult
* GroupResult `object`: Show Group Result.
  * groupId
  * groupName
  * tests
    * items [TestCaseRun](#testcaserun)

### GroupResultList
* GroupResultList `array`: how Group Result list.
  * items [GroupResult](#groupresult)

### IntendedForQualificationBoolean
* IntendedForQualificationBoolean `boolean`

### InternalServerException


### ListSuiteDefinitionsRequest
* ListSuiteDefinitionsRequest `object`

### ListSuiteDefinitionsResponse
* ListSuiteDefinitionsResponse `object`
  * nextToken
  * suiteDefinitionInformationList
    * items [SuiteDefinitionInformation](#suitedefinitioninformation)

### ListSuiteRunsRequest
* ListSuiteRunsRequest `object`

### ListSuiteRunsResponse
* ListSuiteRunsResponse `object`
  * nextToken
  * suiteRunsList
    * items [SuiteRunInformation](#suiteruninformation)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### ListTestCasesRequest
* ListTestCasesRequest `object`

### ListTestCasesResponse
* ListTestCasesResponse `object`
  * categories
    * items [TestCaseCategory](#testcasecategory)
  * groupConfiguration
  * nextToken
  * rootGroupConfiguration

### LogUrl
* LogUrl `string`

### MaxResults
* MaxResults `integer`

### QualificationReportDownloadUrl
* QualificationReportDownloadUrl `string`

### ResourceNotFoundException


### RootGroup
* RootGroup `string`

### SelectedTestList
* SelectedTestList `array`
  * items [UUID](#uuid)

### StartSuiteRunRequest
* StartSuiteRunRequest `object`
  * tags
  * suiteDefinitionVersion
  * suiteRunConfiguration
    * primaryDevice
      * certificateArn
      * thingArn
    * secondaryDevice
      * certificateArn
      * thingArn
    * selectedTestList
      * items [UUID](#uuid)

### StartSuiteRunResponse
* StartSuiteRunResponse `object`
  * createdAt
  * suiteRunArn
  * suiteRunId

### Status
* Status `string` (values: PASS, FAIL, CANCELED, PENDING, RUNNING, PASS_WITH_WARNINGS, ERROR)

### String128
* String128 `string`

### String256
* String256 `string`

### SuiteDefinitionConfiguration
* SuiteDefinitionConfiguration `object`: Gets Suite Definition Configuration.
  * devicePermissionRoleArn
  * devices
    * items [DeviceUnderTest](#deviceundertest)
  * intendedForQualification
  * rootGroup
  * suiteDefinitionName

### SuiteDefinitionInformation
* SuiteDefinitionInformation `object`: Get suite definition information.
  * createdAt
  * defaultDevices
    * items [DeviceUnderTest](#deviceundertest)
  * intendedForQualification
  * suiteDefinitionId
  * suiteDefinitionName

### SuiteDefinitionInformationList
* SuiteDefinitionInformationList `array`
  * items [SuiteDefinitionInformation](#suitedefinitioninformation)

### SuiteDefinitionName
* SuiteDefinitionName `string`

### SuiteDefinitionVersion
* SuiteDefinitionVersion `string`

### SuiteRunConfiguration
* SuiteRunConfiguration `object`: Gets suite run configuration.
  * primaryDevice
    * certificateArn
    * thingArn
  * secondaryDevice
    * certificateArn
    * thingArn
  * selectedTestList
    * items [UUID](#uuid)

### SuiteRunInformation
* SuiteRunInformation `object`: Get suite run information.
  * createdAt
  * endAt
  * failed
  * passed
  * startedAt
  * status
  * suiteDefinitionId
  * suiteDefinitionName
  * suiteDefinitionVersion
  * suiteRunId

### SuiteRunResultCount
* SuiteRunResultCount `integer`

### SuiteRunStatus
* SuiteRunStatus `string` (values: PASS, FAIL, CANCELED, PENDING, RUNNING, PASS_WITH_WARNINGS, ERROR)

### SuiteRunsList
* SuiteRunsList `array`
  * items [SuiteRunInformation](#suiteruninformation)

### TagKeyList
* TagKeyList `array`
  * items [String128](#string128)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TestCase
* TestCase `object`: Shows tests in a test group.
  * configuration
  * name
  * test
    * id
    * testCaseVersion

### TestCaseCategory
* TestCaseCategory `object`: Gets the test case category.
  * name
  * tests
    * items [TestCase](#testcase)

### TestCaseDefinition
* TestCaseDefinition `object`: Provides test case definition.
  * id
  * testCaseVersion

### TestCaseDefinitionName
* TestCaseDefinitionName `string`

### TestCaseList
* TestCaseList `array`
  * items [TestCase](#testcase)

### TestCaseName
* TestCaseName `string`

### TestCaseRun
* TestCaseRun `object`: Provides test case run.
  * endTime
  * failure
  * logUrl
  * startTime
  * status
  * testCaseDefinitionId
  * testCaseDefinitionName
  * testCaseRunId
  * warnings

### TestCaseRuns
* TestCaseRuns `array`: Show each group result.
  * items [TestCaseRun](#testcaserun)

### TestCaseVersion
* TestCaseVersion `string`

### TestCategory
* TestCategory `array`
  * items [TestCaseCategory](#testcasecategory)

### TestConfiguration
* TestConfiguration `object`

### TestResult
* TestResult `object`: Show each group result.
  * groups
    * items [GroupResult](#groupresult)

### Timestamp
* Timestamp `string`

### Token
* Token `string`

### UUID
* UUID `string`

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateSuiteDefinitionRequest
* UpdateSuiteDefinitionRequest `object`
  * suiteDefinitionConfiguration
    * devicePermissionRoleArn
    * devices
      * items [DeviceUnderTest](#deviceundertest)
    * intendedForQualification
    * rootGroup
    * suiteDefinitionName

### UpdateSuiteDefinitionResponse
* UpdateSuiteDefinitionResponse `object`
  * createdAt
  * lastUpdatedAt
  * suiteDefinitionArn
  * suiteDefinitionId
  * suiteDefinitionName
  * suiteDefinitionVersion

### ValidationException


### Warnings
* Warnings `string`


