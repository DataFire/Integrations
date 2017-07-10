# @datafire/apitore_text2labelbytfidfapis
Text to label by tfidf of contents.<BR />[Endpoint] https://api.apitore.com/api/18

## Operation: getUsingGET_1
Text2Label by tfidf.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/summarize-response">summarize-response</a><BR />&nbsp; Class: com.apitore.banana.response.summarize.LabelResponseEntity<BR />

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
