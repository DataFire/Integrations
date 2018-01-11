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

amazonaws_cognito_sync.ListIdentityPoolUsage({}).then(data => {
  console.log(data);
})
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

### SetIdentityPoolConfiguration



```js
amazonaws_cognito_sync.SetIdentityPoolConfiguration({
  "IdentityPoolId": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`
  * CognitoStreams [CognitoStreams](#cognitostreams)
  * PushSync [PushSync](#pushsync)

#### Output
* output [SetIdentityPoolConfigurationResponse](#setidentitypoolconfigurationresponse)

### SetCognitoEvents



```js
amazonaws_cognito_sync.SetCognitoEvents({
  "IdentityPoolId": "",
  "Events": []
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** `string`
  * Events **required** [Events](#events)

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

#### Output
* output [ListDatasetsResponse](#listdatasetsresponse)

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
  * DeviceId [DeviceId](#deviceid)
  * RecordPatches [RecordPatchList](#recordpatchlist)
  * SyncSessionToken **required** [SyncSessionToken](#syncsessiontoken)

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
  * Platform **required** [Platform](#platform)
  * Token **required** [PushToken](#pushtoken)

#### Output
* output [RegisterDeviceResponse](#registerdeviceresponse)



## Definitions

### AlreadyStreamedException
* AlreadyStreamedException `object`: An exception thrown when a bulk publish operation is requested less than 24 hours after a previous bulk publish operation completed successfully.
  * message **required** [ExceptionMessage](#exceptionmessage)

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
  * IdentityPoolId [IdentityPoolId](#identitypoolid)

### BulkPublishStatus
* BulkPublishStatus `string` (values: NOT_STARTED, IN_PROGRESS, FAILED, SUCCEEDED)

### ClientContext
* ClientContext `string`

### CognitoEventType
* CognitoEventType `string`

### CognitoStreams
* CognitoStreams `object`: Configuration options for configure Cognito streams.
  * RoleArn [AssumeRoleArn](#assumerolearn)
  * StreamName [StreamName](#streamname)
  * StreamingStatus [StreamingStatus](#streamingstatus)

### ConcurrentModificationException
* ConcurrentModificationException `object`: Thrown if there are parallel requests to modify a resource.
  * message **required** [String](#string)

### Dataset
* Dataset `object`: A collection of data for an identity pool. An identity pool can have multiple datasets. A dataset is per identity and can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs.
  * CreationDate [Date](#date)
  * DataStorage [Long](#long)
  * DatasetName [DatasetName](#datasetname)
  * IdentityId [IdentityId](#identityid)
  * LastModifiedBy [String](#string)
  * LastModifiedDate [Date](#date)
  * NumRecords [Long](#long)

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
  * Dataset [Dataset](#dataset)

### DescribeDatasetRequest
* DescribeDatasetRequest `object`: A request for meta data about a dataset (creation date, number of records, size) by owner and dataset name.

### DescribeDatasetResponse
* DescribeDatasetResponse `object`: Response to a successful DescribeDataset request.
  * Dataset [Dataset](#dataset)

### DescribeIdentityPoolUsageRequest
* DescribeIdentityPoolUsageRequest `object`: A request for usage information about the identity pool.

### DescribeIdentityPoolUsageResponse
* DescribeIdentityPoolUsageResponse `object`: Response to a successful DescribeIdentityPoolUsage request.
  * IdentityPoolUsage [IdentityPoolUsage](#identitypoolusage)

### DescribeIdentityUsageRequest
* DescribeIdentityUsageRequest `object`: A request for information about the usage of an identity pool.

### DescribeIdentityUsageResponse
* DescribeIdentityUsageResponse `object`: The response to a successful DescribeIdentityUsage request.
  * IdentityUsage [IdentityUsage](#identityusage)

### DeviceId
* DeviceId `string`

### DuplicateRequestException
* DuplicateRequestException `object`: An exception thrown when there is an IN_PROGRESS bulk publish operation for the given identity pool.
  * message **required** [ExceptionMessage](#exceptionmessage)

### Events
* Events `array`
  * items `object`
    * key [CognitoEventType](#cognitoeventtype)
    * value [LambdaFunctionArn](#lambdafunctionarn)

### ExceptionMessage
* ExceptionMessage `string`

### GetBulkPublishDetailsRequest
* GetBulkPublishDetailsRequest `object`: The input for the GetBulkPublishDetails operation.

### GetBulkPublishDetailsResponse
* GetBulkPublishDetailsResponse `object`: The output for the GetBulkPublishDetails operation.
  * BulkPublishCompleteTime [Date](#date)
  * BulkPublishStartTime [Date](#date)
  * BulkPublishStatus [BulkPublishStatus](#bulkpublishstatus)
  * FailureMessage [String](#string)
  * IdentityPoolId [IdentityPoolId](#identitypoolid)

### GetCognitoEventsRequest
* GetCognitoEventsRequest `object`: A request for a list of the configured Cognito Events

### GetCognitoEventsResponse
* GetCognitoEventsResponse `object`: The response from the GetCognitoEvents request
  * Events [Events](#events)

### GetIdentityPoolConfigurationRequest
* GetIdentityPoolConfigurationRequest `object`: The input for the GetIdentityPoolConfiguration operation.

### GetIdentityPoolConfigurationResponse
* GetIdentityPoolConfigurationResponse `object`: The output for the GetIdentityPoolConfiguration operation.
  * CognitoStreams [CognitoStreams](#cognitostreams)
  * IdentityPoolId [IdentityPoolId](#identitypoolid)
  * PushSync [PushSync](#pushsync)

### IdentityId
* IdentityId `string`

### IdentityPoolId
* IdentityPoolId `string`

### IdentityPoolUsage
* IdentityPoolUsage `object`: Usage information for the identity pool.
  * DataStorage [Long](#long)
  * IdentityPoolId [IdentityPoolId](#identitypoolid)
  * LastModifiedDate [Date](#date)
  * SyncSessionsCount [Long](#long)

### IdentityPoolUsageList
* IdentityPoolUsageList `array`
  * items [IdentityPoolUsage](#identitypoolusage)

### IdentityUsage
* IdentityUsage `object`: Usage information for the identity.
  * DataStorage [Long](#long)
  * DatasetCount [Integer](#integer)
  * IdentityId [IdentityId](#identityid)
  * IdentityPoolId [IdentityPoolId](#identitypoolid)
  * LastModifiedDate [Date](#date)

### Integer
* Integer `integer`

### IntegerString
* IntegerString `integer`

### InternalErrorException
* InternalErrorException `object`: Indicates an internal service error.
  * message **required** [ExceptionMessage](#exceptionmessage)

### InvalidConfigurationException
* InvalidConfigurationException `object`
  * message **required** [ExceptionMessage](#exceptionmessage)

### InvalidLambdaFunctionOutputException
* InvalidLambdaFunctionOutputException `object`: The AWS Lambda function returned invalid output or an exception.
  * message **required** [ExceptionMessage](#exceptionmessage)

### InvalidParameterException
* InvalidParameterException `object`: Thrown when a request parameter does not comply with the associated constraints.
  * message **required** [ExceptionMessage](#exceptionmessage)

### LambdaFunctionArn
* LambdaFunctionArn `string`

### LambdaThrottledException
* LambdaThrottledException `object`: AWS Lambda throttled your account, please contact AWS Support
  * message **required** [ExceptionMessage](#exceptionmessage)

### LimitExceededException
* LimitExceededException `object`: Thrown when the limit on the number of objects or operations has been exceeded.
  * message **required** [ExceptionMessage](#exceptionmessage)

### ListDatasetsRequest
* ListDatasetsRequest `object`: Request for a list of datasets for an identity.

### ListDatasetsResponse
* ListDatasetsResponse `object`: Returned for a successful ListDatasets request.
  * Count [Integer](#integer)
  * Datasets [DatasetList](#datasetlist)
  * NextToken [String](#string)

### ListIdentityPoolUsageRequest
* ListIdentityPoolUsageRequest `object`: A request for usage information on an identity pool.

### ListIdentityPoolUsageResponse
* ListIdentityPoolUsageResponse `object`: Returned for a successful ListIdentityPoolUsage request.
  * Count [Integer](#integer)
  * IdentityPoolUsages [IdentityPoolUsageList](#identitypoolusagelist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

### ListRecordsRequest
* ListRecordsRequest `object`: A request for a list of records.

### ListRecordsResponse
* ListRecordsResponse `object`: Returned for a successful ListRecordsRequest.
  * Count [Integer](#integer)
  * DatasetDeletedAfterRequestedSyncCount [Boolean](#boolean)
  * DatasetExists [Boolean](#boolean)
  * DatasetSyncCount [Long](#long)
  * LastModifiedBy [String](#string)
  * MergedDatasetNames [MergedDatasetNameList](#mergeddatasetnamelist)
  * NextToken [String](#string)
  * Records [RecordList](#recordlist)
  * SyncSessionToken [String](#string)

### Long
* Long `integer`

### MergedDatasetNameList
* MergedDatasetNameList `array`
  * items [String](#string)

### NotAuthorizedException
* NotAuthorizedException `object`: Thrown when a user is not authorized to access the requested resource.
  * message **required** [ExceptionMessage](#exceptionmessage)

### Operation
* Operation `string` (values: replace, remove)

### Platform
* Platform `string` (values: APNS, APNS_SANDBOX, GCM, ADM)

### PushSync
* PushSync `object`: Configuration options to be applied to the identity pool.
  * ApplicationArns [ApplicationArnList](#applicationarnlist)
  * RoleArn [AssumeRoleArn](#assumerolearn)

### PushToken
* PushToken `string`

### Record
* Record `object`: The basic data structure of a dataset.
  * DeviceLastModifiedDate [Date](#date)
  * Key [RecordKey](#recordkey)
  * LastModifiedBy [String](#string)
  * LastModifiedDate [Date](#date)
  * SyncCount [Long](#long)
  * Value [RecordValue](#recordvalue)

### RecordKey
* RecordKey `string`

### RecordList
* RecordList `array`
  * items [Record](#record)

### RecordPatch
* RecordPatch `object`: An update operation for a record.
  * DeviceLastModifiedDate [Date](#date)
  * Key **required** [RecordKey](#recordkey)
  * Op **required** [Operation](#operation)
  * SyncCount **required** [Long](#long)
  * Value [RecordValue](#recordvalue)

### RecordPatchList
* RecordPatchList `array`
  * items [RecordPatch](#recordpatch)

### RecordValue
* RecordValue `string`

### RegisterDeviceRequest
* RegisterDeviceRequest `object`: A request to RegisterDevice.
  * Platform **required** [Platform](#platform)
  * Token **required** [PushToken](#pushtoken)

### RegisterDeviceResponse
* RegisterDeviceResponse `object`: Response to a RegisterDevice request.
  * DeviceId [DeviceId](#deviceid)

### ResourceConflictException
* ResourceConflictException `object`: Thrown if an update can't be applied because the resource was changed by another call and this would result in a conflict.
  * message **required** [ExceptionMessage](#exceptionmessage)

### ResourceNotFoundException
* ResourceNotFoundException `object`: Thrown if the resource doesn't exist.
  * message **required** [ExceptionMessage](#exceptionmessage)

### SetCognitoEventsRequest
* SetCognitoEventsRequest `object`: <p>A request to configure Cognito Events"</p>"
  * Events **required** [Events](#events)

### SetIdentityPoolConfigurationRequest
* SetIdentityPoolConfigurationRequest `object`: The input for the SetIdentityPoolConfiguration operation.
  * CognitoStreams [CognitoStreams](#cognitostreams)
  * PushSync [PushSync](#pushsync)

### SetIdentityPoolConfigurationResponse
* SetIdentityPoolConfigurationResponse `object`: The output for the SetIdentityPoolConfiguration operation
  * CognitoStreams [CognitoStreams](#cognitostreams)
  * IdentityPoolId [IdentityPoolId](#identitypoolid)
  * PushSync [PushSync](#pushsync)

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
  * message **required** [ExceptionMessage](#exceptionmessage)

### UnsubscribeFromDatasetRequest
* UnsubscribeFromDatasetRequest `object`: A request to UnsubscribeFromDataset.

### UnsubscribeFromDatasetResponse
* UnsubscribeFromDatasetResponse `object`: Response to an UnsubscribeFromDataset request.

### UpdateRecordsRequest
* UpdateRecordsRequest `object`: A request to post updates to records or add and delete records for a dataset and user.
  * DeviceId [DeviceId](#deviceid)
  * RecordPatches [RecordPatchList](#recordpatchlist)
  * SyncSessionToken **required** [SyncSessionToken](#syncsessiontoken)

### UpdateRecordsResponse
* UpdateRecordsResponse `object`: Returned for a successful UpdateRecordsRequest.
  * Records [RecordList](#recordlist)


