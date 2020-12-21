# @datafire/azure_cognitiveservices_luis_runtime

Client library for Language Understanding Intelligent Service (LUIS) Endpoint API for running predictions and extracting user intentions and entities from utterances.

## Installation and Usage
```bash
npm install --save @datafire/azure_cognitiveservices_luis_runtime
```
```js
let azure_cognitiveservices_luis_runtime = require('@datafire/azure_cognitiveservices_luis_runtime').create({
  apiKeyHeader: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### Prediction_Resolve2
Gets predictions for a given utterance, in the form of intents and entities. The current maximum query size is 500 characters.


```js
azure_cognitiveservices_luis_runtime.Prediction_Resolve2({
  "appId": "",
  "q": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The LUIS application ID (guid).
  * q **required** `string`: The utterance to predict.
  * timezoneOffset `number`: The timezone offset for the location of the request.
  * verbose `boolean`: If true, return all intents instead of just the top scoring intent.
  * staging `boolean`: Use the staging endpoint slot.
  * spellCheck `boolean`: Enable spell checking.
  * bing-spell-check-subscription-key `string`: The subscription key to use when enabling bing spell check
  * log `boolean`: Log query (default is true)

#### Output
* output [LuisResult](#luisresult)

### Prediction_Resolve
Gets predictions for a given utterance, in the form of intents and entities. The current maximum query size is 500 characters.


```js
azure_cognitiveservices_luis_runtime.Prediction_Resolve({
  "appId": "",
  "q": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The LUIS application ID (Guid).
  * q **required** [Q](#q)
  * timezoneOffset `number`: The timezone offset for the location of the request.
  * verbose `boolean`: If true, return all intents instead of just the top scoring intent.
  * staging `boolean`: Use the staging endpoint slot.
  * spellCheck `boolean`: Enable spell checking.
  * bing-spell-check-subscription-key `string`: The subscription key to use when enabling bing spell check
  * log `boolean`: Log query (default is true)

#### Output
* output [LuisResult](#luisresult)



## Definitions

### APIError
* APIError `object`: Error information returned by the API
  * message `string`: Cause of the error.
  * statusCode `string`: HTTP Status code

### CompositeChildModel
* CompositeChildModel `object`: Child entity in a LUIS Composite Entity.
  * type **required** `string`: Type of child entity.
  * value **required** `string`: Value extracted by LUIS.

### CompositeEntityModel
* CompositeEntityModel `object`: LUIS Composite Entity.
  * children **required** `array`: Child entities.
    * items [CompositeChildModel](#compositechildmodel)
  * parentType **required** `string`: Type/name of parent entity.
  * value **required** `string`: Value for composite entity extracted by LUIS.

### EntityModel
* EntityModel `object`: An entity extracted from the utterance.
  * endIndex **required** `number`: The position of the last character of the matched entity within the utterance.
  * entity **required** `string`: Name of the entity, as defined in LUIS.
  * startIndex **required** `number`: The position of the first character of the matched entity within the utterance.
  * type **required** `string`: Type of the entity, as defined in LUIS.

### EntityWithResolution
* EntityWithResolution
  * endIndex **required** `number`: The position of the last character of the matched entity within the utterance.
  * entity **required** `string`: Name of the entity, as defined in LUIS.
  * startIndex **required** `number`: The position of the first character of the matched entity within the utterance.
  * type **required** `string`: Type of the entity, as defined in LUIS.
  * resolution **required** `object`: Resolution values for pre-built LUIS entities.

### EntityWithScore
* EntityWithScore
  * endIndex **required** `number`: The position of the last character of the matched entity within the utterance.
  * entity **required** `string`: Name of the entity, as defined in LUIS.
  * startIndex **required** `number`: The position of the first character of the matched entity within the utterance.
  * type **required** `string`: Type of the entity, as defined in LUIS.
  * score **required** `number`: Associated prediction score for the intent (float).

### IntentModel
* IntentModel `object`: An intent detected from the utterance.
  * intent `string`: Name of the intent, as defined in LUIS.
  * score `number`: Associated prediction score for the intent (float).

### LuisResult
* LuisResult `object`: Prediction, based on the input query, containing intent(s) and entities.
  * alteredQuery `string`: The corrected utterance (when spell checking was enabled).
  * compositeEntities `array`: The composite entities extracted from the utterance.
    * items [CompositeEntityModel](#compositeentitymodel)
  * entities `array`: The entities extracted from the utterance.
    * items [EntityModel](#entitymodel)
  * intents `array`: All the intents (and their score) that were detected from utterance.
    * items [IntentModel](#intentmodel)
  * query `string`: The input utterance that was analized.
  * sentimentAnalysis [Sentiment](#sentiment)
  * topScoringIntent [IntentModel](#intentmodel)

### Q
* Q `string`: The utterance to predict.

### Sentiment
* Sentiment `object`: Sentiment of the input utterance.
  * label `string`: The polarity of the sentiment, can be positive, neutral or negative.
  * score `number`: Score of the sentiment, ranges from 0 (most negative) to 1 (most positive).


