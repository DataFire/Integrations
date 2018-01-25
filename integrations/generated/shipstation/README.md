# @datafire/shipstation

Client library for ShipStation Developer Portal

## Installation and Usage
```bash
npm install --save @datafire/shipstation
```
```js
let shipstation = require('@datafire/shipstation').create();

shipstation.accounts.listtags.get(null).then(data => {
  console.log(data);
});
```

## Description

# Integrating with ShipStation

ShipStation strives to streamline shipping for online sellers, no matter where they sell their products online. We are continuously adding new marketplaces, shopping carts, and integration tools, because we know the e-commerce space is growing. 
As a result, we’ve worked hard to provide developer resources to build custom integrations with ShipStation.  If you’re interested in becoming a partner of ours, drop us a line by [filling out this form](http://www.shipstation.com/partners/shipstation-api-custom-store/) and we’ll get in touch.

There are two methods to integrate with ShipStation:

* Custom Store Integration

* ShipStation API

## Custom Store Integration

Looking for a more 1-to-1 relationship between ShipStation and your chosen selling platform? The Custom Store Integration is the ticket. Our custom store integration is just like any of our other selling channel integration, and could be eligible (based on internal review) as a branded option within the ShipStation admin. It also allows the user to sync orders within ShipStation in a single click, in addition to ShipStation automatically sending shipment status and tracking information 
updates back to your cart or marketplace once a label is created. It’s the best way to sync up orders with ShipStation and have the most seamless experience.

The Custom Store allows you to perform two major functions:

* Provide order information to ShipStation, including recipient address, products, customers, etc.

* Receive tracking information when an order is shipped, including shipping method, shipping status, tracking number, and more

To integrate with the Custom Store, you must expose a web page that renders XML that adheres to the specification defined in the Custom Store Integration Guide. 
We refer to this page as your “XML Endpoint”. If you can provide us an XML Endpoint, we can *pull* data from your endpoint just like we do with other marketplaces like eBay and Amazon.

**To find out more about our Custom Store Integration, click here: [Custom Store Integration Guide](https://help.shipstation.com/hc/en-us/articles/205928478)**

## ShipStation API

Our API is available for any plan, and allows for read access to almost all data in your account, and write access to create specific objects, like Orders, Customers, and Products. 
The API is a great way to get data directly to and from ShipStation, like creating products, customers, and querying order & shipping data. Please note that an API integration will not allow you to use your own MarketplaceID that could eventually be branded with your company's logo (see the Custom Store Integration above for that functionality).

**This API allows developers to build applications that interface with the ShipStation platform. The API can be used to automate many tasks including:**

+ Managing Orders

+ Managing Shipments

+ Creating Shipping Labels

+ Retrieving Shipping Rates

+ and more!!!

**To learn more about our API, please review our API documentation below.**

## Which one should I pick?

The method that's right for your integration very much depends on the type of integration you're planning on implementing. A Custom Store allows ShipStation to *pull* order information from your platform the very same way we *pull* data from marketplaces such as eBay, Amazon, and Shopify. Once an order has been shipped in ShipStation, ShipStation automatically *pushes* tracking information back to your custom store. Though the functionality afforded by this approach is limited to these 2 main functions, much of the *heavy lifting* is performed by ShipStation. Importing orders 
and sending tracking information is performed automatically by ShipStation, as long as your XML endpoint is available to receive our data.

An API integration, on the other hand, exposes much more functionality, but requires that the developer do much of the heavy lifting. Orders must be *pushed* to ShipStation by using our "/orders/CreateOrder" endpoint.  The API allows developers to perform functions such as tagging an order, 
shipping an order, creating a shipping label (without an order), retrieving shipping rates, adding funds to a carrier account, creating a warehouse, listing products, and much more.  The functionality the API affords are typical actions that a user would perform if using the web app.

### Considerations

* **Will your integration be the main order management tool for the online seller?**  If so, the API's broader range of functionality may be the best option.

* **Would you like your store integration to be a branded marketplace within the ShipStation admin?** When you integrate using the Custom Store Integration, you could be eligible to have your company branded within the ShipStation admin. A branded store could have the plugin's logo in the app,
as well as an easier store setup, order sync, and reporting. Please note, ShipStation makes the final decision, based on integration and partner requirements, on which custom stores are branded within our application.

# ShipStation API Requirements

## End Point

Endpoints are located at the following domain https://ssapi.shipstation.com/ and will need to have a specific reference added to return data. PLEASE NOTE: You cannot access this URL directly and must reference one of the specific endpoints below.

## Authentication

The ShipStation API uses [Basic HTTP authentication](http://en.wikipedia.org/wiki/Basic_access_authentication). Use your ShipStation ``API Key`` as the username and ``API Secret`` as the password.  You can find your ``API Key`` as the username and ``API Secret`` under Settings at https://ss.shipstation.com/#/settings/api .

The Authorization header is constructed as follows:

+ Username (``API KEY``) and password (``API Secret``) are combined into a string "username:password"

+ The resulting string is then encoded using the RFC2045-MIME variant of Base64, except not limited to 76 char/line

+ The authorization method and a space i.e. "Basic " is then put before the encoded string.

For example, if the ``API KEY`` given is 'ShipStation' and the ``API Secret`` is 'Rocks' then the header is formed as follows:

+ Authorization: Basic U2hpcFN0YXRpb246Um9ja3M=

## API Rate Limits

In an effort to ensure consistent application performance and increased scalability, we have implemented rate limiting on the ShipStation API.  Your integration will need to be able to handle HTTP rate limiting status messages as defined below:

**Response Headers**

All responses will include headers with status information about rate limiting.

1. X-Rate-Limit-Limit: the maximum number of requests per minute to the endpoint

2. X-Rate-Limit-Remaining: the available requests remaining in the current window

3. X-Rate-Limit-Reset: the number of seconds remaining until the next window begins

**Hitting the Limit**

If your application hits the rate limit, an HTTP 429 will be returned with this body:

```
{
    "message": "Too Many Requests"
}
```

And these headers, assuming it is 40 seconds into the current window:

```
{
    "X-Rate-Limit-Limit": 60,
    "X-Rate-Limit-Remaining": 0,
    "X-Rate-Limit-Reset": 20
}
```

When the limit is reached, your application should stop making requests until X-Rate-Limit-Reset seconds have elapsed. The current Rate limit for each set of the API Key and Secret is 40 requests per minute.

If you have any issues with the API, please email us at <apisupport@shipstation.com>

## Server Responses

Status Code | Description
------------|-------------
``200`` | OK - The request was successful (some API calls may return 201 instead).
``201`` | Created - The request was successful and a resource was created.
``204`` | No Content - The request was successful but there is no representation to return (that is, the response is empty).
``400`` | Bad Request -  The request could not be understood or was missing required parameters.
``401`` | Unauthorized -  Authentication failed or user does not have permissions for the requested operation.
``403`` | Forbidden - Access denied.
``404`` | Not Found -  Resource was not found.
``405`` | Method Not Allowed -  Requested method is not supported for the specified resource.
``429`` | Too Many Requests - Exceeded ShipStation API limits. When the limit is reached, your application should stop making requests until X-Rate-Limit-Reset seconds have elapsed.
``500`` | Internal Server Error - ShipStation has encountered an error.

## DateTime Format and Time Zone

ShipStation uses the ISO 8601 combined format for dateTime stamps being submitted to and returned from the API. Please be sure to submit all dateTime values as follows:

yyyy-mm-dd hh:mm:ss (24 hour notation). Example - ``2016-11-29 23:59:59``

The time zone represented in all API responses is PST/PDT. Similarly, ShipStation asks that you make all time zone convertions and submit any dateTime requests in PST/PDT.

## Actions

### accounts.listtags.get
Lists all tags defined for this account.


```js
shipstation.accounts.listtags.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### accounts.registeraccount.post
Creates a new ShipStation account and generates an apiKey and apiSecret to be used by the newly created account. PLEASE NOTE: This endpoint does not require API key and API Secret credentials.  The Authorization header can be left off. Use of this specific endpoint requires approval, and is meant only for direct partners of ShipStation. This is the only endpoint to require approval. All other endpoints listed in this document can be accessed by submitting proper authorization credentials in the header of the request. To become a direct partner of ShipStation, or to request more information on becoming a direct partner, we recommend reaching out to our Partners and Integrations team here: https://info.shipstation.com/become-a-partner-api-and-custom-store-integrations

The body of this request has the following attributes:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
``firstName``  | string, required | First Name
``lastName`` | string, required | Last Name
``email`` | string, required | Email address. This will also be the username of the account.
``password`` | string, required | Password to set for account access.
``companyName`` | string, optional | Name of Company.
``addr1`` | string, optional | Company Address - Street 1
``addr2`` | string, optional | Company Address - Street 2
``city`` | string, optional | Company Address - City
``state`` | string, optional | Company Address - State 
``zip`` | string, optional | Company Address - Zip Code
``countryCode`` |string, optional | Company Address - Country.  Please use a 2-character country code.
``phone`` | string, optional | Company Phone number.


```js
shipstation.accounts.registeraccount.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### carriers.get
Lists all shipping providers connected to this account.


```js
shipstation.carriers.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### carriers.addfunds.post
Adds funds to a carrier account using the payment information on file. The body of this request should specify the following attributes:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
 ``carrierCode`` | string, required |  The carrier to add funds to.
 ``amount`` | number, required | The dollar amount to add to the account.  The minimum value that can be added is $10.00.  The maximum value is $10,000.00.


```js
shipstation.carriers.addfunds.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### carriers.getcarrier_carrierCode_carrierCode.get
Retrieves the shipping carrier account details for the specified carrierCode. Use this method to determine a carrier's account balance.


```js
shipstation.carriers.getcarrier_carrierCode_carrierCode.get({
  "carrierCode": ""
}, context)
```

#### Input
* input `object`
  * carrierCode **required** `string`: The code for the carrier account to retrieve.

#### Output
*Output schema unknown*

### carriers.listpackages_carrierCode_carrierCode.get
Retrieves a list of packages for the specified carrier


```js
shipstation.carriers.listpackages_carrierCode_carrierCode.get({
  "carrierCode": ""
}, context)
```

#### Input
* input `object`
  * carrierCode **required** `string`: The carrier's code

#### Output
*Output schema unknown*

### carriers.listservices_carrierCode_carrierCode.get
Retrieves the list of available shipping services provided by the specified carrier


```js
shipstation.carriers.listservices_carrierCode_carrierCode.get({
  "carrierCode": ""
}, context)
```

#### Input
* input `object`
  * carrierCode **required** `string`: The carrier's code

#### Output
*Output schema unknown*

### customers.customerId.get
Get Customer


```js
shipstation.customers.customerId.get({
  "customerId": 0
}, context)
```

#### Input
* input `object`
  * customerId **required** `number`: The system generated identifier for the Customer.

#### Output
*Output schema unknown*

### customers_stateCode_stateCode_countryCode_countryCode_tagId_tagId_marketplaceId_marketplaceId_sortBy_sortBy_sortDir_sortDir_page_page_pageSize_pageSize.get
Obtains a list of customers that match the specified criteria.


```js
shipstation.customers_stateCode_stateCode_countryCode_countryCode_tagId_tagId_marketplaceId_marketplaceId_sortBy_sortBy_sortDir_sortDir_page_page_pageSize_pageSize.get({
  "stateCode": "",
  "countryCode": "",
  "marketplaceId": 0,
  "tagId": 0,
  "sortBy": "",
  "sortDir": "",
  "page": 0,
  "pageSize": 0
}, context)
```

#### Input
* input `object`
  * stateCode **required** `string`: Returns customers that reside in the specified stateCode.
  * countryCode **required** `string`: Returns customers that reside in the specified countryCode.
  * marketplaceId **required** `number`: Returns customers that purchased items from the specified marketplaceId.
  * tagId **required** `number`: Returns customers that have been tagged with the specified tagId.
  * sortBy **required** `string` (values: Name, ModifyDate, CreateDate): Sorts the order of the response based off the specified value.
  * sortDir **required** `string` (values: ASC, DESC): Sets the direction of the sort order.
  * page **required** `number`: Page number.
  * pageSize **required** `number`: Requested page size. Max value is 500.

#### Output
*Output schema unknown*

### fulfillments.get
List Fulfillments w/o parameters


```js
shipstation.fulfillments.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### fulfillments_fulfillmentId_fulfillmentId_orderId_orderId_orderNumber_orderNumber_trackingNumber_trackingNumber_recipientName_recipientName_createDateStart_createDateStart_createDateEnd_createDateEnd_shipDateStart_shipDateStart_shipDateEnd_shipDateEnd_sortBy_sortBy_sortDir_sortDir_page_page_pageSize_pageSize.get
Obtains a list of fulfillments that match the specified criteria.  Please note the following:

- Orders that have been marked as shipped either through the UI or the API will appear in the response as they are considered fulfillments.

All of the available filters are optional.  They do not need to be included in the URL.  If you do include them, here's what the URL may look like:

Url format with filters:

```
fulfillments?fulfillmentId={fulfillmentId}
&orderId={orderId}
&orderNumber={orderNumber}
&trackingNumber={trackingNumber}
&recipientName={recipientName}
&createDateStart={createDateStart}
&createDateEnd={createDateEnd}
&shipDateStart={shipDateStart}
&shipDateEnd={shipDateEnd}
&sortBy={sortBy}
&sortDir={sortDir}
&page={page}
&pageSize={pageSize}
```


```js
shipstation.fulfillments_fulfillmentId_fulfillmentId_orderId_orderId_orderNumber_orderNumber_trackingNumber_trackingNumber_recipientName_recipientName_createDateStart_createDateStart_createDateEnd_createDateEnd_shipDateStart_shipDateStart_shipDateEnd_shipDateEnd_sortBy_sortBy_sortDir_sortDir_page_page_pageSize_pageSize.get({
  "fulfillmentId": 0,
  "orderId": 0,
  "orderNumber": "",
  "trackingNumber": "",
  "recipientName": "",
  "createDateStart": "",
  "createDateEnd": "",
  "shipDateStart": "",
  "shipDateEnd": "",
  "sortBy": "",
  "sortDir": "",
  "page": 0,
  "pageSize": 0
}, context)
```

#### Input
* input `object`
  * fulfillmentId **required** `number`: Returns the fulfillment with the specified fulfillment ID.
  * orderId **required** `number`: Returns fulfillments whose orders have the specified order ID.
  * orderNumber **required** `string`: Returns fulfillments whose orders have the specified order number.
  * trackingNumber **required** `string`: Returns fulfillments with the specified tracking number.
  * recipientName **required** `string`: Returns fulfillments shipped to the specified recipient name.
  * createDateStart **required** `string`: Returns fulfillments created on or after the specified ``createDate``
  * createDateEnd **required** `string`: Returns fulfillments created on or before the specified ``createDate``
  * shipDateStart **required** `string`: Returns fulfillments with the ``shipDate`` on or after the specified date
  * shipDateEnd **required** `string`: Returns fulfillments with the ``shipDate`` on or before the specified date
  * sortBy **required** `string` (values: ShipDate, CreateDate): Sort the responses by a set value.  The response will be sorted based off the ascending dates (oldest to most current.)  If left empty, the response will be sorted by ascending ``createDate``.
  * sortDir **required** `string` (values: ASC, DESC): Sets the direction of the sort order.
  * page **required** `number`: page number.
  * pageSize **required** `number`: page size.

#### Output
*Output schema unknown*

### orders.get
List Orders w/o parameters


```js
shipstation.orders.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### orders.addtag.post
Adds a tag to an order.  The body of this request should specify the following attributes:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
``orderId`` | number, required | Identifies the order that will be tagged.
``tagId`` | number, required | Identifies the tag that will be applied to the order.


```js
shipstation.orders.addtag.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### orders.assignuser.post
Assigns a user to an order.  The body of this request should specify the following attributes:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
``orderIds`` | number, required | Identifies set of orders that will be assigned the user.  Please note that if ANY of the orders within the array are not found, no orders will have a user assigned to them.
``userId`` | number, required | Identifies the user that will be applied to the orders.  It should contain a GUID of the user to be assigned to the array of orders.


```js
shipstation.orders.assignuser.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### orders.createlabelfororder.post
Creates a shipping label for a given order.  The ``labelData`` field returned in the response is a base64 encoded PDF value. Simply decode and save the output as a PDF file to retrieve a printable label.  The body of this request should specify the following attributes:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
``orderId`` | number, required | Identifies the order that will be shipped.
``carrierCode`` | string, required | The code for the carrier that is to be used for the label.
``serviceCode`` | string, required | The code for the shipping service that is to be used for the label.
``confirmation`` | string, required | The type of delivery confirmation that is to be used once the shipment is created.  Possible values: ``none``, ``delivery``, ``signature``, ``adult_signature``, and ``direct_signature``.  ``direct_signature`` is available for FedEx only.
``shipDate`` | string, required | The date the order should be shipped.
``weight`` | Weight, optional | Weight of the order.  Use the [**Weight**](http://www.shipstation.com/developer-api/#/reference/model-weight) model.
``dimensions`` | Dimensions, optional | Dimensions of the order.  Use [**Dimensions**](http://www.shipstation.com/developer-api/#/reference/model-dimensions) model.
``insuranceOptions`` | InsuranceOptions, optional | The shipping insurance information associated with this label.  Use the [**InsuranceOptions**](http://www.shipstation.com/developer-api/#/reference/model-insuranceoptions) model.
``internationalOptions`` | InternationalOptions, optional | Customs information that can be used to generate customs documents for international orders.  Use the [**InternationalOptions**](http://www.shipstation.com/developer-api/#/reference/model-internationaloptions) model.
``advancedOptions`` | AdvancedOptions, optional | Various advanced options that may be available depending on the shipping carrier that is used to ship the order. Use the Customs information that can be used to generate customs documents for international orders.  Use the [**AdvancedOptions**](http://www.shipstation.com/developer-api/#/reference/model-advancedoptions) model.
``testLabel`` | boolean, required | Specifies whether a test label should be created.


```js
shipstation.orders.createlabelfororder.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### orders.createorder.post
If the ``orderKey`` is specified, the method becomes idempotent and the existing order with that key will be updated. Note: Only orders in an open status in ShipStation (``awaiting_payment``,``awaiting_shipment``, and ``on_hold``) can be updated through this method. ``cancelled`` and ``shipped`` are locked from modification through the API.  The body of this request should specify an [**Order**](https://www.shipstation.com/developer-api/#/reference/model-order) object:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
``orderNumber`` | string, required | A user-defined order number used to identify an order.
``orderKey`` | string, optional | A user-provided key that should be unique to each order.  If an orderKey is not provided, ShipStation will create a new order and generate a unique orderKey for that order.  If the orderKey *is* provided, the **createorder** method will either: create a new order if the provided orderKey is not found, or, update the existing order if the orderKey is found.
``orderDate`` | string, required | The date the order was placed.
``paymentDate`` | string, optional | The date the order was paid for.
``shipByDate`` | string, optional | The date the order is to be shipped before or on. This field is a suggested value generated by the order source/platform/cart and passed to ShipStation.
``orderStatus`` | string, required | The order's status. Possible values: ``awaiting_payment``, ``awaiting_shipment``, ``shipped``, ``on_hold``, ``cancelled``
``customerUsername`` | string, optional | The customer's username.
``customerEmail`` | string, optional | The customer's email address.
``billTo`` | Address, required | The recipients billing address. Use the [**Address**](https://www.shipstation.com/developer-api/#/reference/model-address) model.
``shipTo`` | Address, required | The recipient's shipping address. Use the [**Address**](http://www.shipstation.com/developer-api/#/reference/model-address) model.
``items`` | OrderItem, optional | An array of item objects.  Use an array of [**OrderItem**](http://www.shipstation.com/developer-api/#/reference/model-orderitem) models.
``amountPaid`` | number, optional | The total amount paid for the Order.
``taxAmount`` | number, optional | The total tax amount for the Order.
``shippingAmount`` | number, optional | Shipping amount paid by the customer, if any.
``customerNotes`` | string, optional | Notes left by the customer when placing the order.
``internalNotes`` | string, optional | Private notes that are only visible to the seller.
``gift`` | boolean, optional | Specifies whether or not this Order is a gift
``giftMessage`` | string, optional | Gift message left by the customer when placing the order.
``paymentMethod`` | string, optional | Identifies the shipping service selected by the customer when placing this order.
``requestedShippingService`` | string, optional |Identifies the shipping service selected by the customer when placing this order. This value is given to ShipStation by the marketplace/cart and helps identify what shipping service the customer selected upon checkout.
``carrierCode`` | string, optional | The code for the carrier that is to be used(or was used) when this order is shipped(was shipped).
``serviceCode`` | string, optional | The code for the shipping service that is to be used(or was used) when this order is shipped(was shipped).
``packageCode`` | string, optional | The code for the package type that is to be used(or was used) when this order is shipped(was shipped).
``confirmation`` | string, optional | The type of delivery confirmation that is to be used(or was used) when this order is shipped(was shipped). Possible values: ``none``, ``delivery``, ``signature``, ``adult_signature``, and ``direct_signature``.  ``direct_signature`` is available for FedEx only.  
``shipDate`` | string, optional | The date the order was shipped.
``weight`` | Weight, optional | Weight of the order.  Use the [**Weight**](http://www.shipstation.com/developer-api/#/reference/model-weight) model.
``dimensions`` | Dimensions, optional | Dimensions of the order.  Use the [**Dimensions**](http://www.shipstation.com/developer-api/#/reference/model-dimensions) model.
``insuranceOptions`` | InsuranceOptions, optional | The shipping insurance information associated with this order.  Use the [**InsuranceOptions**](http://www.shipstation.com/developer-api/#/reference/model-insuranceoptions) model.
``internationalOptions`` | InternationalOptions, optional | Customs information that can be used to generate customs documents for international orders.  Use the [**InternationalOptions**](http://www.shipstation.com/developer-api/#/reference/model-internationaloptions) model.
``advancedOptions`` | AdvancedOptions, optional | Various advanced options that may be available depending on the shipping carrier that is used to ship the order. Use the [**AdvancedOptions**](http://www.shipstation.com/developer-api/#/reference/model-advancedoptions) model.


```js
shipstation.orders.createorder.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### orders.createorders.post
This endpoint can be used to create or update multiple orders in one request. If the ``orderKey`` is specified in an order, the existing order with that key will be updated. Note: Only orders in an open status in ShipStation (``awaiting_payment``,``awaiting_shipment``, and ``on_hold``) can be updated through this method. ``cancelled`` and ``shipped`` are locked from modification through the API.

Data Type          |Description
-------------------|-------------------
Order, required | An array of [**Order**](http://www.shipstation.com/developer-api/#/reference/model-order) objects (maximum of 100 per request)


```js
shipstation.orders.createorders.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### orders.holduntil.post
This method will change the status of the given order to On Hold until the date specified, when the status will automatically change to Awaiting Shipment.

The body of this request should specify the following attributes:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
``orderId`` | number, required | Identifies the order that will be held.
``holdUntilDate`` | string, required | Date when order is moved from ``on_hold`` status to ``awaiting_shipment``.


```js
shipstation.orders.holduntil.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### orders.listbytag_orderStatus_orderStatus_tagId_tagId_page_page_pageSize_pageSize.get
Lists all orders that match the specified status and tag ID.

Url format with filters:

```
/listbytag?orderStatus={orderStatus}
&tagId={tagId}
&page={page}
&pageSize={pageSize}
```


```js
shipstation.orders.listbytag_orderStatus_orderStatus_tagId_tagId_page_page_pageSize_pageSize.get({
  "orderStatus": "",
  "tagId": 0,
  "page": "",
  "pageSize": ""
}, context)
```

#### Input
* input `object`
  * orderStatus **required** `string` (values: awaiting_payment, awaiting_shipment, pending_fulfillment, shipped, on_hold, cancelled): The order's status.
  * tagId **required** `number`: ID of the tag. Call Accounts/ListTags to obtain a list of tags for this account.
  * page **required** `string`: Page number
  * pageSize **required** `string`: Requested page size. Max value is 500.

#### Output
*Output schema unknown*

### orders.markasshipped.post
Marks an order as shipped without creating a label in ShipStation. The body of this request has the following attributes:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
 ``orderId`` | number, required | Identifies the order that will be marked as shipped.
 ``carrierCode`` | string, required | Code of the carrier that is marked as having shipped the order.
 ``shipDate`` | string, optional | Date order was shipped.
 ``trackingNumber`` | string, optional | Tracking number of shipment.
 ``notifyCustomer``  | boolean, optional | Specifies whether the customer should be notified of the shipment. Default value: false
 ``notifySalesChannel`` | boolean, optional | Specifies whether the sales channel should be notified of the shipment. Default value: false


```js
shipstation.orders.markasshipped.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### orders.removetag.post
Removes a tag from the specified order.  The body of this request has the following attributes:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
``orderId`` | number, required | Identifies the order whose tag will be removed.
``tagId`` | number, required | Identifies the tag to remove.


```js
shipstation.orders.removetag.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### orders.restorefromhold.post
This method will change the status of the given order from On Hold to Awaiting Shipment. This endpoint is used when a holdUntil Date is attached to an order.

The body of this request should specify the following attributes:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
``orderId`` | number, required | Identifies the order that will be restored to ``awaiting_shipment`` from ``on_hold``.


```js
shipstation.orders.restorefromhold.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### orders.unassignuser.post
Unassigns a user from an order.  The body of this request should specify the following attributes:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
``orderIds`` | number, required | Identifies set of orders that will have the user unassigned.  Please note that if ANY of the orders within the array are not found, then no orders will have their users unassigned.


```js
shipstation.orders.unassignuser.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### orders.orderId.delete
Removes order from ShipStation's UI. Note this is a "soft" delete action so the order will still exist in the database, but will be set to ``inactive``


```js
shipstation.orders.orderId.delete({
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: The system generated identifier for the order.

#### Output
*Output schema unknown*

### orders.orderId.get
Retrieves a single order from the database.


```js
shipstation.orders.orderId.get({
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: The system generated identifier for the order.

#### Output
*Output schema unknown*

### orders_customerName_customerName_itemKeyword_itemKeyword_createDateStart_createDateStart_createDateEnd_createDateEnd_modifyDateStart_modifyDateStart_modifyDateEnd_modifyDateEnd_orderDateStart_orderDateStart_orderDateEnd_orderDateEnd_orderNumber_orderNumber_orderStatus_orderStatus_paymentDateStart_paymentDateStart_paymentDateEnd_paymentDateEnd_storeId_storeId_sortBy_sortBy_sortDir_sortDir_page_page_pageSize_pageSize.get
Obtains a list of orders that match the specified criteria.  All of the available filters are optional.  They do not need to be included in the URL.  If you do include them, here's what the URL may look like:

Url format with filters:

```
/orders?customerName={customerName}
&itemKeyword={itemKeyword}
&createDateStart={createDateStart}
&createDateEnd={createDateEnd}
&modifyDateStart={modifyDateStart}
&modifyDateEnd={modifyDateEnd}
&orderDateStart={orderDateStart}
&orderDateEnd={orderDateEnd}
&orderNumber={orderNumber}
&orderStatus={orderStatus}
&paymentDateStart={paymentDateStart}
&paymentDateEnd={paymentDateEnd}
&storeId={storeId}
&sortBy={sortBy}
&sortDir={sortDir}
&page={page}
&pageSize={pageSize}
```


```js
shipstation.orders_customerName_customerName_itemKeyword_itemKeyword_createDateStart_createDateStart_createDateEnd_createDateEnd_modifyDateStart_modifyDateStart_modifyDateEnd_modifyDateEnd_orderDateStart_orderDateStart_orderDateEnd_orderDateEnd_orderNumber_orderNumber_orderStatus_orderStatus_paymentDateStart_paymentDateStart_paymentDateEnd_paymentDateEnd_storeId_storeId_sortBy_sortBy_sortDir_sortDir_page_page_pageSize_pageSize.get({
  "customerName": "",
  "itemKeyword": "",
  "createDateStart": "",
  "createDateEnd": "",
  "modifyDateStart": "",
  "modifyDateEnd": "",
  "orderDateStart": "",
  "orderDateEnd": "",
  "orderNumber": "",
  "orderStatus": "",
  "paymentDateStart": "",
  "paymentDateEnd": "",
  "storeId": 0,
  "sortBy": "",
  "sortDir": "",
  "page": "",
  "pageSize": ""
}, context)
```

#### Input
* input `object`
  * customerName **required** `string`: Returns orders that match the specified name.
  * itemKeyword **required** `string`: Returns orders that contain items that match the specified keyword. Fields searched are Sku, Description, and Options
  * createDateStart **required** `string`: Returns orders that were created in ShipStation after the specified date
  * createDateEnd **required** `string`: Returns orders that were created in ShipStation before the specified date
  * modifyDateStart **required** `string`: Returns orders that were modified after the specified date
  * modifyDateEnd **required** `string`: Returns orders that were modified before the specified date
  * orderDateStart **required** `string`: Returns orders greater than the specified date
  * orderDateEnd **required** `string`: Returns orders less than or equal to the specified date
  * orderNumber **required** `string`: Filter by order number, performs a "starts with" search.
  * orderStatus **required** `string` (values: awaiting_payment, awaiting_shipment, pending_fulfillment, shipped, on_hold, cancelled): Filter by order status.  If left empty, orders of all statuses are returned.
  * paymentDateStart **required** `string`: Returns orders that were paid after the specified date
  * paymentDateEnd **required** `string`: Returns orders that were paid before the specified date
  * storeId **required** `number`: Filters orders to a single store. Call List Stores to obtain a list of store Ids.
  * sortBy **required** `string` (values: OrderDate, ModifyDate, CreateDate): Sort the responses by a set value.  The response will be sorted based off the ascending dates (oldest to most current.)  If left empty, the response will be sorted by ascending ``orderId``.
  * sortDir **required** `string` (values: ASC, DESC): Sets the direction of the sort order.
  * page **required** `string`: Page number
  * pageSize **required** `string`: Requested page size. Max value is 500.

#### Output
*Output schema unknown*

### products.get
List Products w/o parameters


```js
shipstation.products.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### products.productId.get
Get Product


```js
shipstation.products.productId.get({
  "productId": 0
}, context)
```

#### Input
* input `object`
  * productId **required** `number`: The system generated identifier for the Product.

#### Output
*Output schema unknown*

### products.productId.put
Updates an existing product. This call does not currently support partial updates. The entire resource must be provided in the body of the request.


```js
shipstation.products.productId.put({
  "productId": 0
}, context)
```

#### Input
* input `object`
  * productId **required** `number`: The system generated identifier for the Product.

#### Output
*Output schema unknown*

### products_sku_sku_name_name_productCategoryId_productCategoryId_productTypeId_productTypeId_tagId_tagId_startDate_startDate_endDate_endDate_showInactive_showInactive_sortBy_sortBy_sortDir_sortDir_page_page_pageSize_pageSize.get
Obtains a list of products that match the specified criteria.  All of the available filters are optional.  They do not need to be included in the URL.  If you do include them, here's what the URL may look like:

Url format with filters:

```
/products?sku={sku}
&name={name}
&productCategoryId={productCategoryId}
&productTypeId={productTypeId}
&tagId={tagId}
&startDate={startDate}
&endDate={endDate}
&showInactive={showInactive}
&sortBy={sortBy}
&sortDir={sortDir}
&page={page}
&pageSize={pageSize}
```


```js
shipstation.products_sku_sku_name_name_productCategoryId_productCategoryId_productTypeId_productTypeId_tagId_tagId_startDate_startDate_endDate_endDate_showInactive_showInactive_sortBy_sortBy_sortDir_sortDir_page_page_pageSize_pageSize.get({
  "sku": "",
  "name": "",
  "productCategoryId": "",
  "productTypeId": "",
  "tagId": "",
  "startDate": "",
  "endDate": "",
  "sortBy": "",
  "sortDir": "",
  "page": "",
  "pageSize": "",
  "showInactive": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`: Returns products that match the specified SKU.
  * name **required** `string`: Returns products that match the specified product name.
  * productCategoryId **required** `string`: Returns products that match the specified productCategoryId.
  * productTypeId **required** `string`: Returns products that match the specified productTypeId.
  * tagId **required** `string`: Returns products that match the specified tagId.
  * startDate **required** `string`: Returns products that were created after the specified date.
  * endDate **required** `string`: Returns products that were created before the specified date.
  * sortBy **required** `string` (values: SKU, ModifyDate, CreateDate): Sorts the order of the response based off the specified value.
  * sortDir **required** `string` (values: ASC, DESC): Sets the direction of the sort order.
  * page **required** `string`: Page number.
  * pageSize **required** `string`: Requested page size. Max value is 500.
  * showInactive **required** `string`: Specifies whether the list should include inactive products.

#### Output
*Output schema unknown*

### shipments.get
List Shipments w/o parameters


```js
shipstation.shipments.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### shipments.createlabel.post
Creates a shipping label.  The ``labelData`` field returned in the response is a base64 encoded PDF value. Simply decode and save the output as a PDF file to retrieve a printable label.  The body of this request has the following attributes:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
 ``carrierCode`` | string, required | Identifies the carrier to be used for this label.
 ``serviceCode`` | string, required | Identifies the shipping service to be used for this label.
 ``packageCode`` | string, required | Identifies the packing type that should be used for this label.
 ``confirmation`` | string, optional | Identifies the delivery confirmation type to be used for this label.
 ``shipDate`` | string, required | The date the shipment will be shipped.
 ``weight`` | Weight, required | Shipment's weight.  Use the [**Weight**](https://www.shipstation.com/developer-api/#/reference/model-weight) model.
 ``dimensions`` | Dimensions, optional | Shipment's dimensions.  Use the [**Dimensions**](https://www.shipstation.com/developer-api/#/reference/model-dimensions) model.
 ``shipFrom`` | Address, required | Address indicating shipment's origin.  Use the [**Address**](https://www.shipstation.com/developer-api/#/reference/model-address) model.
 ``shipTo`` | Address, required | Address indicating shipment's destination.  Use the [**Address**](https://www.shipstation.com/developer-api/#/reference/model-address) model.
 ``insuranceOptions`` | InsuranceOptions, optional | The shipping insurance information associated with this order.  
 ``internationalOptions`` | InternationalOptions, optional | Customs information that can be used to generate customs documents for international orders.  Use the [**InternationalOptions**](https://www.shipstation.com/developer-api/#/reference/model-internationaloptions) model.
 ``advancedOptions`` | AdvancedOptions, optional | Various advanced options that may be available depending on the shipping carrier that is used to ship the order.  Use the [**AdvancedOptions**](https://www.shipstation.com/developer-api/#/reference/model-advancedoptions) model. 
 ``testLabel`` | boolean, optional | Specifies whether a test label should be created. Default value: false.


```js
shipstation.shipments.createlabel.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### shipments.getrates.post
Retrieves shipping rates for the specified shipping details.  The body of this request should specify the following attributes:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
 ``carrierCode`` | string, required | Returns rates for the specified carrier.
 ``serviceCode`` | string, optional | Returns rates for the specified shipping service.
 ``packageCode`` | string, optional | Returns rates for the specified package type.
 ``fromPostalCode`` | string, required | Originating postal code.
 ``toState`` | string, optional | Destination State/Province. Please use two-character state/province abbreviation. Note this field is required for the following carriers: UPS
 ``toCountry`` | string, required | Destination Country.  Please use the two-character ISO country code.
 ``toPostalCode`` | string, required | Destination Postal Code.
 ``toCity`` | string, optional | Destination City.
 ``weight`` | Weight, required | Shipment's weight.  Use ``Weight`` object.
 ``dimensions`` | Dimensions, optional | Shipment's dimensions.  Use ``Dimensions`` object. 
 ``confirmation`` | string, optional | Returns rates that account for the specified delivery confirmation type.
 ``residential`` | boolean, optional | Returns rates that account for the specified delivery confirmation type. Default value: false


```js
shipstation.shipments.getrates.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### shipments.voidlabel.post
Voids the specified label by shipmentId.  The body of this request should specify the following attributes:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
 ``shipmentId`` | number, required | ID of the shipment to void.


```js
shipstation.shipments.voidlabel.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### shipments_recipientName_recipientName_recipientCountryCode_recipientCountryCode_orderNumber_orderNumber_orderId_orderId_carrierCode_carrierCode_serviceCode_serviceCode_trackingNumber_trackingNumber_createDateStart_createDateStart_createDateEnd_createDateEnd_shipDateStart_shipDateStart_shipDateEnd_shipDateEnd_voidDateStart_voidDateStart_voidDateEnd_voidDateEnd_includeShipmentItems_includeShipmentItems_sortBy_sortBy_sortDir_sortDir_page_page_pageSize_pageSize.get
Obtains a list of shipments that match the specified criteria.  Please note the following:

- Only valid shipments with labels generated in ShipStation will be returned in the response. Orders that have been marked as shipped either through the UI or the API will not appear as they are considered external shipments.

- To include every shipment's associated shipmentItems in the response, be sure to set the `includeShipmentItems` parameter to `true`.

All of the available filters are optional.  They do not need to be included in the URL.  If you do include them, here's what the URL may look like:

Url format with filters:

```
shipments?recipientName={recipientName}
&recipientCountryCode={recipientCountryCode}
&orderNumber={orderNumber}
&orderId={orderId}
&carrierCode={carrierCode}
&serviceCode={serviceCode}
&trackingNumber={trackingNumber}
&createDateStart={createDateStart}
&createDateEnd={createDateEnd}
&shipDateStart={shipDateStart}
&shipDateEnd={shipDateEnd}
&voidDateStart={voidDateStart}
&voidDateEnd={voidDateEnd}
&includeShipmentItems={includeShipmentItems}
&sortBy={sortBy}
&sortDir={sortDir}
&page={page}
&pageSize={pageSize}
```


```js
shipstation.shipments_recipientName_recipientName_recipientCountryCode_recipientCountryCode_orderNumber_orderNumber_orderId_orderId_carrierCode_carrierCode_serviceCode_serviceCode_trackingNumber_trackingNumber_createDateStart_createDateStart_createDateEnd_createDateEnd_shipDateStart_shipDateStart_shipDateEnd_shipDateEnd_voidDateStart_voidDateStart_voidDateEnd_voidDateEnd_includeShipmentItems_includeShipmentItems_sortBy_sortBy_sortDir_sortDir_page_page_pageSize_pageSize.get({
  "recipientName": "",
  "recipientCountryCode": "",
  "orderNumber": "",
  "orderId": 0,
  "carrierCode": "",
  "serviceCode": "",
  "trackingNumber": "",
  "createDateStart": "",
  "createDateEnd": "",
  "shipDateStart": "",
  "shipDateEnd": "",
  "voidDateStart": "",
  "voidDateEnd": "",
  "includeShipmentItems": true,
  "sortBy": "",
  "sortDir": "",
  "page": 0,
  "pageSize": 0
}, context)
```

#### Input
* input `object`
  * recipientName **required** `string`: Returns shipments shipped to the specified recipient name.
  * recipientCountryCode **required** `string`: Returns shipments shipped to the specified country code.
  * orderNumber **required** `string`: Returns shipments whose orders have the specified order number.
  * orderId **required** `number`: Returns shipments whose orders have the specified order ID.
  * carrierCode **required** `string`: Returns shipments shipped with the specified carrier.
  * serviceCode **required** `string`: Returns shipments shipped with the specified shipping service.
  * trackingNumber **required** `string`: Returns shipments with the specified tracking number.
  * createDateStart **required** `string`: Returns shipments created on or after the specified ``createDate``
  * createDateEnd **required** `string`: Returns shipments created on or before the specified ``createDate``
  * shipDateStart **required** `string`: Returns shipments with the ``shipDate`` on or after the specified date
  * shipDateEnd **required** `string`: Returns shipments with the ``shipDate`` on or before the specified date
  * voidDateStart **required** `string`: Returns shipments voided on or after the specified date
  * voidDateEnd **required** `string`: Returns shipments voided on or before the specified date
  * includeShipmentItems **required** `boolean`: Specifies whether to include shipment items with results Default value: false.
  * sortBy **required** `string` (values: ShipDate, CreateDate): Sort the responses by a set value.  The response will be sorted based off the ascending dates (oldest to most current.)  If left empty, the response will be sorted by ascending ``createDate``.
  * sortDir **required** `string` (values: ASC, DESC): Sets the direction of the sort order.
  * page **required** `number`: page number.
  * pageSize **required** `number`: page size.

#### Output
*Output schema unknown*

### stores.deactivate.post
Deactivates the specified store.

The body of this request has the following attributes:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
``storeId``  | number, required | ID of the store to deactivate.


```js
shipstation.stores.deactivate.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### stores.getrefreshstatus_storeId_storeId.get
Retrieves the refresh status of a given store.


```js
shipstation.stores.getrefreshstatus_storeId_storeId.get({
  "storeId": 0
}, context)
```

#### Input
* input `object`
  * storeId **required** `number`: Specifies the store whose status will be retrieved.

#### Output
*Output schema unknown*

### stores.marketplaces.get
Lists the marketplaces that can be integrated with ShipStation.


```js
shipstation.stores.marketplaces.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### stores.reactivate.post
Reactivates the specified store. Note: stores are active by default

The body of this request has the following attributes:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
``storeId``  | number, required | ID of the store to reactivate.


```js
shipstation.stores.reactivate.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### stores.refreshstore_storeId_storeId_refreshDate_refreshDate.post
Initiates a store refresh.


```js
shipstation.stores.refreshstore_storeId_storeId_refreshDate_refreshDate.post({
  "storeId": 0,
  "refreshDate": ""
}, context)
```

#### Input
* input `object`
  * storeId **required** `number`: Specifies the store which will get refreshed.  If the storeId is not specified, a store refresh will be initiated for all refreshable stores on that account.
  * refreshDate **required** `string`: Specifies the starting date for new order imports.  If the refreshDate is not specified, ShipStation will use the last recorded refreshDate for that store.

#### Output
*Output schema unknown*

### stores.storeId.get
Get Store


```js
shipstation.stores.storeId.get({
  "storeId": 0
}, context)
```

#### Input
* input `object`
  * storeId **required** `number`: A unique ID generated by ShipStation and assigned to each store.

#### Output
*Output schema unknown*

### stores.storeId.put
Updates an existing store. This call does not currently support partial updates. The entire resource must be provided in the body of the request.


```js
shipstation.stores.storeId.put({
  "storeId": 0
}, context)
```

#### Input
* input `object`
  * storeId **required** `number`: A unique ID generated by ShipStation and assigned to each store.
  * body [Get_Update_StoreModel](#get_update_storemodel)

#### Output
*Output schema unknown*

### stores_showInactive_showInactive_marketplaceId_marketplaceId.get
Retrieve the list of installed stores on the account.


```js
shipstation.stores_showInactive_showInactive_marketplaceId_marketplaceId.get({
  "showInactive": true,
  "marketplaceId": 0
}, context)
```

#### Input
* input `object`
  * showInactive **required** `boolean`: Determines whether inactive stores will be returned in the list of stores.
  * marketplaceId **required** `number`: Returns stores of this marketplace type.

#### Output
*Output schema unknown*

### users_showInactive_showInactive.get
List Users


```js
shipstation.users_showInactive_showInactive.get({
  "showInactive": true
}, context)
```

#### Input
* input `object`
  * showInactive **required** `boolean`: Determines whether inactive users will be returned in the response.

#### Output
*Output schema unknown*

### warehouses.get
Retrieves a list of your Ship From Locations (formerly known as warehouses).


```js
shipstation.warehouses.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### warehouses.createwarehouse.post
Adds a Ship From Location (formerly known as warehouse) to your account.  The body of this request should specify the following attributes:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
 ``warehouseName`` | string, optional | Name of Ship From Location.
 ``originAddress`` | Address, required | The origin address.  Shipping rates will be calculated from this address.  Use the [**Address**](https://www.shipstation.com/developer-api/#/reference/model-address) model.
 ``returnAddress`` | Address, optional | The return address.  If a "returnAddress" is not specified, your "originAddress" will be used as your "returnAddress". Use the [**Address**](https://www.shipstation.com/developer-api/#/reference/model-address) model.
 ``isDefault`` | boolean, optional | Specifies whether or not this will be your default Ship From Location.


```js
shipstation.warehouses.createwarehouse.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### warehouses.warehouseId.get
Returns a list of active Ship From Locations (formerly known as warehouses) on the ShipStation account. Warehouses are now called "Ship From Locations" in the UI.


```js
shipstation.warehouses.warehouseId.get({
  "warehouseId": 0
}, context)
```

#### Input
* input `object`
  * warehouseId **required** `number`: A unique ID generated by ShipStation and assigned to each Ship From Location (formerly known as warehouse).

#### Output
*Output schema unknown*

### warehouses.warehouseId.put
Updates an existing Ship From Location (formerly known as warehouse). This call does not currently support partial updates. The entire resource must be provided in the body of the request. If a "returnAddress" object is not specified, your "originAddress" will be used as your "returnAddress".


```js
shipstation.warehouses.warehouseId.put({
  "warehouseId": 0
}, context)
```

#### Input
* input `object`
  * warehouseId **required** `number`: A unique ID generated by ShipStation and assigned to each Ship From Location (formerly known as warehouse).
  * body [Get_Update_WarehouseModel](#get_update_warehousemodel)

#### Output
*Output schema unknown*

### webhooks.get
Retrieves a list of registered webhooks for the account


```js
shipstation.webhooks.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### webhooks.subscribe.post
Subscribes to a specific type of webhook. If a ``store_id`` is passed in, the webhooks will only be triggered for that specific ``store_id``.
The ``event`` type that is passed in will determine what type of webhooks will be sent.

NOTE: Webhooks will be sent to the URL specified in the ``target_url``. The HTTP request will be sent via POST and will contain a [**webhook JSON object**](https://www.shipstation.com/developer-api/#/reference/model-webhook) in the body.

The body of this request to subscribe has the following attributes:

Name               |Data Type          |Description
-------------------|-------------------|-------------------
``target_url``  | string, required | The URL to send the webhooks to
``event`` | string, required | The type of webhook to subscribe to. Must contain one of the following values: ORDER_NOTIFY, ITEM_ORDER_NOTIFY, SHIP_NOTIFY, ITEM_SHIP_NOTIFY
``store_id`` | int, optional | If passed in, the webhooks will only be triggered for this ``store_id``
``friendly_name`` | string, optional | Display name for the webhook


```js
shipstation.webhooks.subscribe.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### webhooks.webhookId.delete
Unsubscribes from a certain webhook.


```js
shipstation.webhooks.webhookId.delete({
  "webhookId": 0
}, context)
```

#### Input
* input `object`
  * webhookId **required** `number`: A unique ID generated by ShipStation and assigned to each webhook.

#### Output
*Output schema unknown*



## Definitions

### Add_Funds


### Add_FundsModel


### Add_Tag_to_Order


### Assign_User_to_Order


### Create/Update_Multiple_Orders


### Create/Update_Order


### Create_Label_for_Order


### Create_Shipment_Label


### Create_Warehouse


### Customer


### CustomerModel


### Deactivate_Store


### Get/Delete_Order


### Get/Delete_OrderModel


### Get/Update_Store


### Get/Update_StoreModel


### Get/Update_Warehouse


### Get/Update_WarehouseModel


### Get/Update_a_Product


### Get/Update_a_ProductModel


### Get_Carrier


### Get_CarrierModel


### Get_Delete_Order


### Get_Delete_OrderModel


### Get_Rates


### Get_Store_Refresh_Status


### Get_Update_Store


### Get_Update_StoreModel


### Get_Update_Warehouse


### Get_Update_WarehouseModel


### Get_Update_a_Product


### Get_Update_a_ProductModel


### Hold_Order_Until


### List_Carriers


### List_CarriersModel


### List_Customers


### List_CustomersModel


### List_Fulfillments


### List_FulfillmentsModel


### List_Marketplaces


### List_Orders


### List_OrdersModel


### List_Orders_by_Tag


### List_Packages


### List_PackagesModel


### List_Products


### List_ProductsModel


### List_Services


### List_ServicesModel


### List_Shipments


### List_ShipmentsModel


### List_Stores


### List_Tags


### List_TagsModel


### List_Users


### List_UsersModel


### List_Warehouses


### List_Webhooks


### Mark_an_Order_as_Shipped


### Reactivate_Store


### Refresh_Store


### Register_Account


### Register_AccountModel


### Remove_Tag_from_Order


### Restore_Order_from_On_Hold


### Subscribe_to_Webhook


### Subscribe_to_WebhookModel


### Unassign_User_from_Order


### Unsubscribe_to_Webhook


### Void_Label



