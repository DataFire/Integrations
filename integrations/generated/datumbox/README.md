# @datafire/datumbox
Datumbox offers a Machine Learning platform composed of 14 classifiers and Natural Language processing functions. Functions include sentiment analysis, topic classification, readability assessment, language detection, and much more.

## Operation: AdultContentDetection
The Adult Content Detection function classifies the documents as adult or noadult based on their context. It can be used to detect whether a document contains content unsuitable for minors.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "description": "The text that you want to analyze. It should not contain HTML tags."
    }
  },
  "additionalProperties": false,
  "required": [
    "text"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: CommercialDetection
The Commercial Detection function labels the documents as commercial or non-commercial based on their keywords and expressions. It can be used to detect whether a website is commercial or not.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "description": "The text that you want to analyze. It should not contain HTML tags."
    }
  },
  "additionalProperties": false,
  "required": [
    "text"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: DocumentSimilarity
The Document Similarity function estimates the degree of similarity between two documents. It can be used to detect duplicate webpages or detect plagiarism.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "original": {
      "type": "string",
      "description": "The first text. It should not contain HTML tags."
    },
    "copy": {
      "type": "string",
      "description": "The second text. It should not contain HTML tags."
    }
  },
  "additionalProperties": false,
  "required": [
    "original",
    "copy"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: EducationalDetection
The Educational Detection function classifies the documents as educational or non-educational based on their context. It can be used to detect whether a website is educational or not.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "description": "The text that you want to analyze. It should not contain HTML tags."
    }
  },
  "additionalProperties": false,
  "required": [
    "text"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GenderDetection
The Gender Detection function identifies if a particular document is written-by or targets-to a man or a woman based on the context, the words and the idioms found in the text.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "description": "The text that you want to analyze. It should not contain HTML tags."
    }
  },
  "additionalProperties": false,
  "required": [
    "text"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: KeywordExtraction
The Keyword Extraction function enables you to extract from an arbitrary document all the keywords and word-combinations along with their occurrences in the text.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "n": {
      "type": "integer",
      "description": "The number of keyword combinations (n-grams) that you wish to extract.",
      "maximum": 5,
      "minimum": 1
    },
    "text": {
      "type": "string",
      "description": "The text that you want to analyze. It should not contain HTML tags."
    }
  },
  "additionalProperties": false,
  "required": [
    "n",
    "text"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: LanguageDetection
The Language Detection function identifies the natural language of the given document based on its words and context. This classifier is able to detect 96 different languages.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "description": "The text that you want to analyze. It should not contain HTML tags."
    }
  },
  "additionalProperties": false,
  "required": [
    "text"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ReadabilityAssessment
The Readability Assessment function determines the degree of readability of a document based on its terms and idioms. The texts are classified as basic, intermediate and advanced depending their difficulty.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "description": "The text that you want to analyze. It should not contain HTML tags."
    }
  },
  "additionalProperties": false,
  "required": [
    "text"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: SentimentAnalysis
The Sentiment Analysis function classifies documents as positive, negative or neutral (lack of sentiment) depending on whether they express a positive, negative or neutral opinion.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "description": "The text that you want to analyze. It should not contain HTML tags."
    }
  },
  "additionalProperties": false,
  "required": [
    "text"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: SpamDetection
The Spam Detection function labels documents as spam or nospam by taking into account their context. It can be used to filter out spam emails and comments.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "description": "The text that you want to analyze. It should not contain HTML tags."
    }
  },
  "additionalProperties": false,
  "required": [
    "text"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: SubjectivityAnalysis
The Subjectivity Analysis function categorizes documents as subjective or objective based on their writing style. Texts that express personal opinions are labeled as subjective and the others as objective.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "description": "The text that you want to analyze. It should not contain HTML tags."
    }
  },
  "additionalProperties": false,
  "required": [
    "text"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: TextExtraction
The Text Extraction function enables you to extract the important information from a given webpage. Extracting the clear text of the documents is an important step before any other analysis.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "description": "The HTML source of the webpage."
    }
  },
  "additionalProperties": false,
  "required": [
    "text"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: TopicClassification
The Topic Classification function assigns documents in 12 thematic categories based on their keywords, idioms and jargon. It can be used to identify the topic of the texts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "description": "The text that you want to analyze. It should not contain HTML tags."
    }
  },
  "additionalProperties": false,
  "required": [
    "text"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: TwitterSentimentAnalysis
The Twitter Sentiment Analysis function allows you to perform Sentiment Analysis on Twitter. It classifies the tweets as positive, negative or neutral depending on their context.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "description": "The text of the tweet that we evaluate."
    }
  },
  "additionalProperties": false,
  "required": [
    "text"
  ]
}
```
### Output Schema
```json
{}
```
