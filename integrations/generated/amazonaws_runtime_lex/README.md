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

.then(data => {
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
  "Content-Type": "",
  "inputStream": ""
}, context)
```

#### Input
* input `object`
  * botName **required** `string`
  * botAlias **required** `string`
  * userId **required** `string`
  * x-amz-lex-session-attributes `string`
  * x-amz-lex-request-attributes `string`
  * Content-Type **required** `string`
  * Accept `string`
  * x-amz-lex-active-contexts `string`
  * inputStream **required** `string`: <p> User input in PCM or Opus audio format or text format as described in the <code>Content-Type</code> HTTP header. </p> <p>You can stream audio data to Amazon Lex or you can create a local buffer that captures all of the audio data before sending. In general, you get better performance if you stream audio data rather than buffering the data locally.</p>

#### Output
* output [PostContentResponse](#postcontentresponse)

### DeleteSession



```js
amazonaws_runtime_lex.DeleteSession({
  "botName": "",
  "botAlias": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * botName **required** `string`
  * botAlias **required** `string`
  * userId **required** `string`

#### Output
* output [DeleteSessionResponse](#deletesessionresponse)

### PutSession



```js
amazonaws_runtime_lex.PutSession({
  "botName": "",
  "botAlias": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * botName **required** `string`
  * botAlias **required** `string`
  * userId **required** `string`
  * Accept `string`
  * activeContexts `array`: <p>A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by including the context in the request,</p> <p>If you don't specify a list of contexts, Amazon Lex will use the current list of contexts for the session. If you specify an empty list, all contexts for the session are cleared.</p>
    * items [ActiveContext](#activecontext)
  * dialogAction `object`: Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.
    * fulfillmentState
    * intentName
    * message
    * messageFormat
    * slotToElicit
    * slots
    * type
  * recentIntentSummaryView `array`: <p>A summary of the recent intents for the bot. You can use the intent summary view to set a checkpoint label on an intent and modify attributes of intents. You can also use it to remove or add intent summary objects to the list.</p> <p>An intent that you modify or add to the list must make sense for the bot. For example, the intent name must be valid for the bot. You must provide valid values for:</p> <ul> <li> <p> <code>intentName</code> </p> </li> <li> <p>slot names</p> </li> <li> <p> <code>slotToElict</code> </p> </li> </ul> <p>If you send the <code>recentIntentSummaryView</code> parameter in a <code>PutSession</code> request, the contents of the new summary view replaces the old summary view. For example, if a <code>GetSession</code> request returns three intents in the summary view and you call <code>PutSession</code> with one intent in the summary view, the next call to <code>GetSession</code> will only return one intent.</p>
    * items [IntentSummary](#intentsummary)
  * sessionAttributes `object`: Map of key/value pairs representing the session-specific context information. It contains application information passed between Amazon Lex and a client application.

#### Output
* output [PutSessionResponse](#putsessionresponse)

### GetSession



```js
amazonaws_runtime_lex.GetSession({
  "botName": "",
  "botAlias": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * botName **required** `string`
  * botAlias **required** `string`
  * userId **required** `string`
  * checkpointLabelFilter `string`

#### Output
* output [GetSessionResponse](#getsessionresponse)

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
  * activeContexts `array`: <p>A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by including the context in the request,</p> <p>If you don't specify a list of contexts, Amazon Lex will use the current list of contexts for the session. If you specify an empty list, all contexts for the session are cleared.</p>
    * items [ActiveContext](#activecontext)
  * inputText **required** `string`: The text that the user entered (Amazon Lex interprets this text).
  * requestAttributes `object`: <p>Request-specific information passed between Amazon Lex and a client application.</p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-request-attribs">Setting Request Attributes</a>.</p>
  * sessionAttributes `object`: <p>Application-specific information passed between Amazon Lex and a client application.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-session-attribs">Setting Session Attributes</a>.</p>

#### Output
* output [PostTextResponse](#posttextresponse)



## Definitions

### Accept
* Accept `string`

### ActiveContext
* ActiveContext `object`: A context is a variable that contains information about the current state of the conversation between a user and Amazon Lex. Context can be set automatically by Amazon Lex when an intent is fulfilled, or it can be set at runtime using the <code>PutContent</code>, <code>PutText</code>, or <code>PutSession</code> operation.
  * parameters **required**
  * name **required**
  * timeToLive **required**
    * timeToLiveInSeconds
    * turnsToLive

### ActiveContextName
* ActiveContextName `string`

### ActiveContextParametersMap
* ActiveContextParametersMap `object`

### ActiveContextTimeToLive
* ActiveContextTimeToLive `object`: The length of time or number of turns that a context remains active.
  * timeToLiveInSeconds
  * turnsToLive

### ActiveContextTimeToLiveInSeconds
* ActiveContextTimeToLiveInSeconds `integer`

### ActiveContextTurnsToLive
* ActiveContextTurnsToLive `integer`

### ActiveContextsList
* ActiveContextsList `array`
  * items [ActiveContext](#activecontext)

### ActiveContextsString
* ActiveContextsString `string`

### AttributesString
* AttributesString `string`

### BadGatewayException


### BadRequestException


### BlobStream
* BlobStream `string`

### BotAlias
* BotAlias `string`

### BotName
* BotName `string`

### BotVersion
* BotVersion `string`

### Button
* Button `object`: Represents an option to be shown on the client platform (Facebook, Slack, etc.)
  * text **required**
  * value **required**

### ButtonTextStringWithLength
* ButtonTextStringWithLength `string`

### ButtonValueStringWithLength
* ButtonValueStringWithLength `string`

### ConfirmationStatus
* ConfirmationStatus `string` (values: None, Confirmed, Denied)

### ConflictException


### ContentType
* ContentType `string` (values: application/vnd.amazonaws.card.generic)

### DeleteSessionRequest
* DeleteSessionRequest `object`

### DeleteSessionResponse
* DeleteSessionResponse `object`
  * botAlias
  * botName
  * sessionId
  * userId

### DependencyFailedException


### DialogAction
* DialogAction `object`: Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.
  * fulfillmentState
  * intentName
  * message
  * messageFormat
  * slotToElicit
  * slots
  * type **required**

### DialogActionType
* DialogActionType `string` (values: ElicitIntent, ConfirmIntent, ElicitSlot, Close, Delegate)

### DialogState
* DialogState `string` (values: ElicitIntent, ConfirmIntent, ElicitSlot, Fulfilled, ReadyForFulfillment, Failed)

### Double
* Double `number`

### FulfillmentState
* FulfillmentState `string` (values: Fulfilled, Failed, ReadyForFulfillment)

### GenericAttachment
* GenericAttachment `object`: Represents an option rendered to the user when a prompt is shown. It could be an image, a button, a link, or text. 
  * attachmentLinkUrl
  * buttons
    * items [Button](#button)
  * imageUrl
  * subTitle
  * title

### GetSessionRequest
* GetSessionRequest `object`

### GetSessionResponse
* GetSessionResponse `object`
  * activeContexts
    * items [ActiveContext](#activecontext)
  * dialogAction
    * fulfillmentState
    * intentName
    * message
    * messageFormat
    * slotToElicit
    * slots
    * type **required**
  * recentIntentSummaryView
    * items [IntentSummary](#intentsummary)
  * sessionAttributes
  * sessionId

### HttpContentType
* HttpContentType `string`

### IntentConfidence
* IntentConfidence `object`: Provides a score that indicates the confidence that Amazon Lex has that an intent is the one that satisfies the user's intent.
  * score

### IntentList
* IntentList `array`
  * items [PredictedIntent](#predictedintent)

### IntentName
* IntentName `string`

### IntentSummary
* IntentSummary `object`: Provides information about the state of an intent. You can use this information to get the current state of an intent so that you can process the intent, or so that you can return the intent to its previous state.
  * checkpointLabel
  * confirmationStatus
  * dialogActionType **required**
  * fulfillmentState
  * intentName
  * slotToElicit
  * slots

### IntentSummaryCheckpointLabel
* IntentSummaryCheckpointLabel `string`

### IntentSummaryList
* IntentSummaryList `array`
  * items [IntentSummary](#intentsummary)

### InternalFailureException


### LimitExceededException


### LoopDetectedException


### MessageFormatType
* MessageFormatType `string` (values: PlainText, CustomPayload, SSML, Composite)

### NotAcceptableException


### NotFoundException


### ParameterName
* ParameterName `string`

### PostContentRequest
* PostContentRequest `object`
  * inputStream **required**

### PostContentResponse
* PostContentResponse `object`
  * audioStream

### PostTextRequest
* PostTextRequest `object`
  * activeContexts
    * items [ActiveContext](#activecontext)
  * inputText **required**
  * requestAttributes
  * sessionAttributes

### PostTextResponse
* PostTextResponse `object`
  * activeContexts
    * items [ActiveContext](#activecontext)
  * alternativeIntents
    * items [PredictedIntent](#predictedintent)
  * botVersion
  * dialogState
  * intentName
  * message
  * messageFormat
  * nluIntentConfidence
    * score
  * responseCard
    * contentType
    * genericAttachments
      * items [GenericAttachment](#genericattachment)
    * version
  * sentimentResponse
    * sentimentLabel
    * sentimentScore
  * sessionAttributes
  * sessionId
  * slotToElicit
  * slots

### PredictedIntent
* PredictedIntent `object`: An intent that Amazon Lex suggests satisfies the user's intent. Includes the name of the intent, the confidence that Amazon Lex has that the user's intent is satisfied, and the slots defined for the intent.
  * intentName
  * nluIntentConfidence
    * score
  * slots

### PutSessionRequest
* PutSessionRequest `object`
  * activeContexts
    * items [ActiveContext](#activecontext)
  * dialogAction
    * fulfillmentState
    * intentName
    * message
    * messageFormat
    * slotToElicit
    * slots
    * type **required**
  * recentIntentSummaryView
    * items [IntentSummary](#intentsummary)
  * sessionAttributes

### PutSessionResponse
* PutSessionResponse `object`
  * audioStream

### RequestTimeoutException


### ResponseCard
* ResponseCard `object`: If you configure a response card when creating your bots, Amazon Lex substitutes the session attributes and slot values that are available, and then returns it. The response card can also come from a Lambda function ( <code>dialogCodeHook</code> and <code>fulfillmentActivity</code> on an intent).
  * contentType
  * genericAttachments
    * items [GenericAttachment](#genericattachment)
  * version

### SentimentLabel
* SentimentLabel `string`

### SentimentResponse
* SentimentResponse `object`: <p>The sentiment expressed in an utterance.</p> <p>When the bot is configured to send utterances to Amazon Comprehend for sentiment analysis, this field structure contains the result of the analysis.</p>
  * sentimentLabel
  * sentimentScore

### SentimentScore
* SentimentScore `string`

### String
* String `string`

### StringMap
* StringMap `object`

### StringUrlWithLength
* StringUrlWithLength `string`

### StringWithLength
* StringWithLength `string`

### Text
* Text `string`

### UnsupportedMediaTypeException


### UserId
* UserId `string`

### genericAttachmentList
* genericAttachmentList `array`
  * items [GenericAttachment](#genericattachment)

### listOfButtons
* listOfButtons `array`
  * items [Button](#button)


