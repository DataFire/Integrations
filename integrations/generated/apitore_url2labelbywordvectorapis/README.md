# @datafire/apitore_url2labelbywordvectorapis

Client library for Url2Label by word vector APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_url2labelbywordvectorapis
```

```js
let datafire = require('datafire');
let apitore_url2labelbywordvectorapis = require('@datafire/apitore_url2labelbywordvectorapis').actions;
let context = new datafire.Context();

apitore_url2labelbywordvectorapis.getUsingGET_4({}, context).then(data => {
  console.log(data);
})
```

## Description
Url to label by word2vec of contents.<BR />[Endpoint] https://api.apitore.com/api/21

## Actions
### getUsingGET_4
Url2Label by kmeans of word vectors.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/summarize-response">summarize-response</a><BR />&nbsp; Class: com.apitore.banana.response.summarize.LabelResponseEntity<BR />


```js
apitore_url2labelbywordvectorapis.getUsingGET_4({
  "access_token": "",
  "url": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* url (string) **required** - url
* num (integer) - num [max 10, default 1]

