# @datafire/apitore_twitterapiswithword2vecqueryexpansion
Call Twitter APIs with word2vec query expansion.<BR />[Endpoint] https://api.apitore.com/api/24

## Operation: searchUsingGET_2
Tweets search API with Word2Vec query expansion.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/twitter-response">twitter-response</a><BR />&nbsp; Class: com.apitore.banana.response.twitter.TwitterResponseEntity<BR />

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access Token"
    },
    "q": {
      "type": "string",
      "description": "Search query"
    },
    "sinceId": {
      "type": "integer",
      "format": "int64",
      "description": "Get after this id."
    },
    "maxId": {
      "type": "integer",
      "format": "int64",
      "description": "Get before this id."
    },
    "iter": {
      "type": "integer",
      "format": "int32",
      "description": "Numof search requests. Return up to 100 x iter tweets."
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "q"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TwitterResponseEntity"
}
```
