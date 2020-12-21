# @datafire/azure_hdinsight_capabilities

Client library for HDInsightManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_hdinsight_capabilities
```
```js
let azure_hdinsight_capabilities = require('@datafire/azure_hdinsight_capabilities').create({
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

### Location_GetCapabilities
Gets the capabilities for the specified location.


```js
azure_hdinsight_capabilities.Location_GetCapabilities({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location to get capabilities for.
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [capabilitiesResult](#capabilitiesresult)



## Definitions

### capabilitiesResult
* capabilitiesResult `object`: The Get Capabilities operation response.
  * features `array`: The capabilty features.
    * items `string`
  * quota [quotaCapability](#quotacapability)
  * regions `object`: The virtual machine size compatibilty features.
  * versions `object`: The version capability.
  * vmSize_filters `array`: The virtual machine size compatibilty filters.
    * items [vmSizeCompatibilityFilter](#vmsizecompatibilityfilter)
  * vmSizes `object`: The virtual machine sizes.

### quotaCapability
* quotaCapability `object`: The regional quota capability.
  * regionalQuotas `array`: The list of region quota capabilities.
    * items [regionalQuotaCapability](#regionalquotacapability)

### regionalQuotaCapability
* regionalQuotaCapability `object`: The regional quota capacity.
  * cores_available `integer`: The number of courses available in the region.
  * cores_used `integer`: The number of cores used in the region.
  * region_name `string`: The region name.

### regionsCapability
* regionsCapability `object`: The regions capability.
  * available `array`: The list of region capabilities.
    * items `string`

### versionSpec
* versionSpec `object`: The version properties.
  * componentVersions `object`: The component version property.
  * displayName `string`: The display name
  * friendlyName `string`: The friendly name
  * isDefault `string`: Whether or not the version is the default version.

### versionsCapability
* versionsCapability `object`: The version capability.
  * available `array`: The list of version capabilities.
    * items [versionSpec](#versionspec)

### vmSizeCompatibilityFilter
* vmSizeCompatibilityFilter `object`: The virtual machine type compatibility filter.
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

### vmSizesCapability
* vmSizesCapability `object`: The virtual machine sizes capability.
  * available `array`: The list of virtual machine size capabilities.
    * items `string`


