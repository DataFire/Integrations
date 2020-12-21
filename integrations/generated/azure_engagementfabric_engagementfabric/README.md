# @datafire/azure_engagementfabric_engagementfabric

Client library for EngagementFabric

## Installation and Usage
```bash
npm install --save @datafire/azure_engagementfabric_engagementfabric
```
```js
let azure_engagementfabric_engagementfabric = require('@datafire/azure_engagementfabric_engagementfabric').create({
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

Microsoft Customer Engagement Fabric

## Actions

### Operations_List
List operation of EngagementFabric resources


```js
azure_engagementfabric_engagementfabric.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version

#### Output
* output [OperationList](#operationlist)

### Accounts_List
List the EngagementFabric accounts in given subscription


```js
azure_engagementfabric_engagementfabric.Accounts_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID
  * api-version **required** `string`: API version

#### Output
* output [AccountList](#accountlist)

### SKUs_List
List available SKUs of EngagementFabric resource


```js
azure_engagementfabric_engagementfabric.SKUs_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID
  * api-version **required** `string`: API version

#### Output
* output [SkuDescriptionList](#skudescriptionlist)

### Accounts_ListByResourceGroup
List EngagementFabric accounts in given resource group


```js
azure_engagementfabric_engagementfabric.Accounts_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID
  * resourceGroupName **required** `string`: Resource Group Name
  * api-version **required** `string`: API version

#### Output
* output [AccountList](#accountlist)

### Accounts_Delete
Delete the EngagementFabric account


```js
azure_engagementfabric_engagementfabric.Accounts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID
  * resourceGroupName **required** `string`: Resource Group Name
  * accountName **required** `string`: Account Name
  * api-version **required** `string`: API version

#### Output
*Output schema unknown*

### Accounts_Get
Get the EngagementFabric account


```js
azure_engagementfabric_engagementfabric.Accounts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID
  * resourceGroupName **required** `string`: Resource Group Name
  * accountName **required** `string`: Account Name
  * api-version **required** `string`: API version

#### Output
* output [Account](#account)

### Accounts_Update
Update EngagementFabric account


```js
azure_engagementfabric_engagementfabric.Accounts_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "accountPatch": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID
  * resourceGroupName **required** `string`: Resource Group Name
  * accountName **required** `string`: Account Name
  * accountPatch **required** [AccountPatch](#accountpatch)
  * api-version **required** `string`: API version

#### Output
* output [Account](#account)

### Accounts_CreateOrUpdate
Create or Update the EngagementFabric account


```js
azure_engagementfabric_engagementfabric.Accounts_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "account": {
    "location": "",
    "sku": {
      "name": ""
    }
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID
  * resourceGroupName **required** `string`: Resource Group Name
  * accountName **required** `string`: Account Name
  * account **required** [Account](#account)
  * api-version **required** `string`: API version

#### Output
* output [Account](#account)

### Channels_ListByAccount
List the EngagementFabric channels


```js
azure_engagementfabric_engagementfabric.Channels_ListByAccount({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID
  * resourceGroupName **required** `string`: Resource Group Name
  * accountName **required** `string`: Account Name
  * api-version **required** `string`: API version

#### Output
* output [ChannelList](#channellist)

### Channels_Delete
Delete the EngagementFabric channel


```js
azure_engagementfabric_engagementfabric.Channels_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "channelName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID
  * resourceGroupName **required** `string`: Resource Group Name
  * accountName **required** `string`: Account Name
  * channelName **required** `string`: The EngagementFabric channel name
  * api-version **required** `string`: API version

#### Output
*Output schema unknown*

### Channels_Get
Get the EngagementFabric channel


```js
azure_engagementfabric_engagementfabric.Channels_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "channelName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID
  * resourceGroupName **required** `string`: Resource Group Name
  * accountName **required** `string`: Account Name
  * channelName **required** `string`: Channel Name
  * api-version **required** `string`: API version

#### Output
* output [Channel](#channel)

### Channels_CreateOrUpdate
Create or Update the EngagementFabric channel


```js
azure_engagementfabric_engagementfabric.Channels_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "channelName": "",
  "channel": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID
  * resourceGroupName **required** `string`: Resource Group Name
  * accountName **required** `string`: Account Name
  * channelName **required** `string`: Channel Name
  * channel **required** [Channel](#channel)
  * api-version **required** `string`: API version

#### Output
* output [Channel](#channel)

### Accounts_ListChannelTypes
List available EngagementFabric channel types and functions


```js
azure_engagementfabric_engagementfabric.Accounts_ListChannelTypes({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID
  * resourceGroupName **required** `string`: Resource Group Name
  * accountName **required** `string`: Account Name
  * api-version **required** `string`: API version

#### Output
* output [ChannelTypeDescriptionList](#channeltypedescriptionlist)

### Accounts_ListKeys
List keys of the EngagementFabric account


```js
azure_engagementfabric_engagementfabric.Accounts_ListKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID
  * resourceGroupName **required** `string`: Resource Group Name
  * accountName **required** `string`: Account Name
  * api-version **required** `string`: API version

#### Output
* output [KeyDescriptionList](#keydescriptionlist)

### Accounts_RegenerateKey
Regenerate key of the EngagementFabric account


```js
azure_engagementfabric_engagementfabric.Accounts_RegenerateKey({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "parameter": {
    "name": "",
    "rank": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID
  * resourceGroupName **required** `string`: Resource Group Name
  * accountName **required** `string`: Account Name
  * parameter **required** [RegenerateKeyParameter](#regeneratekeyparameter)
  * api-version **required** `string`: API version

#### Output
* output [KeyDescription](#keydescription)

### CheckNameAvailability
Check availability of EngagementFabric resource


```js
azure_engagementfabric_engagementfabric.CheckNameAvailability({
  "subscriptionId": "",
  "resourceGroupName": "",
  "parameters": {
    "name": "",
    "type": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription ID
  * resourceGroupName **required** `string`: Resource Group Name
  * parameters **required** [CheckNameAvailabilityParameter](#checknameavailabilityparameter)
  * api-version **required** `string`: API version

#### Output
* output [CheckNameAvailabilityResult](#checknameavailabilityresult)



## Definitions

### Account
* Account `object`: The EngagementFabric account
  * location **required** `string`: The location of the resource
  * sku **required** [SKU](#sku)
  * tags `object`: The tags of the resource
  * id `string`: The ID of the resource
  * name `string`: The name of the resource
  * type `string`: The fully qualified type of the resource

### AccountList
* AccountList `object`: The list of the EngagementFabric accounts
  * value `array`: EngagementFabric accounts
    * items [Account](#account)

### AccountPatch
* AccountPatch `object`: The patch of EngagementFabric account
  * tags `object`: The tags of the resource

### Channel
* Channel `object`: The EngagementFabric channel
  * properties [ChannelProperties](#channelproperties)
  * id `string`: The ID of the resource
  * name `string`: The name of the resource
  * type `string`: The fully qualified type of the resource

### ChannelList
* ChannelList `object`: The list of the EngagementFabric channels
  * value `array`: EngagementFabric channels
    * items [Channel](#channel)

### ChannelProperties
* ChannelProperties `object`: The EngagementFabric channel properties
  * channelFunctions `array`: The functions to be enabled for the channel
    * items `string`
  * channelType **required** `string`: The channel type
  * credentials `object`: The channel credentials

### ChannelTypeDescription
* ChannelTypeDescription `object`: EngagementFabric channel description
  * channelDescription `string`: Text description for the channel
  * channelFunctions `array`: All the available functions for the channel
    * items `string`
  * channelType `string`: Channel type

### ChannelTypeDescriptionList
* ChannelTypeDescriptionList `object`: List of the EngagementFabric channel descriptions
  * value `array`: Channel descriptions
    * items [ChannelTypeDescription](#channeltypedescription)

### CheckNameAvailabilityParameter
* CheckNameAvailabilityParameter `object`: The parameter for name availability check
  * name **required** `string`: The name to be checked
  * type **required** `string`: The fully qualified resource type for the name to be checked

### CheckNameAvailabilityResult
* CheckNameAvailabilityResult `object`: The result of name availability check
  * message `string`: The message if name is unavailable
  * nameAvailable `boolean`: The name to be checked
  * reason [CheckNameUnavailableReason](#checknameunavailablereason)

### CheckNameUnavailableReason
* CheckNameUnavailableReason `string` (values: Invalid, AlreadyExists): The reason of name availability result

### CloudError
* CloudError `object`: The default error response
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: Content of the default error response
  * code `string`: The error code
  * details `array`: The list of additional details
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: The error message
  * target `string`: The target of the particular error

### KeyDescription
* KeyDescription `object`: The description of the EngagementFabric account key
  * name `string`: The name of the key
  * rank [KeyRank](#keyrank)
  * value `string`: The value of the key

### KeyDescriptionList
* KeyDescriptionList `object`: The list of the EngagementFabric account keys
  * value `array`: Account keys
    * items [KeyDescription](#keydescription)

### KeyRank
* KeyRank `string` (values: PrimaryKey, SecondaryKey): The rank of the EngagementFabric account key

### Operation
* Operation `object`: The EngagementFabric operation
  * display [OperationDisplay](#operationdisplay)
  * name `string`: The name of the EngagementFabric operation

### OperationDisplay
* OperationDisplay `object`: The display information of the EngagementFabric operation
  * description `string`: The description of the EngagementFabric operation
  * operation `string`: The name of the EngagementFabric operation
  * provider `string`: The resource provider namespace of the EngagementFabric operation
  * resource `string`: The resource type of the EngagementFabric operation

### OperationList
* OperationList `object`: The list of the EngagementFabric operations
  * value `array`: The EngagementFabric operations
    * items [Operation](#operation)

### ProxyOnlyResource
* ProxyOnlyResource `object`: The base model for the proxy-only Azure resource
  * id `string`: The ID of the resource
  * name `string`: The name of the resource
  * type `string`: The fully qualified type of the resource

### RegenerateKeyParameter
* RegenerateKeyParameter `object`: The parameter to regenerate single EngagementFabric account key
  * name **required** `string`: The name of key to be regenerated
  * rank **required** [KeyRank](#keyrank)

### Resource
* Resource `object`: The base model for Azure resource
  * id `string`: The ID of the resource
  * name `string`: The name of the resource
  * type `string`: The fully qualified type of the resource

### SKU
* SKU `object`: The EngagementFabric SKU
  * name **required** `string`: The name of the SKU
  * tier `string`: The price tier of the SKU

### SkuDescription
* SkuDescription `object`: The EngagementFabric SKU description of given resource type
  * locationInfo `array`: Locations and zones
    * items [SkuLocationInfoItem](#skulocationinfoitem)
  * locations `array`: The set of locations that the SKU is available
    * items `string`
  * name `string`: The name of the SKU
  * resourceType `string`: The fully qualified resource type
  * restrictions `array`: The restrictions because of which SKU cannot be used
    * items `object`
  * tier `string`: The price tier of the SKU

### SkuDescriptionList
* SkuDescriptionList `object`: The list of the EngagementFabric SKU descriptions
  * value `array`: SKU descriptions
    * items [SkuDescription](#skudescription)

### SkuLocationInfoItem
* SkuLocationInfoItem `object`: The Locations and zones info for SKU
  * location `string`: The available location of the SKU
  * zones `array`: The available zone of the SKU
    * items `string`

### TrackedResource
* TrackedResource `object`: The base model for the tracked Azure resource
  * location **required** `string`: The location of the resource
  * sku **required** [SKU](#sku)
  * tags `object`: The tags of the resource
  * id `string`: The ID of the resource
  * name `string`: The name of the resource
  * type `string`: The fully qualified type of the resource


