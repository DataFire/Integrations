# @datafire/apitore_rss2jsonapis
Rss to Json.<BR />[Endpoint] https://api.apitore.com/api/28

## Operation: rss2jsonUsingGET
RSS to Json.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/rome-response">rome-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.rome.SyndFeedResponseEntity<BR />

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access Token"
    },
    "rss": {
      "type": "string",
      "description": "RSS"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "rss"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SyndFeedResponseEntity"
}
```
