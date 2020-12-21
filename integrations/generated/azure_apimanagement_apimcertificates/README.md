# @datafire/azure_apimanagement_apimcertificates

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimcertificates
```
```js
let azure_apimanagement_apimcertificates = require('@datafire/azure_apimanagement_apimcertificates').create({
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

Use these REST APIs for performing operations on Certificate entity in your Azure API Management deployment. Certificates can be used to setup mutual authentication with your Backend in API Management. For more information refer to [How to secure backend using Mutual Auth Certificate](https://docs.microsoft.com/en-us/azure/api-management/api-management-howto-mutual-certificates).

## Actions

### Certificate_ListByService
Lists a collection of all certificates in the specified service instance.


```js
azure_apimanagement_apimcertificates.Certificate_ListByService({
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
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| subject | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| thumbprint | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| expirationDate | filter | ge, le, eq, ne, gt, lt |     | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Certificates list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Certificate details.
      * properties `object`: Properties of the Certificate contract.
        * expirationDate **required** `string`: Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        * subject **required** `string`: Subject attribute of the certificate.
        * thumbprint **required** `string`: Thumbprint of the certificate.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### Certificate_Delete
Deletes specific certificate.


```js
azure_apimanagement_apimcertificates.Certificate_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "certificateId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * certificateId **required** `string`: Identifier of the certificate entity. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Certificate_Get
Gets the details of the certificate specified by its identifier.


```js
azure_apimanagement_apimcertificates.Certificate_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "certificateId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * certificateId **required** `string`: Identifier of the certificate entity. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Certificate details.
  * properties `object`: Properties of the Certificate contract.
    * expirationDate **required** `string`: Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
    * subject **required** `string`: Subject attribute of the certificate.
    * thumbprint **required** `string`: Thumbprint of the certificate.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### Certificate_GetEntityTag
Gets the entity state (Etag) version of the certificate specified by its identifier.


```js
azure_apimanagement_apimcertificates.Certificate_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "certificateId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * certificateId **required** `string`: Identifier of the certificate entity. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Certificate_CreateOrUpdate
Creates or updates the certificate being used for authentication with the backend.


```js
azure_apimanagement_apimcertificates.Certificate_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "certificateId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * certificateId **required** `string`: Identifier of the certificate entity. Must be unique in the current API Management service instance.
  * parameters **required** `object`: Certificate create or update details.
    * properties `object`: Parameters supplied to the CreateOrUpdate certificate operation.
      * data **required** `string`: Base 64 encoded certificate using the application/x-pkcs12 representation.
      * password **required** `string`: Password for the Certificate
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Certificate details.
  * properties `object`: Properties of the Certificate contract.
    * expirationDate **required** `string`: Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
    * subject **required** `string`: Subject attribute of the certificate.
    * thumbprint **required** `string`: Thumbprint of the certificate.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.



## Definitions

*This integration has no definitions*
