# @datafire/azure_billing

Client library for BillingManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_billing
```
```js
let azure_billing = require('@datafire/azure_billing').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_billing.Operations_List({
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
azure_billing.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-04-24-preview.

#### Output
* output [OperationListResult](#operationlistresult)

### BillingPeriods_List
Lists the available billing periods for a subscription in reverse chronological order.


```js
azure_billing.BillingPeriods_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-04-24-preview.
  * $filter `string`: May be used to filter billing periods by billingPeriodEndDate. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'.
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
  * $top `integer`: May be used to limit the number of results to the most recent N billing periods.

#### Output
* output [BillingPeriodsListResult](#billingperiodslistresult)

### BillingPeriods_Get
Gets a named billing period.


```js
azure_billing.BillingPeriods_Get({
  "subscriptionId": "",
  "api-version": "",
  "billingPeriodName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-04-24-preview.
  * billingPeriodName **required** `string`: The name of a BillingPeriod resource.

#### Output
* output [BillingPeriod](#billingperiod)

### Invoices_List
Lists the available invoices for a subscription in reverse chronological order beginning with the most recent invoice. In preview, invoices are available via this API only for invoice periods which end December 1, 2016 or later.


```js
azure_billing.Invoices_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-04-24-preview.
  * $expand `string`: May be used to expand the downloadUrl property within a list of invoices. This enables download links to be generated for multiple invoices at once. By default, downloadURLs are not included when listing invoices.
  * $filter `string`: May be used to filter invoices by invoicePeriodEndDate. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'.
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
  * $top `integer`: May be used to limit the number of results to the most recent N invoices.

#### Output
* output [InvoicesListResult](#invoiceslistresult)

### Invoices_GetLatest
Gets the most recent invoice. When getting a single invoice, the downloadUrl property is expanded automatically.


```js
azure_billing.Invoices_GetLatest({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-04-24-preview.

#### Output
* output [Invoice](#invoice)

### Invoices_Get
Gets a named invoice resource. When getting a single invoice, the downloadUrl property is expanded automatically.


```js
azure_billing.Invoices_Get({
  "subscriptionId": "",
  "api-version": "",
  "invoiceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-04-24-preview.
  * invoiceName **required** `string`: The name of an invoice resource.

#### Output
* output [Invoice](#invoice)



## Definitions

### BillingPeriod
* BillingPeriod `object`: A billing period resource.
  * properties [BillingPeriodProperties](#billingperiodproperties)
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### BillingPeriodProperties
* BillingPeriodProperties `object`: The properties of the billing period.
  * billingPeriodEndDate `string`: The end of the date range covered by the billing period.
  * billingPeriodStartDate `string`: The start of the date range covered by the billing period.
  * invoiceIds `array`: Array of invoice ids that associated with.
    * items `string`

### BillingPeriodsListResult
* BillingPeriodsListResult `object`: Result of listing billing periods. It contains a list of available billing periods in reverse chronological order.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of billing periods.
    * items [BillingPeriod](#billingperiod)

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
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.

### InvoiceProperties
* InvoiceProperties `object`: The properties of the invoice.
  * billingPeriodIds `array`: Array of billing perdiod ids that the invoice is attributed to.
    * items `string`
  * downloadUrl [DownloadUrl](#downloadurl)
  * invoicePeriodEndDate `string`: The end of the date range covered by the invoice.
  * invoicePeriodStartDate `string`: The start of the date range covered by the invoice.

### InvoicesListResult
* InvoicesListResult `object`: Result of listing invoices. It contains a list of available invoices in reverse chronological order.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of invoices.
    * items [Invoice](#invoice)

### Operation
* Operation `object`: A Billing REST API operation.
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.Billing.
    * resource `string`: Resource on which the operation is performed: Invoice, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}.

### OperationListResult
* OperationListResult `object`: Result listing billing operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of billing operations supported by the Microsoft.Billing resource provider.
    * items [Operation](#operation)

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * type `string`: Resource type.


