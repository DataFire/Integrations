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

azure_azsadmin_alert.Alerts_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Alert operation endpoints and objects.

## Actions

### Alerts_List
Returns the list of all alerts in a given location.


```js
azure_azsadmin_alert.Alerts_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location name.
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [AlertList](#alertlist)

### Alerts_Get
Get an alert.


```js
azure_azsadmin_alert.Alerts_Get({
  "subscriptionId": "",
  "location": "",
  "alertName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location name.
  * alertName **required** `string`: Name of the alert.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Alert](#alert)

### Alerts_Close
Close an alert.


```js
azure_azsadmin_alert.Alerts_Close({
  "subscriptionId": "",
  "location": "",
  "alertName": "",
  "api-version": "",
  "user": "",
  "alert": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location name.
  * alertName **required** `string`: Name of the alert.
  * api-version **required** `string`: Client Api Version.
  * user **required** `string`: The username used to perform the operation.
  * alert **required** [Alert](#alert)

#### Output
* output [Alert](#alert)



## Definitions

### Alert
* Alert `object`: This class models an alert resource.
  * properties [AlertModel](#alertmodel)
  * id `string`: URI of the resource.
  * location `string`: Location where resource is location.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### AlertList
* AlertList `object`: A pageable list of Alerts
  * nextLink `string`: Points to the next page.
  * value `array`: Holds all alerts in this page.
    * items [Alert](#alert)

### AlertModel
* AlertModel `object`: Holds Alert data
  * alertId `string`: Gets or sets the id of the alert.
  * alertProperties `object`: Gets or sets properties of the alert.
  * closedByUserAlias `string`: Gets or sets the user alias who closed the alert.
  * closedTimestamp `string`: Gets or sets the closed timestamp of the alert.
  * createdTimestamp `string`: Gets or sets the created timestamp of the alert.
  * description `array`: Gets or sets the description of the alert.
    * items `object`: dictionary
  * faultId `string`: Gets or sets the fault id of the alert.
  * faultTypeId `string`: Gets or sets the fault type id of the alert.
  * impactedResourceDisplayName `string`: Gets or sets the display name for the impacted item.
  * impactedResourceId `string`: Gets or sets the ResourceId for the impacted item.
  * lastUpdatedTimestamp `string`: Gets or sets last updated timestamp of the alert.
  * remediation `array`: Gets or sets the admin friendly remediation instructions for the alert.
    * items `object`: dictionary
  * resourceProviderRegistrationId `string`: Gets or sets the registration id of the service the alert belongs to.
  * resourceRegistrationId `string`: Gets or sets the registration id of the atomic component the alert belongs to.  This is null if not associated with a resource.
  * severity `string`: Gets or sets the severity of the alert.
  * state `string`: Gets or sets the state of the alert.
  * title `string`: Gets or sets the ResourceId for the impacted item.


