# @datafire/amazonaws_models_lex

Client library for Amazon Lex Model Building Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_models_lex
```

```js
let datafire = require('datafire');
let amazonaws_models_lex = require('@datafire/amazonaws_models_lex').actions;
let context = new datafire.Context();

amazonaws_models_lex.GetBots({}, context).then(data => {
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
  "botName": ""
}, context)
```

#### Parameters
* name (string) **required**
* botName (string) **required**

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
  "name": ""
}, context)
```

#### Parameters
* name (string) **required**

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

