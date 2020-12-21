# @datafire/billbee

Client library for Billbee API

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

.then(data => {
  console.log(data);
});
```

## Description

Documentation of the Billbee REST API to connect a Billbee account to external aplications.

## Endpoint

The Billbee API endpoint base url is https://app.billbee.io/api/v1 

## Activation

You have to enable the API in the settings of your Billbee account. In addition you need a Billbee API Key identifying the application you develop. To get an API key, send a mail to support@billbee.io and send us a short note about what you are building.

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

### CloudStorageApi_GetList
Gets a list of all connected cloud storage devices


```js
billbee.CloudStorageApi_GetList(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.CloudStorageApiModel]]](#rechnungsdruck.webapp.controllers.api.apiresult[system.collections.generic.list[billbee.interfaces.billbeeapi.model.cloudstorageapimodel]])

### CustomerAddresses_GetAll
Get a list of all customer addresses


```js
billbee.CustomerAddresses_GetAll({}, context)
```

#### Input
* input `object`
  * page `integer`: The current page to request starting with 1 (default is 1)
  * pageSize `integer`: The page size for the result list. Values between 1 and 250 are allowed. (default is 50)

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel]]](#rechnungsdruck.webapp.controllers.api.apipagedresult[system.collections.generic.list[billbee.interfaces.billbeeapi.model.customeraddressapimodel]])

### CustomerAddresses_Create
Creates a new customer address


```js
billbee.CustomerAddresses_Create({
  "model": {}
}, context)
```

#### Input
* input `object`
  * model **required** [Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel](#billbee.interfaces.billbeeapi.model.customeraddressapimodel)

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.customeraddressapimodel])

### CustomerAddresses_GetOne
Queries a single customer address by id


```js
billbee.CustomerAddresses_GetOne({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the address to query

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.customeraddressapimodel])

### CustomerAddresses_Update
Updates a customer address by id


```js
billbee.CustomerAddresses_Update({
  "model": {},
  "id": 0
}, context)
```

#### Input
* input `object`
  * model **required** [Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel](#billbee.interfaces.billbeeapi.model.customeraddressapimodel)
  * id **required** `integer`: The id of the address

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.customeraddressapimodel])

### Customer_GetAll
Get a list of all customers


```js
billbee.Customer_GetAll({}, context)
```

#### Input
* input `object`
  * page `integer`: The current page to request starting with 1
  * pageSize `integer`: The pagesize for the result list. Values between 1 and 250 are allowed

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.CustomerApiModel]]](#rechnungsdruck.webapp.controllers.api.apipagedresult[system.collections.generic.list[billbee.interfaces.billbeeapi.model.customerapimodel]])

### Customer_Create
Creates a new customer


```js
billbee.Customer_Create({
  "model": {}
}, context)
```

#### Input
* input `object`
  * model **required** [Billbee.Interfaces.BillbeeAPI.Model.CreateCustomerApiModel](#billbee.interfaces.billbeeapi.model.createcustomerapimodel)

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.CustomerApiModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.customerapimodel])

### Customer_GetCustomerAddress
Queries a single address from a customer


```js
billbee.Customer_GetCustomerAddress({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the address

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.customeraddressapimodel])

### Customer_PatchAddress
Id and CustomerId cannot be changed


```js
billbee.Customer_PatchAddress({
  "id": 0,
  "model": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the address
  * model **required** `object`

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.customeraddressapimodel])

### Customer_UpdateAddress
Id and CustomerId cannot be changed. Fields you do not send will become empty.


```js
billbee.Customer_UpdateAddress({
  "model": {},
  "id": 0
}, context)
```

#### Input
* input `object`
  * model **required** [Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel](#billbee.interfaces.billbeeapi.model.customeraddressapimodel)
  * id **required** `integer`: The id of the address

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.customeraddressapimodel])

### Customer_GetOne
Queries a single customer by id


```js
billbee.Customer_GetOne({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the customer to query

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.CustomerApiModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.customerapimodel])

### Customer_Update
Updates a customer by id


```js
billbee.Customer_Update({
  "model": {},
  "id": 0
}, context)
```

#### Input
* input `object`
  * model **required** [Billbee.Interfaces.BillbeeAPI.Model.CustomerApiModel](#billbee.interfaces.billbeeapi.model.customerapimodel)
  * id **required** `integer`: The id of the customer

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.CustomerApiModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.customerapimodel])

### Customer_GetCustomerAddresses
Queries a list of addresses from a customer


