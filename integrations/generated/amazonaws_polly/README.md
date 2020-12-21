# @datafire/amazonaws_polly

Client library for Amazon Polly

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_polly
```
```js
let amazonaws_polly = require('@datafire/amazonaws_polly').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Amazon Polly is a web service that makes it easy to synthesize speech from text.</p> <p>The Amazon Polly service provides API operations for synthesizing high-quality speech from plain text and Speech Synthesis Markup Language (SSML), along with managing pronunciations lexicons that enable you to get the best results for your application domain.</p>

## Actions

### ListLexicons



```js
amazonaws_polly.ListLexicons({}, context)
```

#### Input
* input `object`
  * NextToken `string`

#### Output
* output [ListLexiconsOutput](#listlexiconsoutput)

### DeleteLexicon



```js
amazonaws_polly.DeleteLexicon({
  "LexiconName": ""
}, context)
```

#### Input
* input `object`
  * LexiconName **required** `string`

#### Output
* output [DeleteLexiconOutput](#deletelexiconoutput)

### GetLexicon



```js
amazonaws_polly.GetLexicon({
  "LexiconName": ""
}, context)
```

#### Input
* input `object`
  * LexiconName **required** `string`

#### Output
* output [GetLexiconOutput](#getlexiconoutput)

### PutLexicon



```js
amazonaws_polly.PutLexicon({
  "LexiconName": "",
  "Content": ""
}, context)
```

#### Input
* input `object`
  * LexiconName **required** `string`
  * Content **required** `string`: Content of the PLS lexicon as string data.

#### Output
* output [PutLexiconOutput](#putlexiconoutput)

### SynthesizeSpeech



```js
amazonaws_polly.SynthesizeSpeech({
  "OutputFormat": "",
  "Text": "",
  "VoiceId": ""
}, context)
```

#### Input
* input `object`
  * Engine `string` (values: standard, neural): <p>Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. For information on Amazon Polly voices and which voices are available in standard-only, NTTS-only, and both standard and NTTS formats, see <a href="https://docs.aws.amazon.com/polly/latest/dg/voicelist.html">Available Voices</a>.</p> <p> <b>NTTS-only voices</b> </p> <p>When using NTTS-only voices such as Kevin (en-US), this parameter is required and must be set to <code>neural</code>. If the engine is not specified, or is set to <code>standard</code>, this will result in an error. </p> <p>Type: String</p> <p>Valid Values: <code>standard</code> | <code>neural</code> </p> <p>Required: Yes</p> <p> <b>Standard voices</b> </p> <p>For standard voices, this is not required; the engine parameter defaults to <code>standard</code>. If the engine is not specified, or is set to <code>standard</code> and an NTTS-only voice is selected, this will result in an error. </p>
  * LanguageCode `string` (values: arb, cmn-CN, cy-GB, da-DK, de-DE, en-AU, en-GB, en-GB-WLS, en-IN, en-US, es-ES, es-MX, es-US, fr-CA, fr-FR, is-IS, it-IT, ja-JP, hi-IN, ko-KR, nb-NO, nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sv-SE, tr-TR): <p>Optional language code for the Synthesize Speech request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly will use the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p>
  * LexiconNames `array`: List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice. For information about storing lexicons, see <a href="https://docs.aws.amazon.com/polly/latest/dg/API_PutLexicon.html">PutLexicon</a>.
    * items [LexiconName](#lexiconname)
  * OutputFormat **required** `string` (values: json, mp3, ogg_vorbis, pcm): <p> The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json. </p> <p>When pcm is used, the content returned is audio/pcm in a signed 16-bit, 1 channel (mono), little-endian format. </p>
  * SampleRate `string`: <p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p>
  * SpeechMarkTypes `array`: The type of speech marks returned for the input text.
    * items [SpeechMarkType](#speechmarktype)
  * Text **required** `string`:  Input text to synthesize. If you specify <code>ssml</code> as the <code>TextType</code>, follow the SSML format for the input text. 
  * TextType `string` (values: ssml, text):  Specifies whether the input text is plain text or SSML. The default value is plain text. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/ssml.html">Using SSML</a>.
  * VoiceId **required** `string` (values: Aditi, Amy, Astrid, Bianca, Brian, Camila, Carla, Carmen, Celine, Chantal, Conchita, Cristiano, Dora, Emma, Enrique, Ewa, Filiz, Geraint, Giorgio, Gwyneth, Hans, Ines, Ivy, Jacek, Jan, Joanna, Joey, Justin, Karl, Kendra, Kevin, Kimberly, Lea, Liv, Lotte, Lucia, Lupe, Mads, Maja, Marlene, Mathieu, Matthew, Maxim, Mia, Miguel, Mizuki, Naja, Nicole, Olivia, Penelope, Raveena, Ricardo, Ruben, Russell, Salli, Seoyeon, Takumi, Tatyana, Vicki, Vitoria, Zeina, Zhiyu):  Voice ID to use for the synthesis. You can get a list of available voice IDs by calling the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation. 

#### Output
* output [SynthesizeSpeechOutput](#synthesizespeechoutput)

### ListSpeechSynthesisTasks



```js
amazonaws_polly.ListSpeechSynthesisTasks({}, context)
```

#### Input
* input `object`
  * MaxResults `integer`
  * NextToken `string`
  * Status `string`

#### Output
* output [ListSpeechSynthesisTasksOutput](#listspeechsynthesistasksoutput)

### StartSpeechSynthesisTask



```js
amazonaws_polly.StartSpeechSynthesisTask({
  "OutputFormat": "",
  "OutputS3BucketName": "",
  "Text": "",
  "VoiceId": ""
}, context)
```

#### Input
* input `object`
  * Engine `string` (values: standard, neural): Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error.
  * LanguageCode `string` (values: arb, cmn-CN, cy-GB, da-DK, de-DE, en-AU, en-GB, en-GB-WLS, en-IN, en-US, es-ES, es-MX, es-US, fr-CA, fr-FR, is-IS, it-IT, ja-JP, hi-IN, ko-KR, nb-NO, nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sv-SE, tr-TR): <p>Optional language code for the Speech Synthesis request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly will use the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p>
  * LexiconNames `array`: List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice. 
    * items [LexiconName](#lexiconname)
  * OutputFormat **required** `string` (values: json, mp3, ogg_vorbis, pcm): The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json. 
  * OutputS3BucketName **required** `string`: Amazon S3 bucket name to which the output file will be saved.
  * OutputS3KeyPrefix `string`: The Amazon S3 key prefix for the output speech file.
  * SampleRate `string`: <p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p>
  * SnsTopicArn `string`: ARN for the SNS topic optionally used for providing status notification for a speech synthesis task.
  * SpeechMarkTypes `array`: The type of speech marks returned for the input text.
    * items [SpeechMarkType](#speechmarktype)
  * Text **required** `string`: The input text to synthesize. If you specify ssml as the TextType, follow the SSML format for the input text. 
  * TextType `string` (values: ssml, text): Specifies whether the input text is plain text or SSML. The default value is plain text. 
  * VoiceId **required** `string` (values: Aditi, Amy, Astrid, Bianca, Brian, Camila, Carla, Carmen, Celine, Chantal, Conchita, Cristiano, Dora, Emma, Enrique, Ewa, Filiz, Geraint, Giorgio, Gwyneth, Hans, Ines, Ivy, Jacek, Jan, Joanna, Joey, Justin, Karl, Kendra, Kevin, Kimberly, Lea, Liv, Lotte, Lucia, Lupe, Mads, Maja, Marlene, Mathieu, Matthew, Maxim, Mia, Miguel, Mizuki, Naja, Nicole, Olivia, Penelope, Raveena, Ricardo, Ruben, Russell, Salli, Seoyeon, Takumi, Tatyana, Vicki, Vitoria, Zeina, Zhiyu): Voice ID to use for the synthesis. 

#### Output
* output [StartSpeechSynthesisTaskOutput](#startspeechsynthesistaskoutput)

### GetSpeechSynthesisTask



```js
amazonaws_polly.GetSpeechSynthesisTask({
  "TaskId": ""
}, context)
```

#### Input
* input `object`
  * TaskId **required** `string`

#### Output
* output [GetSpeechSynthesisTaskOutput](#getspeechsynthesistaskoutput)

### DescribeVoices



```js
amazonaws_polly.DescribeVoices({}, context)
```

#### Input
* input `object`
  * Engine `string`
  * LanguageCode `string`
  * IncludeAdditionalLanguageCodes `boolean`
  * NextToken `string`

#### Output
* output [DescribeVoicesOutput](#describevoicesoutput)



## Definitions

### Alphabet
* Alphabet `string`

### AudioStream
* AudioStream `string`

### ContentType
* ContentType `string`

### DateTime
* DateTime `string`

### DeleteLexiconInput
* DeleteLexiconInput `object`

### DeleteLexiconOutput
* DeleteLexiconOutput `object`

### DescribeVoicesInput
* DescribeVoicesInput `object`

### DescribeVoicesOutput
* DescribeVoicesOutput `object`
  * NextToken
  * Voices
    * items [Voice](#voice)

### Engine
* Engine `string` (values: standard, neural)

### EngineList
* EngineList `array`
  * items [Engine](#engine)

### EngineNotSupportedException


### Gender
* Gender `string` (values: Female, Male)

### GetLexiconInput
* GetLexiconInput `object`

### GetLexiconOutput
* GetLexiconOutput `object`
  * Lexicon
    * Content
    * Name
  * LexiconAttributes
    * Alphabet
    * LanguageCode
    * LastModified
    * LexemesCount
    * LexiconArn
    * Size

### GetSpeechSynthesisTaskInput
* GetSpeechSynthesisTaskInput `object`

### GetSpeechSynthesisTaskOutput
* GetSpeechSynthesisTaskOutput `object`
  * SynthesisTask
    * CreationTime
    * Engine
    * LanguageCode
    * LexiconNames
      * items [LexiconName](#lexiconname)
    * OutputFormat
    * OutputUri
    * RequestCharacters
    * SampleRate
    * SnsTopicArn
    * SpeechMarkTypes
      * items [SpeechMarkType](#speechmarktype)
    * TaskId
    * TaskStatus
    * TaskStatusReason
    * TextType
    * VoiceId

### IncludeAdditionalLanguageCodes
* IncludeAdditionalLanguageCodes `boolean`

### InvalidLexiconException


### InvalidNextTokenException


### InvalidS3BucketException


### InvalidS3KeyException


### InvalidSampleRateException


### InvalidSnsTopicArnException


### InvalidSsmlException


### InvalidTaskIdException


### LanguageCode
* LanguageCode `string` (values: arb, cmn-CN, cy-GB, da-DK, de-DE, en-AU, en-GB, en-GB-WLS, en-IN, en-US, es-ES, es-MX, es-US, fr-CA, fr-FR, is-IS, it-IT, ja-JP, hi-IN, ko-KR, nb-NO, nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sv-SE, tr-TR)

### LanguageCodeList
* LanguageCodeList `array`
  * items [LanguageCode](#languagecode)

### LanguageName
* LanguageName `string`

### LanguageNotSupportedException


### LastModified
* LastModified `string`

### LexemesCount
* LexemesCount `integer`

### Lexicon
* Lexicon `object`: Provides lexicon name and lexicon content in string format. For more information, see <a href="https://www.w3.org/TR/pronunciation-lexicon/">Pronunciation Lexicon Specification (PLS) Version 1.0</a>.
  * Content
  * Name

### LexiconArn
* LexiconArn `string`

### LexiconAttributes
* LexiconAttributes `object`: Contains metadata describing the lexicon such as the number of lexemes, language code, and so on. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
  * Alphabet
  * LanguageCode
  * LastModified
  * LexemesCount
  * LexiconArn
  * Size

### LexiconContent
* LexiconContent `string`

### LexiconDescription
* LexiconDescription `object`: Describes the content of the lexicon.
  * Attributes
    * Alphabet
    * LanguageCode
    * LastModified
    * LexemesCount
    * LexiconArn
    * Size
  * Name

### LexiconDescriptionList
* LexiconDescriptionList `array`
  * items [LexiconDescription](#lexicondescription)

### LexiconName
* LexiconName `string`

### LexiconNameList
* LexiconNameList `array`
  * items [LexiconName](#lexiconname)

### LexiconNotFoundException


### LexiconSizeExceededException


### ListLexiconsInput
* ListLexiconsInput `object`

### ListLexiconsOutput
* ListLexiconsOutput `object`
  * Lexicons
    * items [LexiconDescription](#lexicondescription)
  * NextToken

### ListSpeechSynthesisTasksInput
* ListSpeechSynthesisTasksInput `object`

### ListSpeechSynthesisTasksOutput
* ListSpeechSynthesisTasksOutput `object`
  * NextToken
  * SynthesisTasks
    * items [SynthesisTask](#synthesistask)

### MarksNotSupportedForFormatException


### MaxLexemeLengthExceededException


### MaxLexiconsNumberExceededException


### MaxResults
* MaxResults `integer`

### NextToken
* NextToken `string`

### OutputFormat
* OutputFormat `string` (values: json, mp3, ogg_vorbis, pcm)

### OutputS3BucketName
* OutputS3BucketName `string`

### OutputS3KeyPrefix
* OutputS3KeyPrefix `string`

### OutputUri
* OutputUri `string`

### PutLexiconInput
* PutLexiconInput `object`
  * Content **required**

### PutLexiconOutput
* PutLexiconOutput `object`

### RequestCharacters
* RequestCharacters `integer`

### SampleRate
* SampleRate `string`

### ServiceFailureException


### Size
* Size `integer`

### SnsTopicArn
* SnsTopicArn `string`

### SpeechMarkType
* SpeechMarkType `string` (values: sentence, ssml, viseme, word)

### SpeechMarkTypeList
* SpeechMarkTypeList `array`
  * items [SpeechMarkType](#speechmarktype)

### SsmlMarksNotSupportedForTextTypeException


### StartSpeechSynthesisTaskInput
* StartSpeechSynthesisTaskInput `object`
  * Engine
  * LanguageCode
  * LexiconNames
    * items [LexiconName](#lexiconname)
  * OutputFormat **required**
  * OutputS3BucketName **required**
  * OutputS3KeyPrefix
  * SampleRate
  * SnsTopicArn
  * SpeechMarkTypes
    * items [SpeechMarkType](#speechmarktype)
  * Text **required**
  * TextType
  * VoiceId **required**

### StartSpeechSynthesisTaskOutput
* StartSpeechSynthesisTaskOutput `object`
  * SynthesisTask
    * CreationTime
    * Engine
    * LanguageCode
    * LexiconNames
      * items [LexiconName](#lexiconname)
    * OutputFormat
    * OutputUri
    * RequestCharacters
    * SampleRate
    * SnsTopicArn
    * SpeechMarkTypes
      * items [SpeechMarkType](#speechmarktype)
    * TaskId
    * TaskStatus
    * TaskStatusReason
    * TextType
    * VoiceId

### SynthesisTask
* SynthesisTask `object`: SynthesisTask object that provides information about a speech synthesis task.
  * CreationTime
  * Engine
  * LanguageCode
  * LexiconNames
    * items [LexiconName](#lexiconname)
  * OutputFormat
  * OutputUri
  * RequestCharacters
  * SampleRate
  * SnsTopicArn
  * SpeechMarkTypes
    * items [SpeechMarkType](#speechmarktype)
  * TaskId
  * TaskStatus
  * TaskStatusReason
  * TextType
  * VoiceId

### SynthesisTaskNotFoundException


### SynthesisTasks
* SynthesisTasks `array`
  * items [SynthesisTask](#synthesistask)

### SynthesizeSpeechInput
* SynthesizeSpeechInput `object`
  * Engine
  * LanguageCode
  * LexiconNames
    * items [LexiconName](#lexiconname)
  * OutputFormat **required**
  * SampleRate
  * SpeechMarkTypes
    * items [SpeechMarkType](#speechmarktype)
  * Text **required**
  * TextType
  * VoiceId **required**

### SynthesizeSpeechOutput
* SynthesizeSpeechOutput `object`
  * AudioStream

### TaskId
* TaskId `string`

### TaskStatus
* TaskStatus `string` (values: scheduled, inProgress, completed, failed)

### TaskStatusReason
* TaskStatusReason `string`

### Text
* Text `string`

### TextLengthExceededException


### TextType
* TextType `string` (values: ssml, text)

### UnsupportedPlsAlphabetException


### UnsupportedPlsLanguageException


### Voice
* Voice `object`: Description of the voice.
  * AdditionalLanguageCodes
    * items [LanguageCode](#languagecode)
  * Gender
  * Id
  * LanguageCode
  * LanguageName
  * Name
  * SupportedEngines
    * items [Engine](#engine)

### VoiceId
* VoiceId `string` (values: Aditi, Amy, Astrid, Bianca, Brian, Camila, Carla, Carmen, Celine, Chantal, Conchita, Cristiano, Dora, Emma, Enrique, Ewa, Filiz, Geraint, Giorgio, Gwyneth, Hans, Ines, Ivy, Jacek, Jan, Joanna, Joey, Justin, Karl, Kendra, Kevin, Kimberly, Lea, Liv, Lotte, Lucia, Lupe, Mads, Maja, Marlene, Mathieu, Matthew, Maxim, Mia, Miguel, Mizuki, Naja, Nicole, Olivia, Penelope, Raveena, Ricardo, Ruben, Russell, Salli, Seoyeon, Takumi, Tatyana, Vicki, Vitoria, Zeina, Zhiyu)

### VoiceList
* VoiceList `array`
  * items [Voice](#voice)

### VoiceName
* VoiceName `string`


