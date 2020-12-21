# @datafire/azure_apimanagement_apimbackends

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimbackends
```
```js
let azure_apimanagement_apimbackends = require('@datafire/azure_apimanagement_apimbackends').create({
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

Use these REST APIs for performing operations on Backend entity in Azure API Management deployment. The Backend entity in API Management represents a backend service that is configured to skip certification chain validation when using a self-signed certificate to test mutual certificate authentication.

## Actions

### Backend_ListByService
Lists a collection of backends in the specified service instance.


```js
azure_apimanagement_apimbackends.Backend_ListByService({
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
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| title | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| url | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Backend list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Backend values.
    * items `object`: Backend details.
      * properties `object`: Parameters supplied to the Create Backend operation.
        * protocol **required** `string` (values: http, soap): Backend communication protocol.
        * url **required** `string`: Runtime Url of the Backend.
        * credentials `object`: Details of the Credentials used to connect to Backend.
          * authorization `object`: Authorization header information.
          * certificate `array`: List of Client Certificate Thumbprint.
          * header `object`: Header Parameter description.
          * query `object`: Query Parameter description.
        * description `string`: Backend Description.
        * properties `object`: Properties specific to the Backend Type.
          * serviceFabricCluster `object`: Properties of the Service Fabric Type Backend.
        * proxy `object`: Details of the Backend WebProxy Server to use in the Request to Backend.
          * password `string`: Password to connect to the WebProxy Server
          * url **required** `string`: WebProxy Server AbsoluteUri property which includes the entire URI stored in the Uri instance, including all fragments and query strings.
          * username `string`: Username to connect to the WebProxy server
        * resourceId `string`: Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
        * title `string`: Backend Title.
        * tls `object`: Properties controlling TLS Certificate Validation.
          * validateCertificateChain `boolean`: Flag indicating whether SSL certificate chain validation should be done when using self-signed certificates for this backend host.
          * validateCertificateName `boolean`: Flag indicating whether SSL certificate name validation should be done when using self-signed certificates for this backend host.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### Backend_Delete
Deletes the specified backend.


```js
azure_apimanagement_apimbackends.Backend_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "backendId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * backendId **required** `string`: Identifier of the Backend entity. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Backend_Get
Gets the details of the backend specified by its identifier.


```js
azure_apimanagement_apimbackends.Backend_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "backendId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * backendId **required** `string`: Identifier of the Backend entity. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Backend details.
  * properties `object`: Parameters supplied to the Create Backend operation.
    * protocol **required** `string` (values: http, soap): Backend communication protocol.
    * url **required** `string`: Runtime Url of the Backend.
    * credentials `object`: Details of the Credentials used to connect to Backend.
      * authorization `object`: Authorization header information.
        * parameter **required** `string`: Authentication Parameter value.
        * scheme **required** `string`: Authentication Scheme name.
      * certificate `array`: List of Client Certificate Thumbprint.
        * items `string`
      * header `object`: Header Parameter description.
      * query `object`: Query Parameter description.
    * description `string`: Backend Description.
    * properties `object`: Properties specific to the Backend Type.
      * serviceFabricCluster `object`: Properties of the Service Fabric Type Backend.
        * clientCertificatethumbprint **required** `string`: The client certificate thumbprint for the management endpoint.
        * managementEndpoints **required** `array`: The cluster management endpoint.
          * items `string`
        * maxPartitionResolutionRetries `integer`: Maximum number of retries while attempting resolve the partition.
        * serverCertificateThumbprints `array`: Thumbprints of certificates cluster management service uses for tls communication
          * items `string`
        * serverX509Names `array`: Server X509 Certificate Names Collection
          * items `object`: Properties of server X509Names.
    * proxy `object`: Details of the Backend WebProxy Server to use in the Request to Backend.
      * password `string`: Password to connect to the WebProxy Server
      * url **required** `string`: WebProxy Server AbsoluteUri property which includes the entire URI stored in the Uri instance, including all fragments and query strings.
      * username `string`: Username to connect to the WebProxy server
    * resourceId `string`: Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
    * title `string`: Backend Title.
    * tls `object`: Properties controlling TLS Certificate Validation.
      * validateCertificateChain `boolean`: Flag indicating whether SSL certificate chain validation should be done when using self-signed certificates for this backend host.
      * validateCertificateName `boolean`: Flag indicating whether SSL certificate name validation should be done when using self-signed certificates for this backend host.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### Backend_GetEntityTag
Gets the entity state (Etag) version of the backend specified by its identifier.


```js
azure_apimanagement_apimbackends.Backend_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "backendId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * backendId **required** `string`: Identifier of the Backend entity. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Backend_Update
Updates an existing backend.


```js
azure_apimanagement_apimbackends.Backend_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "backendId": "",
  "parameters": null,
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * backendId **required** `string`: Identifier of the Backend entity. Must be unique in the current API Management service instance.
  * parameters **required** `object`: Backend update parameters.
    * properties `object`: Parameters supplied to the Update Backend operation.
      * protocol `string` (values: http, soap): Backend communication protocol.
      * url `string`: Runtime Url of the Backend.
      * credentials `object`: Details of the Credentials used to connect to Backend.
        * authorization `object`: Authorization header information.
          * parameter **required** `string`: Authentication Parameter value.
          * scheme **required** `string`: Authentication Scheme name.
        * certificate `array`: List of Client Certificate Thumbprint.
          * items `string`
        * header `object`: Header Parameter description.
        * query `object`: Query Parameter description.
      * description `string`: Backend Description.
      * properties `object`: Properties specific to the Backend Type.
        * serviceFabricCluster `object`: Properties of the Service Fabric Type Backend.
          * clientCertificatethumbprint **required** `string`: The client certificate thumbprint for the management endpoint.
          * managementEndpoints **required** `array`: The cluster management endpoint.
          * maxPartitionResolutionRetries `integer`: Maximum number of retries while attempting resolve the partition.
          * serverCertificateThumbprints `array`: Thumbprints of certificates cluster management service uses for tls communication
          * serverX509Names `array`: Server X509 Certificate Names Collection
      * proxy `object`: Details of the Backend WebProxy Server to use in the Request to Backend.
        * password `string`: Password to connect to the WebProxy Server
        * url **required** `string`: WebProxy Server AbsoluteUri property which includes the entire URI stored in the Uri instance, including all fragments and query strings.
        * username `string`: Username to connect to the WebProxy server
      * resourceId `string`: Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
      * title `string`: Backend Title.
      * tls `object`: Properties controlling TLS Certificate Validation.
        * validateCertificateChain `boolean`: Flag indicating whether SSL certificate chain validation should be done when using self-signed certificates for this backend host.
        * validateCertificateName `boolean`: Flag indicating whether SSL certificate name validation should be done when using self-signed certificates for this backend host.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Backend_CreateOrUpdate
Creates or Updates a backend.


```js
azure_apimanagement_apimbackends.Backend_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "backendId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * backendId **required** `string`: Identifier of the Backend entity. Must be unique in the current API Management service instance.
  * parameters **required** `object`: Backend details.
    * properties `object`: Parameters supplied to the Create Backend operation.
      * protocol **required** `string` (values: http, soap): Backend communication protocol.
      * url **required** `string`: Runtime Url of the Backend.
      * credentials `object`: Details of the Credentials used to connect to Backend.
        * authorization `object`: Authorization header information.
          * parameter **required** `string`: Authentication Parameter value.
          * scheme **required** `string`: Authentication Scheme name.
        * certificate `array`: List of Client Certificate Thumbprint.
          * items `string`
        * header `object`: Header Parameter description.
        * query `object`: Query Parameter description.
      * description `string`: Backend Description.
      * properties `object`: Properties specific to the Backend Type.
        * serviceFabricCluster `object`: Properties of the Service Fabric Type Backend.
          * clientCertificatethumbprint **required** `string`: The client certificate thumbprint for the management endpoint.
          * managementEndpoints **required** `array`: The cluster management endpoint.
          * maxPartitionResolutionRetries `integer`: Maximum number of retries while attempting resolve the partition.
          * serverCertificateThumbprints `array`: Thumbprints of certificates cluster management service uses for tls communication
          * serverX509Names `array`: Server X509 Certificate Names Collection
      * proxy `object`: Details of the Backend WebProxy Server to use in the Request to Backend.
        * password `string`: Password to connect to the WebProxy Server
        * url **required** `string`: WebProxy Server AbsoluteUri property which includes the entire URI stored in the Uri instance, including all fragments and query strings.
        * username `string`: Username to connect to the WebProxy server
      * resourceId `string`: Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
      * title `string`: Backend Title.
      * tls `object`: Properties controlling TLS Certificate Validation.
        * validateCertificateChain `boolean`: Flag indicating whether SSL certificate chain validation should be done when using self-signed certificates for this backend host.
        * validateCertificateName `boolean`: Flag indicating whether SSL certificate name validation should be done when using self-signed certificates for this backend host.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Backend details.
  * properties `object`: Parameters supplied to the Create Backend operation.
    * protocol **required** `string` (values: http, soap): Backend communication protocol.
    * url **required** `string`: Runtime Url of the Backend.
    * credentials `object`: Details of the Credentials used to connect to Backend.
      * authorization `object`: Authorization header information.
        * parameter **required** `string`: Authentication Parameter value.
        * scheme **required** `string`: Authentication Scheme name.
      * certificate `array`: List of Client Certificate Thumbprint.
        * items `string`
      * header `object`: Header Parameter description.
      * query `object`: Query Parameter description.
    * description `string`: Backend Description.
    * properties `object`: Properties specific to the Backend Type.
      * serviceFabricCluster `object`: Properties of the Service Fabric Type Backend.
        * clientCertificatethumbprint **required** `string`: The client certificate thumbprint for the management endpoint.
        * managementEndpoints **required** `array`: The cluster management endpoint.
          * items `string`
        * maxPartitionResolutionRetries `integer`: Maximum number of retries while attempting resolve the partition.
        * serverCertificateThumbprints `array`: Thumbprints of certificates cluster management service uses for tls communication
          * items `string`
        * serverX509Names `array`: Server X509 Certificate Names Collection
          * items `object`: Properties of server X509Names.
    * proxy `object`: Details of the Backend WebProxy Server to use in the Request to Backend.
      * password `string`: Password to connect to the WebProxy Server
      * url **required** `string`: WebProxy Server AbsoluteUri property which includes the entire URI stored in the Uri instance, including all fragments and query strings.
      * username `string`: Username to connect to the WebProxy server
    * resourceId `string`: Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
    * title `string`: Backend Title.
    * tls `object`: Properties controlling TLS Certificate Validation.
      * validateCertificateChain `boolean`: Flag indicating whether SSL certificate chain validation should be done when using self-signed certificates for this backend host.
      * validateCertificateName `boolean`: Flag indicating whether SSL certificate name validation should be done when using self-signed certificates for this backend host.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### Backend_Reconnect
Notifies the APIM proxy to create a new connection to the backend after the specified timeout. If no timeout was specified, timeout of 2 minutes is used.


```js
azure_apimanagement_apimbackends.Backend_Reconnect({
  "resourceGroupName": "",
  "serviceName": "",
  "backendId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * backendId **required** `string`: Identifier of the Backend entity. Must be unique in the current API Management service instance.
  * parameters `object`: Reconnect request parameters.
    * properties `object`: Properties to control reconnect requests.
      * after `string`: Duration in ISO8601 format after which reconnect will be initiated. Minimum duration of the Reconnect is PT2M.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
