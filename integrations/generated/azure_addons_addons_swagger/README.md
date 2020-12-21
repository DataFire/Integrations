# @datafire/azure_addons_addons_swagger

Client library for Azure Addons Resource Provider

## Installation and Usage
```bash
npm install --save @datafire/azure_addons_addons_swagger
```
```js
let azure_addons_addons_swagger = require('@datafire/azure_addons_addons_swagger').create({
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

The service for managing third party addons.

## Actions

### Operations_List
Lists all of the available Addons RP operations.


```js
azure_addons_addons_swagger.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.

#### Output
* output [OperationList](#operationlist)

### SupportPlanTypes_ListInfo
Returns the canonical support plan information for all types for the subscription.


```js
azure_addons_addons_swagger.SupportPlanTypes_ListInfo({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [CanonicalSupportPlanInfo](#canonicalsupportplaninfo)

### SupportPlanTypes_Delete
Cancels the Canonical support plan of type {type} for the subscription.


```js
azure_addons_addons_swagger.SupportPlanTypes_Delete({
  "api-version": "",
  "subscriptionId": "",
  "providerName": "",
  "planTypeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * providerName **required** `string`: The support plan type. For now the only valid type is "canonical".
  * planTypeName **required** `string` (values: Essential, Standard, Advanced): The Canonical support plan type.

#### Output
* output [CanonicalSupportPlanResponseEnvelope](#canonicalsupportplanresponseenvelope)

### SupportPlanTypes_Get
Returns whether or not the canonical support plan of type {type} is enabled for the subscription.


```js
azure_addons_addons_swagger.SupportPlanTypes_Get({
  "api-version": "",
  "subscriptionId": "",
  "providerName": "",
  "planTypeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * providerName **required** `string`: The support plan type. For now the only valid type is "canonical".
  * planTypeName **required** `string` (values: Essential, Standard, Advanced): The Canonical support plan type.

#### Output
* output [CanonicalSupportPlanResponseEnvelope](#canonicalsupportplanresponseenvelope)

### SupportPlanTypes_CreateOrUpdate
Creates or updates the Canonical support plan of type {type} for the subscription.


```js
azure_addons_addons_swagger.SupportPlanTypes_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "providerName": "",
  "planTypeName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * providerName **required** `string`: The support plan type. For now the only valid type is "canonical".
  * planTypeName **required** `string` (values: Essential, Standard, Advanced): The Canonical support plan type.

#### Output
* output [CanonicalSupportPlanResponseEnvelope](#canonicalsupportplanresponseenvelope)



## Definitions

### CanonicalSupportPlanInfo
* Canonical Support Plan Info `array`: The status of all Canonical support plans for a subscription.
  * items [CanonicalSupportPlanInfoDefinition](#canonicalsupportplaninfodefinition)

### CanonicalSupportPlanInfoDefinition
* CanonicalSupportPlanInfoDefinition `object`: Definition object with the properties of a canonical plan
  * enabled `boolean`: Flag to indicate if this support plan type is currently enabled for the subscription.
  * oneTimeCharge `string` (values: no, onEnabled, onReenabled): The one time charge status for the subscription.
  * supportPlanType `string` (values: essential, standard, advanced): Support plan type.

### CanonicalSupportPlanProperties
* CanonicalSupportPlanProperties `object`: The properties of the Canonical support plan.
  * provisioningState `string` (values: Succeeded, Failed, Cancelled, Purchasing, Downgrading, Cancelling, Upgrading): The provisioning state of the resource.

### CanonicalSupportPlanResponseEnvelope
* CanonicalSupportPlanResponseEnvelope `object`: The status of the Canonical support plan.
  * id `string`: The id of the ARM resource, e.g. "/subscriptions/{id}/providers/Microsoft.Addons/supportProvider/{supportProviderName}/supportPlanTypes/{planTypeName}".
  * name `string`: The name of the Canonical support plan, i.e. "essential", "standard" or "advanced".
  * properties **required** [CanonicalSupportPlanProperties](#canonicalsupportplanproperties)
  * type `string`: Microsoft.Addons/supportProvider

### ErrorDefinition
* Error `object`: Error description and code explaining why an operation failed.
  * code **required** `integer`: Service specific error code which serves as the substatus for the HTTP error code.
  * message **required** `string`: Description of the error.

### OperationList
* OperationList `array`: List of supported operations.
  * items [OperationsDefinition](#operationsdefinition)

### OperationsDefinition
* OperationsDefinition `object`: Definition object with the name and properties of an operation.
  * display [OperationsDisplayDefinition](#operationsdisplaydefinition)
  * name `string`: Name of the operation.

### OperationsDisplayDefinition
* OperationsDisplayDefinition `object`: Display object with properties of the operation.
  * description `string`: Description of the operation.
  * operation `string`: Short description of the operation.
  * provider `string`: Resource provider of the operation.
  * resource `string`: Resource for the operation.


