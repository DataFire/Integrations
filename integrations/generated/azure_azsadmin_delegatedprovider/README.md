# @datafire/azure_azsadmin_delegatedprovider

Client library for SubscriptionsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_delegatedprovider
```
```js
let azure_azsadmin_delegatedprovider = require('@datafire/azure_azsadmin_delegatedprovider').create({
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

The Admin Subscriptions Management Client.

## Actions

### DelegatedProviders_List
Get the list of delegatedProviders.


```js
azure_azsadmin_delegatedprovider.DelegatedProviders_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: List of subscriptions.
  * nextLink `string`: URI to the next page.
  * value `array`: Subscription definition.
    * items `object`: List of supported operations.
      * delegatedProviderSubscriptionId `string`: Parent DelegatedProvider subscription identifier.
      * displayName `string`: Subscription name.
      * externalReferenceId `string`: External reference identifier.
      * id `string`: Fully qualified identifier.
      * offerId `string`: Identifier of the offer under the scope of a delegated provider.
      * owner `string`: Subscription owner.
      * routingResourceManagerType `string` (values: Default, Admin): Resource manager type.
      * state `string` (values: NotDefined, Enabled, Warned, PastDue, Disabled, Deleted, Deleting, PartiallyDeleted): Subscription notification state.
      * subscriptionId `string`: Subscription identifier.
      * tenantId `string`: Directory tenant identifier.

### DelegatedProviders_Get
Get the specified delegated provider.


```js
azure_azsadmin_delegatedprovider.DelegatedProviders_Get({
  "subscriptionId": "",
  "delegatedProvider": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * delegatedProvider **required** `string`: DelegatedProvider identifier.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: List of supported operations.
  * delegatedProviderSubscriptionId `string`: Parent DelegatedProvider subscription identifier.
  * displayName `string`: Subscription name.
  * externalReferenceId `string`: External reference identifier.
  * id `string`: Fully qualified identifier.
  * offerId `string`: Identifier of the offer under the scope of a delegated provider.
  * owner `string`: Subscription owner.
  * routingResourceManagerType `string` (values: Default, Admin): Resource manager type.
  * state `string` (values: NotDefined, Enabled, Warned, PastDue, Disabled, Deleted, Deleting, PartiallyDeleted): Subscription notification state.
  * subscriptionId `string`: Subscription identifier.
  * tenantId `string`: Directory tenant identifier.



## Definitions

*This integration has no definitions*
