# @datafire/apitore_sentenceseparatorapis
Simple sentence separator.<BR />[Endpoint] https://api.apitore.com/api/17

## Operation: heuristicsUsingGET
Sentence separator.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/summarize-response">summarize-response</a><BR />&nbsp; Class: com.apitore.banana.response.summarize.SentenceResponseEntity<BR />

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
  "$ref": "#/definitions/SentenceResponseEntity"
}
```
