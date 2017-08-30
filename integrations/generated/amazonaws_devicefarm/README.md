# @datafire/amazonaws_devicefarm

Client library for AWS Device Farm

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_devicefarm
```

```js
let datafire = require('datafire');
let amazonaws_devicefarm = require('@datafire/amazonaws_devicefarm').create();

amazonaws_devicefarm.CreateDevicePool({}).then(data => {
  console.log(data);
})
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

#### Parameters
* description (string)
* name (string) **required**
* projectArn (string) **required**
* rules (array) **required**

### CreateNetworkProfile



```js
amazonaws_devicefarm.CreateNetworkProfile({
  "projectArn": "",
  "name": ""
}, context)
```

#### Parameters
* description (string)
* downlinkBandwidthBits (integer)
* downlinkDelayMs (integer)
* downlinkJitterMs (integer)
* downlinkLossPercent (integer)
* name (string) **required**
* projectArn (string) **required**
* type (string)
* uplinkBandwidthBits (integer)
* uplinkDelayMs (integer)
* uplinkJitterMs (integer)
* uplinkLossPercent (integer)

### CreateProject



```js
amazonaws_devicefarm.CreateProject({
  "name": ""
}, context)
```

#### Parameters
* defaultJobTimeoutMinutes (integer)
* name (string) **required**

### CreateRemoteAccessSession



```js
amazonaws_devicefarm.CreateRemoteAccessSession({
  "projectArn": "",
  "deviceArn": ""
}, context)
```

#### Parameters
* configuration (object) - Creates the configuration settings for a remote access session, including the device model and type.
* deviceArn (string) **required**
* name (string)
* projectArn (string) **required**

### CreateUpload



```js
amazonaws_devicefarm.CreateUpload({
  "projectArn": "",
  "name": "",
  "type": ""
}, context)
```

#### Parameters
* contentType (string)
* name (string) **required**
* projectArn (string) **required**
* type (string) **required**

### DeleteDevicePool



