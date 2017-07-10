# @datafire/apitore_sentencepieceapis_wikipedia_
SentencePiece tokenizer (wikipedia).<BR />[Endpoint] https://api.apitore.com/api/37

## Operation: getUsingGET
SentencePiece (bpe).<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/sentencepiece-response">sentencepiece-response</a><BR />&nbsp; Class: com.apitore.banana.response.com.atilika.sentencepiece.SentencePieceTokenResponseEntity<BR />

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
  "$ref": "#/definitions/SentencePieceTokenResponseEntity"
}
```
## Operation: getUsingGET_1
SentencePiece (unigram).<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/sentencepiece-response">sentencepiece-response</a><BR />&nbsp; Class: com.apitore.banana.response.com.atilika.sentencepiece.SentencePieceTokenResponseEntity<BR />

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
  "$ref": "#/definitions/SentencePieceTokenResponseEntity"
}
```
