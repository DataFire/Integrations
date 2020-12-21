# @datafire/azure_apimanagement_apimpolicysnippets

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimpolicysnippets
```
```js
let azure_apimanagement_apimpolicysnippets = require('@datafire/azure_apimanagement_apimpolicysnippets').create({
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

Use these REST APIs for performing retrieving a collection of policy snippets available in Azure API Management deployment.

## Actions

### PolicySnippet_ListByService
Lists all policy snippets.


```js
azure_apimanagement_apimpolicysnippets.PolicySnippet_ListByService({
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
  * scope `string` (values: Tenant, Product, Api, Operation, All): Policy scope.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: The response of the list policy snippets operation.
  * value `array`: Policy snippet value.
    * items `object`: Policy snippet.
      * content `string`: Snippet content.
      * name `string`: Snippet name.
      * scope `integer`: Binary OR value of the Snippet scope.
      * toolTip `string`: Snippet toolTip.



## Definitions

*This integration has no definitions*
