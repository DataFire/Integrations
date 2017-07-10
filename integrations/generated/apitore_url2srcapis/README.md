# @datafire/apitore_url2srcapis
Url to Image src urls.<BR />[Endpoint] https://api.apitore.com/api/15

## Operation: url2srcUsingGET
Jsoup Web scraper.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/jsoup-response">jsoup-response</a><BR />&nbsp; Class: com.apitore.banana.response.org.jsoup.LinkResponseEntity<BR />

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
  "$ref": "#/definitions/LinkResponseEntity"
}
```
