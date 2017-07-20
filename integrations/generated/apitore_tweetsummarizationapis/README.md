# @datafire/apitore_tweetsummarizationapis

Client library for Tweet summarization APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_tweetsummarizationapis
```

```js
let datafire = require('datafire');
let apitore_tweetsummarizationapis = require('@datafire/apitore_tweetsummarizationapis').actions;
let context = new datafire.Context();

apitore_tweetsummarizationapis.getUsingGET({}, context).then(data => {
  console.log(data);
})
```

## Description
Tweet summarization.<BR />[Endpoint] https://api.apitore.com/api/27

## Actions
### getUsingGET
Tweet summarization API.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/twitter-response">twitter-response</a><BR />&nbsp; Class: com.apitore.banana.response.twitter.TwitterSummarizeResponseEntity<BR />


```js
apitore_tweetsummarizationapis.getUsingGET({
  "access_token": "",
  "q": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* q (string) **required** - Search query
* sinceId (integer) - Get after this id.
* maxId (integer) - Get before this id.
* iter (integer) - Numof search requests. Return up to 100 x iter tweets.
* num (integer) - Numof summarization tweets.

