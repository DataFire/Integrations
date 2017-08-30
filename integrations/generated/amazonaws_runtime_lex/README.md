# @datafire/amazonaws_runtime_lex

Client library for Amazon Lex Runtime Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_runtime_lex
```

```js
let datafire = require('datafire');
let amazonaws_runtime_lex = require('@datafire/amazonaws_runtime_lex').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_runtime_lex.PostContent({}).then(data => {
  console.log(data);
})
```

## Description
Amazon Lex provides both build and runtime endpoints. Each endpoint provides a set of operations (API). Your conversational bot uses the runtime API to understand user utterances (user input text or voice). For example, suppose a user says "I want pizza", your bot sends this input to Amazon Lex using the runtime API. Amazon Lex recognizes that the user request is for the OrderPizza intent (one of the intents defined in the bot). Then Amazon Lex engages in user conversation on behalf of the bot to elicit required information (slot values, such as pizza size and crust type), and then performs fulfillment activity (that you configured when you created the bot). You use the build-time API to create and manage your Amazon Lex bot. For a list of build-time operations, see the build-time API, . 

## Actions
### PostContent



```js
amazonaws_runtime_lex.PostContent({
  "botName": "",
  "botAlias": "",
  "userId": "",
  "inputStream": ""
}, context)
```

#### Parameters
* botName (string) **required**
* botAlias (string) **required**
* userId (string) **required**
* inputStream (string) **required**

### PostText



```js
amazonaws_runtime_lex.PostText({
  "botName": "",
  "botAlias": "",
  "userId": "",
  "inputText": ""
}, context)
```

#### Parameters
* botName (string) **required**
* botAlias (string) **required**
* userId (string) **required**
* inputText (string) **required**
* sessionAttributes (array)

