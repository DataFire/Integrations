# @datafire/apitore_text2labelbywordvectorapis

Client library for Text2Label by word vector APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_text2labelbywordvectorapis
```

```js
let datafire = require('datafire');
let apitore_text2labelbywordvectorapis = require('@datafire/apitore_text2labelbywordvectorapis').create();

apitore_text2labelbywordvectorapis.getUsingGET_2({}).then(data => {
  console.log(data);
})
```

## Description
Text to label by word2vec of contents.<BR />[Endpoint] https://api.apitore.com/api/19

## Actions
### getUsingGET_2
Text2Label by kmeans of word vectors.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/summarize-response">summarize-response</a><BR />&nbsp; Class: com.apitore.banana.response.summarize.LabelResponseEntity<BR />


```js
apitore_text2labelbywordvectorapis.getUsingGET_2({
  "access_token": "",
  "text": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* text (string) **required** - text
* num (integer) - num [max 10, default 1]

