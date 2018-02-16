# @datafire/azure_sql_usages

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_usages
```
```js
let azure_sql_usages = require('@datafire/azure_sql_usages').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_usages.SubscriptionUsages_ListByLocation({
  "locationName": "",
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### SubscriptionUsages_ListByLocation
Gets all subscription usage metrics in a given location.


```js
azure_sql_usages.SubscriptionUsages_ListByLocation({
  "locationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: The name of the region where the resource is located.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SubscriptionUsageListResult](#subscriptionusagelistresult)

### SubscriptionUsages_Get
Gets a subscription usage metric.


```js
azure_sql_usages.SubscriptionUsages_Get({
  "locationName": "",
  "usageName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: The name of the region where the resource is located.
  * usageName **required** `string`: Name of usage metric to return.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [SubscriptionUsage](#subscriptionusage)



## Definitions

### ProxyResource
* ProxyResource `object`: ARM proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### SubscriptionUsage
* SubscriptionUsage `object`: Usage Metric of a Subscription in a Location.
  * properties [SubscriptionUsageProperties](#subscriptionusageproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### SubscriptionUsageListResult
* SubscriptionUsageListResult `object`: A list of subscription usage metrics in a location.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [SubscriptionUsage](#subscriptionusage)

### SubscriptionUsageProperties
* SubscriptionUsageProperties `object`: Properties of a subscription usage.
  * currentValue `number`: Current value of the metric.
  * displayName `string`: User-readable name of the metric.
  * limit `number`: Boundary value of the metric.
  * unit `string`: Unit of the metric.