```js
amazonaws_devicefarm.DeleteDevicePool({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### DeleteNetworkProfile



```js
amazonaws_devicefarm.DeleteNetworkProfile({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### DeleteProject



```js
amazonaws_devicefarm.DeleteProject({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### DeleteRemoteAccessSession



```js
amazonaws_devicefarm.DeleteRemoteAccessSession({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### DeleteRun



```js
amazonaws_devicefarm.DeleteRun({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### DeleteUpload



```js
amazonaws_devicefarm.DeleteUpload({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### GetAccountSettings



```js
amazonaws_devicefarm.GetAccountSettings({}, context)
```

#### Parameters
*This action has no parameters*

### GetDevice



```js
amazonaws_devicefarm.GetDevice({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### GetDevicePool



```js
amazonaws_devicefarm.GetDevicePool({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### GetDevicePoolCompatibility



```js
amazonaws_devicefarm.GetDevicePoolCompatibility({
  "devicePoolArn": ""
}, context)
```

#### Parameters
* appArn (string)
* devicePoolArn (string) **required**
* test (object) - Represents additional test settings.
* testType (string)

### GetJob



```js
amazonaws_devicefarm.GetJob({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### GetNetworkProfile



```js
amazonaws_devicefarm.GetNetworkProfile({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### GetOfferingStatus



```js
amazonaws_devicefarm.GetOfferingStatus({}, context)
```

#### Parameters
* nextToken (string)
* nextToken (string)

### GetProject



```js
amazonaws_devicefarm.GetProject({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### GetRemoteAccessSession



```js
amazonaws_devicefarm.GetRemoteAccessSession({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### GetRun



```js
amazonaws_devicefarm.GetRun({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### GetSuite



```js
amazonaws_devicefarm.GetSuite({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### GetTest



```js
amazonaws_devicefarm.GetTest({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### GetUpload



```js
amazonaws_devicefarm.GetUpload({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### InstallToRemoteAccessSession



```js
amazonaws_devicefarm.InstallToRemoteAccessSession({
  "remoteAccessSessionArn": "",
  "appArn": ""
}, context)
```

#### Parameters
* appArn (string) **required**
* remoteAccessSessionArn (string) **required**

### ListArtifacts



```js
amazonaws_devicefarm.ListArtifacts({
  "arn": "",
  "type": ""
}, context)
```

#### Parameters
* nextToken (string)
* arn (string) **required**
* nextToken (string)
* type (string) **required**

### ListDevicePools



```js
amazonaws_devicefarm.ListDevicePools({
  "arn": ""
}, context)
```

#### Parameters
* nextToken (string)
* arn (string) **required**
* nextToken (string)
* type (string)

### ListDevices



```js
amazonaws_devicefarm.ListDevices({}, context)
```

#### Parameters
* nextToken (string)
* arn (string)
* nextToken (string)

### ListJobs



```js
amazonaws_devicefarm.ListJobs({
  "arn": ""
}, context)
```

#### Parameters
* nextToken (string)
* arn (string) **required**
* nextToken (string)

### ListNetworkProfiles



```js
amazonaws_devicefarm.ListNetworkProfiles({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**
* nextToken (string)
* type (string)

### ListOfferingPromotions



```js
amazonaws_devicefarm.ListOfferingPromotions({}, context)
```

#### Parameters
* nextToken (string)

### ListOfferingTransactions



```js
amazonaws_devicefarm.ListOfferingTransactions({}, context)
```

#### Parameters
* nextToken (string)
* nextToken (string)

### ListOfferings



```js
amazonaws_devicefarm.ListOfferings({}, context)
```

#### Parameters
* nextToken (string)
* nextToken (string)

### ListProjects



```js
amazonaws_devicefarm.ListProjects({}, context)
```

#### Parameters
* nextToken (string)
* arn (string)
* nextToken (string)

### ListRemoteAccessSessions



```js
amazonaws_devicefarm.ListRemoteAccessSessions({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**
* nextToken (string)

### ListRuns



```js
amazonaws_devicefarm.ListRuns({
  "arn": ""
}, context)
```

#### Parameters
* nextToken (string)
* arn (string) **required**
* nextToken (string)

### ListSamples



```js
amazonaws_devicefarm.ListSamples({
  "arn": ""
}, context)
```

#### Parameters
* nextToken (string)
* arn (string) **required**
* nextToken (string)

### ListSuites



```js
amazonaws_devicefarm.ListSuites({
  "arn": ""
}, context)
```

#### Parameters
* nextToken (string)
* arn (string) **required**
* nextToken (string)

### ListTests



```js
amazonaws_devicefarm.ListTests({
  "arn": ""
}, context)
```

#### Parameters
* nextToken (string)
* arn (string) **required**
* nextToken (string)

### ListUniqueProblems



```js
amazonaws_devicefarm.ListUniqueProblems({
  "arn": ""
}, context)
```

#### Parameters
* nextToken (string)
* arn (string) **required**
* nextToken (string)

### ListUploads



```js
amazonaws_devicefarm.ListUploads({
  "arn": ""
}, context)
```

#### Parameters
* nextToken (string)
* arn (string) **required**
* nextToken (string)

### PurchaseOffering



```js
amazonaws_devicefarm.PurchaseOffering({}, context)
```

#### Parameters
* offeringId (string)
* offeringPromotionId (string)
* quantity (integer)

### RenewOffering



```js
amazonaws_devicefarm.RenewOffering({}, context)
```

#### Parameters
* offeringId (string)
* quantity (integer)

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

#### Parameters
* appArn (string)
* configuration (object) - Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles.
* devicePoolArn (string) **required**
* executionConfiguration (object) - Represents configuration information about a test run, such as the execution timeout (in minutes).
* name (string)
* projectArn (string) **required**
* test (object) **required** - Represents additional test settings.

### StopRemoteAccessSession



```js
amazonaws_devicefarm.StopRemoteAccessSession({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### StopRun



```js
amazonaws_devicefarm.StopRun({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**

### UpdateDevicePool



```js
amazonaws_devicefarm.UpdateDevicePool({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**
* description (string)
* name (string)
* rules (array)

### UpdateNetworkProfile



```js
amazonaws_devicefarm.UpdateNetworkProfile({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**
* description (string)
* downlinkBandwidthBits (integer)
* downlinkDelayMs (integer)
* downlinkJitterMs (integer)
* downlinkLossPercent (integer)
* name (string)
* type (string)
* uplinkBandwidthBits (integer)
* uplinkDelayMs (integer)
* uplinkJitterMs (integer)
* uplinkLossPercent (integer)

### UpdateProject



```js
amazonaws_devicefarm.UpdateProject({
  "arn": ""
}, context)
```

#### Parameters
* arn (string) **required**
* defaultJobTimeoutMinutes (integer)
* name (string)

