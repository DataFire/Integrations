# @datafire/azure_apimanagement_apimpolicydescriptions

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimpolicydescriptions
```
```js
let azure_apimanagement_apimpolicydescriptions = require('@datafire/azure_apimanagement_apimpolicydescriptions').create({
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

### PolicyDescription_ListByService
Lists all policy descriptions.


```js
azure_apimanagement_apimpolicydescriptions.PolicyDescription_ListByService({
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
* output `object`: Descriptions of APIM policies.
  * count `integer`: Total record count number.
  * value `array`: Descriptions of APIM policies.
    * items `object`: Policy description details.
      * properties `object`: Policy description properties.
        * description `string`: Policy description.
        * scope `integer`: Binary OR value of the Snippet scope.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.



## Definitions

*This integration has no definitions*
