# @datafire/amazonaws_devicefarm

Client library for AWS Device Farm

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_devicefarm
```

```js
let datafire = require('datafire');
let amazonaws_devicefarm = require('@datafire/amazonaws_devicefarm').actions;
let context = new datafire.Context();

amazonaws_devicefarm.CreateDevicePool({}, context).then(data => {
  console.log(data);
})
```

## Description
AWS Device Farm is a service that enables mobile app developers to test Android, iOS, and Fire OS apps on physical phones, tablets, and other devices in the cloud.

## Actions
### CreateDevicePool



```js
amazonaws_devicefarm.CreateDevicePool({}, context)
```


### CreateNetworkProfile



```js
amazonaws_devicefarm.CreateNetworkProfile({}, context)
```


### CreateProject



```js
amazonaws_devicefarm.CreateProject({}, context)
```


### CreateRemoteAccessSession



```js
amazonaws_devicefarm.CreateRemoteAccessSession({}, context)
```


### CreateUpload



```js
amazonaws_devicefarm.CreateUpload({}, context)
```


### DeleteDevicePool



```js
amazonaws_devicefarm.DeleteDevicePool({}, context)
```


### DeleteNetworkProfile



```js
amazonaws_devicefarm.DeleteNetworkProfile({}, context)
```


### DeleteProject



```js
amazonaws_devicefarm.DeleteProject({}, context)
```


### DeleteRemoteAccessSession



```js
amazonaws_devicefarm.DeleteRemoteAccessSession({}, context)
```


### DeleteRun



```js
amazonaws_devicefarm.DeleteRun({}, context)
```


### DeleteUpload



```js
amazonaws_devicefarm.DeleteUpload({}, context)
```


### GetAccountSettings



```js
amazonaws_devicefarm.GetAccountSettings({}, context)
```


### GetDevice



```js
amazonaws_devicefarm.GetDevice({}, context)
```


### GetDevicePool



```js
amazonaws_devicefarm.GetDevicePool({}, context)
```


### GetDevicePoolCompatibility



```js
amazonaws_devicefarm.GetDevicePoolCompatibility({}, context)
```


### GetJob



```js
amazonaws_devicefarm.GetJob({}, context)
```


### GetNetworkProfile



```js
amazonaws_devicefarm.GetNetworkProfile({}, context)
```


### GetOfferingStatus



```js
amazonaws_devicefarm.GetOfferingStatus({}, context)
```

#### Parameters
* nextToken (string)

### GetProject



```js
amazonaws_devicefarm.GetProject({}, context)
```


### GetRemoteAccessSession



```js
amazonaws_devicefarm.GetRemoteAccessSession({}, context)
```


### GetRun



```js
amazonaws_devicefarm.GetRun({}, context)
```


### GetSuite



```js
amazonaws_devicefarm.GetSuite({}, context)
```


### GetTest



```js
amazonaws_devicefarm.GetTest({}, context)
```


### GetUpload



```js
amazonaws_devicefarm.GetUpload({}, context)
```


### InstallToRemoteAccessSession



```js
amazonaws_devicefarm.InstallToRemoteAccessSession({}, context)
```


### ListArtifacts



```js
amazonaws_devicefarm.ListArtifacts({}, context)
```

#### Parameters
* nextToken (string)

### ListDevicePools



```js
amazonaws_devicefarm.ListDevicePools({}, context)
```

#### Parameters
* nextToken (string)

### ListDevices



```js
amazonaws_devicefarm.ListDevices({}, context)
```

#### Parameters
* nextToken (string)

### ListJobs



```js
amazonaws_devicefarm.ListJobs({}, context)
```

#### Parameters
* nextToken (string)

### ListNetworkProfiles



```js
amazonaws_devicefarm.ListNetworkProfiles({}, context)
```


### ListOfferingPromotions



```js
amazonaws_devicefarm.ListOfferingPromotions({}, context)
```


### ListOfferingTransactions



```js
amazonaws_devicefarm.ListOfferingTransactions({}, context)
```

#### Parameters
* nextToken (string)

### ListOfferings



```js
amazonaws_devicefarm.ListOfferings({}, context)
```

#### Parameters
* nextToken (string)

### ListProjects



```js
amazonaws_devicefarm.ListProjects({}, context)
```

#### Parameters
* nextToken (string)

### ListRemoteAccessSessions



```js
amazonaws_devicefarm.ListRemoteAccessSessions({}, context)
```


### ListRuns



```js
amazonaws_devicefarm.ListRuns({}, context)
```

#### Parameters
* nextToken (string)

### ListSamples



```js
amazonaws_devicefarm.ListSamples({}, context)
```

#### Parameters
* nextToken (string)

### ListSuites



```js
amazonaws_devicefarm.ListSuites({}, context)
```

#### Parameters
* nextToken (string)

### ListTests



```js
amazonaws_devicefarm.ListTests({}, context)
```

#### Parameters
* nextToken (string)

### ListUniqueProblems



```js
amazonaws_devicefarm.ListUniqueProblems({}, context)
```

#### Parameters
* nextToken (string)

### ListUploads



```js
amazonaws_devicefarm.ListUploads({}, context)
```

#### Parameters
* nextToken (string)

### PurchaseOffering



```js
amazonaws_devicefarm.PurchaseOffering({}, context)
```


### RenewOffering



```js
amazonaws_devicefarm.RenewOffering({}, context)
```


### ScheduleRun



```js
amazonaws_devicefarm.ScheduleRun({}, context)
```


### StopRemoteAccessSession



```js
amazonaws_devicefarm.StopRemoteAccessSession({}, context)
```


### StopRun



```js
amazonaws_devicefarm.StopRun({}, context)
```


### UpdateDevicePool



```js
amazonaws_devicefarm.UpdateDevicePool({}, context)
```


### UpdateNetworkProfile



```js
amazonaws_devicefarm.UpdateNetworkProfile({}, context)
```


### UpdateProject



```js
amazonaws_devicefarm.UpdateProject({}, context)
```


