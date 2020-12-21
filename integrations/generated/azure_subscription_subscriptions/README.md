# @datafire/azure_subscription_subscriptions

Client library for SubscriptionClient

## Installation and Usage
```bash
npm install --save @datafire/azure_subscription_subscriptions
```
```js
let azure_subscription_subscriptions = require('@datafire/azure_subscription_subscriptions').create({
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

Subscription client provides an interface to create and manage Azure subscriptions programmatically.

## Actions

### Subscriptions_Cancel
The operation to cancel a subscription


```js
azure_subscription_subscriptions.Subscriptions_Cancel({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2019-03-01-preview

#### Output
* output [CanceledSubscriptionId](#canceledsubscriptionid)

### Subscriptions_Enable
The operation to enable a subscription


```js
azure_subscription_subscriptions.Subscriptions_Enable({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2019-03-01-preview

#### Output
* output [EnabledSubscriptionId](#enabledsubscriptionid)

### Subscriptions_Rename
The operation to rename a subscription


```js
azure_subscription_subscriptions.Subscriptions_Rename({
  "subscriptionId": "",
  "body": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * body **required** [SubscriptionName](#subscriptionname)
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2019-03-01-preview

#### Output
* output [RenamedSubscriptionId](#renamedsubscriptionid)



## Definitions

### CanceledSubscriptionId
* CanceledSubscriptionId `object`: The ID of the canceled subscription
  * value `string`: The ID of the canceled subscription

### EnabledSubscriptionId
* EnabledSubscriptionId `object`: The ID of the subscriptions that is being enabled
  * value `string`: The ID of the subscriptions that is being enabled

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### Operation
* Operation `object`: REST API operation
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.Subscription
    * resource `string`: Resource on which the operation is performed: Profile, endpoint, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of operations.
    * items [Operation](#operation)

### RenamedSubscriptionId
* RenamedSubscriptionId `object`: The ID of the subscriptions that is being renamed
  * value `string`: The ID of the subscriptions that is being renamed

### SubscriptionName
* SubscriptionName `object`: The new name of the subscription.
  * subscriptionName `string`: New subscription name


