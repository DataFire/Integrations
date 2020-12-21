# @datafire/azure_web_resourcehealthmetadata

Client library for ResourceHealthMetadata API Client

## Installation and Usage
```bash
npm install --save @datafire/azure_web_resourcehealthmetadata
```
```js
let azure_web_resourcehealthmetadata = require('@datafire/azure_web_resourcehealthmetadata').create({
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

### ResourceHealthMetadata_List
List all ResourceHealthMetadata for all sites in the subscription.


```js
azure_web_resourcehealthmetadata.ResourceHealthMetadata_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ResourceHealthMetadataCollection](#resourcehealthmetadatacollection)

### ResourceHealthMetadata_ListByResourceGroup
List all ResourceHealthMetadata for all sites in the resource group in the subscription.


```js
azure_web_resourcehealthmetadata.ResourceHealthMetadata_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ResourceHealthMetadataCollection](#resourcehealthmetadatacollection)

### ResourceHealthMetadata_ListBySite
Gets the category of ResourceHealthMetadata to use for the given site as a collection


```js
azure_web_resourcehealthmetadata.ResourceHealthMetadata_ListBySite({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ResourceHealthMetadataCollection](#resourcehealthmetadatacollection)

### ResourceHealthMetadata_GetBySite
Gets the category of ResourceHealthMetadata to use for the given site


```js
azure_web_resourcehealthmetadata.ResourceHealthMetadata_GetBySite({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ResourceHealthMetadata](#resourcehealthmetadata)

### ResourceHealthMetadata_ListBySiteSlot
Gets the category of ResourceHealthMetadata to use for the given site as a collection


```js
azure_web_resourcehealthmetadata.ResourceHealthMetadata_ListBySiteSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ResourceHealthMetadataCollection](#resourcehealthmetadatacollection)

### ResourceHealthMetadata_GetBySiteSlot
Gets the category of ResourceHealthMetadata to use for the given site


```js
azure_web_resourcehealthmetadata.ResourceHealthMetadata_GetBySiteSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ResourceHealthMetadata](#resourcehealthmetadata)



## Definitions

### ResourceHealthMetadata
* ResourceHealthMetadata `object`: Used for getting ResourceHealthCheck settings.
  * properties `object`: ResourceHealthMetadata resource specific properties
    * category `string`: The category that the resource matches in the RHC Policy File
    * signalAvailability `boolean`: Is there a health signal for the resource
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### ResourceHealthMetadataCollection
* ResourceHealthMetadataCollection `object`: Collection of resource health metadata.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [ResourceHealthMetadata](#resourcehealthmetadata)


