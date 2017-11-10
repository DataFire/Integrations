# @datafire/amazonaws_models_lex

Client library for Amazon Lex Model Building Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_models_lex
```

```js
let datafire = require('datafire');
let amazonaws_models_lex = require('@datafire/amazonaws_models_lex').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
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

#### Parameters
* maxResults (string)
* nextToken (string)

### GetBotAliases



```js
amazonaws_models_lex.GetBotAliases({
  "botName": ""
}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* botName (string) **required**

### GetBotChannelAssociations



```js
amazonaws_models_lex.GetBotChannelAssociations({
  "botName": "",
  "aliasName": ""
}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* botName (string) **required**
* aliasName (string) **required**

### GetBotChannelAssociation



```js
amazonaws_models_lex.GetBotChannelAssociation({
  "name": "",
  "botName": "",
  "aliasName": ""
}, context)
```

#### Parameters
* name (string) **required**
* botName (string) **required**
* aliasName (string) **required**

### PutBotAlias



```js
amazonaws_models_lex.PutBotAlias({
  "name": "",
  "botName": "",
  "botVersion": ""
}, context)
```

#### Parameters
* name (string) **required**
* botName (string) **required**
* botVersion (string) **required**
* checksum (string)
* description (string)

### DeleteUtterances



```js
amazonaws_models_lex.DeleteUtterances({
  "botName": "",
  "userId": ""
}, context)
```

#### Parameters
* botName (string) **required**
* userId (string) **required**

### GetUtterancesView



```js
amazonaws_models_lex.GetUtterancesView({
  "botname": ""
}, context)
```

#### Parameters
* botname (string) **required**

### DeleteBot



```js
amazonaws_models_lex.DeleteBot({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required**

### CreateBotVersion



```js
amazonaws_models_lex.CreateBotVersion({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required**
* checksum (string)

### GetBotVersions



```js
amazonaws_models_lex.GetBotVersions({
  "name": ""
}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* name (string) **required**

### PutBot



```js
amazonaws_models_lex.PutBot({
  "name": "",
  "locale": "",
  "childDirected": true
}, context)
```

#### Parameters
* name (string) **required**
* abortStatement (object) - A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
* checksum (string)
* childDirected (boolean) **required**
* clarificationPrompt (object) - Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
* description (string)
* idleSessionTTLInSeconds (integer)
* intents (array)
* locale (string) **required**
* processBehavior (string)
* voiceId (string)

### GetBot



```js
amazonaws_models_lex.GetBot({
  "name": "",
  "versionoralias": ""
}, context)
```

#### Parameters
* name (string) **required**
* versionoralias (string) **required**

### DeleteBotVersion



```js
amazonaws_models_lex.DeleteBotVersion({
  "name": "",
  "version": ""
}, context)
```

#### Parameters
* name (string) **required**
* version (string) **required**

### GetBuiltinIntents



```js
amazonaws_models_lex.GetBuiltinIntents({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### GetBuiltinIntent



```js
amazonaws_models_lex.GetBuiltinIntent({
  "signature": ""
}, context)
```

#### Parameters
* signature (string) **required**

### GetBuiltinSlotTypes



```js
amazonaws_models_lex.GetBuiltinSlotTypes({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### GetExport



```js
amazonaws_models_lex.GetExport({}, context)
```

#### Parameters
*This action has no parameters*

### GetIntents



```js
amazonaws_models_lex.GetIntents({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### DeleteIntent



```js
amazonaws_models_lex.DeleteIntent({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required**

### CreateIntentVersion



```js
amazonaws_models_lex.CreateIntentVersion({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required**
* checksum (string)

### GetIntentVersions



```js
amazonaws_models_lex.GetIntentVersions({
  "name": ""
}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* name (string) **required**

### PutIntent



```js
amazonaws_models_lex.PutIntent({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required**
* checksum (string)
* conclusionStatement (object) - A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
* confirmationPrompt (object) - Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
* description (string)
* dialogCodeHook (object) - Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..
* followUpPrompt (object) - A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.
* fulfillmentActivity (object) - <p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul>
* parentIntentSignature (string)
* rejectionStatement (object) - A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
* sampleUtterances (array)
* slots (array)

### GetIntent



```js
amazonaws_models_lex.GetIntent({
  "name": "",
  "version": ""
}, context)
```

#### Parameters
* name (string) **required**
* version (string) **required**

### GetSlotTypes



```js
amazonaws_models_lex.GetSlotTypes({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### DeleteSlotType



```js
amazonaws_models_lex.DeleteSlotType({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required**

### DeleteSlotTypeVersion



```js
amazonaws_models_lex.DeleteSlotTypeVersion({
  "name": "",
  "version": ""
}, context)
```

#### Parameters
* name (string) **required**
* version (string) **required**

### CreateSlotTypeVersion



```js
amazonaws_models_lex.CreateSlotTypeVersion({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required**
* checksum (string)

### GetSlotTypeVersions



```js
amazonaws_models_lex.GetSlotTypeVersions({
  "name": ""
}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* name (string) **required**

### PutSlotType



```js
amazonaws_models_lex.PutSlotType({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required**
* checksum (string)
* description (string)
* enumerationValues (array)
* valueSelectionStrategy (string)

### GetSlotType



```js
amazonaws_models_lex.GetSlotType({
  "name": "",
  "version": ""
}, context)
```

#### Parameters
* name (string) **required**
* version (string) **required**

