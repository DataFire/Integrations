# @datafire/azure_monitor_guestdiagnosticsettingsassociation_api

Client library for Guest Diagnostic Settings Association

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_guestdiagnosticsettingsassociation_api
```
```js
let azure_monitor_guestdiagnosticsettingsassociation_api = require('@datafire/azure_monitor_guestdiagnosticsettingsassociation_api').create({
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

API to Add/Remove/List Guest Diagnostics Settings Association for Azure Resources

## Actions

### GuestDiagnosticsSettingsAssociation_List
Get a list of all guest diagnostic settings association in a subscription.


```js
azure_monitor_guestdiagnosticsettingsassociation_api.GuestDiagnosticsSettingsAssociation_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GuestDiagnosticSettingsAssociationList](#guestdiagnosticsettingsassociationlist)

### GuestDiagnosticsSettingsAssociation_ListByResourceGroup
Get a list of all guest diagnostic settings association in a resource group.


```js
azure_monitor_guestdiagnosticsettingsassociation_api.GuestDiagnosticsSettingsAssociation_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * subscriptionId **required** `string`: The Azure subscription Id.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GuestDiagnosticSettingsAssociationList](#guestdiagnosticsettingsassociationlist)

### GuestDiagnosticsSettingsAssociation_Delete
Delete guest diagnostics association settings.


```js
azure_monitor_guestdiagnosticsettingsassociation_api.GuestDiagnosticsSettingsAssociation_Delete({
  "resourceUri": "",
  "associationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The fully qualified ID of the resource, including the resource name and resource type.
  * associationName **required** `string`: The name of the diagnostic settings association.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### GuestDiagnosticsSettingsAssociation_Get
Gets guest diagnostics association settings.


```js
azure_monitor_guestdiagnosticsettingsassociation_api.GuestDiagnosticsSettingsAssociation_Get({
  "resourceUri": "",
  "associationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The fully qualified ID of the resource, including the resource name and resource type.
  * associationName **required** `string`: The name of the diagnostic settings association.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GuestDiagnosticSettingsAssociationResource](#guestdiagnosticsettingsassociationresource)

### GuestDiagnosticsSettingsAssociation_Update
Updates an existing guestDiagnosticsSettingsAssociation Resource. To update other fields use the CreateOrUpdate method


```js
azure_monitor_guestdiagnosticsettingsassociation_api.GuestDiagnosticsSettingsAssociation_Update({
  "resourceUri": "",
  "api-version": "",
  "associationName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The fully qualified ID of the resource, including the resource name and resource type.
  * api-version **required** `string`: Client Api Version.
  * associationName **required** `string`: The name of the diagnostic settings association.
  * parameters **required** [GuestDiagnosticSettingsAssociationResourcePatch](#guestdiagnosticsettingsassociationresourcepatch)

#### Output
* output [GuestDiagnosticSettingsAssociationResource](#guestdiagnosticsettingsassociationresource)

### GuestDiagnosticsSettingsAssociation_CreateOrUpdate
Creates or updates guest diagnostics settings association.


```js
azure_monitor_guestdiagnosticsettingsassociation_api.GuestDiagnosticsSettingsAssociation_CreateOrUpdate({
  "resourceUri": "",
  "associationName": "",
  "api-version": "",
  "diagnosticSettingsAssociation": {
    "properties": null
  }
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The fully qualified ID of the resource, including the resource name and resource type.
  * associationName **required** `string`: The name of the diagnostic settings association.
  * api-version **required** `string`: Client Api Version.
  * diagnosticSettingsAssociation **required** [GuestDiagnosticSettingsAssociationResource](#guestdiagnosticsettingsassociationresource)

#### Output
* output [GuestDiagnosticSettingsAssociationResource](#guestdiagnosticsettingsassociationresource)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### GuestDiagnosticSettingsAssociation
* GuestDiagnosticSettingsAssociation `object`: A guest diagnostic settings association.
  * guestDiagnosticSettingsName **required** `string`: The guest diagnostic settings name.

### GuestDiagnosticSettingsAssociationList
* GuestDiagnosticSettingsAssociationList `object`: A list of guest diagnostic settings association.
  * nextLink `string`: Provides the link to retrieve the next set of elements.
  * value `array`: The list of guest diagnostic settings association.
    * items [GuestDiagnosticSettingsAssociationResource](#guestdiagnosticsettingsassociationresource)

### GuestDiagnosticSettingsAssociationResource
* GuestDiagnosticSettingsAssociationResource `object`: Virtual machine guest diagnostic settings resource.
  * properties **required** [GuestDiagnosticSettingsAssociation](#guestdiagnosticsettingsassociation)
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### GuestDiagnosticSettingsAssociationResourcePatch
* GuestDiagnosticSettingsAssociationResourcePatch `object`: Guest diagnostic setting resource for patch operations
  * properties [GuestDiagnosticSettingsAssociation](#guestdiagnosticsettingsassociation)

### Resource
* Resource `object`: An azure resource object
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type


