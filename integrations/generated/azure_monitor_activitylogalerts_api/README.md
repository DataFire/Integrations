# @datafire/azure_monitor_activitylogalerts_api

Client library for Azure Activity Log Alerts

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_activitylogalerts_api
```
```js
let azure_monitor_activitylogalerts_api = require('@datafire/azure_monitor_activitylogalerts_api').create({
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



## Actions

### ActivityLogAlerts_ListBySubscriptionId
Get a list of all activity log alerts in a subscription.


```js
azure_monitor_activitylogalerts_api.ActivityLogAlerts_ListBySubscriptionId({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ActivityLogAlertList](#activitylogalertlist)

### ActivityLogAlerts_ListByResourceGroup
Get a list of all activity log alerts in a resource group.


```js
azure_monitor_activitylogalerts_api.ActivityLogAlerts_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ActivityLogAlertList](#activitylogalertlist)

### ActivityLogAlerts_Delete
Delete an activity log alert.


```js
azure_monitor_activitylogalerts_api.ActivityLogAlerts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "activityLogAlertName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * activityLogAlertName **required** `string`: The name of the activity log alert.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### ActivityLogAlerts_Get
Get an activity log alert.


```js
azure_monitor_activitylogalerts_api.ActivityLogAlerts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "activityLogAlertName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * activityLogAlertName **required** `string`: The name of the activity log alert.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ActivityLogAlertResource](#activitylogalertresource)

### ActivityLogAlerts_Update
Updates an existing ActivityLogAlertResource's tags. To update other fields use the CreateOrUpdate method.


```js
azure_monitor_activitylogalerts_api.ActivityLogAlerts_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "activityLogAlertName": "",
  "api-version": "",
  "activityLogAlertPatch": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * activityLogAlertName **required** `string`: The name of the activity log alert.
  * api-version **required** `string`: Client Api Version.
  * activityLogAlertPatch **required** [ActivityLogAlertPatchBody](#activitylogalertpatchbody)

#### Output
* output [ActivityLogAlertResource](#activitylogalertresource)

### ActivityLogAlerts_CreateOrUpdate
Create a new activity log alert or update an existing one.


```js
azure_monitor_activitylogalerts_api.ActivityLogAlerts_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "activityLogAlertName": "",
  "api-version": "",
  "activityLogAlert": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * activityLogAlertName **required** `string`: The name of the activity log alert.
  * api-version **required** `string`: Client Api Version.
  * activityLogAlert **required** [ActivityLogAlertResource](#activitylogalertresource)

#### Output
* output [ActivityLogAlertResource](#activitylogalertresource)



## Definitions

### ActivityLogAlert
* ActivityLogAlert `object`: An Azure activity log alert.
  * actions **required** [ActivityLogAlertActionList](#activitylogalertactionlist)
  * condition **required** [ActivityLogAlertAllOfCondition](#activitylogalertallofcondition)
  * description `string`: A description of this activity log alert.
  * enabled `boolean`: Indicates whether this activity log alert is enabled. If an activity log alert is not enabled, then none of its actions will be activated.
  * scopes **required** `array`: A list of resourceIds that will be used as prefixes. The alert will only apply to activityLogs with resourceIds that fall under one of these prefixes. This list must include at least one item.
    * items `string`

### ActivityLogAlertActionGroup
* ActivityLogAlertActionGroup `object`: A pointer to an Azure Action Group.
  * actionGroupId **required** `string`: The resourceId of the action group. This cannot be null or empty.

### ActivityLogAlertActionList
* ActivityLogAlertActionList `object`: A list of activity log alert actions.
  * actionGroups `array`: The list of activity log alerts.
    * items [ActivityLogAlertActionGroup](#activitylogalertactiongroup)

### ActivityLogAlertAllOfCondition
* ActivityLogAlertAllOfCondition `object`: An Activity Log alert condition that is met when all its member conditions are met.
  * allOf **required** `array`: The list of activity log alert conditions.
    * items [ActivityLogAlertLeafCondition](#activitylogalertleafcondition)

### ActivityLogAlertLeafCondition
* ActivityLogAlertLeafCondition `object`: An Activity Log alert condition that is met by comparing an activity log field and value.
  * equals **required** `string`: The field value will be compared to this value (case-insensitive) to determine if the condition is met.
  * field **required** `string`: The name of the field that this condition will examine. The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties.'.

### ActivityLogAlertList
* ActivityLogAlertList `object`: A list of activity log alerts.
  * nextLink `string`: Provides the link to retrieve the next set of elements.
  * value `array`: The list of activity log alerts.
    * items [ActivityLogAlertResource](#activitylogalertresource)

### ActivityLogAlertPatch
* ActivityLogAlertPatch `object`: An Azure activity log alert for patch operations.
  * enabled `boolean`: Indicates whether this activity log alert is enabled. If an activity log alert is not enabled, then none of its actions will be activated.

### ActivityLogAlertPatchBody
* ActivityLogAlertPatchBody `object`: An activity log alert object for the body of patch operations.
  * properties [ActivityLogAlertPatch](#activitylogalertpatch)

### ActivityLogAlertResource
* ActivityLogAlertResource `object`: An activity log alert resource.
  * properties [ActivityLogAlert](#activitylogalert)
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### Resource
* Resource `object`: An azure resource object
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type


