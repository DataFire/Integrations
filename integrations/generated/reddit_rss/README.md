# @datafire/reddit_rss


## Operation: frontPage
reddit: the front page of the internet

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Feed"
}
```
## Operation: subreddit
Retrieve the RSS feed

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "subreddit"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Feed"
}
```
