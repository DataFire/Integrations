# @datafire/azure_powerbidedicated

Client library for PowerBIDedicated

## Installation and Usage
```bash
npm install --save @datafire/azure_powerbidedicated
```
```js
let azure_powerbidedicated = require('@datafire/azure_powerbidedicated').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_powerbidedicated.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

PowerBI Dedicated Web API provides a RESTful set of web services that enables users to create, retrieve, update, and delete Power BI dedicated capacities

## Actions

### Operations_List
Lists all of the available PowerBIDedicated REST API operations.


```js
azure_powerbidedicated.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.

#### Output
* output [OperationListResult](#operationlistresult)

### Capacities_List
Lists all the Dedicated capacities for the given subscription.


```js
azure_powerbidedicated.Capacities_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DedicatedCapacities](#dedicatedcapacities)

### Capacities_ListSkus
Lists eligible SKUs for PowerBI Dedicated resource provider.


```js
azure_powerbidedicated.Capacities_ListSkus({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SkuEnumerationForNewResourceResult](#skuenumerationfornewresourceresult)

### Capacities_ListByResourceGroup
Gets all the Dedicated capacities for the given resource group.


```js
azure_powerbidedicated.Capacities_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DedicatedCapacities](#dedicatedcapacities)

### Capacities_Delete
Deletes the specified Dedicated capacity.


```js
azure_powerbidedicated.Capacities_Delete({
  "resourceGroupName": "",
  "dedicatedCapacityName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
  * dedicatedCapacityName **required** `string`: The name of the Dedicated capacity. It must be at least 3 characters in length, and no more than 63.
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Capacities_GetDetails
Gets details about the specified dedicated capacity.


```js
azure_powerbidedicated.Capacities_GetDetails({
  "resourceGroupName": "",
  "dedicatedCapacityName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
  * dedicatedCapacityName **required** `string`: The name of the dedicated capacity. It must be a minimum of 3 characters, and a maximum of 63.
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DedicatedCapacity](#dedicatedcapacity)

### Capacities_Update
Updates the current state of the specified Dedicated capacity.


```js
azure_powerbidedicated.Capacities_Update({
  "resourceGroupName": "",
  "dedicatedCapacityName": "",
  "capacityUpdateParameters": {},
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
  * dedicatedCapacityName **required** `string`: The name of the Dedicated capacity. It must be at least 3 characters in length, and no more than 63.
  * capacityUpdateParameters **required** [DedicatedCapacityUpdateParameters](#dedicatedcapacityupdateparameters)
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DedicatedCapacity](#dedicatedcapacity)

### Capacities_Create
Provisions the specified Dedicated capacity based on the configuration specified in the request.


```js
azure_powerbidedicated.Capacities_Create({
  "resourceGroupName": "",
  "dedicatedCapacityName": "",
  "capacityParameters": {
    "location": "",
    "sku": {
      "name": ""
    }
  },
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
  * dedicatedCapacityName **required** `string`: The name of the Dedicated capacity. It must be a minimum of 3 characters, and a maximum of 63.
  * capacityParameters **required** [DedicatedCapacity](#dedicatedcapacity)
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DedicatedCapacity](#dedicatedcapacity)

### Capacities_Resume
Resumes operation of the specified Dedicated capacity instance.


```js
azure_powerbidedicated.Capacities_Resume({
  "resourceGroupName": "",
  "dedicatedCapacityName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
  * dedicatedCapacityName **required** `string`: The name of the Dedicated capacity. It must be at least 3 characters in length, and no more than 63.
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Capacities_ListSkusForCapacity
Lists eligible SKUs for a PowerBI Dedicated resource.


```js
azure_powerbidedicated.Capacities_ListSkusForCapacity({
  "resourceGroupName": "",
  "dedicatedCapacityName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
  * dedicatedCapacityName **required** `string`: The name of the Dedicated capacity. It must be at least 3 characters in length, and no more than 63.
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SkuEnumerationForExistingResourceResult](#skuenumerationforexistingresourceresult)

### Capacities_Suspend
Suspends operation of the specified dedicated capacity instance.


```js
azure_powerbidedicated.Capacities_Suspend({
  "resourceGroupName": "",
  "dedicatedCapacityName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
  * dedicatedCapacityName **required** `string`: The name of the Dedicated capacity. It must be at least 3 characters in length, and no more than 63.
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*



## Definitions

### DedicatedCapacities
* DedicatedCapacities `object`: An array of Dedicated capacities resources.
  * value **required** `array`: An array of Dedicated capacities resources.
    * items [DedicatedCapacity](#dedicatedcapacity)

### DedicatedCapacity
* DedicatedCapacity `object`: Represents an instance of a Dedicated Capacity resource.
  * properties [DedicatedCapacityProperties](#dedicatedcapacityproperties)
  * id `string`: An identifier that represents the PowerBI Dedicated resource.
  * location **required** `string`: Location of the PowerBI Dedicated resource.
  * name `string`: The name of the PowerBI Dedicated resource.
  * sku **required** [ResourceSku](#resourcesku)
  * tags `object`: Key-value pairs of additional resource provisioning properties.
  * type `string`: The type of the PowerBI Dedicated resource.

### DedicatedCapacityAdministrators
* DedicatedCapacityAdministrators `object`: An array of administrator user identities
  * members `array`: An array of administrator user identities.
    * items `string`: The UPN of the user. For example: johnsmith@contoso.com.

### DedicatedCapacityMutableProperties
* DedicatedCapacityMutableProperties `object`: An object that represents a set of mutable Dedicated capacity resource properties.
  * administration [DedicatedCapacityAdministrators](#dedicatedcapacityadministrators)

### DedicatedCapacityProperties
* DedicatedCapacityProperties `object`: Properties of Dedicated Capacity resource.
  * provisioningState `string` (values: Deleting, Succeeded, Failed, Paused, Suspended, Provisioning, Updating, Suspending, Pausing, Resuming, Preparing, Scaling): The current deployment state of PowerBI Dedicatedresource. The provisioningState is to indicate states for resource provisioning.
  * state `string` (values: Deleting, Succeeded, Failed, Paused, Suspended, Provisioning, Updating, Suspending, Pausing, Resuming, Preparing, Scaling): The current state of PowerBI Dedicated resource. The state is to indicate more states outside of resource provisioning.
  * administration [DedicatedCapacityAdministrators](#dedicatedcapacityadministrators)

### DedicatedCapacityUpdateParameters
* DedicatedCapacityUpdateParameters `object`: Provision request specification
  * properties [DedicatedCapacityMutableProperties](#dedicatedcapacitymutableproperties)
  * sku [ResourceSku](#resourcesku)
  * tags `object`: Key-value pairs of additional provisioning properties.

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### Operation
* Operation `object`: Capacities REST API operation.
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: create, update, delete, etc.
    * provider `string`: Service provider: Microsoft.PowerBIDedicated.
    * resource `string`: Resource on which the operation is performed: capacity, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}.

### OperationListResult
* OperationListResult `object`: Result listing capacities. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of capacities supported by the Microsoft.PowerBIDedicated resource provider.
    * items [Operation](#operation)

### Resource
* Resource `object`: Represents an instance of an PowerBI Dedicated resource.
  * id `string`: An identifier that represents the PowerBI Dedicated resource.
  * location **required** `string`: Location of the PowerBI Dedicated resource.
  * name `string`: The name of the PowerBI Dedicated resource.
  * sku **required** [ResourceSku](#resourcesku)
  * tags `object`: Key-value pairs of additional resource provisioning properties.
  * type `string`: The type of the PowerBI Dedicated resource.

### ResourceSku
* ResourceSku `object`: Represents the SKU name and Azure pricing tier for PowerBI Dedicated resource.
  * name **required** `string`: Name of the SKU level.
  * tier `string` (values: PBIE_Azure): The name of the Azure pricing tier to which the SKU applies.

### SkuDetailsForExistingResource
* SkuDetailsForExistingResource `object`: An object that represents SKU details for existing resources
  * sku [ResourceSku](#resourcesku)

### SkuEnumerationForExistingResourceResult
* SkuEnumerationForExistingResourceResult `object`: An object that represents enumerating SKUs for existing resources
  * value `array`: The collection of available SKUs for existing resources
    * items [SkuDetailsForExistingResource](#skudetailsforexistingresource)

### SkuEnumerationForNewResourceResult
* SkuEnumerationForNewResourceResult `object`: An object that represents enumerating SKUs for new resources
  * value `array`: The collection of available SKUs for new resources
    * items [ResourceSku](#resourcesku)


