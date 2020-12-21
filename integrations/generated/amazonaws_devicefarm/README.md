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

.then(data => {
  console.log(data);
});
```

## Description

<p>Welcome to the AWS Device Farm API documentation, which contains APIs for:</p> <ul> <li> <p>Testing on desktop browsers</p> <p> Device Farm makes it possible for you to test your web applications on desktop browsers using Selenium. The APIs for desktop browser testing contain <code>TestGrid</code> in their names. For more information, see <a href="https://docs.aws.amazon.com/devicefarm/latest/testgrid/">Testing Web Applications on Selenium with Device Farm</a>.</p> </li> <li> <p>Testing on real mobile devices</p> <p>Device Farm makes it possible for you to test apps on physical phones, tablets, and other devices in the cloud. For more information, see the <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/">Device Farm Developer Guide</a>.</p> </li> </ul>

## Actions

### CreateDevicePool



```js
amazonaws_devicefarm.CreateDevicePool({
  "projectArn": null,
  "name": null,
  "rules": null
}, context)
```

#### Input
* input `object`
  * description
  * maxDevices
  * name **required**
  * projectArn **required**
  * rules **required**
    * items [Rule](#rule)

#### Output
* output [CreateDevicePoolResult](#createdevicepoolresult)

### CreateInstanceProfile



```js
amazonaws_devicefarm.CreateInstanceProfile({
  "name": null
}, context)
```

#### Input
* input `object`
  * description
  * excludeAppPackagesFromCleanup
    * items [String](#string)
  * name **required**
  * packageCleanup
  * rebootAfterUse

#### Output
* output [CreateInstanceProfileResult](#createinstanceprofileresult)

### CreateNetworkProfile



```js
amazonaws_devicefarm.CreateNetworkProfile({
  "projectArn": null,
  "name": null
}, context)
```

#### Input
* input `object`
  * description
  * downlinkBandwidthBits
  * downlinkDelayMs
  * downlinkJitterMs
  * downlinkLossPercent
  * name **required**
  * projectArn **required**
  * type
  * uplinkBandwidthBits
  * uplinkDelayMs
  * uplinkJitterMs
  * uplinkLossPercent

#### Output
* output [CreateNetworkProfileResult](#createnetworkprofileresult)

### CreateProject



```js
amazonaws_devicefarm.CreateProject({
  "name": null
}, context)
```

#### Input
* input `object`
  * defaultJobTimeoutMinutes
  * name **required**

#### Output
* output [CreateProjectResult](#createprojectresult)

### CreateRemoteAccessSession



```js
amazonaws_devicefarm.CreateRemoteAccessSession({
  "projectArn": null,
  "deviceArn": null
}, context)
```

#### Input
* input `object`
  * clientId
  * configuration
    * billingMethod
    * vpceConfigurationArns
      * items [AmazonResourceName](#amazonresourcename)
  * deviceArn **required**
  * instanceArn
  * interactionMode
  * name
  * projectArn **required**
  * remoteDebugEnabled
  * remoteRecordAppArn
  * remoteRecordEnabled
  * skipAppResign
  * sshPublicKey

#### Output
* output [CreateRemoteAccessSessionResult](#createremoteaccesssessionresult)

### CreateTestGridProject



```js
amazonaws_devicefarm.CreateTestGridProject({
  "name": null
}, context)
```

#### Input
* input `object`
  * description
  * name **required**

#### Output
* output [CreateTestGridProjectResult](#createtestgridprojectresult)

### CreateTestGridUrl



```js
amazonaws_devicefarm.CreateTestGridUrl({
  "projectArn": null,
  "expiresInSeconds": null
}, context)
```

#### Input
* input `object`
  * expiresInSeconds **required**
  * projectArn **required**

#### Output
* output [CreateTestGridUrlResult](#createtestgridurlresult)

### CreateUpload



```js
amazonaws_devicefarm.CreateUpload({
  "projectArn": null,
  "name": null,
  "type": null
}, context)
```

#### Input
* input `object`
  * contentType
  * name **required**
  * projectArn **required**
  * type **required**

#### Output
* output [CreateUploadResult](#createuploadresult)

### CreateVPCEConfiguration



```js
amazonaws_devicefarm.CreateVPCEConfiguration({
  "vpceConfigurationName": null,
  "vpceServiceName": null,
  "serviceDnsName": null
}, context)
```

#### Input
* input `object`
  * serviceDnsName **required**
  * vpceConfigurationDescription
  * vpceConfigurationName **required**
  * vpceServiceName **required**

#### Output
* output [CreateVPCEConfigurationResult](#createvpceconfigurationresult)

### DeleteDevicePool



```js
amazonaws_devicefarm.DeleteDevicePool({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [DeleteDevicePoolResult](#deletedevicepoolresult)

### DeleteInstanceProfile



```js
amazonaws_devicefarm.DeleteInstanceProfile({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [DeleteInstanceProfileResult](#deleteinstanceprofileresult)

### DeleteNetworkProfile



```js
amazonaws_devicefarm.DeleteNetworkProfile({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [DeleteNetworkProfileResult](#deletenetworkprofileresult)

### DeleteProject



```js
amazonaws_devicefarm.DeleteProject({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [DeleteProjectResult](#deleteprojectresult)

### DeleteRemoteAccessSession



```js
amazonaws_devicefarm.DeleteRemoteAccessSession({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [DeleteRemoteAccessSessionResult](#deleteremoteaccesssessionresult)

### DeleteRun



```js
amazonaws_devicefarm.DeleteRun({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [DeleteRunResult](#deleterunresult)

### DeleteTestGridProject



```js
amazonaws_devicefarm.DeleteTestGridProject({
  "projectArn": null
}, context)
```

#### Input
* input `object`
  * projectArn **required**

#### Output
* output [DeleteTestGridProjectResult](#deletetestgridprojectresult)

### DeleteUpload



```js
amazonaws_devicefarm.DeleteUpload({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [DeleteUploadResult](#deleteuploadresult)

### DeleteVPCEConfiguration



```js
amazonaws_devicefarm.DeleteVPCEConfiguration({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [DeleteVPCEConfigurationResult](#deletevpceconfigurationresult)

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
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [GetDeviceResult](#getdeviceresult)

### GetDeviceInstance



```js
amazonaws_devicefarm.GetDeviceInstance({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [GetDeviceInstanceResult](#getdeviceinstanceresult)

### GetDevicePool



```js
amazonaws_devicefarm.GetDevicePool({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [GetDevicePoolResult](#getdevicepoolresult)

### GetDevicePoolCompatibility



```js
amazonaws_devicefarm.GetDevicePoolCompatibility({
  "devicePoolArn": null
}, context)
```

#### Input
* input `object`
  * appArn
  * configuration
    * auxiliaryApps
      * items [AmazonResourceName](#amazonresourcename)
    * billingMethod
    * customerArtifactPaths
      * androidPaths
        * items [String](#string)
      * deviceHostPaths
        * items [String](#string)
      * iosPaths
        * items [String](#string)
    * extraDataPackageArn
    * locale
    * location
      * latitude **required**
      * longitude **required**
    * networkProfileArn
    * radios
      * bluetooth
      * gps
      * nfc
      * wifi
    * vpceConfigurationArns
      * items [AmazonResourceName](#amazonresourcename)
  * devicePoolArn **required**
  * test
    * parameters
    * filter
    * testPackageArn
    * testSpecArn
    * type **required**
  * testType

#### Output
* output [GetDevicePoolCompatibilityResult](#getdevicepoolcompatibilityresult)

### GetInstanceProfile



```js
amazonaws_devicefarm.GetInstanceProfile({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [GetInstanceProfileResult](#getinstanceprofileresult)

### GetJob



```js
amazonaws_devicefarm.GetJob({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [GetJobResult](#getjobresult)

### GetNetworkProfile



```js
amazonaws_devicefarm.GetNetworkProfile({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [GetNetworkProfileResult](#getnetworkprofileresult)

### GetOfferingStatus



```js
amazonaws_devicefarm.GetOfferingStatus({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken

#### Output
* output [GetOfferingStatusResult](#getofferingstatusresult)

### GetProject



```js
amazonaws_devicefarm.GetProject({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [GetProjectResult](#getprojectresult)

### GetRemoteAccessSession



```js
amazonaws_devicefarm.GetRemoteAccessSession({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [GetRemoteAccessSessionResult](#getremoteaccesssessionresult)

### GetRun



```js
amazonaws_devicefarm.GetRun({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [GetRunResult](#getrunresult)

### GetSuite



```js
amazonaws_devicefarm.GetSuite({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [GetSuiteResult](#getsuiteresult)

### GetTest



```js
amazonaws_devicefarm.GetTest({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [GetTestResult](#gettestresult)

### GetTestGridProject



```js
amazonaws_devicefarm.GetTestGridProject({
  "projectArn": null
}, context)
```

#### Input
* input `object`
  * projectArn **required**

#### Output
* output [GetTestGridProjectResult](#gettestgridprojectresult)

### GetTestGridSession



```js
amazonaws_devicefarm.GetTestGridSession({}, context)
```

#### Input
* input `object`
  * projectArn
  * sessionArn
  * sessionId

#### Output
* output [GetTestGridSessionResult](#gettestgridsessionresult)

### GetUpload



```js
amazonaws_devicefarm.GetUpload({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [GetUploadResult](#getuploadresult)

### GetVPCEConfiguration



```js
amazonaws_devicefarm.GetVPCEConfiguration({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [GetVPCEConfigurationResult](#getvpceconfigurationresult)

### InstallToRemoteAccessSession



```js
amazonaws_devicefarm.InstallToRemoteAccessSession({
  "remoteAccessSessionArn": null,
  "appArn": null
}, context)
```

#### Input
* input `object`
  * appArn **required**
  * remoteAccessSessionArn **required**

#### Output
* output [InstallToRemoteAccessSessionResult](#installtoremoteaccesssessionresult)

### ListArtifacts



```js
amazonaws_devicefarm.ListArtifacts({
  "arn": null,
  "type": null
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required**
  * nextToken
  * type **required**

#### Output
* output [ListArtifactsResult](#listartifactsresult)

### ListDeviceInstances



```js
amazonaws_devicefarm.ListDeviceInstances({}, context)
```

#### Input
* input `object`
  * maxResults
  * nextToken

#### Output
* output [ListDeviceInstancesResult](#listdeviceinstancesresult)

### ListDevicePools



```js
amazonaws_devicefarm.ListDevicePools({
  "arn": null
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required**
  * nextToken
  * type

#### Output
* output [ListDevicePoolsResult](#listdevicepoolsresult)

### ListDevices



```js
amazonaws_devicefarm.ListDevices({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn
  * filters
    * items [DeviceFilter](#devicefilter)
  * nextToken

#### Output
* output [ListDevicesResult](#listdevicesresult)

### ListInstanceProfiles



```js
amazonaws_devicefarm.ListInstanceProfiles({}, context)
```

#### Input
* input `object`
  * maxResults
  * nextToken

#### Output
* output [ListInstanceProfilesResult](#listinstanceprofilesresult)

### ListJobs



```js
amazonaws_devicefarm.ListJobs({
  "arn": null
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required**
  * nextToken

#### Output
* output [ListJobsResult](#listjobsresult)

### ListNetworkProfiles



```js
amazonaws_devicefarm.ListNetworkProfiles({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**
  * nextToken
  * type

#### Output
* output [ListNetworkProfilesResult](#listnetworkprofilesresult)

### ListOfferingPromotions



```js
amazonaws_devicefarm.ListOfferingPromotions({}, context)
```

#### Input
* input `object`
  * nextToken

#### Output
* output [ListOfferingPromotionsResult](#listofferingpromotionsresult)

### ListOfferingTransactions



```js
amazonaws_devicefarm.ListOfferingTransactions({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken

#### Output
* output [ListOfferingTransactionsResult](#listofferingtransactionsresult)

### ListOfferings



```js
amazonaws_devicefarm.ListOfferings({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken

#### Output
* output [ListOfferingsResult](#listofferingsresult)

### ListProjects



```js
amazonaws_devicefarm.ListProjects({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn
  * nextToken

#### Output
* output [ListProjectsResult](#listprojectsresult)

### ListRemoteAccessSessions



```js
amazonaws_devicefarm.ListRemoteAccessSessions({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**
  * nextToken

#### Output
* output [ListRemoteAccessSessionsResult](#listremoteaccesssessionsresult)

### ListRuns



```js
amazonaws_devicefarm.ListRuns({
  "arn": null
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required**
  * nextToken

#### Output
* output [ListRunsResult](#listrunsresult)

### ListSamples



```js
amazonaws_devicefarm.ListSamples({
  "arn": null
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required**
  * nextToken

#### Output
* output [ListSamplesResult](#listsamplesresult)

### ListSuites



```js
amazonaws_devicefarm.ListSuites({
  "arn": null
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required**
  * nextToken

#### Output
* output [ListSuitesResult](#listsuitesresult)

### ListTagsForResource



```js
amazonaws_devicefarm.ListTagsForResource({
  "ResourceARN": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ListTestGridProjects



```js
amazonaws_devicefarm.ListTestGridProjects({}, context)
```

#### Input
* input `object`
  * maxResult `string`
  * nextToken `string`
  * maxResult
  * nextToken

#### Output
* output [ListTestGridProjectsResult](#listtestgridprojectsresult)

### ListTestGridSessionActions



```js
amazonaws_devicefarm.ListTestGridSessionActions({
  "sessionArn": null
}, context)
```

#### Input
* input `object`
  * maxResult `string`
  * nextToken `string`
  * maxResult
  * nextToken
  * sessionArn **required**

#### Output
* output [ListTestGridSessionActionsResult](#listtestgridsessionactionsresult)

### ListTestGridSessionArtifacts



```js
amazonaws_devicefarm.ListTestGridSessionArtifacts({
  "sessionArn": null
}, context)
```

#### Input
* input `object`
  * maxResult `string`
  * nextToken `string`
  * maxResult
  * nextToken
  * sessionArn **required**
  * type

#### Output
* output [ListTestGridSessionArtifactsResult](#listtestgridsessionartifactsresult)

### ListTestGridSessions



```js
amazonaws_devicefarm.ListTestGridSessions({
  "projectArn": null
}, context)
```

#### Input
* input `object`
  * maxResult `string`
  * nextToken `string`
  * creationTimeAfter
  * creationTimeBefore
  * endTimeAfter
  * endTimeBefore
  * maxResult
  * nextToken
  * projectArn **required**
  * status

#### Output
* output [ListTestGridSessionsResult](#listtestgridsessionsresult)

### ListTests



```js
amazonaws_devicefarm.ListTests({
  "arn": null
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required**
  * nextToken

#### Output
* output [ListTestsResult](#listtestsresult)

### ListUniqueProblems



```js
amazonaws_devicefarm.ListUniqueProblems({
  "arn": null
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required**
  * nextToken

#### Output
* output [ListUniqueProblemsResult](#listuniqueproblemsresult)

### ListUploads



```js
amazonaws_devicefarm.ListUploads({
  "arn": null
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * arn **required**
  * nextToken
  * type

#### Output
* output [ListUploadsResult](#listuploadsresult)

### ListVPCEConfigurations



```js
amazonaws_devicefarm.ListVPCEConfigurations({}, context)
```

#### Input
* input `object`
  * maxResults
  * nextToken

#### Output
* output [ListVPCEConfigurationsResult](#listvpceconfigurationsresult)

### PurchaseOffering



```js
amazonaws_devicefarm.PurchaseOffering({}, context)
```

#### Input
* input `object`
  * offeringId
  * offeringPromotionId
  * quantity

#### Output
* output [PurchaseOfferingResult](#purchaseofferingresult)

### RenewOffering



```js
amazonaws_devicefarm.RenewOffering({}, context)
```

#### Input
* input `object`
  * offeringId
  * quantity

#### Output
* output [RenewOfferingResult](#renewofferingresult)

### ScheduleRun



```js
amazonaws_devicefarm.ScheduleRun({
  "projectArn": null,
  "test": null
}, context)
```

#### Input
* input `object`
  * appArn
  * configuration
    * auxiliaryApps
      * items [AmazonResourceName](#amazonresourcename)
    * billingMethod
    * customerArtifactPaths
      * androidPaths
        * items [String](#string)
      * deviceHostPaths
        * items [String](#string)
      * iosPaths
        * items [String](#string)
    * extraDataPackageArn
    * locale
    * location
      * latitude **required**
      * longitude **required**
    * networkProfileArn
    * radios
      * bluetooth
      * gps
      * nfc
      * wifi
    * vpceConfigurationArns
      * items [AmazonResourceName](#amazonresourcename)
  * devicePoolArn
  * deviceSelectionConfiguration
    * filters **required**
      * items [DeviceFilter](#devicefilter)
    * maxDevices **required**
  * executionConfiguration
    * accountsCleanup
    * appPackagesCleanup
    * jobTimeoutMinutes
    * skipAppResign
    * videoCapture
  * name
  * projectArn **required**
  * test **required**
    * parameters
    * filter
    * testPackageArn
    * testSpecArn
    * type **required**

#### Output
* output [ScheduleRunResult](#schedulerunresult)

### StopJob



```js
amazonaws_devicefarm.StopJob({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [StopJobResult](#stopjobresult)

### StopRemoteAccessSession



```js
amazonaws_devicefarm.StopRemoteAccessSession({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [StopRemoteAccessSessionResult](#stopremoteaccesssessionresult)

### StopRun



```js
amazonaws_devicefarm.StopRun({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [StopRunResult](#stoprunresult)

### TagResource



```js
amazonaws_devicefarm.TagResource({
  "ResourceARN": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_devicefarm.UntagResource({
  "ResourceARN": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateDeviceInstance



```js
amazonaws_devicefarm.UpdateDeviceInstance({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**
  * labels
    * items [String](#string)
  * profileArn

#### Output
* output [UpdateDeviceInstanceResult](#updatedeviceinstanceresult)

### UpdateDevicePool



```js
amazonaws_devicefarm.UpdateDevicePool({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**
  * clearMaxDevices
  * description
  * maxDevices
  * name
  * rules
    * items [Rule](#rule)

#### Output
* output [UpdateDevicePoolResult](#updatedevicepoolresult)

### UpdateInstanceProfile



```js
amazonaws_devicefarm.UpdateInstanceProfile({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**
  * description
  * excludeAppPackagesFromCleanup
    * items [String](#string)
  * name
  * packageCleanup
  * rebootAfterUse

#### Output
* output [UpdateInstanceProfileResult](#updateinstanceprofileresult)

### UpdateNetworkProfile



```js
amazonaws_devicefarm.UpdateNetworkProfile({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**
  * description
  * downlinkBandwidthBits
  * downlinkDelayMs
  * downlinkJitterMs
  * downlinkLossPercent
  * name
  * type
  * uplinkBandwidthBits
  * uplinkDelayMs
  * uplinkJitterMs
  * uplinkLossPercent

#### Output
* output [UpdateNetworkProfileResult](#updatenetworkprofileresult)

### UpdateProject



```js
amazonaws_devicefarm.UpdateProject({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**
  * defaultJobTimeoutMinutes
  * name

#### Output
* output [UpdateProjectResult](#updateprojectresult)

### UpdateTestGridProject



```js
amazonaws_devicefarm.UpdateTestGridProject({
  "projectArn": null
}, context)
```

#### Input
* input `object`
  * description
  * name
  * projectArn **required**

#### Output
* output [UpdateTestGridProjectResult](#updatetestgridprojectresult)

### UpdateUpload



```js
amazonaws_devicefarm.UpdateUpload({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**
  * contentType
  * editContent
  * name

#### Output
* output [UpdateUploadResult](#updateuploadresult)

### UpdateVPCEConfiguration



```js
amazonaws_devicefarm.UpdateVPCEConfiguration({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**
  * serviceDnsName
  * vpceConfigurationDescription
  * vpceConfigurationName
  * vpceServiceName

#### Output
* output [UpdateVPCEConfigurationResult](#updatevpceconfigurationresult)



## Definitions

### AWSAccountNumber
* AWSAccountNumber `string`

### AccountSettings
* AccountSettings `object`: A container for account-level settings in AWS Device Farm.
  * awsAccountNumber
  * defaultJobTimeoutMinutes
  * maxJobTimeoutMinutes
  * maxSlots
  * skipAppResign
  * trialMinutes
    * remaining
    * total
  * unmeteredDevices
  * unmeteredRemoteAccessDevices

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


### Artifact
* Artifact `object`: Represents the output of a test. Examples of artifacts include logs and screenshots.
  * arn
  * extension
  * name
  * type
  * url

### ArtifactCategory
* ArtifactCategory `string` (values: SCREENSHOT, FILE, LOG)

### ArtifactType
* ArtifactType `string` (values: UNKNOWN, SCREENSHOT, DEVICE_LOG, MESSAGE_LOG, VIDEO_LOG, RESULT_LOG, SERVICE_LOG, WEBKIT_LOG, INSTRUMENTATION_OUTPUT, EXERCISER_MONKEY_OUTPUT, CALABASH_JSON_OUTPUT, CALABASH_PRETTY_OUTPUT, CALABASH_STANDARD_OUTPUT, CALABASH_JAVA_XML_OUTPUT, AUTOMATION_OUTPUT, APPIUM_SERVER_OUTPUT, APPIUM_JAVA_OUTPUT, APPIUM_JAVA_XML_OUTPUT, APPIUM_PYTHON_OUTPUT, APPIUM_PYTHON_XML_OUTPUT, EXPLORER_EVENT_LOG, EXPLORER_SUMMARY_LOG, APPLICATION_CRASH_REPORT, XCTEST_LOG, VIDEO, CUSTOMER_ARTIFACT, CUSTOMER_ARTIFACT_LOG, TESTSPEC_OUTPUT)

### Artifacts
* Artifacts `array`
  * items [Artifact](#artifact)

### BillingMethod
* BillingMethod `string` (values: METERED, UNMETERED)

### Boolean
* Boolean `boolean`

### CPU
* CPU `object`: Represents the amount of CPU that an app is using on a physical device. Does not represent system-wide CPU usage.
  * architecture
  * clock
  * frequency

### CannotDeleteException


### ClientId
* ClientId `string`

### ContentType
* ContentType `string`

### Counters
* Counters `object`: Represents entity counters.
  * errored
  * failed
  * passed
  * skipped
  * stopped
  * total
  * warned

### CreateDevicePoolRequest
* CreateDevicePoolRequest `object`: Represents a request to the create device pool operation.
  * description
  * maxDevices
  * name **required**
  * projectArn **required**
  * rules **required**
    * items [Rule](#rule)

### CreateDevicePoolResult
* CreateDevicePoolResult `object`: Represents the result of a create device pool request.
  * devicePool
    * arn
    * description
    * maxDevices
    * name
    * rules
      * items [Rule](#rule)
    * type

### CreateInstanceProfileRequest
* CreateInstanceProfileRequest `object`
  * description
  * excludeAppPackagesFromCleanup
    * items [String](#string)
  * name **required**
  * packageCleanup
  * rebootAfterUse

### CreateInstanceProfileResult
* CreateInstanceProfileResult `object`
  * instanceProfile
    * arn
    * description
    * excludeAppPackagesFromCleanup
      * items [String](#string)
    * name
    * packageCleanup
    * rebootAfterUse

### CreateNetworkProfileRequest
* CreateNetworkProfileRequest `object`
  * description
  * downlinkBandwidthBits
  * downlinkDelayMs
  * downlinkJitterMs
  * downlinkLossPercent
  * name **required**
  * projectArn **required**
  * type
  * uplinkBandwidthBits
  * uplinkDelayMs
  * uplinkJitterMs
  * uplinkLossPercent

### CreateNetworkProfileResult
* CreateNetworkProfileResult `object`
  * networkProfile
    * arn
    * description
    * downlinkBandwidthBits
    * downlinkDelayMs
    * downlinkJitterMs
    * downlinkLossPercent
    * name
    * type
    * uplinkBandwidthBits
    * uplinkDelayMs
    * uplinkJitterMs
    * uplinkLossPercent

### CreateProjectRequest
* CreateProjectRequest `object`: Represents a request to the create project operation.
  * defaultJobTimeoutMinutes
  * name **required**

### CreateProjectResult
* CreateProjectResult `object`: Represents the result of a create project request.
  * project
    * arn
    * created
    * defaultJobTimeoutMinutes
    * name

### CreateRemoteAccessSessionConfiguration
* CreateRemoteAccessSessionConfiguration `object`: Configuration settings for a remote access session, including billing method.
  * billingMethod
  * vpceConfigurationArns
    * items [AmazonResourceName](#amazonresourcename)

### CreateRemoteAccessSessionRequest
* CreateRemoteAccessSessionRequest `object`: Creates and submits a request to start a remote access session.
  * clientId
  * configuration
    * billingMethod
    * vpceConfigurationArns
      * items [AmazonResourceName](#amazonresourcename)
  * deviceArn **required**
  * instanceArn
  * interactionMode
  * name
  * projectArn **required**
  * remoteDebugEnabled
  * remoteRecordAppArn
  * remoteRecordEnabled
  * skipAppResign
  * sshPublicKey

### CreateRemoteAccessSessionResult
* CreateRemoteAccessSessionResult `object`: Represents the server response from a request to create a remote access session.
  * remoteAccessSession
    * arn
    * billingMethod
    * clientId
    * created
    * device
      * arn
      * availability
      * carrier
      * cpu
        * architecture
        * clock
        * frequency
      * fleetName
      * fleetType
      * formFactor
      * heapSize
      * image
      * instances
        * items [DeviceInstance](#deviceinstance)
      * manufacturer
      * memory
      * model
      * modelId
      * name
      * os
      * platform
      * radio
      * remoteAccessEnabled
      * remoteDebugEnabled
      * resolution
        * height
        * width
    * deviceMinutes
      * metered
      * total
      * unmetered
    * deviceUdid
    * endpoint
    * hostAddress
    * instanceArn
    * interactionMode
    * message
    * name
    * remoteDebugEnabled
    * remoteRecordAppArn
    * remoteRecordEnabled
    * result
    * skipAppResign
    * started
    * status
    * stopped

### CreateTestGridProjectRequest
* CreateTestGridProjectRequest `object`
  * description
  * name **required**

### CreateTestGridProjectResult
* CreateTestGridProjectResult `object`
  * testGridProject
    * arn
    * created
    * description
    * name

### CreateTestGridUrlRequest
* CreateTestGridUrlRequest `object`
  * expiresInSeconds **required**
  * projectArn **required**

### CreateTestGridUrlResult
* CreateTestGridUrlResult `object`
  * expires
  * url

### CreateUploadRequest
* CreateUploadRequest `object`: Represents a request to the create upload operation.
  * contentType
  * name **required**
  * projectArn **required**
  * type **required**

### CreateUploadResult
* CreateUploadResult `object`: Represents the result of a create upload request.
  * upload
    * arn
    * category
    * contentType
    * created
    * message
    * metadata
    * name
    * status
    * type
    * url

### CreateVPCEConfigurationRequest
* CreateVPCEConfigurationRequest `object`
  * serviceDnsName **required**
  * vpceConfigurationDescription
  * vpceConfigurationName **required**
  * vpceServiceName **required**

### CreateVPCEConfigurationResult
* CreateVPCEConfigurationResult `object`
  * vpceConfiguration
    * arn
    * serviceDnsName
    * vpceConfigurationDescription
    * vpceConfigurationName
    * vpceServiceName

### CurrencyCode
* CurrencyCode `string` (values: USD)

### CustomerArtifactPaths
* CustomerArtifactPaths `object`: <p>A JSON object that specifies the paths where the artifacts generated by the customer's tests, on the device or in the test environment, are pulled from.</p> <p>Specify <code>deviceHostPaths</code> and optionally specify either <code>iosPaths</code> or <code>androidPaths</code>.</p> <p>For web app tests, you can specify both <code>iosPaths</code> and <code>androidPaths</code>.</p>
  * androidPaths
    * items [String](#string)
  * deviceHostPaths
    * items [String](#string)
  * iosPaths
    * items [String](#string)

### DateTime
* DateTime `string`

### DeleteDevicePoolRequest
* DeleteDevicePoolRequest `object`: Represents a request to the delete device pool operation.
  * arn **required**

### DeleteDevicePoolResult
* DeleteDevicePoolResult `object`: Represents the result of a delete device pool request.

### DeleteInstanceProfileRequest
* DeleteInstanceProfileRequest `object`
  * arn **required**

### DeleteInstanceProfileResult
* DeleteInstanceProfileResult `object`

### DeleteNetworkProfileRequest
* DeleteNetworkProfileRequest `object`
  * arn **required**

### DeleteNetworkProfileResult
* DeleteNetworkProfileResult `object`

### DeleteProjectRequest
* DeleteProjectRequest `object`: Represents a request to the delete project operation.
  * arn **required**

### DeleteProjectResult
* DeleteProjectResult `object`: Represents the result of a delete project request.

### DeleteRemoteAccessSessionRequest
* DeleteRemoteAccessSessionRequest `object`: Represents the request to delete the specified remote access session.
  * arn **required**

### DeleteRemoteAccessSessionResult
* DeleteRemoteAccessSessionResult `object`: The response from the server when a request is made to delete the remote access session.

### DeleteRunRequest
* DeleteRunRequest `object`: Represents a request to the delete run operation.
  * arn **required**

### DeleteRunResult
* DeleteRunResult `object`: Represents the result of a delete run request.

### DeleteTestGridProjectRequest
* DeleteTestGridProjectRequest `object`
  * projectArn **required**

### DeleteTestGridProjectResult
* DeleteTestGridProjectResult `object`

### DeleteUploadRequest
* DeleteUploadRequest `object`: Represents a request to the delete upload operation.
  * arn **required**

### DeleteUploadResult
* DeleteUploadResult `object`: Represents the result of a delete upload request.

### DeleteVPCEConfigurationRequest
* DeleteVPCEConfigurationRequest `object`
  * arn **required**

### DeleteVPCEConfigurationResult
* DeleteVPCEConfigurationResult `object`

### Device
* Device `object`: Represents a device type that an app is tested against.
  * arn
  * availability
  * carrier
  * cpu
    * architecture
    * clock
    * frequency
  * fleetName
  * fleetType
  * formFactor
  * heapSize
  * image
  * instances
    * items [DeviceInstance](#deviceinstance)
  * manufacturer
  * memory
  * model
  * modelId
  * name
  * os
  * platform
  * radio
  * remoteAccessEnabled
  * remoteDebugEnabled
  * resolution
    * height
    * width

### DeviceAttribute
* DeviceAttribute `string` (values: ARN, PLATFORM, FORM_FACTOR, MANUFACTURER, REMOTE_ACCESS_ENABLED, REMOTE_DEBUG_ENABLED, APPIUM_VERSION, INSTANCE_ARN, INSTANCE_LABELS, FLEET_TYPE, OS_VERSION, MODEL, AVAILABILITY)

### DeviceAvailability
* DeviceAvailability `string` (values: TEMPORARY_NOT_AVAILABLE, BUSY, AVAILABLE, HIGHLY_AVAILABLE)

### DeviceFarmArn
* DeviceFarmArn `string`

### DeviceFilter
* DeviceFilter `object`: <p>Represents a device filter used to select a set of devices to be included in a test run. This data structure is passed in as the <code>deviceSelectionConfiguration</code> parameter to <code>ScheduleRun</code>. For an example of the JSON request syntax, see <a>ScheduleRun</a>.</p> <p>It is also passed in as the <code>filters</code> parameter to <code>ListDevices</code>. For an example of the JSON request syntax, see <a>ListDevices</a>.</p>
  * attribute
  * operator
  * values
    * items [String](#string)

### DeviceFilterAttribute
* DeviceFilterAttribute `string` (values: ARN, PLATFORM, OS_VERSION, MODEL, AVAILABILITY, FORM_FACTOR, MANUFACTURER, REMOTE_ACCESS_ENABLED, REMOTE_DEBUG_ENABLED, INSTANCE_ARN, INSTANCE_LABELS, FLEET_TYPE)

### DeviceFilterValues
* DeviceFilterValues `array`
  * items [String](#string)

### DeviceFilters
* DeviceFilters `array`
  * items [DeviceFilter](#devicefilter)

### DeviceFormFactor
* DeviceFormFactor `string` (values: PHONE, TABLET)

### DeviceHostPaths
* DeviceHostPaths `array`
  * items [String](#string)

### DeviceInstance
* DeviceInstance `object`: Represents the device instance.
  * arn
  * deviceArn
  * instanceProfile
    * arn
    * description
    * excludeAppPackagesFromCleanup
      * items [String](#string)
    * name
    * packageCleanup
    * rebootAfterUse
  * labels
    * items [String](#string)
  * status
  * udid

### DeviceInstances
* DeviceInstances `array`
  * items [DeviceInstance](#deviceinstance)

### DeviceMinutes
* DeviceMinutes `object`: Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children.
  * metered
  * total
  * unmetered

### DevicePlatform
* DevicePlatform `string` (values: ANDROID, IOS)

### DevicePool
* DevicePool `object`: Represents a collection of device types.
  * arn
  * description
  * maxDevices
  * name
  * rules
    * items [Rule](#rule)
  * type

### DevicePoolCompatibilityResult
* DevicePoolCompatibilityResult `object`: Represents a device pool compatibility result.
  * compatible
  * device
    * arn
    * availability
    * carrier
    * cpu
      * architecture
      * clock
      * frequency
    * fleetName
    * fleetType
    * formFactor
    * heapSize
    * image
    * instances
      * items [DeviceInstance](#deviceinstance)
    * manufacturer
    * memory
    * model
    * modelId
    * name
    * os
    * platform
    * radio
    * remoteAccessEnabled
    * remoteDebugEnabled
    * resolution
      * height
      * width
  * incompatibilityMessages
    * items [IncompatibilityMessage](#incompatibilitymessage)

### DevicePoolCompatibilityResults
* DevicePoolCompatibilityResults `array`
  * items [DevicePoolCompatibilityResult](#devicepoolcompatibilityresult)

### DevicePoolType
* DevicePoolType `string` (values: CURATED, PRIVATE)

### DevicePools
* DevicePools `array`
  * items [DevicePool](#devicepool)

### DeviceSelectionConfiguration
* DeviceSelectionConfiguration `object`: Represents the device filters used in a test run and the maximum number of devices to be included in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>.
  * filters **required**
    * items [DeviceFilter](#devicefilter)
  * maxDevices **required**

### DeviceSelectionResult
* DeviceSelectionResult `object`: Contains the run results requested by the device selection configuration and how many devices were returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>.
  * filters
    * items [DeviceFilter](#devicefilter)
  * matchedDevicesCount
  * maxDevices

### Devices
* Devices `array`
  * items [Device](#device)

### Double
* Double `number`

### ExecutionConfiguration
* ExecutionConfiguration `object`: Represents configuration information about a test run, such as the execution timeout (in minutes).
  * accountsCleanup
  * appPackagesCleanup
  * jobTimeoutMinutes
  * skipAppResign
  * videoCapture

### ExecutionResult
* ExecutionResult `string` (values: PENDING, PASSED, WARNED, FAILED, SKIPPED, ERRORED, STOPPED)

### ExecutionResultCode
* ExecutionResultCode `string` (values: PARSING_FAILED, VPC_ENDPOINT_SETUP_FAILED)

### ExecutionStatus
* ExecutionStatus `string` (values: PENDING, PENDING_CONCURRENCY, PENDING_DEVICE, PROCESSING, SCHEDULING, PREPARING, RUNNING, COMPLETED, STOPPING)

### Filter
* Filter `string`

### GetAccountSettingsRequest
* GetAccountSettingsRequest `object`: Represents the request sent to retrieve the account settings.

### GetAccountSettingsResult
* GetAccountSettingsResult `object`: Represents the account settings return values from the <code>GetAccountSettings</code> request.
  * accountSettings
    * awsAccountNumber
    * defaultJobTimeoutMinutes
    * maxJobTimeoutMinutes
    * maxSlots
    * skipAppResign
    * trialMinutes
      * remaining
      * total
    * unmeteredDevices
    * unmeteredRemoteAccessDevices

### GetDeviceInstanceRequest
* GetDeviceInstanceRequest `object`
  * arn **required**

### GetDeviceInstanceResult
* GetDeviceInstanceResult `object`
  * deviceInstance
    * arn
    * deviceArn
    * instanceProfile
      * arn
      * description
      * excludeAppPackagesFromCleanup
        * items [String](#string)
      * name
      * packageCleanup
      * rebootAfterUse
    * labels
      * items [String](#string)
    * status
    * udid

### GetDevicePoolCompatibilityRequest
* GetDevicePoolCompatibilityRequest `object`: Represents a request to the get device pool compatibility operation.
  * appArn
  * configuration
    * auxiliaryApps
      * items [AmazonResourceName](#amazonresourcename)
    * billingMethod
    * customerArtifactPaths
      * androidPaths
        * items [String](#string)
      * deviceHostPaths
        * items [String](#string)
      * iosPaths
        * items [String](#string)
    * extraDataPackageArn
    * locale
    * location
      * latitude **required**
      * longitude **required**
    * networkProfileArn
    * radios
      * bluetooth
      * gps
      * nfc
      * wifi
    * vpceConfigurationArns
      * items [AmazonResourceName](#amazonresourcename)
  * devicePoolArn **required**
  * test
    * parameters
    * filter
    * testPackageArn
    * testSpecArn
    * type **required**
  * testType

### GetDevicePoolCompatibilityResult
* GetDevicePoolCompatibilityResult `object`: Represents the result of describe device pool compatibility request.
  * compatibleDevices
    * items [DevicePoolCompatibilityResult](#devicepoolcompatibilityresult)
  * incompatibleDevices
    * items [DevicePoolCompatibilityResult](#devicepoolcompatibilityresult)

### GetDevicePoolRequest
* GetDevicePoolRequest `object`: Represents a request to the get device pool operation.
  * arn **required**

### GetDevicePoolResult
* GetDevicePoolResult `object`: Represents the result of a get device pool request.
  * devicePool
    * arn
    * description
    * maxDevices
    * name
    * rules
      * items [Rule](#rule)
    * type

### GetDeviceRequest
* GetDeviceRequest `object`: Represents a request to the get device request.
  * arn **required**

### GetDeviceResult
* GetDeviceResult `object`: Represents the result of a get device request.
  * device
    * arn
    * availability
    * carrier
    * cpu
      * architecture
      * clock
      * frequency
    * fleetName
    * fleetType
    * formFactor
    * heapSize
    * image
    * instances
      * items [DeviceInstance](#deviceinstance)
    * manufacturer
    * memory
    * model
    * modelId
    * name
    * os
    * platform
    * radio
    * remoteAccessEnabled
    * remoteDebugEnabled
    * resolution
      * height
      * width

### GetInstanceProfileRequest
* GetInstanceProfileRequest `object`
  * arn **required**

### GetInstanceProfileResult
* GetInstanceProfileResult `object`
  * instanceProfile
    * arn
    * description
    * excludeAppPackagesFromCleanup
      * items [String](#string)
    * name
    * packageCleanup
    * rebootAfterUse

### GetJobRequest
* GetJobRequest `object`: Represents a request to the get job operation.
  * arn **required**

### GetJobResult
* GetJobResult `object`: Represents the result of a get job request.
  * job
    * arn
    * counters
      * errored
      * failed
      * passed
      * skipped
      * stopped
      * total
      * warned
    * created
    * device
      * arn
      * availability
      * carrier
      * cpu
        * architecture
        * clock
        * frequency
      * fleetName
      * fleetType
      * formFactor
      * heapSize
      * image
      * instances
        * items [DeviceInstance](#deviceinstance)
      * manufacturer
      * memory
      * model
      * modelId
      * name
      * os
      * platform
      * radio
      * remoteAccessEnabled
      * remoteDebugEnabled
      * resolution
        * height
        * width
    * deviceMinutes
      * metered
      * total
      * unmetered
    * instanceArn
    * message
    * name
    * result
    * started
    * status
    * stopped
    * type
    * videoCapture
    * videoEndpoint

### GetNetworkProfileRequest
* GetNetworkProfileRequest `object`
  * arn **required**

### GetNetworkProfileResult
* GetNetworkProfileResult `object`
  * networkProfile
    * arn
    * description
    * downlinkBandwidthBits
    * downlinkDelayMs
    * downlinkJitterMs
    * downlinkLossPercent
    * name
    * type
    * uplinkBandwidthBits
    * uplinkDelayMs
    * uplinkJitterMs
    * uplinkLossPercent

### GetOfferingStatusRequest
* GetOfferingStatusRequest `object`: Represents the request to retrieve the offering status for the specified customer or account.
  * nextToken

### GetOfferingStatusResult
* GetOfferingStatusResult `object`: Returns the status result for a device offering.
  * current
  * nextPeriod
  * nextToken

### GetProjectRequest
* GetProjectRequest `object`: Represents a request to the get project operation.
  * arn **required**

### GetProjectResult
* GetProjectResult `object`: Represents the result of a get project request.
  * project
    * arn
    * created
    * defaultJobTimeoutMinutes
    * name

### GetRemoteAccessSessionRequest
* GetRemoteAccessSessionRequest `object`: Represents the request to get information about the specified remote access session.
  * arn **required**

### GetRemoteAccessSessionResult
* GetRemoteAccessSessionResult `object`: Represents the response from the server that lists detailed information about the remote access session.
  * remoteAccessSession
    * arn
    * billingMethod
    * clientId
    * created
    * device
      * arn
      * availability
      * carrier
      * cpu
        * architecture
        * clock
        * frequency
      * fleetName
      * fleetType
      * formFactor
      * heapSize
      * image
      * instances
        * items [DeviceInstance](#deviceinstance)
      * manufacturer
      * memory
      * model
      * modelId
      * name
      * os
      * platform
      * radio
      * remoteAccessEnabled
      * remoteDebugEnabled
      * resolution
        * height
        * width
    * deviceMinutes
      * metered
      * total
      * unmetered
    * deviceUdid
    * endpoint
    * hostAddress
    * instanceArn
    * interactionMode
    * message
    * name
    * remoteDebugEnabled
    * remoteRecordAppArn
    * remoteRecordEnabled
    * result
    * skipAppResign
    * started
    * status
    * stopped

### GetRunRequest
* GetRunRequest `object`: Represents a request to the get run operation.
  * arn **required**

### GetRunResult
* GetRunResult `object`: Represents the result of a get run request.
  * run
    * appUpload
    * arn
    * billingMethod
    * completedJobs
    * counters
      * errored
      * failed
      * passed
      * skipped
      * stopped
      * total
      * warned
    * created
    * customerArtifactPaths
      * androidPaths
        * items [String](#string)
      * deviceHostPaths
        * items [String](#string)
      * iosPaths
        * items [String](#string)
    * deviceMinutes
      * metered
      * total
      * unmetered
    * devicePoolArn
    * deviceSelectionResult
      * filters
        * items [DeviceFilter](#devicefilter)
      * matchedDevicesCount
      * maxDevices
    * eventCount
    * jobTimeoutMinutes
    * locale
    * location
      * latitude **required**
      * longitude **required**
    * message
    * name
    * networkProfile
      * arn
      * description
      * downlinkBandwidthBits
      * downlinkDelayMs
      * downlinkJitterMs
      * downlinkLossPercent
      * name
      * type
      * uplinkBandwidthBits
      * uplinkDelayMs
      * uplinkJitterMs
      * uplinkLossPercent
    * parsingResultUrl
    * platform
    * radios
      * bluetooth
      * gps
      * nfc
      * wifi
    * result
    * resultCode
    * seed
    * skipAppResign
    * started
    * status
    * stopped
    * testSpecArn
    * totalJobs
    * type
    * webUrl

### GetSuiteRequest
* GetSuiteRequest `object`: Represents a request to the get suite operation.
  * arn **required**

### GetSuiteResult
* GetSuiteResult `object`: Represents the result of a get suite request.
  * suite
    * arn
    * counters
      * errored
      * failed
      * passed
      * skipped
      * stopped
      * total
      * warned
    * created
    * deviceMinutes
      * metered
      * total
      * unmetered
    * message
    * name
    * result
    * started
    * status
    * stopped
    * type

### GetTestGridProjectRequest
* GetTestGridProjectRequest `object`
  * projectArn **required**

### GetTestGridProjectResult
* GetTestGridProjectResult `object`
  * testGridProject
    * arn
    * created
    * description
    * name

### GetTestGridSessionRequest
* GetTestGridSessionRequest `object`
  * projectArn
  * sessionArn
  * sessionId

### GetTestGridSessionResult
* GetTestGridSessionResult `object`
  * testGridSession
    * arn
    * billingMinutes
    * created
    * ended
    * seleniumProperties
    * status

### GetTestRequest
* GetTestRequest `object`: Represents a request to the get test operation.
  * arn **required**

### GetTestResult
* GetTestResult `object`: Represents the result of a get test request.
  * test
    * arn
    * counters
      * errored
      * failed
      * passed
      * skipped
      * stopped
      * total
      * warned
    * created
    * deviceMinutes
      * metered
      * total
      * unmetered
    * message
    * name
    * result
    * started
    * status
    * stopped
    * type

### GetUploadRequest
* GetUploadRequest `object`: Represents a request to the get upload operation.
  * arn **required**

### GetUploadResult
* GetUploadResult `object`: Represents the result of a get upload request.
  * upload
    * arn
    * category
    * contentType
    * created
    * message
    * metadata
    * name
    * status
    * type
    * url

### GetVPCEConfigurationRequest
* GetVPCEConfigurationRequest `object`
  * arn **required**

### GetVPCEConfigurationResult
* GetVPCEConfigurationResult `object`
  * vpceConfiguration
    * arn
    * serviceDnsName
    * vpceConfigurationDescription
    * vpceConfigurationName
    * vpceServiceName

### HostAddress
* HostAddress `string`

### IdempotencyException


### IncompatibilityMessage
* IncompatibilityMessage `object`: Represents information about incompatibility.
  * message
  * type

### IncompatibilityMessages
* IncompatibilityMessages `array`
  * items [IncompatibilityMessage](#incompatibilitymessage)

### InstallToRemoteAccessSessionRequest
* InstallToRemoteAccessSessionRequest `object`: Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session.
  * appArn **required**
  * remoteAccessSessionArn **required**

### InstallToRemoteAccessSessionResult
* InstallToRemoteAccessSessionResult `object`: Represents the response from the server after AWS Device Farm makes a request to install to a remote access session.
  * appUpload
    * arn
    * category
    * contentType
    * created
    * message
    * metadata
    * name
    * status
    * type
    * url

### InstanceLabels
* InstanceLabels `array`
  * items [String](#string)

### InstanceProfile
* InstanceProfile `object`: Represents the instance profile.
  * arn
  * description
  * excludeAppPackagesFromCleanup
    * items [String](#string)
  * name
  * packageCleanup
  * rebootAfterUse

### InstanceProfiles
* InstanceProfiles `array`
  * items [InstanceProfile](#instanceprofile)

### InstanceStatus
* InstanceStatus `string` (values: IN_USE, PREPARING, AVAILABLE, NOT_AVAILABLE)

### Integer
* Integer `integer`

### InteractionMode
* InteractionMode `string` (values: INTERACTIVE, NO_VIDEO, VIDEO_ONLY)

### InternalServiceException


### InvalidOperationException


### IosPaths
* IosPaths `array`
  * items [String](#string)

### Job
* Job `object`: Represents a device.
  * arn
  * counters
    * errored
    * failed
    * passed
    * skipped
    * stopped
    * total
    * warned
  * created
  * device
    * arn
    * availability
    * carrier
    * cpu
      * architecture
      * clock
      * frequency
    * fleetName
    * fleetType
    * formFactor
    * heapSize
    * image
    * instances
      * items [DeviceInstance](#deviceinstance)
    * manufacturer
    * memory
    * model
    * modelId
    * name
    * os
    * platform
    * radio
    * remoteAccessEnabled
    * remoteDebugEnabled
    * resolution
      * height
      * width
  * deviceMinutes
    * metered
    * total
    * unmetered
  * instanceArn
  * message
  * name
  * result
  * started
  * status
  * stopped
  * type
  * videoCapture
  * videoEndpoint

### JobTimeoutMinutes
* JobTimeoutMinutes `integer`

### Jobs
* Jobs `array`
  * items [Job](#job)

### LimitExceededException


### ListArtifactsRequest
* ListArtifactsRequest `object`: Represents a request to the list artifacts operation.
  * arn **required**
  * nextToken
  * type **required**

### ListArtifactsResult
* ListArtifactsResult `object`: Represents the result of a list artifacts operation.
  * artifacts
    * items [Artifact](#artifact)
  * nextToken

### ListDeviceInstancesRequest
* ListDeviceInstancesRequest `object`
  * maxResults
  * nextToken

### ListDeviceInstancesResult
* ListDeviceInstancesResult `object`
  * deviceInstances
    * items [DeviceInstance](#deviceinstance)
  * nextToken

### ListDevicePoolsRequest
* ListDevicePoolsRequest `object`: Represents the result of a list device pools request.
  * arn **required**
  * nextToken
  * type

### ListDevicePoolsResult
* ListDevicePoolsResult `object`: Represents the result of a list device pools request.
  * devicePools
    * items [DevicePool](#devicepool)
  * nextToken

### ListDevicesRequest
* ListDevicesRequest `object`: Represents the result of a list devices request.
  * arn
  * filters
    * items [DeviceFilter](#devicefilter)
  * nextToken

### ListDevicesResult
* ListDevicesResult `object`: Represents the result of a list devices operation.
  * devices
    * items [Device](#device)
  * nextToken

### ListInstanceProfilesRequest
* ListInstanceProfilesRequest `object`
  * maxResults
  * nextToken

### ListInstanceProfilesResult
* ListInstanceProfilesResult `object`
  * instanceProfiles
    * items [InstanceProfile](#instanceprofile)
  * nextToken

### ListJobsRequest
* ListJobsRequest `object`: Represents a request to the list jobs operation.
  * arn **required**
  * nextToken

### ListJobsResult
* ListJobsResult `object`: Represents the result of a list jobs request.
  * jobs
    * items [Job](#job)
  * nextToken

### ListNetworkProfilesRequest
* ListNetworkProfilesRequest `object`
  * arn **required**
  * nextToken
  * type

### ListNetworkProfilesResult
* ListNetworkProfilesResult `object`
  * networkProfiles
    * items [NetworkProfile](#networkprofile)
  * nextToken

### ListOfferingPromotionsRequest
* ListOfferingPromotionsRequest `object`
  * nextToken

### ListOfferingPromotionsResult
* ListOfferingPromotionsResult `object`
  * nextToken
  * offeringPromotions
    * items [OfferingPromotion](#offeringpromotion)

### ListOfferingTransactionsRequest
* ListOfferingTransactionsRequest `object`: Represents the request to list the offering transaction history.
  * nextToken

### ListOfferingTransactionsResult
* ListOfferingTransactionsResult `object`: Returns the transaction log of the specified offerings.
  * nextToken
  * offeringTransactions
    * items [OfferingTransaction](#offeringtransaction)

### ListOfferingsRequest
* ListOfferingsRequest `object`: Represents the request to list all offerings.
  * nextToken

### ListOfferingsResult
* ListOfferingsResult `object`: Represents the return values of the list of offerings.
  * nextToken
  * offerings
    * items [Offering](#offering)

### ListProjectsRequest
* ListProjectsRequest `object`: Represents a request to the list projects operation.
  * arn
  * nextToken

### ListProjectsResult
* ListProjectsResult `object`: Represents the result of a list projects request.
  * nextToken
  * projects
    * items [Project](#project)

### ListRemoteAccessSessionsRequest
* ListRemoteAccessSessionsRequest `object`: Represents the request to return information about the remote access session.
  * arn **required**
  * nextToken

### ListRemoteAccessSessionsResult
* ListRemoteAccessSessionsResult `object`: Represents the response from the server after AWS Device Farm makes a request to return information about the remote access session.
  * nextToken
  * remoteAccessSessions
    * items [RemoteAccessSession](#remoteaccesssession)

### ListRunsRequest
* ListRunsRequest `object`: Represents a request to the list runs operation.
  * arn **required**
  * nextToken

### ListRunsResult
* ListRunsResult `object`: Represents the result of a list runs request.
  * nextToken
  * runs
    * items [Run](#run)

### ListSamplesRequest
* ListSamplesRequest `object`: Represents a request to the list samples operation.
  * arn **required**
  * nextToken

### ListSamplesResult
* ListSamplesResult `object`: Represents the result of a list samples request.
  * nextToken
  * samples
    * items [Sample](#sample)

### ListSuitesRequest
* ListSuitesRequest `object`: Represents a request to the list suites operation.
  * arn **required**
  * nextToken

### ListSuitesResult
* ListSuitesResult `object`: Represents the result of a list suites request.
  * nextToken
  * suites
    * items [Suite](#suite)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceARN **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### ListTestGridProjectsRequest
* ListTestGridProjectsRequest `object`
  * maxResult
  * nextToken

### ListTestGridProjectsResult
* ListTestGridProjectsResult `object`
  * nextToken
  * testGridProjects
    * items [TestGridProject](#testgridproject)

### ListTestGridSessionActionsRequest
* ListTestGridSessionActionsRequest `object`
  * maxResult
  * nextToken
  * sessionArn **required**

### ListTestGridSessionActionsResult
* ListTestGridSessionActionsResult `object`
  * actions
    * items [TestGridSessionAction](#testgridsessionaction)
  * nextToken

### ListTestGridSessionArtifactsRequest
* ListTestGridSessionArtifactsRequest `object`
  * maxResult
  * nextToken
  * sessionArn **required**
  * type

### ListTestGridSessionArtifactsResult
* ListTestGridSessionArtifactsResult `object`
  * artifacts
    * items [TestGridSessionArtifact](#testgridsessionartifact)
  * nextToken

### ListTestGridSessionsRequest
* ListTestGridSessionsRequest `object`
  * creationTimeAfter
  * creationTimeBefore
  * endTimeAfter
  * endTimeBefore
  * maxResult
  * nextToken
  * projectArn **required**
  * status

### ListTestGridSessionsResult
* ListTestGridSessionsResult `object`
  * nextToken
  * testGridSessions
    * items [TestGridSession](#testgridsession)

### ListTestsRequest
* ListTestsRequest `object`: Represents a request to the list tests operation.
  * arn **required**
  * nextToken

### ListTestsResult
* ListTestsResult `object`: Represents the result of a list tests request.
  * nextToken
  * tests
    * items [Test](#test)

### ListUniqueProblemsRequest
* ListUniqueProblemsRequest `object`: Represents a request to the list unique problems operation.
  * arn **required**
  * nextToken

### ListUniqueProblemsResult
* ListUniqueProblemsResult `object`: Represents the result of a list unique problems request.
  * nextToken
  * uniqueProblems

### ListUploadsRequest
* ListUploadsRequest `object`: Represents a request to the list uploads operation.
  * arn **required**
  * nextToken
  * type

### ListUploadsResult
* ListUploadsResult `object`: Represents the result of a list uploads request.
  * nextToken
  * uploads
    * items [Upload](#upload)

### ListVPCEConfigurationsRequest
* ListVPCEConfigurationsRequest `object`
  * maxResults
  * nextToken

### ListVPCEConfigurationsResult
* ListVPCEConfigurationsResult `object`
  * nextToken
  * vpceConfigurations
    * items [VPCEConfiguration](#vpceconfiguration)

### Location
* Location `object`: <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example, 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p>
  * latitude **required**
  * longitude **required**

### Long
* Long `integer`

### MaxPageSize
* MaxPageSize `integer`

### MaxSlotMap
* MaxSlotMap `object`

### Message
* Message `string`

### Metadata
* Metadata `string`

### MonetaryAmount
* MonetaryAmount `object`: A number that represents the monetary amount for an offering or transaction.
  * amount
  * currencyCode

### Name
* Name `string`

### NetworkProfile
* NetworkProfile `object`: An array of settings that describes characteristics of a network profile.
  * arn
  * description
  * downlinkBandwidthBits
  * downlinkDelayMs
  * downlinkJitterMs
  * downlinkLossPercent
  * name
  * type
  * uplinkBandwidthBits
  * uplinkDelayMs
  * uplinkJitterMs
  * uplinkLossPercent

### NetworkProfileType
* NetworkProfileType `string` (values: CURATED, PRIVATE)

### NetworkProfiles
* NetworkProfiles `array`
  * items [NetworkProfile](#networkprofile)

### NotEligibleException


### NotFoundException


### Offering
* Offering `object`: Represents the metadata of a device offering.
  * description
  * id
  * platform
  * recurringCharges
    * items [RecurringCharge](#recurringcharge)
  * type

### OfferingIdentifier
* OfferingIdentifier `string`

### OfferingPromotion
* OfferingPromotion `object`: Represents information about an offering promotion.
  * description
  * id

### OfferingPromotionIdentifier
* OfferingPromotionIdentifier `string`

### OfferingPromotions
* OfferingPromotions `array`
  * items [OfferingPromotion](#offeringpromotion)

### OfferingStatus
* OfferingStatus `object`: The status of the offering.
  * effectiveOn
  * offering
    * description
    * id
    * platform
    * recurringCharges
      * items [RecurringCharge](#recurringcharge)
    * type
  * quantity
  * type

### OfferingStatusMap
* OfferingStatusMap `object`

### OfferingTransaction
* OfferingTransaction `object`: Represents the metadata of an offering transaction.
  * cost
    * amount
    * currencyCode
  * createdOn
  * offeringPromotionId
  * offeringStatus
    * effectiveOn
    * offering
      * description
      * id
      * platform
      * recurringCharges
        * items [RecurringCharge](#recurringcharge)
      * type
    * quantity
    * type
  * transactionId

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

### PackageIds
* PackageIds `array`
  * items [String](#string)

### PaginationToken
* PaginationToken `string`

### PercentInteger
* PercentInteger `integer`

### Problem
* Problem `object`: Represents a specific warning or failure.
  * device
    * arn
    * availability
    * carrier
    * cpu
      * architecture
      * clock
      * frequency
    * fleetName
    * fleetType
    * formFactor
    * heapSize
    * image
    * instances
      * items [DeviceInstance](#deviceinstance)
    * manufacturer
    * memory
    * model
    * modelId
    * name
    * os
    * platform
    * radio
    * remoteAccessEnabled
    * remoteDebugEnabled
    * resolution
      * height
      * width
  * job
    * arn
    * name
  * message
  * result
  * run
    * arn
    * name
  * suite
    * arn
    * name
  * test
    * arn
    * name

### ProblemDetail
* ProblemDetail `object`: Information about a problem detail.
  * arn
  * name

### Problems
* Problems `array`
  * items [Problem](#problem)

### Project
* Project `object`: Represents an operating-system neutral workspace for running and managing tests.
  * arn
  * created
  * defaultJobTimeoutMinutes
  * name

### Projects
* Projects `array`
  * items [Project](#project)

### PurchaseOfferingRequest
* PurchaseOfferingRequest `object`: Represents a request for a purchase offering.
  * offeringId
  * offeringPromotionId
  * quantity

### PurchaseOfferingResult
* PurchaseOfferingResult `object`: The result of the purchase offering (for example, success or failure).
  * offeringTransaction
    * cost
      * amount
      * currencyCode
    * createdOn
    * offeringPromotionId
    * offeringStatus
      * effectiveOn
      * offering
        * description
        * id
        * platform
        * recurringCharges
          * items [RecurringCharge](#recurringcharge)
        * type
      * quantity
      * type
    * transactionId

### PurchasedDevicesMap
* PurchasedDevicesMap `object`

### Radios
* Radios `object`: Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC.
  * bluetooth
  * gps
  * nfc
  * wifi

### RecurringCharge
* RecurringCharge `object`: Specifies whether charges for devices are recurring.
  * cost
    * amount
    * currencyCode
  * frequency

### RecurringChargeFrequency
* RecurringChargeFrequency `string` (values: MONTHLY)

### RecurringCharges
* RecurringCharges `array`
  * items [RecurringCharge](#recurringcharge)

### RemoteAccessSession
* RemoteAccessSession `object`: Represents information about the remote access session.
  * arn
  * billingMethod
  * clientId
  * created
  * device
    * arn
    * availability
    * carrier
    * cpu
      * architecture
      * clock
      * frequency
    * fleetName
    * fleetType
    * formFactor
    * heapSize
    * image
    * instances
      * items [DeviceInstance](#deviceinstance)
    * manufacturer
    * memory
    * model
    * modelId
    * name
    * os
    * platform
    * radio
    * remoteAccessEnabled
    * remoteDebugEnabled
    * resolution
      * height
      * width
  * deviceMinutes
    * metered
    * total
    * unmetered
  * deviceUdid
  * endpoint
  * hostAddress
  * instanceArn
  * interactionMode
  * message
  * name
  * remoteDebugEnabled
  * remoteRecordAppArn
  * remoteRecordEnabled
  * result
  * skipAppResign
  * started
  * status
  * stopped

### RemoteAccessSessions
* RemoteAccessSessions `array`
  * items [RemoteAccessSession](#remoteaccesssession)

### RenewOfferingRequest
* RenewOfferingRequest `object`: A request that represents an offering renewal.
  * offeringId
  * quantity

### RenewOfferingResult
* RenewOfferingResult `object`: The result of a renewal offering.
  * offeringTransaction
    * cost
      * amount
      * currencyCode
    * createdOn
    * offeringPromotionId
    * offeringStatus
      * effectiveOn
      * offering
        * description
        * id
        * platform
        * recurringCharges
          * items [RecurringCharge](#recurringcharge)
        * type
      * quantity
      * type
    * transactionId

### Resolution
* Resolution `object`: Represents the screen resolution of a device in height and width, expressed in pixels.
  * height
  * width

### ResourceDescription
* ResourceDescription `string`

### ResourceId
* ResourceId `string`

### ResourceName
* ResourceName `string`

### Rule
* Rule `object`: Represents a condition for a device pool.
  * attribute
  * operator
  * value

### RuleOperator
* RuleOperator `string` (values: EQUALS, LESS_THAN, LESS_THAN_OR_EQUALS, GREATER_THAN, GREATER_THAN_OR_EQUALS, IN, NOT_IN, CONTAINS)

### Rules
* Rules `array`
  * items [Rule](#rule)

### Run
* Run `object`: Represents a test run on a set of devices with a given app package, test parameters, and so on.
  * appUpload
  * arn
  * billingMethod
  * completedJobs
  * counters
    * errored
    * failed
    * passed
    * skipped
    * stopped
    * total
    * warned
  * created
  * customerArtifactPaths
    * androidPaths
      * items [String](#string)
    * deviceHostPaths
      * items [String](#string)
    * iosPaths
      * items [String](#string)
  * deviceMinutes
    * metered
    * total
    * unmetered
  * devicePoolArn
  * deviceSelectionResult
    * filters
      * items [DeviceFilter](#devicefilter)
    * matchedDevicesCount
    * maxDevices
  * eventCount
  * jobTimeoutMinutes
  * locale
  * location
    * latitude **required**
    * longitude **required**
  * message
  * name
  * networkProfile
    * arn
    * description
    * downlinkBandwidthBits
    * downlinkDelayMs
    * downlinkJitterMs
    * downlinkLossPercent
    * name
    * type
    * uplinkBandwidthBits
    * uplinkDelayMs
    * uplinkJitterMs
    * uplinkLossPercent
  * parsingResultUrl
  * platform
  * radios
    * bluetooth
    * gps
    * nfc
    * wifi
  * result
  * resultCode
  * seed
  * skipAppResign
  * started
  * status
  * stopped
  * testSpecArn
  * totalJobs
  * type
  * webUrl

### Runs
* Runs `array`
  * items [Run](#run)

### Sample
* Sample `object`: Represents a sample of performance data.
  * arn
  * type
  * url

### SampleType
* SampleType `string` (values: CPU, MEMORY, THREADS, RX_RATE, TX_RATE, RX, TX, NATIVE_FRAMES, NATIVE_FPS, NATIVE_MIN_DRAWTIME, NATIVE_AVG_DRAWTIME, NATIVE_MAX_DRAWTIME, OPENGL_FRAMES, OPENGL_FPS, OPENGL_MIN_DRAWTIME, OPENGL_AVG_DRAWTIME, OPENGL_MAX_DRAWTIME)

### Samples
* Samples `array`
  * items [Sample](#sample)

### ScheduleRunConfiguration
* ScheduleRunConfiguration `object`: Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles.
  * auxiliaryApps
    * items [AmazonResourceName](#amazonresourcename)
  * billingMethod
  * customerArtifactPaths
    * androidPaths
      * items [String](#string)
    * deviceHostPaths
      * items [String](#string)
    * iosPaths
      * items [String](#string)
  * extraDataPackageArn
  * locale
  * location
    * latitude **required**
    * longitude **required**
  * networkProfileArn
  * radios
    * bluetooth
    * gps
    * nfc
    * wifi
  * vpceConfigurationArns
    * items [AmazonResourceName](#amazonresourcename)

### ScheduleRunRequest
* ScheduleRunRequest `object`: Represents a request to the schedule run operation.
  * appArn
  * configuration
    * auxiliaryApps
      * items [AmazonResourceName](#amazonresourcename)
    * billingMethod
    * customerArtifactPaths
      * androidPaths
        * items [String](#string)
      * deviceHostPaths
        * items [String](#string)
      * iosPaths
        * items [String](#string)
    * extraDataPackageArn
    * locale
    * location
      * latitude **required**
      * longitude **required**
    * networkProfileArn
    * radios
      * bluetooth
      * gps
      * nfc
      * wifi
    * vpceConfigurationArns
      * items [AmazonResourceName](#amazonresourcename)
  * devicePoolArn
  * deviceSelectionConfiguration
    * filters **required**
      * items [DeviceFilter](#devicefilter)
    * maxDevices **required**
  * executionConfiguration
    * accountsCleanup
    * appPackagesCleanup
    * jobTimeoutMinutes
    * skipAppResign
    * videoCapture
  * name
  * projectArn **required**
  * test **required**
    * parameters
    * filter
    * testPackageArn
    * testSpecArn
    * type **required**

### ScheduleRunResult
* ScheduleRunResult `object`: Represents the result of a schedule run request.
  * run
    * appUpload
    * arn
    * billingMethod
    * completedJobs
    * counters
      * errored
      * failed
      * passed
      * skipped
      * stopped
      * total
      * warned
    * created
    * customerArtifactPaths
      * androidPaths
        * items [String](#string)
      * deviceHostPaths
        * items [String](#string)
      * iosPaths
        * items [String](#string)
    * deviceMinutes
      * metered
      * total
      * unmetered
    * devicePoolArn
    * deviceSelectionResult
      * filters
        * items [DeviceFilter](#devicefilter)
      * matchedDevicesCount
      * maxDevices
    * eventCount
    * jobTimeoutMinutes
    * locale
    * location
      * latitude **required**
      * longitude **required**
    * message
    * name
    * networkProfile
      * arn
      * description
      * downlinkBandwidthBits
      * downlinkDelayMs
      * downlinkJitterMs
      * downlinkLossPercent
      * name
      * type
      * uplinkBandwidthBits
      * uplinkDelayMs
      * uplinkJitterMs
      * uplinkLossPercent
    * parsingResultUrl
    * platform
    * radios
      * bluetooth
      * gps
      * nfc
      * wifi
    * result
    * resultCode
    * seed
    * skipAppResign
    * started
    * status
    * stopped
    * testSpecArn
    * totalJobs
    * type
    * webUrl

### ScheduleRunTest
* ScheduleRunTest `object`: Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>.
  * parameters
  * filter
  * testPackageArn
  * testSpecArn
  * type **required**

### ServiceAccountException


### ServiceDnsName
* ServiceDnsName `string`

### SkipAppResign
* SkipAppResign `boolean`

### SshPublicKey
* SshPublicKey `string`

### StopJobRequest
* StopJobRequest `object`
  * arn **required**

### StopJobResult
* StopJobResult `object`
  * job
    * arn
    * counters
      * errored
      * failed
      * passed
      * skipped
      * stopped
      * total
      * warned
    * created
    * device
      * arn
      * availability
      * carrier
      * cpu
        * architecture
        * clock
        * frequency
      * fleetName
      * fleetType
      * formFactor
      * heapSize
      * image
      * instances
        * items [DeviceInstance](#deviceinstance)
      * manufacturer
      * memory
      * model
      * modelId
      * name
      * os
      * platform
      * radio
      * remoteAccessEnabled
      * remoteDebugEnabled
      * resolution
        * height
        * width
    * deviceMinutes
      * metered
      * total
      * unmetered
    * instanceArn
    * message
    * name
    * result
    * started
    * status
    * stopped
    * type
    * videoCapture
    * videoEndpoint

### StopRemoteAccessSessionRequest
* StopRemoteAccessSessionRequest `object`: Represents the request to stop the remote access session.
  * arn **required**

### StopRemoteAccessSessionResult
* StopRemoteAccessSessionResult `object`: Represents the response from the server that describes the remote access session when AWS Device Farm stops the session.
  * remoteAccessSession
    * arn
    * billingMethod
    * clientId
    * created
    * device
      * arn
      * availability
      * carrier
      * cpu
        * architecture
        * clock
        * frequency
      * fleetName
      * fleetType
      * formFactor
      * heapSize
      * image
      * instances
        * items [DeviceInstance](#deviceinstance)
      * manufacturer
      * memory
      * model
      * modelId
      * name
      * os
      * platform
      * radio
      * remoteAccessEnabled
      * remoteDebugEnabled
      * resolution
        * height
        * width
    * deviceMinutes
      * metered
      * total
      * unmetered
    * deviceUdid
    * endpoint
    * hostAddress
    * instanceArn
    * interactionMode
    * message
    * name
    * remoteDebugEnabled
    * remoteRecordAppArn
    * remoteRecordEnabled
    * result
    * skipAppResign
    * started
    * status
    * stopped

### StopRunRequest
* StopRunRequest `object`: Represents the request to stop a specific run.
  * arn **required**

### StopRunResult
* StopRunResult `object`: Represents the results of your stop run attempt.
  * run
    * appUpload
    * arn
    * billingMethod
    * completedJobs
    * counters
      * errored
      * failed
      * passed
      * skipped
      * stopped
      * total
      * warned
    * created
    * customerArtifactPaths
      * androidPaths
        * items [String](#string)
      * deviceHostPaths
        * items [String](#string)
      * iosPaths
        * items [String](#string)
    * deviceMinutes
      * metered
      * total
      * unmetered
    * devicePoolArn
    * deviceSelectionResult
      * filters
        * items [DeviceFilter](#devicefilter)
      * matchedDevicesCount
      * maxDevices
    * eventCount
    * jobTimeoutMinutes
    * locale
    * location
      * latitude **required**
      * longitude **required**
    * message
    * name
    * networkProfile
      * arn
      * description
      * downlinkBandwidthBits
      * downlinkDelayMs
      * downlinkJitterMs
      * downlinkLossPercent
      * name
      * type
      * uplinkBandwidthBits
      * uplinkDelayMs
      * uplinkJitterMs
      * uplinkLossPercent
    * parsingResultUrl
    * platform
    * radios
      * bluetooth
      * gps
      * nfc
      * wifi
    * result
    * resultCode
    * seed
    * skipAppResign
    * started
    * status
    * stopped
    * testSpecArn
    * totalJobs
    * type
    * webUrl

### String
* String `string`

### Suite
* Suite `object`: Represents a collection of one or more tests.
  * arn
  * counters
    * errored
    * failed
    * passed
    * skipped
    * stopped
    * total
    * warned
  * created
  * deviceMinutes
    * metered
    * total
    * unmetered
  * message
  * name
  * result
  * started
  * status
  * stopped
  * type

### Suites
* Suites `array`
  * items [Suite](#suite)

### Tag
* Tag `object`: The metadata that you apply to a resource to help you categorize and organize it. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters. Tag values can have a maximum length of 256 characters. 
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagOperationException


### TagPolicyException


### TagResourceRequest
* TagResourceRequest `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Test
* Test `object`: Represents a condition that is evaluated.
  * arn
  * counters
    * errored
    * failed
    * passed
    * skipped
    * stopped
    * total
    * warned
  * created
  * deviceMinutes
    * metered
    * total
    * unmetered
  * message
  * name
  * result
  * started
  * status
  * stopped
  * type

### TestGridProject
* TestGridProject `object`: A Selenium testing project. Projects are used to collect and collate sessions.
  * arn
  * created
  * description
  * name

### TestGridProjects
* TestGridProjects `array`
  * items [TestGridProject](#testgridproject)

### TestGridSession
* TestGridSession `object`: A <a>TestGridSession</a> is a single instance of a browser launched from the URL provided by a call to <a>CreateTestGridUrl</a>.
  * arn
  * billingMinutes
  * created
  * ended
  * seleniumProperties
  * status

### TestGridSessionAction
* TestGridSessionAction `object`: An action taken by a <a>TestGridSession</a> browser instance.
  * action
  * duration
  * requestMethod
  * started
  * statusCode

### TestGridSessionActions
* TestGridSessionActions `array`
  * items [TestGridSessionAction](#testgridsessionaction)

### TestGridSessionArtifact
* TestGridSessionArtifact `object`: <p>Artifacts are video and other files that are produced in the process of running a browser in an automated context. </p> <note> <p>Video elements might be broken up into multiple artifacts as they grow in size during creation. </p> </note>
  * filename
  * type
  * url

### TestGridSessionArtifactCategory
* TestGridSessionArtifactCategory `string` (values: VIDEO, LOG)

### TestGridSessionArtifactType
* TestGridSessionArtifactType `string` (values: UNKNOWN, VIDEO, SELENIUM_LOG)

### TestGridSessionArtifacts
* TestGridSessionArtifacts `array`
  * items [TestGridSessionArtifact](#testgridsessionartifact)

### TestGridSessionStatus
* TestGridSessionStatus `string` (values: ACTIVE, CLOSED, ERRORED)

### TestGridSessions
* TestGridSessions `array`
  * items [TestGridSession](#testgridsession)

### TestGridUrlExpiresInSecondsInput
* TestGridUrlExpiresInSecondsInput `integer`

### TestParameters
* TestParameters `object`

### TestType
* TestType `string` (values: BUILTIN_FUZZ, BUILTIN_EXPLORER, WEB_PERFORMANCE_PROFILE, APPIUM_JAVA_JUNIT, APPIUM_JAVA_TESTNG, APPIUM_PYTHON, APPIUM_NODE, APPIUM_RUBY, APPIUM_WEB_JAVA_JUNIT, APPIUM_WEB_JAVA_TESTNG, APPIUM_WEB_PYTHON, APPIUM_WEB_NODE, APPIUM_WEB_RUBY, CALABASH, INSTRUMENTATION, UIAUTOMATION, UIAUTOMATOR, XCTEST, XCTEST_UI, REMOTE_ACCESS_RECORD, REMOTE_ACCESS_REPLAY)

### Tests
* Tests `array`
  * items [Test](#test)

### TooManyTagsException


### TransactionIdentifier
* TransactionIdentifier `string`

### TrialMinutes
* TrialMinutes `object`: Represents information about free trial device minutes for an AWS account.
  * remaining
  * total

### URL
* URL `string`

### UniqueProblem
* UniqueProblem `object`: A collection of one or more problems, grouped by their result.
  * message
  * problems
    * items [Problem](#problem)

### UniqueProblems
* UniqueProblems `array`
  * items [UniqueProblem](#uniqueproblem)

### UniqueProblemsByExecutionResultMap
* UniqueProblemsByExecutionResultMap `object`

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateDeviceInstanceRequest
* UpdateDeviceInstanceRequest `object`
  * arn **required**
  * labels
    * items [String](#string)
  * profileArn

### UpdateDeviceInstanceResult
* UpdateDeviceInstanceResult `object`
  * deviceInstance
    * arn
    * deviceArn
    * instanceProfile
      * arn
      * description
      * excludeAppPackagesFromCleanup
        * items [String](#string)
      * name
      * packageCleanup
      * rebootAfterUse
    * labels
      * items [String](#string)
    * status
    * udid

### UpdateDevicePoolRequest
* UpdateDevicePoolRequest `object`: Represents a request to the update device pool operation.
  * arn **required**
  * clearMaxDevices
  * description
  * maxDevices
  * name
  * rules
    * items [Rule](#rule)

### UpdateDevicePoolResult
* UpdateDevicePoolResult `object`: Represents the result of an update device pool request.
  * devicePool
    * arn
    * description
    * maxDevices
    * name
    * rules
      * items [Rule](#rule)
    * type

### UpdateInstanceProfileRequest
* UpdateInstanceProfileRequest `object`
  * arn **required**
  * description
  * excludeAppPackagesFromCleanup
    * items [String](#string)
  * name
  * packageCleanup
  * rebootAfterUse

### UpdateInstanceProfileResult
* UpdateInstanceProfileResult `object`
  * instanceProfile
    * arn
    * description
    * excludeAppPackagesFromCleanup
      * items [String](#string)
    * name
    * packageCleanup
    * rebootAfterUse

### UpdateNetworkProfileRequest
* UpdateNetworkProfileRequest `object`
  * arn **required**
  * description
  * downlinkBandwidthBits
  * downlinkDelayMs
  * downlinkJitterMs
  * downlinkLossPercent
  * name
  * type
  * uplinkBandwidthBits
  * uplinkDelayMs
  * uplinkJitterMs
  * uplinkLossPercent

### UpdateNetworkProfileResult
* UpdateNetworkProfileResult `object`
  * networkProfile
    * arn
    * description
    * downlinkBandwidthBits
    * downlinkDelayMs
    * downlinkJitterMs
    * downlinkLossPercent
    * name
    * type
    * uplinkBandwidthBits
    * uplinkDelayMs
    * uplinkJitterMs
    * uplinkLossPercent

### UpdateProjectRequest
* UpdateProjectRequest `object`: Represents a request to the update project operation.
  * arn **required**
  * defaultJobTimeoutMinutes
  * name

### UpdateProjectResult
* UpdateProjectResult `object`: Represents the result of an update project request.
  * project
    * arn
    * created
    * defaultJobTimeoutMinutes
    * name

### UpdateTestGridProjectRequest
* UpdateTestGridProjectRequest `object`
  * description
  * name
  * projectArn **required**

### UpdateTestGridProjectResult
* UpdateTestGridProjectResult `object`
  * testGridProject
    * arn
    * created
    * description
    * name

### UpdateUploadRequest
* UpdateUploadRequest `object`
  * arn **required**
  * contentType
  * editContent
  * name

### UpdateUploadResult
* UpdateUploadResult `object`
  * upload
    * arn
    * category
    * contentType
    * created
    * message
    * metadata
    * name
    * status
    * type
    * url

### UpdateVPCEConfigurationRequest
* UpdateVPCEConfigurationRequest `object`
  * arn **required**
  * serviceDnsName
  * vpceConfigurationDescription
  * vpceConfigurationName
  * vpceServiceName

### UpdateVPCEConfigurationResult
* UpdateVPCEConfigurationResult `object`
  * vpceConfiguration
    * arn
    * serviceDnsName
    * vpceConfigurationDescription
    * vpceConfigurationName
    * vpceServiceName

### Upload
* Upload `object`: An app or a set of one or more tests to upload or that have been uploaded.
  * arn
  * category
  * contentType
  * created
  * message
  * metadata
  * name
  * status
  * type
  * url

### UploadCategory
* UploadCategory `string` (values: CURATED, PRIVATE)

### UploadStatus
* UploadStatus `string` (values: INITIALIZED, PROCESSING, SUCCEEDED, FAILED)

### UploadType
* UploadType `string` (values: ANDROID_APP, IOS_APP, WEB_APP, EXTERNAL_DATA, APPIUM_JAVA_JUNIT_TEST_PACKAGE, APPIUM_JAVA_TESTNG_TEST_PACKAGE, APPIUM_PYTHON_TEST_PACKAGE, APPIUM_NODE_TEST_PACKAGE, APPIUM_RUBY_TEST_PACKAGE, APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE, APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE, APPIUM_WEB_PYTHON_TEST_PACKAGE, APPIUM_WEB_NODE_TEST_PACKAGE, APPIUM_WEB_RUBY_TEST_PACKAGE, CALABASH_TEST_PACKAGE, INSTRUMENTATION_TEST_PACKAGE, UIAUTOMATION_TEST_PACKAGE, UIAUTOMATOR_TEST_PACKAGE, XCTEST_TEST_PACKAGE, XCTEST_UI_TEST_PACKAGE, APPIUM_JAVA_JUNIT_TEST_SPEC, APPIUM_JAVA_TESTNG_TEST_SPEC, APPIUM_PYTHON_TEST_SPEC, APPIUM_NODE_TEST_SPEC, APPIUM_RUBY_TEST_SPEC, APPIUM_WEB_JAVA_JUNIT_TEST_SPEC, APPIUM_WEB_JAVA_TESTNG_TEST_SPEC, APPIUM_WEB_PYTHON_TEST_SPEC, APPIUM_WEB_NODE_TEST_SPEC, APPIUM_WEB_RUBY_TEST_SPEC, INSTRUMENTATION_TEST_SPEC, XCTEST_UI_TEST_SPEC)

### Uploads
* Uploads `array`
  * items [Upload](#upload)

### VPCEConfiguration
* VPCEConfiguration `object`: Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration.
  * arn
  * serviceDnsName
  * vpceConfigurationDescription
  * vpceConfigurationName
  * vpceServiceName

### VPCEConfigurationDescription
* VPCEConfigurationDescription `string`

### VPCEConfigurationName
* VPCEConfigurationName `string`

### VPCEConfigurations
* VPCEConfigurations `array`
  * items [VPCEConfiguration](#vpceconfiguration)

### VPCEServiceName
* VPCEServiceName `string`

### VideoCapture
* VideoCapture `boolean`


