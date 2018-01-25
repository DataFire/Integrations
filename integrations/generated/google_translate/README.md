# @datafire/google_translate

Client library for Google Cloud Translation

## Installation and Usage
```bash
npm install --save @datafire/google_translate
```
```js
let google_translate = require('@datafire/google_translate').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_translate.languages.list({}).then(data => {
  console.log(data);
});
```

## Description

The Google Cloud Translation API lets websites and programs integrate with
    Google Translate programmatically.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_translate.oauthCallback({
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
google_translate.oauthRefresh(null, context)
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

### translations.list
Translates input text, returning translated text.


```js
google_translate.translations.list({
  "q": [],
  "target": ""
}, context)
```

#### Input
* input `object`
  * cid `array`: The customization id for translate
  * format `string` (values: html, text): The format of the source text, in either HTML (default) or plain-text. A
  * model `string`: The `model` type requested for this translation. Valid values are
  * q **required** `array`: The input text to translate. Repeat this parameter to perform translation
  * source `string`: The language of the source text, set to one of the language codes listed in
  * target **required** `string`: The language to use for translation of the input text, set to one of the
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [TranslationsListResponse](#translationslistresponse)

### translations.translate
Translates input text, returning translated text.


```js
google_translate.translations.translate({}, context)
```

#### Input
* input `object`
  * body [TranslateTextRequest](#translatetextrequest)
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [TranslationsListResponse](#translationslistresponse)

### detections.list
Detects the language of text within a request.


```js
google_translate.detections.list({
  "q": []
}, context)
```

#### Input
* input `object`
  * q **required** `array`: The input text upon which to perform language detection. Repeat this
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [DetectionsListResponse](#detectionslistresponse)

### detections.detect
Detects the language of text within a request.


```js
google_translate.detections.detect({}, context)
```

#### Input
* input `object`
  * body [DetectLanguageRequest](#detectlanguagerequest)
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [DetectionsListResponse](#detectionslistresponse)

### languages.list
Returns a list of supported languages for translation.


```js
google_translate.languages.list({}, context)
```

#### Input
* input `object`
  * model `string`: The model type for which supported languages should be returned.
  * target `string`: The language to use to return localized, human readable names of supported
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [LanguagesListResponse](#languageslistresponse)



## Definitions

### DetectLanguageRequest
* DetectLanguageRequest `object`: The request message for language detection.
  * q `array`: The input text upon which to perform language detection. Repeat this
    * items `string`

### DetectionsListResponse
* DetectionsListResponse `object`
  * detections `array`: A detections contains detection results of several text
    * items [DetectionsResource](#detectionsresource)

### DetectionsResource
* DetectionsResource `array`: An array of languages which we detect for the given text The most likely language list first.
  * items `object`
    * confidence `number`: The confidence of the detection result of this language.
    * isReliable `boolean`: A boolean to indicate is the language detection result reliable.
    * language `string`: The language we detected.

### GetSupportedLanguagesRequest
* GetSupportedLanguagesRequest `object`: The request message for discovering supported languages.
  * target `string`: The language to use to return localized, human readable names of supported

### LanguagesListResponse
* LanguagesListResponse `object`
  * languages `array`: List of source/target languages supported by the translation API. If target parameter is unspecified, the list is sorted by the ASCII code point order of the language code. If target parameter is specified, the list is sorted by the collation order of the language name in the target language.
    * items [LanguagesResource](#languagesresource)

### LanguagesResource
* LanguagesResource `object`
  * language `string`: Supported language code, generally consisting of its ISO 639-1
  * name `string`: Human readable name of the language localized to the target language.

### TranslateTextRequest
* TranslateTextRequest `object`: The main translation request message for the Cloud Translation API.
  * format `string`: The format of the source text, in either HTML (default) or plain-text. A
  * model `string`: The `model` type requested for this translation. Valid values are
  * q `array`: The input text to translate. Repeat this parameter to perform translation
    * items `string`
  * source `string`: The language of the source text, set to one of the language codes listed in
  * target `string`: The language to use for translation of the input text, set to one of the

### TranslationsListResponse
* TranslationsListResponse `object`: The main language translation response message.
  * translations `array`: Translations contains list of translation results of given text
    * items [TranslationsResource](#translationsresource)

### TranslationsResource
* TranslationsResource `object`
  * detectedSourceLanguage `string`: The source language of the initial request, detected automatically, if
  * model `string`: The `model` type used for this translation. Valid values are
  * translatedText `string`: Text translated into the target language.


