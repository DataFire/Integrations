# @datafire/azure_streamanalytics_subscriptions

Client library for StreamAnalyticsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_streamanalytics_subscriptions
```
```js
let azure_streamanalytics_subscriptions = require('@datafire/azure_streamanalytics_subscriptions').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_streamanalytics_subscriptions.Subscriptions_ListQuotas({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### Subscriptions_ListQuotas
Retrieves the subscription's current quota information in a particular region.


```js
azure_streamanalytics_subscriptions.Subscriptions_ListQuotas({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The region in which to retrieve the subscription's quota information. You can find out which regions Azure Stream Analytics is supported in here: https://azure.microsoft.com/en-us/regions/
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SubscriptionQuotasListResult](#subscriptionquotaslistresult)



## Definitions

### SubResource
* SubResource `object`: The base sub-resource model definition.
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SubscriptionQuota
* SubscriptionQuota `object`: Describes the current quota for the subscription.
  * properties `object`: Describes the properties of the quota.
    * currentCount `integer`: The current usage of this resource.
    * maxCount `integer`: The max permitted usage of this resource.
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SubscriptionQuotasListResult
* SubscriptionQuotasListResult `object`: Result of the GetQuotas operation. It contains a list of quotas for the subscription in a particular region.
  * value `array`: List of quotas for the subscription in a particular region.
    * items [SubscriptionQuota](#subscriptionquota)


