# @datafire/azure_arm_dns

Client library for DnsManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_dns
```

```js
let datafire = require('datafire');
let azure_arm_dns = require('@datafire/azure_arm_dns').actions;
let context = new datafire.Context();

azure_arm_dns.Zones_List({}, context).then(data => {
  console.log(data);
})
```

## Description
The DNS Management Client.

## Actions
### Zones_List
Lists the DNS zones in all resource groups in a subscription.


```js
azure_arm_dns.Zones_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* $top (integer) - The maximum number of DNS zones to return. If not specified, returns up to 100 zones.
* api-version (string) **required** - Specifies the API version.
* subscriptionId (string) **required** - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

### Zones_ListByResourceGroup
Lists the DNS zones within a resource group.


```js
azure_arm_dns.Zones_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* $top (integer) - The maximum number of record sets to return. If not specified, returns up to 100 record sets.
* api-version (string) **required** - Specifies the API version.
* subscriptionId (string) **required** - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

### Zones_Delete
Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation cannot be undone.


```js
azure_arm_dns.Zones_Delete({
  "resourceGroupName": "",
  "zoneName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* zoneName (string) **required** - The name of the DNS zone (without a terminating dot).
* If-Match (string) - The etag of the DNS zone. Omit this value to always delete the current zone. Specify the last-seen etag value to prevent accidentally deleting any concurrent changes.
* api-version (string) **required** - Specifies the API version.
* subscriptionId (string) **required** - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

### Zones_Get
Gets a DNS zone. Retrieves the zone properties, but not the record sets within the zone.


```js
azure_arm_dns.Zones_Get({
  "resourceGroupName": "",
  "zoneName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* zoneName (string) **required** - The name of the DNS zone (without a terminating dot).
* api-version (string) **required** - Specifies the API version.
* subscriptionId (string) **required** - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

### Zones_CreateOrUpdate
Creates or updates a DNS zone. Does not modify DNS records within the zone.


```js
azure_arm_dns.Zones_CreateOrUpdate({
  "resourceGroupName": "",
  "zoneName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* zoneName (string) **required** - The name of the DNS zone (without a terminating dot).
* parameters (undefined) **required** - Describes a DNS zone.
* If-Match (string) - The etag of the DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen etag value to prevent accidentally overwritting any concurrent changes.
* If-None-Match (string) - Set to '*' to allow a new DNS zone to be created, but to prevent updating an existing zone. Other values will be ignored.
* api-version (string) **required** - Specifies the API version.
* subscriptionId (string) **required** - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

### RecordSets_ListByDnsZone
Lists all record sets in a DNS zone.


```js
azure_arm_dns.RecordSets_ListByDnsZone({
  "resourceGroupName": "",
  "zoneName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* zoneName (string) **required** - The name of the DNS zone (without a terminating dot).
* $top (integer) - The maximum number of record sets to return. If not specified, returns up to 100 record sets.
* api-version (string) **required** - Specifies the API version.
* subscriptionId (string) **required** - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

### RecordSets_ListByType
Lists the record sets of a specified type in a DNS zone.


```js
azure_arm_dns.RecordSets_ListByType({
  "resourceGroupName": "",
  "zoneName": "",
  "recordType": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* zoneName (string) **required** - The name of the DNS zone (without a terminating dot).
* recordType (string) **required** - The type of record sets to enumerate.
* $top (integer) - The maximum number of record sets to return. If not specified, returns up to 100 record sets.
* api-version (string) **required** - Specifies the API version.
* subscriptionId (string) **required** - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

### RecordSets_Delete
Deletes a record set from a DNS zone. This operation cannot be undone.


```js
azure_arm_dns.RecordSets_Delete({
  "resourceGroupName": "",
  "zoneName": "",
  "relativeRecordSetName": "",
  "recordType": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* zoneName (string) **required** - The name of the DNS zone (without a terminating dot).
* relativeRecordSetName (string) **required** - The name of the record set, relative to the name of the zone.
* recordType (string) **required** - The type of DNS record in this record set. Record sets of type SOA cannot be deleted (they are deleted when the DNS zone is deleted).
* If-Match (string) - The etag of the record set. Omit this value to always delete the current record set. Specify the last-seen etag value to prevent accidentally deleting any concurrent changes.
* api-version (string) **required** - Specifies the API version.
* subscriptionId (string) **required** - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

### RecordSets_Get
Gets a record set.


```js
azure_arm_dns.RecordSets_Get({
  "resourceGroupName": "",
  "zoneName": "",
  "relativeRecordSetName": "",
  "recordType": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* zoneName (string) **required** - The name of the DNS zone (without a terminating dot).
* relativeRecordSetName (string) **required** - The name of the record set, relative to the name of the zone.
* recordType (string) **required** - The type of DNS record in this record set.
* api-version (string) **required** - Specifies the API version.
* subscriptionId (string) **required** - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

### RecordSets_Update
Updates a record set within a DNS zone.


```js
azure_arm_dns.RecordSets_Update({
  "resourceGroupName": "",
  "zoneName": "",
  "relativeRecordSetName": "",
  "recordType": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* zoneName (string) **required** - The name of the DNS zone (without a terminating dot).
* relativeRecordSetName (string) **required** - The name of the record set, relative to the name of the zone.
* recordType (string) **required** - The type of DNS record in this record set.
* parameters (undefined) **required** - Describes a DNS record set (a collection of DNS records with the same name and type).
* If-Match (string) - The etag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen etag value to prevent accidentally overwritting concurrent changes.
* api-version (string) **required** - Specifies the API version.
* subscriptionId (string) **required** - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

### RecordSets_CreateOrUpdate
Creates or updates a record set within a DNS zone.


```js
azure_arm_dns.RecordSets_CreateOrUpdate({
  "resourceGroupName": "",
  "zoneName": "",
  "relativeRecordSetName": "",
  "recordType": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* zoneName (string) **required** - The name of the DNS zone (without a terminating dot).
* relativeRecordSetName (string) **required** - The name of the record set, relative to the name of the zone.
* recordType (string) **required** - The type of DNS record in this record set. Record sets of type SOA can be updated but not created (they are created when the DNS zone is created).
* parameters (undefined) **required** - Describes a DNS record set (a collection of DNS records with the same name and type).
* If-Match (string) - The etag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen etag value to prevent accidentally overwritting any concurrent changes.
* If-None-Match (string) - Set to '*' to allow a new record set to be created, but to prevent updating an existing record set. Other values will be ignored.
* api-version (string) **required** - Specifies the API version.
* subscriptionId (string) **required** - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

