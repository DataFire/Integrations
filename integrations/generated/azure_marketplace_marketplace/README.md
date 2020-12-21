# @datafire/azure_marketplace_marketplace

Client library for Marketplace RP Service

## Installation and Usage
```bash
npm install --save @datafire/azure_marketplace_marketplace
```
```js
let azure_marketplace_marketplace = require('@datafire/azure_marketplace_marketplace').create({
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

### Operations_List
Lists all of the available Microsoft.Marketplace REST API operations.


```js
azure_marketplace_marketplace.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [OperationListResult](#operationlistresult)

### PrivateStore_List
Gets the list of available private stores


```js
azure_marketplace_marketplace.PrivateStore_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [PrivateStoreList](#privatestorelist)

### PrivateStore_Delete
Deletes the private store. All that is not saved will be lost.


```js
azure_marketplace_marketplace.PrivateStore_Delete({
  "PrivateStoreId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * PrivateStoreId **required** `string`: The store ID - must use the tenant ID
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### PrivateStore_Get
Get information about the private store


```js
azure_marketplace_marketplace.PrivateStore_Get({
  "PrivateStoreId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * PrivateStoreId **required** `string`: The store ID - must use the tenant ID
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [PrivateStoreProperties](#privatestoreproperties)

### PrivateStore_CreateOrUpdate
Changes private store properties


```js
azure_marketplace_marketplace.PrivateStore_CreateOrUpdate({
  "PrivateStoreId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * payload [PrivateStoreProperties](#privatestoreproperties)
  * PrivateStoreId **required** `string`: The store ID - must use the tenant ID
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [PrivateStoreProperties](#privatestoreproperties)

### PrivateStoreOffers_List
Get a list of all private offers in the given private store


```js
azure_marketplace_marketplace.PrivateStoreOffers_List({
  "PrivateStoreId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * PrivateStoreId **required** `string`: The store ID - must use the tenant ID
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [OfferListResponse](#offerlistresponse)

### PrivateStoreOffer_Delete
Deletes an offer from the given private store.


```js
azure_marketplace_marketplace.PrivateStoreOffer_Delete({
  "OfferId": "",
  "PrivateStoreId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * OfferId **required** `string`: The offer ID to update or delete
  * PrivateStoreId **required** `string`: The store ID - must use the tenant ID
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### PrivateStoreOffer_Get
Gets information about a specific offer.


```js
azure_marketplace_marketplace.PrivateStoreOffer_Get({
  "OfferId": "",
  "PrivateStoreId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * OfferId **required** `string`: The offer ID to update or delete
  * PrivateStoreId **required** `string`: The store ID - must use the tenant ID
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [Offer](#offer)

### PrivateStoreOffer_CreateOrUpdate
Update or add an offer to the default collection of the private store.


```js
azure_marketplace_marketplace.PrivateStoreOffer_CreateOrUpdate({
  "OfferId": "",
  "PrivateStoreId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * payload [Offer](#offer)
  * OfferId **required** `string`: The offer ID to update or delete
  * PrivateStoreId **required** `string`: The store ID - must use the tenant ID
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [Offer](#offer)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Error response indicates Microsoft.Marketplace service is not able to process the incoming request. The reason is provided in the error message.
  * error `object`: The details of the error.
    * code `string`: Error code.
    * message `string`: Error message indicating why the operation failed.

### Offer
* Offer `object`
  * description `string`: Description of offer
  * displayName `string`: It will be displayed prominently in the marketplace
  * eTag `string`: Identifier for purposes of race condition
  * id `string`: Offers unique id
  * longSummary `string`: Purpose or function of offer
  * plans `array`
    * items [Plan](#plan)
  * publisherDisplayName `string`: Publisher name that will be displayed prominently in the marketplace
  * summary `string`: Brief purpose or function of offer

### OfferListResponse
* OfferListResponse `object`
  * nextLink `string`: URL to get the next set of offer list results if there are any.
  * value `array`
    * items [Offer](#offer)

### Operation
* Operation `object`: Microsoft.Marketplace REST API operation
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Get Amendments etc.
    * provider `string`: Service provider: Microsoft.Marketplace
    * resource `string`: Resource on which the operation is performed: Amendments
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list Marketplace operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Microsoft.Marketplace operations supported by the Microsoft.Marketplace resource provider.
    * items [Operation](#operation)

### Plan
* Plan `object`
  * displayName `string`: Friendly name for the plan for display in the marketplace
  * planId `string`: Identifier for this plan

### PrivateStoreList
* PrivateStoreList `object`: Describes the json payload for the list of available private stores (between zero and one, inclusive)
  * nextLink `string`: URL to get the next set of PrivateStore list results if there are any.
  * value `array`
    * items [PrivateStoreProperties](#privatestoreproperties)

### PrivateStoreProperties
* PrivateStoreProperties `object`: Describes the json payload on whether or not the private store is enabled for a given tenant
  * availability `string` (values: enabled, disabled): Indicates private store availability
  * name `string`: Private Store name

### offerObject
* offerObject `object`
  * isAvailable **required** `boolean`

### offerSkuObject
* offerSkuObject `object`
  * isAvailable **required** `boolean`


