# @datafire/nytimes_times_tags
With the TimesTags API, you can mine the riches of the New York Times tag set. The TimesTags service matches your query to the controlled vocabularies that fuel NYTimes.com metadata. You supply a string of characters, and the service returns a ranked list of suggested terms.

## Operation: timestags.json.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "Your search query"
    },
    "filter": {
      "type": "string",
      "description": "If you do not specify a value for filter (see the Optional Parameters), your query will be matched to tags in all four Times dictionaries: subject, geographic location, organization and person. To use more than one, separate with commas.\n",
      "enum": [
        "Des",
        "Geo",
        "Org",
        "Per"
      ]
    },
    "max": {
      "type": "integer",
      "description": "Sets the maximum number of results"
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "items": {
      "type": "string"
    },
    "type": "array"
  },
  "type": "array"
}
```
