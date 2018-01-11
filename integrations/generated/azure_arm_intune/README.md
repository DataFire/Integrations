# @datafire/azure_arm_intune

Client library for IntuneResourceManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_intune
```
```js
let azure_arm_intune = require('@datafire/azure_arm_intune').create();

azure_arm_intune.GetLocations({}).then(data => {
  console.log(data);
})
```

## Description

Microsoft.Intune Resource provider Api features in the swagger-2.0 specification

## Actions

### GetLocations
Returns location for user tenant.


```js
azure_arm_intune.GetLocations({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Service Api Version.

#### Output
* output [LocationCollection](#locationcollection)

### GetLocationByHostName
Returns location for given tenant.


```js
azure_arm_intune.GetLocationByHostName({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Service Api Version.

#### Output
* output [Location](#location)

### Android_GetAppForMAMPolicy
Get apps for an AndroidMAMPolicy.


```js
azure_arm_intune.Android_GetAppForMAMPolicy({
  "hostName": "",
  "policyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * api-version **required** `string`: Service Api Version.
  * $filter `string`: The filter to apply on the operation.
  * $top `integer`
  * $select `string`: select specific fields in entity.

#### Output
* output [ApplicationCollection](#applicationcollection)

### Android_GetMAMPolicies
Returns Intune Android policies.


```js
azure_arm_intune.Android_GetMAMPolicies({
  "hostName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * api-version **required** `string`: Service Api Version.
  * $filter `string`: The filter to apply on the operation.
  * $top `integer`
  * $select `string`: select specific fields in entity.

#### Output
* output [AndroidMAMPolicyCollection](#androidmampolicycollection)

### Android_DeleteMAMPolicy
Delete Android Policy


```js
azure_arm_intune.Android_DeleteMAMPolicy({
  "hostName": "",
  "policyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * api-version **required** `string`: Service Api Version.

#### Output
*Output schema unknown*

### Android_GetMAMPolicyByName
Returns AndroidMAMPolicy with given name.


```js
azure_arm_intune.Android_GetMAMPolicyByName({
  "hostName": "",
  "policyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * api-version **required** `string`: Service Api Version.
  * $select `string`: select specific fields in entity.

#### Output
* output [AndroidMAMPolicy](#androidmampolicy)

### Android_PatchMAMPolicy
Patch AndroidMAMPolicy.


```js
azure_arm_intune.Android_PatchMAMPolicy({
  "hostName": "",
  "policyName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * api-version **required** `string`: Service Api Version.
  * parameters **required** [AndroidMAMPolicy](#androidmampolicy)

#### Output
* output [AndroidMAMPolicy](#androidmampolicy)

### Android_CreateOrUpdateMAMPolicy
Creates or updates AndroidMAMPolicy.


```js
azure_arm_intune.Android_CreateOrUpdateMAMPolicy({
  "hostName": "",
  "policyName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * api-version **required** `string`: Service Api Version.
  * parameters **required** [AndroidMAMPolicy](#androidmampolicy)

#### Output
* output [AndroidMAMPolicy](#androidmampolicy)

### Android_DeleteAppForMAMPolicy
Delete App for Android Policy


```js
azure_arm_intune.Android_DeleteAppForMAMPolicy({
  "hostName": "",
  "policyName": "",
  "appName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * appName **required** `string`: application unique Name
  * api-version **required** `string`: Service Api Version.

#### Output
*Output schema unknown*

### Android_AddAppForMAMPolicy
Add app to an AndroidMAMPolicy.


```js
azure_arm_intune.Android_AddAppForMAMPolicy({
  "hostName": "",
  "policyName": "",
  "appName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * appName **required** `string`: application unique Name
  * api-version **required** `string`: Service Api Version.
  * parameters **required** [MAMPolicyAppIdOrGroupIdPayload](#mampolicyappidorgroupidpayload)

#### Output
*Output schema unknown*

### Android_GetGroupsForMAMPolicy
Returns groups for a given AndroidMAMPolicy.


```js
azure_arm_intune.Android_GetGroupsForMAMPolicy({
  "hostName": "",
  "policyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: policy name for the tenant
  * api-version **required** `string`: Service Api Version.

#### Output
* output [GroupsCollection](#groupscollection)

### Android_DeleteGroupForMAMPolicy
Delete Group for Android Policy


```js
azure_arm_intune.Android_DeleteGroupForMAMPolicy({
  "hostName": "",
  "policyName": "",
  "groupId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * groupId **required** `string`: application unique Name
  * api-version **required** `string`: Service Api Version.

#### Output
*Output schema unknown*

### Android_AddGroupForMAMPolicy
Add group to an AndroidMAMPolicy.


```js
azure_arm_intune.Android_AddGroupForMAMPolicy({
  "hostName": "",
  "policyName": "",
  "groupId": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * groupId **required** `string`: group Id
  * api-version **required** `string`: Service Api Version.
  * parameters **required** [MAMPolicyAppIdOrGroupIdPayload](#mampolicyappidorgroupidpayload)

#### Output
*Output schema unknown*

### GetApps
Returns Intune Manageable apps.


```js
azure_arm_intune.GetApps({
  "hostName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * api-version **required** `string`: Service Api Version.
  * $filter `string`: The filter to apply on the operation.
  * $top `integer`
  * $select `string`: select specific fields in entity.

#### Output
* output [ApplicationCollection](#applicationcollection)

### GetMAMFlaggedUsers
Returns Intune flagged user collection


```js
azure_arm_intune.GetMAMFlaggedUsers({
  "hostName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * api-version **required** `string`: Service Api Version.
  * $filter `string`: The filter to apply on the operation.
  * $top `integer`
  * $select `string`: select specific fields in entity.

#### Output
* output [FlaggedUserCollection](#flaggedusercollection)

### GetMAMFlaggedUserByName
Returns Intune flagged user details


```js
azure_arm_intune.GetMAMFlaggedUserByName({
  "hostName": "",
  "userName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * userName **required** `string`: Flagged userName
  * api-version **required** `string`: Service Api Version.
  * $select `string`: select specific fields in entity.

#### Output
* output [FlaggedUser](#flaggeduser)

### GetMAMUserFlaggedEnrolledApps
Returns Intune flagged enrolled app collection for the User


```js
azure_arm_intune.GetMAMUserFlaggedEnrolledApps({
  "hostName": "",
  "userName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * userName **required** `string`: User name for the tenant
  * api-version **required** `string`: Service Api Version.
  * $filter `string`: The filter to apply on the operation.
  * $top `integer`
  * $select `string`: select specific fields in entity.

#### Output
* output [FlaggedEnrolledAppCollection](#flaggedenrolledappcollection)

### Ios_GetMAMPolicies
Returns Intune iOSPolicies.


```js
azure_arm_intune.Ios_GetMAMPolicies({
  "hostName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * api-version **required** `string`: Service Api Version.
  * $filter `string`: The filter to apply on the operation.
  * $top `integer`
  * $select `string`: select specific fields in entity.

#### Output
* output [IOSMAMPolicyCollection](#iosmampolicycollection)

### Ios_DeleteMAMPolicy
Delete Ios Policy


```js
azure_arm_intune.Ios_DeleteMAMPolicy({
  "hostName": "",
  "policyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * api-version **required** `string`: Service Api Version.

#### Output
*Output schema unknown*

### Ios_GetMAMPolicyByName
Returns Intune iOS policies.


```js
azure_arm_intune.Ios_GetMAMPolicyByName({
  "hostName": "",
  "policyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * api-version **required** `string`: Service Api Version.
  * $select `string`: select specific fields in entity.

#### Output
* output [iOSMAMPolicy](#iosmampolicy)

### Ios_PatchMAMPolicy
 patch an iOSMAMPolicy.


```js
azure_arm_intune.Ios_PatchMAMPolicy({
  "hostName": "",
  "policyName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * api-version **required** `string`: Service Api Version.
  * parameters **required** [iOSMAMPolicy](#iosmampolicy)

#### Output
* output [iOSMAMPolicy](#iosmampolicy)

### Ios_CreateOrUpdateMAMPolicy
Creates or updates iOSMAMPolicy.


```js
azure_arm_intune.Ios_CreateOrUpdateMAMPolicy({
  "hostName": "",
  "policyName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * api-version **required** `string`: Service Api Version.
  * parameters **required** [iOSMAMPolicy](#iosmampolicy)

#### Output
* output [iOSMAMPolicy](#iosmampolicy)

### Ios_GetAppForMAMPolicy
Get apps for an iOSMAMPolicy.


```js
azure_arm_intune.Ios_GetAppForMAMPolicy({
  "hostName": "",
  "policyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * api-version **required** `string`: Service Api Version.
  * $filter `string`: The filter to apply on the operation.
  * $top `integer`
  * $select `string`: select specific fields in entity.

#### Output
* output [ApplicationCollection](#applicationcollection)

### Ios_DeleteAppForMAMPolicy
Delete App for Ios Policy


```js
azure_arm_intune.Ios_DeleteAppForMAMPolicy({
  "hostName": "",
  "policyName": "",
  "appName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * appName **required** `string`: application unique Name
  * api-version **required** `string`: Service Api Version.

#### Output
*Output schema unknown*

### Ios_AddAppForMAMPolicy
Add app to an iOSMAMPolicy.


```js
azure_arm_intune.Ios_AddAppForMAMPolicy({
  "hostName": "",
  "policyName": "",
  "appName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * appName **required** `string`: application unique Name
  * api-version **required** `string`: Service Api Version.
  * parameters **required** [MAMPolicyAppIdOrGroupIdPayload](#mampolicyappidorgroupidpayload)

#### Output
*Output schema unknown*

### Ios_GetGroupsForMAMPolicy
Returns groups for a given iOSMAMPolicy.


```js
azure_arm_intune.Ios_GetGroupsForMAMPolicy({
  "hostName": "",
  "policyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: policy name for the tenant
  * api-version **required** `string`: Service Api Version.

#### Output
* output [GroupsCollection](#groupscollection)

### Ios_DeleteGroupForMAMPolicy
Delete Group for iOS Policy


```js
azure_arm_intune.Ios_DeleteGroupForMAMPolicy({
  "hostName": "",
  "policyName": "",
  "groupId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * groupId **required** `string`: application unique Name
  * api-version **required** `string`: Service Api Version.

#### Output
*Output schema unknown*

### Ios_AddGroupForMAMPolicy
Add group to an iOSMAMPolicy.


```js
azure_arm_intune.Ios_AddGroupForMAMPolicy({
  "hostName": "",
  "policyName": "",
  "groupId": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * policyName **required** `string`: Unique name for the policy
  * groupId **required** `string`: group Id
  * api-version **required** `string`: Service Api Version.
  * parameters **required** [MAMPolicyAppIdOrGroupIdPayload](#mampolicyappidorgroupidpayload)

#### Output
*Output schema unknown*

### GetOperationResults
Returns operationResults.


```js
azure_arm_intune.GetOperationResults({
  "hostName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * api-version **required** `string`: Service Api Version.
  * $filter `string`: The filter to apply on the operation.
  * $top `integer`
  * $select `string`: select specific fields in entity.

#### Output
* output [OperationResultCollection](#operationresultcollection)

### GetMAMStatuses
Returns Intune Tenant level statuses.


```js
azure_arm_intune.GetMAMStatuses({
  "hostName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * api-version **required** `string`: Service Api Version.

#### Output
* output [StatusesDefault](#statusesdefault)

### GetMAMUserDevices
Get devices for a user.


```js
azure_arm_intune.GetMAMUserDevices({
  "hostName": "",
  "userName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * userName **required** `string`: user unique Name
  * api-version **required** `string`: Service Api Version.
  * $filter `string`: The filter to apply on the operation.
  * $top `integer`
  * $select `string`: select specific fields in entity.

#### Output
* output [DeviceCollection](#devicecollection)

### GetMAMUserDeviceByDeviceName
Get a unique device for a user.


```js
azure_arm_intune.GetMAMUserDeviceByDeviceName({
  "hostName": "",
  "userName": "",
  "deviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * userName **required** `string`: unique user name
  * deviceName **required** `string`: device name
  * api-version **required** `string`: Service Api Version.
  * $select `string`: select specific fields in entity.

#### Output
* output [Device](#device)

### WipeMAMUserDevice
Wipe a device for a user.


```js
azure_arm_intune.WipeMAMUserDevice({
  "hostName": "",
  "userName": "",
  "deviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * hostName **required** `string`: Location hostName for the tenant
  * userName **required** `string`: unique user name
  * deviceName **required** `string`: device name
  * api-version **required** `string`: Service Api Version.

#### Output
* output [WipeDeviceOperationResult](#wipedeviceoperationresult)



## Definitions

### AndroidMAMPolicy
* AndroidMAMPolicy `object`: Android Policy entity for Intune MAM.
  * properties [AndroidMAMPolicyProperties](#androidmampolicyproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource name
  * tags `object`: Resource Tags
  * type `string`: Resource type

### AndroidMAMPolicyCollection
* AndroidMAMPolicyCollection `object`
  * nextlink `string`: Gets the URL to get the next set of results.
  * value **required** `array`
    * items [AndroidMAMPolicy](#androidmampolicy)

### AndroidMAMPolicyProperties
* AndroidMAMPolicyProperties `object`: Intune MAM iOS Policy Properties.
  * fileEncryption `string` (values: required, notRequired)
  * screenCapture `string` (values: allow, block)
  * accessRecheckOfflineTimeout `string`
  * accessRecheckOnlineTimeout `string`
  * appSharingFromLevel `string` (values: none, policyManagedApps, allApps)
  * appSharingToLevel `string` (values: none, policyManagedApps, allApps)
  * authentication `string` (values: required, notRequired)
  * clipboardSharingLevel `string` (values: blocked, policyManagedApps, policyManagedAppsWithPasteIn, allApps)
  * dataBackup `string` (values: allow, block)
  * description `string`
  * deviceCompliance `string` (values: enable, disable)
  * fileSharingSaveAs `string` (values: allow, block)
  * friendlyName **required** `string`
  * groupStatus `string` (values: notTargeted, targeted)
  * lastModifiedTime `string`
  * managedBrowser `string` (values: required, notRequired)
  * numOfApps `integer`
  * offlineWipeTimeout `string`
  * pin `string` (values: required, notRequired)
  * pinNumRetry `integer`

### Application
* Application `object`: Application entity for Intune MAM.
  * properties [ApplicationProperties](#applicationproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource name
  * tags `object`: Resource Tags
  * type `string`: Resource type

### ApplicationCollection
* ApplicationCollection `object`
  * nextlink `string`: Gets the URL to get the next set of results.
  * value **required** `array`
    * items [Application](#application)

### ApplicationProperties
* ApplicationProperties `object`
  * appId `string`
  * friendlyName **required** `string`
  * platform **required** `string` (values: ios, android, windows)

### Device
* Device `object`: Device entity for Intune.
  * properties [DeviceProperties](#deviceproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource name
  * tags `object`: Resource Tags
  * type `string`: Resource type

### DeviceCollection
* DeviceCollection `object`
  * nextlink `string`: Gets the URL to get the next set of results.
  * value **required** `array`
    * items [Device](#device)

### DeviceProperties
* DeviceProperties `object`
  * deviceType **required** `string`
  * friendlyName **required** `string`
  * platform **required** `string`
  * platformVersion **required** `string`
  * userId **required** `string`

### Error
* Error `object`
  * code **required** `string`
  * message **required** `string`

### FlaggedEnrolledApp
* FlaggedEnrolledApp `object`: Flagged Enrolled App for the given tenant.
  * properties [FlaggedEnrolledAppProperties](#flaggedenrolledappproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource name
  * tags `object`: Resource Tags
  * type `string`: Resource type

### FlaggedEnrolledAppCollection
* FlaggedEnrolledAppCollection `object`: Flagged Enrolled App collection for the given tenant.
  * nextlink `string`: Gets the URL to get the next set of results.
  * value **required** `array`
    * items [FlaggedEnrolledApp](#flaggedenrolledapp)

### FlaggedEnrolledAppError
* FlaggedEnrolledAppError `object`
  * errorCode `string`
  * severity `string`

### FlaggedEnrolledAppProperties
* FlaggedEnrolledAppProperties `object`
  * deviceType `string`
  * errors `array`
    * items [FlaggedEnrolledAppError](#flaggedenrolledapperror)
  * friendlyName `string`
  * lastModifiedTime `string`
  * platform `string`

### FlaggedUser
* FlaggedUser `object`: Flagged user for the given tenant.
  * properties [FlaggedUserProperties](#flaggeduserproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource name
  * tags `object`: Resource Tags
  * type `string`: Resource type

### FlaggedUserCollection
* FlaggedUserCollection `object`: Flagged user collection for the given tenant.
  * nextlink `string`: Gets the URL to get the next set of results.
  * value **required** `array`
    * items [FlaggedUser](#flaggeduser)

### FlaggedUserProperties
* FlaggedUserProperties `object`
  * errorCount `integer`
  * friendlyName `string`

### GroupItem
* GroupItem `object`: Group entity for Intune MAM.
  * properties [GroupProperties](#groupproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource name
  * tags `object`: Resource Tags
  * type `string`: Resource type

### GroupProperties
* GroupProperties `object`
  * friendlyName **required** `string`

### GroupsCollection
* GroupsCollection `object`
  * nextlink `string`: Gets the URL to get the next set of results.
  * value **required** `array`
    * items [GroupItem](#groupitem)

### IOSMAMPolicyCollection
* IOSMAMPolicyCollection `object`
  * nextlink `string`: Gets the URL to get the next set of results.
  * value **required** `array`
    * items [iOSMAMPolicy](#iosmampolicy)

### Location
* Location `object`: Location entity for given tenant.
  * properties [LocationProperties](#locationproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource name
  * tags `object`: Resource Tags
  * type `string`: Resource type

### LocationCollection
* LocationCollection `object`
  * nextlink `string`: Gets the URL to get the next set of results.
  * value **required** `array`
    * items [Location](#location)

### LocationProperties
* LocationProperties `object`
  * hostName **required** `string`

### MAMPolicyAppIdOrGroupIdPayload
* MAMPolicyAppIdOrGroupIdPayload `object`: MAM Policy request body for properties Intune MAM.
  * properties [MAMPolicyAppOrGroupIdProperties](#mampolicyapporgroupidproperties)

### MAMPolicyAppOrGroupIdProperties
* MAMPolicyAppOrGroupIdProperties `object`: Android Policy request body for Intune MAM.
  * url **required** `string`

### MAMPolicyProperties
* MAMPolicyProperties `object`
  * accessRecheckOfflineTimeout `string`
  * accessRecheckOnlineTimeout `string`
  * appSharingFromLevel `string` (values: none, policyManagedApps, allApps)
  * appSharingToLevel `string` (values: none, policyManagedApps, allApps)
  * authentication `string` (values: required, notRequired)
  * clipboardSharingLevel `string` (values: blocked, policyManagedApps, policyManagedAppsWithPasteIn, allApps)
  * dataBackup `string` (values: allow, block)
  * description `string`
  * deviceCompliance `string` (values: enable, disable)
  * fileSharingSaveAs `string` (values: allow, block)
  * friendlyName **required** `string`
  * groupStatus `string` (values: notTargeted, targeted)
  * lastModifiedTime `string`
  * managedBrowser `string` (values: required, notRequired)
  * numOfApps `integer`
  * offlineWipeTimeout `string`
  * pin `string` (values: required, notRequired)
  * pinNumRetry `integer`

### OperationResult
* OperationResult `object`: OperationResult entity for Intune.
  * properties [OperationResultProperties](#operationresultproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource name
  * tags `object`: Resource Tags
  * type `string`: Resource type

### OperationResultCollection
* OperationResultCollection `object`
  * nextlink `string`: Gets the URL to get the next set of results.
  * value **required** `array`
    * items [OperationResult](#operationresult)

### OperationResultProperties
* OperationResultProperties `object`
  * category `string`
  * friendlyName **required** `string`
  * lastModifiedTime `string`
  * operationMetadata **required** `array`
    * items [operationMetadataProperties](#operationmetadataproperties)
  * state `string`

### Resource
* Resource `object`
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource name
  * tags `object`: Resource Tags
  * type `string`: Resource type

### StatusesDefault
* StatusesDefault `object`: Default Statuses entity for the given tenant.
  * nextlink `string`: Gets the URL to get the next set of results.
  * properties [StatusesProperties](#statusesproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource name
  * tags `object`: Resource Tags
  * type `string`: Resource type

### StatusesProperties
* StatusesProperties `object`
  * deployedPolicies `integer`
  * enrolledUsers `integer`
  * flaggedUsers `integer`
  * lastModifiedTime `string`
  * policyAppliedUsers `integer`
  * status `string`
  * wipeFailedApps `integer`
  * wipePendingApps `integer`
  * wipeSucceededApps `integer`

### WipeDeviceOperationResult
* WipeDeviceOperationResult `object`: Device entity for Intune.
  * properties [WipeDeviceOperationResultProperties](#wipedeviceoperationresultproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource name
  * tags `object`: Resource Tags
  * type `string`: Resource type

### WipeDeviceOperationResultProperties
* WipeDeviceOperationResultProperties `object`
  * value **required** `string`

### iOSMAMPolicy
* iOSMAMPolicy `object`: iOS Policy entity for Intune MAM.
  * properties [iOSMAMPolicyProperties](#iosmampolicyproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource name
  * tags `object`: Resource Tags
  * type `string`: Resource type

### iOSMAMPolicyProperties
* iOSMAMPolicyProperties `object`: Intune MAM iOS Policy Properties.
  * fileEncryptionLevel `string` (values: deviceLocked, deviceLockedExceptFilesOpen, afterDeviceRestart, useDeviceSettings)
  * touchId `string` (values: enable, disable)
  * accessRecheckOfflineTimeout `string`
  * accessRecheckOnlineTimeout `string`
  * appSharingFromLevel `string` (values: none, policyManagedApps, allApps)
  * appSharingToLevel `string` (values: none, policyManagedApps, allApps)
  * authentication `string` (values: required, notRequired)
  * clipboardSharingLevel `string` (values: blocked, policyManagedApps, policyManagedAppsWithPasteIn, allApps)
  * dataBackup `string` (values: allow, block)
  * description `string`
  * deviceCompliance `string` (values: enable, disable)
  * fileSharingSaveAs `string` (values: allow, block)
  * friendlyName **required** `string`
  * groupStatus `string` (values: notTargeted, targeted)
  * lastModifiedTime `string`
  * managedBrowser `string` (values: required, notRequired)
  * numOfApps `integer`
  * offlineWipeTimeout `string`
  * pin `string` (values: required, notRequired)
  * pinNumRetry `integer`

### operationMetadataProperties
* operationMetadataProperties `object`
  * name **required** `string`
  * value **required** `string`


