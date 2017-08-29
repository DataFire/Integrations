# @datafire/datumbox

Client library for DatumBox

## Installation and Usage
```bash
npm install --save datafire @datafire/datumbox
```

```js
let datafire = require('datafire');
let datumbox = require('@datafire/datumbox').create({
  apiKey: "",
});

datumbox.AdultContentDetection({}).then(data => {
  console.log(data);
})
```

## Description
Datumbox offers a Machine Learning platform composed of 14 classifiers and Natural Language processing functions. Functions include sentiment analysis, topic classification, readability assessment, language detection, and much more.

## Actions
### AdultContentDetection
The Adult Content Detection function classifies the documents as adult or noadult based on their context. It can be used to detect whether a document contains content unsuitable for minors.


```js
datumbox.AdultContentDetection({
  "text": ""
}, context)
```

#### Parameters
* text (string) **required** - The text that you want to analyze. It should not contain HTML tags.

### CommercialDetection
The Commercial Detection function labels the documents as commercial or non-commercial based on their keywords and expressions. It can be used to detect whether a website is commercial or not.


```js
datumbox.CommercialDetection({
  "text": ""
}, context)
```

#### Parameters
* text (string) **required** - The text that you want to analyze. It should not contain HTML tags.

### DocumentSimilarity
The Document Similarity function estimates the degree of similarity between two documents. It can be used to detect duplicate webpages or detect plagiarism.


```js
datumbox.DocumentSimilarity({
  "original": "",
  "copy": ""
}, context)
```

#### Parameters
* original (string) **required** - The first text. It should not contain HTML tags.
* copy (string) **required** - The second text. It should not contain HTML tags.

### EducationalDetection
The Educational Detection function classifies the documents as educational or non-educational based on their context. It can be used to detect whether a website is educational or not.


```js
datumbox.EducationalDetection({
  "text": ""
}, context)
```

#### Parameters
* text (string) **required** - The text that you want to analyze. It should not contain HTML tags.

### GenderDetection
The Gender Detection function identifies if a particular document is written-by or targets-to a man or a woman based on the context, the words and the idioms found in the text.


```js
datumbox.GenderDetection({
  "text": ""
}, context)
```

#### Parameters
* text (string) **required** - The text that you want to analyze. It should not contain HTML tags.

### KeywordExtraction
The Keyword Extraction function enables you to extract from an arbitrary document all the keywords and word-combinations along with their occurrences in the text.


```js
datumbox.KeywordExtraction({
  "n": 0,
  "text": ""
}, context)
```

#### Parameters
* n (integer) **required** - The number of keyword combinations (n-grams) that you wish to extract.
* text (string) **required** - The text that you want to analyze. It should not contain HTML tags.

### LanguageDetection
The Language Detection function identifies the natural language of the given document based on its words and context. This classifier is able to detect 96 different languages.


```js
datumbox.LanguageDetection({
  "text": ""
}, context)
```

#### Parameters
* text (string) **required** - The text that you want to analyze. It should not contain HTML tags.

### ReadabilityAssessment
The Readability Assessment function determines the degree of readability of a document based on its terms and idioms. The texts are classified as basic, intermediate and advanced depending their difficulty.


```js
datumbox.ReadabilityAssessment({
  "text": ""
}, context)
```

#### Parameters
* text (string) **required** - The text that you want to analyze. It should not contain HTML tags.

### SentimentAnalysis
The Sentiment Analysis function classifies documents as positive, negative or neutral (lack of sentiment) depending on whether they express a positive, negative or neutral opinion.


```js
datumbox.SentimentAnalysis({
  "text": ""
}, context)
```

#### Parameters
* text (string) **required** - The text that you want to analyze. It should not contain HTML tags.

### SpamDetection
The Spam Detection function labels documents as spam or nospam by taking into account their context. It can be used to filter out spam emails and comments.


```js
datumbox.SpamDetection({
  "text": ""
}, context)
```

#### Parameters
* text (string) **required** - The text that you want to analyze. It should not contain HTML tags.

### SubjectivityAnalysis
The Subjectivity Analysis function categorizes documents as subjective or objective based on their writing style. Texts that express personal opinions are labeled as subjective and the others as objective.


```js
datumbox.SubjectivityAnalysis({
  "text": ""
}, context)
```

#### Parameters
* text (string) **required** - The text that you want to analyze. It should not contain HTML tags.

### TextExtraction
The Text Extraction function enables you to extract the important information from a given webpage. Extracting the clear text of the documents is an important step before any other analysis.


```js
datumbox.TextExtraction({
  "text": ""
}, context)
```

#### Parameters
* text (string) **required** - The HTML source of the webpage.

### TopicClassification
The Topic Classification function assigns documents in 12 thematic categories based on their keywords, idioms and jargon. It can be used to identify the topic of the texts.


```js
datumbox.TopicClassification({
  "text": ""
}, context)
```

#### Parameters
* text (string) **required** - The text that you want to analyze. It should not contain HTML tags.

### TwitterSentimentAnalysis
The Twitter Sentiment Analysis function allows you to perform Sentiment Analysis on Twitter. It classifies the tweets as positive, negative or neutral depending on their context.


```js
datumbox.TwitterSentimentAnalysis({
  "text": ""
}, context)
```

#### Parameters
* text (string) **required** - The text of the tweet that we evaluate.

