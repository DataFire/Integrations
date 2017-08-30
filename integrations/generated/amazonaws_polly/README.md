# @datafire/amazonaws_polly

Client library for Amazon Polly

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_polly
```

```js
let datafire = require('datafire');
let amazonaws_polly = require('@datafire/amazonaws_polly').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_polly.ListLexicons({}).then(data => {
  console.log(data);
})
```

## Description
<p>Amazon Polly is a web service that makes it easy to synthesize speech from text.</p> <p>The Amazon Polly service provides API operations for synthesizing high-quality speech from plain text and Speech Synthesis Markup Language (SSML), along with managing pronunciations lexicons that enable you to get the best results for your application domain.</p>

## Actions
### ListLexicons



```js
amazonaws_polly.ListLexicons({}, context)
```

#### Parameters
*This action has no parameters*

### PutLexicon



```js
amazonaws_polly.PutLexicon({
  "LexiconName": "",
  "Content": ""
}, context)
```

#### Parameters
* LexiconName (string) **required**
* Content (string) **required**

### SynthesizeSpeech



```js
amazonaws_polly.SynthesizeSpeech({
  "OutputFormat": "",
  "Text": "",
  "VoiceId": ""
}, context)
```

#### Parameters
* LexiconNames (array)
* OutputFormat (string) **required**
* SampleRate (string)
* SpeechMarkTypes (array)
* Text (string) **required**
* TextType (string)
* VoiceId (string) **required**

### DescribeVoices



```js
amazonaws_polly.DescribeVoices({}, context)
```

#### Parameters
*This action has no parameters*

