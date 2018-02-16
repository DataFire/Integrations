# @datafire/azure_applicationinsights_componentapikeys_api

Client library for ApplicationInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_componentapikeys_api
```
```js
let azure_applicationinsights_componentapikeys_api = require('@datafire/azure_applicationinsights_componentapikeys_api').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_applicationinsights_componentapikeys_api.APIKeys_Delete({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "keyId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Azure Application Insights client for API keys of a component.

## Actions

### APIKeys_Delete
Delete an API Key of an Application Insights component.


```js
azure_applicationinsights_componentapikeys_api.APIKeys_Delete({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "keyId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * keyId **required** `string`: The API Key ID. This is unique within a Application Insights component.

#### Output
* output [ApplicationInsightsComponentAPIKey](#applicationinsightscomponentapikey)

### APIKeys_Get
Get the API Key for this key id.


```js
azure_applicationinsights_componentapikeys_api.APIKeys_Get({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "keyId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * keyId **required** `string`: The API Key ID. This is unique within a Application Insights component.

#### Output
* output [ApplicationInsightsComponentAPIKey](#applicationinsightscomponentapikey)

### APIKeys_List
Gets a list of API keys of an Application Insights component.


```js
azure_applicationinsights_componentapikeys_api.APIKeys_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.

#### Output
* output [ApplicationInsightsComponentAPIKeyListResult](#applicationinsightscomponentapikeylistresult)

### APIKeys_Create
Create an API Key of an Application Insights component.


```js
azure_applicationinsights_componentapikeys_api.APIKeys_Create({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "APIKeyProperties": {}
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * APIKeyProperties **required** [APIKeyRequest](#apikeyrequest)

#### Output
* output [ApplicationInsightsComponentAPIKey](#applicationinsightscomponentapikey)



## Definitions

### APIKeyRequest
* APIKeyRequest `object`: An Application Insights component API Key createion request definition.
  * linkedReadProperties `array`: The read access rights of this API Key.
    * items `string`
  * linkedWriteProperties `array`: The write access rights of this API Key.
    * items `string`
  * name `string`: The name of the API Key.

### ApplicationInsightsComponentAPIKey
* ApplicationInsightsComponentAPIKey `object`: Properties that define an API key of an Application Insights Component.
  * apiKey `string`: The API key value. It will be only return once when the API Key was created.
  * createdDate `string`: The create date of this API key.
  * id `string`: The unique ID of the API key inside an Applciation Insights component. It is auto generated when the API key is created.
  * linkedReadProperties `array`: The read access rights of this API Key.
    * items `string`
  * linkedWriteProperties `array`: The write access rights of this API Key.
    * items `string`
  * name `string`: The name of the API key.

### ApplicationInsightsComponentAPIKeyListResult
* ApplicationInsightsComponentAPIKeyListResult `object`: Describes the list of API Keys of an Application Insights Component.
  * value **required** `array`: List of API Key definitions.
    * items [ApplicationInsightsComponentAPIKey](#applicationinsightscomponentapikey)


