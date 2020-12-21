# @datafire/azure_softwareplan

Client library for Software Plan RP

## Installation and Usage
```bash
npm install --save @datafire/azure_softwareplan
```
```js
let azure_softwareplan = require('@datafire/azure_softwareplan').create({
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

Azure software plans let users create and manage licenses for various software used in Azure.

## Actions

### SoftwarePlan_Register
Register to Microsoft.SoftwarePlan resource provider.


```js
azure_softwareplan.SoftwarePlan_Register({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * api-version **required** `string`: The api-version to be used by the service

#### Output
*Output schema unknown*

### HybridUseBenefit_List
Get all hybrid use benefits associated with an ARM resource.


```js
azure_softwareplan.HybridUseBenefit_List({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
  * api-version **required** `string`: The api-version to be used by the service
  * $filter `string`: Supports applying filter on the type of SKU

#### Output
* output [HybridUseBenefitListResult](#hybridusebenefitlistresult)

### HybridUseBenefit_Delete
Deletes a given plan ID


```js
azure_softwareplan.HybridUseBenefit_Delete({
  "scope": "",
  "planId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
  * planId **required** `string`: This is a unique identifier for a plan. Should be a guid.
  * api-version **required** `string`: The api-version to be used by the service

#### Output
*Output schema unknown*

### HybridUseBenefit_Get
Gets a given plan ID


```js
azure_softwareplan.HybridUseBenefit_Get({
  "scope": "",
  "planId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
  * planId **required** `string`: This is a unique identifier for a plan. Should be a guid.
  * api-version **required** `string`: The api-version to be used by the service

#### Output
* output [HybridUseBenefitModel](#hybridusebenefitmodel)

### HybridUseBenefit_Update
Updates an existing hybrid use benefit


```js
azure_softwareplan.HybridUseBenefit_Update({
  "scope": "",
  "planId": "",
  "api-version": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
  * planId **required** `string`: This is a unique identifier for a plan. Should be a guid.
  * api-version **required** `string`: The api-version to be used by the service
  * body **required** [HybridUseBenefitModel](#hybridusebenefitmodel)

#### Output
* output [HybridUseBenefitModel](#hybridusebenefitmodel)

### HybridUseBenefit_Create
Create a new hybrid use benefit under a given scope


```js
azure_softwareplan.HybridUseBenefit_Create({
  "scope": "",
  "planId": "",
  "api-version": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
  * planId **required** `string`: This is a unique identifier for a plan. Should be a guid.
  * api-version **required** `string`: The api-version to be used by the service
  * body **required** [HybridUseBenefitModel](#hybridusebenefitmodel)

#### Output
* output [HybridUseBenefitModel](#hybridusebenefitmodel)

### HybridUseBenefitRevision_List
Gets the version history of a hybrid use benefit


```js
azure_softwareplan.HybridUseBenefitRevision_List({
  "scope": "",
  "planId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
  * planId **required** `string`: This is a unique identifier for a plan. Should be a guid.
  * api-version **required** `string`: The api-version to be used by the service

#### Output
* output [HybridUseBenefitListResult](#hybridusebenefitlistresult)

### Operations_List
List all the operations.


```js
azure_softwareplan.Operations_List({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
  * api-version **required** `string`: The api-version to be used by the service

#### Output
* output [OperationList](#operationlist)



## Definitions

### Error
* Error `object`: Error object returned by the RP
  * code [ErrorCode](#errorcode)
  * message `string`: A user readable error message. Localized based on x-ms-effective-locale header in the request

### ErrorCode
* ErrorCode `string` (values: InvalidRequestParameter, MissingRequestParameter): Defined error codes to be returned to the client.

### HybridUseBenefitListResult
* HybridUseBenefitListResult `object`: List of hybrid use benefits
  * nextLink `string`: Url to get the next page of items.
  * value `array`: List of hybrid use benefits
    * items [HybridUseBenefitModel](#hybridusebenefitmodel)

### HybridUseBenefitModel
* HybridUseBenefitModel `object`: Response on GET of a hybrid use benefit
  * etag `integer`: Indicates the revision of the hybrid use benefit
  * properties [HybridUseBenefitProperties](#hybridusebenefitproperties)
  * sku **required** [Sku](#sku)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### HybridUseBenefitProperties
* HybridUseBenefitProperties `object`: Hybrid use benefit properties
  * createdDate `string`: Created date
  * lastUpdatedDate `string`: Last updated date
  * provisioningState [ProvisioningState](#provisioningstate)

### OperationDisplay
* OperationDisplay `object`: Display fields for an operation.
  * description `string`: Description of the operation
  * operation `string`: Operation to be performed
  * provider `string`: Resource Provider name
  * resource `string`: Resource that is acted upon

### OperationList
* OperationList `object`: List all the operations.
  * nextLink `string`: Url to get the next page of items.
  * value `array`: List of all operations
    * items [OperationResponse](#operationresponse)

### OperationResponse
* OperationResponse `object`: Operation response.
  * display [OperationDisplay](#operationdisplay)
  * name `string`: Name of the operation
  * origin `string`: Origin of the response

### ProvisioningState
* ProvisioningState `string` (values: Succeeded, Cancelled, Failed): Represent the current state of the Reservation.

### Sku
* Sku `object`: The SKU to be applied for this resource
  * name `string`: Name of the SKU to be applied


