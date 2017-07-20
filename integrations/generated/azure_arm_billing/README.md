# @datafire/azure_arm_billing

Client library for BillingClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_billing
```

```js
let datafire = require('datafire');
let azure_arm_billing = require('@datafire/azure_arm_billing').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_billing: account,
  }
})


azure_arm_billing.Operations_List({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2017-02-27-preview.

### Invoices_List
Lists the available invoices for a subscription in reverse chronological order beginning with the most recent invoice. In preview, invoices are available via this API only for invoice periods which end December 1, 2016 or later


```js
azure_arm_billing.Invoices_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure Subscription ID.
* $expand (string) - May be used to expand the downloadUrl property within a list of invoices. This enables download links to be generated for multiple invoices at once. By default, downloadURLs are not included when listing invoices.
* $filter (string) - May be used to filter invoices by invoicePeriodEndDate. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'
* $skiptoken (string) - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
* $top (integer) - May be used to limit the number of results to the most recent N invoices.
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2017-02-27-preview.

### Invoices_GetLatest
Gets the most recent invoice. When getting a single invoice, the downloadUrl property is expanded automatically.


```js
azure_arm_billing.Invoices_GetLatest({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2017-02-27-preview.

### Invoices_Get
Gets a named invoice resource. When getting a single invoice, the downloadUrl property is expanded automatically.


```js
azure_arm_billing.Invoices_Get({
  "subscriptionId": "",
  "invoiceName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure Subscription ID.
* invoiceName (string) **required** - The name of an invoice resource.
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2017-02-27-preview.

