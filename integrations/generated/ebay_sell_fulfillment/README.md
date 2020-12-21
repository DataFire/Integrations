# @datafire/ebay_sell_fulfillment

Client library for Fulfillment API

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

.then(data => {
  console.log(data);
});
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
Use this call to search for and retrieve one or more orders based on their creation date, last modification date, or fulfillment status using the filter parameter. You can alternatively specify a list of orders using the orderIds parameter. Include the optional fieldGroups query parmeter set to TAX_BREAKDOWN to return a breakdown of the taxes and fees. The returned Order objects contain information you can use to create and process fulfillments, including: Information about the buyer and seller Information about the order's line items The plans for packaging, addressing and shipping the order The status of payment, packaging, addressing, and shipping the order A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs A summary of applied taxes and fees, and optionally a breakdown of each Important: In this call, the cancelStatus.cancelRequests array is returned but is always empty. Use the getOrder call instead, which returns this array fully populated with information about any cancellation requests.


```js
ebay_sell_fulfillment.getOrders({}, context)
```

#### Input
* input `object`
  * fieldGroups `string`: The response type associated with the order. The only presently supported value is TAX_BREAKDOWN. This type returns a breakdown of tax and fee values associated with the order.
  * filter `string`: One or more comma-separated criteria for narrowing down the collection of orders returned by this call. These criteria correspond to specific fields in the response payload. Multiple filter criteria combine to further restrict the results. Note: Currently, filter returns data from only the last 90 days. If the orderIds parameter is included in the request, the filter parameter will be ignored. The available criteria are as follows: creationdate The time period during which qualifying orders were created (the orders.creationDate field). In the URI, this is expressed as a starting timestamp, with or without an ending timestamp (in brackets). The timestamps are in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock.For example: creationdate:[2016-02-21T08:25:43.511Z..] identifies orders created on or after the given timestamp. creationdate:[2016-02-21T08:25:43.511Z..2016-04-21T08:25:43.511Z] identifies orders created between the given timestamps, inclusive. lastmodifieddate The time period during which qualifying orders were last modified (the orders.modifiedDate field). In the URI, this is expressed as a starting timestamp, with or without an ending timestamp (in brackets). The timestamps are in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock.For example: lastmodifieddate:[2016-05-15T08:25:43.511Z..] identifies orders modified on or after the given timestamp. lastmodifieddate:[2016-05-15T08:25:43.511Z..2016-05-31T08:25:43.511Z] identifies orders modified between the given timestamps, inclusive. Note: If creationdate and lastmodifieddate are both included, only creationdate is used. orderfulfillmentstatus The degree to which qualifying orders have been shipped (the orders.orderFulfillmentStatus field). In the URI, this is expressed as one of the following value combinations: orderfulfillmentstatus:{NOT_STARTED|IN_PROGRESS} specifies orders for which no shipping fulfillments have been started, plus orders for which at least one shipping fulfillment has been started but not completed. orderfulfillmentstatus:{FULFILLED|IN_PROGRESS} specifies orders for which all shipping fulfillments have been completed, plus orders for which at least one shipping fulfillment has been started but not completed. Note: The values NOT_STARTED, IN_PROGRESS, and FULFILLED can be used in various combinations, but only the combinations shown here are currently supported. Here is an example of a getOrders call using all of these filters: GET https://api.ebay.com/sell/v1/order? filter=creationdate:%5B2016-03-21T08:25:43.511Z..2016-04-21T08:25:43.511Z%5D, lastmodifieddate:%5B2016-05-15T08:25:43.511Z..%5D, orderfulfillmentstatus:%7BNOT_STARTED%7CIN_PROGRESS%7D Note: This call requires that certain special characters in the URI query string be percent-encoded: &nbsp;&nbsp;&nbsp;&nbsp;[ = %5B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] = %5D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ = %7B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| = %7C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} = %7D This query filter example uses these codes. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/fulfillment/types/api:FilterField
  * limit `string`: The number of orders to return per page of the result set. Use this parameter in conjunction with the offset parameter to control the pagination of the output. For example, if offset is set to 10 and limit is set to 10, the call retrieves orders 11 thru 20 from the result set. Note: This feature employs a zero-based list, where the first item in the list has an offset of 0. If the orderIds parameter is included in the request, this parameter will be ignored. Maximum: 1000 Default: 50
  * offset `string`: Specifies the number of orders to skip in the result set before returning the first order in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. Default: 0
  * orderIds `string`: A comma-separated list of the unique identifiers of the orders to retrieve (maximum 50). If one or more order ID values are specified through the orderIds query parameter, all other query parameters will be ignored. Note: A new order ID format was introduced to all eBay APIs (legacy and REST) in June 2019. In REST APIs that return Order IDs, including the Fulfillment API, all order IDs are returned in the new format, but the getOrders method will accept both the legacy and new format order ID. The new format is a non-parsable string, globally unique across all eBay marketplaces, and consistent for both single line item and multiple line item orders. These order identifiers will be automatically generated after buyer payment, and unlike in the past, instead of just being known and exposed to the seller, these unique order identifiers will also be known and used/referenced by the buyer and eBay customer support.

