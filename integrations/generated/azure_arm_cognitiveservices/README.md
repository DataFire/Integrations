# @datafire/azure_arm_cognitiveservices

Client library for CognitiveServicesManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_cognitiveservices
```

```js
let datafire = require('datafire');
let azure_arm_cognitiveservices = require('@datafire/azure_arm_cognitiveservices').create();

azure_arm_cognitiveservices.CognitiveServicesAccounts_List({}).then(data => {
  console.log(data);
})
```

## Description
Cognitive Services Management Client

## Actions
### CognitiveServicesAccounts_List
Returns all the resources of a particular type belonging to a subscription.


```js
azure_arm_cognitiveservices.CognitiveServicesAccounts_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-02-01-preview
* subscriptionId (string) **required** - Azure Subscription ID.

### CognitiveServicesAccounts_ListByResourceGroup
Returns all the resources of a particular type belonging to a resource group


```js
azure_arm_cognitiveservices.CognitiveServicesAccounts_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the user's subscription.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-02-01-preview

### CognitiveServicesAccounts_Delete
Deletes a Cognitive Services account from the resource group. 


```js
azure_arm_cognitiveservices.CognitiveServicesAccounts_Delete({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the user's subscription.
* accountName (string) **required** - The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-02-01-preview
* subscriptionId (string) **required** - Azure Subscription ID.

### CognitiveServicesAccounts_GetProperties
Returns a Cognitive Services account specified by the parameters.


```js
azure_arm_cognitiveservices.CognitiveServicesAccounts_GetProperties({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the user's subscription.
* accountName (string) **required** - The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-02-01-preview
* subscriptionId (string) **required** - Azure Subscription ID.

### CognitiveServicesAccounts_Update
Updates a Cognitive Services account


```js
azure_arm_cognitiveservices.CognitiveServicesAccounts_Update({
  "resourceGroupName": "",
  "accountName": "",
  "body": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the user's subscription.
* accountName (string) **required** - The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
* body (undefined) **required** - The parameters to provide for the account.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-02-01-preview
* subscriptionId (string) **required** - Azure Subscription ID.

### CognitiveServicesAccounts_Create
Create Cognitive Services Account. Accounts is a resource group wide resource type. It holds the keys for developer to access intelligent APIs. It's also the resource type for billing.


```js
azure_arm_cognitiveservices.CognitiveServicesAccounts_Create({
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the user's subscription.
* accountName (string) **required** - The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
* parameters (undefined) **required** - The parameters to provide for the account.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-02-01-preview
* subscriptionId (string) **required** - Azure Subscription ID.

### CognitiveServicesAccounts_ListKeys
Lists the account keys for the specified Cognitive Services account.


```js
azure_arm_cognitiveservices.CognitiveServicesAccounts_ListKeys({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the user's subscription.
* accountName (string) **required** - The name of the cognitive services account within the specified resource group. Congitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.  
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-02-01-preview
* subscriptionId (string) **required** - Azure Subscription ID.

### CognitiveServicesAccounts_RegenerateKey
Regenerates the specified account key for the specified Cognitive Services account.


```js
azure_arm_cognitiveservices.CognitiveServicesAccounts_RegenerateKey({
  "resourceGroupName": "",
  "accountName": "",
  "body": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the user's subscription.
* accountName (string) **required** - The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.  
* body (undefined) **required** - Regenerate key parameters.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-02-01-preview
* subscriptionId (string) **required** - Azure Subscription ID.

### CognitiveServicesAccounts_ListSkus
List available SKUs for the requested Cognitive Services account


```js
azure_arm_cognitiveservices.CognitiveServicesAccounts_ListSkus({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the user's subscription.
* accountName (string) **required** - The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.  
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-02-01-preview
* subscriptionId (string) **required** - Azure Subscription ID.

