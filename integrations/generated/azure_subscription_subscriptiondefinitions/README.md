# @datafire/azure_subscription_subscriptiondefinitions

Client library for SubscriptionDefinitionsClient

## Installation and Usage
```bash
npm install --save @datafire/azure_subscription_subscriptiondefinitions
```
```js
let azure_subscription_subscriptiondefinitions = require('@datafire/azure_subscription_subscriptiondefinitions').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_subscription_subscriptiondefinitions.SubscriptionDefinitionsOperationMetadata_list({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Subscription definitions client provides an interface to create, modify and retrieve azure subscriptions programmatically.

## Actions

### SubscriptionDefinitionsOperationMetadata_list
Lists all of the available Microsoft.Subscription API operations.


```js
azure_subscription_subscriptiondefinitions.SubscriptionDefinitionsOperationMetadata_list({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2015-06-01

#### Output
* output [OperationListResult](#operationlistresult)

### SubscriptionDefinitions_List
List an Azure subscription definition by subscriptionId.


```js
azure_subscription_subscriptiondefinitions.SubscriptionDefinitions_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2015-06-01

#### Output
* output [SubscriptionDefinitionList](#subscriptiondefinitionlist)

### SubscriptionDefinitions_Get
Get an Azure subscription definition.


```js
azure_subscription_subscriptiondefinitions.SubscriptionDefinitions_Get({
  "subscriptionDefinitionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionDefinitionName **required** `string`: The name of the Azure subscription definition.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2015-06-01

#### Output
* output [SubscriptionDefinition](#subscriptiondefinition)

### SubscriptionDefinitions_Create
Create an Azure subscription definition.


```js
azure_subscription_subscriptiondefinitions.SubscriptionDefinitions_Create({
  "subscriptionDefinitionName": "",
  "api-version": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * subscriptionDefinitionName **required** `string`: The name of the Azure subscription definition.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2015-06-01
  * body **required** [SubscriptionDefinition](#subscriptiondefinition)

#### Output
* output [SubscriptionDefinition](#subscriptiondefinition)

### SubscriptionDefinitions_GetOperationStatus
Retrieves the status of the subscription definition PUT operation. The URI of this API is returned in the Location field of the response header.


```js
azure_subscription_subscriptiondefinitions.SubscriptionDefinitions_GetOperationStatus({
  "api-version": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2015-06-01
  * operationId **required** `string`: The operation ID, which can be found from the Location field in the generate recommendation response header.

#### Output
* output [SubscriptionDefinition](#subscriptiondefinition)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### Operation
* Operation `object`: REST API operation
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.Subscription
    * resource `string`: Resource on which the operation is performed: Profile, endpoint, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of operations.
    * items [Operation](#operation)

### SubscriptionDefinition
* SubscriptionDefinition `object`: The subscription definition used to create the subscription.
  * id `string`: The resource ID.
  * name `string`: The name of the resource.
  * properties [SubscriptionDefinitionProperties](#subscriptiondefinitionproperties)
  * type `string`: The type of the resource.

### SubscriptionDefinitionList
* SubscriptionDefinitionList `object`: Subscription Definition List operation response.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: An array of subscriptionDefinitions
    * items [SubscriptionDefinition](#subscriptiondefinition)

### SubscriptionDefinitionProperties
* SubscriptionDefinitionProperties `object`: The subscription definition properties.
  * etag `string`: The etag the subscription definition.
  * offerType `string`: The offer type of the subscription. For example, MS-AZR-0017P (EnterpriseAgreement) and MS-AZR-0148P (EnterpriseAgreement devTest) are available.
  * subscriptionDisplayName `string`: The display name of the subscription.
  * subscriptionId `string`: The ID of the subscription.


