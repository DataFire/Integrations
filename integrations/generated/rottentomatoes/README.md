# @datafire/rottentomatoes
Test our API services using I/O Docs.

## Operation: ListsDirectoryTopLevelLists


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: DVDListsDirectoryTopLevelLists


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: CurrentReleaseDVDsDVDLists


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page_limit": {
      "type": "string",
      "description": "The amount of new release dvds to show per page"
    },
    "page": {
      "type": "string",
      "description": "The selected page of current DVD releases"
    },
    "country": {
      "type": "string",
      "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: NewReleaseDVDsDVDLists


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page_limit": {
      "type": "string",
      "description": "The amount of new release dvds to show per page"
    },
    "page": {
      "type": "string",
      "description": "The selected page of new release DVDs"
    },
    "country": {
      "type": "string",
      "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: TopRentalsDVDLists


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "string",
      "description": "Limits the number of top rentals returned"
    },
    "country": {
      "type": "string",
      "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: UpcomingDVDsDVDLists


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page_limit": {
      "type": "string",
      "description": "The amount of upcoming dvds to show per page"
    },
    "page": {
      "type": "string",
      "description": "The selected page of upcoming DVDs"
    },
    "country": {
      "type": "string",
      "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: MovieListsDirectoryTopLevelLists


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: BoxOfficeMovieLists


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "string",
      "description": "Limits the number of movies returned"
    },
    "country": {
      "type": "string",
      "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: InTheatersMovieLists


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page_limit": {
      "type": "string",
      "description": "The amount of movies in theaters to show per page"
    },
    "page": {
      "type": "string",
      "description": "The selected page of in theaters movies"
    },
    "country": {
      "type": "string",
      "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: OpeningMoviesMovieLists


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "string",
      "description": "Limits the number of opening movies returned"
    },
    "country": {
      "type": "string",
      "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: UpcomingMoviesMovieLists


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page_limit": {
      "type": "string",
      "description": "The amount of upcoming movies to show per page"
    },
    "page": {
      "type": "string",
      "description": "The selected page of upcoming movies"
    },
    "country": {
      "type": "string",
      "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: MoviesAliasDetailedInfo


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID"
    },
    "type": {
      "type": "string",
      "description": "Only supports imdb lookup at this time"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: MoviesSearchSearch


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "q": {
      "type": "string",
      "description": "The plain text search query to search for a movie. Remember to URI encode this!"
    },
    "page_limit": {
      "type": "string",
      "description": "The amount of movie search results to show per page"
    },
    "page": {
      "type": "string",
      "description": "The selected page of movie search results"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: MoviesInfoDetailedInfo


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: CastInfoDetailedInfo


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: MovieClipsDetailedInfo


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: MoviesReviewsDetailedInfo


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID"
    },
    "review_type": {
      "type": "string",
      "description": "3 different review types are possible: 'all', 'top_critic' and 'dvd'. 'top_critic' shows all the Rotten Tomatoes designated top critics. 'dvd' pulls the reviews given on the DVD of the movie. 'all' as the name implies retrieves all reviews."
    },
    "page_limit": {
      "type": "string",
      "description": "The number of reviews to show per page"
    },
    "page": {
      "type": "string",
      "description": "The selected page of reviews"
    },
    "country": {
      "type": "string",
      "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: MoviesSimilarDetailedInfo


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID"
    },
    "limit": {
      "type": "string",
      "description": "Limit the number of similar movies to show"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