```js
billbee.Customer_GetCustomerAddresses({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the customer
  * page `integer`: The current page to request starting with 1
  * pageSize `integer`: The pagesize for the result list. Values between 1 and 250 are allowed

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel]]](#rechnungsdruck.webapp.controllers.api.apipagedresult[system.collections.generic.list[billbee.interfaces.billbeeapi.model.customeraddressapimodel]])

### Customer_AddCustomerAddress
Id and  CustomerId will be ignored in model. If Id is set, the addition will be stopped.


```js
billbee.Customer_AddCustomerAddress({
  "id": 0,
  "model": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: CustomerId to attach the new address to.
  * model **required** [Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel](#billbee.interfaces.billbeeapi.model.customeraddressapimodel)

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.customeraddressapimodel])

### Customer_GetCustomerOrders
Queries a list of orders from a customer


```js
billbee.Customer_GetCustomerOrders({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the customer
  * page `integer`: The current page to request starting with 1
  * pageSize `integer`: The pagesize for the result list. Values between 1 and 250 are allowed

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Rechnungsdruck.WebApp.Controllers.Api.Order]]](#rechnungsdruck.webapp.controllers.api.apipagedresult[system.collections.generic.list[rechnungsdruck.webapp.controllers.api.order]])

### EnumApi_GetOrderStates
Returns a list with all defined orderstates


```js
billbee.EnumApi_GetOrderStates(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### EnumApi_GetPaymentTypes
Returns a list with all defined paymenttypes


```js
billbee.EnumApi_GetPaymentTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### EnumApi_GetShippingCarriers
Returns a list with all defined shippingcarriers


```js
billbee.EnumApi_GetShippingCarriers(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### EventApi_GetList
Get a list of all events optionally filtered by date. This request is extra throttled to 2 calls per page per hour.


```js
billbee.EventApi_GetList({}, context)
```

#### Input
* input `object`
  * minDate `string`: Specifies the oldest date to include in the response
  * maxDate `string`: Specifies the newest date to include in the response
  * page `integer`: Specifies the page to request
  * pageSize `integer`: Specifies the pagesize. Defaults to 50, max value is 250
  * typeId `array`: Filter for specific event types
  * orderId `integer`: Filter for specific order id

#### Output
* output `object`

### LayoutApi_GetList



```js
billbee.LayoutApi_GetList(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Models.LayoutTemplate]]](#rechnungsdruck.webapp.controllers.api.apiresult[system.collections.generic.list[billbee.interfaces.billbeeapi.models.layouttemplate]])

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
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.Order]]](#rechnungsdruck.webapp.controllers.api.apipagedresult[system.collections.generic.list[billbee.interfaces.billbeeapi.model.order]])

### OrderApi_PostNewOrder
To create an order POST an JSON object to the orders endpoint with the shown properties.
Not all properties are required.


```js
billbee.OrderApi_PostNewOrder({
  "orderData": {}
}, context)
```

#### Input
* input `object`
  * orderData **required** [Billbee.Interfaces.BillbeeAPI.Model.Order](#billbee.interfaces.billbeeapi.model.order)
  * shopId `integer`

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.Order]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.order])

### OrderApi_CreateDeliveryNote
Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.


```js
billbee.OrderApi_CreateDeliveryNote({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The internal billbee id of the order
  * includePdf `boolean`: If true, the PDF is included in the response as base64 encoded string
  * sendToCloudId `integer`: Optionally specify the id of a billbee connected cloud device to send the pdf to

#### Output
* output `object`

### OrderApi_CreateInvoice
Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.


```js
billbee.OrderApi_CreateInvoice({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The internal billbee id of the order
  * includeInvoicePdf `boolean`: If true, the PDF is included in the response as base64 encoded string
  * templateId `integer`: You can pass the id of an invoice template to overwrite the assigned template for invoice creation
  * sendToCloudId `integer`: You can pass the id of a connected cloud printer/storage to send the invoice to it

#### Output
* output `object`

### OrderApi_GetPatchableFields
Returns a list of fields which can be updated with the orders/{id} patch call


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
Get a single order by its external order number


```js
billbee.OrderApi_GetByExtRef({
  "extRef": ""
}, context)
```

#### Input
* input `object`
  * extRef **required** `string`: The extern order number of the order

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.Order]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.order])

### OrderApi_GetInvoiceList
Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate


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
Get a single order by its internal billbee id. This request is throttled to 6 calls per order in one minute


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
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.Order]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.order])

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
  * id **required** `integer`
  * model **required** `object`

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.Order]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.order])

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
- 16: fulfilling


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

### OrderApi_ParsePlaceholders
Parses a text and replaces all placeholders


```js
billbee.OrderApi_ParsePlaceholders({
  "id": 0,
  "container": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the order
  * container **required** [Rechnungsdruck.WebApp.Controllers.Api.OrderApiController.ParseTextContainer](#rechnungsdruck.webapp.controllers.api.orderapicontroller.parsetextcontainer)

#### Output
* output `object`

### OrderApi_SendMessage
Sends a message to the buyer


```js
billbee.OrderApi_SendMessage({
  "id": 0,
  "model": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the order
  * model **required** [Rechnungsdruck.WebApp.Controllers.Api.OrderApiController.SendMessageModel](#rechnungsdruck.webapp.controllers.api.orderapicontroller.sendmessagemodel)

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

### OrderApi_TriggerEvent
Triggers a rule event


```js
billbee.OrderApi_TriggerEvent({
  "id": 0,
  "model": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the order
  * model **required** [Rechnungsdruck.WebApp.Controllers.Api.OrderApiController.TriggerEventContainer](#rechnungsdruck.webapp.controllers.api.orderapicontroller.triggereventcontainer)

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

### Article_CreateArticle
Creates a new product


```js
billbee.Article_CreateArticle({
  "model": {
    "VatIndex": 0,
    "Price": 0,
    "Vat1Rate": 0,
    "Vat2Rate": 0,
    "Type": 0,
    "IsDigital": true,
    "IsCustomizable": true
  }
}, context)
```

#### Input
* input `object`
  * model **required** [Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel](#billbee.interfaces.billbeeapi.model.articleapimodel)

#### Output
* output `object`

### Article_GetPatchableFields
Returns a list of fields which can be updated with the patch call


```js
billbee.Article_GetPatchableFields(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### Article_GetCategory
GEts a list of all defined categories


```js
billbee.Article_GetCategory(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### Article_GetCustomFields
Queries a list of all custom fields


```js
billbee.Article_GetCustomFields({}, context)
```

#### Input
* input `object`
  * page `integer`
  * pageSize `integer`

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiCustomFieldDefinitionModel]]](#rechnungsdruck.webapp.controllers.api.apipagedresult[system.collections.generic.list[billbee.interfaces.billbeeapi.model.articleapicustomfielddefinitionmodel]])

### Article_GetCustomField
Queries a single custom field


```js
billbee.Article_GetCustomField({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the custom field to query

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiCustomFieldDefinitionModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.articleapicustomfielddefinitionmodel])

### Article_DeleteImages
Delete multiple images by id


```js
billbee.Article_DeleteImages({
  "imageIds": []
}, context)
```

#### Input
* input `object`
  * imageIds **required** `array`
    * items `integer`

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.DeletedImagesModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.deletedimagesmodel])

### Article_DeleteImage
Deletes a single image by id


```js
billbee.Article_DeleteImage({
  "imageId": 0
}, context)
```

#### Input
* input `object`
  * imageId **required** `integer`: The image id

#### Output
* output `object`

### Article_GetImage
Returns a single image by id


```js
billbee.Article_GetImage({
  "imageId": 0
}, context)
```

#### Input
* input `object`
  * imageId **required** `integer`: The Id of the image

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.ArticleImageRelationApiModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.articleimagerelationapimodel])

### Article_GetReservedAmount
Queries the reserved amount for a single article by id or by sku


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

### Article_DeleteArticle
Deletes a product


```js
billbee.Article_DeleteArticle({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the Product

#### Output
* output `object`

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
  * lookupBy `string`: Either the value id, ean or the value sku to specify the meaning of the id parameter

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.articleapimodel])

### Article_PatchArticle
Updates one or more fields of a product


```js
billbee.Article_PatchArticle({
  "id": 0,
  "model": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the Product
  * model **required** `object`

#### Output
* output `object`

### Article_GetImages
Returns a list of all images of the product


```js
billbee.Article_GetImages({
  "productId": 0
}, context)
```

#### Input
* input `object`
  * productId **required** `integer`: The Id of the product

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleImageRelationApiModel]]](#rechnungsdruck.webapp.controllers.api.apiresult[system.collections.generic.list[billbee.interfaces.billbeeapi.model.articleimagerelationapimodel]])

### Article_PutImages
Add multiple images to a product or replace the product images by the given images


```js
billbee.Article_PutImages({
  "productId": 0,
  "models": []
}, context)
```

#### Input
* input `object`
  * productId **required** `integer`: The id of the product
  * models **required** `array`
    * items [Billbee.Interfaces.BillbeeAPI.Model.ArticleImageRelationApiModel](#billbee.interfaces.billbeeapi.model.articleimagerelationapimodel)
  * replace `boolean`: If you pass true, the images will be replaced by the passed images. Otherwise the passed images will be appended to the product.

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.ArticleImageRelationApiModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.articleimagerelationapimodel])

### Article_DeleteImageFromProduct
Deletes a single image from a product


```js
billbee.Article_DeleteImageFromProduct({
  "productId": 0,
  "imageId": 0
}, context)
```

#### Input
* input `object`
  * productId **required** `integer`: The product id
  * imageId **required** `integer`: The image id

#### Output
* output `object`

### Article_GetImageFromProduct
Returns a single image by id


```js
billbee.Article_GetImageFromProduct({
  "productId": 0,
  "imageId": 0
}, context)
```

#### Input
* input `object`
  * productId **required** `integer`: The Id of the product
  * imageId **required** `integer`: The Id of the image

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.ArticleImageRelationApiModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.articleimagerelationapimodel])

### Article_PutImage
Add or update an existing image of a product


```js
billbee.Article_PutImage({
  "productId": 0,
  "imageId": 0,
  "model": {}
}, context)
```

#### Input
* input `object`
  * productId **required** `integer`: The product id
  * imageId **required** `integer`: The image id. If you pass 0, the image will be added
  * model **required** [Billbee.Interfaces.BillbeeAPI.Model.ArticleImageRelationApiModel](#billbee.interfaces.billbeeapi.model.articleimagerelationapimodel)

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.ArticleImageRelationApiModel]](#rechnungsdruck.webapp.controllers.api.apiresult[billbee.interfaces.billbeeapi.model.articleimagerelationapimodel])

### Search_Search
Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax


```js
billbee.Search_Search({
  "model": {}
}, context)
```

#### Input
* input `object`
  * model **required** [Rechnungsdruck.WebApp.Controllers.Api.SearchController.SearchModel](#rechnungsdruck.webapp.controllers.api.searchcontroller.searchmodel)

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Rechnungsdruck.WebApp.Controllers.Api.SearchController.SearchResultsModel]](#rechnungsdruck.webapp.controllers.api.apiresult[rechnungsdruck.webapp.controllers.api.searchcontroller.searchresultsmodel])

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
  * model **required** [Billbee.Interfaces.BillbeeAPI.Model.CreateShipmentApiModel](#billbee.interfaces.billbeeapi.model.createshipmentapimodel)

#### Output
* output `object`

### Shipment_GetList
Get a list of all shipments optionally filtered by date. All parameters are optional.


```js
billbee.Shipment_GetList({}, context)
```

#### Input
* input `object`
  * page `integer`: Specifies the page to request.
  * pageSize `integer`: Specifies the pagesize. Defaults to 50, max value is 250
  * createdAtMin `string`: Specifies the oldest shipment date to include in the response
  * createdAtMax `string`: Specifies the newest shipment date to include in the response
  * orderId `integer`: Get shipments for this order only.
  * minimumShipmentId `integer`: Get Shipments with a shipment greater or equal than this id. New shipments have a greater id than older shipments.
  * shippingProviderId `integer`: Get Shippings for the specified shipping provider only. <seealso cref="M:Rechnungsdruck.WebApp.Controllers.Api.ShipmentController.GetShippingproviders" />

#### Output
* output [Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.Shipment]]](#rechnungsdruck.webapp.controllers.api.apipagedresult[system.collections.generic.list[billbee.interfaces.billbeeapi.model.shipment]])

### Shipment_GetShippingCarrier
Queries the currently available shipping carriers.


```js
billbee.Shipment_GetShippingCarrier(null, context)
```

#### Input
*This action has no parameters*

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

### Billbee.Interfaces.BillbeeAPI.Model.ArticleApiCustomFieldDefinitionModel
* Billbee.Interfaces.BillbeeAPI.Model.ArticleApiCustomFieldDefinitionModel `object`
  * Configuration `object`
  * Id `integer`
  * IsNullable `boolean`
  * Name `string`
  * Type `integer` (values: 0, 1, 2, 3)

### Billbee.Interfaces.BillbeeAPI.Model.ArticleApiCustomFieldValueModel
* Billbee.Interfaces.BillbeeAPI.Model.ArticleApiCustomFieldValueModel `object`
  * ArticleId `integer`
  * Definition [Billbee.Interfaces.BillbeeAPI.Model.ArticleApiCustomFieldDefinitionModel](#billbee.interfaces.billbeeapi.model.articleapicustomfielddefinitionmodel)
  * DefinitionId `integer`
  * Id `integer`
  * Value `object`

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
  * CustomFields `array`
    * items [Billbee.Interfaces.BillbeeAPI.Model.ArticleApiCustomFieldValueModel](#billbee.interfaces.billbeeapi.model.articleapicustomfieldvaluemodel)
  * DeliveryTime `integer`
  * Description `array`
    * items [Billbee.Interfaces.Order.MultiLanguageString](#billbee.interfaces.order.multilanguagestring)
  * EAN `string`
  * ExportDescription `string`
  * HeightCm `number`
  * Id `integer`
  * Images `array`
    * items [Billbee.Interfaces.BillbeeAPI.Model.ArticleImageRelationApiModel](#billbee.interfaces.billbeeapi.model.articleimagerelationapimodel)
  * InvoiceText `array`
    * items [Billbee.Interfaces.Order.MultiLanguageString](#billbee.interfaces.order.multilanguagestring)
  * IsCustomizable **required** `boolean`
  * IsDigital **required** `boolean`
  * LengthCm `number`
  * LowStock `boolean`
  * Manufacturer `string`
  * Materials `array`
    * items [Billbee.Interfaces.Order.MultiLanguageString](#billbee.interfaces.order.multilanguagestring)
  * Occasion `integer`
  * Price **required** `number`
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
  * Type **required** `integer`
  * Unit `integer`
  * UnitsPerItem `number`
  * Vat1Rate **required** `number`
  * Vat2Rate **required** `number`
  * VatIndex **required** `integer`
  * Weight `integer`
  * WeightNet `integer`
  * WidthCm `number`

### Billbee.Interfaces.BillbeeAPI.Model.ArticleCategoryApiModel
* Billbee.Interfaces.BillbeeAPI.Model.ArticleCategoryApiModel `object`
  * Id `integer`
  * Name `string`

### Billbee.Interfaces.BillbeeAPI.Model.ArticleImageRelationApiModel
* Billbee.Interfaces.BillbeeAPI.Model.ArticleImageRelationApiModel `object`
  * ArticleId `integer`
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
  * Source **required** `string`
  * SourceId **required** `string`
  * StockSyncInactive `boolean`
  * StockSyncMax `number`
  * StockSyncMin `number`
  * UnitsPerItem `number`

### Billbee.Interfaces.BillbeeAPI.Model.BomSubArticleApiModel
* Billbee.Interfaces.BillbeeAPI.Model.BomSubArticleApiModel `object`
  * Amount `number`
  * ArticleId `integer`
  * SKU `string`

### Billbee.Interfaces.BillbeeAPI.Model.CloudStorageApiModel
* Billbee.Interfaces.BillbeeAPI.Model.CloudStorageApiModel `object`
  * Id `integer`
  * Name `string`
  * Type `string`
  * UsedAsPrinter `boolean`

### Billbee.Interfaces.BillbeeAPI.Model.CommentApiModel
* Billbee.Interfaces.BillbeeAPI.Model.CommentApiModel `object`
  * Created `string`
  * FromCustomer `boolean`
  * Id `integer`
  * Name `string`
  * Text `string`

### Billbee.Interfaces.BillbeeAPI.Model.CreateCustomerApiModel
* Billbee.Interfaces.BillbeeAPI.Model.CreateCustomerApiModel `object`
  * Address [Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel](#billbee.interfaces.billbeeapi.model.customeraddressapimodel)
  * Email `string`
  * Id `integer`: The Billbee Id of the customer
  * LanguageId `integer`
  * Name `string`
  * Number `integer`
  * PriceGroupId `integer`
  * Tel1 `string`
  * Tel2 `string`
  * Type `integer`: Customer Type
  * VatId `string`

### Billbee.Interfaces.BillbeeAPI.Model.CreateShipmentApiModel
* Billbee.Interfaces.BillbeeAPI.Model.CreateShipmentApiModel `object`
  * ClientReference `string`: Optional specify a text to be included on the label. Not possible with all carriers
  * Content `string`: Optional specify a text describing the content of the shipment. Used for export shipments
  * CustomerNumber `string`: Not used anymore
  * Dimension [Billbee.Interfaces.Shipping.ShipmentData.Dimensions](#billbee.interfaces.shipping.shipmentdata.dimensions)
  * OrderCurrencyCode `string`: The Currency if the ordersum
  * OrderSum `number`: The value of the shipments content
  * PrinterIdForExportDocs `integer`: The id of a connected Cloudprinter to sent the export docs to
  * PrinterName `string`: The name of a connected Cloudprinter to sent the label to
  * ProductCode `string`: The productcode to be used when creating the shipment. Values depends on the carrier used
  * ProviderName `string`: The name of the provider as specified in the billbee account
  * ReceiverAddress [Billbee.Interfaces.BillbeeAPI.Model.ShipmentAddressApiModel](#billbee.interfaces.billbeeapi.model.shipmentaddressapimodel)
  * Services `array`: A list of services to be used when creating the shipment
    * items [Billbee.Interfaces.Shipping.ProductService](#billbee.interfaces.shipping.productservice)
  * ShipDate `string`: Optional overwrite the shipdate to be transferred to the carrier
  * WeightInGram `number`: Optional specify the weight in gram of the shipment
  * shippingCarrier `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17)

### Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel
* Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel `object`: Container for passing address data
  * AddressAddition `string`
  * AddressType `integer` (values: 1, 2): The type of the address
  * City `string`
  * Company `string`: The name of the company
  * CountryCode `string`: The ISO2 code of the country
  * CustomerId `integer`: The internal Billbee id of the customer the address belongs to
  * Email `string`
  * Fax `string`
  * FirstName `string`
  * Housenumber `string`
  * Id `integer`: The internal Billbee ID of the address record. Can be null if a new address is created
  * LastName `string`
  * Name2 `string`: Optionally an additional name field
  * State `string`
  * Street `string`
  * Tel1 `string`
  * Tel2 `string`
  * Zip `string`

### Billbee.Interfaces.BillbeeAPI.Model.CustomerApiModel
* Billbee.Interfaces.BillbeeAPI.Model.CustomerApiModel `object`
  * Email `string`
  * Id `integer`: The Billbee Id of the customer
  * LanguageId `integer`
  * Name `string`
  * Number `integer`
  * PriceGroupId `integer`
  * Tel1 `string`
  * Tel2 `string`
  * Type `integer`: Customer Type
  * VatId `string`

### Billbee.Interfaces.BillbeeAPI.Model.DeletedImagesModel
* Billbee.Interfaces.BillbeeAPI.Model.DeletedImagesModel `object`
  * Deleted `array`
    * items `integer`
  * NotFound `array`
    * items `integer`

### Billbee.Interfaces.BillbeeAPI.Model.GetReservedAmountResponseData
* Billbee.Interfaces.BillbeeAPI.Model.GetReservedAmountResponseData `object`
  * ReservedAmount `number`: The reserve (not fulfilled) qty of the article

### Billbee.Interfaces.BillbeeAPI.Model.Order
* Billbee.Interfaces.BillbeeAPI.Model.Order `object`: A class that represents the Billbee data model of a single order
  * AcceptLossOfReturnRight `boolean`: Customer accepts loss due to withdrawal
  * AdjustmentCost `number`
  * AdjustmentReason `string`
  * BillBeeOrderId `integer`: The Order.Id from the Billbee database
  * BillBeeParentOrderId `integer`: The Id of the parent order in the Billbee database
  * Buyer [Billbee.Interfaces.BillbeeAPI.Model.OrderUser](#billbee.interfaces.billbeeapi.model.orderuser)
  * Comments `array`: All messages / comments of the order
    * items [Billbee.Interfaces.BillbeeAPI.Model.CommentApiModel](#billbee.interfaces.billbeeapi.model.commentapimodel)
  * ConfirmedAt `string`: The date on which the order was confirmed
  * CreatedAt `string`: The date on which the order was created
  * Currency `string`: The three letter currency code.
  * CustomInvoiceNote `string`: An optional multiline text which is printed on the invoice
  * Customer [Billbee.Interfaces.BillbeeAPI.Model.CustomerApiModel](#billbee.interfaces.billbeeapi.model.customerapimodel)
  * CustomerNumber `string`: The customer number (not to be confused with the id of the customer)
  * DeliverySourceCountryCode `string`: An optional Country ISO2 Code of the country where order is shipped from (FBA)
  * DistributionCenter `string`: An optional code for the distribution center delivering this order
  * History `array`
    * items [Billbee.Interfaces.Order.HistoryEntry](#billbee.interfaces.order.historyentry)
  * Id `string`: Id of the order in the external system (marketplace)
  * InvoiceAddress [Billbee.Interfaces.BillbeeAPI.Model.OrderAddressApiModel](#billbee.interfaces.billbeeapi.model.orderaddressapimodel)
  * InvoiceDate `string`: The date on which the invoice was created
  * InvoiceNumber `integer`: The invoice number
  * InvoiceNumberPostfix `string`: The postfix of the invoice number
  * InvoiceNumberPrefix `string`: The prefix of the invoice number
  * IsCancelationFor `string`: An optional Order Id (externalid) for an order if this is a cancel order (shopify only at the moment)
  * LanguageCode `string`: The two-letter language code of the customer
  * LastModifiedAt `string`: Date of the last update, the order got
  * OrderItems `array`: The list of items purchased like shirt, pant, toys etc
    * items [Billbee.Interfaces.BillbeeAPI.Model.OrderItem](#billbee.interfaces.billbeeapi.model.orderitem)
  * OrderNumber `string`: Order number of the order in the external system (marketplace)
  * PaidAmount `number`
  * PayedAt `string`: The date on which the order was paid
  * PaymentInstruction `string`: A textfield optionaly filled with a payment instruction text for printout on the invoice (z.B. Ebay Kauf auf Rechnung)
  * PaymentMethod `integer` (values: 1, 2, 3, 4, 6, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112): The payment method
  * PaymentReference `string`: A payment reference. Should not be used any more. Please use 'Payments' instead.
  * PaymentTransactionId `string`: The id of the payment transaction. For example the transaction id of PayPal payment. Should not be used any more. Please use 'Payments' instead.
  * Payments `array`
    * items [Billbee.Interfaces.BillbeeAPI.Models.OrderPayment](#billbee.interfaces.billbeeapi.models.orderpayment)
  * RebateDifference `number`
  * Seller [Billbee.Interfaces.BillbeeAPI.Model.OrderUser](#billbee.interfaces.billbeeapi.model.orderuser)
  * SellerComment `string`: An internal seller comment
  * ShipWeightKg `number`: The total weight of the shipment(s)
  * ShippedAt `string`: The date on which the order was shipped
  * ShippingAddress [Billbee.Interfaces.BillbeeAPI.Model.OrderAddressApiModel](#billbee.interfaces.billbeeapi.model.orderaddressapimodel)
  * ShippingCost `number`: The shipping cost
  * ShippingIds `array`: The shipments of the order
    * items [Billbee.Interfaces.BillbeeAPI.Model.Shipment](#billbee.interfaces.billbeeapi.model.shipment)
  * ShippingProfileId `string`: Internal Id for the shipping profile for that order
  * ShippingProfileName `string`: Display Name of Shipping profile, if available
  * ShippingProviderId `integer`: Internal Id for the used shipping provider
  * ShippingProviderName `string`: The Name for of used shipping provider
  * ShippingProviderProductId `integer`: Internal Id for the used shipping product
  * ShippingProviderProductName `string`: The Name of the used shipping product
  * ShippingServices `array`: Additional services for the shipment
    * items [Billbee.Interfaces.Shipping.ProductService](#billbee.interfaces.shipping.productservice)
  * State `integer` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16): The current state of the order
  * Tags `array`: The Tags of the order
    * items `string`
  * TaxRate1 `number`: The regular tax rate
  * TaxRate2 `number`: The reduced tax rate
  * TotalCost `number`: The total cost excluding shipping cost
  * UpdatedAt `string`: The date on which the order was last updated
  * VatId `string`: The customers vat id
  * VatMode `integer` (values: 0, 1, 2, 3, 4, 5): The vat mode of the order

### Billbee.Interfaces.BillbeeAPI.Model.OrderAddressApiModel
* Billbee.Interfaces.BillbeeAPI.Model.OrderAddressApiModel `object`
  * BillbeeId `integer`
  * City `string`
  * Company `string`
  * Country `string`
  * CountryISO2 `string`
  * Email `string`
  * FirstName `string`
  * HouseNumber `string`
  * LastName `string`
  * Line2 `string`
  * NameAddition `string`
  * Phone `string`
  * State `string`
  * Street `string`
  * Zip `string`

### Billbee.Interfaces.BillbeeAPI.Model.OrderItem
* Billbee.Interfaces.BillbeeAPI.Model.OrderItem `object`
  * Attributes `array`: A list of product attributes for this position
    * items [Billbee.Interfaces.BillbeeAPI.Model.OrderItemAttribute](#billbee.interfaces.billbeeapi.model.orderitemattribute)
  * BillbeeId `integer`: The billbee id of this item
  * Discount `number`: Sets the discount in percent
  * DontAdjustStock `boolean`: If true, the import of this order won't adjust the stock level at billbee.
  * GetPriceFromArticleIfAny `boolean`: If true, the price will be overwritten by the known article price in billbee if available
  * IsCoupon `boolean`: Determines if it is a coupon, which is interpreted as tax-free payment
  * Product [Billbee.Interfaces.BillbeeAPI.Model.SoldProduct](#billbee.interfaces.billbeeapi.model.soldproduct)
  * Quantity `number`: The sold quantity
  * SerialNumber `string`: Contains the used serial number
  * ShippingProfileId `string`: Determines if it is a coupon, which is interpreted as tax-free payment
  * TaxAmount `number`: The tax amount in the total price
  * TaxIndex `integer`: The tax index.
  * TotalPrice `number`: The total price (unit price * quantity)
  * TransactionId `string`: Id of the individual transaction. Only required by Ebay to detect aggregated orders
  * UnrebatedTotalPrice `number`: Is just used for the billbee api

### Billbee.Interfaces.BillbeeAPI.Model.OrderItemAttribute
* Billbee.Interfaces.BillbeeAPI.Model.OrderItemAttribute `object`
  * Id `string`: The internal id of this attribute
  * Name `string`: The attribute name. E.g. color
  * Price `number`
  * Value `string`: The attribute value. E.g. red

### Billbee.Interfaces.BillbeeAPI.Model.OrderUser
* Billbee.Interfaces.BillbeeAPI.Model.OrderUser `object`
  * BillbeeShopId `integer`: The Billbee internal id of the shop connection
  * BillbeeShopName `string`: The name of shop connection in Billbee
  * Email `string`: The email address of this customer
  * FirstName `string`: The first name of this customer
  * FullName `string`: The full name ("firstname lastname") of this customer
  * Id `string`: The Billbee internal id of this customer
  * LastName `string`: The last name of this customer
  * Nick `string`: The nick name (if available) from the original system
  * Platform `string`: The name of the platform from which this customer originated

### Billbee.Interfaces.BillbeeAPI.Model.ProductImage
* Billbee.Interfaces.BillbeeAPI.Model.ProductImage `object`
  * ExternalId `string`: The id of this image from the original system
  * IsDefaultImage `boolean`: True if the image is / should be the default image
  * Position `integer`: The order of this image
  * Url `string`: The url to the image

### Billbee.Interfaces.BillbeeAPI.Model.Shipment
* Billbee.Interfaces.BillbeeAPI.Model.Shipment `object`: Represents a single shipment.
  * BillbeeId `integer`: The billbee internal id of the shipment
  * Created `string`: The creation date
  * Shipper `string`: The name of the shipping provider
  * ShippingCarrier `integer`: The carrier used to ship the parcel with
  * ShippingId `string`: The id of this shipment
  * ShippingProviderId `integer`: The id of the used shipping provider
  * ShippingProviderProductId `integer`: The id of the used shipping provider product
  * TrackingUrl `string`: The url to track this shipment

### Billbee.Interfaces.BillbeeAPI.Model.ShipmentAddressApiModel
* Billbee.Interfaces.BillbeeAPI.Model.ShipmentAddressApiModel `object`
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

### Billbee.Interfaces.BillbeeAPI.Model.SoldProduct
* Billbee.Interfaces.BillbeeAPI.Model.SoldProduct `object`
  * BillbeeId `integer`: The Billbee internal id of the linked product
  * CountryOfOrigin `string`: The country where this article was made
  * EAN `string`: The EAN / GTIN of this product
  * Id `string`: The id of this product in the external system
  * Images `array`: The images of this product
    * items [Billbee.Interfaces.BillbeeAPI.Model.ProductImage](#billbee.interfaces.billbeeapi.model.productimage)
  * IsDigital `boolean`: True if the product is a digital good (download etc.), false if not
  * OldId `string`: This is for migration scenarios when the internal id of a product changes
  * PlatformData `string`: Optional platform specific Data as serialized JSON Object for the product
  * SKU `string`: The SKU of this product
  * SkuOrId `string`: The SKU of this product or the id if the SKU is empty
  * TARICCode `string`: The TARIC code
  * Title `string`: The name of this product
  * Weight `integer`: Weight of one item in gram

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
  * AutosubtractReservedAmount `boolean`: Automatically reduce the NewQuantity by the currently not fulfilled amount
  * BillbeeId `integer`: Optional the ID of the Billbee product to update
  * DeltaQuantity `number`: This parameter is currently ignored
  * ForceSendStockToShops `boolean`: If true, every sent stockchange is stored and transmitted to the connected shop, even if the value has not changed
  * NewQuantity `number`: The new absolute stock quantity for the product you want to set
  * OldQuantity `number`: This parameter is currently ignored
  * Reason `string`: Optional a reason text for the stock update
  * Sku `string`: The SKU of the product to update
  * StockId `integer`: Optional the stock id if the feature multi stock is activated

### Billbee.Interfaces.BillbeeAPI.Model.UpdateStockCodeApiModel
* Billbee.Interfaces.BillbeeAPI.Model.UpdateStockCodeApiModel `object`
  * BillbeeId `integer`
  * Sku `string`
  * StockCode `string`
  * StockId `integer`

### Billbee.Interfaces.BillbeeAPI.Model.UpdateStockCodeResponseData
* Billbee.Interfaces.BillbeeAPI.Model.UpdateStockCodeResponseData `object`

### Billbee.Interfaces.BillbeeAPI.Model.UpdateStockResponseData
* Billbee.Interfaces.BillbeeAPI.Model.UpdateStockResponseData `object`
  * CurrentStock `number`: The new value for current stock after the update
  * Message `string`: A human readable message that explains the result of the operation
  * SKU `string`: The SKU of the article to update the current stock
  * UnfulfilledAmount `number`: The value of the unfulfilled amount (reserved) of the article

### Billbee.Interfaces.BillbeeAPI.Models.LayoutTemplate
* Billbee.Interfaces.BillbeeAPI.Models.LayoutTemplate `object`
  * Id `integer`
  * Name `string`
  * Type `integer` (values: 0, 1, 2, 3, 4, 5)

### Billbee.Interfaces.BillbeeAPI.Models.OrderPayment
* Billbee.Interfaces.BillbeeAPI.Models.OrderPayment `object`
  * BillbeeId `integer`
  * Name `string`
  * PayDate `string`
  * PayValue `number`
  * PaymentType `integer`
  * Purpose `string`
  * SourceTechnology `string`
  * SourceText `string`
  * TransactionId `string`

### Billbee.Interfaces.Order.HistoryEntry
* Billbee.Interfaces.Order.HistoryEntry `object`
  * Created `string`
  * EmployeeName `string`
  * EventTypeName `string`
  * Text `string`
  * TypeId `integer`

### Billbee.Interfaces.Order.MultiLanguageString
* Billbee.Interfaces.Order.MultiLanguageString `object`
  * LanguageCode `string`
  * Text `string`

### Billbee.Interfaces.Shipping.ProductService
* Billbee.Interfaces.Shipping.ProductService `object`
  * CanBeConfigured `boolean`
  * DisplayName `string`
  * DisplayValue `string`
  * PossibleValueLists `array`
    * items [System.Collections.Generic.KeyValuePair[System.String,System.Collections.Generic.List[System.Collections.Generic.KeyValuePair[System.Int32,System.String]]]](#system.collections.generic.keyvaluepair[system.string,system.collections.generic.list[system.collections.generic.keyvaluepair[system.int32,system.string]]])
  * RequiresUserInput `boolean`
  * ServiceName `string`
  * typeName `string`

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
* Rechnungsdruck.WebApp.Controllers.Api.ApiAddShipmentToOrderModel `object`: Data of the shipment to be created
  * CarrierId `integer`: Optional the id of a shipping carrier that should be assigend to the shipment
  * Comment `string`: Optional a text stored with the shipment
  * OrderId `string`: Optional a differing order number of the shipment if available
  * ShippingId `string`: The id of the shipment (Sendungsnummer/trackingid)
  * ShippingProviderId `integer`: Optional the id of a shipping provider existing in the billbee account that should be assigned to the shipment
  * ShippingProviderProductId `integer`: Optional the id of a shipping provider product that should be assigend to the shipment

### Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiCustomFieldDefinitionModel]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiCustomFieldDefinitionModel]] `object`
  * Page `integer`
  * PageSize `integer`
  * TotalPages `integer`
  * TotalRows `integer`

### Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel]] `object`
  * Page `integer`
  * PageSize `integer`
  * TotalPages `integer`
  * TotalRows `integer`

### Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel]] `object`
  * Page `integer`
  * PageSize `integer`
  * TotalPages `integer`
  * TotalRows `integer`

### Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.CustomerApiModel]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.CustomerApiModel]] `object`
  * Page `integer`
  * PageSize `integer`
  * TotalPages `integer`
  * TotalRows `integer`

### Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.Order]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.Order]] `object`
  * Page `integer`
  * PageSize `integer`
  * TotalPages `integer`
  * TotalRows `integer`

### Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.Shipment]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.Shipment]] `object`
  * Page `integer`
  * PageSize `integer`
  * TotalPages `integer`
  * TotalRows `integer`

### Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Rechnungsdruck.WebApp.Controllers.Api.Order]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Rechnungsdruck.WebApp.Controllers.Api.Order]] `object`
  * Page `integer`
  * PageSize `integer`
  * TotalPages `integer`
  * TotalRows `integer`

### Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiCustomFieldDefinitionModel]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiCustomFieldDefinitionModel]] `object`
  * Data `array`
    * items [Billbee.Interfaces.BillbeeAPI.Model.ArticleApiCustomFieldDefinitionModel](#billbee.interfaces.billbeeapi.model.articleapicustomfielddefinitionmodel)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`
  * Paging [Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiCustomFieldDefinitionModel]]](#rechnungsdruck.webapp.controllers.api.apipagedresult.paginginformation[system.collections.generic.list[billbee.interfaces.billbeeapi.model.articleapicustomfielddefinitionmodel]])

### Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel]] `object`
  * Data `array`
    * items [Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel](#billbee.interfaces.billbeeapi.model.articleapimodel)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`
  * Paging [Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel]]](#rechnungsdruck.webapp.controllers.api.apipagedresult.paginginformation[system.collections.generic.list[billbee.interfaces.billbeeapi.model.articleapimodel]])

### Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel]] `object`
  * Data `array`
    * items [Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel](#billbee.interfaces.billbeeapi.model.customeraddressapimodel)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`
  * Paging [Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel]]](#rechnungsdruck.webapp.controllers.api.apipagedresult.paginginformation[system.collections.generic.list[billbee.interfaces.billbeeapi.model.customeraddressapimodel]])

### Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.CustomerApiModel]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.CustomerApiModel]] `object`
  * Data `array`
    * items [Billbee.Interfaces.BillbeeAPI.Model.CustomerApiModel](#billbee.interfaces.billbeeapi.model.customerapimodel)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`
  * Paging [Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.CustomerApiModel]]](#rechnungsdruck.webapp.controllers.api.apipagedresult.paginginformation[system.collections.generic.list[billbee.interfaces.billbeeapi.model.customerapimodel]])

### Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.Order]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.Order]] `object`
  * Data `array`
    * items [Billbee.Interfaces.BillbeeAPI.Model.Order](#billbee.interfaces.billbeeapi.model.order)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`
  * Paging [Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.Order]]](#rechnungsdruck.webapp.controllers.api.apipagedresult.paginginformation[system.collections.generic.list[billbee.interfaces.billbeeapi.model.order]])

### Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.Shipment]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.Shipment]] `object`
  * Data `array`
    * items [Billbee.Interfaces.BillbeeAPI.Model.Shipment](#billbee.interfaces.billbeeapi.model.shipment)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`
  * Paging [Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.Shipment]]](#rechnungsdruck.webapp.controllers.api.apipagedresult.paginginformation[system.collections.generic.list[billbee.interfaces.billbeeapi.model.shipment]])

### Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Rechnungsdruck.WebApp.Controllers.Api.Order]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult[System.Collections.Generic.List[Rechnungsdruck.WebApp.Controllers.Api.Order]] `object`
  * Data `array`
    * items [Rechnungsdruck.WebApp.Controllers.Api.Order](#rechnungsdruck.webapp.controllers.api.order)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`
  * Paging [Rechnungsdruck.WebApp.Controllers.Api.ApiPagedResult.PagingInformation[System.Collections.Generic.List[Rechnungsdruck.WebApp.Controllers.Api.Order]]](#rechnungsdruck.webapp.controllers.api.apipagedresult.paginginformation[system.collections.generic.list[rechnungsdruck.webapp.controllers.api.order]])

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiCustomFieldDefinitionModel]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiCustomFieldDefinitionModel] `object`
  * Data [Billbee.Interfaces.BillbeeAPI.Model.ArticleApiCustomFieldDefinitionModel](#billbee.interfaces.billbeeapi.model.articleapicustomfielddefinitionmodel)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel] `object`
  * Data [Billbee.Interfaces.BillbeeAPI.Model.ArticleApiModel](#billbee.interfaces.billbeeapi.model.articleapimodel)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.ArticleImageRelationApiModel]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.ArticleImageRelationApiModel] `object`
  * Data [Billbee.Interfaces.BillbeeAPI.Model.ArticleImageRelationApiModel](#billbee.interfaces.billbeeapi.model.articleimagerelationapimodel)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel] `object`
  * Data [Billbee.Interfaces.BillbeeAPI.Model.CustomerAddressApiModel](#billbee.interfaces.billbeeapi.model.customeraddressapimodel)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.CustomerApiModel]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.CustomerApiModel] `object`
  * Data [Billbee.Interfaces.BillbeeAPI.Model.CustomerApiModel](#billbee.interfaces.billbeeapi.model.customerapimodel)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.DeletedImagesModel]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.DeletedImagesModel] `object`
  * Data [Billbee.Interfaces.BillbeeAPI.Model.DeletedImagesModel](#billbee.interfaces.billbeeapi.model.deletedimagesmodel)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.GetReservedAmountResponseData]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.GetReservedAmountResponseData] `object`
  * Data [Billbee.Interfaces.BillbeeAPI.Model.GetReservedAmountResponseData](#billbee.interfaces.billbeeapi.model.getreservedamountresponsedata)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.Order]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.Order] `object`
  * Data [Billbee.Interfaces.BillbeeAPI.Model.Order](#billbee.interfaces.billbeeapi.model.order)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.UpdateStockCodeResponseData]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.UpdateStockCodeResponseData] `object`
  * Data [Billbee.Interfaces.BillbeeAPI.Model.UpdateStockCodeResponseData](#billbee.interfaces.billbeeapi.model.updatestockcoderesponsedata)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.UpdateStockResponseData]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Billbee.Interfaces.BillbeeAPI.Model.UpdateStockResponseData] `object`
  * Data [Billbee.Interfaces.BillbeeAPI.Model.UpdateStockResponseData](#billbee.interfaces.billbeeapi.model.updatestockresponsedata)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Rechnungsdruck.WebApp.Controllers.Api.SearchController.SearchResultsModel]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Rechnungsdruck.WebApp.Controllers.Api.SearchController.SearchResultsModel] `object`
  * Data [Rechnungsdruck.WebApp.Controllers.Api.SearchController.SearchResultsModel](#rechnungsdruck.webapp.controllers.api.searchcontroller.searchresultsmodel)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Rechnungsdruck.WebApp.Controllers.Api.ShipmentWithLabelResult]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[Rechnungsdruck.WebApp.Controllers.Api.ShipmentWithLabelResult] `object`
  * Data [Rechnungsdruck.WebApp.Controllers.Api.ShipmentWithLabelResult](#rechnungsdruck.webapp.controllers.api.shipmentwithlabelresult)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleImageRelationApiModel]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.ArticleImageRelationApiModel]] `object`
  * Data `array`
    * items [Billbee.Interfaces.BillbeeAPI.Model.ArticleImageRelationApiModel](#billbee.interfaces.billbeeapi.model.articleimagerelationapimodel)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.CloudStorageApiModel]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Model.CloudStorageApiModel]] `object`
  * Data `array`
    * items [Billbee.Interfaces.BillbeeAPI.Model.CloudStorageApiModel](#billbee.interfaces.billbeeapi.model.cloudstorageapimodel)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.ApiResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Models.LayoutTemplate]]
* Rechnungsdruck.WebApp.Controllers.Api.ApiResult[System.Collections.Generic.List[Billbee.Interfaces.BillbeeAPI.Models.LayoutTemplate]] `object`
  * Data `array`
    * items [Billbee.Interfaces.BillbeeAPI.Models.LayoutTemplate](#billbee.interfaces.billbeeapi.models.layouttemplate)
  * ErrorCode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26)
  * ErrorMessage `string`

### Rechnungsdruck.WebApp.Controllers.Api.AutomaticProvisioningController.CreateAccountContainer
* Rechnungsdruck.WebApp.Controllers.Api.AutomaticProvisioningController.CreateAccountContainer `object`: Data used to create a new Billbee user account
  * AcceptTerms `boolean`: Set to true, if the user has accepted the Billbee terms &amp; conditions
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

### Rechnungsdruck.WebApp.Controllers.Api.Order
* Rechnungsdruck.WebApp.Controllers.Api.Order `object`
  * CanCreateAutoInvoice `boolean`
  * CreatedAt `string`
  * ExternalId `string`
  * HasInvoice `boolean`
  * Id `integer`
  * InvoiceCreatedAt `string`
  * InvoiceDate `string`
  * InvoiceNumber `string`
  * OrderStateId `integer`
  * OrderStateText `string`
  * PaidAt `string`
  * ShippedAt `string`
  * ShopName `string`
  * TotalGross `number`

### Rechnungsdruck.WebApp.Controllers.Api.OrderApiController.ParseTextContainer
* Rechnungsdruck.WebApp.Controllers.Api.OrderApiController.ParseTextContainer `object`
  * IsHtml `boolean`: If true, the string will be handled as html.
  * Language `string`: The ISO 639-1 code of the target language. Using default if not set.
  * TextToParse `string`: The text to parse and replace the placeholders in.
  * Trim `boolean`: If true, then the placeholder values are trimmed after usage.

### Rechnungsdruck.WebApp.Controllers.Api.OrderApiController.SendMessageModel
* Rechnungsdruck.WebApp.Controllers.Api.OrderApiController.SendMessageModel `object`
  * AlternativeMail `string`
  * Body `array`
    * items [Billbee.Interfaces.Order.MultiLanguageString](#billbee.interfaces.order.multilanguagestring)
  * SendMode `integer` (values: 0, 1, 2, 3, 4)
  * Subject `array`
    * items [Billbee.Interfaces.Order.MultiLanguageString](#billbee.interfaces.order.multilanguagestring)

### Rechnungsdruck.WebApp.Controllers.Api.OrderApiController.TriggerEventContainer
* Rechnungsdruck.WebApp.Controllers.Api.OrderApiController.TriggerEventContainer `object`
  * DelayInMinutes `integer`: The delay in minutes until the rule is executed
  * Name `string`: Name of the event

### Rechnungsdruck.WebApp.Controllers.Api.OrderStateUpdate
* Rechnungsdruck.WebApp.Controllers.Api.OrderStateUpdate `object`: Specifies the parameters used to set the new state of an order
  * NewStateId `integer` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16): The new state to set

### Rechnungsdruck.WebApp.Controllers.Api.OrderTagCreate
* Rechnungsdruck.WebApp.Controllers.Api.OrderTagCreate `object`
  * Tags `array`
    * items `string`

### Rechnungsdruck.WebApp.Controllers.Api.SearchController.CustomerResult
* Rechnungsdruck.WebApp.Controllers.Api.SearchController.CustomerResult `object`
  * Addresses `string`
  * Id `integer`
  * Name `string`
  * Number `string`

### Rechnungsdruck.WebApp.Controllers.Api.SearchController.OrderResult
* Rechnungsdruck.WebApp.Controllers.Api.SearchController.OrderResult `object`
  * ArticleTexts `string`
  * BuyerName `string`
  * CustomerName `string`
  * ExternalReference `string`
  * Id `integer`
  * InvoiceNumber `string`

### Rechnungsdruck.WebApp.Controllers.Api.SearchController.ProductResult
* Rechnungsdruck.WebApp.Controllers.Api.SearchController.ProductResult `object`
  * Id `integer`
  * SKU `string`
  * ShortText `string`
  * Tags `string`

### Rechnungsdruck.WebApp.Controllers.Api.SearchController.SearchModel
* Rechnungsdruck.WebApp.Controllers.Api.SearchController.SearchModel `object`
  * SearchMode `integer` (values: 0, 1, 2, 3, 4)
  * Term `string`
  * Type `array`
    * items `string`

### Rechnungsdruck.WebApp.Controllers.Api.SearchController.SearchResultsModel
* Rechnungsdruck.WebApp.Controllers.Api.SearchController.SearchResultsModel `object`
  * Customers `array`
    * items [Rechnungsdruck.WebApp.Controllers.Api.SearchController.CustomerResult](#rechnungsdruck.webapp.controllers.api.searchcontroller.customerresult)
  * Orders `array`
    * items [Rechnungsdruck.WebApp.Controllers.Api.SearchController.OrderResult](#rechnungsdruck.webapp.controllers.api.searchcontroller.orderresult)
  * Products `array`
    * items [Rechnungsdruck.WebApp.Controllers.Api.SearchController.ProductResult](#rechnungsdruck.webapp.controllers.api.searchcontroller.productresult)

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

### System.Collections.Generic.KeyValuePair[System.Int32,System.String]
* System.Collections.Generic.KeyValuePair[System.Int32,System.String] `object`
  * key `integer`
  * value `string`

### System.Collections.Generic.KeyValuePair[System.String,System.Collections.Generic.List[System.Collections.Generic.KeyValuePair[System.Int32,System.String]]]
* System.Collections.Generic.KeyValuePair[System.String,System.Collections.Generic.List[System.Collections.Generic.KeyValuePair[System.Int32,System.String]]] `object`
  * key `string`
  * value `array`
    * items [System.Collections.Generic.KeyValuePair[System.Int32,System.String]](#system.collections.generic.keyvaluepair[system.int32,system.string])


