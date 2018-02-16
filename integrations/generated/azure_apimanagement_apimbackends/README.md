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

azure_apimanagement_apimbackends.Backend_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
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
  * $filter `string`: | Field | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BackendCollection](#backendcollection)

### Backend_Delete
Deletes the specified backend.


```js
azure_apimanagement_apimbackends.Backend_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "backendid": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * backendid **required** `string`: Identifier of the Backend entity. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: The entity state (Etag) version of the backend to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
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
  "backendid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * backendid **required** `string`: Identifier of the Backend entity. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BackendContract](#backendcontract)

### Backend_GetEntityTag
Gets the entity state (Etag) version of the backend specified by its identifier.


```js
azure_apimanagement_apimbackends.Backend_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "backendid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * backendid **required** `string`: Identifier of the Backend entity. Must be unique in the current API Management service instance.
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
  "backendid": "",
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
  * backendid **required** `string`: Identifier of the Backend entity. Must be unique in the current API Management service instance.
  * parameters **required** [BackendUpdateParameters](#backendupdateparameters)
  * If-Match **required** `string`: The entity state (Etag) version of the backend to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
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
  "backendid": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * backendid **required** `string`: Identifier of the Backend entity. Must be unique in the current API Management service instance.
  * parameters **required** [BackendContract](#backendcontract)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BackendContract](#backendcontract)

### Backend_Reconnect
Notifies the APIM proxy to create a new connection to the backend after the specified timeout. If no timeout was specified, timeout of 2 minutes is used.


```js
azure_apimanagement_apimbackends.Backend_Reconnect({
  "resourceGroupName": "",
  "serviceName": "",
  "backendid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * backendid **required** `string`: Identifier of the Backend entity. Must be unique in the current API Management service instance.
  * parameters [BackendReconnectContract](#backendreconnectcontract)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*



## Definitions

### BackendAuthorizationHeaderCredentials
* BackendAuthorizationHeaderCredentials `object`: Authorization header information.
  * parameter **required** `string`: Authentication Parameter value.
  * scheme **required** `string`: Authentication Scheme name.

### BackendBaseParameters
* BackendBaseParameters `object`: Backend entity base Parameter set.
  * credentials [BackendCredentialsContract](#backendcredentialscontract)
  * description `string`: Backend Description.
  * properties [BackendProperties](#backendproperties)
  * proxy [BackendProxyContract](#backendproxycontract)
  * resourceId `string`: Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
  * title `string`: Backend Title.
  * tls [BackendTlsProperties](#backendtlsproperties)

### BackendCollection
* BackendCollection `object`: Paged Backend list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Backend values.
    * items [BackendContract](#backendcontract)

### BackendContract
* BackendContract `object`: Backend details.
  * properties [BackendContractProperties](#backendcontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### BackendContractProperties
* BackendContractProperties `object`: Parameters supplied to the Create Backend operation.
  * protocol **required** `string` (values: http, soap): Backend communication protocol.
  * url **required** `string`: Runtime Url of the Backend.
  * credentials [BackendCredentialsContract](#backendcredentialscontract)
  * description `string`: Backend Description.
  * properties [BackendProperties](#backendproperties)
  * proxy [BackendProxyContract](#backendproxycontract)
  * resourceId `string`: Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
  * title `string`: Backend Title.
  * tls [BackendTlsProperties](#backendtlsproperties)

### BackendCredentialsContract
* BackendCredentialsContract `object`: Details of the Credentials used to connect to Backend.
  * authorization [BackendAuthorizationHeaderCredentials](#backendauthorizationheadercredentials)
  * certificate `array`: List of Client Certificate Thumbprint.
    * items `string`
  * header `object`: Header Parameter description.
  * query `object`: Query Parameter description.

### BackendProperties
* BackendProperties `object`: Properties specific to the Backend Type.
  * serviceFabricCluster [BackendServiceFabricClusterProperties](#backendservicefabricclusterproperties)

### BackendProxyContract
* BackendProxyContract `object`: Details of the Backend WebProxy Server to use in the Request to Backend.
  * password `string`: Password to connect to the WebProxy Server
  * url **required** `string`: WebProxy Server AbsoluteUri property which includes the entire URI stored in the Uri instance, including all fragments and query strings.
  * username `string`: Username to connect to the WebProxy server

### BackendReconnectContract
* BackendReconnectContract `object`: Reconnect request parameters.
  * properties [BackendReconnectProperties](#backendreconnectproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### BackendReconnectProperties
* BackendReconnectProperties `object`: Properties to control reconnect requests.
  * after `string`: Duration in ISO8601 format after which reconnect will be initiated.

### BackendServiceFabricClusterProperties
* BackendServiceFabricClusterProperties `object`: Properties of the Service Fabric Type Backend.
  * clientCertificatethumbprint **required** `string`: The client certificate thumbprint for the management endpoint.
  * managementEndpoints **required** `array`: The cluster management endpoint.
    * items `string`
  * maxPartitionResolutionRetries `integer`: Maximum number of retries while attempting resolve the parition.
  * serverCertificateThumbprints `array`: Thumbprints of certificates cluster management service uses for tls communication
    * items `string`
  * serverX509Names `array`: Server X509 Certificate Names Collection
    * items [X509CertificateName](#x509certificatename)

### BackendTlsProperties
* BackendTlsProperties `object`: Properties controlling TLS Certificate Validation.
  * validateCertificateChain `boolean`: Flag indicating whether SSL certificate chain validation should be done when using self-signed certificates for this backend host.
  * validateCertificateName `boolean`: Flag indicating whether SSL certificate name validation should be done when using self-signed certificates for this backend host.

### BackendUpdateParameterProperties
* BackendUpdateParameterProperties `object`: Parameters supplied to the Update Backend operation.
  * protocol `string` (values: http, soap): Backend communication protocol.
  * url `string`: Runtime Url of the Backend.
  * credentials [BackendCredentialsContract](#backendcredentialscontract)
  * description `string`: Backend Description.
  * properties [BackendProperties](#backendproperties)
  * proxy [BackendProxyContract](#backendproxycontract)
  * resourceId `string`: Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
  * title `string`: Backend Title.
  * tls [BackendTlsProperties](#backendtlsproperties)

### BackendUpdateParameters
* BackendUpdateParameters `object`: Backend update parameters.
  * properties [BackendUpdateParameterProperties](#backendupdateparameterproperties)

### X509CertificateName
* X509CertificateName `object`: Properties of server X509Names.
  * issuerCertificateThumbprint `string`: Thumbprint for the Issuer of the Certificate.
  * name `string`: Common Name of the Certificate.


