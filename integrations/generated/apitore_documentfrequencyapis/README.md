# @datafire/apitore_documentfrequencyapis
Document frequency of Wikipedia.<BR />[Endpoint] https://api.apitore.com/api/16

## Operation: getUsingGET
Document Frequency by JaWikipedia 2016-9-15 dump.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/summarize-response">summarize-response</a><BR />&nbsp; Class: com.apitore.banana.response.summarize.DocumentFrequencyResponseEntity<BR />

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
  "$ref": "#/definitions/DocumentFrequencyResponseEntity"
}
```
