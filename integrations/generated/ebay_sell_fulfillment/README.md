# @datafire/ebay_sell_fulfillment

Client library for Fulfillment

## Installation and Usage
```bash
npm install --save @datafire/ebay_sell_fulfillment
```
```js
let ebay_sell_fulfillment = require('@datafire/ebay_sell_fulfillment').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

ebay_sell_fulfillment.getOrders({}).then(data => {
  console.log(data);
})
```

## Description

Use the Fulfillment API to complete the process of packaging, addressing, handling, and shipping each order on behalf of the seller, in accordance with the payment method and timing specified at checkout.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_sell_fulfillment.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
ebay_sell_fulfillment.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### getOrders
Use this call to search for and retrieve one or more orders based on their creation date, last modification date, or fulfillment status using the filter parameter. You can alternatively specify a list of orders using the orderIds parameter. The returned Order objects contain information you can use to create and process fulfillments, including: Information about the buyer and seller Information about the order's line items The plans for packaging, addressing and shipping the order The status of payment, packaging, addressing, and shipping the order A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs Important: In this call, the cancelStatus.cancelRequests array is returned but is always empty. Use the getOrder call instead, which returns this array fully populated with information about any cancellation requests.


```js
ebay_sell_fulfillment.getOrders({}, context)
```

#### Input
* input `object`
  * filter `string`: One or more comma-separated criteria for narrowing down the collection of orders returned by this call. These criteria correspond to specific fields in the response payload. Multiple filter criteria combine to further restrict the results. Note: Currently, filter returns data from only the last 90 days. If the orderIds parameter is included in the request, the filter parameter will be ignored.The available criteria are as follows: creationdate The time period during which qualifying orders were created (the orders.creationDate field). In the URI, this is expressed as a starting timestamp, with or without an ending timestamp (in brackets). The timestamps are in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock.For example: creationdate:[2016-02-21T08:25:43.511Z..] identifies orders created on or after the given timestamp. creationdate:[2016-02-21T08:25:43.511Z..2016-04-21T08:25:43.511Z] identifies orders created between the given timestamps, inclusive. lastmodifieddate The time period during which qualifying orders were last modified (the orders.modifiedDate field). In the URI, this is expressed as a starting timestamp, with or without an ending timestamp (in brackets). The timestamps are in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock.For example: lastmodifieddate:[2016-05-15T08:25:43.511Z..] identifies orders modified on or after the given timestamp. lastmodifieddate:[2016-05-15T08:25:43.511Z..2016-05-31T08:25:43.511Z] identifies orders modified between the given timestamps, inclusive.Note: If creationdate and lastmodifieddate are both included, only creationdate is used. orderfulfillmentstatus The degree to which qualifying orders have been shipped (the orders.orderFulfillmentStatus field). In the URI, this is expressed as one of the following value combinations: orderfulfillmentstatus:{NOT_STARTED|IN_PROGRESS} specifies orders for which no shipping fulfillments have been started, plus orders for which at least one shipping fulfillment has been started but not completed. orderfulfillmentstatus:{FULFILLED|IN_PROGRESS} specifies orders for which all shipping fulfillments have been completed, plus orders for which at least one shipping fulfillment has been started but not completed.Note: The values NOT_STARTED, IN_PROGRESS, and FULFILLED can be used in various combinations, but only the combinations shown here are currently supported.Here is an example of a getOrders call using all of these filters: GET https://api.ebay.com/sell/v1/order? filter=creationdate:%5B2016-03-21T08:25:43.511Z..2016-04-21T08:25:43.511Z%5D, lastmodifieddate:%5B2016-05-15T08:25:43.511Z..%5D, orderfulfillmentstatus:%7BNOT_STARTED%7CIN_PROGRESS%7D Note: This call requires that certain special characters in the URI query string be percent-encoded: &nbsp;&nbsp;&nbsp;&nbsp;[ = %5B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] = %5D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ = %7B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| = %7C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} = %7D This query filter example uses these codes. For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/fulfillment/types/FilterField.html
  * limit `string`: The number of orders to return in the current result set. Use this parameter in conjunction with the offset parameter to control the pagination of the output. For example, if offset is set to 10 and limit is set to 10, the call retrieves orders 11 thru 20 from the resulting collection of orders. Note: This feature employs a zero-based list, where the first item in the list has an offset of 0. If the orderIds parameter is included in the request, this parameter will be ignored. Maximum: 1000 Default: 50
  * offset `string`: The first order to return based on its position in the collection of orders. Use this parameter in conjunction with the limit parameter to control the pagination of the output. For example, if offset is set to 10 and limit is set to 10, the call retrieves orders 11 thru 20 from the resulting collection of orders. Note: This feature employs a zero-based list, where the first item in the list has an offset of 0. If the orderIds parameter is included in the request, this parameter will be ignored. Default: 0 (zero)
  * orderIds `string`: A comma-separated list of the unique identifiers of the orders to retrieve (maximum 50). These values were originally generated by eBay as a result of the buyer's checkout process; for example, 170009092860-9849164007!140000000544476. These values are also returned in the orders.orderId field by invoking this call with filter parameters. Note: If the orderIds parameter is included in the request, all other query parameters will be ignored.

