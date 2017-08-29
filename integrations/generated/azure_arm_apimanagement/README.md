# @datafire/azure_arm_apimanagement

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_apimanagement
```

```js
let datafire = require('datafire');
let azure_arm_apimanagement = require('@datafire/azure_arm_apimanagement').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_apimanagement.Apis_ListByService({}).then(data => {
  console.log(data);
})
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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* $filter (string) - | Field       | Supported operators    | Supported functions               |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* apiId (string) **required** - API identifier. Must be unique in the current API Management service instance.
* If-Match (string) **required** - ETag of the API Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* apiId (string) **required** - API identifier. Must be unique in the current API Management service instance.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* apiId (string) **required** - API identifier. Must be unique in the current API Management service instance.
* parameters (undefined) **required** - Parameters supplied to the Patch operations.
* If-Match (string) **required** - ETag of the API entity. ETag should match the current entity state in the header response of the GET request or it should be * for unconditional update.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* apiId (string) **required** - API identifier. Must be unique in the current API Management service instance.
* parameters (undefined) **required** - API details.
* If-Match (string) - ETag of the Api Entity. For Create Api Etag should not be specified. For Update Etag should match the existing Entity or it can be * for unconditional update.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* apiId (string) **required** - API identifier. Must be unique in the current API Management service instance.
* $filter (string) - | Field       | Supported operators    | Supported functions               |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* apiId (string) **required** - API identifier. Must be unique in the current API Management service instance.
* operationId (string) **required** - Operation identifier within an API. Must be unique in the current API Management service instance.
* If-Match (string) **required** - ETag of the API Operation Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* apiId (string) **required** - API identifier. Must be unique in the current API Management service instance.
* operationId (string) **required** - Operation identifier within an API. Must be unique in the current API Management service instance.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* apiId (string) **required** - API identifier. Must be unique in the current API Management service instance.
* operationId (string) **required** - Operation identifier within an API. Must be unique in the current API Management service instance.
* parameters (undefined) **required** - Parameters supplied to the Patch operations.
* If-Match (string) **required** - ETag of the API Operation Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* apiId (string) **required** - API identifier. Must be unique in the current API Management service instance.
* operationId (string) **required** - Operation identifier within an API. Must be unique in the current API Management service instance.
* parameters (undefined) **required** - Api Operation details.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* apiId (string) **required** - API identifier. Must be unique in the current API Management service instance.
* $filter (string) - | Field | Supported operators    | Supported functions                         |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* $filter (string) - | Field | Supported operators    | Supported functions                         |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* authsid (string) **required** - Identifier of the authorization server.
* If-Match (string) **required** - The entity state (Etag) version of the authentication server to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* authsid (string) **required** - Identifier of the authorization server.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* authsid (string) **required** - Identifier of the authorization server.
* parameters (undefined) **required** - External OAuth authorization server Update settings contract.
* If-Match (string) **required** - The entity state (Etag) version of the authorization server to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* authsid (string) **required** - Identifier of the authorization server.
* parameters (undefined) **required** - External OAuth authorization server settings.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* $filter (string) - | Field | Supported operators    | Supported functions                         |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* backendid (string) **required** - User identifier. Must be unique in the current API Management service instance.
* If-Match (string) **required** - The entity state (Etag) version of the backend to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* backendid (string) **required** - User identifier. Must be unique in the current API Management service instance.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* backendid (string) **required** - User identifier. Must be unique in the current API Management service instance.
* parameters (undefined) **required** - Parameters supplied to the Update Backend operation.
* If-Match (string) **required** - The entity state (Etag) version of the backend to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* backendid (string) **required** - User identifier. Must be unique in the current API Management service instance.
* parameters (undefined) **required** - Parameters supplied to the Create Backend operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* $filter (string) - | Field          | Supported operators    | Supported functions                         |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* certificateId (string) **required** - Identifier of the certificate.
* If-Match (string) **required** - The entity state (Etag) version of the certificate to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* certificateId (string) **required** - Identifier of the certificate.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* certificateId (string) **required** - Identifier of the certificate entity. Must be unique in the current API Management service instance.
* parameters (undefined) **required** - Parameters supplied to the CreateOrUpdate certificate operation.
* If-Match (string) - The entity state (Etag) version of the certificate to update. A value of "*" can be used for If-Match to unconditionally apply the operation..
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* $filter (string) - | Field       | Supported operators    | Supported functions                         |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* groupId (string) **required** - Group identifier. Must be unique in the current API Management service instance.
* If-Match (string) **required** - ETag of the Group Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* groupId (string) **required** - Group identifier. Must be unique in the current API Management service instance.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* groupId (string) **required** - Group identifier. Must be unique in the current API Management service instance.
* parameters (undefined) **required** - Parameters supplied to the Update Group operation.
* If-Match (string) **required** - ETag of the Group Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* groupId (string) **required** - Group identifier. Must be unique in the current API Management service instance.
* parameters (undefined) **required** - Parameters supplied to the Create Group operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* groupId (string) **required** - Group identifier. Must be unique in the current API Management service instance.
* $filter (string) - | Field            | Supported operators    | Supported functions               |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* groupId (string) **required** - Group identifier. Must be unique in the current API Management service instance.
* uid (string) **required** - User identifier. Must be unique in the current API Management service instance.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* groupId (string) **required** - Group identifier. Must be unique in the current API Management service instance.
* uid (string) **required** - User identifier. Must be unique in the current API Management service instance.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* api-version (string) **required** - Version of the API to be used with the client request.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* identityProviderName (string) **required** - Identity Provider Type identifier.
* If-Match (string) **required** - The entity state (Etag) version of the backend to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* identityProviderName (string) **required** - Identity Provider Type identifier.
* api-version (string) **required** - Version of the API to be used with the client request.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* identityProviderName (string) **required** - Identity Provider Type identifier.
* parameters (undefined) **required** - Parameters supplied to the Update Identity Provider operation.
* If-Match (string) **required** - The entity state (Etag) version of the identity provider configuration to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* identityProviderName (string) **required** - Identity Provider Type identifier.
* parameters (undefined) **required** - The external Identity Providers like Facebook, Google, Microsoft, Twitter or Azure Active Directory which can be used to enable access to the API Management service developer portal for all users.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* $filter (string) - | Field | Supported operators    | Supported functions                         |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* loggerid (string) **required** - Identifier of the logger.
* If-Match (string) **required** - The entity state (Etag) version of the logger to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* loggerid (string) **required** - Identifier of the logger.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* loggerid (string) **required** - Identifier of the logger.
* parameters (undefined) **required** - Parameters supplied to the Update Logger operation.
* If-Match (string) **required** - The entity state (Etag) version of the logger to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* loggerid (string) **required** - Identifier of the logger.
* parameters (undefined) **required** - Parameters supplied to the Create Logger operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* $filter (string) - | Field | Supported operators    | Supported functions                         |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* opid (string) **required** - Identifier of the OpenID Connect Provider.
* If-Match (string) **required** - The entity state (Etag) version of the OpenID Connect Provider to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* opid (string) **required** - Identifier of the OpenID Connect Provider.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* opid (string) **required** - Identifier of the OpenID Connect Provider.
* parameters (undefined) **required** - Parameters supplied to the Update OpenID Connect Provider operation.
* If-Match (string) **required** - The entity state (Etag) version of the OpenID Connect Provider to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* opid (string) **required** - Identifier of the OpenID Connect Provider.
* parameters (undefined) **required** - Parameters supplied to the Create OpenID Connect Provider operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* scope (string) - Policy scope.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* $filter (string) - | Field       | Supported operators    | Supported functions                         |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* expandGroups (boolean) - When set to true, the response contains an array of groups that have visibility to the product. The default is false.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* productId (string) **required** - Product identifier. Must be unique in the current API Management service instance.
* deleteSubscriptions (boolean) - Delete existing subscriptions to the product or not.
* If-Match (string) **required** - ETag of the Product Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* productId (string) **required** - Product identifier. Must be unique in the current API Management service instance.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* productId (string) **required** - Product identifier. Must be unique in the current API Management service instance.
* parameters (undefined) **required** - Parameters supplied to the CreateOrUpdate Product operation.
* If-Match (string) **required** - ETag of the Product Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* productId (string) **required** - Product identifier. Must be unique in the current API Management service instance.
* parameters (undefined) **required** - Product profile.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* productId (string) **required** - Product identifier. Must be unique in the current API Management service instance.
* $filter (string) - | Field       | Supported operators    | Supported functions                         |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* productId (string) **required** - Product identifier. Must be unique in the current API Management service instance.
* apiId (string) **required** - API identifier. Must be unique in the current API Management service instance.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* productId (string) **required** - Product identifier. Must be unique in the current API Management service instance.
* apiId (string) **required** - API identifier. Must be unique in the current API Management service instance.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* productId (string) **required** - Product identifier. Must be unique in the current API Management service instance.
* $filter (string) - | Field       | Supported operators    | Supported functions                         |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* productId (string) **required** - Product identifier. Must be unique in the current API Management service instance.
* groupId (string) **required** - Group identifier. Must be unique in the current API Management service instance.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* productId (string) **required** - Product identifier. Must be unique in the current API Management service instance.
* groupId (string) **required** - Group identifier. Must be unique in the current API Management service instance.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* productId (string) **required** - Product identifier. Must be unique in the current API Management service instance.
* $filter (string) - | Field        | Supported operators    | Supported functions                         |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* $filter (string) - | Field | Supported operators    | Supported functions                                   |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* propId (string) **required** - Identifier of the property.
* If-Match (string) **required** - The entity state (Etag) version of the property to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* propId (string) **required** - Identifier of the property.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* propId (string) **required** - Identifier of the property.
* parameters (undefined) **required** - Parameters supplied to the Update Property operation.
* If-Match (string) **required** - The entity state (Etag) version of the property to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* propId (string) **required** - Identifier of the property.
* parameters (undefined) **required** - Parameters supplied to the Create Property operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* quotaCounterKey (string) **required** - Quota counter key identifier.
* api-version (string) **required** - Version of the API to be used with the client request.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* quotaCounterKey (string) **required** - Quota counter key identifier.
* parameters (undefined) **required** - Quota counter value details.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* quotaCounterKey (string) **required** - Quota counter key identifier.
* quotaPeriodKey (string) **required** - Quota period key identifier.
* api-version (string) **required** - Version of the API to be used with the client request.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* quotaCounterKey (string) **required** - Quota counter key identifier.
* quotaPeriodKey (string) **required** - Quota period key identifier.
* parameters (undefined) **required** - Quota counter value details.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* aggregation (string) **required** - Report aggregation.
* $filter (string) - The filter to apply on the operation.
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* interval (string) - By time interval. This value is only applicable to ByTime aggregation. Interval must be multiple of 15 minutes and may not be zero. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, secconds))
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* $filter (string) - | Field        | Supported operators    | Supported functions                         |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* sid (string) **required** - Identifier of the subscription.
* If-Match (string) **required** - ETag of the Subscription Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* sid (string) **required** - Identifier of the subscription.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* sid (string) **required** - Identifier of the subscription.
* parameters (undefined) **required** - Parameters supplied to the Update subscription operation.
* If-Match (string) **required** - ETag of the Subscription Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* sid (string) **required** - Identifier of the subscription.
* parameters (undefined) **required** - Parameters supplied to the Create subscription operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* sid (string) **required** - Identifier of the subscription.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* sid (string) **required** - Identifier of the subscription.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* parameters (undefined) **required** - Tenant access information update parameters of the API Management service.
* If-Match (string) **required** - The entity state (Etag) version of the tenant access settings to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* parameters (undefined) **required** - Parameters supplied to the Deploy Configuration operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* parameters (undefined) **required** - Parameters supplied to the Save Tenant Configuration operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* parameters (undefined) **required** - Parameters supplied to the Deploy Configuration operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* $filter (string) - | Field            | Supported operators    | Supported functions               |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* uid (string) **required** - User identifier. Must be unique in the current API Management service instance.
* deleteSubscriptions (boolean) - Whether to delete user's subscription or not.
* If-Match (string) **required** - The entity state (Etag) version of the user to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* uid (string) **required** - User identifier. Must be unique in the current API Management service instance.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* uid (string) **required** - User identifier. Must be unique in the current API Management service instance.
* parameters (undefined) **required** - Parameters supplied to the Update User operation.
* If-Match (string) **required** - The entity state (Etag) version of the user to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* uid (string) **required** - User identifier. Must be unique in the current API Management service instance.
* parameters (undefined) **required** - Parameters supplied to the Create User operation.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* uid (string) **required** - User identifier. Must be unique in the current API Management service instance.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* uid (string) **required** - User identifier. Must be unique in the current API Management service instance.
* $filter (string) - | Field       | Supported operators    | Supported functions                         |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* uid (string) **required** - User identifier. Must be unique in the current API Management service instance.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* serviceName (string) **required** - The name of the API Management service.
* uid (string) **required** - User identifier. Must be unique in the current API Management service instance.
* $filter (string) - | Field        | Supported operators    | Supported functions                         |
* $top (integer) - Number of records to return.
* $skip (integer) - Number of records to skip.
* api-version (string) **required** - Version of the API to be used with the client request.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

