# @datafire/azure_cognitiveservices_textanalytics

Client library for Text Analytics Client

## Installation and Usage
```bash
npm install --save @datafire/azure_cognitiveservices_textanalytics
```
```js
let azure_cognitiveservices_textanalytics = require('@datafire/azure_cognitiveservices_textanalytics').create({
  apim_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Text Analytics API is a suite of text analytics web services built with best-in-class Microsoft machine learning algorithms. The API can be used to analyze unstructured text for tasks such as sentiment analysis, key phrase extraction and language detection. No training data is needed to use this API; just bring your text data. This API uses advanced natural language processing techniques to deliver best in class predictions. Further documentation can be found in https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/overview

## Actions

### Entities
The API returns a list of recognized entities in a given document. To get even more information on each recognized entity we recommend using the Bing Entity Search API by querying for the recognized entities names. See the <a href="https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/text-analytics-supported-languages">Supported languages in Text Analytics API</a> for the list of enabled languages.The API returns a list of known entities and general named entities ("Person", "Location", "Organization" etc) in a given document. Known entities are returned with Wikipedia Id and Wikipedia link, and also Bing Id which can be used in Bing Entity Search API. General named entities are returned with entity types. If a general named entity is also a known entity, then all information regarding it (Wikipedia Id, Bing Id, entity type etc) will be returned. See the <a href="https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/how-tos/text-analytics-how-to-entity-linking#supported-types-for-named-entity-recognition">Supported Entity Types in Text Analytics API</a> for the list of supported Entity Types. See the <a href="https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/text-analytics-supported-languages">Supported languages in Text Analytics API</a> for the list of enabled languages.


```js
azure_cognitiveservices_textanalytics.Entities({
  "input": {}
}, context)
```

#### Input
* input `object`
  * input **required** [MultiLanguageBatchInput](#multilanguagebatchinput)

#### Output
* output [EntitiesBatchResultV2dot1](#entitiesbatchresultv2dot1)

### keyPhrases.post
See the <a href="https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/overview#supported-languages">Text Analytics Documentation</a> for details about the languages that are supported by key phrase extraction.


```js
azure_cognitiveservices_textanalytics.keyPhrases.post({
  "input": {}
}, context)
```

#### Input
* input `object`
  * input **required** [MultiLanguageBatchInput](#multilanguagebatchinput)

#### Output
* output [KeyPhraseBatchResult](#keyphrasebatchresult)

### languages.post
Scores close to 1 indicate 100% certainty that the identified language is true. A total of 120 languages are supported.


```js
azure_cognitiveservices_textanalytics.languages.post({
  "input": {}
}, context)
```

#### Input
* input `object`
  * input **required** [BatchInput](#batchinput)

#### Output
* output [LanguageBatchResult](#languagebatchresult)

### Sentiment
Scores close to 1 indicate positive sentiment, while scores close to 0 indicate negative sentiment. A score of 0.5 indicates the lack of sentiment (e.g. a factoid statement). See the <a href="https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/overview#supported-languages">Text Analytics Documentation</a> for details about the languages that are supported by sentiment analysis.


```js
azure_cognitiveservices_textanalytics.Sentiment({
  "input": {}
}, context)
```

#### Input
* input `object`
  * input **required** [MultiLanguageBatchInput](#multilanguagebatchinput)

#### Output
* output [SentimentBatchResult](#sentimentbatchresult)



## Definitions

### BatchInput
* BatchInput `object`
  * documents `array`
    * items [Input](#input)

### DetectedLanguage
* DetectedLanguage `object`
  * iso6391Name `string`: A two letter representation of the detected language according to the ISO 639-1 standard (e.g. en, fr).
  * name `string`: Long name of a detected language (e.g. English, French).
  * score `number`: A confidence score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true.

### EntitiesBatchResultItemV2dot1
* EntitiesBatchResultItemV2dot1 `object`
  * entities `array`: Recognized entities in the document.
    * items [EntityRecordV2dot1](#entityrecordv2dot1)
  * id `string`: Unique document identifier.

### EntitiesBatchResultV2dot1
* EntitiesBatchResultV2dot1 `object`
  * documents `array`
    * items [EntitiesBatchResultItemV2dot1](#entitiesbatchresultitemv2dot1)
  * errors `array`
    * items [ErrorRecord](#errorrecord)

### EntityRecordV2dot1
* EntityRecordV2dot1 `object`
  * bingId `string`: Bing unique identifier of the recognized entity. Use in conjunction with the Bing Entity Search API to fetch additional relevant information.
  * matches `array`: List of instances this entity appears in the text.
    * items [MatchRecordV2dot1](#matchrecordv2dot1)
  * name `string`: Entity formal name.
  * subType `string`: Entity sub type from Named Entity Recognition model
  * type `string`: Entity type from Named Entity Recognition model
  * wikipediaId `string`: Wikipedia unique identifier of the recognized entity.
  * wikipediaLanguage `string`: Wikipedia language for which the WikipediaId and WikipediaUrl refers to.
  * wikipediaUrl `string`: URL for the entity's English Wikipedia page.

### ErrorRecord
* ErrorRecord `object`
  * id `string`: Input document unique identifier the error refers to.
  * message `string`: Error message.

### ErrorResponse
* ErrorResponse `object`
  * code `string`
  * innerError [InternalError](#internalerror)
  * message `string`
  * target `string`

### Input
* Input `object`
  * id `string`: Unique, non-empty document identifier.
  * text `string`

### InternalError
* InternalError `object`
  * code `string`
  * innerError [InternalError](#internalerror)
  * message `string`

### KeyPhraseBatchResult
* KeyPhraseBatchResult `object`
  * documents `array`
    * items [KeyPhraseBatchResultItem](#keyphrasebatchresultitem)
  * errors `array`
    * items [ErrorRecord](#errorrecord)

### KeyPhraseBatchResultItem
* KeyPhraseBatchResultItem `object`
  * id `string`: Unique document identifier.
  * keyPhrases `array`: A list of representative words or phrases. The number of key phrases returned is proportional to the number of words in the input document.
    * items `string`

### LanguageBatchResult
* LanguageBatchResult `object`
  * documents `array`
    * items [LanguageBatchResultItem](#languagebatchresultitem)
  * errors `array`
    * items [ErrorRecord](#errorrecord)

### LanguageBatchResultItem
* LanguageBatchResultItem `object`
  * detectedLanguages `array`: A list of extracted languages.
    * items [DetectedLanguage](#detectedlanguage)
  * id `string`: Unique document identifier.

### MatchRecordV2dot1
* MatchRecordV2dot1 `object`
  * length `integer`: Length (in Unicode characters) for the entity match text.
  * offset `integer`: Start position (in Unicode characters) for the entity match text.
  * text `string`: Entity text as appears in the request.

### MultiLanguageBatchInput
* MultiLanguageBatchInput `object`
  * documents `array`
    * items [MultiLanguageInput](#multilanguageinput)

### MultiLanguageInput
* MultiLanguageInput `object`
  * id `string`: Unique, non-empty document identifier.
  * language `string`: This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc.,
  * text `string`

### Object
* Object `object`

### SentimentBatchResult
* SentimentBatchResult `object`
  * documents `array`
    * items [SentimentBatchResultItem](#sentimentbatchresultitem)
  * errors `array`
    * items [ErrorRecord](#errorrecord)

### SentimentBatchResultItem
* SentimentBatchResultItem `object`
  * id `string`: Unique document identifier.
  * score `number`: A decimal number between 0 and 1 denoting the sentiment of the document. A score above 0.7 usually refers to a positive document while a score below 0.3 normally has a negative connotation. Mid values refer to neutral text.


