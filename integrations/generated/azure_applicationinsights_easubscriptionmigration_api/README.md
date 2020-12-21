# @datafire/azure_applicationinsights_easubscriptionmigration_api

Client library for ApplicationInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_easubscriptionmigration_api
```
```js
let azure_applicationinsights_easubscriptionmigration_api = require('@datafire/azure_applicationinsights_easubscriptionmigration_api').create({
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

Apis for customer in enterprise agreement migrate to new pricing model or rollback to legacy pricing model.

## Actions

### EASubscriptionListMigrationDate_Post
list date to migrate to new pricing model.


```js
azure_applicationinsights_easubscriptionmigration_api.EASubscriptionListMigrationDate_Post({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [EASubscriptionMigrationDate](#easubscriptionmigrationdate)

### EASubscriptionMigrateToNewPricingModel_Post
Enterprise Agreement Customer opted to use new pricing model.


```js
azure_applicationinsights_easubscriptionmigration_api.EASubscriptionMigrateToNewPricingModel_Post({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### EASubscriptionRollbackToLegacyPricingModel_Post
Enterprise Agreement Customer roll back to use legacy pricing model.


```js
azure_applicationinsights_easubscriptionmigration_api.EASubscriptionRollbackToLegacyPricingModel_Post({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*



## Definitions

### CloudError
* CloudError `object`: An error response from the Batch service.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: An error response from the Batch service.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error.

### EASubscriptionMigrationDate
* EASubscriptionMigrationDate `object`: Subscription migrate date information properties
  * isGrandFatherableSubscription `boolean`: Is subscription in the grand fatherable subscription list.
  * optedInDate `string`: Time to start using new pricing model.


