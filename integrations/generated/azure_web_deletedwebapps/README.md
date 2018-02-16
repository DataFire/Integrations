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

azure_web_deletedwebapps.DeletedWebApps_List({
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
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



## Definitions

### DeletedSite
* DeletedSite `object`: A deleted app.
  * deletedTimestamp `string`: Time in UTC when the app was deleted.
  * id `integer`: Numeric id for the deleted site
  * name `string`: Name of the deleted site
  * resourceGroup `string`: ResourceGroup that contained the deleted site
  * slot `string`: Slot of the deleted site
  * subscription `string`: Subscription containing the deleted site

### DeletedWebAppCollection
* DeletedWebAppCollection `object`: Collection of deleted apps.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [DeletedSite](#deletedsite)


