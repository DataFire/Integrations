# @datafire/google_language

Client library for Google Cloud Natural Language

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

google_language.documents.classifyText({}).then(data => {
  console.log(data);
})
```

## Description

Provides natural language understanding technologies to developers. Examples include sentiment analysis, entity recognition, entity sentiment analysis, and text annotations.

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

### documents.analyzeEntities
Finds named entities (currently proper names and common nouns) in the text
along with entity types, salience, mentions for each entity, and
other properties.


```js
google_language.documents.analyzeEntities({}, context)
```

#### Input
* input `object`
  * body [AnalyzeEntitiesRequest](#analyzeentitiesrequest)
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

#### Output
* output [AnalyzeEntitiesResponse](#analyzeentitiesresponse)

### documents.analyzeEntitySentiment
Finds entities, similar to AnalyzeEntities in the text and analyzes
sentiment associated with each entity and its mentions.


```js
google_language.documents.analyzeEntitySentiment({}, context)
```

#### Input
* input `object`
  * body [AnalyzeEntitySentimentRequest](#analyzeentitysentimentrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [AnalyzeEntitySentimentResponse](#analyzeentitysentimentresponse)

### documents.analyzeSentiment
Analyzes the sentiment of the provided text.


```js
google_language.documents.analyzeSentiment({}, context)
```

#### Input
* input `object`
  * body [AnalyzeSentimentRequest](#analyzesentimentrequest)
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

#### Output
* output [AnalyzeSentimentResponse](#analyzesentimentresponse)

### documents.analyzeSyntax
Analyzes the syntax of the text and provides sentence boundaries and
tokenization along with part of speech tags, dependency trees, and other
properties.


```js
google_language.documents.analyzeSyntax({}, context)
```

#### Input
* input `object`
  * body [AnalyzeSyntaxRequest](#analyzesyntaxrequest)
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

#### Output
* output [AnalyzeSyntaxResponse](#analyzesyntaxresponse)

### documents.annotateText
A convenience method that provides all the features that analyzeSentiment,
analyzeEntities, and analyzeSyntax provide in one call.


```js
google_language.documents.annotateText({}, context)
```

#### Input
* input `object`
  * body [AnnotateTextRequest](#annotatetextrequest)
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

#### Output
* output [AnnotateTextResponse](#annotatetextresponse)

### documents.classifyText
Classifies a document into categories.


```js
google_language.documents.classifyText({}, context)
```

#### Input
* input `object`
  * body [ClassifyTextRequest](#classifytextrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

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
  * language `string`: The language of the text, which will be the same as the language specified

### AnalyzeEntitySentimentRequest
* AnalyzeEntitySentimentRequest `object`: The entity-level sentiment analysis request message.
  * document [Document](#document)
  * encodingType `string` (values: NONE, UTF8, UTF16, UTF32): The encoding type used by the API to calculate offsets.

### AnalyzeEntitySentimentResponse
* AnalyzeEntitySentimentResponse `object`: The entity-level sentiment analysis response message.
  * entities `array`: The recognized entities in the input document with associated sentiments.
    * items [Entity](#entity)
  * language `string`: The language of the text, which will be the same as the language specified

### AnalyzeSentimentRequest
* AnalyzeSentimentRequest `object`: The sentiment analysis request message.
  * document [Document](#document)
  * encodingType `string` (values: NONE, UTF8, UTF16, UTF32): The encoding type used by the API to calculate sentence offsets.

### AnalyzeSentimentResponse
* AnalyzeSentimentResponse `object`: The sentiment analysis response message.
  * documentSentiment [Sentiment](#sentiment)
  * language `string`: The language of the text, which will be the same as the language specified
  * sentences `array`: The sentiment for all the sentences in the document.
    * items [Sentence](#sentence)

### AnalyzeSyntaxRequest
* AnalyzeSyntaxRequest `object`: The syntax analysis request message.
  * document [Document](#document)
  * encodingType `string` (values: NONE, UTF8, UTF16, UTF32): The encoding type used by the API to calculate offsets.

### AnalyzeSyntaxResponse
* AnalyzeSyntaxResponse `object`: The syntax analysis response message.
  * language `string`: The language of the text, which will be the same as the language specified
  * sentences `array`: Sentences in the input document.
    * items [Sentence](#sentence)
  * tokens `array`: Tokens, along with their syntactic information, in the input document.
    * items [Token](#token)

### AnnotateTextRequest
* AnnotateTextRequest `object`: The request message for the text annotation API, which can perform multiple
  * document [Document](#document)
  * encodingType `string` (values: NONE, UTF8, UTF16, UTF32): The encoding type used by the API to calculate offsets.
  * features [Features](#features)

### AnnotateTextResponse
* AnnotateTextResponse `object`: The text annotations response message.
  * categories `array`: Categories identified in the input document.
    * items [ClassificationCategory](#classificationcategory)
  * documentSentiment [Sentiment](#sentiment)
  * entities `array`: Entities, along with their semantic information, in the input document.
    * items [Entity](#entity)
  * language `string`: The language of the text, which will be the same as the language specified
  * sentences `array`: Sentences in the input document. Populated if the user enables
    * items [Sentence](#sentence)
  * tokens `array`: Tokens, along with their syntactic information, in the input document.
    * items [Token](#token)

### ClassificationCategory
* ClassificationCategory `object`: Represents a category returned from the text classifier.
  * confidence `number`: The classifier's confidence of the category. Number represents how certain
  * name `string`: The name of the category representing the document.

### ClassifyTextRequest
* ClassifyTextRequest `object`: The document classification request message.
  * document [Document](#document)

### ClassifyTextResponse
* ClassifyTextResponse `object`: The document classification response message.
  * categories `array`: Categories representing the input document.
    * items [ClassificationCategory](#classificationcategory)

### DependencyEdge
* DependencyEdge `object`: Represents dependency parse tree information for a token. (For more
  * headTokenIndex `integer`: Represents the head of this token in the dependency tree.
  * label `string` (values: UNKNOWN, ABBREV, ACOMP, ADVCL, ADVMOD, AMOD, APPOS, ATTR, AUX, AUXPASS, CC, CCOMP, CONJ, CSUBJ, CSUBJPASS, DEP, DET, DISCOURSE, DOBJ, EXPL, GOESWITH, IOBJ, MARK, MWE, MWV, NEG, NN, NPADVMOD, NSUBJ, NSUBJPASS, NUM, NUMBER, P, PARATAXIS, PARTMOD, PCOMP, POBJ, POSS, POSTNEG, PRECOMP, PRECONJ, PREDET, PREF, PREP, PRONL, PRT, PS, QUANTMOD, RCMOD, RCMODREL, RDROP, REF, REMNANT, REPARANDUM, ROOT, SNUM, SUFF, TMOD, TOPIC, VMOD, VOCATIVE, XCOMP, SUFFIX, TITLE, ADVPHMOD, AUXCAUS, AUXVV, DTMOD, FOREIGN, KW, LIST, NOMC, NOMCSUBJ, NOMCSUBJPASS, NUMC, COP, DISLOCATED, ASP, GMOD, GOBJ, INFMOD, MES, NCOMP): The parse label for the token.

### Document
* Document `object`: ################################################################ #
  * content `string`: The content of the input in string format.
  * gcsContentUri `string`: The Google Cloud Storage URI where the file content is located.
  * language `string`: The language of the document (if not specified, the language is
  * type `string` (values: TYPE_UNSPECIFIED, PLAIN_TEXT, HTML): Required. If the type is not set or is `TYPE_UNSPECIFIED`,

### Entity
* Entity `object`: Represents a phrase in the text that is a known entity, such as
  * mentions `array`: The mentions of this entity in the input document. The API currently
    * items [EntityMention](#entitymention)
  * metadata `object`: Metadata associated with the entity.
  * name `string`: The representative name for the entity.
  * salience `number`: The salience score associated with the entity in the [0, 1.0] range.
  * sentiment [Sentiment](#sentiment)
  * type `string` (values: UNKNOWN, PERSON, LOCATION, ORGANIZATION, EVENT, WORK_OF_ART, CONSUMER_GOOD, OTHER): The entity type.

### EntityMention
* EntityMention `object`: Represents a mention for an entity in the text. Currently, proper noun
  * sentiment [Sentiment](#sentiment)
  * text [TextSpan](#textspan)
  * type `string` (values: TYPE_UNKNOWN, PROPER, COMMON): The type of the entity mention.

### Features
* Features `object`: All available features for sentiment, syntax, and semantic analysis.
  * classifyText `boolean`: Classify the full document into categories.
  * extractDocumentSentiment `boolean`: Extract document-level sentiment.
  * extractEntities `boolean`: Extract entities.
  * extractEntitySentiment `boolean`: Extract entities and their associated sentiment.
  * extractSyntax `boolean`: Extract syntax information.

### PartOfSpeech
* PartOfSpeech `object`: Represents part of speech information for a token. Parts of speech
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
* Sentiment `object`: Represents the feeling associated with the entire text or entities in
  * magnitude `number`: A non-negative number in the [0, +inf) range, which represents
  * score `number`: Sentiment score between -1.0 (negative sentiment) and 1.0

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### TextSpan
* TextSpan `object`: Represents an output piece of text.
  * beginOffset `integer`: The API calculates the beginning offset of the content in the original
  * content `string`: The content of the output text.

### Token
* Token `object`: Represents the smallest syntactic building block of the text.
  * dependencyEdge [DependencyEdge](#dependencyedge)
  * lemma `string`: [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token.
  * partOfSpeech [PartOfSpeech](#partofspeech)
  * text [TextSpan](#textspan)


