# @datafire/azure_applicationinsights_webtests_api

Client library for ApplicationInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_webtests_api
```
```js
let azure_applicationinsights_webtests_api = require('@datafire/azure_applicationinsights_webtests_api').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_applicationinsights_webtests_api.WebTests_List({
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Azure Application Insights client for web test based alerting.

## Actions

### WebTests_List
Get all Application Insights web test alerts definitioned within a subscription.


```js
azure_applicationinsights_webtests_api.WebTests_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.

#### Output
* output [webTestListResult](#webtestlistresult)

### WebTests_ListByResourceGroup
Get all Application Insights web tests defined within a specified resource group.


```js
azure_applicationinsights_webtests_api.WebTests_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.

#### Output
* output [webTestListResult](#webtestlistresult)

### WebTests_Delete
Deletes an Application Insights web test.


```js
azure_applicationinsights_webtests_api.WebTests_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "webTestName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * webTestName **required** `string`: The name of the Application Insights webtest resource.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### WebTests_Get
Get a specific Application Insights web test definition.


```js
azure_applicationinsights_webtests_api.WebTests_Get({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "webTestName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * webTestName **required** `string`: The name of the Application Insights webtest resource.

#### Output
* output [WebTest](#webtest)

### WebTests_UpdateTags
Creates or updates an Application Insights web test definition.


```js
azure_applicationinsights_webtests_api.WebTests_UpdateTags({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "webTestName": "",
  "WebTestTags": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * webTestName **required** `string`: The name of the Application Insights webtest resource.
  * WebTestTags **required** [TagsResource](#tagsresource)

#### Output
* output [WebTest](#webtest)

### WebTests_CreateOrUpdate
Creates or updates an Application Insights web test definition.


```js
azure_applicationinsights_webtests_api.WebTests_CreateOrUpdate({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "webTestName": "",
  "WebTestDefinition": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * webTestName **required** `string`: The name of the Application Insights webtest resource.
  * WebTestDefinition **required** [WebTest](#webtest)

#### Output
* output [WebTest](#webtest)



## Definitions

### Resource
* Resource `object`: An azure resource object
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### TagsResource
* TagsResource `object`: A container holding only the Tags for a resource, allowing the user to update the tags on a WebTest instance.

### WebTest
* WebTest `object`: An Application Insights web test definition.
  * kind `string` (values: ping, multistep): The kind of web test that this web test watches. Choices are ping and multistep.
  * properties [WebTestProperties](#webtestproperties)
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### WebTestGeolocation
* WebTestGeolocation `object`: Geo-physical location to run a web test from. You must specify one or more locations for the test to run from.
  * Id `string`: Location ID for the webtest to run from.

### WebTestProperties
* WebTestProperties `object`: Metadata describing a web test for an Azure resource.
  * Configuration `object`: An XML configuration specification for a WebTest.
    * WebTest `string`: The XML specification of a WebTest to run against an application.
  * Description `string`: Purpose/user defined descriptive test for this WebTest.
  * Enabled `boolean`: Is the test actively being monitored.
  * Frequency `integer`: Interval in seconds between test runs for this WebTest. Default value is 300.
  * Kind **required** `string` (values: ping, multistep): The kind of web test this is, valid choices are ping and multistep.
  * Locations **required** `array`: A list of where to physically run the tests from to give global coverage for accessibility of your application.
    * items [WebTestGeolocation](#webtestgeolocation)
  * Name **required** `string`: User defined name if this WebTest.
  * RetryEnabled `boolean`: Allow for retries should this WebTest fail.
  * SyntheticMonitorId **required** `string`: Unique ID of this WebTest. This is typically the same value as the Name field.
  * Timeout `integer`: Seconds until this WebTest will timeout and fail. Default value is 30.
  * provisioningState `string`: Current state of this component, whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.

### webTestListResult
* webTestListResult `object`: A list of 0 or more Application Insights web test definitions.
  * nextLink `string`: The link to get the next part of the returned list of web tests, should the return set be too large for a single request. May be null.
  * value **required** `array`: Set of Application Insights web test definitions.
    * items [WebTest](#webtest)


