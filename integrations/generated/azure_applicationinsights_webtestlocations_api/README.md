# @datafire/azure_applicationinsights_webtestlocations_api

Client library for ApplicationInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_webtestlocations_api
```
```js
let azure_applicationinsights_webtestlocations_api = require('@datafire/azure_applicationinsights_webtestlocations_api').create({
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

Azure Application Insights client for web test locations.

## Actions

### webTestLocations_List
Gets a list of web test locations available to this Application Insights component.


```js
azure_applicationinsights_webtestlocations_api.webTestLocations_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceName **required** `string`: The name of the Application Insights component resource.

#### Output
* output [ApplicationInsightsWebTestLocationsListResult](#applicationinsightswebtestlocationslistresult)



## Definitions

### ApplicationInsightsComponentWebTestLocation
* ApplicationInsightsComponentWebTestLocation `object`: Properties that define a web test location available to an Application Insights Component.
  * DisplayName `string`: The display name of the web test location.
  * Tag `string`: Internally defined geographic location tag.

### ApplicationInsightsWebTestLocationsListResult
* ApplicationInsightsWebTestLocationsListResult `object`: Describes the list of web test locations available to an Application Insights Component.
  * value **required** `array`: List of web test locations.
    * items [ApplicationInsightsComponentWebTestLocation](#applicationinsightscomponentwebtestlocation)


