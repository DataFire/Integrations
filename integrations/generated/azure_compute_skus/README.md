# @datafire/azure_compute_skus

Client library for ComputeManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_compute_skus
```
```js
let azure_compute_skus = require('@datafire/azure_compute_skus').create({
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

The Compute Management Client.

## Actions

### ResourceSkus_List
Gets the list of Microsoft.Compute SKUs available for your Subscription.


```js
azure_compute_skus.ResourceSkus_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $filter `string`: The filter to apply on the operation.

#### Output
* output [ResourceSkusResult](#resourceskusresult)



## Definitions

### ResourceSku
* ResourceSku `object`: Describes an available Compute SKU.
  * apiVersions `array`: The api versions that support this SKU.
    * items `string`
  * capabilities `array`: A name value pair to describe the capability.
    * items [ResourceSkuCapabilities](#resourceskucapabilities)
  * capacity [ResourceSkuCapacity](#resourceskucapacity)
  * costs `array`: Metadata for retrieving price info.
    * items [ResourceSkuCosts](#resourceskucosts)
  * family `string`: The Family of this particular SKU.
  * kind `string`: The Kind of resources that are supported in this SKU.
  * locationInfo `array`: A list of locations and availability zones in those locations where the SKU is available.
    * items [ResourceSkuLocationInfo](#resourceskulocationinfo)
  * locations `array`: The set of locations that the SKU is available.
    * items `string`
  * name `string`: The name of SKU.
  * resourceType `string`: The type of resource the SKU applies to.
  * restrictions `array`: The restrictions because of which SKU cannot be used. This is empty if there are no restrictions.
    * items [ResourceSkuRestrictions](#resourceskurestrictions)
  * size `string`: The Size of the SKU.
  * tier `string`: Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic**

### ResourceSkuCapabilities
* ResourceSkuCapabilities `object`: Describes The SKU capabilities object.
  * name `string`: An invariant to describe the feature.
  * value `string`: An invariant if the feature is measured by quantity.

### ResourceSkuCapacity
* ResourceSkuCapacity `object`: Describes scaling information of a SKU.
  * default `integer`: The default capacity.
  * maximum `integer`: The maximum capacity that can be set.
  * minimum `integer`: The minimum capacity.
  * scaleType `string` (values: Automatic, Manual, None): The scale type applicable to the sku.

### ResourceSkuCosts
* ResourceSkuCosts `object`: Describes metadata for retrieving price info.
  * extendedUnit `string`: An invariant to show the extended unit.
  * meterID `string`: Used for querying price from commerce.
  * quantity `integer`: The multiplier is needed to extend the base metered cost.

### ResourceSkuLocationInfo
* ResourceSkuLocationInfo `object`
  * location `string`: Location of the SKU
  * zoneDetails `array`: Details of capabilities available to a SKU in specific zones.
    * items [ResourceSkuZoneDetails](#resourceskuzonedetails)
  * zones `array`: List of availability zones where the SKU is supported.
    * items `string`

### ResourceSkuRestrictionInfo
* ResourceSkuRestrictionInfo `object`
  * locations `array`: Locations where the SKU is restricted
    * items `string`
  * zones `array`: List of availability zones where the SKU is restricted.
    * items `string`

### ResourceSkuRestrictions
* ResourceSkuRestrictions `object`: Describes scaling information of a SKU.
  * reasonCode `string` (values: QuotaId, NotAvailableForSubscription): The reason for restriction.
  * restrictionInfo [ResourceSkuRestrictionInfo](#resourceskurestrictioninfo)
  * type `string` (values: Location, Zone): The type of restrictions.
  * values `array`: The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted.
    * items `string`

### ResourceSkuZoneDetails
* ResourceSkuZoneDetails `object`: Describes The zonal capabilities of a SKU.
  * capabilities `array`: A list of capabilities that are available for the SKU in the specified list of zones.
    * items [ResourceSkuCapabilities](#resourceskucapabilities)
  * name `array`: The set of zones that the SKU is available in with the specified capabilities.
    * items `string`

### ResourceSkusResult
* ResourceSkusResult `object`: The List Resource Skus operation response.
  * nextLink `string`: The URI to fetch the next page of Resource Skus. Call ListNext() with this URI to fetch the next page of Resource Skus
  * value **required** `array`: The list of skus available for the subscription.
    * items [ResourceSku](#resourcesku)


