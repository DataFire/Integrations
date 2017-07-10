# @datafire/xkcd
Webcomic of romance, sarcasm, math, and language.

## Operation: info.0.json.get
Fetch current comic and metadata.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comic"
}
```
## Operation: comicId.info.0.json.get
Fetch comics and metadata  by comic id.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "comicId": {
      "type": "number"
    }
  },
  "additionalProperties": false,
  "required": [
    "comicId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comic"
}
```
