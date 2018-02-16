# @datafire/amazonaws_runtime_lex

Client library for Amazon Lex Runtime Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_runtime_lex
```
```js
let amazonaws_runtime_lex = require('@datafire/amazonaws_runtime_lex').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_runtime_lex.PostContent({
  "botName": "",
  "botAlias": "",
  "userId": "",
  "inputStream": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * botName **required** `string`
  * botAlias **required** `string`
  * userId **required** `string`
  * inputStream **required** [BlobStream](#blobstream)

#### Output
* output [PostContentResponse](#postcontentresponse)

### PostText



```js
amazonaws_runtime_lex.PostText({
  "botName": "",
  "botAlias": "",
  "userId": "",
  "inputText": ""
}, context)
```

#### Input
* input `object`
  * botName **required** `string`
  * botAlias **required** `string`
  * userId **required** `string`
  * inputText **required** [Text](#text)
  * requestAttributes [StringMap](#stringmap)
  * sessionAttributes [StringMap](#stringmap)

#### Output
* output [PostTextResponse](#posttextresponse)



## Definitions

### Accept
* Accept `string`

### AttributesString
* AttributesString `string`

### BadGatewayException
* BadGatewayException `object`: Either the Amazon Lex bot is still building, or one of the dependent services (Amazon Polly, AWS Lambda) failed with an internal service error.
  * Message [ErrorMessage](#errormessage)

### BadRequestException
* BadRequestException `object`:  Request validation failed, there is no usable message in the context, or the bot build failed, is still in progress, or contains unbuilt changes. 
  * message [String](#string)

### BlobStream
* BlobStream `string`

### BotAlias
* BotAlias `string`

### BotName
* BotName `string`

### Button
* Button `object`: Represents an option to be shown on the client platform (Facebook, Slack, etc.)
  * text **required** [ButtonTextStringWithLength](#buttontextstringwithlength)
  * value **required** [ButtonValueStringWithLength](#buttonvaluestringwithlength)

### ButtonTextStringWithLength
* ButtonTextStringWithLength `string`

### ButtonValueStringWithLength
* ButtonValueStringWithLength `string`

### ConflictException
* ConflictException `object`:  Two clients are using the same AWS account, Amazon Lex bot, and user ID. 
  * message [String](#string)

### ContentType
* ContentType `string` (values: application/vnd.amazonaws.card.generic)

### DependencyFailedException
* DependencyFailedException `object`: <p> One of the dependencies, such as AWS Lambda or Amazon Polly, threw an exception. For example, </p> <ul> <li> <p>If Amazon Lex does not have sufficient permissions to call a Lambda function.</p> </li> <li> <p>If a Lambda function takes longer than 30 seconds to execute.</p> </li> <li> <p>If a fulfillment Lambda function returns a <code>Delegate</code> dialog action without removing any slot values.</p> </li> </ul>
  * Message [ErrorMessage](#errormessage)

### DialogState
* DialogState `string` (values: ElicitIntent, ConfirmIntent, ElicitSlot, Fulfilled, ReadyForFulfillment, Failed)

### ErrorMessage
* ErrorMessage `string`

### GenericAttachment
* GenericAttachment `object`: Represents an option rendered to the user when a prompt is shown. It could be an image, a button, a link, or text. 
  * attachmentLinkUrl [StringUrlWithLength](#stringurlwithlength)
  * buttons [listOfButtons](#listofbuttons)
  * imageUrl [StringUrlWithLength](#stringurlwithlength)
  * subTitle [StringWithLength](#stringwithlength)
  * title [StringWithLength](#stringwithlength)

### HttpContentType
* HttpContentType `string`

### IntentName
* IntentName `string`

### InternalFailureException
* InternalFailureException `object`: Internal service error. Retry the call.
  * message [String](#string)

### LimitExceededException
* LimitExceededException `object`: Exceeded a limit.
  * message [String](#string)

### LoopDetectedException
* LoopDetectedException `object`: This exception is not used.
  * Message [ErrorMessage](#errormessage)

### MessageFormatType
* MessageFormatType `string` (values: PlainText, CustomPayload, SSML, Composite)

### NotAcceptableException
* NotAcceptableException `object`: The accept header in the request does not have a valid value.
  * message [String](#string)

### NotFoundException
* NotFoundException `object`: The resource (such as the Amazon Lex bot or an alias) that is referred to is not found.
  * message [String](#string)

### PostContentRequest
* PostContentRequest `object`
  * inputStream **required** [BlobStream](#blobstream)

### PostContentResponse
* PostContentResponse `object`
  * audioStream [BlobStream](#blobstream)

### PostTextRequest
* PostTextRequest `object`
  * inputText **required** [Text](#text)
  * requestAttributes [StringMap](#stringmap)
  * sessionAttributes [StringMap](#stringmap)

### PostTextResponse
* PostTextResponse `object`
  * dialogState [DialogState](#dialogstate)
  * intentName [IntentName](#intentname)
  * message [Text](#text)
  * messageFormat [MessageFormatType](#messageformattype)
  * responseCard [ResponseCard](#responsecard)
  * sessionAttributes [StringMap](#stringmap)
  * slotToElicit [String](#string)
  * slots [StringMap](#stringmap)

### RequestTimeoutException
* RequestTimeoutException `object`: The input speech is too long.
  * message [String](#string)

### ResponseCard
* ResponseCard `object`: If you configure a response card when creating your bots, Amazon Lex substitutes the session attributes and slot values that are available, and then returns it. The response card can also come from a Lambda function ( <code>dialogCodeHook</code> and <code>fulfillmentActivity</code> on an intent).
  * contentType [ContentType](#contenttype)
  * genericAttachments [genericAttachmentList](#genericattachmentlist)
  * version [String](#string)

### String
* String `string`

### StringMap
* StringMap `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### StringUrlWithLength
* StringUrlWithLength `string`

### StringWithLength
* StringWithLength `string`

### Text
* Text `string`

### UnsupportedMediaTypeException
* UnsupportedMediaTypeException `object`: The Content-Type header (<code>PostContent</code> API) has an invalid value. 
  * message [String](#string)

### UserId
* UserId `string`

### genericAttachmentList
* genericAttachmentList `array`
  * items [GenericAttachment](#genericattachment)

### listOfButtons
* listOfButtons `array`
  * items [Button](#button)


