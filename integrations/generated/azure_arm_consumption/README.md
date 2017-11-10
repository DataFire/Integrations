# @datafire/azure_arm_consumption

Client library for ConsumptionManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_consumption
```

```js
let datafire = require('datafire');
let azure_arm_consumption = require('@datafire/azure_arm_consumption').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_consumption.Operations_List({}).then(data => {
  console.log(data);
})
```

## Description
Consumption management client provides access to consumption resources for Azure Web-Direct subscriptions. Other subscription types which were not purchased directly through the Azure web portal are not supported through this preview API.

## Actions
### Operations_List
Lists all of the available consumption REST API operations.


```js
azure_arm_consumption.Operations_List({
  "api-version": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2017-02-27-preview.

### UsageDetails_List
Lists the usage details for a scope in reverse chronological order by billing period. Usage details are available via this API only for January 1, 2017 or later.


```js
azure_arm_consumption.UsageDetails_List({
  "scope": "",
  "api-version": ""
}, context)
```

#### Parameters
* scope (string) **required** - The scope of the usage details. The scope can be '/subscriptions/{subscriptionId}' for a subscription, or '/subscriptions/{subscriptionId}/providers/Microsoft.Billing/invoices/{invoiceName}' for an invoice or '/subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}' for a billing perdiod.
* $expand (string) - May be used to expand the additionalProperties or meterDetails property within a list of usage details. By default, these fields are not included when listing usage details.
* $filter (string) - May be used to filter usageDetails by usageEnd (Utc time). The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'.
* $skiptoken (string) - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
* $top (integer) - May be used to limit the number of results to the most recent N usageDetails.
* api-version (string) **required** - Version of the API to be used with the client request. The current version is 2017-02-27-preview.

