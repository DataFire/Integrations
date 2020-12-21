# @datafire/azure_authorization_authorization_provideroperationscalls

Client library for AuthorizationManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_authorization_authorization_provideroperationscalls
```
```js
let azure_authorization_authorization_provideroperationscalls = require('@datafire/azure_authorization_authorization_provideroperationscalls').create({
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

Role based access control provides you a way to apply granular level policy administration down to individual resources or resource groups. These calls handle provider operations.

## Actions

### ProviderOperationsMetadata_List
Gets provider operations metadata for all resource providers.


```js
azure_authorization_authorization_provideroperationscalls.ProviderOperationsMetadata_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * $expand `string`: Specifies whether to expand the values.

#### Output
* output [ProviderOperationsMetadataListResult](#provideroperationsmetadatalistresult)

### ProviderOperationsMetadata_Get
Gets provider operations metadata for the specified resource provider.


```js
azure_authorization_authorization_provideroperationscalls.ProviderOperationsMetadata_Get({
  "resourceProviderNamespace": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider.
  * api-version **required** `string`: The API version to use for this operation.
  * $expand `string`: Specifies whether to expand the values.

#### Output
* output [ProviderOperationsMetadata](#provideroperationsmetadata)



## Definitions

### ProviderOperation
* ProviderOperation `object`: Operation
  * description `string`: The operation description.
  * displayName `string`: The operation display name.
  * isDataAction `boolean`: The dataAction flag to specify the operation type.
  * name `string`: The operation name.
  * origin `string`: The operation origin.
  * properties `object`: The operation properties.

### ProviderOperationsMetadata
* ProviderOperationsMetadata `object`: Provider Operations metadata
  * displayName `string`: The provider display name.
  * id `string`: The provider id.
  * name `string`: The provider name.
  * operations `array`: The provider operations.
    * items [ProviderOperation](#provideroperation)
  * resourceTypes `array`: The provider resource types
    * items [ResourceType](#resourcetype)
  * type `string`: The provider type.

### ProviderOperationsMetadataListResult
* ProviderOperationsMetadataListResult `object`: Provider operations metadata list
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: The list of providers.
    * items [ProviderOperationsMetadata](#provideroperationsmetadata)

### ResourceType
* ResourceType `object`: Resource Type
  * displayName `string`: The resource type display name.
  * name `string`: The resource type name.
  * operations `array`: The resource type operations.
    * items [ProviderOperation](#provideroperation)


