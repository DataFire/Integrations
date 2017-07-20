# @datafire/apitore_kuromojiapis

Client library for Kuromoji APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_kuromojiapis
```

```js
let datafire = require('datafire');
let apitore_kuromojiapis = require('@datafire/apitore_kuromojiapis').actions;
let context = new datafire.Context();

apitore_kuromojiapis.tokenizeUsingGET_1({}, context).then(data => {
  console.log(data);
})
```

## Description
Kuromoji: japanese morphological analyzer.<BR />[Endpoint] https://api.apitore.com/api/7

## Actions
### tokenizeUsingGET_1
Kuromoji IPADIC NEologd dictionary.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/kuromoji-response">kuromoji-response</a><BR />&nbsp; Class: com.apitore.banana.response.com.atilika.kuromoji.TokenResponseEntity<BR />


```js
apitore_kuromojiapis.tokenizeUsingGET_1({
  "access_token": "",
  "text": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* text (string) **required** - Text [up to 400 characters]

### tokenizeUsingGET
Kuromoji IPADIC dictionary.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/kuromoji-response">kuromoji-response</a><BR />&nbsp; Class: com.apitore.banana.response.com.atilika.kuromoji.TokenResponseEntity<BR />


```js
apitore_kuromojiapis.tokenizeUsingGET({
  "access_token": "",
  "text": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* text (string) **required** - Text [up to 400 characters]

