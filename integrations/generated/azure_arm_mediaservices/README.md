# @datafire/azure_arm_mediaservices

Client library for MediaServicesManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_mediaservices
```
```js
let azure_arm_mediaservices = require('@datafire/azure_arm_mediaservices').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_mediaservices.MediaService_CheckNameAvailability({
  "subscriptionId": "",
  "api-version": "",
  "CheckNameAvailabilityInput": null
}).then(data => {
  console.log(data);
});
```

## Description

Media Services resource management APIs.

## Actions

### MediaService_CheckNameAvailability
Checks whether the Media Service resource name is available. The name must be globally unique.


```js
azure_arm_mediaservices.MediaService_CheckNameAvailability({
  "subscriptionId": "",
  "api-version": "",
  "CheckNameAvailabilityInput": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2015-10-01
  * CheckNameAvailabilityInput **required** [CheckNameAvailabilityInput](#checknameavailabilityinput)

#### Output
* output [CheckNameAvailabilityOutput](#checknameavailabilityoutput)

### MediaService_ListByResourceGroup
Lists all of the Media Services in a resource group.


```js
azure_arm_mediaservices.MediaService_ListByResourceGroup({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2015-10-01
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.

#### Output
* output [MediaServiceCollection](#mediaservicecollection)

### MediaService_Delete
Deletes a Media Service.


```js
azure_arm_mediaservices.MediaService_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "mediaServiceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2015-10-01
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * mediaServiceName **required** `string`: Name of the Media Service.

#### Output
*Output schema unknown*

### MediaService_Get
Gets a Media Service.


```js
azure_arm_mediaservices.MediaService_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "mediaServiceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2015-10-01
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * mediaServiceName **required** `string`: Name of the Media Service.

#### Output
* output [MediaService](#mediaservice)

### MediaService_Update
Updates a Media Service.


```js
azure_arm_mediaservices.MediaService_Update({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "mediaServiceName": "",
  "MediaService": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2015-10-01
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * mediaServiceName **required** `string`: Name of the Media Service.
  * MediaService **required** [MediaService](#mediaservice)

#### Output
* output [MediaService](#mediaservice)

### MediaService_Create
Creates a Media Service.


```js
azure_arm_mediaservices.MediaService_Create({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "mediaServiceName": "",
  "MediaService": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2015-10-01
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * mediaServiceName **required** `string`: Name of the Media Service.
  * MediaService **required** [MediaService](#mediaservice)

#### Output
* output [MediaService](#mediaservice)

### MediaService_ListKeys
Lists the keys for a Media Service.


```js
azure_arm_mediaservices.MediaService_ListKeys({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "mediaServiceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2015-10-01
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * mediaServiceName **required** `string`: Name of the Media Service.

#### Output
* output [ServiceKeys](#servicekeys)

### MediaService_RegenerateKey
Regenerates a primary or secondary key for a Media Service.


```js
azure_arm_mediaservices.MediaService_RegenerateKey({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "mediaServiceName": "",
  "RegenerateKeyInput": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2015-10-01
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * mediaServiceName **required** `string`: Name of the Media Service.
  * RegenerateKeyInput **required** [RegenerateKeyInput](#regeneratekeyinput)

#### Output
* output [RegenerateKeyOutput](#regeneratekeyoutput)

### MediaService_SyncStorageKeys
Synchronizes storage account keys for a storage account associated with the Media Service account.


```js
azure_arm_mediaservices.MediaService_SyncStorageKeys({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "mediaServiceName": "",
  "SyncStorageKeysInput": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2015-10-01
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * mediaServiceName **required** `string`: Name of the Media Service.
  * SyncStorageKeysInput **required** [SyncStorageKeysInput](#syncstoragekeysinput)

#### Output
*Output schema unknown*



## Definitions

### ApiEndpoint
* ApiEndpoint `object`: The properties for a Media Services REST API endpoint.
  * endpoint `string`: The Media Services REST endpoint.
  * majorVersion `string`: The version of Media Services REST API.

### ApiError
* ApiError `object`: The error returned from a failed Media Services REST API call.
  * code `string`: Error code.
  * message `string`: Error message.

### CheckNameAvailabilityInput
* CheckNameAvailabilityInput `object`: The request body for CheckNameAvailability API.
  * name **required** `string`: The name of the resource. A name must be globally unique.
  * type **required** [ResourceType](#resourcetype)

### CheckNameAvailabilityOutput
* CheckNameAvailabilityOutput `object`: The response body for CheckNameAvailability API.
  * Message `string`: Specifies the detailed reason if the name is not available.
  * NameAvailable `boolean`: Specifies if the name is available.
  * Reason `string` (values: None, Invalid, AlreadyExists): Specifies the reason if the name is not available.

### MediaService
* MediaService `object`: The properties of a Media Service resource.
  * properties [MediaServiceProperties](#mediaserviceproperties)
  * id `string`: The id of the resource.
  * location `string`: The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth).
  * name `string`: The name of the resource.
  * tags `object`: Tags to help categorize the resource in the Azure portal.
  * type `string`: The type of the resource

### MediaServiceCollection
* MediaServiceCollection `object`: The collection of Media Service resources.
  * value `array`
    * items [MediaService](#mediaservice)

### MediaServiceProperties
* MediaServiceProperties `object`: The additional properties of a Media Service resource.
  * apiEndpoints `array`: Read-only property that lists the Media Services REST API endpoints for this resource. If supplied on a PUT or PATCH, the value will be ignored.
    * items [ApiEndpoint](#apiendpoint)
  * storageAccounts `array`: The storage accounts for this resource.
    * items [StorageAccount](#storageaccount)

### RegenerateKeyInput
* RegenerateKeyInput `object`: The request body for a RegenerateKey API.
  * keyType **required** `string` (values: Primary, Secondary): The keyType indicating which key you want to regenerate, Primary or Secondary.

### RegenerateKeyOutput
* RegenerateKeyOutput `object`: The response body for a RegenerateKey API.
  * key `string`: The new value of either the primary or secondary key.

### Resource
* Resource `object`: The Azure Resource Manager resource.
  * id `string`: The id of the resource.
  * location `string`: The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth).
  * name `string`: The name of the resource.
  * tags `object`: Tags to help categorize the resource in the Azure portal.
  * type `string`: The type of the resource

### ResourceType
* ResourceType `string` (values: mediaservices): Type of MediaService resource.

### ServiceKeys
* ServiceKeys `object`: The response body for a ListKeys API.
  * primaryAuthEndpoint `string`: The primary authorization endpoint.
  * primaryKey `string`: The primary key for the Media Service resource.
  * scope `string`: The authorization scope.
  * secondaryAuthEndpoint `string`: The secondary authorization endpoint.
  * secondaryKey `string`: The secondary key for the Media Service resource.

### StorageAccount
* StorageAccount `object`: The properties of a storage account associated with this resource.
  * id **required** `string`: The id of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts (isPrimary false).
  * isPrimary **required** `boolean`: Is this storage account resource the primary storage account for the Media Service resource. Blob only storage must set this to false.

### SyncStorageKeysInput
* SyncStorageKeysInput `object`: The request  body for a SyncStorageKeys API.
  * id **required** `string`: The id of the storage account resource.


