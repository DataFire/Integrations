# @datafire/azure_botservice

Client library for Azure Bot Service

## Installation and Usage
```bash
npm install --save @datafire/azure_botservice
```
```js
let azure_botservice = require('@datafire/azure_botservice').create({
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

Azure Bot Service is a platform for creating smart conversational agents.

## Actions

### EnterpriseChannels_CheckNameAvailability
Check whether an Enterprise Channel name is available.


```js
azure_botservice.EnterpriseChannels_CheckNameAvailability({
  "parameters": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [EnterpriseChannelCheckNameAvailabilityRequest](#enterprisechannelchecknameavailabilityrequest)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EnterpriseChannelCheckNameAvailabilityResponse](#enterprisechannelchecknameavailabilityresponse)

### Bots_GetCheckNameAvailability
Check whether a bot name is available.


```js
azure_botservice.Bots_GetCheckNameAvailability({
  "parameters": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [CheckNameAvailabilityRequestBody](#checknameavailabilityrequestbody)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [CheckNameAvailabilityResponseBody](#checknameavailabilityresponsebody)

### Operations_List
Lists all the available BotService operations.


```js
azure_botservice.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [OperationEntityListResult](#operationentitylistresult)

### Bots_List
Returns all the resources of a particular type belonging to a subscription.


```js
azure_botservice.Bots_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [BotResponseList](#botresponselist)

### BotConnection_ListServiceProviders
Lists the available Service Providers for creating Connection Settings


```js
azure_botservice.BotConnection_ListServiceProviders({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [ServiceProviderResponseList](#serviceproviderresponselist)

### Bots_ListByResourceGroup
Returns all the resources of a particular type belonging to a resource group


```js
azure_botservice.Bots_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [BotResponseList](#botresponselist)

### Bots_Delete
Deletes a Bot Service from the resource group. 


```js
azure_botservice.Bots_Delete({
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
*Output schema unknown*

### Bots_Get
Returns a BotService specified by the parameters.


```js
azure_botservice.Bots_Get({
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [Bot](#bot)

### Bots_Update
Updates a Bot Service


```js
azure_botservice.Bots_Update({
  "resourceGroupName": "",
  "resourceName": "",
  "parameters": {},
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * parameters **required** [Bot](#bot)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [Bot](#bot)

### Bots_Create
Creates a Bot Service. Bot Service is a resource group wide resource type.


```js
azure_botservice.Bots_Create({
  "resourceGroupName": "",
  "resourceName": "",
  "parameters": {},
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * parameters **required** [Bot](#bot)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [Bot](#bot)

### BotConnection_Delete
Deletes a Connection Setting registration for a Bot Service


```js
azure_botservice.BotConnection_Delete({
  "resourceGroupName": "",
  "resourceName": "",
  "connectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * connectionName **required** `string`: The name of the Bot Service Connection Setting resource
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
*Output schema unknown*

### BotConnection_Get
Get a Connection Setting registration for a Bot Service


```js
azure_botservice.BotConnection_Get({
  "resourceGroupName": "",
  "resourceName": "",
  "connectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * connectionName **required** `string`: The name of the Bot Service Connection Setting resource
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [ConnectionSetting](#connectionsetting)

### BotConnection_Update
Updates a Connection Setting registration for a Bot Service


```js
azure_botservice.BotConnection_Update({
  "resourceGroupName": "",
  "resourceName": "",
  "connectionName": "",
  "parameters": {},
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * connectionName **required** `string`: The name of the Bot Service Connection Setting resource
  * parameters **required** [ConnectionSetting](#connectionsetting)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [ConnectionSetting](#connectionsetting)

### BotConnection_Create
Register a new Auth Connection for a Bot Service


```js
azure_botservice.BotConnection_Create({
  "resourceGroupName": "",
  "resourceName": "",
  "connectionName": "",
  "parameters": {},
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * connectionName **required** `string`: The name of the Bot Service Connection Setting resource
  * parameters **required** [ConnectionSetting](#connectionsetting)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [ConnectionSetting](#connectionsetting)

### BotConnection_ListWithSecrets
Get a Connection Setting registration for a Bot Service


```js
azure_botservice.BotConnection_ListWithSecrets({
  "resourceGroupName": "",
  "resourceName": "",
  "connectionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * connectionName **required** `string`: The name of the Bot Service Connection Setting resource
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [ConnectionSetting](#connectionsetting)

### Channels_ListByResourceGroup
Returns all the Channel registrations of a particular BotService resource


```js
azure_botservice.Channels_ListByResourceGroup({
  "resourceGroupName": "",
  "resourceName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ChannelResponseList](#channelresponselist)

### Channels_Delete
Deletes a Channel registration from a Bot Service


```js
azure_botservice.Channels_Delete({
  "resourceGroupName": "",
  "resourceName": "",
  "channelName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * channelName **required** `string`: The name of the Bot resource.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
*Output schema unknown*

### Channels_Get
Returns a BotService Channel registration specified by the parameters.


```js
azure_botservice.Channels_Get({
  "resourceGroupName": "",
  "resourceName": "",
  "channelName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * channelName **required** `string`: The name of the Bot resource.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [BotChannel](#botchannel)

### Channels_Update
Updates a Channel registration for a Bot Service


```js
azure_botservice.Channels_Update({
  "resourceGroupName": "",
  "resourceName": "",
  "channelName": "",
  "parameters": {},
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * channelName **required** `string` (values: FacebookChannel, EmailChannel, KikChannel, TelegramChannel, SlackChannel, MsTeamsChannel, SkypeChannel, WebChatChannel, DirectLineChannel, SmsChannel): The name of the Channel resource.
  * parameters **required** [BotChannel](#botchannel)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [BotChannel](#botchannel)

### Channels_Create
Creates a Channel registration for a Bot Service


```js
azure_botservice.Channels_Create({
  "resourceGroupName": "",
  "resourceName": "",
  "channelName": "",
  "parameters": {},
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * channelName **required** `string` (values: FacebookChannel, EmailChannel, KikChannel, TelegramChannel, SlackChannel, MsTeamsChannel, SkypeChannel, WebChatChannel, DirectLineChannel, SmsChannel): The name of the Channel resource.
  * parameters **required** [BotChannel](#botchannel)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [BotChannel](#botchannel)

### Channels_ListWithKeys
Lists a Channel registration for a Bot Service including secrets


```js
azure_botservice.Channels_ListWithKeys({
  "resourceGroupName": "",
  "resourceName": "",
  "channelName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * channelName **required** `string` (values: FacebookChannel, EmailChannel, KikChannel, TelegramChannel, SlackChannel, MsTeamsChannel, SkypeChannel, WebChatChannel, DirectLineChannel, SmsChannel): The name of the Channel resource.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [BotChannel](#botchannel)

### BotConnection_ListByBotService
Returns all the Connection Settings registered to a particular BotService resource


```js
azure_botservice.BotConnection_ListByBotService({
  "resourceGroupName": "",
  "resourceName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ConnectionSettingResponseList](#connectionsettingresponselist)

### EnterpriseChannels_ListByResourceGroup
Returns all the resources of a particular type belonging to a resource group.


```js
azure_botservice.EnterpriseChannels_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EnterpriseChannelResponseList](#enterprisechannelresponselist)

### EnterpriseChannels_Delete
Deletes an Enterprise Channel from the resource group


```js
azure_botservice.EnterpriseChannels_Delete({
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
*Output schema unknown*

### EnterpriseChannels_Get
Returns an Enterprise Channel specified by the parameters.


```js
azure_botservice.EnterpriseChannels_Get({
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [EnterpriseChannel](#enterprisechannel)

### EnterpriseChannels_Update
Updates an Enterprise Channel.


```js
azure_botservice.EnterpriseChannels_Update({
  "resourceGroupName": "",
  "resourceName": "",
  "parameters": {},
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * parameters **required** [EnterpriseChannel](#enterprisechannel)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [EnterpriseChannel](#enterprisechannel)

### EnterpriseChannels_Create
Creates an Enterprise Channel.


```js
azure_botservice.EnterpriseChannels_Create({
  "resourceGroupName": "",
  "resourceName": "",
  "parameters": {},
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Bot resource group in the user subscription.
  * resourceName **required** `string`: The name of the Bot resource.
  * parameters **required** [EnterpriseChannel](#enterprisechannel)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Azure Subscription ID.

#### Output
* output [EnterpriseChannel](#enterprisechannel)



## Definitions

### Bot
* Bot `object`: Bot resource definition
  * properties [BotProperties](#botproperties)
  * etag `string`: Entity Tag
  * id `string`: Specifies the resource ID.
  * kind [Kind](#kind)
  * location `string`: Specifies the location of the resource.
  * name `string`: Specifies the name of the resource.
  * sku [Sku](#sku)
  * tags `object`: Contains resource tags defined as key/value pairs.
  * type `string`: Specifies the type of the resource.

### BotChannel
* BotChannel `object`: Bot channel resource definition
  * properties [Channel](#channel)
  * etag `string`: Entity Tag
  * id `string`: Specifies the resource ID.
  * kind [Kind](#kind)
  * location `string`: Specifies the location of the resource.
  * name `string`: Specifies the name of the resource.
  * sku [Sku](#sku)
  * tags `object`: Contains resource tags defined as key/value pairs.
  * type `string`: Specifies the type of the resource.

### BotProperties
* BotProperties `object`: The parameters to provide for the Bot.
  * configuredChannels `array`: Collection of channels for which the bot is configured
    * items `string`
  * description `string`: The description of the bot
  * developerAppInsightKey `string`: The Application Insights key
  * developerAppInsightsApiKey `string`: The Application Insights Api Key
  * developerAppInsightsApplicationId `string`: The Application Insights App Id
  * displayName **required** `string`: The Name of the bot
  * enabledChannels `array`: Collection of channels for which the bot is enabled
    * items `string`
  * endpoint **required** `string`: The bot's endpoint
  * endpointVersion `string`: The bot's endpoint version
  * iconUrl `string`: The Icon Url of the bot
  * luisAppIds `array`: Collection of LUIS App Ids
    * items `string`
  * luisKey `string`: The LUIS Key
  * msaAppId **required** `string`: Microsoft App Id for the bot

### BotResponseList
* BotResponseList `object`: The list of  bot service operation response.
  * nextLink `string`: The link used to get the next page of bot service resources.
  * value `array`: Gets the list of bot service results and their properties.
    * items [Bot](#bot)

### Channel
* Channel `object`: Channel definition
  * channelName **required** `string`: The channel name

### ChannelResponseList
* ChannelResponseList `object`: The list of bot service channel operation response.
  * nextLink `string`: The link used to get the next page of bot service channel resources.
  * value `array`: Gets the list of bot service channel results and their properties.
    * items [BotChannel](#botchannel)

### CheckNameAvailabilityRequestBody
* CheckNameAvailabilityRequestBody `object`: The request body for a request to Bot Service Management to check availability of a bot name.
  * name `string`: the name of the bot for which availability needs to be checked.
  * type `string`: the type of the bot for which availability needs to be checked

### CheckNameAvailabilityResponseBody
* CheckNameAvailabilityResponseBody `object`: The response body returned for a request to Bot Service Management to check availability of a bot name.
  * message `string`: additional message from the bot management api showing why a bot name is not available
  * valid `boolean`: indicates if the bot name is valid.

### ConnectionItemName
* ConnectionItemName `object`: The display name of a connection Item Setting registered with the Bot
  * name `string`: Connection Item name that has been added in the API

### ConnectionSetting
* ConnectionSetting `object`: Bot channel resource definition
  * properties [ConnectionSettingProperties](#connectionsettingproperties)
  * etag `string`: Entity Tag
  * id `string`: Specifies the resource ID.
  * kind [Kind](#kind)
  * location `string`: Specifies the location of the resource.
  * name `string`: Specifies the name of the resource.
  * sku [Sku](#sku)
  * tags `object`: Contains resource tags defined as key/value pairs.
  * type `string`: Specifies the type of the resource.

### ConnectionSettingParameter
* ConnectionSettingParameter `object`: Extra Parameter in a Connection Setting Properties to indicate service provider specific properties
  * key `string`: Key for the Connection Setting Parameter.
  * value `string`: Value associated with the Connection Setting Parameter.

### ConnectionSettingProperties
* ConnectionSettingProperties `object`: Properties for a Connection Setting Item
  * clientId `string`: Client Id associated with the Connection Setting.
  * clientSecret `string`: Client Secret associated with the Connection Setting
  * parameters `array`: Service Provider Parameters associated with the Connection Setting
    * items [ConnectionSettingParameter](#connectionsettingparameter)
  * scopes `string`: Scopes associated with the Connection Setting
  * serviceProviderDisplayName `string`: Service Provider Display Name associated with the Connection Setting
  * serviceProviderId `string`: Service Provider Id associated with the Connection Setting
  * settingId `string`: Setting Id set by the service for the Connection Setting.

### ConnectionSettingResponseList
* ConnectionSettingResponseList `object`: The list of bot service connection settings response.
  * nextLink `string`: The link used to get the next page of bot service connection setting resources.
  * value `array`: Gets the list of bot service connection settings and their properties.
    * items [ConnectionSetting](#connectionsetting)

### DirectLineChannel
* DirectLineChannel `object`: Direct Line channel definition
  * properties [DirectLineChannelProperties](#directlinechannelproperties)
  * channelName **required** `string`: The channel name

### DirectLineChannelProperties
* DirectLineChannelProperties `object`: The parameters to provide for the Direct Line channel.
  * sites `array`: The list of Direct Line sites
    * items [DirectLineSite](#directlinesite)

### DirectLineSite
* DirectLineSite `object`: A site for the Direct Line channel
  * isEnabled **required** `boolean`: Whether this site is enabled for DirectLine channel.
  * isSecureSiteEnabled `boolean`: Whether this site is enabled for authentication with Bot Framework.
  * isV1Enabled **required** `boolean`: Whether this site is enabled for Bot Framework V1 protocol.
  * isV3Enabled **required** `boolean`: Whether this site is enabled for Bot Framework V1 protocol.
  * key `string`: Primary key. Value only returned through POST to the action Channel List API, otherwise empty.
  * key2 `string`: Secondary key. Value only returned through POST to the action Channel List API, otherwise empty.
  * siteId `string`: Site Id
  * siteName **required** `string`: Site name
  * trustedOrigins `array`: List of Trusted Origin URLs for this site. This field is applicable only if isSecureSiteEnabled is True.
    * items `string`

### EmailChannel
* EmailChannel `object`: Email channel definition
  * properties [EmailChannelProperties](#emailchannelproperties)
  * channelName **required** `string`: The channel name

### EmailChannelProperties
* EmailChannelProperties `object`: The parameters to provide for the Email channel.
  * emailAddress **required** `string`: The email address
  * isEnabled **required** `boolean`: Whether this channel is enabled for the bot
  * password **required** `string`: The password for the email address. Value only returned through POST to the action Channel List API, otherwise empty.

### EnterpriseChannel
* EnterpriseChannel `object`: Enterprise Channel resource definition
  * properties [EnterpriseChannelProperties](#enterprisechannelproperties)
  * etag `string`: Entity Tag
  * id `string`: Specifies the resource ID.
  * kind [Kind](#kind)
  * location `string`: Specifies the location of the resource.
  * name `string`: Specifies the name of the resource.
  * sku [Sku](#sku)
  * tags `object`: Contains resource tags defined as key/value pairs.
  * type `string`: Specifies the type of the resource.

### EnterpriseChannelCheckNameAvailabilityRequest
* EnterpriseChannelCheckNameAvailabilityRequest `object`: A request to Bot Service Management to check availability of an Enterprise Channel name.
  * name `string`: The name of the Enterprise Channel for which availability needs to be checked.

### EnterpriseChannelCheckNameAvailabilityResponse
* EnterpriseChannelCheckNameAvailabilityResponse `object`: A request to Bot Service Management to check availability of an Enterprise Channel name.
  * message `string`: Additional information about why a bot name is not available.
  * valid `boolean`: Indicates if the Enterprise Channel name is valid.

### EnterpriseChannelNode
* EnterpriseChannelNode `object`: The properties specific to an Enterprise Channel Node.
  * azureLocation **required** `string`: The location of the Enterprise Channel Node.
  * azureSku **required** `string`: The sku of the Enterprise Channel Node.
  * id `string`: Id of Enterprise Channel Node. This is generated by the Bot Framework.
  * name **required** `string`: The name of the Enterprise Channel Node.
  * state `string` (values: Creating, CreateFailed, Started, Starting, StartFailed, Stopped, Stopping, StopFailed, Deleting, DeleteFailed): The current state of the Enterprise Channel Node.

### EnterpriseChannelProperties
* EnterpriseChannelProperties `object`: The parameters to provide for the Enterprise Channel.
  * nodes **required** `array`: The nodes associated with the Enterprise Channel.
    * items [EnterpriseChannelNode](#enterprisechannelnode)
  * state `string` (values: Creating, CreateFailed, Started, Starting, StartFailed, Stopped, Stopping, StopFailed, Deleting, DeleteFailed): The current state of the Enterprise Channel.

### EnterpriseChannelResponseList
* EnterpriseChannelResponseList `object`: The list of  bot service operation response.
  * nextLink `string`: The link used to get the next page of bot service resources.
  * value `array`: The list of Enterprise Channels and their properties.
    * items [EnterpriseChannel](#enterprisechannel)

### Error
* Error `object`: Bot Service error object.
  * error [ErrorBody](#errorbody)

### ErrorBody
* ErrorBody `object`: Bot Service error body.
  * code **required** `string`: error code
  * message **required** `string`: error message

### FacebookChannel
* FacebookChannel `object`: Facebook channel definition
  * properties [FacebookChannelProperties](#facebookchannelproperties)
  * channelName **required** `string`: The channel name

### FacebookChannelProperties
* FacebookChannelProperties `object`: The parameters to provide for the Facebook channel.
  * appId **required** `string`: Facebook application id
  * appSecret **required** `string`: Facebook application secret. Value only returned through POST to the action Channel List API, otherwise empty.
  * callbackUrl `string`: Callback Url
  * isEnabled **required** `boolean`: Whether this channel is enabled for the bot
  * pages `array`: The list of Facebook pages
    * items [FacebookPage](#facebookpage)
  * verifyToken `string`: Verify token. Value only returned through POST to the action Channel List API, otherwise empty.

### FacebookPage
* FacebookPage `object`: A Facebook page for Facebook channel registration
  * accessToken **required** `string`: Facebook application access token. Value only returned through POST to the action Channel List API, otherwise empty.
  * id **required** `string`: Page id

### KikChannel
* KikChannel `object`: Kik channel definition
  * properties [KikChannelProperties](#kikchannelproperties)
  * channelName **required** `string`: The channel name

### KikChannelProperties
* KikChannelProperties `object`: The parameters to provide for the Kik channel.
  * apiKey **required** `string`: Kik API key. Value only returned through POST to the action Channel List API, otherwise empty.
  * isEnabled **required** `boolean`: Whether this channel is enabled for the bot
  * isValidated `boolean`: Whether this channel is validated for the bot
  * userName **required** `string`: The Kik user name

### Kind
* Kind `string` (values: sdk, designer, bot, function): Indicates the type of bot service

### MsTeamsChannel
* MsTeamsChannel `object`: Microsoft Teams channel definition
  * properties [MsTeamsChannelProperties](#msteamschannelproperties)
  * channelName **required** `string`: The channel name

### MsTeamsChannelProperties
* MsTeamsChannelProperties `object`: The parameters to provide for the Microsoft Teams channel.
  * callingWebHook `string`: Webhook for Microsoft Teams channel calls
  * enableCalling `boolean`: Enable calling for Microsoft Teams channel
  * isEnabled **required** `boolean`: Whether this channel is enabled for the bot

### OperationDisplayInfo
* OperationDisplayInfo `object`: The operation supported by Bot Service Management.
  * description `string`: The description of the operation.
  * operation `string`: The action that users can perform, based on their permission level.
  * provider `string`: Service provider: Microsoft Bot Service.
  * resource `string`: Resource on which the operation is performed.

### OperationEntity
* OperationEntity `object`: The operations supported by Bot Service Management.
  * display [OperationDisplayInfo](#operationdisplayinfo)
  * name `string`: Operation name: {provider}/{resource}/{operation}.
  * origin `string`: The origin of the operation.
  * properties `object`: Additional properties.

### OperationEntityListResult
* OperationEntityListResult `object`: The list of bot service operation response.
  * nextLink `string`: The link used to get the next page of operations.
  * value `array`: The list of operations.
    * items [OperationEntity](#operationentity)

### Resource
* Resource `object`: Azure resource
  * etag `string`: Entity Tag
  * id `string`: Specifies the resource ID.
  * kind [Kind](#kind)
  * location `string`: Specifies the location of the resource.
  * name `string`: Specifies the name of the resource.
  * sku [Sku](#sku)
  * tags `object`: Contains resource tags defined as key/value pairs.
  * type `string`: Specifies the type of the resource.

### ServiceProvider
* ServiceProvider `object`: Service Provider Definition
  * properties [ServiceProviderProperties](#serviceproviderproperties)

### ServiceProviderParameter
* ServiceProviderParameter `object`: Extra Parameters specific to each Service Provider
  * default `string`: Default Name for the Service Provider
  * description `string`: Description of the Service Provider
  * displayName `string`: Display Name of the Service Provider
  * helpUrl `string`: Help Url for the  Service Provider
  * name `string`: Name of the Service Provider
  * type `string`: Type of the Service Provider

### ServiceProviderProperties
* ServiceProviderProperties `object`: The Object used to describe a Service Provider supported by Bot Service
  * devPortalUrl `string`: Display Name of the Service Provider
  * displayName `string`: Display Name of the Service Provider
  * iconUrl `string`: Display Name of the Service Provider
  * id `string`: Id for Service Provider
  * parameters `array`: The list of parameters for the Service Provider
    * items [ServiceProviderParameter](#serviceproviderparameter)
  * serviceProviderName `string`: Display Name of the Service Provider

### ServiceProviderResponseList
* ServiceProviderResponseList `object`: The list of bot service providers response.
  * nextLink `string`: The link used to get the next page of bot service providers.
  * value `array`: Gets the list of bot service providers and their properties.
    * items [ServiceProvider](#serviceprovider)

### Sku
* Sku `object`: The SKU of the cognitive services account.
  * name **required** [SkuName](#skuname)
  * tier `string` (values: Free, Standard): Gets the sku tier. This is based on the SKU name.

### SkuName
* SkuName `string` (values: F0, S1): The name of SKU.

### SkypeChannel
* SkypeChannel `object`: Skype channel definition
  * properties [SkypeChannelProperties](#skypechannelproperties)
  * channelName **required** `string`: The channel name

### SkypeChannelProperties
* SkypeChannelProperties `object`: The parameters to provide for the Microsoft Teams channel.
  * callingWebHook `string`: Calling web hook for Skype channel
  * enableCalling `boolean`: Enable calling for Skype channel
  * enableGroups `boolean`: Enable groups for Skype channel
  * enableMediaCards `boolean`: Enable media cards for Skype channel
  * enableMessaging `boolean`: Enable messaging for Skype channel
  * enableScreenSharing `boolean`: Enable screen sharing for Skype channel
  * enableVideo `boolean`: Enable video for Skype channel
  * groupsMode `string`: Group mode for Skype channel
  * isEnabled **required** `boolean`: Whether this channel is enabled for the bot

### SlackChannel
* SlackChannel `object`: Slack channel definition
  * properties [SlackChannelProperties](#slackchannelproperties)
  * channelName **required** `string`: The channel name

### SlackChannelProperties
* SlackChannelProperties `object`: The parameters to provide for the Slack channel.
  * clientId **required** `string`: The Slack client id
  * clientSecret **required** `string`: The Slack client secret. Value only returned through POST to the action Channel List API, otherwise empty.
  * isEnabled **required** `boolean`: Whether this channel is enabled for the bot
  * isValidated `boolean`: Whether this channel is validated for the bot
  * landingPageUrl `string`: The Slack landing page Url
  * lastSubmissionId `string`: The Sms auth token
  * redirectAction `string`: The Slack redirect action
  * registerBeforeOAuthFlow `boolean`: Whether to register the settings before OAuth validation is performed. Recommended to True.
  * verificationToken **required** `string`: The Slack verification token. Value only returned through POST to the action Channel List API, otherwise empty.

### SmsChannel
* SmsChannel `object`: Sms channel definition
  * properties [SmsChannelProperties](#smschannelproperties)
  * channelName **required** `string`: The channel name

### SmsChannelProperties
* SmsChannelProperties `object`: The parameters to provide for the Sms channel.
  * accountSID **required** `string`: The Sms account SID. Value only returned through POST to the action Channel List API, otherwise empty.
  * authToken **required** `string`: The Sms auth token. Value only returned through POST to the action Channel List API, otherwise empty.
  * isEnabled **required** `boolean`: Whether this channel is enabled for the bot
  * isValidated `boolean`: Whether this channel is validated for the bot
  * phone **required** `string`: The Sms phone

### TelegramChannel
* TelegramChannel `object`: Telegram channel definition
  * properties [TelegramChannelProperties](#telegramchannelproperties)
  * channelName **required** `string`: The channel name

### TelegramChannelProperties
* TelegramChannelProperties `object`: The parameters to provide for the Telegram channel.
  * accessToken **required** `string`: The Telegram access token. Value only returned through POST to the action Channel List API, otherwise empty.
  * isEnabled **required** `boolean`: Whether this channel is enabled for the bot
  * isValidated `boolean`: Whether this channel is validated for the bot

### WebChatChannel
* WebChatChannel `object`: Web Chat channel definition
  * properties [WebChatChannelProperties](#webchatchannelproperties)
  * channelName **required** `string`: The channel name

### WebChatChannelProperties
* WebChatChannelProperties `object`: The parameters to provide for the Web Chat channel.
  * sites `array`: The list of Web Chat sites
    * items [WebChatSite](#webchatsite)
  * webChatEmbedCode `string`: Web chat control embed code

### WebChatSite
* WebChatSite `object`: A site for the Webchat channel
  * enablePreview **required** `boolean`: Whether this site is enabled for preview versions of Webchat
  * isEnabled **required** `boolean`: Whether this site is enabled for DirectLine channel
  * key `string`: Primary key. Value only returned through POST to the action Channel List API, otherwise empty.
  * key2 `string`: Secondary key. Value only returned through POST to the action Channel List API, otherwise empty.
  * siteId `string`: Site Id
  * siteName **required** `string`: Site name


