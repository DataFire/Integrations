# @datafire/azure_monitor_alertrulesincidents_api

Client library for MonitorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_alertrulesincidents_api
```
```js
let azure_monitor_alertrulesincidents_api = require('@datafire/azure_monitor_alertrulesincidents_api').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_monitor_alertrulesincidents_api.AlertRuleIncidents_ListByAlertRule({
  "resourceGroupName": "",
  "ruleName": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### AlertRuleIncidents_ListByAlertRule
Gets a list of incidents associated to an alert rule


```js
azure_monitor_alertrulesincidents_api.AlertRuleIncidents_ListByAlertRule({
  "resourceGroupName": "",
  "ruleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * ruleName **required** `string`: The name of the rule.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription Id.

#### Output
* output [IncidentListResult](#incidentlistresult)

### AlertRuleIncidents_Get
Gets an incident associated to an alert rule


```js
azure_monitor_alertrulesincidents_api.AlertRuleIncidents_Get({
  "resourceGroupName": "",
  "ruleName": "",
  "incidentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * ruleName **required** `string`: The name of the rule.
  * incidentName **required** `string`: The name of the incident to retrieve.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription Id.

#### Output
* output [Incident](#incident)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### Incident
* Incident `object`: An alert incident indicates the activation status of an alert rule.
  * activatedTime `string`: The time at which the incident was activated in ISO8601 format.
  * isActive `boolean`: A boolean to indicate whether the incident is active or resolved.
  * name `string`: Incident name.
  * resolvedTime `string`: The time at which the incident was resolved in ISO8601 format. If null, it means the incident is still active.
  * ruleName `string`: Rule name that is associated with the incident.

### IncidentListResult
* IncidentListResult `object`: The List incidents operation response.
  * value `array`: the incident collection.
    * items [Incident](#incident)


