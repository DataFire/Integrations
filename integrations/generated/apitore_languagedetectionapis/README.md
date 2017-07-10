# @datafire/apitore_languagedetectionapis
Language detection.<BR />[Endpoint] https://api.apitore.com/api/22

## Operation: getUsingGET
Language Detection.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/langdetect-response">langdetect-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.jsoup.LanguageResponseEntity<BR />

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
      "description": "Text [10-20 words over is recommended]"
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
  "$ref": "#/definitions/LanguageResponseEntity"
}
```
## Operation: smGetUsingGET
Language Detection.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/langdetect-response">langdetect-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.jsoup.LanguageResponseEntity<BR />

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
      "description": "Text [Short message like tweet is supported]"
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
  "$ref": "#/definitions/LanguageResponseEntity"
}
```
