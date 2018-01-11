# @datafire/azure_arm_cognitiveservices

Client library for CognitiveServicesManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_cognitiveservices
```
```js
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

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-02-01-preview
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [CognitiveServicesAccountListResult](#cognitiveservicesaccountlistresult)

### CognitiveServicesAccounts_ListByResourceGroup
Returns all the resources of a particular type belonging to a resource group


```js
azure_arm_cognitiveservices.CognitiveServicesAccounts_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-02-01-preview

#### Output
* output [CognitiveServicesAccountListResult](#cognitiveservicesaccountlistresult)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * accountName **required** `string`: The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-02-01-preview
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * accountName **required** `string`: The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-02-01-preview
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [CognitiveServicesAccount](#cognitiveservicesaccount)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * accountName **required** `string`: The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * body **required** [CognitiveServicesAccountUpdateParameters](#cognitiveservicesaccountupdateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-02-01-preview
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [CognitiveServicesAccount](#cognitiveservicesaccount)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * accountName **required** `string`: The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * parameters **required** [CognitiveServicesAccountCreateParameters](#cognitiveservicesaccountcreateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-02-01-preview
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [CognitiveServicesAccount](#cognitiveservicesaccount)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * accountName **required** `string`: The name of the cognitive services account within the specified resource group. Congitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.  
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-02-01-preview
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [CognitiveServicesAccountKeys](#cognitiveservicesaccountkeys)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * accountName **required** `string`: The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.  
  * body **required** [RegenerateKeyParameters](#regeneratekeyparameters)
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-02-01-preview
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [CognitiveServicesAccountKeys](#cognitiveservicesaccountkeys)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * accountName **required** `string`: The name of the cognitive services account within the specified resource group. Cognitive Services account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.  
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-02-01-preview
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [CognitiveServicesAccountEnumerateSkusResult](#cognitiveservicesaccountenumerateskusresult)



## Definitions

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
  * kind **required** `string` (values: Academic, Bing.Autosuggest, Bing.Search, Bing.Speech, Bing.SpellCheck, ComputerVision, ContentModerator, Emotion, Face, LUIS, Recommendations, SpeakerRecognition, Speech, SpeechTranslation, TextAnalytics, TextTranslation, WebLM): Required. Indicates the type of cognitive service account.
  * location **required** `string`: Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update the request will succeed.
  * properties **required** [CognitiveServicesAccountPropertiesCreateParameters](#cognitiveservicesaccountpropertiescreateparameters)
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

### CognitiveServicesAccountListResult
* CognitiveServicesAccountListResult `object`: The list of cognitive services accounts operation response.
  * value `array`: Gets the list of Cognitive Services accounts and their properties.
    * items [CognitiveServicesAccount](#cognitiveservicesaccount)

### CognitiveServicesAccountProperties
* CognitiveServicesAccountProperties `object`
  * endpoint `string`: Endpoint of the created account
  * provisioningState `string` (values: Creating, ResolvingDNS, Succeeded, Failed): Gets the status of the cognitive services account at the time the operation was called.

### CognitiveServicesAccountPropertiesCreateParameters


### CognitiveServicesAccountUpdateParameters
* CognitiveServicesAccountUpdateParameters `object`: The parameters to provide for the account.
  * sku [Sku](#sku)
  * tags `object`: Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.

### CognitiveServicesResourceAndSku
* CognitiveServicesResourceAndSku `object`
  * resourceType `string`: Resource Namespace and Type
  * sku [Sku](#sku)

### Error
* Error `object`
  * error [ErrorBody](#errorbody)

### ErrorBody
* ErrorBody `object`
  * code **required** `string`: error code
  * message **required** `string`: error message

### RegenerateKeyParameters
* RegenerateKeyParameters `object`: Regenerate key parameters.
  * keyName `string` (values: Key1, Key2): key name to generate (Key1|Key2)

### Sku
* Sku `object`: The SKU of the cognitive services account.
  * name **required** `string` (values: F0, P0, P1, P2, S0, S1, S2, S3, S4, S5, S6): Gets or sets the sku name. Required for account creation, optional for update.
  * tier `string` (values: Free, Standard, Premium): Gets the sku tier. This is based on the SKU name.


