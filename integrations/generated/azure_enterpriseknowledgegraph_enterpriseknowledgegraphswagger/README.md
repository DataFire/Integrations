# @datafire/azure_enterpriseknowledgegraph_enterpriseknowledgegraphswagger

Client library for Azure Enterprise Knowledge Graph Service

## Installation and Usage
```bash
npm install --save @datafire/azure_enterpriseknowledgegraph_enterpriseknowledgegraphswagger
```
```js
let azure_enterpriseknowledgegraph_enterpriseknowledgegraphswagger = require('@datafire/azure_enterpriseknowledgegraph_enterpriseknowledgegraphswagger').create({
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

Azure Enterprise Knowledge Graph Service is a platform for creating knowledge graphs at scale.

## Actions

### Operations_List
Lists all the available EnterpriseKnowledgeGraph services operations.


```js
azure_enterpriseknowledgegraph_enterpriseknowledgegraphswagger.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [OperationEntityListResult](#operationentitylistresult)

### EnterpriseKnowledgeGraph_List
Returns all the resources of a particular type belonging to a subscription.


```js
azure_enterpriseknowledgegraph_enterpriseknowledgegraphswagger.EnterpriseKnowledgeGraph_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [EnterpriseKnowledgeGraphResponseList](#enterpriseknowledgegraphresponselist)

### EnterpriseKnowledgeGraph_ListByResourceGroup
Returns all the resources of a particular type belonging to a resource group


```js
azure_enterpriseknowledgegraph_enterpriseknowledgegraphswagger.EnterpriseKnowledgeGraph_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EnterpriseKnowledgeGraphResponseList](#enterpriseknowledgegraphresponselist)

### EnterpriseKnowledgeGraph_Delete
Deletes a EnterpriseKnowledgeGraph Service from the resource group. 


```js
azure_enterpriseknowledgegraph_enterpriseknowledgegraphswagger.EnterpriseKnowledgeGraph_Delete({
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
  * resourceName **required** `string`: The name of the EnterpriseKnowledgeGraph resource.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
*Output schema unknown*

### EnterpriseKnowledgeGraph_Get
Returns a EnterpriseKnowledgeGraph service specified by the parameters.


```js
azure_enterpriseknowledgegraph_enterpriseknowledgegraphswagger.EnterpriseKnowledgeGraph_Get({
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
  * resourceName **required** `string`: The name of the EnterpriseKnowledgeGraph resource.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [EnterpriseKnowledgeGraph](#enterpriseknowledgegraph)

### EnterpriseKnowledgeGraph_Update
Updates a EnterpriseKnowledgeGraph Service


```js
azure_enterpriseknowledgegraph_enterpriseknowledgegraphswagger.EnterpriseKnowledgeGraph_Update({
  "resourceGroupName": "",
  "resourceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
  * resourceName **required** `string`: The name of the EnterpriseKnowledgeGraph resource.
  * parameters **required** [EnterpriseKnowledgeGraph](#enterpriseknowledgegraph)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [EnterpriseKnowledgeGraph](#enterpriseknowledgegraph)

### EnterpriseKnowledgeGraph_Create
Creates a EnterpriseKnowledgeGraph Service. EnterpriseKnowledgeGraph Service is a resource group wide resource type.


```js
azure_enterpriseknowledgegraph_enterpriseknowledgegraphswagger.EnterpriseKnowledgeGraph_Create({
  "resourceGroupName": "",
  "resourceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
  * resourceName **required** `string`: The name of the EnterpriseKnowledgeGraph resource.
  * parameters **required** [EnterpriseKnowledgeGraph](#enterpriseknowledgegraph)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [EnterpriseKnowledgeGraph](#enterpriseknowledgegraph)



## Definitions

### EnterpriseKnowledgeGraph
* EnterpriseKnowledgeGraph `object`: EnterpriseKnowledgeGraph resource definition
  * properties [EnterpriseKnowledgeGraphProperties](#enterpriseknowledgegraphproperties)
  * id `string`: Specifies the resource ID.
  * location `string`: Specifies the location of the resource.
  * name `string`: Specifies the name of the resource.
  * sku [Sku](#sku)
  * tags `object`: Contains resource tags defined as key/value pairs.
  * type `string`: Specifies the type of the resource.

### EnterpriseKnowledgeGraphProperties
* EnterpriseKnowledgeGraphProperties `object`: The parameters to provide for the EnterpriseKnowledgeGraph.
  * description `string`: The description of the EnterpriseKnowledgeGraph
  * metadata `object`: Specifies the metadata  of the resource.
  * provisioningState `string` (values: Creating, Deleting, Failed, Succeeded): The state of EnterpriseKnowledgeGraph provisioning

### EnterpriseKnowledgeGraphResponseList
* EnterpriseKnowledgeGraphResponseList `object`: The list of  EnterpriseKnowledgeGraph service operation response.
  * nextLink `string`: The link used to get the next page of EnterpriseKnowledgeGraph service resources.
  * value `array`: Gets the list of EnterpriseKnowledgeGraph service results and their properties.
    * items [EnterpriseKnowledgeGraph](#enterpriseknowledgegraph)

### Error
* Error `object`: EnterpriseKnowledgeGraph Service error object.
  * error [ErrorBody](#errorbody)

### ErrorBody
* ErrorBody `object`: EnterpriseKnowledgeGraph Service error body.
  * code **required** `string`: error code
  * message **required** `string`: error message

### OperationDisplayInfo
* OperationDisplayInfo `object`: The operation supported by EnterpriseKnowledgeGraph Service Management.
  * description `string`: The description of the operation.
  * operation `string`: The action that users can perform, based on their permission level.
  * provider `string`: Service provider: Microsoft EnterpriseKnowledgeGraph Service.
  * resource `string`: Resource on which the operation is performed.

### OperationEntity
* OperationEntity `object`: The operations supported by EnterpriseKnowledgeGraph Service Management.
  * display [OperationDisplayInfo](#operationdisplayinfo)
  * name `string`: Operation name: {provider}/{resource}/{operation}.
  * origin `string`: The origin of the operation.
  * properties `object`: Additional properties.

### OperationEntityListResult
* OperationEntityListResult `object`: The list of EnterpriseKnowledgeGraph service operation response.
  * nextLink `string`: The link used to get the next page of operations.
  * value `array`: The list of operations.
    * items [OperationEntity](#operationentity)

### Resource
* Resource `object`: Azure resource
  * id `string`: Specifies the resource ID.
  * location `string`: Specifies the location of the resource.
  * name `string`: Specifies the name of the resource.
  * sku [Sku](#sku)
  * tags `object`: Contains resource tags defined as key/value pairs.
  * type `string`: Specifies the type of the resource.

### Sku
* Sku `object`: The SKU of the EnterpriseKnowledgeGraph service account.
  * name **required** [SkuName](#skuname)

### SkuName
* SkuName `string` (values: F0, S1): The name of SKU.


