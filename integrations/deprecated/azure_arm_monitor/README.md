# @datafire/azure_arm_monitor

Client library for MonitorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_monitor
```
```js
let azure_arm_monitor = require('@datafire/azure_arm_monitor').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_monitor.AutoscaleSettings_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### AutoscaleSettings_ListByResourceGroup
Lists the autoscale settings for a resource group


```js
azure_arm_monitor.AutoscaleSettings_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription Id.

#### Output
* output [AutoscaleSettingResourceCollection](#autoscalesettingresourcecollection)

### AutoscaleSettings_Delete
Deletes and autoscale setting


```js
azure_arm_monitor.AutoscaleSettings_Delete({
  "resourceGroupName": "",
  "autoscaleSettingName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * autoscaleSettingName **required** `string`: The autoscale setting name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription Id.

#### Output
*Output schema unknown*

### AutoscaleSettings_Get
Gets an autoscale setting


```js
azure_arm_monitor.AutoscaleSettings_Get({
  "resourceGroupName": "",
  "autoscaleSettingName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * autoscaleSettingName **required** `string`: The autoscale setting name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription Id.

#### Output
* output [AutoscaleSettingResource](#autoscalesettingresource)

### AutoscaleSettings_Update
Updates an existing AutoscaleSettingsResource. To update other fields use the CreateOrUpdate method.


```js
azure_arm_monitor.AutoscaleSettings_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "autoscaleSettingName": "",
  "api-version": "",
  "autoscaleSettingResource": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * autoscaleSettingName **required** `string`: The autoscale setting name.
  * api-version **required** `string`: Client Api Version.
  * autoscaleSettingResource **required** [AutoscaleSettingResourcePatch](#autoscalesettingresourcepatch)

#### Output
* output [AutoscaleSettingResource](#autoscalesettingresource)

### AutoscaleSettings_CreateOrUpdate
Creates or updates an autoscale setting.


```js
azure_arm_monitor.AutoscaleSettings_CreateOrUpdate({
  "resourceGroupName": "",
  "autoscaleSettingName": "",
  "parameters": {
    "properties": null
  },
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * autoscaleSettingName **required** `string`: The autoscale setting name.
  * parameters **required** [AutoscaleSettingResource](#autoscalesettingresource)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription Id.

#### Output
* output [AutoscaleSettingResource](#autoscalesettingresource)



## Definitions

### AutoscaleNotification
* AutoscaleNotification `object`: Autoscale notification.
  * email [EmailNotification](#emailnotification)
  * operation **required** `string` (values: Scale): the operation associated with the notification and its value must be "scale"
  * webhooks `array`: the collection of webhook notifications.
    * items [WebhookNotification](#webhooknotification)

### AutoscaleProfile
* AutoscaleProfile `object`: Autoscale profile.
  * capacity **required** [ScaleCapacity](#scalecapacity)
  * fixedDate [TimeWindow](#timewindow)
  * name **required** `string`: the name of the profile.
  * recurrence [Recurrence](#recurrence)
  * rules **required** `array`: the collection of rules that provide the triggers and parameters for the scaling action. A maximum of 10 rules can be specified.
    * items [ScaleRule](#scalerule)

### AutoscaleSetting
* AutoscaleSetting `object`: A setting that contains all of the configuration for the automatic scaling of a resource.
  * enabled `boolean`: the enabled flag. Specifies whether automatic scaling is enabled for the resource. The default value is 'true'.
  * name `string`: the name of the autoscale setting.
  * notifications `array`: the collection of notifications.
    * items [AutoscaleNotification](#autoscalenotification)
  * profiles **required** `array`: the collection of automatic scaling profiles that specify different scaling parameters for different time periods. A maximum of 20 profiles can be specified.
    * items [AutoscaleProfile](#autoscaleprofile)
  * targetResourceUri `string`: the resource identifier of the resource that the autoscale setting should be added to.

### AutoscaleSettingResource
* AutoscaleSettingResource `object`: The autoscale setting resource.
  * properties **required** [AutoscaleSetting](#autoscalesetting)
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### AutoscaleSettingResourceCollection
* AutoscaleSettingResourceCollection `object`: Represents a collection of autoscale setting resources.
  * nextLink `string`: URL to get the next set of results.
  * value **required** `array`: the values for the autoscale setting resources.
    * items [AutoscaleSettingResource](#autoscalesettingresource)

### AutoscaleSettingResourcePatch
* AutoscaleSettingResourcePatch `object`: The autoscale setting object for patch operations.
  * properties [AutoscaleSetting](#autoscalesetting)

### EmailNotification
* EmailNotification `object`: Email notification of an autoscale event.
  * customEmails `array`: the custom e-mails list. This value can be null or empty, in which case this attribute will be ignored.
    * items `string`
  * sendToSubscriptionAdministrator `boolean`: a value indicating whether to send email to subscription administrator.
  * sendToSubscriptionCoAdministrators `boolean`: a value indicating whether to send email to subscription co-administrators.

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### MetricTrigger
* MetricTrigger `object`: The trigger that results in a scaling action.
  * metricName **required** `string`: the name of the metric that defines what the rule monitors.
  * metricResourceUri **required** `string`: the resource identifier of the resource the rule monitors.
  * operator **required** `string` (values: Equals, NotEquals, GreaterThan, GreaterThanOrEqual, LessThan, LessThanOrEqual): the operator that is used to compare the metric data and the threshold.
  * statistic **required** `string` (values: Average, Min, Max, Sum): the metric statistic type. How the metrics from multiple instances are combined.
  * threshold **required** `number`: the threshold of the metric that triggers the scale action.
  * timeAggregation **required** `string` (values: Average, Minimum, Maximum, Total, Count): time aggregation type. How the data that is collected should be combined over time. The default value is Average.
  * timeGrain **required** `string`: the granularity of metrics the rule monitors. Must be one of the predefined values returned from metric definitions for the metric. Must be between 12 hours and 1 minute.
  * timeWindow **required** `string`: the range of time in which instance data is collected. This value must be greater than the delay in metric collection, which can vary from resource-to-resource. Must be between 12 hours and 5 minutes.

### Recurrence
* Recurrence `object`: The repeating times at which this profile begins. This element is not used if the FixedDate element is used.
  * frequency **required** `string` (values: None, Second, Minute, Hour, Day, Week, Month, Year): the recurrence frequency. How often the schedule profile should take effect. This value must be Week, meaning each week will have the same set of profiles.
  * schedule **required** [RecurrentSchedule](#recurrentschedule)

### RecurrentSchedule
* RecurrentSchedule `object`: The scheduling constraints for when the profile begins.
  * days **required** `array`: the collection of days that the profile takes effect on. Possible values are Sunday through Saturday.
    * items `string`
  * hours **required** `array`: A collection of hours that the profile takes effect on. Values supported are 0 to 23 on the 24-hour clock (AM/PM times are not supported).
    * items `integer`
  * minutes **required** `array`: A collection of minutes at which the profile takes effect at.
    * items `integer`
  * timeZone **required** `string`: the timezone for the hours of the profile. Some examples of valid timezones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time

### Resource
* Resource `object`: An azure resource object
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### ScaleAction
* ScaleAction `object`: The parameters for the scaling action.
  * cooldown **required** `string`: the amount of time to wait since the last scaling action before this action occurs. It must be between 1 week and 1 minute in ISO 8601 format.
  * direction **required** `string` (values: None, Increase, Decrease): the scale direction. Whether the scaling action increases or decreases the number of instances.
  * type **required** `string` (values: ChangeCount, PercentChangeCount, ExactCount): the type of action that should occur when the scale rule fires.
  * value `string`: the number of instances that are involved in the scaling action. This value must be 1 or greater. The default value is 1.

### ScaleCapacity
* ScaleCapacity `object`: The number of instances that can be used during this profile.
  * default **required** `string`: the number of instances that will be set if metrics are not available for evaluation. The default is only used if the current instance count is lower than the default.
  * maximum **required** `string`: the maximum number of instances for the resource. The actual maximum number of instances is limited by the cores that are available in the subscription.
  * minimum **required** `string`: the minimum number of instances for the resource.

### ScaleRule
* ScaleRule `object`: A rule that provide the triggers and parameters for the scaling action.
  * metricTrigger **required** [MetricTrigger](#metrictrigger)
  * scaleAction **required** [ScaleAction](#scaleaction)

### TimeWindow
* TimeWindow `object`: A specific date-time for the profile.
  * end **required** `string`: the end time for the profile in ISO 8601 format.
  * start **required** `string`: the start time for the profile in ISO 8601 format.
  * timeZone `string`: the timezone of the start and end times for the profile. Some examples of valid timezones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time

### WebhookNotification
* WebhookNotification `object`: Webhook notification of an autoscale event.
  * properties `object`: a property bag of settings. This value can be empty.
  * serviceUri `string`: the service address to receive the notification.


