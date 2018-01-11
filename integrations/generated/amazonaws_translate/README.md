# @datafire/amazonaws_translate

Client library for Amazon Translate

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_translate
```
```js
let amazonaws_translate = require('@datafire/amazonaws_translate').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_translate.TranslateText({}).then(data => {
  console.log(data);
})
```

## Description

Provides translation between English and one of six languages, or between one of the six languages and English.

## Actions

### TranslateText



```js
amazonaws_translate.TranslateText({
  "Text": "",
  "SourceLanguageCode": "",
  "TargetLanguageCode": ""
}, context)
```

#### Input
* input `object`
  * SourceLanguageCode **required** [LanguageCodeString](#languagecodestring)
  * TargetLanguageCode **required** [LanguageCodeString](#languagecodestring)
  * Text **required** [BoundedLengthString](#boundedlengthstring)

#### Output
* output [TranslateTextResponse](#translatetextresponse)



## Definitions

### BoundedLengthString
* BoundedLengthString `string`

### InternalServerException
* InternalServerException `object`: An internal server error occurred. Retry your request.
  * Message [String](#string)

### InvalidRequestException
* InvalidRequestException `object`: The request is invalid.
  * Message [String](#string)

### LanguageCodeString
* LanguageCodeString `string`

### ServiceUnavailableException
* ServiceUnavailableException `object`: Amazon Translate is unavailable. Retry your request later.
  * Message [String](#string)

### String
* String `string`

### TextSizeLimitExceededException
* TextSizeLimitExceededException `object`: The size of the input text exceeds the length constraint for the <code>Text</code> field. Try again with a shorter text. 
  * Message [String](#string)

### TooManyRequestsException
* TooManyRequestsException `object`: The number of requests exceeds the limit. Resubmit your request later.
  * Message [String](#string)

### TranslateTextRequest
* TranslateTextRequest `object`
  * SourceLanguageCode **required** [LanguageCodeString](#languagecodestring)
  * TargetLanguageCode **required** [LanguageCodeString](#languagecodestring)
  * Text **required** [BoundedLengthString](#boundedlengthstring)

### TranslateTextResponse
* TranslateTextResponse `object`
  * SourceLanguageCode **required** [LanguageCodeString](#languagecodestring)
  * TargetLanguageCode **required** [LanguageCodeString](#languagecodestring)
  * TranslatedText **required** [String](#string)

### UnsupportedLanguagePairException
* UnsupportedLanguagePairException `object`: Amazon Translate cannot translate input text in the source language into this target language. For more information, see <a>how-to-error-msg</a>. 
  * Message [String](#string)


