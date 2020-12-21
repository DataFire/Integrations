# @datafire/azure_blockchain

Client library for BlockchainManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_blockchain
```
```js
let azure_blockchain = require('@datafire/azure_blockchain').create({
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

REST API for Azure Blockchain Service

## Actions

### Operations_List
Lists the available operations of Microsoft.Blockchain resource provider.


```js
azure_blockchain.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.

#### Output
* output [ResourceProviderOperationCollection](#resourceprovideroperationcollection)

### BlockchainMembers_ListAll
Lists the blockchain members for a subscription.


```js
azure_blockchain.BlockchainMembers_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.

#### Output
* output [BlockchainMemberCollection](#blockchainmembercollection)

### BlockchainMemberOperationResults_Get
Get Async operation result.


```js
azure_blockchain.BlockchainMemberOperationResults_Get({
  "locationName": "",
  "operationId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: Location name.
  * operationId **required** `string`: Operation Id.
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.

#### Output
* output [OperationResult](#operationresult)

### Locations_CheckNameAvailability
To check whether a resource name is available.


```js
azure_blockchain.Locations_CheckNameAvailability({
  "locationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: Location Name.
  * nameAvailabilityRequest [NameAvailabilityRequest](#nameavailabilityrequest)
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.

#### Output
* output [NameAvailability](#nameavailability)

### Locations_ListConsortiums
Lists the available consortiums for a subscription.


```js
azure_blockchain.Locations_ListConsortiums({
  "locationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: Location Name.
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.

#### Output
* output [ConsortiumCollection](#consortiumcollection)

### Skus_List
Lists the Skus of the resource type.


```js
azure_blockchain.Skus_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.

#### Output
* output [ResourceTypeSkuCollection](#resourcetypeskucollection)

### BlockchainMembers_List
Lists the blockchain members for a resource group.


```js
azure_blockchain.BlockchainMembers_List({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [BlockchainMemberCollection](#blockchainmembercollection)

### BlockchainMembers_Delete
Delete a blockchain member.


```js
azure_blockchain.BlockchainMembers_Delete({
  "blockchainMemberName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * blockchainMemberName **required** `string`: Blockchain member name
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
*Output schema unknown*

### BlockchainMembers_Get
Get details about a blockchain member.


```js
azure_blockchain.BlockchainMembers_Get({
  "blockchainMemberName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * blockchainMemberName **required** `string`: Blockchain member name.
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [BlockchainMember](#blockchainmember)

### BlockchainMembers_Update
Update a blockchain member.


```js
azure_blockchain.BlockchainMembers_Update({
  "blockchainMemberName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * blockchainMemberName **required** `string`: Blockchain member name.
  * blockchainMember [BlockchainMemberUpdate](#blockchainmemberupdate)
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [BlockchainMember](#blockchainmember)

### BlockchainMembers_Create
Create a blockchain member.


```js
azure_blockchain.BlockchainMembers_Create({
  "blockchainMemberName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * blockchainMemberName **required** `string`: Blockchain member name.
  * blockchainMember [BlockchainMember](#blockchainmember)
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [BlockchainMember](#blockchainmember)

### BlockchainMembers_ListConsortiumMembers
Lists the consortium members for a blockchain member.


```js
azure_blockchain.BlockchainMembers_ListConsortiumMembers({
  "blockchainMemberName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * blockchainMemberName **required** `string`: Blockchain member name.
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [ConsortiumMemberCollection](#consortiummembercollection)

### BlockchainMembers_ListApiKeys
Lists the API keys for a blockchain member.


```js
azure_blockchain.BlockchainMembers_ListApiKeys({
  "blockchainMemberName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * blockchainMemberName **required** `string`: Blockchain member name.
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [ApiKeyCollection](#apikeycollection)

### BlockchainMembers_ListRegenerateApiKeys
Regenerate the API keys for a blockchain member.


```js
azure_blockchain.BlockchainMembers_ListRegenerateApiKeys({
  "blockchainMemberName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * blockchainMemberName **required** `string`: Blockchain member name.
  * apiKey [ApiKey](#apikey)
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [ApiKeyCollection](#apikeycollection)

### TransactionNodes_List
Lists the transaction nodes for a blockchain member.


```js
azure_blockchain.TransactionNodes_List({
  "blockchainMemberName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * blockchainMemberName **required** `string`: Blockchain member name.
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [TransactionNodeCollection](#transactionnodecollection)

### TransactionNodes_Delete
Delete the transaction node.


```js
azure_blockchain.TransactionNodes_Delete({
  "blockchainMemberName": "",
  "transactionNodeName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * blockchainMemberName **required** `string`: Blockchain member name.
  * transactionNodeName **required** `string`: Transaction node name.
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
*Output schema unknown*

### TransactionNodes_Get
Get the details of the transaction node.


```js
azure_blockchain.TransactionNodes_Get({
  "blockchainMemberName": "",
  "transactionNodeName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * blockchainMemberName **required** `string`: Blockchain member name.
  * transactionNodeName **required** `string`: Transaction node name.
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [TransactionNode](#transactionnode)

### TransactionNodes_Update
Update the transaction node.


```js
azure_blockchain.TransactionNodes_Update({
  "blockchainMemberName": "",
  "transactionNodeName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * blockchainMemberName **required** `string`: Blockchain member name.
  * transactionNodeName **required** `string`: Transaction node name.
  * transactionNode [TransactionNodeUpdate](#transactionnodeupdate)
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [TransactionNode](#transactionnode)

### TransactionNodes_Create
Create or update the transaction node.


```js
azure_blockchain.TransactionNodes_Create({
  "blockchainMemberName": "",
  "transactionNodeName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * blockchainMemberName **required** `string`: Blockchain member name.
  * transactionNodeName **required** `string`: Transaction node name.
  * transactionNode [TransactionNode](#transactionnode)
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [TransactionNode](#transactionnode)

### TransactionNodes_ListApiKeys
List the API keys for the transaction node.


```js
azure_blockchain.TransactionNodes_ListApiKeys({
  "blockchainMemberName": "",
  "transactionNodeName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * blockchainMemberName **required** `string`: Blockchain member name.
  * transactionNodeName **required** `string`: Transaction node name.
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [ApiKeyCollection](#apikeycollection)

### TransactionNodes_ListRegenerateApiKeys
Regenerate the API keys for the blockchain member.


```js
azure_blockchain.TransactionNodes_ListRegenerateApiKeys({
  "blockchainMemberName": "",
  "transactionNodeName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * blockchainMemberName **required** `string`: Blockchain member name.
  * transactionNodeName **required** `string`: Transaction node name.
  * apiKey [ApiKey](#apikey)
  * api-version **required** `string` (values: 2018-06-01-preview): Client API Version.
  * subscriptionId **required** `string`: Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [ApiKeyCollection](#apikeycollection)



## Definitions

### ApiKey
* ApiKey `object`: API key payload which is exposed in the request/response of the resource provider.
  * keyName `string`: Gets or sets the API key name.
  * value `string`: Gets or sets the API key value.

### ApiKeyCollection
* ApiKeyCollection `object`: Collection of the API key payload which is exposed in the response of the resource provider.
  * keys `array`: Gets or sets the collection of API key.
    * items [ApiKey](#apikey)

### BlockchainMember
* BlockchainMember `object`: Payload of the blockchain member which is exposed in the request/response of the resource provider.
  * properties [BlockchainMemberProperties](#blockchainmemberproperties)
  * sku [Sku](#sku)
  * location `string`: The GEO location of the blockchain service.
  * tags `object`: Tags of the service which is a list of key value pairs that describes the resource.
  * id `string`: Fully qualified resource Id of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the service - e.g. "Microsoft.Blockchain"

### BlockchainMemberCollection
* BlockchainMemberCollection `object`: Collection of the blockchain member payload which is exposed in the request/response of the resource provider.
  * nextLink `string`: Gets or sets the URL, that the client should use to fetch the next page (per server side paging).
  * value `array`: Gets or sets the collection of blockchain members.
    * items [BlockchainMember](#blockchainmember)

### BlockchainMemberNodesSku
* BlockchainMemberNodesSku `object`: Payload of the blockchain member nodes Sku for a blockchain member.
  * capacity `integer`: Gets or sets the nodes capacity.

### BlockchainMemberProperties
* BlockchainMemberProperties `object`: Payload of the blockchain member properties for a blockchain member.
  * consortium `string`: Gets or sets the consortium for the blockchain member.
  * consortiumManagementAccountAddress `string`: Gets the managed consortium management account address.
  * consortiumManagementAccountPassword `string`: Sets the managed consortium management account password.
  * consortiumMemberDisplayName `string`: Gets the display name of the member in the consortium.
  * consortiumRole `string`: Gets the role of the member in the consortium.
  * dns `string`: Gets the dns endpoint of the blockchain member.
  * firewallRules `array`: Gets or sets firewall rules
    * items [FirewallRule](#firewallrule)
  * password `string`: Sets the basic auth password of the blockchain member.
  * protocol `string` (values: NotSpecified, Parity, Quorum, Corda): Gets or sets the blockchain protocol.
  * provisioningState `string` (values: NotSpecified, Updating, Deleting, Succeeded, Failed, Stale): Gets or sets the blockchain member provision state.
  * publicKey `string`: Gets the public key of the blockchain member (default transaction node).
  * rootContractAddress `string`: Gets the Ethereum root contract address of the blockchain.
  * userName `string`: Gets the auth user name of the blockchain member.
  * validatorNodesSku [BlockchainMemberNodesSku](#blockchainmembernodessku)

### BlockchainMemberPropertiesUpdate
* BlockchainMemberPropertiesUpdate `object`: Update the payload of the blockchain member properties for a blockchain member.
  * consortiumManagementAccountPassword `string`: Sets the managed consortium management account password.
  * firewallRules `array`: Gets or sets the firewall rules.
    * items [FirewallRule](#firewallrule)
  * password `string`: Sets the transaction node dns endpoint basic auth password.

### BlockchainMemberUpdate
* BlockchainMemberUpdate `object`: Update the payload of the blockchain member which is exposed in the request/response of the resource provider.
  * properties [BlockchainMemberPropertiesUpdate](#blockchainmemberpropertiesupdate)
  * tags `object`: Tags of the service which is a list of key value pairs that describes the resource.

### Consortium
* Consortium `object`: Consortium payload
  * name `string`: Gets or sets the blockchain member name.
  * protocol `string` (values: NotSpecified, Parity, Quorum, Corda): Gets or sets the protocol for the consortium.

### ConsortiumCollection
* ConsortiumCollection `object`: Collection of the consortium payload.
  * value `array`: Gets or sets the collection of consortiums.
    * items [Consortium](#consortium)

### ConsortiumMember
* ConsortiumMember `object`: Consortium approval
  * dateModified `string`: Gets the consortium member modified date.
  * displayName `string`: Gets the consortium member display name.
  * joinDate `string`: Gets the consortium member join date.
  * name `string`: Gets the consortium member name.
  * role `string`: Gets the consortium member role.
  * status `string`: Gets the consortium member status.
  * subscriptionId `string`: Gets the consortium member subscription id.

### ConsortiumMemberCollection
* ConsortiumMemberCollection `object`: Collection of consortium payload.
  * nextLink `string`: Gets or sets the URL, that the client should use to fetch the next page (per server side paging).
  * value `array`: Gets or sets the collection of consortiums.
    * items [ConsortiumMember](#consortiummember)

### FirewallRule
* FirewallRule `object`: Ip range for firewall rules
  * endIpAddress `string`: Gets or sets the end IP address of the firewall rule range.
  * ruleName `string`: Gets or sets the name of the firewall rules.
  * startIpAddress `string`: Gets or sets the start IP address of the firewall rule range.

### NameAvailability
* NameAvailability `object`: Name availability payload which is exposed in the response of the resource provider.
  * message `string`: Gets or sets the message.
  * nameAvailable `boolean`: Gets or sets the value indicating whether the name is available.
  * reason `string` (values: NotSpecified, AlreadyExists, Invalid): Gets or sets the name availability reason.

### NameAvailabilityRequest
* NameAvailabilityRequest `object`: Name availability request payload which is exposed in the request of the resource provider.
  * name `string`: Gets or sets the name to check.
  * type `string`: Gets or sets the type of the resource to check.

### OperationResult
* OperationResult `object`: Operation result payload which is exposed in the response of the resource provider.
  * endTime `string`: Gets or sets the operation end time.
  * name `string`: Gets or sets the operation name.
  * startTime `string`: Gets or sets the operation start time.

### Resource
* Resource `object`: The core properties of the resources.
  * id `string`: Fully qualified resource Id of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the service - e.g. "Microsoft.Blockchain"

### ResourceProviderOperation
* ResourceProviderOperation `object`: Operation payload which is exposed in the response of the resource provider.
  * display [ResourceProviderOperationDisplay](#resourceprovideroperationdisplay)
  * isDataAction `boolean`: Gets or sets a value indicating whether the operation is a data action or not.
  * name `string`: Gets or sets the operation name.
  * origin `string`: Gets or sets the origin.

### ResourceProviderOperationCollection
* ResourceProviderOperationCollection `object`: Collection of operation payload which is exposed in the response of the resource provider.
  * nextLink `string`: Gets or sets the URL, that the client should use to fetch the next page (per server side paging).
  * value `array`: Gets or sets the collection of operations.
    * items [ResourceProviderOperation](#resourceprovideroperation)

### ResourceProviderOperationDisplay
* ResourceProviderOperationDisplay `object`: Operation display payload which is exposed in the response of the resource provider.
  * description `string`: Gets or sets the description of the provider for display purposes.
  * operation `string`: Gets or sets the name of the operation for display purposes.
  * provider `string`: Gets or sets the name of the provider for display purposes.
  * resource `string`: Gets or sets the name of the resource type for display purposes.

### ResourceTypeSku
* ResourceTypeSku `object`: Resource type Sku.
  * resourceType `string`: Gets or sets the resource type
  * skus `array`: Gets or sets the Skus
    * items [SkuSetting](#skusetting)

### ResourceTypeSkuCollection
* ResourceTypeSkuCollection `object`: Collection of the resource type Sku.
  * value `array`: Gets or sets the collection of resource type Sku.
    * items [ResourceTypeSku](#resourcetypesku)

### Sku
* Sku `object`: Blockchain member Sku in payload
  * name `string`: Gets or sets Sku name
  * tier `string`: Gets or sets Sku tier

### SkuSetting
* SkuSetting `object`: Sku Setting.
  * locations `array`: Gets or sets the locations.
    * items `string`
  * name `string`: Gets or sets the Sku name.
  * requiredFeatures `array`: Gets or sets the required features.
    * items `string`
  * tier `string`: Gets or sets the Sku tier.

### TrackedResource
* TrackedResource `object`: The resource model definition for a top level resource.
  * location `string`: The GEO location of the blockchain service.
  * tags `object`: Tags of the service which is a list of key value pairs that describes the resource.
  * id `string`: Fully qualified resource Id of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the service - e.g. "Microsoft.Blockchain"

### TransactionNode
* TransactionNode `object`: Payload of the transaction node which is the request/response of the resource provider.
  * location `string`: Gets or sets the transaction node location.
  * properties [TransactionNodeProperties](#transactionnodeproperties)
  * id `string`: Fully qualified resource Id of the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the service - e.g. "Microsoft.Blockchain"

### TransactionNodeCollection
* TransactionNodeCollection `object`: Collection of transaction node payload which is exposed in the request/response of the resource provider.
  * nextLink `string`: Gets or sets the URL, that the client should use to fetch the next page (per server side paging).
  * value `array`: Gets or sets the collection of transaction nodes.
    * items [TransactionNode](#transactionnode)

### TransactionNodeProperties
* TransactionNodeProperties `object`: Payload of transaction node properties payload in the transaction node payload.
  * dns `string`: Gets or sets the transaction node dns endpoint.
  * firewallRules `array`: Gets or sets the firewall rules.
    * items [FirewallRule](#firewallrule)
  * password `string`: Sets the transaction node dns endpoint basic auth password.
  * provisioningState `string` (values: NotSpecified, Updating, Deleting, Succeeded, Failed): Gets or sets the blockchain member provision state.
  * publicKey `string`: Gets or sets the transaction node public key.
  * userName `string`: Gets or sets the transaction node dns endpoint basic auth user name.

### TransactionNodePropertiesUpdate
* TransactionNodePropertiesUpdate `object`: Update the payload of the transaction node properties in the transaction node payload.
  * firewallRules `array`: Gets or sets the firewall rules.
    * items [FirewallRule](#firewallrule)
  * password `string`: Sets the transaction node dns endpoint basic auth password.

### TransactionNodeUpdate
* TransactionNodeUpdate `object`: Update the transaction node payload which is exposed in the request/response of the resource provider.
  * properties [TransactionNodePropertiesUpdate](#transactionnodepropertiesupdate)


