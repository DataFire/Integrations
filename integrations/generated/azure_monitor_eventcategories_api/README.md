# @datafire/azure_monitor_eventcategories_api

Client library for MonitorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_eventcategories_api
```
```js
let azure_monitor_eventcategories_api = require('@datafire/azure_monitor_eventcategories_api').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_monitor_eventcategories_api.EventCategories_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### EventCategories_List
Get the list of available event categories supported in the Activity Logs Service.<br>The current list includes the following: Administrative, Security, ServiceHealth, Alert, Recommendation, Policy.


```js
azure_monitor_eventcategories_api.EventCategories_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [EventCategoryCollection](#eventcategorycollection)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### EventCategoryCollection
* EventCategoryCollection `object`: A collection of event categories. Currently possible values are: Administrative, Security, ServiceHealth, Alert, Recommendation, Policy.
  * value **required** `array`: the list that includes the Azure event categories.
    * items [LocalizableString](#localizablestring)

### LocalizableString
* LocalizableString `object`: The localizable string class.
  * localizedValue `string`: the locale specific value.
  * value **required** `string`: the invariant value.


