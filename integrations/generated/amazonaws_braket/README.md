# @datafire/amazonaws_braket

Client library for Braket

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_braket
```
```js
let amazonaws_braket = require('@datafire/amazonaws_braket').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Amazon Braket API Reference provides information about the operations and structures supported in Amazon Braket.

## Actions

### GetDevice



```js
amazonaws_braket.GetDevice({
  "deviceArn": ""
}, context)
```

#### Input
* input `object`
  * deviceArn **required** `string`

#### Output
* output [GetDeviceResponse](#getdeviceresponse)

### SearchDevices



```js
amazonaws_braket.SearchDevices({
  "filters": []
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters **required** `array`: The filter values to use to search for a device.
    * items [SearchDevicesFilter](#searchdevicesfilter)
  * maxResults `integer`: The maximum number of results to return in the response.
  * nextToken `string`: A token used for pagination of results returned in the response. Use the token returned from the previous request continue results where the previous request ended.

#### Output
* output [SearchDevicesResponse](#searchdevicesresponse)

### CreateQuantumTask



```js
amazonaws_braket.CreateQuantumTask({
  "action": "",
  "clientToken": "",
  "deviceArn": "",
  "outputS3Bucket": "",
  "outputS3KeyPrefix": "",
  "shots": 0
}, context)
```

#### Input
* input `object`
  * tags `object`: Tags to be added to the quantum task you're creating.
  * action **required** `string`: The action associated with the task.
  * clientToken **required** `string`: The client token associated with the request.
  * deviceArn **required** `string`: The ARN of the device to run the task on.
  * deviceParameters `string`: The parameters for the device to run the task on.
  * outputS3Bucket **required** `string`: The S3 bucket to store task result files in.
  * outputS3KeyPrefix **required** `string`: The key prefix for the location in the S3 bucket to store task results in.
  * shots **required** `integer`: The number of shots to use for the task.

#### Output
*Output schema unknown*

### GetQuantumTask



```js
amazonaws_braket.GetQuantumTask({
  "quantumTaskArn": ""
}, context)
```

#### Input
* input `object`
  * quantumTaskArn **required** `string`

#### Output
* output [GetQuantumTaskResponse](#getquantumtaskresponse)

### CancelQuantumTask



```js
amazonaws_braket.CancelQuantumTask({
  "quantumTaskArn": "",
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * quantumTaskArn **required** `string`
  * clientToken **required** `string`: The client token associated with the request.

#### Output
* output [CancelQuantumTaskResponse](#cancelquantumtaskresponse)

### SearchQuantumTasks



```js
amazonaws_braket.SearchQuantumTasks({
  "filters": []
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters **required** `array`: Array of <code>SearchQuantumTasksFilter</code> objects.
    * items [SearchQuantumTasksFilter](#searchquantumtasksfilter)
  * maxResults `integer`: Maximum number of results to return in the response.
  * nextToken `string`: A token used for pagination of results returned in the response. Use the token returned from the previous request continue results where the previous request ended.

#### Output
* output [SearchQuantumTasksResponse](#searchquantumtasksresponse)

### ListTagsForResource



```js
amazonaws_braket.ListTagsForResource({
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
amazonaws_braket.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: Specify the tags to add to the resource.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_braket.UntagResource({
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

### AccessDeniedException


### CancelQuantumTaskRequest
* CancelQuantumTaskRequest `object`
  * clientToken **required**

### CancelQuantumTaskResponse
* CancelQuantumTaskResponse `object`
  * cancellationStatus **required**
  * quantumTaskArn **required**

### CancellationStatus
* CancellationStatus `string` (values: CANCELLING, CANCELLED)

### ConflictException


### CreateQuantumTaskRequest
* CreateQuantumTaskRequest `object`
  * tags
  * action **required**
  * clientToken **required**
  * deviceArn **required**
  * deviceParameters
  * outputS3Bucket **required**
  * outputS3KeyPrefix **required**
  * shots **required**

### CreateQuantumTaskRequestDeviceParametersString
* CreateQuantumTaskRequestDeviceParametersString `string`

### CreateQuantumTaskRequestOutputS3BucketString
* CreateQuantumTaskRequestOutputS3BucketString `string`

### CreateQuantumTaskRequestOutputS3KeyPrefixString
* CreateQuantumTaskRequestOutputS3KeyPrefixString `string`

### CreateQuantumTaskRequestShotsLong
* CreateQuantumTaskRequestShotsLong `integer`

### CreateQuantumTaskResponse
* CreateQuantumTaskResponse `object`
  * quantumTaskArn **required**

### DeviceArn
* DeviceArn `string`

### DeviceOfflineException


### DeviceStatus
* DeviceStatus `string` (values: ONLINE, OFFLINE)

### DeviceSummary
* DeviceSummary `object`: Includes information about the device.
  * deviceArn **required**
  * deviceName **required**
  * deviceStatus **required**
  * deviceType **required**
  * providerName **required**

### DeviceSummaryList
* DeviceSummaryList `array`
  * items [DeviceSummary](#devicesummary)

### DeviceType
* DeviceType `string` (values: QPU, SIMULATOR)

### GetDeviceRequest
* GetDeviceRequest `object`

### GetDeviceResponse
* GetDeviceResponse `object`
  * deviceArn **required**
  * deviceCapabilities **required**
  * deviceName **required**
  * deviceStatus **required**
  * deviceType **required**
  * providerName **required**

### GetQuantumTaskRequest
* GetQuantumTaskRequest `object`

### GetQuantumTaskResponse
* GetQuantumTaskResponse `object`
  * tags
  * createdAt **required**
  * deviceArn **required**
  * deviceParameters **required**
  * endedAt
  * failureReason
  * outputS3Bucket **required**
  * outputS3Directory **required**
  * quantumTaskArn **required**
  * shots **required**
  * status **required**

### InternalServiceException


### JsonValue
* JsonValue `string`

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### Long
* Long `integer`

### QuantumTaskArn
* QuantumTaskArn `string`

### QuantumTaskStatus
* QuantumTaskStatus `string` (values: CREATED, QUEUED, RUNNING, COMPLETED, FAILED, CANCELLING, CANCELLED)

### QuantumTaskSummary
* QuantumTaskSummary `object`: Includes information about a quantum task.
  * tags
  * createdAt **required**
  * deviceArn **required**
  * endedAt
  * outputS3Bucket **required**
  * outputS3Directory **required**
  * quantumTaskArn **required**
  * shots **required**
  * status **required**

### QuantumTaskSummaryList
* QuantumTaskSummaryList `array`
  * items [QuantumTaskSummary](#quantumtasksummary)

### ResourceNotFoundException


### SearchDevicesFilter
* SearchDevicesFilter `object`: The filter to use for searching devices.
  * name **required**
  * values **required**
    * items [String256](#string256)

### SearchDevicesFilterNameString
* SearchDevicesFilterNameString `string`

### SearchDevicesFilterValuesList
* SearchDevicesFilterValuesList `array`
  * items [String256](#string256)

### SearchDevicesRequest
* SearchDevicesRequest `object`
  * filters **required**
    * items [SearchDevicesFilter](#searchdevicesfilter)
  * maxResults
  * nextToken

### SearchDevicesRequestFiltersList
* SearchDevicesRequestFiltersList `array`
  * items [SearchDevicesFilter](#searchdevicesfilter)

### SearchDevicesRequestMaxResultsInteger
* SearchDevicesRequestMaxResultsInteger `integer`

### SearchDevicesResponse
* SearchDevicesResponse `object`
  * devices **required**
    * items [DeviceSummary](#devicesummary)
  * nextToken

### SearchQuantumTasksFilter
* SearchQuantumTasksFilter `object`: A filter to use to search for tasks.
  * name **required**
  * operator **required**
  * values **required**
    * items [String256](#string256)

### SearchQuantumTasksFilterOperator
* SearchQuantumTasksFilterOperator `string` (values: LT, LTE, EQUAL, GT, GTE, BETWEEN)

### SearchQuantumTasksFilterValuesList
* SearchQuantumTasksFilterValuesList `array`
  * items [String256](#string256)

### SearchQuantumTasksRequest
* SearchQuantumTasksRequest `object`
  * filters **required**
    * items [SearchQuantumTasksFilter](#searchquantumtasksfilter)
  * maxResults
  * nextToken

### SearchQuantumTasksRequestFiltersList
* SearchQuantumTasksRequestFiltersList `array`
  * items [SearchQuantumTasksFilter](#searchquantumtasksfilter)

### SearchQuantumTasksRequestMaxResultsInteger
* SearchQuantumTasksRequestMaxResultsInteger `integer`

### SearchQuantumTasksResponse
* SearchQuantumTasksResponse `object`
  * nextToken
  * quantumTasks **required**
    * items [QuantumTaskSummary](#quantumtasksummary)

### ServiceQuotaExceededException


### String
* String `string`

### String256
* String256 `string`

### String64
* String64 `string`

### SyntheticTimestamp_date_time
* SyntheticTimestamp_date_time `string`

### TagKeys
* TagKeys `array`
  * items [String](#string)

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagsMap
* TagsMap `object`

### ThrottlingException


### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### ValidationException



