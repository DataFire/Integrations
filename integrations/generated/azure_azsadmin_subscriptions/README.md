# @datafire/azure_azsadmin_subscriptions

Client library for SubscriptionClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_subscriptions
```
```js
let azure_azsadmin_subscriptions = require('@datafire/azure_azsadmin_subscriptions').create({
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

The User Subscription Management Client.

## Actions

### Subscriptions_List
Get the list of subscriptions.


```js
azure_azsadmin_subscriptions.Subscriptions_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SubscriptionList](#subscriptionlist)

### Subscriptions_Delete
Delete the specified subscription.


```js
azure_azsadmin_subscriptions.Subscriptions_Delete({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Id of the subscription.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Subscriptions_Get
Gets details about particular subscription.


```js
azure_azsadmin_subscriptions.Subscriptions_Get({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Id of the subscription.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Subscription](#subscription)

### Subscriptions_CreateOrUpdate
Create or updates a subscription.


```js
azure_azsadmin_subscriptions.Subscriptions_CreateOrUpdate({
  "subscriptionId": "",
  "newSubscription": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Id of the subscription.
  * newSubscription **required** [Subscription](#subscription)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Subscription](#subscription)



## Definitions

### Resource
* Resource `object`: Base Resource Object
  * id `string`: URI of the resource.
  * location `string`: Location of the resource
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### Subscription
* Subscription `object`: List of supported operations.
  * displayName `string`: Subscription name.
  * id `string`: Fully qualified identifier.
  * offerId `string`: Identifier of the offer under the scope of a delegated provider.
  * state [SubscriptionState](#subscriptionstate)
  * subscriptionId `string`: Subscription identifier.
  * tenantId `string`: Directory tenant identifier.

### SubscriptionList
* SubscriptionList `object`: List of subscriptions.
  * nextLink `string`: URI to the next page.
  * value `array`: Subscription definition.
    * items [Subscription](#subscription)

### SubscriptionState
* SubscriptionState `string` (values: NotDefined, Enabled, Warned, PastDue, Disabled, Deleted): Subscription notification state.


