# @datafire/azure_arm_apimanagement

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_apimanagement
```
```js
let azure_arm_apimanagement = require('@datafire/azure_arm_apimanagement').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_apimanagement.Apis_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Use these REST APIs for performing operations on entities like API, Product, and Subscription associated with your Azure API Management deployment.

## Actions

### Apis_ListByService
Lists all APIs of the API Management service instance.


```js
azure_arm_apimanagement.Apis_ListByService({
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
  * $filter `string`: | Field       | Supported operators    | Supported functions               |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApiCollection](#apicollection)

### Apis_Delete
Deletes the specified API of the API Management service instance.


```js
azure_arm_apimanagement.Apis_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: ETag of the API Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Apis_Get
Gets the details of the API specified by its identifier.


```js
azure_arm_apimanagement.Apis_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApiContract](#apicontract)

### Apis_Update
Updates the specified API of the API Management service instance.


```js
azure_arm_apimanagement.Apis_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
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
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * parameters **required** [PatchParameters](#patchparameters)
  * If-Match **required** `string`: ETag of the API entity. ETag should match the current entity state in the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Apis_CreateOrUpdate
Creates new or updates existing specified API of the API Management service instance.


```js
azure_arm_apimanagement.Apis_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * parameters **required** [ApiContract](#apicontract)
  * If-Match `string`: ETag of the Api Entity. For Create Api Etag should not be specified. For Update Etag should match the existing Entity or it can be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiOperations_ListByApi
Lists a collection of the operations for the specified API.


```js
azure_arm_apimanagement.ApiOperations_ListByApi({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * $filter `string`: | Field       | Supported operators    | Supported functions               |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationCollection](#operationcollection)

### ApiOperations_Delete
Deletes the specified operation.


```js
azure_arm_apimanagement.ApiOperations_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: ETag of the API Operation Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiOperations_Get
Gets the details of the API Operation specified by its identifier.


```js
azure_arm_apimanagement.ApiOperations_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationContract](#operationcontract)

### ApiOperations_Update
Updates the details of the operation specified by its identifier.


```js
azure_arm_apimanagement.ApiOperations_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
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
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * parameters **required** [PatchParameters](#patchparameters)
  * If-Match **required** `string`: ETag of the API Operation Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiOperations_CreateOrUpdate
Creates a new API operation or updates an existing one.


```js
azure_arm_apimanagement.ApiOperations_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * parameters **required** [OperationContract](#operationcontract)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiProducts_ListByApi
Lists all API associated products.


```js
azure_arm_apimanagement.ApiProducts_ListByApi({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * $filter `string`: | Field | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ProductCollection](#productcollection)

### AuthorizationServers_ListByService
Lists a collection of authorization servers defined within a service instance.


```js
azure_arm_apimanagement.AuthorizationServers_ListByService({
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
* output [AuthorizationServerCollection](#authorizationservercollection)

### AuthorizationServers_Delete
Deletes specific authorization server instance.


```js
azure_arm_apimanagement.AuthorizationServers_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "authsid": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * authsid **required** `string`: Identifier of the authorization server.
  * If-Match **required** `string`: The entity state (Etag) version of the authentication server to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### AuthorizationServers_Get
Gets the details of the authorization server specified by its identifier.


```js
azure_arm_apimanagement.AuthorizationServers_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "authsid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * authsid **required** `string`: Identifier of the authorization server.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OAuth2AuthorizationServerContract](#oauth2authorizationservercontract)

### AuthorizationServers_Update
Updates the details of the authorization server specified by its identifier.


```js
azure_arm_apimanagement.AuthorizationServers_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "authsid": "",
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
  * authsid **required** `string`: Identifier of the authorization server.
  * parameters **required** [OAuth2AuthorizationServerUpdateContract](#oauth2authorizationserverupdatecontract)
  * If-Match **required** `string`: The entity state (Etag) version of the authorization server to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### AuthorizationServers_CreateOrUpdate
Creates new authorization server or updates an existing authorization server.


```js
azure_arm_apimanagement.AuthorizationServers_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "authsid": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * authsid **required** `string`: Identifier of the authorization server.
  * parameters **required** [OAuth2AuthorizationServerContract](#oauth2authorizationservercontract)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Backends_ListByService
Lists a collection of backends in the specified service instance.


```js
azure_arm_apimanagement.Backends_ListByService({
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

### Backends_Delete
Deletes the specified backend.


```js
azure_arm_apimanagement.Backends_Delete({
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
  * backendid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: The entity state (Etag) version of the backend to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Backends_Get
Gets the details of the backend specified by its identifier.


```js
azure_arm_apimanagement.Backends_Get({
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
  * backendid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [BackendResponse](#backendresponse)

### Backends_Update
Updates an existing backend.


```js
azure_arm_apimanagement.Backends_Update({
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
  * backendid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * parameters **required** [BackendUpdateParameters](#backendupdateparameters)
  * If-Match **required** `string`: The entity state (Etag) version of the backend to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Backends_CreateOrUpdate
Creates or Updates a backend.


```js
azure_arm_apimanagement.Backends_CreateOrUpdate({
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
  * backendid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * parameters **required** [BackendContract](#backendcontract)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Certificates_ListByService
Lists a collection of all certificates in the specified service instance.


```js
azure_arm_apimanagement.Certificates_ListByService({
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
  * $filter `string`: | Field          | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [CertificateCollection](#certificatecollection)

### Certificates_Delete
Deletes specific certificate.


```js
azure_arm_apimanagement.Certificates_Delete({
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
  * certificateId **required** `string`: Identifier of the certificate.
  * If-Match **required** `string`: The entity state (Etag) version of the certificate to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Certificates_Get
Gets the details of the certificate specified by its identifier.


```js
azure_arm_apimanagement.Certificates_Get({
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
  * certificateId **required** `string`: Identifier of the certificate.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [CertificateContract](#certificatecontract)

### Certificates_CreateOrUpdate
Creates or updates the certificate being used for authentication with the backend.


```js
azure_arm_apimanagement.Certificates_CreateOrUpdate({
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
  * parameters **required** [CertificateCreateOrUpdateParameters](#certificatecreateorupdateparameters)
  * If-Match `string`: The entity state (Etag) version of the certificate to update. A value of "*" can be used for If-Match to unconditionally apply the operation..
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Groups_ListByService
Lists a collection of groups defined within a service instance.


```js
azure_arm_apimanagement.Groups_ListByService({
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
  * $filter `string`: | Field       | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [GroupCollection](#groupcollection)

### Groups_Delete
Deletes specific group of the API Management service instance.


```js
azure_arm_apimanagement.Groups_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "groupId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: ETag of the Group Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Groups_Get
Gets the details of the group specified by its identifier.


```js
azure_arm_apimanagement.Groups_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "groupId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [GroupContract](#groupcontract)

### Groups_Update
Updates the details of the group specified by its identifier.


```js
azure_arm_apimanagement.Groups_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "groupId": "",
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
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * parameters **required** [GroupUpdateParameters](#groupupdateparameters)
  * If-Match **required** `string`: ETag of the Group Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Groups_CreateOrUpdate
Creates or Updates a group.


```js
azure_arm_apimanagement.Groups_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "groupId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * parameters **required** [GroupCreateParameters](#groupcreateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### GroupUsers_ListByGroup
Lists a collection of the members of the group, specified by its identifier.


```js
azure_arm_apimanagement.GroupUsers_ListByGroup({
  "resourceGroupName": "",
  "serviceName": "",
  "groupId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * $filter `string`: | Field            | Supported operators    | Supported functions               |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [UserCollection](#usercollection)

### GroupUsers_Remove
Remove existing user from existing group.


```js
azure_arm_apimanagement.GroupUsers_Remove({
  "resourceGroupName": "",
  "serviceName": "",
  "groupId": "",
  "uid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### GroupUsers_Add
Adds a user to the specified group.


```js
azure_arm_apimanagement.GroupUsers_Add({
  "resourceGroupName": "",
  "serviceName": "",
  "groupId": "",
  "uid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### IdentityProviders_ListByService
Lists a collection of Identity Provider configured in the specified service instance.


```js
azure_arm_apimanagement.IdentityProviders_ListByService({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [IdentityProviderList](#identityproviderlist)

### IdentityProviders_Delete
Deletes the specified identity provider configuration.


```js
azure_arm_apimanagement.IdentityProviders_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "identityProviderName": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * identityProviderName **required** `string` (values: facebook, google, microsoft, twitter, aad): Identity Provider Type identifier.
  * If-Match **required** `string`: The entity state (Etag) version of the backend to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### IdentityProviders_Get
Gets the configuration details of the identity Provider configured in specified service instance.


```js
azure_arm_apimanagement.IdentityProviders_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "identityProviderName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * identityProviderName **required** `string` (values: facebook, google, microsoft, twitter, aad): Identity Provider Type identifier.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [IdentityProviderContract](#identityprovidercontract)

### IdentityProviders_Update
Updates an existing IdentityProvider configuration.


```js
azure_arm_apimanagement.IdentityProviders_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "identityProviderName": "",
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
  * identityProviderName **required** `string` (values: facebook, google, microsoft, twitter, aad): Identity Provider Type identifier.
  * parameters **required** [IdentityProviderUpdateParameters](#identityproviderupdateparameters)
  * If-Match **required** `string`: The entity state (Etag) version of the identity provider configuration to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### IdentityProviders_CreateOrUpdate
Creates or Updates the IdentityProvider configuration.


```js
azure_arm_apimanagement.IdentityProviders_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "identityProviderName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * identityProviderName **required** `string` (values: facebook, google, microsoft, twitter, aad): Identity Provider Type identifier.
  * parameters **required** [IdentityProviderContract](#identityprovidercontract)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Loggers_ListByService
Lists a collection of loggers in the specified service instance.


```js
azure_arm_apimanagement.Loggers_ListByService({
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
* output [LoggerCollection](#loggercollection)

### Loggers_Delete
Deletes the specified logger.


```js
azure_arm_apimanagement.Loggers_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "loggerid": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * loggerid **required** `string`: Identifier of the logger.
  * If-Match **required** `string`: The entity state (Etag) version of the logger to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Loggers_Get
Gets the details of the logger specified by its identifier.


```js
azure_arm_apimanagement.Loggers_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "loggerid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * loggerid **required** `string`: Identifier of the logger.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LoggerResponse](#loggerresponse)

### Loggers_Update
Updates an existing logger.


```js
azure_arm_apimanagement.Loggers_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "loggerid": "",
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
  * loggerid **required** `string`: Identifier of the logger.
  * parameters **required** [LoggerUpdateParameters](#loggerupdateparameters)
  * If-Match **required** `string`: The entity state (Etag) version of the logger to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Loggers_CreateOrUpdate
Creates or Updates a logger.


```js
azure_arm_apimanagement.Loggers_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "loggerid": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * loggerid **required** `string`: Identifier of the logger.
  * parameters **required** [LoggerCreateParameters](#loggercreateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### OpenIdConnectProviders_ListByService
Lists all OpenID Connect Providers.


```js
azure_arm_apimanagement.OpenIdConnectProviders_ListByService({
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
* output [OpenIdConnectProviderCollection](#openidconnectprovidercollection)

### OpenIdConnectProviders_Delete
Deletes specific OpenID Connect Provider of the API Management service instance.


```js
azure_arm_apimanagement.OpenIdConnectProviders_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "opid": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * opid **required** `string`: Identifier of the OpenID Connect Provider.
  * If-Match **required** `string`: The entity state (Etag) version of the OpenID Connect Provider to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### OpenIdConnectProviders_Get
Gets specific OpenID Connect Provider.


```js
azure_arm_apimanagement.OpenIdConnectProviders_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "opid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * opid **required** `string`: Identifier of the OpenID Connect Provider.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OpenidConnectProviderContract](#openidconnectprovidercontract)

### OpenIdConnectProviders_Update
Updates the specific OpenID Connect Provider.


```js
azure_arm_apimanagement.OpenIdConnectProviders_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "opid": "",
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
  * opid **required** `string`: Identifier of the OpenID Connect Provider.
  * parameters **required** [OpenidConnectProviderUpdateContract](#openidconnectproviderupdatecontract)
  * If-Match **required** `string`: The entity state (Etag) version of the OpenID Connect Provider to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### OpenIdConnectProviders_CreateOrUpdate
Creates or updates the OpenID Connect Provider.


```js
azure_arm_apimanagement.OpenIdConnectProviders_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "opid": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * opid **required** `string`: Identifier of the OpenID Connect Provider.
  * parameters **required** [OpenidConnectProviderCreateContract](#openidconnectprovidercreatecontract)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### PolicySnippets_ListByService
Lists all policy snippets.


```js
azure_arm_apimanagement.PolicySnippets_ListByService({
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
* output `array`
  * items [PolicySnippetContract](#policysnippetcontract)

### Products_ListByService
Lists a collection of products in the specified service instance.


```js
azure_arm_apimanagement.Products_ListByService({
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
  * $filter `string`: | Field       | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * expandGroups `boolean`: When set to true, the response contains an array of groups that have visibility to the product. The default is false.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ProductCollection](#productcollection)

### Products_Delete
Delete product.


```js
azure_arm_apimanagement.Products_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * deleteSubscriptions `boolean`: Delete existing subscriptions to the product or not.
  * If-Match **required** `string`: ETag of the Product Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Products_Get
Gets the details of the product specified by its identifier.


```js
azure_arm_apimanagement.Products_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ProductContract](#productcontract)

### Products_Update
Update product.


```js
azure_arm_apimanagement.Products_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
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
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * parameters **required** [ProductUpdateParameters](#productupdateparameters)
  * If-Match **required** `string`: ETag of the Product Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Products_CreateOrUpdate
Creates or Updates a product.


```js
azure_arm_apimanagement.Products_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * parameters **required** [ProductContract](#productcontract)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ProductApis_ListByProduct
Lists a collection of the APIs associated with a product.


```js
azure_arm_apimanagement.ProductApis_ListByProduct({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * $filter `string`: | Field       | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApiCollection](#apicollection)

### ProductApis_Remove
Deletes the specified API from the specified product.


```js
azure_arm_apimanagement.ProductApis_Remove({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ProductApis_Add
Adds an API to the specified product.


```js
azure_arm_apimanagement.ProductApis_Add({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ProductGroups_ListByProduct
Lists the collection of developer groups associated with the specified product.


```js
azure_arm_apimanagement.ProductGroups_ListByProduct({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * $filter `string`: | Field       | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [GroupCollection](#groupcollection)

### ProductGroups_Remove
Deletes the association between the specified group and product.


```js
azure_arm_apimanagement.ProductGroups_Remove({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "groupId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ProductGroups_Add
Adds the association between the specified developer group with the specified product.


```js
azure_arm_apimanagement.ProductGroups_Add({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "groupId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ProductSubscriptions_ListByProduct
Lists the collection of subscriptions to the specified product.


```js
azure_arm_apimanagement.ProductSubscriptions_ListByProduct({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * $filter `string`: | Field        | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SubscriptionCollection](#subscriptioncollection)

### Property_ListByService
Lists a collection of properties defined within a service instance.


```js
azure_arm_apimanagement.Property_ListByService({
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
  * $filter `string`: | Field | Supported operators    | Supported functions                                   |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PropertyCollection](#propertycollection)

### Property_Delete
Deletes specific property from the the API Management service instance.


```js
azure_arm_apimanagement.Property_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "propId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * propId **required** `string`: Identifier of the property.
  * If-Match **required** `string`: The entity state (Etag) version of the property to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Property_Get
Gets the details of the property specified by its identifier.


```js
azure_arm_apimanagement.Property_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "propId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * propId **required** `string`: Identifier of the property.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PropertyContract](#propertycontract)

### Property_Update
Updates the specific property.


```js
azure_arm_apimanagement.Property_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "propId": "",
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
  * propId **required** `string`: Identifier of the property.
  * parameters **required** [PropertyUpdateParameters](#propertyupdateparameters)
  * If-Match **required** `string`: The entity state (Etag) version of the property to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Property_CreateOrUpdate
Creates or updates a property.


```js
azure_arm_apimanagement.Property_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "propId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * propId **required** `string`: Identifier of the property.
  * parameters **required** [PropertyCreateParameters](#propertycreateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### QuotaByCounterKeys_ListByService
Lists a collection of current quota counter periods associated with the counter-key configured in the policy on the specified service instance. The api does not support paging yet.


```js
azure_arm_apimanagement.QuotaByCounterKeys_ListByService({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "quotaCounterKey": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * quotaCounterKey **required** `string`: Quota counter key identifier.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [QuotaCounterCollection](#quotacountercollection)

### QuotaByCounterKeys_Update
Updates all the quota counter values specified with the existing quota counter key to a value in the specified service instance. This should be used for reset of the quota counter values.


```js
azure_arm_apimanagement.QuotaByCounterKeys_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "quotaCounterKey": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * quotaCounterKey **required** `string`: Quota counter key identifier.
  * parameters **required** [QuotaCounterValueContract](#quotacountervaluecontract)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### QuotaByPeriodKeys_Get
Gets the value of the quota counter associated with the counter-key in the policy for the specific period in service instance.


```js
azure_arm_apimanagement.QuotaByPeriodKeys_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "quotaCounterKey": "",
  "quotaPeriodKey": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * quotaCounterKey **required** `string`: Quota counter key identifier.
  * quotaPeriodKey **required** `string`: Quota period key identifier.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [QuotaCounterContract](#quotacountercontract)

### QuotaByPeriodKeys_Update
Updates an existing quota counter value in the specified service instance.


```js
azure_arm_apimanagement.QuotaByPeriodKeys_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "quotaCounterKey": "",
  "quotaPeriodKey": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * quotaCounterKey **required** `string`: Quota counter key identifier.
  * quotaPeriodKey **required** `string`: Quota period key identifier.
  * parameters **required** [QuotaCounterValueContract](#quotacountervaluecontract)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Regions_ListByService
Lists all azure regions in which the service exists.


```js
azure_arm_apimanagement.Regions_ListByService({
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

### Reports_ListByService
Lists report records.


```js
azure_arm_apimanagement.Reports_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "aggregation": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * aggregation **required** `string` (values: byApi, byGeo, byOperation, byProduct, bySubscription, byTime, byUser): Report aggregation.
  * $filter `string`: The filter to apply on the operation.
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * interval `string`: By time interval. This value is only applicable to ByTime aggregation. Interval must be multiple of 15 minutes and may not be zero. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, secconds))
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ReportCollection](#reportcollection)

### Subscriptions_ListByService
Lists all subscriptions of the API Management service instance.


```js
azure_arm_apimanagement.Subscriptions_ListByService({
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
  * $filter `string`: | Field        | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SubscriptionCollection](#subscriptioncollection)

### Subscriptions_Delete
Deletes the specified subscription.


```js
azure_arm_apimanagement.Subscriptions_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "sid": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * sid **required** `string`: Identifier of the subscription.
  * If-Match **required** `string`: ETag of the Subscription Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Subscriptions_Get
Gets the specified Subscription entity.


```js
azure_arm_apimanagement.Subscriptions_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "sid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * sid **required** `string`: Identifier of the subscription.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SubscriptionContract](#subscriptioncontract)

### Subscriptions_Update
Updates the details of a subscription specificied by its identifier.


```js
azure_arm_apimanagement.Subscriptions_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "sid": "",
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
  * sid **required** `string`: Identifier of the subscription.
  * parameters **required** [SubscriptionUpdateParameters](#subscriptionupdateparameters)
  * If-Match **required** `string`: ETag of the Subscription Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Subscriptions_CreateOrUpdate
Creates or updates the subscription of specified user to the specified product.


```js
azure_arm_apimanagement.Subscriptions_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "sid": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * sid **required** `string`: Identifier of the subscription.
  * parameters **required** [SubscriptionCreateParameters](#subscriptioncreateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Subscriptions_RegeneratePrimaryKey
Regenerates primary key of existing subscription of the API Management service instance.


```js
azure_arm_apimanagement.Subscriptions_RegeneratePrimaryKey({
  "resourceGroupName": "",
  "serviceName": "",
  "sid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * sid **required** `string`: Identifier of the subscription.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Subscriptions_RegenerateSecondaryKey
Regenerates secondary key of existing subscription of the API Management service instance.


```js
azure_arm_apimanagement.Subscriptions_RegenerateSecondaryKey({
  "resourceGroupName": "",
  "serviceName": "",
  "sid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * sid **required** `string`: Identifier of the subscription.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### TenantAccess_Get
Get tenant access information details.


```js
azure_arm_apimanagement.TenantAccess_Get({
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
* output [AccessInformationContract](#accessinformationcontract)

### TenantAccess_Update
Update tenant access information details.


```js
azure_arm_apimanagement.TenantAccess_Update({
  "resourceGroupName": "",
  "serviceName": "",
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
  * parameters **required** [AccessInformationUpdateParameters](#accessinformationupdateparameters)
  * If-Match **required** `string`: The entity state (Etag) version of the tenant access settings to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### TenantAccessGit_Get
Gets the Git access configuration for the tenant.


```js
azure_arm_apimanagement.TenantAccessGit_Get({
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
* output [AccessInformationContract](#accessinformationcontract)

### TenantAccessGit_RegeneratePrimaryKey
Regenerate primary access key for GIT.


```js
azure_arm_apimanagement.TenantAccessGit_RegeneratePrimaryKey({
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
*Output schema unknown*

### TenantAccessGit_RegenerateSecondaryKey
Regenerate secondary access key for GIT.


```js
azure_arm_apimanagement.TenantAccessGit_RegenerateSecondaryKey({
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
*Output schema unknown*

### TenantAccess_RegeneratePrimaryKey
Regenerate primary access key.


```js
azure_arm_apimanagement.TenantAccess_RegeneratePrimaryKey({
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
*Output schema unknown*

### TenantAccess_RegenerateSecondaryKey
Regenerate secondary access key.


```js
azure_arm_apimanagement.TenantAccess_RegenerateSecondaryKey({
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
*Output schema unknown*

### TenantConfiguration_Deploy
This operation applies changes from the specified Git branch to the configuration database. This is a long running operation and could take several minutes to complete.


```js
azure_arm_apimanagement.TenantConfiguration_Deploy({
  "resourceGroupName": "",
  "serviceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * parameters **required** [DeployConfigurationParameters](#deployconfigurationparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationResultContract](#operationresultcontract)

### TenantConfiguration_Save
This operation creates a commit with the current configuration snapshot to the specified branch in the repository. This is a long running operation and could take several minutes to complete.


```js
azure_arm_apimanagement.TenantConfiguration_Save({
  "resourceGroupName": "",
  "serviceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * parameters **required** [SaveConfigurationParameter](#saveconfigurationparameter)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationResultContract](#operationresultcontract)

### TenantConfigurationSyncState_Get
Gets the status of the most recent synchronization between the configuration database and the Git repository.


```js
azure_arm_apimanagement.TenantConfigurationSyncState_Get({
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
* output [TenantConfigurationSyncStateContract](#tenantconfigurationsyncstatecontract)

### TenantConfiguration_Validate
This operation validates the changes in the specified Git branch. This is a long running operation and could take several minutes to complete.


```js
azure_arm_apimanagement.TenantConfiguration_Validate({
  "resourceGroupName": "",
  "serviceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * parameters **required** [DeployConfigurationParameters](#deployconfigurationparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationResultContract](#operationresultcontract)

### Users_ListByService
Lists a collection of registered users in the specified service instance.


```js
azure_arm_apimanagement.Users_ListByService({
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
  * $filter `string`: | Field            | Supported operators    | Supported functions               |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [UserCollection](#usercollection)

### Users_Delete
Deletes specific user.


```js
azure_arm_apimanagement.Users_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "uid": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * deleteSubscriptions `boolean`: Whether to delete user's subscription or not.
  * If-Match **required** `string`: The entity state (Etag) version of the user to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Users_Get
Gets the details of the user specified by its identifier.


```js
azure_arm_apimanagement.Users_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "uid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [UserContract](#usercontract)

### Users_Update
Updates the details of the user specified by its identifier.


```js
azure_arm_apimanagement.Users_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "uid": "",
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
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * parameters **required** [UserUpdateParameters](#userupdateparameters)
  * If-Match **required** `string`: The entity state (Etag) version of the user to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Users_CreateOrUpdate
Creates or Updates a user.


```js
azure_arm_apimanagement.Users_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "uid": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * parameters **required** [UserCreateParameters](#usercreateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Users_GenerateSsoUrl
Retrieves a redirection URL containing an authentication token for signing a given user into the developer portal.


```js
azure_arm_apimanagement.Users_GenerateSsoUrl({
  "resourceGroupName": "",
  "serviceName": "",
  "uid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [GenerateSsoUrlResult](#generatessourlresult)

### UserGroups_ListByUser
Lists all user groups.


```js
azure_arm_apimanagement.UserGroups_ListByUser({
  "resourceGroupName": "",
  "serviceName": "",
  "uid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * $filter `string`: | Field       | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [GroupCollection](#groupcollection)

### UserIdentities_ListByUser
Lists all user identities.


```js
azure_arm_apimanagement.UserIdentities_ListByUser({
  "resourceGroupName": "",
  "serviceName": "",
  "uid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `array`
  * items [UserIdentityContract](#useridentitycontract)

### UserSubscriptions_ListByUser
Lists the collection of subscriptions of the specified user.


```js
azure_arm_apimanagement.UserSubscriptions_ListByUser({
  "resourceGroupName": "",
  "serviceName": "",
  "uid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * $filter `string`: | Field        | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SubscriptionCollection](#subscriptioncollection)



## Definitions

### AccessInformationContract
* AccessInformationContract `object`: Tenant access information contract of the API Management service.
  * enabled `boolean`: Tenant access information of the API Management service.
  * id `string`: Identifier.
  * primaryKey `string`: Primary access key.
  * secondaryKey `string`: Secondary access key.

### AccessInformationUpdateParameters
* AccessInformationUpdateParameters `object`: Tenant access information update parameters of the API Management service.
  * enabled **required** `boolean`: Tenant access information of the API Management service.

### ApiCollection
* ApiCollection `object`: Paged Api list representation.
  * count `integer`: Total records count number.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [ApiContract](#apicontract)

### ApiContract
* ApiContract `object`: API details.
  * authenticationSettings [AuthenticationSettingsContract](#authenticationsettingscontract)
  * description `string`: Description of the API. May include HTML formatting tags.
  * id `string`: API identifier path: /apis/{apiId}
  * name **required** `string`: API name.
  * path **required** `string`: Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
  * protocols **required** `array`: Describes on which protocols the operations in this API can be invoked.
    * items `string` (values: Http, Https)
  * serviceUrl **required** `string`: Absolute URL of the backend service implementing this API.
  * subscriptionKeyParameterNames [SubscriptionKeyParameterNamesContract](#subscriptionkeyparameternamescontract)
  * type `string` (values: Http, Soap): Type of API.

### ApiExportResult
* ApiExportResult `object`: The response model for the export API output operation.
  * content `string`: Response content bytes.
  * requestId `string`
  * statusCode `string` (values: Continue, OK, Created, Accepted, NotFound, Conflict)

### AuthenticationSettingsContract
* AuthenticationSettingsContract `object`: API Authentication Settings.
  * oAuth2 [OAuth2AuthenticationSettingsContract](#oauth2authenticationsettingscontract)

### AuthorizationServerCollection
* AuthorizationServerCollection `object`: Paged OAuth2 Authorization Servers list representation.
  * count `integer`: Total records count number.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [OAuth2AuthorizationServerContract](#oauth2authorizationservercontract)

### BackendCollection
* BackendCollection `object`: Paged Backend list representation.
  * count `integer`: Total records count number.
  * nextLink `string`: Next page link if any.
  * value `array`: Backend values.
    * items [BackendResponse](#backendresponse)

### BackendContract
* BackendContract `object`: Parameters supplied to the Create Backend operation.
  * host **required** `string`: Host attribute of the backend. Host is a pure hostname without a port or suffix, for example backend.contoso.com. Must not be empty.
  * skipCertificateChainValidation `boolean`: Flag indicating whether SSL certificate chain validation should be skipped when using self-signed certificates for this backend host.

### BackendResponse
* BackendResponse `object`: The Backend entity in API Management represents a backend service that is configured to skip certification chain validation when using a self-signed certificate to test mutual certificate authentication.
  * id `string`: Uniquely identifies the backend within the current API Management service instance. The value is a valid relative URL in the format of /backends/{backendId} where {backendId} is a backend identifier.
  * host **required** `string`: Host attribute of the backend. Host is a pure hostname without a port or suffix, for example backend.contoso.com. Must not be empty.
  * skipCertificateChainValidation `boolean`: Flag indicating whether SSL certificate chain validation should be skipped when using self-signed certificates for this backend host.

### BackendUpdateParameters
* BackendUpdateParameters `object`: Parameters supplied to the Update Backend operation.
  * host `string`: Host attribute of the backend. Host is a pure hostname without a port or suffix, for example backend.contoso.com. Must not be empty.
  * skipCertificateChainValidation `boolean`: Flag indicating whether SSL certificate chain validation should be skipped when using self-signed certificates for this backend host.

### CertificateCollection
* CertificateCollection `object`: Paged Certificates list representation.
  * count `integer`: Total records count number.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [CertificateContract](#certificatecontract)

### CertificateContract
* CertificateContract `object`: Certificate details.
  * expirationDate **required** `string`: Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * id `string`: Certificate identifier path: /certificates/{certificateId}
  * subject **required** `string`: Subject attribute of the certificate.
  * thumbprint **required** `string`: Thumbprint of the certificate.

### CertificateCreateOrUpdateParameters
* CertificateCreateOrUpdateParameters `object`: Parameters supplied to the CreateOrUpdate certificate operation.
  * data **required** `string`: Base 64 encoded certificate using the application/x-pkcs12 representation.
  * password **required** `string`: Password for the Certificate

### DeployConfigurationParameters
* DeployConfigurationParameters `object`: Parameters supplied to the Deploy Configuration operation.
  * branch **required** `string`: The name of the Git branch from which the configuration is to be deployed to the configuration database.
  * force `boolean`: The value enforcing deleting subscriptions to products that are deleted in this update.

### ErrorBodyContract
* ErrorBodyContract `object`: Error Body contract.
  * code `string`: Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response.
  * details `array`: The list of invalid fields send in request, in case of validation error.
    * items [ErrorFieldContract](#errorfieldcontract)
  * message `string`: Human-readable representation of the error.

### ErrorFieldContract
* ErrorFieldContract `object`: Error Field contract.
  * code `string`: Property level error code.
  * message `string`: Human-readable representation of property-level error.
  * target `string`: Property name.

### GenerateSsoUrlResult
* GenerateSsoUrlResult `object`: Generate SSO Url operations response details.
  * value `string`: Redirect Url containing the SSO URL value.

### GroupCollection
* GroupCollection `object`: Paged Group list representation.
  * count `integer`: Total records count number.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [GroupContract](#groupcontract)

### GroupContract
* GroupContract `object`: Developer group.
  * builtIn `boolean`: true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
  * description `string`: Group description. Can contain HTML formatting tags.
  * externalId `string`: For external groups, this property contains the id of the group from the external identity provider, e.g. Azure Active Directory; otherwise the value is null.
  * id `string`: Uniquely identifies the group within the current API Management service instance. The value is a valid relative URL in the format of /groups/{groupid} where {groupid} is a group identifier.
  * name **required** `string`: Group name.
  * type `string` (values: Custom, System, External): Group type.

### GroupCreateParameters
* GroupCreateParameters `object`: Parameters supplied to the Create Group operation.
  * description `string`: Group description.
  * externalId `string`: Identifier for an external group.
  * name **required** `string`: Group name.
  * type `string` (values: Custom, System, External): Group type.

### GroupUpdateParameters
* GroupUpdateParameters `object`: Parameters supplied to the Update Group operation.
  * description `string`: Group description.
  * externalId `string`: Identifier for an external group.
  * name `string`: Group name.
  * type `string` (values: Custom, System, External): Group type.

### IdentityProviderContract
* IdentityProviderContract `object`: The external Identity Providers like Facebook, Google, Microsoft, Twitter or Azure Active Directory which can be used to enable access to the API Management service developer portal for all users.
  * allowedTenants `array`: List of Allowed Tenants when configuring Azure Active Directory login.
    * items `string`
  * clientId **required** `string`: Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
  * clientSecret **required** `string`: Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft.
  * type `string` (values: facebook, google, microsoft, twitter, aad): Identity Provider Type identifier.

### IdentityProviderList
* IdentityProviderList `object`: List of all the Identity Providers configured on the service instance.
  * value `array`: Identity Provider configuration values.
    * items [IdentityProviderContract](#identityprovidercontract)

### IdentityProviderUpdateParameters
* IdentityProviderUpdateParameters `object`: Parameters supplied to the Update Identity Provider operation.
  * allowedTenants `array`: List of Allowed Tenants when configuring Azure Active Directory login.
    * items `string`
  * clientId `string`: Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
  * clientSecret `string`: Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft.

### LoggerCollection
* LoggerCollection `object`: Paged Logger list representation.
  * count `integer`: Total records count number.
  * nextLink `string`: Next page link if any.
  * value `array`: Logger values.
    * items [LoggerResponse](#loggerresponse)

### LoggerCreateParameters
* LoggerCreateParameters `object`: Parameters supplied to the Create Logger operation.
  * credentials **required** `object`: The name and SendRule connection string of the event hub.
  * description `string`: Logger description.
  * isBuffered `boolean`: Whether records are buffered in the logger before publishing. Default is assumed to be true.
  * type **required** `string` (values: AzureEventHub): Logger type.

### LoggerResponse
* LoggerResponse `object`: The Logger entity in API Management represents an event sink that you can use to log API Management events. Currently the Logger entity supports logging API Management events to Azure Event Hubs.
  * credentials **required** `object`: The name and SendRule connection string of the event hub.
  * description `string`: Logger description.
  * id `string`: Uniquely identifies the logger within the current API Management service instance. The value is a valid relative URL in the format of /loggers/{loggerId} where {loggerId} is a logger identifier.
  * isBuffered `boolean`: Whether records are buffered in the logger before publishing. Default is assumed to be true.
  * type **required** `string` (values: AzureEventHub): Logger type.

### LoggerUpdateParameters
* LoggerUpdateParameters `object`: Parameters supplied to the Update Logger operation.
  * credentials `object`: Logger credentials.
  * description `string`: Logger description.
  * isBuffered `boolean`: whether records are buffered in the logger before publishing. Default is assumed to be true.
  * type **required** `string` (values: AzureEventHub): Logger type.

### OAuth2AuthenticationSettingsContract
* OAuth2AuthenticationSettingsContract `object`: API OAuth2 Authentication settings details.
  * authorizationServerId `string`: OAuth authorization server identifier.
  * scope `string`: operations scope.

### OAuth2AuthorizationServerContract
* OAuth2AuthorizationServerContract `object`: External OAuth authorization server settings.
  * authorizationEndpoint **required** `string`: OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
  * authorizationMethods `array`: HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
    * items `string` (values: HEAD, OPTIONS, TRACE, GET, POST, PUT, PATCH, DELETE)
  * bearerTokenSendingMethods `array`: Specifies the mechanism by which access token is passed to the API. 
    * items `string` (values: authorizationHeader, query)
  * clientAuthenticationMethod `array`: Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
    * items `string` (values: Basic, Body)
  * clientId **required** `string`: Client or app id registered with this authorization server.
  * clientRegistrationEndpoint **required** `string`: Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
  * clientSecret `string`: Client or app secret registered with this authorization server.
  * defaultScope `string`: Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
  * description `string`: Description of the authorization server. Can contain HTML formatting tags.
  * grantTypes **required** `array`: Form of an authorization grant, which the client uses to request the access token.
    * items `string` (values: authorizationCode, implicit, resourceOwnerPassword, clientCredentials)
  * id `string`: Uniquely identifies the authorization server within the current API Management service instance. The value is a valid relative URL in the format of /authorizationServers/{authsid} where {authsid} is an authorization server identifier.
  * name **required** `string`: User-friendly authorization server name.
  * resourceOwnerPassword `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
  * resourceOwnerUsername `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
  * supportState `boolean`: If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
  * tokenBodyParameters `array`: Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
    * items [TokenBodyParameterContract](#tokenbodyparametercontract)
  * tokenEndpoint `string`: OAuth token endpoint. Contains absolute URI to entity being referenced.

### OAuth2AuthorizationServerUpdateContract
* OAuth2AuthorizationServerUpdateContract `object`: External OAuth authorization server Update settings contract.
  * authorizationEndpoint `string`: OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
  * authorizationMethods `array`: HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
    * items `string` (values: HEAD, OPTIONS, TRACE, GET, POST, PUT, PATCH, DELETE)
  * bearerTokenSendingMethods `array`: Specifies the mechanism by which access token is passed to the API. 
    * items `string` (values: authorizationHeader, query)
  * clientAuthenticationMethod `array`: Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
    * items `string` (values: Basic, Body)
  * clientId `string`: Client or app id registered with this authorization server.
  * clientRegistrationEndpoint `string`: Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
  * clientSecret `string`: Client or app secret registered with this authorization server.
  * defaultScope `string`: Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
  * description `string`: Description of the authorization server. Can contain HTML formatting tags.
  * grantTypes `array`: Form of an authorization grant, which the client uses to request the access token.
    * items `string` (values: authorizationCode, implicit, resourceOwnerPassword, clientCredentials)
  * name `string`: User-friendly authorization server name.
  * resourceOwnerPassword `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
  * resourceOwnerUsername `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
  * supportState `boolean`: If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
  * tokenBodyParameters `array`: Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
    * items [TokenBodyParameterContract](#tokenbodyparametercontract)
  * tokenEndpoint `string`: OAuth token endpoint. Contains absolute URI to entity being referenced.

### OpenIdConnectProviderCollection
* OpenIdConnectProviderCollection `object`: Paged OpenIdProviders list representation.
  * count `integer`: Total records count number.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [OpenidConnectProviderContract](#openidconnectprovidercontract)

### OpenidConnectProviderContract
* OpenidConnectProviderContract `object`: OpenID Connect Providers Contract.
  * clientId **required** `string`: Client ID of developer console which is the client application.
  * clientSecret `string`: Client Secret of developer console which is the client application.
  * description `string`: User-friendly description of OpenID Connect Provider.
  * id `string`: OpenID Connect Provider identifier.
  * metadataEndpoint **required** `string`: Metadata endpoint URI.
  * name **required** `string`: User-friendly OpenID Connect Provider name.

### OpenidConnectProviderCreateContract
* OpenidConnectProviderCreateContract `object`: Parameters supplied to the Create OpenID Connect Provider operation.
  * clientId **required** `string`: Client ID of developer console which is the client application.
  * clientSecret `string`: Client Secret of developer console which is the client application.
  * description `string`: User-friendly description of OpenID Connect Provider.
  * metadataEndpoint **required** `string`: Metadata endpoint URI.
  * name **required** `string`: User-friendly OpenID Connect Provider name.

### OpenidConnectProviderUpdateContract
* OpenidConnectProviderUpdateContract `object`: Parameters supplied to the Update OpenID Connect Provider operation.
  * clientId `string`: Client ID of developer console which is the client application.
  * clientSecret `string`: Client Secret of developer console which is the client application.
  * description `string`: User-friendly description of OpenID Connect Provider.
  * metadataEndpoint `string`: Metadata endpoint URI.
  * name `string`: User-friendly OpenID Connect Provider name.

### OperationCollection
* OperationCollection `object`: Paged Operation list representation.
  * count `integer`: Total records count number.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [OperationContract](#operationcontract)

### OperationContract
* OperationContract `object`: Api Operation details.
  * description `string`: Description of the operation. May include HTML formatting tags.
  * id `string`: Uniquely identifies the operation within the current API Management service instance. The value is a valid relative URL in the format of /apis/{aid}/operations/{id} where {aid} is an API identifier and {id} is an operation identifier.
  * method **required** `string`: A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
  * name **required** `string`: Operation Name.
  * request [RequestContract](#requestcontract)
  * responses `array`: Array of Operation responses.
    * items [ResultContract](#resultcontract)
  * templateParameters `array`: Collection of URL template parameters.
    * items [ParameterContract](#parametercontract)
  * urlTemplate **required** `string`: Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}

### OperationResultContract
* OperationResultContract `object`: Operation Result.
  * error [ErrorBodyContract](#errorbodycontract)
  * id `string`: Operation result identifier.
  * resultInfo `string`: Optional result info.
  * started `string`: Start time of an async operation. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * status `string` (values: Started, InProgress, Succeeded, Failed): Status of an async operation.
  * updated `string`: Last update time of an async operation. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.

### ParameterContract
* ParameterContract `object`: Operation parameters details.
  * defaultValue `string`: Default parameter value.
  * description `string`: Parameter description.
  * name **required** `string`: Parameter name.
  * required `boolean`: whether parameter is required or not.
  * type **required** `string`: Parameter type.
  * values `array`: Parameter values.
    * items `string`

### PatchParameters
* PatchParameters `object`: Parameters supplied to the Patch operations.
  * RawJson **required** `object`: json value.

### PolicySnippetContract
* PolicySnippetContract `object`: Policy snippet.
  * content `string`: Snippet content.
  * name `string`: Snippet name.
  * scope `string` (values: Tenant, Product, Api, Operation, All): Snippet scope.
  * toolTip `string`: Snippet toolTip.

### ProductCollection
* ProductCollection `object`: Paged Products list representation.
  * count `integer`: Total records count number.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [ProductContract](#productcontract)

### ProductContract
* ProductContract `object`: Product profile.
  * approvalRequired `boolean`: whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false.
  * description `string`: Product description. May include HTML formatting tags.
  * id `string`: Uniquely identifies the product within the current API Management service instance. The value is a valid relative URL in the format of /products/{productId} where {productId} is a product identifier.
  * name **required** `string`: Product name.
  * state `string` (values: NotPublished, Published): whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is NotPublished.
  * subscriptionRequired `boolean`: Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true.
  * subscriptionsLimit `integer`: Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false.
  * terms `string`: Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process.

### ProductUpdateParameters
* ProductUpdateParameters `object`: Parameters supplied to the CreateOrUpdate Product operation.
  * approvalRequired `boolean`: whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false.
  * description `string`: Product description.
  * name `string`: Product name.
  * state `string` (values: NotPublished, Published): whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators.
  * subscriptionRequired `boolean`: whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true.
  * subscriptionsLimit `integer`: whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false.
  * terms `string`: Product terms and conditions. Developer will have to accept these terms before he's allowed to call product API.

### PropertyCollection
* PropertyCollection `object`: Paged Property list representation.
  * count `integer`: Total records count number.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [PropertyContract](#propertycontract)

### PropertyContract
* PropertyContract `object`: Property details.
  * id `string`: Uniquely identifies the property within the current API Management service instance. The value is a valid relative URL in the format of /properties/{propId} where {propId} is a property identifier.
  * name **required** `string`: Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters.
  * secret `boolean`: Determines whether the value is a secret and should be encrypted or not. Default value is false.
  * tags `array`: Optional tags that when provided can be used to filter the property list.
    * items `string`
  * value **required** `string`: Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace.

### PropertyCreateParameters
* PropertyCreateParameters `object`: Parameters supplied to the Create Property operation.
  * name **required** `string`: Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters.
  * secret `boolean`: Determines whether the value is a secret and should be encrypted or not. Default value is false.
  * tags `array`: Optional tags that when provided can be used to filter the property list.
    * items `string`
  * value **required** `string`: Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace.

### PropertyUpdateParameters
* PropertyUpdateParameters `object`: Parameters supplied to the Update Property operation.
  * name `string`: Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters.
  * secret `boolean`: Determines whether the value is a secret and should be encrypted or not. Default value is false.
  * tags `array`: Optional tags that when provided can be used to filter the property list.
    * items `string`
  * value `string`: Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace.

### QuotaCounterCollection
* QuotaCounterCollection `object`: Paged Quota Counter list representation.
  * count `integer`: Total records count number.
  * nextLink `string`: Next page link if any.
  * value `array`: Quota counter values.
    * items [QuotaCounterContract](#quotacountercontract)

### QuotaCounterContract
* QuotaCounterContract `object`: Quota counter details.
  * counterKey **required** `string`: The Key value of the Counter. Must not be empty.
  * periodEndTime **required** `string`: The date of the end of Counter Period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * periodKey **required** `string`: Identifier of the Period for which the counter was collected. Must not be empty.
  * periodStartTime **required** `string`: The date of the start of Counter Period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * callsCount `integer`: Number of times Counter was called.
  * kbTransferred `number`: Data Transferred in KiloBytes.

### QuotaCounterValueContract
* QuotaCounterValueContract `object`: Quota counter value details.
  * callsCount `integer`: Number of times Counter was called.
  * kbTransferred `number`: Data Transferred in KiloBytes.

### RegionContract
* RegionContract `object`: Region profile.
  * isMasterRegion **required** `boolean`: whether Region is the master region.
  * name **required** `string`: Region name.

### RegionListResult
* RegionListResult `object`: Lists Regions operation response details.
  * value `array`: Lists of Regions.
    * items [RegionContract](#regioncontract)

### ReportCollection
* ReportCollection `object`: Paged Report records list representation.
  * count `integer`: Total records count number.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [ReportRecordContract](#reportrecordcontract)

### ReportRecordContract
* ReportRecordContract `object`: Report data.
  * apiId `string`: API identifier path. /apis/{apiId}
  * apiRegion `string`: API region identifier.
  * apiTimeAvg `number`: Average time it took to process request.
  * apiTimeMax `number`: Maximum time it took to process request.
  * apiTimeMin `number`: Minimum time it took to process request.
  * bandwidth `integer`: Bandwidth consumed.
  * cacheHitCount `integer`: Number of times when content was served from cache policy.
  * cacheMissCount `integer`: Number of times content was fetched from backend.
  * callCountBlocked `integer`: Number of calls blocked due to invalid credentials.
  * callCountFailed `integer`: Number of calls failed due to proxy or backend errors.
  * callCountOther `integer`: Number of other calls.
  * callCountSuccess `integer`: Number of succesful calls.
  * callCountTotal `integer`: Total number of calls.
  * country `string`: Country to which this record data is related.
  * interval `integer`: Length of agregation period.
  * name `string`: Name depending on report endpoint specifies product, API, operation or developer name.
  * operationId `string`: Operation identifier path. /apis/{apiId}/operations/{operationId}
  * productId `string`: Product identifier path. /products/{productId}
  * region `string`: Country region to which this record data is related.
  * serviceTimeAvg `number`: Average time it took to process request on backend.
  * serviceTimeMax `number`: Maximum time it took to process request on backend.
  * serviceTimeMin `number`: Minimum time it took to process request on backend.
  * subscriptionId `string`: Subscription identifier path. /subscriptions/{subscriptionId}
  * timestamp `string`: Start of aggregation period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * userId `string`: User identifier path. /users/{userId}
  * zip `string`: Zip code to which this record data is related.

### RepresentationContract
* RepresentationContract `object`: Operation request/response representation details.
  * contentType **required** `string`: Specifies a registered or custom content type for this representation, e.g. application/xml.
  * sample `string`: An example of the representation.

### RequestContract
* RequestContract `object`: Operation request details.
  * description `string`: Operation request description.
  * headers `array`: Collection of operation request headers.
    * items [ParameterContract](#parametercontract)
  * queryParameters `array`: Collection of operation request query parameters.
    * items [ParameterContract](#parametercontract)
  * representations `array`: Collection of operation request representations.
    * items [RepresentationContract](#representationcontract)

### ResultContract
* ResultContract `object`: Operation response details.
  * description `string`: Operation response description.
  * representations `array`: Collection of operation response representations.
    * items [RepresentationContract](#representationcontract)
  * statusCode **required** `integer`: Operation response HTTP status code.

### SaveConfigurationParameter
* SaveConfigurationParameter `object`: Parameters supplied to the Save Tenant Configuration operation.
  * branch **required** `string`: The name of the Git branch in which to commit the current configuration snapshot.
  * force `boolean`: The value if true, the current configuration database is committed to the Git repository, even if the Git repository has newer changes that would be overwritten.

### SubscriptionCollection
* SubscriptionCollection `object`: Paged Subsctions list representation.
  * count `integer`: Total records count number.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [SubscriptionContract](#subscriptioncontract)

### SubscriptionContract
* SubscriptionContract `object`: Subscription details.
  * createdDate `string`: Subscription creation date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * endDate `string`: Date when subscription was cancelled or expired. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * expirationDate `string`: Subscription expiration date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * id `string`: Uniquely identifies the subscription within the current API Management service instance. The value is a valid relative URL in the format of /subscriptions/{sid} where {sid} is a subscription identifier.
  * name `string`: The name of the subscription, or null if the subscription has no name.
  * notificationDate `string`: Upcoming subscription expiration notification date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * primaryKey `string`: Subscription primary key.
  * productId `string`: The product resource identifier of the subscribed product. The value is a valid relative URL in the format of /products/{productId} where {productId} is a product identifier.
  * secondaryKey `string`: Subscription secondary key.
  * startDate `string`: Subscription activation date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * state `string` (values: Suspended, Active, Expired, Submitted, Rejected, Cancelled): Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
  * stateComment `string`: Optional subscription comment added by an administrator.
  * userId `string`: The user resource identifier of the subscription owner. The value is a valid relative URL in the format of /users/{uid} where {uid} is a user identifier.

### SubscriptionCreateParameters
* SubscriptionCreateParameters `object`: Parameters supplied to the Create subscription operation.
  * name **required** `string`: Subscription name.
  * primaryKey `string`: Primary subscription key. If not specified during request key will be generated automatically.
  * productId **required** `string`: Product (product id path) for which subscription is being created in form /products/{productid}
  * secondaryKey `string`: Secondary subscription key. If not specified during request key will be generated automatically.
  * state `string` (values: Suspended, Active, Expired, Submitted, Rejected, Cancelled): Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
  * userId **required** `string`: User (user id path) for whom subscription is being created in form /users/{uid}

### SubscriptionKeyParameterNamesContract
* SubscriptionKeyParameterNamesContract `object`: Subscription key parameter names details.
  * header `string`: Subscription key header name.
  * query `string`: Subscription key query string parameter name.

### SubscriptionUpdateParameters
* SubscriptionUpdateParameters `object`: Parameters supplied to the Update subscription operation.
  * expirationDate `string`: New subscription expiration date.
  * name `string`: Subscription name.
  * primaryKey `string`: Primary subscription key.
  * productId `string`: Product identifier path: /products/{productId}
  * secondaryKey `string`: Secondary subscription key.
  * state `string` (values: Suspended, Active, Expired, Submitted, Rejected, Cancelled): Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
  * stateComment `string`: Comments describing subscription state change by the administrator.
  * userId `string`: User identifier path: /users/{uid}

### TenantConfigurationSyncStateContract
* TenantConfigurationSyncStateContract `object`: Tenant Configuration Synchronization State.
  * branch `string`: The name of Git branch.
  * commitId `string`: The latest commit Id.
  * configurationChangeDate `string`: The date of the latest configuration change. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * isExport `boolean`: value indicating if last sync was save (true) or deploy (false) operation.
  * isGitEnabled `boolean`: value indicating whether Git configuration access is enabled.
  * isSynced `boolean`: value indicating if last synchronization was later than the configuration change.
  * syncDate `string`: The date of the latest synchronization. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.

### TenantLongRunningOperationResult
* TenantLongRunningOperationResult `object`: A standard service response for long running tenant operations.
  * operationStatusLink `string`: operation status link.
  * requestId `string`
  * retryAfter `integer`: The number of minutes to retry the operation after.
  * status `string` (values: InProgress, Succeeded, Failed): Current status of the operation.
  * statusCode `string` (values: Continue, OK, Created, Accepted, NotFound, Conflict)

### TokenBodyParameterContract
* TokenBodyParameterContract `object`: OAuth acquire token request body parameter (www-url-form-encoded).
  * name **required** `string`: body parameter name.
  * value **required** `string`: body parameter value.

### UserCollection
* UserCollection `object`: Paged Users list representation.
  * count `integer`: Total records count number.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [UserContract](#usercontract)

### UserContract
* UserContract `object`: User profile.
  * email `string`: Email address.
  * firstName `string`: First name.
  * id `string`: User identifier path.
  * identities `array`: Collection of user identities.
    * items [UserIdentityContract](#useridentitycontract)
  * lastName `string`: Last name.
  * note `string`: Administrator's note about given user.
  * registrationDate `string`: Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * state `string` (values: Active, Blocked): User state.

### UserCreateParameters
* UserCreateParameters `object`: Parameters supplied to the Create User operation.
  * email **required** `string`: Email address. Must not be empty and must be unique within the service instance.
  * firstName **required** `string`: First name.
  * lastName **required** `string`: Last name.
  * note `string`: Optional note about a user set by the administrator.
  * password **required** `string`: User Password.
  * state `string` (values: Active, Blocked): Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.

### UserIdentityContract
* UserIdentityContract `object`: User identity details.
  * id `string`: Identifier value within provider.
  * provider `string`: Identity provider name.

### UserUpdateParameters
* UserUpdateParameters `object`: Parameters supplied to the Update User operation.
  * email `string`: Email address.
  * firstName `string`: First name.
  * lastName `string`: Last name.
  * note `string`: Note about user.
  * password `string`: Password.
  * state `string` (values: Active, Blocked): Account state.


