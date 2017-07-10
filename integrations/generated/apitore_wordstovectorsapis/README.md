# @datafire/apitore_wordstovectorsapis
Word to vectors.<BR />[Endpoint] https://api.apitore.com/api/10

## Operation: wordvectorUsingGET
Word2Vec JaWikipedia 2016-9-15 dump.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.word2vec.WordVectorResponseEntity<BR />

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
  "$ref": "#/definitions/WordVectorResponseEntity"
}
```
