# @datafire/omdbapi
The Open Movie Database. The OMDb API is a free web service to obtain movie information, all content and images on the site are contributed and maintained by our users.

## Operation: .get
Find a movie, series or episode from the OMDb by title, IMDb-id or by free-text search

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "t": {
      "type": "string",
      "description": "Movie title to search for. One of t, i or s is required."
    },
    "i": {
      "type": "string",
      "description": "A valid IMDb ID (e.g. tt1285016). One of t, i or s is required."
    },
    "s": {
      "type": "string",
      "description": "Movie title to search for. One of t, i or s is required."
    },
    "y": {
      "type": "integer",
      "description": "Year of release."
    },
    "type": {
      "type": "string",
      "description": "Type of result to return.",
      "enum": [
        "movie",
        "series",
        "episode"
      ]
    },
    "plot": {
      "type": "string",
      "description": "Return short or full plot.",
      "enum": [
        "short",
        "full"
      ]
    },
    "tomatoes": {
      "type": "boolean",
      "description": "Include Rotten Tomatoes ratings."
    },
    "r": {
      "type": "string",
      "description": "The data type to return.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "v": {
      "type": "integer",
      "description": "API version (reserved for future use)."
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Page number to return."
    },
    "callback": {
      "type": "string",
      "description": "JSONP callback name."
    }
  },
  "additionalProperties": false,
  "required": [
    "r"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/combinedResult"
}
```