#### Output
* output [OrderSearchPagedCollection](#ordersearchpagedcollection)

### getOrder
Use this call to retrieve the contents of an order based on its unique identifier, orderId. This value was returned in the getOrders call's orders.orderId field when you searched for orders by creation date, modification date, or fulfillment status. Include the optional fieldGroups query parmeter set to TAX_BREAKDOWN to return a breakdown of the taxes and fees. The returned Order object contains information you can use to create and process fulfillments, including: Information about the buyer and seller Information about the order's line items The plans for packaging, addressing and shipping the order The status of payment, packaging, addressing, and shipping the order A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs A summary of applied taxes and fees, and optionally a breakdown of each


```js
ebay_sell_fulfillment.getOrder({
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * fieldGroups `string`: The response type associated with the order. The only presently supported value is TAX_BREAKDOWN. This type returns a breakdown of tax and fee values associated with the order.
  * orderId **required** `string`: The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the getOrders method in the orders.orderId field. Note: A new order ID format was introduced to all eBay APIs (legacy and REST) in June 2019. In REST APIs that return Order IDs, including the Fulfillment API, all order IDs are returned in the new format, but the getOrder method will accept both the legacy and new format order ID. The new format is a non-parsable string, globally unique across all eBay marketplaces, and consistent for both single line item and multiple line item orders. These order identifiers will be automatically generated after buyer payment, and unlike in the past, instead of just being known and exposed to the seller, these unique order identifiers will also be known and used/referenced by the buyer and eBay customer support.

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
  * orderId **required** `string`: The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the getOrders method in the orders.orderId field. Note: A new order ID format was introduced to all eBay APIs (legacy and REST) in June 2019. In REST APIs that return Order IDs, including the Fulfillment API, all order IDs are returned in the new format, but the getShippingFulfillments method will accept both the legacy and new format order ID. The new format is a non-parsable string, globally unique across all eBay marketplaces, and consistent for both single line item and multiple line item orders. These order identifiers will be automatically generated after buyer payment, and unlike in the past, instead of just being known and exposed to the seller, these unique order identifiers will also be known and used/referenced by the buyer and eBay customer support.

#### Output
* output [ShippingFulfillmentPagedCollection](#shippingfulfillmentpagedcollection)

### createShippingFulfillment
When you group an order's line items into one or more packages, each package requires a corresponding plan for handling, addressing, and shipping; this is a shipping fulfillment. For each package, execute this call once to generate a shipping fulfillment associated with that package. Note: A single line item in an order can consist of multiple units of a purchased item, and one unit can consist of multiple parts or components. Although these components might be provided by the manufacturer in separate packaging, the seller must include all components of a given line item in the same package. Before using this call for a given package, you must determine which line items are in the package. If the package has been shipped, you should provide the date of shipment in the request. If not provided, it will default to the current date and time.


```js
ebay_sell_fulfillment.createShippingFulfillment({
  "orderId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the getOrders method in the orders.orderId field. Note: A new order ID format was introduced to all eBay APIs (legacy and REST) in June 2019. In REST APIs that return Order IDs, including the Fulfillment API, all order IDs are returned in the new format, but the createShippingFulfillment method will accept both the legacy and new format order ID. The new format is a non-parsable string, globally unique across all eBay marketplaces, and consistent for both single line item and multiple line item orders. These order identifiers will be automatically generated after buyer payment, and unlike in the past, instead of just being known and exposed to the seller, these unique order identifiers will also be known and used/referenced by the buyer and eBay customer support.
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
  * orderId **required** `string`: The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the getOrders method in the orders.orderId field. Note: A new order ID format was introduced to all eBay APIs (legacy and REST) in June 2019. In REST APIs that return Order IDs, including the Fulfillment API, all order IDs are returned in the new format, but the getShippingFulfillment method will accept both the legacy and new format order ID. The new format is a non-parsable string, globally unique across all eBay marketplaces, and consistent for both single line item and multiple line item orders. These order identifiers will be automatically generated after buyer payment, and unlike in the past, instead of just being known and exposed to the seller, these unique order identifiers will also be known and used/referenced by the buyer and eBay customer support.

#### Output
* output [ShippingFulfillment](#shippingfulfillment)

### issueRefund
This method allows a seller (opted in to eBay Managed Payments) to issue a full or partial refund to a buyer for an order. Full or partial refunds can be issued at the order level or line item level. The refunds issued through this method are processed asynchronously, so the refund will not show as 'Refunded' right away. A seller will have to make a subsequent getOrder call to check the status of the refund. The status of an order refund can be found in the paymentSummary.refunds.refundStatus field of the getOrder response. Note: eBay Managed Payments is currently only available to a limited number of US sellers, but this program is scheduled to become available to more sellers throughout 2019 and beyond.


```js
ebay_sell_fulfillment.issueRefund({
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * order_id **required** `string`: The unique identifier of the order. Order IDs are returned in the getOrders method (and GetOrders call of Trading API). The issueRefund method supports the legacy API Order IDs and REST API order IDs. Note: In the Trading API (and other legacy APIs), Order IDs are transitioning to a new format. The new format is a non-parsable string, globally unique across all eBay marketplaces, and consistent for both single line item and multiple line item orders. These order identifiers will be automatically generated after buyer payment, and unlike in the past, instead of just being known and exposed to the seller, these unique order identifiers will also be known and used/referenced by the buyer and eBay customer support. For developers and sellers who are already integrated with the Trading API's order management calls, this change shouldn't impact your integration unless you parse the existing order identifiers (e.g., OrderID or OrderLineItemID), or otherwise infer meaning from the format (e.g., differentiating between a single line item order versus a multiple line item order). Because we realize that some integrations may have logic that is dependent upon the identifier format, eBay is rolling out the Trading API change with version control to support a transition period of approximately 9 months before applications must switch to the new format completely. See the OrderID field description in the GetOrders call for more details and requirements on transitioning to the new Order ID format.
  * body [IssueRefundRequest](#issuerefundrequest)

#### Output
* output [Refund](#refund)

### getPaymentDispute
This method retrieves detailed information on a specific payment dispute. The payment dispute identifier is passed in as path parameter at the end of the call URI. Below is a summary of the information that is retrieved: Current status of payment dispute Amount of the payment dispute Reason the payment dispute was opened Order and line items associated with the payment dispute Seller response options if an action is currently required on the payment dispute Details on the results of the payment dispute if it has been closed Details on any evidence that was provided by the seller to fight the payment dispute


```js
ebay_sell_fulfillment.getPaymentDispute({
  "payment_dispute_id": ""
}, context)
```

#### Input
* input `object`
  * payment_dispute_id **required** `string`: This is the unique identifier of the payment dispute. This path parameter must be passed in at the end of the call URI to identify the payment dispute to retrieve. This identifier is automatically created by eBay once the payment dispute comes into the eBay managed payments system. The unique identifier for payment disputes is returned in the paymentDisputeId field in the getPaymentDisputeSummaries response.

#### Output
* output [PaymentDispute](#paymentdispute)

### acceptPaymentDispute
This method is used if the seller wishes to accept a payment dispute. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the getPaymentDisputeSummaries method. The revision field in the request payload is required, and the returnAddress field should be supplied if the seller is expecting the buyer to return the item. See the Request Payload section for more information on theste fields.


```js
ebay_sell_fulfillment.acceptPaymentDispute({
  "payment_dispute_id": ""
}, context)
```

#### Input
* input `object`
  * payment_dispute_id **required** `string`: This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to accept. This identifier is automatically created by eBay once the payment dispute comes into the eBay managed payments system. The unique identifier for payment disputes is returned in the paymentDisputeId field in the getPaymentDisputeSummaries response. This path parameter is required, and the actual identifier value is passed in right after the payment_dispute resource. See the Resource URI above.
  * body [AcceptPaymentDisputeRequest](#acceptpaymentdisputerequest)

#### Output
*Output schema unknown*

### getActivities
This method retrieve a log of activity for a payment dispute. The identifier of the payment dispute is passed in as a path parameter. The output includes a timestamp for each action of the payment dispute, from creation to resolution, and all steps in between.


```js
ebay_sell_fulfillment.getActivities({
  "payment_dispute_id": ""
}, context)
```

#### Input
* input `object`
  * payment_dispute_id **required** `string`: This is the unique identifier of the payment dispute. This path parameter must be passed in at the end of the call URI to identify the payment dispute for which the user wishes to see all activity. This identifier is automatically created by eBay once the payment dispute comes into the eBay managed payments system. The unique identifier for payment disputes is returned in the paymentDisputeId field in the getPaymentDisputeSummaries response. This path parameter is required, and the actual identifier value is passed in right after the payment_dispute resource. See the Resource URI above.

#### Output
* output [PaymentDisputeActivityHistory](#paymentdisputeactivityhistory)

### addEvidence
This method is used by the seller to add one or more evidence files to address a payment dispute initiated by the buyer. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the getPaymentDisputeSummaries method. Note: All evidence files should be uploaded using addEvidence and updateEvidence before the seller decides to contest the payment dispute. Once the seller has officially contested the dispute (using contestPaymentDispute or through My eBay), the addEvidence and updateEvidence methods can no longer be used. In the evidenceRequests array of the getPaymentDispute response, eBay prompts the seller with the type of evidence file(s) that will be needed to contest the payment dispute. The file(s) to add are identified through the files array in the request payload. Adding one or more new evidence files for a payment dispute triggers the creation of an evidence file, and the unique identifier for the new evidence file is automatically generated and returned in the evidenceId field of the addEvidence response payload upon a successful call. The type of evidence being added should be specified in the evidenceType field. All files being added (if more than one) should correspond to this evidence type. Upon a successful call, an evidenceId value is returned in the response. This indicates that a new evidence set has been created for the payment dispute, and this evidence set includes the evidence file(s) that were passed in to the fileId array. The evidenceId value will be needed if the seller wishes to add to the evidence set by using the updateEvidence method, or if they want to retrieve a specific evidence file within the evidence set by using the fetchEvidenceContent method.


```js
ebay_sell_fulfillment.addEvidence({
  "payment_dispute_id": ""
}, context)
```

#### Input
* input `object`
  * payment_dispute_id **required** `string`: This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to add evidence for a contested payment dispute. This identifier is automatically created by eBay once the payment dispute comes into the eBay managed payments system. The unique identifier for payment disputes is returned in the paymentDisputeId field in the getPaymentDisputeSummaries response. This path parameter is required, and the actual identifier value is passed in right after the payment_dispute resource. See the Resource URI above.
  * body [AddEvidencePaymentDisputeRequest](#addevidencepaymentdisputerequest)

#### Output
* output [AddEvidencePaymentDisputeResponse](#addevidencepaymentdisputeresponse)

### contestPaymentDispute
This method is used if the seller wishes to contest a payment dispute initiated by the buyer. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the getPaymentDisputeSummaries method. Note: Before contesting a payment dispute, the seller must upload all evidence files using the addEvidence and updateEvidence methods. Once the seller has officially contested the dispute (using contestPaymentDispute), the addEvidence and updateEvidence methods can no longer be used. In the evidenceRequests array of the getPaymentDispute response, eBay prompts the seller with the type of evidence file(s) that will be needed to contest the payment dispute. If a seller decides to contest a payment dispute, that seller should be prepared to provide evidential documents such as proof of delivery, proof of authentication, or other documents. The type of evidential documents that the seller will provide will depend on why the buyer initiated the payment dispute. The revision field in the request payload is required, and the returnAddress field should be supplied if the seller is expecting the buyer to return the item. See the Request Payload section for more information on theste fields.


```js
ebay_sell_fulfillment.contestPaymentDispute({
  "payment_dispute_id": ""
}, context)
```

#### Input
* input `object`
  * payment_dispute_id **required** `string`: This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to contest. This identifier is automatically created by eBay once the payment dispute comes into the eBay managed payments system. The unique identifier for payment disputes is returned in the paymentDisputeId field in the getPaymentDisputeSummaries response. This path parameter is required, and the actual identifier value is passed in right after the payment_dispute resource. See the Resource URI above.
  * body [ContestPaymentDisputeRequest](#contestpaymentdisputerequest)

#### Output
*Output schema unknown*

### fetchEvidenceContent
This call retrieves a specific evidence file for a payment dispute. The following three identifying parameters are needed in the call URI: payment_dispute_id: the identifier of the payment dispute. The identifier of each payment dispute is returned in the getPaymentDisputeSummaries response. evidence_id: the identifier of the evidential file set. The identifier of an evidential file set for a payment dispute is returned under the evidence array in the getPaymentDispute response. file_id: the identifier of an evidential file. This file must belong to the evidential file set identified through the evidence_id query parameter. The identifier of each evidential file is returned under the evidence.files array in the getPaymentDispute response. An actual binary file is returned if the call is successful. An error will occur if any of three identifiers are invalid.


```js
ebay_sell_fulfillment.fetchEvidenceContent({
  "payment_dispute_id": "",
  "evidence_id": "",
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * payment_dispute_id **required** `string`: The identifier of the payment dispute. The identifier of each payment dispute is returned in the getPaymentDisputeSummaries response. This identifier is passed in as a path parameter at the end of the call URI.
  * evidence_id **required** `string`: The identifier of the evidential file set. The identifier of an evidential file set for a payment dispute is returned under the evidence array in the getPaymentDispute response. Below is an example of the syntax to use for this query parameter: evidence_id=12345678
  * file_id **required** `string`: The identifier of an evidential file. This file must belong to the evidential file set identified through the evidence_id query parameter. The identifier of each evidential file is returned under the evidence.files array in the getPaymentDispute response. Below is an example of the syntax to use for this query parameter: file_id=12345678

#### Output
* output `array`
  * items `string`

### updateEvidence
This method is used by the seller to update an existing evidence set for a payment dispute with one or more evidence files. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the getPaymentDisputeSummaries method. Note: All evidence files should be uploaded using addEvidence and updateEvidence before the seller decides to contest the payment dispute. Once the seller has officially contested the dispute (using contestPaymentDispute or through My eBay), the addEvidence and updateEvidence methods can no longer be used. In the evidenceRequests array of the getPaymentDispute response, eBay prompts the seller with the type of evidence file(s) that will be needed to contest the payment dispute. The unique identifier of the evidence set to update is specified through the evidenceId field, and the file(s) to add are identified through the files array in the request payload. The unique identifier for an evidence file is automatically generated and returned in the fileId field of the uploadEvidence response payload upon a successful call. Sellers must make sure to capture the fileId value for each evidence file that is uploaded with the uploadEvidence method. The type of evidence being added should be specified in the evidenceType field. All files being added (if more than one) should correspond to this evidence type. Upon a successful call, an http status code of 204 Success is returned. There is no response payload unless an error occurs. To verify that a new file is a part of the evidence set, the seller can use the fetchEvidenceContent method, passing in the proper evidenceId and fileId values.


```js
ebay_sell_fulfillment.updateEvidence({
  "payment_dispute_id": ""
}, context)
```

#### Input
* input `object`
  * payment_dispute_id **required** `string`: This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to update the evidence set for a contested payment dispute. This identifier is automatically created by eBay once the payment dispute comes into the eBay managed payments system. The unique identifier for payment disputes is returned in the paymentDisputeId field in the getPaymentDisputeSummaries response. This path parameter is required, and the actual identifier value is passed in right after the payment_dispute resource. See the Resource URI above.
  * body [UpdateEvidencePaymentDisputeRequest](#updateevidencepaymentdisputerequest)

#### Output
*Output schema unknown*

### uploadEvidenceFile
This method is used to upload an evidence file for a contested payment dispute. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the getPaymentDisputeSummaries method. The uploadEvidenceFile only uploads an encrypted, binary image file (using multipart/form-data HTTP request header), and does not have a request payload. The three image formats supported at this time are .JPEG, .JPG, and .PNG. Once the file is successfully uploaded, the seller will need to grab the fileId value in the response payload to add this file to a new evidence set using the addEvidence method, or to add this file to an existing evidence set using the updateEvidence method.


```js
ebay_sell_fulfillment.uploadEvidenceFile({
  "payment_dispute_id": ""
}, context)
```

#### Input
* input `object`
  * payment_dispute_id **required** `string`: This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to upload an evidence file. This identifier is automatically created by eBay once the payment dispute comes into the eBay managed payments system. The unique identifier for payment disputes is returned in the paymentDisputeId field in the getPaymentDisputeSummaries response. This path parameter is required, and the actual identifier value is passed in right after the payment_dispute resource. See the Resource URI above.

#### Output
* output [FileEvidence](#fileevidence)

### getPaymentDisputeSummaries
This method is used retrieve one or more payment disputes filed against the seller. These payment disputes can be open or recently closed. The following filter types are available in the request payload to control the payment disputes that are returned: Dispute filed against a specific order (order_id parameter is used) Dispute(s) filed by a specific buyer (buyer_username parameter is used) Dispute(s) filed within a specific date range (open_date_from and/or open_date_to parameters are used) Disputes in a specific state (payment_dispute_status parameter is used)More than one of these filter types can be used together. See the request payload request fields for more information about how each filter is used. If none of the filters are used, all open and recently closed payment disputes are returned. Pagination is also available. See the limit and offset fields for more information on how pagination is used for this method.


```js
ebay_sell_fulfillment.getPaymentDisputeSummaries({}, context)
```

#### Input
* input `object`
  * order_id `string`: This filter is used if the seller wishes to retrieve one or more payment disputes filed against a specific order. It is possible that there can be more than one dispute filed against an order if the order has multiple line items. If this filter is used, any other filters are ignored. Note: The order identifier passed into this field must be an Order ID in the new format. The legacy APIs still support the old and new order ID format to identify orders, but only the new order ID format is supported in REST-based APIs. eBay rolled out a new Order ID format in June 2019.
  * buyer_username `string`: This filter is used if the seller wishes to retrieve one or more payment disputes opened by a specific seller. The string that is passed in to this query parameter is the eBay user ID of the buyer.
  * open_date_from `string`: The open_date_from and/or open_date_to date filters are used if the seller wishes to retrieve payment disputes opened within a specific date range. A maximum date range that may be set with the open_date_from and/or open_date_to filters is 90 days. These date filters use the ISO-8601 24-hour date and time format, and time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The open_date_from field sets the beginning date of the date range, and can be set as far back as 18 months from the present time. If a open_date_from field is used, but a open_date_to field is not used, the open_date_to value will default to 90 days after the date specified in the open_date_from field, or to the present time if less than 90 days in the past. The ISO-8601 format looks like this: yyyy-MM-ddThh:mm.ss.sssZ. An example would be 2019-08-04T19:09:02.768Z.
  * open_date_to `string`: The open_date_from and/or open_date_to date filters are used if the seller wishes to retrieve payment disputes opened within a specific date range. A maximum date range that may be set with the open_date_from and/or open_date_to filters is 90 days. These date filters use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The open_date_to field sets the ending date of the date range, and can be set up to 90 days from the date set in the open_date_from field. The ISO-8601 format looks like this: yyyy-MM-ddThh:mm.ss.sssZ. An example would be 2019-08-04T19:09:02.768Z.
  * payment_dispute_status `string`: This filter is used if the seller wishes to only retrieve payment disputes in a specific state. More than one value can be specified. If no payment_dispute_status filter is used, payment disputes in all states are returned in the response. See DisputeStateEnum type for supported values.
  * limit `string`: The value passed in this query parameter sets the maximum number of payment disputes to return per page of data. The value passed in this field should be an integer from 1 to 200. If this query parameter is not set, up to 200 records will be returned on each page of results. Min: 1; Max: 200; Default: 200
  * offset `string`: This field is used to specify the number of records to skip in the result set before returning the first payment dispute in the paginated response. A zero-based index is used, so if you set the offset value to 0 (default value), the first payment dispute in the result set appears at the top of the response. Combine offset with the limit parameter to control the payment disputes returned in the response. For example, if you supply an offset value of 0 and a limit value of 10, the response will contain the first 10 payment disputes from the result set that matches the input criteria. If you supply an offset value of 10 and a limit value of 20, the response will contain payment disputes 11-30 from the result set that matches the input criteria. Min: 0; Max: total number of payment disputes - 1; Default: 0

#### Output
* output [DisputeSummaryResponse](#disputesummaryresponse)



## Definitions

### AcceptPaymentDisputeRequest
* AcceptPaymentDisputeRequest `object`: This type is used by base request of the acceptPaymentDispute method.
  * returnAddress [ReturnAddress](#returnaddress)
  * revision `integer`: This integer value indicates the revision number of the payment dispute. This field is required. The current revision number for a payment dispute can be retrieved with the getPaymentDispute method. Each time an action is taken against a payment dispute, this integer value increases by 1.

### AddEvidencePaymentDisputeRequest
* AddEvidencePaymentDisputeRequest `object`: This type is used by the request payload of the addEvidence method. The addEvidence method is used to create a new evidence set against a payment dispute with one or more evidence files.
  * evidenceType `string`: This field is used to indicate the type of evidence being provided through one or more evidence files. All evidence files (if more than one) should be associated with the evidence type passed in this field. See the EvidenceTypeEnum type for the supported evidence types. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a>
  * files `array`: This array is used to specify one or more evidence files that will become part of a new evidence set associated with a payment dispute. At least one evidence file must be specified in the files array. The unique identifier of an evidence file is returned in the response payload of the uploadEvidence method.
    * items [FileEvidence](#fileevidence)
  * lineItems `array`: This required array identifies the order line item(s) for which the evidence file(s) will be applicable. Both the itemId and lineItemID fields are needed to identify each order line item, and both of these values are returned under the evidenceRequests.lineItems array in the getPaymentDispute response.
    * items [OrderLineItems](#orderlineitems)

### AddEvidencePaymentDisputeResponse
* AddEvidencePaymentDisputeResponse `object`: This type is used by the response payload of the addEvidence method. Its only field is an unique identifier of an evidence set.
  * evidenceId `string`: The value returned in this field is the unique identifier of the newly-created evidence set. Upon a successful call, this value is automatically genererated. This new evidence set for the payment dispute includes the evidence file(s) that were passed in to the fileId array in the request payload. The evidenceId value will be needed if the seller wishes to add to the evidence set by using the updateEvidence method, or if they want to retrieve a specific evidence file within the evidence set by using the fetchEvidenceContent method.

### Address
* Address `object`: This type contains the details of a geographical address.
  * addressLine1 `string`: The first line of the street address.
  * addressLine2 `string`: The second line of the street address. This field can be used for additional address information, such as a suite or apartment number. This field will be returned if defined for the shipping address.
  * city `string`: The city of the shipping destination.
  * country `string`: The country of the shipping destination, represented as a two-letter ISO 3166-1 alpha-2 country code. For example, US represents the United States, and DE represents Germany. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a>
  * county `string`: The county of the shipping destination. Counties typically, but not always, contain multiple cities or towns. This field is returned if known/available.
  * postalCode `string`: The postal code of the shipping destination. Usually referred to as Zip codes in the US. Most countries have postal codes, but not all. The postal code will be returned if applicable.
  * stateOrProvince `string`: The state or province of the shipping destination. Most countries have states or provinces, but not all. The state or province will be returned if applicable.

### Amount
* Amount `object`: This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
  * convertedFromCurrency `string`: A three-letter ISO 4217 code that indicates the currency of the amount in the convertedFromValue field. This value is required or returned only if currency conversion/localization is required, and represents the pre-conversion currency. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a>
  * convertedFromValue `string`: The monetary amount before any conversion is performed, in the currency specified by the convertedFromCurrency field. This value is required or returned only if currency conversion/localization is required. The value field contains the converted amount of this value, in the currency specified by the currency field.
  * currency `string`: A three-letter ISO 4217 code that indicates the currency of the amount in the value field. If currency conversion/localization is required, this is the post-conversion currency of the amount in the value field. Default: The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a>
  * value `string`: The monetary amount, in the currency specified by the currency field. If currency conversion/localization is required, this value is the converted amount, and the convertedFromValue field contains the amount in the original currency. Required in the amount type.

### AppliedPromotion
* AppliedPromotion `object`: This type contains information about a sales promotion that is applied to a line item.
  * description `string`: A description of the applied sales promotion.
  * discountAmount [Amount](#amount)
  * promotionId `string`: An eBay-generated unique identifier of the sales promotion. Multiple types of sales promotions are available to eBay Store owners, including order size/volume discounts, shipping discounts, special coupons, and price markdowns. Sales promotions can be managed through the Marketing tab of Seller Hub in My eBay, or by using the Trading API's SetPromotionalSale call or the Marketing API's createItemPromotion method.

### Buyer
* Buyer `object`: This type contains information about the order's buyer.
  * taxAddress [TaxAddress](#taxaddress)
  * taxIdentifier [TaxIdentifier](#taxidentifier)
  * username `string`: The buyer's eBay user ID.

### CancelRequest
* CancelRequest `object`: This type contains information about a buyer request to cancel an order.
  * cancelCompletedDate `string`: The date and time that the order cancellation was completed, if applicable. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the cancellation request has actually been approved by the seller. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2015-08-04T19:09:02.768Z
  * cancelInitiator `string`: This string value indicates the party who made the initial cancellation request. Typically, either the 'Buyer' or 'Seller'. If a cancellation request has been made, this field should be returned.
  * cancelReason `string`: The reason why the cancelInitiator initiated the cancellation request. Cancellation reasons for a buyer might include 'order placed by mistake' or 'order won't arrive in time'. For a seller, a typical cancellation reason is 'out of stock'. If a cancellation request has been made, this field should be returned.
  * cancelRequestId `string`: The unique identifier of the order cancellation request. This field is returned for each cancellation request.
  * cancelRequestState `string`: The current stage or condition of the cancellation request. This field is returned for each cancellation request. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:CancelRequestStateEnum'>eBay API documentation</a>
  * cancelRequestedDate `string`: The date and time that the order cancellation was requested. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is returned for each cancellation request. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2015-08-04T19:09:02.768Z

### CancelStatus
* CancelStatus `object`: This type contains information about any requests that have been made to cancel an order.
  * cancelRequests `array`: This array contains details of one or more buyer requests to cancel the order. For the getOrders call: This array is returned but is always empty. For the getOrder call: This array is returned fully populated with information about any cancellation requests.
    * items [CancelRequest](#cancelrequest)
  * cancelState `string`: The state of the order with regard to cancellation. This field is always returned, and if there are no cancellation requests, a value of NONE_REQUESTED is returned. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:CancelStateEnum'>eBay API documentation</a>
  * cancelledDate `string`: The date and time the order was cancelled, if applicable. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2015-08-04T19:09:02.768Z

### ContestPaymentDisputeRequest
* ContestPaymentDisputeRequest `object`: This type is used by the request payload of the contestPaymentDispute method.
  * returnAddress [ReturnAddress](#returnaddress)
  * revision `integer`: This integer value indicates the revision number of the payment dispute. This field is required. The current revision number for a payment dispute can be retrieved with the getPaymentDispute method. Each time an action is taken against a payment dispute, this integer value increases by 1.

### DeliveryCost
* DeliveryCost `object`: This type contains a breakdown of all costs associated with the fulfillment of a line item.
  * importCharges [Amount](#amount)
  * shippingCost [Amount](#amount)
  * shippingIntermediationFee [Amount](#amount)

### DisputeAmount
* DisputeAmount `object`: This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
  * convertedFromCurrency `string`: The three-letter ISO 4217 code representing the currency of the amount in the convertedFromValue field. This value is the pre-conversion currency. This field is only returned if/when currency conversion was applied by eBay. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a>
  * convertedFromValue `string`: The monetary amount before any conversion is performed, in the currency specified by the convertedFromCurrency field. This value is the pre-conversion amount. The value field contains the converted amount of this value, in the currency specified by the currency field. This field is only returned if/when currency conversion was applied by eBay.
  * currency `string`: A three-letter ISO 4217 code that indicates the currency of the amount in the value field. This field is always returned with any container using Amount type. Default: The currency of the authenticated user's country. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a>
  * exchangeRate `string`: The exchange rate used for the monetary conversion. This field shows the exchange rate used to convert the dollar value in the value field from the dollar value in the convertedFromValue field. This field is only returned if/when currency conversion was applied by eBay.
  * value `string`: The monetary amount, in the currency specified by the currency field. This field is always returned with any container using Amount type.

### DisputeEvidence
* DisputeEvidence `object`: This type is used by the evidence array that is returned in the getPaymentDispute response if one or more evidential documents are associated with the payment dispute.
  * evidenceId `string`: Unique identifier of the evidential file set. Potentially, each evidential file set can have more than one file, that is why there is this file set identifier, and then an identifier for each file within this file set.
  * evidenceType `string`: This enumeration value shows the type of evidential file provided. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a>
  * files `array`: This array shows the name, ID, file type, and upload date for each provided file.
    * items [FileInfo](#fileinfo)
  * lineItems `array`: This array shows one or more order line items associated with the evidential document that has been provided.
    * items [OrderLineItems](#orderlineitems)
  * providedDate `string`: The timestamp in this field shows the date/time when the seller provided a requested evidential document to eBay. The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: yyyy-MM-ddThh:mm.ss.sssZ. An example would be 2019-08-04T19:09:02.768Z.
  * requestDate `string`: The timestamp in this field shows the date/time when eBay requested the evidential document from the seller in response to a payment dispute. The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: yyyy-MM-ddThh:mm.ss.sssZ. An example would be 2019-08-04T19:09:02.768Z.
  * respondByDate `string`: The timestamp in this field shows the date/time when the seller was expected to provide a requested evidential document to eBay. The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: yyyy-MM-ddThh:mm.ss.sssZ. An example would be 2019-08-04T19:09:02.768Z.
  * shipmentTracking `array`: This array shows the shipping carrier and shipment tracking number associated with each shipment package of the order. This array is returned if the seller has provided shipment tracking information as evidence to support PROOF_OF_DELIVERY.
    * items [TrackingInfo](#trackinginfo)

### DisputeSummaryResponse
* DisputeSummaryResponse `object`: This type defines the base response payload of the getPaymentDisputeSummaries method. Each payment dispute that matches the input criteria is returned under the paymentDisputeSummaries array.
  * href `string`: The URI of the getPaymentDisputeSummaries call request that produced the current page of the result set.
  * limit `integer`: This value shows the maximum number of payment disputes that will appear on one page of the result set. The limit value can be passed in as a query parameter in the request, or if it is not used, it defaults to 200. If the value in the total field exceeds this limit value, there are multiple pages in the current result set. Min: 1; Max: 200; Default: 200
  * next `string`: The getPaymentDisputeSummaries call URI to use if you wish to view the next page of the result set. For example, the following URI returns records 11 thru 20 from the collection of payment disputes: path/payment_dispute_summary?limit=10&amp;offset=10 This field is only returned if there is a next page of results to view based on the current input criteria.
  * offset `integer`: This integer value indicates the number of payment disputes skipped before listing the first payment dispute from the result set. The offset value can be passed in as a query parameter in the request, or if it is not used, it defaults to 0 and the first payment dispute of the result set is shown at the top of the response.
  * paymentDisputeSummaries `array`: Each payment dispute that matches the input criteria is returned under this array. If no payment disputes are found, an empty array is returned.
    * items [PaymentDisputeSummary](#paymentdisputesummary)
  * prev `string`: The getPaymentDisputeSummaries call URI to use if you wish to view the previous page of the result set. For example, the following URI returns records 1 thru 10 from the collection of payment disputes: path/payment_dispute_summary?limit=10&amp;offset=0 This field is only returned if there is a previous page of results to view based on the current input criteria.
  * total `integer`: This integer value is the total number of payment disputes that matched the input criteria. If the total number of entries exceeds the value that was set for limit in the request payload, you will have to make multiple API calls to see all pages of the results set. This field is returned even if it is 0.

### EbayCollectAndRemitTax
* EbayCollectAndRemitTax `object`: This type contains information about the type and amount of tax that eBay will collect and remit to the state, province, country, or other taxing authority in the buyer's location, as required by that taxing authority. 'Collect and Remit' tax includes US state-mandated sales tax and 'Goods and Services' tax that is applicable to Australian and New Zealand sellers.
  * amount [Amount](#amount)
  * collectionMethod `string`: This field indicates the collection method used to collect the 'Collect and Remit' tax for the order. This field is always returned for orders subject to 'Collect and Remit' tax, and its value is always NET. Note: Although the collectionMethod field is returned for all orders subject to 'Collect and Remit' tax, the collectionMethod field and the CollectionMethodEnum type are not currently of any practical use, although this field may have use in the future. If and when the logic of this field is changed, this note will be updated and a note will also be added to the Release Notes. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:CollectionMethodEnum'>eBay API documentation</a>
  * taxType `string`: The type of tax and fees that eBay will collect and remit to the taxing or fee authority. See the TaxTypeEnum type definition for more information about each tax or fee type. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:TaxTypeEnum'>eBay API documentation</a>

### Error
* Error `object`: This type contains a error or warning related to a call request.
  * parameters `array`: Contains a list of name/value pairs that provide additional information concerning this error or warning. Each item in the list is an input parameter that contributed to the error or warning condition.
    * items [ErrorParameter](#errorparameter)
  * category `string`: The context or source of this error or warning.
  * domain `string`: The name of the domain containing the service or application. For example, sell is a domain.
  * errorId `integer`: A positive integer that uniquely identifies the specific error condition that occurred. Your application can use these values as error code identifiers in your customized error-handling algorithms.
  * inputRefIds `array`: A list of one or more specific request elements (if any) associated with the error or warning. The format of these strings depends on the request payload format. For JSON, use JSONPath notation.
    * items `string`
  * longMessage `string`: An expanded version of the message field. Maximum length: 200 characters
  * message `string`: A message about the error or warning which is device agnostic and readable by end users and application developers. It explains what the error or warning is, and how to fix it (in a general sense). If applicable, the value is localized to the end user's requested locale. Maximum length: 50 characters
  * outputRefIds `array`: A list of one or more specific response elements (if any) associated with the error or warning. The format of these strings depends on the request payload format. For JSON, use JSONPath notation.
    * items `string`
  * subdomain `string`: The name of the domain's subsystem or subdivision. For example, fulfillment is a subdomain in the sell domain.

### ErrorParameter
* ErrorParameter `object`: This type contains the name and value of an input parameter that contributed to a specific error or warning condition.
  * name `string`: This is the name of input field that caused an issue with the call request.
  * value `string`: This is the actual value that was passed in for the element specified in the name field.

### EvidenceRequest
* EvidenceRequest `object`: This type is used by the evidenceRequests array that is returned in the getPaymentDispute response if one or more evidential documents are being requested to help resolve the payment dispute.
  * evidenceId `string`: Unique identifier of the evidential file set. Potentially, each evidential file set can have more than one file, that is why there is this file set identifier, and then an identifier for each file within this file set.
  * evidenceType `string`: This enumeration value shows the type of evidential document provided. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a>
  * lineItems `array`: This array shows one or more order line items associated with the evidential document that has been provided.
    * items [OrderLineItems](#orderlineitems)
  * requestDate `string`: The timestamp in this field shows the date/time when eBay requested the evidential document from the seller in response to a payment dispute. The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: yyyy-MM-ddThh:mm.ss.sssZ. An example would be 2019-08-04T19:09:02.768Z.
  * respondByDate `string`: The timestamp in this field shows the date/time when the seller is expected to provide a requested evidential document to eBay. The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: yyyy-MM-ddThh:mm.ss.sssZ. An example would be 2019-08-04T19:09:02.768Z.

### ExtendedContact
* ExtendedContact `object`: This type contains shipping and contact information for a buyer or an eBay shipping partner.
  * companyName `string`: The company name associated with the buyer or eBay shipping partner. This field is only returned if defined/applicable to the buyer or eBay shipping partner.
  * contactAddress [Address](#address)
  * email `string`: This field shows the email address of the buyer. The email address of a buyer will be masked 14 days after order creation. This field will still be returned for the order, but it will not contain the buyer's email address, but instead, something like 'Invalid Request'. Note: This field always contains the email address of the buyer even with a Global Shipping Program shipment.
  * fullName `string`: The full name of the buyer or eBay shipping partner.
  * primaryPhone [PhoneNumber](#phonenumber)

### FileEvidence
* FileEvidence `object`: This type is used to store the unique identifier of an evidence file. Evidence files are used by seller to contest a payment dispute.
  * fileId `string`: If an uploadEvidenceFile call is successful, a unique identifier of this evidence file will be returned in the uploadEvidenceFile response payload. This unique fileId value is then used to either add this evidence file to a new evidence set using the addEvidence method, or to add this file to an existing evidence set using the updateEvidence method. Note that if an evidence set already exists for a payment dispute, the getPaymentDispute method will return both the evidenceId (unique identifier of evidence set) value, and the fileId (unique identifier of a file within that evidence set) value(s).

### FileInfo
* FileInfo `object`: This type is used by the files array, which shows the name, ID, file type, and upload date for each provided evidential file.
  * fileId `string`: The unique identifier of the evidence file.
  * fileType `string`: The type of file uploaded. Supported file extensions are .JPEG, .JPG, and .PNG., and maximum file size allowed is 1.5 MB.
  * name `string`: The seller-provided name of the evidence file.
  * uploadedDate `string`: The timestamp in this field shows the date/time when the seller uploaded the evidential document to eBay. The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: yyyy-MM-ddThh:mm.ss.sssZ. An example would be 2019-08-04T19:09:02.768Z.

### FulfillmentStartInstruction
* FulfillmentStartInstruction `object`: This type contains a set of specifications for processing a fulfillment of an order, including the type of fulfillment, shipping carrier and service, addressing details, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order.
  * ebaySupportedFulfillment `boolean`: This field is only returned if its value is true and indicates that the fulfillment will be shipped via eBay's Global Shipping Program. For more information, see the Global Shipping Program help topic.
  * finalDestinationAddress [Address](#address)
  * fulfillmentInstructionsType `string`: The enumeration value returned in this field indicates the method of fulfillment that will be used to deliver this set of line items (this package) to the buyer. This field will have a value of SHIP_TO if the ebaySupportedFulfillment field is returned with a value of true. See the FulfillmentInstructionsType definition for more information about different fulfillment types. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:FulfillmentInstructionsType'>eBay API documentation</a>
  * maxEstimatedDeliveryDate `string`: This is the estimated latest date that the fulfillment will be completed. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned ifthe value of the fulfillmentInstructionsType field is DIGITAL or PREPARE_FOR_PICKUP. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2015-08-04T19:09:02.768Z
  * minEstimatedDeliveryDate `string`: This is the estimated earliest date that the fulfillment will be completed. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned if the value of the fulfillmentInstructionsType field is DIGITAL or PREPARE_FOR_PICKUP. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2015-08-04T19:09:02.768Z
  * pickupStep [PickupStep](#pickupstep)
  * shippingStep [ShippingStep](#shippingstep)

### GiftDetails
* GiftDetails `object`: This type contains information about a digital gift card line item that was purchased as a gift, and sent to the recipient by email.
  * message `string`: This field contains the gift message from the buyer to the gift recipient. This field is only returned if the buyer of the gift included a message for the gift.
  * recipientEmail `string`: The email address of the gift recipient. The seller will send the digital gift card to this email address.
  * senderName `string`: The name of the buyer, which will appear on the email that is sent to the gift recipient.

### InfoFromBuyer
* InfoFromBuyer `object`: This container is returned if the buyer is returning one or more line items in an order that is associated with the payment dispute, and that buyer has provided return shipping tracking information and/or a note about the return.
  * note `string`: This field shows any note that was left by the buyer for in regards to the dispute.
  * returnShipmentTracking `array`: This array shows shipment tracking information for one or more shipping packages being returned to the buyer after a payment dispute.
    * items [TrackingInfo](#trackinginfo)

### IssueRefundRequest
* IssueRefundRequest `object`: The base type used by the request payload of the issueRefund method.
  * comment `string`: This free-text field allows the seller to clarify why the refund is being issued to the buyer. Max Length: 100
  * orderLevelRefundAmount [SimpleAmount](#simpleamount)
  * reasonForRefund `string`: The enumeration value passed into this field indicates the reason for the refund. One of the defined enumeration values in the ReasonForRefundEnum type must be used. This field is required, and it is highly recommended that sellers use the correct refund reason, especially in the case of a buyer-requested cancellation or 'buyer remorse' return to indicate that there was nothing wrong with the item(s) or with the shipment of the order. Note: If issuing refunds for more than one order line item, keep in mind that the refund reason must be the same for each of the order line items. If the refund reason is different for one or more order line items in an order, the seller would need to make separate issueRefund calls, one for each refund reason. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ReasonForRefundEnum'>eBay API documentation</a>
  * refundItems `array`: The refundItems array is only required if the seller is issuing a refund for one or more individual order line items in a multiple line item order. Otherwise, the seller just uses the orderLevelRefundAmount container to specify the amount of the refund for the entire order.
    * items [RefundItem](#refunditem)

### LegacyReference
* LegacyReference `object`: Type defining the legacyReference container. This container is needed if the seller is issuing a refund for an individual order line item, and wishes to use an item ID and transaction ID to identify the order line item.
  * legacyItemId `string`: The unique identifier of a listing in legacy/Trading API format. Note: Both legacyItemId and legacyTransactionId are needed to identify an order line item.
  * legacyTransactionId `string`: The unique identifier of a sale/transaction in legacy/Trading API format. A 'transaction ID' is created once a buyer purchases a 'Buy It Now' item or if an auction listing ends with a winning bidder. Note: Both legacyItemId and legacyTransactionId are needed to identify an order line item.

### LineItem
* LineItem `object`: This type contains the details of each line item in an order.
  * appliedPromotions `array`: This array contains information about one or more sales promotions or discounts applied to the line item. It is always returned, but will be returned as an empty array if no special sales promotions or discounts apply to the order line item.
    * items [AppliedPromotion](#appliedpromotion)
  * deliveryCost [DeliveryCost](#deliverycost)
  * discountedLineItemCost [Amount](#amount)
  * ebayCollectAndRemitTaxes `array`: This container will be returned if the order line item is subject to a 'Collect and Remit' tax that eBay will collect and remit to the proper taxing authority on the buyer's behalf. 'Collect and Remit' tax includes US state-mandated sales tax and 'Goods and Services' tax (collected in Australia and New Zealand). The amount of this tax is shown in the amount field, and the type of tax is shown in the taxType field. eBay will display the tax type and amount during checkout in accordance with the buyer's address, and handle collection and remittance of the tax without requiring the seller to take any action.
    * items [EbayCollectAndRemitTax](#ebaycollectandremittax)
  * giftDetails [GiftDetails](#giftdetails)
  * legacyItemId `string`: The eBay-generated legacy listing item ID of the listing. Note that the unique identifier of a listing in REST-based APIs is called the listingId instead.
  * legacyVariationId `string`: The unique identifier of a single variation within a multiple-variation listing. This field is only returned if the line item purchased was from a multiple-variation listing.
  * lineItemCost [Amount](#amount)
  * lineItemFulfillmentInstructions [LineItemFulfillmentInstructions](#lineitemfulfillmentinstructions)
  * lineItemFulfillmentStatus `string`: This enumeration value indicates the current fulfillment status of the line item. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:LineItemFulfillmentStatusEnum'>eBay API documentation</a>
  * lineItemId `string`: This is the unique identifier of an eBay order line item. This field is created as soon as there is a commitment to buy from the seller.
  * listingMarketplaceId `string`: The unique identifier of the eBay marketplace where the line item was listed. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:MarketplaceIdEnum'>eBay API documentation</a>
  * properties [LineItemProperties](#lineitemproperties)
  * purchaseMarketplaceId `string`: The unique identifier of the eBay marketplace where the line item was listed. Often, the listingMarketplaceId and the purchaseMarketplaceId identifier are the same, but there are occasions when an item will surface on multiple eBay marketplaces. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:MarketplaceIdEnum'>eBay API documentation</a>
  * quantity `integer`: The number of units of the line item in the order. These are represented as a group by a single lineItemId.
  * refunds `array`: This array is always returned, but is returned as an empty array unless the seller has submitted a partial or full refund to the buyer for the order. If a refund has occurred, the refund amount and refund date will be shown for each refund.
    * items [LineItemRefund](#lineitemrefund)
  * sku `string`: Seller-defined Stock-Keeping Unit (SKU). This inventory identifier must be unique within the seller's eBay inventory. SKUs are optional when listing in the legacy/Trading API system, but SKUs are required when listing items through the Inventory API model.
  * soldFormat `string`: The eBay listing type of the line item. The most common listing types are AUCTION and FIXED_PRICE. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:SoldFormatEnum'>eBay API documentation</a>
  * taxes `array`: Contains a list of taxes applied to the line item, if any. This array is always returned, but will be returned as empty if no taxes are applicable to the line item, or if the seller is opted in to eBay managed payments.
    * items [Tax](#tax)
  * title `string`: The title of the listing.
  * total [Amount](#amount)

### LineItemFulfillmentInstructions
* LineItemFulfillmentInstructions `object`: This type contains the specifications for processing the fulfillment of a line item, including the handling window and the delivery window. These fields provide guidance for eBay Guaranteed Delivery as well as for non-guaranteed delivery.
  * guaranteedDelivery `boolean`: This field is returned as true if the order line item is qualified for eBay Guaranteed Delivery, or false if it is not eligible. Only domestic shipments are available for eBay Guaranteed Delivery. At this time, eBay Guaranteed Delivery is only available to a select number of sellers on the US and Australia sites, but this feature will be enabled on more eBay sites in 2019. There are two different eBay Guaranteed Delivery options - 'Handling time' option and 'Door-to-Door' option. With both options, the seller is commiting to getting the order delivered to the buyer within three business days after purchase. With the 'Handling time' option, the seller's stated handling time for a listing must be 'same-day' or '1-day', and at least one of the available shipping service options should have a shipping time that guarantees that the buyer receives the order on time. With this option, eBay will set the 'ship-by date' and expected delivery window for the seller, and the seller should just make sure they physically ship the order by the shipToDate. With the 'Door-to-door' option, the seller must create regional shipping rate tables (with shipping costs and delivery times based on destination regions), and then apply these regional shipping rates/delivery times to the listing. If a 'Door-to-door' order does not arrive on time, the seller must refund the buyer the full shipping cost (if any), and the buyer also has the option of returning the item for a full refund, and the seller will also have to pay the return shipping cost. With 'Handling time' option, as long as the seller meets the stated handling time, and ships using the correct shipping service option, eBay will refund the buyer the shipping cost and pay for return shipping label (if buyer wants to return item) if the order arrives after the expected delivery time. For more information on the details and requirements of eBay Guaranteed Delivery, see the Offering eBay Guaranteed Delivery help topic. This field will always be returned regardless of whether the listing site offers eBay Guaranteed Delivery or if the seller is opted in to the feature.
  * maxEstimatedDeliveryDate `string`: The estimated latest date and time that the buyer can expect to receive the line item based on the seller's stated handling time and the transit times of the available shipping service options. If the listing is eligible for eBay Guaranteed Delivery (value of guaranteedDelivery field is true, the seller must pay extra attention to this date, as a failure to deliver by this date/time can result in a 'Late shipment' seller defect, and can affect seller level and Top-Rated Seller status. In addition to the seller defect, buyers will be eligible for a shipping cost refund, and will also be eligible to return the item for a full refund (with no return shipping charge) if they choose. Note: This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2015-08-04T19:09:02.768Z
  * minEstimatedDeliveryDate `string`: The estimated earliest date and time that the buyer can expect to receive the line item based on the seller's stated handling time and the transit times of the available shipping service options. Note: This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2015-08-04T19:09:02.768Z
  * shipByDate `string`: The latest date and time by which the seller should ship line item in order to meet the expected delivery window. This timestamp will be set by eBay based on time of purchase and the seller's stated handling time. If the listing is eligible for eBay Guaranteed Delivery (value of guaranteedDelivery field is true, the seller must pay extra attention to this date, as a failure to physically ship the line item by this date/time can result in a 'Late shipment' seller defect, and can affect seller level and Top-Rated Seller status. In addition to the seller defect, buyers will be eligible for a shipping cost refund, and will also be eligible to return the item for a full refund (with no return shipping charge) if they choose. Note: This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2015-08-04T19:09:02.768Z

### LineItemProperties
* LineItemProperties `object`: This type contains information about the eBay programs under which a line item was listed and sold.
  * buyerProtection `boolean`: A value of true indicates that the line item is covered by eBay's Buyer Protection program.
  * fromBestOffer `boolean`: This field is only returned if true and indicates that the purchase occurred by the buyer and seller mutually agreeing on a Best Offer amount. The Best Offer feature can be set up for any listing type, but if this feature is set up for an auction listing, it will no longer be available once a bid has been placed on the listing.
  * soldViaAdCampaign `boolean`: This field is only returned if true and indicates that the line item was sold as a result of a seller's ad campaign.

### LineItemReference
* LineItemReference `object`: This type identifies the line item and quantity of that line item that comprises one fulfillment, such as a shipping package.
  * lineItemId `string`: This is the unique identifier of the eBay order line item that is part of the shipping fulfillment. The line item ID is created as soon as there is a commitment to buy from the seller.
  * quantity `integer`: This field is reserved for internal or future use.

### LineItemRefund
* LineItemRefund `object`: This type contains refund information for a line item.
  * amount [Amount](#amount)
  * refundDate `string`: The date and time that the refund was issued for the line item. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the refund has been issued. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2015-08-04T19:09:02.768Z
  * refundId `string`: Unique identifier of a refund that was initiated for an order's line item through the issueRefund method. If the issueRefund method was used to issue a refund at the order level, this identifier is returned at the order level instead (paymentSummary.refunds.refundId field). A refundId value is returned in the response of the issueRefund method, and this same value will be returned in the getOrder and getOrders responses for pending and completed refunds. The issueRefund method can only be used for eBay managed payment orders.
  * refundReferenceId `string`: This field is reserved for internal or future use.

### MonetaryTransaction
* MonetaryTransaction `object`: This type is used to provide details about one or more monetary transactions that occur as part of a payment dispute.
  * amount [DisputeAmount](#disputeamount)
  * date `string`: This timestamp indicates when the monetary transaction occurred. A date is returned for all monetary transactions. The following format is used: YYYY-MM-DDTHH:MM:SS.SSSZ. For example, 2015-08-04T19:09:02.768Z.
  * reason `string`: This enumeration value indicates the reason for the monetary transaction. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:MonetaryTransactionReasonEnum'>eBay API documentation</a>
  * type `string`: This enumeration value indicates whether the monetary transaction is a charge or a credit to the seller. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:MonetaryTransactionTypeEnum'>eBay API documentation</a>

### Order
* Order `object`: This type contains the details of an order, including information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status.
  * buyer [Buyer](#buyer)
  * buyerCheckoutNotes `string`: This field contains any comments that the buyer left for the seller about the order during checkout process. This field is only returned if a buyer left comments at checkout time.
  * cancelStatus [CancelStatus](#cancelstatus)
  * creationDate `string`: The date and time that the order was created. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2015-08-04T19:09:02.768Z
  * ebayCollectAndRemitTax `boolean`: This field is only returned if true, and indicates that eBay will collect tax (US state-mandates sales tax or 'goods and services' tax in Australia or New Zealand) for at least one line item in the order, and remit the tax to the taxing authority of the buyer's residence. If this field is returned, the seller should search for one or more ebayCollectAndRemitTaxes containers at the line item level to get more information about the type of tax and the amount.
  * fulfillmentHrefs `array`: This array contains a list of one or more getShippingFulfillment call URIs that can be used to retrieve shipping fulfillments that have been set up for the order.
    * items `string`
  * fulfillmentStartInstructions `array`: This container consists of a set of specifications for fulfilling the order, including the type of fulfillment, shipping carrier and service, shipping address, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order. Note: Although this container is presented as an array, it currently returns only one set of fulfillment specifications. Additional array members will be supported in future functionality.
    * items [FulfillmentStartInstruction](#fulfillmentstartinstruction)
  * lastModifiedDate `string`: The date and time that the order was last modified. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2015-08-04T19:09:02.768Z
  * legacyOrderId `string`: The unique identifier of the order in legacy format, as traditionally used by the Trading API (and other legacy APIs). Both the orderId field and this field are always returned. Note: In June 2019, Order IDs in REST APIs transitioned to a new format. For the Trading and other legacy APIs, by using version control/compatibility level, users have the option of using the older legacy order ID format, or they can migrate to the new order ID format, which is the same order ID format being used by REST APIs. Although users of the Trading API (and other legacy APIs) can now transition to the new order ID format, this legacyOrderId field will still return order IDs in the old format to distinguish between the old and new order IDs.
  * lineItems `array`: This array contains the details for all line items that comprise the order.
    * items [LineItem](#lineitem)
  * orderFulfillmentStatus `string`: The degree to which fulfillment of the order is complete. See the OrderFulfillmentStatus type definition for more information about each possible fulfillment state. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:OrderFulfillmentStatus'>eBay API documentation</a>
  * orderId `string`: The unique identifier of the order. Both the legacyOrderId field (traditionally used by Trading and other legacy APIS) and this field are always returned. Note: In June 2019, Order IDs in REST APIs transitioned to a new format. For the Trading and other legacy APIs, by using version control/compatibility level, users have the option of using the older legacy order ID format, or they can migrate to the new order ID format, which is the same order ID format being used by REST APIs. The new format is a non-parsable string, globally unique across all eBay marketplaces, and consistent for both single line item and multiple line item orders. These order identifiers are automatically generated after buyer payment, and unlike in the past, instead of just being known and exposed to the seller, these unique order identifiers will also be known and used/referenced by the buyer and eBay customer support.
  * orderPaymentStatus `string`: The enumeration value returned in this field indicates the current payment status of an order, or in case of a refund request, the current status of the refund. See the OrderPaymentStatusEnum type definition for more information about each possible payment/refund state. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:OrderPaymentStatusEnum'>eBay API documentation</a>
  * paymentSummary [PaymentSummary](#paymentsummary)
  * pricingSummary [PricingSummary](#pricingsummary)
  * program [Program](#program)
  * salesRecordReference `string`: An eBay-generated identifier that is used to identify and manage orders through the Selling Manager and Selling Manager Pro tools. This order identifier can also be found on the Orders grid page and in the Sales Record pages in Seller Hub. A salesRecordReference number is only generated and returned at the order level, and not at the order line item level. In cases where the seller does not have a Selling Manager or Selling Manager Pro subscription nor access to Seller Hub, this field may not be returned.
  * sellerId `string`: The unique eBay user ID of the seller who sold the order.
  * totalFeeBasisAmount [Amount](#amount)
  * totalMarketplaceFee [Amount](#amount)

### OrderLineItems
* OrderLineItems `object`: This type is used by the lineItems array that is used to identify one or more line items in the order with the payment dispute.
  * itemId `string`: The unique identifier of the eBay listing associated with the order.
  * lineItemId `string`: The unique identifier of the line item within the order. The lineItemId value is created once the buyer actually purchases the item, or if there is a commitment to buy (such as an auction that is won by the buyer, an accepted Best Offer, or other situation that does not require immediate payment from the buyer).

### OrderRefund
* OrderRefund `object`: This type contains information about a refund issued for an order. This does not include line item level refunds.
  * amount [Amount](#amount)
  * refundDate `string`: The date and time that the refund was issued. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the refund has been issued. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2015-08-04T19:09:02.768Z
  * refundId `string`: Unique identifier of a refund that was initiated for an order through the issueRefund method. If the issueRefund method was used to issue one or more refunds at the line item level, these refund identifiers are returned at the line item level instead (lineItems.refunds.refundId field). A refundId value is returned in the response of the issueRefund method, and this same value will be returned in the getOrders and getOrders responses for pending and completed refunds. The issueRefund method can only be used for eBay managed payment orders. For other refunds, see the refundReferenceId field.
  * refundReferenceId `string`: The eBay-generated unique identifier for the refund. This field is not returned until the refund has been issued.
  * refundStatus `string`: This enumeration value indicates the current status of the refund to the buyer. This container is always returned for each refund. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:RefundStatusEnum'>eBay API documentation</a>

### OrderSearchPagedCollection
* OrderSearchPagedCollection `object`: This type contains the specifications for the collection of orders that match the search or filter criteria of a getOrders call. The collection is grouped into a result set, and based on the query parameters that are set (including the limit and offset parameters), the result set may included multiple pages, but only one page of the result set can be viewed at a time.
  * href `string`: The URI of the getOrders call request that produced the current page of the result set.
  * limit `integer`: The maximum number of orders returned per page of the result set. The limit value can be passed in as a query parameter, or if omitted, its value defaults to 50. Note: If this is the last or only page of the result set, the page may contain fewer orders than the limit value. To determine the number of pages in a result set, divide the total value (total number of orders matching input criteria) by this limit value, and then round up to the next integer. For example, if the total value was 120 (120 total orders) and the limit value was 50 (show 50 orders per page), the total number of pages in the result set is three, so the seller would have to make three separate getOrders calls to view all orders matching the input criteria. Default: 50
  * next `string`: The getOrders call URI to use if you wish to view the next page of the result set. For example, the following URI returns records 41 thru 50 from the collection of orders: path/order?limit=10&amp;offset=40 This field is only returned if there is a next page of results to view based on the current input criteria.
  * offset `integer`: The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.
  * orders `array`: This array contains one or more orders that are part of the current result set, that is controlled by the input criteria. The details of each order include information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status. By default, orders are returned according to creation date (oldest to newest), but the order will vary according to any filter that is set in request.
    * items [Order](#order)
  * prev `string`: The getOrders call URI for the previous result set. For example, the following URI returns orders 21 thru 30 from the collection of orders: path/order?limit=10&amp;offset=20 This field is only returned if there is a previous page of results to view based on the current input criteria.
  * total `integer`: The total number of orders in the results set based on the current input criteria. Note: If no orders are found, this field is returned with a value of 0.
  * warnings `array`: This array is returned if one or more errors or warnings occur with the call request.
    * items [Error](#error)

### Payment
* Payment `object`: This type is used to provide details about the seller payments for an order.
  * amount [Amount](#amount)
  * paymentDate `string`: The date and time that the payment was received by the seller. This field will not be returned if buyer has yet to pay for the order. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2015-08-04T19:09:02.768Z
  * paymentHolds `array`: This container is only returned if eBay is temporarily holding the seller's funds for the order. If a payment hold has been placed on the order, this container includes the reason for the payment hold, the expected release date of the funds into the seller's account, the current state of the hold, and as soon as the payment hold has been released, the actual release date.
    * items [PaymentHold](#paymenthold)
  * paymentMethod `string`: The payment method used to pay for the order. See the PaymentMethodTypeEnum type for more information on the payment methods. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:PaymentMethodTypeEnum'>eBay API documentation</a>
  * paymentReferenceId `string`: This field is only returned if payment has been made by the buyer, and the paymentMethod is PAYPAL or ESCROW. This field contains the PayPal-generated transaction identifier in case of payment made via PAYPAL.
  * paymentStatus `string`: The enumeration value returned in this field indicates the status of the payment for the order. See the PaymentStatusEnum type definition for more information on the possible payment states. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:PaymentStatusEnum'>eBay API documentation</a>

### PaymentDispute
* PaymentDispute `object`: This type is used by the base response of the getPaymentDispute method. The getPaymentDispute method retrieves detailed information on a specific payment dispute.
  * amount [SimpleAmount](#simpleamount)
  * availableChoices `array`: The value(s) returned in this array indicate the choices that the seller has when responding to the payment dispute. Once the seller has responded to the payment dispute, this field will no longer be shown, and instead, the sellerResponse field will show the decision that the seller made.
    * items `string`:  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:SellerDecisionEnum'>eBay API documentation</a>
  * buyerProvided [InfoFromBuyer](#infofrombuyer)
  * buyerUsername `string`: This is the eBay user ID of the buyer that initiated the payment dispute.
  * closedDate `string`: The timestamp in this field shows the date/time when the payment dispute was closed, so this field is only returned for payment disputes in the CLOSED state. The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: yyyy-MM-ddThh:mm.ss.sssZ. An example would be 2019-08-04T19:09:02.768Z.
  * evidence `array`: This container shows any evidence that has been provided by the seller to contest the payment dispute. Evidence may include shipment tracking information, proof of authentication documentation, image(s) to proof that an item is as described, or financial documentation/invoice. This container is only returned if the seller has provided at least one document used as evidence against the payment dispute.
    * items [DisputeEvidence](#disputeevidence)
  * evidenceRequests `array`: This container is returned if one or more evidence documents are being requested from the seller.
    * items [EvidenceRequest](#evidencerequest)
  * lineItems `array`: This array is used to identify one or more order line items associated with the payment dispute. There will always be at least one itemId/lineItemId pair returned in this array.
    * items [OrderLineItems](#orderlineitems)
  * monetaryTransactions `array`: This array provide details about one or more monetary transactions that occur as part of a payment dispute. This array is only returned once one or more monetary transacations occur with a payment dispute.
    * items [MonetaryTransaction](#monetarytransaction)
  * openDate `string`: The timestamp in this field shows the date/time when the payment dispute was opened. This field is returned for payment disputes in all states. The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: yyyy-MM-ddThh:mm.ss.sssZ. An example would be 2019-08-04T19:09:02.768Z.
  * orderId `string`: This is the unique identifier of the order involved in the payment dispute. Note: eBay rolled out a new Order ID format in June 2019. The legacy APIs still support the old and new order ID format to identify orders, but only the new order ID format is returned in REST-based API responses.
  * paymentDisputeId `string`: This is the unique identifier of the payment dispute. This is the same identifier that is passed in to the call URI. This identifier is automatically created by eBay once the payment dispute comes into the eBay Managed Payments system.
  * paymentDisputeStatus `string`: The enumeration value in this field gives the current status of the payment dispute. The status of a payment dispute partially determines other fields that are returned in the response. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeStateEnum'>eBay API documentation</a>
  * reason `string`: The enumeration value in this field gives the reason why the buyer initiated the payment dispute. See DisputeReasonEnum type for a description of the supported reasons that buyers can give for initiating a payment dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeReasonEnum'>eBay API documentation</a>
  * resolution [PaymentDisputeOutcomeDetail](#paymentdisputeoutcomedetail)
  * respondByDate `string`: The timestamp in this field shows the date/time when the seller must response to a payment dispute, so this field is only returned for payment disputes in the ACTION_NEEDED state. For payment disputes that currently require action by the seller, that same seller should look at the availableChoices array to see the available actions. The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: yyyy-MM-ddThh:mm.ss.sssZ. An example would be 2019-08-04T19:09:02.768Z.
  * returnAddress [ReturnAddress](#returnaddress)
  * revision `integer`: This integer value indicates the revision number of the payment dispute. Each time an action is taken against a payment dispute, this integer value increases by 1.
  * sellerResponse `string`: The enumeration value returned in this field indicates how the seller has responded to the payment dispute. The seller has the option of accepting the payment dispute and agreeing to issue a refund, accepting the payment dispute and agreeing to issue a refund as long as the buyer returns the item, or contesting the payment dispute. This field is returned as soon as the seller makes an initial decision on the payment dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:SellerResponseEnum'>eBay API documentation</a>

### PaymentDisputeActivity
* PaymentDisputeActivity `object`: This type is used by each recorded activity on a payment dispute, from creation to resolution.
  * activityDate `string`: The timestamp in this field shows the date/time of the payment dispute activity. The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: yyyy-MM-ddThh:mm.ss.sssZ. An example would be 2019-08-04T19:09:02.768Z.
  * activityType `string`: This enumeration value indicates the type of activity that occured on the payment dispute. For example, a value of DISPUTE_OPENED is returned when a payment disute is first created, a value indicating the seller's decision on the dispute, such as SELLER_CONTEST, is returned when seller makes a decision to accept or contest dispute, and a value of DISPUTE_CLOSED is returned when a payment disute is resolved. See ActivityEnum for an explanation of each of the values that may be returned here. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ActivityEnum'>eBay API documentation</a>
  * actor `string`: This enumeration value indicates the actor that performed the action. Possible values include the BUYER, SELLER, CS_AGENT (eBay customer service), or SYSTEM. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ActorEnum'>eBay API documentation</a>

### PaymentDisputeActivityHistory
* PaymentDisputeActivityHistory `object`: This type is used by the base response of the getActivities method, and includes a log of all activities of a payment dispute, from creation to resolution.
  * activity `array`: This array holds all activities of a payment dispute, from creation to resolution. For each activity, the activity type, the actor, and a timestamp is shown. The getActivities response is dynamic, and grows with each recorded activity.
    * items [PaymentDisputeActivity](#paymentdisputeactivity)

### PaymentDisputeOutcomeDetail
* PaymentDisputeOutcomeDetail `object`: This type is used by the resolution container that is returned for payment disputes that have been resolved.
  * fees [SimpleAmount](#simpleamount)
  * protectedAmount [SimpleAmount](#simpleamount)
  * protectionStatus `string`: This enumeration value indicates if the seller is fully protected, partially protected, or not protected by eBay for the payment dispute. This field is always returned once the payment dispute is resolved. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ProtectionStatusEnum'>eBay API documentation</a>
  * reasonForClosure `string`: The enumeration value returned in this field indicates the outcome of the payment dispute for the seller. This field is always returned once the payment dispute is resolved. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:OutcomeEnum'>eBay API documentation</a>
  * recoupAmount [SimpleAmount](#simpleamount)
  * totalFeeCredit [SimpleAmount](#simpleamount)

### PaymentDisputeSummary
* PaymentDisputeSummary `object`: This type is used by each payment dispute that is returned with the getPaymentDisputeSummaries method.
  * amount [SimpleAmount](#simpleamount)
  * buyerUsername `string`: This is the buyer's eBay user ID. This field is returned for all payment disputes returned in the response.
  * closedDate `string`: The timestamp in this field shows the date/time when the payment dispute was closed, so this field is only returned for payment disputes in the CLOSED state. The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: yyyy-MM-ddThh:mm.ss.sssZ. An example would be 2019-08-04T19:09:02.768Z.
  * openDate `string`: The timestamp in this field shows the date/time when the payment dispute was opened. This field is returned for payment disputes in all states. The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: yyyy-MM-ddThh:mm.ss.sssZ. An example would be 2019-08-04T19:09:02.768Z.
  * orderId `string`: This is the unique identifier of the order involved in the payment dispute. Note: eBay rolled out a new Order ID format in June 2019. The legacy APIs still support the old and new order ID format to identify orders, but only the new order ID format is supported in REST-based APIs.
  * paymentDisputeId `string`: This is the unique identifier of the payment dispute. This identifier is automatically created by eBay once the payment dispute comes into the eBay Managed Payments system. This identifier is passed in at the end of the getPaymentDispute call URI to retrieve a specific payment dispute. The getPaymentDispute method returns more details about a payment dispute than the getPaymentDisputeSummaries method.
  * paymentDisputeStatus `string`: The enumeration value in this field gives the current status of the payment dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeStateEnum'>eBay API documentation</a>
  * reason `string`: The enumeration value in this field gives the reason why the buyer initiated the payment dispute. See DisputeReasonEnum type for a description of the supported reasons that buyers can give for initiating a payment dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeReasonEnum'>eBay API documentation</a>
  * respondByDate `string`: The timestamp in this field shows the date/time when the seller must response to a payment dispute, so this field is only returned for payment disputes in the ACTION_NEEDED state. For payment disputes that require action by the seller, that same seller must call getPaymentDispute to see the next action(s) that they can take against the payment dispute. The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: yyyy-MM-ddThh:mm.ss.sssZ. An example would be 2019-08-04T19:09:02.768Z.

### PaymentHold
* PaymentHold `object`: This type contains information about a hold placed on a payment to a seller for an order, including the reason why the buyer's payment for the order is being held, the expected release date of the funds into the seller's account, the current state of the hold, and the actual release date if the payment has been released, and possible actions the seller can take to expedite the payout of funds into their account.
  * expectedReleaseDate `string`: The date and time that the payment being held is expected to be released to the seller. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field will be returned if known by eBay. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2015-08-04T19:09:02.768Z
  * holdAmount [Amount](#amount)
  * holdReason `string`: The reason that the payment is being held. A seller's payment may be held for a number of reasons, including when the seller is new, the seller's level is below standard, or if a return case or 'Significantly not as described' case is pending against the seller. This field is always returned with the paymentHolds array.
  * holdState `string`: The current stage or condition of the hold. This field is always returned with the paymentHolds array. Applicable values: HELD HELD_PENDING NOT_HELD RELEASE_CONFIRMED RELEASE_FAILED RELEASE_PENDING RELEASED
  * releaseDate `string`: The date and time that the payment being held was actually released to the seller. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the seller's payment is actually released into the seller's account. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2015-08-04T19:09:02.768Z
  * sellerActionsToRelease `array`: A list of one or more possible actions that the seller can take to expedite the release of the payment hold.
    * items [SellerActionsToRelease](#selleractionstorelease)

### PaymentSummary
* PaymentSummary `object`: This type contains information about the various monetary exchanges that apply to the net balance due for the order.
  * payments `array`: This array consists of payment information for the order, including payment status, payment method, payment amount, and payment date. This array is always returned, although some of the fields under this container will not be returned until payment has been made.
    * items [Payment](#payment)
  * refunds `array`: This array is always returned, but is returned as an empty array unless the seller has submitted a partial or full refund to the buyer for the order. If a refund has occurred, the refund amount and refund date will be shown for each refund.
    * items [OrderRefund](#orderrefund)
  * totalDueSeller [Amount](#amount)

### Phone
* Phone `object`: This type is used by the returnAddress
  * countryCode `string`: The seller's country calling code. This field is needed if the buyer is located in a different country than the seller. It is also OK to provide if the buyer and seller are both located in the same country. For a full list of calling codes for all countries, see the countrycode.org site.
  * number `string`: The seller's primary phone number associated with the return address. When this number is provided in a contestPaymentDispute or contestPaymentDispute method, it is provided as one continuous numeric string, including the area code. So, if the phone number's area code was '408', a number in this field may look something like this: &quot;number&quot; : &quot;4088084356&quot; If the buyer is located in a different country than the seller, the seller's country calling code will need to be specified in the countryCode field.

### PhoneNumber
* PhoneNumber `object`: This type contains a string field representing a telephone number.
  * phoneNumber `string`: The primary telephone number for the shipping recipient.

### PickupStep
* PickupStep `object`: This type is used to indicate the merchant's store where the buyer will pickup their In-Store Pickup order. The pickupStep container is only returned for In-Store Pickup orders. The In-Store Pickup feature is supported in the US, Canada, UK, Germany, and Australia marketplaces.
  * merchantLocationKey `string`: A merchant-defined unique identifier of the merchant's store where the buyer will pick up their In-Store Pickup order. This field is always returned with the pickupStep container.

### PostSaleAuthenticationProgram
* PostSaleAuthenticationProgram `object`: This type is used to provide the status and outcome of an order line item going through the Authenticity Guarantee verification process.
  * outcomeReason `string`: This field indicates the result of the authenticity verification inspection on an order line item. This field is not returned when the status value of the order line item is PENDING or PASSED. The possible values returned here are NOT_AUTHENTIC, NOT_AS_DESCRIBED, CUSTOMIZED, MISCATEGORIZED, or NOT_AUTHENTIC_NO_RETURN. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:AuthenticityVerificationReasonEnum'>eBay API documentation</a>
  * status `string`: The value in this field indicates whether the order line item has passed or failed the authenticity verification inspection, or if the inspection and/or results are still pending. The possible values returned here are PENDING, PASSED, FAILED, or PASSED_WITH_EXCEPTION. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:AuthenticityVerificationStatusEnum'>eBay API documentation</a>

### PricingSummary
* PricingSummary `object`: This type contains a summary of cumulative costs and charges for all line items of an order, including item price, price adjustments, sales taxes, delivery costs, and order discounts.
  * adjustment [Amount](#amount)
  * deliveryCost [Amount](#amount)
  * deliveryDiscount [Amount](#amount)
  * fee [Amount](#amount)
  * priceDiscountSubtotal [Amount](#amount)
  * priceSubtotal [Amount](#amount)
  * tax [Amount](#amount)
  * total [Amount](#amount)

### Program
* Program `object`: This type is used by the program container, which is returned for order line items eligible for the Authenticity Guarantee service.
  * authenticityVerification [PostSaleAuthenticationProgram](#postsaleauthenticationprogram)

### Refund
* Refund `object`: This is the base type of the issueRefund response payload. As long as the issueRefund method does not trigger an error, a response payload will be returned.
  * refundId `string`: The unique identifier of the order refund. This value is returned unless the refund operation fails (refundStatus value shows FAILED). This identifier can be used to track the status of the refund through a getOrder or getOrders call. For order-level refunds, check the paymentSummary.refunds.refundId field in the getOrder/getOrders response, and for line item level refunds, check the lineItems.refunds.refundId field(s) in the getOrder/getOrders response.
  * refundStatus `string`: The value returned in this field indicates the success or failure of the refund operation. A successful issueRefund operation should result in a value of PENDING. A failed issueRefund operation should result in a value of FAILED, and an HTTP status code and/or and API error code may also get returned to possibly indicate the issue. The refunds issued through this method are processed asynchronously, so the refund will not show as 'Refunded' right away. A seller will have to make a subsequent getOrder call to check the status of the refund. The status of an order refund can be found in the paymentSummary.refunds.refundStatus field of the getOrder response. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:RefundStatusEnum'>eBay API documentation</a>

### RefundItem
* RefundItem `object`: This type is used if the seller is issuing a refund for one or more individual order line items in a multiple line item order. Otherwise, the seller just uses the orderLevelRefundAmount container to specify the amount of the refund for the entire order.
  * legacyReference [LegacyReference](#legacyreference)
  * lineItemId `string`: The unique identifier of an order line item. This identifier is created once a buyer purchases a 'Buy It Now' item or if an auction listing ends with a winning bidder. Either this field or the legacyReference container is needed to identify an individual order line item that will receive a refund. Note: The lineItemId field is used to identify an order line item in REST API format, and the legacyReference container is used to identify an order line item in Trading/legacy API format. Both legacy and REST API identifiers are returned in getOrder (Fulfillment API) and GetOrders (Trading API).
  * refundAmount [SimpleAmount](#simpleamount)

### ReturnAddress
* ReturnAddress `object`: This type is used by the payment dispute methods, and is relevant if the buyer will be returning the item to the seller.
  * addressLine1 `string`: The first line of the street address.
  * addressLine2 `string`: The second line of the street address. This line is not always necessarily, but is often used for apartment number or suite number, or other relevant information that can not fit on the first line.
  * city `string`: The city of the return address.
  * country `string`: The country's two-digt, ISO 3166-1 country code. See the enumeration type for a country's value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a>
  * county `string`: The county of the return address. Counties are not applicable to all countries.
  * fullName `string`: The full name of return address owner.
  * postalCode `string`: The postal code of the return address.
  * primaryPhone [Phone](#phone)
  * stateOrProvince `string`: The state or province of the return address.

### SellerActionsToRelease
* SellerActionsToRelease `object`: This type is used to state possible action(s) that a seller can take to release a payment hold placed against an order.
  * sellerActionToRelease `string`: A possible action that the seller can take to expedite the release of a payment hold. A sellerActionToRelease field is returned for each possible action that a seller may take. Possible actions may include providing shipping/tracking information, issuing a refund, providing refund information, contacting customer support, etc.

### ShippingFulfillment
* ShippingFulfillment `object`: This type contains the complete details of an existing fulfillment for an order.
  * fulfillmentId `string`: The unique identifier of the fulfillment; for example, 9405509699937003457459. This eBay-generated value is created with a successful createShippingFulfillment call.
  * lineItems `array`: This array contains a list of one or more line items (and purchased quantity) to which the fulfillment applies.
    * items [LineItemReference](#lineitemreference)
  * shipmentTrackingNumber `string`: The tracking number provided by the shipping carrier for the package shipped in this fulfillment. This field is returned if available.
  * shippedDate `string`: The date and time that the fulfillment package was shipped. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field should only be returned if the package has been shipped. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2015-08-04T19:09:02.768Z
  * shippingCarrierCode `string`: The eBay code identifying the shipping carrier for this fulfillment. This field is returned if available. Note: The Trading API's ShippingCarrierCodeType enumeration type contains the most current list of eBay shipping carrier codes and the countries served by each carrier. See ShippingCarrierCodeType.

### ShippingFulfillmentDetails
* ShippingFulfillmentDetails `object`: This type contains the details for creating a fulfillment for an order.
  * lineItems `array`: This array contains a list of or more line items and the quantity that will be shipped in the same package.
    * items [LineItemReference](#lineitemreference)
  * shippedDate `string`: This is the actual date and time that the fulfillment package was shipped. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. The seller should use the actual date/time that the package was shipped, but if this field is omitted, it will default to the current date/time. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2015-08-04T19:09:02.768Z Default: The current date and time.
  * shippingCarrierCode `string`: The unique identifier of the shipping carrier being used to ship the line item(s). Technically, the shippingCarrierCode and trackingNumber fields are optional, but generally these fields will be provided if the shipping carrier and tracking number are known. Note: Use the Trading API's GeteBayDetails call to retrieve the latest shipping carrier enumeration values. When making the GeteBayDetails call, include the DetailName field in the request payload and set its value to ShippingCarrierDetails. Each valid shipping carrier enumeration value is returned in a ShippingCarrierDetails.ShippingCarrier field in the response payload.
  * trackingNumber `string`: The tracking number provided by the shipping carrier for this fulfillment. The seller should be careful that this tracking number is accurate since the buyer will use this tracking number to track shipment, and eBay has no way to verify the accuracy of this number. This field and the shippingCarrierCode field are mutually dependent. If you include one, you must also include the other. Note: If you include trackingNumber (and shippingCarrierCode) in the request, the resulting fulfillment's ID (returned in the HTTP location code) is the tracking number. If you do not include shipment tracking information, the resulting fulfillment ID will default to an arbitrary number such as 999.

### ShippingFulfillmentPagedCollection
* ShippingFulfillmentPagedCollection `object`: This type contains the specifications for the entire collection of shipping fulfillments that are associated with the order specified by a getShippingFulfillments call. The fulfillments container returns an array of all the fulfillments in the collection.
  * fulfillments `array`: This array contains one or more fulfillments required for the order that was specified in method endpoint.
    * items [ShippingFulfillment](#shippingfulfillment)
  * total `integer`: The total number of fulfillments in the specified order. Note: If no fulfillments are found for the order, this field is returned with a value of 0.
  * warnings `array`: This array is only returned if one or more errors or warnings occur with the call request.
    * items [Error](#error)

### ShippingStep
* ShippingStep `object`: This type contains shipping information for a fulfillment, including the shipping carrier, the shipping service option, the shipment destination, and the Global Shipping Program reference ID.
  * shipTo [ExtendedContact](#extendedcontact)
  * shipToReferenceId `string`: This is the unique identifer of the Global Shipping Program (GSP) shipment. This field is only returned if the line item is being shipped via GSP (the value of the fulfillmentStartInstructions.ebaySupportedFulfillment field will be true. The international shipping provider uses the shipToReferenceId value as the primary reference number to retrieve the relevant details about the buyer, the order, and the fulfillment, so the shipment can be completed. Sellers must include this value on the shipping label immediately above the street address of the international shipping provider. Example: &quot;Reference #1234567890123456&quot; Note: This value is the same as the ShipToAddress.ReferenceID value returned by the Trading API's GetOrders call.
  * shippingCarrierCode `string`: The unique identifier of the shipping carrier being used to ship the line item. Note: The Trading API's GeteBayDetails call can be used to retrieve the latest shipping carrier and shipping service option enumeration values.
  * shippingServiceCode `string`: The unique identifier of the shipping service option being used to ship the line item. Note: Use the Trading API's GeteBayDetails call to retrieve the latest shipping carrier and shipping service option enumeration values. When making the GeteBayDetails call, include the DetailName field in the request payload and set its value to ShippingServiceDetails. Each valid shipping service option (returned in ShippingServiceDetails.ShippingService field) and corresponding shipping carrier (returned in ShippingServiceDetails.ShippingCarrier field) is returned in response payload.

### SimpleAmount
* SimpleAmount `object`: This type defines the monetary value of the payment dispute, and the currency used.
  * currency `string`: A three-letter ISO 4217 code (such as USD for US site) that indicates the currency of the amount in the value field. Both the value and currency fields are always returned with the amount container. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a>
  * value `string`: The monetary amount of the payment dispute. Both the value and currency fields are always returned with the amount container.

### Tax
* Tax `object`: This type contains information about any sales tax applied to a line item.
  * amount [Amount](#amount)
  * taxType `string`: Tax type. This field is only available when fieldGroups is set to TAX_BREAKDOWN. If the order has fees, a breakdown of the fees is also provided. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:TaxTypeEnum'>eBay API documentation</a>

### TaxAddress
* TaxAddress `object`: This container consists of address information that can be used by sellers for tax purpose.
  * city `string`: The city name that can be used by sellers for tax purpose.
  * countryCode `string`: The country code that can be used by sellers for tax purpose, represented as a two-letter ISO 3166-1 alpha-2 country code. For example, US represents the United States, and DE represents Germany. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a>
  * postalCode `string`: The postal code that can be used by sellers for tax purpose. Usually referred to as Zip codes in the US.
  * stateOrProvince `string`: The state name that can be used by sellers for tax purpose.

### TaxIdentifier
* TaxIdentifier `object`: This type is used by the taxIdentifier container that is returned in getOrder. The taxIdentifier container consists of taxpayer identification information for buyers from Italy, Spain, or Guatemala. It is currently only returned for orders occurring on the eBay Italy or eBay Spain marketplaces. Note: Currently, the taxIdentifier container is only returned in getOrder and not in getOrders. So, if a seller wanted to view a buyer's tax information for a particular order returned in getOrders, that seller would need to use the orderId value for that particular order, and then run a getOrder call against that order ID.
  * issuingCountry `string`: This two-letter code indicates the country that issued the buyer's tax ID. The country that the two-letter code represents can be found in the CountryCodeEnum type, or in the ISO 3166 standard. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a>
  * taxIdentifierType `string`: This enumeration value indicates the type of tax identification being used for the buyer. The different tax types are defined in the TaxIdentifierTypeEnum type. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:TaxIdentifierTypeEnum'>eBay API documentation</a>
  * taxpayerId `string`: This value is the unique tax ID associated with the buyer. The type of tax identification is shown in the taxIdentifierType field.

### TrackingInfo
* TrackingInfo `object`: This type is used by the shipmentTracking array returned under the evidence container if the seller has provided shipment tracking information as evidence to support PROOF_OF_DELIVERY for an INR-related payment dispute.
  * shipmentTrackingNumber `string`: This string value represents the shipment tracking number of the package.
  * shippingCarrierCode `string`: This string value represents the shipping carrier used to ship the package.

### UpdateEvidencePaymentDisputeRequest
* UpdateEvidencePaymentDisputeRequest `object`: This type is used by the request payload of the updateEvidence method. The updateEvidence method is used to update an existing evidence set against a payment dispute with one or more evidence files.
  * evidenceId `string`: The unique identifier of the evidence set that is being updated with new evidence files.
  * evidenceType `string`: This field is used to indicate the type of evidence being provided through one or more evidence files. All evidence files (if more than one) should be associated with the evidence type passed in this field. See the EvidenceTypeEnum type for the supported evidence types. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a>
  * files `array`: This array is used to specify one or more evidence files that will be added to the evidence set associated with a payment dispute. At least one evidence file must be specified in the files array. The unique identifier of an evidence file is returned in the response payload of the uploadEvidence method.
    * items [FileEvidence](#fileevidence)
  * lineItems `array`: This required array identifies the order line item(s) for which the evidence file(s) will be applicable. Both the itemId and lineItemID fields are needed to identify each order line item, and both of these values are returned under the evidenceRequests.lineItems array in the getPaymentDispute response.
    * items [OrderLineItems](#orderlineitems)


