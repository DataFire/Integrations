# @datafire/azure_privatedns

Client library for PrivateDnsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_privatedns
```
```js
let azure_privatedns = require('@datafire/azure_privatedns').create({
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

The Private DNS Management Client.

## Actions

### PrivateZones_List
Lists the Private DNS zones in all resource groups in a subscription.


```js
azure_privatedns.PrivateZones_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $top `integer`: The maximum number of Private DNS zones to return. If not specified, returns up to 100 zones.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PrivateZoneListResult](#privatezonelistresult)

### PrivateZones_ListByResourceGroup
Lists the Private DNS zones within a resource group.


```js
azure_privatedns.PrivateZones_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * $top `integer`: The maximum number of record sets to return. If not specified, returns up to 100 record sets.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PrivateZoneListResult](#privatezonelistresult)

### PrivateZones_Delete
Deletes a Private DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation cannot be undone. Private DNS zone cannot be deleted unless all virtual network links to it are removed.


```js
azure_privatedns.PrivateZones_Delete({
  "resourceGroupName": "",
  "privateZoneName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateZoneName **required** `string`: The name of the Private DNS zone (without a terminating dot).
  * If-Match `string`: The ETag of the Private DNS zone. Omit this value to always delete the current zone. Specify the last-seen ETag value to prevent accidentally deleting any concurrent changes.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### PrivateZones_Get
Gets a Private DNS zone. Retrieves the zone properties, but not the virtual networks links or the record sets within the zone.


```js
azure_privatedns.PrivateZones_Get({
  "resourceGroupName": "",
  "privateZoneName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateZoneName **required** `string`: The name of the Private DNS zone (without a terminating dot).
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PrivateZone](#privatezone)

### PrivateZones_Update
Updates a Private DNS zone. Does not modify virtual network links or DNS records within the zone.


```js
azure_privatedns.PrivateZones_Update({
  "resourceGroupName": "",
  "privateZoneName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateZoneName **required** `string`: The name of the Private DNS zone (without a terminating dot).
  * parameters **required** [PrivateZone](#privatezone)
  * If-Match `string`: The ETag of the Private DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PrivateZone](#privatezone)

### PrivateZones_CreateOrUpdate
Creates or updates a Private DNS zone. Does not modify Links to virtual networks or DNS records within the zone.


```js
azure_privatedns.PrivateZones_CreateOrUpdate({
  "resourceGroupName": "",
  "privateZoneName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateZoneName **required** `string`: The name of the Private DNS zone (without a terminating dot).
  * parameters **required** [PrivateZone](#privatezone)
  * If-Match `string`: The ETag of the Private DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
  * If-None-Match `string`: Set to '*' to allow a new Private DNS zone to be created, but to prevent updating an existing zone. Other values will be ignored.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PrivateZone](#privatezone)

### RecordSets_List
Lists all record sets in a Private DNS zone.


```js
azure_privatedns.RecordSets_List({
  "resourceGroupName": "",
  "privateZoneName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateZoneName **required** `string`: The name of the Private DNS zone (without a terminating dot).
  * $top `integer`: The maximum number of record sets to return. If not specified, returns up to 100 record sets.
  * $recordsetnamesuffix `string`: The suffix label of the record set name to be used to filter the record set enumeration. If this parameter is specified, the returned enumeration will only contain records that end with ".<recordsetnamesuffix>".
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RecordSetListResult](#recordsetlistresult)

### VirtualNetworkLinks_List
Lists the virtual network links to the specified Private DNS zone.


```js
azure_privatedns.VirtualNetworkLinks_List({
  "resourceGroupName": "",
  "privateZoneName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateZoneName **required** `string`: The name of the Private DNS zone (without a terminating dot).
  * $top `integer`: The maximum number of virtual network links to return. If not specified, returns up to 100 virtual network links.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkLinkListResult](#virtualnetworklinklistresult)

### VirtualNetworkLinks_Delete
Deletes a virtual network link to the specified Private DNS zone. WARNING: In case of a registration virtual network, all auto-registered DNS records in the zone for the virtual network will also be deleted. This operation cannot be undone.


```js
azure_privatedns.VirtualNetworkLinks_Delete({
  "resourceGroupName": "",
  "privateZoneName": "",
  "virtualNetworkLinkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateZoneName **required** `string`: The name of the Private DNS zone (without a terminating dot).
  * virtualNetworkLinkName **required** `string`: The name of the virtual network link.
  * If-Match `string`: The ETag of the virtual network link to the Private DNS zone. Omit this value to always delete the current zone. Specify the last-seen ETag value to prevent accidentally deleting any concurrent changes.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### VirtualNetworkLinks_Get
Gets a virtual network link to the specified Private DNS zone.


```js
azure_privatedns.VirtualNetworkLinks_Get({
  "resourceGroupName": "",
  "privateZoneName": "",
  "virtualNetworkLinkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateZoneName **required** `string`: The name of the Private DNS zone (without a terminating dot).
  * virtualNetworkLinkName **required** `string`: The name of the virtual network link.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkLink](#virtualnetworklink)

### VirtualNetworkLinks_Update
Updates a virtual network link to the specified Private DNS zone.


```js
azure_privatedns.VirtualNetworkLinks_Update({
  "resourceGroupName": "",
  "privateZoneName": "",
  "virtualNetworkLinkName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateZoneName **required** `string`: The name of the Private DNS zone (without a terminating dot).
  * virtualNetworkLinkName **required** `string`: The name of the virtual network link.
  * parameters **required** [VirtualNetworkLink](#virtualnetworklink)
  * If-Match `string`: The ETag of the virtual network link to the Private DNS zone. Omit this value to always overwrite the current virtual network link. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkLink](#virtualnetworklink)

### VirtualNetworkLinks_CreateOrUpdate
Creates or updates a virtual network link to the specified Private DNS zone.


```js
azure_privatedns.VirtualNetworkLinks_CreateOrUpdate({
  "resourceGroupName": "",
  "privateZoneName": "",
  "virtualNetworkLinkName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateZoneName **required** `string`: The name of the Private DNS zone (without a terminating dot).
  * virtualNetworkLinkName **required** `string`: The name of the virtual network link.
  * parameters **required** [VirtualNetworkLink](#virtualnetworklink)
  * If-Match `string`: The ETag of the virtual network link to the Private DNS zone. Omit this value to always overwrite the current virtual network link. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
  * If-None-Match `string`: Set to '*' to allow a new virtual network link to the Private DNS zone to be created, but to prevent updating an existing link. Other values will be ignored.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkLink](#virtualnetworklink)

### RecordSets_ListByType
Lists the record sets of a specified type in a Private DNS zone.


```js
azure_privatedns.RecordSets_ListByType({
  "resourceGroupName": "",
  "privateZoneName": "",
  "recordType": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateZoneName **required** `string`: The name of the Private DNS zone (without a terminating dot).
  * recordType **required** `string` (values: A, AAAA, CNAME, MX, PTR, SOA, SRV, TXT): The type of record sets to enumerate.
  * $top `integer`: The maximum number of record sets to return. If not specified, returns up to 100 record sets.
  * $recordsetnamesuffix `string`: The suffix label of the record set name to be used to filter the record set enumeration. If this parameter is specified, the returned enumeration will only contain records that end with ".<recordsetnamesuffix>".
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RecordSetListResult](#recordsetlistresult)

### RecordSets_Delete
Deletes a record set from a Private DNS zone. This operation cannot be undone.


```js
azure_privatedns.RecordSets_Delete({
  "resourceGroupName": "",
  "privateZoneName": "",
  "recordType": "",
  "relativeRecordSetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateZoneName **required** `string`: The name of the Private DNS zone (without a terminating dot).
  * recordType **required** `string` (values: A, AAAA, CNAME, MX, PTR, SOA, SRV, TXT): The type of DNS record in this record set. Record sets of type SOA cannot be deleted (they are deleted when the Private DNS zone is deleted).
  * relativeRecordSetName **required** `string`: The name of the record set, relative to the name of the zone.
  * If-Match `string`: The ETag of the record set. Omit this value to always delete the current record set. Specify the last-seen ETag value to prevent accidentally deleting any concurrent changes.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### RecordSets_Get
Gets a record set.


```js
azure_privatedns.RecordSets_Get({
  "resourceGroupName": "",
  "privateZoneName": "",
  "recordType": "",
  "relativeRecordSetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateZoneName **required** `string`: The name of the Private DNS zone (without a terminating dot).
  * recordType **required** `string` (values: A, AAAA, CNAME, MX, PTR, SOA, SRV, TXT): The type of DNS record in this record set.
  * relativeRecordSetName **required** `string`: The name of the record set, relative to the name of the zone.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RecordSet](#recordset)

### RecordSets_Update
Updates a record set within a Private DNS zone.


```js
azure_privatedns.RecordSets_Update({
  "resourceGroupName": "",
  "privateZoneName": "",
  "recordType": "",
  "relativeRecordSetName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateZoneName **required** `string`: The name of the Private DNS zone (without a terminating dot).
  * recordType **required** `string` (values: A, AAAA, CNAME, MX, PTR, SOA, SRV, TXT): The type of DNS record in this record set.
  * relativeRecordSetName **required** `string`: The name of the record set, relative to the name of the zone.
  * parameters **required** [RecordSet](#recordset)
  * If-Match `string`: The ETag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RecordSet](#recordset)

### RecordSets_CreateOrUpdate
Creates or updates a record set within a Private DNS zone.


```js
azure_privatedns.RecordSets_CreateOrUpdate({
  "resourceGroupName": "",
  "privateZoneName": "",
  "recordType": "",
  "relativeRecordSetName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * privateZoneName **required** `string`: The name of the Private DNS zone (without a terminating dot).
  * recordType **required** `string` (values: A, AAAA, CNAME, MX, PTR, SOA, SRV, TXT): The type of DNS record in this record set. Record sets of type SOA can be updated but not created (they are created when the Private DNS zone is created).
  * relativeRecordSetName **required** `string`: The name of the record set, relative to the name of the zone.
  * parameters **required** [RecordSet](#recordset)
  * If-Match `string`: The ETag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
  * If-None-Match `string`: Set to '*' to allow a new record set to be created, but to prevent updating an existing record set. Other values will be ignored.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RecordSet](#recordset)



## Definitions

### ARecord
* ARecord `object`: An A record.
  * ipv4Address `string`: The IPv4 address of this A record.

### AaaaRecord
* AaaaRecord `object`: An AAAA record.
  * ipv6Address `string`: The IPv6 address of this AAAA record.

### CloudError
* CloudError `object`: An error message
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: The body of an error message
  * code `string`: The error code
  * details `array`: Extra error information
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A description of what caused the error
  * target `string`: The target resource of the error message

### CnameRecord
* CnameRecord `object`: A CNAME record.
  * cname `string`: The canonical name for this CNAME record.

### MxRecord
* MxRecord `object`: An MX record.
  * exchange `string`: The domain name of the mail host for this MX record.
  * preference `integer`: The preference value for this MX record.

### PrivateZone
* PrivateZone `object`: Describes a Private DNS zone.
  * etag `string`: The ETag of the zone.
  * properties [PrivateZoneProperties](#privatezoneproperties)
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Example - '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateDnsZoneName}'.
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.

### PrivateZoneListResult
* PrivateZoneListResult `object`: The response to a Private DNS zone list operation.
  * nextLink `string`: The continuation token for the next page of results.
  * value `array`: Information about the Private DNS zones.
    * items [PrivateZone](#privatezone)

### PrivateZoneProperties
* PrivateZoneProperties `object`: Represents the properties of the Private DNS zone.
  * maxNumberOfRecordSets `integer`: The maximum number of record sets that can be created in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
  * maxNumberOfVirtualNetworkLinks `integer`: The maximum number of virtual networks that can be linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
  * maxNumberOfVirtualNetworkLinksWithRegistration `integer`: The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
  * numberOfRecordSets `integer`: The current number of record sets in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
  * numberOfVirtualNetworkLinks `integer`: The current number of virtual networks that are linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
  * numberOfVirtualNetworkLinksWithRegistration `integer`: The current number of virtual networks that are linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Failed, Canceled): The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.

### ProxyResource
* ProxyResource: The resource model definition for an ARM proxy resource.
  * id `string`: Fully qualified resource Id for the resource. Example - '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateDnsZoneName}'.
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.

### PtrRecord
* PtrRecord `object`: A PTR record.
  * ptrdname `string`: The PTR target domain name for this PTR record.

### RecordSet
* RecordSet `object`: Describes a DNS record set (a collection of DNS records with the same name and type) in a Private DNS zone.
  * etag `string`: The ETag of the record set.
  * id `string`: The ID of the record set.
  * name `string`: The name of the record set.
  * properties [RecordSetProperties](#recordsetproperties)
  * type `string`: The type of the record set.
  * id `string`: Fully qualified resource Id for the resource. Example - '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateDnsZoneName}'.
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.

### RecordSetListResult
* RecordSetListResult `object`: The response to a record set list operation.
  * nextLink `string`: The continuation token for the next page of results.
  * value `array`: Information about the record sets in the response.
    * items [RecordSet](#recordset)

### RecordSetProperties
* RecordSetProperties `object`: Represents the properties of the records in the record set.
  * aRecords `array`: The list of A records in the record set.
    * items [ARecord](#arecord)
  * aaaaRecords `array`: The list of AAAA records in the record set.
    * items [AaaaRecord](#aaaarecord)
  * cnameRecord [CnameRecord](#cnamerecord)
  * fqdn `string`: Fully qualified domain name of the record set.
  * isAutoRegistered `boolean`: Is the record set auto-registered in the Private DNS zone through a virtual network link?
  * metadata `object`: The metadata attached to the record set.
  * mxRecords `array`: The list of MX records in the record set.
    * items [MxRecord](#mxrecord)
  * ptrRecords `array`: The list of PTR records in the record set.
    * items [PtrRecord](#ptrrecord)
  * soaRecord [SoaRecord](#soarecord)
  * srvRecords `array`: The list of SRV records in the record set.
    * items [SrvRecord](#srvrecord)
  * ttl `integer`: The TTL (time-to-live) of the records in the record set.
  * txtRecords `array`: The list of TXT records in the record set.
    * items [TxtRecord](#txtrecord)

### Resource
* Resource `object`: The core properties of ARM resources
  * id `string`: Fully qualified resource Id for the resource. Example - '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateDnsZoneName}'.
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.

### SoaRecord
* SoaRecord `object`: An SOA record.
  * email `string`: The email contact for this SOA record.
  * expireTime `integer`: The expire time for this SOA record.
  * host `string`: The domain name of the authoritative name server for this SOA record.
  * minimumTtl `integer`: The minimum value for this SOA record. By convention this is used to determine the negative caching duration.
  * refreshTime `integer`: The refresh value for this SOA record.
  * retryTime `integer`: The retry time for this SOA record.
  * serialNumber `integer`: The serial number for this SOA record.

### SrvRecord
* SrvRecord `object`: An SRV record.
  * port `integer`: The port value for this SRV record.
  * priority `integer`: The priority value for this SRV record.
  * target `string`: The target domain name for this SRV record.
  * weight `integer`: The weight value for this SRV record.

### SubResource
* SubResource `object`: Reference to another subresource.
  * id `string`: Resource ID.

### TrackedResource
* TrackedResource `object`: The resource model definition for a ARM tracked top level resource
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Example - '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateDnsZoneName}'.
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.

### TxtRecord
* TxtRecord `object`: A TXT record.
  * value `array`: The text value of this TXT record.
    * items `string`

### VirtualNetworkLink
* VirtualNetworkLink `object`: Describes a link to virtual network for a Private DNS zone.
  * etag `string`: The ETag of the virtual network link.
  * properties [VirtualNetworkLinkProperties](#virtualnetworklinkproperties)
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Example - '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateDnsZoneName}'.
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.

### VirtualNetworkLinkListResult
* VirtualNetworkLinkListResult `object`: The response to a list virtual network link to Private DNS zone operation.
  * nextLink `string`: The continuation token for the next page of results.
  * value `array`: Information about the virtual network links to the Private DNS zones.
    * items [VirtualNetworkLink](#virtualnetworklink)

### VirtualNetworkLinkProperties
* VirtualNetworkLinkProperties `object`: Represents the properties of the Private DNS zone.
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Failed, Canceled): The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
  * registrationEnabled `boolean`: Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled?
  * virtualNetwork [SubResource](#subresource)
  * virtualNetworkLinkState `string` (values: InProgress, Completed): The status of the virtual network link to the Private DNS zone. Possible values are 'InProgress' and 'Done'. This is a read-only property and any attempt to set this value will be ignored.


