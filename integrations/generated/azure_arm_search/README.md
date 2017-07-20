# @datafire/azure_arm_search

Client library for SearchManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_search
```

```js
let datafire = require('datafire');
let azure_arm_search = require('@datafire/azure_arm_search').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_search: account,
  }
})


azure_arm_search.Services_CheckNameAvailability({}, context).then(data => {
  console.log(data);
})
```

## Description
Client that can be used to manage Azure Search services and API keys.

## Actions
### Services_CheckNameAvailability
Checks whether or not the given Search service name is available for use. Search service names must be globally unique since they are part of the service URI (https://<name>.search.windows.net).


```js
azure_arm_search.Services_CheckNameAvailability({
  "checkNameAvailabilityInput": {
    "name": "",
    "type": ""
  },
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* checkNameAvailabilityInput (object) **required** - Input of check name availability API.
* x-ms-client-request-id (string) - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
* api-version (string) **required** - The API version to use for each request. The current version is 2015-08-19.
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

### Services_ListByResourceGroup
Gets a list of all Search services in the given resource group.


```js
azure_arm_search.Services_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
* x-ms-client-request-id (string) - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
* api-version (string) **required** - The API version to use for each request. The current version is 2015-08-19.
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

### Services_Delete
Deletes a Search service in the given resource group, along with its associated resources.


```js
azure_arm_search.Services_Delete({
  "resourceGroupName": "",
  "searchServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
* searchServiceName (string) **required** - The name of the Azure Search service associated with the specified resource group.
* x-ms-client-request-id (string) - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
* api-version (string) **required** - The API version to use for each request. The current version is 2015-08-19.
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

### Services_Get
Gets the Search service with the given name in the given resource group.


```js
azure_arm_search.Services_Get({
  "resourceGroupName": "",
  "searchServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
* searchServiceName (string) **required** - The name of the Azure Search service associated with the specified resource group.
* x-ms-client-request-id (string) - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
* api-version (string) **required** - The API version to use for each request. The current version is 2015-08-19.
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

### Services_CreateOrUpdate
Creates or updates a Search service in the given resource group. If the Search service already exists, all properties will be updated with the given values.


```js
azure_arm_search.Services_CreateOrUpdate({
  "resourceGroupName": "",
  "searchServiceName": "",
  "service": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
* searchServiceName (string) **required** - The name of the Azure Search service to create or update. Search service names must only contain lowercase letters, digits or dashes, cannot use dash as the first two or last one characters, cannot contain consecutive dashes, and must be between 2 and 60 characters in length. Search service names must be globally unique since they are part of the service URI (https://<name>.search.windows.net). You cannot change the service name after the service is created.
* service (undefined) **required** - Describes an Azure Search service and its current state.
* x-ms-client-request-id (string) - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
* api-version (string) **required** - The API version to use for each request. The current version is 2015-08-19.
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

### QueryKeys_Create
Generates a new query key for the specified Search service. You can create up to 50 query keys per service.


```js
azure_arm_search.QueryKeys_Create({
  "resourceGroupName": "",
  "searchServiceName": "",
  "name": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
* searchServiceName (string) **required** - The name of the Azure Search service associated with the specified resource group.
* name (string) **required** - The name of the new query API key.
* x-ms-client-request-id (string) - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
* api-version (string) **required** - The API version to use for each request. The current version is 2015-08-19.
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

### QueryKeys_Delete
Deletes the specified query key. Unlike admin keys, query keys are not regenerated. The process for regenerating a query key is to delete and then recreate it.


```js
azure_arm_search.QueryKeys_Delete({
  "resourceGroupName": "",
  "searchServiceName": "",
  "key": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
* searchServiceName (string) **required** - The name of the Azure Search service associated with the specified resource group.
* key (string) **required** - The query key to be deleted. Query keys are identified by value, not by name.
* x-ms-client-request-id (string) - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
* api-version (string) **required** - The API version to use for each request. The current version is 2015-08-19.
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

### AdminKeys_Get
Gets the primary and secondary admin API keys for the specified Azure Search service.


```js
azure_arm_search.AdminKeys_Get({
  "resourceGroupName": "",
  "searchServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
* searchServiceName (string) **required** - The name of the Azure Search service associated with the specified resource group.
* x-ms-client-request-id (string) - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
* api-version (string) **required** - The API version to use for each request. The current version is 2015-08-19.
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

### QueryKeys_ListBySearchService
Returns the list of query API keys for the given Azure Search service.


```js
azure_arm_search.QueryKeys_ListBySearchService({
  "resourceGroupName": "",
  "searchServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
* searchServiceName (string) **required** - The name of the Azure Search service associated with the specified resource group.
* x-ms-client-request-id (string) - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
* api-version (string) **required** - The API version to use for each request. The current version is 2015-08-19.
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

### AdminKeys_Regenerate
Regenerates either the primary or secondary admin API key. You can only regenerate one key at a time.


```js
azure_arm_search.AdminKeys_Regenerate({
  "resourceGroupName": "",
  "searchServiceName": "",
  "keyKind": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
* searchServiceName (string) **required** - The name of the Azure Search service associated with the specified resource group.
* keyKind (string) **required** - Specifies which key to regenerate. Valid values include 'primary' and 'secondary'.
* x-ms-client-request-id (string) - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
* api-version (string) **required** - The API version to use for each request. The current version is 2015-08-19.
* subscriptionId (string) **required** - The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

