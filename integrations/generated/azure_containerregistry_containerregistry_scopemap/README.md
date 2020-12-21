# @datafire/azure_containerregistry_containerregistry_scopemap

Client library for ContainerRegistryManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_containerregistry_containerregistry_scopemap
```
```js
let azure_containerregistry_containerregistry_scopemap = require('@datafire/azure_containerregistry_containerregistry_scopemap').create({
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



## Actions

### Registries_GenerateCredentials
Generate keys for a token of a specified container registry.


```js
azure_containerregistry_containerregistry_scopemap.Registries_GenerateCredentials({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "generateCredentialsParameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * generateCredentialsParameters **required** [GenerateCredentialsParameters](#generatecredentialsparameters)

#### Output
* output [GenerateCredentialsResult](#generatecredentialsresult)

### ScopeMaps_List
Lists all the scope maps for the specified container registry.


```js
azure_containerregistry_containerregistry_scopemap.ScopeMaps_List({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.

#### Output
* output [ScopeMapListResult](#scopemaplistresult)

### ScopeMaps_Delete
Deletes a scope map from a container registry.


```js
azure_containerregistry_containerregistry_scopemap.ScopeMaps_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "scopeMapName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * scopeMapName **required** `string`: The name of the scope map.

#### Output
*Output schema unknown*

### ScopeMaps_Get
Gets the properties of the specified scope map.


```js
azure_containerregistry_containerregistry_scopemap.ScopeMaps_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "scopeMapName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * scopeMapName **required** `string`: The name of the scope map.

#### Output
* output [ScopeMap](#scopemap)

### ScopeMaps_Update
Updates a scope map with the specified parameters.


```js
azure_containerregistry_containerregistry_scopemap.ScopeMaps_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "scopeMapName": "",
  "scopeMapUpdateParameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * scopeMapName **required** `string`: The name of the scope map.
  * scopeMapUpdateParameters **required** [ScopeMapUpdateParameters](#scopemapupdateparameters)

#### Output
* output [ScopeMap](#scopemap)

### ScopeMaps_Create
Creates a scope map for a container registry with the specified parameters.


```js
azure_containerregistry_containerregistry_scopemap.ScopeMaps_Create({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "scopeMapName": "",
  "scopeMapCreateParameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * scopeMapName **required** `string`: The name of the scope map.
  * scopeMapCreateParameters **required** [ScopeMap](#scopemap)

#### Output
* output [ScopeMap](#scopemap)

### Tokens_List
Lists all the tokens for the specified container registry.


```js
azure_containerregistry_containerregistry_scopemap.Tokens_List({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.

#### Output
* output [TokenListResult](#tokenlistresult)

### Tokens_Delete
Deletes a token from a container registry.


```js
azure_containerregistry_containerregistry_scopemap.Tokens_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "tokenName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * tokenName **required** `string`: The name of the token.

#### Output
*Output schema unknown*

### Tokens_Get
Gets the properties of the specified token.


```js
azure_containerregistry_containerregistry_scopemap.Tokens_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "tokenName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * tokenName **required** `string`: The name of the token.

#### Output
* output [Token](#token)

### Tokens_Update
Updates a token with the specified parameters.


```js
azure_containerregistry_containerregistry_scopemap.Tokens_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "tokenName": "",
  "tokenUpdateParameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * tokenName **required** `string`: The name of the token.
  * tokenUpdateParameters **required** [TokenUpdateParameters](#tokenupdateparameters)

#### Output
* output [Token](#token)

### Tokens_Create
Creates a token for a container registry with the specified parameters.


```js
azure_containerregistry_containerregistry_scopemap.Tokens_Create({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "tokenName": "",
  "tokenCreateParameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * tokenName **required** `string`: The name of the token.
  * tokenCreateParameters **required** [Token](#token)

#### Output
* output [Token](#token)



## Definitions

### GenerateCredentialsParameters
* GenerateCredentialsParameters `object`: The parameters used to generate credentials for a specified token or user of a container registry.
  * expiry `string`: The expiry date of the generated credentials after which the credentials become invalid.
  * name `string` (values: password1, password2): Specifies name of the password which should be regenerated if any -- password1 or password2.
  * tokenId `string`: The resource ID of the token for which credentials have to be generated.

### GenerateCredentialsResult
* GenerateCredentialsResult `object`: The response from the GenerateCredentials operation.
  * passwords `array`: The list of passwords for a container registry.
    * items [TokenPassword](#tokenpassword)
  * username `string`: The username for a container registry.

### ProxyResource
* ProxyResource `object`: The resource model definition for a ARM proxy resource. It will have everything other than required location and tags.
  * id `string`: The resource ID.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### ScopeMap
* ScopeMap `object`: An object that represents a scope map for a container registry.
  * properties [ScopeMapProperties](#scopemapproperties)
  * id `string`: The resource ID.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### ScopeMapListResult
* ScopeMapListResult `object`: The result of a request to list scope maps for a container registry.
  * nextLink `string`: The URI that can be used to request the next list of scope maps.
  * value `array`: The list of scope maps. Since this list may be incomplete, the nextLink field should be used to request the next list of scope maps.
    * items [ScopeMap](#scopemap)

### ScopeMapProperties
* ScopeMapProperties `object`: The properties of a scope map.
  * actions **required** `array`: The list of scoped permissions for registry artifacts.
    * items `string`
  * creationDate `string`: The creation date of scope map.
  * description `string`: The user friendly description of the scope map.
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Failed, Canceled): Provisioning state of the resource.
  * type `string`: The type of the scope map. E.g. BuildIn scope map.

### ScopeMapPropertiesUpdateParameters
* ScopeMapPropertiesUpdateParameters `object`: The update parameters for scope map properties.
  * actions `array`: The list of scope permissions for registry artifacts.
    * items `string`
  * description `string`: The user friendly description of the scope map.

### ScopeMapUpdateParameters
* ScopeMapUpdateParameters `object`: The properties for updating the scope map.
  * properties [ScopeMapPropertiesUpdateParameters](#scopemappropertiesupdateparameters)

### Token
* Token `object`: An object that represents a token for a container registry.
  * properties [TokenProperties](#tokenproperties)
  * id `string`: The resource ID.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### TokenCertificate
* TokenCertificate `object`: The properties of a certificate used for authenticating a token.
  * encodedPemCertificate `string`: Base 64 encoded string of the public certificate1 in PEM format that will be used for authenticating the token.
  * expiry `string`: The expiry datetime of the certificate.
  * name `string` (values: certificate1, certificate2)
  * thumbprint `string`: The thumbprint of the certificate.

### TokenCredentialsProperties
* TokenCredentialsProperties `object`: The properties of the credentials that can be used for authenticating the token.
  * certificates `array`
    * items [TokenCertificate](#tokencertificate)
  * passwords `array`
    * items [TokenPassword](#tokenpassword)

### TokenListResult
* TokenListResult `object`: The result of a request to list tokens for a container registry.
  * nextLink `string`: The URI that can be used to request the next list of tokens.
  * value `array`: The list of tokens. Since this list may be incomplete, the nextLink field should be used to request the next list of tokens.
    * items [Token](#token)

### TokenPassword
* TokenPassword `object`: The password that will be used for authenticating the token of a container registry.
  * creationTime `string`: The creation datetime of the password.
  * expiry `string`: The expiry datetime of the password.
  * name `string` (values: password1, password2): The password name "password1" or "password2"
  * value `string`: The password value.

### TokenProperties
* TokenProperties `object`: The properties of a token.
  * creationDate `string`: The creation date of scope map.
  * credentials [TokenCredentialsProperties](#tokencredentialsproperties)
  * objectId `string`: The user/group/application object ID for which the token has to be created.
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Failed, Canceled): Provisioning state of the resource.
  * scopeMapId `string`: The resource ID of the scope map to which the token will be associated with.
  * status `string` (values: enabled, disabled): The status of the token example enabled or disabled.

### TokenUpdateParameters
* TokenUpdateParameters `object`: The parameters for updating a token.
  * properties [TokenUpdateProperties](#tokenupdateproperties)

### TokenUpdateProperties
* TokenUpdateProperties `object`: The parameters for updating token properties.
  * credentials [TokenCredentialsProperties](#tokencredentialsproperties)
  * scopeMapId `string`: The resource ID of the scope map to which the token will be associated with.
  * status `string` (values: enabled, disabled): The status of the token example enabled or disabled.


