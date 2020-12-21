# @datafire/azure_azsadmin_location

Client library for SubscriptionsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_location
```
```js
let azure_azsadmin_location = require('@datafire/azure_azsadmin_location').create({
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

The Admin Subscriptions Management Client.

## Actions

### Locations_List
Get a list of all AzureStack location.


```js
azure_azsadmin_location.Locations_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [LocationList](#locationlist)

### Locations_Get
Get the specified location.


```js
azure_azsadmin_location.Locations_Get({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The AzureStack location.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Location](#location)

### Locations_CreateOrUpdate
Updates the specified location.


```js
azure_azsadmin_location.Locations_CreateOrUpdate({
  "subscriptionId": "",
  "location": "",
  "api-version": "",
  "newLocation": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The AzureStack location.
  * api-version **required** `string`: Client Api Version.
  * newLocation **required** [Location](#location)

#### Output
* output [Location](#location)

### Locations_GetOperationsStatus
Get the operation status.


```js
azure_azsadmin_location.Locations_GetOperationsStatus({
  "subscriptionId": "",
  "location": "",
  "operationsStatusName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The AzureStack location.
  * operationsStatusName **required** `string`: The operation status name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationsStatus](#operationsstatus)



## Definitions

### ExtendedErrorInfo
* ExtendedErrorInfo `object`: The extended error information.
  * code `string`: The error code.
  * details [ExtendedErrorInfoList](#extendederrorinfolist)
  * message `string`: The error message.

### ExtendedErrorInfoList
* ExtendedErrorInfoList `object`: List of the extended error information.
  * nextLink `string`: URI to next page.
  * value `array`: List of the extended error information.
    * items [ExtendedErrorInfo](#extendederrorinfo)

### Location
* Location `object`: Contains information about a geographical location where resource providers can be deployed.
  * displayName `string`: Display name of the location.
  * id `string`: Location identifier.
  * latitude `string`: Latitude of the location.
  * longitude `string`: Longitude of the location.
  * name `string`: Location name.

### LocationList
* LocationList `object`: List of locations.
  * nextLink `string`: URI to next page.
  * value `array`: List of locations.
    * items [Location](#location)

### OperationsStatus
* OperationsStatus `object`: A long running operation status.
  * endTime `string`: The end time of the operation.
  * error [ExtendedErrorInfo](#extendederrorinfo)
  * id [OperationsStatusIdentifier](#operationsstatusidentifier)
  * percentComplete `number`: The completion percentage of the operation.
  * properties `object`: The internal operation properties.
  * responseContent `object`: The content of the response.
  * retryAfter `string`: The amount of time clients should wait..
  * startTime `string`: The start time of the operation.
  * status `string`: The status of the operation.
  * terminalHttpStatusCode `string`: The terminal http status code for the operation.

### OperationsStatusIdentifier
* OperationsStatusIdentifier `object`: The admin offer identifier for the location wide SubscriptionsAdminResourceTypes.OperationsStatus resource type.
  * location `string`: The location of the operations status.
  * name `string`: The name of the operations status.
  * subscriptionId `string`: The subscription identifier..


