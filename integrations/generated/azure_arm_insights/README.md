# @datafire/azure_arm_insights

Client library for InsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_insights
```
```js
let azure_arm_insights = require('@datafire/azure_arm_insights').create();

azure_arm_insights.LogProfiles_List({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### LogProfiles_List
List the log profiles.


```js
azure_arm_insights.LogProfiles_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription Id.

#### Output
* output [LogProfileCollection](#logprofilecollection)

### LogProfiles_Delete
Deletes the log profile.


```js
azure_arm_insights.LogProfiles_Delete({
  "logProfileName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * logProfileName **required** `string`: The name of the log profile.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription Id.

#### Output
*Output schema unknown*

### LogProfiles_Get
Gets the log profile.


```js
azure_arm_insights.LogProfiles_Get({
  "logProfileName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * logProfileName **required** `string`: The name of the log profile.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription Id.

#### Output
* output [LogProfileResource](#logprofileresource)

### LogProfiles_CreateOrUpdate
Create or update a log profile in Azure Monitoring REST API.


```js
azure_arm_insights.LogProfiles_CreateOrUpdate({
  "logProfileName": "",
  "api-version": "",
  "parameters": {
    "properties": null
  },
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * logProfileName **required** `string`: The name of the log profile.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [LogProfileResource](#logprofileresource)
  * subscriptionId **required** `string`: The Azure subscription Id.

#### Output
* output [LogProfileResource](#logprofileresource)



## Definitions

### LogProfileCollection
* LogProfileCollection `object`: Represents a collection of log profiles.
  * value **required** `array`: the values of the log profiles.
    * items [LogProfileResource](#logprofileresource)

### LogProfileProperties
* LogProfileProperties `object`: The log profile properties.
  * categories `array`: the categories of the logs. These categories are created as is convenient to the user. Some values are: 'Write', 'Delete', and/or 'Action.'
    * items `string`
  * locations **required** `array`: List of regions for which Activity Log events should be stored or streamed. It is a comma separated list of valid ARM locations including the 'global' location.
    * items `string`
  * retentionPolicy [RetentionPolicy](#retentionpolicy)
  * serviceBusRuleId `string`: The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'.
  * storageAccountId `string`: the resource id of the storage account to which you would like to send the Activity Log.

### LogProfileResource
* LogProfileResource `object`: The log profile resource.
  * properties **required** [LogProfileProperties](#logprofileproperties)
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### Resource
* Resource `object`: An azure resource object
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### RetentionPolicy
* RetentionPolicy `object`: Specifies the retention policy for the log.
  * days **required** `integer`: the number of days for the retention in days. A value of 0 will retain the events indefinitely.
  * enabled **required** `boolean`: a value indicating whether the retention policy is enabled.


