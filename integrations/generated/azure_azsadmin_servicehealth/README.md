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

.then(data => {
  console.log(data);
});
```

## Description

Resource provider health operation endpoints and objects.

## Actions

### ServiceHealths_List
Returns the list of all resource provider health states.


```js
azure_azsadmin_servicehealth.ServiceHealths_List({
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
* output [ServiceHealthList](#servicehealthlist)

### ServiceHealths_Get
Returns the requested service health object.


```js
azure_azsadmin_servicehealth.ServiceHealths_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "serviceHealth": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * location **required** `string`: Name of the region
  * serviceHealth **required** `string`: Service Health name.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ServiceHealth](#servicehealth)



## Definitions

### ServiceHealth
* ServiceHealth `object`: Holds information about the health of a service.
  * properties [ServiceHealthModel](#servicehealthmodel)
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### ServiceHealthList
* ServiceHealthList `object`: Pageable list of service health objects.
  * nextLink `string`: URI of the next page.
  * value `array`: List of service health objects.
    * items [ServiceHealth](#servicehealth)

### ServiceHealthModel
* ServiceHealthModel `object`: Holds information about the health of a service.
  * displayName `string`: Name of the service.
  * infraURI `string`: The route prefix to the service.
  * serviceLocation `string`: Location of the service.
  * alertSummary `object`: Summary of the alerts.
    * criticalAlertCount `integer`: The number of critical alerts for the service.
    * warningAlertCount `integer`: The number of warning alerts for the service.
  * healthState `string`: Health state.
  * namespace `string`: Namespace of the health resource.
  * registrationId `string`: Registration ID.
  * routePrefix `string`: Route prefix.


