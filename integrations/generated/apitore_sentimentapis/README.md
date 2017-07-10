# @datafire/apitore_sentimentapis
Japanese sentiment analyzer.<BR />[Endpoint] https://api.apitore.com/api/11

## Operation: predictUsingGET
Sentiment Analysis, last update at 2016-10-16.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.sentiment.SentimentResponseEntity<BR />

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access Token"
    },
    "text": {
      "type": "string",
      "description": "text"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "text"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SentimentResponseEntity"
}
```
