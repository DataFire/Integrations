# @datafire/azure_addons_addons

Client library for Azure Addons Resource Provider

## Installation and Usage
```bash
npm install --save @datafire/azure_addons_addons
```
```js
let azure_addons_addons = require('@datafire/azure_addons_addons').create({
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
azure_addons_addons.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.

#### Output
* output [OperationList](#operationlist)

### CanonicalSupportPlanTypes_Get
Returns the Canonical Support Plans as well as whether they are enabled or not for the subscription.


```js
azure_addons_addons.CanonicalSupportPlanTypes_Get({
  "api-version": "",
  "subscriptionId": "",
  "providerName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * providerName **required** `string`: The support plan type. For now the only valid type is "canonical".

#### Output
* output [CanonicalSupportPlanStatus](#canonicalsupportplanstatus)

### SupportPlanTypes_Delete
Cancels the Canonical support plan of type {type} for the subscription.


```js
azure_addons_addons.SupportPlanTypes_Delete({
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
azure_addons_addons.SupportPlanTypes_Get({
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
azure_addons_addons.SupportPlanTypes_CreateOrUpdate({
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

### CanonicalSupportPlanProperties
* CanonicalSupportPlanProperties `object`: The properties of the Canonical support plan.
  * provisioningState `string` (values: Succeeded, Failed, Cancelled, Purchasing, Downgrading, Cancelling, Upgrading): The provisioning state of the resource.

### CanonicalSupportPlanResponseEnvelope
* CanonicalSupportPlanResponseEnvelope `object`: The status of the Canonical support plan.
  * id `string`: The id of the ARM resource, e.g. "/subscriptions/{id}/providers/Microsoft.Addons/supportProvider/{supportProviderName}/supportPlanTypes/{planTypeName}".
  * name `string`: The name of the Canonical support plan, i.e. "essential", "standard" or "advanced".
  * properties **required** [CanonicalSupportPlanProperties](#canonicalsupportplanproperties)
  * type `string`: Microsoft.Addons/supportProvider

### CanonicalSupportPlanStatus
* Canonical Support Plan Status `array`: Contains Canonical support plan status information.
  * items `object`
    * enabled `boolean`: Whether the support plan is enabled for this subscription.
    * supportPlanType `string` (values: essential, standard, advanced): Support plan type.
    * willEmitOneTimeChargeIfReEnabled `boolean`: This indicates that when this support plan is cancelled and then enabled that AddonsRP will emit a one-time charge.
    * willEmitOneTimeChargeWhenEnabled `boolean`: This indicates that when this support plan is enabled if AddonsRP will emit a one-time charge.

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


