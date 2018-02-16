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

amazonaws_polly.ListLexicons({}).then(data => {
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
  * Content **required** [LexiconContent](#lexiconcontent)

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
  * LexiconNames [LexiconNameList](#lexiconnamelist)
  * OutputFormat **required** [OutputFormat](#outputformat)
  * SampleRate [SampleRate](#samplerate)
  * SpeechMarkTypes [SpeechMarkTypeList](#speechmarktypelist)
  * Text **required** [Text](#text)
  * TextType [TextType](#texttype)
  * VoiceId **required** [VoiceId](#voiceid)

#### Output
* output [SynthesizeSpeechOutput](#synthesizespeechoutput)

### DescribeVoices



```js
amazonaws_polly.DescribeVoices({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeVoicesOutput](#describevoicesoutput)



## Definitions

### Alphabet
* Alphabet `string`

### AudioStream
* AudioStream `string`

### ContentType
* ContentType `string`

### DeleteLexiconInput
* DeleteLexiconInput `object`

### DeleteLexiconOutput
* DeleteLexiconOutput `object`

### DescribeVoicesInput
* DescribeVoicesInput `object`

### DescribeVoicesOutput
* DescribeVoicesOutput `object`
  * NextToken [NextToken](#nexttoken)
  * Voices [VoiceList](#voicelist)

### ErrorMessage
* ErrorMessage `string`

### Gender
* Gender `string` (values: Female, Male)

### GetLexiconInput
* GetLexiconInput `object`

### GetLexiconOutput
* GetLexiconOutput `object`
  * Lexicon [Lexicon](#lexicon)
  * LexiconAttributes [LexiconAttributes](#lexiconattributes)

### InvalidLexiconException
* InvalidLexiconException `object`: Amazon Polly can't find the specified lexicon. Verify that the lexicon's name is spelled correctly, and then try again.
  * message [ErrorMessage](#errormessage)

### InvalidNextTokenException
* InvalidNextTokenException `object`: The NextToken is invalid. Verify that it's spelled correctly, and then try again.
  * message [ErrorMessage](#errormessage)

### InvalidSampleRateException
* InvalidSampleRateException `object`: The specified sample rate is not valid.
  * message [ErrorMessage](#errormessage)

### InvalidSsmlException
* InvalidSsmlException `object`: The SSML you provided is invalid. Verify the SSML syntax, spelling of tags and values, and then try again.
  * message [ErrorMessage](#errormessage)

### LanguageCode
* LanguageCode `string` (values: cy-GB, da-DK, de-DE, en-AU, en-GB, en-GB-WLS, en-IN, en-US, es-ES, es-US, fr-CA, fr-FR, is-IS, it-IT, ko-KR, ja-JP, nb-NO, nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sv-SE, tr-TR)

### LanguageName
* LanguageName `string`

### LastModified
* LastModified `string`

### LexemesCount
* LexemesCount `integer`

### Lexicon
* Lexicon `object`: Provides lexicon name and lexicon content in string format. For more information, see <a href="https://www.w3.org/TR/pronunciation-lexicon/">Pronunciation Lexicon Specification (PLS) Version 1.0</a>.
  * Content [LexiconContent](#lexiconcontent)
  * Name [LexiconName](#lexiconname)

### LexiconArn
* LexiconArn `string`

### LexiconAttributes
* LexiconAttributes `object`: Contains metadata describing the lexicon such as the number of lexemes, language code, and so on. For more information, see <a href="http://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
  * Alphabet [Alphabet](#alphabet)
  * LanguageCode [LanguageCode](#languagecode)
  * LastModified [LastModified](#lastmodified)
  * LexemesCount [LexemesCount](#lexemescount)
  * LexiconArn [LexiconArn](#lexiconarn)
  * Size [Size](#size)

### LexiconContent
* LexiconContent `string`

### LexiconDescription
* LexiconDescription `object`: Describes the content of the lexicon.
  * Attributes [LexiconAttributes](#lexiconattributes)
  * Name [LexiconName](#lexiconname)

### LexiconDescriptionList
* LexiconDescriptionList `array`
  * items [LexiconDescription](#lexicondescription)

### LexiconName
* LexiconName `string`

### LexiconNameList
* LexiconNameList `array`
  * items [LexiconName](#lexiconname)

### LexiconNotFoundException
* LexiconNotFoundException `object`: <p>Amazon Polly can't find the specified lexicon. This could be caused by a lexicon that is missing, its name is misspelled or specifying a lexicon that is in a different region.</p> <p>Verify that the lexicon exists, is in the region (see <a>ListLexicons</a>) and that you spelled its name is spelled correctly. Then try again.</p>
  * message [ErrorMessage](#errormessage)

### LexiconSizeExceededException
* LexiconSizeExceededException `object`: The maximum size of the specified lexicon would be exceeded by this operation.
  * message [ErrorMessage](#errormessage)

### ListLexiconsInput
* ListLexiconsInput `object`

### ListLexiconsOutput
* ListLexiconsOutput `object`
  * Lexicons [LexiconDescriptionList](#lexicondescriptionlist)
  * NextToken [NextToken](#nexttoken)

### MarksNotSupportedForFormatException
* MarksNotSupportedForFormatException `object`: Speech marks are not supported for the <code>OutputFormat</code> selected. Speech marks are only available for content in <code>json</code> format.
  * message [ErrorMessage](#errormessage)

### MaxLexemeLengthExceededException
* MaxLexemeLengthExceededException `object`: The maximum size of the lexeme would be exceeded by this operation.
  * message [ErrorMessage](#errormessage)

### MaxLexiconsNumberExceededException
* MaxLexiconsNumberExceededException `object`: The maximum number of lexicons would be exceeded by this operation.
  * message [ErrorMessage](#errormessage)

### NextToken
* NextToken `string`

### OutputFormat
* OutputFormat `string` (values: json, mp3, ogg_vorbis, pcm)

### PutLexiconInput
* PutLexiconInput `object`
  * Content **required** [LexiconContent](#lexiconcontent)

### PutLexiconOutput
* PutLexiconOutput `object`

### RequestCharacters
* RequestCharacters `integer`

### SampleRate
* SampleRate `string`

### ServiceFailureException
* ServiceFailureException `object`: An unknown condition has caused a service failure.
  * message [ErrorMessage](#errormessage)

### Size
* Size `integer`

### SpeechMarkType
* SpeechMarkType `string` (values: sentence, ssml, viseme, word)

### SpeechMarkTypeList
* SpeechMarkTypeList `array`
  * items [SpeechMarkType](#speechmarktype)

### SsmlMarksNotSupportedForTextTypeException
* SsmlMarksNotSupportedForTextTypeException `object`: SSML speech marks are not supported for plain text-type input.
  * message [ErrorMessage](#errormessage)

### SynthesizeSpeechInput
* SynthesizeSpeechInput `object`
  * LexiconNames [LexiconNameList](#lexiconnamelist)
  * OutputFormat **required** [OutputFormat](#outputformat)
  * SampleRate [SampleRate](#samplerate)
  * SpeechMarkTypes [SpeechMarkTypeList](#speechmarktypelist)
  * Text **required** [Text](#text)
  * TextType [TextType](#texttype)
  * VoiceId **required** [VoiceId](#voiceid)

### SynthesizeSpeechOutput
* SynthesizeSpeechOutput `object`
  * AudioStream [AudioStream](#audiostream)

### Text
* Text `string`

### TextLengthExceededException
* TextLengthExceededException `object`: The value of the "Text" parameter is longer than the accepted limits. The limit for input text is a maximum of 3000 characters total, of which no more than 1500 can be billed characters. SSML tags are not counted as billed characters.
  * message [ErrorMessage](#errormessage)

### TextType
* TextType `string` (values: ssml, text)

### UnsupportedPlsAlphabetException
* UnsupportedPlsAlphabetException `object`: The alphabet specified by the lexicon is not a supported alphabet. Valid values are <code>x-sampa</code> and <code>ipa</code>.
  * message [ErrorMessage](#errormessage)

### UnsupportedPlsLanguageException
* UnsupportedPlsLanguageException `object`: The language specified in the lexicon is unsupported. For a list of supported languages, see <a href="http://docs.aws.amazon.com/polly/latest/dg/API_LexiconAttributes.html">Lexicon Attributes</a>.
  * message [ErrorMessage](#errormessage)

### Voice
* Voice `object`: Description of the voice.
  * Gender [Gender](#gender)
  * Id [VoiceId](#voiceid)
  * LanguageCode [LanguageCode](#languagecode)
  * LanguageName [LanguageName](#languagename)
  * Name [VoiceName](#voicename)

### VoiceId
* VoiceId `string` (values: Geraint, Gwyneth, Mads, Naja, Hans, Marlene, Nicole, Russell, Amy, Brian, Emma, Raveena, Ivy, Joanna, Joey, Justin, Kendra, Kimberly, Matthew, Salli, Conchita, Enrique, Miguel, Penelope, Chantal, Celine, Mathieu, Dora, Karl, Carla, Giorgio, Mizuki, Liv, Lotte, Ruben, Ewa, Jacek, Jan, Maja, Ricardo, Vitoria, Cristiano, Ines, Carmen, Maxim, Tatyana, Astrid, Filiz, Vicki, Takumi, Seoyeon, Aditi)

### VoiceList
* VoiceList `array`
  * items [Voice](#voice)

### VoiceName
* VoiceName `string`


