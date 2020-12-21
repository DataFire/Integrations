# @datafire/azure_azsadmin_quotas

Client library for StorageManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_quotas
```
```js
let azure_azsadmin_quotas = require('@datafire/azure_azsadmin_quotas').create({
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

The Admin Storage Management Client.

## Actions

### StorageQuotas_List
Returns a list of storage quotas at the given location.


```js
azure_azsadmin_quotas.StorageQuotas_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * location **required** `string`: Resource location.
  * api-version **required** `string`: REST Api Version.

#### Output
* output [StorageQuotaList](#storagequotalist)

### StorageQuotas_Delete
Delete an existing quota


```js
azure_azsadmin_quotas.StorageQuotas_Delete({
  "subscriptionId": "",
  "api-version": "",
  "location": "",
  "quotaName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * api-version **required** `string`: REST Api Version.
  * location **required** `string`: Resource location.
  * quotaName **required** `string`: The name of the storage quota.

#### Output
*Output schema unknown*

### StorageQuotas_Get
Returns the specified storage quota.


```js
azure_azsadmin_quotas.StorageQuotas_Get({
  "subscriptionId": "",
  "api-version": "",
  "location": "",
  "quotaName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * api-version **required** `string`: REST Api Version.
  * location **required** `string`: Resource location.
  * quotaName **required** `string`: The name of the storage quota.

#### Output
* output [StorageQuota](#storagequota)

### StorageQuotas_CreateOrUpdate
Create or update an existing storage quota.


```js
azure_azsadmin_quotas.StorageQuotas_CreateOrUpdate({
  "subscriptionId": "",
  "location": "",
  "api-version": "",
  "quotaName": "",
  "quotaObject": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * location **required** `string`: Resource location.
  * api-version **required** `string`: REST Api Version.
  * quotaName **required** `string`: The name of the storage quota.
  * quotaObject **required** [StorageQuota](#storagequota)

#### Output
* output [StorageQuota](#storagequota)



## Definitions

### StorageQuota
* StorageQuota `object`: Storage quota.
  * properties [StorageQuotaProperties](#storagequotaproperties)
  * id `string`: Resource ID.
  * location `string`: Resource Location.
  * name `string`: Resource Name.
  * type `string`: Resource Type.

### StorageQuotaList
* StorageQuotaList `object`: Pageable list of storage quotas.
  * value `array`: List of storage quotas.
    * items [StorageQuota](#storagequota)

### StorageQuotaProperties
* StorageQuotaProperties `object`: Storage quota properties.
  * capacityInGb `integer`: Maximum capacity (GB).
  * numberOfStorageAccounts `integer`: Total number of storage accounts.


