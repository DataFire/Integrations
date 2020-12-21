# @datafire/azure_portal

Client library for portal

## Installation and Usage
```bash
npm install --save @datafire/azure_portal
```
```js
let azure_portal = require('@datafire/azure_portal').create({
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

Allows creation and deletion of Azure Shared Dashboards.

## Actions

### Operations_List
The Microsoft Portal operations API.


```js
azure_portal.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
* output [ResourceProviderOperationList](#resourceprovideroperationlist)

### Dashboards_ListBySubscription
Gets all the dashboards within a subscription.


```js
azure_portal.Dashboards_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
* output [DashboardListResult](#dashboardlistresult)

### Dashboards_ListByResourceGroup
Gets all the Dashboards within a resource group.


```js
azure_portal.Dashboards_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
* output [DashboardListResult](#dashboardlistresult)

### Dashboards_Delete
Deletes the Dashboard.


```js
azure_portal.Dashboards_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dashboardName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
  * resourceGroupName **required** `string`: The name of the resource group.
  * dashboardName **required** `string`: The name of the dashboard.
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
*Output schema unknown*

### Dashboards_Get
Gets the Dashboard.


```js
azure_portal.Dashboards_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dashboardName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
  * resourceGroupName **required** `string`: The name of the resource group.
  * dashboardName **required** `string`: The name of the dashboard.
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
* output [Dashboard](#dashboard)

### Dashboards_Update
Updates an existing Dashboard.


```js
azure_portal.Dashboards_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dashboardName": "",
  "api-version": "",
  "dashboard": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
  * resourceGroupName **required** `string`: The name of the resource group.
  * dashboardName **required** `string`: The name of the dashboard.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * dashboard **required** [PatchableDashboard](#patchabledashboard)

#### Output
* output [Dashboard](#dashboard)

### Dashboards_CreateOrUpdate
Creates or updates a Dashboard.


```js
azure_portal.Dashboards_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dashboardName": "",
  "api-version": "",
  "dashboard": {
    "location": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
  * resourceGroupName **required** `string`: The name of the resource group.
  * dashboardName **required** `string`: The name of the dashboard.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * dashboard **required** [Dashboard](#dashboard)

#### Output
* output [Dashboard](#dashboard)



## Definitions

### Dashboard
* Dashboard `object`: The shared dashboard resource definition.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * properties [DashboardProperties](#dashboardproperties)
  * tags `object`: Resource tags
  * type `string`: Resource type

### DashboardLens
* DashboardLens `object`: A dashboard lens.
  * metadata `object`: The dashboard len's metadata.
  * order **required** `integer`: The lens order.
  * parts **required** `object`: The dashboard parts.

### DashboardListResult
* DashboardListResult `object`: List of dashboards.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: The array of custom resource provider manifests.
    * items [Dashboard](#dashboard)

### DashboardParts
* DashboardParts `object`: A dashboard part.
  * metadata `object`: The dashboard part's metadata.
  * position **required** `object`: The dashboard's part position.
    * colSpan **required** `number`: The dashboard's part column span.
    * metadata `object`: The dashboard part's metadata.
    * rowSpan **required** `number`: The dashboard's part row span.
    * x **required** `number`: The dashboard's part x coordinate.
    * y **required** `number`: The dashboard's part y coordinate.

### DashboardProperties
* DashboardProperties `object`: The shared dashboard properties.
  * lenses `object`: The dashboard lenses.
  * metadata `object`: The dashboard metadata.

### ErrorDefinition
* ErrorDefinition `object`: Error definition.
  * code `string`: Service specific error code which serves as the substatus for the HTTP error code.
  * details `array`: Internal error details.
    * items [ErrorDefinition](#errordefinition)
  * message `string`: Description of the error.

### ErrorResponse
* ErrorResponse `object`: Error response.
  * error [ErrorDefinition](#errordefinition)

### PatchableDashboard
* PatchableDashboard `object`: The shared dashboard resource definition.
  * properties [DashboardProperties](#dashboardproperties)
  * tags `object`: Resource tags

### ResourceProviderOperation
* ResourceProviderOperation `object`: Supported operations of this resource provider.
  * display `object`: Display metadata associated with the operation.
    * description `string`: Description of this operation.
    * operation `string`: Type of operation: get, read, delete, etc.
    * provider `string`: Resource provider: Microsoft Custom Providers.
    * resource `string`: Resource on which the operation is performed.
  * isDataAction `string`: Indicates whether the operation applies to data-plane.
  * name `string`: Operation name, in format of {provider}/{resource}/{operation}

### ResourceProviderOperationList
* ResourceProviderOperationList `object`: Results of the request to list operations.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: List of operations supported by this resource provider.
    * items [ResourceProviderOperation](#resourceprovideroperation)


