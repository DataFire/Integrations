# @datafire/azure_arm_mobileengagement
Microsoft Azure Mobile Engagement REST APIs.

## Operation: AppCollections_List
Lists app collections in a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppCollectionListResult"
}
```
## Operation: AppCollections_CheckNameAvailability
Checks availability of an app collection name in the Engagement domain.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/AppCollectionNameAvailability"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppCollectionNameAvailability"
}
```
## Operation: SupportedPlatforms_List
Lists supported platforms for Engagement applications.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SupportedPlatformsListResult"
}
```
## Operation: Apps_List
Lists apps in an appCollection.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "resourceGroupName",
    "appCollection"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppListResult"
}
```
## Operation: Campaigns_List
Get the list of campaigns.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "kind": {
      "type": "string",
      "description": "Campaign kind.",
      "enum": [
        "announcements",
        "polls",
        "dataPushes",
        "nativePushes"
      ]
    },
    "$skip": {
      "type": "integer",
      "description": "Control paging of campaigns, start results at the given offset, defaults to 0 (1st page of data)."
    },
    "$top": {
      "type": "integer",
      "description": "Control paging of campaigns, number of campaigns to return with each call. It returns all campaigns by default. When specifying $top parameter, the response contains a `nextLink` property describing the path to get the next page if there are more results."
    },
    "$filter": {
      "type": "string",
      "description": "Filter can be used to restrict the results to campaigns matching a specific state. The syntax is `$filter=state eq 'draft'`. Valid state values are: draft, scheduled, in-progress, and finished. Only the eq operator and the state property are supported."
    },
    "$orderby": {
      "type": "string",
      "description": "Sort results by an expression which looks like `$orderby=id asc` (this example is actually the default behavior). The syntax is orderby={property} {direction} or just orderby={property}. The available sorting properties are id, name, state, activatedDate, and finishedDate. The available directions are asc (for ascending order) and desc (for descending order). When not specified the asc direction is used. Only one property at a time can be used for sorting."
    },
    "$search": {
      "type": "string",
      "description": "Restrict results to campaigns matching the optional `search` expression. This currently performs the search based on the name on the campaign only, case insensitive. If the campaign contains the value of the `search` parameter anywhere in the name, it matches."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "kind"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CampaignsListResult"
}
```
## Operation: Campaigns_Create
Create a push campaign (announcement, poll, data push or native push).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "kind": {
      "type": "string",
      "description": "Campaign kind.",
      "enum": [
        "announcements",
        "polls",
        "dataPushes",
        "nativePushes"
      ]
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/Campaign"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "kind",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CampaignStateResult"
}
```
## Operation: Campaigns_TestNew
Test a new campaign on a set of devices.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "kind": {
      "type": "string",
      "description": "Campaign kind.",
      "enum": [
        "announcements",
        "polls",
        "dataPushes",
        "nativePushes"
      ]
    },
    "parameters": {
      "$ref": "#/definitions/CampaignTestNewParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "kind",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CampaignState"
}
```
## Operation: Campaigns_Delete
Delete a campaign previously created by a call to Create campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "kind": {
      "type": "string",
      "description": "Campaign kind.",
      "enum": [
        "announcements",
        "polls",
        "dataPushes",
        "nativePushes"
      ]
    },
    "id": {
      "type": "integer",
      "description": "Campaign identifier."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "kind",
    "id",
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Campaigns_Get
The Get campaign operation retrieves information about a previously created campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "kind": {
      "type": "string",
      "description": "Campaign kind.",
      "enum": [
        "announcements",
        "polls",
        "dataPushes",
        "nativePushes"
      ]
    },
    "id": {
      "type": "integer",
      "description": "Campaign identifier."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "kind",
    "id",
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CampaignResult"
}
```
## Operation: Campaigns_Update
Update an existing push campaign (announcement, poll, data push or native push).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "kind": {
      "type": "string",
      "description": "Campaign kind.",
      "enum": [
        "announcements",
        "polls",
        "dataPushes",
        "nativePushes"
      ]
    },
    "id": {
      "type": "integer",
      "description": "Campaign identifier."
    },
    "parameters": {
      "$ref": "#/definitions/Campaign"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "kind",
    "id",
    "parameters",
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CampaignStateResult"
}
```
## Operation: Campaigns_Activate
Activate a campaign previously created by a call to Create campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "kind": {
      "type": "string",
      "description": "Campaign kind.",
      "enum": [
        "announcements",
        "polls",
        "dataPushes",
        "nativePushes"
      ]
    },
    "id": {
      "type": "integer",
      "description": "Campaign identifier."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "kind",
    "id",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CampaignStateResult"
}
```
## Operation: Campaigns_Finish
Finish a push campaign previously activated by a call to Activate campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "kind": {
      "type": "string",
      "description": "Campaign kind.",
      "enum": [
        "announcements",
        "polls",
        "dataPushes",
        "nativePushes"
      ]
    },
    "id": {
      "type": "integer",
      "description": "Campaign identifier."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "kind",
    "id",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CampaignStateResult"
}
```
## Operation: Campaigns_Push
Push a previously saved campaign (created with Create campaign) to a set of devices.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "kind": {
      "type": "string",
      "description": "Campaign kind.",
      "enum": [
        "announcements",
        "polls",
        "dataPushes",
        "nativePushes"
      ]
    },
    "id": {
      "type": "integer",
      "description": "Campaign identifier."
    },
    "parameters": {
      "$ref": "#/definitions/CampaignPushParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "kind",
    "id",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CampaignPushResult"
}
```
## Operation: Campaigns_GetStatistics
Get all the campaign statistics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "kind": {
      "type": "string",
      "description": "Campaign kind.",
      "enum": [
        "announcements",
        "polls",
        "dataPushes",
        "nativePushes"
      ]
    },
    "id": {
      "type": "integer",
      "description": "Campaign identifier."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "kind",
    "id",
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CampaignStatisticsResult"
}
```
## Operation: Campaigns_Suspend
Suspend a push campaign previously activated by a call to Activate campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "kind": {
      "type": "string",
      "description": "Campaign kind.",
      "enum": [
        "announcements",
        "polls",
        "dataPushes",
        "nativePushes"
      ]
    },
    "id": {
      "type": "integer",
      "description": "Campaign identifier."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "kind",
    "id",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CampaignStateResult"
}
```
## Operation: Campaigns_TestSaved
Test an existing campaign (created with Create campaign) on a set of devices.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "kind": {
      "type": "string",
      "description": "Campaign kind.",
      "enum": [
        "announcements",
        "polls",
        "dataPushes",
        "nativePushes"
      ]
    },
    "id": {
      "type": "integer",
      "description": "Campaign identifier."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/CampaignTestSavedParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "kind",
    "id",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CampaignStateResult"
}
```
## Operation: Campaigns_GetByName
The Get campaign operation retrieves information about a previously created campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "kind": {
      "type": "string",
      "description": "Campaign kind.",
      "enum": [
        "announcements",
        "polls",
        "dataPushes",
        "nativePushes"
      ]
    },
    "name": {
      "type": "string",
      "description": "Campaign name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "kind",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CampaignResult"
}
```
## Operation: Devices_List
Query the information associated to the devices running an application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "$top": {
      "type": "integer",
      "description": "Number of devices to return with each call. Defaults to 100 and cannot return more. Passing a greater value is ignored. The response contains a `nextLink` property describing the URI path to get the next page of results if not all results could be returned at once."
    },
    "$select": {
      "type": "string",
      "description": "By default all `meta` and `appInfo` properties are returned, this property is used to restrict the output to the desired properties. It also excludes all devices from the output that have none of the selected properties. In other terms, only devices having at least one of the selected property being set is part of the results. Examples: - `$select=appInfo` : select all devices having at least 1 appInfo, return them all and don’t return any meta property. - `$select=meta` : return only meta properties in the output. - `$select=appInfo,meta/firstSeen,meta/lastSeen` : return all `appInfo`, plus meta object containing only firstSeen and lastSeen properties. The format is thus a comma separated list of properties to select. Use `appInfo` to select all appInfo properties, `meta` to select all meta properties. Use `appInfo/{key}` and `meta/{key}` to select specific appInfo and meta properties."
    },
    "$filter": {
      "type": "string",
      "description": "Filter can be used to reduce the number of results. Filter is a boolean expression that can look like the following examples: * `$filter=deviceId gt 'abcdef0123456789abcdef0123456789'` * `$filter=lastModified le 1447284263690L` * `$filter=(deviceId ge 'abcdef0123456789abcdef0123456789') and (deviceId lt 'bacdef0123456789abcdef0123456789') and (lastModified gt 1447284263690L)` The first example is used automatically for paging when returning the `nextLink` property. The filter expression is a combination of checks on some properties that can be compared to their value. The available operators are: * `gt`  : greater than * `ge`  : greater than or equals * `lt`  : less than * `le`  : less than or equals * `and` : to add multiple checks (all checks must pass), optional parentheses can be used. The properties that can be used in the expression are the following: * `deviceId {operator} '{deviceIdValue}'` : a lexicographical comparison is made on the deviceId value, use single quotes for the value. * `lastModified {operator} {number}L` : returns only meta properties or appInfo properties whose last value modification timestamp compared to the specified value is matching (value is milliseconds since January 1st, 1970 UTC). Please note the `L` character after the number of milliseconds, its required when the number of milliseconds exceeds `2^31 - 1` (which is always the case for recent timestamps). Using `lastModified` excludes all devices from the output that have no property matching the timestamp criteria, like `$select`. Please note that the internal value of `lastModified` timestamp for a given property is never part of the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DevicesQueryResult"
}
```
## Operation: ExportTasks_List
Get the list of export tasks.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "$skip": {
      "type": "integer",
      "description": "Control paging of export tasks, start results at the given offset, defaults to 0 (1st page of data).",
      "minimum": 0
    },
    "$top": {
      "type": "integer",
      "description": "Control paging of export tasks, number of export tasks to return with each call. By default, it returns all export tasks with a default paging of 20.\nThe response contains a `nextLink` property describing the path to get the next page if there are more results.\nThe maximum paging limit for $top is 40.",
      "maximum": 40,
      "minimum": 1
    },
    "$orderby": {
      "type": "string",
      "description": "Sort results by an expression which looks like `$orderby=taskId asc` (default when not specified).\nThe syntax is orderby={property} {direction} or just orderby={property}.\nProperties that can be specified for sorting: taskId, errorDetails, dateCreated, taskStatus, and dateCreated.\nThe available directions are asc (for ascending order) and desc (for descending order).\nWhen not specified the asc direction is used.\nOnly one orderby property can be specified."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/exportTaskListResult"
}
```
## Operation: ExportTasks_CreateActivitiesTask
Creates a task to export activities.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/dateRangeExportTaskParameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/exportTaskResult"
}
```
## Operation: ExportTasks_CreateCrashesTask
Creates a task to export crashes.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/dateRangeExportTaskParameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/exportTaskResult"
}
```
## Operation: ExportTasks_CreateErrorsTask
Creates a task to export errors.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/dateRangeExportTaskParameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/exportTaskResult"
}
```
## Operation: ExportTasks_CreateEventsTask
Creates a task to export events.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/dateRangeExportTaskParameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/exportTaskResult"
}
```
## Operation: ExportTasks_CreateFeedbackTaskByCampaign
Creates a task to export push campaign data for a set of campaigns.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/feedbackByCampaignParameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/exportTaskResult"
}
```
## Operation: ExportTasks_CreateFeedbackTaskByDateRange
Creates a task to export push campaign data for a date range.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/feedbackByDateRangeParameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/exportTaskResult"
}
```
## Operation: ExportTasks_CreateJobsTask
Creates a task to export jobs.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/dateRangeExportTaskParameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/exportTaskResult"
}
```
## Operation: ExportTasks_CreateSessionsTask
Creates a task to export sessions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/dateRangeExportTaskParameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/exportTaskResult"
}
```
## Operation: ExportTasks_CreateTagsTask
Creates a task to export tags.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/exportTaskParameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/exportTaskResult"
}
```
## Operation: ExportTasks_CreateTokensTask
Creates a task to export tags.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/exportTaskParameter"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/exportTaskResult"
}
```
## Operation: ExportTasks_Get
Retrieves information about a previously created export task.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "id": {
      "type": "string",
      "description": "Export task identifier."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/exportTaskResult"
}
```
## Operation: ImportTasks_List
Get the list of import jobs.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "$skip": {
      "type": "integer",
      "description": "Control paging of import jobs, start results at the given offset, defaults to 0 (1st page of data).",
      "minimum": 0
    },
    "$top": {
      "type": "integer",
      "description": "Control paging of import jobs, number of import jobs to return with each call. By default, it returns all import jobs with a default paging of 20.\nThe response contains a `nextLink` property describing the path to get the next page if there are more results.\nThe maximum paging limit for $top is 40.",
      "maximum": 40,
      "minimum": 1
    },
    "$orderby": {
      "type": "string",
      "description": "Sort results by an expression which looks like `$orderby=jobId asc` (default when not specified).\nThe syntax is orderby={property} {direction} or just orderby={property}.\nProperties that can be specified for sorting: jobId, errorDetails, dateCreated, jobStatus, and dateCreated.\nThe available directions are asc (for ascending order) and desc (for descending order).\nWhen not specified the asc direction is used.\nOnly one orderby property can be specified."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/importTaskListResult"
}
```
## Operation: ImportTasks_Create
Creates a job to import the specified data to a storageUrl.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/importTask"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/importTaskResult"
}
```
## Operation: ImportTasks_Get
The Get import job operation retrieves information about a previously created import job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Import job identifier."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/importTaskResult"
}
```
## Operation: Devices_TagByDeviceId
Update the tags registered for a set of devices running an application. Updates are performed asynchronously, meaning that a few seconds are needed before the modifications appear in the results of the Get device command.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/DeviceTagsParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeviceTagsResult"
}
```
## Operation: Devices_GetByDeviceId
Get the information associated to a device running an application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "deviceId": {
      "type": "string",
      "description": "Device identifier."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "deviceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Device"
}
```
## Operation: Devices_TagByUserId
Update the tags registered for a set of users running an application. Updates are performed asynchronously, meaning that a few seconds are needed before the modifications appear in the results of the Get device command.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "parameters": {
      "$ref": "#/definitions/DeviceTagsParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeviceTagsResult"
}
```
## Operation: Devices_GetByUserId
Get the information associated to a device running an application using the user identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "appCollection": {
      "type": "string",
      "description": "Application collection."
    },
    "appName": {
      "type": "string",
      "description": "Application resource name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "userId": {
      "type": "string",
      "description": "User identifier."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "appCollection",
    "appName",
    "api-version",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Device"
}
```