#### Output
* output [OrderSearchPagedCollection](#ordersearchpagedcollection)

### getOrder
Use this call to retrieve the contents of an order based on its unique identifier, orderId. This value was returned in the getOrders call's orders.orderId field when you searched for orders by creation date, modification date, or fulfillment status. The returned Order object contains information you can use to create and process fulfillments, including: Information about the buyer and seller Information about the order's line items The plans for packaging, addressing and shipping the order The status of payment, packaging, addressing, and shipping the order A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs


```js
ebay_sell_fulfillment.getOrder({
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: The unique identifier of the order. This value was returned by the getOrders call in the orders.orderId field; for example, 170009092860-9849164007!140000000544476.

#### Output
* output [Order](#order)

### getShippingFulfillments
Use this call to retrieve the contents of all fulfillments currently defined for a specified order based on the order's unique identifier, orderId. This value is returned in the getOrders call's members.orderId field when you search for orders by creation date or shipment status.


```js
ebay_sell_fulfillment.getShippingFulfillments({
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: The unique identifier of the order. This value was returned by the getOrders call in the orders.orderId field; for example, 170009092860-9849164007!140000000544476.

#### Output
* output [ShippingFulfillmentPagedCollection](#shippingfulfillmentpagedcollection)

### createShippingFulfillment
When you group an order's line items into one or more packages, each package requires a corresponding plan for handling, addressing, and shipping; this is a shipping fulfillment. For each package, execute this call once to generate a shipping fulfillment associated with that package. Note: A single line item in an order can consist of multiple units of a purchased item, and one unit can consist of multiple parts or components. Although these components might be provided by the manufacturer in separate packaging, the seller must include all components of a given line item in the same package.Before using this call for a given package, you must determine which line items are in the package. If the package has been shipped, you should provide the date of shipment in the request. If not provided, it will default to the current date and time.


```js
ebay_sell_fulfillment.createShippingFulfillment({
  "orderId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: The unique identifier of the order. This value was returned by the getOrders call in the orders.orderId field; for example, 170009092860-9849164007!140000000544476.
  * body **required** [ShippingFulfillmentDetails](#shippingfulfillmentdetails)

#### Output
* output `object`

### getShippingFulfillment
Use this call to retrieve the contents of a fulfillment based on its unique identifier, fulfillmentId (combined with the associated order's orderId). The fulfillmentId value was originally generated by the createShippingFulfillment call, and is returned by the getShippingFulfillments call in the members.fulfillmentId field.


```js
ebay_sell_fulfillment.getShippingFulfillment({
  "fulfillmentId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * fulfillmentId **required** `string`: The unique identifier of the fulfillment. This eBay-generated value was created by the Create Shipping Fulfillment call, and returned by the getShippingFulfillments call in the fulfillments.fulfillmentId field; for example, 9405509699937003457459.
  * orderId **required** `string`: The unique identifier of the order. This value was returned by the getOrders call in the orders.orderId field; for example, 170009092860-9849164007!140000000544476.

#### Output
* output [ShippingFulfillment](#shippingfulfillment)



## Definitions

### Address
* Address `object`: This type contains the details of a geographical address.
  * addressLine1 `string`: The first line of the street address.
  * addressLine2 `string`: The second line of the street address. This field can be used for additional address information, such as a suite or apartment number.
  * city `string`: The city of the address.
  * countryCode `string`: The country of the address, represented as two-letter ISO 3166-1 alpha-2 country code. For example, US represents the United States, and DE represents Germany. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/fulfillment/types/CountryCodeEnum.html'>eBay API documentation</a>
  * county `string`: The county (not the country) in which the address is located. Counties typically, but not always, contain multiple cities or towns.
  * postalCode `string`: The postal code (if any) of the address.
  * stateOrProvince `string`: The state or province within the country in which the address resides.

### Amount
* Amount `object`: This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
  * convertedFromCurrency `string`: A three-letter ISO 4217 code that indicates the currency of the amount in the convertedFromValue field. This value is required or returned only if currency conversion/localization is required, and represents the pre-conversion currency. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/fulfillment/types/CurrencyCodeEnum.html'>eBay API documentation</a>
  * convertedFromValue `string`: The monetary amount before any conversion is performed, in the currency specified by the convertedFromCurrency field. This value is required or returned only if currency conversion/localization is required. The value field contains the converted amount of this value, in the currency specified by the currency field.
  * currency `string`: A three-letter ISO 4217 code that indicates the currency of the amount in the value field. If currency conversion/localization is required, this is the post-conversion currency of the amount in the value field. Default: The currency of the authenticated user's country. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/fulfillment/types/CurrencyCodeEnum.html'>eBay API documentation</a>
  * value `string`: The monetary amount, in the currency specified by the currency field. If currency conversion/localization is required, this value is the converted amount, and the convertedFromValue field contains the amount in the original currency.

### AppliedPromotion
* AppliedPromotion `object`: This type contains information about a sales promotion or discount that is applied to a line item.
  * description `string`: A description of the applied promotion.
  * discountAmount [Amount](#amount)
  * promotionId `string`: An eBay-generated identifier for the promotion. This is the value generated by the Marketing API's Create Item Promotion call and returned as the resource identifier of the location code that accompanies the HTTP 201 status code. It is also returned by the Trading API's SetPromotionalSale call and in the PromotionalSaleID field.

### Buyer
* Buyer `object`: This type contains information about the buyer of an order.
  * username `string`: The buyer's eBay user name.

### CancelRequest
* CancelRequest `object`: This type contains information about a buyer request to cancel an order.
  * cancelCompletedDate `string`: The date and time that the order cancellation was completed, if applicable. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: YYYY-MM-DDTHH:MM:SS.SSSZ Example: 2015-08-04T19:09:02.768Z
  * cancelInitiator `string`: The party who made the initial cancellation request.
  * cancelReason `string`: The reason why the cancelInitiator initiated the cancellation request.
  * cancelRequestId `string`: The unique identifier of the order cancellation request.
  * cancelRequestState `string`: The current stage or condition of the cancellation request. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/fulfillment/types/CancelRequestStateEnum.html'>eBay API documentation</a>
  * cancelRequestedDate `string`: The date and time that the order cancellation was requested. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: YYYY-MM-DDTHH:MM:SS.SSSZ Example: 2015-08-04T19:09:02.768Z

### CancelStatus
* CancelStatus `object`: This type contains information about any requests that have been made to cancel an order.
  * cancelRequests `array`: Contains the details of one or more buyer requests to cancel the order. For the getOrders call: This array is returned but is always empty. For the getOrder call: This array is returned fully populated with information about any cancellation requests.
    * items [CancelRequest](#cancelrequest)
  * cancelState `string`: The state of the order with regard to cancellation. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/fulfillment/types/CancelStateEnum.html'>eBay API documentation</a>
  * cancelledDate `string`: The date and time the order was cancelled, if applicable. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: YYYY-MM-DDTHH:MM:SS.SSSZ Example: 2015-08-04T19:09:02.768Z

### Contact
* Contact `object`: This type contains contact information for an individual who represents (or is) a buyer or seller.
  * companyName `string`: The contact's company name.
  * contactAddress [Address](#address)
  * fullName `string`: The contact's full name.
  * primaryPhone [PhoneNumber](#phonenumber)

### DeliveryCost
* DeliveryCost `object`: This type contains a breakdown of all costs associated with the fulfillment of a line item.
  * importCharges [Amount](#amount)
  * shippingCost [Amount](#amount)
  * shippingIntermediationFee [Amount](#amount)

### Error
* Error `object`: This type contains a error or warning related to a call request. 
  * category `string`: The context or source of this error or warning.
  * domain `string`: The name of the domain containing the service or application. For example, sell is a domain.
  * errorId `integer`: A positive integer that uniquely identifies the specific error condition that occurred. Your application can use these values as error code identifiers in your customized error-handling algorithms.
  * inputRefIds `array`: A list of one or more specific request elements (if any) associated with the error or warning. The format of these strings depends on the request payload format. For JSON, use JSONPath notation.
    * items `string`
  * longMessage `string`: An expanded version of the message field. Maximum length: 200 characters
  * message `string`: A message about the error or warning which is device agnostic and readable by end users and application developers. It explains what the error or warning is, and how to fix it (in a general sense). If applicable, the value is localized to the end user's requested locale. Maximum length: 50 characters
  * outputRefIds `array`: A list of one or more specific response elements (if any) associated with the error or warning. The format of these strings depends on the request payload format. For JSON, use JSONPath notation.
    * items `string`
  * parameters `array`: Contains a list of name/value pairs that provide additional information concerning this error or warning. Each item in the list is an input parameter that contributed to the error or warning condition.
    * items [ErrorParameter](#errorparameter)
  * subdomain `string`: The name of the domain's subsystem or subdivision. For example, fulfillment is a subdomain in the sell domain.

### ErrorParameter
* ErrorParameter `object`: This type contains the name and value of an input parameter that contributed toa specific error or warning condition.
  * name `string`: The name of the parameter.
  * value `string`: The value of the parameter.

### FulfillmentStartInstruction
* FulfillmentStartInstruction `object`: This type contains a set of specifications for processing a fulfillment of an order, including the type of fulfillment, shipping carrier and service, addressing details, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order.
  * ebaySupportedFulfillment `boolean`: Returned only if true, whcih indicates that the fulfillment will be shipped via eBay's Global Shipping Program. For more information, see Managing Shipping.
  * finalDestinationAddress [Address](#address)
  * fulfillmentInstructionsType `string`: The method of fulfillment that will be used to deliver this set of line items (this package) to the buyer. This field will have a value of SHIP_TO if the ebaySupportedFulfillment field is returned with a value of true. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/fulfillment/types/FulfillmentInstructionsType.html'>eBay API documentation</a>
  * maxEstimatedDeliveryDate `string`: NOT returned if the value of the fulfillmentInstructionsType field is DIGITAL or PREPARE_FOR_PICKUP, or if the order has promotional free shipping. This is the estimated latest date that the fulfillment will be completed. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: YYYY-MM-DDTHH:MM:SS.SSSZ Example: 2015-08-04T19:09:02.768Z
  * minEstimatedDeliveryDate `string`: NOT returned if the value of the fulfillmentInstructionsType field is DIGITAL or PREPARE_FOR_PICKUP, or if the order has promotional free shipping. This is the estimated earliest date that the fulfillment will be completed. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: YYYY-MM-DDTHH:MM:SS.SSSZ Example: 2015-08-04T19:09:02.768Z
  * shippingStep [ShippingStep](#shippingstep)

### GiftDetails
* GiftDetails `object`: This type contains information about a line item that was purchased as a gift.
  * message `string`: A gift message from the buyer to the gift recipient.
  * recipientEmail `string`: The email address of the gift recipient.
  * senderName `string`: The name of the buyer to provide to the gift recipient.

### LineItem
* LineItem `object`: This type contains the details of a line item in an order. A line item consists of one or more units of a specific variation and version of a listed item that has been purchased.
  * appliedPromotions `array`: Contains information about one or more sales promotions or discounts applied to the line item.
    * items [AppliedPromotion](#appliedpromotion)
  * deliveryCost [DeliveryCost](#deliverycost)
  * discountedLineItemCost [Amount](#amount)
  * giftDetails [GiftDetails](#giftdetails)
  * legacyItemId `string`: The eBay-generated legacy listing item ID of the line item. This partially identifies the line item, but does not include the variation, version, or unit quantity.
  * legacyVariationId `string`: An eBay-generated string that uniquely identifies the combination of item variations that apply to this line item.
  * lineItemCost [Amount](#amount)
  * lineItemFulfillmentInstructions [LineItemFulfillmentInstructions](#lineitemfulfillmentinstructions)
  * lineItemFulfillmentStatus `string`: The degree to which fulfillment of the line item is complete. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/fulfillment/types/LineItemFulfillmentStatusEnum.html'>eBay API documentation</a>
  * lineItemId `string`: The globally unique eBay-generated identifier of the line item. Note: A single line item can consist of multiple units of a purchased item, and one unit can consist of multiple parts or components. Although these components might be provided by the manufacturer in separate packaging, the seller cannot distribute them among multiple shipping packages. Thus, each line item ID will appear in exactly one fulfillment.
  * listingMarketplaceId `string`: The eBay marketplace where the line item was listed. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/fulfillment/types/MarketplaceIdEnum.html'>eBay API documentation</a>
  * properties [LineItemProperties](#lineitemproperties)
  * purchaseMarketplaceId `string`: The eBay marketplace where the line item was purchased. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/fulfillment/types/MarketplaceIdEnum.html'>eBay API documentation</a>
  * quantity `integer`: The number of units of the line item in the order. These are represented as a group by a single lineItemId.
  * refunds `array`: This field is reserved for internal or future use.
    * items [LineItemRefund](#lineitemrefund)
  * sku `string`: Stock Keeping Unit. This is the seller's inventory reference identifier, which typically applies to a specific variation and version of the item.
  * soldFormat `string`: The eBay listing type of the line item. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/fulfillment/types/SoldFormatEnum.html'>eBay API documentation</a>
  * taxes `array`: Contains a list of taxes applied to the line item, if any.
    * items [Tax](#tax)
  * title `string`: The seller's listing title for the line item.
  * total [Amount](#amount)

### LineItemFulfillmentInstructions
* LineItemFulfillmentInstructions `object`: This type contains the specifications for processing the fulfillment of a line item, including the handling window and the delivery window. These fields provide guidance for <i>eBay Guaranteed Delivery</i> as well as for non-guaranteed delivery.
  * guaranteedDelivery `boolean`: A value of true indicates that the seller offered this line item with eBay Guaranteed Delivery, and the buyer purchased the line item with the Guaranteed Delivery option. Guaranteed Delivery is presented to the buyer for a given item listing based on the following criteria: The item is of a type, size, weight, and location defined by the seller as eligible for eBay Guaranteed Delivery in a shipping rate table. The seller is offering the item with eBay Guaranteed Delivery. The buyer is located in a destination region that can be shipped to within the delivery window of at least one shipping service category (e.g. One-day, Expedited, Standard, or Economy) for which eBay Guaranteed Delivery is offered by the seller for the item.Sellers who opt into handling time Guaranteed Delivery must complete handling for the line item before the time indicated by the shipByDate field. Sellers who opt into door-to-door Guaranteed Delivery must also ensure that the line item is delivered before the time specified by the maxEstimatedDeliveryDate field.
  * maxEstimatedDeliveryDate `string`: The estimated latest date and time that the buyer can expect to receive the line item. If the value of guaranteedDelivery is true, failure to deliver by this time will be counted in eBay Top Rated Seller calculations for sellers who opted into door-to-door Guaranteed Delivery. Note: This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: YYYY-MM-DDTHH:MM:SS.SSSZ Example: 2015-08-04T19:09:02.768Z
  * minEstimatedDeliveryDate `string`: The estimated earliest date and time that the buyer can expect to receive the line item. Note: This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: YYYY-MM-DDTHH:MM:SS.SSSZ Example: 2015-08-04T19:09:02.768Z
  * shipByDate `string`: The latest date and time by which this line item must be shipped. If the value of guaranteedDelivery is true, failure to ship by this time will be counted in eBay Top Rated Seller calculations for sellers who opted into handling time Guaranteed Delivery. Note: This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: YYYY-MM-DDTHH:MM:SS.SSSZ Example: 2015-08-04T19:09:02.768Z

### LineItemProperties
* LineItemProperties `object`: This type contains information about the eBay programs under which a line item was listed.
  * buyerProtection `boolean`: A value of true indicates that the line item is covered by eBay's Buyer Protection program.
  * fromBestOffer `boolean`: Note: This field is always returned, but its value is not currently reliable (always false). It will become significant in a future release.

### LineItemReference
* LineItemReference `object`: This type identifies a line item in an order.
  * lineItemId `string`: The globally unique eBay-generated identifier of the line item. Note: A single line item can consist of multiple units of a purchased item, and one unit can consist of multiple parts or components. Although these components might be provided by the manufacturer in separate packaging, the seller cannot distribute them among multiple shipping packages. Thus, each line item ID will appear in exactly one fulfillment.
  * quantity `integer`: This field is reserved for internal or future use.

### LineItemRefund
* LineItemRefund `object`: This type is reserved for internal or future use.
  * amount [Amount](#amount)
  * refundDate `string`: This field is reserved for internal or future use.
  * refundReferenceId `string`: This field is reserved for internal or future use.

### Order
* Order `object`: This type contains the details of an order, including information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status.
  * buyer [Buyer](#buyer)
  * buyerCheckoutNotes `string`: Comments about the order (if any) provided by the buyer at checkout.
  * cancelStatus [CancelStatus](#cancelstatus)
  * creationDate `string`: The date and time that the order was created. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: YYYY-MM-DDTHH:MM:SS.SSSZ Example: 2015-08-04T19:09:02.768Z
  * fulfillmentHrefs `array`: Contains a list of one or more hypertext references in the form of URLs. Each URL can be used to invoke the Get Shipping Fulfillment call to retrieve the details of each fulfillment, if any, that is associated with this order.
    * items `string`
  * fulfillmentStartInstructions `array`: Contains a list of one or more sets of specifications for fulfilling the order. Each set specifies the type of fulfillment, shipping carrier and service, addressing details, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order.
    * items [FulfillmentStartInstruction](#fulfillmentstartinstruction)
  * lastModifiedDate `string`: The date and time that the order was last modified.This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: YYYY-MM-DDTHH:MM:SS.SSSZ Example: 2015-08-04T19:09:02.768Z
  * lineItems `array`: Contains the details of one or more line items that comprise the order. A line item consists of one or more units of a specific variation and version of a listed item that has been purchased.
    * items [LineItem](#lineitem)
  * orderFulfillmentStatus `string`: The degree to which fulfillment of the order is complete. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/fulfillment/types/OrderFulfillmentStatus.html'>eBay API documentation</a>
  * orderId `string`: The unique identifier of the order. This value was originally generated by eBay as a result of the buyer's checkout process; for example, 170009092860-9849164007!140000000544476. Note: The value of this field is not formatted the same way as the value of the Trading API's OrderId field. Do not attempt to use this field's value in the Trading API.
  * orderPaymentStatus `string`: The current status of all monetary exchanges (payment by buyer and refund to buyer) for the order. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/fulfillment/types/OrderPaymentStatusEnum.html'>eBay API documentation</a>
  * paymentSummary [PaymentSummary](#paymentsummary)
  * pricingSummary [PricingSummary](#pricingsummary)
  * sellerId `string`: The eBay ID of the seller who sold the order.

### OrderRefund
* OrderRefund `object`: This type contains information about a refund issued for an order. This does not include line item level refunds.
  * amount [Amount](#amount)
  * refundDate `string`: The date and time that the refund was issued. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: YYYY-MM-DDTHH:MM:SS.SSSZ Example: 2015-08-04T19:09:02.768Z
  * refundReferenceId `string`: The eBay-generated identifier for the refund
  * refundStatus `string`: The degree of completion of a refund being made to the buyer. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/fulfillment/types/RefundStatusEnum.html'>eBay API documentation</a>

### OrderSearchPagedCollection
* OrderSearchPagedCollection `object`: This type contains the specifications for the collection of orders that match the search or filter criteria of a <b>getOrders</b> call. The collection is grouped into <i>result sets</i> (pages) of manageable size, and each execution of the call returns one result set. The <b>OrderSearchPagedCollection</b> fields provide the information necessary to navigate through all of these result sets, as well as the contents of the currently specified result set.
  * href `string`: The URI of the getOrders call request that produced this result set.
  * limit `integer`: The maximum number of orders returned in the current result set. Note: If this is the last or only result set in the collection, it may contain fewer orders. To determine the number of result sets in the collection, divide this into the value of total and round up to the next integer.Default: 50
  * next `string`: The getOrders call URI for the next result set. For example, the following URI returns records 41 thru 50 from the collection of orders: path/order?limit=10&amp;offset=40
  * offset `integer`: The distance (number of records) from the first order in the collection to the first order in this result set. In the request, you can use the offset parameter in conjunction with the limit parameter to control the pagination of the output. For example, if offset is set to 30 and limit is set to 10, the call retrieves orders 31 thru 40 from the resulting collection of orders. Note: This feature employs a zero-based list, where the first item in the list has an offset of 0.Default: 0 (zero)
  * orders `array`: Contains the array of orders in the current result set. The details of each order include information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status. The orders are sorted by orders.orderId.
    * items [Order](#order)
  * prev `string`: The getOrders call URI for the previous result set. For example, the following URI returns orders 21 thru 30 from the collection of orders: path/order?limit=10&amp;offset=20 Note: This feature employs a zero-based list, where the first order in the list has an offset of 0.
  * total `integer`: The total number of orders in the collection. Note: If no orders are found, this field is returned with a value of 0.
  * warnings `array`: Contains warnings related to this call request. This is usually empty.
    * items [Error](#error)

### Payment
* Payment `object`: Contains information about a payment made for an order.
  * amount [Amount](#amount)
  * paymentDate `string`: The date and time that the payment was received by the seller. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: YYYY-MM-DDTHH:MM:SS.SSSZ Example: 2015-08-04T19:09:02.768Z
  * paymentHolds `array`: Contains information about a hold (if any) placed on some or all of the payment, including the reason why the payment for the order is being held, the expected release date of the funds into the seller's account, the current state of the hold, and if the payment has been released, the actual release date. This container is returned only if a hold exists.
    * items [PaymentHold](#paymenthold)
  * paymentMethod `string`: The method by which the payment was made. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/fulfillment/types/PaymentMethodTypeEnum.html'>eBay API documentation</a>
  * paymentReferenceId `string`: Returned only if the value of paymentMethod is PAYPAL. This field contains the PayPal-generated transaction identifier.
  * paymentStatus `string`: The degree of completion of the payment. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/fulfillment/types/PaymentStatusEnum.html'>eBay API documentation</a>

### PaymentHold
* PaymentHold `object`: This type contains information about a hold placed on a payment to a seller for an order, including the reason why the buyer's payment for the order is being held, the expected release date of the funds into the seller's account, the current state of the hold, and the actual release date if the payment has been released, and possible actions the seller can take to expedite the payout of funds into their account.
  * expectedReleaseDate `string`: The date and time that the payment being held is expected to be released to the seller. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: YYYY-MM-DDTHH:MM:SS.SSSZ Example: 2015-08-04T19:09:02.768Z
  * holdAmount [Amount](#amount)
  * holdReason `string`: The reason that the payment is being held.
  * holdState `string`: The current stage or condition of the hold. Applicable values: HELD HELD_PENDING NOT_HELD RELEASE_CONFIRMED RELEASE_FAILED RELEASE_PENDING RELEASED
  * releaseDate `string`: The date and time that the payment being held was actually released to the seller. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: YYYY-MM-DDTHH:MM:SS.SSSZ Example: 2015-08-04T19:09:02.768Z
  * sellerActionsToRelease `array`: A list of actions the seller can take to release the hold on the payment.
    * items [SellerActionsToRelease](#selleractionstorelease)

### PaymentSummary
* PaymentSummary `object`: This type contains information about the various monetary exchanges that apply to the net balance due for the order.
  * payments `array`: Contains a list of payments made for the order, if any.
    * items [Payment](#payment)
  * refunds `array`: Contains a list of refunds issued for the order, if any. This does not include line item level refunds.
    * items [OrderRefund](#orderrefund)
  * totalDueSeller [Amount](#amount)

### PhoneNumber
* PhoneNumber `object`: This type contains a string field representing a telephone number.
  * phoneNumber `string`: The telephone number.

### PricingSummary
* PricingSummary `object`: This type contains a summary of costs and charges for an order, including price, adjustments, taxes, and delivery costs.
  * adjustment [Amount](#amount)
  * deliveryCost [Amount](#amount)
  * deliveryDiscount [Amount](#amount)
  * fee [Amount](#amount)
  * priceDiscountSubtotal [Amount](#amount)
  * priceSubtotal [Amount](#amount)
  * tax [Amount](#amount)
  * total [Amount](#amount)

### SellerActionsToRelease
* SellerActionsToRelease `object`: A possible action that a seller can take to release a hold placed on a payment intended for the seller.
  * sellerActionToRelease `string`: An action the seller can take to release the hold.

### ShippingFulfillment
* ShippingFulfillment `object`: This type contains the complete details of an existing fulfillment for an order.
  * fulfillmentId `string`: The unique identifier of the fulfillment; for example, 9405509699937003457459. This eBay-generated value was created by the Create Shipping Fulfillment call.
  * lineItems `array`: Contains a list of the line items to which the fulfillment applies.
    * items [LineItemReference](#lineitemreference)
  * shipmentTrackingNumber `string`: The tracking number provided by the shipping carrier for this fulfillment.
  * shippedDate `string`: The date and time that the fulfillment package was shipped. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: YYYY-MM-DDTHH:MM:SS.SSSZ Example: 2015-08-04T19:09:02.768Z
  * shippingCarrierCode `string`: The eBay code identifying the shipping carrier for this fulfillment. Note: The Trading API's ShippingCarrierCodeType enumeration contains the most current list of eBay shipping carrier codes and the countries served by each carrier. See ShippingCarrierCodeType.

### ShippingFulfillmentDetails
* ShippingFulfillmentDetails `object`: This type contains the details for creating a fulfillment for an order.
  * lineItems `array`: Contains a list of the line items (or their components) to which the fulfillment applies.
    * items [LineItemReference](#lineitemreference)
  * shippedDate `string`: The date and time that the fulfillment package was shipped. Default: The current date and time.
  * shippingCarrierCode `string`: The code identifying the shipping carrier for this fulfillment. This field and the trackingNumber field are mutually dependent. If you include one, you must also include the other. Note: The Trading API's ShippingCarrierCodeType enumeration contains the most current list of eBay shipping carrier codes and the countries served by each carrier. See ShippingCarrierCodeType.
  * trackingNumber `string`: The tracking number provided by the shipping carrier for this fulfillment. This field and the shippingCarrierCode field are mutually dependent. If you include one, you must also include the other. Note: If you include trackingNumber (and shippingCarrierCode) in the request, the resulting fulfillment's ID (returned in the HTTP location code) is the tracking number. If you do not include the tracking number, the resulting fulfillment ID will default to an arbitrary number such as 999.

### ShippingFulfillmentPagedCollection
* ShippingFulfillmentPagedCollection `object`: This type contains the specifications for the entire collection of shipping fulfillments that are associated with the order specified by a <b>getShippingFulfillments</b> call. The <b>fulfillments</b> container returns an array of all the fulfillments in the collection.
  * fulfillments `array`: Contains an array of all the fulfillments returned by this call. The fulfillments are sorted by fulfillments.fulfillmentId.
    * items [ShippingFulfillment](#shippingfulfillment)
  * total `integer`: The total number of fulfillments in the collection. Note: If no fulfillments are found for the order, this field is returned with a value of 0.
  * warnings `array`: Contains warnings related to this call request. This is usually empty.
    * items [Error](#error)

### ShippingStep
* ShippingStep `object`: This type contains shipping information for a fulfillment, including the carrier, the service, the shipment destination, and the Global Shipping Program reference ID. 
  * shipTo [Contact](#contact)
  * shipToReferenceId `string`: Returned only if the value of fulfillmentStartInstructions.ebaySupportedFulfillment is true, this field identifies this shipment for use with the Global Shipping Program. The international shipping provider uses the shipToReferenceId value as the primary reference to retrieve the relevant details about the buyer, the order, and the fulfillment, so the shipment can be completed. Sellers must include this value on the shipping label immediately above the street address of the international shipping provider. Example: &quot;Reference #1234567890123456&quot; Note: This value is the same as the ShipToAddress.ReferenceID value returned by the Trading API's GetOrders call.
  * shippingCarrierCode `string`: The code identifying the shipping carrier for this fulfillment. Note: The Trading API's ShippingCarrierCodeType enumeration contains the most current list of eBay shipping carrier codes and the countries served by each carrier. See ShippingCarrierCodeType.
  * shippingServiceCode `string`: The eBay code identifying the shipping service used for this fulfillment. Note: To get a complete list of available shipping services, applications should call the Trading API's GeteBayDetails call with a DetailName value of ShippingServiceDetails. To check for the shipping services available for a specific site, specify the site ID in the header. See also ShippingServiceCodeType.

### Tax
* Tax `object`: This type contains information about any tax applied to a line item.
  * amount [Amount](#amount)


