# @datafire/nytimes_movie_reviews
With the Movie Reviews API, you can search New York Times movie reviews by keyword and get lists of NYT Critics' Picks.

## Operation: critics.resource_type.json.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resource-type": {
      "type": "string",
      "description": "all | full-time | part-time | [reviewer-name]\n\nSpecify all to get all Times reviewers, or specify full-time or part-time to get that subset. Specify a reviewer's name to get details about a particular reviewer.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "resource-type"
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
        "$ref": "#/definitions/Critic"
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
## Operation: reviews.search.json.get


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "query": {
      "type": "string",
      "description": "Search keywords; matches movie title and indexed terms\n\nTo limit your search to exact matches only, surround your search string with single quotation marks (e.g., query='28+days+later'). Otherwise, responses will include partial matches (\"head words\") as well as exact matches (e.g., president will match president, presidents and presidential).\n  \n  If you specify multiple terms without quotation marks, they will be combined in an OR search.\n  \n  If you omit the query parameter, your request will be equivalent to a reviews and NYT Critics' Picks request.\n"
    },
    "critics-pick": {
      "type": "string",
      "description": "Set this parameter to Y to limit the results to NYT Critics' Picks. To get only those movies that have not been highlighted by Times critics, specify critics-pick=N. (To get all reviews regardless of critics-pick status, simply omit this parameter.)\n",
      "enum": [
        "Y",
        "N"
      ]
    },
    "reviewer": {
      "type": "string",
      "description": "Include this parameter to limit your results to reviews by a specific critic. Reviewer names should be formatted like this: Manohla Dargis.\n"
    },
    "publication-date": {
      "type": "string",
      "description": "Single date: YYYY-MM-DD\n\nStart and end date: YYYY-MM-DD;YYYY-MM-DD\n\nThe publication-date is the date the review was first published in The Times.\n"
    },
    "opening-date": {
      "type": "string",
      "description": "Single date: YYYY-MM-DD\n\nStart and end date: YYYY-MM-DD;YYYY-MM-DD\n\nThe opening-date is the date the movie's opening date in the New York region.\n"
    },
    "offset": {
      "type": "integer",
      "description": "Positive integer, multiple of 20"
    },
    "order": {
      "type": "string",
      "description": "Sets the sort order of the results.\n\nResults ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.\n\nIf you do not specify a sort order, the results will be ordered by publication-date.\n"
    }
  },
  "additionalProperties": false
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
        "$ref": "#/definitions/Movie"
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
## Operation: reviews.resource_type.json.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resource-type": {
      "type": "string",
      "description": "Specify all to retrieve all reviews, including NYT Critics' Picks.\n\nSpecify picks to get NYT Critics' Picks currently in theaters.\n\n",
      "enum": [
        "all",
        "picks"
      ]
    },
    "offset": {
      "type": "integer",
      "description": "Positive integer, multiple of 20"
    },
    "order": {
      "type": "string",
      "description": "Sets the sort order of the results.\n\nResults ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.\n\nIf you do not specify a sort order, the results will be ordered by publication-date.\n",
      "enum": [
        "by-title",
        "by-publication-date",
        "by-opening-date"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "resource-type"
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
        "$ref": "#/definitions/Movie"
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
