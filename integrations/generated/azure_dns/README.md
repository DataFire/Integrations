# @datafire/azure_dns

Client library for DnsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_dns
```
```js
let azure_dns = require('@datafire/azure_dns').create({
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

The DNS Management Client.

## Actions

### Zones_List
Lists the DNS zones in all resource groups in a subscription.


```js
azure_dns.Zones_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $top `integer`: The maximum number of DNS zones to return. If not specified, returns up to 100 zones.
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [ZoneListResult](#zonelistresult)

### DnsResourceReference_GetByTargetResources
Returns the DNS records specified by the referencing targetResourceIds.


```js
azure_dns.DnsResourceReference_GetByTargetResources({
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
  * parameters **required** [DnsResourceReferenceRequest](#dnsresourcereferencerequest)

#### Output
* output [DnsResourceReferenceResult](#dnsresourcereferenceresult)

### Zones_ListByResourceGroup
Lists the DNS zones within a resource group.


```js
azure_dns.Zones_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * $top `integer`: The maximum number of record sets to return. If not specified, returns up to 100 record sets.
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [ZoneListResult](#zonelistresult)

### Zones_Delete
Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation cannot be undone.


```js
azure_dns.Zones_Delete({
  "resourceGroupName": "",
  "zoneName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * If-Match `string`: The etag of the DNS zone. Omit this value to always delete the current zone. Specify the last-seen etag value to prevent accidentally deleting any concurrent changes.
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
*Output schema unknown*

### Zones_Get
Gets a DNS zone. Retrieves the zone properties, but not the record sets within the zone.


```js
azure_dns.Zones_Get({
  "resourceGroupName": "",
  "zoneName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [Zone](#zone)

### Zones_Update
Updates a DNS zone. Does not modify DNS records within the zone.


```js
azure_dns.Zones_Update({
  "resourceGroupName": "",
  "zoneName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * parameters **required** [ZoneUpdate](#zoneupdate)
  * If-Match `string`: The etag of the DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen etag value to prevent accidentally overwriting any concurrent changes.
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [Zone](#zone)

### Zones_CreateOrUpdate
Creates or updates a DNS zone. Does not modify DNS records within the zone.


```js
azure_dns.Zones_CreateOrUpdate({
  "resourceGroupName": "",
  "zoneName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * parameters **required** [Zone](#zone)
  * If-Match `string`: The etag of the DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen etag value to prevent accidentally overwriting any concurrent changes.
  * If-None-Match `string`: Set to '*' to allow a new DNS zone to be created, but to prevent updating an existing zone. Other values will be ignored.
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [Zone](#zone)

### RecordSets_ListAllByDnsZone
Lists all record sets in a DNS zone.


```js
azure_dns.RecordSets_ListAllByDnsZone({
  "resourceGroupName": "",
  "zoneName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * $top `integer`: The maximum number of record sets to return. If not specified, returns up to 100 record sets.
  * $recordsetnamesuffix `string`: The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix>
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [RecordSetListResult](#recordsetlistresult)

### RecordSets_ListByDnsZone
Lists all record sets in a DNS zone.


```js
azure_dns.RecordSets_ListByDnsZone({
  "resourceGroupName": "",
  "zoneName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * $top `integer`: The maximum number of record sets to return. If not specified, returns up to 100 record sets.
  * $recordsetnamesuffix `string`: The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix>
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [RecordSetListResult](#recordsetlistresult)

### RecordSets_ListByType
Lists the record sets of a specified type in a DNS zone.


```js
azure_dns.RecordSets_ListByType({
  "resourceGroupName": "",
  "zoneName": "",
  "recordType": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * recordType **required** `string` (values: A, AAAA, CAA, CNAME, MX, NS, PTR, SOA, SRV, TXT): The type of record sets to enumerate.
  * $top `integer`: The maximum number of record sets to return. If not specified, returns up to 100 record sets.
  * $recordsetnamesuffix `string`: The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix>
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [RecordSetListResult](#recordsetlistresult)

### RecordSets_Delete
Deletes a record set from a DNS zone. This operation cannot be undone.


```js
azure_dns.RecordSets_Delete({
  "resourceGroupName": "",
  "zoneName": "",
  "relativeRecordSetName": "",
  "recordType": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * relativeRecordSetName **required** `string`: The name of the record set, relative to the name of the zone.
  * recordType **required** `string` (values: A, AAAA, CAA, CNAME, MX, NS, PTR, SOA, SRV, TXT): The type of DNS record in this record set. Record sets of type SOA cannot be deleted (they are deleted when the DNS zone is deleted).
  * If-Match `string`: The etag of the record set. Omit this value to always delete the current record set. Specify the last-seen etag value to prevent accidentally deleting any concurrent changes.
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
*Output schema unknown*

### RecordSets_Get
Gets a record set.


```js
azure_dns.RecordSets_Get({
  "resourceGroupName": "",
  "zoneName": "",
  "relativeRecordSetName": "",
  "recordType": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * relativeRecordSetName **required** `string`: The name of the record set, relative to the name of the zone.
  * recordType **required** `string` (values: A, AAAA, CAA, CNAME, MX, NS, PTR, SOA, SRV, TXT): The type of DNS record in this record set.
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [RecordSet](#recordset)

### RecordSets_Update
Updates a record set within a DNS zone.


```js
azure_dns.RecordSets_Update({
  "resourceGroupName": "",
  "zoneName": "",
  "relativeRecordSetName": "",
  "recordType": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * relativeRecordSetName **required** `string`: The name of the record set, relative to the name of the zone.
  * recordType **required** `string` (values: A, AAAA, CAA, CNAME, MX, NS, PTR, SOA, SRV, TXT): The type of DNS record in this record set.
  * parameters **required** [RecordSet](#recordset)
  * If-Match `string`: The etag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen etag value to prevent accidentally overwriting concurrent changes.
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [RecordSet](#recordset)

### RecordSets_CreateOrUpdate
Creates or updates a record set within a DNS zone.


```js
azure_dns.RecordSets_CreateOrUpdate({
  "resourceGroupName": "",
  "zoneName": "",
  "relativeRecordSetName": "",
  "recordType": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * relativeRecordSetName **required** `string`: The name of the record set, relative to the name of the zone.
  * recordType **required** `string` (values: A, AAAA, CAA, CNAME, MX, NS, PTR, SOA, SRV, TXT): The type of DNS record in this record set. Record sets of type SOA can be updated but not created (they are created when the DNS zone is created).
  * parameters **required** [RecordSet](#recordset)
  * If-Match `string`: The etag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen etag value to prevent accidentally overwriting any concurrent changes.
  * If-None-Match `string`: Set to '*' to allow a new record set to be created, but to prevent updating an existing record set. Other values will be ignored.
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [RecordSet](#recordset)



## Definitions

### ARecord
* ARecord `object`: An A record.
  * ipv4Address `string`: The IPv4 address of this A record.

### AaaaRecord
* AaaaRecord `object`: An AAAA record.
  * ipv6Address `string`: The IPv6 address of this AAAA record.

### CaaRecord
* CaaRecord `object`: A CAA record.
  * flags `integer`: The flags for this CAA record as an integer between 0 and 255.
  * tag `string`: The tag for this CAA record.
  * value `string`: The value for this CAA record.

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

### DnsResourceReference
* DnsResourceReference `object`: Represents a single Azure resource and its referencing DNS records.
  * dnsResources `array`: A list of dns Records 
    * items [SubResource](#subresource)
  * targetResource [SubResource](#subresource)

### DnsResourceReferenceRequest
* DnsResourceReferenceRequest `object`: Represents the properties of the Dns Resource Reference Request.
  * properties [DnsResourceReferenceRequestProperties](#dnsresourcereferencerequestproperties)

### DnsResourceReferenceRequestProperties
* DnsResourceReferenceRequestProperties `object`: Represents the properties of the Dns Resource Reference Request.
  * targetResources `array`: A list of references to azure resources for which referencing dns records need to be queried.
    * items [SubResource](#subresource)

### DnsResourceReferenceResult
* DnsResourceReferenceResult `object`: Represents the properties of the Dns Resource Reference Result.
  * properties [DnsResourceReferenceResultProperties](#dnsresourcereferenceresultproperties)

### DnsResourceReferenceResultProperties
* DnsResourceReferenceResultProperties `object`: The result of dns resource reference request. Returns a list of dns resource references for each of the azure resource in the request.
  * dnsResourceReferences `array`: The result of dns resource reference request. A list of dns resource references for each of the azure resource in the request
    * items [DnsResourceReference](#dnsresourcereference)

### MxRecord
* MxRecord `object`: An MX record.
  * exchange `string`: The domain name of the mail host for this MX record.
  * preference `integer`: The preference value for this MX record.

### NsRecord
* NsRecord `object`: An NS record.
  * nsdname `string`: The name server name for this NS record.

### PtrRecord
* PtrRecord `object`: A PTR record.
  * ptrdname `string`: The PTR target domain name for this PTR record.

### RecordSet
* RecordSet `object`: Describes a DNS record set (a collection of DNS records with the same name and type).
  * etag `string`: The etag of the record set.
  * id `string`: The ID of the record set.
  * name `string`: The name of the record set.
  * properties [RecordSetProperties](#recordsetproperties)
  * type `string`: The type of the record set.

### RecordSetListResult
* RecordSetListResult `object`: The response to a record set List operation.
  * nextLink `string`: The continuation token for the next page of results.
  * value `array`: Information about the record sets in the response.
    * items [RecordSet](#recordset)

### RecordSetProperties
* RecordSetProperties `object`: Represents the properties of the records in the record set.
  * AAAARecords `array`: The list of AAAA records in the record set.
    * items [AaaaRecord](#aaaarecord)
  * ARecords `array`: The list of A records in the record set.
    * items [ARecord](#arecord)
  * CNAMERecord [CnameRecord](#cnamerecord)
  * MXRecords `array`: The list of MX records in the record set.
    * items [MxRecord](#mxrecord)
  * NSRecords `array`: The list of NS records in the record set.
    * items [NsRecord](#nsrecord)
  * PTRRecords `array`: The list of PTR records in the record set.
    * items [PtrRecord](#ptrrecord)
  * SOARecord [SoaRecord](#soarecord)
  * SRVRecords `array`: The list of SRV records in the record set.
    * items [SrvRecord](#srvrecord)
  * TTL `integer`: The TTL (time-to-live) of the records in the record set.
  * TXTRecords `array`: The list of TXT records in the record set.
    * items [TxtRecord](#txtrecord)
  * caaRecords `array`: The list of CAA records in the record set.
    * items [CaaRecord](#caarecord)
  * fqdn `string`: Fully qualified domain name of the record set.
  * metadata `object`: The metadata attached to the record set.
  * provisioningState `string`: provisioning State of the record set.
  * targetResource [SubResource](#subresource)

### RecordSetUpdateParameters
* RecordSetUpdateParameters `object`: Parameters supplied to update a record set.
  * RecordSet [RecordSet](#recordset)

### Resource
* Resource `object`: Common properties of an Azure Resource Manager resource
  * id `string`: Resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### SoaRecord
* SoaRecord `object`: An SOA record.
  * email `string`: The email contact for this SOA record.
  * expireTime `integer`: The expire time for this SOA record.
  * host `string`: The domain name of the authoritative name server for this SOA record.
  * minimumTTL `integer`: The minimum value for this SOA record. By convention this is used to determine the negative caching duration.
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
* SubResource `object`: A reference to a another resource
  * id `string`: Resource Id.

### TxtRecord
* TxtRecord `object`: A TXT record.
  * value `array`: The text value of this TXT record.
    * items `string`

### Zone
* Zone `object`: Describes a DNS zone.
  * etag `string`: The etag of the zone.
  * properties [ZoneProperties](#zoneproperties)
  * id `string`: Resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ZoneListResult
* ZoneListResult `object`: The response to a Zone List or ListAll operation.
  * nextLink `string`: The continuation token for the next page of results.
  * value `array`: Information about the DNS zones.
    * items [Zone](#zone)

### ZoneProperties
* ZoneProperties `object`: Represents the properties of the zone.
  * maxNumberOfRecordSets `integer`: The maximum number of record sets that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
  * nameServers `array`: The name servers for this DNS zone. This is a read-only property and any attempt to set this value will be ignored.
    * items `string`
  * numberOfRecordSets `integer`: The current number of record sets in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
  * registrationVirtualNetworks `array`: A list of references to virtual networks that register hostnames in this DNS zone. This is a only when ZoneType is Private.
    * items [SubResource](#subresource)
  * resolutionVirtualNetworks `array`: A list of references to virtual networks that resolve records in this DNS zone. This is a only when ZoneType is Private.
    * items [SubResource](#subresource)
  * zoneType `string` (values: Public, Private): The type of this DNS zone (Public or Private).

### ZoneUpdate
* ZoneUpdate `object`: Describes a request to update a DNS zone.
  * tags `object`: Resource tags.


