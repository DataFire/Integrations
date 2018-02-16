# @datafire/amazonaws_devicefarm

Client library for AWS Device Farm

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_devicefarm
```
```js
let amazonaws_devicefarm = require('@datafire/amazonaws_devicefarm').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_devicefarm.CreateDevicePool({
  "projectArn": "",
  "name": "",
  "rules": []
}).then(data => {
  console.log(data);
});
```

## Description

AWS Device Farm is a service that enables mobile app developers to test Android, iOS, and Fire OS apps on physical phones, tablets, and other devices in the cloud.

## Actions

### CreateDevicePool



```js
amazonaws_devicefarm.CreateDevicePool({
  "projectArn": "",
  "name": "",
  "rules": []
}, context)
```

#### Input
* input `object`
  * description [Message](#message)
  * name **required** [Name](#name)
  * projectArn **required** [AmazonResourceName](#amazonresourcename)
  * rules **required** [Rules](#rules)

#### Output
* output [CreateDevicePoolResult](#createdevicepoolresult)

### CreateNetworkProfile



```js
amazonaws_devicefarm.CreateNetworkProfile({
  "projectArn": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * description [Message](#message)
  * downlinkBandwidthBits [Long](#long)
  * downlinkDelayMs [Long](#long)
  * downlinkJitterMs [Long](#long)
  * downlinkLossPercent [PercentInteger](#percentinteger)
  * name **required** [Name](#name)
  * projectArn **required** [AmazonResourceName](#amazonresourcename)
  * type [NetworkProfileType](#networkprofiletype)
  * uplinkBandwidthBits [Long](#long)
  * uplinkDelayMs [Long](#long)
  * uplinkJitterMs [Long](#long)
  * uplinkLossPercent [PercentInteger](#percentinteger)

#### Output
* output [CreateNetworkProfileResult](#createnetworkprofileresult)

### CreateProject



```js
amazonaws_devicefarm.CreateProject({
  "name": ""
}, context)
```

#### Input
* input `object`
  * defaultJobTimeoutMinutes [JobTimeoutMinutes](#jobtimeoutminutes)
  * name **required** [Name](#name)

#### Output
* output [CreateProjectResult](#createprojectresult)

### CreateRemoteAccessSession



```js
amazonaws_devicefarm.CreateRemoteAccessSession({
  "projectArn": "",
  "deviceArn": ""
}, context)
```

#### Input
* input `object`
  * clientId [ClientId](#clientid)
  * configuration [CreateRemoteAccessSessionConfiguration](#createremoteaccesssessionconfiguration)
  * deviceArn **required** [AmazonResourceName](#amazonresourcename)
  * interactionMode [InteractionMode](#interactionmode)
  * name [Name](#name)
  * projectArn **required** [AmazonResourceName](#amazonresourcename)
  * remoteDebugEnabled [Boolean](#boolean)
  * remoteRecordAppArn [AmazonResourceName](#amazonresourcename)
  * remoteRecordEnabled [Boolean](#boolean)
  * sshPublicKey [SshPublicKey](#sshpublickey)

#### Output
* output [CreateRemoteAccessSessionResult](#createremoteaccesssessionresult)

### CreateUpload



```js
amazonaws_devicefarm.CreateUpload({
  "projectArn": "",
  "name": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * contentType [ContentType](#contenttype)
  * name **required** [Name](#name)
  * projectArn **required** [AmazonResourceName](#amazonresourcename)
  * type **required** [UploadType](#uploadtype)

#### Output
* output [CreateUploadResult](#createuploadresult)

### DeleteDevicePool



```js
amazonaws_devicefarm.DeleteDevicePool({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [DeleteDevicePoolResult](#deletedevicepoolresult)

### DeleteNetworkProfile



```js
amazonaws_devicefarm.DeleteNetworkProfile({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [DeleteNetworkProfileResult](#deletenetworkprofileresult)

### DeleteProject



```js
amazonaws_devicefarm.DeleteProject({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [DeleteProjectResult](#deleteprojectresult)

### DeleteRemoteAccessSession



```js
amazonaws_devicefarm.DeleteRemoteAccessSession({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [DeleteRemoteAccessSessionResult](#deleteremoteaccesssessionresult)

### DeleteRun



```js
amazonaws_devicefarm.DeleteRun({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [DeleteRunResult](#deleterunresult)

### DeleteUpload



```js
amazonaws_devicefarm.DeleteUpload({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [DeleteUploadResult](#deleteuploadresult)

### GetAccountSettings



```js
amazonaws_devicefarm.GetAccountSettings({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAccountSettingsResult](#getaccountsettingsresult)

### GetDevice



```js
amazonaws_devicefarm.GetDevice({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [GetDeviceResult](#getdeviceresult)

### GetDevicePool



```js
amazonaws_devicefarm.GetDevicePool({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [GetDevicePoolResult](#getdevicepoolresult)

### GetDevicePoolCompatibility



```js
amazonaws_devicefarm.GetDevicePoolCompatibility({
  "devicePoolArn": ""
}, context)
```

#### Input
* input `object`
  * appArn [AmazonResourceName](#amazonresourcename)
  * devicePoolArn **required** [AmazonResourceName](#amazonresourcename)
  * test [ScheduleRunTest](#scheduleruntest)
  * testType [TestType](#testtype)

#### Output
* output [GetDevicePoolCompatibilityResult](#getdevicepoolcompatibilityresult)

### GetJob



```js
amazonaws_devicefarm.GetJob({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [GetJobResult](#getjobresult)

### GetNetworkProfile



```js
amazonaws_devicefarm.GetNetworkProfile({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [GetNetworkProfileResult](#getnetworkprofileresult)

### GetOfferingStatus



```js
amazonaws_devicefarm.GetOfferingStatus({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [GetOfferingStatusResult](#getofferingstatusresult)

### GetProject



```js
amazonaws_devicefarm.GetProject({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [GetProjectResult](#getprojectresult)

### GetRemoteAccessSession



```js
amazonaws_devicefarm.GetRemoteAccessSession({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [GetRemoteAccessSessionResult](#getremoteaccesssessionresult)

### GetRun



```js
amazonaws_devicefarm.GetRun({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [GetRunResult](#getrunresult)

### GetSuite



```js
amazonaws_devicefarm.GetSuite({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [GetSuiteResult](#getsuiteresult)

### GetTest



```js
amazonaws_devicefarm.GetTest({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [GetTestResult](#gettestresult)

### GetUpload



```js
amazonaws_devicefarm.GetUpload({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [GetUploadResult](#getuploadresult)

### InstallToRemoteAccessSession



```js
amazonaws_devicefarm.InstallToRemoteAccessSession({
  "remoteAccessSessionArn": "",
  "appArn": ""
}, context)
```

#### Input
* input `object`
  * appArn **required** [AmazonResourceName](#amazonresourcename)
  * remoteAccessSessionArn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [InstallToRemoteAccessSessionResult](#installtoremoteaccesssessionresult)

### ListArtifacts



```js
amazonaws_devicefarm.ListArtifacts({
  "arn": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)
  * type **required** [ArtifactCategory](#artifactcategory)

#### Output
* output [ListArtifactsResult](#listartifactsresult)

### ListDevicePools



```js
amazonaws_devicefarm.ListDevicePools({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)
  * type [DevicePoolType](#devicepooltype)

#### Output
* output [ListDevicePoolsResult](#listdevicepoolsresult)

### ListDevices



```js
amazonaws_devicefarm.ListDevices({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListDevicesResult](#listdevicesresult)

### ListJobs



```js
amazonaws_devicefarm.ListJobs({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListJobsResult](#listjobsresult)

### ListNetworkProfiles



```js
amazonaws_devicefarm.ListNetworkProfiles({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)
  * type [NetworkProfileType](#networkprofiletype)

#### Output
* output [ListNetworkProfilesResult](#listnetworkprofilesresult)

### ListOfferingPromotions



```js
amazonaws_devicefarm.ListOfferingPromotions({}, context)
```

#### Input
* input `object`
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListOfferingPromotionsResult](#listofferingpromotionsresult)

### ListOfferingTransactions



```js
amazonaws_devicefarm.ListOfferingTransactions({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListOfferingTransactionsResult](#listofferingtransactionsresult)

### ListOfferings



```js
amazonaws_devicefarm.ListOfferings({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListOfferingsResult](#listofferingsresult)

### ListProjects



```js
amazonaws_devicefarm.ListProjects({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListProjectsResult](#listprojectsresult)

### ListRemoteAccessSessions



```js
amazonaws_devicefarm.ListRemoteAccessSessions({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListRemoteAccessSessionsResult](#listremoteaccesssessionsresult)

### ListRuns



```js
amazonaws_devicefarm.ListRuns({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListRunsResult](#listrunsresult)

### ListSamples



```js
amazonaws_devicefarm.ListSamples({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListSamplesResult](#listsamplesresult)

### ListSuites



```js
amazonaws_devicefarm.ListSuites({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListSuitesResult](#listsuitesresult)

### ListTests



```js
amazonaws_devicefarm.ListTests({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListTestsResult](#listtestsresult)

### ListUniqueProblems



```js
amazonaws_devicefarm.ListUniqueProblems({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListUniqueProblemsResult](#listuniqueproblemsresult)

### ListUploads



```js
amazonaws_devicefarm.ListUploads({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListUploadsResult](#listuploadsresult)

### PurchaseOffering



```js
amazonaws_devicefarm.PurchaseOffering({}, context)
```

#### Input
* input `object`
  * offeringId [OfferingIdentifier](#offeringidentifier)
  * offeringPromotionId [OfferingPromotionIdentifier](#offeringpromotionidentifier)
  * quantity [Integer](#integer)

#### Output
* output [PurchaseOfferingResult](#purchaseofferingresult)

### RenewOffering



```js
amazonaws_devicefarm.RenewOffering({}, context)
```

#### Input
* input `object`
  * offeringId [OfferingIdentifier](#offeringidentifier)
  * quantity [Integer](#integer)

#### Output
* output [RenewOfferingResult](#renewofferingresult)

### ScheduleRun



```js
amazonaws_devicefarm.ScheduleRun({
  "projectArn": "",
  "devicePoolArn": "",
  "test": {
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * appArn [AmazonResourceName](#amazonresourcename)
  * configuration [ScheduleRunConfiguration](#schedulerunconfiguration)
  * devicePoolArn **required** [AmazonResourceName](#amazonresourcename)
  * executionConfiguration [ExecutionConfiguration](#executionconfiguration)
  * name [Name](#name)
  * projectArn **required** [AmazonResourceName](#amazonresourcename)
  * test **required** [ScheduleRunTest](#scheduleruntest)

#### Output
* output [ScheduleRunResult](#schedulerunresult)

### StopRemoteAccessSession



```js
amazonaws_devicefarm.StopRemoteAccessSession({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [StopRemoteAccessSessionResult](#stopremoteaccesssessionresult)

### StopRun



```js
amazonaws_devicefarm.StopRun({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

#### Output
* output [StopRunResult](#stoprunresult)

### UpdateDevicePool



```js
amazonaws_devicefarm.UpdateDevicePool({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * description [Message](#message)
  * name [Name](#name)
  * rules [Rules](#rules)

#### Output
* output [UpdateDevicePoolResult](#updatedevicepoolresult)

### UpdateNetworkProfile



```js
amazonaws_devicefarm.UpdateNetworkProfile({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * description [Message](#message)
  * downlinkBandwidthBits [Long](#long)
  * downlinkDelayMs [Long](#long)
  * downlinkJitterMs [Long](#long)
  * downlinkLossPercent [PercentInteger](#percentinteger)
  * name [Name](#name)
  * type [NetworkProfileType](#networkprofiletype)
  * uplinkBandwidthBits [Long](#long)
  * uplinkDelayMs [Long](#long)
  * uplinkJitterMs [Long](#long)
  * uplinkLossPercent [PercentInteger](#percentinteger)

#### Output
* output [UpdateNetworkProfileResult](#updatenetworkprofileresult)

### UpdateProject



```js
amazonaws_devicefarm.UpdateProject({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * defaultJobTimeoutMinutes [JobTimeoutMinutes](#jobtimeoutminutes)
  * name [Name](#name)

#### Output
* output [UpdateProjectResult](#updateprojectresult)



## Definitions

### AWSAccountNumber
* AWSAccountNumber `string`

### AccountSettings
* AccountSettings `object`: A container for account-level settings within AWS Device Farm.
  * awsAccountNumber [AWSAccountNumber](#awsaccountnumber)
  * defaultJobTimeoutMinutes [JobTimeoutMinutes](#jobtimeoutminutes)
  * maxJobTimeoutMinutes [JobTimeoutMinutes](#jobtimeoutminutes)
  * maxSlots [MaxSlotMap](#maxslotmap)
  * trialMinutes [TrialMinutes](#trialminutes)
  * unmeteredDevices [PurchasedDevicesMap](#purchaseddevicesmap)
  * unmeteredRemoteAccessDevices [PurchasedDevicesMap](#purchaseddevicesmap)

### AccountsCleanup
* AccountsCleanup `boolean`

### AmazonResourceName
* AmazonResourceName `string`

### AmazonResourceNames
* AmazonResourceNames `array`
  * items [AmazonResourceName](#amazonresourcename)

### AndroidPaths
* AndroidPaths `array`
  * items [String](#string)

### AppPackagesCleanup
* AppPackagesCleanup `boolean`

### ArgumentException
* ArgumentException `object`: An invalid argument was specified.
  * message [Message](#message)

### Artifact
* Artifact `object`: Represents the output of a test. Examples of artifacts include logs and screenshots.
  * arn [AmazonResourceName](#amazonresourcename)
  * extension [String](#string)
  * name [Name](#name)
  * type [ArtifactType](#artifacttype)
  * url [URL](#url)

### ArtifactCategory
* ArtifactCategory `string` (values: SCREENSHOT, FILE, LOG)

### ArtifactType
* ArtifactType `string` (values: UNKNOWN, SCREENSHOT, DEVICE_LOG, MESSAGE_LOG, VIDEO_LOG, RESULT_LOG, SERVICE_LOG, WEBKIT_LOG, INSTRUMENTATION_OUTPUT, EXERCISER_MONKEY_OUTPUT, CALABASH_JSON_OUTPUT, CALABASH_PRETTY_OUTPUT, CALABASH_STANDARD_OUTPUT, CALABASH_JAVA_XML_OUTPUT, AUTOMATION_OUTPUT, APPIUM_SERVER_OUTPUT, APPIUM_JAVA_OUTPUT, APPIUM_JAVA_XML_OUTPUT, APPIUM_PYTHON_OUTPUT, APPIUM_PYTHON_XML_OUTPUT, EXPLORER_EVENT_LOG, EXPLORER_SUMMARY_LOG, APPLICATION_CRASH_REPORT, XCTEST_LOG, VIDEO, CUSTOMER_ARTIFACT, CUSTOMER_ARTIFACT_LOG)

### Artifacts
* Artifacts `array`
  * items [Artifact](#artifact)

### BillingMethod
* BillingMethod `string` (values: METERED, UNMETERED)

### Boolean
* Boolean `boolean`

### CPU
* CPU `object`: <p>Represents the amount of CPU that an app is using on a physical device.</p> <p>Note that this does not represent system-wide CPU usage.</p>
  * architecture [String](#string)
  * clock [Double](#double)
  * frequency [String](#string)

### ClientId
* ClientId `string`

### ContentType
* ContentType `string`

### Counters
* Counters `object`: Represents entity counters.
  * errored [Integer](#integer)
  * failed [Integer](#integer)
  * passed [Integer](#integer)
  * skipped [Integer](#integer)
  * stopped [Integer](#integer)
  * total [Integer](#integer)
  * warned [Integer](#integer)

### CreateDevicePoolRequest
* CreateDevicePoolRequest `object`: Represents a request to the create device pool operation.
  * description [Message](#message)
  * name **required** [Name](#name)
  * projectArn **required** [AmazonResourceName](#amazonresourcename)
  * rules **required** [Rules](#rules)

### CreateDevicePoolResult
* CreateDevicePoolResult `object`: Represents the result of a create device pool request.
  * devicePool [DevicePool](#devicepool)

### CreateNetworkProfileRequest
* CreateNetworkProfileRequest `object`
  * description [Message](#message)
  * downlinkBandwidthBits [Long](#long)
  * downlinkDelayMs [Long](#long)
  * downlinkJitterMs [Long](#long)
  * downlinkLossPercent [PercentInteger](#percentinteger)
  * name **required** [Name](#name)
  * projectArn **required** [AmazonResourceName](#amazonresourcename)
  * type [NetworkProfileType](#networkprofiletype)
  * uplinkBandwidthBits [Long](#long)
  * uplinkDelayMs [Long](#long)
  * uplinkJitterMs [Long](#long)
  * uplinkLossPercent [PercentInteger](#percentinteger)

### CreateNetworkProfileResult
* CreateNetworkProfileResult `object`
  * networkProfile [NetworkProfile](#networkprofile)

### CreateProjectRequest
* CreateProjectRequest `object`: Represents a request to the create project operation.
  * defaultJobTimeoutMinutes [JobTimeoutMinutes](#jobtimeoutminutes)
  * name **required** [Name](#name)

### CreateProjectResult
* CreateProjectResult `object`: Represents the result of a create project request.
  * project [Project](#project)

### CreateRemoteAccessSessionConfiguration
* CreateRemoteAccessSessionConfiguration `object`: Creates the configuration settings for a remote access session, including the device model and type.
  * billingMethod [BillingMethod](#billingmethod)

### CreateRemoteAccessSessionRequest
* CreateRemoteAccessSessionRequest `object`: Creates and submits a request to start a remote access session.
  * clientId [ClientId](#clientid)
  * configuration [CreateRemoteAccessSessionConfiguration](#createremoteaccesssessionconfiguration)
  * deviceArn **required** [AmazonResourceName](#amazonresourcename)
  * interactionMode [InteractionMode](#interactionmode)
  * name [Name](#name)
  * projectArn **required** [AmazonResourceName](#amazonresourcename)
  * remoteDebugEnabled [Boolean](#boolean)
  * remoteRecordAppArn [AmazonResourceName](#amazonresourcename)
  * remoteRecordEnabled [Boolean](#boolean)
  * sshPublicKey [SshPublicKey](#sshpublickey)

### CreateRemoteAccessSessionResult
* CreateRemoteAccessSessionResult `object`: Represents the server response from a request to create a remote access session.
  * remoteAccessSession [RemoteAccessSession](#remoteaccesssession)

### CreateUploadRequest
* CreateUploadRequest `object`: Represents a request to the create upload operation.
  * contentType [ContentType](#contenttype)
  * name **required** [Name](#name)
  * projectArn **required** [AmazonResourceName](#amazonresourcename)
  * type **required** [UploadType](#uploadtype)

### CreateUploadResult
* CreateUploadResult `object`: Represents the result of a create upload request.
  * upload [Upload](#upload)

### CurrencyCode
* CurrencyCode `string` (values: USD)

### CustomerArtifactPaths
* CustomerArtifactPaths `object`: <p>A JSON object specifying the paths where the artifacts generated by the customer's tests, on the device or in the test environment, will be pulled from.</p> <p>Specify <code>deviceHostPaths</code> and optionally specify either <code>iosPaths</code> or <code>androidPaths</code>.</p> <p>For web app tests, you can specify both <code>iosPaths</code> and <code>androidPaths</code>.</p>
  * androidPaths [AndroidPaths](#androidpaths)
  * deviceHostPaths [DeviceHostPaths](#devicehostpaths)
  * iosPaths [IosPaths](#iospaths)

### DateTime
* DateTime `string`

### DeleteDevicePoolRequest
* DeleteDevicePoolRequest `object`: Represents a request to the delete device pool operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)

### DeleteDevicePoolResult
* DeleteDevicePoolResult `object`: Represents the result of a delete device pool request.

### DeleteNetworkProfileRequest
* DeleteNetworkProfileRequest `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

### DeleteNetworkProfileResult
* DeleteNetworkProfileResult `object`

### DeleteProjectRequest
* DeleteProjectRequest `object`: Represents a request to the delete project operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)

### DeleteProjectResult
* DeleteProjectResult `object`: Represents the result of a delete project request.

### DeleteRemoteAccessSessionRequest
* DeleteRemoteAccessSessionRequest `object`: Represents the request to delete the specified remote access session.
  * arn **required** [AmazonResourceName](#amazonresourcename)

### DeleteRemoteAccessSessionResult
* DeleteRemoteAccessSessionResult `object`: The response from the server when a request is made to delete the remote access session.

### DeleteRunRequest
* DeleteRunRequest `object`: Represents a request to the delete run operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)

### DeleteRunResult
* DeleteRunResult `object`: Represents the result of a delete run request.

### DeleteUploadRequest
* DeleteUploadRequest `object`: Represents a request to the delete upload operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)

### DeleteUploadResult
* DeleteUploadResult `object`: Represents the result of a delete upload request.

### Device
* Device `object`: Represents a device type that an app is tested against.
  * arn [AmazonResourceName](#amazonresourcename)
  * carrier [String](#string)
  * cpu [CPU](#cpu)
  * fleetName [String](#string)
  * fleetType [String](#string)
  * formFactor [DeviceFormFactor](#deviceformfactor)
  * heapSize [Long](#long)
  * image [String](#string)
  * manufacturer [String](#string)
  * memory [Long](#long)
  * model [String](#string)
  * modelId [String](#string)
  * name [Name](#name)
  * os [String](#string)
  * platform [DevicePlatform](#deviceplatform)
  * radio [String](#string)
  * remoteAccessEnabled [Boolean](#boolean)
  * remoteDebugEnabled [Boolean](#boolean)
  * resolution [Resolution](#resolution)

### DeviceAttribute
* DeviceAttribute `string` (values: ARN, PLATFORM, FORM_FACTOR, MANUFACTURER, REMOTE_ACCESS_ENABLED, REMOTE_DEBUG_ENABLED, APPIUM_VERSION)

### DeviceFormFactor
* DeviceFormFactor `string` (values: PHONE, TABLET)

### DeviceHostPaths
* DeviceHostPaths `array`
  * items [String](#string)

### DeviceMinutes
* DeviceMinutes `object`: Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children.
  * metered [Double](#double)
  * total [Double](#double)
  * unmetered [Double](#double)

### DevicePlatform
* DevicePlatform `string` (values: ANDROID, IOS)

### DevicePool
* DevicePool `object`: Represents a collection of device types.
  * arn [AmazonResourceName](#amazonresourcename)
  * description [Message](#message)
  * name [Name](#name)
  * rules [Rules](#rules)
  * type [DevicePoolType](#devicepooltype)

### DevicePoolCompatibilityResult
* DevicePoolCompatibilityResult `object`: Represents a device pool compatibility result.
  * compatible [Boolean](#boolean)
  * device [Device](#device)
  * incompatibilityMessages [IncompatibilityMessages](#incompatibilitymessages)

### DevicePoolCompatibilityResults
* DevicePoolCompatibilityResults `array`
  * items [DevicePoolCompatibilityResult](#devicepoolcompatibilityresult)

### DevicePoolType
* DevicePoolType `string` (values: CURATED, PRIVATE)

### DevicePools
* DevicePools `array`
  * items [DevicePool](#devicepool)

### Devices
* Devices `array`
  * items [Device](#device)

### Double
* Double `number`

### ExecutionConfiguration
* ExecutionConfiguration `object`: Represents configuration information about a test run, such as the execution timeout (in minutes).
  * accountsCleanup [AccountsCleanup](#accountscleanup)
  * appPackagesCleanup [AppPackagesCleanup](#apppackagescleanup)
  * jobTimeoutMinutes [JobTimeoutMinutes](#jobtimeoutminutes)

### ExecutionResult
* ExecutionResult `string` (values: PENDING, PASSED, WARNED, FAILED, SKIPPED, ERRORED, STOPPED)

### ExecutionResultCode
* ExecutionResultCode `string` (values: PARSING_FAILED)

### ExecutionStatus
* ExecutionStatus `string` (values: PENDING, PENDING_CONCURRENCY, PENDING_DEVICE, PROCESSING, SCHEDULING, PREPARING, RUNNING, COMPLETED, STOPPING)

### Filter
* Filter `string`

### GetAccountSettingsRequest
* GetAccountSettingsRequest `object`: Represents the request sent to retrieve the account settings.

### GetAccountSettingsResult
* GetAccountSettingsResult `object`: Represents the account settings return values from the <code>GetAccountSettings</code> request.
  * accountSettings [AccountSettings](#accountsettings)

### GetDevicePoolCompatibilityRequest
* GetDevicePoolCompatibilityRequest `object`: Represents a request to the get device pool compatibility operation.
  * appArn [AmazonResourceName](#amazonresourcename)
  * devicePoolArn **required** [AmazonResourceName](#amazonresourcename)
  * test [ScheduleRunTest](#scheduleruntest)
  * testType [TestType](#testtype)

### GetDevicePoolCompatibilityResult
* GetDevicePoolCompatibilityResult `object`: Represents the result of describe device pool compatibility request.
  * compatibleDevices [DevicePoolCompatibilityResults](#devicepoolcompatibilityresults)
  * incompatibleDevices [DevicePoolCompatibilityResults](#devicepoolcompatibilityresults)

### GetDevicePoolRequest
* GetDevicePoolRequest `object`: Represents a request to the get device pool operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)

### GetDevicePoolResult
* GetDevicePoolResult `object`: Represents the result of a get device pool request.
  * devicePool [DevicePool](#devicepool)

### GetDeviceRequest
* GetDeviceRequest `object`: Represents a request to the get device request.
  * arn **required** [AmazonResourceName](#amazonresourcename)

### GetDeviceResult
* GetDeviceResult `object`: Represents the result of a get device request.
  * device [Device](#device)

### GetJobRequest
* GetJobRequest `object`: Represents a request to the get job operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)

### GetJobResult
* GetJobResult `object`: Represents the result of a get job request.
  * job [Job](#job)

### GetNetworkProfileRequest
* GetNetworkProfileRequest `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)

### GetNetworkProfileResult
* GetNetworkProfileResult `object`
  * networkProfile [NetworkProfile](#networkprofile)

### GetOfferingStatusRequest
* GetOfferingStatusRequest `object`: Represents the request to retrieve the offering status for the specified customer or account.
  * nextToken [PaginationToken](#paginationtoken)

### GetOfferingStatusResult
* GetOfferingStatusResult `object`: Returns the status result for a device offering.
  * current [OfferingStatusMap](#offeringstatusmap)
  * nextPeriod [OfferingStatusMap](#offeringstatusmap)
  * nextToken [PaginationToken](#paginationtoken)

### GetProjectRequest
* GetProjectRequest `object`: Represents a request to the get project operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)

### GetProjectResult
* GetProjectResult `object`: Represents the result of a get project request.
  * project [Project](#project)

### GetRemoteAccessSessionRequest
* GetRemoteAccessSessionRequest `object`: Represents the request to get information about the specified remote access session.
  * arn **required** [AmazonResourceName](#amazonresourcename)

### GetRemoteAccessSessionResult
* GetRemoteAccessSessionResult `object`: Represents the response from the server that lists detailed information about the remote access session.
  * remoteAccessSession [RemoteAccessSession](#remoteaccesssession)

### GetRunRequest
* GetRunRequest `object`: Represents a request to the get run operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)

### GetRunResult
* GetRunResult `object`: Represents the result of a get run request.
  * run [Run](#run)

### GetSuiteRequest
* GetSuiteRequest `object`: Represents a request to the get suite operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)

### GetSuiteResult
* GetSuiteResult `object`: Represents the result of a get suite request.
  * suite [Suite](#suite)

### GetTestRequest
* GetTestRequest `object`: Represents a request to the get test operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)

### GetTestResult
* GetTestResult `object`: Represents the result of a get test request.
  * test [Test](#test)

### GetUploadRequest
* GetUploadRequest `object`: Represents a request to the get upload operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)

### GetUploadResult
* GetUploadResult `object`: Represents the result of a get upload request.
  * upload [Upload](#upload)

### HostAddress
* HostAddress `string`

### IdempotencyException
* IdempotencyException `object`: An entity with the same name already exists.
  * message [Message](#message)

### IncompatibilityMessage
* IncompatibilityMessage `object`: Represents information about incompatibility.
  * message [Message](#message)
  * type [DeviceAttribute](#deviceattribute)

### IncompatibilityMessages
* IncompatibilityMessages `array`
  * items [IncompatibilityMessage](#incompatibilitymessage)

### InstallToRemoteAccessSessionRequest
* InstallToRemoteAccessSessionRequest `object`: Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session.
  * appArn **required** [AmazonResourceName](#amazonresourcename)
  * remoteAccessSessionArn **required** [AmazonResourceName](#amazonresourcename)

### InstallToRemoteAccessSessionResult
* InstallToRemoteAccessSessionResult `object`: Represents the response from the server after AWS Device Farm makes a request to install to a remote access session.
  * appUpload [Upload](#upload)

### Integer
* Integer `integer`

### InteractionMode
* InteractionMode `string` (values: INTERACTIVE, NO_VIDEO, VIDEO_ONLY)

### IosPaths
* IosPaths `array`
  * items [String](#string)

### Job
* Job `object`: Represents a device.
  * arn [AmazonResourceName](#amazonresourcename)
  * counters [Counters](#counters)
  * created [DateTime](#datetime)
  * device [Device](#device)
  * deviceMinutes [DeviceMinutes](#deviceminutes)
  * message [Message](#message)
  * name [Name](#name)
  * result [ExecutionResult](#executionresult)
  * started [DateTime](#datetime)
  * status [ExecutionStatus](#executionstatus)
  * stopped [DateTime](#datetime)
  * type [TestType](#testtype)

### JobTimeoutMinutes
* JobTimeoutMinutes `integer`

### Jobs
* Jobs `array`
  * items [Job](#job)

### LimitExceededException
* LimitExceededException `object`: A limit was exceeded.
  * message [Message](#message)

### ListArtifactsRequest
* ListArtifactsRequest `object`: Represents a request to the list artifacts operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)
  * type **required** [ArtifactCategory](#artifactcategory)

### ListArtifactsResult
* ListArtifactsResult `object`: Represents the result of a list artifacts operation.
  * artifacts [Artifacts](#artifacts)
  * nextToken [PaginationToken](#paginationtoken)

### ListDevicePoolsRequest
* ListDevicePoolsRequest `object`: Represents the result of a list device pools request.
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)
  * type [DevicePoolType](#devicepooltype)

### ListDevicePoolsResult
* ListDevicePoolsResult `object`: Represents the result of a list device pools request.
  * devicePools [DevicePools](#devicepools)
  * nextToken [PaginationToken](#paginationtoken)

### ListDevicesRequest
* ListDevicesRequest `object`: Represents the result of a list devices request.
  * arn [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

### ListDevicesResult
* ListDevicesResult `object`: Represents the result of a list devices operation.
  * devices [Devices](#devices)
  * nextToken [PaginationToken](#paginationtoken)

### ListJobsRequest
* ListJobsRequest `object`: Represents a request to the list jobs operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

### ListJobsResult
* ListJobsResult `object`: Represents the result of a list jobs request.
  * jobs [Jobs](#jobs)
  * nextToken [PaginationToken](#paginationtoken)

### ListNetworkProfilesRequest
* ListNetworkProfilesRequest `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)
  * type [NetworkProfileType](#networkprofiletype)

### ListNetworkProfilesResult
* ListNetworkProfilesResult `object`
  * networkProfiles [NetworkProfiles](#networkprofiles)
  * nextToken [PaginationToken](#paginationtoken)

### ListOfferingPromotionsRequest
* ListOfferingPromotionsRequest `object`
  * nextToken [PaginationToken](#paginationtoken)

### ListOfferingPromotionsResult
* ListOfferingPromotionsResult `object`
  * nextToken [PaginationToken](#paginationtoken)
  * offeringPromotions [OfferingPromotions](#offeringpromotions)

### ListOfferingTransactionsRequest
* ListOfferingTransactionsRequest `object`: Represents the request to list the offering transaction history.
  * nextToken [PaginationToken](#paginationtoken)

### ListOfferingTransactionsResult
* ListOfferingTransactionsResult `object`: Returns the transaction log of the specified offerings.
  * nextToken [PaginationToken](#paginationtoken)
  * offeringTransactions [OfferingTransactions](#offeringtransactions)

### ListOfferingsRequest
* ListOfferingsRequest `object`: Represents the request to list all offerings.
  * nextToken [PaginationToken](#paginationtoken)

### ListOfferingsResult
* ListOfferingsResult `object`: Represents the return values of the list of offerings.
  * nextToken [PaginationToken](#paginationtoken)
  * offerings [Offerings](#offerings)

### ListProjectsRequest
* ListProjectsRequest `object`: Represents a request to the list projects operation.
  * arn [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

### ListProjectsResult
* ListProjectsResult `object`: Represents the result of a list projects request.
  * nextToken [PaginationToken](#paginationtoken)
  * projects [Projects](#projects)

### ListRemoteAccessSessionsRequest
* ListRemoteAccessSessionsRequest `object`: Represents the request to return information about the remote access session.
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

### ListRemoteAccessSessionsResult
* ListRemoteAccessSessionsResult `object`: Represents the response from the server after AWS Device Farm makes a request to return information about the remote access session.
  * nextToken [PaginationToken](#paginationtoken)
  * remoteAccessSessions [RemoteAccessSessions](#remoteaccesssessions)

### ListRunsRequest
* ListRunsRequest `object`: Represents a request to the list runs operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

### ListRunsResult
* ListRunsResult `object`: Represents the result of a list runs request.
  * nextToken [PaginationToken](#paginationtoken)
  * runs [Runs](#runs)

### ListSamplesRequest
* ListSamplesRequest `object`: Represents a request to the list samples operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

### ListSamplesResult
* ListSamplesResult `object`: Represents the result of a list samples request.
  * nextToken [PaginationToken](#paginationtoken)
  * samples [Samples](#samples)

### ListSuitesRequest
* ListSuitesRequest `object`: Represents a request to the list suites operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

### ListSuitesResult
* ListSuitesResult `object`: Represents the result of a list suites request.
  * nextToken [PaginationToken](#paginationtoken)
  * suites [Suites](#suites)

### ListTestsRequest
* ListTestsRequest `object`: Represents a request to the list tests operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

### ListTestsResult
* ListTestsResult `object`: Represents the result of a list tests request.
  * nextToken [PaginationToken](#paginationtoken)
  * tests [Tests](#tests)

### ListUniqueProblemsRequest
* ListUniqueProblemsRequest `object`: Represents a request to the list unique problems operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

### ListUniqueProblemsResult
* ListUniqueProblemsResult `object`: Represents the result of a list unique problems request.
  * nextToken [PaginationToken](#paginationtoken)
  * uniqueProblems [UniqueProblemsByExecutionResultMap](#uniqueproblemsbyexecutionresultmap)

### ListUploadsRequest
* ListUploadsRequest `object`: Represents a request to the list uploads operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * nextToken [PaginationToken](#paginationtoken)

### ListUploadsResult
* ListUploadsResult `object`: Represents the result of a list uploads request.
  * nextToken [PaginationToken](#paginationtoken)
  * uploads [Uploads](#uploads)

### Location
* Location `object`: <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p>
  * latitude **required** [Double](#double)
  * longitude **required** [Double](#double)

### Long
* Long `integer`

### MaxSlotMap
* MaxSlotMap `array`
  * items `object`
    * key [String](#string)
    * value [Integer](#integer)

### Message
* Message `string`

### Metadata
* Metadata `string`

### MonetaryAmount
* MonetaryAmount `object`: A number representing the monetary amount for an offering or transaction.
  * amount [Double](#double)
  * currencyCode [CurrencyCode](#currencycode)

### Name
* Name `string`

### NetworkProfile
* NetworkProfile `object`: An array of settings that describes characteristics of a network profile.
  * arn [AmazonResourceName](#amazonresourcename)
  * description [Message](#message)
  * downlinkBandwidthBits [Long](#long)
  * downlinkDelayMs [Long](#long)
  * downlinkJitterMs [Long](#long)
  * downlinkLossPercent [PercentInteger](#percentinteger)
  * name [Name](#name)
  * type [NetworkProfileType](#networkprofiletype)
  * uplinkBandwidthBits [Long](#long)
  * uplinkDelayMs [Long](#long)
  * uplinkJitterMs [Long](#long)
  * uplinkLossPercent [PercentInteger](#percentinteger)

### NetworkProfileType
* NetworkProfileType `string` (values: CURATED, PRIVATE)

### NetworkProfiles
* NetworkProfiles `array`
  * items [NetworkProfile](#networkprofile)

### NotEligibleException
* NotEligibleException `object`: Exception gets thrown when a user is not eligible to perform the specified transaction.
  * message [Message](#message)

### NotFoundException
* NotFoundException `object`: The specified entity was not found.
  * message [Message](#message)

### Offering
* Offering `object`: Represents the metadata of a device offering.
  * description [Message](#message)
  * id [OfferingIdentifier](#offeringidentifier)
  * platform [DevicePlatform](#deviceplatform)
  * recurringCharges [RecurringCharges](#recurringcharges)
  * type [OfferingType](#offeringtype)

### OfferingIdentifier
* OfferingIdentifier `string`

### OfferingPromotion
* OfferingPromotion `object`: Represents information about an offering promotion.
  * description [Message](#message)
  * id [OfferingPromotionIdentifier](#offeringpromotionidentifier)

### OfferingPromotionIdentifier
* OfferingPromotionIdentifier `string`

### OfferingPromotions
* OfferingPromotions `array`
  * items [OfferingPromotion](#offeringpromotion)

### OfferingStatus
* OfferingStatus `object`: The status of the offering.
  * effectiveOn [DateTime](#datetime)
  * offering [Offering](#offering)
  * quantity [Integer](#integer)
  * type [OfferingTransactionType](#offeringtransactiontype)

### OfferingStatusMap
* OfferingStatusMap `array`
  * items `object`
    * key [OfferingIdentifier](#offeringidentifier)
    * value [OfferingStatus](#offeringstatus)

### OfferingTransaction
* OfferingTransaction `object`: Represents the metadata of an offering transaction.
  * cost [MonetaryAmount](#monetaryamount)
  * createdOn [DateTime](#datetime)
  * offeringPromotionId [OfferingPromotionIdentifier](#offeringpromotionidentifier)
  * offeringStatus [OfferingStatus](#offeringstatus)
  * transactionId [TransactionIdentifier](#transactionidentifier)

### OfferingTransactionType
* OfferingTransactionType `string` (values: PURCHASE, RENEW, SYSTEM)

### OfferingTransactions
* OfferingTransactions `array`
  * items [OfferingTransaction](#offeringtransaction)

### OfferingType
* OfferingType `string` (values: RECURRING)

### Offerings
* Offerings `array`
  * items [Offering](#offering)

### PaginationToken
* PaginationToken `string`

### PercentInteger
* PercentInteger `integer`

### Problem
* Problem `object`: Represents a specific warning or failure.
  * device [Device](#device)
  * job [ProblemDetail](#problemdetail)
  * message [Message](#message)
  * result [ExecutionResult](#executionresult)
  * run [ProblemDetail](#problemdetail)
  * suite [ProblemDetail](#problemdetail)
  * test [ProblemDetail](#problemdetail)

### ProblemDetail
* ProblemDetail `object`: Information about a problem detail.
  * arn [AmazonResourceName](#amazonresourcename)
  * name [Name](#name)

### Problems
* Problems `array`
  * items [Problem](#problem)

### Project
* Project `object`: Represents an operating-system neutral workspace for running and managing tests.
  * arn [AmazonResourceName](#amazonresourcename)
  * created [DateTime](#datetime)
  * defaultJobTimeoutMinutes [JobTimeoutMinutes](#jobtimeoutminutes)
  * name [Name](#name)

### Projects
* Projects `array`
  * items [Project](#project)

### PurchaseOfferingRequest
* PurchaseOfferingRequest `object`: Represents a request for a purchase offering.
  * offeringId [OfferingIdentifier](#offeringidentifier)
  * offeringPromotionId [OfferingPromotionIdentifier](#offeringpromotionidentifier)
  * quantity [Integer](#integer)

### PurchaseOfferingResult
* PurchaseOfferingResult `object`: The result of the purchase offering (e.g., success or failure).
  * offeringTransaction [OfferingTransaction](#offeringtransaction)

### PurchasedDevicesMap
* PurchasedDevicesMap `array`
  * items `object`
    * key [DevicePlatform](#deviceplatform)
    * value [Integer](#integer)

### Radios
* Radios `object`: Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC.
  * bluetooth [Boolean](#boolean)
  * gps [Boolean](#boolean)
  * nfc [Boolean](#boolean)
  * wifi [Boolean](#boolean)

### RecurringCharge
* RecurringCharge `object`: Specifies whether charges for devices will be recurring.
  * cost [MonetaryAmount](#monetaryamount)
  * frequency [RecurringChargeFrequency](#recurringchargefrequency)

### RecurringChargeFrequency
* RecurringChargeFrequency `string` (values: MONTHLY)

### RecurringCharges
* RecurringCharges `array`
  * items [RecurringCharge](#recurringcharge)

### RemoteAccessSession
* RemoteAccessSession `object`: Represents information about the remote access session.
  * arn [AmazonResourceName](#amazonresourcename)
  * billingMethod [BillingMethod](#billingmethod)
  * clientId [ClientId](#clientid)
  * created [DateTime](#datetime)
  * device [Device](#device)
  * deviceMinutes [DeviceMinutes](#deviceminutes)
  * deviceUdid [String](#string)
  * endpoint [String](#string)
  * hostAddress [HostAddress](#hostaddress)
  * interactionMode [InteractionMode](#interactionmode)
  * message [Message](#message)
  * name [Name](#name)
  * remoteDebugEnabled [Boolean](#boolean)
  * remoteRecordAppArn [AmazonResourceName](#amazonresourcename)
  * remoteRecordEnabled [Boolean](#boolean)
  * result [ExecutionResult](#executionresult)
  * started [DateTime](#datetime)
  * status [ExecutionStatus](#executionstatus)
  * stopped [DateTime](#datetime)

### RemoteAccessSessions
* RemoteAccessSessions `array`
  * items [RemoteAccessSession](#remoteaccesssession)

### RenewOfferingRequest
* RenewOfferingRequest `object`: A request representing an offering renewal.
  * offeringId [OfferingIdentifier](#offeringidentifier)
  * quantity [Integer](#integer)

### RenewOfferingResult
* RenewOfferingResult `object`: The result of a renewal offering.
  * offeringTransaction [OfferingTransaction](#offeringtransaction)

### Resolution
* Resolution `object`: Represents the screen resolution of a device in height and width, expressed in pixels.
  * height [Integer](#integer)
  * width [Integer](#integer)

### Rule
* Rule `object`: Represents a condition for a device pool.
  * attribute [DeviceAttribute](#deviceattribute)
  * operator [RuleOperator](#ruleoperator)
  * value [String](#string)

### RuleOperator
* RuleOperator `string` (values: EQUALS, LESS_THAN, GREATER_THAN, IN, NOT_IN, CONTAINS)

### Rules
* Rules `array`
  * items [Rule](#rule)

### Run
* Run `object`: Represents a test run on a set of devices with a given app package, test parameters, etc.
  * appUpload [AmazonResourceName](#amazonresourcename)
  * arn [AmazonResourceName](#amazonresourcename)
  * billingMethod [BillingMethod](#billingmethod)
  * completedJobs [Integer](#integer)
  * counters [Counters](#counters)
  * created [DateTime](#datetime)
  * customerArtifactPaths [CustomerArtifactPaths](#customerartifactpaths)
  * deviceMinutes [DeviceMinutes](#deviceminutes)
  * devicePoolArn [AmazonResourceName](#amazonresourcename)
  * eventCount [Integer](#integer)
  * jobTimeoutMinutes [JobTimeoutMinutes](#jobtimeoutminutes)
  * locale [String](#string)
  * location [Location](#location)
  * message [Message](#message)
  * name [Name](#name)
  * networkProfile [NetworkProfile](#networkprofile)
  * parsingResultUrl [String](#string)
  * platform [DevicePlatform](#deviceplatform)
  * radios [Radios](#radios)
  * result [ExecutionResult](#executionresult)
  * resultCode [ExecutionResultCode](#executionresultcode)
  * seed [Integer](#integer)
  * started [DateTime](#datetime)
  * status [ExecutionStatus](#executionstatus)
  * stopped [DateTime](#datetime)
  * totalJobs [Integer](#integer)
  * type [TestType](#testtype)
  * webUrl [String](#string)

### Runs
* Runs `array`
  * items [Run](#run)

### Sample
* Sample `object`: Represents a sample of performance data.
  * arn [AmazonResourceName](#amazonresourcename)
  * type [SampleType](#sampletype)
  * url [URL](#url)

### SampleType
* SampleType `string` (values: CPU, MEMORY, THREADS, RX_RATE, TX_RATE, RX, TX, NATIVE_FRAMES, NATIVE_FPS, NATIVE_MIN_DRAWTIME, NATIVE_AVG_DRAWTIME, NATIVE_MAX_DRAWTIME, OPENGL_FRAMES, OPENGL_FPS, OPENGL_MIN_DRAWTIME, OPENGL_AVG_DRAWTIME, OPENGL_MAX_DRAWTIME)

### Samples
* Samples `array`
  * items [Sample](#sample)

### ScheduleRunConfiguration
* ScheduleRunConfiguration `object`: Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles.
  * auxiliaryApps [AmazonResourceNames](#amazonresourcenames)
  * billingMethod [BillingMethod](#billingmethod)
  * customerArtifactPaths [CustomerArtifactPaths](#customerartifactpaths)
  * extraDataPackageArn [AmazonResourceName](#amazonresourcename)
  * locale [String](#string)
  * location [Location](#location)
  * networkProfileArn [AmazonResourceName](#amazonresourcename)
  * radios [Radios](#radios)

### ScheduleRunRequest
* ScheduleRunRequest `object`: Represents a request to the schedule run operation.
  * appArn [AmazonResourceName](#amazonresourcename)
  * configuration [ScheduleRunConfiguration](#schedulerunconfiguration)
  * devicePoolArn **required** [AmazonResourceName](#amazonresourcename)
  * executionConfiguration [ExecutionConfiguration](#executionconfiguration)
  * name [Name](#name)
  * projectArn **required** [AmazonResourceName](#amazonresourcename)
  * test **required** [ScheduleRunTest](#scheduleruntest)

### ScheduleRunResult
* ScheduleRunResult `object`: Represents the result of a schedule run request.
  * run [Run](#run)

### ScheduleRunTest
* ScheduleRunTest `object`: Represents additional test settings.
  * filter [Filter](#filter)
  * parameters [TestParameters](#testparameters)
  * testPackageArn [AmazonResourceName](#amazonresourcename)
  * type **required** [TestType](#testtype)

### ServiceAccountException
* ServiceAccountException `object`: There was a problem with the service account.
  * message [Message](#message)

### SshPublicKey
* SshPublicKey `string`

### StopRemoteAccessSessionRequest
* StopRemoteAccessSessionRequest `object`: Represents the request to stop the remote access session.
  * arn **required** [AmazonResourceName](#amazonresourcename)

### StopRemoteAccessSessionResult
* StopRemoteAccessSessionResult `object`: Represents the response from the server that describes the remote access session when AWS Device Farm stops the session.
  * remoteAccessSession [RemoteAccessSession](#remoteaccesssession)

### StopRunRequest
* StopRunRequest `object`: Represents the request to stop a specific run.
  * arn **required** [AmazonResourceName](#amazonresourcename)

### StopRunResult
* StopRunResult `object`: Represents the results of your stop run attempt.
  * run [Run](#run)

### String
* String `string`

### Suite
* Suite `object`: Represents a collection of one or more tests.
  * arn [AmazonResourceName](#amazonresourcename)
  * counters [Counters](#counters)
  * created [DateTime](#datetime)
  * deviceMinutes [DeviceMinutes](#deviceminutes)
  * message [Message](#message)
  * name [Name](#name)
  * result [ExecutionResult](#executionresult)
  * started [DateTime](#datetime)
  * status [ExecutionStatus](#executionstatus)
  * stopped [DateTime](#datetime)
  * type [TestType](#testtype)

### Suites
* Suites `array`
  * items [Suite](#suite)

### Test
* Test `object`: Represents a condition that is evaluated.
  * arn [AmazonResourceName](#amazonresourcename)
  * counters [Counters](#counters)
  * created [DateTime](#datetime)
  * deviceMinutes [DeviceMinutes](#deviceminutes)
  * message [Message](#message)
  * name [Name](#name)
  * result [ExecutionResult](#executionresult)
  * started [DateTime](#datetime)
  * status [ExecutionStatus](#executionstatus)
  * stopped [DateTime](#datetime)
  * type [TestType](#testtype)

### TestParameters
* TestParameters `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### TestType
* TestType `string` (values: BUILTIN_FUZZ, BUILTIN_EXPLORER, WEB_PERFORMANCE_PROFILE, APPIUM_JAVA_JUNIT, APPIUM_JAVA_TESTNG, APPIUM_PYTHON, APPIUM_WEB_JAVA_JUNIT, APPIUM_WEB_JAVA_TESTNG, APPIUM_WEB_PYTHON, CALABASH, INSTRUMENTATION, UIAUTOMATION, UIAUTOMATOR, XCTEST, XCTEST_UI, REMOTE_ACCESS_RECORD, REMOTE_ACCESS_REPLAY)

### Tests
* Tests `array`
  * items [Test](#test)

### TransactionIdentifier
* TransactionIdentifier `string`

### TrialMinutes
* TrialMinutes `object`: Represents information about free trial device minutes for an AWS account.
  * remaining [Double](#double)
  * total [Double](#double)

### URL
* URL `string`

### UniqueProblem
* UniqueProblem `object`: A collection of one or more problems, grouped by their result.
  * message [Message](#message)
  * problems [Problems](#problems)

### UniqueProblems
* UniqueProblems `array`
  * items [UniqueProblem](#uniqueproblem)

### UniqueProblemsByExecutionResultMap
* UniqueProblemsByExecutionResultMap `array`
  * items `object`
    * key [ExecutionResult](#executionresult)
    * value [UniqueProblems](#uniqueproblems)

### UpdateDevicePoolRequest
* UpdateDevicePoolRequest `object`: Represents a request to the update device pool operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * description [Message](#message)
  * name [Name](#name)
  * rules [Rules](#rules)

### UpdateDevicePoolResult
* UpdateDevicePoolResult `object`: Represents the result of an update device pool request.
  * devicePool [DevicePool](#devicepool)

### UpdateNetworkProfileRequest
* UpdateNetworkProfileRequest `object`
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * description [Message](#message)
  * downlinkBandwidthBits [Long](#long)
  * downlinkDelayMs [Long](#long)
  * downlinkJitterMs [Long](#long)
  * downlinkLossPercent [PercentInteger](#percentinteger)
  * name [Name](#name)
  * type [NetworkProfileType](#networkprofiletype)
  * uplinkBandwidthBits [Long](#long)
  * uplinkDelayMs [Long](#long)
  * uplinkJitterMs [Long](#long)
  * uplinkLossPercent [PercentInteger](#percentinteger)

### UpdateNetworkProfileResult
* UpdateNetworkProfileResult `object`
  * networkProfile [NetworkProfile](#networkprofile)

### UpdateProjectRequest
* UpdateProjectRequest `object`: Represents a request to the update project operation.
  * arn **required** [AmazonResourceName](#amazonresourcename)
  * defaultJobTimeoutMinutes [JobTimeoutMinutes](#jobtimeoutminutes)
  * name [Name](#name)

### UpdateProjectResult
* UpdateProjectResult `object`: Represents the result of an update project request.
  * project [Project](#project)

### Upload
* Upload `object`: An app or a set of one or more tests to upload or that have been uploaded.
  * arn [AmazonResourceName](#amazonresourcename)
  * contentType [ContentType](#contenttype)
  * created [DateTime](#datetime)
  * message [Message](#message)
  * metadata [Metadata](#metadata)
  * name [Name](#name)
  * status [UploadStatus](#uploadstatus)
  * type [UploadType](#uploadtype)
  * url [URL](#url)

### UploadStatus
* UploadStatus `string` (values: INITIALIZED, PROCESSING, SUCCEEDED, FAILED)

### UploadType
* UploadType `string` (values: ANDROID_APP, IOS_APP, WEB_APP, EXTERNAL_DATA, APPIUM_JAVA_JUNIT_TEST_PACKAGE, APPIUM_JAVA_TESTNG_TEST_PACKAGE, APPIUM_PYTHON_TEST_PACKAGE, APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE, APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE, APPIUM_WEB_PYTHON_TEST_PACKAGE, CALABASH_TEST_PACKAGE, INSTRUMENTATION_TEST_PACKAGE, UIAUTOMATION_TEST_PACKAGE, UIAUTOMATOR_TEST_PACKAGE, XCTEST_TEST_PACKAGE, XCTEST_UI_TEST_PACKAGE)

### Uploads
* Uploads `array`
  * items [Upload](#upload)


