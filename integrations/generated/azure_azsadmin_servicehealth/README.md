# @datafire/azure_azsadmin_servicehealth

Client library for InfrastructureInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_servicehealth
```
```js
let azure_azsadmin_servicehealth = require('@datafire/azure_azsadmin_servicehealth').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_azsadmin_servicehealth.ServiceHealths_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Service health operation endpoints and objects.

## Actions

### ServiceHealths_List
Get a list of all services health


```js
azure_azsadmin_servicehealth.ServiceHealths_List({
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
* output [ServiceHealthList](#servicehealthlist)

### ServiceHealths_Get
Get a services health


```js
azure_azsadmin_servicehealth.ServiceHealths_Get({
  "subscriptionId": "",
  "location": "",
  "serviceHealth": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location name.
  * serviceHealth **required** `string`: Service Health name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ServiceHealth](#servicehealth)



## Definitions

### ServiceHealth
* ServiceHealth `object`: Holds information about a services health.
  * properties [ServiceHealthModel](#servicehealthmodel)
  * id `string`: URI of the resource.
  * location `string`: Location where resource is location.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### ServiceHealthList
* ServiceHealthList `object`: Pageable list of service health instances.
  * nextLink `string`: URI of the next page.
  * value `array`: Array of service health instances.
    * items [ServiceHealth](#servicehealth)

### ServiceHealthModel
* ServiceHealthModel `object`: Holds information about a services health.
  * displayName `string`: Name of the alert.
  * infraURI `string`: The route prefix to the alert.
  * serviceLocation `string`: Location of the service.
  * alertSummary `object`: Summary of the alerts.
    * criticalAlertCount `integer`: How many critical alerts this service has.
    * warningAlertCount `integer`: How many warning alerts this service has.
  * healthState `string`: Gets or sets the health status.
  * namespace `string`: Gets or sets the name space.
  * registrationId `string`: Gets or sets the registration id.
  * routePrefix `string`: Gets or sets the route prefix.


