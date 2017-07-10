# @datafire/nytimes_top_stories
The Top Stories API provides lists of articles and associated images by section.

## Operation: section.format.get
The Top Stories API returns a list of articles and associated images currently on the specified section.  Support JSON and JSONP.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "section": {
      "type": "string",
      "description": "The section the story appears in.",
      "enum": [
        "home",
        "opinion",
        "world",
        "national",
        "politics",
        "upshot",
        "nyregion",
        "business",
        "technology",
        "science",
        "health",
        "sports",
        "arts",
        "books",
        "movies",
        "theater",
        "sundayreview",
        "fashion",
        "tmagazine",
        "food",
        "travel",
        "magazine",
        "realestate",
        "automobiles",
        "obituaries",
        "insider"
      ]
    },
    "format": {
      "type": "string",
      "description": "if this is JSONP or JSON",
      "enum": [
        "json",
        "jsonp"
      ]
    },
    "callback": {
      "type": "string",
      "description": "The name of the function the API call results will be passed to. Required when using JSONP. This parameter has only one valid value per section. The format is {section_name}TopStoriesCallback.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "section",
    "format"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "results": {
      "items": {
        "$ref": "#/definitions/Article"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
