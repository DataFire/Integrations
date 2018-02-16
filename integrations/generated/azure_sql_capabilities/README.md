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

azure_sql_capabilities.Capabilities_ListByLocation({
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
    * items [ServiceLevelObjectiveCapability](#servicelevelobjectivecapability)

### ElasticPoolDtuCapability
* ElasticPoolDtuCapability `object`: The Elastic Pool DTU capability.
  * includedMaxSize [MaxSizeCapability](#maxsizecapability)
  * limit `integer`: The DTU limit for the pool.
  * maxDatabaseCount `integer`: The maximum number of databases supported.
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * supportedMaxSizes `array`: The list of supported max sizes.
    * items [MaxSizeCapability](#maxsizecapability)
  * supportedPerDatabaseMaxDtus `array`: The list of supported per database max DTUs.
    * items [ElasticPoolPerDatabaseMaxDtuCapability](#elasticpoolperdatabasemaxdtucapability)
  * supportedPerDatabaseMaxSizes `array`: The list of supported per database max sizes.
    * items [MaxSizeCapability](#maxsizecapability)

### ElasticPoolEditionCapability
* ElasticPoolEditionCapability `object`: The elastic pool edition capability.
  * name `string`: The elastic pool edition name.
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * supportedElasticPoolDtus `array`: The list of supported elastic pool DTU levels for the edition.
    * items [ElasticPoolDtuCapability](#elasticpooldtucapability)

### ElasticPoolPerDatabaseMaxDtuCapability
* ElasticPoolPerDatabaseMaxDtuCapability `object`: The max per-database DTU capability.
  * limit `integer`: The maximum DTUs per database.
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * supportedPerDatabaseMinDtus `array`: The list of supported min database DTUs.
    * items [ElasticPoolPerDatabaseMinDtuCapability](#elasticpoolperdatabasemindtucapability)

### ElasticPoolPerDatabaseMinDtuCapability
* ElasticPoolPerDatabaseMinDtuCapability `object`: The minimum per-database DTU capability.
  * limit `integer`: The minimum DTUs per database.
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.

### LocationCapabilities
* LocationCapabilities `object`: The location capability.
  * name `string`: The location name.
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * supportedServerVersions `array`: The list of supported server versions.
    * items [ServerVersionCapability](#serverversioncapability)

### MaxSizeCapability
* MaxSizeCapability `object`: The maximum size capability.
  * limit `integer`: The maximum size limit (see 'unit' for the units).
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * unit `string` (values: Megabytes, Gigabytes, Terabytes, Petabytes): The units that the limit is expressed in.

### PerformanceLevelCapability
* PerformanceLevelCapability `object`: The performance level capability.
  * unit `string` (values: DTU): Unit type used to measure service objective performance level.
  * value `integer`: Performance level value.

### ServerVersionCapability
* ServerVersionCapability `object`: The server capability
  * name `string`: The server version name.
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * supportedEditions `array`: The list of supported database editions.
    * items [EditionCapability](#editioncapability)
  * supportedElasticPoolEditions `array`: The list of supported elastic pool editions.
    * items [ElasticPoolEditionCapability](#elasticpooleditioncapability)

### ServiceLevelObjectiveCapability
* ServiceLevelObjectiveCapability `object`: The service objectives capability.
  * id `string`: The unique ID of the service objective.
  * includedMaxSize [MaxSizeCapability](#maxsizecapability)
  * name `string`: The service objective name.
  * performanceLevel [PerformanceLevelCapability](#performancelevelcapability)
  * reason `string`: The reason for the capability not being available.
  * status `string` (values: Visible, Available, Default, Disabled): The status of the capability.
  * supportedMaxSizes `array`: The list of supported maximum database sizes for this service objective.
    * items [MaxSizeCapability](#maxsizecapability)


