# @datafire/azure_arm_dns
The DNS Management Client.

## Operation: Zones_List
Lists the DNS zones in all resource groups in a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of DNS zones to return. If not specified, returns up to 100 zones."
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ZoneListResult"
}
```
## Operation: Zones_ListByResourceGroup
Lists the DNS zones within a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of record sets to return. If not specified, returns up to 100 record sets."
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ZoneListResult"
}
```
## Operation: Zones_Delete
Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation cannot be undone.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "zoneName": {
      "type": "string",
      "description": "The name of the DNS zone (without a terminating dot)."
    },
    "If-Match": {
      "type": "string",
      "description": "The etag of the DNS zone. Omit this value to always delete the current zone. Specify the last-seen etag value to prevent accidentally deleting any concurrent changes."
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "zoneName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ZoneDeleteResult"
}
```
## Operation: Zones_Get
Gets a DNS zone. Retrieves the zone properties, but not the record sets within the zone.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "zoneName": {
      "type": "string",
      "description": "The name of the DNS zone (without a terminating dot)."
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "zoneName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Zone"
}
```
## Operation: Zones_CreateOrUpdate
Creates or updates a DNS zone. Does not modify DNS records within the zone.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "zoneName": {
      "type": "string",
      "description": "The name of the DNS zone (without a terminating dot)."
    },
    "parameters": {
      "$ref": "#/definitions/Zone"
    },
    "If-Match": {
      "type": "string",
      "description": "The etag of the DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen etag value to prevent accidentally overwritting any concurrent changes."
    },
    "If-None-Match": {
      "type": "string",
      "description": "Set to '*' to allow a new DNS zone to be created, but to prevent updating an existing zone. Other values will be ignored."
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "zoneName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Zone"
}
```
## Operation: RecordSets_ListByDnsZone
Lists all record sets in a DNS zone.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "zoneName": {
      "type": "string",
      "description": "The name of the DNS zone (without a terminating dot)."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of record sets to return. If not specified, returns up to 100 record sets."
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "zoneName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RecordSetListResult"
}
```
## Operation: RecordSets_ListByType
Lists the record sets of a specified type in a DNS zone.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "zoneName": {
      "type": "string",
      "description": "The name of the DNS zone (without a terminating dot)."
    },
    "recordType": {
      "type": "string",
      "description": "The type of record sets to enumerate.",
      "enum": [
        "A",
        "AAAA",
        "CNAME",
        "MX",
        "NS",
        "PTR",
        "SOA",
        "SRV",
        "TXT"
      ]
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of record sets to return. If not specified, returns up to 100 record sets."
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "zoneName",
    "recordType",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RecordSetListResult"
}
```
## Operation: RecordSets_Delete
Deletes a record set from a DNS zone. This operation cannot be undone.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "zoneName": {
      "type": "string",
      "description": "The name of the DNS zone (without a terminating dot)."
    },
    "relativeRecordSetName": {
      "type": "string",
      "description": "The name of the record set, relative to the name of the zone."
    },
    "recordType": {
      "type": "string",
      "description": "The type of DNS record in this record set. Record sets of type SOA cannot be deleted (they are deleted when the DNS zone is deleted).",
      "enum": [
        "A",
        "AAAA",
        "CNAME",
        "MX",
        "NS",
        "PTR",
        "SOA",
        "SRV",
        "TXT"
      ]
    },
    "If-Match": {
      "type": "string",
      "description": "The etag of the record set. Omit this value to always delete the current record set. Specify the last-seen etag value to prevent accidentally deleting any concurrent changes."
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "zoneName",
    "relativeRecordSetName",
    "recordType",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: RecordSets_Get
Gets a record set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "zoneName": {
      "type": "string",
      "description": "The name of the DNS zone (without a terminating dot)."
    },
    "relativeRecordSetName": {
      "type": "string",
      "description": "The name of the record set, relative to the name of the zone."
    },
    "recordType": {
      "type": "string",
      "description": "The type of DNS record in this record set.",
      "enum": [
        "A",
        "AAAA",
        "CNAME",
        "MX",
        "NS",
        "PTR",
        "SOA",
        "SRV",
        "TXT"
      ]
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "zoneName",
    "relativeRecordSetName",
    "recordType",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RecordSet"
}
```
## Operation: RecordSets_Update
Updates a record set within a DNS zone.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "zoneName": {
      "type": "string",
      "description": "The name of the DNS zone (without a terminating dot)."
    },
    "relativeRecordSetName": {
      "type": "string",
      "description": "The name of the record set, relative to the name of the zone."
    },
    "recordType": {
      "type": "string",
      "description": "The type of DNS record in this record set.",
      "enum": [
        "A",
        "AAAA",
        "CNAME",
        "MX",
        "NS",
        "PTR",
        "SOA",
        "SRV",
        "TXT"
      ]
    },
    "parameters": {
      "$ref": "#/definitions/RecordSet"
    },
    "If-Match": {
      "type": "string",
      "description": "The etag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen etag value to prevent accidentally overwritting concurrent changes."
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "zoneName",
    "relativeRecordSetName",
    "recordType",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RecordSet"
}
```
## Operation: RecordSets_CreateOrUpdate
Creates or updates a record set within a DNS zone.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "zoneName": {
      "type": "string",
      "description": "The name of the DNS zone (without a terminating dot)."
    },
    "relativeRecordSetName": {
      "type": "string",
      "description": "The name of the record set, relative to the name of the zone."
    },
    "recordType": {
      "type": "string",
      "description": "The type of DNS record in this record set. Record sets of type SOA can be updated but not created (they are created when the DNS zone is created).",
      "enum": [
        "A",
        "AAAA",
        "CNAME",
        "MX",
        "NS",
        "PTR",
        "SOA",
        "SRV",
        "TXT"
      ]
    },
    "parameters": {
      "$ref": "#/definitions/RecordSet"
    },
    "If-Match": {
      "type": "string",
      "description": "The etag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen etag value to prevent accidentally overwritting any concurrent changes."
    },
    "If-None-Match": {
      "type": "string",
      "description": "Set to '*' to allow a new record set to be created, but to prevent updating an existing record set. Other values will be ignored."
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "zoneName",
    "relativeRecordSetName",
    "recordType",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RecordSet"
}
```
