# @datafire/azure_azsadmin_quota

Client library for SubscriptionsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_quota
```
```js
let azure_azsadmin_quota = require('@datafire/azure_azsadmin_quota').create({
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

### Quotas_List
Get the list of quotas at a location.


```js
azure_azsadmin_quota.Quotas_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The AzureStack location.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [QuotaList](#quotalist)

### Quotas_Get
Gets a quota by name.


```js
azure_azsadmin_quota.Quotas_Get({
  "subscriptionId": "",
  "location": "",
  "quota": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The AzureStack location.
  * quota **required** `string`: Name of the quota.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Quota](#quota)



## Definitions

### Quota
* Quota `object`: Quotas for DelegatedProviders.
  * properties [QuotaProperties](#quotaproperties)
  * id `string`: URI of the resource.
  * location `string`: Location of the resource
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### QuotaList
* QuotaList `object`: List of quotas.
  * nextLink `string`: URI to next page.
  * value `array`: List of quotas.
    * items [Quota](#quota)

### QuotaProperties
* QuotaProperties `object`: Quotas for DelegatedProviders.
  * allowCustomPortalBranding `boolean`: Value indicating whether custom portal branding is allowed.


