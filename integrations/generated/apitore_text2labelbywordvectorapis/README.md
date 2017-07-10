# @datafire/apitore_text2labelbywordvectorapis
Text to label by word2vec of contents.<BR />[Endpoint] https://api.apitore.com/api/19

## Operation: getUsingGET_2
Text2Label by kmeans of word vectors.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/summarize-response">summarize-response</a><BR />&nbsp; Class: com.apitore.banana.response.summarize.LabelResponseEntity<BR />

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
    },
    "num": {
      "type": "integer",
      "format": "int32",
      "description": "num [max 10, default 1]"
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
  "$ref": "#/definitions/LabelResponseEntity"
}
```
