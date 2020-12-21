# @datafire/amazonaws_cognito_sync

Client library for Amazon Cognito Sync

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_cognito_sync
```
```js
let amazonaws_cognito_sync = require('@datafire/amazonaws_cognito_sync').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Cognito Sync</fullname> <p>Amazon Cognito Sync provides an AWS service and client library that enable cross-device syncing of application-related user data. High-level client libraries are available for both iOS and Android. You can use these libraries to persist data locally so that it's available even if the device is offline. Developer credentials don't need to be stored on the mobile device to access the service. You can use Amazon Cognito to obtain a normalized user ID and credentials. User data is persisted in a dataset that can store up to 1 MB of key-value pairs, and you can have up to 20 datasets per user identity.</p> <p>With Amazon Cognito Sync, the data stored for each identity is accessible only to credentials assigned to that identity. In order to use the Cognito Sync service, you need to make API calls using credentials retrieved with <a href="http://docs.aws.amazon.com/cognitoidentity/latest/APIReference/Welcome.html">Amazon Cognito Identity service</a>.</p> <p>If you want to use Cognito Sync in an Android or iOS application, you will probably want to make API calls via the AWS Mobile SDK. To learn more, see the <a href="http://docs.aws.amazon.com/mobile/sdkforandroid/developerguide/cognito-sync.html">Developer Guide for Android</a> and the <a href="http://docs.aws.amazon.com/mobile/sdkforios/developerguide/cognito-sync.html">Developer Guide for iOS</a>.</p>

## Actions

### ListIdentityPoolUsage



