# @datafire/billbee

Client library for Billbee

## Installation and Usage
```bash
npm install --save @datafire/billbee
```
```js
let billbee = require('@datafire/billbee').create({
  "X-Billbee-Api-Key": "",
  username: "",
  password: ""
});

billbee.Article_GetList({}).then(data => {
  console.log(data);
});
```

## Description

Documentation of the Billbee REST API to connect a Billbee account to external aplications.

## Endpoint

The Billbee API endpoint base url is https://app01.billbee.de/api/v1 

## Activation

You have to enable the API in the settings of your Billbee account. In addition you need a Billbee API Key identifying the application you develop. To get an API key, send a mail to support@billbee.de and send us a short note about what you are building.

## Authorization & security

Because you can access private data with the Billbee API, every request has to be sent over https and must

* Contain a valid API Key identifying the application/developer. It has to be sent as the HTTP header X-Billbee-Api-Key
* Contain a valid user login with billbee username and api password in form of a basic auth HTTP header

## Throttling

Each endpoint has a throttle of max 2 requests per second per combination of API Key and Billbee user.

When you exceed these 2 calls, the API will return a HTTP 429 status code



## Actions

### AutomaticProvisioning_CreateAccount
Creates a new Billbee user account with the data passed


```js
billbee.AutomaticProvisioning_CreateAccount({
  "model": {
    "EMail": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [Rechnungsdruck.WebApp.Controllers.Api.AutomaticProvisioningController.CreateAccountContainer](#rechnungsdruck.webapp.controllers.api.automaticprovisioningcontroller.createaccountcontainer)

#### Output
* output `object`

### AutomaticProvisioning_TermsInfo
Returns infos about Billbee terms and conditions


```js
billbee.AutomaticProvisioning_TermsInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### EventApi_GetList
Get a list of all events optionally filtered by date


```js
billbee.EventApi_GetList({}, context)
```

#### Input
* input `object`
  * minDate `string`
  * maxDate `string`
  * page `integer`
  * pageSize `integer`
  * typeId `array`

#### Output
* output `object`

### OrderApi_GetList
Get a list of all orders optionally filtered by date


```js
billbee.OrderApi_GetList({}, context)
```

#### Input
* input `object`
  * minOrderDate `string`: Specifies the oldest order date to include in the response
  * maxOrderDate `string`: Specifies the newest order date to include in the response
  * page `integer`: Specifies the page to request
  * pageSize `integer`: Specifies the pagesize. Defaults to 50, max value is 250
  * shopId `array`: Specifies a list of shop ids for which invoices should be included
  * orderStateId `array`: Specifies a list of state ids to include in the response
  * tag `array`: Specifies a list of tags the order must have attached to be included in the response
  * minimumBillBeeOrderId `integer`: If given, all delivered orders have an Id greater than or equal to the given minimumOrderId
  * modifiedAtMin `string`: If given, the last modification has to be newer than the given date
  * modifiedAtMax `string`: If given, the last modification has to be older or equal than the given date.
  * articleTitleSource `integer` (values: 0, 1, 2, 3): The source field for the article title. 0 = Order Position (default), 1 = Article Title, 2 = Article Invoice Text
  * excludeTags `boolean`: If true the list of tags passed to the call are used to filter orders to not include these tags

#### Output
* output `object`

### OrderApi_PostNewOrder
To create an order POST an JSON object to the orders endpoint with the shown properties. 
Not all properties are required.


```js
billbee.OrderApi_PostNewOrder({
  "orderData": {},
  "shopId": 0
}, context)
```

