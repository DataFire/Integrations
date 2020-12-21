# @datafire/google_commentanalyzer

Client library for Perspective Comment Analyzer API

## Installation and Usage
```bash
npm install --save @datafire/google_commentanalyzer
```
```js
let google_commentanalyzer = require('@datafire/google_commentanalyzer').create({
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

The Perspective Comment Analyzer API provides information about the potential impact of a comment on a conversation (e.g. it can provide a score for the "toxicity" of a comment). Users can leverage the "SuggestCommentScore" method to submit corrections to improve Perspective over time. Users can set the "doNotStore" flag to ensure that all submitted comments are automatically deleted after scores are returned.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_commentanalyzer.oauthCallback({
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
google_commentanalyzer.oauthRefresh(null, context)
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

### commentanalyzer.comments.analyze
Analyzes the provided text and returns scores for requested attributes.


```js
google_commentanalyzer.commentanalyzer.comments.analyze({}, context)
```

#### Input
* input `object`
  * body [AnalyzeCommentRequest](#analyzecommentrequest)
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
* output [AnalyzeCommentResponse](#analyzecommentresponse)

### commentanalyzer.comments.suggestscore
Suggest comment scores as training data.


```js
google_commentanalyzer.commentanalyzer.comments.suggestscore({}, context)
```

#### Input
* input `object`
  * body [SuggestCommentScoreRequest](#suggestcommentscorerequest)
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
* output [SuggestCommentScoreResponse](#suggestcommentscoreresponse)



## Definitions

### AnalyzeCommentRequest
* AnalyzeCommentRequest `object`: The comment analysis request message. LINT.IfChange
  * clientToken `string`: Opaque token that is echoed from the request to the response.
  * comment [TextEntry](#textentry)
  * communityId `string`: Optional identifier associating this AnalyzeCommentRequest with a particular client's community. Different communities may have different norms and rules. Specifying this value enables us to explore building community-specific models for clients.
  * context [Context](#context)
  * doNotStore `boolean`: Do not store the comment or context sent in this request. By default, the service may store comments/context for debugging purposes.
  * languages `array`: The language(s) of the comment and context. If none are specified, we attempt to automatically detect the language. Specifying multiple languages means the text contains multiple lanugages. Both ISO and BCP-47 language codes are accepted. The server returns an error if no language was specified and language detection fails. The server also returns an error if the languages (either specified by the caller, or auto-detected) are not *all* supported by the service.
    * items `string`
  * requestedAttributes `object`: Specification of requested attributes. The AttributeParameters serve as configuration for each associated attribute. The map keys are attribute names. The available attributes may be different on each RFE installation, and can be seen by calling ListAttributes (see above). For the prod installation, known as Perspective API, at blade:commentanalyzer-esf and commentanalyzer.googleapis.com, see go/checker-models (internal) and https://github.com/conversationai/perspectiveapi/blob/master/2-api/models.md#all-attribute-types.
  * sessionId `string`: Session ID. Used to join related RPCs into a single session. For example, an interactive tool that calls both the AnalyzeComment and SuggestCommentScore RPCs should set all invocations of both RPCs to the same Session ID, typically a random 64-bit integer.
  * spanAnnotations `boolean`: An advisory parameter that will return span annotations if the model is capable of providing scores with sub-comment resolution. This will likely increase the size of the returned message.

### AnalyzeCommentResponse
* AnalyzeCommentResponse `object`: The comment analysis response message.
  * attributeScores `object`: Scores for the requested attributes. The map keys are attribute names (same as the requested_attribute field in AnalyzeCommentRequest, for example "ATTACK_ON_AUTHOR", "INFLAMMATORY", etc).
  * clientToken `string`: Same token from the original AnalyzeCommentRequest.
  * detectedLanguages `array`: Contains the languages detected from the text content, sorted in order of likelihood.
    * items `string`
  * languages `array`: The language(s) used by CommentAnalyzer service to choose which Model to use when analyzing the comment. Might better be called "effective_languages". The logic used to make the choice is as follows: if !Request.languages.empty() effective_languages = Request.languages else effective_languages = detected_languages[0]
    * items `string`

### ArticleAndParentComment
* ArticleAndParentComment `object`: A type of context specific to a comment left on a single-threaded comment message board, where comments are either a top level comment or the child of a top level comment.
  * article [TextEntry](#textentry)
  * parentComment [TextEntry](#textentry)

### AttributeParameters
* AttributeParameters `object`: Configurable parameters for attribute scoring.
  * scoreThreshold `number`: Don't return scores for this attribute that are below this threshold. If unset, a default threshold will be applied. A FloatValue wrapper is used to distinguish between 0 vs. default/unset.
  * scoreType `string` (values: SCORE_TYPE_UNSPECIFIED, PROBABILITY, STD_DEV_SCORE, PERCENTILE, RAW): What type of scores to return. If unset, defaults to probability scores.

### AttributeScores
* AttributeScores `object`: This holds score values for a single attribute. It contains both per-span scores as well as an overall summary score..
  * spanScores `array`: Per-span scores.
    * items [SpanScore](#spanscore)
  * summaryScore [Score](#score)

### Context
* Context `object`: Context is typically something that a Comment is referencing or replying to (such as an article, or previous comment). Note: Populate only ONE OF the following fields. The oneof syntax cannot be used because that would require nesting entries inside another message and breaking backwards compatibility. The server will return an error if more than one of the following fields is present.
  * articleAndParentComment [ArticleAndParentComment](#articleandparentcomment)
  * entries `array`: A list of messages. For example, a linear comments section or forum thread.
    * items [TextEntry](#textentry)

### Score
* Score `object`: Analysis scores are described by a value and a ScoreType.
  * type `string` (values: SCORE_TYPE_UNSPECIFIED, PROBABILITY, STD_DEV_SCORE, PERCENTILE, RAW): The type of the above value.
  * value `number`: Score value. Semantics described by type below.

### SpanScore
* SpanScore `object`: This is a single score for a given span of text.
  * begin `integer`: "begin" and "end" describe the span of the original text that the attribute score applies to. The values are the UTF-16 codepoint range. "end" is exclusive. For example, with the text "Hi there", the begin/end pair (0,2) describes the text "Hi". If "begin" and "end" are unset, the score applies to the full text.
  * end `integer`
  * score [Score](#score)

### SuggestCommentScoreRequest
* SuggestCommentScoreRequest `object`: The comment score suggestion request message.
  * attributeScores `object`: Attribute scores for the comment. The map keys are attribute names, same as the requested_attribute field in AnalyzeCommentRequest (for example "ATTACK_ON_AUTHOR", "INFLAMMATORY", etc.). This field has the same type as the `attribute_scores` field in AnalyzeCommentResponse. To specify an overall attribute score for the entire comment as a whole, use the `summary_score` field of the mapped AttributeScores object. To specify scores on specific subparts of the comment, use the `span_scores` field. All SpanScore objects must have begin and end fields set. All Score objects must be explicitly set (for binary classification, use the score values 0 and 1). If Score objects don't include a ScoreType, `PROBABILITY` is assumed. `attribute_scores` must not be empty. The mapped AttributeScores objects also must not be empty. An `INVALID_ARGUMENT` error is returned for all malformed requests.
  * clientToken `string`: Opaque token that is echoed from the request to the response.
  * comment [TextEntry](#textentry)
  * communityId `string`: Optional identifier associating this comment score suggestion with a particular sub-community. Different communities may have different norms and rules. Specifying this value enables training community-specific models.
  * context [Context](#context)
  * languages `array`: The language(s) of the comment and context. If none are specified, we attempt to automatically detect the language. Both ISO and BCP-47 language codes are accepted.
    * items `string`
  * sessionId `string`: Session ID. Used to join related RPCs into a single session. For example, an interactive tool that calls both the AnalyzeComment and SuggestCommentScore RPCs should set all invocations of both RPCs to the same Session ID, typically a random 64-bit integer.

### SuggestCommentScoreResponse
* SuggestCommentScoreResponse `object`: The comment score suggestion response message.
  * clientToken `string`: Same token from the original SuggestCommentScoreRequest.
  * detectedLanguages `array`: The list of languages detected from the comment text.
    * items `string`
  * requestedLanguages `array`: The list of languages provided in the request.
    * items `string`

### TextEntry
* TextEntry `object`: Represents a body of text.
  * text `string`: UTF-8 encoded text.
  * type `string` (values: TEXT_TYPE_UNSPECIFIED, PLAIN_TEXT, HTML): Type of the text field.


