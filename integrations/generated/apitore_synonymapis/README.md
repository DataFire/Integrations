# @datafire/apitore_synonymapis
Return synonymous words. (equal to "word2vec distance")<BR />[Endpoint] https://api.apitore.com/api/9

## Operation: distanceUsingGET
Word2Vec JaWikipedia 2016-9-15 dump.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.word2vec.DistanceResponseEntity<BR />

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access Token"
    },
    "word": {
      "type": "string",
      "description": "word"
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
    "word"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DistanceResponseEntity"
}
```
