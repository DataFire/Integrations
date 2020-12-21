# @datafire/azure_applicationinsights_workbooktemplates_api

Client library for ApplicationInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_workbooktemplates_api
```
```js
let azure_applicationinsights_workbooktemplates_api = require('@datafire/azure_applicationinsights_workbooktemplates_api').create({
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

Azure Application Insights workbook template type.

## Actions

### WorkbookTemplates_ListByResourceGroup
Get all Workbook templates defined within a specified resource group.


```js
azure_applicationinsights_workbooktemplates_api.WorkbookTemplates_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [WorkbookTemplatesListResult](#workbooktemplateslistresult)

### WorkbookTemplates_Delete
Delete a workbook template.


```js
azure_applicationinsights_workbooktemplates_api.WorkbookTemplates_Delete({
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

### WorkbookTemplates_Get
Get a single workbook template by its resourceName.


```js
azure_applicationinsights_workbooktemplates_api.WorkbookTemplates_Get({
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
* output [WorkbookTemplate](#workbooktemplate)

### WorkbookTemplates_Update
Updates a workbook template that has already been added.


```js
azure_applicationinsights_workbooktemplates_api.WorkbookTemplates_Update({
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
  * WorkbookTemplateUpdateParameters [WorkbookTemplateUpdateParameters](#workbooktemplateupdateparameters)

#### Output
* output [WorkbookTemplate](#workbooktemplate)

### WorkbookTemplates_CreateOrUpdate
Create a new workbook template.


```js
azure_applicationinsights_workbooktemplates_api.WorkbookTemplates_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": "",
  "workbookTemplateProperties": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * api-version **required** `string`: The API version to use for this operation.
  * workbookTemplateProperties **required** [WorkbookTemplate](#workbooktemplate)

#### Output
* output [WorkbookTemplate](#workbooktemplate)



## Definitions

### ErrorFieldContract
* ErrorFieldContract `object`: Error Field contract.
  * code `string`: Property level error code.
  * message `string`: Human-readable representation of property-level error.
  * target `string`: Property name.

### WorkbookError
* WorkbookError `object`: Error message body that will indicate why the operation failed.
  * code `string`: Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response.
  * details `array`: The list of invalid fields send in request, in case of validation error.
    * items [ErrorFieldContract](#errorfieldcontract)
  * message `string`: Human-readable representation of the error.

### WorkbookTemplate
* WorkbookTemplate `object`: An Application Insights workbook template definition.
  * properties [WorkbookTemplateProperties](#workbooktemplateproperties)
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name.
  * tags `object`: Resource tags
  * type `string`: Azure resource type

### WorkbookTemplateGallery
* WorkbookTemplateGallery `object`: Gallery information for a workbook template.
  * category `string`: Category for the gallery.
  * name `string`: Name of the workbook template in the gallery.
  * order `integer`: Order of the template within the gallery.
  * resourceType `string`: Azure resource type supported by the gallery.
  * type `string`: Type of workbook supported by the workbook template.

### WorkbookTemplateLocalizedGallery
* WorkbookTemplateLocalizedGallery `object`: Localized template data and gallery information.
  * galleries `array`: Workbook galleries supported by the template.
    * items [WorkbookTemplateGallery](#workbooktemplategallery)
  * templateData `object`: Valid JSON object containing workbook template payload.

### WorkbookTemplateProperties
* WorkbookTemplateProperties `object`: Properties that contain a workbook template.
  * author `string`: Information about the author of the workbook template.
  * galleries **required** `array`: Workbook galleries supported by the template.
    * items [WorkbookTemplateGallery](#workbooktemplategallery)
  * localized `object`: Key value pair of localized gallery. Each key is the locale code of languages supported by the Azure portal.
  * priority `integer`: Priority of the template. Determines which template to open when a workbook gallery is opened in viewer mode.
  * templateData **required** `object`: Valid JSON object containing workbook template payload.

### WorkbookTemplateResource
* WorkbookTemplateResource `object`: An azure resource object
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name.
  * tags `object`: Resource tags
  * type `string`: Azure resource type

### WorkbookTemplateUpdateParameters
* WorkbookTemplateUpdateParameters `object`: The parameters that can be provided when updating workbook template.
  * properties [WorkbookTemplateProperties](#workbooktemplateproperties)
  * tags `object`: Resource tags

### WorkbookTemplatesListResult
* WorkbookTemplatesListResult `object`: WorkbookTemplate list result.
  * value `array`: An array of workbook templates.
    * items [WorkbookTemplate](#workbooktemplate)


