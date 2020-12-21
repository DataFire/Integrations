# @datafire/azure_applicationinsights_querypacks_api

Client library for Azure Log Analytics Query Packs

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_querypacks_api
```
```js
let azure_applicationinsights_querypacks_api = require('@datafire/azure_applicationinsights_querypacks_api').create({
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

Azure Log Analytics API reference for Query Packs management.

## Actions

### QueryPacks_List
Gets a list of all Log Analytics QueryPacks within a subscription.


```js
azure_applicationinsights_querypacks_api.QueryPacks_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [LogAnalyticsQueryPackListResult](#loganalyticsquerypacklistresult)

### QueryPacks_ListByResourceGroup
Gets a list of Log Analytics QueryPacks within a resource group.


```js
azure_applicationinsights_querypacks_api.QueryPacks_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [LogAnalyticsQueryPackListResult](#loganalyticsquerypacklistresult)

### QueryPacks_Delete
Deletes a Log Analytics QueryPack.


```js
azure_applicationinsights_querypacks_api.QueryPacks_Delete({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "queryPackName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * queryPackName **required** `string`: The name of the Log Analytics QueryPack resource.

#### Output
*Output schema unknown*

### QueryPacks_Get
Returns a Log Analytics QueryPack.


```js
azure_applicationinsights_querypacks_api.QueryPacks_Get({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "queryPackName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * queryPackName **required** `string`: The name of the Log Analytics QueryPack resource.

#### Output
* output [LogAnalyticsQueryPack](#loganalyticsquerypack)

### QueryPacks_UpdateTags
Updates an existing QueryPack's tags. To update other fields use the CreateOrUpdate method.


```js
azure_applicationinsights_querypacks_api.QueryPacks_UpdateTags({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "queryPackName": "",
  "QueryPackTags": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * queryPackName **required** `string`: The name of the Log Analytics QueryPack resource.
  * QueryPackTags **required** [TagsResource](#tagsresource)

#### Output
* output [LogAnalyticsQueryPack](#loganalyticsquerypack)

### QueryPacks_CreateOrUpdate
Creates (or updates) a Log Analytics QueryPack. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation.


```js
azure_applicationinsights_querypacks_api.QueryPacks_CreateOrUpdate({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "queryPackName": "",
  "LogAnalyticsQueryPackPayload": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * queryPackName **required** `string`: The name of the Log Analytics QueryPack resource.
  * LogAnalyticsQueryPackPayload **required** [LogAnalyticsQueryPack](#loganalyticsquerypack)

#### Output
* output [LogAnalyticsQueryPack](#loganalyticsquerypack)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Describe the format of an Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### LogAnalyticsQueryPack
* LogAnalyticsQueryPack `object`: An Log Analytics QueryPack definition.
  * properties **required** [LogAnalyticsQueryPackProperties](#loganalyticsquerypackproperties)
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### LogAnalyticsQueryPackListResult
* LogAnalyticsQueryPackListResult `object`: Describes the list of Log Analytics QueryPack resources.
  * nextLink `string`: The URI to get the next set of Log Analytics QueryPack definitions if too many QueryPacks where returned in the result set.
  * value **required** `array`: List of Log Analytics QueryPack definitions.
    * items [LogAnalyticsQueryPack](#loganalyticsquerypack)

### LogAnalyticsQueryPackProperties
* LogAnalyticsQueryPackProperties `object`: Properties that define a Log Analytics QueryPack resource.
  * provisioningState `string`: Current state of this QueryPack: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
  * queryPackId `string`: The unique ID of your application. This field cannot be changed.
  * timeCreated `string`: Creation Date for the Log Analytics QueryPack, in ISO 8601 format.
  * timeModified `string`: Last modified date of the Log Analytics QueryPack, in ISO 8601 format.

### QueryPacksResource
* QueryPacksResource `object`: An azure resource object
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### TagsResource
* TagsResource `object`: A container holding only the Tags for a resource, allowing the user to update the tags on a QueryPack instance.