#### Input
* input `object`
  * orderData **required** [Billbee.Interfaces.Order.ApiOrder](#billbee.interfaces.order.apiorder)
  * shopId **required** `integer`

#### Output
* output `object`

### OrderApi_CreateDeliveryNote
Create an delivery note for an existing order


```js
billbee.OrderApi_CreateDeliveryNote({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The internal billbee id of the order
  * includePdf `boolean`: If true, the PDF is included in the response as base64 encoded string

#### Output
* output `object`

### OrderApi_CreateInvoice
Create an invoice for an existing order


```js
billbee.OrderApi_CreateInvoice({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The internal billbee id of the order
  * includeInvoicePdf `boolean`: If true, the PDF is included in the response as base64 encoded string

#### Output
* output `object`

### OrderApi_GetPatchableFields
Returns a list of fields which can be updated with the {M:Rechnungsdruck.WebApp.Controllers.Api.OrderApiController.PatchOrder(System.Int32,Newtonsoft.Json.Linq.JObject)} call


```js
billbee.OrderApi_GetPatchableFields(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### OrderApi_Find
Find a single order by its external id (order number)


```js
billbee.OrderApi_Find({
  "id": "",
  "partner": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The order id from the external system
  * partner **required** `string`: Optional the name of the shop/marketplace the order was imported from

#### Output
* output `object`

### OrderApi_GetByExtRef
Get a single order by its internal billbee id


```js
billbee.OrderApi_GetByExtRef({
  "extRef": ""
}, context)
```

#### Input
* input `object`
  * extRef **required** `string`: The internal billbee id of the order

#### Output
* output `object`

### OrderApi_GetInvoiceList
Get a list of all invoices optionally filtered by date


```js
billbee.OrderApi_GetInvoiceList({}, context)
```

#### Input
* input `object`
  * minInvoiceDate `string`: Specifies the oldest invoice date to include
  * maxInvoiceDate `string`: Specifies the newest invoice date to include
  * page `integer`: Specifies the page to request
  * pageSize `integer`: Specifies the pagesize. Defaults to 50, max value is 250
  * shopId `array`: Specifies a list of shop ids for which invoices should be included
  * orderStateId `array`: Specifies a list of state ids to include in the response
  * tag `array`
  * minPayDate `string`
  * maxPayDate `string`
  * includePositions `boolean`
  * excludeTags `boolean`: If true the list of tags passed to the call are used to filter orders to not include these tags

#### Output
* output `object`

### OrderApi_Get
Get a single order by its internal billbee id


```js
billbee.OrderApi_Get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The internal billbee id of the order
  * articleTitleSource `integer` (values: 0, 1, 2, 3): The source field for the article title. 0 = Order Position (default), 1 = Article Title, 2 = Article Invoice Text

#### Output
* output `object`

### OrderApi_PatchOrder
Updates one or more fields of an order


```js
billbee.OrderApi_PatchOrder({
  "id": 0,
  "model": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Billbee internal order id of the ORder
  * model **required** `object`

#### Output
* output `object`

### OrderApi_UpdateState
### REMARKS ###
Use this call to change the state of an order to i.e. paid or sent.

The state is transfered to the external shop/marketplace if configured.
This is the list of known states:
- 1: ordered
- 2: confirmed
- 3: paid
- 4: shipped
- 5: reclamation
- 6: deleted
- 7: closed
- 8: canceled
- 9: archived
- 10: not used
- 11: demand note 1
- 12: demand note 2
- 13: packed
- 14: offered
- 15: payment reminder


```js
billbee.OrderApi_UpdateState({
  "id": 0,
  "model": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The internal id of the order
  * model **required** [Rechnungsdruck.WebApp.Controllers.Api.OrderStateUpdate](#rechnungsdruck.webapp.controllers.api.orderstateupdate)

#### Output
* output `object`

### OrderApi_AddShipment
Add a shipment to a given order


```js
billbee.OrderApi_AddShipment({
  "id": 0,
  "model": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The internal billbee id of the order
  * model **required** [Rechnungsdruck.WebApp.Controllers.Api.ApiAddShipmentToOrderModel](#rechnungsdruck.webapp.controllers.api.apiaddshipmenttoordermodel)

#### Output
* output `object`

### OrderApi_TagsCreate
When a tag is already attached, it is ignored. Tags are not case sensitive.


```js
billbee.OrderApi_TagsCreate({
  "tagData": {},
  "id": 0
}, context)
```

#### Input
* input `object`
  * tagData **required** [Rechnungsdruck.WebApp.Controllers.Api.OrderTagCreate](#rechnungsdruck.webapp.controllers.api.ordertagcreate)
  * id **required** `integer`: The internal id of the order

#### Output
* output `object`

### OrderApi_TagsUpdate
Updates/Sets the tags attached to an order


```js
billbee.OrderApi_TagsUpdate({
  "tagData": {},
  "id": 0
}, context)
```

#### Input
* input `object`
  * tagData **required** [Rechnungsdruck.WebApp.Controllers.Api.OrderTagCreate](#rechnungsdruck.webapp.controllers.api.ordertagcreate)
  * id **required** `integer`: The internal id of the order

#### Output
* output `object`

### Article_GetList
Get a list of all products


```js
billbee.Article_GetList({}, context)
```

#### Input
* input `object`
  * page `integer`: The current page to request starting with 1
  * pageSize `integer`: The pagesize for the result list. Values between 1 and 250 are allowed
  * minCreatedAt `string`: Optional the oldest create date of the articles to be returned

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel]]](#rechnungsdruck.webapp.controllers.api.apipagedresult[system.collections.generic.list[billbee.interfaces.billbeeapi.model.articleapimodel]])

### Article_GetReservedAmount
Queriesthe reserved amount for a single article by id or by sku


```js
billbee.Article_GetReservedAmount({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id or the sku of the article to query
  * lookupBy `string`: Either the value id or the value sku to specify the meaning of the id parameter
  * stockId `integer`: Optional the stock id if the multi stock feature is enabled

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.GetReservedAmountResponseData]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.getreservedamountresponsedata])

### Article_UpdateStock
The article is specified by sku. You have to send the absolute value for the current stock


```js
billbee.Article_UpdateStock({
  "model": {}
}, context)
```

#### Input
* input `object`
  * model **required** [Billbee.Interfaces.BillbeeAPI.Model.UpdateStockApiModel](#billbee.interfaces.billbeeapi.model.updatestockapimodel)

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.UpdateStockResponseData]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.updatestockresponsedata])

### Article_UpdateStockCode
Update the stock code of an article


```js
billbee.Article_UpdateStockCode({
  "model": {}
}, context)
```

#### Input
* input `object`
  * model **required** [Billbee.Interfaces.BillbeeAPI.Model.UpdateStockCodeApiModel](#billbee.interfaces.billbeeapi.model.updatestockcodeapimodel)

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.UpdateStockCodeResponseData]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.updatestockcoderesponsedata])

### Article_UpdateStockMultiple
Update the stock qty for multiple articles at once


```js
billbee.Article_UpdateStockMultiple({
  "models": []
}, context)
```

#### Input
* input `object`
  * models **required** `array`
    * items [Billbee.Interfaces.BillbeeAPI.Model.UpdateStockApiModel](#billbee.interfaces.billbeeapi.model.updatestockapimodel)

#### Output
* output `array`
  * items [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.UpdateStockResponseData]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.updatestockresponsedata])

### Article_GetArticle
Queries a single article by id or by sku


```js
billbee.Article_GetArticle({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id or the sku of the article to query
  * lookupBy `string`: Either the value id or the value sku to specify the meaning of the id parameter

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.articleapimodel])

### Shipment_GetPing



```js
billbee.Shipment_GetPing(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### Shipment_PostShipment
Creates a new shipment with the selected Shippingprovider


```js
billbee.Shipment_PostShipment({
  "model": {}
}, context)
```

#### Input
* input `object`
  * model **required** [Rechnungsdruck.WebApp.Model.Api.ApiShipmentViewModel](#rechnungsdruck.webapp.model.api.apishipmentviewmodel)

#### Output
* output `object`

### Shipment_GetShippingproviders
Query all defined shipping providers


```js
billbee.Shipment_GetShippingproviders(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### Shipment_ShipWithLabel
Creates a shipment for an order in billbee


```js
billbee.Shipment_ShipWithLabel({
  "shipmentInformation": {}
}, context)
```

#### Input
* input `object`
  * shipmentInformation **required** [Rechnungsdruck.WebApp.Controllers.Api.ShipmentWithLabel](#rechnungsdruck.webapp.controllers.api.shipmentwithlabel)

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Rechnungsdruck.WebApp.Controllers.Api.ShipmentWithLabelResult]](#rechnungsdruck.webapp.controllers.api.apiresult[rechnungsdruck.webapp.controllers.api.shipmentwithlabelresult])

### WebHookManagement_DeleteAll
Deletes all existing WebHook registrations.


```js
billbee.WebHookManagement_DeleteAll(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### WebHookManagement_Get
Gets all registered WebHooks for a given user.


```js
billbee.WebHookManagement_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Microsoft.AspNet.WebHooks.WebHook](#microsoft.aspnet.webhooks.webhook)

### WebHookManagement_Post
Registers a new WebHook for a given user.


```js
billbee.WebHookManagement_Post({
  "webHook": {
    "WebHookUri": ""
  }
}, context)
```

#### Input
* input `object`
  * webHook **required** [Microsoft.AspNet.WebHooks.WebHook](#microsoft.aspnet.webhooks.webhook)

#### Output
* output [Microsoft.AspNet.WebHooks.WebHook](#microsoft.aspnet.webhooks.webhook)

### WebHookManagement_GetFilters
Returns a list of all known filters you can use to register webhooks


```js
billbee.WebHookManagement_GetFilters(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### WebHookManagement_Delete
Deletes an existing WebHook registration.


```js
billbee.WebHookManagement_Delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The WebHook ID.

#### Output
* output `object`

### WebHookManagement_Lookup
Looks up a registered WebHook with the given {id} for a given user.


```js
billbee.WebHookManagement_Lookup({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Microsoft.AspNet.WebHooks.WebHook](#microsoft.aspnet.webhooks.webhook)

### WebHookManagement_Put
Updates an existing WebHook registration.


```js
billbee.WebHookManagement_Put({
  "id": "",
  "webHook": {
    "WebHookUri": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The WebHook ID.
  * webHook **required** [Microsoft.AspNet.WebHooks.WebHook](#microsoft.aspnet.webhooks.webhook)

#### Output
* output `object`



## Definitions

### Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel
* Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel `object`
  * BasicAttributes `array`
    * items [Billbee.Interfaces.Order.MultiLanguageString](#billbee.interfaces.order.multilanguagestring)
  * BillOfMaterial `array`
    * items [Billbee.Interfaces.BillbeeAPI.Model.BomSubArticleApiModel](#billbee.interfaces.billbeeapi.model.bomsubarticleapimodel)
  * Category1 [Billbee.Interfaces.BillbeeAPI.Model.ArticleCategoryApiModel](#billbee.interfaces.billbeeapi.model.articlecategoryapimodel)
  * Category2 [Billbee.Interfaces.BillbeeAPI.Model.ArticleCategoryApiModel](#billbee.interfaces.billbeeapi.model.articlecategoryapimodel)
  * Category3 [Billbee.Interfaces.BillbeeAPI.Model.ArticleCategoryApiModel](#billbee.interfaces.billbeeapi.model.articlecategoryapimodel)
  * Condition `integer`
  * CostPrice `number`
  * CountryOfOrigin `string`
  * DeliveryTime `integer`
  * Description `array`
    * items [Billbee.Interfaces.Order.MultiLanguageString](#billbee.interfaces.order.multilanguagestring)
  * EAN `string`
  * ExportDescription `string`
  * HeightCm `number`
  * Id `integer`
  * Images `array`
    * items [Billbee.Interfaces.BillbeeAPI.Model.ArticleImageApiModel](#billbee.interfaces.billbeeapi.model.articleimageapimodel)
  * InvoiceText `array`
    * items [Billbee.Interfaces.Order.MultiLanguageString](#billbee.interfaces.order.multilanguagestring)
  * IsCustomizable `boolean`
  * IsDigital `boolean`
  * LengthCm `number`
  * LowStock `boolean`
  * Manufacturer `string`
  * Materials `array`
    * items [Billbee.Interfaces.Order.MultiLanguageString](#billbee.interfaces.order.multilanguagestring)
  * Occasion `integer`
  * Price `number`
  * Recipient `integer`
  * SKU `string`
  * ShippingProductId `integer`
  * ShortDescription `array`
    * items [Billbee.Interfaces.Order.MultiLanguageString](#billbee.interfaces.order.multilanguagestring)
  * SoldAmount `number`
  * SoldAmountLast30Days `number`
  * SoldSumGross `number`
  * SoldSumGrossLast30Days `number`
  * SoldSumNet `number`
  * SoldSumNetLast30Days `number`
  * Sources `array`
    * items [Billbee.Interfaces.BillbeeAPI.Model.ArticleSourceApiModel](#billbee.interfaces.billbeeapi.model.articlesourceapimodel)
  * StockCode `string`
  * StockCurrent `number`
  * StockDesired `number`
  * StockReduceItemsPerSale `number`
  * StockWarning `number`
  * Stocks `array`
    * items [Billbee.Interfaces.BillbeeAPI.Model.StockArticleApiModel](#billbee.interfaces.billbeeapi.model.stockarticleapimodel)
  * Tags `array`
    * items [Billbee.Interfaces.Order.MultiLanguageString](#billbee.interfaces.order.multilanguagestring)
  * TaricNumber `string`
  * Title `array`
    * items [Billbee.Interfaces.Order.MultiLanguageString](#billbee.interfaces.order.multilanguagestring)
  * Type `integer`
  * Unit `integer`
  * UnitsPerItem `number`
  * Vat1Rate `number`
  * Vat2Rate `number`
  * VatIndex `integer`
  * Weight `integer`
  * WeightNet `integer`
  * WidthCm `number`

### Billbee.Interfaces.BillbeeAPI.Model.ArticleCategoryApiModel
* Billbee.Interfaces.BillbeeAPI.Model.ArticleCategoryApiModel `object`
  * Id `integer`
  * Name `string`

### Billbee.Interfaces.BillbeeAPI.Model.ArticleImageApiModel
* Billbee.Interfaces.BillbeeAPI.Model.ArticleImageApiModel `object`
  * Id `integer`
  * IsDefault `boolean`
  * Position `integer`
  * ThumbPathExt `string`
  * ThumbUrl `string`
  * Url `string`

### Billbee.Interfaces.BillbeeAPI.Model.ArticleSourceApiModel
* Billbee.Interfaces.BillbeeAPI.Model.ArticleSourceApiModel `object`
  * ApiAccountId `integer`
  * ApiAccountName `string`
  * Custom `object`
  * ExportFactor `number`
  * Id `integer`
  * Source `string`
  * SourceId `string`
  * StockSyncInactive `boolean`
  * StockSyncMax `number`
  * StockSyncMin `number`
  * UnitsPerItem `number`

### Billbee.Interfaces.BillbeeAPI.Model.BomSubArticleApiModel
* Billbee.Interfaces.BillbeeAPI.Model.BomSubArticleApiModel `object`
  * Amount `number`
  * ArticleId `integer`
  * SKU `string`

### Billbee.Interfaces.BillbeeAPI.Model.GetReservedAmountResponseData
* Billbee.Interfaces.BillbeeAPI.Model.GetReservedAmountResponseData `object`
  * ReservedAmount `number`

### Billbee.Interfaces.BillbeeAPI.Model.StockArticleApiModel
* Billbee.Interfaces.BillbeeAPI.Model.StockArticleApiModel `object`
  * Name `string`
  * StockCode `string`
  * StockCurrent `number`
  * StockDesired `number`
  * StockId `integer`
  * StockWarning `number`
  * UnfulfilledAmount `number`

### Billbee.Interfaces.BillbeeAPI.Model.UpdateStockApiModel
* Billbee.Interfaces.BillbeeAPI.Model.UpdateStockApiModel `object`
  * AutosubtractReservedAmount `boolean`
  * DeltaQuantity `number`
  * NewQuantity `number`
  * OldQuantity `number`
  * Reason `string`
  * Sku `string`
  * StockId `integer`

### Billbee.Interfaces.BillbeeAPI.Model.UpdateStockCodeApiModel
* Billbee.Interfaces.BillbeeAPI.Model.UpdateStockCodeApiModel `object`
  * Sku `string`
  * StockCode `string`
  * StockId `integer`

### Billbee.Interfaces.BillbeeAPI.Model.UpdateStockCodeResponseData
* Billbee.Interfaces.BillbeeAPI.Model.UpdateStockCodeResponseData `object`

### Billbee.Interfaces.BillbeeAPI.Model.UpdateStockResponseData
* Billbee.Interfaces.BillbeeAPI.Model.UpdateStockResponseData `object`
  * CurrentStock `number`
  * Message `string`
  * SKU `string`
  * UnfulfilledAmount `number`

### Billbee.Interfaces.Order.Address
* Billbee.Interfaces.Order.Address `object`
  * City `string`
  * Comment `string`
  * Company `string`
  * Country `string`
  * CountryISO2 `string`
  * Email `string`
  * FirstName `string`
  * HouseNumber `string`
  * Id `string`
  * LastName `string`
  * Line2 `string`
  * Line3 `string`
  * NameAddition `string`
  * Phone `string`
  * State `string`
  * Street `string`
  * Zip `string`

### Billbee.Interfaces.Order.ApiOrder
* Billbee.Interfaces.Order.ApiOrder `object`
  * AcceptLossOfReturnRight `boolean`
  * AdjustmentCost `number`
  * AdjustmentReason `string`
  * BillBeeOrderId `integer`
  * BillBeeParentOrderId `integer`
  * Buyer [Billbee.Interfaces.Order.ApiOrderUser](#billbee.interfaces.order.apiorderuser)
  * Comments `array`
    * items [Billbee.Interfaces.Order.Comment](#billbee.interfaces.order.comment)
  * ConfirmedAt `string`
  * CreatedAt `string`
  * Currency `string`
  * CustomInvoiceNote `string`
  * CustomerNumber `string`
  * DeliverySourceCountryCode `string`
  * Id `string`
  * InvoiceAddress [Billbee.Interfaces.Order.Address](#billbee.interfaces.order.address)
  * InvoiceDate `string`
  * InvoiceNumber `integer`
  * InvoiceNumberPostfix `string`
  * InvoiceNumberPrefix `string`
  * IsCancelationFor `string`
  * IsCanceled `boolean`
  * LanguageCode `string`
  * OrderItems `array`
    * items [Billbee.Interfaces.Order.ApiOrderItem](#billbee.interfaces.order.apiorderitem)
  * OrderNumber `string`
  * PaidAmount `number`
  * PayedAt `string`
  * PaymentInstruction `string`
  * PaymentMethod `integer` (values: 1, 2, 3, 4, 6, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95)
  * PaymentReference `string`
  * PaymentTransactionId `string`
  * RebateDifference `number`
  * RestfulPath `string`
  * Seller [Billbee.Interfaces.Order.ApiOrderUser](#billbee.interfaces.order.apiorderuser)
  * SellerComment `string`
  * ShipWeightKg `number`
  * ShippedAt `string`
  * ShippingAddress [Billbee.Interfaces.Order.Address](#billbee.interfaces.order.address)
  * ShippingCost `number`
  * ShippingIds `array`
    * items [Billbee.Interfaces.Order.ApiShippingId](#billbee.interfaces.order.apishippingid)
  * ShippingProfileId `string`
  * ShippingProfileName `string`
  * ShippingServices `array`
    * items [Billbee.Interfaces.Shipping.ProductService](#billbee.interfaces.shipping.productservice)
  * State `integer` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
  * Tags `array`
    * items `string`
  * TaxRate1 `number`
  * TaxRate2 `number`
  * TotalCost `number`
  * UpdatedAt `string`
  * VatId `string`
  * VatMode `integer` (values: 0, 1, 2, 3, 4, 5)

### Billbee.Interfaces.Order.ApiOrderItem
* Billbee.Interfaces.Order.ApiOrderItem `object`
  * Attributes `array`
    * items [Billbee.Interfaces.Order.ApiOrderItemAttribute](#billbee.interfaces.order.apiorderitemattribute)
  * BillbeeId `integer`
  * Discount `number`
  * DontAdjustStock `boolean`
  * GetPriceFromArticleIfAny `boolean`
  * IsCoupon `boolean`
  * IsDiscount `boolean`
  * Product [Billbee.Interfaces.Order.ApiSoldProduct](#billbee.interfaces.order.apisoldproduct)
  * Quantity `number`
  * ShippingProfileId `string`
  * TaxAmount `number`
  * TaxIndex `integer`
  * TotalPrice `number`
  * TransactionId `string`

### Billbee.Interfaces.Order.ApiOrderItemAttribute
* Billbee.Interfaces.Order.ApiOrderItemAttribute `object`
  * Id `string`
  * Name `string`
  * Price `number`
  * Value `string`

### Billbee.Interfaces.Order.ApiOrderUser
* Billbee.Interfaces.Order.ApiOrderUser `object`
  * BillbeeShopId `integer`
  * BillbeeShopName `string`
  * Email `string`
  * FirstName `string`
  * FullName `string`
  * Id `string`
  * LastName `string`
  * Nick `string`
  * Platform `string`

### Billbee.Interfaces.Order.ApiProductImage
* Billbee.Interfaces.Order.ApiProductImage `object`
  * ExternalId `string`
  * IsDefaultImage `boolean`
  * Position `integer`
  * Url `string`

### Billbee.Interfaces.Order.ApiShippingId
* Billbee.Interfaces.Order.ApiShippingId `object`
  * Created `string`
  * Shipper `string`
  * ShippingId `string`

### Billbee.Interfaces.Order.ApiSoldProduct
* Billbee.Interfaces.Order.ApiSoldProduct `object`
  * BillbeeId `integer`
  * CountryOfOrigin `string`
  * EAN `string`
  * Id `string`
  * Images `array`
    * items [Billbee.Interfaces.Order.ApiProductImage](#billbee.interfaces.order.apiproductimage)
  * IsDigital `boolean`
  * OldId `string`
  * PlatformData `string`
  * SKU `string`
  * SkuOrId `string`
  * TARICCode `string`
  * Title `string`
  * Weight `integer`

### Billbee.Interfaces.Order.Comment
* Billbee.Interfaces.Order.Comment `object`
  * Created `string`
  * FromCustomer `boolean`
  * Id `integer`
  * Name `string`
  * Text `string`

### Billbee.Interfaces.Order.MultiLanguageString
* Billbee.Interfaces.Order.MultiLanguageString `object`
  * LanguageCode `string`
  * Text `string`

### Billbee.Interfaces.Shipping.ProductService
* Billbee.Interfaces.Shipping.ProductService `object`
  * DisplayName `string`
  * DisplayValue `string`
  * PossibleValueLists `array`
    * items [System.Collections.Generic.KeyValuePair[System.String,System.Collections.Generic.List[System.Collections.Generic.KeyValuePair[System.Int32,System.String]]]](#system.collections.generic.keyvaluepair[system.string,system.collections.generic.list[system.collections.generic.keyvaluepair[system.int32,system.string]]])
  * RequiresUserInput `boolean`
  * ServiceName `string`
  * typeName `string`

### Billbee.Interfaces.Shipping.ShipmentAddress
* Billbee.Interfaces.Shipping.ShipmentAddress `object`
  * AddressAddition `string`
  * City `string`
  * Company `string`
  * CountryCode `string`
  * CountryCodeISO3 `string`
  * Email `string`
  * FirstName `string`
  * FullName `string`
  * FullStreet `string`
  * Housenumber `string`
  * IsExportCountry `boolean`
  * LastName `string`
  * Name2 `string`
  * State `string`
  * Street `string`
  * Telephone `string`
  * Zip `string`

### Billbee.Interfaces.Shipping.ShipmentData.Dimensions
* Billbee.Interfaces.Shipping.ShipmentData.Dimensions `object`
  * height `number`
  * length `number`
  * width `number`

### Microsoft.AspNet.WebHooks.WebHook
* Microsoft.AspNet.WebHooks.WebHook `object`
  * Description `string`
  * Filters `array`
    * items `string`
  * Headers `object`
  * Id `string`
  * IsPaused `boolean`
  * Properties `object`
  * Secret `string`
  * WebHookUri **required** `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiAddShipmentToOrderModel
* Rechnungsdruck.WebApp.Controllers.Api.ApiAddShipmentToOrderModel `object`
  * Comment `string`
  * OrderId `string`
  * ShippingId `string`
  * ShippingProviderId `integer`
  * ShippingProviderProductId `integer`

### Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel]] `object`
  * Page `integer`
  * PageSize `integer`
  * TotalPages `integer`
  * TotalRows `integer`

### Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel]] `object`
  * Data `array`
    * items [Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel](#billbee.interfaces.billbeeapi.model.articleapimodel)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22)
  * ErrorMessage `string`
  * Paging [Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel]]](#rechnungsdruck.webapp.controllers.api.apipagedresult.paginginformation[system.collections.generic.list[billbee.interfaces.billbeeapi.model.articleapimodel]])

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel] `object`
  * Data [Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel](#billbee.interfaces.billbeeapi.model.articleapimodel)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.GetReservedAmountResponseData]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.GetReservedAmountResponseData] `object`
  * Data [Billbee.Interfaces.BillbeeAPI.Model.GetReservedAmountResponseData](#billbee.interfaces.billbeeapi.model.getreservedamountresponsedata)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.UpdateStockCodeResponseData]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.UpdateStockCodeResponseData] `object`
  * Data [Billbee.Interfaces.BillbeeAPI.Model.UpdateStockCodeResponseData](#billbee.interfaces.billbeeapi.model.updatestockcoderesponsedata)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.UpdateStockResponseData]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.UpdateStockResponseData] `object`
  * Data [Billbee.Interfaces.BillbeeAPI.Model.UpdateStockResponseData](#billbee.interfaces.billbeeapi.model.updatestockresponsedata)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Rechnungsdruck.WebApp.Controllers.Api.ShipmentWithLabelResult]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Rechnungsdruck.WebApp.Controllers.Api.ShipmentWithLabelResult] `object`
  * Data [Rechnungsdruck.WebApp.Controllers.Api.ShipmentWithLabelResult](#rechnungsdruck.webapp.controllers.api.shipmentwithlabelresult)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.AutomaticProvisioningController.CreateAccountContainer
* Rechnungsdruck.WebApp.Controllers.Api.AutomaticProvisioningController.CreateAccountContainer `object`: Data used to create a new Billbee user account
  * AcceptTerms `boolean`
  * Address [Rechnungsdruck.WebApp.Controllers.Api.AutomaticProvisioningController.CreateAccountContainer.UserAddress](#rechnungsdruck.webapp.controllers.api.automaticprovisioningcontroller.createaccountcontainer.useraddress)
  * AffiliateCouponCode `string`: Specifies an billbee affiliate code to attach to the user
  * DefaultCurrrency `string`: Optionally specify the default currency of the user
  * DefaultVatIndex `integer`: Optionally specify the default vat index of the user
  * DefaultVatMode `integer` (values: 0, 1, 2, 3, 4, 5): Optionally specify the default vat mode of the user
  * EMail **required** `string`: The Email address of the user to create
  * Newsletter `boolean`: Gets or sets if the user is interested in the Billbee newsletter
  * Password `string`
  * Vat1Rate `number`: Optionally specify the vat1 (normal) rate of the user
  * Vat2Rate `number`: Optionally specify the vat2 (reduced) rate of the user

### Rechnungsdruck.WebApp.Controllers.Api.AutomaticProvisioningController.CreateAccountContainer.UserAddress
* Rechnungsdruck.WebApp.Controllers.Api.AutomaticProvisioningController.CreateAccountContainer.UserAddress `object`: Represents the invoice address of a Billbee user
  * Address1 `string`
  * Address2 `string`
  * City `string`
  * Company `string`
  * Country `string`: The ISO2 country code of the users country
  * Name `string`
  * VatId `string`
  * Zip `string`

### Rechnungsdruck.WebApp.Controllers.Api.OrderStateUpdate
* Rechnungsdruck.WebApp.Controllers.Api.OrderStateUpdate `object`: Specifies the parameters used to set the new state of an order
  * NewStateId `integer` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15): The new state to set

### Rechnungsdruck.WebApp.Controllers.Api.OrderTagCreate
* Rechnungsdruck.WebApp.Controllers.Api.OrderTagCreate `object`
  * Tags `array`
    * items `string`

### Rechnungsdruck.WebApp.Controllers.Api.ShipmentWithLabel
* Rechnungsdruck.WebApp.Controllers.Api.ShipmentWithLabel `object`
  * ChangeStateToSend `boolean`: Optional parameter to automatically change the orderstate to sent after creating the shipment
  * ClientReference `string`: Optional specify a reference text to be included on the label. Works not with all carriers
  * Dimension [Billbee.Interfaces.Shipping.ShipmentData.Dimensions](#billbee.interfaces.shipping.shipmentdata.dimensions)
  * OrderId `integer`: The Billbee internal id of the order to ship
  * PrinterName `string`: Optional the name of a connected cloudprinter to send the label to
  * ProductId `integer`: the id of the shipping provider product to be used
  * ProviderId `integer`: The id of the provider. You can query all providers with the shippingproviders endpoint
  * ShipDate `string`: Optional specify the shipdate to be transmitted to the carrier
  * WeightInGram `integer`: Optional the shipments weight in gram to override the calculated weight

### Rechnungsdruck.WebApp.Controllers.Api.ShipmentWithLabelResult
* Rechnungsdruck.WebApp.Controllers.Api.ShipmentWithLabelResult `object`
  * Carrier `string`
  * ExportDocsPdf `string`
  * LabelDataPdf `string`
  * OrderId `integer`
  * OrderReference `string`
  * ShippingDate `string`
  * ShippingId `string`
  * TrackingUrl `string`

### Rechnungsdruck.WebApp.Model.Api.ApiShipmentViewModel
* Rechnungsdruck.WebApp.Model.Api.ApiShipmentViewModel `object`
  * ClientReference `string`: Optional specify a text to be included on the label. Not possible with all carriers
  * Content `string`: Optional specify a text describing the content of the shipment. Used for export shipments
  * CustomerNumber `string`: Not used anymore
  * OrderCurrencyCode `string`: The Currency if the ordersum
  * OrderSum `number`: The value of the shipments content
  * PrinterName `string`: The name of a connected Cloudprinter to sent the label to
  * ProductCode `string`: The productcode to be used when creating the shipment. Values depends on the carrier used
  * ProviderName `string`: The name of the provider as specified in the billbee account
  * ReceiverAddress [Billbee.Interfaces.Shipping.ShipmentAddress](#billbee.interfaces.shipping.shipmentaddress)
  * Services `array`: A list of services to be used when creating the shipment
    * items [Billbee.Interfaces.Shipping.ProductService](#billbee.interfaces.shipping.productservice)
  * ShipDate `string`: Optional overwrite the shipdate to be transferred to the carrier
  * WeightInGram `number`: Optional specify the weight in gram of the shipment
  * shippingCarrier `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)

### System.Collections.Generic.KeyValuePair[System.Int32,System.String]
* System.Collections.Generic.KeyValuePair[System.Int32,System.String] `object`
  * key `integer`
  * value `string`

### System.Collections.Generic.KeyValuePair[System.String,System.Collections.Generic.List[System.Collections.Generic.KeyValuePair[System.Int32,System.String]]]
* System.Collections.Generic.KeyValuePair[System.String,System.Collections.Generic.List[System.Collections.Generic.KeyValuePair[System.Int32,System.String]]] `object`
  * key `string`
  * value `array`
    * items [System.Collections.Generic.KeyValuePair[System.Int32,System.String]](#system.collections.generic.keyvaluepair[system.int32,system.string])


