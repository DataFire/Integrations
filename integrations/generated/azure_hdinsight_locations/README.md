# @datafire/azure_hdinsight_locations

Client library for HDInsightManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_hdinsight_locations
```
```js
let azure_hdinsight_locations = require('@datafire/azure_hdinsight_locations').create({
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

The HDInsight Management Client.

## Actions

### Locations_ListBillingSpecs
Lists the billingSpecs for the specified subscription and location.


```js
azure_hdinsight_locations.Locations_ListBillingSpecs({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The Azure location (region) for which to make the request.
  * api-version **required** `string`: The HDInsight client API Version.

#### Output
* output [BillingResponseListResult](#billingresponselistresult)

### Locations_GetCapabilities
Gets the capabilities for the specified location.


```js
azure_hdinsight_locations.Locations_GetCapabilities({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The Azure location (region) for which to make the request.
  * api-version **required** `string`: The HDInsight client API Version.

#### Output
* output [CapabilitiesResult](#capabilitiesresult)

### Locations_ListUsages
Lists the usages for the specified location.


```js
azure_hdinsight_locations.Locations_ListUsages({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The Azure location (region) for which to make the request.
  * api-version **required** `string`: The HDInsight client API Version.

#### Output
* output [UsagesListResult](#usageslistresult)



## Definitions

### BillingMeters
* BillingMeters `object`: The billing meters.
  * meter `string`: The HDInsight meter guid.
  * meterParameter `string`: The virtual machine sizes.
  * unit `string`: The unit of meter, VMHours or CoreHours.

### BillingResources
* BillingResources `object`: The billing resources.
  * billingMeters `array`: The billing meter information.
    * items [BillingMeters](#billingmeters)
  * diskBillingMeters `array`: The managed disk billing information.
    * items [DiskBillingMeters](#diskbillingmeters)
  * region `string`: The region or location.

### BillingResponseListResult
* BillingResponseListResult `object`: The response for the operation to get regional billingSpecs for a subscription.
  * billingResources `array`: The billing and managed disk billing resources for a region.
    * items [BillingResources](#billingresources)
  * vmSizeFilters `array`: The virtual machine filtering mode. Effectively this can enabling or disabling the virtual machine sizes in a particular set.
    * items [VmSizeCompatibilityFilterV2](#vmsizecompatibilityfilterv2)
  * vmSizes `array`: The virtual machine sizes to include or exclude.
    * items `string`

### CapabilitiesResult
* CapabilitiesResult `object`: The Get Capabilities operation response.
  * features `array`: The capability features.
    * items `string`
  * quota [QuotaCapability](#quotacapability)
  * regions `object`: The virtual machine size compatibility features.
  * versions `object`: The version capability.
  * vmSize_filters `array`: The virtual machine size compatibility filters.
    * items [VmSizeCompatibilityFilter](#vmsizecompatibilityfilter)
  * vmSizes `object`: The virtual machine sizes.

### DiskBillingMeters
* DiskBillingMeters `object`: The disk billing meters.
  * diskRpMeter `string`: The managed disk meter guid.
  * sku `string`: The managed disk billing sku, P30 or S30.
  * tier `string` (values: Standard, Premium): The managed disk billing tier, Standard or Premium.

### LocalizedName
* LocalizedName `object`: The details about the localizable name of a type of usage.
  * localizedValue `string`: The localized name of the used resource.
  * value `string`: The name of the used resource.

### QuotaCapability
* QuotaCapability `object`: The regional quota capability.
  * cores_used `integer`: The number of cores used in the subscription.
  * max_cores_allowed `integer`: The number of cores that the subscription allowed.
  * regionalQuotas `array`: The list of region quota capabilities.
    * items [RegionalQuotaCapability](#regionalquotacapability)

### RegionalQuotaCapability
* RegionalQuotaCapability `object`: The regional quota capacity.
  * cores_available `integer`: The number of cores available in the region.
  * cores_used `integer`: The number of cores used in the region.
  * region_name `string`: The region name.

### RegionsCapability
* RegionsCapability `object`: The regions capability.
  * available `array`: The list of region capabilities.
    * items `string`

### Usage
* Usage `object`: The details about the usage of a particular limited resource.
  * currentValue `integer`: The current usage.
  * limit `integer`: The maximum allowed usage.
  * name [LocalizedName](#localizedname)
  * unit `string`: The type of measurement for usage.

### UsagesListResult
* UsagesListResult `object`: The response for the operation to get regional usages for a subscription.
  * value `array`: The list of usages.
    * items [Usage](#usage)

### VersionSpec
* VersionSpec `object`: The version properties.
  * componentVersions `object`: The component version property.
  * displayName `string`: The display name
  * friendlyName `string`: The friendly name
  * isDefault `string`: Whether or not the version is the default version.

### VersionsCapability
* VersionsCapability `object`: The version capability.
  * available `array`: The list of version capabilities.
    * items [VersionSpec](#versionspec)

### VmSizeCompatibilityFilter
* VmSizeCompatibilityFilter `object`: The virtual machine type compatibility filter.
  * ClusterFlavors `array`: The list of cluster types available.
    * items `string`
  * ClusterVersions `array`: The list of cluster versions.
    * items `string`
  * FilterMode `string`: The mode for the filter.
  * NodeTypes `array`: The list of node types.
    * items `string`
  * Regions `array`: The list of regions.
    * items `string`
  * vmsizes `array`: The list of virtual machine sizes.
    * items `string`

### VmSizeCompatibilityFilterV2
* VmSizeCompatibilityFilterV2 `object`: This class represent a single filter object that defines a multidimensional set. The dimensions of this set are Regions, ClusterFlavors, NodeTypes and ClusterVersions. The constraint should be defined based on the following: FilterMode (Exclude vs Include), VMSizes (the vm sizes in affect of exclusion/inclusion) and the ordering of the Filters. Later filters override previous settings if conflicted.
  * clusterFlavors `array`: The list of cluster flavors under the effect of the filter.
    * items `string`
  * clusterVersions `array`: The list of cluster versions affected in Major.Minor format.
    * items `string`
  * filterMode `string` (values: Exclude, Include): The filtering mode. Effectively this can enabling or disabling the VM sizes in a particular set.
  * nodeTypes `array`: The list of node types affected by the filter.
    * items `string`
  * osType `array`: The OSType affected, Windows or Linux.
    * items `string` (values: Windows, Linux)
  * regions `array`: The list of regions under the effect of the filter.
    * items `string`
  * vmSizes `array`: The list of virtual machine sizes to include or exclude.
    * items `string`

### VmSizesCapability
* VmSizesCapability `object`: The virtual machine sizes capability.
  * available `array`: The list of virtual machine size capabilities.
    * items `string`


