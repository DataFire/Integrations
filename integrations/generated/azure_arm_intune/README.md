# @datafire/azure_arm_intune

Client library for IntuneResourceManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_intune
```

```js
let datafire = require('datafire');
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

#### Parameters
* api-version (string) **required** - Service Api Version.

### GetLocationByHostName
Returns location for given tenant.


```js
azure_arm_intune.GetLocationByHostName({
  "api-version": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Service Api Version.

### Android_GetAppForMAMPolicy
Get apps for an AndroidMAMPolicy.


```js
azure_arm_intune.Android_GetAppForMAMPolicy({
  "hostName": "",
  "policyName": "",
  "api-version": ""
}, context)
```

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* api-version (string) **required** - Service Api Version.
* $filter (string) - The filter to apply on the operation.
* $top (integer)
* $select (string) - select specific fields in entity.

### Android_GetMAMPolicies
Returns Intune Android policies.


```js
azure_arm_intune.Android_GetMAMPolicies({
  "hostName": "",
  "api-version": ""
}, context)
```

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* api-version (string) **required** - Service Api Version.
* $filter (string) - The filter to apply on the operation.
* $top (integer)
* $select (string) - select specific fields in entity.

### Android_DeleteMAMPolicy
Delete Android Policy


```js
azure_arm_intune.Android_DeleteMAMPolicy({
  "hostName": "",
  "policyName": "",
  "api-version": ""
}, context)
```

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* api-version (string) **required** - Service Api Version.

### Android_GetMAMPolicyByName
Returns AndroidMAMPolicy with given name.


```js
azure_arm_intune.Android_GetMAMPolicyByName({
  "hostName": "",
  "policyName": "",
  "api-version": ""
}, context)
```

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* api-version (string) **required** - Service Api Version.
* $select (string) - select specific fields in entity.

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

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* api-version (string) **required** - Service Api Version.
* parameters (undefined) **required** - Android Policy entity for Intune MAM.

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

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* api-version (string) **required** - Service Api Version.
* parameters (undefined) **required** - Android Policy entity for Intune MAM.

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

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* appName (string) **required** - application unique Name
* api-version (string) **required** - Service Api Version.

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

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* appName (string) **required** - application unique Name
* api-version (string) **required** - Service Api Version.
* parameters (undefined) **required** - MAM Policy request body for properties Intune MAM.

### Android_GetGroupsForMAMPolicy
Returns groups for a given AndroidMAMPolicy.


```js
azure_arm_intune.Android_GetGroupsForMAMPolicy({
  "hostName": "",
  "policyName": "",
  "api-version": ""
}, context)
```

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - policy name for the tenant
* api-version (string) **required** - Service Api Version.

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

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* groupId (string) **required** - application unique Name
* api-version (string) **required** - Service Api Version.

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

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* groupId (string) **required** - group Id
* api-version (string) **required** - Service Api Version.
* parameters (undefined) **required** - MAM Policy request body for properties Intune MAM.

### GetApps
Returns Intune Manageable apps.


```js
azure_arm_intune.GetApps({
  "hostName": "",
  "api-version": ""
}, context)
```

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* api-version (string) **required** - Service Api Version.
* $filter (string) - The filter to apply on the operation.
* $top (integer)
* $select (string) - select specific fields in entity.

### GetMAMFlaggedUsers
Returns Intune flagged user collection


```js
azure_arm_intune.GetMAMFlaggedUsers({
  "hostName": "",
  "api-version": ""
}, context)
```

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* api-version (string) **required** - Service Api Version.
* $filter (string) - The filter to apply on the operation.
* $top (integer)
* $select (string) - select specific fields in entity.

### GetMAMFlaggedUserByName
Returns Intune flagged user details


```js
azure_arm_intune.GetMAMFlaggedUserByName({
  "hostName": "",
  "userName": "",
  "api-version": ""
}, context)
```

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* userName (string) **required** - Flagged userName
* api-version (string) **required** - Service Api Version.
* $select (string) - select specific fields in entity.

### GetMAMUserFlaggedEnrolledApps
Returns Intune flagged enrolled app collection for the User


```js
azure_arm_intune.GetMAMUserFlaggedEnrolledApps({
  "hostName": "",
  "userName": "",
  "api-version": ""
}, context)
```

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* userName (string) **required** - User name for the tenant
* api-version (string) **required** - Service Api Version.
* $filter (string) - The filter to apply on the operation.
* $top (integer)
* $select (string) - select specific fields in entity.

### Ios_GetMAMPolicies
Returns Intune iOSPolicies.


```js
azure_arm_intune.Ios_GetMAMPolicies({
  "hostName": "",
  "api-version": ""
}, context)
```

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* api-version (string) **required** - Service Api Version.
* $filter (string) - The filter to apply on the operation.
* $top (integer)
* $select (string) - select specific fields in entity.

### Ios_DeleteMAMPolicy
Delete Ios Policy


```js
azure_arm_intune.Ios_DeleteMAMPolicy({
  "hostName": "",
  "policyName": "",
  "api-version": ""
}, context)
```

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* api-version (string) **required** - Service Api Version.

### Ios_GetMAMPolicyByName
Returns Intune iOS policies.


```js
azure_arm_intune.Ios_GetMAMPolicyByName({
  "hostName": "",
  "policyName": "",
  "api-version": ""
}, context)
```

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* api-version (string) **required** - Service Api Version.
* $select (string) - select specific fields in entity.

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

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* api-version (string) **required** - Service Api Version.
* parameters (undefined) **required** - iOS Policy entity for Intune MAM.

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

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* api-version (string) **required** - Service Api Version.
* parameters (undefined) **required** - iOS Policy entity for Intune MAM.

### Ios_GetAppForMAMPolicy
Get apps for an iOSMAMPolicy.


```js
azure_arm_intune.Ios_GetAppForMAMPolicy({
  "hostName": "",
  "policyName": "",
  "api-version": ""
}, context)
```

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* api-version (string) **required** - Service Api Version.
* $filter (string) - The filter to apply on the operation.
* $top (integer)
* $select (string) - select specific fields in entity.

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

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* appName (string) **required** - application unique Name
* api-version (string) **required** - Service Api Version.

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

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* appName (string) **required** - application unique Name
* api-version (string) **required** - Service Api Version.
* parameters (undefined) **required** - MAM Policy request body for properties Intune MAM.

### Ios_GetGroupsForMAMPolicy
Returns groups for a given iOSMAMPolicy.


```js
azure_arm_intune.Ios_GetGroupsForMAMPolicy({
  "hostName": "",
  "policyName": "",
  "api-version": ""
}, context)
```

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - policy name for the tenant
* api-version (string) **required** - Service Api Version.

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

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* groupId (string) **required** - application unique Name
* api-version (string) **required** - Service Api Version.

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

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* policyName (string) **required** - Unique name for the policy
* groupId (string) **required** - group Id
* api-version (string) **required** - Service Api Version.
* parameters (undefined) **required** - MAM Policy request body for properties Intune MAM.

### GetOperationResults
Returns operationResults.


```js
azure_arm_intune.GetOperationResults({
  "hostName": "",
  "api-version": ""
}, context)
```

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* api-version (string) **required** - Service Api Version.
* $filter (string) - The filter to apply on the operation.
* $top (integer)
* $select (string) - select specific fields in entity.

### GetMAMStatuses
Returns Intune Tenant level statuses.


```js
azure_arm_intune.GetMAMStatuses({
  "hostName": "",
  "api-version": ""
}, context)
```

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* api-version (string) **required** - Service Api Version.

### GetMAMUserDevices
Get devices for a user.


```js
azure_arm_intune.GetMAMUserDevices({
  "hostName": "",
  "userName": "",
  "api-version": ""
}, context)
```

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* userName (string) **required** - user unique Name
* api-version (string) **required** - Service Api Version.
* $filter (string) - The filter to apply on the operation.
* $top (integer)
* $select (string) - select specific fields in entity.

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

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* userName (string) **required** - unique user name
* deviceName (string) **required** - device name
* api-version (string) **required** - Service Api Version.
* $select (string) - select specific fields in entity.

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

#### Parameters
* hostName (string) **required** - Location hostName for the tenant
* userName (string) **required** - unique user name
* deviceName (string) **required** - device name
* api-version (string) **required** - Service Api Version.

