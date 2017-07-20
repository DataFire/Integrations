# @datafire/apitore_languagedetectionapis

Client library for Language Detection APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_languagedetectionapis
```

```js
let datafire = require('datafire');
let apitore_languagedetectionapis = require('@datafire/apitore_languagedetectionapis').actions;
let context = new datafire.Context();

apitore_languagedetectionapis.getUsingGET({}, context).then(data => {
  console.log(data);
})
```

## Description
Language detection.<BR />[Endpoint] https://api.apitore.com/api/22

## Actions
### getUsingGET
Language Detection.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/langdetect-response">langdetect-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.jsoup.LanguageResponseEntity<BR />


```js
apitore_languagedetectionapis.getUsingGET({
  "access_token": "",
  "text": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* text (string) **required** - Text [10-20 words over is recommended]

### smGetUsingGET
Language Detection.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/langdetect-response">langdetect-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.jsoup.LanguageResponseEntity<BR />


```js
apitore_languagedetectionapis.smGetUsingGET({
  "access_token": "",
  "text": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* text (string) **required** - Text [Short message like tweet is supported]

