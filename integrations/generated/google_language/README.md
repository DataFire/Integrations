# @datafire/google_language

Client library for Cloud Natural Language API

## Installation and Usage
```bash
npm install --save @datafire/google_language
```
```js
let google_language = require('@datafire/google_language').create({
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

Provides natural language understanding technologies, such as sentiment analysis, entity recognition, entity sentiment analysis, and other text annotations, to developers.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_language.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_language.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### language.documents.analyzeEntities
Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.


```js
google_language.language.documents.analyzeEntities({}, context)
```

#### Input
* input `object`
  * body [AnalyzeEntitiesRequest](#analyzeentitiesrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AnalyzeEntitiesResponse](#analyzeentitiesresponse)

### language.documents.analyzeEntitySentiment
Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.


```js
google_language.language.documents.analyzeEntitySentiment({}, context)
```

#### Input
* input `object`
  * body [AnalyzeEntitySentimentRequest](#analyzeentitysentimentrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AnalyzeEntitySentimentResponse](#analyzeentitysentimentresponse)

### language.documents.analyzeSentiment
Analyzes the sentiment of the provided text.


```js
google_language.language.documents.analyzeSentiment({}, context)
```

#### Input
* input `object`
  * body [AnalyzeSentimentRequest](#analyzesentimentrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AnalyzeSentimentResponse](#analyzesentimentresponse)

### language.documents.analyzeSyntax
Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.


```js
google_language.language.documents.analyzeSyntax({}, context)
```

#### Input
* input `object`
  * body [AnalyzeSyntaxRequest](#analyzesyntaxrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AnalyzeSyntaxResponse](#analyzesyntaxresponse)

### language.documents.annotateText
A convenience method that provides all syntax, sentiment, entity, and classification features in one call.


```js
google_language.language.documents.annotateText({}, context)
```

#### Input
* input `object`
  * body [AnnotateTextRequest](#annotatetextrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AnnotateTextResponse](#annotatetextresponse)

### language.documents.classifyText
Classifies a document into categories.


```js
google_language.language.documents.classifyText({}, context)
```

#### Input
* input `object`
  * body [ClassifyTextRequest](#classifytextrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ClassifyTextResponse](#classifytextresponse)



## Definitions

### AnalyzeEntitiesRequest
* AnalyzeEntitiesRequest `object`: The entity analysis request message.
  * document [Document](#document)
  * encodingType `string` (values: NONE, UTF8, UTF16, UTF32): The encoding type used by the API to calculate offsets.

### AnalyzeEntitiesResponse
* AnalyzeEntitiesResponse `object`: The entity analysis response message.
  * entities `array`: The recognized entities in the input document.
    * items [Entity](#entity)
  * language `string`: The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.

### AnalyzeEntitySentimentRequest
* AnalyzeEntitySentimentRequest `object`: The entity-level sentiment analysis request message.
  * document [Document](#document)
  * encodingType `string` (values: NONE, UTF8, UTF16, UTF32): The encoding type used by the API to calculate offsets.

### AnalyzeEntitySentimentResponse
* AnalyzeEntitySentimentResponse `object`: The entity-level sentiment analysis response message.
  * entities `array`: The recognized entities in the input document with associated sentiments.
    * items [Entity](#entity)
  * language `string`: The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.

### AnalyzeSentimentRequest
* AnalyzeSentimentRequest `object`: The sentiment analysis request message.
  * document [Document](#document)
  * encodingType `string` (values: NONE, UTF8, UTF16, UTF32): The encoding type used by the API to calculate sentence offsets for the sentence sentiment.

### AnalyzeSentimentResponse
* AnalyzeSentimentResponse `object`: The sentiment analysis response message.
  * documentSentiment [Sentiment](#sentiment)
  * language `string`: The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
  * sentences `array`: The sentiment for all the sentences in the document.
    * items [Sentence](#sentence)

### AnalyzeSyntaxRequest
* AnalyzeSyntaxRequest `object`: The syntax analysis request message.
  * document [Document](#document)
  * encodingType `string` (values: NONE, UTF8, UTF16, UTF32): The encoding type used by the API to calculate offsets.

### AnalyzeSyntaxResponse
* AnalyzeSyntaxResponse `object`: The syntax analysis response message.
  * language `string`: The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
  * sentences `array`: Sentences in the input document.
    * items [Sentence](#sentence)
  * tokens `array`: Tokens, along with their syntactic information, in the input document.
    * items [Token](#token)

### AnnotateTextRequest
* AnnotateTextRequest `object`: The request message for the text annotation API, which can perform multiple analysis types (sentiment, entities, and syntax) in one call.
  * document [Document](#document)
  * encodingType `string` (values: NONE, UTF8, UTF16, UTF32): The encoding type used by the API to calculate offsets.
  * features [Features](#features)

### AnnotateTextResponse
* AnnotateTextResponse `object`: The text annotations response message.
  * categories `array`: Categories identified in the input document.
    * items [ClassificationCategory](#classificationcategory)
  * documentSentiment [Sentiment](#sentiment)
  * entities `array`: Entities, along with their semantic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_entities.
    * items [Entity](#entity)
  * language `string`: The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
  * sentences `array`: Sentences in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax.
    * items [Sentence](#sentence)
  * tokens `array`: Tokens, along with their syntactic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax.
    * items [Token](#token)

### ClassificationCategory
* ClassificationCategory `object`: Represents a category returned from the text classifier.
  * confidence `number`: The classifier's confidence of the category. Number represents how certain the classifier is that this category represents the given text.
  * name `string`: The name of the category representing the document, from the [predefined taxonomy](https://cloud.google.com/natural-language/docs/categories).

### ClassifyTextRequest
* ClassifyTextRequest `object`: The document classification request message.
  * document [Document](#document)

### ClassifyTextResponse
* ClassifyTextResponse `object`: The document classification response message.
  * categories `array`: Categories representing the input document.
    * items [ClassificationCategory](#classificationcategory)

### DependencyEdge
* DependencyEdge `object`: Represents dependency parse tree information for a token.
  * headTokenIndex `integer`: Represents the head of this token in the dependency tree. This is the index of the token which has an arc going to this token. The index is the position of the token in the array of tokens returned by the API method. If this token is a root token, then the `head_token_index` is its own index.
  * label `string` (values: UNKNOWN, ABBREV, ACOMP, ADVCL, ADVMOD, AMOD, APPOS, ATTR, AUX, AUXPASS, CC, CCOMP, CONJ, CSUBJ, CSUBJPASS, DEP, DET, DISCOURSE, DOBJ, EXPL, GOESWITH, IOBJ, MARK, MWE, MWV, NEG, NN, NPADVMOD, NSUBJ, NSUBJPASS, NUM, NUMBER, P, PARATAXIS, PARTMOD, PCOMP, POBJ, POSS, POSTNEG, PRECOMP, PRECONJ, PREDET, PREF, PREP, PRONL, PRT, PS, QUANTMOD, RCMOD, RCMODREL, RDROP, REF, REMNANT, REPARANDUM, ROOT, SNUM, SUFF, TMOD, TOPIC, VMOD, VOCATIVE, XCOMP, SUFFIX, TITLE, ADVPHMOD, AUXCAUS, AUXVV, DTMOD, FOREIGN, KW, LIST, NOMC, NOMCSUBJ, NOMCSUBJPASS, NUMC, COP, DISLOCATED, ASP, GMOD, GOBJ, INFMOD, MES, NCOMP): The parse label for the token.

### Document
* Document `object`: ################################################################ # Represents the input to API methods.
  * boilerplateHandling `string` (values: BOILERPLATE_HANDLING_UNSPECIFIED, SKIP_BOILERPLATE, KEEP_BOILERPLATE): Indicates how detected boilerplate(e.g. advertisements, copyright declarations, banners) should be handled for this document. If not specified, boilerplate will be treated the same as content.
  * content `string`: The content of the input in string format. Cloud audit logging exempt since it is based on user data.
  * gcsContentUri `string`: The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.
  * language `string`: The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. [Language Support](https://cloud.google.com/natural-language/docs/languages) lists currently supported languages for each API method. If the language (either specified by the caller or automatically detected) is not supported by the called API method, an `INVALID_ARGUMENT` error is returned.
  * referenceWebUri `string`: The web URI where the document comes from. This URI is not used for fetching the content, but as a hint for analyzing the document.
  * type `string` (values: TYPE_UNSPECIFIED, PLAIN_TEXT, HTML): Required. If the type is not set or is `TYPE_UNSPECIFIED`, returns an `INVALID_ARGUMENT` error.

### Entity
* Entity `object`: Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as salience and mentions, with entities.
  * mentions `array`: The mentions of this entity in the input document. The API currently supports proper noun mentions.
    * items [EntityMention](#entitymention)
  * metadata `object`: Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below.
  * name `string`: The representative name for the entity.
  * salience `number`: The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient.
  * sentiment [Sentiment](#sentiment)
  * type `string` (values: UNKNOWN, PERSON, LOCATION, ORGANIZATION, EVENT, WORK_OF_ART, CONSUMER_GOOD, OTHER, PHONE_NUMBER, ADDRESS, DATE, NUMBER, PRICE): The entity type.

### EntityMention
* EntityMention `object`: Represents a mention for an entity in the text. Currently, proper noun mentions are supported.
  * sentiment [Sentiment](#sentiment)
  * text [TextSpan](#textspan)
  * type `string` (values: TYPE_UNKNOWN, PROPER, COMMON): The type of the entity mention.

### Features
* Features `object`: All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input. Next ID: 10
  * classifyText `boolean`: Classify the full document into categories. If this is true, the API will use the default model which classifies into a [predefined taxonomy](https://cloud.google.com/natural-language/docs/categories).
  * extractDocumentSentiment `boolean`: Extract document-level sentiment.
  * extractEntities `boolean`: Extract entities.
  * extractEntitySentiment `boolean`: Extract entities and their associated sentiment.
  * extractSyntax `boolean`: Extract syntax information.

### PartOfSpeech
* PartOfSpeech `object`: Represents part of speech information for a token.
  * aspect `string` (values: ASPECT_UNKNOWN, PERFECTIVE, IMPERFECTIVE, PROGRESSIVE): The grammatical aspect.
  * case `string` (values: CASE_UNKNOWN, ACCUSATIVE, ADVERBIAL, COMPLEMENTIVE, DATIVE, GENITIVE, INSTRUMENTAL, LOCATIVE, NOMINATIVE, OBLIQUE, PARTITIVE, PREPOSITIONAL, REFLEXIVE_CASE, RELATIVE_CASE, VOCATIVE): The grammatical case.
  * form `string` (values: FORM_UNKNOWN, ADNOMIAL, AUXILIARY, COMPLEMENTIZER, FINAL_ENDING, GERUND, REALIS, IRREALIS, SHORT, LONG, ORDER, SPECIFIC): The grammatical form.
  * gender `string` (values: GENDER_UNKNOWN, FEMININE, MASCULINE, NEUTER): The grammatical gender.
  * mood `string` (values: MOOD_UNKNOWN, CONDITIONAL_MOOD, IMPERATIVE, INDICATIVE, INTERROGATIVE, JUSSIVE, SUBJUNCTIVE): The grammatical mood.
  * number `string` (values: NUMBER_UNKNOWN, SINGULAR, PLURAL, DUAL): The grammatical number.
  * person `string` (values: PERSON_UNKNOWN, FIRST, SECOND, THIRD, REFLEXIVE_PERSON): The grammatical person.
  * proper `string` (values: PROPER_UNKNOWN, PROPER, NOT_PROPER): The grammatical properness.
  * reciprocity `string` (values: RECIPROCITY_UNKNOWN, RECIPROCAL, NON_RECIPROCAL): The grammatical reciprocity.
  * tag `string` (values: UNKNOWN, ADJ, ADP, ADV, CONJ, DET, NOUN, NUM, PRON, PRT, PUNCT, VERB, X, AFFIX): The part of speech tag.
  * tense `string` (values: TENSE_UNKNOWN, CONDITIONAL_TENSE, FUTURE, PAST, PRESENT, IMPERFECT, PLUPERFECT): The grammatical tense.
  * voice `string` (values: VOICE_UNKNOWN, ACTIVE, CAUSATIVE, PASSIVE): The grammatical voice.

### Sentence
* Sentence `object`: Represents a sentence in the input document.
  * sentiment [Sentiment](#sentiment)
  * text [TextSpan](#textspan)

### Sentiment
* Sentiment `object`: Represents the feeling associated with the entire text or entities in the text. Next ID: 6
  * magnitude `number`: A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment regardless of score (positive or negative).
  * score `number`: Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### TextSpan
* TextSpan `object`: Represents an output piece of text.
  * beginOffset `integer`: The API calculates the beginning offset of the content in the original document according to the EncodingType specified in the API request.
  * content `string`: The content of the output text.

### Token
* Token `object`: Represents the smallest syntactic building block of the text.
  * dependencyEdge [DependencyEdge](#dependencyedge)
  * lemma `string`: [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token.
  * partOfSpeech [PartOfSpeech](#partofspeech)
  * text [TextSpan](#textspan)


