# @datafire/apitore_tweetsummarizationapis
Tweet summarization.<BR />[Endpoint] https://api.apitore.com/api/27

## Operation: getUsingGET
Tweet summarization API.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/twitter-response">twitter-response</a><BR />&nbsp; Class: com.apitore.banana.response.twitter.TwitterSummarizeResponseEntity<BR />

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
    },
    "num": {
      "type": "integer",
      "format": "int32",
      "description": "Numof summarization tweets."
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
  "$ref": "#/definitions/TwitterSummarizeResponseEntity"
}
```