```js
amazonaws_cognito_sync.ListIdentityPoolUsage({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListIdentityPoolUsageResponse](#listidentitypoolusageresponse)

### DescribeIdentityPoolUsage



```js
amazonaws_cognito_sync.DescribeIdentityPoolUsage({
  "IdentityPoolId": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`

#### Output
* output [DescribeIdentityPoolUsageResponse](#describeidentitypoolusageresponse)

### BulkPublish



```js
amazonaws_cognito_sync.BulkPublish({
  "IdentityPoolId": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`

#### Output
* output [BulkPublishResponse](#bulkpublishresponse)

### GetIdentityPoolConfiguration



```js
amazonaws_cognito_sync.GetIdentityPoolConfiguration({
  "IdentityPoolId": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`

#### Output
* output [GetIdentityPoolConfigurationResponse](#getidentitypoolconfigurationresponse)

### SetIdentityPoolConfiguration



```js
amazonaws_cognito_sync.SetIdentityPoolConfiguration({
  "IdentityPoolId": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`
  * CognitoStreams `object`: Configuration options for configure Cognito streams.
    * RoleArn
    * StreamName
    * StreamingStatus
  * PushSync `object`: Configuration options to be applied to the identity pool.
    * ApplicationArns
      * items [ApplicationArn](#applicationarn)
    * RoleArn

#### Output
* output [SetIdentityPoolConfigurationResponse](#setidentitypoolconfigurationresponse)

### GetCognitoEvents



```js
amazonaws_cognito_sync.GetCognitoEvents({
  "IdentityPoolId": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`

#### Output
* output [GetCognitoEventsResponse](#getcognitoeventsresponse)

### SetCognitoEvents



```js
amazonaws_cognito_sync.SetCognitoEvents({
  "IdentityPoolId": "",
  "Events": {}
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`
  * Events **required** `object`: The events to configure

#### Output
*Output schema unknown*

### GetBulkPublishDetails



```js
amazonaws_cognito_sync.GetBulkPublishDetails({
  "IdentityPoolId": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`

#### Output
* output [GetBulkPublishDetailsResponse](#getbulkpublishdetailsresponse)

### DescribeIdentityUsage



```js
amazonaws_cognito_sync.DescribeIdentityUsage({
  "IdentityPoolId": "",
  "IdentityId": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`
  * IdentityId **required** `string`

#### Output
* output [DescribeIdentityUsageResponse](#describeidentityusageresponse)

### ListDatasets



```js
amazonaws_cognito_sync.ListDatasets({
  "IdentityPoolId": "",
  "IdentityId": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`
  * IdentityId **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListDatasetsResponse](#listdatasetsresponse)

### DeleteDataset



```js
amazonaws_cognito_sync.DeleteDataset({
  "IdentityPoolId": "",
  "IdentityId": "",
  "DatasetName": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`
  * IdentityId **required** `string`
  * DatasetName **required** `string`

#### Output
* output [DeleteDatasetResponse](#deletedatasetresponse)

### DescribeDataset



```js
amazonaws_cognito_sync.DescribeDataset({
  "IdentityPoolId": "",
  "IdentityId": "",
  "DatasetName": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`
  * IdentityId **required** `string`
  * DatasetName **required** `string`

#### Output
* output [DescribeDatasetResponse](#describedatasetresponse)

### UpdateRecords



```js
amazonaws_cognito_sync.UpdateRecords({
  "IdentityPoolId": "",
  "IdentityId": "",
  "DatasetName": "",
  "SyncSessionToken": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`
  * IdentityId **required** `string`
  * DatasetName **required** `string`
  * x-amz-Client-Context `string`
  * DeviceId `string`: The unique ID generated for this device by Cognito.
  * RecordPatches `array`: A list of patch operations.
    * items [RecordPatch](#recordpatch)
  * SyncSessionToken **required** `string`: The SyncSessionToken returned by a previous call to ListRecords for this dataset and identity.

#### Output
* output [UpdateRecordsResponse](#updaterecordsresponse)

### ListRecords



```js
amazonaws_cognito_sync.ListRecords({
  "IdentityPoolId": "",
  "IdentityId": "",
  "DatasetName": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`
  * IdentityId **required** `string`
  * DatasetName **required** `string`
  * lastSyncCount `integer`
  * nextToken `string`
  * maxResults `integer`
  * syncSessionToken `string`

#### Output
* output [ListRecordsResponse](#listrecordsresponse)

### UnsubscribeFromDataset



```js
amazonaws_cognito_sync.UnsubscribeFromDataset({
  "IdentityPoolId": "",
  "IdentityId": "",
  "DatasetName": "",
  "DeviceId": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`
  * IdentityId **required** `string`
  * DatasetName **required** `string`
  * DeviceId **required** `string`

#### Output
* output [UnsubscribeFromDatasetResponse](#unsubscribefromdatasetresponse)

### SubscribeToDataset



```js
amazonaws_cognito_sync.SubscribeToDataset({
  "IdentityPoolId": "",
  "IdentityId": "",
  "DatasetName": "",
  "DeviceId": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`
  * IdentityId **required** `string`
  * DatasetName **required** `string`
  * DeviceId **required** `string`

#### Output
* output [SubscribeToDatasetResponse](#subscribetodatasetresponse)

### RegisterDevice



```js
amazonaws_cognito_sync.RegisterDevice({
  "IdentityPoolId": "",
  "IdentityId": "",
  "Platform": "",
  "Token": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`
  * IdentityId **required** `string`
  * Platform **required** `string` (values: APNS, APNS_SANDBOX, GCM, ADM): The SNS platform type (e.g. GCM, SDM, APNS, APNS_SANDBOX).
  * Token **required** `string`: The push token.

#### Output
* output [RegisterDeviceResponse](#registerdeviceresponse)



## Definitions

### AlreadyStreamedException
* AlreadyStreamedException `object`: An exception thrown when a bulk publish operation is requested less than 24 hours after a previous bulk publish operation completed successfully.
  * message **required**

### ApplicationArn
* ApplicationArn `string`

### ApplicationArnList
* ApplicationArnList `array`
  * items [ApplicationArn](#applicationarn)

### AssumeRoleArn
* AssumeRoleArn `string`

### Boolean
* Boolean `boolean`

### BulkPublishRequest
* BulkPublishRequest `object`: The input for the BulkPublish operation.

### BulkPublishResponse
* BulkPublishResponse `object`: The output for the BulkPublish operation.
  * IdentityPoolId

### BulkPublishStatus
* BulkPublishStatus `string` (values: NOT_STARTED, IN_PROGRESS, FAILED, SUCCEEDED)

### ClientContext
* ClientContext `string`

### CognitoEventType
* CognitoEventType `string`

### CognitoStreams
* CognitoStreams `object`: Configuration options for configure Cognito streams.
  * RoleArn
  * StreamName
  * StreamingStatus

### ConcurrentModificationException
* ConcurrentModificationException `object`: Thrown if there are parallel requests to modify a resource.
  * message **required**

### Dataset
* Dataset `object`: A collection of data for an identity pool. An identity pool can have multiple datasets. A dataset is per identity and can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs.
  * CreationDate
  * DataStorage
  * DatasetName
  * IdentityId
  * LastModifiedBy
  * LastModifiedDate
  * NumRecords

### DatasetList
* DatasetList `array`
  * items [Dataset](#dataset)

### DatasetName
* DatasetName `string`

### Date
* Date `string`

### DeleteDatasetRequest
* DeleteDatasetRequest `object`: A request to delete the specific dataset.

### DeleteDatasetResponse
* DeleteDatasetResponse `object`: Response to a successful DeleteDataset request.
  * Dataset
    * CreationDate
    * DataStorage
    * DatasetName
    * IdentityId
    * LastModifiedBy
    * LastModifiedDate
    * NumRecords

### DescribeDatasetRequest
* DescribeDatasetRequest `object`: A request for meta data about a dataset (creation date, number of records, size) by owner and dataset name.

### DescribeDatasetResponse
* DescribeDatasetResponse `object`: Response to a successful DescribeDataset request.
  * Dataset
    * CreationDate
    * DataStorage
    * DatasetName
    * IdentityId
    * LastModifiedBy
    * LastModifiedDate
    * NumRecords

### DescribeIdentityPoolUsageRequest
* DescribeIdentityPoolUsageRequest `object`: A request for usage information about the identity pool.

### DescribeIdentityPoolUsageResponse
* DescribeIdentityPoolUsageResponse `object`: Response to a successful DescribeIdentityPoolUsage request.
  * IdentityPoolUsage
    * DataStorage
    * IdentityPoolId
    * LastModifiedDate
    * SyncSessionsCount

### DescribeIdentityUsageRequest
* DescribeIdentityUsageRequest `object`: A request for information about the usage of an identity pool.

### DescribeIdentityUsageResponse
* DescribeIdentityUsageResponse `object`: The response to a successful DescribeIdentityUsage request.
  * IdentityUsage
    * DataStorage
    * DatasetCount
    * IdentityId
    * IdentityPoolId
    * LastModifiedDate

### DeviceId
* DeviceId `string`

### DuplicateRequestException
* DuplicateRequestException `object`: An exception thrown when there is an IN_PROGRESS bulk publish operation for the given identity pool.
  * message **required**

### Events
* Events `object`

### ExceptionMessage
* ExceptionMessage `string`

### GetBulkPublishDetailsRequest
* GetBulkPublishDetailsRequest `object`: The input for the GetBulkPublishDetails operation.

### GetBulkPublishDetailsResponse
* GetBulkPublishDetailsResponse `object`: The output for the GetBulkPublishDetails operation.
  * BulkPublishCompleteTime
  * BulkPublishStartTime
  * BulkPublishStatus
  * FailureMessage
  * IdentityPoolId

### GetCognitoEventsRequest
* GetCognitoEventsRequest `object`: A request for a list of the configured Cognito Events

### GetCognitoEventsResponse
* GetCognitoEventsResponse `object`: The response from the GetCognitoEvents request
  * Events

### GetIdentityPoolConfigurationRequest
* GetIdentityPoolConfigurationRequest `object`: The input for the GetIdentityPoolConfiguration operation.

### GetIdentityPoolConfigurationResponse
* GetIdentityPoolConfigurationResponse `object`: The output for the GetIdentityPoolConfiguration operation.
  * CognitoStreams
    * RoleArn
    * StreamName
    * StreamingStatus
  * IdentityPoolId
  * PushSync
    * ApplicationArns
      * items [ApplicationArn](#applicationarn)
    * RoleArn

### IdentityId
* IdentityId `string`

### IdentityPoolId
* IdentityPoolId `string`

### IdentityPoolUsage
* IdentityPoolUsage `object`: Usage information for the identity pool.
  * DataStorage
  * IdentityPoolId
  * LastModifiedDate
  * SyncSessionsCount

### IdentityPoolUsageList
* IdentityPoolUsageList `array`
  * items [IdentityPoolUsage](#identitypoolusage)

### IdentityUsage
* IdentityUsage `object`: Usage information for the identity.
  * DataStorage
  * DatasetCount
  * IdentityId
  * IdentityPoolId
  * LastModifiedDate

### Integer
* Integer `integer`

### IntegerString
* IntegerString `integer`

### InternalErrorException
* InternalErrorException `object`: Indicates an internal service error.
  * message **required**

### InvalidConfigurationException
* InvalidConfigurationException `object`
  * message **required**

### InvalidLambdaFunctionOutputException
* InvalidLambdaFunctionOutputException `object`: The AWS Lambda function returned invalid output or an exception.
  * message **required**

### InvalidParameterException
* InvalidParameterException `object`: Thrown when a request parameter does not comply with the associated constraints.
  * message **required**

### LambdaFunctionArn
* LambdaFunctionArn `string`

### LambdaThrottledException
* LambdaThrottledException `object`: AWS Lambda throttled your account, please contact AWS Support
  * message **required**

### LimitExceededException
* LimitExceededException `object`: Thrown when the limit on the number of objects or operations has been exceeded.
  * message **required**

### ListDatasetsRequest
* ListDatasetsRequest `object`: Request for a list of datasets for an identity.

### ListDatasetsResponse
* ListDatasetsResponse `object`: Returned for a successful ListDatasets request.
  * Count
  * Datasets
    * items [Dataset](#dataset)
  * NextToken

### ListIdentityPoolUsageRequest
* ListIdentityPoolUsageRequest `object`: A request for usage information on an identity pool.

### ListIdentityPoolUsageResponse
* ListIdentityPoolUsageResponse `object`: Returned for a successful ListIdentityPoolUsage request.
  * Count
  * IdentityPoolUsages
    * items [IdentityPoolUsage](#identitypoolusage)
  * MaxResults
  * NextToken

### ListRecordsRequest
* ListRecordsRequest `object`: A request for a list of records.

### ListRecordsResponse
* ListRecordsResponse `object`: Returned for a successful ListRecordsRequest.
  * Count
  * DatasetDeletedAfterRequestedSyncCount
  * DatasetExists
  * DatasetSyncCount
  * LastModifiedBy
  * MergedDatasetNames
    * items [String](#string)
  * NextToken
  * Records
    * items [Record](#record)
  * SyncSessionToken

### Long
* Long `integer`

### MergedDatasetNameList
* MergedDatasetNameList `array`
  * items [String](#string)

### NotAuthorizedException
* NotAuthorizedException `object`: Thrown when a user is not authorized to access the requested resource.
  * message **required**

### Operation
* Operation `string` (values: replace, remove)

### Platform
* Platform `string` (values: APNS, APNS_SANDBOX, GCM, ADM)

### PushSync
* PushSync `object`: Configuration options to be applied to the identity pool.
  * ApplicationArns
    * items [ApplicationArn](#applicationarn)
  * RoleArn

### PushToken
* PushToken `string`

### Record
* Record `object`: The basic data structure of a dataset.
  * DeviceLastModifiedDate
  * Key
  * LastModifiedBy
  * LastModifiedDate
  * SyncCount
  * Value

### RecordKey
* RecordKey `string`

### RecordList
* RecordList `array`
  * items [Record](#record)

### RecordPatch
* RecordPatch `object`: An update operation for a record.
  * DeviceLastModifiedDate
  * Key **required**
  * Op **required**
  * SyncCount **required**
  * Value

### RecordPatchList
* RecordPatchList `array`
  * items [RecordPatch](#recordpatch)

### RecordValue
* RecordValue `string`

### RegisterDeviceRequest
* RegisterDeviceRequest `object`: A request to RegisterDevice.
  * Platform **required**
  * Token **required**

### RegisterDeviceResponse
* RegisterDeviceResponse `object`: Response to a RegisterDevice request.
  * DeviceId

### ResourceConflictException
* ResourceConflictException `object`: Thrown if an update can't be applied because the resource was changed by another call and this would result in a conflict.
  * message **required**

### ResourceNotFoundException
* ResourceNotFoundException `object`: Thrown if the resource doesn't exist.
  * message **required**

### SetCognitoEventsRequest
* SetCognitoEventsRequest `object`: <p>A request to configure Cognito Events"</p>"
  * Events **required**

### SetIdentityPoolConfigurationRequest
* SetIdentityPoolConfigurationRequest `object`: The input for the SetIdentityPoolConfiguration operation.
  * CognitoStreams
    * RoleArn
    * StreamName
    * StreamingStatus
  * PushSync
    * ApplicationArns
      * items [ApplicationArn](#applicationarn)
    * RoleArn

### SetIdentityPoolConfigurationResponse
* SetIdentityPoolConfigurationResponse `object`: The output for the SetIdentityPoolConfiguration operation
  * CognitoStreams
    * RoleArn
    * StreamName
    * StreamingStatus
  * IdentityPoolId
  * PushSync
    * ApplicationArns
      * items [ApplicationArn](#applicationarn)
    * RoleArn

### StreamName
* StreamName `string`

### StreamingStatus
* StreamingStatus `string` (values: ENABLED, DISABLED)

### String
* String `string`

### SubscribeToDatasetRequest
* SubscribeToDatasetRequest `object`: A request to SubscribeToDatasetRequest.

### SubscribeToDatasetResponse
* SubscribeToDatasetResponse `object`: Response to a SubscribeToDataset request.

### SyncSessionToken
* SyncSessionToken `string`

### TooManyRequestsException
* TooManyRequestsException `object`: Thrown if the request is throttled.
  * message **required**

### UnsubscribeFromDatasetRequest
* UnsubscribeFromDatasetRequest `object`: A request to UnsubscribeFromDataset.

### UnsubscribeFromDatasetResponse
* UnsubscribeFromDatasetResponse `object`: Response to an UnsubscribeFromDataset request.

### UpdateRecordsRequest
* UpdateRecordsRequest `object`: A request to post updates to records or add and delete records for a dataset and user.
  * DeviceId
  * RecordPatches
    * items [RecordPatch](#recordpatch)
  * SyncSessionToken **required**

### UpdateRecordsResponse
* UpdateRecordsResponse `object`: Returned for a successful UpdateRecordsRequest.
  * Records
    * items [Record](#record)


