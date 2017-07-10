# @datafire/apitore_2chmatomefeedsapis
Various 2ch matome feeds.<BR />[Endpoint] https://api.apitore.com/api/29

## Operation: feedUsingGET
2ch matome feeds.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/rome-response">rome-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.rome.FeedResponseEntity<BR />

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access Token"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Page number [page x 10 feeds]"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FeedResponseEntity"
}
```
