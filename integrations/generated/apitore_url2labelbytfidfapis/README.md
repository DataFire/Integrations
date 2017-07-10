# @datafire/apitore_url2labelbytfidfapis
Url to label by tfidf of contents.<BR />[Endpoint] https://api.apitore.com/api/20

## Operation: getUsingGET_3
Url2Label by tfidf.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/summarize-response">summarize-response</a><BR />&nbsp; Class: com.apitore.banana.response.summarize.LabelResponseEntity<BR />

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access Token"
    },
    "url": {
      "type": "string",
      "description": "url"
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
    "url"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LabelResponseEntity"
}
```
