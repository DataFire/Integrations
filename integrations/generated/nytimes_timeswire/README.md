# @datafire/nytimes_timeswire
With the Times Newswire API, you can get links and metadata for Times articles and blog posts as soon as they are published on NYTimes.com. The Times Newswire API provides an up-to-the-minute stream of published items.

## Operation: content.json.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "The complete URL of a specific news item, URL-encoded or backslash-escaped"
    }
  },
  "additionalProperties": false,
  "required": [
    "url"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "copyright": {
      "type": "string"
    },
    "num_results": {
      "type": "integer"
    },
    "results": {
      "items": {
        "$ref": "#/definitions/Article"
      },
      "type": "array"
    },
    "status": {
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: source.section.json.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source": {
      "type": "string",
      "description": "Limits the set of items by originating source\n\nall = items from both The New York Times and The International New York Times\nnyt = New York Times items only\niht = International New York Times items only\n",
      "enum": [
        "all",
        "nyt",
        "iht"
      ]
    },
    "section": {
      "type": "string",
      "description": "Limits the set of items by one or more sections\nall | One or more section names, separated by semicolons\n\n To get all sections, specify all. To get a particular section or sections, use the section names returned by this request:\n http://api.nytimes.com/svc/news/v3/content/section-list.json\n"
    },
    "limit": {
      "type": "integer",
      "description": "Limits the number of results, between 1 and 20"
    },
    "offset": {
      "type": "integer",
      "description": "Sets the starting point of the result set"
    }
  },
  "additionalProperties": false,
  "required": [
    "source",
    "section"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "copyright": {
      "type": "string"
    },
    "num_results": {
      "type": "integer"
    },
    "results": {
      "items": {
        "$ref": "#/definitions/Article"
      },
      "type": "array"
    },
    "status": {
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: source.section.time_period.json.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source": {
      "type": "string",
      "description": "Limits the set of items by originating source\n\nall = items from both The New York Times and The International New York Times\nnyt = New York Times items only\niht = International New York Times items only\n",
      "enum": [
        "all",
        "nyt",
        "iht"
      ]
    },
    "section": {
      "type": "string",
      "description": "Limits the set of items by one or more sections\nall | One or more section names, separated by semicolons\n\n To get all sections, specify all. To get a particular section or sections, use the section names returned by this request:\n http://api.nytimes.com/svc/news/v3/content/section-list.json\n"
    },
    "time-period": {
      "type": "integer",
      "description": "Limits the set of items by time published, integer in number of hours"
    },
    "limit": {
      "type": "integer",
      "description": "Limits the number of results, between 1 and 20"
    },
    "offset": {
      "type": "integer",
      "description": "Sets the starting point of the result set"
    }
  },
  "additionalProperties": false,
  "required": [
    "source",
    "section",
    "time-period"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "copyright": {
      "type": "string"
    },
    "num_results": {
      "type": "integer"
    },
    "results": {
      "items": {
        "$ref": "#/definitions/Article"
      },
      "type": "array"
    },
    "status": {
      "type": "string"
    }
  },
  "type": "object"
}
```
