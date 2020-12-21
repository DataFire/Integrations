# @datafire/symanto

Client library for Psycholinguistic Text Analytics

## Installation and Usage
```bash
npm install --save @datafire/symanto
```
```js
let symanto = require('@datafire/symanto').create({
  apiKeyHeader: ""
});

.then(data => {
  console.log(data);
});
```

## Description

We aim to provide the deepest understanding of people through psychology & AI

## Actions

### communication
Identify the purpose and writing style of a written text.

Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]

Returned labels:
* action-seeking
* fact-oriented
* information-seeking
* self-revealing


```js
symanto.communication({}, context)
```

#### Input
* input `object`
  * all `boolean`
  * body [PostRequest](#postrequest)

#### Output
* output [PredictionResults](#predictionresults)

### emotion
Detect the emotions of the text.

Supported Langauges: [`en`, `de`, `es`]

Returned labels:
* anger
* joy
* love
* sadness
* surprise
* uncategorized


```js
symanto.emotion({}, context)
```

#### Input
* input `object`
  * all `boolean`
  * body [PostRequest](#postrequest)

#### Output
* output [PredictionResults](#predictionresults)

### language_detection.post
Identifies what language a text is written in. Only languages that our API supports can be analyzed.

Returned labels:
* language_code of the detected language


```js
symanto.language_detection.post({}, context)
```

#### Input
* input `object`
  * body [LanguageDetectionRequest](#languagedetectionrequest)

#### Output
* output [LanguageDetectionResponse](#languagedetectionresponse)

### personality
Predict the personality trait of author of any written text.

Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]

Returned labels:

* emotional
* rational


```js
symanto.personality({}, context)
```

#### Input
* input `object`
  * all `boolean`
  * body [PostRequest](#postrequest)

#### Output
* output [PredictionResults](#predictionresults)

### sentiment
Evaluate the overall tonality of the text.

Supported Languages: [`en`, `de`, `es`]

Returned labels:
* positive
* negative


```js
symanto.sentiment({}, context)
```

#### Input
* input `object`
  * all `boolean`
  * body [PostRequest](#postrequest)

#### Output
* output [PredictionResults](#predictionresults)

### topic_sentiment.post
Extracts topics and sentiments and relates them.


```js
symanto.topic_sentiment.post({}, context)
```

#### Input
* input `object`
  * domain `string` (values: Ecom, Employee): Provide analysis domain for better extraction (optional)
  * body [PostRequest](#postrequest)

#### Output
* output [TopicSentimentResponse](#topicsentimentresponse)



## Definitions

### LanguageDetection
* LanguageDetection `object`
  * id `string`: id of the text.
  * text **required** `string`: the text itself.

### LanguageDetectionRequest
* LanguageDetectionRequest `array`
  * items [LanguageDetection](#languagedetection)

### LanguageDetectionResponse
* LanguageDetectionResponse `array`
  * items [LanguagePredicted](#languagepredicted)

### LanguagePredicted
* LanguagePredicted `object`
  * detected_language **required** `string`: the detected language_code corresponding to the input text.
  * id `string`: id of the post.

### Post
* Post `object`
  * id `string`: id of the post.
  * language **required** `string`: language_code of the text.
  * text **required** `string`: the text to be analysed.

### PostPredicted
* PostPredicted `object`
  * id `string`: id of the post.
  * predictions **required** `array`: the list of predictions.
    * items [Prediction](#prediction)

### PostRequest
* Posts `array`
  * items [Post](#post)

### Prediction
* Prediction `object`
  * prediction **required** `string`: the predicted label.
  * probability **required** `number`: the probability of the predicted label.

### PredictionResults
* Prediction Results `array`
  * items [PostPredicted](#postpredicted)

### Sentiment
* Sentiment `object`
  * category `string`
  * end `integer`
  * negationTerm `string`
  * parentCategory `string`
  * positive `boolean`
  * scale `number`
  * start `integer`
  * text `string`

### Topic
* Topic `object`
  * category `string`
  * end `integer`
  * polarity `number`
  * start `integer`
  * text `string`
  * topic `string`

### TopicSentiment
* TopicSentiment `object`
  * sentence `string`
  * sentiment [Sentiment](#sentiment)
  * topic [Topic](#topic)

### TopicSentimentOutput
* TopicSentimentOutput `object`
  * id `string`
  * language `string`
  * sentiments `array`
    * items [Sentiment](#sentiment)
  * text `string`
  * topicSentiments `array`
    * items [TopicSentiment](#topicsentiment)
  * topics `array`
    * items [Topic](#topic)

### TopicSentimentResponse
* TopicSentimentResponse `array`
  * items [TopicSentimentOutput](#topicsentimentoutput)

### ValidationError
* ValidationError `object`
  * loc **required** `array`
    * items `string`
  * msg **required** `string`
  * type **required** `string`

### ValidationErrors
* ValidationErrors `object`
  * detail `array`
    * items [ValidationError](#validationerror)


