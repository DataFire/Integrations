# @datafire/azure_sql_capabilities

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_capabilities
```
```js
let azure_sql_capabilities = require('@datafire/azure_sql_capabilities').create({
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

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### Capabilities_ListByLocation
Gets the subscription capabilities available for the specified location.


```js
azure_sql_capabilities.Capabilities_ListByLocation({
  "locationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: The location name whose capabilities are retrieved.
  * include `string` (values: supportedEditions, supportedElasticPoolEditions, supportedManagedInstanceVersions): If specified, restricts the response to only include the selected item.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [LocationCapabilities](#locationcapabilities)



## Definitions

### EditionCapability
* EditionCapability `object`: The edition capability.
  * name `string`: The database edition name.
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * supportedServiceLevelObjectives `array`: The list of supported service objectives for the edition.
    * items [ServiceObjectiveCapability](#serviceobjectivecapability)
  * zoneRedundant `boolean`: Whether or not zone redundancy is supported for the edition.

### ElasticPoolEditionCapability
* ElasticPoolEditionCapability `object`: The elastic pool edition capability.
  * name `string`: The elastic pool edition name.
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * supportedElasticPoolPerformanceLevels `array`: The list of supported elastic pool DTU levels for the edition.
    * items [ElasticPoolPerformanceLevelCapability](#elasticpoolperformancelevelcapability)
  * zoneRedundant `boolean`: Whether or not zone redundancy is supported for the edition.

### ElasticPoolPerDatabaseMaxPerformanceLevelCapability
* ElasticPoolPerDatabaseMaxPerformanceLevelCapability `object`: The max per-database performance level capability.
  * limit `number`: The maximum performance level per database.
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * supportedPerDatabaseMinPerformanceLevels `array`: The list of supported min database performance levels.
    * items [ElasticPoolPerDatabaseMinPerformanceLevelCapability](#elasticpoolperdatabaseminperformancelevelcapability)
  * unit `string` (values: DTU, VCores): Unit type used to measure performance level.

### ElasticPoolPerDatabaseMinPerformanceLevelCapability
* ElasticPoolPerDatabaseMinPerformanceLevelCapability `object`: The minimum per-database performance level capability.
  * limit `number`: The minimum performance level per database.
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * unit `string` (values: DTU, VCores): Unit type used to measure performance level.

### ElasticPoolPerformanceLevelCapability
* ElasticPoolPerformanceLevelCapability `object`: The Elastic Pool performance level capability.
  * includedMaxSize [MaxSizeCapability](#maxsizecapability)
  * maxDatabaseCount `integer`: The maximum number of databases supported.
  * performanceLevel [PerformanceLevelCapability](#performancelevelcapability)
  * reason `string`: The reason for the capability not being available.
  * sku `object`: An ARM Resource SKU.
    * capacity `integer`: Capacity of the particular SKU.
    * family `string`: If the service has different generations of hardware, for the same SKU, then that can be captured here.
    * name **required** `string`: The name of the SKU, typically, a letter + Number code, e.g. P3.
    * size `string`: Size of the particular SKU
    * tier `string`: The tier or edition of the particular SKU, e.g. Basic, Premium.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * supportedLicenseTypes `array`: List of supported license types.
    * items [LicenseTypeCapability](#licensetypecapability)
  * supportedMaxSizes `array`: The list of supported max sizes.
    * items [MaxSizeRangeCapability](#maxsizerangecapability)
  * supportedPerDatabaseMaxPerformanceLevels `array`: The list of supported per database max performance levels.
    * items [ElasticPoolPerDatabaseMaxPerformanceLevelCapability](#elasticpoolperdatabasemaxperformancelevelcapability)
  * supportedPerDatabaseMaxSizes `array`: The list of supported per database max sizes.
    * items [MaxSizeRangeCapability](#maxsizerangecapability)

### LicenseTypeCapability
* LicenseTypeCapability `object`: The license type capability
  * name `string`: License type identifier.
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.

### LocationCapabilities
* LocationCapabilities `object`: The location capability.
  * name `string`: The location name.
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * supportedManagedInstanceVersions `array`: The list of supported managed instance versions.
    * items [ManagedInstanceVersionCapability](#managedinstanceversioncapability)
  * supportedServerVersions `array`: The list of supported server versions.
    * items [ServerVersionCapability](#serverversioncapability)

### LogSizeCapability
* LogSizeCapability `object`: The log size capability.
  * limit `integer`: The log size limit (see 'unit' for the units).
  * unit `string` (values: Megabytes, Gigabytes, Terabytes, Petabytes, Percent): The units that the limit is expressed in.

### ManagedInstanceEditionCapability
* ManagedInstanceEditionCapability `object`: The managed server capability
  * name `string`: The managed server version name.
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * supportedFamilies `array`: The supported families.
    * items [ManagedInstanceFamilyCapability](#managedinstancefamilycapability)

### ManagedInstanceFamilyCapability
* ManagedInstanceFamilyCapability `object`: The managed server family capability.
  * includedMaxSize [MaxSizeCapability](#maxsizecapability)
  * name `string`: Family name.
  * reason `string`: The reason for the capability not being available.
  * sku `string`: SKU name.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * supportedLicenseTypes `array`: List of supported license types.
    * items [LicenseTypeCapability](#licensetypecapability)
  * supportedStorageSizes `array`: Storage size ranges.
    * items [MaxSizeRangeCapability](#maxsizerangecapability)
  * supportedVcoresValues `array`: List of supported virtual cores values.
    * items [ManagedInstanceVcoresCapability](#managedinstancevcorescapability)

### ManagedInstanceVcoresCapability
* ManagedInstanceVcoresCapability `object`: The managed instance virtual cores capability.
  * name `string`: The virtual cores identifier.
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * value `integer`: The virtual cores value.

### ManagedInstanceVersionCapability
* ManagedInstanceVersionCapability `object`: The managed instance capability
  * name `string`: The server version name.
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * supportedEditions `array`: The list of supported managed instance editions.
    * items [ManagedInstanceEditionCapability](#managedinstanceeditioncapability)

### MaxSizeCapability
* MaxSizeCapability `object`: The maximum size capability.
  * limit `integer`: The maximum size limit (see 'unit' for the units).
  * unit `string` (values: Megabytes, Gigabytes, Terabytes, Petabytes): The units that the limit is expressed in.

### MaxSizeRangeCapability
* MaxSizeRangeCapability `object`: The maximum size range capability.
  * logSize [LogSizeCapability](#logsizecapability)
  * maxValue [MaxSizeCapability](#maxsizecapability)
  * minValue [MaxSizeCapability](#maxsizecapability)
  * reason `string`: The reason for the capability not being available.
  * scaleSize [MaxSizeCapability](#maxsizecapability)
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.

### PerformanceLevelCapability
* PerformanceLevelCapability `object`: The performance level capability.
  * unit `string` (values: DTU, VCores): Unit type used to measure performance level.
  * value `number`: Performance level value.

### ServerVersionCapability
* ServerVersionCapability `object`: The server capability
  * name `string`: The server version name.
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * supportedEditions `array`: The list of supported database editions.
    * items [EditionCapability](#editioncapability)
  * supportedElasticPoolEditions `array`: The list of supported elastic pool editions.
    * items [ElasticPoolEditionCapability](#elasticpooleditioncapability)

### ServiceObjectiveCapability
* ServiceObjectiveCapability `object`: The service objectives capability.
  * id `string`: The unique ID of the service objective.
  * includedMaxSize [MaxSizeCapability](#maxsizecapability)
  * name `string`: The service objective name.
  * performanceLevel [PerformanceLevelCapability](#performancelevelcapability)
  * reason `string`: The reason for the capability not being available.
  * sku `object`: An ARM Resource SKU.
    * capacity `integer`: Capacity of the particular SKU.
    * family `string`: If the service has different generations of hardware, for the same SKU, then that can be captured here.
    * name **required** `string`: The name of the SKU, typically, a letter + Number code, e.g. P3.
    * size `string`: Size of the particular SKU
    * tier `string`: The tier or edition of the particular SKU, e.g. Basic, Premium.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * supportedLicenseTypes `array`: List of supported license types.
    * items [LicenseTypeCapability](#licensetypecapability)
  * supportedMaxSizes `array`: The list of supported maximum database sizes.
    * items [MaxSizeRangeCapability](#maxsizerangecapability)


