# @datafire/azure_azsadmin_farms

Client library for StorageManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_farms
```
```js
let azure_azsadmin_farms = require('@datafire/azure_azsadmin_farms').create({
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

### Farms_List
Returns a list of all storage farms.


```js
azure_azsadmin_farms.Farms_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * resourceGroupName **required** `string`: Resource group name.
  * api-version **required** `string`: REST Api Version.

#### Output
* output [FarmList](#farmlist)

### Farms_Get
Returns the Storage properties and settings for a specified storage farm.


```js
azure_azsadmin_farms.Farms_Get({
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
* output [Farm](#farm)

### Farms_Update
Update an existing storage farm.


```js
azure_azsadmin_farms.Farms_Update({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "farmId": "",
  "farmObject": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * api-version **required** `string`: REST Api Version.
  * resourceGroupName **required** `string`: Resource group name.
  * farmId **required** `string`: Farm Id.
  * farmObject **required** [Farm](#farm)

#### Output
* output [Farm](#farm)

### Farms_Create
Create a new storage farm.


```js
azure_azsadmin_farms.Farms_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "farmId": "",
  "api-version": "",
  "farmObject": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * resourceGroupName **required** `string`: Resource group name.
  * farmId **required** `string`: Farm Id.
  * api-version **required** `string`: REST Api Version.
  * farmObject **required** [FarmCreationProperties](#farmcreationproperties)

#### Output
* output [Farm](#farm)

### Farms_ListMetricDefinitions
Returns a list of metric definitions for a storage farm.


```js
azure_azsadmin_farms.Farms_ListMetricDefinitions({
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

### Farms_ListMetrics
Returns a list of storage farm metrics.


```js
azure_azsadmin_farms.Farms_ListMetrics({
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

### Farms_StartGarbageCollection
Start garbage collection on deleted storage objects.


```js
azure_azsadmin_farms.Farms_StartGarbageCollection({
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
*Output schema unknown*

### Farms_GetGarbageCollectionState
Returns the state of the garbage collection job.


```js
azure_azsadmin_farms.Farms_GetGarbageCollectionState({
  "subscriptionId": "",
  "resourceGroupName": "",
  "farmId": "",
  "api-version": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * resourceGroupName **required** `string`: Resource group name.
  * farmId **required** `string`: Farm Id.
  * api-version **required** `string`: REST Api Version.
  * operationId **required** `string`: Operation Id.

#### Output
* output `string`



## Definitions

### Farm
* Farm `object`: Storage farm.
  * properties [FarmProperties](#farmproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource Name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### FarmCreationProperties
* FarmCreationProperties `object`: Storage farm properties.
  * properties [SettingAccessString](#settingaccessstring)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource Name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### FarmList
* FarmList `object`: Pageable list of storage farms.
  * nextLink `string`: URI to the next page.
  * value `array`: List of storage farms.
    * items [Farm](#farm)

### FarmProperties
* FarmProperties `object`: The properties of storage farm.
  * farmId `string`: Farm identifier.
  * settings [FarmSettings](#farmsettings)
  * settingsStore `string`: The settings of storage farm.
  * version `string`: Resource version.

### FarmSettings
* FarmSettings `object`: Storage farm settings.
  * bandwidthThrottleIsEnabled `boolean`: Switch of bandwidth throttle enablement.
  * corsAllowedOriginsList `string`: The list of allowed origins.
  * dataCenterUriHostSuffixes `string`: The suffixes of URI of hosts in data center.
  * defaultEgressThresholdInGbps `number`: Default egress threshold (in Gbps).
  * defaultIngressThresholdInGbps `number`: Default ingress threshold (in Gbps).
  * defaultIntranetEgressThresholdInGbps `number`: Default Intranet egress threshold (in Gbps).
  * defaultIntranetIngressThresholdInGbps `number`: Default Intranet ingress threshold (in Gbps).
  * defaultRequestThresholdInTps `number`: Default request threshold (in TPS).
  * defaultThrottleProbabilityDecayIntervalInSeconds `integer`: Interval (in seconds) of default throttle probability decay.
  * defaultTotalEgressThresholdInGbps `number`: Default total egress threshold (in Gbps).
  * defaultTotalIngressThresholdInGbps `number`: Default total ingress threshold (in Gbps).
  * feedbackRefreshIntervalInSeconds `integer`: Interval (in seconds) of feedback refresh.
  * gracePeriodForFullThrottlingInRefreshIntervals `integer`: Grace period for full throttling in refresh intervals.
  * gracePeriodMaxThrottleProbability `number`: Maximum probability of throttle in grace period.
  * hostStyleHttpPort `integer`: Host style HTTP port.
  * hostStyleHttpsPort `integer`: Host style HTTPs port.
  * minimumEgressThresholdInGbps `number`: Minimum egress threshold (in Gbps).
  * minimumIngressThresholdInGbps `number`: Minimum ingress threshold (in Gbps).
  * minimumIntranetEgressThresholdInGbps `number`: Minimum Intranet egress threshold (in Gbps).
  * minimumIntranetIngressThresholdInGbps `number`: Minimum Intranet ingress threshold (in Gbps).
  * minimumRequestThresholdInTps `number`: Minimum request threshold (in TPS).
  * minimumTotalEgressThresholdInGbps `number`: Minimum total egress threshold (in Gbp
  * minimumTotalIngressThresholdInGbps `number`: Minimum total ingress threshold (in Gbps).
  * numberOfAccountsToSync `integer`: Number of accounts to sync.
  * overallEgressThresholdInGbps `number`: Overall egress threshold (in Gbps).
  * overallIngressThresholdInGbps `number`: Overall ingress threshold (in Gbps)
  * overallIntranetEgressThresholdInGbps `number`: Overall Intranet egress threshold (in Gbps).
  * overallIntranetIngressThresholdInGbps `number`: Overall Intranet ingress threshold (in Gbps).
  * overallRequestThresholdInTps `number`: Overall request threshold (in TPS).
  * overallTotalEgressThresholdInGbps `number`: Overall total egress threshold (in Gbps).
  * overallTotalIngressThresholdInGbps `number`: Overall total ingress threshold (in Gbps).
  * retentionPeriodForDeletedStorageAccountsInDays `integer`: The retention period (in days) for deleted storage account.
  * settingsPollingIntervalInSecond `integer`: The polling interval (in second).
  * toleranceFactorForEgress `number`: Tolerance factor for egress.
  * toleranceFactorForIngress `number`: Tolerance factor for ingress.
  * toleranceFactorForIntranetEgress `number`: Tolerance factor for Intranet egress.
  * toleranceFactorForIntranetIngress `number`: Tolerance factor for Intranet ingress.
  * toleranceFactorForTotalEgress `number`: Tolerance factor for total egress.
  * toleranceFactorForTotalIngress `number`: Tolerance factor for total ingress.
  * toleranceFactorForTps `number`: Tolerance factor for TPS.
  * usageCollectionIntervalInSeconds `integer`: Interval (in seconds) of storage usage collection.

### SettingAccessString
* SettingAccessString `object`: Setting access string.
  * settingAccessString `string`: Setting access string.


