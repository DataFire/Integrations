# @datafire/text2data

Client library for Text Analytics & Sentiment Analysis API | api.text2data.com

## Installation and Usage
```bash
npm install --save @datafire/text2data
```
```js
let text2data = require('@datafire/text2data').create({
  PrivateKey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>The current api version is <b>v3.4</b></p><br><br><p>The api methods listed below can be called directly from this page to test the output. You might set the api_key to pre-authenticate all requests on this page (this will work if your secret is blank).</p><br><br> API endpoint URL: http://{apiName}.text2data.com/v3/ {method}<br><br>The api can be consumed directly or using our SDK. Our Excel Add-In and Google Sheets Add-on are also using this api to process the data.

## Actions

### Analyze_Get
Test api response without api key


```js
text2data.Analyze_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [DocumentResult](#documentresult)

### Analyze_Post
Sample request:
            
    POST /Analyze
    {
       "DocumentText": "Excellent location, opposite a very large mall with wide variety of shops, restaurants and more.",
       "PrivateKey": "your_api_key",
       "Secret": ""
    }


```js
text2data.Analyze_Post({
  "requestDoc": {
    "DocumentText": "",
    "PrivateKey": ""
  }
}, context)
```

#### Input
* input `object`
  * requestDoc **required** [Document](#document)

#### Output
* output [DocumentResult](#documentresult)

### Categorize_Get
Test api response without api key


```js
text2data.Categorize_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [DocumentResult](#documentresult)

### Categorize_Post
Sample request:
            
    POST /Categorize
    {
       "DocumentText": "Excellent location, opposite a very large mall with wide variety of shops, restaurants and more.",
       "PrivateKey": "your_api_key",
       "UserCategoryModelName": "your_model_name",
       "Secret": ""
    }


```js
text2data.Categorize_Post({
  "requestDoc": {
    "DocumentText": "",
    "PrivateKey": ""
  }
}, context)
```

#### Input
* input `object`
  * requestDoc **required** [Document](#document)

#### Output
* output [DocumentResult](#documentresult)

### Extract_Get
Test api response without api key


```js
text2data.Extract_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [DocumentResult](#documentresult)

### Extract_Post
Sample request:
            
    POST /Extract
    {
       "DocumentText": "Excellent location, opposite a very large mall with wide variety of shops, restaurants and more.",
       "PrivateKey": "your_api_key",
       "UserCategoryModelName": "your_model_name",
       "Secret": ""
    }


```js
text2data.Extract_Post({
  "requestDoc": {
    "DocumentText": "",
    "PrivateKey": ""
  }
}, context)
```

#### Input
* input `object`
  * requestDoc **required** [Document](#document)

#### Output
* output [DocumentResult](#documentresult)



## Definitions

### ApiConfig
* ApiConfig `object`
  * APIPrivateKey `string`
  * APISecret `string`
  * BlacklistedWords `array`
    * items `string`
  * ErrorMessage `string`
  * IsRequestStatusOK `boolean`

### Category
* Category `object`
  * CategoryName `string`
  * Score `number`

### Document
* Document `object`
  * DocumentLanguage `string`
  * DocumentText **required** `string`
  * IsTwitterContent `boolean`
  * PrivateKey **required** `string`
  * RequestIdentifier `string`
  * Secret `string`
  * SerializeFormat `integer`
  * UserCategoryModelName `string`

### DocumentResult
* DocumentResult `object`
  * AutoCategories `array`
    * items [Category](#category)
  * Citations `array`
    * items [SentencePart](#sentencepart)
  * CloudTagHTML `string`
  * CoreSentences `array`
    * items [Sentence](#sentence)
  * DetectedLanguage `string`
  * DocSentimentPolarity `string`
  * DocSentimentResultString `string`
  * DocSentimentValue `number`
  * Entities `array`
    * items [SentencePart](#sentencepart)
  * ErrorMessage `string`
  * Keywords `array`
    * items [SentencePart](#sentencepart)
  * Magnitude `number`
  * PartsOfSpeech `array`
    * items [PartOfSpeech](#partofspeech)
  * ResultTextHtml `string`
  * SlangWords `array`
    * items [SlangWord](#slangword)
  * Status `integer`
  * StorageInfo [StorageInfo](#storageinfo)
  * Subjectivity `string`
  * SwearWords `array`
    * items [SlangWord](#slangword)
  * Themes `array`
    * items [SentencePart](#sentencepart)
  * Timestamp `integer`
  * TransactionCurrentDay `integer`
  * TransactionDailyLimit `integer`
  * TransactionTotalCreditsLeft `integer`
  * TransactionUseByDate `string`
  * UserCategories `array`
    * items [Category](#category)

### PartOfSpeech
* PartOfSpeech `object`
  * Action `string`
  * Object `string`
  * ObjectSentimentPolarity `string`
  * ObjectSentimentResultString `string`
  * ObjectSentimentValue `number`
  * Subject `string`
  * Text `string`

### Sentence
* Sentence `object`
  * Magnitude `number`
  * SentenceNumber `integer`
  * SentimentPolarity `string`
  * SentimentResultString `string`
  * SentimentValue `number`
  * Text `string`

### SentencePart
* SentencePart `object`
  * KeywordType `string`
  * Magnitude `number`
  * Mentions `integer`
  * SentencePartType `string`
  * SentenceText `string`
  * SentimentPolarity `string`
  * SentimentResult `string`
  * SentimentValue `number`
  * Text `string`

### SlangWord
* SlangWord `object`
  * SlangWordText `string`
  * SlangWordTranslation `string`

### StorageInfo
* StorageInfo `object`
  * CreateDate `string`
  * DocumentText `string`
  * IP `string`
  * IsExcel `boolean`
  * IsGSExcel `boolean`
  * IsTwitterMode `boolean`
  * PrivateKey `string`
  * RequestIdentifier `string`
  * UserCategoryModelName `string`


