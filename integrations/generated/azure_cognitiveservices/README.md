# @datafire/azure_cognitiveservices

Client library for CognitiveServicesManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_cognitiveservices
```
```js
let azure_cognitiveservices = require('@datafire/azure_cognitiveservices').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_cognitiveservices.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Cognitive Services Management Client

## Actions

### Operations_List
Lists all the available Cognitive Services account operations.


```js
azure_cognitiveservices.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-18

#### Output
* output [OperationEntityListResult](#operationentitylistresult)

### Accounts_List
Returns all the resources of a particular type belonging to a subscription.


```js
azure_cognitiveservices.Accounts_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-18
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [CognitiveServicesAccountListResult](#cognitiveservicesaccountlistresult)

### CheckSkuAvailability_List
Check available SKUs.


```js
azure_cognitiveservices.CheckSkuAvailability_List({
  "subscriptionId": "",
  "api-version": "",
  "location": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-18
  * location **required** `string`: Resource location.
  * parameters **required** [CheckSkuAvailabilityParameter](#checkskuavailabilityparameter)

#### Output
* output [CheckSkuAvailabilityResultList](#checkskuavailabilityresultlist)

### Accounts_ListByResourceGroup
Returns all the resources of a particular type belonging to a resource group


```js
azure_cognitiveservices.Accounts_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-18

#### Output
* output [CognitiveServicesAccountListResult](#cognitiveservicesaccountlistresult)

### Accounts_Delete
Deletes a Cognitive Services account from the resource group. 


```js
azure_cognitiveservices.Accounts_Delete({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * accountName **required** `string`: The name of Cognitive Services account.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-18
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
*Output schema unknown*

### Accounts_GetProperties
Returns a Cognitive Services account specified by the parameters.


```js
azure_cognitiveservices.Accounts_GetProperties({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * accountName **required** `string`: The name of Cognitive Services account.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-18
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [CognitiveServicesAccount](#cognitiveservicesaccount)

### Accounts_Update
Updates a Cognitive Services account


```js
azure_cognitiveservices.Accounts_Update({
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * accountName **required** `string`: The name of Cognitive Services account.
  * parameters **required** [CognitiveServicesAccountUpdateParameters](#cognitiveservicesaccountupdateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-18
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [CognitiveServicesAccount](#cognitiveservicesaccount)

### Accounts_Create
Create Cognitive Services Account. Accounts is a resource group wide resource type. It holds the keys for developer to access intelligent APIs. It's also the resource type for billing.


```js
azure_cognitiveservices.Accounts_Create({
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * accountName **required** `string`: The name of Cognitive Services account.
  * parameters **required** [CognitiveServicesAccountCreateParameters](#cognitiveservicesaccountcreateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-18
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [CognitiveServicesAccount](#cognitiveservicesaccount)

### Accounts_ListKeys
Lists the account keys for the specified Cognitive Services account.


```js
azure_cognitiveservices.Accounts_ListKeys({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * accountName **required** `string`: The name of Cognitive Services account.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-18
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [CognitiveServicesAccountKeys](#cognitiveservicesaccountkeys)

### Accounts_RegenerateKey
Regenerates the specified account key for the specified Cognitive Services account.


```js
azure_cognitiveservices.Accounts_RegenerateKey({
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * accountName **required** `string`: The name of Cognitive Services account.
  * parameters **required** [RegenerateKeyParameters](#regeneratekeyparameters)
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-18
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [CognitiveServicesAccountKeys](#cognitiveservicesaccountkeys)

### Accounts_ListSkus
List available SKUs for the requested Cognitive Services account


```js
azure_cognitiveservices.Accounts_ListSkus({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * accountName **required** `string`: The name of Cognitive Services account.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-18
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [CognitiveServicesAccountEnumerateSkusResult](#cognitiveservicesaccountenumerateskusresult)



## Definitions

### CheckSkuAvailabilityParameter
* CheckSkuAvailabilityParameter `object`: Check SKU availability parameter.
  * kind **required** [CognitiveServicesAccountKind](#cognitiveservicesaccountkind)
  * skus **required** `array`: The SKU of the resource.
    * items [SkuName](#skuname)
  * type **required** `string`: The Type of the resource.

### CheckSkuAvailabilityResult
* CheckSkuAvailabilityResult `object`: Check SKU availability result.
  * kind [CognitiveServicesAccountKind](#cognitiveservicesaccountkind)
  * message `string`: Additional error message.
  * reason `string`: Reason why the SKU is not available.
  * skuAvailable `boolean`: Indicates the given SKU is available or not.
  * skuName [SkuName](#skuname)
  * type `string`: The Type of the resource.

### CheckSkuAvailabilityResultList
* CheckSkuAvailabilityResultList `object`: Check SKU availability result list.
  * value `array`: Check SKU availability result list.
    * items [CheckSkuAvailabilityResult](#checkskuavailabilityresult)

### CognitiveServicesAccount
* CognitiveServicesAccount `object`: Cognitive Services Account is an Azure resource representing the provisioned account, its type, location and SKU.
  * etag `string`: Entity Tag
  * id `string`: The id of the created account
  * kind `string`: Type of cognitive service account.
  * location `string`: The location of the resource
  * name `string`: The name of the created account
  * properties [CognitiveServicesAccountProperties](#cognitiveservicesaccountproperties)
  * sku [Sku](#sku)
  * tags `object`: Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
  * type `string`: Resource type

### CognitiveServicesAccountCreateParameters
* CognitiveServicesAccountCreateParameters `object`: The parameters to provide for the account.
  * kind **required** [CognitiveServicesAccountKind](#cognitiveservicesaccountkind)
  * location **required** `string`: Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update the request will succeed.
  * properties **required** `object`: Must exist in the request. Must be an empty object. Must not be null.
  * sku **required** [Sku](#sku)
  * tags `object`: Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.

### CognitiveServicesAccountEnumerateSkusResult
* CognitiveServicesAccountEnumerateSkusResult `object`: The list of cognitive services accounts operation response.
  * value `array`: Gets the list of Cognitive Services accounts and their properties.
    * items [CognitiveServicesResourceAndSku](#cognitiveservicesresourceandsku)

### CognitiveServicesAccountKeys
* CognitiveServicesAccountKeys `object`: The access keys for the cognitive services account.
  * key1 `string`: Gets the value of key 1.
  * key2 `string`: Gets the value of key 2.

### CognitiveServicesAccountKind
* CognitiveServicesAccountKind `string` (values: Academic, Bing.Autosuggest, Bing.Autosuggest.v7, Bing.CustomSearch, Bing.Search, Bing.Search.v7, Bing.Speech, Bing.SpellCheck, Bing.SpellCheck.v7, ComputerVision, ContentModerator, CustomSpeech, Emotion, Face, LUIS, Recommendations, SpeakerRecognition, Speech, SpeechTranslation, TextAnalytics, TextTranslation, WebLM): Required. Indicates the type of cognitive service account.

### CognitiveServicesAccountListResult
* CognitiveServicesAccountListResult `object`: The list of cognitive services accounts operation response.
  * nextLink `string`: The link used to get the next page of accounts.
  * value `array`: Gets the list of Cognitive Services accounts and their properties.
    * items [CognitiveServicesAccount](#cognitiveservicesaccount)

### CognitiveServicesAccountProperties
* CognitiveServicesAccountProperties `object`: Properties of Cognitive Services account.
  * endpoint `string`: Endpoint of the created account.
  * internalId `string`: The internal identifier.
  * provisioningState `string` (values: Creating, ResolvingDNS, Moving, Deleting, Succeeded, Failed): Gets the status of the cognitive services account at the time the operation was called.

### CognitiveServicesAccountUpdateParameters
* CognitiveServicesAccountUpdateParameters `object`: The parameters to provide for the account.
  * sku [Sku](#sku)
  * tags `object`: Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.

### CognitiveServicesResourceAndSku
* CognitiveServicesResourceAndSku `object`: Cognitive Services resource type and SKU.
  * resourceType `string`: Resource Namespace and Type
  * sku [Sku](#sku)

### Error
* Error `object`: Cognitive Services error object.
  * error [ErrorBody](#errorbody)

### ErrorBody
* ErrorBody `object`: Cognitive Services error body.
  * code **required** `string`: error code
  * message **required** `string`: error message

### OperationDisplayInfo
* OperationDisplayInfo `object`: The operation supported by Cognitive Services.
  * description `string`: The description of the operation.
  * operation `string`: The action that users can perform, based on their permission level.
  * provider `string`: Service provider: Microsoft Cognitive Services.
  * resource `string`: Resource on which the operation is performed.

### OperationEntity
* OperationEntity `object`: The operation supported by Cognitive Services.
  * display [OperationDisplayInfo](#operationdisplayinfo)
  * name `string`: Operation name: {provider}/{resource}/{operation}.
  * origin `string`: The origin of the operation.
  * properties `object`: Additional properties.

### OperationEntityListResult
* OperationEntityListResult `object`: The list of cognitive services accounts operation response.
  * nextLink `string`: The link used to get the next page of operations.
  * value `array`: The list of operations.
    * items [OperationEntity](#operationentity)

### RegenerateKeyParameters
* RegenerateKeyParameters `object`: Regenerate key parameters.
  * keyName **required** `string` (values: Key1, Key2): key name to generate (Key1|Key2)

### Sku
* Sku `object`: The SKU of the cognitive services account.
  * name **required** [SkuName](#skuname)
  * tier `string` (values: Free, Standard, Premium): Gets the sku tier. This is based on the SKU name.

### SkuName
* SkuName `string` (values: F0, P0, P1, P2, S0, S1, S2, S3, S4, S5, S6): The name of SKU.


