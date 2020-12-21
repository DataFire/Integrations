# @datafire/azure_applicationinsights_workbooks_api

Client library for ApplicationInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_workbooks_api
```
```js
let azure_applicationinsights_workbooks_api = require('@datafire/azure_applicationinsights_workbooks_api').create({
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

Azure Application Insights workbook type.

## Actions

### Workbooks_ListByResourceGroup
Get all Workbooks defined within a specified resource group and category.


```js
azure_applicationinsights_workbooks_api.Workbooks_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "category": "",
  "sourceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * category **required** `string` (values: workbook, TSG, performance, retention): Category of workbook to return.
  * tags `array`: Tags presents on each workbook returned.
  * sourceId **required** `string`: Azure Resource Id that will fetch all related workbooks.
  * canFetchContent `boolean`: Flag indicating whether or not to return the full content for each applicable workbook. If false, only return summary content for workbooks.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [WorkbooksListResult](#workbookslistresult)

### Workbooks_Delete
Delete a workbook.


```js
azure_applicationinsights_workbooks_api.Workbooks_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### Workbooks_Get
Get a single workbook by its resourceName.


```js
azure_applicationinsights_workbooks_api.Workbooks_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [Workbook](#workbook)

### Workbooks_Update
Updates a workbook that has already been added.


```js
azure_applicationinsights_workbooks_api.Workbooks_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "sourceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * sourceId **required** `string`: Azure Resource Id that will fetch all related workbooks.
  * api-version **required** `string`: The API version to use for this operation.
  * WorkbookUpdateParameters [WorkbookUpdateParameters](#workbookupdateparameters)

#### Output
* output [Workbook](#workbook)

### Workbooks_CreateOrUpdate
Create a new workbook.


```js
azure_applicationinsights_workbooks_api.Workbooks_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "sourceId": "",
  "api-version": "",
  "workbookProperties": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * sourceId **required** `string`: Azure Resource Id that will fetch all related workbooks.
  * api-version **required** `string`: The API version to use for this operation.
  * workbookProperties **required** [Workbook](#workbook)

#### Output
* output [Workbook](#workbook)



## Definitions

### ErrorFieldContract
* ErrorFieldContract `object`: Error Field contract.
  * code `string`: Property level error code.
  * message `string`: Human-readable representation of property-level error.
  * target `string`: Property name.

### Resource
* Resource `object`: An azure resource object
  * id `string`: Azure resource Id
  * kind `string` (values: user, shared): The kind of workbook. Choices are user and shared.
  * location **required** `string`: Resource location
  * name `string`: Azure resource name. This is GUID value. The display name should be assigned within properties field.
  * tags `object`: Resource tags
  * type `string`: Azure resource type

### Workbook
* Workbook `object`: An Application Insights workbook definition.
  * properties [WorkbookProperties](#workbookproperties)
  * id `string`: Azure resource Id
  * kind `string` (values: user, shared): The kind of workbook. Choices are user and shared.
  * location **required** `string`: Resource location
  * name `string`: Azure resource name. This is GUID value. The display name should be assigned within properties field.
  * tags `object`: Resource tags
  * type `string`: Azure resource type

### WorkbookError
* WorkbookError `object`: Error message body that will indicate why the operation failed.
  * code `string`: Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response.
  * details `array`: The list of invalid fields send in request, in case of validation error.
    * items [ErrorFieldContract](#errorfieldcontract)
  * message `string`: Human-readable representation of the error.

### WorkbookProperties
* WorkbookProperties `object`: Properties that contain a workbook.
  * category **required** `string`: Workbook category, as defined by the user at creation time.
  * displayName **required** `string`: The user-defined name (display name) of the workbook.
  * serializedData **required** `string`: Configuration of this particular workbook. Configuration data is a string containing valid JSON
  * tags `array`: A list of 0 or more tags that are associated with this workbook definition
    * items `string`
  * timeModified `string`: Date and time in UTC of the last modification that was made to this workbook definition.
  * userId **required** `string`: Unique user id of the specific user that owns this workbook.
  * version `string`: Workbook version

### WorkbookPropertiesUpdateParameters
* WorkbookPropertiesUpdateParameters `object`: Properties that contain a workbook for PATCH operation.
  * category `string`: Workbook category, as defined by the user at creation time.
  * displayName `string`: The user-defined name (display name) of the workbook.
  * serializedData `string`: Configuration of this particular workbook. Configuration data is a string containing valid JSON
  * tags `array`: A list of 0 or more tags that are associated with this workbook definition
    * items `string`

### WorkbookUpdateParameters
* WorkbookUpdateParameters `object`: The parameters that can be provided when updating workbook properties properties.
  * kind `string` (values: user, shared): The kind of workbook. Choices are user and shared.
  * properties [WorkbookPropertiesUpdateParameters](#workbookpropertiesupdateparameters)
  * tags `object`: Resource tags

### WorkbooksListResult
* WorkbooksListResult `object`: Workbook list result.
  * value `array`: An array of workbooks.
    * items [Workbook](#workbook)


