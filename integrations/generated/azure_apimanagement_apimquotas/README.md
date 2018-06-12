# @datafire/azure_apimanagement_apimquotas

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimquotas
```
```js
let azure_apimanagement_apimquotas = require('@datafire/azure_apimanagement_apimquotas').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_apimanagement_apimquotas.QuotaByCounterKeys_ListByService({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "quotaCounterKey": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Use these REST APIs for performing operations on Quota entity associated with your Azure API Management deployment. To configure call rate limit and quota policies refer to [how to configure call rate limit and quota](https://docs.microsoft.com/en-us/azure/api-management/api-management-howto-product-with-rules#a-namepolicies-ato-configure-call-rate-limit-and-quota-policies).

## Actions

### QuotaByCounterKeys_ListByService
Lists a collection of current quota counter periods associated with the counter-key configured in the policy on the specified service instance. The api does not support paging yet.


```js
azure_apimanagement_apimquotas.QuotaByCounterKeys_ListByService({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "quotaCounterKey": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * quotaCounterKey **required** `string`: Quota counter key identifier.This is the result of expression defined in counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key="boo" in the policy, then it’s accessible by "boo" counter key. But if it’s defined as counter-key="@("b"+"a")" then it will be accessible by "ba" key
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [QuotaCounterCollection](#quotacountercollection)

### QuotaByCounterKeys_Update
Updates all the quota counter values specified with the existing quota counter key to a value in the specified service instance. This should be used for reset of the quota counter values.


```js
azure_apimanagement_apimquotas.QuotaByCounterKeys_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "quotaCounterKey": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * quotaCounterKey **required** `string`: Quota counter key identifier.This is the result of expression defined in counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key="boo" in the policy, then it’s accessible by "boo" counter key. But if it’s defined as counter-key="@("b"+"a")" then it will be accessible by "ba" key
  * parameters **required** [QuotaCounterValueContractProperties](#quotacountervaluecontractproperties)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### QuotaByPeriodKeys_Get
Gets the value of the quota counter associated with the counter-key in the policy for the specific period in service instance.


```js
azure_apimanagement_apimquotas.QuotaByPeriodKeys_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "quotaCounterKey": "",
  "quotaPeriodKey": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * quotaCounterKey **required** `string`: Quota counter key identifier.This is the result of expression defined in counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key="boo" in the policy, then it’s accessible by "boo" counter key. But if it’s defined as counter-key="@("b"+"a")" then it will be accessible by "ba" key
  * quotaPeriodKey **required** `string`: Quota period key identifier.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [QuotaCounterContract](#quotacountercontract)

### QuotaByPeriodKeys_Update
Updates an existing quota counter value in the specified service instance.


```js
azure_apimanagement_apimquotas.QuotaByPeriodKeys_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "quotaCounterKey": "",
  "quotaPeriodKey": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * quotaCounterKey **required** `string`: Quota counter key identifier.This is the result of expression defined in counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key="boo" in the policy, then it’s accessible by "boo" counter key. But if it’s defined as counter-key="@("b"+"a")" then it will be accessible by "ba" key
  * quotaPeriodKey **required** `string`: Quota period key identifier.
  * parameters **required** [QuotaCounterValueContractProperties](#quotacountervaluecontractproperties)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*



## Definitions

### QuotaCounterCollection
* QuotaCounterCollection `object`: Paged Quota Counter list representation.
  * count `integer`: Total record count number across all pages.
  * nextLink `string`: Next page link if any.
  * value `array`: Quota counter values.
    * items [QuotaCounterContract](#quotacountercontract)

### QuotaCounterContract
* QuotaCounterContract `object`: Quota counter details.
  * counterKey **required** `string`: The Key value of the Counter. Must not be empty.
  * periodEndTime **required** `string`: The date of the end of Counter Period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * periodKey **required** `string`: Identifier of the Period for which the counter was collected. Must not be empty.
  * periodStartTime **required** `string`: The date of the start of Counter Period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * value [QuotaCounterValueContractProperties](#quotacountervaluecontractproperties)

### QuotaCounterValueContract
* QuotaCounterValueContract `object`: Quota counter value details.
  * value [QuotaCounterValueContractProperties](#quotacountervaluecontractproperties)

### QuotaCounterValueContractProperties
* QuotaCounterValueContractProperties `object`: Quota counter value details.
  * callsCount `integer`: Number of times Counter was called.
  * kbTransferred `number`: Data Transferred in KiloBytes.


