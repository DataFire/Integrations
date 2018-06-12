# @datafire/envoice_in

Client library for API v1.0.0

## Installation and Usage
```bash
npm install --save @datafire/envoice_in
```
```js
let envoice_in = require('@datafire/envoice_in').create({
  "x-auth-key": "",
  "x-auth-secret": ""
});

envoice_in.ClientApi_All({
  "x-auth-key": "",
  "x-auth-secret": ""
}).then(data => {
  console.log(data);
});
```

## Description

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/1d39bbcddaf694d81100)
<span style='margin-left: 0.5em;'>or</span>
<a href='https://documenter.getpostman.com/view/3559821/envoice-api/RW1XL1mf' class='openapi-button' _ngcontent-c6>View Postman docs</a>

# Quickstart

Visit [github](https://github.com/EmitKnowledge/Envoice) to view the quickstart tutorial.

<div class='postman-tutorial'>

# Tutorial for running the API in postman

Click on ""Run in Postman"" button
<br /><br />
![postman - tutorial - 1](/Assets/images/api/postman-tutorial/postman-tutorial-1.png)

 --- 

A new page will open.
Click the ""Postman for windows"" to run postman as a desktop app.
Make sure you have already [installed](https://www.getpostman.com/docs/postman/launching_postman/installation_and_updates) Postman.
<br /><br />
![postman - tutorial - 2](/Assets/images/api/postman-tutorial/postman-tutorial-2.png)

 --- 

In chrome an alert might show up to set a default app for opening postman links. Click on ""Open Postman"".
<br /><br />
![postman - tutorial - 3](/Assets/images/api/postman-tutorial/postman-tutorial-3.png)

 --- 

The OpenAPI specification will be imported in Postman as a new collection named ""Envoice api""
<br /><br />
![postman - tutorial - 4](/Assets/images/api/postman-tutorial/postman-tutorial-4.png)

 --- 

When testing be sure to check and modify the environment variables to suit your api key and secret. The domain is set to envoice's endpoint so you don't really need to change that.  
<sub>\*Eye button in top right corner </sub>
<br /><br /> 
![postman - tutorial - 5](/Assets/images/api/postman-tutorial/postman-tutorial-5.png)
<br /><br /> 
![postman - tutorial - 6](/Assets/images/api/postman-tutorial/postman-tutorial-6.png)

 --- 

You don't need to change the values of the header parameters, because they will be replaced automatically when you send a request with real values from the environment configured in the previous step.
<br /><br />
![postman - tutorial - 7](/Assets/images/api/postman-tutorial/postman-tutorial-7.png)

 --- 

Modify the example data to suit your needs and send a request.
<br /><br />
![postman - tutorial - 8](/Assets/images/api/postman-tutorial/postman-tutorial-8.png)
</div>

# Webhooks

Webhooks allow you to build or set up Envoice Apps which subscribe to invoice activities. 
When one of those events is triggered, we'll send a HTTP POST payload to the webhook's configured URL. 
Webhooks can be used to update an external invoice data storage.

In order to use webhooks visit [this link](/account/settings#api-tab) and add upto 10 webhook urls that will return status `200` in order to signal that the webhook is working.
All nonworking webhooks will be ignored after a certain period of time and several retry attempts.
If after several attempts the webhook starts to work, we will send you all activities, both past and present, in chronological order.

The payload of the webhook is in format:
```
{
    Signature: ""sha256 string"",
    Timestamp: ""YYYY-MM-DDTHH:mm:ss.FFFFFFFZ"",
    Activity: {
        Message: "string",
        Link: "share url",
        Type: int,        
        InvoiceNumber: "string",
        InvoiceId: int,        
        OrderNumber: "string",
        OrderId: int,
        Id: int,
        CreatedOn: "YYYY-MM-DDTHH:mm:ss.FFFFFFFZ"
    }
}
```            

## Actions

### ClientApi_All
Return all clients for the account


```js
envoice_in.ClientApi_All({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `array`
  * items [ClientDetailsApiModel](#clientdetailsapimodel)

### ClientApi_CanDelete
Check if the provided client can be deleted


```js
envoice_in.ClientApi_CanDelete({
  "id": 0,
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `boolean`

### ClientApi_Delete
Delete an existing client


```js
envoice_in.ClientApi_Delete({
  "deleteModel": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * deleteModel **required** [ClientDeleteApiModel](#clientdeleteapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### ClientApi_Details
Return client details. Activities and invoices included.


```js
envoice_in.ClientApi_Details({
  "id": 0,
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [ClientDetailsApiModel](#clientdetailsapimodel)

### ClientApi_New
Create a client


```js
envoice_in.ClientApi_New({
  "client": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * client **required** [ClientCreateApiModel](#clientcreateapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### ClientApi_Update
Update an existing client


```js
envoice_in.ClientApi_Update({
  "client": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * client **required** [ClientUpdateApiModel](#clientupdateapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
*Output schema unknown*

### GeneralApi_Countries
Return all of the platform supported countries


```js
envoice_in.GeneralApi_Countries({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `array`
  * items [CountryDetailsApiModel](#countrydetailsapimodel)

### GeneralApi_Currencies
Return all of the platform supported currencies


```js
envoice_in.GeneralApi_Currencies({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `array`
  * items [CurrencyDetailsApiModel](#currencydetailsapimodel)

### GeneralApi_UiLanguages
Return all of the platform supported UI languages


```js
envoice_in.GeneralApi_UiLanguages({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `array`
  * items [UILanguageDetailsApiModel](#uilanguagedetailsapimodel)

### InvoiceApi_All
Return all invoices for the account


```js
envoice_in.InvoiceApi_All({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * queryOptions.page `integer`
  * queryOptions.pageSize `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [ListResult[InvoiceDetailsApiModel]](#listresult[invoicedetailsapimodel])

### InvoiceApi_ChangeStatus
Change invoice status


```js
envoice_in.InvoiceApi_ChangeStatus({
  "statusModel": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * statusModel **required** [ChangeStatusApiModel](#changestatusapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `boolean`

### InvoiceApi_Delete
Delete an existing invoice


```js
envoice_in.InvoiceApi_Delete({
  "deleteModel": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * deleteModel **required** [InvoiceDeleteApiModel](#invoicedeleteapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### InvoiceApi_Details
Return invoice data


```js
envoice_in.InvoiceApi_Details({
  "id": 0,
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [InvoiceFullDetailsApiModel](#invoicefulldetailsapimodel)

### InvoiceApi_New
Create an invoice


```js
envoice_in.InvoiceApi_New({
  "invoice": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * invoice **required** [InvoiceCreateApiModel](#invoicecreateapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [InvoiceFullDetailsApiModel](#invoicefulldetailsapimodel)

### InvoiceApi_SendToAccountant
Send the provided invoice to the accountant


```js
envoice_in.InvoiceApi_SendToAccountant({
  "invoice": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * invoice **required** [SendInvoiceToAccountantApiModel](#sendinvoicetoaccountantapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### InvoiceApi_SendToClient
Send the provided invoice to the client


```js
envoice_in.InvoiceApi_SendToClient({
  "deliveryOptions": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * deliveryOptions **required** [SendInvoiceToClientApiModel](#sendinvoicetoclientapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### InvoiceApi_Status
Retrieve the status of the invoice


```js
envoice_in.InvoiceApi_Status({
  "id": 0,
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `string` (values: Draft, Paid, Unpaid, Overdue)

### InvoiceApi_Update
Update an existing invoice


```js
envoice_in.InvoiceApi_Update({
  "invoice": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * invoice **required** [InvoiceUpdateApiModel](#invoiceupdateapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [InvoiceFullDetailsApiModel](#invoicefulldetailsapimodel)

### InvoiceApi_Uri
Return the unique url to the client's invoice


```js
envoice_in.InvoiceApi_Uri({
  "id": 0,
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [InvoiceUriApiModel](#invoiceuriapimodel)

### OrderApi_All
Return all orders for the account


```js
envoice_in.OrderApi_All({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * queryOptions.page `integer`
  * queryOptions.pageSize `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [ListResult[OrderDetailsApiModel]](#listresult[orderdetailsapimodel])

### OrderApi_ChangeShippingDetails
Change order shipping details


```js
envoice_in.OrderApi_ChangeShippingDetails({
  "orderId": 0,
  "shippingDetails": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * orderId **required** `integer`
  * shippingDetails **required** [OrderShippingDetailsApiModel](#ordershippingdetailsapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
*Output schema unknown*

### OrderApi_ChangeStatus
Change order status


```js
envoice_in.OrderApi_ChangeStatus({
  "status": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * status **required** [ChangeOrderStatusApiModel](#changeorderstatusapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
*Output schema unknown*

### OrderApi_Delete
Delete an existing order


```js
envoice_in.OrderApi_Delete({
  "order": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * order **required** [OrderDeleteApiModel](#orderdeleteapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### OrderApi_Details
Return order details


```js
envoice_in.OrderApi_Details({
  "id": 0,
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [OrderFullDetailsApiModel](#orderfulldetailsapimodel)

### OrderApi_New
Create an order


```js
envoice_in.OrderApi_New({
  "order": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * order **required** [OrderCreateApiModel](#ordercreateapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### PaymentApi_Supported
Return all supported payment gateways (no currencies means all are supported)


```js
envoice_in.PaymentApi_Supported({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `array`
  * items [PaymentGatewayDetailsApiModel](#paymentgatewaydetailsapimodel)

### ProductApi_All
Return all products for the account


```js
envoice_in.ProductApi_All({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * queryOptions.page `integer`
  * queryOptions.pageSize `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [ListResult[ProductDetailsApiModel]](#listresult[productdetailsapimodel])

### ProductApi_Delete
Delete an existing product


```js
envoice_in.ProductApi_Delete({
  "product": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * product **required** [ProductDeleteApiModel](#productdeleteapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### ProductApi_Details
Return product details


```js
envoice_in.ProductApi_Details({
  "id": 0,
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [ProductFullDetailsApiModel](#productfulldetailsapimodel)

### ProductApi_New
Create a product


```js
envoice_in.ProductApi_New({
  "product": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * product **required** [ProductCreateApiModel](#productcreateapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### ProductApi_Update
Update an existing product


```js
envoice_in.ProductApi_Update({
  "product": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * product **required** [ProductUpdateApiModel](#productupdateapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
*Output schema unknown*

### TaxApi_All
Return all taxes for the account


```js
envoice_in.TaxApi_All({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `array`
  * items [TaxDetailsApiModel](#taxdetailsapimodel)

### TaxApi_Delete
Delete an existing tax


```js
envoice_in.TaxApi_Delete({
  "deleteModel": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * deleteModel **required** [TaxDeleteApiModel](#taxdeleteapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### TaxApi_New
Create a tax


```js
envoice_in.TaxApi_New({
  "tax": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * tax **required** [TaxCreateApiModel](#taxcreateapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### TaxApi_Update
Update an existing tax


```js
envoice_in.TaxApi_Update({
  "tax": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * tax **required** [TaxUpdateApiModel](#taxupdateapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
*Output schema unknown*

### WorkTypeApi_All
Return all work types for the account


```js
envoice_in.WorkTypeApi_All({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `array`
  * items [WorkTypeDetailsApiModel](#worktypedetailsapimodel)

### WorkTypeApi_Delete
Delete an existing work type


```js
envoice_in.WorkTypeApi_Delete({
  "deleteModel": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * deleteModel **required** [WorkTypeDeleteApiModel](#worktypedeleteapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### WorkTypeApi_Details
Return work type details


```js
envoice_in.WorkTypeApi_Details({
  "workTypeId": 0,
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * workTypeId **required** `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output [WorkTypeDetailsApiModel](#worktypedetailsapimodel)

### WorkTypeApi_New
Create a work type


```js
envoice_in.WorkTypeApi_New({
  "workType": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * workType **required** [WorkTypeCreateApiModel](#worktypecreateapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `integer`

### WorkTypeApi_Search
Return all work types for the account that match the query param


```js
envoice_in.WorkTypeApi_Search({
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * queryOptions.query `string`
  * queryOptions.orderBy `string`
  * queryOptions.order `string` (values: None, Asc, Desc)
  * queryOptions.page `integer`
  * queryOptions.pageSize `integer`
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
* output `array`
  * items [WorkTypeDetailsApiModel](#worktypedetailsapimodel)

### WorkTypeApi_Update
Update an existing work type


```js
envoice_in.WorkTypeApi_Update({
  "workType": {},
  "x-auth-key": "",
  "x-auth-secret": ""
}, context)
```

#### Input
* input `object`
  * workType **required** [WorkTypeUpdateApiModel](#worktypeupdateapimodel)
  * x-auth-key **required** `string`
  * x-auth-secret **required** `string`

#### Output
*Output schema unknown*



## Definitions

### ChangeOrderStatusApiModel
* ChangeOrderStatusApiModel `object`
  * Id `integer`: Order Id
  * Reason `string`: Reason for status change
  * Status `string` (values: PendingPayment, Processing, Shipped, Completed, OnHold, Cancelled, Refunded, Failed): New status of the order

### ChangeStatusApiModel
* ChangeStatusApiModel `object`
  * Id `integer`: Invoice Id
  * Status `string` (values: Draft, Paid, Unpaid, Overdue): New status of the invoice

### ClientCreateApiModel
* ClientCreateApiModel `object`
  * Address `string`: Client business address
  * CC `string`: Client additional email contact for CC
  * ClientCountryId `integer`: Indicates the country where the clients is from
  * ClientCurrencyId `integer`: Indicates the default system currency used by the user for the client
  * Email `string`: Client email
  * Name `string`: Name of the client
  * PhoneNumber `string`: Client phone numer
  * UiLanguageId `integer`: Hold a value of the language in which the invoice will be sent
  * Vat `string`: Client's VAT number

### ClientDeleteApiModel
* ClientDeleteApiModel `object`
  * Id `integer`: Id of client to be deleted

### ClientDetailsApiModel
* ClientDetailsApiModel `object`
  * Address `string`: Client business address
  * CC `string`: Client additional email contact for CC
  * ClientCountryId `integer`: Indicates the country where the clients is from
  * ClientCurrencyId `integer`: Indicates the default system currency used by the user for the client
  * CreatedOn `string`: Date of creation
  * Email `string`: Client email
  * Id `integer`: Entity id
  * Name `string`: Name of the client
  * PhoneNumber `string`: Client phone numer
  * UiLanguageId `integer`: Hold a value of the language in which the invoice will be sent
  * Vat `string`: Client's VAT number

### ClientUpdateApiModel
* ClientUpdateApiModel `object`
  * Address `string`: Client business address
  * CC `string`: Client additional email contact for CC
  * ClientCountryId `integer`: Indicates the country where the clients is from
  * ClientCurrencyId `integer`: Indicates the default system currency used by the user for the client
  * Email `string`: Client email
  * Id `integer`: Entity id
  * Name `string`: Name of the client
  * PhoneNumber `string`: Client phone numer
  * UiLanguageId `integer`: Hold a value of the language in which the invoice will be sent
  * Vat `string`: Client's VAT number

### CountryDetailsApiModel
* CountryDetailsApiModel `object`
  * Id `integer`: Entity id
  * Name `string`: Name of the country
  * Value `string`: Country short code

### CurrencyApiModel
* CurrencyApiModel `object`
  * Name `string`: Name of the currency
  * Value `string`: Currency short code

### CurrencyDetailsApiModel
* CurrencyDetailsApiModel `object`
  * Code `string`: Currency short numeric code
  * Id `integer`: Entity id
  * Name `string`: Name of the country
  * Symbol `string`: Currency symbol
  * Value `string`: Currency short alpha code

### IErrorInfo
* IErrorInfo `object`
  * Code `string`
  * FaultMessage `string`
  * Group `string`
  * UserVisibleMessage `string`

### InvoiceActivityApiModel
* InvoiceActivityApiModel `object`
  * Id `integer`: Id of invoice activity
  * InvoiceNumber `string`: Indicates to which invoice this activity refers to
  * Link `string`: Url which point out to a certain activity action. Ex: Click to view the payment
  * Message `string`: Message associated with the activity
  * Type `string` (values: Created, Draft, Cloned, SentViaEmail, SentViaSms, SentReminderViaEmail, SentReminderViaSms, Opened, Viewed, Rejected, Updated, Paid, Unpaid, Overdue, NewManualPayment, NewPaymentWithPaypal, NewPaymentWithStripe, NewPaymentWithPayoneer, SentToAccountant, DownloadedAsPdf, MarkAsPaidByTheClient, OpenedAttachment, NewPaymentWithSquare, NewPaymentWithKlikAndPay, NewPaymentWithRazorpay, NewPaymentWithWepay, NewPaymentWithHalkbank, ChangeStatus, OrderUpdated, OrderCreated, NewPaymentWithTwoCheckout): Type of the activity

### InvoiceAttachmentApiModel
* InvoiceAttachmentApiModel `object`
  * Id `integer`: Id of invoice attachment
  * Link `string`: Link to the file
  * ObfuscatedFileName `string`: Hashed file name to avoid url wildguessing
  * OriginalFileName `string`: Name of the file
  * Size `integer`: File size number in bytes
  * Type `string` (values: External, Uploaded): Type of the link (Attached or external)

### InvoiceCreateApiModel
* InvoiceCreateApiModel `object`
  * Attachments `array`: List of invoice attachments
    * items [InvoiceCreateAttachmentApiModel](#invoicecreateattachmentapimodel)
  * ClientId `integer`: The client to whom this invoice is assigned
  * ClonedFromId `integer`: Indicate from which invoice this invoice has been cloned from
  * CurrencyId `integer`: Id of the currency for the invoice amounts
  * Duedate `string`: Indicates when the invoice will be proclamed as due
  * IssuedOn `string`: Indicates when the invoice was issued
  * Items `array`: List of invoice items
    * items [InvoiceCreateItemApiModel](#invoicecreateitemapimodel)
  * Notes `string`: Internal note regarding the invoice
  * Number `string`: Unique invoice number
  * PaymentGateways `array`: List of enabled payment gateways for this invoice
    * items [InvoiceGatewayApiModel](#invoicegatewayapimodel)
  * PoNumber `string`: Unique number generated by the buyer
  * RecurringProfile [InvoiceRecurringApiModel](#invoicerecurringapimodel)
  * RecurringProfileId `integer`: Hold the id of the recurring profile
  * Status `string` (values: Draft, Paid, Unpaid, Overdue): Indicate the status of the invoice (paid/unpaid/overdue)
  * Terms `string`: Terms of agreement

### InvoiceCreateAttachmentApiModel
* InvoiceCreateAttachmentApiModel `object`
  * Link `string`: Link to the file
  * ObfuscatedFileName `string`: Hashed file name to avoid url wildguessing
  * OriginalFileName `string`: Name of the file
  * Size `integer`: File size number in bytes
  * Type `string` (values: External, Uploaded): Type of the link (Attached or external)

### InvoiceCreateItemApiModel
* InvoiceCreateItemApiModel `object`
  * Cost `number`: Amount per unit
  * Description `string`: Additional description attached to the invoice item
  * DiscountPercentage `number`: Discount percentage for the overall amount
  * Quantity `number`: Quantity in total used for the work type
  * TaxId `integer`: Tax applied on the item
  * TaxPercentage `number`: Task percentage. Ex: 18%
  * WorkTypeId `integer`: Work type (Name of the service)

### InvoiceDeleteApiModel
* InvoiceDeleteApiModel `object`
  * Id `integer`: Id of invoice to be deleted

### InvoiceDetailsApiModel
* InvoiceDetailsApiModel `object`
  * AccessToken `string`: Security access token used for accessing the invoice anonymously
  * Client [ClientDetailsApiModel](#clientdetailsapimodel)
  * ClonedFromId `integer`: Indicate from which invoice this invoice has been cloned from
  * Currency [CurrencyDetailsApiModel](#currencydetailsapimodel)
  * DiscountAmount `number`: Amount that goes as a discount
  * Duedate `string`: Indicates when the invoice will be proclamed as due
  * EnablePartialPayments `boolean`: Indicate that the invoice allows the user to pay the invoice partially
  * Id `integer`: Invoice id
  * IssuedOn `string`: Indicates when the invoice was issued
  * Notes `string`: Internal note regarding the invoice
  * Number `string`: Unique invoice number
  * PoNumber `string`: Unique number generated by the buyer
  * RecurringProfile [InvoiceRecurringApiModel](#invoicerecurringapimodel)
  * RecurringProfileId `integer`: Hold the id of the recurring profile
  * Status `string` (values: Draft, Paid, Unpaid, Overdue): Indicate the status of the invoice (paid/unpaid/overdue)
  * SubTotalAmount `number`: Total amount of the invoice without tax
  * TaxAmount `number`: Amount that goes to the tax
  * Terms `string`: Terms of agreement
  * TotalAmount `number`: Total amount of the invoice with tax

### InvoiceFullDetailsApiModel
* InvoiceFullDetailsApiModel `object`
  * AccessToken `string`: Security access token used for accessing the invoice anonymously
  * Activities `array`: List of invoice activities. Invoice audit log
    * items [InvoiceActivityApiModel](#invoiceactivityapimodel)
  * Attachments `array`: List of invoice attachments
    * items [InvoiceAttachmentApiModel](#invoiceattachmentapimodel)
  * Client [ClientDetailsApiModel](#clientdetailsapimodel)
  * ClonedFromId `integer`: Indicate from which invoice this invoice has been cloned from
  * Currency [CurrencyDetailsApiModel](#currencydetailsapimodel)
  * DiscountAmount `number`: Amount that goes as a discount
  * Duedate `string`: Indicates when the invoice will be proclamed as due
  * EnablePartialPayments `boolean`: Indicate that the invoice allows the user to pay the invoice partially
  * Id `integer`: Invoice id
  * IssuedOn `string`: Indicates when the invoice was issued
  * Items `array`: List of invoice items
    * items [InvoiceItemApiModel](#invoiceitemapimodel)
  * Notes `string`: Internal note regarding the invoice
  * Number `string`: Unique invoice number
  * PaymentGateways `array`: List of enabled payment gateways for this invoice
    * items [InvoiceGatewayApiModel](#invoicegatewayapimodel)
  * Payments `array`: List of invoice payments
    * items [InvoicePaymentApiModel](#invoicepaymentapimodel)
  * PoNumber `string`: Unique number generated by the buyer
  * RecurringProfile [InvoiceRecurringApiModel](#invoicerecurringapimodel)
  * RecurringProfileId `integer`: Hold the id of the recurring profile
  * Status `string` (values: Draft, Paid, Unpaid, Overdue): Indicate the status of the invoice (paid/unpaid/overdue)
  * SubTotalAmount `number`: Total amount of the invoice without tax
  * TaxAmount `number`: Amount that goes to the tax
  * Terms `string`: Terms of agreement
  * TotalAmount `number`: Total amount of the invoice with tax

### InvoiceGatewayApiModel
* InvoiceGatewayApiModel `object`
  * Name `string`: Name of the payment gateway

### InvoiceItemApiModel
* InvoiceItemApiModel `object`
  * Cost `number`: Amount per unit
  * Description `string`: Additional description attached to the invoice item
  * DiscountAmount `number`: Amount that goes as a discount
  * DiscountPercentage `number`: Discount percentage for the overall amount
  * Id `integer`: Id of invoice item
  * Quantity `number`: Quantity in total used for the work type
  * SubTotalAmount `number`: Sub-Total amount of the invoice item (Amount without tax)
  * TaxAmount `number`: Amount that goes to the tax
  * TaxId `integer`: Tax applied on the item
  * TaxPercentage `number`: Task percentage. Ex: 18%
  * TotalAmount `number`: Total amount of the invoice item
  * WorkTypeId `integer`: Work type (Name of the service)

### InvoicePaymentApiModel
* InvoicePaymentApiModel `object`
  * Amount `number`: Total amount of the payment
  * Id `integer`: Id of invoice payment
  * IsAutomatic `boolean`: Indicate if the payment is automatic or manual
  * Note `string`: Internal payment note
  * PaidOn `string`: When the payment was done by the client
  * ReferenceId `string`: Id of the payment
  * Type `string` (values: Other, Paypal, Stripe, Payoneer, Bank, Cash, Cheque, Ach, Sepa, Square, KlikAndPay, Razorpay, Wepay, Halkbank, TwoCheckout): Type of payment

### InvoiceRecurringApiModel
* InvoiceRecurringApiModel `object`: Definition of invoice recurring profile
  * DayOfMonth `integer`: Day of month when the recurrance should happen
  * DayOfWeek `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday): Day when the recurrance should happen
  * DueDateInDays `integer`: Total number of days for the client to pay the invoice after issuing it
  * EndOfRecurrance `string`: Indcate the date when the recurrance should stop
  * Month `integer`: Month when the recurrance should happen
  * RecurrancePattern `string` (values: Daily, Weekly, Monthly, Yearly): How often the recurrance occurs
  * RecurranceValue `integer`: Recurring every [value] RecurrancePattern
  * StartOfRecurrance `string`: Indcate the date when the recurrance has started
  * Status `string` (values: Pending, Active, Cancelled, Finished): The status of the recurrance
  * Title `string`: Title of the recurring profile. 

### InvoiceUpdateApiModel
* InvoiceUpdateApiModel `object`
  * Attachments `array`: List of invoice attachments
    * items [InvoiceUpdateAttachmentApiModel](#invoiceupdateattachmentapimodel)
  * ClientId `integer`: The client to whom this invoice is assigned
  * ClonedFromId `integer`: Indicate from which invoice this invoice has been cloned from
  * CurrencyId `integer`: Id of the currency for the invoice amounts
  * Duedate `string`: Indicates when the invoice will be proclamed as due
  * Id `integer`: Invoice id
  * IssuedOn `string`: Indicates when the invoice was issued
  * Items `array`: List of invoice items
    * items [InvoiceUpdateItemApiModel](#invoiceupdateitemapimodel)
  * Notes `string`: Internal note regarding the invoice
  * Number `string`: Unique invoice number
  * PaymentGateways `array`: List of enabled payment gateways for this invoice
    * items [InvoiceGatewayApiModel](#invoicegatewayapimodel)
  * PoNumber `string`: Unique number generated by the buyer
  * RecurringProfile [InvoiceRecurringApiModel](#invoicerecurringapimodel)
  * RecurringProfileId `integer`: Hold the id of the recurring profile
  * Status `string` (values: Draft, Paid, Unpaid, Overdue): Indicate the status of the invoice (paid/unpaid/overdue)
  * Terms `string`: Terms of agreement

### InvoiceUpdateAttachmentApiModel
* InvoiceUpdateAttachmentApiModel `object`
  * Id `integer`: Id of invoice attachment
  * Link `string`: Link to the file
  * ObfuscatedFileName `string`: Hashed file name to avoid url wildguessing
  * OriginalFileName `string`: Name of the file
  * Size `integer`: File size number in bytes
  * Type `string` (values: External, Uploaded): Type of the link (Attached or external)

### InvoiceUpdateItemApiModel
* InvoiceUpdateItemApiModel `object`
  * Cost `number`: Amount per unit
  * Description `string`: Additional description attached to the invoice item
  * DiscountPercentage `number`: Discount percentage for the overall amount
  * Id `integer`: Id of invoice item
  * Quantity `number`: Quantity in total used for the work type
  * TaxId `integer`: Tax applied on the item
  * TaxPercentage `number`: Task percentage. Ex: 18%
  * WorkTypeId `integer`: Work type (Name of the service)

### InvoiceUriApiModel
* InvoiceUriApiModel `object`
  * Link `string`: Unique link to the invoice

### ListResult[InvoiceDetailsApiModel]
* ListResult[InvoiceDetailsApiModel] `object`
  * Count `integer`
  * ErrorMessages `array`
    * items [IErrorInfo](#ierrorinfo)
  * IsFaulted `boolean`
  * Result `array`
    * items [InvoiceDetailsApiModel](#invoicedetailsapimodel)
  * TotalCount `integer`

### ListResult[OrderDetailsApiModel]
* ListResult[OrderDetailsApiModel] `object`
  * Count `integer`
  * ErrorMessages `array`
    * items [IErrorInfo](#ierrorinfo)
  * IsFaulted `boolean`
  * Result `array`
    * items [OrderDetailsApiModel](#orderdetailsapimodel)
  * TotalCount `integer`

### ListResult[ProductDetailsApiModel]
* ListResult[ProductDetailsApiModel] `object`
  * Count `integer`
  * ErrorMessages `array`
    * items [IErrorInfo](#ierrorinfo)
  * IsFaulted `boolean`
  * Result `array`
    * items [ProductDetailsApiModel](#productdetailsapimodel)
  * TotalCount `integer`

### OrderAttachmentApiModel
* OrderAttachmentApiModel `object`
  * Link `string`: Link to the file
  * ObfuscatedFileName `string`: Hashed file name to avoid url wildguessing
  * OriginalFileName `string`: Name of the file
  * Size `integer`: File size number in bytes
  * Type `string` (values: External, Uploaded): Type of the link (Attached or external)

### OrderBillingDetailsApiModel
* OrderBillingDetailsApiModel `object`
  * Address `string`: Client street and number
  * CountryId `integer`: Client country id
  * Email `string`: Client email
  * Name `string`: Client name
  * PhoneNumber `string`: Client phone number

### OrderCreateApiModel
* OrderCreateApiModel `object`
  * AfterPaymentDescription `string`: After payment description
  * Attachments `array`: List of Order attachments
    * items [OrderAttachmentApiModel](#orderattachmentapimodel)
  * CouponCode `string`: Coupon to apply in order to get the discount
  * CurrencyId `integer`: Foreign key Currency
  * Description `string`: Product description
  * DiscountAmount `number`: Discount amount
  * Items `array`: List of Order items
    * items [OrderItemApiModel](#orderitemapimodel)
  * Name `string`: Product alias
  * Note `string`: Customer note to seller
  * OrderBillingDetails [OrderBillingDetailsApiModel](#orderbillingdetailsapimodel)
  * OrderShippingDetails [OrderShippingDetailsApiModel](#ordershippingdetailsapimodel)
  * ProductId `integer`: Product id
  * Referral `string`: Represent the referral for this order
  * ShippingAmount `number`: Cost for shipping the product
  * ShippingDescription `string`: Client instructions for shipping
  * Status `string` (values: PendingPayment, Processing, Shipped, Completed, OnHold, Cancelled, Refunded, Failed): Order status
  * SubTotalAmount `number`: Sub total amount
  * TaxAmount `number`: Tax amount
  * TotalAmount `number`: Total amount
  * WhatHappensNextDescription `string`: What happens next description

### OrderDeleteApiModel
* OrderDeleteApiModel `object`
  * Id `integer`: Id of order to be deleted

### OrderDetailsApiModel
* OrderDetailsApiModel `object`
  * AccessToken `string`: Product short link
  * AfterPaymentDescription `string`: After payment description
  * CouponCode `string`: Coupon to apply in order to get the discount
  * Currency [CurrencyDetailsApiModel](#currencydetailsapimodel)
  * CurrencyId `integer`: Foreign key Currency
  * Description `string`: Product description
  * DiscountAmount `number`: Discount amount
  * Id `integer`: Order id
  * Name `string`: Product alias
  * Note `string`: Customer note to seller
  * OrderBillingDetails [OrderBillingDetailsApiModel](#orderbillingdetailsapimodel)
  * OrderShippingDetails [OrderShippingDetailsApiModel](#ordershippingdetailsapimodel)
  * ProductId `integer`: Product id
  * Referral `string`: Represent the referral for this order
  * ShippingAmount `number`: Cost for shipping the product
  * ShippingDescription `string`: Client instructions for shipping
  * Status `string` (values: PendingPayment, Processing, Shipped, Completed, OnHold, Cancelled, Refunded, Failed): Order status
  * SubTotalAmount `number`: Sub total amount
  * TaxAmount `number`: Tax amount
  * TotalAmount `number`: Total amount
  * TotalWithShipping `number`: Total amount with shipping
  * WhatHappensNextDescription `string`: What happens next description

### OrderFullDetailsApiModel
* OrderFullDetailsApiModel `object`
  * AccessToken `string`: Product short link
  * AfterPaymentDescription `string`: After payment description
  * Attachments `array`: List of Order attachments
    * items [OrderAttachmentApiModel](#orderattachmentapimodel)
  * CouponCode `string`: Coupon to apply in order to get the discount
  * Currency [CurrencyDetailsApiModel](#currencydetailsapimodel)
  * CurrencyId `integer`: Foreign key Currency
  * Description `string`: Product description
  * DiscountAmount `number`: Discount amount
  * Id `integer`: Order id
  * Items `array`: List of Order items
    * items [OrderItemApiModel](#orderitemapimodel)
  * Name `string`: Product alias
  * Note `string`: Customer note to seller
  * OrderBillingDetails [OrderBillingDetailsApiModel](#orderbillingdetailsapimodel)
  * OrderShippingDetails [OrderShippingDetailsApiModel](#ordershippingdetailsapimodel)
  * ProductId `integer`: Product id
  * Referral `string`: Represent the referral for this order
  * ShippingAmount `number`: Cost for shipping the product
  * ShippingDescription `string`: Client instructions for shipping
  * Status `string` (values: PendingPayment, Processing, Shipped, Completed, OnHold, Cancelled, Refunded, Failed): Order status
  * SubTotalAmount `number`: Sub total amount
  * TaxAmount `number`: Tax amount
  * TotalAmount `number`: Total amount
  * TotalWithShipping `number`: Total amount with shipping
  * WhatHappensNextDescription `string`: What happens next description

### OrderItemApiModel
* OrderItemApiModel `object`
  * Cost `number`: Work item cost
  * Description `string`: General description
  * ProductItemId `integer`: Foreign key product item id
  * Quantity `number`: Work item quantity
  * ReferenceId `string`: Order SKU
  * SubTotalAmount `number`: Subtotal amount of product
  * TaxAmount `number`: Tax amount
  * TaxId `integer`: Foreign key Tax id
  * TaxPercentage `number`: Tax percentage
  * TotalAmount `number`: Total amount of product
  * WorkTypeId `integer`: Foreign key work type id

### OrderShippingDetailsApiModel
* OrderShippingDetailsApiModel `object`
  * Address `string`: Client street and number
  * CountryId `integer`: Client country id
  * Email `string`: Client email
  * Name `string`: Client name
  * PhoneNumber `string`: Client phone number

### PaymentGatewayDetailsApiModel
* PaymentGatewayDetailsApiModel `object`
  * Name `string`: Name of the payment gateway
  * SupportedCurrencies `array`: List of supported currencies.
    * items [CurrencyApiModel](#currencyapimodel)

### ProductAttachmentApiModel
* ProductAttachmentApiModel `object`
  * Id `integer`: Product attachment id
  * Link `string`: Link to the file
  * ObfuscatedFileName `string`: Hashed file name to avoid url wildguessing
  * OriginalFileName `string`: Name of the file
  * Size `integer`: File size number in bytes
  * Type `string` (values: External, Uploaded): Type of the link (Attached or external)

### ProductCouponApiModel
* ProductCouponApiModel `object`
  * Code `string`: Coupon to apply in order to get the discount
  * DiscountAmount `number`: Discount amount
  * DiscountPercentage `number`: Discount percentage
  * Id `integer`: Product coupon id
  * ValidUntil `string`: Coupon expiration date

### ProductCreateApiModel
* ProductCreateApiModel `object`
  * AfterPaymentDescription `string`: After payment description
  * Attachments `array`: List of product attachments
    * items [ProductAttachmentApiModel](#productattachmentapimodel)
  * Coupons `array`: List of product coupons
    * items [ProductCouponApiModel](#productcouponapimodel)
  * CurrencyId `integer`: Foreign key Currency
  * Description `string`: Product description
  * Discounts `array`: List of product discounts
    * items [ProductDiscountApiModel](#productdiscountapimodel)
  * Items `array`: List of product items
    * items [ProductItemApiModel](#productitemapimodel)
  * Name `string`: Product alias
  * PaymentGateways `array`: List of enabled payment gateways for this product
    * items [ProductGatewayApiModel](#productgatewayapimodel)
  * ShippingAmount `number`: Cost for shipping the product
  * ShippingDescription `string`: Client instructions for shipping
  * Status `string` (values: Active, NotAvailable, Inactive): Product availability status
  * WhatHappensNextDescription `string`: What happens next description

### ProductDeleteApiModel
* ProductDeleteApiModel `object`
  * Id `integer`: Id of product to be deleted

### ProductDetailsApiModel
* ProductDetailsApiModel `object`
  * AccessToken `string`: Product short link
  * AfterPaymentDescription `string`: After payment description
  * Currency [CurrencyDetailsApiModel](#currencydetailsapimodel)
  * CurrencyId `integer`: Foreign key Currency
  * Description `string`: Product description
  * Id `integer`: Product id
  * Name `string`: Product alias
  * ShippingAmount `number`: Cost for shipping the product
  * ShippingDescription `string`: Client instructions for shipping
  * Status `string` (values: Active, NotAvailable, Inactive): Product availability status
  * SubTotalAmount `number`: Subtotal amount of product
  * TotalAmount `number`: Total amount of product
  * TotalWithShipping `number`: Total amount of product with shipping
  * WhatHappensNextDescription `string`: What happens next description

### ProductDiscountApiModel
* ProductDiscountApiModel `object`
  * DiscountAmount `number`: Discount amount
  * DiscountPercentage `number`: Discount percentage
  * Id `integer`: Product discount id
  * Name `string`: Name
  * ValidFrom `string`: Discount start date
  * ValidTo `string`: Discount expiration date

### ProductFullDetailsApiModel
* ProductFullDetailsApiModel `object`
  * AccessToken `string`: Product short link
  * AfterPaymentDescription `string`: After payment description
  * Attachments `array`: List of product attachments
    * items [ProductAttachmentApiModel](#productattachmentapimodel)
  * Coupons `array`: List of product coupons
    * items [ProductCouponApiModel](#productcouponapimodel)
  * Currency [CurrencyDetailsApiModel](#currencydetailsapimodel)
  * CurrencyId `integer`: Foreign key Currency
  * Description `string`: Product description
  * Discounts `array`: List of product discounts
    * items [ProductDiscountApiModel](#productdiscountapimodel)
  * Id `integer`: Product id
  * Items `array`: List of product items
    * items [ProductItemApiModel](#productitemapimodel)
  * Name `string`: Product alias
  * PaymentGateways `array`: List of enabled payment gateways for this product
    * items [ProductGatewayApiModel](#productgatewayapimodel)
  * ShippingAmount `number`: Cost for shipping the product
  * ShippingDescription `string`: Client instructions for shipping
  * Status `string` (values: Active, NotAvailable, Inactive): Product availability status
  * SubTotalAmount `number`: Subtotal amount of product
  * TotalAmount `number`: Total amount of product
  * TotalWithShipping `number`: Total amount of product with shipping
  * WhatHappensNextDescription `string`: What happens next description

### ProductGatewayApiModel
* ProductGatewayApiModel `object`
  * Name `string`: Payment gateway name

### ProductItemApiModel
* ProductItemApiModel `object`
  * Cost `number`: Work item cost
  * Description `string`: General description
  * Id `integer`: Product item id
  * MinimumQuantity `number`: Minimum required quantity in order to buy a work item
  * ReferenceId `string`: Product SKU
  * SubTotalAmount `number`: Subtotal amount of product
  * TaxAmount `number`: Tax amount
  * TaxId `integer`: Foreign key Tax id
  * TaxPercentage `number`: Tax percentage
  * TotalAmount `number`: Total amount of product
  * WorkTypeId `integer`: Foreign key work type id

### ProductUpdateApiModel
* ProductUpdateApiModel `object`
  * AfterPaymentDescription `string`: After payment description
  * Attachments `array`: List of product attachments
    * items [ProductAttachmentApiModel](#productattachmentapimodel)
  * Coupons `array`: List of product coupons
    * items [ProductCouponApiModel](#productcouponapimodel)
  * CurrencyId `integer`: Foreign key Currency
  * Description `string`: Product description
  * Discounts `array`: List of product discounts
    * items [ProductDiscountApiModel](#productdiscountapimodel)
  * Id `integer`: Product id
  * Items `array`: List of product items
    * items [ProductItemApiModel](#productitemapimodel)
  * Name `string`: Product alias
  * PaymentGateways `array`: List of enabled payment gateways for this product
    * items [ProductGatewayApiModel](#productgatewayapimodel)
  * ShippingAmount `number`: Cost for shipping the product
  * ShippingDescription `string`: Client instructions for shipping
  * Status `string` (values: Active, NotAvailable, Inactive): Product availability status
  * WhatHappensNextDescription `string`: What happens next description

### QueryOptions
* QueryOptions `object`
  * Page `integer`
  * PageSize `integer`

### SearchRequest
* SearchRequest `object`
  * Order `string` (values: None, Asc, Desc)
  * OrderBy `string`
  * Page `integer`
  * PageSize `integer`
  * Query `string`

### SendInvoiceToAccountantApiModel
* SendInvoiceToAccountantApiModel `object`
  * Id `integer`: Id of the invoice

### SendInvoiceToClientApiModel
* SendInvoiceToClientApiModel `object`
  * Id `integer`: Id of the invoice
  * InvoiceId `integer`: Id of the invoice
  * Message `string`: Message to be embedded in the email

### TaxCreateApiModel
* TaxCreateApiModel `object`
  * Name `string`: Name of the task
  * Percentage `number`: Task percentage. Ex: 18%

### TaxDeleteApiModel
* TaxDeleteApiModel `object`
  * Id `integer`: Id of tax to be deleted

### TaxDetailsApiModel
* TaxDetailsApiModel `object`
  * CreatedOn `string`: Date of creation
  * Id `integer`: Entity id
  * Name `string`: Name of the task
  * Percentage `number`: Task percentage. Ex: 18%

### TaxUpdateApiModel
* TaxUpdateApiModel `object`
  * Id `integer`: Entity id
  * Name `string`: Name of the task
  * Percentage `number`: Task percentage. Ex: 18%

### UILanguageDetailsApiModel
* UILanguageDetailsApiModel `object`
  * Id `integer`: Entity id
  * Name `string`: Name of the country
  * UiCulture `string`: Ui culture options

### WorkTypeCreateApiModel
* WorkTypeCreateApiModel `object`
  * Title `string`: Indicates the title of of the work type (Logo design, development...)

### WorkTypeDeleteApiModel
* WorkTypeDeleteApiModel `object`
  * Id `integer`: Id of work type to be deleted

### WorkTypeDetailsApiModel
* WorkTypeDetailsApiModel `object`
  * CreatedOn `string`: Date of creation
  * Id `integer`: Entity id
  * Title `string`: Indicates the title of of the work type (Logo design, development...)

### WorkTypeUpdateApiModel
* WorkTypeUpdateApiModel `object`
  * Id `integer`: Entity id
  * Title `string`: Indicates the title of of the work type (Logo design, development...)


