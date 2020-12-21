# @datafire/azure_datacatalog

Client library for Azure Data Catalog Resource Provider

## Installation and Usage
```bash
npm install --save @datafire/azure_datacatalog
```
```js
let azure_datacatalog = require('@datafire/azure_datacatalog').create({
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

The Azure Data Catalog Resource Provider Services API.

## Actions

### ADCOperations_List
Lists all the available Azure Data Catalog service operations.


```js
azure_datacatalog.ADCOperations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationEntityListResult](#operationentitylistresult)

### ADCCatalogs_ListtByResourceGroup
The List catalogs in Resource Group operation lists all the Azure Data Catalogs available under the given resource group.


```js
azure_datacatalog.ADCCatalogs_ListtByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.

#### Output
* output [ADCCatalogsListResult](#adccatalogslistresult)

### ADCCatalogs_Delete
The Delete Azure Data Catalog Service operation deletes an existing data catalog.


```js
azure_datacatalog.ADCCatalogs_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "catalogName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * catalogName **required** `string`: The name of the data catalog in the specified subscription and resource group.

#### Output
*Output schema unknown*

### ADCCatalogs_Get
The Get Azure Data Catalog Service operation retrieves a json representation of the data catalog.


```js
azure_datacatalog.ADCCatalogs_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "catalogName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * catalogName **required** `string`: The name of the data catalog in the specified subscription and resource group.

#### Output
* output [ADCCatalog](#adccatalog)

### ADCCatalogs_Update
The Update Azure Data Catalog Service operation can be used to update the existing deployment. The update call only supports the properties listed in the PATCH body.


```js
azure_datacatalog.ADCCatalogs_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "catalogName": "",
  "properties": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * catalogName **required** `string`: The name of the data catalog in the specified subscription and resource group.
  * properties **required** [ADCCatalog](#adccatalog)

#### Output
* output [ADCCatalog](#adccatalog)

### ADCCatalogs_CreateOrUpdate
The Create Azure Data Catalog service operation creates a new data catalog service with the specified parameters. If the specific service already exists, then any patchable properties will be updated and any immutable properties will remain unchanged.


```js
azure_datacatalog.ADCCatalogs_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "catalogName": "",
  "properties": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * catalogName **required** `string`: The name of the data catalog in the specified subscription and resource group.
  * properties **required** [ADCCatalog](#adccatalog)

#### Output
* output [ADCCatalog](#adccatalog)



## Definitions

### ADCCatalog
* ADCCatalog `object`: Azure Data Catalog.
  * properties [ADCCatalogProperties](#adccatalogproperties)
  * etag `string`: Resource etag
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ADCCatalogProperties
* ADCCatalogProperties `object`: Properties of the data catalog.
  * admins `array`: Azure data catalog admin list.
    * items [Principals](#principals)
  * enableAutomaticUnitAdjustment `boolean`: Automatic unit adjustment enabled or not.
  * sku `string` (values: Free, Standard): Azure data catalog SKU.
  * successfullyProvisioned `boolean`: Azure data catalog provision status.
  * units `integer`: Azure data catalog units.
  * users `array`: Azure data catalog user list.
    * items [Principals](#principals)

### ADCCatalogsListResult
* ADCCatalogsListResult `object`: The response from the List Azure Data Catalog operation.
  * value `array`: the list of Azure Data Catalogs.
    * items [ADCCatalog](#adccatalog)

### OperationDisplayInfo
* OperationDisplayInfo `object`: The operation supported by Azure Data Catalog Service.
  * description `string`: The description of the operation.
  * operation `string`: The action that users can perform, based on their permission level.
  * provider `string`: Service provider: Azure Data Catalog Service.
  * resource `string`: Resource on which the operation is performed.

### OperationEntity
* OperationEntity `object`: The operation supported by Azure Data Catalog Service.
  * display [OperationDisplayInfo](#operationdisplayinfo)
  * name `string`: Operation name: {provider}/{resource}/{operation}.

### OperationEntityListResult
* OperationEntityListResult `object`: The list of Azure data catalog service operation response.
  * value `array`: The list of operations.
    * items [OperationEntity](#operationentity)

### Principals
* Principals `object`: User principals.
  * objectId `string`: Object Id for the user
  * upn `string`: UPN of the user.

### Resource
* Resource `object`: The Resource model definition.
  * etag `string`: Resource etag
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type


