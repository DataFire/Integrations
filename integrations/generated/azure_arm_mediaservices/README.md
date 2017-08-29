# @datafire/azure_arm_mediaservices

Client library for MediaServicesManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_mediaservices
```

```js
let datafire = require('datafire');
let azure_arm_mediaservices = require('@datafire/azure_arm_mediaservices').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_mediaservices.MediaService_CheckNameAvailability({}).then(data => {
  console.log(data);
})
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

#### Parameters
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2015-10-01
* CheckNameAvailabilityInput (undefined) **required** - The request body for CheckNameAvailability API.

### MediaService_ListByResourceGroup
Lists all of the Media Services in a resource group.


```js
azure_arm_mediaservices.MediaService_ListByResourceGroup({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2015-10-01
* resourceGroupName (string) **required** - Name of the resource group within the Azure subscription.

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

#### Parameters
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2015-10-01
* resourceGroupName (string) **required** - Name of the resource group within the Azure subscription.
* mediaServiceName (string) **required** - Name of the Media Service.

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

#### Parameters
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2015-10-01
* resourceGroupName (string) **required** - Name of the resource group within the Azure subscription.
* mediaServiceName (string) **required** - Name of the Media Service.

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

#### Parameters
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2015-10-01
* resourceGroupName (string) **required** - Name of the resource group within the Azure subscription.
* mediaServiceName (string) **required** - Name of the Media Service.
* MediaService (undefined) **required** - The properties of a Media Service resource.

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

#### Parameters
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2015-10-01
* resourceGroupName (string) **required** - Name of the resource group within the Azure subscription.
* mediaServiceName (string) **required** - Name of the Media Service.
* MediaService (undefined) **required** - The properties of a Media Service resource.

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

#### Parameters
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2015-10-01
* resourceGroupName (string) **required** - Name of the resource group within the Azure subscription.
* mediaServiceName (string) **required** - Name of the Media Service.

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

#### Parameters
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2015-10-01
* resourceGroupName (string) **required** - Name of the resource group within the Azure subscription.
* mediaServiceName (string) **required** - Name of the Media Service.
* RegenerateKeyInput (undefined) **required** - The request body for a RegenerateKey API.

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

#### Parameters
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2015-10-01
* resourceGroupName (string) **required** - Name of the resource group within the Azure subscription.
* mediaServiceName (string) **required** - Name of the Media Service.
* SyncStorageKeysInput (undefined) **required** - The request  body for a SyncStorageKeys API.

