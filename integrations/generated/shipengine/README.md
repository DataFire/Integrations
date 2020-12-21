# @datafire/shipengine

Client library for ShipEngine API

## Installation and Usage
```bash
npm install --save @datafire/shipengine
```
```js
let shipengine = require('@datafire/shipengine').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

ShipEngine's easy-to-use REST API lets you manage all of your shipping needs without worrying about the complexities of different carrier APIs and protocols. We handle all the heavy lifting so you can focus on providing a first-class shipping experience for your customers at the best possible prices.

Each of ShipEngine's features can be used by itself or in conjunction with each other to build powerful shipping functionality into your application or service.

## Getting Started
If you're new to REST APIs then be sure to read our [introduction to REST](https://www.shipengine.com/docs/rest/) to understand the basics. Learn how to [authenticate yourself to ShipEngine](https://www.shipengine.com/docs/auth/), and then use our [sandbox environment](https://www.shipengine.com/docs/sandbox/) to kick the tires and get familiar with our API. If you run into any problems, then be sure to check the [error handling guide](https://www.shipengine.com/docs/errors/) for tips.

Here are some step-by-step **tutorials** to get you started:

  - [Learn how to create your first shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
  - [Calculate shipping costs and compare rates across carriers](https://www.shipengine.com/docs/rates/)
  - [Track packages on-demand or in real time](https://www.shipengine.com/docs/tracking/)
  - [Validate mailing addresses anywhere on Earth](https://www.shipengine.com/docs/addresses/validation/)


## Shipping Labels for Every Major Carrier
ShipEngine makes it easy to [create shipping labels for any carrier](https://www.shipengine.com/docs/labels/create-a-label/) and [download them](https://www.shipengine.com/docs/labels/downloading/) in a [variety of file formats](https://www.shipengine.com/docs/labels/formats/). You can even customize labels with your own [messages](https://www.shipengine.com/docs/labels/messages/) and [images](https://www.shipengine.com/docs/labels/branding/).


## Real-Time Package Tracking
With ShipEngine you can [get the current status of a package](https://www.shipengine.com/docs/tracking/) or [subscribe to real-time tracking updates](https://www.shipengine.com/docs/tracking/webhooks/) via webhooks. You can also create [custimized tracking pages](https://www.shipengine.com/docs/tracking/branded-tracking-page/) with your own branding so your customers will always know where their package is.


## Compare Shipping Costs Across Carriers
Make sure you ship as cost-effectively as possible by [comparing rates across carriers](https://www.shipengine.com/docs/rates/get-shipment-rates/) using the ShipEngine Rates API. Or if you don't know the full shipment details yet, then you can [get rate estimates](https://www.shipengine.com/docs/rates/estimate/) with limited address info.


## Worldwide Address Validation
ShipEngine supports [address validation](https://www.shipengine.com/docs/addresses/validation/) for virtually [every country on Earth](https://www.shipengine.com/docs/addresses/validation/countries/), including the United States, Canada, Great Britain, Australia, Germany, France, Norway, Spain, Sweden, Israel, Italy, and over 160 others.


## Actions

### parse_address
The address-recognition API makes it easy for you to extract address data from unstructured text, including the recipient name, line 1, line 2, city, postal code, and more.

Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's address-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed address data is returned in the same structure that's used for other ShipEngine APIs, such as address validation, rate quotes, and shipping labels.

> **Note:** Address recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.



```js
shipengine.parse_address({
  "body": {
    "text": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [parse_address_request_body](#parse_address_request_body)

#### Output
* output [parse_address_response_body](#parse_address_response_body)

### validate_address
Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges.
ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues.



```js
shipengine.validate_address({
  "body": []
}, context)
```

#### Input
* input `object`
  * body **required** [validate_address_request_body](#validate_address_request_body)

#### Output
* output [validate_address_response_body](#validate_address_response_body)

### list_batches
List Batches associated with your Shipengine account


```js
shipengine.list_batches({}, context)
```

#### Input
* input `object`
  * status `string` (values: open, queued, processing, completed, completed_with_errors, archived, notifying, invalid): The possible batch status values
  * page `integer`: Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
  * page_size `integer`: The number of results to return per response.
  * sort_dir `string`: Controls the sort order of the query.
  * sort_by `string` (values: ship_date, processed_at): The possible batches sort by values

#### Output
* output [list_batches_response_body](#list_batches_response_body)

### create_batch
Create a Batch


```js
shipengine.create_batch({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [create_batch_request_body](#create_batch_request_body)

#### Output
* output [create_batch_response_body](#create_batch_response_body)

### get_batch_by_external_id
Get Batch By External ID


```js
shipengine.get_batch_by_external_id({
  "external_batch_id": ""
}, context)
```

#### Input
* input `object`
  * external_batch_id **required** `string`

#### Output
* output [get_batch_by_external_id_response_body](#get_batch_by_external_id_response_body)

### delete_batch
Delete Batch By Id


```js
shipengine.delete_batch({
  "batch_id": ""
}, context)
```

#### Input
* input `object`
  * batch_id **required** `string`: Batch ID

#### Output
* output [empty_response_body](#empty_response_body)

### get_batch_by_id
Get Batch By ID


```js
shipengine.get_batch_by_id({
  "batch_id": ""
}, context)
```

#### Input
* input `object`
  * batch_id **required** `string`: Batch ID

#### Output
* output [get_batch_by_id_response_body](#get_batch_by_id_response_body)

### update_batch
Update Batch By Id


```js
shipengine.update_batch({
  "batch_id": ""
}, context)
```

#### Input
* input `object`
  * batch_id **required** `string`: Batch ID

#### Output
* output [empty_response_body](#empty_response_body)

### add_to_batch
Add a Shipment or Rate to a Batch


```js
shipengine.add_to_batch({
  "body": {},
  "batch_id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [add_to_batch_request_body](#add_to_batch_request_body)
  * batch_id **required** `string`: Batch ID

#### Output
* output [empty_response_body](#empty_response_body)

### list_batch_errors
Error handling in batches are handled differently than in a single synchronous request.
You must retrieve the status of your batch by [getting a batch](https://www.shipengine.com/docs/reference/get-batch-by-id/) and getting an overview of the statuses or you can list errors directly here below to get detailed information about the errors.



```js
shipengine.list_batch_errors({
  "batch_id": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
  * pagesize `integer`
  * batch_id **required** `string`: Batch ID

#### Output
* output [list_batch_errors_response_body](#list_batch_errors_response_body)

### process_batch
Process Batch ID Labels


```js
shipengine.process_batch({
  "body": {},
  "batch_id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [process_batch_request_body](#process_batch_request_body)
  * batch_id **required** `string`: Batch ID

#### Output
* output [empty_response_body](#empty_response_body)

### remove_from_batch
Remove a shipment or rate from a batch


```js
shipengine.remove_from_batch({
  "body": {},
  "batch_id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [remove_from_batch_request_body](#remove_from_batch_request_body)
  * batch_id **required** `string`: Batch ID

#### Output
* output [empty_response_body](#empty_response_body)

### list_carriers
List all carriers that have been added to this account


```js
shipengine.list_carriers(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [get_carriers_response_body](#get_carriers_response_body)

### get_carrier_by_id
Retrive carrier info by ID


```js
shipengine.get_carrier_by_id({
  "carrier_id": ""
}, context)
```

#### Input
* input `object`
  * carrier_id **required** `string`: Carrier ID

#### Output
* output [get_carrier_by_id_response_body](#get_carrier_by_id_response_body)

### add_funds_to_carrier
Add Funds To A Carrier


```js
shipengine.add_funds_to_carrier({
  "body": {
    "currency": null,
    "amount": 0
  },
  "carrier_id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [add_funds_to_carrier_request_body](#add_funds_to_carrier_request_body)
  * carrier_id **required** `string`: Carrier ID

#### Output
* output [add_funds_to_carrier_response_body](#add_funds_to_carrier_response_body)

### get_carrier_options
Get a list of the options available for the carrier


```js
shipengine.get_carrier_options({
  "carrier_id": ""
}, context)
```

#### Input
* input `object`
  * carrier_id **required** `string`: Carrier ID

#### Output
* output [get_carrier_options_response_body](#get_carrier_options_response_body)

### list_carrier_package_types
List the package types associated with the carrier


```js
shipengine.list_carrier_package_types({
  "carrier_id": ""
}, context)
```

#### Input
* input `object`
  * carrier_id **required** `string`: Carrier ID

#### Output
* output [list_carrier_package_types_response_body](#list_carrier_package_types_response_body)

### list_carrier_services
List the services associated with the carrier ID


```js
shipengine.list_carrier_services({
  "carrier_id": ""
}, context)
```

#### Input
* input `object`
  * carrier_id **required** `string`: Carrier ID

#### Output
* output [list_carrier_services_response_body](#list_carrier_services_response_body)

### connect_carrier
Connect a carrier account


```js
shipengine.connect_carrier({
  "body": null,
  "carrier_name": ""
}, context)
```

#### Input
* input `object`
  * body **required** [connect_carrier_request_body](#connect_carrier_request_body)
  * carrier_name **required** `string` (values: access_worldwide, amazon_buy_shipping, apc, asendia, australia_post, canada_post, dhl_ecommerce, dhl_express, dhl_express_au, dhl_express_ca, dhl_express_uk, dpd, endicia, fedex, fedex_uk, firstmile, globegistics, imex, newgistics, ontrac, purolator_canada, royal_mail, rr_donnelley, seko, sendle, stamps_com, ups): The carrier name, such as `stamps_com`, `ups`, `fedex`, or `dhl_express`.

#### Output
* output [connect_carrier_response_body](#connect_carrier_response_body)

### disconnect_carrier
Disconnect a carrier


```js
shipengine.disconnect_carrier({
  "carrier_name": "",
  "carrier_id": ""
}, context)
```

#### Input
* input `object`
  * carrier_name **required** `string` (values: access_worldwide, amazon_buy_shipping, apc, asendia, australia_post, canada_post, dhl_ecommerce, dhl_express, dhl_express_au, dhl_express_ca, dhl_express_uk, dpd, endicia, fedex, fedex_uk, firstmile, globegistics, imex, newgistics, ontrac, purolator_canada, royal_mail, rr_donnelley, seko, sendle, stamps_com, ups): The carrier name, such as `stamps_com`, `ups`, `fedex`, or `dhl_express`.
  * carrier_id **required** `string`: Carrier ID

#### Output
* output [empty_response_body](#empty_response_body)

### get_carrier_settings
Get carrier settings


```js
shipengine.get_carrier_settings({
  "carrier_name": "",
  "carrier_id": ""
}, context)
```

#### Input
* input `object`
  * carrier_name **required** `string` (values: dhl_express, fedex, newgistics, ups): The carrier name, such as `stamps_com`, `ups`, `fedex`, or `dhl_express`.
  * carrier_id **required** `string`: Carrier ID

#### Output
* output [get_carrier_settings_response_body](#get_carrier_settings_response_body)

### update_carrier_settings
Update carrier settings


```js
shipengine.update_carrier_settings({
  "body": null,
  "carrier_name": "",
  "carrier_id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [update_carrier_settings_request_body](#update_carrier_settings_request_body)
  * carrier_name **required** `string` (values: dhl_express, fedex, newgistics, ups): The carrier name, such as `stamps_com`, `ups`, `fedex`, or `dhl_express`.
  * carrier_id **required** `string`: Carrier ID

#### Output
* output [empty_response_body](#empty_response_body)

### disconnect_insurer
Disconnect a Shipsurance Account


```js
shipengine.disconnect_insurer(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [disconnect_insurer_response_body](#disconnect_insurer_response_body)

### connect_insurer
Connect a Shipsurance Account


```js
shipengine.connect_insurer({
  "body": {
    "email": null,
    "policy_id": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [connect_insurer_request_body](#connect_insurer_request_body)

#### Output
* output [connect_insurer_response_body](#connect_insurer_response_body)

### download_file
Get File


```js
shipengine.download_file({
  "subdir": "",
  "filename": "",
  "dir": ""
}, context)
```

#### Input
* input `object`
  * download `string`
  * subdir **required** `string`
  * filename **required** `string`
  * dir **required** `string`

#### Output
* output [download_file_pdf_response_body](#download_file_pdf_response_body)

### list_webhooks
List all webhooks currently enabled for the account.


```js
shipengine.list_webhooks(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [list_webhooks_response_body](#list_webhooks_response_body)

### create_webhook
Create a webook for specific events in the environment.


```js
shipengine.create_webhook({
  "body": {
    "event": null,
    "url": null
  }
}, context)
```

#### Input
* input `object`
  * body **required** [create_webhook_request_body](#create_webhook_request_body)

#### Output
* output [create_webhook_response_body](#create_webhook_response_body)

### delete_webhook
Delete a webhook


```js
shipengine.delete_webhook({
  "webhook_id": ""
}, context)
```

#### Input
* input `object`
  * webhook_id **required** `string`: Webhook ID

#### Output
* output [empty_response_body](#empty_response_body)

### get_webhook_by_id
Retrieve individual webhook by an ID


```js
shipengine.get_webhook_by_id({
  "webhook_id": ""
}, context)
```

#### Input
* input `object`
  * webhook_id **required** `string`: Webhook ID

#### Output
* output [get_webhook_by_id_response_body](#get_webhook_by_id_response_body)

### update_webhook
Update the webhook url property


```js
shipengine.update_webhook({
  "body": {},
  "webhook_id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [update_webhook_request_body](#update_webhook_request_body)
  * webhook_id **required** `string`: Webhook ID

#### Output
* output [empty_response_body](#empty_response_body)

### add_funds_to_insurance
You may need to auto fund your account from time to time. For example, if you don't normally ship items over $100,
and may want to add funds to insurance rather than keeping the account funded.



```js
shipengine.add_funds_to_insurance({
  "body": {
    "currency": null,
    "amount": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [add_funds_to_insurance_request_body](#add_funds_to_insurance_request_body)

#### Output
* output [add_funds_to_insurance_response_body](#add_funds_to_insurance_response_body)

### get_insurance_balance
Retrieve the balance of your Shipsurance account.


```js
shipengine.get_insurance_balance(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [get_insurance_balance_response_body](#get_insurance_balance_response_body)

### list_labels
This endpoint returns a list of labels that you've [created](https://www.shipengine.com/docs/labels/create-a-label/). You can optionally filter the results as well as control their sort order and the number of results returned at a time.

By default, all labels are returned, 25 at a time, starting with the most recently created ones.  You can combine multiple filter options to narrow-down the results.  For example, if you only want to get your UPS labels for your east coast warehouse you could query by both `warehouse_id` and `carrier_id`



```js
shipengine.list_labels({}, context)
```

#### Input
* input `object`
  * label_status `string` (values: processing, completed, error, voided): Only return labels that are currently in the specified status
  * service_code `string`: Only return labels for a specific [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/)
  * carrier_id `string`: Only return labels for a specific [carrier account](https://www.shipengine.com/docs/carriers/setup/)
  * tracking_number `string`: Only return labels with a specific tracking number
  * batch_id `string`: Only return labels that were created in a specific [batch](https://www.shipengine.com/docs/labels/bulk/)
  * rate_id `string`: Rate ID
  * shipment_id `string`: Shipment ID
  * warehouse_id `string`: Only return labels that originate from a specific [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/)
  * created_at_start `string`: Only return labels that were created on or after a specific date/time
  * created_at_end `string`: Only return labels that were created on or before a specific date/time
  * page `integer`: Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
  * page_size `integer`: The number of results to return per response.
  * sort_dir `string`: Controls the sort order of the query.
  * sort_by `string` (values: modified_at, created_at): Controls which field the query is sorted by.

#### Output
* output [list_labels_response_body](#list_labels_response_body)

### create_label
Purchase and print a label for shipment


```js
shipengine.create_label({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [create_label_request_body](#create_label_request_body)

#### Output
* output [create_label_response_body](#create_label_response_body)

### get_label_by_external_shipment_id
Find a label by using the external shipment id that was used during label creation



```js
shipengine.get_label_by_external_shipment_id({
  "external_shipment_id": ""
}, context)
```

#### Input
* input `object`
  * label_download_type `string` (values: url, inline): There are two different ways to [download a label](https://www.shipengine.com/docs/labels/downloading/):
  * external_shipment_id **required** `string`

#### Output
* output [get_label_by_external_shipment_id_response_body](#get_label_by_external_shipment_id_response_body)

### create_label_from_rate
When retrieving rates for shipments using the `/rates` endpoint, the returned information contains a `rate_id` property that can be used
to generate a label without having to refill in the shipment information repeatedly.



```js
shipengine.create_label_from_rate({
  "body": {},
  "rate_id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [create_label_from_rate_request_body](#create_label_from_rate_request_body)
  * rate_id **required** `string`: Rate ID

#### Output
* output [create_label_from_rate_response_body](#create_label_from_rate_response_body)

### create_label_from_shipment
Purchase a label using a shipment ID that has already been created with the desired address and
package info.



```js
shipengine.create_label_from_shipment({
  "body": {},
  "shipment_id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [create_label_from_shipment_request_body](#create_label_from_shipment_request_body)
  * shipment_id **required** `string`: Shipment ID

#### Output
* output [create_label_from_shipment_response_body](#create_label_from_shipment_response_body)

### get_label_by_id
Retrieve information for individual labels.


```js
shipengine.get_label_by_id({
  "label_id": ""
}, context)
```

#### Input
* input `object`
  * label_download_type `string` (values: url, inline): There are two different ways to [download a label](https://www.shipengine.com/docs/labels/downloading/):
  * label_id **required** `string`: Label ID

#### Output
* output [get_label_by_id_response_body](#get_label_by_id_response_body)

### create_return_label
Create a return label


```js
shipengine.create_return_label({
  "body": {},
  "label_id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [create_return_label_request_body](#create_return_label_request_body)
  * label_id **required** `string`: Label ID

#### Output
* output [create_return_label_response_body](#create_return_label_response_body)

### get_tracking_log_from_label
Retrieve the label's tracking information


```js
shipengine.get_tracking_log_from_label({
  "label_id": ""
}, context)
```

#### Input
* input `object`
  * label_id **required** `string`: Label ID

#### Output
* output [get_tracking_log_from_label_response_body](#get_tracking_log_from_label_response_body)

### void_label
Void a label by ID to get a refund.


```js
shipengine.void_label({
  "label_id": ""
}, context)
```

#### Input
* input `object`
  * label_id **required** `string`: Label ID

#### Output
* output [void_label_response_body](#void_label_response_body)

### list_manifests
Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.


```js
shipengine.list_manifests({}, context)
```

#### Input
* input `object`
  * warehouse_id `string`: Warehouse ID
  * ship_date_start `string`: ship date start range
  * ship_date_end `string`: ship date end range
  * created_at_start `string`: Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
  * created_at_end `string`: Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)
  * carrier_id `string`: Carrier ID
  * page `integer`: Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
  * page_size `integer`: The number of results to return per response.
  * label_ids `array`: Array of label ids

#### Output
* output [list_manifests_response_body](#list_manifests_response_body)

### create_manifest
Each ShipEngine manifest is created for a specific warehouse, so you'll need to provide the warehouse_id
rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for.



```js
shipengine.create_manifest({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [create_manifest_request_body](#create_manifest_request_body)

#### Output
* output [create_manifest_response_body](#create_manifest_response_body)

### get_manifest_by_id
Get Manifest By Id


```js
shipengine.get_manifest_by_id({
  "manifest_id": ""
}, context)
```

#### Input
* input `object`
  * manifest_id **required** `string`: The Manifest Id

#### Output
* output [get_manifest_by_id_response_body](#get_manifest_by_id_response_body)

### list_package_types
List the custom package types associated with the account


```js
shipengine.list_package_types(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [list_package_types_response_body](#list_package_types_response_body)

### create_package_type
Create a custom package type to better assist in getting accurate rate estimates


```js
shipengine.create_package_type({
  "body": {
    "name": "",
    "package_code": null
  }
}, context)
```

#### Input
* input `object`
  * body **required** [create_package_type_request_body](#create_package_type_request_body)

#### Output
* output [create_package_type_response_body](#create_package_type_response_body)

### delete_package_type
Delete a custom package using the ID


```js
shipengine.delete_package_type({
  "package_id": ""
}, context)
```

#### Input
* input `object`
  * package_id **required** `string`: Package ID

#### Output
* output [empty_response_body](#empty_response_body)

### get_package_type_by_id
Get Custom Package Type by ID


```js
shipengine.get_package_type_by_id({
  "package_id": ""
}, context)
```

#### Input
* input `object`
  * package_id **required** `string`: Package ID

#### Output
* output [get_package_type_by_id_response_body](#get_package_type_by_id_response_body)

### update_package_type
Update the custom package type object by ID


```js
shipengine.update_package_type({
  "body": {
    "name": "",
    "package_code": null
  },
  "package_id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [update_package_type_request_body](#update_package_type_request_body)
  * package_id **required** `string`: Package ID

#### Output
* output [empty_response_body](#empty_response_body)

### calculate_rates
It's not uncommon that you want to give your customer the choice between whether they want to ship the fastest, cheapest, or the most trusted route. Most companies don't solely ship things using a single shipping option;
so we provide functionality to show you all your options!



```js
shipengine.calculate_rates({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [calculate_rates_request_body](#calculate_rates_request_body)

#### Output
* output [calculate_rates_response_body](#calculate_rates_response_body)

### compare_bulk_rates
Get Bulk Shipment Rates


```js
shipengine.compare_bulk_rates({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [compare_bulk_rates_request_body](#compare_bulk_rates_request_body)

#### Output
* output [compare_bulk_rates_response_body](#compare_bulk_rates_response_body)

### estimate_rates
Get Rate Estimates


```js
shipengine.estimate_rates({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [estimate_rates_request_body](#estimate_rates_request_body)

#### Output
* output [estimate_rates_response_body](#estimate_rates_response_body)

### get_rate_by_id
Retrieve a previously queried rate by its ID


```js
shipengine.get_rate_by_id({
  "rate_id": ""
}, context)
```

#### Input
* input `object`
  * rate_id **required** `string`: Rate ID

#### Output
* output [get_rate_by_id_response_body](#get_rate_by_id_response_body)

### list_shipments
Get list of Shipments


```js
shipengine.list_shipments({}, context)
```

#### Input
* input `object`
  * shipment_status `string` (values: pending, processing, label_purchased, cancelled): The possible shipment status values
  * batch_id `string`: Batch ID
  * tag `string`: Search for shipments based on the custom tag added to the shipment object
  * created_at_start `string`: Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
  * created_at_end `string`: Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)
  * modified_at_start `string`: Used to create a filter for when a resource was modified (ex. A shipment that was modified after a certain time)
  * modified_at_end `string`: Used to create a filter for when a resource was modified (ex. A shipment that was modified before a certain time)
  * page `integer`: Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
  * page_size `integer`: The number of results to return per response.
  * sales_order_id `string`: Sales Order ID
  * sort_dir `string`: Controls the sort order of the query.
  * sort_by `string` (values: modified_at, created_at): The possible shipments sort by values

#### Output
* output [list_shipments_response_body](#list_shipments_response_body)

### create_shipments
Create one or multiple shipments.


```js
shipengine.create_shipments({
  "body": {
    "shipments": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [create_shipments_request_body](#create_shipments_request_body)

#### Output
* output [create_shipments_response_body](#create_shipments_response_body)

### get_shipment_by_external_id
Query Shipments created using your own custom ID convention using this endpint


```js
shipengine.get_shipment_by_external_id({
  "external_shipment_id": ""
}, context)
```

#### Input
* input `object`
  * external_shipment_id **required** `string`

#### Output
* output [get_shipment_by_external_id_response_body](#get_shipment_by_external_id_response_body)

### parse_shipment
The shipment-recognition API makes it easy for you to extract shipping data from unstructured text, including people's names, addresses, package weights and dimensions, insurance and delivery requirements, and more.

Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's shipment-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed shipment data is returned in the same structure that's used for other ShipEngine APIs, so you can easily use the parsed data to create a shipping label.

> **Note:** Shipment recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.



```js
shipengine.parse_shipment({
  "body": {
    "text": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [parse_shipment_request_body](#parse_shipment_request_body)

#### Output
* output [parse_shipment_response_body](#parse_shipment_response_body)

### get_shipment_by_id
Get an individual shipment based on its ID


```js
shipengine.get_shipment_by_id({
  "shipment_id": ""
}, context)
```

#### Input
* input `object`
  * shipment_id **required** `string`: Shipment ID

#### Output
* output [get_shipment_by_id_response_body](#get_shipment_by_id_response_body)

### update_shipment
Update a shipment object based on its ID


```js
shipengine.update_shipment({
  "body": {},
  "shipment_id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [update_shipment_request_body](#update_shipment_request_body)
  * shipment_id **required** `string`: Shipment ID

#### Output
* output [update_shipment_response_body](#update_shipment_response_body)

### cancel_shipments
Mark a shipment cancelled, if it is no longer needed or being used by your organized. Any label associated with the shipment needs to be voided first
An example use case would be if a batch label creation job is going to run at a set time and only queries `pending` shipments. Marking a shipment as cancelled
would remove it from this process



```js
shipengine.cancel_shipments({
  "shipment_id": ""
}, context)
```

#### Input
* input `object`
  * shipment_id **required** `string`: Shipment ID

#### Output
* output [empty_response_body](#empty_response_body)

### list_shipment_errors
If there are no errors associated with this shipment then the API will return a 404 Not Found response to indicate
that no errors are associated with the request



```js
shipengine.list_shipment_errors({
  "shipment_id": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
  * pagesize `integer`
  * shipment_id **required** `string`: Shipment ID

#### Output
* output [list_shipment_errors_response_body](#list_shipment_errors_response_body)

### list_shipment_rates
Get Rates for the shipment information associated with the shipment ID


```js
shipengine.list_shipment_rates({
  "shipment_id": ""
}, context)
```

#### Input
* input `object`
  * created_at_start `string`: Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
  * shipment_id **required** `string`: Shipment ID

#### Output
* output [list_shipment_rates_response_body](#list_shipment_rates_response_body)

### untag_shipment
Remove an existing tag from the Shipment object


```js
shipengine.untag_shipment({
  "shipment_id": "",
  "tag_name": ""
}, context)
```

#### Input
* input `object`
  * shipment_id **required** `string`: Shipment ID
  * tag_name **required** `string`: Tags are arbitrary strings that you can use to categorize shipments. For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.

#### Output
* output [empty_response_body](#empty_response_body)

### tag_shipment
Add a tag to the shipment object


```js
shipengine.tag_shipment({
  "shipment_id": "",
  "tag_name": ""
}, context)
```

#### Input
* input `object`
  * shipment_id **required** `string`: Shipment ID
  * tag_name **required** `string`: Tags are arbitrary strings that you can use to categorize shipments. For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.

#### Output
* output [tag_shipment_response_body](#tag_shipment_response_body)

### list_tags
Get a list of all tags associated with an account.


```js
shipengine.list_tags(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [list_tags_response_body](#list_tags_response_body)

### delete_tag
Delete a tag that is no longer needed


```js
shipengine.delete_tag({
  "tag_name": ""
}, context)
```

#### Input
* input `object`
  * tag_name **required** `string`: Tags are arbitrary strings that you can use to categorize shipments. For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.

#### Output
* output [empty_response_body](#empty_response_body)

### create_tag
Create a new Tag for customizing how you track your shipments


```js
shipengine.create_tag({
  "tag_name": ""
}, context)
```

#### Input
* input `object`
  * tag_name **required** `string`: Tags are arbitrary strings that you can use to categorize shipments. For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.

#### Output
* output [create_tag_response_body](#create_tag_response_body)

### rename_tag
Change a tag name while still keeping the relevant shipments attached to it


```js
shipengine.rename_tag({
  "tag_name": "",
  "new_tag_name": ""
}, context)
```

#### Input
* input `object`
  * tag_name **required** `string`: Tags are arbitrary strings that you can use to categorize shipments. For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.
  * new_tag_name **required** `string`: Tags are arbitrary strings that you can use to categorize shipments. For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.

#### Output
* output [empty_response_body](#empty_response_body)

### get_tracking_log
Retrieve package tracking information


```js
shipengine.get_tracking_log({}, context)
```

#### Input
* input `object`
  * carrier_code `string`: Carrier code used to retrieve tracking information
  * tracking_number `string`: The tracking number associated with a shipment

#### Output
* output [get_tracking_log_response_body](#get_tracking_log_response_body)

### start_tracking
Allows you to subscribe to tracking updates for a package. You specify the carrier_code and tracking_number of the package,
and receive notifications via webhooks whenever the shipping status changes.



```js
shipengine.start_tracking({}, context)
```

#### Input
* input `object`
  * carrier_code `string`: Carrier code used to retrieve tracking information
  * tracking_number `string`: The tracking number associated with a shipment

#### Output
* output [empty_response_body](#empty_response_body)

### stop_tracking
Unsubscribe from tracking updates for a package.


```js
shipengine.stop_tracking({}, context)
```

#### Input
* input `object`
  * carrier_code `string`: Carrier code used to retrieve tracking information
  * tracking_number `string`: The tracking number associated with a shipment

#### Output
* output [empty_response_body](#empty_response_body)

### list_warehouses
Retrieve a list of warehouses associated with this account.


```js
shipengine.list_warehouses(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [list_warehouses_response_body](#list_warehouses_response_body)

### create_warehouse
Create a warehouse location that you can use to create shipping items by simply passing in the generated warehouse id.
If the return address is not supplied in the request body then it is assumed that the origin address is the return address as well



```js
shipengine.create_warehouse({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [create_warehouse_request_body](#create_warehouse_request_body)

#### Output
* output [create_warehouse_response_body](#create_warehouse_response_body)

### delete_warehouse
Delete a warehouse by ID


```js
shipengine.delete_warehouse({
  "warehouse_id": ""
}, context)
```

#### Input
* input `object`
  * warehouse_id **required** `string`: Warehouse ID

#### Output
* output [empty_response_body](#empty_response_body)

### get_warehouse_by_id
Retrieve warehouse data based on the warehouse ID


```js
shipengine.get_warehouse_by_id({
  "warehouse_id": ""
}, context)
```

#### Input
* input `object`
  * warehouse_id **required** `string`: Warehouse ID

#### Output
* output [get_warehouse_by_id_response_body](#get_warehouse_by_id_response_body)

### update_warehouse
Update Warehouse object information


```js
shipengine.update_warehouse({
  "body": {},
  "warehouse_id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [update_warehouse_request_body](#update_warehouse_request_body)
  * warehouse_id **required** `string`: Warehouse ID

#### Output
* output [empty_response_body](#empty_response_body)



## Definitions

### add_funds_to_carrier_request_body
* add_funds_to_carrier_request_body `object`: An add funds to carrier request body
  * amount **required** `number`: The monetary amount, in the specified currency.
  * currency **required**

### add_funds_to_carrier_response_body
* add_funds_to_carrier_response_body `object`: The current balance of the requested carrier account
  * balance **required**: The current balance of the account
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**

### add_funds_to_insurance_request_body
* add_funds_to_insurance_request_body `object`: An add funds to insurance request body
  * amount **required** `number`: The monetary amount, in the specified currency.
  * currency **required**

### add_funds_to_insurance_response_body
* add_funds_to_insurance_response_body `object`: Add funds to insurance response body
  * amount **required** `number`: The monetary amount, in the specified currency.
  * currency **required**

### add_to_batch_request_body
* add_to_batch_request_body `object`: An add to batch request body
  * rate_ids `array`: Array of Rate IDs to be modifed on the batch
    * items: The Rate ID to be modified on the batch
  * shipment_ids `array`: The Shipment Ids to be modified on the batch
    * items: The Shipment ID to be modified on the batch

### address
* address `object`: Any residential or business mailing address, anywhere in the world.
  * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
  * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
  * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
  * address_residential_indicator `string`: Indicates whether this is a residential address.
  * city_locality `string`: The name of the city or locality
  * company_name `string`: If this is a business address, then the company name should be specified here.
  * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
  * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
  * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
  * postal_code
  * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.

### address_residential_indicator
* address_residential_indicator `string` (values: unknown, yes, no): Indicates whether an address is residential.

### address_to_validate
* address_to_validate `object`: Any residential or business mailing address, anywhere in the world.
  * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
  * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
  * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
  * address_residential_indicator `string`: Indicates whether this is a residential address.
  * city_locality `string`: The name of the city or locality
  * company_name `string`: If this is a business address, then the company name should be specified here.
  * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
  * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
  * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
  * postal_code
  * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.

### address_validating_shipment
* address_validating_shipment `object`: An address validating shipment
  * validate_address `string`
  * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
    * items
      * name **required** `string`: The tag name.
  * advanced_options: Advanced shipment options.  These are entirely optional.
    * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
    * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
    * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
    * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
    * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
    * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
    * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
    * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
    * dry_ice `boolean`: Indicates if the shipment contain dry ice
    * dry_ice_weight: The weight of the dry ice in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
    * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
    * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
    * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
  * carrier_id: The carrier account that is billed for the shipping charges
  * confirmation `string`: The type of delivery confirmation that is required for this shipment.
  * created_at: The date and time that the shipment was created in ShipEngine.
  * customs: Customs information.  This is usually only needed for international shipments.
    * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
    * customs_items `array`: Customs declarations for each item in the shipment.
      * items [customs_item](#customs_item)
    * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
  * external_order_id `string`: ID that the Order Source assigned
  * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
  * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
  * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
    * items
      * asin `string`: Amazon Standard Identification Number
      * external_order_id `string`: external order id
      * external_order_item_id `string`: external order item id
      * name `string`: item name
      * order_source_code
      * quantity `integer`: The quantity of this item included in the shipment
      * sales_order_id `string`: sales order id
      * sales_order_item_id `string`: sales order item id
      * sku `string`: Item Stock Keeping Unit
  * modified_at: The date and time that the shipment was created or last modified.
  * order_source_code
  * packages `array`: The packages in the shipment.
    * items
      * dimensions: The package dimensions
        * height **required** `number`: The length of the package, in the specified unit
        * length **required** `number`: The length of the package, in the specified unit
        * unit **required** `string`
        * width **required** `number`: The width of the package, in the specified unit
      * external_package_id `string`: An external package id.
      * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * label_messages
        * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
        * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
        * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
      * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
      * tracking_number: The tracking number for the package.  The format depends on the carrier.
      * weight **required**: The package weight
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
  * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
  * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
  * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * ship_to: The recipient's mailing address
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * shipment_id: A string that uniquely identifies the shipment
  * shipment_status `string`: The current status of the shipment
  * total_weight: The combined weight of all packages in the shipment
    * unit **required**
    * value **required** `number`: The weight, in the specified unit
  * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.

### address_validation_code
* address_validation_code `string` (values: a1000, a1001, a1002, a1003, a1004, a1005, a1006, a1007, a1008, r1000, r1001, r1002, r1003): The error codes that can be returned by the address validation API

### address_validation_detail_code
* address_validation_detail_code `string` (values: unsupported_country, non_supported_country, minimum_postal_code_verification_failed, street_does_not_match_unique_street_name, multiple_directionals, multiple_matches, suite_not_valid, suite_missing, incompatible_paired_labels, invalid_house_number, missing_house_number, invalid_box_number, invalid_charge_event, missing_box_number, missing_cmra_or_private_mail_box_number, suite_has_no_secondaries, postal_code_changed_or_added, state_province_changed_or_added, city_locality_changed_or_added, urbanization_changed, street_name_spelling_changed_or_added, street_name_type_changed_or_added, street_direction_changed_or_added, suite_type_changed_or_added, suite_unit_number_changed_or_added, double_dependent_locality_changed_or_added, subadministrative_area_changed_or_added, subnational_area_changed_or_added, po_box_changed_or_added, premise_type_changed_or_added, house_number_changed, organization_changed_or_added, partially_verified_to_state_level, partially_verified_to_city_level, partially_verified_to_street_level, partially_verified_to_premise_level, verified_to_state_level, verified_to_city_level, verified_to_street_level, verified_to_premise_level, verified_to_suite_level, coded_to_street_lavel, coded_to_neighborhood_level, coded_to_community_level, coded_to_state_level, coded_to_rooftop_level, coded_to_rooftop_interpolation_level, name_max_length_exceeded, phone_max_length_exceeded, company_name_max_length_exceeded, line1_min_max_length, line2_max_length_exceeded, line3_max_length_exceeded, city_locality_max_length_exceeded, state_province_max_length_exceeded, invalid_postal_code, country_invalid_length, address_not_found): The detailed error codes that can be returned by the address validation API

### address_validation_message_type
* address_validation_message_type `string` (values: error, warning, info): The different types of messages that can be returned by the address validation API

### address_validation_result
* address_validation_result `object`: An address validation result
  * matched_address **required**: The matched address found by the Shipengine API
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * messages **required** `array`: The list of messages that were generated during the address validation request.
    * items [response_message](#response_message)
  * original_address **required**: The original address that was sent for validation
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * status **required**

### address_validation_status
* address_validation_status `string` (values: unverified, verified, warning, error): The possible address validation status values

### advanced_shipment_options
* advanced_shipment_options `object`: Advanced shipment options
  * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
  * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
  * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
  * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
  * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
  * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
  * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
  * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
  * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
  * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
  * dry_ice `boolean`: Indicates if the shipment contain dry ice
  * dry_ice_weight: The weight of the dry ice in the shipment
    * unit **required**
    * value **required** `number`: The weight, in the specified unit
  * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
  * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
  * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
  * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.

### ancillary_service_endorsement
* ancillary_service_endorsement `string` (values: none, return_service_requested, forwarding_service_requested, address_service_requested, change_service_requested, leave_if_no_response): [Ancillary service endorsements](https://pe.usps.com/text/qsg300/Q507.htm) are used by mailers to request an addressee's new address and to provide the carrier with instructions on how to handle packages that are undeliverable as addressed.

### batch
* batch `object`: Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or
  * batch_errors_url **required**: Link to batch errors endpoint
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * batch_id **required**: A string that uniquely identifies the batch
  * batch_labels_url **required**: Link to batch labels query
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * batch_notes **required** `string`: Custom notes you can add for each created batch
  * batch_shipments_url **required**: The batch shipments endpoint
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * completed **required** `integer`: The number of labels generated in the batch
  * count **required** `integer`: The total of errors, warnings, and completed properties
  * created_at **required**: The date and time the batch was created in ShipEngine
  * errors **required** `integer`: The number of errors that occurred while generating the batch
  * external_batch_id **required** `string`: A string that uniquely identifies the external batch
  * form_download **required**: The form download for any customs that are needed
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * forms **required** `integer`: The number of forms for customs that are available for download
  * label_download **required**: The label download for the batch
    * href: The URL of the linked resource, if any
    * pdf: The URL for the pdf generated label
    * png: The URL for the png generated label
    * zpl: The URL for the zpl generated label
  * label_format **required** `string`
  * label_layout **required** `string`: label layout
  * processed_at **required**: The date and time the batch was processed in ShipEngine
  * status **required**
  * warnings **required** `integer`: The number of warnings that occurred while generating the batch

### batch_response_error
* batch_response_error `object`: A batch response error
  * error `string`: Error message associated with the shipment.
  * shipment_id: A string that uniquely identifies the shipment

### batch_status
* batch_status `string` (values: open, queued, processing, completed, completed_with_errors, archived, notifying, invalid): The possible batch status values

### batches_sort_by
* batches_sort_by `string` (values: ship_date, processed_at): The possible batches sort by values

### bill_to_party
* bill_to_party `string` (values: recipient, third_party): The possible bill to party values

### bulk_rate
* bulk_rate `object`: A bulk rate
  * created_at **required** `string`
  * errors **required** `array`: An array of errors that were returned while retrieving the bulk rate
    * items: An error that occurred while retrieving the bulk rate
      * error_code **required**
      * error_source **required**
      * error_type **required**
      * message **required** `string`: An error message associated with the failed API call
  * rate_request_id **required**: A string that uniquely identifies the rate request
  * shipment_id **required**: A string that uniquely identifies the shipment
  * status **required**

### calculate_rates_request_body
* calculate_rates_request_body `object`: A rate shipment request body
  * rate_options: The rate options
    * calculate_tax_amount `boolean`: Calculate the duties and tariffs for cross border shipments.
    * carrier_ids **required** `array`: Array of carrier ids to get rates for
      * items: carrier ids
    * package_types `array`
      * items `string`
    * preferred_currency
    * service_codes `array`
      * items `string`: Item Service Codes

### calculate_rates_response_body
* calculate_rates_response_body `object`: A rate shipment response body
  * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
    * items
      * name **required** `string`: The tag name.
  * advanced_options: Advanced shipment options.  These are entirely optional.
    * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
    * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
    * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
    * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
    * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
    * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
    * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
    * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
    * dry_ice `boolean`: Indicates if the shipment contain dry ice
    * dry_ice_weight: The weight of the dry ice in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
    * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
    * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
    * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
  * carrier_id: The carrier account that is billed for the shipping charges
  * confirmation `string`: The type of delivery confirmation that is required for this shipment.
  * created_at: The date and time that the shipment was created in ShipEngine.
  * customs: Customs information.  This is usually only needed for international shipments.
    * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
    * customs_items `array`: Customs declarations for each item in the shipment.
      * items [customs_item](#customs_item)
    * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
  * external_order_id `string`: ID that the Order Source assigned
  * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
  * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
  * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
    * items
      * asin `string`: Amazon Standard Identification Number
      * external_order_id `string`: external order id
      * external_order_item_id `string`: external order item id
      * name `string`: item name
      * order_source_code
      * quantity `integer`: The quantity of this item included in the shipment
      * sales_order_id `string`: sales order id
      * sales_order_item_id `string`: sales order item id
      * sku `string`: Item Stock Keeping Unit
  * modified_at: The date and time that the shipment was created or last modified.
  * order_source_code
  * packages `array`: The packages in the shipment.
    * items
      * dimensions: The package dimensions
        * height **required** `number`: The length of the package, in the specified unit
        * length **required** `number`: The length of the package, in the specified unit
        * unit **required** `string`
        * width **required** `number`: The width of the package, in the specified unit
      * external_package_id `string`: An external package id.
      * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * label_messages
        * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
        * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
        * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
      * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
      * tracking_number: The tracking number for the package.  The format depends on the carrier.
      * weight **required**: The package weight
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
  * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
  * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
  * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * ship_to: The recipient's mailing address
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * shipment_id: A string that uniquely identifies the shipment
  * shipment_status `string`: The current status of the shipment
  * total_weight: The combined weight of all packages in the shipment
    * unit **required**
    * value **required** `number`: The weight, in the specified unit
  * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
  * rate_response: The rates response
    * created_at `string`: When the rate was created
    * errors `array`
      * items
        * error_code **required**
        * error_source **required**
        * error_type **required**
        * message **required** `string`: An error message associated with the failed API call
    * invalid_rates `array`: An array of invalid shipment rates
      * items: Invalid Shipment Rate
        * carrier_code **required** `string`: carrier code
        * carrier_delivery_days `string`: The carrier delivery days
        * carrier_friendly_name **required** `string`: carrier friendly name
        * carrier_id **required**: A string that uniquely identifies the carrier
        * carrier_nickname **required** `string`: carrier nickname
        * confirmation_amount **required**: The confirmation amount
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * delivery_days `integer`: The number of days estimated for delivery, this will show the _actual_ deliverty
        * error_messages **required** `array`: The error messages
          * items `string`: error message
        * estimated_delivery_date
        * guaranteed_service **required** `boolean`: Indicates if the rate is guaranteed.
        * insurance_amount **required**: The insurance amount
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * negotiated_rate **required** `boolean`: Indicates if the rates been negotiated
        * other_amount **required**: Any other charges associated with this rate
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * package_type **required** `string`: package type that this rate was estimated for
        * rate_id **required**: A string that uniquely identifies the rate
        * rate_type **required**
        * service_code **required** `string`: service code for the rate
        * service_type **required** `string`: service type
        * ship_date `string`: ship date
        * shipping_amount **required**: The shipping amount
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * tax_amount: Tariff and additional taxes associated with an international shipment.
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * trackable **required** `boolean`: Indicates if rate is trackable
        * validation_status **required**
        * warning_messages **required** `array`: The warning messages
          * items `string`: warning message
        * zone **required** `integer`: Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of
    * rate_request_id: A string that uniquely identifies the rate request
    * rates `array`: An array of shipment rates
      * items: Shipment Rates
        * carrier_code **required** `string`: carrier code
        * carrier_delivery_days `string`: The carrier delivery days
        * carrier_friendly_name **required** `string`: carrier friendly name
        * carrier_id **required**: A string that uniquely identifies the carrier
        * carrier_nickname **required** `string`: carrier nickname
        * confirmation_amount **required**: The confirmation amount
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * delivery_days `integer`: The number of days estimated for delivery, this will show the _actual_ deliverty
        * error_messages **required** `array`: The error messages
          * items `string`: error message
        * estimated_delivery_date
        * guaranteed_service **required** `boolean`: Indicates if the rate is guaranteed.
        * insurance_amount **required**: The insurance amount
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * negotiated_rate **required** `boolean`: Indicates if the rates been negotiated
        * other_amount **required**: Any other charges associated with this rate
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * package_type **required** `string`: package type that this rate was estimated for
        * rate_id **required**: A string that uniquely identifies the rate
        * rate_type **required**
        * service_code **required** `string`: service code for the rate
        * service_type **required** `string`: service type
        * ship_date `string`: ship date
        * shipping_amount **required**: The shipping amount
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * tax_amount: Tariff and additional taxes associated with an international shipment.
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * trackable **required** `boolean`: Indicates if rate is trackable
        * validation_status **required**
        * warning_messages **required** `array`: The warning messages
          * items `string`: warning message
        * zone **required** `integer`: Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of
    * shipment_id: A string that uniquely identifies the shipment
    * status

### carrier
* carrier `object`: A carrier object that represents a provider such as UPS, USPS, DHL, etc
  * account_number `string`: The account number that the carrier is connected to.
  * balance `number`: Current available balance
  * carrier_code: A string that uniquely identifies the carrier.
  * carrier_id: A string that uniquely identifies the carrier.
  * friendly_name `string`: Screen readable name
  * has_multi_package_supporting_services `boolean`: Carrier supports multiple packages per shipment
  * nickname `string`: Nickname given to the account when initially setting up the carrier.
  * options `array`: A list of options that are available to that carrier
    * items
      * default_value `string`: Default value of option
      * description `string`: Description of option
      * name `string`: Name of advanced option
  * packages `array`: A list of package types that are supported by the carrier
    * items
      * description `string`: Provides a helpful description for the custom package.
      * dimensions: The custom dimensions for the package.
        * height **required** `number`: The length of the package, in the specified unit
        * length **required** `number`: The length of the package, in the specified unit
        * unit **required** `string`
        * width **required** `number`: The width of the package, in the specified unit
      * name **required** `string`
      * package_code **required**
      * package_id: A string that uniquely identifies the package.
  * primary `boolean`: Is this the primary carrier that is used by default when no carrier is specified in label/shipment creation
  * requires_funded_amount `boolean`: Indicates whether the carrier requires funding to use its services
  * services `array`: A list of services that are offered by the carrier
    * items
      * carrier_code
      * carrier_id: A string that uniquely identifies the carrier
      * domestic `boolean`: Supports domestic shipping
      * international `boolean`: Supports international shipping.
      * is_multi_package_supported `boolean`: Carrier supports multiple packages per shipment
      * name `string`: User friendly service name
      * service_code `string`: service code
  * supports_label_messages `boolean`: The carrier supports adding custom label messages to an order.

### carrier_advanced_option
* carrier_advanced_option `object`: Advanced options that are specific to the carrier
  * default_value `string`: Default value of option
  * description `string`: Description of option
  * name `string`: Name of advanced option

### carrier_code
* carrier_code `string`: A [shipping carrier](https://www.shipengine.com/docs/carriers/setup/), such as `fedex`, `dhl_express`, `stamps_com`, etc.

### carrier_name
* carrier_name `string` (values: access_worldwide, amazon_buy_shipping, apc, asendia, australia_post, canada_post, dhl_ecommerce, dhl_express, dhl_express_au, dhl_express_ca, dhl_express_uk, dpd, endicia, fedex, fedex_uk, firstmile, globegistics, imex, newgistics, ontrac, purolator_canada, royal_mail, rr_donnelley, seko, sendle, stamps_com, ups): The shipping carriers that are supported by ShipEngine

### carrier_name_with_settings
* carrier_name_with_settings `string` (values: dhl_express, fedex, newgistics, ups): The shipping carriers for which ShipEngine supports carrier settings

### collect_on_delivery
* collect_on_delivery `object`: Defer payment until package is delivered, instead of when it is ordered.
  * payment_amount [payment_amount](#payment_amount)
  * payment_type

### collect_on_delivery_payment_type
* collect_on_delivery_payment_type `string` (values: any, cash, cash_equivalent, none): Types of payment that are supported

### compare_bulk_rates_request_body
* compare_bulk_rates_request_body `object`: A rate shipments request body
  * rate_options: The rate options
    * calculate_tax_amount `boolean`: Calculate the duties and tariffs for cross border shipments.
    * carrier_ids **required** `array`: Array of carrier ids to get rates for
      * items: carrier ids
    * package_types `array`
      * items `string`
    * preferred_currency
    * service_codes `array`
      * items `string`: Item Service Codes

### compare_bulk_rates_response_body
* compare_bulk_rates_response_body `array`: A bulk rate response body
  * items [bulk_rate](#bulk_rate)

### connect_access_worldwide_request_body
* connect_access_worldwide_request_body `object`: An Access Worldwide account information request body
  * nickname **required** `string`: The nickname associated with the carrier connection
  * password **required** `string`: Access Worldwide Password
  * username **required** `string`: Access Worldwide Username

### connect_amazon_buy_shipping_request_body
* connect_amazon_buy_shipping_request_body `object`: An Amazon account information request body
  * email **required**
  * merchant_seller_id **required** `string`
  * mws_auth_token **required** `string`
  * nickname **required** `string`: Nickname to be associated with the account connection

### connect_apc_request_body
* connect_apc_request_body `object`: An APC account information request body
  * nickname **required** `string`: The nickname for the APC account
  * password **required** `string`: The password for the APC account
  * username **required** `string`: The username for the APC account

### connect_asendia_request_body
* connect_asendia_request_body `object`: An Asendia account information request body
  * account_number **required** `string`: Asendia account number
  * ftp_password **required** `string`: FTP password
  * ftp_username **required** `string`: FTP username
  * nickname **required** `string`: The nickname of the Asendia account

### connect_australia_post_request_body
* connect_australia_post_request_body `object`: An Australia Post account information request body
  * account_number **required** `string`: Account number
  * api_key **required** `string`: API key
  * api_secret **required** `string`: API secret
  * nickname **required** `string`: Nickname

### connect_canada_post_request_body
* connect_canada_post_request_body `object`: A Canada Post account information request body
  * account_number **required** `string`: Canada Post Account Number
  * api_key **required** `string`: Canada Post Account API Key
  * api_secret **required** `string`: Canada Post Account API Secret
  * contract_id **required** `string`: Canada Post Account Contract ID
  * nickname **required** `string`: Nickname

### connect_carrier_request_body


### connect_carrier_response_body
* connect_carrier_response_body `object`: A connect account response body
  * carrier_id **required**: A string that uniquely identifies the carrier

### connect_dhl_ecommerce_request_body
* connect_dhl_ecommerce_request_body `object`: A DHL Ecommerce account information request body
  * account_number `string`: Account number
  * ancillary_endorsement
  * api_key `string`: The DHL E-Commerce API key. This field is optional, but if not set you will not be able to get rates for this account.
  * api_secret `string`: The DHL E-Commerce API secret. This field is optional, but if not set you will not be able to get rates for this account.
  * client_id **required** `string`: The client id
  * distribution_center **required** `string`: The distribution center
  * ftp_password `string`: FTP password
  * ftp_username `string`: FTP username
  * nickname **required** `string`: A nickname to help you identify this account
  * password **required** `string`: The account password
  * pickup_number **required** `string`: The pickup number
  * username **required** `string`: The account username

### connect_dhl_express_au_request_body
* connect_dhl_express_au_request_body `object`: A DHL Express AU account information request body
  * account_number **required** `string`: Account number
  * nickname **required** `string`: Nickname

### connect_dhl_express_ca_request_body
* connect_dhl_express_ca_request_body `object`: A DHL Express CA account information request body
  * account_number **required** `string`: Account number
  * nickname **required** `string`: Nickname

### connect_dhl_express_request_body
* connect_dhl_express_request_body `object`: A DHL express account information request body
  * account_number **required** `string`: Account number
  * nickname **required** `string`: Nickname

### connect_dhl_express_uk_request_body
* connect_dhl_express_uk_request_body `object`: A DHL Express UK account information request body
  * account_number **required** `string`: Account number
  * nickname **required** `string`: Nickname
  * password **required** `string`: Password
  * site_id **required**: A string that uniquely identifies the site

### connect_dpd_request_body
* connect_dpd_request_body `object`: A DPD account information request body
  * account_number **required** `string`: Account number
  * nickname **required** `string`: Nickname
  * password **required** `string`: Password

### connect_endicia_request_body
* connect_endicia_request_body `object`: An Endicia account information request body
  * account **required** `string`: Account
  * nickname **required** `string`: Nickname
  * passphrase **required** `string`: Passphrase

### connect_fedex_request_body
* connect_fedex_request_body `object`: A Fedex account information request body
  * account_number **required** `string`: Account number
  * address1 **required** `string`: Address
  * address2 `string`: Address
  * agree_to_eula **required** `boolean`: Boolean signaling agreement to the Fedex End User License Agreement
  * city **required** `string`: The city
  * company `string`: The company
  * country_code **required** `string`: Country code
  * email **required**: The email address
  * first_name **required** `string`: First name
  * last_name **required** `string`: Last name
  * meter_number `string`: Meter number
  * nickname **required** `string`: Nickname
  * phone **required** `string`: Phone number
  * postal_code **required** `string`: Postal Code
  * state **required** `string`: State

### connect_fedex_uk_request_body
* connect_fedex_uk_request_body `object`: A Fedex UK account information request body
  * account_number **required** `string`: Account number
  * address1 **required** `string`: Address
  * address2 `string`: Address
  * agree_to_eula **required** `boolean`: Boolean signaling agreement to the Fedex End User License Agreement
  * city **required** `string`: The city
  * company `string`: The company
  * country_code **required** `string`: Country code
  * email **required**: The email address
  * first_name **required** `string`: First name
  * last_name **required** `string`: Last name
  * meter_number `string`: Meter number
  * nickname **required** `string`: Nickname
  * phone **required** `string`: Phone number
  * postal_code **required** `string`: Postal Code
  * state **required** `string`: State

### connect_firstmile_request_body
* connect_firstmile_request_body `object`: A First Mile account information request body
  * mailer_id **required**: A string that uniquely identifies the mailer
  * nickname **required** `string`: Nickname
  * password **required** `string`: Password
  * profile_name `string`: Profile name

### connect_globegistics_request_body
* connect_globegistics_request_body `object`: A Globegistics account information request body
  * nickname **required** `string`: Nickname
  * password **required** `string`: Password
  * username **required** `string`: Username

### connect_imex_request_body
* connect_imex_request_body `object`: An Imex account information request body
  * nickname **required** `string`: Nickname
  * password **required** `string`: Password
  * username **required** `string`: Username

### connect_insurer_request_body
* connect_insurer_request_body `object`: A create shipsurance connection request body
  * email **required**
  * policy_id **required** `string`

### connect_insurer_response_body
* connect_insurer_response_body `object`

### connect_newgistics_request_body
* connect_newgistics_request_body `object`: A Newgistics account information request body
  * induction_site **required** `string`: Induction site
  * mailer_id `integer`: Mailer id
  * merchant_id `integer`: Merchant id
  * nickname **required** `string`: Nickname

### connect_ontrac_request_body
* connect_ontrac_request_body `object`: An Ontrac account information request body
  * account_number **required** `string`: Account number
  * nickname **required** `string`: Nickname
  * password **required** `string`: Password

### connect_purolator_request_body
* connect_purolator_request_body `object`: A Purolator account information request body
  * account_number **required** `string`: Account number
  * activation_key **required** `string`: Activation key
  * nickname **required** `string`: Nickname

### connect_royal_mail_request_body
* connect_royal_mail_request_body `object`: A Royal Mail account information request body
  * account_number **required** `string`: Account number
  * city **required** `string`: City
  * company_name `string`: Company name
  * contact_name **required** `string`: Contact name
  * email: The email address
  * nickname **required** `string`: Nickname
  * oba_email: The oba email address
  * phone `string`: Phone
  * postal_code **required** `string`: Postal code
  * street_line1 `string`: Street line1
  * street_line2 `string`: Street line2
  * street_line3 `string`: Street line3

### connect_rr_donnelley_request_body
* connect_rr_donnelley_request_body `object`: A RR Donnelley account information request body
  * nickname **required** `string`: Nickname
  * password **required** `string`: Password
  * username **required** `string`: Username

### connect_seko_request_body
* connect_seko_request_body `object`: A SEKO account information request body
  * access_key **required** `string`: Seko Account Access Key
  * nickname **required** `string`: Nickname

### connect_sendle_request_body
* connect_sendle_request_body `object`: A Sendle account information request body
  * api_key **required** `string`: API key
  * nickname **required** `string`: Nickname
  * sendle_id **required**: A string that uniquely identifies the sendle

### connect_stamps_request_body
* connect_stamps_request_body `object`: A Stamps account information request body
  * nickname **required** `string`: Nickname
  * password **required** `string`: Password
  * username **required** `string`: Username

### connect_ups_request_body
* connect_ups_request_body `object`: A UPS account information request body
  * account_country_code **required** `string`: Account country code
  * account_number **required** `string`: Account number
  * account_postal_code **required** `string`: Account postal code
  * address1 **required** `string`: Address Line 1
  * address2 `string`: Address Line 2
  * agree_to_technology_agreement **required** `boolean`: The Agreement to the [UPS Technology Agreement](https://www.ups.com/assets/resources/media/UTA_with_EUR.pdf)
  * city **required** `string`: City
  * company **required** `string`: Company
  * country_code **required** `string`: Country code
  * email **required**: The email address
  * first_name **required** `string`: First name
  * invoice: The UPS invoice
    * control_id: A string that uniquely identifies the control
    * invoice_amount `number`
    * invoice_date `string`: invoice date
    * invoice_number `string`: invoice number
  * last_name **required** `string`: Last name
  * nickname **required** `string`: Nickname
  * phone **required** `string`: Phone
  * postal_code **required** `string`: Postal code
  * state **required** `string`: State
  * title `string`: Title

### country_code
* country_code `string`: A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)

### create_and_validate_shipment
* create_and_validate_shipment `object`: A create and validate shipment resource
  * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
    * items
      * name **required** `string`: The tag name.
  * advanced_options: Advanced shipment options.  These are entirely optional.
    * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
    * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
    * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
    * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
    * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
    * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
    * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
    * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
    * dry_ice `boolean`: Indicates if the shipment contain dry ice
    * dry_ice_weight: The weight of the dry ice in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
    * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
    * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
    * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
  * carrier_id: The carrier account that is billed for the shipping charges
  * confirmation `string`: The type of delivery confirmation that is required for this shipment.
  * created_at: The date and time that the shipment was created in ShipEngine.
  * customs: Customs information.  This is usually only needed for international shipments.
    * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
    * customs_items `array`: Customs declarations for each item in the shipment.
      * items [customs_item](#customs_item)
    * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
  * external_order_id `string`: ID that the Order Source assigned
  * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
  * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
  * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
    * items
      * asin `string`: Amazon Standard Identification Number
      * external_order_id `string`: external order id
      * external_order_item_id `string`: external order item id
      * name `string`: item name
      * order_source_code
      * quantity `integer`: The quantity of this item included in the shipment
      * sales_order_id `string`: sales order id
      * sales_order_item_id `string`: sales order item id
      * sku `string`: Item Stock Keeping Unit
  * modified_at: The date and time that the shipment was created or last modified.
  * order_source_code
  * packages `array`: The packages in the shipment.
    * items
      * dimensions: The package dimensions
        * height **required** `number`: The length of the package, in the specified unit
        * length **required** `number`: The length of the package, in the specified unit
        * unit **required** `string`
        * width **required** `number`: The width of the package, in the specified unit
      * external_package_id `string`: An external package id.
      * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * label_messages
        * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
        * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
        * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
      * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
      * tracking_number: The tracking number for the package.  The format depends on the carrier.
      * weight **required**: The package weight
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
  * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
  * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
  * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * ship_to: The recipient's mailing address
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * shipment_id: A string that uniquely identifies the shipment
  * shipment_status `string`: The current status of the shipment
  * total_weight: The combined weight of all packages in the shipment
    * unit **required**
    * value **required** `number`: The weight, in the specified unit
  * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
  * address_validation: The address validation
    * matched_address **required**: The matched address found by the Shipengine API
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * messages **required** `array`: The list of messages that were generated during the address validation request.
      * items [response_message](#response_message)
    * original_address **required**: The original address that was sent for validation
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * status **required**
  * errors `array`: An array of errors that occurred while creating shipment.
    * items `string`: An error that occurred while creating a shipment.

### create_batch_request_body
* create_batch_request_body `object`: A create batch request body
  * batch_notes `string`: Add custom messages for a particular batch
  * external_batch_id: A string that uniquely identifies the external batch
  * rate_ids `array`: Array of rate IDs used in the batch
    * items `string`
  * shipment_ids `array`: Array of shipment IDs used in the batch
    * items

### create_batch_response_body
* create_batch_response_body `object`: A create batch response body
  * batch_errors_url **required**: Link to batch errors endpoint
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * batch_id **required**: A string that uniquely identifies the batch
  * batch_labels_url **required**: Link to batch labels query
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * batch_notes **required** `string`: Custom notes you can add for each created batch
  * batch_shipments_url **required**: The batch shipments endpoint
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * completed **required** `integer`: The number of labels generated in the batch
  * count **required** `integer`: The total of errors, warnings, and completed properties
  * created_at **required**: The date and time the batch was created in ShipEngine
  * errors **required** `integer`: The number of errors that occurred while generating the batch
  * external_batch_id **required** `string`: A string that uniquely identifies the external batch
  * form_download **required**: The form download for any customs that are needed
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * forms **required** `integer`: The number of forms for customs that are available for download
  * label_download **required**: The label download for the batch
    * href: The URL of the linked resource, if any
    * pdf: The URL for the pdf generated label
    * png: The URL for the png generated label
    * zpl: The URL for the zpl generated label
  * label_format **required** `string`
  * label_layout **required** `string`: label layout
  * processed_at **required**: The date and time the batch was processed in ShipEngine
  * status **required**
  * warnings **required** `integer`: The number of warnings that occurred while generating the batch

### create_label_from_rate_request_body
* create_label_from_rate_request_body `object`: A purchase label without shipment request body
  * label_download_type
  * label_format `string`
  * label_layout `string`
  * validate_address

### create_label_from_rate_response_body
* create_label_from_rate_response_body `object`: A create label from rate response body
  * batch_id: If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.
  * carrier_code: The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.
  * carrier_id: The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label
  * charge_event: The label charge event.
  * created_at: The date and time that the label was created in ShipEngine.
  * form_download: The link to downlaod the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * insurance_claim: The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * insurance_cost: The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * is_international `boolean`: Indicates whether this is an international shipment.  That is, the originating country and destination country are different.
  * is_return_label `boolean`: Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.
  * label_download
    * href: The URL of the linked resource, if any
    * pdf: The URL for the pdf generated label
    * png: The URL for the png generated label
    * zpl: The URL for the zpl generated label
  * label_download_type `string`
  * label_format `string`: The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
  * label_id: A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.
  * label_image_id: The label image resource that was used to create a custom label image.
  * label_layout `string`: The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
  * outbound_label_id: The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is
  * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
  * packages `array`: The label's package(s).
    * items [package](#package)
  * rma_number `string`: An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.
  * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
  * ship_date: The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
  * shipment: The shipment information used to generate the label
    * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
      * items
        * name **required** `string`: The tag name.
    * advanced_options: Advanced shipment options.  These are entirely optional.
      * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
      * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
      * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
      * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
      * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
      * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
      * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
      * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
      * dry_ice `boolean`: Indicates if the shipment contain dry ice
      * dry_ice_weight: The weight of the dry ice in the shipment
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
      * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
      * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
      * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
      * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
    * carrier_id: The carrier account that is billed for the shipping charges
    * confirmation `string`: The type of delivery confirmation that is required for this shipment.
    * created_at: The date and time that the shipment was created in ShipEngine.
    * customs: Customs information.  This is usually only needed for international shipments.
      * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
      * customs_items `array`: Customs declarations for each item in the shipment.
        * items [customs_item](#customs_item)
      * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
    * external_order_id `string`: ID that the Order Source assigned
    * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
    * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
    * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
      * items
        * asin `string`: Amazon Standard Identification Number
        * external_order_id `string`: external order id
        * external_order_item_id `string`: external order item id
        * name `string`: item name
        * order_source_code
        * quantity `integer`: The quantity of this item included in the shipment
        * sales_order_id `string`: sales order id
        * sales_order_item_id `string`: sales order item id
        * sku `string`: Item Stock Keeping Unit
    * modified_at: The date and time that the shipment was created or last modified.
    * order_source_code
    * packages `array`: The packages in the shipment.
      * items
        * dimensions: The package dimensions
          * height **required** `number`: The length of the package, in the specified unit
          * length **required** `number`: The length of the package, in the specified unit
          * unit **required** `string`
          * width **required** `number`: The width of the package, in the specified unit
        * external_package_id `string`: An external package id.
        * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * label_messages
          * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
          * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
          * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
        * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
        * tracking_number: The tracking number for the package.  The format depends on the carrier.
        * weight **required**: The package weight
          * unit **required**
          * value **required** `number`: The weight, in the specified unit
    * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
    * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
    * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * ship_to: The recipient's mailing address
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * shipment_id: A string that uniquely identifies the shipment
    * shipment_status `string`: The current status of the shipment
    * total_weight: The combined weight of all packages in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
  * shipment_cost: The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * shipment_id: The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)
  * status
  * test_label `boolean`: Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
  * trackable `boolean`: Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.
  * tracking_number `string`: The tracking number for the package. Tracking number formats vary across carriers.
  * tracking_status: The current status of the package, such as `in_transit` or `delivered`
  * validate_address `string`
  * voided `boolean`: Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)
  * voided_at: The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided

### create_label_from_shipment_request_body
* create_label_from_shipment_request_body `object`: A purchase label without shipment request body
  * label_download_type
  * label_format `string`
  * label_layout `string`
  * validate_address

### create_label_from_shipment_response_body
* create_label_from_shipment_response_body `object`: A create label from shipment response body
  * batch_id: If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.
  * carrier_code: The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.
  * carrier_id: The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label
  * charge_event: The label charge event.
  * created_at: The date and time that the label was created in ShipEngine.
  * form_download: The link to downlaod the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * insurance_claim: The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * insurance_cost: The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * is_international `boolean`: Indicates whether this is an international shipment.  That is, the originating country and destination country are different.
  * is_return_label `boolean`: Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.
  * label_download
    * href: The URL of the linked resource, if any
    * pdf: The URL for the pdf generated label
    * png: The URL for the png generated label
    * zpl: The URL for the zpl generated label
  * label_download_type `string`
  * label_format `string`: The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
  * label_id: A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.
  * label_image_id: The label image resource that was used to create a custom label image.
  * label_layout `string`: The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
  * outbound_label_id: The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is
  * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
  * packages `array`: The label's package(s).
    * items [package](#package)
  * rma_number `string`: An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.
  * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
  * ship_date: The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
  * shipment: The shipment information used to generate the label
    * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
      * items
        * name **required** `string`: The tag name.
    * advanced_options: Advanced shipment options.  These are entirely optional.
      * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
      * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
      * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
      * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
      * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
      * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
      * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
      * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
      * dry_ice `boolean`: Indicates if the shipment contain dry ice
      * dry_ice_weight: The weight of the dry ice in the shipment
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
      * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
      * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
      * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
      * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
    * carrier_id: The carrier account that is billed for the shipping charges
    * confirmation `string`: The type of delivery confirmation that is required for this shipment.
    * created_at: The date and time that the shipment was created in ShipEngine.
    * customs: Customs information.  This is usually only needed for international shipments.
      * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
      * customs_items `array`: Customs declarations for each item in the shipment.
        * items [customs_item](#customs_item)
      * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
    * external_order_id `string`: ID that the Order Source assigned
    * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
    * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
    * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
      * items
        * asin `string`: Amazon Standard Identification Number
        * external_order_id `string`: external order id
        * external_order_item_id `string`: external order item id
        * name `string`: item name
        * order_source_code
        * quantity `integer`: The quantity of this item included in the shipment
        * sales_order_id `string`: sales order id
        * sales_order_item_id `string`: sales order item id
        * sku `string`: Item Stock Keeping Unit
    * modified_at: The date and time that the shipment was created or last modified.
    * order_source_code
    * packages `array`: The packages in the shipment.
      * items
        * dimensions: The package dimensions
          * height **required** `number`: The length of the package, in the specified unit
          * length **required** `number`: The length of the package, in the specified unit
          * unit **required** `string`
          * width **required** `number`: The width of the package, in the specified unit
        * external_package_id `string`: An external package id.
        * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * label_messages
          * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
          * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
          * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
        * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
        * tracking_number: The tracking number for the package.  The format depends on the carrier.
        * weight **required**: The package weight
          * unit **required**
          * value **required** `number`: The weight, in the specified unit
    * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
    * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
    * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * ship_to: The recipient's mailing address
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * shipment_id: A string that uniquely identifies the shipment
    * shipment_status `string`: The current status of the shipment
    * total_weight: The combined weight of all packages in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
  * shipment_cost: The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * shipment_id: The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)
  * status
  * test_label `boolean`: Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
  * trackable `boolean`: Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.
  * tracking_number `string`: The tracking number for the package. Tracking number formats vary across carriers.
  * tracking_status: The current status of the package, such as `in_transit` or `delivered`
  * validate_address `string`
  * voided `boolean`: Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)
  * voided_at: The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided

### create_label_request_body
* create_label_request_body `object`: A purchase label request body
  * batch_id: If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.
  * carrier_code: The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.
  * carrier_id: The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label
  * charge_event: The label charge event.
  * created_at: The date and time that the label was created in ShipEngine.
  * form_download: The link to downlaod the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * insurance_claim: The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * insurance_cost: The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * is_international `boolean`: Indicates whether this is an international shipment.  That is, the originating country and destination country are different.
  * is_return_label `boolean`: Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.
  * label_download
    * href: The URL of the linked resource, if any
    * pdf: The URL for the pdf generated label
    * png: The URL for the png generated label
    * zpl: The URL for the zpl generated label
  * label_download_type `string`
  * label_format `string`: The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
  * label_id: A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.
  * label_image_id: The label image resource that was used to create a custom label image.
  * label_layout `string`: The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
  * outbound_label_id: The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is
  * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
  * packages `array`: The label's package(s).
    * items [package](#package)
  * rma_number `string`: An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.
  * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
  * ship_date: The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
  * shipment: The shipment information used to generate the label
    * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
      * items
        * name **required** `string`: The tag name.
    * advanced_options: Advanced shipment options.  These are entirely optional.
      * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
      * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
      * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
      * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
      * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
      * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
      * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
      * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
      * dry_ice `boolean`: Indicates if the shipment contain dry ice
      * dry_ice_weight: The weight of the dry ice in the shipment
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
      * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
      * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
      * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
      * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
    * carrier_id: The carrier account that is billed for the shipping charges
    * confirmation `string`: The type of delivery confirmation that is required for this shipment.
    * created_at: The date and time that the shipment was created in ShipEngine.
    * customs: Customs information.  This is usually only needed for international shipments.
      * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
      * customs_items `array`: Customs declarations for each item in the shipment.
        * items [customs_item](#customs_item)
      * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
    * external_order_id `string`: ID that the Order Source assigned
    * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
    * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
    * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
      * items
        * asin `string`: Amazon Standard Identification Number
        * external_order_id `string`: external order id
        * external_order_item_id `string`: external order item id
        * name `string`: item name
        * order_source_code
        * quantity `integer`: The quantity of this item included in the shipment
        * sales_order_id `string`: sales order id
        * sales_order_item_id `string`: sales order item id
        * sku `string`: Item Stock Keeping Unit
    * modified_at: The date and time that the shipment was created or last modified.
    * order_source_code
    * packages `array`: The packages in the shipment.
      * items
        * dimensions: The package dimensions
          * height **required** `number`: The length of the package, in the specified unit
          * length **required** `number`: The length of the package, in the specified unit
          * unit **required** `string`
          * width **required** `number`: The width of the package, in the specified unit
        * external_package_id `string`: An external package id.
        * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * label_messages
          * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
          * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
          * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
        * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
        * tracking_number: The tracking number for the package.  The format depends on the carrier.
        * weight **required**: The package weight
          * unit **required**
          * value **required** `number`: The weight, in the specified unit
    * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
    * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
    * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * ship_to: The recipient's mailing address
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * shipment_id: A string that uniquely identifies the shipment
    * shipment_status `string`: The current status of the shipment
    * total_weight: The combined weight of all packages in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
  * shipment_cost: The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * shipment_id: The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)
  * status
  * test_label `boolean`: Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
  * trackable `boolean`: Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.
  * tracking_number `string`: The tracking number for the package. Tracking number formats vary across carriers.
  * tracking_status: The current status of the package, such as `in_transit` or `delivered`
  * validate_address `string`
  * voided `boolean`: Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)
  * voided_at: The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided

### create_label_response_body
* create_label_response_body `object`: A create label response body
  * batch_id: If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.
  * carrier_code: The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.
  * carrier_id: The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label
  * charge_event: The label charge event.
  * created_at: The date and time that the label was created in ShipEngine.
  * form_download: The link to downlaod the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * insurance_claim: The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * insurance_cost: The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * is_international `boolean`: Indicates whether this is an international shipment.  That is, the originating country and destination country are different.
  * is_return_label `boolean`: Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.
  * label_download
    * href: The URL of the linked resource, if any
    * pdf: The URL for the pdf generated label
    * png: The URL for the png generated label
    * zpl: The URL for the zpl generated label
  * label_download_type `string`
  * label_format `string`: The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
  * label_id: A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.
  * label_image_id: The label image resource that was used to create a custom label image.
  * label_layout `string`: The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
  * outbound_label_id: The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is
  * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
  * packages `array`: The label's package(s).
    * items [package](#package)
  * rma_number `string`: An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.
  * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
  * ship_date: The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
  * shipment: The shipment information used to generate the label
    * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
      * items
        * name **required** `string`: The tag name.
    * advanced_options: Advanced shipment options.  These are entirely optional.
      * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
      * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
      * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
      * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
      * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
      * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
      * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
      * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
      * dry_ice `boolean`: Indicates if the shipment contain dry ice
      * dry_ice_weight: The weight of the dry ice in the shipment
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
      * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
      * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
      * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
      * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
    * carrier_id: The carrier account that is billed for the shipping charges
    * confirmation `string`: The type of delivery confirmation that is required for this shipment.
    * created_at: The date and time that the shipment was created in ShipEngine.
    * customs: Customs information.  This is usually only needed for international shipments.
      * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
      * customs_items `array`: Customs declarations for each item in the shipment.
        * items [customs_item](#customs_item)
      * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
    * external_order_id `string`: ID that the Order Source assigned
    * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
    * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
    * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
      * items
        * asin `string`: Amazon Standard Identification Number
        * external_order_id `string`: external order id
        * external_order_item_id `string`: external order item id
        * name `string`: item name
        * order_source_code
        * quantity `integer`: The quantity of this item included in the shipment
        * sales_order_id `string`: sales order id
        * sales_order_item_id `string`: sales order item id
        * sku `string`: Item Stock Keeping Unit
    * modified_at: The date and time that the shipment was created or last modified.
    * order_source_code
    * packages `array`: The packages in the shipment.
      * items
        * dimensions: The package dimensions
          * height **required** `number`: The length of the package, in the specified unit
          * length **required** `number`: The length of the package, in the specified unit
          * unit **required** `string`
          * width **required** `number`: The width of the package, in the specified unit
        * external_package_id `string`: An external package id.
        * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * label_messages
          * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
          * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
          * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
        * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
        * tracking_number: The tracking number for the package.  The format depends on the carrier.
        * weight **required**: The package weight
          * unit **required**
          * value **required** `number`: The weight, in the specified unit
    * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
    * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
    * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * ship_to: The recipient's mailing address
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * shipment_id: A string that uniquely identifies the shipment
    * shipment_status `string`: The current status of the shipment
    * total_weight: The combined weight of all packages in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
  * shipment_cost: The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * shipment_id: The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)
  * status
  * test_label `boolean`: Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
  * trackable `boolean`: Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.
  * tracking_number `string`: The tracking number for the package. Tracking number formats vary across carriers.
  * tracking_status: The current status of the package, such as `in_transit` or `delivered`
  * validate_address `string`
  * voided `boolean`: Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)
  * voided_at: The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided

### create_manifest_by_object_request_body
* create_manifest_by_object_request_body `object`: A create manifest request body
  * carrier_id **required**: A string that uniquely identifies the carrier
  * excluded_label_ids `array`: The list of label ids to exclude from the manifest
    * items: Label Id that will be excluded from the manifest
  * label_ids `array`: The list of label ids to include for the manifest
    * items: Label Id that will be included for the manifest
  * ship_date **required** `string`: The ship date that the shipment will be sent out on
  * warehouse_id **required**: A string that uniquely identifies the warehouse

### create_manifest_label_ids_request_body
* create_manifest_label_ids_request_body `object`: A create manifest request body
  * label_ids **required** `array`: The list of label ids to include in the manifest
    * items: Label Id that will be included in the manifest

### create_manifest_request_body


### create_manifest_response_body
* create_manifest_response_body `object`: A create manifest response body
  * manifests `array`
    * items [manifest](#manifest)
  * carrier_id: A string that uniquely identifies the carrier
  * created_at `string`: The date-time that the manifest was created
  * form_id: A string that uniquely identifies the form
  * manifest_download
    * href: The URL of the linked resource, if any
  * manifest_id: A string that uniquely identifies the manifest
  * ship_date `string`: The date-time that the manifests shipments will be picked up
  * shipments `integer`: The number of shipments that are included in this manifest
  * submission_id `string`: A string that uniquely identifies the submission
  * warehouse_id: A string that uniquely identifies the warehouse

### create_package_type_request_body
* create_package_type_request_body `object`: A create package type request body
  * description `string`: Provides a helpful description for the custom package.
  * dimensions: The custom dimensions for the package.
    * height **required** `number`: The length of the package, in the specified unit
    * length **required** `number`: The length of the package, in the specified unit
    * unit **required** `string`
    * width **required** `number`: The width of the package, in the specified unit
  * name **required** `string`
  * package_code **required**
  * package_id: A string that uniquely identifies the package.

### create_package_type_response_body
* create_package_type_response_body `object`: A create package type response body
  * description `string`: Provides a helpful description for the custom package.
  * dimensions: The custom dimensions for the package.
    * height **required** `number`: The length of the package, in the specified unit
    * length **required** `number`: The length of the package, in the specified unit
    * unit **required** `string`
    * width **required** `number`: The width of the package, in the specified unit
  * name **required** `string`
  * package_code **required**
  * package_id: A string that uniquely identifies the package.

### create_return_label_request_body
* create_return_label_request_body `object`: A create return label request body
  * charge_event: The label charge event.
  * label_download_type `string`
  * label_format `string`: The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
  * label_image_id: The label image resource that was used to create a custom label image.
  * label_layout `string`: The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.

### create_return_label_response_body
* create_return_label_response_body `object`: A create return label response body
  * batch_id: If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.
  * carrier_code: The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.
  * carrier_id: The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label
  * charge_event: The label charge event.
  * created_at: The date and time that the label was created in ShipEngine.
  * form_download: The link to downlaod the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * insurance_claim: The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * insurance_cost: The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * is_international `boolean`: Indicates whether this is an international shipment.  That is, the originating country and destination country are different.
  * is_return_label `boolean`: Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.
  * label_download
    * href: The URL of the linked resource, if any
    * pdf: The URL for the pdf generated label
    * png: The URL for the png generated label
    * zpl: The URL for the zpl generated label
  * label_download_type `string`
  * label_format `string`: The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
  * label_id: A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.
  * label_image_id: The label image resource that was used to create a custom label image.
  * label_layout `string`: The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
  * outbound_label_id: The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is
  * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
  * packages `array`: The label's package(s).
    * items [package](#package)
  * rma_number `string`: An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.
  * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
  * ship_date: The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
  * shipment: The shipment information used to generate the label
    * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
      * items
        * name **required** `string`: The tag name.
    * advanced_options: Advanced shipment options.  These are entirely optional.
      * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
      * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
      * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
      * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
      * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
      * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
      * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
      * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
      * dry_ice `boolean`: Indicates if the shipment contain dry ice
      * dry_ice_weight: The weight of the dry ice in the shipment
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
      * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
      * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
      * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
      * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
    * carrier_id: The carrier account that is billed for the shipping charges
    * confirmation `string`: The type of delivery confirmation that is required for this shipment.
    * created_at: The date and time that the shipment was created in ShipEngine.
    * customs: Customs information.  This is usually only needed for international shipments.
      * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
      * customs_items `array`: Customs declarations for each item in the shipment.
        * items [customs_item](#customs_item)
      * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
    * external_order_id `string`: ID that the Order Source assigned
    * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
    * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
    * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
      * items
        * asin `string`: Amazon Standard Identification Number
        * external_order_id `string`: external order id
        * external_order_item_id `string`: external order item id
        * name `string`: item name
        * order_source_code
        * quantity `integer`: The quantity of this item included in the shipment
        * sales_order_id `string`: sales order id
        * sales_order_item_id `string`: sales order item id
        * sku `string`: Item Stock Keeping Unit
    * modified_at: The date and time that the shipment was created or last modified.
    * order_source_code
    * packages `array`: The packages in the shipment.
      * items
        * dimensions: The package dimensions
          * height **required** `number`: The length of the package, in the specified unit
          * length **required** `number`: The length of the package, in the specified unit
          * unit **required** `string`
          * width **required** `number`: The width of the package, in the specified unit
        * external_package_id `string`: An external package id.
        * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * label_messages
          * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
          * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
          * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
        * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
        * tracking_number: The tracking number for the package.  The format depends on the carrier.
        * weight **required**: The package weight
          * unit **required**
          * value **required** `number`: The weight, in the specified unit
    * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
    * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
    * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * ship_to: The recipient's mailing address
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * shipment_id: A string that uniquely identifies the shipment
    * shipment_status `string`: The current status of the shipment
    * total_weight: The combined weight of all packages in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
  * shipment_cost: The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * shipment_id: The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)
  * status
  * test_label `boolean`: Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
  * trackable `boolean`: Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.
  * tracking_number `string`: The tracking number for the package. Tracking number formats vary across carriers.
  * tracking_status: The current status of the package, such as `in_transit` or `delivered`
  * validate_address `string`
  * voided `boolean`: Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)
  * voided_at: The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided

### create_shipment_response_body_fields
* create_shipment_response_body_fields `object`
  * address_validation: The address validation
    * matched_address **required**: The matched address found by the Shipengine API
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * messages **required** `array`: The list of messages that were generated during the address validation request.
      * items [response_message](#response_message)
    * original_address **required**: The original address that was sent for validation
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * status **required**
  * errors `array`: An array of errors that occurred while creating shipment.
    * items `string`: An error that occurred while creating a shipment.

### create_shipments_request_body
* create_shipments_request_body `object`: A create shipments request body
  * shipments **required** `array`: An array of shipments to be created.
    * items
      * validate_address `string`
      * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
        * items
          * name **required** `string`: The tag name.
      * advanced_options: Advanced shipment options.  These are entirely optional.
        * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
        * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
        * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
        * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
        * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
        * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
        * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
        * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
        * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
        * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
        * dry_ice `boolean`: Indicates if the shipment contain dry ice
        * dry_ice_weight: The weight of the dry ice in the shipment
          * unit **required**
          * value **required** `number`: The weight, in the specified unit
        * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
        * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
        * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
        * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
      * carrier_id: The carrier account that is billed for the shipping charges
      * confirmation `string`: The type of delivery confirmation that is required for this shipment.
      * created_at: The date and time that the shipment was created in ShipEngine.
      * customs: Customs information.  This is usually only needed for international shipments.
        * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
        * customs_items `array`: Customs declarations for each item in the shipment.
          * items [customs_item](#customs_item)
        * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
      * external_order_id `string`: ID that the Order Source assigned
      * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
      * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
      * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
        * items
          * asin `string`: Amazon Standard Identification Number
          * external_order_id `string`: external order id
          * external_order_item_id `string`: external order item id
          * name `string`: item name
          * order_source_code
          * quantity `integer`: The quantity of this item included in the shipment
          * sales_order_id `string`: sales order id
          * sales_order_item_id `string`: sales order item id
          * sku `string`: Item Stock Keeping Unit
      * modified_at: The date and time that the shipment was created or last modified.
      * order_source_code
      * packages `array`: The packages in the shipment.
        * items
          * dimensions: The package dimensions
          * external_package_id `string`: An external package id.
          * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
          * label_messages
          * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
          * tracking_number: The tracking number for the package.  The format depends on the carrier.
          * weight **required**: The package weight
      * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
        * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
        * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
        * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
        * address_residential_indicator `string`: Indicates whether this is a residential address.
        * city_locality `string`: The name of the city or locality
        * company_name `string`: If this is a business address, then the company name should be specified here.
        * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
        * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
        * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
        * postal_code
        * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
      * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
      * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
      * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
        * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
        * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
        * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
        * address_residential_indicator `string`: Indicates whether this is a residential address.
        * city_locality `string`: The name of the city or locality
        * company_name `string`: If this is a business address, then the company name should be specified here.
        * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
        * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
        * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
        * postal_code
        * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
      * ship_to: The recipient's mailing address
        * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
        * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
        * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
        * address_residential_indicator `string`: Indicates whether this is a residential address.
        * city_locality `string`: The name of the city or locality
        * company_name `string`: If this is a business address, then the company name should be specified here.
        * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
        * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
        * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
        * postal_code
        * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
      * shipment_id: A string that uniquely identifies the shipment
      * shipment_status `string`: The current status of the shipment
      * total_weight: The combined weight of all packages in the shipment
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
      * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.

### create_shipments_response_body
* create_shipments_response_body `object`: A create shipments response body
  * has_errors **required** `boolean`: Indicates if errors occured while creating the shipments
  * shipments **required** `array`: An array of shipments that were created.
    * items: The shipment that was created.
      * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
        * items
          * name **required** `string`: The tag name.
      * advanced_options: Advanced shipment options.  These are entirely optional.
        * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
        * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
        * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
        * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
        * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
        * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
        * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
        * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
        * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
        * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
        * dry_ice `boolean`: Indicates if the shipment contain dry ice
        * dry_ice_weight: The weight of the dry ice in the shipment
          * unit **required**
          * value **required** `number`: The weight, in the specified unit
        * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
        * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
        * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
        * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
      * carrier_id: The carrier account that is billed for the shipping charges
      * confirmation `string`: The type of delivery confirmation that is required for this shipment.
      * created_at: The date and time that the shipment was created in ShipEngine.
      * customs: Customs information.  This is usually only needed for international shipments.
        * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
        * customs_items `array`: Customs declarations for each item in the shipment.
          * items [customs_item](#customs_item)
        * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
      * external_order_id `string`: ID that the Order Source assigned
      * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
      * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
      * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
        * items
          * asin `string`: Amazon Standard Identification Number
          * external_order_id `string`: external order id
          * external_order_item_id `string`: external order item id
          * name `string`: item name
          * order_source_code
          * quantity `integer`: The quantity of this item included in the shipment
          * sales_order_id `string`: sales order id
          * sales_order_item_id `string`: sales order item id
          * sku `string`: Item Stock Keeping Unit
      * modified_at: The date and time that the shipment was created or last modified.
      * order_source_code
      * packages `array`: The packages in the shipment.
        * items
          * dimensions: The package dimensions
          * external_package_id `string`: An external package id.
          * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
          * label_messages
          * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
          * tracking_number: The tracking number for the package.  The format depends on the carrier.
          * weight **required**: The package weight
      * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
        * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
        * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
        * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
        * address_residential_indicator `string`: Indicates whether this is a residential address.
        * city_locality `string`: The name of the city or locality
        * company_name `string`: If this is a business address, then the company name should be specified here.
        * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
        * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
        * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
        * postal_code
        * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
      * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
      * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
      * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
        * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
        * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
        * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
        * address_residential_indicator `string`: Indicates whether this is a residential address.
        * city_locality `string`: The name of the city or locality
        * company_name `string`: If this is a business address, then the company name should be specified here.
        * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
        * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
        * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
        * postal_code
        * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
      * ship_to: The recipient's mailing address
        * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
        * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
        * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
        * address_residential_indicator `string`: Indicates whether this is a residential address.
        * city_locality `string`: The name of the city or locality
        * company_name `string`: If this is a business address, then the company name should be specified here.
        * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
        * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
        * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
        * postal_code
        * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
      * shipment_id: A string that uniquely identifies the shipment
      * shipment_status `string`: The current status of the shipment
      * total_weight: The combined weight of all packages in the shipment
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
      * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
      * address_validation: The address validation
        * matched_address **required**: The matched address found by the Shipengine API
          * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
          * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
          * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
          * address_residential_indicator `string`: Indicates whether this is a residential address.
          * city_locality `string`: The name of the city or locality
          * company_name `string`: If this is a business address, then the company name should be specified here.
          * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
          * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
          * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
          * postal_code
          * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
        * messages **required** `array`: The list of messages that were generated during the address validation request.
          * items [response_message](#response_message)
        * original_address **required**: The original address that was sent for validation
          * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
          * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
          * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
          * address_residential_indicator `string`: Indicates whether this is a residential address.
          * city_locality `string`: The name of the city or locality
          * company_name `string`: If this is a business address, then the company name should be specified here.
          * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
          * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
          * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
          * postal_code
          * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
        * status **required**
      * errors `array`: An array of errors that occurred while creating shipment.
        * items `string`: An error that occurred while creating a shipment.

### create_tag_response_body
* create_tag_response_body `object`: Response body for creating tags
  * name **required** `string`: The tag name.

### create_warehouse_request_body
* create_warehouse_request_body `object`: A create warehouse request body
  * created_at `string`: Timestamp that indicates when the warehouse was created
  * name `string`: Name of the warehouse
  * origin_address: The origin address of the warehouse
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * return_address: The return address associated with the warehouse
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * warehouse_id: A string that uniquely identifies the warehouse

### create_warehouse_response_body
* create_warehouse_response_body `object`: A create warehouse response body
  * created_at `string`: Timestamp that indicates when the warehouse was created
  * name `string`: Name of the warehouse
  * origin_address: The origin address of the warehouse
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * return_address: The return address associated with the warehouse
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * warehouse_id: A string that uniquely identifies the warehouse

### create_webhook_request_body
* create_webhook_request_body `object`: A create webhook request body
  * event **required**
  * url **required**: The url that the webhook sends the request to

### create_webhook_response_body
* create_webhook_response_body `object`: A webhook response body
  * event
  * url: The url that the webhook sends the request to
  * webhook_id: A string that uniquely identifies the webhook

### currency
* currency `string` (values: usd, cad, aud, gbp, eur, nzd): The currencies that are supported by ShipEngine.

### customs_item
* customs_item `object`: The customs declaration for a single item in the shipment.
  * country_of_origin: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) where this item originated
  * customs_item_id **required**: A string that uniquely identifies the customs item
  * description `string`: A description of the item
  * harmonized_tariff_code `string`: The [Harmonized Tariff Code](https://en.wikipedia.org/wiki/Harmonized_System) of this item.
  * quantity `integer`: The quantity of this item in the shipment.
  * sku `string`: The SKU (Stock Keeping Unit) of the customs item
  * sku_description `string`: Description of the Custom Item's SKU
  * unit_of_measure `string`
  * value: The total value of the customs item
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**

### date
* date `string`: An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date, but not a specific time.  The value _may_ contain a time component, but it will be set to `00:00:00` UTC by ShipEngine.

### date_time
* date_time `string`: An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.

### delivery_confirmation
* delivery_confirmation `string` (values: none, delivery, signature, adult_signature, direct_signature, delivery_mailed): The possible delivery confirmation values

### deprecated_manifest
* deprecated_manifest `object`: Deprecated manifest resource
  * carrier_id: A string that uniquely identifies the carrier
  * created_at `string`: The date-time that the manifest was created
  * form_id: A string that uniquely identifies the form
  * manifest_download
    * href: The URL of the linked resource, if any
  * manifest_id: A string that uniquely identifies the manifest
  * ship_date `string`: The date-time that the manifests shipments will be picked up
  * shipments `integer`: The number of shipments that are included in this manifest
  * submission_id `string`: A string that uniquely identifies the submission
  * warehouse_id: A string that uniquely identifies the warehouse

### dhl_express_account_settings
* dhl_express_account_settings `object`: A DHL Express account settings
  * is_primary_account `boolean`: Indicates if this is primary account
  * nickname `string`: Account nickname
  * should_hide_account_number_on_archive_doc `boolean`: Indicates if the account number should be hidden on the archive documentation

### dhl_express_settings_response_body
* dhl_express_settings_response_body `object`: A DHL Express response body
  * is_primary_account `boolean`: Indicates if this is primary account
  * nickname `string`: Account nickname
  * should_hide_account_number_on_archive_doc `boolean`: Indicates if the account number should be hidden on the archive documentation

### dimension_unit
* dimension_unit `string` (values: inch, centimeter): The dimension units that are supported by ShipEngine.

### dimensions
* dimensions `object`: The dimensions of a package
  * height **required** `number`: The length of the package, in the specified unit
  * length **required** `number`: The length of the package, in the specified unit
  * unit **required** `string`
  * width **required** `number`: The width of the package, in the specified unit

### disconnect_insurer_response_body
* disconnect_insurer_response_body `object`

### download_file_pdf_response_body
* download_file_pdf_response_body `string`

### download_file_png_response_body
* download_file_png_response_body `string`

### download_file_zpl_response_body
* download_file_zpl_response_body `string`

### email
* email `string`: An email address.

### empty_response_body
* empty_response_body `string`

### error
* error `object`: The error structure that gets returned with almost all failed API calls
  * error_code **required**
  * error_source **required**
  * error_type **required**
  * message **required** `string`: An error message associated with the failed API call

### error_code
* error_code `string` (values: auto_fund_not_supported, batch_cannot_be_modified, carrier_conflict, carrier_disconnected, carrier_not_connected, carrier_not_supported, confirmation_not_supported, default_warehouse_cannot_be_deleted, field_conflict, field_value_required, forbidden, identifier_conflict, identifiers_must_match, invalid_address, invalid_billing_plan, invalid_field_value, invalid_identifier, invalid_status, invalid_string_length, label_images_not_supported, meter_failure, order_source_not_active, rate_limit_exceeded, refresh_not_supported, request_body_required, return_label_not_supported, settings_not_supported, subscription_inactive, terms_not_accepted, tracking_not_supported, trial_expired, unauthorized, unknown, unspecified, verification_failure, warehouse_conflict, webhook_event_type_conflict): The error code specified for the failed API Call

### error_response_body
* error_response_body `object`: An error response body
  * errors **required** `array`: The errors associated with the failed API call
    * items
      * error_code **required**
      * error_source **required**
      * error_type **required**
      * message **required** `string`: An error message associated with the failed API call
  * request_id **required**: A UUID that uniquely identifies the request id.

### error_source
* error_source `string` (values: carrier, order_source, shipengine): The source of the error, as indicated by the name this informs us if the API call failed because of the

### error_type
* error_type `string` (values: account_status, business_rules, validation, security, system, integrations): The type of error

### estimate_rates_request_body
* estimate_rates_request_body `object`: A rate estimate request body
  * address_residential_indicator
  * confirmation
  * dimensions: The dimensions of the package
    * height **required** `number`: The length of the package, in the specified unit
    * length **required** `number`: The length of the package, in the specified unit
    * unit **required** `string`
    * width **required** `number`: The width of the package, in the specified unit
  * from_city_locality `string`: from postal code
  * from_country_code
  * from_postal_code
  * from_state_province `string`: From state province
  * ship_date `string`: ship date
  * to_city_locality `string`: The city locality the package is being shipped to
  * to_country_code
  * to_postal_code
  * to_state_province `string`: To state province
  * weight: The weight of the package
    * unit **required**
    * value **required** `number`: The weight, in the specified unit

### estimate_rates_response_body
* estimate_rates_response_body `array`: A rate estimate response body
  * items
    * carrier_code **required** `string`: carrier code
    * carrier_delivery_days `string`: The carrier delivery days
    * carrier_friendly_name **required** `string`: carrier friendly name
    * carrier_id **required**: A string that uniquely identifies the carrier
    * carrier_nickname **required** `string`: carrier nickname
    * confirmation_amount **required**: The confirmation amount
      * amount **required** `number`: The monetary amount, in the specified currency.
      * currency **required**
    * delivery_days `integer`: The number of days estimated for delivery, this will show the _actual_ deliverty
    * error_messages **required** `array`: The error messages
      * items `string`: error message
    * estimated_delivery_date
    * guaranteed_service **required** `boolean`: Indicates if the rate is guaranteed.
    * insurance_amount **required**: The insurance amount
      * amount **required** `number`: The monetary amount, in the specified currency.
      * currency **required**
    * negotiated_rate **required** `boolean`: Indicates if the rates been negotiated
    * other_amount **required**: Any other charges associated with this rate
      * amount **required** `number`: The monetary amount, in the specified currency.
      * currency **required**
    * package_type **required** `string`: package type that this rate was estimated for
    * rate_id **required**: A string that uniquely identifies the rate
    * rate_type **required**
    * service_code **required** `string`: service code for the rate
    * service_type **required** `string`: service type
    * ship_date `string`: ship date
    * shipping_amount **required**: The shipping amount
      * amount **required** `number`: The monetary amount, in the specified currency.
      * currency **required**
    * tax_amount: Tariff and additional taxes associated with an international shipment.
      * amount **required** `number`: The monetary amount, in the specified currency.
      * currency **required**
    * trackable **required** `boolean`: Indicates if rate is trackable
    * validation_status **required**
    * warning_messages **required** `array`: The warning messages
      * items `string`: warning message
    * zone **required** `integer`: Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of

### fedex_account_settings
* fedex_account_settings `object`: A Fedex account settings request body
  * is_primary_account `boolean`
  * nickname `string`: Account nickname
  * pickup_type
  * smart_post_endorsement
  * smart_post_hub

### fedex_account_settings_request_body
* fedex_account_settings_request_body `object`: A Fedex account settings request body
  * is_primary_account `boolean`
  * nickname `string`: Account nickname
  * pickup_type
  * smart_post_endorsement
  * smart_post_hub

### fedex_pickup_type
* fedex_pickup_type `string` (values: none, regular_pickup, request_courier, drop_box, business_service_center, station): Determines how FedEx will pickup your packages

### fedex_settings_response_body
* fedex_settings_response_body `object`: A Fedex settings response body
  * is_primary_account `boolean`
  * nickname `string`: Account nickname
  * pickup_type
  * smart_post_endorsement
  * smart_post_hub

### get_batch_by_external_id_response_body
* get_batch_by_external_id_response_body `object`: A get batch by external id response body
  * batch_errors_url **required**: Link to batch errors endpoint
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * batch_id **required**: A string that uniquely identifies the batch
  * batch_labels_url **required**: Link to batch labels query
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * batch_notes **required** `string`: Custom notes you can add for each created batch
  * batch_shipments_url **required**: The batch shipments endpoint
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * completed **required** `integer`: The number of labels generated in the batch
  * count **required** `integer`: The total of errors, warnings, and completed properties
  * created_at **required**: The date and time the batch was created in ShipEngine
  * errors **required** `integer`: The number of errors that occurred while generating the batch
  * external_batch_id **required** `string`: A string that uniquely identifies the external batch
  * form_download **required**: The form download for any customs that are needed
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * forms **required** `integer`: The number of forms for customs that are available for download
  * label_download **required**: The label download for the batch
    * href: The URL of the linked resource, if any
    * pdf: The URL for the pdf generated label
    * png: The URL for the png generated label
    * zpl: The URL for the zpl generated label
  * label_format **required** `string`
  * label_layout **required** `string`: label layout
  * processed_at **required**: The date and time the batch was processed in ShipEngine
  * status **required**
  * warnings **required** `integer`: The number of warnings that occurred while generating the batch

### get_batch_by_id_response_body
* get_batch_by_id_response_body `object`: A get batch by id response body
  * batch_errors_url **required**: Link to batch errors endpoint
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * batch_id **required**: A string that uniquely identifies the batch
  * batch_labels_url **required**: Link to batch labels query
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * batch_notes **required** `string`: Custom notes you can add for each created batch
  * batch_shipments_url **required**: The batch shipments endpoint
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * completed **required** `integer`: The number of labels generated in the batch
  * count **required** `integer`: The total of errors, warnings, and completed properties
  * created_at **required**: The date and time the batch was created in ShipEngine
  * errors **required** `integer`: The number of errors that occurred while generating the batch
  * external_batch_id **required** `string`: A string that uniquely identifies the external batch
  * form_download **required**: The form download for any customs that are needed
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * forms **required** `integer`: The number of forms for customs that are available for download
  * label_download **required**: The label download for the batch
    * href: The URL of the linked resource, if any
    * pdf: The URL for the pdf generated label
    * png: The URL for the png generated label
    * zpl: The URL for the zpl generated label
  * label_format **required** `string`
  * label_layout **required** `string`: label layout
  * processed_at **required**: The date and time the batch was processed in ShipEngine
  * status **required**
  * warnings **required** `integer`: The number of warnings that occurred while generating the batch

### get_carrier_by_id_response_body
* get_carrier_by_id_response_body `object`: A get carrier by id response body
  * account_number `string`: The account number that the carrier is connected to.
  * balance `number`: Current available balance
  * carrier_code: A string that uniquely identifies the carrier.
  * carrier_id: A string that uniquely identifies the carrier.
  * friendly_name `string`: Screen readable name
  * has_multi_package_supporting_services `boolean`: Carrier supports multiple packages per shipment
  * nickname `string`: Nickname given to the account when initially setting up the carrier.
  * options `array`: A list of options that are available to that carrier
    * items
      * default_value `string`: Default value of option
      * description `string`: Description of option
      * name `string`: Name of advanced option
  * packages `array`: A list of package types that are supported by the carrier
    * items
      * description `string`: Provides a helpful description for the custom package.
      * dimensions: The custom dimensions for the package.
        * height **required** `number`: The length of the package, in the specified unit
        * length **required** `number`: The length of the package, in the specified unit
        * unit **required** `string`
        * width **required** `number`: The width of the package, in the specified unit
      * name **required** `string`
      * package_code **required**
      * package_id: A string that uniquely identifies the package.
  * primary `boolean`: Is this the primary carrier that is used by default when no carrier is specified in label/shipment creation
  * requires_funded_amount `boolean`: Indicates whether the carrier requires funding to use its services
  * services `array`: A list of services that are offered by the carrier
    * items
      * carrier_code
      * carrier_id: A string that uniquely identifies the carrier
      * domestic `boolean`: Supports domestic shipping
      * international `boolean`: Supports international shipping.
      * is_multi_package_supported `boolean`: Carrier supports multiple packages per shipment
      * name `string`: User friendly service name
      * service_code `string`: service code
  * supports_label_messages `boolean`: The carrier supports adding custom label messages to an order.

### get_carrier_options_response_body
* get_carrier_options_response_body `object`: A carrier list options response body
  * options `array`: AN array of carrier options
    * items: Carrer options
      * default_value `string`: Default value of option
      * description `string`: Description of option
      * name `string`: Name of advanced option

### get_carrier_settings_response_body


### get_carriers_response_body
* get_carriers_response_body
  * carriers **required** `array`: The carrier response body
    * items
      * account_number `string`: The account number that the carrier is connected to.
      * balance `number`: Current available balance
      * carrier_code: A string that uniquely identifies the carrier.
      * carrier_id: A string that uniquely identifies the carrier.
      * friendly_name `string`: Screen readable name
      * has_multi_package_supporting_services `boolean`: Carrier supports multiple packages per shipment
      * nickname `string`: Nickname given to the account when initially setting up the carrier.
      * options `array`: A list of options that are available to that carrier
        * items
          * default_value `string`: Default value of option
          * description `string`: Description of option
          * name `string`: Name of advanced option
      * packages `array`: A list of package types that are supported by the carrier
        * items
          * description `string`: Provides a helpful description for the custom package.
          * dimensions: The custom dimensions for the package.
          * name **required** `string`
          * package_code **required**
          * package_id: A string that uniquely identifies the package.
      * primary `boolean`: Is this the primary carrier that is used by default when no carrier is specified in label/shipment creation
      * requires_funded_amount `boolean`: Indicates whether the carrier requires funding to use its services
      * services `array`: A list of services that are offered by the carrier
        * items
          * carrier_code
          * carrier_id: A string that uniquely identifies the carrier
          * domestic `boolean`: Supports domestic shipping
          * international `boolean`: Supports international shipping.
          * is_multi_package_supported `boolean`: Carrier supports multiple packages per shipment
          * name `string`: User friendly service name
          * service_code `string`: service code
      * supports_label_messages `boolean`: The carrier supports adding custom label messages to an order.
  * errors **required** `array`: The errors associated with the failed API call
    * items
      * error_code **required**
      * error_source **required**
      * error_type **required**
      * message **required** `string`: An error message associated with the failed API call
  * request_id **required**: A UUID that uniquely identifies the request id.

### get_insurance_balance_response_body
* get_insurance_balance_response_body `object`: A get insurance balance response body
  * amount **required** `number`: The monetary amount, in the specified currency.
  * currency **required**

### get_label_by_external_shipment_id_response_body
* get_label_by_external_shipment_id_response_body `object`: A get label by external shipment id response body
  * batch_id: If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.
  * carrier_code: The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.
  * carrier_id: The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label
  * charge_event: The label charge event.
  * created_at: The date and time that the label was created in ShipEngine.
  * form_download: The link to downlaod the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * insurance_claim: The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * insurance_cost: The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * is_international `boolean`: Indicates whether this is an international shipment.  That is, the originating country and destination country are different.
  * is_return_label `boolean`: Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.
  * label_download
    * href: The URL of the linked resource, if any
    * pdf: The URL for the pdf generated label
    * png: The URL for the png generated label
    * zpl: The URL for the zpl generated label
  * label_download_type `string`
  * label_format `string`: The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
  * label_id: A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.
  * label_image_id: The label image resource that was used to create a custom label image.
  * label_layout `string`: The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
  * outbound_label_id: The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is
  * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
  * packages `array`: The label's package(s).
    * items [package](#package)
  * rma_number `string`: An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.
  * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
  * ship_date: The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
  * shipment: The shipment information used to generate the label
    * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
      * items
        * name **required** `string`: The tag name.
    * advanced_options: Advanced shipment options.  These are entirely optional.
      * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
      * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
      * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
      * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
      * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
      * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
      * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
      * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
      * dry_ice `boolean`: Indicates if the shipment contain dry ice
      * dry_ice_weight: The weight of the dry ice in the shipment
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
      * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
      * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
      * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
      * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
    * carrier_id: The carrier account that is billed for the shipping charges
    * confirmation `string`: The type of delivery confirmation that is required for this shipment.
    * created_at: The date and time that the shipment was created in ShipEngine.
    * customs: Customs information.  This is usually only needed for international shipments.
      * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
      * customs_items `array`: Customs declarations for each item in the shipment.
        * items [customs_item](#customs_item)
      * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
    * external_order_id `string`: ID that the Order Source assigned
    * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
    * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
    * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
      * items
        * asin `string`: Amazon Standard Identification Number
        * external_order_id `string`: external order id
        * external_order_item_id `string`: external order item id
        * name `string`: item name
        * order_source_code
        * quantity `integer`: The quantity of this item included in the shipment
        * sales_order_id `string`: sales order id
        * sales_order_item_id `string`: sales order item id
        * sku `string`: Item Stock Keeping Unit
    * modified_at: The date and time that the shipment was created or last modified.
    * order_source_code
    * packages `array`: The packages in the shipment.
      * items
        * dimensions: The package dimensions
          * height **required** `number`: The length of the package, in the specified unit
          * length **required** `number`: The length of the package, in the specified unit
          * unit **required** `string`
          * width **required** `number`: The width of the package, in the specified unit
        * external_package_id `string`: An external package id.
        * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * label_messages
          * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
          * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
          * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
        * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
        * tracking_number: The tracking number for the package.  The format depends on the carrier.
        * weight **required**: The package weight
          * unit **required**
          * value **required** `number`: The weight, in the specified unit
    * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
    * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
    * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * ship_to: The recipient's mailing address
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * shipment_id: A string that uniquely identifies the shipment
    * shipment_status `string`: The current status of the shipment
    * total_weight: The combined weight of all packages in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
  * shipment_cost: The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * shipment_id: The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)
  * status
  * test_label `boolean`: Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
  * trackable `boolean`: Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.
  * tracking_number `string`: The tracking number for the package. Tracking number formats vary across carriers.
  * tracking_status: The current status of the package, such as `in_transit` or `delivered`
  * validate_address `string`
  * voided `boolean`: Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)
  * voided_at: The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided

### get_label_by_id_response_body
* get_label_by_id_response_body `object`: A get label by id response body
  * batch_id: If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.
  * carrier_code: The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.
  * carrier_id: The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label
  * charge_event: The label charge event.
  * created_at: The date and time that the label was created in ShipEngine.
  * form_download: The link to downlaod the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * insurance_claim: The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * insurance_cost: The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * is_international `boolean`: Indicates whether this is an international shipment.  That is, the originating country and destination country are different.
  * is_return_label `boolean`: Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.
  * label_download
    * href: The URL of the linked resource, if any
    * pdf: The URL for the pdf generated label
    * png: The URL for the png generated label
    * zpl: The URL for the zpl generated label
  * label_download_type `string`
  * label_format `string`: The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
  * label_id: A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.
  * label_image_id: The label image resource that was used to create a custom label image.
  * label_layout `string`: The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
  * outbound_label_id: The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is
  * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
  * packages `array`: The label's package(s).
    * items [package](#package)
  * rma_number `string`: An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.
  * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
  * ship_date: The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
  * shipment: The shipment information used to generate the label
    * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
      * items
        * name **required** `string`: The tag name.
    * advanced_options: Advanced shipment options.  These are entirely optional.
      * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
      * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
      * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
      * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
      * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
      * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
      * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
      * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
      * dry_ice `boolean`: Indicates if the shipment contain dry ice
      * dry_ice_weight: The weight of the dry ice in the shipment
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
      * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
      * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
      * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
      * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
    * carrier_id: The carrier account that is billed for the shipping charges
    * confirmation `string`: The type of delivery confirmation that is required for this shipment.
    * created_at: The date and time that the shipment was created in ShipEngine.
    * customs: Customs information.  This is usually only needed for international shipments.
      * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
      * customs_items `array`: Customs declarations for each item in the shipment.
        * items [customs_item](#customs_item)
      * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
    * external_order_id `string`: ID that the Order Source assigned
    * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
    * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
    * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
      * items
        * asin `string`: Amazon Standard Identification Number
        * external_order_id `string`: external order id
        * external_order_item_id `string`: external order item id
        * name `string`: item name
        * order_source_code
        * quantity `integer`: The quantity of this item included in the shipment
        * sales_order_id `string`: sales order id
        * sales_order_item_id `string`: sales order item id
        * sku `string`: Item Stock Keeping Unit
    * modified_at: The date and time that the shipment was created or last modified.
    * order_source_code
    * packages `array`: The packages in the shipment.
      * items
        * dimensions: The package dimensions
          * height **required** `number`: The length of the package, in the specified unit
          * length **required** `number`: The length of the package, in the specified unit
          * unit **required** `string`
          * width **required** `number`: The width of the package, in the specified unit
        * external_package_id `string`: An external package id.
        * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * label_messages
          * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
          * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
          * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
        * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
        * tracking_number: The tracking number for the package.  The format depends on the carrier.
        * weight **required**: The package weight
          * unit **required**
          * value **required** `number`: The weight, in the specified unit
    * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
    * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
    * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * ship_to: The recipient's mailing address
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * shipment_id: A string that uniquely identifies the shipment
    * shipment_status `string`: The current status of the shipment
    * total_weight: The combined weight of all packages in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
  * shipment_cost: The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * shipment_id: The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)
  * status
  * test_label `boolean`: Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
  * trackable `boolean`: Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.
  * tracking_number `string`: The tracking number for the package. Tracking number formats vary across carriers.
  * tracking_status: The current status of the package, such as `in_transit` or `delivered`
  * validate_address `string`
  * voided `boolean`: Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)
  * voided_at: The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided

### get_manifest_by_id_response_body
* get_manifest_by_id_response_body `object`: A get manifest by id response body
  * carrier_id: A string that uniquely identifies the carrier
  * created_at `string`: The date-time that the manifest was created
  * form_id: A string that uniquely identifies the form
  * manifest_download
    * href: The URL of the linked resource, if any
  * manifest_id: A string that uniquely identifies the manifest
  * ship_date `string`: The date-time that the manifests shipments will be picked up
  * shipments `integer`: The number of shipments that are included in this manifest
  * submission_id `string`: A string that uniquely identifies the submission
  * warehouse_id: A string that uniquely identifies the warehouse

### get_package_type_by_id_response_body
* get_package_type_by_id_response_body `object`: A get package type by id response body
  * description `string`: Provides a helpful description for the custom package.
  * dimensions: The custom dimensions for the package.
    * height **required** `number`: The length of the package, in the specified unit
    * length **required** `number`: The length of the package, in the specified unit
    * unit **required** `string`
    * width **required** `number`: The width of the package, in the specified unit
  * name **required** `string`
  * package_code **required**
  * package_id: A string that uniquely identifies the package.

### get_rate_by_id_response_body
* get_rate_by_id_response_body `object`: A rate response body
  * carrier_code **required** `string`: carrier code
  * carrier_delivery_days `string`: The carrier delivery days
  * carrier_friendly_name **required** `string`: carrier friendly name
  * carrier_id **required**: A string that uniquely identifies the carrier
  * carrier_nickname **required** `string`: carrier nickname
  * confirmation_amount **required**: The confirmation amount
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * delivery_days `integer`: The number of days estimated for delivery, this will show the _actual_ deliverty
  * error_messages **required** `array`: The error messages
    * items `string`: error message
  * estimated_delivery_date
  * guaranteed_service **required** `boolean`: Indicates if the rate is guaranteed.
  * insurance_amount **required**: The insurance amount
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * negotiated_rate **required** `boolean`: Indicates if the rates been negotiated
  * other_amount **required**: Any other charges associated with this rate
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * package_type **required** `string`: package type that this rate was estimated for
  * rate_id **required**: A string that uniquely identifies the rate
  * rate_type **required**
  * service_code **required** `string`: service code for the rate
  * service_type **required** `string`: service type
  * ship_date `string`: ship date
  * shipping_amount **required**: The shipping amount
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * tax_amount: Tariff and additional taxes associated with an international shipment.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * trackable **required** `boolean`: Indicates if rate is trackable
  * validation_status **required**
  * warning_messages **required** `array`: The warning messages
    * items `string`: warning message
  * zone **required** `integer`: Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of

### get_shipment_by_external_id_response_body
* get_shipment_by_external_id_response_body `object`: A get shipment by external id response body
  * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
    * items
      * name **required** `string`: The tag name.
  * advanced_options: Advanced shipment options.  These are entirely optional.
    * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
    * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
    * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
    * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
    * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
    * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
    * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
    * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
    * dry_ice `boolean`: Indicates if the shipment contain dry ice
    * dry_ice_weight: The weight of the dry ice in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
    * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
    * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
    * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
  * carrier_id: The carrier account that is billed for the shipping charges
  * confirmation `string`: The type of delivery confirmation that is required for this shipment.
  * created_at: The date and time that the shipment was created in ShipEngine.
  * customs: Customs information.  This is usually only needed for international shipments.
    * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
    * customs_items `array`: Customs declarations for each item in the shipment.
      * items [customs_item](#customs_item)
    * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
  * external_order_id `string`: ID that the Order Source assigned
  * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
  * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
  * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
    * items
      * asin `string`: Amazon Standard Identification Number
      * external_order_id `string`: external order id
      * external_order_item_id `string`: external order item id
      * name `string`: item name
      * order_source_code
      * quantity `integer`: The quantity of this item included in the shipment
      * sales_order_id `string`: sales order id
      * sales_order_item_id `string`: sales order item id
      * sku `string`: Item Stock Keeping Unit
  * modified_at: The date and time that the shipment was created or last modified.
  * order_source_code
  * packages `array`: The packages in the shipment.
    * items
      * dimensions: The package dimensions
        * height **required** `number`: The length of the package, in the specified unit
        * length **required** `number`: The length of the package, in the specified unit
        * unit **required** `string`
        * width **required** `number`: The width of the package, in the specified unit
      * external_package_id `string`: An external package id.
      * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * label_messages
        * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
        * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
        * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
      * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
      * tracking_number: The tracking number for the package.  The format depends on the carrier.
      * weight **required**: The package weight
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
  * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
  * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
  * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * ship_to: The recipient's mailing address
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * shipment_id: A string that uniquely identifies the shipment
  * shipment_status `string`: The current status of the shipment
  * total_weight: The combined weight of all packages in the shipment
    * unit **required**
    * value **required** `number`: The weight, in the specified unit
  * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.

### get_shipment_by_id_response_body
* get_shipment_by_id_response_body `object`: A get shipment by id response body
  * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
    * items
      * name **required** `string`: The tag name.
  * advanced_options: Advanced shipment options.  These are entirely optional.
    * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
    * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
    * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
    * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
    * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
    * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
    * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
    * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
    * dry_ice `boolean`: Indicates if the shipment contain dry ice
    * dry_ice_weight: The weight of the dry ice in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
    * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
    * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
    * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
  * carrier_id: The carrier account that is billed for the shipping charges
  * confirmation `string`: The type of delivery confirmation that is required for this shipment.
  * created_at: The date and time that the shipment was created in ShipEngine.
  * customs: Customs information.  This is usually only needed for international shipments.
    * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
    * customs_items `array`: Customs declarations for each item in the shipment.
      * items [customs_item](#customs_item)
    * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
  * external_order_id `string`: ID that the Order Source assigned
  * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
  * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
  * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
    * items
      * asin `string`: Amazon Standard Identification Number
      * external_order_id `string`: external order id
      * external_order_item_id `string`: external order item id
      * name `string`: item name
      * order_source_code
      * quantity `integer`: The quantity of this item included in the shipment
      * sales_order_id `string`: sales order id
      * sales_order_item_id `string`: sales order item id
      * sku `string`: Item Stock Keeping Unit
  * modified_at: The date and time that the shipment was created or last modified.
  * order_source_code
  * packages `array`: The packages in the shipment.
    * items
      * dimensions: The package dimensions
        * height **required** `number`: The length of the package, in the specified unit
        * length **required** `number`: The length of the package, in the specified unit
        * unit **required** `string`
        * width **required** `number`: The width of the package, in the specified unit
      * external_package_id `string`: An external package id.
      * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * label_messages
        * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
        * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
        * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
      * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
      * tracking_number: The tracking number for the package.  The format depends on the carrier.
      * weight **required**: The package weight
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
  * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
  * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
  * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * ship_to: The recipient's mailing address
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * shipment_id: A string that uniquely identifies the shipment
  * shipment_status `string`: The current status of the shipment
  * total_weight: The combined weight of all packages in the shipment
    * unit **required**
    * value **required** `number`: The weight, in the specified unit
  * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.

### get_tracking_log_from_label_response_body
* get_tracking_log_from_label_response_body `object`: A get tracking log from label response body
  * actual_delivery_date
  * carrier_status_code `string`: Carrier status code
  * carrier_status_description `string`: carrier status description
  * estimated_delivery_date
  * events `array`: The events that have occured during the lifetime of this tracking number.
    * items [track_event](#track_event)
  * exception_description `string`: Exception description
  * ship_date
  * status_code `string`: Status code
  * status_description `string`: Status description
  * tracking_number

### get_tracking_log_response_body
* get_tracking_log_response_body `object`: A get tracking log response body
  * actual_delivery_date
  * carrier_status_code `string`: Carrier status code
  * carrier_status_description `string`: carrier status description
  * estimated_delivery_date
  * events `array`: The events that have occured during the lifetime of this tracking number.
    * items [track_event](#track_event)
  * exception_description `string`: Exception description
  * ship_date
  * status_code `string`: Status code
  * status_description `string`: Status description
  * tracking_number

### get_warehouse_by_id_response_body
* get_warehouse_by_id_response_body `object`: A get warehouse by id response body
  * created_at `string`: Timestamp that indicates when the warehouse was created
  * name `string`: Name of the warehouse
  * origin_address: The origin address of the warehouse
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * return_address: The return address associated with the warehouse
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * warehouse_id: A string that uniquely identifies the warehouse

### get_webhook_by_id_response_body
* get_webhook_by_id_response_body `object`: A get webhook id response body
  * event
  * url: The url that the webhook sends the request to
  * webhook_id: A string that uniquely identifies the webhook

### image_id
* image_id `string`: Used to identify an image resource.

### insurance_provider
* insurance_provider `string` (values: none, shipsurance, carrier, third_party): The possible insurance provider values

### international_shipment_options
* international_shipment_options `object`: Options for international shipments, such as customs declarations.
  * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
  * customs_items `array`: Customs declarations for each item in the shipment.
    * items [customs_item](#customs_item)
  * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.

### label
* label `object`: A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
  * batch_id: If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.
  * carrier_code: The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.
  * carrier_id: The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label
  * charge_event: The label charge event.
  * created_at: The date and time that the label was created in ShipEngine.
  * form_download: The link to downlaod the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * insurance_claim: The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * insurance_cost: The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * is_international `boolean`: Indicates whether this is an international shipment.  That is, the originating country and destination country are different.
  * is_return_label `boolean`: Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.
  * label_download
    * href: The URL of the linked resource, if any
    * pdf: The URL for the pdf generated label
    * png: The URL for the png generated label
    * zpl: The URL for the zpl generated label
  * label_download_type `string`
  * label_format `string`: The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
  * label_id: A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.
  * label_image_id: The label image resource that was used to create a custom label image.
  * label_layout `string`: The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
  * outbound_label_id: The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is
  * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
  * packages `array`: The label's package(s).
    * items [package](#package)
  * rma_number `string`: An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.
  * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
  * ship_date: The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
  * shipment: The shipment information used to generate the label
    * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
      * items
        * name **required** `string`: The tag name.
    * advanced_options: Advanced shipment options.  These are entirely optional.
      * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
      * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
      * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
      * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
      * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
      * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
      * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
      * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
      * dry_ice `boolean`: Indicates if the shipment contain dry ice
      * dry_ice_weight: The weight of the dry ice in the shipment
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
      * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
      * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
      * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
      * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
    * carrier_id: The carrier account that is billed for the shipping charges
    * confirmation `string`: The type of delivery confirmation that is required for this shipment.
    * created_at: The date and time that the shipment was created in ShipEngine.
    * customs: Customs information.  This is usually only needed for international shipments.
      * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
      * customs_items `array`: Customs declarations for each item in the shipment.
        * items [customs_item](#customs_item)
      * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
    * external_order_id `string`: ID that the Order Source assigned
    * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
    * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
    * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
      * items
        * asin `string`: Amazon Standard Identification Number
        * external_order_id `string`: external order id
        * external_order_item_id `string`: external order item id
        * name `string`: item name
        * order_source_code
        * quantity `integer`: The quantity of this item included in the shipment
        * sales_order_id `string`: sales order id
        * sales_order_item_id `string`: sales order item id
        * sku `string`: Item Stock Keeping Unit
    * modified_at: The date and time that the shipment was created or last modified.
    * order_source_code
    * packages `array`: The packages in the shipment.
      * items
        * dimensions: The package dimensions
          * height **required** `number`: The length of the package, in the specified unit
          * length **required** `number`: The length of the package, in the specified unit
          * unit **required** `string`
          * width **required** `number`: The width of the package, in the specified unit
        * external_package_id `string`: An external package id.
        * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * label_messages
          * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
          * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
          * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
        * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
        * tracking_number: The tracking number for the package.  The format depends on the carrier.
        * weight **required**: The package weight
          * unit **required**
          * value **required** `number`: The weight, in the specified unit
    * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
    * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
    * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * ship_to: The recipient's mailing address
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * shipment_id: A string that uniquely identifies the shipment
    * shipment_status `string`: The current status of the shipment
    * total_weight: The combined weight of all packages in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
  * shipment_cost: The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * shipment_id: The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)
  * status
  * test_label `boolean`: Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
  * trackable `boolean`: Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.
  * tracking_number `string`: The tracking number for the package. Tracking number formats vary across carriers.
  * tracking_status: The current status of the package, such as `in_transit` or `delivered`
  * validate_address `string`
  * voided `boolean`: Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)
  * voided_at: The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided

### label_charge_event
* label_charge_event `string` (values: carrier_default, on_creation, on_carrier_acceptance): Determines when the user's account will be charged for the label.

### label_download
* label_download `object`: Reference to the various downloadable file formats for the generated label
  * href: The URL of the linked resource, if any
  * pdf: The URL for the pdf generated label
  * png: The URL for the png generated label
  * zpl: The URL for the zpl generated label

### label_download_type
* label_download_type `string` (values: url, inline): There are two different ways to [download a label](https://www.shipengine.com/docs/labels/downloading/):

### label_format
* label_format `string` (values: pdf, png, zpl): The possible file formats in which shipping labels can be downloaded. We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.

### label_layout
* label_layout `string` (values: 4x6, letter): The available layouts (sizes) in which shipping labels can be downloaded.  The label format determines which sizes are supported. `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.

### label_messages
* label_messages `object`: Custom messages to print on the shipping label for the package.  These are typically used to print invoice numbers, product numbers, or other internal reference numbers.  Not all carriers support label messages. The number of lines and the maximum length of each line also varies by carrier.
  * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
  * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
  * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.

### label_status
* label_status `string` (values: processing, completed, error, voided): The possible statuses that a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/) can be in.

### link
* link `object`: A link to a related resource
  * href: The URL of the linked resource, if any
  * type `string`: The type of resource, or the type of relationship to the parent resource

### list_batch_errors_response_body
* list_batch_errors_response_body `object`: A batch errors response body
  * errors **required** `array`: The errors currently associated with the batch
    * items [batch_response_error](#batch_response_error)
  * links **required**
    * first **required**: The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * last **required**: The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * next **required**: The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * prev **required**: The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource

### list_batches_response_body
* list_batches_response_body `object`: A list batch response body
  * batches **required** `array`: Batch List
    * items: Batch
      * batch_errors_url **required**: Link to batch errors endpoint
        * href: The URL of the linked resource, if any
        * type `string`: The type of resource, or the type of relationship to the parent resource
      * batch_id **required**: A string that uniquely identifies the batch
      * batch_labels_url **required**: Link to batch labels query
        * href: The URL of the linked resource, if any
        * type `string`: The type of resource, or the type of relationship to the parent resource
      * batch_notes **required** `string`: Custom notes you can add for each created batch
      * batch_shipments_url **required**: The batch shipments endpoint
        * href: The URL of the linked resource, if any
        * type `string`: The type of resource, or the type of relationship to the parent resource
      * completed **required** `integer`: The number of labels generated in the batch
      * count **required** `integer`: The total of errors, warnings, and completed properties
      * created_at **required**: The date and time the batch was created in ShipEngine
      * errors **required** `integer`: The number of errors that occurred while generating the batch
      * external_batch_id **required** `string`: A string that uniquely identifies the external batch
      * form_download **required**: The form download for any customs that are needed
        * href: The URL of the linked resource, if any
        * type `string`: The type of resource, or the type of relationship to the parent resource
      * forms **required** `integer`: The number of forms for customs that are available for download
      * label_download **required**: The label download for the batch
        * href: The URL of the linked resource, if any
        * pdf: The URL for the pdf generated label
        * png: The URL for the png generated label
        * zpl: The URL for the zpl generated label
      * label_format **required** `string`
      * label_layout **required** `string`: label layout
      * processed_at **required**: The date and time the batch was processed in ShipEngine
      * status **required**
      * warnings **required** `integer`: The number of warnings that occurred while generating the batch
  * links **required**
    * first **required**: The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * last **required**: The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * next **required**: The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * prev **required**: The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
  * page **required** `integer`: The page that is currently being read
  * pages **required** `integer`: The total number of batch pages the API call returned
  * total **required** `integer`: The total number of batches the API call returned

### list_carrier_package_types_response_body
* list_carrier_package_types_response_body `object`: A list carrier package types response body
  * packages `array`: An array of custom package types
    * items: Custom Package Type items
      * description `string`: Provides a helpful description for the custom package.
      * dimensions: The custom dimensions for the package.
        * height **required** `number`: The length of the package, in the specified unit
        * length **required** `number`: The length of the package, in the specified unit
        * unit **required** `string`
        * width **required** `number`: The width of the package, in the specified unit
      * name **required** `string`
      * package_code **required**
      * package_id: A string that uniquely identifies the package.

### list_carrier_services_response_body
* list_carrier_services_response_body `object`: A carrier list services response body
  * services `array`: An array of services associated with the carrier
    * items: A carrier service
      * carrier_code
      * carrier_id: A string that uniquely identifies the carrier
      * domestic `boolean`: Supports domestic shipping
      * international `boolean`: Supports international shipping.
      * is_multi_package_supported `boolean`: Carrier supports multiple packages per shipment
      * name `string`: User friendly service name
      * service_code `string`: service code

### list_carriers_response_body
* list_carriers_response_body `object`: A carrier list response body
  * carriers **required** `array`: The carrier response body
    * items
      * account_number `string`: The account number that the carrier is connected to.
      * balance `number`: Current available balance
      * carrier_code: A string that uniquely identifies the carrier.
      * carrier_id: A string that uniquely identifies the carrier.
      * friendly_name `string`: Screen readable name
      * has_multi_package_supporting_services `boolean`: Carrier supports multiple packages per shipment
      * nickname `string`: Nickname given to the account when initially setting up the carrier.
      * options `array`: A list of options that are available to that carrier
        * items
          * default_value `string`: Default value of option
          * description `string`: Description of option
          * name `string`: Name of advanced option
      * packages `array`: A list of package types that are supported by the carrier
        * items
          * description `string`: Provides a helpful description for the custom package.
          * dimensions: The custom dimensions for the package.
          * name **required** `string`
          * package_code **required**
          * package_id: A string that uniquely identifies the package.
      * primary `boolean`: Is this the primary carrier that is used by default when no carrier is specified in label/shipment creation
      * requires_funded_amount `boolean`: Indicates whether the carrier requires funding to use its services
      * services `array`: A list of services that are offered by the carrier
        * items
          * carrier_code
          * carrier_id: A string that uniquely identifies the carrier
          * domestic `boolean`: Supports domestic shipping
          * international `boolean`: Supports international shipping.
          * is_multi_package_supported `boolean`: Carrier supports multiple packages per shipment
          * name `string`: User friendly service name
          * service_code `string`: service code
      * supports_label_messages `boolean`: The carrier supports adding custom label messages to an order.

### list_labels_response_body
* list_labels_response_body `object`: A list label response body
  * labels **required** `array`: The labels that matched the query criteria.  If no matching labels were found, then this array is empty; otherwise, it contains one page of results.  The last page of results may have fewer labels than the `page_size`.
    * items `object`: A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
      * batch_id: If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.
      * carrier_code: The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.
      * carrier_id: The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label
      * charge_event: The label charge event.
      * created_at: The date and time that the label was created in ShipEngine.
      * form_download: The link to downlaod the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.
        * href: The URL of the linked resource, if any
        * type `string`: The type of resource, or the type of relationship to the parent resource
      * insurance_claim: The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.
        * href: The URL of the linked resource, if any
        * type `string`: The type of resource, or the type of relationship to the parent resource
      * insurance_cost: The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * is_international `boolean`: Indicates whether this is an international shipment.  That is, the originating country and destination country are different.
      * is_return_label `boolean`: Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.
      * label_download
        * href: The URL of the linked resource, if any
        * pdf: The URL for the pdf generated label
        * png: The URL for the png generated label
        * zpl: The URL for the zpl generated label
      * label_download_type `string`
      * label_format `string`: The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
      * label_id: A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.
      * label_image_id: The label image resource that was used to create a custom label image.
      * label_layout `string`: The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
      * outbound_label_id: The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is
      * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
      * packages `array`: The label's package(s).
        * items [package](#package)
      * rma_number `string`: An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.
      * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
      * ship_date: The date that the package was (or will be) shippped. ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
      * shipment: The shipment information used to generate the label
        * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
          * items
        * advanced_options: Advanced shipment options.  These are entirely optional.
          * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
          * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
          * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
          * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
          * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
          * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
          * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
          * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
          * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
          * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
          * dry_ice `boolean`: Indicates if the shipment contain dry ice
          * dry_ice_weight: The weight of the dry ice in the shipment
          * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
          * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
          * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
          * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
        * carrier_id: The carrier account that is billed for the shipping charges
        * confirmation `string`: The type of delivery confirmation that is required for this shipment.
        * created_at: The date and time that the shipment was created in ShipEngine.
        * customs: Customs information.  This is usually only needed for international shipments.
          * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
          * customs_items `array`: Customs declarations for each item in the shipment.
          * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
        * external_order_id `string`: ID that the Order Source assigned
        * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
        * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
        * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
          * items
        * modified_at: The date and time that the shipment was created or last modified.
        * order_source_code
        * packages `array`: The packages in the shipment.
          * items
        * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
          * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
          * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
          * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
          * address_residential_indicator `string`: Indicates whether this is a residential address.
          * city_locality `string`: The name of the city or locality
          * company_name `string`: If this is a business address, then the company name should be specified here.
          * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
          * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
          * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
          * postal_code
          * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
        * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
        * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
        * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
          * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
          * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
          * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
          * address_residential_indicator `string`: Indicates whether this is a residential address.
          * city_locality `string`: The name of the city or locality
          * company_name `string`: If this is a business address, then the company name should be specified here.
          * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
          * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
          * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
          * postal_code
          * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
        * ship_to: The recipient's mailing address
          * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
          * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
          * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
          * address_residential_indicator `string`: Indicates whether this is a residential address.
          * city_locality `string`: The name of the city or locality
          * company_name `string`: If this is a business address, then the company name should be specified here.
          * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
          * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
          * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
          * postal_code
          * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
        * shipment_id: A string that uniquely identifies the shipment
        * shipment_status `string`: The current status of the shipment
        * total_weight: The combined weight of all packages in the shipment
          * unit **required**
          * value **required** `number`: The weight, in the specified unit
        * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
      * shipment_cost: The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * shipment_id: The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)
      * status
      * test_label `boolean`: Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
      * trackable `boolean`: Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.
      * tracking_number `string`: The tracking number for the package. Tracking number formats vary across carriers.
      * tracking_status: The current status of the package, such as `in_transit` or `delivered`
      * validate_address `string`
      * voided `boolean`: Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)
      * voided_at: The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided
  * links **required**
    * first **required**: The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * last **required**: The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * next **required**: The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * prev **required**: The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
  * page **required** `integer`: The current page number of results.  For example, if there are 80 results, and the page size is 25, then `page` could be 1, 2, 3, or 4.  The first three pages would contain 25 items each, and the fourth page would contain the five remaining items.
  * pages **required** `integer`: The total number of pages of results.  For example, if there are 80 results, and the page size is 25, then `pages` would be 4.  The first three pages would contain 25 items each, and the fourth page would contain the five remaining items.  If there are no results, then `pages` will be zero.
  * total **required** `integer`: The total number of items across all pages of results

### list_manifests_response_body
* list_manifests_response_body `object`: A list manifests response body
  * links **required**: Helpful links to other pages of results
    * first **required**: The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * last **required**: The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * next **required**: The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * prev **required**: The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
  * manifests **required** `array`: The list of available manifests
    * items: A single manifest
      * carrier_id: A string that uniquely identifies the carrier
      * created_at `string`: The date-time that the manifest was created
      * form_id: A string that uniquely identifies the form
      * manifest_download
        * href: The URL of the linked resource, if any
      * manifest_id: A string that uniquely identifies the manifest
      * ship_date `string`: The date-time that the manifests shipments will be picked up
      * shipments `integer`: The number of shipments that are included in this manifest
      * submission_id `string`: A string that uniquely identifies the submission
      * warehouse_id: A string that uniquely identifies the warehouse
  * page **required** `integer`: Current page of the list manifests results
  * pages **required** `integer`: Total number of pages for list manifests results
  * total **required** `integer`: The total number of manifests returned

### list_package_types_response_body
* list_package_types_response_body `object`: A list package types response body
  * packages `array`: An array of custom package types
    * items: Custom Package Types items
      * description `string`: Provides a helpful description for the custom package.
      * dimensions: The custom dimensions for the package.
        * height **required** `number`: The length of the package, in the specified unit
        * length **required** `number`: The length of the package, in the specified unit
        * unit **required** `string`
        * width **required** `number`: The width of the package, in the specified unit
      * name **required** `string`
      * package_code **required**
      * package_id: A string that uniquely identifies the package.

### list_shipment_errors_response_body
* list_shipment_errors_response_body `object`: A shipment errors response body
  * errors **required** `array`: The errors associated with the shipment.
    * items [shipment_response_error](#shipment_response_error)
  * links **required**
    * first **required**: The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * last **required**: The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * next **required**: The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * prev **required**: The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource

### list_shipment_rates_response_body
* list_shipment_rates_response_body `object`: A list shipment rates response body
  * created_at `string`: When the rate was created
  * errors `array`
    * items
      * error_code **required**
      * error_source **required**
      * error_type **required**
      * message **required** `string`: An error message associated with the failed API call
  * invalid_rates `array`: An array of invalid shipment rates
    * items: Invalid Shipment Rate
      * carrier_code **required** `string`: carrier code
      * carrier_delivery_days `string`: The carrier delivery days
      * carrier_friendly_name **required** `string`: carrier friendly name
      * carrier_id **required**: A string that uniquely identifies the carrier
      * carrier_nickname **required** `string`: carrier nickname
      * confirmation_amount **required**: The confirmation amount
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * delivery_days `integer`: The number of days estimated for delivery, this will show the _actual_ deliverty
      * error_messages **required** `array`: The error messages
        * items `string`: error message
      * estimated_delivery_date
      * guaranteed_service **required** `boolean`: Indicates if the rate is guaranteed.
      * insurance_amount **required**: The insurance amount
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * negotiated_rate **required** `boolean`: Indicates if the rates been negotiated
      * other_amount **required**: Any other charges associated with this rate
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * package_type **required** `string`: package type that this rate was estimated for
      * rate_id **required**: A string that uniquely identifies the rate
      * rate_type **required**
      * service_code **required** `string`: service code for the rate
      * service_type **required** `string`: service type
      * ship_date `string`: ship date
      * shipping_amount **required**: The shipping amount
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * tax_amount: Tariff and additional taxes associated with an international shipment.
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * trackable **required** `boolean`: Indicates if rate is trackable
      * validation_status **required**
      * warning_messages **required** `array`: The warning messages
        * items `string`: warning message
      * zone **required** `integer`: Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of
  * rate_request_id: A string that uniquely identifies the rate request
  * rates `array`: An array of shipment rates
    * items: Shipment Rates
      * carrier_code **required** `string`: carrier code
      * carrier_delivery_days `string`: The carrier delivery days
      * carrier_friendly_name **required** `string`: carrier friendly name
      * carrier_id **required**: A string that uniquely identifies the carrier
      * carrier_nickname **required** `string`: carrier nickname
      * confirmation_amount **required**: The confirmation amount
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * delivery_days `integer`: The number of days estimated for delivery, this will show the _actual_ deliverty
      * error_messages **required** `array`: The error messages
        * items `string`: error message
      * estimated_delivery_date
      * guaranteed_service **required** `boolean`: Indicates if the rate is guaranteed.
      * insurance_amount **required**: The insurance amount
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * negotiated_rate **required** `boolean`: Indicates if the rates been negotiated
      * other_amount **required**: Any other charges associated with this rate
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * package_type **required** `string`: package type that this rate was estimated for
      * rate_id **required**: A string that uniquely identifies the rate
      * rate_type **required**
      * service_code **required** `string`: service code for the rate
      * service_type **required** `string`: service type
      * ship_date `string`: ship date
      * shipping_amount **required**: The shipping amount
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * tax_amount: Tariff and additional taxes associated with an international shipment.
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * trackable **required** `boolean`: Indicates if rate is trackable
      * validation_status **required**
      * warning_messages **required** `array`: The warning messages
        * items `string`: warning message
      * zone **required** `integer`: Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of
  * shipment_id: A string that uniquely identifies the shipment
  * status

### list_shipments_response_body
* list_shipments_response_body `object`: A list shipment response body
  * links **required**
    * first **required**: The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * last **required**: The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * next **required**: The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * prev **required**: The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
  * page **required** `integer`
  * pages **required** `integer`
  * shipments **required** `array`: The list of shipments returned by the api call
    * items: A shipment object
      * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
        * items
          * name **required** `string`: The tag name.
      * advanced_options: Advanced shipment options.  These are entirely optional.
        * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
        * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
        * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
        * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
        * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
        * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
        * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
        * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
        * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
        * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
        * dry_ice `boolean`: Indicates if the shipment contain dry ice
        * dry_ice_weight: The weight of the dry ice in the shipment
          * unit **required**
          * value **required** `number`: The weight, in the specified unit
        * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
        * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
        * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
        * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
      * carrier_id: The carrier account that is billed for the shipping charges
      * confirmation `string`: The type of delivery confirmation that is required for this shipment.
      * created_at: The date and time that the shipment was created in ShipEngine.
      * customs: Customs information.  This is usually only needed for international shipments.
        * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
        * customs_items `array`: Customs declarations for each item in the shipment.
          * items [customs_item](#customs_item)
        * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
      * external_order_id `string`: ID that the Order Source assigned
      * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
      * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
      * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
        * items
          * asin `string`: Amazon Standard Identification Number
          * external_order_id `string`: external order id
          * external_order_item_id `string`: external order item id
          * name `string`: item name
          * order_source_code
          * quantity `integer`: The quantity of this item included in the shipment
          * sales_order_id `string`: sales order id
          * sales_order_item_id `string`: sales order item id
          * sku `string`: Item Stock Keeping Unit
      * modified_at: The date and time that the shipment was created or last modified.
      * order_source_code
      * packages `array`: The packages in the shipment.
        * items
          * dimensions: The package dimensions
          * external_package_id `string`: An external package id.
          * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
          * label_messages
          * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
          * tracking_number: The tracking number for the package.  The format depends on the carrier.
          * weight **required**: The package weight
      * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
        * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
        * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
        * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
        * address_residential_indicator `string`: Indicates whether this is a residential address.
        * city_locality `string`: The name of the city or locality
        * company_name `string`: If this is a business address, then the company name should be specified here.
        * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
        * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
        * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
        * postal_code
        * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
      * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
      * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
      * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
        * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
        * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
        * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
        * address_residential_indicator `string`: Indicates whether this is a residential address.
        * city_locality `string`: The name of the city or locality
        * company_name `string`: If this is a business address, then the company name should be specified here.
        * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
        * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
        * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
        * postal_code
        * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
      * ship_to: The recipient's mailing address
        * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
        * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
        * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
        * address_residential_indicator `string`: Indicates whether this is a residential address.
        * city_locality `string`: The name of the city or locality
        * company_name `string`: If this is a business address, then the company name should be specified here.
        * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
        * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
        * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
        * postal_code
        * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
      * shipment_id: A string that uniquely identifies the shipment
      * shipment_status `string`: The current status of the shipment
      * total_weight: The combined weight of all packages in the shipment
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
      * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
  * total **required** `integer`: Total number of shipments returned by the api call

### list_tags_response_body
* list_tags_response_body `object`: Response body from a successful GET /tags API call
  * tags `array`: The array of tags returned by the API call
    * items
      * name **required** `string`: The tag name.

### list_warehouses_response_body
* list_warehouses_response_body `object`: A warehouse list response body
  * warehouses **required** `array`: The array of warehouses returned by the API call
    * items
      * created_at `string`: Timestamp that indicates when the warehouse was created
      * name `string`: Name of the warehouse
      * origin_address: The origin address of the warehouse
        * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
        * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
        * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
        * address_residential_indicator `string`: Indicates whether this is a residential address.
        * city_locality `string`: The name of the city or locality
        * company_name `string`: If this is a business address, then the company name should be specified here.
        * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
        * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
        * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
        * postal_code
        * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
      * return_address: The return address associated with the warehouse
        * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
        * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
        * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
        * address_residential_indicator `string`: Indicates whether this is a residential address.
        * city_locality `string`: The name of the city or locality
        * company_name `string`: If this is a business address, then the company name should be specified here.
        * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
        * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
        * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
        * postal_code
        * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
      * warehouse_id: A string that uniquely identifies the warehouse

### list_webhooks_response_body
* list_webhooks_response_body `array`: A webhook list response body
  * items: The webhook list response body
    * event
    * url: The url that the webhook sends the request to
    * webhook_id: A string that uniquely identifies the webhook

### manifest
* manifest `object`: Used for combining packages into one scannable form that a carrier can use when picking up a large
  * carrier_id: A string that uniquely identifies the carrier
  * created_at `string`: The date-time that the manifest was created
  * form_id: A string that uniquely identifies the form
  * manifest_download
    * href: The URL of the linked resource, if any
  * manifest_id: A string that uniquely identifies the manifest
  * ship_date `string`: The date-time that the manifests shipments will be picked up
  * shipments `integer`: The number of shipments that are included in this manifest
  * submission_id `string`: A string that uniquely identifies the submission
  * warehouse_id: A string that uniquely identifies the warehouse

### manifest_download
* manifest_download `object`: Object containing the href link to download the manifest file
  * href: The URL of the linked resource, if any

### manifests
* manifests `object`: An array of manifest resources
  * manifests `array`
    * items [manifest](#manifest)

### modify_batch
* modify_batch `object`: A modify batch object
  * rate_ids `array`: Array of Rate IDs to be modifed on the batch
    * items: The Rate ID to be modified on the batch
  * shipment_ids `array`: The Shipment Ids to be modified on the batch
    * items: The Shipment ID to be modified on the batch

### monetary_value
* monetary_value `object`: A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
  * amount **required** `number`: The monetary amount, in the specified currency.
  * currency **required**

### non_delivery
* non_delivery `string` (values: return_to_sender, treat_as_abandoned): The possible non delivery values

### normalized_entity
* normalized_entity `object`: The normalized value of the entity.

### optional_link
* optional_link `object`: A link to a related resource, or an empty object if there is no resource to link to
  * href: The URL of the linked resource, if any
  * type `string`: The type of resource, or the type of relationship to the parent resource

### order_source_name
* order_source_name `string` (values: amazon_ca, amazon_us, brightpearl, channel_advisor, cratejoy, ebay, etsy, jane, groupon_goods, magento, paypal, seller_active, shopify, stitch_labs, squarespace, three_dcart, tophatter, walmart, woo_commerce, volusion): The order sources that are supported by ShipEngine

### package
* package `object`: A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
  * dimensions: The package dimensions
    * height **required** `number`: The length of the package, in the specified unit
    * length **required** `number`: The length of the package, in the specified unit
    * unit **required** `string`
    * width **required** `number`: The width of the package, in the specified unit
  * external_package_id `string`: An external package id.
  * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * label_messages
    * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
    * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
    * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
  * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
  * tracking_number: The tracking number for the package.  The format depends on the carrier.
  * weight **required**: The package weight
    * unit **required**
    * value **required** `number`: The weight, in the specified unit

### package_code
* package_code `string`: A [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc. Use the code `package` for custom or unknown package types.

### package_contents
* package_contents `string` (values: merchandise, documents, gift, returned_goods, sample): The possible package contents values

### package_type
* package_type `object`: A package type that a carrier supports for shipment.
  * description `string`: Provides a helpful description for the custom package.
  * dimensions: The custom dimensions for the package.
    * height **required** `number`: The length of the package, in the specified unit
    * length **required** `number`: The length of the package, in the specified unit
    * unit **required** `string`
    * width **required** `number`: The width of the package, in the specified unit
  * name **required** `string`
  * package_code **required**
  * package_id: A string that uniquely identifies the package.

### paged_list_response_body
* paged_list_response_body `object`: Many ShipEngine endpoints return a paged list of items.  In addition to the returned items, these responses also include information about the total number of items, the number of pages of results, and URLs of other pages of results.
  * links **required**
    * first **required**: The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * last **required**: The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * next **required**: The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
    * prev **required**: The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater.
      * href: The URL of the linked resource, if any
      * type `string`: The type of resource, or the type of relationship to the parent resource
  * page **required** `integer`: The current page number of results.  For example, if there are 80 results, and the page size is 25, then `page` could be 1, 2, 3, or 4.  The first three pages would contain 25 items each, and the fourth page would contain the five remaining items.
  * pages **required** `integer`: The total number of pages of results.  For example, if there are 80 results, and the page size is 25, then `pages` would be 4.  The first three pages would contain 25 items each, and the fourth page would contain the five remaining items.  If there are no results, then `pages` will be zero.
  * total **required** `integer`: The total number of items across all pages of results

### pagination_link
* pagination_link `object`: Helpful links to other pages of results
  * first **required**: The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * last **required**: The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * next **required**: The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource
  * prev **required**: The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater.
    * href: The URL of the linked resource, if any
    * type `string`: The type of resource, or the type of relationship to the parent resource

### parse_address_request_body
* parse_address_request_body `object`: The only required field is `text`, which is the text to be parsed. You can optionally also provide an `address` containing already-known values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines.
  * address: You can optionally provide any already-known address values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * text **required** `string`: The unstructured text that contains address-related entities

### parse_address_response_body
* parse_address_response_body `object`: The parsed address, as well as a confidence score and a list of all the entities that were recognized in the text.
  * address **required**: The parsed address.  This address may not be complete, depending on how much information was included in the text and how confident the API is about each recognized entity.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * entities **required** `array`: All of the entities that were recognized in the text. An "entity" is a single piece of data, such as a city, a postal code, or an address line.  Each entity includes the original text and the parsed value.
    * items [recognized_entity](#recognized_entity)
  * score **required** `number`: A confidence score between zero and one that indicates how certain the API is that it understood the text.

### parse_shipment_request_body
* parse_shipment_request_body `object`: The only required field is `text`, which is the text to be parsed. You can optionally also provide a `shipment` containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use.
  * shipment: You can optionally provide a `shipment` object containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use.
    * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
      * items
        * name **required** `string`: The tag name.
    * advanced_options: Advanced shipment options.  These are entirely optional.
      * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
      * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
      * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
      * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
      * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
      * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
      * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
      * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
      * dry_ice `boolean`: Indicates if the shipment contain dry ice
      * dry_ice_weight: The weight of the dry ice in the shipment
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
      * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
      * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
      * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
      * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
    * carrier_id: The carrier account that is billed for the shipping charges
    * confirmation `string`: The type of delivery confirmation that is required for this shipment.
    * created_at: The date and time that the shipment was created in ShipEngine.
    * customs: Customs information.  This is usually only needed for international shipments.
      * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
      * customs_items `array`: Customs declarations for each item in the shipment.
        * items [customs_item](#customs_item)
      * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
    * external_order_id `string`: ID that the Order Source assigned
    * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
    * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
    * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
      * items
        * asin `string`: Amazon Standard Identification Number
        * external_order_id `string`: external order id
        * external_order_item_id `string`: external order item id
        * name `string`: item name
        * order_source_code
        * quantity `integer`: The quantity of this item included in the shipment
        * sales_order_id `string`: sales order id
        * sales_order_item_id `string`: sales order item id
        * sku `string`: Item Stock Keeping Unit
    * modified_at: The date and time that the shipment was created or last modified.
    * order_source_code
    * packages `array`: The packages in the shipment.
      * items
        * dimensions: The package dimensions
          * height **required** `number`: The length of the package, in the specified unit
          * length **required** `number`: The length of the package, in the specified unit
          * unit **required** `string`
          * width **required** `number`: The width of the package, in the specified unit
        * external_package_id `string`: An external package id.
        * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * label_messages
          * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
          * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
          * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
        * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
        * tracking_number: The tracking number for the package.  The format depends on the carrier.
        * weight **required**: The package weight
          * unit **required**
          * value **required** `number`: The weight, in the specified unit
    * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
    * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
    * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * ship_to: The recipient's mailing address
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * shipment_id: A string that uniquely identifies the shipment
    * shipment_status `string`: The current status of the shipment
    * total_weight: The combined weight of all packages in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
  * text **required** `string`: The unstructured text that contains shipping-related entities

### parse_shipment_response_body
* parse_shipment_response_body `object`: The parsed shipment, as well as a confidence score and a list of all the shipping entities that were recognized in the text.
  * entities **required** `array`: All of the entities that were recognized in the text. An "entity" is a single piece of data, such as a city, a postal code, a carrier name, or a package weight.  Each entity includes the original text and the parsed value.
    * items [recognized_entity](#recognized_entity)
  * score **required** `number`: A confidence score between zero and one that indicates how certain the API is that it understood the text.
  * shipment **required**: The parsed shipment.  This shipment may not be complete, depending on how much information was included in the text and how confident the API is about each recognized entity.
    * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
      * items
        * name **required** `string`: The tag name.
    * advanced_options: Advanced shipment options.  These are entirely optional.
      * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
      * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
      * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
      * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
      * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
      * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
      * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
      * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
      * dry_ice `boolean`: Indicates if the shipment contain dry ice
      * dry_ice_weight: The weight of the dry ice in the shipment
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
      * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
      * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
      * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
      * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
    * carrier_id: The carrier account that is billed for the shipping charges
    * confirmation `string`: The type of delivery confirmation that is required for this shipment.
    * created_at: The date and time that the shipment was created in ShipEngine.
    * customs: Customs information.  This is usually only needed for international shipments.
      * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
      * customs_items `array`: Customs declarations for each item in the shipment.
        * items [customs_item](#customs_item)
      * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
    * external_order_id `string`: ID that the Order Source assigned
    * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
    * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
    * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
      * items
        * asin `string`: Amazon Standard Identification Number
        * external_order_id `string`: external order id
        * external_order_item_id `string`: external order item id
        * name `string`: item name
        * order_source_code
        * quantity `integer`: The quantity of this item included in the shipment
        * sales_order_id `string`: sales order id
        * sales_order_item_id `string`: sales order item id
        * sku `string`: Item Stock Keeping Unit
    * modified_at: The date and time that the shipment was created or last modified.
    * order_source_code
    * packages `array`: The packages in the shipment.
      * items
        * dimensions: The package dimensions
          * height **required** `number`: The length of the package, in the specified unit
          * length **required** `number`: The length of the package, in the specified unit
          * unit **required** `string`
          * width **required** `number`: The width of the package, in the specified unit
        * external_package_id `string`: An external package id.
        * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * label_messages
          * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
          * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
          * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
        * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
        * tracking_number: The tracking number for the package.  The format depends on the carrier.
        * weight **required**: The package weight
          * unit **required**
          * value **required** `number`: The weight, in the specified unit
    * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
    * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
    * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * ship_to: The recipient's mailing address
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * shipment_id: A string that uniquely identifies the shipment
    * shipment_status `string`: The current status of the shipment
    * total_weight: The combined weight of all packages in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.

### partial_address
* partial_address `object`: A complete or partial mailing address.
  * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
  * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
  * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
  * address_residential_indicator `string`: Indicates whether this is a residential address.
  * city_locality `string`: The name of the city or locality
  * company_name `string`: If this is a business address, then the company name should be specified here.
  * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
  * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
  * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
  * postal_code
  * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.

### partial_shipment
* partial_shipment `object`: The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
  * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
    * items
      * name **required** `string`: The tag name.
  * advanced_options: Advanced shipment options.  These are entirely optional.
    * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
    * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
    * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
    * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
    * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
    * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
    * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
    * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
    * dry_ice `boolean`: Indicates if the shipment contain dry ice
    * dry_ice_weight: The weight of the dry ice in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
    * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
    * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
    * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
  * carrier_id: The carrier account that is billed for the shipping charges
  * confirmation `string`: The type of delivery confirmation that is required for this shipment.
  * created_at: The date and time that the shipment was created in ShipEngine.
  * customs: Customs information.  This is usually only needed for international shipments.
    * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
    * customs_items `array`: Customs declarations for each item in the shipment.
      * items [customs_item](#customs_item)
    * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
  * external_order_id `string`: ID that the Order Source assigned
  * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
  * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
  * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
    * items
      * asin `string`: Amazon Standard Identification Number
      * external_order_id `string`: external order id
      * external_order_item_id `string`: external order item id
      * name `string`: item name
      * order_source_code
      * quantity `integer`: The quantity of this item included in the shipment
      * sales_order_id `string`: sales order id
      * sales_order_item_id `string`: sales order item id
      * sku `string`: Item Stock Keeping Unit
  * modified_at: The date and time that the shipment was created or last modified.
  * order_source_code
  * packages `array`: The packages in the shipment.
    * items
      * dimensions: The package dimensions
        * height **required** `number`: The length of the package, in the specified unit
        * length **required** `number`: The length of the package, in the specified unit
        * unit **required** `string`
        * width **required** `number`: The width of the package, in the specified unit
      * external_package_id `string`: An external package id.
      * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * label_messages
        * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
        * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
        * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
      * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
      * tracking_number: The tracking number for the package.  The format depends on the carrier.
      * weight **required**: The package weight
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
  * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
  * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
  * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * ship_to: The recipient's mailing address
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * shipment_id: A string that uniquely identifies the shipment
  * shipment_status `string`: The current status of the shipment
  * total_weight: The combined weight of all packages in the shipment
    * unit **required**
    * value **required** `number`: The weight, in the specified unit
  * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.

### payment_amount
* payment_amount `object`
  * amount `number`
  * currency

### postal_code
* postal_code `string`: postal code

### process_batch_request_body
* process_batch_request_body `object`: A process batch request body
  * label_format `string`
  * label_layout `string`
  * ship_date: The Ship date the batch is being processed for

### purchase_label_without_shipment
* purchase_label_without_shipment `object`: A purchase label without shipment resource
  * label_download_type
  * label_format `string`
  * label_layout `string`
  * validate_address

### rate
* rate `object`: A rate
  * carrier_code **required** `string`: carrier code
  * carrier_delivery_days `string`: The carrier delivery days
  * carrier_friendly_name **required** `string`: carrier friendly name
  * carrier_id **required**: A string that uniquely identifies the carrier
  * carrier_nickname **required** `string`: carrier nickname
  * confirmation_amount **required**: The confirmation amount
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * delivery_days `integer`: The number of days estimated for delivery, this will show the _actual_ deliverty
  * error_messages **required** `array`: The error messages
    * items `string`: error message
  * estimated_delivery_date
  * guaranteed_service **required** `boolean`: Indicates if the rate is guaranteed.
  * insurance_amount **required**: The insurance amount
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * negotiated_rate **required** `boolean`: Indicates if the rates been negotiated
  * other_amount **required**: Any other charges associated with this rate
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * package_type **required** `string`: package type that this rate was estimated for
  * rate_id **required**: A string that uniquely identifies the rate
  * rate_type **required**
  * service_code **required** `string`: service code for the rate
  * service_type **required** `string`: service type
  * ship_date `string`: ship date
  * shipping_amount **required**: The shipping amount
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * tax_amount: Tariff and additional taxes associated with an international shipment.
    * amount **required** `number`: The monetary amount, in the specified currency.
    * currency **required**
  * trackable **required** `boolean`: Indicates if rate is trackable
  * validation_status **required**
  * warning_messages **required** `array`: The warning messages
    * items `string`: warning message
  * zone **required** `integer`: Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of

### rate_estimate_by_carrier_id
* rate_estimate_by_carrier_id `object`
  * carrier_id: A string that uniquely identifies the carrier

### rate_estimate_by_carrier_ids
* rate_estimate_by_carrier_ids `object`
  * carrier_ids `array`: Array of Carrier Ids
    * items `string`: carrier id

### rate_estimate_options
* rate_estimate_options `object`
  * address_residential_indicator
  * confirmation
  * dimensions: The dimensions of the package
    * height **required** `number`: The length of the package, in the specified unit
    * length **required** `number`: The length of the package, in the specified unit
    * unit **required** `string`
    * width **required** `number`: The width of the package, in the specified unit
  * from_city_locality `string`: from postal code
  * from_country_code
  * from_postal_code
  * from_state_province `string`: From state province
  * ship_date `string`: ship date
  * to_city_locality `string`: The city locality the package is being shipped to
  * to_country_code
  * to_postal_code
  * to_state_province `string`: To state province
  * weight: The weight of the package
    * unit **required**
    * value **required** `number`: The weight, in the specified unit

### rate_request_body
* rate_request_body `object`: A rate request body
  * calculate_tax_amount `boolean`: Calculate the duties and tariffs for cross border shipments.
  * carrier_ids **required** `array`: Array of carrier ids to get rates for
    * items: carrier ids
  * package_types `array`
    * items `string`
  * preferred_currency
  * service_codes `array`
    * items `string`: Item Service Codes

### rate_request_by_shipment_ids
* rate_request_by_shipment_ids `object`
  * shipment_ids **required** `array`: The array of shipment IDs
    * items: shipment ids

### rate_request_by_shipments
* rate_request_by_shipments `object`
  * shipments **required** `array`: The array of shipments to get bulk rate estimates for
    * items: The shipment to get a bulk rate estimate for
      * validate_address `string`
      * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
        * items
          * name **required** `string`: The tag name.
      * advanced_options: Advanced shipment options.  These are entirely optional.
        * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
        * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
        * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
        * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
        * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
        * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
        * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
        * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
        * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
        * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
        * dry_ice `boolean`: Indicates if the shipment contain dry ice
        * dry_ice_weight: The weight of the dry ice in the shipment
          * unit **required**
          * value **required** `number`: The weight, in the specified unit
        * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
        * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
        * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
        * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
      * carrier_id: The carrier account that is billed for the shipping charges
      * confirmation `string`: The type of delivery confirmation that is required for this shipment.
      * created_at: The date and time that the shipment was created in ShipEngine.
      * customs: Customs information.  This is usually only needed for international shipments.
        * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
        * customs_items `array`: Customs declarations for each item in the shipment.
          * items [customs_item](#customs_item)
        * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
      * external_order_id `string`: ID that the Order Source assigned
      * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
      * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
      * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
        * items
          * asin `string`: Amazon Standard Identification Number
          * external_order_id `string`: external order id
          * external_order_item_id `string`: external order item id
          * name `string`: item name
          * order_source_code
          * quantity `integer`: The quantity of this item included in the shipment
          * sales_order_id `string`: sales order id
          * sales_order_item_id `string`: sales order item id
          * sku `string`: Item Stock Keeping Unit
      * modified_at: The date and time that the shipment was created or last modified.
      * order_source_code
      * packages `array`: The packages in the shipment.
        * items
          * dimensions: The package dimensions
          * external_package_id `string`: An external package id.
          * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
          * label_messages
          * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
          * tracking_number: The tracking number for the package.  The format depends on the carrier.
          * weight **required**: The package weight
      * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
        * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
        * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
        * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
        * address_residential_indicator `string`: Indicates whether this is a residential address.
        * city_locality `string`: The name of the city or locality
        * company_name `string`: If this is a business address, then the company name should be specified here.
        * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
        * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
        * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
        * postal_code
        * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
      * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
      * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
      * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
        * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
        * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
        * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
        * address_residential_indicator `string`: Indicates whether this is a residential address.
        * city_locality `string`: The name of the city or locality
        * company_name `string`: If this is a business address, then the company name should be specified here.
        * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
        * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
        * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
        * postal_code
        * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
      * ship_to: The recipient's mailing address
        * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
        * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
        * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
        * address_residential_indicator `string`: Indicates whether this is a residential address.
        * city_locality `string`: The name of the city or locality
        * company_name `string`: If this is a business address, then the company name should be specified here.
        * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
        * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
        * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
        * postal_code
        * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
      * shipment_id: A string that uniquely identifies the shipment
      * shipment_status `string`: The current status of the shipment
      * total_weight: The combined weight of all packages in the shipment
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
      * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.

### rate_request_options
* rate_request_options `object`
  * rate_options: The rate options
    * calculate_tax_amount `boolean`: Calculate the duties and tariffs for cross border shipments.
    * carrier_ids **required** `array`: Array of carrier ids to get rates for
      * items: carrier ids
    * package_types `array`
      * items `string`
    * preferred_currency
    * service_codes `array`
      * items `string`: Item Service Codes

### rate_request_rate_options
* rate_request_rate_options `object`
  * rate_options: The rate options
    * calculate_tax_amount `boolean`: Calculate the duties and tariffs for cross border shipments.
    * carrier_ids **required** `array`: Array of carrier ids to get rates for
      * items: carrier ids
    * package_types `array`
      * items `string`
    * preferred_currency
    * service_codes `array`
      * items `string`: Item Service Codes

### rate_response
* rate_response `object`
  * rate_response: The rates response
    * created_at `string`: When the rate was created
    * errors `array`
      * items
        * error_code **required**
        * error_source **required**
        * error_type **required**
        * message **required** `string`: An error message associated with the failed API call
    * invalid_rates `array`: An array of invalid shipment rates
      * items: Invalid Shipment Rate
        * carrier_code **required** `string`: carrier code
        * carrier_delivery_days `string`: The carrier delivery days
        * carrier_friendly_name **required** `string`: carrier friendly name
        * carrier_id **required**: A string that uniquely identifies the carrier
        * carrier_nickname **required** `string`: carrier nickname
        * confirmation_amount **required**: The confirmation amount
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * delivery_days `integer`: The number of days estimated for delivery, this will show the _actual_ deliverty
        * error_messages **required** `array`: The error messages
          * items `string`: error message
        * estimated_delivery_date
        * guaranteed_service **required** `boolean`: Indicates if the rate is guaranteed.
        * insurance_amount **required**: The insurance amount
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * negotiated_rate **required** `boolean`: Indicates if the rates been negotiated
        * other_amount **required**: Any other charges associated with this rate
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * package_type **required** `string`: package type that this rate was estimated for
        * rate_id **required**: A string that uniquely identifies the rate
        * rate_type **required**
        * service_code **required** `string`: service code for the rate
        * service_type **required** `string`: service type
        * ship_date `string`: ship date
        * shipping_amount **required**: The shipping amount
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * tax_amount: Tariff and additional taxes associated with an international shipment.
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * trackable **required** `boolean`: Indicates if rate is trackable
        * validation_status **required**
        * warning_messages **required** `array`: The warning messages
          * items `string`: warning message
        * zone **required** `integer`: Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of
    * rate_request_id: A string that uniquely identifies the rate request
    * rates `array`: An array of shipment rates
      * items: Shipment Rates
        * carrier_code **required** `string`: carrier code
        * carrier_delivery_days `string`: The carrier delivery days
        * carrier_friendly_name **required** `string`: carrier friendly name
        * carrier_id **required**: A string that uniquely identifies the carrier
        * carrier_nickname **required** `string`: carrier nickname
        * confirmation_amount **required**: The confirmation amount
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * delivery_days `integer`: The number of days estimated for delivery, this will show the _actual_ deliverty
        * error_messages **required** `array`: The error messages
          * items `string`: error message
        * estimated_delivery_date
        * guaranteed_service **required** `boolean`: Indicates if the rate is guaranteed.
        * insurance_amount **required**: The insurance amount
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * negotiated_rate **required** `boolean`: Indicates if the rates been negotiated
        * other_amount **required**: Any other charges associated with this rate
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * package_type **required** `string`: package type that this rate was estimated for
        * rate_id **required**: A string that uniquely identifies the rate
        * rate_type **required**
        * service_code **required** `string`: service code for the rate
        * service_type **required** `string`: service type
        * ship_date `string`: ship date
        * shipping_amount **required**: The shipping amount
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * tax_amount: Tariff and additional taxes associated with an international shipment.
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * trackable **required** `boolean`: Indicates if rate is trackable
        * validation_status **required**
        * warning_messages **required** `array`: The warning messages
          * items `string`: warning message
        * zone **required** `integer`: Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of
    * shipment_id: A string that uniquely identifies the shipment
    * status

### rate_response_status
* rate_response_status `string` (values: working, completed, partial, error): The possible rate response status values

### rate_type
* rate_type `string` (values: check, shipment): The possible rate type values

### rates_information
* rates_information `object`: A rates information resource
  * created_at `string`: When the rate was created
  * errors `array`
    * items
      * error_code **required**
      * error_source **required**
      * error_type **required**
      * message **required** `string`: An error message associated with the failed API call
  * invalid_rates `array`: An array of invalid shipment rates
    * items: Invalid Shipment Rate
      * carrier_code **required** `string`: carrier code
      * carrier_delivery_days `string`: The carrier delivery days
      * carrier_friendly_name **required** `string`: carrier friendly name
      * carrier_id **required**: A string that uniquely identifies the carrier
      * carrier_nickname **required** `string`: carrier nickname
      * confirmation_amount **required**: The confirmation amount
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * delivery_days `integer`: The number of days estimated for delivery, this will show the _actual_ deliverty
      * error_messages **required** `array`: The error messages
        * items `string`: error message
      * estimated_delivery_date
      * guaranteed_service **required** `boolean`: Indicates if the rate is guaranteed.
      * insurance_amount **required**: The insurance amount
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * negotiated_rate **required** `boolean`: Indicates if the rates been negotiated
      * other_amount **required**: Any other charges associated with this rate
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * package_type **required** `string`: package type that this rate was estimated for
      * rate_id **required**: A string that uniquely identifies the rate
      * rate_type **required**
      * service_code **required** `string`: service code for the rate
      * service_type **required** `string`: service type
      * ship_date `string`: ship date
      * shipping_amount **required**: The shipping amount
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * tax_amount: Tariff and additional taxes associated with an international shipment.
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * trackable **required** `boolean`: Indicates if rate is trackable
      * validation_status **required**
      * warning_messages **required** `array`: The warning messages
        * items `string`: warning message
      * zone **required** `integer`: Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of
  * rate_request_id: A string that uniquely identifies the rate request
  * rates `array`: An array of shipment rates
    * items: Shipment Rates
      * carrier_code **required** `string`: carrier code
      * carrier_delivery_days `string`: The carrier delivery days
      * carrier_friendly_name **required** `string`: carrier friendly name
      * carrier_id **required**: A string that uniquely identifies the carrier
      * carrier_nickname **required** `string`: carrier nickname
      * confirmation_amount **required**: The confirmation amount
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * delivery_days `integer`: The number of days estimated for delivery, this will show the _actual_ deliverty
      * error_messages **required** `array`: The error messages
        * items `string`: error message
      * estimated_delivery_date
      * guaranteed_service **required** `boolean`: Indicates if the rate is guaranteed.
      * insurance_amount **required**: The insurance amount
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * negotiated_rate **required** `boolean`: Indicates if the rates been negotiated
      * other_amount **required**: Any other charges associated with this rate
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * package_type **required** `string`: package type that this rate was estimated for
      * rate_id **required**: A string that uniquely identifies the rate
      * rate_type **required**
      * service_code **required** `string`: service code for the rate
      * service_type **required** `string`: service type
      * ship_date `string`: ship date
      * shipping_amount **required**: The shipping amount
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * tax_amount: Tariff and additional taxes associated with an international shipment.
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * trackable **required** `boolean`: Indicates if rate is trackable
      * validation_status **required**
      * warning_messages **required** `array`: The warning messages
        * items `string`: warning message
      * zone **required** `integer`: Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of
  * shipment_id: A string that uniquely identifies the shipment
  * status

### recognized_entity
* recognized_entity `object`: An entity is a single piece of data that was recognized in unstructured text.  For example, a city, a postal code, package dimensions, insured value, etc.  Each entity includes the original text and the parsed value.
  * end_index **required** `integer`: The index of the last character of this entity within the original text
  * result [normalized_entity](#normalized_entity)
  * score **required** `number`: A confidence score between zero and one that indicates how certain the API is that it correctly recognized this entity
  * start_index **required** `integer`: The index of the first character of this entity within the original text
  * text **required** `string`: The substring from the original text that was recognized as this entity
  * type **required** `string`: The Entity type (e.g. "weight", "person", "address_line1", etc.)

### remove_from_batch_request_body
* remove_from_batch_request_body `object`: A modify batch request body
  * rate_ids `array`: Array of Rate IDs to be modifed on the batch
    * items: The Rate ID to be modified on the batch
  * shipment_ids `array`: The Shipment Ids to be modified on the batch
    * items: The Shipment ID to be modified on the batch

### response_message
* response_message `object`: A response message that displays when additional info is needed for an address validation request.
  * code
  * detail_code
  * message `string`: Message explaining the address validation error
  * type

### se_id
* se_id `string`: A string that uniquely identifies a ShipEngine resource, such as a carrier, label, shipment, etc.

### service
* service `object`: A service offered by the carrier
  * carrier_code
  * carrier_id: A string that uniquely identifies the carrier
  * domestic `boolean`: Supports domestic shipping
  * international `boolean`: Supports international shipping.
  * is_multi_package_supported `boolean`: Carrier supports multiple packages per shipment
  * name `string`: User friendly service name
  * service_code `string`: service code

### service_code
* service_code `string`: A [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/), such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.

### shipment
* shipment `object`: The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
  * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
    * items
      * name **required** `string`: The tag name.
  * advanced_options: Advanced shipment options.  These are entirely optional.
    * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
    * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
    * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
    * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
    * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
    * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
    * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
    * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
    * dry_ice `boolean`: Indicates if the shipment contain dry ice
    * dry_ice_weight: The weight of the dry ice in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
    * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
    * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
    * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
  * carrier_id: The carrier account that is billed for the shipping charges
  * confirmation `string`: The type of delivery confirmation that is required for this shipment.
  * created_at: The date and time that the shipment was created in ShipEngine.
  * customs: Customs information.  This is usually only needed for international shipments.
    * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
    * customs_items `array`: Customs declarations for each item in the shipment.
      * items [customs_item](#customs_item)
    * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
  * external_order_id `string`: ID that the Order Source assigned
  * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
  * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
  * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
    * items
      * asin `string`: Amazon Standard Identification Number
      * external_order_id `string`: external order id
      * external_order_item_id `string`: external order item id
      * name `string`: item name
      * order_source_code
      * quantity `integer`: The quantity of this item included in the shipment
      * sales_order_id `string`: sales order id
      * sales_order_item_id `string`: sales order item id
      * sku `string`: Item Stock Keeping Unit
  * modified_at: The date and time that the shipment was created or last modified.
  * order_source_code
  * packages `array`: The packages in the shipment.
    * items
      * dimensions: The package dimensions
        * height **required** `number`: The length of the package, in the specified unit
        * length **required** `number`: The length of the package, in the specified unit
        * unit **required** `string`
        * width **required** `number`: The width of the package, in the specified unit
      * external_package_id `string`: An external package id.
      * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * label_messages
        * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
        * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
        * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
      * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
      * tracking_number: The tracking number for the package.  The format depends on the carrier.
      * weight **required**: The package weight
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
  * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
  * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
  * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * ship_to: The recipient's mailing address
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * shipment_id: A string that uniquely identifies the shipment
  * shipment_status `string`: The current status of the shipment
  * total_weight: The combined weight of all packages in the shipment
    * unit **required**
    * value **required** `number`: The weight, in the specified unit
  * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.

### shipment_id_request
* shipment_id_request `object`
  * shipment_id: A string that uniquely identifies the shipment

### shipment_item
* shipment_item `object`: A shipment item
  * asin `string`: Amazon Standard Identification Number
  * external_order_id `string`: external order id
  * external_order_item_id `string`: external order item id
  * name `string`: item name
  * order_source_code
  * quantity `integer`: The quantity of this item included in the shipment
  * sales_order_id `string`: sales order id
  * sales_order_item_id `string`: sales order item id
  * sku `string`: Item Stock Keeping Unit

### shipment_request
* shipment_request `object`
  * shipment: The shipment object
    * validate_address `string`
    * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
      * items
        * name **required** `string`: The tag name.
    * advanced_options: Advanced shipment options.  These are entirely optional.
      * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
      * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
      * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
      * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
      * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
      * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
      * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
      * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
      * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
      * dry_ice `boolean`: Indicates if the shipment contain dry ice
      * dry_ice_weight: The weight of the dry ice in the shipment
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
      * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
      * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
      * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
      * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
    * carrier_id: The carrier account that is billed for the shipping charges
    * confirmation `string`: The type of delivery confirmation that is required for this shipment.
    * created_at: The date and time that the shipment was created in ShipEngine.
    * customs: Customs information.  This is usually only needed for international shipments.
      * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
      * customs_items `array`: Customs declarations for each item in the shipment.
        * items [customs_item](#customs_item)
      * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
    * external_order_id `string`: ID that the Order Source assigned
    * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
    * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
    * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
      * items
        * asin `string`: Amazon Standard Identification Number
        * external_order_id `string`: external order id
        * external_order_item_id `string`: external order item id
        * name `string`: item name
        * order_source_code
        * quantity `integer`: The quantity of this item included in the shipment
        * sales_order_id `string`: sales order id
        * sales_order_item_id `string`: sales order item id
        * sku `string`: Item Stock Keeping Unit
    * modified_at: The date and time that the shipment was created or last modified.
    * order_source_code
    * packages `array`: The packages in the shipment.
      * items
        * dimensions: The package dimensions
          * height **required** `number`: The length of the package, in the specified unit
          * length **required** `number`: The length of the package, in the specified unit
          * unit **required** `string`
          * width **required** `number`: The width of the package, in the specified unit
        * external_package_id `string`: An external package id.
        * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
          * amount **required** `number`: The monetary amount, in the specified currency.
          * currency **required**
        * label_messages
          * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
          * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
          * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
        * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
        * tracking_number: The tracking number for the package.  The format depends on the carrier.
        * weight **required**: The package weight
          * unit **required**
          * value **required** `number`: The weight, in the specified unit
    * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
    * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
    * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * ship_to: The recipient's mailing address
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * shipment_id: A string that uniquely identifies the shipment
    * shipment_status `string`: The current status of the shipment
    * total_weight: The combined weight of all packages in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.

### shipment_response_error
* shipment_response_error `object`: A shipment response error.
  * error **required** `string`: Shipment error message
  * external_shipment_id: A string that uniquely identifies the external shipment.
  * shipment_id **required**: A string that uniquely identifies the shipment.

### shipment_status
* shipment_status `string` (values: pending, processing, label_purchased, cancelled): The possible shipment status values

### shipments_sort_by
* shipments_sort_by `string` (values: modified_at, created_at): The possible shipments sort by values

### smart_post_hub
* smart_post_hub `string` (values: none, allentown_pa, atlanta_ga, baltimore_md, charlotte_nc, chino_ca, dallas_tx, denver_co, detroit_mi, edison_nj, grove_city_oh, groveport_oh, houston_tx, indianapolis_in, kansas_city_ks, los_angeles_ca, martinsburg_wv, memphis_tn, minneapolis_mn, new_berlin_wi, northborough_ma, orlando_fl, phoneix_az, pittsburgh_pa, reno_nv, sacramento_ca, salt_lake_city_ut, seattle_wa, st_louis_mo, windsor_ct, newark_ny, south_brunswick_nj, scranton_pa, wheeling_il): The possible smart post hub values

### sort_dir
* sort_dir `string` (values: asc, desc): Controls the sort order of queries

### tag
* tag `object`: Tags are arbitrary strings that you can use to categorize shipments. For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.
  * name **required** `string`: The tag name.

### tag_name
* tag_name `string`: Tags are arbitrary strings that you can use to categorize shipments. For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.

### tag_shipment_response_body
* tag_shipment_response_body `object`: A shipment add tag response body
  * shipment_id **required**: A string that uniquely identifies the shipment
  * tag **required**: The tag that is now associated with this shipment
    * name **required** `string`: The tag name.

### track_event
* track_event `object`: A track event
  * carrier_occurred_at: Carrier timestamp for the event, it is assumed to be the local time of where the event occurred.
  * city_locality **required** `string`: City locality
  * company_name `string`: Company Name
  * country_code
  * description `string`: Event description
  * event_code `string`: Event Code
  * latitude `number`: Latitude coordinate of tracking event.
  * longitude `number`: Longitude coordinate of tracking event.
  * occurred_at **required**: Timestamp for carrier event
  * postal_code **required** `string`: Postal code
  * signer `string`: Signer information
  * state_province **required** `string`: State province

### tracking_information
* tracking_information `object`: A tracking information resource
  * actual_delivery_date
  * carrier_status_code `string`: Carrier status code
  * carrier_status_description `string`: carrier status description
  * estimated_delivery_date
  * events `array`: The events that have occured during the lifetime of this tracking number.
    * items [track_event](#track_event)
  * exception_description `string`: Exception description
  * ship_date
  * status_code `string`: Status code
  * status_description `string`: Status description
  * tracking_number

### tracking_number
* tracking_number `string`: A tracking number for a package. The format depends on the carrier.

### tracking_status
* tracking_status `string` (values: unknown, in_transit, error, delivered): The different statuses that can apply to a shipment.

### update_amazon_buy_shipping_request_body
* update_amazon_buy_shipping_request_body `object`: An amazon buy shipping account settings request body
  * email `string`: Email

### update_carrier_settings_request_body


### update_dhl_express_settings_request_body
* update_dhl_express_settings_request_body `object`: An update dhl express settings request body
  * is_primary_account `boolean`: Indicates if this is primary account
  * nickname `string`: Account nickname
  * should_hide_account_number_on_archive_doc `boolean`: Indicates if the account number should be hidden on the archive documentation

### update_fedex_settings_request_body
* update_fedex_settings_request_body `object`: An update Fedex settings request body
  * is_primary_account `boolean`
  * nickname `string`: Account nickname
  * pickup_type
  * smart_post_endorsement
  * smart_post_hub

### update_newgistics_settings_request_body
* update_newgistics_settings_request_body `object`: A newgistics account settings request body
  * include_barcode_with_order_number `boolean`
  * receive_email_on_manifest_processing `boolean`

### update_package_type_request_body
* update_package_type_request_body `object`: An update package type request body
  * description `string`: Provides a helpful description for the custom package.
  * dimensions: The custom dimensions for the package.
    * height **required** `number`: The length of the package, in the specified unit
    * length **required** `number`: The length of the package, in the specified unit
    * unit **required** `string`
    * width **required** `number`: The width of the package, in the specified unit
  * name **required** `string`
  * package_code **required**
  * package_id: A string that uniquely identifies the package.

### update_shipment_fields
* update_shipment_fields `object`
  * validate_address `string`

### update_shipment_request_body
* update_shipment_request_body `object`: An update shipment request body
  * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
    * items
      * name **required** `string`: The tag name.
  * advanced_options: Advanced shipment options.  These are entirely optional.
    * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
    * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
    * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
    * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
    * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
    * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
    * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
    * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
    * dry_ice `boolean`: Indicates if the shipment contain dry ice
    * dry_ice_weight: The weight of the dry ice in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
    * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
    * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
    * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
  * carrier_id: The carrier account that is billed for the shipping charges
  * confirmation `string`: The type of delivery confirmation that is required for this shipment.
  * created_at: The date and time that the shipment was created in ShipEngine.
  * customs: Customs information.  This is usually only needed for international shipments.
    * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
    * customs_items `array`: Customs declarations for each item in the shipment.
      * items [customs_item](#customs_item)
    * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
  * external_order_id `string`: ID that the Order Source assigned
  * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
  * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
  * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
    * items
      * asin `string`: Amazon Standard Identification Number
      * external_order_id `string`: external order id
      * external_order_item_id `string`: external order item id
      * name `string`: item name
      * order_source_code
      * quantity `integer`: The quantity of this item included in the shipment
      * sales_order_id `string`: sales order id
      * sales_order_item_id `string`: sales order item id
      * sku `string`: Item Stock Keeping Unit
  * modified_at: The date and time that the shipment was created or last modified.
  * order_source_code
  * packages `array`: The packages in the shipment.
    * items
      * dimensions: The package dimensions
        * height **required** `number`: The length of the package, in the specified unit
        * length **required** `number`: The length of the package, in the specified unit
        * unit **required** `string`
        * width **required** `number`: The width of the package, in the specified unit
      * external_package_id `string`: An external package id.
      * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * label_messages
        * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
        * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
        * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
      * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
      * tracking_number: The tracking number for the package.  The format depends on the carrier.
      * weight **required**: The package weight
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
  * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
  * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
  * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * ship_to: The recipient's mailing address
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * shipment_id: A string that uniquely identifies the shipment
  * shipment_status `string`: The current status of the shipment
  * total_weight: The combined weight of all packages in the shipment
    * unit **required**
    * value **required** `number`: The weight, in the specified unit
  * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
  * validate_address `string`

### update_shipment_response_body
* update_shipment_response_body `object`: An update shipment response body
  * tags `array`: Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
    * items
      * name **required** `string`: The tag name.
  * advanced_options: Advanced shipment options.  These are entirely optional.
    * bill_to_account `string`: This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/). This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
    * bill_to_country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
    * bill_to_party: Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
    * bill_to_postal_code `string`: The postal code of the third-party that is responsible for shipping costs.
    * collect_on_delivery [collect_on_delivery](#collect_on_delivery)
    * contains_alcohol `boolean`: Indicates that the shipment contains alcohol.
    * custom_field1 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field2 `string`: An arbitrary field that can be used to store information about the shipment.
    * custom_field3 `string`: An arbitrary field that can be used to store information about the shipment.
    * delivered_duty_paid `boolean`: Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
    * dry_ice `boolean`: Indicates if the shipment contain dry ice
    * dry_ice_weight: The weight of the dry ice in the shipment
      * unit **required**
      * value **required** `number`: The weight, in the specified unit
    * freight_class `string`: The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
    * non_machinable `boolean`: Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
    * saturday_delivery `boolean`: Enables Saturday delivery, if supported by the carrier.
    * use_ups_ground_freight_pricing `boolean`: Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/). If enabled, then a `freight_class` must also be specified.
  * carrier_id: The carrier account that is billed for the shipping charges
  * confirmation `string`: The type of delivery confirmation that is required for this shipment.
  * created_at: The date and time that the shipment was created in ShipEngine.
  * customs: Customs information.  This is usually only needed for international shipments.
    * contents **required** `string`: The type of contents in this shipment.  This may impact import duties or customs treatment.
    * customs_items `array`: Customs declarations for each item in the shipment.
      * items [customs_item](#customs_item)
    * non_delivery **required** `string`: Indicates what to do if a package is unable to be delivered.
  * external_order_id `string`: ID that the Order Source assigned
  * external_shipment_id `string`: You can optionally use this field to store your own identifier for this shipment.
  * insurance_provider `string`: The insurance provider to use for any insured packages in the shipment.
  * items `array`: Describe the packages included in this shipment as related to potential metadata that was imported from
    * items
      * asin `string`: Amazon Standard Identification Number
      * external_order_id `string`: external order id
      * external_order_item_id `string`: external order item id
      * name `string`: item name
      * order_source_code
      * quantity `integer`: The quantity of this item included in the shipment
      * sales_order_id `string`: sales order id
      * sales_order_item_id `string`: sales order item id
      * sku `string`: Item Stock Keeping Unit
  * modified_at: The date and time that the shipment was created or last modified.
  * order_source_code
  * packages `array`: The packages in the shipment.
    * items
      * dimensions: The package dimensions
        * height **required** `number`: The length of the package, in the specified unit
        * length **required** `number`: The length of the package, in the specified unit
        * unit **required** `string`
        * width **required** `number`: The width of the package, in the specified unit
      * external_package_id `string`: An external package id.
      * insured_value `object`: The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
        * amount **required** `number`: The monetary amount, in the specified currency.
        * currency **required**
      * label_messages
        * reference1 **required** `string`: The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
        * reference2 **required** `string`: The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
        * reference3 **required** `string`: The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
      * package_code: The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
      * tracking_number: The tracking number for the package.  The format depends on the carrier.
      * weight **required**: The package weight
        * unit **required**
        * value **required** `number`: The weight, in the specified unit
  * return_to: The return address for this shipment.  Defaults to the `ship_from` address.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * service_code: The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
  * ship_date: The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.
  * ship_from: The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/). Then you can simply specify the `warehouse_id` rather than the complete address each time.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * ship_to: The recipient's mailing address
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * shipment_id: A string that uniquely identifies the shipment
  * shipment_status `string`: The current status of the shipment
  * total_weight: The combined weight of all packages in the shipment
    * unit **required**
    * value **required** `number`: The weight, in the specified unit
  * warehouse_id: The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.
  * address_validation: The address validation
    * matched_address **required**: The matched address found by the Shipengine API
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * messages **required** `array`: The list of messages that were generated during the address validation request.
      * items [response_message](#response_message)
    * original_address **required**: The original address that was sent for validation
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * status **required**
  * errors `array`: An array of errors that occurred while creating shipment.
    * items `string`: An error that occurred while creating a shipment.

### update_ups_settings_request_body
* update_ups_settings_request_body `object`: An update UPS settings request body
  * account_postal_code `string`: account postal code
  * invoice: The invoice
    * control_id: A string that uniquely identifies the control
    * invoice_amount `number`
    * invoice_date `string`: invoice date
    * invoice_number `string`: invoice number
  * is_primary_account `boolean`: Indicates if this is the primary UPS account
  * mail_innovations_cost_center `string`: mail innovations cost center
  * mail_innovations_endorsement
  * nickname `string`: nickname
  * pickup_type
  * use_carbon_neutral_shipping_program `boolean`: The use carbon neutral shipping program
  * use_consolidation_services `boolean`: The use consolidation services
  * use_ground_freight_pricing `boolean`: The use ground freight pricing
  * use_negotiated_rates `boolean`: The use negotiated rates
  * use_order_number_on_mail_innovations_labels `boolean`: The use order number on mail innovations labels

### update_warehouse_request_body
* update_warehouse_request_body `object`: An update warehouse request body
  * created_at `string`: Timestamp that indicates when the warehouse was created
  * name `string`: Name of the warehouse
  * origin_address: The origin address of the warehouse
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * return_address: The return address associated with the warehouse
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * warehouse_id: A string that uniquely identifies the warehouse

### update_webhook_request_body
* update_webhook_request_body `object`: An update webhook request body
  * url: The url that the wehbook sends the request

### ups_account_settings
* ups_account_settings `object`: UPS account settings
  * account_postal_code `string`: account postal code
  * invoice: The invoice
    * control_id: A string that uniquely identifies the control
    * invoice_amount `number`
    * invoice_date `string`: invoice date
    * invoice_number `string`: invoice number
  * is_primary_account `boolean`: Indicates if this is the primary UPS account
  * mail_innovations_cost_center `string`: mail innovations cost center
  * mail_innovations_endorsement
  * nickname `string`: nickname
  * pickup_type
  * use_carbon_neutral_shipping_program `boolean`: The use carbon neutral shipping program
  * use_consolidation_services `boolean`: The use consolidation services
  * use_ground_freight_pricing `boolean`: The use ground freight pricing
  * use_negotiated_rates `boolean`: The use negotiated rates
  * use_order_number_on_mail_innovations_labels `boolean`: The use order number on mail innovations labels

### ups_invoice
* ups_invoice `object`: UPS invoice
  * control_id: A string that uniquely identifies the control
  * invoice_amount `number`
  * invoice_date `string`: invoice date
  * invoice_number `string`: invoice number

### ups_pickup_type
* ups_pickup_type `string` (values: daily_pickup, occasional_pickup, customer_counter): The possible ups pickup type values

### ups_settings_response_body
* ups_settings_response_body `object`: A UPS settings response body
  * account_postal_code `string`: account postal code
  * invoice: The invoice
    * control_id: A string that uniquely identifies the control
    * invoice_amount `number`
    * invoice_date `string`: invoice date
    * invoice_number `string`: invoice number
  * is_primary_account `boolean`: Indicates if this is the primary UPS account
  * mail_innovations_cost_center `string`: mail innovations cost center
  * mail_innovations_endorsement
  * nickname `string`: nickname
  * pickup_type
  * use_carbon_neutral_shipping_program `boolean`: The use carbon neutral shipping program
  * use_consolidation_services `boolean`: The use consolidation services
  * use_ground_freight_pricing `boolean`: The use ground freight pricing
  * use_negotiated_rates `boolean`: The use negotiated rates
  * use_order_number_on_mail_innovations_labels `boolean`: The use order number on mail innovations labels

### url
* url `string`: A URL

### uuid
* uuid `string`: A UUID (a.k.a. GUID) that uniquely identifies a resource

### validate_address
* validate_address `string` (values: no_validation, validate_only, validate_and_clean): The possible validate address values

### validate_address_request_body
* validate_address_request_body `array`: An address validation request body
  * items: An array of addresses to validate.
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.

### validate_address_response_body
* validate_address_response_body `array`: An address validation response body
  * items: The address validation response body
    * matched_address **required**: The matched address found by the Shipengine API
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * messages **required** `array`: The list of messages that were generated during the address validation request.
      * items [response_message](#response_message)
    * original_address **required**: The original address that was sent for validation
      * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
      * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
      * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
      * address_residential_indicator `string`: Indicates whether this is a residential address.
      * city_locality `string`: The name of the city or locality
      * company_name `string`: If this is a business address, then the company name should be specified here.
      * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
      * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
      * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
      * postal_code
      * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
    * status **required**

### validate_shipment_fields
* validate_shipment_fields `object`
  * validate_address `string`

### validation_status
* validation_status `string` (values: valid, invalid, has_warnings, unknown): The possible validation status values

### void_label_response_body
* void_label_response_body `object`: A void label response body
  * approved **required** `boolean`: Indicates whether the attempt to void the label was successful
  * message **required** `string`

### warehouse
* warehouse `object`: A warehouse
  * created_at `string`: Timestamp that indicates when the warehouse was created
  * name `string`: Name of the warehouse
  * origin_address: The origin address of the warehouse
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * return_address: The return address associated with the warehouse
    * address_line1 `string`: The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
    * address_line2 `string`: The second line of the street address.  For some addresses, this line may not be needed.
    * address_line3 `string`: The third line of the street address.  For some addresses, this line may not be needed.
    * address_residential_indicator `string`: Indicates whether this is a residential address.
    * city_locality `string`: The name of the city or locality
    * company_name `string`: If this is a business address, then the company name should be specified here.
    * country_code: The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
    * name `string`: The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
    * phone `string`: The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
    * postal_code
    * state_province `string`: The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
  * warehouse_id: A string that uniquely identifies the warehouse

### webhook
* webhook `object`: A webhook
  * event
  * url: The url that the webhook sends the request to
  * webhook_id: A string that uniquely identifies the webhook

### webhook_event
* webhook_event `string` (values: batch, carrier_connected, order_source_refresh_complete, rate, report_complete, sales_orders_imported, track): The possible webook event values

### weight
* weight `object`: The weight of a package
  * unit **required**
  * value **required** `number`: The weight, in the specified unit

### weight_unit
* weight_unit `string` (values: pound, ounce, gram, kilogram): The possible weight unit values


