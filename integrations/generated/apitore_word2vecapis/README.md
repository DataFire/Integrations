# @datafire/apitore_word2vecapis
Word2Vec.<BR />[Endpoint] https://api.apitore.com/api/8

## Operation: analogyUsingGET
Word2Vec JaWikipedia 2016-9-15 dump.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.word2vec.AnalogyResponseEntity<BR />

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access Token"
    },
    "positives": {
      "type": "string",
      "description": "positive1 positive2 ...[space separated strings]"
    },
    "negatives": {
      "type": "string",
      "description": "negative1 negative2 ...[space separated strings]"
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
    "positives"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AnalogyResponseEntity"
}
```
## Operation: distanceUsingGET_1
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
## Operation: similarityUsingGET
Word2Vec JaWikipedia 2016-9-15 dump.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/word2vec-response">word2vec-response</a><BR />&nbsp; Class: com.apitore.banana.response.word2vec.SimilarityResponseEntity<BR />

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access Token"
    },
    "word1": {
      "type": "string",
      "description": "word1"
    },
    "word2": {
      "type": "string",
      "description": "word2"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "word1",
    "word2"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SimilarityResponseEntity"
}
```
## Operation: vec_distanceUsingGET
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
    "vector": {
      "type": "array",
      "description": "vector [length 200]"
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
    "vector"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VectorDistanceResponseEntity"
}
```
## Operation: wordvectorUsingGET_1
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
