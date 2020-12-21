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

.then(data => {
  console.log(data);
});
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
  * nextToken `string`
  * maxResults `integer`
  * nameContains `string`

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
  * botName **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * nameContains `string`

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
  * botName **required** `string`
  * aliasName **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * nameContains `string`

#### Output
* output [GetBotChannelAssociationsResponse](#getbotchannelassociationsresponse)

### DeleteBotChannelAssociation



```js
amazonaws_models_lex.DeleteBotChannelAssociation({
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
*Output schema unknown*

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

### DeleteBotAlias



```js
amazonaws_models_lex.DeleteBotAlias({
  "name": "",
  "botName": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * botName **required** `string`

#### Output
*Output schema unknown*

### GetBotAlias



```js
amazonaws_models_lex.GetBotAlias({
  "name": "",
  "botName": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * botName **required** `string`

#### Output
* output [GetBotAliasResponse](#getbotaliasresponse)

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
  * tags `array`: A list of tags to add to the bot alias. You can only add tags when you create an alias, you can't use the <code>PutBotAlias</code> operation to update the tags on a bot alias. To update tags, use the <code>TagResource</code> operation.
    * items [Tag](#tag)
  * botVersion **required** `string`: The version of the bot.
  * checksum `string`: <p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new bot alias, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a bot alias, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>
  * conversationLogs `object`: Provides the settings needed for conversation logs.
    * iamRoleArn
    * logSettings
      * items [LogSettingsRequest](#logsettingsrequest)
  * description `string`: A description of the alias.

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
  "botname": "",
  "view": ""
}, context)
```

#### Input
* input `object`
  * botname **required** `string`
  * botVersions `array`
  * statusType `string`
  * view **required** `string`

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
  * checksum `string`: Identifies a specific revision of the <code>$LATEST</code> version of the bot. If you specify a checksum and the <code>$LATEST</code> version of the bot has a different checksum, a <code>PreconditionFailedException</code> exception is returned and Amazon Lex doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version.

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
  * name **required** `string`
  * nextToken `string`
  * maxResults `integer`

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
  * tags `array`: A list of tags to add to the bot. You can only add tags when you create a bot, you can't use the <code>PutBot</code> operation to update the tags on a bot. To update tags, use the <code>TagResource</code> operation.
    * items [Tag](#tag)
  * abortStatement `object`: A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
    * messages
      * items [Message](#message)
    * responseCard
  * checksum `string`: <p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new bot, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a bot, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>
  * childDirected **required** `boolean`: <p>For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying <code>true</code> or <code>false</code> in the <code>childDirected</code> field. By specifying <code>true</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying <code>false</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is not</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the <code>childDirected</code> field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA.</p> <p>If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex FAQ.</a> </p>
  * clarificationPrompt `object`: Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
    * maxAttempts
    * messages
      * items [Message](#message)
    * responseCard
  * createVersion `boolean`: When set to <code>true</code> a new numbered version of the bot is created. This is the same as calling the <code>CreateBotVersion</code> operation. If you don't specify <code>createVersion</code>, the default is <code>false</code>.
  * description `string`: A description of the bot.
  * detectSentiment `boolean`: When set to <code>true</code> user utterances are sent to Amazon Comprehend for sentiment analysis. If you don't specify <code>detectSentiment</code>, the default is <code>false</code>.
  * enableModelImprovements `boolean`: <p>Set to <code>true</code> to enable access to natural language understanding improvements. </p> <p>When you set the <code>enableModelImprovements</code> parameter to <code>true</code> you can use the <code>nluIntentConfidenceThreshold</code> parameter to configure confidence scores. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/confidence-scores.html">Confidence Scores</a>.</p> <p>You can only set the <code>enableModelImprovements</code> parameter in certain Regions. If you set the parameter to <code>true</code>, your bot has access to accuracy improvements.</p> <p>The Regions where you can set the <code>enableModelImprovements</code> parameter to <code>true</code> are:</p> <ul> <li> <p>US East (N. Virginia) (us-east-1)</p> </li> <li> <p>US West (Oregon) (us-west-2)</p> </li> <li> <p>Asia Pacific (Sydney) (ap-southeast-2)</p> </li> <li> <p>EU (Ireland) (eu-west-1)</p> </li> </ul> <p>In other Regions, the <code>enableModelImprovements</code> parameter is set to <code>true</code> by default. In these Regions setting the parameter to <code>false</code> throws a <code>ValidationException</code> exception.</p>
  * idleSessionTTLInSeconds `integer`: <p>The maximum time in seconds that Amazon Lex retains the data gathered in a conversation.</p> <p>A user interaction session remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.</p> <p>For example, suppose that a user chooses the OrderPizza intent, but gets sidetracked halfway through placing an order. If the user doesn't complete the order within the specified time, Amazon Lex discards the slot information that it gathered, and the user must start over.</p> <p>If you don't include the <code>idleSessionTTLInSeconds</code> element in a <code>PutBot</code> operation request, Amazon Lex uses the default value. This is also true if the request replaces an existing bot.</p> <p>The default is 300 seconds (5 minutes).</p>
  * intents `array`: An array of <code>Intent</code> objects. Each intent represents a command that a user can express. For example, a pizza ordering bot might support an OrderPizza intent. For more information, see <a>how-it-works</a>.
    * items [Intent](#intent)
  * locale **required** `string` (values: de-DE, en-AU, en-GB, en-US, es-419, es-ES, es-US, fr-FR, fr-CA, it-IT): <p> Specifies the target locale for the bot. Any intent used in the bot must be compatible with the locale of the bot. </p> <p>The default is <code>en-US</code>.</p>
  * nluIntentConfidenceThreshold `number`: <p>Determines the threshold where Amazon Lex will insert the <code>AMAZON.FallbackIntent</code>, <code>AMAZON.KendraSearchIntent</code>, or both when returning alternative intents in a <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html">PostContent</a> or <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> response. <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> are only inserted if they are configured for the bot.</p> <p>You must set the <code>enableModelImprovements</code> parameter to <code>true</code> to use confidence scores in the following regions.</p> <ul> <li> <p>US East (N. Virginia) (us-east-1)</p> </li> <li> <p>US West (Oregon) (us-west-2)</p> </li> <li> <p>Asia Pacific (Sydney) (ap-southeast-2)</p> </li> <li> <p>EU (Ireland) (eu-west-1)</p> </li> </ul> <p>In other Regions, the <code>enableModelImprovements</code> parameter is set to <code>true</code> by default.</p> <p>For example, suppose a bot is configured with the confidence threshold of 0.80 and the <code>AMAZON.FallbackIntent</code>. Amazon Lex returns three alternative intents with the following confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the <code>PostText</code> operation would be:</p> <ul> <li> <p>AMAZON.FallbackIntent</p> </li> <li> <p>IntentA</p> </li> <li> <p>IntentB</p> </li> <li> <p>IntentC</p> </li> </ul>
  * processBehavior `string` (values: SAVE, BUILD): <p>If you set the <code>processBehavior</code> element to <code>BUILD</code>, Amazon Lex builds the bot so that it can be run. If you set the element to <code>SAVE</code> Amazon Lex saves the bot, but doesn't build it. </p> <p>If you don't specify this value, the default value is <code>BUILD</code>.</p>
  * voiceId `string`: The Amazon Polly voice ID that you want Amazon Lex to use for voice interactions with the user. The locale configured for the voice must match the locale of the bot. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/voicelist.html">Voices in Amazon Polly</a> in the <i>Amazon Polly Developer Guide</i>.

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
  * locale `string`
  * signatureContains `string`
  * nextToken `string`
  * maxResults `integer`

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
  * locale `string`
  * signatureContains `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [GetBuiltinSlotTypesResponse](#getbuiltinslottypesresponse)

### GetExport



```js
amazonaws_models_lex.GetExport({
  "name": "",
  "version": "",
  "resourceType": "",
  "exportType": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * version **required** `string`
  * resourceType **required** `string`
  * exportType **required** `string`

#### Output
* output [GetExportResponse](#getexportresponse)

### StartImport



```js
amazonaws_models_lex.StartImport({
  "payload": "",
  "resourceType": "",
  "mergeStrategy": ""
}, context)
```

#### Input
* input `object`
  * tags `array`: A list of tags to add to the imported bot. You can only add tags when you import a bot, you can't add tags to an intent or slot type.
    * items [Tag](#tag)
  * mergeStrategy **required** `string` (values: OVERWRITE_LATEST, FAIL_ON_CONFLICT): <p>Specifies the action that the <code>StartImport</code> operation should take when there is an existing resource with the same name.</p> <ul> <li> <p>FAIL_ON_CONFLICT - The import operation is stopped on the first conflict between a resource in the import file and an existing resource. The name of the resource causing the conflict is in the <code>failureReason</code> field of the response to the <code>GetImport</code> operation.</p> <p>OVERWRITE_LATEST - The import operation proceeds even if there is a conflict with an existing resource. The $LASTEST version of the existing resource is overwritten with the data from the import file.</p> </li> </ul>
  * payload **required** `string`: A zip archive in binary format. The archive should contain one file, a JSON file containing the resource to import. The resource should match the type specified in the <code>resourceType</code> field.
  * resourceType **required** `string` (values: BOT, INTENT, SLOT_TYPE): <p>Specifies the type of resource to export. Each resource also exports any resources that it depends on. </p> <ul> <li> <p>A bot exports dependent intents.</p> </li> <li> <p>An intent exports dependent slot types.</p> </li> </ul>

#### Output
*Output schema unknown*

### GetImport



```js
amazonaws_models_lex.GetImport({
  "importId": ""
}, context)
```

#### Input
* input `object`
  * importId **required** `string`

#### Output
* output [GetImportResponse](#getimportresponse)

### GetIntents



```js
amazonaws_models_lex.GetIntents({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * nameContains `string`

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
  * checksum `string`: Checksum of the <code>$LATEST</code> version of the intent that should be used to create the new version. If you specify a checksum and the <code>$LATEST</code> version of the intent has a different checksum, Amazon Lex returns a <code>PreconditionFailedException</code> exception and doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version.

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
  * name **required** `string`
  * nextToken `string`
  * maxResults `integer`

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
  * checksum `string`: <p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new intent, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a intent, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>
  * conclusionStatement `object`: A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
    * messages
      * items [Message](#message)
    * responseCard
  * confirmationPrompt `object`: Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
    * maxAttempts
    * messages
      * items [Message](#message)
    * responseCard
  * createVersion `boolean`: When set to <code>true</code> a new numbered version of the intent is created. This is the same as calling the <code>CreateIntentVersion</code> operation. If you do not specify <code>createVersion</code>, the default is <code>false</code>.
  * description `string`: A description of the intent.
  * dialogCodeHook `object`: Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..
    * messageVersion
    * uri
  * followUpPrompt `object`: A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.
    * prompt
      * maxAttempts **required**
      * messages **required**
        * items [Message](#message)
      * responseCard
    * rejectionStatement
      * messages **required**
        * items [Message](#message)
      * responseCard
  * fulfillmentActivity `object`: <p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul>
    * codeHook
      * messageVersion **required**
      * uri **required**
    * type
  * inputContexts `array`: An array of <code>InputContext</code> objects that lists the contexts that must be active for Amazon Lex to choose the intent in a conversation with the user.
    * items [InputContext](#inputcontext)
  * kendraConfiguration `object`: Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html"> AMAZON.KendraSearchIntent</a>.
    * kendraIndex
    * queryFilterString
    * role
  * outputContexts `array`: An array of <code>OutputContext</code> objects that lists the contexts that the intent activates when the intent is fulfilled.
    * items [OutputContext](#outputcontext)
  * parentIntentSignature `string`: A unique identifier for the built-in intent to base this intent on. To find the signature for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>.
  * rejectionStatement `object`: A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
    * messages
      * items [Message](#message)
    * responseCard
  * sampleUtterances `array`: <p>An array of utterances (strings) that a user might say to signal the intent. For example, "I want {PizzaSize} pizza", "Order {Quantity} {PizzaSize} pizzas". </p> <p>In each utterance, a slot name is enclosed in curly braces. </p>
    * items [Utterance](#utterance)
  * slots `array`: An array of intent slots. At runtime, Amazon Lex elicits required slot values from the user using prompts defined in the slots. For more information, see <a>how-it-works</a>. 
    * items [Slot](#slot)

#### Output
* output [PutIntentResponse](#putintentresponse)

### DeleteIntentVersion



```js
amazonaws_models_lex.DeleteIntentVersion({
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
  * nextToken `string`
  * maxResults `integer`
  * nameContains `string`

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
  * checksum `string`: Checksum for the <code>$LATEST</code> version of the slot type that you want to publish. If you specify a checksum and the <code>$LATEST</code> version of the slot type has a different checksum, Amazon Lex returns a <code>PreconditionFailedException</code> exception and doesn't publish the new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version.

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
  * name **required** `string`
  * nextToken `string`
  * maxResults `integer`

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
  * checksum `string`: <p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new slot type, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a slot type, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>
  * createVersion `boolean`: When set to <code>true</code> a new numbered version of the slot type is created. This is the same as calling the <code>CreateSlotTypeVersion</code> operation. If you do not specify <code>createVersion</code>, the default is <code>false</code>.
  * description `string`: A description of the slot type.
  * enumerationValues `array`: <p>A list of <code>EnumerationValue</code> objects that defines the values that the slot type can take. Each value can have a list of <code>synonyms</code>, which are additional values that help train the machine learning model about the values that it resolves for a slot. </p> <p>A regular expression slot type doesn't require enumeration values. All other slot types require a list of enumeration values.</p> <p>When Amazon Lex resolves a slot value, it generates a resolution list that contains up to five possible values for the slot. If you are using a Lambda function, this resolution list is passed to the function. If you are not using a Lambda function you can choose to return the value that the user entered or the first value in the resolution list as the slot value. The <code>valueSelectionStrategy</code> field indicates the option to use. </p>
    * items [EnumerationValue](#enumerationvalue)
  * parentSlotTypeSignature `string`: <p>The built-in slot type used as the parent of the slot type. When you define a parent slot type, the new slot type has all of the same configuration as the parent.</p> <p>Only <code>AMAZON.AlphaNumeric</code> is supported.</p>
  * slotTypeConfigurations `array`: Configuration information that extends the parent built-in slot type. The configuration is added to the settings for the parent slot type.
    * items [SlotTypeConfiguration](#slottypeconfiguration)
  * valueSelectionStrategy `string` (values: ORIGINAL_VALUE, TOP_RESOLUTION): <p>Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:</p> <ul> <li> <p> <code>ORIGINAL_VALUE</code> - Returns the value entered by the user, if the user value is similar to the slot value.</p> </li> <li> <p> <code>TOP_RESOLUTION</code> - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned.</p> </li> </ul> <p>If you don't specify the <code>valueSelectionStrategy</code>, the default is <code>ORIGINAL_VALUE</code>.</p>

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

### ListTagsForResource



```js
amazonaws_models_lex.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_models_lex.TagResource({
  "resourceArn": "",
  "tags": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `array`: A list of tag keys to add to the resource. If a tag key already exists, the existing value is replaced with the new value.
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_models_lex.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*



## Definitions

### AliasName
* AliasName `string`

### AliasNameOrListAll
* AliasNameOrListAll `string`

### AmazonResourceName
* AmazonResourceName `string`

### BadRequestException


### Blob
* Blob `string`

### Boolean
* Boolean `boolean`

### BotAliasMetadata
* BotAliasMetadata `object`: Provides information about a bot alias.
  * botName
  * botVersion
  * checksum
  * conversationLogs
    * iamRoleArn
    * logSettings
      * items [LogSettingsResponse](#logsettingsresponse)
  * createdDate
  * description
  * lastUpdatedDate
  * name

### BotAliasMetadataList
* BotAliasMetadataList `array`
  * items [BotAliasMetadata](#botaliasmetadata)

### BotChannelAssociation
* BotChannelAssociation `object`: Represents an association between an Amazon Lex bot and an external messaging platform.
  * botAlias
  * botConfiguration
  * botName
  * createdDate
  * description
  * failureReason
  * name
  * status
  * type

### BotChannelAssociationList
* BotChannelAssociationList `array`
  * items [BotChannelAssociation](#botchannelassociation)

### BotChannelName
* BotChannelName `string`

### BotMetadata
* BotMetadata `object`: Provides information about a bot. .
  * createdDate
  * description
  * lastUpdatedDate
  * name
  * status
  * version

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
  * signature
  * supportedLocales
    * items [Locale](#locale)

### BuiltinIntentMetadataList
* BuiltinIntentMetadataList `array`
  * items [BuiltinIntentMetadata](#builtinintentmetadata)

### BuiltinIntentSignature
* BuiltinIntentSignature `string`

### BuiltinIntentSlot
* BuiltinIntentSlot `object`: Provides information about a slot used in a built-in intent.
  * name

### BuiltinIntentSlotList
* BuiltinIntentSlotList `array`
  * items [BuiltinIntentSlot](#builtinintentslot)

### BuiltinSlotTypeMetadata
* BuiltinSlotTypeMetadata `object`: Provides information about a built in slot type.
  * signature
  * supportedLocales
    * items [Locale](#locale)

### BuiltinSlotTypeMetadataList
* BuiltinSlotTypeMetadataList `array`
  * items [BuiltinSlotTypeMetadata](#builtinslottypemetadata)

### BuiltinSlotTypeSignature
* BuiltinSlotTypeSignature `string`

### ChannelConfigurationMap
* ChannelConfigurationMap `object`

### ChannelStatus
* ChannelStatus `string` (values: IN_PROGRESS, CREATED, FAILED)

### ChannelType
* ChannelType `string` (values: Facebook, Slack, Twilio-Sms, Kik)

### CodeHook
* CodeHook `object`: Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..
  * messageVersion **required**
  * uri **required**

### ConfidenceThreshold
* ConfidenceThreshold `number`

### ConflictException


### ContentString
* ContentString `string`

### ContentType
* ContentType `string` (values: PlainText, SSML, CustomPayload)

### ContextTimeToLiveInSeconds
* ContextTimeToLiveInSeconds `integer`

### ContextTurnsToLive
* ContextTurnsToLive `integer`

### ConversationLogsRequest
* ConversationLogsRequest `object`: Provides the settings needed for conversation logs.
  * iamRoleArn **required**
  * logSettings **required**
    * items [LogSettingsRequest](#logsettingsrequest)

### ConversationLogsResponse
* ConversationLogsResponse `object`: Contains information about conversation log settings.
  * iamRoleArn
  * logSettings
    * items [LogSettingsResponse](#logsettingsresponse)

### Count
* Count `integer`

### CreateBotVersionRequest
* CreateBotVersionRequest `object`
  * checksum

### CreateBotVersionResponse
* CreateBotVersionResponse `object`
  * abortStatement
    * messages **required**
      * items [Message](#message)
    * responseCard
  * checksum
  * childDirected
  * clarificationPrompt
    * maxAttempts **required**
    * messages **required**
      * items [Message](#message)
    * responseCard
  * createdDate
  * description
  * detectSentiment
  * enableModelImprovements
  * failureReason
  * idleSessionTTLInSeconds
  * intents
    * items [Intent](#intent)
  * lastUpdatedDate
  * locale
  * name
  * status
  * version
  * voiceId

### CreateIntentVersionRequest
* CreateIntentVersionRequest `object`
  * checksum

### CreateIntentVersionResponse
* CreateIntentVersionResponse `object`
  * checksum
  * conclusionStatement
    * messages **required**
      * items [Message](#message)
    * responseCard
  * confirmationPrompt
    * maxAttempts **required**
    * messages **required**
      * items [Message](#message)
    * responseCard
  * createdDate
  * description
  * dialogCodeHook
    * messageVersion **required**
    * uri **required**
  * followUpPrompt
    * prompt **required**
      * maxAttempts **required**
      * messages **required**
        * items [Message](#message)
      * responseCard
    * rejectionStatement **required**
      * messages **required**
        * items [Message](#message)
      * responseCard
  * fulfillmentActivity
    * codeHook
      * messageVersion **required**
      * uri **required**
    * type **required**
  * inputContexts
    * items [InputContext](#inputcontext)
  * kendraConfiguration
    * kendraIndex **required**
    * queryFilterString
    * role **required**
  * lastUpdatedDate
  * name
  * outputContexts
    * items [OutputContext](#outputcontext)
  * parentIntentSignature
  * rejectionStatement
    * messages **required**
      * items [Message](#message)
    * responseCard
  * sampleUtterances
    * items [Utterance](#utterance)
  * slots
    * items [Slot](#slot)
  * version

### CreateSlotTypeVersionRequest
* CreateSlotTypeVersionRequest `object`
  * checksum

### CreateSlotTypeVersionResponse
* CreateSlotTypeVersionResponse `object`
  * checksum
  * createdDate
  * description
  * enumerationValues
    * items [EnumerationValue](#enumerationvalue)
  * lastUpdatedDate
  * name
  * parentSlotTypeSignature
  * slotTypeConfigurations
    * items [SlotTypeConfiguration](#slottypeconfiguration)
  * valueSelectionStrategy
  * version

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

### Destination
* Destination `string` (values: CLOUDWATCH_LOGS, S3)

### EnumerationValue
* EnumerationValue `object`: <p>Each slot type can have a set of values. Each enumeration value represents a value the slot type can take. </p> <p>For example, a pizza ordering bot could have a slot type that specifies the type of crust that the pizza should have. The slot type could include the values </p> <ul> <li> <p>thick</p> </li> <li> <p>thin</p> </li> <li> <p>stuffed</p> </li> </ul>
  * synonyms
    * items [Value](#value)
  * value **required**

### EnumerationValues
* EnumerationValues `array`
  * items [EnumerationValue](#enumerationvalue)

### ExportStatus
* ExportStatus `string` (values: IN_PROGRESS, READY, FAILED)

### ExportType
* ExportType `string` (values: ALEXA_SKILLS_KIT, LEX)

### FollowUpPrompt
* FollowUpPrompt `object`: A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.
  * prompt **required**
    * maxAttempts **required**
    * messages **required**
      * items [Message](#message)
    * responseCard
  * rejectionStatement **required**
    * messages **required**
      * items [Message](#message)
    * responseCard

### FulfillmentActivity
* FulfillmentActivity `object`: <p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul>
  * codeHook
    * messageVersion **required**
    * uri **required**
  * type **required**

### FulfillmentActivityType
* FulfillmentActivityType `string` (values: ReturnIntent, CodeHook)

### GetBotAliasRequest
* GetBotAliasRequest `object`

### GetBotAliasResponse
* GetBotAliasResponse `object`
  * botName
  * botVersion
  * checksum
  * conversationLogs
    * iamRoleArn
    * logSettings
      * items [LogSettingsResponse](#logsettingsresponse)
  * createdDate
  * description
  * lastUpdatedDate
  * name

### GetBotAliasesRequest
* GetBotAliasesRequest `object`

### GetBotAliasesResponse
* GetBotAliasesResponse `object`
  * BotAliases
    * items [BotAliasMetadata](#botaliasmetadata)
  * nextToken

### GetBotChannelAssociationRequest
* GetBotChannelAssociationRequest `object`

### GetBotChannelAssociationResponse
* GetBotChannelAssociationResponse `object`
  * botAlias
  * botConfiguration
  * botName
  * createdDate
  * description
  * failureReason
  * name
  * status
  * type

### GetBotChannelAssociationsRequest
* GetBotChannelAssociationsRequest `object`

### GetBotChannelAssociationsResponse
* GetBotChannelAssociationsResponse `object`
  * botChannelAssociations
    * items [BotChannelAssociation](#botchannelassociation)
  * nextToken

### GetBotRequest
* GetBotRequest `object`

### GetBotResponse
* GetBotResponse `object`
  * abortStatement
    * messages **required**
      * items [Message](#message)
    * responseCard
  * checksum
  * childDirected
  * clarificationPrompt
    * maxAttempts **required**
    * messages **required**
      * items [Message](#message)
    * responseCard
  * createdDate
  * description
  * detectSentiment
  * enableModelImprovements
  * failureReason
  * idleSessionTTLInSeconds
  * intents
    * items [Intent](#intent)
  * lastUpdatedDate
  * locale
  * name
  * nluIntentConfidenceThreshold
  * status
  * version
  * voiceId

### GetBotVersionsRequest
* GetBotVersionsRequest `object`

### GetBotVersionsResponse
* GetBotVersionsResponse `object`
  * bots
    * items [BotMetadata](#botmetadata)
  * nextToken

### GetBotsRequest
* GetBotsRequest `object`

### GetBotsResponse
* GetBotsResponse `object`
  * bots
    * items [BotMetadata](#botmetadata)
  * nextToken

### GetBuiltinIntentRequest
* GetBuiltinIntentRequest `object`

### GetBuiltinIntentResponse
* GetBuiltinIntentResponse `object`
  * signature
  * slots
    * items [BuiltinIntentSlot](#builtinintentslot)
  * supportedLocales
    * items [Locale](#locale)

### GetBuiltinIntentsRequest
* GetBuiltinIntentsRequest `object`

### GetBuiltinIntentsResponse
* GetBuiltinIntentsResponse `object`
  * intents
    * items [BuiltinIntentMetadata](#builtinintentmetadata)
  * nextToken

### GetBuiltinSlotTypesRequest
* GetBuiltinSlotTypesRequest `object`

### GetBuiltinSlotTypesResponse
* GetBuiltinSlotTypesResponse `object`
  * nextToken
  * slotTypes
    * items [BuiltinSlotTypeMetadata](#builtinslottypemetadata)

### GetExportRequest
* GetExportRequest `object`

### GetExportResponse
* GetExportResponse `object`
  * exportStatus
  * exportType
  * failureReason
  * name
  * resourceType
  * url
  * version

### GetImportRequest
* GetImportRequest `object`

### GetImportResponse
* GetImportResponse `object`
  * createdDate
  * failureReason
    * items [String](#string)
  * importId
  * importStatus
  * mergeStrategy
  * name
  * resourceType

### GetIntentRequest
* GetIntentRequest `object`

### GetIntentResponse
* GetIntentResponse `object`
  * checksum
  * conclusionStatement
    * messages **required**
      * items [Message](#message)
    * responseCard
  * confirmationPrompt
    * maxAttempts **required**
    * messages **required**
      * items [Message](#message)
    * responseCard
  * createdDate
  * description
  * dialogCodeHook
    * messageVersion **required**
    * uri **required**
  * followUpPrompt
    * prompt **required**
      * maxAttempts **required**
      * messages **required**
        * items [Message](#message)
      * responseCard
    * rejectionStatement **required**
      * messages **required**
        * items [Message](#message)
      * responseCard
  * fulfillmentActivity
    * codeHook
      * messageVersion **required**
      * uri **required**
    * type **required**
  * inputContexts
    * items [InputContext](#inputcontext)
  * kendraConfiguration
    * kendraIndex **required**
    * queryFilterString
    * role **required**
  * lastUpdatedDate
  * name
  * outputContexts
    * items [OutputContext](#outputcontext)
  * parentIntentSignature
  * rejectionStatement
    * messages **required**
      * items [Message](#message)
    * responseCard
  * sampleUtterances
    * items [Utterance](#utterance)
  * slots
    * items [Slot](#slot)
  * version

### GetIntentVersionsRequest
* GetIntentVersionsRequest `object`

### GetIntentVersionsResponse
* GetIntentVersionsResponse `object`
  * intents
    * items [IntentMetadata](#intentmetadata)
  * nextToken

### GetIntentsRequest
* GetIntentsRequest `object`

### GetIntentsResponse
* GetIntentsResponse `object`
  * intents
    * items [IntentMetadata](#intentmetadata)
  * nextToken

### GetSlotTypeRequest
* GetSlotTypeRequest `object`

### GetSlotTypeResponse
* GetSlotTypeResponse `object`
  * checksum
  * createdDate
  * description
  * enumerationValues
    * items [EnumerationValue](#enumerationvalue)
  * lastUpdatedDate
  * name
  * parentSlotTypeSignature
  * slotTypeConfigurations
    * items [SlotTypeConfiguration](#slottypeconfiguration)
  * valueSelectionStrategy
  * version

### GetSlotTypeVersionsRequest
* GetSlotTypeVersionsRequest `object`

### GetSlotTypeVersionsResponse
* GetSlotTypeVersionsResponse `object`
  * nextToken
  * slotTypes
    * items [SlotTypeMetadata](#slottypemetadata)

### GetSlotTypesRequest
* GetSlotTypesRequest `object`

### GetSlotTypesResponse
* GetSlotTypesResponse `object`
  * nextToken
  * slotTypes
    * items [SlotTypeMetadata](#slottypemetadata)

### GetUtterancesViewRequest
* GetUtterancesViewRequest `object`

### GetUtterancesViewResponse
* GetUtterancesViewResponse `object`
  * botName
  * utterances
    * items [UtteranceList](#utterancelist)

### GroupNumber
* GroupNumber `integer`

### IamRoleArn
* IamRoleArn `string`

### ImportStatus
* ImportStatus `string` (values: IN_PROGRESS, COMPLETE, FAILED)

### InputContext
* InputContext `object`: The name of a context that must be active for an intent to be selected by Amazon Lex.
  * name **required**

### InputContextList
* InputContextList `array`
  * items [InputContext](#inputcontext)

### InputContextName
* InputContextName `string`

### Intent
* Intent `object`: Identifies the specific version of an intent.
  * intentName **required**
  * intentVersion **required**

### IntentList
* IntentList `array`
  * items [Intent](#intent)

### IntentMetadata
* IntentMetadata `object`: Provides information about an intent.
  * createdDate
  * description
  * lastUpdatedDate
  * name
  * version

### IntentMetadataList
* IntentMetadataList `array`
  * items [IntentMetadata](#intentmetadata)

### IntentName
* IntentName `string`

### IntentUtteranceList
* IntentUtteranceList `array`
  * items [Utterance](#utterance)

### InternalFailureException


### KendraConfiguration
* KendraConfiguration `object`: Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html"> AMAZON.KendraSearchIntent</a>.
  * kendraIndex **required**
  * queryFilterString
  * role **required**

### KendraIndexArn
* KendraIndexArn `string`

### KmsKeyArn
* KmsKeyArn `string`

### LambdaARN
* LambdaARN `string`

### LimitExceededException


### ListOfUtterance
* ListOfUtterance `array`
  * items [UtteranceData](#utterancedata)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags
    * items [Tag](#tag)

### ListsOfUtterances
* ListsOfUtterances `array`
  * items [UtteranceList](#utterancelist)

### Locale
* Locale `string` (values: de-DE, en-AU, en-GB, en-US, es-419, es-ES, es-US, fr-FR, fr-CA, it-IT)

### LocaleList
* LocaleList `array`
  * items [Locale](#locale)

### LogSettingsRequest
* LogSettingsRequest `object`: Settings used to configure delivery mode and destination for conversation logs.
  * destination **required**
  * kmsKeyArn
  * logType **required**
  * resourceArn **required**

### LogSettingsRequestList
* LogSettingsRequestList `array`
  * items [LogSettingsRequest](#logsettingsrequest)

### LogSettingsResponse
* LogSettingsResponse `object`: The settings for conversation logs.
  * destination
  * kmsKeyArn
  * logType
  * resourceArn
  * resourcePrefix

### LogSettingsResponseList
* LogSettingsResponseList `array`
  * items [LogSettingsResponse](#logsettingsresponse)

### LogType
* LogType `string` (values: AUDIO, TEXT)

### MaxResults
* MaxResults `integer`

### MergeStrategy
* MergeStrategy `string` (values: OVERWRITE_LATEST, FAIL_ON_CONFLICT)

### Message
* Message `object`: The message object that provides the message text and its type.
  * content **required**
  * contentType **required**
  * groupNumber

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


### NumericalVersion
* NumericalVersion `string`

### ObfuscationSetting
* ObfuscationSetting `string` (values: NONE, DEFAULT_OBFUSCATION)

### OutputContext
* OutputContext `object`: The specification of an output context that is set when an intent is fulfilled.
  * name **required**
  * timeToLiveInSeconds **required**
  * turnsToLive **required**

### OutputContextList
* OutputContextList `array`
  * items [OutputContext](#outputcontext)

### OutputContextName
* OutputContextName `string`

### PreconditionFailedException


### Priority
* Priority `integer`

### ProcessBehavior
* ProcessBehavior `string` (values: SAVE, BUILD)

### Prompt
* Prompt `object`: Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
  * maxAttempts **required**
  * messages **required**
    * items [Message](#message)
  * responseCard

### PromptMaxAttempts
* PromptMaxAttempts `integer`

### PutBotAliasRequest
* PutBotAliasRequest `object`
  * tags
    * items [Tag](#tag)
  * botVersion **required**
  * checksum
  * conversationLogs
    * iamRoleArn **required**
    * logSettings **required**
      * items [LogSettingsRequest](#logsettingsrequest)
  * description

### PutBotAliasResponse
* PutBotAliasResponse `object`
  * tags
    * items [Tag](#tag)
  * botName
  * botVersion
  * checksum
  * conversationLogs
    * iamRoleArn
    * logSettings
      * items [LogSettingsResponse](#logsettingsresponse)
  * createdDate
  * description
  * lastUpdatedDate
  * name

### PutBotRequest
* PutBotRequest `object`
  * tags
    * items [Tag](#tag)
  * abortStatement
    * messages **required**
      * items [Message](#message)
    * responseCard
  * checksum
  * childDirected **required**
  * clarificationPrompt
    * maxAttempts **required**
    * messages **required**
      * items [Message](#message)
    * responseCard
  * createVersion
  * description
  * detectSentiment
  * enableModelImprovements
  * idleSessionTTLInSeconds
  * intents
    * items [Intent](#intent)
  * locale **required**
  * nluIntentConfidenceThreshold
  * processBehavior
  * voiceId

### PutBotResponse
* PutBotResponse `object`
  * tags
    * items [Tag](#tag)
  * abortStatement
    * messages **required**
      * items [Message](#message)
    * responseCard
  * checksum
  * childDirected
  * clarificationPrompt
    * maxAttempts **required**
    * messages **required**
      * items [Message](#message)
    * responseCard
  * createVersion
  * createdDate
  * description
  * detectSentiment
  * enableModelImprovements
  * failureReason
  * idleSessionTTLInSeconds
  * intents
    * items [Intent](#intent)
  * lastUpdatedDate
  * locale
  * name
  * nluIntentConfidenceThreshold
  * status
  * version
  * voiceId

### PutIntentRequest
* PutIntentRequest `object`
  * checksum
  * conclusionStatement
    * messages **required**
      * items [Message](#message)
    * responseCard
  * confirmationPrompt
    * maxAttempts **required**
    * messages **required**
      * items [Message](#message)
    * responseCard
  * createVersion
  * description
  * dialogCodeHook
    * messageVersion **required**
    * uri **required**
  * followUpPrompt
    * prompt **required**
      * maxAttempts **required**
      * messages **required**
        * items [Message](#message)
      * responseCard
    * rejectionStatement **required**
      * messages **required**
        * items [Message](#message)
      * responseCard
  * fulfillmentActivity
    * codeHook
      * messageVersion **required**
      * uri **required**
    * type **required**
  * inputContexts
    * items [InputContext](#inputcontext)
  * kendraConfiguration
    * kendraIndex **required**
    * queryFilterString
    * role **required**
  * outputContexts
    * items [OutputContext](#outputcontext)
  * parentIntentSignature
  * rejectionStatement
    * messages **required**
      * items [Message](#message)
    * responseCard
  * sampleUtterances
    * items [Utterance](#utterance)
  * slots
    * items [Slot](#slot)

### PutIntentResponse
* PutIntentResponse `object`
  * checksum
  * conclusionStatement
    * messages **required**
      * items [Message](#message)
    * responseCard
  * confirmationPrompt
    * maxAttempts **required**
    * messages **required**
      * items [Message](#message)
    * responseCard
  * createVersion
  * createdDate
  * description
  * dialogCodeHook
    * messageVersion **required**
    * uri **required**
  * followUpPrompt
    * prompt **required**
      * maxAttempts **required**
      * messages **required**
        * items [Message](#message)
      * responseCard
    * rejectionStatement **required**
      * messages **required**
        * items [Message](#message)
      * responseCard
  * fulfillmentActivity
    * codeHook
      * messageVersion **required**
      * uri **required**
    * type **required**
  * inputContexts
    * items [InputContext](#inputcontext)
  * kendraConfiguration
    * kendraIndex **required**
    * queryFilterString
    * role **required**
  * lastUpdatedDate
  * name
  * outputContexts
    * items [OutputContext](#outputcontext)
  * parentIntentSignature
  * rejectionStatement
    * messages **required**
      * items [Message](#message)
    * responseCard
  * sampleUtterances
    * items [Utterance](#utterance)
  * slots
    * items [Slot](#slot)
  * version

### PutSlotTypeRequest
* PutSlotTypeRequest `object`
  * checksum
  * createVersion
  * description
  * enumerationValues
    * items [EnumerationValue](#enumerationvalue)
  * parentSlotTypeSignature
  * slotTypeConfigurations
    * items [SlotTypeConfiguration](#slottypeconfiguration)
  * valueSelectionStrategy

### PutSlotTypeResponse
* PutSlotTypeResponse `object`
  * checksum
  * createVersion
  * createdDate
  * description
  * enumerationValues
    * items [EnumerationValue](#enumerationvalue)
  * lastUpdatedDate
  * name
  * parentSlotTypeSignature
  * slotTypeConfigurations
    * items [SlotTypeConfiguration](#slottypeconfiguration)
  * valueSelectionStrategy
  * version

### QueryFilterString
* QueryFilterString `string`

### RegexPattern
* RegexPattern `string`

### ResourceArn
* ResourceArn `string`

### ResourceInUseException


### ResourcePrefix
* ResourcePrefix `string`

### ResourceType
* ResourceType `string` (values: BOT, INTENT, SLOT_TYPE)

### ResponseCard
* ResponseCard `string`

### SessionTTL
* SessionTTL `integer`

### Slot
* Slot `object`: Identifies the version of a specific slot.
  * defaultValueSpec
    * defaultValueList **required**
      * items [SlotDefaultValue](#slotdefaultvalue)
  * description
  * name **required**
  * obfuscationSetting
  * priority
  * responseCard
  * sampleUtterances
    * items [Utterance](#utterance)
  * slotConstraint **required**
  * slotType
  * slotTypeVersion
  * valueElicitationPrompt
    * maxAttempts **required**
    * messages **required**
      * items [Message](#message)
    * responseCard

### SlotConstraint
* SlotConstraint `string` (values: Required, Optional)

### SlotDefaultValue
* SlotDefaultValue `object`: A default value for a slot.
  * defaultValue **required**

### SlotDefaultValueList
* SlotDefaultValueList `array`
  * items [SlotDefaultValue](#slotdefaultvalue)

### SlotDefaultValueSpec
* SlotDefaultValueSpec `object`: Contains the default values for a slot. Default values are used when Amazon Lex hasn't determined a value for a slot.
  * defaultValueList **required**
    * items [SlotDefaultValue](#slotdefaultvalue)

### SlotDefaultValueString
* SlotDefaultValueString `string`

### SlotList
* SlotList `array`
  * items [Slot](#slot)

### SlotName
* SlotName `string`

### SlotTypeConfiguration
* SlotTypeConfiguration `object`: Provides configuration information for a slot type.
  * regexConfiguration
    * pattern **required**

### SlotTypeConfigurations
* SlotTypeConfigurations `array`
  * items [SlotTypeConfiguration](#slottypeconfiguration)

### SlotTypeMetadata
* SlotTypeMetadata `object`: Provides information about a slot type..
  * createdDate
  * description
  * lastUpdatedDate
  * name
  * version

### SlotTypeMetadataList
* SlotTypeMetadataList `array`
  * items [SlotTypeMetadata](#slottypemetadata)

### SlotTypeName
* SlotTypeName `string`

### SlotTypeRegexConfiguration
* SlotTypeRegexConfiguration `object`: Provides a regular expression used to validate the value of a slot.
  * pattern **required**

### SlotUtteranceList
* SlotUtteranceList `array`
  * items [Utterance](#utterance)

### SlotValueSelectionStrategy
* SlotValueSelectionStrategy `string` (values: ORIGINAL_VALUE, TOP_RESOLUTION)

### StartImportRequest
* StartImportRequest `object`
  * tags
    * items [Tag](#tag)
  * mergeStrategy **required**
  * payload **required**
  * resourceType **required**

### StartImportResponse
* StartImportResponse `object`
  * tags
    * items [Tag](#tag)
  * createdDate
  * importId
  * importStatus
  * mergeStrategy
  * name
  * resourceType

### Statement
* Statement `object`: A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
  * messages **required**
    * items [Message](#message)
  * responseCard

### Status
* Status `string` (values: BUILDING, READY, READY_BASIC_TESTING, FAILED, NOT_BUILT)

### StatusType
* StatusType `string` (values: Detected, Missed)

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### SynonymList
* SynonymList `array`
  * items [Value](#value)

### Tag
* Tag `object`: A list of key/value pairs that identify a bot, bot alias, or bot channel. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @. 
  * key **required**
  * value **required**

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Timestamp
* Timestamp `string`

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UserId
* UserId `string`

### Utterance
* Utterance `string`

### UtteranceData
* UtteranceData `object`: Provides information about a single utterance that was made to your bot. 
  * count
  * distinctUsers
  * firstUtteredDate
  * lastUtteredDate
  * utteranceString

### UtteranceList
* UtteranceList `object`: Provides a list of utterances that have been made to a specific version of your bot. The list contains a maximum of 100 utterances.
  * botVersion
  * utterances
    * items [UtteranceData](#utterancedata)

### UtteranceString
* UtteranceString `string`

### Value
* Value `string`

### Version
* Version `string`

### roleArn
* roleArn `string`


