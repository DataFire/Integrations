# @datafire/amazonaws_models_lex

Client library for Amazon Lex Model Building Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_models_lex
```
```js
let amazonaws_models_lex = require('@datafire/amazonaws_models_lex').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_models_lex.GetBots({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>Amazon Lex Build-Time Actions</fullname> <p> Amazon Lex is an AWS service for building conversational voice and text interfaces. Use these actions to create, update, and delete conversational bots for new and existing client applications. </p>

## Actions

### GetBots



```js
amazonaws_models_lex.GetBots({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [GetBotsResponse](#getbotsresponse)

### GetBotAliases



```js
amazonaws_models_lex.GetBotAliases({
  "botName": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * botName **required** `string`

#### Output
* output [GetBotAliasesResponse](#getbotaliasesresponse)

### GetBotChannelAssociations



```js
amazonaws_models_lex.GetBotChannelAssociations({
  "botName": "",
  "aliasName": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * botName **required** `string`
  * aliasName **required** `string`

#### Output
* output [GetBotChannelAssociationsResponse](#getbotchannelassociationsresponse)

### GetBotChannelAssociation



```js
amazonaws_models_lex.GetBotChannelAssociation({
  "name": "",
  "botName": "",
  "aliasName": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * botName **required** `string`
  * aliasName **required** `string`

#### Output
* output [GetBotChannelAssociationResponse](#getbotchannelassociationresponse)

### PutBotAlias



```js
amazonaws_models_lex.PutBotAlias({
  "name": "",
  "botName": "",
  "botVersion": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * botName **required** `string`
  * botVersion **required** [Version](#version)
  * checksum [String](#string)
  * description [Description](#description)

#### Output
* output [PutBotAliasResponse](#putbotaliasresponse)

### DeleteUtterances



```js
amazonaws_models_lex.DeleteUtterances({
  "botName": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * botName **required** `string`
  * userId **required** `string`

#### Output
*Output schema unknown*

### GetUtterancesView



```js
amazonaws_models_lex.GetUtterancesView({
  "botname": ""
}, context)
```

#### Input
* input `object`
  * botname **required** `string`

#### Output
* output [GetUtterancesViewResponse](#getutterancesviewresponse)

### DeleteBot



```js
amazonaws_models_lex.DeleteBot({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
*Output schema unknown*

### CreateBotVersion



```js
amazonaws_models_lex.CreateBotVersion({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * checksum [String](#string)

#### Output
*Output schema unknown*

### GetBotVersions



```js
amazonaws_models_lex.GetBotVersions({
  "name": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * name **required** `string`

#### Output
* output [GetBotVersionsResponse](#getbotversionsresponse)

### PutBot



```js
amazonaws_models_lex.PutBot({
  "name": "",
  "locale": "",
  "childDirected": true
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * abortStatement [Statement](#statement)
  * checksum [String](#string)
  * childDirected **required** [Boolean](#boolean)
  * clarificationPrompt [Prompt](#prompt)
  * description [Description](#description)
  * idleSessionTTLInSeconds [SessionTTL](#sessionttl)
  * intents [IntentList](#intentlist)
  * locale **required** [Locale](#locale)
  * processBehavior [ProcessBehavior](#processbehavior)
  * voiceId [String](#string)

#### Output
* output [PutBotResponse](#putbotresponse)

### GetBot



```js
amazonaws_models_lex.GetBot({
  "name": "",
  "versionoralias": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * versionoralias **required** `string`

#### Output
* output [GetBotResponse](#getbotresponse)

### DeleteBotVersion



```js
amazonaws_models_lex.DeleteBotVersion({
  "name": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * version **required** `string`

#### Output
*Output schema unknown*

### GetBuiltinIntents



```js
amazonaws_models_lex.GetBuiltinIntents({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [GetBuiltinIntentsResponse](#getbuiltinintentsresponse)

### GetBuiltinIntent



```js
amazonaws_models_lex.GetBuiltinIntent({
  "signature": ""
}, context)
```

#### Input
* input `object`
  * signature **required** `string`

#### Output
* output [GetBuiltinIntentResponse](#getbuiltinintentresponse)

### GetBuiltinSlotTypes



```js
amazonaws_models_lex.GetBuiltinSlotTypes({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [GetBuiltinSlotTypesResponse](#getbuiltinslottypesresponse)

### GetExport



```js
amazonaws_models_lex.GetExport({}, context)
```

#### Input
* input `object`

#### Output
* output [GetExportResponse](#getexportresponse)

### GetIntents



```js
amazonaws_models_lex.GetIntents({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [GetIntentsResponse](#getintentsresponse)

### DeleteIntent



```js
amazonaws_models_lex.DeleteIntent({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
*Output schema unknown*

### CreateIntentVersion



```js
amazonaws_models_lex.CreateIntentVersion({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * checksum [String](#string)

#### Output
*Output schema unknown*

### GetIntentVersions



```js
amazonaws_models_lex.GetIntentVersions({
  "name": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * name **required** `string`

#### Output
* output [GetIntentVersionsResponse](#getintentversionsresponse)

### PutIntent



```js
amazonaws_models_lex.PutIntent({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * checksum [String](#string)
  * conclusionStatement [Statement](#statement)
  * confirmationPrompt [Prompt](#prompt)
  * description [Description](#description)
  * dialogCodeHook [CodeHook](#codehook)
  * followUpPrompt [FollowUpPrompt](#followupprompt)
  * fulfillmentActivity [FulfillmentActivity](#fulfillmentactivity)
  * parentIntentSignature [BuiltinIntentSignature](#builtinintentsignature)
  * rejectionStatement [Statement](#statement)
  * sampleUtterances [IntentUtteranceList](#intentutterancelist)
  * slots [SlotList](#slotlist)

#### Output
* output [PutIntentResponse](#putintentresponse)

### GetIntent



```js
amazonaws_models_lex.GetIntent({
  "name": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * version **required** `string`

#### Output
* output [GetIntentResponse](#getintentresponse)

### GetSlotTypes



```js
amazonaws_models_lex.GetSlotTypes({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [GetSlotTypesResponse](#getslottypesresponse)

### DeleteSlotType



```js
amazonaws_models_lex.DeleteSlotType({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
*Output schema unknown*

### DeleteSlotTypeVersion



```js
amazonaws_models_lex.DeleteSlotTypeVersion({
  "name": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * version **required** `string`

#### Output
*Output schema unknown*

### CreateSlotTypeVersion



```js
amazonaws_models_lex.CreateSlotTypeVersion({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * checksum [String](#string)

#### Output
*Output schema unknown*

### GetSlotTypeVersions



```js
amazonaws_models_lex.GetSlotTypeVersions({
  "name": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * name **required** `string`

#### Output
* output [GetSlotTypeVersionsResponse](#getslottypeversionsresponse)

### PutSlotType



```js
amazonaws_models_lex.PutSlotType({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * checksum [String](#string)
  * description [Description](#description)
  * enumerationValues [EnumerationValues](#enumerationvalues)
  * valueSelectionStrategy [SlotValueSelectionStrategy](#slotvalueselectionstrategy)

#### Output
* output [PutSlotTypeResponse](#putslottyperesponse)

### GetSlotType



```js
amazonaws_models_lex.GetSlotType({
  "name": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * version **required** `string`

#### Output
* output [GetSlotTypeResponse](#getslottyperesponse)



## Definitions

### AliasName
* AliasName `string`

### AliasNameOrListAll
* AliasNameOrListAll `string`

### BadRequestException
* BadRequestException `object`: The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.
  * message [String](#string)

### Boolean
* Boolean `boolean`

### BotAliasMetadata
* BotAliasMetadata `object`: Provides information about a bot alias.
  * botName [BotName](#botname)
  * botVersion [Version](#version)
  * checksum [String](#string)
  * createdDate [Timestamp](#timestamp)
  * description [Description](#description)
  * lastUpdatedDate [Timestamp](#timestamp)
  * name [AliasName](#aliasname)

### BotAliasMetadataList
* BotAliasMetadataList `array`
  * items [BotAliasMetadata](#botaliasmetadata)

### BotChannelAssociation
* BotChannelAssociation `object`: Represents an association between an Amazon Lex bot and an external messaging platform.
  * botAlias [AliasName](#aliasname)
  * botConfiguration [ChannelConfigurationMap](#channelconfigurationmap)
  * botName [BotName](#botname)
  * createdDate [Timestamp](#timestamp)
  * description [Description](#description)
  * name [BotChannelName](#botchannelname)
  * type [ChannelType](#channeltype)

### BotChannelAssociationList
* BotChannelAssociationList `array`
  * items [BotChannelAssociation](#botchannelassociation)

### BotChannelName
* BotChannelName `string`

### BotMetadata
* BotMetadata `object`: Provides information about a bot. .
  * createdDate [Timestamp](#timestamp)
  * description [Description](#description)
  * lastUpdatedDate [Timestamp](#timestamp)
  * name [BotName](#botname)
  * status [Status](#status)
  * version [Version](#version)

### BotMetadataList
* BotMetadataList `array`
  * items [BotMetadata](#botmetadata)

### BotName
* BotName `string`

### BotVersions
* BotVersions `array`
  * items [Version](#version)

### BuiltinIntentMetadata
* BuiltinIntentMetadata `object`: Provides metadata for a built-in intent.
  * signature [BuiltinIntentSignature](#builtinintentsignature)
  * supportedLocales [LocaleList](#localelist)

### BuiltinIntentMetadataList
* BuiltinIntentMetadataList `array`
  * items [BuiltinIntentMetadata](#builtinintentmetadata)

### BuiltinIntentSignature
* BuiltinIntentSignature `string`

### BuiltinIntentSlot
* BuiltinIntentSlot `object`: Provides information about a slot used in a built-in intent.
  * name [String](#string)

### BuiltinIntentSlotList
* BuiltinIntentSlotList `array`
  * items [BuiltinIntentSlot](#builtinintentslot)

### BuiltinSlotTypeMetadata
* BuiltinSlotTypeMetadata `object`: Provides information about a built in slot type.
  * signature [BuiltinSlotTypeSignature](#builtinslottypesignature)
  * supportedLocales [LocaleList](#localelist)

### BuiltinSlotTypeMetadataList
* BuiltinSlotTypeMetadataList `array`
  * items [BuiltinSlotTypeMetadata](#builtinslottypemetadata)

### BuiltinSlotTypeSignature
* BuiltinSlotTypeSignature `string`

### ChannelConfigurationMap
* ChannelConfigurationMap `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### ChannelType
* ChannelType `string` (values: Facebook, Slack, Twilio-Sms)

### CodeHook
* CodeHook `object`: Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..
  * messageVersion **required** [MessageVersion](#messageversion)
  * uri **required** [LambdaARN](#lambdaarn)

### ConflictException
* ConflictException `object`:  There was a conflict processing the request. Try your request again. 
  * message [String](#string)

### ContentString
* ContentString `string`

### ContentType
* ContentType `string` (values: PlainText, SSML)

### Count
* Count `integer`

### CreateBotVersionRequest
* CreateBotVersionRequest `object`
  * checksum [String](#string)

### CreateBotVersionResponse
* CreateBotVersionResponse `object`
  * abortStatement [Statement](#statement)
  * checksum [String](#string)
  * childDirected [Boolean](#boolean)
  * clarificationPrompt [Prompt](#prompt)
  * createdDate [Timestamp](#timestamp)
  * description [Description](#description)
  * failureReason [String](#string)
  * idleSessionTTLInSeconds [SessionTTL](#sessionttl)
  * intents [IntentList](#intentlist)
  * lastUpdatedDate [Timestamp](#timestamp)
  * locale [Locale](#locale)
  * name [BotName](#botname)
  * status [Status](#status)
  * version [Version](#version)
  * voiceId [String](#string)

### CreateIntentVersionRequest
* CreateIntentVersionRequest `object`
  * checksum [String](#string)

### CreateIntentVersionResponse
* CreateIntentVersionResponse `object`
  * checksum [String](#string)
  * conclusionStatement [Statement](#statement)
  * confirmationPrompt [Prompt](#prompt)
  * createdDate [Timestamp](#timestamp)
  * description [Description](#description)
  * dialogCodeHook [CodeHook](#codehook)
  * followUpPrompt [FollowUpPrompt](#followupprompt)
  * fulfillmentActivity [FulfillmentActivity](#fulfillmentactivity)
  * lastUpdatedDate [Timestamp](#timestamp)
  * name [IntentName](#intentname)
  * parentIntentSignature [BuiltinIntentSignature](#builtinintentsignature)
  * rejectionStatement [Statement](#statement)
  * sampleUtterances [IntentUtteranceList](#intentutterancelist)
  * slots [SlotList](#slotlist)
  * version [Version](#version)

### CreateSlotTypeVersionRequest
* CreateSlotTypeVersionRequest `object`
  * checksum [String](#string)

### CreateSlotTypeVersionResponse
* CreateSlotTypeVersionResponse `object`
  * checksum [String](#string)
  * createdDate [Timestamp](#timestamp)
  * description [Description](#description)
  * enumerationValues [EnumerationValues](#enumerationvalues)
  * lastUpdatedDate [Timestamp](#timestamp)
  * name [SlotTypeName](#slottypename)
  * valueSelectionStrategy [SlotValueSelectionStrategy](#slotvalueselectionstrategy)
  * version [Version](#version)

### CustomOrBuiltinSlotTypeName
* CustomOrBuiltinSlotTypeName `string`

### DeleteBotAliasRequest
* DeleteBotAliasRequest `object`

### DeleteBotChannelAssociationRequest
* DeleteBotChannelAssociationRequest `object`

### DeleteBotRequest
* DeleteBotRequest `object`

### DeleteBotVersionRequest
* DeleteBotVersionRequest `object`

### DeleteIntentRequest
* DeleteIntentRequest `object`

### DeleteIntentVersionRequest
* DeleteIntentVersionRequest `object`

### DeleteSlotTypeRequest
* DeleteSlotTypeRequest `object`

### DeleteSlotTypeVersionRequest
* DeleteSlotTypeVersionRequest `object`

### DeleteUtterancesRequest
* DeleteUtterancesRequest `object`

### Description
* Description `string`

### EnumerationValue
* EnumerationValue `object`: <p>Each slot type can have a set of values. Each enumeration value represents a value the slot type can take. </p> <p>For example, a pizza ordering bot could have a slot type that specifies the type of crust that the pizza should have. The slot type could include the values </p> <ul> <li> <p>thick</p> </li> <li> <p>thin</p> </li> <li> <p>stuffed</p> </li> </ul>
  * synonyms [SynonymList](#synonymlist)
  * value **required** [Value](#value)

### EnumerationValues
* EnumerationValues `array`
  * items [EnumerationValue](#enumerationvalue)

### ExportStatus
* ExportStatus `string` (values: IN_PROGRESS, READY, FAILED)

### ExportType
* ExportType `string` (values: ALEXA_SKILLS_KIT)

### FollowUpPrompt
* FollowUpPrompt `object`: A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.
  * prompt **required** [Prompt](#prompt)
  * rejectionStatement **required** [Statement](#statement)

### FulfillmentActivity
* FulfillmentActivity `object`: <p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul>
  * codeHook [CodeHook](#codehook)
  * type **required** [FulfillmentActivityType](#fulfillmentactivitytype)

### FulfillmentActivityType
* FulfillmentActivityType `string` (values: ReturnIntent, CodeHook)

### GetBotAliasRequest
* GetBotAliasRequest `object`

### GetBotAliasResponse
* GetBotAliasResponse `object`
  * botName [BotName](#botname)
  * botVersion [Version](#version)
  * checksum [String](#string)
  * createdDate [Timestamp](#timestamp)
  * description [Description](#description)
  * lastUpdatedDate [Timestamp](#timestamp)
  * name [AliasName](#aliasname)

### GetBotAliasesRequest
* GetBotAliasesRequest `object`

### GetBotAliasesResponse
* GetBotAliasesResponse `object`
  * BotAliases [BotAliasMetadataList](#botaliasmetadatalist)
  * nextToken [NextToken](#nexttoken)

### GetBotChannelAssociationRequest
* GetBotChannelAssociationRequest `object`

### GetBotChannelAssociationResponse
* GetBotChannelAssociationResponse `object`
  * botAlias [AliasName](#aliasname)
  * botConfiguration [ChannelConfigurationMap](#channelconfigurationmap)
  * botName [BotName](#botname)
  * createdDate [Timestamp](#timestamp)
  * description [Description](#description)
  * name [BotChannelName](#botchannelname)
  * type [ChannelType](#channeltype)

### GetBotChannelAssociationsRequest
* GetBotChannelAssociationsRequest `object`

### GetBotChannelAssociationsResponse
* GetBotChannelAssociationsResponse `object`
  * botChannelAssociations [BotChannelAssociationList](#botchannelassociationlist)
  * nextToken [NextToken](#nexttoken)

### GetBotRequest
* GetBotRequest `object`

### GetBotResponse
* GetBotResponse `object`
  * abortStatement [Statement](#statement)
  * checksum [String](#string)
  * childDirected [Boolean](#boolean)
  * clarificationPrompt [Prompt](#prompt)
  * createdDate [Timestamp](#timestamp)
  * description [Description](#description)
  * failureReason [String](#string)
  * idleSessionTTLInSeconds [SessionTTL](#sessionttl)
  * intents [IntentList](#intentlist)
  * lastUpdatedDate [Timestamp](#timestamp)
  * locale [Locale](#locale)
  * name [BotName](#botname)
  * status [Status](#status)
  * version [Version](#version)
  * voiceId [String](#string)

### GetBotVersionsRequest
* GetBotVersionsRequest `object`

### GetBotVersionsResponse
* GetBotVersionsResponse `object`
  * bots [BotMetadataList](#botmetadatalist)
  * nextToken [NextToken](#nexttoken)

### GetBotsRequest
* GetBotsRequest `object`

### GetBotsResponse
* GetBotsResponse `object`
  * bots [BotMetadataList](#botmetadatalist)
  * nextToken [NextToken](#nexttoken)

### GetBuiltinIntentRequest
* GetBuiltinIntentRequest `object`

### GetBuiltinIntentResponse
* GetBuiltinIntentResponse `object`
  * signature [BuiltinIntentSignature](#builtinintentsignature)
  * slots [BuiltinIntentSlotList](#builtinintentslotlist)
  * supportedLocales [LocaleList](#localelist)

### GetBuiltinIntentsRequest
* GetBuiltinIntentsRequest `object`

### GetBuiltinIntentsResponse
* GetBuiltinIntentsResponse `object`
  * intents [BuiltinIntentMetadataList](#builtinintentmetadatalist)
  * nextToken [NextToken](#nexttoken)

### GetBuiltinSlotTypesRequest
* GetBuiltinSlotTypesRequest `object`

### GetBuiltinSlotTypesResponse
* GetBuiltinSlotTypesResponse `object`
  * nextToken [NextToken](#nexttoken)
  * slotTypes [BuiltinSlotTypeMetadataList](#builtinslottypemetadatalist)

### GetExportRequest
* GetExportRequest `object`

### GetExportResponse
* GetExportResponse `object`
  * exportStatus [ExportStatus](#exportstatus)
  * exportType [ExportType](#exporttype)
  * failureReason [String](#string)
  * name [Name](#name)
  * resourceType [ResourceType](#resourcetype)
  * url [String](#string)
  * version [NumericalVersion](#numericalversion)

### GetIntentRequest
* GetIntentRequest `object`

### GetIntentResponse
* GetIntentResponse `object`
  * checksum [String](#string)
  * conclusionStatement [Statement](#statement)
  * confirmationPrompt [Prompt](#prompt)
  * createdDate [Timestamp](#timestamp)
  * description [Description](#description)
  * dialogCodeHook [CodeHook](#codehook)
  * followUpPrompt [FollowUpPrompt](#followupprompt)
  * fulfillmentActivity [FulfillmentActivity](#fulfillmentactivity)
  * lastUpdatedDate [Timestamp](#timestamp)
  * name [IntentName](#intentname)
  * parentIntentSignature [BuiltinIntentSignature](#builtinintentsignature)
  * rejectionStatement [Statement](#statement)
  * sampleUtterances [IntentUtteranceList](#intentutterancelist)
  * slots [SlotList](#slotlist)
  * version [Version](#version)

### GetIntentVersionsRequest
* GetIntentVersionsRequest `object`

### GetIntentVersionsResponse
* GetIntentVersionsResponse `object`
  * intents [IntentMetadataList](#intentmetadatalist)
  * nextToken [NextToken](#nexttoken)

### GetIntentsRequest
* GetIntentsRequest `object`

### GetIntentsResponse
* GetIntentsResponse `object`
  * intents [IntentMetadataList](#intentmetadatalist)
  * nextToken [NextToken](#nexttoken)

### GetSlotTypeRequest
* GetSlotTypeRequest `object`

### GetSlotTypeResponse
* GetSlotTypeResponse `object`
  * checksum [String](#string)
  * createdDate [Timestamp](#timestamp)
  * description [Description](#description)
  * enumerationValues [EnumerationValues](#enumerationvalues)
  * lastUpdatedDate [Timestamp](#timestamp)
  * name [SlotTypeName](#slottypename)
  * valueSelectionStrategy [SlotValueSelectionStrategy](#slotvalueselectionstrategy)
  * version [Version](#version)

### GetSlotTypeVersionsRequest
* GetSlotTypeVersionsRequest `object`

### GetSlotTypeVersionsResponse
* GetSlotTypeVersionsResponse `object`
  * nextToken [NextToken](#nexttoken)
  * slotTypes [SlotTypeMetadataList](#slottypemetadatalist)

### GetSlotTypesRequest
* GetSlotTypesRequest `object`

### GetSlotTypesResponse
* GetSlotTypesResponse `object`
  * nextToken [NextToken](#nexttoken)
  * slotTypes [SlotTypeMetadataList](#slottypemetadatalist)

### GetUtterancesViewRequest
* GetUtterancesViewRequest `object`

### GetUtterancesViewResponse
* GetUtterancesViewResponse `object`
  * botName [BotName](#botname)
  * utterances [ListsOfUtterances](#listsofutterances)

### Intent
* Intent `object`: Identifies the specific version of an intent.
  * intentName **required** [IntentName](#intentname)
  * intentVersion **required** [Version](#version)

### IntentList
* IntentList `array`
  * items [Intent](#intent)

### IntentMetadata
* IntentMetadata `object`: Provides information about an intent.
  * createdDate [Timestamp](#timestamp)
  * description [Description](#description)
  * lastUpdatedDate [Timestamp](#timestamp)
  * name [IntentName](#intentname)
  * version [Version](#version)

### IntentMetadataList
* IntentMetadataList `array`
  * items [IntentMetadata](#intentmetadata)

### IntentName
* IntentName `string`

### IntentUtteranceList
* IntentUtteranceList `array`
  * items [Utterance](#utterance)

### InternalFailureException
* InternalFailureException `object`: An internal Amazon Lex error occurred. Try your request again.
  * message [String](#string)

### LambdaARN
* LambdaARN `string`

### LimitExceededException
* LimitExceededException `object`: The request exceeded a limit. Try your request again.
  * message [String](#string)

### ListOfUtterance
* ListOfUtterance `array`
  * items [UtteranceData](#utterancedata)

### ListsOfUtterances
* ListsOfUtterances `array`
  * items [UtteranceList](#utterancelist)

### Locale
* Locale `string` (values: en-US)

### LocaleList
* LocaleList `array`
  * items [Locale](#locale)

### MaxResults
* MaxResults `integer`

### Message
* Message `object`: The message object that provides the message text and its type.
  * content **required** [ContentString](#contentstring)
  * contentType **required** [ContentType](#contenttype)

### MessageList
* MessageList `array`
  * items [Message](#message)

### MessageVersion
* MessageVersion `string`

### Name
* Name `string`

### NextToken
* NextToken `string`

### NotFoundException
* NotFoundException `object`: The resource specified in the request was not found. Check the resource and try again.
  * message [String](#string)

### NumericalVersion
* NumericalVersion `string`

### PreconditionFailedException
* PreconditionFailedException `object`:  The checksum of the resource that you are trying to change does not match the checksum in the request. Check the resource's checksum and try again.
  * message [String](#string)

### Priority
* Priority `integer`

### ProcessBehavior
* ProcessBehavior `string` (values: SAVE, BUILD)

### Prompt
* Prompt `object`: Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
  * maxAttempts **required** [PromptMaxAttempts](#promptmaxattempts)
  * messages **required** [MessageList](#messagelist)
  * responseCard [ResponseCard](#responsecard)

### PromptMaxAttempts
* PromptMaxAttempts `integer`

### PutBotAliasRequest
* PutBotAliasRequest `object`
  * botVersion **required** [Version](#version)
  * checksum [String](#string)
  * description [Description](#description)

### PutBotAliasResponse
* PutBotAliasResponse `object`
  * botName [BotName](#botname)
  * botVersion [Version](#version)
  * checksum [String](#string)
  * createdDate [Timestamp](#timestamp)
  * description [Description](#description)
  * lastUpdatedDate [Timestamp](#timestamp)
  * name [AliasName](#aliasname)

### PutBotRequest
* PutBotRequest `object`
  * abortStatement [Statement](#statement)
  * checksum [String](#string)
  * childDirected **required** [Boolean](#boolean)
  * clarificationPrompt [Prompt](#prompt)
  * description [Description](#description)
  * idleSessionTTLInSeconds [SessionTTL](#sessionttl)
  * intents [IntentList](#intentlist)
  * locale **required** [Locale](#locale)
  * processBehavior [ProcessBehavior](#processbehavior)
  * voiceId [String](#string)

### PutBotResponse
* PutBotResponse `object`
  * abortStatement [Statement](#statement)
  * checksum [String](#string)
  * childDirected [Boolean](#boolean)
  * clarificationPrompt [Prompt](#prompt)
  * createdDate [Timestamp](#timestamp)
  * description [Description](#description)
  * failureReason [String](#string)
  * idleSessionTTLInSeconds [SessionTTL](#sessionttl)
  * intents [IntentList](#intentlist)
  * lastUpdatedDate [Timestamp](#timestamp)
  * locale [Locale](#locale)
  * name [BotName](#botname)
  * status [Status](#status)
  * version [Version](#version)
  * voiceId [String](#string)

### PutIntentRequest
* PutIntentRequest `object`
  * checksum [String](#string)
  * conclusionStatement [Statement](#statement)
  * confirmationPrompt [Prompt](#prompt)
  * description [Description](#description)
  * dialogCodeHook [CodeHook](#codehook)
  * followUpPrompt [FollowUpPrompt](#followupprompt)
  * fulfillmentActivity [FulfillmentActivity](#fulfillmentactivity)
  * parentIntentSignature [BuiltinIntentSignature](#builtinintentsignature)
  * rejectionStatement [Statement](#statement)
  * sampleUtterances [IntentUtteranceList](#intentutterancelist)
  * slots [SlotList](#slotlist)

### PutIntentResponse
* PutIntentResponse `object`
  * checksum [String](#string)
  * conclusionStatement [Statement](#statement)
  * confirmationPrompt [Prompt](#prompt)
  * createdDate [Timestamp](#timestamp)
  * description [Description](#description)
  * dialogCodeHook [CodeHook](#codehook)
  * followUpPrompt [FollowUpPrompt](#followupprompt)
  * fulfillmentActivity [FulfillmentActivity](#fulfillmentactivity)
  * lastUpdatedDate [Timestamp](#timestamp)
  * name [IntentName](#intentname)
  * parentIntentSignature [BuiltinIntentSignature](#builtinintentsignature)
  * rejectionStatement [Statement](#statement)
  * sampleUtterances [IntentUtteranceList](#intentutterancelist)
  * slots [SlotList](#slotlist)
  * version [Version](#version)

### PutSlotTypeRequest
* PutSlotTypeRequest `object`
  * checksum [String](#string)
  * description [Description](#description)
  * enumerationValues [EnumerationValues](#enumerationvalues)
  * valueSelectionStrategy [SlotValueSelectionStrategy](#slotvalueselectionstrategy)

### PutSlotTypeResponse
* PutSlotTypeResponse `object`
  * checksum [String](#string)
  * createdDate [Timestamp](#timestamp)
  * description [Description](#description)
  * enumerationValues [EnumerationValues](#enumerationvalues)
  * lastUpdatedDate [Timestamp](#timestamp)
  * name [SlotTypeName](#slottypename)
  * valueSelectionStrategy [SlotValueSelectionStrategy](#slotvalueselectionstrategy)
  * version [Version](#version)

### ReferenceType
* ReferenceType `string` (values: Intent, Bot, BotAlias, BotChannel)

### ResourceInUseException
* ResourceInUseException `object`: <p>The resource that you are attempting to delete is referred to by another resource. Use this information to remove references to the resource that you are trying to delete.</p> <p>The body of the exception contains a JSON object that describes the resource.</p> <p> <code>{ "resourceType": BOT | BOTALIAS | BOTCHANNEL | INTENT,</code> </p> <p> <code>"resourceReference": {</code> </p> <p> <code>"name": <i>string</i>, "version": <i>string</i> } }</code> </p>
  * exampleReference [ResourceReference](#resourcereference)
  * referenceType [ReferenceType](#referencetype)

### ResourceReference
* ResourceReference `object`: Describes the resource that refers to the resource that you are attempting to delete. This object is returned as part of the <code>ResourceInUseException</code> exception. 
  * name [Name](#name)
  * version [Version](#version)

### ResourceType
* ResourceType `string` (values: BOT)

### ResponseCard
* ResponseCard `string`

### SessionTTL
* SessionTTL `integer`

### Slot
* Slot `object`: Identifies the version of a specific slot.
  * description [Description](#description)
  * name **required** [SlotName](#slotname)
  * priority [Priority](#priority)
  * responseCard [ResponseCard](#responsecard)
  * sampleUtterances [SlotUtteranceList](#slotutterancelist)
  * slotConstraint **required** [SlotConstraint](#slotconstraint)
  * slotType [CustomOrBuiltinSlotTypeName](#customorbuiltinslottypename)
  * slotTypeVersion [Version](#version)
  * valueElicitationPrompt [Prompt](#prompt)

### SlotConstraint
* SlotConstraint `string` (values: Required, Optional)

### SlotList
* SlotList `array`
  * items [Slot](#slot)

### SlotName
* SlotName `string`

### SlotTypeMetadata
* SlotTypeMetadata `object`: Provides information about a slot type..
  * createdDate [Timestamp](#timestamp)
  * description [Description](#description)
  * lastUpdatedDate [Timestamp](#timestamp)
  * name [SlotTypeName](#slottypename)
  * version [Version](#version)

### SlotTypeMetadataList
* SlotTypeMetadataList `array`
  * items [SlotTypeMetadata](#slottypemetadata)

### SlotTypeName
* SlotTypeName `string`

### SlotUtteranceList
* SlotUtteranceList `array`
  * items [Utterance](#utterance)

### SlotValueSelectionStrategy
* SlotValueSelectionStrategy `string` (values: ORIGINAL_VALUE, TOP_RESOLUTION)

### Statement
* Statement `object`: A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
  * messages **required** [MessageList](#messagelist)
  * responseCard [ResponseCard](#responsecard)

### Status
* Status `string` (values: BUILDING, READY, FAILED, NOT_BUILT)

### StatusType
* StatusType `string` (values: Detected, Missed)

### String
* String `string`

### SynonymList
* SynonymList `array`
  * items [Value](#value)

### Timestamp
* Timestamp `string`

### UserId
* UserId `string`

### Utterance
* Utterance `string`

### UtteranceData
* UtteranceData `object`: Provides information about a single utterance that was made to your bot. 
  * count [Count](#count)
  * distinctUsers [Count](#count)
  * firstUtteredDate [Timestamp](#timestamp)
  * lastUtteredDate [Timestamp](#timestamp)
  * utteranceString [UtteranceString](#utterancestring)

### UtteranceList
* UtteranceList `object`: Provides a list of utterances that have been made to a specific version of your bot. The list contains a maximum of 100 utterances.
  * botVersion [Version](#version)
  * utterances [ListOfUtterance](#listofutterance)

### UtteranceString
* UtteranceString `string`

### Value
* Value `string`

### Version
* Version `string`


