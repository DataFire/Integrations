# @datafire/azure_apimanagement_apimregions

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimregions
```
```js
let azure_apimanagement_apimregions = require('@datafire/azure_apimanagement_apimregions').create({
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

Use these REST APIs for performing operations in Azure API Management deployment.

## Actions

### Region_ListByService
Lists all azure regions in which the service exists.


```js
azure_apimanagement_apimregions.Region_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Lists Regions operation response details.
  * count `integer`: Total record count number across all pages.
  * nextLink `string`: Next page link if any.
  * value `array`: Lists of Regions.
    * items `object`: Region profile.
      * isDeleted `boolean`: whether Region is deleted.
      * isMasterRegion `boolean`: whether Region is the master region.
      * name `string`: Region name.



## Definitions

*This integration has no definitions*
