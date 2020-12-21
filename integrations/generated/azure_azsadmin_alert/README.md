# @datafire/azure_azsadmin_alert

Client library for InfrastructureInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_alert
```
```js
let azure_azsadmin_alert = require('@datafire/azure_azsadmin_alert').create({
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

Alert operation endpoints and objects.

## Actions

### Alerts_List
Returns the list of all alerts in a given region.


```js
azure_azsadmin_alert.Alerts_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * location **required** `string`: Name of the region
  * api-version **required** `string`: Client API Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [AlertList](#alertlist)

### Alerts_Get
Returns the requested an alert.


```js
azure_azsadmin_alert.Alerts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "alertName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * location **required** `string`: Name of the region
  * alertName **required** `string`: Name of the alert.
  * api-version **required** `string`: Client API Version.

#### Output
* output [Alert](#alert)

### Alerts_Close
Closes the given alert.


```js
azure_azsadmin_alert.Alerts_Close({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "alertName": "",
  "api-version": "",
  "user": "",
  "alert": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * location **required** `string`: Name of the region
  * alertName **required** `string`: Name of the alert.
  * api-version **required** `string`: Client API Version.
  * user **required** `string`: The username used to perform the operation.
  * alert **required** [Alert](#alert)

#### Output
* output [Alert](#alert)

### Alerts_Repair
Repairs an alert.


```js
azure_azsadmin_alert.Alerts_Repair({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "alertName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * location **required** `string`: Name of the region
  * alertName **required** `string`: Name of the alert.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*



## Definitions

### Alert
* Alert `object`: This object represents an alert resource.
  * properties [AlertModel](#alertmodel)
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### AlertList
* AlertList `object`: A pageable list of alerts
  * nextLink `string`: URI to the next page.
  * value `array`: List of alerts.
    * items [Alert](#alert)

### AlertModel
* AlertModel `object`: Contains alert data.
  * alertId `string`: Gets or sets the ID of the alert.
  * alertProperties `object`: Properties of the alert.
  * closedByUserAlias `string`: User alias who closed the alert.
  * closedTimestamp `string`: Timestamp when the alert was closed.
  * createdTimestamp `string`: Timestamp when the alert was created.
  * description `array`: Description of the alert.
    * items `object`: Dictionary of string key-value pairs.
  * faultId `string`: Gets or sets the fault ID of the alert.
  * faultTypeId `string`: Gets or sets the fault type ID of the alert.
  * hasValidRemediationAction `boolean`: Indicates if the alert can be remediated.
  * impactedResourceDisplayName `string`: Display name for the impacted item.
  * impactedResourceId `string`: Gets or sets the Resource ID for the impacted item.
  * lastUpdatedTimestamp `string`: Timestamp when the alert was last updated.
  * remediation `array`: Gets or sets the admin friendly remediation instructions for the alert.
    * items `object`: Dictionary of string key-value pairs.
  * resourceProviderRegistrationId `string`: Gets or sets the registration ID of the service the alert belongs to.
  * resourceRegistrationId `string`: Gets or sets the registration ID of the resource associated with the alert. If the alert is not associated with a resource, the resource registration ID is null.
  * severity `string`: Severity of the alert.
  * state `string`: State of the alert.
  * title `string`: Gets or sets the Resource ID for the impacted item.


