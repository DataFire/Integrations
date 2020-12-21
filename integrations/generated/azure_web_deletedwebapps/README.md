# @datafire/azure_web_deletedwebapps

Client library for DeletedWebApps API Client

## Installation and Usage
```bash
npm install --save @datafire/azure_web_deletedwebapps
```
```js
let azure_web_deletedwebapps = require('@datafire/azure_web_deletedwebapps').create({
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



## Actions

### DeletedWebApps_List
Get all deleted apps for a subscription.


```js
azure_web_deletedwebapps.DeletedWebApps_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DeletedWebAppCollection](#deletedwebappcollection)

### DeletedWebApps_ListByLocation
Get all deleted apps for a subscription at location


```js
azure_web_deletedwebapps.DeletedWebApps_ListByLocation({
  "location": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DeletedWebAppCollection](#deletedwebappcollection)

### DeletedWebApps_GetDeletedWebAppByLocation
Get deleted app for a subscription at location.


```js
azure_web_deletedwebapps.DeletedWebApps_GetDeletedWebAppByLocation({
  "location": "",
  "deletedSiteId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`
  * deletedSiteId **required** `string`: The numeric ID of the deleted app, e.g. 12345
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: A deleted app.
  * properties `object`: DeletedSite resource specific properties
    * deletedSiteId `integer`: Numeric id for the deleted site
    * deletedSiteName `string`: Name of the deleted site
    * deletedTimestamp `string`: Time in UTC when the app was deleted.
    * geoRegionName `string`: Geo Region of the deleted site
    * kind `string`: Kind of site that was deleted
    * resourceGroup `string`: ResourceGroup that contained the deleted site
    * slot `string`: Slot of the deleted site
    * subscription `string`: Subscription containing the deleted site
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.



## Definitions

### DeletedWebAppCollection
* DeletedWebAppCollection `object`: Collection of deleted apps.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: A deleted app.
      * properties `object`: DeletedSite resource specific properties
        * deletedSiteId `integer`: Numeric id for the deleted site
        * deletedSiteName `string`: Name of the deleted site
        * deletedTimestamp `string`: Time in UTC when the app was deleted.
        * geoRegionName `string`: Geo Region of the deleted site
        * kind `string`: Kind of site that was deleted
        * resourceGroup `string`: ResourceGroup that contained the deleted site
        * slot `string`: Slot of the deleted site
        * subscription `string`: Subscription containing the deleted site
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * name `string`: Resource Name.
      * type `string`: Resource type.


