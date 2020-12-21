# @datafire/azure_apimanagement

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement
```
```js
let azure_apimanagement = require('@datafire/azure_apimanagement').create({
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

Use these REST APIs for performing operations on entities like API, Product, and Subscription associated with your Azure API Management deployment.

## Actions

### Policy_ListByService
Lists all the Global Policy definitions of the Api Management service.


```js
azure_apimanagement.Policy_ListByService({
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
* output [PolicyCollection](#policycollection)

### Policy_Delete
Deletes the global policy configuration of the Api Management Service.


```js
azure_apimanagement.Policy_Delete({
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
azure_apimanagement.Policy_Get({
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
* output [PolicyContract](#policycontract)

### Policy_GetEntityTag
Gets the entity state (Etag) version of the Global policy definition in the Api Management service.


```js
azure_apimanagement.Policy_GetEntityTag({
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
azure_apimanagement.Policy_CreateOrUpdate({
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
  * parameters **required** [PolicyContract](#policycontract)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PolicyContract](#policycontract)

### PolicySnippets_ListByService
Lists all policy snippets.


```js
azure_apimanagement.PolicySnippets_ListByService({
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
* output [PolicySnippetsCollection](#policysnippetscollection)

### Regions_ListByService
Lists all azure regions in which the service exists.


```js
azure_apimanagement.Regions_ListByService({
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
* output [RegionListResult](#regionlistresult)



## Definitions

### ErrorFieldContract
* ErrorFieldContract `object`: Error Field contract.
  * code `string`: Property level error code.
  * message `string`: Human-readable representation of property-level error.
  * target `string`: Property name.

### ErrorResponse
* ErrorResponse `object`: Error Response.
  * error `object`: Error Body contract.
    * code `string`: Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response.
    * details `array`: The list of invalid fields send in request, in case of validation error.
      * items `object`: Error Field contract.
        * code `string`: Property level error code.
        * message `string`: Human-readable representation of property-level error.
        * target `string`: Property name.
    * message `string`: Human-readable representation of the error.

### ErrorResponseBody
* ErrorResponseBody `object`: Error Body contract.
  * code `string`: Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response.
  * details `array`: The list of invalid fields send in request, in case of validation error.
    * items `object`: Error Field contract.
      * code `string`: Property level error code.
      * message `string`: Human-readable representation of property-level error.
      * target `string`: Property name.
  * message `string`: Human-readable representation of the error.

### PolicyCollection
* PolicyCollection `object`: The response of the list policy operation.
  * nextLink `string`: Next page link if any.
  * value `array`: Policy Contract value.
    * items [PolicyContract](#policycontract)

### PolicyContract
* PolicyContract `object`: Policy Contract details.
  * properties [PolicyContractProperties](#policycontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### PolicyContractProperties
* PolicyContractProperties `object`: Policy contract Properties.
  * contentFormat `string` (values: xml, xml-link, rawxml, rawxml-link): Format of the policyContent.
  * policyContent **required** `string`: Json escaped Xml Encoded contents of the Policy.

### PolicySnippetContract
* PolicySnippetContract `object`: Policy snippet.
  * content `string`: Snippet content.
  * name `string`: Snippet name.
  * scope `integer`: Binary OR value of the Snippet scope.
  * toolTip `string`: Snippet toolTip.

### PolicySnippetsCollection
* PolicySnippetsCollection `object`: The response of the list policy snippets operation.
  * value `array`: Policy snippet value.
    * items [PolicySnippetContract](#policysnippetcontract)

### RegionContract
* RegionContract `object`: Region profile.
  * isDeleted `boolean`: whether Region is deleted.
  * isMasterRegion `boolean`: whether Region is the master region.
  * name `string`: Region name.

### RegionListResult
* RegionListResult `object`: Lists Regions operation response details.
  * count `integer`: Total record count number across all pages.
  * nextLink `string`: Next page link if any.
  * value `array`: Lists of Regions.
    * items [RegionContract](#regioncontract)

### Resource
* Resource `object`: The Resource definition.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.


