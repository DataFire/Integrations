# @datafire/azure_apimanagement_apimpolicies

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimpolicies
```
```js
let azure_apimanagement_apimpolicies = require('@datafire/azure_apimanagement_apimpolicies').create({
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

Use these REST APIs for performing operations on Global Policies in Azure API Management deployment.

## Actions

### Policy_ListByService
Lists all the Global Policy definitions of the Api Management service.


```js
azure_apimanagement_apimpolicies.Policy_ListByService({
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
* output `object`: The response of the list policy operation.
  * nextLink `string`: Next page link if any.
  * value `array`: Policy Contract value.
    * items `object`: Policy Contract details.
      * properties `object`: Policy contract Properties.
        * format `string` (values: xml, xml-link, rawxml, rawxml-link): Format of the policyContent.
        * value **required** `string`: Contents of the Policy as defined by the format.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### Policy_Delete
Deletes the global policy configuration of the Api Management Service.


```js
azure_apimanagement_apimpolicies.Policy_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "policyId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Policy_Get
Get the Global policy definition of the Api Management service.


```js
azure_apimanagement_apimpolicies.Policy_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "policyId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * format `string` (values: xml, rawxml): Policy Export Format.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Policy Contract details.
  * properties `object`: Policy contract Properties.
    * format `string` (values: xml, xml-link, rawxml, rawxml-link): Format of the policyContent.
    * value **required** `string`: Contents of the Policy as defined by the format.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### Policy_GetEntityTag
Gets the entity state (Etag) version of the Global policy definition in the Api Management service.


```js
azure_apimanagement_apimpolicies.Policy_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "policyId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Policy_CreateOrUpdate
Creates or updates the global policy configuration of the Api Management service.


```js
azure_apimanagement_apimpolicies.Policy_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "policyId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * parameters **required** `object`: Policy Contract details.
    * properties `object`: Policy contract Properties.
      * format `string` (values: xml, xml-link, rawxml, rawxml-link): Format of the policyContent.
      * value **required** `string`: Contents of the Policy as defined by the format.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Policy Contract details.
  * properties `object`: Policy contract Properties.
    * format `string` (values: xml, xml-link, rawxml, rawxml-link): Format of the policyContent.
    * value **required** `string`: Contents of the Policy as defined by the format.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.



## Definitions

*This integration has no definitions*
