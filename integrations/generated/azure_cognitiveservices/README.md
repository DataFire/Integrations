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

.then(data => {
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

### CheckDomainAvailability
Check whether a domain is available.


```js
azure_cognitiveservices.CheckDomainAvailability({
  "subscriptionId": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-18
  * parameters **required** [CheckDomainAvailabilityParameter](#checkdomainavailabilityparameter)

#### Output
* output [CheckDomainAvailabilityResult](#checkdomainavailabilityresult)

### CheckSkuAvailability
Check available SKUs.


```js
azure_cognitiveservices.CheckSkuAvailability({
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

### ResourceSkus_List
Gets the list of Microsoft.CognitiveServices SKUs available for your Subscription.


```js
azure_cognitiveservices.ResourceSkus_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-18
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [ResourceSkusResult](#resourceskusresult)

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
  "account": {},
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * accountName **required** `string`: The name of Cognitive Services account.
  * account **required** [CognitiveServicesAccount](#cognitiveservicesaccount)
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
  "account": {},
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * accountName **required** `string`: The name of Cognitive Services account.
  * account **required** [CognitiveServicesAccount](#cognitiveservicesaccount)
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

### Accounts_GetUsages
Get usages for the requested Cognitive Services account


```js
azure_cognitiveservices.Accounts_GetUsages({
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
  * $filter `string`: An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).

#### Output
* output [UsagesResult](#usagesresult)



## Definitions

### CheckDomainAvailabilityParameter
* CheckDomainAvailabilityParameter `object`: Check Domain availability parameter.
  * subdomainName **required** `string`: The subdomain name to use.
  * type **required** `string`: The Type of the resource.

### CheckDomainAvailabilityResult
* CheckDomainAvailabilityResult `object`: Check Domain availability result.
  * isSubdomainAvailable `boolean`: Indicates the given SKU is available or not.
  * reason `string`: Reason why the SKU is not available.
  * subdomainName `string`: The subdomain name to use.
  * type `string`: The Type of the resource.

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
  * kind [CognitiveServicesAccountKind](#cognitiveservicesaccountkind)
  * location `string`: The location of the resource
  * name `string`: The name of the created account
  * properties [CognitiveServicesAccountProperties](#cognitiveservicesaccountproperties)
  * sku [Sku](#sku)
  * tags `object`: Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
  * type `string`: Resource type

### CognitiveServicesAccountApiProperties
* CognitiveServicesAccountApiProperties `object`: The api properties for special APIs.
  * eventHubConnectionString `string`: (Personalization Only) The flag to enable statistics of Bing Search.
  * qnaRuntimeEndpoint `string`: (QnAMaker Only) The runtime endpoint of QnAMaker.
  * statisticsEnabled `boolean`: (Bing Search Only) The flag to enable statistics of Bing Search.
  * storageAccountConnectionString `string`: (Personalization Only) The storage account connection string.

### CognitiveServicesAccountEnumerateSkusResult
* CognitiveServicesAccountEnumerateSkusResult `object`: The list of cognitive services accounts operation response.
  * value `array`: Gets the list of Cognitive Services accounts and their properties.
    * items [CognitiveServicesResourceAndSku](#cognitiveservicesresourceandsku)

### CognitiveServicesAccountKeys
* CognitiveServicesAccountKeys `object`: The access keys for the cognitive services account.
  * key1 `string`: Gets the value of key 1.
  * key2 `string`: Gets the value of key 2.

### CognitiveServicesAccountKind
* CognitiveServicesAccountKind `string`: Required. Indicates the type of cognitive service account.

### CognitiveServicesAccountListResult
* CognitiveServicesAccountListResult `object`: The list of cognitive services accounts operation response.
  * nextLink `string`: The link used to get the next page of accounts.
  * value `array`: Gets the list of Cognitive Services accounts and their properties.
    * items [CognitiveServicesAccount](#cognitiveservicesaccount)

### CognitiveServicesAccountProperties
* CognitiveServicesAccountProperties `object`: Properties of Cognitive Services account.
  * apiProperties [CognitiveServicesAccountApiProperties](#cognitiveservicesaccountapiproperties)
  * customSubDomainName `string`: Optional subdomain name used for token-based authentication.
  * endpoint `string`: Endpoint of the created account.
  * internalId `string`: The internal identifier.
  * networkAcls [NetworkRuleSet](#networkruleset)
  * provisioningState `string` (values: Creating, ResolvingDNS, Moving, Deleting, Succeeded, Failed): Gets the status of the cognitive services account at the time the operation was called.

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

### IpRule
* IpRule `object`: A rule governing the accessibility from a specific ip address or ip range.
  * value **required** `string`: An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).

### MetricName
* MetricName `object`: A metric name.
  * localizedValue `string`: The friendly name of the metric.
  * value `string`: The name of the metric.

### NetworkRuleSet
* NetworkRuleSet `object`: A set of rules governing the network accessibility.
  * defaultAction `string` (values: Allow, Deny): The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
  * ipRules `array`: The list of IP address rules.
    * items [IpRule](#iprule)
  * virtualNetworkRules `array`: The list of virtual network rules.
    * items [VirtualNetworkRule](#virtualnetworkrule)

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

### ResourceSku
* ResourceSku `object`: Describes an available Cognitive Services SKU.
  * kind `string`: The Kind of resources that are supported in this SKU.
  * locations `array`: The set of locations that the SKU is available.
    * items `string`
  * name `string`: The name of SKU.
  * resourceType `string`: The type of resource the SKU applies to.
  * restrictions `array`: The restrictions because of which SKU cannot be used. This is empty if there are no restrictions.
    * items [ResourceSkuRestrictions](#resourceskurestrictions)
  * tier `string`: Specifies the tier of Cognitive Services account.

### ResourceSkuRestrictionInfo
* ResourceSkuRestrictionInfo `object`
  * locations `array`: Locations where the SKU is restricted
    * items `string`
  * zones `array`: List of availability zones where the SKU is restricted.
    * items `string`

### ResourceSkuRestrictions
* ResourceSkuRestrictions `object`: Describes restrictions of a SKU.
  * reasonCode `string` (values: QuotaId, NotAvailableForSubscription): The reason for restriction.
  * restrictionInfo [ResourceSkuRestrictionInfo](#resourceskurestrictioninfo)
  * type `string` (values: Location, Zone): The type of restrictions.
  * values `array`: The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted.
    * items `string`

### ResourceSkusResult
* ResourceSkusResult `object`: The Get Skus operation response.
  * nextLink `string`: The uri to fetch the next page of Skus.
  * value **required** `array`: The list of skus available for the subscription.
    * items [ResourceSku](#resourcesku)

### Sku
* Sku `object`: The SKU of the cognitive services account.
  * name **required** [SkuName](#skuname)
  * tier `string` (values: Free, Standard, Premium): Gets the sku tier. This is based on the SKU name.

### SkuName
* SkuName `string`: The name of SKU.

### UnitType
* UnitType `string` (values: Count, Bytes, Seconds, Percent, CountPerSecond, BytesPerSecond, Milliseconds): The unit of the metric.

### Usage
* Usage `object`: The usage data for a usage request.
  * currentValue `number`: Current value for this metric.
  * limit `number`: Maximum value for this metric.
  * name [MetricName](#metricname)
  * nextResetTime `string`: Next reset time for current quota.
  * quotaPeriod `string`: The quota period used to summarize the usage values.
  * status `string` (values: Included, Blocked, InOverage, Unknown): Cognitive Services account quota usage status.
  * unit [UnitType](#unittype)

### UsagesResult
* UsagesResult `object`: The response to a list usage request.
  * value `array`: The list of usages for Cognitive Service account.
    * items [Usage](#usage)

### VirtualNetworkRule
* VirtualNetworkRule `object`: A rule governing the accessibility from a specific virtual network.
  * id **required** `string`: Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
  * ignoreMissingVnetServiceEndpoint `boolean`: Ignore missing vnet service endpoint or not.
  * state `string`: Gets the state of virtual network rule.


