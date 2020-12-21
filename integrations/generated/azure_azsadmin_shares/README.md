# @datafire/azure_azsadmin_shares

Client library for StorageManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_shares
```
```js
let azure_azsadmin_shares = require('@datafire/azure_azsadmin_shares').create({
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

The Admin Storage Management Client.

## Actions

### Shares_List
Returns a list of storage shares.


```js
azure_azsadmin_shares.Shares_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "farmId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * resourceGroupName **required** `string`: Resource group name.
  * farmId **required** `string`: Farm Id.
  * api-version **required** `string`: REST Api Version.

#### Output
* output [ShareList](#sharelist)

### Shares_Get
Returns a storage share.


```js
azure_azsadmin_shares.Shares_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "farmId": "",
  "shareName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * resourceGroupName **required** `string`: Resource group name.
  * farmId **required** `string`: Farm Id.
  * shareName **required** `string`: Share name.
  * api-version **required** `string`: REST Api Version.

#### Output
* output [Share](#share)

### Shares_ListMetricDefinitions
Returns a list of metric definitions for a storage share.


```js
azure_azsadmin_shares.Shares_ListMetricDefinitions({
  "subscriptionId": "",
  "resourceGroupName": "",
  "farmId": "",
  "shareName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * resourceGroupName **required** `string`: Resource group name.
  * farmId **required** `string`: Farm Id.
  * shareName **required** `string`: Share name.
  * api-version **required** `string`: REST Api Version.

#### Output
* output `object`: Pageable list of metric definitions.
  * nextLink `string`: URI to the next page.
  * value `array`: List of metric definitions.
    * items `object`: Metric definition.
      * metricAvailabilities `array`: Metric availabilities.
        * items `object`: Metric availability.
          * retention `string`: Retention of metric.
          * timeGrain `string`: Time grain.
      * name `object`: Localizable string.
        * localizedValue `string`: Localized value of the string.
        * value `string`: Value of the string.
      * primaryAggregationType `string` (values: None, Average, Total, Minimum, Maximum, Last): Aggregate type.
      * unit `string` (values: Count, Bytes, Seconds, CountPerSecond, BytesPerSecond): Metric unit.

### Shares_ListMetrics
Returns a list of metrics for a storage share.


```js
azure_azsadmin_shares.Shares_ListMetrics({
  "subscriptionId": "",
  "resourceGroupName": "",
  "farmId": "",
  "shareName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * resourceGroupName **required** `string`: Resource group name.
  * farmId **required** `string`: Farm Id.
  * shareName **required** `string`: Share name.
  * api-version **required** `string`: REST Api Version.

#### Output
* output `object`: Pageable list of metrics.
  * nextLink `string`: URI to the next page.
  * value `array`: List of metrics.
    * items `object`: Metric information.
      * endTime `string`: Metric end time.
      * metricUnit `string` (values: Count, Bytes, Seconds, CountPerSecond, BytesPerSecond): Metric unit.
      * metricValues `array`: List of metric values.
        * items `object`: Metric value.
          * average `number`: Average value of metric.
          * count `integer`: Count of metric values.
          * maximum `number`: Maximum value of metric.
          * minimum `number`: Minimum value of metric.
          * properties `string`: Metric value properties.
          * timeStamp `string`: Timestamp of metric value.
          * total `number`: Total value of metric.
      * name `object`: Localizable string.
        * localizedValue `string`: Localized value of the string.
        * value `string`: Value of the string.
      * startTime `string`: Metric start time.
      * timeGrain `string`: Metric time grain.



## Definitions

### Share
* Share `object`: Storage share.
  * properties [ShareProperties](#shareproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource Name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ShareList
* ShareList `array`: List of storage shares.
  * items [Share](#share)

### ShareProperties
* ShareProperties `object`: Storage share properties.
  * freeCapacity `integer`: The free space of the storage share in bytes.
  * healthStatus `string` (values: Unknown, Healthy, Warning, Critical): Current health status.
  * shareName `string`: The name of the storage share.
  * totalCapacity `integer`: The total capacity of the storage share in bytes.
  * uncPath `string`: The UNC path to the storage share.
  * usedCapacity `integer`: The used capacity of the storage share in bytes.


