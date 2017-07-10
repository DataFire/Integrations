# @datafire/apitore_url2htmlapis
Url to Html.<BR />[Endpoint] https://api.apitore.com/api/12

## Operation: url2htmlUsingGET
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
