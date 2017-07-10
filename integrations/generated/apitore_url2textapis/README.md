# @datafire/apitore_url2textapis
Url to Text.<BR />[Endpoint] https://api.apitore.com/api/13

## Operation: url2textUsingGET
Jsoup Web scraper.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/jsoup-response">jsoup-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.jsoup.TextResponseEntity<BR />

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
      "description": "URL"
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
  "$ref": "#/definitions/TextResponseEntity"
}
```
