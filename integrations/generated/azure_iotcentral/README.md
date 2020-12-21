# @datafire/azure_iotcentral

Client library for IotCentralClient

## Installation and Usage
```bash
npm install --save @datafire/azure_iotcentral
```
```js
let azure_iotcentral = require('@datafire/azure_iotcentral').create({
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

Use this API to manage IoT Central Applications in your Azure subscription.

## Actions

### Operations_List
Lists all of the available IoT Central application REST API operations.


```js
azure_iotcentral.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.

#### Output
* output [OperationListResult](#operationlistresult)

### Apps_ListBySubscription
Get all IoT Central Applications in a subscription.


```js
azure_iotcentral.Apps_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.

#### Output
* output [AppListResult](#applistresult)

### Apps_ListTemplates
Get all available application templates.


```js
azure_iotcentral.Apps_ListTemplates({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.

#### Output
* output [AppTemplatesResult](#apptemplatesresult)

### Apps_CheckNameAvailability
Check if an IoT Central application name is available.


```js
azure_iotcentral.Apps_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "operationInputs": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * operationInputs **required** [OperationInputs](#operationinputs)

#### Output
* output [AppAvailabilityInfo](#appavailabilityinfo)

### Apps_CheckSubdomainAvailability
Check if an IoT Central application subdomain is available.


```js
azure_iotcentral.Apps_CheckSubdomainAvailability({
  "api-version": "",
  "subscriptionId": "",
  "operationInputs": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * operationInputs **required** [OperationInputs](#operationinputs)

#### Output
* output [AppAvailabilityInfo](#appavailabilityinfo)

### Apps_ListByResourceGroup
Get all the IoT Central Applications in a resource group.


```js
azure_iotcentral.Apps_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT Central application.

#### Output
* output [AppListResult](#applistresult)

### Apps_Delete
Delete an IoT Central application.


```js
azure_iotcentral.Apps_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT Central application.
  * resourceName **required** `string`: The ARM resource name of the IoT Central application.

#### Output
*Output schema unknown*

### Apps_Get
Get the metadata of an IoT Central application.


```js
azure_iotcentral.Apps_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT Central application.
  * resourceName **required** `string`: The ARM resource name of the IoT Central application.

#### Output
* output [App](#app)

### Apps_Update
Update the metadata of an IoT Central application.


```js
azure_iotcentral.Apps_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "AppPatch": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT Central application.
  * resourceName **required** `string`: The ARM resource name of the IoT Central application.
  * AppPatch **required** [AppPatch](#apppatch)

#### Output
* output [App](#app)

### Apps_CreateOrUpdate
Create or update the metadata of an IoT Central application. The usual pattern to modify a property is to retrieve the IoT Central application metadata and security metadata, and then combine them with the modified values in a new body to update the IoT Central application.


```js
azure_iotcentral.Apps_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "App": {
    "sku": {
      "name": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT Central application.
  * resourceName **required** `string`: The ARM resource name of the IoT Central application.
  * App **required** [App](#app)

#### Output
* output [App](#app)



## Definitions

### App
* App `object`: The IoT Central application.
  * properties [AppProperties](#appproperties)
  * sku **required** [AppSkuInfo](#appskuinfo)
  * id `string`: The ARM resource identifier.
  * location **required** `string`: The resource location.
  * name `string`: The ARM resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### AppAvailabilityInfo
* AppAvailabilityInfo `object`: The properties indicating whether a given IoT Central application name or subdomain is available.
  * message `string`: The detailed reason message.
  * nameAvailable `boolean`: The value which indicates whether the provided name is available.
  * reason `string`: The reason for unavailability.

### AppListResult
* AppListResult `object`: A list of IoT Central Applications with a next link.
  * nextLink `string`: The link used to get the next page of IoT Central Applications.
  * value `array`: A list of IoT Central Applications.
    * items [App](#app)

### AppPatch
* AppPatch `object`: The description of the IoT Central application.
  * properties [AppProperties](#appproperties)
  * tags `object`: Instance tags

### AppProperties
* AppProperties `object`: The properties of an IoT Central application.
  * applicationId `string`: The ID of the application.
  * displayName `string`: The display name of the application.
  * subdomain `string`: The subdomain of the application.
  * template `string`: The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.

### AppSkuInfo
* AppSkuInfo `object`: Information about the SKU of the IoT Central application.
  * name **required** `string` (values: F1, S1, ST0, ST1, ST2): The name of the SKU.

### AppTemplate
* AppTemplate `object`: IoT Central Application Template.
  * appTemplateName `string`: The name of the template.
  * description `string`: The description of the template.
  * manifestId `string`: The ID of the template.
  * manifestVersion `string`: The version of the template.
  * order `number`: The order of the template in the templates list.
  * title `string`: The title of the template.

### AppTemplatesResult
* AppTemplatesResult `object`: A list of IoT Central Application Templates with a next link.
  * nextLink `string`: The link used to get the next page of IoT Central application templates.
  * value `array`: A list of IoT Central Application Templates.
    * items [AppTemplate](#apptemplate)

### ErrorDetails
* ErrorDetails `object`: Error details.
  * error [ErrorResponseBody](#errorresponsebody)

### ErrorResponseBody
* ErrorResponseBody `object`: Details of error response.
  * code `string`: The error code.
  * details `array`: A list of additional details about the error.
    * items [ErrorResponseBody](#errorresponsebody)
  * message `string`: The error message.
  * target `string`: The target of the particular error.

### Operation
* Operation `object`: IoT Central REST API operation
  * display [OperationDisplay](#operationdisplay)
  * name `string`: Operation name: {provider}/{resource}/{read | write | action | delete}

### OperationDisplay
* OperationDisplay `object`: The object that represents the operation.
  * description `string`: Friendly description for the operation,
  * operation `string`: Name of the operation
  * provider `string`: Service provider: Microsoft IoT Central
  * resource `string`: Resource Type: IoT Central

### OperationInputs
* OperationInputs `object`: Input values.
  * name **required** `string`: The name of the IoT Central application instance to check.
  * type `string`: The type of the IoT Central resource to query.

### OperationListResult
* OperationListResult `object`: A list of IoT Central operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: The link used to get the next page of IoT Central description objects.
  * value `array`: A list of operations supported by the Microsoft.IoTCentral resource provider.
    * items [Operation](#operation)

### Resource
* Resource `object`: The common properties of an ARM resource.
  * id `string`: The ARM resource identifier.
  * location **required** `string`: The resource location.
  * name `string`: The ARM resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.


