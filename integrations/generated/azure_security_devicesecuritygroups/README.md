# @datafire/azure_security_devicesecuritygroups

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_devicesecuritygroups
```
```js
let azure_security_devicesecuritygroups = require('@datafire/azure_security_devicesecuritygroups').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### DeviceSecurityGroups_List
Use this method get the list of device security groups for the specified IoT Hub resource.


```js
azure_security_devicesecuritygroups.DeviceSecurityGroups_List({
  "api-version": "",
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * resourceId **required** `string`: The identifier of the resource.

#### Output
* output [DeviceSecurityGroupList](#devicesecuritygrouplist)

### DeviceSecurityGroups_Delete
User this method to deletes the device security group.


```js
azure_security_devicesecuritygroups.DeviceSecurityGroups_Delete({
  "api-version": "",
  "resourceId": "",
  "deviceSecurityGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * resourceId **required** `string`: The identifier of the resource.
  * deviceSecurityGroupName **required** `string`: The name of the device security group. Note that the name of the device security group is case insensitive.

#### Output
*Output schema unknown*

### DeviceSecurityGroups_Get
Use this method to get the device security group for the specified IoT Hub resource.


```js
azure_security_devicesecuritygroups.DeviceSecurityGroups_Get({
  "api-version": "",
  "resourceId": "",
  "deviceSecurityGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * resourceId **required** `string`: The identifier of the resource.
  * deviceSecurityGroupName **required** `string`: The name of the device security group. Note that the name of the device security group is case insensitive.

#### Output
* output [DeviceSecurityGroup](#devicesecuritygroup)

### DeviceSecurityGroups_CreateOrUpdate
Use this method to creates or updates the device security group on a specified IoT Hub resource.


```js
azure_security_devicesecuritygroups.DeviceSecurityGroups_CreateOrUpdate({
  "api-version": "",
  "resourceId": "",
  "deviceSecurityGroupName": "",
  "deviceSecurityGroup": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * resourceId **required** `string`: The identifier of the resource.
  * deviceSecurityGroupName **required** `string`: The name of the device security group. Note that the name of the device security group is case insensitive.
  * deviceSecurityGroup **required** [DeviceSecurityGroup](#devicesecuritygroup)

#### Output
* output [DeviceSecurityGroup](#devicesecuritygroup)



## Definitions

### AllowlistCustomAlertRule
* AllowlistCustomAlertRule `object`: A custom alert rule that checks if a value (depends on the custom alert type) is allowed.
  * allowlistValues **required** `array`: The values to allow. The format of the values depends on the rule type.
    * items `string`
  * ruleType `string` (values: ConnectionToIpNotAllowed, LocalUserNotAllowed, ProcessNotAllowed): The type of the custom alert rule.
  * valueType `string` (values: IpCidr, String): The value type of the items in the list.
  * description `string`: The description of the custom alert.
  * displayName `string`: The display name of the custom alert.
  * isEnabled **required** `boolean`: Status of the custom alert.
  * ruleType **required** `string`: The type of the custom alert rule.

### CustomAlertRule
* CustomAlertRule `object`: A custom alert rule.
  * description `string`: The description of the custom alert.
  * displayName `string`: The display name of the custom alert.
  * isEnabled **required** `boolean`: Status of the custom alert.
  * ruleType **required** `string`: The type of the custom alert rule.

### DenylistCustomAlertRule
* DenylistCustomAlertRule `object`: A custom alert rule that checks if a value (depends on the custom alert type) is denied.
  * denylistValues **required** `array`: The values to deny. The format of the values depends on the rule type.
    * items `string`
  * valueType `string` (values: IpCidr, String): The value type of the items in the list.
  * description `string`: The description of the custom alert.
  * displayName `string`: The display name of the custom alert.
  * isEnabled **required** `boolean`: Status of the custom alert.
  * ruleType **required** `string`: The type of the custom alert rule.

### DeviceSecurityGroup
* DeviceSecurityGroup `object`: The device security group resource
  * properties [DeviceSecurityGroupProperties](#devicesecuritygroupproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### DeviceSecurityGroupList
* DeviceSecurityGroupList `object`: List of device security groups
  * nextLink `string`: The URI to fetch the next page.
  * value `array`: List of device security group objects
    * items [DeviceSecurityGroup](#devicesecuritygroup)

### DeviceSecurityGroupProperties
* DeviceSecurityGroupProperties `object`: describes properties of a security group.
  * allowlistRules `array`: The allow-list custom alert rules.
    * items [AllowlistCustomAlertRule](#allowlistcustomalertrule)
  * denylistRules `array`: The deny-list custom alert rules.
    * items [DenylistCustomAlertRule](#denylistcustomalertrule)
  * thresholdRules `array`: The list of custom alert threshold rules.
    * items [ThresholdCustomAlertRule](#thresholdcustomalertrule)
  * timeWindowRules `array`: The list of custom alert time-window rules.
    * items [TimeWindowCustomAlertRule](#timewindowcustomalertrule)

### ListCustomAlertRule
* ListCustomAlertRule `object`: A List custom alert rule.
  * valueType `string` (values: IpCidr, String): The value type of the items in the list.
  * description `string`: The description of the custom alert.
  * displayName `string`: The display name of the custom alert.
  * isEnabled **required** `boolean`: Status of the custom alert.
  * ruleType **required** `string`: The type of the custom alert rule.

### ThresholdCustomAlertRule
* ThresholdCustomAlertRule `object`: A custom alert rule that checks if a value (depends on the custom alert type) is within the given range.
  * maxThreshold **required** `integer`: The maximum threshold.
  * minThreshold **required** `integer`: The minimum threshold.
  * description `string`: The description of the custom alert.
  * displayName `string`: The display name of the custom alert.
  * isEnabled **required** `boolean`: Status of the custom alert.
  * ruleType **required** `string`: The type of the custom alert rule.

### TimeWindowCustomAlertRule
* TimeWindowCustomAlertRule `object`: A custom alert rule that checks if the number of activities (depends on the custom alert type) in a time window is within the given range.
  * ruleType `string` (values: ActiveConnectionsNotInAllowedRange, AmqpC2DMessagesNotInAllowedRange, MqttC2DMessagesNotInAllowedRange, HttpC2DMessagesNotInAllowedRange, AmqpC2DRejectedMessagesNotInAllowedRange, MqttC2DRejectedMessagesNotInAllowedRange, HttpC2DRejectedMessagesNotInAllowedRange, AmqpD2CMessagesNotInAllowedRange, MqttD2CMessagesNotInAllowedRange, HttpD2CMessagesNotInAllowedRange, DirectMethodInvokesNotInAllowedRange, FailedLocalLoginsNotInAllowedRange, FileUploadsNotInAllowedRange, QueuePurgesNotInAllowedRange, TwinUpdatesNotInAllowedRange, UnauthorizedOperationsNotInAllowedRange): The type of the custom alert rule.
  * timeWindowSize **required** `string`: The time window size in iso8601 format.
  * maxThreshold **required** `integer`: The maximum threshold.
  * minThreshold **required** `integer`: The minimum threshold.
  * description `string`: The description of the custom alert.
  * displayName `string`: The display name of the custom alert.
  * isEnabled **required** `boolean`: Status of the custom alert.
  * ruleType **required** `string`: The type of the custom alert rule.


