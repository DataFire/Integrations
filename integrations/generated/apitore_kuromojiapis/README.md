# @datafire/apitore_kuromojiapis
Kuromoji: japanese morphological analyzer.<BR />[Endpoint] https://api.apitore.com/api/7

## Operation: tokenizeUsingGET_1
Kuromoji IPADIC NEologd dictionary.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/kuromoji-response">kuromoji-response</a><BR />&nbsp; Class: com.apitore.banana.response.com.atilika.kuromoji.TokenResponseEntity<BR />

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
      "description": "Text [up to 400 characters]"
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
  "$ref": "#/definitions/TokenResponseEntity"
}
```
## Operation: tokenizeUsingGET
Kuromoji IPADIC dictionary.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/kuromoji-response">kuromoji-response</a><BR />&nbsp; Class: com.apitore.banana.response.com.atilika.kuromoji.TokenResponseEntity<BR />

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
      "description": "Text [up to 400 characters]"
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
  "$ref": "#/definitions/TokenResponseEntity"
}
```
