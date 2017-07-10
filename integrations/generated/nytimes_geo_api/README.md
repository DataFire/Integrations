# @datafire/nytimes_geo_api
The Geographic API extends the Semantic API, using a linked data approach to enhance location concepts used in The New York Times' controlled vocabulary and data resources which combine them with the GeoNames database, an authoritative and free to use database of global geographical places, names and features.


## Operation: query.json.get
Geographic API

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "A displayable name for the specified place."
    },
    "latitude": {
      "type": "string",
      "description": "The latitude of the specified place.\n"
    },
    "longitude": {
      "type": "string",
      "description": "The longitude of the specified place."
    },
    "elevation": {
      "type": "integer",
      "description": "The elevation of the specified place, in meters."
    },
    "sw": {
      "type": "string",
      "description": "Along with ne, forms a bounded box using the longitude and latitude coordinates specified as the southwest corner. The search results are limited to the resulting box. Two float values, separated by a comma `latitude,longitude` <br/> The ne parameter is required to use this parameter."
    },
    "query": {
      "type": "string",
      "description": "Search keywords to perform a text search on the fields: web_description, event_name and venue_name. 'AND' searches can be performed by wrapping query terms in quotes. If you do not specify a query, all results will be returned.\n"
    },
    "filter": {
      "type": "string",
      "description": "Filters search results based on the facets provided.  For more information on the values you can filter on, see Facets.\n"
    },
    "date_range": {
      "type": "string",
      "description": "Start date to end date in the following format- YYYY-MM-DD:YYYY-MM-DD"
    },
    "facets": {
      "type": "integer",
      "description": "When facets is set to 1, a count of all facets will be included in the response.",
      "enum": [
        0,
        1
      ]
    },
    "sort": {
      "type": "string",
      "description": "Sorts your results on the fields specified. <br/> `sort_value1+[asc | desc],sort_value2+[asc|desc],[...]`<br/> Appending +asc to a facet or response will sort results on that value in ascending order. Appending +desc to a facet or response  will sort results in descending order. You can sort on multiple fields. You can sort on any facet. For the list of responses you can sort on, see the Sortable Field column in the Response table. <br/><br/>If you are doing a spatial search with the ll parameter, you can also sort by the distance from the center of the search: dist+[asc | desc] <br/> **Note:** either +asc or +desc is required when using the sort parameter.\n"
    },
    "limit": {
      "type": "integer",
      "description": "Limits the number of results returned"
    },
    "offset": {
      "type": "integer",
      "description": "Sets the starting point of the result set"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "results": {
      "items": {
        "$ref": "#/definitions/Event"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
