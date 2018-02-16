# @datafire/azure_arm_billing

Client library for BillingClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_billing
```
```js
let azure_arm_billing = require('@datafire/azure_arm_billing').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_billing.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Billing client provides access to billing resources for Azure Web-Direct subscriptions. Other subscription types which were not purchased directly through the Azure web portal are not supported through this preview API.

## Actions

### Operations_List
Lists all of the available billing REST API operations.


```js
azure_arm_billing.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-02-27-preview.

#### Output
* output [OperationListResult](#operationlistresult)

### Invoices_List
Lists the available invoices for a subscription in reverse chronological order beginning with the most recent invoice. In preview, invoices are available via this API only for invoice periods which end December 1, 2016 or later


```js
azure_arm_billing.Invoices_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * $expand `string`: May be used to expand the downloadUrl property within a list of invoices. This enables download links to be generated for multiple invoices at once. By default, downloadURLs are not included when listing invoices.
  * $filter `string`: May be used to filter invoices by invoicePeriodEndDate. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
  * $top `integer`: May be used to limit the number of results to the most recent N invoices.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-02-27-preview.

#### Output
* output [InvoicesListResult](#invoiceslistresult)

### Invoices_GetLatest
Gets the most recent invoice. When getting a single invoice, the downloadUrl property is expanded automatically.


```js
azure_arm_billing.Invoices_GetLatest({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-02-27-preview.

#### Output
* output [Invoice](#invoice)

### Invoices_Get
Gets a named invoice resource. When getting a single invoice, the downloadUrl property is expanded automatically.


```js
azure_arm_billing.Invoices_Get({
  "subscriptionId": "",
  "invoiceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * invoiceName **required** `string`: The name of an invoice resource.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-02-27-preview.

#### Output
* output [Invoice](#invoice)



## Definitions

### DownloadUrl
* DownloadUrl `object`: A secure URL that can be used to download a PDF invoice until the URL expires.
  * expiryTime `string`: The time in UTC at which this download URL will expire.
  * url `string`: The URL to the PDF file.

### ErrorDetails
* ErrorDetails `object`: The details of the error.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.
  * target `string`: The target of the particular error.

### ErrorResponse
* ErrorResponse `object`: Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message.
  * error [ErrorDetails](#errordetails)

### Invoice
* Invoice `object`: An invoice resource can be used download a PDF version of an invoice.
  * properties [InvoiceProperties](#invoiceproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### InvoiceProperties
* InvoiceProperties `object`: The properties of the invoice.
  * downloadUrl [DownloadUrl](#downloadurl)
  * invoicePeriodEndDate `string`: The end of the date range covered by the invoice.
  * invoicePeriodStartDate `string`: The start of the date range covered by the invoice.

### InvoicesListResult
* InvoicesListResult `object`: Result of the request to list invoices. It contains a list of available invoices in reverse chronological order.
  * nextLink `string`: the link (url) to the next page of results.
  * value `array`: The list of invoices.
    * items [Invoice](#invoice)

### Operation
* Operation `object`: A Billing REST API operation
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.Billing
    * resource `string`: Resource on which the operation is performed: Invoice, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list billing operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of billing operations supported by the Microsoft.Billing resource provider.
    * items [Operation](#operation)

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type


