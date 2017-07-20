# @datafire/google_language

Client library for Google Cloud Natural Language

## Installation and Usage
```bash
npm install --save datafire @datafire/google_language
```

```js
let datafire = require('datafire');
let google_language = require('@datafire/google_language').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_language: account,
  }
})


google_language.documents.annotateText({}, context).then(data => {
  console.log(data);
})
```

## Description
Provides natural language understanding technologies to developers. Examples include sentiment analysis, entity recognition, entity sentiment analysis, and text annotations.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_language.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_language.oauthRefresh(null, context)
```


### documents.analyzeEntities
Finds named entities (currently proper names and common nouns) in the text
along with entity types, salience, mentions for each entity, and
other properties.


```js
google_language.documents.analyzeEntities({}, context)
```


### documents.analyzeSentiment
Analyzes the sentiment of the provided text.


```js
google_language.documents.analyzeSentiment({}, context)
```


### documents.analyzeSyntax
Analyzes the syntax of the text and provides sentence boundaries and
tokenization along with part of speech tags, dependency trees, and other
properties.


```js
google_language.documents.analyzeSyntax({}, context)
```


### documents.annotateText
A convenience method that provides all the features that analyzeSentiment,
analyzeEntities, and analyzeSyntax provide in one call.


```js
google_language.documents.annotateText({}, context)
```


